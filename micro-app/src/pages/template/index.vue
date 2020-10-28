<template>
  <div>
    <span>这是template首页</span>
    <button @click="handleClick">跳转至列表页</button>
  </div>
</template>
<script>
export default {
  name: 'templateHome',
  methods: {
    handleClick() {
      let prefix = '/';
      if (window.__POWERED_BY_QIANKUN__) {
        prefix = '/child/';
      }
      this.$router.push(`${prefix}template/list`);
    }
  }
};
</script>
