// Populate only from the organiser's confirmed records. An empty collection
// means that this part of the archive has not been published yet.
export type Edition = {
  year: string;
  label: string;
  intro: string;
  programme: { id: string; day: string; time: string; title: string; format: string; speakerIds: string[]; description: string }[];
  speakers: { id: string; name: string; role: string; organisation: string; biography: string; portrait?: string }[];
  photos: { src: string; alt: string; caption: string; credit?: string }[];
};

export const editions: Record<string, Edition> = {
  "2026": {
    year: "2026", label: "The second edition",
    intro: "Quantum Singapore 2026 connected the global ecosystem across Sands Expo and Shangri-La Singapore on 4–5 February 2026.",
    programme: [
      { id:"day1-registration", day:"4 February", time:"13:30–14:00", title:"Registration and networking", format:"Day 01 · Sands Expo", speakerIds:[], description:"Arrival and informal networking before the first afternoon session." },
      { id:"day1-opening", day:"4 February", time:"14:00–14:10", title:"Opening remarks", format:"Opening", speakerIds:["shangjie-guo"], description:"Opening the second edition and its focus on hardware breakthroughs and industrial adoption." },
      { id:"nqff", day:"4 February", time:"14:10–14:30", title:"NQFF: a research foundry for quantum devices", format:"Presentation", speakerIds:["victor-leong"], description:"An introduction to Singapore’s research foundry for quantum devices." },
      { id:"photonic-datacentre", day:"4 February", time:"14:30–14:50", title:"Quantum in the photonic data centre", format:"Presentation", speakerIds:["peter-fretty"], description:"A view of quantum technology in photonic data-centre infrastructure." },
      { id:"calibration", day:"4 February", time:"14:50–15:10", title:"Hardware-aware and in-situ calibration for fault-tolerant quantum computing", format:"Presentation", speakerIds:["zhiding-liang"], description:"Calibration approaches designed around real quantum hardware." },
      { id:"cooperative-computing", day:"4 February", time:"15:10–15:30", title:"Exploring fault-tolerant quantum computers with classical computers cooperatively", format:"Presentation", speakerIds:["shigeru-yamashita"], description:"How classical and fault-tolerant quantum computers can work together." },
      { id:"dependable-systems", day:"4 February", time:"15:30–15:50", title:"Dependable quantum-classical systems engineering — a holistic approach", format:"Presentation", speakerIds:["edo-giusto"], description:"A systems-engineering view of dependable quantum-classical platforms." },
      { id:"day1-panel", day:"4 February", time:"15:50–16:40", title:"Bridging quantum hardware and software", format:"Panel discussion", speakerIds:["shangjie-guo","david-wilkowski","zhiding-liang","shigeru-yamashita","edo-giusto"], description:"A discussion on compatibility barriers and the competitiveness of Southeast Asia’s quantum ecosystem." },
      { id:"session-a-opening", day:"5 February", time:"09:30–09:40", title:"Opening remarks", format:"Session A · Shangri-La", speakerIds:["di-zhu"], description:"Opening the session on the status and outlook of quantum computing technology." },
      { id:"optical-computers", day:"5 February", time:"09:40–10:00", title:"Changing the world with optical quantum computers", format:"Presentation", speakerIds:["akito-kawasaki"], description:"The promise and development of optical quantum computing." },
      { id:"industry-cases", day:"5 February", time:"10:00–10:20", title:"Quantum computing: real-world industry use cases", format:"Presentation", speakerIds:["gabriele-compostella"], description:"A practical view of quantum applications across industry." },
      { id:"neutral-atoms", day:"5 February", time:"10:20–10:50", title:"Toward neutral atom array quantum processors in Singapore", format:"Presentation", speakerIds:["david-wilkowski"], description:"Progress toward neutral-atom array processors in Singapore." },
      { id:"photonics", day:"5 February", time:"10:50–11:10", title:"Photonics-based quantum computing: fundamentals and recent advances", format:"Presentation", speakerIds:["thomas-van-els"], description:"Core principles and recent advances in photonic quantum computing." },
      { id:"qubits-to-solutions", day:"5 February", time:"11:10–12:00", title:"From qubits to solutions", format:"Panel discussion", speakerIds:["di-zhu","akito-kawasaki","gabriele-compostella","victor-leong"], description:"Scaling research foundries and moving hardware innovation toward deployment." },
      { id:"session-b-opening", day:"5 February", time:"13:00–13:10", title:"Opening remarks", format:"Session B · Shangri-La", speakerIds:["jun-ye"], description:"Opening the afternoon programme on Quantum Software 2.0." },
      { id:"classical-shadows", day:"5 February", time:"13:10–13:30", title:"Scalable quantum characterisation: classical shadows for quantum applications", format:"Presentation", speakerIds:["koh-enshan-dax"], description:"Scalable characterisation methods for quantum applications." },
      { id:"learning-surrogates", day:"5 February", time:"13:30–13:50", title:"Efficient classical learning surrogates for quantum circuits at scale", format:"Presentation", speakerIds:["yuxuan-du"], description:"Classical learning surrogates for large-scale quantum circuits." },
      { id:"error-correction", day:"5 February", time:"13:50–14:10", title:"Advancements in decoding for quantum error correction", format:"Presentation", speakerIds:["feng-pan"], description:"Recent progress in decoding for quantum error correction." },
      { id:"quantum-ai", day:"5 February", time:"14:30–14:50", title:"Quantum + AI: quantum science under the AI era", format:"Presentation", speakerIds:["di-luo"], description:"How AI is reshaping research across quantum science." },
      { id:"quantum-chemistry", day:"5 February", time:"15:50–16:10", title:"Industrial quantum chemistry across eras", format:"Presentation", speakerIds:["shangjie-guo"], description:"Near-term benchmarks and early fault-tolerant resource frontiers for industrial quantum chemistry." },
      { id:"software-panel", day:"5 February", time:"16:10–17:00", title:"Defining Quantum Software 2.0", format:"Panel discussion", speakerIds:["jun-ye","koh-enshan-dax","yuxuan-du","di-luo"], description:"Bottlenecks, software-hardware co-design and algorithmic innovation at utility scale." },
      { id:"cocktail", day:"5 February", time:"17:00–18:00", title:"Cocktail party", format:"Closing reception", speakerIds:[], description:"Closing connections and conversations across the community." },
    ],
    speakers: [
      { id:"jun-ye", name:"Jun Ye", role:"Principal Scientist", organisation:"A*STAR Institute of High Performance Computing", biography:"Forum chairperson and moderator of the Quantum Software 2.0 session.", portrait:"/editions/2026/speakers/jun-ye.jpg" },
      { id:"di-zhu", name:"Di Zhu", role:"Assistant Professor", organisation:"National University of Singapore · CQT", biography:"Forum chairperson and contributor to the session on the status and outlook of quantum computing.", portrait:"/editions/2026/speakers/di-zhu.jpg" },
      { id:"shangjie-guo", name:"Shangjie Guo", role:"President, FinQ Tech Inc.", organisation:"Quantum Computing Specialist · bp", biography:"Forum vice chairperson, Day 1 moderator and speaker on industrial quantum chemistry.", portrait:"/editions/2026/speakers/shangjie-guo.jpg" },
      { id:"zhiding-liang", name:"Zhiding Liang", role:"Assistant Professor", organisation:"The Chinese University of Hong Kong", biography:"Presented hardware-aware calibration and moderated the morning programme on 5 February.", portrait:"/editions/2026/speakers/zhiding-liang.jpg" },
      { id:"xudong-lv", name:"Xudong Lv", role:"Researcher", organisation:"Shanghai Institute of Optics and Fine Mechanics", biography:"Chair of the forum’s advisory committee.", portrait:"/editions/2026/speakers/xudong-lv.jpg" },
      { id:"david-wilkowski", name:"David Wilkowski", role:"Principal Investigator · Associate Professor", organisation:"CQT · Nanyang Technological University", biography:"Presented Singapore’s progress toward neutral-atom array quantum processors.", portrait:"/editions/2026/speakers/david-wilkowski.jpg" },
      { id:"peter-fretty", name:"Peter Fretty", role:"VP, Digital Infrastructure", organisation:"EndeavorB2B", biography:"Shared a digital-infrastructure perspective on quantum in the photonic data centre.", portrait:"/editions/2026/speakers/peter-fretty.jpg" },
      { id:"shigeru-yamashita", name:"Shigeru Yamashita", role:"Professor", organisation:"Ritsumeikan University", biography:"Explored cooperation between classical systems and fault-tolerant quantum computers.", portrait:"/editions/2026/speakers/shigeru-yamashita.jpg" },
      { id:"edo-giusto", name:"Edo Giusto", role:"Assistant Professor", organisation:"University of Naples Federico II", biography:"Presented a holistic approach to dependable quantum-classical systems engineering.", portrait:"/editions/2026/speakers/edo-giusto.jpg" },
      { id:"akito-kawasaki", name:"Akito Kawasaki", role:"Quantum Scientist", organisation:"OptQC Corp.", biography:"Presented the development and potential of optical quantum computers.", portrait:"/editions/2026/speakers/akito-kawasaki.jpg" },
      { id:"gabriele-compostella", name:"Gabriele Compostella", role:"Quantum Industry Applications Lead", organisation:"IBM Quantum", biography:"Shared real-world quantum-computing use cases from industry.", portrait:"/editions/2026/speakers/gabriele-compostella.jpg" },
      { id:"victor-leong", name:"Victor Leong", role:"Director", organisation:"National Quantum Federated Foundry", biography:"Introduced the National Quantum Federated Foundry and its work on quantum devices.", portrait:"/editions/2026/speakers/victor-leong.jpg" },
      { id:"thomas-van-els", name:"Thomas Julius van Els", role:"Strategist & Business Developer", organisation:"QuiX Quantum", biography:"Presented fundamentals and recent advances in photonics-based quantum computing.", portrait:"/editions/2026/speakers/thomas-van-els.jpg" },
      { id:"koh-enshan-dax", name:"Koh Enshan Dax", role:"Senior Scientist · Adjunct Assistant Professor", organisation:"A*STAR Q.InC · SUTD", biography:"Presented scalable quantum characterisation with classical shadows.", portrait:"/editions/2026/speakers/koh-enshan-dax.jpg" },
      { id:"yuxuan-du", name:"Yuxuan Du", role:"Assistant Professor", organisation:"Nanyang Technological University", biography:"Presented efficient classical learning surrogates for quantum circuits at scale.", portrait:"/editions/2026/speakers/yuxuan-du.jpg" },
      { id:"feng-pan", name:"Feng Pan", role:"Assistant Professor", organisation:"Singapore University of Technology and Design", biography:"Presented advancements in decoding for quantum error correction.", portrait:"/editions/2026/speakers/feng-pan.jpg" },
      { id:"di-luo", name:"Di Luo", role:"Associate Professor", organisation:"Tsinghua University", biography:"Presented the convergence of quantum science and AI.", portrait:"/editions/2026/speakers/di-luo.jpg" },
    ],
    photos: Array.from({ length:20 }, (_, index) => {
      const number = String(index + 1).padStart(2, "0");
      const captions = ["Opening the 2026 forum at the APE Technical Theatre.","A technical session at Sands Expo.","Research insights from the stage.","A conversation on practical quantum systems.","Industry perspectives during the panel.","The Quantum Singapore 2026 panel in session.","Hardware and software leaders exchange views.","A speaker session at Shangri-La Singapore.","Ideas shared from the main stage.","A Quantum Software 2.0 presentation.","From research to application.","An industry keynote at Shangri-La.","A photonic quantum-computing perspective.","A technical deep dive.","Quantum research in the AI era.","Software and algorithms on stage.","A new view of quantum applications.","The afternoon panel discussion.","Quantum Software 2.0 panel.","The Quantum Singapore 2026 community."];
      return { src:`/editions/2026/photos/qs-2026-${number}.jpg`, alt:captions[index], caption:captions[index] };
    }),
  },
  "2025": {
    year: "2025", label: "The inaugural edition",
    intro: "Quantum Singapore 2025 brought the community together at Sands Expo and Convention Centre on 26 February 2025.",
    programme: [
      {
        id: "registration",
        day: "26 February",
        time: "12:30–13:30",
        title: "Registration and welcome coffee",
        format: "Arrival",
        speakerIds: [],
        description: "Guest registration and informal networking before the forum opened.",
      },
      {
        id: "opening",
        day: "26 February",
        time: "13:30–13:50",
        title: "Welcome and opening remarks",
        format: "Opening remarks",
        speakerIds: ["cheng-wei-qiu"],
        description: "An introduction to the forum and the opportunities for collaboration across the quantum technology industry.",
      },
      {
        id: "keynote-1",
        day: "26 February",
        time: "13:50–14:20",
        title: "Latest research on 2D materials for generating quantum-entangled photon pairs",
        format: "Keynote 01",
        speakerIds: ["gao-weibo"],
        description: "A research presentation on two-dimensional materials and entangled photon-pair generation.",
      },
      {
        id: "keynote-2",
        day: "26 February",
        time: "14:20–14:50",
        title: "High-end laser systems for science, research and industry",
        format: "Keynote 02",
        speakerIds: [],
        description: "A presentation by AceXon Technologies on specialist laser systems and their applications.",
      },
      {
        id: "panel",
        day: "26 February",
        time: "14:50–16:10",
        title: "Research and industrialisation progress in quantum computing",
        format: "Panel discussion",
        speakerIds: ["roger-luo", "di-zhu", "georgios-korpas", "jun-ye"],
        description: "A cross-sector discussion on the progress of quantum-computing research and its path towards industrial use.",
      },
      {
        id: "keynote-3",
        day: "26 February",
        time: "16:10–16:40",
        title: "Quantum technology research and the Global Future Industry Index",
        format: "Keynote 03",
        speakerIds: ["chris-zou"],
        description: "A technology and market perspective featuring the 2023 Global Future Industry Index report.",
      },
      {
        id: "keynote-4",
        day: "26 February",
        time: "16:40–17:10",
        title: "Variational quantum circuits on NVIDIA CUDA Quantum",
        format: "Keynote 04",
        speakerIds: ["huck-yang"],
        description: "A research presentation on variational quantum circuits and NVIDIA's quantum software platform.",
      },
    ],
    speakers: [
      {
        id: "cheng-wei-qiu",
        name: "Cheng-Wei Qiu",
        role: "Professor and Forum Chairperson",
        organisation: "NUS, Department of Electrical and Computer Engineering",
        biography: "Chairperson of Quantum Singapore 2025 and host of the forum's opening remarks.",
        portrait: "/editions/2025/speakers/cheng-wei-qiu.png",
      },
      {
        id: "di-zhu",
        name: "Di Zhu",
        role: "Assistant Professor",
        organisation: "Harvard and Singapore CQT",
        biography: "A panellist in the 2025 discussion on quantum-computing research and industrialisation.",
        portrait: "/editions/2025/speakers/di-zhu.jpg",
      },
      {
        id: "gao-weibo",
        name: "Gao Weibo",
        role: "Professor",
        organisation: "NTU, QUASAR, EEE & SPMS",
        biography: "Presented research on two-dimensional materials for generating quantum-entangled photon pairs.",
        portrait: "/editions/2025/speakers/gao-weibo.png",
      },
      {
        id: "roger-luo",
        name: "Jie (Roger) Luo",
        role: "President and Co-Founder",
        organisation: "Anyon Technology",
        biography: "Joined the 2025 panel on progress in quantum-computing research and industrialisation.",
        portrait: "/editions/2025/speakers/roger-luo.png",
      },
      {
        id: "georgios-korpas",
        name: "Georgios Korpas",
        role: "Senior Research Scientist",
        organisation: "HSBC Labs",
        biography: "Contributed an industry research perspective to the forum's quantum-computing panel.",
        portrait: "/editions/2025/speakers/georgios-korpas.jpg",
      },
      {
        id: "jun-ye",
        name: "Jun Ye",
        role: "Director",
        organisation: "A*STAR Quantum Innovation Centre (Q.Inc)",
        biography: "Joined the forum panel exploring research progress and industrial applications in quantum computing.",
        portrait: "/editions/2025/speakers/jun-ye.png",
      },
      {
        id: "chris-zou",
        name: "Chris Zou",
        role: "Partner, Senior Technology & Market Analyst",
        organisation: "ICV",
        biography: "Presented a technology and market view alongside the 2023 Global Future Industry Index report.",
        portrait: "/editions/2025/speakers/chris-zou.png",
      },
      {
        id: "huck-yang",
        name: "Huck Yang",
        role: "Senior Research Scientist",
        organisation: "NVIDIA Research",
        biography: "Presented research on variational quantum circuits using NVIDIA CUDA Quantum.",
        portrait: "/editions/2025/speakers/huck-yang.jpg",
      },
    ],
    photos: [
      { src: "/editions/2025/photos/qs-2025-01.jpg", alt: "Speaker presenting at the Quantum Singapore lectern", caption: "A technical presentation during Quantum Singapore 2025." },
      { src: "/editions/2025/photos/qs-2025-02.jpg", alt: "Speaker addressing the Quantum Singapore 2025 audience", caption: "Quantum Singapore 2025 opens at Sands Expo and Convention Centre." },
      { src: "/editions/2025/photos/qs-2025-03.jpg", alt: "Forum moderator seated on stage with a microphone", caption: "The forum moves from presentations into conversation." },
      { src: "/editions/2025/photos/qs-2025-04.jpg", alt: "Three speakers taking part in a panel discussion", caption: "Panellists discuss progress in quantum-computing research." },
      { src: "/editions/2025/photos/qs-2025-05.jpg", alt: "Panellist speaking into an APE microphone", caption: "Industry and research perspectives meet on stage." },
      { src: "/editions/2025/photos/qs-2025-06.jpg", alt: "Huck Yang presenting at the lectern", caption: "Huck Yang presents research on variational quantum circuits." },
      { src: "/editions/2025/photos/qs-2025-07.jpg", alt: "Audience members applauding during the forum", caption: "The Quantum Singapore audience during the afternoon forum." },
      { src: "/editions/2025/photos/qs-2025-08.jpg", alt: "Speaker presenting practical quantum computing and quantum-safe solutions", caption: "A session on practical quantum computing and quantum-safe solutions." },
      { src: "/editions/2025/photos/qs-2025-09.jpg", alt: "Panellist speaking during a seated discussion", caption: "A closer view of the 2025 panel conversation." },
      { src: "/editions/2025/photos/qs-2025-10.jpg", alt: "Speaker delivering a presentation from the forum lectern", caption: "A speaker addresses the community from the Quantum Singapore stage." },
      { src: "/editions/2025/photos/qs-2025-11.jpg", alt: "Suited panellist speaking into a microphone", caption: "The panel explores routes from research to industry." },
      { src: "/editions/2025/photos/qs-2025-12.jpg", alt: "Panellist speaking in front of the Singapore stage backdrop", caption: "Closing perspectives from the 2025 forum." },
    ],
  },
};

export function getEdition(year: string): Edition | undefined {
  return Object.prototype.hasOwnProperty.call(editions, year) ? editions[year] : undefined;
}
