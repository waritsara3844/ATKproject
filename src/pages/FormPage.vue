<template>
  <q-page>
    <div class="q-pa-md">
      <q-form @submit="onSubmit" @reset="onReset">
        <div class="row q-ma-md">
          <div class="col-3 q-mr-md">
            <div class="text-left">Firstname</div>
            <q-input filled v-model="firstname" label="Your firstname *" />
          </div>
          <div class="col-4 q-mr-md">
            <div class="text-left">Lastname</div>
            <q-input filled v-model="lastname" label="Your lastname *" />
          </div>
          <div class="col-4 q-mr-md">
            <div class="text-left">Student ID</div>
            <q-input filled v-model="studentID" label="Your student ID *" />
          </div>
        </div>
        <div class="row q-ma-md">
          <div class="col-3 q-mr-md">
            <div class="text-left">Faculty</div>
            <q-btn-dropdown label="Select Faculty">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="col-4 q-mr-md">
            <div class="text-left">Major</div>
            <q-input filled v-model="major" label="Your major *" />
          </div>
          <div class="col-4 q-mr-md">
            Year
            <q-input filled v-model="Year" label="Your year *" />
          </div>
        </div>
        <div class="row q-ma-md">
          <div class="col-3 q-mr-md">
            <div class="text-left">Date</div>
            <q-input filled v-model="date" label="Select Date *" />
          </div>
          <div class="col-4 q-mr-md">
            <div class="text-left">Time</div>
            <q-input filled v-model="time" label="Selected time *" />
          </div>
          <div class="col-4 q-mr-md">
            <div class="text-left">ATK Result</div>
            <q-input filled v-model="img" label="Upload Image *" />
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormPage",
});
</script>

<style></style>
