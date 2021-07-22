<template>
  <div id="app">
    <div class="nav-bar"></div>
    <div class="cart">
      <p>Cart({{ cart.length }}</p>
    </div>
    <Product></Product>
    <Reply></Reply>
  </div>
</template>

<script>
import Product from './Product.vue';
import Reply from "./reply";
export default {
  name: "ProductPage",
  components : {
    Product, Reply
  },
  data() {
    return { cart : [] }
  },
  methods : {
    addToCart(variantId)  {
      this.cart.push(variantId)
    }
  }
}
</script>

<style scoped>

</style>