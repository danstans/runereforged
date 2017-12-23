<template>
  <div class="path-selector">
    <div class="rune-category">
      Precision
    </div>
    <div class="rune-category">
      Domination
    </div>
    <div class="rune-category">
      Sorcery
    </div>
    <div class="rune-category">
      Resolve
    </div>
    <div class="rune-category">
      Inspiration
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PathSelector'
  }
</script>

<style lang="scss" scoped>
.path-selector {
  background-color: #020b0e;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .rune-category {
    width: 20%;
    border: .1px solid white;
  }
}
</style>