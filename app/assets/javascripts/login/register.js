import PersonaluserVue from 'com_root/login/personaluser.vue';

let model

class Register extends Basic {
  constructor(){
    super({
      vue: {
        data:{
          info:{
            type:'single',
            identity: 'designer',
            companytype: 'brand'
          }
        },
        components: {
          'vue-personaluser': PersonaluserVue
        }
      }
    })
    model = this
    this.init();
  }

  //初始数据
  init () {
    this.register(['choiceSignalUser', 'choiceCompanyUser'])
  }

  choiceSignalUser() {
    model.mvvm.info.type = 'single';
  }

  choiceCompanyUser() {
    model.mvvm.info.type = 'company';
  }
}


Core.expose('login', 'register', Register)
