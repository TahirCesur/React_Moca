/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer-bg">
        <div className="custom-shape-divider-top-1668902699">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="footer-upper">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="footer-content-item">
                  <div className="footer-details">
                    <div className="footer-logo"></div>
                    <ul className="footer-details footer-list">
                      <h3 className="logofamily">
                        <i className="fas fa-diamond"></i> {t("MOCA Mermer")}
                      </h3>
                      <hr />
                      <p>
                        {t(
                          "Moca Mermer Sanayi Tic. Ltd. Şti olarak nihai hedefimiz; diğer firmalarımızın üretmiş olduğu mermer blokları kaliteden ödün vermeden güvenilir ve hızlı bir şekilde sizlere ulaştırmaktır..."
                        )}
                      </p>
                      <div className="social">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              href="https://www.facebook.com/surkay.marble"
                              target="_blank"
                              title="Facebook"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="https://www.youtube.com/channel/UCpKorXDwqZ1ak4Ccf0ziDYA"
                              target="_blank"
                              title="Youtube"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="https://www.google.com.tr/?hl=tr"
                              target={"_blank"}
                              title="Google"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="footer-content-list footer-content-item">
                  <ul className="footer-details footer-list">
                    <h3>{t("Kurumsal")}</h3>
                    <hr />
                    <li>
                      <Link
                        to="/"
                        style={{ textDecoration: "none" }}
                        onClick={scrollToTop}
                      >
                        {t("Ana Sayfa")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/hakkimizda"
                        style={{ textDecoration: "none" }}
                        onClick={scrollToTop}
                      >
                        {t("Hakkımızda")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ocaklarimiz"
                        style={{ textDecoration: "none" }}
                        onClick={scrollToTop}
                      >
                        {t("Ocaklarımız")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/urunlerimiz"
                        style={{ textDecoration: "none" }}
                        onClick={scrollToTop}
                      >
                        {t("Ürünlerimiz")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/iletisim"
                        style={{ textDecoration: "none" }}
                        onClick={scrollToTop}
                      >
                        {t("İletişim")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="footer-content-list footer-content-item">
                  <ul className="footer-details footer-list">
                    <h3>{t("Adres")}</h3>
                    <hr />
                    <li>
                      {t("Adres")}:
                      <span>
                        &nbsp;Esentepe Mah. 1.Gaye Sok. Doruk-Olgu Apt. No:2
                        16130 <br />
                        <br />
                        Osmangazi / BURSA /{t("TÜRKİYE")}
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <a
                        target="_blank"
                        href="mailto:bilgi@mocastone.com.tr"
                        title="Mail"
                      >
                        <span>&nbsp;&nbsp;bilgi@mocastone.com.tr</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-mobile"></i>
                      <a href="tel:(+90)2242493435">
                        <span>&nbsp;(+90) 224 249 34 35</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-lower mt-0">
          <div className="footer-lower-item">
            <p className="text-white m-2">
              {t("Tüm Hakları Saklıdır")} | MOCA Mermer ©2022
            </p>
          </div>
        </div>
      </footer>

      <button
        style={{
          position: "fixed",
          bottom: "15px",
          left: "15px",
          backgroundColor: "#a79682",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          fontSize: "24px",
          width: "40px",
          height: "40px",
        }}
        title={t("Yukarı Çık")}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </>
  );
}
export default Footer;
