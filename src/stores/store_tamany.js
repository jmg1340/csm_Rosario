import { defineStore } from 'pinia';

export const useTamanyStore = defineStore('tamany', {
  state: () => ({
    tamany: 16
  }),

  getters: {
    doubleCount (state) {
      return state.tamany * 2
    }
  },

  actions: {
    increment () {
      this.tamany++
    },
    decrement(){
      this.tamany--
    }
  }
})
