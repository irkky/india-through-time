import { secondUrbanizationEra } from "./second-urbanization";
import { classicalMedievalEra } from "./classical-medieval";
import { earlyModernIndiaEra } from "./early-modern-india";
import { prehistoricIndiaEra } from "./prehistoric-india";
import { ancientIndiaEra } from "./ancient-india";
import type { HistoricalEra } from "@/types/history";

export const indianHistoryTimeline = [
  prehistoricIndiaEra,
  ancientIndiaEra,
  secondUrbanizationEra,
  classicalMedievalEra,
  earlyModernIndiaEra,
  {
    id: "colonial-era-british-rule",
    title: "Colonial Era & British Rule",
    order: 6,
    periods: [],
  },
  {
    id: "indian-independence-movement",
    title: "Indian Independence Movement",
    order: 7,
    periods: [],
  },
  {
    id: "post-independence-present",
    title: "Post-Independence to Present",
    order: 8,
    periods: [],
  },
] as const satisfies readonly HistoricalEra[];
