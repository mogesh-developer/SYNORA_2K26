// Official Intra / Inter Department Meet Data — SYNORA 2K26
// Exact details synchronized from Official Poster & Event Document

export const FESTIVAL_INFO = {
  name: "SYNORA 2K26",
  tagline: "Where mind converge, ideas evolve",
  eventType: "Inter Department Meet",
  college: "THE AMERICAN COLLEGE",
  collegeAffiliation: "(An Autonomous Institution Affiliated to Madurai Kamaraj University)",
  accreditation: "Re-accredited (3rd Cycle) by NAAC with Grade 'A+', CGPA – 3.47 on a 4-point scale",
  since: "since 1881",
  department: "Department of Computer Science (Satellite Campus)",
  principal: "Dr. J. Paul Jayakar",
  principalRole: "Principal & Secretary",
  hod: "Dr. K. Britto Alex",
  hodRole: "Head of the Department",
  dateFormatted: "Wednesday, November 25, 2K26",
  timeFormatted: "9:30 am",
  registrationFee: "₹70 per head",
  googleFormUrl: "https://forms.gle/your-google-form-link-here", // Replace with your real Google Form Link
  contactEmail: "synora.cs@americancollege.edu.in",
  convenorContact: "+91 98401 23456"
};

// Student Coordinators directly from PDF Page 5
export const STUDENT_COORDINATORS = [
  { name: "MUTHUPANDI M", rollNo: "25PCS203" },
  { name: "HARINI R", rollNo: "25PCS216" },
  { name: "MOHAMED IMRAN S", rollNo: "24COS223" },
  { name: "SRINITHI S", rollNo: "24COS245" }
];

// Structured Guidelines with dedicated categories & icons
export const STRUCTURED_GUIDELINES = [
  {
    category: "Registration & Credentials",
    title: "Entry Fee & Check-In",
    desc: "Fixed entry fee of ₹70 per participant. Covers official event badges, digital pass authentication, and refreshment coupons.",
    badge: "Mandatory"
  },
  {
    category: "Academic Brackets",
    title: "Strict Track Isolation",
    desc: "UG candidates (B.Sc / BCA) participate strictly in UG arenas. PG candidates (M.Sc / MCA) compete exclusively in PG events to ensure equal academic benchmarking.",
    badge: "Eligibility"
  },
  {
    category: "Punctuality & Presence",
    title: "Reporting to Designated Halls",
    desc: "Participants must assemble at their respective allocated halls (E10, E11, E12, Msc 1, Msc 2, Msc 3, Lab, Mul Purpose Hall) 15 minutes before the time slot.",
    badge: "Timeline"
  },
  {
    category: "Digital Challenge",
    title: "Poster Making (Online Mode)",
    desc: "Poster Making will be executed online. Participants present their soft copy directly in front of the judge panel via the digital projection setup.",
    badge: "Digital"
  },
  {
    category: "Jury & Discipline",
    title: "Code of Decorum & Final Verdict",
    desc: "Any misconduct or violation of sportsmanship leads to instant forfeiture. The decisions made by staff coordinators and appointed judges are indisputable and final.",
    badge: "Conduct"
  },
  {
    category: "Awards & Honours",
    title: "Valedictory Awards & Overall Cup",
    desc: "Prizes (1st, 2nd, 3rd) along with merit credentials and the prestigious Department Overall Championship Cup will be distributed at the valedictory session.",
    badge: "Recognition"
  }
];

