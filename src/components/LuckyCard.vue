<template>
  <el-card class="box-card">
    <h1>{{ value }}</h1>
  </el-card>
</template>

<script>
export default {
  name: 'lucky-card',
  props: ['value']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
  width: 25vw;
  height: 38vh;
  margin: 20px;
}
</style>
