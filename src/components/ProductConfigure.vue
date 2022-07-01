<template>
  <div class="inputDnD">
    <div class="form-group">
      <input
        type="file"
        class="form-control-file text-danger font-weight-bold"
        id="inputFile"
        data-title="Drag and drop a file"
        :v-model="state.upload"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "ProductConfiguration",
  setup() {
    const state = reactive({
      upload: "",
      errors: "",
    });
    return {
      state,
    };
  },
  methods: {
    // readUrl() {
    //   if (input.files && input.files[0]) {
    //     let reader = new FileReader();
    //     reader.onload = (e) => {
    //       // let imgData = e.target.result;
    //       let imgName = input.files[0].name;
    //       input.setAttribute("data-title", imgName);
    //       console.log(e.target.result);
    //     };
    //     reader.readAsDataURL(input.files[0]);
    //   }
    // },
  },
  mounted() {
    console.log(this.state);
  },
};
</script>

<style scoped>
.inputDnD {
  width: 70%;
  margin: 0 auto;
}
.inputDnD .form-control-file {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 6em;
  outline: none;
  visibility: hidden;
  cursor: pointer;
  background-color: #c61c23;
  box-shadow: 0 0 5px solid currentColor;
}
.inputDnD .form-control-file:before {
  content: attr(data-title);
  position: absolute;
  left: 0;
  width: 100%;
  min-height: 6em;
  line-height: 2em;
  padding-top: 1.5em;
  opacity: 1;
  visibility: visible;
  text-align: center;
  border: 0.25em dashed currentColor;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: visible;
}
.inputDnD .form-control-file:hover:before {
  border-style: solid;
  box-shadow: inset 0px 0px 0px 0.25em currentColor;
}

body {
  background-color: #1f1f1f;
}
</style>
