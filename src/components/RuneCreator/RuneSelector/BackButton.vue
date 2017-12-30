<template>
  <div class="back-button">
    <div class="inner-button" @click="reset">
      <i class="fa fa-repeat fa-flip-horizontal" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'BackButton',
    methods: {
      ...mapActions([
        'resetState',
        'resetKeystone',
        'resetTier',
        'resetSecondaryRunes'
      ]),
      reset: function () {
        this.resetState()
        this.resetKeystone()
        this.resetTier()
        this.resetSecondaryRunes()
      }
    }
  }
</script>

<style lang="scss" scoped>
.back-button {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 34px;
  height: 34px;
  background: linear-gradient(0deg, #6c5021 0%, #ab8f57 100%);
  z-index: 1;
  cursor: pointer;

  .inner-button {
    margin: 1px;
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    background: #16181d;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>