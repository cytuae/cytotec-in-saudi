"use client";

import Image from "next/image";
import { useState } from "react";
import { DOCTOR } from "@/lib/site";

type DoctorAvatarProps = {
  /** Matches existing card (64px) or doctor page aside (96px). */
  size?: "md" | "lg";
  className?: string;
};

const BOX_CLASS = {
  md: "h-16 w-16",
  lg: "h-24 w-24",
} as const;

const TEXT_CLASS = {
  md: "text-lg",
  lg: "text-2xl",
} as const;

const SIZE_PX = {
  md: 64,
  lg: 96,
} as const;

/**
 * Circular doctor avatar with ultrasound image and initials fallback.
 */
export function DoctorAvatar({ size = "md", className = "" }: DoctorAvatarProps) {
  const [failed, setFailed] = useState(false);
  const boxClass = BOX_CLASS[size];
  const px = SIZE_PX[size];

  if (failed) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full border border-gold bg-navy font-bold text-gold ${boxClass} ${TEXT_CLASS[size]} ${className}`}
        aria-hidden="true"
      >
        {DOCTOR.initials}
      </div>
    );
  }

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border border-gold bg-navy ${boxClass} ${className}`}
    >
      <Image
        src="/images/ultrasound-machine.png"
        alt="جهاز سونار للاستشارات النسائية"
        width={px}
        height={px}
        className="h-full w-full object-cover object-center"
        sizes={`${px}px`}
        onError={() => setFailed(true)}
        priority={size === "lg"}
      />
    </div>
  );
}
