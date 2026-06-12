"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  formatMoney,
  LanguageCode,
  MarketCode,
  products,
  translations,
} from "@/lib/market-config";

type ProductCardsProps = {
  market: MarketCode;
  language: LanguageCode;
};

export default function ProductCards({ market, language }: ProductCardsProps) {
  const text = translations[language];

  return (
    <section id="products" className="products-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="eyebrow">{text.productSectionEyebrow}</p>
        <h2>{text.productSectionTitle}</h2>
      </motion.div>

      <div className="product-grid">
        {products.map((product, index) => (
          <motion.article
            className="product-card"
            key={product.id}
            initial={{ opacity: 0, y: 42, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ y: -8 }}
          >
            <div className="product-image">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="product-photo"
                sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw"
              />
            </div>

            <div className="product-info">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>

              <div className="product-bottom">
                <strong>{formatMoney(product.prices[market], market)}</strong>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {text.addToCart}
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}