<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
body {
  font-family: @fontRegular;
  font-size: 16px;
  min-height: 100vh;
  background:rgba(255,255,255,1);
  -webkit-font-smoothing: antialiased;
}

// reset nprogress color

@npgColor: #1296db;

#nprogress {
  .bar {
    background: @npgColor !important;
  }
  .spinner-icon {
    border-top-color: @npgColor !important;
    border-left-color: @npgColor !important;
  }
}
</style>
