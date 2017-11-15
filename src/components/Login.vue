<template>
  <div class="card">
    <h4>Acesso</h4>
    <form @submit.prevent="submit">
      <fieldset>
        <label for="email">E-Mail</label>
        <input
          v-model="email"
          id="email"
          type="email"
          placeholder="Ex. rodrigo.silva@gmail.com"
        />
      </fieldset>

      <fieldset>
        <label for="password">Senha</label>
        <input
          v-model="password"
          id="password"
          type="password"
          placeholder="Ex. ••••••••"
        />
      </fieldset>

      <fieldset>
        <button type="submit">Entrar</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import * as types from '../store/types'
import { mapActions } from 'vuex'

export default {
  methods: mapActions({
    login: types.AUTH_LOGIN
  })
}
</script>
