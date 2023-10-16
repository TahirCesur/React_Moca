import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import ProductOne from "./ProductOne";
import data from "../../data/product.json";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../common/SectionTitle";
import { useTranslation } from "react-i18next";

function Product() {
  const { t } = useTranslation();
  return (
    <SRLWrapper>
      <section className="text-center urunlerimiz" style={{marginTop:"7rem" , padding:"0rem 3rem 3rem 3rem"}} id="urunlerimiz">
        <div className="container">
          <SectionTitle title={t("ÜRÜNLERİMİZ")} />

          <Row>
            {data.map((product) => {
              const { picture, nav, id } = product;
              const title = t(product.title);
              const desc = t(product.desc);

              return (
                <Col md={3} key={id} className="text-center mb-5">
                  <ProductOne
                    picture={picture}
                    title={title}
                    desc={desc}
                    nav={nav}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </SRLWrapper>
  );
}

export default Product;
