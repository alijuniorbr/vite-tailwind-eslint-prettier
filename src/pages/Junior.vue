<template>
  <div>Júnior</div>
  <pre class="bg-green-100 md:bg-green-200 2xl:bg-green-500 3xl:bg-green-600">
Fetching: {{ isFetching }}</pre
  >
  <pre class="bg-[#f12345]">{{ data }}</pre>
  <pre v-if="error" class="bg-red-200">{{ error }}</pre>
  <pre v-else class="bg-blue-300">no error found</pre>
</template>

<script>
  import { useFetch } from '@vueuse/core'
  export default {
    setup() {
      const url = 'https://jsonplaceholder.typicode.com/todos/1'
      const { isFetching, error, data } = useFetch(url)

      return { isFetching, error, data }
    },
  }
</script>

<style scoped></style>
