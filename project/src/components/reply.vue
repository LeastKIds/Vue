<template>
  <div>
    <input type="text" placeholder="작성자" v-model="user"/>
    <input type="text" placeholder="댓글" v-model="comment"/>
    <button @click="save">등록</button>
    <br>
    <ul>
      <li v-for="msg in messages" v-bind:key="msg">
        <p>{{ msg.user }} : {{ msg.comment }}</p>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      messages : [],
      user : null,
      comment : null,
    }
  },
  methods : {
    save() {
      const message = {
        user : this.user,
        comment : this.comment,
      };

      this.messages.push(message)
      this.user = null;
      this.comment = null;
    }
  }
}
</script>

<style scoped>
input {
  width : 500px;
}
</style>