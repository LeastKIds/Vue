<template>
  <div>
    <a @click="logout">로그아웃</a><br>
    <router-link :to="`/Add`">메모 만들기</router-link>
    <h1 v-if="!memos">메모가 없어용</h1>
    <ul>
      <li v-for="(memo,index) in memos" :key="index">
        <router-link :to="`/memos/${memo.memoid}`">{{memo.title}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import memoApi from '../apis/memos'

export default {
  name: "Home",
  data () {
    return {
      memos : [],
    }
  },
  mounted () {
    memoApi.getMemos()
      .then(res => {
        this.memos = res.data
      }).catch( () => {
    })
  },
  methods: {
    logout() {
      this.$store.commit('signout');
    }
  }

}
</script>

<style scoped>

</style>