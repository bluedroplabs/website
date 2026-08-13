import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { GoogleTagManagerWithConsent } from "@/components/GoogleTagManager";
import { Marker } from "@/components/Marker/Marker";

export default function IntegrationIsland() {
  return (
    <>
      <CookieConsentBanner />
      <GoogleTagManagerWithConsent />
      <Marker />
    </>
  );
}
