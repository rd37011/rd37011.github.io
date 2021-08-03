<template>
  <v-app>
    <v-app-bar app flat hide-on-scroll>
      <div class="d-flex align-flex-start">
        <v-toolbar-title>
          <h3 class="header">Ryan Diaz</h3>
        </v-toolbar-title>
        <v-btn text to="#about" class="menu-btn" href="#about">About Me</v-btn>
        <v-btn text to="#experience" class="menu-btn" href="#experience"
          >Experience</v-btn
        >
        <v-btn text to="#projects" class="menu-btn" href="#projects"
          >Projects</v-btn
        >
      </div>
      <v-spacer></v-spacer>
      <v-btn to="/contact" class="menu-btn" outlined> Contact me! </v-btn>
    </v-app-bar>
    <v-main>
      <Main />
    </v-main>
  </v-app>
</template>

<script>
// import VueRouter from 'vue-router'
import Main from './components/Main'

export default {
  name: 'App',

  components: {
    Main,
    // VueRouter,
  },

  data: () => ({})
}
</script>
<style scoped>
@font-face {
  font-family: Alata;
  src: url('../public/Alata-Regular.ttf');
}
@font-face {
  font-family: NotoSerif-SemiBold;
  src: url('../public/NotoSerifJP-SemiBold.otf');
}
@font-face {
  font-family: NotoSerif-Light;
  src: url('../public/NotoSerifJP-Light.otf');
}
.header {
  font-family: NotoSerif-SemiBold;
}
.menu-btn {
  font-family: NotoSerif-Light;
}
.menu-btn_active::before {
  background-color: transparent;
}
</style>
