<template>
  <div
    class="tampilan-kode flex flex-column"
    style="height:90%;max-width:100%"
  >
    <data-code
      :code="kode"
      :lang="bahasaPemrograman"
      :is-highlighted="apakahHighlightMenyala"
      style="text-align: left; max-height: 250px; overflow-y: auto"
    />
    <app-tombol
      v-if="idKode"
      nama="hapus"
      label="Hapus"
      kelas="btn-error"
      @klik="ketikaTombolHapusDiKlik"
      style="margin-top:auto"
    >
    </app-tombol>
  </div>
</template>

<script>
import { validator } from '../utils'
import AppTombol from './AppTombol'

export default {
  components: {
    AppTombol
  },
  name: 'AppKode',
  props: {
    idKode: {
      type: String,
      default: null
    },
    kode: {
      default: '',
      required: true,
      validator
    },
    bahasaPemrograman: {
      default: '',
      required: true,
      validator
    },
    apakahHighlightMenyala: {
      type: Number,
      default: 1
    }
  },
  methods: {
    async ketikaTombolHapusDiKlik () {
      const hasilKonfirmasi = confirm('Apakah kamu yakin?')
      if (hasilKonfirmasi && this.idKode) {
        await this.$store.dispatch('kode/hapusKode', {
          idPengguna: this.$store.state.pengguna.idPengguna,
          idKode: this.idKode
        })
        await this.$emit('terhapus')
      }
    }
  }
}
</script>
