<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <div class="text-center">
        <img class="img" :src="product?.image" alt="" />
      </div>
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{ name: 'product', params: { id: product?.id } }">
            {{ product?.title }}
          </router-link>
        </h4>
        <strong>${{ product?.price }}</strong>
        <p class="card-text text-truncate">{{ product?.description }}</p>
      </div>
      <div class="px-3 pb-3">
        <button class="btn btn-secondary" @click="addToProductIntoCart">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductCart",
  props: ["product"],
  methods: {
    ...mapActions(["addToCart"]),
    addToProductIntoCart() {
      this.addToCart({
        ...this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
.img {
  width: 60%;
  display: inline-block;
  text-align: center;
}
</style>
