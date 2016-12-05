<template lang="jade">
  div.row
    div(v-bind:class="showDistrict == true && showCity == true ? 'col-md-4' : 'col-md-6'")
      select(class="form-control" v-model="province" @change="switchInit")
        option(value="-1") #{"=省="}
        option(v-for="p in provinces" v-bind:value="p.id") {{p.ProvinceName}}
    div(v-bind:class="showDistrict == true ? 'col-md-4' : 'col-md-6'" v-show="showCity")
      select(class="form-control"  v-model="city"  @change="switchInit")
        option(value="-1") #{"=市="}
        option(v-for="c in citys"  v-bind:value="c.id") {{c.CityName}}
    div.col-md-4(v-show="showDistrict")
      select(class="form-control" v-model="district" @change="switchInit")
        option(value="-1") #{"=区="}
        option(v-for="d in districts" v-bind:value="d.id") {{d.DistrictName}}
</template>


<script>
let Province = AV.extend('province');
let City = AV.extend('city');
let District = AV.extend('district');
let isinit = true

export default {
  props: ['province', 'city', 'district', 'allowps', 'allowcs', 'allowds','showDistrict', 'showCity'],
  data () {
    return {
      provinces: [],
      citys: [],
      districts: []
    }
  },
  methods: {
    /**
     * 根据allowps,allowcs,allowds 过滤区域
     */
    filterArea: function(allowwhats, data, canbeempty){
      let areas = (allowwhats && allowwhats.length > 0) ? _.filter(data.items, (item)=> {
        return allowwhats.indexOf(item.id.toString()) >= 0
      }) : data.items

      return areas.length < 1 && !canbeempty  ? data.items : areas 
    },

    // 初始化省份
    initProvince: function(){
      Province.order('id').limit(2000).all((data)=> {
        this.provinces = this.filterArea(this.allowps, data, true)
      })

      if (!isinit) {
        this.province = -1
        this.city = -1
        this.citys = []
        this.district = -1
        this.districts = []
      }
    },

    // 切换省份
    switchProvince: function() {
      if (!(parseInt(this.province) + 2 > 0)) {
        this.province = -1
      }
        
      if (!isinit) {
        this.city = -1
        this.district = -1
        this.districts = []
      }

      if(this.province == -1){return}
      City.order('id').where({ProvinceID: this.province}).limit(2000).all((data)=> {
        this.citys = this.filterArea(this.allowcs, data)
      })

    },

    // 切换城市
    switchCity: function() { 
      console.log('city', this.city)
      if (!(parseInt(this.city) + 2 > 0)) {
        this.city = -1
      } 

      if (!isinit) {this.district = -1}
      if(this.city == -1){return}
        
      District.order('id').where({CityID: this.city}).limit(2000).all((data)=> {
        this.districts = this.filterArea(this.allowds, data)
      })
    },
    
    // 切换区
    switchDistrict: function(){ 
      if (!(parseInt(this.district) + 2 > 0)) {
        this.district = -1;
      }
    },

    // 将组件状态置为非初始化
    switchInit: function(){
      isinit = false;
    }


  },
  mounted() {
    isinit = true;
    // 监控省市区值得变化
    this.$watch('province', function () {
      this.switchProvince();
    })

    this.$watch('city', function () {
      this.switchCity();
    })

    this.$watch('district', function () {
      this.switchDistrict();
    })

    this.$watch('allowps', function () {
      this.initProvince();
    })
    
    this.initProvince();
    this.switchProvince();
    this.switchCity();
    this.switchDistrict();
    
  }
}
</script>
