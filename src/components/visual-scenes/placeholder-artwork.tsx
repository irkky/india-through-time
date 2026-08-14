interface PlaceholderArtworkProps {
  readonly renderer: string;
}

export function PlaceholderArtwork({ renderer }: PlaceholderArtworkProps) {
  if (renderer === "indus-artwork") {
    return (
      <svg viewBox="0 0 1200 800" className="scene-art" aria-hidden="true">
        <path className="scene-line scene-river" d="M-60 90 C 330 260, 220 530, 610 850" />
        <g className="scene-city">
          <path d="M600 530V320h115v210M742 530V245h145v285M914 530V365h105v165" />
          <path d="M560 530h500M642 372h30M785 302h52M952 414h28" />
        </g>
      </svg>
    );
  }

  if (renderer === "mahajanapadas-artwork") {
    return (
      <svg viewBox="0 0 1200 800" className="scene-art" aria-hidden="true">
        <g className="scene-territories">
          <path d="M410 180 570 120 680 230 605 355 432 330 350 250Z" />
          <path d="m685 238 172-58 130 128-78 150-183-25-72-103Z" />
          <path d="m430 372 173 25 88 140-103 126-188-47-61-133Z" />
          <path d="m710 472 153 12 84 130-116 98-169-73Z" />
        </g>
        <circle className="scene-orbit" cx="650" cy="410" r="275" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1200 800" className="scene-art" aria-hidden="true">
      <circle className="scene-sun" cx="820" cy="260" r="155" />
      <g className="scene-pillar">
        <path d="M555 710h230l-35-58H590Z" />
        <path d="M626 652h88l18-390H608Z" />
        <path d="M574 262h192l-28-56H602Z" />
        <path d="M618 206c0-49 32-86 82-86s82 37 82 86Z" />
      </g>
      <path className="scene-line" d="M60 650 Q 330 540 530 632 T 1140 585" />
    </svg>
  );
}
