var H=Object.defineProperty,z=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var L=(t,a,o)=>a in t?H(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,w=(t,a)=>{for(var o in a||(a={}))R.call(a,o)&&L(t,o,a[o]);if(N)for(var o of N(a))k.call(a,o)&&L(t,o,a[o]);return t},b=(t,a)=>z(t,D(a));var y=(t,a)=>{var o={};for(var r in t)R.call(t,r)&&a.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&N)for(var r of N(t))a.indexOf(r)<0&&k.call(t,r)&&(o[r]=t[r]);return o};import{r as m,j as e,B as P,a as c,F as C,f as E,b as T,L as _,c as A,R as M,l as q,C as S,d as G,e as U,u as B,g as K,N as Q,h as W,i as X,k as J,m as Y,n as I,M as ee,o as te,p as ae,q as se,s as oe}from"./vendor.8adca8fa.js";const re=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};re();const ne=()=>{const t=m.exports.useMemo(()=>`https://www.reddit.com/api/v1/authorize?response_type=code&state=snoof&duration=permanent&client_id=${encodeURIComponent("dWRUuIopxj6vVknOqBpUvg")}&scope=${encodeURIComponent("read")}&redirect_uri=${encodeURIComponent("https://phwebi.github.io/snoof/")}`,[]);return e("div",{className:"d-flex align-items-center justify-content-center h-100",children:e(P,{tag:"a",color:"primary",size:"lg",href:t,children:"Login to Reddit"})})},O=r=>{var s=r,{width:t=32,height:a=32}=s,o=y(s,["width","height"]);return e("svg",b(w({xmlns:"http://www.w3.org/2000/svg",width:t,height:a,viewBox:"0 0 20 20"},o),{children:c("g",{children:[e("circle",{fill:"#FF4500",cx:"10",cy:"10",r:"10"}),e("path",{fill:"#FFF",d:"M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"})]})}))},ce=o=>{var r=o,{height:t=18}=r,a=y(r,["height"]);return e("svg",{viewBox:"0 0 57 18",height:t,xmlns:"http://www.w3.org/2000/svg",children:c("g",b(w({fill:"#1c1c1c"},a),{children:[e("path",{d:"M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"}),e("circle",{fill:"#FF4500",cx:"47.26",cy:"3.44",r:"2.12"}),e("path",{d:"M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"}),e("path",{d:"M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"}),e("path",{d:"M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"}),e("path",{d:"M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"}),e("path",{d:"M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"})]}))})},Z=({active:t,unread:a,post:{data:{author:o,title:r,subreddit:s,created_utc:n}}})=>c(C,{children:[c("div",{children:[e(O,{width:16,height:16,className:"me-2"}),c("small",{className:"fw-bold",children:["r/",s]}),c("small",{className:`${t?"":"text-muted"}`,children:[" \u2022 ","Posted by",` u/${o} ${E(T(n),new Date,{addSuffix:!0})}`]}),a&&e("small",{"data-testid":"unread-indicator",className:"p-0 ms-2 text-primary",children:e("i",{className:"fas fa-circle"})})]}),e("div",{className:"my-2",children:r})]}),le=t=>{try{new URL(t)}catch{return!1}return!0},de=({posts:t,active:a,onSelect:o,onDelete:r,onLoadMore:s,isUnread:n,loading:l})=>c(_,{children:[t.map(d=>{const{data:{score:h,num_comments:f,thumbnail:u,name:v}}=d,i=(a==null?void 0:a.data.name)===v;return c(A,{action:!0,active:i,className:"mb-3 p-3 rounded border",onClick:()=>o(d),"data-testid":"post-list-item",children:[e(Z,{unread:n(d),active:i,post:d}),u&&le(u)&&e("img",{className:"mb-2 rounded mx-auto d-block",src:u}),c("div",{className:"d-flex mb-2",children:[c("small",{className:`${i?"":"text-muted"}`,children:[e("i",{className:"far fa-comment-alt me-1"}),`${f} `,"Comments"]}),c("span",{className:"ms-auto",children:[e("small",{className:"fw-bold me-1",children:h}),e("i",{className:"fas fa-sort text-warning"})]})]}),e(P,{color:i?"outline-light":"outline-danger",size:"sm",className:"float-end",onClick:g=>{g.stopPropagation(),r(d)},children:"Delete"})]},v)}),c(A,{tag:"button",color:"primary",action:!0,className:"mb-3 p-3 rounded border text-center",onClick:s,"data-testid":l?"load-more-btn-loading":"load-more-btn",children:["Load More ",l&&e("i",{className:"fas fa-spinner ms-2 fa-spin"})]},"load-more")]}),ie=({post:t})=>{const{data:{url:a,preview:o,selftext:r,media:s,is_gallery:n,media_metadata:l,post_hint:d,url_overridden_by_dest:h,is_self:f}}=t,u=m.exports.useRef(null);if(d==="hosted:video"&&(s==null?void 0:s.reddit_video))return e("div",{className:"row align-items-center",children:e(M,{playerRef:u,src:s.reddit_video.hls_url,autoPlay:!1,controls:!0})});if(d==="rich:video"&&(o==null?void 0:o.reddit_video_preview))return e("div",{className:"row align-items-center",children:e(M,{playerRef:u,src:o.reddit_video_preview.hls_url,autoPlay:!1,controls:!0})});if(d==="image")return e("img",{className:"mb-2 rounded mx-auto d-block img-fluid",src:encodeURI(h)});if(d==="link")return e(q,{url:a});if(f)return e("div",{children:r});if(n&&l){const v=Object.values(l).map(i=>i.s.u);return e("div",{children:v.map(i=>e("img",{className:"mb-2 rounded mx-auto d-block img-fluid",src:encodeURI(i)},i))})}return e("div",{children:"Oops - could not render content!"})},j=o=>{var r=o,{post:t}=r,a=y(r,["post"]);return c(S,b(w({style:{height:window.innerHeight-90}},a),{children:[e(G,{className:"bg-white border-bottom-0",children:e(Z,{post:t})}),e(U,{className:"overflow-auto",children:e(ie,{post:t})})]}))},me=()=>e(S,{style:{height:window.innerHeight-90},"data-testid":"post-placeholder",children:e(U,{children:e("div",{className:"d-flex align-items-center h-100",children:c("div",{className:"d-block mx-auto",children:[e("img",{src:"https://www.redditstatic.com/reddit404d.png"}),e("div",{className:"text-center",children:'"Please select a post." - Snoo'})]})})})}),he=()=>e(_,{"data-testid":"posts-loading-placeholder",children:Array.from({length:10},()=>Math.random()).map(t=>c(A,{className:"mb-3 p-3 rounded border",children:[c("h5",{className:"placeholder-glow",children:[e("span",{className:"placeholder col-1 me-2"}),e("span",{className:"placeholder col-5"})]}),c("p",{className:"placeholder-glow",children:[e("span",{className:"placeholder col-7"}),e("span",{className:"placeholder col-4"}),e("span",{className:"placeholder col-4"}),e("span",{className:"placeholder col-6"}),e("span",{className:"placeholder col-8"})]})]},t))});function ue(){const[t,a]=B("snoof-read-ids",[]);return{unread:s=>!(t==null?void 0:t.includes(s.data.name)),markAsRead:s=>{a([...t||[],s.data.name])}}}const pe="https://www.reddit.com/",fe="https://oauth.reddit.com/",ge=t=>{const a=`${pe}api/v1/access_token?grant_type=authorization_code&code=${encodeURIComponent(t)}&redirect_uri=${encodeURIComponent("https://phwebi.github.io/snoof/")}`;return fetch(a,{method:"POST",headers:{Authorization:`Basic ${btoa("dWRUuIopxj6vVknOqBpUvg:aZVdSJgcPyK34XXsdnv4UnQzq-FChA")}`}}).then(o=>o.json())},ve=({limit:t=50,after:a,token:o})=>{const r=`${fe}r/all/top?limit=${t}&raw_json=1&after=${a}`;return fetch(r,{headers:{Authorization:`Bearer ${o}`}}).then(s=>{if(s.ok)return s.json();throw s}).then(({data:s})=>({posts:s.children,after:s.after,dist:s.dist}))},F=m.exports.createContext(void 0);function xe(){const[t,a]=m.exports.useState(),[o,r,s]=B("snoof-auth",void 0);return m.exports.useEffect(()=>{const n=new URLSearchParams(window.location.search),l=Object.fromEntries(n.entries());l.code&&a(l.code)},[]),m.exports.useEffect(()=>{t&&ge(t).then(n=>{r(n),window.history.pushState("","","/")})},[t]),{data:o,clearAuth:s}}function Ne(){const t=m.exports.useContext(F),[a,o]=m.exports.useState(),[r,s]=m.exports.useState([]),[n,l]=m.exports.useState(!1),d=(i=!1,g)=>{if(t===void 0)return;const{data:p,clearAuth:$}=t;(p==null?void 0:p.access_token)&&(l(!0),ve({token:p==null?void 0:p.access_token,after:g}).then(({posts:x,after:V})=>{s(i?[...r,...x]:x),l(!1),o(V)}).catch(x=>{throw x.status===401&&$(),x}))};return{posts:r,fetchPosts:()=>d(),deletePost:i=>{const g=r.findIndex($=>$.data.name===i.data.name),p=[...r];p.splice(g,1),s(p)},clearPosts:()=>{s([]),o(void 0)},loadNextPage:()=>d(!0,a),loading:n}}const we=()=>{const{posts:t,fetchPosts:a,deletePost:o,clearPosts:r,loadNextPage:s,loading:n}=Ne(),{unread:l,markAsRead:d}=ue(),[h,f]=m.exports.useState(),u=K("(max-width: 768px)");m.exports.useEffect(a,[]);const v=g=>{f(g),d(g)};return c(C,{children:[c(Q,{color:"white",fixed:"top",className:"border-bottom",children:[c(W,{children:[e(O,{className:"me-2"}),e(ce,{})]}),c(X,{children:[e(P,{color:"outline-secondary",onClick:()=>{r(),f(void 0)},children:"Clear Posts"}),e(P,{color:"outline-secondary",onClick:a,"data-testid":"reload-posts-btn",children:e("i",{className:"fas fa-redo-alt"})})]})]}),e(J,{className:"py-3 bg-light",fluid:!0,children:c(Y,{children:[e(I,{xs:12,md:5,children:n&&t.length===0?e(he,{}):t.length>0?e(de,{isUnread:l,posts:t,onSelect:v,onDelete:o,onLoadMore:s,active:h,loading:n}):e(_,{children:e(A,{tag:"button",color:"primary",action:!0,className:"mb-3 p-3 rounded border text-center",onClick:a,children:"Load More"},"load-more")})}),e(I,{md:7,className:"post-details d-none d-md-block",children:h?e(j,{post:h}):e(me,{})}),h&&c(ee,{fullscreen:!0,isOpen:u,children:[e(te,{toggle:()=>f(void 0)}),e(ae,{children:e(j,{post:h,className:"border-0"})})]})]})})]})};const be=()=>{const t=xe();return e(F.Provider,{value:t,children:e(C,{children:t.data?e(we,{}):e(ne,{})})})};se.render(e(oe.StrictMode,{children:e(be,{})}),document.getElementById("root"));
