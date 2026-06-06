import { useState } from "react";

import {
  ArrowRight,
  ShieldCheck,
  Zap,
  MapPin,
  Music,
  Tent,
  ShoppingBag,
  Building2,
  BriefcaseBusiness,
  Star,
  Users,
  Search,
  Headphones,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

import heroBg from "./assets/hero-bg.png";
import veroMark from "./assets/vero-mark.png";
import "./App.css";

const sectors = [
  {
    title: "Concerts",
    text: "Keeping live events safe and enjoyable.",
    icon: Music,
  },
  {
    title: "Festivals",
    text: "Experienced teams for large-scale events.",
    icon: Tent,
  },
  {
    title: "Retail",
    text: "Protecting staff, customers and assets.",
    icon: ShoppingBag,
  },
  {
    title: "Venues",
    text: "Tailored security for venues of all sizes.",
    icon: Building2,
  },
  {
    title: "Corporate",
    text: "Professional security for business and events.",
    icon: BriefcaseBusiness,
  },
];

const sectorTabs = [
  {
    label: "Retail",
    icon: ShoppingBag,
    active: true,
  },
  {
    label: "Hotels",
    icon: Building2,
  },
  {
    label: "Events",
    icon: Music,
  },
  {
    label: "Luxury",
    icon: Star,
  },
  {
    label: "Corporate",
    icon: BriefcaseBusiness,
  },
  {
    label: "VIP",
    icon: ShieldCheck,
  },
];

const sectorCards = [
  {
    tabLabel: "Retail",
    title: "Retail Security",
    icon: ShoppingBag,
    text: "Protecting people, property and profits across stores, shopping centres and retail environments of all sizes.",
    points: [
      "Loss prevention & theft deterrence",
      "Customer & staff safety",
      "Emergency response & incident management",
    ],
  },
  {
    tabLabel: "Hotels",
    title: "Hotel Security",
    icon: Building2,
    text: "Delivering exceptional guest experiences with discreet, professional security that protects your reputation.",
    points: [
      "Guest & VIP protection",
      "Crowd management",
      "24/7 on-site coverage",
    ],
  },
  {
    tabLabel: "Events",
    title: "Event Security",
    icon: Music,
    text: "Specialist security for events of any scale, from intimate gatherings to large public spectacles.",
    points: [
      "Crowd control & access management",
      "Stage & artist protection",
      "Risk assessment & contingency planning",
    ],
  },
  {
    tabLabel: "Luxury",
    title: "Luxury Security",
    icon: Star,
    text: "Discreet security professionals for luxury brands, premium spaces and high-value environments.",
    points: [
      "Luxury retail protection",
      "High-value asset safeguarding",
      "Polished client-facing presence",
    ],
  },
  {
    tabLabel: "Corporate",
    title: "Corporate Security",
    icon: BriefcaseBusiness,
    text: "Professional security staffing for offices, commercial buildings and corporate operations.",
    points: [
      "Reception & front-of-house security",
      "Staff and visitor protection",
      "Access control & incident response",
    ],
  },
  {
    tabLabel: "VIP",
    title: "VIP Security",
    icon: ShieldCheck,
    text: "Trusted security personnel for VIP guests, executives, private events and sensitive movements.",
    points: [
      "Executive & celebrity protection",
      "Secure arrivals and departures",
      "Discreet risk management",
    ],
  },
];

function App() {
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);
  const activeSectorLabel = sectorTabs[activeSectorIndex]?.label;

  const visibleSectorCards =
    activeSectorIndex <= 2 ? sectorCards.slice(0, 3) : sectorCards.slice(3, 6);

  const goToPreviousSector = () => {
    setActiveSectorIndex((currentIndex) =>
      currentIndex === 0 ? sectorTabs.length - 1 : currentIndex - 1,
    );
  };

  const goToNextSector = () => {
    setActiveSectorIndex((currentIndex) =>
      currentIndex === sectorTabs.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <main className="page">
      <section className="hero">
        <img src={heroBg} alt="" className="hero-bg" />

        <div className="hero-overlay-dark"></div>
        <div className="hero-overlay-bottom"></div>

        <header className="navbar">
          <div className="brand">
            <img
              src={veroMark}
              alt="Vero Security logo"
              className="brand-mark"
            />

            <div className="brand-text">
              <div className="brand-main">
                <span className="brand-v">V</span>ERO
              </div>
              <div className="brand-sub">SECURITY</div>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#about">About Us</a>
            <a href="#sectors">Sectors</a>
            <a href="#audiences">Candidates</a>
            <a href="#audiences">Employers</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </nav>

          <button className="nav-button">
            Hire Security Staff
            <ArrowRight size={18} />
          </button>
        </header>

        <div className="hero-content">
          <div className="left-content">
            <div className="eyebrow">
              <span></span>
              Professional. Vetted. Reliable.
            </div>

            <h1>
              Security You Can <br />
              Rely On.{" "}
              <strong>
                Events <br />
                You Can Focus On.
              </strong>
            </h1>

            <p>
              Highly trained security professionals protecting what matters
              most: your people, your property, and your reputation.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Hire Security Staff
                <ArrowRight size={20} />
              </button>

              <button className="secondary-btn">
                Find Security Jobs
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <aside className="feature-panel">
            <Feature
              icon={ShieldCheck}
              title="Vetted & Trained Professionals"
              text="All staff are fully vetted, licensed and trained to the highest standards."
            />

            <Feature
              icon={Zap}
              title="Rapid Deployment"
              text="Quick response teams ready to support your event at short notice."
            />

            <Feature
              icon={MapPin}
              title="Nationwide Coverage"
              text="Reliable security staffing across the UK for events of any size."
            />
          </aside>
        </div>

        <div className="sector-row">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <div className="sector-card" key={sector.title}>
                <Icon size={38} />

                <h3>{sector.title}</h3>

                <p>{sector.text}</p>

                <div className="sector-arrow">
                  <ArrowRight size={19} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="about-section" id="about">
        <img src={veroMark} alt="" className="about-watermark" />
        <div className="about-inner">
          <div className="about-top">
            <div className="about-copy">
              <p className="about-label">ABOUT VERO SECURITY</p>

              <h2>
                Built for Reliable <br />
                <span>Security Staffing</span>
              </h2>

              <p className="about-text">
                Vero Security connects businesses with fully vetted, licensed
                security professionals who show up prepared and perform when it
                matters most. From high-profile events to daily operations, we
                deliver the right people for the right job, anywhere in the UK.
              </p>
              <div className="about-tags">
                <div className="about-tag">
                  <ShieldCheck size={18} />
                  Events
                </div>

                <div className="about-tag">
                  <ShieldCheck size={18} />
                  Retail
                </div>

                <div className="about-tag">
                  <ShieldCheck size={18} />
                  Corporate
                </div>

                <div className="about-tag">
                  <ShieldCheck size={18} />
                  Venues
                </div>

                <div className="about-tag">
                  <ShieldCheck size={18} />
                  Hotels
                </div>

                <div className="about-tag">
                  <ShieldCheck size={18} />
                  Concierge
                </div>

                <div className="about-tag">
                  <ShieldCheck size={18} />
                  Luxury Developments
                </div>

                <div className="about-tag">
                  <ShieldCheck size={18} />
                  VIP Security
                </div>
              </div>
            </div>

            <div className="about-card-grid">
              <div className="about-card">
                <div className="about-card-icon">
                  <ShieldCheck size={36} />
                </div>
                <h3>Licensed Professionals</h3>
                <p>
                  All staff are fully licensed, insured and background checked.
                </p>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <BriefcaseBusiness size={36} />
                </div>
                <h3>Sector-Specific Staffing</h3>
                <p>
                  Specialist teams matched to your industry, venue and risk
                  profile.
                </p>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <Zap size={36} />
                </div>
                <h3>Fast Matching</h3>
                <p>Rapid deployment with availability across the UK, 24/7.</p>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <Star size={36} />
                </div>
                <h3>Quality First</h3>
                <p>
                  We maintain the highest standards through training,
                  supervision and feedback.
                </p>
              </div>
            </div>
          </div>
          <div className="process-heading">
            <span></span>
            <p>Our Recruitment Process</p>
            <span></span>
          </div>

          <div className="process-row">
            <div className="process-step">
              <Users size={42} />
              <div>
                <h3>1. Consult</h3>
                <p>We understand your security needs.</p>
              </div>
            </div>

            <ChevronRight className="process-arrow" size={34} />

            <div className="process-step">
              <Search size={42} />
              <div>
                <h3>2. Source</h3>
                <p>We recruit from our trusted network.</p>
              </div>
            </div>

            <ChevronRight className="process-arrow" size={34} />

            <div className="process-step">
              <ShieldCheck size={42} />
              <div>
                <h3>3. Screen</h3>
                <p>Rigorous vetting, checks & training.</p>
              </div>
            </div>

            <ChevronRight className="process-arrow" size={34} />

            <div className="process-step">
              <MapPin size={42} />
              <div>
                <h3>4. Deploy</h3>
                <p>Right people, right place, right time.</p>
              </div>
            </div>

            <ChevronRight className="process-arrow" size={34} />

            <div className="process-step">
              <Headphones size={42} />
              <div>
                <h3>5. Support</h3>
                <p>Ongoing support & quality assurance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sectors-serve-section" id="sectors">
        <img src={veroMark} alt="" className="sectors-watermark" />

        <div className="sectors-serve-inner">
          <div className="sectors-kicker">
            <span></span>
            Sectors We Serve
          </div>

          <h2>
            Tailored Security Recruitment <br />
            <strong>for Every Sector</strong>
          </h2>

          <p className="sectors-intro">
            From high-profile events to everyday operations, we provide fully
            vetted security professionals who understand your sector and deliver
            with absolute reliability.
          </p>

          <div className="sector-tabs">
            {sectorTabs.map((tab, index) => {
              const Icon = tab.icon;

              return (
                <button
                  type="button"
                  className={`sector-tab ${
                    activeSectorIndex === index ? "active" : ""
                  }`}
                  key={tab.label}
                  onClick={() => setActiveSectorIndex(index)}
                >
                  <Icon size={28} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            className="sector-line"
            style={{ "--active-column": activeSectorIndex + 1 }}
          >
            <span></span>
          </div>

          <button
            type="button"
            className="sector-slider-btn sector-slider-left"
            aria-label="Previous sector"
            onClick={goToPreviousSector}
          >
            ‹
          </button>

          <button
            type="button"
            className="sector-slider-btn sector-slider-right"
            aria-label="Next sector"
            onClick={goToNextSector}
          >
            ›
          </button>

          <div className="sector-detail-grid">
            {visibleSectorCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  className={`sector-detail-card ${
                    card.tabLabel === activeSectorLabel ? "featured" : ""
                  }`}
                  key={card.title}
                >
                  <div className="sector-detail-icon">
                    <Icon size={34} />
                  </div>

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>

                  <div className="sector-card-divider"></div>

                  <ul>
                    {card.points.map((point) => (
                      <li key={point}>
                        <ShieldCheck size={17} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="sector-bottom-cta">
            <div className="sector-bottom-icon">
              <ShieldCheck size={34} />
            </div>

            <div>
              <h3>Need security staffing for a different sector?</h3>
              <p>
                We cover a wide range of industries with specialist
                professionals.
              </p>
            </div>

            <button className="sector-cta-btn">
              Discuss Your Staffing Needs
              <ArrowRight size={21} />
            </button>
          </div>
        </div>
      </section>
      <section className="audience-section" id="audiences">
        <img src={veroMark} alt="" className="audience-watermark" />

        <div className="audience-inner">
          <h2>
            Built for <strong>Employers.</strong>
            <br />
            Designed for <strong>Candidates.</strong>
          </h2>

          <p className="audience-subtitle">
            The right people, in the right roles, for the right reasons.
          </p>

          <div className="audience-grid">
            <aside className="audience-copy">
              <p>
                We connect fully vetted security professionals with leading
                organisations across the UK. Whether you’re hiring or job
                seeking, we make the process simple, fast and built on trust.
              </p>

              <div className="audience-stat-card">
                <div className="audience-stat-icon">
                  <ShieldCheck size={34} />
                </div>

                <div>
                  <h3>50+</h3>
                  <span>Vetted Professionals</span>
                  <p>Ready to work. Ready to protect.</p>
                </div>
              </div>
            </aside>

            <article className="audience-card">
              <div className="audience-card-icon">
                <BriefcaseBusiness size={31} />
              </div>

              <h3>Employers</h3>

              <p className="audience-card-intro">
                Reliable security staffing, tailored to your needs.
              </p>

              <div className="audience-mini-grid">
                <div className="audience-mini-card">
                  <ShieldCheck size={31} />
                  <h4>Vetted Professionals</h4>
                  <p>Licensed, insured and thoroughly background checked.</p>
                </div>

                <div className="audience-mini-card">
                  <Zap size={31} />
                  <h4>Fast Deployment</h4>
                  <p>Rapid response teams available across the UK, 24/7.</p>
                </div>

                <div className="audience-mini-card">
                  <Users size={31} />
                  <h4>Flexible Solutions</h4>
                  <p>Scalable staffing for short-term and recurring needs.</p>
                </div>
              </div>

              <button className="audience-primary-btn">
                Request Staff
                <ArrowRight size={21} />
              </button>
            </article>

            <article className="audience-card">
              <div className="audience-card-icon">
                <Users size={31} />
              </div>

              <h3>Candidates</h3>

              <p className="audience-card-intro">
                Find security roles that fit your skills and lifestyle.
              </p>

              <div className="audience-mini-grid">
                <div className="audience-mini-card">
                  <Search size={31} />
                  <h4>Verified Jobs</h4>
                  <p>Roles from trusted employers across all sectors.</p>
                </div>

                <div className="audience-mini-card">
                  <ShieldCheck size={31} />
                  <h4>Fair & Transparent</h4>
                  <p>
                    Clear pay, expectations and opportunities that match you.
                  </p>
                </div>

                <div className="audience-mini-card">
                  <TrendingUp size={31} />
                  <h4>Career Growth</h4>
                  <p>Training, progression and support to build your future.</p>
                </div>
              </div>

              <button className="audience-primary-btn">
                Find Security Jobs
                <ArrowRight size={21} />
              </button>
            </article>
          </div>

          <div className="audience-help-bar">
            <div className="audience-help-icon">
              <Headphones size={32} />
            </div>

            <div>
              <h3>Not sure where to start? Our team can help.</h3>
              <p>
                We’ll guide you to the right solution, whether you’re hiring or
                looking for your next opportunity.
              </p>
            </div>

            <button className="audience-outline-btn">
              Contact Vero
              <ArrowRight size={21} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="feature">
      <Icon size={44} />

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;
