<template>
  <div class="rune-selector" :style="{ background: 'url(' + getBackgroundImg + ')' }">
    <back-button/>
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

  .rune-builder{
    width: 66%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
    .primary-runes {
      width: 50%;
      border: 1px solid white;
    }

    .secondary-runes {
      width: 50%;
      border: 1px solid white;
    }
  }
}
</style>