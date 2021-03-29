<template>
  <div class="flex flex-col items-center">
    <div class="my-4 flex justify-center space-x-2">
      <router-link to="/">Home</router-link>
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

<script></script>

<style></style>
