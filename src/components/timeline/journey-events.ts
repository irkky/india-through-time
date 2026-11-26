import { createContext } from "react";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";

export const NavigateToEvent = createContext<(index: number) => void>(() => {});
export const JourneyEvents = createContext<readonly TimelineDisplayEvent[]>([]);
