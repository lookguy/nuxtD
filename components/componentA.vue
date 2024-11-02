<script setup lang="ts">
  const count = ref(0)
</script>
<template>
  <button @click="count++">Click me</button>
  <p>Count: {{ count }}</p>
</template>