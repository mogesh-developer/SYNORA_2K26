import React, { useState } from "react";
import { 
  FESTIVAL_INFO, 
  STRUCTURED_GUIDELINES, 
  EVENTS, 
  STUDENT_COORDINATORS 
} from "./festData";
import { 
  ExternalLink, 
  X, 
  Search, 
  ArrowRight, 
  Users, 
  Award, 
  Building2, 
  Calendar, 
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Timer,
  Laptop,
  Trophy,
  Scale
} from "lucide-react";

export default function App() {
  const [selectedDegree, setSelectedDegree] = useState("UG"); // "UG" or "PG"
  const [selectedType, setSelectedType] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeEventModal, setActiveEventModal] = useState(null);
  const [currentNavTab, setCurrentNavTab] = useState("events");

  // Icon map for structured guidelines
  const getGuidelineIcon = (index) => {
    switch (index) {
      case 0: return <FileCheck size={22} className="guideline-badge-icon" />;
      case 1: return <ShieldCheck size={22} className="guideline-badge-icon" />;
      case 2: return <Timer size={22} className="guideline-badge-icon" />;
      case 3: return <Laptop size={22} className="guideline-badge-icon" />;
      case 4: return <Scale size={22} className="guideline-badge-icon" />;
      case 5: return <Trophy size={22} className="guideline-badge-icon" />;
      default: return <CheckCircle2 size={22} className="guideline-badge-icon" />;
    }
  };

  // Dynamic filter for events
  const filteredEvents = EVENTS.filter((ev) => {
    const degreeMatch = ev.category === selectedDegree;
    const typeMatch = selectedType === "ALL" || ev.type === selectedType;
    const searchMatch =
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ev.staffIncharge && ev.staffIncharge.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (ev.judge && ev.judge.toLowerCase().includes(searchQuery.toLowerCase()));
    return degreeMatch && typeMatch && searchMatch;
  });

  return (
    <div className="site-wrapper">
      {/* Redesigned Floating Capsule Top Navbar */}
      <header className="header-nav">
        <div className="header-floating-pill">
          {/* Brand Identity with Emblem */}
          <a href="#" className="brand-link">
            <div className="brand-logo-glow">
              <img 
                src="/synora-logo.png" 
                alt="SYNORA Logo" 
                className="brand-logo-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="brand-meta">
              <span className="brand-name">{FESTIVAL_INFO.name}</span>
              <span className="brand-sub">The American College</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-links">
            <a href="#events" className="nav-link">Competitions</a>
            <a href="#coordinators" className="nav-link">Coordinators</a>
            <a href="#guidelines" className="nav-link">Guidelines</a>
            <a 
              href={FESTIVAL_INFO.googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-cta-btn"
            >
              <span>Register</span>
              <ExternalLink size={13} />
            </a>
          </nav>

          {/* Mobile Direct Register Pill Button inside Top Bar */}
          <a 
            href={FESTIVAL_INFO.googleFormUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-top-cta"
          >
            <span>Register</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </header>

      <main>
        {/* =================================================================
            1. HERO SECTION (Featuring SYNORA 2K26 Emblem & Poster Details)
            ================================================================= */}
        <section className="hero-section">
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2rem" }}>
              {/* High-Res Logo Display */}
              <div style={{ position: "relative", marginBottom: "1.25rem" }}>
                <img 
                  src="/synora-logo.png" 
                  alt="SYNORA 2K26 Emblem"
                  style={{ 
                    width: "180px", 
                    height: "180px", 
                    objectFit: "contain", 
                    borderRadius: "50%",
                    filter: "drop-shadow(0 10px 30px rgba(229,149,0,0.4))"
                  }}
                />
              </div>

              <div className="hero-college-badge">
                <span className="hero-pulse-dot"></span>
                <span>{FESTIVAL_INFO.college} • {FESTIVAL_INFO.department}</span>
              </div>

              <h1 className="hero-title" style={{ maxWidth: "800px" }}>
                {FESTIVAL_INFO.name}
              </h1>

              <div style={{ 
                fontFamily: "var(--font-serif)", 
                fontStyle: "italic", 
                fontSize: "1.35rem", 
                color: "#fbd38d", 
                marginBottom: "1rem" 
              }}>
                "{FESTIVAL_INFO.tagline}"
              </div>

              <p className="hero-tagline" style={{ maxWidth: "680px", margin: "0 auto 1.75rem" }}>
                {FESTIVAL_INFO.eventType} organized by the <strong>{FESTIVAL_INFO.department}</strong>. 
                Featuring distinct, dedicated competition arenas for <strong>Undergraduate (UG)</strong> and <strong>Postgraduate (PG)</strong> delegates with allocated hall venues, prizes, and overall trophy.
              </p>

              {/* Event Date, Timing & Venue Strip */}
              <div style={{
                background: "rgba(22, 25, 32, 0.85)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1rem 1.5rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.5rem 2.5rem",
                marginBottom: "2rem",
                maxWidth: "780px",
                width: "100%"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", textAlign: "left" }}>
                  <Calendar size={20} color="var(--accent)" />
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)" }}>Date</div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#fff" }}>{FESTIVAL_INFO.dateFormatted}</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", textAlign: "left" }}>
                  <Clock size={20} color="var(--accent)" />
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)" }}>Timing</div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#fff" }}>{FESTIVAL_INFO.timeFormatted} Onwards</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", textAlign: "left" }}>
                  <Building2 size={20} color="var(--accent)" />
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)" }}>Campus Location</div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#fff" }}>Satellite Campus, Madurai</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hero-actions" style={{ justifyContent: "center" }}>
                <a 
                  href={FESTIVAL_INFO.googleFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <span>Register via Google Form</span>
                  <ArrowRight size={17} />
                </a>
                <a href="#events" className="btn-secondary">
                  <span>Explore UG & PG Arenas</span>
                </a>
              </div>
            </div>

            {/* Dignitaries Citation from Poster */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
              gap: "1rem",
              padding: "1.25rem",
              background: "#11141a",
              borderRadius: "10px",
              border: "1px solid var(--border)",
              marginTop: "1.5rem"
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff" }}>{FESTIVAL_INFO.principal}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-mono)", marginTop: "2px" }}>
                  {FESTIVAL_INFO.principalRole}
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff" }}>{FESTIVAL_INFO.hod}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-mono)", marginTop: "2px" }}>
                  {FESTIVAL_INFO.hodRole}
                </div>
              </div>
            </div>

            <div className="hero-stats-row">
              <div className="stat-item">
                <span className="stat-num">{FESTIVAL_INFO.registrationFee}</span>
                <span className="stat-label">Entry & Refreshments</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">UG & PG</span>
                <span className="stat-label">Separated Tracks</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">14 Arenas</span>
                <span className="stat-label">Competitions Total</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">Overall Cup</span>
                <span className="stat-label">1st, 2nd, 3rd & Trophy</span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. EVENTS & COMPETITIONS (The Core Hub)
            Contains Hall details, Timings, Rules & Staff In-charge
            ================================================================= */}
        <section id="events" className="section">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">// Official Program Directory</span>
              <h2 className="section-title">Events & Competitions</h2>
              <p style={{ color: "var(--text-muted)", marginTop: "0.4rem", maxWidth: "650px", fontSize: "0.92rem" }}>
                Select your academic degree level below. Every card displays the designated hall, timing, rules, and staff in-charges.
              </p>
            </div>

            {/* Category Switches */}
            <div className="category-control-bar">
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                {/* Native App Segmented Tabs */}
                <div className="pill-switcher">
                  <button 
                    className={`pill-tab ${selectedDegree === "UG" ? "active" : ""}`}
                    onClick={() => { setSelectedDegree("UG"); setSelectedType("ALL"); }}
                  >
                    <Building2 size={16} />
                    <span>Undergraduate (UG) — 8 Events</span>
                  </button>
                  <button 
                    className={`pill-tab ${selectedDegree === "PG" ? "active" : ""}`}
                    onClick={() => { setSelectedDegree("PG"); setSelectedType("ALL"); }}
                  >
                    <Award size={16} />
                    <span>Postgraduate (PG) — 6 Events</span>
                  </button>
                </div>

                {/* Instant Search Bar */}
                <div style={{ position: "relative", flex: "1 1 240px", maxWidth: "340px" }}>
                  <Search size={15} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-faint)" }} />
                  <input
                    type="text"
                    placeholder={`Search events, halls, staff...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: "100%",
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "0.55rem 0.85rem 0.55rem 2.1rem",
                      color: "#fff",
                      fontSize: "0.85rem",
                      outline: "none"
                    }}
                  />
                </div>
              </div>

              {/* Clean Filter Chips */}
              <div className="sub-filter-row" style={{ marginTop: "0.75rem" }}>
                <button 
                  className={`filter-btn ${selectedType === "ALL" ? "active" : ""}`}
                  onClick={() => setSelectedType("ALL")}
                >
                  All Events
                </button>
                <button 
                  className={`filter-btn ${selectedType === "Technical" ? "active" : ""}`}
                  onClick={() => setSelectedType("Technical")}
                >
                  Technical
                </button>
                {selectedDegree === "UG" ? (
                  <>
                    <button className={`filter-btn ${selectedType === "Non-Technical" ? "active" : ""}`} onClick={() => setSelectedType("Non-Technical")}>Fireless Cooking</button>
                    <button className={`filter-btn ${selectedType === "Creative" ? "active" : ""}`} onClick={() => setSelectedType("Creative")}>Ad-Zap & Poster</button>
                    <button className={`filter-btn ${selectedType === "Soft Skills" ? "active" : ""}`} onClick={() => setSelectedType("Soft Skills")}>Stress Interview</button>
                  </>
                ) : (
                  <>
                    <button className={`filter-btn ${selectedType === "Innovation" ? "active" : ""}`} onClick={() => setSelectedType("Innovation")}>Startup Idea</button>
                    <button className={`filter-btn ${selectedType === "Soft Skills" ? "active" : ""}`} onClick={() => setSelectedType("Soft Skills")}>Stress Interview</button>
                    <button className={`filter-btn ${selectedType === "Professional" ? "active" : ""}`} onClick={() => setSelectedType("Professional")}>Corporate Walk</button>
                  </>
                )}
              </div>
            </div>

            {/* Event Cards Grid */}
            <div className="events-grid">
              {filteredEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="event-card"
                  onClick={() => setActiveEventModal(event)}
                >
                  <div className="card-top-meta">
                    <span className={`badge-tag ${event.category === "UG" ? "badge-ug" : "badge-pg"}`}>
                      {event.category} Category
                    </span>
                    <span className="badge-type">{event.type}</span>
                  </div>

                  <h3 className="card-title">{event.title}</h3>
                  <p className="card-desc">{event.shortDesc}</p>

                  <div className="card-spec-grid">
                    <div className="spec-cell">
                      <span className="spec-title">Hall / Venue</span>
                      <span className="spec-val" style={{ color: "var(--accent)" }}>{event.venue}</span>
                    </div>
                    <div className="spec-cell">
                      <span className="spec-title">Time Window</span>
                      <span className="spec-val">{event.time}</span>
                    </div>
                    <div className="spec-cell">
                      <span className="spec-title">Team Size</span>
                      <span className="spec-val">{event.teamSize}</span>
                    </div>
                    <div className="spec-cell">
                      <span className="spec-title">Staff In-Charge</span>
                      <span className="spec-val">{event.staffIncharge || "Department Staff"}</span>
                    </div>
                  </div>

                  <div className="card-action-bar" onClick={(e) => e.stopPropagation()}>
                    <button 
                      className="btn-details"
                      onClick={() => setActiveEventModal(event)}
                    >
                      View Rules & Judges
                    </button>
                    <a 
                      href={FESTIVAL_INFO.googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-register-direct"
                      title="Direct Google Form link"
                    >
                      <span>Register</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div style={{ textAlign: "center", padding: "3rem", background: "var(--bg-card)", borderRadius: "10px", border: "1px solid var(--border)" }}>
                <p style={{ color: "var(--text-muted)" }}>No events matching your filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Modal / Bottom Sheet for Rules & Staff Details */}
        {activeEventModal && (
          <div className="modal-overlay" onClick={() => setActiveEventModal(null)}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="modal-drag-handle"></div>
              <button 
                className="modal-close-btn"
                onClick={() => setActiveEventModal(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="modal-header">
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <span className={`badge-tag ${activeEventModal.category === "UG" ? "badge-ug" : "badge-pg"}`}>
                    {activeEventModal.category} Track
                  </span>
                  <span className="badge-type">{activeEventModal.type}</span>
                </div>
                <h3 className="modal-title">{activeEventModal.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.35rem" }}>
                  {activeEventModal.shortDesc}
                </p>
              </div>

              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ background: "#0e1116", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)" }}>
                    <span className="spec-title">Hall / Location</span>
                    <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--accent)", marginTop: "2px" }}>{activeEventModal.venue}</p>
                  </div>
                  <div style={{ background: "#0e1116", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)" }}>
                    <span className="spec-title">Scheduled Timing</span>
                    <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginTop: "2px" }}>{activeEventModal.time}</p>
                  </div>
                </div>

                <h4 className="modal-section-title">// Official Rules & Regulations</h4>
                <ul className="modal-rules-list">
                  {activeEventModal.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>

                <h4 className="modal-section-title">// Faculty & Judge Panel</h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem", marginTop: "0.5rem" }}>
                  <div style={{ background: "#0e1116", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)" }}>
                    <span className="spec-title">Staff In-Charge</span>
                    <p style={{ fontSize: "0.85rem", color: "#fff", marginTop: "2px", fontWeight: 600 }}>{activeEventModal.staffIncharge || "Staff Coordinator"}</p>
                  </div>
                  <div style={{ background: "#0e1116", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)" }}>
                    <span className="spec-title">Official Judge</span>
                    <p style={{ fontSize: "0.85rem", color: "var(--accent)", marginTop: "2px", fontWeight: 600 }}>{activeEventModal.judge || "Department Judge"}</p>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button 
                  className="btn-secondary" 
                  onClick={() => setActiveEventModal(null)}
                >
                  Close Window
                </button>
                <a 
                  href={FESTIVAL_INFO.googleFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <span>Open Google Form</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================
            3. STUDENT COORDINATORS (Clean & Compact)
            ================================================================= */}
        <section id="coordinators" className="section">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">// Central Leadership</span>
              <h2 className="section-title">Student Coordinators</h2>
              <p style={{ color: "var(--text-muted)", marginTop: "0.4rem", fontSize: "0.92rem" }}>
                Lead student representatives for SYNORA 2K26. Contact for registration support or clarifications.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
              {STUDENT_COORDINATORS.map((coord, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderLeft: "3px solid var(--accent)",
                    borderRadius: "8px",
                    padding: "1.1rem"
                  }}
                >
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "1.05rem" }}>{coord.name}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--accent)", fontFamily: "var(--font-mono)", marginTop: "4px" }}>
                    Roll No: {coord.rollNo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            4. RESTRUCTURED & STYLED GUIDELINES SECTION
            ================================================================= */}
        <section id="guidelines" className="section" style={{ backgroundColor: "#11141a" }}>
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">// Institutional Protocols</span>
              <h2 className="section-title">General Guidelines & Regulations</h2>
              <p style={{ color: "var(--text-muted)", marginTop: "0.4rem", maxWidth: "680px", fontSize: "0.92rem" }}>
                Official directives formulated by the Department of Computer Science (Satellite Campus) to maintain fair competition, campus decorum, and smooth hall transitions.
              </p>
            </div>

            <div className="styled-guidelines-grid">
              {STRUCTURED_GUIDELINES.map((item, idx) => (
                <div key={idx} className="protocol-card">
                  <div className="protocol-top-bar">
                    <div className="protocol-icon-wrap">
                      {getGuidelineIcon(idx)}
                    </div>
                    <span className="protocol-badge">
                      {item.badge}
                    </span>
                  </div>

                  <div className="protocol-category">{item.category}</div>
                  <h3 className="protocol-title">{item.title}</h3>
                  <p className="protocol-desc">{item.desc}</p>

                  <div className="protocol-number-tag">
                    PROTOCOL #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            5. REGISTRATION GATEWAY (Clean Google Form Flow)
            ================================================================= */}
        <section id="register" className="section" style={{ backgroundColor: "#0f1217" }}>
          <div className="container">
            <div className="register-callout-card">
              <span className="section-eyebrow">// Registration Gateway</span>
              <h2 className="register-callout-title">Register for SYNORA 2K26</h2>
              <p className="register-callout-sub">
                Registrations are accepted via Google Forms. Entry fee: <strong>{FESTIVAL_INFO.registrationFee}</strong>.
              </p>

              <div className="form-steps-row">
                <div className="form-step-box">
                  <span className="step-num">STEP 01</span>
                  <div className="step-heading">Open Google Form</div>
                  <p className="step-text">Click the link below and provide your Name, Roll Number, and Class details.</p>
                </div>
                <div className="form-step-box">
                  <span className="step-num">STEP 02</span>
                  <div className="step-heading">Select UG or PG Track</div>
                  <p className="step-text">Choose your designated category events (Quiz, Paper, Fireless Cooking, Prompt, etc.).</p>
                </div>
                <div className="form-step-box">
                  <span className="step-num">STEP 03</span>
                  <div className="step-heading">Fee & Refreshments</div>
                  <p className="step-text">Pay ₹70 at the registration desk and collect your event credentials and refreshment coupons.</p>
                </div>
              </div>

              <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", width: "100%" }}>
                <a 
                  href={FESTIVAL_INFO.googleFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                  style={{ padding: "0.95rem 2.2rem", fontSize: "1.05rem" }}
                >
                  <span>Open Official Google Registration Form</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <img 
                  src="/synora-logo.png" 
                  alt="SYNORA" 
                  style={{ width: "32px", height: "32px", objectFit: "contain", borderRadius: "50%" }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff" }}>{FESTIVAL_INFO.name}</span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", maxWidth: "380px", lineHeight: "1.5" }}>
                {FESTIVAL_INFO.college} (Autonomous) • {FESTIVAL_INFO.department}.
              </p>
              <p style={{ color: "var(--text-faint)", fontSize: "0.8rem", marginTop: "0.5rem" }}>
                {FESTIVAL_INFO.accreditation}
              </p>
            </div>

            <div>
              <div className="footer-col-title">Registration Desk</div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                Faculty: <strong style={{ color: "#fff" }}>Ms. P. Malarvizhi & Ms. D. Sindhiya Graham</strong>
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                Fee: <strong style={{ color: "var(--accent)" }}>{FESTIVAL_INFO.registrationFee}</strong>
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Date: <strong style={{ color: "#fff" }}>{FESTIVAL_INFO.dateFormatted} ({FESTIVAL_INFO.timeFormatted})</strong>
              </p>
            </div>

            <div>
              <div className="footer-col-title">Official Form Submission</div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.8rem" }}>
                Google Form link for participant roster and event selection:
              </p>
              <a 
                href={FESTIVAL_INFO.googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-register-direct"
                style={{ width: "fit-content" }}
              >
                <span>Submit Google Form</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="footer-copy">
            {FESTIVAL_INFO.name} • {FESTIVAL_INFO.college} • {FESTIVAL_INFO.department}.
          </div>
        </div>
      </footer>

      {/* =====================================================================
          FIXED MOBILE BOTTOM APP NAVBAR (Floating Pill Capsule Dock)
          ===================================================================== */}
      <nav className="mobile-app-bar" aria-label="Mobile Bottom App Bar">
        <a 
          href="#events" 
          className={`mobile-app-tab ${currentNavTab === "events" ? "active" : ""}`}
          onClick={() => setCurrentNavTab("events")}
        >
          <Building2 size={19} />
          <span>Events</span>
        </a>
        <a 
          href="#coordinators" 
          className={`mobile-app-tab ${currentNavTab === "team" ? "active" : ""}`}
          onClick={() => setCurrentNavTab("team")}
        >
          <Users size={19} />
          <span>Team</span>
        </a>
        <a 
          href={FESTIVAL_INFO.googleFormUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-app-tab-cta"
        >
          <ExternalLink size={14} />
          <span>Register</span>
        </a>
      </nav>
    </div>
  );
}
