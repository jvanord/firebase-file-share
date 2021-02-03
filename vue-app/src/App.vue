<template>
  <v-app>
    <Navbar/>
    <v-main>
      <HelloWorld/>
      <Error/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue'
import Error from './components/Error.vue'

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
    Navbar,
    Error
  },

  data: () => ({
    //
  }),
});
</script>
