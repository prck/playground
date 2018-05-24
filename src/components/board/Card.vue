<template>
  <div class="card task-lane-item" @dblclick="editCard(card)">
    <div class="card-block">
      <div v-if="!editedCard">
        <div v-html="compiledMarkdown" />
        <!-- <label @dblclick="editCard(card) ">{{ card.text }}</label> -->
      </div>
      <textarea v-card-focus="editedCard " v-else v-model="card.text " class="form-control " type="text " @blur="doneEdit(card) " @keyup.esc="cancelEdit(card) " />
    </div>
  </div>
</template>

<script>
import marked from "marked";
import edition from "../../mixin/edition";
export default {
  directives: {
    "card-focus": {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  mixins: [edition],
  props: {
    card: {
      type: Object,
      default: () => {},
      require: true
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.card.text, { sanitize: true });
    }
  },
  methods: {
    editCard: function(card) {
      this.beforeEditCache = card.text;
      this.editedCard = true;
    },
    doneEdit: function(card) {
      if (!this.editedCard) {
        return;
      }
      this.editedCard = false;
      this.$store.dispatch("saveCard", { text: card.text, id: card.id });
    },
    cancelEdit: function(card) {
      this.editedCard = null;
      card.text = this.beforeEditCache;
    }
  }
};
</script>

<style scoped>
.card {
  min-height: 50px;
}
</style>


