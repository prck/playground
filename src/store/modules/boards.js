import apiKanban from "../../api-kanban"

const state = {
  boards: []
}

const getters = {
  boards: state => {
    return state.boards;
  }
}

const mutations = {
  'SET_BOARDS' (state, boards) {
    console.log(boards);
    state.boards = boards;
  }
}

const actions = {
  getBoards({ commit, state }) {
    apiKanban
      .get("/boards")
      .then(res => {
        commit('SET_BOARDS', res.data.boards)
      })
      .catch(error => console.log(error))
  }
}

export default { state, getters, actions, mutations }