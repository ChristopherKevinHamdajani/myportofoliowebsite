<template>
  <v-app-bar app flat class="navbar" style="background-color: #044048">
    <v-container class="py-0 fill-height">
      <v-btn text dark @click="goToHome()"> Home </v-btn>
      <v-btn text dark @click="goToProjects()"> Projects </v-btn>
      <v-btn text dark @click="contactMe()"> Contact Me </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToProjects() {
      this.$router.push("/projects");
    },
    contactMe() {
      this.$router.push("/contactme");
    },
  },
};
</script>
<style scoped lang="scss">
.navbar {
  height: 10%;
}
</style>
