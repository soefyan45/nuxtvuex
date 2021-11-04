export const state = () => ({
  count: 0,
})
// getter
export const getters = {
  getCount (state) {
    return state.count
  },
}
export const mutations = {
  tambahCount (state) {
    state.count = state.count+1
  },
  kurangCount(state){
    state.count = state.count-1
  },
}
