var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/gTsb9yEzMZrXW3G5Yy7u/bvhrQS38A0j7ZchZ4LRW/LEd2CO4BB.js
import { jsx as _jsx11, jsxs as _jsxs5 } from "react/jsx-runtime";
import { addFonts as addFonts7, addPropertyControls as addPropertyControls10, ComponentViewportProvider as ComponentViewportProvider5, ControlType as ControlType14, cx as cx7, forwardLoader, getFonts as getFonts5, getFontsFromSharedStyle as getFontsFromSharedStyle4, getLoadingLazyAtYPosition, Image as Image1, ResolveLinks, RichText as RichText5, SmartComponentScopedContainer, useComponentViewport as useComponentViewport7, useLocaleInfo as useLocaleInfo7, useRouter, useVariantState as useVariantState7, withCSS as withCSS7, withFX } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup7, motion as motion8, MotionConfigContext as MotionConfigContext7 } from "framer-motion";
import * as React12 from "react";
import { useRef as useRef12 } from "react";

// http-url:https://framerusercontent.com/modules/8ucBe7X9yjkkkbi9NBR9/jwl00eMCm4Q4NOG6vlhS/bnGlEExIn.js
import { fontStore } from "../_framer-runtime.js";
fontStore.loadFonts(["GF;Instrument Serif-regular", "GF;Instrument Serif-italic"]);
var fonts = [{ explicitInter: true, fonts: [{ family: "Instrument Serif", source: "google", style: "normal", url: "https://fonts.gstatic.com/s/instrumentserif/v4/jizBRFtNs2ka5fXjeivQ4LroWlx-2zcZj1bIkNo.woff2", weight: "400" }, { family: "Instrument Serif", source: "google", style: "italic", url: "https://fonts.gstatic.com/s/instrumentserif/v4/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATjnTNgNq55w.woff2", weight: "400" }] }];
var css = ['.framer-w3vuv .framer-styles-preset-1finc0l:not(.rich-text-wrapper), .framer-w3vuv .framer-styles-preset-1finc0l.rich-text-wrapper h3 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 44px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.15em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1365px) and (min-width: 1000px) { .framer-w3vuv .framer-styles-preset-1finc0l:not(.rich-text-wrapper), .framer-w3vuv .framer-styles-preset-1finc0l.rich-text-wrapper h3 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 44px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.15em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 999px) and (min-width: 600px) { .framer-w3vuv .framer-styles-preset-1finc0l:not(.rich-text-wrapper), .framer-w3vuv .framer-styles-preset-1finc0l.rich-text-wrapper h3 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 44px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.15em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 599px) and (min-width: 0px) { .framer-w3vuv .framer-styles-preset-1finc0l:not(.rich-text-wrapper), .framer-w3vuv .framer-styles-preset-1finc0l.rich-text-wrapper h3 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className = "framer-w3vuv";

// http-url:https://framerusercontent.com/modules/jlrgwcThTybaBr9L3JWz/FXpOQPFd2Bs95tImJ7eF/R4ZMKeSGK.js
import { fontStore as fontStore2 } from "../_framer-runtime.js";
fontStore2.loadFonts(["FS;Satoshi-medium", "FS;Satoshi-bold", "FS;Satoshi-bold italic", "FS;Satoshi-medium italic"]);
var fonts2 = [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }, { family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2", weight: "500" }] }];
var css2 = ['.framer-c09gS .framer-styles-preset-wro55n:not(.rich-text-wrapper), .framer-c09gS .framer-styles-preset-wro55n.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.55em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1365px) and (min-width: 0px) { .framer-c09gS .framer-styles-preset-wro55n:not(.rich-text-wrapper), .framer-c09gS .framer-styles-preset-wro55n.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className2 = "framer-c09gS";

// http-url:https://framerusercontent.com/modules/kiGb7Z2KR59CrxMpxViw/BIfMiU6Glzcdm6pKOWHB/cvpSEdd5Q.js
import { jsx as _jsx6, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls5, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType9, cx as cx2, getFonts as getFonts2, getFontsFromSharedStyle, RichText, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React7 from "react";

// http-url:https://framerusercontent.com/modules/lRDHiNWNVWmE0lqtoVHP/zEmAposrjympIK2ybAcQ/Video.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType as ControlType4, useIsInCurrentNavigationTarget as useIsInCurrentNavigationTarget2 } from "../_framer-runtime.js";
import { isMotionValue as isMotionValue2, useInView } from "framer-motion";

// http-url:https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType } from "../_framer-runtime.js";
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

// http-url:https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget } from "../_framer-runtime.js";
import { useEffect } from "react";
function useOnEnter(onEnter, enabled) {
  return useOnSpecificTargetChange(true, onEnter, enabled);
}
function useOnExit(onExit, enabled) {
  return useOnSpecificTargetChange(false, onExit, enabled);
}
function useOnSpecificTargetChange(goal, callback, enabled = true) {
  const isInTarget = useIsInCurrentNavigationTarget();
  useEffect(() => {
    if (enabled && isInTarget === goal)
      callback();
  }, [
    isInTarget
  ]);
}

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
var isBrowserSafari = () => {
  if (typeof __dai_navigator !== `undefined`) {
    const userAgent = __dai_navigator.userAgent.toLowerCase();
    const isSafari = (userAgent.indexOf("safari") > -1 || userAgent.indexOf("framermobile") > -1 || userAgent.indexOf("framerx") > -1) && userAgent.indexOf("chrome") < 0;
    return isSafari;
  } else
    return false;
};
var useIsBrowserSafari = () => useMemo(
  () => isBrowserSafari(),
  []
);

// http-url:https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect3 } from "react";

// http-url:https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect4, useRef as useRef2 } from "react";
import { motionValue, animate, RenderTarget } from "../_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore as fontStore3 } from "../_framer-runtime.js";
import { useEffect as useEffect5 } from "react";

// http-url:https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2 } from "react";
import { RenderTarget as RenderTarget2 } from "../_framer-runtime.js";
function useIsOnCanvas() {
  const onCanvas = useMemo2(
    () => RenderTarget2.current() === RenderTarget2.canvas,
    []
  );
  return onCanvas;
}

// http-url:https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3 } from "react";
import { ControlType as ControlType3 } from "../_framer-runtime.js";
function useRadius(props) {
  const { borderRadius, isMixedBorderRadius, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius } = props;
  const radiusValue = useMemo3(
    () => isMixedBorderRadius ? `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px` : `${borderRadius}px`,
    [
      borderRadius,
      isMixedBorderRadius,
      topLeftRadius,
      topRightRadius,
      bottomRightRadius,
      bottomLeftRadius
    ]
  );
  return radiusValue;
}
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

// http-url:https://framerusercontent.com/modules/lRDHiNWNVWmE0lqtoVHP/zEmAposrjympIK2ybAcQ/Video.js
import { memo, useCallback as useCallback2, useEffect as useEffect7, useMemo as useMemo4, useRef as useRef3, useState as useState3 } from "react";
var ObjectFitType;
(function(ObjectFitType2) {
  ObjectFitType2["Fill"] = "fill";
  ObjectFitType2["Contain"] = "contain";
  ObjectFitType2["Cover"] = "cover";
  ObjectFitType2["None"] = "none";
  ObjectFitType2["ScaleDown"] = "scale-down";
})(ObjectFitType || (ObjectFitType = {}));
var SrcType;
(function(SrcType2) {
  SrcType2["Video"] = "Upload";
  SrcType2["Url"] = "URL";
})(SrcType || (SrcType = {}));
function getProps(props) {
  const { width, height, topLeft, topRight, bottomRight, bottomLeft, id, children, ...rest } = props;
  return rest;
}
function Video(props) {
  const newProps = getProps(props);
  return /* @__PURE__ */ _jsx(VideoMemo, { ...newProps });
}
function usePlaybackControls(videoRef) {
  const isInCurrentNavigationTarget = useIsInCurrentNavigationTarget2();
  const requestingPlay = useRef3(false);
  const isPlayingRef = useRef3(false);
  const setProgress = useCallback2((rawProgress) => {
    if (!videoRef.current)
      return;
    const newProgress = (rawProgress === 1 ? 0.999 : rawProgress) * videoRef.current.duration;
    const isAlreadySet = Math.abs(videoRef.current.currentTime - newProgress) < 0.1;
    if (videoRef.current.duration > 0 && !isAlreadySet) {
      videoRef.current.currentTime = newProgress;
    }
  }, []);
  const play = useCallback2(() => {
    const video = videoRef.current;
    if (!video)
      return;
    video.preload = "auto";
    const isPlaying = video.currentTime > 0 && video.onplaying && !video.paused && !video.ended && video.readyState >= video.HAVE_CURRENT_DATA;
    if (!isPlaying && video && !requestingPlay.current && isInCurrentNavigationTarget) {
      requestingPlay.current = true;
      isPlayingRef.current = true;
      video.play().catch((e) => {
      }).finally(() => requestingPlay.current = false);
    }
  }, []);
  const pause = useCallback2(() => {
    if (!videoRef.current || requestingPlay.current)
      return;
    videoRef.current.pause();
    isPlayingRef.current = false;
  }, []);
  return { play, pause, setProgress, isPlaying: isPlayingRef };
}
function useAutoplayBehavior({ playingProp, muted, loop, playsinline, controls }) {
  const [initialPlayingProp] = useState3(() => playingProp);
  const [hasPlayingPropChanged, setHasPlayingPropChanged] = useState3(false);
  if (playingProp !== initialPlayingProp && !hasPlayingPropChanged) {
    setHasPlayingPropChanged(true);
  }
  const behavesAsGif = (
    // passing `playing === true` on mount indicates that the video should
    // autoplay, like a GIF
    initialPlayingProp && muted && loop && playsinline && !controls && // Some users of the <Video> component use it by wrapping it with
    // another smart component and adding their own controls on top. (The
    // controls use transitions to control the video: e.g., when clicking
    // the play button, the smart component will transition to a state with
    // <Video playing={true} />.) In this case, we don't want the video to
    // behave as a gif, as it will be weird if the video suddenly started
    // acting as such (and auto-pausing when leaving the viewport) as soon
    // as the site visitor mutes it and clicks “Play”.
    !hasPlayingPropChanged
  );
  let autoplay;
  if (behavesAsGif)
    autoplay = "on-viewport";
  else if (initialPlayingProp)
    autoplay = "on-mount";
  else
    autoplay = "no-autoplay";
  return autoplay;
}
var isMountedAndReadyForProgressChanges = false;
var VideoMemo = /* @__PURE__ */ memo(function VideoInner(props) {
  const { srcType, srcFile, srcUrl, playing: playingProp, muted, playsinline, controls, progress, objectFit, backgroundColor, onSeeked, onPause, onPlay, onEnd, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, poster, posterEnabled, startTime: startTimeProp, volume, loop } = props;
  const videoRef = useRef3();
  const isSafari = useIsBrowserSafari();
  const wasPausedOnLeave = useRef3(null);
  const wasEndedOnLeave = useRef3(null);
  const isOnCanvas = useIsOnCanvas();
  const borderRadius = useRadius(props);
  const autoplayBehavior = isOnCanvas ? "no-autoplay" : useAutoplayBehavior({ playingProp, muted, loop, playsinline, controls });
  const isInViewport = isOnCanvas ? true : useInView(videoRef);
  const isCloseToViewport = isOnCanvas ? false : useInView(videoRef, { margin: "100px", once: true });
  const startTime = startTimeProp === 100 ? 99.9 : startTimeProp;
  const { play, pause, setProgress, isPlaying } = usePlaybackControls(videoRef);
  useEffect7(() => {
    if (isOnCanvas)
      return;
    if (playingProp)
      play();
    else
      pause();
  }, [playingProp]);
  useEffect7(() => {
    if (isOnCanvas)
      return;
    if (autoplayBehavior !== "on-viewport")
      return;
    if (isInViewport)
      play();
    else
      pause();
  }, [autoplayBehavior, isInViewport]);
  useEffect7(() => {
    if (!isMountedAndReadyForProgressChanges) {
      isMountedAndReadyForProgressChanges = true;
      return;
    }
    const rawProgressValue = isMotionValue2(progress) ? progress.get() : (progress !== null && progress !== void 0 ? progress : 0) * 0.01;
    setProgress(
      // When the progress value exists (e.g. <Video startTime={10}
      // progress={50} />), we respect the `progress` value over
      // `startTime`, even if `startTime` changes. That’s because
      // `startTime` == start == changing it shouldn’t affect the current
      // progress
      (rawProgressValue !== null && rawProgressValue !== void 0 ? rawProgressValue : 0) || // Then why fall back to `startTime` when `progress` doesn’t exist,
      // you might ask? Now, that’s for
      // - canvas UX: we want the video progress to change when the user
      //   is scrobbling the “Start Time” in component settings.
      // - backwards compatibility: maybe some users *are* scrobbling
      //   using `startTime` instead of `progress`? We don’t know, and it
      //   always supported it, so let’s not break it
      (startTime !== null && startTime !== void 0 ? startTime : 0) / 100
    );
  }, [startTime, srcFile, srcUrl, progress]);
  useEffect7(() => {
    if (!isMotionValue2(progress))
      return;
    return progress.on("change", (value) => setProgress(value));
  }, [progress]);
  useOnEnter(() => {
    if (wasPausedOnLeave.current === null)
      return;
    if (videoRef.current) {
      if (!wasEndedOnLeave && loop || !wasPausedOnLeave.current)
        play();
    }
  });
  useOnExit(() => {
    if (videoRef.current) {
      wasEndedOnLeave.current = videoRef.current.ended;
      wasPausedOnLeave.current = videoRef.current.paused;
      pause();
    }
  });
  const src = useMemo4(() => {
    let fragment = "";
    if (srcType === "URL")
      return srcUrl + fragment;
    if (srcType === "Upload")
      return srcFile + fragment;
  }, [srcType, srcFile, srcUrl, startTime]);
  useEffect7(() => {
    if (isSafari && videoRef.current && autoplayBehavior === "on-mount") {
      setTimeout(() => play(), 50);
    }
  }, []);
  useEffect7(() => {
    if (videoRef.current && !muted)
      videoRef.current.volume = (volume !== null && volume !== void 0 ? volume : 0) / 100;
  }, [volume]);
  const handleReady = () => {
    const video = videoRef.current;
    if (!video)
      return;
    if (video.currentTime < 0.3 && startTime > 0)
      setProgress((startTime !== null && startTime !== void 0 ? startTime : 0) * 0.01);
    if (autoplayBehavior === "on-mount")
      play();
  };
  return /* @__PURE__ */ _jsx("video", { onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, src, loop, ref: videoRef, onSeeked: (e) => onSeeked === null || onSeeked === void 0 ? void 0 : onSeeked(e), onPause: (e) => onPause === null || onPause === void 0 ? void 0 : onPause(e), onPlay: (e) => onPlay === null || onPlay === void 0 ? void 0 : onPlay(e), onEnded: (e) => onEnd === null || onEnd === void 0 ? void 0 : onEnd(e), autoPlay: autoplayBehavior === "on-mount", preload: isPlaying.current ? "auto" : autoplayBehavior !== "on-mount" && posterEnabled && !isCloseToViewport ? "none" : (
    // `autoplay` overrides this too
    "metadata"
  ), poster: posterEnabled ? poster : void 0, onLoadedData: handleReady, controls, muted: isOnCanvas ? true : muted, playsInline: playsinline, style: { cursor: !!onClick ? "pointer" : "auto", width: "100%", height: "100%", borderRadius, display: "block", objectFit, backgroundColor, objectPosition: "50% 50%" } });
});
Video.displayName = "Video";
Video.defaultProps = { srcType: "URL", srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4", srcFile: "", posterEnabled: false, controls: false, playing: true, loop: true, muted: true, playsinline: true, restartOnEnter: false, objectFit: "cover", backgroundColor: "rgba(0,0,0,0)", radius: 0, volume: 25, startTime: 0 };
function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
function titleCase(value) {
  const groups = value.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [];
  return groups.map(capitalizeFirstLetter).join(" ");
}
var objectFitOptions = ["cover", "fill", "contain", "scale-down", "none"];
addPropertyControls(Video, {
  srcType: { type: ControlType4.Enum, displaySegmentedControl: true, title: "Source", options: ["URL", "Upload"] },
  srcUrl: { type: ControlType4.String, title: "URL", placeholder: "../example.mp4", hidden(props) {
    return props.srcType === "Upload";
  } },
  srcFile: { type: ControlType4.File, title: "File", allowedFileTypes: ["mp4", "webm"], hidden(props) {
    return props.srcType === "URL";
  } },
  playing: { type: ControlType4.Boolean, title: "Playing", enabledTitle: "Yes", disabledTitle: "No" },
  posterEnabled: { type: ControlType4.Boolean, title: "Poster", enabledTitle: "Yes", disabledTitle: "No", description: "We recommend adding a poster. [Learn more](http://framer.com/help/articles/how-are-videos-optimized-in-framer/)." },
  poster: { type: ControlType4.Image, title: " ", hidden: ({ posterEnabled }) => !posterEnabled },
  backgroundColor: { type: ControlType4.Color, title: "Background" },
  ...borderRadiusControl,
  startTime: { title: "Start Time", type: ControlType4.Number, min: 0, max: 100, step: 0.1, unit: "%" },
  loop: { type: ControlType4.Boolean, title: "Loop", enabledTitle: "Yes", disabledTitle: "No" },
  objectFit: { type: ControlType4.Enum, title: "Fit", options: objectFitOptions, optionTitles: objectFitOptions.map(titleCase) },
  // restartOnEnter: {
  //     type: ControlType.Boolean,
  //     title: "On ReEnter",
  //     enabledTitle: "Restart",
  //     disabledTitle: "Resume",
  // },
  controls: { type: ControlType4.Boolean, title: "Controls", enabledTitle: "Show", disabledTitle: "Hide" },
  muted: { type: ControlType4.Boolean, title: "Muted", enabledTitle: "Yes", disabledTitle: "No" },
  volume: { type: ControlType4.Number, max: 100, min: 0, unit: "%", hidden: ({ muted }) => muted },
  onEnd: { type: ControlType4.EventHandler },
  onSeeked: { type: ControlType4.EventHandler },
  onPause: { type: ControlType4.EventHandler },
  onPlay: { type: ControlType4.EventHandler },
  ...defaultEvents
});

// http-url:https://framerusercontent.com/modules/tYScH7LTqUtz5KUaUAYP/p8dptk4UIND8hbFWz9V7/Phosphor.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import * as React4 from "react";
import { useState as useState4, useEffect as useEffect8, useRef as useRef4 } from "react";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType6, RenderTarget as RenderTarget3 } from "../_framer-runtime.js";
import { motion } from "framer-motion";

// http-url:https://framerusercontent.com/modules/DyldKav0OOAWR3bCAlhK/8c3l9FzyOlGpbPncYhfc/nullstate.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import * as React3 from "react";
var containerStyles2 = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle2 = {
  ...containerStyles2,
  borderRadius: 6,
  background: "rgba(149, 149, 149, 0.1)",
  border: "1px dashed rgba(149, 149, 149, 0.15)",
  color: "#a5a5a5",
  flexDirection: "column"
};
var NullState = /* @__PURE__ */ React3.forwardRef((_, ref) => {
  return /* @__PURE__ */ _jsx2("div", {
    style: emptyStateStyle2,
    ref
  });
});

// http-url:https://framerusercontent.com/modules/Qc8yuHkQmGO0kFiSWbkX/rVmMAFttOHuuiwSg6KjZ/House.js
var Component;
var IconInner;
var Icon = (React13) => {
  if (!Component) {
    Component = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("path", { d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement(
          "path",
          {
            d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React13.createElement("path", { d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("path", { d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("path", { d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("path", { d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("path", { d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z" }))
      ]
    ]);
    IconInner = React13.forwardRef((props, ref) => /* @__PURE__ */ React13.createElement("g", { ref, ...props }, Component.get(props.weight)));
  }
  return IconInner;
};
var House_default = Icon;

// http-url:https://framerusercontent.com/modules/Ma20hU0GGRxLxZphbywl/OSpwWF91FHPVFyQJjMHt/utils.js
import { useMemo as useMemo5 } from "react";
import { ControlType as ControlType5 } from "../_framer-runtime.js";
var defaultEvents2 = { onClick: { type: ControlType5.EventHandler }, onMouseDown: { type: ControlType5.EventHandler }, onMouseUp: { type: ControlType5.EventHandler }, onMouseEnter: { type: ControlType5.EventHandler }, onMouseLeave: { type: ControlType5.EventHandler } };
var findByArray = (arr, search) => arr.find((a) => a.toLowerCase().includes(search));
function useIconSelection(iconKeys3, selectByList, iconSearch = "", iconSelection, lowercaseIconKeyPairs3) {
  const iconSearchResult = useMemo5(() => {
    if (iconSearch == null || (iconSearch === null || iconSearch === void 0 ? void 0 : iconSearch.length) === 0)
      return null;
    const iconSearchTerm = iconSearch.toLowerCase().replace(/-|\s/g, "");
    var _iconSearchTerm;
    const searchResult = (_iconSearchTerm = lowercaseIconKeyPairs3[iconSearchTerm]) !== null && _iconSearchTerm !== void 0 ? _iconSearchTerm : findByArray(iconKeys3, iconSearchTerm);
    return searchResult;
  }, [iconSelection, iconSearch]);
  const name = selectByList ? iconSelection : iconSearchResult;
  return name;
}

// http-url:https://framerusercontent.com/modules/tYScH7LTqUtz5KUaUAYP/p8dptk4UIND8hbFWz9V7/Phosphor.js
var iconKeys = ["Acorn", "AddressBook", "AddressBookTabs", "AirTrafficControl", "Airplane", "AirplaneInFlight", "AirplaneLanding", "AirplaneTakeoff", "AirplaneTaxiing", "AirplaneTilt", "Airplay", "Alarm", "Alien", "AlignBottom", "AlignBottomSimple", "AlignCenterVertical", "AlignLeft", "AlignLeftSimple", "AlignRight", "AlignRightSimple", "AlignTop", "AlignTopSimple", "AmazonLogo", "Ambulance", "Anchor", "AnchorSimple", "AndroidLogo", "Angle", "AngularLogo", "Aperture", "AppStoreLogo", "AppWindow", "AppleLogo", "ApplePodcastsLogo", "ApproximateEquals", "Archive", "ArchiveBox", "ArchiveTray", "Armchair", "ArrowArcLeft", "ArrowArcRight", "ArrowBendDownLeft", "ArrowBendDownRight", "ArrowBendLeftDown", "ArrowBendLeftUp", "ArrowBendRightDown", "ArrowBendRightUp", "ArrowBendUpLeft", "ArrowBendUpRight", "ArrowCircleDown", "ArrowCircleDownLeft", "ArrowCircleDownRight", "ArrowCircleLeft", "ArrowCircleRight", "ArrowCircleUp", "ArrowCircleUpLeft", "ArrowCircleUpRight", "ArrowClockwise", "ArrowDown", "ArrowDownLeft", "ArrowDownRight", "ArrowElbowDownLeft", "ArrowElbowDownRight", "ArrowElbowLeft", "ArrowElbowLeftDown", "ArrowElbowLeftUp", "ArrowElbowRight", "ArrowElbowRightDown", "ArrowElbowRightUp", "ArrowElbowUpLeft", "ArrowElbowUpRight", "ArrowFatDown", "ArrowFatLeft", "ArrowFatLineDown", "ArrowFatLineLeft", "ArrowFatLineRight", "ArrowFatLineUp", "ArrowFatLinesDown", "ArrowFatLinesLeft", "ArrowFatLinesRight", "ArrowFatLinesUp", "ArrowFatRight", "ArrowFatUp", "ArrowLeft", "ArrowLineDown", "ArrowLineDownLeft", "ArrowLineDownRight", "ArrowLineLeft", "ArrowLineRight", "ArrowLineUp", "ArrowLineUpLeft", "ArrowLineUpRight", "ArrowRight", "ArrowSquareDown", "ArrowSquareDownLeft", "ArrowSquareDownRight", "ArrowSquareIn", "ArrowSquareLeft", "ArrowSquareOut", "ArrowSquareRight", "ArrowSquareUp", "ArrowSquareUpLeft", "ArrowSquareUpRight", "ArrowUDownLeft", "ArrowUDownRight", "ArrowULeftDown", "ArrowULeftUp", "ArrowURightDown", "ArrowURightUp", "ArrowUUpLeft", "ArrowUUpRight", "ArrowUp", "ArrowUpLeft", "ArrowUpRight", "ArrowsClockwise", "ArrowsDownUp", "ArrowsHorizontal", "ArrowsIn", "ArrowsInCardinal", "ArrowsInLineVertical", "ArrowsInSimple", "ArrowsLeftRight", "ArrowsMerge", "ArrowsOut", "ArrowsOutCardinal", "ArrowsOutSimple", "ArrowsSplit", "ArrowsVertical", "Article", "ArticleMedium", "ArticleNyTimes", "Asclepius", "Asterisk", "AsteriskSimple", "At", "Atom", "Avocado", "Axe", "Baby", "BabyCarriage", "Backpack", "Backspace", "Bag", "BagSimple", "Balloon", "Bandaids", "Bank", "Barbell", "Barcode", "Barn", "Barricade", "Baseball", "BaseballCap", "BaseballHelmet", "Basket", "Basketball", "Bathtub", "BatteryCharging", "BatteryEmpty", "BatteryFull", "BatteryHigh", "BatteryLow", "BatteryMedium", "BatteryPlus", "BatteryPlusVertical", "BatteryVerticalEmpty", "BatteryVerticalFull", "BatteryVerticalHigh", "BatteryVerticalLow", "BatteryWarning", "BeachBall", "Beanie", "Bed", "BeerBottle", "BeerStein", "BehanceLogo", "Bell", "BellRinging", "BellSimple", "BellSimpleRinging", "BellSimpleSlash", "BellSimpleZ", "BellSlash", "BellZ", "Belt", "BezierCurve", "Bicycle", "Binary", "Binoculars", "Biohazard", "Bird", "Blueprint", "Bluetooth", "BluetoothConnected", "BluetoothSlash", "BluetoothX", "Boat", "Bomb", "Bone", "Book", "BookBookmark", "BookOpen", "BookOpenText", "BookOpenUser", "BookUser", "Bookmark", "BookmarkSimple", "Bookmarks", "BookmarksSimple", "Books", "Boot", "Boules", "BoundingBox", "BowlFood", "BowlSteam", "BowlingBall", "BoxArrowDown", "BoxArrowUp", "BoxingGlove", "BracketsAngle", "BracketsCurly", "BracketsRound", "BracketsSquare", "Brain", "Brandy", "Bread", "Bridge", "Briefcase", "BriefcaseMetal", "Broadcast", "Broom", "Browser", "Browsers", "Bug", "BugBeetle", "BugDroid", "Building", "BuildingApartment", "BuildingOffice", "Buildings", "Bulldozer", "Bus", "Butterfly", "CableCar", "Cactus", "Cake", "Calculator", "Calendar", "CalendarBlank", "CalendarCheck", "CalendarDot", "CalendarDots", "CalendarHeart", "CalendarMinus", "CalendarPlus", "CalendarSlash", "CalendarStar", "CalendarX", "CallBell", "Camera", "CameraPlus", "CameraRotate", "CameraSlash", "Campfire", "Car", "CarBattery", "CarProfile", "CarSimple", "Cardholder", "Cards", "CardsThree", "CaretCircleDoubleUp", "CaretCircleDown", "CaretCircleLeft", "CaretCircleRight", "CaretCircleUp", "CaretCircleUpDown", "CaretDoubleDown", "CaretDoubleLeft", "CaretDoubleRight", "CaretDoubleUp", "CaretDown", "CaretLeft", "CaretLineDown", "CaretLineLeft", "CaretLineRight", "CaretLineUp", "CaretRight", "CaretUp", "CaretUpDown", "Carrot", "CashRegister", "CassetteTape", "CastleTurret", "Cat", "CellSignalFull", "CellSignalHigh", "CellSignalLow", "CellSignalMedium", "CellSignalNone", "CellSignalSlash", "CellSignalX", "CellTower", "Certificate", "Chair", "Chalkboard", "ChalkboardSimple", "ChalkboardTeacher", "Champagne", "ChargingStation", "ChartBar", "ChartBarHorizontal", "ChartDonut", "ChartLine", "ChartLineDown", "ChartLineUp", "ChartPie", "ChartPieSlice", "ChartPolar", "ChartScatter", "Chat", "ChatCentered", "ChatCenteredDots", "ChatCenteredSlash", "ChatCenteredText", "ChatCircle", "ChatCircleDots", "ChatCircleSlash", "ChatCircleText", "ChatDots", "ChatSlash", "ChatTeardrop", "ChatTeardropDots", "ChatTeardropSlash", "ChatTeardropText", "ChatText", "Chats", "ChatsCircle", "ChatsTeardrop", "Check", "CheckCircle", "CheckFat", "CheckSquare", "CheckSquareOffset", "Checkerboard", "Checks", "Cheers", "Cheese", "ChefHat", "Cherries", "Church", "Cigarette", "CigaretteSlash", "Circle", "CircleDashed", "CircleHalf", "CircleHalfTilt", "CircleNotch", "CirclesFour", "CirclesThree", "CirclesThreePlus", "Circuitry", "City", "Clipboard", "ClipboardText", "Clock", "ClockAfternoon", "ClockClockwise", "ClockCountdown", "ClockUser", "ClosedCaptioning", "Cloud", "CloudArrowDown", "CloudArrowUp", "CloudCheck", "CloudFog", "CloudLightning", "CloudMoon", "CloudRain", "CloudSlash", "CloudSnow", "CloudSun", "CloudWarning", "CloudX", "Clover", "Club", "CoatHanger", "CodaLogo", "Code", "CodeBlock", "CodeSimple", "CodepenLogo", "CodesandboxLogo", "Coffee", "CoffeeBean", "Coin", "CoinVertical", "Coins", "Columns", "ColumnsPlusLeft", "ColumnsPlusRight", "Command", "Compass", "CompassRose", "CompassTool", "ComputerTower", "Confetti", "ContactlessPayment", "Control", "Cookie", "CookingPot", "Copy", "CopySimple", "Copyleft", "Copyright", "CornersIn", "CornersOut", "Couch", "CourtBasketball", "Cow", "CowboyHat", "Cpu", "Crane", "CraneTower", "CreditCard", "Cricket", "Crop", "Cross", "Crosshair", "CrosshairSimple", "Crown", "CrownCross", "CrownSimple", "Cube", "CubeFocus", "CubeTransparent", "CurrencyBtc", "CurrencyCircleDollar", "CurrencyCny", "CurrencyDollar", "CurrencyDollarSimple", "CurrencyEth", "CurrencyEur", "CurrencyGbp", "CurrencyInr", "CurrencyJpy", "CurrencyKrw", "CurrencyKzt", "CurrencyNgn", "CurrencyRub", "Cursor", "CursorClick", "CursorText", "Cylinder", "Database", "Desk", "Desktop", "DesktopTower", "Detective", "DevToLogo", "DeviceMobile", "DeviceMobileCamera", "DeviceMobileSlash", "DeviceMobileSpeaker", "DeviceRotate", "DeviceTablet", "DeviceTabletCamera", "DeviceTabletSpeaker", "Devices", "Diamond", "DiamondsFour", "DiceFive", "DiceFour", "DiceOne", "DiceSix", "DiceThree", "DiceTwo", "Disc", "DiscoBall", "DiscordLogo", "Divide", "Dna", "Dog", "Door", "DoorOpen", "Dot", "DotOutline", "DotsNine", "DotsSix", "DotsSixVertical", "DotsThree", "DotsThreeCircle", "DotsThreeOutline", "DotsThreeVertical", "Download", "DownloadSimple", "Dress", "Dresser", "DribbbleLogo", "Drone", "Drop", "DropHalf", "DropHalfBottom", "DropSimple", "DropSlash", "DropboxLogo", "Ear", "EarSlash", "Egg", "EggCrack", "Eject", "EjectSimple", "Elevator", "Empty", "Engine", "Envelope", "EnvelopeOpen", "EnvelopeSimple", "EnvelopeSimpleOpen", "Equalizer", "Equals", "Eraser", "EscalatorDown", "EscalatorUp", "Exam", "ExclamationMark", "Exclude", "ExcludeSquare", "Export", "Eye", "EyeClosed", "EyeSlash", "Eyedropper", "EyedropperSample", "Eyeglasses", "Eyes", "FaceMask", "FacebookLogo", "Factory", "Faders", "FadersHorizontal", "FalloutShelter", "Fan", "Farm", "FastForward", "FastForwardCircle", "Feather", "FediverseLogo", "FigmaLogo", "File", "FileArchive", "FileArrowDown", "FileArrowUp", "FileAudio", "FileC", "FileCloud", "FileCode", "FileCpp", "FileCss", "FileCsv", "FileDashed", "FileDoc", "FileHtml", "FileImage", "FileIni", "FileJpg", "FileJs", "FileJsx", "FileLock", "FileMagnifyingGlass", "FileMd", "FileMinus", "FilePdf", "FilePlus", "FilePng", "FilePpt", "FilePy", "FileRs", "FileSql", "FileSvg", "FileText", "FileTs", "FileTsx", "FileTxt", "FileVideo", "FileVue", "FileX", "FileXls", "FileZip", "Files", "FilmReel", "FilmScript", "FilmSlate", "FilmStrip", "Fingerprint", "FingerprintSimple", "FinnTheHuman", "Fire", "FireExtinguisher", "FireSimple", "FireTruck", "FirstAid", "FirstAidKit", "Fish", "FishSimple", "Flag", "FlagBanner", "FlagBannerFold", "FlagCheckered", "FlagPennant", "Flame", "Flashlight", "Flask", "FlipHorizontal", "FlipVertical", "FloppyDisk", "FloppyDiskBack", "FlowArrow", "Flower", "FlowerLotus", "FlowerTulip", "FlyingSaucer", "Folder", "FolderDashed", "FolderLock", "FolderMinus", "FolderNotch", "FolderNotchMinus", "FolderNotchOpen", "FolderNotchPlus", "FolderOpen", "FolderPlus", "FolderSimple", "FolderSimpleDashed", "FolderSimpleLock", "FolderSimpleMinus", "FolderSimplePlus", "FolderSimpleStar", "FolderSimpleUser", "FolderStar", "FolderUser", "Folders", "Football", "FootballHelmet", "Footprints", "ForkKnife", "FourK", "FrameCorners", "FramerLogo", "Function", "Funnel", "FunnelSimple", "FunnelSimpleX", "FunnelX", "GameController", "Garage", "GasCan", "GasPump", "Gauge", "Gavel", "Gear", "GearFine", "GearSix", "GenderFemale", "GenderIntersex", "GenderMale", "GenderNeuter", "GenderNonbinary", "GenderTransgender", "Ghost", "Gif", "Gift", "GitBranch", "GitCommit", "GitDiff", "GitFork", "GitMerge", "GitPullRequest", "GithubLogo", "GitlabLogo", "GitlabLogoSimple", "Globe", "GlobeHemisphereEast", "GlobeHemisphereWest", "GlobeSimple", "GlobeSimpleX", "GlobeStand", "GlobeX", "Goggles", "Golf", "GoodreadsLogo", "GoogleCardboardLogo", "GoogleChromeLogo", "GoogleDriveLogo", "GoogleLogo", "GooglePhotosLogo", "GooglePlayLogo", "GooglePodcastsLogo", "Gps", "GpsFix", "GpsSlash", "Gradient", "GraduationCap", "Grains", "GrainsSlash", "Graph", "GraphicsCard", "GreaterThan", "GreaterThanOrEqual", "GridFour", "GridNine", "Guitar", "HairDryer", "Hamburger", "Hammer", "Hand", "HandArrowDown", "HandArrowUp", "HandCoins", "HandDeposit", "HandEye", "HandFist", "HandGrabbing", "HandHeart", "HandPalm", "HandPeace", "HandPointing", "HandSoap", "HandSwipeLeft", "HandSwipeRight", "HandTap", "HandWaving", "HandWithdraw", "Handbag", "HandbagSimple", "HandsClapping", "HandsPraying", "Handshake", "HardDrive", "HardDrives", "HardHat", "Hash", "HashStraight", "HeadCircuit", "Headlights", "Headphones", "Headset", "Heart", "HeartBreak", "HeartHalf", "HeartStraight", "HeartStraightBreak", "Heartbeat", "Hexagon", "HighDefinition", "HighHeel", "Highlighter", "HighlighterCircle", "Hockey", "Hoodie", "Horse", "Hospital", "Hourglass", "HourglassHigh", "HourglassLow", "HourglassMedium", "HourglassSimple", "HourglassSimpleHigh", "HourglassSimpleLow", "House", "HouseLine", "HouseSimple", "Hurricane", "IceCream", "IdentificationBadge", "IdentificationCard", "Image", "ImageBroken", "ImageSquare", "Images", "ImagesSquare", "Infinity", "Info", "InstagramLogo", "Intersect", "IntersectSquare", "IntersectThree", "Intersection", "Invoice", "Island", "Jar", "JarLabel", "Jeep", "Joystick", "Kanban", "Key", "KeyReturn", "Keyboard", "Keyhole", "Knife", "Ladder", "LadderSimple", "Lamp", "LampPendant", "Laptop", "Lasso", "LastfmLogo", "Layout", "Leaf", "Lectern", "Lego", "LegoSmiley", "LessThan", "LessThanOrEqual", "LetterCircleH", "LetterCircleP", "LetterCircleV", "Lifebuoy", "Lightbulb", "LightbulbFilament", "Lighthouse", "Lightning", "LightningA", "LightningSlash", "LineSegment", "LineSegments", "LineVertical", "Link", "LinkBreak", "LinkSimple", "LinkSimpleBreak", "LinkSimpleHorizontal", "LinkedinLogo", "LinktreeLogo", "LinuxLogo", "List", "ListBullets", "ListChecks", "ListDashes", "ListHeart", "ListMagnifyingGlass", "ListNumbers", "ListPlus", "ListStar", "Lock", "LockKey", "LockKeyOpen", "LockLaminated", "LockLaminatedOpen", "LockOpen", "LockSimple", "LockSimpleOpen", "Lockers", "Log", "MagicWand", "Magnet", "MagnetStraight", "MagnifyingGlass", "MagnifyingGlassMinus", "MagnifyingGlassPlus", "Mailbox", "MapPin", "MapPinArea", "MapPinLine", "MapPinPlus", "MapPinSimple", "MapPinSimpleArea", "MapPinSimpleLine", "MapTrifold", "MarkdownLogo", "MarkerCircle", "Martini", "MaskHappy", "MaskSad", "MastodonLogo", "MathOperations", "MatrixLogo", "Medal", "MedalMilitary", "MediumLogo", "Megaphone", "MegaphoneSimple", "MemberOf", "Memory", "MessengerLogo", "MetaLogo", "Meteor", "Metronome", "Microphone", "MicrophoneSlash", "MicrophoneStage", "Microscope", "MicrosoftExcelLogo", "MicrosoftOutlookLogo", "MicrosoftTeamsLogo", "MicrosoftWordLogo", "Minus", "MinusCircle", "MinusSquare", "Money", "MoneyWavy", "Monitor", "MonitorArrowUp", "MonitorPlay", "Moon", "MoonStars", "Moped", "MopedFront", "Mosque", "Motorcycle", "Mountains", "Mouse", "MouseLeftClick", "MouseMiddleClick", "MouseRightClick", "MouseScroll", "MouseSimple", "MusicNote", "MusicNoteSimple", "MusicNotes", "MusicNotesMinus", "MusicNotesPlus", "MusicNotesSimple", "NavigationArrow", "Needle", "Network", "NetworkSlash", "NetworkX", "Newspaper", "NewspaperClipping", "NotEquals", "NotMemberOf", "NotSubsetOf", "NotSupersetOf", "Notches", "Note", "NoteBlank", "NotePencil", "Notebook", "Notepad", "Notification", "NotionLogo", "NuclearPlant", "NumberCircleEight", "NumberCircleFive", "NumberCircleFour", "NumberCircleNine", "NumberCircleOne", "NumberCircleSeven", "NumberCircleSix", "NumberCircleThree", "NumberCircleTwo", "NumberCircleZero", "NumberEight", "NumberFive", "NumberFour", "NumberNine", "NumberOne", "NumberSeven", "NumberSix", "NumberSquareEight", "NumberSquareFive", "NumberSquareFour", "NumberSquareNine", "NumberSquareOne", "NumberSquareSeven", "NumberSquareSix", "NumberSquareThree", "NumberSquareTwo", "NumberSquareZero", "NumberThree", "NumberTwo", "NumberZero", "Numpad", "Nut", "NyTimesLogo", "Octagon", "OfficeChair", "Onigiri", "OpenAiLogo", "Option", "Orange", "OrangeSlice", "Oven", "Package", "PaintBrush", "PaintBrushBroad", "PaintBrushHousehold", "PaintBucket", "PaintRoller", "Palette", "Panorama", "Pants", "PaperPlane", "PaperPlaneRight", "PaperPlaneTilt", "Paperclip", "PaperclipHorizontal", "Parachute", "Paragraph", "Parallelogram", "Park", "Password", "Path", "PatreonLogo", "Pause", "PauseCircle", "PawPrint", "PaypalLogo", "Peace", "Pen", "PenNib", "PenNibStraight", "Pencil", "PencilCircle", "PencilLine", "PencilRuler", "PencilSimple", "PencilSimpleLine", "PencilSimpleSlash", "PencilSlash", "Pentagon", "Pentagram", "Pepper", "Percent", "Person", "PersonArmsSpread", "PersonSimple", "PersonSimpleBike", "PersonSimpleCircle", "PersonSimpleHike", "PersonSimpleRun", "PersonSimpleSki", "PersonSimpleSwim", "PersonSimpleTaiChi", "PersonSimpleThrow", "PersonSimpleWalk", "Perspective", "Phone", "PhoneCall", "PhoneDisconnect", "PhoneIncoming", "PhoneList", "PhoneOutgoing", "PhonePause", "PhonePlus", "PhoneSlash", "PhoneTransfer", "PhoneX", "PhosphorLogo", "Pi", "PianoKeys", "PicnicTable", "PictureInPicture", "PiggyBank", "Pill", "PingPong", "PintGlass", "PinterestLogo", "Pinwheel", "Pipe", "PipeWrench", "PixLogo", "Pizza", "Placeholder", "Planet", "Plant", "Play", "PlayCircle", "PlayPause", "Playlist", "Plug", "PlugCharging", "Plugs", "PlugsConnected", "Plus", "PlusCircle", "PlusMinus", "PlusSquare", "PokerChip", "PoliceCar", "Polygon", "Popcorn", "Popsicle", "PottedPlant", "Power", "Prescription", "Presentation", "PresentationChart", "Printer", "Prohibit", "ProhibitInset", "ProjectorScreen", "ProjectorScreenChart", "Pulse", "PushPin", "PushPinSimple", "PushPinSimpleSlash", "PushPinSlash", "PuzzlePiece", "QrCode", "Question", "QuestionMark", "Queue", "Quotes", "Rabbit", "Racquet", "Radical", "Radio", "RadioButton", "Radioactive", "Rainbow", "RainbowCloud", "Ranking", "ReadCvLogo", "Receipt", "ReceiptX", "Record", "Rectangle", "RectangleDashed", "Recycle", "RedditLogo", "Repeat", "RepeatOnce", "ReplitLogo", "Resize", "Rewind", "RewindCircle", "RoadHorizon", "Robot", "Rocket", "RocketLaunch", "Rows", "RowsPlusBottom", "RowsPlusTop", "Rss", "RssSimple", "Rug", "Ruler", "Sailboat", "Scales", "Scan", "ScanSmiley", "Scissors", "Scooter", "Screencast", "Screwdriver", "Scribble", "ScribbleLoop", "Scroll", "Seal", "SealCheck", "SealPercent", "SealQuestion", "SealWarning", "Seat", "Seatbelt", "SecurityCamera", "Selection", "SelectionAll", "SelectionBackground", "SelectionForeground", "SelectionInverse", "SelectionPlus", "SelectionSlash", "Shapes", "Share", "ShareFat", "ShareNetwork", "Shield", "ShieldCheck", "ShieldCheckered", "ShieldChevron", "ShieldPlus", "ShieldSlash", "ShieldStar", "ShieldWarning", "ShippingContainer", "ShirtFolded", "ShootingStar", "ShoppingBag", "ShoppingBagOpen", "ShoppingCart", "ShoppingCartSimple", "Shovel", "Shower", "Shrimp", "Shuffle", "ShuffleAngular", "ShuffleSimple", "Sidebar", "SidebarSimple", "Sigma", "SignIn", "SignOut", "Signature", "Signpost", "SimCard", "Siren", "SketchLogo", "SkipBack", "SkipBackCircle", "SkipForward", "SkipForwardCircle", "Skull", "SkypeLogo", "SlackLogo", "Sliders", "SlidersHorizontal", "Slideshow", "Smiley", "SmileyAngry", "SmileyBlank", "SmileyMeh", "SmileyMelting", "SmileyNervous", "SmileySad", "SmileySticker", "SmileyWink", "SmileyXEyes", "SnapchatLogo", "Sneaker", "SneakerMove", "Snowflake", "SoccerBall", "Sock", "SolarPanel", "SolarRoof", "SortAscending", "SortDescending", "SoundcloudLogo", "Spade", "Sparkle", "SpeakerHifi", "SpeakerHigh", "SpeakerLow", "SpeakerNone", "SpeakerSimpleHigh", "SpeakerSimpleLow", "SpeakerSimpleNone", "SpeakerSimpleSlash", "SpeakerSimpleX", "SpeakerSlash", "SpeakerX", "Speedometer", "Sphere", "Spinner", "SpinnerBall", "SpinnerGap", "Spiral", "SplitHorizontal", "SplitVertical", "SpotifyLogo", "SprayBottle", "Square", "SquareHalf", "SquareHalfBottom", "SquareLogo", "SquareSplitVertical", "SquaresFour", "Stack", "StackMinus", "StackOverflowLogo", "StackPlus", "StackSimple", "Stairs", "Stamp", "StandardDefinition", "Star", "StarAndCrescent", "StarFour", "StarHalf", "StarOfDavid", "SteamLogo", "SteeringWheel", "Steps", "Stethoscope", "Sticker", "Stool", "Stop", "StopCircle", "Storefront", "Strategy", "StripeLogo", "Student", "SubsetOf", "SubsetProperOf", "Subtitles", "SubtitlesSlash", "Subtract", "SubtractSquare", "Subway", "Suitcase", "SuitcaseRolling", "SuitcaseSimple", "Sun", "SunDim", "SunHorizon", "Sunglasses", "SupersetOf", "SupersetProperOf", "Swap", "Swatches", "SwimmingPool", "Sword", "Synagogue", "Syringe", "TShirt", "Table", "Tabs", "Tag", "TagChevron", "TagSimple", "Target", "Taxi", "TeaBag", "TelegramLogo", "Television", "TelevisionSimple", "TennisBall", "Tent", "Terminal", "TerminalWindow", "TestTube", "TextAUnderline", "TextAa", "TextAlignCenter", "TextAlignJustify", "TextAlignLeft", "TextAlignRight", "TextB", "TextColumns", "TextH", "TextHFive", "TextHFour", "TextHOne", "TextHSix", "TextHThree", "TextHTwo", "TextIndent", "TextItalic", "TextOutdent", "TextStrikethrough", "TextSubscript", "TextSuperscript", "TextT", "TextTSlash", "TextUnderline", "Textbox", "Thermometer", "ThermometerCold", "ThermometerHot", "ThermometerSimple", "ThreadsLogo", "ThreeD", "ThumbsDown", "ThumbsUp", "Ticket", "TidalLogo", "TiktokLogo", "Tilde", "Timer", "TipJar", "Tipi", "Tire", "ToggleLeft", "ToggleRight", "Toilet", "ToiletPaper", "Toolbox", "Tooth", "Tornado", "Tote", "ToteSimple", "Towel", "Tractor", "Trademark", "TrademarkRegistered", "TrafficCone", "TrafficSign", "TrafficSignal", "Train", "TrainRegional", "TrainSimple", "Tram", "Translate", "Trash", "TrashSimple", "Tray", "TrayArrowDown", "TrayArrowUp", "TreasureChest", "Tree", "TreeEvergreen", "TreePalm", "TreeStructure", "TreeView", "TrendDown", "TrendUp", "Triangle", "TriangleDashed", "Trolley", "TrolleySuitcase", "Trophy", "Truck", "TruckTrailer", "TumblrLogo", "TwitchLogo", "TwitterLogo", "Umbrella", "UmbrellaSimple", "Union", "Unite", "UniteSquare", "Upload", "UploadSimple", "Usb", "User", "UserCheck", "UserCircle", "UserCircleCheck", "UserCircleDashed", "UserCircleGear", "UserCircleMinus", "UserCirclePlus", "UserFocus", "UserGear", "UserList", "UserMinus", "UserPlus", "UserRectangle", "UserSound", "UserSquare", "UserSwitch", "Users", "UsersFour", "UsersThree", "Van", "Vault", "VectorThree", "VectorTwo", "Vibrate", "Video", "VideoCamera", "VideoCameraSlash", "VideoConference", "Vignette", "VinylRecord", "VirtualReality", "Virus", "Visor", "Voicemail", "Volleyball", "Wall", "Wallet", "Warehouse", "Warning", "WarningCircle", "WarningDiamond", "WarningOctagon", "WashingMachine", "Watch", "WaveSawtooth", "WaveSine", "WaveSquare", "WaveTriangle", "Waveform", "WaveformSlash", "Waves", "Webcam", "WebcamSlash", "WebhooksLogo", "WechatLogo", "WhatsappLogo", "Wheelchair", "WheelchairMotion", "WifiHigh", "WifiLow", "WifiMedium", "WifiNone", "WifiSlash", "WifiX", "Wind", "Windmill", "WindowsLogo", "Wine", "Wrench", "X", "XCircle", "XLogo", "XSquare", "Yarn", "YinYang", "YoutubeLogo"];
var moduleBaseUrl = "https://framer.com/m/phosphor-icons/";
var weightOptions = ["thin", "light", "regular", "bold", "fill", "duotone"];
var lowercaseIconKeyPairs = iconKeys.reduce((res, key) => {
  res[key.toLowerCase()] = key;
  return res;
}, {});
function Icon2(props) {
  const { color, selectByList, iconSearch, iconSelection, onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave, weight, mirrored } = props;
  const isMounted = useRef4(false);
  const iconKey = useIconSelection(iconKeys, selectByList, iconSearch, iconSelection, lowercaseIconKeyPairs);
  const [SelectedIcon, setSelectedIcon] = useState4(iconKey === "Home" ? House_default(React4) : null);
  async function importModule() {
    try {
      const version = "0.0.57";
      const iconModuleUrl = `${moduleBaseUrl}${iconKey}.js@${version}`;
      const module = await import(
        /* webpackIgnore: true */
        iconModuleUrl
      );
      if (isMounted.current)
        setSelectedIcon(module.default(React4));
    } catch (err) {
      if (isMounted.current)
        setSelectedIcon(null);
    }
  }
  useEffect8(() => {
    isMounted.current = true;
    importModule();
    return () => {
      isMounted.current = false;
    };
  }, [iconKey]);
  const isOnCanvas = RenderTarget3.current() === RenderTarget3.canvas;
  const emptyState = isOnCanvas ? /* @__PURE__ */ _jsx3(NullState, {}) : null;
  return /* @__PURE__ */ _jsx3(motion.div, { style: { display: "contents" }, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, children: SelectedIcon ? /* @__PURE__ */ _jsx3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", style: { userSelect: "none", width: "100%", height: "100%", display: "inline-block", fill: color, color, flexShrink: 0, transform: mirrored ? "scale(-1, 1)" : void 0 }, focusable: "false", color, children: /* @__PURE__ */ _jsx3(SelectedIcon, { color, weight }) }) : emptyState });
}
Icon2.displayName = "Phosphor";
Icon2.defaultProps = { width: 24, height: 24, iconSelection: "House", iconSearch: "House", color: "#66F", selectByList: true, weight: "regular", mirrored: false };
addPropertyControls2(Icon2, { selectByList: { type: ControlType6.Boolean, title: "Select", enabledTitle: "List", disabledTitle: "Search", defaultValue: Icon2.defaultProps.selectByList }, iconSelection: { type: ControlType6.Enum, options: iconKeys, defaultValue: Icon2.defaultProps.iconSelection, title: "Name", hidden: ({ selectByList }) => !selectByList, description: "Find every icon name on the [Phosphor site](https://phosphoricons.com/)" }, iconSearch: { type: ControlType6.String, title: "Name", placeholder: "Menu, Wifi, Box\u2026", hidden: ({ selectByList }) => selectByList }, color: { type: ControlType6.Color, title: "Color", defaultValue: Icon2.defaultProps.color }, weight: { type: ControlType6.Enum, title: "Weight", optionTitles: weightOptions.map((piece) => piece.charAt(0).toUpperCase() + piece.slice(1)), options: weightOptions, defaultValue: Icon2.defaultProps.weight }, mirrored: { type: ControlType6.Boolean, enabledTitle: "Yes", disabledTitle: "No", defaultValue: Icon2.defaultProps.mirrored }, ...defaultEvents2 });

// http-url:https://framerusercontent.com/modules/1xIdf458i11tFVTCuikq/Bs3fwTDm47vC0P53QvTi/jrrfAaBhK.js
import { fontStore as fontStore4 } from "../_framer-runtime.js";
fontStore4.loadFonts(["GF;Instrument Serif-regular", "GF;Instrument Serif-italic"]);
var fonts3 = [{ explicitInter: true, fonts: [{ family: "Instrument Serif", source: "google", style: "normal", url: "https://fonts.gstatic.com/s/instrumentserif/v4/jizBRFtNs2ka5fXjeivQ4LroWlx-2zcZj1bIkNo.woff2", weight: "400" }, { family: "Instrument Serif", source: "google", style: "italic", url: "https://fonts.gstatic.com/s/instrumentserif/v4/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATjnTNgNq55w.woff2", weight: "400" }] }];
var css3 = ['.framer-55egu .framer-styles-preset-fsub8n:not(.rich-text-wrapper), .framer-55egu .framer-styles-preset-fsub8n.rich-text-wrapper h6 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-55egu .framer-styles-preset-fsub8n:not(.rich-text-wrapper), .framer-55egu .framer-styles-preset-fsub8n.rich-text-wrapper h6 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-55egu .framer-styles-preset-fsub8n:not(.rich-text-wrapper), .framer-55egu .framer-styles-preset-fsub8n.rich-text-wrapper h6 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className3 = "framer-55egu";

// http-url:https://framerusercontent.com/modules/z59LGiH2B2lQCLBlN03P/PIpY3cnrg8oqiJ64TP22/HMenYKCuR.js
import { jsx as _jsx5 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls4, ComponentViewportProvider, ControlType as ControlType8, cx, getFonts, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "../_framer-runtime.js";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "framer-motion";
import * as React6 from "react";

// http-url:https://framerusercontent.com/modules/f0DboytQenYh21kfme7W/zb1zVBMZJKgPMiedOi0y/Feather.js
import { jsx as _jsx4 } from "react/jsx-runtime";
import * as React5 from "react";
import { useState as useState5, useEffect as useEffect9, useRef as useRef5 } from "react";
import { addPropertyControls as addPropertyControls3, ControlType as ControlType7, RenderTarget as RenderTarget4 } from "../_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/8tFVJ9SCM5akQRM0UzVD/YkxZV5bKC4LrRDEdvAgQ/home.js
var r;
var s = (o) => {
  if (!r) {
    const n = o.forwardRef(({ color: t = "currentColor", size: e = 24, ...i }, l) => {
      return o.createElement("svg", { ref: l, xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: t, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...i }, o.createElement("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), o.createElement("polyline", { points: "9 22 9 12 15 12 15 22" }));
    });
    n.displayName = "Home", r = n;
  }
  return r;
};

// http-url:https://framerusercontent.com/modules/f0DboytQenYh21kfme7W/zb1zVBMZJKgPMiedOi0y/Feather.js
var iconKeys2 = ["activity", "airplay", "alert-circle", "alert-octagon", "alert-triangle", "align-center", "align-justify", "align-left", "align-right", "anchor", "aperture", "archive", "arrow-down", "arrow-down-circle", "arrow-down-left", "arrow-down-right", "arrow-left", "arrow-left-circle", "arrow-right", "arrow-right-circle", "arrow-up", "arrow-up-circle", "arrow-up-left", "arrow-up-right", "at-sign", "award", "bar-chart", "bar-chart-2", "battery", "battery-charging", "bell", "bell-off", "bluetooth", "bold", "book", "book-open", "bookmark", "box", "briefcase", "calendar", "camera", "camera-off", "cast", "check", "check-circle", "check-square", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "chevrons-down", "chevrons-left", "chevrons-right", "chevrons-up", "chrome", "circle", "clipboard", "clock", "cloud", "cloud-drizzle", "cloud-lightning", "cloud-off", "cloud-rain", "cloud-snow", "code", "codepen", "codesandbox", "coffee", "columns", "command", "compass", "copy", "corner-down-left", "corner-down-right", "corner-left-down", "corner-left-up", "corner-right-down", "corner-right-up", "corner-up-left", "corner-up-right", "cpu", "credit-card", "crop", "crosshair", "database", "delete", "disc", "divide", "divide-circle", "divide-square", "dollar-sign", "download", "download-cloud", "dribbble", "droplet", "edit", "edit-2", "edit-3", "external-link", "eye", "eye-off", "facebook", "fast-forward", "feather", "figma", "file", "file-minus", "file-plus", "file-text", "film", "filter", "flag", "folder", "folder-minus", "folder-plus", "framer", "frown", "gift", "git-branch", "git-commit", "git-merge", "git-pull-request", "github", "gitlab", "globe", "grid", "hard-drive", "hash", "headphones", "heart", "help-circle", "hexagon", "home", "image", "inbox", "info", "instagram", "italic", "key", "layers", "layout", "life-buoy", "link", "link-2", "linkedin", "list", "loader", "lock", "log-in", "log-out", "mail", "map", "map-pin", "maximize", "maximize-2", "meh", "menu", "message-circle", "message-square", "mic", "mic-off", "minimize", "minimize-2", "minus", "minus-circle", "minus-square", "monitor", "moon", "more-horizontal", "more-vertical", "mouse-pointer", "move", "music", "navigation", "navigation-2", "octagon", "package", "paperclip", "pause", "pause-circle", "pen-tool", "percent", "phone", "phone-call", "phone-forwarded", "phone-incoming", "phone-missed", "phone-off", "phone-outgoing", "pie-chart", "play", "play-circle", "plus", "plus-circle", "plus-square", "pocket", "power", "printer", "radio", "refresh-ccw", "refresh-cw", "repeat", "rewind", "rotate-ccw", "rotate-cw", "rss", "save", "scissors", "search", "send", "server", "settings", "share", "share-2", "shield", "shield-off", "shopping-bag", "shopping-cart", "shuffle", "sidebar", "skip-back", "skip-forward", "slack", "slash", "sliders", "smartphone", "smile", "speaker", "square", "star", "stop-circle", "sun", "sunrise", "sunset", "tablet", "tag", "target", "terminal", "thermometer", "thumbs-down", "thumbs-up", "toggle-left", "toggle-right", "tool", "trash", "trash-2", "trello", "trending-down", "trending-up", "triangle", "truck", "tv", "twitch", "twitter", "type", "umbrella", "underline", "unlock", "upload", "upload-cloud", "user", "user-check", "user-minus", "user-plus", "user-x", "users", "video", "video-off", "voicemail", "volume", "volume-1", "volume-2", "volume-x", "watch", "wifi", "wifi-off", "wind", "x", "x-circle", "x-octagon", "x-square", "youtube", "zap", "zap-off", "zoom-in", "zoom-out"];
var moduleBaseUrl2 = "https://framer.com/m/feather-icons/";
var uppercaseIconKeys = iconKeys2.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
var lowercaseIconKeyPairs2 = iconKeys2.reduce((res, key) => {
  res[key.toLowerCase()] = key;
  return res;
}, {});
function Icon3(props) {
  const { color, selectByList, iconSearch, iconSelection, onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave, mirrored } = props;
  const isMounted = useRef5(false);
  const iconKey = useIconSelection(iconKeys2, selectByList, iconSearch, iconSelection, lowercaseIconKeyPairs2);
  const [SelectedIcon, setSelectedIcon] = useState5(iconKey === "Home" ? s(React5) : null);
  async function importModule() {
    let active = true;
    try {
      const iconModuleUrl = `${moduleBaseUrl2}${iconKey}.js@0.0.29`;
      const module = await import(
        /* webpackIgnore: true */
        iconModuleUrl
      );
      if (active)
        setSelectedIcon(module.default(React5));
    } catch (e) {
      console.log(e);
      if (active)
        setSelectedIcon(null);
    }
    return () => {
      active = false;
    };
  }
  useEffect9(() => {
    importModule();
  }, [iconKey]);
  const isOnCanvas = RenderTarget4.current() === RenderTarget4.canvas;
  const emptyState = isOnCanvas ? /* @__PURE__ */ _jsx4(NullState, {}) : null;
  return /* @__PURE__ */ _jsx4("div", { style: { display: "contents" }, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, children: SelectedIcon ? /* @__PURE__ */ _jsx4(SelectedIcon, { style: { width: "100%", height: "100%", transform: mirrored ? "scale(-1, 1)" : void 0 }, color }) : emptyState });
}
Icon3.displayName = "Feather";
Icon3.defaultProps = { width: 24, height: 24, iconSelection: "home", iconSearch: "Home", color: "#66F", selectByList: true, mirrored: false };
addPropertyControls3(Icon3, { selectByList: { type: ControlType7.Boolean, title: "Select", enabledTitle: "List", disabledTitle: "Search", defaultValue: Icon3.defaultProps.selectByList }, iconSelection: { type: ControlType7.Enum, options: iconKeys2, optionTitles: uppercaseIconKeys, defaultValue: Icon3.defaultProps.iconSelection, title: "Name", hidden: ({ selectByList }) => !selectByList, description: "Find every icon name on the [Feather site](https://feathericons.com/)" }, iconSearch: { type: ControlType7.String, title: "Name", placeholder: "Menu, Wifi, Box\u2026", hidden: ({ selectByList }) => selectByList }, mirrored: { type: ControlType7.Boolean, enabledTitle: "Yes", disabledTitle: "No", defaultValue: Icon3.defaultProps.mirrored }, color: { type: ControlType7.Color, title: "Color", defaultValue: Icon3.defaultProps.color }, ...defaultEvents2 });

// http-url:https://framerusercontent.com/modules/z59LGiH2B2lQCLBlN03P/PIpY3cnrg8oqiJ64TP22/HMenYKCuR.js
var FeatherFonts = getFonts(Icon3);
var enabledGestures = { oykAILxzi: { hover: true } };
var cycleOrder = ["oykAILxzi", "wjLs5oeSU"];
var serializationHash = "framer-olMA8";
var variantClassNames = { oykAILxzi: "framer-v-1v4nttl", wjLs5oeSU: "framer-v-evqe2r" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion2(React6.Fragment);
var humanReadableVariantMap = { Large: "oykAILxzi", Small: "wjLs5oeSU" };
var getProps2 = ({ click, height, id, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return { ...props, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "oykAILxzi", zpuGFLTWv: click !== null && click !== void 0 ? click : props.zpuGFLTWv };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className7, layoutId, variant, zpuGFLTWv, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "oykAILxzi", enabledGestures, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTapkarkn9 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (zpuGFLTWv) {
      const res = await zpuGFLTWv(...args);
      if (res === false)
        return false;
    }
  });
  const ref1 = React6.useRef(null);
  const defaultLayoutId = React6.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx5(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition, { value: transition1, children: /* @__PURE__ */ _jsx5(motion2.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-1v4nttl", className7, classNames), "data-framer-name": "Large", "data-highlight": true, layoutDependency, layoutId: "About__oykAILxzi", onTap: onTapkarkn9, ref: ref !== null && ref !== void 0 ? ref : ref1, style: { backdropFilter: "blur(6px)", backgroundColor: "rgba(82, 82, 82, 0.7)", borderBottomLeftRadius: 72, borderBottomRightRadius: 72, borderTopLeftRadius: 72, borderTopRightRadius: 72, WebkitBackdropFilter: "blur(6px)", ...style }, variants: { "oykAILxzi-hover": { backgroundColor: "rgba(150, 150, 150, 0.7)" } }, ...addPropertyOverrides({ "oykAILxzi-hover": { "data-framer-name": void 0 }, wjLs5oeSU: { "data-framer-name": "Small" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx5(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx5(motion2.div, { className: "framer-190ibfv-container", layoutDependency, layoutId: "About__kUXUyZOus-container", children: /* @__PURE__ */ _jsx5(Icon3, { color: "rgb(255, 255, 255)", height: "100%", iconSearch: "Home", iconSelection: "play", id: "kUXUyZOus", layoutId: "About__kUXUyZOus", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, width: "100%" }) }) }) }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-olMA8.framer-xjjxlo, .framer-olMA8 .framer-xjjxlo { display: block; }", ".framer-olMA8.framer-1v4nttl { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 0px 16px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-olMA8 .framer-190ibfv-container { flex: none; height: 20px; position: relative; width: 20px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-olMA8.framer-1v4nttl { gap: 0px; } .framer-olMA8.framer-1v4nttl > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-olMA8.framer-1v4nttl > :first-child { margin-left: 0px; } .framer-olMA8.framer-1v4nttl > :last-child { margin-right: 0px; } }", ".framer-olMA8.framer-v-evqe2r.framer-1v4nttl { height: auto; width: 100%; }", ".framer-olMA8.framer-v-evqe2r .framer-190ibfv-container { height: 14px; width: 14px; }"];
var FramerHMenYKCuR = withCSS(Component2, css4, "framer-olMA8");
var HMenYKCuR_default = FramerHMenYKCuR;
FramerHMenYKCuR.displayName = "Video / Play";
FramerHMenYKCuR.defaultProps = { height: 52, width: 132 };
addPropertyControls4(FramerHMenYKCuR, { variant: { options: ["oykAILxzi", "wjLs5oeSU"], optionTitles: ["Large", "Small"], title: "Variant", type: ControlType8.Enum }, zpuGFLTWv: { title: "Click", type: ControlType8.EventHandler } });
addFonts(FramerHMenYKCuR, [{ explicitInter: true, fonts: [] }, ...FeatherFonts], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/kiGb7Z2KR59CrxMpxViw/BIfMiU6Glzcdm6pKOWHB/cvpSEdd5Q.js
var VideoFonts = getFonts2(Video);
var VideoPlayFonts = getFonts2(HMenYKCuR_default);
var PhosphorFonts = getFonts2(Icon2);
var cycleOrder2 = ["rJIOrpxcD", "bDzyalNNo", "saITzoE6v", "j4BI0l0My"];
var serializationHash2 = "framer-1iAvx";
var variantClassNames2 = { bDzyalNNo: "framer-v-xkkw6i", j4BI0l0My: "framer-v-1xkq48", rJIOrpxcD: "framer-v-1js217k", saITzoE6v: "framer-v-1iuuclt" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var transition2 = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.06, skewX: 0, skewY: 0, transition: transition2 };
var transformTemplate1 = (_, t) => `translate(-50%, -50%) ${t}`;
var Transition2 = ({ value, children }) => {
  const config = React7.useContext(MotionConfigContext2);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React7.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx6(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion3(React7.Fragment);
var humanReadableVariantMap2 = { Active: "bDzyalNNo", Default: "rJIOrpxcD", Mobile_Active: "j4BI0l0My", Mobile_Default: "saITzoE6v" };
var getProps3 = ({ height, id, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return { ...props, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "rJIOrpxcD" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React7.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo2();
  const { style, className: className7, layoutId, variant, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "rJIOrpxcD", variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback2(baseVariant);
  const onTap13mce2h = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    setVariant("saITzoE6v");
  });
  const onTap1dixy3c = activeVariantCallback(async (...args) => {
    setVariant("bDzyalNNo");
  });
  const onTap11ci4r6 = activeVariantCallback(async (...args) => {
    setVariant("j4BI0l0My");
  });
  const zpuGFLTWv1dixy3c = activeVariantCallback(async (...args) => {
    setVariant("bDzyalNNo");
  });
  const ref1 = React7.useRef(null);
  const isDisplayed = () => {
    if (["saITzoE6v", "j4BI0l0My"].includes(baseVariant))
      return false;
    return true;
  };
  const defaultLayoutId = React7.useId();
  const sharedStyleClassNames = [className3];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx6(LayoutGroup2, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx6(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx6(Transition2, { value: transition12, children: /* @__PURE__ */ _jsxs(motion3.div, { ...restProps, ...gestureHandlers, className: cx2(serializationHash2, ...sharedStyleClassNames, "framer-1js217k", className7, classNames), "data-framer-name": "Default", layoutDependency, layoutId: "About__rJIOrpxcD", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { borderBottomLeftRadius: 32, borderBottomRightRadius: 32, borderTopLeftRadius: 32, borderTopRightRadius: 32, ...style }, variants: { j4BI0l0My: { borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16 }, saITzoE6v: { borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16 } }, ...addPropertyOverrides2({ bDzyalNNo: { "data-framer-name": "Active" }, j4BI0l0My: { "data-framer-name": "Mobile_Active", "data-highlight": true, onTap: onTap13mce2h }, saITzoE6v: { "data-framer-name": "Mobile_Default" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx6(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx6(motion3.div, { className: "framer-cp4zle-container", "data-framer-name": "Video", layoutDependency, layoutId: "About__toPCHeWfg-container", name: "Video", children: /* @__PURE__ */ _jsx6(Video, { backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: 32, bottomLeftRadius: 32, bottomRightRadius: 32, controls: false, height: "100%", id: "toPCHeWfg", isMixedBorderRadius: false, layoutId: "About__toPCHeWfg", loop: true, muted: true, name: "Video", objectFit: "cover", playing: true, posterEnabled: false, srcFile: "https://framerusercontent.com/assets/ISOAc1XQFodQ4YiBPHcTgcDiA.mp4", srcType: "URL", srcUrl: "https://videos.pexels.com/video-files/6892729/6892729-uhd_2732_1440_25fps.mp4", startTime: 0, style: { height: "100%", maxWidth: "100%", width: "100%" }, topLeftRadius: 32, topRightRadius: 32, volume: 25, width: "100%", ...addPropertyOverrides2({ bDzyalNNo: { controls: true, muted: false, volume: 35 }, j4BI0l0My: { borderRadius: 16, bottomLeftRadius: 16, bottomRightRadius: 16, controls: true, muted: false, topLeftRadius: 16, topRightRadius: 16 }, saITzoE6v: { borderRadius: 16, bottomLeftRadius: 16, bottomRightRadius: 16, topLeftRadius: 16, topRightRadius: 16 } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsxs(motion3.div, { className: "framer-rk5nbl", "data-highlight": true, layoutDependency, layoutId: "About__UNPePDQg_", onTap: onTap1dixy3c, style: { backgroundColor: "rgba(0, 0, 0, 0.25)", borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, opacity: 1 }, variants: { bDzyalNNo: { opacity: 0 }, j4BI0l0My: { opacity: 0 }, saITzoE6v: { borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16 } }, ...addPropertyOverrides2({ j4BI0l0My: { "data-highlight": void 0, onTap: void 0 }, saITzoE6v: { onTap: onTap11ci4r6 } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx6(ComponentViewportProvider2, { height: 52, width: "132px", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + ((((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 653.5) - -0.5) * 0.500360490266763 - 26), ...addPropertyOverrides2({ j4BI0l0My: { height: 48, width: "107px", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + ((((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 360) - -0.5) * 0.5000000000000002 - 24) }, saITzoE6v: { height: 48, width: "107px", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + ((((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 360) - -0.5) * 0.5000000000000002 - 24) } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(motion3.div, { className: "framer-17wfpfo-container", layoutDependency, layoutId: "About__Jwi5HMbHL-container", transformTemplate: transformTemplate1, whileHover: animation, ...addPropertyOverrides2({ j4BI0l0My: { transformTemplate: void 0 }, saITzoE6v: { transformTemplate: void 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(HMenYKCuR_default, { height: "100%", id: "Jwi5HMbHL", layoutId: "About__Jwi5HMbHL", style: { width: "100%" }, variant: "oykAILxzi", width: "100%", zpuGFLTWv: zpuGFLTWv1dixy3c, ...addPropertyOverrides2({ j4BI0l0My: { style: { height: "100%", width: "100%" }, variant: "wjLs5oeSU", zpuGFLTWv: void 0 }, saITzoE6v: { style: { height: "100%", width: "100%" }, variant: "wjLs5oeSU", zpuGFLTWv: void 0 } }, baseVariant, gestureVariant) }) }) }), isDisplayed() && /* @__PURE__ */ _jsx6(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React7.Fragment, { children: /* @__PURE__ */ _jsx6(motion3.h6, { className: "framer-styles-preset-fsub8n", "data-styles-preset": "jrrfAaBhK", style: { "--framer-text-color": "var(--extracted-1w1cjl5, rgb(255, 255, 255))" }, children: "Watch an intro" }) }), className: "framer-5chssh", fonts: ["Inter"], layoutDependency, layoutId: "About__GfRw8xLDY", style: { "--extracted-1w1cjl5": "rgb(255, 255, 255)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx6(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx6(motion3.div, { className: "framer-pdhnp3-container", layoutDependency, layoutId: "About__MiOzME1hE-container", children: /* @__PURE__ */ _jsx6(Icon2, { color: "var(--token-e6637f29-243e-4263-a104-b6c80e63c7cc, rgba(255, 255, 255, 0.5))", height: "100%", iconSearch: "House", iconSelection: "SpeakerSimpleSlash", id: "MiOzME1hE", layoutId: "About__MiOzME1hE", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "regular", width: "100%" }) }) })] })] }) }) }) });
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-1iAvx.framer-k1obh, .framer-1iAvx .framer-k1obh { display: block; }", ".framer-1iAvx.framer-1js217k { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-1iAvx .framer-cp4zle-container { align-self: stretch; flex: 1 0 0px; height: auto; max-width: 1366px; position: relative; width: 1px; }", ".framer-1iAvx .framer-rk5nbl { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }", ".framer-1iAvx .framer-17wfpfo-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: 132px; }", ".framer-1iAvx .framer-5chssh { bottom: 36px; flex: none; height: auto; left: 40px; position: absolute; white-space: pre; width: auto; }", ".framer-1iAvx .framer-pdhnp3-container { bottom: 36px; flex: none; height: 32px; position: absolute; right: 40px; width: 32px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1iAvx.framer-1js217k { gap: 0px; } .framer-1iAvx.framer-1js217k > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-1iAvx.framer-1js217k > :first-child { margin-left: 0px; } .framer-1iAvx.framer-1js217k > :last-child { margin-right: 0px; } }", ".framer-1iAvx.framer-v-xkkw6i .framer-rk5nbl { pointer-events: none; }", ".framer-1iAvx.framer-v-1iuuclt.framer-1js217k { width: 100%; }", ".framer-1iAvx.framer-v-1iuuclt .framer-cp4zle-container, .framer-1iAvx.framer-v-1xkq48 .framer-cp4zle-container { align-self: unset; height: 360px; }", ".framer-1iAvx.framer-v-1iuuclt .framer-rk5nbl { will-change: var(--framer-will-change-override, transform); }", ".framer-1iAvx.framer-v-1iuuclt .framer-17wfpfo-container, .framer-1iAvx.framer-v-1xkq48 .framer-17wfpfo-container { height: 48px; left: calc(50.00000000000002% - 107px / 2); top: calc(50.00000000000002% - 48px / 2); width: 107px; }", ".framer-1iAvx.framer-v-1iuuclt .framer-pdhnp3-container { bottom: 20px; height: 31px; right: 20px; width: 31px; }", ".framer-1iAvx.framer-v-1xkq48.framer-1js217k { cursor: pointer; width: 100%; }", ".framer-1iAvx.framer-v-1xkq48 .framer-rk5nbl { cursor: unset; }", ...css3];
var FramercvpSEdd5Q = withCSS2(Component3, css5, "framer-1iAvx");
var cvpSEdd5Q_default = FramercvpSEdd5Q;
FramercvpSEdd5Q.displayName = "Video / Video";
FramercvpSEdd5Q.defaultProps = { height: 653.5, width: 1240 };
addPropertyControls5(FramercvpSEdd5Q, { variant: { options: ["rJIOrpxcD", "bDzyalNNo", "saITzoE6v", "j4BI0l0My"], optionTitles: ["Default", "Active", "Mobile_Default", "Mobile_Active"], title: "Variant", type: ControlType9.Enum } });
addFonts2(FramercvpSEdd5Q, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...VideoFonts, ...VideoPlayFonts, ...PhosphorFonts, ...getFontsFromSharedStyle(fonts3)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/gqo7f5SvKXu35ylfPLyO/S2UvVveK6ks7txzhby5Q/Lfmuf2RGz.js
import { jsx as _jsx7 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls6, ControlType as ControlType10, cx as cx3, getFontsFromSharedStyle as getFontsFromSharedStyle2, RichText as RichText2, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS3 } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion4, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React8 from "react";

// http-url:https://framerusercontent.com/modules/aKryQeD1YAHAegs9MtvK/aW291tQZsP78x37AccGH/dmbqlUU7V.js
import { fontStore as fontStore5 } from "../_framer-runtime.js";
fontStore5.loadFonts(["FS;Satoshi-medium", "FS;Satoshi-bold", "FS;Satoshi-bold italic", "FS;Satoshi-medium italic"]);
var fonts4 = [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }, { family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2", weight: "500" }] }];
var css6 = ['.framer-UxiLR .framer-styles-preset-1jh4872:not(.rich-text-wrapper), .framer-UxiLR .framer-styles-preset-1jh4872.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className4 = "framer-UxiLR";

// http-url:https://framerusercontent.com/modules/gqo7f5SvKXu35ylfPLyO/S2UvVveK6ks7txzhby5Q/Lfmuf2RGz.js
var cycleOrder3 = ["kpzeq4sfz", "ktjuUi2sm"];
var serializationHash3 = "framer-BETZb";
var variantClassNames3 = { kpzeq4sfz: "framer-v-a04z8d", ktjuUi2sm: "framer-v-pcvxu6" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition13 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition3 = ({ value, children }) => {
  const config = React8.useContext(MotionConfigContext3);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React8.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx7(MotionConfigContext3.Provider, { value: contextValue, children });
};
var Variants3 = motion4(React8.Fragment);
var humanReadableVariantMap3 = { Dark: "ktjuUi2sm", Light: "kpzeq4sfz" };
var getProps4 = ({ height, id, text, width, ...props }) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1;
  return { ...props, BKFbCYkGn: (_ref = text !== null && text !== void 0 ? text : props.BKFbCYkGn) !== null && _ref !== void 0 ? _ref : "Benefits", variant: (_ref1 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap3[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref1 !== void 0 ? _ref1 : "kpzeq4sfz" };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React8.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo3();
  const { style, className: className7, layoutId, variant, BKFbCYkGn, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder: cycleOrder3, defaultVariant: "kpzeq4sfz", variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const ref1 = React8.useRef(null);
  const defaultLayoutId = React8.useId();
  const sharedStyleClassNames = [className4];
  const componentViewport = useComponentViewport3();
  return /* @__PURE__ */ _jsx7(LayoutGroup3, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx7(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx7(Transition3, { value: transition13, children: /* @__PURE__ */ _jsx7(motion4.div, { ...restProps, ...gestureHandlers, className: cx3(serializationHash3, ...sharedStyleClassNames, "framer-a04z8d", className7, classNames), "data-border": true, "data-framer-name": "Light", layoutDependency, layoutId: "About__kpzeq4sfz", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "rgba(33, 33, 33, 0.12)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(224, 224, 224, 0)", borderBottomLeftRadius: 56, borderBottomRightRadius: 56, borderTopLeftRadius: 56, borderTopRightRadius: 56, ...style }, variants: { ktjuUi2sm: { backgroundColor: "rgb(36, 36, 36)" } }, ...addPropertyOverrides3({ ktjuUi2sm: { "data-framer-name": "Dark" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx7(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx7(React8.Fragment, { children: /* @__PURE__ */ _jsx7(motion4.p, { className: "framer-styles-preset-1jh4872", "data-styles-preset": "dmbqlUU7V", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-85129ec3-9333-4c87-b665-8ff57171f1a9, rgb(13, 13, 13)))" }, children: "Benefits" }) }), className: "framer-1flna3j", fonts: ["Inter"], layoutDependency, layoutId: "About__NkkxX8Kcu", style: { "--extracted-r6o4lv": "var(--token-85129ec3-9333-4c87-b665-8ff57171f1a9, rgb(13, 13, 13))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: BKFbCYkGn, variants: { ktjuUi2sm: { "--extracted-r6o4lv": "var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides3({ ktjuUi2sm: { children: /* @__PURE__ */ _jsx7(React8.Fragment, { children: /* @__PURE__ */ _jsx7(motion4.p, { className: "framer-styles-preset-1jh4872", "data-styles-preset": "dmbqlUU7V", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255)))" }, children: "Benefits" }) }) } }, baseVariant, gestureVariant) }) }) }) }) });
});
var css7 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BETZb.framer-8sm0hf, .framer-BETZb .framer-8sm0hf { display: block; }", ".framer-BETZb.framer-a04z8d { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px 12px 0px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-BETZb .framer-1flna3j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-BETZb.framer-a04z8d { gap: 0px; } .framer-BETZb.framer-a04z8d > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-BETZb.framer-a04z8d > :first-child { margin-top: 0px; } .framer-BETZb.framer-a04z8d > :last-child { margin-bottom: 0px; } }", ".framer-BETZb.framer-v-pcvxu6 .framer-1flna3j { order: 0; }", ...css6, '.framer-BETZb[data-border="true"]::after, .framer-BETZb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerLfmuf2RGz = withCSS3(Component4, css7, "framer-BETZb");
var Lfmuf2RGz_default = FramerLfmuf2RGz;
FramerLfmuf2RGz.displayName = "Tags / Tag";
FramerLfmuf2RGz.defaultProps = { height: 32, width: 69 };
addPropertyControls6(FramerLfmuf2RGz, { variant: { options: ["kpzeq4sfz", "ktjuUi2sm"], optionTitles: ["Light", "Dark"], title: "Variant", type: ControlType10.Enum }, BKFbCYkGn: { defaultValue: "Benefits", displayTextArea: false, title: "Text", type: ControlType10.String } });
addFonts3(FramerLfmuf2RGz, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle2(fonts4)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/jFuz8uKc2v8kkTbuGi4C/gwAKnm86FxS0RrK9776n/OKIXYth6p.js
import { jsx as _jsx9, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts5, addPropertyControls as addPropertyControls8, ComponentViewportProvider as ComponentViewportProvider3, ControlType as ControlType12, cx as cx5, getFonts as getFonts3, getFontsFromSharedStyle as getFontsFromSharedStyle3, getPropertyControls, RichText as RichText3, useComponentViewport as useComponentViewport5, useLocaleInfo as useLocaleInfo5, useVariantState as useVariantState5, withCSS as withCSS5 } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup5, motion as motion6, MotionConfigContext as MotionConfigContext5 } from "framer-motion";
import * as React10 from "react";

// http-url:https://framerusercontent.com/modules/6Mk3h1BdthnMIOCjMcye/YXFgOSD75KJ7zT734Z4y/o762qolxM.js
import { fontStore as fontStore6 } from "../_framer-runtime.js";
fontStore6.loadFonts(["FS;Satoshi-medium", "FS;Satoshi-bold", "FS;Satoshi-bold italic", "FS;Satoshi-medium italic"]);
var fonts5 = [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }, { family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2", weight: "500" }] }];
var css8 = ['.framer-QpYUD .framer-styles-preset-4ov1fo:not(.rich-text-wrapper), .framer-QpYUD .framer-styles-preset-4ov1fo.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.35em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #050505; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1365px) and (min-width: 1000px) { .framer-QpYUD .framer-styles-preset-4ov1fo:not(.rich-text-wrapper), .framer-QpYUD .framer-styles-preset-4ov1fo.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.35em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #050505; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 999px) and (min-width: 600px) { .framer-QpYUD .framer-styles-preset-4ov1fo:not(.rich-text-wrapper), .framer-QpYUD .framer-styles-preset-4ov1fo.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.35em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #050505; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 599px) and (min-width: 0px) { .framer-QpYUD .framer-styles-preset-4ov1fo:not(.rich-text-wrapper), .framer-QpYUD .framer-styles-preset-4ov1fo.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.35em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #050505; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className5 = "framer-QpYUD";

// http-url:https://framerusercontent.com/modules/5U5dNn2iwUYjEPxCg9xD/ixVuZtNHGJFfUCh12XDN/qJ1WXG8sd.js
import { fontStore as fontStore7 } from "../_framer-runtime.js";
fontStore7.loadFonts(["FS;Satoshi-medium", "FS;Satoshi-bold", "FS;Satoshi-bold italic", "FS;Satoshi-medium italic"]);
var fonts6 = [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }, { family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2", weight: "500" }] }];
var css9 = ['.framer-cn90v .framer-styles-preset-r5iwcf:not(.rich-text-wrapper), .framer-cn90v .framer-styles-preset-r5iwcf.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(0, 0, 0, 0.55); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className6 = "framer-cn90v";

// http-url:https://framerusercontent.com/modules/9FMpreCsO9gzbHOMJUVw/khbGrptW3h4xWu234rLt/iO0rBDh5_.js
import { jsx as _jsx8, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls7, ControlType as ControlType11, cx as cx4, SVG, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS4 } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion5, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React9 from "react";
var cycleOrder4 = ["tBgwVYqU1", "moYRO6mru", "JzgQg3BJv"];
var serializationHash4 = "framer-6e4Z3";
var variantClassNames4 = { JzgQg3BJv: "framer-v-10otqn3", moYRO6mru: "framer-v-mcjwu6", tBgwVYqU1: "framer-v-ahuzci" };
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition14 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition4 = ({ value, children }) => {
  const config = React9.useContext(MotionConfigContext4);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React9.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx8(MotionConfigContext4.Provider, { value: contextValue, children });
};
var Variants4 = motion5(React9.Fragment);
var humanReadableVariantMap4 = { "1": "tBgwVYqU1", "2": "moYRO6mru", "3": "JzgQg3BJv" };
var getProps5 = ({ height, id, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return { ...props, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap4[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "tBgwVYqU1" };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = /* @__PURE__ */ React9.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo4();
  const { style, className: className7, layoutId, variant, ...restProps } = getProps5(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ cycleOrder: cycleOrder4, defaultVariant: "tBgwVYqU1", variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const ref1 = React9.useRef(null);
  const isDisplayed = () => {
    if (["moYRO6mru", "JzgQg3BJv"].includes(baseVariant))
      return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "moYRO6mru")
      return true;
    return false;
  };
  const isDisplayed2 = () => {
    if (baseVariant === "JzgQg3BJv")
      return true;
    return false;
  };
  const defaultLayoutId = React9.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport4();
  return /* @__PURE__ */ _jsx8(LayoutGroup4, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx8(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx8(Transition4, { value: transition14, children: /* @__PURE__ */ _jsxs2(motion5.div, { ...restProps, ...gestureHandlers, className: cx4(serializationHash4, ...sharedStyleClassNames, "framer-ahuzci", className7, classNames), "data-border": true, "data-framer-name": "1", layoutDependency, layoutId: "About__tBgwVYqU1", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "rgba(10, 15, 41, 0.08)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255))", borderBottomLeftRadius: 18, borderBottomRightRadius: 18, borderTopLeftRadius: 18, borderTopRightRadius: 18, boxShadow: "0px 0.7226247621292714px NaNpx -1.25px rgba(20, 21, 26, 0.03599), 0px 2.7462399638921484px NaNpx -2.5px rgba(20, 21, 26, 0.03178), 0px 12px NaNpx -3.75px rgba(20, 21, 26, 0.0125), inset 0px 2px 4px 0px rgba(0,0,0,0.25)", ...style }, ...addPropertyOverrides4({ JzgQg3BJv: { "data-framer-name": "3" }, moYRO6mru: { "data-framer-name": "2" } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsx8(SVG, { className: "framer-l4z8b7", "data-framer-name": "graphic", fill: "black", intrinsicHeight: 24, intrinsicWidth: 24, layoutDependency, layoutId: "About__wyd5QiXwi", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><style>@keyframes rotate-right{0%{transform:rotate(0)}25%{transform:rotate(10deg)}}</style><g style="animation:rotate-right 1s cubic-bezier(1,-.01,.13,1.15) infinite alternate-reverse both;transform-origin:top center"><path stroke="#265BFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 7.307h5"/><path stroke="#0A0A30" stroke-width="1.5" d="M9 5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v11.3a1.5 1.5 0 0 1-.54 1.152l-1.5 1.249a1.5 1.5 0 0 1-1.92 0l-1.5-1.249A1.5 1.5 0 0 1 9 16.8V5.5z"/></g></svg>', withExternalLayout: true }), isDisplayed1() && /* @__PURE__ */ _jsx8(SVG, { className: "framer-19frzop", "data-framer-name": "graphic", fill: "black", intrinsicHeight: 24, intrinsicWidth: 24, layoutDependency, layoutId: "About__F2XKBikwp", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><style>@keyframes loader8{0%{transform:scale(1) rotateZ(0)}50%{transform:scale(1.5) rotateZ(180deg)}}</style><g style="animation:loader8 1s cubic-bezier(.72,.08,.38,.87) infinite both;transform-origin:center"><path stroke="#0A0A30" stroke-linecap="round" stroke-width="1.5" d="M12.035 8v8M16 12H8"/><circle cx="12" cy="12" r="1.635" fill="#265BFF"/></g></svg>', withExternalLayout: true }), isDisplayed2() && /* @__PURE__ */ _jsx8(SVG, { className: "framer-5opvca", "data-framer-name": "graphic", fill: "black", intrinsicHeight: 24, intrinsicWidth: 24, layoutDependency, layoutId: "About__ki1naT83o", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><style>@keyframes pulsate{0%{transform:scale(1)}50%{transform:scale(.9)}}</style><g style="animation:pulsate .5s ease-in-out infinite both;transform-origin:center center" stroke-width="1.5"><path stroke="#0A0A30" d="m11.515 6.269.134.132a.5.5 0 0 0 .702 0l.133-.132A4.44 4.44 0 0 1 15.599 5c.578 0 1.15.112 1.684.33a4.41 4.41 0 0 1 1.429.939c.408.402.733.88.954 1.406a4.274 4.274 0 0 1 0 3.316 4.331 4.331 0 0 1-.954 1.405l-6.36 6.259a.5.5 0 0 1-.702 0l-6.36-6.259A4.298 4.298 0 0 1 4 9.333c0-1.15.464-2.252 1.29-3.064A4.439 4.439 0 0 1 8.401 5c1.168 0 2.288.456 3.114 1.269z"/><path stroke="#265BFF" stroke-linecap="round" stroke-linejoin="round" d="M15.5 7.5c.802.304 1.862 1.43 2 2"/></g></svg>', withExternalLayout: true })] }) }) }) });
});
var css10 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-6e4Z3.framer-w86e33, .framer-6e4Z3 .framer-w86e33 { display: block; }", ".framer-6e4Z3.framer-ahuzci { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: relative; width: min-content; }", ".framer-6e4Z3 .framer-l4z8b7, .framer-6e4Z3 .framer-19frzop, .framer-6e4Z3 .framer-5opvca { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); position: relative; width: 28px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-6e4Z3.framer-ahuzci { gap: 0px; } .framer-6e4Z3.framer-ahuzci > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-6e4Z3.framer-ahuzci > :first-child { margin-left: 0px; } .framer-6e4Z3.framer-ahuzci > :last-child { margin-right: 0px; } }", '.framer-6e4Z3[data-border="true"]::after, .framer-6e4Z3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FrameriO0rBDh5_ = withCSS4(Component5, css10, "framer-6e4Z3");
var iO0rBDh5_default = FrameriO0rBDh5_;
FrameriO0rBDh5_.displayName = "Other /  Icon | Animated";
FrameriO0rBDh5_.defaultProps = { height: 60, width: 60 };
addPropertyControls7(FrameriO0rBDh5_, { variant: { options: ["tBgwVYqU1", "moYRO6mru", "JzgQg3BJv"], optionTitles: ["1", "2", "3"], title: "Variant", type: ControlType11.Enum } });
addFonts4(FrameriO0rBDh5_, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/jFuz8uKc2v8kkTbuGi4C/gwAKnm86FxS0RrK9776n/OKIXYth6p.js
var IconAnimatedFonts = getFonts3(iO0rBDh5_default);
var IconAnimatedControls = getPropertyControls(iO0rBDh5_default);
var cycleOrder5 = ["bQUbMp4O2"];
var serializationHash5 = "framer-jbPLj";
var variantClassNames5 = { bQUbMp4O2: "framer-v-il5uzw" };
var transition15 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition5 = ({ value, children }) => {
  const config = React10.useContext(MotionConfigContext5);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React10.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx9(MotionConfigContext5.Provider, { value: contextValue, children });
};
var Variants5 = motion6(React10.Fragment);
var humanReadableEnumMap = { "1": "tBgwVYqU1", "2": "moYRO6mru", "3": "JzgQg3BJv" };
var getProps6 = ({ height, icon, id, text, title, width, ...props }) => {
  var _humanReadableEnumMap_icon, _ref, _ref1, _ref2, _ref3;
  return { ...props, JJ0XAHZhM: (_ref1 = (_ref = (_humanReadableEnumMap_icon = humanReadableEnumMap[icon]) !== null && _humanReadableEnumMap_icon !== void 0 ? _humanReadableEnumMap_icon : icon) !== null && _ref !== void 0 ? _ref : props.JJ0XAHZhM) !== null && _ref1 !== void 0 ? _ref1 : "tBgwVYqU1", urKIwY2Vm: (_ref2 = text !== null && text !== void 0 ? text : props.urKIwY2Vm) !== null && _ref2 !== void 0 ? _ref2 : "We don\u2019t do cookie-cutter. Every design is tailored to reflect the heartbeat of your brand.", Xo9B8jQ_j: (_ref3 = title !== null && title !== void 0 ? title : props.Xo9B8jQ_j) !== null && _ref3 !== void 0 ? _ref3 : "Crafted just for You" };
};
var createLayoutDependency5 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component6 = /* @__PURE__ */ React10.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo5();
  const { style, className: className7, layoutId, variant, JJ0XAHZhM, Xo9B8jQ_j, urKIwY2Vm, ...restProps } = getProps6(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState5({ cycleOrder: cycleOrder5, defaultVariant: "bQUbMp4O2", variant, variantClassNames: variantClassNames5 });
  const layoutDependency = createLayoutDependency5(props, variants);
  const ref1 = React10.useRef(null);
  const defaultLayoutId = React10.useId();
  const sharedStyleClassNames = [className5, className6];
  const componentViewport = useComponentViewport5();
  return /* @__PURE__ */ _jsx9(LayoutGroup5, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx9(Variants5, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx9(Transition5, { value: transition15, children: /* @__PURE__ */ _jsxs3(motion6.div, { ...restProps, ...gestureHandlers, className: cx5(serializationHash5, ...sharedStyleClassNames, "framer-il5uzw", className7, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "About__bQUbMp4O2", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { ...style }, children: [/* @__PURE__ */ _jsx9(ComponentViewportProvider3, { children: /* @__PURE__ */ _jsx9(motion6.div, { className: "framer-121u09p-container", layoutDependency, layoutId: "About__TxdVzw5cd-container", children: /* @__PURE__ */ _jsx9(iO0rBDh5_default, { height: "100%", id: "TxdVzw5cd", layoutId: "About__TxdVzw5cd", variant: JJ0XAHZhM, width: "100%" }) }) }), /* @__PURE__ */ _jsxs3(motion6.div, { className: "framer-cd9o4t", "data-framer-name": "Content", layoutDependency, layoutId: "About__hndjw7Ayf", children: [/* @__PURE__ */ _jsx9(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx9(React10.Fragment, { children: /* @__PURE__ */ _jsx9(motion6.p, { className: "framer-styles-preset-4ov1fo", "data-styles-preset": "o762qolxM", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-81ac12ce-6806-4ef8-aeb9-63089e9ec4fc, rgb(0, 0, 0)))" }, children: "Crafted just for You" }) }), className: "framer-1f2fuk6", "data-framer-name": "Design better and spend less time without restricting creative freedom.", fonts: ["Inter"], layoutDependency, layoutId: "About__z7kzr7D1k", style: { "--extracted-r6o4lv": "var(--token-81ac12ce-6806-4ef8-aeb9-63089e9ec4fc, rgb(0, 0, 0))", "--framer-paragraph-spacing": "0px" }, text: Xo9B8jQ_j, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx9(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx9(React10.Fragment, { children: /* @__PURE__ */ _jsx9(motion6.p, { className: "framer-styles-preset-r5iwcf", "data-styles-preset": "qJ1WXG8sd", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55)))" }, children: "We don\u2019t do cookie-cutter. Every design is tailored to reflect the heartbeat of your brand." }) }), className: "framer-yd3rr9", "data-framer-name": "Design better and spend less time without restricting creative freedom.", fonts: ["Inter"], layoutDependency, layoutId: "About__lZUngmW_K", style: { "--extracted-r6o4lv": "var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: urKIwY2Vm, verticalAlignment: "top", withExternalLayout: true })] })] }) }) }) });
});
var css11 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-jbPLj.framer-n2nx02, .framer-jbPLj .framer-n2nx02 { display: block; }", ".framer-jbPLj.framer-il5uzw { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-jbPLj .framer-121u09p-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-jbPLj .framer-cd9o4t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-jbPLj .framer-1f2fuk6, .framer-jbPLj .framer-yd3rr9 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-jbPLj.framer-il5uzw, .framer-jbPLj .framer-cd9o4t { gap: 0px; } .framer-jbPLj.framer-il5uzw > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-jbPLj.framer-il5uzw > :first-child, .framer-jbPLj .framer-cd9o4t > :first-child { margin-top: 0px; } .framer-jbPLj.framer-il5uzw > :last-child, .framer-jbPLj .framer-cd9o4t > :last-child { margin-bottom: 0px; } .framer-jbPLj .framer-cd9o4t > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }", ...css8, ...css9];
var FramerOKIXYth6p = withCSS5(Component6, css11, "framer-jbPLj");
var OKIXYth6p_default = FramerOKIXYth6p;
FramerOKIXYth6p.displayName = "Cards / Card | Value Proposition";
FramerOKIXYth6p.defaultProps = { height: 189, width: 372.5 };
addPropertyControls8(FramerOKIXYth6p, { JJ0XAHZhM: (IconAnimatedControls === null || IconAnimatedControls === void 0 ? void 0 : IconAnimatedControls["variant"]) && { ...IconAnimatedControls["variant"], defaultValue: "tBgwVYqU1", description: void 0, hidden: void 0, title: "Icon" }, Xo9B8jQ_j: { defaultValue: "Crafted just for You", displayTextArea: false, title: "Title", type: ControlType12.String }, urKIwY2Vm: { defaultValue: "We don\u2019t do cookie-cutter. Every design is tailored to reflect the heartbeat of your brand.", displayTextArea: false, title: "Text", type: ControlType12.String } });
addFonts5(FramerOKIXYth6p, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...IconAnimatedFonts, ...getFontsFromSharedStyle3(fonts5), ...getFontsFromSharedStyle3(fonts6)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/brLF7njWxJrKgZfZdUwu/rjfL7gf6NHrNkSA1K6Uo/qBQAn0sBt.js
import { jsx as _jsx10, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts6, addPropertyControls as addPropertyControls9, ComponentViewportProvider as ComponentViewportProvider4, ControlType as ControlType13, cx as cx6, getFonts as getFonts4, Link, RichText as RichText4, useComponentViewport as useComponentViewport6, useLocaleInfo as useLocaleInfo6, useVariantState as useVariantState6, withCSS as withCSS6 } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup6, motion as motion7, MotionConfigContext as MotionConfigContext6 } from "framer-motion";
import * as React11 from "react";
var PhosphorFonts2 = getFonts4(Icon2);
var enabledGestures2 = { keWPlQat1: { hover: true }, ui83puL52: { hover: true }, YAYragtRT: { hover: true } };
var cycleOrder6 = ["keWPlQat1", "ui83puL52", "YAYragtRT"];
var serializationHash6 = "framer-GgYnE";
var variantClassNames6 = { keWPlQat1: "framer-v-i8bq37", ui83puL52: "framer-v-ggn11p", YAYragtRT: "framer-v-eaxe4v" };
function addPropertyOverrides5(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition16 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var transition22 = { damping: 60, delay: 0, mass: 1, stiffness: 435, type: "spring" };
var Transition6 = ({ value, children }) => {
  const config = React11.useContext(MotionConfigContext6);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React11.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx10(MotionConfigContext6.Provider, { value: contextValue, children });
};
var Variants6 = motion7(React11.Fragment);
var humanReadableVariantMap5 = { Footer: "YAYragtRT", Primary: "keWPlQat1", Secondary: "ui83puL52" };
var getProps7 = ({ height, id, link, title, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref, _ref1;
  return { ...props, KGPkj0i0W: link !== null && link !== void 0 ? link : props.KGPkj0i0W, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap5[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "keWPlQat1", y00uT3Oer: (_ref1 = title !== null && title !== void 0 ? title : props.y00uT3Oer) !== null && _ref1 !== void 0 ? _ref1 : "Book a call" };
};
var createLayoutDependency6 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component7 = /* @__PURE__ */ React11.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo6();
  const { style, className: className7, layoutId, variant, KGPkj0i0W, y00uT3Oer, ...restProps } = getProps7(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState6({ cycleOrder: cycleOrder6, defaultVariant: "keWPlQat1", enabledGestures: enabledGestures2, variant, variantClassNames: variantClassNames6 });
  const layoutDependency = createLayoutDependency6(props, variants);
  const ref1 = React11.useRef(null);
  const isDisplayed = () => {
    if (gestureVariant === "ui83puL52-hover")
      return false;
    if (baseVariant === "ui83puL52")
      return false;
    return true;
  };
  const defaultLayoutId = React11.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport6();
  return /* @__PURE__ */ _jsx10(LayoutGroup6, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx10(Variants6, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx10(Transition6, { value: transition16, ...addPropertyOverrides5({ ui83puL52: { value: transition22 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx10(Link, { href: KGPkj0i0W, ...addPropertyOverrides5({ ui83puL52: { smoothScroll: true } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx10(motion7.a, { ...restProps, ...gestureHandlers, className: `${cx6(serializationHash6, ...sharedStyleClassNames, "framer-i8bq37", className7, classNames)} framer-xi748k`, "data-border": true, "data-framer-name": "Primary", layoutDependency, layoutId: "About__keWPlQat1", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "rgb(34, 34, 34)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-85129ec3-9333-4c87-b665-8ff57171f1a9, rgb(13, 13, 13))", borderBottomLeftRadius: 14, borderBottomRightRadius: 14, borderTopLeftRadius: 14, borderTopRightRadius: 14, boxShadow: "inset 0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(255, 255, 255, 0.61191), inset 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(255, 255, 255, 0.54024), inset 0px 12px 12px -3.75px rgba(255, 255, 255, 0.2125)", ...style }, variants: { "keWPlQat1-hover": { backgroundColor: "var(--token-ac535b87-5d13-47bb-90f6-40146681afd0, rgb(69, 69, 69))", boxShadow: "0px 0px 0px 3px rgba(87, 87, 87, 0.25)" }, "ui83puL52-hover": { boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.10798), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.09534), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.0375), inset 0px -6px 0px 0px rgba(0, 0, 0, 0.12)" }, "YAYragtRT-hover": { boxShadow: "0px 0px 0px 3px rgba(87, 87, 87, 0.4)" }, ui83puL52: { "--border-color": "rgb(221, 223, 226)", backgroundColor: "var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255))", boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.10798), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.09534), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.0375), inset 0px -2px 0px 0px rgba(0, 0, 0, 0.2)" }, YAYragtRT: { "--border-color": "rgb(48, 48, 48)", backgroundColor: "var(--token-d1fa9fab-ac94-43bf-856f-6bc7e2b69a21, rgb(33, 33, 33))" } }, ...addPropertyOverrides5({ "keWPlQat1-hover": { "data-framer-name": void 0 }, "ui83puL52-hover": { "data-framer-name": void 0 }, "YAYragtRT-hover": { "data-framer-name": void 0 }, ui83puL52: { "data-framer-name": "Secondary" }, YAYragtRT: { "data-framer-name": "Footer" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsxs4(motion7.div, { className: "framer-i7l4w1", layoutDependency, layoutId: "About__uk3YTrvAQ", children: [isDisplayed() && /* @__PURE__ */ _jsx10(ComponentViewportProvider4, { children: /* @__PURE__ */ _jsx10(motion7.div, { className: "framer-1m3md1m-container", layoutDependency, layoutId: "About__aSSvOidsx-container", children: /* @__PURE__ */ _jsx10(Icon2, { color: "rgb(255, 255, 255)", height: "100%", iconSearch: "House", iconSelection: "HandWaving", id: "aSSvOidsx", layoutId: "About__aSSvOidsx", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "regular", width: "100%" }) }) }), /* @__PURE__ */ _jsx10(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx10(React11.Fragment, { children: /* @__PURE__ */ _jsx10(motion7.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-weight": "500", "--framer-letter-spacing": "-0.04em", "--framer-line-height": "1.1em", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }, children: "Book a call" }) }), className: "framer-19l9r2j", fonts: ["FS;Satoshi-medium"], layoutDependency, layoutId: "About__rdzFwiZNJ", style: { "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: y00uT3Oer, variants: { ui83puL52: { "--extracted-r6o4lv": "rgb(13, 13, 13)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides5({ ui83puL52: { children: /* @__PURE__ */ _jsx10(React11.Fragment, { children: /* @__PURE__ */ _jsx10(motion7.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-weight": "500", "--framer-letter-spacing": "-0.04em", "--framer-line-height": "1.1em", "--framer-text-color": "var(--extracted-r6o4lv, rgb(13, 13, 13))" }, children: "Book a call" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) }) });
});
var css12 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-GgYnE.framer-xi748k, .framer-GgYnE .framer-xi748k { display: block; }", ".framer-GgYnE.framer-i8bq37 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 44px; justify-content: center; overflow: hidden; padding: 0px 14px 0px 14px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-GgYnE .framer-i7l4w1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-GgYnE .framer-1m3md1m-container { flex: none; height: 18px; position: relative; width: 18px; }", ".framer-GgYnE .framer-19l9r2j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GgYnE.framer-i8bq37, .framer-GgYnE .framer-i7l4w1 { gap: 0px; } .framer-GgYnE.framer-i8bq37 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-GgYnE.framer-i8bq37 > :first-child { margin-top: 0px; } .framer-GgYnE.framer-i8bq37 > :last-child { margin-bottom: 0px; } .framer-GgYnE .framer-i7l4w1 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-GgYnE .framer-i7l4w1 > :first-child { margin-left: 0px; } .framer-GgYnE .framer-i7l4w1 > :last-child { margin-right: 0px; } }", ".framer-GgYnE.framer-v-ggn11p.framer-i8bq37 { overflow: visible; }", '.framer-GgYnE[data-border="true"]::after, .framer-GgYnE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerqBQAn0sBt = withCSS6(Component7, css12, "framer-GgYnE");
var qBQAn0sBt_default = FramerqBQAn0sBt;
FramerqBQAn0sBt.displayName = "Buttons / Button | Medium";
FramerqBQAn0sBt.defaultProps = { height: 44, width: 126 };
addPropertyControls9(FramerqBQAn0sBt, { variant: { options: ["keWPlQat1", "ui83puL52", "YAYragtRT"], optionTitles: ["Primary", "Secondary", "Footer"], title: "Variant", type: ControlType13.Enum }, KGPkj0i0W: { title: "Link", type: ControlType13.Link }, y00uT3Oer: { defaultValue: "Book a call", displayTextArea: false, title: "Title", type: ControlType13.String } });
addFonts6(FramerqBQAn0sBt, [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }] }, ...PhosphorFonts2], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/gTsb9yEzMZrXW3G5Yy7u/bvhrQS38A0j7ZchZ4LRW/LEd2CO4BB.js
var TagsTagFonts = getFonts5(Lfmuf2RGz_default);
var ButtonsButtonMediumFonts = getFonts5(qBQAn0sBt_default);
var VideoVideoFonts = getFonts5(cvpSEdd5Q_default);
var SmartComponentScopedContainerWithFX = withFX(SmartComponentScopedContainer);
var CardsCardValuePropositionFonts = getFonts5(OKIXYth6p_default);
var cycleOrder7 = ["Shxo0G97K", "dcNvZE8NK", "taV8PwrMs", "KAoS3ZYpf"];
var serializationHash7 = "framer-NhIdA";
var variantClassNames7 = { dcNvZE8NK: "framer-v-10rqlav", KAoS3ZYpf: "framer-v-1cre2kw", Shxo0G97K: "framer-v-d1ekxe", taV8PwrMs: "framer-v-k92ox5" };
function addPropertyOverrides6(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition17 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var Transition7 = ({ value, children }) => {
  const config = React12.useContext(MotionConfigContext7);
  const transition = value ?? config.transition;
  const contextValue = React12.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx11(MotionConfigContext7.Provider, { value: contextValue, children });
};
var humanReadableVariantMap6 = { "Desktop | L": "Shxo0G97K", "Desktop | M": "dcNvZE8NK", Phone: "KAoS3ZYpf", Tablet: "taV8PwrMs" };
var Variants7 = motion8.create(React12.Fragment);
var getProps8 = ({ height, id, scrollSection, width, ...props }) => {
  return { ...props, pHjd7Kcj9: scrollSection ?? props.pHjd7Kcj9, variant: humanReadableVariantMap6[props.variant] ?? props.variant ?? "Shxo0G97K" };
};
var createLayoutDependency7 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component8 = /* @__PURE__ */ React12.forwardRef(function(props, ref) {
  const fallbackRef = useRef12(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React12.useId();
  const { activeLocale, setLocale } = useLocaleInfo7();
  const componentViewport = useComponentViewport7();
  const { style, className: className7, layoutId, variant, pHjd7Kcj9, ...restProps } = getProps8(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState7({ cycleOrder: cycleOrder7, defaultVariant: "Shxo0G97K", ref: refBinding, variant, variantClassNames: variantClassNames7 });
  const layoutDependency = createLayoutDependency7(props, variants);
  const sharedStyleClassNames = [className, className2];
  const scopingClassNames = cx7(serializationHash7, ...sharedStyleClassNames);
  const router = useRouter();
  return /* @__PURE__ */ _jsx11(LayoutGroup7, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx11(Variants7, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx11(Transition7, { value: transition17, children: /* @__PURE__ */ _jsxs5(motion8.section, { ...restProps, ...gestureHandlers, className: cx7(scopingClassNames, "framer-d1ekxe", className7, classNames), "data-framer-name": "Desktop | L", layoutDependency, layoutId: "About__Shxo0G97K", ref: refBinding, style: { backgroundColor: "rgb(246, 246, 247)", ...style }, ...addPropertyOverrides6({ dcNvZE8NK: { "data-framer-name": "Desktop | M" }, KAoS3ZYpf: { "data-framer-name": "Phone" }, taV8PwrMs: { "data-framer-name": "Tablet" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx11(motion8.div, { className: "framer-12h9zrq", "data-framer-name": "Header", layoutDependency, layoutId: "About__sDLfwprmu", style: { backgroundColor: "var(--token-9ac9dc08-9c5a-459d-a360-b1ebb1520f81, rgb(252, 249, 245))" }, children: /* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-16y4lmd", "data-framer-name": "Content", layoutDependency, layoutId: "About__OIyh_FrvF", children: [/* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-1ubjfgy", "data-framer-name": "Container", layoutDependency, layoutId: "About__X_5XQ9gA0", children: [/* @__PURE__ */ _jsx11(ComponentViewportProvider5, { height: 32, y: (componentViewport?.y || 0) + 0 + 0 + 120 + 0 + 0 + 0 + 0 + 0, ...addPropertyOverrides6({ KAoS3ZYpf: { y: (componentViewport?.y || 0) + 0 + 0 + 80 + 0 + 0 + 0 + 0 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainer, { className: "framer-z31bjb-container", layoutDependency, layoutId: "About__WohWF5dmd-container", nodeId: "WohWF5dmd", rendersWithMotion: true, scopeId: "LEd2CO4BB", children: /* @__PURE__ */ _jsx11(Lfmuf2RGz_default, { BKFbCYkGn: "Why choose us", height: "100%", id: "WohWF5dmd", layoutId: "About__WohWF5dmd", style: { height: "100%" }, variant: matchVariant("kpzeq4sfz"), width: "100%" }) }) }), /* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-1me70u2", "data-framer-name": "Text", layoutDependency, layoutId: "About__l4uBhQcEO", children: [/* @__PURE__ */ _jsx11(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx11(React12.Fragment, { children: /* @__PURE__ */ _jsx11(motion8.h3, { className: "framer-styles-preset-1finc0l", "data-styles-preset": "bnGlEExIn", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-a0htzi, var(--token-81ac12ce-6806-4ef8-aeb9-63089e9ec4fc, rgb(0, 0, 0)))" }, children: "Design that delivers" }) }), className: "framer-1rc3dx1", "data-framer-name": "Design that delivers", fonts: ["Inter"], layoutDependency, layoutId: "About__HsSfxz4HD", style: { "--extracted-a0htzi": "var(--token-81ac12ce-6806-4ef8-aeb9-63089e9ec4fc, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx11(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx11(React12.Fragment, { children: /* @__PURE__ */ _jsx11(motion8.p, { className: "framer-styles-preset-wro55n", "data-styles-preset": "R4ZMKeSGK", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55)))" }, children: "Experience the magic that happens when creativity meets strategy\u2014these are the perks of working with us." }) }), className: "framer-1nb885r", "data-framer-name": "Experience the magic that happens when creativity meets strategy\u2014these are the perks of working with us.", fonts: ["Inter"], layoutDependency, layoutId: "About__e4Qo5JqTM", style: { "--extracted-r6o4lv": "var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55))", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true })] })] }), /* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-1x2v9bo", "data-framer-name": "Buttons", layoutDependency, layoutId: "About__Qt_pM6u0r", children: [/* @__PURE__ */ _jsx11(ResolveLinks, { links: [{ href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }, { href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }, { href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }, { href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx11(ComponentViewportProvider5, { height: 44, y: (componentViewport?.y || 0) + 0 + 0 + 120 + 0 + 0 + 292.1 + 0, ...addPropertyOverrides6({ KAoS3ZYpf: { y: (componentViewport?.y || 0) + 0 + 0 + 80 + 0 + 0 + 292.1 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainer, { className: "framer-1lco7pm-container", layoutDependency, layoutId: "About__jnCS9_pdv-container", nodeId: "jnCS9_pdv", rendersWithMotion: true, scopeId: "LEd2CO4BB", children: /* @__PURE__ */ _jsx11(qBQAn0sBt_default, { height: "100%", id: "jnCS9_pdv", KGPkj0i0W: resolvedLinks[0], layoutId: "About__jnCS9_pdv", style: { height: "100%" }, variant: matchVariant("keWPlQat1"), width: "100%", y00uT3Oer: "Book a call", ...addPropertyOverrides6({ dcNvZE8NK: { KGPkj0i0W: resolvedLinks[1] }, KAoS3ZYpf: { KGPkj0i0W: resolvedLinks[3] }, taV8PwrMs: { KGPkj0i0W: resolvedLinks[2] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx11(ResolveLinks, { links: [{ href: { hash: ":m379b4XUk", webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { hash: ":m379b4XUk", webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { hash: ":m379b4XUk", webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { hash: ":m379b4XUk", webPageId: "augiA20Il" }, implicitPathVariables: void 0 }], children: (resolvedLinks1) => /* @__PURE__ */ _jsx11(ComponentViewportProvider5, { height: 44, y: (componentViewport?.y || 0) + 0 + 0 + 120 + 0 + 0 + 292.1 + 0, ...addPropertyOverrides6({ KAoS3ZYpf: { y: (componentViewport?.y || 0) + 0 + 0 + 80 + 0 + 0 + 292.1 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainer, { className: "framer-1uy0kps-container", layoutDependency, layoutId: "About__qB1vidADr-container", nodeId: "qB1vidADr", rendersWithMotion: true, scopeId: "LEd2CO4BB", children: /* @__PURE__ */ _jsx11(qBQAn0sBt_default, { height: "100%", id: "qB1vidADr", KGPkj0i0W: resolvedLinks1[0], layoutId: "About__qB1vidADr", style: { height: "100%" }, variant: matchVariant("ui83puL52"), width: "100%", y00uT3Oer: "How does it work?", ...addPropertyOverrides6({ dcNvZE8NK: { KGPkj0i0W: resolvedLinks1[1] }, KAoS3ZYpf: { KGPkj0i0W: resolvedLinks1[3] }, taV8PwrMs: { KGPkj0i0W: resolvedLinks1[2] } }, baseVariant, gestureVariant) }) }) }) })] })] }) }), /* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-jjv16t", "data-framer-name": "Panel", layoutDependency, layoutId: "About__JT1_w0tDq", style: { backgroundColor: "var(--token-9ac9dc08-9c5a-459d-a360-b1ebb1520f81, rgb(252, 249, 245))" }, children: [/* @__PURE__ */ _jsx11(ComponentViewportProvider5, { height: 653, width: `min(${componentViewport?.width || "100vw"} - 200px, 1366px)`, y: (componentViewport?.y || 0) + 0 + 468.1 + 80 + 0, ...addPropertyOverrides6({ dcNvZE8NK: { width: `min(${componentViewport?.width || "100vw"} - 120px, 1366px)` }, KAoS3ZYpf: { width: `min(${componentViewport?.width || "100vw"} - 40px, 1366px)`, y: (componentViewport?.y || 0) + 0 + 428.1 + 80 + 0 }, taV8PwrMs: { width: `min(${componentViewport?.width || "100vw"} - 80px, 1366px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainerWithFX, { __framer__spring: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], mass: 1, stagger: 0, stiffness: 500, type: "spring" }, __framer__styleTransformEffectEnabled: true, __framer__transformTargets: [{ target: { opacity: 0.8, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.15, skewX: 0, skewY: 0, x: 0, y: 300 } }, { ref: pHjd7Kcj9, target: { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 } }], __framer__transformTrigger: "onScrollTarget", __framer__transformViewportThreshold: 0, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-98l3fv-container", layoutDependency, layoutId: "About__qMvRM6PV7-container", nodeId: "qMvRM6PV7", rendersWithMotion: true, scopeId: "LEd2CO4BB", children: /* @__PURE__ */ _jsx11(cvpSEdd5Q_default, { height: "100%", id: "qMvRM6PV7", layoutId: "About__qMvRM6PV7", style: { maxWidth: "100%", width: "100%" }, variant: matchVariant("rJIOrpxcD"), width: "100%", ...addPropertyOverrides6({ KAoS3ZYpf: { variant: matchVariant("saITzoE6v") }, taV8PwrMs: { variant: matchVariant("saITzoE6v") } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-fz8n4c", "data-framer-name": "Features", layoutDependency, layoutId: "About__HOlT9XU6G", children: [/* @__PURE__ */ _jsx11(ComponentViewportProvider5, { height: 189, width: `max((min(${componentViewport?.width || "100vw"} - 200px, 1366px) - 64px) / 3, 1px)`, y: (componentViewport?.y || 0) + 0 + 468.1 + 80 + 717 + 0, ...addPropertyOverrides6({ dcNvZE8NK: { width: `max((min(${componentViewport?.width || "100vw"} - 120px, 1366px) - 48px) / 3, 1px)` }, KAoS3ZYpf: { width: `min(${componentViewport?.width || "100vw"} - 40px, 1366px)`, y: (componentViewport?.y || 0) + 0 + 428.1 + 80 + 717 + 0 + 0 }, taV8PwrMs: { width: `min(${componentViewport?.width || "100vw"} - 80px, 1366px)`, y: (componentViewport?.y || 0) + 0 + 468.1 + 80 + 717 + 0 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainer, { className: "framer-wvx94f-container", layoutDependency, layoutId: "About__eSoX65beT-container", nodeId: "eSoX65beT", rendersWithMotion: true, scopeId: "LEd2CO4BB", children: /* @__PURE__ */ _jsx11(OKIXYth6p_default, { height: "100%", id: "eSoX65beT", JJ0XAHZhM: "tBgwVYqU1", layoutId: "About__eSoX65beT", style: { width: "100%" }, urKIwY2Vm: "We don\u2019t do cookie-cutter. Every design is tailored to reflect the heartbeat of your brand.", width: "100%", Xo9B8jQ_j: "Crafted just for You" }) }) }), /* @__PURE__ */ _jsx11(ComponentViewportProvider5, { height: 189, width: `max((min(${componentViewport?.width || "100vw"} - 200px, 1366px) - 64px) / 3, 1px)`, y: (componentViewport?.y || 0) + 0 + 468.1 + 80 + 717 + 0, ...addPropertyOverrides6({ dcNvZE8NK: { width: `max((min(${componentViewport?.width || "100vw"} - 120px, 1366px) - 48px) / 3, 1px)` }, KAoS3ZYpf: { width: `min(${componentViewport?.width || "100vw"} - 40px, 1366px)`, y: (componentViewport?.y || 0) + 0 + 428.1 + 80 + 717 + 0 + 253 }, taV8PwrMs: { width: `min(${componentViewport?.width || "100vw"} - 80px, 1366px)`, y: (componentViewport?.y || 0) + 0 + 468.1 + 80 + 717 + 0 + 245 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainer, { className: "framer-xa2dje-container", layoutDependency, layoutId: "About__qCVzmxZTr-container", nodeId: "qCVzmxZTr", rendersWithMotion: true, scopeId: "LEd2CO4BB", children: /* @__PURE__ */ _jsx11(OKIXYth6p_default, { height: "100%", id: "qCVzmxZTr", JJ0XAHZhM: "moYRO6mru", layoutId: "About__qCVzmxZTr", style: { width: "100%" }, urKIwY2Vm: "We know how to work fast. You can expect to reveive updates from every two days.", width: "100%", Xo9B8jQ_j: "Fast turnaround" }) }) }), /* @__PURE__ */ _jsx11(ComponentViewportProvider5, { height: 189, width: `max((min(${componentViewport?.width || "100vw"} - 200px, 1366px) - 64px) / 3, 1px)`, y: (componentViewport?.y || 0) + 0 + 468.1 + 80 + 717 + 0, ...addPropertyOverrides6({ dcNvZE8NK: { width: `max((min(${componentViewport?.width || "100vw"} - 120px, 1366px) - 48px) / 3, 1px)` }, KAoS3ZYpf: { width: `min(${componentViewport?.width || "100vw"} - 40px, 1366px)`, y: (componentViewport?.y || 0) + 0 + 428.1 + 80 + 717 + 0 + 506 }, taV8PwrMs: { width: `min(${componentViewport?.width || "100vw"} - 80px, 1366px)`, y: (componentViewport?.y || 0) + 0 + 468.1 + 80 + 717 + 0 + 490 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainer, { className: "framer-1re8rdo-container", layoutDependency, layoutId: "About__ET_OSDgDx-container", nodeId: "ET_OSDgDx", rendersWithMotion: true, scopeId: "LEd2CO4BB", children: /* @__PURE__ */ _jsx11(OKIXYth6p_default, { height: "100%", id: "ET_OSDgDx", JJ0XAHZhM: "JzgQg3BJv", layoutId: "About__ET_OSDgDx", style: { width: "100%" }, urKIwY2Vm: "We create designs that don\u2019t just look good but drive real, measurable results.", width: "100%", Xo9B8jQ_j: "Results > pretty pictures" }) }) })] })] }), /* @__PURE__ */ _jsx11(Image1, { background: { alt: "", backgroundSize: 0.56, fit: "tile", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0), pixelHeight: 96, pixelWidth: 96, positionX: "left", positionY: "top", sizes: componentViewport?.width || "100vw", src: "https://framerusercontent.com/images/c0EZxtMucSR6UOSZk2TBnWsqr4.svg?width=96&height=96" }, className: "framer-140zvq0", "data-framer-name": "BG", layoutDependency, layoutId: "About__LU_p_O5fy", style: { mask: "radial-gradient(130% 63% at -55.2% 52.2%, rgba(0,0,0,1) 50.11437218468468%, rgba(0,0,0,0) 83.0394847972973%) add", opacity: 0.2, WebkitMask: "radial-gradient(130% 63% at -55.2% 52.2%, rgba(0,0,0,1) 50.11437218468468%, rgba(0,0,0,0) 83.0394847972973%) add" }, ...addPropertyOverrides6({ KAoS3ZYpf: { background: { alt: "", backgroundSize: 0.58, fit: "tile", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0), pixelHeight: 96, pixelWidth: 96, positionX: "left", positionY: "top", sizes: componentViewport?.width || "100vw", src: "https://framerusercontent.com/images/c0EZxtMucSR6UOSZk2TBnWsqr4.svg?width=96&height=96" } } }, baseVariant, gestureVariant) })] }) }) }) });
});
var css13 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-NhIdA.framer-1ogrfb8, .framer-NhIdA .framer-1ogrfb8 { display: block; }", ".framer-NhIdA.framer-d1ekxe { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-NhIdA .framer-12h9zrq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 120px 100px 12px 100px; position: relative; width: 100%; }", ".framer-NhIdA .framer-16y4lmd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; max-width: 1366px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }", ".framer-NhIdA .framer-1ubjfgy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-NhIdA .framer-z31bjb-container { flex: none; height: 32px; position: relative; width: auto; }", ".framer-NhIdA .framer-1me70u2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-NhIdA .framer-1rc3dx1 { flex: none; height: auto; max-width: 440px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-NhIdA .framer-1nb885r { flex: none; height: auto; max-width: 480px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-NhIdA .framer-1x2v9bo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-NhIdA .framer-1lco7pm-container, .framer-NhIdA .framer-1uy0kps-container { flex: none; height: 44px; position: relative; width: auto; }", ".framer-NhIdA .framer-jjv16t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 100px 120px 100px; position: relative; width: 100%; }", ".framer-NhIdA .framer-98l3fv-container { flex: none; height: auto; max-width: 1366px; position: relative; width: 100%; z-index: 2; }", ".framer-NhIdA .framer-fz8n4c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 1366px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }", ".framer-NhIdA .framer-wvx94f-container, .framer-NhIdA .framer-xa2dje-container, .framer-NhIdA .framer-1re8rdo-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-NhIdA .framer-140zvq0 { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }", ".framer-NhIdA.framer-v-10rqlav.framer-d1ekxe { width: 100%; }", ".framer-NhIdA.framer-v-10rqlav .framer-12h9zrq { padding: 120px 60px 12px 60px; }", ".framer-NhIdA.framer-v-10rqlav .framer-jjv16t { padding: 80px 60px 120px 60px; }", ".framer-NhIdA.framer-v-10rqlav .framer-fz8n4c { gap: 24px; }", ".framer-NhIdA.framer-v-k92ox5.framer-d1ekxe { width: 100%; }", ".framer-NhIdA.framer-v-k92ox5 .framer-12h9zrq { padding: 120px 40px 12px 40px; }", ".framer-NhIdA.framer-v-k92ox5 .framer-jjv16t { padding: 80px 40px 120px 40px; }", ".framer-NhIdA.framer-v-k92ox5 .framer-fz8n4c { flex-direction: column; gap: 56px; }", ".framer-NhIdA.framer-v-k92ox5 .framer-wvx94f-container, .framer-NhIdA.framer-v-k92ox5 .framer-xa2dje-container, .framer-NhIdA.framer-v-k92ox5 .framer-1re8rdo-container, .framer-NhIdA.framer-v-1cre2kw .framer-wvx94f-container, .framer-NhIdA.framer-v-1cre2kw .framer-xa2dje-container, .framer-NhIdA.framer-v-1cre2kw .framer-1re8rdo-container { flex: none; width: 100%; }", ".framer-NhIdA.framer-v-1cre2kw.framer-d1ekxe { width: 100%; }", ".framer-NhIdA.framer-v-1cre2kw .framer-12h9zrq { padding: 80px 20px 12px 20px; }", ".framer-NhIdA.framer-v-1cre2kw .framer-jjv16t { padding: 80px 20px 120px 20px; }", ".framer-NhIdA.framer-v-1cre2kw .framer-fz8n4c { flex-direction: column; gap: 64px; }", ...css, ...css2];
var FramerLEd2CO4BB = withCSS7(Component8, css13, "framer-NhIdA");
var LEd2CO4BB_default = FramerLEd2CO4BB;
FramerLEd2CO4BB.displayName = "About";
FramerLEd2CO4BB.defaultProps = { height: 1416, width: 1366 };
addPropertyControls10(FramerLEd2CO4BB, { variant: { options: ["Shxo0G97K", "dcNvZE8NK", "taV8PwrMs", "KAoS3ZYpf"], optionTitles: ["Desktop | L", "Desktop | M", "Tablet", "Phone"], title: "Variant", type: ControlType14.Enum }, pHjd7Kcj9: { title: "Scroll Section", type: ControlType14.ScrollSectionRef } });
addFonts7(FramerLEd2CO4BB, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...TagsTagFonts, ...ButtonsButtonMediumFonts, ...VideoVideoFonts, ...CardsCardValuePropositionFonts, ...getFontsFromSharedStyle4(fonts), ...getFontsFromSharedStyle4(fonts2)], { supportsExplicitInterCodegen: true });
FramerLEd2CO4BB.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(Lfmuf2RGz_default, {}, context), forwardLoader(qBQAn0sBt_default, {}, context), forwardLoader(cvpSEdd5Q_default, {}, context), forwardLoader(OKIXYth6p_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerLEd2CO4BB", "slots": [], "annotations": { "framerDisplayContentsDiv": "false", "framerIntrinsicWidth": "1366", "framerComponentViewportWidth": "true", "framerColorSyntax": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"dcNvZE8NK":{"layout":["fixed","auto"]},"taV8PwrMs":{"layout":["fixed","auto"]},"KAoS3ZYpf":{"layout":["fixed","auto"]}}}', "framerContractVersion": "1", "framerIntrinsicHeight": "1416", "framerAutoSizeImages": "true", "framerImmutableVariables": "true", "framerVariables": '{"pHjd7Kcj9":"scrollSection"}' } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  LEd2CO4BB_default as default
};
