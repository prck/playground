<template>
  <div>
    <router-view name="header" />

    <div class="container">
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getBoard");
    this.$store.dispatch("getBoards");
  }
};
</script>

