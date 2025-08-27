// Packs and prompts. Each cue includes a concise rationale used in Study Mode and in the results analysis.
const packs = [
  {
    id: "class",
    name: "Pack 1 — Class & Homelessness",
    cues: [
      {
        text: "A newspaper describes rough sleepers as ‘smelling unclean’.",
        category: "Social",
        rationale:
          "Smell marks poverty as social ‘otherness’, policing belonging rather than neutrally describing hygiene."
      },
      {
        text: "A charity advert implies hardship carries a ‘stench of failure’.",
        category: "Moral",
        rationale:
          "The phrase moralises poverty: odour stands in for personal blame or a moral lapse."
      },
      {
        text: "Bins near a hostel are said to ‘reek, therefore the residents must be filthy’.",
        category: "Disgust",
        rationale:
          "Disgust generalises from place to people, attaching odour to moral character in a stigmatising move."
      },
      {
        text: "A commentator calls low-income areas ‘whiffy’ to signal disorder.",
        category: "Social",
        rationale:
          "Smell is shorthand for classed space, sorting neighbourhoods into ‘respectable’ and ‘suspect’."
      },
      {
        text: "A policy memo praises ‘neutral’ office scents as proof of professionalism.",
        category: "Moral",
        rationale:
          "‘Neutral’ functions as a code for conformity, aligning cleanliness with worthiness and employability."
      },
      {
        text: "Residents near a shelter complain that ‘the smell says it all’.",
        category: "Disgust",
        rationale:
          "Disgust is mobilised as unarguable evidence, bypassing discussion and reinforcing exclusion."
      },
      {
        text: "A local blog praises a ‘freshly laundered’ café as a sign of respectable clientele.",
        category: "Social",
        rationale:
          "Clean smell is used as a class marker, implying some bodies belong and others do not."
      },
      {
        text: "A leaflet warns that ‘lingering odours’ undermine civic pride.",
        category: "Moral",
        rationale:
          "Scent is framed as a moral duty linked to civic virtue and disciplined behaviour."
      }
    ]
  },
  {
    id: "queer",
    name: "Pack 2 — Queer vs Perversion",
    cues: [
      {
        text: "A scene contrasts ‘clean romance’ with a ‘rank, illicit liaison’.",
        category: "Moral",
        rationale:
          "Odour helps draw a line between sanctioned intimacy and moralised ‘perversion’."
      },
      {
        text: "A narrator describes a queer club as ‘a fug of bodies and freedom’.",
        category: "Social",
        rationale:
          "Smell is reclaimed socially to signal community and shared pleasure rather than shame."
      },
      {
        text: "A bystander mutters that ‘it smells wrong here’ during a Pride event.",
        category: "Disgust",
        rationale:
          "Disgust polices norms by casting difference as contamination."
      },
      {
        text: "A character keeps the lover’s scarf because it ‘smells like a promise’.",
        category: "Memory",
        rationale:
          "Scent anchors tenderness and continuity, storing affect for later recall."
      },
      {
        text: "A columnist urges ‘fresh air’ to rid a city of ‘decadence’.",
        category: "Moral",
        rationale:
          "Purity metaphors moralise the public sphere and pathologise queer joy."
      },
      {
        text: "Friends recognise each other instantly by a trace of perfume on the stairs.",
        category: "Memory",
        rationale:
          "Scent acts as mnemonic glue binding relationships across time and space."
      },
      {
        text: "A poster promises to ‘clean up nightlife’ with strict deodorising rules.",
        category: "Social",
        rationale:
          "Regulation of smell becomes regulation of bodies, narrowing who can belong."
      },
      {
        text: "A gossip column jokes that a bar ‘reeks of sin’.",
        category: "Moral",
        rationale:
          "Odour is drafted into a moral narrative that confuses pleasure with wrongdoing."
      }
    ]
  },
  {
    id: "misogynoir",
    name: "Pack 3 — Misogynoir",
    cues: [
      {
        text: "A stereotype claims a Black woman’s hair products ‘smell unprofessional’.",
        category: "Moral",
        rationale:
          "Respectability politics weaponise ‘neutral’ scent to police racialised femininity."
      },
      {
        text: "A character says a Black mother’s kitchen ‘smells too strong’ for the neighbourhood.",
        category: "Disgust",
        rationale:
          "Everyday aromas are racialised and cast as invasive, not simply different."
      },
      {
        text: "An aunt’s perfume is remembered as ‘a shield against the world’.",
        category: "Memory",
        rationale:
          "Scent stores care, resilience, and intergenerational knowledge."
      },
      {
        text: "A colleague insists ‘subtlety is professional’ while spraying air freshener.",
        category: "Social",
        rationale:
          "The shared air is policed to protect dominant norms; coded language excludes others."
      },
      {
        text: "A blog praises ‘pure, white tea notes’ as the height of refinement.",
        category: "Moral",
        rationale:
          "Purity language quietly attaches virtue to particular (racialised) aesthetics."
      },
      {
        text: "A school note says a girl’s lunch ‘leaves a smell behind’.",
        category: "Disgust",
        rationale:
          "Cultural food becomes framed as contamination rather than community."
      },
      {
        text: "A niece keeps a scarf because ‘it still smells like auntie’s hug’.",
        category: "Memory",
        rationale:
          "Personal scent becomes an archive of care and belonging."
      },
      {
        text: "An advert labels a product ‘universal’ and ‘barely there’.",
        category: "Social",
        rationale:
          "‘Universal’ masks who sets the baseline; neutrality is somebody’s preference made rule."
      }
    ]
  },
  {
    id: "oppressive",
    name: "Pack 4 — Oppressive Logic",
    cues: [
      {
        text: "A poster says ‘odour is evidence’ in anti-loitering campaigns.",
        category: "Disgust",
        rationale:
          "Smell is presented as incontrovertible proof to short-circuit debate."
      },
      {
        text: "A narrator admires a spotless corridor as ‘smelling of order and duty’.",
        category: "Moral",
        rationale:
          "Cleanliness is yoked to obedience and control, not merely hygiene."
      },
      {
        text: "A community garden is described as ‘earthy and welcoming’.",
        category: "Social",
        rationale:
          "Shared scents invite participation and mutual care."
      },
      {
        text: "A visitor says a historic archive ‘smells like our ancestors speaking’.",
        category: "Memory",
        rationale:
          "Scent evokes continuity with the past and makes it felt in the present."
      },
      {
        text: "A sign reads ‘no odours beyond this point’ at a public bench.",
        category: "Disgust",
        rationale:
          "Disgust draws invisible borders, filtering which bodies may remain in view."
      },
      {
        text: "A manager rewards ‘the cleanest team’ with extra privileges.",
        category: "Moral",
        rationale:
          "Scent becomes a metric for virtue, naturalising a hierarchy."
      },
      {
        text: "Neighbours say a block ‘smells safer’ after lights and plants were added.",
        category: "Social",
        rationale:
          "Collective action reshapes how space is sensed and shared."
      },
      {
        text: "A museum keeps old books unperfumed so visitors ‘can smell time’.",
        category: "Memory",
        rationale:
          "Allowing historic scent legitimises memory as knowledge rather than nuisance."
      }
    ]
  },
  {
    id: "nonhuman",
    name: "Pack 5 — Non-human / Utopic",
    cues: [
      {
        text: "Rain on warm stone releases an aroma that quietens the street.",
        category: "Memory",
        rationale:
          "Petrichor calls up embodied recollection and communal pause."
      },
      {
        text: "A meadow’s scent is said to ‘invite fairness and patience’.",
        category: "Moral",
        rationale:
          "Utopic nature is moralised, as if virtue inheres in certain airs."
      },
      {
        text: "A festival of flowers is described as ‘the city breathing together’.",
        category: "Social",
        rationale:
          "Shared scent is a metaphor for collective rhythm and belonging."
      },
      {
        text: "A compost heap is called ‘delightfully pungent’.",
        category: "Disgust",
        rationale:
          "Revaluing ‘waste’ can unsettle disgust and open ecological care."
      },
      {
        text: "A child says a library ‘smells like adventures waiting’.",
        category: "Memory",
        rationale:
          "Scent unlocks imaginative recall and curiosity."
      },
      {
        text: "A poet wants ‘clean winds’ to come and ‘sweep away deceit’.",
        category: "Moral",
        rationale:
          "Atmosphere is made to carry ethical renewal, not just weather."
      },
      {
        text: "Neighbours gather because the evening air ‘smells of cooking and company’.",
        category: "Social",
        rationale:
          "Scent acts as a communal invitation and a promise of hospitality."
      },
      {
        text: "A canal towpath ‘stinks’ yet the walkers smile.",
        category: "Disgust",
        rationale:
          "Ambivalence: lively places can mingle pleasure with mild disgust."
      }
    ]
  }
];

export default packs;
