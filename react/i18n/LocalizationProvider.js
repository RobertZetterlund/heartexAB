import React from 'react';
import { withTranslation } from 'react-i18next';
import '../i18n';
import LocalizationContext from "./LocalizationContext";

class LocalizationProvider extends React.Component {
  
  render() {
    const { t, i18n, children } = this.props;
     return (
      <LocalizationContext.Provider value={{ t, i18n }}>
        { children }
      </LocalizationContext.Provider>
    )
  }
}

export default withTranslation()(LocalizationProvider);