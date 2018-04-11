<template>
  <draggable :options="{group: { name:'card'}}">
    <v-card class="ml-6 mt-1 pa-2" color="blue-grey darken-2" :id="card.id">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ card.name }}</h3>
          <div>{{ card.text }}</div>
        </div>
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
  }
};
</script>

