<template>
  <header class="header">
    <figure v-if="!title" class="logo">
      <img class="image" src="~../../assets/logo.png" alt="Feel Clicks" />
    </figure>
    <h2 class="title" v-html="title"></h2>
  </header>
</template>

<script>
import { STEP, USER } from '../../store/types'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      step: STEP,
      user: USER
    }),
    title () {
      const titles = {
        2: `Olá, ${this.name}`,
        3: `${this.name}, agora precisamos de seus documentos`,
        4: `Muito obrigado, ${this.name}<br>Vamos validar os dados agora!`,
        5: `${this.name}, seu crédito<br>foi aprovado com succeso!`,
        6: `${this.name}, você sabia que quem<br>não registra não é dono!?`,
        default: ''
      }

      const title = titles[this.step] || titles.default
      return title
    },
    name () {
      const [ name = '' ] = this.user?.name?.split?.(' ') || []
      return name
    }
  }
}
</script>

<style lang="scss">
.logo {
  width: 100%;

  & > .image {
    max-width: 600px;
    margin: auto;
    display: block;

    @media screen and (max-width: 600px) { width: 100%; }
  }
}

.title {
  display: flex;
  height: 215px;
  justify-content: center;
  align-items: center;
  color: $color-primary;

  &:empty { display: none }
}
</style>



