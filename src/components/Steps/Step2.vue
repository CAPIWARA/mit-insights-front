<template>
  <form-container @submit="submit" :valid="method == '1' || !!(method && time && bank)">
    <form-field label="Qual a forma de pagamento?">
      <form-options
        name="payment-method"
        v-model="method"
        :options="methods"
      />
    </form-field>
    <form-field label="Em quanto tempo você espera pagar?">
      <select v-model="time">
        <option
          v-for="time in times"
          :key="time.id"
          :value="time.id"
        >{{ time.label }}</option>
        </option>
      </select>
    </form-field>
    <form-field label="Qual seu banco de preferencia?">
      <select v-model="bank">
        <option
          v-for="bank in banks"
          :key="bank.id"
          :value="bank.id"
        >{{ bank.name }}</option>
      </select>
    </form-field>
  </form-container>
</template>

<script>
import * as types from '../../store/types'
import { mapGetters } from 'vuex'
import FormOptions from '../Form/FormOptions'
import FormContainer from '../Form/FormContainer'
import FormField from '../Form/FormField'

export default {
  components: { FormContainer, FormOptions, FormField },
  data () {
    return {
      method: null,
      time: null,
      bank: null
    }
  },
  computed: mapGetters({
    times: types.PAYMENT_TIMES,
    banks: types.PAYMENT_BANKS,
    methods: types.PAYMENT_METHODS
  }),
  methods: {
    submit () {
      this.$store.dispatch(types.PAYMENT, { ...this.$data })
      this.$store.dispatch(types.STEPS_NEXT)
      this.$router.push('3')
    },
    input (method) {
      this.method = method
    }
  },
  async created () {
    await this.$store.dispatch(types.PAYMENT_TIMES, this.property)
  }
}
</script>

<style lang="scss">
.form-field {
  & > .label,
  & > .input { text-align: center; }
}
</style>
