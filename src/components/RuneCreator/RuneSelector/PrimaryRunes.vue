<template>
  <div class="primary-runes">
    <primary-path></primary-path>
    <primary-keystone></primary-keystone>
    <primary-tier></primary-tier>
    <primary-tier></primary-tier>
    <primary-tier></primary-tier>
  </div>
</template>

<script>
  import PrimaryPath from './PrimaryRunes/PrimaryPath'
  import PrimaryKeystone from './PrimaryRunes/PrimaryKeystone'
  import PrimaryTier from './PrimaryRunes/PrimaryTier'
  export default {
    name: 'PrimaryRunes',
    components: { PrimaryPath, PrimaryKeystone, PrimaryTier }
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
}
</style>