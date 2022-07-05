import {defineStore} from 'pinia'

export const useUrlData = defineStore("main", {
  state: () => ({
    data: null,
    history: null
  }),
  getters: {
    getData: (state) => {
      state.data
    }
  },
  actions: {
    async addData(data) {
      this.data = data
    },
    async addHistory(data) {
      this.history = data
    }
  }
})