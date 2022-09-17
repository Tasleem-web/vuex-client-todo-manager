<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top" :class="headerScrolled">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div
          class="col-xl-12 d-flex align-items-center justify-content-lg-between"
        >
          <h1 class="logo me-auto me-lg-0">
            <router-link to="/">LOGO</router-link>
          </h1>
          <nav
            id="navbar"
            class="navbar order-last order-lg-0"
            :style="{ display: showExtra ? 'block' : 'none' }"
          >
            <ul>
              <li v-for="(menu, index) in menus" :key="index">
                <a
                  class="nav-link scrollto"
                  :class="menu.active ? ' active' : ''"
                  :href="'#' + menu.name"
                  @click="activeMene(menu)"
                  >{{ menu.label }}</a
                >
              </li>
              <!-- <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li>
                <a class="nav-link scrollto" href="#services">Services</a>
              </li>
              <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li>
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->

              <!-- <li>
                <a class="nav-link scrollto" href="#portfolio">Portfolio</a>
              </li> -->
              <!-- <li class="dropdown">
                <a href="#"
                  ><span>Drop Down</span> <i class="bi bi-chevron-down"></i
                ></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li class="dropdown">
                    <a href="#"
                      ><span>Deep Drop Down</span>
                      <i class="bi bi-chevron-right"></i
                    ></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li> -->
            </ul>
          </nav>
          <span
            class="bi bi-list mobile-nav-toggle"
            @click="menuIconToggle()"
          ></span>
          <!-- .navbar -->

          <!-- <a href="#about" class="get-started-btn scrollto">Get Started</a> -->
        </div>
      </div>
    </div>
  </header>
  <!-- End Header -->
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";

export default {
  components: {
    // NavBarMenu,
  },
  name: "NavBar",
  computed: {
    ...mapState(["headerScrolled"]),
  },
  data() {
    return {
      showExtra: true,
    };
  },
  setup() {
    const menuItems = [
      { name: "hero", label: "Home", active: true },
      { name: "about", label: "About", active: false },
      { name: "services", label: "Services", active: false },
      { name: "pricing", label: "Pricing", active: false },
      { name: "contact", label: "Contact", active: false },
    ];
    var menus = ref(menuItems);

    function activeMene(menu) {
      if (menu) {
        for (let i = 0; i < menus.value.length; i++) {
          if (menus.value[i].name === menu.name) {
            menus.value[i].active = true;
          } else {
            menus.value[i].active = false;
          }
        }
      }
    }
    return {
      activeMene,
      menus,
    };
  },
  created() {
    this.myEventHandler();
    window.addEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler() {
      if (window.innerWidth >= 320 && window.innerWidth < 1024) {
        this.showExtra = false;
      } else {
        this.showExtra = true;
      }
    },
    menuIconToggle() {
      this.showExtra = !this.showExtra;
    },
  },
};
</script>

<style scoped></style>
