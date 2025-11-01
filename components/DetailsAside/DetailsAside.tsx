"use client";

import { cn } from "@/utils/classes";
import { Button } from "../Button/Button";
import type { IDetailsAside } from "./DetailsAside.types";

export const DetailsAside = ({
  className,
  cta,
  details,
  ...props
}: IDetailsAside) => {
  return (
    <aside className={cn("", className)} {...props}>
      {cta && <Button {...cta} variant="outline" />}

      {details.map(({ label, items }) => (
        <div className="pt-20" key={label}>
          <h2 className="font-medium font-mono uppercase">{label}</h2>
          <ul className="leading-[1.5] text-default-heading text-size-24 tracking-[0.01em]">
            {items.map((item) => (
              <li className="mt-5" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};
