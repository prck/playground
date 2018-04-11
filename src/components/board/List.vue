<template>
  <v-flex d-flex md12 lg3>
    <v-card class="ma-1 pa-1" style="min-height:600px;">
      <div>
        <h3 class=" headline ">{{ list.name }}</h3>
        <draggable style="min-height:600px; background-color:green display:flex" :options="{group: 'card'} " @add="moveCard" @update="moveCard" :id="list.id">
          <app-card v-for="card in list.cards " :key="card.id " :card="card " />
        </draggable>
      </div>
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
  },
  methods: {
    moveCard: function(event) {
      console.log("moveCard @list");
      const order = {
        previousListId: event.from.id || event.from.parentElement.id,
        cardId: event.item.id,
        listId: event.to.id,
        index: event.newIndex
      };
      this.$store.dispatch("moveCard", order);
    }
  }
};
</script>