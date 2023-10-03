import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import SectionTitle from "../common/SectionTitle";
import AntalyaElmali1Card from "./AntalyaElmali1Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BalikesirWhiteRiver() {
  const { t } = useTranslation();

  return (
    <SRLWrapper>
      <section className="text-center ocaklarimiz" style={{marginTop:"7rem" , padding:"0rem 3rem 3rem 3rem"}} id="balikesirwhiteriver">
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
                {t("Balıkesir White River")}
              </h6>

              <Link
                as={Link}
                to="/balikesirwhiteriver"
                className="dropdown-item bg-secondary text-white rounded-pill p-2 mb-1"
              >
                {t("White River")}
              </Link>
            </div>
          </div>

          <div className="col-sm-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col-md-6">
                <AntalyaElmali1Card
                  picture="/assets/img/White-River-1.webp"
                  title={t("White River")}
                />
              </div>

              <div className="col-md-6">
                <AntalyaElmali1Card
                  picture="/assets/img/White-River-2.webp"
                  title={t("White River")}
                />
              </div>
            </div>

            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/White-River-3.webp"
                  title={t("White River")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/White-River-4.webp"
                  title={t("White River")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/White-River-5.webp"
                  title={t("White River")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/White-River-6.webp"
                  title={t("White River")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/White-River-7.webp"
                  title={t("White River")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/White-River-8.webp"
                  title={t("White River")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/White-River-9.webp"
                  title={t("White River")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SRLWrapper>
  );
}

export default BalikesirWhiteRiver;
