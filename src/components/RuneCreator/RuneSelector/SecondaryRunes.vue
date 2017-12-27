<template>
  <div class="primary-runes">
    <div class="primary-path">
      This is the box for primary path
    </div>
    <div class="primary-rune-tier">
      This is the box for each rune tier
    </div>
    <div class="primary-rune-tier">
      This is the box for each rune tier
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PrimaryRunes'
  }
</script>

<style lang="scss" scoped>
.primary-runes {
  width: calc(50% - 20px);
  height: calc(100% - 60px);
  z-index: 1;
  align-self: center;      

  .primary-path {
    width: 85%;
    height: 100px;
    border: 1px solid white;
  }

  .primary-rune-tier {
    width: 85%;
    height: 115px;
    border: 1px solid white;
  }
}
</style>