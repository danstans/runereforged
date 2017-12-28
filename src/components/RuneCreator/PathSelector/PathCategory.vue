<template>
  <div class="path-category" @mouseover="mouseOver = true" @mouseout="mouseOver = false">
    <img :src="category.glowImg" :class="{'full-brightness': !mouseOver, 'half-brightness': mouseOver }" alt="">
    <div class="centered-category">
      <div class="path-top" @click="selectPath(category.pathId, category.keystones, category.runeTiers)">
        <div class="before path-image ring" v-if="!mouseOver" >
          <img :src="category.pathImg" alt="">
        </div>
        <div class="after path-image ring" :style="{ background: 'url(' + category.ringImg + ')', 'background-repeat': 'no-repeat', 'background-position': 'center center', 'transition': 'all 0.3 ease-in' }" v-else-if="mouseOver">
          <img :src="category.pathImg" alt="">
        </div>
      </div>
      <div class="path-middle">
        <span class="path-title">{{category.pathTitle}}</span>
        <span class="path-subtitle">{{category.pathSubtitle}}</span>
      </div>
      <div class="path-bottom">
        <div class="keystones">
          <div class="icon" id="icon-1" @click="clickKeystone(category.pathId, category.keystones, category.keystones[0], category.runeTiers)">
            <img :src="category.keystones[0].imgSrc" alt="" :title="category.keystones[0].keystoneName">            
          </div>
          <div class="icon" id="icon-2" @click="clickKeystone(category.pathId, category.keystones, category.keystones[1], category.runeTiers)">
            <img :src="category.keystones[1].imgSrc" alt="" :title="category.keystones[1].keystoneName">            
          </div>
          <div class="icon" id="icon-3" @click="clickKeystone(category.pathId, category.keystones, category.keystones[2], category.runeTiers)">
            <img :src="category.keystones[2].imgSrc" alt="" :title="category.keystones">            
          </div>
        </div>
      </div>
      <div class="path-footer">
        {{category.footer}}
      </div>
    </div>     
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'PathCategory',
    props: [ 'category' ],
    methods: {
      ...mapActions([
        'changePathSelected',
        'changePrimaryPath',
        'updatePossibleKeystones',
        'selectKeystone',
        'updatePossibleRunes'
      ]),
      selectPath: function (pathId, keystones, runetiers) {
        this.changePathSelected({pathVal: true})
        this.changePrimaryPath({pathId: pathId})
        this.updatePossibleKeystones({keystones: keystones})
        this.updatePossibleRunes({runes: runetiers})
      },
      clickKeystone: function (pathId, keystones, keystone, runetiers) {
        this.changePathSelected({pathVal: true})
        this.changePrimaryPath({pathId: pathId})
        this.selectKeystone({keystone: keystone})
        this.updatePossibleKeystones({keystone: keystones})
        this.updatePossibleRunes({runes: runetiers})
      }
    },
    data () {
      return {
        mouseOver: false
      }
    }
  }
</script>

<style lang="scss">
.path-category {
    width: 20%;
    position: relative;
    background: url('https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/lines.png');
    background-repeat: no-repeat;
    background-position: top center;
    >img {
      top: 0;
      left: 0;
      position: absolute;
      height: 100%;
      width: 100%;
    }

    >div {
      position: absolute;
      top: 15%;
      height: 85%;
      .path-top {
            height: 20%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .path-image {
              background-repeat: no-repeat;
              background-position: center center;
              z-index: 1;
              cursor: pointer;

              img {
                max-width: 100%;
              }
              &:hover {
                filter: brightness(1.1);
              }
            }
          }


          .path-middle {
            height: 15%;
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .path-title {
              margin-bottom: 5px;
              font-size: 1.3rem;
            }
            .path-subtitle {
              font-size: .8rem;
            }
          }

          .path-bottom {
            height: 45%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .keystones {
              height: 66%;
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-between;

              .icon {
                flex: 0 auto auto;
                height: 50%;
                z-index: 1;
                cursor: pointer;
                img {
                  max-height: 100%;
                  max-width: 100%;
                }

                &:hover {
                  filter: brightness(1.3);
                }
              }

              #icon-1 {
                width: 50%;
              }
              #icon-2 {
                width: 50%;          
              }

              #icon-3 {
                width: 100%;
              }
            }
          }

          .path-footer {
            height: 20%;
            width: 80%;
            margin: 0 auto;
          }
    }
  }

.half-brightness {
  filter: brightness(100%);
}

.full-brightness {
  filter: brightness(50%);
}

.ring {
  background: url('http://d181w3hxxigzvh.cloudfront.net/wp-content/themes/rune_forge/imgs/rune-paths/ring.png');  
}
</style>