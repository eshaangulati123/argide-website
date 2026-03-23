export default function SectionLabel({ text, withDivider = false }) {
  return (
    <div className={`section-label-container${withDivider ? ' with-divider' : ''}`}>
      <div className="section-label">
        <div className="label-square"></div>
        <span className="label-text">{text}</span>
      </div>
      {withDivider && <div className="section-label-divider"></div>}
    </div>
  );
}
