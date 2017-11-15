<template>
  <form @submit.prevent="submit">
    <fieldset>
      <label>Qual a forma de pagamento?</label>
      <form-options
        name="payment-method"
        v-model="method"
        :options="methods"
      />
    </fieldset>
    <fieldset>
      <label>Em quanto tempo você espera pagar?</label>
      <select v-model="time">
        <option
          v-for="time in times"
          :key="time.id"
          :value="time.id"
        >{{ time.label }}</option>
        </option>
      </select>
    </fieldset>
    <fieldset>
      <label>Qual seu banco de preferencia?</label>
      <select v-model="bank">
        <option
          v-for="bank in banks"
          :key="bank.id"
          :value="bank.id"
        >{{ bank.name }}</option>
      </select>
    </fieldset>
    <button :disabled="!method" type="submit">Okay</button>
  </form>
</template>

<script>
import * as types from '../../store/types'
import { mapGetters } from 'vuex'
import FormOptions from '../Form/FormOptions'

export default {
  components: { FormOptions },
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
