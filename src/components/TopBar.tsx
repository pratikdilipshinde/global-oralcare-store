import {
  formatMoney,
  LanguageCode,
  MarketCode,
  markets,
  translations,
} from "@/lib/market-config";

type TopBarProps = {
  market: MarketCode;
  language: LanguageCode;
};

export default function TopBar({ market, language }: TopBarProps) {
  const selectedMarket = markets[market];
  const text = translations[language];

  return (
    <div className="topbar">
      <span>
        {text.topbar} {formatMoney(selectedMarket.freeShipping, market)}
      </span>
      <span className="topbar-divider">•</span>
      <span>{selectedMarket.flag} Shopping in {selectedMarket.shortLabel}</span>
    </div>
  );
}