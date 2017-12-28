<template>
  <div class="primary-runes" :style="{color: getPrimaryColor}">
    <primary-path></primary-path>
    <primary-keystone></primary-keystone>
    <primary-tier v-for="(rune, index) in getPossibleRunes.runes" :possibleRunes="rune" :tierLevel="index" :key="index" />
  </div>
</template>

<script>
  import PrimaryPath from './PrimaryRunes/PrimaryPath'
  import PrimaryKeystone from './PrimaryRunes/PrimaryKeystone'
  import PrimaryTier from './PrimaryRunes/PrimaryTier'
  import { mapGetters } from 'vuex'
  export default {
    name: 'PrimaryRunes',
    components: { PrimaryPath, PrimaryKeystone, PrimaryTier },
    computed: {
      ...mapGetters([
        'getPossibleRunes',
        'getPrimaryColor'
      ])
    }
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.primary-runes {
  width: calc(50% - 20px);
  height: calc(100% - 60px);
  z-index: 1;
  align-self: center;      
}
</style>