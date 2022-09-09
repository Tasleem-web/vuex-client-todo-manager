<template>
  <div class="wrapper">
    <NavBar />
    <router-view></router-view>
    <FooterSection />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterSection,
  },
  // setup() {

  // },
};
</script>

<style>
a.disabled {
  color: gray;
  pointer-events: none;
}
</style>
