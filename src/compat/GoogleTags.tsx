export function GoogleTagManager({ gtmId }: { gtmId: string }) {
  if (!gtmId) return null;

  const bootstrap = `window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
      <script
        async
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
      />
    </>
  );
}
