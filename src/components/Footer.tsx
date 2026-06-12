"use client";

import { motion } from "framer-motion";
import { LanguageCode, translations } from "@/lib/market-config";

type FooterProps = {
  language: LanguageCode;
};

export default function Footer({ language }: FooterProps) {
  const text = translations[language];

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="footer-newsletter">
        <div>
          <h2>FRESHMOUTH</h2>
          <p>{text.newsletter}</p>
        </div>

        <form className="newsletter-form">
          <input type="email" placeholder="Email address" />
          <motion.button
            type="button"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            Join
          </motion.button>
        </form>
      </div>

      <div className="footer-links">
        <div>
          <h3>{text.footerHelp}</h3>
          <a href="#">FAQ</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <h3>{text.footerShop}</h3>
          <a href="#">Toothpaste</a>
          <a href="#">Mouthwash</a>
          <a href="#">Oil Pulling</a>
          <a href="#">Toothbrush</a>
        </div>

        <div>
          <h3>{text.footerBrand}</h3>
          <a href="#">Our Story</a>
          <a href="#">Ingredients</a>
          <a href="#">Reviews</a>
          <a href="#">Blog</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 FRESHMOUTH. All rights reserved.</span>
        <span>Terms · Privacy · Accessibility</span>
      </div>
    </motion.footer>
  );
}