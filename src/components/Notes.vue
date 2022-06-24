<template>
  <ul>
    <li v-for="(note, index) in notes" :key="index">
      {{ note }}
    </li>
  </ul>
  <InputComp />
  <!-- <TotalNotesCount :totalNotesCount="totalNotesCount" /> -->
  <TotalNotesCount />
  <!-- <p>Total Notes - {{ totalNotes }}</p> -->
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import TotalNotesCount from "./TotalNotesCount.vue";
import InputComp from "./InputComp.vue";

export default {
  name: "MyNotes",
  components: {
    TotalNotesCount,
    InputComp,
  },
  setup() {
    const store = useStore();
    const notes = computed(() => store.state.notes);
    const totalNotesCount = computed(() => store.getters.totalNotes);
    const title = ref("");

    function save() {
      if (title.value) {
        store.dispatch("saveNotes", title.value);
        title.value = "";
      }
    }
    return { notes, title, save, totalNotesCount };
  },
};
</script>

<style scoped></style>
