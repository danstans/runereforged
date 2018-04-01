<template>
  <div class="rune-selected">
    <div class="path-name" :style="{color: getSecondaryPathColor}">{{getSecondaryPathSelected.pathTitle}}</div>
    <div class="path-info">{{getSecondaryPathSelected.pathSubtitle}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'RuneSelected',
  computed: {
    ...mapGetters([
      'getSecondaryPathColor',
      'getSecondaryPathSelected'
    ])
  }
}
</script>

<style lang="scss" scoped>
.rune-selected {
  width: 200px;
  height: 100px;
  padding-top: 20px;
  // padding-bottom: 50px;
  text-align: left;
  display: flex;
  flex-direction: column;

  .path-name {
    text-transform: uppercase;
    font-weight: bold;
    padding-bottom: 5px;
    font-size: 1.2rem;
  }

  .path-info {
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    color: #a09b8c;
  }
}
</style>
