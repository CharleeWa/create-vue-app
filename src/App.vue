<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
body {
  font-family:@fontRegular;
  font-size: 16px;
  min-height: 100vh;
  background:rgba(255,255,255,1);
  -webkit-font-smoothing: antialiased;
}

/**进度条颜色重置 */
#nprogress {
  .bar {
    background: #0abc43 !important;
  }
  .spinner-icon {
    border-top-color: #0abc43 !important;
    border-left-color:#0abc43 !important;
  }
}
</style>
