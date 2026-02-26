"use client";

import { useEffect } from "react";

export function Marker() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_MARKER_PROJECT_ID;

    if (!projectId) {
      console.warn("Marker.io: NEXT_PUBLIC_MARKER_PROJECT_ID is not set");
      return;
    }

    // Defer Marker.io loading until the browser is idle to avoid
    // impacting page load performance metrics
    const load = () => {
      import("@marker.io/browser")
        .then(({ default: markerSDK }) =>
          markerSDK.loadWidget({ project: projectId }),
        )
        .catch((error) => {
          console.error("Failed to load Marker.io widget:", error);
        });
    };

    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(load, { timeout: 5000 });
    } else {
      setTimeout(load, 2000);
    }
  }, []);

  return null;
}
