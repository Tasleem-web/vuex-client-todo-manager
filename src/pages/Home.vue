<template>
  <div id="mainContainer" ref="main_container_ref">
    <Hero />
    <main id="main">
      <About />
      <Services />
      <CTA />
      <!-- <Features /> -->
      <!-- PortFolio section -->
      <!-- <Pricing /> -->
      <!-- <FAQ /> -->
      <Contact />
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
// import Clients from "../components/Clients.vue";
import Contact from "../components/Contactus.vue";
// import FAQ from "../components/FAQ.vue";
// import Features from "../components/Feature.vue";
// import Pricing from "../components/Pricing.vue";
import Services from "../components/Services.vue";
import CTA from "../components/CTA.vue";

export default {
  name: "MyHome",
  components: {
    Hero,
    About,
    // Clients,
    Contact,
    // FAQ,
    // Features,
    // Pricing,
    Services,
    CTA,
  },
  data() {
    return {
      scrollPassed: "header-scrolled",
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions(["headerSCrolledAdd"]),
    handleScroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 100) {
        this.headerSCrolledAdd(true);
      } else {
        this.headerSCrolledAdd(false);
      }
    },
  },
};
</script>

<style scoped></style>
