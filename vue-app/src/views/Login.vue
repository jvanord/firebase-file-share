<template>
  <v-container class="pa-5 mt-5">
    <v-row>
      <v-col class="pa-3 col-12 col-md-6">
          <v-card>
          <h2 class="display1 text-center">Login</h2>
          </v-card>
           </v-col>
           <v-col class="pa-3 col-12 col-md-6">
               <Signup />
           </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Signup from '../components/Signup.vue'

export default Vue.extend({
    components: {
      Signup
    }
})
</script>