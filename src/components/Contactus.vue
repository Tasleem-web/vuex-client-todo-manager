<template>
  <div>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-title">
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
      </div>

      <div>
        <iframe
          style="border: 0; width: 100%; height: 350px"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8496187010337!2d77.60389851399502!3d12.9173852195626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15018c4682ab%3A0xb964b40916f50be4!2s9th%20D%20Main%20Rd%2C%20KEB%20Colony%2C%201st%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560029!5e0!3m2!1sen!2sin!4v1663400128843!5m2!1sen!2sin"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div class="container">
        <div class="row mt-5">
          <div class="col-lg-4">
            <div class="info">
              <div class="address col-lg-12">
                <i class="ri-map-pin-line"></i>
                <h4>Location:</h4>
                <p>
                  9th D Main Road, KEB Colony, 1st Stage, BTM 1st Stage,
                  Bangalore, Karnataka
                </p>
              </div>

              <div class="email col-lg-12">
                <div>
                  <i class="ri-mail-line"></i>
                  <h4>Email:</h4>
                  <p>kashifahmed522@gmail.com</p>
                  <p>tasleembca31@gmail.com</p>
                </div>
              </div>

              <div class="phone col-lg-12">
                <i class="ri-phone-line"></i>
                <h4>Call:</h4>
                <p>+91-9850616763</p>
                <p>+91-8698152828</p>
              </div>
            </div>
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">
            <form class="php-email-form" @submit.prevent="handleSubmit()">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                    v-model="formData.name"
                  />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    v-model="formData.email"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6 form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    v-model="formData.subject"
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    required
                    v-model="formData.phone"
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                  v-model="formData.message"
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div class="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div class="alert-custom-position">
      <div
        class="alert-dismissible custom-alert fade"
        :class="showAlert ? 'alert alert-success show' : 'hide'"
        role="alert"
      >
        {{ message || "Default Message" }}
        <button
          type="button"
          class="btn-close"
          @click="showAlertBtn()"
        ></button>
      </div>
    </div>
  </div>
  <!-- End Contact Section -->
</template>

<script>
export default {
  name: "ContactDetails",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
      },
      showAlert: false,
      status: false,
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(JSON.stringify(this.formData));
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.formData),
      };
      fetch("https://scale-data-verse.herokuapp.com/api/users", requestOptions)
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson && (await response.json());
          console.log(data);
          if (!data.status) {
            this.showAlert = true;
            this.message = data.message;
            this.formData = {
              name: "",
              email: "",
              subject: "",
              message: "",
              phone: "",
            };
          }

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            this.status = true;
            this.message = response.message;
            return Promise.reject(error);
          }
        })
        .catch((error) => {
          this.status = true;
          this.message = error;
          console.error("There was an error!", error);
        });
    },
    showAlertBtn() {
      this.showAlert = false;
    },
  },
};
</script>

<style scoped></style>
