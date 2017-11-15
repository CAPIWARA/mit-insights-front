<template>
  <form @submit.prevent="submit">
    <fieldset>
      <label>E-Mail</label>
      <input v-model="email" type="email" />
    </fieldset>
    <fieldset>
      <label>Nome</label>
      <input v-model="name" type="text" />
    </fieldset>
    <fieldset>
      <label>Senha</label>
      <input v-model="password" type="password" />
    </fieldset>
    <button :disabled="!name || !email || !password" type="submit">Okay</button>
  </form>
</template>

<script>
import * as types from '../../store/types'

export default {
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
