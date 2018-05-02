import apiKanban from "../../api-kanban"

const state = {
  boards: [],
  currentBoard: {},
  user: {}
}

const getters = {
  boards: state => {
    return state.boards;
  },
  currentBoard: state => {
    return state.currentBoard;
  },
  user: state => {
    return state.user;
  }
}

const mutations = {
  'SET_BOARDS' (state, boards) {
    state.boards = boards;
  },
  'SET_BOARD' (state, board) {
    state.currentBoard = board;
  },
  'MOVE_CARD' (state, { order, card }) {
    const previousList = state.currentBoard.lists.find(list => list.id === order.previousListId)
    const list = state.currentBoard.lists.find(list => list.id === order.listId)
    if (previousList && list) {
      list.cards = list.cards.filter(card => card.id !== order.cardId)
      previousList.cards = previousList.cards.filter(card => card.id !== order.cardId)
      list.cards.splice(order.index, 0, card)
    }
  },
  'SAVE_CARD' (state, { order, card }) {
    console.log(order);
    console.log(card);
  },
  'ADD_CARD' (state, { order, card }) {
    const list = state.currentBoard.lists.find(list => list.id === order.listId)
    list.cards.push(card)
    console.log(order);
    console.log(card);
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
  getBoard({ commit }) {
    apiKanban
      .get("/boards/jxe66xg")
      .then(res => {
        commit('SET_BOARD', res.data.board)
      })
      .catch(error => console.log(error))
  },
  moveCard: ({ commit }, order) => {
    const data = Object.entries(order).map(([propName, value]) => ({ propName, value }))
    apiKanban
      .put("/cards/" + order.cardId, data)
      .then(res => {
        commit('MOVE_CARD', { order, card: res.data.card })
      })
      .catch(error => console.log(error))
  },
  saveCard: ({ commit }, order) => {
    const data = Object.entries(order).map(([propName, value]) => ({ propName, value }))
    console.log(data);
    apiKanban
      .patch("/cards/" + order.id, data)
      .then(res => {
        commit('SAVE_CARD', { order, card: res.data.card })
      })
      .catch(error => console.log(error))
  },
  addCard: ({ commit }, order) => {
    apiKanban
      .post("/cards/", order)
      .then(res => {
        commit('ADD_CARD', { order, card: res.data.card })
      })
      .catch(error => console.log(error))
  },
}

export default { state, getters, actions, mutations }