<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Продукты</router-link>|
      <router-link to="/favorites">Избранные товары</router-link>|
      <router-link to="/basket">Корзина ({{ basket.length }})</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["loadProducts"]),
  },
  computed: {
    ...mapState(["basket"]),
  },
  created() {
    this.loadProducts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
