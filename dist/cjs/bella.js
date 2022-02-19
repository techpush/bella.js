// bellajs@11.0.2, by @ndaidong - built with esbuild at 2022-02-19T05:03:20.038Z - published under MIT license
var S=Object.defineProperty;var U=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var F=Object.prototype.hasOwnProperty;var R=t=>S(t,"__esModule",{value:!0});var z=(t,e)=>{for(var r in e)S(t,r,{get:e[r],enumerable:!0})},B=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of q(e))!F.call(t,o)&&(r||o!=="default")&&S(t,o,{get:()=>e[o],enumerable:!(n=U(e,o))||n.enumerable});return t};var H=(t=>(e,r)=>t&&t.get(e)||(r=B(R({}),e,1),t&&t.set(e,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var gt={};z(gt,{clone:()=>M,compose:()=>it,copies:()=>I,curry:()=>ct,equals:()=>A,escapeHTML:()=>Z,formatDateString:()=>ot,formatTimeAgo:()=>st,genid:()=>et,hasProperty:()=>a,isArray:()=>u,isBoolean:()=>V,isDate:()=>h,isElement:()=>G,isEmail:()=>Y,isEmpty:()=>d,isFunction:()=>X,isInteger:()=>$,isLetter:()=>W,isNil:()=>_,isNull:()=>E,isNumber:()=>y,isObject:()=>l,isString:()=>p,isUndefined:()=>N,maybe:()=>b,pick:()=>at,pipe:()=>ut,randint:()=>O,replaceAll:()=>w,shuffle:()=>P,slugify:()=>rt,sort:()=>L,sortBy:()=>ft,stripAccent:()=>D,stripTags:()=>Q,truncate:()=>K,ucfirst:()=>T,ucwords:()=>tt,unescapeHTML:()=>v,unique:()=>lt});var m=t=>({}).toString.call(t),$=t=>Number.isInteger(t),u=t=>Array.isArray(t),p=t=>String(t)===t,y=t=>Number(t)===t,V=t=>Boolean(t)===t,E=t=>m(t)==="[object Null]",N=t=>m(t)==="[object Undefined]",_=t=>N(t)||E(t),X=t=>m(t)==="[object Function]",l=t=>m(t)==="[object Object]"&&!u(t),h=t=>t instanceof Date&&!isNaN(t.valueOf()),G=t=>m(t).match(/^\[object HTML\w*Element]$/)!==null,W=t=>{let e=/^[a-z]+$/i;return p(t)&&e.test(t)},Y=t=>{let e=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return p(t)&&e.test(t)},d=t=>!t||_(t)||p(t)&&t===""||u(t)&&t.length===0||l(t)&&Object.keys(t).length===0,a=(t,e)=>!t||!e?!1:Object.prototype.hasOwnProperty.call(t,e);var A=(t,e)=>{if(d(t)&&d(e))return!0;if(h(t)&&h(e))return t.getTime()===e.getTime();if(u(t)&&u(e)){if(t.length!==e.length)return!1;let r=!0;for(let n=0;n<t.length;n++)if(!A(t[n],e[n])){r=!1;break}return r}if(l(t)&&l(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;let r=!0;for(let n in t)if(!a(e,n)||!A(t[n],e[n])){r=!1;break}return r}return t===e};var J=Number.MAX_SAFE_INTEGER,O=(t,e)=>{if((!t||t<0)&&(t=0),e||(e=J),t===e)return e;t>e&&(t=Math.min(t,e),e=Math.max(t,e));let r=t,n=e-t+1;return Math.floor(Math.random()*n)+r};var g=t=>{let e=y(t)?String(t):t;if(!p(e))throw new Error("InvalidInput: String required.");return e},K=(t,e)=>{let r=g(t),n=e||140;if(r.length<=n)return r;let o=r.substring(0,n),s=o.split(" "),i=s.length,c="";return i>1?(s.pop(),c+=s.join(" "),c.length<r.length&&(c+="...")):(o=o.substring(0,n-3),c=o+"..."),c},Q=t=>g(t).replace(/<.*?>/gi," ").replace(/\s\s+/g," ").trim(),Z=t=>g(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),v=t=>g(t).replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),T=t=>{let e=g(t).toLowerCase();return e.length>1?e.charAt(0).toUpperCase()+e.slice(1):e.toUpperCase()},tt=t=>g(t).split(" ").map(e=>T(e)).join(" "),w=(t,e,r)=>{let n=g(t);if(y(e)&&(e=String(e)),y(r)&&(r=String(r)),p(e)&&p(r))n=n.split(e).join(r);else if(u(e)&&p(r))e.forEach(o=>{n=w(n,o,r)});else if(u(e)&&u(r)&&e.length===r.length){let o=e.length;if(o>0)for(let s=0;s<o;s++){let i=e[s],c=r[s];n=w(n,i,c)}}return n},D=t=>{let e=g(t),r={a:"á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ|ä",A:"Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ|Ä",c:"ç",C:"Ç",d:"đ",D:"Đ",e:"é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|ë",E:"É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ|Ë",i:"í|ì|ỉ|ĩ|ị|ï|î",I:"Í|Ì|Ỉ|Ĩ|Ị|Ï|Î",o:"ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ|ö",O:"Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ô|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ|Ö",u:"ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự|û",U:"Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự|Û",y:"ý|ỳ|ỷ|ỹ|ỵ",Y:"Ý|Ỳ|Ỷ|Ỹ|Ỵ"},n=(o,s)=>{e=w(e,o,s)};for(let o in r)a(r,o)&&r[o].split("|").forEach(i=>n(i,o));return e},et=(t,e="")=>{let r="abcdefghijklmnopqrstuvwxyz",n=r.toUpperCase(),s=[r,n,"0123456789"].join("").split("").sort(()=>Math.random()>.5).join(""),i=s.length,c=Math.max(t||32,e.length),f=e;for(;f.length<c;){let C=O(0,i);f+=s.charAt(C)||""}return f},rt=(t,e="-")=>D(t).trim().toLowerCase().replace(/\W+/g," ").replace(/\s+/g," ").replace(/\s/g,e);var k={dateStyle:"medium",timeStyle:"long"},j={second:1e3,minute:60,hour:60,day:24,week:7,month:4,year:12},nt=t=>{try{return new Intl.Locale(t).language!==""}catch{return!1}},ot=(...t)=>{let e=t[0],r=nt(t[1])?t[1]:"en",n=t.length>=3?t[2]:t.length===1?k:l(t[1])?t[1]:k;return new Intl.DateTimeFormat(r,n).format(new Date(e))},st=(t,e="en",r="just now")=>{let n=new Date(t),o=Date.now()-n;if(o<=j.second)return r;let s="second";for(let c in j){if(o<j[c])break;s=c,o/=j[c]}return o=Math.floor(o),new Intl.RelativeTimeFormat(e).format(-o,s)};var ct=t=>{let e=t.length,r=(n,o)=>n>0?(...s)=>r(n-s.length,[...o,...s]):t(...o);return r(e,[])};var it=(...t)=>t.reduce((e,r)=>n=>e(r(n)));var ut=(...t)=>t.reduce((e,r)=>n=>r(e(n)));var x=(t,e,r,n={})=>{let{writable:o=!1,configurable:s=!1,enumerable:i=!1}=n;Object.defineProperty(t,e,{value:r,writable:o,configurable:s,enumerable:i})};var b=t=>{let e=t,r=()=>e==null,n=()=>e,o=f=>b(e||f()),s=f=>b(f(e)===!0?e:null),i=f=>b(r()?null:f(e)),c=Object.create({});return x(c,"__value__",e,{enumerable:!0}),x(c,"__type__","Maybe",{enumerable:!0}),x(c,"isNil",r),x(c,"value",n),x(c,"map",i),x(c,"if",s),x(c,"else",o),c};var M=(t,e=null)=>{let r=e||new Set;if(r.has(t))return t;if(r.add(t),h(t))return new Date(t.valueOf());let n=s=>{let i=Object.create({});for(let c in s)a(s,c)&&(i[c]=M(s[c],r));return i},o=s=>[...s].map(i=>u(i)?o(i):l(i)?n(i):M(i,r));return u(t)?o(t):l(t)?n(t):t},I=(t,e,r=!1,n=[])=>{for(let o in t)if(!(n.length>0&&n.includes(o))&&(!r||r&&a(e,o))){let s=t[o],i=e[o];l(i)&&l(s)||u(i)&&u(s)?e[o]=I(s,e[o],r,n):e[o]=M(s)}return e},lt=(t=[])=>[...new Set(t)],pt=(t,e)=>t>e?1:t<e?-1:0,L=(t=[],e=null)=>{let r=[...t],n=e||pt;return r.sort(n),r},ft=(t=[],e=1,r="")=>!p(r)||!a(t[0],r)?t:L(t,(n,o)=>n[r]>o[r]?e:n[r]<o[r]?-1*e:0),P=(t=[])=>{let e=[...t],r=[],n=e.length;for(;n>0;){let o=Math.floor(Math.random()*n);r.push(e.splice(o,1)[0]),n--}return r},at=(t=[],e=1)=>{let r=P(t),n=Math.max(1,e),o=Math.min(n,r.length-1);return r.splice(0,o)};module.exports=H(gt);0&&(module.exports={clone,compose,copies,curry,equals,escapeHTML,formatDateString,formatTimeAgo,genid,hasProperty,isArray,isBoolean,isDate,isElement,isEmail,isEmpty,isFunction,isInteger,isLetter,isNil,isNull,isNumber,isObject,isString,isUndefined,maybe,pick,pipe,randint,replaceAll,shuffle,slugify,sort,sortBy,stripAccent,stripTags,truncate,ucfirst,ucwords,unescapeHTML,unique});
