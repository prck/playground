<template>
  <v-flex d-flex md12 lg3>
    <v-card class="ma-1 pa-1">
      <v-card-title primary-title>
        <h3 class="headline">{{ list.name }}</h3>
      </v-card-title>
      <v-container fluid fill-width>
        <v-layout wrap column>
          <draggable v-model="list.cards" :options="{group:'cards'}" @start="drag=true" @end="drag=false">
            <app-card v-for="card in list.cards" :key="card._id" :card="card" />
          </draggable>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import card from "./Card.vue";
import draggable from "vuedraggable";
export default {
  components: {
    "app-card": card,
    draggable
  },
  props: {
    list: {
      type: Object,
      default: () => {},
      require: true
    }
  }
};
</script>