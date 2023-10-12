<template>
  <div id="app">
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
export default {
  components: {
    List,
    Aut,
    Reg,
    Heder
  },
  data() {
    return {
      title: "My app",
      component: "Aut"
    };
  }
};
</script>

<style></style>
