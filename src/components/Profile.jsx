export default function Profile() {
  return (
    <section className="py-5 profil-section">
      <div className="container">
        <div className="row gx-0 align-items-stretch">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="/images/profile.jpg" alt="Profile Photo" className="profile-photo-gradient" />
          </div>
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <div className="p-4">
              <h2 className="mb-4">Profil</h2>

              <div className="profile-item">
                <span className="label">Nama Lengkap</span>
                <span className="colon">:</span>
                <span className="value">Reimark Samuel Riyanto</span>
              </div>
              <div className="profile-item">
                <span className="label">Umur</span>
                <span className="colon">:</span>
                <span className="value">20 Tahun</span>
              </div>
              <div className="profile-item">
                <span className="label">Domisili</span>
                <span className="colon">:</span>
                <span className="value">Depok</span>
              </div>

              <p>
                Saya adalah mahasiswa aktif di Telkom University dengan minat besar dalam Mobile Development.
                Memiliki rasa ingin tahu tinggi terhadap teknologi, bertanggung jawab, solutif, dan mudah beradaptasi
                dalam berbagai situasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
