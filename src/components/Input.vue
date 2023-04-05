<template>
  <div class="row q-ma-md">
    <div class="col-3 q-mr-md">
      <div class="text-left text-bold q-my-md">Firstname</div>
      <q-input outlined v-model="firstname" label="Your firstname *" />
    </div>
    <div class="col-4 q-mr-md">
      <div class="text-left text-bold q-my-md">Lastname</div>
      <q-input outlined v-model="lastname" label="Your lastname *" />
    </div>
    <div class="col-4 q-mr-md">
      <div class="text-left text-bold q-my-md">Student ID</div>
      <q-input outlined v-model="studentID" label="Your student ID *" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
});
</script>

<style></style>
