const basePath =
  process.env.NODE_ENV === "production" ? "/tacos-valle-web" : "";

const SOCIAL_LINKS = {
  FACEBOOK: "https://www.facebook.com/tttttdv",
  INSTAGRAM: "https://www.instagram.com/tacosdelvalle",
  TIKTOK: "https://www.tiktok.com/@tacos.delvalle",
};

const LINKS = {
  MENU: "https://drive.google.com/file/d/161W8El6JeQlMk8Md-xxvyFn85FI1cNm-/view?usp=sharing",
  RAPPI: "",
  PEDIDOS_A_DOMICILIO: "",
  PICK_GO: "",
  MICHELIN_GUIDE:
    "https://guide.michelin.com/mx/es/ciudad-de-mexico/cuauhtemoc_1995126/restaurante/tacos-del-valle",
};

const TAGLINE_INFO = [
  {
    image: "tagline3.png",
    name: "TIJUANITA",
    description:
      "Tortilla (harina o maíz), costra de queso, carne asada, aguacate & papa rallada dorada.",
  },
  {
    image: "tagline4.png",
    name: "TROMPO ORDEN MIXTA",
    description: "Orden de 3 tacos con 1 pza de cada trompo de la casa.",
  },
  {
    image: "tagline2.png",
    name: "TOSTADA DE LA SECU",
    description:
      "Tostada roja con base de frijoles chinitos, carne asada, ensaladilla de col con salsa verde.",
  },
  {
    image: "tagline1.png",
    name: "FLAUTAS DE PAPA",
    description:
      "Flautas rellenas con puré de papa especial de la casa, bañadas con salsa cremosa de aguacate.",
  },
];

const SUCURSALES_INFO = [
  {
    nombre: "Centrito Valle",
    calle: "Río Tamazunchale",
    numero: "#280",
    colonia: "CENTRITO VALLE",
    cp: "66220",
    ciudad: "S.P.G.G",
    link: "https://maps.app.goo.gl/1PAZXAVjuxwNeXM36",
  },
  {
    nombre: "Pasaje Parián",
    calle: "Álvaro Obregón",
    numero: "#130",
    colonia: "ROMA NORTE",
    cp: "06700",
    ciudad: "CDMX",
    link: "https://maps.app.goo.gl/cQz7L489LWN8R5NP8",
  },
];

const FRASES = [
  "Tacos buenos y ricos.",
  "El taco, como debe ser.",
  "Los de siempre.",
  "El taco estrella de Monterrey.",
];

export { basePath, SOCIAL_LINKS, LINKS, TAGLINE_INFO, SUCURSALES_INFO, FRASES };
