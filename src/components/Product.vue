<template>
  <div id="product" class="app">
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
@import './src/assets/variables.scss';

html, body {
  margin: 0;
  padding: 0;
}
body {
  background-color: #E2DBD9 !important;
  font-family: LeroyMerlinSans-Regular, sans-serif !important;
}

.loginBox {
  height: 300px;
  width: 500px;
  background-color: white;
  padding: 50px;
}
.app {
  min-height: 100vh;
  background-color: white;
}
.thumbnails {
  position: absolute;
  max-height: 100%;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

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

.exemple {
  max-width: 80rem;
}
</style>
