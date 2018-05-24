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
    validatedEdition: function(value, id, action) {
      if (!this.currentlyEdited) {
        return;
      }
      this.currentlyEdited = false;
      this.valueBeforeEditing = null
      this.$store.dispatch(action, { value, id });
    },
    canceledEdition: function() {
      this.currentlyEdited = false;
      this.valueBeforeEditing = null
    }
  }
}