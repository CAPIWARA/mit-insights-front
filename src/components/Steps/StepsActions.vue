<template>
  <footer>
    <button :disabled="!can.prev" @click="prev()">Voltar</button>
    <button :disabled="!can.next" @click="next()">Avançar</button>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as types from '../../store/types'

export default {
  computed: mapGetters({
    can: types.STEPS_CAN
  }),
  methods: mapActions({
    next: types.STEPS_NEXT,
    prev: types.STEPS_PREV
  })
}
</script>
