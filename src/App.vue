<template>
  <NavBar />
  <div class="container">
    <ProductList />
    <!-- <router-view></router-view> -->
  </div>
  <NotificationsList />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import NotificationsList from "./components/NotificationsList.vue";
import ProductList from "./components/ProductList.vue";
export default {
  name: "App",
  components: {
    NavBar,
    NotificationsList,
    ProductList,
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
.container {
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
