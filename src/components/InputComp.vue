<template>
  <div>
    <input type="text" v-model="title" @keypress.enter="save" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  name: "InputComp",
  setup() {
    const store = useStore();
    const title = ref("");
    function save() {
      store.dispatch("saveNotes", title.value);
      title.value = "";
    }
    return {
      title,
      save,
    };
  },
};
</script>

<style scoped></style>
