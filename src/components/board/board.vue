<template>
  <div>
    <v-container fluid grid-list-md>
      <h1 class="headline">{{ currentBoard.name }} </h1>
      <v-layout row wrap>
        <app-list v-for="list in currentBoard.lists" :key="list.id" :list="list" />
      </v-layout>
    </v-container>
    <v-btn fab bottom right color="pink" dark fixed @click.stop="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template> 


<script>
import list from "./List.vue";
import { mapGetters } from "vuex";
import draggable from "vuedraggable";
export default {
  components: {
    "app-list": list,
    draggable
  },
  computed: {
    currentBoard() {
      return this.$store.getters.currentBoard;
    }
  }
};
</script>
