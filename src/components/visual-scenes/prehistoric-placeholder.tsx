import Image from "next/image";

interface PrehistoricPlaceholderProps {
  readonly renderer: string;
  readonly label?: string;
  readonly src?: string;
  readonly siteId?: string;
}

interface DistributionSite {
  readonly label: string;
  readonly region: string;
  readonly left: string;
  readonly top: string;
  readonly labelSide: "left" | "right";
}

const distributionSites: Readonly<Record<string, DistributionSite>> = {
  attirampakkam: {
    label: "ATTIRAMPAKKAM",
    region: "TAMIL NADU",
    left: "45.5%",
    top: "72.3%",
    labelSide: "right",
  },
  isampur: {
    label: "ISAMPUR",
    region: "KARNATAKA",
    left: "36.5%",
    top: "63.5%",
    labelSide: "right",
  },
  "hunsgi-baichbal": {
    label: "HUNSGI–BAICHBAL",
    region: "KARNATAKA",
    left: "34.5%",
    top: "60.5%",
    labelSide: "left",
  },
  bhimbetka: {
    label: "BHIMBETKA",
    region: "MADHYA PRADESH",
    left: "39.2%",
    top: "49%",
    labelSide: "right",
  },
  "chirki-nevasa": {
    label: "CHIRKI–NEVASA",
    region: "MAHARASHTRA",
    left: "32.2%",
    top: "57.5%",
    labelSide: "left",
  },
  didwana: {
    label: "DIDWANA",
    region: "RAJASTHAN",
    left: "31.5%",
    top: "39.5%",
    labelSide: "left",
  },
  "son-valley": {
    label: "SON VALLEY",
    region: "MADHYA PRADESH",
    left: "52%",
    top: "47.5%",
    labelSide: "right",
  },
};

const MapImagePlaceholder = ({
  src,
  variant,
}: {
  readonly src: string;
  readonly variant: "full" | "south" | "attirampakkam";
}) => (
  <div className={`prehistoric-map-frame prehistoric-map-frame--${variant}`}>
    <div className="prehistoric-map-canvas">
      <Image
        className="prehistoric-map-image"
        src={src}
        fill
        sizes="(max-width: 639px) 88vw, 62vw"
        alt=""
      />
      {variant === "attirampakkam" ? (
        <span className="prehistoric-attirampakkam-marker">
          <span />
        </span>
      ) : null}
    </div>
  </div>
);

const DistributionMap = ({ src, siteId }: { readonly src?: string; readonly siteId?: string }) => {
  const site = siteId ? distributionSites[siteId] : undefined;

  return (
    <div className="prehistoric-map-frame prehistoric-map-frame--distribution">
      {src ? (
        <Image
          className="prehistoric-map-image"
          src={src}
          fill
          sizes="(max-width: 639px) 88vw, 62vw"
          alt=""
        />
      ) : null}
      {site ? (
        <span
          className={`prehistoric-distribution-marker prehistoric-distribution-marker--${site.labelSide} ${
            siteId === "attirampakkam" ? "prehistoric-distribution-marker--anchor" : ""
          } prehistoric-distribution-marker--${siteId}`}
          style={{ "--site-left": site.left, "--site-top": site.top } as React.CSSProperties}
        >
          <span className="prehistoric-distribution-dot" />
          <span className="prehistoric-distribution-site-label">
            <strong>{site.label}</strong>
            <small>{site.region}</small>
          </span>
        </span>
      ) : null}
    </div>
  );
};

const ArtifactImage = ({
  src,
  variant,
}: {
  readonly src: string;
  readonly variant: "handaxe" | "assemblage";
}) => (
  <div className={`prehistoric-artifact-frame prehistoric-artifact-frame--${variant}`}>
    <Image
      className="prehistoric-artifact-image"
      src={src}
      fill
      sizes="(max-width: 639px) 68vw, 42vw"
      alt=""
    />
  </div>
);

