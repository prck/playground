<template>
  <div>
    <div class="page-header">
      <h1>{{ currentBoard.name }}</h1>
      <p class="lead">{{ currentBoard.text }}</p>
    </div>
    <div class="board">
      <div class="row">
        <app-list v-for="list in currentBoard.lists" :key="list.id" :list="list" />
      </div>
    </div>
  </div>
</template>



<script>
import list from "./List.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    "app-list": list
  },
  computed: {
    currentBoard() {
      return this.$store.getters.currentBoard;
    }
  }
};
</script>

<style>
.page-header h1 {
  font-weight: 300;
}
</style>
