export default {
  directives: {
    "edition-focus": {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  data: function() {
    return {
      currentlyEdited: false,
      valueBeforeEditing: ''
    }
  },
  methods: {
    edition: function(value) {
      this.valueBeforeEditing = value;
      this.currentlyEdited = true;
    },
    validatedEdition: function(id, text, action) {
      if (!this.currentlyEdited) {
        return;
      }
      console.log(id, text, action);
      this.currentlyEdited = false;
      this.valueBeforeEditing = null
      this.$store.dispatch(action, { text, id });
    },
    canceledEdition: function() {
      this.currentlyEdited = false;
      this.valueBeforeEditing = null
    }
  }
}