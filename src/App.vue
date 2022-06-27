<template>
  <div class="wrapper">
    <NavBar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
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
