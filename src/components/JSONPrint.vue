<template>
  <div>
    <pre>{{ JSON.stringify(data) }}</pre>
  </div>
</template>

<script>
export default {
  name: "JOSNPrint",
  props: ["data"],
};
</script>

<style scoped></style>
