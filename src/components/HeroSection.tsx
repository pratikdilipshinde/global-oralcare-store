"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  formatMoney,
  LanguageCode,
  MarketCode,
  markets,
  translations,
} from "@/lib/market-config";

type HeroSectionProps = {
  market: MarketCode;
  language: LanguageCode;
};

export default function HeroSection({ market, language }: HeroSectionProps) {
  const text = translations[language];
  const selectedMarket = markets[market];

  return (
    <section className="hero">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          {text.heroEyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease: "easeOut" }}
        >
          {text.heroTitle}
        </motion.h1>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
        >
          {text.heroText}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
        >
          <motion.a
            href="#products"
            className="primary-button"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
          >
            {text.heroPrimary}
          </motion.a>

          <motion.a
            href="#products"
            className="secondary-button"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
          >
            {text.heroSecondary}
          </motion.a>
        </motion.div>

        <motion.p
          className="market-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.68 }}
        >
          {selectedMarket.flag} Prices shown for {selectedMarket.label} in{" "}
          {selectedMarket.currency}.
        </motion.p>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
      >
        <motion.div
          className="hero-image-card"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/hero-oral-care-collection.png"
            alt="Premium oral care products collection"
            fill
            priority
            sizes="(max-width: 1000px) 100vw, 50vw"
            className="hero-product-image"
          />
        </motion.div>

        <motion.div
          className="sale-badge"
          initial={{ opacity: 0, scale: 0.7, rotate: 12 }}
          animate={{ opacity: 1, scale: 1, rotate: 5 }}
          transition={{ duration: 0.55, delay: 0.85, ease: "easeOut" }}
        >
          <span>Routine from</span>
          <strong>{formatMoney(39, market)}</strong>
        </motion.div>
      </motion.div>
    </section>
  );
}