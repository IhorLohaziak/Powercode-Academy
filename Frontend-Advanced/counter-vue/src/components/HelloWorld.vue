<template>
  <div class="hello"></div>
  <button @click="++index">Нажми на мене</button>
  <h3>{{ index }}</h3>
</template>

<script>
export default {
  data: () => ({
    index: "0",
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-size: 30px;
}
h3 {
  font-size: 30px;
  color: green;
}
</style>
