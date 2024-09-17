import{j as o,c as R}from"./spa-DqaMpHY1.js";import k,{useState as T}from"react";import N from"react-dom";import c from"styled-components";var H=Object.defineProperty,B=(t,e,n)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e,n)=>(B(t,typeof e!="symbol"?e+"":e,n),n);const F={stringify:t=>t,parse:t=>t},P={stringify:t=>`${t}`,parse:t=>parseFloat(t)},V={stringify:t=>t?"true":"false",parse:t=>/^[ty1-9]/i.test(t)},M={stringify:t=>t.name,parse:(t,e,n)=>{const a=(()=>{if(typeof window<"u"&&t in window)return window[t];if(typeof global<"u"&&t in global)return global[t]})();return typeof a=="function"?a.bind(n):void 0}},G={stringify:t=>JSON.stringify(t),parse:t=>JSON.parse(t)},E={string:F,number:P,boolean:V,function:M,json:G};function I(t){return t.replace(/([a-z0-9])([A-Z])/g,(e,n,a)=>`${n}-${a.toLowerCase()}`)}const C=Symbol.for("r2wc.render"),j=Symbol.for("r2wc.connected"),b=Symbol.for("r2wc.context"),f=Symbol.for("r2wc.props");function _(t,e,n){var a,g,i;e.props||(e.props=t.propTypes?Object.keys(t.propTypes):[]);const y=Array.isArray(e.props)?e.props.slice():Object.keys(e.props),s={},l={},x={};for(const r of y){s[r]=Array.isArray(e.props)?"string":e.props[r];const p=I(r);l[r]=p,x[p]=r}class m extends HTMLElement{constructor(){super(),v(this,a,!0),v(this,g),v(this,i,{}),v(this,"container"),e.shadow?this.container=this.attachShadow({mode:e.shadow}):this.container=this,this[f].container=this.container;for(const p of y){const w=l[p],h=this.getAttribute(w),d=s[p],u=d?E[d]:null;u!=null&&u.parse&&h&&(this[f][p]=u.parse(h,w,this))}}static get observedAttributes(){return Object.keys(x)}connectedCallback(){this[j]=!0,this[C]()}disconnectedCallback(){this[j]=!1,this[b]&&n.unmount(this[b]),delete this[b]}attributeChangedCallback(p,w,h){const d=x[p],u=s[d],S=u?E[u]:null;d in s&&S!=null&&S.parse&&h&&(this[f][d]=S.parse(h,p,this),this[C]())}[(a=j,g=b,i=f,C)](){this[j]&&(this[b]?n.update(this[b],this[f]):this[b]=n.mount(this.container,t,this[f]))}}for(const r of y){const p=l[r],w=s[r];Object.defineProperty(m.prototype,r,{enumerable:!0,configurable:!0,get(){return this[f][r]},set(h){this[f][r]=h;const d=w?E[w]:null;if(d!=null&&d.stringify){const u=d.stringify(h,p,this);this.getAttribute(p)!==u&&this.setAttribute(p,u)}else this[C]()}})}return m}function A(t,e,n,a={}){function g(s,l,x){const m=e.createElement(l,x);if("createRoot"in n){const r=n.createRoot(s);return r.render(m),{container:s,root:r,ReactComponent:l}}if("render"in n)return n.render(m,s),{container:s,ReactComponent:l};throw new Error("Invalid ReactDOM instance provided.")}function i({container:s,root:l,ReactComponent:x},m){const r=e.createElement(x,m);if(l){l.render(r);return}if("render"in n){n.render(r,s);return}}function y({container:s,root:l}){if(l){l.unmount();return}if("unmountComponentAtNode"in n){n.unmountComponentAtNode(s);return}}return _(t,a,{mount:g,unmount:y,update:i})}function J({text:t,onClick:e}){const n={margin:"0 10px",height:"50px",width:"160px",backgroundColor:"#405cf5",borderRadius:"6px",fontSize:"100%",padding:"0 25px",cursor:"pointer",color:"#fff",fontWeight:"bold"};return o.jsx("button",{onClick:e,style:n,children:t})}const L=A(J,k,N,{props:{text:"string",onClick:"function"}});customElements.get("react-button")||customElements.define("react-button",L);const W=c.div`
  width: 44px;
  height: 44px;
  position: relative;
  margin-left: 18px;
  border-radius: 50%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  background: #1b2c50;
  &:hover {
    background: #2e4c89;
  }
`,X=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 80px;
  cursor: pointer;
  color: white;
`,q=c.div`
  color: var(--color-white);
  font-family: Heebo;
  font-size: 19px;
  line-height: 28px;
  user-select: none;
  font-weight: 300;
  margin-top: 2px;
  font-family: Heebo;
