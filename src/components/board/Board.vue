<template>
  <div>
    <div class="page-header">
      <h1 v-if="!currentlyEdited" @dblclick="edition(currentBoard.text)">{{ currentBoard.text }}</h1>
      <input v-edition-focus="currentlyEdited " v-else v-model="currentBoard.text " class="form-control " type="text " @blur="validatedEdition(currentBoard.id, currentBoard.text, 'saveBoard') " @keyup.esc="canceledEdition() ">
    </div>
    <div class="board">
      <div class="row">
        <app-list v-for="(list, index) in currentBoard.lists" :key="list.id" :list="list" :index="index" />
      </div>
    </div>
    <div class="btn-add">
      aze
      <button type="button" class="btn btn-info btn-circle btn-lg btn-add-global">
        <i class="fas fa-plus" />
      </button>
      <button type="button" class="btn btn-success btn-circle  btn-add-card">
        <i class="fas fa-plus" />
      </button>
      <button type="button" class="btn btn-warning btn-circle btn-add-list">
        <i class="fas fa-plus" />
      </button>
      <div/>
    </div>
  </div>
</template>


<script>
import list from "./List.vue";
import edition from "../../mixin/edition";
import { mapGetters } from "vuex";
export default {
  components: {
    "app-list": list
  },
  mixins: [edition],
  computed: {
    currentBoard() {
      return this.$store.getters.currentBoard;
    }
  }
};
</script>

<style>
.btn-add:hover .btn-add-card {
  display: block;
}
.btn-info.active:hover {
  background-color: red;
}
.page-header h1 {
  font-weight: 300;
}
.btn-add {
  background: yellow;
  height: 100%;
  position: fixed;
  margin: 0;
  padding: 500px 300px;
}
.btn-add > button {
  position: fixed;
  margin: 0;
  padding: 5px 3px;
}
.btn-add-global {
  bottom: 25px;
  right: 25px;
}
.btn-add-card {
  bottom: 85px;
  right: 35px;
  display: none;
}
.btn-add-list {
  bottom: 125px;
  right: 35px;
  display: none;
}
.btn-circle.btn-lg {
  width: 50px;
  height: 50px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 25px;
}
.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
</style>
