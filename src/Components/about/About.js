/* eslint-disable no-unreachable */
import React from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../common/SectionTitle";

function About() {
  const { t } = useTranslation();

  return (
    <section
      className="text-center hakkimizda"
      style={{ marginTop: "7rem", padding: "0rem 3rem 3rem 3rem" }}
      id="hakkimizda"
    >
      <div className="container">
        <SectionTitle title={t("HAKKIMIZDA")} />

        <div className="row">
          <div className="col-sm-6 mb-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-header">{t("Hedefimiz")}</h5>
                <br />
                <p className="mb-4">
                  {t(
                    "Moca Mermer Sanayi Tic. Ltd. Şti olarak nihai hedefimiz ; diğer firmalarımızın üretmiş olduğu mermer blokları kaliteden ödün vermeden güvenilir ve hızlı bir şekilde sizlere ulaştırmaktır..."
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-header">{t("Misyonumuz & Vizyonumuz")}</h5>

                <br />
                <p className="mb-4">
                  {t(
                    "Bulunamayan ve görülmeyen en güzel ürünleri sizlere ulaştırmak..."
                  )}
                  <br />&<br />
                  {t(
                    "Ortaya çıkaracaklarımızla merakınızı uyandıran bir şirket olmak..."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
