interface OpeningProgressProps {
  readonly progressRef: React.RefObject<HTMLSpanElement | null>;
}

export function OpeningProgress({ progressRef }: OpeningProgressProps) {
  return (
    <div className="opening-progress">
      <span className="opening-progress-label">BEGINNING</span>
      <div
        className="opening-progress-track"
        role="progressbar"
        aria-label="Opening cinematic progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
      >
        <span ref={progressRef} className="opening-progress-value" />
      </div>
    </div>
  );
}
