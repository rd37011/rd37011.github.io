<template>
  <v-app>
    <Navbar />
    <v-main>
        <Main />
    </v-main>
    <router-view />
  </v-app>
</template>
<script>

import Main from './components/Main';
import Navbar from './components/Navbar';

export default {
  name: 'App',

  components: {
    Main,
    Navbar
  },

  data: () => ({})
}
</script>
