<template>
  <fieldset class="form-field">
    <label
      v-if="label"
      class="label"
    >{{ label }}</label>

    <div class="input" v-if="$slots.default">
      <slot />
    </div>

    <input
      v-else
      class="input"
      v-bind="$attrs"
      :value="value"
      @input="event => $emit('input', event.target.value)"
    />
  </fieldset>
</template>

<script>
export default {
  props: {
    label: String,
    value: {}
  }
}
</script>

<style lang="scss">
.form-field {
  & > .label {
    display: block;
  }

  & > .input {
    @at-root input#{&} {
      border-radius: 20px;
    }

    & > select {
      width: 100%;
    }
  }
}
</style>

