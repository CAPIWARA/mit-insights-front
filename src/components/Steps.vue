<template>
  <section class="steps-container">
    <steps-actions />

    <main class="steps">
      <router-view />
    </main>
  </section>
</template>

<script>
import StepsActions from './Steps/StepsActions'

export default {
  components: { StepsActions }
}
</script>
