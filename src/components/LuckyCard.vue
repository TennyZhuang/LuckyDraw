<template>
  <div class="box-card">
    <h1>{{ value }}</h1>
  </div>
</template>

<script>
export default {
  name: 'lucky-card',
  props: ['value']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: white;
  font-size: 4em;
}

.box-card {
  width: 25vw;
  height: 38vh;
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  border: solid 1px white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
