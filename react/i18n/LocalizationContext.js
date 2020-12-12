import React from "react";
const LocalizationContext = React.createContext({
    t: (key, data) => {},
    i18n: {}
});
export default LocalizationContext;