import PersonaluserVue from 'com_root/login/personaluser.vue';
import CompanyuserVue from 'com_root/login/companyuser.vue';

let model

class Register extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          info:{
            type:'single',
          },
          tips:'',
          usertype: '',
          user:[
            {
              title:'普通用户',
              subtitle:'',
              list:[
                '3D预览，收藏商品',
                '搭配我的房间',
                '预约设计师出方案',
                '画户型，上传至搭配家户型库赚现金',
                '更多功能服务敬请期待...'
              ]
            }
          ],
          designer:[
            {
              title:'销售设计师',
              subtitle:'',
              list:[
                '专属搭配家平台，品牌厂商或设计公司',
                '给客户出专业方案，转化为销售订单',
                '搭建样板间和设计作品，推送至搭配家样板间库',
                '设计定制家具，推送至搭配家家具商城',
                '更多功能服务敬请期待...'
              ],
            }
          ],
          dealer:[
            {
              title:'经销商',
              subtitle:'入驻条件：',
              list:[
                '认同“共建共享共赢”的合作价值;',
                '拥有家居行业合法注册品牌的正式授权',
                '有一定数量的销售人员或设计师队伍'
              ],
            },
            {
              title:'',
              subtitle:'享受特权：',
              list:[
                '享有专属二级网站、家具商城、案例展示中心等功能模块',
                '享有商品管理、客户关系管理、订单中心等功能模块',
                '享有一对一建模、样板间、户型、渲染、大客户定制等企业级服务',
                '其他特权逐步开放升级中...'
              ],
            }
          ],
          brander:[
            {
              title:'品牌商',
              subtitle:'入驻条件：',
              list:[
                '认同“共建共享共赢”的合作价值',
                '拥有家居行业合法注册品牌及对应商品',
                '商品有一定的图文信息基础'
              ],
            },
            {
              title:'',
              subtitle:'享受特权：',
              list:[
                '享有专属二级网站、家具商城、案例展示中心等功能模块',
                '享有商品管理、客户关系管理、订单中心等功能模块',
                '享有一对一建模、样板间、户型、渲染、大客户定制等企业级服务',
                '其他特权逐步开放升级中...'
              ],
            }
          ]
        },
        methods:{
          getusertypes: function(str) {
            //普通用户
            if(str == 'buyer') {
              model.mvvm.tips = model.mvvm.user;
            }
            //销售设计师
            if(str == 'designer') {
              model.mvvm.tips = model.mvvm.designer;
            }

            //经销商
            if(str == 'dealer') {
              model.mvvm.tips = model.mvvm.dealer;
            }

            //品牌商
            if(str == 'brander') {
              model.mvvm.tips = model.mvvm.brander;
            }
          }
        },
        components: {
          'vue-personaluser': PersonaluserVue,
          'vue-companyuser': CompanyuserVue
        }
      }
    })
    model = this
    this.init();
  }

  //初始数据
  init () {
    this.register(['choiceSignalUser', 'choiceCompanyUser', 'submitSuccess']);
    model.mvvm.usertype = urltype || 'designer';
    model.mvvm.tips = model.mvvm.usertype == 'buyer' ? model.mvvm.user : model.mvvm.designer;
  }

  choiceSignalUser() {
    model.mvvm.info.type = 'single';
    model.mvvm.usertype = 'designer';
    model.mvvm.tips = model.mvvm.designer;
  }

  choiceCompanyUser() {
    model.mvvm.info.type = 'company';
    model.mvvm.usertype = 'dealer';
    model.mvvm.tips = model.mvvm.dealer;
  }

  submitSuccess() {
    $('.success-bg').addClass('hidden');
    window.location.href = '/'
  }
}


Core.expose('login', 'register', Register)
