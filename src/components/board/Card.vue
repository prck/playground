<template>
  <draggable :options="{group: { name:'card'}}" @add="moveCard" @update="moveCard">
    <v-card class="ml-6 mt-1 pa-2" color="darken-2" :id="card.id">
      <v-card-title primary-title>
        <v-flex>
          <h3 class="headline mb-0">{{ card.name }}</h3>
          <v-text-field name="input-1" v-model="card.text" textarea/>
        </v-flex>
      </v-card-title>
    </v-card>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  props: {
    card: {
      type: Object,
      default: () => {},
      require: true
    }
  },
  methods: {
    moveCard: function(event) {
      console.log("moveCard @card", event);
      const order = {
        previousListId: event.from.id || event.from.parentElement.id,
        cardId: event.item.id,
        listId: event.to.id,
        index: event.newIndex
      };
      // this.$store.dispatch("moveCard", order);
    }
  }
};
</script>

