import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";
import SectionTitle from "../common/SectionTitle";
import AntalyaElmali1Card from "./AntalyaElmali1Card";
import { Link } from "react-router-dom";

function LetoonBeige() {
  const { t } = useTranslation();

  return (
    <SRLWrapper>
      <section
        className="text-center ocaklarimiz"
        style={{ marginTop: "7rem", padding: "0rem 3rem 3rem 3rem" }}
        id="letoonbeige"
      >
        <div className="container">
          <SectionTitle title={t("OCAKLARIMIZ")} />
        </div>

        <div className="row">
          <div className="col-sm-3">
            <div className="btn-group-vertical">
              <h6 className="dropdown-item1 rounded-pill p-3" as={Link} to="#">
                {t("Antalya Elmalı-2")}
              </h6>

              <Link
                as={Link}
                to="/cremamontanabeige"
                className="dropdown-item bg-secondary text-white rounded-pill p-2 mb-1"
              >
                {t("Crema Montana")}
              </Link>
              <Link
                as={Link}
                to="/letoonbeige"
                className="dropdown-item bg-secondary text-white rounded-pill p-2 mb-1"
              >
                {t("Letoon Beige")}
              </Link>
              <Link
                as={Link}
                to="/shandianbeige"
                className="dropdown-item bg-secondary text-white rounded-pill p-2 mb-1"
              >
                {t("Shandian Beige")}
              </Link>
            </div>
          </div>

          <div className="col-sm-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col-md-6">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-1.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-6">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-2.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>
            </div>

            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-3.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-4.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-5.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-6.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-7.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-8.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-9.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-10.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-11.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-12.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-13.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-14.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Letoon-15.webp"
                  title={t("Letoon Beige Blocks")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SRLWrapper>
  );
}

export default LetoonBeige;
