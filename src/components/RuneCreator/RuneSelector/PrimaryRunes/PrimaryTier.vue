<template>
  <div class="primary-tier">
    <div class="tier-image" @click="toggleClicked()">
      <div class="border-circle">
        <img v-if="getTierRunes[tierLevel]" :src="getTierRunes[tierLevel].runeImg" alt="">
        <svg class="svg-inner" viewBox="0 0 47 47">
          <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#keystone-gradient)"></circle>
        </svg>
        <svg class="svg-spinner" v-if="(!getTierRunes[tierLevel] || (getTierRunes[tierLevel] && !buttonClicked))">
          <linearGradient id="gradient-white-transparent" x1="0" y1="0" x2="0" y2="1">
            <stop stop-opacity="1" stop-color="#fff" offset="0%"></stop><stop stop-opacity="0" stop-color="#fff" offset="100%"></stop>
          </linearGradient>
          <path fill="none" stroke-linecap="round" stroke-width="2px" stroke="url(#gradient-white-transparent)" d="M 23.5 1 A 22.5 22.5 0 0 0 23.5 46"></path>
          <ellipse cx="50%" cy="1px" fill="#fff" rx="5" ry="2"></ellipse>
        </svg>
      </div>
      <svg class="svg-outer-circle" viewBox="0 0 47 47">
        <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#keystone-gradient)"></circle>
      </svg>
    </div>
    <div class="tier-select"  v-if="!buttonClicked" @click="toggleClicked(true)">
      <div class="img" v-for="(rune, index) in possibleRunes" :key="index" @click="selectTierRune(tierLevel, rune)">
        <img :src="rune.runeImg" alt="">
        <svg class="svg-inner" viewBox="0 0 47 47">
          <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#keystone-gradient)"></circle>
        </svg>
        <svg class="svg-outer" viewBox="0 0 47 47">
          <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#keystone-gradient)"></circle>
        </svg>
      </div>
    </div>
    <div class="tier-info" v-else>
      <div class="tier-name">
        {{getTierRunes[tierLevel].runeName}}
      </div>
      <div class="tier-short">
        {{getTierRunes[tierLevel].runeDescription}}
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
      'getTierRunes',
      'getPrimaryColor'
    ])
  },
  data () {
    return {
      buttonClicked: false
    }
  },
  props: [ 'possibleRunes', 'tierLevel' ],
  methods: {
    ...mapActions([
      'updateTierRunes',
      'updatePrimaryTiers'
    ]),
    selectTierRune: function (tier, rune) {
      this.updateTierRunes({ tier: tier, runes: rune })
      this.updatePrimaryTiers({ tier: tier, runes: rune })
    },
    toggleClicked: function (val) {
      if (val == null) {
        this.buttonClicked = !this.buttonClicked
      } else {
        this.buttonClicked = val
      }
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
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;

    .svg-outer-circle {
      opacity: 0;
      width: 58px;
      height: 58px;
      position: absolute;
      align-self: center;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.5;
      }
    }

    .border-circle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
        margin-left: 0;
        margin-right: 0;
        max-width: 48px;
        max-height: 48px;
      }
    }
  }

  .tier-info {
    flex-grow: 1;
    width: 60%;
    display: flex;
    padding-top: 20px;
    padding-bottom: 55px;
    text-align: left;
    flex-direction: column;
    justify-content: space-between;

    .tier-name {
      text-transform: uppercase;
      font-weight: bold;
      font-size: .85rem;
    }

    .tier-short {
      font-size: 13px;
      height: 10%;
      color: #a09b8c;
      font-family: 'Roboto', sans-serif;
    }
  }

  .tier-select {
    flex-grow: 1;
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

.svg-outer {
  opacity: 0;
  width: 58px;
  height: 58px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.5;
  }
}

.svg-spinner {
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: visible;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.2s;
  filter: blur(1px);
  animation: key-rotation 2s linear forwards infinite;
}

@-webkit-keyframes key-rotation {
  to {
    -webkit-transform:rotate(360deg);
    -ms-transform:rotate(360deg);
    transform:rotate(360deg);
  }
}
@keyframes key-rotation {
  to {
    -webkit-transform:rotate(360deg);
    -ms-transform:rotate(360deg);
    transform:rotate(360deg);
  }
}
</style>
