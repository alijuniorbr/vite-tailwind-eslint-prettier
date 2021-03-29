<template>
  <div>Home</div>
  <pre>{{ vite_mode }}</pre>
</template>

<script>
  export default {
    setup() {
      const vite_mode = import.meta.env.VITE_APP_VERSAO
      return { vite_mode }
    },
  }
</script>

<style scoped></style>
