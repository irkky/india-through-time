import type { OpeningSceneDefinition } from "@/types/opening";

interface OpeningTextProps {
  readonly scene: OpeningSceneDefinition;
  readonly isFirst: boolean;
}

export function OpeningText({ scene, isFirst }: OpeningTextProps) {
  const titleClassName = `opening-copy opening-copy--${scene.textStyle}`;
  const title = isFirst ? (
    <h1 className={titleClassName}>{scene.text}</h1>
  ) : (
    <h2 className={titleClassName}>{scene.text}</h2>
  );

  return (
    <div className="opening-text-shell">
      {scene.eyebrow ? <p className="opening-eyebrow">{scene.eyebrow}</p> : null}
      {title}
      {scene.subtitle ? <p className="opening-subtitle">{scene.subtitle}</p> : null}
      {scene.instruction ? (
        <p className="opening-instruction">
          <span aria-hidden="true" />
          {scene.instruction}
        </p>
      ) : null}
    </div>
  );
}
