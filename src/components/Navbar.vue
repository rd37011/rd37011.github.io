<template>
    <v-app-bar app flat hide-on-scroll>
      <div class="d-flex align-flex-start">
        <v-toolbar-title to="/">
          <h3 class="header">Ryan Diaz</h3>
        </v-toolbar-title>
        <!-- <v-btn text to="about" class="menu-btn">About Me</v-btn>
        <v-btn text to="experience" class="menu-btn"
          >Experience</v-btn
        >
        <v-btn text to="projects" class="menu-btn"
          >Projects</v-btn
        > -->
      </div>
      <v-spacer></v-spacer>
      <!-- <v-btn to="contact" class="menu-btn" outlined> Contact me! </v-btn> -->
    </v-app-bar>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
@font-face {
  font-family: Alata;
  src: url('../../public/Alata-Regular.ttf');
}
@font-face {
  font-family: NotoSerif-SemiBold;
  src: url('../../public/NotoSerifJP-SemiBold.otf');
}
@font-face {
  font-family: NotoSerif-Light;
  src: url('../../public/NotoSerifJP-Light.otf');
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