import { LanguageCode, translations } from "@/lib/market-config";

type FooterProps = {
  language: LanguageCode;
};

export default function Footer({ language }: FooterProps) {
  const text = translations[language];

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <h2>FRESHMOUTH</h2>
        <p>{text.newsletter}</p>

        <form className="newsletter-form">
          <input type="email" placeholder="Email address" />
          <button type="button">Join</button>
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
          <a href="#">Soap</a>
          <a href="#">Deodorant</a>
          <a href="#">Hair Care</a>
          <a href="#">Bundles</a>
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
    </footer>
  );
}