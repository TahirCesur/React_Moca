import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import ProductOne from "./ProductOne";
import SectionTitle from "../common/SectionTitle";
import { useTranslation } from "react-i18next";

function Product() {
  const { t } = useTranslation();
  return (
    <SRLWrapper>
      <section className="text-center urunlerimiz" style={{marginTop:"7rem" , padding:"0rem 3rem 3rem 3rem"}} id="urunlerimiz">
        <div className="container">
          <SectionTitle title={t("ÜRÜNLERİMİZ")} />

          <div className="row">
            <div className="col-md-3">
              <ProductOne
                picture="/assets/img/Cosmos-Beige.webp"
                title="Cosmos Beige"
              />
            </div>

            <div className="col-md-3">
              <ProductOne
                picture="/assets/img/Elmalı Cloudy Beige Slabs-6.webp"
                title="Cloudy Beige"
              />
            </div>

            <div className="col-md-3">
              <ProductOne
                picture="/assets/img/Baiyulan.webp"
                title="Baiyulan"
              />
            </div>

            <div className="col-md-3">
              <ProductOne
                picture="/assets/img/Crema-Montana.webp"
                title="Crema Montana"
              />
            </div>

            <div className="col-md-3">
              <ProductOne
                picture="/assets/img/Elmalı Letoon-15.webp"
                title="Letoon Beige"
              />
            </div>

            <div className="col-md-3">
              <ProductOne
                picture="/assets/img/Elmalı Shandian Slaps-1.webp"
                title="Shandian"
              />
            </div>

            <div className="col-md-3">
              <ProductOne
                picture="/assets/img/Light Emperador.webp"
                title="Light Emperador"
              />
            </div>

            <div className="col-md-3">
              <ProductOne
                picture="/assets/img/White-River.webp"
                title="White River"
              />
            </div>
          </div>
        </div>
      </section>
    </SRLWrapper>
  );
}

export default Product;
