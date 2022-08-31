<template>
  <div class="col-md-7 pe-0">
    <div class="form-left h-100 py-5 px-5">
      <form @submit.prevent="handleSubmit" class="row g-4">
        <div class="col-12">
          <label>Username<span class="text-danger">*</span></label>
          <div class="input-group">
            <div class="input-group-text">
              <i class="bi bi-person-fill"></i>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Username"
              v-model="user.username"
            />
          </div>
          <p class="text-danger" v-if="isSubmitted && !user.username">
            Username is required
          </p>
        </div>

        <div class="col-12">
          <label>Password<span class="text-danger">*</span></label>
          <div class="input-group">
            <div class="input-group-text">
              <i class="bi bi-person-fill"></i>
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Enter Password"
              v-model="user.Password"
            />
          </div>
          <p class="text-danger" v-if="isSubmitted && !user.Password">
            Password is required
          </p>
        </div>
        <div class="col-sm-6">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineFormCheck"
              v-model="user.rememberMe"
            />
            <label class="form-check-label" for="inlineFormCheck"
              >Remember me</label
            >
          </div>
        </div>

        <!-- <div class="col-sm-6">
                      <a href="#" class="float-end text-primary"
                        >Forgot Password?</a
                      >
                    </div> -->

        <div class="col-12">
          <button type="submit" class="btn btn-primary px-4 float-start mt-4">
            Register
          </button>
          <button type="submit" class="btn btn-primary px-4 float-end mt-4">
            <router-link :to="{ path: '/sign-in' }" class="text-white">
              login
            </router-link>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "RegistrationPage",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      isSubmitted: false,
    };
  },
  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  methods: {
    handleSubmit() {
      this.isSubmitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    },
  },
};
</script>
