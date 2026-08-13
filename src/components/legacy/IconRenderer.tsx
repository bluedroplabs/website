import * as icons from "@/components/Icon";

export interface IconRendererProps {
  name: string;
  className?: string;
}

export default function IconRenderer({ name, className }: IconRendererProps) {
  const Icon = icons[name as keyof typeof icons];
  return Icon ? <Icon aria-hidden="true" className={className} /> : null;
}
