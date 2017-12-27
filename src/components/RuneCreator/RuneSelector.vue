<template>
  <div class="rune-selector">
    <back-button/>
    <div class="backdrop">
      <img :src="getBackgroundImg">
    </div>
    <div class="rune-builder">
      <primary-runes></primary-runes>
      <secondary-runes></secondary-runes>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import BackButton from './RuneSelector/BackButton'
  import PrimaryRunes from './RuneSelector/PrimaryRunes'
  import SecondaryRunes from './RuneSelector/SecondaryRunes'
  export default {
    name: 'RuneSelector',
    components: { BackButton, PrimaryRunes, SecondaryRunes },
    computed: {
      ...mapGetters([
        'getBackgroundImg'
      ])
    }
  }
</script>

<style lang="scss"  scoped>
.rune-selector {
  width: 100%;
  height: 100%;
  position: relative;

  .backdrop {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 0;
    user-select: none;
    will-change: transform;
    overflow: hidden;
    transition: 0.3s;

    >img {
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
  }

  .rune-builder {
    width: 66%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .secondary-runes {
      width: calc(50% - 20px);
      height: calc(100% - 60px);
      z-index: 1;
      align-self: center;
    }
  }
}
</style>