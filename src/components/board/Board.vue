<template>
  <div>
    <div class="page-header">
      <h1 v-if="!currentlyEdited" @dblclick="edition(currentBoard.text)">{{ currentBoard.text }}</h1>
      <input v-edition-focus="currentlyEdited " v-else v-model="currentBoard.text " class="form-control " type="text " @blur="validatedEdition(currentBoard) " @keyup.esc="canceledEdition() ">
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
import edition from "../../mixin/edition";
import { mapGetters } from "vuex";
export default {
  components: {
    "app-list": list
  },
  mixins: [edition],
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
