const state = {
  paths: [
    {
      glowImg: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Precision/glow-p.png',
      pathImg: '/static/precision/precision.png',
      ringImg: '/static/precision/vfx-ring.png',
      pathTitle: 'Precision',
      pathId: 8000,
      pathSubtitle: 'Become a Legend',
      keystones: [
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
      runeTiers: [
        [
          {
            runeName: 'Overheal',
            runeImg: '/static/precision/t1/Overheal.png',
            runeDescription: 'Excess healing on you becomes a shield'
          },
          {
            runeName: 'Triumph',
            runeImg: '/static/precision/t1/Triumph.png',
            runeDescription: 'Takedowns restore 15% of your missing health and grant an additional 25 gold.'
          },
          {
            runeName: 'Presence of Mind',
            runeImg: '/static/precision/t1/PresenceOfMind.png',
            runeDescription: 'For 5s after gaining a level or takedown any mana you spend is fully refunded'
          }
        ],
        [
          {
            runeName: 'Legend: Alacrity',
            runeImg: '/static/precision/t2/LegendAlacrity.png',
            runeDescription: 'Takedowns on enemies grant permanent Attack Speed.'
          },
          {
            runeName: 'Legend: Tenacity',
            runeImg: '/static/precision/t2/LegendTenacity.png',
            runeDescription: 'Takedowns on enemies grant permanent Tenacity.'
          },
          {
            runeName: 'Legend: Bloodline',
            runeImg: '/static/precision/t2/LegendBloodline.png',
            runeDescription: 'Takedowns on enemies grant permanent Lifesteal.'
          }
        ],
        [
          {
            runeName: 'Coup De Grace',
            runeImg: '/static/precision/t3/CoupDeGrace.png',
            runeDescription: 'Deal more damage to low health enemy champions.'
          },
          {
            runeName: 'Cut Down',
            runeImg: '/static/precision/t3/CutDown.png',
            runeDescription: 'Deal more damage to champions with more maximum health than you.'
          },
          {
            runeName: 'Last Stand',
            runeImg: '/static/precision/t3/LastStand.png',
            runeDescription: 'Deal more damage to champions while you are low on health.'
          }
        ]
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
      keystones: [
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
      runeTiers: [
        [
          {
            runeName: 'Cheap Shot',
            runeImg: '/static/domination/t1/CheapShot.png',
            runeDescription: 'Excess healing on you becomes a shield'
          },
          {
            runeName: 'Taste Of Blood',
            runeImg: '/static/domination/t1/TasteOfBlood.png',
            runeDescription: 'Takedowns restore 15% of your missing health and grant an additional 25 gold.'
          },
          {
            runeName: 'Sudden Impact',
            runeImg: '/static/domination/t1/SuddenImpact.png',
            runeDescription: 'For 5s after gaining a level or takedown any mana you spend is fully refunded'
          }
        ],
        [
          {
            runeName: 'Zombie Ward',
            runeImg: '/static/domination/t2/ZombieWard.png',
            runeDescription: 'Takedowns on enemies grant permanent Attack Speed.'
          },
          {
            runeName: 'Ghost Poro',
            runeImg: '/static/domination/t2/GhostPoro.png',
            runeDescription: 'Takedowns on enemies grant permanent Tenacity.'
          },
          {
            runeName: 'Eyeball Collection',
            runeImg: '/static/domination/t2/EyeballCollection.png',
            runeDescription: 'Takedowns on enemies grant permanent Lifesteal.'
          }
        ],
        [
          {
            runeName: 'Ravenous Hunter',
            runeImg: '/static/domination/t3/RavenousHunter.png',
            runeDescription: 'Deal more damage to low health enemy champions.'
          },
          {
            runeName: 'Ingenious Hunter',
            runeImg: '/static/domination/t3/IngeniousHunter.png',
            runeDescription: 'Deal more damage to champions with more maximum health than you.'
          },
          {
            runeName: 'Relentless Hunter',
            runeImg: '/static/domination/t3/RelentlessHunter.png',
            runeDescription: 'Deal more damage to champions while you are low on health.'
          }
        ]
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
      keystones: [
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
      runeTiers: [
        [
          {
            runeName: 'Nullifying Orb',
            runeImg: '/static/sorcery/t1/NullifyingOrb.png',
            runeDescription: 'Excess healing on you becomes a shield'
          },
          {
            runeName: 'Manaflow Band',
            runeImg: '/static/sorcery/t1/ManaflowBand.png',
            runeDescription: 'Takedowns restore 15% of your missing health and grant an additional 25 gold.'
          },
          {
            runeName: 'The Ultimate Hat',
            runeImg: '/static/sorcery/t1/TheUltimateHat.png',
            runeDescription: 'For 5s after gaining a level or takedown any mana you spend is fully refunded'
          }
        ],
        [
          {
            runeName: 'Transcendence',
            runeImg: '/static/sorcery/t2/Trascendence.png',
            runeDescription: 'Takedowns on enemies grant permanent Attack Speed.'
          },
          {
            runeName: 'Celerity',
            runeImg: '/static/sorcery/t2/Celerity.png',
            runeDescription: 'Takedowns on enemies grant permanent Tenacity.'
          },
          {
            runeName: 'Absolute Focus',
            runeImg: '/static/sorcery/t2/AbsoluteFocus.png',
            runeDescription: 'Takedowns on enemies grant permanent Lifesteal.'
          }
        ],
        [
          {
            runeName: 'Scorch',
            runeImg: '/static/sorcery/t3/Scorch.png',
            runeDescription: 'Deal more damage to low health enemy champions.'
          },
          {
            runeName: 'Water Walking',
            runeImg: '/static/sorcery/t3/WaterWalking.png',
            runeDescription: 'Deal more damage to champions with more maximum health than you.'
          },
          {
            runeName: 'Gathering Storm',
            runeImg: '/static/sorcery/t3/GatheringStorm.png',
            runeDescription: 'Deal more damage to champions while you are low on health.'
          }
        ]
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
      keystones: [
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
      runeTiers: [
        [
          {
            runeName: 'Unflinching',
            runeImg: '/static/resolve/t1/Unflinching.png',
            runeDescription: 'Excess healing on you becomes a shield'
          },
          {
            runeName: 'Demolish',
            runeImg: '/static/resolve/t1/Demolish.png',
            runeDescription: 'Takedowns restore 15% of your missing health and grant an additional 25 gold.'
          },
          {
            runeName: 'Font of life',
            runeImg: '/static/resolve/t1/FontOfLife.png',
            runeDescription: 'For 5s after gaining a level or takedown any mana you spend is fully refunded'
          }
        ],
        [
          {
            runeName: 'Iron Skin',
            runeImg: '/static/resolve/t2/IronSkin.png',
            runeDescription: 'Takedowns on enemies grant permanent Attack Speed.'
          },
          {
            runeName: 'Mirror Shell',
            runeImg: '/static/resolve/t2/MirrorShell.png',
            runeDescription: 'Takedowns on enemies grant permanent Tenacity.'
          },
          {
            runeName: 'Conditioning',
            runeImg: '/static/resolve/t2/Conditioning.png',
            runeDescription: 'Takedowns on enemies grant permanent Lifesteal.'
          }
        ],
        [
          {
            runeName: 'Overgrowth',
            runeImg: '/static/resolve/t3/Overgrowth.png',
            runeDescription: 'Deal more damage to low health enemy champions.'
          },
          {
            runeName: 'Revitalize',
            runeImg: '/static/resolve/t3/Revitalize.png',
            runeDescription: 'Deal more damage to champions with more maximum health than you.'
          },
          {
            runeName: 'Second Wind',
            runeImg: '/static/resolve/t3/SecondWind.png',
            runeDescription: 'Deal more damage to champions while you are low on health.'
          }
        ]
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
      keystones: [
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
      runeTiers: [
        [
          {
            runeName: 'Hextech Flashtraption',
            runeImg: '/static/inspiration/t1/HextechFlashtraption.png',
            runeDescription: 'Excess healing on you becomes a shield'
          },
          {
            runeName: 'Biscuit Delivery',
            runeImg: '/static/inspiration/t1/BiscuitDelivery.png',
            runeDescription: 'Takedowns restore 15% of your missing health and grant an additional 25 gold.'
          },
          {
            runeName: 'Perfect Timing',
            runeImg: '/static/inspiration/t1/PerfectTiming.png',
            runeDescription: 'For 5s after gaining a level or takedown any mana you spend is fully refunded'
          }
        ],
        [
          {
            runeName: 'Magical Footware',
            runeImg: '/static/inspiration/t2/MagicalFootware.png',
            runeDescription: 'Takedowns on enemies grant permanent Attack Speed.'
          },
          {
            runeName: 'Future\'s Market',
            runeImg: '/static/inspiration/t2/FuturesMarket.png',
            runeDescription: 'Takedowns on enemies grant permanent Tenacity.'
          },
          {
            runeName: 'Minion Dematerializer',
            runeImg: '/static/inspiration/t2/MinionDematerializer.png',
            runeDescription: 'Takedowns on enemies grant permanent Lifesteal.'
          }
        ],
        [
          {
            runeName: 'Cosmic Insight',
            runeImg: '/static/inspiration/t3/CosmicInsight.png',
            runeDescription: 'Deal more damage to low health enemy champions.'
          },
          {
            runeName: 'Approach Velocity',
            runeImg: '/static/inspiration/t3/ApproachVelocity.png',
            runeDescription: 'Deal more damage to champions with more maximum health than you.'
          },
          {
            runeName: 'Celestial Body',
            runeImg: '/static/inspiration/t3/CelestialBody.png',
            runeDescription: 'Deal more damage to champions while you are low on health.'
          }
        ]
      ],
      footer: 'Creative tools and rule bending'
    }
  ]
}

const getters = {
  getPaths: function (state) {
    return state.paths
  }
}

export default {
  state,
  getters
}
