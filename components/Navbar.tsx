"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChefHat } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Find Jobs", path: "/jobs" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg =
    isHome
      ? scrolled
        ? "bg-[#141719]/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
      : "bg-[#141719] shadow-lg";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-[#e08f1f] rounded-lg flex items-center justify-center group-hover:bg-[#e9a83b] transition-colors">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-[family-name:var(--font-heading)] font-bold text-base leading-none">
                Rwanda Hospitality
              </div>
              <div className="text-[#e9a83b] text-xs font-medium tracking-wide">Bridge</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? "text-[#e9a83b] bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Post a Job
            </Link>
            <Link
              href="/jobs"
              className="px-5 py-2.5 bg-[#e08f1f] hover:bg-[#e9a83b] text-white text-sm font-semibold rounded-lg transition-colors shadow"
            >
              Find Talent
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#141719] border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`block px-3 py-3 text-sm font-medium rounded-lg mb-1 transition-colors ${
                pathname === link.path
                  ? "text-[#e9a83b] bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              Post a Job
            </Link>
            <Link
              href="/jobs"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-2.5 text-sm font-semibold bg-[#e08f1f] hover:bg-[#e9a83b] text-white rounded-lg transition-colors"
            >
              Find Talent
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
