<template>
  <form-container @submit="submit()" valid>
    <img src="~../../assets/check.png" class="figure" />
    <div class="text">
      <p>Cliquei <a href="static/Documento.pdf" download>aqui</a> para baixar seu contrato</p>
      <p><strong>NÃO SE ESQUEÇA!</strong></p>
      <p>Você tem até <strong>7 dias úteis</strong> para<br> prencher o contrato</p>
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
      this.$router.push('6')
    }
  }
}
</script>

<style lang="scss" scoped>
.figure {
  display: block;
  width: 60%;
  margin: 90px auto;
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
