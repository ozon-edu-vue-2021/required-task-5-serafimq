<template>
  <div class="products-container">
    <Card
      v-for="product in products"
      :key="product.id"
      :data="product"
      :isShowDeleteButton="false"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "../components/Card";

export default {
  name: "Products",
  components: {
    Card,
  },
  computed: {
    ...mapState(["products", "basket"]),
  },
};
</script>

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
