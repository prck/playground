<template>
  <v-card class="ml-6 mt-1 pa-2" color="blue-grey darken-2">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ card.name }}</h3>
        <div>{{ card.text }}</div>
      </div>
    </v-card-title>
  </v-card>
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
  created() {
    // eventBus.$on("daySelected", day => {
    //   this.targetDay = day;
    //   console.log('daySelected ' + this.targetCard)
    //   this.sendCardData(this.targetCard);
    // });
    console.log("Created");
  },
  methods: {
    // this starts the card drag and drop process
    chooseList: function(event) {
      // console.log('chooseCard ' + event.from.id);
      this.targetCard = event.from.id;
    },
    sendCardData: function(id) {
      // console.log('id ' + id)
      var myCard = this.cards.filter(function(card) {
        return card.id == id;
      });
      var cardData = {
        day: this.targetDay,
        card: myCard
      };
      // eventBus.$emit("sendingCard", cardData);
    },
    inputCard: function() {
      var elem = document.getElementById("card-input");
      var cardId = this.cards.length;
      console.log("id: " + cardId);
      console.log("value: " + elem.value);
      this.cards.push({ id: cardId, title: elem.value });
    },
    toggleNewCardCard: function() {
      console.log("click");
      this.newCardCard = !this.newCardCard;
    }
  }
};
</script>