`;function $({text:t}){return o.jsx(X,{children:o.jsx(W,{children:o.jsx(q,{children:t})})})}const D=A($,k,R,{props:{text:"string"}});customElements.get("account-button")||customElements.define("account-button",D);const K=c.div`
  min-width: 250px;
  max-width: 250px;
  margin-bottom: 5px;
  transition: 0.3s;
  box-shadow: 0 3px 5px 0 hsla(0, 0%, 85%, .8);
  display: flex;
  flex-direction: column;
  width: 100%;
  scroll-snap-align: unset;
  border: 1px solid rgb(var(--rgb-color-border-gainsboro));
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  margin-top: 10px;
`,Y=c.div`
  ${({$url:t})=>t&&`background-image: url(${t})`};
  border-radius: 6px;
  margin: 8px 8px 0;
  width: calc(100% - 16px);
  background-color: #000;
  background-size: 100% 100%;
  height: 132px;
  padding-bottom: var(--channels-thumbnail-bottom-padding);
  position: relative;
`,Z=c.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 15px 12px 12px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 20px;
`,Q=c.div`
  font-size: 14px;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: Heebo;
`,U=c.div`
  display: flex;
  gap: 20px;
  align-items: center;
  overflow-x: overlay;
  scroll-snap-type: x mandatory;
  justify-content: unset;
  min-height: 175px !important;
  width: 96vw;
  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;function tt({children:t}){return o.jsx(U,{children:t})}function O({items:t}){return o.jsx(tt,{children:Array.isArray(t)&&t.map(({title:e,url:n},a)=>o.jsxs(K,{children:[o.jsx(Y,{$url:n}),o.jsx(Z,{children:o.jsx(Q,{children:e})})]},a))})}const et=A(O,k,R,{props:{items:"json"}});customElements.get("collection-cards")||customElements.define("collection-cards",et);function nt(){return[{title:"Fox Sports 1",url:"https://d22cst65zw0ae2.cloudfront.net/channels/FOX_SPORTS_1.png"},{title:"ESPN",url:"https://d22cst65zw0ae2.cloudfront.net/raptor/ESPN.png"},{title:"TNT",url:"https://d22cst65zw0ae2.cloudfront.net/raptor/TNT.png"},{title:"Caffeine TV",url:"https://d22cst65zw0ae2.cloudfront.net/channels/CAFFEINE_TV.png"},{title:"Fox Weather",url:"https://d22cst65zw0ae2.cloudfront.net/channels/FOX_WEATHER.png"}]}function ot(){const t=nt();return console.log(t),o.jsx(O,{items:t})}const rt=A(ot,k,R,{});customElements.get("recently-viewed-channels")||customElements.define("recently-viewed-channels",rt);const it=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text);
  font-weight: 500;
  text-align: center;
  background-color: var(--color-menu);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: visible;
  position: sticky;
  left: 0px;
  top: 0px;
  height: 83px;
  z-index: 103;
  width: 100%;
`,st=c.img`
  padding-left: 20px;
  cursor: pointer;
`,ct=c.div`
  margin-right: 20px;
`,at="http://localhost:3002/assets/mediacloud-c_dtOvYE.svg";function lt(){return o.jsxs(it,{children:[o.jsx(st,{src:at}),o.jsx(ct,{children:o.jsx($,{text:"JK"})})]})}const pt=c.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  padding: 0px 20px;
  margin-right: calc(-1 * calc(100vw - 100%));
  max-width: 100%;
  height: 72px;
`,dt=c.div`
  position: sticky;
  background-color: var(--color-white);
  top: 83px;
  z-index: 9;
  transition: top 0.25s ease-in-out;
`,ut=c.div`
  ${({$isActive:t})=>t&&`
    background-color: rgba(36, 178, 218, .14) !important;
    border-radius: 4px;
`}
  height: 32px;
  white-space: nowrap;
  border: none !important;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 500;
  height: 32px;
  margin-right: 18px !important;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: Heebo;
  line-height: 30px;
  &:hover {
    background-color: rgba(36, 178, 218, 0.14) !important;
    border-radius: 4px;
  }
`,z=[{title:"Home",page:"home"},{title:"Assets",page:"assets"},{title:"Collections",page:"collections"},{title:"Replay",page:"replay"},{title:"Svelte",page:"svelte"},{title:"Vue",page:"vue"}];function ht(){var g;const t=window.location.hostname==="fox-poc.github.io"?"/mediacloud-ux-root-config-poc/":"/",[e,n]=T(((g=z.find(i=>i.page===window.location.pathname.replace(`${t}`,"")))==null?void 0:g.title)||""),a=i=>{n(i.title),window.history.pushState({},e,i.page)};return o.jsx(dt,{children:o.jsx(pt,{children:z.map(i=>o.jsx(ut,{$isActive:i.title===e,onClick:()=>a(i),children:i.title},i.title))})})}function bt(){return o.jsxs("div",{style:{fontFamily:"Arial, sans-serif"},children:[o.jsx(lt,{}),o.jsx(ht,{})]})}export{bt as default};
