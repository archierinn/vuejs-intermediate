function state() {
  return {
    apakahTampil: false,
    pesan: null,
    tipe: 'success'
  }
}

const mutations = {
  aturNotifikasi(state, { apakahTampil, pesan, tipe }) {
    state.apakahTampil = apakahTampil
    state.pesan = pesan
    state.tipe = tipe
  },
  hapusNotifikasi(state) {
    state.apakahTampil = false
    state.pesan = null
    state.tipe = 'success'
  }
}

const actions = {
  tampilkanNotifikasi({ commit }, { apakahTampil, pesan, tipe }) {
    commit('aturNotifikasi', {
      apakahTampil,
      pesan,
      tipe
    })
    setTimeout(() => {
      commit('hapusNotifikasi')
    }, 3000)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
