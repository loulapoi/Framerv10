var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/ihcbdKhY4xjnE8GTiuc8/6QKG30NZ0KUHrGs5Ma6e/d8Eql1aZH.js
import { jsx as _jsx4, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls4, ComponentViewportProvider, ControlType as ControlType4, cx as cx3, forwardLoader, getFonts, getFontsFromSharedStyle as getFontsFromSharedStyle3, RichText as RichText3, SmartComponentScopedContainer, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS3 } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/B2xAlJLcN0gOnt11mSPw/XVUmpmPn1EPL0dzocT35/Ticker.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, useEffect, useState, useRef, useMemo, createRef, useCallback, cloneElement } from "react";
import { addPropertyControls, ControlType, RenderTarget } from "../_framer-runtime.js";
import { useAnimationFrame, useReducedMotion, LayoutGroup, useInView, useMotionValue, useTransform, motion, wrap, frame } from "framer-motion";
import { resize } from "@motionone/dom";
var MAX_DUPLICATED_ITEMS = 100;
var directionTransformers = { left: (offset) => `translateX(-${offset}px)`, right: (offset) => `translateX(${offset}px)`, top: (offset) => `translateY(-${offset}px)`, bottom: (offset) => `translateY(${offset}px)` };
var supportsAcceleratedAnimations = typeof Animation !== "undefined" && typeof Animation.prototype.updatePlaybackRate === "function";
function Ticker(props) {
  let { slots, gap, padding, paddingPerSide, paddingTop, paddingRight, paddingBottom, paddingLeft, speed, hoverFactor, direction, alignment, sizingOptions, fadeOptions, style } = props;
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha } = fadeOptions;
  const { widthType, heightType } = sizingOptions;
  const paddingValue = paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : `${padding}px`;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const filteredSlots = slots.filter(Boolean);
  const numChildren = Children.count(filteredSlots);
  const hasChildren = numChildren > 0;
  if (direction === true) {
    direction = "left";
  }
  const isHorizontal = direction === "left" || direction === "right";
  const offset = useMotionValue(0);
  const transformer = directionTransformers[direction];
  const transform = useTransform(offset, transformer);
  const parentRef = useRef(null);
  const childrenRef = useMemo(() => {
    return [/* @__PURE__ */ createRef(), /* @__PURE__ */ createRef()];
  }, []);
  const [size, setSize] = useState({ parent: null, children: null });
  let clonedChildren = [];
  let dupedChildren = [];
  let duplicateBy = 0;
  let opacity = 0;
  if (isCanvas) {
    duplicateBy = numChildren ? Math.floor(10 / numChildren) : 0;
    opacity = 1;
  }
  if (!isCanvas && hasChildren && size.parent) {
    duplicateBy = Math.round(size.parent / size.children * 2) + 1;
    duplicateBy = Math.min(duplicateBy, MAX_DUPLICATED_ITEMS);
    opacity = 1;
  }
  const measure = useCallback(() => {
    if (hasChildren && parentRef.current) {
      const parentLength = isHorizontal ? parentRef.current.offsetWidth : parentRef.current.offsetHeight;
      const start = childrenRef[0].current ? isHorizontal ? childrenRef[0].current.offsetLeft : childrenRef[0].current.offsetTop : 0;
      const end = childrenRef[1].current ? isHorizontal ? childrenRef[1].current.offsetLeft + childrenRef[1].current.offsetWidth : childrenRef[1].current.offsetTop + childrenRef[1].current.offsetHeight : 0;
      const childrenLength = end - start + gap;
      setSize({ parent: parentLength, children: childrenLength });
    }
  }, []);
  const childrenStyles = isCanvas ? { contentVisibility: "auto" } : {};
  if (hasChildren) {
    if (!isCanvas) {
      let initialResize = useRef(true);
      useEffect(() => {
        frame.read(measure);
        return resize(parentRef.current, ({ contentSize }) => {
          if (!initialResize.current && (contentSize.width || contentSize.height)) {
            frame.read(measure);
          }
          initialResize.current = false;
        });
      }, []);
    }
    clonedChildren = Children.map(filteredSlots, (child, index) => {
      var _child_props, _child_props1, _child_props2, _child_props3;
      let ref;
      if (index === 0) {
        ref = childrenRef[0];
      }
      if (index === filteredSlots.length - 1) {
        ref = childrenRef[1];
      }
      const size2 = { width: widthType ? (_child_props = child.props) === null || _child_props === void 0 ? void 0 : _child_props.width : "100%", height: heightType ? (_child_props1 = child.props) === null || _child_props1 === void 0 ? void 0 : _child_props1.height : "100%" };
      return /* @__PURE__ */ _jsx(LayoutGroup, { inherit: "id", children: /* @__PURE__ */ _jsx("li", { ref, style: size2, children: /* @__PURE__ */ cloneElement(child, { style: { ...(_child_props2 = child.props) === null || _child_props2 === void 0 ? void 0 : _child_props2.style, ...size2, flexShrink: 0, ...childrenStyles }, layoutId: child.props.layoutId ? child.props.layoutId + "-original-" + index : void 0 }, (_child_props3 = child.props) === null || _child_props3 === void 0 ? void 0 : _child_props3.children) }) });
    });
  }
  if (!isCanvas) {
    for (let i = 0; i < duplicateBy; i++) {
      dupedChildren = [...dupedChildren, ...Children.map(filteredSlots, (child, childIndex) => {
        var _child_props, _child_props1, _child_props2, _child_props3, _child_props4, _child_props5;
        const size2 = { width: widthType ? (_child_props = child.props) === null || _child_props === void 0 ? void 0 : _child_props.width : "100%", height: heightType ? (_child_props1 = child.props) === null || _child_props1 === void 0 ? void 0 : _child_props1.height : "100%", willChange: "transform" };
        return /* @__PURE__ */ _jsx(LayoutGroup, { inherit: "id", children: /* @__PURE__ */ _jsx("li", { style: size2, "aria-hidden": true, children: /* @__PURE__ */ cloneElement(child, { key: i + " " + childIndex, style: { ...(_child_props2 = child.props) === null || _child_props2 === void 0 ? void 0 : _child_props2.style, width: widthType ? (_child_props3 = child.props) === null || _child_props3 === void 0 ? void 0 : _child_props3.width : "100%", height: heightType ? (_child_props4 = child.props) === null || _child_props4 === void 0 ? void 0 : _child_props4.height : "100%", flexShrink: 0, ...childrenStyles }, layoutId: child.props.layoutId ? child.props.layoutId + "-dupe-" + i : void 0 }, (_child_props5 = child.props) === null || _child_props5 === void 0 ? void 0 : _child_props5.children) }, i + "li" + childIndex) }, i + "lg" + childIndex);
      })];
    }
  }
  const animateToValue = size.children + size.children * Math.round(size.parent / size.children);
  const initialTime = useRef(null);
  const prevTime = useRef(null);
  const xOrY = useRef(0);
  const isHover = useRef(false);
  const isReducedMotion = useReducedMotion();
  const listRef = useRef(null);
  const animationRef = useRef(null);
  if (!isCanvas) {
    const isInView = useInView(parentRef);
    if (supportsAcceleratedAnimations) {
      useEffect(() => {
        if (isReducedMotion || !animateToValue || !speed) {
          return;
        }
        animationRef.current = listRef.current.animate({ transform: [transformer(0), transformer(animateToValue)] }, { duration: Math.abs(animateToValue) / speed * 1e3, iterations: Infinity, easing: "linear" });
        return () => animationRef.current.cancel();
      }, [hoverFactor, animateToValue, speed]);
      useEffect(() => {
        if (!animationRef.current)
          return;
        if (isInView && animationRef.current.playState === "paused") {
          animationRef.current.play();
        } else if (!isInView && animationRef.current.playState === "running") {
          animationRef.current.pause();
        }
      }, [isInView]);
    } else {
      useAnimationFrame((t) => {
        if (!animateToValue || isReducedMotion || supportsAcceleratedAnimations) {
          return;
        }
        if (initialTime.current === null) {
          initialTime.current = t;
        }
        t = t - initialTime.current;
        const timeSince = prevTime.current === null ? 0 : t - prevTime.current;
        let delta = timeSince * (speed / 1e3);
        if (isHover.current) {
          delta *= hoverFactor;
        }
        xOrY.current += delta;
        xOrY.current = wrap(0, animateToValue, xOrY.current);
        prevTime.current = t;
        if (!isInView)
          return;
        offset.set(xOrY.current);
      });
    }
  }
  const fadeDirection = isHorizontal ? "to right" : "to bottom";
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart);
  const fadeInsetEnd = 100 - fadeInset;
  const fadeMask = `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;
  if (!hasChildren) {
    return /* @__PURE__ */ _jsxs("section", { style: placeholderStyles, children: [/* @__PURE__ */ _jsx("div", { style: emojiStyles, children: "\u2728" }), /* @__PURE__ */ _jsx("p", { style: titleStyles, children: "Connect to Content" }), /* @__PURE__ */ _jsx("p", { style: subtitleStyles, children: "Add layers or components to infinitely loop on your page." })] });
  }
  return /* @__PURE__ */ _jsx("section", { style: { ...containerStyle, opacity, WebkitMaskImage: fadeContent ? fadeMask : void 0, MozMaskImage: fadeContent ? fadeMask : void 0, maskImage: fadeContent ? fadeMask : void 0, overflow: overflow ? "visible" : "hidden", padding: paddingValue }, ref: parentRef, children: /* @__PURE__ */ _jsxs(motion.ul, { ref: listRef, style: { ...containerStyle, gap, top: direction === "bottom" && isValidNumber(animateToValue) ? -animateToValue : void 0, left: direction === "right" && isValidNumber(animateToValue) ? -animateToValue : void 0, placeItems: alignment, position: "relative", flexDirection: isHorizontal ? "row" : "column", ...style, willChange: isCanvas ? "auto" : "transform", transform: supportsAcceleratedAnimations ? transformer(0) : transform }, onMouseEnter: () => {
    isHover.current = true;
    if (animationRef.current) {
      animationRef.current.playbackRate = hoverFactor;
    }
  }, onMouseLeave: () => {
    isHover.current = false;
    if (animationRef.current) {
      animationRef.current.playbackRate = 1;
    }
  }, children: [clonedChildren, dupedChildren] }) });
}
Ticker.defaultProps = { gap: 10, padding: 10, sizingOptions: { widthType: true, heightType: true }, fadeOptions: { fadeContent: true, overflow: false, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 }, direction: true };
addPropertyControls(Ticker, { slots: { type: ControlType.Array, title: "Children", control: { type: ControlType.ComponentInstance } }, speed: { type: ControlType.Number, title: "Speed", min: 0, max: 1e3, defaultValue: 100, unit: "%", displayStepper: true, step: 5 }, direction: { type: ControlType.Enum, title: "Direction", options: ["left", "right", "top", "bottom"], optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"], optionTitles: ["Left", "Right", "Top", "Bottom"], defaultValue: "left", displaySegmentedControl: true }, alignment: { type: ControlType.Enum, title: "Align", options: ["flex-start", "center", "flex-end"], optionIcons: { direction: { right: ["align-top", "align-middle", "align-bottom"], left: ["align-top", "align-middle", "align-bottom"], top: ["align-left", "align-center", "align-right"], bottom: ["align-left", "align-center", "align-right"] } }, defaultValue: "center", displaySegmentedControl: true }, gap: { type: ControlType.Number, title: "Gap" }, padding: { title: "Padding", type: ControlType.FusedNumber, toggleKey: "paddingPerSide", toggleTitles: ["Padding", "Padding per side"], valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], valueLabels: ["T", "R", "B", "L"], min: 0 }, sizingOptions: { type: ControlType.Object, title: "Sizing", controls: { widthType: { type: ControlType.Boolean, title: "Width", enabledTitle: "Auto", disabledTitle: "Stretch", defaultValue: true }, heightType: { type: ControlType.Boolean, title: "Height", enabledTitle: "Auto", disabledTitle: "Stretch", defaultValue: true } } }, fadeOptions: { type: ControlType.Object, title: "Clipping", controls: { fadeContent: { type: ControlType.Boolean, title: "Fade", defaultValue: true }, overflow: { type: ControlType.Boolean, title: "Overflow", enabledTitle: "Show", disabledTitle: "Hide", defaultValue: false, hidden(props) {
  return props.fadeContent === true;
} }, fadeWidth: { type: ControlType.Number, title: "Width", defaultValue: 25, min: 0, max: 100, unit: "%", hidden(props) {
  return props.fadeContent === false;
} }, fadeInset: { type: ControlType.Number, title: "Inset", defaultValue: 0, min: 0, max: 100, unit: "%", hidden(props) {
  return props.fadeContent === false;
} }, fadeAlpha: { type: ControlType.Number, title: "Opacity", defaultValue: 0, min: 0, max: 1, step: 0.05, hidden(props) {
  return props.fadeContent === false;
} } } }, hoverFactor: { type: ControlType.Number, title: "Hover", min: 0, max: 1, unit: "x", defaultValue: 1, step: 0.1, displayStepper: true, description: "Slows down the speed while you are hovering." } });
var containerStyle = { display: "flex", width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", placeItems: "center", margin: 0, padding: 0, listStyleType: "none", textIndent: "none" };
var placeholderStyles = { display: "flex", width: "100%", height: "100%", placeContent: "center", placeItems: "center", flexDirection: "column", color: "#96F", background: "rgba(136, 85, 255, 0.1)", fontSize: 11, overflow: "hidden", padding: "20px 20px 30px 20px" };
var emojiStyles = { fontSize: 32, marginBottom: 10 };
var titleStyles = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" };
var subtitleStyles = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: "center" };
var clamp = (num, min, max) => Math.min(Math.max(num, min), max);
var isValidNumber = (value) => typeof value === "number" && !isNaN(value);

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

// http-url:https://framerusercontent.com/modules/URzRjUOkqpeaeXhwFLSW/w0jMoegajNWe3T9QA47y/FJJRMVNAs.js
import { jsx as _jsx2, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext } from "framer-motion";
import * as React from "react";
var cycleOrder = ["T4MlRuGyD", "dtT90O3qR", "xTP6iIJ8N"];
var serializationHash = "framer-bFdpM";
var variantClassNames = { dtT90O3qR: "framer-v-1spxc11", T4MlRuGyD: "framer-v-12foz17", xTP6iIJ8N: "framer-v-17n3o88" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion2(React.Fragment);
var humanReadableVariantMap = { Dark: "dtT90O3qR", Image: "xTP6iIJ8N", Light: "T4MlRuGyD" };
var getProps = ({ height, id, image, title, width, ...props }) => {
  var _ref, _ref1, _humanReadableVariantMap_props_variant, _ref2;
  return { ...props, bfC379ncV: (_ref = title !== null && title !== void 0 ? title : props.bfC379ncV) !== null && _ref !== void 0 ? _ref : "Restaurants", dU9yyhNmA: (_ref1 = image !== null && image !== void 0 ? image : props.dU9yyhNmA) !== null && _ref1 !== void 0 ? _ref1 : { src: "https://framerusercontent.com/images/zuEM7Xh9zaRwQ45Lt9zb4TQ7nmA.png?scale-down-to=512", srcSet: "https://framerusercontent.com/images/zuEM7Xh9zaRwQ45Lt9zb4TQ7nmA.png?scale-down-to=512 512w,https://framerusercontent.com/images/zuEM7Xh9zaRwQ45Lt9zb4TQ7nmA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/zuEM7Xh9zaRwQ45Lt9zb4TQ7nmA.png 1600w" }, variant: (_ref2 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref2 !== void 0 ? _ref2 : "T4MlRuGyD" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className4, layoutId, variant, dU9yyhNmA, bfC379ncV, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "T4MlRuGyD", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "xTP6iIJ8N")
      return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "xTP6iIJ8N")
      return true;
    return false;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className2];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs2(motion2.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-12foz17", className4, classNames), "data-border": true, "data-framer-name": "Light", layoutDependency, layoutId: "Niches__T4MlRuGyD", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "rgb(227, 227, 227)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255))", borderBottomLeftRadius: 18, borderBottomRightRadius: 18, borderTopLeftRadius: 18, borderTopRightRadius: 18, ...style }, variants: { dtT90O3qR: { "--border-color": "rgb(89, 89, 89)", backgroundColor: "var(--token-d1fa9fab-ac94-43bf-856f-6bc7e2b69a21, rgb(33, 33, 33))" } }, ...addPropertyOverrides({ dtT90O3qR: { "data-framer-name": "Dark" }, xTP6iIJ8N: { "data-framer-name": "Image" } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-wro55n", "data-styles-preset": "R4ZMKeSGK", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-85129ec3-9333-4c87-b665-8ff57171f1a9, rgb(13, 13, 13)))" }, children: "Restaurants" }) }), className: "framer-l7s499", fonts: ["Inter"], layoutDependency, layoutId: "Niches__dE5NDN6v0", style: { "--extracted-r6o4lv": "var(--token-85129ec3-9333-4c87-b665-8ff57171f1a9, rgb(13, 13, 13))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: bfC379ncV, variants: { dtT90O3qR: { "--extracted-r6o4lv": "var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ dtT90O3qR: { children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-wro55n", "data-styles-preset": "R4ZMKeSGK", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255)))" }, children: "Restaurants" }) }) } }, baseVariant, gestureVariant) }), isDisplayed1() && /* @__PURE__ */ _jsx2(Image, { background: { alt: "", fit: "fit", intrinsicHeight: 596, intrinsicWidth: 800, pixelHeight: 1192, pixelWidth: 1600, ...toResponsiveImage(dU9yyhNmA), ...{ positionX: "center", positionY: "center" } }, className: "framer-1uuh7ei", "data-framer-name": "freebielanding", layoutDependency, layoutId: "Niches__ucjR4eA1W", ...addPropertyOverrides({ xTP6iIJ8N: { background: { alt: "", fit: "fit", intrinsicHeight: 596, intrinsicWidth: 800, loading: getLoadingLazyAtYPosition(((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 8 + ((((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 64) - 16 - 48) / 2 + 0 + 0)), pixelHeight: 1192, pixelWidth: 1600, sizes: "64.4295px", ...toResponsiveImage(dU9yyhNmA), ...{ positionX: "center", positionY: "center" } } } }, baseVariant, gestureVariant) })] }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-bFdpM.framer-19bayrm, .framer-bFdpM .framer-19bayrm { display: block; }", ".framer-bFdpM.framer-12foz17 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 18px 16px 18px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-bFdpM .framer-l7s499 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-bFdpM .framer-1uuh7ei { aspect-ratio: 1.342281879194631 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 48px); overflow: visible; position: relative; width: 64px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-bFdpM.framer-12foz17 { gap: 0px; } .framer-bFdpM.framer-12foz17 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-bFdpM.framer-12foz17 > :first-child { margin-top: 0px; } .framer-bFdpM.framer-12foz17 > :last-child { margin-bottom: 0px; } }", ".framer-bFdpM.framer-v-17n3o88.framer-12foz17 { padding: 8px 16px 8px 16px; }", ...css2, '.framer-bFdpM[data-border="true"]::after, .framer-bFdpM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerFJJRMVNAs = withCSS(Component, css3, "framer-bFdpM");
var FJJRMVNAs_default = FramerFJJRMVNAs;
FramerFJJRMVNAs.displayName = "Other / Chip | Industry";
FramerFJJRMVNAs.defaultProps = { height: 64, width: 122.5 };
addPropertyControls2(FramerFJJRMVNAs, { variant: { options: ["T4MlRuGyD", "dtT90O3qR", "xTP6iIJ8N"], optionTitles: ["Light", "Dark", "Image"], title: "Variant", type: ControlType2.Enum }, dU9yyhNmA: { __defaultAssetReference: "data:framer/asset-reference,zuEM7Xh9zaRwQ45Lt9zb4TQ7nmA.png?originalFilename=freebielanding.png&preferredSize=auto", title: "Image", type: ControlType2.ResponsiveImage }, bfC379ncV: { defaultValue: "Restaurants", displayTextArea: false, title: "Title", type: ControlType2.String } });
addFonts(FramerFJJRMVNAs, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/gqo7f5SvKXu35ylfPLyO/S2UvVveK6ks7txzhby5Q/Lfmuf2RGz.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx2, getFontsFromSharedStyle as getFontsFromSharedStyle2, RichText as RichText2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/aKryQeD1YAHAegs9MtvK/aW291tQZsP78x37AccGH/dmbqlUU7V.js
import { fontStore as fontStore3 } from "../_framer-runtime.js";
fontStore3.loadFonts(["FS;Satoshi-medium", "FS;Satoshi-bold", "FS;Satoshi-bold italic", "FS;Satoshi-medium italic"]);
var fonts3 = [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }, { family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2", weight: "500" }] }];
var css4 = ['.framer-UxiLR .framer-styles-preset-1jh4872:not(.rich-text-wrapper), .framer-UxiLR .framer-styles-preset-1jh4872.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className3 = "framer-UxiLR";

// http-url:https://framerusercontent.com/modules/gqo7f5SvKXu35ylfPLyO/S2UvVveK6ks7txzhby5Q/Lfmuf2RGz.js
var cycleOrder2 = ["kpzeq4sfz", "ktjuUi2sm"];
var serializationHash2 = "framer-BETZb";
var variantClassNames2 = { kpzeq4sfz: "framer-v-a04z8d", ktjuUi2sm: "framer-v-pcvxu6" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion3(React2.Fragment);
var humanReadableVariantMap2 = { Dark: "ktjuUi2sm", Light: "kpzeq4sfz" };
var getProps2 = ({ height, id, text, width, ...props }) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1;
  return { ...props, BKFbCYkGn: (_ref = text !== null && text !== void 0 ? text : props.BKFbCYkGn) !== null && _ref !== void 0 ? _ref : "Benefits", variant: (_ref1 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref1 !== void 0 ? _ref1 : "kpzeq4sfz" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo2();
  const { style, className: className4, layoutId, variant, BKFbCYkGn, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "kpzeq4sfz", variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const ref1 = React2.useRef(null);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [className3];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx3(LayoutGroup3, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx3(motion3.div, { ...restProps, ...gestureHandlers, className: cx2(serializationHash2, ...sharedStyleClassNames, "framer-a04z8d", className4, classNames), "data-border": true, "data-framer-name": "Light", layoutDependency, layoutId: "Niches__kpzeq4sfz", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "rgba(33, 33, 33, 0.12)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(224, 224, 224, 0)", borderBottomLeftRadius: 56, borderBottomRightRadius: 56, borderTopLeftRadius: 56, borderTopRightRadius: 56, ...style }, variants: { ktjuUi2sm: { backgroundColor: "rgb(36, 36, 36)" } }, ...addPropertyOverrides2({ ktjuUi2sm: { "data-framer-name": "Dark" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx3(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx3(React2.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-1jh4872", "data-styles-preset": "dmbqlUU7V", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-85129ec3-9333-4c87-b665-8ff57171f1a9, rgb(13, 13, 13)))" }, children: "Benefits" }) }), className: "framer-1flna3j", fonts: ["Inter"], layoutDependency, layoutId: "Niches__NkkxX8Kcu", style: { "--extracted-r6o4lv": "var(--token-85129ec3-9333-4c87-b665-8ff57171f1a9, rgb(13, 13, 13))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: BKFbCYkGn, variants: { ktjuUi2sm: { "--extracted-r6o4lv": "var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides2({ ktjuUi2sm: { children: /* @__PURE__ */ _jsx3(React2.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-1jh4872", "data-styles-preset": "dmbqlUU7V", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255)))" }, children: "Benefits" }) }) } }, baseVariant, gestureVariant) }) }) }) }) });
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BETZb.framer-8sm0hf, .framer-BETZb .framer-8sm0hf { display: block; }", ".framer-BETZb.framer-a04z8d { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px 12px 0px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-BETZb .framer-1flna3j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-BETZb.framer-a04z8d { gap: 0px; } .framer-BETZb.framer-a04z8d > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-BETZb.framer-a04z8d > :first-child { margin-top: 0px; } .framer-BETZb.framer-a04z8d > :last-child { margin-bottom: 0px; } }", ".framer-BETZb.framer-v-pcvxu6 .framer-1flna3j { order: 0; }", ...css4, '.framer-BETZb[data-border="true"]::after, .framer-BETZb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerLfmuf2RGz = withCSS2(Component2, css5, "framer-BETZb");
var Lfmuf2RGz_default = FramerLfmuf2RGz;
FramerLfmuf2RGz.displayName = "Tags / Tag";
FramerLfmuf2RGz.defaultProps = { height: 32, width: 69 };
addPropertyControls3(FramerLfmuf2RGz, { variant: { options: ["kpzeq4sfz", "ktjuUi2sm"], optionTitles: ["Light", "Dark"], title: "Variant", type: ControlType3.Enum }, BKFbCYkGn: { defaultValue: "Benefits", displayTextArea: false, title: "Text", type: ControlType3.String } });
addFonts2(FramerLfmuf2RGz, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle2(fonts3)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/ihcbdKhY4xjnE8GTiuc8/6QKG30NZ0KUHrGs5Ma6e/d8Eql1aZH.js
var TagsTagFonts = getFonts(Lfmuf2RGz_default);
var OtherChipIndustryFonts = getFonts(FJJRMVNAs_default);
var TickerFonts = getFonts(Ticker);
var cycleOrder3 = ["z36hbiJQu", "imDb6As_Z", "MlYOXo4vM", "pvsSCmNKY"];
var serializationHash3 = "framer-gQnza";
var variantClassNames3 = { imDb6As_Z: "framer-v-yymi39", MlYOXo4vM: "framer-v-cu8nxm", pvsSCmNKY: "framer-v-h8p5qz", z36hbiJQu: "framer-v-1266rq7" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
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
var Transition3 = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext3.Provider, { value: contextValue, children });
};
var humanReadableVariantMap3 = { "Desktop | L": "z36hbiJQu", "Desktop | M": "imDb6As_Z", Phone: "pvsSCmNKY", Tablet: "MlYOXo4vM" };
var Variants3 = motion4.create(React3.Fragment);
var getProps3 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "z36hbiJQu" };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className4, layoutId, variant, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder: cycleOrder3, defaultVariant: "z36hbiJQu", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [className, className2];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx4(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition3, { value: transition13, children: /* @__PURE__ */ _jsxs3(motion4.section, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-1266rq7", className4, classNames), "data-framer-name": "Desktop | L", layoutDependency, layoutId: "Niches__z36hbiJQu", ref: refBinding, style: { backgroundColor: "var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255))", ...style }, ...addPropertyOverrides3({ imDb6As_Z: { "data-framer-name": "Desktop | M" }, MlYOXo4vM: { "data-framer-name": "Tablet" }, pvsSCmNKY: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx4(motion4.div, { className: "framer-1n6y251", "data-framer-name": "Header", layoutDependency, layoutId: "Niches__IbvlPONRs", style: { backgroundColor: "rgb(255, 255, 255)" }, children: /* @__PURE__ */ _jsxs3(motion4.div, { className: "framer-16dfnxo", "data-framer-name": "Content", layoutDependency, layoutId: "Niches__pncKoLiHO", children: [/* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 32, y: (componentViewport?.y || 0) + 0 + 0 + 16 + 0 + 0 + 0, ...addPropertyOverrides3({ MlYOXo4vM: { y: (componentViewport?.y || 0) + 0 + 0 + 40 + 0 + 0 + 0 }, pvsSCmNKY: { y: (componentViewport?.y || 0) + 0 + 0 + 40 + 0 + 0 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-11trpeb-container", layoutDependency, layoutId: "Niches__UyrGEqXAz-container", nodeId: "UyrGEqXAz", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(Lfmuf2RGz_default, { BKFbCYkGn: "Niches", height: "100%", id: "UyrGEqXAz", layoutId: "Niches__UyrGEqXAz", style: { height: "100%" }, variant: matchVariant("kpzeq4sfz"), width: "100%" }) }) }), /* @__PURE__ */ _jsxs3(motion4.div, { className: "framer-170frq4", "data-framer-name": "Text", layoutDependency, layoutId: "Niches__kAebTx2SW", children: [/* @__PURE__ */ _jsx4(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React3.Fragment, { children: /* @__PURE__ */ _jsxs3(motion4.h3, { className: "framer-styles-preset-1finc0l", "data-styles-preset": "bnGlEExIn", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-a0htzi, var(--token-81ac12ce-6806-4ef8-aeb9-63089e9ec4fc, rgb(0, 0, 0)))" }, children: [/* @__PURE__ */ _jsx4(motion4.span, { style: { "--framer-text-color": "var(--extracted-1k2zljd, var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55)))" }, children: "Each specialty is distinct. " }), "We speak your industry\u2019s language."] }) }), className: "framer-di33o9", "data-framer-name": "Each specialty is distinct. We speak your industry\u2019s language.", fonts: ["Inter"], layoutDependency, layoutId: "Niches__rl2OwmWog", style: { "--extracted-1k2zljd": "var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55))", "--extracted-a0htzi": "var(--token-81ac12ce-6806-4ef8-aeb9-63089e9ec4fc, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, variants: { pvsSCmNKY: { "--extracted-1w3ko1f": "var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides3({ pvsSCmNKY: { children: /* @__PURE__ */ _jsx4(React3.Fragment, { children: /* @__PURE__ */ _jsxs3(motion4.p, { style: { "--font-selector": "R0Y7SW5zdHJ1bWVudCBTZXJpZi1yZWd1bGFy", "--framer-font-family": '"Instrument Serif", "Instrument Serif Placeholder", serif', "--framer-font-size": "36px", "--framer-letter-spacing": "-0.01em", "--framer-line-height": "1.15em" }, children: [/* @__PURE__ */ _jsx4(motion4.span, { style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55)))" }, children: "Each specialty is distinct. " }), "We speak your industry\u2019s language."] }) }), fonts: ["GF;Instrument Serif-regular"] } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx4(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React3.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-wro55n", "data-styles-preset": "R4ZMKeSGK", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55)))" }, children: "No matter your field, our experience spans multiple niches, ensuring we understand your specific needs and challenges." }) }), className: "framer-yd8t03", "data-framer-name": "No matter your field, our experience spans multiple niches, ensuring we understand your specific needs and challenges.", fonts: ["Inter"], layoutDependency, layoutId: "Niches__Eoey2swZY", style: { "--extracted-r6o4lv": "var(--token-1dc49097-68ef-46a0-879c-042e840842fa, rgba(0, 0, 0, 0.55))", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true })] })] }) }), /* @__PURE__ */ _jsxs3(motion4.div, { className: "framer-1xd8end", "data-border": true, "data-framer-name": "Niches | Container", layoutDependency, layoutId: "Niches__erzPzwMju", style: { "--border-bottom-width": "1px", "--border-color": "rgba(33, 33, 33, 0.18)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "dashed", "--border-top-width": "0px", backgroundColor: "rgb(255, 255, 255)" }, children: [/* @__PURE__ */ _jsx4(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-3babf-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Niches__Hp8gMtGwZ-container", nodeId: "Hp8gMtGwZ", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(Ticker, { alignment: "center", direction: "right", fadeOptions: { fadeAlpha: 0, fadeContent: true, fadeInset: 0, fadeWidth: 25, overflow: false }, gap: 16, height: "100%", hoverFactor: 0.1, id: "Hp8gMtGwZ", layoutId: "Niches__Hp8gMtGwZ", padding: 10, paddingBottom: 10, paddingLeft: 10, paddingPerSide: false, paddingRight: 10, paddingTop: 10, sizingOptions: { heightType: true, widthType: true }, slots: [/* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "122.5px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-ey8zmo-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__Yo3ivYPJX-container", nodeId: "Yo3ivYPJX", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Restaurants", height: "100%", id: "Yo3ivYPJX", layoutId: "Niches__Yo3ivYPJX", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "141px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-ciq0nm-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__KxkbM095u-container", nodeId: "KxkbM095u", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Homebuilders", height: "100%", id: "KxkbM095u", layoutId: "Niches__KxkbM095u", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "131.5px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-45ttte-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__bcRRLMmRZ-container", nodeId: "bcRRLMmRZ", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Medical tech", height: "100%", id: "bcRRLMmRZ", layoutId: "Niches__bcRRLMmRZ", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "70.5px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-q82vc5-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__BmV_GByxH-container", nodeId: "BmV_GByxH", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "SaaS", height: "100%", id: "BmV_GByxH", layoutId: "Niches__BmV_GByxH", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "120.5px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-1r1po95-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__NP4qPRWcb-container", nodeId: "NP4qPRWcb", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Automotive", height: "100%", id: "NP4qPRWcb", layoutId: "Niches__NP4qPRWcb", variant: matchVariant("dtT90O3qR"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "96px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-ow6goi-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__ncvOpa2eV-container", nodeId: "ncvOpa2eV", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Restaurants", height: "100%", id: "ncvOpa2eV", layoutId: "Niches__ncvOpa2eV", variant: matchVariant("xTP6iIJ8N"), width: "100%" }) }) })], speed: 30, style: { height: "100%", maxWidth: "100%", width: "100%" }, width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-147zy8e-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Niches__G4Fdqhc7T-container", nodeId: "G4Fdqhc7T", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(Ticker, { alignment: "center", direction: "left", fadeOptions: { fadeAlpha: 0, fadeContent: true, fadeInset: 0, fadeWidth: 25, overflow: false }, gap: 16, height: "100%", hoverFactor: 0.1, id: "G4Fdqhc7T", layoutId: "Niches__G4Fdqhc7T", padding: 10, paddingBottom: 10, paddingLeft: 10, paddingPerSide: false, paddingRight: 10, paddingTop: 10, sizingOptions: { heightType: true, widthType: true }, slots: [/* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "117.5px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-1onnqcc-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__K_NMGAgzx-container", nodeId: "K_NMGAgzx", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Influencers", height: "100%", id: "K_NMGAgzx", layoutId: "Niches__K_NMGAgzx", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "116px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-k8mrgd-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__VyKhzpkeB-container", nodeId: "VyKhzpkeB", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Real estate", height: "100%", id: "VyKhzpkeB", layoutId: "Niches__VyKhzpkeB", variant: matchVariant("dtT90O3qR"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "147.5px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-zk557k-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__azVP4cd87-container", nodeId: "azVP4cd87", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Web3 / Crypto", height: "100%", id: "azVP4cd87", layoutId: "Niches__azVP4cd87", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "119.5px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-15p8pur-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__Sp8gaMuEX-container", nodeId: "Sp8gaMuEX", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Micro SaaS", height: "100%", id: "Sp8gaMuEX", layoutId: "Niches__Sp8gaMuEX", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "117px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-jxmg9v-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__SW9pTlMcV-container", nodeId: "SW9pTlMcV", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Hardwaare", height: "100%", id: "SW9pTlMcV", layoutId: "Niches__SW9pTlMcV", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) })], speed: 90, style: { height: "100%", maxWidth: "100%", width: "100%" }, width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-8viju4-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Niches__m0LZIa69Q-container", nodeId: "m0LZIa69Q", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(Ticker, { alignment: "center", direction: "right", fadeOptions: { fadeAlpha: 0, fadeContent: true, fadeInset: 0, fadeWidth: 25, overflow: false }, gap: 16, height: "100%", hoverFactor: 0.1, id: "m0LZIa69Q", layoutId: "Niches__m0LZIa69Q", padding: 10, paddingBottom: 10, paddingLeft: 10, paddingPerSide: false, paddingRight: 10, paddingTop: 10, sizingOptions: { heightType: true, widthType: true }, slots: [/* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "103.5px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-hplhep-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__lWPtIIU9i-container", nodeId: "lWPtIIU9i", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Agencies", height: "100%", id: "lWPtIIU9i", layoutId: "Niches__lWPtIIU9i", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "117.5px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-c1jdtf-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__C_y14cYOe-container", nodeId: "C_y14cYOe", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Agriculture", height: "100%", id: "C_y14cYOe", layoutId: "Niches__C_y14cYOe", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "96px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-v7cx71-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__eQ43DWPWT-container", nodeId: "eQ43DWPWT", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Courses", height: "100%", id: "eQ43DWPWT", layoutId: "Niches__eQ43DWPWT", variant: matchVariant("dtT90O3qR"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "153px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-j9e5dh-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__dPDDEk8rE-container", nodeId: "dPDDEk8rE", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Developer tools", height: "100%", id: "dPDDEk8rE", layoutId: "Niches__dPDDEk8rE", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "74px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-ga47k2-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__Oas7AWZia-container", nodeId: "Oas7AWZia", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Legal", height: "100%", id: "Oas7AWZia", layoutId: "Niches__Oas7AWZia", variant: matchVariant("T4MlRuGyD"), width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 64, width: "96px", children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-1hl59qy-container", inComponentSlot: true, layoutDependency, layoutId: "Niches__faOAV2h3p-container", nodeId: "faOAV2h3p", rendersWithMotion: true, scopeId: "d8Eql1aZH", children: /* @__PURE__ */ _jsx4(FJJRMVNAs_default, { bfC379ncV: "Restaurants", dU9yyhNmA: addImageAlt({ pixelHeight: 153, pixelWidth: 204, src: "https://framerusercontent.com/images/6lsnsiAWHS4QoyVrh7XvhVcho.png?width=204&height=153" }, ""), height: "100%", id: "faOAV2h3p", layoutId: "Niches__faOAV2h3p", variant: matchVariant("xTP6iIJ8N"), width: "100%" }) }) })], speed: 15, style: { height: "100%", maxWidth: "100%", width: "100%" }, width: "100%" }) }) })] })] }) }) }) });
});
var css6 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-gQnza.framer-vxepuk, .framer-gQnza .framer-vxepuk { display: block; }", ".framer-gQnza.framer-1266rq7 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-gQnza .framer-1n6y251 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 16px 100px 12px 100px; position: relative; width: 100%; }", ".framer-gQnza .framer-16dfnxo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1366px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-gQnza .framer-11trpeb-container { flex: none; height: 32px; position: relative; width: auto; }", ".framer-gQnza .framer-170frq4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-gQnza .framer-di33o9 { flex: none; height: auto; max-width: 560px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-gQnza .framer-yd8t03 { flex: none; height: auto; max-width: 480px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-gQnza .framer-1xd8end { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 100px 120px 100px; position: relative; width: 100%; }", ".framer-gQnza .framer-3babf-container, .framer-gQnza .framer-147zy8e-container, .framer-gQnza .framer-8viju4-container { flex: none; height: 66px; max-width: 1366px; position: relative; width: 100%; }", ".framer-gQnza .framer-ey8zmo-container, .framer-gQnza .framer-ciq0nm-container, .framer-gQnza .framer-45ttte-container, .framer-gQnza .framer-q82vc5-container, .framer-gQnza .framer-1r1po95-container, .framer-gQnza .framer-ow6goi-container, .framer-gQnza .framer-1onnqcc-container, .framer-gQnza .framer-k8mrgd-container, .framer-gQnza .framer-zk557k-container, .framer-gQnza .framer-15p8pur-container, .framer-gQnza .framer-jxmg9v-container, .framer-gQnza .framer-hplhep-container, .framer-gQnza .framer-c1jdtf-container, .framer-gQnza .framer-v7cx71-container, .framer-gQnza .framer-j9e5dh-container, .framer-gQnza .framer-ga47k2-container, .framer-gQnza .framer-1hl59qy-container { height: auto; position: relative; width: auto; }", ".framer-gQnza.framer-v-yymi39.framer-1266rq7 { width: 100%; }", ".framer-gQnza.framer-v-yymi39 .framer-1n6y251 { padding: 16px 60px 12px 60px; }", ".framer-gQnza.framer-v-yymi39 .framer-1xd8end { padding: 80px 60px 120px 60px; }", ".framer-gQnza.framer-v-cu8nxm.framer-1266rq7 { width: 100%; }", ".framer-gQnza.framer-v-cu8nxm .framer-1n6y251 { padding: 40px 40px 12px 40px; }", ".framer-gQnza.framer-v-cu8nxm .framer-1xd8end { padding: 80px 40px 120px 40px; }", ".framer-gQnza.framer-v-h8p5qz.framer-1266rq7 { width: 100%; }", ".framer-gQnza.framer-v-h8p5qz .framer-1n6y251 { padding: 40px 20px 12px 20px; }", ".framer-gQnza.framer-v-h8p5qz .framer-1xd8end { padding: 64px 20px 80px 20px; }", ...css, ...css2, '.framer-gQnza[data-border="true"]::after, .framer-gQnza [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var Framerd8Eql1aZH = withCSS3(Component3, css6, "framer-gQnza");
var d8Eql1aZH_default = Framerd8Eql1aZH;
Framerd8Eql1aZH.displayName = "Niches";
Framerd8Eql1aZH.defaultProps = { height: 700, width: 1366 };
addPropertyControls4(Framerd8Eql1aZH, { variant: { options: ["z36hbiJQu", "imDb6As_Z", "MlYOXo4vM", "pvsSCmNKY"], optionTitles: ["Desktop | L", "Desktop | M", "Tablet", "Phone"], title: "Variant", type: ControlType4.Enum } });
addFonts3(Framerd8Eql1aZH, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { cssFamilyName: "Instrument Serif", source: "google", style: "normal", uiFamilyName: "Instrument Serif", url: "https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zcZj1bIkNo.woff2", weight: "400" }] }, ...TagsTagFonts, ...OtherChipIndustryFonts, ...TickerFonts, ...getFontsFromSharedStyle3(fonts), ...getFontsFromSharedStyle3(fonts2)], { supportsExplicitInterCodegen: true });
Framerd8Eql1aZH.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(Lfmuf2RGz_default, {}, context), forwardLoader(FJJRMVNAs_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "Framerd8Eql1aZH", "slots": [], "annotations": { "framerComponentViewportWidth": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"imDb6As_Z":{"layout":["fixed","auto"]},"MlYOXo4vM":{"layout":["fixed","auto"]},"pvsSCmNKY":{"layout":["fixed","auto"]}}}', "framerAutoSizeImages": "true", "framerIntrinsicWidth": "1366", "framerContractVersion": "1", "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerColorSyntax": "true", "framerIntrinsicHeight": "700" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  d8Eql1aZH_default as default
};
