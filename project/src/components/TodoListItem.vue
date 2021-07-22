<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">X</button>
    <button @click="$emit('do',todo.id)">{{ todo.do }}</button>
    <p>{{ todo.date }}</p>
  </li>
</template>

<script>

export default {
  props : {
    todo : {
      type : Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>