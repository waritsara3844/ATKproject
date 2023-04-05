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
          <div class="col">Email</div>
        </div>
        <div class="row q-mt-md">
          <div class="col">
            <q-input outlined v-model="email" label="Enter your Email" />
          </div>
        </div>
        <div class="row q-mt-lg text-left text-bold">
          <div class="col">Password</div>
        </div>
        <div class="row q-mt-md">
          <div class="col">
            <q-input outlined v-model="password" label="Enter your Password" />
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
              @click="this.signIn"
            />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  name: "IndexPage",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      signInWithEmailAndPassword(this.$auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.$router.push("/form");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    },
  },
});
</script>
