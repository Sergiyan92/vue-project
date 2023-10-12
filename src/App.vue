<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <List></List>
  </div>
</template>

<script>
import List from "./components/List.vue";

export default {
  components: {
    List
  },
  data() {
    return {
      title: "My app"
    };
  }
};
</script>

<style></style>
