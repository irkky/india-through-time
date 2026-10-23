import { TimelineExperience } from "@/components/timeline/timeline-experience";
import { indianHistoryTimeline } from "@/data/timeline/indian-history";
import { scenePresentations } from "@/data/scenes/scene-presentations";
import { compileHistory } from "@/lib/content/compile";
import { PrehistoryReader } from "@/components/historical-events/prehistory-reader";
import { prehistoricIndiaEra } from "@/data/timeline/prehistoric-india";
import { ancientIndiaEra, ancientGaps } from "@/data/timeline/ancient-india";
import { secondUrbanizationEra, empireGaps } from "@/data/timeline/second-urbanization";

export default function Home() {
  const model = compileHistory(indianHistoryTimeline, scenePresentations);
  return (
    <TimelineExperience model={model}>
      <PrehistoryReader era={prehistoricIndiaEra} />
      <PrehistoryReader era={ancientIndiaEra} id="ancient-reader" gaps={ancientGaps} />
      <PrehistoryReader era={secondUrbanizationEra} id="empires-reader" gaps={empireGaps} />
    </TimelineExperience>
  );
}
