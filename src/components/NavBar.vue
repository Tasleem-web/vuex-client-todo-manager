<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="mail">
      <template #icon>
        <mail-outlined />
      </template>
      <router-link to="/">Home</router-link>
    </a-menu-item>
    <a-menu-item key="app">
      <template #icon>
        <appstore-outlined />
      </template>
      <router-link to="/product">Product</router-link>
    </a-menu-item>
    <a-menu-item key="signin">
      <template #icon>
        <login-outlined />
      </template>
      <router-link to="/login">Sign In</router-link>
    </a-menu-item>
    <a-menu-item key="cart">
      <template #icon>
        <shopping-cart-outlined />
      </template>
      <a-badge count="5">
        <router-link to="/cart">Cart</router-link>
      </a-badge>
    </a-menu-item>
  </a-menu>
</template>
<script>
import { ref } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "NavBar",
  components: {
    MailOutlined,
    LoginOutlined,
    AppstoreOutlined,
    // SettingOutlined,
    ShoppingCartOutlined,
  },

  setup() {
    const current = ref(["mail"]);
    return {
      current,
    };
  },
};
</script>
