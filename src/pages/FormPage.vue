<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center q-mx-md" padding>
        <div class="row-12">
          <div class="col">
            <q-card>
              <q-card-section class="text-center">
                <div class="text-h6 text-bold text-center">
                  Total ATK Submissions:
                </div>

                {{ 12 }}
              </q-card-section>
              <q-separator />
            </q-card>
          </div>
          <div class="col q-mt-md">
            <q-form @submit="submitForm">
              <div class="row text-bold text-h6">ATK Report</div>
              <q-input v-model="username" label="Username" />
              <q-input v-model="studentId" label="Student ID" />
              <q-option-group
                v-model="atkreuslt"
                color="secondary"
                :options="options"
                inline
              />
              <q-file
                standout
                v-model="upload_atk"
                label="Your Avatar"
                max-file-size="1048576"
                accept=".jpg, .jpeg, .png"
                @rejected="onRejected"
                @update:model-value="uploadFile()"
              >
                <template #append>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
              <q-btn
                type="submit"
                label="Submit"
                class="q-mt-md"
                color="primary"
              />
            </q-form>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { QForm, QInput, QBtn } from "quasar";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "FormPage",
  components: {
    QForm,
    QInput,
    QBtn,
  },
  setup() {
    return {
      atkreuslt: ref("negative"),
      options: [
        {
          label: "Negative(-)",
          value: "negative",
        },
        {
          label: "Positive(+)",
          value: "positive",
        },
      ],
    };
  },
  data() {
    return {
      username: "",
      studentId: "",
      imageUrl: "",
      upload_atk: null,
    };
  },
  methods: {
    submitForm() {},

    uploadFile() {
      this.imageUrl = URL.createObjectURL(this.upload_atk);
    },
    onRejected(rejectedEntries) {
      let msg;
      if (rejectedEntries[0].failedPropValidation == "accept")
        msg = "Only images (jpg, jpeg, png) are allowed.";
      else if (rejectedEntries[0].failedPropValidation == "max-file-size")
        msg = "File size cannot be larger than 1MB.";
      Notify.create({
        type: "negative",
        message: msg,
      });
    },
  },
});
</script>
