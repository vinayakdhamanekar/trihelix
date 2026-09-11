/** Content extracted verbatim from the 3.0 design export.
 *  Raw-HTML values keep the shape { __html } and render through <Rich />. */

export const stagesCards = [
  {
    "icon": "assets/Sense.png",
    "title": "Sense",
    "head": {
      "__tag": "span",
      "__props": {},
      "__html": "Find the problem worth<br />solving."
    },
    "body": {
      "__tag": "span",
      "__props": {},
      "__html": "Identify the signals that matter. Understand<br />strategic priorities, constraints, and<br />opportunities that deserve leadership<br />attention."
    },
    "duration": "60 Minutes"
  },
  {
    "icon": "assets/Validate.png",
    "title": "Validate",
    "head": {
      "__tag": "span",
      "__props": {},
      "__html": "Know what is worth<br />pursuing."
    },
    "body": {
      "__tag": "span",
      "__props": {},
      "__html": "Turn clarity into a decision. Determine which<br />opportunities are worth pursuing, what it will<br />take to make them work, and where value<br />can realistically be created."
    },
    "duration": "3 Weeks"
  },
  {
    "icon": "assets/Execute.png",
    "title": "Execute",
    "head": {
      "__tag": "span",
      "__props": {},
      "__html": "Turn the decision into<br />realized value."
    },
    "body": {
      "__tag": "span",
      "__props": {},
      "__html": "Deliver priority initiatives while building the<br />adoption and organizational capability<br />required to scale them."
    },
    "duration": "90 Days"
  }
] as const;

export const stages = [
  {
    "num": "01",
    "name": "SENSE",
    "icon": "assets/Sense.png",
    "iconX": 1099,
    "iconY": 2403,
    "iconW": 198,
    "yNum": 2393,
    "yName": 2490,
    "yHead": 2630,
    "ySub": 2752,
    "yRight": 2619,
    "yHr": 2882,
    "yDelTitle": 2938,
    "delBand": "assets/ap-del-1.png",
    "delX": 112,
    "delY": 3033,
    "delW": 867,
    "yBar": 3209,
    "head": {
      "__tag": "span",
      "__props": {},
      "__html": "Find the problem worth<br />solving."
    },
    "sub": {
      "__tag": "span",
      "__props": {},
      "__html": "You don&rsquo;t need to arrive with a perfectly<br />defined transformation brief."
    },
    "right": [
      {
        "__tag": "div",
        "__props": {
          "key": 0,
          "style": {
            "marginTop": 0
          }
        },
        "__kids": [
          {
            "__tag": "div",
            "__props": {
              "key": 0
            },
            "__html": "Bring the ambition, challenge, opportunity&mdash;or simply the question you&rsquo;re"
          },
          {
            "__tag": "div",
            "__props": {
              "key": 1
            },
            "__html": "trying to answer."
          }
        ]
      },
      {
        "__tag": "div",
        "__props": {
          "key": 1,
          "style": {
            "marginTop": 20
          }
        },
        "__kids": [
          {
            "__tag": "div",
            "__props": {
              "key": 0
            },
            "__html": "TriHelix arrives prepared, using available business and market context to"
          },
          {
            "__tag": "div",
            "__props": {
              "key": 1
            },
            "__html": "make the conversation focused from the beginning."
          }
        ]
      },
      {
        "__tag": "div",
        "__props": {
          "key": 2,
          "style": {
            "marginTop": 20
          }
        },
        "__kids": [
          {
            "__tag": "div",
            "__props": {
              "key": 0
            },
            "__html": "Together, we identify the <b>signals behind the noise</b> and determine what"
          },
          {
            "__tag": "div",
            "__props": {
              "key": 1
            },
            "__html": "deserves deeper investigation across five dimensions: <b>business, data,</b>"
          },
          {
            "__tag": "div",
            "__props": {
              "key": 2
            },
            "__html": "<b>operations, technology, and people.</b>"
          }
        ]
      }
    ],
    "barText": "A focused conversation designed to help surface the problem or opportunity that matters enough to take forward."
  },
  {
    "num": "02",
    "name": "VALIDATE",
    "icon": "assets/Validate.png",
    "iconX": 1100,
    "iconY": 3521,
    "iconW": 199,
    "yNum": 3497,
    "yName": 3594,
    "yHead": 3721,
    "ySub": 3892,
    "yRight": 3785,
    "yHr": 4040,
    "yDelTitle": 4096,
    "delBand": "assets/ap-del-2.png",
    "delX": 135,
    "delY": 4187,
    "delW": 771,
    "yBar": 4421,
    "head": {
      "__tag": "span",
      "__props": {},
      "__html": "Know what is worth<br />pursuing before you<br />commit."
    },
    "sub": {
      "__tag": "span",
      "__props": {},
      "__html": "Clarity tells you where to look.<br />Validation tells you whether something is<br />worth pursuing."
    },
    "right": [
      {
        "__tag": "div",
        "__props": {
          "key": 0,
          "style": {
            "marginTop": 0
          }
        },
        "__kids": [
          {
            "__tag": "div",
            "__props": {
              "key": 0
            },
            "__html": "Our 3-Week Deep Dive Diagnostic takes the priority areas identified in"
          },
          {
            "__tag": "div",
            "__props": {
              "key": 1
            },
            "__html": "Sense and investigates them in greater depth."
          },
          {
            "__tag": "div",
            "__props": {
              "key": 2
            },
            "__html": "We examine the business need, operational reality, data and technology"
          },
          {
            "__tag": "div",
            "__props": {
              "key": 3
            },
            "__html": "foundation, organizational capability and potential value."
          }
        ]
      },
      {
        "__tag": "div",
        "__props": {
          "key": 1,
          "style": {
            "marginTop": 20
          }
        },
        "__kids": [
          {
            "__tag": "div",
            "__props": {
              "key": 0
            },
            "__html": "<b>Fixed Scope. Fixed Investment. Clear Decision.</b>"
          }
        ]
      }
    ],
    "barText": "A practical basis for deciding what to fund, prove, defer or scale."
  },
  {
    "num": "03",
    "name": "EXECUTE",
    "icon": "assets/Execute.png",
    "iconX": 1093,
    "iconY": 4719,
    "iconW": 210,
    "yNum": 4694,
    "yName": 4790,
    "yHead": 4931,
    "ySub": 5053,
    "yRight": 4920,
    "yHr": 5182,
    "yDelTitle": 5238,
    "delBand": "assets/ap-del-3.png",
    "delX": 147,
    "delY": 5317,
    "delW": 1114,
    "yBar": 5579,
    "head": {
      "__tag": "span",
      "__props": {},
      "__html": "90 days to measurable,<br />trusted AI."
    },
    "sub": {
      "__tag": "span",
      "__props": {},
      "__html": "A successful proof of concept is not the end<br />goal."
    },
    "right": [
      {
        "__tag": "div",
        "__props": {
          "key": 0,
          "style": {
            "marginTop": 0
          }
        },
        "__kids": [
          {
            "__tag": "div",
            "__props": {
              "key": 0
            },
            "__html": "The goal is to create value that can be adopted, integrated, measured, and"
          },
          {
            "__tag": "div",
            "__props": {
              "key": 1
            },
            "__html": "scaled."
          }
        ]
      },
      {
        "__tag": "div",
        "__props": {
          "key": 1,
          "style": {
            "marginTop": 20
          }
        },
        "__kids": [
          {
            "__tag": "div",
            "__props": {
              "key": 0
            },
            "__html": "TriHelix brings technology, experience, and adoption together in a"
          },
          {
            "__tag": "div",
            "__props": {
              "key": 1
            },
            "__html": "focused 90-day delivery sprint."
          }
        ]
      },
      {
        "__tag": "div",
        "__props": {
          "key": 2,
          "style": {
            "marginTop": 20
          }
        },
        "__kids": [
          {
            "__tag": "div",
            "__props": {
              "key": 0
            },
            "__html": "The priorities pursued here are informed by the strategic"
          },
          {
            "__tag": "div",
            "__props": {
              "key": 1
            },
            "__html": "context established in Sense and the opportunities validated in the Deep"
          },
          {
            "__tag": "div",
            "__props": {
              "key": 2
            },
            "__html": "Dive."
          }
        ]
      }
    ],
    "barText": "1-2 Priority Initiatives. 90 Days. Measurable Outcomes."
  }
] as const;

