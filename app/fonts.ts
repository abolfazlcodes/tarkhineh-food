import localFont from "next/font/local";

const EstedadFD = localFont({
  variable: "--font-estedad-fd",
  src: [
    {
      path: "../public/fonts/estedad-fd/Estedad-FD-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/estedad-fd/Estedad-FD-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/estedad-fd/Estedad-FD-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/estedad-fd/Estedad-FD-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/estedad-fd/Estedad-FD-ExtraBold.woff2",
      weight: "800",
    },
  ],
});

export { EstedadFD };
