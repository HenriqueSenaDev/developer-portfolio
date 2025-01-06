"use client";

import { Button } from "@/components/button";
import { MenuIcon, RocketIcon, XIcon } from "lucide-react";
import { navConfig } from "..";
import { smoothScrollToSection } from "@/utils/dom";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

export const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

  const handleNavigate = (sectionId: string) => {
    setAnimationTrigger(false);
    setOpen(false);
    smoothScrollToSection(sectionId);
  };

  const handleClose = () => {
    setAnimationTrigger(false);
    timeoutRef.current = setTimeout(() => setOpen(false), 400);
  };

  useEffect(() => {
    if (open) setAnimationTrigger(true);

    return () => clearTimeout(timeoutRef.current);
  }, [open]);

  return (
    <>
      <Button
        variant="ghost"
        className="size-9 flex-shrink-0 p-0 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <MenuIcon className="!size-6" strokeWidth={1.5} />
      </Button>

      {createPortal(
        <div
          className={clsx({
            "fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10 lg:hidden":
              true,
            hidden: !open,
          })}
        >
          <div
            className={clsx({
              "bg-background size-full ml-[100%] transition-all duration-300":
                true,
              "translate-x-[-100%]": animationTrigger,
            })}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <div className="flex items-center gap-2">
                <RocketIcon
                  className="flex-shrink-0 size-5 lg:size-6"
                  strokeWidth={1.5}
                />

                <span className="font-normal text-sm min-[360px]:text-base">
                  Luiz Henrique Sena
                </span>
              </div>

              <Button
                className="size-9 flex-shrink-0 p-0 lg:hidden"
                variant="ghost"
                onClick={handleClose}
              >
                <XIcon />
              </Button>
            </div>

            <nav>
              <ul className="mt-7 flex flex-col items-center gap-6">
                {navConfig.map(({ label, id }) => (
                  <li
                    key={label}
                    className="transition-all cursor-pointer hover:underline hover:opacity-80 lg:text-[17px]"
                    onClick={() => handleNavigate(id)}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};
