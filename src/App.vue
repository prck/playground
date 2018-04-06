<template>
  <v-app id="app">
    <app-header></app-header>
    <app-dashboard></app-dashboard>
  </v-app>
</template>

<script>
import header from "./components/navigation/header.vue";
import dashboard from "./components/dashboard/dashboard.vue";
export default {
  components: {
    "app-header": header,
    "app-dashboard": dashboard
  },
  data: () => {
    return {
      dialog: false
    };
  },
  created() {
    this.$store.dispatch("getBoards");
  }
};
</script>
