<template>
  <div class="rune-selector" :style="{ background: 'url(' + getBackgroundImg + ')' }">
    <div class="back-button">
      <div class="inner-button" @click="reset">
        <i class="fa fa-repeat fa-flip-horizontal" aria-hidden="true"></i>
      </div>
    </div>
    a
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'RuneSelector',
    computed: {
      ...mapGetters([
        'getBackgroundImg'
      ])
    },
    methods: {
      ...mapActions([
        'resetState'
      ]),
      reset: function () {
        this.resetState()
      }
    }
  }
</script>

<style lang="scss"  scoped>
.rune-selector {
  width: 100%;
  height: 100%;
  background: black;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
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


}
</style>