import apiKanban from "../../api-kanban"

const mutations = {
  'MOVE_CARD' (state, order) {
    return state.currentBoard;
  }
}

const actions = {
  moveCard: ({ commit }, order) => {
    const data = Object.entries(order).map(([propName, value]) => ({ propName, value }))
    apiKanban
      .put("/cards/" + order.cardId, data)
      .then(res => {
        commit('MOVE_CARD', res.data.card)
      })
      .catch(error => console.log(error))
  },
  createCard: ({ commit }, order) => {},
  deleteCard: ({ commit }, order) => {},
  alterCard: ({ commit }, order) => {}

}

export default { actions, mutations }