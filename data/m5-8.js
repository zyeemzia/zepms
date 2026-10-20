window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m5",
 "order": 5,
 "code": "Protect",
 "title": "Risk, Health, Safety & Environment",
 "subtitle": "Manage uncertainty, protect people and respect the places and communities where engineering happens",
 "outcomes": [
  "Identify threats and opportunities on engineering projects and write them as actionable cause-risk-effect statements in a living register",
  "Prioritise risks with calibrated probability-impact scales and choose owned, triggered responses within the organisation's risk appetite",
  "Quantify risk with EMV, decision trees and Monte Carlo results, and explain P50 and P80 confidence to decision-makers",
  "Lead site health and safety using the hierarchy of controls, RAMS, permits-to-work and leading indicators",
  "Manage environmental and social impacts through an ESIA, an ESMP, a grievance mechanism and carbon-aware design choices"
 ],
 "lessons": [
  {
   "id": "m5-l1",
   "title": "Risk Management Process & Identification",
   "subtitle": "Find the uncertainties that matter early, and write them so someone can act on them",
   "minutes": 32,
   "objectives": [
    "Distinguish risks from issues, and threats from opportunities, on an engineering project",
    "Use a risk breakdown structure and an assumptions review to identify risks systematically",
    "Write cause-risk-effect statements and build a risk register that drives action"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every engineering project is a bet placed on incomplete information. The geotechnical report rests on a handful of boreholes, the transformer arrives from a factory you have never visited, the monsoon may start early, and the exchange rate on imported switchgear will move between award and delivery. **Risk management** is the disciplined way a project team finds those uncertainties, decides which ones matter, and acts on them while acting is still cheap. It is not a register that is filled in for the lender and then forgotten; it is a weekly management habit that changes what people do on site and in the design office."
    },
    {
     "type": "callout",
     "kind": "definition",
     "title": "Risk, issue and the difference that matters",
     "text": "A **risk** is an uncertain event or condition that, if it occurs, would affect at least one project objective: safety, cost, time, quality, scope or reputation. An **issue** is something that has already happened or is certain to happen and now needs a decision. 'Piles may meet a buried obstruction' is a risk; 'pile P-17 has refused at 6 metres on an old foundation' is an issue. Risks are managed with responses planned in advance; issues are managed with decisions and actions now. A risk that occurs becomes an issue, and the register should record that transfer rather than quietly deleting the line."
    },
    {
     "type": "cycle",
     "title": "The risk management process is a loop, not a line",
     "center": "Weekly risk review",
     "items": [
      {
       "label": "Plan",
       "text": "Agree scales, appetite, roles, tools and review rhythm"
      },
      {
       "label": "Identify",
       "text": "Find threats and opportunities across the whole RBS"
      },
      {
       "label": "Analyse",
       "text": "Prioritise qualitatively; quantify the significant few"
      },
      {
       "label": "Respond",
       "text": "Choose strategies, owners, actions and triggers"
      },
      {
       "label": "Monitor",
       "text": "Track triggers and exposure; control contingency drawdown"
      },
      {
       "label": "Learn",
       "text": "Feed what actually happened into the next estimate and register"
      }
     ],
     "caption": "Learn feeds straight back into Identify: every review, stage gate and incident restarts the loop. The steps are broadly consistent with ISO 31000:2018 and the risk guidance in ISO 21502:2020."
    },
    {
     "type": "text",
     "text": "Uncertainty cuts both ways. A **threat** would harm an objective if it occurred; an **opportunity** would help. Engineering teams are trained to spot threats and often ignore opportunities, yet opportunities are real money: a supplier may offer an earlier factory slot for the gas turbine, a value-engineered pile cap design may let you use a smaller crane, or the grid company may energise the substation early so you can stop renting diesel generators. Treat opportunities with the same discipline: write them, own them and plan actions that make them more likely. A register with no opportunities usually means nobody looked, not that none exist."
    },
    {
     "type": "table",
     "title": "A risk breakdown structure (RBS) for engineering projects",
     "head": [
      "RBS level 1",
      "Level 2 prompts",
      "Typical engineering example"
     ],
     "rows": [
      [
       "Technical and design",
       "Design maturity, interfaces, new technology, codes",
       "Late vendor data for dyeing machines delays foundation and drainage design"
      ],
      [
       "Ground and site",
       "Geology, groundwater, contamination, existing services, access",
       "Unrecorded high-voltage cable found while excavating for a metro station entrance"
      ],
      [
       "Supply chain and logistics",
       "Long-lead items, factory capacity, shipping, customs, heavy haul, single-source suppliers",
       "Power transformer delayed at the port; no lowbed trailer available for the river crossing"
      ],
      [
       "Commercial and contractual",
       "Contract form, subcontractor solvency, inflation and price volatility, currency",
       "Steel price rise on a remeasured viaduct contract with a price-adjustment formula"
      ],
      [
       "External",
       "Permits, weather, flooding, politics, community, utilities",
       "Monsoon flooding of the batching plant access road in Chattogram"
      ],
      [
       "Information and digital",
       "Model quality, CDE access and status, data handover, cyber security",
       "Clashes in the federated model are not resolved before steel shop drawings are released"
      ],
      [
       "Organisational and management",
       "Decision speed, staffing, owner approvals, funding",
       "Owner's design approvals take four weeks instead of the two assumed in the programme"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "The cause-risk-effect statement",
     "text": "Write every risk in three parts: **Because of** [a fact or condition that exists today], **there is a risk that** [an uncertain event may occur], **which would** [affect named objectives]. Example: 'Because only three boreholes were drilled across the effluent treatment plant footprint, there is a risk that piles meet a soft clay lens below the design toe level, which would extend piling by three to four weeks and require longer piles.' The cause tells you where to act to reduce probability; the effect tells you how to reduce impact; the event is what you monitor."
    },
    {
     "type": "compare",
     "title": "Weak versus useful risk descriptions",
     "columns": [
      {
       "title": "Weak (cannot be acted on)",
       "items": [
        "'Delay'",
        "'Cost overrun on civil works'",
        "'Weather'",
        "'Contractor performance'",
        "'Safety'"
       ]
      },
      {
       "title": "Useful (cause, event, effect)",
       "items": [
        "Because the turbine vendor's shop is fully booked, rotor delivery may slip, delaying mechanical completion by six weeks",
        "Because rebar quantities came from a concept design, measured quantities may exceed the estimate, increasing civil cost",
        "Because the pour is scheduled in late May, pre-monsoon storms may stop the raft pour, risking a cold joint",
        "Because the piling subcontractor has two other jobs starting, rig availability may fall, slowing the critical path",
        "Because the roof steel will be erected over a live production floor, a dropped object could seriously injure workers"
       ]
      }
     ]
    },
    {
     "type": "steps",
     "title": "Running a risk identification workshop",
     "items": [
      {
       "title": "Prepare the inputs",
       "text": "Circulate the scope statement, summary schedule, estimate basis, site investigation report and lessons from similar projects. Invite design, construction, procurement, commissioning, HSE and an operations representative."
      },
      {
       "title": "Set the frame",
       "text": "State the objectives at stake, the time horizon and the RBS headings. Explain that opportunities are wanted, and that naming a risk is not blaming anyone."
      },
      {
       "title": "Review assumptions",
       "text": "Walk through the key assumptions in the schedule and estimate, for example 'two-week design approvals' or 'grid connection available by month 14'. Every fragile assumption is a candidate risk."
      },
      {
       "title": "Generate, then cluster",
       "text": "Let people write risks silently first to avoid anchoring on the loudest voice, then cluster duplicates by RBS heading."
      },
      {
       "title": "Write proper statements",
       "text": "Convert each cluster into a cause-risk-effect statement. Separate out anything that is already an issue and route it to the issues log."
      },
      {
       "title": "Assign provisional owners",
       "text": "Give every risk a named owner who will analyse it and propose responses before the next review. Close by agreeing the review date."
      }
     ]
    },
    {
     "type": "text",
     "text": "Workshops are only one route. Good teams also run a **pre-mortem** ('it is two years from now and the project has gone badly; what happened?'), interview specialists one-to-one, walk the site with the construction team, review the schedule logic for single points of failure, and read the contract for risks it allocates to you. Watch for bias: optimism ('our crews are faster than average'), anchoring on the last project, and groupthink when the sponsor is in the room. Identification is never finished; new risks appear at every stage gate, every design review and every major procurement award. Digital help is welcome: searching past registers and lessons-learned records, or using AI tools to suggest candidate risks from the schedule, contract and site reports, widens the net quickly. Treat every suggestion as a candidate that someone who knows the project must verify before it enters the register."
    },
    {
     "type": "timeline",
     "title": "Identification continues across the life cycle",
     "items": [
      {
       "when": "Concept",
       "label": "Strategic risks",
       "text": "Site, technology, funding and permits; first register for the business case"
      },
      {
       "when": "Feasibility",
       "label": "Option risks",
       "text": "Ground, routes and utility connections compared between options"
      },
      {
       "when": "Investment decision",
       "label": "Quantified risks",
       "text": "Top risks quantified; contingency and confidence level agreed"
      },
      {
       "when": "Design reviews",
       "label": "Design risks",
       "text": "Interfaces, buildability, safety in design, carbon hotspots"
      },
      {
       "when": "Contract award",
       "label": "Allocated risks",
       "text": "Read the contract for risks it gives you; supply-chain and price risks"
      },
      {
       "when": "Construction",
       "label": "Site risks",
       "text": "Weekly reviews: ground, weather, productivity and safety"
      },
      {
       "when": "Commissioning",
       "label": "Handover risks",
       "text": "Testing, energisation, operator readiness and defects"
      }
     ],
     "caption": "Each stage gate and major award should trigger a fresh identification pass; risks retire and new ones appear as the project moves from paper to site."
    },
    {
     "type": "template",
     "title": "Risk register (core columns)",
     "purpose": "Record each risk so that its cause, owner, priority and next action are visible at the weekly review.",
     "columns": [
      "ID",
      "Cause-risk-effect statement",
      "RBS category",
      "Owner",
      "P x I score",
      "Response and actions",
      "Status and trigger"
     ],
     "example": [
      [
       "R-014",
       "Because only three boreholes cover the ETP footprint, piles may meet a soft clay lens below design toe level, extending piling by 3-4 weeks and adding cost",
       "Ground and site",
       "Civil package manager",
       "3 x 4 = 12",
       "Reduce: four extra boreholes before ordering piles; designer to prepare longer-pile alternative",
       "Open. Trigger: test pile fails to reach set at design level"
      ],
      [
       "O-003",
       "Because the grid company is commissioning a nearby feeder, early energisation may be offered, letting us stop diesel generator rental two months early",
       "External",
       "Electrical lead",
       "2 x 3 = 6",
       "Enhance: submit protection settings and test reports early; agree a joint inspection date",
       "Open. Trigger: utility confirms feeder test date"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "title": "A register written for the lender, not for the site",
     "situation": "You have just taken over as project manager for a denim factory expansion in Gazipur: a new dyeing hall, eight dyeing machines and an upgraded effluent treatment plant. The register prepared for the lender has 46 lines such as 'delay', 'rain', 'price increase' and 'machine late'. Three lines describe things already happening, including a dyeing machine shipment that has missed its vessel. The sponsor wants to send the register to the lender tomorrow unchanged. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Send it as requested; the lender only needs to see that a register exists.",
       "feedback": "Weak. A register that cannot drive action gives the lender false comfort and gives the team nothing to manage. The missed shipment also needs a decision now.",
       "best": false
      },
      {
       "text": "Hold a short session with the package leads to move current problems to the issues log, rewrite the top risks as cause-risk-effect statements with owners, and agree with the sponsor to send that version.",
       "feedback": "Best. You separate issues that need decisions today from risks that need planned responses, make the most important risks actionable, and keep the sponsor and lender properly informed with a short, honest delay.",
       "best": true
      },
      {
       "text": "Delete every vague line so the register looks shorter and more professional.",
       "feedback": "Weak. Vague lines often hide genuine risks. They need rewriting, not deleting, and shortening the list does not address the issues already occurring.",
       "best": false
      },
      {
       "text": "Buy a dedicated risk software package before revising anything.",
       "feedback": "Weak as a first step. Software stores risks; it does not write good statements, assign owners or deal with a shipment that has already missed its vessel.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick one entry from a risk register you have seen recently. Rewrite it as a cause-risk-effect statement. What does the cause tell you that the original wording hid, and who should own it?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Project risk",
       "def": "An uncertain event or condition that, if it occurs, would have a positive or negative effect on at least one project objective such as safety, cost, time, quality or scope."
      },
      {
       "term": "Issue",
       "def": "A problem or condition that has already occurred or is certain to occur and now requires a decision or action; a risk becomes an issue when it materialises."
      },
      {
       "term": "Threat",
       "def": "A risk whose occurrence would harm one or more project objectives, for example late delivery of a power transformer."
      },
      {
       "term": "Opportunity",
       "def": "A risk whose occurrence would benefit one or more project objectives, for example an earlier factory slot for a turbine or early grid energisation."
      },
      {
       "term": "Risk breakdown structure (RBS)",
       "def": "A hierarchy of risk categories, such as technical, ground, supply chain, commercial, external and organisational, used to prompt identification and to group and report risks."
      },
      {
       "term": "Risk register",
       "def": "The living record of identified risks with their statements, owners, scores, responses, triggers and status, reviewed regularly to drive action."
      },
      {
       "term": "Cause-risk-effect statement",
       "def": "A three-part way of writing a risk: the existing cause or condition, the uncertain event that may occur, and its effect on named objectives."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "A risk is uncertain and gets a planned response; an issue has happened and needs a decision now. Move occurred risks to the issues log with a cross-reference.",
      "Write every risk as cause, event and effect so the team knows where to act and what to watch.",
      "Use the RBS, an assumptions review, a pre-mortem and site walks to find threats and opportunities; generate silently before discussing.",
      "Treat tool-generated or database suggestions as candidates that someone who knows the project must verify.",
      "Repeat identification at every stage gate, design review and major contract award."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "During excavation for a substation cable trench, the team exposes an unrecorded water main. In risk management terms this is best described as:",
       "options": [
        "An opportunity that the team should exploit",
        "A secondary risk created by a planned response",
        "An issue that now needs a decision and action",
        "A threat that should be scored and monitored"
       ],
       "answer": 2,
       "explain": "The event has already happened, so it is an issue to be decided and acted on now. It may have been a risk before excavation; once it occurs, it moves to the issues log."
      },
      {
       "q": "Which statement is written in proper cause-risk-effect form?",
       "options": [
        "Because the vendor's shop is fully booked, rotor delivery may slip, delaying mechanical completion",
        "Turbine delivery is a major concern for the project and should be watched closely by the whole team",
        "There may be delays and cost overruns on the turbine and generator package",
        "The turbine vendor is unreliable and will probably deliver the rotor late"
       ],
       "answer": 0,
       "explain": "Only the first names a present cause, an uncertain event and an effect on an objective. The others are vague concerns or judgements that give no clue where to act."
      },
      {
       "q": "What is the main purpose of a risk breakdown structure in an identification workshop?",
       "options": [
        "To calculate the expected monetary value of every risk on the register in one pass",
        "To allocate each risk to the contractor best able to manage it",
        "To replace the work breakdown structure for cost reporting purposes",
        "To prompt systematic thinking across all categories so that blind spots are reduced"
       ],
       "answer": 3,
       "explain": "An RBS is a prompt list and grouping structure. It does not quantify risks, allocate them contractually or replace the WBS."
      },
      {
       "q": "A grid company may energise a new feeder early, letting the project stop renting diesel generators. How should this be recorded?",
       "options": [
        "As an issue, because it involves an external utility",
        "As an opportunity with an owner and enhancing actions",
        "As an assumption, because it is outside the team's control",
        "It should not be recorded, as it cannot harm the project"
       ],
       "answer": 1,
       "explain": "It is an uncertain event with a positive effect, so it is an opportunity. Recording and owning it lets the team act to make it more likely."
      },
      {
       "q": "Why do experienced facilitators ask participants to write risks silently before group discussion?",
       "options": [
        "To make sure every participant's list is the same length",
        "To keep the workshop as short as possible for senior staff",
        "To reduce anchoring and groupthink around the most senior or loudest voice",
        "To avoid recording any opportunities until all of the threats have been listed"
       ],
       "answer": 2,
       "explain": "Silent generation captures independent views before social pressure shapes them. It is about quality of identification, not speed or list length."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l2",
   "title": "Qualitative Analysis & Risk Responses",
   "subtitle": "Prioritise with a calibrated matrix, then choose owned responses that change the odds",
   "minutes": 34,
   "objectives": [
    "Score risks consistently with defined probability and impact scales and a probability-impact matrix",
    "Choose response strategies for threats and opportunities within the organisation's risk appetite",
    "Assign owners, actions and triggers, and control contingency drawdown"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A register with sixty risks cannot get sixty people's full attention. **Qualitative analysis** ranks risks quickly so that management effort goes where it changes outcomes. It works only if the scales are defined in project terms before scoring starts: 'high impact' must mean the same thing to the piling engineer, the planner and the sponsor. Scores are a prioritisation tool, not a measurement; they tell you which risks to respond to first and which deserve a closer, quantitative look (developed in the next lesson)."
    },
    {
     "type": "table",
     "title": "Example probability and impact scales (illustrative, for a hypothetical USD 60 million plant)",
     "head": [
      "Level",
      "Probability",
      "Cost impact",
      "Schedule impact",
      "Safety, environment, reputation"
     ],
     "rows": [
      [
       "1 Very low",
       "Below 10%",
       "Under USD 50k",
       "Under 1 week",
       "First aid case; no external attention"
      ],
      [
       "2 Low",
       "10-30%",
       "USD 50k-250k",
       "1-3 weeks",
       "Medical treatment case; minor local complaint"
      ],
      [
       "3 Medium",
       "30-50%",
       "USD 250k-1m",
       "3-6 weeks",
       "Lost-time injury; reportable environmental incident"
      ],
      [
       "4 High",
       "50-70%",
       "USD 1m-3m",
       "6-12 weeks",
       "Permanent injury; regulator notice; national media"
      ],
      [
       "5 Very high",
       "Above 70%",
       "Over USD 3m",
       "Over 12 weeks",
       "Fatality or multiple serious injuries; licence at risk"
      ]
     ]
    },
    {
     "type": "formula",
     "title": "Scoring and exposure",
     "items": [
      {
       "name": "Risk score (ordinal)",
       "expr": "Score = P score x I score, each on a 1-5 scale, giving 1 to 25",
       "meaning": "Ranks risks for attention. The numbers are labels on a scale, so a score of 12 is not 'twice as risky' as 6; use it for ordering, not arithmetic."
      },
      {
       "name": "Cost exposure of a threat",
       "expr": "Exposure = probability x cost impact",
       "meaning": "A 40% chance of a USD 600k impact gives an exposure of USD 240k. Opportunities use the same formula with a saving, recorded as a positive value to the project."
      },
      {
       "name": "Schedule exposure",
       "expr": "Schedule exposure = probability x delay to the key milestone",
       "meaning": "A 25% chance of an 8-week delay to first power is an exposure of 2 weeks. Only delay that reaches the milestone counts, so check the risk sits on or near the critical path."
      },
      {
       "name": "Net value of a response",
       "expr": "Net value = (exposure before - exposure after) - cost of the response",
       "meaning": "If positive, the response is worth funding on expected value alone; safety and legal risks may justify a response even when this is negative."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Is expediting worth it?",
     "text": "A 132/33 kV transformer has a 40% chance of arriving eight weeks late, with an estimated cost impact of USD 600k (generator rental, idle crews, delayed revenue). Exposure = 0.40 x 600k = **USD 240k**. Sending an expediter to the factory and witnessing the factory acceptance test would cost USD 60k and is judged to cut the probability to 15%. Exposure after = 0.15 x 600k = USD 90k. Net value = (240k - 90k) - 60k = **USD 90k**, so the response pays for itself on expected value and also cuts the worst case. Figures are illustrative."
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Appetite decides what 'acceptable' means",
     "text": "**Risk appetite** is how much risk the organisation is willing to take in pursuit of its objectives; **thresholds** turn that into rules, such as 'any risk with a safety impact of 5 is escalated to the steering committee whatever its probability' or 'no single risk may carry more than USD 1m exposure without a funded response'. Never average a catastrophic safety consequence away: a crane lift over a live 33 kV bay scored 1 x 5 = 5 looks 'low' on the heat map but is unacceptable to almost every owner and contractor."
    },
    {
     "type": "matrix",
     "title": "Reading the probability-impact grid as four zones",
     "x": "Probability (low to high)",
     "y": "Impact (low to high)",
     "quadrants": [
      {
       "title": "Rare but severe",
       "items": [
        "Never dismiss as 'green'",
        "Severity thresholds apply",
        "Specific controls and a fallback",
        "e.g. a lift beside a live 33 kV bay"
       ]
      },
      {
       "title": "Likely and severe",
       "items": [
        "Act now and escalate",
        "Funded, owned responses",
        "Model it quantitatively",
        "e.g. late transformer on the critical path"
       ]
      },
      {
       "title": "Rare and minor",
       "items": [
        "Accept and monitor",
        "Review at the monthly cycle",
        "e.g. late delivery of site cabins"
       ]
      },
      {
       "title": "Likely but minor",
       "items": [
        "Reduce with routine controls",
        "Allow for it in contingency",
        "Watch for clusters",
        "e.g. frequent short rain stoppages"
       ]
      }
     ],
     "caption": "A cell's colour is only a starting point: the top-left zone holds the rare but catastrophic risks that appetite thresholds pull out for specific treatment, whatever their score."
    },
    {
     "type": "compare",
     "title": "Response strategies for threats and for opportunities",
     "columns": [
      {
       "title": "Threats (reduce the downside)",
       "items": [
        "**Avoid**: remove the cause, e.g. reroute a pipeline away from a known landslip slope",
        "**Transfer**: move the financial consequence to a party better placed to bear it, e.g. insurance, or a fixed-price heavy-lift subcontract",
        "**Mitigate**: lower probability or impact, e.g. extra boreholes, a second vendor for cable, pre-assembled pipe racks",
        "**Accept**: acknowledge and hold contingency, or simply monitor if exposure is small",
        "**Escalate**: pass to the programme or owner level when it is outside the project's authority"
       ]
      },
      {
       "title": "Opportunities (increase the upside)",
       "items": [
        "**Exploit**: make it certain, e.g. lock in an early factory slot with a reservation fee",
        "**Share**: partner with a party better able to capture it, e.g. a gain-share with the contractor for a faster construction method",
        "**Enhance**: raise probability or benefit, e.g. submit grid-connection documents early",
        "**Accept**: take the benefit if it arrives without active pursuit",
        "**Escalate**: offer it to the owner when the benefit lies outside the project, e.g. a wider site master plan"
       ]
      }
     ]
    },
    {
     "type": "table",
     "title": "From strategy to owned action",
     "head": [
      "Risk",
      "Strategy",
      "Specific action",
      "Owner",
      "Trigger or early warning"
     ],
     "rows": [
      [
       "Soft clay lens below design pile toe",
       "Mitigate",
       "Four additional boreholes and two preliminary test piles before ordering piles",
       "Civil package manager",
       "Test pile set not achieved at design level"
      ],
      [
       "Pre-monsoon storm during raft pour",
       "Mitigate",
       "Pour plan with weather window check, covers on standby and a pre-agreed construction joint location",
       "Site manager",
       "Forecast rainfall above the agreed limit within 24 hours"
      ],
      [
       "Currency movement on imported switchgear",
       "Transfer",
       "Forward contract for the foreign-currency payments on the purchase order",
       "Finance lead",
       "Purchase order signed"
      ],
      [
       "Steel and cement price volatility on a three-year package",
       "Accept (funded)",
       "Price-adjustment formula on published indices instead of a large bidder premium; escalation allowance held in the budget",
       "Cost manager",
       "Index movement beyond the allowance assumed in the estimate"
      ],
      [
       "Insolvency of the facade subcontractor",
       "Mitigate",
       "Monthly financial check, direct payment of key suppliers, identify a replacement firm",
       "Commercial manager",
       "Late payment to suppliers reported"
      ],
      [
       "Early energisation of the grid feeder",
       "Enhance",
       "Submit protection settings and test certificates two months early",
       "Electrical lead",
       "Utility confirms feeder test date"
      ]
     ]
    },
    {
     "type": "text",
     "text": "Every significant risk needs a **risk owner**: one named person with the authority and knowledge to manage it, who may delegate individual actions to action owners. A **trigger** is the early warning that the risk is about to occur or that a response must be activated; good triggers are observable on site or in reports, such as 'vendor misses the casting milestone'. Plan a **fallback** for high-impact risks in case the main response fails, and check each response for **secondary risks** it creates: adding a night shift to recover concrete works reduces delay but adds fatigue, lighting and noise risks near homes. Finally, record **residual risk**, the exposure that remains after responses, because that is what contingency must cover."
    },
    {
     "type": "steps",
     "title": "Controlling contingency drawdown",
     "items": [
      {
       "title": "Confirm the event",
       "text": "The risk owner shows that a risk in the register has occurred or a trigger has been reached, with evidence such as a test pile record or vendor delay notice."
      },
      {
       "title": "Quantify the need",
       "text": "Estimate the cost and time required to deal with it, separating risk-related cost from scope change, which goes through change control (see Define)."
      },
      {
       "title": "Approve within authority",
       "text": "Approve the drawdown at the level set in the delegation of authority; larger draws go to the sponsor or steering committee."
      },
      {
       "title": "Transfer the budget",
       "text": "Move the approved amount from contingency into the relevant control account so cost reports stay honest (see Budget)."
      },
      {
       "title": "Update the register and forecast",
       "text": "Mark the risk as occurred or closed, update residual exposure and re-forecast the outturn."
      },
      {
       "title": "Compare remaining contingency with remaining risk",
       "text": "Report each month whether the contingency left is enough for the risk exposure left; a gap is an early warning to the sponsor."
      }
     ]
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Remaining contingency versus remaining risk exposure",
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
       "name": "Contingency remaining",
       "values": [
        3.0,
        2.8,
        2.6,
        2.3,
        2.0,
        1.6,
        1.3,
        1.0
       ]
      },
      {
       "name": "Residual risk exposure",
       "values": [
        2.4,
        2.3,
        2.2,
        2.1,
        1.9,
        1.8,
        1.6,
        1.4
       ]
      }
     ],
     "yLabel": "USD million",
     "caption": "Illustrative figures. From month 6 the exposure still ahead exceeds the contingency left; that crossover is the early warning the monthly report must give the sponsor before the money runs out."
    },
    {
     "type": "scenario",
     "title": "A low score on a lethal risk",
     "situation": "On a combined-cycle power plant extension, the register scores 'dropped load during lift of a 40-tonne HRSG module next to a live 33 kV switchyard' as probability 1, impact 5, total 5, which shows green on the heat map. The construction manager says it therefore needs no specific response and the lift can proceed under the general lifting procedure next week. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Accept the green rating; the matrix exists to stop the team over-reacting to unlikely events.",
       "feedback": "Weak. The matrix ranks risks, but appetite and thresholds override it for catastrophic safety outcomes. A green score does not make a potential fatality acceptable.",
       "best": false
      },
      {
       "text": "Apply the safety threshold: escalate the risk, and require a specific lift plan that removes or reduces the hazard, such as an outage of the adjacent bay or a different crane position.",
       "feedback": "Best. Severity-5 safety risks need specific, owned controls regardless of score. Avoiding the exposure, for example by de-energising the bay or relocating the crane, is the strongest response.",
       "best": true
      },
      {
       "text": "Buy additional insurance to transfer the consequences of the lift to an insurer.",
       "feedback": "Weak. Insurance transfers some financial loss but does nothing to protect the people near the lift or the plant's licence to operate.",
       "best": false
      },
      {
       "text": "Raise the probability score to 3 so that the risk turns red and gets attention.",
       "feedback": "Weak. Manipulating scores undermines trust in the register. The right fix is to apply the escalation rule that already exists for severe safety impacts.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Is your risk register healthy?",
     "items": [
      "Every top-ten risk is written as cause, event and effect",
      "Every significant risk has one named owner with authority to act",
      "Each response is a specific action with a date, not a general intention",
      "Triggers are observable events on site or in reports",
      "Opportunities appear on the register and have owners",
      "Residual exposure is recorded and compared with remaining contingency",
      "Occurred risks have been moved to the issues log with a cross-reference",
      "Scores were reviewed in the last month and changes explained"
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think of a risk on your current or last project that did occur. Was there a trigger that could have warned you earlier, and who was (or should have been) its owner?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Probability-impact matrix",
       "def": "A grid that combines defined probability and impact scales to rank risks into priority bands, often shown as a red-amber-green heat map."
      },
      {
       "term": "Risk exposure",
       "def": "The expected effect of a risk, calculated as its probability multiplied by its impact on cost or time; used to compare risks and size responses."
      },
      {
       "term": "Risk appetite",
       "def": "The amount and type of risk an organisation is willing to accept in pursuit of its objectives, expressed in practice through thresholds and escalation rules."
      },
      {
       "term": "Risk owner",
       "def": "The one named person accountable for monitoring a risk and making sure its agreed responses are carried out, even when actions are delegated."
      },
      {
       "term": "Risk trigger",
       "def": "An observable event or condition that warns that a risk is about to occur or that a planned response or fallback must now be activated."
      },
      {
       "term": "Residual risk",
       "def": "The risk that remains after responses have been implemented; residual exposure is what contingency and management attention must still cover."
      },
      {
       "term": "Contingency drawdown",
       "def": "The controlled release of risk contingency into a control account when an identified risk occurs, approved within delegated authority and recorded in the register and forecast."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Define probability and impact scales in project terms before scoring; scores rank risks, they do not measure them.",
      "Severity thresholds from the risk appetite override the heat-map colour for catastrophic safety and public risks.",
      "Fund a response when the exposure it removes exceeds its cost, and check it for secondary risks.",
      "Every significant risk needs one owner, specific dated actions and an observable trigger.",
      "Draw down contingency only for occurred risks, within delegated authority, and compare what is left with residual exposure every month."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A threat has a 25% probability of occurring and would cost USD 800k if it did. What is its cost exposure?",
       "options": [
        "USD 160k",
        "USD 200k",
        "USD 250k",
        "USD 600k"
       ],
       "answer": 1,
       "explain": "Exposure = 0.25 x 800k = USD 200k. USD 600k is the impact remaining if you wrongly subtract, and the others do not match the formula."
      },
      {
       "q": "Why should a risk score of 12 not be described as 'twice as risky' as a score of 6?",
       "options": [
        "Because ordinal scores rank risks but are not true measurements that support ratio arithmetic",
        "Because the probability-impact matrix should only ever be used to rank opportunities, not threats",
        "Because scores above 10 are always escalated and so cannot be compared",
        "Because the impact scale must always be expressed in weeks, not money"
       ],
       "answer": 0,
       "explain": "Scores of 1-5 are category labels, so multiplying them gives a ranking aid, not a measure. Quantitative exposure in money or time is needed for real comparisons."
      },
      {
       "q": "A contractor takes out a forward currency contract to fix the cost of imported switchgear. Which threat response is this?",
       "options": [
        "Avoid",
        "Accept",
        "Escalate",
        "Transfer"
       ],
       "answer": 3,
       "explain": "The financial consequence of exchange-rate movement is moved to a bank under the forward contract, which is transfer. The underlying purchase still happens, so it is not avoidance."
      },
      {
       "q": "A response costs USD 50k and reduces a risk's exposure from USD 300k to USD 120k. What is the net value of the response?",
       "options": [
        "USD 180k",
        "USD 70k",
        "USD 130k",
        "USD 250k"
       ],
       "answer": 2,
       "explain": "Net value = (300k - 120k) - 50k = USD 130k. USD 180k ignores the response cost; the other figures do not follow the formula."
      },
      {
       "q": "Adding a night shift to recover lost concrete progress introduces fatigue and noise risks near homes. What are these new risks called?",
       "options": [
        "Residual risks",
        "Consequential issues",
        "Triggers",
        "Secondary risks"
       ],
       "answer": 3,
       "explain": "Secondary risks arise directly from implementing a response. Residual risk is what remains of the original risk after the response."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l3",
   "title": "Quantitative Risk Analysis & Monte Carlo Intuition",
   "subtitle": "EMV, decision trees and simulation: turning a register into a confidence level a board can use",
   "minutes": 40,
   "objectives": [
    "Calculate expected monetary value for risks and use a decision tree to compare engineering options",
    "Explain in plain language how Monte Carlo simulation produces P50 and P80 dates and costs",
    "Explain why a deterministic schedule is usually optimistic, including skew, merge bias, risk events and correlation",
    "Read tornado charts and use quantitative results to set contingency and communicate confidence"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Qualitative scoring tells you which risks to work on; it cannot tell a board how much contingency to hold or how likely the commissioning date is. **Quantitative risk analysis** puts numbers on the combined effect of uncertainty and risk events on cost and time. It is worth the effort on large or complex projects, at major investment decisions, before setting a contractual completion date, and whenever a sponsor asks 'how confident are we?'. The techniques range from a simple expected value calculation on a page to a full simulation of an integrated cost and schedule model."
    },
    {
     "type": "formula",
     "title": "Expected value and decision-tree formulas",
     "items": [
      {
       "name": "Expected monetary value of one risk",
       "expr": "EMV = P x I, where I is negative for a threat (cost) and positive for an opportunity (saving)",
       "meaning": "A 30% chance of a USD 400k overrun has EMV = 0.30 x (-400k) = -USD 120k. It is the long-run average effect, not the amount you will see if the risk occurs."
      },
      {
       "name": "EMV of a set of risks",
       "expr": "EMV_total = sum of (P_i x I_i) for i = 1 to n",
       "meaning": "Adds threats and opportunities together. Useful for a first sense of contingency on a portfolio of many independent risks, where averages are meaningful."
      },
      {
       "name": "Value of a chance node",
       "expr": "Chance node value = sum of (p_j x outcome_j), where the branch probabilities p_j add up to 1",
       "meaning": "The probability-weighted outcome of everything that might follow at that point in the tree."
      },
      {
       "name": "Value of a decision node",
       "expr": "Decision node value = best of (branch cost or value + value of the node that follows), e.g. the lowest expected cost",
       "meaning": "Roll the tree back from right to left: evaluate chance nodes, then choose at each decision node, carrying only the best branch forward."
      },
      {
       "name": "Triangular mean of a three-point range",
       "expr": "Mean = (a + m + b) / 3, where a = optimistic, m = most likely, b = pessimistic",
       "meaning": "For a right-skewed range the mean sits above the most likely value, which is one reason single-point plans are optimistic (the beta-PERT mean is covered in Schedule)."
      },
      {
       "name": "Risk-based contingency",
       "expr": "Contingency = cost (or date) at the chosen confidence level, e.g. P80 - base estimate (or deterministic date)",
       "meaning": "Sizes the allowance from the simulation result rather than a flat percentage. The chosen P-level is a governance decision that reflects risk appetite."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "EMV of a small register (figures illustrative)",
     "text": "Hypothetical 50 MW solar plant: (1) inverter delivery late, P 30%, cost USD 400k, EMV -120k; (2) rock in cable trenching, P 20%, cost USD 250k, EMV -50k; (3) currency movement on modules, P 50%, cost USD 180k, EMV -90k; (4) opportunity: early grid connection saves generator and site costs, P 25%, saving USD 160k, EMV +40k. Total EMV = -120 - 50 - 90 + 40 = **-USD 220k**. This is a sensible first estimate of the average risk cost, but notice that no single outcome equals it: if the inverters are late the project loses the full USD 400k. EMV supports comparison and contingency sizing; it does not describe the worst case."
    },
    {
     "type": "text",
     "text": "A **decision tree** lays out a choice, the uncertain events that follow each option and their consequences, so that options can be compared on expected value and on spread. Suppose the foundation designer for an effluent treatment plant must choose a piling system before ground conditions are fully known. Each option has a base cost and a chance of an adverse outcome. Rolling back the tree, you compute each option's expected cost and also note its worst case. The tree below shows four options; drawing it makes the logic easy for a steering committee to follow."
    },
    {
     "type": "tree",
     "title": "Piling decision tree (BDT million, illustrative)",
     "root": {
      "label": "Choose piling system",
      "text": "Expected cost (EMV) and worst case per option",
      "children": [
       {
        "label": "Driven precast",
        "text": "EMV 110, worst 140",
        "children": [
         {
          "label": "Obstructions 25%",
          "text": "100 + 40 = 140"
         },
         {
          "label": "No obstructions 75%",
          "text": "100"
         }
        ]
       },
       {
        "label": "CFA piles",
        "text": "EMV 114, worst 138",
        "children": [
         {
          "label": "Soft layer 20%",
          "text": "108 + 30 = 138"
         },
         {
          "label": "No extension 80%",
          "text": "108"
         }
        ]
       },
       {
        "label": "Bored cast-in-situ",
        "text": "EMV 117, worst 135",
        "children": [
         {
          "label": "Casing problems 10%",
          "text": "115 + 20 = 135"
         },
         {
          "label": "No problems 90%",
          "text": "115"
         }
        ]
       },
       {
        "label": "Steel H-piles",
        "text": "EMV 120.5, worst 130",
        "children": [
         {
          "label": "Corrosion upgrade 5%",
          "text": "120 + 10 = 130"
         },
         {
          "label": "No upgrade 95%",
          "text": "120"
         }
        ]
       }
      ]
     },
     "caption": "Roll back from the outcomes: each option's EMV is its base cost plus probability times the extra cost. Driven piles have the lowest EMV but the widest spread; bored piles cap the worst case at 135."
    },
    {
     "type": "text",
     "text": "On expected cost, driven precast piles win at 110. But the decision is not purely arithmetic. Driven piles carry the widest spread and generate noise and vibration that may be unacceptable next to a working dyeing hall or a hospital; a risk-averse owner with little contingency might pay 7 more in expectation for bored piles to cap the worst case at 135. The tree makes that trade-off explicit, which is its real value. Now consider many uncertainties at once: hundreds of activities with ranges, a dozen risk events, logic that merges paths. A tree becomes unmanageable, and **Monte Carlo simulation** takes over.\nThe intuition is simple. Imagine you could build the same substation ten thousand times in parallel universes. In each one, every uncertain activity takes a duration drawn from its range: piling might take 41 days in one universe and 52 in the next. Each risk event happens in its share of universes: if the transformer has a 30% chance of a six-week delay, it is late in about three thousand of them. The computer runs the schedule logic in each universe and records the finish date. Sort the ten thousand finish dates and you have a distribution. The date that 50% of universes meet is the **P50**; the date that 80% meet is the **P80**. Nothing magical happens: the method just does, very quickly, the arithmetic of combining many ranges and events that the human mind cannot do reliably."
    },
    {
     "type": "flow",
     "title": "A Monte Carlo schedule or cost risk analysis",
     "items": [
      {
       "label": "Prepare the model",
       "text": "A logic-sound summary schedule or cost model; fix open ends and hard constraints first"
      },
      {
       "label": "Add uncertainty ranges",
       "text": "Three-point ranges on durations and quantities, from evidence and experts"
      },
      {
       "label": "Add risk events",
       "text": "Each top risk with its probability and impact, mapped to the activities it affects"
      },
      {
       "label": "Set correlation",
       "text": "Link inputs driven by the same cause, such as ground conditions or productivity"
      },
      {
       "label": "Run iterations",
       "text": "Several thousand passes, each sampling every input and recording the result"
      },
      {
       "label": "Read and act",
       "text": "S-curve, P50 and P80, tornado chart and criticality; then change the plan"
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Why the deterministic date is usually optimistic",
     "items": [
      "**Skewed ranges.** Engineering activities can overrun far more than they can underrun, so the mean of each range sits above its most likely value. Adding most-likely values produces a total that falls below the middle of the true distribution.",
      "**Merge bias.** Where parallel paths join, the milestone waits for the latest one. If two independent paths each have a 50% chance of being on time, the chance that both are is only 25%; with five such paths it is about 3%. The schedule logic cannot show this; simulation does.",
      "**Risk events left out.** The deterministic plan quietly assumes that no identified risk occurs. The simulation lets each one occur in its share of iterations.",
      "**Correlation ignored.** If piling and excavation both depend on the same ground, they will tend to overrun together. Treating them as independent lets a bad draw on one cancel a good draw on the other, which makes the forecast look narrower and safer than it is.",
      "**Planning optimism.** Durations are often estimated as 'what we can do if things go well', which is closer to the optimistic end than to the most likely value."
     ]
    },
    {
     "type": "cli",
     "title": "A tiny Monte Carlo of a substation finish date",
     "device": "Python notebook",
     "lines": [
      "import numpy as np",
      "rng = np.random.default_rng(seed=7)",
      "N = 20_000                                  # number of simulated projects",
      "# Triangular(min, most likely, max) durations in days - illustrative",
      "civil  = rng.triangular(42, 45, 56, N)      # foundations and plinths",
      "steel  = rng.triangular(27, 30, 38, N)      # structure and cable trays",
      "equip  = rng.triangular(66, 72, 92, N)      # transformer supply (parallel path)",
      "hookup = rng.triangular(18, 20, 27, N)      # install, terminate, test",
      "finish = np.maximum(civil + steel, equip) + hookup  # merge, then hook-up",
      "print(\"Deterministic:\", max(45 + 30, 72) + 20, \"days\")",
      "print(\"P50:\", np.percentile(finish, 50).round(1), \"days\")",
      "print(\"P80:\", np.percentile(finish, 80).round(1), \"days\")",
      "print(\"P(finish <= 95 days):\", (finish <= 95).mean().round(2))",
      "# Output with this seed:",
      "# Deterministic: 95 days",
      "# P50: 102.5 days",
      "# P80: 106.5 days",
      "# P(finish <= 95 days): 0.03"
     ],
     "note": "The plan built from most-likely durations says 95 days, yet only about 3% of simulated projects finish by then, because every range is right-skewed and the transformer path sometimes overtakes the civil and steel path at the merge. This sketch samples each input independently; in a real model, durations sharing a cause (the same ground, the same crew) would be correlated, which widens the spread and pushes the P80 later still."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "S-curve from the substation simulation",
     "labels": [
      "95",
      "98",
      "100",
      "102",
      "104",
      "106",
      "108",
      "110",
      "112"
     ],
     "series": [
      {
       "name": "Chance of finishing by this day",
       "values": [
        3,
        15,
        29,
        45,
        63,
        77,
        88,
        95,
        98
       ]
      }
     ],
     "unit": "%",
     "yLabel": "Cumulative probability",
     "caption": "Computed from the sketch above (illustrative inputs, seed 7). The 95-day plan sits at about 3%, P50 falls near day 102.5 and P80 near day 106.5: read across from a confidence level to find the date."
    },
    {
     "type": "table",
     "title": "Reading the simulation output",
     "head": [
      "Result",
      "What it means",
      "Typical use"
     ],
     "rows": [
      [
       "P10",
       "Only 10% of iterations finish this early or cheaply",
       "A stretch outcome; useful for spotting unrealistic targets"
      ],
      [
       "P50",
       "Half the iterations finish by this value; the median",
       "Internal target for the delivery team; often the basis of a contractor's bid"
      ],
      [
       "P80",
       "80% of iterations finish by this value",
       "Common basis for an owner's funded budget and publicly announced date"
      ],
      [
       "P90",
       "90% of iterations finish by this value",
       "Conservative governments and lenders; first-of-a-kind technology"
      ],
      [
       "Deterministic",
       "The single-point plan from most-likely inputs",
       "Shown on the S-curve to reveal how optimistic it is; it often sits below P20"
      ]
     ]
    },
    {
     "type": "text",
     "text": "Two outputs tell you what to do next. A **tornado chart** ranks the inputs by how strongly they drive the result, longest bar at the top, so management attention goes to the few risks and activities that move P80 the most, often transformer supply, ground conditions or design approvals rather than the issues the team argues about most. The **criticality index** shows how often each activity was on the critical path across the iterations, revealing near-critical paths that a single CPM run hides. On correlation, prefer to model the shared cause explicitly, for example a 'ground worse than expected' risk that lengthens both piling and excavation, rather than assigning arbitrary coefficients; either way, never leave obviously related inputs independent. Tools increasingly use AI to propose duration ranges, risk mappings and correlations from historical data. Treat that as a first draft: experienced planners must check every input against this project's evidence, and the analyst must be able to explain each one to the board. A model nobody can explain is not evidence."
    },
    {
     "type": "scenario",
     "title": "Which date goes on the plaque?",
     "situation": "A 500-bed hospital in Dhaka is being built for a public owner. The schedule risk analysis shows the deterministic completion date has roughly a 15% chance of being achieved; the P50 is seven weeks later and the P80 is twelve weeks later. The ministry's communications office wants an opening date for the minister's speech next week and the owner's director suggests using the deterministic date 'to keep the contractor under pressure'. What should the project manager recommend?",
     "options": [
      {
       "text": "Announce the deterministic date; public pressure will motivate everyone to achieve it.",
       "feedback": "Weak. A date with a 15% chance of success is very likely to be missed in public. Pressure does not change ground conditions, equipment deliveries or commissioning complexity.",
       "best": false
      },
      {
       "text": "Announce the P80 date or a window with a stated confidence, keep the earlier date as the internal delivery target, and focus the team on the top tornado drivers.",
       "feedback": "Best. The public commitment matches the owner's appetite for being wrong, while the team still works to a challenging internal target and attacks the risks that drive the spread.",
       "best": true
      },
      {
       "text": "Add three weeks of float to every activity so that the deterministic plan becomes safe.",
       "feedback": "Weak. Padding every activity hides risk, inflates durations through Parkinson's-law behaviour and still ignores merge bias and correlation.",
       "best": false
      },
      {
       "text": "Ask the risk analyst to remove the three largest risks from the model so the P80 moves earlier.",
       "feedback": "Weak and unethical. Changing inputs to obtain a preferred answer destroys the credibility of the analysis and misleads the minister.",
       "best": false
      }
     ]
    },
    {
     "type": "case",
     "title": "The risk analysis nobody believed",
     "context": "A hypothetical offshore wind project's owner commissioned a schedule risk analysis before final investment decision. The model was the contractor's full 4,000-activity schedule with many hard date constraints. Package managers supplied ranges of roughly plus or minus 5% on every activity, no discrete risk events were included, and all inputs were sampled independently. The result showed the P80 only two weeks after the deterministic date, on a programme with a novel installation vessel, a fixed weather window and a single export cable route. The investment committee was told the schedule was 'highly robust'. Eighteen months later, vessel availability and cable installation problems had pushed first power well beyond the reported P80.",
     "questions": [
      "Why was the reported distribution so narrow?",
      "What should the analyst have changed in the model before running it?",
      "How should the results have been presented to the investment committee?"
     ],
     "answer": "The distribution was narrow because the ranges were symmetrical and tiny, the hard constraints stopped delays from propagating, discrete risks such as vessel availability and weather were absent, and independent sampling let overruns and underruns cancel. The analyst should have used a summarised but logic-sound schedule, removed or justified constraints, set skewed ranges from evidence and expert challenge, modelled key risk events with their probabilities, and linked inputs with common drivers such as weather and vessel performance. The committee should have seen the S-curve with P50 and P80, the deterministic date's own probability, the tornado drivers, and a clear statement of what was and was not modelled. A result that looks surprisingly comfortable on a first-of-a-kind project is itself a warning sign to investigate."
    },
    {
     "type": "reflection",
     "prompt": "Look at the last schedule you worked on. Where do three or more paths merge into one milestone, and which activities share a common cause that would make them overrun together?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Expected monetary value (EMV)",
       "def": "The probability-weighted value of an uncertain outcome, calculated as probability multiplied by impact and summed across outcomes; negative for threats and positive for opportunities."
      },
      {
       "term": "Decision tree",
       "def": "A diagram of decisions, chance events and outcomes that is rolled back from right to left to compare options on expected value while also showing the spread of outcomes."
      },
      {
       "term": "Monte Carlo simulation",
       "def": "A method that recalculates a cost or schedule model thousands of times, each time sampling uncertain inputs and risk events, to build a distribution of possible outcomes."
      },
      {
       "term": "Confidence level (P50, P80)",
       "def": "A point on the simulated outcome distribution; P80 is the value that 80% of iterations meet or beat, used to set funded budgets and committed dates."
      },
      {
       "term": "Tornado chart",
       "def": "A bar chart that ranks model inputs by how strongly they influence the result, with the largest driver at the top, directing attention to the risks that matter most."
      },
      {
       "term": "Risk correlation",
       "def": "The tendency of uncertain inputs that share a common cause to move together; ignoring it narrows the simulated spread and understates high-confidence values such as P80."
      },
      {
       "term": "Schedule risk analysis (SRA)",
       "def": "A Monte Carlo analysis of a logic-linked schedule with duration ranges and risk events, producing finish-date confidence levels, drivers and criticality for each activity."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "EMV = probability x impact; it suits comparison and contingency for many risks but never describes the worst case.",
      "Decision trees make the trade-off between expected cost and spread visible to decision-makers.",
      "Monte Carlo combines ranges, risk events and logic; P50 and P80 are cumulative confidence values, not predictions of a date.",
      "Single-point plans are optimistic because of skew, merge bias, omitted risks, ignored correlation and planning optimism.",
      "Use tornado and criticality results to direct action, and have experts verify any tool-generated inputs."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A register holds one threat (30% chance of a USD 400k overrun) and one opportunity (50% chance of a USD 100k saving). What is the combined EMV?",
       "options": [
        "-USD 70k, an expected net cost",
        "-USD 120k, an expected net cost",
        "+USD 50k, an expected net saving",
        "-USD 300k, an expected net cost"
       ],
       "answer": 0,
       "explain": "EMV = 0.30 x (-400k) + 0.50 x (+100k) = -120k + 50k = -USD 70k. The other answers ignore the opportunity or subtract impacts without weighting them by probability."
      },
      {
       "q": "Option A costs 200 with a 20% chance of an extra 50. Option B costs 190 with a 40% chance of an extra 60. Which option has the lower expected cost?",
       "options": [
        "Option B, at an expected cost of 190",
        "Option B, at an expected cost of 214",
        "Option A, at an expected cost of 210",
        "Option A, at an expected cost of 250"
       ],
       "answer": 2,
       "explain": "A = 200 + 0.2 x 50 = 210; B = 190 + 0.4 x 60 = 214. Option A is lower on expected cost, even though B has the lower base price."
      },
      {
       "q": "A schedule risk analysis reports a P80 completion of 14 March. What does this mean?",
       "options": [
        "The project will finish on 14 March in eight cases out of ten if nothing changes",
        "80% of the simulated outcomes finish on or before 14 March",
        "The deterministic date has an 80% probability of being achieved",
        "There is an 80% chance that the project finishes after 14 March"
       ],
       "answer": 1,
       "explain": "P80 is the date that 80% of iterations meet or beat. It says nothing directly about the deterministic date, and it is a cumulative value, not a prediction of an exact finish date."
      },
      {
       "q": "Three independent parallel paths each have a 60% chance of reaching a common milestone on time. What is the chance the milestone is met on time?",
       "options": [
        "60%, the same as each individual path",
        "About 36%, two paths multiplied together",
        "About 80%, because the paths support each other",
        "About 22%, all three paths multiplied together"
       ],
       "answer": 3,
       "explain": "The milestone needs all three paths on time: 0.6 x 0.6 x 0.6 = 0.216, about 22%. This is merge bias, which a single CPM calculation does not show."
      },
      {
       "q": "Piling and bulk excavation both depend on the same uncertain ground conditions, but the model samples them independently. What is the most likely effect?",
       "options": [
        "The spread is understated, so the P80 is too early and contingency too small",
        "The P50 is pushed later because every activity is treated as critical",
        "The tornado chart will show both activities as having no influence",
        "The deterministic date is shown as far more likely than it really is in practice"
       ],
       "answer": 0,
       "explain": "Independent sampling lets a bad draw on one activity cancel a good draw on the other, narrowing the distribution and making high-confidence values look earlier and cheaper than they are."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l4",
   "title": "Health & Safety Management on Site",
   "subtitle": "Plan the hazard out, control what remains, and lead a culture where anyone can stop the job",
   "minutes": 38,
   "objectives": [
    "Apply the hierarchy of controls to high-risk site activities",
    "Explain how risk assessments, method statements, permits and toolbox talks fit together",
    "Use leading and lagging indicators and build a safety culture that surfaces problems early",
    "Draw structural and fire safety lessons from Bangladesh's garment sector for any change-of-use or expansion project"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "No schedule date or cost saving justifies a serious injury, and on a well-run project nobody is asked to make that trade. Construction, plant installation and commissioning combine heavy loads, heights, energy sources, moving plant and many companies working in the same space, often under time pressure and in heat. The project manager is not the safety officer, but sets the conditions in which safety succeeds or fails: realistic programmes, competent contractors, funded temporary works, safe designs and the visible expectation that unsafe work stops. Safety is managed as a line responsibility, with the HSE team advising, checking and coaching. Many organisations run their system to ISO 45001:2018, whose 2024 amendment asks them to consider climate change, which on site means heat stress, flooding and storms. Since 2022 the ILO has counted a safe and healthy working environment among the fundamental principles and rights at work, and its Convention C167 (1988) remains the international benchmark for construction; in Bangladesh, national labour law and the construction safety provisions of BNBC 2020 set the legal minimum."
    },
    {
     "type": "layers",
     "title": "The hierarchy of controls (most effective at the top)",
     "items": [
      {
       "label": "Elimination",
       "parts": [
        "Design out the hazard",
        "Assemble roof trusses at ground level and lift them complete",
        "Relocate a cable route away from a live substation",
        "Drone or laser-scan inspection instead of climbing"
       ]
      },
      {
       "label": "Substitution",
       "parts": [
        "Replace with something less hazardous",
        "Water-based coatings instead of solvent paint in an enclosed hall",
        "Mechanical splices instead of hot-work welding near fuel"
       ]
      },
      {
       "label": "Engineering controls",
       "parts": [
        "Isolate people from the hazard",
        "Edge protection and netting",
        "Trench boxes and shoring",
        "Interlocks and guarding on test rigs"
       ]
      },
      {
       "label": "Administrative controls",
       "parts": [
        "Change how people work",
        "Permits, exclusion zones, lift plans",
        "Training, supervision and toolbox talks"
       ]
      },
      {
       "label": "Personal protective equipment",
       "parts": [
        "Last line of defence",
        "Harness with rescue plan, hard hat, arc-rated clothing",
        "Works only if selected, fitted, maintained and worn"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "Controls come from a structured **risk assessment** for each significant task, written into a **method statement** that tells the crew how the work will be done: sequence, plant, temporary works, competence, supervision, emergency and rescue arrangements, and the specific hazards and controls at each step. Together these are often called RAMS. They are only useful if they are task-specific, prepared with the people who will do the work, reviewed by a competent engineer, and briefed to the crew before work starts. A generic RAMS copied from the last project, signed by a foreman who never read it, gives no protection. When conditions change, such as a different crane, a wetter trench or a new crew, the RAMS is reviewed before work continues."
    },
    {
     "type": "table",
     "title": "High-risk activities and their critical controls",
     "head": [
      "Activity",
      "Typical hazards",
      "Critical controls",
      "Permit or inspection"
     ],
     "rows": [
      [
       "Work at height (steel erection, roofing, scaffolds)",
       "Falls from edges, through fragile roofs or openings; dropped objects",
       "Collective protection first: guardrails, netting, mobile elevating platforms; harness with anchor and rescue plan; exclusion zones below",
       "Scaffold inspected and tagged before use and after changes; work-at-height permit where required"
      ],
      [
       "Lifting operations (cranes, girder launches, transformer placement)",
       "Load drop, crane overturning on soft ground, contact with power lines, wind",
       "Lift plan by an appointed person; ground bearing check and outrigger mats; wind limits; certified rigging; banksman; critical-lift review for tandem or near-capacity lifts",
       "Daily crane checks; thorough examination certificates; lift permit for critical lifts"
      ],
      [
       "Excavation (pile caps, cable trenches, station boxes)",
       "Collapse, buried services, water ingress, falling into trench, plant at edge",
       "Service detection and trial holes; shoring, trench boxes or safe batter; spoil and plant set back; safe access and barriers",
       "Excavation permit; inspection at the start of each shift and after rain"
      ],
      [
       "Electrical isolation (switchgear, MCCs, energisation)",
       "Electric shock, arc flash, unexpected re-energisation",
       "Isolate, lock and tag; prove dead with a tested instrument; earthing; arc-rated PPE; energisation procedures agreed with commissioning",
       "Electrical permit-to-work; sanction-to-test for commissioning"
      ],
      [
       "Confined spaces (tanks, ETP chambers, manholes)",
       "Oxygen deficiency, toxic gas, engulfment, difficult rescue",
       "Avoid entry where possible; ventilation; continuous gas monitoring; attendant outside; rescue equipment and trained team",
       "Confined-space entry permit with gas test record"
      ],
      [
       "Hot work (welding, cutting, grinding)",
       "Fire, burns, fumes, ignition of flammables",
       "Remove or protect combustibles; fire watch during and after work; extinguishers; screens; fume extraction",
       "Hot-work permit with area check and fire watch sign-off"
      ]
     ]
    },
    {
     "type": "sequence",
     "title": "The permit-to-work cycle",
     "actors": [
      "Performing authority",
      "Issuing authority",
      "Work crew"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Request permit: task, location, method"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Check hazards; isolate, lock, prove dead"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Issue permit with conditions and expiry",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "Brief the crew at the work face"
      },
      {
       "from": 2,
       "to": 0,
       "label": "Sign acceptance of the permit",
       "reply": true
      },
      {
       "from": 2,
       "to": 2,
       "label": "Work; stop if conditions change",
       "note": "Gas, weather, scope or crew change"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Hand back: area safe, crew clear"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Remove isolations in order; cancel"
      }
     ],
     "caption": "Notice that the issuing authority both starts and ends the cycle: nobody removes an isolation until the work has been handed back and the crew is confirmed clear."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Test before touch, every time",
     "text": "Many serious electrical incidents during construction and commissioning involve equipment that someone believed was dead. Isolate at the point of supply, apply a personal lock and tag for every person working, then **prove dead** with a voltage tester that has itself been proved on a known live source before and after use. Watch for back-feeds from generators, UPS systems, capacitor banks and parallel transformer circuits. On the day a new switchboard is energised, the site's whole permit regime changes; plan that transition as carefully as the energisation itself."
    },
    {
     "type": "compare",
     "title": "Leading versus lagging safety indicators",
     "columns": [
      {
       "title": "Leading indicators (predict and prevent)",
       "items": [
        "Percentage of high-risk tasks with a reviewed, briefed RAMS",
        "Senior leader safety walks completed and actions closed",
        "Near-miss and hazard reports raised, and time to close them",
        "Toolbox talks delivered and attendance",
        "Permit audits passed; scaffold and crane inspection compliance",
        "Training and competence records current for critical roles"
       ]
      },
      {
       "title": "Lagging indicators (measure harm after the event)",
       "items": [
        "Lost-time injury frequency rate",
        "Total recordable injury rate",
        "Dangerous occurrences, such as a dropped load or scaffold collapse",
        "Environmental incidents and regulator notices",
        "Days lost to injury and occupational illness",
        "Fatalities, which must be zero"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "Indicators only work inside a healthy **safety culture**. Workers report near misses when they trust that reporting leads to fixes, not blame; this is the idea of a **just culture**, which separates honest error from reckless behaviour. Every worker, including the newest labourer from a subcontractor, must have and use **stop-work authority** without fear. A short **toolbox talk** at the start of a shift, given in the crew's own language and tied to that day's task, does more than a long induction slide deck. Welfare is part of safety: drinking water, shade and rest breaks in pre-monsoon heat, clean toilets, safe transport to site and reasonable working hours all reduce fatigue and error. And watch the leaders: if the project manager walks past an open edge, the crew learns what the rules really are."
    },
    {
     "type": "case",
     "title": "Lessons from Bangladesh's garment sector",
     "context": "In 2012 a fire at the Tazreen Fashions factory at Ashulia, near Dhaka, killed many workers; investigations and reporting highlighted stairways that led down into areas used to store yarn and fabric, inadequate emergency exits and workers being told to return to their machines after the alarm. In April 2013 the Rana Plaza building at Savar collapsed, causing one of the worst industrial disasters on record. It housed several garment factories; widely reported findings included upper floors added beyond what had been permitted, a building not designed for industrial loads or the vibration of heavy machinery and generators, and large cracks seen the day before, after which workers were still sent back inside. Afterwards, brand-union agreements such as the Accord on Fire and Building Safety, an industry alliance and a national inspection initiative inspected garment factories for structural, fire and electrical safety and tracked remediation such as structural strengthening, fire separation, fire doors, alarms and safe exit routes.",
     "questions": [
      "Which failures were about design and change of use, and which were about management decisions on the day?",
      "You are managing the addition of a new floor and heavy dyeing machines to an existing factory in Narayanganj. What must happen before the design is fixed?",
      "Which leading indicators would show that fire safety is being maintained once the factory is in operation?"
     ],
     "answer": "The design failures were building and extending structures beyond their permitted and designed use, placing industrial loads and vibrating plant on floors not designed for them, and laying out exits and storage so that stairs could become fire traps. The management failures were ignoring visible structural distress and alarms, and ordering people back into danger. Before fixing the design for any extension or change of use, a competent structural engineer must assess the existing structure, foundations and load paths against the new loads and vibration, with permits obtained from the relevant authority; fire engineering must provide protected escape routes, fire separation and detection sized for the new occupancy. Useful leading indicators include monthly checks that exits and stairs are clear and unlocked, alarm and fire-pump test records, evacuation drill times, structural load plans displayed and respected, and the speed at which reported cracks or electrical faults are investigated. The deepest lesson is that a building's structural and fire safety is a design and governance matter, not a matter for workers to manage on the day."
    },
    {
     "type": "timeline",
     "title": "From disaster to reform in Bangladesh's garment sector",
     "items": [
      {
       "when": "2012",
       "label": "Tazreen fire",
       "text": "Exits and stairs fail as escape routes"
      },
      {
       "when": "April 2013",
       "label": "Rana Plaza collapse",
       "text": "Illegal extra floors, industrial loads, warnings ignored"
      },
      {
       "when": "2013",
       "label": "Inspection programmes",
       "text": "Accord, industry Alliance and a national initiative inspect factories"
      },
      {
       "when": "2020",
       "label": "RMG Sustainability Council",
       "text": "A national body takes over the Accord's work in Bangladesh"
      },
      {
       "when": "2021",
       "label": "International Accord",
       "text": "Brands and unions extend the model beyond Bangladesh"
      },
      {
       "when": "2022",
       "label": "ILO fundamental right",
       "text": "Safe and healthy work becomes a fundamental principle"
      }
     ],
     "caption": "A decade of reform turned one-off inspections into permanent institutions. The engineering lesson is unchanged: structural and fire safety are designed and governed, not left to workers on the day."
    },
    {
     "type": "scenario",
     "title": "Wind rising during a girder lift",
     "situation": "On an elevated metro viaduct, a night-time lift of a precast girder over a closed city road is under way. The road closure permit ends at 05:00 and the programme is already three weeks behind. At 02:30 the measured wind speed at boom height reaches the limit in the lift plan and is still rising. The crane supervisor suggests 'getting this last one in quickly while we still can'. What should the project manager, who is on site, do FIRST?",
     "options": [
      {
       "text": "Support the supervisor: one quick lift is less risky than leaving the work half finished.",
       "feedback": "Weak. Exceeding a lift plan's wind limit is exactly the condition under which loads swing and cranes are overloaded. Time pressure is the classic cause of serious lifting incidents.",
       "best": false
      },
      {
       "text": "Stop the lift, make the load and crane safe in accordance with the lift plan, and arrange a new road closure through the agreed contingency procedure.",
       "feedback": "Best. The lift plan's limit is a critical control. Stopping, making safe and rebooking the closure protects people and still lets the work proceed later; the delay is a schedule problem to solve, not a reason to take the risk.",
       "best": true
      },
      {
       "text": "Ask the crane operator to decide, since the operator has the best view of the load.",
       "feedback": "Weak. Operators should always be able to refuse, but a breach of the lift plan is a management decision; leaving it to the operator under visible schedule pressure passes the burden to the wrong person.",
       "best": false
      },
      {
       "text": "Reduce the crane's radius slightly and continue, recording the decision in the site diary.",
       "feedback": "Weak. Changing configuration on the fly without the appointed person's review creates new unknowns, and recording a breach does not make it safe.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Task risk assessment summary",
     "purpose": "Capture the hazards and controls for one task so it can be reviewed and briefed to the crew before work starts.",
     "columns": [
      "Task step",
      "Hazard",
      "Who could be harmed",
      "Controls (with hierarchy level)",
      "Residual risk",
      "Responsible"
     ],
     "example": [
      [
       "Lift 18 t transformer onto plinth",
       "Load drop; crane overturning on backfilled ground",
       "Riggers; electricians in adjacent bay",
       "Engineering: crane on mats over verified ground; Admin: lift plan by appointed person, exclusion zone, adjacent bay cleared",
       "Low",
       "Lifting supervisor"
      ],
      [
       "Terminate 33 kV cables in switchgear",
       "Contact with live conductors via back-feed",
       "Cable jointers",
       "Elimination: outage of the incomer; Engineering: earths applied; Admin: electrical permit, lock and tag, prove dead",
       "Low",
       "Authorised electrical person"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Choose one high-risk task on your site. Which control in your current RAMS sits lowest in the hierarchy, and what would it take to move it one level higher?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Hierarchy of controls",
       "def": "The ranking of risk controls from most to least effective: elimination, substitution, engineering controls, administrative controls and personal protective equipment."
      },
      {
       "term": "Risk assessment and method statement (RAMS)",
       "def": "A task-specific document set that identifies hazards and controls and describes the safe sequence, plant, competence, supervision and emergency arrangements for the work."
      },
      {
       "term": "Permit-to-work",
       "def": "A formal written system that authorises specific high-risk work at a set place and time, after hazards are checked and isolations made, and controls its hand-back."
      },
      {
       "term": "Toolbox talk",
       "def": "A short, task-focused safety briefing given to a crew at the work face, usually at the start of a shift, in the workers' own language."
      },
      {
       "term": "Lock-out tag-out (LOTO)",
       "def": "An isolation practice in which energy sources are isolated, secured with personal locks and tags, and proved dead before work begins."
      },
      {
       "term": "Leading safety indicator",
       "def": "A measure of proactive safety activity or conditions, such as near-miss reports closed or RAMS briefed, that can predict and prevent harm."
      },
      {
       "term": "Lagging safety indicator",
       "def": "A measure of harm that has already happened, such as lost-time injuries or dangerous occurrences, useful for trends but too late to prevent those events."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Work down the hierarchy of controls from elimination; PPE is the last line of defence.",
      "RAMS must be task-specific, prepared with the crew and briefed; permits control high-risk work from isolation to hand-back.",
      "Prove dead with a proven tester every time, and plan energisation as a change to the whole permit regime.",
      "Lead with leading indicators, a just culture, stop-work authority, welfare and heat-stress planning.",
      "Structural and fire safety for any change of use are design and governance decisions made before work starts."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Steel erectors on a warehouse roof currently rely on harnesses. Which change moves the control highest up the hierarchy?",
       "options": [
        "Providing better harnesses with more frequent and thorough harness inspections",
        "Adding a second supervisor to watch the erectors at the edge",
        "Giving the crew a refresher toolbox talk on fall protection",
        "Assembling roof sections at ground level and lifting them complete"
       ],
       "answer": 3,
       "explain": "Ground-level assembly removes most work at height, which is elimination. Better harnesses are PPE, and supervision and talks are administrative controls, all lower in the hierarchy."
      },
      {
       "q": "What is the main purpose of a permit-to-work system?",
       "options": [
        "To record who was on site for payroll and attendance purposes",
        "To authorise specific high-risk work once hazards are checked and isolations made",
        "To transfer legal responsibility for any accident to the subcontractor doing the work",
        "To replace the need for task-specific method statements"
       ],
       "answer": 1,
       "explain": "A permit controls high-risk work by confirming conditions and isolations before work and managing hand-back afterwards. It complements RAMS rather than replacing them."
      },
      {
       "q": "Which of these is a leading safety indicator?",
       "options": [
        "Lost-time injury frequency rate for the quarter",
        "Number of dangerous occurrences reported to the regulator this year",
        "Percentage of near-miss reports closed out within seven days",
        "Total days lost to occupational injury this year"
       ],
       "answer": 2,
       "explain": "Closing near-miss reports quickly is proactive activity that prevents future harm. The other measures count harm after it has occurred, so they are lagging."
      },
      {
       "q": "An electrician has isolated and locked a motor control centre. What must happen before anyone touches the conductors?",
       "options": [
        "Prove the circuit dead with a tester that has been checked on a known live source",
        "Confirm verbally with the control room that the upstream feeder breaker has been opened",
        "Check the single-line diagram to confirm that no other supply exists",
        "Wait at least ten minutes for any stored energy to dissipate on its own"
       ],
       "answer": 0,
       "explain": "Isolation must be proved at the work point with a proven instrument. Verbal confirmation, drawings and waiting do not detect back-feeds or wrong isolations."
      },
      {
       "q": "A factory owner wants to add a storey and install heavy, vibrating machines on an existing upper floor. What does the garment-sector experience say must come first?",
       "options": [
        "A full fire evacuation drill for all workers on the existing floors before any construction begins",
        "A structural assessment of the building and foundations for the new loads, with permits",
        "A new insurance policy that covers structural damage during the works",
        "A temporary reduction in working hours while the new storey is added"
       ],
       "answer": 1,
       "explain": "Change of use and added load require a competent structural assessment and authority approval before design is fixed. Drills, insurance and reduced hours do not make an overloaded structure safe."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l5",
   "title": "Environmental & Social Management",
   "subtitle": "Protect the air, water, land and communities around the project, and keep the social licence to build",
   "minutes": 36,
   "objectives": [
    "Explain the stages of an environmental and social impact assessment and how its commitments become an ESMP",
    "Plan practical site controls for dust, noise, water and waste, and for community health and safety",
    "Apply land acquisition, resettlement and grievance principles, and make carbon-aware project choices"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "An engineering project changes the place where it is built. Excavation, dewatering, batching plants, haul roads, labour camps and night work affect neighbours long before the asset delivers any benefit, and the finished asset may change flood patterns, traffic or livelihoods for decades. Regulators, lenders and communities therefore expect environmental and social risks to be assessed and managed with the same discipline as cost and schedule. In Bangladesh, the Department of Environment grants environmental clearance under the national Environment Conservation Rules, with the depth of assessment depending on the project's category (check the current rules and category list). Internationally financed projects also follow lender standards such as the IFC Performance Standards (2012), the World Bank Environmental and Social Framework (2018) or the Equator Principles (EP4, 2020) adopted by many banks. Failing here stops work as surely as a missing crane."
    },
    {
     "type": "flow",
     "title": "Environmental and social impact assessment (ESIA)",
     "items": [
      {
       "label": "Screening",
       "text": "Decide whether and how deeply to assess, by project type, scale and location"
      },
      {
       "label": "Scoping",
       "text": "Identify the key issues, study area, alternatives and stakeholders to consult"
      },
      {
       "label": "Baseline",
       "text": "Measure existing air, noise, water, ecology, land use and social conditions"
      },
      {
       "label": "Impacts",
       "text": "Predict impacts in construction and operation and rate their significance"
      },
      {
       "label": "Mitigation and ESMP",
       "text": "Apply the mitigation hierarchy and set measures, owners and monitoring"
      },
      {
       "label": "Consult and disclose",
       "text": "Share findings with affected people, respond to comments, obtain approval"
      },
      {
       "label": "Monitor and adapt",
       "text": "Check compliance and outcomes; update the plan as the project changes"
      }
     ]
    },
    {
     "type": "framework",
     "title": "The mitigation hierarchy",
     "items": [
      {
       "label": "M1",
       "title": "Avoid",
       "text": "Change location, route or design so the impact does not occur, such as moving a substation off a wetland or routing an expressway around a village."
      },
      {
       "label": "M2",
       "title": "Minimise",
       "text": "Reduce the duration, intensity or extent of impacts that cannot be avoided, such as noise barriers, silent piling methods or restricted working hours."
      },
      {
       "label": "M3",
       "title": "Restore",
       "text": "Repair affected areas after the works, such as reinstating farmland, replanting riverbanks or rebuilding access paths."
      },
      {
       "label": "M4",
       "title": "Offset or compensate",
       "text": "As a last resort, provide equivalent benefit elsewhere for residual impacts, such as habitat offsets or fair compensation for lost assets."
      }
     ]
    },
    {
     "type": "text",
     "text": "The ESIA is a study; the **environmental and social management plan (ESMP)** is how its commitments get done. A good ESMP lists each impact, the mitigation measure, who is responsible, when it applies, how it is monitored and the budget. It must flow into contracts: the contractor prepares a construction ESMP with topic plans for traffic, dust, noise, waste, spill response, labour camps and community engagement, and the tender must price these measures or they will quietly disappear under cost pressure. The owner's team audits compliance, reports to the regulator and lenders, and treats repeated non-compliance as seriously as a quality failure."
    },
    {
     "type": "table",
     "title": "Practical site environmental controls",
     "head": [
      "Aspect",
      "Typical sources on site",
      "Controls",
      "Monitoring"
     ],
     "rows": [
      [
       "Dust and air quality",
       "Haul roads, stockpiles, cement handling, demolition, generator exhaust",
       "Water spraying, speed limits, covered trucks, wheel washes, enclosed silos, well-maintained engines",
       "Daily visual checks at the boundary; periodic particulate monitoring near sensitive receptors"
      ],
      [
       "Noise and vibration",
       "Piling, compaction, breakers, concrete pumps, night works",
       "Low-noise methods such as bored instead of driven piles, acoustic screens, agreed working hours, advance notice to neighbours",
       "Noise readings at schools, hospitals and homes; vibration monitoring and pre-condition surveys of nearby buildings"
      ],
      [
       "Water and drainage",
       "Rain runoff with silt, dewatering, concrete washout, wastewater from camps",
       "Silt fences and settlement ponds, washout pits, bunded fuel storage, treated discharge with consent",
       "Turbidity and pH of discharges; inspection after heavy rain"
      ],
      [
       "Waste",
       "Formwork offcuts, packaging, spoil, used oil, paint, ETP sludge",
       "Segregate at source, reuse and recycle, licensed carriers, separate storage for hazardous waste",
       "Waste register with quantities, transfer notes and disposal receipts"
      ],
      [
       "Spills and soil",
       "Refuelling, transformer oil, chemical storage",
       "Drip trays, bunds sized for the largest container, spill kits, trained responders",
       "Weekly inspections; incident log and clean-up records"
      ]
     ]
    },
    {
     "type": "text",
     "text": "**Community health and safety** covers risks the project creates for people outside the fence. Construction traffic past schools and markets needs routes, timing and marshals; open excavations need fencing and lighting; labour camps need sanitation, health screening and a code of conduct so that the arrival of many workers does not bring disease, conflict or sexual exploitation and abuse. Security arrangements must be proportionate and respectful. Emergency plans for fire, flood and structural failure should reach neighbouring communities as well as the workforce. Engage early and keep engaging: much of the community's view of the project is formed by what happens on the access road every morning."
    },
    {
     "type": "keypoints",
     "title": "Land acquisition and resettlement principles",
     "items": [
      "Avoid or minimise physical and economic displacement through design and route choices first.",
      "Compensate for lost assets at full replacement cost, without deduction for depreciation, and pay before people are moved or lose access.",
      "Restore and preferably improve livelihoods and living standards, including for people who lose income but not land, such as traders or fishers.",
      "Recognise people without formal title, such as informal settlers and tenants, and provide assistance appropriate to their situation.",
      "Consult affected people meaningfully, disclose entitlements clearly, and give special attention to vulnerable groups.",
      "Plan resettlement as a project in its own right, with a budget, schedule, monitoring and independent review."
     ]
    },
    {
     "type": "steps",
     "title": "Setting up a grievance mechanism",
     "items": [
      {
       "title": "Design with the community",
       "text": "Agree channels that people actually use: a phone line, a box at the site office, a community liaison officer, local leaders and anonymous options."
      },
      {
       "title": "Publicise it",
       "text": "Explain in local languages how to raise a concern, what will happen and how long it should take, at no cost to the complainant."
      },
      {
       "title": "Register and acknowledge",
       "text": "Log every grievance with a reference number and acknowledge it quickly, even if the answer will take longer."
      },
      {
       "title": "Investigate and resolve",
       "text": "Assign an owner, visit the site, involve the contractor and agree a remedy, such as repairs, compensation or a changed working method."
      },
      {
       "title": "Close out and confirm",
       "text": "Tell the complainant the outcome, record whether they are satisfied and offer an independent escalation route if not."
      },
      {
       "title": "Learn from the pattern",
       "text": "Review trends monthly: repeated dust complaints from one village point to a control that is not working."
      }
     ]
    },
    {
     "type": "text",
     "text": "Carbon is now managed much like cost: many owners set a **carbon baseline** and budget alongside the cost baseline, report against it and ask for a whole-life carbon assessment. PAS 2080:2023 sets out how owners, designers, contractors and suppliers share that duty on buildings and infrastructure. Distinguish **embodied carbon**, from producing, transporting, installing, maintaining and finally removing materials such as cement, steel and aluminium, from **operational carbon** from running the asset. The largest reductions are available early, in the Define stage: build less, reuse existing structures and choose efficient structural forms. Later choices include cement replacement such as slag or fly ash, high-recycled-content steel, offsite and modular construction that cuts waste, electric site plant and grid power instead of diesel generators. Lenders and investors increasingly ask for these figures, and disclosure standards such as IFRS S1 and S2 (2023) shape what owners report. Pair carbon with climate resilience: an asset designed for yesterday's flood levels and temperatures is a risk to everyone who depends on it."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "The ability to reduce carbon falls as the project advances",
     "labels": [
      "Need",
      "Options",
      "Concept",
      "Detailed design",
      "Construction",
      "Operation"
     ],
     "series": [
      {
       "name": "Influence on whole-life carbon",
       "values": [
        100,
        80,
        55,
        30,
        15,
        5
       ]
      }
     ],
     "yLabel": "Relative influence (index)",
     "caption": "An illustrative index, not measured data: the largest and cheapest savings are made while the need and options are still open; by construction most of the carbon is already locked into the design."
    },
    {
     "type": "timeline",
     "title": "Whole-life carbon stages (EN 15978)",
     "items": [
      {
       "when": "A1–A3",
       "label": "Product",
       "text": "Raw materials, transport to the factory, manufacture"
      },
      {
       "when": "A4–A5",
       "label": "Construction",
       "text": "Transport to site and the construction process, including waste"
      },
      {
       "when": "B1–B7",
       "label": "Use",
       "text": "Maintenance, repair, replacement; operational energy (B6) and water (B7)"
      },
      {
       "when": "C1–C4",
       "label": "End of life",
       "text": "Demolition, transport, waste processing and disposal"
      },
      {
       "when": "D",
       "label": "Beyond the life cycle",
       "text": "Reuse, recovery and recycling potential, reported separately"
      }
     ],
     "caption": "Embodied carbon covers A, B1–B5 and C; operational carbon sits in B6–B7. Module D is reported separately so that future recycling credits cannot hide today's emissions."
    },
    {
     "type": "template",
     "title": "ESMP commitments and monitoring register",
     "purpose": "Track each environmental and social commitment from the ESIA through to evidence of compliance on site.",
     "columns": [
      "Impact or commitment",
      "Mitigation measure",
      "Responsible",
      "Monitoring and frequency",
      "Limit or target",
      "Status"
     ],
     "example": [
      [
       "Dust from haul road past a primary school",
       "Water bowser twice daily; 20 km/h limit; covered trucks; no deliveries at school opening and closing times",
       "Contractor environment officer",
       "Visual boundary check daily; particulate monitoring weekly",
       "No visible dust beyond boundary; readings within national ambient standard",
       "Ongoing; two complaints closed in May"
      ],
      [
       "Vibration from compaction near older houses",
       "Pre-condition survey; low-amplitude rollers within 30 m; vibration monitor at nearest house",
       "Site manager",
       "Continuous vibration logging; weekly review",
       "Below the agreed building damage threshold",
       "Survey complete; monitor installed"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "title": "Villagers block the access road",
     "situation": "On a new expressway near Narayanganj, villagers have blocked the site access road since dawn. They say vibratory compaction has cracked walls in several houses and that dust from the haul road is making children ill. The contractor's site manager says the works hold a valid environmental clearance and wants to call the police to clear the road so the concrete pour can go ahead. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Support the contractor and call the police; the clearance proves the works are lawful.",
       "feedback": "Weak. A clearance does not remove the duty to manage impacts, and using force against affected people escalates conflict, risks harm and damages the project's licence to operate and its lender relationships.",
       "best": false
      },
      {
       "text": "Go to the blockade with the community liaison officer, log the complaints in the grievance mechanism, pause compaction near the houses, and commit to an independent condition survey and visible dust controls with a date to report back.",
       "feedback": "Best. You listen, register the grievance, stop the likely cause while it is investigated, and make specific, time-bound commitments. This addresses the real problem and is the fastest credible route to reopening the road.",
       "best": true
      },
      {
       "text": "Offer cash to the village leaders to end the blockade today.",
       "feedback": "Weak. Informal payments bypass the grievance process, may not reach the people affected, create expectations of further payments and can breach integrity rules.",
       "best": false
      },
      {
       "text": "Postpone the pour and wait for the villagers to go home before restarting work as normal.",
       "feedback": "Weak. Waiting without engaging leaves the cause untreated, so the blockade is likely to return and trust will fall further.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Walk the boundary of a project you know, in your mind. Who lives, works or studies within a few hundred metres, which site activity affects them most, and how would they raise a complaint today?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Environmental and social impact assessment (ESIA)",
       "def": "A structured study that predicts a project's environmental and social impacts during construction and operation, rates their significance and sets mitigation, informed by baseline data and consultation."
      },
      {
       "term": "Environmental and social management plan (ESMP)",
       "def": "The plan that turns ESIA commitments into specific measures with owners, timing, monitoring and budget, cascaded into contractor plans and contracts."
      },
      {
       "term": "Mitigation hierarchy",
       "def": "The preferred sequence for managing impacts: avoid first, then minimise, then restore, and only then offset or compensate for what remains."
      },
      {
       "term": "Grievance mechanism",
       "def": "An accessible, publicised process through which affected people can raise concerns and receive a timely, documented response, with escalation if they are not satisfied."
      },
      {
       "term": "Involuntary resettlement",
       "def": "Physical or economic displacement caused by land acquisition or restrictions on land use that affected people cannot refuse, requiring compensation and livelihood support."
      },
      {
       "term": "Livelihood restoration",
       "def": "Measures that restore, and ideally improve, the income and living standards of people whose land, business or access to resources is affected by a project."
      },
      {
       "term": "Embodied carbon",
       "def": "Greenhouse gas emissions from producing, transporting and installing materials and products, such as cement and steel, as distinct from emissions from operating the asset."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "The ESIA predicts impacts; the ESMP turns its commitments into priced, owned and monitored contract obligations.",
      "Apply the mitigation hierarchy in order: avoid, minimise, restore, then offset or compensate.",
      "Pay full replacement cost before displacement and restore livelihoods, including for people without formal title.",
      "Run an accessible grievance mechanism and learn from the pattern of complaints.",
      "Manage carbon as a baseline alongside cost, across all life-cycle stages; the biggest savings are made early in design."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A proposed 132 kV substation site sits on a seasonal wetland used by local fishers. Under the mitigation hierarchy, what should be considered first?",
       "options": [
        "Paying compensation to the fishers for lost catches",
        "Restoring the wetland after construction is finished",
        "Moving the substation to a site that avoids the wetland",
        "Building silt fences and settlement ponds around the site"
       ],
       "answer": 2,
       "explain": "Avoidance comes first: if a feasible alternative site exists, the impact need not happen. Silt fences minimise, restoration repairs and compensation are later steps."
      },
      {
       "q": "Which feature is essential for a grievance mechanism to be effective?",
       "options": [
        "It is accessible and publicised in local languages, with logged, timely responses",
        "It is run only by the contractor so that the owner is not distracted",
        "It only accepts signed written complaints so that every case has a clear paper trail",
        "It deals only with complaints from people who hold formal land titles"
       ],
       "answer": 0,
       "explain": "People must know about it and be able to use it easily, and every grievance must be logged and answered. Restricting channels or eligibility excludes the people most affected."
      },
      {
       "q": "Under good-practice resettlement principles, when should compensation for acquired homes be paid?",
       "options": [
        "After the asset is commissioned, from the project's operating revenue",
        "Within a year of displacement, once the final land survey is complete",
        "Only after any legal challenge to the land valuation has been resolved",
        "Before people are moved, at full replacement cost without depreciation"
       ],
       "answer": 3,
       "explain": "Compensation should be paid before displacement and at replacement cost, so that people can re-establish themselves. Paying later or with depreciation leaves them worse off."
      },
      {
       "q": "At which point does a project usually have the greatest opportunity to reduce embodied carbon?",
       "options": [
        "During construction, by switching off idle plant, site lighting and site cabins",
        "Early in design, by building less and choosing efficient structural forms",
        "At handover, by buying carbon credits to cover the materials used",
        "During operation, by improving maintenance practices on the asset"
       ],
       "answer": 1,
       "explain": "Early design decisions fix most of the material quantities and types. Site and operational measures matter, but they cannot undo a heavy design, and credits do not reduce emissions."
      },
      {
       "q": "What is the relationship between an ESIA and an ESMP?",
       "options": [
        "The ESMP is the regulator's approval letter for the ESIA report",
        "They are alternative names for the same document used by different lenders",
        "The ESIA assesses impacts; the ESMP turns its commitments into owned, monitored actions",
        "The ESIA covers the construction stage only, while the ESMP covers only the operation phase"
       ],
       "answer": 2,
       "explain": "The ESIA predicts and evaluates impacts; the ESMP is the management plan that implements the mitigation with responsibilities, monitoring and budget across construction and operation."
      },
      {
       "q": "A carbon assessment for a new bridge must report the emissions from manufacturing its reinforcing steel. In which EN 15978 stage do they belong?",
       "options": [
        "B6, operational energy use",
        "A1–A3, the product stage",
        "Module D, beyond the life cycle",
        "A5, the construction process"
       ],
       "answer": 1,
       "explain": "Manufacturing materials is the product stage, A1–A3. A5 covers site construction activity, B6 the energy used to run the asset, and module D reports future reuse and recycling potential separately."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m6",
 "order": 6,
 "code": "Procure",
 "title": "Procurement, Contracts, Claims & Variations",
 "subtitle": "Buy the right capability, allocate risk deliberately and manage change and claims without losing the project to disputes",
 "outcomes": [
  "Design a procurement strategy with make-or-buy, packaging, delivery model and long-lead decisions that fit the owner's objectives and capability",
  "Select contract pricing mechanisms and allocate risks to the party best able to manage them, calculating payments under each",
  "Run a fair tender and evaluate bids with normalised prices, weighted scoring and sound integrity controls",
  "Apply the shared principles of international standard-form contracts: the engineer's role, notices, securities, payments, taking over and dispute boards",
  "Manage variations, extensions of time and claims with sound records and resolve disputes at the lowest effective level"
 ],
 "lessons": [
  {
   "id": "m6-l1",
   "title": "Procurement Strategy & Delivery Models",
   "subtitle": "Decide who designs, who builds, how the work is split and what to buy first",
   "minutes": 34,
   "objectives": [
    "Build a procurement strategy from objectives, market conditions and owner capability",
    "Compare design-bid-build, design-build, EPC/turnkey, management contracting, construction management and alliancing",
    "Make packaging and long-lead procurement decisions that protect the critical path"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Long before a contract is signed, the **procurement strategy** has already fixed most of the project's commercial risk. It decides who is responsible for design, who builds, how many contracts there will be and where their boundaries fall, how each party will be paid and which items must be bought before the main contractor is even appointed. Get it right and the owner buys the capability it lacks at a fair price; get it wrong and the project spends years managing interface gaps, claims and disputes that were designed into the structure on day one. The strategy is an owner decision, approved at a stage gate (see Justify), but contractors and consultants need to understand it because it shapes their own risk."
    },
    {
     "type": "steps",
     "title": "Building a procurement strategy",
     "items": [
      {
       "title": "Confirm objectives and constraints",
       "text": "Rank what matters most: earliest completion, lowest cost, price certainty, quality of a complex system, local participation or owner control. You cannot maximise all of them at once."
      },
      {
       "title": "Assess the owner's own capability",
       "text": "Be honest about how much design management, site supervision and interface coordination your organisation can do. Many strategies fail because they assume an owner team that does not exist."
      },
      {
       "title": "Analyse the market",
       "text": "Find out how many capable firms exist for each package, how busy they are, typical lead times and whether they will accept the risks you plan to give them."
      },
      {
       "title": "Decide make-or-buy and packaging",
       "text": "Choose what to do in-house and how to split the remainder into packages with clear boundaries and manageable interfaces."
      },
      {
       "title": "Select the delivery model and pricing",
       "text": "Match the model to design certainty, speed and risk appetite, then select the pricing mechanism (next lesson)."
      },
      {
       "title": "Plan the procurement schedule",
       "text": "Work back from the need-by dates on the project schedule, allowing time for tendering, evaluation, approvals, manufacture and delivery, with long-lead items first."
      },
      {
       "title": "Obtain approval and record the reasons",
       "text": "Document the strategy and the alternatives rejected, so that later decisions and audits can see why the structure was chosen."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "title": "Make or buy",
     "text": "A **make-or-buy** decision asks whether the owner should perform an activity with its own resources or buy it from the market. A power utility with a strong transmission design department may design substations in-house and buy only construction; a garment group with no engineering staff will buy design, supply and installation together. Consider cost, capability, capacity at the time needed, control of critical know-how and long-term strategy. A cheaper in-house option that depends on two key engineers who are already overloaded is not really cheaper."
    },
    {
     "type": "table",
     "title": "Delivery models compared",
     "head": [
      "Model",
      "Who designs",
      "Who builds",
      "Owner's role",
      "Strengths",
      "Watch-outs"
     ],
     "rows": [
      [
       "Design-bid-build (DBB)",
       "Owner's consultant completes design before tender",
       "Contractor builds to that design",
       "High control; owner carries design risk",
       "Clear competitive pricing on a full design; familiar to public owners",
       "Slow, sequential; design errors become variations; little contractor input on buildability"
      ],
      [
       "Design-build (DB)",
       "Contractor develops design from owner's requirements",
       "Same contractor",
       "Defines requirements and reviews",
       "Single point of responsibility; overlaps design and construction; buildability built in",
       "Quality depends on how well requirements are written; less owner control of detail"
      ],
      [
       "EPC / turnkey",
       "Contractor: engineering, procurement and construction",
       "Same contractor, through to commissioning",
       "Sets performance requirements; limited intervention",
       "Price and date certainty for performance-defined plant such as power or process",
       "High risk premium; few bidders for large packages; owner must accept less influence"
      ],
      [
       "Management contracting",
       "Owner's designers, often in stages",
       "Works contractors employed by the management contractor",
       "Close involvement in design and packages",
       "Early start, phased packages, expert construction management",
       "Cost certainty arrives late; owner still carries much of the risk"
      ],
      [
       "Construction management",
       "Owner's designers",
       "Trade contractors contracted directly to the owner",
       "Many direct contracts; CM is the owner's adviser",
       "Transparency, speed, owner control of each package",
       "Owner carries interface and coordination risk across many contracts"
      ],
      [
       "Alliancing / collaborative",
       "Joint team of owner, designers and contractors",
       "Joint team",
       "Active member of the alliance board",
       "Shared incentives, open-book costs, fast joint problem-solving on complex or uncertain work",
       "Needs mature, trusting parties and strong governance; weak cost discipline if targets are soft"
      ]
     ]
    },
    {
     "type": "text",
     "text": "Modern strategies often blend these models. **Early contractor involvement (ECI)** brings a contractor in during design, usually under a pre-construction agreement, to advise on buildability, sequence, offsite and DfMA options and cost. **Two-stage tendering** selects that contractor first on quality, fees and key rates, then agrees the construction price once the design has matured. **Framework agreements** appoint a pool of firms for a programme of similar works, and **alliances** go furthest by sharing pain and gain across the whole team. Whatever the model, write the owner's information requirements (under ISO 19650), carbon targets and any offsite intentions into the strategy so that bidders can price them."
    },
    {
     "type": "text",
     "text": "**Packaging** splits the scope into contracts. Fewer, larger packages reduce the number of interfaces the owner must manage but narrow the market to large firms and may increase risk premiums. More, smaller packages widen competition and can involve capable local contractors, but every boundary becomes a place where responsibility can fall through: who connects the transformer to the switchgear, who provides the crane for the vendor's supervisor, who seals the cable entry through the civil contractor's wall. On a metro line, a typical split separates viaduct and station civil works, track, power supply, signalling, rolling stock and depot; the owner or a systems integrator then has to manage the interfaces between them deliberately, with interface matrices, joint programmes and clear battery limits (see Define)."
    },
    {
     "type": "compare",
     "title": "Few large packages or many small ones?",
     "columns": [
      {
       "title": "Few large packages",
       "items": [
        "Fewer interfaces for the owner to coordinate",
        "Single point of responsibility for integrated systems",
        "Smaller owner team required",
        "Fewer bidders and higher risk premiums",
        "Harder for local firms to participate as main contractors"
       ]
      },
      {
       "title": "Many smaller packages",
       "items": [
        "Wider competition and specialist expertise in each package",
        "Earlier starts by tendering packages in sequence",
        "More opportunities for local contractors and suppliers",
        "Many interfaces for the owner to define and police",
        "Delay or failure in one package can stall several others"
       ]
      }
     ]
    },
    {
     "type": "framework",
     "title": "Six questions for choosing a delivery model",
     "items": [
      {
       "label": "Q1",
       "title": "How complete is the design?",
       "text": "A finished design suits design-bid-build; a performance specification suits design-build or EPC; an evolving solution suits collaborative models."
      },
      {
       "label": "Q2",
       "title": "How urgent is completion?",
       "text": "Overlapping design and construction through design-build, management or construction management saves time but delays cost certainty."
      },
      {
       "label": "Q3",
       "title": "What can the owner manage?",
       "text": "Construction management and many packages need a strong owner team; EPC needs far less day-to-day capacity."
      },
      {
       "label": "Q4",
       "title": "Who should carry which risks?",
       "text": "Transfer risks to parties who can control them; transferring everything buys certainty at a high premium."
      },
      {
       "label": "Q5",
       "title": "What will the market accept?",
       "text": "If capable bidders refuse the risk profile, the tender fails or attracts the wrong firms."
      },
      {
       "label": "Q6",
       "title": "How complex are the interfaces?",
       "text": "Tightly integrated systems, such as process plant, favour single-point responsibility or an alliance."
      }
     ]
    },
    {
     "type": "matrix",
     "title": "A first filter: scope certainty and complexity",
     "x": "Scope certainty at tender (low to high)",
     "y": "Complexity and interfaces (low to high)",
     "quadrants": [
      {
       "title": "Uncertain and complex",
       "items": [
        "Alliance or collaborative target cost",
        "ECI with a two-stage tender",
        "Strong joint governance"
       ]
      },
      {
       "title": "Defined and complex",
       "items": [
        "Design-build or EPC",
        "Single-point responsibility",
        "Performance guarantees"
       ]
      },
      {
       "title": "Uncertain but simple",
       "items": [
        "Remeasurement or framework",
        "Cost-reimbursable for emergencies",
        "Define scope before fixing price"
       ]
      },
      {
       "title": "Defined and simple",
       "items": [
        "Design-bid-build",
        "Lump sum or remeasured",
        "Price competition works well"
       ]
      }
     ],
     "caption": "Use it to shortlist, not to decide: owner capability and market appetite (Q3 and Q5) can still move the answer."
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Long-lead items drive the strategy",
     "text": "Some equipment takes longer to design, manufacture and deliver than the civil works take to build: large power transformers, gas-insulated switchgear, gas and steam turbines, tunnel boring machines, large pumps and valves, HV cable and specialist process packages such as dyeing machines or ETP membranes. Owners often reserve factory slots or place these orders before the main contractor is appointed, then either **free-issue** them to the contractor or **novate** the supply contract so the contractor takes it over. Free-issue keeps control but leaves the owner liable if the item arrives late or damaged; novation gives single-point responsibility but contractors will price the risk of a supplier they did not choose."
    },
    {
     "type": "text",
     "text": "A practical sequence on a hypothetical combined-cycle plant illustrates the logic: the owner reserves the gas turbine slot at the end of feasibility, appoints an owner's engineer to write the employer's requirements, tenders an EPC contract with the turbine supply agreement attached for novation, and keeps the grid connection works as a separate package with the transmission utility. Each choice is deliberate: the turbine protects the critical path, the EPC contract gives one party responsibility for plant performance, and the grid works stay with the only organisation that can deliver them. Record such reasoning in the strategy so the next project can learn from it."
    },
    {
     "type": "tree",
     "title": "Contract structure for the combined-cycle example",
     "root": {
      "label": "Owner",
      "text": "Approves strategy; manages the grid interface",
      "children": [
       {
        "label": "Owner's engineer",
        "text": "Writes employer's requirements; reviews design"
       },
       {
        "label": "EPC contractor",
        "text": "Single point for plant performance",
        "children": [
         {
          "label": "Gas turbine supplier",
          "text": "Owner-reserved slot, novated to the EPC"
         },
         {
          "label": "HRSG and steam turbine",
          "text": "Chosen by the EPC contractor"
         },
         {
          "label": "Civil and erection",
          "text": "EPC subcontractors"
         }
        ]
       },
       {
        "label": "Grid connection",
        "text": "Separate package with the transmission utility"
       }
      ]
     },
     "caption": "The turbine starts as an owner contract and moves under the EPC contractor by novation, while the grid works stay outside the EPC boundary, leaving an interface the owner must manage deliberately."
    },
    {
     "type": "scenario",
     "title": "Choosing a model for a fast-track factory expansion",
     "situation": "A textile group in Gazipur wants a new dyeing hall, eight dyeing machines and an upgraded effluent treatment plant operating within 18 months to meet a buyer's sustainability deadline. The group has two facility engineers and no design department. The concept design is incomplete, but the required production capacity and discharge standards are clear. The chairman asks for design-bid-build 'so we keep control'. What should the project manager recommend?",
     "options": [
      {
       "text": "Design-bid-build, completing the full design with a consultant before tendering construction.",
       "feedback": "Weak. Sequential design and tender would consume much of the 18 months, and with no design department the owner would carry design risk it cannot manage.",
       "best": false
      },
      {
       "text": "Design-build against clear performance requirements, with the owner ordering the dyeing machines early, an owner's engineer reviewing design, and defined hold points for the owner's approval.",
       "feedback": "Best. Performance requirements are clear, time is short and owner capacity is small. Design-build gives single-point responsibility, early ordering protects the critical path, and an owner's engineer preserves control where it matters.",
       "best": true
      },
      {
       "text": "Construction management, with the group contracting each trade directly to stay in control.",
       "feedback": "Weak. Construction management needs a strong owner team to coordinate many contracts and interfaces; two facility engineers cannot do that safely.",
       "best": false
      },
      {
       "text": "An EPC lump-sum contract tendered immediately on the current incomplete concept.",
       "feedback": "Risky. EPC may suit the plant, but tendering on an incomplete brief invites high risk premiums, qualifications and later disputes. The requirements must be defined first.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Look at a project you know well. List its contract packages and draw the interfaces between them. Which interface caused the most trouble, and would a different packaging decision have avoided it?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Make-or-buy decision",
       "def": "The choice between performing an activity with the organisation's own resources or buying it from the market, based on cost, capability, capacity, control and strategy."
      },
      {
       "term": "Contract packaging",
       "def": "The division of a project's scope into separate contracts, balancing competition and specialisation against the number and difficulty of interfaces."
      },
      {
       "term": "Design-bid-build (DBB)",
       "def": "A delivery model in which the owner's consultant completes the design, contractors bid on it, and the selected contractor builds it, with the owner carrying design risk."
      },
      {
       "term": "Design-build (DB)",
       "def": "A delivery model in which one contractor is responsible for both design development and construction against the owner's requirements."
      },
      {
       "term": "EPC (turnkey) contract",
       "def": "A contract in which one contractor is responsible for engineering, procurement, construction and commissioning, handing over a working facility that meets defined performance requirements."
      },
      {
       "term": "Alliancing",
       "def": "A collaborative delivery model in which owner, designers and contractors work as one team under a shared agreement, with open-book costs and shared incentives tied to project outcomes."
      },
      {
       "term": "Long-lead item",
       "def": "Equipment or material whose design, manufacture and delivery time is long enough to drive the schedule, so it must be ordered early, often before the main contractor is appointed."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "The procurement strategy fixes most commercial risk before any contract is signed; record the reasons and the options rejected.",
      "Match the delivery model to design certainty, urgency, owner capability, risk allocation, market appetite and interface complexity.",
      "Fewer packages mean fewer interfaces but a narrower market; more packages need an owner team that can police every boundary.",
      "ECI, two-stage tendering, frameworks and alliances bring contractor knowledge in early when scope is still developing.",
      "Order long-lead items early, choosing free-issue or novation with eyes open to who carries late delivery."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "An owner has a complete, well-checked design for a district road bridge and wants transparent competition on price. Which delivery model fits best?",
       "options": [
        "Alliancing with a joint owner-contractor team",
        "Design-bid-build with the finished design",
        "EPC turnkey with performance requirements",
        "Construction management with trade packages"
       ],
       "answer": 1,
       "explain": "With a finished design and a priority on competitive pricing, design-bid-build is the natural fit. The other models are designed for situations with less design certainty or different priorities."
      },
      {
       "q": "What is the main drawback of splitting a metro project into many small contract packages?",
       "options": [
        "The project will be unable to attract any international contractors",
        "Contract prices always rise because local firms charge more than large ones",
        "Designers lose responsibility for the quality of their drawings",
        "The owner must define and manage many more interfaces between packages"
       ],
       "answer": 3,
       "explain": "More packages create more boundaries where responsibilities can be missed, and the owner must coordinate them. Competition usually widens rather than narrows, and price effects vary."
      },
      {
       "q": "Why might an owner reserve a gas turbine factory slot before appointing the EPC contractor?",
       "options": [
        "Because the turbine's lead time would otherwise drive the completion date",
        "Because EPC contractors are not permitted to buy major rotating equipment",
        "Because an early order automatically transfers all supply risk to the vendor",
        "Because turbine prices are fixed by law once a factory slot is booked"
       ],
       "answer": 0,
       "explain": "Long-lead items can sit on the critical path, so reserving production early protects the schedule. The other statements are not general rules."
      },
      {
       "q": "An owner free-issues transformers to a contractor instead of novating the supply contract. What risk does the owner keep?",
       "options": [
        "The contractor's risk of poor workmanship during installation",
        "The risk that the contractor's own crane breaks down on site",
        "The risk of late or defective delivery of the transformers",
        "The contractor's risk of low productivity on cable termination"
       ],
       "answer": 2,
       "explain": "With free-issue, the owner remains responsible to the contractor for timely and correct supply, so late or defective transformers become the owner's problem. Workmanship and productivity remain the contractor's."
      },
      {
       "q": "Which situation most strongly favours an alliancing or collaborative model?",
       "options": [
        "A simple steel-framed warehouse with a complete, checked design and many interested bidders",
        "A complex rail upgrade under live operations with uncertain scope and many interfaces",
        "A standard pumping station repeated from an earlier, successful project",
        "A small fit-out where the owner wants the lowest fixed price possible"
       ],
       "answer": 1,
       "explain": "Alliancing suits complex, uncertain work where joint problem-solving and shared incentives add value. Simple, well-defined work is usually better served by competitive fixed pricing."
      },
      {
       "q": "A hospital owner wants a contractor's buildability and offsite advice during design, but cannot fix a construction price until the design matures. Which approach fits best?",
       "options": [
        "A single-stage lump-sum tender on the concept design",
        "Cost plus a percentage fee for the whole of the works",
        "Design-bid-build once every drawing is complete",
        "Early contractor involvement with a two-stage tender"
       ],
       "answer": 3,
       "explain": "Two-stage tendering appoints the contractor early on quality, fees and rates, uses its advice during design, then agrees the price once the design is mature. A lump sum on a concept invites premiums, cost plus percentage removes cost discipline, and design-bid-build loses the early input."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l2",
   "title": "Contract Pricing Types & Risk Allocation",
   "subtitle": "Lump sum, remeasurement, cost-reimbursable, target cost and GMP, and who really carries each risk",
   "minutes": 35,
   "objectives": [
    "Explain how each main pricing mechanism pays the contractor and which party carries quantity, productivity and price risk",
    "Calculate payments under remeasurement, cost-plus, target cost and guaranteed maximum price arrangements",
    "Apply the principle of allocating each risk to the party best able to manage it"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The pricing mechanism decides how the contractor is paid, and therefore who wins or loses when quantities grow, productivity falls or materials become more expensive. Every tender price contains three parts: the contractor's estimate of cost, an allowance for the risks it is asked to carry (the **risk premium**) and its margin. Transferring a risk to the contractor does not make it disappear; the owner pays for it through the premium, whether or not the risk occurs. Good contract strategy therefore asks not 'how do we push all risk to the contractor?' but 'which party can manage each risk at the lowest overall cost?'"
    },
    {
     "type": "tree",
     "title": "What a tender price is made of",
     "root": {
      "label": "Tender price",
      "children": [
       {
        "label": "Estimated cost",
        "children": [
         {
          "label": "Direct costs",
          "text": "Labour, plant, materials, subcontracts"
         },
         {
          "label": "Indirect costs",
          "text": "Site management, temporary works, insurance"
         }
        ]
       },
       {
        "label": "Risk premium",
        "text": "Allowance for risks the contract gives the contractor"
       },
       {
        "label": "Margin",
        "children": [
         {
          "label": "Head-office overheads"
         },
         {
          "label": "Profit"
         }
        ]
       }
      ]
     },
     "caption": "Changing the risk allocation moves mainly the risk premium, and the owner pays that premium whether or not the risks occur."
    },
    {
     "type": "table",
     "title": "The main pricing mechanisms",
     "head": [
      "Pricing type",
      "How the contractor is paid",
      "Quantity risk",
      "Productivity and price risk",
      "Best suited to"
     ],
     "rows": [
      [
       "Lump sum",
       "A fixed price for a defined scope, usually paid against milestones or activity schedules",
       "Contractor",
       "Contractor",
       "Complete designs or clear performance requirements; turnkey plant"
      ],
      [
       "Remeasurement (unit rate)",
       "Measured quantities multiplied by tendered rates from a bill of quantities or schedule of rates",
       "Owner",
       "Contractor (within each rate)",
       "Civil and infrastructure works where quantities cannot be fixed, such as earthworks and piling"
      ],
      [
       "Cost-reimbursable",
       "Actual allowable cost plus a fee, either a percentage of cost or a fixed amount",
       "Owner",
       "Owner",
       "Emergency works, undefined scope, research and first-of-a-kind work"
      ],
      [
       "Target cost",
       "Actual cost plus fee, adjusted by a pain/gain share of the difference between target and actual cost",
       "Shared",
       "Shared",
       "Complex work with some uncertainty where collaboration on cost pays off"
      ],
      [
       "Guaranteed maximum price (GMP)",
       "Actual cost plus fee up to a ceiling; contractor bears cost above it; savings often shared",
       "Mostly contractor above the ceiling",
       "Mostly contractor above the ceiling",
       "Buildings with well-developed design where the owner wants a cost ceiling with transparency"
      ]
     ]
    },
    {
     "type": "formula",
     "title": "Payment formulas by pricing type",
     "items": [
      {
       "name": "Remeasurement payment",
       "expr": "Payment = sum of (measured quantity_i x tendered rate_i) + valued variations",
       "meaning": "If piles measure 460 m against 400 m in the bill at a rate of 5,000 per metre, the pile item is paid at 460 x 5,000 = 2,300,000."
      },
      {
       "name": "Cost plus percentage fee",
       "expr": "Payment = actual cost x (1 + fee %)",
       "meaning": "The fee grows as cost grows, so the contractor has no financial reason to save money; use only with strong controls or in emergencies."
      },
      {
       "name": "Cost plus fixed fee",
       "expr": "Payment = actual cost + fixed fee",
       "meaning": "The fee does not grow with cost, which removes the perverse incentive, but cost risk still sits with the owner."
      },
      {
       "name": "Target cost with pain/gain share",
       "expr": "Payment = actual cost + fee + contractor share x (target cost - actual cost)",
       "meaning": "Underspend gives the contractor a bonus; overspend reduces its fee. Contracts often cap the contractor's pain share, for example at the fee."
      },
      {
       "name": "Guaranteed maximum price",
       "expr": "Owner pays the lower of (actual cost + fee) and the GMP, plus any agreed share of savings below it",
       "meaning": "Costs above the GMP fall on the contractor unless the scope changes; the ceiling is adjusted only through agreed changes."
      },
      {
       "name": "Price adjustment (indexation)",
       "expr": "Pn = a + b x (Ln / Lo) + c x (Mn / Mo) + ..., where a + b + c + ... = 1",
       "meaning": "a is the fixed, non-adjustable share; each other weighting multiplies the ratio of a current index (n) to its base-date value (o), for labour, steel, cement or fuel. Payments are multiplied by Pn. Illustrative: a = 0.15, b = 0.35, c = 0.50, with indices up 10% and 20%, gives Pn = 0.15 + 0.385 + 0.60 = 1.135."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Target cost in numbers (illustrative)",
     "text": "A hypothetical water treatment works has a target cost of USD 100m, a fixed fee of USD 6m and a 50:50 pain/gain share. **Underspend:** actual cost USD 90m. Gain = 100 - 90 = 10, contractor share = +5. Payment = 90 + 6 + 5 = **USD 101m**; the owner saves 5 against target plus fee (106), and the contractor earns 11 instead of 6. **Overspend:** actual cost USD 112m. Pain = 100 - 112 = -12, contractor share = -6. Payment = 112 + 6 - 6 = **USD 112m**; the owner pays 6 more than target plus fee and the contractor recovers its cost but earns no margin. Both parties feel every dollar of variance, which is the point."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "What the owner pays as actual cost varies",
     "labels": [
      "80",
      "90",
      "100",
      "112",
      "120"
     ],
     "series": [
      {
       "name": "Target cost, 50:50 share",
       "values": [
        96,
        101,
        106,
        112,
        116
       ]
      },
      {
       "name": "Cost plus fixed fee",
       "values": [
        86,
        96,
        106,
        118,
        126
       ]
      },
      {
       "name": "Lump sum of 106",
       "values": [
        106,
        106,
        106,
        106,
        106
       ]
      }
     ],
     "yLabel": "Owner payment, USD m",
     "caption": "Illustrative, using the callout's target of 100 and fee of 6 (actual cost in USD m along the bottom). The target-cost line is half as steep as cost-plus, so each party feels half of every variance; the lump sum stays flat until change or claims move it."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Fixed price is not the same as certain cost",
     "text": "A lump sum only fixes the price of the scope as described. Every design change, late owner information, change in law or unforeseeable condition that the contract assigns to the owner becomes a variation or claim. Owners who tender lump sums on immature designs often end with a final account far above the contract price, plus disputes. Conversely, a contractor that accepts a lump sum for risks it cannot control, such as ground conditions with no site investigation, may be pushed towards insolvency, which also hurts the owner."
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Volatile prices changed the conversation",
     "text": "Sharp swings in steel, cement, fuel and freight prices in the early 2020s left contractors on long fixed-price contracts without indexation facing heavy losses, and some failed. Owners now more often share this risk through price-adjustment formulas tied to published indices, keeping a fixed portion and sometimes a cap so that budget certainty is not lost. Price the residual exposure in the owner's risk allowance rather than pretending it has gone."
    },
    {
     "type": "table",
     "title": "Who typically carries each risk under the main pricing types",
     "head": [
      "Risk",
      "Lump sum",
      "Remeasurement",
      "Cost-reimbursable",
      "Target cost"
     ],
     "rows": [
      [
       "Quantities greater than estimated",
       "Contractor",
       "Owner",
       "Owner",
       "Shared via pain/gain"
      ],
      [
       "Low productivity or poor planning",
       "Contractor",
       "Contractor",
       "Owner",
       "Shared via pain/gain"
      ],
      [
       "Errors in the owner's design",
       "Owner",
       "Owner",
       "Owner",
       "Owner, through target adjustment"
      ],
      [
       "Unforeseeable ground conditions",
       "Depends on contract terms; often owner",
       "Owner (quantities) and contract terms",
       "Owner",
       "Usually owner, through target adjustment"
      ],
      [
       "Inflation in labour and materials",
       "Contractor unless a price-adjustment formula applies",
       "Contractor unless a price-adjustment formula applies",
       "Owner",
       "Shared, or adjusted by formula"
      ]
     ]
    },
    {
     "type": "keypoints",
     "title": "Mixing mechanisms inside one contract",
     "items": [
      "**Provisional sums** hold money for work that cannot yet be defined, such as utility diversions, and are spent only on instruction.",
      "**Daywork schedules** price small unforeseen tasks by labour and plant hours at tendered rates.",
      "**Price-adjustment formulas** link payments to published indices for steel, cement, fuel and labour on long contracts.",
      "**Milestone or activity schedules** turn a lump sum into payments that track real progress rather than time.",
      "**Reimbursable elements** such as specialist vendor supervision can sit inside an otherwise lump-sum EPC contract.",
      "**Incentives** for early completion, performance guarantees and liquidated damages for delay or shortfall in plant output align commercial results with project objectives."
     ]
    },
    {
     "type": "case",
     "title": "Pain, gain and a cap",
     "context": "A hypothetical municipal water treatment works is let under a target cost contract. The target is USD 80m, the fixed fee is USD 4m, the pain/gain share is 50:50, and the contractor's pain share is capped at the value of its fee. Costs are recorded on an open-book basis and audited monthly. The target can be adjusted only for owner-instructed changes and defined owner risk events.",
     "questions": [
      "What does the owner pay if the actual cost is USD 72m?",
      "What does the owner pay if the actual cost is USD 92m, and who bears the overrun?",
      "What must be in place for this mechanism to drive collaboration rather than arguments?"
     ],
     "answer": "At an actual cost of USD 72m the gain is 8, the contractor's share is 4, and the owner pays 72 + 4 + 4 = USD 80m, saving 4 against target plus fee of 84. At USD 92m the pain is 12 and the contractor's 50% share would be 6, but it is capped at the 4m fee, so the owner pays 92 + 4 - 4 = USD 92m: the contractor recovers cost with no margin and the owner bears 8 of the 12 overrun. The mechanism needs a realistic target agreed with good information, a clear definition of which costs are allowable, open-book access and audit, prompt target adjustment for changes, and joint governance that reviews forecasts monthly. If the target is unrealistically low, the contractor quickly reaches the cap and loses any incentive; if it is padded, the owner pays gain share for no real improvement."
    },
    {
     "type": "scenario",
     "title": "A lump sum for an unknown building",
     "situation": "A public owner wants to convert and extend a 1970s hospital block in Chattogram. Drawings of the existing structure are missing, the extent of concrete deterioration is unknown, and the new wing has a well-developed design. The finance department insists on a single lump-sum contract 'so the budget cannot move'. What should the project manager advise?",
     "options": [
      {
       "text": "Proceed with one lump sum; contractors will price the unknowns and the budget will be fixed.",
       "feedback": "Weak. Bidders will add large premiums or qualify their tenders, and anything the contract leaves with the owner will return as claims. The budget only appears fixed.",
       "best": false
      },
      {
       "text": "Commission intrusive surveys now, then use a lump sum for the defined new wing and a remeasured or target-cost arrangement with provisional sums for the refurbishment.",
       "feedback": "Best. Reducing uncertainty before tender and matching each pricing mechanism to its level of definition gives a fair price for known work and transparent control of the unknowns.",
       "best": true
      },
      {
       "text": "Use cost plus percentage fee for everything, since the existing structure is uncertain.",
       "feedback": "Weak. It removes the contractor's incentive to control cost and leaves the owner carrying all risk, even for the well-defined new wing.",
       "best": false
      },
      {
       "text": "Postpone the project until a complete as-built survey of every element is available.",
       "feedback": "Weak. Some surveys are needed, but complete certainty is unattainable in refurbishment; the right answer is to price residual uncertainty sensibly, not wait indefinitely.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "For a contract you have worked under, list the three biggest risks the contractor carried. Which of them could the contractor genuinely control, and what do you think it cost the owner in risk premium?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Lump sum contract",
       "def": "A contract in which the contractor agrees to deliver a defined scope for a fixed price, carrying quantity and productivity risk, with adjustments only for changes and risks the contract assigns to the owner."
      },
      {
       "term": "Remeasurement contract",
       "def": "A contract in which the work is measured as executed and paid at tendered unit rates, so the owner carries quantity risk while the contractor carries the risk within each rate."
      },
      {
       "term": "Cost-reimbursable contract",
       "def": "A contract in which the contractor is paid its actual allowable costs plus a fee, leaving most cost risk with the owner."
      },
      {
       "term": "Target cost contract",
       "def": "A contract in which the contractor is paid actual cost plus fee, adjusted by a pre-agreed share of the difference between an agreed target cost and the actual cost."
      },
      {
       "term": "Pain/gain share",
       "def": "The agreed proportions in which owner and contractor split cost overruns (pain) and underruns (gain) against a target, often with caps on the contractor's pain."
      },
      {
       "term": "Guaranteed maximum price (GMP)",
       "def": "A pricing arrangement in which the owner reimburses cost plus fee up to an agreed ceiling, the contractor bears cost above it, and savings below it are often shared."
      },
      {
       "term": "Risk premium",
       "def": "The amount a contractor adds to its price to cover risks it is asked to carry; the owner pays it whether or not the risks occur."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Every tender price contains cost, a risk premium and margin; transferring risk is paid for whether or not the risk occurs.",
      "Lump sum suits defined scope; remeasurement suits uncertain quantities; cost-reimbursable suits undefined or emergency work.",
      "Target cost and GMP share or cap overruns; both need open-book access, clear allowable costs and prompt target adjustment.",
      "Index-linked price adjustment shares inflation risk on long contracts without giving up budget control.",
      "Allocate each risk to the party best able to manage it at the lowest overall cost."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Under a remeasurement contract, bored piles are billed at 600 m but 680 m are installed as instructed, at a rate of 4,500 per metre. What is the pile payment?",
       "options": [
        "2,700,000, the billed quantity at the tendered rate",
        "2,880,000, the billed quantity plus a 6.7% allowance",
        "3,060,000, the measured quantity at the tendered rate",
        "3,400,000, the measured quantity at a revised fair rate"
       ],
       "answer": 2,
       "explain": "Remeasurement pays measured quantities at tendered rates: 680 x 4,500 = 3,060,000. The billed quantity is only an estimate, and the rate changes only if the work's character or conditions change."
      },
      {
       "q": "Why is cost plus percentage fee generally avoided except in emergencies?",
       "options": [
        "The fee rises as cost rises, so the contractor has no incentive to control cost",
        "It requires the contractor to carry all of the quantity and productivity risk on site",
        "It is illegal for public owners to reimburse contractor costs directly",
        "It prevents the owner from instructing any changes to the scope"
       ],
       "answer": 0,
       "explain": "A percentage fee rewards higher cost. A fixed fee, target cost or strong cost controls address this; the other statements are not true of cost-plus contracts."
      },
      {
       "q": "Under a target cost contract with a 40% contractor share, the target is 50m, fee 3m and actual cost 55m with no cap. What is the payment?",
       "options": [
        "58m, actual cost plus the full fee",
        "53m, the target plus the full fee",
        "60m, the actual cost plus fee and share",
        "56m, actual cost plus fee less 2m pain"
       ],
       "answer": 3,
       "explain": "Payment = 55 + 3 + 0.4 x (50 - 55) = 55 + 3 - 2 = 56m. The contractor's pain share reduces the fee; the other answers ignore or reverse the share."
      },
      {
       "q": "Which principle should guide how risks are allocated between owner and contractor?",
       "options": [
        "Every risk should be transferred to the contractor so that the owner's budget becomes certain",
        "Each risk should sit with the party best able to control it and bear it at the lowest cost",
        "Risks should be split equally between the parties so the contract is seen as fair",
        "Risks should stay with the owner because contractors always overprice them"
       ],
       "answer": 1,
       "explain": "Allocating risk to the party best able to manage it minimises total cost, including risk premiums and dispute costs. Blanket transfer, equal splits or blanket retention ignore that logic."
      },
      {
       "q": "Under a guaranteed maximum price of USD 40m with no scope changes, the contractor's actual cost plus fee reaches USD 43m. What does the owner pay?",
       "options": [
        "USD 40m, with the USD 3m excess carried by the contractor",
        "USD 43m, because the actual cost was properly incurred",
        "USD 41.5m, with the excess split equally between the parties",
        "USD 40m plus any financing costs the contractor incurred"
       ],
       "answer": 0,
       "explain": "Without changes to scope, the GMP caps the owner's liability, so the contractor bears the USD 3m excess. Savings below the GMP may be shared, but overruns above it are not."
      },
      {
       "q": "A contract adjusts payments by Pn = 0.2 + 0.3 x (Ln / Lo) + 0.5 x (Mn / Mo). Since the base date the labour index has risen 10% and the materials index 20%. What is Pn?",
       "options": [
        "1.15, the simple average of the two rises",
        "1.30, adding both index rises in full",
        "1.13, the weighted sum",
        "1.03, ignoring the materials index rise"
       ],
       "answer": 2,
       "explain": "Pn = 0.2 + 0.3 x 1.10 + 0.5 x 1.20 = 0.2 + 0.33 + 0.60 = 1.13. The fixed portion does not move, and each index rise counts only in proportion to its weighting."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l3",
   "title": "Tendering & Bid Evaluation",
   "subtitle": "Run a fair competition, evaluate on value, and award a contract you can defend",
   "minutes": 36,
   "objectives": [
    "Plan a tender process from prequalification to contract award",
    "Evaluate tenders technically and commercially using normalised prices and weighted scoring",
    "Recognise abnormally low tenders, conflicts of interest and other integrity risks, and respond correctly"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Tendering has three aims: obtain a competitive price, select a contractor that can actually deliver, and do both through a process that every bidder, auditor and lender can see was fair. Public owners must follow procurement law; in Bangladesh, public procurement is governed by national legislation and rules and much of it runs through the national electronic government procurement system, while projects financed by development banks also follow the lender's procurement regulations. Private owners have more freedom but face the same practical truth: a rushed or opaque tender produces weak competition, poor contractors and contracts that are fought over for years."
    },
    {
     "type": "flow",
     "title": "The tender process",
     "items": [
      {
       "label": "Prequalify",
       "text": "Shortlist firms with the capability and capacity to deliver"
      },
      {
       "label": "Issue documents",
       "text": "Complete tender package with evaluation criteria and weights"
      },
      {
       "label": "Clarify",
       "text": "Site visit, questions answered to all, addenda issued"
      },
      {
       "label": "Receive and open",
       "text": "Sealed or electronic submission, recorded opening"
      },
      {
       "label": "Evaluate",
       "text": "Compliance, technical scoring, commercial normalisation"
      },
      {
       "label": "Clarify and verify",
       "text": "Post-qualification checks; clarifications without changing price"
      },
      {
       "label": "Award",
       "text": "Approval, letter of acceptance, securities, debrief of unsuccessful bidders"
      }
     ]
    },
    {
     "type": "table",
     "title": "Typical prequalification criteria",
     "head": [
      "Criterion",
      "Evidence requested",
      "How it is usually assessed"
     ],
     "rows": [
      [
       "Legal eligibility",
       "Registration, licences, tax and debarment status",
       "Pass or fail"
      ],
      [
       "Financial capacity",
       "Audited accounts, turnover, liquidity, available credit lines",
       "Pass or fail against minimum thresholds"
      ],
      [
       "Similar experience",
       "Completed projects of comparable type, size and complexity, with owner references",
       "Pass or fail, sometimes scored"
      ],
      [
       "Key personnel",
       "CVs of the proposed project manager, design manager, HSE and commissioning leads",
       "Scored or minimum requirements"
      ],
      [
       "Equipment and resources",
       "Owned or committed cranes, piling rigs, batching plants, specialist tools",
       "Pass or fail for critical items"
      ],
      [
       "HSE, quality and integrity record",
       "Safety statistics, management system certificates, litigation and claims history",
       "Pass or fail, with judgement on serious incidents"
      ]
     ]
    },
    {
     "type": "keypoints",
     "title": "What a complete tender package contains",
     "items": [
      "Instructions to tenderers: procedure, deadlines, submission format and the evaluation method with weights",
      "Conditions of contract, including the general conditions and project-specific amendments",
      "The owner's requirements or specifications, with drawings and the site and ground investigation information",
      "Pricing documents: bill of quantities, activity schedule or price breakdown, and daywork schedules",
      "Programme requirements: key dates, milestones, access dates and interfaces with other packages",
      "Forms: tender form, tender security, performance security, declarations of integrity and conflicts"
     ]
    },
    {
     "type": "text",
     "text": "During the tender period, keep every bidder on the same footing. Questions are answered in writing and the answer goes to all bidders without revealing who asked; any change to the documents is issued as a numbered **addendum**, and the deadline is extended if bidders need time to price it. Do not meet bidders privately or hint at budgets. A well-run site visit, with the ground investigation data and the existing utility records available to all, reduces the risk premiums that bidders add for things they cannot see. At the deadline, open tenders in a recorded session so that nobody can later suggest a late or altered tender was accepted."
    },
    {
     "type": "sequence",
     "title": "Handling a tender clarification fairly",
     "actors": [
      "Bidder A",
      "Procurement lead",
      "Design team",
      "All bidders"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Written question via the tender portal"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Check the specification clause"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Ambiguity confirmed; clause revised",
       "reply": true
      },
      {
       "from": 1,
       "to": 3,
       "label": "Anonymised answer and Addendum 3",
       "note": "Asker's identity never revealed"
      },
      {
       "from": 1,
       "to": 3,
       "label": "Deadline extended to allow repricing"
      },
      {
       "from": 3,
       "to": 1,
       "label": "Acknowledge receipt of the addendum",
       "reply": true
      }
     ],
     "caption": "Notice that the answer goes to every bidder, not just the one who asked, and that acknowledgements prove each tender was priced on the same documents."
    },
    {
     "type": "steps",
     "title": "Evaluating tenders",
     "items": [
      {
       "title": "Check responsiveness",
       "text": "Confirm each tender is complete, signed, on time, with the required securities and without material deviations from the conditions."
      },
      {
       "title": "Evaluate technically",
       "text": "Score methodology, programme, key staff, design approach and HSE plan against the published criteria, by evaluators who score independently first."
      },
      {
       "title": "Normalise prices",
       "text": "Correct arithmetic errors under the stated rules, price any exclusions, qualifications and omissions, and convert currencies at the stated date so tenders can be compared like for like."
      },
      {
       "title": "Score price and combine",
       "text": "Apply the published price formula and weights; never introduce new criteria after opening."
      },
      {
       "title": "Verify the preferred bidder",
       "text": "Confirm capacity and financial standing, check references and examine any abnormally low rates."
      },
      {
       "title": "Report and recommend",
       "text": "Write an evaluation report that explains every score and adjustment, so the award can be audited and defended."
      }
     ]
    },
    {
     "type": "formula",
     "title": "Price scoring and normalisation",
     "items": [
      {
       "name": "Normalised tender price",
       "expr": "Normalised price = tender price + priced exclusions and qualifications + corrected arithmetic errors",
       "meaning": "Makes tenders comparable. A low price that excludes the crane for transformer placement is not really low."
      },
      {
       "name": "Price score",
       "expr": "Price score = (lowest normalised price / tender's normalised price) x price weight",
       "meaning": "With a 30-point price weight, the lowest tender scores 30; a tender 25% higher scores 30 / 1.25 = 24."
      },
      {
       "name": "Combined score",
       "expr": "Combined score = technical score (out of its weight) + price score",
       "meaning": "For example, technical 60 of 70 plus price 27 of 30 gives 87; the tender with the highest combined score offers the best value under the published method."
      }
     ]
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Combined scores for three tenders",
     "labels": [
      "Tenderer A",
      "Tenderer B",
      "Tenderer C"
     ],
     "series": [
      {
       "name": "Technical (of 70)",
       "values": [
        60,
        52,
        45
       ]
      },
      {
       "name": "Price (of 30)",
       "values": [
        27,
        30,
        26
       ]
      },
      {
       "name": "Combined (of 100)",
       "values": [
        87,
        82,
        71
       ]
      }
     ],
     "caption": "Illustrative. Normalised prices of 10.0m, 9.0m and 10.4m give price scores of 27, 30 and 26. B is cheapest, but A offers the best value under the published weights."
    },
    {
     "type": "template",
     "title": "Tender evaluation matrix",
     "purpose": "Record weighted scores for each tenderer so that the recommendation is transparent and auditable.",
     "columns": [
      "Criterion",
      "Weight",
      "Tenderer A",
      "Tenderer B",
      "Tenderer C",
      "Evaluator notes"
     ],
     "example": [
      [
       "Methodology and programme",
       "25",
       "20",
       "22",
       "14",
       "C has no lifting study for the girders and an unrealistic piling rate"
      ],
      [
       "Price (normalised)",
       "30",
       "27",
       "30",
       "26",
       "B lowest after pricing A's excluded temporary works"
      ]
     ],
     "rows": 7
    },
    {
     "type": "text",
     "text": "Evaluations increasingly look beyond price and method. Owners score carbon reduction proposals, social value such as local employment and training, offsite and DfMA approaches, and the bidder's ability to work to the owner's information requirements in a common data environment. Publish such criteria, and how they will be measured, in the tender documents. Digital and AI tools can help check compliance and compare long submissions, but evaluators must verify every finding and remain accountable for each score."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Abnormally low tenders",
     "text": "A tender far below the estimate and the other bids is not automatically a bargain. It may reflect a misunderstanding of the scope, a missing package, a buy-in strategy that relies on claims, or a contractor in financial trouble. Ask the bidder in writing to explain and substantiate its prices with rate build-ups, supplier quotes and resources. If it can show a genuine advantage, such as owned equipment nearby or a better method, accept it; if it cannot, follow the procurement rules for rejection. Awarding to an unsustainable price often ends in slow progress, disputes or insolvency that cost far more than the saving."
    },
    {
     "type": "compare",
     "title": "Integrity in tendering",
     "columns": [
      {
       "title": "Good practice",
       "items": [
        "Every evaluator signs a conflict-of-interest declaration before seeing tenders",
        "Criteria and weights are published in the tender documents and not changed",
        "All clarifications are answered in writing to all bidders",
        "Tender opening is recorded and witnessed",
        "Unsuccessful bidders receive a debrief explaining their scores"
       ]
      },
      {
       "title": "Red flags",
       "items": [
        "Specifications that only one manufacturer can meet without justification",
        "Late changes to evaluation criteria after tenders are opened",
        "Repeated rotation of winners among the same few firms",
        "Evaluators meeting bidders privately during evaluation",
        "Consultant who drafted the specification also bidding, or advising a bidder"
       ]
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A conflict surfaces mid-evaluation",
     "situation": "You chair the evaluation committee for a hypothetical 230 kV substation contract funded by a development bank. Technical scores have been entered when one evaluator tells you that her brother-in-law was recently appointed a director of Tenderer B, which is currently ranked first. She says she scored fairly and asks to stay on the committee to avoid delay. What should you do FIRST?",
     "options": [
      {
       "text": "Let her stay, since her scores are already entered and she has disclosed the relationship.",
       "feedback": "Weak. Disclosure is necessary but not sufficient: a conflict that could affect the result must be managed, and her scores would still influence the ranking.",
       "best": false
      },
      {
       "text": "Record the declaration, remove her from the committee, and have her scores set aside and the affected criteria re-scored by an independent replacement, informing the approving authority.",
       "feedback": "Best. This manages the conflict transparently, protects the integrity of the award and keeps a documented trail for the lender and auditors.",
       "best": true
      },
      {
       "text": "Cancel the whole tender and start again to avoid any suggestion of bias.",
       "feedback": "Disproportionate as a first step. The conflict can usually be managed by re-scoring; cancellation wastes bidders' effort and delays the project.",
       "best": false
      },
      {
       "text": "Ask Tenderer B to withdraw so that the conflict no longer exists.",
       "feedback": "Weak. The bidder has done nothing wrong; penalising it would be unfair and could breach procurement rules.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Recall a tender you prepared or evaluated. Was any criterion written in a way that favoured one bidder or could not be scored objectively? How would you rewrite it?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Prequalification",
       "def": "Assessment of potential bidders' eligibility, capability, capacity and record before tendering, so that only firms able to deliver are invited to bid."
      },
      {
       "term": "Tender documents",
       "def": "The package issued to bidders, containing instructions, conditions of contract, requirements and specifications, drawings, pricing documents, forms and evaluation criteria."
      },
      {
       "term": "Two-envelope procedure",
       "def": "A tendering method in which technical and financial proposals are submitted separately and price envelopes are opened only for technically compliant tenders."
      },
      {
       "term": "Abnormally low tender",
       "def": "A tender priced so far below the estimate and other bids that its sustainability is doubtful, requiring the bidder to justify its prices before award."
      },
      {
       "term": "Conflict of interest",
       "def": "A situation in which a person's private interests could improperly influence, or appear to influence, their duties in a procurement, requiring declaration and management."
      },
      {
       "term": "Tender security",
       "def": "A bank guarantee or bond submitted with a tender that the owner can call if the bidder withdraws during the validity period or refuses to sign after award."
      },
      {
       "term": "Letter of acceptance",
       "def": "The owner's formal written acceptance of a tender, which typically creates the contract and starts the periods for providing securities and beginning the works."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Prequalify on capability and capacity, then issue complete documents with the evaluation method and weights.",
      "Answer every clarification in writing to all bidders and issue numbered addenda; never meet bidders privately.",
      "Normalise prices for exclusions and errors before scoring, and never add criteria after opening.",
      "Investigate abnormally low tenders before deciding; manage conflicts of interest transparently.",
      "Write an evaluation report that explains every score so the award can be audited and defended."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A tender is USD 9.6m but excludes temporary works for the girder launch, which the evaluators price at USD 0.9m. What is its normalised price?",
       "options": [
        "USD 8.7m, after deducting the excluded work",
        "USD 9.6m, as submitted by the tenderer",
        "USD 9.15m, with half of the exclusion added",
        "USD 10.5m, including the priced exclusion"
       ],
       "answer": 3,
       "explain": "Normalisation adds the cost of exclusions so tenders are compared like for like: 9.6 + 0.9 = 10.5m. Ignoring or halving the exclusion makes this tender look cheaper than it really is."
      },
      {
       "q": "With a 40-point price weight, the lowest normalised price is 80m. What price score does a tender of 100m receive?",
       "options": [
        "40 points, the full price weight",
        "32 points, scaled by 80 divided by 100",
        "20 points, half the price weight",
        "8 points, from the difference in millions"
       ],
       "answer": 1,
       "explain": "Price score = (80 / 100) x 40 = 32. Only the lowest tender receives the full 40 points under this formula."
      },
      {
       "q": "A bidder asks a question that reveals an ambiguity in the specification. How should the answer be handled?",
       "options": [
        "Answer only that bidder, since it identified the ambiguity first",
        "Ignore it and let the evaluators interpret the specification after tender opening",
        "Answer in writing to all bidders and issue an addendum if the documents change",
        "Discuss it with the bidder by phone to save time before the deadline"
       ],
       "answer": 2,
       "explain": "Equal treatment requires the same information for every bidder. Private answers or post-opening interpretation would make the competition unfair."
      },
      {
       "q": "A tender is 35% below the estimate and the other bids. What should the evaluation committee do?",
       "options": [
        "Ask the bidder to explain and substantiate its prices before deciding",
        "Award to it immediately, since price is the most important factor",
        "Reject it automatically because it is outside the expected range",
        "Ask the other bidders whether they can now reduce their prices to match it"
       ],
       "answer": 0,
       "explain": "Abnormally low tenders must be investigated: the price may be genuine or may hide errors or a claims strategy. Automatic award or rejection skips that check, and asking others to match would be bid shopping."
      },
      {
       "q": "In a two-envelope procedure, when are the financial envelopes opened?",
       "options": [
        "Before technical evaluation, so that price can guide scoring",
        "At the same time as the technical proposals, in one session",
        "Only if the owner's cost estimate has been exceeded by every single bidder",
        "After technical evaluation, and only for technically compliant tenders"
       ],
       "answer": 3,
       "explain": "Keeping price sealed until technical evaluation is complete prevents price from influencing technical scores, and only compliant tenders proceed."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l4",
   "title": "International Standard-Form Principles",
   "subtitle": "How widely used international forms share risk, run payments, handle notices and avoid disputes",
   "minutes": 38,
   "objectives": [
    "Describe the main families of international standard-form contracts and how they allocate design and ground risk",
    "Explain the role of the engineer or contract administrator, notices, time limits, securities and the payment cycle",
    "Trace the path from taking over through the defects period to final release, and explain how dispute boards work"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Many engineering projects, especially those financed by development banks or built by international contractors, use standard-form contracts published by industry bodies. The best known internationally are those of FIDIC, the International Federation of Consulting Engineers, whose family of forms is often identified by the colours of their covers; development banks commonly use harmonised versions of them, and many countries publish their own national forms built on similar ideas. FIDIC's current Red, Yellow and Silver Books are the 2017 editions, reprinted with amendments in 2022, though many contracts still run on the 1999 editions. The NEC family, now NEC4, is built around early warnings and compensation events. This lesson describes the **principles** these forms share, in general terms. It does not reproduce any form: on a real project, read the actual edition, the particular conditions and the amendments, because projects frequently change the standard text, and the detail matters."
    },
    {
     "type": "compare",
     "title": "Three common contract families",
     "columns": [
      {
       "title": "Construction to the employer's design",
       "items": [
        "Employer's consultant designs; contractor builds",
        "Usually remeasured against a bill of quantities",
        "An independent engineer administers the contract",
        "Employer carries risk of its design and of unforeseeable ground"
       ]
      },
      {
       "title": "Plant and design-build",
       "items": [
        "Contractor designs to the employer's requirements",
        "Usually lump sum with a payment schedule",
        "An engineer administers the contract",
        "Contractor carries its design risk; unforeseeable ground generally remains with the employer"
       ]
      },
      {
       "title": "EPC / turnkey",
       "items": [
        "Contractor delivers a complete, working facility",
        "Lump sum with high price and date certainty",
        "Employer's representative instead of an independent engineer",
        "Contractor carries much more risk, including most ground and data risks"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "In the employer-designed and design-build families, the **engineer** (in some forms called the contract administrator) is appointed by the employer and wears two hats. For most purposes the engineer acts for the employer: issuing instructions, reviewing designs, inspecting work and certifying payment. But when the parties disagree over a claim or a matter that needs a decision, the engineer must first consult both parties, encourage agreement and, failing that, make a fair determination in accordance with the contract, acting neutrally rather than as the employer's advocate. The engineer's authority may be limited by the employer for certain decisions, such as variations above a value, and those limits must be stated in the contract. In turnkey forms, an employer's representative replaces the engineer and the neutral role largely disappears."
    },
    {
     "type": "timeline",
     "title": "From award to final release (illustrative 30-month contract)",
     "items": [
      {
       "when": "Month 0",
       "label": "Letter of acceptance",
       "text": "Contract formed; periods for securities and commencement start"
      },
      {
       "when": "Month 0–1",
       "label": "Commencement",
       "text": "Performance security, site access, initial programme"
      },
      {
       "when": "Months 1–30",
       "label": "Execution",
       "text": "Design, construction, variations, claims; monthly statements and payment certificates"
      },
      {
       "when": "Month 30",
       "label": "Taking over",
       "text": "Tests passed; care passes to the employer; delay damages stop"
      },
      {
       "when": "Months 30–42",
       "label": "Defects period",
       "text": "Notified defects remedied; retention and securities reduce"
      },
      {
       "when": "Month 42+",
       "label": "Final release",
       "text": "Performance certificate, final statement and payment, securities released"
      }
     ],
     "caption": "The dates assume a 12-month defects notification period. Each certificate along the line shifts risk and money, so it must be issued on evidence."
    },
    {
     "type": "table",
     "title": "Notices and time limits in practice",
     "head": [
      "Situation",
      "Who gives notice",
      "Why timing matters",
      "Practical habit"
     ],
     "rows": [
      [
       "Event the contractor believes entitles it to time or money",
       "Contractor",
       "Forms set a short fixed period from awareness, such as 28 days under the 2017 FIDIC forms or eight weeks for an NEC4 compensation event; late notice can lose the entitlement",
       "Weekly commercial review of diaries, RFIs and instructions for events that need notice"
      ],
      [
       "Event the employer believes entitles it to money or an extension of the defects period",
       "Employer or engineer",
       "Employer claims are usually also subject to notice requirements",
       "Treat employer claims with the same discipline as contractor claims"
      ],
      [
       "Early warning of a matter that may affect cost, time or performance",
       "Either party",
       "Allows joint action before the problem grows",
       "Raise early warnings in progress meetings and confirm them in writing"
      ],
      [
       "Disagreement with an engineer's determination",
       "Either party",
       "A notice of dissatisfaction within the stated period preserves the right to take the matter further",
       "Diary the deadline the day the determination arrives"
      ],
      [
       "Detailed claim with supporting particulars",
       "Claimant",
       "A fully detailed claim must follow the initial notice within a further fixed period",
       "Build the claim file from contemporaneous records from day one"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Time bars are real",
     "text": "A **time bar** is a contract provision under which a claim is lost, or seriously weakened, if notice is not given within the stated period. Courts and tribunals in many jurisdictions enforce them, although some legal systems soften their effect. The cure is cultural, not legal: a site team that confirms verbal instructions in writing the same day, a commercial team that scans every diary and RFI for notifiable events each week, and a notice register that nobody is allowed to ignore. A well-founded claim can be lost on a missed date; a weak claim cannot be rescued by a well-timed notice."
    },
    {
     "type": "sequence",
     "title": "A claim from notice to dispute board",
     "actors": [
      "Contractor",
      "Engineer",
      "Employer",
      "DAAB"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Notice of claim within 28 days",
       "note": "Late notice risks a time bar"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Fully detailed claim with records"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Consult: seek agreement"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Consult: seek agreement"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Fair determination to both parties",
       "reply": true
      },
      {
       "from": 2,
       "to": 1,
       "label": "Notice of dissatisfaction, in time"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Refer the dispute to the board"
      },
      {
       "from": 3,
       "to": 0,
       "label": "Decision: binding, comply promptly",
       "reply": true
      }
     ],
     "caption": "Generalised from the 2017 FIDIC claims procedure (Clause 20, 28-day notice); particular conditions often change periods and steps. Either party can be the claimant or the dissatisfied party."
    },
    {
     "type": "table",
     "title": "Typical allocation of key risks in international forms (in general terms)",
     "head": [
      "Risk",
      "Employer generally carries",
      "Contractor generally carries"
     ],
     "rows": [
      [
       "Physical conditions on site",
       "Conditions an experienced contractor could not reasonably have foreseen at tender, in employer-designed and design-build forms",
       "Foreseeable conditions; under turnkey forms, most ground conditions"
      ],
      [
       "Design",
       "The employer's own design and data it is responsible for",
       "The contractor's design, and under turnkey forms the interpretation of the employer's requirements"
      ],
      [
       "Delay caused by the employer's side",
       "Late access, late information, late approvals, other contractors employed by the employer",
       "Its own planning, resources, subcontractors and suppliers"
      ],
      [
       "Exceptional events",
       "Time, and in some cases cost, for events beyond either party's control such as war or major natural catastrophe",
       "Ordinary commercial and operational risks"
      ],
      [
       "Change in law after the base date",
       "Time and cost effects of new or changed laws",
       "Laws in force at the base date, priced in the tender"
      ],
      [
       "Weather",
       "Time for exceptionally adverse climatic conditions under many forms",
       "Normal seasonal weather, including predictable monsoon conditions"
      ]
     ]
    },
    {
     "type": "keypoints",
     "title": "Securities and the payment cycle",
     "items": [
      "**Performance security**: a bank guarantee, often payable on demand, provided after award and kept valid until the contractor has completed the works and remedied defects.",
      "**Advance payment guarantee**: protects the employer's advance, reducing as the advance is recovered from interim payments (see Budget for advances and retention).",
      "**Monthly statements**: the contractor submits a statement of the value of work done, materials and adjustments.",
      "**Interim payment certificates**: the engineer certifies the amount it fairly considers due within a set period, and may withhold for defective work but not refuse to certify altogether.",
      "**Payment and late payment**: the employer pays within a set period; late payment typically attracts financing charges and, if prolonged, rights to slow down, suspend or ultimately terminate.",
      "**Final statement and final payment**: after the performance certificate, the final account is settled and remaining securities are released."
     ]
    },
    {
     "type": "text",
     "text": "**Taking over** marks the point at which the works, or a section of them, are complete enough to be used for their intended purpose, with only minor outstanding work and defects that do not substantially affect use, and after the tests on completion have been passed. The engineer issues a taking-over certificate; responsibility for care of the works passes to the employer, delay damages stop running and part of the retention is usually released. The **defects notification period** then begins, typically a year or as stated in the contract, during which the contractor must make good defects notified to it. When it expires and all defects are remedied, a performance certificate confirms that the contractor's obligations are complete. The Commission stage covers the engineering of handover; here the point is that each certificate shifts risk and money, so it must be issued on evidence, not on pressure."
    },
    {
     "type": "steps",
     "title": "How a standing dispute avoidance and adjudication board works",
     "items": [
      {
       "title": "Appoint at the start",
       "text": "One or three experienced, independent members are appointed jointly by the parties at the beginning of the contract, not when a dispute has already arisen."
      },
      {
       "title": "Visit regularly",
       "text": "The board visits the site at intervals, reads progress reports and gets to know the project and the people before tensions build."
      },
      {
       "title": "Help informally",
       "text": "If both parties agree, the board can give an informal view on an emerging disagreement, which often resolves it without a formal referral."
      },
      {
       "title": "Decide referred disputes",
       "text": "If a dispute is formally referred, the board hears both sides and gives a reasoned decision within a set period; the parties must comply with it promptly."
      },
      {
       "title": "Preserve or accept",
       "text": "A party unhappy with the decision gives notice of dissatisfaction within the stated period; otherwise the decision becomes final and binding."
      },
      {
       "title": "Settle or arbitrate",
       "text": "After a period for amicable settlement, unresolved disputes go to arbitration, where the board's decision remains binding until revised."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "The engineer under pressure",
     "situation": "You are the engineer on a design-build water treatment works near Dhaka. The contractor has given timely notice and a well-documented claim for an extension of time after excavation for the clarifier met a buried, unrecorded concrete structure that the site investigation could not reasonably have revealed. The employer's director calls you and says: 'You work for us. Reject it; let them fight for it.' What should you do?",
     "options": [
      {
       "text": "Reject the claim as instructed, since the employer appointed you and pays your fees.",
       "feedback": "Weak. When determining claims, the engineer must act fairly and in accordance with the contract. Rejecting a valid claim on instruction breaches that duty and invites a dispute board referral the employer is likely to lose.",
       "best": false
      },
      {
       "text": "Consult both parties, assess the claim against the contract and the records, make a fair, reasoned determination, and explain to the director why this protects the employer.",
       "feedback": "Best. The determination role requires neutrality. A fair, documented decision reduces dispute risk and cost, and explaining it helps the employer understand its own interest.",
       "best": true
      },
      {
       "text": "Avoid making any determination so that the matter can go straight to arbitration.",
       "feedback": "Weak. Failing to determine within the required period is itself a failure of the engineer's duty and usually lets the contractor escalate, with costs and delay for everyone.",
       "best": false
      },
      {
       "text": "Grant a reduced extension as a compromise so that both parties feel partly satisfied.",
       "feedback": "Weak. A determination must follow the contract and the evidence, not split the difference. Arbitrary compromises are easily overturned and undermine trust in the engineer.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Contract notice register",
     "purpose": "Track every contractual notice and its deadlines so that no entitlement is lost and no response is late.",
     "columns": [
      "Ref",
      "Date sent or received",
      "From and to",
      "Event or subject",
      "Contract basis (general)",
      "Next deadline",
      "Status"
     ],
     "example": [
      [
       "N-023",
       "12 Mar 2026",
       "Contractor to engineer",
       "Notice of claim: unrecorded concrete structure at clarifier excavation",
       "Unforeseeable physical conditions",
       "Fully detailed claim due within the contract period",
       "Open: records being compiled"
      ],
      [
       "N-024",
       "15 Mar 2026",
       "Engineer to contractor",
       "Instruction to remove obstruction and redesign clarifier base locally",
       "Variation instruction",
       "Contractor's proposal on cost and time",
       "Open: proposal due"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "Who on your project is responsible for spotting events that need a contractual notice, and how quickly does information from the site diary reach them? What would you change?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Contract administrator (the Engineer)",
       "def": "The person or firm named in the contract to administer it, issuing instructions and certificates for the employer and making fair, neutral determinations when the parties disagree."
      },
      {
       "term": "Contractual notice",
       "def": "A formal written communication required by the contract to trigger or preserve rights, such as notice of a claim, sent to the stated address within the stated period."
      },
      {
       "term": "Time bar",
       "def": "A contract provision under which entitlement to time or money is lost, or weakened, if the required notice is not given within the specified period."
      },
      {
       "term": "Unforeseeable physical conditions",
       "def": "Ground, water and other physical conditions at the site that an experienced contractor could not reasonably have foreseen at tender, often an employer risk in employer-designed and design-build forms."
      },
      {
       "term": "Performance security",
       "def": "A bank guarantee or bond provided by the contractor after award, which the employer can call if the contractor fails to perform its obligations."
      },
      {
       "term": "Interim payment certificate",
       "def": "The engineer's periodic certificate of the amount due to the contractor for work done, materials and adjustments, which the employer must pay within the contract period."
      },
      {
       "term": "Dispute avoidance and adjudication board (DAAB)",
       "def": "A standing panel of independent experts appointed at the start of a contract to help the parties avoid disputes and to give decisions on referred disputes that are binding unless later revised."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Read the actual edition, particular conditions and amendments; standard forms are often changed.",
      "The engineer acts for the employer day to day but must consult and determine claims fairly under the contract.",
      "Notices have deadlines that can bar a good claim; run a notice register and weekly records review.",
      "Securities, payment certificates, taking over and the performance certificate each shift risk and money.",
      "A standing dispute board appointed at the start helps avoid disputes; its decisions bind unless revised."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Under a typical EPC/turnkey form, which party usually carries most of the risk of unexpected ground conditions?",
       "options": [
        "The contractor, as part of a turnkey price",
        "The employer, through remeasured quantities",
        "The engineer, as the neutral administrator",
        "The dispute board, through its decisions"
       ],
       "answer": 0,
       "explain": "Turnkey forms give the contractor most ground and data risk in return for a higher price. Employer-designed and design-build forms generally leave unforeseeable conditions with the employer."
      },
      {
       "q": "When determining a disputed claim, how should the engineer act?",
       "options": [
        "As the employer's advocate, minimising every claim",
        "As the contractor's adviser, since the claim is theirs",
        "Neutrally, after consulting both parties, following the contract",
        "By splitting the claimed amount evenly between the two contracting parties"
       ],
       "answer": 2,
       "explain": "The determination role requires consultation and a fair decision under the contract. Advocacy for either side or arbitrary splits are not acceptable."
      },
      {
       "q": "A contractor becomes aware of an event giving entitlement to time but gives notice ten weeks later, well after the period stated. What is the main risk?",
       "options": [
        "The engineer must award double the time to compensate",
        "The entitlement may be lost or weakened under a time bar",
        "The employer must pay financing charges on the claim",
        "The dispute board must hear the claim before anything else"
       ],
       "answer": 1,
       "explain": "Many forms make timely notice a condition of entitlement. Late notice risks losing the claim regardless of its merits; it does not create extra entitlements."
      },
      {
       "q": "What usually happens to responsibility for care of the works when a taking-over certificate is issued?",
       "options": [
        "It stays with the contractor until the final payment is made",
        "It passes to the engineer until the defects period expires",
        "It is split between the parties according to the retention",
        "It passes to the employer, and delay damages stop running"
       ],
       "answer": 3,
       "explain": "Taking over transfers care of the works to the employer and stops delay damages. The contractor still remedies defects during the defects notification period."
      },
      {
       "q": "What distinguishes a standing dispute avoidance board from an ad hoc one?",
       "options": [
        "It is appointed only after a dispute has been formally referred",
        "Its decisions can never be challenged in later arbitration",
        "It is appointed at the start and visits regularly to help avoid disputes",
        "It is chosen by the engineer alone rather than by the two parties jointly"
       ],
       "answer": 2,
       "explain": "A standing board knows the project from the beginning and can help prevent disputes. Its decisions are binding but can be revised in arbitration if a timely notice of dissatisfaction is given."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l5",
   "title": "Variations, Claims & Disputes",
   "subtitle": "Instruct and value change properly, prove delay and disruption, and resolve disagreements at the lowest level",
   "minutes": 40,
   "objectives": [
    "Manage a variation from instruction through valuation, recording and payment",
    "Explain extensions of time, delay analysis methods, concurrent delay, prolongation and disruption",
    "Keep the records and notices that make claims provable, and choose the right route from negotiation to arbitration"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Change is normal on engineering projects: designs develop, owners change their minds, ground behaves differently from the borehole logs and authorities impose new conditions. A **variation** is a change to the works instructed under the contract. A **claim** is a request by either party for an entitlement the contract provides, usually additional time, additional payment, or both. Variations and claims are not signs of failure; unmanaged ones are. Disputes arise when a claim is not agreed and the parties cannot settle it. The professional aim is to price change fairly and quickly, prove entitlement with records, and settle disagreements at the lowest, cheapest level possible."
    },
    {
     "type": "sequence",
     "title": "The life of a variation",
     "actors": [
      "Owner",
      "Engineer",
      "Contractor"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Need for change identified"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Request a variation proposal"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Proposal: method, cost and time",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Recommend; check budget authority"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Approve within delegated authority",
       "reply": true
      },
      {
       "from": 1,
       "to": 2,
       "label": "Written variation instruction",
       "note": "Before the work is done"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Execute; record on its own cost code"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Value by contract rules; certify in IPC",
       "note": "Variation log and forecast updated"
      }
     ],
     "caption": "The written instruction comes before the work, and the contractor's separate cost code makes valuation quick and credible."
    },
    {
     "type": "table",
     "title": "How variations are usually valued",
     "head": [
      "Basis",
      "When it applies",
      "Example"
     ],
     "rows": [
      [
       "Contract rates applied directly",
       "The varied work is of similar character and conditions to items already priced",
       "Extra 120 m of the same cable tray on the same level, at the tendered rate"
      ],
      [
       "Contract rates used as a basis",
       "Similar work but different quantity, location or conditions that justify adjustment",
       "Same tray installed at 18 m height from a mobile platform; rate adjusted for access and lower productivity"
      ],
      [
       "New fair rates",
       "No relevant rate exists in the contract",
       "A new chemical dosing skid: reasonable cost plus a reasonable allowance for overheads and profit"
      ],
      [
       "Daywork",
       "Small, unpredictable tasks that are hard to measure",
       "Breaking out an unexpected old foundation over two days, recorded by labour and plant hours"
      ],
      [
       "Agreed quotation in advance",
       "The parties agree a price before the work starts",
       "Owner requests a revised lobby layout and accepts the contractor's quotation before instructing"
      ]
     ]
    },
    {
     "type": "text",
     "text": "An **extension of time** (EOT) gives the contractor more time to complete, protecting it from delay damages, when a delay is caused by an event the contract places at the employer's risk and that event actually delays completion. The second condition matters: a late drawing for a non-critical stair finish may cost money but not time if the activity has enough float. The contractor must show cause and effect with a programme analysis, give notice in time and substantiate the claim. Whether an EOT also carries money depends on the type of event: employer-caused delays usually do; neutral events such as exceptionally adverse weather often give time only. Contracts differ on who owns float, so read yours. Software, including AI-assisted tools, can process programme updates quickly, but a qualified planner must own the method and be able to explain every step to a tribunal."
    },
    {
     "type": "table",
     "title": "Delay analysis methods (in general terms)",
     "head": [
      "Method",
      "How it works",
      "Strengths",
      "Weaknesses"
     ],
     "rows": [
      [
       "As-planned versus as-built",
       "Compares planned and actual dates to show where and by how much the work slipped",
       "Simple, intuitive, uses actual records",
       "Shows what slipped, not why; weak on cause when several events overlap"
      ],
      [
       "Impacted as-planned",
       "Adds delay events to the original programme and measures the shift in completion",
       "Quick and cheap",
       "Ignores what actually happened and the contractor's own delays; often criticised"
      ],
      [
       "Time impact analysis",
       "Inserts a fragnet for each event into the programme updated to just before the event, and measures the effect",
       "Contemporaneous and prospective; well suited to EOT decisions during the project",
       "Depends on accurate programme updates; can be time-consuming for many events"
      ],
      [
       "Windows analysis",
       "Divides the project into periods and analyses the critical path and delay within each period using updated programmes",
       "Tracks the shifting critical path with actual progress",
       "Needs regular, reliable updates; choice of windows can influence results"
      ],
      [
       "Collapsed as-built",
       "Removes delay events from the as-built programme to show when work would have finished but for them",
       "Grounded in what actually happened",
       "Requires a reliable as-built logic; subjective when rebuilding it"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Concurrent delay",
     "text": "**Concurrent delay** occurs when two or more delay events, one the employer's risk and one the contractor's, affect the critical path at the same time and each would have delayed completion on its own. Treatment depends on the contract and the governing law, but a common approach gives the contractor time (so it is not penalised by delay damages) but not money (because it would have incurred the cost anyway). True concurrency is rarer than claimed: often one event is critical and the other only absorbs float. Careful, contemporaneous programme analysis is the only reliable way to tell the difference, and many contracts now state how concurrency will be handled."
    },
    {
     "type": "formula",
     "title": "Quantifying prolongation and disruption",
     "items": [
      {
       "name": "Prolongation cost",
       "expr": "Prolongation cost = compensable delay (days) x actual time-related cost per day",
       "meaning": "Time-related costs include site management, supervision, offices, cranes kept on hire and site security for the extra period; they must be proven from records, not taken from the tender rate alone."
      },
      {
       "name": "Measured-mile lost hours",
       "expr": "Lost hours = actual hours in the impacted period - (quantity installed in the impacted period x hours per unit in an unimpacted period)",
       "meaning": "Compares productivity on the same work when disrupted and when not, using the project's own records."
      },
      {
       "name": "Disruption cost",
       "expr": "Disruption cost = lost hours x all-in labour rate (+ associated plant and supervision)",
       "meaning": "Converts lost productivity into money; the cause of disruption must still be linked to an employer-risk event."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "A measured mile on cable pulling (figures illustrative)",
     "text": "In an unimpacted month, crews pulled 3,000 m of cable in 2,400 hours: 0.8 hours per metre. In the month when the owner's late equipment changes forced crews to work around partially installed switchboards, they pulled 5,000 m in 5,600 hours. Expected hours = 5,000 x 0.8 = 4,000. Lost hours = 5,600 - 4,000 = **1,600**. At an all-in rate of BDT 450 per hour, the disruption cost of labour is 1,600 x 450 = **BDT 720,000**. The claim is credible because both figures come from the project's own allocation sheets for the same work by the same crews."
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Measured mile: actual versus expected hours",
     "labels": [
      "Unimpacted month (3,000 m)",
      "Impacted month (5,000 m)"
     ],
     "series": [
      {
       "name": "Actual hours",
       "values": [
        2400,
        5600
       ]
      },
      {
       "name": "Hours at 0.8 h per metre",
       "values": [
        2400,
        4000
       ]
      }
     ],
     "caption": "Illustrative figures from the example. In the unimpacted month the bars match; in the impacted month the 1,600-hour gap is the lost productivity claimed."
    },
    {
     "type": "checklist",
     "title": "Records that win, or settle, claims",
     "items": [
      "Daily site diaries signed by supervisors, with weather, resources, work done and problems",
      "Labour and plant allocation sheets by activity or cost code",
      "Monthly programme updates with actual start and finish dates and a narrative of delays",
      "Dated and located photographs, drone surveys and laser scans of progress and problems",
      "RFI and submittal registers with dates of request and response",
      "Every verbal instruction confirmed in writing the same day",
      "Notice register with deadlines and evidence of delivery",
      "Minutes of progress meetings agreed by both parties",
      "Cost records that separate the cost of each variation and disruption event",
      "Records held in the common data environment with status, revision and date (ISO 19650)"
     ]
    },
    {
     "type": "layers",
     "title": "The dispute resolution ladder (lowest and cheapest first)",
     "items": [
      {
       "label": "Site-level negotiation",
       "parts": [
        "Project managers and commercial leads",
        "Fast, cheap, preserves relationships"
       ]
      },
      {
       "label": "Senior management negotiation",
       "parts": [
        "Executives not involved day to day",
        "Fresh view and authority to trade issues"
       ]
      },
      {
       "label": "Mediation",
       "parts": [
        "Independent mediator helps parties reach their own settlement",
        "Confidential; not binding unless a settlement is signed"
       ]
      },
      {
       "label": "Dispute board or adjudication",
       "parts": [
        "Independent experts decide quickly",
        "Binding in the interim; may become final if not challenged"
       ]
      },
      {
       "label": "Arbitration or litigation",
       "parts": [
        "Final and binding award or judgment",
        "Slow, expensive, public in court, private in arbitration"
       ]
      }
     ]
    },
    {
     "type": "case",
     "title": "A station box, two delays and a missing record",
     "context": "On a hypothetical underground metro station, the owner was responsible for diverting a large water main before the contractor could excavate the east end of the station box. The diversion finished eleven weeks late. During the same period the contractor's main crawler crane was out of service for four weeks after a hydraulic failure, and the contractor's diaries for that month are incomplete. The contractor gave notice of the diversion delay on time and now claims eleven weeks' extension of time and prolongation costs. The owner's team argues that the crane breakdown means the delay was concurrent and nothing is due.",
     "questions": [
      "What must the contractor show to obtain an extension of time for the diversion delay?",
      "How should the crane breakdown affect the assessment?",
      "How could the contractor's missing diary entries affect the outcome, and what should both parties do now?"
     ],
     "answer": "The contractor must show that the late diversion was an employer-risk event, that notice was given properly, and through a time impact or windows analysis that it actually delayed the critical path to completion, and by how much. The crane breakdown is a contractor-risk event; if analysis shows it was on the critical path at the same time and would have delayed completion on its own, those four weeks may be concurrent, which under many contracts gives time but not prolongation cost for that period, whereas if the crane only consumed float it does not reduce the entitlement. The missing diaries weaken the contractor's ability to prove resources and productivity, so the tribunal may rely on other records such as crane hire invoices, photographs and progress updates, or award less. Both parties should agree the facts that can be agreed, share programme updates, and try senior negotiation or the dispute board before positions harden into arbitration."
    },
    {
     "type": "scenario",
     "title": "A verbal instruction at the trench",
     "situation": "You are the contractor's project manager on a hypothetical gas-insulated substation. During a site walk, the owner's engineer tells your foreman to re-route a 60 m cable trench around a planned future transformer bay, which requires breaking out a newly cast slab. The foreman wants to start tomorrow to keep the crew busy. Nothing has been written down. What should you do FIRST?",
     "options": [
      {
       "text": "Start tomorrow and claim the cost in the final account at the end of the project.",
       "feedback": "Weak. Without a written instruction and timely notice, entitlement may be challenged or lost under a time bar, and costs will be hard to prove months later.",
       "best": false
      },
      {
       "text": "Refuse to do any work until the owner agrees the full price of the change.",
       "feedback": "Weak. Refusing a valid instruction can put you in breach. Most contracts require you to proceed once instructed, with valuation following.",
       "best": false
      },
      {
       "text": "Confirm the instruction in writing today, give notice of the expected cost and time effect within the contract period, and record the resources on a separate cost code from the start.",
       "feedback": "Best. Written confirmation establishes the variation, the notice protects entitlement, and separate records make valuation straightforward and credible.",
       "best": true
      },
      {
       "text": "Ask the foreman to do the work quietly at night so that the main programme is not disrupted.",
       "feedback": "Weak. Hiding the change avoids neither cost nor risk, removes the evidence you need for valuation and may create safety problems working at night near energised equipment.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Variation and claims log",
     "purpose": "Track every change and claim from instruction to agreement so that the forecast final account is always current.",
     "columns": [
      "Ref",
      "Description",
      "Instructed by and date",
      "Notice date",
      "Time claimed or agreed",
      "Cost claimed or agreed",
      "Status"
     ],
     "example": [
      [
       "V-031",
       "Re-route 60 m cable trench around future transformer bay, including slab break-out",
       "Owner's engineer, verbal 04 Jun 2026, confirmed in writing 04 Jun",
       "05 Jun 2026",
       "6 days claimed (non-critical: 0 agreed)",
       "BDT 2.4m claimed / 2.1m agreed",
       "Agreed, in IPC 14"
      ],
      [
       "C-007",
       "Prolongation due to late water main diversion at east end",
       "Employer-risk event",
       "18 Feb 2026",
       "11 weeks claimed",
       "Under assessment",
       "Engineer's determination due 30 Jun"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "Think of the last claim you saw rejected or reduced. Was it lost on entitlement, on notice, on programme analysis or on records? What one habit on site would have changed the outcome?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Variation",
       "def": "A change to the works, such as an addition, omission, or change in quality, quantity, sequence or method, instructed under the contract by a person with authority, and valued under its rules."
      },
      {
       "term": "Extension of time (EOT)",
       "def": "An adjustment of the completion date granted when an event at the employer's risk delays completion, protecting the contractor from delay damages for that period."
      },
      {
       "term": "Concurrent delay",
       "def": "A situation in which an employer-risk delay and a contractor-risk delay affect the critical path at the same time, each sufficient on its own to delay completion."
      },
      {
       "term": "Prolongation cost",
       "def": "The time-related costs a contractor incurs because the project lasts longer, such as site management, facilities and plant on hire, recoverable for compensable delay."
      },
      {
       "term": "Disruption",
       "def": "Loss of productivity caused by interference with the contractor's planned working methods, even where completion is not delayed, usually measured by comparing affected and unaffected work."
      },
      {
       "term": "Time impact analysis",
       "def": "A prospective delay analysis method that inserts a fragnet representing a delay event into the programme updated to just before the event and measures its effect on completion."
      },
      {
       "term": "Arbitration",
       "def": "A private, binding method of resolving disputes in which an independent tribunal chosen under the contract hears the case and makes an award enforceable in most countries."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "A variation needs a written instruction from someone with authority, ideally before the work, and is valued by the contract's rules.",
      "An extension of time needs an employer-risk event that actually delays completion, proven by programme analysis and timely notice.",
      "Genuine concurrent delay commonly gives time but not money; check the contract and governing law.",
      "Contemporaneous records win or settle claims: diaries, allocation sheets, programme updates, photographs and notices.",
      "Resolve disputes at the lowest effective level, from site negotiation up to arbitration only as a last resort."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A late drawing delays a non-critical activity by eight days, but that activity has fifteen days of total float. What is the contractor most likely entitled to?",
       "options": [
        "An eight-day extension of time plus the associated prolongation cost",
        "No extension of time, though direct costs may be recoverable",
        "A fifteen-day extension of time to restore the float",
        "Delay damages from the employer for the lost float"
       ],
       "answer": 1,
       "explain": "An EOT requires delay to completion. With fifteen days of float, completion is not delayed, though any direct costs of the disruption may still be claimable."
      },
      {
       "q": "A varied item is similar to an existing bill item but must be installed at height from a mobile platform. How is it usually valued?",
       "options": [
        "At a new rate based solely on the contractor's quotation",
        "By daywork, because the conditions are different",
        "At the existing rate with no adjustment at all, as the work is broadly similar",
        "Using the existing rate as a basis, adjusted for the different conditions"
       ],
       "answer": 3,
       "explain": "Where work is similar but conditions differ, contract rates are used as the basis and adjusted. Daywork and new rates are for cases with no relevant rate or small unmeasurable work."
      },
      {
       "q": "Which delay analysis method inserts fragnets into the programme updated to just before each delay event?",
       "options": [
        "Time impact analysis",
        "As-planned versus as-built",
        "Impacted as-planned analysis",
        "Collapsed as-built analysis"
       ],
       "answer": 0,
       "explain": "Time impact analysis models each event on the contemporaneous programme. Impacted as-planned uses the original programme; collapsed as-built removes events from the as-built record."
      },
      {
       "q": "Crews installed 2,000 m of duct in 1,900 hours while disrupted. In an unimpacted period they achieved 0.7 hours per metre. How many hours were lost?",
       "options": [
        "1,900 hours, the total hours worked",
        "1,330 hours, the unimpacted rate times the hours",
        "500 hours, the actual minus the expected hours",
        "1,400 hours, the expected hours for the quantity"
       ],
       "answer": 2,
       "explain": "Expected hours = 2,000 x 0.7 = 1,400; lost hours = 1,900 - 1,400 = 500. The other figures are the actual or expected hours themselves or a misapplied calculation."
      },
      {
       "q": "Under a common approach to genuine concurrent delay, what does the contractor typically receive for the concurrent period?",
       "options": [
        "Neither time nor money, because it also caused the delay",
        "Money but not time, so delay damages still apply",
        "Time and money, as the employer's delay came first",
        "Time but not money, so no delay damages for that period"
       ],
       "answer": 3,
       "explain": "A widely used approach grants time, so the contractor is not penalised, but no prolongation cost, because it would have incurred the cost anyway. Contracts and laws vary, so always check the terms."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m7",
 "order": 7,
 "code": "Integrate",
 "title": "Stakeholders, Site Leadership & Digital Engineering",
 "subtitle": "Bring people, information and data together so the site builds the right thing, safely, from the latest information",
 "outcomes": [
  "Map and engage authorities, utilities, regulators, lenders and communities so that permits and consents never surprise the schedule",
  "Lead multi-company site teams with presence, psychological safety, fair conflict handling and sound decisions under pressure",
  "Run a site communication system of meetings, diaries, RFIs, submittals and document control that produces action and evidence",
  "Plan BIM uses, a common data environment and digital twin uses aligned with ISO 19650 information management principles",
  "Govern AI and data-driven project controls with data quality checks, verification and clear human accountability"
 ],
 "lessons": [
  {
   "id": "m7-l1",
   "title": "Stakeholder & Community Engagement",
   "subtitle": "Authorities, utilities, regulators, lenders and neighbours – mapping who matters and earning permission to build",
   "minutes": 35,
   "objectives": [
    "Identify the stakeholders of an engineering project and analyse them with power-interest and salience tools",
    "Build a stakeholder register and engagement plan that connect to the schedule and the risk register",
    "Plan permits, consents and utility interfaces as critical-path work rather than paperwork",
    "Engage affected communities in ways that earn and keep a social licence to operate"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Engineering projects are built in public. A **stakeholder** is any person, group or organisation that can affect the project or is affected by it, and on a capital project the list is long. A factory extension inside a fenced plot in Gazipur may involve the owner's board, the buyer's compliance auditors, the fire service, the power distribution company and a handful of neighbours. An elevated metro viaduct along a city arterial road involves the traffic police, the city corporation, half a dozen utility owners, lenders, thousands of shopkeepers and commuters, and the media. Project managers who treat stakeholders as a communications task tend to discover, too late, that one missing authority approval or one angry neighbourhood can stop a concrete pour more effectively than any technical problem."
    },
    {
     "type": "table",
     "title": "Typical stakeholders on an engineering project",
     "head": [
      "Stakeholder group",
      "Typical examples",
      "What they control or care about",
      "Engagement approach"
     ],
     "rows": [
      [
       "Permitting authorities",
       "Planning or development authority, environment department, fire service, building regulator",
       "Permits, approvals, inspections and the right to occupy or operate",
       "Pre-application meetings, complete submissions, a consents register with a named owner for every approval"
      ],
      [
       "Utilities and infrastructure owners",
       "Power distribution company, gas utility, water and sewerage authority, telecoms operators, railway, roads authority",
       "Their buried and overhead assets, outage windows, crossing and diversion approvals",
       "Joint surveys, agreed diversion designs, outages booked well ahead, a single coordination forum"
      ],
      [
       "Regulators and safety bodies",
       "Electricity regulator, nuclear or aviation safety authority, port authority, labour inspectorate, boiler inspectorate",
       "Licences to construct and operate, compliance inspections, powers to stop work",
       "Formal correspondence, inspection readiness, early warning of anything that may need their consent"
      ],
      [
       "Lenders and investors",
       "Development banks, export credit agencies, commercial lenders, the owner's board",
       "Drawdowns, covenants, environmental and social standards, climate and sustainability disclosures, reporting",
       "Monitoring reports, site visits by the lender's technical adviser, transparent variance reporting"
      ],
      [
       "Affected communities",
       "Neighbours, shopkeepers, farmers, fishers, schools, hospitals, places of worship",
       "Access, noise, dust, safety, livelihoods, local jobs and respect",
       "A community liaison officer, notice before disruptive work, local hiring, visible follow-up on complaints"
      ],
      [
       "Internal and delivery partners",
       "Owner's operations team, designers, main contractor, subcontractors, suppliers, the workforce",
       "Requirements, interfaces, workload, payment and recognition",
       "Integrated planning, interface meetings, clear decision rights and honest reporting"
      ]
     ]
    },
    {
     "type": "text",
     "text": "Analysis turns a long list into priorities. The **power-interest grid** places each stakeholder by how much power they have over the project and how much interest they take in it: manage high-power, high-interest stakeholders closely; keep high-power, low-interest stakeholders satisfied; keep low-power, high-interest stakeholders informed; and monitor the rest. The **salience model** adds legitimacy and urgency: an affected village has a legitimate claim even if its formal power is low, and a utility owner that controls next week's shutdown has urgency. For each important stakeholder also record their current attitude and the engagement level you need – unaware, resistant, neutral, supportive or leading – and, critically, which activity on your schedule depends on them."
    },
    {
     "type": "matrix",
     "title": "Power-interest grid for an elevated metro corridor (illustrative)",
     "x": "Interest in the project",
     "y": "Power over the project",
     "quadrants": [
      {
       "title": "Keep satisfied",
       "items": [
        "Aviation authority (crane heights)",
        "Lenders' boards",
        "Roads authority before works reach its roads"
       ]
      },
      {
       "title": "Manage closely",
       "items": [
        "Utility owners with diversions on the critical path",
        "Traffic police",
        "Environment department",
        "Lenders' technical adviser"
       ]
      },
      {
       "title": "Monitor",
       "items": [
        "Commodity suppliers",
        "Public outside the corridor"
       ]
      },
      {
       "title": "Keep informed",
       "items": [
        "Market traders near stations",
        "Schools and residents along the route",
        "Local media"
       ]
      }
     ],
     "caption": "Positions are a snapshot: stakeholders move between quadrants as the work front moves. Use salience as a check – a low-power group with a legitimate, urgent claim, such as traders losing access, needs active engagement, not just updates."
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Stakeholders move around the grid",
     "text": "A residents' association that had little power during design can gain a great deal once night piling starts and it complains to the environment department, the media or the courts. A lender that is quiet in year one becomes very interested when a covenant is at risk. **Re-map stakeholders at every stage gate and whenever the work front moves into a new neighbourhood**, rather than filing the analysis after kickoff."
    },
    {
     "type": "steps",
     "title": "Six steps to engaging stakeholders on an engineering project",
     "items": [
      {
       "title": "Identify",
       "text": "Run workshops with design, construction, operations and land staff; walk the route or site; review land, utility and permit records; and ask every stakeholder you meet who else you should be talking to."
      },
      {
       "title": "Analyse",
       "text": "Place each stakeholder on the power-interest grid, note salience, current and desired engagement, key concerns, and what they control on the critical path – a permit, an outage, an access road, a drawdown."
      },
      {
       "title": "Plan",
       "text": "Write a **stakeholder engagement plan**: who engages whom, through which channel, how often and with what message. Put permits, outages and consultations into the schedule as real activities with durations and predecessors."
      },
      {
       "title": "Engage",
       "text": "Deliver the plan through meetings, site visits, written notices, a public information point, a hotline and local media. Listen as much as you inform, and record every commitment made on the project's behalf."
      },
      {
       "title": "Track commitments",
       "text": "Enter each promise – for example no heavy deliveries during school hours – into a commitments register and flow it into site rules and contractor obligations so it is actually kept."
      },
      {
       "title": "Review and escalate",
       "text": "Monitor sentiment, complaints and permit status monthly and at stage gates; escalate early when a stakeholder threatens a milestone, bringing options rather than just bad news."
      }
     ]
    },
    {
     "type": "template",
     "title": "Stakeholder register",
     "purpose": "Record each significant stakeholder, what they need, how much they matter and how the project will engage them, with a direct link to schedule activities that depend on them.",
     "columns": [
      "Stakeholder",
      "Interest or concern",
      "Power / interest",
      "Current → desired engagement",
      "Owner and channel",
      "Critical-path link",
      "Next action and date"
     ],
     "example": [
      [
       "City traffic police (zone office)",
       "Lane closures and diversions for pier-cap formwork and girder launching",
       "High / Medium",
       "Neutral → Supportive",
       "Construction manager; monthly meeting plus written requests",
       "Night closure permits for girder launches on spans 14–20",
       "Submit traffic management plan for spans 14–20 by 5 May"
      ],
      [
       "Market traders' association near Station 3",
       "Loss of footfall and customer access during foundation works",
       "Medium / High",
       "Resistant → Neutral",
       "Community liaison officer; weekly walk-through",
       "Hoarding layout and temporary access routes for station foundations",
       "Agree temporary shopfront access plan at next weekly meeting"
      ]
     ],
     "rows": 6
    },
    {
     "type": "text",
     "text": "Permits and consents are schedule work, not paperwork. A typical engineering project may need environmental clearance, planning or building permission, road-cutting and traffic permits, tree-felling consent, river or navigation clearance for marine works, aviation height clearance for tall cranes near an airport, fire safety approval, a grid connection agreement, boiler registration with the boiler inspectorate and, at the end, an occupancy or operating licence. Each approval has a lead time, prerequisite documents, a validity period and conditions. Keep them in a **consents register** with a named owner, show each one in the schedule with realistic durations and logic – environmental clearance before site clearance, for example – and flow every condition attached to an approval into the scope of whoever must comply with it."
    },
    {
     "type": "text",
     "text": "Utilities deserve special attention on urban and brownfield projects because they combine high power, poor information and long lead times. Records of buried services are often incomplete or outdated, so serious projects verify them with trial pits and ground-penetrating radar before finalising foundation positions. Each utility owner usually insists on approving the diversion design, may use its own crews, and grants shutdown windows only on its own calendar. A buried 33 kV cable or a large water main that appears on no drawing can stall a pile cap for months; a project that surveys early, agrees diversion designs jointly and books outages well ahead turns that risk into a managed sequence."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "A promise to the community is a contract in practice",
     "text": "Commitments made by a liaison officer at a public meeting – no piling after 10 pm, repair the access road after the monsoon, priority jobs for local workers – are binding in the community's eyes even if they appear in no contract. If the contractor's night-shift plan contradicts them, trust collapses quickly and complaints turn into stop-work orders. **Every commitment goes into the register, into site rules and into the subcontract**, with someone checking it is kept."
    },
    {
     "type": "text",
     "text": "Lender-financed projects add formal requirements. The **IFC Performance Standards** (2012), the **Equator Principles** (EP4, 2020) applied by many commercial banks to project finance, and the **World Bank Environmental and Social Framework** (2018), which has a dedicated standard on stakeholder engagement and information disclosure, all expect meaningful consultation, disclosure in a form affected people can understand, and a **grievance mechanism** – an accessible route for complaints, free of charge and without retaliation, with recorded responses and timescales. Treat the grievance log as a leading indicator: a rising number of unresolved complaints in one neighbourhood often predicts the next stop-work order."
    },
    {
     "type": "sequence",
     "title": "Closing a community grievance",
     "actors": [
      "Resident",
      "Liaison officer",
      "Contractor",
      "Owner's PM"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Complaint: dust on the school route"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Acknowledge: log number and timescale",
       "reply": true
      },
      {
       "from": 1,
       "to": 2,
       "label": "Investigate and propose a fix"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Water bowser; no haulage at school times",
       "reply": true
      },
      {
       "from": 1,
       "to": 3,
       "label": "Fix needs a new commitment"
      },
      {
       "from": 3,
       "to": 2,
       "label": "Instruct revised site rule",
       "note": "Commitments register updated"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Explain the action taken",
       "reply": true
      },
      {
       "from": 0,
       "to": 1,
       "label": "Accepts, or asks for review"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Close entry; trend in monthly report"
      }
     ],
     "caption": "A grievance is closed only when the complainant has heard what was done and has a route to ask for review. The commitment it creates goes into the register and the site rules, not just the reply."
    },
    {
     "type": "case",
     "title": "Utility diversions on an elevated metro corridor (illustrative)",
     "context": "A hypothetical elevated metro extension runs along a congested arterial road in a large South Asian city, with a long viaduct and several stations. The design assumed that utility records were reliable. Three months before piling, trial pits show that a large share of the planned pier positions conflict with services that are not on any record: a water main, medium-voltage power cables, telecom ducts and a storm drain. Each utility owner has its own approval process, crews and outage calendar. Traders object to the hoardings that diversions need, and the traffic police restrict daytime lane closures. The sponsor still expects piling to start on the baseline date. All figures and details are illustrative.",
     "questions": [
      "Which stakeholders are now on the critical path, and how would you map and prioritise them?",
      "What should the project manager change in the schedule and the engagement plan?",
      "How would you stop the same problem recurring on the next contract package?"
     ],
     "answer": "The utility owners have moved into the high-power, high-urgency corner because their approvals and outages now gate the piling sequence; the traffic police and the traders' association follow closely because they control working space and the social licence. The project manager should re-baseline the foundation sequence around confirmed clear pier positions, add diversion design, approval and outage activities with realistic durations, and consider relocating some piers or changing pile-cap geometry with the designer. A joint utility coordination forum with named decision makers, plus a traffic and access plan agreed with traders, should replace one-off letters. The sponsor needs an honest forecast with options rather than a promise to hold the date. For the next package, utility verification by trial pits and radar should be a design deliverable before foundation design freeze, and utility owners should be engaged during design rather than at mobilisation."
    },
    {
     "type": "scenario",
     "title": "Night pour, worried neighbours",
     "situation": "A continuous raft pour for a new hospital block in a residential area of Chattogram has to run through the night because the raft cannot have a cold joint. The building permit allows work only until 10 pm unless the environment department grants an extension, and the residents' committee complained about generator noise last month. The batching plant, pumps and labour are booked for a pour in three days, and the extension application is still unanswered. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Proceed with the overnight pour as booked; once concrete is flowing nobody can stop it and the residents will understand afterwards.",
       "feedback": "Weak. Working outside the permit invites a stop order mid-pour – the worst possible outcome structurally – and destroys trust with neighbours whose complaint is already on record.",
       "best": false
      },
      {
       "text": "Meet the residents' committee and the authority now: explain why the pour must be continuous, offer specific mitigation and a hotline, seek written approval, and ask the designer for a fallback split-pour detail in case approval does not arrive.",
       "feedback": "Best. This engages the two stakeholders who control the outcome, makes the trade-off visible, offers real mitigation such as acoustic screens, low-noise pumps and directed lighting, and protects the structure with a contingency plan if consent is refused.",
       "best": true
      },
      {
       "text": "Postpone the pour indefinitely until every resident has agreed in writing to night working on the site.",
       "feedback": "Weak. Unanimous written consent is rarely achievable and is not what the permit requires; open-ended delay harms the project without improving engagement.",
       "best": false
      },
      {
       "text": "Leave it to the contractor, because noise control and working hours are within the contractor's scope under the contract.",
       "feedback": "Weak. The contractor manages noise on site, but the owner's project manager is accountable for permits and community relations; delegating the problem away invites a stop order nobody planned for.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Choose a project you know. Which single stakeholder outside your organisation could have stopped work for the longest time, and was their approval or goodwill shown anywhere in the schedule? What would you add to the register and the plan today?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Stakeholder register",
       "def": "A controlled list of the individuals, groups and organisations that can affect or are affected by a project, recording their interests, influence, attitude, engagement owner, channel and links to project activities."
      },
      {
       "term": "Power-interest grid",
       "def": "A two-by-two analysis tool that positions stakeholders by their power over the project and their interest in it, guiding whether to manage them closely, keep them satisfied, keep them informed or monitor them."
      },
      {
       "term": "Salience model",
       "def": "A stakeholder analysis approach that judges priority by three attributes – power, legitimacy and urgency – so that stakeholders with legitimate or time-critical claims are not overlooked just because their formal power is low."
      },
      {
       "term": "Stakeholder engagement plan",
       "def": "The document that sets out how, by whom, through which channels and how often each stakeholder group will be engaged, including consultation, disclosure and commitments, and how engagement will be monitored."
      },
      {
       "term": "Social licence to operate",
       "def": "The informal, ongoing acceptance of a project by its local community and wider society, earned through fair treatment and kept promises; it is not issued by any authority and can be withdrawn at any time."
      },
      {
       "term": "Utility diversion",
       "def": "The relocation, protection or temporary rerouting of existing services such as water mains, sewers, power cables, gas pipes or telecom ducts to clear space for new works, normally designed and approved with the utility owner."
      },
      {
       "term": "Consents register",
       "def": "A log of every permit, licence, clearance and approval a project needs, with the issuing body, prerequisites, lead time, validity, attached conditions, responsible owner and current status, linked to schedule activities."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Analyse stakeholders by power, interest, legitimacy and urgency, and re-map them at every stage gate and new work front",
      "Permits, consents and utility outages are scheduled activities with owners, durations and logic – not paperwork",
      "Verify buried services by trial pits and radar before foundation positions are frozen",
      "Log every commitment and grievance, flow commitments into site rules and subcontracts, and close the loop visibly",
      "Lender-financed projects must meet the lender's environmental and social standards, including a working grievance mechanism"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "An affected fishing community has little formal power over a coastal LNG terminal, but its livelihoods are directly harmed by dredging. Which analysis tool best explains why it must still be a priority?",
       "options": [
        "The power-interest grid, because the community's interest is high",
        "The salience model, as its claim is legitimate and urgent",
        "A responsibility assignment matrix for the dredging package",
        "A RACI chart that names the community as consulted"
       ],
       "answer": 1,
       "explain": "The salience model looks beyond power to legitimacy and urgency. The grid alone might place a low-power group in 'keep informed', which undervalues a community whose livelihood is directly affected."
      },
      {
       "q": "A planning authority approval has a lead time of four months and must be in place before site clearance. Where should the project manager show it?",
       "options": [
        "In the communications plan as a monthly reporting item for the sponsor",
        "Only in the risk register, as a threat to the start date",
        "In the contractor's method statement for site clearance",
        "In the schedule as an activity that is a predecessor to clearance"
       ],
       "answer": 3,
       "explain": "Permits that gate physical work belong in the schedule with realistic durations and logic, and in a consents register. Listing them only as risks or reports hides their effect on the critical path."
      },
      {
       "q": "Why should trial pits and ground-penetrating radar be carried out before foundation positions are frozen on an urban project?",
       "options": [
        "Records are often incomplete, and late finds force redesign and outages",
        "They are needed to calculate the working bearing capacity of the piles",
        "Utility owners no longer need to approve diversions once surveys exist",
        "They replace the need for a separate traffic management plan during piling"
       ],
       "answer": 0,
       "explain": "Verifying buried services early lets designers move foundations or plan diversions before the critical path depends on them. The surveys do not set pile capacity or remove utility approvals."
      },
      {
       "q": "A community liaison officer promised residents that heavy deliveries would avoid school hours. What is the most important next step?",
       "options": [
        "Publish the promise on the project website and site notice boards for transparency",
        "Ask residents to confirm the promise in writing within one week of the meeting",
        "Record it in the commitments register and flow it into site rules and contracts",
        "Mention it at the next monthly steering committee meeting for information"
       ],
       "answer": 2,
       "explain": "A commitment is only kept if it reaches the people who schedule deliveries. Publishing or reporting it is useful, but without site rules and contract obligations it will be broken."
      },
      {
       "q": "Which stakeholder group typically sends a technical adviser to review progress, costs and environmental and social performance before releasing funds?",
       "options": [
        "The building regulator's inspection team",
        "Lenders such as development banks",
        "The utility coordination forum",
        "The project's community liaison team"
       ],
       "answer": 1,
       "explain": "Lenders commonly appoint a technical adviser to monitor the project and confirm that drawdown conditions and environmental and social commitments are being met."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l2",
   "title": "Leading Site Teams",
   "subtitle": "Multi-company crews, foremen, conflict, welfare and decisions under pressure – the PM as leader on site",
   "minutes": 35,
   "objectives": [
    "Describe how authority and influence flow through a multi-company site organisation",
    "Apply situational leadership and psychological safety with supervisors and crews",
    "Resolve common site conflicts and make sound decisions under time pressure",
    "Treat labour welfare as a leadership and productivity responsibility"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A construction or plant site is a temporary organisation made of many companies: the owner and its engineer, a main contractor, a dozen or more subcontractors, labour suppliers, vendor specialists and inspectors. Most of these people do not report to the project manager. Authority comes from contracts, but performance comes from leadership – from whether supervisors understand the plan, whether crews trust that raising a concern is safe, and whether decisions are made quickly and explained. A project manager who stays in the site office reading reports sees the project weeks late; one who walks the work fronts, knows the foremen by name and listens before deciding sees it as it happens."
    },
    {
     "type": "tree",
     "title": "A typical multi-company site organisation",
     "root": {
      "label": "Project site",
      "text": "Many companies, one plan",
      "children": [
       {
        "label": "Owner's team",
        "text": "Contract authority",
        "children": [
         {
          "label": "Owner's project manager"
         },
         {
          "label": "Owner's engineer"
         },
         {
          "label": "HSE and quality leads"
         }
        ]
       },
       {
        "label": "Main contractor",
        "text": "Delivers the works",
        "children": [
         {
          "label": "Construction manager",
          "children": [
           {
            "label": "Area and section engineers"
           },
           {
            "label": "Discipline superintendents"
           }
          ]
         },
         {
          "label": "Planning and commercial"
         },
         {
          "label": "HSE and QA/QC managers"
         }
        ]
       },
       {
        "label": "Subcontractors",
        "text": "Trade packages",
        "children": [
         {
          "label": "Subcontract site managers",
          "children": [
           {
            "label": "Foremen and chargehands"
           },
           {
            "label": "Trades, operators, labour-supplier workers"
           }
          ]
         }
        ]
       },
       {
        "label": "Vendor specialists",
        "text": "Install and test their equipment"
       }
      ]
     },
     "caption": "Authority runs through contracts between companies, so most people on site do not report to the project manager. The foremen at the bottom of each branch are where the plan becomes work."
    },
    {
     "type": "text",
     "text": "The foreman is the most important leader on site. Foremen translate the plan into crew instructions, decide the sequence each morning, notice hazards first and set the norms their crews follow. Many were promoted for trade skill rather than leadership, so invest in them: short training in planning, briefing and recognising fatigue; the look-ahead early enough to prepare; a voice in method statements; and public backing when they stop unsafe work. Watch **span of control** too – as a rough rule, a foreman can directly supervise about a crew on one compact work face, but not forty people spread over three floors of a building or two kilometres of pipeline."
    },
    {
     "type": "text",
     "text": "**Situational leadership** matches the style to the person and the task. A supervisor who is new to a task needs clear direction; one who is learning needs coaching – direction plus explanation and encouragement; a capable but hesitant one needs support more than instruction; and a proven, confident foreman can be given the work front and trusted. The same foreman may need direction on an unfamiliar heavy lift and full delegation on routine formwork, so judge readiness task by task."
    },
    {
     "type": "matrix",
     "title": "Situational leadership styles",
     "x": "Supportive behaviour",
     "y": "Directive behaviour",
     "quadrants": [
      {
       "title": "Directing",
       "items": [
        "New to the task",
        "Clear instructions, close follow-up"
       ]
      },
      {
       "title": "Coaching",
       "items": [
        "Learning, not yet consistent",
        "Explain the why, invite ideas"
       ]
      },
      {
       "title": "Delegating",
       "items": [
        "Proven and confident",
        "Agree outcomes, then step back"
       ]
      },
      {
       "title": "Supporting",
       "items": [
        "Capable but hesitant",
        "Listen, encourage, share decisions"
       ]
      }
     ],
     "caption": "As competence and confidence grow on a given task, the style moves from directing through coaching and supporting to delegating. Step back to directing when the task is new or the risk is high."
    },
    {
     "type": "framework",
     "title": "ZEPMS site leadership habits",
     "items": [
      {
       "label": "S1",
       "title": "Be present",
       "text": "Walk the work fronts daily and at different times, including night shifts and weekends. See ground conditions, housekeeping and morale for yourself instead of relying on reports."
      },
      {
       "label": "S2",
       "title": "Make the plan visible",
       "text": "Keep the look-ahead, constraints and today's priorities on a board every supervisor can read. Foremen own their part of the plan and say when it is not achievable."
      },
      {
       "label": "S3",
       "title": "Make it safe to speak",
       "text": "Thank people for bad news, ask what could go wrong today, separate learning from blame and close the loop on every concern raised."
      },
      {
       "label": "S4",
       "title": "Decide and explain",
       "text": "Make timely decisions at the right level, explain the reasoning, record them and revisit them openly if the facts change."
      },
      {
       "label": "S5",
       "title": "Look after people",
       "text": "Treat welfare, fair pay, rest, heat stress and recognition as leadership duties that apply equally to every company's workers on site."
      }
     ]
    },
    {
     "type": "text",
     "text": "**Psychological safety** is the shared belief that people can speak up with a concern, a question or a mistake without being punished or humiliated. On site it decides whether you hear about the missing shear studs before the deck is poured, whether a rigger questions a lift plan, and whether a subcontractor admits early that its steel delivery will slip. Leaders build it by admitting their own uncertainty, asking direct questions, responding to bad news with appreciation, and showing that reports lead to action. It is not the same as being soft: high standards and psychological safety work together, because people can only meet standards they feel free to discuss."
    },
    {
     "type": "compare",
     "title": "Command-and-control vs engaged site leadership",
     "columns": [
      {
       "title": "Command-and-control",
       "items": [
        "Instructions flow down; information is expected to flow up unasked",
        "Problems are hidden until they become visible failures",
        "Foremen wait to be told the sequence each morning",
        "Safety stops are seen as lost production",
        "Blame follows incidents, so near misses go unreported"
       ]
      },
      {
       "title": "Engaged leadership",
       "items": [
        "Plans are built with foremen, who commit to what they can deliver",
        "Problems surface early because raising them is rewarded",
        "Foremen prepare from a visible look-ahead and raise constraints",
        "Safety stops are backed publicly by the project manager",
        "Incidents are analysed for causes, and reporting rises"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "A morning huddle that works",
     "text": "On a hypothetical semiconductor fab, each steel erection crew holds a ten-minute huddle at its work face before the shift. The foreman covers yesterday's progress against plan, today's lifts and exclusion zones, constraints such as missing bolts or a late delivery, the wind forecast, one safety point and an open question: does anyone see a problem with today's work? The project manager attends one huddle a day, listens more than speaks, and makes sure the constraints raised are cleared by the right person before the afternoon."
    },
    {
     "type": "text",
     "text": "Conflict on site is normal; unmanaged conflict is expensive. Typical sources include competition for crane time, access and laydown space; ambiguous design information; payment disputes; trade interfaces such as ductwork against cable trays in a ceiling void; language and cultural differences; and simple fatigue. Conflict-handling styles range from competing and accommodating to avoiding, compromising and collaborating. None is always right: collaborating solves recurring interface conflicts, directing is necessary when safety is at stake, and a short pause can be wise when emotions are high – as long as the issue returns to the table."
    },
    {
     "type": "table",
     "title": "Choosing a conflict approach on site",
     "head": [
      "Situation",
      "Useful approach",
      "Why it fits"
     ],
     "rows": [
      [
       "Two subcontractors keep fighting over the tower crane every morning",
       "Collaborate on a weekly crane allocation meeting with shared rules",
       "The conflict recurs, so a fair system works better than daily arbitration"
      ],
      [
       "A crew wants to work under a suspended load to save time",
       "Direct and stop the work immediately",
       "Life-safety rules are not negotiable and there is no time for discussion"
      ],
      [
       "Mechanical and electrical foremen argue over a ceiling-void route",
       "Collaborate with the coordination model on screen",
       "Both have valid constraints; a shared view finds a better route"
      ],
      [
       "A heated argument breaks out about a payment certificate in a site meeting",
       "Pause, take it offline and reconvene with records",
       "Emotion blocks problem-solving; the facts are in documents, not voices"
      ],
      [
       "Small disagreement on where to stack pallets for one day",
       "Accommodate or compromise quickly",
       "Low stakes do not justify a long negotiation"
      ]
     ]
    },
    {
     "type": "flow",
     "title": "Deciding under pressure",
     "items": [
      {
       "label": "Stabilise",
       "text": "Make the situation safe first; stop work or isolate if needed"
      },
      {
       "label": "Sense",
       "text": "Gather facts fast from the people closest to the problem"
      },
      {
       "label": "Options",
       "text": "Frame two or three realistic options, including doing nothing"
      },
      {
       "label": "Decide",
       "text": "Decide at the right level with imperfect information"
      },
      {
       "label": "Communicate",
       "text": "Tell those affected what to do and why"
      },
      {
       "label": "Review",
       "text": "Check the outcome, adjust and record the decision"
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Labour welfare is a leadership duty",
     "items": [
      "Safe drinking water, shade and scheduled rest breaks, with heat-stress plans for hot seasons",
      "Clean toilets and washing facilities, with separate, secure facilities for women workers",
      "Safe, uncrowded accommodation where the project provides it, with working fire precautions",
      "Wages paid in full and on time, including by labour suppliers and small subcontractors",
      "Reasonable working hours, rest days and active management of fatigue on long shifts",
      "Free personal protective equipment that fits, and a confidential route for workers to raise concerns"
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Safety is a fundamental right at work",
     "text": "In 2022 the ILO added a safe and healthy working environment to its fundamental principles and rights at work, alongside freedom of association and freedom from forced labour, child labour and discrimination. ILO Convention 167 (1988) sets the core standards for safety and health in construction, and ISO 45001:2018 – amended in 2024 so organisations consider climate change – frames the management system, with worker consultation and participation at its heart. On site this means leaders who plan for heat, consult crews before methods change and back every justified stop; buyers, lenders and regulators increasingly check that it is real."
    },
    {
     "type": "scenario",
     "title": "The foreman who stopped the lift",
     "situation": "On a combined-cycle power plant site, a rigging foreman employed by a subcontractor halts the lift of a heat recovery steam generator module because gusts are approaching the wind limit in the lift plan and one tag line is damaged. The main contractor's construction manager is furious: the heavy-lift crane costs a great deal per day and the turbine hall sequence is already tight. He tells you he intends to have the foreman removed from site. You are the owner's project manager. What should you do FIRST?",
     "options": [
      {
       "text": "Publicly support the stop, confirm the lift stays on hold until conditions are within the plan and the tag line is replaced, then discuss schedule recovery with the construction manager privately.",
       "feedback": "Best. Backing a correct stop protects lives and shows every crew that speaking up is safe. Schedule recovery is a real concern, but it is solved by planning around the weather window, not by punishing the person who followed the lift plan.",
       "best": true
      },
      {
       "text": "Leave the matter to the contractor, because lifting methods and its own supervision are the contractor's responsibility under the contract.",
       "feedback": "Weak. Means and methods may belong to the contractor, but removing a foreman for a correct safety stop damages the safety culture of the whole site, which the owner's project manager must protect.",
       "best": false
      },
      {
       "text": "Ask the lifting supervisor whether the wind limit in the lift plan could be raised slightly so the lift can proceed today.",
       "feedback": "Weak. Changing a lift plan's limits under schedule pressure is exactly how serious incidents happen; any revision needs proper engineering review, not a quick adjustment.",
       "best": false
      },
      {
       "text": "Allow the lift to proceed with extra tag lines because the gusts are intermittent and the crane is costly to keep idle.",
       "feedback": "Weak. Extra tag lines do not address gusts beyond the plan limit or the damaged equipment, and the decision overrides a competent person's stop.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think about the best site leader you have worked with. Which of the five ZEPMS site leadership habits did they practise most naturally, and which one do you find hardest? What will you do differently on your next site walk?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Psychological safety",
       "def": "A shared belief within a team that people can raise concerns, questions, ideas and mistakes without fear of punishment or humiliation, enabling problems to surface early."
      },
      {
       "term": "Situational leadership",
       "def": "An approach in which the leader adjusts the balance of direction and support to the competence and commitment of the person or crew for the task in hand, from close instruction to delegation."
      },
      {
       "term": "Span of control",
       "def": "The number of people or work fronts a supervisor can effectively direct, check and support; it shrinks when work is dispersed, complex or hazardous."
      },
      {
       "term": "Team development stages",
       "def": "The typical progression of a new team through forming, storming, norming and performing (and later adjourning), used to anticipate early friction on multi-company sites."
      },
      {
       "term": "Gemba walk",
       "def": "A leader's regular visit to the place where the work is actually done to observe, ask questions and remove obstacles, rather than relying only on reports."
      },
      {
       "term": "OODA loop",
       "def": "A decision cycle of observe, orient, decide and act that helps leaders respond quickly and repeatedly to fast-changing situations such as site emergencies or disruption."
      },
      {
       "term": "Labour welfare",
       "def": "The facilities, conditions and treatment provided for workers – water, sanitation, rest, accommodation, fair and timely pay, reasonable hours and respect – beyond the minimum needed to do the work."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Authority comes from contracts, but performance comes from leadership – be present at the work fronts and know the foremen",
      "Match the style to each supervisor's readiness for the task: direct and coach new foremen, delegate to proven ones",
      "Psychological safety and high standards work together: thank people for bad news and act on it visibly",
      "Choose the conflict approach by stakes and recurrence – direct on life safety, build a fair system for recurring clashes",
      "Welfare and safe working are rights and productivity drivers for every company's workers on site"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A newly promoted foreman is skilled at pipe fitting but unsure how to plan a crew's day. Under situational leadership, what should the superintendent provide at first?",
       "options": [
        "Full delegation, so the foreman learns quickly by making all decisions alone",
        "More direction and coaching, then less as competence grows",
        "A written warning to motivate faster improvement in planning",
        "Reassignment to the trade crew until leadership skills develop"
       ],
       "answer": 1,
       "explain": "Situational leadership matches style to readiness. A capable tradesperson new to supervision needs more direction and coaching at first, then increasing delegation."
      },
      {
       "q": "Which practice most directly builds psychological safety on a site?",
       "options": [
        "Publishing a league table of crews ranked by incident counts",
        "Requiring foremen to sign that every hazard has been eliminated",
        "Rewarding the crews that report zero near misses each month with a bonus",
        "Thanking people who report problems and acting visibly on reports"
       ],
       "answer": 3,
       "explain": "People speak up when doing so is rewarded and leads to action. League tables and rewards for zero reports encourage hiding problems."
      },
      {
       "q": "Two subcontractors argue every morning over tower crane time. What is usually the most effective approach?",
       "options": [
        "Agree a shared crane allocation process with clear rules",
        "Let the stronger subcontractor decide each day to save time",
        "Avoid the issue until it settles down on its own",
        "Split every day's crane hours exactly in half"
       ],
       "answer": 0,
       "explain": "A recurring conflict is best solved collaboratively with a fair, transparent system. Forcing, avoiding or a rigid split ignore actual workload and priorities."
      },
      {
       "q": "During a site emergency, what is the first step in the 'deciding under pressure' sequence?",
       "options": [
        "Gather all the facts before taking any action",
        "Communicate the problem to the sponsor and lenders",
        "Stabilise the situation and make people safe",
        "Frame several options for the steering committee"
       ],
       "answer": 2,
       "explain": "Safety comes first: stop work or isolate hazards, then gather facts, frame options and decide. Waiting for all facts can cost lives."
      },
      {
       "q": "Why is paying labour-supplier workers on time a concern for the project manager rather than only for the labour supplier?",
       "options": [
        "It is a contractual pass-through item that the PM must certify every month",
        "Late pay harms welfare, morale, productivity and reputation on site",
        "It sets the critical path of every work package directly",
        "It allows the PM to reduce retention on the main contract"
       ],
       "answer": 1,
       "explain": "Unpaid workers are less safe, less productive and more likely to leave or protest; lenders and buyers also expect fair labour treatment across the supply chain."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l3",
   "title": "Site Communication, Meetings & Reporting",
   "subtitle": "Diaries, meetings, RFIs, submittals, document control and dashboards that drive action",
   "minutes": 35,
   "objectives": [
    "Design a meeting and reporting rhythm that suits the project stage",
    "Run RFI, submittal and transmittal processes with clear turnaround times and records",
    "Apply document control so the site always builds from the current revision",
    "Build dashboards and escalation routes that trigger decisions rather than describe status"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Many site errors are really communication errors: a pile cap cast to a superseded drawing, cable trays installed before an RFI was answered, an oral instruction that nobody recorded and that later becomes a disputed variation. On an engineering project, communication is a controlled system with formal channels, agreed turnaround times and records that survive. Those records are also evidence: when a delay or claim is argued months later, the diary, the RFI log and the minutes will decide the outcome (developed in Procure)."
    },
    {
     "type": "table",
     "title": "A typical meeting rhythm during construction",
     "head": [
      "Meeting",
      "Frequency",
      "Chair",
      "Main attendees",
      "Purpose and outputs"
     ],
     "rows": [
      [
       "Start-of-shift huddle",
       "Daily, at the work face",
       "Foreman",
       "Crew, sometimes the area engineer",
       "Today's tasks, hazards, lifts and constraints"
      ],
      [
       "Daily coordination",
       "Daily",
       "Construction manager",
       "Area supervisors, crane coordinator, HSE, QA/QC",
       "Resolve today's and tomorrow's clashes for access, cranes, permits and inspections"
      ],
      [
       "Weekly progress and look-ahead",
       "Weekly",
       "Contractor's project manager",
       "Subcontractors, planner, QA/QC, owner's representative",
       "Progress against plan, look-ahead constraints, overdue RFIs and submittals"
      ],
      [
       "Design and interface coordination",
       "Weekly or fortnightly",
       "Design manager",
       "Designers, BIM coordinator, discipline leads",
       "Model coordination, clash resolution, RFI answers, design changes"
      ],
      [
       "Monthly progress review",
       "Monthly",
       "Owner's project manager or engineer",
       "Contractor management, cost and planning leads",
       "Performance, earned value, risks, changes and decisions needed"
      ],
      [
       "Steering committee",
       "Monthly or quarterly",
       "Sponsor",
       "Senior owner, contractor and lender representatives",
       "Strategic decisions, escalations and stage-gate approvals"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Meetings that produce action",
     "text": "Issue the agenda in advance and start with safety. Review previous actions before new business. Record each **decision** and **action** with an owner and a date, not just discussion. Issue minutes within a working day, and ask that disagreement with the minutes is raised in writing promptly – silent acceptance of inaccurate minutes is a common source of later disputes."
    },
    {
     "type": "text",
     "text": "The **site diary** is the project's memory. A useful daily entry records weather, labour by trade and company, plant on site and plant standing idle, materials delivered, work done by area, instructions received, visitors and inspections, incidents, and any delays with their causes. It should be written on the day, signed by a responsible person and supported by photographs with date and location. Diaries that read 'work progressing as normal' every day are worthless; diaries that note 'excavator idle 13:00–17:00 awaiting water main isolation by utility' are the raw material for progress measurement, delay analysis and fair settlement of claims. Many sites now keep the diary in a digital app with geotagged photographs, 360° captures and drone images attached; the discipline is the same, because an image without a date, a location and a note of what it shows proves very little."
    },
    {
     "type": "compare",
     "title": "RFI, submittal and transmittal – not the same thing",
     "columns": [
      {
       "title": "Request for information",
       "items": [
        "Raised by the contractor or site team",
        "Asks the designer to clarify, confirm or resolve a conflict",
        "Should quote drawing and clause references",
        "Often proposes a solution to speed the answer",
        "Answer may trigger a change if scope is affected"
       ]
      },
      {
       "title": "Submittal",
       "items": [
        "Raised by the contractor or supplier",
        "Submits shop drawings, method statements, samples or data sheets for review",
        "Required by the specification at defined points",
        "Reviewed and coded by the engineer or designer",
        "Released for procurement or construction only when accepted"
       ]
      },
      {
       "title": "Transmittal",
       "items": [
        "Used by any party",
        "A cover record of documents sent: what, which revision, to whom, why",
        "Proves when information was issued and received",
        "Carries submittals and RFI answers between parties",
        "Managed by document control in the CDE or document system"
       ]
      }
     ]
    },
    {
     "type": "flow",
     "title": "RFI life cycle",
     "items": [
      {
       "label": "Raise",
       "text": "Site drafts the question with references, a sketch, a proposed solution and a required-by date"
      },
      {
       "label": "Log",
       "text": "Document control numbers it and routes it to the responsible designer"
      },
      {
       "label": "Review",
       "text": "Designer or engineer answers within the agreed turnaround"
      },
      {
       "label": "Respond",
       "text": "Formal answer issued; if scope changes, the change process starts"
      },
      {
       "label": "Close",
       "text": "Answer distributed to site, drawings revised and old copies withdrawn"
      }
     ]
    },
    {
     "type": "template",
     "title": "RFI log",
     "purpose": "Track every request for information from raising to closure so that overdue answers are visible in weekly meetings and possible cost or time impacts are flagged early.",
     "columns": [
      "RFI no.",
      "Subject and location",
      "Drawing or spec reference",
      "Raised / required by",
      "Responsible party",
      "Status",
      "Possible cost or time impact"
     ],
     "example": [
      [
       "RFI-0142",
       "Clash between cable tray and HVAC duct, control building level 2, grid C/4",
       "E-LAY-204 rev D; M-DUC-112 rev C",
       "3 Mar / 10 Mar",
       "MEP design lead",
       "Open – overdue 2 days",
       "Tray installation on level 2 on hold; possible reroute"
      ],
      [
       "RFI-0143",
       "Anchor bolt projection for transformer plinth T2 not dimensioned",
       "C-FDN-031 rev B",
       "4 Mar / 7 Mar",
       "Civil designer",
       "Answered 6 Mar – closed",
       "None"
      ]
     ],
     "rows": 6
    },
    {
     "type": "steps",
     "title": "Running the submittal process",
     "items": [
      {
       "title": "Plan the register",
       "text": "Extract every required submittal from the specification into a register with planned submission and approval dates linked to procurement and construction activities."
      },
      {
       "title": "Prepare and self-check",
       "text": "The contractor checks shop drawings, method statements, samples and data sheets against the specification before submitting, so reviewers are not doing the contractor's quality control."
      },
      {
       "title": "Submit by transmittal",
       "text": "Issue through document control with a transmittal that states the revision, purpose and required review date."
      },
      {
       "title": "Review and code",
       "text": "The designer or engineer reviews within the agreed period and returns a status code – for example approved, approved with comments, revise and resubmit, or rejected. Code names vary by project, so define them in the procedures."
      },
      {
       "title": "Resubmit and close",
       "text": "The contractor addresses comments and resubmits. Fabrication, purchase or construction proceeds only once the status allows it."
      }
     ]
    },
    {
     "type": "sequence",
     "title": "A submittal from first issue to release",
     "actors": [
      "Contractor",
      "Document control",
      "Engineer",
      "Fabricator"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Shop drawings rev A + transmittal"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Log, route, set review due date"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Code: revise and resubmit",
       "reply": true,
       "note": "Comments within review period"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Return coded comments",
       "reply": true
      },
      {
       "from": 0,
       "to": 1,
       "label": "Resubmit rev B with responses"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Route rev B for review"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Code: approved",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Status recorded in register",
       "reply": true
      },
      {
       "from": 0,
       "to": 3,
       "label": "Release for fabrication",
       "note": "Only now is steel cut"
      }
     ],
     "caption": "Every hop passes through document control, leaving a dated record of what was sent and what was decided. The fabricator is released only after the status allows it – not when the first revision is sent."
    },
    {
     "type": "text",
     "text": "**Document control** ensures that everyone works from the right information. Every document has a unique number, a revision and a status such as for information, for review or for construction. Controlled documents are issued through the common data environment (see the next lesson) or a document management system, and superseded revisions are withdrawn or clearly stamped. On site, keep a drawing register that supervisors check weekly, make tablets display the current revision automatically, and allow only documents marked for construction at the work face. Most 'built to the wrong drawing' failures trace back to a printed copy that nobody withdrew. Under the ISO 19650 approach each information container also carries a status showing what it is suitable for and a revision code, so 'for construction' is a recorded state in the CDE rather than a stamp someone remembers to apply."
    },
    {
     "type": "keypoints",
     "title": "Dashboards that drive decisions",
     "items": [
      "Show a few indicators that someone will act on, each with an owner and a threshold",
      "Prefer trends over snapshots – four weeks of rising overdue RFIs says more than one number",
      "Include leading indicators: open constraints, overdue submittals, RFIs older than the turnaround, inspections waiting",
      "Report by exception – highlight what needs a decision, not everything that is fine",
      "Draw from the same data as the schedule and cost systems so there is one version of the truth",
      "Allow drill-down from summary to the actual record, so people can check the evidence",
      "Link progress claims to evidence – dated photos, scans or drone surveys – so reviewers can verify them quickly"
     ]
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Open RFIs vs RFIs past turnaround (illustrative)",
     "labels": [
      "Wk 1",
      "Wk 2",
      "Wk 3",
      "Wk 4",
      "Wk 5",
      "Wk 6",
      "Wk 7",
      "Wk 8"
     ],
     "series": [
      {
       "name": "Open RFIs",
       "values": [
        42,
        45,
        47,
        50,
        49,
        52,
        54,
        55
       ]
      },
      {
       "name": "Past agreed turnaround",
       "values": [
        4,
        6,
        9,
        12,
        15,
        19,
        22,
        26
       ]
      }
     ],
     "yLabel": "Number of RFIs",
     "caption": "Illustrative data. The open total looks steady, but the overdue count rises every week – the trend that predicts blocked work fronts and deserves a decision now."
    },
    {
     "type": "text",
     "text": "An **escalation matrix** tells everyone when and to whom an issue must be raised. It defines thresholds – for example a delay of more than a few days to a critical activity, a cost impact above a set value, a safety or environmental breach, or a stakeholder threatening a stop – and the level and time limit for each: foreman to area supervisor within hours, construction manager the same day, project manager within a day, sponsor or steering committee at the next meeting or sooner. Escalating early with options is professional; escalating late with excuses destroys trust. Where the contract requires formal notices, the escalation does not replace the notice."
    },
    {
     "type": "scenario",
     "title": "Two revisions on site",
     "situation": "During cable tray installation in the control building of an LNG terminal, the electrical supervisor discovers that one crew has been working from printed revision C of the tray layout. The common data environment shows revision E, issued ten days ago, which reroutes the trays to avoid new HVAC ducts. About sixty metres of tray have already been installed to revision C. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Let installation continue so the crew keeps its productivity, and raise a non-conformance report later once the area is complete.",
       "feedback": "Weak. Continuing builds more work that will have to be removed and repeats the error; it multiplies the cost of the mistake.",
       "best": false
      },
      {
       "text": "Formally discipline the supervisor whose crew used the old drawing, to send a clear message to all crews on site.",
       "feedback": "Weak as a first move. Blame does not stop the wrong work or fix the system that let a superseded print stay at the work face.",
       "best": false
      },
      {
       "text": "Stop tray installation in the affected area, withdraw superseded prints, confirm the current revision with the designer, and assess the installed work.",
       "feedback": "Best. Contain first, then make sure every crew is working from revision E, and evaluate what can be kept. Root cause and document control improvements follow.",
       "best": true
      },
      {
       "text": "Ask the designer to revert the layout to revision C, since sixty metres of tray have already been installed to it.",
       "feedback": "Weak. Revision E exists to avoid a clash with the HVAC ducts; reverting would trade a small rework now for a larger clash later.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Look at last week's minutes, diary entries or reports from a project you know. Would they help someone reconstruct what happened and why, a year from now? What two changes would make them more useful as evidence and as a basis for decisions?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Site diary",
       "def": "A daily, contemporaneous record of site conditions and events – weather, labour, plant, deliveries, work done, instructions, visitors, incidents and delays – signed by a responsible person and used for progress and claims."
      },
      {
       "term": "Request for information (RFI)",
       "def": "A formal written query from the construction team to the designer or engineer seeking clarification, confirmation or resolution of missing, conflicting or ambiguous design information."
      },
      {
       "term": "Submittal",
       "def": "A document, drawing, sample or data set that a contractor or supplier must submit for review under the specification – such as shop drawings, method statements or product data – before procurement or construction proceeds."
      },
      {
       "term": "Transmittal",
       "def": "A cover record that accompanies documents sent between parties, listing each document, its revision and purpose, and proving when it was issued and received."
      },
      {
       "term": "Document control",
       "def": "The function and procedures that number, register, issue, distribute, revise and archive project documents so that everyone uses the current approved revision and superseded copies are withdrawn."
      },
      {
       "term": "Escalation matrix",
       "def": "A table defining which types and sizes of issue must be raised to which management level, by whom and within what time, so decisions are made at the right level early enough."
      },
      {
       "term": "RAG status",
       "def": "A red-amber-green rating used in reports and dashboards to show whether an item is on track, at risk or off track against defined thresholds; meaningful only when the thresholds are written down."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Site communication is a controlled system: formal channels, agreed turnaround times and records that survive",
      "Write diaries and minutes as evidence – specific, dated and located – and challenge inaccurate minutes promptly in writing",
      "RFIs ask, submittals seek acceptance and transmittals prove issue; fabrication waits for the right submittal status",
      "Only current, published revisions reach the work face; withdraw superseded prints the day a new revision is issued",
      "Dashboards should trend leading indicators with owners and thresholds, and escalation should come early with options"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which diary entry is most useful for later delay analysis?",
       "options": [
        "Excavation work progressing normally on the eastern section today",
        "Weather fine; all crews productive; no significant issues noted",
        "Excavator idle 13:00–17:00 at pier 12 awaiting utility isolation",
        "General progress satisfactory across the whole site this week"
       ],
       "answer": 2,
       "explain": "Specific, time-stamped entries with location and cause support delay analysis and claims. Generic statements prove nothing."
      },
      {
       "q": "A contractor sends shop drawings for steel connections for the engineer's review. What is this document package called?",
       "options": [
        "A submittal",
        "A request for information",
        "A non-conformance report",
        "A site instruction"
       ],
       "answer": 0,
       "explain": "Shop drawings, method statements and product data submitted for review under the specification are submittals. An RFI asks a question; it does not submit work for acceptance."
      },
      {
       "q": "Why should superseded drawing prints be withdrawn or stamped as soon as a new revision is issued?",
       "options": [
        "To reduce paper and printing costs on the project",
        "To satisfy the lender's monthly reporting format",
        "To prevent crews from building to obsolete information",
        "To speed up the designer's review of all open RFIs on the project"
       ],
       "answer": 2,
       "explain": "Printed copies that remain at the work face are a frequent cause of rework. Withdrawal is a core document control practice."
      },
      {
       "q": "Which indicator on a weekly dashboard is a leading indicator of future delay?",
       "options": [
        "Number of RFIs older than their agreed turnaround time",
        "Total concrete volume poured on the project since mobilisation",
        "Cumulative cost spent to date on the project",
        "Number of workers who attended last month's induction"
       ],
       "answer": 0,
       "explain": "Overdue RFIs signal design information that will soon block work. The other measures describe what has already happened."
      },
      {
       "q": "What is the main purpose of an escalation matrix?",
       "options": [
        "To replace formal contractual notices with quicker informal emails",
        "To list the contact details of every stakeholder",
        "To rank subcontractors by their performance each month",
        "To define which issues go to which level, and how fast"
       ],
       "answer": 3,
       "explain": "An escalation matrix sets thresholds, levels and time limits so issues reach the right decision maker early. It does not replace formal notices."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l4",
   "title": "BIM & Digital Twins",
   "subtitle": "Coordination, clash detection, 4D and 5D, the common data environment, reality capture and twins in operation",
   "minutes": 40,
   "objectives": [
    "Explain the main BIM uses – 3D coordination, clash detection, 4D sequencing and 5D cost – and their value on site",
    "Describe information management with a common data environment and information requirements, in line with the ISO 19650 series",
    "Plan reality capture to compare as-built conditions with the design model",
    "Distinguish digital twin maturity levels and choose uses that serve operations"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Building information modelling (BIM)** is often mistaken for 3D modelling. In practice it is the process of creating and managing structured information about a built asset across its whole life: geometry, but also properties such as equipment ratings, materials, manufacturers, maintenance intervals and links to documents. A good model lets a team coordinate trades before anything is fabricated, generate quantities, rehearse the construction sequence and hand the owner an information asset for operations. A poor one is an expensive 3D picture that site teams ignore because it is out of date."
    },
    {
     "type": "table",
     "title": "BIM uses and what they deliver",
     "head": [
      "BIM use",
      "What it means",
      "Typical benefit on site",
      "Prerequisite"
     ],
     "rows": [
      [
       "3D design coordination",
       "Combining discipline models into one federated view for review",
       "Problems found on screen instead of during installation",
       "Agreed coordinates, modelling standards and regular model exchange"
      ],
      [
       "Clash detection",
       "Rule-based automated checks between models for hard and clearance clashes",
       "Fewer site reroutes of ducts, pipes and trays; less rework",
       "Models at the right level of information need, with tolerances defined"
      ],
      [
       "4D sequencing",
       "Linking model elements to schedule activities to visualise construction over time",
       "Tested crane positions, access, logistics and phasing before mobilising",
       "A logic-linked schedule with codes that map to model elements"
      ],
      [
       "5D cost",
       "Linking quantities from the model to cost data and the cost plan",
       "Faster, traceable quantity take-off and cost impact of design changes",
       "Consistent classification and a model built for measurement"
      ],
      [
       "Reality capture and verification",
       "Laser scanning, photogrammetry and 360° imagery compared with the model",
       "Early detection of deviations and accurate existing-condition surveys",
       "Survey control, scanning plan and processing capacity"
      ],
      [
       "Design for manufacture and assembly (DfMA)",
       "Model-driven fabrication of modules, precast elements, pipe spools and racks",
       "Fewer site hours, factory-controlled quality and safer work at height",
       "Earlier design freeze, fabrication-grade information and agreed tolerances"
      ],
      [
       "Asset information for operations",
       "Structured asset data handed to the owner's maintenance systems",
       "Faster mobilisation of maintenance and fewer missing records",
       "Asset information requirements defined at the start"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Three kinds of clash",
     "text": "A **hard clash** is a physical intersection: a chilled-water pipe through a steel beam. A **clearance or soft clash** violates required space: a valve with no room for a hand wheel, a switchboard without its front access zone, insulation thickness ignored. A **workflow or 4D clash** happens in time rather than space: two crews scheduled in the same plantroom on the same day, or a crane slewing over an area where roofing is planned. Good coordination looks for all three."
    },
    {
     "type": "steps",
     "title": "Running a model coordination cycle",
     "items": [
      {
       "title": "Federate",
       "text": "Collect the latest shared models from every discipline in the common data environment and combine them in a coordination tool on agreed coordinates."
      },
      {
       "title": "Test",
       "text": "Run clash and clearance rules zone by zone – for example structure against mechanical, mechanical against electrical – with tolerances agreed in the BIM execution plan."
      },
      {
       "title": "Group and prioritise",
       "text": "Group hundreds of raw clashes into real issues, discard duplicates and false positives, and prioritise by the construction sequence."
      },
      {
       "title": "Resolve",
       "text": "Review issues in the coordination meeting with discipline leads, assign each to an owner and due date, and record decisions."
      },
      {
       "title": "Re-test and sign off",
       "text": "Re-run the tests on updated models and sign off each zone as coordinated before it is released for fabrication or installation."
      }
     ]
    },
    {
     "type": "text",
     "text": "The **ISO 19650** series is the international framework for managing information over the whole life of a built asset when using BIM. Parts 1 and 2 (2018) set out the concepts and the delivery-phase process, part 3 (2020) covers the operational phase, part 4 (2022) information exchange, and part 5 (2020) a security-minded approach to sensitive asset information; together they have superseded the earlier UK PAS 1192 documents. In outline, the client – the appointing party – defines what information it needs and why; each lead appointed party responds with a BIM execution plan and information delivery plans; information is produced and exchanged in a **common data environment (CDE)** that moves it through defined states; and the level of information need limits detail to what is genuinely useful. The standards describe principles and processes rather than particular software. Check the current parts, amendments and any national annex before writing them into a contract, and state their requirements in your own project documents rather than assuming everyone has read them."
    },
    {
     "type": "layers",
     "title": "The information requirements cascade (top first)",
     "items": [
      {
       "label": "Organisational information requirements",
       "parts": [
        "What the owner organisation needs for strategic and business decisions",
        "Example: energy use and availability data across all plants"
       ]
      },
      {
       "label": "Asset and project information requirements",
       "parts": [
        "Asset information needed to operate and maintain",
        "Project information needed to make decisions during delivery"
       ]
      },
      {
       "label": "Exchange information requirements",
       "parts": [
        "What each appointed party must deliver",
        "When, in what format and at what level of information need"
       ]
      },
      {
       "label": "Execution and delivery plans",
       "parts": [
        "BIM execution plan",
        "Master and task information delivery plans"
       ]
      },
      {
       "label": "Information models",
       "parts": [
        "Project information model during delivery",
        "Asset information model handed over for operation"
       ]
      }
     ]
    },
    {
     "type": "topology",
     "title": "Information states in a common data environment",
     "nodes": [
      {
       "id": "civ",
       "kind": "team",
       "label": "Civil task team",
       "sub": "Develops models in WIP",
       "x": 0,
       "y": 1
      },
      {
       "id": "mep",
       "kind": "team",
       "label": "MEP task team",
       "sub": "Develops models in WIP",
       "x": 0,
       "y": 3
      },
      {
       "id": "sh",
       "kind": "doc",
       "label": "Shared models",
       "sub": "Checked; for coordination only",
       "x": 2,
       "y": 2
      },
      {
       "id": "fed",
       "kind": "process",
       "label": "Federation",
       "sub": "Clash and clearance tests",
       "x": 2,
       "y": 4
      },
      {
       "id": "pub",
       "kind": "doc",
       "label": "Published",
       "sub": "Authorised, e.g. for construction",
       "x": 4,
       "y": 2
      },
      {
       "id": "site",
       "kind": "user",
       "label": "Site teams",
       "sub": "With fabricators: build from Published",
       "x": 4,
       "y": 4
      },
      {
       "id": "arc",
       "kind": "storage",
       "label": "Archive",
       "sub": "Superseded; kept for audit",
       "x": 6,
       "y": 2
      }
     ],
     "links": [
      {
       "a": "civ",
       "b": "sh",
       "label": "check, share"
      },
      {
       "a": "mep",
       "b": "sh",
       "label": "check, share"
      },
      {
       "a": "sh",
       "b": "fed",
       "label": "federate"
      },
      {
       "a": "fed",
       "b": "mep",
       "label": "issues",
       "style": "dashed"
      },
      {
       "a": "sh",
       "b": "pub",
       "label": "authorise"
      },
      {
       "a": "pub",
       "b": "site",
       "label": "use"
      },
      {
       "a": "pub",
       "b": "arc",
       "label": "supersede"
      }
     ],
     "zones": [
      {
       "label": "Work in progress",
       "x": 0,
       "y": 1,
       "w": 1,
       "h": 3,
       "tone": "neutral"
      },
      {
       "label": "Shared",
       "x": 2,
       "y": 1,
       "w": 1,
       "h": 4,
       "tone": "accent"
      },
      {
       "label": "Published",
       "x": 4,
       "y": 1,
       "w": 1,
       "h": 4,
       "tone": "good"
      },
      {
       "label": "Archive",
       "x": 6,
       "y": 1,
       "w": 1,
       "h": 2,
       "tone": "neutral"
      }
     ],
     "caption": "Information moves right only through a check, review or authorisation. Coordination uses Shared information, but only Published information may be built from, and superseded information goes to the Archive rather than disappearing."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Model status must be contractual, not assumed",
     "text": "Site teams will build from whatever looks most current. State in the contract and the BIM execution plan whether the model or the drawings take precedence, what level of information need each element has reached, and what may be relied on for setting out or fabrication. A beautifully detailed model element that is only 'shared for coordination' is not an instruction to build."
    },
    {
     "type": "text",
     "text": "**Reality capture** records the physical world digitally. Terrestrial and mobile laser scanners produce dense point clouds; drones with photogrammetry produce surface models and orthophotos; 360° cameras record interiors week by week. Compared with the design model, these datasets reveal deviations early: embedded plates out of position before steel erection, slab levels outside tolerance before raised floors, or earthworks volumes for monthly measurement. In brownfield work – a new pipe rack threaded through an operating fertiliser plant, or new equipment in an existing textile mill – a scan of existing conditions is often the only reliable basis for design, because record drawings rarely match reality."
    },
    {
     "type": "table",
     "title": "Digital twin maturity – one practical ladder",
     "head": [
      "Level",
      "Description",
      "Typical data",
      "Example use in operation"
     ],
     "rows": [
      [
       "0 – Reality capture",
       "A static digital record of the asset as built",
       "Point clouds, photos, as-built model",
       "Planning a retrofit or a maintenance access route"
      ],
      [
       "1 – Descriptive",
       "A model linked to asset data and documents",
       "Asset register, O&M data, warranties",
       "Finding a valve, its data sheet and its maintenance history quickly"
      ],
      [
       "2 – Informative",
       "Live or frequent operational data shown in context",
       "Sensor feeds, building management or SCADA data",
       "Seeing abnormal temperatures in a substation or plantroom on the model"
      ],
      [
       "3 – Predictive",
       "Analytics forecast future condition or performance",
       "Historical trends, condition monitoring",
       "Predicting bearing failure in a pump or fouling in a heat exchanger"
      ],
      [
       "4 – Prescriptive",
       "Simulation tests options and recommends actions, with people deciding",
       "Physics or data-driven models, scenarios",
       "Testing a new operating mode for a turbine or a ventilation strategy"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Start from the decision, not the technology",
     "text": "There is no single universal scale for digital twins, and organisations use different ladders. What matters is the operating decision the twin will improve – fewer unplanned outages, lower energy use, faster maintenance – and whether the owner has the people and data processes to keep it alive. A twin that nobody updates after handover becomes another out-of-date model."
    },
    {
     "type": "text",
     "text": "A shared vocabulary helps: ISO/IEC 30173:2023 sets out digital twin concepts and terminology, operational information is managed under ISO 19650-3, and the twin works best inside an asset management system aligned with ISO 55000 and ISO 55001 (current editions 2024). The typical data flow of an informative-to-predictive twin for a plant is shown below – note that it starts with asset information defined in delivery, not with sensors bought at the end."
    },
    {
     "type": "topology",
     "title": "Data flows in an operational digital twin",
     "nodes": [
      {
       "id": "cde",
       "kind": "storage",
       "label": "Operations CDE",
       "sub": "ISO 19650-3 information",
       "x": 0,
       "y": 1
      },
      {
       "id": "aim",
       "kind": "doc",
       "label": "Asset info model",
       "sub": "Register, O&M data, as-builts",
       "x": 2,
       "y": 1
      },
      {
       "id": "twin",
       "kind": "model",
       "label": "Digital twin",
       "sub": "Analytics and simulation",
       "x": 4,
       "y": 2.5
      },
      {
       "id": "cmms",
       "kind": "server",
       "label": "CMMS",
       "sub": "Work orders, spares, history",
       "x": 6,
       "y": 1
      },
      {
       "id": "ops",
       "kind": "user",
       "label": "Operations team",
       "sub": "Decide and act",
       "x": 6,
       "y": 4
      },
      {
       "id": "sen",
       "kind": "sensor",
       "label": "Field sensors",
       "sub": "Vibration, temperature, flow",
       "x": 0,
       "y": 4
      },
      {
       "id": "scada",
       "kind": "controller",
       "label": "SCADA / BMS",
       "sub": "Control, alarms, trends",
       "x": 2,
       "y": 4
      },
      {
       "id": "his",
       "kind": "db",
       "label": "Data historian",
       "sub": "Time-series operating data",
       "x": 4,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "cde",
       "b": "aim",
       "label": "updates"
      },
      {
       "a": "aim",
       "b": "twin",
       "label": "asset context"
      },
      {
       "a": "sen",
       "b": "scada"
      },
      {
       "a": "scada",
       "b": "his"
      },
      {
       "a": "his",
       "b": "twin",
       "label": "live data"
      },
      {
       "a": "twin",
       "b": "cmms",
       "label": "predicted work"
      },
      {
       "a": "twin",
       "b": "ops",
       "label": "insights"
      },
      {
       "a": "ops",
       "b": "cmms",
       "label": "raise orders",
       "style": "dashed"
      }
     ],
     "zones": [
      {
       "label": "Asset information",
       "x": 0,
       "y": 1,
       "w": 3,
       "h": 1,
       "tone": "accent"
      },
      {
       "label": "Operational technology",
       "x": 0,
       "y": 4,
       "w": 5,
       "h": 1,
       "tone": "warn"
      }
     ],
     "caption": "The twin combines static asset information with live operating data from the operational technology network. Its value appears only when insights become work orders and operating decisions taken by people."
    },
    {
     "type": "case",
     "title": "BIM for a hospital block (illustrative)",
     "context": "A hypothetical owner is building a multi-storey hospital block in Chattogram with operating theatres, intensive care, medical gas systems, pressurised isolation rooms and dense mechanical and electrical services in shallow ceiling voids. The owner's facilities team wants usable asset data at handover because its maintenance records for the existing hospital are poor. The design consultant and the main contractor both use BIM authoring tools, but no information requirements have yet been written, and the contractor proposes to 'model as needed'. All details are illustrative.",
     "questions": [
      "What should the owner's exchange information requirements specify, and when?",
      "Where will clash detection and 4D sequencing add the most value on this project?",
      "How can the owner make sure the asset information is usable at handover rather than a last-minute data dump?"
     ],
     "answer": "The owner should define its asset information requirements first – which assets matter for maintenance, which attributes it needs, the classification system and the format its maintenance system can import – and translate these into exchange information requirements in the tender documents, with delivery milestones aligned to design stages and commissioning. Clash detection pays most in the ceiling voids, plantrooms and risers where ducts, medical gas pipes, cable trays and sprinkler mains compete for space, and 4D sequencing is valuable for phasing work next to any operational hospital areas and for crane and logistics planning. Asset data should be collected progressively, checked at each information exchange against the requirements, and test-loaded into the maintenance system before handover, with the facilities team involved in the checks. A CDE with clear states and a BIM execution plan agreed before construction would replace 'model as needed' with an accountable process."
    },
    {
     "type": "scenario",
     "title": "The model said no clashes",
     "situation": "On an underground metro station, the coordination report for a concourse ceiling zone showed no remaining clashes and the zone was released for installation. A week later, site crews find cable trays clashing with sprinkler mains in several places. Investigation shows that the sprinkler subcontractor's model in the CDE was three weeks old because its latest version was still in its work-in-progress area and had never been shared. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Instruct the sprinkler subcontractor to bear all rework costs and record the failure on its performance scorecard.",
       "feedback": "Weak as a first step. Commercial consequences may follow, but they do not stop more clashes being built or fix the process that allowed the release.",
       "best": false
      },
      {
       "text": "Let site foremen route the trays and sprinkler mains around each other in the field to keep installation moving.",
       "feedback": "Weak. Field routing without coordination creates new clashes with ducts and access zones and leaves the model wrong for handover.",
       "best": false
      },
      {
       "text": "Abandon model-based coordination for this zone and return to traditional two-dimensional overlay drawings.",
       "feedback": "Weak. The failure was in information sharing, not in clash detection; reverting to 2D loses the benefit everywhere else.",
       "best": false
      },
      {
       "text": "Pause installation in the zone, get all current models shared and re-run coordination, then tighten the CDE sharing rules in the BIM execution plan.",
       "feedback": "Best. Contain the problem, restore a trustworthy federated model, and fix the root cause – a release decision based on stale information – so other zones are not affected.",
       "best": true
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "On your current or last project, which single BIM use would have saved the most rework or delay, and what information requirement or CDE rule would have been needed to make it work?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Building information modelling (BIM)",
       "def": "The process of creating, coordinating and managing structured graphical and non-graphical information about a built asset through design, construction and operation, using shared digital models and data."
      },
      {
       "term": "Clash detection",
       "def": "The automated, rule-based checking of federated discipline models to find physical intersections, clearance violations and sequencing conflicts before fabrication or installation."
      },
      {
       "term": "4D BIM",
       "def": "The linking of model elements to schedule activities so that the planned construction sequence can be visualised, tested and communicated over time."
      },
      {
       "term": "5D BIM",
       "def": "The linking of model-derived quantities to cost data so that estimates, cost plans and the cost effect of design changes can be produced and traced from the model."
      },
      {
       "term": "Common data environment (CDE)",
       "def": "The agreed single source of information for a project or asset, with defined workflows, permissions and states such as work in progress, shared, published and archived."
      },
      {
       "term": "Exchange information requirements (EIR)",
       "def": "The client's specification of the information each appointed party must deliver, including content, format, level of information need and delivery dates."
      },
      {
       "term": "Digital twin",
       "def": "A digital representation of a physical asset that is connected to it by data flowing from the asset, used to monitor, understand, predict or optimise its performance in operation."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "BIM is structured information across the asset life, not a 3D picture; plan each use – coordination, 4D, 5D, DfMA – for a purpose",
      "ISO 19650 (parts 1–5) has superseded PAS 1192: the client states its information needs and the CDE controls information states",
      "Build only from Published information; Shared models are for coordination",
      "Reality capture finds deviations early and gives brownfield projects a reliable existing-condition baseline",
      "A digital twin starts from an operating decision and asset information requirements defined at the start of the project"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A ventilation duct is modelled with no space left for the access panel needed to service a fire damper. What type of clash is this?",
       "options": [
        "A hard clash between two physical elements",
        "A workflow clash caused by the construction schedule",
        "A clearance or soft clash",
        "A coordinate system mismatch between two models"
       ],
       "answer": 2,
       "explain": "The duct does not intersect another object, but it violates a required maintenance clearance – a soft or clearance clash."
      },
      {
       "q": "In a common data environment, what must happen before information is used for construction?",
       "options": [
        "It must be published after authorisation for that purpose",
        "It must be shared with all other teams for coordination",
        "It must remain in the author's work-in-progress area",
        "It must be archived together with all of its previous revisions first"
       ],
       "answer": 0,
       "explain": "Shared information is for coordination; published information has been authorised for uses such as construction."
      },
      {
       "q": "Which document tells each appointed party what information to deliver, in what format and when?",
       "options": [
        "The organisational information requirements document",
        "The exchange information requirements",
        "The asset information model for operations",
        "The task team's latest clash detection report"
       ],
       "answer": 1,
       "explain": "Exchange information requirements specify deliverables from appointed parties. Organisational requirements sit higher; the asset information model is a deliverable, not a specification."
      },
      {
       "q": "A twin shows live chiller temperatures from the building management system on the model, but makes no forecasts. Which maturity level does this best match?",
       "options": [
        "Reality capture",
        "Descriptive",
        "Prescriptive",
        "Informative"
       ],
       "answer": 3,
       "explain": "Live operational data shown in context is informative. Predictive and prescriptive levels add forecasting and simulation."
      },
      {
       "q": "What is the main purpose of 4D sequencing on a congested site?",
       "options": [
        "To produce bills of quantities automatically from the federated model",
        "To test the construction sequence, access and crane use over time",
        "To replace the critical path schedule with a model",
        "To certify that the federated model matches as-built conditions"
       ],
       "answer": 1,
       "explain": "4D links model elements to schedule activities so the team can rehearse the sequence and logistics. It relies on, rather than replaces, a logic-linked schedule."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l5",
   "title": "AI & Data-Driven Project Controls",
   "subtitle": "Scheduling assistants, prediction, computer vision and drones – with data quality, governance and human accountability",
   "minutes": 40,
   "objectives": [
    "Evaluate where AI scheduling assistants, generative schedule options and delay-risk prediction add value – and where they fail",
    "Apply data quality checks and verification before acting on any AI output",
    "Govern AI, computer vision and drone use with clear human accountability, privacy safeguards and records",
    "Interpret precision and recall when judging a detection or prediction tool"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Project controls generate more data than any team can read: schedules with thousands of activities, daily diaries, RFI logs, photographs, sensor feeds and weekly drone surveys. AI tools can process that volume quickly – suggesting schedule logic, generating sequence options, flagging activities likely to slip, spotting missing hard hats in camera images or measuring progress from scans. What they cannot do is carry accountability. The planner who issues a baseline, the project manager who signs a report and the engineer who certifies progress remain answerable for it, whatever tool helped. Treat every AI output as draft analysis from a fast but fallible assistant: useful, worth checking, never self-certifying."
    },
    {
     "type": "table",
     "title": "AI and data uses in project controls",
     "head": [
      "Use",
      "What it does",
      "Data it depends on",
      "Typical failure",
      "Human check"
     ],
     "rows": [
      [
       "AI scheduling assistant",
       "Answers questions about a schedule, runs health checks, drafts logic and narratives",
       "Current schedule file, calendars, progress data",
       "Invents logic or misreads float; confident but wrong narrative",
       "Planner verifies against CPM rules and site knowledge"
      ],
      [
       "Generative schedule options",
       "Produces many feasible sequences against stated constraints and objectives",
       "Quantities, productivity rates, resource and space limits",
       "Unrealistic rates or missing constraints such as curing or outage windows",
       "Planner and construction manager test the chosen option"
      ],
      [
       "AI-assisted estimating",
       "Drafts quantities from models or drawings and suggests rates from cost history",
       "Model quantities, cost database, price indices, supplier quotes",
       "Stale rates during price volatility; misread drawings; wrong estimate class",
       "Estimator samples quantities and checks rates against current market prices"
      ],
      [
       "Delay-risk prediction",
       "Scores activities or milestones for likelihood of delay",
       "Historical project data, current status, supplier updates",
       "Trained on unlike projects; stale inputs; hidden bias",
       "Compare with the risk register and expert judgement"
      ],
      [
       "Computer vision for progress",
       "Detects installed elements from photos or scans and compares with the model",
       "Images, point clouds, current model",
       "Occlusion, poor lighting; installed is not tested or complete",
       "Engineer verifies before progress is certified"
      ],
      [
       "Computer vision for safety",
       "Flags missing PPE, people in exclusion zones, unsafe proximity to plant",
       "Camera feeds with consent and privacy controls",
       "False alarms and missed events; privacy intrusion",
       "Supervisor reviews alerts; never the only safeguard"
      ],
      [
       "Drone surveys",
       "Measures stockpiles, earthworks, roof and façade condition, solar array installation",
       "Flight permissions, ground control points",
       "Poor control points; flights near restricted airspace",
       "Surveyor checks accuracy; flight approvals confirmed"
      ]
     ]
    },
    {
     "type": "text",
     "text": "An **AI scheduling assistant** lets a planner ask plain-language questions of a schedule – which activities drive the substation energisation milestone, where are the open ends, which constraints override logic – and drafts narratives or first-cut logic from a WBS and past projects. **Generative scheduling** goes further, generating and ranking many feasible sequences against constraints such as crane capacity, access, curing times and outage windows. Both are genuinely useful for speed and for exploring options a team would never have time to draw by hand. Both also fail in recognisable ways: logic links that do not exist in reality, calendars ignored, productivity borrowed from a different context, and fluent narratives that misstate float. Every output must be checked against the critical path principles developed in Schedule and against what the site can actually do."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Accountability does not transfer to the tool",
     "text": "If an AI-drafted schedule becomes the baseline, the planner who prepared it and the project manager who approved it own it. Contracts, regulators, lenders and courts look to named people and to records of what they checked. Write down who reviewed each AI-assisted deliverable, what they verified and what they changed. 'The software said so' is not a defence."
    },
    {
     "type": "steps",
     "title": "Verifying an AI-generated schedule or forecast before use",
     "items": [
      {
       "title": "Check the inputs",
       "text": "Confirm the schedule version, data date, calendars, progress updates and supplier information the tool actually used. A model fed last month's data produces last month's answer."
      },
      {
       "title": "Check the logic",
       "text": "Run standard health checks: open ends, dangling activities, out-of-sequence progress, hard constraints, long lags and negative lags. Compare suggested links with real construction dependencies."
      },
      {
       "title": "Check reasonableness",
       "text": "Test durations against site productivity, crane and crew limits, curing and testing times, permit and outage windows, and weather seasons."
      },
      {
       "title": "Trace the critical path",
       "text": "Confirm that the critical and near-critical paths run through the drivers the team expects, and investigate any surprise rather than accepting it."
      },
      {
       "title": "Test sensitivity",
       "text": "Vary key assumptions – a late transformer, slower piling, a missed outage – and see whether conclusions hold."
      },
      {
       "title": "Approve and record",
       "text": "A named person approves the output, notes what was changed, and stores the version and review record in the CDE."
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Data quality before you trust a dashboard or model",
     "items": [
      "Completeness – all areas, packages and subcontractors are represented, with no missing weeks",
      "Timeliness – the data date is current and the update cycle is known",
      "Consistency – WBS codes, activity IDs, units and calendars match across systems",
      "Accuracy – a sample of records has been spot-checked against site reality",
      "Uniqueness – duplicates removed, for example the same punch or RFI logged twice",
      "Lineage – it is clear where each figure came from and who maintains it",
      "Representativeness – training data comes from projects similar in type, region and contract model",
      "Definitions – terms such as 'complete', 'installed' and 'tested' are defined the same way everywhere"
     ]
    },
    {
     "type": "text",
     "text": "**Computer vision** applies trained models to images and video. For progress, fixed cameras, 360° walk-throughs and scans can be compared with the model to detect installed columns, ducts or panels. For safety, cameras can flag people without helmets or harnesses, entries into exclusion zones around excavators, or proximity to live equipment. Drones extend this outdoors: stockpile volumes, earthworks, solar park row installation, roof and façade inspections, and progress on linear works. Limits are real: dust, glare, night conditions, occlusion behind scaffolding and camera angle all reduce accuracy, and an element that looks installed may not yet be connected, tested or accepted. Drone flights need aviation authority permissions and must respect no-fly zones near airports and sensitive installations."
    },
    {
     "type": "formula",
     "title": "Judging a detection or prediction tool",
     "items": [
      {
       "name": "Precision",
       "expr": "Precision = TP / (TP + FP)",
       "meaning": "Of everything the tool flagged, the share that was real. Low precision means many false alarms that waste supervisors' time and erode trust."
      },
      {
       "name": "Recall",
       "expr": "Recall = TP / (TP + FN)",
       "meaning": "Of all real events, the share the tool caught. Low recall means many missed events, which matters most for safety uses."
      },
      {
       "name": "F1 score",
       "expr": "F1 = 2 × precision × recall / (precision + recall)",
       "meaning": "A single figure balancing precision and recall; useful for comparing tools, but always look at both components."
      },
      {
       "name": "False alarm share",
       "expr": "False alarm share = FP / (TP + FP) = 1 − precision",
       "meaning": "The proportion of alerts that turn out to be wrong; a direct measure of review workload."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Reading the numbers (illustrative)",
     "text": "In a trial week, a PPE-detection system raises 200 alerts. Review shows 150 were real (TP) and 50 were false (FP), and a manual audit finds 30 real violations the system missed (FN). Precision = 150 / 200 = **0.75**; recall = 150 / (150 + 30) = 150 / 180 ≈ **0.83**. A quarter of alerts waste a supervisor's time, and about one real violation in six goes undetected. The tool can support supervision, but it cannot replace it – and its performance must be re-checked when conditions change, such as monsoon light or a new work area."
    },
    {
     "type": "matrix",
     "title": "Where precision and recall come from",
     "x": "Real event occurred",
     "y": "Tool raised an alert",
     "quadrants": [
      {
       "title": "False positive (FP)",
       "items": [
        "50 in the trial week",
        "A wasted supervisor check"
       ]
      },
      {
       "title": "True positive (TP)",
       "items": [
        "150 in the trial week",
        "Real violation caught"
       ]
      },
      {
       "title": "True negative (TN)",
       "items": [
        "Normal work, no alert",
        "Not used in precision or recall"
       ]
      },
      {
       "title": "False negative (FN)",
       "items": [
        "30 found by manual audit",
        "Missed event – the safety risk"
       ]
      }
     ],
     "caption": "Precision uses the top row: 150 / (150 + 50) = 0.75. Recall uses the right-hand column: 150 / (150 + 30) ≈ 0.83. The counts are the illustrative trial week above."
    },
    {
     "type": "framework",
     "title": "ZEPMS rules for governing AI on projects",
     "items": [
      {
       "label": "G1",
       "title": "Purpose and owner",
       "text": "Every AI use has a stated purpose and a named accountable person who approves its outputs for use. Many organisations frame this in an AI management system such as ISO/IEC 42001:2023."
      },
      {
       "label": "G2",
       "title": "Data quality",
       "text": "Inputs are checked for completeness, timeliness, consistency and representativeness before results are relied on."
      },
      {
       "label": "G3",
       "title": "Human verification",
       "text": "Outputs that affect baselines, payments, safety or contractual positions are verified by a competent person before use."
      },
      {
       "label": "G4",
       "title": "Privacy and consent",
       "text": "People are informed, purposes are limited, retention is short and footage is not repurposed without policy and consultation. Check applicable data protection law and any AI-specific rules where the project operates."
      },
      {
       "label": "G5",
       "title": "Security and confidentiality",
       "text": "Contract documents, designs and personal data go only into tools approved by the organisation for that class of information."
      },
      {
       "label": "G6",
       "title": "Record and review",
       "text": "Uses, versions, reviewers and decisions are logged, and tools are re-tested periodically for drift and bias."
      }
     ]
    },
    {
     "type": "cycle",
     "title": "Governing an AI tool in use",
     "center": "Named person accountable",
     "items": [
      {
       "label": "Define purpose",
       "text": "Use case, owner and limits entered in the AI use register"
      },
      {
       "label": "Check data",
       "text": "Completeness, timeliness, consistency and representativeness"
      },
      {
       "label": "Run and draft",
       "text": "The tool produces draft analysis, never a final answer"
      },
      {
       "label": "Verify output",
       "text": "A competent person checks against rules and site reality"
      },
      {
       "label": "Approve and record",
       "text": "Named approver; version, changes and review stored in the CDE"
      },
      {
       "label": "Monitor drift",
       "text": "Re-test accuracy, precision and recall as work or conditions change"
      }
     ],
     "caption": "Governance is a loop, not a one-off approval: when the work, season or site changes, monitoring sends the tool back to the data checks before its outputs are trusted again."
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Privacy on site is part of the design",
     "text": "Cameras and drones capture workers' faces, vehicle plates and neighbouring homes. Tell workers and neighbours what is recorded and why, blur faces and plates where identification is unnecessary, limit retention, restrict access, and follow applicable data protection law. A camera installed for safety detection should not quietly become a disciplinary surveillance tool – trust lost this way also damages psychological safety on site."
    },
    {
     "type": "template",
     "title": "AI use register",
     "purpose": "Record each AI or advanced analytics use on the project so accountability, verification, privacy controls and review dates are explicit and auditable.",
     "columns": [
      "Use case",
      "Tool type (generic)",
      "Data inputs and owner",
      "Accountable person",
      "Verification method",
      "Privacy and security controls",
      "Review date"
     ],
     "example": [
      [
       "Weekly schedule health check and narrative draft",
       "AI scheduling assistant",
       "Updated schedule file – lead planner",
       "Lead planner; PM approves report",
       "Standard logic checks plus planner review of critical path",
       "Approved internal tool only; no contract documents uploaded externally",
       "Monthly"
      ],
      [
       "PPE and exclusion-zone alerts at turbine hall",
       "Computer vision on fixed cameras",
       "Camera feeds – HSE manager",
       "HSE manager",
       "Daily supervisor review of alerts; monthly precision and recall audit",
       "Worker notice, face blurring, 30-day retention, restricted access",
       "Quarterly"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "title": "The forecast says we will make it",
     "situation": "A delay-risk model in your project controls dashboard gives an 82% probability of meeting the energisation milestone for a 132/33 kV substation. Your planner's own review disagrees: the power transformer factory acceptance test has slipped and delivery of the gas-insulated switchgear is uncertain. You find that the model was trained mostly on past projects where equipment deliveries were rarely late, and this month's supplier updates were never fed into it. The sponsor wants to quote the 82% figure in tomorrow's board report. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Let the sponsor quote the 82% figure, since the dashboard's model is more objective than the planner's judgement.",
       "feedback": "Weak. The model's inputs are stale and its training data is unrepresentative; reporting the figure would mislead the board, and the PM would remain accountable for it.",
       "best": false
      },
      {
       "text": "Hold back the figure, update the model inputs, reconcile its result with the planner's analysis, and report a verified forecast with its assumptions and reviewer named.",
       "feedback": "Best. This fixes the data quality problem, keeps a competent person accountable for the number, and gives the board a forecast it can rely on, with caveats made explicit.",
       "best": true
      },
      {
       "text": "Report the average of the model's probability and the planner's estimate so that both views are fairly represented.",
       "feedback": "Weak. Averaging a flawed number with a sound one does not produce a better forecast; it hides the reason they differ.",
       "best": false
      },
      {
       "text": "Switch off the delay-risk model permanently and rely only on the planner's judgement from now on.",
       "feedback": "Weak as a first move. The tool may be useful once inputs and training data are fixed; the immediate need is an accurate report.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick one AI or data tool your organisation uses or is considering. Who is accountable for its outputs today, how are they verified, and what would you add to the AI use register to make that explicit?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "AI scheduling assistant",
       "def": "A software tool that uses AI to query, check, draft or explain project schedules in response to a planner's requests; its outputs are drafts that a competent planner must verify and approve."
      },
      {
       "term": "Generative scheduling",
       "def": "The automated creation and ranking of many feasible construction sequences from defined activities, constraints, resources and objectives, from which planners select and refine an option."
      },
      {
       "term": "Computer vision",
       "def": "AI techniques that interpret images, video or point clouds to detect and classify objects or events, such as installed elements, missing PPE or people inside exclusion zones."
      },
      {
       "term": "Photogrammetry",
       "def": "The measurement of positions, shapes and volumes from overlapping photographs, often taken by drones, to produce surface models, orthophotos and point clouds."
      },
      {
       "term": "Human-in-the-loop",
       "def": "A control design in which a competent person reviews, approves or overrides an automated output before it is acted on, keeping human accountability for the decision."
      },
      {
       "term": "Model drift",
       "def": "The decline in an AI model's accuracy over time as real conditions, data or work practices move away from those in its training data."
      },
      {
       "term": "Data governance",
       "def": "The policies, roles and controls that decide who owns project data, how its quality is maintained, who may use it, for what purposes and how long it is kept."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "AI outputs are fast draft analysis; named people stay accountable for baselines, estimates, reports and certified progress",
      "Before use, verify inputs, logic, reasonableness, the critical path and sensitivity – and record who checked what",
      "Judge detection tools on both precision and recall; low recall rules a tool out as a primary safeguard",
      "Check data quality and representativeness first – stale or unlike data produces confident wrong answers",
      "Govern every use: register it, protect privacy and confidential information, and re-test for drift"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A computer-vision system raised 80 alerts, of which 60 were real; a manual audit found 20 real events it missed. What are its precision and recall?",
       "options": [
        "Precision 0.60, recall 0.75",
        "Precision 0.75, recall 0.80",
        "Precision 0.80, recall 0.75",
        "Precision 0.75, recall 0.75"
       ],
       "answer": 3,
       "explain": "Precision = 60 / 80 = 0.75. Recall = 60 / (60 + 20) = 0.75. Both happen to be equal here."
      },
      {
       "q": "An AI scheduling assistant drafts a revised schedule that becomes the new baseline. Who is accountable for it?",
       "options": [
        "The vendor that supplied and licensed the AI scheduling software",
        "The planner and project manager who reviewed and approved it",
        "No one, because the logic was generated automatically",
        "The client, because it accepted the baseline submission"
       ],
       "answer": 1,
       "explain": "Accountability stays with the named people who prepared and approved the baseline. Tools do not carry professional or contractual responsibility."
      },
      {
       "q": "A delay-risk model performs well for a year, then its predictions worsen after the project shifts from civil works to mechanical installation. What is the most likely explanation?",
       "options": [
        "Model drift as conditions move away from the training data",
        "A precision problem caused by too few camera alerts being raised",
        "Over-reliance on the human-in-the-loop review step",
        "A data governance policy that limits retention periods"
       ],
       "answer": 0,
       "explain": "When the work and data change, a model trained on earlier conditions loses accuracy – model drift. It needs re-testing or retraining."
      },
      {
       "q": "Which practice best protects workers' privacy when safety cameras are installed on a site?",
       "options": [
        "Using the footage freely for any management purpose once it is recorded",
        "Keeping all footage indefinitely in case it is ever needed",
        "Informing workers, limiting purpose, blurring and short retention",
        "Placing cameras covertly so that worker behaviour is not affected"
       ],
       "answer": 2,
       "explain": "Transparency, purpose limitation, minimisation and short retention are core privacy safeguards. Covert or open-ended use damages trust and may break the law."
      },
      {
       "q": "A dashboard's progress figures come from three subcontractors who each define 'installed' differently. Which data quality dimension is mainly at risk?",
       "options": [
        "Timeliness of the weekly updates",
        "Uniqueness of the progress records",
        "Lineage of the source systems",
        "Consistency of definitions"
       ],
       "answer": 3,
       "explain": "Different definitions make figures non-comparable even if each is accurate and up to date; consistent definitions are needed before aggregation."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m8",
 "order": 8,
 "code": "Commission",
 "title": "Quality, Commissioning, Handover & Closeout",
 "subtitle": "Prove the asset works, hand it over ready to operate, close the project cleanly and feed the lessons back",
 "outcomes": [
  "Build a quality management approach – QA, QC, project quality plan and cost of quality – that prevents defects rather than finding them late",
  "Control inspection and acceptance with ITPs, hold and witness points, FAT and SAT, NCRs and punch lists",
  "Plan and lead systems-based commissioning from mechanical completion to performance tests with a safe start-up",
  "Hand over an operable, documented asset with operations readiness, spares, training and usable asset information",
  "Close contracts and projects cleanly and turn lessons into changed practice and verified benefits"
 ],
 "lessons": [
  {
   "id": "m8-l1",
   "title": "Quality Management on Engineering Projects",
   "subtitle": "QA and QC, the quality management system, the project quality plan, cost of quality, audits and continual improvement",
   "minutes": 35,
   "objectives": [
    "Distinguish quality assurance from quality control and place both inside a quality management system",
    "Structure a project quality plan for an engineering project",
    "Calculate and interpret the cost of quality",
    "Use audits, supplier quality surveillance and the PDCA cycle to drive continual improvement"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "On an engineering project, quality means two things at once: **conformance** to the specified requirements and **fitness for purpose** in operation. The pile must reach its design capacity, the weld must pass radiography, the switchgear must perform its protection functions, and the finished plant must be operable and maintainable by the people who will run it. Defects in engineering are unusually expensive because work is quickly buried, covered, insulated or energised: honeycombing in a column found after cladding, a misaligned anchor bolt found when the turbine arrives, or a leaking roof found after the dyeing machines are installed. The economic logic of quality management is therefore simple – prevent defects rather than detect them late. ISO 21502:2020 treats quality management as one of the integrated practices of project management, planned alongside scope, schedule, cost and risk rather than left to an inspection department."
    },
    {
     "type": "compare",
     "title": "Quality assurance vs quality control",
     "columns": [
      {
       "title": "Quality assurance (QA)",
       "items": [
        "Focuses on the process",
        "Preventive – planned before and during work",
        "Examples: approved procedures, welder and procedure qualification, method statements, training, audits",
        "Asks: will our way of working reliably produce conforming results?",
        "Led by management and the QA function"
       ]
      },
      {
       "title": "Quality control (QC)",
       "items": [
        "Focuses on the product",
        "Detective – carried out during and after work",
        "Examples: slump and cube tests, dimensional surveys, radiography and other NDT, insulation resistance and pressure tests",
        "Asks: does this particular item conform to the requirement?",
        "Performed by inspectors, engineers and test laboratories"
       ]
      }
     ]
    },
    {
     "type": "layers",
     "title": "The quality management hierarchy (top first)",
     "items": [
      {
       "label": "Quality policy and objectives",
       "parts": [
        "Organisation's commitment to quality",
        "Measurable objectives set by top management"
       ]
      },
      {
       "label": "Quality management system",
       "parts": [
        "Organisation-wide processes and responsibilities",
        "Often certified to ISO 9001 – a revision is in progress, so check the current edition"
       ]
      },
      {
       "label": "Project quality plan",
       "parts": [
        "How the QMS is applied to this project",
        "Project-specific responsibilities, standards and controls"
       ]
      },
      {
       "label": "Procedures, method statements and ITPs",
       "parts": [
        "How each activity is done and checked",
        "Acceptance criteria and inspection points"
       ]
      },
      {
       "label": "Quality records",
       "parts": [
        "Inspection reports and test certificates",
        "NCRs, audit reports and calibration records"
       ]
      }
     ]
    },
    {
     "type": "table",
     "title": "What a project quality plan should contain",
     "head": [
      "Section",
      "Content",
      "Example detail"
     ],
     "rows": [
      [
       "Scope and quality objectives",
       "What the plan covers and the measurable targets for the project",
       "First-pass acceptance target for weld radiography; zero repeat NCRs of the same cause"
      ],
      [
       "Organisation and responsibilities",
       "Who does what in quality, including independence of inspection",
       "QA/QC manager reports to the project director, not to the construction manager"
      ],
      [
       "Standards and specifications",
       "Codes, standards and specifications that apply, with order of precedence",
       "Concrete, structural steel, pressure piping and electrical installation codes named in the specification"
      ],
      [
       "Control of documents and records",
       "How quality documents are numbered, approved, issued and retained",
       "Inspection records stored in the CDE against the system and tag numbers"
      ],
      [
       "Inspection and testing",
       "ITPs, test laboratories, calibration of instruments and inspection resources",
       "Accredited laboratory for cube testing; calibrated torque wrenches for bolting"
      ],
      [
       "Supplier and subcontractor quality",
       "Prequalification, quality requirements in orders, surveillance and release",
       "Vendor inspection at the transformer factory before release for shipment"
      ],
      [
       "Non-conformance and corrective action",
       "How NCRs are raised, dispositioned, analysed and closed",
       "Root cause analysis required for any repeated or major NCR"
      ]
     ]
    },
    {
     "type": "text",
     "text": "The **cost of quality** groups quality-related spending into four categories. **Prevention** costs stop defects happening: quality planning, training, procedure and welder qualification, design reviews, mock-ups and supplier prequalification. **Appraisal** costs find defects: inspection, testing, laboratory fees, third-party inspection and audits. **Internal failure** costs arise from defects found before handover: rework, scrap, re-testing, delay and the extra supervision they need. **External failure** costs arise after handover: warranty repairs, call-backs, lost production for the owner, claims and damaged reputation. Prevention and appraisal together are the cost of conformance; internal and external failure together are the cost of poor quality. Spending a little more on prevention usually removes much more in failure costs."
    },
    {
     "type": "formula",
     "title": "Cost of quality",
     "items": [
      {
       "name": "Cost of quality",
       "expr": "COQ = prevention + appraisal + internal failure + external failure",
       "meaning": "The total cost of achieving quality and of failing to achieve it, for a project, package or period."
      },
      {
       "name": "Cost of conformance",
       "expr": "Cost of conformance = prevention + appraisal",
       "meaning": "What is spent to prevent and detect defects – the cost of good quality."
      },
      {
       "name": "Cost of poor quality",
       "expr": "COPQ = internal failure + external failure",
       "meaning": "What defects actually cost once they occur, before or after handover."
      },
      {
       "name": "COPQ share",
       "expr": "COPQ share = COPQ / COQ × 100%",
       "meaning": "The proportion of quality cost that is wasted on failure; a high share signals under-investment in prevention."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Cost of quality on a mill extension (illustrative)",
     "text": "A hypothetical spinning mill extension near Narayanganj records, in thousands: prevention 30, appraisal 70, internal failure 160 (slab rework, rejected pipe spools) and external failure 90 (roof leak repairs and lost production after handover). **COQ = 30 + 70 + 160 + 90 = 350**; COPQ = 160 + 90 = 250, so the COPQ share is 250 / 350 ≈ **71%**. If an extra 40 on prevention – pre-pour checklists, a roof mock-up, welder retesting – had halved both failure categories, the figures would have been 70 + 70 + 80 + 45 = **265**: a lower total cost with better quality. All figures are illustrative."
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Cost of quality on the mill extension (illustrative)",
     "labels": [
      "Prevention",
      "Appraisal",
      "Internal failure",
      "External failure"
     ],
     "series": [
      {
       "name": "As recorded (total 350)",
       "values": [
        30,
        70,
        160,
        90
       ]
      },
      {
       "name": "With extra prevention (total 265)",
       "values": [
        70,
        70,
        80,
        45
       ]
      }
     ],
     "yLabel": "Thousands",
     "caption": "Illustrative figures from the example above. Adding 40 to prevention halves both failure bars, so the total cost of quality falls from 350 to 265 while quality improves."
    },
    {
     "type": "text",
     "text": "**Quality audits** check whether the system is being followed and is effective. A system audit examines the quality management system as a whole; a process audit looks at one activity, such as concrete production or welding; a product audit re-examines a sample of finished work. Findings are graded – typically major non-conformity, minor non-conformity and observation – and each needs a corrective action with an owner and a date. **Supplier quality** extends the same discipline into the supply chain: prequalify vendors, write quality requirements into purchase orders, hold a pre-inspection meeting to agree the vendor's ITP, carry out surveillance at the works, and issue a formal release before shipment. A switchgear panel rejected at the factory costs days; the same panel rejected on site costs weeks. Offsite manufacture and DfMA – precast elements, volumetric modules, pipe spools, prefabricated plant rooms – move more of the quality story into the factory, so agree the factory ITP, inspect the first article and check dimensions and interfaces before dispatch, when correction is still cheap."
    },
    {
     "type": "cycle",
     "title": "The PDCA cycle for continual improvement",
     "center": "Continual improvement",
     "items": [
      {
       "label": "Plan",
       "text": "Analyse the problem and its causes; plan a change with a measure of success"
      },
      {
       "label": "Do",
       "text": "Try the change on a limited scale, such as one floor or one crew"
      },
      {
       "label": "Check",
       "text": "Measure the results against the target and look for side effects"
      },
      {
       "label": "Act",
       "text": "Standardise what worked in procedures and ITPs, or start the cycle again"
      }
     ],
     "caption": "The cycle never ends: each standardised improvement becomes the new baseline for the next Plan step. Trials stay small until Check shows that the change works."
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Quality and schedule are allies",
     "text": "Teams under schedule pressure often see inspection as delay. In practice rework is one of the biggest destroyers of schedule: a failed pressure test, a rejected pour or a repeated NCR consumes far more time than doing it right first time. Measuring first-pass acceptance and making it visible on the site dashboard changes the conversation from 'quality slows us down' to 'rework is what slows us down'."
    },
    {
     "type": "scenario",
     "title": "Weld rejections from a spool fabricator",
     "situation": "Pipe spools for a hypothetical effluent treatment plant at a dyeing factory in Gazipur are arriving from an off-site fabricator. Radiography on site is rejecting an unusually high share of the shop welds, and the site team is cutting out and re-welding joints, which is delaying hydrotesting. The fabricator says the defects are caused by handling damage on site. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Terminate the fabrication order immediately and move the remaining spools to a new fabricator to protect the schedule.",
       "feedback": "Weak as a first move. Switching mid-stream without understanding the cause can bring new problems, a learning curve and delay; it may become necessary later.",
       "best": false
      },
      {
       "text": "Accept the situation, repair the welds on site and backcharge the fabricator for the cost of the rework at the end of the job.",
       "feedback": "Weak. Backcharging recovers some cost but does nothing to stop defective spools arriving, and site repairs are slower and riskier than shop repairs.",
       "best": false
      },
      {
       "text": "Raise an NCR, hold further shipments pending investigation, analyse the defect types with the fabricator and audit its welding process, qualifications and consumables.",
       "feedback": "Best. Containment plus a data-led root cause investigation at the source addresses the real problem. Defect types such as porosity or lack of fusion point to process causes, not handling damage.",
       "best": true
      },
      {
       "text": "Increase on-site radiography to every weld so that every defective joint is found before hydrotesting.",
       "feedback": "Weak. More appraisal finds more defects but does not prevent them; the cost of quality rises while the root cause continues.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "On a project you know, estimate roughly how quality costs split between prevention, appraisal, internal failure and external failure. Which single prevention measure would have removed the largest failure cost?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Quality assurance (QA)",
       "def": "The planned, systematic, process-focused activities that give confidence that work will meet requirements, such as approved procedures, qualifications, training and audits."
      },
      {
       "term": "Quality control (QC)",
       "def": "The product-focused inspection, measurement and testing activities that check whether specific work or items conform to their requirements."
      },
      {
       "term": "Quality management system (QMS)",
       "def": "An organisation's documented and implemented set of policies, processes, responsibilities and records for directing and controlling quality, often certified against ISO 9001."
      },
      {
       "term": "Project quality plan (PQP)",
       "def": "The project-specific document that sets out how the quality management system will be applied to a project: objectives, organisation, standards, inspection and testing, supplier control, NCRs and audits."
      },
      {
       "term": "Cost of quality (COQ)",
       "def": "The total of prevention, appraisal, internal failure and external failure costs, used to show the economic case for preventing defects rather than detecting and repairing them."
      },
      {
       "term": "Quality audit",
       "def": "A systematic, independent and documented examination of whether quality arrangements are followed and effective, leading to graded findings and corrective actions."
      },
      {
       "term": "PDCA cycle",
       "def": "The plan-do-check-act improvement loop in which a change is planned, trialled, measured and then standardised or revised, used for continual improvement."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Quality means conformance and fitness for purpose; prevent defects, because engineering work is soon buried, covered or energised",
      "QA builds a reliable process, QC checks the product, and the project quality plan applies the QMS to this project",
      "COQ = prevention + appraisal + internal failure + external failure; a high failure share signals too little prevention",
      "With offsite manufacture, quality control moves into the factory: agree vendor ITPs and release before dispatch",
      "Use audits and PDCA to standardise what works, and make first-pass acceptance visible on the dashboard"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which of these is a quality assurance activity rather than a quality control activity?",
       "options": [
        "Taking concrete cubes from each truck mixer for testing",
        "Qualifying welders before they start production welding",
        "Measuring the cover to reinforcement before a pour",
        "Radiographing a sample of butt welds on a pipeline"
       ],
       "answer": 1,
       "explain": "Welder qualification is preventive and process-focused – QA. The other three inspect or test particular products, which is QC."
      },
      {
       "q": "A package records prevention 20, appraisal 50, internal failure 110 and external failure 40 (thousands). What is the cost of poor quality?",
       "options": [
        "70 thousand",
        "130 thousand",
        "220 thousand",
        "150 thousand"
       ],
       "answer": 3,
       "explain": "COPQ = internal failure + external failure = 110 + 40 = 150. The total COQ is 220, and the cost of conformance is 70."
      },
      {
       "q": "Which document explains how an organisation's QMS will be applied to a specific power plant project?",
       "options": [
        "The project quality plan",
        "The quality policy statement",
        "The inspection and test plan for piling",
        "The supplier's mill test certificate"
       ],
       "answer": 0,
       "explain": "The project quality plan applies the QMS to the project. An ITP covers one activity, and the policy sits at organisation level."
      },
      {
       "q": "An audit finds that calibration records for torque wrenches are missing for two months. What should follow?",
       "options": [
        "A note in the audit report with no further action",
        "Immediate dismissal of the tool store supervisor",
        "A graded finding with corrective action, owner and date",
        "A decision to stop all bolting work for the whole project"
       ],
       "answer": 2,
       "explain": "Audit findings are graded and closed through corrective action with an owner and date. Doing nothing, blaming a person or stopping everything are not proportionate first responses."
      },
      {
       "q": "A crew trials a new pre-pour checklist on one floor and measures rework before rolling it out. Which PDCA step is the trial itself?",
       "options": [
        "Plan",
        "Do",
        "Check",
        "Act"
       ],
       "answer": 1,
       "explain": "Doing the change on a limited scale is the 'Do' step. Measuring results is 'Check', and standardising is 'Act'."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l2",
   "title": "Inspection & Test Plans, NCRs & Acceptance",
   "subtitle": "Hold, witness and review points, factory and site acceptance tests, traceability, non-conformances and punch lists",
   "minutes": 40,
   "objectives": [
    "Build an inspection and test plan with hold, witness and review points",
    "Plan factory and site acceptance tests and maintain material traceability",
    "Manage non-conformances from report through root cause to verified close-out",
    "Control punch lists with measures that forecast when they will be cleared"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The **inspection and test plan (ITP)** is the backbone of quality control. For each work activity it states what will be checked, against which criteria, how often, by whom, what record will prove it, and which parties must be notified or present. ITPs are derived from the specification and the method statement, agreed before work starts, and used every day by inspectors and supervisors. A good ITP is short enough to be used at the work face and specific enough that two inspectors would make the same decision."
    },
    {
     "type": "table",
     "title": "Extract from an ITP for a reinforced concrete pile cap (illustrative)",
     "head": [
      "Step",
      "Activity or check",
      "Reference and acceptance criteria",
      "Frequency",
      "Record",
      "Contractor",
      "Engineer"
     ],
     "rows": [
      [
       "1",
       "Excavation level and pile head trimming",
       "Drawings; pile cut-off level within specified tolerance",
       "Each pile cap",
       "Survey record",
       "H",
       "W"
      ],
      [
       "2",
       "Pile integrity test results",
       "Specification; no anomalies outside acceptance criteria",
       "Each pile",
       "Test report",
       "R",
       "R"
      ],
      [
       "3",
       "Reinforcement: bar size, spacing, laps and cover",
       "Bar bending schedule and drawings; cover within tolerance",
       "Each pile cap",
       "Rebar inspection checklist",
       "H",
       "H"
      ],
      [
       "4",
       "Formwork, embedded items and cleanliness",
       "Drawings; dimensions, holding-down bolts and sleeves in position",
       "Each pile cap",
       "Pre-pour checklist",
       "H",
       "H"
      ],
      [
       "5",
       "Fresh concrete: slump, temperature and test cubes",
       "Mix design and specification limits",
       "Per truck or per set volume",
       "Delivery tickets and sampling log",
       "W",
       "S"
      ],
      [
       "6",
       "Hardened concrete strength",
       "Cube results against specified characteristic strength",
       "Per sample set",
       "Laboratory certificate",
       "R",
       "R"
      ]
     ]
    },
    {
     "type": "framework",
     "title": "Types of inspection point",
     "items": [
      {
       "label": "H",
       "title": "Hold point",
       "text": "Work must not proceed beyond this point until the named party has inspected or reviewed it and given written release. Covering reinforcement before release breaches the ITP."
      },
      {
       "label": "W",
       "title": "Witness point",
       "text": "The named party must be notified with agreed notice and may attend. If it does not attend after proper notice, work may proceed and the record stands."
      },
      {
       "label": "R",
       "title": "Review point",
       "text": "Documents such as certificates, test reports or calibration records are reviewed, without attending the activity itself."
      },
      {
       "label": "S",
       "title": "Surveillance",
       "text": "Random or periodic monitoring at the inspector's discretion, without a notification requirement, to check that the process is under control."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Never bypass a hold point",
     "text": "Pouring concrete over reinforcement that has not been released, or closing a vessel before internal inspection, may force the work to be broken out or opened up at the contractor's cost, and destroys the evidence that would have shown it was right. **Verbal releases are not releases**: require a signed record or an entry in the inspection system, and plan inspections into the look-ahead so that hold points do not become delays."
    },
    {
     "type": "text",
     "text": "Major equipment is tested twice. A **factory acceptance test (FAT)** is carried out at the manufacturer's works before shipment, where faults are cheapest to fix and test facilities are best. A power transformer is put through routine tests such as ratio, winding resistance, impedance and losses, and dielectric tests, plus any type or special tests the specification calls for. Pumps are run on a test bed against their performance curve; switchgear is checked for wiring, interlocks and insulation; a control system is tested by simulating inputs and checking logic and graphics. A **site acceptance test (SAT)** follows installation and proves that the equipment works correctly in its real environment, connected to real power, process and control interfaces. Remote or video-witnessed FATs are now common when travel is impractical; agree in advance which tests will be witnessed live, the camera coverage, access to raw test data and instrument calibration, and how the record will be signed."
    },
    {
     "type": "compare",
     "title": "Factory acceptance test vs site acceptance test",
     "columns": [
      {
       "title": "Factory acceptance test",
       "items": [
        "At the manufacturer's works, before shipment",
        "Proves the item meets its specification and data sheet",
        "Uses factory test bays, simulated loads and simulated I/O",
        "Defects corrected cheaply by the maker's own staff",
        "Release for shipment follows a successful FAT"
       ]
      },
      {
       "title": "Site acceptance test",
       "items": [
        "On site, after installation and pre-commissioning checks",
        "Proves the item works in its real installed environment",
        "Uses actual power, process connections and control interfaces",
        "Defects cost more and can delay commissioning",
        "Results feed system commissioning and handover records"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "**Material traceability** links each installed item back to its origin and test evidence. Structural steel and pressure parts carry heat numbers that match their mill test certificates; marking is transferred when plates or pipes are cut; alloy materials may be checked with positive material identification; concrete is traced by delivery tickets and cube sets; cable drums and their test reports are linked to circuits. Traceability matters most when something goes wrong: if one heat of steel or one batch of bolts is found to be defective, the project can find every location where it was used instead of opening up everything. Many projects now link barcodes or RFID tags on materials and spools to the completions database, so the search takes minutes rather than days."
    },
    {
     "type": "steps",
     "title": "From non-conformance to verified close-out",
     "items": [
      {
       "title": "Identify and contain",
       "text": "Stop the affected work, tag and segregate the item, and notify the responsible parties so that nothing more is built on top of the problem."
      },
      {
       "title": "Raise the NCR",
       "text": "Describe what is wrong, the requirement it breaches, the evidence, the location and the quantity affected."
      },
      {
       "title": "Disposition",
       "text": "Decide the treatment: rework to meet the requirement, repair to an approved procedure, reject and replace, or use as-is with a formal concession from the designer. Repair and use-as-is need engineering approval."
      },
      {
       "title": "Find the root cause",
       "text": "Use structured methods such as five whys or a cause-and-effect diagram covering people, method, materials, machines, measurement and environment."
      },
      {
       "title": "Correct and prevent",
       "text": "Fix the cause, not just the item – change a procedure, retrain, change a supplier, add an ITP check – and check other locations with the same risk."
      },
      {
       "title": "Verify and close",
       "text": "Re-inspect, confirm the corrective action works, attach records, close the NCR and review NCR trends monthly."
      }
     ]
    },
    {
     "type": "sequence",
     "title": "Closing an NCR on a pipe spool",
     "actors": [
      "Inspector",
      "Contractor",
      "Designer",
      "QA/QC manager"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "NCR raised: weld defects on spool S-14",
       "note": "Spool tagged and quarantined"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Contain; check spools from same batch"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Propose repair procedure"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Repair approved, with NDT conditions",
       "reply": true
      },
      {
       "from": 1,
       "to": 3,
       "label": "Root cause and corrective action"
      },
      {
       "from": 3,
       "to": 1,
       "label": "Action accepted; owner and date set",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Request re-inspection"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Repair accepted after NDT",
       "reply": true
      },
      {
       "from": 0,
       "to": 3,
       "label": "Evidence attached to the NCR"
      },
      {
       "from": 3,
       "to": 3,
       "label": "Verify the action works; close NCR"
      }
     ],
     "caption": "The repaired spool is accepted at step 8, but the NCR closes only when the QA/QC manager has evidence that the corrective action stops the defect recurring. Repairs need the designer's approval; rework to the original requirement does not."
    },
    {
     "type": "template",
     "title": "NCR log",
     "purpose": "Track each non-conformance from discovery to verified close-out, so that open NCRs, ageing and repeated causes are visible to the project team.",
     "columns": [
      "NCR no.",
      "Date and location",
      "Description and requirement breached",
      "Disposition",
      "Root cause",
      "Corrective action and owner",
      "Status / closed date"
     ],
     "example": [
      [
       "NCR-031",
       "12 Jun – pile cap PC-14, grid B/7",
       "Bottom cover 30 mm against 50 mm specified; drawing and specification",
       "Rework – re-fix bottom mat before pour",
       "Wrong spacer blocks issued from store",
       "Spacer blocks colour-coded by size; store check added – stores supervisor",
       "Closed 13 Jun"
      ],
      [
       "NCR-032",
       "15 Jun – pipe rack PR-2",
       "Bolt grade marking does not match approved submittal",
       "Reject and replace bolts",
       "Supplier substituted grade without approval",
       "Supplier corrective action; receiving inspection to check markings – procurement lead",
       "Open – awaiting replacement bolts"
      ]
     ],
     "rows": 6
    },
    {
     "type": "text",
     "text": "A **punch list** records minor incomplete or defective items found during walkdowns near completion. Many projects categorise items: category A items must be cleared before a defined milestone such as mechanical completion or start-up because they affect safety or function; category B items can be cleared later but before handover or within an agreed period; some projects add a category for cosmetic items. Category names and rules vary, so define them in the completion procedure. Each item needs a location, system and tag, discipline, category, responsible party, target date and a photograph, and it should live in one database rather than in separate spreadsheets kept by each party."
    },
    {
     "type": "formula",
     "title": "Quality and punch-list metrics",
     "items": [
      {
       "name": "First-pass yield",
       "expr": "FPY = inspections accepted at first presentation / total inspections presented × 100%",
       "meaning": "The share of work accepted first time without rework; a direct measure of whether quality is built in."
      },
      {
       "name": "Rolled throughput yield",
       "expr": "RTY = FPY_1 × FPY_2 × … × FPY_n",
       "meaning": "The probability that an item passes every step first time, where FPY_i is the first-pass yield of step i expressed as a fraction."
      },
      {
       "name": "Net burn rate",
       "expr": "Net burn rate = items closed per day − new items raised per day",
       "meaning": "How fast the open punch list is actually shrinking once newly found items are counted."
      },
      {
       "name": "Forecast clearance time",
       "expr": "Days to clear = open items / net burn rate (valid only when net burn rate > 0)",
       "meaning": "When the punch list will be empty at the current rates; if the net burn rate is zero or negative, the list will never clear without action."
      },
      {
       "name": "Required net burn rate",
       "expr": "Required net burn rate = open items / working days remaining to the target date",
       "meaning": "The net rate needed to clear the list by the target date; compare with the actual net burn rate."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Punch-list burn-down (illustrative)",
     "text": "A hypothetical substation has **420** open punch items and **25** working days to the energisation target. Crews close 18 items a day while walkdowns raise 6 new ones, so the net burn rate is 18 − 6 = **12 per day**. Forecast clearance = 420 / 12 = **35 days** – ten days late. The required net burn rate is 420 / 25 = **16.8 per day**. Options include adding a dedicated punch crew, clearing category A items first so energisation is not blocked, and joint daily walkdowns so that items are raised once and correctly rather than repeatedly."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Substation punch-list burn-down (illustrative)",
     "labels": [
      "Day 0",
      "Day 5",
      "Day 10",
      "Day 15",
      "Day 20",
      "Day 25"
     ],
     "series": [
      {
       "name": "Forecast at 12 per day net",
       "values": [
        420,
        360,
        300,
        240,
        180,
        120
       ]
      },
      {
       "name": "Required at 16.8 per day net",
       "values": [
        420,
        336,
        252,
        168,
        84,
        0
       ]
      }
     ],
     "yLabel": "Open punch items",
     "caption": "Illustrative figures from the example above. At the current net rate about 120 items are still open on the target day, so the list would clear only around day 35 unless the rate rises."
    },
    {
     "type": "scenario",
     "title": "Witness point missed at the factory",
     "situation": "The ITP for 33 kV switchgear for a hypothetical solar park makes the FAT a witness point for the owner's inspector, with ten days' notice. The vendor gave only two days' notice, the inspector could not travel, and the vendor ran the FAT anyway. The test reports all show passes and the vendor asks for release for shipment so that it can meet its delivery date. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Release the switchgear for shipment, since the reports show that every test was passed and delivery is on time.",
       "feedback": "Weak. The notice requirement exists so the owner can verify the tests; accepting reports from a FAT run without proper notice undermines the ITP and sets a precedent.",
       "best": false
      },
      {
       "text": "Reject the switchgear outright and require the vendor to manufacture new panels with a properly witnessed FAT.",
       "feedback": "Weak. The equipment may well be compliant; rejecting it without evidence of a defect is disproportionate and harms the schedule.",
       "best": false
      },
      {
       "text": "Accept the reports now and plan to repeat the full FAT on site after installation, where it can be witnessed.",
       "feedback": "Weak. Site conditions and facilities are not equivalent to the factory, and defects found on site cost far more to correct.",
       "best": false
      },
      {
       "text": "Review the FAT records against the ITP and require key tests to be repeated with the owner witnessing, in person or remotely, before release.",
       "feedback": "Best. This restores the verification the ITP intended at modest cost, keeps release in the owner's hands, and records the vendor's notice failure for performance management.",
       "best": true
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick an ITP you have used or seen. Which hold points actually protected the project, and which were treated as formalities? How would you redesign one line of it to be clearer at the work face?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Inspection and test plan (ITP)",
       "def": "A document listing, for a work activity or item, each inspection and test with its reference, acceptance criteria, frequency, record and the hold, witness, review or surveillance role of each party."
      },
      {
       "term": "Hold point",
       "def": "An inspection point beyond which work must not proceed without the written release of the designated party, typically before work is covered or made inaccessible."
      },
      {
       "term": "Witness point",
       "def": "An inspection point at which a designated party must be given agreed notice and may attend; if it does not attend after proper notice, work may proceed."
      },
      {
       "term": "Factory acceptance test (FAT)",
       "def": "Testing of equipment at the manufacturer's works before shipment to demonstrate compliance with its specification, often witnessed by the purchaser."
      },
      {
       "term": "Site acceptance test (SAT)",
       "def": "Testing of equipment or a system after installation on site to demonstrate correct performance in its actual environment and with its real interfaces."
      },
      {
       "term": "Non-conformance report (NCR)",
       "def": "A formal record that work, material or equipment does not meet a specified requirement, used to contain, disposition, investigate and close the non-conformance."
      },
      {
       "term": "Punch list",
       "def": "A list of minor incomplete or defective items identified at walkdowns near completion, each categorised, assigned and tracked until cleared."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "An ITP states what is checked, against which criteria, by whom and with what record; hold points need written release",
      "FAT at the works, SAT on site – remote witnessing works only when agreed in advance and properly recorded",
      "Traceability lets one bad heat or batch be found without opening up everything",
      "Close NCRs by fixing the cause, not just the item, and verify that the corrective action worked",
      "Forecast punch-list clearance from the net burn rate and compare it with the rate the target date requires"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Reinforcement in a raft has been fixed, but the engineer has not yet inspected it, although the ITP shows a hold point. The concrete trucks are arriving. What should happen?",
       "options": [
        "Pour the raft and send the engineer photographs of the rebar",
        "Hold the pour until the engineer inspects and releases it in writing",
        "Pour the raft if the contractor's own inspector has approved the rebar",
        "Pour half the raft and keep the remainder for the engineer's inspection"
       ],
       "answer": 1,
       "explain": "Work must not proceed past a hold point without written release from the named party. Photographs or the contractor's own approval are not substitutes."
      },
      {
       "q": "A transformer passed all routine tests at the factory. Why is a site acceptance test still needed?",
       "options": [
        "To repeat the factory tests in case the vendor's results were falsified",
        "To satisfy the insurers that the transformer was delivered on the agreed date",
        "To confirm correct performance after transport, installation and connection",
        "To replace the need for any commissioning of the substation system"
       ],
       "answer": 2,
       "explain": "Transport and installation can damage equipment, and real connections and interfaces must be proven. The SAT feeds commissioning; it does not replace it."
      },
      {
       "q": "A batch of bolts is found to be the wrong grade. Which quality practice allows the team to find every location where that batch was installed?",
       "options": [
        "Material traceability linking batches to locations",
        "A higher frequency of witness points in the bolting ITP",
        "First-pass yield measurement for bolting work",
        "Rolled throughput yield for the steel erection"
       ],
       "answer": 0,
       "explain": "Traceability links material batches and certificates to where they are used, so a defective batch can be located without opening up everything."
      },
      {
       "q": "A punch list has 300 open items. Crews close 20 per day and walkdowns raise 5 new items per day. How many days will it take to clear at these rates?",
       "options": [
        "15 days",
        "12 days",
        "25 days",
        "20 days"
       ],
       "answer": 3,
       "explain": "Net burn rate = 20 − 5 = 15 per day; 300 / 15 = 20 days. Ignoring new items would give an optimistic 15 days."
      },
      {
       "q": "Of 200 weld inspections presented in a month, 170 were accepted first time. What is the first-pass yield?",
       "options": [
        "80%",
        "85%",
        "90%",
        "75%"
       ],
       "answer": 1,
       "explain": "FPY = 170 / 200 × 100% = 85%. The other 15% needed rework and re-inspection."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l3",
   "title": "Commissioning",
   "subtitle": "Mechanical completion, pre-commissioning, cold and hot commissioning, systems, performance tests and safe start-up",
   "minutes": 40,
   "objectives": [
    "Sequence the transition from mechanical completion through pre-commissioning, cold and hot commissioning to performance testing",
    "Organise commissioning by systems and subsystems and track readiness with certificates",
    "Apply start-up safety controls, including a pre-start-up safety review, as systems become live",
    "Structure a commissioning team and its interfaces with construction and operations"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Construction builds by area and discipline; commissioning proves by system. **Commissioning** is the structured process of verifying that installed systems are complete, function as designed, and can be operated safely and reliably by the owner. It begins in design – with isolation valves, test points, flushing connections, temporary strainers and a commissioning philosophy – not in the last month of construction. On a boiler, a substation, an effluent treatment plant or a metro signalling system, commissioning is where hidden design, installation and integration problems finally surface, so it deserves its own plan, team and schedule. On modern plants the scope also covers digital systems – control networks and their cybersecurity settings, the data historian and any digital twin connections – and verifies energy performance, because operational energy and carbon are increasingly managed targets."
    },
    {
     "type": "flow",
     "title": "From construction to performance",
     "items": [
      {
       "label": "Construction complete",
       "text": "Installation finished and checked by area and discipline"
      },
      {
       "label": "Mechanical completion",
       "text": "System installed, tested to code and certified ready to commission"
      },
      {
       "label": "Pre-commissioning",
       "text": "Cleaning, flushing, drying, loop checks and equipment run-in without process media"
      },
      {
       "label": "Cold commissioning",
       "text": "Functional testing with safe media such as water or air"
      },
      {
       "label": "Hot commissioning",
       "text": "Introduction of process fluids, fuel or energy and first start-up"
      },
      {
       "label": "Performance tests",
       "text": "Guarantees demonstrated and reliability run completed"
      }
     ]
    },
    {
     "type": "table",
     "title": "What happens at each commissioning stage",
     "head": [
      "Stage",
      "Typical activities",
      "Media and energy",
      "Completion evidence"
     ],
     "rows": [
      [
       "Mechanical completion",
       "Installation verified against drawings; pressure and leak tests; electrical installation tests; category A punch items cleared",
       "None, or test media only",
       "Mechanical completion certificate per system or subsystem"
      ],
      [
       "Pre-commissioning",
       "Flushing, air or steam blowing preparation, chemical cleaning, drying; instrument loop checks; motor solo runs; insulation resistance and alignment checks",
       "Temporary water, air or nitrogen; temporary power",
       "Pre-commissioning check sheets complete; system ready for commissioning"
      ],
      [
       "Cold commissioning",
       "Functional tests of interlocks, trips and control loops; pump and fan run-in on water or air; HVAC balancing",
       "Water, air or inert gas; permanent power",
       "Functional test records signed by commissioning and operations"
      ],
      [
       "Hot commissioning and start-up",
       "First firing of a boiler, steam blows, introduction of gas, synchronisation of a generator, first effluent through an ETP",
       "Process fluids, fuel, steam, high voltage",
       "Ready-for-start-up approval and start-up logs"
      ],
      [
       "Performance and reliability tests",
       "Capacity, efficiency, emissions or effluent quality guarantees; continuous running for the contractually agreed period",
       "Normal operating conditions",
       "Signed test reports and calculations against guarantees"
      ]
     ]
    },
    {
     "type": "tree",
     "title": "Systemisation of a combined-cycle unit (illustrative)",
     "root": {
      "label": "Combined-cycle unit",
      "text": "Facility",
      "children": [
       {
        "label": "Boiler feedwater",
        "text": "System",
        "children": [
         {
          "label": "Feedwater pump A train",
          "text": "Subsystem",
          "children": [
           {
            "label": "Pump and motor tags"
           },
           {
            "label": "Valves and transmitters"
           },
           {
            "label": "Check sheets per tag"
           }
          ]
         },
         {
          "label": "Feedwater pump B train",
          "text": "Subsystem"
         },
         {
          "label": "Deaerator",
          "text": "Subsystem"
         }
        ]
       },
       {
        "label": "Cooling water",
        "text": "System",
        "children": [
         {
          "label": "Circulating pumps"
         },
         {
          "label": "Cooling tower cells"
         }
        ]
       },
       {
        "label": "Compressed air",
        "text": "Utility system",
        "children": [
         {
          "label": "Compressors and dryers"
         },
         {
          "label": "Distribution headers"
         }
        ]
       },
       {
        "label": "Permanent power",
        "text": "Utility system",
        "children": [
         {
          "label": "MV switchboards"
         },
         {
          "label": "LV distribution"
         }
        ]
       }
      ]
     },
     "caption": "Every tag belongs to exactly one subsystem; check sheets attach to tags, while certificates and turnover packages are issued per subsystem. Utility systems are completed first because the others depend on them."
    },
    {
     "type": "text",
     "text": "**Systemisation** draws commissioning boundaries on marked-up process and instrumentation diagrams and electrical single-line diagrams, then links every tag to a system and subsystem. Construction progress by area does not tell you whether a system can be commissioned: the cooling water system may be 95% built, but if one valve in a remote corner is missing the system cannot be flushed. Completion teams therefore track every check sheet and punch item by subsystem and hand over formal turnover packages from construction to commissioning. Utilities come first – permanent power, compressed air, water, fire water and control room HVAC – because every other system depends on them."
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Build in commissioning sequence",
     "text": "In the last third of construction, the schedule should be driven by the system completion sequence, not by what is convenient for each area or discipline. A planner who keeps scheduling by area until the end will produce a site that is 'nearly complete everywhere' and a commissioning team that has nothing it can start."
    },
    {
     "type": "text",
     "text": "As systems are energised, pressurised or filled with process fluids, the site changes from a construction site into an operating plant – often with construction still going on next door. Start-up safety needs deliberate control: the permit-to-work system transfers to operations for live systems (see Protect), lock-out and tag-out is applied at every isolation, live areas are clearly demarcated, energisation notices are issued and briefed, and emergency response is ready before the first hazardous energy is introduced. A **pre-start-up safety review** confirms, before start-up, that the plant is built as designed, procedures and training are in place, hazard study actions are closed, and safety systems have been tested."
    },
    {
     "type": "checklist",
     "title": "Pre-start-up safety review – before introducing hazardous energy or process fluid",
     "items": [
      "Construction and installation verified against the design, with all relevant category A punch items closed",
      "Pressure and leak tests complete and recorded for every line in the start-up boundary",
      "Safety-critical trips, interlocks and alarms function-tested and signed off",
      "Relief valves installed, set and certified; fire and gas detection operational",
      "Hazard study and design review actions affecting start-up closed or formally accepted",
      "Operating procedures issued and operators trained and assessed on them",
      "Permit-to-work, isolation and energisation arrangements in force and briefed",
      "Emergency response, first aid and fire-fighting arrangements ready and tested"
     ]
    },
    {
     "type": "sequence",
     "title": "From mechanical completion to ready for start-up",
     "actors": [
      "Construction",
      "Completions",
      "Commissioning",
      "Operations"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Check sheets done; punch A cleared"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Turnover package + MC certificate",
       "note": "Per subsystem"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Pre-commissioning and cold tests"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Invite to witness functional tests"
      },
      {
       "from": 3,
       "to": 2,
       "label": "Witnessed; procedures reviewed",
       "reply": true
      },
      {
       "from": 2,
       "to": 3,
       "label": "PSSR: start-up items closed"
      },
      {
       "from": 3,
       "to": 2,
       "label": "Ready-for-start-up approval",
       "reply": true
      },
      {
       "from": 3,
       "to": 3,
       "label": "Live system under operations permits"
      }
     ],
     "caption": "Each hand-off is a signed record per subsystem, not a verbal agreement. Operations witnesses and approves before hazardous energy is introduced, then controls the live system through its own permit-to-work."
    },
    {
     "type": "table",
     "title": "The commissioning team",
     "head": [
      "Role",
      "Main responsibilities"
     ],
     "rows": [
      [
       "Commissioning manager",
       "Owns the commissioning plan, sequence and schedule; chairs readiness reviews; interfaces with the construction manager and operations"
      ],
      [
       "System commissioning engineers",
       "Lead the commissioning of assigned systems; write and execute procedures; sign test records"
      ],
      [
       "Completions team",
       "Maintains the completions database of tags, check sheets, punch items and certificates; prepares turnover packages"
      ],
      [
       "Vendor specialists",
       "Commission packaged equipment such as turbines, transformers, chillers or control systems to their own procedures"
      ],
      [
       "Operations staff",
       "Shadow, then operate under supervision; review procedures; accept systems; build familiarity before taking over"
      ],
      [
       "HSE and owner's representatives",
       "Manage start-up permits and isolations; witness tests and verify guarantees on the owner's behalf"
      ]
     ]
    },
    {
     "type": "formula",
     "title": "Common performance test calculations",
     "items": [
      {
       "name": "Net heat rate",
       "expr": "Net heat rate (kJ/kWh) = fuel heat input (kJ) / net electrical energy exported (kWh)",
       "meaning": "Fuel energy needed per unit of net electricity; lower is better. Results are normally corrected to the reference conditions in the contract."
      },
      {
       "name": "Net thermal efficiency",
       "expr": "Efficiency (%) = 3600 / net heat rate (kJ/kWh) × 100",
       "meaning": "Because 1 kWh = 3600 kJ, this converts heat rate to efficiency."
      },
      {
       "name": "Capacity achieved",
       "expr": "Capacity achieved (%) = corrected measured net output / guaranteed net output × 100",
       "meaning": "Whether the plant delivers its guaranteed output once measurements are corrected to reference conditions."
      },
      {
       "name": "Availability in a reliability run",
       "expr": "Availability (%) = hours available / total hours in the test period × 100",
       "meaning": "The share of the test period during which the plant was able to operate as required."
      }
     ]
    },
    {
     "type": "case",
     "title": "Commissioning an effluent treatment plant for a dyeing factory (illustrative)",
     "context": "A hypothetical dyeing and finishing factory near Gazipur is completing a new biological effluent treatment plant: equalisation tank, chemical dosing, aeration basins with blowers, clarifiers, sludge handling and a treated-water discharge point monitored by the environment department. Civil and mechanical works are nearly complete. The factory wants to start production on a new line within weeks, and the factory manager suggests starting effluent flow as soon as the pumps run. The biological process needs time to establish a healthy biomass, and the discharge must meet the environmental standards that apply. All details are illustrative.",
     "questions": [
      "How would you systemise the plant and order its commissioning?",
      "What should be proven in cold commissioning before any real effluent is introduced?",
      "How would you handle the pressure to start production before the biological process is stable?"
     ],
     "answer": "Systemise by process function: power and controls, chemical dosing, equalisation and transfer pumps, aeration blowers and diffusers, clarifiers and sludge handling, with utilities first. Cold commissioning with clean water should prove pumps, blowers, valves, level and dissolved-oxygen control loops, dosing pumps, alarms and interlocks, and the hydraulic path, including leak checks on tanks. Hot commissioning then introduces effluent at a controlled rate while the biomass is seeded and built up, with laboratory monitoring of the key discharge parameters. The project manager should give the factory a realistic, evidence-based ramp-up plan, explain the regulatory and reputational risk of non-compliant discharge, and agree production ramp-up limits tied to measured treatment performance rather than to the construction finish date."
    },
    {
     "type": "scenario",
     "title": "Pressure to skip the review",
     "situation": "A new gas-fired boiler at a textile mill is scheduled for first fire tomorrow. The pre-start-up safety review has found that leak-test records for one section of the gas line are incomplete and that two burner management system trips have not yet been function-tested. The mill's production director wants first fire to go ahead because a large export order depends on steam next week, and says the gas line 'was obviously tested'. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Allow first fire tomorrow while the leak-test paperwork is completed in parallel, since the gas line was almost certainly tested.",
       "feedback": "Weak. Missing records mean the test cannot be shown to have been done; introducing gas on that assumption is how serious incidents happen.",
       "best": false
      },
      {
       "text": "Hold first fire until the gas line section is tested and recorded and both trips are function-tested, and give the director a recovery plan with realistic timings.",
       "feedback": "Best. These are safety-critical gaps that the review exists to catch. Holding the start-up while offering a clear plan treats the production need seriously without gambling with safety.",
       "best": true
      },
      {
       "text": "Proceed with first fire but bypass the two untested trips and post an operator at the burner to watch the flame continuously.",
       "feedback": "Weak. Bypassing safety trips and relying on manual observation removes the very protection the burner management system provides.",
       "best": false
      },
      {
       "text": "Escalate the decision to the boiler vendor and let its commissioning engineer decide whether to proceed tomorrow.",
       "feedback": "Weak. Vendor input is valuable, but accountability for start-up safety cannot be handed to a supplier, and the gaps are clear-cut.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think of a start-up you have seen or read about. Which item on the pre-start-up safety review checklist was most at risk of being skipped under schedule pressure, and what would have made it easier to hold the line?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Mechanical completion",
       "def": "The milestone at which a system or subsystem is installed, tested and documented in accordance with the drawings, specifications and codes, ready for pre-commissioning, usually confirmed by a certificate."
      },
      {
       "term": "Pre-commissioning",
       "def": "Non-operational checks and preparation of installed systems before process media are introduced, such as flushing, cleaning, drying, loop checks, insulation tests and motor solo runs."
      },
      {
       "term": "Cold commissioning",
       "def": "Functional testing of systems with safe media such as water, air or inert gas to prove controls, interlocks and equipment operation before process fluids or fuel are introduced."
      },
      {
       "term": "Hot commissioning",
       "def": "The commissioning stage in which process fluids, fuel or full energy are introduced and the plant is started up and brought towards normal operating conditions."
      },
      {
       "term": "Systemisation",
       "def": "The division of a facility into commissioning systems and subsystems with defined boundaries, so that completion, testing and handover can be planned and tracked by function."
      },
      {
       "term": "Performance guarantee test",
       "def": "A formal test, run to an agreed procedure, that demonstrates whether a plant meets its contractual guarantees such as output, efficiency, emissions or effluent quality."
      },
      {
       "term": "Pre-start-up safety review (PSSR)",
       "def": "A structured check carried out before hazardous energy or process fluids are introduced, confirming that the plant, procedures, training and safety systems are ready for safe start-up."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Construction builds by area; commissioning proves by system – switch the late-stage schedule to system completion",
      "Move from mechanical completion through pre-commissioning, cold and hot commissioning to performance tests, with evidence at each step",
      "Systemise early and commission utilities first; turnover packages pass from construction to commissioning per subsystem",
      "A pre-start-up safety review must close every safety-critical gap before hazardous energy or process fluid is introduced",
      "Correct performance test results to the contract's reference conditions before judging guarantees"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Flushing a lube-oil system, drying a line with nitrogen and checking instrument loops normally belong to which stage?",
       "options": [
        "Hot commissioning",
        "Performance testing",
        "Pre-commissioning",
        "Reliability running"
       ],
       "answer": 2,
       "explain": "These preparation activities are carried out before process media are introduced – pre-commissioning."
      },
      {
       "q": "Why are utility systems such as permanent power, compressed air and fire water usually commissioned first?",
       "options": [
        "They are the cheapest systems to commission on a plant",
        "Other systems depend on them for their own commissioning",
        "Their vendors usually arrive on site before all the others",
        "They do not need any mechanical completion certificate"
       ],
       "answer": 1,
       "explain": "Most process systems need power, air, water and fire protection to be tested and operated safely, so utilities come first."
      },
      {
       "q": "A gas-fired plant burns fuel with a heat input of 90,000,000 kJ in one hour while exporting 10,000 kWh net. What is its net thermal efficiency?",
       "options": [
        "30%",
        "36%",
        "40%",
        "45%"
       ],
       "answer": 2,
       "explain": "Net heat rate = 90,000,000 / 10,000 = 9,000 kJ/kWh. Efficiency = 3600 / 9,000 × 100 = 40%. The other values come from using the wrong conversion factor or confusing gross and net output."
      },
      {
       "q": "What is the main purpose of a pre-start-up safety review?",
       "options": [
        "To confirm that the plant is ready to start safely before hazards are introduced",
        "To agree the final account for the commissioning contractor's work",
        "To measure whether the completed plant meets its contractual efficiency and output guarantees",
        "To record the punch items left over for the defects period"
       ],
       "answer": 0,
       "explain": "The review checks construction, procedures, training, safety systems and hazard study actions before start-up. Guarantees and punch lists are handled elsewhere."
      },
      {
       "q": "Construction reports a cooling water system as 95% complete, but commissioning cannot flush it. What is the most likely explanation?",
       "options": [
        "The performance test has not yet been witnessed by the owner's team",
        "The progress figure is measured by area, while one missing item blocks the system",
        "The cooling water system has been incorrectly systemised as a utility system by the completions team",
        "The system was mechanically completed before its pre-commissioning had started"
       ],
       "answer": 1,
       "explain": "Area or quantity progress does not show whether a whole system is complete; one missing valve can block flushing. That is why commissioning tracks completion by system and subsystem."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l4",
   "title": "Handover & Operations Readiness",
   "subtitle": "Taking over, as-built records, O&M manuals, spares, training, asset information, warranties and soft landings",
   "minutes": 35,
   "objectives": [
    "Plan taking over and handover so the owner receives a safe, documented and operable asset",
    "Specify as-built records, O&M manuals, spares, training and structured asset information",
    "Prepare operations readiness from early in the project, using soft landings principles",
    "Manage warranties and the defects period after handover"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The project ends but the asset begins. **Handover** transfers care, custody and control from the contractor to the owner: responsibility for security, insurance, operation, maintenance and most risks changes hands. Too many owners discover at handover that they have a working plant but unusable drawings, an unclear spares position and operators who have never run the equipment without the vendor beside them. The cure is to treat operations readiness as a workstream that starts in design, with its own deliverables, owner and schedule, not as a pile of documents gathered in the final month."
    },
    {
     "type": "steps",
     "title": "A handover sequence that works",
     "items": [
      {
       "title": "Agree the handover strategy early",
       "text": "Decide whether the asset will be taken over as a whole, by section or by system, and align the contract, commissioning plan and operations plan with that choice."
      },
      {
       "title": "Hold readiness reviews",
       "text": "Check progressively that systems, documents, people, spares and permits will be ready, starting months before the planned date."
      },
      {
       "title": "Inspect and punch",
       "text": "Carry out joint completion inspections and agree a categorised punch list, distinguishing items that prevent taking over from those that do not."
      },
      {
       "title": "Deliver and check information",
       "text": "Receive as-built drawings, O&M manuals, test records, certificates and asset data, and check them against the requirements rather than just counting files."
      },
      {
       "title": "Train and familiarise",
       "text": "Complete operator and maintainer training, including hands-on sessions and assessment, before the owner's staff take responsibility."
      },
      {
       "title": "Take over formally",
       "text": "Issue the taking-over certificate or equivalent under the contract, recording the date, any outstanding items and the start of the defects period (see Procure)."
      },
      {
       "title": "Support after handover",
       "text": "Provide aftercare during the defects period – visits, performance monitoring and quick remedy of defects – as agreed in the contract and soft landings plan."
      }
     ]
    },
    {
     "type": "sequence",
     "title": "Taking over: a recorded decision",
     "actors": [
      "Contractor",
      "Engineer",
      "Owner"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Apply for taking over",
       "note": "Within the contract's notice rules"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Check criteria: tests, records, training"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Joint inspection; categorised punch list"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Recommend, with outstanding items"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Safety-critical gaps closed first",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Taking-over certificate + dated list",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "Care, custody and control pass"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Insurance, O&M and defects period start"
      }
     ],
     "caption": "Taking over is judged against the criteria in the contract. Minor outstanding items can be listed with dates, but gaps that affect safe operation must be closed before the owner takes control."
    },
    {
     "type": "table",
     "title": "The handover dossier – what the owner should receive",
     "head": [
      "Item",
      "Content",
      "Common problem",
      "Good practice"
     ],
     "rows": [
      [
       "As-built drawings",
       "Drawings showing the works as actually constructed",
       "Design drawings re-titled without recording site changes",
       "Site redlines maintained continuously and verified by survey or scan before handover"
      ],
      [
       "O&M manuals",
       "Operating procedures, maintenance instructions, data sheets, spares lists, vendor documents",
       "Generic catalogues; delivered after the staff needed them",
       "Project-specific manuals reviewed in draft by operators before training starts"
      ],
      [
       "Test and commissioning records",
       "ITP records, FAT and SAT reports, commissioning sheets, performance test results",
       "Records scattered across parties and formats",
       "One completions database exported per system with all certificates attached"
      ],
      [
       "Spares and special tools",
       "Commissioning, start-up and operational spares; special tools; consumables",
       "Spares delivered without tags or storage plan",
       "Spares checked against the agreed list, tagged, recorded and stored before handover"
      ],
      [
       "Warranties and certificates",
       "Equipment warranties, guarantees, material certificates, statutory approvals such as fire, lift and boiler",
       "Warranties started at delivery and expired before operation",
       "Warranty register with start and end dates, contacts and conditions"
      ],
      [
       "Asset information",
       "Asset register and structured data for the maintenance management system",
       "Data not in a format the owner's systems can import",
       "Asset information requirements defined early and test-loaded before handover; sensor tags and data mappings verified where a digital twin is planned"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "As-built is not as-designed with a new title block",
     "text": "Real as-built drawings record what was actually installed: the cable route moved around a column, the pipe that went over the beam instead of under it, the buried valve chamber that shifted two metres. If site teams do not mark up changes as they happen, the information is lost for ever. Make redline maintenance a weekly supervisory duty, check it at audits, and verify critical as-built information by survey or laser scan."
    },
    {
     "type": "text",
     "text": "**Operations readiness** prepares the owner's organisation to run the asset from day one. It covers recruiting and training operators and maintainers in time to take part in commissioning; writing operating, maintenance and emergency procedures; setting up the maintenance management system with the asset register, maintenance routines and spares records; securing consumables such as chemicals, lubricants and filters; arranging specialist support contracts; and obtaining the permits and licences needed to operate. On a hypothetical new hospital it also means clinical commissioning – moving equipment, staff and patients – which can take months after technical handover. Owners with an asset management system aligned to ISO 55001 (current edition 2024) can derive their asset information requirements from it, and ISO 19650-3 covers how that information is then managed in operation."
    },
    {
     "type": "timeline",
     "title": "Operations readiness from design to aftercare",
     "items": [
      {
       "when": "Design",
       "label": "Operators join design reviews",
       "text": "Operability and maintainability tested; asset information requirements set"
      },
      {
       "when": "Contract award",
       "label": "Readiness plan and owner",
       "text": "Handover strategy, staffing plan, maintenance system set-up"
      },
      {
       "when": "T − 12 months",
       "label": "Recruit and start training",
       "text": "Key operators and maintainers in post; vendor courses booked"
      },
      {
       "when": "T − 6 months",
       "label": "Draft O&M manuals reviewed",
       "text": "Operators check procedures before training relies on them"
      },
      {
       "when": "Commissioning",
       "label": "Operators work under supervision",
       "text": "Witness tests, run systems, assessed hands-on"
      },
      {
       "when": "T",
       "label": "Taking over",
       "text": "Care, custody and control pass to the owner"
      },
      {
       "when": "Defects period",
       "label": "Aftercare and review",
       "text": "Soft landings visits; performance in use measured"
      }
     ],
     "caption": "T is the planned taking-over date; the lead times are illustrative and grow with complexity. The point is that readiness starts in design, not in the final month."
    },
    {
     "type": "compare",
     "title": "Traditional handover vs soft landings",
     "columns": [
      {
       "title": "Traditional handover",
       "items": [
        "Operations staff appear shortly before completion",
        "Design decisions made with little input from operators",
        "Handover is a single event; the contractor leaves",
        "Problems after handover become defects disputes",
        "Performance in use is rarely measured against design intent"
       ]
      },
      {
       "title": "Soft landings",
       "items": [
        "Operators and maintainers involved from design onwards",
        "Design reviews test operability and maintainability",
        "A graduated handover with familiarisation and aftercare",
        "Designers and contractors stay engaged for an agreed period after handover",
        "Performance in use – including energy and operational carbon – is monitored and fine-tuned against design intent"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "Spares deserve explicit decisions. **Commissioning spares** are consumed during commissioning; **start-up spares** cover the early operating period; operational spares support routine maintenance for an agreed period; and **critical spares** – sometimes called insurance or capital spares – are long-lead items whose failure would stop the plant for months, such as a spare transformer, a turbine rotor component or a large pump casing. Vendors propose spares lists, but the owner should review them against its maintenance strategy, equipment standardisation and supplier lead times, and the spares should be delivered, inspected, tagged, recorded and stored before handover."
    },
    {
     "type": "template",
     "title": "Handover readiness register",
     "purpose": "Track each handover deliverable by system or area so that the owner can see in advance what will not be ready and agree actions before taking over.",
     "columns": [
      "System or area",
      "Deliverable",
      "Required by",
      "Responsible",
      "Status",
      "Verified by",
      "Notes"
     ],
     "example": [
      [
       "33 kV substation",
       "Protection relay settings and test records",
       "4 weeks before energisation",
       "Electrical commissioning lead",
       "Received – under review",
       "Owner's protection engineer",
       "Two relays still show factory default settings"
      ],
      [
       "HVAC – operating theatres",
       "Operator training with assessment on pressure regimes",
       "Before clinical commissioning",
       "Mechanical contractor and FM manager",
       "Scheduled",
       "Hospital estates manager",
       "Include night-shift staff in second session"
      ]
     ],
     "rows": 8
    },
    {
     "type": "text",
     "text": "After taking over, the **defects period** – called the defects liability or defects notification period in different contracts – begins. During it the contractor must remedy defects that it is notified of, and retention money and performance security are usually released in stages as obligations are met (see Procure for the contractual mechanisms). Equipment warranties often run separately: a vendor warranty that starts on delivery may expire before a delayed plant even starts operating, so negotiate warranty start dates linked to commissioning or taking over, and keep a register. Defects that only become apparent later may still be claimable under the general law, subject to limitation periods that vary by jurisdiction."
    },
    {
     "type": "case",
     "title": "Handing over a hospital block (illustrative)",
     "context": "A hypothetical multi-storey hospital extension in Dhaka includes wards, intensive care, operating theatres with controlled pressure regimes, medical gas systems, standby generators and a building management system. The hospital wants to open the wards in phases, with theatres last. The contractor plans one handover at the end, and the O&M manuals are still in draft. The hospital's estates team is small and has never maintained medical gas or theatre HVAC systems. All details are illustrative.",
     "questions": [
      "What handover strategy would you recommend, and what does it require in the contract?",
      "What operations readiness actions should start immediately?",
      "Which records and tests must be complete before patients occupy any area?"
     ],
     "answer": "A sectional handover, by floor or department, would let the hospital open wards early, but it needs the contract to define sections, their completion requirements, separate taking-over dates, defects periods and insurance arrangements, and safe segregation between occupied and construction areas. Operations readiness should start now: recruit or contract medical gas and HVAC maintenance competence, involve the estates team in commissioning and witness testing, review the draft O&M manuals, load the asset register into the maintenance system, and agree a training plan with assessment. Before occupation, the medical gas systems need full testing and certification by competent persons, theatre and isolation room pressure regimes and air changes need to be verified, fire safety systems and approvals must be in place, and standby power must be proven on load. A soft landings approach with the contractor and designers on call during the first months would help the hospital fine-tune systems safely."
    },
    {
     "type": "scenario",
     "title": "Ready to take over?",
     "situation": "A hypothetical solar park has passed its performance test and is exporting power. The contractor applies for the taking-over certificate. Outstanding items include SCADA historian data not yet transferred, O&M manuals still in draft, and the owner's operators trained on the inverters but not on the substation protection and switching. The owner's finance team wants taking over now because revenue recognition depends on it. What should the owner's project manager do FIRST?",
     "options": [
      {
       "text": "Refuse taking over until every document and every training session is complete, regardless of what the contract says.",
       "feedback": "Weak. The contract defines the conditions for taking over; refusing beyond them can be a breach and can delay the owner's own revenue for minor items.",
       "best": false
      },
      {
       "text": "Grant taking over immediately, since the plant is generating power and the performance test has passed.",
       "feedback": "Weak. Generation alone does not show that the owner can operate the substation safely; untrained switching on a live substation is a serious hazard.",
       "best": false
      },
      {
       "text": "Let the contractor's staff continue operating the whole plant indefinitely after taking over until the owner's team feels ready.",
       "feedback": "Weak. Open-ended arrangements blur responsibility and insurance, and do not solve the training gap.",
       "best": false
      },
      {
       "text": "Check the contract's taking-over criteria with the engineer, agree a dated list of outstanding deliverables, and require substation switching and protection training before owner staff operate the substation.",
       "feedback": "Best. This respects the contract, protects revenue where justified and closes the safety-critical gap before the owner takes operational control of high-voltage equipment.",
       "best": true
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think of an asset you have helped hand over or now operate. What one piece of information or training did the operators most need but not receive, and when in the project should it have been planned?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "As-built drawings",
       "def": "Drawings that record the works as actually constructed, including all changes made during construction, verified and handed to the owner for operation, maintenance and future modification."
      },
      {
       "term": "O&M manual",
       "def": "The project-specific set of operating and maintenance information for an asset – procedures, maintenance instructions, data sheets, drawings, spares lists and vendor documents."
      },
      {
       "term": "Operations readiness",
       "def": "The planned preparation of the owner's people, procedures, systems, spares, contracts and permits so that the asset can be operated and maintained safely and effectively from handover."
      },
      {
       "term": "Critical spares",
       "def": "Long-lead or high-consequence spare parts, such as a spare transformer or turbine component, held because their failure would otherwise cause a long and costly outage."
      },
      {
       "term": "Asset information model (AIM)",
       "def": "The structured collection of graphical, non-graphical and documentary information needed to operate and maintain an asset, handed over from the project and kept updated in operation."
      },
      {
       "term": "Handover dossier",
       "def": "The complete, organised package of records delivered to the owner at handover, including as-builts, O&M manuals, test and commissioning records, certificates, warranties and asset data."
      },
      {
       "term": "Soft landings",
       "def": "An approach in which designers and contractors involve operators from early in the project and remain engaged for a period after handover to support, monitor and fine-tune the asset in use."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Handover transfers care, custody and control; run operations readiness as a workstream that starts in design",
      "Judge the dossier on usability – verified as-builts, project-specific manuals, test-loaded asset data – not file counts",
      "Train and assess operators on the specific systems before they take control, especially high-voltage and safety-critical ones",
      "Make deliberate spares decisions and link warranty start dates to commissioning or taking over",
      "Soft landings keeps designers and builders engaged after handover to tune performance in use, including energy"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A vendor warranty for chillers starts on delivery to site. The building is delayed by a year. What is the main risk, and the best way to avoid it?",
       "options": [
        "The warranty may expire before operation; link its start to commissioning",
        "The chillers may be over-specified; reduce their capacity before installation",
        "The O&M manual may be outdated; ask the vendor for a revised edition",
        "The spares may be lost; store them in the owner's warehouse at delivery"
       ],
       "answer": 0,
       "explain": "Warranties that start at delivery can run out before equipment operates; negotiating a start linked to commissioning or taking over protects the owner."
      },
      {
       "q": "Which practice best ensures that as-built drawings reflect reality?",
       "options": [
        "Re-issuing the final design drawings with an as-built title block",
        "Asking the designer to update drawings from memory after handover",
        "Maintaining site redline mark-ups continuously and verifying critical items",
        "Photographing the completed site and attaching the images to the O&M manual"
       ],
       "answer": 2,
       "explain": "As-built information must be captured as changes happen and checked, for example by survey or scan. Re-titling design drawings or relying on memory loses changes."
      },
      {
       "q": "A spare generator step-up transformer with a long manufacturing lead time is purchased and stored at a power plant. What kind of spare is this?",
       "options": [
        "A commissioning spare",
        "A critical spare",
        "A start-up spare",
        "A consumable item"
       ],
       "answer": 1,
       "explain": "Long-lead, high-consequence items held to avoid long outages are critical, insurance or capital spares."
      },
      {
       "q": "What distinguishes a soft landings approach from a traditional handover?",
       "options": [
        "The contractor is released from all of its defects obligations at taking over",
        "Operators are involved early and designers and builders provide aftercare",
        "Handover takes place in a single event with all documents on one day",
        "The owner's staff are excluded from commissioning to avoid confusion"
       ],
       "answer": 1,
       "explain": "Soft landings involves operators from design onwards and keeps the delivery team engaged after handover to fine-tune performance."
      },
      {
       "q": "Which is the best evidence that asset data will be usable by the owner's maintenance team?",
       "options": [
        "The contractor confirms that it has delivered every file required",
        "The data folder size matches the volume expected for the project",
        "The asset data has been test-loaded into the owner's maintenance system",
        "The owner's finance team has approved the final asset valuation for the balance sheet"
       ],
       "answer": 2,
       "explain": "Test-loading proves the data is structured and complete enough for the maintenance system. Counting files or folder size proves nothing about usability."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l5",
   "title": "Closeout & Lessons Learned",
   "subtitle": "Contract closeout, final account, demobilisation, records, team release, reviews and lessons that change practice",
   "minutes": 35,
   "objectives": [
    "Close contracts and agree final accounts on the basis of clean records",
    "Plan demobilisation, records archiving and the release of the team",
    "Run a post-project review and a benefits realisation review",
    "Turn lessons into changed standards, templates and decisions"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Closeout is not an administrative tail. It settles money, releases securities, retires risks, preserves knowledge and gives people their next role. Projects that close badly keep leaking for years: final accounts that are never agreed, bonds that are never released, insurance that lapses at the wrong moment, and records that cannot be found when a latent defect or a claim appears. Good closeout is planned from the start, executed deliberately and owned by a named person, often while the most experienced people are already being pulled onto the next project. ISO 21502 guidance treats closing as a managed process in its own right, with the same planning and ownership as any other."
    },
    {
     "type": "flow",
     "title": "The closeout sequence",
     "items": [
      {
       "label": "Taking over",
       "text": "Asset handed over with outstanding items listed"
      },
      {
       "label": "Defects period",
       "text": "Defects remedied and performance monitored"
      },
      {
       "label": "Final account",
       "text": "Final contract sum agreed and certified"
      },
      {
       "label": "Securities released",
       "text": "Retention and performance security released as obligations are met"
      },
      {
       "label": "Records archived",
       "text": "Project and asset records stored and retention set"
      },
      {
       "label": "Reviews",
       "text": "Post-project review now; benefits realisation review later"
      }
     ]
    },
    {
     "type": "table",
     "title": "Six closeout workstreams",
     "head": [
      "Workstream",
      "Key activities",
      "Evidence of closure",
      "Typical owner"
     ],
     "rows": [
      [
       "Contractual",
       "Completion of all obligations, close-out of subcontracts and purchase orders, release of securities, settlement of claims",
       "Final certificates, signed closure of each contract, released bonds",
       "Contracts manager"
      ],
      [
       "Financial",
       "Final accounts, final payments, reconciliation of budgets and commitments, closure of cost codes",
       "Agreed final accounts, closed cost codes, final cost report",
       "Project controls or commercial lead"
      ],
      [
       "Physical",
       "Demobilisation of site facilities, removal of temporary works, reinstatement of land and access roads",
       "Reinstatement sign-off by landowners and authorities",
       "Construction manager"
      ],
      [
       "Information",
       "Archiving of project records, transfer of asset information, retention schedule set",
       "Archive index and confirmation of transfer to operations",
       "Document controller"
      ],
      [
       "People",
       "Release and redeployment of staff, performance feedback, recognition",
       "Release plan completed; appraisals and references given",
       "Project manager and HR"
      ],
      [
       "Benefits and learning",
       "Post-project review, lessons register, benefits realisation review plan",
       "Review report, actions assigned, benefits measures agreed",
       "Sponsor and PMO"
      ]
     ]
    },
    {
     "type": "text",
     "text": "The **final account** is the agreed final contract sum: the original contract price adjusted for valued variations, remeasured quantities, adjustments of provisional sums, price fluctuation where the contract allows it, settled claims and any deductions such as liquidated damages or contra-charges. The contractor typically submits a statement of final account, the engineer or quantity surveyor reviews it, the parties negotiate unresolved items, and a final payment certificate follows under the contract's procedure (see Procure for the mechanisms). The final account is only as good as the records behind it, which is why variations should be valued and agreed as the work proceeds rather than stockpiled for the end."
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Close as you go",
     "text": "Agree variation valuations monthly while the people and records are fresh. Close each subcontract or purchase order when its scope ends rather than all together at the end. Archive each work package's records as it completes. A project that has done this arrives at the final account with a short list of genuinely difficult items instead of hundreds of forgotten ones."
    },
    {
     "type": "text",
     "text": "**Demobilisation** is a planned activity with its own hazards and commitments: dismantling site offices and batching plants, removing temporary works and haul roads, disconnecting temporary utilities, returning hired plant, reconciling materials and disposing of surplus responsibly, and reinstating borrowed land, access roads and drainage as promised to landowners and communities (see Integrate). **Team release** deserves equal care. Plan it with HR months ahead, capture knowledge before key people leave, give honest performance feedback and references, and recognise contributions publicly – including those of subcontractors and the workforce. People remember how a project ended long after they forget how it started."
    },
    {
     "type": "checklist",
     "title": "Project closeout checklist",
     "items": [
      "All contracts and purchase orders formally closed, with no open commitments in the cost system",
      "Final accounts agreed and final payments made, or unresolved items documented with positions and evidence",
      "Retention and performance securities released or scheduled for release with dates",
      "Insurances, permits and site licences transferred to operations or formally closed",
      "Site demobilised, temporary works removed and land reinstated with sign-off from owners and authorities",
      "Project records archived with an index, retention periods and access rights",
      "Asset information transferred and confirmed usable by operations",
      "As-built carbon and environmental performance recorded against the carbon baseline and handed to the owner",
      "Team released with feedback and recognition; knowledge captured from key people",
      "Post-project review held and lessons register published with owners and dates",
      "Benefits realisation review scheduled, with measures and data sources agreed"
     ]
    },
    {
     "type": "steps",
     "title": "Running a post-project review",
     "items": [
      {
       "title": "Prepare the evidence",
       "text": "Gather baseline and actual cost, schedule, quality, safety and change data, the risk register and key decisions, so that the review is based on facts rather than memory."
      },
      {
       "title": "Invite a cross-section",
       "text": "Include the owner, designers, contractors, key subcontractors, operations staff and, where possible, people from the front line – not only senior managers."
      },
      {
       "title": "Set a blame-free tone",
       "text": "Make clear that the purpose is learning, not fault-finding. Use a neutral facilitator if relationships are strained or claims are still open."
      },
      {
       "title": "Analyse causes",
       "text": "For each major variance or success, ask why repeatedly until reaching causes that a future project could control."
      },
      {
       "title": "Agree lessons and actions",
       "text": "Turn each lesson into a specific change with an owner and a date – a revised standard, specification, template, checklist or contract clause."
      },
      {
       "title": "Publish and track",
       "text": "Publish the lessons register, report actions to the PMO or leadership, and check that the next projects actually use them."
      }
     ]
    },
    {
     "type": "framework",
     "title": "Lessons that change practice",
     "items": [
      {
       "label": "L1",
       "title": "Specific",
       "text": "Describe what happened, where and in what context, with enough detail that a stranger would understand it."
      },
      {
       "label": "L2",
       "title": "Caused",
       "text": "Identify the root cause, not the symptom – the late design input, not the delayed pour."
      },
      {
       "label": "L3",
       "title": "Actionable",
       "text": "Name the change that would prevent or repeat the outcome: a standard, template, specification clause, checklist or decision rule."
      },
      {
       "label": "L4",
       "title": "Owned",
       "text": "Give the change an owner with the authority to make it and a date by which it will be done."
      },
      {
       "label": "L5",
       "title": "Verified",
       "text": "Check later that the change was adopted and made a difference on a subsequent project."
      }
     ]
    },
    {
     "type": "cycle",
     "title": "The lessons-learned loop",
     "center": "Changed practice",
     "items": [
      {
       "label": "Capture evidence",
       "text": "Facts from records and front-line people, not memory"
      },
      {
       "label": "Find root cause",
       "text": "Ask why until reaching a cause a future project can control"
      },
      {
       "label": "Change the standard",
       "text": "Specification, template, checklist or contract clause, with an owner and date"
      },
      {
       "label": "Apply next project",
       "text": "The change is used at the right stage of the next project"
      },
      {
       "label": "Verify the result",
       "text": "Check that it was adopted and made a difference; if not, go round again"
      }
     ],
     "caption": "A lessons register that stops after the first step is only a diary. The loop closes when a later project shows the changed standard working."
    },
    {
     "type": "template",
     "title": "Lessons learned register",
     "purpose": "Capture lessons in a form that leads to a specific change in practice, with an owner and evidence that the change was adopted.",
     "columns": [
      "Lesson (what happened)",
      "Root cause",
      "Change to practice",
      "Owner",
      "Due date",
      "Applied on",
      "Verified result"
     ],
     "example": [
      [
       "Pile caps delayed by unrecorded utilities on two metro stations",
       "Utility verification not required before foundation design freeze",
       "Trial pits and radar survey added as design-stage deliverables in the design brief template",
       "Head of design management",
       "Next design brief revision",
       "Line extension package 2",
       "No unrecorded utility conflicts at pier positions"
      ],
      [
       "Boiler first fire delayed by incomplete gas leak-test records",
       "Leak-test records not linked to the completions database",
       "Leak-test certificates made a mandatory field for mechanical completion of fuel gas subsystems",
       "Commissioning manager",
       "Before next start-up",
       "Mill boiler 2",
       "Records complete at review; first fire on plan"
      ]
     ],
     "rows": 6
    },
    {
     "type": "text",
     "text": "A **benefits realisation review** returns, months or years after handover, to the benefits promised in the business case (developed in Justify) and measures whether they arrived: the effluent treatment plant meeting discharge standards consistently, the new production line reaching its rated output, the substation reducing outages, the hospital wards reducing waiting times. The review needs measures and data sources agreed at closeout, an owner in the operating organisation, and an honest comparison with the original assumptions. Its findings are among the most valuable lessons an organisation has, because they test whether its investment decisions were sound. Owners that publish sustainability disclosures – increasingly aligned with IFRS S1 and S2 (2023) – also need reliable as-built carbon and energy data, so secure it at closeout while the evidence is available, ideally against a carbon baseline managed in the PAS 2080 way."
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Benefit ramp-up vs business case (illustrative)",
     "labels": [
      "Q1",
      "Q2",
      "Q3",
      "Q4",
      "Q5",
      "Q6",
      "Q7",
      "Q8"
     ],
     "series": [
      {
       "name": "Business case",
       "values": [
        60,
        80,
        100,
        100,
        100,
        100,
        100,
        100
       ]
      },
      {
       "name": "Measured in operation",
       "values": [
        45,
        62,
        75,
        82,
        86,
        88,
        89,
        90
       ]
      }
     ],
     "unit": "%",
     "yLabel": "Output, % of rated",
     "caption": "Illustrative data for a new production line, by quarter after handover. Output plateaus about 10 points below the business case – the review must find out whether the assumption, the asset or its operation explains the gap."
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Close the loop",
     "text": "The ZEPMS Delivery Loop is a loop, not a line. Lessons from commissioning, handover and benefits reviews should change the next business case, scope definition, schedule norms, estimates, risk registers and contract strategies. An organisation that captures lessons but never changes its standards is only keeping a diary."
    },
    {
     "type": "scenario",
     "title": "The final account standoff",
     "situation": "A hypothetical expressway interchange has been taken over. Of forty variations, twelve remain unagreed, and the contractor is demobilising. The owner's quantity surveyor, who knows the history of every variation, is due to move to another project next month. The owner's finance team wants the project closed in the accounts this quarter. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Pay the contractor's figure for the twelve variations so that the project can be closed in the accounts this quarter.",
       "feedback": "Weak. Paying unverified sums to meet an accounting date wastes money and sets a poor precedent; closure must follow agreement, not replace it.",
       "best": false
      },
      {
       "text": "Withhold all remaining payments until the contractor withdraws its claims for the twelve disputed variations.",
       "feedback": "Weak. Using payment as leverage beyond what the contract allows can breach it and escalate the dispute.",
       "best": false
      },
      {
       "text": "Before the surveyor leaves, secure the records, set up a time-bound final account plan with joint valuation meetings, and document positions on each item.",
       "feedback": "Best. This protects the knowledge and evidence that will decide the outcome, creates a structured path to agreement, and gives finance a realistic closure date.",
       "best": true
      },
      {
       "text": "Close the project now and pass the twelve variations to the legal department to resolve later if the contractor pursues them.",
       "feedback": "Weak. Handing unresolved items to lawyers without records or a negotiation attempt makes a dispute more likely and more expensive.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think of a lesson your organisation has 'learned' more than once. Why did it not change practice the first time, and which of the five criteria – specific, caused, actionable, owned, verified – was missing?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Final account",
       "def": "The agreed final contract sum, being the original price adjusted for valued variations, remeasurement, provisional sums, fluctuations, settled claims and deductions, leading to the final payment certificate."
      },
      {
       "term": "Contract closeout",
       "def": "The process of confirming that all obligations under a contract have been met, settling outstanding payments and claims, releasing securities and formally closing the contract."
      },
      {
       "term": "Demobilisation",
       "def": "The planned removal of the contractor's people, plant, temporary facilities and materials from site, including reinstatement of land and disconnection of temporary services."
      },
      {
       "term": "Post-project review",
       "def": "A structured, evidence-based review held at or soon after project completion to understand what went well and badly, why, and what should change in future practice."
      },
      {
       "term": "Benefits realisation review",
       "def": "A review carried out after the asset has been in operation for some time to measure whether the benefits promised in the business case have been achieved, and why or why not."
      },
      {
       "term": "Lessons learned register",
       "def": "A controlled record of lessons from projects, each with its root cause, the change to practice it requires, an owner, a due date and evidence of adoption."
      },
      {
       "term": "Records retention schedule",
       "def": "A defined list of project and asset record types with how long each must be kept, where, in what format and who may access it, reflecting contractual, legal and operational needs."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Plan closeout from the start across six workstreams: contractual, financial, physical, information, people, benefits and learning",
      "Close as you go: agree variations monthly and close each subcontract when its scope ends",
      "Secure records and key people's knowledge before they leave, and keep records under a retention schedule",
      "A lesson counts only when it changes a standard, template or decision – with an owner and later verification",
      "Measure benefits in operation against the business case and feed the gaps into future investment standards"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Why should variations be valued and agreed as the work proceeds rather than at the end of the project?",
       "options": [
        "Contracts never allow variations to be valued after taking over",
        "Records and people are available, so agreement is faster and fairer",
        "It allows the owner to avoid paying for most of the variations",
        "It removes the need for any final account at the very end of the project"
       ],
       "answer": 1,
       "explain": "Contemporaneous valuation uses fresh records and the people who were there. It does not remove the final account or avoid legitimate payment."
      },
      {
       "q": "Which is the best example of a lesson that will change practice?",
       "options": [
        "Communication between design and site should be improved next time",
        "The project team should try much harder next time to avoid delays to the critical path",
        "Utility surveys will be a design deliverable before foundation design freeze",
        "The project experienced many problems with buried services in year one"
       ],
       "answer": 2,
       "explain": "A useful lesson names a specific change that can be owned and verified. The others describe symptoms or wishes."
      },
      {
       "q": "When is a benefits realisation review normally carried out?",
       "options": [
        "After the asset has operated for long enough to measure its benefits",
        "At the stage gate before the investment decision is approved",
        "During commissioning, alongside the performance guarantee tests",
        "On the day that the taking-over certificate is issued by the engineer"
       ],
       "answer": 0,
       "explain": "Benefits appear in operation, so they can only be measured after a period of use; the measures should be agreed at closeout."
      },
      {
       "q": "Who should normally take part in a post-project review?",
       "options": [
        "Only the sponsor and the project manager, to keep it confidential",
        "Only the contractor, because it carried out most of the physical work",
        "Only the PMO, which can compare results across the organisation",
        "A cross-section of owner, designers, contractors and operations staff"
       ],
       "answer": 3,
       "explain": "Different parties saw different parts of the story; a cross-section produces a fuller and fairer picture."
      },
      {
       "q": "A contractor demobilises and leaves a borrowed field with compacted soil and broken drainage, contrary to a promise to the landowner. Which closeout workstream has failed?",
       "options": [
        "Financial",
        "Information",
        "Physical",
        "People"
       ],
       "answer": 2,
       "explain": "Reinstatement of land and access is part of physical closeout and is often a community commitment as well."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m5",
  "q": "On a Chattogram container terminal project, the crane supplier formally notifies a ten-week shipping delay for two ship-to-shore cranes. The register lists 'crane delivery may slip' as an open risk. What should the project manager do FIRST?",
  "options": [
   "Run a new identification workshop on supplier risks before taking any action on the cranes",
   "Raise the probability score of the crane risk to 5 and continue monitoring it closely at the next monthly risk review",
   "Draw down the full contingency allocated to the crane package before the impact is known",
   "Treat it as an issue: assess the critical-path impact, decide recovery actions and record that the risk has occurred"
  ],
  "answer": 3,
  "explain": "The event has happened, so it is now an issue requiring decisions. Rescoring it as a risk delays action, drawing contingency before quantifying the impact skips control, and a workshop does not address the delay."
 },
 {
  "module": "m5",
  "q": "A river intake cofferdam risk has a 30% probability and a USD 1.2m impact. A sheet-pile upgrade costing USD 150k would reduce the probability to 10%. On expected value, what is the net value of the upgrade?",
  "options": [
   "USD 240k, so it is clearly worth funding at once",
   "-USD 30k, so it should be rejected as uneconomic",
   "USD 90k, so it is worth funding on expected value",
   "USD 210k, so it should be funded from contingency"
  ],
  "answer": 2,
  "explain": "Exposure falls from 0.30 x 1.2m = 360k to 0.10 x 1.2m = 120k, a reduction of 240k; subtracting the 150k cost leaves +90k. The other figures omit the response cost or misapply the formula."
 },
 {
  "module": "m5",
  "q": "A hypothetical hospital project's register contains a threat with a 20% chance of costing USD 500k, a threat with a 50% chance of costing USD 120k, and an opportunity with a 40% chance of saving USD 150k. What is the net EMV?",
  "options": [
   "-USD 220k, an expected net cost to the project",
   "-USD 100k, an expected net cost to the project",
   "-USD 160k, an expected net cost to the project",
   "+USD 40k, an expected net saving to the project"
  ],
  "answer": 1,
  "explain": "EMV = -100k - 60k + 60k = -USD 100k. Ignoring the opportunity gives -160k; -220k adds the opportunity as a cost; +40k does not weight the impacts by probability."
 },
 {
  "module": "m5",
  "q": "A cost risk analysis for a hypothetical LNG jetty gives a base estimate of USD 92m, P50 of USD 98m, P80 of USD 104m and P90 of USD 108m. The owner's policy is to fund to P80. How much risk contingency should be added to the base estimate?",
  "options": [
   "USD 12m, the gap between the base and the P80 value",
   "USD 16m, the gap between the base and the P90 value",
   "USD 104m, which is the full P80 value held as contingency",
   "USD 6m, the gap between the base and the P50 value"
  ],
  "answer": 0,
  "explain": "Risk-based contingency is the chosen confidence value minus the base estimate: 104m - 92m = 12m, so the funded total is the P80 of 104m. The P50 and P90 gaps reflect different appetites, and the full P80 value is the funded total, not the contingency."
 },
 {
  "module": "m5",
  "q": "A planner presents a commissioning date built from the most likely duration of every activity. The schedule risk analysis says this date has only a 10% chance of being met, and the sponsor asks how that is possible. What is the best explanation?",
  "options": [
   "The simulation software adds a standard safety margin to every activity duration before it runs the model",
   "Most-likely durations are always the pessimistic estimates provided by the contractor's planners",
   "Monte Carlo results are random, so a second run would probably show a much higher probability",
   "Right-skewed ranges, merge bias and risk events push most outcomes later than the single-point plan"
  ],
  "answer": 3,
  "explain": "Skew puts each mean above its most likely value, merge bias makes joint on-time completion unlikely, and risk events add delay. Simulations do not add hidden margins, and with enough iterations results are stable between runs."
 },
 {
  "module": "m5",
  "q": "A subcontractor will start pulling cables in a basement substation tomorrow. Its RAMS was copied from another project, has been signed by the foreman but has not been briefed to the crew, and does not mention the live switchboard in the next room. What should the project manager require FIRST?",
  "options": [
   "That work goes ahead, with the HSE officer checking compliance very closely during the first shift",
   "That the subcontractor is replaced by a firm with a better recorded accident history",
   "That the RAMS is revised for this task and location and briefed to the crew before work starts",
   "That each worker signs the existing generic document again to confirm it has been read"
  ],
  "answer": 2,
  "explain": "RAMS protect people only when task-specific and briefed. Supervising a generic plan does not close the gap, replacing the firm is disproportionate as a first step, and extra signatures do not add any control."
 },
 {
  "module": "m5",
  "q": "A metro station's monthly safety report shows six months with no lost-time injuries. Over the same period near-miss reports fell sharply, and a walk-round audit found missing edge protection on two levels. What is the best interpretation?",
  "options": [
   "Performance is excellent, so safety inspection resources can be reduced for the next quarter",
   "Reporting may have collapsed, so good injury figures could be hiding rising risk that needs investigating",
   "The fall in near-miss reports shows that most hazards on the site have now been eliminated",
   "Lagging indicators are reliable on their own, so the leading indicators can now be dropped from the report"
  ],
  "answer": 1,
  "explain": "Falling near-miss reports alongside visible hazards suggest under-reporting, not safety. Lagging measures can look good by chance; leading indicators and audits reveal the real conditions."
 },
 {
  "module": "m5",
  "q": "A lender's monitoring consultant finds that the contractor's price for a hypothetical 220 MW power plant excludes the cost of ESMP measures and that the site has no grievance log, although villagers live next to the haul road. What should the owner's project manager do FIRST?",
  "options": [
   "Require a priced construction ESMP and a working grievance mechanism, managed as contract obligations",
   "Ask the regulator to waive the requirements because the environmental clearance has already been issued",
   "Wait for the first formal community complaint before investing in a grievance process on site",
   "Transfer all environmental responsibility to the contractor and stop the owner's compliance audits"
  ],
  "answer": 0,
  "explain": "ESMP measures must be priced and contractually required, and a grievance mechanism must exist before complaints escalate. A clearance does not remove obligations, and the owner cannot hand away its oversight role."
 },
 {
  "module": "m6",
  "q": "An owner is planning a hypothetical 400 MW combined-cycle plant. The gas turbine has a long manufacturing lead time, but the EPC tender will not be issued for another nine months. What should the project manager recommend to protect the schedule?",
  "options": [
   "Reserve or order the turbine now under an owner contract designed to be novated to the EPC contractor",
   "Wait for the EPC contractor, since any early turbine order would remove the single-point responsibility",
   "Ask the turbine vendor to hold its current price until the EPC contractor is finally appointed next year",
   "Shorten the EPC tender period to three weeks so that the contractor can place the turbine order sooner"
  ],
  "answer": 0,
  "explain": "Early reservation with planned novation protects the critical path while preserving single-point responsibility. Waiting lets the lead time drive completion, price holds do not secure a slot, and a rushed tender raises risk premiums."
 },
 {
  "module": "m6",
  "q": "A target cost contract has a target of USD 50m, a fixed fee of USD 3m and a 50:50 pain/gain share. The actual cost is USD 46m. How much does the owner pay the contractor?",
  "options": [
   "USD 49m, which is the actual cost plus the fee less the shared gain",
   "USD 46m, which is the actual cost alone because the target was not reached",
   "USD 53m, which is the target cost plus the full fixed fee for the contract",
   "USD 51m, which is the actual cost plus the fee plus a USD 2m gain share"
  ],
  "answer": 3,
  "explain": "Payment = 46 + 3 + 0.5 x (50 - 46) = 46 + 3 + 2 = USD 51m. The contractor earns a bonus for underspending; the other answers reverse the share, ignore it or drop the fee."
 },
 {
  "module": "m6",
  "q": "After a cyclone damages a coastal embankment, an owner needs urgent repairs to start within days, before the extent of the damage can be surveyed. Which pricing mechanism is most appropriate for the first phase?",
  "options": [
   "A lump sum, so that the owner has full price certainty from the very first day",
   "A remeasurement contract based on a bill of quantities prepared after the survey",
   "A cost-reimbursable contract with a fixed fee and tight cost verification controls",
   "A guaranteed maximum price agreed after the contractor's design is fully complete and checked"
  ],
  "answer": 2,
  "explain": "When work must start before the scope can be defined, cost-reimbursable with a fixed fee is practical, with cost verification controls; once the damage is surveyed, later phases can move to a target cost or remeasured contract. Lump sum, remeasurement and GMP all need definition that does not yet exist."
 },
 {
  "module": "m6",
  "q": "In a tender with a 30-point price weight, the lowest normalised price is USD 12m. Another tender has a normalised price of USD 15m. What price score does it receive?",
  "options": [
   "30 points, because it is a fully compliant tender",
   "24 points, from 12 divided by 15, times 30",
   "15 points, as the price weight less 15 points",
   "22.5 points, as three quarters of the price weight"
  ],
  "answer": 1,
  "explain": "Price score = (12 / 15) x 30 = 24. Only the lowest tender gets the full 30; the other answers apply invented rules rather than the published formula."
 },
 {
  "module": "m6",
  "q": "The lowest tender for a hypothetical river protection package is 30% below the engineer's estimate and well below the other bids. The procurement officer wants to award immediately to save money. What should the project manager do FIRST?",
  "options": [
   "Ask the bidder in writing to explain and substantiate its prices before any award decision",
   "Award immediately, because the procurement rules require the lowest evaluated price to be accepted",
   "Reject the tender at once, since any bid this far below the estimate must be unrealistic",
   "Invite the other bidders to revise their prices downwards to match the lowest tender"
  ],
  "answer": 0,
  "explain": "An abnormally low tender must be investigated before award: it may be genuine or may hide errors or a claims strategy. Automatic award or rejection skips that check, and inviting others to match is bid shopping."
 },
 {
  "module": "m6",
  "q": "On a hypothetical design-build pumping station, the contractor's excavation hits strong artesian water that the site investigation did not reveal and an experienced contractor could not have foreseen. What should the contractor do FIRST?",
  "options": [
   "Continue the work and include the extra cost in the final account at the end of the contract",
   "Refer the matter directly to arbitration so that the entitlement is decided quickly and finally",
   "Stop all work on site until the employer agrees in writing to pay for the dewatering costs",
   "Give written notice of the event within the contract period and start keeping detailed records"
  ],
  "answer": 3,
  "explain": "Timely notice preserves entitlement and contemporaneous records prove it. Waiting risks a time bar, stopping work may be a breach, and arbitration is the last step, not the first."
 },
 {
  "module": "m6",
  "q": "A programme analysis shows that a late owner-supplied transformer and the contractor's own late switchgear installation both delayed completion by the same three weeks, each on its own. Under a common approach to concurrent delay, what is the contractor likely to receive?",
  "options": [
   "Three weeks' extension of time with full prolongation costs for the whole three weeks",
   "No extension of time, so delay damages apply for the full three-week period",
   "Three weeks' extension of time but no prolongation costs for the concurrent period",
   "Prolongation costs for the three weeks but no extension of the completion date"
  ],
  "answer": 2,
  "explain": "A common approach to genuine concurrency gives time, so no delay damages, but not money, because the contractor would have incurred the cost anyway. Contracts and governing law can change this, so the terms must be checked."
 },
 {
  "module": "m7",
  "q": "A hypothetical 220 kV transmission line crosses farmland, a river and a highway. Six weeks before stringing, the roads authority has not approved the highway crossing and nobody on the team owns the application. What should the project manager do FIRST?",
  "options": [
   "Report the missing approval to the steering committee as a new risk and wait for it to decide on the next step",
   "Instruct the contractor to string the highway span at night when traffic is light, then apply retrospectively for the crossing approval",
   "Assign a named owner, add the approval and its prerequisites to the schedule and consents register, and engage the authority directly",
   "Redesign the line route to avoid the highway entirely so that no roads authority approval is needed at all"
  ],
  "answer": 2,
  "explain": "The gap is ownership and visibility of a critical-path consent: a named owner, schedule logic and direct engagement solve it. Working without approval is unlawful and unsafe, escalation without action wastes time, and a reroute is a disproportionate first response."
 },
 {
  "module": "m7",
  "q": "During a weekly meeting on a hypothetical garment factory expansion near Gazipur, a junior site engineer hesitates and then says quietly that some column rebar looked congested. The construction manager dismisses the comment. What is the best leadership response from the project manager?",
  "options": [
   "Support the construction manager publicly to protect his authority, then check the columns quietly later in the week",
   "Thank the engineer, ask for specifics, arrange an immediate check before the next pour, and report back what was found",
   "Ask the engineer to submit a written report through the formal quality channel so it can be logged and reviewed in time",
   "Note the comment in the minutes and move on, since the construction manager has more experience of column details"
  ],
  "answer": 1,
  "explain": "Acting visibly on a concern builds psychological safety and may prevent a defect before concrete covers it. Quiet checks or formal delays signal that speaking up is not valued, and deferring to seniority ignores evidence."
 },
 {
  "module": "m7",
  "q": "A contractor installing ducts in a hospital plantroom finds that the drawing shows a duct passing through a beam. It needs an answer within three days to avoid stopping work. Which document should it raise?",
  "options": [
   "A request for information citing both drawings with a proposed solution",
   "A transmittal listing all of the current mechanical and structural drawings on site",
   "A non-conformance report against the structural designer's drawings",
   "A submittal containing shop drawings for the engineer's formal review"
  ],
  "answer": 0,
  "explain": "An RFI asks the designer to resolve conflicting design information, ideally with references and a proposed solution. A submittal seeks acceptance of the contractor's own documents, a transmittal only records issue, and an NCR records work that does not conform."
 },
 {
  "module": "m7",
  "q": "Clash detection on a federated model for a hypothetical semiconductor fab returns 4,000 raw clashes in one zone. What should the BIM coordinator do next?",
  "options": [
   "Send the full clash list to every discipline lead and ask each team to resolve its own clashes independently",
   "Release the zone for installation and let site supervisors resolve the clashes in the field as they appear",
   "Increase the clash tolerance until the count falls to a level that the coordination team can comfortably review in one meeting",
   "Group the raw clashes into real issues, remove false positives, prioritise by construction sequence, and assign owners"
  ],
  "answer": 3,
  "explain": "Raw clash counts include duplicates and trivial items; grouping, prioritising and assigning owners turns them into manageable issues. Blanket distribution creates confusion, loosening tolerances hides real problems, and field resolution causes rework."
 },
 {
  "module": "m7",
  "q": "An owner wants its new port terminal to have a digital twin that predicts crane and conveyor failures. At what point should the asset information requirements be defined?",
  "options": [
   "During commissioning, when sensors are first connected to the control system for the first time",
   "After taking over, once operations staff have experience of the new equipment and its failures",
   "At the start of the project, so that design and handover deliver the data the twin needs",
   "During the defects period, when the contractor is still available to answer questions about the data"
  ],
  "answer": 2,
  "explain": "Asset information requirements – in ISO 19650 terms, derived from what the organisation needs to operate the asset – shape what is modelled, tagged, sensed and handed over, so they must be defined at the start. Defining them later means retrofitting data that was never collected, which is expensive or impossible."
 },
 {
  "module": "m7",
  "q": "A computer-vision tool for detecting people inside excavator exclusion zones achieves high precision but low recall in trials. What does this mean for its use on a hypothetical expressway project?",
  "options": [
   "It raises too many false alarms, so supervisors will stop trusting its alerts",
   "It misses many real intrusions, so it cannot be relied on as a primary safeguard",
   "It is accurate enough to replace banksmen and physical barriers around plant",
   "It needs larger cameras with wider lenses to reduce the number of alerts that it raises"
  ],
  "answer": 1,
  "explain": "Low recall means many real events go undetected, which is dangerous for a life-safety use. High precision means alerts are mostly real, so false alarms are not the problem; the tool supports but cannot replace physical controls and banksmen."
 },
 {
  "module": "m7",
  "q": "A project manager on a hypothetical offshore wind project wants to use a public AI chatbot to summarise the full EPC contract, including its pricing schedules. What should the project manager do?",
  "options": [
   "Use only tools approved for confidential information, and have a person verify the summary",
   "Upload only the pricing schedules, since those are the hardest sections to read through",
   "Upload the contract, because summarising text is a low-risk task for any AI chatbot",
   "Ask the contractor to upload the contract instead, so that the confidentiality risk is shared"
  ],
  "answer": 0,
  "explain": "Confidential contract information should go only into tools the organisation has approved for that class of information under its AI and information-security policy, and any summary must be verified by a competent person before use. Uploading to an unapproved tool risks disclosure regardless of who does it."
 },
 {
  "module": "m7",
  "q": "On a hypothetical elevated expressway, the monthly report shows every package as green, yet the critical-path girder erection is four weeks behind. The RAG thresholds were never written down. What should the project manager change first?",
  "options": [
   "Add more indicators to the report so that every package has at least ten measures",
   "Replace the RAG ratings with a written narrative for each package written by its lead",
   "Ask package managers to rate their own packages more strictly from the next month",
   "Define written thresholds for each RAG status, linked to schedule and cost tolerances"
  ],
  "answer": 3,
  "explain": "RAG ratings mean nothing without written thresholds tied to tolerances; defining them makes status objective. More indicators add noise, narratives lose comparability, and asking for stricter self-rating keeps the judgement subjective."
 },
 {
  "module": "m8",
  "q": "On a hypothetical LNG terminal, the QA/QC manager reports to the construction manager, who is measured mainly on progress. Inspectors say they are pressured to release hold points quickly. What should the project manager change FIRST?",
  "options": [
   "Increase the number of inspectors so that every hold point can be released faster without delaying the work",
   "Ask the construction manager to sign a declaration that inspectors will not be pressured in future",
   "Remove hold points from the ITPs for low-risk activities so that inspectors face fewer release decisions",
   "Make the QA/QC manager report independently of construction, as set out in the project quality plan"
  ],
  "answer": 3,
  "explain": "Independence of inspection is a structural safeguard; reporting to the person measured on progress creates a conflict of interest. More inspectors or fewer hold points do not remove the pressure, and a declaration changes nothing about the incentives."
 },
 {
  "module": "m8",
  "q": "A package on a hypothetical cement plant records prevention 25, appraisal 45, internal failure 120 and external failure 60 (thousands). What are the cost of quality and the COPQ share?",
  "options": [
   "COQ 250 thousand; COPQ share 28%",
   "COQ 180 thousand; COPQ share 72%",
   "COQ 250 thousand; COPQ share 72%",
   "COQ 250 thousand; COPQ share 48%"
  ],
  "answer": 2,
  "explain": "COQ = 25 + 45 + 120 + 60 = 250. COPQ = 120 + 60 = 180, and 180 / 250 = 72%. The 28% figure is the cost of conformance share, 180 is COPQ itself rather than COQ, and 48% uses internal failure alone."
 },
 {
  "module": "m8",
  "q": "During a pre-pour inspection on a hypothetical viaduct pier, the engineer's inspector is delayed by two hours. The contractor's foreman says the rebar is fine and wants to pour before the concrete trucks queue. The ITP shows a hold point. What should happen?",
  "options": [
   "The pour proceeds because the contractor's foreman has the authority to release his own work",
   "The pour waits for the inspector's written release, and the delay is recorded for later review",
   "The pour proceeds after photographs of the rebar are taken and sent to the inspector by phone",
   "The pour proceeds with an NCR raised in advance so that any defect can be dealt with afterwards"
  ],
  "answer": 1,
  "explain": "A hold point means no further work without written release from the named party. Photos, self-release or a pre-emptive NCR all bypass the control the ITP created; recording the delay supports any later discussion of cost or time."
 },
 {
  "module": "m8",
  "q": "Construction on a hypothetical combined-cycle plant reports 92% overall progress, but the commissioning team has accepted only two of thirty systems. What is the most likely cause, and the right response?",
  "options": [
   "Progress is measured by area and quantity; switch the remaining construction schedule to system completion priorities",
   "The commissioning team is too slow and should be enlarged with additional vendor specialists from the turbine supplier",
   "The progress percentage is wrong and should be recalculated by the planner using weighted milestones for each area",
   "The systemisation boundaries are too small and should be merged into fewer, larger systems to speed up acceptance"
  ],
  "answer": 0,
  "explain": "High area progress with few complete systems is the classic sign that construction is not working in commissioning sequence. More commissioning staff, recalculated progress or larger systems do not complete the missing items that block each system."
 },
 {
  "module": "m8",
  "q": "A hypothetical biomass boiler fails its performance test because measured steam output is below the guarantee. The contractor says the fuel was wetter than the design fuel. What should the owner's project manager check FIRST?",
  "options": [
   "Whether the boiler's warranty period has already started under the terms of the supply contract",
   "Whether the operators who ran the test had completed all of their training on the new boiler",
   "Whether the boiler vendor has delivered the complete set of critical spares on time",
   "Whether the test procedure and corrections to reference fuel conditions were applied as agreed"
  ],
  "answer": 3,
  "explain": "Performance results are only meaningful when the agreed procedure and corrections to reference conditions, such as fuel moisture, have been applied. Warranty dates, training and spares matter elsewhere but do not decide whether the guarantee was met."
 },
 {
  "module": "m8",
  "q": "Six months after handover of a hypothetical metro depot, maintenance staff cannot find the isolation points for several HVAC units because the as-built drawings show the design layout. What does this most clearly indicate?",
  "options": [
   "The depot was handed over too early, before the HVAC performance tests were complete",
   "The O&M manuals were too long for the maintenance staff to read in the time available",
   "Site changes were not captured continuously as redlines and verified before handover",
   "The maintenance staff did not receive enough classroom training on the building systems"
  ],
  "answer": 2,
  "explain": "As-builts that show the design layout mean field changes were never recorded. Manual length, early handover or training do not explain drawings that fail to match what was built."
 },
 {
  "module": "m8",
  "q": "At the closeout of a hypothetical hospital project, the team produces a lessons list that says 'improve coordination' and 'plan earlier'. The PMO notes the same lessons appeared on the last three projects. What should the project manager do?",
  "options": [
   "Circulate the list more widely across the organisation so that more people read the lessons this time",
   "Rework each lesson into a specific change with a root cause, owner, due date and later verification",
   "Add the lessons to the risk register of the next project as generic risks with a low rating",
   "Remove the repeated lessons from the register, since they are already well known to everybody"
  ],
  "answer": 1,
  "explain": "Generic lessons do not change practice; specific, owned and verified changes do. Wider circulation, deletion or adding vague risks all leave the underlying practice unchanged."
 }
]);
