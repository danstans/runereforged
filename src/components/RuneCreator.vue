<template>
  <div class="rune-creator">
    <div class="runes">
      <div class="black-background">
        <path-selector v-if="!getPathSelected"></path-selector>
        <rune-selector v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import PathSelector from './RuneCreator/PathSelector'
import RuneSelector from './RuneCreator/RuneSelector'
import { mapGetters } from 'vuex'
export default {
  name: 'RuneCreator',
  components: { PathSelector, RuneSelector },
  computed: {
    ...mapGetters([
      'getPathSelected'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.rune-creator {
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .runes {
    width: calc(1029px);
    height: calc(591px);
    background: linear-gradient(0deg, #6c5021 0%, #ab8f57 100%);
    box-shadow: 0 0 80px #000;
    padding: 2px;
    
    .black-background {
      width: 100%;
      height: 100%;
      background: #020b0e;
      z-index: 0;
    }
  }
}

a {
  color: #42b983;
}
</style>
