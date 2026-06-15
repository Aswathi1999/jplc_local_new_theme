export interface NavChildItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChildItem[];
}

export const navItems: NavItem[] = [
  { label: "About JPLC", href: "/about" },
  { label: "Ecosystem", href: "/ecosystem" },
  {
    label: "Coffee Solutions",
    href: "/#coffee-solutions",
    children: [
      { label: "Coffee Beans", href: "/coffee-beans" },
      { label: "Private Label & OEM Coffee", href: "/private-label" },
      { label: "Wholesale Coffee", href: "/wholesale" },
    ],
  },
  {
    label: "Coffee Machines",
    href: "/#coffee-machines",
    children: [
      {
        label: "Commercial Coffee Machines",
        href: "/commercial-coffee-machines",
      },
      { label: "Equipment Service & Maintenance", href: "/equipment-service" },
    ],
  },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About JPLC", href: "#about" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "R&D", href: "#research" },
    { label: "Engineering", href: "#engineering" },
  ],
  solutions: [
    { label: "Hospitality Solutions", href: "#hospitality" },
    { label: "Manufacturing", href: "#manufacturing" },
    { label: "Quality & Compliance", href: "#quality" },
    { label: "Technical Services", href: "#engineering" },
  ],
  training: [
    { label: "Barista Training", href: "/training" },
    { label: "Brewing Education", href: "/training" },
    { label: "Coffee Programs", href: "/training" },
    { label: "Training Partnerships", href: "#partnership" },
  ],
  contact: {
    office: "DMCC Business Centre, Dubai, UAE",
    email: "hello@jplc.com",
    phone: "+971 4 XXX XXXX",
  },
};
