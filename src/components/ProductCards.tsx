import Image from "next/image";
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
      <div className="section-heading">
        <p className="eyebrow">{text.productSectionEyebrow}</p>
        <h2>{text.productSectionTitle}</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
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
                <button>{text.addToCart}</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}