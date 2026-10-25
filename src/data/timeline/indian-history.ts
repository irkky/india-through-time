import { secondUrbanizationEra } from "./second-urbanization";
import { classicalMedievalEra } from "./classical-medieval";
import { earlyModernIndiaEra } from "./early-modern-india";
import { colonialIndiaEra } from "./colonial-india";
import { independenceIndiaEra } from "./independence-india";
import { prehistoricIndiaEra } from "./prehistoric-india";
import { ancientIndiaEra } from "./ancient-india";
import type { HistoricalEra } from "@/types/history";

export const indianHistoryTimeline = [
  prehistoricIndiaEra,
  ancientIndiaEra,
  secondUrbanizationEra,
  classicalMedievalEra,
  earlyModernIndiaEra,
  colonialIndiaEra,
  independenceIndiaEra,
  {
    id: "post-independence-present",
    title: "Post-Independence to Present",
    order: 8,
    periods: [],
  },
] as const satisfies readonly HistoricalEra[];
