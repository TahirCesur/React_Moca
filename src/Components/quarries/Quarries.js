import React from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../common/SectionTitle";
import QuarriesCard from "./QuarriesCard";

function Quarries() {
  const { t } = useTranslation();

  return (
    <section
      className="p-5 text-center ocaklarimiz"
      id="ocaklarimiz"
      style={{ marginBottom: "-20px" }}
    >
      <div className="container">
        <SectionTitle title={t("OCAKLARIMIZ")} />
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col mb-4">
          <QuarriesCard
            link="/antalyaelmali1"
            title={t("ANTALYA ELMALI - 1")}
            picture="/assets/img/Elmalı Marble Quarries 1.webp"
            company="Elmalı Madencilik İnş. Ltd. Şti."
          />
        </div>

        <div className="col mb-4">
          <QuarriesCard
            link="/antalyaelmali2"
            title={t("ANTALYA ELMALI - 2")}
            picture="/assets/img/Elmalı Marble Quarries2-4.webp"
            company="Elmalı Madencilik İnş. Ltd. Şti."
          />
        </div>

        <div className="col mb-4">
          <QuarriesCard
            link="/bursaorhaneli"
            title={t("BURSA ORHANELİ")}
            picture="/assets/img/Burç-Light-Emperadror-Quarries.webp"
            company="Burç Madencilik Ltd. Şti."
          />
        </div>

        <div className="col">
          <QuarriesCard
            link="/balikesirwhiteriver"
            title={t("BALIKESİR WHITE RIVER")}
            picture="/assets/img/soon.webp"
            company="Sürkay Madencilik Ltd. Şti."
          />
        </div>
      </div>
    </section>
  );
}

export default Quarries;
