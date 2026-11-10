import { ancientGaps, ancientIndiaEra } from "@/data/timeline/ancient-india";
import { classicalGaps, classicalMedievalEra } from "@/data/timeline/classical-medieval";
import { colonialGaps, colonialIndiaEra } from "@/data/timeline/colonial-india";
import { earlyModernGaps, earlyModernIndiaEra } from "@/data/timeline/early-modern-india";
import { empireGaps, secondUrbanizationEra } from "@/data/timeline/second-urbanization";
import { independenceGaps, independenceIndiaEra } from "@/data/timeline/independence-india";
import {
  postIndependenceGaps,
  postIndependenceIndiaEra,
} from "@/data/timeline/post-independence-india";
import { prehistoricIndiaEra } from "@/data/timeline/prehistoric-india";
import { PrehistoryReader } from "./prehistory-reader";

export function AllReaders() {
  return (
    <>
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
      <PrehistoryReader
        era={postIndependenceIndiaEra}
        id="post-independence-reader"
        gaps={postIndependenceGaps}
      />
    </>
  );
}
