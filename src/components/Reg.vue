<template>
  <form method="post">
    <h2>Registration form</h2>
    <p>
      <label for="name">Your name</label>
      <input id="name" type="text" value="" />
    </p>
    <p>
      <label for="password">Your password</label>
      <input id="password" type="text" value="" />
    </p>
    <p>
      <label for="mail">Your E-mail:</label>
      <input type="text" id="mail" value="" />
    </p>
    <button type="button" name="button">Register</button>
  </form>
</template>

<script>
export default {
  data() {}
};
</script>
