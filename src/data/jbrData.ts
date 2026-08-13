import { SectorItem, JournalArticle, FounderNote, OfficeLocation } from '../types';

export const SECTORS: SectorItem[] = [
  {
    id: 'ag',
    code: '01',
    title: 'Agriculture',
    subtitle: 'The Ground.',
    slug: 'sector-ag',
    description: 'Autonomous crop management, synthetic soil restoration, and micro-climate yield forecasting.',
    fullOverview: 'Food security and agricultural resilience require fundamental shifts in how physical soil is treated and monitored. JBR backs technology that optimizes yield per square meter without depleting underlying ecological capital.',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop',
    stats: [
      { label: 'Managed Land Index', value: '1.4M Acres' },
      { label: 'Water Input Reduction', value: '42.8%' },
      { label: 'Yield Multiplier', value: '3.4x' },
      { label: 'Capital Deployed', value: '$340M' }
    ],
    focusAreas: [
      {
        title: 'Autonomous Soil Sensors & Real-time Microbiome',
        desc: 'Continuous spectrographic monitoring of nitrogen, micro-nutrients, and moisture levels at 10cm depth intervals.'
      },
      {
        title: 'Regenerative closed-loop Irrigation Grids',
        desc: 'Sub-surface drip networks controlled by micro-weather machine learning models that eliminate surface evaporation.'
      },
      {
        title: 'Robotic Harvester Platforms',
        desc: 'Heavy battery-electric field units designed for zero-compaction movement and multi-crop selective picking.'
      }
    ],
    portfolio: [
      {
        name: 'TerraForm Ag',
        tagline: 'Precision Soil Health & Spectrographic Mapping',
        status: 'Active Operating Unit',
        founded: '2022',
        location: 'Sacramento, CA',
        metric: '850k Acres Monitored'
      },
      {
        name: 'Verdant Hydro Systems',
        tagline: 'Automated Sub-surface Drip Infrastructure',
        status: 'Active Operating Unit',
        founded: '2023',
        location: 'Almería, Spain',
        metric: '42% Water Saved'
      },
      {
        name: 'AeroCrop Robotics',
        tagline: 'Autonomous Heavy Harvest Mobility',
        status: 'Scale Phase',
        founded: '2024',
        location: 'Melbourne, Australia',
        metric: '120 Autonomous Units'
      }
    ]
  },
  {
    id: 're',
    code: '02',
    title: 'Real Estate',
    subtitle: 'The Structure.',
    slug: 'sector-re',
    description: 'High-density timber construction, net-positive urban infill, and modular thermal envelopes.',
    fullOverview: 'The future of built environments lies in speed of deployment and carbon-negative materials. JBR invests in engineered mass timber, energy-independent residential blocks, and industrial modular factories.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    stats: [
      { label: 'Portfolio AUM', value: '$680M' },
      { label: 'Urban Infill Units', value: '2,400+' },
      { label: 'Embodied Carbon Reduced', value: '64%' },
      { label: 'Prefab Delivery Time', value: '-60%' }
    ],
    focusAreas: [
      {
        title: 'Mass Timber Structural Systems',
        desc: 'Cross-laminated timber core framing replacing steel and concrete in mid-rise urban residential developments.'
      },
      {
        title: 'Energy-Positive Thermal Envelopes',
        desc: 'Quadruple-glazed insulated wall panels featuring integrated solar skin micro-generation.'
      },
      {
        title: 'Automated Factory Pre-Assembly',
        desc: 'Robotic panelization facilities producing zero-defect residential modules delivered directly to site.'
      }
    ],
    portfolio: [
      {
        name: 'Kiln Mass Timber',
        tagline: 'Carbon-Negative Engineered Wood Structures',
        status: 'Active Operating Unit',
        founded: '2021',
        location: 'Portland, OR',
        metric: '18 Completed Towers'
      },
      {
        name: 'Aether Living',
        tagline: 'Modular Net-Zero Urban Housing',
        status: 'Active Operating Unit',
        founded: '2022',
        location: 'Stockholm, Sweden',
        metric: '1,200 Modules Built'
      },
      {
        name: 'Form & Frame Robotics',
        tagline: 'Off-site Automated Wall Assembly Systems',
        status: 'Scale Phase',
        founded: '2023',
        location: 'Frankfurt, Germany',
        metric: '3 Active Factories'
      }
    ]
  },
  {
    id: 'trans',
    code: '03',
    title: 'Transport',
    subtitle: 'The Distance.',
    slug: 'sector-trans',
    description: 'Zero-emission heavy freight corridors, autonomous maritime navigation, and air corridor routing.',
    fullOverview: 'Moving physical goods across land, sea, and air accounts for a vast percentage of global friction. JBR builds high-throughput, electric freight networks and autonomous port logistics.',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop',
    stats: [
      { label: 'Autonomous Miles', value: '4.8M+' },
      { label: 'Tailpipe CO2 Emissions', value: '0.0%' },
      { label: 'Freight Corridors', value: '14 Active' },
      { label: 'Dispatch Reliability', value: '99.8%' }
    ],
    focusAreas: [
      {
        title: 'Electrified Heavy Freight Logistics',
        desc: 'High-megawatt mega-charging corridors for long-haul Class 8 commercial fleets.'
      },
      {
        title: 'Autonomous Port & Yard Mobility',
        desc: 'Self-driving yard tractors and automated gantry crane scheduling systems for deepwater ports.'
      },
      {
        title: 'Intermodal Supply Chain Dispatch',
        desc: 'Real-time telemetry networks predicting container bottle-necks before ocean arrival.'
      }
    ],
    portfolio: [
      {
        name: 'Vector Corridors',
        tagline: 'Megawatt Charging & Fleet Highway Hubs',
        status: 'Active Operating Unit',
        founded: '2022',
        location: 'Rotterdam, Netherlands',
        metric: '24 Highway Hubs'
      },
      {
        name: 'FreightX Mobility',
        tagline: 'Autonomous Yard & Intermodal Dispatch',
        status: 'Active Operating Unit',
        founded: '2023',
        location: 'Long Beach, CA',
        metric: '4.8M Autonomous Miles'
      },
      {
        name: 'AeroGrid Ports',
        tagline: 'Zero-Emission Cargo Drone Depots',
        status: 'Scale Phase',
        founded: '2024',
        location: 'Singapore',
        metric: '18 Shipping Hubs'
      }
    ]
  },
  {
    id: 'tech',
    code: '04',
    title: 'Technology',
    subtitle: 'The System.',
    slug: 'sector-tech',
    description: 'Industrial telemetry software, edge compute nodes for industrial plants, and physical system OS.',
    fullOverview: 'Software is at its most valuable when bound to physical hardware and industrial infrastructure. JBR crafts edge operating systems, real-time sensor processing, and machine orchestration platforms.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    stats: [
      { label: 'Daily API Invocations', value: '240B+' },
      { label: 'Industrial Nodes', value: '450k+' },
      { label: 'Platform Availability', value: '99.999%' },
      { label: 'Data Processed', value: '18PB/mo' }
    ],
    focusAreas: [
      {
        title: 'Industrial Machine Operating System',
        desc: 'Low-latency deterministic real-time OS designed for complex robotics and power grid controls.'
      },
      {
        title: 'Edge Compute Mesh Infrastructure',
        desc: 'Hardened compute nodes deployed at solar farms, agricultural hubs, and port facilities.'
      },
      {
        title: 'Synthetic Physical Simulation Engines',
        desc: 'Physics-informed machine learning models for stress testing infrastructure under weather extremes.'
      }
    ],
    portfolio: [
      {
        name: 'Kernel Stack',
        tagline: 'Deterministic Industrial Edge OS',
        status: 'Active Operating Unit',
        founded: '2021',
        location: 'Austin, TX',
        metric: '450k Active Edge Nodes'
      },
      {
        name: 'Mesh Control',
        tagline: 'Real-time Industrial Telemetry Platform',
        status: 'Active Operating Unit',
        founded: '2022',
        location: 'London, UK',
        metric: '240B Daily Events'
      },
      {
        name: 'Synapse Infra',
        tagline: 'Physics-based Digital Twin Engines',
        status: 'Scale Phase',
        founded: '2024',
        location: 'Tokyo, Japan',
        metric: '85 Global Deployments'
      }
    ]
  }
];

