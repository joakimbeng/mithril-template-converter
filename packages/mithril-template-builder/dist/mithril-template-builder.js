!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).templateBuilder=e()}(this,function(){"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,c=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a={allowfullscreen:1,allowpaymentrequest:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,default:1,defer:1,disabled:1,formnovalidate:1,hidden:1,ismap:1,itemscope:1,loop:1,multiple:1,muted:1,nomodule:1,novalidate:1,open:1,readonly:1,required:1,reversed:1,selected:1,typemustmatch:1},c={altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},o=/(&#?\w+;)/,i=function(t,e){for(var n=0;n<t.length;n++)e(t[n],n)},l=function(t){var e=t.replace(/(^.*);\s*$/,"$1");return(e=e.replace(/[\n\r]/g,"")).split(/\s*;\s*/).map(function(t){return t.split(/\s*:\s*/)})},f=function(t){return t.reduce(function(t,e){var r=n(e,2),a=r[0],c=r[1];return t[a]=c,t},{})};function u(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).attrsAsObject;this.virtual=t,this.attrsAsObject=e,this.children=[]}u.prototype={addVirtualString:function(t){var e=this,n=t.replace(/(["\r\n])/g,"\\$1"),r=n.split(o);r.length>1?r.forEach(function(t){t.match(o)?e.children.push({content:'m.trust("'.concat(t,'")')}):t&&e.children.push({content:'"'.concat(t,'"')})}):this.children.push({content:'"'.concat(n,'"')})},addVirtualAttrs:function(n){var r={tag:"",className:"",attrsAsSelectorString:"",attrsAsObjectString:"",style:""},c=n.attrs,o=c.class,i=void 0===o?"":o,s=c.style,d=void 0===s?"":s,h=e(c,["class","style"]),p=Object.keys(h).filter(function(t){return void 0!==h[t]}).reduce(function(t,e){return t[e]=h[e],t},{});if(this.attrsAsObject){var g=d?f(l(d)):{},m=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),a.forEach(function(n){t(e,n,r[n])})}return e}({},i.length>0?{class:i}:{},p,Object.keys(g).length>0?{style:g}:{});r.tag=n.tag||"div",Object.keys(m).length>0&&(r.attrsAsObjectString=", ".concat(JSON.stringify(m)))}else if(r.tag="div"===n.tag?0===Object.keys(p).length?"div":"":n.tag,r.className=i?".".concat(i.replace(/\s+/g,".")):"",r.attrsAsSelectorString=Object.keys(p).map(function(t){var e=p[t].replace(/[\n\r\t]/g," ").replace(/\s+/g," ").replace(/'/g,"\\'");return a[t]&&t===e?"[".concat(t,"]"):"[".concat(t,"='").concat(e,"']")}).join(""),d){var y=l(d),v=f(y),b=JSON.stringify(v);r.style=', {"style":'.concat(b,"}")}var O=0!==n.children.length?new u(n.children,{attrsAsObject:this.attrsAsObject}).complete():null;this.children.push({node:function(t){var e=t.tag,n=t.className,r=t.attrsAsSelectorString,a=t.attrsAsObjectString,c=t.style;return'"'.concat(e).concat(n).concat(r,'"').concat(a).concat(c)}(r),children:O})},complete:function(){return i(this.virtual,function(t){if("string"==typeof t){var e=t.trim(),n=e.charCodeAt(0);0===e.length||'"'===e||1===e.length&&10===n||!(10===n||n>=32)||this.addVirtualString(e)}else this.addVirtualAttrs(t)}.bind(this)),this.children}};var s={2:"  ",4:"    ",tab:"\t"};return function(t){var e,n=new u(function t(e){var n=[];return i(e,function(e){if(3===e.nodeType)n.push(e.nodeValue);else if(1===e.nodeType){var r={};i(e.attributes,function(t){var e=t.name,n=t.value;r[e]=a[e]?e:n});var o=e.nodeName.toLowerCase(),l=c[o]||o;n.push({tag:l,attrs:r,children:t(e.childNodes)})}}),n}(function(t){if((t=t.replace(/&/g,"&amp;")).indexOf("<!doctype")>=0)return[(new DOMParser).parseFromString(t,"text/html").childNodes[1]];var e=document.createElement("div");return e.insertAdjacentHTML("beforeend",t),r(e.childNodes)}(t.source)),{attrsAsObject:t.attrsAsObject}).complete(),o=function t(e,n,r){if(e)return e.map(function(e){var a=function(t,e){if(t<0)return"";for(var n="",r=0;r<t;r++)n+=e;return n}(n,r);if(e.content)return function(t,e){return"\n".concat(e).concat(t)}(e.content,a);var c=e.node||"",o=n+(e.children&&e.children.length>1?2:1);return function(t,e,n,r){return e?e.length>1?function(t,e,n,r){return"\n".concat(n,"m(").concat(t,",\n").concat(n).concat(r,"[").concat(e,"\n").concat(n).concat(r,"]\n").concat(n,")")}(t,e,n,r):function(t,e,n){return"\n".concat(n,"m(").concat(t,", ").concat(e,"\n").concat(n,")")}(t,e,n):function(t,e){return"\n".concat(e,"m(").concat(t,")")}(t,n)}(c,t(e.children,o,r),a,r)})}(n,n.length>1?1:0,s[t.indent||"2"]);return o.length>1?(e=o.join(", "),"[".concat(e,"\n]")):o.join("").trim()}});
//# sourceMappingURL=mithril-template-builder.js.map
