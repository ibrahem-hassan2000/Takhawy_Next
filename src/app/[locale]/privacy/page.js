"use client";
import React, { useEffect, useState } from "react";
import HeaderPage from "../../../../Components/HeaderPage";
import { useTranslations } from "next-intl";
import axios from "axios";

function page({ params }) {
  const t = useTranslations("home.footer");
  const [privacy, setprivacyInfo] = useState();

  const getPrivacy = () => {
    const result = axios
      .get(`https://dashboard.takhawe.com/api/privacy_and_polices`)
      .then((res) => {
        console.log(res);
        setprivacyInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPrivacy();
  }, []);
  console.log(privacy ? console.log(true) : console.log(false));
  return (
    <>
      <HeaderPage title={t("privacy")} img={"/images/privacy.png"} />
      <section className="policy">
        <div className="con">
          {privacy ? (
            <>
              {privacy.privacy_polices.map((item, i) => {
                return (
                  <div
                    className="part"
                    style={{ marginBottom: "20px" }}
                    key={item.id}
                  >
                    <h3>{item.title[params.locale]}</h3>

                    <ul>
                      {item.definitions?.map((item2, i) => {
                        return <li key={item2.id}>{item2.definition[params.locale]}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}

export default page;
