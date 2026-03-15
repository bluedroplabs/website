export function StructuredData({
  data,
}: {
  data: object | object[];
}) {
  const json = JSON.stringify(Array.isArray(data) ? data : [data]);
  return (
    <script
      dangerouslySetInnerHTML={{ __html: json }}
      type="application/ld+json"
    />
  );
}
