<template>
  <div class="row q-ma-md">
    <div class="col-3 q-mr-md q-my-md">
      <div class="text-left text-bold q-my-md">Date</div>
      <q-date v-model="date" label="Select Date *" style="width: 100%" />
    </div>
    <div class="col-4 q-mr-md q-my-md" align="center">
      <div class="text-left text-bold q-my-md">Time</div>
      <q-time v-model="time" format24h label="Selected time *" />
    </div>
    <div class="col-4 q-mr-md q-my-md" align="center">
      <div class="text-left text-bold q-my-md">Upload ATK Result</div>
      <q-file outlined v-model="file" label="Upload picture" />
      <div class="text-left text-bold q-my-md">ATK Result</div>
      <div class="q-gutter-sm" align="left">
        <q-radio v-model="atkresult" val="Negative" label="Negative" />
        <q-radio v-model="atkresult" val="Positive" label="Positive" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DateTime",
  data() {
    return {};
  },
});
</script>

<style></style>
