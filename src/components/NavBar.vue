<template>
  <div>
    <!-- <pre>carts - {{ JSON.stringify(carts) }}</pre> -->
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link active">Home</router-link>
          <a class="nav-item nav-link" href="#">Product</a>
        </div>

        <div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ countCartItems }} Cart
            </button>
            <div
              class="dropdown-menu p-2"
              aria-labelledby="dropdownMenuButton"
              style="min-width: 320px; right: 0; left: auto"
            >
              <div @click="$event.stopPropagation()">
                <template v-for="cart in carts" :key="cart.id">
                  <div class="px-2 d-flex justify-content-between">
                    <div>
                      <strong class="text-truncate">{{ cart?.title }}</strong>
                      <br />
                      {{ cart?.quantity }} x ${{ cart?.price }}
                    </div>
                    <div>
                      <a
                        href="#"
                        class="link-primary badge badge-secondary"
                        @click="removeItem(cart.id)"
                        >remove</a
                      >
                    </div>
                  </div>
                  <hr />
                </template>
                <div class="d-flex justify-content-between">
                  <span>Total: ${{ grandTotal }}</span>
                  <a
                    href="#"
                    @click="emptyCart"
                    :class="{ disabled: countCartItems < 1 }"
                    >Clear Cart</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {},
  name: "NavBar",
  computed: {
    ...mapState(["carts"]),
    ...mapGetters(["countCartItems", "grandTotal"]),
  },
  methods: {
    ...mapActions(["removeItem", "emptyCart"]),
  },
};
</script>

<style scoped></style>
