<template>
  <div>
    <div class="loginbox">
      <div class="headerText">
        <router-link to="/login">
          <div class="title">
            <h1 class="text">Login</h1>
          </div>
        </router-link>
      </div>
      <div id="nav">
        <DxResponsiveBox :screen-by-width="screen" single-column-screen="sm">
          <DxRow :ratio="1" screen="xs" />

          <DxRow :ratio="1" screen="sm" />
          <DxRow :ratio="1" />
          <DxRow :ratio="1" />
          <DxRow :ratio="1" />

          <DxCol :ratio="1" />
          <DxCol :ratio="11" screen="lg" />
          <DxCol :ratio="1" />
          <DxRow :ratio="1" />
          <DxRow :ratio="1" />

          <DxItem>
            <DxLocation :row="1" :col="1" screen="lg" />
            <DxLocation :row="1" :col="1" :colspan="0" screen="sm" />
            <template #default>
              <div id="app">
                <form>
                  <!-- <p>Username</p> -->
                  <div class="dx-field">
                    <dx-text-box placeholder="User Name or Email" width="100%">
                      <dx-validator>
                        <dx-required-rule message="Username is required" />
                      </dx-validator>
                    </dx-text-box>
                  </div>
                  <!-- <p>Password</p> -->
                  <div class="dx-field">
                    <dx-text-box placeholder="Password" width="100%" mode="password">
                      <dx-validator>
                        <dx-required-rule message="Password is required" />
                      </dx-validator>
                    </dx-text-box>
                  </div>
                </form>
              </div>
            </template>
          </DxItem>
        </DxResponsiveBox>
      </div>
      <!-- Button -->
      <div class="buttons-demo dx-field">
        <div class="buttons">
          <div class="buttons-column">
            <div>
              <DxButton
                class="buttonText"
                :width="120"
                text="LOGIN"
                type="success"
                styling-mode="contained"
                @click="onLoginClick"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="link">
        <router-link to="/signup">Not a member? sign up here</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DxButton from "devextreme-vue/button";
import DxCheckBox from "devextreme-vue/check-box";
import DxTextBox from "devextreme-vue/text-box";
import DxValidationGroup from "devextreme-vue/validation-group";
import DxValidator, { DxRequiredRule } from "devextreme-vue/validator";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import {
  DxResponsiveBox,
  DxItem,
  DxLocation,
  DxCol,
  DxRow
} from "devextreme-vue/responsive-box";

@Component({
  components: {
    DxButton,
    DxCheckBox,
    DxTextBox,
    DxValidator,
    DxRequiredRule,
    DxValidationGroup,
    DxResponsiveBox,
    DxItem,
    DxLocation,
    DxCol,
    DxRow
  }
})
export default class Login extends Vue {
  screen(width: any) {
    return width < 700 ? "sm" : "lg";
  }

  onLoginClick(e: any) {
    if (!e.validationGroup.validate().isValid) {
      return;
    }
    
    e.validationGroup.reset();
  }
}
</script>

<style  lang="scss" scoped>


a {
  color: lightslategray;
  text-decoration: none;
}

.text {
  margin: 11px 0px;
}

.title {
  color: white;
  font-family: "Quicksand", sans-serif;
  font-weight: 100;
}

.loginbox {
  width: 450px;
  height: 250px;
  background: white;
  color: grey;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -70%);
  box-sizing: border-box;
  padding: 0px;
  border-radius: 1px;
  box-shadow: 0px 5px 2px -20px #6a6a6a;
}

@media only screen and (max-width: 500px) {
  .loginbox {
    width: 100%;
    height: 100%;
    background: white;
    color: grey;
    top: 70%;
    box-sizing: border-box;
    border-radius: 0px;
    #nav {
      padding: 18px 25px;
    }
  }
}

@media only screen and (max-width: 150px) {
  .loginbox {
    width: 22vh;
    height: 150vh;
    background: white;
    color: grey;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 15px 0 70px 0;
    border-radius: 0px;
  }
}

.headerText {
  margin: 0;
  padding: 0px 0px 0px 35px;
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: left;
  font-weight: normal;
  color: grey;
  border-bottom: solid;
  border-width: 0.1px;
  border-color: rgb(161, 161, 161);
  background: #afafaf;
  height: 50px;
}
</style>
