<template>
  <div class="row about">
    <div class="col">
      <h1>关于我们</h1>
      <div class="alert alert-primary" role="alert">欢迎对于我们的信息了解</div>
    </div>
    <div class="w-100"></div>
    <div class="col">
      <Path></Path>
    </div>
  </div>
</template>
<script>
import Path from '@/components/Path.vue'
export default {
  setup() {},
  components: {
    Path,
  },
};
</script>
<style scoped>
.about {
  background: #f8f9fa;
}
</style>

