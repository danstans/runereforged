<template>
  <div class="secondary-runes">
    <div class="secondary-path">
      <path-img @toggleClicked="toggleClicked"></path-img>
      <rune-selector @toggleClicked="toggleClicked" v-if="!getSecondaryPathSelected || (getSecondaryPathSelected && secondaryPathClicked)"></rune-selector>
      <rune-selected v-else></rune-selected>
    </div>
    <div class="secondary-rune-tiers">
      <div class="secondary-rune-imgs">
        <div class="secondary-rune-selected">
          <div class="border-circle">
            <svg class="svg-inner" viewBox="0 0 47 47">
              <linearGradient id="secondary-keystone-gradient" x1="0" y1="0" x2="0" y2="0">
                  <stop stop-opacity="1" offset="0%" :stop-color="getSecondaryPathColor"></stop>
              </linearGradient>
              <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#secondary-keystone-gradient)"></circle>
            </svg>
            <svg class="svg-spinner">
              <linearGradient id="gradient-white-transparent" x1="0" y1="0" x2="0" y2="1">
                <stop stop-opacity="1" stop-color="#fff" offset="0%"></stop><stop stop-opacity="0" stop-color="#fff" offset="100%"></stop>
              </linearGradient>
              <path fill="none" stroke-linecap="round" stroke-width="2px" stroke="url(#gradient-white-transparent)" d="M 23.5 1 A 22.5 22.5 0 0 0 23.5 46"></path>
              <ellipse cx="50%" cy="1px" fill="#fff" rx="5" ry="2"></ellipse>
            </svg>
          </div> 
          <svg class="svg-outer-circle" viewBox="0 0 47 47">
            <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#secondary-keystone-gradient)"></circle>
          </svg>
        </div>
        <div class="secondary-rune-selected">
          <div class="border-circle">
            <svg class="svg-inner" viewBox="0 0 47 47">
              <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#secondary-keystone-gradient)"></circle>
            </svg>
            <svg class="svg-spinner">
              <linearGradient id="gradient-white-transparent" x1="0" y1="0" x2="0" y2="1">
                <stop stop-opacity="1" stop-color="#fff" offset="0%"></stop><stop stop-opacity="0" stop-color="#fff" offset="100%"></stop>
              </linearGradient>
              <path fill="none" stroke-linecap="round" stroke-width="2px" stroke="url(#gradient-white-transparent)" d="M 23.5 1 A 22.5 22.5 0 0 0 23.5 46"></path>
              <ellipse cx="50%" cy="1px" fill="#fff" rx="5" ry="2"></ellipse>
            </svg>
          </div> 
          <svg class="svg-outer-circle" viewBox="0 0 47 47">
            <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#secondary-keystone-gradient)"></circle>
          </svg>
        </div>
      </div>
      <div class="secondary-rune-selector">
        <div class="secondary-rune-row">This is a row</div>
        <div class="secondary-rune-row">This is a row</div>
        <div class="secondary-rune-row">This is a row</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PathImg from './SecondaryRunes/PathImg'
  import RuneSelector from './SecondaryRunes/RuneSelector'
  import RuneSelected from './SecondaryRunes/RuneSelected'
  export default {
    name: 'secondaryRunes',
    components: { PathImg, RuneSelector, RuneSelected },
    data () {
      return {
        secondaryPathClicked: false
      }
    },
    computed: {
      ...mapGetters([
        'getSecondaryPathColor',
        'getSecondaryPathSelected'
      ])
    },
    methods: {
      toggleClicked: function (val) {
        if (val == null) {
          this.secondaryPathClicked = !this.secondaryPathClicked
        } else {
          this.secondaryPathClicked = val
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.secondary-runes {
  .secondary-path {
    width: 305px;
    height: 100px;
    display: flex;
    flex-direction: row;
  }

  .secondary-rune-tiers {
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .secondary-rune-imgs {
      height: 100%;
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .secondary-rune-selected {
        height: 50%;
        width: inherit;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;

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
        }
      }
    }

    .secondary-rune-selector {
      height: 100%;
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .secondary-rune-row {
        height: 33.3333%;
        width: inherit;
        border: 1px solid white;
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