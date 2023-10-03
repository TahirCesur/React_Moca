import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

function Slider() {
  const { t } = useTranslation();

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 resimSlider"
          src="/assets/img/Elmalı Marble Quarries 1.webp"
          alt="First slide"
        />

        <Carousel.Caption className="slider carousel-caption d-none d-md-block">
          <h2 className="d-flex justify-content-end">
            {t("ANTALYA ELMALI MERMER OCAKLARI-1")}
          </h2>
          <p className="d-flex justify-content-end">
            {t("TAŞTAKİ UZMANLIĞIN ADRESİ (since 1975).")}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 resimSlider"
          src="/assets/img/Elmalı Marble Quarries2-4.webp"
          alt="Second slide"
        />

        <Carousel.Caption className="slider carousel-caption d-none d-md-block">
          <h2 className="d-flex justify-content-end">
            {t("ANTALYA ELMALI MERMER OCAKLARI-2")}
          </h2>
          <p className="d-flex justify-content-end">
            {t("TAŞTAKİ UZMANLIĞIN ADRESİ (since 1975).")}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 resimSlider"
          src="/assets/img/Burç-Light-Emperadror-Quarries.webp"
          alt="Third slide"
        />

        <Carousel.Caption className="slider carousel-caption d-none d-md-block">
          <h2 className="d-flex justify-content-end">
            {t("BURSA BURÇ LIGHT EMPERADOR OCAĞI")}
          </h2>
          <p className="d-flex justify-content-end">
            {t("TAŞTAKİ UZMANLIĞIN ADRESİ (since 1975).")}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
