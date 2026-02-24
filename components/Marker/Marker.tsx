"use client";

import { useEffect } from "react";
import markerSDK from "@marker.io/browser";

export function Marker() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_MARKER_PROJECT_ID;

    if (!projectId) {
      console.warn("Marker.io: NEXT_PUBLIC_MARKER_PROJECT_ID is not set");
      return;
    }

    // Load Marker.io widget asynchronously
    markerSDK
      .loadWidget({
        project: projectId,
      })
      .catch((error) => {
        console.error("Failed to load Marker.io widget:", error);
      });
  }, []);

  return null;
}
