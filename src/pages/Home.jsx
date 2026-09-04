import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />

      <section className="home-summary" id="about">
        <div>
          <p className="eyebrow">ABOUT NOVASTORE</p>
          <h2>A simple store built to practice modern React basics.</h2>
        </div>
        <p>
          Browse products on the Products page, add your own products, and delete
          products whenever you want. Your product list stays available after a
          browser refresh using localStorage.
        </p>
      </section>

      <section className="contact-summary" id="contact">
        <div>
          <p className="eyebrow">READY TO SHOP?</p>
          <h2>Explore the full product collection.</h2>
        </div>
        <a className="primary-button" href="/products">
          View Products <span aria-hidden="true">→</span>
        </a>
      </section>
    </>
  );
}

export default Home;
