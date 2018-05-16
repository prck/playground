<template>
  <div class="col-md">
    <div class="card">
      <h3 v-if="!editedList" class="card-header">
        <span @dblclick="editList(list)">{{ list.name }}</span>
        <i class=" fas fa-plus float-right " data-toggle="modal " data-target="#exampleModal " />
      </h3>
      <input v-list-focus="editedList " v-else v-model="list.name " class="form-control " type="text " @blur="doneEdit(list) " @keyup.esc="cancelEdit(list) ">
      <div class="card-body ">
        <draggable :id="list.id " :options="{ group: 'card' } " @end="moveCard ">
          <div :id="card.id " v-for="card in list.cards " :key="card.id ">
            <app-card :card="card " />
          </div>
        </draggable>
      </div>
      <div class="card-footer text-muted ">
        {{ itemCount }}
      </div>
    </div>
    <div class="modal fade " id="exampleModal " tabindex="-1 " role="dialog " aria-labelledby="exampleModalLabel " aria-hidden="true ">
      <div class="modal-dialog " role="document ">
        <div class="modal-content ">
          <div class="modal-header ">
            <h5 class="modal-title " id="exampleModalLabel ">New card</h5>
            <button type="button " class="close " data-dismiss="modal " aria-label="Close ">
              <span aria-hidden="true ">&times;</span>
            </button>
          </div>
          <div class="modal-body ">
            <form>
              <div class="form-group ">
                <label for="message-text " class="col-form-label ">Message:</label>
                <textarea id="message-text " v-model="newText " class="form-control " />
              </div>
            </form>
          </div>
          <div class="modal-footer ">
            <button type="button " class="btn btn-primary " @click="addCard ">Create</button>
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
  directives: {
    "list-focus": {
      inserted: function(el) {
        el.focus();
      }
    }
  },
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
      newText: "",
      editedList: false
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
    },
    editList: function(list) {
      this.beforeEditCache = list.name;
      this.editedList = true;
    },
    doneEdit: function(list) {
      if (!this.editedList) {
        return;
      }
      this.editedList = false;
      this.$store.dispatch("saveList", { name: list.name, id: list.id });
    },
    cancelEdit: function(list) {
      this.editedList = false;
      list.name = this.beforeEditCache;
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
