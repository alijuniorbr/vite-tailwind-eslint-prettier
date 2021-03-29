<template>
  <div>About</div>
  <pre>{{ vite_mode }}</pre>
</template>

<script>
  export default {
    setup() {
      const vite_mode = import.meta.env.VITE_APP_MODO
      return { vite_mode }
    },
  }
</script>

<style scoped></style>
