<template>
  <div class="primary-tier">
    <div class="tier-image">
      <div class="border-circle" v-if="getTierRunes[tierLevel]">
        <img :src="getTierRunes[tierLevel].runeImg" alt="">        
        <svg class="svg-inner" viewBox="0 0 47 47">
          <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#keystone-gradient)"></circle>
        </svg>
      </div>
      <div class="border-circle" v-else>
        <svg class="svg-inner" viewBox="1 0 47 47">
          <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#keystone-gradient)"></circle>
        </svg>
      </div>     
    </div>
    <div class="tier-info">
      <div class="img" v-for="(rune, index) in possibleRunes" :key="index" @click="selectTierRune(tierLevel, rune)">
        <img :src="rune.runeImg" alt="">
        <svg class="svg-inner" viewBox="0 0 47 47">
          <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#keystone-gradient)"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'PrimaryTier',
    computed: {
      ...mapGetters([
        'getTierRunes'
      ])
    },
    props: [ 'possibleRunes', 'tierLevel', 'tierRunes' ],
    methods: {
      ...mapActions([
        'updateTierRunes'
      ]),
      selectTierRune: function (tier, rune) {
        this.updateTierRunes({tier: tier, runes: rune})
      }
    }
  }
</script>

<style lang="scss" scoped>
.primary-tier {
  width: 300px;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .tier-image {
    border: 1px solid white;
    width: 95px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .border-circle {
      display: block;
      padding: 0;
      width: 48px;
      height: 48px;
      border: 0;
      background: #1e2328;
      border-radius: 50%;
      box-shadow: inset 0 0 7px #000, 0 0 1px #000;
      position: relative;
      -webkit-transition: opacity 0.2s,filter 0.2s;
      transition: opacity 0.2s,filter 0.2s;
      cursor: pointer;
      

      img {
        position: absolute;
        top: 0%;
        left: 0%;
        max-width: 46px;
        max-height: 46px;
      }
    }

  }

  .tier-info {
    flex-grow: 1;
    border: 1px solid white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .img {
      width: 33%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;

      img {
        max-width: 46px;
        max-height: 46px;
      }
    }
  }
}

.svg-inner {
  height: 46px;
  width: 46px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
</style>