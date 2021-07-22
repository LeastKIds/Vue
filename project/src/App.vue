<template>
  <div id="app">
<!--    <ProductPage></ProductPage>-->
    <h1>My Todo App!</h1>
    <TodoList></TodoList>
  </div>
</template>

<script>
// import ProductPage from './components/ProductPage.vue'
import TodoList from './components/TodoList.vue'

export default {
  // name: 'App',
  // components: {
  //   ProductPage
  // }
  name : 'App',
  components: {
    TodoList
  }
}
</script>

<style>

@import './assets/css/styles.css';
*, *::before, *::after {
  box-sizing: border-box;
}
#app {
  max-width : 400px;
  margin : 0 auto;
  line-height : 1.4;
  font-family : 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing : antialiased;
  -moz-osx-font-smoothing: grayscale;
  color : #32485F;
}

h1{
  text-align: center;
}
</style>
