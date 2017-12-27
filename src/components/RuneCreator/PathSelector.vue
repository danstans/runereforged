<template>
  <div class="path-selector">
    <path-category  v-for="(path, index) in paths" :category="path" :key="index"></path-category>
  </div>
</template>

<script>
  import PathCategory from './PathSelector/PathCategory'
  export default {
    name: 'PathSelector',
    components: { PathCategory },
    data () {
      return {
        paths: [
          {
            glowImg: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Precision/glow-p.png',
            pathImg: '/static/precision/precision.png',
            ringImg: '/static/precision/vfx-ring.png',
            pathTitle: 'Precision',
            pathId: 8000,
            pathSubtitle: 'Become a Legend',
            keystoneImgs: [
              {
                imgSrc: '/static/precision/keystones/PressTheAttack.png',
                keystoneName: 'Press The Attack',
                keystoneDescription: 'Hitting an enemy champion 3 consecutive times makes them vulnerable.',
                keystoneId: 8005
              },
              {
                imgSrc: '/static/precision/keystones/FleetFootwork.png',
                keystoneName: 'Fleet Footwork',
                keystoneDescription: 'Attacking and moving builds Energy stacks. At 100 stacks, your next',
                keystoneId: 8021
              },
              {
                imgSrc: '/static/precision/keystones/LethalTempo.png',
                keystoneName: 'Lethal Tempo',
                keystoneDescription: '1.5s after damaging a champion gain a large amount of attack s',
                keystoneId: 8008
              }
            ],
            footer: 'Improved attacks and sustained damage'
          },
          {
            glowImg: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Domination/glow-d.png',
            pathImg: '/static/domination/domination.png',
            ringImg: '/static/domination/vfx-ring.png',
            pathTitle: 'Domination',
            pathId: 8100,
            pathSubtitle: 'Hunt and Eliminate Prey',
            keystoneImgs: [
              {
                imgSrc: '/static/domination/keystones/Electrocute.png',
                keystoneName: 'Electrocute',
                keystoneDescription: 'Hitting a champion with 3 separate attacks or abilities in 3s deals bonus damage',
                keystoneId: 8112
              },
              {
                imgSrc: '/static/domination/keystones/DarkHarvest.png',
                keystoneName: 'Dark Harvest',
                keystoneDescription: 'Champions, large minions, and large monsters drop soul essence on d',
                keystoneId: 8128
              },
              {
                imgSrc: '/static/domination/keystones/Predator.png',
                keystoneName: 'Predator',
                keystoneDescription: 'Add an active effect to your boots that grants a large boost of MS an…',
                keystoneId: 8124
              }
            ],
            footer: 'Burst damage and target access'
          },
          {
            glowImg: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Sorcery/glow-s.png',
            pathImg: '/static/sorcery/sorcery.png',
            ringImg: '/static/sorcery/vfx-ring.png',
            pathTitle: 'Sorcery',
            pathId: 8200,
            pathSubtitle: 'Unleash Destruction',
            keystoneImgs: [
              {
                imgSrc: '/static/sorcery/keystones/SummonAerie.png',
                keystoneName: 'Summoner Aerie',
                keystoneDescription: 'Your attacks and abilities send Aery to a target, damaging enemies or …',
                keystoneId: 8214
              },
              {
                imgSrc: '/static/sorcery/keystones/PhaseRush.png',
                keystoneName: 'Phase Rush',
                keystoneDescription: 'Hitting an enemy champion with 3 separate attacks or abilities grant…',
                keystoneId: 8230
              },
              {
                imgSrc: '/static/sorcery/keystones/ArcaneComet.png',
                keystoneName: 'Arcane Comet',
                keystoneDescription: 'Damaging a champion with an ability hurls a damaging comet at their lo…',
                keystoneId: 8229
              }
            ],
            footer: 'Empowered abilities and resource manipulation'
          },
          {
            glowImg: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Resolve/glow-r.png',
            pathImg: '/static/resolve/resolve.png',
            ringImg: '/static/resolve/vfx-ring.png',
            pathTitle: 'Resolve',
            pathId: 8400,
            pathSubtitle: 'Live Forever',
            keystoneImgs: [
              {
                imgSrc: '/static/resolve/keystones/GraspOfTheUndying.png',
                keystoneName: 'Grasp Of The Undying',
                keystoneDescription: 'Every 4s your next attack on a champion deals bonus magic dam…',
                keystoneId: 8439
              },
              {
                imgSrc: '/static/resolve/keystones/Guardian.png',
                keystoneName: 'Guardian',
                keystoneDescription: 'Guard allies you cast spells on and those that are very nearby. If you…',
                keystoneId: 8465
              },
              {
                imgSrc: '/static/resolve/keystones/Aftershock.png',
                keystoneName: 'Aftershock',
                keystoneDescription: 'After immobilizing an enemy champion gain defenses and late…',
                keystoneId: 8437
              }
            ],
            footer: 'Durability and crowd control'
          },
          {
            glowImg: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Inspiration/glow-i.png',
            pathImg: '/static/inspiration/inspiration.png',
            ringImg: '/static/inspiration/vfx-ring.png',
            pathTitle: 'Inspiration',
            pathId: 8300,
            pathSubtitle: 'Outwit mere mortals',
            keystoneImgs: [
              {
                imgSrc: '/static/inspiration/keystones/Kleptomancy.png',
                keystoneName: 'Kleptomancy',
                keystoneDescription: 'Your first attack after using an ability grants gold and sometimes …',
                keystoneId: 8359
              },
              {
                imgSrc: '/static/inspiration/keystones/UnsealedSpellbook.png',
                keystoneName: 'Unsealed Spellbook',
                keystoneDescription: 'Get Summoner Shards and exchange them at the shop to ch…',
                keystoneId: 8326
              },
              {
                imgSrc: '/static/inspiration/keystones/GlacialAugment.png',
                keystoneName: 'Glacial Augment',
                keystoneDescription: 'Your first attack against an enemy champion slows them (per unit c…',
                keystoneId: 8351
              }
            ],
            footer: 'Creative tools and rule bending'
          }
        ]
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
}
</style>