<template>
  <div>
    <input type="text" name="title" width="50%" placeholder="title" v-model="title"><br>
    <input type="text" name="content" width="50%" placeholder="content" v-model="content"><br>
    <br>
    <input type="submit" @click="addMemo" name="send" value="send">




    <center>
      <v-col
          cols="12"
          md="6"
      >
        <v-sheet
            elevation="12"
            class="pa-12"
        >
          <v-textarea
              v-model="title"
              :auto-grow="autoGrow"
              :clearable="clearable"
              :counter="counter ? counter : false"
              :filled="filled"
              :flat="flat"
              :hint="hint"
              :label="label"
              :loading="loading"
              :no-resize="noResize"
              :outlined="outlined"
              :persistent-hint="persistentHint"
              :placeholder="placeholder"
              :rounded="rounded"
              :row-height="rowHeight"
              :rows="rows"
              :shaped="shaped"
              :single-line="singleLine"
              :solo="solo"
          ></v-textarea>


          <v-textarea
              outlined
              name="input-7-4"
              label="내용"
              :value="content"
              :auto-grow="autoGrow"
              v-model="content"

          ></v-textarea>

          <v-file-input
              label="File input"
              filled
              prepend-icon="mdi-camera"
              v-model="file"
          ></v-file-input>
        </v-sheet>


      </v-col>


      <v-btn
          color="primary"
          dark
          class="mr-5 mb-10"
          @click="addMemo"
          style="display:inline"
      >
        저장
      </v-btn>
    </center>
  </div>
</template>

<script>
import memoApi from '../apis/memos';

export default {
  name: "AddMemo",
  data() {
    return {
      title : '',
      content : '',
      file : [],


      autoGrow: true,
      autofocus: true,
      clearable: false,
      counter: 0,
      filled: false,
      flat: false,
      hint: '',
      label: '',
      loading: false,
      noResize: false,
      outlined: false,
      persistentHint: false,
      placeholder: '',
      rounded: false,
      rowHeight: 24,
      rows: 1,
      shaped: false,
      singleLine: false,
      solo: false,
    }
  },
  methods: {
    // selectFile() {
    //   this.file=this.$refs.file.files[0];
    //   console.log(123);
    // },
    addMemo() {
      const data = new FormData();
      data.append('title', this.title);
      data.append('content', this.content);
      data.append('file',this.file);

      memoApi.addMemo(data)
        .then(response => {
          console.log(response.status);
          this.$router.push('/');
        }).catch(error => {
          console.log(error);
          this.$router.push('/');
      })
    }
  }
}
</script>

<style scoped>

</style>