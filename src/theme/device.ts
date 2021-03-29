export const deviceSize = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  mobile: `(min-width: ${deviceSize.mobile})`,
  tablet: `(min-width: ${deviceSize.tablet})`,
  laptop: `(min-width: ${deviceSize.laptop})`,
  laptopL: `(min-width: ${deviceSize.laptopL})`,
};
