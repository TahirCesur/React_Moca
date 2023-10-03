import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import SectionTitle from "../common/SectionTitle";
import AntalyaElmali1Card from "./AntalyaElmali1Card";
import { Link } from "react-router-dom";

function LightEmperador() {
  const { t } = useTranslation();

  return (
    <SRLWrapper>
      <section
        className="text-center ocaklarimiz"
        style={{ marginTop: "7rem", padding: "0rem 3rem 3rem 3rem" }}
        id="bursaorhaneli"
      >
        <div className="container">
          <SectionTitle title={t("OCAKLARIMIZ")} />
        </div>

        <div className="row">
          <div className="col-sm-3">
            <div className="btn-group-vertical">
              <h6 className="dropdown-item1 rounded-pill p-3" as={Link} to="#">
                {t("Bursa Orhaneli")}
              </h6>

              <Link
                as={Link}
                to="/lightemperador"
                className="dropdown-item bg-secondary text-white rounded-pill p-2 mb-1"
              >
                {t("Light Emperador")}
              </Link>
            </div>
          </div>

          <div className="col-sm-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col-md-6">
                <AntalyaElmali1Card
                  picture="/assets/img/Burç LE-Blocks-1.webp"
                  title={t("Light Emperador Blocks")}
                />
              </div>

              <div className="col-md-6">
                <AntalyaElmali1Card
                  picture="/assets/img/Burç LE-Slabs-1.webp"
                  title={t("Light Emperador Slabs")}
                />
              </div>
            </div>

            <br />

            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Burç LE-Blocks-2.webp"
                  title={t("Light Emperador Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Burç LE-Blocks-3.webp"
                  title={t("Light Emperador Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Burç LE-Blocks-4.webp"
                  title={t("Light Emperador Blocks")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Burç LE-Slabs-2.webp"
                  title={t("Light Emperador Slabs")}
                />
              </div>

              <div className="col-md-4">
                <AntalyaElmali1Card
                  picture="/assets/img/Burç LE-Slabs-3.webp"
                  title={t("Light Emperador Slabs")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SRLWrapper>
  );
}

export default LightEmperador;
