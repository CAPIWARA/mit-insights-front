<template>
  <form-container @submit="submit()" valid>
    <img src="~../../assets/clock.png" class="figure" />
    <div class="text">
      <p>Aguarde</p>
      <p>Entraremos em contato via e-mail</p>
      <p>Em até 5 dias úteis!</p>
    </div>
  </form-container>
</template>

<script>
import FormContainer from '../Form/FormContainer'
import * as types from '../../store/types'

export default {
  components: { FormContainer },
  methods: {
    submit () {
      this.$store.dispatch(types.STEPS_NEXT)
      this.$router.push('5')
    }
  }
}
</script>

<style lang="scss" scoped>
.figure {
  display: block;
  height: 80%;
  margin: auto;
}

.text {
  text-align: center;
}

/deep/ .content {
  width: 100%;
  height: 100%;
}
</style>
