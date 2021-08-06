<template>
  <v-app>
    <v-app-bar
      app
      color="grey darken-1"
      dark
    >
      <div class="d-flex align-center">
        <router-link :to="`/`">
          <v-banner
              class="shrink mt-1">
            메모장
          </v-banner>
        </router-link>

      </div>



    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
