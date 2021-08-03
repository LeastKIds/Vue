<template>
  <div>
    <ul>
      <li v-for="l in $store.state.books.books" :key="l.bookId">
        <img :src="l.cover" width="200px"/> <br>
        <router-link :to="`/${l.bookId}`">{{ l.title }}</router-link>
        <p>{{ l.author }}</p>

      </li>
    </ul>
  </div>
</template>

<script>
// import axios from 'axios';
// import {mapState, mapMutations, mapActions} from 'vuex';
export default {
  name: "Home",
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.$store.dispatch('getBooks');
  }
}
</script>

<style scoped>
ul {
  list-style:none;
  margin:0;
  padding:0;
}

li {
  margin: 20px;
  padding: 0 0 0 0;
  border : 0;
  float: left;
}
</style>