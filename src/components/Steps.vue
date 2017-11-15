<template>
  <section class="steps-container">
    <steps-header />
    <main class="steps">
      <router-view />
    </main>
  </section>
</template>

<script>
import StepsHeader from './Steps/StepsHeader'

export default {
  components: { StepsHeader }
}
</script>

