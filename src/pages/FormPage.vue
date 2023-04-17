<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center q-mx-md" padding>
        <div class="row-12">
          <div class="col">
            <q-card style="background-color: aquamarine">
              <q-card-section class="text-center">
                <div class="text-h6 text-bold text-center">
                  Total ATK Submissions:
                </div>

                {{ num }}
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
                style="background-color: aquamarine"
              />
            </q-form>
          </div>
          <div class="q-ma-md q-pa-md">
            <q-btn
              class="full-width"
              flat
              style="background-color: bisque; color: black"
              label="log out"
              @click="this.signOut()"
            />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { QForm, QInput, QBtn } from "quasar";
import { defineComponent } from "vue";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "@firebase/auth";
import { signOut } from "firebase/auth";

export default defineComponent({
  name: "FormPage",
  components: {
    QForm,
    QInput,
    QBtn,
  },
  setup() {
    return {
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
      atkreuslt: "negative",
      num: 0,
    };
  },
  methods: {
    submitForm() {
      this.pushData();
      this.uploadImage();
    },

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
    uploadImage() {
      const storage = getStorage();
      const storageRef = ref(storage, this.upload_atk.name);
      const metadata = {
        contentType: "image/jpeg",
      };
      uploadBytes(storageRef, this.upload_atk, metadata).then((s) => {
        this.clear();
      });
    },
    clear() {
      this.username = "";
      this.studentId = "";
      this.upload_atk = "";
      this.atkreuslt = "negative";
    },
    pushData() {
      onAuthStateChanged(this.$auth, async (user) => {
        if (user) {
          addDoc(collection(this.$db, "atk_result"), {
            username: this.username,
            studentId: this.studentId,
            atk_result: this.atkreuslt,
            image: this.upload_atk.name,
          });
        }
      });
      this.getResultAmount();
    },
    getResultAmount() {
      onAuthStateChanged(this.$auth, async (user) => {
        if (user) {
          const resRef = collection(this.$db, "atk_result");
          const q_res = query(resRef);
          const snap = await getDocs(q_res);
          var num = 0;
          snap.forEach(async (docs) => {
            num += 1;
          });
          this.num = num;
        }
      });
    },
    signOut() {
      signOut(this.$auth)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
  created() {
    this.getResultAmount();
  },
});
</script>
