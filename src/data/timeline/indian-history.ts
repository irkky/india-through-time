import { bce } from "@/lib/historical-date";
import { prehistoricIndiaEra } from "./prehistoric-india";
import { ancientIndiaEra } from "./ancient-india";
import type { HistoricalEra } from "@/types/history";

export const indianHistoryTimeline = [
  prehistoricIndiaEra,
  ancientIndiaEra,
  {
    id: "second-urbanization-empires",
    title: "Second Urbanization & Empires",
    order: 3,
    periods: [
      {
        id: "landscape-of-states",
        title: "A landscape of states",
        events: [
          {
            id: "mahajanapadas",
            title: "Mahajanapadas",
            dateStart: bce(600),
            approximateDate: true,
            description:
              "Power was distributed among major kingdoms and republics across the northern subcontinent.",
            categories: [],
            people: [],
            relatedEvents: [],
            visualReference: {
              id: "mahajanapadas-abstract-scene",
              kind: "abstract-scene",
            },
            sources: [],
          },
        ],
      },
      {
        id: "an-empire-emerges",
        title: "An empire emerges",
        events: [
          {
            id: "mauryan-empire",
            title: "Mauryan Empire",
            dateStart: bce(322),
            approximateDate: false,
            description:
              "Chandragupta Maurya founded a new imperial power that would unite much of the subcontinent.",
            categories: [],
            people: ["Chandragupta Maurya"],
            relatedEvents: [],
            visualReference: {
              id: "maurya-abstract-scene",
              kind: "abstract-scene",
            },
            sources: [],
          },
        ],
      },
    ],
  },
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
