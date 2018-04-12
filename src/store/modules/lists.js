import apiKanban from "../../api-kanban"

const mutations = {
  'CREATE_LIST' (state, order) {
    return state.currentBoard;
  }
}

const actions = {
  createList: ({ commit }, order) => {},
  deleteList: ({ commit }, order) => {},
  alterList: ({ commit }, order) => {}
}

export default { actions, mutations }