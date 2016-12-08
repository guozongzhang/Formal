<template lang="jade">
  div.map-vue.vue-component
    div(:style="{width: width || '100%', height: (height || 400) + 'px'}" v-bind:id="flag")
</template>

<script>
  let local, map
  export default {
    props: ['flag', 'width', 'height', 'location', 'markers', 'center'],
    data() {
      return {
      }
    },
    methods: {
      init: function(){
        map = new BMap.Map(this.flag); 
        map.centerAndZoom(this.center || '中国');
        map.enableScrollWheelZoom();
        local = new BMap.LocalSearch(map, {
          renderOptions:{map: map}
        })
        this.watchMarkers()
        
      },
      locate: function (val) {
        local.search(val);
      },

      // 添加标注
      addMarker: function (addr, label, callback, extra){
        return new Promise(resolve => {        
          this.geocodeSearch(addr).then(point => {
            if(!point) {
              resolve()
            } else {
              var marker = new BMap.Marker(point,);
              map.addOverlay(marker);
              if (label != '') {
                marker.setLabel(label);
              }
              marker.addEventListener("click", callback);

              // 自定义参数，用于标识当前marker
              for (let key in extra)
              {
                 marker[key] = extra[key]
              }
              resolve()
            }
            
          })
        })
      },

      // 地址解析
      geocodeSearch: function (addr){
        let myGeo = new BMap.Geocoder();
        return new Promise(resolve=> {
          myGeo.getPoint(addr, function(point){
            if(point) {
              resolve(new BMap.Point(point.lng, point.lat))
            }else {
              resolve()
            }
          });
        })
      },

      watchMarkers: function () {
        let model = this
        let val = this.markers
        if(!this.markers.data || this.markers.data.length < 1) { return }
        let actions = val.data.map(item => {
          return model.addMarker(item.addr, '', val.callback, item.extra)
        })

        return Promise.all(actions)
      }
    },
    watch: { 
      location: function (val) {
        this.locate(val)
      },
      markers: function () {
        this.watchMarkers()
      }
    },
    mounted() { 
      this.init()
    }
  }

</script>
<style lang="sass">
</style>

