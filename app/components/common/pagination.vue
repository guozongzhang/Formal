<template lang="jade">
  div.pagination-vue.vue-component
    ul.pagination(:id="'pagination-' + flag")
</template>

<script>
  require('twbs-pagination')

  let startPage = parseInt(SITE.query.page) || 1
  let default_config = {
    totalPages: 35,
    visiblePages: 7,
    pageClass: 'page-item',
    anchorClass: 'page-link',
    first: '首页',
    next: '下一页',
    prev: '上一页',
    last: '末页',
    startPage: startPage,
    initiateStartPageClick: false,
    onPageClick: function (event, page) {
        let baseurl = window.location.href.split('?')[0]
        SITE.query.page = page
        let params = []
        for(let filed in SITE.query) {
          params.push(`${filed}=${SITE.query[filed]}`)
        }
        window.location.href = `?${params.join('&')}`
    }
  }

  
  export default {
    props: ['flag', 'totalcount', 'pagesize', 'config'],
    data() {
      return {
      }
    },
    watch: {
      totalcount: function () {
        this.init()
      }
    },
    methods: {
      init: function () {
        default_config = _.extend(this.config || {}, default_config);
        default_config.totalPages = Math.ceil(this.totalcount / this.pagesize)
        if(default_config.startPage > this.total) {
          default_config.startPage = this.total
        }

        $(`#pagination-${this.flag}`).twbsPagination(default_config)
      }
    },
    mounted() {
      
    }
      
  }

</script>
<style lang="sass">
  .page-item a{
    text-decoration: none
  }
  
  .page-link {
    color: #a0a0a0
  }

  .page-item.active .page-link, .page-item.active .page-link:focus, .page-item.active .page-link:hover {
    background-color: #F34C4A;
    border-color: #F34C4A;
  }
</style>
