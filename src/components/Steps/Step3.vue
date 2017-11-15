<template>
  <form-container @submit="submit()" :valid="!!(cpf && rg && comprovante && holerites)">
    <form-file v-model="rg" label="RG" />
    <form-file v-model="cpf" label="CPF" />
    <form-file v-model="comprovante" label="Comprovante de Residência" />
    <form-file v-model="holerites" label="Holerites" />
  </form-container>
</template>

<script>
import FormContainer from '../Form/FormContainer'
import FormFile from '../Form/FormFile'
import * as types from '../../store/types'

export default {
  components: { FormContainer, FormFile },
  data () {
    return {
      rg: null,
      cpf: null,
      comprovante: null,
      holerites: null
    }
  },
  methods: {
    submit () {
      this.$store.dispatch(types.DOCUMENTS, { ...this.$data })
      this.$store.dispatch(types.STEPS_NEXT)
      this.$router.push('4')
    }
  }
}
</script>
