"use client";

import markerSDK from "@marker.io/browser";
import { useEffect } from "react";

export function MarkerWidget() {
  const projectId = process.env.NEXT_PUBLIC_MARKER_IO_PROJECT_ID;

  useEffect(() => {
    if (!projectId) return;

    markerSDK.loadWidget({ project: projectId });
  }, [projectId]);

  return null;
}
