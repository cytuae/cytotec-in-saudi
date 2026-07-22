import { WhatsAppButton } from "./WhatsAppButton";

export function StickyMobileCTA() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-navy/10 bg-warm/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto max-w-content">
          <WhatsAppButton label="استشارة مجانية" className="w-full" />
        </div>
      </div>
      <div className="fixed bottom-6 left-6 z-30 hidden md:block">
        <WhatsAppButton label="استشارة مجانية" className="shadow-lift" />
      </div>
    </>
  );
}
