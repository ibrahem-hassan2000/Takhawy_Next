"use client";
import { FileInput, Input, LoadingOverlay } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

function ContactUS({ lang }) {
  const t = useTranslations("jobs.contactUs");
  const t2 = useTranslations("notfication");

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nameJob, setNameJob] = useState("");
  const [file, setFile] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [nameJobErorr, setNameJobErorr] = useState("");
  const [emailErorr, setEmailErorr] = useState("");
  const [mobileErorr, setMobileErorr] = useState("");
  const handelContactUS = () => {
    setLoading(true);

    const po = axios
      .post(
        "https://dashboard.takhawe.com/api/contact_us",
        {
          email: email,
          mobile: mobile,
          job_title: nameJob,
          file: file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            "Accept-Language": lang,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);

        setEmail("");
        setMobile("");
        setNameJob("");
        setFile(null);
        setNameJobErorr("");
        setEmailErorr("");
        setMobileErorr("");
        notifications.show({
          dir: "rtl",
          icon: true,
          top: 20,
          autoClose: 15000,
          title: t2("sendContact"),
          message: t2("investorDec"),
        });
      })
      .catch((res) => {
        setLoading(false);

        console.log(res);

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
        setNameJobErorr(
          res.response.data?.errors?.job_title
            ? res.response.data.errors.job_title[0]
            : null
        );
      });
  };

  return (
    <section className="contactUS">
      <div className="con">
        <LoadingOverlay
          visible={Loading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: '#5a42e6'}}
        />
        <div className="content">
          <h2>{t("title")}</h2>
          <h3>{t("dec")}</h3>
          <form action="">
            <div className="formInput">
              <div className="parts">
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
                      placeholder={t("emailPlac")}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {emailErorr && (
                  <div className="errorInput">
                    <p>{emailErorr}</p>
                  </div>
                )}
              </div>
              <div className="parts">
                <label>{t("num")}</label>
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
                      placeholder={t("numPlace")}
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {mobileErorr && (
                  <div className="errorInput">
                    <p>{mobileErorr}</p>
                  </div>
                )}
              </div>
              <div className="parts">
                <label>{t("jopTitle")}</label>
                <div className="part">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_83_536)">
                      <path
                        d="M22 21.75H2C1.31 21.75 0.75 21.19 0.75 20.5V4.5C0.75 3.81 1.31 3.25 2 3.25H22C22.69 3.25 23.25 3.81 23.25 4.5V20.5C23.25 21.19 22.69 21.75 22 21.75Z"
                        fill="#5A42E6"
                        fillOpacity="0.35"
                      />
                      <path
                        d="M19.25 14.75H4.75C2.541 14.75 0.75 12.959 0.75 10.75V4.25C0.75 3.698 1.198 3.25 1.75 3.25H22.25C22.802 3.25 23.25 3.698 23.25 4.25V10.75C23.25 12.959 21.459 14.75 19.25 14.75Z"
                        fill="#ACA0F2"
                      />
                      <path
                        d="M22 22.5H2C0.897 22.5 0 21.603 0 20.5V4.5C0 3.397 0.897 2.5 2 2.5H22C23.103 2.5 24 3.397 24 4.5V20.5C24 21.603 23.103 22.5 22 22.5ZM2 4C1.725 4 1.5 4.224 1.5 4.5V20.5C1.5 20.776 1.725 21 2 21H22C22.275 21 22.5 20.776 22.5 20.5V4.5C22.5 4.224 22.275 4 22 4H2Z"
                        fill="#5A42E6"
                      />
                      <path
                        d="M19.25 15.5H4.75C2.131 15.5 0 13.369 0 10.75V4.25C0 3.285 0.785 2.5 1.75 2.5H22.25C23.215 2.5 24 3.285 24 4.25V10.75C24 13.369 21.869 15.5 19.25 15.5ZM1.75 4C1.612 4 1.5 4.112 1.5 4.25V10.75C1.5 12.542 2.958 14 4.75 14H19.25C21.042 14 22.5 12.542 22.5 10.75V4.25C22.5 4.112 22.388 4 22.25 4H1.75Z"
                        fill="#5A42E6"
                      />
                      <path
                        d="M6.5 18.5C6.086 18.5 5.75 18.164 5.75 17.75V12.25C5.75 11.836 6.086 11.5 6.5 11.5C6.914 11.5 7.25 11.836 7.25 12.25V17.75C7.25 18.164 6.914 18.5 6.5 18.5Z"
                        fill="#5A42E6"
                      />
                      <path
                        d="M17.5 18.5C17.086 18.5 16.75 18.164 16.75 17.75V12.25C16.75 11.836 17.086 11.5 17.5 11.5C17.914 11.5 18.25 11.836 18.25 12.25V17.75C18.25 18.164 17.914 18.5 17.5 18.5Z"
                        fill="#5A42E6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_83_536">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="partInput">
                    <Input
                      value={nameJob}
                      placeholder={t("jopTitlePlace")}
                      onChange={(e) => {
                        setNameJob(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {nameJobErorr && (
                  <div className="errorInput">
                    <p>{nameJobErorr}</p>
                  </div>
                )}
              </div>
              <div className="parts">
                <label>{t("cv")}</label>
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
                      clearable
                      placeholder={t("cvPlace")}
                      onChange={(e) => {
                        setFile(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <input
              type="submit"
              className="send"
              value={t("send")}
              onClick={(e) => {
                e.preventDefault();
                handelContactUS();
              }}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUS;
