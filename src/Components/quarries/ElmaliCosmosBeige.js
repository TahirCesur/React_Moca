import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import SectionTitle from "../common/SectionTitle";
import AntalyaElmali1Card from "./AntalyaElmali1Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ElmaliCosmosBeige() {
  const { t } = useTranslation();

  return (
    <SRLWrapper>
      <section
        className="text-center ocaklarimiz"
        style={{ marginTop: "7rem", padding: "0rem 3rem 3rem 3rem" }}
        id="elmalicosmosbeige"
      >
        <div className="container">
          <SectionTitle title={t("OCAKLARIMIZ")} />
        </div>

        <div className="row">
          <div className="col-sm-3">
            <div className="btn-group-vertical">
              <h6
                className="dropdown-item1 rounded-pill p-3"
                Link
                as={Link}
                to="#"
              >
                {t("Antalya Elmalı-1")}
              </h6>

              <Link
                as={Link}
                to="/elmalicosmosbeige"
                className="dropdown-item bg-secondary text-white rounded-pill p-2 mb-1"
              >
                {t("Cosmos Beige")}
              </Link>
              <Link
                as={Link}
                to="/elmalicloudybeige"
                className="dropdown-item bg-secondary text-white rounded-pill p-2 mb-1"
              >
                {t("Cloudy Beige")}
              </Link>
              <Link
                as={Link}
                to="/elmalibaiyulan"
                className="dropdown-item bg-secondary text-white rounded-pill p-2 mb-1"
              >
                {t("Elmalı Baıyulan")}
              </Link>
            </div>
          </div>

          <div className="col-sm-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col-md-6">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Blocks-1.webp"
                  title={t("Cosmos Beige Blocks")}
                />
              </div>

              <div className="col-md-6">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Slabs-1.webp"
                  title={t("Cosmos Beige Slabs")}
                />
              </div>
            </div>

            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Blocks-2.webp"
                  title={t("Cosmos Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Blocks-33.webp"
                  title={t("Cosmos Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Blocks-4.webp"
                  title={t("Cosmos Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Blocks-5.webp"
                  title={t("Cosmos Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Blocks-6.webp"
                  title={t("Cosmos Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Blocks-7.webp"
                  title={t("Cosmos Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Blocks-8.webp"
                  title={t("Cosmos Beige Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Slabs-2.webp"
                  title={t("Cosmos Beige Slabs")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Slabs-3.webp"
                  title={t("Cosmos Beige Slabs")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Slabs-4.webp"
                  title={t("Cosmos Beige Slabs")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Slabs-5.webp"
                  title={t("Cosmos Beige Slabs")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Slabs-6.webp"
                  title={t("Cosmos Beige Slabs")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Slabs-7.webp"
                  title={t("Cosmos Beige Slabs")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Slabs-8.webp"
                  title={t("Cosmos Beige Slabs")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Slabs-9.webp"
                  title={t("Cosmos Beige Slabs")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Elmalı Cosmos Beige Slabs-10.webp"
                  title={t("Cosmos Beige Slabs")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SRLWrapper>
  );
}

export default ElmaliCosmosBeige;
