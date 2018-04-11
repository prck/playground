import apiKanban from "../../api-kanban"

const state = {
  boards: [],
  currentBoard: {}
}

const getters = {
  boards: state => {
    return state.boards;
  },
  currentBoard: state => {
    return state.currentBoard;
  }
}

const mutations = {
  'SET_BOARDS' (state, boards) {
    state.boards = boards;
  },
  'SET_BOARD' (state, board) {
    state.currentBoard = board;
  }
}

const actions = {
  getBoards({ commit }) {
    apiKanban
      .get("/boards")
      .then(res => {
        commit('SET_BOARDS', res.data.boards)
      })
      .catch(error => console.log(error))
  },
  getBoard({ commit, state }) {
    apiKanban
      .get("/boards/jxe66xg")
      .then(res => {
        commit('SET_BOARD', res.data.board)
      })
      .catch(error => console.log(error))
  }
}

export default { state, getters, actions, mutations }