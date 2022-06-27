<template>
  <div class="notifications-list">
    <NotificationMessage />
  </div>
</template>

<script>
import NotificationMessage from "./Notification.vue";
export default {
  name: "NotificationsList",
  components: {
    NotificationMessage,
  },
};
</script>

<style scoped>
.notifications-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>
