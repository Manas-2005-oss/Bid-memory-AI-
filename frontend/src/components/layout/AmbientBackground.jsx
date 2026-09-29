export default function AmbientBackground({
  dark = false,
  grid = true,
}) {
  return (
    <div
      className={`ambient-background ${
        dark ? "ambient-background-dark" : ""
      }`}
      aria-hidden="true"
    >

      {grid && (
        <div className="ambient-grid" />
      )}

      <div className="ambient-orb ambient-orb-one" />

      <div className="ambient-orb ambient-orb-two" />

      <div className="ambient-orb ambient-orb-three" />

      <div className="ambient-glow ambient-glow-one" />

      <div className="ambient-glow ambient-glow-two" />

      <div className="ambient-noise" />

    </div>
  );
}