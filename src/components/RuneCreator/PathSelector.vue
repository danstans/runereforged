<template>
  <div class="path-selector">

    <div class="path-category">
      <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Precision/glow-p.png" alt="">      
      <div>
        <div class="path-top">
          <div class="path-image">
            <img src="../../assets/precision/precision.png" alt="asdf">
          </div>
        </div>
        <div class="path-middle">
          <span class="path-title">Precision</span>
          <span class="path-subtitle">Become a Legend</span>
        </div>
        <div class="path-bottom">
          <div class="keystones">
            <div class="icon" id="icon-1" @click="checkClick">
              <img src="../../assets/precision/keystones/PressTheAttack.png" alt="">            
            </div>
            <div class="icon" id="icon-2">
              <img src="../../assets/precision/keystones/LethalTempo.png" alt="">            
            </div>
            <div class="icon" id="icon-3">
              <img src="../../assets/precision/keystones/FleetFootwork.png" alt="">            
            </div>
          </div>
        </div>
        <div class="path-footer">
          Improved attacks and sustained damage
        </div>
      </div>      
    </div>
    <div class="path-category">
      <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Domination/glow-d.png" alt="">
      <div>
        <div class="path-top">
          <div class="path-image">
            <img src="../../assets/domination/domination.png" alt="asdf">
          </div>
        </div>
        <div class="path-middle">
          <span class="path-title">Domination</span>
          <span class="path-subtitle">Hunt and Eliminate Prey</span>
        </div>
        <div class="path-bottom">
          <div class="keystones">
            <div class="icon" id="icon-1">
              <img src="../../assets/domination/keystones/Electrocute.png" alt="">            
            </div>
            <div class="icon" id="icon-2">
              <img src="../../assets/domination/keystones/Predator.png" alt="">            
            </div>
            <div class="icon" id="icon-3">
              <img src="../../assets/domination/keystones/DarkHarvest.png" alt="">            
            </div>
          </div>
        </div>
        <div class="path-footer">
          Burst damage and target access
        </div>
      </div>
    </div>
    <div class="path-category">
      <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Sorcery/glow-s.png" alt="">
      <div>
        <div class="path-top">
          <div class="path-image">
            <img src="../../assets/sorcery/sorcery.png" alt="asdf">
          </div>
        </div>
        <div class="path-middle">
          <span class="path-title">Sorcery</span>
          <span class="path-subtitle">Unleash Destruction</span>
        </div>
        <div class="path-bottom">
          <div class="keystones">
            <div class="icon" id="icon-1">
              <img src="../../assets/sorcery/keystones/SummonAerie.png" alt="">            
            </div>
            <div class="icon" id="icon-2">
              <img src="../../assets/sorcery/keystones/ArcaneComet.png" alt="">            
            </div>
            <div class="icon" id="icon-3">
              <img src="../../assets/sorcery/keystones/PhaseRush.png" alt="">            
            </div>
          </div>
        </div>
        <div class="path-footer">
          Empowered abilities and resource manipulation
        </div>
      </div>      
    </div>
    <div class="path-category">
      <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Resolve/glow-r.png" alt="">
      <div>
        <div class="path-top">
          <div class="path-image">
            <img src="../../assets/resolve/resolve.png" alt="asdf">
          </div>
        </div>
        <div class="path-middle">
          <span class="path-title">Resolve</span>
          <span class="path-subtitle">Live Forever</span>
        </div>
        <div class="path-bottom">
          <div class="keystones">
            <div class="icon" id="icon-1">
              <img src="../../assets/resolve/keystones/GraspOfTheUndying.png" alt="">            
            </div>
            <div class="icon" id="icon-2">
              <img src="../../assets/resolve/keystones/Guardian.png" alt="">            
            </div>
            <div class="icon" id="icon-3">
              <img src="../../assets/resolve/keystones/Aftershock.png" alt="">            
            </div>
          </div>
        </div>
        <div class="path-footer">
          Durability and crowd control
        </div>
      </div>
    </div>
    <div class="path-category">
      <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Inspiration/glow-i.png" alt="">
      <div>
        <div class="path-top">
          <div class="path-image">
            <img src="../../assets/inspiration/inspiration.png" alt="asdf">
          </div>
        </div>
        <div class="path-middle">
          <span class="path-title">Inspiration</span>
          <span class="path-subtitle">Outwit mere mortals</span>
        </div>
        <div class="path-bottom">
          <div class="keystones">
            <div class="icon" id="icon-1">
              <img src="../../assets/inspiration/keystones/GlacialAugment.png" alt="">            
            </div>
            <div class="icon" id="icon-2">
              <img src="../../assets/inspiration/keystones/UnsealedSpellbook.png" alt="">            
            </div>
            <div class="icon" id="icon-3">
              <img src="../../assets/inspiration/keystones/Kleptomancy.png" alt="">            
            </div>
          </div>
        </div>
        <div class="path-footer">
          Durability and crowd control
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
  export default {
    name: 'PathSelector',
    methods: {
      checkClick: function () {
        console.log('you clicked')
      }
    }
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

  .path-category {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
      cursor: pointer;
      filter: brightness(50%);

      &:hover {
        filter: brightness(100%);
      }
    }

    >div {
      height: 75%;

      .path-top {
            height: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .path-image {
              background: url('http://d181w3hxxigzvh.cloudfront.net/wp-content/themes/rune_forge/imgs/rune-paths/ring.png');
              background-repeat: no-repeat;
              background-position: center center;
              cursor: pointer;

              img {
                max-width: 100%;
              }
            }
          }


          .path-middle {
            height: 10%;
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
            height: 55%;
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
                img {
                  max-height: 100%;
                  max-width: 100%;
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
            height: 10%;
          }
    }
    
  }
}
</style>