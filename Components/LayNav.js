"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "../src/navigation";

import React from "react";

function LayNav({ locale }) {
  const pathname = usePathname();
  const t =useTranslations("home.nav")
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <svg
              width="84"
              height="68"
              viewBox="0 0 84 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3038 62.1571C8.48737 61.7944 2.76704 55.6695 2.34876 53.3931C1.93048 51.1166 2.34876 43.5335 2.34876 43.5335C0.613827 22.1636 4.91059 16.3658 22.433 17.6066C53.6914 17.6066 64.1839 18.3369 65.5229 18.702C73.4699 22.0396 75.2939 25.7056 75.3824 34.4043C81.8706 38.3716 82.6925 41.1077 81.5903 46.4549C82.2879 55.8946 81.0647 60.3713 66.6184 62.1571M52.0116 61.4268C42.0291 61.1416 27.9105 61.4268 27.9105 61.4268"
                stroke="#5A42E6"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M22.433 27.2838H58.9516"
                stroke="#5A42E6"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M21.3371 15.7808C21.0395 6.86722 22.8515 4.12004 29.7359 3.36511V6.28646C24.8118 6.71312 23.7265 8.92721 24.2584 15.7808V18.7022H21.3371C20.7528 18.7022 21.0936 16.7546 21.3371 15.7808Z"
                fill="#5A42E6"
                stroke="#5A42E6"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
              <path
                d="M31.1961 4.46069L47.2635 4.46069"
                stroke="#5A42E6"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M59.3119 15.4157C59.6095 6.50211 56.3368 3.75493 49.4524 3L49.0872 6.28652C54.0113 6.71318 56.9224 8.5621 56.3906 15.4157V18.3371H59.3119C59.8962 18.3371 59.5554 16.3895 59.3119 15.4157Z"
                fill="#5A42E6"
                stroke="#5A42E6"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
              <path
                d="M22.433 35.8651H58.9516"
                stroke="#5A42E6"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M22.433 43.8989H58.9516"
                stroke="#5A42E6"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M27.9625 59.2358C27.9625 62.6001 25.0916 65.4998 21.3333 65.4998C17.5749 65.4998 14.704 62.6001 14.704 59.2358C14.704 55.8715 17.5749 52.9717 21.3333 52.9717C25.0916 52.9717 27.9625 55.8715 27.9625 59.2358Z"
                stroke="#5A42E6"
                strokeWidth="5"
              />
              <path
                d="M27.9625 59.2358C27.9625 62.6001 25.0916 65.4998 21.3333 65.4998C17.5749 65.4998 14.704 62.6001 14.704 59.2358C14.704 55.8715 17.5749 52.9717 21.3333 52.9717C25.0916 52.9717 27.9625 55.8715 27.9625 59.2358Z"
                stroke="#5A42E6"
                strokeWidth="5"
              />
              <path
                d="M14.7581 62.5223C13.8367 59.5164 13.3938 57.8317 15.4885 54.8538C18.0364 52.6364 20.6008 52.2976 22.4267 52.6628"
                stroke="#5A42E6"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
              <path
                d="M65.9434 59.2358C65.9434 62.6001 63.0725 65.4999 59.3142 65.4999C55.5558 65.4999 52.6849 62.6001 52.6849 59.2358C52.6849 55.8715 55.5558 52.9718 59.3142 52.9718C63.0725 52.9718 65.9434 55.8715 65.9434 59.2358Z"
                stroke="#5A42E6"
                strokeWidth="5"
              />
              <path
                d="M65.9434 59.2358C65.9434 62.6001 63.0725 65.4999 59.3142 65.4999C55.5558 65.4999 52.6849 62.6001 52.6849 59.2358C52.6849 55.8715 55.5558 52.9718 59.3142 52.9718C63.0725 52.9718 65.9434 55.8715 65.9434 59.2358Z"
                stroke="#5A42E6"
                strokeWidth="5"
              />
              <path
                d="M64.0223 54.3702C65.8595 56.9216 66.8195 58.375 65.7911 61.8676C64.0893 64.7853 61.7692 65.929 59.9227 66.1689"
                stroke="#5A42E6"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
            </svg>
            <h2>{t("name")}</h2>
          </Link>
          <div className="navbar-toggler2">
            <Link href={'/#app'} className="btn-lang " type="button">
            {t("loadApp")}
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  aria-current="page"
                  href="/"
                >
                  {t("home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === "/jobs" ? "active" : ""}`}
                  href="/jobs"
                >
                   {t("job")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/investors" ? "active" : ""
                  }`}
                  href="/investors"
                >
                   {t("investor")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/captainsJoin" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="/captainsJoin"
                >
                  {t("captain")}
                </Link>
              </li>
              <li className="nav-item lang">
                {
                  locale === "en" ?  <Link
                  href={pathname}
                  locale="ar"
                  className={ "active" }
                >
                  العربيه
                </Link> : <Link
                  href={pathname}
                  locale="en"
                  className={ "active" }
                >
                  الانجليزيه
                </Link>
                }

               
               
              </li>
            </ul>
            <div className="endnav">
              <Link href={'/#app'} className="btn-lang btn-lang1" type="button">
              {t("loadApp")}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LayNav;
