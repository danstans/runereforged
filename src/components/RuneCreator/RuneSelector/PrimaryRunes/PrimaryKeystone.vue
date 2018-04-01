<template>
  <div class="primary-keystone">
    <svg-border/>
    <svg-image :toggleSize="svgClicked" @toggleClicked="toggleClicked"/>
    <keystone-selection @toggleClicked="toggleClicked" v-if="!getKeystoneSelected || (getKeystoneSelected && svgClicked)"/>
    <keystone-selected v-else/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SvgImage from './PrimaryKeystone/SvgImage'
import KeystoneSelection from './PrimaryKeystone/KeystoneSelection'
import KeystoneSelected from './PrimaryKeystone/KeystoneSelected'
import SvgBorder from './PrimaryKeystone/SvgBorder'
export default {
  name: 'PrimaryKeystone',
  computed: {
    ...mapGetters([
      'getKeystoneSelected',
      'getPrimaryColor'
    ])
  },
  components: { SvgBorder, SvgImage, KeystoneSelection, KeystoneSelected },
  data () {
    return {
      svgClicked: false
    }
  },
  methods: {
    toggleClicked: function (val) {
      if (val == null) {
        this.svgClicked = !this.svgClicked
      } else {
        this.svgClicked = val
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.primary-keystone {
  width: 300px;
  height: 115px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
}
</style>
