<template>
  <div class="rune-selector">
    <back-button/>
    <div class="backdrop">
      <img :src="getBackgroundImg">
    </div>
    <div class="rune-builder">
      <div class="primary-runes">
        This is the left side
      </div>
      <div class="secondary-runes">
        This is the right side
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import BackButton from './RuneSelector/BackButton'
  export default {
    name: 'RuneSelector',
    components: { BackButton },
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
    justify-content: flex-start;
    
    .primary-runes {
      width: 50%;
      border: 1px solid white;
      z-index: 1;
      
    }

    .secondary-runes {
      width: 50%;
      border: 1px solid white;
      z-index: 1;
    }
  }
}
</style>