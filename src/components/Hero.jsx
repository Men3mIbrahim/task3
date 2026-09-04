import Button from "./Button";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">MODERN • SIMPLE • RELIABLE</p>
        <h1>Everything you need, <span>in one place.</span></h1>
        <p className="hero-description">
          Discover carefully selected tech products designed to make your
          everyday life smarter, easier, and more enjoyable.
        </p>
        <Button text="Shop Now" href="/products" />
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-circle circle-one"></div>
        <div className="hero-circle circle-two"></div>
        <div className="hero-device">
          <div className="device-screen">
            <span className="device-dot"></span>
            <span className="device-line"></span>
            <span className="device-line short"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
