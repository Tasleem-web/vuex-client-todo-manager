<template>
  <!-- ======= Faq Section ======= -->
  <section id="faq" class="faq">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1"
        >
          <div class="content">
            <h3>Frequently Asked <strong>Questions</strong></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
          </div>

          <div class="accordion-list">
            <ul>
              <li>
                <a
                  data-bs-toggle="collapse"
                  class="collapse"
                  data-bs-target="#accordion-list-1"
                  >Non consectetur a erat nam at lectus urna duis?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="accordion-list-1"
                  class="collapse show"
                  data-bs-parent=".accordion-list"
                >
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
              </li>

              <li>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-list-2"
                  class="collapsed"
                  >Feugiat scelerisque varius morbi enim nunc?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="accordion-list-2"
                  class="collapse"
                  data-bs-parent=".accordion-list"
                >
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-list-3"
                  class="collapsed"
                  >Dolor sit amet consectetur adipiscing elit?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="accordion-list-3"
                  class="collapse"
                  data-bs-parent=".accordion-list"
                >
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="col-lg-5 align-items-stretch order-1 order-lg-2 img faq-img"
        >
          &nbsp;
        </div>
      </div>
    </div>
  </section>
  <!-- End Faq Section -->
</template>

<script>
export default {
  name: "FAQ",
};
</script>

<style lang="scss" scoped></style>
