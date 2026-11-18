import React, { useState } from "react";
import {
    FESTIVAL_INFO,
    STRUCTURED_GUIDELINES,
    EVENTS,
    STUDENT_COORDINATORS,
    ORGANIZING_COMMITTEE
  } from "./festData";
import {
    ExternalLink,
    X,
    Search,
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
    Scale,
    Mail,
    Send,
    Phone
  } from "lucide-react";

export default function App() {
  const [selectedDegree, setSelectedDegree] = useState("UG"); // "UG" or "PG"
  const [selectedType, setSelectedType] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeEventModal, setActiveEventModal] = useState(null);
  const [activeGuidelineModal, setActiveGuidelineModal] = useState(null);
  const [currentNavTab, setCurrentNavTab] = useState("events");

  // Determine active registration link based on active section (UG or PG)
  const activeRegistrationUrl = selectedDegree === "PG"
    ? FESTIVAL_INFO.pgGoogleFormUrl
    : FESTIVAL_INFO.ugGoogleFormUrl;

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
    ev.venue.toLowerCase().includes(searchQuery.toLowerCase());
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
              href={activeRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn"
              title={`Register for ${selectedDegree} Events`}
            >
              <span>Register ({selectedDegree})</span>
              <ExternalLink size={13} />
            </a>
          </nav>

          {/* Mobile Direct Register Pill Button inside Top Bar */}
          <a
            href={activeRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-top-cta"
            title={`Register for ${selectedDegree} Events`}
          >
            <span>Register ({selectedDegree})</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </header>

      <main>
        {/* =================================================================
            1. HERO SECTION (Featuring SYNORA 2026 Emblem & Poster Details)
            ================================================================= */}
        <section className="hero-section">
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2rem" }}>
              {/* High-Res Logo Display */}
              <div style={{ position: "relative", marginBottom: "1.25rem" }}>
                < img
                  src="/synora-logo.png"
                  alt="SYNORA 2026 Emblem"
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

                  < div style={{
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

            {/* Action Button to Explore Events */}
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a href="#events" className="btn-primary" style={{ padding: "0.85rem 2rem" }}>
                <span>Explore UG & PG Arenas</span>
              </a>
            </div>
          </div>

          {/* Dignitaries Citation & Organizing Committee from Official Poster */}
          <div style={{
            background: "#11141a",
            borderRadius: "12px",
            border: "1px solid var(--border)",
            padding: "1.5rem 1.25rem",
            marginTop: "1.75rem",
            maxWidth: "880px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
              paddingBottom: "1.25rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.07)"
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>{FESTIVAL_INFO.principal}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)", marginTop: "3px" }}>
                  {FESTIVAL_INFO.principalRole}
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>{FESTIVAL_INFO.hod}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)", marginTop: "3px" }}>
                  {FESTIVAL_INFO.hodRole}
                </div>
              </div>
            </div>

            {/* Organizing Committee Staff Names (Below HOD & Principal, outside event cards) */}
            <div style={{ marginTop: "1.25rem", textAlign: "center" }}>
              <div style={{
                fontSize: "0.78rem",
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                marginBottom: "0.75rem"
              }}>
                // Organizing Committee
              </div>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.5rem 0.75rem"
              }}>
                {ORGANIZING_COMMITTEE.map((staffName, index) => (
                  <span
                    key={index}
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border)",
                      color: "#e2e8f0",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      padding: "0.35rem 0.85rem",
                      borderRadius: "20px"
                    }}
                  >
                    {staffName}
                  </span>
                ))}
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
                    padding: "0.6rem 1rem 0.6rem 2.2rem",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "20px",
                    color: "#fff",
                    fontSize: "0.85rem",
                    outline: "none"
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      color: "var(--text-muted)",
                      cursor: "pointer",
                      padding: 0
                    }}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Event Type Filters */}
            <div className="filter-chips">
              {["ALL", "Technical", "Non-Technical", "Creative", "Soft Skills", "Professional", "Innovation"].map((type) => {
                const count = EVENTS.filter(e => e.category === selectedDegree && (type === "ALL" || e.type === type)).length;
                if (count === 0 && type !== "ALL") return null;

                return (
                  <button
                    key={type}
                    className={`filter-chip ${selectedType === type ? "active" : ""}`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Events Grid (Cleaned: No Judges, No Register Buttons on Cards) */}
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

                  {event.requiresSubmission && (
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "rgba(229, 149, 0, 0.08)",
                      border: "1px solid rgba(229, 149, 0, 0.25)",
                      borderRadius: "6px",
                      padding: "0.45rem 0.65rem",
                      fontSize: "0.76rem",
                      color: "var(--accent)",
                      marginBottom: "0.85rem"
                    }}>
                      <Send size={13} style={{ flexShrink: 0 }} />
                      <span>Submit soft copy to <strong>{event.submissionEmail}</strong> before <strong>{event.submissionDeadline}</strong></span>
                    </div>
                  )}

                  <div className="card-spec-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
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
                  </div>

                  <div className="card-action-bar" onClick={(e) => e.stopPropagation()}>
                    <button
                      className="btn-details"
                      style={{ width: "100%", justifyContent: "center" }}
                      onClick={() => setActiveEventModal(event)}
                    >
                      View Rules & Guidelines
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {
                filteredEvents.length === 0 && (
                  <div style={{ textAlign: "center", padding: "3rem", background: "var(--bg-card)", borderRadius: "10px", border: "1px solid var(--border)" }}>
                    <p style={{ color: "var(--text-muted)" }}>No events matching your filter.</p>
                  </div>
                )
              }
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

              <h4 className="modal-section-title">// Official Rules & Guidelines</h4>
              <ul className="modal-rules-list">
                {activeEventModal.rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>

              {activeEventModal.requiresSubmission && (
                <div style={{
                  marginTop: "1.2rem",
                  padding: "0.85rem 1rem",
                  background: "rgba(229, 149, 0, 0.08)",
                  border: "1px solid rgba(229, 149, 0, 0.3)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  flexWrap: "wrap"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <Mail size={18} color="var(--accent)" />
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff" }}>Soft Copy Email Submission</div>
                      <div style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>
                        Send to <strong style={{ color: "var(--accent)" }}>{activeEventModal.submissionEmail}</strong> on or before <strong>{activeEventModal.submissionDeadline}</strong>
                      </div>
                    </div>
                  </div>
                    <a
                    href={`mailto:${activeEventModal.submissionEmail}?subject=${encodeURIComponent(`${activeEventModal.title} (${activeEventModal.category}) - Soft Copy Submission`)}`}
                    className="btn-secondary"
                    style={{ padding: "0.4rem 0.8rem", fontSize: "0.78rem" }}
                  >
                    <span>Compose Mail</span>
                  </a>
                </div>
              )}
            </div>

            <div className="modal-footer">
                <button
                className="btn-secondary"
                style={{ width: "100%" }}
                onClick={() => setActiveEventModal(null)}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
            3. STUDENT COORDINATORS (Clean & Compact 2-Column)
            ================================================================= */}
      <section id="coordinators" className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">// Central Leadership</span>
            <h2 className="section-title">Student Coordinators</h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.4rem", fontSize: "0.92rem" }}>
              Lead student representatives for SYNORA 2026. Contact for registration support or clarifications.
            </p>
          </div>

          <div className="coordinators-grid">
            {STUDENT_COORDINATORS.map((coord, idx) => (
              <div key={idx} className="coordinator-card">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <div className="coordinator-name">
                    {coord.name} <span style={{ color: "var(--accent)", fontSize: "0.85em", fontWeight: 600 }}>({coord.track})</span>
                  </div>
                  <span className={`badge-tag ${coord.track === "UG" ? "badge-ug" : "badge-pg"}`} style={{ fontSize: "0.65rem", padding: "1px 6px" }}>
                    {coord.track} Lead
                  </span>
                </div>

                <div className="coordinator-roll">
                  Roll No: {coord.rollNo}
                </div>

                {coord.phone && (
                    <a
                      href={`tel:${coord.phoneTel}`}
                      className="coordinator-phone"
                      title={`Call ${coord.name}`}
                    >
                      <Phone size={12} />
                      <span>{coord.phone}</span>
                    </a>
                )}
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
                <div
                  key={idx}
                  className="protocol-card clickable-protocol-card"
                  onClick={() => setActiveGuidelineModal({ item, iconIndex: idx })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter") setActiveGuidelineModal({ item, iconIndex: idx }); }}
                  style={{ cursor: "pointer" }}
                >
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

                  <div className="protocol-footer-action">
                    <span className="protocol-number-tag">
                      PROTOCOL #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="protocol-view-hint">
                      Click to View Details →
                    </span>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal / Dialog for Rules & Regulations Directive */}
      {activeGuidelineModal && (
        <div className="modal-overlay" onClick={() => setActiveGuidelineModal(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-drag-handle"></div>
              <button
              className="modal-close-btn"
              onClick={() => setActiveGuidelineModal(null)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="modal-header">
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <span className="badge-tag badge-ug">
                  {activeGuidelineModal.item.badge}
                </span>
                <span className="badge-type">{activeGuidelineModal.item.category}</span>
              </div>
              <h3 className="modal-title" style={{ marginTop: "0.5rem" }}>
                {activeGuidelineModal.item.title}
              </h3>
            </div>

            <div style={{ margin: "1.25rem 0" }}>
              <div style={{
                background: "#0e1116",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "1.25rem",
                lineHeight: "1.65",
                color: "#f0f3f8",
                fontSize: "0.95rem"
              }}>
                {activeGuidelineModal.item.desc}
              </div>

              {activeGuidelineModal.item.badge === "Digital" && (
                <div style={{
                  marginTop: "1rem",
                  padding: "0.85rem 1rem",
                  background: "rgba(229, 149, 0, 0.08)",
                  border: "1px solid rgba(229, 149, 0, 0.3)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <Mail size={18} color="var(--accent)" />
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                    Send soft copy to <strong style={{ color: "var(--accent)" }}>{FESTIVAL_INFO.contactEmail}</strong> on or before <strong>23/11/2026</strong>.
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
                <button
                className="btn-secondary"
                style={{ width: "100%" }}
                onClick={() => setActiveGuidelineModal(null)}
              >
                Close Regulation Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
            5. REGISTRATION GATEWAY (Targeted UG / PG Google Form)
            ================================================================= */}
      <section id="register" className="section" style={{ backgroundColor: "#0f1217" }}>
        <div className="container">
          <div className="register-callout-card">
            <span className="section-eyebrow">// Registration Gateway</span>
            <h2 className="register-callout-title">
              Register for SYNORA 2026
            </h2>
            <p className="register-callout-sub">
              Registrations are accepted via official Google Forms. Active degree track selected above: <strong style={{ color: "var(--accent)" }}>{selectedDegree === "UG" ? "Undergraduate (UG)" : "Postgraduate (PG)"}</strong>. Entry fee: <strong>{FESTIVAL_INFO.registrationFee}</strong>.
            </p>

            <div className="form-steps-row">
              <div className="form-step-box">
                <span className="step-num">STEP 01</span>
                <div className="step-heading">Open {selectedDegree} Form</div>
                <p className="step-text">Click the button below to load the designated {selectedDegree} participant registration form.</p>
              </div>
              <div className="form-step-box">
                <span className="step-num">STEP 02</span>
                <div className="step-heading">Event Selection</div>
                <p className="step-text">Choose your {selectedDegree} competitions ({selectedDegree === "UG" ? "Quiz, Paper, Fireless Cooking, Ad-Zap, etc." : "Quiz, Paper, Startup Idea, Stress Interview, etc."}).</p>
              </div>
              <div className="form-step-box">
                <span className="step-num">STEP 03</span>
                <div className="step-heading">Fee & Check-In</div>
                <p className="step-text">Pay ₹70 at the check-in desk on the event day and receive your entry credentials and refreshment coupons.</p>
              </div>
            </div>

            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", width: "100%" }}>
                <a
                href={activeRegistrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "0.95rem 2.2rem", fontSize: "1.05rem" }}
              >
                <span>Open Official {selectedDegree} Registration Form</span>
                <ExternalLink size={18} />
              </a>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                💡 Form automatically synced to <strong>{selectedDegree === "UG" ? "Undergraduate (UG)" : "Postgraduate (PG)"}</strong> track chosen in the Events section above.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>

      {/* Footer (Clean & Minimalist with Dynamic UG/PG link) */ }
  <footer className="site-footer">
    <div className="container">
      <div className="footer-compact-wrap">
        <div className="footer-brand-side">
          <div className="footer-logo-row">
                <img
              src="/synora-logo.png"
              alt="SYNORA"
              className="footer-logo-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className="footer-brand-title">{FESTIVAL_INFO.name}</span>
            <span className="footer-brand-badge">2026</span>
          </div>
          <p className="footer-college-sub">
            {FESTIVAL_INFO.college} (Autonomous) • {FESTIVAL_INFO.department}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px", fontSize: "0.82rem" }}>
            <Mail size={13} color="var(--accent)" />
            <span style={{ color: "var(--text-faint)" }}>Official Contact:</span>
                <a
              href={`mailto:${FESTIVAL_INFO.contactEmail}`}
              style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}
            >
              {FESTIVAL_INFO.contactEmail}
            </a>
          </div>
        </div>

        <div className="footer-actions-side">
              <a
            href={activeRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-register-btn"
            title={`Register for ${selectedDegree}`}
          >
            <span>Register {selectedDegree} (₹70)</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      <div className="footer-copy">
        © 2026 SYNORA • Department of Computer Science (Satellite Campus), The American College, Madurai.
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
      href={activeRegistrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-app-tab-cta"
      title={`Register for ${selectedDegree}`}
    >
      <ExternalLink size={14} />
      <span>Register ({selectedDegree})</span>
    </a>
  </nav>
    </div >
  );
}
