<template>
  <section class="daftar-kode flex">
    <template v-for="itemKode in $store.state.kode.daftarKode">
      <div
        :key="itemKode.id"
        class="card col-3 flex-1"
        style="margin: 8px"
      >
        <app-kode
          :id-kode="itemKode.id"
          :kode="itemKode.code"
          :bahasa-pemrograman="itemKode.lang"
          :apakah-highlight-menyala="apakahHighlightMenyala"
          @terhapus="dapatkanDaftarKode"
        />
      </div>
    </template>
  </section>
</template>

<script>
import AppKode from '../AppKode'

export default {
  components: {
    AppKode
  },
  props: {
    apakahHighlightMenyala: {
      type: Number,
      default: 1,
      required: true
    },
    dapatkanDaftarKode: {
      type: Function,
      default () {
        return () => { }
      },
      required: true
    }
  }
}
</script>
