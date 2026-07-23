import Link from "next/link";
import { DOCTOR } from "@/lib/site";
import { DoctorAvatar } from "./DoctorAvatar";
import { WhatsAppButton } from "./WhatsAppButton";

type DoctorCardProps = {
  compact?: boolean;
};

export function DoctorCard({ compact = false }: DoctorCardProps) {
  return (
    <aside className="card-surface overflow-hidden p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <DoctorAvatar size="md" />
        <div className="min-w-0">
          <p className="text-lg font-bold text-navy">{DOCTOR.name}</p>
          <p className="mt-1 text-[18px] leading-[1.6] text-ink/70">{DOCTOR.title}</p>
          {!compact ? (
            <ul className="mt-3 space-y-2 text-[18px] leading-[1.7] text-ink/75">
              <li>• {DOCTOR.experienceShort}</li>
              <li>• {DOCTOR.consultation}</li>
            </ul>
          ) : (
            <p className="mt-2 text-[18px] leading-[1.6] text-ink/70">{DOCTOR.experienceShort}</p>
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <WhatsAppButton
          label="تحدثي مع الدكتورة الآن"
          ctaLocation="content"
          className="flex-1 sm:flex-none"
        />
        <Link href={DOCTOR.href} className="btn-secondary flex-1 sm:flex-none">
          تعرفي على الدكتورة
        </Link>
      </div>
    </aside>
  );
}
