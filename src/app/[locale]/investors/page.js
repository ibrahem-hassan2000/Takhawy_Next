"use client";
import React, { useEffect, useState } from "react";
import HeaderPage from "../../../../Components/HeaderPage";
import { Checkbox, FileInput, Input, LoadingOverlay, Textarea } from "@mantine/core";
import { useTranslations } from "next-intl";
import { Link } from "../../../navigation";
import axios from "axios";
import { notifications } from "@mantine/notifications";

function page({ params }) {
  const [investors, setInvestors] = useState("company");
  const t = useTranslations("investor");
  const t2 = useTranslations("notfication");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState(1);
  const [terms, setTerms] = useState(false);
  const [file, setFile] = useState(null);
  const [nameErorr, setNameErorr] = useState("");
  const [emailErorr, setEmailErorr] = useState("");
  const [mobileErorr, setMobileErorr] = useState("");
  const [termsErorr, setTermsErorr] = useState("");
  const [Loading, setLoading] = useState(false);

  console.log(file);
  let CompleteData =
    name && surname && email && mobile && type && terms ? true : false;

  const handellogin = () => {
    setLoading(true)
    const po = axios
      .post(
        "https://dashboard.takhawe.com/api/investors",
        {
          name: name,
          surname: surname,
          email: email,
          mobile: mobile,
          message: message,
          type: type,
          terms_accepted: terms === true ? 1 : 0,
          files: file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            "Accept-Language": params.locale,
          },
        }
      )
      .then((res) => {
    setLoading(false)

        console.log(res);
        notifications.show({
          dir: "rtl",
          icon: true,
          top: 20,
          autoClose: 15000,
          title: t2("investorTitle"),
          message: t2("investorDec"),
        });
        setName("");
        setSurname("");
        setEmail("");
        setMobile("");
        setMessage("");
        setTerms("");
        setFile(null);
        setNameErorr("");
        setEmailErorr("");
        setMobileErorr("");
        setTermsErorr("");
      })
      .catch((res) => {
    setLoading(false)

        setNameErorr(
          res.response.data?.errors?.name
            ? res.response.data.errors.name[0]
            : null
        );
        setEmailErorr(
          res.response.data?.errors?.email
            ? res.response.data.errors.email[0]
            : null
        );
        setMobileErorr(
          res.response?.data?.errors?.mobile
            ? res.response?.data?.errors?.mobile[0]
            : null
        );
        setTermsErorr(
          res.response?.data?.errors?.terms_accepted
            ? res.response?.data?.errors?.terms_accepted[0]
            : null
        );
        console.log(res);
      });
  };

  return (
    <>
      <HeaderPage
        title={t("title")}
        title2={t("dec")}
        img={"/images/investors.png"}
      />
      <section className="investors">
        <div className="con">
      <LoadingOverlay visible={Loading} loaderProps={{ color: '#5a42e6'}} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />

          <div className="content">
            <h2> {t("info")}</h2>
            <form action="">
              <div className={investors + " switchInvestors"}>
                <button
                  className={investors === "company" ? "active" : null}
                  onClick={(e) => {
                    e.preventDefault();
                    setInvestors("company");
                    setType(1);
                  }}
                >
                  {t("company")}
                </button>
                <button
                  className={investors === "one" ? "active" : null}
                  onClick={(e) => {
                    e.preventDefault();
                    setInvestors("one");
                    setType(2);
                  }}
                >
                  {t("one")}
                </button>
              </div>
              <div className="formInput   ">
                <div className="parts ">
                  <label>{t("name")} </label>
                  <div className="part">
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.8227 19.3154L18.8227 19.3154C19.3011 20.1657 19.3538 21.2067 19.0798 22.0186C18.8043 22.835 18.2805 23.25 17.6951 23.25H17.6831H17.6711H17.6589H17.6467H17.6344H17.6221H17.6096H17.5971H17.5844H17.5717H17.559H17.5461H17.5332H17.5202H17.5071H17.4939H17.4807H17.4674H17.454H17.4405H17.427H17.4134H17.3997H17.3859H17.3721H17.3582H17.3442H17.3301H17.316H17.3018H17.2876H17.2732H17.2588H17.2443H17.2298H17.2152H17.2005H17.1858H17.171H17.1561H17.1411H17.1261H17.111H17.0959H17.0807H17.0654H17.0501H17.0347H17.0192H17.0037H16.9881H16.9725H16.9568H16.941H16.9252H16.9093H16.8933H16.8773H16.8612H16.8451H16.8289H16.8127H16.7964H16.78H16.7636H16.7471H16.7306H16.714H16.6974H16.6807H16.664H16.6472H16.6303H16.6134H16.5965H16.5795H16.5624H16.5453H16.5281H16.5109H16.4937H16.4763H16.459H16.4416H16.4241H16.4066H16.3891H16.3715H16.3538H16.3362H16.3184H16.3006H16.2828H16.265H16.247H16.2291H16.2111H16.193H16.175H16.1568H16.1387H16.1205H16.1022H16.0839H16.0656H16.0472H16.0288H16.0104H15.9919H15.9734H15.9548H15.9362H15.9176H15.8989H15.8802H15.8615H15.8427H15.8239H15.8051H15.7862H15.7673H15.7483H15.7294H15.7104H15.6913H15.6722H15.6531H15.634H15.6149H15.5957H15.5765H15.5572H15.5379H15.5186H15.4993H15.48H15.4606H15.4412H15.4217H15.4023H15.3828H15.3633H15.3437H15.3242H15.3046H15.285H15.2654H15.2457H15.2261H15.2064H15.1867H15.1669H15.1472H15.1274H15.1076H15.0878H15.068H15.0482H15.0283H15.0084H14.9885H14.9686H14.9487H14.9288H14.9088H14.8888H14.8688H14.8488H14.8288H14.8088H14.7888H14.7687H14.7487H14.7286H14.7085H14.6884H14.6683H14.6482H14.6281H14.608H14.5878H14.5677H14.5475H14.5274H14.5072H14.487H14.4668H14.4467H14.4265H14.4063H14.3861H14.3659H14.3457H14.3255H14.3053H14.2851H14.2648H14.2446H14.2244H14.2042H14.184H14.1638H14.1436H14.1233H14.1031H14.0829H14.0627H14.0425H14.0223H14.0021H13.9819H13.9617H13.9416H13.9214H13.9012H13.8811H13.8609H13.8407H13.8206H13.8005H13.7803H13.7602H13.7401H13.72H13.6999H13.6798H13.6598H13.6397H13.6197H13.5996H13.5796H13.5596H13.5396H13.5196H13.4997H13.4797H13.4598H13.4399H13.42H13.4001H13.3802H13.3603H13.3405H13.3207H13.3009H13.2811H13.2613H13.2416H13.2219H13.2022H13.1825H13.1628H13.1432H13.1236H13.104H13.0844H13.0648H13.0453H13.0258H13.0063H12.9869H12.9675H12.9481H12.9287H12.9093H12.89H12.8707H12.8515H12.8322H12.813H12.7938H12.7747H12.7556H12.7365H12.7174H12.6984H12.6794H12.6604H12.6415H12.6226H12.6037H12.5849H12.5661H12.5473H12.5286H12.5099H12.4913H12.4726H12.4541H12.4355H12.417H12.3985H12.3801H12.3617H12.3433H12.325H12.3067H12.2885H12.2703H12.2522H12.234H12.216H12.1979H12.18H12.162H12.1441H12.1263H12.1084H12.0907H12.073H12.0553H12.0377H12.0201H12.0025H11.985H11.9676H11.9502H11.9329H11.9156H11.8983H11.8811H11.864H11.8469H11.8299H11.8129H11.7959H11.779H11.7622H11.7454H11.7287H11.712H11.6954H11.6788H11.6623H11.6459H11.6295H11.6131H11.5968H11.5806H11.5644H11.5483H11.5323H11.5163H11.5004H11.4845H11.4687H11.4529H11.4372H11.4216H11.406H11.3905H11.3751H11.3597H11.3444H11.3291H11.3139H11.2988H11.2837H11.2688H11.2538H11.239H11.2242H11.2094H11.1948H11.1802H11.1657H11.1512H11.1368H11.1225H11.1083H11.0941H11.08H11.066H11.052H11.0381H11.0243H11.0106H10.9969H10.9833H10.9698H10.9563H10.943H10.9297H10.9165H10.9033H10.8903H10.8773H10.8644H10.8515H10.8388H10.8261H10.8135H10.801H10.7885H10.7762H10.7639H10.7517H10.7396H10.7276H10.7156H10.7038H10.692H10.6803H10.6687H10.6572H10.6457H10.6344H10.6231H10.6119H10.6008H10.5898H10.5789H10.5681H10.5573H10.5467H10.5361H10.5256H10.5152H10.5049H10.4947H10.4846H10.4746H10.4647H10.4548H10.4451H10.4354H10.4259H10.4164H10.407H10.3978H10.3886H10.3795H10.3705H10.3616H10.3528H10.3441H10.3355H10.327H10.3186H10.3103H10.3021H10.294H10.286H10.2781H10.2703H10.2626H10.2551H10.2476H10.2402H10.2329H10.2257H10.2186H10.2117H10.2048H10.198H10.1914H10.1848H10.1784H10.172H10.1658H10.1597H10.1537H10.1478H10.142H10.1363H10.1307H10.1253H10.1199H10.1147H10.1095H10.1045H10.0996H10.0948H10.0901H10.0856H10.0811H10.0768H10.0726H10.0685H10.0645H10.0606H10.0568H10.0532H10.0497H10.0463H10.043H10.0398H10.0368H10.0338H10.031H10.0283H10.0258H10.0233H10.021H10.0188H10.0167H10.0148H10.0129H10.0112H10.0096H10.0082H10.0068H10.0056H10.0045H10.0036H10.0027H10.002H10.0015H10.001H10.0007H10.0005L10.0004 24L10.0004 23.25H10.0002H9.99985H9.9994H9.99882H9.99811H9.99728H9.99632H9.99523H9.99402H9.99268H9.99122H9.98963H9.98792H9.98609H9.98413H9.98205H9.97985H9.97752H9.97507H9.9725H9.96982H9.96701H9.96408H9.96103H9.95786H9.95457H9.95117H9.94764H9.944H9.94024H9.93637H9.93238H9.92827H9.92405H9.91971H9.91526H9.9107H9.90602H9.90122H9.89632H9.8913H9.88617H9.88093H9.87557H9.87011H9.86453H9.85885H9.85306H9.84715H9.84114H9.83502H9.82879H9.82245H9.81601H9.80946H9.8028H9.79604H9.78917H9.7822H9.77512H9.76794H9.76065H9.75327H9.74577H9.73818H9.73048H9.72268H9.71478H9.70678H9.69868H9.69048H9.68218H9.67378H9.66528H9.65668H9.64799H9.6392H9.63031H9.62132H9.61224H9.60306H9.59378H9.58441H9.57495H9.56539H9.55574H9.54599H9.53615H9.52622H9.5162H9.50608H9.49588H9.48558H9.47519H9.46471H9.45414H9.44349H9.43274H9.42191H9.41098H9.39997H9.38888H9.37769H9.36642H9.35506H9.34362H9.33209H9.32048H9.30879H9.29701H9.28514H9.2732H9.26117H9.24905H9.23686H9.22459H9.21223H9.19979H9.18728H9.17468H9.16201H9.14925H9.13642H9.12351H9.11052H9.09745H9.08431H9.07109H9.0578H9.04442H9.03098H9.01746H9.00386H8.99019H8.97645H8.96264H8.94875H8.93479H8.92075H8.90665H8.89248H8.87823H8.86391H8.84953H8.83507H8.82055H8.80596H8.7913H8.77657H8.76177H8.74691H8.73198H8.71699H8.70193H8.6868H8.67161H8.65636H8.64104H8.62566H8.61021H8.5947H8.57913H8.5635H8.54781H8.53205H8.51624H8.50036H8.48442H8.46843H8.45237H8.43626H8.42009H8.40386H8.38758H8.37123H8.35484H8.33838H8.32187H8.3053H8.28868H8.27201H8.25528H8.23849H8.22166H8.20477H8.18783H8.17083H8.15379H8.13669H8.11955H8.10235H8.0851H8.06781H8.05046H8.03307H8.01563H7.99814H7.9806H7.96302H7.94539H7.92771H7.90999H7.89222H7.87441H7.85655H7.83865H7.8207H7.80272H7.78468H7.76661H7.7485H7.73034H7.71214H7.6939H7.67562H7.65731H7.63895H7.62055H7.60211H7.58364H7.56513H7.54658H7.52799H7.50937H7.49071H7.47202H7.45329H7.43452H7.41572H7.39689H7.37802H7.35912H7.34019H7.32122H7.30222H7.28319H7.26413H7.24504H7.22592H7.20677H7.18759H7.16838H7.14914H7.12987H7.11057H7.09125H7.0719H7.05253H7.03312H7.01369H6.99424H6.97476H6.95526H6.93573H6.91618H6.89661H6.87701H6.85739H6.83775H6.81809H6.7984H6.7787H6.75897H6.73922H6.71946H6.69967H6.67987H6.66005H6.64021H6.62035H6.60048H6.58059H6.56068H6.54076H6.52082H6.50087H6.4809H6.46092H6.44092H6.42092H6.40089H6.38086H6.36081H6.34075H6.32069H6.30061H6.28051H6.26041H6.2403H6.22018H6.20006H6.17992H6.15978H6.13962H6.11946H6.0993H6.07913H6.05895H6.03877H6.01858H5.99838H5.97819H5.95799H5.93778H5.91757H5.89736H5.87715H5.85694H5.83672H5.81651H5.79629H5.77607H5.75586H5.73564H5.71543H5.69522H5.67501H5.6548H5.63459H5.61439H5.59419H5.574H5.55381H5.53362H5.51344H5.49327H5.4731H5.45294H5.43279H5.41264H5.3925H5.37237H5.35225H5.33214H5.31204H5.29194H5.27186H5.25179H5.23173H5.21168H5.19164H5.17161H5.1516H5.1316H5.11162H5.09165H5.07169H5.05175H5.03182H5.01191H4.99201H4.97214H4.95227H4.93243H4.9126H4.8928H4.87301H4.85324H4.83349H4.81376H4.79404H4.77435H4.75469H4.73504H4.71541H4.69581H4.67623H4.65667H4.63714H4.61763H4.59814H4.57868H4.55925H4.53984H4.52046H4.5011H4.48177H4.46247H4.44319H4.42395H4.40473H4.38554H4.36638H4.34725H4.32815H4.30908H4.29004H4.27104H4.25206H4.23312H4.21421H4.19533H4.17649H4.15768H4.13891H4.12017H4.10147H4.0828H4.06416H4.04557H4.02701H4.00849H3.99H3.97156H3.95315H3.93478H3.91645H3.89816H3.87991H3.8617H3.84354H3.82541H3.80733H3.78928H3.77128H3.75333H3.73542H3.71755H3.69972H3.68194H3.66421H3.64652H3.62888H3.61128H3.59373H3.57623H3.55877H3.54137H3.52401H3.5067H3.48944H3.47223H3.45507H3.43796H3.4209H3.4039H3.38694H3.37004H3.35319H3.33639H3.31965H3.30296H3.28632H3.26974H3.25321H3.23674H3.22033H3.20397H3.18767H3.17143H3.15524H3.13911H3.12304H3.10703H3.09108H3.07519H3.05936H3.04359H3.02788H3.01223H2.99664H2.98112H2.96566H2.95026H2.93492H2.91965H2.90444H2.8893H2.87422H2.85921H2.84426H2.82938H2.81457H2.79982H2.78515H2.77053H2.75599H2.74152H2.72712H2.71278H2.69852H2.68432H2.6702H2.65615H2.64217H2.62826H2.61443H2.60067H2.58698H2.57336H2.55982H2.54636H2.53297H2.51965H2.50641H2.49325H2.48016H2.46715H2.45422H2.44137H2.42859H2.41589H2.40328H2.39074H2.37828H2.3659H2.35361H2.34139H2.32926H2.31721H2.30524C1.71978 23.25 1.19604 22.835 0.920491 22.0185C0.646517 21.2067 0.699198 20.1657 1.17756 19.3154L1.17765 19.3152C1.96605 17.913 3.2073 16.3743 5.16246 15.4235C6.56416 16.308 8.22312 16.8221 10.0004 16.8221C11.7768 16.8221 13.4357 16.308 14.8373 15.4235C16.7925 16.3743 18.0337 17.9129 18.8227 19.3154Z"
                        fill="#ACA0F2"
                        stroke="#5A42E6"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M15.5427 7.79995C15.5427 10.8609 13.0618 13.3425 10.0006 13.3425C6.93882 13.3425 4.45752 10.8608 4.45752 7.8V6.29259C4.45752 3.23177 6.93878 0.75 10.0006 0.75C13.0618 0.75 15.5427 3.23166 15.5427 6.29255V7.79995Z"
                        fill="#ACA0F2"
                        stroke="#5A42E6"
                        strokeWidth="1.5"
                      />
                    </svg>

                    <div className="partInput">
                      <Input
                        value={name}
                        error={nameErorr}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        placeholder={t("namePlac")}
                      />
                    </div>
                  </div>
                  {nameErorr && (
                    <div className="errorInput">
                      <p>{nameErorr}</p>
                    </div>
                  )}
                </div>
                <div className="parts ">
                  <label>{t("name2")}</label>
                  <div className="part">
                    <svg
                      width="25"
                      height="20"
                      viewBox="0 0 25 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.4928 8.88226C11.6351 8.88226 10.9462 8.17927 10.9462 7.32163C10.9462 6.46398 11.6351 5.76099 12.4928 5.76099C13.3504 5.76099 14.0534 6.46398 14.0534 7.32163C14.0534 8.17927 13.3504 8.88226 12.4928 8.88226ZM0.598242 14.1125V2.66785C0.598242 2.44289 0.781018 2.24605 1.00597 2.24605H23.9796C24.2186 2.24605 24.4014 2.44289 24.4014 2.66785V17.3322C24.4014 17.5571 24.2186 17.7399 23.9796 17.7399H1.00597C0.781018 17.7399 0.598242 17.5571 0.598242 17.3322V14.1125ZM23.5719 13.6907V3.08964H1.42777V13.6907H23.5719ZM1.42777 16.9104H23.5719V14.5202H1.42777V16.9104ZM19.8742 16.1371H5.12548C4.57715 16.1371 4.57715 15.2935 5.12548 15.2935H19.8742C20.4225 15.2935 20.4225 16.1371 19.8742 16.1371ZM15.7547 1.23375H1.00597C0.457644 1.23375 0.457644 0.390167 1.00597 0.390167H15.7547C16.317 0.390167 16.317 1.23375 15.7547 1.23375ZM23.9796 19.5958H9.23093C8.6826 19.5958 8.6826 18.7663 9.23093 18.7663H23.9796C24.5279 18.7663 24.5279 19.5958 23.9796 19.5958ZM22.0394 12.6643C21.8144 12.6643 21.6316 12.4816 21.6316 12.2425V4.52374C21.6316 3.9754 22.4612 3.9754 22.4612 4.52374V12.2425C22.4612 12.4816 22.2784 12.6643 22.0394 12.6643ZM2.94622 12.6643C2.72126 12.6643 2.52443 12.4816 2.52443 12.2425V4.52374C2.52443 3.9754 3.36801 3.9754 3.36801 4.52374V12.2425C3.36801 12.4816 3.18524 12.6643 2.94622 12.6643ZM8.21863 8.587C8.13427 6.30932 9.89174 4.10194 12.4928 4.10194C16.1062 4.10194 18.0745 8.30581 15.825 11.0756C14.9533 12.1582 13.6879 12.6784 12.4225 12.6643C10.1729 12.6222 8.31705 10.8225 8.21863 8.587ZM12.4928 4.94553C9.82144 4.94553 8.17645 7.88402 9.54025 10.1476C10.0183 9.69773 10.5947 9.36029 11.2415 9.16345C11.6914 9.02286 11.7195 9.59931 12.4928 9.59931C13.2801 9.59931 13.3083 9.02286 13.7582 9.16345C14.3909 9.36029 14.9673 9.69773 15.4453 10.1476C16.8091 7.88402 15.1782 4.94553 12.4928 4.94553ZM10.0605 10.8225C11.4102 12.1722 13.5895 12.1722 14.9392 10.8225C14.5877 10.471 14.18 10.2039 13.716 10.0352C12.9989 10.5694 12.0007 10.5694 11.2696 10.0352C10.8197 10.2039 10.412 10.471 10.0605 10.8225ZM12.4928 6.60458C11.5508 6.60458 11.5508 8.03867 12.4928 8.03867C13.4489 8.03867 13.4489 6.60458 12.4928 6.60458Z"
                        fill="#5A42E6"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.7161 10.0352C12.999 10.5694 12.0008 10.5694 11.2697 10.0352C10.8198 10.2039 10.412 10.471 10.0605 10.8225C11.4103 12.1722 13.5895 12.1722 14.9393 10.8225C14.5878 10.471 14.1801 10.2039 13.7161 10.0352Z"
                        fill="#5A42E6"
                        fillOpacity="0.35"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.758 9.16345C14.3907 9.36029 14.9671 9.69772 15.4451 10.1476C16.8089 7.88401 15.178 4.94553 12.4926 4.94553C9.82125 4.94553 8.17625 7.88401 9.54005 10.1476C10.0181 9.69772 10.5945 9.36029 11.2413 9.16345C11.6912 9.02286 11.7193 9.59931 12.4926 9.59931C13.2799 9.59931 13.3081 9.02286 13.758 9.16345ZM14.0532 7.32162C14.0532 8.17927 13.3502 8.88226 12.4926 8.88226C11.635 8.88226 10.946 8.17927 10.946 7.32162C10.946 6.46398 11.635 5.76099 12.4926 5.76099C13.3502 5.76099 14.0532 6.46398 14.0532 7.32162Z"
                        fill="#5A42E6"
                        fillOpacity="0.35"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.4926 8.03868C13.4487 8.03868 13.4487 6.60458 12.4926 6.60458C11.5506 6.60458 11.5506 8.03868 12.4926 8.03868Z"
                        fill="#5A42E6"
                        fillOpacity="0.35"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.4928 4.10193C16.1061 4.10193 18.0745 8.3058 15.8249 11.0756C14.9532 12.1582 13.6878 12.6784 12.4225 12.6643C10.1729 12.6221 8.31701 10.8225 8.2186 8.58699C8.13424 6.30931 9.89171 4.10193 12.4928 4.10193ZM3.36798 4.52373V12.2425C3.36798 12.4815 3.1852 12.6643 2.94619 12.6643C2.72123 12.6643 2.5244 12.4815 2.5244 12.2425V4.52373C2.5244 3.97539 3.36798 3.97539 3.36798 4.52373ZM1.42773 3.08963V13.6907H23.5718V3.08963H1.42773ZM22.0393 12.6643C21.8144 12.6643 21.6316 12.4815 21.6316 12.2425V4.52373C21.6316 3.97539 22.4611 3.97539 22.4611 4.52373V12.2425C22.4611 12.4815 22.2784 12.6643 22.0393 12.6643Z"
                        fill="#5A42E6"
                        fillOpacity="0.35"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.5718 14.5202H1.42773V16.9104H23.5718V14.5202ZM19.8741 15.2935C20.4225 15.2935 20.4225 16.1371 19.8741 16.1371H5.12545C4.57712 16.1371 4.57712 15.2935 5.12545 15.2935H19.8741Z"
                        fill="#5A42E6"
                        fillOpacity="0.35"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.4926 8.03868C13.4487 8.03868 13.4487 6.60458 12.4926 6.60458C11.5506 6.60458 11.5506 8.03868 12.4926 8.03868Z"
                        fill="#5A42E6"
                        fillOpacity="0.35"
                      />
                    </svg>

                    <div className="partInput">
                      <Input
                        value={surname}
                        onChange={(e) => {
                          setSurname(e.target.value);
                        }}
                        placeholder={t("name2Place")}
                      />
                    </div>
                  </div>
                </div>
                <div className="parts ">
                  <label>{t("email")}</label>
                  <div className="part">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M20 6.5H4L12 11.49L20 6.5Z"
                        fill="#5A42E6"
                      />
                      <path
                        opacity="0.5"
                        d="M4 8.5V18.5H20V8.5L12 13.5L4 8.5Z"
                        fill="#5A42E6"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 4.5H4C2.9 4.5 2 5.4 2 6.5V18.5C2 19.6 2.9 20.5 4 20.5H20C21.1 20.5 22 19.6 22 18.5V6.5C22 5.4 21.1 4.5 20 4.5ZM20 6.5L12 11.49L4 6.5H20ZM12 13.5L4 8.5V18.5H20V8.5L12 13.5Z"
                        fill="#5A42E6"
                      />
                    </svg>

                    <div className="partInput">
                      <Input
                        value={email}
                        error={emailErorr}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder={t("emailPlac")}
                      />
                    </div>
                  </div>
                  {emailErorr && (
                    <div className="errorInput">
                      <p>{emailErorr}</p>
                    </div>
                  )}
                </div>
                <div className="parts ">
                  <label>{t("num")} </label>
                  <div className="part">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_83_529)">
                        <path
                          d="M24.5 17.7306C24.5 18.8673 24.2309 19.9439 23.7008 20.9301C23.203 21.8554 22.4821 22.6654 21.615 23.2729C20.7516 23.878 19.7494 24.2774 18.7177 24.4288C18.3943 24.4761 18.0709 24.5 17.7489 24.5C16.974 24.5 16.2058 24.3631 15.4549 24.0903C12.1456 22.888 9.07404 20.9301 6.57195 18.428C4.06986 15.926 2.11197 12.8544 0.909669 9.54512C0.523434 8.48203 0.409532 7.38426 0.571245 6.28227C0.722645 5.2506 1.122 4.24845 1.72714 3.38504C2.33461 2.51789 3.14458 1.79698 4.06986 1.29919C5.05607 0.769052 6.13275 0.5 7.26942 0.5C7.62331 0.5 7.92893 0.747022 8.00299 1.09295L9.17997 6.58648C9.23341 6.83491 9.157 7.09412 8.97701 7.27364L6.96568 9.28544C8.86311 13.0578 11.9422 16.1369 15.7146 18.0343L17.7264 16.023C17.9059 15.843 18.1651 15.7666 18.4135 15.82L23.9071 16.997C24.253 17.0711 24.5 17.3767 24.5 17.7306Z"
                          fill="#ACA0F2"
                        />
                        <path
                          d="M5.53507 2.23431C4.3984 2.23431 3.32172 2.50336 2.33551 3.03349C2.11755 3.15068 1.90568 3.28052 1.70178 3.42207C1.70975 3.40942 1.71866 3.39723 1.72709 3.38504C2.33457 2.51789 3.14454 1.79698 4.06981 1.29919C5.05603 0.769052 6.1327 0.5 7.26938 0.5C7.62327 0.5 7.92888 0.747022 8.00294 1.09295L9.17993 6.58648C9.23336 6.83491 9.15696 7.09412 8.97697 7.27364L7.24266 9.00795C7.42265 8.82842 7.49906 8.56922 7.44562 8.32079L6.26863 2.82725C6.19458 2.48133 5.88896 2.23431 5.53507 2.23431Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M15.7145 18.0343L14.7196 19.0292C14.2685 19.4803 13.5716 19.5688 13.0185 19.2508C9.9999 17.5153 7.48464 15 5.74911 11.9814C5.43112 11.4283 5.51957 10.7314 5.97068 10.2803L6.96556 9.2854C8.86304 13.0578 11.9421 16.1369 15.7145 18.0343Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M24.5 17.7306C24.5 18.8673 24.231 19.944 23.7008 20.9302C23.203 21.8555 22.4821 22.6654 21.615 23.2729C21.6028 23.2813 21.5906 23.2903 21.5779 23.2982C21.7195 23.0943 21.8493 22.8825 21.9665 22.6645C22.4967 21.6783 22.7657 20.6016 22.7657 19.4649C22.7657 19.111 22.5187 18.8054 22.1728 18.7314L16.6792 17.5544C16.4308 17.5009 16.1716 17.5774 15.9921 17.7573L17.7264 16.023C17.9059 15.843 18.1651 15.7666 18.4135 15.8201L23.9071 16.9971C24.253 17.0711 24.5 17.3767 24.5 17.7306Z"
                          fill="#5A42E6"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_83_529">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="codePhone">+966</p>
                    <div className="partInput">
                      <Input
                        value={mobile}
                        maxLength={9}
                        error={mobileErorr}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                        placeholder={t("numPlace")}
                      />
                    </div>
                  </div>
                  {mobileErorr && (
                    <div className="errorInput">
                      <p>{mobileErorr}</p>
                    </div>
                  )}
                </div>

                <div className="parts  ">
                  <label>{t("cv")} </label>
                  <div className="part">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_83_580)">
                        <path
                          d="M20.2492 23.0992L22.4189 2.9574L7.41003 1.34056L5.24025 21.4824L20.2492 23.0992Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M3.5 24.4999H17.1886V4.48608H3.5V24.4999Z"
                          fill="#ACA0F2"
                        />
                        <path
                          d="M14.9333 14.5568H5.75537V15.964H14.9333V14.5568Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M14.9333 17.0597H5.75537V18.4669H14.9333V17.0597Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M14.9333 19.5627H5.75537V20.97H14.9333V19.5627Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M14.9331 14.5568H10.8528V15.964H14.9331V14.5568Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M14.9331 19.5627H10.8528V20.97H14.9331V19.5627Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M14.9331 17.0597H10.8528V18.4669H14.9331V17.0597Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M5.61353 10.5043C5.61353 9.14292 6.65832 8.18677 8.08307 8.18677C8.95063 8.18677 9.63449 8.50341 10.0714 9.07326L9.12791 9.91541C8.86827 9.58612 8.55806 9.39614 8.1591 9.39614C7.53858 9.39614 7.12064 9.82673 7.12064 10.5043C7.12064 11.1818 7.53858 11.6124 8.1591 11.6124C8.55806 11.6124 8.86832 11.4224 9.12791 11.0931L10.0714 11.9352C9.63449 12.5051 8.95058 12.8217 8.08307 12.8217C6.65832 12.8219 5.61353 11.8658 5.61353 10.5043Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M15.2386 8.28809L13.3642 12.7207H11.8951L10.0208 8.28809H11.6291L12.6866 10.878L13.7695 8.28809H15.2386Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M13.7694 8.28809L12.6866 10.878L11.6291 8.28809H10.8528V10.2559L11.895 12.7207H13.3641L15.2384 8.28809H13.7694Z"
                          fill="#5A42E6"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_83_580">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="partInput">
                      <FileInput
                        value={file}
                        onChange={(e) => {
                          setFile(e);
                        }}
                        clearable
                        placeholder={t("cvPlace")}
                      />
                    </div>
                  </div>
                </div>
                <div className="parts textArea ">
                  <label>{t("jopTitle")}</label>
                  <div className="part">
                    <div className="partInput">
                      <Textarea
                        value={message}
                        placeholder={t("jopTitlePlace")}
                        autosize
                        minRows={5}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkPart">
                <Checkbox
                  checked={terms}
                  color="#5a42e6"
                  radius="xl"
                  className={termsErorr ? " chekError" : ""}
                  onChange={(e) => {
                    setTerms(e.currentTarget.checked);
                  }}
                />
                <p>
                  {t("agree")} <Link href="/conditions">{t("agree2")}</Link>
                </p>
              </div>
              {termsErorr && (
                <div className="errorInput">
                  <p>{termsErorr}</p>
                </div>
              )}
              <input
                type="submit"
                className={CompleteData ? "btn_page " : "btn_page notActive"}
                disabled={!CompleteData}
                value={t("send")}
                onClick={(e) => {
                  e.preventDefault(), handellogin();
                }}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
