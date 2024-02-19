import { useTranslations } from "next-intl";
import "./globals.css";


export default function Home(params) {

  const t = useTranslations('home');
  return (
    <main>
     
      <section className="header">
        <div className="con">
          <div className="content">
            <img src="/images/luggage.png" className="img img1" alt="luggage" />
            <img src="/images/wifi.png" className="img img2" alt="luggage" />
            <img
              src="/images/bluetooth.png"
              className="img img3"
              alt="luggage"
            />
            <img src="/images/food.png" className="img img4" alt="luggage" />
            <img src="/images/cable.png" className="img img5" alt="luggage" />
            <img src="/images/massage.png" className="img img6" alt="luggage" />
            <img src="/images/music.png" className="img img7" alt="luggage" />
            <img src="/images/smoking.png" className="img img8" alt="luggage" />
            <h1>
             {t("about.title1")}<br />
              <span> {t("about.title2")}</span>
            </h1>
            <p>
            {t("about.dec")}
            </p>
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
                <p>{t("ad.hotelsdec")}  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app">
        <div className="con">
          <div className="content">
            <div className="part1">
              <img src="/images/AppImg.png" alt="app" />
            </div>
            <div className="part2">
              <h2>{t("app.title")}!</h2>
              <p>
               {t("app.dec")}
              </p>
              <ul>
                <li>
                  <a href="">
                    <div className="dec">
                      <p>
                        تحميل من متجر
                        <br />
                        <span>Google Play </span>
                      </p>
                    </div>
                    <svg
                      width="36"
                      height="38"
                      viewBox="0 0 36 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_429_2)">
                        <path
                          d="M19.4614 18.1894L25.7233 11.9468L5.49765 0.614392C4.15718 -0.107608 2.90141 -0.208941 1.80023 0.580615L19.4614 18.1894ZM26.7906 25.4981L33.3002 21.8479C34.5708 21.1386 35.2675 20.1337 35.2675 19.0191C35.2675 17.9065 34.5708 16.8995 33.3023 16.1902L27.4089 12.8905L20.7744 19.5025L26.7906 25.4981ZM0.711764 2.11539C0.576235 2.53128 0.5 2.99573 0.5 3.5045V34.5484C0.5 35.3527 0.677882 36.0452 0.999765 36.5962L18.1464 19.5004L0.711764 2.11539ZM19.4614 20.8093L2.41012 37.8101C2.73624 37.9346 3.08776 38.0001 3.45835 38.0001C4.11906 38.0001 4.80729 37.8058 5.50823 37.4174L25.1071 26.446L19.4614 20.8093Z"
                          fill="#5A42E6"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_429_2">
                          <rect
                            width="35"
                            height="38.0001"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="dec">
                      <p>
                        تحميل من متجر
                        <br />
                        <span>App Store </span>
                      </p>
                    </div>
                    <svg
                      width="34"
                      height="38"
                      viewBox="0 0 34 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.0897 20.0817C28.0708 16.9669 29.5296 14.6194 32.4755 12.8884C30.8279 10.6049 28.3352 9.34892 25.0494 9.10686C21.9382 8.86937 18.5343 10.8606 17.288 10.8606C15.9708 10.8606 12.9588 9.18907 10.5888 9.18907C5.69785 9.26214 0.5 12.9615 0.5 20.4881C0.5 22.7123 0.920172 25.0096 1.76051 27.3754C2.88412 30.4902 6.93476 38.1218 11.1601 37.9985C13.3695 37.9483 14.9322 36.4822 17.8073 36.4822C20.5974 36.4822 22.0421 37.9985 24.5064 37.9985C28.7695 37.9391 32.433 31.0017 33.5 27.8778C27.7828 25.2699 28.0897 20.2415 28.0897 20.0817ZM23.1279 6.15192C25.5215 3.40251 25.3043 0.899725 25.2335 0C23.1185 0.118745 20.673 1.39297 19.2803 2.9595C17.7459 4.6402 16.8442 6.71825 17.0378 9.06118C19.3227 9.23017 21.4094 8.09295 23.1279 6.15192Z"
                        fill="#5A42E6"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="con">
          <div className="content">
            <h2> {t("who.title1")}</h2>
            <h3>
              {t("who.dec")}
            </h3>
            <h4> {t("who.title2")}</h4>
            <div className="join">
              <a href="" className="joinTeam">
               {t("who.joinTime")}
              </a>
              <a href="" className="joinCapt">
                {t("who.joinCap")}
              </a>
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
            <img src="/images/location.png" alt="" />
          </div>
        </div>
      </section>
      <section className="questions">
        <div className="con">
          <div className="content">
            <h2>{t("qui.title")}</h2>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    مثال لمحتوي قائمة منسدلة رقم واحد
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                      هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                      الحروف التى يولدها التطبيق. ومن هنا وجب على المصمم أن يضع
                      نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد
                      النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا
                      علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
                      يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة
                      فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
                      مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    مثال لمحتوي قائمة منسدلة رقم أثنين
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      {" "}
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                      هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                      الحروف التى يولدها التطبيق. ومن هنا وجب على المصمم أن يضع
                      نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد
                      النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا
                      علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
                      يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة
                      فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
                      مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    مثال لمحتوي قائمة منسدلة رقم ثلاثة
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      {" "}
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                      هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                      الحروف التى يولدها التطبيق. ومن هنا وجب على المصمم أن يضع
                      نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد
                      النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا
                      علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
                      يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة
                      فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
                      مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    مثال لمحتوي قائمة منسدلة رقم أربعة
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      {" "}
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                      هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                      الحروف التى يولدها التطبيق. ومن هنا وجب على المصمم أن يضع
                      نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد
                      النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا
                      علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
                      يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة
                      فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
                      مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
