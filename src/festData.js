// Official Intra / Inter Department Meet Data — SYNORA 2026
// Exact details synchronized from Official Poster & Event Document

export const FESTIVAL_INFO = {
  name: "SYNORA 2026",
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
  dateFormatted: "Wednesday, November 25, 2026",
  timeFormatted: "9:30 am",
  registrationFee: "₹70 per head",
  ugGoogleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeFDoOmhDGrnAva5a3s7UffPSpaT6ziTMslVgHMOGuuZyJHtQ/viewform?usp=dialog", // UG Registration Form
  pgGoogleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSepOhnhrB9NgsQ_zhBeZPifoZghPAlHvT73Dcx5Rf49jsggqg/viewform?usp=publish-editor", // PG Registration Form
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeFDoOmhDGrnAva5a3s7UffPSpaT6ziTMslVgHMOGuuZyJHtQ/viewform?usp=dialog", // Default Fallback Form
  contactEmail: "amcsynora@gmail.com",
  convenorContact: "+91 98401 23456"
};

// Organizing Committee Staff Members directly from Official Poster
export const ORGANIZING_COMMITTEE = [
  "Mrs. K. Sankareswari",
  "Dr. K. Berlin",
  "Mr. M. Silvanus Manuel",
  "Mrs. V. Backiyalakshmi",
  "Mrs. P. Malarvizhi",
  "Mrs. D. Sindhiya Graham"
];

// Student Coordinators directly from Official Document
export const STUDENT_COORDINATORS = [
  {
    name: "MUTHUPANDI M",
    track: "PG",
    rollNo: "25PCS203",
    phone: "86430 70595",
    phoneTel: "+918643070595"
  },
  {
    name: "SRINITHI D",
    track: "PG",
    rollNo: "26PCS211",
    phone: "94886 69469",
    phoneTel: "+919488669469"
  },
  {
    name: "MOHAMED IMRAN S",
    track: "UG",
    rollNo: "24COS223",
    phoneca: "90809 31770",
    phoneTel: "+919080931770"
  },
  {
    name: "SRINITHI S",
    track: "UG",
    rollNo: "24COS245",
    phone: "80726 39705",
    phoneTel: "+918072639705"
  }
];

