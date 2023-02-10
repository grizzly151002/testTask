import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [{
      id: 1,
      nickname: 'UserNickname 1'
    },
    {
      id: 2,
      nickname: 'UserNickname 2'
    },
    {
      id: 3,
      nickname: 'UserNickname 3'
    },
    ]
  },
  getters: {
  },
  mutations: {
    deleteUser(state, data){
      state.users.splice(data, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
