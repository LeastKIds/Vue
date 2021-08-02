<template>
  <div>
    <h1>MenusList</h1>
    <h1>{{ menu }}</h1>
  </div>

</template>

<script>
export default {
  name: "MenusList",
  props : ['menu_id'],
  computed : {
    menu() {
      if(this.menu_id == '1')
        return '피자'
      else if(this.menu_id == '2')
        return '햄버거'
      else
        return '치킨'
    }
  }
}
</script>

<style scoped>

</style>