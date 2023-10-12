<template>
  <ul>
    <li v-for="person in people">{{ person }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      people: ["Petya", "Vasya", "Grisha", "Slava", "Senya"]
    };
  }
};
</script>

<style></style>
