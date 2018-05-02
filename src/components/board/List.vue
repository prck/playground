<template>
  <div class="col-md">
    <div class="card">
      <h3 class="card-header ">{{ list.name }}
        <i class="fas fa-plus float-right" data-toggle="modal" data-target="#exampleModal" />
      </h3>
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
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New card</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Message:</label>
                <textarea id="message-text" v-model="newText" class="form-control" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="addCard">Create</button>
          </div>
        </div>
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
  data: function() {
    return {
      newText: ""
    };
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
    },
    addCard: function(event) {
      const order = {
        listId: this.list.id,
        text: this.newText
      };
      this.newText = "";
      this.$store.dispatch("addCard", order);
    }
  }
};
</script>
<style>
.card-body > * {
  min-height: 500px;
}
.card {
  margin-bottom: 5px;
}
</style>
