export function EducationSection() {
  return (
    <section className="education" id="education">
      <div data-reveal>
        <div className="section-label">Education</div>
        <h2 className="section-title">
          Academic
          <br />
          Background
        </h2>
      </div>

      <div className="edu-card" data-reveal>
        <div>
          <div className="edu-degree">Bachelor of Information Technology</div>
          <div className="edu-school">Universitas Pelita Harapan</div>
          <div className="edu-period">2017 - 2021 / Tangerang, Indonesia</div>
        </div>
        <div className="edu-badge">IT Graduate</div>
      </div>
    </section>
  );
}