export const principles = [
  {
    "title": "01 DIAGNOSTIC-FIRST",
    "body": {
      "__tag": "span",
      "__props": {},
      "__html": "We understand the friction before<br />proposing the solution."
    }
  },
  {
    "title": "02 OUTCOMES OVER HEADCOUNT",
    "body": {
      "__tag": "span",
      "__props": {},
      "__html": "We focus on measurable value recovered<br />&mdash;not the size of the team deployed."
    }
  },
  {
    "title": "03  WE BUILD AI",
    "body": {
      "__tag": "span",
      "__props": {},
      "__html": "From data engineering and model<br />development to MLOps and<br />productisation, we build what the<br />business needs&mdash;not simply advise on<br />what others should build."
    }
  },
  {
    "title": "04 HONEST COUNSEL",
    "body": "If AI isn’t the answer, we say so."
  }
] as const;

/** Deliverable icons, baked one-by-one out of the .fig, with their labels as
 *  real text — the old flattened strips clipped the copy at the right edge. */
export const deliverables = [
  [{ icon: "assets/ap-del-1a.webp", x: 99, y: 3028, w: 131, h: 104, label: "An executive-level strategic pulse", lx: 272, ly: 3057, lw: 210 }, { icon: "assets/ap-del-1b.webp", x: 634, y: 3013, w: 138, h: 133, label: "Priority problem and opportunity areas", lx: 814, ly: 3057, lw: 203 }],
  [{ icon: "assets/ap-del-2a.webp", x: 135, y: 4171, w: 107, h: 141, label: "AI Ambition & Readiness Snapshot", lx: 100, ly: 4312, lw: 177, center: true }, { icon: "assets/ap-del-2b.webp", x: 458, y: 4176, w: 100, h: 131, label: "Growth Levers and Key Challenges", lx: 429, ly: 4307, lw: 157, center: true }, { icon: "assets/ap-del-2c.webp", x: 781, y: 4180, w: 86, h: 95, label: "Prioritized Initiative Scoped for Execution", lx: 738, ly: 4303, lw: 200, center: true }],
  [{ icon: "assets/ap-del-3a.webp", x: 144, y: 5324, w: 89, h: 90, label: "A working MVP or validated priority solution", lx: 100, ly: 5438, lw: 177, center: true }, { icon: "assets/ap-del-3b.webp", x: 395, y: 5332, w: 94, h: 89, label: "Defined success measures", lx: 357, ly: 5452, lw: 169, center: true }, { icon: "assets/ap-del-3c.webp", x: 645, y: 5322, w: 80, h: 86, label: "Evidence of value against agreed business outcomes", lx: 606, ly: 5439, lw: 157, center: true }, { icon: "assets/ap-del-3d.webp", x: 909, y: 5314, w: 80, h: 90, label: "Adoption and organizational enablement", lx: 843, ly: 5447, lw: 211, center: true }, { icon: "assets/ap-del-3e.webp", x: 1192, y: 5318, w: 75, h: 80, label: "A roadmap for organization-wide rollout", lx: 1134, ly: 5444, lw: 191, center: true }],
] as const;
