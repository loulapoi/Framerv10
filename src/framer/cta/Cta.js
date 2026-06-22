var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/GTZwqD16llYEkTG61kAi/QtKba3Qzp9rRjdJZeYd9/KXRN4svBj.js
import { jsx as _jsx4, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls4, ComponentViewportProvider, ControlType as ControlType4, cx as cx2, forwardLoader, getFonts, ResolveLinks, SmartComponentScopedContainer, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useRouter, useVariantState as useVariantState2, withCSS as withCSS2 } from "../_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/v4j5vvlVCdqvgnwA2jah/OSNaVaJmHuq9cwlhp3cx/LightCircles.js
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { addPropertyControls, ControlType } from "../_framer-runtime.js";
import * as THREE from "three";
var vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
var fragmentShader = `
  precision mediump float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform vec3 iMouse;
  uniform float size;
  uniform float lightAmount;
  uniform vec3 lightColor;
  uniform vec2 lightPosition;

  void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

	vec2 uv = 3.0*(1.0*fragCoord.xy - iResolution.xy) / iResolution.y;
    vec2 mouse = 1.5*(2.0*iMouse.xy - iResolution.xy) / iResolution.y;
	vec2 offset = vec2(cos(iTime/2.0)*mouse.x,sin(iTime/2.0)*mouse.y);;
    
    uv /=size;

    uv -=lightPosition;

    vec3 light_color = vec3(0.9, 0.65, 0.5);
	float light = 0.1 / distance(normalize(uv), uv);
	
	if(length(uv) < 1.0){
		light *= lightAmount / distance(normalize(uv-offset), uv-offset);
	}

	fragColor = vec4(light * lightColor, 1.0);
}

  void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
  }
`;
var useShader = (shader, containerRef, speed, size, lightAmount, lightColor, lightPosition) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container)
      return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(__dai_window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    const uniforms = { iResolution: { value: new THREE.Vector2(width, height) }, iTime: { value: 0 }, iMouse: { value: new THREE.Vector3() }, size: { value: size }, lightAmount: { value: lightAmount }, lightColor: { value: new THREE.Color(lightColor) }, lightPosition: { value: new THREE.Vector2(lightPosition.x, lightPosition.y) } };
    const material = new THREE.ShaderMaterial({ uniforms, vertexShader: shader.vertex, fragmentShader: shader.fragment, transparent: true });
    const plane = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(plane, material);
    scene.add(mesh);
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      uniforms.iTime.value += clock.getDelta() * speed;
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      renderer.setSize(newWidth, newHeight);
      uniforms.iResolution.value.set(newWidth, newHeight);
    };
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      uniforms.iMouse.value.set(event.clientX - rect.left, rect.height - (event.clientY - rect.top), 0);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    __dai_window.addEventListener("mousemove", handleMouseMove);
    return () => {
      resizeObserver.disconnect();
      __dai_window.removeEventListener("mousemove", handleMouseMove);
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [shader, speed, size, lightAmount, lightColor, lightPosition]);
};
function LightCircles(props) {
  const containerRef = useRef(null);
  useShader({ vertex: vertexShader, fragment: fragmentShader }, containerRef, props.speed, props.size, props.lightAmount, props.lightColor, props.lightPosition);
  return /* @__PURE__ */ _jsx("div", { ref: containerRef, style: { width: "100%", height: "100%", position: "relative" } });
}
LightCircles.defaultProps = { speed: 1, size: 1, lightAmount: 0.1, lightColor: "#ffffff", position: { x: 0, y: 0 } };
addPropertyControls(LightCircles, { speed: { type: ControlType.Number, title: "Speed", min: 0.1, max: 10, step: 0.1, defaultValue: 1 }, size: { type: ControlType.Number, title: "Size", min: 1, max: 10, step: 0.1, defaultValue: 1 }, lightAmount: { type: ControlType.Number, title: "Amount of Light", min: 0, max: 5, step: 0.1, defaultValue: 0.1 }, lightColor: { type: ControlType.Color, title: "Color of Light", defaultValue: "#ffffff" }, lightPosition: { type: ControlType.Object, title: "Position", description: "Use 0 for x and y for centered shader", controls: { x: { type: ControlType.Number, title: "X", min: -5, max: 5, step: 0.01, defaultValue: 0 }, y: { type: ControlType.Number, title: "Y", min: -5, max: 5, step: 0.01, defaultValue: 0 } } } });

