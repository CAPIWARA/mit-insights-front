<template>
  <fieldset class="form-options">
    <fieldset
      v-for="(option, index) in options"
      class="option"
      :key="index"
    >
      <input
        class="input"
        type="radio"
        :id="'option-' + index"
        :name="name"
        :value="option.value"
        :checked="option.value === value"
        @change="change(option.value)"
      />
      <label class="toggler" :for="'option-' + index">{{ option.label }}</label>
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
.form-options {
  & > .option {
    @extend %form-option;
    display: inline-flex;
  }

  & > .option + .option { margin-left: 20px; }
}

%form-option {
  & {
    min-width: 150px;
  }

  & > .input {
    display: none;
  }

  & > .toggler {
    width: 100%;
    padding: 20px 10px;
    font-size: $base-font-size - 4px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    border-radius: 25px;
    background-color: $color-default;
    transition: background-color ease-in .3s;
  }

  & > .input:checked + .toggler {
    background-color: $color-primary;
  }
}
</style>
