<template>
  <div id="mainContainer" ref="main_container_ref">
    <Hero />
    <main id="main">
      <About />
      <Services />
      <section id="cta" class="cta">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 text-center text-lg-start">
              <h3>Call To Action</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div class="col-lg-3 cta-btn-container text-center">
              <a class="cta-btn align-middle" href="#">Call To Action</a>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <section id="counts" class="counts">
        <div class="container">
          <div class="text-center title">
            <h3>What we have achieved so far</h3>
            <p>
              Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum
              consequatur illo.
            </p>
          </div>

          <div class="row counters position-relative">
            <div class="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Clients</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Projects</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1463"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Hours Of Support</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="15"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </section>
      <!-- ======= Portfolio Section ======= -->
      <!-- <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div class="row portfolio-container">
            <div class="position-relative col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src="../assets/img/portfolio/portfolio-1.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a
                  href="../assets/img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="App 1"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="position-relative col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="../assets/img/portfolio/portfolio-2.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="../assets/img/portfolio/portfolio-2.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Web 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="position-relative col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src="../assets/img/portfolio/portfolio-3.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <a
                  href="../assets/img/portfolio/portfolio-3.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="App 2"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="position-relative col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="../assets/img/portfolio/portfolio-4.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a
                  href="../assets/img/portfolio/portfolio-4.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Card 2"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="position-relative col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="../assets/img/portfolio/portfolio-5.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a
                  href="../assets/img/portfolio/portfolio-5.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Web 2"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="position-relative col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src="../assets/img/portfolio/portfolio-6.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a
                  href="../assets/img/portfolio/portfolio-6.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="App 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="position-relative col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="../assets/img/portfolio/portfolio-7.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a
                  href="../assets/img/portfolio/portfolio-7.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Card 1"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="position-relative col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="../assets/img/portfolio/portfolio-8.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a
                  href="../assets/img/portfolio/portfolio-8.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Card 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="position-relative col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="../assets/img/portfolio/portfolio-9.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="../assets/img/portfolio/portfolio-9.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Web 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <!-- End Portfolio Section -->
      <Pricing />
      <FAQ />
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
import FAQ from "../components/FAQ.vue";
import Features from "../components/Feature.vue";
import Pricing from "../components/Pricing.vue";
import Services from "../components/Services.vue";

export default {
  name: "MyHome",
  components: {
    Hero,
    About,
    // Clients,
    Contact,
    FAQ,
    Features,
    Pricing,
    Services,
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
