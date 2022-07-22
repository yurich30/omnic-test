enum ViewModeWidth {
  UL = '2560px',
  XXL = '1920px',
  XL = '1440px',
  LG = '1024px',
  MD = '768px',
  SM = '576px',
}

const ViewModeQueries = {
  UL: `@media screen and (min-width: ${ViewModeWidth.UL})`,
  XXL: `@media screen and (min-width: ${ViewModeWidth.XXL})`,
  XL: `@media screen and (min-width: ${ViewModeWidth.XL})`,
  LG: `@media screen and (min-width: ${ViewModeWidth.LG})`,
  MD: `@media screen and (min-width: ${ViewModeWidth.MD})`,
  SM: `@media screen and (min-width: ${ViewModeWidth.SM})`,
};

export { ViewModeWidth, ViewModeQueries };
