<template>
  <signup-page>
    <div slot="content">
      <DxResponsiveBox :screen-by-width="screen" single-column-screen="sm">
        <DxRow :ratio="1" screen="xs" />

        <DxRow :ratio="1" screen="sm" />
        <DxRow :ratio="1" />
        <DxRow :ratio="1" />

        <DxCol :ratio="1" />
        <DxCol :ratio="11" screen="lg" />
        <DxCol :ratio="1" />

        <DxItem>
          <DxLocation :row="1" :col="1" screen="lg" />
          <DxLocation :row="1" :col="1" :colspan="0" screen="sm" />
          <template #default>
            <div id="app">
              <form>
                <!-- <p>Email</p> -->
                <div icon="email" class="dx-field">
                  <dx-text-box placeholder="Email" width="100%">
                    <dx-validator>
                      <dx-required-rule message="Username is required" />
                    </dx-validator>
                  </dx-text-box>
                </div>

                <!-- <p>Modbile Number</p> -->
                <div class="dx-field">
                  <dx-text-box placeholder="Phone" width="100%">
                    <dx-validator>
                      <dx-required-rule message="Mobile Number is required" />
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
                <!-- <p>ConfirmPassword</p> -->
                <div class="dx-field">
                  <dx-text-box placeholder="Conform Password" width="100%" mode="password">
                    <dx-validator>
                      <dx-required-rule message="Confirmation is required" />
                    </dx-validator>
                  </dx-text-box>
                </div>
              </form>
            </div>
          </template>
        </DxItem>
      </DxResponsiveBox>
    </div>
  </signup-page>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SignupPage from "../components/SignupPage.vue";
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
    SignupPage,
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
export default class Signup extends Vue {
  screen(width: any) {
    return width < 500 ? "sm" : "lg";
  }
}
</script>
