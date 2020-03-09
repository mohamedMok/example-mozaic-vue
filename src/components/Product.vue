<template>
  <div id="product" class="app">
    <div class="fake-header" >
    </div>
      <div class="ml-flexy ml-flexy__col ml-flexy__col--initial mu-pb-200" >
          <ProductHeader />
      </div>
      <div class="ml-container example">
        <div class="ml-flexy ml-flexy--gutter ">
          <div class="ml-flexy__col--1of6 ">
            <img src="https://m2.lmcdn.fr/media/1/5e228f8e475ea7422a9a4b84/.png?width=60&format=jpg" class="first mu-pr-125 mu-pl-125" />
          </div>
          <div class="ml-flexy__col middle">
            <div class="">
              <img src="https://m2.lmcdn.fr/media/1/5e228f8e475ea7422a9a4b84/.png?width=350&format=jpg" class="caroussel" />
            </div>
          </div>
          <div class="ml-flexy__col last">
            <div class="example__item">
              <ProductInfo />
            </div>
          </div>
        </div>
      </div>
      <div class="fake-sub" >
    </div>
    <div class="fake-title" >
    </div>
    <div class="ml-flexy">
      <div class="ml-flexy__col ml-flexy__col--1of2">
        <div class="fake-cat"></div>
        <div class="fake-cat"></div>
        <div class="fake-cat"></div>
      </div>
      <div class="ml-flexy__col ml-flexy__col--1of2">
        <div class="fake-cat"></div>
        <div class="fake-cat"></div>
        <div class="fake-cat"></div>
      </div>
    </div>
  </div>
</template>

<script>
import userIcon from '@mozaic-ds/icons/svg/User_Account_Profile--View_48px.svg';
import ProductHeader from './ProductHeader';
import ProductInfo from './ProductInfo';


export default {
  name: 'app',
  components: {
    ProductHeader,
    ProductInfo
  },
  data: function (){
    return {
        userIcon,
      idEmail: "idEmail",
      idPwd: "idPwd",
      isValid: false,
      isEmailInvalid: false,
      isPwdValid: false,
      isPwdInvalid: false,
      pattern: "",
      myInputValue: "",
      emailErrorMessage: "",
      emails: ['momo@gmail.com', 'toto@gmail.com', 'titi@gmail.com'],
      isPasswordInvalid: false,
      password: "12345",
      pwdErrorMessage: ""
    }
  },
  methods: {
    greet: function (event) {
      alert('Bonjour !')
      if (event) {
        alert(event.target.tagName)
      }
    },
    onBlur(value) {
        if(this.emails.includes(value)){
            this.isEmailInvalid = false
            this.isvalid = true
        } 
        else{
            this.isEmailInvalid = true
            this.isvalid = false
            this.emailErrorMessage = 'Email inconnu'
        }
    },
    validPassword(value) {
        alert(this.password === value)
        if(this.password === value){
            this.isPwdInvalid = false
            this.isPwdvalid = true
        } 
        else{
            this.isPwdInvalid = true
            this.isPwdvalid = false
            this.pwdErrorMessage = 'Mauvais mot de passe'
        }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "settings-tools/_all-settings";
@import 'layouts/_l.container';
@import 'layouts/_l.flexy';
@import 'typography/_t.headings';
@import 'utilities/_u.margin.scss';
@import 'utilities/_u.padding.scss';
</style>

<style lang="scss" scoped> 
.first{
  border: 1px solid #554f52;
  border-radius: 4px;
}

.middle{
  border: 1px solid #eeeef0;
}

.caroussel{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.app {
  margin-left:10% !important;
  margin-right:10% !important;
  border: 3px solid rgb(211, 210, 214);;
  margin-top: 20px;
}

.fake-header {
  height: 80px;
  margin: 10px;
  background-color: rgb(211, 210, 214);;
}

.fake-sub {
  height: 40px;
  margin: 10px;
  background-color: rgb(211, 210, 214);;
}

.fake-title {
  height: 40px;
  margin-top: 30px;
  margin-right: 30%;
  margin-left: 30%;
  background-color: rgb(211, 210, 214);;
}

.fake-cat {
  height: 20px;
  margin: 30px;
  background-color: rgb(211, 210, 214);
}
</style>
