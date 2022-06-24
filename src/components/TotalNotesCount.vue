<template>
  <div>Total Notes Count - {{ totalNotesCount }}</div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "TotalNotesCount",
  //   props: {
  //     totalNotesCount: Number,
  //   },
  setup() {
    const store = useStore();
    const totalNotesCount = computed(() => store.getters.totalNotes);
    return { totalNotesCount };
  },
};
</script>

<style scoped></style>
