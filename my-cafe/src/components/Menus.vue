<template>
  <div id="app">
    <h1>Menus</h1>
    <ul>
      <li v-for="menu in menus" :key="menu.id"><router-link :to="menuAddress(menu)">{{menu.food}}</router-link></li>
    </ul>
    <h1>{{ menu_name }}</h1>
    <h1>{{ searched_menu }}</h1>
  </div>
</template>

<script>
export default {
  name: "Menus",
  data() {
    return {
      menus : [
        { food : '피자', id : 1, price : 10000 },
        { food : '햄버거', id : 2, price : 20000},
        { food : '치킨', id : 3, price : 30000}
      ]
    }

  },
  computed : {
    menu_name () {
      const id = this.$route.params.menu_id;
      if(id == '1')
        return 'ㅇㅏ이스 아메리카노';
      else if(id == '2')
        return '카페라떼';
      else
        return ''
    }, searched_menu() {
      const id = this.$route.query.menu_id;
      if(id == '1')
        return '아아';
      else if(id == '2')
        return '카페라떼';
      else
        return '';
    },
    methods : {
      menuAddress(menu) {
        return '/menus/'+(menu.id)+'?id='+menu.id+'&'+'price='+menu.price;
      }
    }
  }
}
</script>

<style scoped>

</style>