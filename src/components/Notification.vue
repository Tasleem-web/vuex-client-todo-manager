<template>
  <div :class="typeClass" class="alert-dismissible fade show" role="alert">
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
    {{ notification.message }}
  </div>
</template>

<script>
export default {
  name: "NotificationMessage",
  props: ["notification"],
  computed: {
    typeClass() {
      return `alert alert-${this.notification}`;
    },
  },
};
</script>

<style scoped></style>
