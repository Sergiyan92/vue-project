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
      this.$emit("message", this.message);
      console.log(this.message);
    }
  }
};
</script>

<style scoped>
h2 {
  color: green;
}
</style>
