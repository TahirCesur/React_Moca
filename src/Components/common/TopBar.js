/* eslint-disable no-unused-vars */
import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../../Ass/style.css";

const TopBar = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="topbar fixed-top header-inner-pages">
      <Container>
        <Button
        className="mocabutton"
          onClick={() => {
            changeLanguage("tr");
          }}
        >
          {t("TR")}
        </Button>
        &nbsp;&nbsp;
        <Button
        className="mocabutton"
          onClick={() => {
            changeLanguage("en");
          }}
        >
          {t("EN")}
        </Button>
      </Container>
    </div>
  );
};

export default TopBar;