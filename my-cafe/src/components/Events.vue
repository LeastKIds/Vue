<template>
  <div id="app">
    <h1>Events</h1>
    <h1>{{ event_title }}</h1>
    <h1>{{ searched_event }}</h1>
    <input type="text" name="name" v-model="name">
    <button @click="onSubmit">send</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Events",
  props: ['event_id', 'query_id'],
  computed : {
    event_title() {
      if(this.event_id == '1')
        return '1+1';
      else if(this.event_id == '2')
        return 'Free cookies';
      else
        return '';
    }, searched_event() {
      if(this.query_id)
        return '2+1';
      else
        return '123';

    }
  },
  data() {
    return {
      name : ''
    }
  },
  methods : {
    onSubmit() {
      var dataform = new FormData();
      dataform.append('name', this.name);

      axios.post('http://localhost:8000/voca/word/store', dataform)
        .then(response => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>

</style>