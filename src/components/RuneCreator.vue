<template>
  <div class="rune-creator">
    <div class="runes">
      <path-selector></path-selector>
    </div>
  </div>
</template>

<script>
import PathSelector from './RuneCreator/PathSelector'
export default {
  name: 'RuneCreator',
  components: { PathSelector }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.rune-creator {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2%;

  .runes {
    width: calc(100% - 4px);
    height: calc(80% - 4px);
    background: linear-gradient(0deg, #6c5021 0%, #ab8f57 100%);
    box-shadow: 0 0 80px #000;
    padding: 2px;
  }
}

a {
  color: #42b983;
}
</style>
