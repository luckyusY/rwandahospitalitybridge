import Link from "next/link";
import { ChefHat, Mail, Phone, MapPin, Globe, AtSign, Share2, Rss } from "lucide-react";

const socialIcons = [Globe, AtSign, Share2, Rss];

export default function Footer() {
  return (
    <footer className="bg-[#141719] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#e08f1f] rounded-lg flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-[family-name:var(--font-heading)] font-bold text-base leading-none">Rwanda Hospitality</div>
                <div className="text-[#e9a83b] text-xs font-medium tracking-wide">Bridge</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Duhuza abakozi n&apos;abakoresha. Connecting hospitality talent with the best hotels, restaurants, bars, lodges and lounges across Rwanda.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/10 hover:bg-[#e08f1f] rounded-lg flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Browse Jobs", path: "/jobs" },
                { label: "Our Services", path: "/services" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Post a Job", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="hover:text-[#e9a83b] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">We Cover</h4>
            <ul className="space-y-2.5 text-sm">
              {["Hotels & Resorts", "Restaurants", "Bars & Lounges", "Lodges & Camps", "Events & MICE", "HR Consulting"].map((s) => (
                <li key={s} className="hover:text-[#e9a83b] transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#e9a83b] mt-0.5 shrink-0" />
                <span>KG 7 Ave, Kiyovu, Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#e9a83b] shrink-0" />
                <span>+250 788 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#e9a83b] shrink-0" />
                <span>hello@rwandahospitalitybridge.rw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; {new Date().getFullYear()} Rwanda Hospitality Bridge. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#e9a83b] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#e9a83b] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
