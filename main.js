!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const{uuid:r}=n(1);function o(e,t,n,o,i){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.completed=!1,this.project=i,this.id=r()}(()=>{let e=[],t=["default"],n="default";const r=document.querySelector("#addToDo"),u=document.querySelector(".closeBtn"),c=document.querySelector(".modal"),a=document.querySelector("#title"),l=document.querySelector("#description"),s=document.querySelector("#due-date"),f=document.querySelector("#priority"),d=document.querySelector(".showcase"),p=document.querySelector("#submit"),y=document.querySelector("#submit-edit"),m=document.querySelector("#title"),v=document.querySelector("#description"),h=document.querySelector("#due-date"),g=document.querySelector("#priority"),b=document.querySelector("#newProject"),w=document.querySelector(".closeProjectBtn"),S=document.querySelector("#submitProject"),j=document.querySelector(".modalProject"),E=document.getElementById("dropdown");function O(e){n=e,x()}function x(){localStorage.setItem("todos",JSON.stringify(e)),localStorage.setItem("projects",JSON.stringify(t)),localStorage.setItem("currentProject",JSON.stringify(n))}function T(){d.innerHTML=""}function C(){let t=[];"default"===n?t=e:e.forEach(e=>{e.project===n&&t.push(e)}),t.forEach(t=>{const n=document.createElement("div"),r=document.createElement("p"),o=document.createElement("div"),i=document.createElement("button"),u=document.createElement("p"),a=document.createElement("p"),l=document.createElement("button"),s=document.createElement("label"),f=document.createElement("input"),b=document.createElement("button");l.classList.add("closeToDo"),l.id="closeToDo0",f.setAttribute("type","checkbox"),f.id="completed",i.id="expand",o.id="expandContent",b.id="editButton",r.textContent="Title: "+t.title,u.textContent="Description: "+t.description,a.textContent="Due date: "+t.dueDate,l.textContent="x",s.textContent="Completed: ",s.htmlFor="completed",b.textContent="Edit",f.checked=t.completed,o.appendChild(u),o.appendChild(a),o.appendChild(b),n.appendChild(r),n.appendChild(l),n.appendChild(s),n.appendChild(f),n.appendChild(i),n.appendChild(o),"high"===t.priority?n.classList.add("cardRed"):"low"===t.priority?n.classList.add("cardGreen"):n.classList.add("cardMedium"),function(t,n,r,o,i,u,a){t.addEventListener("click",()=>function(t,n){n.remove();const r=e.filter(e=>e.id!==t.id);e=r,x()}(r,n)),o.addEventListener("click",()=>function(e,t){"expand_active"!==e.id?(e.id="expand_active",t.id="expandContent_active"):(e.id="expand",t.id="expandContent")}(o,i)),a.addEventListener("click",()=>function(t){const n=e.findIndex(e=>e.id===t.id);!1===e[n].completed?e[n].completed=!0:e[n].completed=!1,x()}(r)),u.addEventListener("click",()=>function(e){p.style.display="none",y.style.display="block",m.value=e.title,v.value=e.description,h.value=e.dueDate,g.value=e.priority,c.style.display="block"}(r)),y.addEventListener("click",t=>{t.preventDefault();const n=e.findIndex(e=>e.id===r.id),o=e[n];o.title=m.value,o.description=v.value,o.dueDate=h.value,o.priority=g.value,x(),T(),C(),c.style.display="none",p.style.display="block",y.style.display="none"})}(l,n,t,i,o,b,f),function(e){d.appendChild(e)}(n)})}function D(){!function(){const e=E.options.length;for(i=e;i>=0;i--)E.options[i]=null}(),t.forEach(e=>{const t=document.createElement("option");t.text=e,E.add(t)}),E.value=n}r.addEventListener("click",()=>c.style.display="block"),u.addEventListener("click",()=>c.style.display="none"),p.addEventListener("click",t=>{t.preventDefault();!function(t){e.push(t)}(new o(a.value,l.value,s.value,f.value,n)),x(),T(),C(),c.style.display="none"}),b.addEventListener("click",e=>j.style.display="block"),w.addEventListener("click",()=>j.style.display="none"),S.addEventListener("click",e=>{var n;e.preventDefault(),n=projectTitle.value,t.push(n),x(),O(projectTitle.value),D(),T(),C(),j.style.display="none"}),E.onchange=()=>{O(E.value),console.log(n),D(),T(),C()},function(){const r=localStorage.getItem("todos"),o=localStorage.getItem("projects"),i=localStorage.getItem("currentProject");e=JSON.parse(r),t=JSON.parse(o),n=JSON.parse(i)}(),null!=e?C():(e=[],t=["default"],n="default"),D()})()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.jsonSchema=t.fromString=t.empty=t.isUuid=t.regex=t.uuid=void 0;const r=n(2),o=n(6),i={v4:/(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u,v5:/(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u};t.regex=i;const u={v4:{type:"string",pattern:i.v4.toString().slice(1,-2)},v5:{type:"string",pattern:i.v5.toString().slice(1,-2)}};t.jsonSchema=u;const c=r.deprecate(()=>o.v4(),"uuidv4() is deprecated. Use v4() from the uuid module instead.");t.uuid=c;const a=r.deprecate(e=>o.validate(e),"isUuid() is deprecated. Use validate() from the uuid module instead.");t.isUuid=a;const l=r.deprecate(()=>o.NIL,"empty() is deprecated. Use NIL from the uuid module instead.");t.empty=l;const s=r.deprecate((e,t="bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45")=>o.v5(e,t),"fromString() is deprecated. Use v5() from the uuid module instead.");t.fromString=s},function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!h(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}})),a=r[n];n<i;a=r[++n])m(a)||!w(a)?u+=" "+a:u+=" "+c(a);return u},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,u={};function c(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),y(n)?r.showHidden=n:n&&t._extend(r,n),g(r.showHidden)&&(r.showHidden=!1),g(r.depth)&&(r.depth=2),g(r.colors)&&(r.colors=!1),g(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),s(r,e,r.depth)}function a(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function l(e,t){return e}function s(e,n,r){if(e.customInspect&&n&&E(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return h(o)||(o=s(e,o,r)),o}var i=function(e,t){if(g(t))return e.stylize("undefined","undefined");if(h(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(v(t))return e.stylize(""+t,"number");if(y(t))return e.stylize(""+t,"boolean");if(m(t))return e.stylize("null","null")}(e,n);if(i)return i;var u=Object.keys(n),c=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),j(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return f(n);if(0===u.length){if(E(n)){var a=n.name?": "+n.name:"";return e.stylize("[Function"+a+"]","special")}if(b(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(S(n))return e.stylize(Date.prototype.toString.call(n),"date");if(j(n))return f(n)}var l,w="",O=!1,x=["{","}"];(p(n)&&(O=!0,x=["[","]"]),E(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(w=" "+RegExp.prototype.toString.call(n)),S(n)&&(w=" "+Date.prototype.toUTCString.call(n)),j(n)&&(w=" "+f(n)),0!==u.length||O&&0!=n.length?r<0?b(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=O?function(e,t,n,r,o){for(var i=[],u=0,c=t.length;u<c;++u)D(t,String(u))?i.push(d(e,t,n,r,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(d(e,t,n,r,o,!0))})),i}(e,n,r,c,u):u.map((function(t){return d(e,n,r,c,t,O)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(l,w,x)):x[0]+w+x[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,t,n,r,o,i){var u,c,a;if((a=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(c=e.stylize("[Setter]","special")),D(r,o)||(u="["+o+"]"),c||(e.seen.indexOf(a.value)<0?(c=m(n)?s(e,a.value,null):s(e,a.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),g(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function p(e){return Array.isArray(e)}function y(e){return"boolean"==typeof e}function m(e){return null===e}function v(e){return"number"==typeof e}function h(e){return"string"==typeof e}function g(e){return void 0===e}function b(e){return w(e)&&"[object RegExp]"===O(e)}function w(e){return"object"==typeof e&&null!==e}function S(e){return w(e)&&"[object Date]"===O(e)}function j(e){return w(e)&&("[object Error]"===O(e)||e instanceof Error)}function E(e){return"function"==typeof e}function O(e){return Object.prototype.toString.call(e)}function x(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(g(i)&&(i=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!u[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;u[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else u[n]=function(){};return u[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=y,t.isNull=m,t.isNullOrUndefined=function(e){return null==e},t.isNumber=v,t.isString=h,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=g,t.isRegExp=b,t.isObject=w,t.isDate=S,t.isError=j,t.isFunction=E,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(4);var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function C(){var e=new Date,t=[x(e.getHours()),x(e.getMinutes()),x(e.getSeconds())].join(":");return[e.getDate(),T[e.getMonth()],t].join(" ")}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",C(),t.format.apply(t,arguments))},t.inherits=n(5),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var k="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function I(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(k&&e[k]){var t;if("function"!=typeof(t=e[k]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,k,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,o)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),k&&Object.defineProperty(t,k,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=k,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};t.apply(this,n).then((function(t){e.nextTick(u,null,t)}),(function(t){e.nextTick(I,t,u)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n(3))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,l=[],s=!1,f=-1;function d(){s&&a&&(s=!1,a.length?l=a.concat(l):f=-1,l.length&&p())}function p(){if(!s){var e=c(d);s=!0;for(var t=l.length;t;){for(a=l,l=[];++f<t;)a&&a[f].run();f=-1,t=l.length}a=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new y(e,t)),1!==l.length||s||c(p)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){"use strict";n.r(t),n.d(t,"v1",(function(){return m})),n.d(t,"v3",(function(){return x})),n.d(t,"v4",(function(){return T})),n.d(t,"v5",(function(){return k})),n.d(t,"NIL",(function(){return I})),n.d(t,"version",(function(){return U})),n.d(t,"validate",(function(){return c})),n.d(t,"stringify",(function(){return d})),n.d(t,"parse",(function(){return v}));var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function i(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(e){return"string"==typeof e&&u.test(e)},a=[],l=0;l<256;++l)a.push((l+256).toString(16).substr(1));var s,f,d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n},p=0,y=0;var m=function(e,t,n){var r=t&&n||0,o=t||new Array(16),u=(e=e||{}).node||s,c=void 0!==e.clockseq?e.clockseq:f;if(null==u||null==c){var a=e.random||(e.rng||i)();null==u&&(u=s=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==c&&(c=f=16383&(a[6]<<8|a[7]))}var l=void 0!==e.msecs?e.msecs:Date.now(),m=void 0!==e.nsecs?e.nsecs:y+1,v=l-p+(m-y)/1e4;if(v<0&&void 0===e.clockseq&&(c=c+1&16383),(v<0||l>p)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=l,y=m,f=c;var h=(1e4*(268435455&(l+=122192928e5))+m)%4294967296;o[r++]=h>>>24&255,o[r++]=h>>>16&255,o[r++]=h>>>8&255,o[r++]=255&h;var g=l/4294967296*1e4&268435455;o[r++]=g>>>8&255,o[r++]=255&g,o[r++]=g>>>24&15|16,o[r++]=g>>>16&255,o[r++]=c>>>8|128,o[r++]=255&c;for(var b=0;b<6;++b)o[r+b]=u[b];return t||d(o)};var v=function(e){if(!c(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};var h=function(e,t,n){function r(e,r,o,i){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=v(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var u=new Uint8Array(16+e.length);if(u.set(r),u.set(e,r.length),(u=n(u))[6]=15&u[6]|t,u[8]=63&u[8]|128,o){i=i||0;for(var c=0;c<16;++c)o[i+c]=u[c];return o}return d(u)}try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r};function g(e){return 14+(e+64>>>9<<4)+1}function b(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function w(e,t,n,r,o,i){return b((u=b(b(t,e),b(r,i)))<<(c=o)|u>>>32-c,n);var u,c}function S(e,t,n,r,o,i,u){return w(t&n|~t&r,e,t,o,i,u)}function j(e,t,n,r,o,i,u){return w(t&r|n&~r,e,t,o,i,u)}function E(e,t,n,r,o,i,u){return w(t^n^r,e,t,o,i,u)}function O(e,t,n,r,o,i,u){return w(n^(t|~r),e,t,o,i,u)}var x=h("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){for(var t=[],n=32*e.length,r=0;r<n;r+=8){var o=e[r>>5]>>>r%32&255,i=parseInt("0123456789abcdef".charAt(o>>>4&15)+"0123456789abcdef".charAt(15&o),16);t.push(i)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[g(t)-1]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,u=0;u<e.length;u+=16){var c=n,a=r,l=o,s=i;n=S(n,r,o,i,e[u],7,-680876936),i=S(i,n,r,o,e[u+1],12,-389564586),o=S(o,i,n,r,e[u+2],17,606105819),r=S(r,o,i,n,e[u+3],22,-1044525330),n=S(n,r,o,i,e[u+4],7,-176418897),i=S(i,n,r,o,e[u+5],12,1200080426),o=S(o,i,n,r,e[u+6],17,-1473231341),r=S(r,o,i,n,e[u+7],22,-45705983),n=S(n,r,o,i,e[u+8],7,1770035416),i=S(i,n,r,o,e[u+9],12,-1958414417),o=S(o,i,n,r,e[u+10],17,-42063),r=S(r,o,i,n,e[u+11],22,-1990404162),n=S(n,r,o,i,e[u+12],7,1804603682),i=S(i,n,r,o,e[u+13],12,-40341101),o=S(o,i,n,r,e[u+14],17,-1502002290),r=S(r,o,i,n,e[u+15],22,1236535329),n=j(n,r,o,i,e[u+1],5,-165796510),i=j(i,n,r,o,e[u+6],9,-1069501632),o=j(o,i,n,r,e[u+11],14,643717713),r=j(r,o,i,n,e[u],20,-373897302),n=j(n,r,o,i,e[u+5],5,-701558691),i=j(i,n,r,o,e[u+10],9,38016083),o=j(o,i,n,r,e[u+15],14,-660478335),r=j(r,o,i,n,e[u+4],20,-405537848),n=j(n,r,o,i,e[u+9],5,568446438),i=j(i,n,r,o,e[u+14],9,-1019803690),o=j(o,i,n,r,e[u+3],14,-187363961),r=j(r,o,i,n,e[u+8],20,1163531501),n=j(n,r,o,i,e[u+13],5,-1444681467),i=j(i,n,r,o,e[u+2],9,-51403784),o=j(o,i,n,r,e[u+7],14,1735328473),r=j(r,o,i,n,e[u+12],20,-1926607734),n=E(n,r,o,i,e[u+5],4,-378558),i=E(i,n,r,o,e[u+8],11,-2022574463),o=E(o,i,n,r,e[u+11],16,1839030562),r=E(r,o,i,n,e[u+14],23,-35309556),n=E(n,r,o,i,e[u+1],4,-1530992060),i=E(i,n,r,o,e[u+4],11,1272893353),o=E(o,i,n,r,e[u+7],16,-155497632),r=E(r,o,i,n,e[u+10],23,-1094730640),n=E(n,r,o,i,e[u+13],4,681279174),i=E(i,n,r,o,e[u],11,-358537222),o=E(o,i,n,r,e[u+3],16,-722521979),r=E(r,o,i,n,e[u+6],23,76029189),n=E(n,r,o,i,e[u+9],4,-640364487),i=E(i,n,r,o,e[u+12],11,-421815835),o=E(o,i,n,r,e[u+15],16,530742520),r=E(r,o,i,n,e[u+2],23,-995338651),n=O(n,r,o,i,e[u],6,-198630844),i=O(i,n,r,o,e[u+7],10,1126891415),o=O(o,i,n,r,e[u+14],15,-1416354905),r=O(r,o,i,n,e[u+5],21,-57434055),n=O(n,r,o,i,e[u+12],6,1700485571),i=O(i,n,r,o,e[u+3],10,-1894986606),o=O(o,i,n,r,e[u+10],15,-1051523),r=O(r,o,i,n,e[u+1],21,-2054922799),n=O(n,r,o,i,e[u+8],6,1873313359),i=O(i,n,r,o,e[u+15],10,-30611744),o=O(o,i,n,r,e[u+6],15,-1560198380),r=O(r,o,i,n,e[u+13],21,1309151649),n=O(n,r,o,i,e[u+4],6,-145523070),i=O(i,n,r,o,e[u+11],10,-1120210379),o=O(o,i,n,r,e[u+2],15,718787259),r=O(r,o,i,n,e[u+9],21,-343485551),n=b(n,c),r=b(r,a),o=b(o,l),i=b(i,s)}return[n,r,o,i]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(g(t)),r=0;r<t;r+=8)n[r>>5]|=(255&e[r/8])<<r%32;return n}(e),8*e.length))}));var T=function(e,t,n){var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return d(r)};function C(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function D(e,t){return e<<t|e>>>32-t}var k=h("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var o=0;o<r.length;++o)e.push(r.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,u=Math.ceil(i/16),c=new Array(u),a=0;a<u;++a){for(var l=new Uint32Array(16),s=0;s<16;++s)l[s]=e[64*a+4*s]<<24|e[64*a+4*s+1]<<16|e[64*a+4*s+2]<<8|e[64*a+4*s+3];c[a]=l}c[u-1][14]=8*(e.length-1)/Math.pow(2,32),c[u-1][14]=Math.floor(c[u-1][14]),c[u-1][15]=8*(e.length-1)&4294967295;for(var f=0;f<u;++f){for(var d=new Uint32Array(80),p=0;p<16;++p)d[p]=c[f][p];for(var y=16;y<80;++y)d[y]=D(d[y-3]^d[y-8]^d[y-14]^d[y-16],1);for(var m=n[0],v=n[1],h=n[2],g=n[3],b=n[4],w=0;w<80;++w){var S=Math.floor(w/20),j=D(m,5)+C(S,v,h,g)+b+t[S]+d[w]>>>0;b=g,g=h,h=D(v,30)>>>0,v=m,m=j}n[0]=n[0]+m>>>0,n[1]=n[1]+v>>>0,n[2]=n[2]+h>>>0,n[3]=n[3]+g>>>0,n[4]=n[4]+b>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),I="00000000-0000-0000-0000-000000000000";var U=function(e){if(!c(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}]);