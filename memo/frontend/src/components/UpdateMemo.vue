<template>
  <div>
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
              value="title"
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
          @click="updateMemo"
          style="display:inline"
      >
        저장
      </v-btn>
    </center>
  </div>
</template>

<script>
import memoApi from "@/apis/memos";

export default {
  name: "UpdateMemo",
  data () {
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
  methods : {
    // selectFile() {
    //   this.file=this.$refs.file.files[0];
    // },
    updateMemo() {
      const data = new FormData();
      data.append('content', this.content);
      data.append('title', this.title);
      data.append('file', this.file);


      memoApi.updateMemo(this.$route.params.memoId, data)
        .then( () => {
          alert('수정되었습니다.');
          const url = '/memos/' + this.$route.params.memoId;
          this.$router.push(url);
        })
    }
  },
  mounted() {
    memoApi.getMemo(this.$route.params.memoId)
        .then(res => {
          const memo = res.data;
          console.log(memo);
          this.title = memo.title;
          this.content = memo.content;
          this.$refs.fileupload = memo.file;
        }).catch(() => {
    });
  }

}
</script>

<style scoped>

</style>