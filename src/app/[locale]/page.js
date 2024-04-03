import { useTranslations } from "next-intl";
import "./globals.css";
import { Link } from "../../navigation";
import AppPart from "../../../Components/AppPart";
import Questions from "../../../Components/Questions";

export default function Home({ params }) {
  const t = useTranslations("home");
  return (
    <main>
      <section className="header">
        <div className="content">
          <div className="boxImg">
            <img src="/images/headerImg.webp" alt="header Img" />
          </div>

          <div className="dec">
            <h1>{t("about.title1")}</h1>
            <p>{t("about.dec")}</p>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="con">
          <div className="content">
            <h2>{t("ad.title")}</h2>
            <div className="parts">
              <div className="part">
                <div className="imgPart">
                  <img src="/images/time.png" alt="time" />
                </div>
                <h3>{t("ad.timeTitle")}</h3>
                <p>{t("ad.timedec")}</p>
              </div>
              <div className="part">
                <div className="imgPart">
                  <img src="/images/money.png" alt="money" />
                </div>
                <h3>{t("ad.provisionTitle")}</h3>
                <p>{t("ad.provisiondec")}</p>
              </div>
              <div className="part">
                <div className="imgPart">
                  <img src="/images/protection.png" alt="protection" />
                </div>
                <h3>{t("ad.securitytitle")}</h3>
                <p>{t("ad.securitydec")}</p>
              </div>
              <div className="part">
                <div className="imgPart">
                  <img src="/images/hotel.png" alt="hotel" />
                </div>
                <h3>{t("ad.hotelstitle")}</h3>
                <p>{t("ad.hotelsdec")} </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="con">
          <div className="content">
            <h2> {t("who.title1")}</h2>
            <h3>{t("who.dec")}</h3>
            <h4> {t("who.title2")}</h4>
            <div className="join">
              <Link href="/investors" className="joinTeam">
                {t("who.joinTime")}
              </Link>
              <Link href="/captainsJoin" className="joinCapt">
                {t("who.joinCap")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <AppPart />

      <section className="goals">
        <div className="con">
          <div className="content">
            <div className="part">
              <h2> {t("goals.title1")}</h2>
              <p>{t("goals.dec1")}</p>
            </div>
            <div className="part">
              <h2>{t("goals.title2")}</h2>
              <p>{t("goals.dec2")}</p>
            </div>
            <div className="part">
              <h2>{t("goals.title3")}</h2>
              <p>
                {t("goals.dec31")}
                <span>{t("goals.dec311")}</span>
              </p>
              <p>
                {t("goals.dec32")}
                <span>{t("goals.dec322")}</span>
              </p>

              <p>
                {t("goals.dec33")}
                <span>{t("goals.dec333")}</span>
              </p>
            </div>
            <div className="part">
              <h2>{t("goals.title4")}</h2>
              <p>{t("goals.dec4")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="location">
        <div className="content">
          <div className="part1">
            <h2>{t("location.title")}</h2>
          </div>
          <div className="part2">
            <img src="/images/location.png" alt="location" />
          </div>
        </div>
      </section>

      <Questions lang={params.locale} />
    </main>
  );
}
