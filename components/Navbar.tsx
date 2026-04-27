"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChefHat } from "lucide-react";

const navLinks = [
  { label: "Home",      path: "/" },
  { label: "Find Jobs", path: "/jobs" },
  { label: "Services",  path: "/services" },
  { label: "About",     path: "/about" },
  { label: "Contact",   path: "/contact" },
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

  const navBg = isHome
    ? scrolled
      ? "rgba(20,23,25,0.95)"
      : "transparent"
    : "#141719";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: navBg,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          {/* ── Logo ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div
              style={{
                width: 38, height: 38,
                background: "#e08f1f",
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ChefHat style={{ width: 20, height: 20, color: "#fff" }} />
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ color: "#fff", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, whiteSpace: "nowrap" }}>
                Rwanda Hospitality
              </div>
              <div style={{ color: "#e9a83b", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em" }}>
                Bridge
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: pathname === link.path ? "#e9a83b" : "#d1d5db",
                  background: pathname === link.path ? "rgba(255,255,255,0.1)" : "transparent",
                  transition: "color 0.2s, background 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.path) {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.path) {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#d1d5db";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── CTA Buttons ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-nav">
            <Link
              href="/contact"
              style={{
                padding: "8px 16px",
                fontSize: 14,
                fontWeight: 600,
                color: "#d1d5db",
                textDecoration: "none",
                transition: "color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#d1d5db"; }}
            >
              Post a Job
            </Link>
            <Link
              href="/jobs"
              style={{
                padding: "10px 20px",
                background: "#e08f1f",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 8,
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(224,143,31,0.35)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e9a83b"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e08f1f"; }}
            >
              Find Talent
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "none",
              padding: 8,
              color: "#d1d5db",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            className="mobile-menu-btn"
          >
            {open ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {open && (
        <div
          style={{
            background: "#141719",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "12px 24px 20px",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 12px",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 8,
                marginBottom: 4,
                textDecoration: "none",
                color: pathname === link.path ? "#e9a83b" : "#d1d5db",
                background: pathname === link.path ? "rgba(255,255,255,0.1)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 12, paddingTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                padding: "10px 16px",
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              Post a Job
            </Link>
            <Link
              href="/jobs"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                padding: "10px 16px",
                fontSize: 14,
                fontWeight: 600,
                background: "#e08f1f",
                color: "#fff",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              Find Talent
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
