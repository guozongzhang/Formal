let model;

class Signup extends Basic {
  constructor(){
    super();
    model = this;

    this.register(['submit'])
  }

  submit(){
    console.log($('#form-signup'))
    if(!$('#form-signup').valid()){return false}
    $.post('/signup', model.mvvm.mem, (data)=> {
      Core.alert('success', '注册成功')
    })
    
  }
}
Core.expose('home', 'signup', Signup)
