import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { PartnershipCta } from "@/components/contact/partnership-cta";

export const metadata = {
  title: "Contact — JPLC | Get In Touch",
  description:
    "Contact JPLC for partnership inquiries, training registrations, hospitality supply, and engineering services. Based at DMCC Coffee Centre, Dubai.",
};

export default function ContactPage() {
  return (
    <main>
      {/* <ContactHero /> */}

      {/* Contact split layout — dark theme */}
      <section
        id="contact-form"
        className="relative py-20 lg:py-24 overflow-hidden bg-[#F8FAFC] mt-8"
      >
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Ambient glow — top right */}
        <div className="absolute -top-24 -right-24 w-[480px] h-[400px] rounded-full bg-[#2F43B7] opacity-[0.05] blur-[120px] pointer-events-none" />

        {/* Ambient glow — bottom left */}
        <div className="absolute -bottom-16 -left-16 w-[380px] h-[300px] rounded-full bg-[#4056D6] opacity-[0.04] blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <PartnershipCta />
    </main>
  );
}
