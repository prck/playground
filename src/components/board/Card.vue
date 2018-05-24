<template>
  <div class="card task-lane-item" @dblclick="edition(card.text)">
    <div class="card-block">
      <div v-if="!currentlyEdited">
        <div v-html="compiledMarkdown" />
      </div>
      <textarea v-edition-focus="currentlyEdited " v-else v-model="card.text " class="form-control " type="text " @blur="validatedEdition(card.id, card.text, 'saveCard') " @keyup.esc="canceledEdition() " />
    </div>
  </div>
</template>          
     
<script>
import edition from "../../mixin/edition";
import marked from "marked";
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
      let text = this.card.text || "";
      return marked(text, { sanitize: true });
    }
  }
};
</script>

<style scoped>
.card {
  min-height: 50px;
}
</style>


