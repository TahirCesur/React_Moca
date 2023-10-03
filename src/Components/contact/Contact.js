/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useTranslation } from "react-i18next";
import ContactWay from "./ContactWay";
import SectionTitle from "../common/SectionTitle";

function Contact() {
  const { t } = useTranslation();

  return (
    <section
      className="text-center iletisim"
      style={{ marginTop: "8rem" }}
      id="iletisim"
    >
      <div className="container">
        <SectionTitle title={t("İLETİŞİM")} />

        <div className="card-group">
          <ContactWay
            city1={t("Antalya")}
            quarries={t("Elmalı")}
            address={t("Antalya Elmalı Madencilik Ocakları 1 ve 2. Ocak Yolu")}
            city2={t("Elmalı/ANTALYA")}
            picture="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.2758107611694!2d29.91373420813722!3d36.93157590514206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c16c10675f69f3%3A0x93b6a7bdb165b1a4!2sELMALI%20MARBLE%20QUARRIES%201!5e0!3m2!1str!2str!4v1658957892705!5m2!1str!2str"
          />

          <ContactWay
            city1={t("Bursa")}
            quarries={t("Orhaneli")}
            address={t(
              "Burç Madencilik Bursa Orhaneli Light Emperador Ocağı Yolu"
            )}
            city2={t("Orhaneli/BURSA")}
            picture="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14808.532909674219!2d28.92234004041176!3d40.058818345769865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1da53f2980cb%3A0x1863037c33a2daec!2zQnVyw6cgTWFkZW5jaWxpayBMdGQuIMWedGkuIEVtcGVyYWRvciBPY2HEn8Sx!5e0!3m2!1str!2str!4v1658957541127!5m2!1str!2str"
          />

          <ContactWay
            city1={t("Balıkesir")}
            quarries={t("White River")}
            address={t("Sürkay Madencilik Balıkesir White River Ocağı Yolu")}
            city2={t("Susurluk/BALIKESİR")}
            picture="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.651122107639!2d28.923415315385164!3d40.060885979408035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zNDDCsDAzJzM5LjIiTiAyOMKwNTUnMzIuMiJF!5e0!3m2!1str!2str!4v1650570625648!5m2!1str!2str "
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
