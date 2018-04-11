<template>
  <div>
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" app fixed>
      <v-list dense>
        <template v-for="board in boards">
          <v-list-tile @click="" :key="board.id">
            <v-list-tile-action>
              <v-icon>airplay</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ board.name }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template> 

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    drawer: Boolean
  },
  computed: {
    boards() {
      return this.$store.getters.boards;
    }
  },
  methods: {
    mini: function() {
      return !this.drawer;
    }
  }
};
</script>
