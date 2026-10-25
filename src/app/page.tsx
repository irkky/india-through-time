import { TimelineExperience } from "@/components/timeline/timeline-experience";
import { indianHistoryTimeline } from "@/data/timeline/indian-history";
import { scenePresentations } from "@/data/scenes/scene-presentations";
import { compileHistory } from "@/lib/content/compile";
import { PrehistoryReader } from "@/components/historical-events/prehistory-reader";
import { prehistoricIndiaEra } from "@/data/timeline/prehistoric-india";
import { ancientIndiaEra, ancientGaps } from "@/data/timeline/ancient-india";
import { secondUrbanizationEra, empireGaps } from "@/data/timeline/second-urbanization";
import { classicalMedievalEra, classicalGaps } from "@/data/timeline/classical-medieval";
import { earlyModernIndiaEra, earlyModernGaps } from "@/data/timeline/early-modern-india";
import { colonialIndiaEra, colonialGaps } from "@/data/timeline/colonial-india";
import { independenceIndiaEra, independenceGaps } from "@/data/timeline/independence-india";

export default function Home() {
  const model = compileHistory(indianHistoryTimeline, scenePresentations);
  return (
    <TimelineExperience model={model}>
      <PrehistoryReader era={prehistoricIndiaEra} />
      <PrehistoryReader era={ancientIndiaEra} id="ancient-reader" gaps={ancientGaps} />
      <PrehistoryReader era={secondUrbanizationEra} id="empires-reader" gaps={empireGaps} />
      <PrehistoryReader era={classicalMedievalEra} id="classical-reader" gaps={classicalGaps} />
      <PrehistoryReader era={earlyModernIndiaEra} id="early-modern-reader" gaps={earlyModernGaps} />
      <PrehistoryReader era={colonialIndiaEra} id="colonial-reader" gaps={colonialGaps} />
      <PrehistoryReader
        era={independenceIndiaEra}
        id="independence-reader"
        gaps={independenceGaps}
      />
    </TimelineExperience>
  );
}
