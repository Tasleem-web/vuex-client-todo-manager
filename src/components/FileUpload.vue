<template>
  <div class="custom-file-upload">
    <label for="file-upload" class="custom-file-upload1">
      <span style="font-size: 7rem">+</span>
    </label>
    <input id="file-upload" type="file" @change="onFileSelected" />
  </div>
</template>
<script>
// import { reactive, ref } from "vue";

import { mapActions, mapState } from "vuex";
export default {
  name: "FileUpload",
  data() {
    return {
      selectedFile: null,
    };
  },
  emits: ["input-change"],
  computed: {
    ...mapState({
      files: (state) => state.product.files,
    }),
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.uploadFile();
    },
    ...mapActions("product", ["uploadProductFile"]),
    uploadFile() {
      let data = new FormData();
      let file = event.target.files[0];
      data.append("name", file.name);
      data.append("file", file);
      this.$emit("input-change", data);
    },
  },
};
</script>
<style scoped>
.wrapper {
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}
.custom-file-upload input[type="file"] {
  display: none;
}
.custom-file-upload .custom-file-upload1 {
  border: 1px solid #ccc;
  padding: 6px 12px;
  cursor: pointer;
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}
</style>
