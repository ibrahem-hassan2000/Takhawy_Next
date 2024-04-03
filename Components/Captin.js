import { useTranslations } from "next-intl";
import React from "react";

function Captin() {
  const t = useTranslations("captain.why");

  return (
    <section className="captin">
      <div className="con">
        <div className="content">
          <h2>{t("title")}</h2>
          <div className="parts">
            <div className="part">
              <div className="imgPart">
                <img src="/images/innovation.png" alt="innovation" />
              </div>
              <h3>{t("smartTitle")}</h3>
              <p>{t("smartDec")}</p>
            </div>
            <div className="part">
              <div className="imgPart">
                <img src="/images/star.png" alt="star" />
              </div>
              <h3> {t("ratingTitle")}</h3>
              <p>{t("ratingDec")}</p>
            </div>
            <div className="part">
              <div className="imgPart">
                <img src="/images/effects.png" alt="effects" />
              </div>
              <h3> {t("EffectTitle")}</h3>
              <p>{t("EffectDec")}</p>
            </div>
            <div className="part">
              <div className="imgPart">
                <img src="/images/business.png" alt="business" />
              </div>
              <h3> {t("costTitle")}</h3>
              <p>{t("costDec")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Captin;
