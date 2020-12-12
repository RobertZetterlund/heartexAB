import React from "react";
import { withTranslation } from "react-i18next";
import "./i18n.js";
import LocalizationContext from "./LocalizationContext";

const LocalizationProvider = (props) => {
  const { t, i18n, children } = props;
  return (
    <LocalizationContext.Provider value={{ t, i18n }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export default withTranslation()(LocalizationProvider);
