"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "../src/navigation";
import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
function LayNav({ locale }) {
  const pathname = usePathname();
  const t = useTranslations("home.nav");
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image width={112.63} height={110} src={logo} className="h-[80px] lg:h-[110px] w-auto logoNav" />
            <h2>{t("name")}</h2>
          </Link>
          <div className="navbar-toggler2">
            <Link href={"/#app"} className="btn-lang " type="button">
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
                {locale === "en" ? (
                  <Link href={pathname} locale="ar" className={"active"}>
                    العربيه
                  </Link>
                ) : (
                  <Link href={pathname} locale="en" className={"active"}>
                    الانجليزيه
                  </Link>
                )}
              </li>
            </ul>
            <div className="endnav">
              <Link href={"/#app"} className="btn-lang btn-lang1" type="button">
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
