<template>
  <div id="app" class="ml-flexy ml-flexy--space-around ml-flexy--items-center app">
    <div class="login">
      <div class="loginTitle">
        <MIcon icon="checkIcon"  />
        <span class="mt-heading mt-heading--m mt-heading--center">Login</span>
      </div>
      <div class="loginBox">
        <MField
          label="Email"
          id="idEmail"
          errorMessage="Oups error occured"
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
            v-on:blur="onBlur()"
          />
        </MField>
        <MField
          label="Password"
          id="password"
          errorMessage="Oups error occured"
          :required=true
          errorId="errorPassword"
        >
          <MTextInput
            required
            type="password"
            placeholder="Enter your password"
            @blur="onBlur()"
          />
        </MField> 
        <MButton
          label="Sign in"
          theme="primary"
          v-on:click="greet('toto')"
          
        />  
      </div>
    </div>
  </div>
</template>

<script>
import MField from '@mozaic-ds/mozaic-vue/src/components/field/MField';
import MTextInput from '@mozaic-ds/mozaic-vue/src/components/textinput/MTextInput';
import MIcon from '@mozaic-ds/mozaic-vue/src/components/icon/MIcon';
import MButton from '@mozaic-ds/mozaic-vue/src/components/button/MButton';

export default {
  name: 'app',
  components: {
    MField,
    MTextInput,
    MIcon,
    MButton,
  },
  data() {
    return {
      idEmail: "idEmail",
      isValid: false,
      isEmailInvalid: true,
      pattern: "b[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}\b",
      myInputValue: ""
    };
  },
  methods: {
    greet: function (event) {
      alert('Bonjour !')
      if (event) {
        alert(event.target.tagName)
      }
    },
    onBlur(value) {
      alert('toto')
      const regex = RegExp(this.pattern);
      this.myInputValue = value;
      if (regex.test(this.myInputValue)) {
        this.isValid = true;
        this.isInvalid = false;
      } else {
        this.isInvalid = true;
        this.isValid = false;
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
</style>

<style lang="scss">
@import './src/assets/variables.scss';

html, body {
  margin: 0;
  padding: 0;
}
body {
  background-color: #999999 !important;
}

.loginBox {
  height: 300px;
  width: 500px;
  background-color: white;
  padding: 50px;
}
.app {
  min-height: 100vh;
}
</style>
