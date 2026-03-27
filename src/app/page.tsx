export default function Home() {
  return (
    <div className="sanctuary-root">
      <nav className="nav-glass">
        <h3 style={{ margin: 0, color: "var(--color-primary)" }}>AI Mypandits</h3>
      </nav>

      <main>
        {/* Hero Section with Intentional Asymmetry */}
        <section className="asymmetric-layout">
          <div className="hero-content">
            <h1 className="hero-title">
              Sacred <br />
              <span style={{ color: "var(--color-primary)" }}>Orchestration</span>
            </h1>
            <p style={{ marginTop: "2rem", maxWidth: "400px" }}>
              Experience the ancient wisdom of Vedic rituals, reimagined for the
              modern seeker. A digital sanctuary for your spiritual journey.
            </p>
            <div style={{ marginTop: "3rem" }}>
              <button className="btn-primary">Begin Your Ritual</button>
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="surface-white temple-arch"
              style={{
                height: "500px",
                width: "100%",
                boxShadow: "var(--shadow-ambient)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative"
              }}
            >
              {/* Decorative Mandala Placeholder */}
              <div style={{
                position: "absolute",
                top: "-100px",
                right: "-100px",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, var(--color-primary-container) 0%, transparent 70%)",
                opacity: 0.1,
                borderRadius: "50%"
              }} />
              <h2 style={{ opacity: 0.2, color: "var(--color-secondary)" }}>Vedic Sanctuary</h2>
            </div>
          </div>
        </section>

        {/* Features Section using Tonal Separation */}
        <section className="surface-low">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h3>Our Pillars</h3>
          </div>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "2rem" 
          }}>
            {[
              { title: "Ancient Wisdom", desc: "Curated by lineage-bound experts." },
              { title: "Modern Access", desc: "Seamless booking and orchestration." },
              { title: "Digital Sanctuary", desc: "A space of calm and intentionality." }
            ].map((pillar, i) => (
              <div key={i} className="surface-white" style={{ padding: "3rem" }}>
                <h4 style={{ color: "var(--color-primary)", marginBottom: "1rem" }}>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
