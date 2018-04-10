<template>
  <v-flex d-flex md12 lg3>
    <v-card class="ma-1 pa-1" style="min-height:600px;">
      <div>
        <h3 class=" headline ">{{ list.name }}</h3>
        <div>{{ list.text }}</div>
        <draggable style="min-height:600px; background-color:green display:flex" :options="{group: 'card'} " @add="newCard" @update="changeCard" :id="list._id">
          <app-card v-for="card in list.cards " :key="card._id " :card="card " />
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
    newCard: function(event) {
      console.log("newCard: idCard", event.item.id);
      console.log("newCard: idList", event.to.id);
      console.log("newCard: newIndex", event.newIndex);
      console.log("newCard: oldIndex", event.oldIndex);
    },
    changeCard: function(event) {
      console.log("changeCard: idCard", event.item.id);
      console.log("changeCard: idList", event.to.id);
      console.log("changeCard: newIndex", event.newIndex);
      console.log("changeCard: oldIndex", event.oldIndex);
    }
  }
};
</script>