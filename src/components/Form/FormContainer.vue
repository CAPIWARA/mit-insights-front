<template>
  <form @submit.prevent="$emit('submit')" class="steps-form">
    <div class="content">
      <slot />
    </div>

    <button
      :disabled="!valid"
      class="leave"
      type="submit"
    >
      <img src="~../../assets/arrow-right.png" class="image" alt="Próxima" />
    </button>
  </form>
</template>

<script>
export default {
  props: {
    valid: Boolean
  }
}
</script>

<style lang="scss">
.steps-form {
  position: relative;
  width: 80vmin;
  height: 80vmin;
  margin: auto;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid $color-primary;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .leave {
    position: absolute;
    right: 0;
    bottom: 25px;
    width: 50px;
    height: 50px;
    border: 0;
    background-color: transparent;
  }

  & > .leave > .image { width: 100%; }

  & > .content > fieldset + fieldset {
    margin-top: 10px;
  }
}
</style>

