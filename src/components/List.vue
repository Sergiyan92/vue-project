<template>
  <div>
    <input type="text" v-model="message" @keyup.enter="saveMessage" />
    <h2 @click="show">Inner title</h2>
    <ul>
      <li v-for="person in people">{{ person }}</li>
    </ul>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  props: {
    people: {
      type: Array,
      required: false,
      default: []
    }
  },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    show: function() {
      console.log(this.people);
    },
    saveMessage: function() {
      bus.$emit("message", this.message);
      this.message = "";
    }
  }
};
</script>

<style scoped>
h2 {
  color: green;
}
</style>
