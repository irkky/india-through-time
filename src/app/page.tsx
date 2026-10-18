import { TimelineExperience } from "@/components/timeline/timeline-experience";
import { indianHistoryTimeline } from "@/data/timeline/indian-history";
import { scenePresentations } from "@/data/scenes/scene-presentations";
import { compileHistory } from "@/lib/content/compile";

export default function Home() {
  const model = compileHistory(indianHistoryTimeline, scenePresentations);
  return <TimelineExperience model={model} />;
}
