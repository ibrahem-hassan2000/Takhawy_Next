"use client";
import React, { useEffect, useState } from "react";
import HeaderPage from "../../../../Components/HeaderPage";
import { useTranslations } from "next-intl";
import axios from "axios";

function page({ params }) {
  const [conditions, setconditionsInfo] = useState();

  const t = useTranslations("home.footer");
  const getConditions = () => {
    const result = axios
      .get(`https://dashboard.takhawe.com/api/terms_and_conditions`)
      .then((res) => {
        console.log(res);
        setconditionsInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getConditions();
  }, []);
  console.log(conditions ? console.log(true) : console.log(false));
  return (
    <>
      <HeaderPage title={t("conditions")} img={"/images/conditions.png"} />
      <section className="policy">
        <div className="con">
          {conditions ? (
            <>
              <h4>
                {conditions.titles.terms_and_conditions_desc[params.locale]}
              </h4>
              {conditions.terms_and_conditions.map((item, i) => {
                return (
                  <div className="part" key={item.id}>
                    <p>
                      {i + 1}. {item.title[params.locale]} :{" "}
                    </p>

                    <ul>
                      {item.definitions?.map((item2, i) => {
                        return (
                          <li key={item2.id}>
                            {item2.definition[params.locale]}
                          </li>
                        );
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
