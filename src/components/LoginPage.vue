<template>
  <div>
    <div class="loginbox">
      <div class="headerText">
        <div class="title">
          <h1 class="text">Login</h1>
        </div>
      </div>
      <div id="box">
        <slot name="content"></slot>
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
                @click="onSubmit"
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
export default class LoginPage extends Vue {
  screen(width: any) {
    return width < 500 ? "sm" : "lg";
  }
  onSubmit(e: any) {
    if (!e.validationGroup.validate().isValid) {
      return;
    }
    e.validationGroup.reset();
    alert("logged in");
  }
}
</script>

<style  lang="scss" scoped>
@import "src/assets/index.scss";
</style>