export const PRINCIPLES = [
  {
    code: '01',
    title: 'Decode',
    short: 'Strip back domain consensus.',
    description: 'We ignore established industry practices and rebuild from raw physical and economic physics. Most bottlenecks exist solely because "that is how it has always been done".'
  },
  {
    code: '02',
    title: 'Hidden Logic',
    short: 'Identify structural friction.',
    description: 'Every traditional sector contains unseen friction that incumbents absorb as standard overhead. We target the hidden logic where 10x efficiency improvements lie buried.'
  },
  {
    code: '03',
    title: 'Future Files',
    short: 'Build for technological tipping points.',
    description: 'We do not wait for regulatory or hardware trends to mature before planning. We engineer underlying architecture so that when cost curves cross, JBR is already the default operator.'
  }
];

export const FOUNDER_NOTES: FounderNote[] = [
  {
    id: 'note-01',
    code: '01',
    title: 'Why we chose zero-hype physical sectors when everyone else chased consumer apps',
    date: 'OCTOBER 2024',
    readTime: '6 MIN READ',
    summary: 'When we founded JBR, software valuation multiples were at historical peaks. Yet the physical foundation of human civilization—food, shelter, logistics—remained dangerously outdated.',
    quote: 'True enterprise value is built at the intersection of heavy physical assets and high-margin intelligence.',
    content: [
      'Three years before JBR became a formal entity, we sat in a diner in Seattle discussing why venture capital ignored the physical world. While billions flowed into photo sharing and micro-delivery apps, modern farms were using software from 1998, and freight trucks were idling at ports for 8 hours due to fax-based scheduling.',
      'We decided that JBR would operate differently. We would not invest in viral consumer loops or financial engineering. We would invest in dirt, steel, concrete, and the software engines that govern them.',
      'Building physical assets requires patience. A mass timber building cannot be shipped via git push. An autonomous tractor must operate in mud and rain without losing connectivity. But once these physical Moats are established, they are nearly impossible to disrupt.'
    ]
  },
  {
    id: 'note-02',
    code: '02',
    title: 'The 10-year horizon: Patience as an unfair competitive advantage',
    date: 'JANUARY 2025',
    readTime: '8 MIN READ',
    summary: 'Quarterly reporting forces public corporations into short-term optimization. By operating as an independent holding company, JBR compounds capital over decades.',
    quote: 'When your investment horizon is ten years instead of ten quarters, your competitors disappear.',
    content: [
      'Most investment vehicles are constrained by 3-to-5-year return cycles. This creates a structural bias toward incremental updates and quick exits. High-capital physical innovation—such as nationwide heavy electric truck corridors or deep soil restoration—is systematically overlooked.',
      'JBR is structured as a permanent holding platform. We do not sell our core operating businesses after three years. We reinvest operating cash flows into adjacent sector nodes, creating a self-reinforcing flywheel.',
      'Patience allows us to survive cyclic downturns. When real estate markets slow down, our timber construction unit acquires raw lumber assets at distressed valuations. When crop prices drop, our automated irrigation tools become essential cost-saving devices.'
    ]
  },
  {
    id: 'note-03',
    code: '03',
    title: 'Capital allocation when building real physical assets',
    date: 'MAY 2025',
    readTime: '5 MIN READ',
    summary: 'A disciplined framework for balancing venture capital risk with infrastructure asset safety across our operating companies.',
    quote: 'We view hardware as compressed software, and software as dynamic asset management.',
    content: [
      'The biggest failure mode in hardware and industrial investing is burning software-like equity capital on unoptimized physical factories. At JBR, we enforce a strict separation between Technology R&D and Capital Asset Deployment.',
      '1. Technology R&D is funded like software: high speed, rapid iteration, fail fast in laboratory conditions.',
      '2. Physical Deployment is funded like infrastructure: off-balance-sheet debt, asset-backed leases, and strict hurdle rates.',
      'This dual-discipline ensures that our equity investors never dilute their ownership to pay for raw concrete, while our project lenders enjoy bankable, low-risk revenue streams.'
    ]
  },
  {
    id: 'note-04',
    code: '04',
    title: 'The culture of non-consensus: Hiring operators, not managers',
    date: 'AUGUST 2025',
    readTime: '7 MIN READ',
    summary: 'Why JBR hires senior mechanical engineers, agronomy researchers, and ship captains over traditional corporate consultants.',
    quote: 'If you want to transform an industry, you must hire the people who have bled in its machinery.',
    content: [
      'Corporate management consultancy focuses on process over domain reality. But when an autonomous harvester fails in 105-degree heat in Nebraska, process will not save the crop.',
      'Every team leader across JBR’s operating divisions possesses deep domain scars. The CEO of TerraForm Ag spent 15 years farming 4,000 acres before completing his PhD in spectrographic soil analysis. The head of FreightX was a logistics port supervisor who managed 10,000 container moves daily.',
      'We combine these domain veterans with world-class software architects. The resulting magic happens when deep industry intuition meets clean, modern code.'
    ]
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'j-01',
    title: 'Decarbonizing Mass Timber: The Physics of Cross-Laminated Structures',
    excerpt: 'How engineered wood is outperforming reinforced concrete in structural load testing while storing gigatons of carbon.',
    content: `
      Mass timber is no longer an architectural novelty; it is a structural necessity. For over a century, urban skylines have been dominated by steel and concrete—materials responsible for roughly 15% of global carbon emissions.

      Cross-Laminated Timber (CLT) stacks alternating layers of kiln-dried lumber at 90-degree angles under extreme hydraulic pressure. The result is a structural panel that rivals reinforced concrete in compressive strength while weighing 80% less.

      At JBR’s real estate division, Kiln, we have demonstrated that mass timber towers up to 24 stories can be erected 40% faster than concrete equivalents with a fraction of the job-site noise and urban traffic disruption.
    `,
    category: 'Real Estate',
    date: 'AUG 12, 2025',
    readTime: '5 MIN',
    author: 'Elena Rostova, Chief Architect',
    featured: true
  },
  {
    id: 'j-02',
    title: 'Sub-surface Soil Telemetry: Moving Beyond Satellite Imagery',
    excerpt: 'Satellites provide top-down canopy vegetation imagery, but true crop yields are decided 20 centimeters under the soil surface.',
    content: `
      While optical satellite imaging became popular over the last decade for agricultural analysis, satellite sensors suffer from two major flaws: cloud coverage occlusion and surface-only readings.

      By the time a satellite detects leaf discoloration or drought stress on a soybean plant, 30% of potential yield loss has already occurred.

      TerraForm Ag’s spectrographic probe array operates below the topsoil, measuring nitrogen ion mobility, fungal spore count, and volumetric water content every 15 minutes. This provides farmers with a 10-day predictive lead time before any visible stress appears on the plant above ground.
    `,
    category: 'Agriculture',
    date: 'JUL 28, 2025',
    readTime: '6 MIN',
    author: 'Dr. Marcus Vance, Head of Agronomy',
    featured: true
  },
  {
    id: 'j-03',
    title: 'Megawatt Charging Architectures for Class 8 Heavy Electric Freight',
    excerpt: 'Why 350kW passenger EV chargers fail for 80,000lb transport trucks, and how JBR is building 3.5MW corridor hubs.',
    content: `
      Transitioning regional and long-haul trucking to electricity requires rethinking the grid interface. An 80,000 lb long-haul truck equipped with a 800kWh battery pack cannot afford to sit at a standard highway fast charger for 3 hours.

      To maintain driver schedule compliance and fleet efficiency, charging must take place during mandatory 30-minute rest breaks. This demands power delivery of 3.5 Megawatts per plug.

      Vector Mobility’s highway corridor hubs feature integrated liquid-cooled transformer stations paired with 10MWh on-site battery storage units. By buffering energy from local solar arrays during off-peak hours, Vector enables ultra-fast truck charging without overloading rural power grids.
    `,
    category: 'Transport',
    date: 'JUN 14, 2025',
    readTime: '7 MIN',
    author: 'Julian Thorne, Lead Systems Engineer'
  },
  {
    id: 'j-04',
    title: 'Deterministic Edge Operating Systems in High-Interference Industrial Environments',
    excerpt: 'Why general-purpose Linux kernels are unsuited for millisecond robotics control and zero-latency port automation.',
    content: `
      In standard cloud server infrastructure, a 50-millisecond latency spike is barely noticeable to a web user. In an autonomous 40-ton port gantry crane handling shipping containers, a 50ms delay can result in catastrophic mechanical collision.

      Kernel Stack was built to solve this exact problem. Operating as a bare-metal, micro-kernel architecture with guaranteed sub-millisecond interrupts, Kernel Stack ensures that machine safety loops operate independently of cloud network connectivity.
    `,
    category: 'Technology',
    date: 'MAY 02, 2025',
    readTime: '4 MIN',
    author: 'Hiroshi Sato, Chief Technology Officer'
  },
  {
    id: 'j-05',
    title: 'Capital Compounding in Non-Consensus Physical Infrastructure',
    excerpt: 'An analysis of JBR’s financial framework for reinvesting operating cash flows into adjacent industrial nodes.',
    content: `
      Unlocking long-term economic value requires building vertically integrated hardware-software ecosystems. When our transport division expands a freight corridor, it generates real-time telemetry data that feeds directly into our technology division’s machine learning models.

      This internal flywheel reduces customer acquisition costs across all JBR portfolio ventures while compounding operating margins at scale.
    `,
    category: 'Capital',
    date: 'APR 19, 2025',
    readTime: '8 MIN',
    author: 'Arthur Pendelton, Managing Partner'
  }
];

export const OFFICES: OfficeLocation[] = [
  {
    city: 'London',
    address: '14 Mayfair Square, W1J 8AJ',
    timezone: 'UTC+00:00',
    email: 'london@jbr-holding.com',
    phone: '+44 20 7946 0188'
  },
  {
    city: 'New York',
    address: '250 Hudson Street, Floor 12, NY 10013',
    timezone: 'UTC-05:00',
    email: 'ny@jbr-holding.com',
    phone: '+1 212 555 0192'
  },
  {
    city: 'Tokyo',
    address: 'Roppongi Hills Mori Tower 38F, Minato-ku 106-6108',
    timezone: 'UTC+09:00',
    email: 'tokyo@jbr-holding.com',
    phone: '+81 3 5555 0143'
  }
];
