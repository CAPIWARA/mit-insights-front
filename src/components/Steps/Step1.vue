<template>
  <form-container :valid="!!(email && name && password)" @submit="submit()">
    <form-field
      v-model="email"
      label="E-Mail"
      type="email"
    />
    <form-field
      v-model="name"
      label="Nome"
      type="text"
    />
    <form-field
      v-model="password"
      label="Senha"
      type="password"
    />
  </form-container>
</template>

<script>
import * as types from '../../store/types'
import FormContainer from '../Form/FormContainer'
import FormField from '../Form/FormField'

export default {
  components: { FormContainer, FormField },
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      const user = { ...this.$data }
      this.$store.dispatch(types.USER_CREATE, user)
      this.$store.dispatch(types.STEPS_NEXT)
      this.$router.push('2')
    }
  },
  created () {
    this.email = this.$route.query.email || this.email
    this.$store.dispatch(types.PROPERTY, this.$route.query.property)
  }
}
</script>
