<template>
  <div id="app">
    <Slot>
      <h2 slot="title">{{ slotTitle }}</h2>
      <p slot="text">Text test for slot</p>
    </Slot>
    <button type="button" @click="component = 'Reg'">Reg</button>
    <button type="button" @click="component = 'Aut'">Aut</button>
    <KeepAlive><component :is="component"></component></KeepAlive>
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

<style></style>
