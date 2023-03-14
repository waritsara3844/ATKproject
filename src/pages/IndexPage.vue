<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page padding align="center">
        <img
          src="https://dorm.psu.ac.th/system/files/images/psu-logo.png"
          style="height: 140px"
          class="q-mt-xl"
        />
        <div class="row q-mt-lg text-h5 text-bold">
          <div class="col">Welcome to PSU ATK Form</div>
        </div>
        <div class="row q-mt-lg text-left text-bold">
          <div class="col">Username</div>
        </div>
        <div class="row q-mt-md">
          <div class="col">
            <q-input outlined v-model="text" label="Enter your Username" />
          </div>
        </div>
        <div class="row q-mt-lg text-left text-bold">
          <div class="col">Password</div>
        </div>
        <div class="row q-mt-md">
          <div class="col">
            <q-input outlined v-model="text" label="Enter your Password" />
          </div>
        </div>
        <div class="row q-mt-md">
          <div class="col">
            <q-btn
              unelevated
              rounded
              color="primary"
              label="Sign in"
              no-caps
              style="width: 90%"
            />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  // data: {
  //   return: {
  //     email: "",
  //     password: "",
  //   },
  // },
  // method: {
  //   // chekLogin() {
  //   //   (this.email = email), (this.password = password);
  //   // },
  // },
});
</script>
