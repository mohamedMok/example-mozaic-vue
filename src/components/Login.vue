<template>
  <div id="login" class="ml-flexy ml-flexy--space-around ml-flexy--items-center">
    <div class="login">
      <div class="loginTitle ml-flexy ml-flexy--items-center">
        <MIcon class="" :icon="userIcon"  />
        <span class="mt-heading mt-heading--m mt-heading--center ">Login</span>
      </div>
      <div class="loginBox">
        <MField
          label="Email"
          id="idEmail"
          :errorMessage="emailErrorMessage"
          :required=true
          errorId="errorEmail"
          :isInvalid="isEmailInvalid"
        >
          <MTextInput
            :required=true
            type="text"
            placeholder="Email"
            :id="idEmail"
            :value="myInputValue"
            :pattern="pattern"
            :isInvalid="isEmailInvalid"
            :isValid="isValid"
            v-on:blur="onBlur"
          />
        </MField>
        <MField
          label="Password"
          id="idPwd"
          :errorMessage="pwdErrorMessage"
          :required=true
          errorId="errorPwd"
          :isInvalid="isPwdInvalid"
          class="mu-mt-100"
        >
          <MTextInput
            required
            type="password"
            :id="idPwd"
            placeholder="Enter your password"
            :isInvalid="isPwdInvalid"
            :isValid="isPwdValid"
            v-on:blur="validPassword"
          />
        </MField> 
        <div class="ml-flexy ml-flexy--space-around ml-flexy--items-center mu-mt-250" >
            <MButton
            label="Sign in"
            theme="primary"
            v-on:click="greet('toto')"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MField from '@mozaic-ds/mozaic-vue/src/components/field/MField';
import MTextInput from '@mozaic-ds/mozaic-vue/src/components/textinput/MTextInput';
import MIcon from '@mozaic-ds/mozaic-vue/src/components/icon/MIcon';
import MButton from '@mozaic-ds/mozaic-vue/src/components/button/MButton';
import userIcon from '@mozaic-ds/icons/svg/User_Account_Profile--View_48px.svg';

export default {
  name: 'app',
  components: {
    MField,
    MTextInput,
    MIcon,
    MButton,
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
.app {
  min-height: 100vh;
}
</style>

<style lang="scss">
@import './src/assets/variables.scss';

html, body {
  margin: 0;
  padding: 0;
}
body {
  background-color: #eeeef0 !important;
}

.loginBox {
  height: 300px;
  width: 500px;
  background-color: white;
  padding: 50px;
}

</style>
