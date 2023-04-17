<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="q-ma-md flex flex-center">
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
              <q-uploader
                :value="selectedImage"
                :max-file-size="maxFileSize"
                :extensions="allowedExtensions"
                @input="onImageInput"
                label="Upload Image"
                class="q-mt-md"
              />
              {{selectedImage}}
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
import { QForm, QInput, QUploader, QBtn } from "quasar";
import { defineComponent } from "vue";
import { ref } from 'vue'

export default defineComponent({
  name: "FormPage",
  setup(){
    return{
      atkreuslt: ref('negative'),
      options:[
        {
          label: 'Negative(-)',
          value: 'negative'
        },
        {
          label: 'Positive(+)',
          value: 'positive'
        }
      ]
    }
  },
  components: {
    QForm,
    QInput,
    QUploader,
    QBtn,
  },
  data() {
    return {
      username: "",
      studentId: "",
      selectedImage: null,
      maxFileSize: 5000000, // 5 MB
      allowedExtensions: ["jpg", "jpeg", "png"],
    };
  },
  methods: {
    submitForm() {
      // submit form logic
    },
    onImageInput(selectedFiles) {
      console.log(`${selectedFiles[0]}`);
      
      this.selectedImage = selectedFiles[0];
      console.log(`${this.selectedImage}`);
      
    },
  },
});
</script>
