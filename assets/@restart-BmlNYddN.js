import{r as s,j as f}from"./react-BgARcXeA.js";import"./dom-helpers-BVtomV30.js";import"./react-dom-BQ2b3uQe.js";const p=n=>!n||typeof n=="function"?n:t=>{n.current=t};function w(n,t){const e=p(n),r=p(t);return o=>{e&&e(o),r&&r(o)}}function $(n,t){return s.useMemo(()=>w(n,t),[n,t])}function x(n){const t=s.useRef(n);return s.useEffect(()=>{t.current=n},[n]),t}function K(n){const t=x(n);return s.useCallback(function(...e){return t.current&&t.current(...e)},[t])}function E(){const n=s.useRef(!0),t=s.useRef(()=>n.current);return s.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),t.current}const O=["as","disabled"];function T(n,t){if(n==null)return{};var e={},r=Object.keys(n),o,u;for(u=0;u<r.length;u++)o=r[u],!(t.indexOf(o)>=0)&&(e[o]=n[o]);return e}function k(n){return!n||n.trim()==="#"}function m({tagName:n,disabled:t,href:e,target:r,rel:o,role:u,onClick:c,tabIndex:R=0,type:j}){n||(e!=null||r!=null||o!=null?n="a":n="button");const l={tagName:n};if(n==="button")return[{type:j||"button",disabled:t},l];const d=i=>{if((t||n==="a"&&k(e))&&i.preventDefault(),t){i.stopPropagation();return}c==null||c(i)},D=i=>{i.key===" "&&(i.preventDefault(),d(i))};return n==="a"&&(e||(e="#"),t&&(e=void 0)),[{role:u??"button",disabled:void 0,tabIndex:t?void 0:R,href:e,target:n==="a"?r:void 0,"aria-disabled":t||void 0,rel:n==="a"?o:void 0,onClick:d,onKeyDown:D},l]}const g=s.forwardRef((n,t)=>{let{as:e,disabled:r}=n,o=T(n,O);const[u,{tagName:c}]=m(Object.assign({tagName:e,disabled:r},o));return f.jsx(c,Object.assign({},o,u,{ref:t}))});g.displayName="Button";const P=["onKeyDown"];function v(n,t){if(n==null)return{};var e={},r=Object.keys(n),o,u;for(u=0;u<r.length;u++)o=r[u],!(t.indexOf(o)>=0)&&(e[o]=n[o]);return e}function C(n){return!n||n.trim()==="#"}const b=s.forwardRef((n,t)=>{let{onKeyDown:e}=n,r=v(n,P);const[o]=m(Object.assign({tagName:"a"},r)),u=K(c=>{o.onKeyDown(c),e==null||e(c)});return C(r.href)||r.role==="button"?f.jsx("a",Object.assign({ref:t},r,o,{onKeyDown:u})):f.jsx("a",Object.assign({ref:t},r,{onKeyDown:e}))});b.displayName="Anchor";const L=b;function W(n,t){const e=s.useRef(!0);s.useEffect(()=>{if(e.current){e.current=!1;return}return n()},t)}function M(n){const t=s.useRef(n);return t.current=n,t}function h(n){const t=M(n);s.useEffect(()=>()=>t.current(),[])}const a=2**31-1;function y(n,t,e){const r=e-Date.now();n.current=r<=a?setTimeout(t,r):setTimeout(()=>y(n,t,e),a)}function B(){const n=E(),t=s.useRef();return h(()=>clearTimeout(t.current)),s.useMemo(()=>{const e=()=>clearTimeout(t.current);function r(o,u=0){n()&&(e(),u<=a?t.current=setTimeout(o,u):y(t,o,Date.now()+u))}return{set:r,clear:e,handleRef:t}},[])}export{L as A,m as a,x as b,K as c,W as d,B as e,$ as u};
