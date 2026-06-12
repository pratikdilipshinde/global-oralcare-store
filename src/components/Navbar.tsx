import {
  languages,
  LanguageCode,
  MarketCode,
  markets,
  translations,
} from "@/lib/market-config";

type NavbarProps = {
  market: MarketCode;
  language: LanguageCode;
  onMarketChange: (market: MarketCode) => void;
  onLanguageChange: (language: LanguageCode) => void;
};

export default function Navbar({
  market,
  language,
  onMarketChange,
  onLanguageChange,
}: NavbarProps) {
  const text = translations[language];

  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="logo">BOLDCARE</div>

        <nav className="desktop-menu">
          <a href="#subscribe">{text.subscribe}</a>
          <a href="#rewards">{text.rewards}</a>
          <a href="#products">{text.shop}</a>
          <a href="#story">{text.story}</a>
        </nav>
      </div>

      <div className="nav-actions">
        <select
          className="selector"
          value={market}
          onChange={(event) => onMarketChange(event.target.value as MarketCode)}
          aria-label="Select country"
        >
          {Object.entries(markets).map(([code, item]) => (
            <option key={code} value={code}>
              {item.flag} {item.shortLabel}
            </option>
          ))}
        </select>

        <select
          className="selector"
          value={language}
          onChange={(event) =>
            onLanguageChange(event.target.value as LanguageCode)
          }
          aria-label="Select language"
        >
          {Object.entries(languages).map(([code, item]) => (
            <option key={code} value={code}>
              {item.nativeLabel}
            </option>
          ))}
        </select>

        <button className="icon-button" aria-label="Account">
          👤
        </button>

        <button className="cart-button" aria-label="Cart">
          Cart
        </button>
      </div>
    </header>
  );
}