const MapPlaceholder = ({ variant }: { readonly variant: "base" | "south" | "site" | "wide" }) => (
  <svg viewBox="0 0 800 900" className="prehistoric-placeholder-art" aria-hidden="true">
    <path
      className="prehistoric-map-outline"
      d="M199 84 335 49l95 55 117-19 78 72-41 88 45 83-76 81-18 137-85 197-70 91-58-160-91-92-27-137-76-83 48-104-28-97Z"
    />
    {variant === "south" ? (
      <path className="prehistoric-region-highlight" d="m322 575 113-29 73 41-58 156-70 91Z" />
    ) : null}
    {variant === "site" ? (
      <g className="prehistoric-site-marker">
        <circle cx="438" cy="676" r="17" />
        <circle cx="438" cy="676" r="43" />
      </g>
    ) : null}
    {variant === "wide" ? (
      <g className="prehistoric-context-markers">
        <circle cx="303" cy="403" r="10" />
        <circle cx="475" cy="351" r="10" />
        <circle cx="438" cy="676" r="10" />
        <circle cx="347" cy="604" r="10" />
        <path d="M303 403 475 351 438 676 347 604Z" />
      </g>
    ) : null}
  </svg>
);

const ToolPlaceholder = ({ cleaver = false }: { readonly cleaver?: boolean }) => (
  <svg viewBox="0 0 700 700" className="prehistoric-placeholder-art" aria-hidden="true">
    <path
      className="prehistoric-tool-shape"
      d={
        cleaver
          ? "M214 115 472 98 544 214 492 553 354 630 186 528 157 235Z"
          : "M354 54 488 204 463 471 354 642 241 477 211 209Z"
      }
    />
    <path
      className="prehistoric-tool-line"
      d="m243 217 111-86 104 91-75 125 67 120-96 106-89-111 61-118Z"
    />
  </svg>
);

export function PrehistoricPlaceholder({
  renderer,
  label,
  src,
  siteId,
}: PrehistoricPlaceholderProps) {
  let artwork: React.ReactNode;

  switch (renderer) {
    case "prehistoric-landscape":
      artwork = (
        <svg viewBox="0 0 1200 800" className="prehistoric-landscape" aria-hidden="true">
          <circle className="prehistoric-moon" cx="850" cy="205" r="112" />
          <path
            className="prehistoric-ridge prehistoric-ridge--far"
            d="M-80 570 220 300 430 520 655 255 895 506 1080 365 1280 585V850H-80Z"
          />
          <path
            className="prehistoric-ridge"
            d="M-80 650 240 472 474 635 755 410 980 622 1280 470V850H-80Z"
          />
        </svg>
      );
      break;
    case "prehistoric-oldscene-clear":
    case "prehistoric-oldscene-blurred":
      artwork = src ? (
        <div
          className={`prehistoric-oldscene ${
            renderer === "prehistoric-oldscene-blurred" ? "prehistoric-oldscene--blurred" : ""
          }`}
        >
          <Image className="prehistoric-oldscene-image" src={src} fill sizes="100vw" alt="" />
        </div>
      ) : null;
      break;
    case "prehistoric-map-image":
      artwork = src ? <MapImagePlaceholder src={src} variant="full" /> : null;
      break;
    case "prehistoric-south-map-image":
      artwork = src ? <MapImagePlaceholder src={src} variant="south" /> : null;
      break;
    case "prehistoric-attirampakkam-map-image":
      artwork = src ? <MapImagePlaceholder src={src} variant="attirampakkam" /> : null;
      break;
    case "prehistoric-distribution-map-image":
      artwork = <DistributionMap src={src} />;
      break;
    case "prehistoric-distribution-site":
      artwork = <DistributionMap siteId={siteId} />;
      break;
    case "prehistoric-map":
      artwork = <MapPlaceholder variant="base" />;
      break;
    case "prehistoric-south-highlight":
      artwork = <MapPlaceholder variant="south" />;
      break;
    case "prehistoric-site-marker":
      artwork = <MapPlaceholder variant="site" />;
      break;
    case "prehistoric-stone-tool":
      artwork = src ? <ArtifactImage src={src} variant="handaxe" /> : <ToolPlaceholder />;
      break;
    case "prehistoric-handaxe-cleaver":
      artwork = src ? (
        <ArtifactImage src={src} variant="assemblage" />
      ) : (
        <ToolPlaceholder cleaver />
      );
      break;
    case "prehistoric-wide-context":
      artwork = <MapPlaceholder variant="wide" />;
      break;
    default:
      artwork = <span className="prehistoric-transition-line" />;
  }

  return (
    <div className="prehistoric-placeholder" aria-hidden="true">
      {artwork}
      {label ? <p className="prehistoric-placeholder-label">{label}</p> : null}
    </div>
  );
}
