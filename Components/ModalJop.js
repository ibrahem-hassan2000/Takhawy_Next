"use client";

import { Button, CopyButton } from "@mantine/core";
import { useTranslations } from "next-intl";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import React from "react";

function ModalJop({ data, lang }) {
  const t = useTranslations('jobs');
  return (
    <div
      className="modal jobsModel "
      id="exampleModalLong"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
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
            </button>
          </div>

          <div className="modal-body">
            <h2>{t('job')}: {data.title[lang]}</h2>
            <div className="parts">
              {data.sections.length > 0
                ? data.sections.map((item) => {
                    return (
                      <div key={item.id} className="part">
                        <h3>{item.title[lang]}</h3>
                        {item.details.length > 0
                          ? item.details.map((dec) => {
                              return <p key={dec.id}>{dec.content[lang]}</p>;
                            })
                          : null}
                      </div>
                    );
                  })
                : nul}
            </div>
            <div className="endModel">
              <h4>{t('share')}</h4>
              <div className="linksModel">
                <CopyButton
                  value={window.location.href}
                  className="linkModel copyLink"
                >
                  {({ copied, copy }) => (
                    <Button color={copied ? "#42e68b59" : "rgba(90, 66, 230, 0.35)"} radius={'40px'} onClick={copy}>
                      {copied ? (
                        <>
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.31787 15.1811L15.6818 8.81714"
                              stroke="#5A42E6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.0904 16.7728L11.4388 19.4245C10.5948 20.2682 9.45028 20.7421 8.25694 20.742C7.0636 20.7419 5.91916 20.2678 5.07534 19.4239C4.23152 18.5801 3.75743 17.4357 3.75732 16.2423C3.75722 15.049 4.23112 13.9045 5.0748 13.0605L7.72645 10.4089"
                              stroke="#5A42E6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.2727 13.5904L19.9243 10.9388C20.768 10.0948 21.2419 8.95028 21.2418 7.75694C21.2417 6.5636 20.7676 5.41916 19.9238 4.57534C19.0799 3.73152 17.9355 3.25743 16.7422 3.25732C15.5488 3.25722 14.4043 3.73112 13.5603 4.5748L10.9087 7.22645"
                              stroke="#5A42E6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <p style={{color:'#5a42e6',padding:'0px 4px',fontFamily:'"cairoM"'}}> {t('copyDone')}  </p>
                        </>
                      ) : (
                        <>
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.31787 15.1811L15.6818 8.81714"
                              stroke="#5A42E6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.0904 16.7728L11.4388 19.4245C10.5948 20.2682 9.45028 20.7421 8.25694 20.742C7.0636 20.7419 5.91916 20.2678 5.07534 19.4239C4.23152 18.5801 3.75743 17.4357 3.75732 16.2423C3.75722 15.049 4.23112 13.9045 5.0748 13.0605L7.72645 10.4089"
                              stroke="#5A42E6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.2727 13.5904L19.9243 10.9388C20.768 10.0948 21.2419 8.95028 21.2418 7.75694C21.2417 6.5636 20.7676 5.41916 19.9238 4.57534C19.0799 3.73152 17.9355 3.25743 16.7422 3.25732C15.5488 3.25722 14.4043 3.73112 13.5603 4.5748L10.9087 7.22645"
                              stroke="#5A42E6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <p style={{color:'#5a42e6',padding:'0px 4px',fontFamily:'"cairoM"'}}>{t('copy')} </p>
                        </>
                      )}
                    </Button>
                  )}
                </CopyButton>
              
                <EmailShareButton
                  style={{
                    background: "rgba(90, 66, 230, 0.35)",
                    width: "40px",
                    height: " 40px",
                    borderRadius: "50%",
                  }}
                  url={window.location.href}
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5 5.25L12.5 13.5L3.5 5.25"
                      stroke="#5A42E6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 5.25H21.5V18C21.5 18.1989 21.421 18.3897 21.2803 18.5303C21.1397 18.671 20.9489 18.75 20.75 18.75H4.25C4.05109 18.75 3.86032 18.671 3.71967 18.5303C3.57902 18.3897 3.5 18.1989 3.5 18V5.25Z"
                      stroke="#5A42E6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.8638 12L3.73145 18.538"
                      stroke="#5A42E6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.2687 18.538L14.1362 11.9999"
                      stroke="#5A42E6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </EmailShareButton>
                <TwitterShareButton
                  style={{
                    background: "rgba(90, 66, 230, 0.35)",
                    width: "40px",
                    height: " 40px",
                    borderRadius: "50%",
                  }}
                  url={window.location.href}
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_89_1795)">
                      <path
                        d="M6.7896 18.1256C14.3368 18.1256 18.4648 11.8728 18.4648 6.45035C18.4648 6.27275 18.4648 6.09595 18.4528 5.91995C19.2559 5.33908 19.9491 4.61986 20.5 3.79595C19.7512 4.12795 18.9567 4.34558 18.1432 4.44155C18.9998 3.92879 19.641 3.1222 19.9472 2.17195C19.1417 2.64996 18.2605 2.98681 17.3416 3.16795C16.7229 2.5101 15.9047 2.07449 15.0135 1.92852C14.1223 1.78256 13.2078 1.93438 12.4116 2.3605C11.6154 2.78661 10.9819 3.46326 10.609 4.28574C10.2361 5.10822 10.1446 6.03067 10.3488 6.91035C8.71741 6.82852 7.12146 6.40455 5.66455 5.66596C4.20763 4.92737 2.9223 3.89067 1.892 2.62315C1.36727 3.52648 1.20656 4.59584 1.44258 5.6135C1.67861 6.63117 2.29362 7.52061 3.1624 8.10075C2.50936 8.08162 1.87054 7.90545 1.3 7.58715V7.63915C1.30026 8.58653 1.62821 9.50465 2.22823 10.2378C2.82824 10.9709 3.66338 11.474 4.592 11.6616C3.9879 11.8263 3.35406 11.8504 2.7392 11.732C3.00151 12.5472 3.51202 13.2602 4.19937 13.7711C4.88671 14.282 5.71652 14.5654 6.5728 14.5816C5.72203 15.2503 4.74776 15.7447 3.70573 16.0366C2.66369 16.3284 1.57435 16.4119 0.5 16.2824C2.37653 17.4865 4.55994 18.1253 6.7896 18.1224"
                        fill="#5A42E6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_89_1795">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </TwitterShareButton>

                <FacebookShareButton
                  style={{
                    background: "rgba(90, 66, 230, 0.35)",
                    width: "40px",
                    height: " 40px",
                    borderRadius: "50%",
                  }}
                  url={window.location.href}
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4941 10.9844L14.9375 8.09375H12.1641V6.21875C12.1641 5.42793 12.5516 4.65625 13.7938 4.65625H15.0547V2.19531C15.0547 2.19531 13.9104 2 12.8162 2C10.532 2 9.03906 3.38438 9.03906 5.89063V8.09375H6.5V10.9844H9.03906V17.9723C10.0744 18.1342 11.1287 18.1342 12.1641 17.9723V10.9844H14.4941Z"
                      fill="#5A42E6"
                    />
                  </svg>
                </FacebookShareButton>

                <LinkedinShareButton
                  style={{
                    background: "rgba(90, 66, 230, 0.35)",
                    width: "40px",
                    height: " 40px",
                    borderRadius: "50%",
                  }}
                  url={window.location.href}
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_89_1788)">
                      <path
                        d="M19.0236 0H1.97639C1.58483 0 1.2093 0.155548 0.932425 0.432425C0.655548 0.709301 0.5 1.08483 0.5 1.47639V18.5236C0.5 18.9152 0.655548 19.2907 0.932425 19.5676C1.2093 19.8445 1.58483 20 1.97639 20H19.0236C19.4152 20 19.7907 19.8445 20.0676 19.5676C20.3445 19.2907 20.5 18.9152 20.5 18.5236V1.47639C20.5 1.08483 20.3445 0.709301 20.0676 0.432425C19.7907 0.155548 19.4152 0 19.0236 0ZM6.46111 17.0375H3.45417V7.48611H6.46111V17.0375ZM4.95556 6.1625C4.61447 6.16058 4.2816 6.05766 3.99895 5.86674C3.71629 5.67582 3.49653 5.40544 3.3674 5.08974C3.23826 4.77404 3.20554 4.42716 3.27336 4.09288C3.34118 3.7586 3.5065 3.4519 3.74846 3.21148C3.99042 2.97107 4.29818 2.80772 4.63289 2.74205C4.9676 2.67638 5.31426 2.71133 5.62913 2.84249C5.94399 2.97365 6.21295 3.19514 6.40205 3.47901C6.59116 3.76288 6.69194 4.09641 6.69167 4.4375C6.69488 4.66586 6.65209 4.89253 6.56584 5.104C6.47959 5.31547 6.35165 5.50742 6.18964 5.66839C6.02763 5.82936 5.83487 5.95607 5.62285 6.04096C5.41083 6.12585 5.18389 6.16718 4.95556 6.1625ZM17.5444 17.0458H14.5389V11.8278C14.5389 10.2889 13.8847 9.81389 13.0403 9.81389C12.1486 9.81389 11.2736 10.4861 11.2736 11.8667V17.0458H8.26667V7.49306H11.1583V8.81667H11.1972C11.4875 8.22917 12.5042 7.225 14.0556 7.225C15.7333 7.225 17.5458 8.22083 17.5458 11.1375L17.5444 17.0458Z"
                        fill="#5A42E6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_89_1788">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalJop;
