"use client";
import React, { useEffect, useState } from "react";
import HeaderPage from "../../../../Components/HeaderPage";
import Captin from "../../../../Components/Captin";
import {
  Checkbox,
  Input,
  LoadingOverlay,
  PasswordInput,
  Select,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useTranslations } from "next-intl";
import { Link } from "../../../navigation";
import axios from "axios";
import { getHomePage } from "../../../../Components/GetApi";

function page({ params }) {
  const [FormOne, setFormOne] = useState(true);
  const t = useTranslations("captain");
  /*data*/
  const [dataColor, setDataColor] = useState([]);
  const [carType, setCarType] = useState([]);
  const [seatCounts, setSeatCounts] = useState([]);
  const [carClass, setcarClass] = useState([]);
  const [carName, setcarName] = useState([]);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [nameErorr, setNameErorr] = useState("");
  const [genderErorr, setGenderErorr] = useState("");
  const [emailErorr, setEmailErorr] = useState("");
  const [mobileErorr, setMobileErorr] = useState("");
  const [passwordErorr, setPasswordErorr] = useState("");
  const [confirmPasswordErorr, setConfirmPasswordErorr] = useState("");
  const [termsErorr, setTermsErorr] = useState("");
  const [Loading, setLoading] = useState(false);
  /*data 2*/
  const [GetdataColor, setGetDataColor] = useState("");
  const [GetcarType, setGetCarType] = useState("");
  const [GetseatCounts, setGetSeatCounts] = useState("");
  const [GetcarClass, setGetcarClass] = useState("");
  const [GetcarName, setGetcarName] = useState("");
  const [yearCar, setyearCar] = useState("");
  const [idNumCar, setIdNumCar] = useState("");
  const [serialNumCar, setSerialNumCar] = useState("");
  const [vehicleNumCar, setVehicleNumCar] = useState("");
  /*Error data 2*/
  const [ErrorGetdataColor, setErrorGetDataColor] = useState("");
  const [ErrorGetcarType, setErrorGetCarType] = useState("");
  const [ErrorGetseatCounts, setErrorGetSeatCounts] = useState("");
  const [ErrorGetcarClass, setErrorGetcarClass] = useState("");
  const [ErrorGetcarName, setErrorGetcarName] = useState("");
  const [ErroryearCar, setErroryearCar] = useState("");
  const [ErroridNumCar, setErrorIdNumCar] = useState("");
  const [ErrorserialNumCar, setErrorSerialNumCar] = useState("");
  const [ErrorvehicleNumCar, setErrorVehicleNumCar] = useState("");
  const [ErrorFile1, setErrorFile1] = useState("");
  const [ErrorFile2, setErrorFile2] = useState("");
  const [ErrorFile3, setErrorFile3] = useState("");
  const [ErrorFile4, setErrorFile4] = useState("");
  let CompleteData =
    name && gender && email && mobile && password && confirmPassword && terms
      ? true
      : false;
  let AllData =
    GetdataColor &&
    GetcarType &&
    GetseatCounts &&
    GetcarClass &&
    GetcarName &&
    yearCar &&
    idNumCar &&
    serialNumCar &&
    vehicleNumCar
      ? true
      : false;
  const [selectedFile1, setSelectedFile1] = useState([]);
  const [selectedFile2, setSelectedFile2] = useState([]);
  const [selectedFile3, setSelectedFile3] = useState([]);
  const [selectedFile4, setSelectedFile4] = useState([]);
  const handleHeaderInputChange = (e) => {
    const files = e.target.files; // Get the selected files
    for (let i = 0; i < files.length; i++) {
      const selectedFile1 = files[i];
      setSelectedFile1((oldArray) => [...oldArray, selectedFile1]);
    }
  };
  const handleHeaderInputChange2 = (e) => {
    const files = e.target.files; // Get the selected files
    for (let i = 0; i < files.length; i++) {
      const selectedFile2 = files[i];
      setSelectedFile2((oldArray) => [...oldArray, selectedFile2]);
    }
  };
  const handleHeaderInputChange3 = (e) => {
    const files = e.target.files; // Get the selected files
    for (let i = 0; i < files.length; i++) {
      const selectedFile3 = files[i];
      setSelectedFile3((oldArray) => [...oldArray, selectedFile3]);
    }
  };
  const handleHeaderInputChange4 = (e) => {
    const files = e.target.files; // Get the selected files
    for (let i = 0; i < files.length; i++) {
      const selectedFile4 = files[i];
      setSelectedFile4((oldArray) => [...oldArray, selectedFile4]);
    }
  };

  const handelFormOne = () => {
    setNameErorr("");
    setEmailErorr("");
    setMobileErorr("");
    setTermsErorr("");
    setGenderErorr("");
    setPasswordErorr("");
    setConfirmPasswordErorr("");
    setLoading(true);
    const po = axios
      .post(
        "https://dashboard.takhawe.com/api/captains",
        {
          name: name,
          email: email,
          mobile: mobile,
          gender: gender,
          password: password,
          password_confirmation: confirmPassword,
          terms_accepted: terms === true ? 1 : 0,
          form: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": params.locale,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
      
res.data.status === 200 ? setFormOne(false) :null
        
      })
      .catch((res) => {
        setLoading(false);
        console.log(res);

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
        setGenderErorr(
          res.response?.data?.errors?.gender
            ? res.response?.data?.errors?.gender[0]
            : null
        );

        password.length >= 8
          ? setConfirmPasswordErorr(
              res.response?.data?.errors?.password
                ? res.response?.data?.errors?.password[0]
                : null
            )
          : setPasswordErorr(
              res.response?.data?.errors?.password
                ? res.response?.data?.errors?.password[0]
                : null
            );
      });
  };

  useEffect(() => {
    FetchDataOFHomePage();
  }, []);

  const FetchDataOFHomePage = async () => {
    const AllData = await getHomePage();
    if (AllData.error) {
      console.log(AllData.error);
    }
    setDataColor([]);
    setSeatCounts([]);
    setCarType([]);
    setcarClass([]);
    setcarName([]);
    AllData.colors.map((itemColor, i) => {
      const item = {
        value: `${itemColor.id}`,
        label: itemColor.name[params.locale],
      };
      setDataColor((current) => [...current, item]);
    });
    AllData.seat_counts.map((itemSeat, i) => {
      const item = { value: `${itemSeat.id}`, label: itemSeat.count };
      setSeatCounts((current) => [...current, item]);
    });
    AllData.vehicle_types.map((itemType, i) => {
      const item = {
        value: `${itemType.id}`,
        label: itemType.name[params.locale],
      };
      setCarType((current) => [...current, item]);
    });
    AllData.vehicle_categories.map((itemCarClass, i) => {
      const item = {
        value: `${itemCarClass.id}`,
        label: itemCarClass.name[params.locale],
      };
      setcarClass((current) => [...current, item]);
    });
    AllData.vehicles.map((itemCarName, i) => {
      const item = {
        value: `${itemCarName.id}`,
        label: itemCarName.name[params.locale],
      };
      setcarName((current) => [...current, item]);
    });
  };
  const handelFormTwo = () => {
    const url = new URL("https://dashboard.takhawe.com/api/captains");
    const body = new FormData();
    setNameErorr("");
    setEmailErorr("");
    setMobileErorr("");
    setTermsErorr("");
    setGenderErorr("");
    setPasswordErorr("");
    setConfirmPasswordErorr("");
    setErrorGetDataColor("");
    setErrorGetCarType("");
    setErrorGetSeatCounts("");
    setErrorGetcarClass("");
    setErrorGetcarName("");
    setErroryearCar("");
    setErrorIdNumCar("");
    setErrorSerialNumCar("");
    setErrorVehicleNumCar("");
    setErrorFile1("");
    setErrorFile2("");
    setErrorFile3("");
    setErrorFile4("");
    setLoading(true);
    body.append("name", name);
    body.append("email", email);
    body.append("mobile", mobile);
    body.append("gender", 1);
    body.append("password", password);
    body.append("password_confirmation", confirmPassword);
    body.append("terms_accepted", 1);
    body.append("color_id", GetdataColor);
    body.append("vehicle_type_id", GetcarType);
    body.append("seat_count_id", GetseatCounts);
    body.append("form", 2);
    body.append("vehicle_category_id", GetcarClass);
    body.append("vehicle_id", GetcarName);
    body.append("production_year", yearCar);
    body.append("identity_number", idNumCar);
    body.append("serial_number", serialNumCar);
    body.append("vehicle_number", vehicleNumCar);

    if (selectedFile1.length > 0) {
      selectedFile1.map((item, i) => {
        body.append(`identity_types[${i}]`, item);
      });
    }
    if (selectedFile2.length > 0) {
      selectedFile2.map((item, i) => {
        body.append(`driving_licenses[${i}]`, item);
      });
    }
    if (selectedFile3.length > 0) {
      selectedFile3.map((item, i) => {
        body.append(`vehicle_registrations[${i}]`, item);
      });
    }
    if (selectedFile4.length > 0) {
      selectedFile4.map((item, i) => {
        body.append(`vehicle_images[${i}]`, item);
      });
    }
    const po = axios
      .post(url, body, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "Accept-Language": params.locale,
        },
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        setName("");
        setEmail("");
        setMobile("");
        setTerms("");
        setFormOne(false);
        notifications.show({
          dir: "rtl",
          icon: true,
          top: 20,
          autoClose: 15000,
          title: t("notifTitle"),
          message: t("notifMessage"),
        });
      })
      .catch((res) => {
        setLoading(false);
        console.log(res);

        setErrorGetDataColor(
          res.response.data?.errors?.color_id
            ? res.response.data.errors.color_id[0]
            : null
        );

        setErroryearCar(
          res.response?.data?.errors?.production_year
            ? res.response?.data?.errors?.production_year[0]
            : null
        );
        setErrorIdNumCar(
          res.response?.data?.errors?.identity_number
            ? res.response?.data?.errors?.identity_number[0]
            : null
        );
        setErrorGetSeatCounts(
          res.response?.data?.errors?.seat_count_id
            ? res.response?.data?.errors?.seat_count_id[0]
            : null
        );
        setErrorSerialNumCar(
          res.response?.data?.errors?.serial_number
            ? res.response?.data?.errors?.serial_number[0]
            : null
        );
        setErrorGetcarClass(
          res.response?.data?.errors?.vehicle_category_id
            ? res.response?.data?.errors?.vehicle_category_id[0]
            : null
        );
        setErrorGetcarName(
          res.response?.data?.errors?.vehicle_id
            ? res.response?.data?.errors?.vehicle_id[0]
            : null
        );
        setErrorVehicleNumCar(
          res.response?.data?.errors?.vehicle_number
            ? res.response?.data?.errors?.vehicle_number[0]
            : null
        );
        setErrorGetCarType(
          res.response?.data?.errors?.vehicle_type_id
            ? res.response?.data?.errors?.vehicle_type_id[0]
            : null
        );
        setErrorGetCarType(
          res.response?.data?.errors?.vehicle_type_id
            ? res.response?.data?.errors?.vehicle_type_id[0]
            : null
        );
      });
  };

  return (
    <>
      <HeaderPage
        title={t("title")}
        title2={t("dec")}
        img={"/images/captain.png"}
      />
      <Captin />
      <LoadingOverlay
        visible={Loading}
        loaderProps={{ color: "#5a42e6" }}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      {FormOne ? (
        <section className="investors">
          <div className="con">
            <div className="content">
              <h2> {t("info")}</h2>
              <form action="">
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
                          placeholder={t("namePlac")}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
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
                    <label>{t("gender")} </label>
                    <div className="part">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9453 15.5273V15.0273H17.4453H16.7363C16.6242 15.0273 16.5332 14.9363 16.5332 14.8242V10.5878C16.5332 10.185 16.6125 9.80075 16.7562 9.4491C17.5407 10.029 18.5113 10.373 19.5605 10.373C20.6098 10.373 21.5803 10.029 22.3649 9.44911C22.5086 9.80077 22.5879 10.185 22.5879 10.5878V14.8242C22.5879 14.9363 22.4969 15.0273 22.3848 15.0273H21.6758H21.1758V15.5273V20.4726C21.1758 20.5848 21.0848 20.6757 20.9727 20.6757H18.1484C18.0363 20.6757 17.9453 20.5848 17.9453 20.4726V15.5273Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M21.8819 5.64553C21.8819 6.92756 20.8426 7.96684 19.5606 7.96684C18.2785 7.96684 17.2393 6.92756 17.2393 5.64553C17.2393 4.36351 18.2785 3.32422 19.5606 3.32422C20.8426 3.32422 21.8819 4.36351 21.8819 5.64553Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M3.10385 9.44909C3.88843 10.029 4.85887 10.373 5.90818 10.373C6.95746 10.373 7.92797 10.029 8.71256 9.44913C8.85625 9.80078 8.93553 10.185 8.93553 10.5878V13.3623V13.3977L8.94052 13.4327L9.40228 16.6764L9.40229 16.6765C9.41059 16.7347 9.39319 16.7937 9.35467 16.8381L9.35461 16.8381C9.31602 16.8826 9.26004 16.9082 9.2012 16.9082H8.02346H7.52346V17.4082V20.4726C7.52346 20.5848 7.43251 20.6757 7.32034 20.6757H4.49612C4.38395 20.6757 4.293 20.5848 4.293 20.4726V17.4082V16.9082H3.793H2.61521C2.55637 16.9082 2.5004 16.8826 2.4618 16.8381C2.42329 16.7938 2.40585 16.7348 2.41413 16.6764C2.41413 16.6764 2.41414 16.6764 2.41414 16.6763L2.8759 13.4327L2.88089 13.3977V13.3623V10.5878C2.88089 10.185 2.96015 9.80074 3.10385 9.44909Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M8.22954 5.64553C8.22954 6.92756 7.19025 7.96684 5.90823 7.96684C4.6262 7.96684 3.58691 6.92756 3.58691 5.64553C3.58691 4.36351 4.6262 3.32422 5.90823 3.32422C7.19025 3.32422 8.22954 4.36351 8.22954 5.64553Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M12.7344 0C12.3461 0 12.0312 0.314812 12.0312 0.703125V23.2969C12.0312 23.6852 12.3461 24 12.7344 24C13.1227 24 13.4375 23.6852 13.4375 23.2969V0.703125C13.4375 0.314812 13.1227 0 12.7344 0Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                        />
                      </svg>

                      <div className="partInput">
                        <Select
                          placeholder={t("genderPlace")}
                          onChange={setGender}
                          value={gender}
                          error={genderErorr}
                          data={[
                            { value: "1", label: "Male" },
                            { value: "2", label: "Female" },
                          ]}
                        />
                      </div>
                    </div>
                    {genderErorr && (
                      <div className="errorInput">
                        <p>{genderErorr}</p>
                      </div>
                    )}
                  </div>
                  <div className="parts ">
                    <label>{t("email")} </label>
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
                  <div className="parts ">
                    <label>{t("pass")} </label>
                    <div className="part">
                      <svg
                        width="18"
                        height="24"
                        viewBox="0 0 18 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 9V9.5H15H15.75C16.714 9.5 17.5 10.2853 17.5 11.25V21.75C17.5 22.7147 16.714 23.5 15.75 23.5H2.25C1.286 23.5 0.5 22.7147 0.5 21.75V11.25C0.5 10.2853 1.286 9.5 2.25 9.5H3H3.5V9V6C3.5 2.96714 5.96714 0.5 9 0.5C12.0329 0.5 14.5 2.96714 14.5 6V9ZM13 9.5H13.5V9V6C13.5 3.51786 11.4821 1.5 9 1.5C6.51786 1.5 4.5 3.51786 4.5 6V9V9.5H5H13ZM10.5 19V16.989C11.1019 16.5361 11.5 15.8188 11.5 15C11.5 13.6209 10.3791 12.5 9 12.5C7.62086 12.5 6.5 13.6209 6.5 15C6.5 15.8188 6.89812 16.5361 7.5 16.989V19C7.5 19.8278 8.17053 20.5 9 20.5C9.82947 20.5 10.5 19.8278 10.5 19Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                      </svg>

                      <div className="partInput">
                        <PasswordInput
                          value={password}
                          error={passwordErorr}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          placeholder={t("passPlace")}
                        />
                      </div>
                    </div>
                    {passwordErorr && (
                      <div className="errorInput">
                        <p>{passwordErorr}</p>
                      </div>
                    )}
                  </div>
                  <div className="parts ">
                    <label>{t("pass2")} </label>
                    <div className="part">
                      <svg
                        width="18"
                        height="24"
                        viewBox="0 0 18 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 9V9.5H15H15.75C16.714 9.5 17.5 10.2853 17.5 11.25V21.75C17.5 22.7147 16.714 23.5 15.75 23.5H2.25C1.286 23.5 0.5 22.7147 0.5 21.75V11.25C0.5 10.2853 1.286 9.5 2.25 9.5H3H3.5V9V6C3.5 2.96714 5.96714 0.5 9 0.5C12.0329 0.5 14.5 2.96714 14.5 6V9ZM13 9.5H13.5V9V6C13.5 3.51786 11.4821 1.5 9 1.5C6.51786 1.5 4.5 3.51786 4.5 6V9V9.5H5H13ZM10.5 19V16.989C11.1019 16.5361 11.5 15.8188 11.5 15C11.5 13.6209 10.3791 12.5 9 12.5C7.62086 12.5 6.5 13.6209 6.5 15C6.5 15.8188 6.89812 16.5361 7.5 16.989V19C7.5 19.8278 8.17053 20.5 9 20.5C9.82947 20.5 10.5 19.8278 10.5 19Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                      </svg>

                      <div className="partInput">
                        <PasswordInput
                          value={confirmPassword}
                          error={confirmPasswordErorr}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                          }}
                          placeholder={t("pass2Place")}
                        />
                      </div>
                    </div>
                    {confirmPasswordErorr && (
                      <div className="errorInput">
                        <p>{confirmPasswordErorr}</p>
                      </div>
                    )}
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
                  value={t("next")}
                  onClick={(e) => {
                    e.preventDefault();
                    handelFormOne();
                  }}
                />
              </form>
            </div>
          </div>
        </section>
      ) : (
        <section className="investors">
          <div className="con">
            <div className="content">
              <h2> {t("info")}</h2>
              <form action="">
                <div className="formInput   ">
                  <div className="parts  ">
                    <label>{t("identityTitle")} </label>
                    <div className="part">
                      <svg
                        width="25"
                        height="18"
                        viewBox="0 0 25 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 9.5C9.65414 9.5 11 8.15414 11 6.5C11 4.84586 9.65414 3.5 8 3.5C6.34586 3.5 5 4.84586 5 6.5C5 8.15414 6.34586 9.5 8 9.5ZM8 9.5H6.25C4.45686 9.5 3 10.9569 3 12.75V13.25C3 13.9401 3.55986 14.5 4.25 14.5H11.75C12.4401 14.5 13 13.9401 13 13.25V12.75C13 10.9569 11.5431 9.5 9.75 9.5H8ZM3.25 0.5H21.75C22.9909 0.5 24 1.50914 24 2.75V15.25C24 16.4909 22.9909 17.5 21.75 17.5H3.25C2.00914 17.5 1 16.4909 1 15.25V2.75C1 1.50914 2.00914 0.5 3.25 0.5ZM15.25 14.5H20.75C21.4401 14.5 22 13.9401 22 13.25C22 12.5599 21.4401 12 20.75 12H15.25C14.5599 12 14 12.5599 14 13.25C14 13.9401 14.5599 14.5 15.25 14.5ZM15.25 10.5H20.75C21.4401 10.5 22 9.94014 22 9.25C22 8.55986 21.4401 8 20.75 8H15.25C14.5599 8 14 8.55986 14 9.25C14 9.94014 14.5599 10.5 15.25 10.5ZM15.25 6.5H20.75C21.4401 6.5 22 5.94014 22 5.25C22 4.55986 21.4401 4 20.75 4H15.25C14.5599 4 14 4.55986 14 5.25C14 5.94014 14.5599 6.5 15.25 6.5Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                      </svg>

                      <div className="partInput">
                        <div className="fileInput">
                          <input
                            type="file"
                            onChange={handleHeaderInputChange}
                            multiple
                          />
                          <p>{t("identityDec")}</p>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 23.0002C24 23.8287 23.3284 24.5002 22.5 24.5002H1.5C0.671578 24.5002 0 23.8287 0 23.0002C0 22.1718 0.671578 21.5002 1.5 21.5002H22.5C23.3284 21.5002 24 22.1718 24 23.0002ZM6.68545 8.81483C7.06931 8.81483 7.45322 8.66839 7.74609 8.37547L10.5 5.62156V17.1878C10.5 18.0162 11.1716 18.6878 12 18.6878C12.8284 18.6878 13.5 18.0162 13.5 17.1878V5.62156L16.2539 8.37547C16.8397 8.96126 17.7894 8.96126 18.3752 8.37547C18.961 7.78967 18.961 6.83994 18.3752 6.25414L13.0606 0.939592C12.4748 0.353795 11.5251 0.353795 10.9393 0.939592L5.62477 6.25414C5.03897 6.83994 5.03897 7.78967 5.62477 8.37547C5.91769 8.66839 6.30155 8.81483 6.68545 8.81483Z"
                              fill="#5A42E6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="partImgFile">
                      {selectedFile1 &&
                        selectedFile1.map((file, i) => {
                          return (
                            <div className="partImg">
                              <p>{file.name}</p>
                              <svg
                                onClick={() => {
                                  setSelectedFile1(
                                    selectedFile1.filter(
                                      (item) => item !== file
                                    )
                                  );
                                }}
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.95842 6.99993L13.5184 2.43993C14.0593 1.89901 14.0593 1.02209 13.5184 0.481162C12.9775 -0.0597608 12.1006 -0.0597608 11.5597 0.481162L6.99966 5.04116L2.43966 0.481162C1.89873 -0.0597608 1.02181 -0.0597608 0.480888 0.481162C-0.0600354 1.02209 -0.0600354 1.89901 0.480888 2.43993L5.04089 6.99993L0.480888 11.5599C-0.0600354 12.1009 -0.0600354 12.9778 0.480888 13.5187C0.750426 13.7882 1.10489 13.9249 1.45935 13.9249C1.81381 13.9249 2.16827 13.7901 2.43781 13.5187L6.99781 8.9587L11.5578 13.5187C11.8273 13.7882 12.1818 13.9249 12.5363 13.9249C12.8907 13.9249 13.2452 13.7901 13.5147 13.5187C14.0557 12.9778 14.0557 12.1009 13.5147 11.5599L8.95473 6.99993H8.95842Z"
                                  fill="#5A42E6"
                                />
                              </svg>
                            </div>
                          );
                        })}
                    </div>
                    {ErrorFile1 && (
                      <div className="errorInput">
                        <img src="/images/note.png" alt="error" />
                        <p>{ErrorFile1} </p>
                      </div>
                    )}
                  </div>
                  <div className="parts ">
                    <label>{t("numIdentityTitle")} </label>
                    <div className="part">
                      <svg
                        width="25"
                        height="18"
                        viewBox="0 0 25 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 9.5C9.65414 9.5 11 8.15414 11 6.5C11 4.84586 9.65414 3.5 8 3.5C6.34586 3.5 5 4.84586 5 6.5C5 8.15414 6.34586 9.5 8 9.5ZM8 9.5H6.25C4.45686 9.5 3 10.9569 3 12.75V13.25C3 13.9401 3.55986 14.5 4.25 14.5H11.75C12.4401 14.5 13 13.9401 13 13.25V12.75C13 10.9569 11.5431 9.5 9.75 9.5H8ZM3.25 0.5H21.75C22.9909 0.5 24 1.50914 24 2.75V15.25C24 16.4909 22.9909 17.5 21.75 17.5H3.25C2.00914 17.5 1 16.4909 1 15.25V2.75C1 1.50914 2.00914 0.5 3.25 0.5ZM15.25 14.5H20.75C21.4401 14.5 22 13.9401 22 13.25C22 12.5599 21.4401 12 20.75 12H15.25C14.5599 12 14 12.5599 14 13.25C14 13.9401 14.5599 14.5 15.25 14.5ZM15.25 10.5H20.75C21.4401 10.5 22 9.94014 22 9.25C22 8.55986 21.4401 8 20.75 8H15.25C14.5599 8 14 8.55986 14 9.25C14 9.94014 14.5599 10.5 15.25 10.5ZM15.25 6.5H20.75C21.4401 6.5 22 5.94014 22 5.25C22 4.55986 21.4401 4 20.75 4H15.25C14.5599 4 14 4.55986 14 5.25C14 5.94014 14.5599 6.5 15.25 6.5Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                      </svg>

                      <div className="partInput">
                        <Input
                          onChange={(e) => {
                            setIdNumCar(e.target.value);
                          }}
                          placeholder={t("numIdentityDec")}
                        />
                      </div>
                    </div>
                    {ErroridNumCar && (
                      <div className="errorInput">
                        <p>{ErroridNumCar}</p>
                      </div>
                    )}
                  </div>
                  <div className="parts  ">
                    <label>{t("licenseTitle")} </label>
                    <div className="part">
                      <svg
                        width="32"
                        height="24"
                        viewBox="0 0 32 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.55385 5.21423H23.3753C24.7245 5.21423 25.8217 6.31145 25.8217 7.66066V21.0535C25.8217 22.4027 24.7245 23.4999 23.3753 23.4999H3.55385C2.20464 23.4999 1.10742 22.4027 1.10742 21.0535V7.66066C1.10742 6.31145 2.20464 5.21423 3.55385 5.21423ZM11.8217 11.6785C11.8217 9.92595 10.3957 8.49995 8.64314 8.49995C6.89057 8.49995 5.46456 9.92595 5.46456 11.6785C5.46456 13.4311 6.89057 14.8571 8.64314 14.8571C10.3957 14.8571 11.8217 13.4311 11.8217 11.6785ZM12.661 20.2142C13.3807 20.2142 13.9646 19.6304 13.9646 18.9107V18.3749C13.9646 16.4734 12.4196 14.9285 10.5181 14.9285H6.76814C4.86664 14.9285 3.32171 16.4734 3.32171 18.3749V18.9107C3.32171 19.6304 3.90557 20.2142 4.62528 20.2142H12.661ZM16.411 20.2142H22.3039C23.0236 20.2142 23.6074 19.6304 23.6074 18.9107C23.6074 18.1909 23.0236 17.6071 22.3039 17.6071H16.411C15.6913 17.6071 15.1074 18.1909 15.1074 18.9107C15.1074 19.6304 15.6913 20.2142 16.411 20.2142ZM16.411 15.9285H22.3039C23.0236 15.9285 23.6074 15.3447 23.6074 14.6249C23.6074 13.9052 23.0236 13.3214 22.3039 13.3214H16.411C15.6913 13.3214 15.1074 13.9052 15.1074 14.6249C15.1074 15.3447 15.6913 15.9285 16.411 15.9285ZM16.411 11.6428H22.3039C23.0236 11.6428 23.6074 11.0589 23.6074 10.3392C23.6074 9.61952 23.0236 9.03566 22.3039 9.03566H16.411C15.6913 9.03566 15.1074 9.61952 15.1074 10.3392C15.1074 11.0589 15.6913 11.6428 16.411 11.6428Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <circle
                          cx="27.2846"
                          cy="4.71429"
                          r="4.21429"
                          fill="white"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M27.2002 0.836792C25.7658 0.837231 24.5218 1.65182 23.9051 2.84356C24.0774 2.76718 24.2522 2.69706 24.429 2.63327C25.046 1.73307 26.0775 1.17484 27.2013 1.17865M27.2002 0.836792L30.4953 2.84249C30.3237 2.76652 30.1498 2.69676 29.9738 2.63327C29.3568 1.73307 28.3253 1.17484 27.2013 1.17865M27.2002 0.836792L27.2013 1.17865M27.2002 0.836792L27.2013 1.17865M30.1294 3.77428L30.8852 4.11447C30.8921 4.1735 30.8977 4.23296 30.9018 4.29281H30.5565C29.7204 4.29281 28.9288 4.83241 28.3753 5.47518C27.8148 6.12596 27.3946 6.99943 27.3946 7.84118V8.25023C27.3306 8.25352 27.2662 8.25518 27.2013 8.25518C27.1365 8.25518 27.0721 8.25352 27.0082 8.25024V7.84118C27.0082 6.99943 26.5879 6.12596 26.0275 5.47519C25.474 4.83242 24.6824 4.29281 23.8464 4.29281H23.5007C23.5047 4.23305 23.5102 4.17367 23.517 4.11472L24.2733 3.77428C25.192 3.36079 26.1894 3.15145 27.1968 3.16058L27.1968 3.16066L27.2059 3.16058C28.2133 3.15145 29.2108 3.36079 30.1294 3.77428ZM23.8782 2.89645L24.0681 3.31834L23.8782 2.89645ZM26.07 4.54595C26.07 5.17088 26.5766 5.67733 27.2013 5.67733C27.8262 5.67733 28.3327 5.17085 28.3327 4.54595C28.3327 3.92117 27.8263 3.41457 27.2013 3.41457C26.5765 3.41457 26.07 3.92113 26.07 4.54595Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                      </svg>

                      <div className="partInput">
                        <div className="fileInput">
                          <input
                            type="file"
                            onChange={handleHeaderInputChange2}
                          />
                          <p> {t("licenseDec")} </p>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 23.0002C24 23.8287 23.3284 24.5002 22.5 24.5002H1.5C0.671578 24.5002 0 23.8287 0 23.0002C0 22.1718 0.671578 21.5002 1.5 21.5002H22.5C23.3284 21.5002 24 22.1718 24 23.0002ZM6.68545 8.81483C7.06931 8.81483 7.45322 8.66839 7.74609 8.37547L10.5 5.62156V17.1878C10.5 18.0162 11.1716 18.6878 12 18.6878C12.8284 18.6878 13.5 18.0162 13.5 17.1878V5.62156L16.2539 8.37547C16.8397 8.96126 17.7894 8.96126 18.3752 8.37547C18.961 7.78967 18.961 6.83994 18.3752 6.25414L13.0606 0.939592C12.4748 0.353795 11.5251 0.353795 10.9393 0.939592L5.62477 6.25414C5.03897 6.83994 5.03897 7.78967 5.62477 8.37547C5.91769 8.66839 6.30155 8.81483 6.68545 8.81483Z"
                              fill="#5A42E6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="partImgFile">
                      {selectedFile2 &&
                        selectedFile2.map((file, i) => {
                          return (
                            <div className="partImg">
                              <p>{file.name}</p>
                              <svg
                                onClick={() => {
                                  setSelectedFile2(
                                    selectedFile2.filter(
                                      (item) => item !== file
                                    )
                                  );
                                }}
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.95842 6.99993L13.5184 2.43993C14.0593 1.89901 14.0593 1.02209 13.5184 0.481162C12.9775 -0.0597608 12.1006 -0.0597608 11.5597 0.481162L6.99966 5.04116L2.43966 0.481162C1.89873 -0.0597608 1.02181 -0.0597608 0.480888 0.481162C-0.0600354 1.02209 -0.0600354 1.89901 0.480888 2.43993L5.04089 6.99993L0.480888 11.5599C-0.0600354 12.1009 -0.0600354 12.9778 0.480888 13.5187C0.750426 13.7882 1.10489 13.9249 1.45935 13.9249C1.81381 13.9249 2.16827 13.7901 2.43781 13.5187L6.99781 8.9587L11.5578 13.5187C11.8273 13.7882 12.1818 13.9249 12.5363 13.9249C12.8907 13.9249 13.2452 13.7901 13.5147 13.5187C14.0557 12.9778 14.0557 12.1009 13.5147 11.5599L8.95473 6.99993H8.95842Z"
                                  fill="#5A42E6"
                                />
                              </svg>
                            </div>
                          );
                        })}
                    </div>
                    {ErrorFile2 && (
                      <div className="errorInput">
                        <img src="/images/note.png" alt="error" />
                        <p>{ErrorFile2} </p>
                      </div>
                    )}
                  </div>
                  <div className="parts  ">
                    <label>{t("cartTitle")} </label>
                    <div className="part">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.07143 22.7857H7.4C7.49472 22.7857 7.58556 22.8233 7.65254 22.8903C7.71952 22.9572 7.75714 23.0481 7.75714 23.1428C7.75714 23.2375 7.71952 23.3284 7.65254 23.3953C7.58556 23.4623 7.49472 23.5 7.4 23.5H3.07143C2.52205 23.5 1.99518 23.2817 1.60671 22.8932C1.21824 22.5048 1 21.9779 1 21.4285V17.0571C1 16.9624 1.03763 16.8715 1.1046 16.8046C1.17158 16.7376 1.26242 16.7 1.35714 16.7C1.45186 16.7 1.5427 16.7376 1.60968 16.8046C1.67666 16.8715 1.71429 16.9624 1.71429 17.0571V21.4285C1.71429 21.7885 1.85727 22.1337 2.11178 22.3882C2.3663 22.6427 2.71149 22.7857 3.07143 22.7857Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M23.3896 16.8046C23.4566 16.7376 23.5475 16.7 23.6422 16.7C23.7369 16.7 23.8277 16.7376 23.8947 16.8046C23.9617 16.8715 23.9993 16.9624 23.9993 17.0571V21.4285C23.9993 21.9779 23.7811 22.5048 23.3926 22.8932C23.0042 23.2817 22.4773 23.5 21.9279 23.5H17.5993C17.5046 23.5 17.4138 23.4623 17.3468 23.3953C17.2798 23.3284 17.2422 23.2375 17.2422 23.1428C17.2422 23.0481 17.2798 22.9572 17.3468 22.8903C17.4138 22.8233 17.5046 22.7857 17.5993 22.7857H21.9279C22.2878 22.7857 22.633 22.6427 22.8875 22.3882C23.1421 22.1337 23.285 21.7885 23.285 21.4285V17.0571C23.285 16.9624 23.3227 16.8715 23.3896 16.8046Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M1.60968 7.10968C1.5427 7.17666 1.45186 7.21429 1.35714 7.21429C1.26242 7.21429 1.17158 7.17666 1.1046 7.10968C1.03763 7.0427 1 6.95186 1 6.85714V2.57143C1 2.02205 1.21824 1.49518 1.60671 1.10671C1.99518 0.718239 2.52205 0.5 3.07143 0.5H7.4C7.49472 0.5 7.58556 0.537627 7.65254 0.604605C7.71952 0.671582 7.75714 0.762423 7.75714 0.857143C7.75714 0.951863 7.71952 1.0427 7.65254 1.10968C7.58556 1.17666 7.49472 1.21429 7.4 1.21429H3.07143C2.71149 1.21429 2.3663 1.35727 2.11178 1.61178C1.85727 1.8663 1.71429 2.21149 1.71429 2.57143V6.85714C1.71429 6.95186 1.67666 7.0427 1.60968 7.10968Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M17.5993 0.5H21.9279C22.4773 0.5 23.0042 0.718239 23.3926 1.10671C23.7811 1.49518 23.9993 2.02205 23.9993 2.57143V6.85714C23.9993 6.95186 23.9617 7.0427 23.8947 7.10968C23.8277 7.17666 23.7369 7.21429 23.6422 7.21429C23.5475 7.21429 23.4566 7.17666 23.3896 7.10968C23.3227 7.0427 23.285 6.95186 23.285 6.85714V2.57143C23.285 2.21149 23.1421 1.8663 22.8875 1.61178C22.633 1.35727 22.2878 1.21429 21.9279 1.21429H17.5993C17.5046 1.21429 17.4138 1.17666 17.3468 1.10968C17.2798 1.0427 17.2422 0.951864 17.2422 0.857143C17.2422 0.762422 17.2798 0.671581 17.3468 0.604605C17.4138 0.537628 17.5046 0.5 17.5993 0.5Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M6.27669 6.07861H18.61C19.4833 6.07861 20.1934 6.78868 20.1934 7.66195V15.9953C20.1934 16.8685 19.4833 17.5786 18.61 17.5786H6.27669C5.40343 17.5786 4.69336 16.8685 4.69336 15.9953V7.66195C4.69336 6.78868 5.40343 6.07861 6.27669 6.07861ZM11.36 10.1619C11.36 9.10521 10.5001 8.24528 9.44336 8.24528C8.38662 8.24528 7.52669 9.10521 7.52669 10.1619C7.52669 11.2187 8.38662 12.0786 9.44336 12.0786C10.5001 12.0786 11.36 11.2187 11.36 10.1619ZM11.9434 15.4119C12.3574 15.4119 12.6934 15.076 12.6934 14.6619V14.3286C12.6934 13.1792 11.7594 12.2453 10.61 12.2453H8.27669C7.12729 12.2453 6.19336 13.1792 6.19336 14.3286V14.6619C6.19336 15.076 6.52929 15.4119 6.94336 15.4119H11.9434ZM14.2767 15.4119H17.9434C18.3574 15.4119 18.6934 15.076 18.6934 14.6619C18.6934 14.2479 18.3574 13.9119 17.9434 13.9119H14.2767C13.8626 13.9119 13.5267 14.2479 13.5267 14.6619C13.5267 15.076 13.8626 15.4119 14.2767 15.4119ZM14.2767 12.7453H17.9434C18.3574 12.7453 18.6934 12.4094 18.6934 11.9953C18.6934 11.5812 18.3574 11.2453 17.9434 11.2453H14.2767C13.8626 11.2453 13.5267 11.5812 13.5267 11.9953C13.5267 12.4094 13.8626 12.7453 14.2767 12.7453ZM14.2767 10.0786H17.9434C18.3574 10.0786 18.6934 9.74268 18.6934 9.32861C18.6934 8.91454 18.3574 8.57861 17.9434 8.57861H14.2767C13.8626 8.57861 13.5267 8.91454 13.5267 9.32861C13.5267 9.74268 13.8626 10.0786 14.2767 10.0786Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                          strokeWidth="0.5"
                        />
                      </svg>

                      <div className="partInput">
                        <div className="fileInput">
                          <input
                            type="file"
                            onChange={handleHeaderInputChange3}
                          />
                          <p> {t("cartDec")} </p>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 23.0002C24 23.8287 23.3284 24.5002 22.5 24.5002H1.5C0.671578 24.5002 0 23.8287 0 23.0002C0 22.1718 0.671578 21.5002 1.5 21.5002H22.5C23.3284 21.5002 24 22.1718 24 23.0002ZM6.68545 8.81483C7.06931 8.81483 7.45322 8.66839 7.74609 8.37547L10.5 5.62156V17.1878C10.5 18.0162 11.1716 18.6878 12 18.6878C12.8284 18.6878 13.5 18.0162 13.5 17.1878V5.62156L16.2539 8.37547C16.8397 8.96126 17.7894 8.96126 18.3752 8.37547C18.961 7.78967 18.961 6.83994 18.3752 6.25414L13.0606 0.939592C12.4748 0.353795 11.5251 0.353795 10.9393 0.939592L5.62477 6.25414C5.03897 6.83994 5.03897 7.78967 5.62477 8.37547C5.91769 8.66839 6.30155 8.81483 6.68545 8.81483Z"
                              fill="#5A42E6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="partImgFile">
                      {selectedFile3 &&
                        selectedFile3.map((file, i) => {
                          return (
                            <div className="partImg">
                              <p>{file.name}</p>
                              <svg
                                onClick={() => {
                                  setSelectedFile3(
                                    selectedFile3.filter(
                                      (item) => item !== file
                                    )
                                  );
                                }}
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.95842 6.99993L13.5184 2.43993C14.0593 1.89901 14.0593 1.02209 13.5184 0.481162C12.9775 -0.0597608 12.1006 -0.0597608 11.5597 0.481162L6.99966 5.04116L2.43966 0.481162C1.89873 -0.0597608 1.02181 -0.0597608 0.480888 0.481162C-0.0600354 1.02209 -0.0600354 1.89901 0.480888 2.43993L5.04089 6.99993L0.480888 11.5599C-0.0600354 12.1009 -0.0600354 12.9778 0.480888 13.5187C0.750426 13.7882 1.10489 13.9249 1.45935 13.9249C1.81381 13.9249 2.16827 13.7901 2.43781 13.5187L6.99781 8.9587L11.5578 13.5187C11.8273 13.7882 12.1818 13.9249 12.5363 13.9249C12.8907 13.9249 13.2452 13.7901 13.5147 13.5187C14.0557 12.9778 14.0557 12.1009 13.5147 11.5599L8.95473 6.99993H8.95842Z"
                                  fill="#5A42E6"
                                />
                              </svg>
                            </div>
                          );
                        })}
                    </div>
                    {ErrorFile3 && (
                      <div className="errorInput">
                        <img src="/images/note.png" alt="error" />
                        <p>{ErrorFile3} </p>
                      </div>
                    )}
                  </div>

                  <div className="parts ">
                    <label>{t("serialTitle")} </label>
                    <div className="part">
                      <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_245_136)">
                          <path
                            d="M2.75 0.25H21.25C22.6289 0.25 23.75 1.37107 23.75 2.75V15.25C23.75 16.6289 22.6289 17.75 21.25 17.75H2.75C1.37107 17.75 0.25 16.6289 0.25 15.25V2.75C0.25 1.37107 1.37107 0.25 2.75 0.25ZM10.25 6.5C10.25 4.98393 9.01607 3.75 7.5 3.75C5.98393 3.75 4.75 4.98393 4.75 6.5C4.75 8.01607 5.98393 9.25 7.5 9.25C9.01607 9.25 10.25 8.01607 10.25 6.5ZM11.25 14.25C11.8021 14.25 12.25 13.8021 12.25 13.25V12.75C12.25 11.0949 10.9051 9.75 9.25 9.75H5.75C4.09493 9.75 2.75 11.0949 2.75 12.75V13.25C2.75 13.8021 3.19793 14.25 3.75 14.25H11.25ZM14.75 14.25H20.25C20.8021 14.25 21.25 13.8021 21.25 13.25C21.25 12.6979 20.8021 12.25 20.25 12.25H14.75C14.1979 12.25 13.75 12.6979 13.75 13.25C13.75 13.8021 14.1979 14.25 14.75 14.25ZM14.75 10.25H20.25C20.8021 10.25 21.25 9.80207 21.25 9.25C21.25 8.69793 20.8021 8.25 20.25 8.25H14.75C14.1979 8.25 13.75 8.69793 13.75 9.25C13.75 9.80207 14.1979 10.25 14.75 10.25ZM14.75 6.25H20.25C20.8021 6.25 21.25 5.80207 21.25 5.25C21.25 4.69793 20.8021 4.25 20.25 4.25H14.75C14.1979 4.25 13.75 4.69793 13.75 5.25C13.75 5.80207 14.1979 6.25 14.75 6.25Z"
                            fill="#C5BDF6"
                            stroke="#5A42E6"
                            strokeWidth="0.5"
                          />
                          <rect
                            x="2"
                            y="3"
                            width="11"
                            height="12"
                            fill="#C5BDF6"
                          />
                          <rect
                            x="12"
                            y="12"
                            width="10"
                            height="3"
                            fill="#C5BDF6"
                          />
                          <ellipse
                            cx="6.80039"
                            cy="8.93845"
                            rx="3.4"
                            ry="3.4"
                            fill="white"
                          />
                          <path
                            d="M6.7988 5.93848C5.14196 5.93848 3.79883 7.28161 3.79883 8.93845C3.79883 10.5953 5.14196 11.9385 6.7988 11.9385C8.45565 11.9385 9.79883 10.5953 9.79883 8.93845C9.79697 7.28237 8.45493 5.94034 6.7988 5.93848ZM6.7988 6.53849C7.78724 6.53514 8.67537 7.1417 9.03199 8.0635C8.33024 7.74764 7.56834 7.58774 6.7988 7.59472C6.02932 7.58774 5.26742 7.74764 4.56567 8.0635C4.92229 7.1417 5.81042 6.53514 6.7988 6.53849ZM6.30475 11.287C5.26034 11.064 4.48783 10.1794 4.40763 9.11439C5.30351 9.11439 6.30475 10.3072 6.30475 11.287ZM6.7988 9.38845C6.55029 9.38845 6.3488 9.18701 6.3488 8.93845C6.3488 8.68994 6.55029 8.48845 6.7988 8.48845C7.04737 8.48845 7.2488 8.68994 7.2488 8.93845C7.2488 9.18701 7.04737 9.38845 6.7988 9.38845ZM7.29291 11.287C7.29291 10.3072 8.29415 9.11439 9.19008 9.11439C9.10983 10.1794 8.33733 11.064 7.29291 11.287Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M14.2617 12.5149C14.2617 12.4856 14.3496 12.4615 14.457 12.4615H15.2598C15.3672 12.4615 15.4551 12.4856 15.4551 12.5149V14.8082C15.4551 14.8375 15.3672 14.8615 15.2598 14.8615H14.457C14.3496 14.8615 14.2617 14.8375 14.2617 14.8082V12.5149Z"
                            fill="white"
                          />
                          <path
                            d="M14.7617 14.3615V12.9615H14.9551V14.3615H14.7617Z"
                            fill="white"
                            stroke="#5A42E6"
                          />
                          <path
                            d="M16.9551 12.5149C16.9551 12.4856 17.043 12.4615 17.1504 12.4615H17.464C17.5714 12.4615 17.6593 12.4856 17.6593 12.5149V14.8082C17.6593 14.8375 17.5714 14.8615 17.464 14.8615H17.1504C17.043 14.8615 16.9551 14.8375 16.9551 14.8082V12.5149Z"
                            fill="white"
                          />
                          <mask id="path-9-inside-1_245_136" fill="white">
                            <path d="M16.9551 12.5149C16.9551 12.4856 17.043 12.4615 17.1504 12.4615H17.464C17.5714 12.4615 17.6593 12.4856 17.6593 12.5149V14.8082C17.6593 14.8375 17.5714 14.8615 17.464 14.8615H17.1504C17.043 14.8615 16.9551 14.8375 16.9551 14.8082V12.5149Z" />
                          </mask>
                          <path
                            d="M16.9551 12.5149C16.9551 12.4856 17.043 12.4615 17.1504 12.4615H17.464C17.5714 12.4615 17.6593 12.4856 17.6593 12.5149V14.8082C17.6593 14.8375 17.5714 14.8615 17.464 14.8615H17.1504C17.043 14.8615 16.9551 14.8375 16.9551 14.8082V12.5149Z"
                            fill="white"
                          />
                          <path
                            d="M17.9551 12.5149C17.9551 13.0395 17.5764 13.2935 17.5116 13.3352C17.4002 13.4068 17.305 13.4339 17.2761 13.4418C17.204 13.4615 17.1602 13.4615 17.1504 13.4615V11.4615C17.0331 11.4615 16.8917 11.4736 16.7488 11.5126C16.6845 11.5302 16.5606 11.5688 16.4294 11.6532C16.3447 11.7077 15.9551 11.9757 15.9551 12.5149H17.9551ZM17.1504 13.4615H17.464V11.4615H17.1504V13.4615ZM17.464 13.4615C17.4542 13.4615 17.4104 13.4615 17.3383 13.4418C17.3094 13.4339 17.2142 13.4068 17.1029 13.3352C17.038 13.2935 16.6593 13.0395 16.6593 12.5149H18.6593C18.6593 11.9757 18.2697 11.7077 18.185 11.6532C18.0538 11.5688 17.9299 11.5302 17.8656 11.5126C17.7227 11.4736 17.5813 11.4615 17.464 11.4615V13.4615ZM16.6593 12.5149V14.8082H18.6593V12.5149H16.6593ZM16.6593 14.8082C16.6593 14.2836 17.038 14.0296 17.1029 13.9879C17.2142 13.9162 17.3094 13.8891 17.3383 13.8812C17.4104 13.8615 17.4542 13.8615 17.464 13.8615V15.8615C17.5813 15.8615 17.7227 15.8495 17.8656 15.8105C17.9299 15.7929 18.0538 15.7543 18.185 15.6699C18.2697 15.6154 18.6593 15.3474 18.6593 14.8082H16.6593ZM17.464 13.8615H17.1504V15.8615H17.464V13.8615ZM17.1504 13.8615C17.1602 13.8615 17.204 13.8615 17.2761 13.8812C17.305 13.8891 17.4002 13.9162 17.5116 13.9879C17.5764 14.0296 17.9551 14.2836 17.9551 14.8082H15.9551C15.9551 15.3474 16.3447 15.6154 16.4294 15.6699C16.5606 15.7543 16.6845 15.7929 16.7488 15.8105C16.8917 15.8495 17.0331 15.8615 17.1504 15.8615V13.8615ZM17.9551 14.8082V12.5149H15.9551V14.8082H17.9551Z"
                            fill="#5A42E6"
                            mask="url(#path-9-inside-1_245_136)"
                          />
                          <path
                            d="M19.1602 12.5149C19.1602 12.4856 19.248 12.4615 19.3555 12.4615H20.4434C20.5508 12.4615 20.6387 12.4856 20.6387 12.5149V14.8082C20.6387 14.8375 20.5508 14.8615 20.4434 14.8615H19.3555C19.248 14.8615 19.1602 14.8375 19.1602 14.8082V12.5149Z"
                            fill="white"
                          />
                          <path
                            d="M19.6602 14.3615V12.9615H20.1387V14.3615H19.6602Z"
                            fill="white"
                            stroke="#5A42E6"
                          />
                          <path
                            d="M5.15976 2.90553L4.92988 2.47353H4.79411V2.90553H4.60742V1.81164H5.02708C5.23845 1.81164 5.36959 1.95821 5.36959 2.14336C5.36959 2.29919 5.27548 2.41799 5.12274 2.45501L5.36959 2.90553H5.15976ZM4.79411 2.30999H4.99314C5.10731 2.30999 5.18136 2.24364 5.18136 2.14336C5.18136 2.04153 5.10731 1.97519 4.99314 1.97519H4.79411V2.30999Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M5.65112 2.4473H6.01986C6.01677 2.35936 5.95814 2.28067 5.83472 2.28067C5.72209 2.28067 5.65729 2.36707 5.65112 2.4473ZM6.03992 2.64324L6.19112 2.69107C6.151 2.82221 6.0322 2.92867 5.85169 2.92867C5.64803 2.92867 5.46752 2.78056 5.46752 2.52599C5.46752 2.28839 5.6434 2.13101 5.83317 2.13101C6.0646 2.13101 6.20037 2.28376 6.20037 2.52136C6.20037 2.55067 6.19729 2.57536 6.19574 2.57844H5.64649C5.65112 2.69261 5.7406 2.77439 5.85169 2.77439C5.95969 2.77439 6.01523 2.7173 6.03992 2.64324Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M6.3174 2.94719L6.48249 2.90399C6.49483 2.99656 6.56734 3.06599 6.67072 3.06599C6.81266 3.06599 6.88363 2.99347 6.88363 2.84073V2.76204C6.85123 2.82067 6.77563 2.87159 6.66609 2.87159C6.46552 2.87159 6.31894 2.7173 6.31894 2.50593C6.31894 2.30536 6.45934 2.14027 6.66609 2.14027C6.78334 2.14027 6.85586 2.1881 6.88826 2.24981V2.15416H7.06106V2.83456C7.06106 3.03513 6.95769 3.22181 6.67534 3.22181C6.47632 3.22181 6.33746 3.09839 6.3174 2.94719ZM6.6954 2.71884C6.80957 2.71884 6.88826 2.63553 6.88826 2.50593C6.88826 2.37787 6.80649 2.29456 6.6954 2.29456C6.58123 2.29456 6.49946 2.37787 6.49946 2.50593C6.49946 2.63707 6.57814 2.71884 6.6954 2.71884Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M7.45737 2.90553H7.27994V2.15416H7.45737V2.90553ZM7.25217 1.89033C7.25217 1.82553 7.30462 1.77307 7.36788 1.77307C7.43268 1.77307 7.48514 1.82553 7.48514 1.89033C7.48514 1.95513 7.43268 2.00604 7.36788 2.00604C7.30462 2.00604 7.25217 1.95513 7.25217 1.89033Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M7.62191 2.70187L7.77774 2.65867C7.78391 2.72656 7.83483 2.78673 7.93048 2.78673C8.00454 2.78673 8.04311 2.74661 8.04311 2.70033C8.04311 2.66021 8.01534 2.62936 7.95517 2.61701L7.84408 2.59233C7.7114 2.56301 7.64197 2.47661 7.64197 2.37324C7.64197 2.2421 7.76231 2.13101 7.91814 2.13101C8.12797 2.13101 8.19585 2.26679 8.2082 2.34084L8.057 2.38404C8.05082 2.34084 8.01842 2.27141 7.91814 2.27141C7.85488 2.27141 7.81014 2.31153 7.81014 2.35781C7.81014 2.39793 7.83945 2.42724 7.88574 2.4365L7.99991 2.45964C8.14185 2.4905 8.21591 2.5769 8.21591 2.68799C8.21591 2.80216 8.12334 2.92867 7.93202 2.92867C7.71448 2.92867 7.63117 2.78673 7.62191 2.70187Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M8.62019 1.92427V2.15416H8.77602V2.31307H8.62019V2.66176C8.62019 2.7281 8.6495 2.75587 8.71584 2.75587C8.74053 2.75587 8.76984 2.75124 8.77756 2.7497V2.89781C8.76676 2.90244 8.73282 2.91479 8.66802 2.91479C8.52916 2.91479 8.44276 2.83147 8.44276 2.69107V2.31307H8.3039V2.15416H8.34247C8.4227 2.15416 8.45819 2.10324 8.45819 2.0369V1.92427H8.62019Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M9.38606 2.14953V2.33159C9.366 2.3285 9.34594 2.32696 9.32743 2.32696C9.18857 2.32696 9.12532 2.40719 9.12532 2.54759V2.90553H8.94634V2.15416H9.12069V2.2745C9.15617 2.19273 9.23949 2.1449 9.33823 2.1449C9.35983 2.1449 9.37834 2.14799 9.38606 2.14953Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M9.49068 2.70187C9.49068 2.56764 9.58943 2.49359 9.71748 2.47507L9.91034 2.44576C9.95354 2.43959 9.96588 2.41799 9.96588 2.39176C9.96588 2.3285 9.92268 2.27759 9.82394 2.27759C9.72983 2.27759 9.67737 2.33776 9.66965 2.41336L9.50611 2.37633C9.52 2.24673 9.63726 2.13101 9.8224 2.13101C10.0538 2.13101 10.1418 2.26216 10.1418 2.41181V2.78519C10.1418 2.85307 10.1495 2.89781 10.151 2.90553H9.9844C9.98286 2.9009 9.97668 2.87004 9.97668 2.80987C9.9412 2.86696 9.86714 2.92867 9.74525 2.92867C9.58788 2.92867 9.49068 2.82067 9.49068 2.70187ZM9.7792 2.78827C9.87948 2.78827 9.96588 2.74044 9.96588 2.59387V2.55993L9.76994 2.58924C9.7144 2.5985 9.66965 2.62936 9.66965 2.69107C9.66965 2.74199 9.70823 2.78827 9.7792 2.78827Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M10.5819 1.92427V2.15416H10.7377V2.31307H10.5819V2.66176C10.5819 2.7281 10.6112 2.75587 10.6776 2.75587C10.7022 2.75587 10.7316 2.75124 10.7393 2.7497V2.89781C10.7285 2.90244 10.6945 2.91479 10.6297 2.91479C10.4909 2.91479 10.4045 2.83147 10.4045 2.69107V2.31307H10.2656V2.15416H10.3042C10.3844 2.15416 10.4199 2.10324 10.4199 2.0369V1.92427H10.5819Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M11.0991 2.90553H10.9216V2.15416H11.0991V2.90553ZM10.8939 1.89033C10.8939 1.82553 10.9463 1.77307 11.0096 1.77307C11.0744 1.77307 11.1268 1.82553 11.1268 1.89033C11.1268 1.95513 11.0744 2.00604 11.0096 2.00604C10.9463 2.00604 10.8939 1.95513 10.8939 1.89033Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M11.6601 2.76821C11.7712 2.76821 11.8699 2.68644 11.8699 2.52907C11.8699 2.37324 11.7712 2.29301 11.6601 2.29301C11.5506 2.29301 11.4503 2.37324 11.4503 2.52907C11.4503 2.6849 11.5506 2.76821 11.6601 2.76821ZM11.6601 2.13101C11.8854 2.13101 12.0505 2.29919 12.0505 2.52907C12.0505 2.7605 11.8854 2.92867 11.6601 2.92867C11.4364 2.92867 11.2713 2.7605 11.2713 2.52907C11.2713 2.29919 11.4364 2.13101 11.6601 2.13101Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M12.4024 2.47199V2.90553H12.2234V2.15416H12.3978V2.25444C12.4471 2.16804 12.5366 2.13256 12.6199 2.13256C12.8035 2.13256 12.8915 2.26524 12.8915 2.43033V2.90553H12.7125V2.46119C12.7125 2.36861 12.6708 2.29456 12.5582 2.29456C12.4564 2.29456 12.4024 2.37324 12.4024 2.47199Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M14.194 2.90553H13.5075V1.81164H13.6926V2.72964H14.194V2.90553Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M14.5253 2.90553H14.3478V2.15416H14.5253V2.90553ZM14.3201 1.89033C14.3201 1.82553 14.3725 1.77307 14.4358 1.77307C14.5006 1.77307 14.553 1.82553 14.553 1.89033C14.553 1.95513 14.5006 2.00604 14.4358 2.00604C14.3725 2.00604 14.3201 1.95513 14.3201 1.89033Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M15.0833 2.2961C14.9737 2.2961 14.8765 2.37787 14.8765 2.52907C14.8765 2.68027 14.9737 2.76513 15.0863 2.76513C15.2036 2.76513 15.2576 2.68336 15.2746 2.62627L15.4319 2.68336C15.3965 2.80061 15.2838 2.92867 15.0863 2.92867C14.8657 2.92867 14.6975 2.75741 14.6975 2.52907C14.6975 2.29764 14.8657 2.13101 15.0817 2.13101C15.2838 2.13101 15.3949 2.25753 15.4258 2.37787L15.2653 2.4365C15.2483 2.37016 15.1974 2.2961 15.0833 2.2961Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M15.7083 2.4473H16.0771C16.074 2.35936 16.0153 2.28067 15.8919 2.28067C15.7793 2.28067 15.7145 2.36707 15.7083 2.4473ZM16.0971 2.64324L16.2483 2.69107C16.2082 2.82221 16.0894 2.92867 15.9089 2.92867C15.7052 2.92867 15.5247 2.78056 15.5247 2.52599C15.5247 2.28839 15.7006 2.13101 15.8904 2.13101C16.1218 2.13101 16.2576 2.28376 16.2576 2.52136C16.2576 2.55067 16.2545 2.57536 16.2529 2.57844H15.7037C15.7083 2.69261 15.7978 2.77439 15.9089 2.77439C16.0169 2.77439 16.0724 2.7173 16.0971 2.64324Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M16.6076 2.47199V2.90553H16.4286V2.15416H16.6029V2.25444C16.6523 2.16804 16.7418 2.13256 16.8251 2.13256C17.0087 2.13256 17.0967 2.26524 17.0967 2.43033V2.90553H16.9177V2.46119C16.9177 2.36861 16.876 2.29456 16.7634 2.29456C16.6616 2.29456 16.6076 2.37324 16.6076 2.47199Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M17.2482 2.70187L17.404 2.65867C17.4102 2.72656 17.4611 2.78673 17.5568 2.78673C17.6308 2.78673 17.6694 2.74661 17.6694 2.70033C17.6694 2.66021 17.6416 2.62936 17.5814 2.61701L17.4704 2.59233C17.3377 2.56301 17.2682 2.47661 17.2682 2.37324C17.2682 2.2421 17.3886 2.13101 17.5444 2.13101C17.7542 2.13101 17.8221 2.26679 17.8345 2.34084L17.6833 2.38404C17.6771 2.34084 17.6447 2.27141 17.5444 2.27141C17.4812 2.27141 17.4364 2.31153 17.4364 2.35781C17.4364 2.39793 17.4657 2.42724 17.512 2.4365L17.6262 2.45964C17.7681 2.4905 17.8422 2.5769 17.8422 2.68799C17.8422 2.80216 17.7496 2.92867 17.5583 2.92867C17.3408 2.92867 17.2574 2.78673 17.2482 2.70187Z"
                            fill="#5A42E6"
                          />
                          <path
                            d="M18.1401 2.4473H18.5089C18.5058 2.35936 18.4471 2.28067 18.3237 2.28067C18.2111 2.28067 18.1463 2.36707 18.1401 2.4473ZM18.5289 2.64324L18.6801 2.69107C18.64 2.82221 18.5212 2.92867 18.3407 2.92867C18.137 2.92867 17.9565 2.78056 17.9565 2.52599C17.9565 2.28839 18.1324 2.13101 18.3222 2.13101C18.5536 2.13101 18.6894 2.28376 18.6894 2.52136C18.6894 2.55067 18.6863 2.57536 18.6847 2.57844H18.1355C18.1401 2.69261 18.2296 2.77439 18.3407 2.77439C18.4487 2.77439 18.5042 2.7173 18.5289 2.64324Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_245_136">
                            <rect width="24" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <div className="partInput">
                        <Input
                          onChange={(e) => {
                            setSerialNumCar(e.target.value);
                          }}
                          placeholder={t("serialDec")}
                        />
                      </div>
                    </div>
                    {ErrorserialNumCar && (
                      <div className="errorInput">
                        <p>{ErrorserialNumCar}</p>
                      </div>
                    )}
                  </div>
                  <div className="parts ">
                    <label> {t("NumCarTitle")} </label>
                    <div className="part">
                      <img src="/images/carNum.png" alt="carNum" />

                      <div className="partInput">
                        <Input
                          onChange={(e) => {
                            setVehicleNumCar(e.target.value);
                          }}
                          placeholder={t("NumCarDec")}
                        />
                      </div>
                    </div>
                    {ErrorvehicleNumCar && (
                      <div className="errorInput">
                        <p>{ErrorvehicleNumCar}</p>
                      </div>
                    )}
                  </div>

                  <div className="parts  ">
                    <label> {t("imgCarTitle")} </label>
                    <div className="part">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.07143 22.7857H7.4C7.49472 22.7857 7.58556 22.8233 7.65254 22.8903C7.71952 22.9572 7.75714 23.0481 7.75714 23.1428C7.75714 23.2375 7.71952 23.3284 7.65254 23.3953C7.58556 23.4623 7.49472 23.5 7.4 23.5H3.07143C2.52205 23.5 1.99518 23.2817 1.60671 22.8932C1.21824 22.5048 1 21.9779 1 21.4285V17.0571C1 16.9624 1.03763 16.8715 1.1046 16.8046C1.17158 16.7376 1.26242 16.7 1.35714 16.7C1.45186 16.7 1.5427 16.7376 1.60968 16.8046C1.67666 16.8715 1.71429 16.9624 1.71429 17.0571V21.4285C1.71429 21.7885 1.85727 22.1337 2.11178 22.3882C2.3663 22.6427 2.71149 22.7857 3.07143 22.7857Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M23.3896 16.8046C23.4566 16.7376 23.5475 16.7 23.6422 16.7C23.7369 16.7 23.8277 16.7376 23.8947 16.8046C23.9617 16.8715 23.9993 16.9624 23.9993 17.0571V21.4285C23.9993 21.9779 23.7811 22.5048 23.3926 22.8932C23.0042 23.2817 22.4773 23.5 21.9279 23.5H17.5993C17.5046 23.5 17.4138 23.4623 17.3468 23.3953C17.2798 23.3284 17.2422 23.2375 17.2422 23.1428C17.2422 23.0481 17.2798 22.9572 17.3468 22.8903C17.4138 22.8233 17.5046 22.7857 17.5993 22.7857H21.9279C22.2878 22.7857 22.633 22.6427 22.8875 22.3882C23.1421 22.1337 23.285 21.7885 23.285 21.4285V17.0571C23.285 16.9624 23.3227 16.8715 23.3896 16.8046Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M1.60968 7.10968C1.5427 7.17666 1.45186 7.21429 1.35714 7.21429C1.26242 7.21429 1.17158 7.17666 1.1046 7.10968C1.03763 7.0427 1 6.95186 1 6.85714V2.57143C1 2.02205 1.21824 1.49518 1.60671 1.10671C1.99518 0.718239 2.52205 0.5 3.07143 0.5H7.4C7.49472 0.5 7.58556 0.537627 7.65254 0.604605C7.71952 0.671582 7.75714 0.762423 7.75714 0.857143C7.75714 0.951863 7.71952 1.0427 7.65254 1.10968C7.58556 1.17666 7.49472 1.21429 7.4 1.21429H3.07143C2.71149 1.21429 2.3663 1.35727 2.11178 1.61178C1.85727 1.8663 1.71429 2.21149 1.71429 2.57143V6.85714C1.71429 6.95186 1.67666 7.0427 1.60968 7.10968Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M17.5993 0.5H21.9279C22.4773 0.5 23.0042 0.718239 23.3926 1.10671C23.7811 1.49518 23.9993 2.02205 23.9993 2.57143V6.85714C23.9993 6.95186 23.9617 7.0427 23.8947 7.10968C23.8277 7.17666 23.7369 7.21429 23.6422 7.21429C23.5475 7.21429 23.4566 7.17666 23.3896 7.10968C23.3227 7.0427 23.285 6.95186 23.285 6.85714V2.57143C23.285 2.21149 23.1421 1.8663 22.8875 1.61178C22.633 1.35727 22.2878 1.21429 21.9279 1.21429H17.5993C17.5046 1.21429 17.4138 1.17666 17.3468 1.10968C17.2798 1.0427 17.2422 0.951864 17.2422 0.857143C17.2422 0.762422 17.2798 0.671581 17.3468 0.604605C17.4138 0.537628 17.5046 0.5 17.5993 0.5Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                        />
                        <path
                          d="M6.27669 6.07861H18.61C19.4833 6.07861 20.1934 6.78868 20.1934 7.66195V15.9953C20.1934 16.8685 19.4833 17.5786 18.61 17.5786H6.27669C5.40343 17.5786 4.69336 16.8685 4.69336 15.9953V7.66195C4.69336 6.78868 5.40343 6.07861 6.27669 6.07861ZM11.36 10.1619C11.36 9.10521 10.5001 8.24528 9.44336 8.24528C8.38662 8.24528 7.52669 9.10521 7.52669 10.1619C7.52669 11.2187 8.38662 12.0786 9.44336 12.0786C10.5001 12.0786 11.36 11.2187 11.36 10.1619ZM11.9434 15.4119C12.3574 15.4119 12.6934 15.076 12.6934 14.6619V14.3286C12.6934 13.1792 11.7594 12.2453 10.61 12.2453H8.27669C7.12729 12.2453 6.19336 13.1792 6.19336 14.3286V14.6619C6.19336 15.076 6.52929 15.4119 6.94336 15.4119H11.9434ZM14.2767 15.4119H17.9434C18.3574 15.4119 18.6934 15.076 18.6934 14.6619C18.6934 14.2479 18.3574 13.9119 17.9434 13.9119H14.2767C13.8626 13.9119 13.5267 14.2479 13.5267 14.6619C13.5267 15.076 13.8626 15.4119 14.2767 15.4119ZM14.2767 12.7453H17.9434C18.3574 12.7453 18.6934 12.4094 18.6934 11.9953C18.6934 11.5812 18.3574 11.2453 17.9434 11.2453H14.2767C13.8626 11.2453 13.5267 11.5812 13.5267 11.9953C13.5267 12.4094 13.8626 12.7453 14.2767 12.7453ZM14.2767 10.0786H17.9434C18.3574 10.0786 18.6934 9.74268 18.6934 9.32861C18.6934 8.91454 18.3574 8.57861 17.9434 8.57861H14.2767C13.8626 8.57861 13.5267 8.91454 13.5267 9.32861C13.5267 9.74268 13.8626 10.0786 14.2767 10.0786Z"
                          fill="#5A42E6"
                          fillOpacity="0.35"
                          stroke="#5A42E6"
                          strokeWidth="0.5"
                        />
                      </svg>

                      <div className="partInput">
                        <div className="fileInput">
                          <input
                            type="file"
                            onChange={handleHeaderInputChange4}
                          />
                          <p> {t("imgCarDec")} </p>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 23.0002C24 23.8287 23.3284 24.5002 22.5 24.5002H1.5C0.671578 24.5002 0 23.8287 0 23.0002C0 22.1718 0.671578 21.5002 1.5 21.5002H22.5C23.3284 21.5002 24 22.1718 24 23.0002ZM6.68545 8.81483C7.06931 8.81483 7.45322 8.66839 7.74609 8.37547L10.5 5.62156V17.1878C10.5 18.0162 11.1716 18.6878 12 18.6878C12.8284 18.6878 13.5 18.0162 13.5 17.1878V5.62156L16.2539 8.37547C16.8397 8.96126 17.7894 8.96126 18.3752 8.37547C18.961 7.78967 18.961 6.83994 18.3752 6.25414L13.0606 0.939592C12.4748 0.353795 11.5251 0.353795 10.9393 0.939592L5.62477 6.25414C5.03897 6.83994 5.03897 7.78967 5.62477 8.37547C5.91769 8.66839 6.30155 8.81483 6.68545 8.81483Z"
                              fill="#5A42E6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="partImgFile">
                      {selectedFile4 &&
                        selectedFile4.map((file, i) => {
                          return (
                            <div className="partImg">
                              <p>{file.name}</p>
                              <svg
                                onClick={() => {
                                  setSelectedFile4(
                                    selectedFile4.filter(
                                      (item) => item !== file
                                    )
                                  );
                                }}
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.95842 6.99993L13.5184 2.43993C14.0593 1.89901 14.0593 1.02209 13.5184 0.481162C12.9775 -0.0597608 12.1006 -0.0597608 11.5597 0.481162L6.99966 5.04116L2.43966 0.481162C1.89873 -0.0597608 1.02181 -0.0597608 0.480888 0.481162C-0.0600354 1.02209 -0.0600354 1.89901 0.480888 2.43993L5.04089 6.99993L0.480888 11.5599C-0.0600354 12.1009 -0.0600354 12.9778 0.480888 13.5187C0.750426 13.7882 1.10489 13.9249 1.45935 13.9249C1.81381 13.9249 2.16827 13.7901 2.43781 13.5187L6.99781 8.9587L11.5578 13.5187C11.8273 13.7882 12.1818 13.9249 12.5363 13.9249C12.8907 13.9249 13.2452 13.7901 13.5147 13.5187C14.0557 12.9778 14.0557 12.1009 13.5147 11.5599L8.95473 6.99993H8.95842Z"
                                  fill="#5A42E6"
                                />
                              </svg>
                            </div>
                          );
                        })}
                    </div>

                    {ErrorFile4 && (
                      <div className="errorInput">
                        <img src="/images/note.png" alt="error" />
                        <p>{ErrorFile4} </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="formInput formInput2  ">
                  <div className="parts ">
                    <label>{t("classTitle")} </label>
                    <div className="part">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <path
                            d="M21 17.25V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25H18C17.8011 20.25 17.6103 20.171 17.4697 20.0303C17.329 19.8897 17.25 19.6989 17.25 19.5V17.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M6.75 17.25V19.5C6.75 19.6989 6.67098 19.8897 6.53033 20.0303C6.38968 20.171 6.19891 20.25 6 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V17.25H6.75Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M21 11.25L18.198 4.9454C18.139 4.81282 18.0429 4.70018 17.9213 4.62113C17.7996 4.54208 17.6577 4.5 17.5126 4.5H6.48741C6.34233 4.5 6.20037 4.54208 6.07872 4.62113C5.95708 4.70018 5.86097 4.81282 5.80205 4.9454L3 11.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <path
                          d="M22.5 10.5H21.4874L18.8833 4.64072C18.7653 4.3757 18.573 4.15055 18.3298 3.99248C18.0865 3.83441 17.8027 3.75019 17.5126 3.75H6.48743C6.19731 3.75019 5.91346 3.83442 5.6702 3.99251C5.42694 4.1506 5.23469 4.37577 5.1167 4.64081L2.51259 10.5H1.5C1.30109 10.5 1.11032 10.579 0.96967 10.7197C0.829018 10.8603 0.75 11.0511 0.75 11.25C0.75 11.4489 0.829018 11.6397 0.96967 11.7803C1.11032 11.921 1.30109 12 1.5 12H2.25V19.5C2.25045 19.8977 2.40864 20.279 2.68984 20.5602C2.97105 20.8414 3.35231 20.9995 3.75 21H6C6.39769 20.9995 6.77895 20.8414 7.06016 20.5602C7.34136 20.279 7.49955 19.8977 7.5 19.5V18H16.5V19.5C16.5005 19.8977 16.6586 20.279 16.9398 20.5602C17.221 20.8414 17.6023 20.9995 18 21H20.25C20.6477 20.9995 21.029 20.8414 21.3102 20.5602C21.5914 20.279 21.7495 19.8977 21.75 19.5V12H22.5C22.6989 12 22.8897 11.921 23.0303 11.7803C23.171 11.6397 23.25 11.4489 23.25 11.25C23.25 11.0511 23.171 10.8603 23.0303 10.7197C22.8897 10.579 22.6989 10.5 22.5 10.5ZM6.48743 5.25H17.5126L19.8459 10.5H4.15409L6.48743 5.25ZM6 19.5H3.75V18H6V19.5ZM18 19.5V18H20.25V19.5H18ZM20.25 16.5H3.75V12H20.25V16.5Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M6 15H7.5C7.69891 15 7.88968 14.921 8.03033 14.7803C8.17098 14.6397 8.25 14.4489 8.25 14.25C8.25 14.0511 8.17098 13.8603 8.03033 13.7197C7.88968 13.579 7.69891 13.5 7.5 13.5H6C5.80109 13.5 5.61032 13.579 5.46967 13.7197C5.32902 13.8603 5.25 14.0511 5.25 14.25C5.25 14.4489 5.32902 14.6397 5.46967 14.7803C5.61032 14.921 5.80109 15 6 15Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M16.5 15H18C18.1989 15 18.3897 14.921 18.5303 14.7803C18.671 14.6397 18.75 14.4489 18.75 14.25C18.75 14.0511 18.671 13.8603 18.5303 13.7197C18.3897 13.579 18.1989 13.5 18 13.5H16.5C16.3011 13.5 16.1103 13.579 15.9697 13.7197C15.829 13.8603 15.75 14.0511 15.75 14.25C15.75 14.4489 15.829 14.6397 15.9697 14.7803C16.1103 14.921 16.3011 15 16.5 15Z"
                          fill="#5A42E6"
                        />
                      </svg>

                      <div className="partInput">
                        <Select
                          searchable
                          clearable
                          onChange={setGetcarClass}
                          withScrollArea={false}
                          styles={{
                            dropdown: { maxHeight: 200, overflowY: "auto" },
                          }}
                          placeholder={t("classDec")}
                          data={carClass}
                        />
                      </div>
                    </div>
                    {ErrorGetcarClass && (
                      <div className="errorInput">
                        <p>{ErrorGetcarClass}</p>
                      </div>
                    )}
                  </div>
                  <div className="parts ">
                    <label> {t("seatsTitle")} </label>
                    <div className="part">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <path
                            d="M21 17.25V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25H18C17.8011 20.25 17.6103 20.171 17.4697 20.0303C17.329 19.8897 17.25 19.6989 17.25 19.5V17.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M6.75 17.25V19.5C6.75 19.6989 6.67098 19.8897 6.53033 20.0303C6.38968 20.171 6.19891 20.25 6 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V17.25H6.75Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M21 11.25L18.198 4.9454C18.139 4.81282 18.0429 4.70018 17.9213 4.62113C17.7996 4.54208 17.6577 4.5 17.5126 4.5H6.48741C6.34233 4.5 6.20037 4.54208 6.07872 4.62113C5.95708 4.70018 5.86097 4.81282 5.80205 4.9454L3 11.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <path
                          d="M22.5 10.5H21.4874L18.8833 4.64072C18.7653 4.3757 18.573 4.15055 18.3298 3.99248C18.0865 3.83441 17.8027 3.75019 17.5126 3.75H6.48743C6.19731 3.75019 5.91346 3.83442 5.6702 3.99251C5.42694 4.1506 5.23469 4.37577 5.1167 4.64081L2.51259 10.5H1.5C1.30109 10.5 1.11032 10.579 0.96967 10.7197C0.829018 10.8603 0.75 11.0511 0.75 11.25C0.75 11.4489 0.829018 11.6397 0.96967 11.7803C1.11032 11.921 1.30109 12 1.5 12H2.25V19.5C2.25045 19.8977 2.40864 20.279 2.68984 20.5602C2.97105 20.8414 3.35231 20.9995 3.75 21H6C6.39769 20.9995 6.77895 20.8414 7.06016 20.5602C7.34136 20.279 7.49955 19.8977 7.5 19.5V18H16.5V19.5C16.5005 19.8977 16.6586 20.279 16.9398 20.5602C17.221 20.8414 17.6023 20.9995 18 21H20.25C20.6477 20.9995 21.029 20.8414 21.3102 20.5602C21.5914 20.279 21.7495 19.8977 21.75 19.5V12H22.5C22.6989 12 22.8897 11.921 23.0303 11.7803C23.171 11.6397 23.25 11.4489 23.25 11.25C23.25 11.0511 23.171 10.8603 23.0303 10.7197C22.8897 10.579 22.6989 10.5 22.5 10.5ZM6.48743 5.25H17.5126L19.8459 10.5H4.15409L6.48743 5.25ZM6 19.5H3.75V18H6V19.5ZM18 19.5V18H20.25V19.5H18ZM20.25 16.5H3.75V12H20.25V16.5Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M6 15H7.5C7.69891 15 7.88968 14.921 8.03033 14.7803C8.17098 14.6397 8.25 14.4489 8.25 14.25C8.25 14.0511 8.17098 13.8603 8.03033 13.7197C7.88968 13.579 7.69891 13.5 7.5 13.5H6C5.80109 13.5 5.61032 13.579 5.46967 13.7197C5.32902 13.8603 5.25 14.0511 5.25 14.25C5.25 14.4489 5.32902 14.6397 5.46967 14.7803C5.61032 14.921 5.80109 15 6 15Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M16.5 15H18C18.1989 15 18.3897 14.921 18.5303 14.7803C18.671 14.6397 18.75 14.4489 18.75 14.25C18.75 14.0511 18.671 13.8603 18.5303 13.7197C18.3897 13.579 18.1989 13.5 18 13.5H16.5C16.3011 13.5 16.1103 13.579 15.9697 13.7197C15.829 13.8603 15.75 14.0511 15.75 14.25C15.75 14.4489 15.829 14.6397 15.9697 14.7803C16.1103 14.921 16.3011 15 16.5 15Z"
                          fill="#5A42E6"
                        />
                      </svg>

                      <div className="partInput">
                        <Select
                          searchable
                          clearable
                          onChange={setGetSeatCounts}
                          withScrollArea={false}
                          styles={{
                            dropdown: { maxHeight: 200, overflowY: "auto" },
                          }}
                          placeholder={t("seatsDec")}
                          data={seatCounts}
                        />
                      </div>
                    </div>
                    {ErrorGetseatCounts && (
                      <div className="errorInput">
                        <p>{ErrorGetseatCounts}</p>
                      </div>
                    )}
                  </div>
                  <div className="parts ">
                    <label> {t("colorTitle")} </label>
                    <div className="part">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <path
                            d="M21 17.25V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25H18C17.8011 20.25 17.6103 20.171 17.4697 20.0303C17.329 19.8897 17.25 19.6989 17.25 19.5V17.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M6.75 17.25V19.5C6.75 19.6989 6.67098 19.8897 6.53033 20.0303C6.38968 20.171 6.19891 20.25 6 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V17.25H6.75Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M21 11.25L18.198 4.9454C18.139 4.81282 18.0429 4.70018 17.9213 4.62113C17.7996 4.54208 17.6577 4.5 17.5126 4.5H6.48741C6.34233 4.5 6.20037 4.54208 6.07872 4.62113C5.95708 4.70018 5.86097 4.81282 5.80205 4.9454L3 11.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <path
                          d="M22.5 10.5H21.4874L18.8833 4.64072C18.7653 4.3757 18.573 4.15055 18.3298 3.99248C18.0865 3.83441 17.8027 3.75019 17.5126 3.75H6.48743C6.19731 3.75019 5.91346 3.83442 5.6702 3.99251C5.42694 4.1506 5.23469 4.37577 5.1167 4.64081L2.51259 10.5H1.5C1.30109 10.5 1.11032 10.579 0.96967 10.7197C0.829018 10.8603 0.75 11.0511 0.75 11.25C0.75 11.4489 0.829018 11.6397 0.96967 11.7803C1.11032 11.921 1.30109 12 1.5 12H2.25V19.5C2.25045 19.8977 2.40864 20.279 2.68984 20.5602C2.97105 20.8414 3.35231 20.9995 3.75 21H6C6.39769 20.9995 6.77895 20.8414 7.06016 20.5602C7.34136 20.279 7.49955 19.8977 7.5 19.5V18H16.5V19.5C16.5005 19.8977 16.6586 20.279 16.9398 20.5602C17.221 20.8414 17.6023 20.9995 18 21H20.25C20.6477 20.9995 21.029 20.8414 21.3102 20.5602C21.5914 20.279 21.7495 19.8977 21.75 19.5V12H22.5C22.6989 12 22.8897 11.921 23.0303 11.7803C23.171 11.6397 23.25 11.4489 23.25 11.25C23.25 11.0511 23.171 10.8603 23.0303 10.7197C22.8897 10.579 22.6989 10.5 22.5 10.5ZM6.48743 5.25H17.5126L19.8459 10.5H4.15409L6.48743 5.25ZM6 19.5H3.75V18H6V19.5ZM18 19.5V18H20.25V19.5H18ZM20.25 16.5H3.75V12H20.25V16.5Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M6 15H7.5C7.69891 15 7.88968 14.921 8.03033 14.7803C8.17098 14.6397 8.25 14.4489 8.25 14.25C8.25 14.0511 8.17098 13.8603 8.03033 13.7197C7.88968 13.579 7.69891 13.5 7.5 13.5H6C5.80109 13.5 5.61032 13.579 5.46967 13.7197C5.32902 13.8603 5.25 14.0511 5.25 14.25C5.25 14.4489 5.32902 14.6397 5.46967 14.7803C5.61032 14.921 5.80109 15 6 15Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M16.5 15H18C18.1989 15 18.3897 14.921 18.5303 14.7803C18.671 14.6397 18.75 14.4489 18.75 14.25C18.75 14.0511 18.671 13.8603 18.5303 13.7197C18.3897 13.579 18.1989 13.5 18 13.5H16.5C16.3011 13.5 16.1103 13.579 15.9697 13.7197C15.829 13.8603 15.75 14.0511 15.75 14.25C15.75 14.4489 15.829 14.6397 15.9697 14.7803C16.1103 14.921 16.3011 15 16.5 15Z"
                          fill="#5A42E6"
                        />
                      </svg>

                      <div className="partInput">
                        <Select
                          placeholder={t("colorDec")}
                          searchable
                          clearable
                          onChange={setGetDataColor}
                          data={dataColor}
                          withScrollArea={false}
                          styles={{
                            dropdown: { maxHeight: 200, overflowY: "auto" },
                          }}
                        />
                      </div>
                    </div>
                    {ErrorGetdataColor && (
                      <div className="errorInput">
                        <p>{ErrorGetdataColor}</p>
                      </div>
                    )}
                  </div>
                  <div className="parts ">
                    <label> {t("typeTitle")} </label>
                    <div className="part">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <path
                            d="M21 17.25V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25H18C17.8011 20.25 17.6103 20.171 17.4697 20.0303C17.329 19.8897 17.25 19.6989 17.25 19.5V17.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M6.75 17.25V19.5C6.75 19.6989 6.67098 19.8897 6.53033 20.0303C6.38968 20.171 6.19891 20.25 6 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V17.25H6.75Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M21 11.25L18.198 4.9454C18.139 4.81282 18.0429 4.70018 17.9213 4.62113C17.7996 4.54208 17.6577 4.5 17.5126 4.5H6.48741C6.34233 4.5 6.20037 4.54208 6.07872 4.62113C5.95708 4.70018 5.86097 4.81282 5.80205 4.9454L3 11.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <path
                          d="M22.5 10.5H21.4874L18.8833 4.64072C18.7653 4.3757 18.573 4.15055 18.3298 3.99248C18.0865 3.83441 17.8027 3.75019 17.5126 3.75H6.48743C6.19731 3.75019 5.91346 3.83442 5.6702 3.99251C5.42694 4.1506 5.23469 4.37577 5.1167 4.64081L2.51259 10.5H1.5C1.30109 10.5 1.11032 10.579 0.96967 10.7197C0.829018 10.8603 0.75 11.0511 0.75 11.25C0.75 11.4489 0.829018 11.6397 0.96967 11.7803C1.11032 11.921 1.30109 12 1.5 12H2.25V19.5C2.25045 19.8977 2.40864 20.279 2.68984 20.5602C2.97105 20.8414 3.35231 20.9995 3.75 21H6C6.39769 20.9995 6.77895 20.8414 7.06016 20.5602C7.34136 20.279 7.49955 19.8977 7.5 19.5V18H16.5V19.5C16.5005 19.8977 16.6586 20.279 16.9398 20.5602C17.221 20.8414 17.6023 20.9995 18 21H20.25C20.6477 20.9995 21.029 20.8414 21.3102 20.5602C21.5914 20.279 21.7495 19.8977 21.75 19.5V12H22.5C22.6989 12 22.8897 11.921 23.0303 11.7803C23.171 11.6397 23.25 11.4489 23.25 11.25C23.25 11.0511 23.171 10.8603 23.0303 10.7197C22.8897 10.579 22.6989 10.5 22.5 10.5ZM6.48743 5.25H17.5126L19.8459 10.5H4.15409L6.48743 5.25ZM6 19.5H3.75V18H6V19.5ZM18 19.5V18H20.25V19.5H18ZM20.25 16.5H3.75V12H20.25V16.5Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M6 15H7.5C7.69891 15 7.88968 14.921 8.03033 14.7803C8.17098 14.6397 8.25 14.4489 8.25 14.25C8.25 14.0511 8.17098 13.8603 8.03033 13.7197C7.88968 13.579 7.69891 13.5 7.5 13.5H6C5.80109 13.5 5.61032 13.579 5.46967 13.7197C5.32902 13.8603 5.25 14.0511 5.25 14.25C5.25 14.4489 5.32902 14.6397 5.46967 14.7803C5.61032 14.921 5.80109 15 6 15Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M16.5 15H18C18.1989 15 18.3897 14.921 18.5303 14.7803C18.671 14.6397 18.75 14.4489 18.75 14.25C18.75 14.0511 18.671 13.8603 18.5303 13.7197C18.3897 13.579 18.1989 13.5 18 13.5H16.5C16.3011 13.5 16.1103 13.579 15.9697 13.7197C15.829 13.8603 15.75 14.0511 15.75 14.25C15.75 14.4489 15.829 14.6397 15.9697 14.7803C16.1103 14.921 16.3011 15 16.5 15Z"
                          fill="#5A42E6"
                        />
                      </svg>

                      <div className="partInput">
                        <Select
                          searchable
                          clearable
                          onChange={setGetCarType}
                          withScrollArea={false}
                          styles={{
                            dropdown: { maxHeight: 200, overflowY: "auto" },
                          }}
                          placeholder={t("typeDec")}
                          data={carType}
                        />
                      </div>
                    </div>
                    {ErrorGetcarType && (
                      <div className="errorInput">
                        <p>{ErrorGetcarType}</p>
                      </div>
                    )}
                  </div>
                  <div className="parts ">
                    <label> {t("nameCarTitle")}</label>
                    <div className="part">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <path
                            d="M21 17.25V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25H18C17.8011 20.25 17.6103 20.171 17.4697 20.0303C17.329 19.8897 17.25 19.6989 17.25 19.5V17.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M6.75 17.25V19.5C6.75 19.6989 6.67098 19.8897 6.53033 20.0303C6.38968 20.171 6.19891 20.25 6 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V17.25H6.75Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M21 11.25L18.198 4.9454C18.139 4.81282 18.0429 4.70018 17.9213 4.62113C17.7996 4.54208 17.6577 4.5 17.5126 4.5H6.48741C6.34233 4.5 6.20037 4.54208 6.07872 4.62113C5.95708 4.70018 5.86097 4.81282 5.80205 4.9454L3 11.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <path
                          d="M22.5 10.5H21.4874L18.8833 4.64072C18.7653 4.3757 18.573 4.15055 18.3298 3.99248C18.0865 3.83441 17.8027 3.75019 17.5126 3.75H6.48743C6.19731 3.75019 5.91346 3.83442 5.6702 3.99251C5.42694 4.1506 5.23469 4.37577 5.1167 4.64081L2.51259 10.5H1.5C1.30109 10.5 1.11032 10.579 0.96967 10.7197C0.829018 10.8603 0.75 11.0511 0.75 11.25C0.75 11.4489 0.829018 11.6397 0.96967 11.7803C1.11032 11.921 1.30109 12 1.5 12H2.25V19.5C2.25045 19.8977 2.40864 20.279 2.68984 20.5602C2.97105 20.8414 3.35231 20.9995 3.75 21H6C6.39769 20.9995 6.77895 20.8414 7.06016 20.5602C7.34136 20.279 7.49955 19.8977 7.5 19.5V18H16.5V19.5C16.5005 19.8977 16.6586 20.279 16.9398 20.5602C17.221 20.8414 17.6023 20.9995 18 21H20.25C20.6477 20.9995 21.029 20.8414 21.3102 20.5602C21.5914 20.279 21.7495 19.8977 21.75 19.5V12H22.5C22.6989 12 22.8897 11.921 23.0303 11.7803C23.171 11.6397 23.25 11.4489 23.25 11.25C23.25 11.0511 23.171 10.8603 23.0303 10.7197C22.8897 10.579 22.6989 10.5 22.5 10.5ZM6.48743 5.25H17.5126L19.8459 10.5H4.15409L6.48743 5.25ZM6 19.5H3.75V18H6V19.5ZM18 19.5V18H20.25V19.5H18ZM20.25 16.5H3.75V12H20.25V16.5Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M6 15H7.5C7.69891 15 7.88968 14.921 8.03033 14.7803C8.17098 14.6397 8.25 14.4489 8.25 14.25C8.25 14.0511 8.17098 13.8603 8.03033 13.7197C7.88968 13.579 7.69891 13.5 7.5 13.5H6C5.80109 13.5 5.61032 13.579 5.46967 13.7197C5.32902 13.8603 5.25 14.0511 5.25 14.25C5.25 14.4489 5.32902 14.6397 5.46967 14.7803C5.61032 14.921 5.80109 15 6 15Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M16.5 15H18C18.1989 15 18.3897 14.921 18.5303 14.7803C18.671 14.6397 18.75 14.4489 18.75 14.25C18.75 14.0511 18.671 13.8603 18.5303 13.7197C18.3897 13.579 18.1989 13.5 18 13.5H16.5C16.3011 13.5 16.1103 13.579 15.9697 13.7197C15.829 13.8603 15.75 14.0511 15.75 14.25C15.75 14.4489 15.829 14.6397 15.9697 14.7803C16.1103 14.921 16.3011 15 16.5 15Z"
                          fill="#5A42E6"
                        />
                      </svg>

                      <div className="partInput">
                        <Select
                          searchable
                          clearable
                          onChange={setGetcarName}
                          withScrollArea={false}
                          styles={{
                            dropdown: { maxHeight: 200, overflowY: "auto" },
                          }}
                          placeholder={t("nameCarDec")}
                          data={carName}
                        />
                      </div>
                    </div>
                    {ErrorGetcarName && (
                      <div className="errorInput">
                        <p>{ErrorGetcarName}</p>
                      </div>
                    )}
                  </div>
                  <div className="parts ">
                    <label>{t("yearCarTitle")} </label>
                    <div className="part">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <path
                            d="M21 17.25V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25H18C17.8011 20.25 17.6103 20.171 17.4697 20.0303C17.329 19.8897 17.25 19.6989 17.25 19.5V17.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M6.75 17.25V19.5C6.75 19.6989 6.67098 19.8897 6.53033 20.0303C6.38968 20.171 6.19891 20.25 6 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V17.25H6.75Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M21 11.25L18.198 4.9454C18.139 4.81282 18.0429 4.70018 17.9213 4.62113C17.7996 4.54208 17.6577 4.5 17.5126 4.5H6.48741C6.34233 4.5 6.20037 4.54208 6.07872 4.62113C5.95708 4.70018 5.86097 4.81282 5.80205 4.9454L3 11.25H21Z"
                            fill="#5A42E6"
                          />
                        </g>
                        <path
                          d="M22.5 10.5H21.4874L18.8833 4.64072C18.7653 4.3757 18.573 4.15055 18.3298 3.99248C18.0865 3.83441 17.8027 3.75019 17.5126 3.75H6.48743C6.19731 3.75019 5.91346 3.83442 5.6702 3.99251C5.42694 4.1506 5.23469 4.37577 5.1167 4.64081L2.51259 10.5H1.5C1.30109 10.5 1.11032 10.579 0.96967 10.7197C0.829018 10.8603 0.75 11.0511 0.75 11.25C0.75 11.4489 0.829018 11.6397 0.96967 11.7803C1.11032 11.921 1.30109 12 1.5 12H2.25V19.5C2.25045 19.8977 2.40864 20.279 2.68984 20.5602C2.97105 20.8414 3.35231 20.9995 3.75 21H6C6.39769 20.9995 6.77895 20.8414 7.06016 20.5602C7.34136 20.279 7.49955 19.8977 7.5 19.5V18H16.5V19.5C16.5005 19.8977 16.6586 20.279 16.9398 20.5602C17.221 20.8414 17.6023 20.9995 18 21H20.25C20.6477 20.9995 21.029 20.8414 21.3102 20.5602C21.5914 20.279 21.7495 19.8977 21.75 19.5V12H22.5C22.6989 12 22.8897 11.921 23.0303 11.7803C23.171 11.6397 23.25 11.4489 23.25 11.25C23.25 11.0511 23.171 10.8603 23.0303 10.7197C22.8897 10.579 22.6989 10.5 22.5 10.5ZM6.48743 5.25H17.5126L19.8459 10.5H4.15409L6.48743 5.25ZM6 19.5H3.75V18H6V19.5ZM18 19.5V18H20.25V19.5H18ZM20.25 16.5H3.75V12H20.25V16.5Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M6 15H7.5C7.69891 15 7.88968 14.921 8.03033 14.7803C8.17098 14.6397 8.25 14.4489 8.25 14.25C8.25 14.0511 8.17098 13.8603 8.03033 13.7197C7.88968 13.579 7.69891 13.5 7.5 13.5H6C5.80109 13.5 5.61032 13.579 5.46967 13.7197C5.32902 13.8603 5.25 14.0511 5.25 14.25C5.25 14.4489 5.32902 14.6397 5.46967 14.7803C5.61032 14.921 5.80109 15 6 15Z"
                          fill="#5A42E6"
                        />
                        <path
                          d="M16.5 15H18C18.1989 15 18.3897 14.921 18.5303 14.7803C18.671 14.6397 18.75 14.4489 18.75 14.25C18.75 14.0511 18.671 13.8603 18.5303 13.7197C18.3897 13.579 18.1989 13.5 18 13.5H16.5C16.3011 13.5 16.1103 13.579 15.9697 13.7197C15.829 13.8603 15.75 14.0511 15.75 14.25C15.75 14.4489 15.829 14.6397 15.9697 14.7803C16.1103 14.921 16.3011 15 16.5 15Z"
                          fill="#5A42E6"
                        />
                      </svg>

                      <div className="partInput">
                        <Select
                          searchable
                          clearable
                          onChange={setyearCar}
                          withScrollArea={false}
                          styles={{
                            dropdown: { maxHeight: 200, overflowY: "auto" },
                          }}
                          placeholder={t("yearCarDec")}
                          data={["2005", "2007", "2008", "2009"]}
                        />
                      </div>
                    </div>
                    {ErroryearCar && (
                      <div className="errorInput">
                        <p>{ErroryearCar}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="partBtn">
                  <input
                    type="submit"
                    className="btn_page "
                    value={t("back")}
                    onClick={(e) => {
                      e.preventDefault();
                      setFormOne(true);
                    }}
                  />

                  <input
                    onClick={(e) => {
                      e.preventDefault();
                      handelFormTwo();
                    }}
                    disabled={!AllData}
                    type="submit"
                    className={AllData ? "btn_page " : "btn_page notActive"}
                    value={t("craete")}
                  />
                </div>
                {/* <Notification className="hide notification" hidden  
      closeButtonProps={{ 'aria-label': 'Hide ' }}
    >
      notification
    </Notification> */}
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default page;
