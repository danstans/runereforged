<template>
  <div class="primary-keystone">
    <div class="keystone-select">
      <div class="image" v-for="(keystone, index) in getPossibleKeystones" :key="index" @click="clickKeystone(keystone)">
        <img :src="keystone.imgSrc" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'KeystoneSelection',
  computed: {
    ...mapGetters([
      'getPrimaryColor',
      'getPossibleKeystones'
    ])
  },
  data () {
    return {
      showHover: false
    }
  },
  methods: {
    ...mapActions([
      'selectKeystone',
      'updatePrimaryKeystone'
    ]),
    clickKeystone: function (keystone) {
      this.selectKeystone({ keystone: keystone })
      this.updatePrimaryKeystone({ keystone: keystone })
      this.$emit('toggleClicked', false)
    }
  }
}
</script>

<style lang="scss" scoped>

.keystone-select {
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .image {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      cursor: pointer;
    }
  }
}
</style>
