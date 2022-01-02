/**
 * bellajs@11.0.0rc1
 * built with esbuild at: 2022-01-02T10:31:26.719Z
 * repository: https://github.com/ndaidong/bellajs
 * maintainer: @ndaidong
 * License: MIT
**/
var w=t=>({}).toString.call(t),W=t=>Number.isInteger(t),a=t=>Array.isArray(t),f=t=>String(t)===t,b=t=>Number(t)===t,X=t=>Boolean(t)===t,k=t=>w(t)==="[object Null]",C=t=>w(t)==="[object Undefined]",U=t=>C(t)||k(t),K=t=>w(t)==="[object Function]",g=t=>w(t)==="[object Object]"&&!a(t),p=t=>t instanceof Date&&!isNaN(t.valueOf()),Q=t=>w(t).match(/^\[object HTML\w*Element]$/)!==null,V=t=>{let e=/^[a-z]+$/i;return f(t)&&e.test(t)},Z=t=>{let e=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return f(t)&&e.test(t)},j=t=>!t||U(t)||f(t)&&t===""||a(t)&&t.length===0||g(t)&&Object.keys(t).length===0,d=(t,e)=>!t||!e?!1:Object.prototype.hasOwnProperty.call(t,e);var O=(t,e)=>{if(j(t)&&j(e))return!0;if(p(t)&&p(e))return t.getTime()===e.getTime();if(a(t)&&a(e)){if(t.length!==e.length)return!1;let r=!0;for(let n=0;n<t.length;n++)if(!O(t[n],e[n])){r=!1;break}return r}if(g(t)&&g(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;let r=!0;for(let n in t)if(!d(e,n)||!O(t[n],e[n])){r=!1;break}return r}return t===e};var q=Number.MAX_SAFE_INTEGER,T=(t,e)=>{if((!t||t<0)&&(t=0),e||(e=q),t===e)return e;t>e&&(t=Math.min(t,e),e=Math.max(t,e));let r=t,n=e-t+1;return Math.floor(Math.random()*n)+r};var m=t=>{let e=b(t)?String(t):t;if(!f(e))throw new Error("InvalidInput: String required.");return e},st=(t,e)=>{let r=m(t),n=e||140;if(r.length<=n)return r;let o=r.substring(0,n),s=o.split(" "),c=s.length,i="";return c>1?(s.pop(),i+=s.join(" "),i.length<r.length&&(i+="...")):(o=o.substring(0,n-3),i=o+"..."),i},ct=t=>m(t).replace(/<.*?>/gi," ").replace(/\s\s+/g," ").trim(),it=t=>m(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),ut=t=>m(t).replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),z=t=>{let e=m(t).toLowerCase();return e.length>1?e.charAt(0).toUpperCase()+e.slice(1):e.toUpperCase()},lt=t=>m(t).split(" ").map(e=>z(e)).join(" "),D=(t,e,r)=>{let n=m(t);if(b(e)&&(e=String(e)),b(r)&&(r=String(r)),f(e)&&f(r))n=n.split(e).join(r);else if(a(e)&&f(r))e.forEach(o=>{n=D(n,o,r)});else if(a(e)&&a(r)&&e.length===r.length){let o=e.length;if(o>0)for(let s=0;s<o;s++){let c=e[s],i=r[s];n=D(n,c,i)}}return n},P=t=>{let e=m(t),r={a:"á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ|ä",A:"Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ|Ä",c:"ç",C:"Ç",d:"đ",D:"Đ",e:"é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|ë",E:"É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ|Ë",i:"í|ì|ỉ|ĩ|ị|ï|î",I:"Í|Ì|Ỉ|Ĩ|Ị|Ï|Î",o:"ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ|ö",O:"Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ô|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ|Ö",u:"ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự|û",U:"Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự|Û",y:"ý|ỳ|ỷ|ỹ|ỵ",Y:"Ý|Ỳ|Ỷ|Ỹ|Ỵ"},n=(o,s)=>{e=D(e,o,s)};for(let o in r)d(r,o)&&r[o].split("|").forEach(c=>n(c,o));return e},at=(t,e="")=>{let r="abcdefghijklmnopqrstuvwxyz",n=r.toUpperCase(),s=[r,n,"0123456789"].join("").split("").sort(()=>Math.random()>.5).join(""),c=s.length,i=Math.max(t||32,e.length),l=e;for(;l.length<i;){let u=T(0,c);l+=s.charAt(u)||""}return l},pt=(t,e="-")=>P(t).trim().toLowerCase().replace(/\W+/g," ").replace(/\s+/g," ").replace(/\s/g,e);var Y="D, M d, Y  h:i:s A",F=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],G=["January","February","March","April","May","June","July","August","September","October","November","December"],I=()=>new Date,S=()=>Date.now(),A=I().getTimezoneOffset(),L=(()=>{let t=Math.abs(A/60),e=A<0?"+":"-";return["GMT",e,String(t).padStart(4,"0")].join("")})(),M=t=>String(t<10?"0"+t:t),R=t=>{let e=t+" ",r=e.charAt(e.length-2);return r==="1"?e="st":r==="2"?e="nd":r==="3"?e="rd":e="th",e},_=(t,e=Y)=>{let r=p(t)?t:new Date(t);if(!p(r))throw new Error("InvalidInput: Number or Date required.");let n=/\.*\\?([a-z])/gi,o=e.includes("a")||e.includes("A"),s=F,c=G,i={Y(){return r.getFullYear()},y(){return(i.Y()+"").slice(-2)},F(){return c[i.n()-1]},M(){return(i.F()+"").slice(0,3)},m(){return M(i.n())},n(){return r.getMonth()+1},S(){return R(i.j())},j(){return r.getDate()},d(){return M(i.j())},t(){return new Date(i.Y(),i.n(),0).getDate()},w(){return r.getDay()},l(){return s[i.w()]},D(){return(i.l()+"").slice(0,3)},G(){return r.getHours()},g(){return i.G()%12||12},h(){return M(o?i.g():i.G())},i(){return M(r.getMinutes())},s(){return M(r.getSeconds())},a(){return i.G()>11?"pm":"am"},A(){return i.a().toUpperCase()},O(){return L}},l=(u,y)=>i[u]?i[u]():y;return e.replace(n,l)},ht=(t=S())=>{let e=p(t)?t:new Date(t);if(!p(e))throw new Error("InvalidInput: Number or Date required.");let r=I()-e,n=parseInt(e,10);if(isNaN(n)&&(n=0),r<=n)return"Just now";let o=null,s={millisecond:1,second:1e3,minute:60,hour:60,day:24,month:30,year:12};for(let c in s){if(r<s[c])break;o=c,r/=s[c]}return r=Math.floor(r),r!==1&&(o+="s"),[r,o].join(" ")+" ago"},dt=(t=S())=>{let e=p(t)?t:new Date(t);if(!p(e))throw new Error("InvalidInput: Number or Date required.");let r=e.getMinutes(),n=new Date(e);return n.setMinutes(r+A),`${_(n,"D, j M Y h:i:s")} GMT+0000`},mt=(t=S())=>{let e=p(t)?t:new Date(t);if(!p(e))throw new Error("InvalidInput: Number or Date required.");return _(e,"D, j M Y h:i:s O")};var yt=t=>{for(var e=[],r=0;r<64;)e[r]=0|Math.abs(Math.sin(++r))*4294967296;for(var n,o,s,c,i=[],l=decodeURIComponent(encodeURI(t)),u=l.length,y=[n=1732584193,o=-271733879,~n,~o],h=0;h<=u;)i[h>>2]|=(l.charCodeAt(h)||128)<<8*(h++%4);for(i[t=(u+8>>6)*16+14]=u*8,h=0;h<t;h+=16){for(u=y,c=0;c<64;)u=[s=u[3],(n=u[1]|0)+((s=u[0]+[n&(o=u[2])|~n&s,s&n|~s&o,n^o^s,o^(n|~s)][u=c>>4]+(e[c]+(i[[c,5*c+1,3*c+5,7*c][u]%16+h]|0)))<<(u=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*u+c++%4])|s>>>32-u),n,o];for(c=4;c;)y[--c]=y[c]+u[c]}for(t="";c<32;)t+=(y[c>>3]>>(1^c++&7)*4&15).toString(16);return t};var Mt=t=>{let e=t.length,r=(n,o)=>n>0?(...s)=>r(n-s.length,[...o,...s]):t(...o);return r(e,[])};var jt=(...t)=>t.reduce((e,r)=>n=>e(r(n)));var St=(...t)=>t.reduce((e,r)=>n=>r(e(n)));var x=(t,e,r,n={})=>{let{writable:o=!1,configurable:s=!1,enumerable:c=!1}=n;Object.defineProperty(t,e,{value:r,writable:o,configurable:s,enumerable:c})};var N=t=>{let e=t,r=()=>e==null,n=()=>e,o=l=>N(e||l()),s=l=>N(l(e)===!0?e:null),c=l=>N(r()?null:l(e)),i=Object.create({});return x(i,"__value__",e,{enumerable:!0}),x(i,"__type__","Maybe",{enumerable:!0}),x(i,"isNil",r),x(i,"value",n),x(i,"map",c),x(i,"if",s),x(i,"else",o),i};var E=(t,e=null)=>{let r=e||new Set;if(r.has(t))return t;if(r.add(t),p(t))return new Date(t.valueOf());let n=s=>{let c=Object.create({});for(let i in s)d(s,i)&&(c[i]=E(s[i],r));return c},o=s=>[...s].map(c=>a(c)?o(c):g(c)?n(c):E(c,r));return a(t)?o(t):g(t)?n(t):t},H=(t,e,r=!1,n=[])=>{for(let o in t)if(!(n.length>0&&n.includes(o))&&(!r||r&&d(e,o))){let s=t[o],c=e[o];g(c)&&g(s)||a(c)&&a(s)?e[o]=H(s,e[o],r,n):e[o]=E(s)}return e},It=(t=[])=>[...new Set(t)],B=(t,e)=>t>e?1:t<e?-1:0,J=(t=[],e=null)=>{let r=[...t],n=e||B;return r.sort(n),r},_t=(t=[],e=1,r="")=>!f(r)||!d(t[0],r)?t:J(t,(n,o)=>n[r]>o[r]?e:n[r]<o[r]?-1*e:0),$=(t=[])=>{let e=[...t],r=[],n=e.length;for(;n>0;){let o=Math.floor(Math.random()*n);r.push(e.splice(o,1)[0]),n--}return r},kt=(t=[],e=1)=>{let r=$(t),n=Math.max(1,e),o=Math.min(n,r.length-1);return r.splice(0,o)};export{E as clone,jt as compose,H as copies,Mt as curry,O as equals,it as escapeHTML,at as genid,d as hasProperty,a as isArray,X as isBoolean,p as isDate,Q as isElement,Z as isEmail,j as isEmpty,K as isFunction,W as isInteger,V as isLetter,U as isNil,k as isNull,b as isNumber,g as isObject,f as isString,C as isUndefined,N as maybe,yt as md5,I as now,kt as pick,St as pipe,T as randint,D as replaceAll,$ as shuffle,pt as slugify,J as sort,_t as sortBy,P as stripAccent,ct as stripTags,S as time,_ as toDateString,mt as toLocalDateString,ht as toRelativeTime,dt as toUTCDateString,st as truncate,z as ucfirst,lt as ucwords,ut as unescapeHTML,It as unique};
