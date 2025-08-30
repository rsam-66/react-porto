export default function Projects() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="mb-4">Proyek</h2>
        <div className="row g-4">

          {/* Project 1 */}
          <div className="col-md-6">
            <div
              className="card project-card h-100 shadow-sm p-4 px-lg-5 py-lg-5"
              style={{ ['--mockup']: 'url(/images/1.png)' }}
            >
              <div className="project-text">
                <h5 className="card-title mb-2">Tanavue</h5>
                <p className="card-text mb-2">
                  Aplikasi monitoring hidroponik berbasis IoT, monitoring kondisi tanaman menggunakan arduino
                </p>
                <p className="mb-2"><strong>Kontribusi:</strong> Mengerjakan Front-End dan Back-End</p>
                <div className="tech-stack mb-3">
                  <strong>Teknologi:</strong><br />
                  <span className="badge bg-light text-dark">Flutter</span>
                  <span className="badge bg-light text-dark">Dart</span>
                  <span className="badge bg-light text-dark">Blynk IoT</span>
                  <span className="badge bg-light text-dark">Firebase</span>
                </div>
                <a href="https://github.com/rsam-66/tavanue-final" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  Lihat di GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6">
            <div
              className="card project-card h-100 shadow-sm p-4 px-lg-5 py-lg-5"
              style={{ ['--mockup']: 'url(/images/web1.png)' }}
            >
              <div className="project-text">
                <h5 className="card-title mb-2">Berita Kini</h5>
                <p className="card-text mb-2">Website penampil berita sederhana</p>
                <p className="mb-2"><strong>Kontribusi:</strong> Mengerjakan Front-End dan Integrasi dengan API Berita</p>
                <div className="tech-stack mb-3">
                  <strong>Teknologi:</strong><br />
                  <span className="badge bg-light text-dark">Vue 3</span>
                  <span className="badge bg-light text-dark">HTML</span>
                  <span className="badge bg-light text-dark">CSS</span>
                  <span className="badge bg-light text-dark">JavaScript</span>
                </div>
                <a href="https://github.com/rsam-66/technicalTest_FrontEndDev_reimarksam" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  Lihat Github
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
