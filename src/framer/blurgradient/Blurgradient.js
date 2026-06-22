var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/rofp3mS0LNY15cjhHzia/sCDB021OTsBBYKGo7Efa/BlurGradient.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType } from "../_framer-runtime.js";
function BlurGradient({ blur, borderRadius, direction }) {
  const getGradientDirection = (direction2) => {
    switch (direction2) {
      case "toBottom":
        return "to bottom";
      case "toTop":
        return "to top";
      case "toLeft":
        return "to left";
      case "toRight":
        return "to right";
      default:
        return "to bottom";
    }
  };
  const blurSteps = [{ blur: `${blur / 2 / 2 / 2 / 2 / 2 / 2 / 2}px`, gradient: `rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%` }, { blur: `${blur / 2 / 2 / 2 / 2 / 2 / 2}px`, gradient: `rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%` }, { blur: `${blur / 2 / 2 / 2 / 2 / 2}px`, gradient: `rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%` }, { blur: `${blur / 2 / 2 / 2 / 2}px`, gradient: `rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%` }, { blur: `${blur / 2 / 2 / 2}px`, gradient: `rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%` }, { blur: `${blur / 2 / 2}px`, gradient: `rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%` }, { blur: `${blur / 2}px`, gradient: `rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%` }, { blur: `${blur}px`, gradient: `rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%` }];
  return /* @__PURE__ */ _jsx("div", { style: { position: "relative", width: "100%", height: "100%", borderRadius: `${borderRadius}px` }, children: blurSteps.map((step, index) => /* @__PURE__ */ _jsx("div", { style: { position: "absolute", inset: 0, zIndex: index + 1, backdropFilter: `blur(${step.blur})`, WebkitBackdropFilter: `blur(${step.blur})`, maskImage: `linear-gradient(${getGradientDirection(direction)}, ${step.gradient})`, WebkitMaskImage: `linear-gradient(${getGradientDirection(direction)}, ${step.gradient})`, borderRadius: `${borderRadius}px`, pointerEvents: "none" } }, index)) });
}
BlurGradient.defaultProps = { blur: 10, borderRadius: 0, direction: "toBottom" };
addPropertyControls(BlurGradient, { blur: { title: "Blur", type: ControlType.Number, defaultValue: 10, min: 0, max: 100, step: 1, description: "Large blur values (10<) can impact performance." }, borderRadius: { title: "Radius", type: ControlType.Number, defaultValue: 0, min: 0, max: 100, step: 1, description: "Blur Gradient component's parent frame can't have border radius (it will break the component). If you need corner radius, apply it directly to the Blur Gradient component here." }, direction: { title: "Direction", type: ControlType.SegmentedEnum, options: ["toBottom", "toTop", "toLeft", "toRight"], optionTitles: ["\u2193", "\u2191", "\u2190", "\u2192"], defaultValue: "toBottom", description: "More components at [Framer University](https://framer.university?utm_source=component)." } });
BlurGradient.displayName = "Blur Gradient";
var BlurGradient_default = BlurGradient;
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "BlurGradient", "slots": [], "annotations": { "framerContractVersion": "1", "framerSupportedLayoutHeight": "any", "framerIntrinsicWidth": "240", "framerDisableUnlink": "*", "framerIntrinsicHeight": "240", "framerSupportedLayoutWidth": "any" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  BlurGradient_default as default
};
