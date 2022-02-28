<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data:() => ({
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
  props: {
    source: String,
  },
}
</script>

<style>
</style>
