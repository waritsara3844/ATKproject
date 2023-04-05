<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page>
        <div class="q-pa-md">
          <q-form @submit="onSubmit" @reset="onReset">
            <Input />
            <!---- Dropdrawn -->
            <BtnDropdrawn />
            <!---- Dropdrawn -->
            <DateTime />
            <div class="col-3 q-mr-md q-my-md q-gutter-md" align="left">
              <q-btn type="submit" color="primary" rounded>Submit</q-btn
              ><q-btn type="submit" color="deep-orange" rounded
                >Clear Form</q-btn
              >
            </div>
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import Input from "src/components/Input.vue";
import BtnDropdrawn from "src/components/BtnDropdrawn.vue";
import DateTime from "src/components/DateTime.vue";

export default defineComponent({
  name: "FormPage",
  components: { Input, BtnDropdrawn, DateTime },

  data() {
    return {};
  },
});
</script>

<style></style>
