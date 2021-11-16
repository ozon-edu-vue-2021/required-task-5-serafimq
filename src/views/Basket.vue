<template>
  <div class="basket">
    <div class="basket-container">
      <Card v-for="product in basket"
            :key="product.id"
            :data="product"
            :isShowDeleteButton="true"
      />
    </div>
    <div>
      <button @click="showAlertBusket"> ПЕРЕЙТИ К ОФОРМЛЕНИЮ </button>
      <div>Общая стоймость: {{getTotalPrice}} рублей</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Card from "../components/Card";

export default {
  name: "Basket",
  components: {
    Card,
  },
  computed: {
    ...mapState(["basket"]),
    ...mapGetters(["getTotalPrice"]),
    allProductsInBusket() {
      return this.basket.map((product) => product.dish);
    }
  },
  methods: {
    showAlertBusket() {
      alert('Список продуктов к оформлению: ' + this.allProductsInBusket);
    }
  }
};
</script>

<style scoped>
  .basket {
    display: flex;
  }
.basket-container {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
}
</style>
