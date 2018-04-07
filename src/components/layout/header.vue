<template>
  <div>
    <app-aside :drawer="drawer" />
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" fixed app dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" />
        <span class="hidden-sm-and-down">Kanban</span>
      </v-toolbar-title>
      <!-- <v-text-field flat solo-inverted prepend-icon="search" label="Search" class="hidden-sm-and-down"></v-text-field> -->
      <v-spacer />
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img src="https://vuetifyjs.com/static/doc-images/logo.svg" alt="Vuetify">
        </v-avatar>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import aside from "./Aside.vue";
export default {
  components: {
    "app-aside": aside
  },
  data: () => {
    return {
      drawer: false
    };
  }
};
</script>
