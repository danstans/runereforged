<template>
  <div class="primary-runes">
    <primary-path></primary-path>
    <primary-keystone></primary-keystone>
    <div class="primary-rune-tier">
      This is the box for each rune tier
    </div>
    <div class="primary-rune-tier">
      This is the box for each rune tier
    </div>
    <div class="primary-rune-tier">
      This is the box for each rune tier
    </div>
  </div>
</template>

<script>
  import PrimaryPath from './PrimaryRunes/PrimaryPath'
  import PrimaryKeystone from './PrimaryRunes/PrimaryKeystone'
  export default {
    name: 'PrimaryRunes',
    components: { PrimaryPath, PrimaryKeystone }
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.primary-runes {
  width: calc(50% - 20px);
  height: calc(100% - 60px);
  z-index: 1;
  align-self: center;      
  color: #a09b8c;

  .primary-rune-tier {
    width: 85%;
    height: 95px;
    border: 1px solid white;
  }
}
</style>