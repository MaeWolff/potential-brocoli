enum DeviceSize {
  mobileS = "320px",
  mobileM = "375px",
  mobileL = "425px",
  tablet = "768px",
  laptop = "1024px",
  laptopL = "1440px",
  desktop = "1920px",
  desktopL = "2560px",
}

export const device = {
  mobileS: `(min-width: ${DeviceSize.mobileS})`,
  mobileM: `(min-width: ${DeviceSize.mobileM})`,
  mobileL: `(min-width: ${DeviceSize.mobileL})`,
  tablet: `(min-width: ${DeviceSize.tablet})`,
  laptop: `(min-width: ${DeviceSize.laptop})`,
  laptopL: `(min-width: ${DeviceSize.laptopL})`,
  desktop: `(min-width: ${DeviceSize.desktop})`,
  desktopL: `(min-width: ${DeviceSize.desktopL})`,
} as const;

export enum ColorEnum {
  black = "black",

  white = "white",

  primary = "primary", // default
  primary100 = "primary100",

  grey = "grey",
}
