<template>
  <form-container @submit="submit()" valid>
    <img src="~../../assets/file.png" class="figure" />
    <div class="text">
      <p>Pensando em você, nós cuidamos disso</p>
      <p>Cliquei <a>aqui</a> para acompanhar <br>seu status de registro</p>
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
      this.$router.push('7')
    }
  }
}
</script>

<style lang="scss" scoped>
.figure {
  display: block;
  width: 60%;
  margin: 60px auto;
}

.text {
  text-align: center;
}

a {
  color: $color-primary;
  text-decoration: none;
}

/deep/ .content {
  width: 100%;
  height: 100%;
}

</style>
