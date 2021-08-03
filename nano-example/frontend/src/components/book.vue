<template>
  <div>
    <img :src="book.cover" width="200px"/>
    <p>제목 : {{ book.title }}</p>
    <p>부 제 : {{ book.subtitle }}</p>
    <p>작가 : {{ book.author }}</p>
    <p>출판 날짜 : {{ book.udate }}</p>
    <p>가격 : {{ book.price }}</p>
    <p>출판사 : {{ book.publisher }}</p>
    <p>정보 : {{ book.info }}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "book",
  props : ['bookId'],
  mounted() {
    this.$store.dispatch('getBookInformation',this.bookId);
  },
  computed : {
    ...mapState({
      book : state => state.books.book
    })
  }
}
</script>

<style scoped>

</style>