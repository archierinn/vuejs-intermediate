<template>
  <section class="card pengguna">
    <h1>{{ tampilkanFormulirPendaftaran ? 'DAFTAR' : 'MASUK' }}</h1>
    <app-formulir-input
      v-if="!tampilkanFormulirPendaftaran"
      v-model="namaPenggunaMasuk"
      nama="masuk"
      label="Nama Pengguna"
      class="margin-bottom mt-4"
    >
      <!-- <template #aksi="">
        <app-tombol
          nama="masuk"
          label="Masuk"
          class="margin-left"
          @klik="ketikaTombolMasukDiKlik"
        />
      </template> -->
    </app-formulir-input>
    <app-formulir-input
      v-else
      v-model="namaPenggunaDaftar"
      nama="daftar"
      label="Nama Pengguna"
      class="margin-bottom mt-4"
    >
      <!-- <template #aksi="">
        <app-tombol
          nama="daftar"
          label="Daftar"
          class="margin-left"
          @klik="ketikaTombolDaftarDiKlik"
        />
      </template> -->
    </app-formulir-input>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <app-tombol
            v-if="!tampilkanFormulirPendaftaran"
            nama="masuk"
            label="Masuk"
            kelas="btn-primary"
            @klik="ketikaTombolMasukDiKlik"
          />
          <app-tombol
            v-else
            nama="daftar"
            label="Daftar"
            kelas="btn-primary"
            @klik="ketikaTombolDaftarDiKlik"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-12 text-center">
          <a
            v-if="!tampilkanFormulirPendaftaran"
            href="#"
            @click="ketikaTautanDaftarDiKlik"
            style="font-size: 14px"
          >Belum punya akun? <b>Buat akun</b>
          </a>
          <a
            v-else
            href="#"
            @click="ketikaTautanDaftarDiKlik"
            style="font-size: 14px"
          >Sudah punya akun? <b>Masuk sekarang</b>
          </a>
        </div>
      </div>
    </div>
    <!-- <app-tombol
      nama="keluar"
      label="Keluar"
      kelas=""
      @klik="ketikaTombolKeluarDiKlik"
    /> -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      namaPenggunaMasuk: 'jefrydco',
      namaPenggunaDaftar: null,
      tampilkanFormulirPendaftaran: false
    }
  },
  methods: {
    ketikaTombolMasukDiKlik () {
      this.$store.dispatch('pengguna/masuk', {
        namaPengguna: this.namaPenggunaMasuk
      })
    },
    ketikaTombolDaftarDiKlik () {
      this.$store.dispatch('pengguna/daftar', {
        namaPengguna: this.namaPenggunaDaftar
      })
    },
    /* ketikaTombolKeluarDiKlik () {
      this.$store.dispatch('pengguna/keluar')
      this.$emit('keluar')
    }, */
    ketikaTautanDaftarDiKlik () {
      this.tampilkanFormulirPendaftaran = !this.tampilkanFormulirPendaftaran
    }
  }
}
</script>