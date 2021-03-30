<template>
  <div>About</div>
  <pre>{{ vite_mode }}</pre>
  <pre class="bg-[#abaafd] 3xl:bg-green-500">{{ doc }}</pre>
</template>

<script>
  export default {
    setup() {
      const doc = { ok: true }
      const vite_mode = import.meta.env.VITE_APP_MODO

      return { vite_mode, doc }
    }
  }
</script>

<style scoped></style>
