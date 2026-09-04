function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">OUR COLLECTION</p>
        <h2>{title}</h2>
      </div>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
