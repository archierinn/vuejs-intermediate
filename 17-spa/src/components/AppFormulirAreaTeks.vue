<template>
  <div
    :class="`opsi-formulir-${nama} flex flex-column ma-0`"
    style="margin-left: 0px !important; margin-top: 0px !important; margin-bottom: 0px !important"
  >
    <label
      class="label"
      :for="nama"
    >
      {{ label }}
    </label>
    <textarea
      :value="value"
      :id="nama"
      class="form-control"
      @input="ketikaNilaiBerubah"
    ></textarea>
  </div>
</template>

<script>
import { formulir } from '../mixins'

export default {
  name: 'AppFormulirAreaTeks',
  mixins: [formulir],
  methods: {
    ketikaNilaiBerubah (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
