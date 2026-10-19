import { TimelineExperience } from "@/components/timeline/timeline-experience";
import { indianHistoryTimeline } from "@/data/timeline/indian-history";
import { scenePresentations } from "@/data/scenes/scene-presentations";
import { compileHistory } from "@/lib/content/compile";
import { PrehistoryReader } from "@/components/historical-events/prehistory-reader";
import { prehistoricIndiaEra } from "@/data/timeline/prehistoric-india";

export default function Home() {
  const model = compileHistory(indianHistoryTimeline, scenePresentations);
  return (
    <TimelineExperience model={model}>
      <PrehistoryReader era={prehistoricIndiaEra} />
    </TimelineExperience>
  );
}
