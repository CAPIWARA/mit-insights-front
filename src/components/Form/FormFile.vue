<template>
  <form-field class="form-file" :label="label">
    <input class="file" :id="'file-' + _uid" type="file" @change="change" multiple />
    <label class="label" :for="'file-' + _uid">
      <span v-if="value">{{ value && value.name }}</span>
      <span v-else>Pesquisar no seu computador</span>
      <button type="button" class="button" v-if="value" @click="exclude()">&times;</button>
    </label>
  </form-field>
</template>

<script>
import FormField from './FormField'

export default {
  components: { FormField },
  props: {
    label: String,
    value: {
      type: File,
      default: null
    }
  },
  methods: {
    change (event) {
      const file = event.target.files[0]
      this.$emit('input', file)
    },
    exclude () {
      this.$emit('input', null)
    }
  }
}
</script>


<style lang="scss">
.form-file > .input{
  & > .file { display: none; }

  & > .label {
    display: block;
    padding: 10px 20px;
    border-radius: 20px;
    color: #fff;
    background-color: $color-default;

    & > span {
      overflow: hidden;
      display: inline-block;
      max-width: 300px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  & > .label > .button {
    padding: 10px;
    border-radius: 50%;
  }
}
</style>

