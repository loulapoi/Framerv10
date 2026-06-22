// Vendored assets (downloaded from the original CDN, served locally — no
// external Framer dependency). Vite resolves each import to a hashed URL.

import heroClouds from "./img/R0WVtWCpzNL81eNF5wrZjUj7s0k.png";
import noiseTexture from "./img/c0EZxtMucSR6UOSZk2TBnWsqr4.svg";
import dotGrid from "./img/27lPwr6m0qWCWuTd76MieCfLWY.svg";

// Hero floating device mockups
import mockCraftwork from "./img/5iN7U2aBhjLTWrj9GcVLbdWdM.png";
import mockPhoneNormal from "./img/F9D2Bc3gYhXliacAJWbe37L0c.png";
import mockLaptopPurple from "./img/ExvGJwx64OaoadSMUaTXBxaIi0c.png";
import mockPhoneRed from "./img/pdHyNqlC3Loy1vqH4foQ1EZjGE.png";

// Hero avatar stack ("Trusted by 20+ startups")
import avatarA from "./img/Ky8xfxIZ6aXUUztI3YWXxaM.jpg";
import avatarB from "./img/Zu6jmD875NxsjkddSfFYNl6eQ.jpg";
import avatarC from "./img/i7AAfGuAMw3i2nhPsu8bHkvt2wk.jpg";
import avatarD from "./img/kGbwa4d6dl3T9qSyfhfxB8oHqp4.jpg";

// Testimonials avatars
import tJustin from "./img/4GF8hHrdCKKuVMMFd2wzNCjt7I.jpg";
import tAlex from "./img/Ka93pnMawHbTEI3Xk0jbAEMGA.png";
import tMaria from "./img/XhltYKhgeRIZ6l505C6atZLgfQ.jpg";
import tMario from "./img/g69OA5gxAYloVL4esBLgfheo16E.jpg";

// About — intro video
import introVideo from "./img/ISOAc1XQFodQ4YiBPHcTgcDiA.mp4";

// Projects
import projMango from "./img/DjGUKddyhdSMLU0vzhujXPaTqM.png";
import projApex from "./img/PY8ILFxjRQqfBhycPaJ0bfXXM.png";
import projKlara from "./img/1pyArhiW06CK6xkPCSZJ86VsoWQ.png";

// Niches line illustrations
import nicheArt1 from "./img/6lsnsiAWHS4QoyVrh7XvhVcho.png";
import nicheArt2 from "./img/zuEM7Xh9zaRwQ45Lt9zb4TQ7nmA.png";

// Services decorative sky
import skyBright from "./img/9CeMb4yS5PIWXOlmnj19FxskbI.jpg";

// Process step media
import procCall from "./img/cpjcIAk6SUY4MNtCFmARt39GE.jpg";
import procTasks from "./img/zq7QtP9hFr1YoxwqvyBK347hmOU.png";
import procDelivered from "./img/SDClsycPINLXLnLYp8aCQcltQ.jpg";

// Pricing
import iconBolt from "./img/g7FGco3H3PWTQHn77dZRjCJu2o.png";
import iconBoltAlt from "./img/zZWP01APQrzMSjsmbsEQ7gmlMc.png";
import iconFlame from "./img/Bf9cR6KI6FOigekK4ajsxBgupxY.png";
import pricingAvatar from "./img/zkCN9kQZ8vIkVGP32aVOxI9eM.jpg";

// Footer
import peaceMark from "./img/IHpfgTI9lpH77QoYVkDYROWso.png";

export const assets = {
  heroClouds,
  noiseTexture,
  dotGrid,
  mockCraftwork,
  mockPhoneNormal,
  mockLaptopPurple,
  mockPhoneRed,
  avatarA,
  avatarB,
  avatarC,
  avatarD,
  tJustin,
  tAlex,
  tMaria,
  tMario,
  introVideo,
  projMango,
  projApex,
  projKlara,
  nicheArt1,
  nicheArt2,
  skyBright,
  procCall,
  procTasks,
  procDelivered,
  iconBolt,
  iconBoltAlt,
  iconFlame,
  pricingAvatar,
  peaceMark,
};

export type AssetKey = keyof typeof assets;
