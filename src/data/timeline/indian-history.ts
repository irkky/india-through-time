import { secondUrbanizationEra } from "./second-urbanization";
import { prehistoricIndiaEra } from "./prehistoric-india";
import { ancientIndiaEra } from "./ancient-india";
import type { HistoricalEra } from "@/types/history";

export const indianHistoryTimeline = [
  prehistoricIndiaEra,
  ancientIndiaEra,
  secondUrbanizationEra,
  {
    id: "classical-medieval-eras",
    title: "Classical & Medieval Eras",
    order: 4,
    periods: [],
  },
  {
    id: "early-modern-india",
    title: "Early Modern India",
    order: 5,
    periods: [],
  },
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