// http-url:https://framerusercontent.com/modules/vZXrAaDxtBiIKMnqtNhO/6OSoM87M5l0KG7Ydln9v/Text_Opacity_Words.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2 } from "../_framer-runtime.js";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef as useRef2 } from "react";
var EachWord = ({ word, starting, ending, progress }) => {
  const ref = useRef2();
  const progressVal = useTransform(progress, [starting, ending], [0.1, 1]);
  return /* @__PURE__ */ _jsxs(motion.span, { style: { opacity: progressVal }, children: [word, " "] });
};
function Text_Opacity_Words(props) {
  const text = props.text;
  const words = text.split(" ");
  const totalWords = words.length;
  const ref = useRef2(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "start 0.15"] });
  return /* @__PURE__ */ _jsx2("p", { ref, style: { ...props.font, color: props.textColor }, children: words.map((word, idx) => {
    const starting = idx / totalWords;
    const ending = (idx + 1) / totalWords;
    return /* @__PURE__ */ _jsx2(EachWord, { word, starting, ending, progress: scrollYProgress });
  }) });
}
addPropertyControls2(Text_Opacity_Words, { text: { title: "Text", type: ControlType2.String, defaultValue: "Hello" }, font: { type: "font", controls: "extended" }, textColor: { type: ControlType2.Color } });

