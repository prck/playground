<template>
  <v-app id="inspire">
    <router-view name="header-top" />
    <v-content>
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getBoard");
    this.$store.dispatch("getBoards");
  }
};
</script>
