import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — JPLC",
  description:
    "Learn how JPLC collects, uses, and protects your personal information.",
};

const paragraphs = [
  `At JPLC, we recognize the importance of protecting the privacy and security of the personal information entrusted to us by our customers. This Privacy Statement describes how JPLC and its affiliated companies collect, use, disclose, store, and otherwise process personal information obtained through our mobile application, websites, loyalty programs, customer service channels, stores, and other interactions with our brand. By accessing or using our services, you acknowledge that your personal information may be collected and processed in accordance with this Privacy Statement and applicable laws.`,
  `JPLC may collect personal information directly from you when you create an account, place an order, join the BB Coins rewards program, subscribe to marketing communications, participate in surveys or promotions, contact customer support, or otherwise interact with our services. The information we collect may include your name, email address, mobile phone number, date of birth, delivery addresses, account credentials, communication preferences, and any other information you choose to provide. We may also collect information relating to your purchases, loyalty activity, reward redemptions, customer service interactions, and preferences regarding our products and services.`,
  `When you use our mobile application, website, or digital services, certain information may be collected automatically through technologies such as cookies, software development kits (SDKs), analytics tools, and similar technologies. This information may include your IP address, device identifiers, operating system, browser type, application version, network information, pages viewed, interactions with our services, and other technical information that helps us understand how our services are used and how they can be improved.`,
  `Subject to your device settings and permissions, JPLC may collect location information to assist you in locating nearby stores, facilitating delivery services, providing location-based offers, and improving the overall customer experience. You may choose to disable location services at any time through your device settings; however, certain features of the application may not function as intended if location permissions are disabled.`,
  `The personal information we collect is used to provide and improve our products and services, process transactions, administer the BB Coins rewards program, personalize customer experiences, communicate with you regarding your account, respond to inquiries, provide customer support, conduct research and analytics, prevent fraud and unauthorized activity, comply with legal obligations, and deliver marketing communications where permitted by law. We may also use information to understand customer preferences, develop new products and services, improve operational performance, and enhance the security of our systems and platforms.`,
  `JPLC may share personal information with carefully selected service providers and business partners that assist us in operating our business and delivering services to our customers. These third parties may include payment processors, cloud hosting providers, technology service providers, analytics partners, delivery providers, marketing service providers, customer support platforms, and other vendors acting on our behalf. Such parties are authorized to process personal information only as necessary to perform services for JPLC and are required to maintain appropriate safeguards to protect the information they receive.`,
  `We may disclose personal information when required to do so by applicable law, regulation, court order, legal process, or governmental authority. We may also disclose information when we believe such action is necessary to protect the rights, property, safety, or security of JPLC, our customers, our employees, or others, or to investigate suspected fraud, security incidents, or violations of our terms and policies.`,
  `JPLC does not sell personal information to third parties. We may, however, share information in connection with a merger, acquisition, corporate restructuring, financing transaction, sale of assets, or similar business transaction, subject to appropriate confidentiality and security measures.`,
  `We take reasonable administrative, technical, and physical measures designed to safeguard personal information against unauthorized access, disclosure, alteration, misuse, or destruction. While we strive to use commercially acceptable means to protect personal information, no method of electronic transmission or storage can be guaranteed to be completely secure, and we cannot guarantee absolute security.`,
  `You may have certain rights regarding your personal information under applicable laws, including the right to access, correct, update, delete, restrict, or object to certain processing activities involving your personal information. You may also have the right to withdraw consent where processing is based on consent. Requests regarding personal information may be submitted using the contact information provided below, and we will respond in accordance with applicable legal requirements.`,
  `JPLC retains personal information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Statement, comply with legal obligations, resolve disputes, enforce agreements, and maintain appropriate business records. When personal information is no longer required, it will be securely deleted, anonymized, or otherwise disposed of in accordance with applicable laws and internal retention policies.`,
  `We may update this Privacy Statement from time to time to reflect changes in our business practices, technologies, legal requirements, or other operational needs. Any updates will be posted through our services, and the revised version will become effective upon publication unless otherwise stated.`,
  `If you have questions about this Privacy Statement or the manner in which JPLC processes personal information, please contact us using the details below.`,
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative bg-white min-h-screen">
      {/* Header */}
      <div className="relative bg-[#F8FAFC] border-b border-[#E5E7EB] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(47,67,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,67,183,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#2F43B7] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 pt-28 lg:pt-32 pb-16 lg:pb-20">
          <h1 className="font-extrabold text-4xl lg:text-5xl text-[#0F172A] tracking-[-0.03em] leading-[1.1] mb-4">
            Privacy Statement
          </h1>
          <p className="text-[#64748B] text-sm">Last Updated: May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-14 lg:py-20">
        {/* Paragraphs */}
        <div className="flex flex-col gap-6 mb-14">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[#4B5563] text-[15px] leading-[1.85]">
              {p}
            </p>
          ))}
        </div>

        {/* Contact block */}
        <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-8">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#2F43B7] mb-3">
            Email
          </p>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-[#94A3B8] text-[11px]">
                General Inquiries
              </span>
              <a
                href="mailto:Info@jplc-coffee.com"
                className="text-[#2F43B7] text-sm hover:underline"
              >
                Info@jplc-coffee.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