// http-url:https://framerusercontent.com/modules/qnlfTQodBKzQXU7jswKb/ZDweCZoFCQrgdYTEqlx6/PyAGkYlzY.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "../_framer-runtime.js";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "framer-motion";
import * as React from "react";
var enabledGestures = { a6r6SQFYK: { hover: true }, B783PNYSb: { hover: true } };
var cycleOrder = ["B783PNYSb", "a6r6SQFYK"];
var serializationHash = "framer-OOUVT";
var variantClassNames = { a6r6SQFYK: "framer-v-18d844t", B783PNYSb: "framer-v-5etivg" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 650, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion2(React.Fragment);
var humanReadableVariantMap = { Dark: "B783PNYSb", White: "a6r6SQFYK" };
var getProps = ({ height, id, link, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return { ...props, cBIHI_0LW: link !== null && link !== void 0 ? link : props.cBIHI_0LW, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "B783PNYSb" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, cBIHI_0LW, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "B783PNYSb", enabledGestures, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx3(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition, { value: transition1, children: /* @__PURE__ */ _jsx3(Link, { href: cBIHI_0LW, children: /* @__PURE__ */ _jsx3(motion2.a, { ...restProps, ...gestureHandlers, className: `${cx(serializationHash, ...sharedStyleClassNames, "framer-5etivg", className, classNames)} framer-facaus`, "data-border": true, "data-framer-name": "Dark", layoutDependency, layoutId: "CTA__B783PNYSb", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "rgb(18, 18, 18)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-058de71b-3cb7-43f5-ba2c-1b3a84868d59, rgb(18, 18, 18))", borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16, boxShadow: "inset 0px 0.6021873017743928px 1.083937143193907px -0.9166666666666666px rgba(255, 255, 255, 0.35359), inset 0px 2.288533303243457px 4.119359945838223px -1.8333333333333333px rgba(255, 255, 255, 0.34262), inset 0px 10px 18px -2.75px rgba(255, 255, 255, 0.2925), 0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.21597), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.19067), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.075)", ...style }, variants: { "a6r6SQFYK-hover": { "--border-bottom-width": "0px", "--border-left-width": "0px", "--border-right-width": "0px", "--border-top-width": "0px", backgroundColor: "rgb(232, 232, 232)", boxShadow: "0px 0px 0px 6px rgba(255, 255, 255, 0.15)" }, "B783PNYSb-hover": { "--border-color": "rgb(64, 64, 64)", backgroundColor: "rgb(56, 56, 56)", boxShadow: "inset 0px 0.6021873017743928px 1.083937143193907px -0.9166666666666666px rgba(255, 255, 255, 0.35359), inset 0px 2.288533303243457px 4.119359945838223px -1.8333333333333333px rgba(255, 255, 255, 0.34262), inset 0px 10px 18px -2.75px rgba(255, 255, 255, 0.2925), 0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.21597), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.19067), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.075), 0px 0px 0px 6px rgba(0, 0, 0, 0.1)" }, a6r6SQFYK: { "--border-bottom-width": "0px", "--border-left-width": "0px", "--border-right-width": "0px", "--border-top-width": "0px", backgroundColor: "var(--token-d00e58f7-9feb-4bc9-84cb-d4b153dc198d, rgb(255, 255, 255))" } }, ...addPropertyOverrides({ "a6r6SQFYK-hover": { "data-framer-name": void 0 }, "B783PNYSb-hover": { "data-framer-name": void 0 }, a6r6SQFYK: { "data-framer-name": "White" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx3(motion2.div, { className: "framer-1p7ruhx", layoutDependency, layoutId: "CTA__AfsE6t1b_", children: /* @__PURE__ */ _jsx3(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx3(React.Fragment, { children: /* @__PURE__ */ _jsx3(motion2.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-size": "18px", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.04em", "--framer-line-height": "1.1em", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }, children: "Say Hello" }) }), className: "framer-1w4as3r", fonts: ["FS;Satoshi-medium"], layoutDependency, layoutId: "CTA__B6RizpwmH", style: { "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, variants: { a6r6SQFYK: { "--extracted-r6o4lv": "rgb(5, 5, 5)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ a6r6SQFYK: { children: /* @__PURE__ */ _jsx3(React.Fragment, { children: /* @__PURE__ */ _jsx3(motion2.p, { style: { "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=", "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif', "--framer-font-size": "18px", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.04em", "--framer-line-height": "1.1em", "--framer-text-color": "var(--extracted-r6o4lv, rgb(5, 5, 5))" }, children: "Say Hello" }) }) } }, baseVariant, gestureVariant) }) }) }) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-OOUVT.framer-facaus, .framer-OOUVT .framer-facaus { display: block; }", ".framer-OOUVT.framer-5etivg { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-OOUVT .framer-1p7ruhx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: min-content; }", ".framer-OOUVT .framer-1w4as3r { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-OOUVT.framer-5etivg, .framer-OOUVT .framer-1p7ruhx { gap: 0px; } .framer-OOUVT.framer-5etivg > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-OOUVT.framer-5etivg > :first-child { margin-top: 0px; } .framer-OOUVT.framer-5etivg > :last-child { margin-bottom: 0px; } .framer-OOUVT .framer-1p7ruhx > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-OOUVT .framer-1p7ruhx > :first-child { margin-left: 0px; } .framer-OOUVT .framer-1p7ruhx > :last-child { margin-right: 0px; } }", '.framer-OOUVT[data-border="true"]::after, .framer-OOUVT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerPyAGkYlzY = withCSS(Component, css, "framer-OOUVT");
var PyAGkYlzY_default = FramerPyAGkYlzY;
FramerPyAGkYlzY.displayName = "Buttons / Button | Large";
FramerPyAGkYlzY.defaultProps = { height: 48, width: 149 };
addPropertyControls3(FramerPyAGkYlzY, { variant: { options: ["B783PNYSb", "a6r6SQFYK"], optionTitles: ["Dark", "White"], title: "Variant", type: ControlType3.Enum }, cBIHI_0LW: { title: "Link", type: ControlType3.Link } });
addFonts(FramerPyAGkYlzY, [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/GTZwqD16llYEkTG61kAi/QtKba3Qzp9rRjdJZeYd9/KXRN4svBj.js
var Text_Opacity_WordsFonts = getFonts(Text_Opacity_Words);
var ButtonsButtonLargeFonts = getFonts(PyAGkYlzY_default);
var LightCirclesFonts = getFonts(LightCircles);
var cycleOrder2 = ["b2nMDxtvZ", "lHvwk4Tu4", "lpFzcg3Q0", "EdibFbi1X"];
var serializationHash2 = "framer-uTnBK";
var variantClassNames2 = { b2nMDxtvZ: "framer-v-1jsgci", EdibFbi1X: "framer-v-1putd0e", lHvwk4Tu4: "framer-v-ot51fd", lpFzcg3Q0: "framer-v-1t0qgfd" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var transition2 = { damping: 30, delay: 0, mass: 1, stiffness: 463, type: "spring" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.02, skewX: 0, skewY: 0, transition: transition2, y: -2 };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children });
};
var humanReadableVariantMap2 = { "Desktop | L": "b2nMDxtvZ", "Desktop | M": "lHvwk4Tu4", Phone: "EdibFbi1X", Tablet: "lpFzcg3Q0" };
var Variants2 = motion3.create(React2.Fragment);
var getProps2 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "b2nMDxtvZ" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className, layoutId, variant, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "b2nMDxtvZ", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  const router = useRouter();
  return /* @__PURE__ */ _jsx4(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition2, { value: transition12, children: /* @__PURE__ */ _jsxs2(motion3.section, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-1jsgci", className, classNames), "data-framer-name": "Desktop | L", layoutDependency, layoutId: "CTA__b2nMDxtvZ", ref: refBinding, style: { backgroundColor: "var(--token-058de71b-3cb7-43f5-ba2c-1b3a84868d59, rgb(18, 18, 18))", ...style }, ...addPropertyOverrides2({ EdibFbi1X: { "data-framer-name": "Phone" }, lHvwk4Tu4: { "data-framer-name": "Desktop | M" }, lpFzcg3Q0: { "data-framer-name": "Tablet" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx4(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-1vnm1du-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "CTA__ErCPJpnBM-container", nodeId: "ErCPJpnBM", rendersWithMotion: true, scopeId: "KXRN4svBj", children: /* @__PURE__ */ _jsx4(Text_Opacity_Words, { font: { fontFamily: '"Instrument Serif", "Instrument Serif Placeholder", serif', fontSize: "48px", fontStyle: "normal", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: "1.3em", textAlign: "center" }, height: "100%", id: "ErCPJpnBM", layoutId: "CTA__ErCPJpnBM", style: { height: "100%", maxWidth: "100%", width: "100%" }, text: "Why wait? Take the leap. Make your design process stress-free today.", textColor: "rgb(255, 255, 255)", width: "100%", ...addPropertyOverrides2({ EdibFbi1X: { font: { fontFamily: '"Instrument Serif", "Instrument Serif Placeholder", serif', fontSize: "36px", fontStyle: "normal", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: "1.2em", textAlign: "center" }, style: { maxWidth: "100%", width: "100%" } }, lpFzcg3Q0: { style: { maxWidth: "100%", width: "100%" } } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx4(motion3.div, { className: "framer-9ts9a", "data-framer-name": "Buttons", layoutDependency, layoutId: "CTA__jy5edoxzx", children: /* @__PURE__ */ _jsx4(ResolveLinks, { links: [{ href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }, { href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }, { href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }, { href: { webPageId: "saK4AVS7S" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 54, width: "178px", y: (componentViewport?.y || 0) + 120 + (((componentViewport?.height || 672) - 410 - 262) / 2 + 208 + 0) + 0, ...addPropertyOverrides2({ EdibFbi1X: { y: (componentViewport?.y || 0) + 160 + (((componentViewport?.height || 619) - 320 - 298) / 2 + 200 + 0) + 22 }, lpFzcg3Q0: { y: (componentViewport?.y || 0) + 120 + (((componentViewport?.height || 746) - 410 - 254) / 2 + 200 + 0) + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-1vsl247-container", layoutDependency, layoutId: "CTA__tIkq89tY4-container", nodeId: "tIkq89tY4", rendersWithMotion: true, scopeId: "KXRN4svBj", whileHover: animation, children: /* @__PURE__ */ _jsx4(PyAGkYlzY_default, { cBIHI_0LW: resolvedLinks[0], height: "100%", id: "tIkq89tY4", layoutId: "CTA__tIkq89tY4", style: { height: "100%", width: "100%" }, variant: matchVariant("a6r6SQFYK"), width: "100%", ...addPropertyOverrides2({ EdibFbi1X: { cBIHI_0LW: resolvedLinks[3] }, lHvwk4Tu4: { cBIHI_0LW: resolvedLinks[1] }, lpFzcg3Q0: { cBIHI_0LW: resolvedLinks[2] } }, baseVariant, gestureVariant) }) }) }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-qfj6x2-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "CTA__rVmOfqGi0-container", nodeId: "rVmOfqGi0", rendersWithMotion: true, scopeId: "KXRN4svBj", style: { opacity: 0.04 }, children: /* @__PURE__ */ _jsx4(LightCircles, { height: "100%", id: "rVmOfqGi0", layoutId: "CTA__rVmOfqGi0", lightAmount: 0.1, lightColor: "rgb(255, 255, 255)", lightPosition: { x: -1.5, y: -1.5 }, size: 1, speed: 1, style: { height: "100%", width: "100%" }, width: "100%", ...addPropertyOverrides2({ EdibFbi1X: { size: 2 } }, baseVariant, gestureVariant) }) }) })] }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-uTnBK.framer-148pbnv, .framer-uTnBK .framer-148pbnv { display: block; }", ".framer-uTnBK.framer-1jsgci { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 120px 120px 290px 120px; position: relative; width: 100%; }", ".framer-uTnBK .framer-1vnm1du-container { flex: none; height: 208px; max-width: 720px; pointer-events: none; position: relative; width: 100%; }", ".framer-uTnBK .framer-9ts9a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 22px 0px 22px 0px; position: relative; width: 100%; }", ".framer-uTnBK .framer-1vsl247-container { flex: none; height: 54px; position: relative; width: 178px; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-uTnBK .framer-qfj6x2-container { flex: none; height: 521px; left: calc(50.00000000000002% - 524px / 2); mix-blend-mode: lighten; pointer-events: none; position: absolute; top: calc(50.00000000000002% - 521px / 2); width: 524px; z-index: 1; }", ".framer-uTnBK.framer-v-ot51fd.framer-1jsgci { width: 100%; }", ".framer-uTnBK.framer-v-1t0qgfd.framer-1jsgci { width: 100%; }", ".framer-uTnBK.framer-v-1t0qgfd .framer-1vnm1du-container { height: auto; width: 525px; }", ".framer-uTnBK.framer-v-1putd0e.framer-1jsgci { padding: 160px 20px 160px 20px; width: 100%; }", ".framer-uTnBK.framer-v-1putd0e .framer-1vnm1du-container { height: auto; }", ".framer-uTnBK.framer-v-1putd0e .framer-9ts9a { padding: 22px 0px 22px 0px; }", ".framer-uTnBK.framer-v-1putd0e .framer-qfj6x2-container { height: 304px; left: 0px; right: 0px; top: calc(54.193548387096804% - 304px / 2); width: unset; }"];
var FramerKXRN4svBj = withCSS2(Component2, css2, "framer-uTnBK");
var KXRN4svBj_default = FramerKXRN4svBj;
FramerKXRN4svBj.displayName = "CTA";
FramerKXRN4svBj.defaultProps = { height: 672, width: 1366 };
addPropertyControls4(FramerKXRN4svBj, { variant: { options: ["b2nMDxtvZ", "lHvwk4Tu4", "lpFzcg3Q0", "EdibFbi1X"], optionTitles: ["Desktop | L", "Desktop | M", "Tablet", "Phone"], title: "Variant", type: ControlType4.Enum } });
addFonts2(FramerKXRN4svBj, [{ explicitInter: true, fonts: [{ cssFamilyName: "Instrument Serif", source: "google", style: "normal", uiFamilyName: "Instrument Serif", url: "https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zcZj1bIkNo.woff2", weight: "400" }] }, ...Text_Opacity_WordsFonts, ...ButtonsButtonLargeFonts, ...LightCirclesFonts], { supportsExplicitInterCodegen: true });
FramerKXRN4svBj.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(PyAGkYlzY_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerKXRN4svBj", "slots": [], "annotations": { "framerIntrinsicWidth": "1366", "framerDisplayContentsDiv": "false", "framerComponentViewportWidth": "true", "framerContractVersion": "1", "framerColorSyntax": "true", "framerIntrinsicHeight": "672", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"lHvwk4Tu4":{"layout":["fixed","auto"]},"lpFzcg3Q0":{"layout":["fixed","auto"]},"EdibFbi1X":{"layout":["fixed","auto"]}}}', "framerImmutableVariables": "true", "framerAutoSizeImages": "true" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  KXRN4svBj_default as default
};