// Official Rules, Venues, Timings, Faculty & Judges from Document
export const EVENTS = [
  // =========================================================================
  // UNDERGRADUATE (UG) EVENTS (8 Events)
  // =========================================================================
  {
    id: "ug-quiz",
    category: "UG",
    type: "Technical",
    title: "Quiz",
    shortDesc: "Questions based on current affairs, tech fundamentals and rapid aptitude thinking.",
    teamSize: "2 participants per team",
    venue: "E11",
    time: "9:30 am - 10:15 am",
    duration: "45 Minutes",
    staffIncharge: "Dr. K. Berlin",
    judge: "Department Panel",
    organizers: "Jamuna Varshini B, Ashiyashifana J",
    rules: [
      "Prelims will be conducted.",
      "2 participants per team.",
      "Questions based on current affairs and basic technology.",
      "Any act against the spirit of the game will lead to disqualification of the team."
    ]
  },
  {
    id: "ug-paper-presentation",
    category: "UG",
    type: "Technical",
    title: "Paper Presentation",
    shortDesc: "Present technical research papers and novel project implementations with slide deck & viva.",
    teamSize: "1 participant per team",
    venue: "E12",
    time: "9:30 am – 11:00 am",
    duration: "3 mins presentation + 2 mins queries",
    staffIncharge: "Ms. V. Backiyalaksmi",
    judge: "Dr. A. John Sanjeev kumar",
    organizers: "Shanthiya S, Vishali S",
    rules: [
      "1 participant per team.",
      "Participants should bring hard copy and soft copy.",
      "Time Duration: 3 minutes for presentation and 2 minutes for queries."
    ]
  },
  {
    id: "ug-fireless-cooking",
    category: "UG",
    type: "Non-Technical",
    title: "Fireless Cooking",
    shortDesc: "Culinary creativity without flames or electrical appliances. Tested on hygiene, taste & presentation.",
    teamSize: "2 participants per team",
    venue: "E10",
    time: "9:30 am – 10:30 am",
    duration: "1 hour",
    staffIncharge: "Mrs. K. Sankarewari",
    judge: "Dr. K. Nithya",
    organizers: "Priyadharshini K, Abirami",
    rules: [
      "2 participants per team.",
      "No direct flames, induction stoves, or electric appliances are allowed.",
      "Participants must bring their own ingredients, utensils, and serving dishes.",
      "Pre-prepared items: Pre-chopped, grated, or blended ingredients are allowed, but the final assembly and presentation must be done during the competition.",
      "Participants must maintain cleanliness and hygiene throughout the competition.",
      "Team should ensure they clean up their cooking area before leaving.",
      "Time duration: 1 hour."
    ]
  },
  {
    id: "ug-stress-interview",
    category: "UG",
    type: "Soft Skills",
    title: "Stress Interview",
    shortDesc: "Individual interview conducted by judges deliberately testing composure under pressure.",
    teamSize: "1 participant per team",
    venue: "Msc 1",
    time: "9:30 am – 10:15 am",
    duration: "5 minutes per candidate",
    staffIncharge: "Mrs. K. Sankarewari",
    judge: "Dr. Mr. R. Jackson Gunaraj",
    organizers: "Mogesh M, Kabilan RP",
    rules: [
      "1 participant per team.",
      "The participant will face an individual interview conducted by the judges.",
      "The interviewer may deliberately create pressure or challenging situations to test the participant's response.",
      "Participants should remain calm, confident, and professional throughout the interview.",
      "Time Duration: 5 minutes."
    ]
  },
  {
    id: "ug-ad-zap",
    category: "UG",
    type: "Creative",
    title: "Ad-Zap",
    shortDesc: "Create spot ads, skits, role-play or commercial presentations on a given spot topic.",
    teamSize: "4 participants per team",
    venue: "Msc 3",
    time: "9:30 am – 11:00 am",
    duration: "5 minutes performance",
    staffIncharge: "Ms. D. Sindhiya Graham",
    judge: "Dr. C. Mohan",
    organizers: "Nishanth NP, Thoufiq Ahamed M, Meenalosane",
    rules: [
      "4 participants per team.",
      "Theme will be given on the spot.",
      "The advertisement can be skit, role-play, talk show style, or creative commercial presentation.",
      "No vulgarity or offensive content.",
      "No political or religious content.",
      "Time duration: 5 minutes."
    ]
  },
  {
    id: "ug-poster-making",
    category: "UG",
    type: "Creative",
    title: "Poster Making (Online)",
    shortDesc: "Digital presentation of themed posters via soft copy in front of the judge panel (Online Mode).",
    teamSize: "1 participant per team",
    venue: "Msc 2",
    time: "9:30 am - 10:15 am",
    duration: "Evaluated by Judge",
    staffIncharge: "Department Coordinator",
    judge: "Dr. M. Ritchie Richardson",
    organizers: "Shendy, Prabanjan",
    rules: [
      "1 participant per team.",
      "Digital presentation via soft copy in the front of judges.",
      "Note: This event conduction will be online."
    ]
  },
  {
    id: "ug-prompt",
    category: "UG",
    type: "Technical",
    title: "Prompt",
    shortDesc: "On-spot interactive AI prompt engineering challenge testing precise AI generation.",
    teamSize: "1 participant per team",
    venue: "Lab",
    time: "9:30 am - 10:00 am",
    duration: "20 minutes",
    staffIncharge: "Ms. P. Malarvizhi",
    judge: "Dr. T. John paul Antony",
    organizers: "Sivakumar M, Aakash Gandhi MGR",
    rules: [
      "1 participant per team.",
      "On-spot interactive AI Prompt Task.",
      "Time duration: 20 minutes."
    ]
  },
  {
    id: "ug-corporate-walk",
    category: "UG",
    type: "Professional",
    title: "Corporate Walk",
    shortDesc: "Professional corporate walk judged on posture, confident walking, body language & grooming.",
    teamSize: "1 participant per team",
    venue: "Mul Purpose Hall",
    time: "9:30 am – 10:00 am",
    duration: "3 minutes",
    staffIncharge: "Mrs. K. Sankarewari",
    judge: "Dr. Shourini Banerjee",
    organizers: "Krishna Kumar B, NaveenKumar, Jayapandi",
    rules: [
      "1 participant per team.",
      "The dress code must follow a formal corporate theme.",
      "The walk should include: Proper posture, Confident walking, Professional body language, Appropriate facial expression, and Proper grooming.",
      "Duration: 3 minutes."
    ]
  },

  // =========================================================================
  // POSTGRADUATE (PG) EVENTS (6 Events)
  // =========================================================================
  {
    id: "pg-quiz",
    category: "PG",
    type: "Technical",
    title: "Quiz",
    shortDesc: "Advanced level technical and current affairs quiz for postgraduate candidates.",
    teamSize: "2 participants per team",
    venue: "E11",
    time: "10:15 am – 11:00 am",
    duration: "45 Minutes",
    staffIncharge: "Dr. K. Berlin",
    judge: "Department Panel",
    organizers: "Jamuna Varshini B, Ashiyashifana J",
    rules: [
      "Prelims will be conducted.",
      "2 participants per team.",
      "Questions based on current affairs and basic technology.",
      "Any act against the spirit of the game will lead to disqualification of the team."
    ]
  },
  {
    id: "pg-paper-presentation",
    category: "PG",
    type: "Technical",
    title: "Paper Presentation",
    shortDesc: "Postgraduate paper defense with hard copy & soft copy presentation before doctoral chair.",
    teamSize: "1 participant per team",
    venue: "E12",
    time: "11:00 am – 12:30 pm",
    duration: "3 mins presentation + 2 mins queries",
    staffIncharge: "Ms. V. Backiyalaksmi",
    judge: "Dr. A. John Sanjeev kumar",
    organizers: "Shanthiya S, Vishali S",
    rules: [
      "1 participant per team.",
      "Participants should bring hard copy and soft copy.",
      "Time Duration: 3 minutes for presentation and 2 minutes for queries."
    ]
  },
  {
    id: "pg-startup-idea",
    category: "PG",
    type: "Innovation",
    title: "Startup Idea",
    shortDesc: "Pitch viable startup business ideas with soft copy and hard copy documentation to jury.",
    teamSize: "2 participants per team",
    venue: "English Conference",
    time: "9:30 am – 10:30 am",
    duration: "3 mins presentation + 2 mins queries",
    staffIncharge: "Mr. M. Silvanus Manual",
    judge: "Dr. P.F.E. Divakaran",
    organizers: "Srinithi D, Swetha",
    rules: [
      "2 participants per team.",
      "Participants should bring soft copy and hard copy.",
      "Time: 3 minutes for presentation and 2 minutes for queries."
    ]
  },
  {
    id: "pg-stress-interview",
    category: "PG",
    type: "Soft Skills",
    title: "Stress Interview",
    shortDesc: "Master's level deliberate pressure interview to evaluate psychological composure & answers.",
    teamSize: "1 participant per team",
    venue: "Msc 1",
    time: "10:15 am – 11:00 am",
    duration: "5 minutes",
    staffIncharge: "Mrs. K. Sankarewari",
    judge: "Dr. Mr. R. Jackson Gunaraj",
    organizers: "Mogesh M, Kabilan RP",
    rules: [
      "1 participant per team.",
      "The participant will face an individual interview conducted by the judges.",
      "The interviewer may deliberately create pressure or challenging situations to test the participant's response.",
      "Participants should remain calm, confident, and professional throughout the interview.",
      "Time Duration: 5 minutes."
    ]
  },
  {
    id: "pg-prompt",
    category: "PG",
    type: "Technical",
    title: "Prompt",
    shortDesc: "Advanced prompt engineering challenge on spot in the computer lab.",
    teamSize: "1 participant per team",
    venue: "Lab",
    time: "10:00 am - 10:30 am",
    duration: "20 minutes",
    staffIncharge: "Ms. P. Malarvizhi",
    judge: "Dr. T. John paul Antony",
    organizers: "Sivakumar M, Aakash Gandhi MGR",
    rules: [
      "1 participant per team.",
      "On-spot interactive AI Prompt Task.",
      "Time duration: 20 minutes."
    ]
  },
  {
    id: "pg-corporate-walk",
    category: "PG",
    type: "Professional",
    title: "Corporate Walk",
    shortDesc: "Corporate walk evaluation for PG candidates: posture, confidence, body language & grooming.",
    teamSize: "1 participant per team",
    venue: "Mul Purpose Hall",
    time: "10:00 am – 11:00 am",
    duration: "3 minutes",
    staffIncharge: "Mrs. K. Sankarewari",
    judge: "Dr. Shourini Banerjee",
    organizers: "Krishna Kumar B, NaveenKumar, Jayapandi",
    rules: [
      "1 participant per team.",
      "The dress code must follow a formal corporate theme.",
      "The walk should include: Proper posture, Confident walking, Professional body language, Appropriate facial expression, and Proper grooming.",
      "Duration: 3 minutes."
    ]
  }
];
