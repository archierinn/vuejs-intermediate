<template>
  <section class="editor-kode flex">
    <app-formulir-area-teks
      :value="inputKode"
      nama="input-kode"
      label="Input Kode"
      @input="$emit('update:inputKode', $event)"
    />
    <div
      class="flex-1"
      style="margin-top: 24px"
    >
      <app-kode
        :kode="hasilHighlight"
        :bahasa-pemrograman="bahasaPemrogramanTerpilih"
        class="tampilan-kode--kustom"
        style="margin-top:0px"
      />
    </div>
  </section>
</template>

<script>
import AppKode from '../AppKode'

import { validator } from '../../utils'

export default {
  components: {
    AppKode
  },
  props: {
    inputKode: {
      default: '',
      required: true,
      validator
    },
    hasilHighlight: {
      type: String,
      default: '',
      required: true
    },
    bahasaPemrogramanTerpilih: {
      default: '',
      required: true,
      validator
    }
  }
}
</script>