<template>
  <div id="app">
    <h2>Outer title</h2>
    <List></List>
  </div>
</template>

<script>
import List from "./components/List.vue";
import Aut from "./components/Aut.vue";
import Reg from "./components/Reg.vue";
import Heder from "./components/Heder.vue";
import Slot from "./components/Slot.vue";
export default {
  components: {
    List,
    Aut,
    Reg,
    Heder,
    Slot
  },
  data() {
    return {
      title: "My app",
      component: "Aut",
      slotTitle: "Test title"
    };
  }
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
