import SectionTitle from "../components/SectionTitle";
import { galleryImages, videoEmbeds } from "../data/siteData";

function GalleryPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Gallery"
            title="Our Performances & Practice Sessions"
            description="Studio moments from rehearsals, showcases, and student performances."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <article key={image} className="gallery-card">
                <img src={image} alt={`Dance performance ${index + 1}`} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted-section">
        <div className="container">
          <SectionTitle
            eyebrow="Studio videos"
            title="Watch the energy in motion"
            description="A glimpse into class choreography, showcases, and practice sessions."
          />
          <div className="video-grid">
            {videoEmbeds.map((video) => (
              <div key={video} className="video-frame">
                <iframe
                  src={video}
                  title="Dance video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
