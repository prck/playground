<template>
  <div class="col-md">
    <div class="card">
      <h3 v-if="!currentlyEdited" class="card-header">
        <i v-if="index===0" class="fas fa-plus float-right" data-toggle="modal" data-target="#addCardModal" />
        <span @dblclick="edition(list.text)">{{ list.text }}</span>
      </h3>
      <input v-edition-focus="currentlyEdited " v-else v-model="list.text " class="form-control " type="text " @blur="validatedEdition(list.id, list.text, 'saveList') " @keyup.esc="canceledEdition() ">
      <div class="card-body ">
        <draggable :id="list.id " :options="{ group: 'card' } " @end="moveCard ">
          <div v-for="card in list.cards " :key="card.id " :id="card.id ">
            <app-card :card="card " />
          </div>
        </draggable>
      </div>
      <div class="card-footer text-muted ">
        {{ itemCount }}
      </div>
    </div>
    <div class="modal fade" id="addCardModal" tabindex="-1" role="dialog" aria-labelledby="addCardModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Message:</label>
                <textarea id="message-text" v-model="newText" class="form-control" @keyup.alt.enter="addCard" />
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
import edition from "../../mixin/edition";
export default {
  components: {
    "app-card": card,
    draggable
  },
  mixins: [edition],
  props: {
    list: {
      type: Object,
      default: () => {},
      require: true
    },
    index: {
      type: Number,
      default: () => 0
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
    addCard: function() {
      console.log(this.list.cards);
      console.log(this.list.text);
      const order = {
        listId: this.list.id,
        text: this.newText
      };
      console.log(order);
      this.newText = "";
      // this.$store.dispatch("addCard", order);
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
