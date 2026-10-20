window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m1",
 "order": 1,
 "code": "Justify",
 "title": "Initiation, Feasibility & the Business Case",
 "subtitle": "Decide whether an engineering project deserves to exist, and set it up to succeed",
 "outcomes": [
  "Explain engineering project life cycles, stage gates and the roles of owner, consultant, contractor and operator",
  "Conduct a feasibility study and options analysis with an honest do-nothing baseline and sound site selection",
  "Calculate and interpret NPV, IRR, payback, discounted payback and benefit-cost ratio",
  "Build a business case with sensitivity and scenario analysis, whole-life carbon and an appropriate funding route",
  "Draft a project charter with governance, decision rights, tolerances and stage-gate approvals"
 ],
 "lessons": [
  {
   "id": "m1-l1",
   "title": "Engineering Projects, Life Cycles & Stage Gates",
   "subtitle": "How capital projects move from idea to operating asset, and who does what along the way",
   "minutes": 30,
   "objectives": [
    "Distinguish the project life cycle from the asset life cycle and explain why owners must care about both",
    "Describe the roles of owner, owner's engineer, designer, EPC contractor, vendors and O&M operator",
    "Explain how stage gates and front-end loading protect capital investment decisions"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Engineering projects create physical assets that must work for decades: a substation, a viaduct, a dyeing house, an LNG jetty, a hospital wing. That changes the nature of project management. Most of the money is committed through **irreversible decisions**: once piles are driven, a turbine is ordered or a raft foundation is poured, changing your mind becomes very expensive. Many organisations are involved at once, each with its own contract, incentives and appetite for risk. And the real test of success is not the ribbon-cutting but whether the asset delivers the output, safety and reliability it was built for, year after year."
    },
    {
     "type": "text",
     "text": "It helps to separate two life cycles. The **project life cycle** runs from the first idea to handover: identify, select, define, execute and commission. The **asset life cycle** is far longer: it contains the project, then years of operation and maintenance, upgrades and finally decommissioning or demolition. Owners pay for the whole asset life cycle, so decisions made during the project, such as material choices, equipment redundancy, access for maintenance and energy efficiency, should be judged on whole-life cost and performance, not on capital cost alone. Contractors are mostly paid for the project life cycle, which is one reason owner and contractor priorities can quietly diverge. In the ZEPMS Delivery Loop, **Justify** covers the Identify and Select phases below, **Define** covers Define, the middle stages run across Define and Execute, and **Commission** closes the project and opens operations. Asset management standards (ISO 55000 and ISO 55001, both revised in 2024) expect project decisions to trace back to the organisation's asset management objectives, while ISO 21502:2020 gives general guidance on governing and managing the project itself."
    },
    {
     "type": "flow",
     "title": "A typical capital project life cycle (owner's view)",
     "items": [
      {
       "label": "Identify",
       "text": "Business need or opportunity, strategic fit and a first rough cost range"
      },
      {
       "label": "Select",
       "text": "Pre-feasibility and feasibility; compare options and choose the preferred concept"
      },
      {
       "label": "Define",
       "text": "Basis of design, FEED, execution plan, estimate and schedule good enough to sanction"
      },
      {
       "label": "Execute",
       "text": "Detailed design, procurement, fabrication and construction"
      },
      {
       "label": "Commission",
       "text": "Test systems, prove performance and hand over to operations"
      },
      {
       "label": "Operate",
       "text": "Run, maintain and measure benefits; feed lessons into the next project"
      }
     ]
    },
    {
     "type": "table",
     "title": "Who does what on an engineering project",
     "head": [
      "Role",
      "Main interest",
      "Typical responsibilities",
      "Risk usually carried"
     ],
     "rows": [
      [
       "Owner (employer, client)",
       "Return on investment, public service or production capacity",
       "Sets objectives, funds the project, approves gates, accepts the asset",
       "Business risk: demand, financing, permits, owner-supplied information"
      ],
      [
       "Owner's engineer or consultant",
       "Professional reputation and fees",
       "Advises the owner, prepares feasibility and FEED, reviews contractor designs, supervises quality",
       "Liability for the professional care of its own advice and design"
      ],
      [
       "Designer (in-house or appointed)",
       "A buildable, compliant design delivered on time",
       "Calculations, drawings, specifications, models and design reviews",
       "Design errors within its own scope"
      ],
      [
       "EPC or main contractor",
       "Margin, cash flow and repeat work",
       "Detailed design (if EPC), procurement, construction, subcontractor management, site safety",
       "Price, productivity and schedule risk as far as the contract allocates them"
      ],
      [
       "Vendors and subcontractors",
       "Selling equipment or specialist services",
       "Supplying switchgear, turbines, chillers, piling or steel erection, with performance guarantees",
       "Performance and delivery of their own package"
      ],
      [
       "O&M operator",
       "Safe, reliable and efficient operation",
       "Operations input to design, participation in commissioning, running the asset",
       "Availability and performance after handover"
      ]
     ]
    },
    {
     "type": "table",
     "title": "Same discipline, different emphasis by sector",
     "head": [
      "Sector",
      "Illustrative projects",
      "Defining technical challenge",
      "What tends to dominate the business case"
     ],
     "rows": [
      [
       "Buildings",
       "Hospital blocks, university campuses, high-rise offices",
       "MEP coordination in tight ceiling voids, fire safety, fit-out interfaces",
       "Functional brief, whole-life running cost, occupancy date"
      ],
      [
       "Transport infrastructure",
       "Bridges, expressways, metro lines, ports",
       "Geotechnics, temporary works, traffic and utility diversions, systems integration",
       "Economic benefits to society, such as time savings, and public funding"
      ],
      [
       "Manufacturing",
       "Garment and textile factories, semiconductor fabs, food plants",
       "Process layout, utilities, clean or controlled environments, buyer compliance",
       "Production capacity, time to market, product quality"
      ],
      [
       "Energy",
       "Gas-fired and solar plants, substations, offshore wind",
       "Grid connection, heavy lifts, equipment lead times, performance tests",
       "Tariff or power purchase terms, availability, fuel supply"
      ],
      [
       "Process plant",
       "Effluent treatment, LNG terminals, refineries, chemical plants",
       "Process safety, hazardous areas, complex commissioning",
       "Throughput, regulatory compliance, safety integrity"
      ]
     ]
    },
    {
     "type": "text",
     "text": "A **stage gate** is a planned decision point between life-cycle phases where the owner decides whether to proceed, recycle the phase, put the project on hold or stop it. Each gate has defined entry deliverables, for example a feasibility report, an estimate of a stated maturity, a risk register and an updated business case, and a named decision-maker. The value of a gate lies in the **option to stop**: money spent before the gate buys information, and the gate is where that information is used. Gates that only ever say yes are rubber stamps; they give boards false comfort and teams no reason to surface bad news."
    },
    {
     "type": "keypoints",
     "title": "What a good gate review checks",
     "items": [
      "Is the need still valid and still aligned with strategy?",
      "Are the gate deliverables complete and at the agreed level of maturity?",
      "Have the estimate and schedule been independently challenged?",
      "Are the main risks understood, owned and allowed for?",
      "Is funding secured for the next phase, and is the plan for that phase credible?",
      "Is the decision recorded, with any conditions, owners and dates?"
     ]
    },
    {
     "type": "sequence",
     "title": "How a stage-gate decision is made",
     "actors": [
      "Project team",
      "Independent reviewer",
      "Sponsor",
      "Investment committee"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Gate pack: estimate, risks, case"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Findings and conditions",
       "reply": true
      },
      {
       "from": 0,
       "to": 0,
       "label": "Close findings, update the pack"
      },
      {
       "from": 0,
       "to": 2,
       "label": "Recommendation with evidence"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Endorsed pack and review report"
      },
      {
       "from": 3,
       "to": 2,
       "label": "Go, hold, recycle or stop",
       "note": "Recorded with conditions",
       "reply": true
      },
      {
       "from": 2,
       "to": 0,
       "label": "Next-phase funding released",
       "reply": true
      }
     ],
     "caption": "The independent challenge comes before the sponsor endorses the pack, and stop or recycle are real outcomes. Money for the next phase is released only after the decision and its conditions are recorded."
    },
    {
     "type": "text",
     "text": "**Front-end loading** means investing effort early, in definition, design basis, site investigation, permits and execution planning, before committing to full-scale execution. The logic is simple: the ability to influence the outcome is highest at the start, when only a small share of the budget has been spent, and it falls steeply once contracts are signed and construction begins. A geotechnical investigation that costs a tiny fraction of the foundations can avoid redesigning pile caps after the piling rigs have arrived. Owners who rush the front end to start construction sooner often finish later, because unresolved scope and design questions surface during execution, when they are most expensive to fix."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Influence falls as spending rises",
     "labels": [
      "Identify",
      "Select",
      "Define",
      "Execute",
      "Commission"
     ],
     "series": [
      {
       "name": "Ability to influence outcome",
       "values": [
        100,
        85,
        60,
        20,
        5
       ]
      },
      {
       "name": "Cumulative spend",
       "values": [
        1,
        3,
        8,
        90,
        100
       ]
      }
     ],
     "unit": "%",
     "yLabel": "% of maximum",
     "caption": "Illustrative shape, not data from a real project: most of the ability to shape cost, carbon and performance is used before execution, while most of the money is spent during it. That gap is the case for front-end loading."
    },
    {
     "type": "compare",
     "title": "Rushed front end vs well-loaded front end",
     "columns": [
      {
       "title": "Rushed front end",
       "items": [
        "Construction starts with design 'to follow'",
        "Site investigation skipped or minimal",
        "Estimate based on a rough benchmark rate",
        "Operations staff not consulted on layouts",
        "Changes and claims dominate the execution phase"
       ]
      },
      {
       "title": "Well-loaded front end",
       "items": [
        "Design basis frozen before major contracts are signed",
        "Ground, utilities and access investigated",
        "Estimate built on defined quantities and assessed risk",
        "Operators review layouts and maintenance access",
        "Execution effort goes into productivity and safety"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Carbon and contractors follow the same logic",
     "text": "Whole-life carbon behaves like cost: carbon management guidance such as **PAS 2080:2023** stresses that the largest reductions come from early choices, such as questioning the need, reusing existing assets or building less, long before materials are bought. Buildability knowledge is also most valuable early, which is why many owners now use **early contractor involvement**, often under a two-stage arrangement, so that a contractor helps shape the design and plan before the price is fixed."
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "A megaproject's front end",
     "text": "Bangladesh's **Padma Multipurpose Bridge**, which opened to road traffic in 2022 and carries both road and rail, shows how much of a megaproject happens before construction: studies of a very large and mobile river, decisions on alignment and river training, funding arrangements that changed during the front end, and land acquisition and resettlement. For any project of this kind, the quality of the front-end work largely determines how predictable execution can be."
    },
    {
     "type": "scenario",
     "title": "Skip the front end?",
     "situation": "You are the owner's project manager for a new dyeing and finishing unit at a garment group's site in Gazipur. A major buyer has signalled larger orders from next year. The managing director wants piling to start next month using the layout of a similar plant the group built elsewhere, and says the soil report and utility capacity study can be done 'in parallel'. The structural consultant warns that part of the site is filled land. What should you do FIRST?",
     "options": [
      {
       "text": "Mobilise the piling contractor as instructed and ask the consultant to adjust the pile design once the soil report arrives.",
       "feedback": "Weak. Piles designed before ground data is available may have the wrong length or capacity, and on filled land the risk is high. Redesign after rigs are mobilised is slow and expensive, and piles already driven cannot be undone.",
       "best": false
      },
      {
       "text": "Present the managing director with a short fast-track front-end plan: commission the soil investigation and utility check now, show the cost and delay risk of starting without them, and propose early works that do not depend on the results.",
       "feedback": "Best. This respects the commercial urgency while applying front-end loading logic. A ground investigation takes weeks, not months, and protects the most irreversible work. Site clearance, boundary walls, temporary power and access roads can start meanwhile, so the decision-maker gets speed and evidence.",
       "best": true
      },
      {
       "text": "Refuse to proceed until a full feasibility study, FEED and detailed design are complete.",
       "feedback": "Weak. The buyer's demand is a real business driver, and a proportionate, tailored front end is better than a rigid one. Refusing outright also removes you from the conversation where you could shape the decision.",
       "best": false
      },
      {
       "text": "Reuse the other plant's pile design but add a generous margin to pile lengths as a safety factor.",
       "feedback": "Weak. A margin is a guess, not engineering. It may still be wrong for filled ground, wastes money if it is too conservative, and gives no information about negative skin friction or settlement.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think of a project you have worked on. Where were the stage gates, who made the decision at each one, and was there ever a real possibility of stopping? What front-end work, if it had been done earlier, would have saved the most money or time?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Capital project",
       "def": "A project that creates or substantially upgrades a long-lived physical asset, such as a plant, building or piece of infrastructure, funded from capital rather than operating budgets."
      },
      {
       "term": "Project life cycle",
       "def": "The sequence of phases a project passes through from identifying the need to handing over the finished asset, typically identify, select, define, execute and commission."
      },
      {
       "term": "Asset life cycle",
       "def": "The full life of a physical asset from concept through design, construction, operation, maintenance and renewal to decommissioning; the project is only its first part."
      },
      {
       "term": "Stage gate",
       "def": "A planned decision point at the end of a life-cycle phase where a named authority reviews defined deliverables and decides to proceed, recycle, hold or stop."
      },
      {
       "term": "Front-end loading",
       "def": "Deliberately investing effort in definition, design basis, investigations and execution planning before sanctioning execution, when influence over outcomes is highest and changes are cheapest."
      },
      {
       "term": "Owner's engineer",
       "def": "An engineering consultant appointed by the owner to advise on technical matters, prepare or review designs and monitor contractors on the owner's behalf."
      },
      {
       "term": "O&M operator",
       "def": "The organisation, in-house or contracted, that will operate and maintain the asset after handover and should influence its design and commissioning."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Judge project decisions on whole-life cost, carbon and performance: the owner pays for the asset life cycle, not only the project.",
      "Each party is paid for different things and carries different risks, so owner and contractor priorities must be actively aligned.",
      "A stage gate is worth having only if stop, hold and recycle are real outcomes, decided on defined deliverables by a named decision-maker.",
      "Front-end loading spends a little early, when influence is highest, to avoid expensive change during execution."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A hospital owner chooses chillers with a higher purchase price but much lower energy and maintenance costs over 25 years. Which view is the owner applying?",
       "options": [
        "The project life cycle, because chillers are bought during execution",
        "The procurement cycle of the mechanical package",
        "The asset life cycle, judging whole-life cost and performance",
        "The contractor's view, which ends at handover"
       ],
       "answer": 2,
       "explain": "Judging a choice on running and maintenance costs over decades is an asset life cycle view. The project life cycle and contractor view both stop at handover and would favour the lower purchase price."
      },
      {
       "q": "What gives a stage gate its real value to an owner?",
       "options": [
        "The genuine option to stop, hold or recycle based on new information",
        "A formal occasion to recognise the team's work at the end of each phase",
        "The chance to transfer all remaining risk to the contractor",
        "The requirement to publish the budget to all bidders"
       ],
       "answer": 0,
       "explain": "A gate is valuable because information bought in the phase can change the decision. Celebrations, risk transfer or publishing budgets are not the purpose of a gate."
      },
      {
       "q": "Why is front-end loading usually worth its extra early cost?",
       "options": [
        "Because early studies are normally paid for by contractors",
        "Because regulators require FEED for every building",
        "Because it guarantees that no changes occur in execution",
        "Because influence is highest and changes cheapest early on"
       ],
       "answer": 3,
       "explain": "Early definition is cheap relative to the value it protects, because changes made before contracts and construction cost far less. It reduces, but never guarantees against, later change."
      },
      {
       "q": "On an EPC-delivered substation, who normally prepares the detailed design?",
       "options": [
        "The owner's operations team",
        "The EPC contractor or its design subconsultant",
        "The lender's technical adviser acting for the banks",
        "The O&M operator after handover"
       ],
       "answer": 1,
       "explain": "Under EPC delivery the contractor takes on engineering, procurement and construction, so detailed design sits with the contractor or its designers. The owner and its advisers review rather than produce it."
      },
      {
       "q": "Which party is best placed to advise on maintenance access to transformers and switchgear during design?",
       "options": [
        "The piling subcontractor",
        "The lender's legal counsel",
        "The future O&M operator",
        "The architect's visualisation team"
       ],
       "answer": 2,
       "explain": "The people who will maintain the equipment know what access, lifting and isolation they need. Bringing the operator in early is a core front-end loading practice."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l2",
   "title": "Feasibility Studies & Options Analysis",
   "subtitle": "Testing whether a project can and should be done, and comparing real alternatives including doing nothing",
   "minutes": 35,
   "objectives": [
    "Explain the purpose and depth of pre-feasibility and feasibility studies",
    "Assess a project across technical, market, economic, environmental, social and legal dimensions",
    "Run a structured options analysis with an honest do-nothing or do-minimum baseline",
    "Apply practical site selection criteria to an engineering facility"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A feasibility study answers two questions that are easy to confuse: **can** this project be done, and **should** it be done? A design can be technically excellent and still fail because demand is too low, the tariff does not cover costs, the land cannot be acquired or a permit will never be granted. A good study is therefore multidisciplinary and candid. Its job is to find the reasons the project might not work while it is still cheap to change direction, not to dress up a decision that has already been made."
    },
    {
     "type": "text",
     "text": "Studies are staged so that effort grows with confidence. An **identification note** frames the need and a rough range of costs. A **pre-feasibility study** screens a long list of options and eliminates those with fatal flaws, using desk data, benchmarks and reconnaissance visits. A **feasibility study** develops one to three short-listed options in enough depth, with site investigations, preliminary layouts, demand studies, cost estimates and environmental and social screening, to support an investment decision or to raise finance. Lenders often ask for a bankable feasibility study, meaning one robust enough for their technical adviser to rely on."
    },
    {
     "type": "table",
     "title": "The dimensions of feasibility",
     "head": [
      "Dimension",
      "Key question",
      "Typical evidence",
      "Red flag"
     ],
     "rows": [
      [
       "Technical",
       "Can it be designed, built and operated with proven technology on this site?",
       "Surveys, geotechnical data, preliminary design, technology references",
       "Unproven process, poor ground, no route for heavy equipment"
      ],
      [
       "Market and demand",
       "Will there be enough demand, throughput or users?",
       "Demand forecasts, buyer commitments, traffic counts, offtake agreements",
       "Forecasts resting on optimistic growth with no evidence"
      ],
      [
       "Economic and financial",
       "Do benefits exceed costs, and can the owner fund it?",
       "Capital and operating cost estimates, NPV, IRR, funding plan",
       "Positive only under the most favourable assumptions"
      ],
      [
       "Environmental",
       "Can impacts be avoided, reduced or managed acceptably?",
       "Screening, baseline surveys, climate-risk and whole-life carbon screening, initial impact assessment (developed in Protect)",
       "Wetland, protected habitat or flood-prone land in the footprint; flood levels that ignore climate projections"
      ],
      [
       "Social",
       "Are affected people, land and livelihoods respected?",
       "Land records, stakeholder mapping, resettlement screening",
       "Large involuntary resettlement or strong community opposition"
      ],
      [
       "Legal and regulatory",
       "Can permits, land rights and approvals be obtained in time?",
       "Permit register, zoning checks, legal opinions",
       "Disputed land title or a permit path longer than the schedule"
      ]
     ]
    },
    {
     "type": "compare",
     "title": "Pre-feasibility vs feasibility",
     "columns": [
      {
       "title": "Pre-feasibility study",
       "items": [
        "Screens a long list of options",
        "Uses desk data, reconnaissance visits and benchmarks",
        "Gives cost estimates as broad ranges",
        "Identifies fatal flaws and data gaps",
        "Recommends which options deserve further study"
       ]
      },
      {
       "title": "Feasibility study",
       "items": [
        "Develops one to three short-listed options",
        "Uses site surveys, investigations and preliminary design",
        "Gives estimates with defined scope and contingency",
        "Quantifies risks, impacts and benefits",
        "Recommends a preferred option for the investment decision"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "Options analysis starts with the **need**, not the solution. If a textile mill's need is 'reliable steam at lower cost', the long list might include repairing the existing boilers, a new gas-fired boiler, a biomass boiler, waste-heat recovery from stenters and hot effluent, buying steam from a neighbouring plant, or cutting steam demand through process changes. Framing the need as 'build a new boiler house' would have silently removed half of those choices. Every options analysis must include a **do-nothing** (or do-minimum) option as the baseline: it shows what happens without new investment and is the reference against which the benefits of every other option are measured."
    },
    {
     "type": "tree",
     "title": "A long list built from the need, not the solution",
     "root": {
      "label": "Need: reliable steam at lower cost",
      "children": [
       {
        "label": "Do-minimum",
        "text": "Repair existing boilers (the baseline)"
       },
       {
        "label": "Reduce demand",
        "children": [
         {
          "label": "Process changes",
          "text": "Insulation, condensate return, recipe changes"
         }
        ]
       },
       {
        "label": "Recover heat",
        "children": [
         {
          "label": "Hot effluent recovery"
         },
         {
          "label": "Stenter exhaust recovery"
         }
        ]
       },
       {
        "label": "Generate new",
        "children": [
         {
          "label": "Gas-fired boiler"
         },
         {
          "label": "Biomass boiler"
         },
         {
          "label": "Electric or heat pump",
          "text": "For lower-temperature duties; check grid capacity"
         }
        ]
       },
       {
        "label": "Buy",
        "children": [
         {
          "label": "Steam from a neighbour"
         }
        ]
       }
      ]
     },
     "caption": "Stating the need as an outcome opens up whole families of options, with do-minimum kept as the baseline. Each branch is screened for fatal flaws before the short list is developed in depth."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Do-nothing is rarely free",
     "text": "Doing nothing usually has costs: rising maintenance on an ageing transformer, penalties or loss of buyer certification when an effluent treatment plant fails discharge limits, lost production from frequent breakdowns, or growing safety risk in a deteriorating structure. Cost the do-nothing case honestly. If it is understated, every alternative looks better than it really is; if it is ignored, the analysis has no baseline at all."
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Carbon and climate belong in the options appraisal",
     "text": "Owners, lenders and regulators increasingly expect each short-listed option to show **whole-life carbon** alongside whole-life cost: embodied carbon from materials and construction (EN 15978 stages A1 to A5), carbon in use (stage B) and at end of life (stage C). The biggest savings come from options-stage choices such as reuse, building less or a different technology. Test every option against climate projections as well: a design flood level based only on past records may be too low for a 40-year asset."
    },
    {
     "type": "steps",
     "title": "Running an options analysis",
     "items": [
      {
       "title": "Define the need and objectives",
       "text": "State the problem in outcome terms, with measurable objectives and constraints such as a budget ceiling, a completion date and compliance requirements."
      },
      {
       "title": "Generate a long list",
       "text": "Include different technologies, locations, scales, phasing and non-build options. Involve operations, engineering and finance so the list is not limited to one discipline's preferences."
      },
      {
       "title": "Screen for fatal flaws",
       "text": "Remove options that fail a mandatory criterion, such as unproven technology, no viable site, an unlawful discharge or an unaffordable capital cost. Record why each was dropped."
      },
      {
       "title": "Assess the short list",
       "text": "Develop the remaining options far enough to compare capital and operating cost, NPV, whole-life carbon, risks, schedule, environmental and social effects and operability."
      },
      {
       "title": "Compare and score",
       "text": "Use discounted cash flow for the effects that can be valued in money and transparent multi-criteria scoring for the rest. Test whether the ranking changes when the weights change."
      },
      {
       "title": "Recommend and record",
       "text": "Recommend a preferred option with the reasons, the main uncertainties and what must be true for it to succeed, and keep the audit trail for the gate review."
      }
     ]
    },
    {
     "type": "template",
     "title": "Options appraisal matrix",
     "purpose": "Compare short-listed options side by side, including the do-nothing baseline, so that the recommendation and its reasons are visible to gate reviewers.",
     "columns": [
      "Option",
      "Description",
      "Capex / annual opex (relative)",
      "NPV vs do-nothing",
      "Main risks",
      "Non-financial score (out of 100)",
      "Status"
     ],
     "example": [
      [
       "0 Do-minimum",
       "Repair the existing physico-chemical ETP and increase chemical dosing",
       "Low / high",
       "Baseline",
       "Discharge limits still exceeded at peak load; failed buyer audits",
       "35",
       "Retained as baseline"
      ],
      [
       "2 New biological ETP",
       "Equalisation, biological treatment, tertiary filtration and sludge dewatering",
       "Medium / medium",
       "Positive",
       "Space on site, start-up of the biology, power interruptions",
       "78",
       "Recommended for feasibility"
      ]
     ],
     "rows": 6
    },
    {
     "type": "checklist",
     "title": "Site selection checklist for an industrial or energy facility",
     "items": [
      "Land: clear title, enough area for future expansion, no unresolved acquisition or encroachment",
      "Flood and drainage: floor and equipment levels above an agreed design flood level, with a drainage outfall",
      "Ground: geotechnical conditions known well enough to choose a foundation type, including filled or soft ground",
      "Access: road, river or rail access for heavy loads such as transformers, turbines and boilers, including bridges and turning radii",
      "Utilities: capacity and connection route for power, gas, water and telecoms, confirmed in writing by the utility where possible",
      "Effluent and waste: a lawful discharge point or treatment route, and space for waste storage",
      "Neighbours: distance from homes, schools and sensitive sites, and the noise, dust and traffic implications",
      "Permits and zoning: land-use classification and approvals required, with realistic timelines",
      "Labour and logistics: availability of skilled workers, accommodation and material supply routes"
     ]
    },
    {
     "type": "case",
     "title": "Choosing an effluent solution for a denim washing plant",
     "context": "A hypothetical denim washing and dyeing plant near Narayanganj has an ageing physico-chemical effluent treatment plant that struggles at peak production. A major international buyer has warned that its next environmental audit must show consistent compliance with discharge limits, and the plant wants to expand washing capacity by about a third within two years. The owner's engineer has prepared a long list: do-minimum (repairs and extra chemical dosing), a new biological ETP on the existing site, a biological ETP with partial water recycling, connection to a planned central ETP for the industrial area, and zero liquid discharge. Land inside the factory boundary is tight, grid power has occasional interruptions, and the central ETP has no confirmed completion date. All figures in the study are illustrative.",
     "questions": [
      "Which options would you screen out at pre-feasibility, and on what grounds?",
      "How should the uncertain completion date of the central ETP be treated?",
      "Which non-financial criteria should be scored, and who should take part in the scoring?"
     ],
     "answer": "Zero liquid discharge may be screened out at this stage if its capital and energy costs are clearly beyond the owner's means and it is unproven at this scale, but the reason must be recorded, not assumed. The central ETP should not be relied on as the only solution while its completion date is unconfirmed; it can be kept as a future option, with the on-site design checked so that a later connection remains possible. Do-minimum is the baseline and must be costed honestly, including the commercial risk of losing the buyer. The likely short list is a new biological ETP with and without water recycling, compared on NPV, footprint, resilience to power interruptions (for example standby generation for aeration), sludge handling, ease of operation by the plant's staff and capacity for the planned expansion. Operations, environment and compliance staff, finance and the owner's engineer should all score, and the ranking should be tested against changes in the weights."
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "How the effluent options might compare",
     "labels": [
      "Do-minimum",
      "Biological ETP",
      "Bio ETP + recycling",
      "Zero liquid discharge"
     ],
     "series": [
      {
       "name": "Capital cost",
       "values": [
        80,
        600,
        780,
        1900
       ]
      },
      {
       "name": "PV of running cost and compliance risk",
       "values": [
        1250,
        520,
        430,
        700
       ]
      }
     ],
     "yLabel": "USD thousand, present value",
     "caption": "Illustrative figures for the hypothetical denim plant: do-minimum is cheapest to build but carries the highest running cost and compliance risk, and zero liquid discharge fails on capital cost. The two biological options are close, so both go to feasibility."
    },
    {
     "type": "scenario",
     "title": "The feasibility study that must say yes",
     "situation": "You lead a feasibility study for a hypothetical 50 MW gas-fired peaking plant. The draft results show a positive NPV only if gas is supplied at the full contracted volume every year; with the kind of supply curtailment the region has experienced, the NPV turns negative. The director who championed the project asks you to present only the full-supply case to the board because 'curtailment is temporary'. What should you do FIRST?",
     "options": [
      {
       "text": "Present only the full-supply case as requested, since the director owns the recommendation.",
       "feedback": "Weak. It hides a material risk from the people taking the decision. Surfacing exactly this kind of finding is the purpose of a feasibility study, and suppressing it compromises your professional integrity.",
       "best": false
      },
      {
       "text": "Rework the analysis with a lower discount rate so that the curtailed case also shows a positive NPV.",
       "feedback": "Weak. Changing the discount rate to reach a desired answer is misrepresentation. The rate should reflect the cost of capital and risk, not the conclusion someone wants.",
       "best": false
      },
      {
       "text": "Discuss the finding with the director first, then present both cases with the gas-availability switching point and mitigation options such as dual-fuel capability.",
       "feedback": "Best. You respect the director by raising it privately first, keep the board fully informed, and turn a problem into a decision with options. The board can then judge whether mitigation makes the project worthwhile.",
       "best": true
      },
      {
       "text": "Stop the study and recommend cancelling the project immediately.",
       "feedback": "Weak. It is premature: mitigations may exist and the decision belongs to the board, which needs balanced information rather than a unilateral verdict.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick a project in your organisation that is still at idea stage. Write its need as an outcome rather than a solution, then list at least five options including do-nothing. Which option would have been overlooked if the need had been framed as a solution?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Pre-feasibility study",
       "def": "An early, lower-cost study that screens a long list of options using desk data and limited site work, eliminating those with fatal flaws and selecting a short list for detailed study."
      },
      {
       "term": "Feasibility study",
       "def": "A multidisciplinary study that develops short-listed options in enough technical, market, economic, environmental, social and legal depth to support an investment decision or financing."
      },
      {
       "term": "Options analysis",
       "def": "The structured generation, screening and comparison of alternative ways to meet a defined need, leading to a recommended preferred option with recorded reasons."
      },
      {
       "term": "Do-nothing option",
       "def": "The baseline option of making no new investment, or only the minimum needed to keep operating, against which the costs and benefits of all other options are measured."
      },
      {
       "term": "Fatal flaw",
       "def": "A characteristic that makes an option unacceptable regardless of its other merits, such as an unobtainable permit, unproven technology or unaffordable cost, used to screen options early."
      },
      {
       "term": "Multi-criteria analysis",
       "def": "A transparent method of scoring options against weighted financial and non-financial criteria, used alongside discounted cash flow when not all effects can be valued in money."
      },
      {
       "term": "Site selection study",
       "def": "An assessment of candidate locations against criteria such as land, flood risk, ground conditions, access, utilities, neighbours and permits to choose the most suitable site."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Feasibility asks whether a project can be done and whether it should be; its job is to find fatal flaws while change is cheap.",
      "Start from the need in outcome terms and include an honestly costed do-nothing or do-minimum baseline.",
      "Screen the long list for fatal flaws, record why options were dropped and develop only one to three in depth.",
      "Compare the short list on whole-life cost, whole-life carbon, risk and non-monetised effects, and test the ranking.",
      "Site factors such as land title, flood level, ground, heavy-load access and utilities can each stop a project."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A pre-feasibility study is primarily intended to:",
       "options": [
        "Produce construction drawings for the preferred option",
        "Screen a long list and remove options with fatal flaws",
        "Fix the contract price with the EPC contractor",
        "Obtain final environmental clearance from regulators"
       ],
       "answer": 1,
       "explain": "Pre-feasibility is a screening stage. Drawings, contract prices and final clearances come much later, after a preferred option has been developed."
      },
      {
       "q": "A university needs more teaching space. Which option list best reflects good options analysis?",
       "options": [
        "Three architectural designs for the same new tower on the same plot",
        "A new tower with three alternative facade materials",
        "Three contractors' prices for an identical new tower",
        "Do-minimum, timetabling, refurbishment, a new block or leasing"
       ],
       "answer": 3,
       "explain": "Good options analysis starts from the need and includes genuinely different solutions, including non-build and do-minimum options. The other lists are variations of one predetermined solution."
      },
      {
       "q": "Why must a do-nothing option be costed honestly?",
       "options": [
        "It is the baseline against which every other option's benefits are measured",
        "Regulators always require the do-nothing option to be shown as the cheapest one",
        "Do-nothing is normally the option that boards and investment committees choose",
        "Lenders will only finance projects that beat do-nothing on capital cost alone"
       ],
       "answer": 0,
       "explain": "Benefits of each option are measured relative to the do-nothing baseline, so an understated baseline inflates every option. The other statements are not general rules."
      },
      {
       "q": "Which finding is most clearly a social feasibility red flag?",
       "options": [
        "The preferred boiler technology has few regional installations",
        "Demand forecasts rely on one buyer's verbal assurance",
        "Large-scale involuntary resettlement is needed for the site",
        "The discount rate has been set below the cost of capital"
       ],
       "answer": 2,
       "explain": "Involuntary resettlement directly affects people and livelihoods. The other findings are technical, market and financial red flags respectively."
      },
      {
       "q": "When candidate substation sites are compared, which item belongs in the site selection checklist rather than the tariff study?",
       "options": [
        "The forecast electricity tariff in the tenth year of operation",
        "Transformer delivery access and the design flood level",
        "The parent company's dividend policy",
        "The exchange rate assumed for imported spares"
       ],
       "answer": 1,
       "explain": "Access for heavy loads and flood level are physical site criteria. Tariffs, dividends and exchange rates belong to the financial analysis."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l3",
   "title": "Time Value of Money: NPV, IRR, Payback & Benefit-Cost Ratio",
   "subtitle": "The investment arithmetic every engineering manager must be able to do by hand",
   "minutes": 40,
   "objectives": [
    "Explain discounting and choose a discount rate consistent with the cash flows",
    "Calculate NPV, IRR, simple and discounted payback and benefit-cost ratio from a cash flow table",
    "Interpret the measures together and recognise where each one can mislead"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A sum of money today is worth more than the same sum in five years, for three reasons: money available now can be invested to earn a return, inflation erodes purchasing power, and future cash is uncertain. **Discounting** converts future cash flows into their equivalent value today, so a project's costs, which come mostly at the start, can be compared fairly with its benefits, which arrive over many years. Engineering investments are especially sensitive to discounting because their capital outlay is concentrated at the front and their benefits are long and spread out."
    },
    {
     "type": "text",
     "text": "The **discount rate** carries much of the decision. A private owner usually starts from its weighted average cost of capital, the blended cost of its debt and equity, often adds a premium for project risk, and may set a minimum acceptable return called a **hurdle rate**. Public bodies use a social discount rate set by the finance ministry or funding agency for economic appraisal. Be consistent: if cash flows are in **nominal** terms (including expected inflation), use a nominal rate; if they are in **real** terms (constant prices), use a real rate. Mixing the two is one of the most common errors in engineering business cases. When inflation is volatile, as many economies experienced from 2021 onwards, state the inflation assumption explicitly and test it, because nominal and real figures drift apart quickly."
    },
    {
     "type": "formula",
     "title": "Discounting and net present value",
     "items": [
      {
       "name": "Discount factor",
       "expr": "DF_t = 1 / (1 + r)^t",
       "meaning": "Multiplier that converts a cash flow at the end of year t into today's value at discount rate r (as a decimal). At 10%, DF_3 = 1 / 1.1^3 = 0.7513."
      },
      {
       "name": "Present value",
       "expr": "PV_t = CF_t / (1 + r)^t = CF_t x DF_t",
       "meaning": "Today's value of a single cash flow CF_t received at the end of year t."
      },
      {
       "name": "Net present value",
       "expr": "NPV = sum of CF_t / (1 + r)^t, for t = 0 to n",
       "meaning": "Sum of all discounted cash flows, with the initial investment entered as a negative CF_0. NPV > 0 means the project earns more than the discount rate and adds value."
      },
      {
       "name": "Present value of a level annuity",
       "expr": "PV = A x [1 - (1 + r)^(-n)] / r",
       "meaning": "Shortcut for a constant amount A received at the end of each year for n years, useful for level savings, tariffs or availability payments."
      },
      {
       "name": "Real and nominal rates",
       "expr": "(1 + nominal) = (1 + real) x (1 + inflation)",
       "meaning": "Converts between rates. Real is roughly nominal minus inflation when rates are small. Use nominal rates with nominal cash flows and real rates with real cash flows."
      }
     ]
    },
    {
     "type": "formula",
     "title": "Investment decision measures",
     "items": [
      {
       "name": "Internal rate of return",
       "expr": "IRR = the rate r at which sum of CF_t / (1 + r)^t = 0",
       "meaning": "The discount rate that makes NPV exactly zero. For conventional cash flows, accept if IRR exceeds the hurdle rate. Found by iteration or a spreadsheet function."
      },
      {
       "name": "IRR by linear interpolation",
       "expr": "IRR ≈ r1 + NPV1 x (r2 - r1) / (NPV1 - NPV2)",
       "meaning": "Hand estimate between a rate r1 giving a positive NPV1 and a higher rate r2 giving a negative NPV2. A narrow bracket, such as one percentage point, gives a close answer."
      },
      {
       "name": "Simple payback",
       "expr": "Payback = Y + U / CF_(Y+1)",
       "meaning": "Y is the last whole year at whose end cumulative cash flow is still negative, U is the unrecovered amount at the end of year Y, and CF_(Y+1) is the next year's cash flow. Ignores time value and all cash after payback."
      },
      {
       "name": "Discounted payback",
       "expr": "Discounted payback = Y + U_d / PV_(Y+1)",
       "meaning": "The same method applied to discounted cash flows: Y is the last year with negative cumulative PV, U_d the unrecovered PV and PV_(Y+1) the next year's present value. Always longer than simple payback when r > 0."
      },
      {
       "name": "Benefit-cost ratio",
       "expr": "BCR = PV of benefits / PV of costs",
       "meaning": "Present value returned per unit of present-value cost. BCR > 1 corresponds to NPV > 0 when the same cash flows and discount rate are used."
      }
     ]
    },
    {
     "type": "text",
     "text": "**Worked example.** A hypothetical dyeing and finishing plant in Narayanganj is considering a waste-heat recovery system that captures heat from hot effluent and stenter exhaust to preheat process water, reducing gas use in its boilers. The installed cost is **1,000** (all figures in USD thousand and purely illustrative), paid at the start, year 0. Net savings after extra maintenance and pumping power are forecast at **250** in year 1 while the system is tuned, **300** in year 2, **350** in years 3 and 4, and **300** in year 5 as heat-exchanger fouling increases. The analysis period is five years with no residual value, and the company's discount rate is **10%**."
    },
    {
     "type": "table",
     "title": "Discounted cash flow table at r = 10% (USD thousand, illustrative)",
     "head": [
      "Year t",
      "Net cash flow CF_t",
      "Discount factor 1/1.1^t",
      "Present value",
      "Cumulative cash flow",
      "Cumulative PV"
     ],
     "rows": [
      [
       "0",
       "-1,000",
       "1.0000",
       "-1,000.00",
       "-1,000",
       "-1,000.00"
      ],
      [
       "1",
       "250",
       "0.9091",
       "227.27",
       "-750",
       "-772.73"
      ],
      [
       "2",
       "300",
       "0.8264",
       "247.93",
       "-450",
       "-524.80"
      ],
      [
       "3",
       "350",
       "0.7513",
       "262.96",
       "-100",
       "-261.84"
      ],
      [
       "4",
       "350",
       "0.6830",
       "239.05",
       "250",
       "-22.79"
      ],
      [
       "5",
       "300",
       "0.6209",
       "186.28",
       "550",
       "163.49"
      ]
     ]
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Cumulative cash flow and cumulative present value",
     "labels": [
      "Year 0",
      "Year 1",
      "Year 2",
      "Year 3",
      "Year 4",
      "Year 5"
     ],
     "series": [
      {
       "name": "Cumulative cash flow",
       "values": [
        -1000,
        -750,
        -450,
        -100,
        250,
        550
       ]
      },
      {
       "name": "Cumulative PV at 10%",
       "values": [
        -1000,
        -772.7,
        -524.8,
        -261.8,
        -22.8,
        163.5
       ]
      }
     ],
     "yLabel": "USD thousand",
     "caption": "Illustrative figures from the table above. The undiscounted line crosses zero during year 4 (payback 3.29 years); the discounted line crosses only in year 5 (discounted payback 4.12 years), ending at the NPV of +163.5."
    },
    {
     "type": "steps",
     "title": "Reading the five measures from the table",
     "items": [
      {
       "title": "NPV",
       "text": "Add the present values: -1,000.00 + 227.27 + 247.93 + 262.96 + 239.05 + 186.28 = **+163.49**, which is also the final cumulative PV. The project creates about 163 of value today over and above a 10% return, so it passes the NPV test. (Present values are calculated with unrounded discount factors.)"
      },
      {
       "title": "IRR",
       "text": "Try higher rates. At 15% the NPV is about +23.6; at 16% it is about -1.2. Interpolating: IRR ≈ 15% + 23.6 x (16% - 15%) / (23.6 - (-1.2)) = 15% + 0.95% = **about 15.95%**, well above the 10% hurdle. A wide bracket of 15% to 20% (NPV about -91.4 at 20%) would give about 16.03%, slightly overstated, which is why a narrow bracket is better."
      },
      {
       "title": "Simple payback",
       "text": "Cumulative cash flow is -100 at the end of year 3 and turns positive during year 4, when 350 arrives. Payback = 3 + 100 / 350 = **3.29 years**."
      },
      {
       "title": "Discounted payback",
       "text": "Cumulative PV is -22.79 at the end of year 4, and year 5 contributes 186.28. Discounted payback = 4 + 22.79 / 186.28 = **4.12 years**, almost a year longer than simple payback because later savings are worth less today."
      },
      {
       "title": "Benefit-cost ratio",
       "text": "The only cost here is the initial investment, because operating costs are already netted off the savings. PV of benefits = 1,163.49 and PV of costs = 1,000, so BCR = 1,163.49 / 1,000 = **1.16**: each unit of capital returns 1.16 units in present-value terms."
      }
     ]
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "NPV profile of the waste-heat recovery project",
     "labels": [
      "0%",
      "5%",
      "10%",
      "15%",
      "20%",
      "25%"
     ],
     "series": [
      {
       "name": "NPV",
       "values": [
        550,
        335.6,
        163.5,
        23.6,
        -91.4,
        -187.1
       ]
      }
     ],
     "yLabel": "NPV, USD thousand",
     "caption": "Illustrative figures from the worked example: NPV falls as the discount rate rises and crosses zero just below 16%, which is the IRR. At the company's 10% rate the NPV is +163.5, and at 0% it is simply the undiscounted total of 550."
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "What the numbers say together",
     "text": "NPV says the investment creates value at the company's cost of capital. IRR says there is a margin of roughly six percentage points before the decision would flip. A discounted payback of just over four years in a five-year analysis warns that the case depends on the system still performing in year 5, so heat-exchanger fouling, maintenance and gas prices deserve sensitivity testing (see the next lesson). No single measure tells the whole story; investment committees should see all of them, with the assumptions behind them."
    },
    {
     "type": "table",
     "title": "Strengths and blind spots of each measure",
     "head": [
      "Measure",
      "Decision rule",
      "Strength",
      "Blind spot"
     ],
     "rows": [
      [
       "NPV",
       "Accept if NPV > 0; among mutually exclusive options choose the highest NPV",
       "Measures value created in money; additive across projects",
       "Depends heavily on the discount rate; silent on how much capital is tied up"
      ],
      [
       "IRR",
       "Accept if IRR > hurdle rate",
       "Intuitive percentage, easy to compare with the cost of capital",
       "Can rank mutually exclusive projects wrongly; multiple or no IRR with non-conventional cash flows"
      ],
      [
       "Simple payback",
       "Accept if within a maximum period",
       "Simple; a reasonable proxy for liquidity and exposure to change",
       "Ignores time value and all cash after payback"
      ],
      [
       "Discounted payback",
       "Accept if within a maximum period",
       "Adds time value to the payback idea",
       "Still ignores everything after the payback point"
      ],
      [
       "Benefit-cost ratio",
       "Accept if BCR > 1",
       "Useful for ranking under a fixed budget; common in public appraisal",
       "Changes with how items are classified as costs or negative benefits; ignores scale"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Traps that catch experienced engineers",
     "text": "**Non-conventional cash flows**: if a project has a large outflow late in life, such as decommissioning an offshore platform, a mid-life turbine overhaul or quarry restoration, the cash flow changes sign more than once and there may be two IRRs or none; rely on NPV. **Scale**: a small project can have a higher IRR but a much lower NPV than a large one; when options are mutually exclusive and capital is available, NPV is the better guide. **Classification**: treating operating costs as negative benefits rather than as costs changes the BCR, though not the NPV, so always state the convention. **Timing**: confirm whether cash flows fall at the start or end of each year. **Spreadsheets**: most spreadsheet NPV functions assume the first value in the range falls at the end of period 1, so enter the year-0 investment outside the function (NPV = CF_0 + NPV(rate, CF_1 to CF_n)), show the discount factor column explicitly and have a second person rebuild the headline figures by hand before any gate review. **Automated drafts**: when software or AI tools build a cash-flow model or extract figures from documents, treat the result as a draft, check every formula and input, and have a competent person sign off the numbers."
    },
    {
     "type": "scenario",
     "title": "Higher IRR or higher NPV?",
     "situation": "A hypothetical spinning mill can install either Option A, a rooftop solar system costing 500 (USD thousand) with an IRR of 19% and an NPV of 180 at its 10% discount rate, or Option B, a larger 1,400 system covering the whole roof and a carport structure, with an IRR of 15% and an NPV of 390. The roof can host only one design, the company has funds for either, and the risks are similar. The finance manager prefers A 'because it has the better return'. What should the project manager recommend?",
     "options": [
      {
       "text": "Option A, because its higher IRR shows it is the more profitable investment.",
       "feedback": "Weak. IRR ranks projects of different scale unreliably. A earns a higher percentage on a smaller sum, but B adds more than twice as much value in money.",
       "best": false
      },
      {
       "text": "Option B, because the options are mutually exclusive, capital is available and B adds more value; show the board both measures and explain the difference.",
       "feedback": "Best. When options are mutually exclusive and capital is not constrained, the higher NPV creates more value for the owner. Presenting both measures openly helps the finance manager and board understand why IRR alone misleads here.",
       "best": true
      },
      {
       "text": "Option A, because it will have the shorter payback and therefore less risk.",
       "feedback": "Weak. Payback has not been calculated, the risks are stated to be similar, and payback ignores the value created after recovery.",
       "best": false
      },
      {
       "text": "Neither option until both IRRs exceed 20%.",
       "feedback": "Weak. The 20% figure is arbitrary. Both options exceed the 10% cost of capital, so rejecting both destroys value.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Find the last investment proposal you saw, or prepare one for your capstone project. Rebuild its NPV by hand with a discount factor column. Were the cash flows real or nominal, and did the discount rate match? What happens to the decision if the discount rate rises by two percentage points?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Time value of money",
       "def": "The principle that money is worth more now than the same amount in the future, because of earning potential, inflation and risk; the basis of discounting."
      },
      {
       "term": "Discount rate",
       "def": "The annual rate used to convert future cash flows into present values, typically the owner's cost of capital or hurdle rate for financial appraisal, or a social discount rate for public economic appraisal."
      },
      {
       "term": "Net present value",
       "def": "The sum of all of a project's cash flows discounted to today at the chosen discount rate; a positive NPV means the project creates value above the required return."
      },
      {
       "term": "Internal rate of return",
       "def": "The discount rate at which a project's NPV equals zero; for conventional cash flows the project is acceptable when its IRR exceeds the hurdle rate."
      },
      {
       "term": "Payback period",
       "def": "The time needed for cumulative undiscounted cash inflows to recover the initial investment; simple to compute but ignores time value and cash after recovery."
      },
      {
       "term": "Discounted payback period",
       "def": "The time needed for cumulative discounted cash flows to recover the initial investment; always longer than simple payback when the discount rate is positive."
      },
      {
       "term": "Benefit-cost ratio",
       "def": "The present value of benefits divided by the present value of costs; a ratio above 1 indicates that benefits exceed costs at the chosen discount rate."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Discount future cash flows so front-loaded costs and long-tail benefits compare fairly; match nominal flows with nominal rates and real with real.",
      "NPV measures value created in money and is the primary rule, especially for mutually exclusive options and non-conventional cash flows.",
      "IRR, payback, discounted payback and BCR add views of margin, exposure and ranking, but each can mislead on its own.",
      "Show the discount factors, enter year 0 outside spreadsheet NPV functions and have someone rebuild headline figures by hand."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "At a discount rate of 8%, what is the present value of 1,000 received at the end of year 2?",
       "options": [
        "1,166.40",
        "925.93",
        "857.34",
        "840.00"
       ],
       "answer": 2,
       "explain": "PV = 1,000 / 1.08^2 = 1,000 / 1.1664 = 857.34. 925.93 discounts only one year, 1,166.40 compounds instead of discounting, and 840.00 deducts simple interest."
      },
      {
       "q": "A project costs 600 at year 0 and returns 200 a year for four years. What is its simple payback?",
       "options": [
        "2.5 years",
        "3.0 years",
        "3.5 years",
        "4.0 years"
       ],
       "answer": 1,
       "explain": "Cumulative cash flow reaches exactly zero at the end of year 3 (200 x 3 = 600), so payback is 3.0 years. The other values misread the cumulative position."
      },
      {
       "q": "NPV is +40 at 12% and -20 at 14%. Using linear interpolation, the IRR is approximately:",
       "options": [
        "12.7%",
        "13.0%",
        "13.5%",
        "13.3%"
       ],
       "answer": 3,
       "explain": "IRR ≈ 12% + 40 x (14% - 12%) / (40 - (-20)) = 12% + 80/60 % = 13.3%. The other values place the zero point in the wrong part of the bracket."
      },
      {
       "q": "Which situation most strongly suggests relying on NPV rather than IRR?",
       "options": [
        "A project with a large decommissioning outflow at the end of its life",
        "A project with one initial outflow followed by steady savings",
        "A project assessed in real rather than nominal terms",
        "A project whose payback period is shorter than three years"
       ],
       "answer": 0,
       "explain": "A late large outflow makes the cash flow change sign twice, which can produce multiple IRRs or none. The other situations do not undermine IRR in that way."
      },
      {
       "q": "Cash flows have been forecast in constant (today's) prices. Which discount rate should be used?",
       "options": [
        "The nominal cost of capital including expected inflation",
        "The expected inflation rate on its own",
        "A real discount rate that excludes inflation",
        "The interest rate on short-term bank deposits"
       ],
       "answer": 2,
       "explain": "Constant-price cash flows are real, so they must be discounted at a real rate. A nominal rate would double-count inflation and understate NPV."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l4",
   "title": "The Business Case & Investment Decision",
   "subtitle": "Turning feasibility evidence into a decision a board, a ministry or a lender can trust",
   "minutes": 35,
   "objectives": [
    "Structure a business case around strategic, economic, commercial, financial and management dimensions",
    "Use sensitivity analysis, switching values and scenarios to test the robustness of a case",
    "Compare funding routes and explain what each type of funder expects",
    "Recognise optimism bias and apply practical correctives"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A **business case** is the reasoned argument for an investment: why it is needed, which options were considered, why the preferred option offers the best value, whether it is affordable and fundable, and how it will be delivered. It is not a one-off document written to win approval. It matures in stages, typically a strategic outline at identification, an outline case after options analysis and a full case before the final investment decision, and it is revisited at each gate and at closeout, when the promised benefits are checked against what actually happened."
    },
    {
     "type": "timeline",
     "title": "How a business case matures",
     "items": [
      {
       "when": "Identify",
       "label": "Strategic outline case",
       "text": "Need, strategic fit, long list and a rough cost range"
      },
      {
       "when": "Select",
       "label": "Outline business case",
       "text": "Preferred option from the options analysis, with sensitivities"
      },
      {
       "when": "Define",
       "label": "Full business case",
       "text": "Firm estimate, procurement route and funding for the investment decision"
      },
      {
       "when": "Execute",
       "label": "Revalidated at each gate",
       "text": "Updated for cost, schedule and risk; stop if the value is lost"
      },
      {
       "when": "Operate",
       "label": "Benefits review",
       "text": "Actual benefits compared with those promised; lessons fed back"
      }
     ],
     "caption": "The same argument is refined at each stage rather than rewritten. It does not end at approval: it is revalidated during execution and checked against reality once the asset is operating."
    },
    {
     "type": "framework",
     "title": "The five dimensions of a business case",
     "items": [
      {
       "label": "S",
       "title": "Strategic",
       "text": "Why is it needed? The problem, the objectives, the fit with corporate, sector or national strategy and the consequences of not acting."
      },
      {
       "label": "E",
       "title": "Economic",
       "text": "Which option gives best value? Options including do-nothing compared with NPV, BCR and non-monetised effects, from society's viewpoint for public projects or the owner's for private ones."
      },
      {
       "label": "C",
       "title": "Commercial",
       "text": "Can it be procured and contracted? Supplier and contractor market, packaging, contract types and risk allocation (developed in Procure)."
      },
      {
       "label": "F",
       "title": "Financial",
       "text": "Is it affordable and fundable? Capital and operating budgets, cash flow by year, funding sources and the effect on the balance sheet or tariffs."
      },
      {
       "label": "M",
       "title": "Management",
       "text": "Can it be delivered? Governance, team, schedule, risk management, benefits realisation and the readiness of the operator."
      }
     ]
    },
    {
     "type": "text",
     "text": "Engineers often blur **economic** and **financial** appraisal. Financial appraisal looks at cash to and from the owner: tolls, tariffs, production margins, capital and operating costs. Economic appraisal, used for public infrastructure, looks at value to society: travel time savings and fewer accidents on an expressway, reduced flood damage behind an embankment, health benefits from clean water, including effects that never appear as cash. A metro line can have a negative financial NPV because fares do not cover its costs and still a strongly positive economic NPV because of time savings, reduced congestion and lower emissions. Both views are legitimate, but they answer different questions and must not be blended into one number. Many public appraisal frameworks now also value changes in greenhouse gas emissions, often using a carbon value set by the government or funder; use the official value where one exists and state it."
    },
    {
     "type": "text",
     "text": "Every business case rests on forecasts that will be wrong to some degree. **Sensitivity analysis** varies one input at a time, such as capital cost, savings, discount rate or start date, and records the effect on NPV. The **switching value** is the change in an input that would make NPV exactly zero; it tells decision-makers how much room for error the case has. **Scenario analysis** changes several related inputs together to describe coherent futures, such as a low-demand, high-gas-price world. Quantitative risk analysis with Monte Carlo simulation goes further and is developed in Protect."
    },
    {
     "type": "table",
     "title": "Sensitivity of the waste-heat recovery example (base NPV +163.5 at 10%, USD thousand, illustrative)",
     "head": [
      "Variable changed",
      "Change",
      "Resulting NPV",
      "Comment"
     ],
     "rows": [
      [
       "Capital cost",
       "+10%",
       "+63.5",
       "Still positive; the capital cost switching value is about +16%"
      ],
      [
       "Capital cost",
       "+20%",
       "-36.5",
       "Negative: an overrun of this size destroys the case"
      ],
      [
       "Annual savings",
       "-10%",
       "+47.1",
       "Savings switching value is about -14%: the most sensitive input"
      ],
      [
       "Annual savings",
       "-20%",
       "-69.2",
       "Negative: vendor performance guarantees matter"
      ],
      [
       "Discount rate",
       "12% instead of 10%",
       "+104.2",
       "Robust: the rate would have to exceed the IRR of about 16%"
      ],
      [
       "Start of savings",
       "Delayed by one year",
       "+57.7",
       "A commissioning delay costs well over half the NPV"
      ]
     ]
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "NPV under each sensitivity case",
     "labels": [
      "Base",
      "Capex +10%",
      "Capex +20%",
      "Savings -10%",
      "Savings -20%",
      "Rate 12%",
      "1-year delay"
     ],
     "series": [
      {
       "name": "NPV at 10% (USD thousand)",
       "values": [
        163.5,
        63.5,
        -36.5,
        47.1,
        -69.2,
        104.2,
        57.7
       ]
      }
     ],
     "yLabel": "USD thousand",
     "caption": "Illustrative figures from the table: bars below zero are the cases that destroy value. Savings and capital cost dominate, so vendor performance guarantees and price risk deserve the most management attention."
    },
    {
     "type": "compare",
     "title": "Sensitivity analysis vs scenario analysis",
     "columns": [
      {
       "title": "Sensitivity analysis",
       "items": [
        "Changes one variable at a time",
        "Shows which inputs drive the result",
        "Produces switching values and ranked sensitivities",
        "Quick to compute and easy to explain",
        "Can mislead when variables move together"
       ]
      },
      {
       "title": "Scenario analysis",
       "items": [
        "Changes several linked variables together",
        "Describes coherent, plausible futures",
        "Produces a small set of results such as low, base and high",
        "Needs judgement about how variables relate",
        "Better for strategic and funding conversations"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Optimism bias and how to correct it",
     "text": "Research on large infrastructure programmes in many countries has repeatedly found that, at the decision stage, capital costs and durations tend to be underestimated and demand or benefits overestimated. Two causes are usually distinguished: genuine cognitive **optimism bias**, and **strategic misrepresentation**, where promoters understate costs to win approval. Practical correctives include reference class forecasting (adjusting an estimate using the actual outcomes of a class of similar completed projects), explicit uplifts where funding guidance requires them, independent estimate reviews at gates, and asking 'what would have to be true?' of every key assumption."
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Price volatility and delay belong in the case",
     "text": "Since the early 2020s, prices and lead times for steel, cement, cable, transformers, switchgear and freight have swung sharply. A credible business case states which prices are fixed and when, how escalation is allowed for (for example a contract price-adjustment formula or an escalation allowance) and how long-lead equipment affects the date benefits start. Treat delay as a sensitivity in its own right: in the example above, one year of delay removes about two-thirds of the NPV."
    },
    {
     "type": "table",
     "title": "Funding routes for engineering projects",
     "head": [
      "Route",
      "Typical use",
      "What the funder expects",
      "Implications for the project manager"
     ],
     "rows": [
      [
       "Public budget",
       "Roads, bridges, hospitals and universities funded through the government's development programme",
       "Fit with national plans, value for money, compliance with public procurement rules",
       "Annual allocations can slow work; every decision is open to public audit"
      ],
      [
       "Public-private partnership",
       "Toll roads, power plants, ports or hospitals financed, built and often operated by a private party under a long-term contract",
       "A bankable revenue stream (tolls, availability payments, tariffs) and clear risk allocation",
       "Long negotiations; the lenders' technical adviser reviews design, schedule and contracts"
      ],
      [
       "Development finance",
       "Infrastructure and energy funded with multilateral or bilateral development banks or export credit agencies",
       "Strong environmental and social safeguards (such as the World Bank Environmental and Social Framework or the IFC Performance Standards; many commercial lenders apply the Equator Principles), procurement under the lender's rules, independent monitoring",
       "Safeguard compliance becomes a condition of disbursement; reporting is detailed and regular"
      ],
      [
       "Owner equity and corporate borrowing",
       "Factory expansions, utilities and process plant funded from the company's own resources",
       "A return above the hurdle rate, strategic fit, a manageable effect on cash flow and, increasingly, consistency with the company's climate targets and sustainability disclosures (for example under IFRS S1 and S2)",
       "Faster decisions but tight capital rationing; projects compete with other uses of cash"
      ],
      [
       "Non-recourse project finance",
       "Power plants and terminals where lenders are repaid only from the project's own cash flows",
       "Firm offtake contracts, fixed-price construction, completion support, conservative financial ratios",
       "Heavy due diligence and strong pressure for fixed-price, fixed-date contracts (see Procure)"
      ]
     ]
    },
    {
     "type": "template",
     "title": "Sensitivity and switching value table",
     "purpose": "Test how robust a business case is by recording the effect of each key variable on NPV and the change that would make NPV zero.",
     "columns": [
      "Variable",
      "Base value",
      "Low case",
      "High case",
      "NPV at low case",
      "NPV at high case",
      "Switching value"
     ],
     "example": [
      [
       "Annual energy savings",
       "250-350 per year (see cash flow)",
       "-20%",
       "+10%",
       "-69.2",
       "+279.8",
       "About -14% (NPV = 0)"
      ],
      [
       "Capital cost",
       "1,000",
       "-10%",
       "+20%",
       "+263.5",
       "-36.5",
       "About +16% (NPV = 0)"
      ]
     ],
     "rows": 6
    },
    {
     "type": "case",
     "title": "A solar park seeking development finance",
     "context": "A hypothetical developer plans a 100 MW solar park on low-lying agricultural land in northern Bangladesh, selling power to the national utility under a long-term purchase agreement. The draft business case shows an attractive equity return. A multilateral development bank is considering a loan and has appointed a technical adviser. The adviser's first comments are that the energy yield estimate uses a single year of irradiance data, the capital cost assumes module prices at a recent low point, the land plan does not address sharecroppers who farm the land, and there is no scenario for grid curtailment. Parties and figures are illustrative.",
     "questions": [
      "Which dimensions of the business case do the adviser's comments touch, and how serious is each?",
      "How would you restructure the sensitivity and scenario analysis?",
      "What will the lender's safeguard requirements mean for the project manager's plan?"
     ],
     "answer": "The comments touch the economic and financial dimensions (yield, capital cost and curtailment), the management and strategic dimensions (deliverability and land) and the commercial dimension through module procurement risk. The single year of irradiance data and the missing curtailment scenario go to the heart of revenue, so they need long-term irradiance datasets, a probabilistic yield estimate and a curtailment scenario based on the utility's grid data. Module price should be tested with sensitivities and a switching value, and the procurement plan should state when prices will be fixed. Sharecroppers depend on the land for their livelihoods even without formal title; development lenders' safeguards require them to be identified, consulted and compensated or supported, which affects the schedule, budget and stakeholder plan (developed in Protect and Integrate). The project manager should plan all of this as front-end work before financial close, not treat it as paperwork."
    },
    {
     "type": "scenario",
     "title": "Take out the downside?",
     "situation": "You are preparing the full business case for a hypothetical expressway interchange to be funded from the public budget. The economic NPV is positive in the base case, but the low-traffic scenario, based on recent counts that show slower growth than the original forecast, gives a BCR of 0.9. The sponsoring agency's director asks you to drop the low-traffic scenario from the paper going to the planning ministry because 'it will only confuse them'. What should you do FIRST?",
     "options": [
      {
       "text": "Remove the scenario but keep it in your own files in case questions are asked later.",
       "feedback": "Weak. Withholding material evidence from the decision-maker undermines the appraisal, and keeping a private copy does not make the paper honest.",
       "best": false
      },
      {
       "text": "Explain to the director why the scenario must stay, and propose presenting it clearly with the traffic-growth switching value and measures that could protect the benefits.",
       "feedback": "Best. You address the director's concern about clarity while keeping the evidence. A switching value and mitigation options make the downside understandable and actionable rather than confusing.",
       "best": true
      },
      {
       "text": "Replace the recent traffic counts with the original forecast so every scenario looks positive.",
       "feedback": "Weak. Replacing observed data with a more convenient forecast is falsification and would expose you and the agency to serious consequences.",
       "best": false
      },
      {
       "text": "Send the full analysis directly to the planning ministry without telling the director.",
       "feedback": "Weak as a first step. Bypassing the director damages trust and governance. Raise it with the director first, and escalate through proper channels only if the evidence is still being suppressed.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "For a business case you know, which single assumption has the smallest switching value? Who owns that assumption, and what evidence would make you more confident in it before the next gate?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Business case",
       "def": "The documented justification for an investment, setting out need, options, value for money, affordability, deliverability and expected benefits; developed in stages and revisited at each gate."
      },
      {
       "term": "Five-case model",
       "def": "A widely used business case structure that tests a proposal against strategic, economic, commercial, financial and management dimensions."
      },
      {
       "term": "Sensitivity analysis",
       "def": "Testing how a result such as NPV changes when one input is varied at a time, to identify the variables that matter most."
      },
      {
       "term": "Switching value",
       "def": "The change in a single input that would make NPV zero or reverse the preferred option; a direct measure of how much error a business case can tolerate."
      },
      {
       "term": "Scenario analysis",
       "def": "Assessing a project under a small number of internally consistent futures in which several related inputs change together, such as low demand combined with high fuel prices."
      },
      {
       "term": "Optimism bias",
       "def": "The systematic tendency to underestimate costs and durations and overestimate benefits at the decision stage, corrected by reference class forecasting, uplifts and independent review."
      },
      {
       "term": "Public-private partnership",
       "def": "A long-term contract in which a private party finances, builds and often operates a public asset or service, repaid through user charges or government payments, with risks shared by agreement."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "A business case is a living argument across five dimensions: strategic, economic, commercial, financial and management.",
      "Keep financial appraisal (cash to the owner) and economic appraisal (value to society) separate; they answer different questions.",
      "Switching values and scenarios show how much room for error a case has; present downsides openly rather than removing them.",
      "Counter optimism bias with reference class forecasting, independent review and explicit allowances for price volatility and delay.",
      "Each funding route brings its own expectations, from bankable revenue to environmental and social safeguards."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A business case section explains contractor market capacity, packaging and contract type. Which dimension is this?",
       "options": [
        "Strategic",
        "Management",
        "Financial",
        "Commercial"
       ],
       "answer": 3,
       "explain": "Procurement route, packaging and contract strategy belong to the commercial dimension. Financial covers affordability and funding, and management covers governance and delivery capability."
      },
      {
       "q": "NPV falls to zero if annual savings drop by 14%. This 14% is best described as:",
       "options": [
        "The switching value for savings",
        "The internal rate of return",
        "The optimism bias uplift on the estimate",
        "The benefit-cost ratio"
       ],
       "answer": 0,
       "explain": "A switching value is the change in one input that makes NPV zero. The IRR is a discount rate, not a change in savings."
      },
      {
       "q": "A new metro line shows a negative financial NPV but a positive economic NPV. The most likely explanation is that:",
       "options": [
        "The economic analysis used a discount rate that was set too high",
        "Construction costs were left out of the economic analysis",
        "Fares do not cover costs, but time savings and wider benefits do",
        "The two analyses mixed real and nominal cash flows"
       ],
       "answer": 2,
       "explain": "Financial appraisal counts only cash to the owner, while economic appraisal also counts benefits to society such as time savings. The other options describe errors, not the normal reason for the difference."
      },
      {
       "q": "Which practice most directly counters optimism bias in a cost estimate?",
       "options": [
        "Asking the promoter to sign the estimate personally",
        "Reference class forecasting against completed projects",
        "Reducing contingency to make the project more competitive",
        "Using a lower discount rate for the most uncertain costs"
       ],
       "answer": 1,
       "explain": "Reference class forecasting anchors the estimate in the actual outcomes of comparable completed projects. Signatures, lower contingency or rate changes do not remove bias and may worsen it."
      },
      {
       "q": "Which funding route most typically makes environmental and social safeguards a condition of disbursement?",
       "options": [
        "Owner equity from retained profits",
        "A short-term overdraft from a commercial bank",
        "Payments from the annual maintenance budget",
        "A loan from a multilateral development bank"
       ],
       "answer": 3,
       "explain": "Development banks attach safeguard requirements to their loans and monitor compliance before releasing funds. The other routes do not normally impose such conditions."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l5",
   "title": "Charter, Governance & Initiation",
   "subtitle": "Authorising the project, setting decision rights and launching the team well",
   "minutes": 30,
   "objectives": [
    "Draft a project charter that authorises an engineering project and delegates authority",
    "Design a governance structure with clear decision rights, tolerances and stage-gate approvals",
    "Plan the initiation sequence and kickoff from investment decision to mobilisation"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Once the investment decision is taken, the project needs formal authority to exist. The **project charter** provides it: it names the project, its purpose and its sponsor, appoints the project manager, sets high-level scope, budget, milestones and constraints, and states what the project manager may decide without asking. On engineering projects the charter is also where the owner records the outputs of the front end, the approved business case, the basis of design, the estimate and the target dates, so that everyone starts from the same baseline rather than from their own memory of earlier discussions. International guidance such as ISO 21502:2020 treats this formal authorisation, with defined governance and a business case that stays under review, as a basic condition for managing any project."
    },
    {
     "type": "keypoints",
     "title": "What a good engineering project charter contains",
     "items": [
      "Purpose, business need and a link to the approved business case",
      "Objectives and success criteria: capacity, performance, safety, cost, completion, carbon and benefits",
      "High-level scope with key inclusions, exclusions and battery limits (detailed in Define)",
      "Summary budget with contingency, and key milestones including gate dates",
      "Sponsor, project manager and governance bodies, with decision rights and tolerances",
      "Major assumptions, constraints, risks and dependencies such as permits, land and grid connection",
      "Information requirements and the common data environment to be used, following the ISO 19650 approach",
      "Approval signatures and date"
     ]
    },
    {
     "type": "layers",
     "title": "Governance layers on a typical owner-led capital project (top first)",
     "items": [
      {
       "label": "Board or investment committee",
       "parts": [
        "Takes the final investment decision",
        "Sets strategic priorities and capital limits",
        "Receives exceptions beyond steering committee tolerance"
       ]
      },
      {
       "label": "Steering committee",
       "parts": [
        "Usually chaired by the sponsor",
        "Approves gates and major changes within delegated limits",
        "Resolves cross-functional conflicts"
       ]
      },
      {
       "label": "Project sponsor",
       "parts": [
        "Owns the business case and benefits",
        "Champions the project and secures resources",
        "Escalates decisions beyond own authority"
       ]
      },
      {
       "label": "Project manager and PMO",
       "parts": [
        "Plans and controls delivery within tolerances",
        "Integrates design, procurement, construction and commissioning",
        "Reports status, risks and forecasts"
       ]
      },
      {
       "label": "Package and contractor teams",
       "parts": [
        "Deliver work packages under contracts",
        "Manage subcontractors, safety and quality on site",
        "Raise issues and early warnings"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "Governance works when everyone knows who decides what. **Decision rights** assign each class of decision, such as approving a gate, awarding a contract, releasing contingency or changing the design basis, to a specific person or body. **Tolerances** set the limits within which each level may act before escalating: for example, the project manager may approve changes up to a stated value and a few days of schedule impact, the sponsor up to a higher limit, and anything above goes to the steering committee. Tolerances should cover cost, time, scope, quality and safety, and they must be meaningful: too tight and the steering committee drowns in trivia; too loose and real problems stay hidden until it is too late to act. On projects that manage a carbon budget, carbon needs a tolerance too."
    },
    {
     "type": "table",
     "title": "Illustrative decision rights matrix (thresholds are examples only)",
     "head": [
      "Decision",
      "Project manager",
      "Sponsor",
      "Steering committee",
      "Board"
     ],
     "rows": [
      [
       "Proceed through the gate into execution",
       "Recommends",
       "Endorses",
       "Reviews",
       "Decides (final investment decision)"
      ],
      [
       "Approve a change within the PM's tolerance",
       "Decides",
       "Informed",
       "Informed in the monthly report",
       "Not involved"
      ],
      [
       "Release contingency above the PM's tolerance",
       "Requests with justification",
       "Decides within own limit",
       "Decides above the sponsor's limit",
       "Not involved unless budget is exceeded"
      ],
      [
       "Award a major EPC or equipment contract",
       "Recommends after evaluation",
       "Endorses",
       "Decides within delegated limit",
       "Decides above that limit"
      ],
      [
       "Change the basis of design or a performance requirement",
       "Assesses impact",
       "Recommends",
       "Decides",
       "Informed"
      ],
      [
       "Stop work for a serious safety concern",
       "Decides immediately (as can anyone on site)",
       "Informed at once",
       "Informed at once",
       "Informed"
      ]
     ]
    },
    {
     "type": "sequence",
     "title": "Escalating a change beyond the PM's tolerance",
     "actors": [
      "Contractor",
      "Project manager",
      "Sponsor",
      "Steering committee"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Early warning: utility clash on route"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Request quotations for options"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Cost and time for each option",
       "reply": true
      },
      {
       "from": 1,
       "to": 1,
       "label": "Check impact against tolerances",
       "note": "Above PM limit, within sponsor's"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Recommendation and impact assessment"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Decision: approve option B",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Instruction under the contract"
      },
      {
       "from": 1,
       "to": 3,
       "label": "Reported in the exception report"
      }
     ],
     "caption": "The decision goes to the lowest level whose tolerance covers it, here the sponsor, and the committee is informed rather than asked. The contractor is instructed only after the decision, through the contract's own procedure."
    },
    {
     "type": "text",
     "text": "A **project management office** supports governance with standards and data. On a single large project it may be the project controls team that runs the schedule, cost reports, risk register and document control. Across an owner's portfolio it may set procedures, templates and gate criteria, provide planners and cost engineers, and assure the quality of reporting. PMOs range from **supportive** (offering tools and coaching) through **controlling** (requiring compliance with standards) to **directive** (managing projects directly). The test of a useful PMO is whether its data helps decision-makers act earlier, not how many reports it produces."
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Many organisations, one programme",
     "text": "Urban rail projects such as Dhaka's first metro line, which began passenger service in late 2022, involve an implementing company, ministries, city authorities, utility owners, traffic police, lenders and several contractors for civil works, rolling stock and systems. Governance on programmes like this needs interface forums as well as a steering committee, because many critical decisions, such as utility diversions, road closures, power supply and station access, sit outside the project's direct control."
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Safety leadership starts in the charter",
     "text": "Since 2022 the ILO has counted a safe and healthy working environment among its fundamental principles and rights at work. Owners give that weight from the start: safety objectives sit beside cost and time in the charter, the owner's own duties in design and contractor selection are assigned, and the sponsor states that anyone may stop unsafe work. Site rules and contracts follow that lead."
    },
    {
     "type": "steps",
     "title": "From investment decision to mobilisation",
     "items": [
      {
       "title": "Confirm the mandate",
       "text": "Obtain the signed investment decision and any conditions set by the board or lenders, and carry them into the charter."
      },
      {
       "title": "Issue the charter",
       "text": "The sponsor signs the charter, appointing the project manager and confirming decision rights, tolerances and governance bodies."
      },
      {
       "title": "Form the core team",
       "text": "Appoint leads for engineering, procurement, construction, project controls, HSE, quality and commissioning, and engage the owner's engineer."
      },
      {
       "title": "Set up controls",
       "text": "Establish the baseline schedule and budget, risk register, document control, reporting calendar and change procedure before major contracts are signed."
      },
      {
       "title": "Run the kickoff",
       "text": "Bring owner, consultants and early contractors together (under two-stage or alliance arrangements the contractor joins before the price is fixed) to align on objectives, safety leadership, roles, interfaces, information management and the first 90 days."
      },
      {
       "title": "Mobilise",
       "text": "Start site establishment, permits, early works and long-lead orders, and hold the first progress review against the plan."
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Kickoff meeting readiness",
     "items": [
      "Charter signed and circulated, with objectives and success criteria in measurable terms",
      "Organisation chart showing owner, consultant and contractor roles with named contacts",
      "Decision rights and tolerances agreed and ready to explain",
      "Safety expectations and site rules prepared, including emergency arrangements",
      "Baseline milestones and gate dates ready to present",
      "Top risks and open issues listed with owners",
      "Communication plan: meeting rhythm, reporting dates and document control procedure",
      "Action log ready to capture decisions, owners and dates during the meeting"
     ]
    },
    {
     "type": "scenario",
     "title": "A committee member instructs the contractor",
     "situation": "Three months into construction of a hypothetical four-storey hospital block in Chattogram, a steering committee member visits site and verbally asks the main contractor's site manager to add an extra operating theatre in space designated for storage. The contractor starts setting out partitions and services and tells your site engineer the cost will follow later. The charter states that design changes go through the change procedure, with decisions above the project manager's tolerance taken by the steering committee as a body. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Let the work continue, because a steering committee member outranks the project manager.",
       "feedback": "Weak. Decision rights belong to the committee as a body, not to individual members on site visits. An operating theatre also brings medical gases, HVAC pressure regimes and power requirements that nobody has assessed.",
       "best": false
      },
      {
       "text": "Ask the contractor to pause the unapproved work, then promptly contact the member and the sponsor so the request goes through the change procedure with an impact assessment.",
       "feedback": "Best. Pausing stops unassessed, unpriced work and possible rework, while engaging the member and sponsor quickly treats the request as potentially valuable. The change procedure then gives the committee what it needs to decide.",
       "best": true
      },
      {
       "text": "Write to the contractor rejecting the request and forbidding any instruction from the member in future.",
       "feedback": "Weak. Clarifying who may instruct the contractor is right, but rejecting the request outright and confronting the member damages relationships and may discard a genuine clinical need.",
       "best": false
      },
      {
       "text": "Note the change in the next monthly report to the steering committee.",
       "feedback": "Weak. Work would continue unapproved for weeks, building cost and rework before anyone with authority has looked at it.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Look at a project you are involved in. Could every team member say who decides on contingency release, design changes and stopping work for safety? Where are the tolerances unclear, and what would you change in the charter?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Project charter",
       "def": "The document, signed by the sponsor, that formally authorises a project, appoints the project manager and records purpose, objectives, high-level scope, budget, milestones and delegated authority."
      },
      {
       "term": "Project sponsor",
       "def": "The senior individual accountable for the business case and benefits, who champions the project, secures resources and takes or escalates decisions beyond the project manager's authority."
      },
      {
       "term": "Steering committee",
       "def": "A group of senior stakeholders, usually chaired by the sponsor, that gives direction, approves gates and major changes within delegated limits and resolves conflicts the project cannot."
      },
      {
       "term": "Decision rights",
       "def": "The explicit assignment of each class of project decision to a named role or body, so that everyone knows who recommends, who decides and who is informed."
      },
      {
       "term": "Tolerance",
       "def": "The permitted deviation in cost, time, scope, quality or other measures within which a management level may act without escalating to the level above."
      },
      {
       "term": "Project management office",
       "def": "A function that defines standards, provides project controls services and assures reporting for a project or portfolio; it may be supportive, controlling or directive."
      },
      {
       "term": "Kickoff meeting",
       "def": "The meeting at the start of execution or of a phase that aligns owner, consultants and contractors on objectives, roles, safety, interfaces, communication and immediate priorities."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "The charter authorises the project, appoints the project manager and records the front-end baseline everyone starts from.",
      "Decision rights and tolerances say who decides what; a change goes to the lowest level whose tolerance covers it.",
      "Committees decide as bodies: individual members, however senior, should not instruct contractors directly.",
      "Put controls, safety leadership and information management in place before mobilisation, not after."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which document formally appoints the project manager and delegates authority at the start of the project?",
       "options": [
        "The project charter",
        "The feasibility study",
        "The basis of design",
        "The contractor's method statement"
       ],
       "answer": 0,
       "explain": "The charter authorises the project and appoints the project manager. Feasibility studies and the basis of design are technical inputs, and method statements belong to contractors."
      },
      {
       "q": "The project manager may approve changes up to a set cost and schedule impact without escalating. This limit is a:",
       "options": [
        "Hurdle rate",
        "Switching value",
        "Tolerance",
        "Stage gate"
       ],
       "answer": 2,
       "explain": "A tolerance defines how far a level may act before escalating. A hurdle rate and switching value are financial measures, and a stage gate is a decision point between phases."
      },
      {
       "q": "A PMO that offers templates and coaching but does not require compliance is best described as:",
       "options": [
        "Directive",
        "Supportive",
        "Controlling",
        "Executive"
       ],
       "answer": 1,
       "explain": "A supportive PMO provides help without enforcing standards. A controlling PMO requires compliance and a directive PMO manages projects itself."
      },
      {
       "q": "Who is normally accountable for the business case and the realisation of benefits?",
       "options": [
        "The EPC contractor's project director",
        "The owner's engineer",
        "The project management office",
        "The project sponsor"
       ],
       "answer": 3,
       "explain": "The sponsor owns the business case and benefits on the owner's side. Contractors, consultants and the PMO contribute, but are not accountable for the investment outcome."
      },
      {
       "q": "Which action belongs before the kickoff meeting rather than after it?",
       "options": [
        "Agreeing decision rights and tolerances to present to the team",
        "Holding the first monthly progress review against the baseline",
        "Starting inspections of long-lead equipment fabrication",
        "Walking down the first systems for punch list items"
       ],
       "answer": 0,
       "explain": "Decision rights and tolerances should be settled so they can be explained at kickoff. Progress reviews, fabrication inspections and punch lists come later in execution."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m2",
 "order": 2,
 "code": "Define",
 "title": "Scope, Requirements & Design Definition",
 "subtitle": "Turn an approved investment into a defined, buildable and controlled scope",
 "outcomes": [
  "Translate owner's requirements into a basis of design, specifications and applicable codes and standards",
  "Write a scope statement with battery limits, exclusions, assumptions and interfaces",
  "Build a deliverable-oriented WBS with a WBS dictionary, responsibility matrix and control accounts",
  "Manage design development through FEED, detailed design, reviews, value engineering, HAZOP and a common data environment to design freeze",
  "Establish a scope baseline and run disciplined change control that prevents scope creep"
 ],
 "lessons": [
  {
   "id": "m2-l1",
   "title": "Requirements & Basis of Design",
   "subtitle": "From what the owner needs to what the designers must design, written down, agreed and traceable",
   "minutes": 35,
   "objectives": [
    "Trace the cascade from business need to owner's requirements, basis of design and specifications",
    "Choose between performance and prescriptive specifications and apply codes and standards correctly",
    "Build constructability, operability and maintainability into requirements from the start"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Many of the costliest problems on engineering projects begin as requirements nobody wrote down. If the designer of a dyeing house is not told that the owner plans to add machines in three years, the steam header, effluent channels and floor loading will be sized for today. If the operator's need to remove a transformer without dismantling the switch room is never stated, the room will be built tightly around it. Requirements management is the discipline of capturing what the owner needs, translating it into technical terms designers can work to, and keeping every requirement traceable through design, construction and testing to handover."
    },
    {
     "type": "flow",
     "title": "The requirements cascade",
     "items": [
      {
       "label": "Business need",
       "text": "The outcome the investment must deliver, taken from the business case"
      },
      {
       "label": "Owner's project requirements",
       "text": "What owner and users need in their own terms: capacity, quality, reliability, comfort, budget"
      },
      {
       "label": "Basis of design",
       "text": "The designers' technical response: criteria, site data, codes, design life, key choices"
      },
      {
       "label": "Specifications and data sheets",
       "text": "Detailed requirements for materials, equipment, workmanship and testing"
      },
      {
       "label": "Drawings and models",
       "text": "The design deliverables that contractors build from"
      },
      {
       "label": "Verification",
       "text": "Tests and inspections proving each requirement is met (developed in Commission)"
      }
     ]
    },
    {
     "type": "text",
     "text": "The **owner's project requirements** are written in the language of the business and its users: the factory must finish a stated number of tonnes of fabric per day, the ward must be kept at a comfortable temperature and pressure for infection control, the substation must keep supplying the export processing zone if one transformer fails. The **basis of design** is the engineers' answer: the design criteria, site data, codes, assumptions and main technical choices that will satisfy those requirements. It is the single reference every discipline designs to, and it should be controlled like a contract document, because once it is approved, changing it is a change to the project."
    },
    {
     "type": "table",
     "title": "What a basis of design records: example for a hypothetical 33/11 kV substation",
     "head": [
      "Section",
      "Content",
      "Illustrative entry"
     ],
     "rows": [
      [
       "Design criteria",
       "Ratings, capacities, redundancy and performance targets",
       "Two 33/11 kV transformers, each able to carry the full forecast load if the other fails (N-1)"
      ],
      [
       "Site data",
       "Climate, design flood level, seismic zone, ground conditions, pollution level",
       "Floor and equipment plinths above the agreed design flood level; insulators chosen for a coastal pollution class"
      ],
      [
       "Codes and standards",
       "Applicable national codes and international standards, with editions",
       "National building and electrical codes plus the relevant IEC equipment standards, each edition listed"
      ],
      [
       "Design life and durability",
       "Required service life of structures and equipment",
       "Long design life for civil structures; concrete cover and coatings matched to exposure"
      ],
      [
       "Operating philosophy",
       "How the asset will be run and maintained",
       "Normally unmanned with remote control; one transformer out for maintenance at a time"
      ],
      [
       "Carbon and resilience",
       "Whole-life carbon target and climate assumptions",
       "Embodied carbon budget for civil works; design flood level checked against climate projections, not only past records"
      ],
      [
       "Information requirements",
       "Asset data and models the owner needs to operate and maintain",
       "Data for every transformer and breaker delivered in the structure of the owner's maintenance system"
      ],
      [
       "Assumptions and exclusions",
       "What the design takes as given and what it does not cover",
       "Incoming 33 kV lines by the utility up to the gantry; telecom link by others"
      ]
     ]
    },
    {
     "type": "tree",
     "title": "Tracing requirements for the substation",
     "root": {
      "label": "Business need",
      "text": "Reliable supply to the export processing zone",
      "children": [
       {
        "label": "OPR: survive one transformer failure",
        "children": [
         {
          "label": "BoD: 2 x 100% transformers (N-1)",
          "children": [
           {
            "label": "Spec: transformer data sheet"
           },
           {
            "label": "Test: load transfer on outage"
           }
          ]
         }
        ]
       },
       {
        "label": "OPR: failed transformer replaceable",
        "children": [
         {
          "label": "BoD: removal route and lifting",
          "children": [
           {
            "label": "Drawing: layout showing the route"
           },
           {
            "label": "Check: route trial at handover"
           }
          ]
         }
        ]
       },
       {
        "label": "OPR: normally unmanned",
        "children": [
         {
          "label": "BoD: remote control and alarms",
          "children": [
           {
            "label": "Spec: control system interface"
           },
           {
            "label": "Test: operation from control centre"
           }
          ]
         }
        ]
       }
      ]
     },
     "caption": "Every owner requirement should trace down to a design criterion, a deliverable and a test. The removal-route branch is exactly what is missing in the scenario later in this lesson, so nothing in design or testing would have caught the gap."
    },
    {
     "type": "compare",
     "title": "Performance vs prescriptive specification",
     "columns": [
      {
       "title": "Performance specification",
       "items": [
        "States the result: 'supply chilled water at 6 °C at peak load'",
        "Leaves the solution to the designer, contractor or supplier",
        "Encourages innovation and transfers design responsibility",
        "Needs clear, measurable acceptance tests",
        "Common in EPC and design-build packages"
       ]
      },
      {
       "title": "Prescriptive specification",
       "items": [
        "States the means: chiller type, materials and configuration",
        "Owner or its designer keeps responsibility for the outcome",
        "Gives control and standardisation, for example common spares",
        "Acceptance is by checking conformity to the description",
        "Common where the owner has strong standards or operating preferences"
       ]
      }
     ]
    },
    {
     "type": "matrix",
     "title": "Choosing a specification style",
     "x": "Owner's need for standardisation (low to high)",
     "y": "Supply market's design capability (low to high)",
     "quadrants": [
      {
       "title": "Performance specification",
       "items": [
        "State outputs and tests",
        "Let suppliers innovate",
        "Typical of EPC packages"
       ]
      },
      {
       "title": "Performance plus owner standards",
       "items": [
        "Outputs plus a preferred equipment list",
        "Common spares and controls",
        "A hybrid specification"
       ]
      },
      {
       "title": "Design by the owner's engineer",
       "items": [
        "Owner's designer fixes the solution",
        "Simple, build-only package",
        "Owner keeps design risk"
       ]
      },
      {
       "title": "Prescriptive specification",
       "items": [
        "Owner's standard details and equipment",
        "Acceptance by conformity checks",
        "Owner keeps outcome risk"
       ]
      }
     ],
     "caption": "A rule of thumb, not a law: performance specifications suit capable markets that can take design responsibility, while strong owner standards or a weak supply market push towards prescription. Many packages end up as hybrids."
    },
    {
     "type": "text",
     "text": "Codes and standards turn decades of experience into minimum rules. A typical project draws on the national building code and fire regulations, electrical and grid codes, environmental discharge standards, and international standards for equipment and materials, such as IEC standards for electrical equipment, ISO standards for many management systems and test methods, and ASME or European standards for pressure equipment. The basis of design should list each applicable code with its edition, set an **order of precedence** for conflicts (normally statutory requirements first, then project-specific requirements, then referenced standards) and say who rules when two documents disagree. Codes set minimums; the owner's requirements may legitimately go further. In Bangladesh, for example, the Bangladesh National Building Code (BNBC) 2020 is the national building code for structural, fire and building services design."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Editions, mixing and silent assumptions",
     "text": "Standards are revised, and designers and suppliers may work to different editions unless the edition is fixed. Mixing design methods from different code families, for example loads from one and resistance factors from another, can produce unsafe or wasteful results. Equally dangerous are assumptions that live only in a designer's head: allowable bearing pressure, fault level at the point of connection, the strength and flow pattern of incoming effluent. If it matters to the design, it belongs in the basis of design."
    },
    {
     "type": "framework",
     "title": "Design-for lenses every requirement set should cover",
     "items": [
      {
       "label": "C",
       "title": "Constructability",
       "text": "Can it be built safely and efficiently? Offsite and modular units designed for manufacture and assembly, standard reinforcement details, crane access, temporary works, sequence and lay-down space."
      },
      {
       "label": "O",
       "title": "Operability",
       "text": "Can operators run it well? A clear control philosophy, sensible alarms, safe access to valves and instruments, flexibility for start-up and upsets."
      },
      {
       "label": "M",
       "title": "Maintainability",
       "text": "Can it be maintained and replaced? Lifting beams over pumps, removal routes for transformers and chillers, isolation points, standardised spares."
      },
      {
       "label": "S",
       "title": "Safety in design",
       "text": "Are hazards removed at source? Less work at height, segregated pedestrian routes, safe chemical unloading points, fire separation."
      },
      {
       "label": "E",
       "title": "Energy and environment",
       "text": "Does it minimise whole-life energy, water and carbon? Efficient motors, heat recovery, daylight, water reuse, lower-carbon materials and less material overall."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Constructability on a viaduct",
     "text": "On elevated metro and expressway viaducts, designers who standardise pier heads and girder lengths allow formwork and precast moulds to be reused many times and simplify lifting or launching sequences. A constructability review in which the contractor's temporary works and lifting engineers comment on early layouts can expose crane outreach limits, lay-down needs over live traffic and pile cap clashes with buried utilities long before they become site problems."
    },
    {
     "type": "checklist",
     "title": "Basis of design review checklist",
     "items": [
      "Every owner's requirement is traceable to a design criterion or is explicitly excluded",
      "Site data (flood level, ground conditions, climate, seismicity) is sourced and dated",
      "Codes and standards are listed with editions and an order of precedence",
      "Design life, redundancy and availability targets are stated",
      "Operating and maintenance philosophy has been reviewed by the future operator",
      "Constructability input has been obtained from construction and temporary works specialists",
      "Assumptions, exclusions and interfaces with other parties are listed with owners",
      "Allowances for future expansion are stated or deliberately excluded",
      "Whole-life carbon targets, climate assumptions and the owner's information requirements are stated",
      "The document is under revision control with approval signatures"
     ]
    },
    {
     "type": "scenario",
     "title": "Built around the transformer",
     "situation": "During detailed design of a hypothetical 33/11 kV substation for an export processing zone, the owner's maintenance manager sees the layout for the first time and points out that once the switchgear building is complete, a failed power transformer could only be removed by demolishing a wall. The design consultant says the layout meets all codes and that the owner's requirements said nothing about removal routes. Civil works start in six weeks. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Proceed with the current layout, because it complies with the codes and the written requirements.",
       "feedback": "Weak. Code compliance is a minimum and says nothing about maintainability. Replacing a transformer by demolishing a wall would mean a long outage and high cost later in the asset's life.",
       "best": false
      },
      {
       "text": "Ask the consultant to assess layout options for a transformer removal route, with cost and time impact, and take the change through change control before civil works start.",
       "feedback": "Best. The missing requirement is real and is cheapest to fix now, before concrete is poured. Assessing options and using change control keeps the decision visible and properly authorised.",
       "best": true
      },
      {
       "text": "Ask the contractor to leave one wall unfinished so it can be completed later if needed.",
       "feedback": "Weak. An improvised gap is not a design: it compromises security, weather protection and fire separation, and it does not solve the lifting and transport route.",
       "best": false
      },
      {
       "text": "Instruct the consultant to redesign at its own cost because it should have foreseen the need.",
       "feedback": "Weak as a first step. The requirement was not stated, so liability is debatable, and arguing about it now delays the decision that matters before civil works start.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Take one system you know well: a boiler, a chiller plant, a pump station or a switch room. List three requirements an operator or maintainer would want but a designer working only from codes might miss. Where in your project's documents would they need to be written so that they are designed, built and tested?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Owner's project requirements",
       "def": "A document that sets out, in the owner's and users' terms, what the asset must achieve, including functions, capacities, performance, quality, budget and operational expectations, against which the design is checked."
      },
      {
       "term": "Basis of design",
       "def": "The designers' controlled record of the technical criteria, site data, codes and standards, assumptions and key decisions used to meet the owner's requirements; the reference for all subsequent design."
      },
      {
       "term": "Performance specification",
       "def": "A specification that states the required outcome and acceptance tests, leaving the means of achieving it to the designer, contractor or supplier."
      },
      {
       "term": "Prescriptive specification",
       "def": "A specification that defines the materials, equipment types, methods or workmanship to be used, so that compliance is checked by conformity to the description."
      },
      {
       "term": "Constructability",
       "def": "The extent to which a design allows safe and efficient construction, considering sequence, access, temporary works, standardisation and site conditions."
      },
      {
       "term": "Operability",
       "def": "The ease with which operators can run an asset safely and effectively across its operating modes, including start-up, normal operation, upsets and shutdown."
      },
      {
       "term": "Maintainability",
       "def": "The ease with which an asset can be inspected, maintained, repaired and replaced, including access, lifting provisions, isolation and spares."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Requirements flow from business need to owner's requirements, basis of design, specifications and tests, and must stay traceable.",
      "The basis of design is the single technical reference: control it like a contract document, with code editions and an order of precedence.",
      "Performance specifications transfer design responsibility and need measurable tests; prescriptive ones keep it with the owner.",
      "Build constructability, operability, maintainability, safety and whole-life carbon into requirements before layouts are fixed."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which document is written mainly in the owner's and users' terms rather than designers' technical terms?",
       "options": [
        "The basis of design",
        "The owner's project requirements",
        "The equipment data sheets",
        "The issued-for-construction drawings"
       ],
       "answer": 1,
       "explain": "Owner's project requirements describe what the business and users need. The basis of design, data sheets and drawings translate those needs into technical terms."
      },
      {
       "q": "A chiller specification states only the required chilled water temperature, capacity and test method. This is a:",
       "options": [
        "Prescriptive specification",
        "Method statement",
        "Basis of design",
        "Performance specification"
       ],
       "answer": 3,
       "explain": "It defines the result and how it will be tested, not the equipment or method, so it is a performance specification."
      },
      {
       "q": "Two referenced standards give different requirements for cable derating. Where should the project already have defined how to resolve this?",
       "options": [
        "In the order of precedence in the basis of design",
        "In the contractor's monthly progress report",
        "In the terms of reference of the steering committee",
        "In the site safety induction materials"
       ],
       "answer": 0,
       "explain": "The basis of design should state an order of precedence for conflicting documents. Progress reports, committee terms and inductions are not where technical precedence is set."
      },
      {
       "q": "Providing a lifting beam above large pumps and a clear route to remove them mainly improves:",
       "options": [
        "Constructability",
        "Operability",
        "Maintainability",
        "Code compliance"
       ],
       "answer": 2,
       "explain": "Lifting provisions and removal routes make repair and replacement easier, which is maintainability. They do little for construction efficiency or day-to-day operation."
      },
      {
       "q": "Why should the edition of each code be fixed in the basis of design?",
       "options": [
        "Because older editions are always cheaper to design to",
        "Because designers and suppliers may use different editions",
        "Because regulators accept only the newest edition published",
        "Because the code edition determines the discount rate"
       ],
       "answer": 1,
       "explain": "Fixing editions keeps all designers and suppliers working to the same rules. The other statements are not true in general."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l2",
   "title": "Scope Statement & Work Breakdown Structure",
   "subtitle": "Drawing the boundary of the work and breaking it into packages that can be planned, priced and controlled",
   "minutes": 40,
   "objectives": [
    "Write a scope statement with deliverables, battery limits, exclusions, assumptions and interfaces",
    "Build a deliverable-oriented WBS that obeys the 100% rule, supported by a WBS dictionary",
    "Link WBS, OBS and CBS through a responsibility assignment matrix, control accounts and work packages"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The **scope statement** is the project's written boundary. It turns the charter's high-level scope into a precise description of what will be delivered, where the project starts and stops, what is excluded and what is assumed. On engineering projects vagueness here is rarely harmless: if the statement does not say who provides the 11 kV supply to a new pump house, or whether demolition of the old ETP tanks is included, someone will find out during construction, usually through a claim. Precision costs a few days of careful writing; ambiguity costs months of argument."
    },
    {
     "type": "keypoints",
     "title": "Elements of an engineering scope statement",
     "items": [
      "**Objectives and deliverables**: the facilities, systems and documents to be handed over, with capacities and performance",
      "**Battery limits**: the physical and contractual boundaries of the scope, such as tie-in flanges, cable terminations and plot boundaries",
      "**Exclusions**: items explicitly not in scope, to stop false assumptions",
      "**Assumptions**: conditions taken as true for planning, such as ground conditions or availability of grid power, each with an owner to verify it",
      "**Constraints**: fixed dates, budget ceilings, working-hour limits and live-plant shutdown windows",
      "**Interfaces**: points where this scope meets other contracts, existing plant or third parties",
      "**Acceptance criteria**: the tests and documents that prove each deliverable is complete"
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Battery limits in practice",
     "text": "For a new effluent treatment plant added to an operating textile factory, the battery limits might be: raw effluent from the inlet flange of the new equalisation tank; treated water to the outlet flange of the final discharge pit; power from the outgoing terminals of a named feeder in the existing LV panel; sludge to the loading point of the dewatered sludge store. Everything inside belongs to the ETP contractor. Everything outside, such as the factory drains, the LV panel and sludge disposal, belongs to others and must appear as an interface."
    },
    {
     "type": "template",
     "title": "Battery limits and interface register",
     "purpose": "Record every point where the scope meets another party, contract or existing system, so that responsibilities, data and dates are agreed before they cause clashes.",
     "columns": [
      "Interface ID",
      "Location / tie-in point",
      "Party A (provides)",
      "Party B (receives)",
      "What is exchanged",
      "Need date",
      "Status"
     ],
     "example": [
      [
       "IF-07",
       "Outgoing terminals, feeder 4, existing LV panel",
       "Factory electrical team",
       "ETP contractor",
       "400 V supply, cable termination and protection settings",
       "Before pre-commissioning",
       "Open: protection settings awaited"
      ],
      [
       "IF-12",
       "Outlet flange of final discharge pit",
       "ETP contractor",
       "Factory civil team",
       "Treated effluent; pipe size, invert level and flow data",
       "Before drain connection works",
       "Agreed"
      ]
     ],
     "rows": 8
    },
    {
     "type": "text",
     "text": "The **work breakdown structure** decomposes the total scope into progressively smaller, manageable parts. A good engineering WBS is **deliverable-oriented**, organised around what is produced (a station box, a turbine hall, a substation, an ETP) rather than who produces it, and it obeys the **100% rule**: each level contains all the work of its parent and nothing more, so nothing is missed and nothing is counted twice. Elements at the same level should not overlap. The lowest level is the **work package**, small enough to estimate, schedule, assign to one responsible party and measure; a common rule of thumb is that a work package should be completed within one or two reporting periods. Project management, design and commissioning are deliverables too and belong in the WBS. ISO 21511:2018 gives international guidance on work breakdown structures. Offsite and modular items, such as prefabricated MEP risers or bathroom pods, need work packages for factory production, transport and installation, so progress and interfaces at each stage stay visible. Coding model objects and documents to the WBS also lets quantities, 4D sequencing and cost be drawn from the model."
    },
    {
     "type": "tree",
     "title": "WBS for a hypothetical elevated metro station",
     "root": {
      "label": "Station S5 with adjoining viaduct spans",
      "children": [
       {
        "label": "Foundations and substructure",
        "children": [
         {
          "label": "Bored piles",
          "text": "Work packages: piles grid A to D"
         },
         {
          "label": "Pile caps and piers",
          "text": "Work packages: PC1 to PC8"
         }
        ]
       },
       {
        "label": "Station structure",
        "children": [
         {
          "label": "Concourse level"
         },
         {
          "label": "Platform level and roof",
          "text": "Work packages: slab pours 1 to 3"
         }
        ]
       },
       {
        "label": "Architecture and finishes",
        "text": "Finishes, facade and cladding"
       },
       {
        "label": "Station systems (MEP)",
        "children": [
         {
          "label": "Lifts and escalators"
         },
         {
          "label": "HVAC and smoke ventilation"
         },
         {
          "label": "Power and lighting",
          "text": "Work packages: LV switchboards, cable trays"
         }
        ]
       },
       {
        "label": "Management, design, commissioning",
        "text": "Project management, design, testing and commissioning"
       }
      ]
     },
     "caption": "Each branch contains all of its parent's work and nothing else (the 100% rule), and management, design and commissioning appear as deliverables. Work packages sit at the next level down, small enough to estimate, schedule and assign to one party."
    },
    {
     "type": "compare",
     "title": "WBS, OBS and CBS: three ways to slice the same project",
     "columns": [
      {
       "title": "Work breakdown structure",
       "items": [
        "Breaks down the work and deliverables",
        "Answers: what must be produced?",
        "Basis for scope control and scheduling",
        "Lowest level: the work package"
       ]
      },
      {
       "title": "Organisational breakdown structure",
       "items": [
        "Breaks down the organisation: owner, consultants, contractors, departments",
        "Answers: who is responsible?",
        "Basis for assigning accountability",
        "Lowest level: a team or responsible manager"
       ]
      },
      {
       "title": "Cost breakdown structure",
       "items": [
        "Breaks down costs by account or cost type",
        "Answers: where does the money go?",
        "Basis for estimates, budgets and cost reports (see Budget)",
        "Lowest level: cost codes such as labour, materials and plant",
        "Where carbon is a managed baseline, a carbon budget can be held against the same codes"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "Where the WBS and the organisational breakdown structure (OBS) intersect, responsibility is assigned. A **responsibility assignment matrix** (RAM) lists WBS elements down the side and organisations or roles across the top; a common format marks who is Responsible, Accountable, Consulted and Informed (RACI), and each element should have exactly one accountable party. A **control account** is the management control point where scope, budget, schedule and actual cost are integrated for one WBS element under one responsible manager. It contains one or more work packages and is where earned value is measured and variances are explained (see Budget). Choose the level with care: too high and problems hide inside large accounts; too low and the reporting effort overwhelms the team."
    },
    {
     "type": "topology",
     "title": "Where a control account sits",
     "nodes": [
      {
       "id": "wbs",
       "kind": "doc",
       "label": "WBS element",
       "sub": "What: 4 Station systems (MEP)",
       "x": 1,
       "y": 1
      },
      {
       "id": "obs",
       "kind": "team",
       "label": "OBS manager",
       "sub": "Who: MEP package manager",
       "x": 5,
       "y": 1
      },
      {
       "id": "sch",
       "kind": "doc",
       "label": "Schedule",
       "sub": "Activities and dates",
       "x": 0,
       "y": 3
      },
      {
       "id": "ca",
       "kind": "process",
       "label": "Control account",
       "sub": "Scope, budget, schedule, actual cost",
       "x": 3,
       "y": 3
      },
      {
       "id": "cbs",
       "kind": "db",
       "label": "Cost codes (CBS)",
       "sub": "Labour, materials, plant, subcontract",
       "x": 6,
       "y": 3
      },
      {
       "id": "wp1",
       "kind": "doc",
       "label": "Work package",
       "sub": "LV switchboards and cable trays",
       "x": 1,
       "y": 5
      },
      {
       "id": "wp2",
       "kind": "doc",
       "label": "Work package",
       "sub": "HVAC and smoke ventilation",
       "x": 3,
       "y": 5
      },
      {
       "id": "pp",
       "kind": "doc",
       "label": "Planning package",
       "sub": "Future work, budgeted, not yet detailed",
       "x": 5,
       "y": 5
      }
     ],
     "links": [
      {
       "a": "wbs",
       "b": "ca",
       "label": "what"
      },
      {
       "a": "obs",
       "b": "ca",
       "label": "who"
      },
      {
       "a": "sch",
       "b": "ca",
       "label": "when"
      },
      {
       "a": "ca",
       "b": "cbs",
       "label": "how much"
      },
      {
       "a": "ca",
       "b": "wp1"
      },
      {
       "a": "ca",
       "b": "wp2"
      },
      {
       "a": "ca",
       "b": "pp",
       "style": "dashed"
      }
     ],
     "caption": "A control account sits where one WBS element meets one responsible manager, with its own budget, schedule and actual cost; earned value is measured here. Work packages are planned in detail now, while planning packages hold budget for later work."
    },
    {
     "type": "table",
     "title": "Responsibility assignment matrix (RACI) extract for a hypothetical ETP project",
     "head": [
      "WBS element",
      "Owner's PM",
      "Owner's engineer",
      "ETP contractor",
      "Factory operations"
     ],
     "rows": [
      [
       "1.1 Process design and basis of design",
       "A",
       "R",
       "C",
       "C"
      ],
      [
       "1.3 Civil works: tanks and pump house",
       "I",
       "C",
       "A/R",
       "I"
      ],
      [
       "1.5 Electrical and controls",
       "I",
       "C",
       "A/R",
       "C"
      ],
      [
       "1.7 Tie-ins to existing drains and LV panel",
       "A",
       "C",
       "R",
       "R"
      ],
      [
       "1.8 Commissioning and performance test",
       "A",
       "C",
       "R",
       "C"
      ],
      [
       "1.9 Operator training and O&M manuals",
       "I",
       "C",
       "R",
       "A"
      ]
     ]
    },
    {
     "type": "template",
     "title": "WBS dictionary entry",
     "purpose": "Describe each WBS element precisely, so that scope, deliverables, responsibility, estimate and acceptance are unambiguous to everyone who uses the WBS.",
     "columns": [
      "WBS code",
      "Element name",
      "Description of work",
      "Deliverables and acceptance criteria",
      "Responsible (control account manager)",
      "Estimate (cost / hours)",
      "Planned start - finish"
     ],
     "example": [
      [
       "1.3.2",
       "Equalisation tank",
       "Excavation, blinding, reinforced concrete raft and walls, waterproofing, inlet and outlet nozzles, walkway and handrails",
       "Tank built to IFC drawings; water-tightness test passed; inspection records signed",
       "ETP contractor's civil manager",
       "Illustrative: 85 (USD thousand), 6,200 hours",
       "Weeks 6 - 15"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "title": "Who owns the cable trays?",
     "situation": "On a hypothetical gas-engine power plant extension, the WBS has separate elements for '3.2 Electrical installation' (main electrical contractor) and '3.5 Instrumentation and control' (I&C contractor). While reviewing the cost-loaded schedule, the planner notices that cable trays between the engine hall and the control building appear in both contractors' bills of quantities, while fire stopping of cable penetrations appears in neither. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Leave both contracts as they are and let the site teams agree who installs the trays.",
       "feedback": "Weak. It leaves a risk of paying twice for trays and nobody installing the fire stopping, and it pushes a scope decision onto site teams where it becomes a dispute.",
       "best": false
      },
      {
       "text": "Correct the WBS and WBS dictionary so each item sits in exactly one element, then align both contracts' scopes and the interface register.",
       "feedback": "Best. Overlap and omission are both breaches of the 100% rule. Fixing the WBS at the root and then aligning the contracts removes the duplicate cost and closes the fire-safety gap.",
       "best": true
      },
      {
       "text": "Remove the trays from both contracts and buy them directly as owner-supplied material.",
       "feedback": "Weak as a first move. It may be a valid strategy later, but it creates a new interface, does nothing about the missing fire stopping and does not repair the WBS.",
       "best": false
      },
      {
       "text": "Add the fire stopping to the I&C contractor because its scope is smaller.",
       "feedback": "Weak. The choice is arbitrary, ignores the duplicated trays and does not address the WBS problem that caused both errors.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Sketch the top three levels of a WBS for your capstone project. Does every element pass the 100% rule? Which elements are organised by deliverable, and which, perhaps out of habit, by discipline or by company?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Scope statement",
       "def": "The documented description of a project's deliverables, boundaries, exclusions, assumptions, constraints, interfaces and acceptance criteria, used as the basis for detailed planning and control."
      },
      {
       "term": "Battery limit",
       "def": "A defined physical or contractual boundary, such as a tie-in flange, cable termination or plot line, at which one party's scope ends and another's begins."
      },
      {
       "term": "Work breakdown structure",
       "def": "A hierarchical, deliverable-oriented decomposition of the total project scope into progressively smaller elements, down to work packages."
      },
      {
       "term": "100% rule",
       "def": "The WBS principle that each level must include all of the work of its parent element and no work outside it, so that no scope is missed or double-counted."
      },
      {
       "term": "WBS dictionary",
       "def": "A companion document giving, for each WBS element, its description of work, deliverables, acceptance criteria, responsible party, estimate and schedule information."
      },
      {
       "term": "Work package",
       "def": "The lowest level of the WBS: a defined piece of work small enough to be estimated, scheduled, assigned to one responsible party and measured for progress."
      },
      {
       "term": "Control account",
       "def": "A management control point where scope, budget, schedule and actual cost are integrated for a WBS element under one responsible manager; it contains one or more work packages."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "The scope statement fixes the boundary: deliverables, battery limits, exclusions, assumptions, constraints, interfaces and acceptance.",
      "A deliverable-oriented WBS obeys the 100% rule, with management, design, commissioning and offsite work included as deliverables.",
      "The WBS dictionary removes doubt about what each element contains and how its completion is accepted.",
      "Control accounts integrate scope, budget, schedule and actual cost under one manager; size them so that problems cannot hide."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which statement best describes a battery limit?",
       "options": [
        "A cap on the number of batteries that may be installed in a UPS room",
        "The largest sum the PM may spend without approval",
        "A defined boundary between one party's scope and another's",
        "A limit on working hours inside a live plant area"
       ],
       "answer": 2,
       "explain": "A battery limit is a scope boundary, such as a tie-in flange or cable termination. The other options describe equipment, tolerances and site constraints."
      },
      {
       "q": "A WBS element 'Substation' has children that together omit earthing and include a road outside the site. Which principle is breached?",
       "options": [
        "The 100% rule",
        "The rule of credit",
        "The critical path",
        "Decision rights"
       ],
       "answer": 0,
       "explain": "The children must contain exactly the parent's work: missing earthing and an extra road breach the 100% rule. The other concepts relate to progress measurement, scheduling and governance."
      },
      {
       "q": "Which top-level breakdown is most deliverable-oriented for a hospital block?",
       "options": [
        "Civil engineers, mechanical engineers, electrical engineers and architects",
        "Labour, materials, plant, subcontracts and overheads",
        "January works, February works, March works",
        "Substructure, superstructure, envelope, MEP systems, fit-out"
       ],
       "answer": 3,
       "explain": "Physical deliverables make a deliverable-oriented WBS. The others are organisational, cost-type and time-based breakdowns."
      },
      {
       "q": "In a RACI matrix, how many parties should be Accountable for each WBS element?",
       "options": [
        "Every party involved, so the load is shared",
        "Exactly one party for each element",
        "One party per organisation involved",
        "At least two parties, for resilience"
       ],
       "answer": 1,
       "explain": "Single-point accountability avoids gaps and finger-pointing. Several parties may be responsible, consulted or informed, but only one is accountable."
      },
      {
       "q": "Where are scope, budget, schedule and actual cost integrated under one responsible manager?",
       "options": [
        "The control account",
        "The scope statement",
        "The interface register",
        "The project charter"
       ],
       "answer": 0,
       "explain": "A control account is the integration point for scope, cost and schedule performance. The other documents define or record scope and authority but do not integrate performance data."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l3",
   "title": "Design Development & Design Management",
   "subtitle": "Maturing the design from concept to construction: reviewed, challenged, frozen and tracked",
   "minutes": 40,
   "objectives": [
    "Describe the purpose and deliverables of concept design, FEED or basic design, and detailed design",
    "Plan design reviews, value engineering and HAZOP studies at the right points",
    "Control design progress with a deliverables register and a disciplined design freeze"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Design matures in steps, and each step should answer the questions the next decision needs. **Concept design** establishes the arrangement, the main technical choices and an order-of-magnitude cost. **Front-end engineering design (FEED)**, called basic or preliminary design in some sectors, fixes the process, layouts, main equipment sizes and specifications in enough detail to estimate reliably and to tender an EPC or construction contract. **Detailed design** produces everything needed to procure, fabricate, build and test: calculations, drawings, schedules, models and data sheets, issued for construction. Skimping on maturity at one stage simply moves the uncertainty into the next, where it costs more to resolve."
    },
    {
     "type": "table",
     "title": "Design stages at a glance",
     "head": [
      "Stage",
      "Purpose",
      "Typical deliverables",
      "Decision supported"
     ],
     "rows": [
      [
       "Concept",
       "Choose the arrangement and technology",
       "Block diagrams, site layout options, outline sizing, concept report",
       "Selecting the preferred option at feasibility"
      ],
      [
       "FEED or basic design",
       "Define the facility well enough to estimate and contract",
       "Process flow diagrams, P&IDs, plot plans, equipment lists and data sheets, single-line diagrams, specifications",
       "Final investment decision and EPC or construction tender"
      ],
      [
       "Detailed design",
       "Complete the design for procurement and construction",
       "Calculations, general arrangement and detail drawings, 3D model, cable schedules, bar bending schedules",
       "Purchase orders, fabrication and construction"
      ],
      [
       "Issued for construction and as-built",
       "Build to approved documents and record what was built",
       "IFC drawings, revisions, field change records, as-built records",
       "Construction, commissioning and handover (see Commission)"
      ]
     ]
    },
    {
     "type": "text",
     "text": "Design management is project management applied to design work. The design manager plans the deliverables, sequences the disciplines (process before piping, structural loads before foundations, equipment data before electrical sizing), chases vendor information and coordinates reviews. The core tool is the **deliverables register**: a list of every drawing, calculation, specification and model with its discipline, revision, planned and actual dates and status, such as issued for review, approved or issued for construction. It makes design progress measurable rather than a matter of opinion, and it shows when late vendor data or unanswered comments are blocking other disciplines downstream. On projects run to the ISO 19650 series, this register takes the form of master and task information delivery plans, and every drawing or model is an information container whose status is managed in a **common data environment** (CDE), as shown below."
    },
    {
     "type": "topology",
     "title": "Information states in a common data environment",
     "nodes": [
      {
       "id": "str",
       "kind": "team",
       "label": "Structural team",
       "sub": "Develops its own models",
       "x": 0,
       "y": 1
      },
      {
       "id": "mep",
       "kind": "team",
       "label": "MEP team",
       "sub": "Develops its own models",
       "x": 0,
       "y": 3
      },
      {
       "id": "sh",
       "kind": "storage",
       "label": "Shared",
       "sub": "Federated model, clash checks",
       "x": 2,
       "y": 2
      },
      {
       "id": "ap",
       "kind": "process",
       "label": "Review/authorise",
       "sub": "Lead designer, then owner accepts",
       "x": 4,
       "y": 2
      },
      {
       "id": "pub",
       "kind": "doc",
       "label": "Published",
       "sub": "Issued for construction",
       "x": 6,
       "y": 2
      },
      {
       "id": "site",
       "kind": "user",
       "label": "Site team",
       "sub": "Builds only from Published",
       "x": 7,
       "y": 0
      },
      {
       "id": "arc",
       "kind": "storage",
       "label": "Archive",
       "sub": "Superseded revisions kept",
       "x": 7,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "str",
       "b": "sh",
       "label": "share"
      },
      {
       "a": "mep",
       "b": "sh",
       "label": "share"
      },
      {
       "a": "sh",
       "b": "ap",
       "label": "submit"
      },
      {
       "a": "ap",
       "b": "pub",
       "label": "authorised"
      },
      {
       "a": "pub",
       "b": "site",
       "label": "use"
      },
      {
       "a": "pub",
       "b": "arc",
       "label": "superseded",
       "style": "dashed"
      }
     ],
     "zones": [
      {
       "label": "Work in progress",
       "x": 0,
       "y": 0,
       "w": 1,
       "h": 4,
       "tone": "neutral"
      },
      {
       "label": "Shared",
       "x": 2,
       "y": 1,
       "w": 1,
       "h": 2,
       "tone": "accent"
      },
      {
       "label": "Published",
       "x": 6,
       "y": 1,
       "w": 1,
       "h": 2,
       "tone": "good"
      },
      {
       "label": "Archive",
       "x": 7,
       "y": 4,
       "w": 1,
       "h": 1,
       "tone": "neutral"
      }
     ],
     "caption": "Information moves through states instead of being emailed around: teams work privately, share for coordination, and only authorised containers are published. Superseded revisions are archived, never deleted, so the history of every change survives."
    },
    {
     "type": "keypoints",
     "title": "Design reviews that add value",
     "items": [
      "**Staged reviews** at defined maturity, often around 30%, 60% and 90% of detailed design, plus a final review before issue for construction",
      "**Interdisciplinary checks** so structural, mechanical, electrical and architectural documents agree, increasingly supported by clash detection in a federated 3D model (see Integrate)",
      "**Automated checks**, such as rule-based or AI-assisted model checking and clash triage, speed reviews, but a competent engineer still verifies and signs off every finding",
      "**Operations and maintenance reviews** with the future operator walking through the 3D model",
      "**Constructability reviews** with contractors and temporary works engineers",
      "**Formal comment resolution**: every comment logged, answered and closed, with the reason recorded"
     ]
    },
    {
     "type": "steps",
     "title": "Running a HAZOP study as a design review",
     "items": [
      {
       "title": "Prepare",
       "text": "Use reasonably mature P&IDs and a clear design intent. Appoint an independent, experienced chair and a scribe; the team includes process, instrument, mechanical and operations engineers."
      },
      {
       "title": "Divide into nodes",
       "text": "Break the system into manageable sections, such as a boiler feedwater line or a chemical dosing skid, each with a defined design intent."
      },
      {
       "title": "Apply guide words",
       "text": "Combine guide words with process parameters, such as no flow, more pressure, less temperature or reverse flow, to generate credible deviations."
      },
      {
       "title": "Analyse each deviation",
       "text": "Identify causes, consequences and existing safeguards, and judge whether the safeguards are adequate."
      },
      {
       "title": "Record actions",
       "text": "Where safeguards are inadequate or uncertain, raise an action with a named owner, such as adding a non-return valve or a high-level trip."
      },
      {
       "title": "Close out",
       "text": "Track every action to closure and update the design before freeze; any open actions are reported at the design freeze gate."
      }
     ]
    },
    {
     "type": "table",
     "title": "HAZOP guide words applied to a hypothetical boiler feedwater line",
     "head": [
      "Guide word + parameter",
      "Deviation",
      "Possible cause",
      "Possible consequence",
      "Example action"
     ],
     "rows": [
      [
       "No + flow",
       "No feedwater reaches the boiler",
       "Feed pump trip, closed valve, blocked strainer",
       "Low drum level, tube overheating",
       "Confirm low-level alarm and burner trip; standby pump auto-start"
      ],
      [
       "More + pressure",
       "Overpressure in the feed line",
       "Discharge valve closed against a running pump",
       "Pipe or gasket failure",
       "Check pump shut-off head against line rating; add minimum-flow recirculation"
      ],
      [
       "Less + temperature",
       "Feedwater colder than design",
       "Deaerator heating failure",
       "Thermal stress, oxygen corrosion",
       "Alarm on deaerator temperature; review chemical dosing"
      ],
      [
       "Reverse + flow",
       "Backflow from boiler towards the feed tank",
       "Non-return valve failure when the pump stops",
       "Hot water and steam in the feed system",
       "Specify a second non-return valve; confirm valve test regime"
      ],
      [
       "Other than + composition",
       "Contaminated feedwater",
       "Condensate return contaminated by a process leak",
       "Scaling, foaming, tube damage",
       "Conductivity monitoring with automatic dumping of returned condensate"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Value engineering is not cost cutting",
     "text": "**Value engineering** analyses the functions an element must perform and looks for ways to deliver them at lower whole-life cost without reducing performance, safety or quality. Replacing cast-in-situ crossheads with precast units to cut work at height, standardising pump sizes to reduce spares, or orienting a building to cut its cooling load are value engineering. Deleting a standby pump or thinning roof insulation to meet a budget is cost cutting with consequences. Value engineering pays best at concept and FEED, when change is cheap; late proposals during construction must be weighed against redesign, delay and approval costs. Switching to a lower-carbon concrete mix that meets the same strength and durability is value engineering too."
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Decide offsite, carbon and data needs early",
     "text": "Precast elements, volumetric modules, prefabricated MEP risers and plant skids change grids, tolerances, crane and transport limits and the design programme, because factories need frozen information earlier than site trades. **Design for manufacture and assembly** (DfMA) decisions therefore belong at concept and FEED, together with a whole-life carbon assessment at each design stage. Likewise, if the owner wants an operational digital twin (concepts in ISO/IEC 30173:2023), define the asset data it needs during design, not at handover."
    },
    {
     "type": "case",
     "title": "Value engineering on an elevated expressway",
     "context": "A hypothetical elevated expressway in a South Asian city is at FEED. The reference design uses cast-in-situ box girders on falsework, which would occupy traffic lanes beneath for long periods. An independently facilitated value engineering workshop, attended by the designer, the owner's engineer, a contractor's adviser and the traffic police, proposes precast segmental girders erected by a launching gantry. The proposal needs a casting yard on land the owner does not yet hold, changes the pier head details and requires heavier transport routes. Design freeze for the viaduct is scheduled in four months. Figures and parties are illustrative.",
     "questions": [
      "What functions should the workshop have defined before comparing the two methods?",
      "What information is needed to decide whether to adopt the proposal before design freeze?",
      "How should the change be controlled if it is accepted?"
     ],
     "answer": "The workshop should start from functions such as carrying traffic loads safely over the design life, spanning between piers, being buildable with minimal disruption to traffic below, and being inspectable and maintainable, rather than from 'provide a box girder'. Deciding on precast segments needs evidence on whole-life cost, schedule, traffic disruption, quality control of segments, casting yard land and permits, transport routes, launching gantry availability and the redesign effort for pier heads. The decision should be taken during FEED, before design freeze, with an impact assessment covering cost, time, risk and interfaces. If accepted, the basis of design, scope statement, WBS and deliverables register must all be updated and the change formally approved, so that the tender documents describe one consistent design."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Design freeze must mean something",
     "text": "A **design freeze** is the point after which design changes are allowed only through formal change control with impact assessment. Freezes are usually staged, for example process design, then layouts, then detailed discipline design, and linked to procurement: equipment cannot be ordered until its data sheet is frozen, and foundations cannot be finalised until vendor loads are confirmed. A freeze that is announced but not enforced is worse than none, because procurement and construction proceed on documents that are still moving."
    },
    {
     "type": "timeline",
     "title": "Staged freezes on a typical process plant",
     "items": [
      {
       "when": "Concept",
       "label": "Technology and layout chosen"
      },
      {
       "when": "FEED",
       "label": "Process design frozen",
       "text": "Flow diagrams and balances fixed; P&IDs ready for HAZOP"
      },
      {
       "when": "End of FEED",
       "label": "Plot plan and data sheets frozen",
       "text": "Long-lead equipment can be ordered"
      },
      {
       "when": "Detailed 30-60%",
       "label": "Vendor data confirmed",
       "text": "Certified loads fix foundations and piping"
      },
      {
       "when": "Detailed 90%",
       "label": "Discipline design frozen",
       "text": "Later changes only through change control"
      },
      {
       "when": "IFC",
       "label": "Issued for construction"
      },
      {
       "when": "Handover",
       "label": "As-built records",
       "text": "Documents and models match the installed asset"
      }
     ],
     "caption": "Each freeze is tied to the work that depends on it: orders need frozen data sheets and foundations need certified vendor loads. After the last freeze, change is still possible, but only through change control."
    },
    {
     "type": "scenario",
     "title": "Equipment not yet chosen",
     "situation": "You are the design manager for a hypothetical 300-bed hospital in Dhaka. Detailed design is at about 60%, and the structural and MEP design freeze is in five weeks. The clinical team has not yet chosen the MRI and CT equipment, which affects floor loading, radiation and magnetic shielding, cooling and power. The architect proposes freezing the whole design on generic allowances and dealing with any differences later. What should you do FIRST?",
     "options": [
      {
       "text": "Freeze on generic allowances as proposed and handle any differences through site instructions later.",
       "feedback": "Weak. Imaging equipment varies enough in weight, shielding and services that generic allowances are likely to be wrong, and fixing that through site instructions means rework in finished structure.",
       "best": false
      },
      {
       "text": "Postpone the entire design freeze until the clinical team has chosen all the equipment.",
       "feedback": "Weak. Holding the whole hospital for a few rooms delays procurement and construction across every other area.",
       "best": false
      },
      {
       "text": "Agree an equipment decision date with the client, freeze the rest of the design, and hold the imaging suites on an envelope design that covers the likely options.",
       "feedback": "Best. A partial freeze with a defined hold point protects the programme while keeping the imaging rooms flexible. The envelope and the decision date make the remaining uncertainty explicit and manageable.",
       "best": true
      },
      {
       "text": "Choose the equipment yourself, based on the most common models, so the design can proceed.",
       "feedback": "Weak. Clinical equipment selection belongs to the client's clinical and procurement teams; choosing for them oversteps your role and invites a later change.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "For a design you have seen develop, at what point was it truly frozen, and how many significant changes came after that point? Which of them would a HAZOP, a constructability review or a value engineering workshop at FEED have caught?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Front-end engineering design",
       "def": "The design stage, also called basic design, that defines process, layouts, main equipment and specifications in enough detail to support the investment decision, a reliable estimate and an EPC or construction tender."
      },
      {
       "term": "Detailed design",
       "def": "The design stage that completes the calculations, drawings, models, schedules and data sheets needed to procure, fabricate, construct and test, ending with documents issued for construction."
      },
      {
       "term": "Design review",
       "def": "A planned, structured examination of design deliverables at a defined maturity by designers, owner, operator or contractor, with comments logged, resolved and closed."
      },
      {
       "term": "Value engineering",
       "def": "A function-based, structured review that seeks to deliver the required functions at the lowest whole-life cost without compromising performance, safety or quality."
      },
      {
       "term": "HAZOP",
       "def": "Hazard and operability study: a systematic, team-based design review that applies guide words to process parameters for each node of a design to identify deviations, their causes, consequences and safeguards."
      },
      {
       "term": "Design freeze",
       "def": "The agreed point after which a design, or a defined part of it, may be changed only through formal change control with impact assessment."
      },
      {
       "term": "Deliverables register",
       "def": "A controlled list of every design deliverable, such as drawings, calculations, specifications and models, with discipline, revision, planned and actual dates and status, used to plan and measure design progress."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Design matures from concept to FEED to detailed design; skimping on one stage moves uncertainty into the next, where it costs more.",
      "A deliverables register or information delivery plan, with a common data environment, makes design progress and status visible.",
      "Reviews, HAZOP, value engineering, DfMA and carbon decisions add most value before freeze; value engineering keeps functions.",
      "Freezes are staged and tied to procurement; after a freeze, change goes through control rather than being forbidden."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which stage most typically produces P&IDs, equipment data sheets and specifications good enough for an EPC tender?",
       "options": [
        "Concept design",
        "As-built documentation",
        "Detailed design",
        "FEED or basic design"
       ],
       "answer": 3,
       "explain": "FEED defines the facility well enough to estimate and tender an EPC contract. Concept is too early, detailed design follows the award, and as-built records come at the end."
      },
      {
       "q": "In a HAZOP, combining the guide word 'reverse' with the parameter 'flow' is used to:",
       "options": [
        "Calculate the pump's required suction head",
        "Generate a credible deviation for the team to analyse",
        "Set the order of precedence between conflicting standards",
        "Rank options in a multi-criteria analysis"
       ],
       "answer": 1,
       "explain": "Guide word and parameter combinations generate deviations that the team analyses. They are not a calculation, a precedence rule or a scoring method."
      },
      {
       "q": "Which proposal is genuine value engineering rather than cost cutting?",
       "options": [
        "Deleting the standby fire pump to meet the budget",
        "Reducing roof insulation below the design basis",
        "Standardising pump sizes so fewer spares are needed",
        "Removing the second transformer from an N-1 substation"
       ],
       "answer": 2,
       "explain": "Standardisation keeps every function while cutting whole-life cost. The other proposals remove required functions or performance and are cost cutting."
      },
      {
       "q": "What does the deliverables register mainly allow the design manager to do?",
       "options": [
        "Measure design progress and spot blocked deliverables",
        "Value variations submitted by the contractor each month",
        "Assign safety responsibilities on site",
        "Calculate the discount rate for the business case"
       ],
       "answer": 0,
       "explain": "The register tracks status, revisions and dates for every deliverable, making progress and blockages visible. It is not a commercial, safety or financial tool."
      },
      {
       "q": "Why are design freezes often staged and tied to procurement?",
       "options": [
        "Because regulators require one freeze per discipline",
        "Because value engineering is banned after the first freeze",
        "Because orders and foundations depend on frozen data",
        "Because the steering committee meets only at freeze dates"
       ],
       "answer": 2,
       "explain": "Orders need frozen data sheets and foundations need confirmed vendor loads, so freezes follow the logic of procurement. The other reasons are not general rules."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l4",
   "title": "Scope Baseline & Change Control",
   "subtitle": "Protecting the agreed scope while allowing the right changes quickly, visibly and with their full impact understood",
   "minutes": 35,
   "objectives": [
    "Define the scope baseline and explain why it must be formally approved and controlled",
    "Run a change control process with multidisciplinary impact assessment and a change control board",
    "Prevent scope creep using trend notices, configuration management and site discipline"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Once scope is defined and approved it becomes the **scope baseline**: the approved scope statement, WBS and WBS dictionary. Together with the schedule and cost baselines (developed in Schedule and Budget), it is the reference against which progress is measured and changes are judged. A baseline is not a prediction that nothing will change. Engineering projects always change: ground conditions differ, regulations evolve, operators learn and markets move. A baseline simply means that each change is a deliberate decision with known consequences, rather than something that just happens."
    },
    {
     "type": "flow",
     "title": "Change control process",
     "items": [
      {
       "label": "Identify",
       "text": "Anyone may raise a change request or an early trend notice"
      },
      {
       "label": "Log",
       "text": "Register with a unique number, description, originator and reason"
      },
      {
       "label": "Assess impact",
       "text": "Scope, cost, schedule, risk, safety, quality, interfaces and operations"
      },
      {
       "label": "Decide",
       "text": "Approve, reject or defer at the level set by decision rights; the CCB for larger changes"
      },
      {
       "label": "Update baselines",
       "text": "Revise scope documents, schedule, budget, drawings and, where affected, contracts"
      },
      {
       "label": "Implement and communicate",
       "text": "Instruct the work, inform affected parties and update the change log"
      },
      {
       "label": "Close",
       "text": "Verify implementation and capture the actual cost and time"
      }
     ]
    },
    {
     "type": "table",
     "title": "Sources of scope creep on engineering projects and how to control them",
     "head": [
      "Source",
      "Example on site",
      "Control"
     ],
     "rows": [
      [
       "Informal client requests",
       "An owner's director asks the site team to add a mezzanine in the warehouse during a walk-round",
       "Instructions only through designated channels; site teams trained to log requests, not act on them"
      ],
      [
       "Design development beyond intent",
       "Designers add features or higher grades than the basis of design requires",
       "Design reviews check against the basis of design; deviations raised as change requests"
      ],
      [
       "Gold-plating by the team",
       "Engineers specify stainless steel where coated carbon steel meets the requirement",
       "Specification reviews and value engineering against stated requirements"
      ],
      [
       "Unclear battery limits",
       "The contractor assumes the owner will build access roads, and the owner assumes the opposite",
       "Interface register and explicit exclusions in the scope statement"
      ],
      [
       "Accumulated small changes",
       "Dozens of minor layout changes, each below the approval limit, add up to a large overrun",
       "Cumulative change log reviewed monthly, with tolerances applied to the total as well as each item"
      ],
      [
       "Regulatory or stakeholder demands",
       "New fire or drainage requirements raised during the permit process",
       "Track permit conditions and treat them as changes with impact assessment rather than absorbing them silently"
      ]
     ]
    },
    {
     "type": "text",
     "text": "An **impact assessment** is the heart of change control. A request to move a switchgear room on a factory extension looks like an architectural change, yet it may affect cable lengths and voltage drop, fire separation, ventilation, structural openings, cable already on order and the commissioning sequence. A good assessment is done by every affected discipline, considers direct and indirect effects (including disruption to other work and safety during construction), estimates cost and time with a stated confidence and identifies any new risks. Speed matters too: a change that waits weeks for assessment while work continues on the old design creates rework whichever way the decision goes. Where the project manages a carbon budget, include the effect on whole-life carbon. In volatile markets, price changes at current rates and state how long each quotation remains valid."
    },
    {
     "type": "compare",
     "title": "Trend notice, change request and contract variation",
     "columns": [
      {
       "title": "Trend notice",
       "items": [
        "Early warning that a change may be coming",
        "Raised as soon as a potential deviation is spotted, often by engineers or planners",
        "Prompts early assessment and forecast adjustment",
        "Does not approve any work"
       ]
      },
      {
       "title": "Change request",
       "items": [
        "Formal proposal to change an approved baseline",
        "Raised by owner, designer, contractor or project team",
        "Needs impact assessment and a decision at the right level",
        "If approved, baselines are updated"
       ]
      },
      {
       "title": "Contract variation",
       "items": [
        "A change to the work a contractor must perform under its contract",
        "Instructed through the contract's procedure by the authorised party",
        "Valued and paid under the contract's rules (developed in Procure)",
        "Follows an approved change wherever a contract is affected",
        "Called a variation under FIDIC 2017 and, for most owner changes, a compensation event under NEC4"
       ]
      }
     ]
    },
    {
     "type": "sequence",
     "title": "From change request to contract instruction",
     "actors": [
      "Requester",
      "Project manager",
      "Design team",
      "Contractor",
      "Change board"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Change request (logged as CR-14)"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Assess design, safety, interfaces"
      },
      {
       "from": 1,
       "to": 3,
       "label": "Request price and time proposal"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Technical impact and risks",
       "reply": true
      },
      {
       "from": 3,
       "to": 1,
       "label": "Proposal: cost and time",
       "reply": true
      },
      {
       "from": 1,
       "to": 4,
       "label": "Assessment and recommendation"
      },
      {
       "from": 4,
       "to": 1,
       "label": "Approved with conditions",
       "reply": true
      },
      {
       "from": 1,
       "to": 1,
       "label": "Update baselines and change log"
      },
      {
       "from": 1,
       "to": 3,
       "label": "Instruction under the contract"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Decision communicated",
       "reply": true
      }
     ],
     "caption": "The board decides only once both the technical impact and the contractor's price and time are known. The contractor is instructed through the contract's own procedure after the decision, and the baselines are updated so records stay consistent."
    },
    {
     "type": "keypoints",
     "title": "Making a change control board work",
     "items": [
      "Chaired by someone with authority for the decisions in its remit: the project manager or the sponsor, depending on value",
      "Includes engineering, project controls, construction, HSE, operations and commercial representatives",
      "Meets on a regular rhythm, with an urgent route for safety-critical and time-critical changes",
      "Decides only on changes with a completed impact assessment and a clear recommendation",
      "Records decisions, reasons and conditions in the change log and reviews cumulative impact",
      "Escalates changes above its tolerance to the steering committee"
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "title": "Configuration management",
     "text": "**Configuration management** keeps the description of the asset, including requirements, design documents, models, vendor data and the physical installation, consistent and under control as changes occur. It answers questions such as: which revision of this P&ID is current, which approved changes have been incorporated, and does the installed valve match the approved data sheet? It relies on unique identification of items, revision control, a change history linked to approved changes, and audits that compare documents with the built asset. Without it, as-built records drift away from reality, which becomes a safety problem during commissioning and maintenance. Reality capture, such as laser scanning and drone surveys, now makes it practical to compare what was built with the model and the approved revisions, and an operational digital twin is only as trustworthy as this discipline."
    },
    {
     "type": "case",
     "title": "Death by a thousand changes",
     "context": "A hypothetical four-storey hospital block in Chattogram is halfway through construction under a remeasurement contract. The owner's clinical staff have requested more than sixty changes: extra power outlets, relocated hand-wash basins, a revised nurse station, additional medical gas outlets, and conversion of two rooms into isolation rooms with negative pressure. Most were approved one by one by the site engineer because each fell below his limit. The cost report now shows a significant forecast overrun, the MEP subcontractor has asked for more time, and the HVAC designer warns that the isolation rooms need a dedicated exhaust system that has not been designed.",
     "questions": [
      "What went wrong with the change control process?",
      "How should the isolation room change have been handled?",
      "What should the project manager put in place now?"
     ],
     "answer": "Approving changes one by one below a site-level limit hid their cumulative effect: nobody reviewed the total impact on cost, time and building systems, and there is no sign of impact assessment by all affected disciplines. The isolation room conversion was never a minor change; it alters the HVAC concept, room pressure regimes, controls and infection-control requirements and should have gone to the change control board with a full design and cost assessment before any work began. The project manager should now pause further non-essential changes, consolidate approved and pending changes into one log showing cumulative cost and time, commission the HVAC design for the isolation rooms, and set tolerances that apply to cumulative as well as individual changes. A clinical user group with one authorised representative and agreed cut-off dates should channel future requests, and the forecast with options should go to the steering committee."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Small approvals, large total",
     "labels": [
      "M1",
      "M2",
      "M3",
      "M4",
      "M5",
      "M6",
      "M7",
      "M8"
     ],
     "series": [
      {
       "name": "Cumulative approved changes",
       "values": [
        12,
        30,
        55,
        85,
        120,
        160,
        205,
        250
       ]
      },
      {
       "name": "Cumulative change tolerance",
       "values": [
        150,
        150,
        150,
        150,
        150,
        150,
        150,
        150
       ]
      }
     ],
     "yLabel": "USD thousand",
     "caption": "Illustrative figures for a case like the hospital block: every change was below the site engineer's limit, yet the total passes the cumulative tolerance in month 6. Only a cumulative review would have triggered escalation in time."
    },
    {
     "type": "scenario",
     "title": "A verbal request on site",
     "situation": "On a hypothetical garment factory expansion near Chattogram, the owner's production manager asks your site engineer to shift a row of columns by one bay to suit a new sewing-line layout. The steel fabricator has already started cutting the affected beams, and the foundation bolts are cast. The site engineer thinks the change is small and wants to agree it on the spot to keep good relations. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Let the site engineer agree the change to keep the relationship strong, and record it in the change log later.",
       "feedback": "Weak. A column move affects structural design, cast foundation bolts, fabrication and the schedule. Agreeing it informally bypasses impact assessment and decision rights.",
       "best": false
      },
      {
       "text": "Raise a change request with an urgent impact assessment by the structural, fabrication and planning leads, and ask the fabricator to hold cutting of the affected members until the decision.",
       "feedback": "Best. Holding the affected fabrication limits waste while the change is assessed quickly. The production manager's need is taken seriously and the decision is made with its real consequences known.",
       "best": true
      },
      {
       "text": "Refuse the request because the steel design is frozen and changes are not allowed.",
       "feedback": "Weak. A freeze means changes go through control, not that they are forbidden. The new layout may be valuable to the business.",
       "best": false
      },
      {
       "text": "Ask the fabricator to make both the original and revised beams so either can be used.",
       "feedback": "Weak. It wastes steel and money and still leaves the foundation and design questions unanswered.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Review the change log of a project you know, or imagine one for your capstone. How many changes were raised informally first? What was the largest change, and was its full impact, including interfaces and operations, assessed before it was approved?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Scope baseline",
       "def": "The approved version of the scope statement, WBS and WBS dictionary, which can be changed only through formal change control and is the reference for measuring scope performance."
      },
      {
       "term": "Change request",
       "def": "A formal proposal to modify an approved baseline, deliverable or document, recorded and assessed before a decision is taken at the authorised level."
      },
      {
       "term": "Scope creep",
       "def": "The uncontrolled growth of project scope through additions that are not assessed, approved or funded, often through many small informal requests."
      },
      {
       "term": "Impact assessment",
       "def": "The multidisciplinary evaluation of a proposed change's effects on scope, cost, schedule, risk, safety, quality, interfaces and operations, carried out before a decision is taken."
      },
      {
       "term": "Change control board",
       "def": "A formally constituted group with authority to review, approve, reject or defer change requests within defined limits, and to record its decisions and reasons."
      },
      {
       "term": "Configuration management",
       "def": "The discipline of identifying, controlling and auditing the requirements, design documents and physical configuration of an asset so they remain consistent as changes are made."
      },
      {
       "term": "Trend notice",
       "def": "An early-warning record raised when a potential change or deviation is first identified, prompting assessment and forecast updates before a formal change request is needed."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "The scope baseline (scope statement, WBS and WBS dictionary) makes every change a deliberate decision with known consequences.",
      "Raise trend notices early and assess change requests across every affected discipline, including safety, interfaces and carbon.",
      "Decide at the level set by decision rights, update the baselines and instruct contractors only through the contract's procedure.",
      "Track cumulative change against a tolerance, and keep documents, models and the built asset consistent through configuration management."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which set of documents makes up the scope baseline?",
       "options": [
        "The approved scope statement, WBS and WBS dictionary",
        "The charter, the business case and the feasibility study",
        "The contract, drawings and site instructions",
        "The risk register, issue log and lessons register"
       ],
       "answer": 0,
       "explain": "The scope baseline is the approved scope statement with the WBS and WBS dictionary. The other sets are governance, contractual or risk records."
      },
      {
       "q": "Many small changes, each below the approval limit, have together caused a large overrun. Which control would have helped most?",
       "options": [
        "Giving the site engineer a higher individual approval limit",
        "Raising the steering committee's own tolerances",
        "Reviewing cumulative change impact against a tolerance",
        "Holding the kickoff meeting again with the contractor"
       ],
       "answer": 2,
       "explain": "Tolerances on cumulative impact reveal the total effect of many small changes. Higher limits would make the problem worse, and a second kickoff does not control change."
      },
      {
       "q": "A planner notices that revised vendor pump data may enlarge a foundation, but nothing is confirmed yet. What should be raised now?",
       "options": [
        "A contract variation to the civil contractor",
        "A trend notice for early assessment",
        "A formal waiver of the design freeze",
        "A claim in the contractor's final account"
       ],
       "answer": 1,
       "explain": "A trend notice gives early warning so the effect can be assessed and forecasts adjusted. A variation, waiver or claim would be premature before the change is confirmed and approved."
      },
      {
       "q": "Which question is primarily answered by configuration management?",
       "options": [
        "Which contractor offered the lowest tender price for the works?",
        "What is the critical path of the project schedule?",
        "Who is accountable for each WBS element?",
        "Does the installed valve match the approved revision?"
       ],
       "answer": 3,
       "explain": "Configuration management keeps documents and the physical asset consistent. Tender prices, critical paths and accountability are handled by other processes."
      },
      {
       "q": "Why should a change control board decide only on changes with a completed impact assessment?",
       "options": [
        "Because the board cannot meet more than once a month",
        "Because unassessed decisions undermine the baseline",
        "Because contractors are paid only after the board meets",
        "Because assessments transfer liability to the designer"
       ],
       "answer": 1,
       "explain": "The baseline's value is that every change is a deliberate decision with known effects. The other reasons are not why impact assessment is required."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m3",
 "order": 3,
 "code": "Schedule",
 "title": "Scheduling: CPM, PERT, Levelling & Crashing",
 "subtitle": "Turn the WBS into a logic-driven, resourced and defensible programme that shows where time really matters",
 "outcomes": [
  "Build a logic-linked activity network with correct relationship types, lags, calendars, milestones and a minimum of constraints",
  "Calculate early and late dates, total float and free float by hand and identify critical and near-critical paths",
  "Apply three-point estimating and PERT to state the probability of meeting a target date, and explain merge bias",
  "Load, smooth and level resources such as cranes and specialist crews and judge the effect on float and the critical path",
  "Compress, update and health-check a schedule using crashing, fast-tracking, look-ahead planning and progress updates"
 ],
 "lessons": [
  {
   "id": "m3-l1",
   "title": "Activities, Logic & Networks",
   "subtitle": "From work packages to a logic-linked network that behaves like the real site",
   "minutes": 32,
   "objectives": [
    "Define activities from work packages that crews can perform, measure and report",
    "Choose the right relationship type (FS, SS, FF, SF) and use leads and lags responsibly",
    "Apply calendars, constraints, milestones and schedule levels without breaking the logic"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A schedule is a model of how the project team intends to build the works. It is not a bar chart drawn to match a contract date; it is a **network** of activities joined by logic, so that when one piece of work slips the model shows what else moves. The starting point is the WBS developed in Define: each work package is broken down into **activities** that a crew, subcontractor or engineer can actually perform and report on. A well-built network lets the project manager answer the three questions that matter on site every week: what must start next, what is driving completion, and how much room there is before a delay bites."
    },
    {
     "type": "callout",
     "kind": "definition",
     "title": "What makes a good activity",
     "text": "A good activity has a **verb-noun name** a foreman understands ('Pour pile cap PC-07', not 'Concrete'), a **single responsible party**, a start and finish that can be observed on site, and a duration short enough to be measured between updates. A practical rule for construction work is that most activities should last no longer than about two update periods. Each activity belongs to exactly one work package, so that time, cost and progress roll up cleanly to the control accounts used in Budget."
    },
    {
     "type": "tree",
     "title": "From work package to activities (illustrative)",
     "root": {
      "label": "1.2 Transformer bay T1",
      "text": "Work packages from the WBS",
      "children": [
       {
        "label": "1.2.1 Earthworks",
        "children": [
         {
          "label": "Excavate foundation T1",
          "text": "5 d"
         },
         {
          "label": "Blind and set out T1",
          "text": "1 d"
         }
        ]
       },
       {
        "label": "1.2.2 Drainage and oil pit",
        "children": [
         {
          "label": "Build oil containment pit",
          "text": "6 d"
         },
         {
          "label": "Lay drainage to soakaway",
          "text": "3 d"
         }
        ]
       },
       {
        "label": "1.2.3 Foundation T1",
        "children": [
         {
          "label": "Fix rebar and formwork",
          "text": "4 d"
         },
         {
          "label": "Pour transformer foundation T1",
          "text": "3 d"
         },
         {
          "label": "Cure foundation T1",
          "text": "7 d, continuous calendar"
         }
        ]
       },
       {
        "label": "1.2.4 Transformer installation",
        "children": [
         {
          "label": "Transformer T1 delivered",
          "text": "Milestone, 0 d"
         },
         {
          "label": "Set and dress transformer T1",
          "text": "4 d"
         }
        ]
       }
      ]
     },
     "caption": "Each work package breaks into a few verb-noun activities that one crew can perform and report. Notice that curing runs on its own continuous calendar and the delivery is a zero-duration milestone linked into the logic."
    },
    {
     "type": "table",
     "title": "The four logic relationships",
     "head": [
      "Relationship",
      "Meaning",
      "Site example",
      "Use with care"
     ],
     "rows": [
      [
       "Finish-to-start (FS)",
       "Successor cannot start until the predecessor finishes",
       "Complete transformer plinth, then set the transformer on it",
       "The default and clearest link; most links in a good network are FS"
      ],
      [
       "Start-to-start (SS)",
       "Successor cannot start until the predecessor has started, often with a lag",
       "Start laying ducts 2 days after cable-trench excavation starts (SS + 2)",
       "Pair with an FF link so the follower cannot overtake the leader"
      ],
      [
       "Finish-to-finish (FF)",
       "Successor cannot finish until the predecessor finishes",
       "Cable termination finishes 1 day after cable pulling finishes (FF + 1)",
       "Common with SS for overlapping linear work such as pipelines and trenches"
      ],
      [
       "Start-to-finish (SF)",
       "Successor cannot finish until the predecessor starts",
       "Supply from the old feeder cannot end until the new temporary supply has started",
       "Rare and easily misread; many planning standards discourage it"
      ]
     ]
    },
    {
     "type": "text",
     "text": "A **lag** is a delay imposed on a relationship, such as FS + 7 days so that a raft slab gains strength before props are removed. A **lead** is a negative lag that lets a successor start before its predecessor finishes, for example starting cable tray installation in a zone three days before ceiling framing there is complete. Both are legitimate, but both hide work and risk. If the seven days are really curing that needs protection, cube tests and an engineer's release, model them as an activity with its own duration and calendar. Check which calendar a lag runs on: a seven-day curing lag counted on a six-day working calendar silently becomes more than a week of real time."
    },
    {
     "type": "keypoints",
     "title": "Calendars that reflect the real site",
     "items": [
      "**Working-week calendars**: six-day weeks are common on South Asian construction sites, while design offices and overseas factory acceptance tests may run five-day weeks.",
      "**Continuous seven-day calendars** for curing, ground consolidation, cooling, slip-forming and other processes that do not stop at weekends.",
      "**Holiday calendars** for national and religious holidays, such as Eid periods when much of the workforce travels home and productivity drops before and after.",
      "**Weather windows**: monsoon months that limit earthworks, piling platforms and roofing; wind limits for crane lifts and offshore installation.",
      "**Heat and climate**: hot-season work-rest regimes and shifted working hours cut productive time; build them into calendars or productivity rates instead of hoping crews will catch up.",
      "**Shutdown and outage windows** for brownfield work, such as a boiler tie-in permitted only during a planned plant shutdown.",
      "**Resource calendars** for scarce plant, such as a heavy-lift crane available only between two other contracts."
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Constraints are not a substitute for logic",
     "text": "A **date constraint** fixes when an activity may start or finish regardless of logic. Soft constraints such as 'start no earlier than' a confirmed delivery date are reasonable. **Hard constraints** such as 'must finish on' override the network: the software shows the date you typed even when predecessors are late, so float becomes negative or meaningless and the critical path can vanish. Use constraints only for genuine external dates such as a utility connection window, a permit date or a contract key date, and record why each one exists."
    },
    {
     "type": "layers",
     "title": "Levels of schedule (top first)",
     "items": [
      {
       "label": "Level 1: Master summary",
       "parts": [
        "Key milestones and major phases on one page",
        "For sponsors, boards and lenders"
       ]
      },
      {
       "label": "Level 2: Summary programme",
       "parts": [
        "Phases by area, facility or discipline",
        "Management reporting and contract key dates"
       ]
      },
      {
       "label": "Level 3: Project control schedule",
       "parts": [
        "Logic-linked network across engineering, procurement, construction and commissioning",
        "Basis of the critical path, float and baseline"
       ]
      },
      {
       "label": "Level 4: Execution schedule",
       "parts": [
        "Detailed activities per area or subcontract",
        "Often owned by contractors and rolled up into Level 3"
       ]
      },
      {
       "label": "Level 5: Task-level plans",
       "parts": [
        "Day-by-day crew work for the next few weeks",
        "Look-ahead and weekly work plans on site"
       ]
      }
     ]
    },
    {
     "type": "framework",
     "title": "Five rules for a sound network",
     "items": [
      {
       "label": "N1",
       "title": "Every activity has logic",
       "text": "Every activity except the first has at least one predecessor and every activity except the last has at least one successor. Open ends make float meaningless."
      },
      {
       "label": "N2",
       "title": "Logic drives dates",
       "text": "Dates come from relationships and durations, not from typing. Constraints are the documented exception, never the rule."
      },
      {
       "label": "N3",
       "title": "Right link, right lag",
       "text": "Prefer FS links; use SS/FF pairs for overlapping linear work; replace long or unexplained lags with real activities."
      },
      {
       "label": "N4",
       "title": "Durations from quantities",
       "text": "Duration = quantity / (output per crew per day x number of crews). Write the basis down so it can be challenged and updated."
      },
      {
       "label": "N5",
       "title": "Milestones mark decisions",
       "text": "Use zero-duration milestones for contract key dates, permits, major deliveries and handovers, and link them into the logic."
      }
     ]
    },
    {
     "type": "text",
     "text": "Durations should be calculated, not guessed. A hypothetical blockwork package of 1,800 m2 with two gangs, each laying 15 m2 per day, takes 1,800 / (2 x 15) = 60 working days on the site calendar. The same discipline applies to cable pulling in metres per day, pipe welding in inch-diameters per day or steel erection in tonnes per day. Writing the quantity and productivity next to each duration turns arguments about whether 60 days is 'too long' into a useful discussion about crew size, productivity and access. **Milestones**, by contrast, have zero duration: they mark events such as 'transformer delivered to site' or 'sectional completion of the station box' and are linked into the logic so that their dates move when the work driving them moves."
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Digital and offsite inputs to the network",
     "text": "Three changes shape how networks are built today. **4D planning** links model elements to activities so the team can rehearse the sequence and spot clashes in space and time before they happen on site; under the ISO 19650 series the schedule and the model are shared as managed information containers in the common data environment (CDE), so everyone works from the current revision. **Offsite and modular construction** moves work into factories, so production slots, factory acceptance, transport and delivery windows become real activities and milestones. **AI-assisted tools** can propose activities, logic and durations from past schedules in minutes: treat the output as a first draft and have a planner check every link, duration basis and calendar before it is used for control. ISO 21502:2020, the international guidance on project management, treats this planning as part of integrated project control, not a drawing exercise."
    },
    {
     "type": "scenario",
     "title": "Reviewing a contractor's Level 3 schedule",
     "situation": "You are the owner's project manager for a hypothetical extension to a dyeing and finishing unit in Narayanganj. The contractor's planner submits a Level 3 schedule in which 40 of 220 activities carry 'must finish on' constraints matching the dates in the tender programme, and several links have unexplained finish-to-start lags of 10 to 15 days. The schedule shows a tidy critical path through mechanical installation and completion exactly on the contract date. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Accept the schedule as the baseline, because completion matches the contract date, the critical path through mechanical installation is clearly shown and the planner has used the tender dates.",
       "feedback": "Weak. A finish date that matches the contract may simply be the result of the hard constraints. The schedule has not shown that the logic can achieve that date.",
       "best": false
      },
      {
       "text": "Return it with a request to remove unjustified hard constraints, explain or replace the long lags with real activities, and re-run the network so the true critical path and float appear.",
       "feedback": "Best. Logic must drive the dates. Only after constraints and lags are justified can the owner trust the critical path, the float values and any later delay analysis.",
       "best": true
      },
      {
       "text": "Ask the planner to add more detail until the schedule reaches Level 4 for every area, and review the logic only once the extra detail is in place.",
       "feedback": "Weak. More activities built on the same flawed constraints and lags will not fix the problem; they make it harder to see.",
       "best": false
      },
      {
       "text": "Instruct the contractor to accelerate mechanical installation now, because the submitted schedule shows that it is the critical path for the whole project.",
       "feedback": "Premature. The critical path may be an artefact of the constraints, so accelerating it could spend money on the wrong work.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Activity and logic register",
     "purpose": "Records each activity with its duration basis, logic and calendar so that the network can be reviewed and challenged before it is baselined.",
     "columns": [
      "Activity ID",
      "Activity (verb-noun)",
      "WBS code",
      "Duration and basis",
      "Predecessors (type, lag)",
      "Calendar",
      "Responsible party"
     ],
     "example": [
      [
       "SS-C-110",
       "Pour transformer foundation T1",
       "1.2.3",
       "3 d: 45 m3 at 15 m3 per day",
       "SS-C-100 FS",
       "6-day site",
       "Civil subcontractor"
      ],
      [
       "SS-C-120",
       "Cure transformer foundation T1",
       "1.2.3",
       "7 d: specified curing period",
       "SS-C-110 FS",
       "7-day continuous",
       "Civil subcontractor"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Open a schedule from a current or recent project. How many activities carry hard constraints, have open ends or rely on lags longer than five days? For each one, would a real activity or a written reason explain it better?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Precedence diagramming method (PDM)",
       "def": "A way of drawing a schedule network in which activities are boxes (nodes) and arrows show the logic between them, allowing FS, SS, FF and SF relationships with lags. It is the method used by virtually all modern scheduling software."
      },
      {
       "term": "Finish-to-start (FS) relationship",
       "def": "The default logic link: the successor cannot start until the predecessor has finished, for example setting a transformer only after its plinth is complete."
      },
      {
       "term": "Lag",
       "def": "A time delay applied to a logic relationship, such as FS + 7 days for curing. It consumes time but carries no resources or cost, so long lags should be justified or replaced by real activities."
      },
      {
       "term": "Lead (negative lag)",
       "def": "A negative lag that allows a successor to start before its predecessor finishes, such as starting cable tray installation in a zone before ceiling framing there is complete."
      },
      {
       "term": "Hard constraint",
       "def": "An imposed date, such as 'must finish on', that overrides network logic. It can hide the true critical path and should be used only for genuine fixed dates with a recorded reason."
      },
      {
       "term": "Milestone",
       "def": "A zero-duration event marking a significant point such as a contract key date, permit approval, equipment delivery or sectional completion, linked into the logic rather than left floating."
      },
      {
       "term": "Schedule level",
       "def": "The degree of detail in a schedule, from Level 1 (one-page milestone summary) to Level 5 (day-by-day crew tasks), with each level serving a different audience while staying consistent with the others."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Build the schedule as a logic-linked network of verb-noun activities, each tied to one work package and one responsible party.",
      "Prefer FS links, pair SS with FF for overlapping work, and replace long or unexplained lags with real activities.",
      "Calculate durations from quantities and crew output, and put weather, heat, holidays and outage windows into calendars.",
      "Use hard constraints only for genuine external dates, with a written reason: logic, not typed dates, drives the programme.",
      "Treat AI-generated or model-linked schedules as drafts until a planner has checked the logic, durations and calendars."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Duct laying may begin two days after cable-trench excavation begins, but must not finish before the excavation finishes. Which relationship pair models this best?",
       "options": [
        "SS + 2 days, paired with an FF link",
        "FS + 2 days, paired with an SF link",
        "SF + 2 days, paired with an SS link",
        "FF + 2 days, paired with an FS link"
       ],
       "answer": 0,
       "explain": "An SS link with a 2-day lag lets ducting follow excavation closely, and the FF link stops the follower from finishing before the leader. The other pairs either force full sequencing or use SF, which does not describe this situation."
      },
      {
       "q": "Why is a 'must finish on' constraint on an internal activity a concern in a Level 3 control schedule?",
       "options": [
        "It forces the software to add resources so that the constrained date is always achieved",
        "It converts the activity into a milestone with a duration of zero working days",
        "It removes the activity from the critical path calculation for the whole project",
        "It overrides the logic, so float and the critical path may no longer reflect reality"
       ],
       "answer": 3,
       "explain": "Hard constraints fix the date regardless of predecessors, so the network no longer shows the real effect of delays. Scheduling software does not add resources, change durations or simply remove the activity."
      },
      {
       "q": "A cable-pulling package of 9,600 m will be done by three crews, each pulling 400 m per day. What duration should be entered?",
       "options": [
        "6 working days",
        "8 working days",
        "12 working days",
        "24 working days"
       ],
       "answer": 1,
       "explain": "Duration = 9,600 / (3 x 400) = 9,600 / 1,200 = 8 working days. 24 days would be the figure for a single crew, and the other values do not follow from the quantities."
      },
      {
       "q": "Which level of schedule is normally the basis of the critical path and the baseline used for project control?",
       "options": [
        "Level 1 master summary for the board",
        "Level 2 summary programme by facility",
        "Level 3 project control schedule",
        "Level 5 task plans for crews on site"
       ],
       "answer": 2,
       "explain": "The Level 3 schedule is the logic-linked network across all phases and is used for critical path analysis and baselining. Levels 1 and 2 are summaries; Level 5 is too detailed and short-term."
      },
      {
       "q": "A 7-day curing lag is placed between two activities that both use a 6-day site calendar. What is the likely problem?",
       "options": [
        "None, because every scheduling tool counts all lags in calendar days",
        "The lag may count working days, delaying the successor beyond the real curing need",
        "The predecessor's own duration will be reduced by one day to compensate for the lag",
        "The successor will automatically be converted to a continuous 7-day calendar"
       ],
       "answer": 1,
       "explain": "Lags are often counted on a working calendar, so 7 working days on a 6-day calendar stretches beyond 7 real days. Tools differ, so the lag calendar must be checked; durations and successor calendars are not changed automatically."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l2",
   "title": "The Critical Path Method",
   "subtitle": "Forward pass, backward pass, total and free float, worked by hand on a substation job",
   "minutes": 38,
   "objectives": [
    "Perform forward and backward passes to calculate ES, EF, LS and LF",
    "Calculate total float and free float and explain the difference on site",
    "Identify the critical path and manage near-critical paths and negative float"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The **critical path method (CPM)** turns a logic network into dates. A **forward pass** from the start calculates the earliest each activity can start and finish; a **backward pass** from the finish calculates the latest each can start and finish without delaying completion. The difference between the two is **float**, the time an activity can slip. The longest path through the network has the least float and sets the project duration: that is the **critical path**. Engineers who can do this by hand understand what the scheduling software is doing, spot nonsense quickly and can explain the effect of a delay to a client with confidence."
    },
    {
     "type": "steps",
     "title": "CPM by hand",
     "items": [
      {
       "title": "List activities and logic",
       "text": "Record each activity, its duration and its predecessors. Check that the network has a single start and a single finish and no open ends."
      },
      {
       "title": "Forward pass",
       "text": "Give the first activity ES = 0. For every activity EF = ES + duration. Where several predecessors merge, ES is the largest of their EFs."
      },
      {
       "title": "Set the project finish",
       "text": "The largest EF in the network is the project duration. Unless a contract date is imposed, the last activity's LF equals that EF."
      },
      {
       "title": "Backward pass",
       "text": "For every activity LS = LF - duration. Where an activity has several successors, its LF is the smallest of their LSs."
      },
      {
       "title": "Calculate float",
       "text": "Total float = LS - ES (which equals LF - EF). Free float = earliest ES among the successors - EF."
      },
      {
       "title": "Identify critical and near-critical paths",
       "text": "Activities with the lowest total float (zero when the finish is not constrained) form the critical path. Paths with small float are near-critical and need watching."
      }
     ]
    },
    {
     "type": "formula",
     "title": "CPM formulas (zero-based day numbers, FS links)",
     "items": [
      {
       "name": "Early finish",
       "expr": "EF = ES + D",
       "meaning": "D is the duration in working days; the first activity starts at ES = 0, so EF is the end of the last working day."
      },
      {
       "name": "Early start",
       "expr": "ES = max(EF of all predecessors)",
       "meaning": "An activity can start only when its last predecessor has finished."
      },
      {
       "name": "Late finish",
       "expr": "LF = min(LS of all successors)",
       "meaning": "The final activity's LF equals the project finish: its own EF, or an imposed completion date."
      },
      {
       "name": "Late start",
       "expr": "LS = LF - D",
       "meaning": "The latest start that still allows the activity to finish by its late finish."
      },
      {
       "name": "Total float",
       "expr": "TF = LS - ES = LF - EF",
       "meaning": "How long the activity can slip without delaying project completion."
      },
      {
       "name": "Free float",
       "expr": "FF = min(ES of all successors) - EF",
       "meaning": "How long the activity can slip without delaying the early start of any successor."
      },
      {
       "name": "Links with lags",
       "expr": "FS: ES(succ) = EF(pred) + lag; SS: ES(succ) = ES(pred) + lag; FF: EF(succ) = EF(pred) + lag",
       "meaning": "A lead is entered as a negative lag. Apply the largest result where several links drive one activity."
      }
     ]
    },
    {
     "type": "text",
     "text": "Consider a hypothetical extension of a 33/11 kV substation serving an industrial park near Gazipur. Durations are in working days and every link is finish-to-start with no lag. The forward pass gives a project duration of 32 days. Look at activity H, pulling and terminating cables: it has two predecessors, so it cannot start until both the duct work (E, early finish day 13) and the transformer setting (G, early finish day 20) are complete, and its ES is the larger value, 20. On the backward pass, activity A has three successors whose late starts are 3, 10 and 11, so its LF is the smallest of them, 3. Day numbers are zero-based: 'ES = 3' means the activity starts at the end of day 3, that is, on the morning of working day 4. Many software packages display the same dates as day 4."
    },
    {
     "type": "table",
     "title": "Worked example: substation extension (working days, zero-based)",
     "head": [
      "Activity",
      "Dur",
      "Pred.",
      "ES",
      "EF",
      "LS",
      "LF",
      "TF / FF"
     ],
     "rows": [
      [
       "A · Mobilise and set out site",
       "3",
       "-",
       "0",
       "3",
       "0",
       "3",
       "0 / 0"
      ],
      [
       "B · Excavate transformer foundation",
       "5",
       "A",
       "3",
       "8",
       "3",
       "8",
       "0 / 0"
      ],
      [
       "C · Excavate cable trench",
       "4",
       "A",
       "3",
       "7",
       "10",
       "14",
       "7 / 0"
      ],
      [
       "D · Construct and cure transformer foundation",
       "8",
       "B",
       "8",
       "16",
       "8",
       "16",
       "0 / 0"
      ],
      [
       "E · Lay ducts and backfill trench",
       "6",
       "C",
       "7",
       "13",
       "14",
       "20",
       "7 / 7"
      ],
      [
       "F · Build control room",
       "10",
       "A",
       "3",
       "13",
       "11",
       "21",
       "8 / 0"
      ],
      [
       "G · Deliver and set transformer",
       "4",
       "D",
       "16",
       "20",
       "16",
       "20",
       "0 / 0"
      ],
      [
       "H · Pull and terminate cables",
       "7",
       "E, G",
       "20",
       "27",
       "20",
       "27",
       "0 / 0"
      ],
      [
       "I · Install control and protection panels",
       "6",
       "F",
       "13",
       "19",
       "21",
       "27",
       "8 / 8"
      ],
      [
       "J · Test and commission",
       "5",
       "H, I",
       "27",
       "32",
       "27",
       "32",
       "0 / 0"
      ]
     ]
    },
    {
     "type": "topology",
     "title": "The substation network as an activity-on-node diagram",
     "nodes": [
      {
       "id": "A",
       "kind": "process",
       "label": "A Mobilise",
       "sub": "3 d · ES 0 · EF 3 · TF 0",
       "x": 0,
       "y": 3
      },
      {
       "id": "B",
       "kind": "process",
       "label": "B Excavate fdn",
       "sub": "5 d · ES 3 · EF 8 · TF 0",
       "x": 1.5,
       "y": 1
      },
      {
       "id": "C",
       "kind": "process",
       "label": "C Cable trench",
       "sub": "4 d · ES 3 · EF 7 · TF 7",
       "x": 1.5,
       "y": 3
      },
      {
       "id": "F",
       "kind": "process",
       "label": "F Control room",
       "sub": "10 d · ES 3 · EF 13 · TF 8",
       "x": 1.5,
       "y": 5
      },
      {
       "id": "D",
       "kind": "process",
       "label": "D Foundation",
       "sub": "8 d · ES 8 · EF 16 · TF 0",
       "x": 3,
       "y": 1
      },
      {
       "id": "E",
       "kind": "process",
       "label": "E Ducts",
       "sub": "6 d · ES 7 · EF 13 · TF 7",
       "x": 3,
       "y": 3
      },
      {
       "id": "I",
       "kind": "process",
       "label": "I C&P panels",
       "sub": "6 d · ES 13 · EF 19 · TF 8",
       "x": 4.5,
       "y": 5
      },
      {
       "id": "G",
       "kind": "process",
       "label": "G Transformer",
       "sub": "4 d · ES 16 · EF 20 · TF 0",
       "x": 4.5,
       "y": 1
      },
      {
       "id": "H",
       "kind": "process",
       "label": "H Pull cables",
       "sub": "7 d · ES 20 · EF 27 · TF 0",
       "x": 6,
       "y": 3
      },
      {
       "id": "J",
       "kind": "process",
       "label": "J Commission",
       "sub": "5 d · ES 27 · EF 32 · TF 0",
       "x": 7,
       "y": 4.5
      }
     ],
     "links": [
      {
       "a": "A",
       "b": "B",
       "style": "bold"
      },
      {
       "a": "B",
       "b": "D",
       "style": "bold"
      },
      {
       "a": "D",
       "b": "G",
       "style": "bold"
      },
      {
       "a": "G",
       "b": "H",
       "style": "bold"
      },
      {
       "a": "H",
       "b": "J",
       "style": "bold"
      },
      {
       "a": "A",
       "b": "C"
      },
      {
       "a": "C",
       "b": "E"
      },
      {
       "a": "E",
       "b": "H"
      },
      {
       "a": "A",
       "b": "F"
      },
      {
       "a": "F",
       "b": "I"
      },
      {
       "a": "I",
       "b": "J"
      }
     ],
     "caption": "Logic runs left to right and every link is finish-to-start. Bold links trace the critical path A-B-D-G-H-J (32 days, zero float); H waits for both E and G, and J for both H and I."
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Reading the result",
     "text": "Three paths run from A to J. **A-B-D-G-H-J** = 3 + 5 + 8 + 4 + 7 + 5 = 32 days: the critical path, zero float. **A-C-E-H-J** = 3 + 4 + 6 + 7 + 5 = 25 days: 7 days of float. **A-F-I-J** = 3 + 10 + 6 + 5 = 24 days: 8 days of float. Notice that C has 7 days of total float but **zero free float**: any slip in C immediately delays E, although completion is safe until the shared 7 days are used up. C and E share the same float, so if C uses 4 days, E has only 3 left. Free float sits at the end of a path, just before the merge point: E (7) and I (8)."
    },
    {
     "type": "compare",
     "title": "Total float vs free float",
     "columns": [
      {
       "title": "Total float",
       "items": [
        "Slip possible without delaying project completion",
        "Shared along a path: whatever one activity uses, the others lose",
        "The basis for identifying critical and near-critical paths",
        "Becomes negative when an imposed date is earlier than the date the network can achieve"
       ]
      },
      {
       "title": "Free float",
       "items": [
        "Slip possible without delaying the early start of any successor",
        "Belongs to the activity: using it harms no other activity",
        "Usually found on the last activity of a path before a merge point",
        "Never greater than total float for the same activity"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Negative float and who owns float",
     "text": "If a contract requires completion on day 30 but the network calculates day 32, setting the final LF to 30 gives every activity on the critical path **negative float** of -2: the plan cannot meet the date and time must be recovered, as shown in the compression lesson of this module. Float ownership is a contract question, developed in Procure: some contracts treat float as a shared project resource, others reserve it to one party. Agree the rule before the first delay, not after it."
    },
    {
     "type": "keypoints",
     "title": "Managing near-critical paths",
     "items": [
      "Set a threshold, for example total float of 10 working days or less, and report those paths alongside the critical path every month.",
      "A near-critical path that carries long equipment deliveries, utility connections or permits can become critical overnight.",
      "Watch **float erosion**: a path whose float falls from 15 to 5 days over three updates is a warning even before it becomes critical.",
      "When several paths are close to critical, the chance of finishing on time falls sharply: the merge bias explained in the PERT lesson.",
      "Longest path and lowest float can differ when calendars or constraints vary, so check both views in the scheduling software."
     ]
    },
    {
     "type": "scenario",
     "title": "A late control room on the substation job",
     "situation": "On the substation extension in the table above, the builder of the control room (activity F) reports that blockwork will finish 6 working days late because of a brick shortage. The client's engineer is worried and asks whether commissioning and completion will now slip. What should the project manager conclude FIRST?",
     "options": [
      {
       "text": "Completion slips by 6 days, because the control room is on a path that leads directly to testing and commissioning.",
       "feedback": "Incorrect. Being on a path to the finish does not make an activity critical. F has 8 days of total float, which absorbs a 6-day slip.",
       "best": false
      },
      {
       "text": "Completion holds, because F has 8 days of total float; but panel installation (I) is pushed back and the path A-F-I-J now has only 2 days of float, so it must be watched closely.",
       "feedback": "Best. The 6-day slip uses most of the shared float on the path, leaving 2 days. Completion is safe, but the path has become near-critical and needs active management.",
       "best": true
      },
      {
       "text": "Completion holds and no further action is needed, because the control room has 8 days of free float of its own that it can use without affecting any other activity or the commissioning date.",
       "feedback": "Incorrect. F's free float is zero: its slip delays I's early start by 6 days. The float that protects completion is shared with I.",
       "best": false
      },
      {
       "text": "Completion slips by 2 days, because the 6-day delay exceeds the free float of the control room activity by exactly that amount.",
       "feedback": "Incorrect. Free float measures the effect on successors, not on completion. Completion depends on total float, which is 8 days here.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "In your current schedule, which three near-critical paths would you report to the sponsor, and what single event on each could turn it critical?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Forward pass",
       "def": "The calculation from project start to finish that gives each activity's early start and early finish, taking the largest predecessor early finish wherever paths merge."
      },
      {
       "term": "Backward pass",
       "def": "The calculation from project finish back to the start that gives each activity's late finish and late start, taking the smallest successor late start wherever paths branch."
      },
      {
       "term": "Total float",
       "def": "The time an activity can be delayed without delaying project completion, calculated as LS - ES or LF - EF. It is shared by the activities on the same path."
      },
      {
       "term": "Free float",
       "def": "The time an activity can be delayed without delaying the early start of any immediate successor, calculated as the earliest successor ES minus the activity's EF."
      },
      {
       "term": "Critical path",
       "def": "The longest sequence of logically linked activities through the network, which sets the shortest possible project duration. Its activities have the lowest total float."
      },
      {
       "term": "Near-critical path",
       "def": "A path whose total float is below a threshold set by the project, so that a modest delay or a realised risk could make it critical."
      },
      {
       "term": "Negative float",
       "def": "Float below zero, which appears when an imposed completion or milestone date is earlier than the date the network can achieve. It shows how much time must be recovered."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Forward pass: ES is the largest predecessor EF at a merge. Backward pass: LF is the smallest successor LS at a burst.",
      "Total float (LS - ES) is shared along a path; free float (earliest successor ES - EF) belongs to the activity alone.",
      "The critical path is the longest path with the lowest float; report near-critical paths and watch float erosion between updates.",
      "Negative float means the logic cannot meet an imposed date: recover the time or report the impact.",
      "Agree who owns float under the contract before the first delay, not after it."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "An activity has ES = 12, a duration of 5 days and LF = 22. What is its total float?",
       "options": [
        "3 days",
        "5 days",
        "10 days",
        "7 days"
       ],
       "answer": 1,
       "explain": "EF = 12 + 5 = 17, so TF = LF - EF = 22 - 17 = 5 days (equivalently LS = 17 and LS - ES = 5). 10 days is LF minus ES, which ignores the duration."
      },
      {
       "q": "Activity K has an early finish of day 14. Its two successors have early starts of day 16 and day 19. What is K's free float?",
       "options": [
        "5 days",
        "0 days",
        "2 days",
        "3 days"
       ],
       "answer": 2,
       "explain": "Free float = earliest successor ES - EF = 16 - 14 = 2 days. Using the later successor (19) would overstate it, because K would then delay the first successor."
      },
      {
       "q": "In a forward pass, an activity has three FS predecessors with early finishes of day 9, day 14 and day 11. What is its early start?",
       "options": [
        "Day 9",
        "Day 11",
        "Day 34",
        "Day 14"
       ],
       "answer": 3,
       "explain": "An activity can start only when all predecessors are finished, so ES is the largest predecessor EF: day 14. Taking the smallest or adding them up does not reflect the logic."
      },
      {
       "q": "Why can using up the total float of one activity harm another activity?",
       "options": [
        "Total float is shared along a path, so other activities on that path lose it",
        "Total float is converted into a lag on the successor's logic relationship",
        "Scheduling software deletes all remaining float once an activity has started",
        "Total float always equals free float for every activity in a network"
       ],
       "answer": 0,
       "explain": "Total float belongs to the path, not the activity. Software does not convert or delete it, and total and free float are often different, as C and E in the worked example show."
      },
      {
       "q": "A contract requires completion by day 60, but the forward pass gives day 64. If the final LF is set to day 60, the critical activities will show:",
       "options": [
        "Total float of +4 days",
        "Total float of -4 days",
        "Free float of -4 days on the last activity only",
        "Zero float, because critical paths always show zero"
       ],
       "answer": 1,
       "explain": "With LF = 60 and EF = 64 on the critical path, TF = LF - EF = -4 days, which signals that 4 days must be recovered. Critical paths show zero float only when the finish is unconstrained."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l3",
   "title": "PERT & Three-Point Estimating",
   "subtitle": "Turn uncertain durations into a probability of meeting the date, and know where PERT misleads",
   "minutes": 36,
   "objectives": [
    "Calculate beta (PERT) and triangular means and the PERT standard deviation from three-point estimates",
    "Combine activity variances along a path and use z to find the probability of meeting a target date",
    "Explain merge bias and the other limitations of PERT and when a fuller risk analysis is needed"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Single-point durations hide uncertainty. Bored piling may take 15 days if the ground matches the site investigation, or 24 if the rig meets boulders and casing problems. **Three-point estimating** asks for an optimistic (O), most likely (M) and pessimistic (P) duration, which gives both a better mean and a measure of spread. The **Program Evaluation and Review Technique (PERT)** treats each activity as following a beta distribution, then adds means and variances along the critical path to estimate the probability of finishing by a target date. It is a quick, hand-calculable cousin of the full schedule risk analysis developed in Protect."
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Getting honest three-point estimates",
     "text": "Ask for the pessimistic value first ('what could realistically go wrong?'), then the optimistic, and only then the most likely, so that M is not anchored on a hopeful first number. O and P should be rare but credible outcomes, not physical impossibilities or catastrophes. Ask the people who will do the work, and record the drivers behind P, such as rock at pile toe level, monsoon rain, crane breakdown or late shop drawings, because they belong in the risk register too."
    },
    {
     "type": "formula",
     "title": "PERT and three-point formulas",
     "items": [
      {
       "name": "PERT (beta) mean",
       "expr": "te = (O + 4M + P) / 6",
       "meaning": "Weighted mean duration: the most likely value carries four times the weight of each extreme."
      },
      {
       "name": "Triangular mean",
       "expr": "tm = (O + M + P) / 3",
       "meaning": "Simple average of the three points; it gives more weight to the tails, so with right-skewed estimates it is higher than the PERT mean."
      },
      {
       "name": "Activity standard deviation (PERT)",
       "expr": "sigma = (P - O) / 6",
       "meaning": "Approximate spread: the range from O to P is treated as about six standard deviations."
      },
      {
       "name": "Activity variance",
       "expr": "variance = sigma^2 = ((P - O) / 6)^2",
       "meaning": "Variances, not standard deviations, are what can be added along a path."
      },
      {
       "name": "Path mean",
       "expr": "Te = sum of te for the activities on the path",
       "meaning": "Expected duration of the critical path."
      },
      {
       "name": "Path standard deviation",
       "expr": "sigma_path = square root of (sum of activity variances on the path)",
       "meaning": "Assumes the activity durations are independent of each other."
      },
      {
       "name": "Probability of meeting a target",
       "expr": "z = (T - Te) / sigma_path",
       "meaning": "Look up z in a standard normal table: P(finish by T) is the area to the left of z."
      },
      {
       "name": "Date for a chosen confidence",
       "expr": "T = Te + z x sigma_path",
       "meaning": "For example z = 1.28 gives about 90% confidence and z = 1.645 about 95%."
      }
     ]
    },
    {
     "type": "text",
     "text": "A hypothetical contractor is building one four-span segment of an elevated metro viaduct. The critical path for the segment runs through bored piling, pile caps, pier columns and girder erection. The team's three-point estimates in working days are shown below. Girder erection is strongly skewed to the right: launching can go well, but crane availability, night-time possession windows and wind limits can stretch it a long way. Notice that the sum of the most likely durations is 15 + 8 + 13 + 15 = 51 days, while the PERT mean of the path is 56 days: the long pessimistic tails add five days of expected time that a single-point plan would miss."
    },
    {
     "type": "table",
     "title": "Worked example: three-point estimates on the critical path (working days)",
     "head": [
      "Activity",
      "O",
      "M",
      "P",
      "te = (O + 4M + P) / 6",
      "sigma = (P - O) / 6",
      "Variance"
     ],
     "rows": [
      [
       "Bored piling",
       "12",
       "15",
       "24",
       "16.0",
       "2.0",
       "4.0"
      ],
      [
       "Pile caps",
       "5",
       "8",
       "11",
       "8.0",
       "1.0",
       "1.0"
      ],
      [
       "Pier columns",
       "10",
       "13",
       "22",
       "14.0",
       "2.0",
       "4.0"
      ],
      [
       "Girder erection",
       "12",
       "15",
       "36",
       "18.0",
       "4.0",
       "16.0"
      ],
      [
       "Path total",
       "-",
       "51 (sum of M)",
       "-",
       "56.0",
       "square root of 25 = 5.0",
       "25.0"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Probability of finishing by day 60",
     "text": "Path mean Te = 56 days and path standard deviation = 5 days (the square root of the summed variance of 25; adding the four sigmas instead would wrongly give 9). For a target of 60 days, z = (60 - 56) / 5 = 0.8 and the standard normal table gives about 0.79, roughly a **79%** chance. For 52 days, z = -0.8 and the chance is about 21%. A plan built on the most likely values, 51 days, has z = (51 - 56) / 5 = -1.0, only about a **16%** chance. To be about 95% confident, T = 56 + 1.645 x 5 = 64.2 days, so the team would commit to 65 working days."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Confidence of finishing the viaduct segment by day T",
     "labels": [
      "Day 51",
      "Day 52",
      "Day 54",
      "Day 56",
      "Day 58",
      "Day 60",
      "Day 62",
      "Day 64",
      "Day 66"
     ],
     "series": [
      {
       "name": "Probability of finishing by T",
       "values": [
        16,
        21,
        34,
        50,
        66,
        79,
        88,
        95,
        98
       ]
      }
     ],
     "unit": "%",
     "yLabel": "Probability",
     "caption": "Normal approximation for the hypothetical worked example (Te = 56, sigma = 5 days). The most likely plan of 51 days has only about a 16% chance, and moving from about 80% to 95% confidence costs another four days."
    },
    {
     "type": "table",
     "title": "Useful standard normal values",
     "head": [
      "z",
      "Probability of finishing by T",
      "How it is typically read"
     ],
     "rows": [
      [
       "-1.0",
       "about 16%",
       "A date one standard deviation earlier than the mean: very unlikely to be met"
      ],
      [
       "0",
       "50%",
       "The mean date: a coin toss"
      ],
      [
       "0.8",
       "about 79%",
       "The 60-day target in the worked example"
      ],
      [
       "1.0",
       "about 84%",
       "A reasonably confident internal target"
      ],
      [
       "1.28",
       "about 90%",
       "A high-confidence (P90) commitment"
      ],
      [
       "1.645",
       "about 95%",
       "Very high confidence, at the price of a large time buffer"
      ]
     ]
    },
    {
     "type": "compare",
     "title": "Beta (PERT) mean vs triangular mean",
     "columns": [
      {
       "title": "Beta (PERT)",
       "items": [
        "Mean = (O + 4M + P) / 6",
        "Weights the most likely value heavily",
        "Mean sits closer to M and is less sensitive to an extreme P",
        "Traditional for hand calculations and quick checks",
        "Girder erection: (12 + 60 + 36) / 6 = 18 days"
       ]
      },
      {
       "title": "Triangular",
       "items": [
        "Mean = (O + M + P) / 3",
        "Weights all three points equally",
        "Mean is pulled further towards a long tail",
        "A common input shape in simulation-based risk tools",
        "Girder erection: (12 + 15 + 36) / 3 = 21 days"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "PERT's biggest weakness is that it looks only at the critical path. Where two or more paths merge, the successor can start only when **all** of them have finished, so for independent paths the probability of an on-time start is the product of the individual probabilities. If two independent paths each have a 50% chance of finishing by day 40, the chance that both are done by day 40 is 0.5 x 0.5 = 25%; with three such paths it falls to 12.5%. This is **merge bias**: projects with many near-critical paths finish later than a critical-path PERT calculation suggests. A Monte Carlo schedule risk analysis, covered in Protect, captures the effect by simulating every path together."
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Merge bias: chance that every parallel path is finished on time",
     "labels": [
      "1 path",
      "2 paths",
      "3 paths",
      "4 paths"
     ],
     "series": [
      {
       "name": "Each path 50% likely",
       "values": [
        50,
        25,
        12.5,
        6.25
       ]
      },
      {
       "name": "Each path 80% likely",
       "values": [
        80,
        64,
        51.2,
        41
       ]
      }
     ],
     "unit": "%",
     "caption": "Illustrative, assuming independent paths: the joint chance is the product of the individual chances. Even paths that are each 80% likely give only about a 41% chance when four of them feed one milestone."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Limitations of PERT",
     "text": "PERT assumes activity durations are independent, but monsoon rain, a late design package or a shared crane affects many activities at once, so real variance is larger than PERT shows. It assumes the critical path stays critical, ignores merge bias, and relies on a normal approximation that is shaky when a path has only a handful of activities. Its answers are also only as good as the O and P values people are willing to state. Treat PERT probabilities as a disciplined estimate for discussion, not a guarantee."
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Beyond hand PERT",
     "text": "On major projects the hand calculation is a sense check for a **Monte Carlo schedule risk analysis** of the whole network, which models every path, correlation between activities and discrete risk events together. Owners and lenders commonly ask for P50 and P80 (sometimes P90) dates, so always state which confidence level a committed date represents. Some tools now suggest duration ranges from historical project data: use them as a reference class, adjust them for this site's ground, method and supply chain, and keep a named planner accountable for the inputs. Ranges for long-lead equipment such as power transformers and switchgear should reflect current supplier lead times, which have been volatile in recent years, not figures copied from an old programme."
    },
    {
     "type": "case",
     "title": "Committing to a girder launching date",
     "context": "A hypothetical contractor on an elevated metro extension must give the client a committed date for completing deck erection on a ten-span section, because a station fit-out contractor depends on it. The planner's critical path through piling, pile caps, piers, pier heads and girder launching gives a PERT mean of 140 working days with a path standard deviation of 8 days. A parallel path for a river-crossing span, with its own temporary works, has a mean of 132 days and a standard deviation of 10 days, and both paths must finish before the deck is complete. The commercial manager wants to commit to 140 days to look competitive.",
     "questions": [
      "What is the probability of meeting 140 days on the critical path alone?",
      "What does the parallel river-crossing path do to that probability?",
      "What date would you recommend committing to, and how would you justify it?"
     ],
     "answer": "On the critical path alone, 140 days is the mean, so z = 0 and the chance is only about 50%. The river-crossing path has z = (140 - 132) / 10 = 0.8, about 79%, so if the paths are independent the chance that both finish by day 140 is roughly 0.50 x 0.79, about 39%: merge bias makes the commitment worse than it looks. At 152 days the critical path has z = 12 / 8 = 1.5 (about 93%) and the river path z = 2.0 (about 98%), giving a combined chance of roughly 91%. A sensible recommendation is to commit to about 152 days, explain the merge effect to the commercial manager, and use the gap to plan responses such as extended possession windows or a second launching crew. The commitment should then be confirmed with a full schedule risk analysis that models correlation between the paths."
    },
    {
     "type": "scenario",
     "title": "A subcontractor who will not give a range",
     "situation": "A marine piling subcontractor on a hypothetical LNG terminal jetty gives the planner a single duration of 30 days and refuses to discuss ranges, saying 'that is our number'. The geotechnical report shows variable rock levels along the jetty line, and the piling sits on the critical path. The sponsor wants a stated confidence level for the jetty completion milestone. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Treat 30 days as the most likely value and add and subtract a standard 10% to create an optimistic and a pessimistic value for the PERT calculation.",
       "feedback": "Weak. A fixed percentage ignores the actual ground risk and produces a narrow, symmetrical range that understates the danger.",
       "best": false
      },
      {
       "text": "Hold a short estimating session with the subcontractor, the geotechnical engineer and the planner to agree O, M and P with their drivers, then calculate te and sigma for the path.",
       "feedback": "Best. Three-point values based on the real drivers (rock levels, weather, rig performance) give an honest mean and spread, and the session builds shared ownership of the range.",
       "best": true
      },
      {
       "text": "Replace the subcontractor's figure with a triangular mean based on a range that the planner chooses alone from previous jetty projects in other countries, without involving the subcontractor.",
       "feedback": "Weak. The planner's own range may be useful as a check, but excluding the people who will do the work loses their knowledge of the method and equipment.",
       "best": false
      },
      {
       "text": "Report a 50% confidence level for the milestone, because a single-point estimate always represents the median of the duration distribution.",
       "feedback": "Incorrect. A single number may be optimistic, pessimistic or anywhere in between; nothing guarantees it is the median.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Choose one critical activity on your project and write down O, M and P with a reason for each. How far apart are the PERT and triangular means, and what does that gap tell you about the risk in the activity?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Program Evaluation and Review Technique (PERT)",
       "def": "A network scheduling technique that uses optimistic, most likely and pessimistic durations, a beta-distribution approximation and path variances to estimate the probability of meeting a target date."
      },
      {
       "term": "Three-point estimate",
       "def": "A duration or cost estimate expressed as optimistic, most likely and pessimistic values, so that both the expected value and the uncertainty can be calculated."
      },
      {
       "term": "PERT (beta) mean",
       "def": "The expected activity duration (O + 4M + P) / 6, which gives the most likely value four times the weight of each extreme."
      },
      {
       "term": "Triangular mean",
       "def": "The expected duration (O + M + P) / 3 under a triangular distribution; it weights the extremes more heavily than the PERT mean."
      },
      {
       "term": "PERT standard deviation",
       "def": "The approximate spread of an activity duration, (P - O) / 6, treating the optimistic-to-pessimistic range as about six standard deviations."
      },
      {
       "term": "Path variance",
       "def": "The sum of the variances of the activities on a path, from which the path standard deviation is the square root; it assumes the activities are independent."
      },
      {
       "term": "Merge bias",
       "def": "The tendency for a milestone fed by several parallel paths to finish later than any single path suggests, because every incoming path must finish before the milestone is reached."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "PERT mean = (O + 4M + P) / 6 and sigma = (P - O) / 6; add variances, not standard deviations, along a path.",
      "z = (T - Te) / sigma_path turns a target date into a probability; commit to a stated confidence such as P80 or P90.",
      "A plan built on most likely durations is usually optimistic when risks are skewed to the right.",
      "Merge bias and correlated risks make the real chance lower than a single-path PERT result; use a Monte Carlo analysis for commitments that matter."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A critical activity has O = 4, M = 7 and P = 16 days. What is its PERT mean duration?",
       "options": [
        "7 days",
        "9 days",
        "8 days",
        "9.5 days"
       ],
       "answer": 2,
       "explain": "te = (4 + 4 x 7 + 16) / 6 = 48 / 6 = 8 days. 9 days is the triangular mean (27 / 3) and 7 days is simply the most likely value."
      },
      {
       "q": "For the same activity (O = 4, M = 7, P = 16), what is the PERT standard deviation?",
       "options": [
        "2 days",
        "4 days",
        "12 days",
        "1.5 days"
       ],
       "answer": 0,
       "explain": "sigma = (P - O) / 6 = (16 - 4) / 6 = 2 days. 12 days is the full range, and the variance would be 4 days squared, not a standard deviation."
      },
      {
       "q": "Three critical activities have variances of 4, 9 and 3 (days squared). What is the path standard deviation?",
       "options": [
        "16 days",
        "about 6.7 days",
        "8 days",
        "4 days"
       ],
       "answer": 3,
       "explain": "Add the variances (4 + 9 + 3 = 16) and take the square root: 4 days. Adding the individual standard deviations (2 + 3 + 1.73 = about 6.7) is a common mistake."
      },
      {
       "q": "A path has a PERT mean of 90 days and a standard deviation of 6 days. Roughly what is the chance of finishing within 96 days?",
       "options": [
        "About 50%",
        "About 84%",
        "About 69%",
        "About 98%"
       ],
       "answer": 1,
       "explain": "z = (96 - 90) / 6 = 1.0, and the standard normal table gives about 84%. 50% would apply at the mean, 69% at z = 0.5 and about 98% at z = 2."
      },
      {
       "q": "Why do projects with several parallel near-critical paths tend to finish later than a critical-path PERT calculation predicts?",
       "options": [
        "Parallel paths always have larger variances than the critical path does",
        "Scheduling software ignores all parallel paths when calculating the critical path",
        "Merge points need every incoming path to finish, so the probabilities multiply",
        "The beta distribution cannot be applied to activities that are not critical"
       ],
       "answer": 2,
       "explain": "At a merge point every incoming path must be complete, so on-time probabilities multiply and the overall chance falls. The other statements are false: variances vary, software does calculate all paths, and PERT can be applied to any activity."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l4",
   "title": "Resource Loading, Levelling & Smoothing",
   "subtitle": "Cranes, specialist crews and work-face space: making the logic network buildable",
   "minutes": 34,
   "objectives": [
    "Load resources onto a schedule and read a resource histogram",
    "Distinguish resource levelling from resource smoothing and apply each appropriately",
    "Judge how resource constraints change float and the critical path"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A logic network quietly assumes unlimited resources. Real sites have one tower crane, two crews of coded welders, a single team of protection-relay testers and a laydown area that holds steel for only one zone at a time. **Resource loading** assigns the labour, plant and specialist crews each activity needs; when the loaded schedule demands more than is available on some days, the programme is not achievable as drawn. Resource planning turns a theoretical CPM schedule into one the site can actually work to, and it often changes which activities are critical."
    },
    {
     "type": "table",
     "title": "Resources that constrain engineering projects",
     "head": [
      "Resource",
      "Why it constrains",
      "Planning response"
     ],
     "rows": [
      [
       "Cranes and heavy-lift plant",
       "Few units, long mobilisation, wind and ground-bearing limits; one hook serves many trades",
       "Plan by hook time, prepare lift plans, give heavy-lift windows their own resource calendar"
      ],
      [
       "Specialist crews (coded welders, relay testers, refractory installers, commissioning engineers)",
       "Small pool, often shared across projects or brought from abroad; visas and qualifications take time",
       "Book early, give the crew continuous work, avoid stop-start sequences"
      ],
      [
       "General labour and trades",
       "Seasonal availability, festival periods, productivity loss in heat and congestion",
       "Histogram by trade, realistic ramp-up and ramp-down, welfare facilities sized for the peak"
      ],
      [
       "Work-face space and access",
       "Too many crews in one area cut productivity and raise safety risk",
       "Zone-based sequencing, limits on trade density, access and laydown plans"
      ],
      [
       "Formwork, falsework and temporary works",
       "Limited sets of formwork, props or launching gantries cycle through the job",
       "Model as resources; plan cycle times and reuse between zones"
      ],
      [
       "Owner resources and outages",
       "Shutdown windows, permit issuers and owner's operators needed for tie-ins",
       "Agree calendars with operations and protect the windows in the schedule"
      ]
     ]
    },
    {
     "type": "text",
     "text": "A **resource histogram** plots the quantity of a resource needed in each period, usually first from the early-start schedule. Peaks show where demand exceeds availability; deep valleys show crews standing idle or being demobilised and remobilised, which costs money and wastes the learning a crew has built up. A good labour histogram for a building or plant job rises steadily, holds a reasonably flat plateau through the main construction phase and falls away through commissioning. Sharp spikes are a sign that the schedule needs work even before availability is checked."
    },
    {
     "type": "table",
     "title": "Worked example: one tower crane, three lifting activities (hypothetical garment factory expansion)",
     "head": [
      "Activity",
      "Duration (days)",
      "Cranes needed",
      "Total float (days)",
      "Early-start days",
      "Smoothed days",
      "Float left"
     ],
     "rows": [
      [
       "P: Erect roof trusses, zone 1",
       "4",
       "1",
       "0",
       "1-4",
       "1-4",
       "0"
      ],
      [
       "Q: Install precast stair cores",
       "3",
       "1",
       "5",
       "1-3",
       "5-7",
       "1"
      ],
      [
       "R: Lift rooftop chiller units",
       "2",
       "1",
       "8",
       "1-2",
       "8-9",
       "1"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Smoothing, then levelling",
     "text": "On early starts the site would need 3 cranes on days 1-2, 2 on day 3 and 1 on day 4, then none. Moving Q by 4 days and R by 7 days, both within their float, gives exactly 1 crane every day from day 1 to day 9 and leaves completion unchanged: that is **smoothing**, and it has used most of the float. Now suppose R had only 4 days of total float. Delaying R by 7 days would then push completion back by 3 days. Re-sequencing helps: lift R on days 5-6 (using all 4 of its float) and install Q on days 7-9 (6 days late against 5 days of float), and completion slips by only 1 day. Accepting a later finish because the crane limit is fixed is **levelling**, and choosing the best sequence is a planning judgement, not something to leave to a software rule."
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Tower crane demand before and after smoothing",
     "labels": [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7",
      "Day 8",
      "Day 9"
     ],
     "series": [
      {
       "name": "Early-start schedule",
       "values": [
        3,
        3,
        2,
        1,
        0,
        0,
        0,
        0,
        0
       ]
      },
      {
       "name": "Smoothed schedule",
       "values": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
       ]
      }
     ],
     "yLabel": "Cranes needed",
     "caption": "From the hypothetical worked example: early starts need three cranes on days 1-2 against one available. Moving Q and R within their float holds demand at one crane every day without moving completion."
    },
    {
     "type": "compare",
     "title": "Resource levelling vs resource smoothing",
     "columns": [
      {
       "title": "Resource levelling",
       "items": [
        "The resource limit is fixed; the end date may move",
        "Used when the resource genuinely cannot be increased, such as one heavy-lift crane or one shutdown crew",
        "Can lengthen the project and create a resource-driven critical path",
        "Software delays lower-priority activities using priority rules",
        "Results must be reviewed, because rules can make odd choices"
       ]
      },
      {
       "title": "Resource smoothing",
       "items": [
        "The end date is fixed; activities move only within their float",
        "Used to cut peaks and valleys for efficiency, cost and safety",
        "Does not change the project duration, but consumes float",
        "May not remove every over-allocation",
        "Leaves less float to absorb future delays"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "What levelling does to the critical path",
     "text": "After levelling, an activity can become critical not because of logic but because it is waiting for a resource. Scheduling software may represent this with resource-driven links that do not appear in the logic diagram, so the critical path can look broken. Make the reason visible: either add a documented resource relationship or report a **resource-constrained critical path** that names the crane, crew or outage window driving it. Remember that smoothing consumes float: the plan becomes more efficient but also more fragile."
    },
    {
     "type": "matrix",
     "title": "Choosing a response to a resource clash",
     "x": "Float on the clashing work",
     "y": "Ability to add more of the resource",
     "quadrants": [
      {
       "title": "Add resource or crash",
       "items": [
        "Second crane or crew if cheaper than the delay",
        "Check work-face space and supervision first"
       ]
      },
      {
       "title": "Smooth first, add only if cheap",
       "items": [
        "Move work within its float",
        "Add resource only if the float is needed for risk"
       ]
      },
      {
       "title": "Level and re-sequence",
       "items": [
        "Accept a resource-driven date or change the method",
        "Night lifts, offsite assembly or a new sequence",
        "Report the resource-constrained critical path"
       ]
      },
      {
       "title": "Smooth within float",
       "items": [
        "Delay non-critical work to fit the limit",
        "Record the float consumed"
       ]
      }
     ],
     "caption": "Ask two questions: how much float does the clashing work have, and can the resource really be increased? Clashes in the right-hand column are usually solved by smoothing; the bottom-left quadrant is true levelling."
    },
    {
     "type": "flow",
     "title": "From logic to a resource-feasible programme",
     "items": [
      {
       "label": "Load",
       "text": "Assign labour, plant and specialist crews to each activity"
      },
      {
       "label": "Plot",
       "text": "Produce a histogram per key resource from the early-start schedule"
      },
      {
       "label": "Compare",
       "text": "Overlay availability and find over-allocations and idle periods"
      },
      {
       "label": "Smooth",
       "text": "Move non-critical work within its float to cut peaks"
      },
      {
       "label": "Level",
       "text": "Where limits remain, re-sequence or delay work and accept the date effect"
      },
      {
       "label": "Review",
       "text": "Check the new critical path, float and risks, then agree and baseline"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Planning around the crane",
     "text": "On congested sites the tower crane is often the real critical resource. Plan by **hook time**: list every lift by zone and day, give priority to lifts that release other trades (formwork panels, reinforcement cages, steel members), move small-item handling to hoists, telehandlers or permitted night shifts, and keep heavy-lift days clear of competing work. Wind-speed limits, lift plans and exclusion zones, developed in Protect, belong in the same plan as the crane schedule."
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Offsite work, heat and crowded work fronts",
     "text": "**Modern methods of construction** such as precast frames, volumetric modules and pre-assembled pipe racks move labour off site. The site labour histogram flattens, but demand concentrates on crane hook time, delivery slots and laydown space, and factory capacity and transport become resources to plan. **Heat stress** in the hot season brings work-rest regimes and earlier shifts that cut productive hours, so histograms based on cool-season output overstate capacity. Limiting trade density at a work face is a **safety control** as well as a productivity measure, and leaders who set and enforce those limits prevent the congestion behind many incidents. Optimisation and AI-assisted levelling tools can test many sequences quickly, but their priority rules still need a planner's review."
    },
    {
     "type": "template",
     "title": "Weekly resource loading sheet",
     "purpose": "Compares weekly demand for each constrained resource with what is available and records the action taken to close any gap.",
     "columns": [
      "Week",
      "Resource (trade, crew or plant)",
      "Activities using it",
      "Required",
      "Available",
      "Over (+) / under (-)",
      "Action and owner"
     ],
     "example": [
      [
       "Wk 14",
       "Tower crane TC-1 (hook days)",
       "Roof trusses zone 1; precast stairs; chiller lift",
       "9",
       "6",
       "+3",
       "Move chiller lift to a permitted night shift; planner"
      ],
      [
       "Wk 14",
       "Coded pipe welders",
       "Boiler feed-water piping; steam header tie-ins",
       "10",
       "8",
       "+2",
       "Release 2 welders from utility rack work; mechanical lead"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "title": "One crane, two lifts",
     "situation": "On a hypothetical 100 MW solar park, a single mobile crane is on site. Setting the main power transformer in the project substation is critical with zero float; lifting the containerised inverter skids across the array has 15 days of total float. Both are planned for the same three days, and the crane supplier offers a second crane at short notice for a premium. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Hire the second crane immediately, so that both the transformer setting and the inverter lifts can keep their early-start dates.",
       "feedback": "Weak. It spends money that is not needed: the inverter lifts have ample float and can simply move.",
       "best": false
      },
      {
       "text": "Give the crane to the inverter lifts first, because they involve more units, more lifts and a larger share of the array's value.",
       "feedback": "Incorrect. Delaying the zero-float transformer setting delays project completion, whatever the value of the inverters.",
       "best": false
      },
      {
       "text": "Split each day's crane time between the two activities, so that neither the transformer setting nor the inverter lifting is completely stopped while the crane is shared.",
       "feedback": "Weak. Sharing the crane stretches the critical transformer setting and therefore delays completion, while also making both lifts less efficient.",
       "best": false
      },
      {
       "text": "Allocate the crane to the transformer setting, move the inverter lifts within their float, and confirm that the revised schedule keeps the completion date.",
       "feedback": "Best. This is smoothing: the critical activity keeps its dates, non-critical work moves within its float, and the change is checked rather than assumed.",
       "best": true
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Sketch a quick histogram for the scarcest resource on your project. Where are the peaks, which activities cause them, and how much float do those activities have to move?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Resource loading",
       "def": "Assigning the quantities of labour, plant, equipment and specialist crews required by each activity in the schedule so that demand can be totalled over time."
      },
      {
       "term": "Resource histogram",
       "def": "A bar chart showing the quantity of a resource required in each time period, used to spot peaks, valleys and over-allocation."
      },
      {
       "term": "Resource over-allocation",
       "def": "A period in which the schedule requires more of a resource than is available, meaning the programme cannot be worked as drawn."
      },
      {
       "term": "Resource levelling",
       "def": "Adjusting activity dates so that resource limits are never exceeded, accepting that the project end date may move later."
      },
      {
       "term": "Resource smoothing",
       "def": "Adjusting activity dates within their float to reduce peaks and valleys in resource demand without changing the project end date."
      },
      {
       "term": "Resource calendar",
       "def": "A calendar showing when a specific resource, such as a heavy-lift crane or a commissioning team, is available to the project."
      },
      {
       "term": "Resource-constrained critical path",
       "def": "The sequence of activities that drives completion once resource limits are applied, including links created by waiting for a scarce resource rather than by logic alone."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "A logic network assumes unlimited resources: load the scarce ones, such as cranes, specialist crews and work-face space, and compare demand with availability.",
      "Smoothing keeps the end date and consumes float; levelling respects a fixed limit and may move the end date.",
      "Choose the sequence deliberately and review it, because software priority rules can make poor choices.",
      "After levelling, report the resource-constrained critical path and name the resource that drives it."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A project has one heavy-lift crane, so three lifts planned for the same day must be spread out even if completion moves later. This is:",
       "options": [
        "Resource smoothing",
        "Fast-tracking",
        "Resource levelling",
        "Crashing"
       ],
       "answer": 2,
       "explain": "Respecting a fixed resource limit and accepting a later end date is levelling. Smoothing keeps the end date fixed, fast-tracking overlaps work and crashing adds resources."
      },
      {
       "q": "When non-critical activities are moved to reduce a resource peak without changing the end date, what is consumed?",
       "options": [
        "The float of the activities that are moved",
        "The management reserve held by the sponsor",
        "The lags between critical activities",
        "The contract time allowed for completion"
       ],
       "answer": 0,
       "explain": "Smoothing moves activities within their float, so float is used up and the plan becomes less tolerant of future delay. Reserves, lags and contract time are not affected."
      },
      {
       "q": "Two activities need the only tower crane. X lasts 5 days with zero total float; Y lasts 3 days with 2 days of total float. Both have an early start of day 1. If Y waits until X finishes, how much does completion move?",
       "options": [
        "0 days",
        "2 days",
        "5 days",
        "3 days"
       ],
       "answer": 3,
       "explain": "Y is delayed by 5 days (the length of X) but has only 2 days of float, so completion moves by 5 - 2 = 3 days. Ignoring float would wrongly suggest 5 days."
      },
      {
       "q": "After levelling, an activity that was not on the logic critical path now shows zero float. What is the most likely reason?",
       "options": [
        "Levelling has added a hard constraint to the activity's start date in the software",
        "It now waits for a scarce resource, so a resource-driven path controls completion",
        "Levelling converts every non-critical activity into a milestone",
        "Its duration has been doubled to match the available resource level"
       ],
       "answer": 1,
       "explain": "Once resources are limited, waiting for a crane or crew can drive completion, creating a resource-constrained critical path. Levelling does not normally add constraints, create milestones or change durations."
      },
      {
       "q": "Which histogram shape usually signals a workable labour plan on a plant construction job?",
       "options": [
        "A steady build-up, a broad plateau and a gradual run-down",
        "Sharp weekly spikes followed by weeks with idle crews",
        "A flat line at peak strength from mobilisation to closeout",
        "A large peak in the first month, then a long thin tail"
       ],
       "answer": 0,
       "explain": "A steady rise, stable plateau and gradual decline lets crews mobilise, learn and demobilise efficiently. Spikes, constant peak staffing or an early peak waste money and cause congestion."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l5",
   "title": "Schedule Compression, Updating & Look-Ahead Planning",
   "subtitle": "Crash with cost slopes, fast-track with care, update honestly and plan the next six weeks with the crews",
   "minutes": 40,
   "objectives": [
    "Crash a schedule economically using cost slopes and indirect costs",
    "Compare crashing with fast-tracking and judge the risks of each",
    "Update a schedule correctly against a data date and baseline",
    "Run look-ahead planning and schedule health checks that keep the programme credible"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "When the forecast finish is later than the required date, the project manager has two main compression tools. **Crashing** adds resources, such as extra shifts, more crews, a second crane or faster-curing concrete, to shorten critical activities at extra direct cost. **Fast-tracking** overlaps activities that were planned in sequence, such as starting foundations on a released design package before the superstructure design is frozen; it saves time with little direct cost but raises the risk of rework. Both help only when applied to the critical path: shortening a non-critical activity buys nothing except a bill."
    },
    {
     "type": "formula",
     "title": "Crashing formulas",
     "items": [
      {
       "name": "Crash cost slope",
       "expr": "Cost slope = (Crash cost - Normal cost) / (Normal duration - Crash duration)",
       "meaning": "Extra direct cost per day saved, assuming cost rises roughly in a straight line between the normal and crash points."
      },
      {
       "name": "Maximum crash",
       "expr": "Maximum days saved = Normal duration - Crash duration",
       "meaning": "The activity cannot be shortened beyond its crash duration, however much is spent."
      },
      {
       "name": "Net effect of one day saved",
       "expr": "Change in total cost = Cost slope - (Daily indirect cost + daily delay damages avoided)",
       "meaning": "If the result is negative, crashing that day lowers total cost. Stop when the cheapest available slope exceeds the daily saving."
      }
     ]
    },
    {
     "type": "text",
     "text": "Return to the substation extension from the CPM lesson. The critical path A-B-D-G-H-J takes 32 days; the parallel paths A-C-E-H-J and A-F-I-J take 25 and 24 days. Site indirect costs (supervision, site facilities, standby plant and security) run at 7k per day, where k means thousands of a currency unit and all figures are illustrative. The client wants the earliest economical finish. Crash data for the critical activities is below; mobilisation (A) cannot be shortened."
    },
    {
     "type": "table",
     "title": "Crash data for the critical activities (illustrative, costs in k)",
     "head": [
      "Activity",
      "Normal duration",
      "Crash duration",
      "Normal cost",
      "Crash cost",
      "Cost slope per day",
      "Max days saved"
     ],
     "rows": [
      [
       "B: Excavate transformer foundation",
       "5",
       "4",
       "20",
       "26",
       "6",
       "1"
      ],
      [
       "D: Construct and cure foundation",
       "8",
       "6",
       "60",
       "70",
       "5",
       "2"
      ],
      [
       "G: Deliver and set transformer",
       "4",
       "3",
       "15",
       "27",
       "12",
       "1"
      ],
      [
       "H: Pull and terminate cables",
       "7",
       "5",
       "28",
       "36",
       "4",
       "2"
      ],
      [
       "J: Test and commission",
       "5",
       "4",
       "30",
       "45",
       "15",
       "1"
      ]
     ]
    },
    {
     "type": "steps",
     "title": "Crashing the substation step by step",
     "items": [
      {
       "title": "Crash the cheapest critical activity",
       "text": "H has the lowest slope, 4k per day, against 7k of indirect cost saved per day. Crash H by 2 days: duration 32 to 30, extra direct cost 8k, indirect saving 14k."
      },
      {
       "title": "Re-check every path",
       "text": "The critical path is now 30 days. H also sits on A-C-E-H-J, which falls to 23 days; A-F-I-J stays at 24. A single critical path remains."
      },
      {
       "title": "Crash the next cheapest",
       "text": "D at 5k per day: crash 2 days, 30 to 28, extra 10k, saving 14k."
      },
      {
       "title": "Continue while the slope is below the daily saving",
       "text": "B at 6k per day: crash 1 day, 28 to 27, extra 6k, saving 7k."
      },
      {
       "title": "Stop at the economical point",
       "text": "The remaining options, G at 12k and J at 15k per day, cost more than the 7k saved per day, so 27 days is the economical finish. The parallel paths (24 and 23 days) are still shorter, so they have not become critical."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "The result, and what changes it",
     "text": "Duration falls from 32 to 27 days. Direct cost rises by 24k (8 + 10 + 6) while indirect cost falls by 35k (5 days x 7k), a net saving of 11k. If the contract also imposed delay damages of 10k per day for every day beyond day 25, each day saved down to day 25 would be worth 17k, so crashing G (12k) and then J (15k) would also pay and the economical finish would become 25 days. The method is the same; only the daily saving changes. In practice, check that crashed durations are achievable: a second cable crew needs drums, termination kits, supervision and work-face space."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Crashing the substation: change in cost against the 32-day plan",
     "labels": [
      "32 days",
      "30 days",
      "28 days",
      "27 days",
      "26 days",
      "25 days"
     ],
     "series": [
      {
       "name": "Extra direct cost",
       "values": [
        0,
        8,
        18,
        24,
        36,
        51
       ]
      },
      {
       "name": "Indirect cost saved",
       "values": [
        0,
        -14,
        -28,
        -35,
        -42,
        -49
       ]
      },
      {
       "name": "Net change",
       "values": [
        0,
        -6,
        -10,
        -11,
        -6,
        2
       ]
      }
     ],
     "unit": "k",
     "caption": "Illustrative figures from the worked example with no delay damages. The net change is lowest at 27 days (11k saved); crashing G and then J beyond that adds more direct cost than the indirect cost it saves."
    },
    {
     "type": "compare",
     "title": "Crashing vs fast-tracking",
     "columns": [
      {
       "title": "Crashing",
       "items": [
        "Adds resources to shorten critical activities",
        "Raises direct cost, often steeply near the crash limit",
        "Logic unchanged; durations shorter",
        "Watch productivity losses from congestion, fatigue and long overtime",
        "Example: double-shift concrete pours or a second launching gantry"
       ]
      },
      {
       "title": "Fast-tracking",
       "items": [
        "Overlaps activities planned in sequence",
        "Little direct cost but more risk of rework, claims and safety conflicts",
        "Logic changed from FS to SS/FF links or leads",
        "Watch design maturity, interfaces and work on top of other work",
        "Example: start piling on released foundation drawings before superstructure design is frozen"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "A schedule is useful only if it is updated on a fixed cycle, usually weekly on site and monthly for formal reporting. At each update the planner sets a new **data date**, records actual start and finish dates, enters a realistic **remaining duration** (not just a percent complete) for each activity in progress, and recalculates. Out-of-sequence progress, where work has started before its predecessors finished, must be handled deliberately: **retained logic** keeps the remaining work waiting for the predecessor, while **progress override** lets it continue as if the link no longer applied. Retained logic is usually the more honest choice. The update is compared with the **schedule baseline** to report variances and forecast completion; the baseline itself changes only through formal change control, as set out in Define. Progress evidence increasingly comes from **reality capture**: drone surveys, laser scans and 360-degree photos compared with the model show what is actually installed. Automated or AI-assisted progress recognition speeds this up, but site engineers must verify it before it becomes an actual date in the schedule. Modern contract forms such as FIDIC 2017 and NEC4 set out what a programme must contain and when revised programmes are due, so check what your contract requires at each update."
    },
    {
     "type": "keypoints",
     "title": "Look-ahead and last-planner style planning",
     "items": [
      "Roll a 4-6 week look-ahead from the Level 3 schedule and break it into crew-level tasks together with the foremen and subcontractor supervisors who will do the work.",
      "Run a **make-ready** process: list each task's constraints (drawings, RFI answers, materials, permits, access, crane time, inspections) and give each an owner and a clear-by date.",
      "Put into next week's work plan only tasks whose constraints are cleared, so crews are not sent to work that cannot be done.",
      "Measure **percent plan complete (PPC)** every week and record why tasks were missed; fix the recurring causes rather than blaming crews.",
      "Feed actual progress and newly discovered constraints back into the master schedule so the critical path stays realistic."
     ]
    },
    {
     "type": "cycle",
     "title": "The weekly planning loop",
     "center": "Reliable weekly promises",
     "items": [
      {
       "label": "Master schedule",
       "text": "Level 3 milestones and the critical path set the targets"
      },
      {
       "label": "Look-ahead",
       "text": "The next 4-6 weeks broken into crew tasks with the foremen"
      },
      {
       "label": "Make ready",
       "text": "Constraints listed, owned and cleared by a date"
      },
      {
       "label": "Weekly plan",
       "text": "Crews commit only to tasks whose constraints are cleared"
      },
      {
       "label": "Daily huddle",
       "text": "Short coordination at the work face; early warnings raised"
      },
      {
       "label": "Measure PPC",
       "text": "Tasks done as planned divided by tasks planned; reasons logged"
      },
      {
       "label": "Learn and fix",
       "text": "Remove recurring causes and feed progress back to the schedule"
      }
     ],
     "caption": "The loop turns once a week. Notice that work enters the weekly plan only after make-ready, and that what is learned flows back to the master schedule so the critical path stays realistic."
    },
    {
     "type": "checklist",
     "title": "Schedule health check before baselining and at each major update",
     "items": [
      "No open ends: every activity except the project start and finish has a predecessor and a successor.",
      "Hard constraints are few, justified and documented.",
      "Lags are short and explained, and no leads hide overlapping work without a reason.",
      "Most links are finish-to-start; SS/FF pairs are used correctly for overlapping work.",
      "No unexplained very high float that suggests missing logic.",
      "Most activity durations are within about two update periods, apart from procurement and level-of-effort items.",
      "No actual dates after the data date and no forecast dates before it.",
      "A critical path test works: adding delay to a critical activity delays the finish by the same amount.",
      "Key resources are loaded and peaks have been checked against availability.",
      "Progress in the update is backed by verified evidence, and any logic or durations suggested by automated tools have been reviewed by a planner.",
      "Any negative float is reported with a recovery plan and an owner."
     ]
    },
    {
     "type": "case",
     "title": "Recovering a heat recovery steam generator programme",
     "context": "On a hypothetical combined-cycle power plant extension, erection of the heat recovery steam generator (HRSG) is six weeks behind and lies on the critical path to first fire. The EPC contractor proposes three measures: double-shift welding on the high-pressure modules; starting insulation and cladding on completed sections before the hydrostatic test of the whole unit; and bringing the commissioning team forward to begin cold commissioning of auxiliary systems early. The owner's project manager must advise the steering committee.",
     "questions": [
      "Which proposals are crashing and which are fast-tracking?",
      "What risks does each create, and how would you test whether they really recover time?",
      "What should the project manager ask for before approving the recovery plan?"
     ],
     "answer": "Double-shift welding is crashing: it adds resources and cost to a critical activity, but productivity and weld quality can fall at night, so the welder pool, non-destructive testing capacity, lighting and supervision must be checked. Insulating sections before the full hydrotest is fast-tracking: it overlaps sequential work and risks costly removal if leaks are found, so it should be limited to sections that have already passed their own pressure tests. Bringing the commissioning team forward helps only if that work is on the critical path and its prerequisites, such as permanent power, instrument air and water, will really be available. Before approval the project manager should ask for a revised logic-linked schedule showing the recovered critical path, the cost slope of each measure, the added risks with their mitigations, and evidence that near-critical paths do not become critical."
    },
    {
     "type": "template",
     "title": "Six-week look-ahead and constraint log",
     "purpose": "Breaks the next six weeks of the control schedule into crew tasks and tracks every constraint that must be cleared before a task can enter a weekly work plan.",
     "columns": [
      "Task (crew level)",
      "Week",
      "Crew / foreman",
      "Constraints to clear",
      "Constraint owner",
      "Clear by",
      "Ready (Y/N)"
     ],
     "example": [
      [
       "Fix rebar cages, pier P12",
       "Wk 3",
       "Rebar gang 2",
       "Approved bar bending schedule; cages delivered; crane slot",
       "Site engineer; stores; crane coordinator",
       "Wk 2 Thu",
       "N"
      ],
      [
       "Pull 11 kV cables, feeder 4",
       "Wk 2",
       "Cable crew A",
       "Trench handed over; drums on site; permit to work",
       "Civil lead; procurement; HSE",
       "Wk 1 Sat",
       "Y"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "title": "The client wants a month back",
     "situation": "On a hypothetical university laboratory building in Dhaka, the client asks for completion four weeks earlier to meet the start of the academic year. The planner proposes fast-tracking by starting laboratory fit-out on floors 1-3 while the roof slab is still being cast, and crashing MEP installation with a second shift. The laboratory design still has 30 open RFIs, and the fume-cupboard supplier has not confirmed exhaust duct sizes. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Approve both measures straight away, so that the client sees a responsive team and the second shift can start on Monday.",
       "feedback": "Weak. Acting before testing the measures risks spending money on non-critical work and starting fit-out that will be torn out when the RFIs are answered.",
       "best": false
      },
      {
       "text": "Refuse to accelerate at all, explaining that fast-tracking always causes rework and claims and that the contract date must stand.",
       "feedback": "Weak. Some acceleration may be feasible and valuable. A blanket refusal ignores a legitimate client need without analysing the options.",
       "best": false
      },
      {
       "text": "Analyse which activities are critical, test each measure's time gain, cost slope and rework risk, especially fit-out with open RFIs, and give the client costed options.",
       "feedback": "Best. Compression must target the critical path and be justified by time gained against cost and risk; the open RFIs make fit-out fast-tracking particularly risky.",
       "best": true
      },
      {
       "text": "Crash every MEP activity with a second shift, critical or not, so that no single trade can hold up the others during the fit-out and the client sees progress on every floor.",
       "feedback": "Weak. Crashing non-critical work adds cost without shortening the project and increases congestion and supervision load.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Crashing",
       "def": "Shortening the duration of critical activities by adding resources such as extra shifts, crews or equipment, accepting additional direct cost to save time."
      },
      {
       "term": "Crash cost slope",
       "def": "The extra direct cost per unit of time saved when an activity is crashed: (crash cost - normal cost) / (normal duration - crash duration)."
      },
      {
       "term": "Fast-tracking",
       "def": "Compressing a schedule by overlapping activities that were planned in sequence, which saves time but increases the risk of rework and interface problems."
      },
      {
       "term": "Data date",
       "def": "The date up to which progress has been recorded in a schedule update; everything before it is actual, everything after it is forecast."
      },
      {
       "term": "Schedule baseline",
       "def": "The approved version of the schedule against which progress and variances are measured; it changes only through formal change control."
      },
      {
       "term": "Look-ahead schedule",
       "def": "A short-term plan, typically covering the next four to six weeks, that breaks the control schedule into crew-level tasks and identifies constraints to remove."
      },
      {
       "term": "Percent plan complete (PPC)",
       "def": "The number of tasks completed as planned in a week divided by the number of tasks planned, expressed as a percentage; a measure of planning reliability."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Crash the cheapest critical activity first, re-check every path, and stop when the cost slope exceeds the daily saving.",
      "Fast-tracking buys time with rework risk: test design maturity and open RFIs before overlapping work.",
      "Update against a data date with actual dates and realistic remaining durations backed by verified progress evidence.",
      "Run a 4-6 week look-ahead with make-ready, commit only constraint-free work, and use PPC to improve reliability."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "An activity's normal duration is 10 days at a cost of 50k; its crash duration is 7 days at 62k. What is the crash cost slope?",
       "options": [
        "12k per day",
        "4k per day",
        "6.2k per day",
        "about 1.7k per day"
       ],
       "answer": 1,
       "explain": "Slope = (62 - 50) / (10 - 7) = 12 / 3 = 4k per day. 12k is the total extra cost, not the cost per day saved."
      },
      {
       "q": "Daily indirect cost is 5k and there are no delay damages. Which option should be crashed first?",
       "options": [
        "A critical activity with a slope of 7k per day, which can save 2 days",
        "A critical activity with a slope of 6k per day, which can save 3 days",
        "A critical activity with a slope of 3k per day, which can save 1 day",
        "A non-critical activity with a slope of 2k per day, saving 4 days"
       ],
       "answer": 2,
       "explain": "Crash the cheapest critical activity whose slope is below the daily saving: 3k is less than 5k. The 6k and 7k options cost more than they save, and crashing a non-critical activity saves no project time."
      },
      {
       "q": "Starting piling on released foundation drawings before the superstructure design is frozen is an example of:",
       "options": [
        "Crashing",
        "Resource levelling",
        "Progress override",
        "Fast-tracking"
       ],
       "answer": 3,
       "explain": "Overlapping design and construction that were planned in sequence is fast-tracking. Crashing adds resources, levelling respects resource limits and progress override is an update setting."
      },
      {
       "q": "During a weekly update, what should be entered for an activity that is in progress?",
       "options": [
        "Its actual start date and a realistic remaining duration",
        "Only the percent complete reported by the foreman that week",
        "A new baseline start date to match the actual start",
        "A hard constraint on its forecast finish date"
       ],
       "answer": 0,
       "explain": "The actual start and a realistic remaining duration let the software forecast the finish correctly. Percent complete alone may not reflect remaining time, and baselines and constraints should not be altered to fit progress."
      },
      {
       "q": "A team planned 40 tasks for the week and completed 30 of them as planned. What is the percent plan complete?",
       "options": [
        "133%",
        "25%",
        "75%",
        "70%"
       ],
       "answer": 2,
       "explain": "PPC = tasks completed as planned / tasks planned = 30 / 40 = 75%. 25% is the share missed, and 133% inverts the ratio."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m4",
 "order": 4,
 "code": "Budget",
 "title": "Cost Estimation, Budgeting & Earned Value",
 "subtitle": "Estimate with honest ranges, set a cost baseline that matches the schedule, and use earned value to see trouble early",
 "outcomes": [
  "Select and apply estimating methods suited to the maturity of design, including parametric, factored and bottom-up estimates with escalation, location and currency adjustments",
  "Build a time-phased cost baseline with contingency and management reserve, and turn it into an S-curve and a cash-flow forecast",
  "Calculate and interpret PV, EV, AC, CV, SV, CPI and SPI for a project and its control accounts",
  "Forecast final cost and completion using EAC variants, ETC, VAC, TCPI and earned schedule, and apply reporting thresholds",
  "Measure physical progress with objective rules of credit and control committed, accrued and forecast costs on site"
 ],
 "lessons": [
  {
   "id": "m4-l1",
   "title": "Cost Estimating Classes & Methods",
   "subtitle": "Match the method to the maturity of the design, and state the range honestly",
   "minutes": 38,
   "objectives": [
    "Relate estimate classes and indicative accuracy ranges to the maturity of design",
    "Apply analogous, parametric, factored, bottom-up and BOQ unit-rate methods",
    "Adjust estimates for capacity, escalation, location and currency, and document a basis of estimate"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every engineering estimate is a forecast made with incomplete information. At concept stage the team may know only the plant's capacity and the site; at tender stage it has drawings, a bill of quantities and supplier quotations. Good estimators match the **method** to the **maturity** of the design, state the **accuracy range** honestly, and write a **basis of estimate** so that anyone can see what is included, what is excluded and where each number came from. The estimate feeds the business case developed in Justify and becomes the starting point for the cost baseline built in the next lesson."
    },
    {
     "type": "table",
     "title": "Estimate classes by design maturity (AACE-style ranges for process plant; indicative)",
     "head": [
      "Class",
      "Design maturity",
      "Typical purpose",
      "Typical methods",
      "Indicative accuracy range (low / high)"
     ],
     "rows": [
      [
       "Class 5: screening",
       "Concept only: capacity, location, broad scope (about 0-2% of full definition)",
       "Screening options, strategic planning",
       "Analogous, capacity scaling",
       "Low -20% to -50%; high +30% to +100%"
      ],
      [
       "Class 4: feasibility",
       "Early design: main equipment list, block layouts (about 1-15% of full definition)",
       "Feasibility study, option selection",
       "Parametric, equipment-factored",
       "Low -15% to -30%; high +20% to +50%"
      ],
      [
       "Class 3: budget authorisation",
       "Basic design or FEED largely complete (about 10-40% of full definition)",
       "Funding decision, budget approval",
       "Unit costs for major items, factors for the rest",
       "Low -10% to -20%; high +10% to +30%"
      ],
      [
       "Class 2: control",
       "Detailed design substantially advanced (about 30-75% of full definition)",
       "Cost baseline, checking bids",
       "Detailed quantities and unit rates",
       "Low -5% to -15%; high +5% to +20%"
      ],
      [
       "Class 1: definitive",
       "Design complete, quantities measured, prices quoted (about 65-100% of full definition)",
       "Check estimate, tender pricing",
       "Full bottom-up with firm quotations",
       "Low -3% to -10%; high +3% to +15%"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Ranges are skewed, and that is deliberate",
     "text": "Notice that the high side of each range is wider than the low side. Engineering estimates are far more likely to grow than to shrink, because scope gaps, ground conditions and market prices tend to surprise upwards. The pattern follows AACE International's recommended practice for the process industries; AACE publishes companion practices for other sectors, such as building and general construction, and organisations calibrate the ranges to their own technology, complexity and data. Each bound is itself a range: a first-of-a-kind process plant sits at the wide end, a repeat warehouse at the narrow end. The class describes how mature the definition is, not how much effort went into the estimate."
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "The accuracy funnel: widest typical range by class",
     "labels": [
      "Class 5",
      "Class 4",
      "Class 3",
      "Class 2",
      "Class 1"
     ],
     "series": [
      {
       "name": "Low end",
       "values": [
        -50,
        -30,
        -20,
        -15,
        -10
       ]
      },
      {
       "name": "High end",
       "values": [
        100,
        50,
        30,
        20,
        15
       ]
      }
     ],
     "unit": "%",
     "caption": "Indicative, using the widest bounds in the table. The range narrows as the design matures, and the high side always stays wider than the low side."
    },
    {
     "type": "framework",
     "title": "Five estimating methods",
     "items": [
      {
       "label": "E1",
       "title": "Analogous",
       "text": "Scale the known cost of a similar completed project, adjusting for size, date, location and scope differences. Fast and useful at screening stage, but only as good as the comparability of the reference project."
      },
      {
       "label": "E2",
       "title": "Parametric",
       "text": "Apply a rate derived from historical data to a key parameter: cost per MW, per m2 of floor area, per km of 132 kV line, per m3/day of treatment capacity. Capacity scaling with an exponent is a parametric technique."
      },
      {
       "label": "E3",
       "title": "Factored",
       "text": "Price the major equipment, then multiply by factors for installation, piping, electrical, instrumentation, civil works and indirect costs to reach total installed cost. Common for process plant at feasibility stage."
      },
      {
       "label": "E4",
       "title": "Bottom-up",
       "text": "Estimate each work package from quantities, productivity, labour, plant, materials and subcontract prices, then roll up. The most accurate and the most time-consuming method."
      },
      {
       "label": "E5",
       "title": "BOQ and unit rates",
       "text": "Measure quantities from drawings into a bill of quantities and price each item with a built-up unit rate. The standard method for civil and building work and the basis of most tender comparisons."
      }
     ]
    },
    {
     "type": "formula",
     "title": "Estimating formulas",
     "items": [
      {
       "name": "Capacity scaling",
       "expr": "C2 = C1 x (Q2 / Q1)^x",
       "meaning": "C is cost and Q capacity. The exponent x is often around 0.6 for process plant (the 'six-tenths rule'), reflecting economies of scale; use data for the specific plant type where it exists."
      },
      {
       "name": "Parametric estimate",
       "expr": "Cost = Parameter quantity x Rate per unit",
       "meaning": "For example floor area x cost per m2, adjusted for specification and site conditions."
      },
      {
       "name": "Factored estimate",
       "expr": "Total installed cost = Major equipment cost x Installation factor",
       "meaning": "Overall factors for process plant commonly lie between about 3 and 5; discipline-by-discipline factors give better accuracy."
      },
      {
       "name": "Escalation",
       "expr": "C_future = C_base x (1 + e)^n",
       "meaning": "e is the annual escalation rate for the cost category; n is the number of years from the estimate base date to the mid-point of spend."
      },
      {
       "name": "Location adjustment",
       "expr": "C_site = C_reference x (LF_site / LF_reference)",
       "meaning": "LF is a location factor or index reflecting labour productivity, wages, materials and logistics at each location."
      },
      {
       "name": "Currency conversion",
       "expr": "C_local = C_foreign x exchange rate (local units per foreign unit)",
       "meaning": "Apply only to the imported content, and record the rate and the date used."
      },
      {
       "name": "Unit rate",
       "expr": "Unit rate = (Labour + Plant + Materials + Subcontract cost per unit) x (1 + overheads and profit %)",
       "meaning": "The building block of BOQ pricing."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Scaling and escalating a treatment plant estimate",
     "text": "A reference effluent treatment plant with a capacity of 2,000 m3/day cost BDT 80 million at its estimate base date. A garment group now needs a 3,000 m3/day plant at a similar site. Capacity scaling with x = 0.6 gives 80 x (3,000 / 2,000)^0.6 = 80 x 1.275 = **BDT 102.0 million**. Escalating at an assumed 7% per year for two years to the mid-point of spend gives 102.0 x 1.07^2 = 102.0 x 1.1449 = **BDT 116.8 million**. The plant is 50% larger but, before escalation, costs only about 28% more. All figures are illustrative, and the result is still a screening-class number to be presented with a wide range."
    },
    {
     "type": "text",
     "text": "A **bill of quantities (BOQ)** lists every measurable item of work, such as m3 of concrete in pile caps, tonnes of reinforcement, m2 of formwork, metres of cable tray or numbers of light fittings, measured from the drawings according to an agreed method of measurement. Each item is priced with a **unit rate** that bundles labour, plant, materials, wastage, overheads and profit. Because quantities and rates are kept separate, the client can compare tenders line by line and value variations later; the commercial use of remeasurement contracts is developed in Procure. For estimators the discipline lies in the rate build-up: productivity assumptions, wastage allowances and crew mix are where most estimating errors hide."
    },
    {
     "type": "table",
     "title": "Unit rate build-up: 1 m3 of reinforced concrete in pile caps (illustrative)",
     "head": [
      "Element",
      "Basis",
      "Cost per m3 (BDT)"
     ],
     "rows": [
      [
       "Ready-mix concrete",
       "1.05 m3 (5% wastage) x 9,000",
       "9,450"
      ],
      [
       "Reinforcement, supplied and fixed",
       "120 kg x 95",
       "11,400"
      ],
      [
       "Formwork",
       "4.0 m2 x 450",
       "1,800"
      ],
      [
       "Labour: place, vibrate, cure",
       "3.0 labour-hours x 250",
       "750"
      ],
      [
       "Plant: pump and vibrators",
       "Allowance per m3",
       "600"
      ],
      [
       "Direct cost subtotal",
       "Sum of the above",
       "24,000"
      ],
      [
       "Overheads and profit",
       "15% of direct cost",
       "3,600"
      ],
      [
       "Unit rate",
       "Direct cost + overheads and profit",
       "27,600"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Estimating with models, machines and volatile markets",
     "text": "**Model-based quantities** (often called 5D) let estimators take quantities straight from a BIM model, but check them against the agreed method of measurement and the model's maturity: a concept-stage model omits much of what a BOQ must price. **AI-assisted estimating tools** can suggest rates and benchmarks from past projects in seconds; use them to challenge the estimate, and have an estimator verify the basis, date and location of every rate before it is relied on. **Supply-chain volatility** means long-lead items such as transformers, switchgear and structural steel need current quotations with stated validity, escalation by cost-specific indices and, where the contract allows, price-adjustment provisions (FIDIC 2017 and NEC4 both offer optional mechanisms). The same quantities also drive a first **embodied-carbon** estimate for the product and construction stages (A1-A5), so options can be compared on cost and carbon together."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Escalation, currency and contingency are different things",
     "text": "Escalation covers expected price movement over time. Currency allowances cover exchange-rate exposure on imported items such as transformers, turbines, switchgear or dyeing machines. Contingency covers uncertainty in scope definition and estimating. Rolling them into a single 'add 15%' hides the reasoning and makes later control impossible. Show each separately, state the base date, the exchange rate and its source, and keep imported and local content apart."
    },
    {
     "type": "tree",
     "title": "Structure of a project estimate",
     "root": {
      "label": "Total estimate",
      "text": "Owner's view, by cost type",
      "children": [
       {
        "label": "Direct field costs",
        "children": [
         {
          "label": "Equipment"
         },
         {
          "label": "Bulk materials"
         },
         {
          "label": "Labour and plant"
         },
         {
          "label": "Subcontracts"
         }
        ]
       },
       {
        "label": "Indirect costs",
        "children": [
         {
          "label": "Site overheads and temporary works"
         },
         {
          "label": "Engineering and project management"
         },
         {
          "label": "Commissioning and spares"
         }
        ]
       },
       {
        "label": "Owner's costs",
        "children": [
         {
          "label": "Land, permits and utility connections"
         },
         {
          "label": "Owner's team and advisers"
         }
        ]
       },
       {
        "label": "Allowances",
        "children": [
         {
          "label": "Escalation",
          "text": "Expected price movement to mid-point of spend"
         },
         {
          "label": "Currency",
          "text": "Exchange-rate exposure on imported content"
         },
         {
          "label": "Contingency",
          "text": "Scope definition and estimating uncertainty"
         }
        ]
       }
      ]
     },
     "caption": "Escalation, currency and contingency sit as separate, visible allowances rather than being buried in rates. Management reserve, held by the sponsor, sits above this estimate, as the next lesson shows."
    },
    {
     "type": "scenario",
     "title": "One number for the board",
     "situation": "A hypothetical textile group in Chattogram asks for a cost figure for a new 30,000 m2 knit-dyeing factory within one week, to decide whether to fund a feasibility study. The only data available are the site, the capacity target and the final cost of a similar factory the group built in Gazipur four years ago. The managing director wants 'one number we can put in the board paper'. What should the estimator provide FIRST?",
     "options": [
      {
       "text": "A detailed bottom-up estimate with a full bill of quantities, asking the board to postpone its meeting until the drawings needed for measurement have been prepared.",
       "feedback": "Weak. The decision being made is only whether to fund feasibility; a definitive estimate is neither possible nor needed at this stage.",
       "best": false
      },
      {
       "text": "An analogous estimate scaled from the Gazipur factory and adjusted for escalation, location and scope, presented as a range with its class, assumptions and exclusions.",
       "feedback": "Best. The method fits the information available, the adjustments are explicit, and the range and class stop the board treating a screening figure as a budget.",
       "best": true
      },
      {
       "text": "The Gazipur factory's final cost unchanged, on the basis that both factories are knit-dyeing plants of a similar type and the board only needs an approximate figure for now.",
       "feedback": "Weak. Four years of escalation, a different location and possible scope differences make the unadjusted figure misleading, and no range is given.",
       "best": false
      },
      {
       "text": "A single figure with a 30% contingency added, so that the board has a safe number to approve and the project is unlikely to need more money later.",
       "feedback": "Weak. A padded single figure looks precise, hides the assumptions and may be anchored on as the budget long before the scope is defined.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Basis of estimate register",
     "purpose": "Documents where every major figure in the estimate comes from, so that reviewers can trace and challenge it and later estimators can reuse it.",
     "columns": [
      "Item / WBS",
      "Quantity and source",
      "Method",
      "Rate source and base date",
      "Escalation applied",
      "Currency",
      "Exclusions and assumptions"
     ],
     "example": [
      [
       "1.3 Pile caps",
       "620 m3 from FEED drawings rev B",
       "BOQ and unit rate",
       "Built-up rate, local prices Q1 2026",
       "5% per year to mid-point of spend",
       "BDT",
       "Excludes dewatering below 2 m depth"
      ],
      [
       "2.1 Clarifier mechanisms",
       "2 units from vendor datasheet",
       "Vendor budget quotation",
       "Quotation dated Feb 2026",
       "None: price firm to Dec 2026",
       "EUR; rate and date recorded",
       "Installation priced separately under 2.4"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "Take one estimate you have prepared or reviewed recently. Could you state its class and range, and could someone else trace every major figure to a quantity, a rate and a date?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Analogous estimate",
       "def": "An estimate based on the actual cost of a similar past project, adjusted for differences in size, date, location and scope; quick but only as reliable as the comparison."
      },
      {
       "term": "Parametric estimate",
       "def": "An estimate that multiplies a key project parameter, such as MW, m2 or km, by a rate derived from historical data, sometimes with a scaling exponent."
      },
      {
       "term": "Factored estimate",
       "def": "An estimate that prices the major equipment and applies factors for installation, bulk materials and indirect costs to reach total installed cost, typical of process plant at feasibility stage."
      },
      {
       "term": "Bottom-up estimate",
       "def": "An estimate built from the detailed cost of each work package or activity, using quantities, productivity and prices, then rolled up to the project total."
      },
      {
       "term": "Bill of quantities (BOQ)",
       "def": "A list of measured quantities of every work item, prepared to an agreed method of measurement and priced with unit rates to produce an estimate or tender price."
      },
      {
       "term": "Estimate class",
       "def": "A category describing an estimate's maturity, purpose, method and expected accuracy range, from early screening estimates to definitive estimates based on complete design."
      },
      {
       "term": "Cost escalation",
       "def": "The expected increase in costs over time due to inflation and market conditions, applied from the estimate base date to when the money is spent."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Match the estimating method to the maturity of design, and always state the estimate class and its range.",
      "Ranges are skewed upwards: early estimates are far more likely to grow than to shrink.",
      "Show escalation, currency and contingency as separate allowances, with the base date, exchange rate and sources.",
      "Model quantities and AI-suggested rates speed estimating, but a named estimator verifies them against the method of measurement.",
      "Write a basis of estimate so that every major figure traces to a quantity, a rate and a date."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Capacity-scaling a plant to twice the size of a reference plant with an exponent of 0.6 multiplies its cost by about:",
       "options": [
        "1.20",
        "1.52",
        "2.00",
        "1.60"
       ],
       "answer": 1,
       "explain": "2^0.6 = about 1.52, so doubling capacity raises cost by roughly half. 2.00 ignores economies of scale, and 1.20 and 1.60 do not follow from the formula."
      },
      {
       "q": "An item costs 100 at the estimate base date. With escalation of 6% per year, what should be carried for spend two years later?",
       "options": [
        "112.00",
        "106.00",
        "112.36",
        "113.40"
       ],
       "answer": 2,
       "explain": "100 x 1.06^2 = 112.36. 112.00 adds simple rather than compound escalation, and 106.00 covers only one year."
      },
      {
       "q": "Which method best suits a process plant at feasibility stage when only a priced list of major equipment exists?",
       "options": [
        "A bottom-up estimate built from measured quantities",
        "An analogous estimate from an unrelated industry",
        "A bill of quantities priced with built-up unit rates",
        "A factored estimate built from the equipment cost"
       ],
       "answer": 3,
       "explain": "With a priced equipment list and little else, factoring up to total installed cost is the established approach. Bottom-up and BOQ methods need much more design, and an unrelated analogy is unreliable."
      },
      {
       "q": "A unit rate has direct costs of 2,000 per tonne and overheads and profit of 12%. What is the unit rate?",
       "options": [
        "2,240 per tonne",
        "2,012 per tonne",
        "2,120 per tonne",
        "2,400 per tonne"
       ],
       "answer": 0,
       "explain": "2,000 x 1.12 = 2,240 per tonne. The other values misapply the percentage."
      },
      {
       "q": "Why should escalation not be hidden inside the contingency allowance?",
       "options": [
        "Contingency must always be returned to the client at the end of the project",
        "They address different causes and are calculated and controlled differently",
        "Escalation may not legally be included in public-sector cost estimates",
        "Contingency can only be calculated after the main contract has been awarded"
       ],
       "answer": 1,
       "explain": "Escalation reflects expected price movement over time; contingency reflects scope and estimating uncertainty. Keeping them separate makes both visible and controllable. The other statements are not general rules."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l2",
   "title": "Budgeting & the Cost Baseline",
   "subtitle": "Reserves, cost-loaded schedules, S-curves and the difference between cost and cash",
   "minutes": 34,
   "objectives": [
    "Build a time-phased cost baseline from the estimate, the CBS and the schedule",
    "Distinguish contingency reserve from management reserve and control each correctly",
    "Convert a cost curve into a cash-flow forecast allowing for retention, advance payments and commitments"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "An approved estimate is not yet a budget that can be controlled. The **cost baseline** is the estimate broken down into control accounts and work packages, spread over time according to the schedule, and approved as the reference against which performance will be measured. It contains the planned cost of the work plus **contingency reserve** for identified risks; **management reserve** for the unforeseen sits above it under the sponsor's control. Because the baseline is time-phased, it also tells the finance team when money will be needed, which for a lender-funded power plant or a factory expansion paid from operating cash can matter as much as the total."
    },
    {
     "type": "tree",
     "title": "From activity estimates to project budget",
     "root": {
      "label": "Project budget",
      "text": "Approved by the sponsor or investment committee",
      "children": [
       {
        "label": "Management reserve",
        "text": "Unforeseen work within the mandate; released by the sponsor through change control"
       },
       {
        "label": "Cost baseline",
        "text": "Time-phased reference for earned value",
        "children": [
         {
          "label": "Contingency reserve",
          "text": "Identified risks and estimating uncertainty; drawn down by the PM under agreed rules"
         },
         {
          "label": "Control account budgets",
          "text": "Civil, mechanical, E&I, engineering and PM",
          "children": [
           {
            "label": "Work packages",
            "text": "Built from activity estimates: labour, plant, materials, subcontracts"
           }
          ]
         }
        ]
       }
      ]
     },
     "caption": "Contingency sits inside the cost baseline and is drawn down by the project manager; management reserve sits outside it with the sponsor and enters the baseline only through change control."
    },
    {
     "type": "compare",
     "title": "Contingency reserve vs management reserve",
     "columns": [
      {
       "title": "Contingency reserve",
       "items": [
        "Covers identified risks and estimating uncertainty (known unknowns)",
        "Part of the cost baseline",
        "Sized from the risk register and quantitative analysis, developed in Protect",
        "Drawn down by the project manager under documented rules",
        "Example: an allowance for poor ground at some pile locations"
       ]
      },
      {
       "title": "Management reserve",
       "items": [
        "Covers unforeseen events within the approved scope (unknown unknowns)",
        "Outside the cost baseline but inside the project budget",
        "Often set by policy or from portfolio experience",
        "Released by the sponsor through change control, then added to the baseline",
        "Example: a new regulatory requirement introduced mid-construction"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "A **cost-loaded schedule** assigns each activity's budget to its dates, so that adding up costs period by period gives the planned spend. Plotting the cumulative total gives the familiar **S-curve**: slow at the start through design and mobilisation, steep during main construction, flattening through commissioning. The S-curve becomes the planned value line used in earned value. But cost is not cash. Work is certified some weeks after it is done, payment follows certification after an agreed period, **retention** is withheld, **advance payments** are recovered, and major equipment may need milestone payments long before delivery. A cash-flow forecast adjusts the cost curve for these timings."
    },
    {
     "type": "table",
     "title": "Illustrative S-curve data: hypothetical ETP for a garment factory (BDT million; control account budgets total 40.0, contingency held separately)",
     "head": [
      "Month",
      "Planned value in month",
      "Cumulative planned value",
      "Cumulative % of budget"
     ],
     "rows": [
      [
       "1",
       "2.0",
       "2.0",
       "5%"
      ],
      [
       "2",
       "3.0",
       "5.0",
       "12.5%"
      ],
      [
       "3",
       "4.0",
       "9.0",
       "22.5%"
      ],
      [
       "4",
       "5.0",
       "14.0",
       "35%"
      ],
      [
       "5",
       "6.0",
       "20.0",
       "50%"
      ],
      [
       "6",
       "6.0",
       "26.0",
       "65%"
      ],
      [
       "7",
       "5.0",
       "31.0",
       "77.5%"
      ],
      [
       "8",
       "4.0",
       "35.0",
       "87.5%"
      ],
      [
       "9",
       "3.0",
       "38.0",
       "95%"
      ],
      [
       "10",
       "2.0",
       "40.0",
       "100%"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "From cost to cash on one certificate",
     "text": "In month 5 the contractor's work for the month, valued at BDT 6.0 million, is certified. The contract withholds 5% retention and recovers a 10% advance payment by deducting 10% from each interim certificate. Net payment = 6.0 - 0.30 (retention) - 0.60 (advance recovery) = **5.10**, paid within the period stated in the contract, for example 28 days after certification. Under many contracts half the retention is released at taking-over and the rest at the end of the defects period, so the owner's cash curve lags its cost curve and has a tail after completion."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Cost curve and cash curve for the ETP",
     "labels": [
      "M1",
      "M2",
      "M3",
      "M4",
      "M5",
      "M6",
      "M7",
      "M8",
      "M9",
      "M10"
     ],
     "series": [
      {
       "name": "Cumulative planned value",
       "values": [
        2.0,
        5.0,
        9.0,
        14.0,
        20.0,
        26.0,
        31.0,
        35.0,
        38.0,
        40.0
       ]
      },
      {
       "name": "Cumulative cash paid",
       "values": [
        0,
        1.9,
        4.75,
        8.55,
        13.3,
        19.0,
        24.7,
        29.45,
        33.25,
        36.1
       ]
      }
     ],
     "yLabel": "BDT million",
     "caption": "Illustrative: each month's work is paid one month later with 5% retention held back and no advance payment. By month 10 the owner has paid 36.1 of 40.0; the last month's work and the retention follow after completion."
    },
    {
     "type": "keypoints",
     "title": "Retention, advances and commitments",
     "items": [
      "**Retention** protects the employer against defects and incomplete work. It is money the contractor has earned but not yet received, so contractors price its financing cost.",
      "**Advance payments** help contractors mobilise and order long-lead equipment. They are usually secured by an advance payment guarantee and recovered by deductions from interim certificates.",
      "**Commitments** are orders and subcontracts placed but not yet invoiced. They matter because they usually cannot be cancelled cheaply; tracking them is covered in the final lesson of this module.",
      "Milestone payments for major equipment such as transformers, turbines and boilers can be large and early: put them in the cash-flow forecast at their contractual dates.",
      "Foreign-currency payments need treasury planning, such as letters of credit or forward cover, and the timing of those payments belongs in the cash-flow forecast.",
      "**Price adjustment**: where the contract links payments to published cost indices, certificate values move with inflation, so forecast the adjustment in the cash flow instead of discovering it in each certificate.",
      "**Target-cost, cost-reimbursable and alliance** contracts pay actual cost through open-book accounts, so the owner's cash curve follows the contractor's real spend and any pain/gain share must be forecast too."
     ]
    },
    {
     "type": "steps",
     "title": "Building the cost baseline",
     "items": [
      {
       "title": "Freeze the estimate and the CBS",
       "text": "Confirm the approved estimate, its class and its mapping to WBS control accounts."
      },
      {
       "title": "Assign budgets to work packages",
       "text": "Allocate every cost item to one control account and work package, so that nothing is double-counted or left orphaned."
      },
      {
       "title": "Cost-load the schedule",
       "text": "Spread each budget over its activities' dates using sensible profiles: linear for steady work, front- or back-loaded only where justified."
      },
      {
       "title": "Add contingency reserve",
       "text": "Hold contingency at project or control-account level according to policy, visibly, not buried in activity rates."
      },
      {
       "title": "Produce the S-curve and cash flow",
       "text": "Cumulate planned value and convert it to a cash-flow forecast using payment terms, retention, advances and equipment milestones."
      },
      {
       "title": "Approve and baseline",
       "text": "Obtain formal approval. From then on, changes to the baseline go through change control and are logged."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "A carbon baseline beside the cost baseline",
     "text": "Many owners now set a **carbon budget** alongside the cost budget. PAS 2080:2023 sets out carbon management for buildings and infrastructure across the value chain, and whole-life carbon is reported by life-cycle stage following EN 15978: A1-A5 product and construction, B use, C end of life and D beyond the system boundary. In practice the estimator uses the same quantities to calculate embodied carbon for A1-A5, the baseline records cost and carbon for each control account, and every change is assessed for both. State the carbon factors and their source and version, just as you state a price base date. Where an owner reports under IFRS S1/S2 or a similar framework, project carbon data may feed corporate disclosures, so keep it auditable."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Front-loading and hidden padding",
     "text": "Contractors sometimes load early activities with more value than their true cost to improve cash flow, or bury allowances inside rates. Both distort earned value: early progress looks profitable, later work looks loss-making, and the owner overpays early, weakening its position if the contractor fails. Owners should test activity values against their own estimate, look for unusually rich early items such as mobilisation and preliminaries, and require contingency to be visible."
    },
    {
     "type": "scenario",
     "title": "A storm on the solar park",
     "situation": "A hypothetical 100 MW solar park is 40% complete. A storm damages a section of mounting structures already installed. The repair cost is within the range assessed for 'extreme weather damage', which is listed in the risk register and covered by the contingency reserve. The site manager asks the sponsor to release management reserve to pay for the repair. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Agree with the site manager and ask the sponsor for management reserve, since management reserve exists to cover any unplanned cost that arises during construction.",
       "feedback": "Weak. The event was identified and planned for in the risk register, so it is a contingency matter; management reserve is for the unforeseen.",
       "best": false
      },
      {
       "text": "Increase the cost baseline by the full repair cost through a change request, without drawing on either reserve, so that contingency is preserved for later risks.",
       "feedback": "Weak. Re-baselining for a risk the baseline already provides for hides the true performance and weakens control.",
       "best": false
      },
      {
       "text": "Check any insurance recovery, fund the net repair cost from contingency under the agreed drawdown procedure, record it against the risk and update the forecast.",
       "feedback": "Best. This is an identified risk that has occurred: contingency is the right source, insurance may reduce the net cost, and the drawdown must be recorded and reported.",
       "best": true
      },
      {
       "text": "Instruct the contractor to absorb the full repair cost on the grounds that the approved cost baseline cannot be changed once construction has started on site.",
       "feedback": "Weak. Who bears the cost depends on the contract's risk allocation and insurance, not on a rule that the baseline cannot change.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Look at the budget on your current project. Can you see where contingency sits, who can release it and how much remains? How does your cost curve differ from your cash curve?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Cost baseline",
       "def": "The approved, time-phased budget, made up of control account budgets plus contingency reserve, against which cost and earned value performance are measured."
      },
      {
       "term": "Contingency reserve",
       "def": "Budget within the cost baseline set aside for identified risks and estimating uncertainty, drawn down by the project manager under documented rules."
      },
      {
       "term": "Management reserve",
       "def": "Budget outside the cost baseline but within the project budget, held by the sponsor for unforeseen work within scope and released through change control."
      },
      {
       "term": "Cost-loaded schedule",
       "def": "A schedule in which each activity carries its budgeted cost, so that planned spend can be summed by period and plotted over time."
      },
      {
       "term": "S-curve",
       "def": "A graph of cumulative planned (or actual) cost or progress over time, typically shaped like an S because spending is slow at the start, fast in the middle and slow at the end."
      },
      {
       "term": "Retention money",
       "def": "A percentage withheld from interim payments to the contractor as security for completion and defects, usually released in stages at taking-over and the end of the defects period."
      },
      {
       "term": "Advance payment",
       "def": "A payment made to the contractor early in the contract to fund mobilisation or long-lead purchases, usually secured by a guarantee and recovered through deductions from later certificates."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "The cost baseline is the time-phased estimate by control account plus contingency; management reserve sits outside it with the sponsor.",
      "Contingency funds identified risks under agreed drawdown rules; unforeseen work needs change control and management reserve.",
      "Cost is not cash: certification, payment periods, retention and advance recovery make the cash curve lag the cost curve.",
      "Test contractor activity values for front-loading and keep allowances visible, not buried in rates.",
      "Where a carbon budget is set, baseline it and control changes to it alongside cost."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Where does management reserve normally sit in the budget structure?",
       "options": [
        "Inside each work package budget as a hidden allowance",
        "Inside the cost baseline, alongside contingency reserve",
        "Outside the cost baseline but within the project budget",
        "Outside the project budget, within the contractor's price"
       ],
       "answer": 2,
       "explain": "Management reserve is part of the project budget but not of the baseline; it enters the baseline only when released through change control. Contingency, by contrast, sits inside the baseline."
      },
      {
       "q": "An interim certificate is for 8.0 million with 5% retention and no other deductions. How much retention is withheld?",
       "options": [
        "0.40 million",
        "0.80 million",
        "0.04 million",
        "4.00 million"
       ],
       "answer": 0,
       "explain": "8.0 x 5% = 0.40 million. 0.80 million would be 10%, and the other values misplace the decimal point."
      },
      {
       "q": "Why is a typical project cost curve shaped like an S?",
       "options": [
        "Contractors are paid a higher rate per unit of work at the start and end of a project",
        "Contingency reserve is released at the start and the end of the project only",
        "Scheduling software applies a standard S profile to every activity budget",
        "Spending is slow in mobilisation, fast in main construction and slow in commissioning"
       ],
       "answer": 3,
       "explain": "The S shape comes from the rate of work: few resources at the start, peak resources mid-project and a tail through commissioning. It is not caused by pricing, reserves or software defaults."
      },
      {
       "q": "Which item belongs in contingency reserve rather than management reserve?",
       "options": [
        "An unforeseeable change in national environmental legislation",
        "A quantified risk of poor ground at some pile locations",
        "A sponsor's decision to add a new production line",
        "A general allowance for events no one has identified"
       ],
       "answer": 1,
       "explain": "Poor ground at pile locations is an identified, quantified risk, which is what contingency covers. Unforeseeable events belong to management reserve, and new scope requires a change and new funding."
      },
      {
       "q": "A certificate for 10.0 million has 5% retention and a 10% advance-payment recovery. What is the net payment?",
       "options": [
        "9.50 million",
        "9.00 million",
        "8.50 million",
        "8.00 million"
       ],
       "answer": 2,
       "explain": "10.0 - 0.5 (retention) - 1.0 (advance recovery) = 8.50 million. 9.50 and 9.00 apply only one of the two deductions."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l3",
   "title": "Earned Value Fundamentals",
   "subtitle": "PV, EV and AC: separating cost performance from schedule performance",
   "minutes": 36,
   "objectives": [
    "Define planned value, earned value and actual cost and obtain each from project data",
    "Calculate CV, SV, CPI and SPI for a project and for its control accounts",
    "Interpret earned value results and recognise the classic traps"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Comparing actual spend with the budget tells you very little on its own. If a project has spent 22.5 against a plan of 20.0 by now, is that because more work has been done than planned, or because the work is costing more than it should? **Earned value management (EVM)** answers the question by adding a third measure: the budgeted value of the work actually completed. With three numbers, **planned value**, **earned value** and **actual cost**, the project manager can separate schedule performance from cost performance and spot trends months before the final account."
    },
    {
     "type": "formula",
     "title": "Earned value fundamentals",
     "items": [
      {
       "name": "Planned value (PV)",
       "expr": "PV = budgeted cost of the work scheduled to be done by the status date",
       "meaning": "Read from the cost-loaded baseline (the S-curve) at the status date."
      },
      {
       "name": "Earned value (EV)",
       "expr": "EV = sum of (budget of each work item x its % complete)",
       "meaning": "Budgeted value of the work actually done, measured with objective rules of credit."
      },
      {
       "name": "Actual cost (AC)",
       "expr": "AC = actual cost incurred for the work performed to the status date",
       "meaning": "Booked costs plus accruals for work done but not yet invoiced, on the same basis as the budget."
      },
      {
       "name": "Cost variance",
       "expr": "CV = EV - AC",
       "meaning": "Negative means the work done has cost more than its budget."
      },
      {
       "name": "Schedule variance",
       "expr": "SV = EV - PV",
       "meaning": "Negative means less work has been done than planned, expressed in money."
      },
      {
       "name": "Cost performance index",
       "expr": "CPI = EV / AC",
       "meaning": "Budgeted value earned per unit of money spent; below 1.0 is unfavourable."
      },
      {
       "name": "Schedule performance index",
       "expr": "SPI = EV / PV",
       "meaning": "Rate of progress against the plan; below 1.0 means behind."
      },
      {
       "name": "Variance percentages",
       "expr": "CV% = CV / EV x 100; SV% = SV / PV x 100",
       "meaning": "Allow fair comparison and thresholds across control accounts of different sizes."
      },
      {
       "name": "Percent complete and percent spent",
       "expr": "% complete = EV / BAC x 100; % spent = AC / BAC x 100",
       "meaning": "BAC is the budget at completion. A large gap between the two is an early warning."
      }
     ]
    },
    {
     "type": "text",
     "text": "Return to the hypothetical effluent treatment plant (ETP) from the budgeting lesson, with a budget at completion (BAC) of BDT 40.0 million over 10 months. At the end of month 5 the cumulative planned value read from the S-curve is 20.0. The site team measures physical progress by control account using the rules of credit described in the last lesson of this module, and the cost team collects actual costs including accruals. The status by control account is shown below in BDT million, with indices rounded to two decimals."
    },
    {
     "type": "table",
     "title": "Status at the end of month 5 (BDT million, illustrative)",
     "head": [
      "Control account",
      "PV",
      "EV",
      "AC",
      "CV",
      "SV",
      "CPI",
      "SPI"
     ],
     "rows": [
      [
       "Civil works",
       "8.0",
       "7.5",
       "9.0",
       "-1.5",
       "-0.5",
       "0.83",
       "0.94"
      ],
      [
       "Mechanical equipment and installation",
       "6.0",
       "5.0",
       "6.0",
       "-1.0",
       "-1.0",
       "0.83",
       "0.83"
      ],
      [
       "Electrical and instrumentation",
       "3.0",
       "3.0",
       "4.5",
       "-1.5",
       "0.0",
       "0.67",
       "1.00"
      ],
      [
       "Engineering and project management",
       "3.0",
       "2.5",
       "3.0",
       "-0.5",
       "-0.5",
       "0.83",
       "0.83"
      ],
      [
       "Project total",
       "20.0",
       "18.0",
       "22.5",
       "-4.5",
       "-2.0",
       "0.80",
       "0.90"
      ]
     ]
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "PV, EV and AC by control account at month 5",
     "labels": [
      "Civil",
      "Mechanical",
      "E&I",
      "Eng & PM"
     ],
     "series": [
      {
       "name": "PV",
       "values": [
        8.0,
        6.0,
        3.0,
        3.0
       ]
      },
      {
       "name": "EV",
       "values": [
        7.5,
        5.0,
        3.0,
        2.5
       ]
      },
      {
       "name": "AC",
       "values": [
        9.0,
        6.0,
        4.5,
        3.0
       ]
      }
     ],
     "yLabel": "BDT million",
     "caption": "Illustrative figures from the table. E&I is on schedule (EV equals PV) yet has the worst cost efficiency, while civil works carries the largest absolute overspend."
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Project-level results",
     "text": "CV = 18.0 - 22.5 = **-4.5**: the work done so far has cost 4.5 more than its budget. SV = 18.0 - 20.0 = **-2.0**: work worth 2.0 that should have been done by now is not yet done. CPI = 18.0 / 22.5 = **0.80**: every BDT 1.00 spent has earned only BDT 0.80 of budgeted work. SPI = 18.0 / 20.0 = **0.90**: progress is running at 90% of the planned rate. The project is 45% complete (18.0 / 40.0) but has spent about 56% of its budget (22.5 / 40.0). CV% = -4.5 / 18.0 = -25% and SV% = -2.0 / 20.0 = -10%."
    },
    {
     "type": "matrix",
     "title": "Reading CPI and SPI together",
     "x": "SPI (schedule performance; 1.0 at the centre line)",
     "y": "CPI (cost performance; 1.0 at the centre line)",
     "quadrants": [
      {
       "title": "Behind but economical",
       "items": [
        "Is the work under-resourced?",
        "Is the critical path slipping?",
        "Are costs deferred or not yet booked?"
       ]
      },
      {
       "title": "Ahead and within budget",
       "items": [
        "Is progress over-claimed?",
        "Is the baseline padded?",
        "Can resources move to other work?"
       ]
      },
      {
       "title": "Behind and over cost",
       "items": [
        "Root causes: productivity, design, supply or rework?",
        "A recovery plan is needed"
       ]
      },
      {
       "title": "On or ahead of plan but expensive",
       "items": [
        "Is progress bought with overtime or extra crews?",
        "Was that acceleration agreed and funded?"
       ]
      }
     ],
     "caption": "Each quadrant suggests the first questions to ask, not the answer. The ETP at month 5 (CPI 0.80, SPI 0.90) sits bottom-left."
    },
    {
     "type": "text",
     "text": "Drilling down matters more than the headline. Electrical and instrumentation is exactly on schedule (SPI 1.00) but has spent 1.5 more than it has earned (CPI 0.67): the team may be buying progress with overtime or a more expensive cabling subcontractor. Mechanical is behind and over cost in equal measure (CPI and SPI both 0.83), which on a treatment plant often points to late or incomplete equipment deliveries causing stop-start installation. Civil works shows a large overspend in absolute terms on the biggest account. The project manager now asks why each variance has occurred, not just how big it is, and agrees actions with each control account manager."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Three classic traps",
     "text": "**First**, SV is measured in money, not time: a project can show a large negative SV while the critical path is fine, or an SV near zero while a critical activity is weeks late, so always read EVM together with the schedule. **Second**, SPI drifts back towards 1.0 at the end of every project, because when all work is done EV equals PV even if the project finished late. **Third**, EVM is only as good as the EV figure: subjective percent-complete claims inflate EV and hide trouble, and missing accruals understate AC."
    },
    {
     "type": "flow",
     "title": "The monthly earned value cycle",
     "items": [
      {
       "label": "Baseline",
       "text": "The cost-loaded schedule gives PV for the period"
      },
      {
       "label": "Measure",
       "text": "Rules of credit give EV for each work package"
      },
      {
       "label": "Collect",
       "text": "The cost system gives AC, including accruals"
      },
      {
       "label": "Calculate",
       "text": "CV, SV, CPI and SPI by control account and in total"
      },
      {
       "label": "Analyse",
       "text": "Explain variances beyond agreed thresholds"
      },
      {
       "label": "Act",
       "text": "Corrective actions, updated forecasts and change requests"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "EVM standards and contract forms",
     "text": "ISO 21508:2018 gives international guidance on earned value management, and ISO 21502:2020 places performance measurement within overall project management, so the vocabulary in this lesson is widely shared. EVM works under any contract form, but the source of AC differs: on lump-sum and remeasurement contracts the owner's AC is usually certified value plus accruals, while on target-cost, cost-reimbursable and alliance contracts open-book records give the actual cost of the work directly. Some owners also apply the same planned, earned and actual logic to a carbon budget, tracking embodied carbon against progress."
    },
    {
     "type": "scenario",
     "title": "'We are under budget'",
     "situation": "On a hypothetical hospital block in Chattogram, the monthly report shows actual cost of 14.0 against planned value of 15.0 (BDT million). The contractor's commercial manager says, 'We are 1.0 under budget, everything is fine.' The owner's site engineer, measuring with the agreed rules of credit, puts earned value at 12.0. What should the project manager conclude FIRST?",
     "options": [
      {
       "text": "The project is 1.0 under budget, as the commercial manager says, because actual cost is below the planned value for the period, so no corrective action is needed.",
       "feedback": "Incorrect. Comparing AC with PV mixes cost and schedule. Against the work actually done (EV 12.0), the project has overspent by 2.0.",
       "best": false
      },
      {
       "text": "The project is behind schedule but its cost performance is good, because actual cost is below the planned value and the contractor has therefore spent less than expected.",
       "feedback": "Incorrect. AC below PV is expected when less work has been done; cost performance must be judged against EV.",
       "best": false
      },
      {
       "text": "The figures cannot yet be interpreted, because earned value results are only meaningful once a project has passed the half-way point of its schedule.",
       "feedback": "Incorrect. EVM is useful from early in a project; trends in the first 15-20% are often the most valuable warnings.",
       "best": false
      },
      {
       "text": "The project is behind schedule (SPI 0.80) and over cost for the work done (CPI about 0.86), so variance explanations and recovery actions are needed.",
       "feedback": "Best. SPI = 12.0 / 15.0 = 0.80 and CPI = 12.0 / 14.0 = about 0.86. Both are unfavourable, so the project manager needs explanations and a recovery plan.",
       "best": true
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick one control account you know well. Could you produce PV, EV and AC for it today, and would you trust the EV figure? What would make it more objective?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Planned value (PV)",
       "def": "The authorised budget for the work scheduled to be completed by a given date, read from the time-phased cost baseline."
      },
      {
       "term": "Earned value (EV)",
       "def": "The budgeted value of the work actually completed by a given date, measured using agreed rules of credit."
      },
      {
       "term": "Actual cost (AC)",
       "def": "The cost actually incurred, including accruals, for the work performed up to a given date, recorded on the same basis as the budget."
      },
      {
       "term": "Cost variance (CV)",
       "def": "The difference between earned value and actual cost (EV - AC); a negative value means the completed work has cost more than its budget."
      },
      {
       "term": "Schedule variance (SV)",
       "def": "The difference between earned value and planned value (EV - PV), measured in money; a negative value means less work has been done than planned."
      },
      {
       "term": "Cost performance index (CPI)",
       "def": "The ratio EV / AC, showing the budgeted value earned for each unit of money spent; values below 1.0 indicate cost overrun."
      },
      {
       "term": "Schedule performance index (SPI)",
       "def": "The ratio EV / PV, showing the rate of progress against plan; values below 1.0 indicate work behind schedule."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "PV comes from the time-phased baseline, EV from objective rules of credit, and AC from the cost system including accruals.",
      "CV = EV - AC and CPI = EV / AC measure cost; SV = EV - PV and SPI = EV / PV measure schedule in money terms.",
      "Drill down by control account: a project total can hide very different problems.",
      "Read EVM with the critical path, because SV is money, not time, and SPI drifts back to 1.0 at the end."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A control account has EV = 300 and AC = 375. What is its CPI?",
       "options": [
        "1.25",
        "0.80",
        "0.75",
        "-75"
       ],
       "answer": 1,
       "explain": "CPI = EV / AC = 300 / 375 = 0.80. 1.25 inverts the ratio and -75 is the cost variance, not an index."
      },
      {
       "q": "A control account has PV = 450 and EV = 360. What is its schedule variance?",
       "options": [
        "+90",
        "0.80",
        "-0.20",
        "-90"
       ],
       "answer": 3,
       "explain": "SV = EV - PV = 360 - 450 = -90, meaning work worth 90 is behind plan. 0.80 is the SPI, and +90 has the sign reversed."
      },
      {
       "q": "A control account shows CPI 1.08 and SPI 0.85. What is the most useful first question?",
       "options": [
        "Is the team under-resourced, so that critical work is slipping?",
        "Is the team buying progress with expensive overtime at weekends?",
        "Has the client paid all of the interim certificates on time?",
        "Is the contingency reserve too large for the remaining risks?"
       ],
       "answer": 0,
       "explain": "Good cost efficiency with slow progress often means too few resources, or costs not yet booked. Buying progress with overtime would show the opposite pattern, and payment or reserve questions do not explain the indices."
      },
      {
       "q": "Why might SPI be close to 1.0 on a project that finished three months late?",
       "options": [
        "Because SPI is measured in time units and is reset for late projects",
        "Because AC rises in the final months and offsets the schedule delay",
        "Because at completion EV equals PV, so SPI returns to 1.0 regardless",
        "Because management reserve is added to PV in the final months of work"
       ],
       "answer": 2,
       "explain": "When all the work is done, EV equals the full budget, which equals PV, so SPI = 1.0 however late the finish. SPI is a money-based ratio, AC does not enter it, and reserves do not alter PV in this way."
      },
      {
       "q": "A project has BAC = 800, EV = 200 and AC = 260. What percentage of the work is complete?",
       "options": [
        "25%",
        "32.5%",
        "77%",
        "30%"
       ],
       "answer": 0,
       "explain": "% complete = EV / BAC = 200 / 800 = 25%. 32.5% is the percent spent (AC / BAC), and 77% is the CPI expressed as a percentage."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l4",
   "title": "Forecasting with Earned Value",
   "subtitle": "EAC variants, ETC, VAC, TCPI and earned schedule: telling the sponsor what it will really cost",
   "minutes": 38,
   "objectives": [
    "Calculate EAC with several formulas and explain the assumption behind each",
    "Use ETC, VAC and TCPI to judge whether a forecast or a recovery target is credible",
    "Apply the earned schedule idea and produce an independent EAC with reporting thresholds"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Earned value earns its keep when it is used to forecast. The sponsor's real question is not 'what is the CPI?' but 'what will this cost, and when will it finish?'. EVM offers several **estimate at completion (EAC)** formulas, each embodying a different assumption about future performance. A competent project manager calculates more than one, explains which assumption is most credible and why, and compares the result with a bottom-up re-estimate by the people doing the work."
    },
    {
     "type": "formula",
     "title": "Forecasting formulas",
     "items": [
      {
       "name": "EAC: current cost performance continues",
       "expr": "EAC = BAC / CPI",
       "meaning": "Assumes the cumulative CPI to date is typical of the remaining work; widely used and often realistic."
      },
      {
       "name": "EAC: remaining work at budget rate",
       "expr": "EAC = AC + (BAC - EV)",
       "meaning": "Assumes past variances were one-off (atypical) and the rest of the work will be done exactly to budget."
      },
      {
       "name": "EAC: cost and schedule both influence",
       "expr": "EAC = AC + (BAC - EV) / (CPI x SPI)",
       "meaning": "Assumes schedule pressure will also drive cost, for example paying for acceleration on a late project; usually the most pessimistic."
      },
      {
       "name": "EAC: bottom-up",
       "expr": "EAC = AC + bottom-up ETC",
       "meaning": "The remaining work is re-estimated from current quantities, rates and the latest schedule."
      },
      {
       "name": "Estimate to complete",
       "expr": "ETC = EAC - AC",
       "meaning": "The cost still to be spent from the status date."
      },
      {
       "name": "Variance at completion",
       "expr": "VAC = BAC - EAC",
       "meaning": "Negative means a forecast overrun."
      },
      {
       "name": "TCPI to meet BAC",
       "expr": "TCPI = (BAC - EV) / (BAC - AC)",
       "meaning": "The cost efficiency needed on all remaining work to finish within the original budget."
      },
      {
       "name": "TCPI to meet a revised EAC",
       "expr": "TCPI = (BAC - EV) / (EAC - AC)",
       "meaning": "The efficiency needed to meet an approved revised forecast."
      },
      {
       "name": "Earned schedule (ES)",
       "expr": "ES = C + (EV - PV_C) / (PV_C+1 - PV_C)",
       "meaning": "C is the number of whole periods for which cumulative PV is less than or equal to EV. ES is the time by which the plan expected today's EV (not the CPM early start)."
      },
      {
       "name": "Time-based schedule performance",
       "expr": "SPI(t) = ES / AT; forecast duration = planned duration / SPI(t)",
       "meaning": "AT is the actual time elapsed. Gives a schedule forecast in time units rather than money."
      }
     ]
    },
    {
     "type": "table",
     "title": "Worked forecasts for the ETP at month 5 (BAC 40.0, EV 18.0, AC 22.5, CPI 0.80, SPI 0.90; BDT million)",
     "head": [
      "Measure",
      "Calculation",
      "Result",
      "When it is credible"
     ],
     "rows": [
      [
       "EAC: CPI continues",
       "40.0 / 0.80",
       "50.0",
       "Cost problems are systemic, such as low productivity across trades"
      ],
      [
       "EAC: rest at budget",
       "22.5 + (40.0 - 18.0)",
       "44.5",
       "The overrun came from a one-off cause that has been fixed"
      ],
      [
       "EAC: CPI x SPI",
       "22.5 + 22.0 / (0.80 x 0.90) = 22.5 + 22.0 / 0.72",
       "53.1",
       "Late work will need acceleration or extended site overheads"
      ],
      [
       "EAC: bottom-up",
       "22.5 + 25.0 (re-estimated ETC)",
       "47.5",
       "Fresh quantities and rates from the control account managers"
      ],
      [
       "VAC (using EAC 50.0)",
       "40.0 - 50.0",
       "-10.0",
       "The forecast overrun to report against the budget"
      ],
      [
       "TCPI to meet BAC",
       "(40.0 - 18.0) / (40.0 - 22.5) = 22.0 / 17.5",
       "1.26",
       "The efficiency needed to hit the original budget"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "What the numbers say",
     "text": "The formula forecasts range from 44.5 to 53.1 against a budget of 40.0. To finish on budget, the remaining work would need a CPI of 1.26 when the project has achieved only 0.80 so far, a jump that experience suggests is very unlikely. Using EAC = 50.0, ETC = 50.0 - 22.5 = **27.5**, VAC = **-10.0**, and TCPI to that EAC = 22.0 / 27.5 = **0.80**, which simply matches current performance. The honest message to the sponsor: expect a final cost of roughly 47.5 to 50.0 unless the causes in civil and E&I works are fixed, and decide now whether contingency covers it or whether management reserve and a formal change are needed."
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Range of forecasts for the ETP at month 5",
     "labels": [
      "BAC",
      "Rest at budget",
      "Bottom-up",
      "CPI continues",
      "CPI x SPI"
     ],
     "series": [
      {
       "name": "Forecast final cost",
       "values": [
        40.0,
        44.5,
        47.5,
        50.0,
        53.1
       ]
      }
     ],
     "yLabel": "BDT million",
     "caption": "Illustrative values from the worked table. Every forecast sits well above the 40.0 budget, and the bottom-up re-estimate lands between the optimistic 'rest at budget' figure and the CPI-based ones."
    },
    {
     "type": "text",
     "text": "Schedule variance in money becomes misleading late in a project, so many practitioners add **earned schedule**. Using the S-curve from the budgeting lesson, the EV of 18.0 at month 5 lies between the cumulative PV at month 4 (14.0) and month 5 (20.0). Earned schedule = 4 + (18.0 - 14.0) / (20.0 - 14.0) = 4 + 4 / 6 = **4.67 months**: the project has done the work it planned to have done about two-thirds of the way through month 5. SPI(t) = 4.67 / 5 = **0.93**, and a simple time forecast is 10 / 0.933 = about **10.7 months**. Like every EVM schedule measure, check this against the critical path, which may tell a different story."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Reading earned schedule from the S-curve",
     "labels": [
      "M1",
      "M2",
      "M3",
      "M4",
      "M5",
      "M6",
      "M7",
      "M8",
      "M9",
      "M10"
     ],
     "series": [
      {
       "name": "Cumulative PV",
       "values": [
        2.0,
        5.0,
        9.0,
        14.0,
        20.0,
        26.0,
        31.0,
        35.0,
        38.0,
        40.0
       ]
      },
      {
       "name": "Today's EV level (18.0)",
       "values": [
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0
       ]
      }
     ],
     "yLabel": "BDT million",
     "caption": "Illustrative: the level line at today's EV crosses the planned-value curve between month 4 (14.0) and month 5 (20.0), at about 4.67 months. That crossing is the earned schedule; the project is about a third of a month behind."
    },
    {
     "type": "table",
     "title": "Illustrative reporting thresholds (set the real values in the project controls plan)",
     "head": [
      "Status",
      "CPI or SPI",
      "CV% or SV%",
      "Required action"
     ],
     "rows": [
      [
       "Green",
       "0.95 to 1.10",
       "Within -5% to +10%",
       "Report only"
      ],
      [
       "Amber",
       "0.90 to below 0.95",
       "Between -5% and -10%",
       "Written variance explanation and recovery actions from the control account manager"
      ],
      [
       "Red",
       "Below 0.90",
       "Worse than -10%",
       "Escalate to the project manager and sponsor; formal recovery plan and revised EAC"
      ],
      [
       "Favourable outlier",
       "Above 1.10",
       "Better than +10%",
       "Check for over-claimed progress, padded budgets or costs not yet booked"
      ]
     ]
    },
    {
     "type": "steps",
     "title": "Producing an independent EAC",
     "items": [
      {
       "title": "Check the data",
       "text": "Confirm that EV uses objective rules of credit and that AC includes accruals for work done and goods received."
      },
      {
       "title": "Calculate the formula EACs",
       "text": "Run BAC / CPI, AC + (BAC - EV) and the CPI x SPI version, by control account and in total."
      },
      {
       "title": "Re-estimate the remaining work",
       "text": "Ask control account managers for a bottom-up ETC from remaining quantities, current rates and the latest schedule."
      },
      {
       "title": "Add known changes and risks",
       "text": "Include approved and pending variations, likely claims, the remaining risk exposure from the register, and escalation or contract price adjustment on the remaining work at current indices."
      },
      {
       "title": "Reconcile",
       "text": "Compare bottom-up and formula EACs; challenge any bottom-up figure much better than past performance unless a specific change explains it. Treat automated or AI-generated forecasts as one more input to challenge, not as the answer."
      },
      {
       "title": "Report and decide",
       "text": "Present the range and the recommended EAC with VAC, TCPI, the actions proposed and the decisions needed from the sponsor."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Why cumulative CPI deserves respect",
     "text": "Studies of large defence and engineering programmes have long reported that cumulative CPI tends to change little once a project is roughly 20% complete, and that it seldom improves dramatically afterwards. Treat any forecast that assumes a sudden recovery with suspicion unless a specific, funded change in method, resources or scope explains it. A TCPI well above the CPI achieved to date is a warning sign, not a target."
    },
    {
     "type": "case",
     "title": "Forecasting a hospital block",
     "context": "A hypothetical six-storey hospital block in Chattogram has a BAC of BDT 600 million and a planned duration of 20 months. At month 9, PV = 270, EV = 240 and AC = 300 (BDT million). The contractor's project manager reports an EAC of 610, explaining that the overrun was caused by a one-off piling problem that has now been resolved. The owner's cost engineer notes that the MEP subcontracts, which start next month, were let at prices about 8% above the estimate.",
     "questions": [
      "Calculate CPI, SPI and the EAC using BAC / CPI.",
      "Is the contractor's EAC of 610 credible? Use TCPI to support your view.",
      "What EAC would you report to the sponsor, and why?"
     ],
     "answer": "CPI = 240 / 300 = 0.80, SPI = 240 / 270 = about 0.89, and EAC = 600 / 0.80 = 750. Even if the piling overrun really was one-off, the 'rest at budget' formula gives 300 + (600 - 240) = 660, not 610. Reaching 610 would need a TCPI of (600 - 240) / (610 - 300) = 360 / 310 = about 1.16 on the remaining work, when the project has achieved 0.80 and the MEP packages are already priced above estimate, so 610 is not credible. A reasonable reported EAC lies between about 660 and 750, refined by a bottom-up ETC that includes the known MEP price increase. The project manager should report a figure in that range with its assumptions and trigger a review of contingency and funding now rather than later."
    },
    {
     "type": "scenario",
     "title": "Which forecast goes to the board?",
     "situation": "A hypothetical 50 MW gas-engine power plant is 35% complete with a CPI of 0.92 and an SPI of 0.85. The contract carries liquidated damages for late completion, and the contractor has just proposed weekend working on the critical engine-hall works to recover time. The sponsor asks the project manager which EAC to report to the board. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Report EAC = AC + (BAC - EV), because the overrun to date is modest and the remaining work can reasonably be assumed to proceed at the budgeted rate.",
       "feedback": "Weak. Nothing suggests the overrun was one-off, and planned acceleration will add cost, so this formula is likely to be optimistic.",
       "best": false
      },
      {
       "text": "Report EAC = BAC / CPI only, because it is the most commonly used formula and boards are familiar with it from other projects across the portfolio.",
       "feedback": "Weak. It ignores the cost of the proposed acceleration and the schedule pressure that SPI 0.85 implies.",
       "best": false
      },
      {
       "text": "Compare the formula EACs, including CPI x SPI, with a bottom-up ETC that prices the weekend working, and report a reasoned range and recommendation.",
       "feedback": "Best. Several formulas show the spread of outcomes, the bottom-up ETC captures the specific acceleration cost, and the board gets a recommendation with its assumptions.",
       "best": true
      },
      {
       "text": "Report the original BAC until the contractor's recovery plan has been approved, to avoid alarming the board with forecasts that may yet change.",
       "feedback": "Weak. Withholding a credible forecast undermines governance and leaves the board deciding without the information it needs.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "For a project you know, which EAC formula best reflects how the remaining work will really go? What evidence would you need to defend that choice to a sceptical sponsor?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Budget at completion (BAC)",
       "def": "The total approved budget for the work in the performance measurement baseline; the value that EV will reach when all work is complete."
      },
      {
       "term": "Estimate at completion (EAC)",
       "def": "The forecast total cost of the project or control account at completion, based on actual cost to date plus the expected cost of the remaining work."
      },
      {
       "term": "Estimate to complete (ETC)",
       "def": "The forecast cost of the remaining work from the status date to completion, equal to EAC minus AC."
      },
      {
       "term": "Variance at completion (VAC)",
       "def": "The difference between the budget at completion and the estimate at completion (BAC - EAC); a negative value is a forecast overrun."
      },
      {
       "term": "To-complete performance index (TCPI)",
       "def": "The cost efficiency that must be achieved on the remaining work to meet a target, either BAC or an approved EAC: remaining work divided by remaining funds."
      },
      {
       "term": "Earned schedule",
       "def": "An extension of earned value that finds the time at which the planned value equalled the current earned value, giving schedule variance and performance in time units."
      },
      {
       "term": "Variance threshold",
       "def": "A pre-agreed limit on cost or schedule variance, or on CPI and SPI, beyond which a variance must be explained, escalated or acted on."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Calculate several EACs and state the assumption behind each: BAC / CPI, AC + (BAC - EV) and the CPI x SPI version.",
      "Reconcile formula EACs with a bottom-up ETC that includes changes, risks and price escalation on the remaining work.",
      "A TCPI well above the CPI achieved so far is a warning sign, not a target.",
      "Use earned schedule to express schedule performance in time units, and check it against the critical path.",
      "Report a reasoned range and a recommended EAC early, with the decisions needed from the sponsor."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A project has BAC = 1,000 and a cumulative CPI of 0.80. What is the EAC if current cost performance continues?",
       "options": [
        "800",
        "1,200",
        "1,250",
        "1,800"
       ],
       "answer": 2,
       "explain": "EAC = BAC / CPI = 1,000 / 0.80 = 1,250. 800 multiplies instead of dividing, and 1,200 adds 20% rather than dividing by the index."
      },
      {
       "q": "A project has BAC = 1,000, EV = 400 and AC = 500. What TCPI is needed to finish within the BAC?",
       "options": [
        "1.20",
        "0.83",
        "1.25",
        "0.80"
       ],
       "answer": 0,
       "explain": "TCPI = (BAC - EV) / (BAC - AC) = 600 / 500 = 1.20. 0.80 is the CPI so far and 1.25 is its inverse, neither of which is the required future efficiency."
      },
      {
       "q": "Using BAC = 1,000, EV = 400 and AC = 500, what is the EAC if the remaining work is done at the budgeted rate?",
       "options": [
        "1,250",
        "1,000",
        "1,500",
        "1,100"
       ],
       "answer": 3,
       "explain": "EAC = AC + (BAC - EV) = 500 + 600 = 1,100. 1,250 assumes the CPI continues, and 1,000 ignores the overrun already incurred."
      },
      {
       "q": "A project has EAC = 1,250 and BAC = 1,000. What is the variance at completion?",
       "options": [
        "+250",
        "-250",
        "1.25",
        "-0.25"
       ],
       "answer": 1,
       "explain": "VAC = BAC - EAC = 1,000 - 1,250 = -250, a forecast overrun. +250 has the sign reversed and 1.25 is a ratio, not a variance."
      },
      {
       "q": "When is EAC = AC + (BAC - EV) / (CPI x SPI) most appropriate?",
       "options": [
        "When past overruns came from one event that will not recur",
        "When schedule slippage is expected to drive cost on remaining work",
        "When the project is ahead of plan and under budget everywhere",
        "When no actual costs have yet been recorded against the cost baseline"
       ],
       "answer": 1,
       "explain": "Dividing by CPI x SPI assumes both cost and schedule performance will affect future cost, as when a late project must accelerate. A one-off overrun suits AC + (BAC - EV), and the other conditions make the formula meaningless."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l5",
   "title": "Progress Measurement & Cost Control on Site",
   "subtitle": "Rules of credit, joint measurement, commitments, accruals and capturing the cost of change",
   "minutes": 36,
   "objectives": [
    "Select objective rules of credit for different kinds of site work",
    "Calculate earned value with units-completed, weighted-milestone and fixed-formula methods",
    "Run a monthly cost cycle that tracks commitments, accruals, forecasts and the cost of change"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Earned value depends entirely on how progress is measured. If a foreman's 'about 70% done' becomes EV, then CPI and SPI are opinions. **Rules of credit** fix in advance how each type of work earns value: by units installed, by weighted steps, by fixed formulas or, as a last resort, by estimated percentage. Combined with disciplined cost capture of commitments, accruals and the cost of changes, they give a cost report that the project manager, the sponsor, the lenders and the auditors can all trust."
    },
    {
     "type": "table",
     "title": "Rules of credit",
     "head": [
      "Method",
      "How value is earned",
      "Best for",
      "Watch-out"
     ],
     "rows": [
      [
       "Units completed",
       "EV = budget x (units done / total units)",
       "Repetitive measurable work: metres of cable pulled, piles installed, panels fixed",
       "Units must take similar effort; define 'done' (installed, tested, accepted?)"
      ],
      [
       "Weighted milestones",
       "A pre-agreed % is credited as each observable step is reached",
       "Discrete items with distinct stages: pumps, transformers, valves, steel frames",
       "Steps must be objectively verifiable and weights agreed before work starts"
      ],
      [
       "Fixed formula (0/100, 50/50, 20/80)",
       "A fixed % at start, the remainder at finish",
       "Short activities lasting one or two reporting periods",
       "On long activities it distorts EV; 0/100 is the most conservative"
      ],
      [
       "Percent complete (estimated)",
       "The responsible engineer estimates the % complete",
       "Work with no clear units, such as design studies",
       "Subjective: needs supporting evidence and independent checks"
      ],
      [
       "Level of effort",
       "EV equals PV as time passes",
       "Support work: site management, security, document control",
       "Earns value without output; keep it separate and small"
      ],
      [
       "Apportioned effort",
       "EV is a fixed % of a related discrete task's EV",
       "Inspection, QA/QC and supervision tied to production",
       "Only as good as the measurement of the base task"
      ]
     ]
    },
    {
     "type": "tree",
     "title": "Choosing a rule of credit",
     "root": {
      "label": "What kind of work is it?",
      "children": [
       {
        "label": "Countable, similar units",
        "children": [
         {
          "label": "Units completed",
          "text": "Metres, piles, panels, columns"
         }
        ]
       },
       {
        "label": "Discrete item with stages",
        "children": [
         {
          "label": "Weighted milestones",
          "text": "Pumps, transformers, valves"
         }
        ]
       },
       {
        "label": "Short: one or two periods",
        "children": [
         {
          "label": "Fixed formula",
          "text": "0/100, 50/50 or 20/80"
         }
        ]
       },
       {
        "label": "Support tied to production",
        "children": [
         {
          "label": "Apportioned effort",
          "text": "Inspection, QA/QC"
         }
        ]
       },
       {
        "label": "Support with no output",
        "children": [
         {
          "label": "Level of effort",
          "text": "Keep small and separate"
         }
        ]
       },
       {
        "label": "None of these fits",
        "children": [
         {
          "label": "Estimated % complete",
          "text": "With evidence and independent checks"
         }
        ]
       }
      ]
     },
     "caption": "Work down from the nature of the work to the most objective rule that fits it. Estimated percent complete is the last resort, not the default."
    },
    {
     "type": "table",
     "title": "Weighted milestones: installing a dyeing machine (hypothetical budget BDT 2.0 million)",
     "head": [
      "Step",
      "Weight",
      "Cumulative",
      "EV when step reached (BDT million)"
     ],
     "rows": [
      [
       "Received on site and inspected",
       "10%",
       "10%",
       "0.20"
      ],
      [
       "Set on foundation and levelled",
       "20%",
       "30%",
       "0.60"
      ],
      [
       "Aligned and grouted",
       "20%",
       "50%",
       "1.00"
      ],
      [
       "Piping, utilities and electrical connected",
       "30%",
       "80%",
       "1.60"
      ],
      [
       "Tested and released for commissioning",
       "20%",
       "100%",
       "2.00"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Units completed: a cable package",
     "text": "An 11 kV and LV cable package has a budget of BDT 6.0 million for 12,000 m of cable. At month end, 4,500 m have been pulled, tested and tagged. EV = 6.0 x 4,500 / 12,000 = **2.25**, which is 37.5% complete. If the subcontractor claims 50% because 'the hard runs are done', the project manager can either agree, before work starts, a weighted rule that reflects difficulty, or hold to the measured 37.5%. Arguing about the rules after the work is done is how EV loses its credibility."
    },
    {
     "type": "text",
     "text": "Physical progress is backed by **quantity surveys**: joint measurement of concrete poured, steel erected, pipe welded and tested, or cable pulled, usually agreed each month between the contractor's and the owner's engineers and reconciled with drawings, delivery records and test certificates. On the cost side, the controller tracks several figures for every cost code: **commitments** (orders and subcontracts placed), **actuals** (invoices received and booked) and **accruals** (work done or goods received but not yet invoiced). Without accruals, AC is understated and CPI looks better than it really is. Without commitments, the forecast misses money that is already spoken for."
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Reality capture as progress evidence",
     "text": "Drone surveys, laser scans and 360-degree photo walks, compared with the BIM model and stored in the CDE, give dated, objective evidence for joint measurement: earthwork volumes, steel erected, pipe runs installed. Automated or AI-based recognition of installed elements can speed up the counting, but a named engineer checks and signs off the quantities, especially where a rule of credit defines 'done' as tested or accepted, which a camera cannot see. In volatile markets also watch commitments closely: quotations with short validity, price-adjustment provisions and expediting costs can move the forecast before a single invoice arrives."
    },
    {
     "type": "steps",
     "title": "The monthly site cost cycle",
     "items": [
      {
       "title": "Cut-off",
       "text": "Fix the reporting cut-off date and freeze progress and cost data at that date."
      },
      {
       "title": "Measure",
       "text": "Jointly measure quantities and milestone steps; keep evidence such as photographs, test certificates and inspection records."
      },
      {
       "title": "Capture cost",
       "text": "Book invoices, accrue for work done and goods received, and update commitments for new orders and variations."
      },
      {
       "title": "Calculate",
       "text": "Produce EV, AC, CPI and SPI by control account and update the forecast at completion for each cost code."
      },
      {
       "title": "Explain",
       "text": "Control account managers explain variances beyond the agreed thresholds and propose actions."
      },
      {
       "title": "Report and act",
       "text": "Issue the cost report, agree actions in the monthly review and track them to closure."
      }
     ]
    },
    {
     "type": "sequence",
     "title": "From monthly measurement to certified value and earned value",
     "actors": [
      "Contractor",
      "Owner's engineer",
      "Cost controller",
      "Project manager"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Progress claim at the cut-off date",
       "note": "Quantities, photos, test records"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Joint measurement on site",
       "note": "Scan data checked on the ground"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Agreed quantities signed by both",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Interim certificate for agreed work"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Measured progress by work package"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Apply rules of credit; post accruals",
       "note": "EV and AC at the same cut-off"
      },
      {
       "from": 2,
       "to": 3,
       "label": "EV, AC, CPI, SPI and forecasts"
      },
      {
       "from": 3,
       "to": 0,
       "label": "Variance review and agreed actions"
      }
     ],
     "caption": "Nothing is credited before it is measured, and the same agreed quantities drive both the payment certificate and earned value, so the two reports reconcile."
    },
    {
     "type": "template",
     "title": "Cost report by cost code",
     "purpose": "Shows, for each cost code, how much is budgeted, committed, spent and forecast, so that overruns are visible while there is still time to act.",
     "columns": [
      "Cost code / description",
      "Current budget",
      "Committed to date",
      "Actual + accrued to date",
      "Forecast at completion",
      "Variance (budget - forecast)",
      "Comment / action"
     ],
     "example": [
      [
       "3.2 Pumps and blowers",
       "6.0",
       "5.6",
       "3.1",
       "6.3",
       "-0.3",
       "Blower price increase; seek value engineering on spares"
      ],
      [
       "4.1 11 kV and LV cabling",
       "6.0",
       "4.8",
       "2.3",
       "6.1",
       "-0.1",
       "Slow productivity on first runs; monitor monthly"
      ]
     ],
     "rows": 8
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Capture the cost of change as it happens",
     "text": "Every variation instruction, site instruction or RFI response that changes the work should receive its own change reference and cost code on the day it is issued. Labour, plant and materials used on the changed work are then recorded separately, with daywork sheets signed daily and delivery tickets tagged, so that the cost can be valued, claimed or defended later. Changes valued months afterwards from memory are where both owners and contractors lose money; the rules for valuing variations are developed in Procure."
    },
    {
     "type": "checklist",
     "title": "Monthly cost control checklist",
     "items": [
      "Every work package has an agreed rule of credit, recorded before work started.",
      "Progress is backed by joint measurement or other objective evidence.",
      "Level-of-effort budgets are separated from discrete work and kept small.",
      "Accruals are posted for work done and materials received but not yet invoiced.",
      "Commitments are updated for new orders, subcontracts and approved variations.",
      "Each change has its own reference and cost capture from the day it was instructed.",
      "Forecasts at completion are updated for each cost code, not copied from the budget.",
      "Variances beyond thresholds have written explanations and actions with named owners.",
      "Contingency drawdowns and the remaining balance are reported.",
      "The cost report reconciles with the finance ledger at the cut-off date."
     ]
    },
    {
     "type": "case",
     "title": "Healthy figures on a factory utilities package",
     "context": "A hypothetical garment factory expansion in Gazipur reports a CPI of 1.05 and an SPI of 1.02 for its utilities package at month 6. The owner's newly appointed cost engineer walks the site and finds that the boiler feed pumps are credited at 80% although they have only been set on their foundations; that steam piping is credited using a percent complete estimated by the subcontractor; and that invoices for BDT 1.2 million of pipe fittings delivered last month have not yet been booked or accrued.",
     "questions": [
      "What is wrong with how EV and AC are being measured?",
      "In which direction are the errors pushing CPI and SPI?",
      "What should the project manager change before the next report?"
     ],
     "answer": "EV is inflated because the pumps are credited far beyond the observable step reached: under a weighted-milestone rule like the dyeing machine example in this lesson, 'set on foundation' would earn about 30%. The steam piping uses subjective estimates rather than measured welds, metres or test packs. AC is understated because delivered fittings worth 1.2 million have not been accrued. Both errors push CPI upwards and the EV error also pushes SPI upwards, so the package probably looks healthier than it is. The project manager should agree weighted-milestone rules for equipment and units-completed rules for piping, re-measure jointly, post the missing accruals, restate the month-6 figures and explain the restatement openly in the next report."
    },
    {
     "type": "scenario",
     "title": "Whose 60%?",
     "situation": "On a hypothetical metro station box, the structural steel subcontractor's monthly claim credits 60% of the roof steel package, while the owner's engineer measures 45% of the tonnage erected and bolted. The subcontractor argues that its off-site fabrication progress should count. The subcontract and the project controls plan both state that steel earns value on erection. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Accept the 60% claim to preserve a good working relationship, and settle any difference with the subcontractor later when the final account is agreed.",
       "feedback": "Weak. It inflates EV, misleads the owner's reporting and stores up a dispute for the final account.",
       "best": false
      },
      {
       "text": "Report 45% under the agreed rule of credit and, separately, discuss whether off-site fabrication should earn value under a formally agreed future rule change.",
       "feedback": "Best. EV must follow the agreed rule. If fabrication progress deserves recognition, that is a separate, documented change to the rule, not a monthly negotiation.",
       "best": true
      },
      {
       "text": "Average the two figures and report 52.5% as a fair compromise between the subcontractor's claim and the owner's measurement, to avoid a dispute this month.",
       "feedback": "Weak. Splitting the difference has no basis in the agreed rule and makes EV a matter of bargaining.",
       "best": false
      },
      {
       "text": "Stop reporting steel progress altogether until the contract administrator has formally decided the dispute between the subcontractor and the owner's engineer.",
       "feedback": "Weak. Suspending measurement leaves management blind; the agreed rule already gives a reportable figure.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Choose two work packages on your project, one repetitive and one made up of discrete equipment items. Which rule of credit is used for each today, and would an auditor accept the evidence behind this month's figure?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Rule of credit",
       "def": "A pre-agreed method stating how a type of work earns value as it progresses, such as units completed, weighted milestones or a fixed formula."
      },
      {
       "term": "Units-completed method",
       "def": "A rule of credit in which earned value is the budget multiplied by the proportion of units completed, such as metres of cable pulled or piles installed."
      },
      {
       "term": "Weighted-milestone method",
       "def": "A rule of credit that divides a discrete item of work into observable steps, each carrying an agreed percentage of the budget that is earned when the step is reached."
      },
      {
       "term": "Fixed-formula method",
       "def": "A rule of credit that credits a fixed percentage of budget when an activity starts and the remainder when it finishes, such as 0/100, 50/50 or 20/80; suitable for short activities."
      },
      {
       "term": "Level of effort",
       "def": "Support work, such as site management or security, that has no measurable output and earns value in step with the passage of time, so its EV always equals its PV."
      },
      {
       "term": "Commitment",
       "def": "An obligation to spend money created by a placed order or subcontract that has not yet been invoiced, tracked so that forecasts include money already spoken for."
      },
      {
       "term": "Accrual",
       "def": "A cost recognised for work done or goods received before the invoice is booked, included in actual cost so that cost performance is not overstated."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Agree a rule of credit for every work package before work starts, choosing the most objective rule that fits.",
      "Back progress with joint measurement and evidence; reality-capture data helps, but an engineer verifies it.",
      "Post accruals and update commitments every month, or CPI and forecasts will look better than they are.",
      "Give every change its own reference and cost capture from the day it is instructed."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A pump with step weights of 10/20/20/30/20 has reached 'aligned and grouted', the third step. Its budget is 500k. What is its EV?",
       "options": [
        "150k",
        "250k",
        "300k",
        "400k"
       ],
       "answer": 1,
       "explain": "Cumulative weight after the third step is 10 + 20 + 20 = 50%, so EV = 0.50 x 500k = 250k. 150k counts only the first two steps, and 400k assumes the next step is already done."
      },
      {
       "q": "Under a 0/100 fixed-formula rule, a three-week activity that has started but is not yet finished earns:",
       "options": [
        "50% of its budget, half at start",
        "The foreman's estimated percentage",
        "100% of its budget, once started",
        "0% of its budget until it finishes"
       ],
       "answer": 3,
       "explain": "A 0/100 rule credits nothing at the start and the full budget only on completion. 50% would apply under a 50/50 rule, and estimated percentages are a different rule of credit."
      },
      {
       "q": "Why must accruals be included in actual cost?",
       "options": [
        "Accruals replace the need to track commitments in the cost report",
        "Accruals are required only by contractors and never by owners",
        "Without them AC is understated and CPI looks better than it is",
        "Accruals convert the planned value of the period into earned value"
       ],
       "answer": 2,
       "explain": "Work done or goods received but not yet invoiced are real costs; omitting them understates AC and overstates CPI. Accruals do not replace commitments, apply to both parties and have nothing to do with converting PV to EV."
      },
      {
       "q": "Which rule of credit best suits 40 identical lighting columns being installed along an expressway?",
       "options": [
        "Units completed, crediting each installed column",
        "Level of effort, crediting value as time passes",
        "Apportioned effort, tied to the road surfacing",
        "Percent complete as estimated by the site supervisor"
       ],
       "answer": 0,
       "explain": "Identical, countable items are ideal for the units-completed method. Level of effort ignores output, apportioned effort ties value to unrelated work, and estimated percentages are needlessly subjective."
      },
      {
       "q": "A cable package has a budget of 6.0 million for 12,000 m. 3,000 m have been pulled and tested. What is its EV?",
       "options": [
        "1.0 million",
        "2.0 million",
        "1.5 million",
        "3.0 million"
       ],
       "answer": 2,
       "explain": "EV = 6.0 x 3,000 / 12,000 = 1.5 million (25% complete). 3.0 million would be half the package, and the other figures do not follow from the units."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m1",
  "q": "A hypothetical rooftop solar retrofit for a Gazipur garment factory costs 400 (USD thousand) now and saves 150 at the end of each of the next three years. At a 10% discount rate, what is the NPV to the nearest whole number?",
  "options": [
   "+50",
   "-27",
   "+27",
   "-50"
  ],
  "answer": 1,
  "explain": "PV of savings = 150 x (0.9091 + 0.8264 + 0.7513) = 150 x 2.4869 = 373, so NPV = 373 - 400 = -27. +50 ignores discounting (450 - 400), +27 has the sign reversed and -50 is not supported by any correct discounting."
 },
 {
  "module": "m1",
  "q": "At a gate review for a hypothetical LNG import jetty, the estimate still rests on a benchmark unit rate, no marine geotechnical survey has been done and the permit pathway is unknown. The sponsor wants approval to sign the main construction contract. What should the gate reviewers decide?",
  "options": [
   "Recycle the phase, funding the survey, permit plan and a firmer estimate before deciding again",
   "Approve the award, because delaying the jetty would defer the revenue it was built to earn",
   "Approve the award but add a large contingency to cover the missing survey and permit work",
   "Stop the project permanently, because any gap in definition at this stage shows the case is unsound"
  ],
  "answer": 0,
  "explain": "The gate exists to prevent irreversible commitment before key information is available, so recycling to complete the front end is right. Approving with or without extra contingency commits to a contract on unknown ground and permits, while stopping permanently overreacts to gaps that can be closed."
 },
 {
  "module": "m1",
  "q": "A hypothetical pump replacement costs 200 now and returns 80 at the end of each year for four years. Discount factors at 12% are 0.893, 0.797, 0.712 and 0.636. What is the discounted payback, to one decimal place?",
  "options": [
   "2.5 years",
   "2.8 years",
   "3.0 years",
   "3.2 years"
  ],
  "answer": 3,
  "explain": "Discounted inflows are 71.4, 63.8, 57.0 and 50.9; cumulative PV is 192.2 after year 3, leaving 7.8 to recover from 50.9 in year 4, so 3 + 7.8 / 50.9 = 3.2 years. 2.5 years is the simple payback, and the other values misplace the recovery point."
 },
 {
  "module": "m1",
  "q": "A public flood embankment in a hypothetical river town has a present value of benefits of 540 and a present value of costs, capital plus maintenance, of 450. What is the benefit-cost ratio and what does it indicate?",
  "options": [
   "0.83, showing that costs exceed benefits in present value",
   "90, which is the benefit-cost ratio expressed as a money value",
   "1.20, showing that benefits exceed costs in present value",
   "1.20, showing that the IRR is exactly 20% above the discount rate"
  ],
  "answer": 2,
  "explain": "BCR = 540 / 450 = 1.20, so present-value benefits exceed costs. 0.83 inverts the ratio, 90 is the NPV rather than a ratio, and a BCR says nothing directly about the IRR."
 },
 {
  "module": "m1",
  "q": "In the business case for a hypothetical textile mill's new boiler house, NPV becomes zero if gas savings fall by 6%, while the vendor guarantees only 90% of the claimed savings. What is the most useful conclusion for the investment committee?",
  "options": [
   "The case is robust, because the vendor has guaranteed most of the savings",
   "The case is fragile, because guaranteed savings sit below the switching point",
   "The case is robust, because a 6% change in savings is only a small variation",
   "The case cannot be judged until an IRR has been calculated for the whole project"
  ],
  "answer": 1,
  "explain": "The switching value is a 6% fall, but the guarantee protects only down to a 10% shortfall, so a guaranteed outcome could still give a negative NPV. Calling the case robust ignores that gap, and an IRR would not change the conclusion that the case is sensitive to savings."
 },
 {
  "module": "m1",
  "q": "During execution of a hypothetical 132/33 kV substation, the project manager forecasts that a cable route diversion will add cost beyond her approved tolerance but within the sponsor's limit. What should she do FIRST?",
  "options": [
   "Escalate to the sponsor with the impact assessment and options for a decision",
   "Absorb the cost in the contractor's next payment without recording it",
   "Approve the diversion herself, since the steering committee meets only quarterly",
   "Wait for the board to consider it at the annual capital planning meeting"
  ],
  "answer": 0,
  "explain": "Tolerances define who decides: a change beyond the PM's limit but within the sponsor's goes to the sponsor with the evidence. Approving it herself exceeds her authority, hiding it undermines control, and the board is the wrong level and far too slow."
 },
 {
  "module": "m1",
  "q": "A hospital trust compares three options to expand diagnostic imaging but has left out a do-nothing option, arguing that 'doing nothing is not acceptable'. Why should the project manager insist on including it?",
  "options": [
   "Because funders always pick the cheapest option once it is shown",
   "Because do-nothing removes the need for any sensitivity analysis",
   "Because it allows the trust to skip a full options analysis",
   "Because it is the baseline for measuring every option's benefits"
  ],
  "answer": 3,
  "explain": "Even an unacceptable do-nothing case is the reference against which benefits are measured, so leaving it out distorts every option's value. Funders do not always pick the cheapest option, and do-nothing neither replaces sensitivity analysis nor the options analysis itself."
 },
 {
  "module": "m1",
  "q": "The owner of a hypothetical combined-cycle gas plant is deciding when to involve its future operations team. The EPC contract will be signed in six months. When does the operations team's input create the most value?",
  "options": [
   "During commissioning, when they can witness the performance tests",
   "After taking over, when they become responsible for the asset",
   "During front-end definition, before the design basis is frozen",
   "During the defects period, when warranty claims are raised"
  ],
  "answer": 2,
  "explain": "Operator input is cheapest and most influential before the design basis is frozen and the EPC contract signed. Later involvement is still useful, but at commissioning, takeover or the defects period changes are expensive or impossible."
 },
 {
  "module": "m2",
  "q": "During FEED for a hypothetical LNG regasification terminal, the owner's operations team asks for the unloading arms to remain operable at a higher wind speed than the basis of design assumes. Where should this requirement be captured FIRST so that all designers work to it?",
  "options": [
   "In the EPC contractor's method statement for arm installation",
   "In the minutes of the next site coordination meeting only",
   "In a revised basis of design, approved through change control",
   "In a verbal instruction from the operations manager to the designer"
  ],
  "answer": 2,
  "explain": "The basis of design is the single reference every discipline works to, and changing it needs approval. Meeting minutes and method statements are not design references, and a verbal instruction bypasses control and reaches only one designer."
 },
 {
  "module": "m2",
  "q": "The scope for a hypothetical pharmaceutical warehouse says the contractor will provide 'all HVAC works' but is silent on the chilled water supply from the owner's central plant 200 metres away. Which addition to the scope statement best prevents a future dispute?",
  "options": [
   "A longer list of HVAC equipment with brand-neutral performance data sheets",
   "A battery limit stating where the contractor's chilled water scope begins",
   "A requirement that the contractor follows all applicable HVAC codes",
   "A clause asking the two parties to cooperate in good faith on HVAC"
  ],
  "answer": 1,
  "explain": "The dispute risk lies at the boundary between the owner's plant and the contractor's works, so a clearly defined battery limit resolves it. More equipment detail, code compliance or a goodwill clause leave the boundary just as unclear."
 },
 {
  "module": "m2",
  "q": "A contractor's WBS for a hypothetical cement plant upgrade is organised as civil, mechanical, electrical and instrumentation, each spanning all plant areas. The owner wants to measure progress area by area to plan a phased start-up. What is the best response?",
  "options": [
   "Restructure the upper WBS levels by plant area, with disciplines below",
   "Replace the WBS with a cost breakdown structure organised by cost type",
   "Keep the discipline WBS and ask for a separate monthly narrative for each area",
   "Let each discipline lead choose its own WBS structure and coding"
  ],
  "answer": 0,
  "explain": "A deliverable-oriented WBS with plant areas at the upper levels lets progress be measured by area for phased start-up. A narrative adds no structured data, a CBS shows money rather than deliverables, and separate discipline structures fragment control."
 },
 {
  "module": "m2",
  "q": "In a HAZOP of a hypothetical caustic dosing system at an effluent treatment plant, the team identifies 'more flow' of caustic if the dosing pump controller fails high, with only a manual valve as a safeguard. What is the correct outcome for the study?",
  "options": [
   "Note the deviation only, since a HAZOP records hazards but never actions",
   "Ask the vendor to guarantee the controller will never fail in service",
   "Remove the node from the study because the pump is vendor-supplied",
   "Raise an action with an owner to provide an adequate added safeguard"
  ],
  "answer": 3,
  "explain": "When safeguards are inadequate, a HAZOP raises an owned action, for example a high-flow trip or a flow-limiting device. HAZOPs do record actions, no vendor can guarantee zero failures, and vendor packages remain within the study."
 },
 {
  "module": "m2",
  "q": "On a hypothetical university laboratory block, structural design was frozen two months ago. The faculty now asks for a heavier fume-cupboard extraction fan on the roof, which will increase roof loads. What should the project manager do?",
  "options": [
   "Instruct the contractor to install the fan and check the roof afterwards",
   "Reject the request outright, since a frozen design cannot be changed at all",
   "Process it as a change request with structural and MEP impact assessment",
   "Ask the faculty to buy the fan separately so it falls outside the project"
  ],
  "answer": 2,
  "explain": "After a freeze, changes are still possible but must go through change control with impact assessment. Outright rejection misreads the freeze, installing first is unsafe, and buying the fan separately hides a structural change from control."
 },
 {
  "module": "m2",
  "q": "A hypothetical substation project has one very large control account, '4.2 Transformers and switchgear', covering design, supply, installation and testing over two years under one manager. Reports show the account on track, yet site teams report late switchgear deliveries. What is the most likely weakness?",
  "options": [
   "The 100% rule has been applied far too strictly to the electrical scope",
   "The control account is too large, so problems hide inside its totals",
   "The RAM has too few parties marked as informed for the account",
   "The basis of design does not list the correct code editions"
  ],
  "answer": 1,
  "explain": "Very large control accounts average out problems, so a late delivery can be masked by progress elsewhere. The 100% rule, the number of informed parties and code editions do not explain why a delay is invisible in the reports."
 },
 {
  "module": "m2",
  "q": "On a hypothetical metro depot, a value engineering exercise at detailed design replaced the specified roof system with a cheaper one without checking its fire rating or maintenance access. Which statement best describes the problem?",
  "options": [
   "It was cost cutting, since the required functions were not verified",
   "Value engineering is never appropriate once FEED has been completed",
   "Value engineering should be done only by the contractor after award",
   "The roof change should have been logged as a trend notice and closed"
  ],
  "answer": 0,
  "explain": "Value engineering must keep required functions such as fire performance and maintainability; without that check it is cost cutting. VE is not limited to contractors, is still possible after FEED with care, and a trend notice does not replace assessment."
 },
 {
  "module": "m3",
  "q": "During a monthly update of a hypothetical cement mill upgrade, the planner reports that kiln burner replacement has ES = day 20, EF = day 26, LS = day 24 and LF = day 30. The mechanical contractor asks how long this activity can slip before completion is threatened. What is the correct answer?",
  "options": [
   "4 days, which is its total float (LS - ES or LF - EF)",
   "6 days, which is the duration of the activity itself",
   "10 days, measured from its early start to its late finish",
   "0 days, because only free float may be used by a contractor"
  ],
  "answer": 0,
  "explain": "Total float = LS - ES = 24 - 20 = 4 days, and LF - EF = 30 - 26 gives the same answer. The duration (6) and the span from ES to LF (10) are not float, and whether float may be used is a contract question, not a calculation."
 },
 {
  "module": "m3",
  "q": "A hypothetical offshore wind substation topside has a critical path with a PERT mean of 120 working days and a path variance of 64 days squared. The developer asks for the chance of completing the topside within 128 working days. What is the best estimate?",
  "options": [
   "About 50%, because the target is close to the PERT mean",
   "About 55%, using z = 8 / 64 = 0.125",
   "About 98%, treating the 8-day gap as two standard deviations",
   "About 84%, using z = (128 - 120) / 8 = 1.0"
  ],
  "answer": 3,
  "explain": "The path standard deviation is the square root of the variance, 8 days, so z = (128 - 120) / 8 = 1.0, about 84%. Dividing by the variance gives the wrong z of 0.125, the gap is one standard deviation rather than two, and 50% applies only at the mean itself."
 },
 {
  "module": "m3",
  "q": "A planner on a hypothetical airport terminal expansion reports a 70% chance of meeting the baggage-system handover milestone, calculated with PERT on the critical path. Two other near-critical paths, systems integration and airside works, feed the same milestone. What should the project manager tell the sponsor?",
  "options": [
   "The chance is above 70%, because parallel paths give the project more ways to recover lost time",
   "The chance is exactly 70%, because PERT already accounts for the variance of every path in the project",
   "The true chance is probably below 70% because of merge bias, so all paths should be analysed together",
   "The chance cannot be estimated at all until the critical path work has been completed on site"
  ],
  "answer": 2,
  "explain": "When several paths merge, all must finish on time, so the joint probability is lower than the critical path alone suggests. PERT uses only the critical path's variance, parallel paths add risk rather than recovery options, and useful estimates are possible long before completion."
 },
 {
  "module": "m3",
  "q": "A hypothetical hospital block forecasts completion 3 days late against a contract date carrying delay damages of 8k per day; site indirect costs are 3k per day. On the critical path, activity X can be crashed 1 day at 5k per day and activity Y 2 days at 9k per day; activity Z, which has float, can be crashed at 2k per day. Assuming no other path becomes critical, what is the most economical plan?",
  "options": [
   "Crash Z by 3 days, because it has the cheapest cost slope available",
   "Crash X by 1 day and Y by 2 days, recovering all 3 days of the delay",
   "Crash nothing, because every critical slope exceeds the 3k daily indirect cost",
   "Crash X by 1 day only and accept 2 days of delay damages at 8k per day"
  ],
  "answer": 1,
  "explain": "Each day recovered saves 8k of damages plus 3k of indirect cost, 11k in all. X (5k) and Y (9k) are both below 11k, so crashing both costs 23k and saves 33k. Z is not critical, comparing slopes with indirect cost alone ignores the damages, and stopping after X leaves savings unclaimed."
 },
 {
  "module": "m3",
  "q": "An owner reviewing a contractor's baseline for a hypothetical container yard expansion at Chattogram port finds that over a third of the activities carry 'must finish on' constraints. What is the main risk for the owner if this baseline is accepted as submitted?",
  "options": [
   "Float and the critical path are distorted, so delays cannot be analysed reliably",
   "The schedule will be far too detailed for monthly reporting to the port authority",
   "The contractor will be unable to load resources onto the constrained activities",
   "The scheduling software will refuse to calculate early and late dates at all"
  ],
  "answer": 0,
  "explain": "Hard constraints override logic, so float and the critical path reflect typed dates rather than the network, which undermines progress analysis and later delay assessment. Constraints do not change the level of detail, prevent resource loading or stop the software calculating."
 },
 {
  "module": "m3",
  "q": "A hypothetical semiconductor fab cleanroom fit-out has a fixed handover date. The early-start schedule shows electricians peaking at 220 for three weeks, while welfare facilities and supervision suit about 160. Several electrical activities have 10-20 days of float. Which technique should the planner apply first?",
  "options": [
   "Resource levelling, accepting a later handover date to hold the peak at 160",
   "Crashing the electrical activities so that the peak period becomes shorter",
   "Fast-tracking the electrical work so that it overlaps more with mechanical work",
   "Resource smoothing, moving electrical work within its float to cut the peak"
  ],
  "answer": 3,
  "explain": "With a fixed end date and activities that have float, smoothing reduces the peak without moving handover. Levelling would accept a later date unnecessarily, while crashing and fast-tracking concentrate work further instead of spreading it."
 },
 {
  "module": "m3",
  "q": "At a schedule update on a hypothetical elevated expressway ramp, the deck waterproofing crew has started a span before parapet installation, its predecessor, has finished. The planner must choose how the software will treat the remaining waterproofing work. Which approach is usually more realistic?",
  "options": [
   "Deleting the logic link permanently, because the crew has shown it is unnecessary",
   "Progress override, so the remaining waterproofing ignores the parapet link from now on",
   "Retained logic, so the remaining waterproofing still waits for the parapets to finish",
   "Adding a hard 'finish on' constraint to the waterproofing at its baseline date"
  ],
  "answer": 2,
  "explain": "Retained logic assumes the rest of the work still depends on the predecessor, which is usually true when only part of an area has been released. Progress override and deleting the link can hide a real dependency, and a hard constraint would distort float."
 },
 {
  "module": "m3",
  "q": "On a hypothetical factory roof replacement, 'install skylights' has an early finish of day 18 and a total float of 9 days. Its only successor, 'fix roof closures', has an early start of day 22. The skylight subcontractor will now finish 3 days late. What is the effect on the schedule?",
  "options": [
   "Completion moves 3 days later, because the activity itself has been delayed",
   "No effect on the successor or on completion, as 3 days is within free float of 4",
   "The successor starts 3 days late, but completion is protected by total float",
   "Completion moves 6 days later, because total float has now been reduced to 6 days"
  ],
  "answer": 1,
  "explain": "Free float = successor ES - EF = 22 - 18 = 4 days, so a 3-day slip delays neither the successor nor completion; total float falls from 9 to 6 days. The other options ignore float or confuse total float with free float."
 },
 {
  "module": "m4",
  "q": "A hypothetical 132 kV transmission line project reports PV = 48, EV = 42 and AC = 40 (BDT million) at month 7. Tower foundations in a flood-prone section are on the critical path. What does the data show, and what should the project manager look at first?",
  "options": [
   "Over budget but ahead of schedule, so look for overtime that is buying progress at a premium",
   "Within budget for the work done but behind schedule, so check resourcing on critical towers",
   "Over budget and behind schedule, so prepare a full recovery plan for the sponsor straight away",
   "On budget and on schedule, so no action is needed until the next monthly progress report"
  ],
  "answer": 1,
  "explain": "CPI = 42 / 40 = 1.05 (work done for less than its budget) and SPI = 42 / 48 = 0.875 (behind plan). Economical but slow often means too few resources, so the critical tower foundations should be checked first. The other options misread one or both indices."
 },
 {
  "module": "m4",
  "q": "A hypothetical port crane-rail extension has BAC = 800, PV = 400, EV = 300 and AC = 375 (BDT million). Late work will need acceleration, so the project manager wants an EAC that reflects both cost and schedule performance. What is that EAC?",
  "options": [
   "1,208.3",
   "875.0",
   "1,000.0",
   "1,066.7"
  ],
  "answer": 0,
  "explain": "CPI = 300 / 375 = 0.80 and SPI = 300 / 400 = 0.75, so CPI x SPI = 0.60 and EAC = 375 + (800 - 300) / 0.60 = 375 + 833.3 = 1,208.3. 1,000.0 is BAC / CPI, 875.0 assumes the rest is done at budget, and 1,066.7 divides BAC by SPI, which is not a recognised EAC."
 },
 {
  "module": "m4",
  "q": "Midway through a hypothetical effluent treatment plant project, the government introduces a new zero-liquid-discharge requirement that nobody had foreseen, adding a water recycling stage. The risk register did not include it. How should the additional cost be funded?",
  "options": [
   "From contingency reserve, because any extra cost during construction is contingency",
   "From the contractor's profit margin, because the scope is part of the lump sum",
   "By cutting other work package budgets proportionally so that the baseline total stays unchanged",
   "Through change control, releasing management reserve or new funding and updating the baseline"
  ],
  "answer": 3,
  "explain": "An unforeseen requirement is not an identified risk, so it falls outside contingency. It needs a change request: the sponsor may release management reserve or seek new funding, and the baseline is then updated. Contractors are not normally expected to absorb employer-driven scope from profit, and cutting other budgets hides the true cost."
 },
 {
  "module": "m4",
  "q": "On a hypothetical substation project, the electrical subcontractor proposes to report progress on installing four large power transformers by monthly percent-complete estimates from its supervisor. The owner wants objective earned value. Which approach should the project manager agree before work starts?",
  "options": [
   "Supervisor estimates of percent complete, checked only once at year end against the final account",
   "Level of effort, so that earned value follows the planned value each month without disputes",
   "Weighted milestones for each transformer, such as delivered, set, dressed, oil-filled and tested",
   "A 0/100 rule across the whole four-transformer package, which lasts about five months"
  ],
  "answer": 2,
  "explain": "Transformers are discrete items with distinct, observable stages, which suits weighted milestones agreed in advance. Level of effort ignores output, checking only at year end leaves EV unreliable all year, and 0/100 on a five-month package would show no progress until the end."
 },
 {
  "module": "m4",
  "q": "A hypothetical university library building has BAC = 500, EV = 200 and AC = 260 (BDT million). The sponsor insists that the original budget must still be met. What TCPI does this require, and what does it suggest about the target?",
  "options": [
   "0.77, matching current performance, so the budget is achievable without any change",
   "1.25, far above the 0.77 achieved so far, so the target is very unlikely to be met",
   "1.30, the inverse of the current CPI, so a modest improvement would be sufficient",
   "0.60, the remaining work divided by BAC, so efficiency can fall and still meet it"
  ],
  "answer": 1,
  "explain": "TCPI = (BAC - EV) / (BAC - AC) = 300 / 240 = 1.25, while CPI to date is 200 / 260 = about 0.77, and such a jump in efficiency is very unlikely without a major change. 0.77 is past performance, 1.30 is merely the inverse of CPI, and 0.60 divides by the wrong quantity."
 },
 {
  "module": "m4",
  "q": "An energy utility is screening a hypothetical 200 MW solar park in northern Bangladesh. Only the capacity, a candidate site and cost-per-MW data from recent similar parks are available. The board will decide whether to fund a feasibility study. What estimate should the project manager present?",
  "options": [
   "A parametric estimate from cost per MW, with location and date adjustments and a wide range",
   "A definitive bottom-up estimate accurate enough to fix the construction budget at this stage",
   "A bill of quantities priced with unit rates for modules, mounting structures, cabling and civil works",
   "A single figure from the most recent park, scaled by capacity, with no range stated"
  ],
  "answer": 0,
  "explain": "With only capacity and benchmark data, a parametric estimate adjusted for location and date, shown with a wide screening-class range, fits the decision. Definitive and BOQ estimates need far more design, and a single unqualified figure invites false precision."
 },
 {
  "module": "m4",
  "q": "At month-end on a hypothetical cement plant upgrade, the cost team has not accrued for refractory bricks delivered and installed in the kiln because the supplier's invoice has not arrived. The work is credited in EV. What is the effect on this month's earned value report?",
  "options": [
   "CPI is understated, because EV has been reduced by the missing invoice amount",
   "SPI is overstated, because the installed bricks are counted twice in planned value",
   "No effect, because earned value ignores all costs until the invoices have actually been booked",
   "AC is understated, so CPI looks better than it really is until the accrual is posted"
  ],
  "answer": 3,
  "explain": "Work done but not invoiced is a real cost; without the accrual AC is too low, so CPI = EV / AC is overstated. EV and PV are not affected by invoice timing, and EVM relies on actual cost including accruals."
 }
]);
