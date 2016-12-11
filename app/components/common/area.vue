<template lang="jade">
  div.row
    div(v-bind:class="showDistrict == true && showCity == true ? 'col-md-4' : showCity == true ? 'col-md-6' : 'col-md-12'")
      select(class="form-control" v-model="provinceMe" @change="switchInit")
        option(value="-1") #{"=省="}
        option(v-for="p in provinces" v-bind:value="p.id") {{p.ProvinceName}}
    div(v-bind:class="showDistrict == true ? 'col-md-4' : 'col-md-6'" v-show="showCity")
      select(class="form-control"  v-model="cityMe"  @change="switchInit")
        option(value="-1") #{"=市="}
        option(v-for="c in citys"  v-bind:value="c.id") {{c.CityName}}
    div.col-md-4(v-show="showDistrict")
      select(class="form-control" v-model="districtMe" @change="switchInit")
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
      districts: [],
      provinceMe: this.province,
      cityMe: this.city,
      districtMe: this.district
    }
  },
  computed: {

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
        this.provinceMe = -1
        this.cityMe = -1
        this.citys = []
        this.districtMe = -1
        this.districts = []
      }
    },

    // 切换省份
    switchProvince: function() {
      if (!(parseInt(this.provinceMe) + 2 > 0)) {
        this.provinceMe = -1
      }
        
      if (!isinit) {
        this.cityMe = -1
        this.districtMe = -1
        this.districts = []
      }

      if(this.provinceMe == -1){return}
      City.order('id').where({ProvinceID: this.provinceMe}).limit(2000).all((data)=> {
        this.citys = this.filterArea(this.allowcs, data)
        
      })

    },

    // 切换城市
    switchCity: function() { 
      if (!(parseInt(this.cityMe) + 2 > 0)) {
        this.cityMe = -1
      } 

      if (!isinit) {this.districtMe = -1}
      if(this.cityMe == -1){return}
        
      District.order('id').where({CityID: this.cityMe}).limit(2000).all((data)=> {
        this.districts = this.filterArea(this.allowds, data)
      })
    },
    
    // 切换区
    switchDistrict: function(){ 
      if (!(parseInt(this.districtMe) + 2 > 0)) {
        this.districtMe = -1;
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
    this.$watch('provinceMe', function () {
      this.switchProvince();
      this.$emit('syncData', 'province_poi_province', this.provinceMe);
    })

    this.$watch('cityMe', function () {
      this.switchCity();
      this.$emit('syncData', 'city_poi_city', this.cityMe);
    })

    this.$watch('districtMe', function () {
      this.switchDistrict();
      this.$emit('syncData', 'district_poi_district', this.districtMe);
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
