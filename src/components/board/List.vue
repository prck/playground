<template>
  <div class="col-md">
    <div class="card">
      <h3 class="card-header">{{ list.name }}</h3>
      <div class="card-body">
        <draggable :id="list.id" :options="{ group: 'card' }" @end="moveCard">
          <div :id="card.id" v-for="card in list.cards" :key="card.id">
            <app-card :card="card" />
          </div>
        </draggable>
      </div>
      <div class="card-footer text-muted">
        {{ itemCount }}
      </div>
    </div>
  </div>
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
  computed: {
    itemCount() {
      if (!this.list.cards) return "";
      if (this.list.cards.length === 1) return "1 task";
      return `${this.list.cards.length} tasks`;
    }
  },
  methods: {
    moveCard: function(event) {
      const order = {
        previousListId: event.from.id,
        cardId: event.item.id,
        listId: event.to.id,
        index: event.newIndex
      };
      this.$store.dispatch("moveCard", order);
    }
  }
};
</script>
<style>
.card-body > * {
  min-height: 50px;
}
</style>
