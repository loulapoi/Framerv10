var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/NYLxm1gkc9tpa170cTZF/7IkKSXZXENiroDO2Iv0G/NUitZxeqv.js
import { jsx as _jsx6, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts5, addPropertyControls as addPropertyControls6, ComponentViewportProvider, ControlType as ControlType9, cx as cx5, forwardLoader, getFonts, getFontsFromSharedStyle as getFontsFromSharedStyle3, getLoadingLazyAtYPosition, Image as Image1, ResolveLinks, RichText as RichText5, SmartComponentScopedContainer, useComponentViewport as useComponentViewport5, useLocaleInfo as useLocaleInfo5, useRouter, useVariantState as useVariantState5, withCSS as withCSS5 } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup5, motion as motion5, MotionConfigContext as MotionConfigContext5 } from "framer-motion";
import * as React8 from "react";
import { useRef as useRef8 } from "react";

// http-url:https://framerusercontent.com/modules/z94odafxDIiKqLDG1zI6/FWeO6mjJXQUADFrpYjGY/Time_Date.js
import { jsx as _jsx } from "react/jsx-runtime";
import * as React3 from "react";
import { addPropertyControls, ControlType as ControlType4 } from "../_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType } from "../_framer-runtime.js";
var fontStack = `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
var containerStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: "rgba(136, 85, 255, 0.3)",
  color: "#85F",
  border: "1px dashed #85F",
  flexDirection: "column"
};
var defaultEvents = {
  onClick: {
    type: ControlType.EventHandler
  },
  onMouseEnter: {
    type: ControlType.EventHandler
  },
  onMouseLeave: {
    type: ControlType.EventHandler
  }
};
var fontSizeOptions = {
  type: ControlType.Number,
  title: "Font Size",
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true
};
var fontControls = {
  font: {
    type: ControlType.Boolean,
    title: "Font",
    defaultValue: false,
    disabledTitle: "Default",
    enabledTitle: "Custom"
  },
  fontFamily: {
    type: ControlType.String,
    title: "Family",
    placeholder: "Inter",
    hidden: ({ font }) => !font
  },
  fontWeight: {
    type: ControlType.Enum,
    title: "Weight",
    options: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    optionTitles: [
      "Thin",
      "Extra-light",
      "Light",
      "Regular",
      "Medium",
      "Semi-bold",
      "Bold",
      "Extra-bold",
      "Black"
    ],
    hidden: ({ font }) => !font
  }
};
var localeOptions = {
  af: "Afrikaans",
  sq: "Albanian",
  an: "Aragonese",
  ar: "Arabic (Standard)",
  "ar-dz": "Arabic (Algeria)",
  "ar-bh": "Arabic (Bahrain)",
  "ar-eg": "Arabic (Egypt)",
  "ar-iq": "Arabic (Iraq)",
  "ar-jo": "Arabic (Jordan)",
  "ar-kw": "Arabic (Kuwait)",
  "ar-lb": "Arabic (Lebanon)",
  "ar-ly": "Arabic (Libya)",
  "ar-ma": "Arabic (Morocco)",
  "ar-om": "Arabic (Oman)",
  "ar-qa": "Arabic (Qatar)",
  "ar-sa": "Arabic (Saudi Arabia)",
  "ar-sy": "Arabic (Syria)",
  "ar-tn": "Arabic (Tunisia)",
  "ar-ae": "Arabic (U.A.E.)",
  "ar-ye": "Arabic (Yemen)",
  hy: "Armenian",
  as: "Assamese",
  ast: "Asturian",
  az: "Azerbaijani",
  eu: "Basque",
  bg: "Bulgarian",
  be: "Belarusian",
  bn: "Bengali",
  bs: "Bosnian",
  br: "Breton",
  my: "Burmese",
  ca: "Catalan",
  ch: "Chamorro",
  ce: "Chechen",
  zh: "Chinese",
  "zh-hk": "Chinese (Hong Kong)",
  "zh-cn": "Chinese (PRC)",
  "zh-sg": "Chinese (Singapore)",
  "zh-tw": "Chinese (Taiwan)",
  cv: "Chuvash",
  co: "Corsican",
  cr: "Cree",
  hr: "Croatian",
  cs: "Czech",
  da: "Danish",
  nl: "Dutch (Standard)",
  "nl-be": "Dutch (Belgian)",
  en: "English",
  "en-au": "English (Australia)",
  "en-bz": "English (Belize)",
  "en-ca": "English (Canada)",
  "en-ie": "English (Ireland)",
  "en-jm": "English (Jamaica)",
  "en-nz": "English (New Zealand)",
  "en-ph": "English (Philippines)",
  "en-za": "English (South Africa)",
  "en-tt": "English (Trinidad & Tobago)",
  "en-gb": "English (United Kingdom)",
  "en-us": "English (United States)",
  "en-zw": "English (Zimbabwe)",
  eo: "Esperanto",
  et: "Estonian",
  fo: "Faeroese",
  fa: "Farsi",
  fj: "Fijian",
  fi: "Finnish",
  fr: "French (Standard)",
  "fr-be": "French (Belgium)",
  "fr-ca": "French (Canada)",
  "fr-fr": "French (France)",
  "fr-lu": "French (Luxembourg)",
  "fr-mc": "French (Monaco)",
  "fr-ch": "French (Switzerland)",
  fy: "Frisian",
  fur: "Friulian",
  gd: "Gaelic (Scots)",
  "gd-ie": "Gaelic (Irish)",
  gl: "Galacian",
  ka: "Georgian",
  de: "German (Standard)",
  "de-at": "German (Austria)",
  "de-de": "German (Germany)",
  "de-li": "German (Liechtenstein)",
  "de-lu": "German (Luxembourg)",
  "de-ch": "German (Switzerland)",
  el: "Greek",
  gu: "Gujurati",
  ht: "Haitian",
  he: "Hebrew",
  hi: "Hindi",
  hu: "Hungarian",
  is: "Icelandic",
  id: "Indonesian",
  iu: "Inuktitut",
  ga: "Irish",
  it: "Italian (Standard)",
  "it-ch": "Italian (Switzerland)",
  ja: "Japanese",
  kn: "Kannada",
  ks: "Kashmiri",
  kk: "Kazakh",
  km: "Khmer",
  ky: "Kirghiz",
  tlh: "Klingon",
  ko: "Korean",
  "ko-kp": "Korean (North Korea)",
  "ko-kr": "Korean (South Korea)",
  la: "Latin",
  lv: "Latvian",
  lt: "Lithuanian",
  lb: "Luxembourgish",
  mk: "FYRO Macedonian",
  ms: "Malay",
  ml: "Malayalam",
  mt: "Maltese",
  mi: "Maori",
  mr: "Marathi",
  mo: "Moldavian",
  nv: "Navajo",
  ng: "Ndonga",
  ne: "Nepali",
  no: "Norwegian",
  nb: "Norwegian (Bokmal)",
  nn: "Norwegian (Nynorsk)",
  oc: "Occitan",
  or: "Oriya",
  om: "Oromo",
  "fa-ir": "Persian/Iran",
  pl: "Polish",
  pt: "Portuguese",
  "pt-br": "Portuguese (Brazil)",
  pa: "Punjabi",
  "pa-in": "Punjabi (India)",
  "pa-pk": "Punjabi (Pakistan)",
  qu: "Quechua",
  rm: "Rhaeto-Romanic",
  ro: "Romanian",
  "ro-mo": "Romanian (Moldavia)",
  ru: "Russian",
  "ru-mo": "Russian (Moldavia)",
  sz: "Sami (Lappish)",
  sg: "Sango",
  sa: "Sanskrit",
  sc: "Sardinian",
  sd: "Sindhi",
  si: "Singhalese",
  sr: "Serbian",
  sk: "Slovak",
  sl: "Slovenian",
  so: "Somani",
  sb: "Sorbian",
  es: "Spanish",
  "es-ar": "Spanish (Argentina)",
  "es-bo": "Spanish (Bolivia)",
  "es-cl": "Spanish (Chile)",
  "es-co": "Spanish (Colombia)",
  "es-cr": "Spanish (Costa Rica)",
  "es-do": "Spanish (Dominican Republic)",
  "es-ec": "Spanish (Ecuador)",
  "es-sv": "Spanish (El Salvador)",
  "es-gt": "Spanish (Guatemala)",
  "es-hn": "Spanish (Honduras)",
  "es-mx": "Spanish (Mexico)",
  "es-ni": "Spanish (Nicaragua)",
  "es-pa": "Spanish (Panama)",
  "es-py": "Spanish (Paraguay)",
  "es-pe": "Spanish (Peru)",
  "es-pr": "Spanish (Puerto Rico)",
  "es-es": "Spanish (Spain)",
  "es-uy": "Spanish (Uruguay)",
  "es-ve": "Spanish (Venezuela)",
  sx: "Sutu",
  sw: "Swahili",
  sv: "Swedish",
  "sv-fi": "Swedish (Finland)",
  "sv-sv": "Swedish (Sweden)",
  ta: "Tamil",
  tt: "Tatar",
  te: "Teluga",
  th: "Thai",
  tig: "Tigre",
  ts: "Tsonga",
  tn: "Tswana",
  tr: "Turkish",
  tk: "Turkmen",
  uk: "Ukrainian",
  hsb: "Upper Sorbian",
  ur: "Urdu",
  ve: "Venda",
  vi: "Vietnamese",
  vo: "Volapuk",
  wa: "Walloon",
  cy: "Welsh",
  xh: "Xhosa",
  ji: "Yiddish",
  zu: "Zulu"
};

// http-url:https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget } from "../_framer-runtime.js";
import { useEffect } from "react";

// http-url:https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color } from "../_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue } from "../_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React from "react";

// http-url:https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType2 } from "../_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo } from "react";

// http-url:https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect3 } from "react";

// http-url:https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect4, useRef as useRef2 } from "react";
import { motionValue, animate, RenderTarget } from "../_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore } from "../_framer-runtime.js";
import { useEffect as useEffect5 } from "react";

// http-url:https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2 } from "react";
import { RenderTarget as RenderTarget2 } from "../_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3 } from "react";
import { ControlType as ControlType3 } from "../_framer-runtime.js";
var borderRadiusControl = {
  borderRadius: {
    title: "Radius",
    type: ControlType3.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: [
      "Radius",
      "Radius per corner"
    ],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius"
    ],
    valueLabels: [
      "TL",
      "TR",
      "BR",
      "BL"
    ],
    min: 0
  }
};
var paddingControl = {
  padding: {
    type: ControlType3.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: [
      "Padding",
      "Padding per side"
    ],
    valueKeys: [
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft"
    ],
    valueLabels: [
      "T",
      "R",
      "B",
      "L"
    ],
    min: 0,
    title: "Padding"
  }
};

// http-url:https://framerusercontent.com/modules/z94odafxDIiKqLDG1zI6/FWeO6mjJXQUADFrpYjGY/Time_Date.js
function Time(props) {
  const { outputType, fontFamily, fontSize, fontWeight, localeType, customLocale, timeFormat, showYear, showWeekday, showHours, showMinutes, showSeconds, monthFormat, color, font, alignment } = props;
  const [rerenderOutputKey, setRerenderOutputKey] = React3.useState(`${Math.random()}`);
  const timerRef = React3.useRef();
  const text = React3.useMemo(() => {
    const locale = localeType === "custom" ? [customLocale] : [];
    let formatOptions;
    switch (outputType) {
      case "date":
        formatOptions = { weekday: showWeekday ? "long" : void 0, day: "numeric", month: monthFormat, year: showYear ? "numeric" : void 0 };
        break;
      case "time":
        formatOptions = { hour: showHours ? "numeric" : void 0, minute: showMinutes ? "numeric" : void 0, second: showSeconds && showMinutes ? "numeric" : void 0, hour12: timeFormat === "12h" };
        break;
      default:
        console.error(`Unsupported outputType: ${outputType}`);
        break;
    }
    return new Intl.DateTimeFormat(locale, formatOptions).format(/* @__PURE__ */ new Date());
  }, [outputType, localeType, customLocale, timeFormat, showYear, showWeekday, showHours, showMinutes, showSeconds, monthFormat, rerenderOutputKey]);
  React3.useEffect(() => {
    if (outputType === "time") {
      const timer = setInterval(() => setRerenderOutputKey(`${Math.random()}`), (60 - (/* @__PURE__ */ new Date()).getSeconds()) * 1e3);
      timerRef.current = timer;
      return () => {
        if (timer) {
          return clearInterval(timer);
        }
      };
    }
  }, [timerRef.current, outputType]);
  return /* @__PURE__ */ _jsx("div", { style: { ...containerStyles, color, fontFamily: fontStack, fontWeight: 500, fontSize: 16, ...font }, children: /* @__PURE__ */ _jsx("span", { style: { width: "100%" }, children: text }) });
}
Time.defaultProps = { height: 20, width: 140, outputType: "time", localeType: "auto", customLocale: "en-US", color: "#999", timeFormat: "24h", showYear: true, showWeekday: true, showHours: true, showMinutes: true, showSeconds: false, monthFormat: "long", alignment: "center" };
Time.displayName = "Time & Date";
addPropertyControls(Time, { outputType: { title: "Type", type: ControlType4.Enum, displaySegmentedControl: true, options: ["date", "time"], optionTitles: ["Date", "Time"], defaultValue: Time.defaultProps.outputType }, showWeekday: { title: "Weekday", type: ControlType4.Boolean, enabledTitle: "Show", disabledTitle: "Hide", defaultValue: Time.defaultProps.showWeekday, hidden: (props) => props.outputType !== "date" }, monthFormat: { title: "Month", type: ControlType4.Enum, options: ["short", "long", "numeric"], optionTitles: ["Short", "Long", "Numeric"], defaultValue: Time.defaultProps.monthFormat, hidden: (props) => props.outputType !== "date" }, showYear: { title: "Year", type: ControlType4.Boolean, enabledTitle: "Show", disabledTitle: "Hide", defaultValue: Time.defaultProps.showYear, hidden: (props) => props.outputType !== "date" }, timeFormat: { title: "Format", type: ControlType4.Enum, options: ["12h", "24h"], optionTitles: ["12h", "24h"], displaySegmentedControl: true, defaultValue: Time.defaultProps.timeFormat, hidden: (props) => props.outputType !== "time" }, showHours: { title: "Hours", type: ControlType4.Boolean, enabledTitle: "Show", disabledTitle: "Hide", defaultValue: Time.defaultProps.showHours, hidden: (props) => props.outputType !== "time" }, showMinutes: { title: "Minutes", type: ControlType4.Boolean, enabledTitle: "Show", disabledTitle: "Hide", defaultValue: Time.defaultProps.showMinutes, hidden: (props) => props.outputType !== "time" }, showSeconds: { title: "Seconds", type: ControlType4.Boolean, enabledTitle: "Show", disabledTitle: "Hide", defaultValue: Time.defaultProps.showSeconds, hidden: (props) => props.outputType !== "time" || !props.showMinutes }, localeType: { title: "Locale", type: ControlType4.Enum, displaySegmentedControl: true, options: ["custom", "auto"], optionTitles: ["Custom", "Auto"], defaultValue: Time.defaultProps.localeType }, customLocale: { title: " ", type: ControlType4.Enum, options: Object.keys(localeOptions).sort(), optionTitles: Object.keys(localeOptions).sort().map((key) => localeOptions[key]), hidden: (props) => props.localeType !== "custom", defaultValue: "en" }, font: {
  // @ts-expect-error – Internal
  type: ControlType4.Font,
  controls: "extended"
}, color: { type: ControlType4.Color, defaultValue: Time.defaultProps.color } });

// http-url:https://framerusercontent.com/modules/jlrgwcThTybaBr9L3JWz/FXpOQPFd2Bs95tImJ7eF/R4ZMKeSGK.js
import { fontStore as fontStore2 } from "../_framer-runtime.js";
fontStore2.loadFonts(["FS;Satoshi-medium", "FS;Satoshi-bold", "FS;Satoshi-bold italic", "FS;Satoshi-medium italic"]);
var fonts = [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }, { family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2", weight: "500" }] }];
var css = ['.framer-c09gS .framer-styles-preset-wro55n:not(.rich-text-wrapper), .framer-c09gS .framer-styles-preset-wro55n.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.55em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1365px) and (min-width: 0px) { .framer-c09gS .framer-styles-preset-wro55n:not(.rich-text-wrapper), .framer-c09gS .framer-styles-preset-wro55n.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className = "framer-c09gS";

// http-url:https://framerusercontent.com/modules/zDrKJEAg9usaxyXddycn/yEx8XKRkDFrYrrVpFmDt/WyQx75o2d.js
import { fontStore as fontStore3 } from "../_framer-runtime.js";
fontStore3.loadFonts(["GF;Instrument Serif-regular", "GF;Instrument Serif-italic"]);
var fonts2 = [{ explicitInter: true, fonts: [{ family: "Instrument Serif", source: "google", style: "normal", url: "https://fonts.gstatic.com/s/instrumentserif/v4/jizBRFtNs2ka5fXjeivQ4LroWlx-2zcZj1bIkNo.woff2", weight: "400" }, { family: "Instrument Serif", source: "google", style: "italic", url: "https://fonts.gstatic.com/s/instrumentserif/v4/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATjnTNgNq55w.woff2", weight: "400" }] }];
var css2 = ['.framer-JhQ0N .framer-styles-preset-1oesitz:not(.rich-text-wrapper), .framer-JhQ0N .framer-styles-preset-1oesitz.rich-text-wrapper h1 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.02em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #0d0d0d; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1365px) and (min-width: 1000px) { .framer-JhQ0N .framer-styles-preset-1oesitz:not(.rich-text-wrapper), .framer-JhQ0N .framer-styles-preset-1oesitz.rich-text-wrapper h1 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 72px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.02em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #0d0d0d; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 999px) and (min-width: 600px) { .framer-JhQ0N .framer-styles-preset-1oesitz:not(.rich-text-wrapper), .framer-JhQ0N .framer-styles-preset-1oesitz.rich-text-wrapper h1 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.02em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #0d0d0d; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 599px) and (min-width: 0px) { .framer-JhQ0N .framer-styles-preset-1oesitz:not(.rich-text-wrapper), .framer-JhQ0N .framer-styles-preset-1oesitz.rich-text-wrapper h1 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 44px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.08em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #0d0d0d; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className2 = "framer-JhQ0N";

// http-url:https://framerusercontent.com/modules/cf1kWcKZCkHTdEfPfEhE/6iZygZk22blRFzAgZoIC/dyfGXVTmv.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType5, cx, getFontsFromSharedStyle, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "../_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React4 from "react";

// http-url:https://framerusercontent.com/modules/aKryQeD1YAHAegs9MtvK/aW291tQZsP78x37AccGH/dmbqlUU7V.js
import { fontStore as fontStore4 } from "../_framer-runtime.js";
fontStore4.loadFonts(["FS;Satoshi-medium", "FS;Satoshi-bold", "FS;Satoshi-bold italic", "FS;Satoshi-medium italic"]);
var fonts3 = [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }, { family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2", weight: "500" }] }];
var css3 = ['.framer-UxiLR .framer-styles-preset-1jh4872:not(.rich-text-wrapper), .framer-UxiLR .framer-styles-preset-1jh4872.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className3 = "framer-UxiLR";

// http-url:https://framerusercontent.com/modules/cf1kWcKZCkHTdEfPfEhE/6iZygZk22blRFzAgZoIC/dyfGXVTmv.js
var cycleOrder = ["Z8V2ah24T"];
var serializationHash = "framer-hEZgd";
var variantClassNames = { Z8V2ah24T: "framer-v-1t9sx2x" };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion(React4.Fragment);
var getProps = ({ height, id, title, width, ...props }) => {
  var _ref;
  return { ...props, pWhJivMWJ: (_ref = title !== null && title !== void 0 ? title : props.pWhJivMWJ) !== null && _ref !== void 0 ? _ref : "Now booking for Q3" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className5, layoutId, variant, pWhJivMWJ, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "Z8V2ah24T", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React4.useRef(null);
  const defaultLayoutId = React4.useId();
  const sharedStyleClassNames = [className3];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx2(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-1t9sx2x", className5, classNames), "data-border": true, "data-framer-name": "Variant 1", layoutDependency, layoutId: "Hero__Z8V2ah24T", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "rgb(250, 83, 45)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-1a953d4b-7a44-42a9-857a-08b16803438a, rgb(255, 84, 46))", borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, boxShadow: "inset 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(255, 255, 255, 0.71989), inset 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(255, 255, 255, 0.63557), inset 0px 10px 10px -3.75px rgba(255, 255, 255, 0.25), 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(227, 91, 0, 0.51112), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(227, 91, 0, 0.45126), 0px 10px 10px -3.75px rgba(227, 91, 0, 0.1775)", ...style }, children: [/* @__PURE__ */ _jsx2(motion.div, { className: "framer-j3cv66", layoutDependency, layoutId: "Hero__SJgoFfOU_", style: { backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12 } }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React4.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-1jh4872", "data-styles-preset": "dmbqlUU7V", style: { "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }, children: "Now booking for Q3" }) }), className: "framer-i6iugn", fonts: ["Inter"], layoutDependency, layoutId: "Hero__HIh7TImfb", style: { "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: pWhJivMWJ, verticalAlignment: "top", withExternalLayout: true })] }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-hEZgd.framer-dgfueq, .framer-hEZgd .framer-dgfueq { display: block; }", ".framer-hEZgd.framer-1t9sx2x { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-hEZgd .framer-j3cv66 { flex: none; height: 5px; overflow: hidden; position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }", ".framer-hEZgd .framer-i6iugn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hEZgd.framer-1t9sx2x { gap: 0px; } .framer-hEZgd.framer-1t9sx2x > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-hEZgd.framer-1t9sx2x > :first-child { margin-left: 0px; } .framer-hEZgd.framer-1t9sx2x > :last-child { margin-right: 0px; } }", ...css3, '.framer-hEZgd[data-border="true"]::after, .framer-hEZgd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerdyfGXVTmv = withCSS(Component, css4, "framer-hEZgd");
var dyfGXVTmv_default = FramerdyfGXVTmv;
FramerdyfGXVTmv.displayName = "Tags / Tag | Hero";
FramerdyfGXVTmv.defaultProps = { height: 31.5, width: 147.5 };
addPropertyControls2(FramerdyfGXVTmv, { pWhJivMWJ: { defaultValue: "Now booking for Q3", displayTextArea: false, title: "Title", type: ControlType5.String } });
addFonts(FramerdyfGXVTmv, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts3)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/lIeuBD8AlOTzzPtE9Pyp/F3LReSg98AnK3tXDVE6i/lohBYJvQe.js
import { jsx as _jsx3, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ControlType as ControlType6, cx as cx2, RichText as RichText2, SVG, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2, withFX } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React5 from "react";
var MotionDivWithFX = withFX(motion2.div);
var cycleOrder2 = ["d8kLfuUqJ", "uVg2ZFjcr", "PE_yXhEDl", "TUXt_6Gib"];
var serializationHash2 = "framer-mpP9Y";
var variantClassNames2 = { d8kLfuUqJ: "framer-v-1fdey2r", PE_yXhEDl: "framer-v-ulenuy", TUXt_6Gib: "framer-v-1cxs2t7", uVg2ZFjcr: "framer-v-ko6qga" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { delay: 0, duration: 5.3, ease: [0.44, 0, 0.56, 1], type: "tween" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: -32, y: 72 };
var transition2 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var animation1 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 32, y: -40 };
var animation2 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: -40, y: 56 };
var transition3 = { delay: 0, duration: 7.9, ease: [0.44, 0, 0.56, 1], type: "tween" };
var animation3 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: -40, y: -80 };
var transformTemplate1 = (_, t) => `translate(-50%, -50%) ${t}`;
var Transition2 = ({ value, children }) => {
  const config = React5.useContext(MotionConfigContext2);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion2(React5.Fragment);
var humanReadableVariantMap = { "Green | Mobile": "TUXt_6Gib", "Purple | Mobile": "PE_yXhEDl", Green: "uVg2ZFjcr", Purple: "d8kLfuUqJ" };
var getProps2 = ({ height, id, name1, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref, _ref1;
  return { ...props, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "d8kLfuUqJ", xuugP6ZwC: (_ref1 = name1 !== null && name1 !== void 0 ? name1 : props.xuugP6ZwC) !== null && _ref1 !== void 0 ? _ref1 : "John Doe" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo2();
  const { style, className: className5, layoutId, variant, xuugP6ZwC, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "d8kLfuUqJ", variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const ref1 = React5.useRef(null);
  const isDisplayed = () => {
    if (["uVg2ZFjcr", "TUXt_6Gib"].includes(baseVariant))
      return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (["uVg2ZFjcr", "TUXt_6Gib"].includes(baseVariant))
      return true;
    return false;
  };
  const defaultLayoutId = React5.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx3(LayoutGroup2, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition2, { value: transition2, children: /* @__PURE__ */ _jsxs2(MotionDivWithFX, { ...restProps, ...gestureHandlers, __framer__loop: animation, __framer__loopEffectEnabled: true, __framer__loopRepeatDelay: 0, __framer__loopRepeatType: "mirror", __framer__loopTransition: transition12, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: cx2(serializationHash2, ...sharedStyleClassNames, "framer-1fdey2r", className5, classNames), "data-framer-name": "Purple", layoutDependency, layoutId: "Hero__d8kLfuUqJ", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { ...style }, ...addPropertyOverrides({ PE_yXhEDl: { __framer__loop: animation1, "data-framer-name": "Purple | Mobile" }, TUXt_6Gib: { __framer__loop: animation2, "data-framer-name": "Green | Mobile" }, uVg2ZFjcr: { "data-framer-name": "Green" } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsx3(motion2.div, { className: "framer-1oyvjby", "data-framer-name": "Cursor Icon/Right Top", layoutDependency, layoutId: "Hero__Ss1Epkfav", children: /* @__PURE__ */ _jsx3(SVG, { className: "framer-1h3pxxb", "data-framer-name": "icons", layout: "position", layoutDependency, layoutId: "Hero__VJ_AloJ6f", opacity: 1, svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 26"><g transform="translate(2.191 2.08)" id="ss9512610314_1"><path d="M 12.578 19.006 L 16.757 1.356 L 1.649 10.508 L 9.042 12.469 Z" fill="rgb(250, 250, 250)"></path><path d="M 16.428 0.794 L 17.739 0 L 17.382 1.509 L 13.203 19.159 L 12.815 20.8 L 12.015 19.321 L 8.612 13.031 L 1.487 11.14 L 0 10.746 L 1.32 9.946 Z" fill="transparent" stroke-width="1.92" stroke="rgb(8, 8, 8)" stroke-miterlimit="10"></path></g></svg>', svgContentId: 9512610314, withExternalLayout: true, ...addPropertyOverrides({ PE_yXhEDl: { svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 24"><g transform="translate(2.008 1.92)" id="ss12581147350_1"><path d="M 11.53 17.544 L 15.361 1.252 L 1.512 9.7 L 8.289 11.51 Z" fill="rgb(250, 250, 250)"></path><path d="M 15.059 0.733 L 16.261 0 L 15.933 1.393 L 12.103 17.685 L 11.747 19.2 L 11.014 17.835 L 7.895 12.028 L 1.363 10.284 L 0 9.919 L 1.21 9.181 Z" fill="transparent" stroke-width="1.76" stroke="rgb(8, 8, 8)" stroke-miterlimit="10"></path></g></svg>', svgContentId: 12581147350 } }, baseVariant, gestureVariant) }) }), isDisplayed() && /* @__PURE__ */ _jsx3(motion2.div, { className: "framer-1v7uc4s", "data-framer-name": "Wrapper Bubble Chat", layoutDependency, layoutId: "Hero__bTvHRegjB", children: /* @__PURE__ */ _jsx3(motion2.div, { className: "framer-1bjhfat", "data-border": true, "data-framer-name": "Bubble Chat", layoutDependency, layoutId: "Hero__IbAhGm21t", style: { "--border-bottom-width": "1px", "--border-color": "rgb(68, 52, 173)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgb(94, 69, 255)", borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12 }, variants: { PE_yXhEDl: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 } }, children: /* @__PURE__ */ _jsx3(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx3(React5.Fragment, { children: /* @__PURE__ */ _jsx3(motion2.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-weight": "500", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "16px", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }, children: "John Doe" }) }), className: "framer-eal9mh", "data-framer-name": "Comment", fonts: ["FS;Satoshi-medium"], layoutDependency, layoutId: "Hero__oca_d1AbP", style: { "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-paragraph-spacing": "0px" }, text: xuugP6ZwC, verticalAlignment: "center", withExternalLayout: true, ...addPropertyOverrides({ PE_yXhEDl: { children: /* @__PURE__ */ _jsx3(React5.Fragment, { children: /* @__PURE__ */ _jsx3(motion2.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-size": "14px", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "16px", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }, children: "John Doe" }) }) } }, baseVariant, gestureVariant) }) }) }), isDisplayed1() && /* @__PURE__ */ _jsxs2(MotionDivWithFX, { __framer__loop: animation3, __framer__loopEffectEnabled: true, __framer__loopRepeatDelay: 0, __framer__loopRepeatType: "mirror", __framer__loopTransition: transition3, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-18r8o0", "data-framer-name": "Cursor_02", layoutDependency, layoutId: "Hero__qeZIUwBeN", transformTemplate: transformTemplate1, children: [/* @__PURE__ */ _jsx3(motion2.div, { className: "framer-17qtcyw", "data-framer-name": "Cursor Icon/Right Top", layoutDependency, layoutId: "Hero__vnA1HBB7a", children: /* @__PURE__ */ _jsx3(SVG, { className: "framer-rp1804", "data-framer-name": "icons", layout: "position", layoutDependency, layoutId: "Hero__rV6kLI9Tk", opacity: 1, svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 26"><g transform="translate(1.802 1.932)" id="ss10628491669_1"><path d="M 5.809 22 L 0 0 L 21 11.407 L 10.723 13.852 Z" transform="translate(0.19 -0.185) rotate(-1 10.5 11)" fill="rgb(255, 255, 255)"></path><path d="M 2.602 0.908 L 1.198 0.068 L 1.58 1.664 L 6.056 20.332 L 6.472 22.068 L 7.329 20.504 L 10.973 13.85 L 18.605 11.851 L 20.198 11.434 L 18.784 10.588 Z" fill="transparent" stroke-width="1.84" stroke="rgb(23, 23, 23)" stroke-miterlimit="10"></path></g></svg>', svgContentId: 10628491669, withExternalLayout: true, ...addPropertyOverrides({ TUXt_6Gib: { svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 24"><g transform="translate(1.652 1.783)" id="ss10852387797_1"><path d="M 5.322 20.307 L 0 0 L 19.249 10.528 L 9.828 12.785 Z" transform="translate(0.176 -0.17) rotate(-1 9.624 10.153)" fill="rgb(255, 255, 255)"></path><path d="M 2.385 0.838 L 1.098 0.063 L 1.449 1.536 L 5.551 18.768 L 5.933 20.37 L 6.718 18.927 L 10.059 12.785 L 17.055 10.939 L 18.515 10.554 L 17.218 9.774 Z" fill="transparent" stroke-width="1.69" stroke="rgb(23, 23, 23)" stroke-miterlimit="10"></path></g></svg>', svgContentId: 10852387797 } }, baseVariant, gestureVariant) }) }), /* @__PURE__ */ _jsx3(motion2.div, { className: "framer-1u7lel", "data-framer-name": "Wrapper Bubble Chat", layoutDependency, layoutId: "Hero__MCQYh1kbU", children: /* @__PURE__ */ _jsx3(motion2.div, { className: "framer-1hul4on", "data-border": true, "data-framer-name": "Bubble Chat", layoutDependency, layoutId: "Hero__PBs5VmfqK", style: { "--border-bottom-width": "1px", "--border-color": "rgb(33, 37, 41)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgb(197, 255, 82)", borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12 }, variants: { TUXt_6Gib: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 } }, children: /* @__PURE__ */ _jsx3(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx3(React5.Fragment, { children: /* @__PURE__ */ _jsx3(motion2.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-weight": "500", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "16px" }, children: "Perhaps you?" }) }), className: "framer-1xhtlwm", "data-framer-name": "Comment", fonts: ["FS;Satoshi-medium"], layoutDependency, layoutId: "Hero__a_JQYmcfv", style: { "--framer-paragraph-spacing": "0px" }, text: xuugP6ZwC, verticalAlignment: "center", withExternalLayout: true, ...addPropertyOverrides({ TUXt_6Gib: { children: /* @__PURE__ */ _jsx3(React5.Fragment, { children: /* @__PURE__ */ _jsx3(motion2.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-size": "14px", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "16px" }, children: "John Doe" }) }) } }, baseVariant, gestureVariant) }) }) })] })] }) }) }) });
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-mpP9Y.framer-2u46pv, .framer-mpP9Y .framer-2u46pv { display: block; }", ".framer-mpP9Y.framer-1fdey2r { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-mpP9Y .framer-1oyvjby { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 26px); overflow: visible; position: relative; width: 26px; }", ".framer-mpP9Y .framer-1h3pxxb { flex: none; height: 26px; left: 0px; position: absolute; top: calc(50.00000000000002% - 26px / 2); width: 24px; }", ".framer-mpP9Y .framer-1v7uc4s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 16px 0px 0px; position: relative; width: min-content; }", ".framer-mpP9Y .framer-1bjhfat, .framer-mpP9Y .framer-1hul4on { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 12px 10px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-mpP9Y .framer-eal9mh, .framer-mpP9Y .framer-1xhtlwm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-mpP9Y .framer-18r8o0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 48%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; z-index: 3; }", ".framer-mpP9Y .framer-17qtcyw { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }", ".framer-mpP9Y .framer-rp1804 { flex: none; height: 26px; position: absolute; right: -1px; top: calc(54.166666666666686% - 26px / 2); width: 24px; }", ".framer-mpP9Y .framer-1u7lel { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 16px; position: relative; width: min-content; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-mpP9Y.framer-1fdey2r, .framer-mpP9Y .framer-1v7uc4s, .framer-mpP9Y .framer-1bjhfat, .framer-mpP9Y .framer-18r8o0, .framer-mpP9Y .framer-1u7lel, .framer-mpP9Y .framer-1hul4on { gap: 0px; } .framer-mpP9Y.framer-1fdey2r > *, .framer-mpP9Y .framer-18r8o0 > * { margin: 0px; margin-bottom: calc(-4px / 2); margin-top: calc(-4px / 2); } .framer-mpP9Y.framer-1fdey2r > :first-child, .framer-mpP9Y .framer-1v7uc4s > :first-child, .framer-mpP9Y .framer-18r8o0 > :first-child, .framer-mpP9Y .framer-1u7lel > :first-child { margin-top: 0px; } .framer-mpP9Y.framer-1fdey2r > :last-child, .framer-mpP9Y .framer-1v7uc4s > :last-child, .framer-mpP9Y .framer-18r8o0 > :last-child, .framer-mpP9Y .framer-1u7lel > :last-child { margin-bottom: 0px; } .framer-mpP9Y .framer-1v7uc4s > *, .framer-mpP9Y .framer-1u7lel > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-mpP9Y .framer-1bjhfat > *, .framer-mpP9Y .framer-1hul4on > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-mpP9Y .framer-1bjhfat > :first-child, .framer-mpP9Y .framer-1hul4on > :first-child { margin-left: 0px; } .framer-mpP9Y .framer-1bjhfat > :last-child, .framer-mpP9Y .framer-1hul4on > :last-child { margin-right: 0px; } }", ".framer-mpP9Y.framer-v-ko6qga.framer-1fdey2r, .framer-mpP9Y.framer-v-1cxs2t7.framer-1fdey2r { min-height: 62px; min-width: 130px; }", ".framer-mpP9Y.framer-v-ulenuy .framer-1h3pxxb { bottom: 0px; height: 24px; left: calc(50.00000000000002% - 22px / 2); top: unset; width: 22px; }", ".framer-mpP9Y.framer-v-ulenuy .framer-1bjhfat { padding: 8px 10px 8px 10px; }", ".framer-mpP9Y.framer-v-1cxs2t7 .framer-rp1804 { height: 24px; left: calc(50.00000000000002% - 22px / 2); right: unset; top: calc(50.00000000000002% - 24px / 2); width: 22px; }", ".framer-mpP9Y.framer-v-1cxs2t7 .framer-1hul4on { padding: 8px 12px 8px 12px; }", '.framer-mpP9Y[data-border="true"]::after, .framer-mpP9Y [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerlohBYJvQe = withCSS2(Component2, css5, "framer-mpP9Y");
var lohBYJvQe_default = FramerlohBYJvQe;
FramerlohBYJvQe.displayName = "Cursors / Cursor | Hero";
FramerlohBYJvQe.defaultProps = { height: 62, width: 107.5 };
addPropertyControls3(FramerlohBYJvQe, { variant: { options: ["d8kLfuUqJ", "uVg2ZFjcr", "PE_yXhEDl", "TUXt_6Gib"], optionTitles: ["Purple", "Green", "Purple | Mobile", "Green | Mobile"], title: "Variant", type: ControlType6.Enum }, xuugP6ZwC: { defaultValue: "John Doe", displayTextArea: false, title: "Name", type: ControlType6.String } });
addFonts2(FramerlohBYJvQe, [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/rWclMN01Pbm80YsyjpHm/uunQzwiN5gE8TKfofoT7/pd_b9Ln55.js
import { jsx as _jsx4, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls4, ControlType as ControlType7, cx as cx3, getFontsFromSharedStyle as getFontsFromSharedStyle2, Image, RichText as RichText3, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS3 } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React6 from "react";

// http-url:https://framerusercontent.com/modules/5U5dNn2iwUYjEPxCg9xD/ixVuZtNHGJFfUCh12XDN/qJ1WXG8sd.js
import { fontStore as fontStore5 } from "../_framer-runtime.js";
fontStore5.loadFonts(["FS;Satoshi-medium", "FS;Satoshi-bold", "FS;Satoshi-bold italic", "FS;Satoshi-medium italic"]);
var fonts4 = [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }, { family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2", weight: "500" }] }];
var css6 = ['.framer-cn90v .framer-styles-preset-r5iwcf:not(.rich-text-wrapper), .framer-cn90v .framer-styles-preset-r5iwcf.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(0, 0, 0, 0.55); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className4 = "framer-cn90v";

// http-url:https://framerusercontent.com/modules/rWclMN01Pbm80YsyjpHm/uunQzwiN5gE8TKfofoT7/pd_b9Ln55.js
var cycleOrder3 = ["tnsi5wnVK"];
var serializationHash3 = "framer-t5jFL";
var variantClassNames3 = { tnsi5wnVK: "framer-v-m0639" };
var transition13 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var transformTemplate12 = (_, t) => `translateY(-50%) ${t}`;
var Transition3 = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext3);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext3.Provider, { value: contextValue, children });
};
var Variants3 = motion3(React6.Fragment);
var getProps3 = ({ avatar1, avatar2, avatar3, avatar4, height, id, title, width, ...props }) => {
  var _ref;
  return { ...props, pQMDR2JbF: avatar1 !== null && avatar1 !== void 0 ? avatar1 : props.pQMDR2JbF, Q88rmj0r8: avatar2 !== null && avatar2 !== void 0 ? avatar2 : props.Q88rmj0r8, QP2l30iYm: (_ref = title !== null && title !== void 0 ? title : props.QP2l30iYm) !== null && _ref !== void 0 ? _ref : "Trusted by 20+ startups", yW91fuYWK: avatar3 !== null && avatar3 !== void 0 ? avatar3 : props.yW91fuYWK, ZDiOf0_Jf: avatar4 !== null && avatar4 !== void 0 ? avatar4 : props.ZDiOf0_Jf };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo3();
  const { style, className: className5, layoutId, variant, QP2l30iYm, pQMDR2JbF, Q88rmj0r8, yW91fuYWK, ZDiOf0_Jf, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder: cycleOrder3, defaultVariant: "tnsi5wnVK", variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const ref1 = React6.useRef(null);
  const defaultLayoutId = React6.useId();
  const sharedStyleClassNames = [className4];
  const componentViewport = useComponentViewport3();
  return /* @__PURE__ */ _jsx4(LayoutGroup3, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition3, { value: transition13, children: /* @__PURE__ */ _jsxs3(motion3.div, { ...restProps, ...gestureHandlers, className: cx3(serializationHash3, ...sharedStyleClassNames, "framer-m0639", className5, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Hero__tnsi5wnVK", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { ...style }, children: [/* @__PURE__ */ _jsxs3(motion3.div, { className: "framer-lpp1y0", "data-framer-name": "Avatars", layoutDependency, layoutId: "Hero__VIK9B9F7b", children: [/* @__PURE__ */ _jsx4(Image, { background: { alt: "", fit: "fill", sizes: "32px", ...toResponsiveImage(pQMDR2JbF), ...{ positionX: "center", positionY: "center" } }, className: "framer-1lkeli8", "data-border": true, "data-framer-name": "Elements/Avatar", layoutDependency, layoutId: "Hero__jo_JGKaKZ", style: { "--border-bottom-width": "1.5px", "--border-color": "rgb(252, 249, 245)", "--border-left-width": "1.5px", "--border-right-width": "1.5px", "--border-style": "solid", "--border-top-width": "1.5px", borderBottomLeftRadius: 80, borderBottomRightRadius: 80, borderTopLeftRadius: 80, borderTopRightRadius: 80 }, transformTemplate: transformTemplate12 }), /* @__PURE__ */ _jsx4(Image, { background: { alt: "", fit: "fill", sizes: "32px", ...toResponsiveImage(Q88rmj0r8), ...{ positionX: "center", positionY: "center" } }, className: "framer-1cv5255", "data-border": true, "data-framer-name": "Elements/Avatar", layoutDependency, layoutId: "Hero__WCjC3JRrB", style: { "--border-bottom-width": "1.5px", "--border-color": "rgb(252, 249, 245)", "--border-left-width": "1.5px", "--border-right-width": "1.5px", "--border-style": "solid", "--border-top-width": "1.5px", borderBottomLeftRadius: 80, borderBottomRightRadius: 80, borderTopLeftRadius: 80, borderTopRightRadius: 80 }, transformTemplate: transformTemplate12 }), /* @__PURE__ */ _jsx4(Image, { background: { alt: "", fit: "fill", sizes: "32px", ...toResponsiveImage(yW91fuYWK), ...{ positionX: "center", positionY: "center" } }, className: "framer-1xcolmq", "data-border": true, "data-framer-name": "Elements/Avatar", layoutDependency, layoutId: "Hero__vqIVWlBQ7", style: { "--border-bottom-width": "1.5px", "--border-color": "rgb(252, 249, 245)", "--border-left-width": "1.5px", "--border-right-width": "1.5px", "--border-style": "solid", "--border-top-width": "1.5px", borderBottomLeftRadius: 80, borderBottomRightRadius: 80, borderTopLeftRadius: 80, borderTopRightRadius: 80 }, transformTemplate: transformTemplate12 }), /* @__PURE__ */ _jsx4(Image, { background: { alt: "", fit: "fill", sizes: "32px", ...toResponsiveImage(ZDiOf0_Jf), ...{ positionX: "center", positionY: "center" } }, className: "framer-18s6e8v", "data-border": true, "data-framer-name": "Elements/Avatar", layoutDependency, layoutId: "Hero__aK90P5QQJ", style: { "--border-bottom-width": "1.5px", "--border-color": "rgb(252, 249, 245)", "--border-left-width": "1.5px", "--border-right-width": "1.5px", "--border-style": "solid", "--border-top-width": "1.5px", borderBottomLeftRadius: 80, borderBottomRightRadius: 80, borderTopLeftRadius: 80, borderTopRightRadius: 80 }, transformTemplate: transformTemplate12 })] }), /* @__PURE__ */ _jsx4(motion3.div, { className: "framer-16gerwl", "data-framer-name": "Stars", layoutDependency, layoutId: "Hero__kCCuIjYM1", children: /* @__PURE__ */ _jsx4(motion3.div, { className: "framer-jh7333", "data-framer-name": "Content", layoutDependency, layoutId: "Hero__Oy6lL8_DF", children: /* @__PURE__ */ _jsx4(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React6.Fragment, { children: /* @__PURE__ */ _jsx4(motion3.p, { className: "framer-styles-preset-r5iwcf", "data-styles-preset": "qJ1WXG8sd", style: { "--framer-text-color": "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.55))" }, children: "Trusted by 20+ startups" }) }), className: "framer-tq24f9", fonts: ["Inter"], layoutDependency, layoutId: "Hero__gm0JHKl45", style: { "--extracted-r6o4lv": "rgba(0, 0, 0, 0.55)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--framer-paragraph-spacing": "0px" }, text: QP2l30iYm, verticalAlignment: "top", withExternalLayout: true }) }) })] }) }) }) });
});
var css7 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-t5jFL.framer-luopuj, .framer-t5jFL .framer-luopuj { display: block; }", ".framer-t5jFL.framer-m0639 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-t5jFL .framer-lpp1y0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 33px; min-width: 106px; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-t5jFL .framer-1lkeli8 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); left: 0px; overflow: hidden; position: absolute; top: 52%; width: 32px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-t5jFL .framer-1cv5255 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); left: 24px; overflow: hidden; position: absolute; top: 52%; width: 32px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-t5jFL .framer-1xcolmq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: hidden; position: absolute; right: 26px; top: 52%; width: 32px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-t5jFL .framer-18s6e8v { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); left: 72px; overflow: hidden; position: absolute; top: 52%; width: 32px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-t5jFL .framer-16gerwl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-t5jFL .framer-jh7333 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-t5jFL .framer-tq24f9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-t5jFL.framer-m0639, .framer-t5jFL .framer-lpp1y0, .framer-t5jFL .framer-16gerwl, .framer-t5jFL .framer-jh7333 { gap: 0px; } .framer-t5jFL.framer-m0639 > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } .framer-t5jFL.framer-m0639 > :first-child, .framer-t5jFL .framer-jh7333 > :first-child { margin-top: 0px; } .framer-t5jFL.framer-m0639 > :last-child, .framer-t5jFL .framer-jh7333 > :last-child { margin-bottom: 0px; } .framer-t5jFL .framer-lpp1y0 > *, .framer-t5jFL .framer-16gerwl > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-t5jFL .framer-lpp1y0 > :first-child, .framer-t5jFL .framer-16gerwl > :first-child { margin-left: 0px; } .framer-t5jFL .framer-lpp1y0 > :last-child, .framer-t5jFL .framer-16gerwl > :last-child { margin-right: 0px; } .framer-t5jFL .framer-jh7333 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }", ...css6, '.framer-t5jFL[data-border="true"]::after, .framer-t5jFL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var Framerpd_b9Ln55 = withCSS3(Component3, css7, "framer-t5jFL");
var pd_b9Ln55_default = Framerpd_b9Ln55;
Framerpd_b9Ln55.displayName = "Other /  Social Proof";
Framerpd_b9Ln55.defaultProps = { height: 79, width: 165 };
addPropertyControls4(Framerpd_b9Ln55, { QP2l30iYm: { defaultValue: "Trusted by 20+ startups", displayTextArea: false, title: "Title", type: ControlType7.String }, pQMDR2JbF: { title: "Avatar_1", type: ControlType7.ResponsiveImage }, Q88rmj0r8: { title: "Avatar_2", type: ControlType7.ResponsiveImage }, yW91fuYWK: { title: "Avatar_3", type: ControlType7.ResponsiveImage }, ZDiOf0_Jf: { title: "Avatar_4", type: ControlType7.ResponsiveImage } });
addFonts3(Framerpd_b9Ln55, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle2(fonts4)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/qnlfTQodBKzQXU7jswKb/ZDweCZoFCQrgdYTEqlx6/PyAGkYlzY.js
import { jsx as _jsx5 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls5, ControlType as ControlType8, cx as cx4, Link, RichText as RichText4, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS4 } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React7 from "react";
var enabledGestures = { a6r6SQFYK: { hover: true }, B783PNYSb: { hover: true } };
var cycleOrder4 = ["B783PNYSb", "a6r6SQFYK"];
var serializationHash4 = "framer-OOUVT";
var variantClassNames4 = { a6r6SQFYK: "framer-v-18d844t", B783PNYSb: "framer-v-5etivg" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition14 = { damping: 60, delay: 0, mass: 1, stiffness: 650, type: "spring" };
var Transition4 = ({ value, children }) => {
  const config = React7.useContext(MotionConfigContext4);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React7.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext4.Provider, { value: contextValue, children });
};
var Variants4 = motion4(React7.Fragment);
var humanReadableVariantMap2 = { Dark: "B783PNYSb", White: "a6r6SQFYK" };
var getProps4 = ({ height, id, link, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return { ...props, cBIHI_0LW: link !== null && link !== void 0 ? link : props.cBIHI_0LW, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "B783PNYSb" };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React7.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo4();
  const { style, className: className5, layoutId, variant, cBIHI_0LW, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ cycleOrder: cycleOrder4, defaultVariant: "B783PNYSb", enabledGestures, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const ref1 = React7.useRef(null);
  const defaultLayoutId = React7.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport4();
  return /* @__PURE__ */ _jsx5(LayoutGroup4, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition4, { value: transition14, children: /* @__PURE__ */ _jsx5(Link, { href: cBIHI_0LW, children: /* @__PURE__ */ _jsx5(motion4.a, { ...restProps, ...gestureHandlers, className: `${cx4(serializationHash4, ...sharedStyleClassNames, "framer-5etivg", className5, classNames)} framer-facaus`, "data-border": true, "data-framer-name": "Dark", layoutDependency, layoutId: "Hero__B783PNYSb", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "rgb(18, 18, 18)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-058de71b-3cb7-43f5-ba2c-1b3a84868d59, rgb(18, 18, 18))", borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16, boxShadow: "inset 0px 0.6021873017743928px 1.083937143193907px -0.9166666666666666px rgba(255, 255, 255, 0.35359), inset 0px 2.288533303243457px 4.119359945838223px -1.8333333333333333px rgba(255, 255, 255, 0.34262), inset 0px 10px 18px -2.75px rgba(255, 255, 255, 0.2925), 0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.21597), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.19067), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.075)", ...style }, variants: { "a6r6SQFYK-hover": { "--border-bottom-width": "0px", "--border-left-width": "0px", "--border-right-width": "0px", "--border-top-width": "0px", backgroundColor: "rgb(232, 232, 232)", boxShadow: "0px 0px 0px 6px rgba(255, 255, 255, 0.15)" }, "B783PNYSb-hover": { "--border-color": "rgb(64, 64, 64)", backgroundColor: "rgb(56, 56, 56)", boxShadow: "inset 0px 0.6021873017743928px 1.083937143193907px -0.9166666666666666px rgba(255, 255, 255, 0.35359), inset 0px 2.288533303243457px 4.119359945838223px -1.8333333333333333px rgba(255, 255, 255, 0.34262), inset 0px 10px 18px -2.75px rgba(255, 255, 255, 0.2925), 0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.21597), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.19067), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.075), 0px 0px 0px 6px rgba(0, 0, 0, 0.1)" }, a6r6SQFYK: { "--border-bottom-width": "0px", "--border-left-width": "0px", "--border-right-width": "0px", "--border-top-width": "0px", backgroundColor: "var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255))" } }, ...addPropertyOverrides2({ "a6r6SQFYK-hover": { "data-framer-name": void 0 }, "B783PNYSb-hover": { "data-framer-name": void 0 }, a6r6SQFYK: { "data-framer-name": "White" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx5(motion4.div, { className: "framer-1p7ruhx", layoutDependency, layoutId: "Hero__AfsE6t1b_", children: /* @__PURE__ */ _jsx5(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React7.Fragment, { children: /* @__PURE__ */ _jsx5(motion4.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-size": "18px", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.04em", "--framer-line-height": "1.1em", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }, children: "Say Hello" }) }), className: "framer-1w4as3r", fonts: ["FS;Satoshi-medium"], layoutDependency, layoutId: "Hero__B6RizpwmH", style: { "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, variants: { a6r6SQFYK: { "--extracted-r6o4lv": "rgb(5, 5, 5)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides2({ a6r6SQFYK: { children: /* @__PURE__ */ _jsx5(React7.Fragment, { children: /* @__PURE__ */ _jsx5(motion4.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-size": "18px", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.04em", "--framer-line-height": "1.1em", "--framer-text-color": "var(--extracted-r6o4lv, rgb(5, 5, 5))" }, children: "Say Hello" }) }) } }, baseVariant, gestureVariant) }) }) }) }) }) }) });
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-OOUVT.framer-facaus, .framer-OOUVT .framer-facaus { display: block; }", ".framer-OOUVT.framer-5etivg { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-OOUVT .framer-1p7ruhx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: min-content; }", ".framer-OOUVT .framer-1w4as3r { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-OOUVT.framer-5etivg, .framer-OOUVT .framer-1p7ruhx { gap: 0px; } .framer-OOUVT.framer-5etivg > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-OOUVT.framer-5etivg > :first-child { margin-top: 0px; } .framer-OOUVT.framer-5etivg > :last-child { margin-bottom: 0px; } .framer-OOUVT .framer-1p7ruhx > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-OOUVT .framer-1p7ruhx > :first-child { margin-left: 0px; } .framer-OOUVT .framer-1p7ruhx > :last-child { margin-right: 0px; } }", '.framer-OOUVT[data-border="true"]::after, .framer-OOUVT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerPyAGkYlzY = withCSS4(Component4, css8, "framer-OOUVT");
var PyAGkYlzY_default = FramerPyAGkYlzY;
FramerPyAGkYlzY.displayName = "Buttons / Button | Large";
FramerPyAGkYlzY.defaultProps = { height: 48, width: 149 };
addPropertyControls5(FramerPyAGkYlzY, { variant: { options: ["B783PNYSb", "a6r6SQFYK"], optionTitles: ["Dark", "White"], title: "Variant", type: ControlType8.Enum }, cBIHI_0LW: { title: "Link", type: ControlType8.Link } });
addFonts4(FramerPyAGkYlzY, [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/NYLxm1gkc9tpa170cTZF/7IkKSXZXENiroDO2Iv0G/NUitZxeqv.js
var TagsTagHeroFonts = getFonts(dyfGXVTmv_default);
var ButtonsButtonLargeFonts = getFonts(PyAGkYlzY_default);
var OtherSocialProofFonts = getFonts(pd_b9Ln55_default);
var TimeDateFonts = getFonts(Time);
var CursorsCursorHeroFonts = getFonts(lohBYJvQe_default);
var cycleOrder5 = ["cEFViquHj", "w8HHn6tXU", "quW0Pphr_", "x7SKdPrH8"];
var serializationHash5 = "framer-F2l5C";
var variantClassNames5 = { cEFViquHj: "framer-v-1e22zen", quW0Pphr_: "framer-v-pum6ic", w8HHn6tXU: "framer-v-1k24vri", x7SKdPrH8: "framer-v-11shc0a" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition15 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var transition22 = { damping: 30, delay: 0, mass: 1, stiffness: 463, type: "spring" };
var animation4 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.02, skewX: 0, skewY: 0, transition: transition22, y: -2 };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var addImageAlt = (image, alt) => {
  if (!image || typeof image !== "object") {
    return;
  }
  return { ...image, alt };
};
var Transition5 = ({ value, children }) => {
  const config = React8.useContext(MotionConfigContext5);
  const transition = value ?? config.transition;
  const contextValue = React8.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx6(MotionConfigContext5.Provider, { value: contextValue, children });
};
var humanReadableVariantMap3 = { "Desktop | L": "cEFViquHj", "Desktop | M": "w8HHn6tXU", Phone: "x7SKdPrH8", Tablet: "quW0Pphr_" };
var Variants5 = motion5.create(React8.Fragment);
var getProps5 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "cEFViquHj" };
};
var createLayoutDependency5 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = /* @__PURE__ */ React8.forwardRef(function(props, ref) {
  const fallbackRef = useRef8(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React8.useId();
  const { activeLocale, setLocale } = useLocaleInfo5();
  const componentViewport = useComponentViewport5();
  const { style, className: className5, layoutId, variant, ...restProps } = getProps5(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState5({ cycleOrder: cycleOrder5, defaultVariant: "cEFViquHj", ref: refBinding, variant, variantClassNames: variantClassNames5 });
  const layoutDependency = createLayoutDependency5(props, variants);
  const sharedStyleClassNames = [className2, className];
  const scopingClassNames = cx5(serializationHash5, ...sharedStyleClassNames);
  const router = useRouter();
  return /* @__PURE__ */ _jsx6(LayoutGroup5, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx6(Variants5, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx6(Transition5, { value: transition15, children: /* @__PURE__ */ _jsxs4(motion5.section, { ...restProps, ...gestureHandlers, className: cx5(scopingClassNames, "framer-1e22zen", className5, classNames), "data-border": true, "data-framer-name": "Desktop | L", layoutDependency, layoutId: "Hero__cEFViquHj", ref: refBinding, style: { "--border-bottom-width": "1px", "--border-color": "rgba(33, 33, 33, 0.18)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "dashed", "--border-top-width": "0px", backgroundColor: "var(--token-9ac9dc08-9c5a-459d-a360-b1ebb1520f81, rgb(252, 249, 245))", ...style }, ...addPropertyOverrides3({ quW0Pphr_: { "data-framer-name": "Tablet" }, w8HHn6tXU: { "data-framer-name": "Desktop | M" }, x7SKdPrH8: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs4(motion5.div, { className: "framer-1wdxr5a", "data-framer-name": "Background", layoutDependency, layoutId: "Hero__Ttm8BswYh", children: [/* @__PURE__ */ _jsx6(Image1, { background: { alt: "", fit: "fill", intrinsicHeight: 450, intrinsicWidth: 800, loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + -42 + 0), pixelHeight: 2700, pixelWidth: 4800, sizes: componentViewport?.width || "100vw", src: "https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?width=4800&height=2700", srcSet: "https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?scale-down-to=512&width=4800&height=2700 512w,https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?scale-down-to=1024&width=4800&height=2700 1024w,https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?scale-down-to=2048&width=4800&height=2700 2048w,https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?scale-down-to=4096&width=4800&height=2700 4096w,https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?width=4800&height=2700 4800w" }, className: "framer-1bfxfs0", "data-framer-name": "BG_Image", layoutDependency, layoutId: "Hero__EpNwvCc6E", style: { mask: "linear-gradient(0deg, rgba(0,0,0,0) 66%, rgba(0,0,0,1) 100%) add", WebkitMask: "linear-gradient(0deg, rgba(0,0,0,0) 66%, rgba(0,0,0,1) 100%) add" }, variants: { x7SKdPrH8: { mask: "linear-gradient(0deg, rgba(0,0,0,0) 26%, rgba(0,0,0,1) 100%) add", WebkitMask: "linear-gradient(0deg, rgba(0,0,0,0) 26%, rgba(0,0,0,1) 100%) add" } }, ...addPropertyOverrides3({ x7SKdPrH8: { background: { alt: "", fit: "fill", intrinsicHeight: 450, intrinsicWidth: 800, loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + -42 + -10), pixelHeight: 2700, pixelWidth: 4800, sizes: `calc(${componentViewport?.width || "100vw"} * 1.2128)`, src: "https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?width=4800&height=2700", srcSet: "https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?scale-down-to=512&width=4800&height=2700 512w,https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?scale-down-to=1024&width=4800&height=2700 1024w,https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?scale-down-to=2048&width=4800&height=2700 2048w,https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?scale-down-to=4096&width=4800&height=2700 4096w,https://framerusercontent.com/images/R0WVtWCpzNL81eNF5wrZjUj7s0k.png?width=4800&height=2700 4800w" } } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx6(Image1, { background: { alt: "", backgroundSize: 0.5, fit: "tile", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + -42 + 804 - 784), pixelHeight: 96, pixelWidth: 96, positionX: "left", positionY: "top", sizes: componentViewport?.width || "100vw", src: "https://framerusercontent.com/images/c0EZxtMucSR6UOSZk2TBnWsqr4.svg?width=96&height=96" }, className: "framer-o3uq2f", "data-framer-name": "BG", layoutDependency, layoutId: "Hero__S4RWJ38oV", style: { mask: "radial-gradient(85% 75% at 48.8% 27.3%, rgba(0,0,0,1) 50.11437218468468%, rgba(0,0,0,0) 83.0394847972973%) add", opacity: 0.1, WebkitMask: "radial-gradient(85% 75% at 48.8% 27.3%, rgba(0,0,0,1) 50.11437218468468%, rgba(0,0,0,0) 83.0394847972973%) add" }, ...addPropertyOverrides3({ x7SKdPrH8: { background: { alt: "", backgroundSize: 0.58, fit: "tile", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + -42 + 804 - 784), pixelHeight: 96, pixelWidth: 96, positionX: "left", positionY: "top", sizes: componentViewport?.width || "100vw", src: "https://framerusercontent.com/images/c0EZxtMucSR6UOSZk2TBnWsqr4.svg?width=96&height=96" } } }, baseVariant, gestureVariant) })] }), /* @__PURE__ */ _jsxs4(motion5.div, { className: "framer-3qbp5v", "data-border": true, "data-framer-name": "Central Section", layoutDependency, layoutId: "Hero__vnTaXsR2O", style: { "--border-bottom-width": "0px", "--border-color": "rgba(33, 33, 33, 0.18)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "dashed", "--border-top-width": "0px" }, variants: { x7SKdPrH8: { "--border-left-width": "0px", "--border-right-width": "0px" } }, children: [/* @__PURE__ */ _jsxs4(motion5.div, { className: "framer-1f55p3", "data-framer-name": "Container", layoutDependency, layoutId: "Hero__k05l40nsB", children: [/* @__PURE__ */ _jsxs4(motion5.div, { className: "framer-x606zu", "data-framer-name": "Content", layoutDependency, layoutId: "Hero__k6G6rONtv", children: [/* @__PURE__ */ _jsx6(ComponentViewportProvider, { height: 31, y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 784) - 0 - (Math.max(0, ((componentViewport?.height || 784) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + 64 + ((Math.max(0, ((componentViewport?.height || 784) - 0 - 0) / 1) * 1 - 64 - 463.78) / 2 + 0 + 0) + 0 + 0 + 0 + 0, ...addPropertyOverrides3({ quW0Pphr_: { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 880) - 0 - (Math.max(0, ((componentViewport?.height || 880) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + 64 + ((Math.max(0, ((componentViewport?.height || 880) - 0 - 0) / 1) * 1 - 64 - 463.78) / 2 + 0 + 0) + 0 + 0 + 0 + 0 }, x7SKdPrH8: { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 720) - 0 - (Math.max(0, ((componentViewport?.height || 720) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + 40 + ((Math.max(0, ((componentViewport?.height || 720) - 0 - 0) / 1) * 1 - 40 - 455.78) / 2 + 0 + 0) + 0 + 0 + 0 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer, { className: "framer-u68790-container", layoutDependency, layoutId: "Hero__pKhsZcItx-container", nodeId: "pKhsZcItx", rendersWithMotion: true, scopeId: "NUitZxeqv", children: /* @__PURE__ */ _jsx6(dyfGXVTmv_default, { height: "100%", id: "pKhsZcItx", layoutId: "Hero__pKhsZcItx", pWhJivMWJ: "Now booking for Q3", width: "100%" }) }) }), /* @__PURE__ */ _jsx6(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React8.Fragment, { children: /* @__PURE__ */ _jsxs4(motion5.h1, { className: "framer-styles-preset-1oesitz", "data-styles-preset": "WyQx75o2d", style: { "--framer-text-color": "var(--extracted-gdpscs, var(--token-81ac12ce-6806-4ef8-aeb9-63089e9ec4fc, rgb(0, 0, 0)))" }, children: [/* @__PURE__ */ _jsx6(motion5.span, { style: { "--framer-text-color": "var(--extracted-1sp2osd, var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55)))" }, children: "Design so good, " }), "it should come with a warning label"] }) }), className: "framer-1tm94tp", fonts: ["Inter"], layoutDependency, layoutId: "Hero__aAM3ExUBX", style: { "--extracted-1sp2osd": "var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55))", "--extracted-gdpscs": "var(--token-81ac12ce-6806-4ef8-aeb9-63089e9ec4fc, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx6(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React8.Fragment, { children: /* @__PURE__ */ _jsx6(motion5.p, { className: "framer-styles-preset-wro55n", "data-styles-preset": "R4ZMKeSGK", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55)))" }, children: "From concept to launch, we create seamless digital experiences that resonate with your audience." }) }), className: "framer-1f9pclm", fonts: ["Inter"], layoutDependency, layoutId: "Hero__kTU8CX7CI", style: { "--extracted-r6o4lv": "var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsxs4(motion5.div, { className: "framer-18gmldz", "data-framer-name": "Button + Social Proof", layoutDependency, layoutId: "Hero__Nh4LLLx87", children: [/* @__PURE__ */ _jsx6(ResolveLinks, { links: [{ href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }, { href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }, { href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }, { href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx6(ComponentViewportProvider, { height: 49, y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 784) - 0 - (Math.max(0, ((componentViewport?.height || 784) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + 64 + ((Math.max(0, ((componentViewport?.height || 784) - 0 - 0) / 1) * 1 - 64 - 463.78) / 2 + 0 + 0) + 0 + 307.78 + 0 + 0, ...addPropertyOverrides3({ quW0Pphr_: { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 880) - 0 - (Math.max(0, ((componentViewport?.height || 880) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + 64 + ((Math.max(0, ((componentViewport?.height || 880) - 0 - 0) / 1) * 1 - 64 - 463.78) / 2 + 0 + 0) + 0 + 307.78 + 0 + 0 }, x7SKdPrH8: { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 720) - 0 - (Math.max(0, ((componentViewport?.height || 720) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + 40 + ((Math.max(0, ((componentViewport?.height || 720) - 0 - 0) / 1) * 1 - 40 - 455.78) / 2 + 0 + 0) + 0 + 299.78 + 0 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer, { className: "framer-q0au9y-container", layoutDependency, layoutId: "Hero__N5Nz6B5nq-container", nodeId: "N5Nz6B5nq", rendersWithMotion: true, scopeId: "NUitZxeqv", whileHover: animation4, children: /* @__PURE__ */ _jsx6(PyAGkYlzY_default, { cBIHI_0LW: resolvedLinks[0], height: "100%", id: "N5Nz6B5nq", layoutId: "Hero__N5Nz6B5nq", style: { height: "100%" }, variant: matchVariant("B783PNYSb"), width: "100%", ...addPropertyOverrides3({ quW0Pphr_: { cBIHI_0LW: resolvedLinks[2] }, w8HHn6tXU: { cBIHI_0LW: resolvedLinks[1] }, x7SKdPrH8: { cBIHI_0LW: resolvedLinks[3] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx6(ComponentViewportProvider, { height: 79, y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 784) - 0 - (Math.max(0, ((componentViewport?.height || 784) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + 64 + ((Math.max(0, ((componentViewport?.height || 784) - 0 - 0) / 1) * 1 - 64 - 463.78) / 2 + 0 + 0) + 0 + 307.78 + 0 + 77, ...addPropertyOverrides3({ quW0Pphr_: { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 880) - 0 - (Math.max(0, ((componentViewport?.height || 880) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + 64 + ((Math.max(0, ((componentViewport?.height || 880) - 0 - 0) / 1) * 1 - 64 - 463.78) / 2 + 0 + 0) + 0 + 307.78 + 0 + 77 }, x7SKdPrH8: { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 720) - 0 - (Math.max(0, ((componentViewport?.height || 720) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + 40 + ((Math.max(0, ((componentViewport?.height || 720) - 0 - 0) / 1) * 1 - 40 - 455.78) / 2 + 0 + 0) + 0 + 299.78 + 0 + 77 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer, { className: "framer-xccss9-container", layoutDependency, layoutId: "Hero__ENc_JVICW-container", nodeId: "ENc_JVICW", rendersWithMotion: true, scopeId: "NUitZxeqv", children: /* @__PURE__ */ _jsx6(pd_b9Ln55_default, { height: "100%", id: "ENc_JVICW", layoutId: "Hero__ENc_JVICW", pQMDR2JbF: addImageAlt({ pixelHeight: 4e3, pixelWidth: 4e3, src: "https://framerusercontent.com/images/Ky8xfxIZ6aXUUztI3YWXxaM.jpg?width=4000&height=4000", srcSet: "https://framerusercontent.com/images/Ky8xfxIZ6aXUUztI3YWXxaM.jpg?scale-down-to=512&width=4000&height=4000 512w,https://framerusercontent.com/images/Ky8xfxIZ6aXUUztI3YWXxaM.jpg?scale-down-to=1024&width=4000&height=4000 1024w,https://framerusercontent.com/images/Ky8xfxIZ6aXUUztI3YWXxaM.jpg?scale-down-to=2048&width=4000&height=4000 2048w,https://framerusercontent.com/images/Ky8xfxIZ6aXUUztI3YWXxaM.jpg?width=4000&height=4000 4000w" }, ""), Q88rmj0r8: addImageAlt({ pixelHeight: 2848, pixelWidth: 4272, src: "https://framerusercontent.com/images/Zu6jmD875NxsjkddSfFYNl6eQ.jpg?width=4272&height=2848", srcSet: "https://framerusercontent.com/images/Zu6jmD875NxsjkddSfFYNl6eQ.jpg?scale-down-to=512&width=4272&height=2848 512w,https://framerusercontent.com/images/Zu6jmD875NxsjkddSfFYNl6eQ.jpg?scale-down-to=1024&width=4272&height=2848 1024w,https://framerusercontent.com/images/Zu6jmD875NxsjkddSfFYNl6eQ.jpg?scale-down-to=2048&width=4272&height=2848 2048w,https://framerusercontent.com/images/Zu6jmD875NxsjkddSfFYNl6eQ.jpg?scale-down-to=4096&width=4272&height=2848 4096w,https://framerusercontent.com/images/Zu6jmD875NxsjkddSfFYNl6eQ.jpg?width=4272&height=2848 4272w" }, ""), QP2l30iYm: "Trusted by 20+ startups", width: "100%", yW91fuYWK: addImageAlt({ pixelHeight: 4928, pixelWidth: 3264, src: "https://framerusercontent.com/images/i7AAfGuAMw3i2nhPsu8bHkvt2wk.jpg?width=3264&height=4928", srcSet: "https://framerusercontent.com/images/i7AAfGuAMw3i2nhPsu8bHkvt2wk.jpg?scale-down-to=1024&width=3264&height=4928 678w,https://framerusercontent.com/images/i7AAfGuAMw3i2nhPsu8bHkvt2wk.jpg?scale-down-to=2048&width=3264&height=4928 1356w,https://framerusercontent.com/images/i7AAfGuAMw3i2nhPsu8bHkvt2wk.jpg?scale-down-to=4096&width=3264&height=4928 2712w,https://framerusercontent.com/images/i7AAfGuAMw3i2nhPsu8bHkvt2wk.jpg?width=3264&height=4928 3264w" }, ""), ZDiOf0_Jf: addImageAlt({ pixelHeight: 5760, pixelWidth: 3840, src: "https://framerusercontent.com/images/kGbwa4d6dl3T9qSyfhfxB8oHqp4.jpg?width=3840&height=5760", srcSet: "https://framerusercontent.com/images/kGbwa4d6dl3T9qSyfhfxB8oHqp4.jpg?scale-down-to=1024&width=3840&height=5760 682w,https://framerusercontent.com/images/kGbwa4d6dl3T9qSyfhfxB8oHqp4.jpg?scale-down-to=2048&width=3840&height=5760 1365w,https://framerusercontent.com/images/kGbwa4d6dl3T9qSyfhfxB8oHqp4.jpg?scale-down-to=4096&width=3840&height=5760 2730w,https://framerusercontent.com/images/kGbwa4d6dl3T9qSyfhfxB8oHqp4.jpg?width=3840&height=5760 3840w" }, "") }) }) })] })] }), /* @__PURE__ */ _jsxs4(motion5.div, { className: "framer-65xjw9", "data-border": true, "data-framer-name": "Bottom | Info", layoutDependency, layoutId: "Hero__UmhrT8PeM", style: { "--border-bottom-width": "0px", "--border-color": "rgb(77, 77, 77)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgb(235, 232, 230)" }, variants: { x7SKdPrH8: { "--border-left-width": "0px", "--border-right-width": "0px" } }, children: [/* @__PURE__ */ _jsx6(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React8.Fragment, { children: /* @__PURE__ */ _jsx6(motion5.p, { className: "framer-styles-preset-wro55n", "data-styles-preset": "R4ZMKeSGK", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-81ac12ce-6806-4ef8-aeb9-63089e9ec4fc, rgb(0, 0, 0)))" }, children: "Riga, Latvia" }) }), className: "framer-t47i9u", fonts: ["Inter"], layoutDependency, layoutId: "Hero__nVQInr_uH", style: { "--extracted-r6o4lv": "var(--token-81ac12ce-6806-4ef8-aeb9-63089e9ec4fc, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, variants: { x7SKdPrH8: { "--extracted-r6o4lv": "rgb(0, 0, 0)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides3({ x7SKdPrH8: { children: /* @__PURE__ */ _jsx6(React8.Fragment, { children: /* @__PURE__ */ _jsx6(motion5.p, { className: "framer-styles-preset-wro55n", "data-styles-preset": "R4ZMKeSGK", style: { "--framer-text-color": "var(--extracted-r6o4lv, rgb(0, 0, 0))" }, children: "Riga, Latvia" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx6(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer, { className: "framer-1enjpoh-container", isAuthoredByUser: true, layoutDependency, layoutId: "Hero__h0Tne4CwLG4irC0dm5-container", nodeId: "h0Tne4CwLG4irC0dm5", rendersWithMotion: true, scopeId: "NUitZxeqv", children: /* @__PURE__ */ _jsx6(Time, { color: "var(--token-81ac12ce-6806-4ef8-aeb9-63089e9ec4fc, rgb(0, 0, 0))", customLocale: "en", font: { fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif', fontSize: "18px", fontStyle: "normal", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "1em" }, height: "100%", id: "h0Tne4CwLG4irC0dm5", layoutId: "Hero__h0Tne4CwLG4irC0dm5", localeType: "custom", monthFormat: "short", outputType: "time", showHours: true, showMinutes: true, showSeconds: false, showWeekday: false, showYear: true, timeFormat: "12h", width: "100%", ...addPropertyOverrides3({ x7SKdPrH8: { font: { fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif', fontSize: "16px", fontStyle: "normal", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "1em" } } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx6(Image1, { background: { alt: "", backgroundSize: 0.55, fit: "tile", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 784) - 0 - (Math.max(0, ((componentViewport?.height || 784) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + Math.max(0, ((componentViewport?.height || 784) - 0 - 0) / 1) * 1 - 72 + 0), pixelHeight: 126, pixelWidth: 126, positionX: "left", positionY: "top", sizes: `calc(min(${componentViewport?.width || "100vw"}, 800px) - 2px)`, src: "https://framerusercontent.com/images/27lPwr6m0qWCWuTd76MieCfLWY.svg?width=126&height=126" }, className: "framer-180lx7r", "data-framer-name": "BG", layoutDependency, layoutId: "Hero__pNGIBKZrW", style: { opacity: 0.35 }, ...addPropertyOverrides3({ quW0Pphr_: { background: { alt: "", backgroundSize: 0.55, fit: "tile", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 880) - 0 - (Math.max(0, ((componentViewport?.height || 880) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + Math.max(0, ((componentViewport?.height || 880) - 0 - 0) / 1) * 1 - 72 + 0), pixelHeight: 126, pixelWidth: 126, positionX: "left", positionY: "top", sizes: `calc(min(${componentViewport?.width || "100vw"}, 800px) - 2px)`, src: "https://framerusercontent.com/images/27lPwr6m0qWCWuTd76MieCfLWY.svg?width=126&height=126" } }, x7SKdPrH8: { background: { alt: "", backgroundSize: 0.55, fit: "tile", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 720) - 0 - (Math.max(0, ((componentViewport?.height || 720) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + Math.max(0, ((componentViewport?.height || 720) - 0 - 0) / 1) * 1 - 60 + 0), pixelHeight: 126, pixelWidth: 126, positionX: "left", positionY: "top", sizes: `calc(min(${componentViewport?.width || "100vw"}, 800px) - 4px)`, src: "https://framerusercontent.com/images/27lPwr6m0qWCWuTd76MieCfLWY.svg?width=126&height=126" } } }, baseVariant, gestureVariant) })] })] }), /* @__PURE__ */ _jsx6(ComponentViewportProvider, { height: 62, y: (componentViewport?.y || 0) + (componentViewport?.height || 784) - 373, ...addPropertyOverrides3({ quW0Pphr_: { y: (componentViewport?.y || 0) + (componentViewport?.height || 880) - 373 }, x7SKdPrH8: { y: (componentViewport?.y || 0) + (componentViewport?.height || 720) - 242 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer, { className: "framer-u6j0so-container", layoutDependency, layoutId: "Hero__Jh5yqs3xi-container", nodeId: "Jh5yqs3xi", rendersWithMotion: true, scopeId: "NUitZxeqv", children: /* @__PURE__ */ _jsx6(lohBYJvQe_default, { height: "100%", id: "Jh5yqs3xi", layoutId: "Hero__Jh5yqs3xi", variant: matchVariant("d8kLfuUqJ"), width: "100%", xuugP6ZwC: "Lead designer", ...addPropertyOverrides3({ x7SKdPrH8: { variant: matchVariant("PE_yXhEDl") } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx6(Image1, { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (componentViewport?.height || 784) - 454.5), pixelHeight: 1440, pixelWidth: 1920, sizes: "366px", src: "https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?lossless=1&width=1920&height=1440", srcSet: "https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?scale-down-to=512&lossless=1&width=1920&height=1440 512w,https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?scale-down-to=1024&lossless=1&width=1920&height=1440 1024w,https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?lossless=1&width=1920&height=1440 1920w" }, className: "framer-eq4821", "data-border": true, "data-framer-name": "Screenshot_01", layoutDependency, layoutId: "Hero__WY4ggXQCK", style: { "--border-bottom-width": "3px", "--border-color": "rgba(255, 255, 255, 0.7)", "--border-left-width": "3px", "--border-right-width": "3px", "--border-style": "solid", "--border-top-width": "3px", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, rotate: -4 }, variants: { quW0Pphr_: { rotate: 2 }, w8HHn6tXU: { rotate: 2 }, x7SKdPrH8: { rotate: 2 } }, ...addPropertyOverrides3({ quW0Pphr_: { background: { alt: "", fit: "fill", pixelHeight: 1440, pixelWidth: 1920, src: "https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?lossless=1&width=1920&height=1440", srcSet: "https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?scale-down-to=512&lossless=1&width=1920&height=1440 512w,https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?scale-down-to=1024&lossless=1&width=1920&height=1440 1024w,https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?lossless=1&width=1920&height=1440 1920w" } }, w8HHn6tXU: { background: { alt: "", fit: "fill", pixelHeight: 1440, pixelWidth: 1920, src: "https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?lossless=1&width=1920&height=1440", srcSet: "https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?scale-down-to=512&lossless=1&width=1920&height=1440 512w,https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?scale-down-to=1024&lossless=1&width=1920&height=1440 1024w,https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?lossless=1&width=1920&height=1440 1920w" } }, x7SKdPrH8: { background: { alt: "", fit: "fill", pixelHeight: 1440, pixelWidth: 1920, src: "https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?lossless=1&width=1920&height=1440", srcSet: "https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?scale-down-to=512&lossless=1&width=1920&height=1440 512w,https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?scale-down-to=1024&lossless=1&width=1920&height=1440 1024w,https://framerusercontent.com/images/ExvGJwx64OaoadSMUaTXBxaIi0c.png?lossless=1&width=1920&height=1440 1920w" } } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx6(Image1, { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (componentViewport?.height || 784) - 237), pixelHeight: 1200, pixelWidth: 1600, sizes: "190px", src: "https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?width=1600&height=1200", srcSet: "https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?scale-down-to=512&width=1600&height=1200 512w,https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?scale-down-to=1024&width=1600&height=1200 1024w,https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?width=1600&height=1200 1600w" }, className: "framer-13oj39l", "data-border": true, "data-framer-name": "Screenshot_02", layoutDependency, layoutId: "Hero__nZRd5hyPU", style: { "--border-bottom-width": "3px", "--border-color": "rgba(255, 255, 255, 0.7)", "--border-left-width": "3px", "--border-right-width": "3px", "--border-style": "solid", "--border-top-width": "3px", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, rotate: 3 }, variants: { quW0Pphr_: { rotate: 2 }, w8HHn6tXU: { rotate: 2 }, x7SKdPrH8: { rotate: 2 } }, ...addPropertyOverrides3({ quW0Pphr_: { background: { alt: "", fit: "fill", pixelHeight: 1200, pixelWidth: 1600, src: "https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?width=1600&height=1200", srcSet: "https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?scale-down-to=512&width=1600&height=1200 512w,https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?scale-down-to=1024&width=1600&height=1200 1024w,https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?width=1600&height=1200 1600w" } }, w8HHn6tXU: { background: { alt: "", fit: "fill", pixelHeight: 1200, pixelWidth: 1600, src: "https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?width=1600&height=1200", srcSet: "https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?scale-down-to=512&width=1600&height=1200 512w,https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?scale-down-to=1024&width=1600&height=1200 1024w,https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?width=1600&height=1200 1600w" } }, x7SKdPrH8: { background: { alt: "", fit: "fill", pixelHeight: 1200, pixelWidth: 1600, src: "https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?width=1600&height=1200", srcSet: "https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?scale-down-to=512&width=1600&height=1200 512w,https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?scale-down-to=1024&width=1600&height=1200 1024w,https://framerusercontent.com/images/F9D2Bc3gYhXliacAJWbe37L0c.png?width=1600&height=1200 1600w" } } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React8.Fragment, { children: /* @__PURE__ */ _jsx6(motion5.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-size": "10px", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "1.4em", "--framer-text-color": "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.75))" }, children: "Craftwork.design" }) }), className: "framer-164sre3", fonts: ["FS;Satoshi-medium"], layoutDependency, layoutId: "Hero__B84uTwdMe", style: { "--extracted-r6o4lv": "rgba(255, 255, 255, 0.75)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", rotate: 90 }, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx6(Image1, { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (componentViewport?.height || 784) - 405), pixelHeight: 1200, pixelWidth: 1600, sizes: "190px", src: "https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?lossless=1&width=1600&height=1200", srcSet: "https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?scale-down-to=512&lossless=1&width=1600&height=1200 512w,https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?scale-down-to=1024&lossless=1&width=1600&height=1200 1024w,https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?lossless=1&width=1600&height=1200 1600w" }, className: "framer-16j885s", "data-border": true, "data-framer-name": "Screenshot_03", layoutDependency, layoutId: "Hero__CpKwW4TIr", style: { "--border-bottom-width": "3px", "--border-color": "rgba(255, 255, 255, 0.7)", "--border-left-width": "3px", "--border-right-width": "3px", "--border-style": "solid", "--border-top-width": "3px", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, rotate: 2 }, ...addPropertyOverrides3({ quW0Pphr_: { background: { alt: "", fit: "fill", pixelHeight: 1200, pixelWidth: 1600, src: "https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?lossless=1&width=1600&height=1200", srcSet: "https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?scale-down-to=512&lossless=1&width=1600&height=1200 512w,https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?scale-down-to=1024&lossless=1&width=1600&height=1200 1024w,https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?lossless=1&width=1600&height=1200 1600w" } }, w8HHn6tXU: { background: { alt: "", fit: "fill", pixelHeight: 1200, pixelWidth: 1600, src: "https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?lossless=1&width=1600&height=1200", srcSet: "https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?scale-down-to=512&lossless=1&width=1600&height=1200 512w,https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?scale-down-to=1024&lossless=1&width=1600&height=1200 1024w,https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?lossless=1&width=1600&height=1200 1600w" } }, x7SKdPrH8: { background: { alt: "", fit: "fill", pixelHeight: 1200, pixelWidth: 1600, src: "https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?lossless=1&width=1600&height=1200", srcSet: "https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?scale-down-to=512&lossless=1&width=1600&height=1200 512w,https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?scale-down-to=1024&lossless=1&width=1600&height=1200 1024w,https://framerusercontent.com/images/pdHyNqlC3Loy1vqH4foQ1EZjGE.png?lossless=1&width=1600&height=1200 1600w" } } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx6(Image1, { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (componentViewport?.height || 784) - 244.5), pixelHeight: 1200, pixelWidth: 1600, sizes: "366px", src: "https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?width=1600&height=1200", srcSet: "https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?scale-down-to=512&width=1600&height=1200 512w,https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?scale-down-to=1024&width=1600&height=1200 1024w,https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?width=1600&height=1200 1600w" }, className: "framer-8sbbw2", "data-border": true, "data-framer-name": "Screenshot_04", layoutDependency, layoutId: "Hero__FD_UhuLoC", style: { "--border-bottom-width": "3px", "--border-color": "rgba(255, 255, 255, 0.7)", "--border-left-width": "3px", "--border-right-width": "3px", "--border-style": "solid", "--border-top-width": "3px", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, rotate: -4 }, variants: { quW0Pphr_: { rotate: 2 }, w8HHn6tXU: { rotate: 2 }, x7SKdPrH8: { rotate: 2 } }, ...addPropertyOverrides3({ quW0Pphr_: { background: { alt: "", fit: "fill", pixelHeight: 1200, pixelWidth: 1600, src: "https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?width=1600&height=1200", srcSet: "https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?scale-down-to=512&width=1600&height=1200 512w,https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?scale-down-to=1024&width=1600&height=1200 1024w,https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?width=1600&height=1200 1600w" } }, w8HHn6tXU: { background: { alt: "", fit: "fill", pixelHeight: 1200, pixelWidth: 1600, src: "https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?width=1600&height=1200", srcSet: "https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?scale-down-to=512&width=1600&height=1200 512w,https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?scale-down-to=1024&width=1600&height=1200 1024w,https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?width=1600&height=1200 1600w" } }, x7SKdPrH8: { background: { alt: "", fit: "fill", pixelHeight: 1200, pixelWidth: 1600, src: "https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?width=1600&height=1200", srcSet: "https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?scale-down-to=512&width=1600&height=1200 512w,https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?scale-down-to=1024&width=1600&height=1200 1024w,https://framerusercontent.com/images/5iN7U2aBhjLTWrj9GcVLbdWdM.png?width=1600&height=1200 1600w" } } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React8.Fragment, { children: /* @__PURE__ */ _jsx6(motion5.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-size": "12px", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "1.4em", "--framer-text-color": "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.75))" }, children: "Craftwork.design" }) }), className: "framer-b1w0rg", fonts: ["FS;Satoshi-medium"], layoutDependency, layoutId: "Hero__mWAXu3bBb", style: { "--extracted-r6o4lv": "rgba(255, 255, 255, 0.75)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx6(ComponentViewportProvider, { height: 62, y: (componentViewport?.y || 0) + (componentViewport?.height || 784) - 254, ...addPropertyOverrides3({ quW0Pphr_: { y: (componentViewport?.y || 0) + (componentViewport?.height || 880) - 254 }, x7SKdPrH8: { width: "130px", y: (componentViewport?.y || 0) + 550 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer, { className: "framer-athrnd-container", layoutDependency, layoutId: "Hero__zjo54T9Qo-container", nodeId: "zjo54T9Qo", rendersWithMotion: true, scopeId: "NUitZxeqv", children: /* @__PURE__ */ _jsx6(lohBYJvQe_default, { height: "100%", id: "zjo54T9Qo", layoutId: "Hero__zjo54T9Qo", variant: matchVariant("uVg2ZFjcr"), width: "100%", xuugP6ZwC: "Perhaps you?", ...addPropertyOverrides3({ x7SKdPrH8: { style: { width: "100%" }, variant: matchVariant("TUXt_6Gib") } }, baseVariant, gestureVariant) }) }) })] }) }) }) });
});
var css9 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-F2l5C.framer-wzvh5g, .framer-F2l5C .framer-wzvh5g { display: block; }", ".framer-F2l5C.framer-1e22zen { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; max-height: 960px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-F2l5C .framer-1wdxr5a { flex: none; height: 804px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: -42px; z-index: 1; }", ".framer-F2l5C .framer-1bfxfs0 { flex: none; height: 769px; left: calc(50.00000000000002% - 100% / 2); overflow: visible; pointer-events: none; position: absolute; top: 0px; width: 100%; z-index: 1; }", ".framer-F2l5C .framer-o3uq2f { bottom: 0px; flex: none; height: 784px; left: 0px; position: absolute; right: 0px; z-index: 1; }", ".framer-F2l5C .framer-3qbp5v { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; max-width: 800px; overflow: visible; padding: 64px 0px 0px 0px; position: relative; width: 100%; z-index: 2; }", ".framer-F2l5C .framer-1f55p3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-F2l5C .framer-x606zu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 100%; }", ".framer-F2l5C .framer-u68790-container, .framer-F2l5C .framer-xccss9-container, .framer-F2l5C .framer-1enjpoh-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-F2l5C .framer-1tm94tp { flex: none; height: auto; max-width: 720px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-F2l5C .framer-1f9pclm { flex: none; height: auto; max-width: 460px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-F2l5C .framer-18gmldz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-F2l5C .framer-q0au9y-container { flex: none; height: 49px; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-F2l5C .framer-65xjw9 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 72px; justify-content: space-between; left: 0px; overflow: hidden; padding: 0px 20px 0px 20px; position: absolute; right: 0px; z-index: 1; }", ".framer-F2l5C .framer-t47i9u { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-F2l5C .framer-180lx7r { bottom: 0px; flex: none; left: 1px; mix-blend-mode: overlay; position: absolute; right: 1px; top: 0px; z-index: 1; }", ".framer-F2l5C .framer-u6j0so-container { bottom: 311px; flex: none; height: auto; left: 112px; position: absolute; width: auto; z-index: 3; }", ".framer-F2l5C .framer-eq4821 { bottom: 190px; flex: none; gap: 10px; height: 265px; left: -262px; overflow: hidden; position: absolute; width: 366px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-F2l5C .framer-13oj39l { bottom: -28px; flex: none; gap: 10px; height: 265px; left: -19px; overflow: hidden; position: absolute; width: 190px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-F2l5C .framer-164sre3 { flex: none; height: auto; position: absolute; right: -21px; top: 51px; white-space: pre; width: auto; }", ".framer-F2l5C .framer-16j885s { bottom: 140px; flex: none; gap: 10px; height: 265px; overflow: hidden; position: absolute; right: -72px; width: 190px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-F2l5C .framer-8sbbw2 { bottom: -20px; flex: none; gap: 10px; height: 265px; overflow: hidden; position: absolute; right: -155px; width: 366px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-F2l5C .framer-b1w0rg { flex: none; height: auto; left: 19px; position: absolute; top: 14px; white-space: pre; width: auto; }", ".framer-F2l5C .framer-athrnd-container { bottom: 192px; flex: none; height: auto; position: absolute; right: 44px; width: auto; z-index: 3; }", ".framer-F2l5C.framer-v-1k24vri.framer-1e22zen { width: 100%; }", ".framer-F2l5C.framer-v-1k24vri .framer-eq4821, .framer-F2l5C.framer-v-1k24vri .framer-13oj39l, .framer-F2l5C.framer-v-1k24vri .framer-16j885s, .framer-F2l5C.framer-v-1k24vri .framer-8sbbw2, .framer-F2l5C.framer-v-pum6ic .framer-eq4821, .framer-F2l5C.framer-v-pum6ic .framer-13oj39l, .framer-F2l5C.framer-v-pum6ic .framer-16j885s, .framer-F2l5C.framer-v-pum6ic .framer-8sbbw2, .framer-F2l5C.framer-v-11shc0a .framer-eq4821, .framer-F2l5C.framer-v-11shc0a .framer-13oj39l, .framer-F2l5C.framer-v-11shc0a .framer-16j885s, .framer-F2l5C.framer-v-11shc0a .framer-8sbbw2 { height: auto; width: auto; }", ".framer-F2l5C.framer-v-pum6ic.framer-1e22zen { height: auto; width: 100%; }", ".framer-F2l5C.framer-v-pum6ic .framer-1f55p3 { max-width: 520px; }", ".framer-F2l5C.framer-v-11shc0a.framer-1e22zen { height: auto; width: 100%; }", ".framer-F2l5C.framer-v-11shc0a .framer-1bfxfs0 { height: 266px; left: calc(50.00000000000002% - 121.28205128205127% / 2); top: -10px; width: 121%; }", ".framer-F2l5C.framer-v-11shc0a .framer-3qbp5v { padding: 40px 0px 0px 0px; }", ".framer-F2l5C.framer-v-11shc0a .framer-1f55p3 { gap: 24px; }", ".framer-F2l5C.framer-v-11shc0a .framer-x606zu { padding: 0px 20px 0px 20px; }", ".framer-F2l5C.framer-v-11shc0a .framer-1tm94tp { max-width: 360px; }", ".framer-F2l5C.framer-v-11shc0a .framer-1f9pclm { max-width: 340px; }", ".framer-F2l5C.framer-v-11shc0a .framer-65xjw9 { height: 60px; }", ".framer-F2l5C.framer-v-11shc0a .framer-180lx7r { left: 2px; right: 2px; }", ".framer-F2l5C.framer-v-11shc0a .framer-u6j0so-container { bottom: 180px; left: -14px; }", ".framer-F2l5C.framer-v-11shc0a .framer-athrnd-container { bottom: unset; left: 309px; right: unset; top: 550px; width: 130px; }", ...css2, ...css, '.framer-F2l5C[data-border="true"]::after, .framer-F2l5C [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramerNUitZxeqv = withCSS5(Component5, css9, "framer-F2l5C");
var NUitZxeqv_default = FramerNUitZxeqv;
FramerNUitZxeqv.displayName = "Hero";
FramerNUitZxeqv.defaultProps = { height: 784, width: 1366 };
addPropertyControls6(FramerNUitZxeqv, { variant: { options: ["cEFViquHj", "w8HHn6tXU", "quW0Pphr_", "x7SKdPrH8"], optionTitles: ["Desktop | L", "Desktop | M", "Tablet", "Phone"], title: "Variant", type: ControlType9.Enum } });
addFonts5(FramerNUitZxeqv, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { cssFamilyName: "Satoshi", source: "fontshare", style: "normal", uiFamilyName: "Satoshi", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }] }, ...TagsTagHeroFonts, ...ButtonsButtonLargeFonts, ...OtherSocialProofFonts, ...TimeDateFonts, ...CursorsCursorHeroFonts, ...getFontsFromSharedStyle3(fonts2), ...getFontsFromSharedStyle3(fonts)], { supportsExplicitInterCodegen: true });
FramerNUitZxeqv.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(dyfGXVTmv_default, {}, context), forwardLoader(PyAGkYlzY_default, {}, context), forwardLoader(pd_b9Ln55_default, {}, context), forwardLoader(lohBYJvQe_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerNUitZxeqv", "slots": [], "annotations": { "framerAutoSizeImages": "true", "framerComponentViewportWidth": "true", "framerDisplayContentsDiv": "false", "framerIntrinsicHeight": "784", "framerContractVersion": "1", "framerIntrinsicWidth": "1366", "framerImmutableVariables": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"],"constraints":[null,null,null,"960px"]},"w8HHn6tXU":{"layout":["fixed","fixed"],"constraints":[null,null,null,"960px"]},"quW0Pphr_":{"layout":["fixed","fixed"],"constraints":[null,null,null,"960px"]},"x7SKdPrH8":{"layout":["fixed","fixed"],"constraints":[null,null,null,"960px"]}}}', "framerColorSyntax": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  NUitZxeqv_default as default
};
