const state = {
  paths: [
    {
      glowImg: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Precision/glow-p.png',
      pathImg: 'static/precision/precision.png',
      pathSmall: 'static/precision/precision-small.png',
      ringImg: 'static/precision/vfx-ring.png',
      pathTitle: 'Precision',
      pathId: 8000,
      pathSubtitle: 'Become a Legend',
      keystones: [
        {
          imgSrc: 'static/precision/keystones/PressTheAttack.png',
          keystoneName: 'Press The Attack',
          keystoneDescription: 'Hitting an enemy champion 3 consecutive times makes them vulnerable.',
          keystoneId: 8005
        },
        {
          imgSrc: 'static/precision/keystones/FleetFootwork.png',
          keystoneName: 'Fleet Footwork',
          keystoneDescription: 'Attacking and moving builds Energy stacks. At 100 stacks, your next',
          keystoneId: 8021
        },
        {
          imgSrc: 'static/precision/keystones/LethalTempo.png',
          keystoneName: 'Lethal Tempo',
          keystoneDescription: '1.5s after damaging a champion gain a large amount of attack s',
          keystoneId: 8008
        }
      ],
      runeTiers: [
        [
          {
            runeName: 'Overheal',
            runeImg: 'static/precision/t1/Overheal.png',
            pathId: 9101,
            runeDescription: 'Excess healing on you becomes a shield'
          },
          {
            runeName: 'Triumph',
            runeImg: 'static/precision/t1/Triumph.png',
            pathId: 9111,
            runeDescription: 'Takedowns restore 15% of your missing health and grant an additional 25 gold.'
          },
          {
            runeName: 'Presence of Mind',
            runeImg: 'static/precision/t1/PresenceOfMind.png',
            pathId: 8009,
            runeDescription: 'For 5s after gaining a level or takedown any mana you spend is fully refunded'
          }
        ],
        [
          {
            runeName: 'Legend: Alacrity',
            runeImg: 'static/precision/t2/LegendAlacrity.png',
            pathId: 9104,
            runeDescription: 'Takedowns on enemies grant permanent Attack Speed.'
          },
          {
            runeName: 'Legend: Tenacity',
            runeImg: 'static/precision/t2/LegendTenacity.png',
            pathId: 9105,
            runeDescription: 'Takedowns on enemies grant permanent Tenacity.'
          },
          {
            runeName: 'Legend: Bloodline',
            runeImg: 'static/precision/t2/LegendBloodline.png',
            pathId: 9103,
            runeDescription: 'Takedowns on enemies grant permanent Lifesteal.'
          }
        ],
        [
          {
            runeName: 'Coup De Grace',
            runeImg: 'static/precision/t3/CoupDeGrace.png',
            pathId: 8014,
            runeDescription: 'Deal more damage to low health enemy champions.'
          },
          {
            runeName: 'Cut Down',
            runeImg: 'static/precision/t3/CutDown.png',
            pathId: 8017,
            runeDescription: 'Deal more damage to champions with more maximum health than you.'
          },
          {
            runeName: 'Last Stand',
            runeImg: 'static/precision/t3/LastStand.png',
            pathId: 8299,
            runeDescription: 'Deal more damage to champions while you are low on health.'
          }
        ]
      ],
      footer: 'Improved attacks and sustained damage'
    },
    {
      glowImg: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Domination/glow-d.png',
      pathImg: 'static/domination/domination.png',
      pathSmall: 'static/domination/domination-small.png',
      ringImg: 'static/domination/vfx-ring.png',
      pathTitle: 'Domination',
      pathId: 8100,
      pathSubtitle: 'Hunt and Eliminate Prey',
      keystones: [
        {
          imgSrc: 'static/domination/keystones/Electrocute.png',
          keystoneName: 'Electrocute',
          keystoneDescription: 'Hitting a champion with 3 separate attacks or abilities in 3s deals bo…',
          keystoneId: 8112
        },
        {
          imgSrc: 'static/domination/keystones/DarkHarvest.png',
          keystoneName: 'Dark Harvest',
          keystoneDescription: 'Champions, large minions, and large monsters drop soul essence on d…',
          keystoneId: 8128
        },
        {
          imgSrc: 'static/domination/keystones/Predator.png',
          keystoneName: 'Predator',
          keystoneDescription: 'Add an active effect to your boots that grants a large boost of MS an…',
          keystoneId: 8124
        }
      ],
      runeTiers: [
        [
          {
            runeName: 'Cheap Shot',
            runeImg: 'static/domination/t1/CheapShot.png',
            pathId: 8126,
            runeDescription: 'Deal bonus true damage to enemies with impaired movement or actions.'
          },
          {
            runeName: 'Taste Of Blood',
            runeImg: 'static/domination/t1/TasteOfBlood.png',
            pathId: 8139,
            runeDescription: 'Heal when you damage an enemy champion.'
          },
          {
            runeName: 'Sudden Impact',
            runeImg: 'static/domination/t1/SuddenImpact.png',
            pathId: 8143,
            runeDescription: 'Gain a burst of Lethality and Magic Penetration after using a dash, le…'
          }
        ],
        [
          {
            runeName: 'Zombie Ward',
            runeImg: 'static/domination/t2/ZombieWard.png',
            pathId: 8236,
            runeDescription: 'After killing a ward, a friendly Zombie Ward is raised in its plac…'
          },
          {
            runeName: 'Ghost Poro',
            runeImg: 'static/domination/t2/GhostPoro.png',
            pathId: 8120,
            runeDescription: 'When you enter brush, a poro appears. It will stay behind to give…'
          },
          {
            runeName: 'Eyeball Collection',
            runeImg: 'static/domination/t2/EyeballCollection.png',
            pathId: 8138,
            runeDescription: 'Collect eyeballs for champion and ward takedowns. Gain permanent…'
          }
        ],
        [
          {
            runeName: 'Ravenous Hunter',
            runeImg: 'static/domination/t3/RavenousHunter.png',
            pathId: 8135,
            runeDescription: 'Unique takedowns grant permanent healing from ability damage.'
          },
          {
            runeName: 'Ingenious Hunter',
            runeImg: 'static/domination/t3/IngeniousHunter.png',
            pathId: 8134,
            runeDescription: 'Unique takedowns grant permanent Active Item CDR (includes Trinkets).'
          },
          {
            runeName: 'Relentless Hunter',
            runeImg: 'static/domination/t3/RelentlessHunter.png',
            pathId: 8105,
            runeDescription: 'Unique champion takedowns grant permanent out of combat MS.'
          }
        ]
      ],
      footer: 'Burst damage and target access'
    },
    {
      glowImg: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Sorcery/glow-s.png',
      pathImg: 'static/sorcery/sorcery.png',
      pathSmall: 'static/sorcery/sorcery-small.png',
      ringImg: 'static/sorcery/vfx-ring.png',
      pathTitle: 'Sorcery',
      pathId: 8200,
      pathSubtitle: 'Unleash Destruction',
      keystones: [
        {
          imgSrc: 'static/sorcery/keystones/SummonAerie.png',
          keystoneName: 'Summoner Aerie',
          keystoneDescription: 'Your attacks and abilities send Aery to a target, damaging enemies or …',
          keystoneId: 8214
        },
        {
          imgSrc: 'static/sorcery/keystones/PhaseRush.png',
          keystoneName: 'Phase Rush',
          keystoneDescription: 'Hitting an enemy champion with 3 separate attacks or abilities grant…',
          keystoneId: 8230
        },
        {
          imgSrc: 'static/sorcery/keystones/ArcaneComet.png',
          keystoneName: 'Arcane Comet',
          keystoneDescription: 'Damaging a champion with an ability hurls a damaging comet at their lo…',
          keystoneId: 8229
        }
      ],
      runeTiers: [
        [
          {
            runeName: 'Nullifying Orb',
            runeImg: 'static/sorcery/t1/NullifyingOrb.png',
            pathId: 8224,
            runeDescription: 'Gain a magic damage shield when taken to low health by magic da…'
          },
          {
            runeName: 'Manaflow Band',
            runeImg: 'static/sorcery/t1/ManaflowBand.png',
            pathId: 8226,
            runeDescription: 'Periodically your next ability used has its mana or energy cost refu…'
          },
          {
            runeName: 'The Ultimate Hat',
            runeImg: 'static/sorcery/t1/TheUltimateHat.png',
            pathId: 8243,
            runeDescription: 'Your ultimate\'s cooldown is reduced. Each time you cast your …'
          }
        ],
        [
          {
            runeName: 'Transcendence',
            runeImg: 'static/sorcery/t2/Transcendence.png',
            pathId: 8210,
            runeDescription: 'Gain 10% CDR when you reach level 10. Excess CDR becomes AP or A…'
          },
          {
            runeName: 'Celerity',
            runeImg: 'static/sorcery/t2/Celerity.png',
            pathId: 8234,
            runeDescription: 'Gain 4% extra MS. Gain extra AP or AD, adaptive based on your bonus…'
          },
          {
            runeName: 'Absolute Focus',
            runeImg: 'static/sorcery/t2/AbsoluteFocus.png',
            pathId: 8233,
            runeDescription: 'While above 70% health, gain extra adaptive damage.'
          }
        ],
        [
          {
            runeName: 'Scorch',
            runeImg: 'static/sorcery/t3/Scorch.png',
            pathId: 8237,
            runeDescription: 'Your first ability hit every 20s burns champions.'
          },
          {
            runeName: 'Water Walking',
            runeImg: 'static/sorcery/t3/Waterwalking.png',
            pathId: 8232,
            runeDescription: 'Gain MS and AP or AD, adaptive in the river.'
          },
          {
            runeName: 'Gathering Storm',
            runeImg: 'static/sorcery/t3/GatheringStorm.png',
            pathId: 8236,
            runeDescription: 'Gain increasing amounts of AD or AP, adaptive over the course of th…'
          }
        ]
      ],
      footer: 'Empowered abilities and resource manipulation'
    },
    {
      glowImg: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Resolve/glow-r.png',
      pathImg: 'static/resolve/resolve.png',
      pathSmall: 'static/resolve/resolve-small.png',
      ringImg: 'static/resolve/vfx-ring.png',
      pathTitle: 'Resolve',
      pathId: 8400,
      pathSubtitle: 'Live Forever',
      keystones: [
        {
          imgSrc: 'static/resolve/keystones/GraspOfTheUndying.png',
          keystoneName: 'Grasp Of The Undying',
          keystoneDescription: 'Every 4s your next attack on a champion deals bonus magic dam…',
          keystoneId: 8439
        },
        {
          imgSrc: 'static/resolve/keystones/Guardian.png',
          keystoneName: 'Guardian',
          keystoneDescription: 'Guard allies you cast spells on and those that are very nearby. If you…',
          keystoneId: 8465
        },
        {
          imgSrc: 'static/resolve/keystones/Aftershock.png',
          keystoneName: 'Aftershock',
          keystoneDescription: 'After immobilizing an enemy champion gain defenses and late…',
          keystoneId: 8437
        }
      ],
      runeTiers: [
        [
          {
            runeName: 'Unflinching',
            runeImg: 'static/resolve/t1/Unflinching.png',
            pathId: 8242,
            runeDescription: 'After casting a Summoner Spell, gain Tenacity and Slow Resistan…'
          },
          {
            runeName: 'Demolish',
            runeImg: 'static/resolve/t1/Demolish.png',
            pathId: 8446,
            runeDescription: 'Charge up a powerful attack against a tower while near it.'
          },
          {
            runeName: 'Font of life',
            runeImg: 'static/resolve/t1/FontOfLife.png',
            pathId: 8463,
            runeDescription: 'Impairing the movement of an enemy champion marks them. Y…'
          }
        ],
        [
          {
            runeName: 'Iron Skin',
            runeImg: 'static/resolve/t2/IronSkin.png',
            pathId: 8430,
            runeDescription: 'Gain +5 Armor. Heals, including consumables, increase your Arm…'
          },
          {
            runeName: 'Mirror Shell',
            runeImg: 'static/resolve/t2/MirrorShell.png',
            pathId: 8435,
            runeDescription: 'Gain +5 Magic Resist. Heals, including consumables, increase …'
          },
          {
            runeName: 'Conditioning',
            runeImg: 'static/resolve/t2/Conditioning.png',
            pathId: 8429,
            runeDescription: 'After 10 min gain +8 Armor and +8 Magic Resist and increase your A…'
          }
        ],
        [
          {
            runeName: 'Overgrowth',
            runeImg: 'static/resolve/t3/Overgrowth.png',
            pathId: 8451,
            runeDescription: 'Gain additional permanent max health when minions or monsters…'
          },
          {
            runeName: 'Revitalize',
            runeImg: 'static/resolve/t3/Revitalize.png',
            pathId: 8453,
            runeDescription: 'Heals and shields are 5% stronger and increased by an additional 1…'
          },
          {
            runeName: 'Second Wind',
            runeImg: 'static/resolve/t3/SecondWind.png',
            pathId: 8444,
            runeDescription: 'After taking damage from an enemy champion heal back some of you…'
          }
        ]
      ],
      footer: 'Durability and crowd control'
    },
    {
      glowImg: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/preseason-2018/en_US/a6708b7ae3dbc0b25463f9c8e259a513d2c4c7e6/assets/img/runeBuilder/assets/Inspiration/glow-i.png',
      pathImg: 'static/inspiration/inspiration.png',
      pathSmall: 'static/inspiration/inspiration-small.png',
      ringImg: 'static/inspiration/vfx-ring.png',
      pathTitle: 'Inspiration',
      pathId: 8300,
      pathSubtitle: 'Outwit mere mortals',
      keystones: [
        {
          imgSrc: 'static/inspiration/keystones/Kleptomancy.png',
          keystoneName: 'Kleptomancy',
          keystoneDescription: 'Your first attack after using an ability grants gold and sometimes …',
          keystoneId: 8359
        },
        {
          imgSrc: 'static/inspiration/keystones/UnsealedSpellbook.png',
          keystoneName: 'Unsealed Spellbook',
          keystoneDescription: 'Get Summoner Shards and exchange them at the shop to ch…',
          keystoneId: 8326
        },
        {
          imgSrc: 'static/inspiration/keystones/GlacialAugment.png',
          keystoneName: 'Glacial Augment',
          keystoneDescription: 'Your first attack against an enemy champion slows them (per unit c…',
          keystoneId: 8351
        }
      ],
      runeTiers: [
        [
          {
            runeName: 'Hextech Flashtraption',
            runeImg: 'static/inspiration/t1/HextechFlashtraption.png',
            pathId: 8306,
            runeDescription: 'While Flash is on cooldown it is replaced by Hexflash.Hexflash: C…'
          },
          {
            runeName: 'Biscuit Delivery',
            runeImg: 'static/inspiration/t1/BiscuitDelivery.png',
            pathId: 8345,
            runeDescription: 'Gain a free Biscuit every 3 min, until 12 min. Biscuits restore health an…'
          },
          {
            runeName: 'Perfect Timing',
            runeImg: 'static/inspiration/t1/PerfectTiming.png',
            pathId: 8313,
            runeDescription: 'Gain a free Stopwatch. Stopwatch has a one time use Stasis effect.'
          }
        ],
        [
          {
            runeName: 'Magical Footwear',
            runeImg: 'static/inspiration/t2/MagicalFootwear.png',
            pathId: 8304,
            runeDescription: 'You get free boots at 10 min but you cannot buy boots before then…'
          },
          {
            runeName: 'Future\'s Market',
            runeImg: 'static/inspiration/t2/FuturesMarket.png',
            pathId: 8321,
            runeDescription: 'You can enter debt to buy items.'
          },
          {
            runeName: 'Minion Dematerializer',
            runeImg: 'static/inspiration/t2/MinionDematerializer.png',
            pathId: 8316,
            runeDescription: 'Start the game with 6 Minion Dematerializers. Killing minions wi…'
          }
        ],
        [
          {
            runeName: 'Cosmic Insight',
            runeImg: 'static/inspiration/t3/CosmicInsight.png',
            pathId: 8347,
            runeDescription: '+5% CDR+5% Max CDR+5% Summoner Spell CDR+5% Item CD…'
          },
          {
            runeName: 'Approach Velocity',
            runeImg: 'static/inspiration/t3/ApproachVelocity.png',
            pathId: 8410,
            runeDescription: 'Bonus MS towards nearby ally champions that are movement i…'
          },
          {
            runeName: 'Celestial Body',
            runeImg: 'static/inspiration/t3/CelestialBody.png',
            pathId: 8339,
            runeDescription: '+100 Health permanently-10% damage to champions and mons…'
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
