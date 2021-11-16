<template>
  <div class="products-container">
    <Card
      v-for="product in getFavorites"
      :key="product.id"
      :data="product"
      :isShowDeleteButton="false"
    />
  </div>
</template>

<script>
import Card from "../components/Card";
import { mapGetters } from "vuex";

export default {
  name: "Favorites",
  components: {
    Card,
  },
  computed: {
    ...mapGetters(["getFavorites"]),
  },
};
</script>

<style scoped>
  .products-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
