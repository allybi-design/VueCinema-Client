<template>
  <div v-cloak id="app">
    <div id="title" @click="$router.push('/')">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <h1>Vue Cinema</h1>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("initApp");
    this.$store.dispatch("setDay", this.$moment());
  }
};
</script>
