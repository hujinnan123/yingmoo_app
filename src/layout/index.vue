<template>
  <div class="yingmoo-container">
    <div class="tips"></div>
    <header class="yingmoo-app_header"><yingmoo-header/></header>
    <section class="yingmoo-app_content"></section>
    <footer class="yingmoo-app_footer"></footer>
  </div>
</template>

<script>
import yingmooHeader from './components/yingmooHeader'
export default {
    components: {
        yingmooHeader
    }
};
</script>

<style lang="scss">
.yingmoo-app_header {
  z-index: 999;
  position: fixed;
  box-sizing: border-box;
  padding: 0 39px;
  width: 100%;
  height: 113px;
  font-size: 23px;
  overflow: hidden;
  background: linear-gradient(to right, #1f9eff, #66cbfd);
}

.yingmoo-app_content {
  position: relative;
  padding: 113px 20px 88px 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.yingmoo-app_footer {
  z-index: 999;
  position: fixed;
  box-sizing: border-box;
  padding: 0 47px;
  padding-top: 10px;
  bottom: 0;
  width: 100%;
  height: 88px;
  background: #fff;
  font-size: 14px;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
}
</style>