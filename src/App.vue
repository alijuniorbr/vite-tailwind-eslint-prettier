<template>
  <div class="flex flex-col items-center bg-indigo-200">
    <div class="my-4 flex justify-center space-x-2">
      <router-link class="bg-pink-500" to="/">Homestead</router-link>
      <span>|</span>
      <router-link to="/junior">Júnior</router-link>
      <span>|</span>
      <router-link to="/about">About</router-link>
    </div>
    <div class="flex flex-col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style></style>
