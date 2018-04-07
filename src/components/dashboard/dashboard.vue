<template>
  <div>
    Dashboard
    <app-board/>
    <v-btn fab bottom right color="blue" dark fixed @click.stop="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import board from "./Board.vue";
export default {
  components: {
    "app-board": board
  }
};
</script>
