<template>
  <div class="product">
    <div class="product-image">
      <img v-bind:src="image">
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inventory>10">In Stock</p>
      <p v-else-if="inventory>0">Almost sold out!</p>
      <p v-else>Out of Stock</p>

      <ul>
        <li v-for="detail in details" v-bind:key="detail">{{ detail.text }}</li>
      </ul>
      <div v-for="(variant, index) in variants" :key="variant.variantId"
           class="color-box" :style="{backgroundColor : variant.variantColor}"
           @mouseover="updateProduct(index)">
        <p >{{ variant.variantColor }}</p>
      </div>

      <button @click="addToCart"
              :disabled="!inStock"
              :class="{disabledButton:!inStock}">Add to Cart</button>



    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product : 'Socks',
      // image : './assets/images/socks_green.jpg',
      //inStock : true,
      inventory : null,
      details : [
        {text : '80% cotton'},
        {text : '20% polyester'},
        {text : 'Gender-neutral'},
      ],
      variants : [
        {variantId : 2234, variantColor : 'green', variantImage : require('@/assets/images/socks_green.jpg'),
          variantQuantity : 10,},
        {variantId: 2235, variantColor : 'blue', variantImage : require('@/assets/images/socks_blue.jpg'),
          variantQuantity : 10,},
      ],
      // cart : 0,
      brand : 'Vue',
      selectedVariant : 0,
    }

  },
  methods : {
    addToCart()  {
      this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId);
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed : {
    title()  {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if(this.preminum)
        return "Free"
      return 2.99
    }
  },
};
</script>

<style scoped>

</style>