import {defineStore} from 'pinia'

export const useUrlData = defineStore("main", {
  state: () => ({
    data: null,
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
  }
})