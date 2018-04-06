<template>
  <v-app id="app">
    <app-header/>
    <app-dashboard/>
  </v-app>
</template>

<script>
import header from "./components/layout/header.vue";
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
