<template>
  <div class="primary-keystone">
    <svg-image/>
    <keystone-selection v-if="!getKeystoneSelected"/>
    <keystone-selected v-else/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SvgImage from './PrimaryKeystone/SvgImage'
  import KeystoneSelection from './PrimaryKeystone/KeystoneSelection'
  import KeystoneSelected from './PrimaryKeystone/KeystoneSelected'
  export default {
    name: 'PrimaryKeystone',
    computed: {
      ...mapGetters([
        'getKeystoneSelected',
        'getPrimaryColor'
      ])
    },
    components: { SvgImage, KeystoneSelection, KeystoneSelected }
  }
</script>

<style lang="scss" scoped>
.primary-keystone {
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

</style>