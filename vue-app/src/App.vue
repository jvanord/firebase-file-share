<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view/>
      <Error/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue'
import Error from './components/Error.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Navbar,
    Error
  },

  data: () => ({
    //
  }),
});
</script>
