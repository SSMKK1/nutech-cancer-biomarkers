"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/test", label: "Test" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/seromark-1", label: "SeroMark-1" },
  { href: "/opportunity", label: "Opportunity" },
  { href: "/locations", label: "Locations" },
  { href: "/partners", label: "Partners" },
  { href: "/investors", label: "Investors" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">

        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "inherit"
          }}
          onClick={closeMenu}
        >
          <div className="brand">
            <div className="brand-logo">N</div>

            <div>
              <h2>Nutech</h2>
              <p>Cancer Biomarkers</p>
            </div>
          </div>
        </Link>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">

          <Link href="/login">
            <button className="secondary-btn">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="secondary-btn">
              Register
            </button>
          </Link>

          <Link href="/contact">
            <button className="primary-btn">
              Order Test
            </button>
          </Link>

        </div>

        <button
          type="button"
          className={`nav-hamburger${isOpen ? " open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <div className={`mobile-menu${isOpen ? " mobile-menu-open" : ""}`}>

        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-nav-actions">

          <Link href="/login" onClick={closeMenu}>
            <button className="secondary-btn">
              Login
            </button>
          </Link>

          <Link href="/register" onClick={closeMenu}>
            <button className="secondary-btn">
              Register
            </button>
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            <button className="primary-btn">
              Order Test
            </button>
          </Link>

        </div>

      </div>

    </header>
  );
}