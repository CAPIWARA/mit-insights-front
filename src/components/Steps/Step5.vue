<template>
  <form @submit.prevent="submit">
    <button :disabled="!name && !email && !password" type="submit">Okay</button>
  </form>
</template>
