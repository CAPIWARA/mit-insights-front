<template>
  <fieldset class="form-options">
    <fieldset v-for="(option, index) in options" :key="index">
      <input
        type="radio"
        :id="'option-' + index"
        :name="name"
        :value="option.value"
        :checked="option.value === value"
        @change="change(option.value)"
      />
      <label :for="'option-' + index">{{ option.label }}</label>
    </fieldset>
  </fieldset>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    name: String,
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    change (value) {
      if (value !== this.value)
        this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
fieldset {
  & > input[type="radio"] { display: none; }

  & > input[type="radio"] + label {
    background-color: $color-default;
  }

  & > input[type="radio"]:checked + label { background-color: $color-primary; }
}
</style>