// Structured Guidelines
export const STRUCTURED_GUIDELINES = [
  {
    category: "Registration & Credentials",
    title: "Entry Fee & Check-In",
    desc: "Fixed entry fee of ₹70 per participant. Covers official event participation credentials and refreshment coupons.",
    badge: "Mandatory"
  },
  {
    category: "Academic Brackets",
    title: "Strict Track Isolation",
    desc: "UG candidates participate strictly in UG arenas. PG candidates compete exclusively in PG events to ensure equal academic benchmarking.",
    badge: "Eligibility"
  },
  {
    category: "Punctuality & Presence",
    title: "Reporting to Designated Halls",
    desc: "Participants must assemble at their respective allocated halls (E10, E11, E12, Msc 1, Msc 2, Msc 3, AI Lab, Multi Purpose Hall) 15 minutes before the time slot.",
    badge: "Timeline"
  },
  {
    category: "Digital Challenge",
    title: "Poster Making (Online Mode)",
    desc: "Poster Making will be executed with online soft copy submission by 23.11.2026 to amcsynora@gmail.com, and physical hard copy submission on A3 size paper at the registration desk on event day.",
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

// Official Events from Document (Cleaned - No Judges or Organizers on Cards)
export const EVENTS = [
  // =========================================================================
  // UNDERGRADUATE (UG) EVENTS (8 Events)
  // =========================================================================
  {
    id: "ug-quiz",
    category: "UG",
    type: "Technical",
    title: "Quiz",
    shortDesc: "Questions based on current affairs and basic technology with preliminary round.",
    teamSize: "2 participants per team",
    venue: "E11, First Floor, Eva M.Swift Building",
    time: "09:30 am - 10:15 am",
    duration: "45 Minutes",
    rules: [
      "Prelims will be conducted.",
      "Two participants per team.",
      "Questions based on current affairs and basic technology.",
      "Any act against the spirit of the game will lead to disqualification of the team."
    ]
  },
  {
    id: "ug-paper-presentation",
    category: "UG",
    type: "Technical",
    title: "Paper Presentation",
    shortDesc: "Present technical research papers with hard copy and soft copy on cutting-edge themes.",
    teamSize: "1 participant per team",
    venue: "English Department Conference Hall, JB Building",
    time: "09:30 am - 11:00 am",
    duration: "3 mins presentation + 2 mins queries",
    requiresSubmission: true,
    submissionDeadline: "23.11.2026",
    submissionEmail: "amcsynora@gmail.com",
    rules: [
      "One person can participate.",
      "Participant should bring hard copy and soft copy of your presentation.",
      "Time Duration: 3 minutes for presentation and 2 minutes for queries.",
      "Submit the soft copy of your presentation on or before 23.11.2026 to amcsynora@gmail.com.",
      "Topics:",
      "• Emerging Trends, Innovations and Challenges in Science, Technology and Society",
      "• Digital Privacy: Are We Really Safe Online",
      "• Climate Change and Green Technology",
      "• Social Media: Connecting or Disconnecting People?",
      "• Women Empowerment Through Technology"
    ]
  },
  {
    id: "ug-fireless-cooking",
    category: "UG",
    type: "Non-Technical",
    title: "Fireless Cooking",
    shortDesc: "Culinary creativity without flame or electric appliances. Evaluated on hygiene, taste & presentation.",
    teamSize: "2 participants per team",
    venue: "E10, First Floor, Eva M.Swift Building",
    time: "10:15 am - 11:15 am",
    duration: "1 hour",
    rules: [
      "Two participants per team.",
      "No direct flames, induction stoves, or electric appliances are allowed.",
      "Participants must bring their own ingredients, utensils, and serving dishes.",
      "Pre-prepared items: Pre-chopped, grated, or blended ingredients are allowed, but the final assembly and presentation must be done during the competition.",
      "Participants must maintain cleanliness and hygiene throughout the competition.",
      "Team should ensure they clean up their cooking area before leaving.",
      "Time duration: One hour."
    ]
  },
  {
    id: "ug-ad-zap",
    category: "UG",
    type: "Creative",
    title: "Ad-Zap",
    shortDesc: "Create spot ads, skits, role-play or creative commercial presentations on an on-the-spot theme.",
    teamSize: "4 participants per team",
    venue: "JB12, JB Building",
    time: "09:30 am - 11:00 am",
    duration: "5 minutes",
    rules: [
      "Four participants per team.",
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
    title: "Poster Making (Online & Hard Copy Submission)",
    shortDesc: "Submit soft copy online by 23.11.2026 and bring hard copy on A3 size paper on event day.",
    teamSize: "1 participant per team",
    venue: "Online Mode (Hard Copy at Registration Desk)",
    time: "09:30 am - 10:30 am",
    duration: "1 hour",
    requiresSubmission: true,
    submissionDeadline: "23.11.2026",
    submissionEmail: "amcsynora@gmail.com",
    rules: [
      "One participant can participate.",
      "Participant must submit the soft copy of your poster on or before 23.11.2026 to amcsynora@gmail.com.",
      "Participant should bring the hard copy on A3 size paper and it should be submitted at the registration desk on the date.",
      "Topics:",
      "• Save Earth, Save Future",
      "• Go Green, Live Clean",
      "• Unity in Diversity",
      "• Stop Pollution, Start Revolution",
      "• Healthy Mind, Healthy Life"
    ]
  },
  {
    id: "ug-prompt-engineering",
    category: "UG",
    type: "Technical",
    title: "Prompt Engineering",
    shortDesc: "On-spot interactive AI prompt task assessing generative precision and logic.",
    teamSize: "1 participant per team",
    venue: "AI Lab, JB Building",
    time: "09:30 am - 10:00 am",
    duration: "20 minutes",
    rules: [
      "One person can participate.",
      "On-spot interactive AI Prompt Task.",
      "Time duration: 20 minutes."
    ]
  },
  {
    id: "ug-stress-interview",
    category: "UG",
    type: "Soft Skills",
    title: "Stress Interview",
    shortDesc: "Individual interview conducted under deliberate pressure to test poise and responsiveness.",
    teamSize: "1 participant per team",
    venue: "Conference Room, Second Floor, Eva M.Swift Building",
    time: "09:30 am - 10:30 am",
    duration: "5 minutes per candidate",
    rules: [
      "One person can participate.",
      "The participant will face an individual interview conducted by the judges.",
      "The interviewer may deliberately create pressure or challenging situations to test the participant's response.",
      "Participants should remain calm, confident, and professional throughout the interview.",
      "Time Duration: 5 minutes."
    ]
  },
  {
    id: "ug-corporate-walk",
    category: "UG",
    type: "Professional",
    title: "Corporate Walk",
    shortDesc: "Formal corporate attire walk judged on posture, confidence, body language & grooming.",
    teamSize: "1 participant per team",
    venue: "Multi Purpose Hall, Admin Block",
    time: "09:30 am - 10:30 am",
    duration: "3 minutes",
    rules: [
      "One person can participate.",
      "The dress code must follow a formal corporate theme.",
      "The walk should include:",
      "• Proper posture",
      "• Confident walking",
      "• Professional body language",
      "• Appropriate facial expression",
      "• Proper grooming",
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
    shortDesc: "Competitive technical and current affairs quiz designed for postgraduate participants.",
    teamSize: "2 participants per team",
    venue: "E11, First Floor, Eva M.Swift Building",
    time: "10:15 am - 11:00 am",
    duration: "45 Minutes",
    rules: [
      "Prelims will be conducted.",
      "Two participants per team.",
      "Questions based on current affairs and basic technology.",
      "Any act against the spirit of the game will lead to disqualification of the team."
    ]
  },
  {
    id: "pg-paper-presentation",
    category: "PG",
    type: "Technical",
    title: "Paper Presentation",
    shortDesc: "Postgraduate paper defense with hard copy and soft copy presentation before the chair.",
    teamSize: "1 participant per team",
    venue: "JB11, II M.Sc Computer Science, JB Building",
    time: "09:30 am - 11:30 am",
    duration: "3 mins presentation + 2 mins queries",
    requiresSubmission: true,
    submissionDeadline: "23.11.2026",
    submissionEmail: "amcsynora@gmail.com",
    rules: [
      "One person can participate.",
      "Participant should bring hard copy and soft copy of your presentation.",
      "Time Duration: 3 minutes for presentation and 2 minutes for queries.",
      "Submit the soft copy of your presentation on or before 23.11.2026 to amcsynora@gmail.com.",
      "Topics:",
      "• Emerging Trends, Innovations and Challenges in Science, Technology and Society",
      "• Digital Privacy: Are We Really Safe Online",
      "• Climate Change and Green Technology",
      "• Social Media: Connecting or Disconnecting People?",
      "• Women Empowerment Through Technology"
    ]
  },
  {
    id: "pg-startup-idea",
    category: "PG",
    type: "Innovation",
    title: "Startup Idea",
    shortDesc: "Pitch entrepreneurial startup concepts with business feasibility deck and Q&A viva.",
    teamSize: "1 participant per team",
    venue: "E12, First Floor, Eva M.Swift Building",
    time: "10:30 am - 11:30 am",
    duration: "3 mins presentation + 2 mins queries",
    requiresSubmission: true,
    submissionDeadline: "23.11.2026",
    submissionEmail: "amcsynora@gmail.com",
    rules: [
      "One person can participate.",
      "Each participant must present an original and innovative startup idea.",
      "Ideas can be based on technology, business, education, healthcare, social innovation or any other field. It must be practical, feasible and socially and economically beneficial.",
      "Copied ideas will lead to disqualification.",
      "Participants must clearly explain the problem statement and their proposed solution.",
      "Participants are allowed to use PowerPoint presentations, prototypes, models or demonstrations.",
      "Submit the soft copy of your presentation on or before 23.11.2026 to amcsynora@gmail.com.",
      "Time: 3 minutes for presentation and 2 minutes for queries."
    ]
  },
  {
    id: "pg-prompt-engineering",
    category: "PG",
    type: "Technical",
    title: "Prompt Engineering",
    shortDesc: "Postgraduate level on-spot generative AI challenge evaluating prompt craft.",
    teamSize: "1 participant per team",
    venue: "AI Lab, JB Building",
    time: "09:30 am - 10:00 am",
    duration: "20 minutes",
    rules: [
      "One person can participate.",
      "On-spot interactive AI Prompt Task.",
      "Time duration: 20 minutes."
    ]
  },
  {
    id: "pg-stress-interview",
    category: "PG",
    type: "Soft Skills",
    title: "Stress Interview",
    shortDesc: "Intense pressure test evaluating critical thinking, demeanor, and verbal composure.",
    teamSize: "1 participant per team",
    venue: "Conference Room, Second Floor, Eva M.Swift Building",
    time: "10:30 am - 11:30 am",
    duration: "5 minutes",
    rules: [
      "One person can participate.",
      "The participant will face an individual interview conducted by the judges.",
      "The interviewer may deliberately create pressure or challenging situations to test the participant's response.",
      "Participants should remain calm, confident, and professional throughout the interview.",
      "Time Duration: 5 minutes."
    ]
  },
  {
    id: "pg-corporate-walk",
    category: "PG",
    type: "Professional",
    title: "Corporate Walk",
    shortDesc: "Executive styling and formal runway walk evaluated on posture, demeanor and grooming.",
    teamSize: "1 participant per team",
    venue: "Multi Purpose Hall, Admin Block",
    time: "10:30 am - 11:30 am",
    duration: "3 minutes",
    rules: [
      "One person can participate.",
      "The dress code must follow a formal corporate theme.",
      "The walk should include:",
      "• Proper posture",
      "• Confident walking",
      "• Professional body language",
      "• Appropriate facial expression",
      "• Proper grooming",
      "Duration: 3 minutes."
    ]
  }
];
