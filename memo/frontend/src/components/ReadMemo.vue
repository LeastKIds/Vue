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
              readonly="readonly"
              v-model="memo.title"
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
                readonly="readonly"
                outlined
                name="input-7-4"
                label="내용"
                :value="memo.content"
                :auto-grow="autoGrow"

            ></v-textarea>

          <center>
            <v-card class="d-inline-block mx-auto" v-if="memo.fileUrl">
              <v-container>
                <v-row justify="space-between">
                  <v-col cols="auto">
                    <v-img
                        height="300"
                        width="300"
                        :src="`http://localhost:3000/${memo.fileUrl}`"
                    ></v-img>
                  </v-col>

                  <v-col
                      cols="auto"
                      class="text-center pl-0"
                  >
                    <v-row
                        class="flex-column ma-0 fill-height"
                        justify="center"
                    >
                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-col>

                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-bookmark</v-icon>
                        </v-btn>
                      </v-col>

                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </center>
        </v-sheet>


      </v-col>





      <p>저장 시간 : {{memo.savedTime}}</p>

      <br><br>
      <center>
        <v-btn
            color="primary"
            dark
            class="ma-5"
            @click="updateMemo"
        >
          수정
        </v-btn>
      </center>


      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="error"
                dark
                v-bind="attrs"
                v-on="on"
            >
              삭제
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">삭제하시겠습니까?</v-card-title>
            <v-card-text>되돌릴 수 없다구요.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">취소</v-btn>
              <v-btn color="green darken-1" text @click="deleteMemo">삭제</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </center>

  </div>
</template>

<script>
import memoApi from '../apis/memos';
// import axios from 'axios';

export default {
  name: "ReadMemo",
  data() {
    return {
      memo : {},
      dialog : false,


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
  mounted() {
    memoApi.getMemo(this.$route.params.memoId)
      .then(res => {
        this.memo = res.data;
        console.log(this.memo);
      }).catch(() => {
    });
  },
  methods: {
    deleteMemo() {
      memoApi.deleteMemo(this.memo.memoid)
        .then( () => {
          alert('삭제되었습니다.');
          this.$router.push('/');
        }).catch(err => {
          console.log(err);
      })
    },
    updateMemo() {
      const url = '/memos/update/' + this.memo.memoid;
      this.$router.push(url);
    }
  }
}
</script>

<style scoped>

</style>