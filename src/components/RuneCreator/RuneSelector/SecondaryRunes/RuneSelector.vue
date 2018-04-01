<template>
  <div class="secondary-rune-selector">
    <div class="secondary-rune" v-for="(rune, index) in getPossibleSecondaryPaths" :key="index" @click="selectSecondary(rune)">
      <img :src="rune.pathSmall" :alt="rune">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'RuneSelector',
  computed: {
    ...mapGetters([
      'getPossibleSecondaryPaths'
    ])
  },
  methods: {
    ...mapActions([
      'updateSecondaryPath',
      'updateSecondaryRunePath',
      'resetSecondaryTiers',
      'resetRuneTier'
    ]),
    selectSecondary: function (secondaryPath) {
      // console.log(secondaryPath) Select Secondary
      this.resetSecondaryTiers()
      this.resetRuneTier()
      this.updateSecondaryPath({secondaryRunes: secondaryPath})
      this.updateSecondaryRunePath({secondaryRunes: secondaryPath})
      this.$emit('toggleClicked', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.secondary-rune-selector {
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .secondary-rune {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    >img {
      max-height: 26px;
      max-width: 26px;
    }
  }
}
</style>
