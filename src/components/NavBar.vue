<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <template v-for="menu in NavBarMenu" :key="menu.name">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">
                <router-link
                  :to="menu.path"
                  class="nav-tem nav-link"
                  :class="{ active: menu.title === activeRoute }"
                  @click="activeMenu(menu.title)"
                >
                  {{ menu.name }}
                </router-link>
              </a>
            </li>
          </template>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li> -->
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
      </div>
      <div class="d-flex align-center">
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
        <div class="nav navbar-nav">
          <router-link
            to="/sign-in"
            class="nav-tem nav-link"
            :class="{ active: 'login' === activeRoute }"
            @click="activeMenu('login')"
          >
            Sign in
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import NavBarMenu from "../assets/menu.json";

export default {
  components: {
    // NavBarMenu,
  },
  name: "NavBar",
  data() {
    return {
      NavBarMenu: NavBarMenu.filter(
        (menu) =>
          (menu.id = // Generate Dynamic id
            (Math.random().toString(36) + Date.now().toString(36)).substr(2))
      ),
      activeRoute: "home",
    };
  },
  computed: {
    ...mapState({
      carts: (state) => state.cart.carts,
    }),
    ...mapGetters("cart", ["countCartItems", "grandTotal"]),
    // ...mapGetters({
    //   countCartItems:'cart/countCartItems',
    //   grandTotal:'cart/grandTotal',
    // })
  },
  methods: {
    ...mapActions("cart", ["removeItem", "emptyCart"]),
    // ...mapActions({
    //   removeItem: "cart/removeItem",
    //   emptyCart: "cart/emptyCart",
    // }),
    activeMenu(title) {
      this.activeRoute = title;
      // this.NavBarMenu = this.NavBarMenu.filter((menu) => {
      //   menu["active"] = menu.id === id ? true : false;
      //   return menu;
      // });
    },
  },
};
</script>

<style scoped></style>
