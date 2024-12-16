(()=>{var jt=Object.create;var xe=Object.defineProperty;var Kt=Object.getOwnPropertyDescriptor;var Jt=Object.getOwnPropertyNames;var Ot=Object.getPrototypeOf,Yt=Object.prototype.hasOwnProperty;var f=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Wt=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Jt(e))!Yt.call(n,o)&&o!==t&&xe(n,o,{get:()=>e[o],enumerable:!(r=Kt(e,o))||r.enumerable});return n};var $t=(n,e,t)=>(t=n!=null?jt(Ot(n)):{},Wt(e||!n||!n.__esModule?xe(t,"default",{value:n,enumerable:!0}):t,n));var He=f((Xn,De)=>{De.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}});var M=f(R=>{var ue,Xt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];R.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};R.getSymbolTotalCodewords=function(e){return Xt[e]};R.getBCHDigit=function(n){let e=0;for(;n!==0;)e++,n>>>=1;return e};R.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');ue=e};R.isKanjiModeEnabled=function(){return typeof ue<"u"};R.toSJIS=function(e){return ue(e)}});var Y=f(w=>{w.L={bit:1};w.M={bit:0};w.Q={bit:3};w.H={bit:2};function Zt(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return w.L;case"m":case"medium":return w.M;case"q":case"quartile":return w.Q;case"h":case"high":return w.H;default:throw new Error("Unknown EC Level: "+n)}}w.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4};w.from=function(e,t){if(w.isValid(e))return e;try{return Zt(e)}catch{return t}}});var ze=f((tr,Ue)=>{function ke(){this.buffer=[],this.length=0}ke.prototype={get:function(n){let e=Math.floor(n/8);return(this.buffer[e]>>>7-n%8&1)===1},put:function(n,e){for(let t=0;t<e;t++)this.putBit((n>>>e-t-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){let e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),n&&(this.buffer[e]|=128>>>this.length%8),this.length++}};Ue.exports=ke});var Qe=f((nr,Fe)=>{function k(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}k.prototype.set=function(n,e,t,r){let o=n*this.size+e;this.data[o]=t,r&&(this.reservedBit[o]=!0)};k.prototype.get=function(n,e){return this.data[n*this.size+e]};k.prototype.xor=function(n,e,t){this.data[n*this.size+e]^=t};k.prototype.isReserved=function(n,e){return this.reservedBit[n*this.size+e]};Fe.exports=k});var Ve=f(W=>{var en=M().getSymbolSize;W.getRowColCoords=function(e){if(e===1)return[];let t=Math.floor(e/7)+2,r=en(e),o=r===145?26:Math.ceil((r-13)/(2*t-2))*2,i=[r-7];for(let s=1;s<t-1;s++)i[s]=i[s-1]-o;return i.push(6),i.reverse()};W.getPositions=function(e){let t=[],r=W.getRowColCoords(e),o=r.length;for(let i=0;i<o;i++)for(let s=0;s<o;s++)i===0&&s===0||i===0&&s===o-1||i===o-1&&s===0||t.push([r[i],r[s]]);return t}});var Ke=f(je=>{var tn=M().getSymbolSize,Ge=7;je.getPositions=function(e){let t=tn(e);return[[0,0],[t-Ge,0],[0,t-Ge]]}});var Je=f(g=>{g.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var A={N1:3,N2:3,N3:40,N4:10};g.isValid=function(e){return e!=null&&e!==""&&!isNaN(e)&&e>=0&&e<=7};g.from=function(e){return g.isValid(e)?parseInt(e,10):void 0};g.getPenaltyN1=function(e){let t=e.size,r=0,o=0,i=0,s=null,a=null;for(let l=0;l<t;l++){o=i=0,s=a=null;for(let u=0;u<t;u++){let c=e.get(l,u);c===s?o++:(o>=5&&(r+=A.N1+(o-5)),s=c,o=1),c=e.get(u,l),c===a?i++:(i>=5&&(r+=A.N1+(i-5)),a=c,i=1)}o>=5&&(r+=A.N1+(o-5)),i>=5&&(r+=A.N1+(i-5))}return r};g.getPenaltyN2=function(e){let t=e.size,r=0;for(let o=0;o<t-1;o++)for(let i=0;i<t-1;i++){let s=e.get(o,i)+e.get(o,i+1)+e.get(o+1,i)+e.get(o+1,i+1);(s===4||s===0)&&r++}return r*A.N2};g.getPenaltyN3=function(e){let t=e.size,r=0,o=0,i=0;for(let s=0;s<t;s++){o=i=0;for(let a=0;a<t;a++)o=o<<1&2047|e.get(s,a),a>=10&&(o===1488||o===93)&&r++,i=i<<1&2047|e.get(a,s),a>=10&&(i===1488||i===93)&&r++}return r*A.N3};g.getPenaltyN4=function(e){let t=0,r=e.data.length;for(let i=0;i<r;i++)t+=e.data[i];return Math.abs(Math.ceil(t*100/r/5)-10)*A.N4};function nn(n,e,t){switch(n){case g.Patterns.PATTERN000:return(e+t)%2===0;case g.Patterns.PATTERN001:return e%2===0;case g.Patterns.PATTERN010:return t%3===0;case g.Patterns.PATTERN011:return(e+t)%3===0;case g.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(t/3))%2===0;case g.Patterns.PATTERN101:return e*t%2+e*t%3===0;case g.Patterns.PATTERN110:return(e*t%2+e*t%3)%2===0;case g.Patterns.PATTERN111:return(e*t%3+(e+t)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}g.applyMask=function(e,t){let r=t.size;for(let o=0;o<r;o++)for(let i=0;i<r;i++)t.isReserved(i,o)||t.xor(i,o,nn(e,i,o))};g.getBestMask=function(e,t){let r=Object.keys(g.Patterns).length,o=0,i=1/0;for(let s=0;s<r;s++){t(s),g.applyMask(s,e);let a=g.getPenaltyN1(e)+g.getPenaltyN2(e)+g.getPenaltyN3(e)+g.getPenaltyN4(e);g.applyMask(s,e),a<i&&(i=a,o=s)}return o}});var de=f(ce=>{var I=Y(),$=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],X=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ce.getBlocksCount=function(e,t){switch(t){case I.L:return $[(e-1)*4+0];case I.M:return $[(e-1)*4+1];case I.Q:return $[(e-1)*4+2];case I.H:return $[(e-1)*4+3];default:return}};ce.getTotalCodewordsCount=function(e,t){switch(t){case I.L:return X[(e-1)*4+0];case I.M:return X[(e-1)*4+1];case I.Q:return X[(e-1)*4+2];case I.H:return X[(e-1)*4+3];default:return}}});var Oe=f(ee=>{var U=new Uint8Array(512),Z=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)U[t]=e,Z[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)U[t]=U[t-255]})();ee.log=function(e){if(e<1)throw new Error("log("+e+")");return Z[e]};ee.exp=function(e){return U[e]};ee.mul=function(e,t){return e===0||t===0?0:U[Z[e]+Z[t]]}});var Ye=f(z=>{var fe=Oe();z.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let o=0;o<e.length;o++)for(let i=0;i<t.length;i++)r[o+i]^=fe.mul(e[o],t[i]);return r};z.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let o=r[0];for(let s=0;s<t.length;s++)r[s]^=fe.mul(t[s],o);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r};z.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let r=0;r<e;r++)t=z.mul(t,new Uint8Array([1,fe.exp(r)]));return t}});var Xe=f((ur,$e)=>{var We=Ye();function ge(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}ge.prototype.initialize=function(e){this.degree=e,this.genPoly=We.generateECPolynomial(this.degree)};ge.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=We.mod(t,this.genPoly),o=this.degree-r.length;if(o>0){let i=new Uint8Array(this.degree);return i.set(r,o),i}return r};$e.exports=ge});var he=f(Ze=>{Ze.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}});var pe=f(b=>{var et="[0-9]+",rn="[A-Z $%*+\\-./:]+",F="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";F=F.replace(/u/g,"\\u");var on="(?:(?![A-Z0-9 $%*+\\-./:]|"+F+`)(?:.|[\r
]))+`;b.KANJI=new RegExp(F,"g");b.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");b.BYTE=new RegExp(on,"g");b.NUMERIC=new RegExp(et,"g");b.ALPHANUMERIC=new RegExp(rn,"g");var sn=new RegExp("^"+F+"$"),an=new RegExp("^"+et+"$"),ln=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");b.testKanji=function(e){return sn.test(e)};b.testNumeric=function(e){return an.test(e)};b.testAlphanumeric=function(e){return ln.test(e)}});var L=f(p=>{var un=he(),me=pe();p.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};p.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};p.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};p.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};p.MIXED={bit:-1};p.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!un.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]};p.getBestModeForData=function(e){return me.testNumeric(e)?p.NUMERIC:me.testAlphanumeric(e)?p.ALPHANUMERIC:me.testKanji(e)?p.KANJI:p.BYTE};p.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")};p.isValid=function(e){return e&&e.bit&&e.ccBits};function cn(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return p.NUMERIC;case"alphanumeric":return p.ALPHANUMERIC;case"kanji":return p.KANJI;case"byte":return p.BYTE;default:throw new Error("Unknown mode: "+n)}}p.from=function(e,t){if(p.isValid(e))return e;try{return cn(e)}catch{return t}}});var it=f(S=>{var te=M(),dn=de(),tt=Y(),_=L(),we=he(),rt=7973,nt=te.getBCHDigit(rt);function fn(n,e,t){for(let r=1;r<=40;r++)if(e<=S.getCapacity(r,t,n))return r}function ot(n,e){return _.getCharCountIndicator(n,e)+4}function gn(n,e){let t=0;return n.forEach(function(r){let o=ot(r.mode,e);t+=o+r.getBitsLength()}),t}function hn(n,e){for(let t=1;t<=40;t++)if(gn(n,t)<=S.getCapacity(t,e,_.MIXED))return t}S.from=function(e,t){return we.isValid(e)?parseInt(e,10):t};S.getCapacity=function(e,t,r){if(!we.isValid(e))throw new Error("Invalid QR Code version");typeof r>"u"&&(r=_.BYTE);let o=te.getSymbolTotalCodewords(e),i=dn.getTotalCodewordsCount(e,t),s=(o-i)*8;if(r===_.MIXED)return s;let a=s-ot(r,e);switch(r){case _.NUMERIC:return Math.floor(a/10*3);case _.ALPHANUMERIC:return Math.floor(a/11*2);case _.KANJI:return Math.floor(a/13);case _.BYTE:default:return Math.floor(a/8)}};S.getBestVersionForData=function(e,t){let r,o=tt.from(t,tt.M);if(Array.isArray(e)){if(e.length>1)return hn(e,o);if(e.length===0)return 1;r=e[0]}else r=e;return fn(r.mode,r.getLength(),o)};S.getEncodedBits=function(e){if(!we.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;te.getBCHDigit(t)-nt>=0;)t^=rt<<te.getBCHDigit(t)-nt;return e<<12|t}});var ut=f(lt=>{var ye=M(),at=1335,pn=21522,st=ye.getBCHDigit(at);lt.getEncodedBits=function(e,t){let r=e.bit<<3|t,o=r<<10;for(;ye.getBCHDigit(o)-st>=0;)o^=at<<ye.getBCHDigit(o)-st;return(r<<10|o)^pn}});var dt=f((pr,ct)=>{var mn=L();function q(n){this.mode=mn.NUMERIC,this.data=n.toString()}q.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};q.prototype.getLength=function(){return this.data.length};q.prototype.getBitsLength=function(){return q.getBitsLength(this.data.length)};q.prototype.write=function(e){let t,r,o;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),o=parseInt(r,10),e.put(o,10);let i=this.data.length-t;i>0&&(r=this.data.substr(t),o=parseInt(r,10),e.put(o,i*3+1))};ct.exports=q});var gt=f((mr,ft)=>{var wn=L(),Ee=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function P(n){this.mode=wn.ALPHANUMERIC,this.data=n}P.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};P.prototype.getLength=function(){return this.data.length};P.prototype.getBitsLength=function(){return P.getBitsLength(this.data.length)};P.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=Ee.indexOf(this.data[t])*45;r+=Ee.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(Ee.indexOf(this.data[t]),6)};ft.exports=P});var pt=f((wr,ht)=>{var yn=L();function x(n){this.mode=yn.BYTE,typeof n=="string"?this.data=new TextEncoder().encode(n):this.data=new Uint8Array(n)}x.getBitsLength=function(e){return e*8};x.prototype.getLength=function(){return this.data.length};x.prototype.getBitsLength=function(){return x.getBitsLength(this.data.length)};x.prototype.write=function(n){for(let e=0,t=this.data.length;e<t;e++)n.put(this.data[e],8)};ht.exports=x});var wt=f((yr,mt)=>{var En=L(),Cn=M();function D(n){this.mode=En.KANJI,this.data=n}D.getBitsLength=function(e){return e*13};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(n){let e;for(e=0;e<this.data.length;e++){let t=Cn.toSJIS(this.data[e]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),n.put(t,13)}};mt.exports=D});var yt=f((Er,Ce)=>{"use strict";var Q={single_source_shortest_paths:function(n,e,t){var r={},o={};o[e]=0;var i=Q.PriorityQueue.make();i.push(e,0);for(var s,a,l,u,c,m,h,y,B;!i.empty();){s=i.pop(),a=s.value,u=s.cost,c=n[a]||{};for(l in c)c.hasOwnProperty(l)&&(m=c[l],h=u+m,y=o[l],B=typeof o[l]>"u",(B||y>h)&&(o[l]=h,i.push(l,h),r[l]=a))}if(typeof t<"u"&&typeof o[t]>"u"){var T=["Could not find a path from ",e," to ",t,"."].join("");throw new Error(T)}return r},extract_shortest_path_from_predecessor_list:function(n,e){for(var t=[],r=e,o;r;)t.push(r),o=n[r],r=n[r];return t.reverse(),t},find_path:function(n,e,t){var r=Q.single_source_shortest_paths(n,e,t);return Q.extract_shortest_path_from_predecessor_list(r,t)},PriorityQueue:{make:function(n){var e=Q.PriorityQueue,t={},r;n=n||{};for(r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t.queue=[],t.sorter=n.sorter||e.default_sorter,t},default_sorter:function(n,e){return n.cost-e.cost},push:function(n,e){var t={value:n,cost:e};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof Ce<"u"&&(Ce.exports=Q)});var Lt=f(H=>{var d=L(),bt=dt(),Bt=gt(),Tt=pt(),Mt=wt(),V=pe(),ne=M(),bn=yt();function Et(n){return unescape(encodeURIComponent(n)).length}function G(n,e,t){let r=[],o;for(;(o=n.exec(t))!==null;)r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function It(n){let e=G(V.NUMERIC,d.NUMERIC,n),t=G(V.ALPHANUMERIC,d.ALPHANUMERIC,n),r,o;return ne.isKanjiModeEnabled()?(r=G(V.BYTE,d.BYTE,n),o=G(V.KANJI,d.KANJI,n)):(r=G(V.BYTE_KANJI,d.BYTE,n),o=[]),e.concat(t,r,o).sort(function(s,a){return s.index-a.index}).map(function(s){return{data:s.data,mode:s.mode,length:s.length}})}function be(n,e){switch(e){case d.NUMERIC:return bt.getBitsLength(n);case d.ALPHANUMERIC:return Bt.getBitsLength(n);case d.KANJI:return Mt.getBitsLength(n);case d.BYTE:return Tt.getBitsLength(n)}}function Bn(n){return n.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function Tn(n){let e=[];for(let t=0;t<n.length;t++){let r=n[t];switch(r.mode){case d.NUMERIC:e.push([r,{data:r.data,mode:d.ALPHANUMERIC,length:r.length},{data:r.data,mode:d.BYTE,length:r.length}]);break;case d.ALPHANUMERIC:e.push([r,{data:r.data,mode:d.BYTE,length:r.length}]);break;case d.KANJI:e.push([r,{data:r.data,mode:d.BYTE,length:Et(r.data)}]);break;case d.BYTE:e.push([{data:r.data,mode:d.BYTE,length:Et(r.data)}])}}return e}function Mn(n,e){let t={},r={start:{}},o=["start"];for(let i=0;i<n.length;i++){let s=n[i],a=[];for(let l=0;l<s.length;l++){let u=s[l],c=""+i+l;a.push(c),t[c]={node:u,lastCount:0},r[c]={};for(let m=0;m<o.length;m++){let h=o[m];t[h]&&t[h].node.mode===u.mode?(r[h][c]=be(t[h].lastCount+u.length,u.mode)-be(t[h].lastCount,u.mode),t[h].lastCount+=u.length):(t[h]&&(t[h].lastCount=u.length),r[h][c]=be(u.length,u.mode)+4+d.getCharCountIndicator(u.mode,e))}}o=a}for(let i=0;i<o.length;i++)r[o[i]].end=0;return{map:r,table:t}}function Ct(n,e){let t,r=d.getBestModeForData(n);if(t=d.from(e,r),t!==d.BYTE&&t.bit<r.bit)throw new Error('"'+n+'" cannot be encoded with mode '+d.toString(t)+`.
 Suggested mode is: `+d.toString(r));switch(t===d.KANJI&&!ne.isKanjiModeEnabled()&&(t=d.BYTE),t){case d.NUMERIC:return new bt(n);case d.ALPHANUMERIC:return new Bt(n);case d.KANJI:return new Mt(n);case d.BYTE:return new Tt(n)}}H.fromArray=function(e){return e.reduce(function(t,r){return typeof r=="string"?t.push(Ct(r,null)):r.data&&t.push(Ct(r.data,r.mode)),t},[])};H.fromString=function(e,t){let r=It(e,ne.isKanjiModeEnabled()),o=Tn(r),i=Mn(o,t),s=bn.find_path(i.map,"start","end"),a=[];for(let l=1;l<s.length-1;l++)a.push(i.table[s[l]].node);return H.fromArray(Bn(a))};H.rawSplit=function(e){return H.fromArray(It(e,ne.isKanjiModeEnabled()))}});var Rt=f(_t=>{var oe=M(),Be=Y(),In=ze(),Ln=Qe(),_n=Ve(),Rn=Ke(),Ie=Je(),Le=de(),An=Xe(),re=it(),Sn=ut(),Nn=L(),Te=Lt();function vn(n,e){let t=n.size,r=Rn.getPositions(e);for(let o=0;o<r.length;o++){let i=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||t<=i+a))for(let l=-1;l<=7;l++)s+l<=-1||t<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?n.set(i+a,s+l,!0,!0):n.set(i+a,s+l,!1,!0))}}function qn(n){let e=n.size;for(let t=8;t<e-8;t++){let r=t%2===0;n.set(t,6,r,!0),n.set(6,t,r,!0)}}function Pn(n,e){let t=_n.getPositions(e);for(let r=0;r<t.length;r++){let o=t[r][0],i=t[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?n.set(o+s,i+a,!0,!0):n.set(o+s,i+a,!1,!0)}}function xn(n,e){let t=n.size,r=re.getEncodedBits(e),o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+t-8-3,s=(r>>a&1)===1,n.set(o,i,s,!0),n.set(i,o,s,!0)}function Me(n,e,t){let r=n.size,o=Sn.getEncodedBits(e,t),i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?n.set(i,8,s,!0):i<8?n.set(i+1,8,s,!0):n.set(r-15+i,8,s,!0),i<8?n.set(8,r-i-1,s,!0):i<9?n.set(8,15-i-1+1,s,!0):n.set(8,15-i-1,s,!0);n.set(r-8,8,1,!0)}function Dn(n,e){let t=n.size,r=-1,o=t-1,i=7,s=0;for(let a=t-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!n.isReserved(o,a-l)){let u=!1;s<e.length&&(u=(e[s]>>>i&1)===1),n.set(o,a-l,u),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||t<=o){o-=r,r=-r;break}}}function Hn(n,e,t){let r=new In;t.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),Nn.getCharCountIndicator(l.mode,n)),l.write(r)});let o=oe.getSymbolTotalCodewords(n),i=Le.getTotalCodewordsCount(n,e),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);let a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return kn(r,n,e)}function kn(n,e,t){let r=oe.getSymbolTotalCodewords(e),o=Le.getTotalCodewordsCount(e,t),i=r-o,s=Le.getBlocksCount(e,t),a=r%s,l=s-a,u=Math.floor(r/s),c=Math.floor(i/s),m=c+1,h=u-c,y=new An(h),B=0,T=new Array(s),qe=new Array(s),se=0,Gt=new Uint8Array(n.buffer);for(let v=0;v<s;v++){let le=v<l?c:m;T[v]=Gt.slice(B,B+le),qe[v]=y.encode(T[v]),B+=le,se=Math.max(se,le)}let ae=new Uint8Array(r),Pe=0,E,C;for(E=0;E<se;E++)for(C=0;C<s;C++)E<T[C].length&&(ae[Pe++]=T[C][E]);for(E=0;E<h;E++)for(C=0;C<s;C++)ae[Pe++]=qe[C][E];return ae}function Un(n,e,t,r){let o;if(Array.isArray(n))o=Te.fromArray(n);else if(typeof n=="string"){let u=e;if(!u){let c=Te.rawSplit(n);u=re.getBestVersionForData(c,t)}o=Te.fromString(n,u||40)}else throw new Error("Invalid data");let i=re.getBestVersionForData(o,t);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);let s=Hn(e,t,o),a=oe.getSymbolSize(e),l=new Ln(a);return vn(l,e),qn(l),Pn(l,e),Me(l,t,0),e>=7&&xn(l,e),Dn(l,s),isNaN(r)&&(r=Ie.getBestMask(l,Me.bind(null,l,t))),Ie.applyMask(r,l),Me(l,t,r),{modules:l,version:e,errorCorrectionLevel:t,maskPattern:r,segments:o}}_t.create=function(e,t){if(typeof e>"u"||e==="")throw new Error("No input text");let r=Be.M,o,i;return typeof t<"u"&&(r=Be.from(t.errorCorrectionLevel,Be.M),o=re.from(t.version),i=Ie.from(t.maskPattern),t.toSJISFunc&&oe.setToSJISFunction(t.toSJISFunc)),Un(e,o,r,i)}});var _e=f(N=>{function At(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let e=n.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+n);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(r){return[r,r]}))),e.length===6&&e.push("F","F");let t=parseInt(e.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+e.slice(0,6).join("")}}N.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=typeof e.margin>"u"||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,o=e.scale||4;return{width:r,scale:r?4:o,margin:t,color:{dark:At(e.color.dark||"#000000ff"),light:At(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}};N.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale};N.getImageWidth=function(e,t){let r=N.getScale(e,t);return Math.floor((e+t.margin*2)*r)};N.qrToImageData=function(e,t,r){let o=t.modules.size,i=t.modules.data,s=N.getScale(o,r),a=Math.floor((o+r.margin*2)*s),l=r.margin*s,u=[r.color.light,r.color.dark];for(let c=0;c<a;c++)for(let m=0;m<a;m++){let h=(c*a+m)*4,y=r.color.light;if(c>=l&&m>=l&&c<a-l&&m<a-l){let B=Math.floor((c-l)/s),T=Math.floor((m-l)/s);y=u[i[B*o+T]?1:0]}e[h++]=y.r,e[h++]=y.g,e[h++]=y.b,e[h]=y.a}}});var St=f(ie=>{var Re=_e();function zn(n,e,t){n.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=t,e.width=t,e.style.height=t+"px",e.style.width=t+"px"}function Fn(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}ie.render=function(e,t,r){let o=r,i=t;typeof o>"u"&&(!t||!t.getContext)&&(o=t,t=void 0),t||(i=Fn()),o=Re.getOptions(o);let s=Re.getImageWidth(e.modules.size,o),a=i.getContext("2d"),l=a.createImageData(s,s);return Re.qrToImageData(l.data,e,o),zn(a,i,s),a.putImageData(l,0,0),i};ie.renderToDataURL=function(e,t,r){let o=r;typeof o>"u"&&(!t||!t.getContext)&&(o=t,t=void 0),o||(o={});let i=ie.render(e,t,o),s=o.type||"image/png",a=o.rendererOpts||{};return i.toDataURL(s,a.quality)}});var qt=f(vt=>{var Qn=_e();function Nt(n,e){let t=n.a/255,r=e+'="'+n.hex+'"';return t<1?r+" "+e+'-opacity="'+t.toFixed(2).slice(1)+'"':r}function Ae(n,e,t){let r=n+e;return typeof t<"u"&&(r+=" "+t),r}function Vn(n,e,t){let r="",o=0,i=!1,s=0;for(let a=0;a<n.length;a++){let l=Math.floor(a%e),u=Math.floor(a/e);!l&&!i&&(i=!0),n[a]?(s++,a>0&&l>0&&n[a-1]||(r+=i?Ae("M",l+t,.5+u+t):Ae("m",o,0),o=0,i=!1),l+1<e&&n[a+1]||(r+=Ae("h",s),s=0)):o++}return r}vt.render=function(e,t,r){let o=Qn.getOptions(t),i=e.modules.size,s=e.modules.data,a=i+o.margin*2,l=o.color.light.a?"<path "+Nt(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+Nt(o.color.dark,"stroke")+' d="'+Vn(s,i,o.margin)+'"/>',c='viewBox="0 0 '+a+" "+a+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+c+' shape-rendering="crispEdges">'+l+u+`</svg>
`;return typeof r=="function"&&r(null,h),h}});var xt=f(j=>{var Gn=He(),Se=Rt(),Pt=St(),jn=qt();function Ne(n,e,t,r,o){let i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!Gn())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=t,t=e,e=r=void 0):s===3&&(e.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=t,t=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(t=e,e=r=void 0):s===2&&!e.getContext&&(r=t,t=e,e=void 0),new Promise(function(l,u){try{let c=Se.create(t,r);l(n(c,e,r))}catch(c){u(c)}})}try{let l=Se.create(t,r);o(null,n(l,e,r))}catch(l){o(l)}}j.create=Se.create;j.toCanvas=Ne.bind(null,Pt.render);j.toDataURL=Ne.bind(null,Pt.renderToDataURL);j.toString=Ne.bind(null,function(n,e,t){return jn.render(n,t)})});var ve=$t(xt());var Dt=n=>{try{return new URL(n),!0}catch{return!1}},Ht=(n,e)=>{let r=new URLSearchParams(window.location.search).get("lang");if(r&&n.includes(r))return r;let o=navigator.language.substring(0,2);return n.includes(o)?o:e};var K=class{#e;#o;#t;#n;#r;#s;#i;#a;#d;#c;#l;#u;constructor(){this.init(),this.qrcode_creator_handler(),this.qrcode_type_handler(),this.qrcode_downloader_handler()}init(){this.#s=document.forms.generateQRCode,this.#d=document.getElementById("qrcode__type"),this.#c=document.getElementById("qrcode__width"),this.#l=document.getElementById("qrcode__error"),this.#i=document.getElementById("qrcode__container"),this.#a=document.getElementById("qrcode__downloader")?.querySelector("button")}initialize(){this.#l.innerHTML="",this.#i.innerHTML=""}qrcode_creator_handler(){let e={printSVG:this.printSVG.bind(this),printIMG:this.printIMG.bind(this)};this.#s?.addEventListener("submit",t=>{t.preventDefault(),this.initialize();try{let r=t.target,o=r[2],i=r[1],s=r[0];if(!s.checkValidity())throw new Error(s.validationMessage);if(this.#i.innerHTML="",this.#o=Number(o.value)||512,this.#t=i.value||"SVG",this.#n=i.options[i.selectedIndex].dataset.function,this.#e=s.value??"",!Dt(this.#e))throw new Error("Please enter a valid url.");let a=e[this.#n];if(a)a();else throw new Error("Function was not found.")}catch(r){this.#l.innerHTML=r.message}})}qrcode_type_handler(){this.#s.elements[1].addEventListener("change",e=>{let t=e.target;this.#c.hidden=t.value==="svg"})}qrcode_downloader_handler(){new MutationObserver(()=>{this.#a.hidden=this.#i.innerHTML.trim()===""}).observe(this.#i,{childList:!0,subtree:!0,characterData:!0}),this.#a?.addEventListener("click",t=>{let r=document.createElement("a");r.href=this.#u,r.download="QR-Code."+this.#t,r.click()})}printSVG(){ve.default.toString(this.#e,{type:"svg"},(e,t)=>{if(e)throw e;this.initialize();let r=new Blob([t],{type:"image/svg+xml;charset=utf-8"});this.#u=URL.createObjectURL(r),this.#r=t,this.#i.insertAdjacentHTML("beforeend",t)})}printIMG(){ve.default.toDataURL(this.#e,{width:this.#o,type:`image/${this.#t}`},(e,t)=>{if(e)throw e;this.initialize(),this.#u=t,this.#r=new Image,this.#r.src=t,this.#i.appendChild(this.#r)})}};var kt={documentTitle:"QR-Code Generator by partez",lang:"Language",title:"Welcome to partez's QR-Code free generator!",intro:"Here you can easily create and download your QR-Code without having to sign in or paying something. <strong>It's free</strong>, <strong>no account is required</strong>, and <strong>it will always be this way</strong>.",format:"Image's&nbsp;format:",width:"Width",generate:"Generate QR-Code",download:"Download",coded:"Coded with \u{1F49A} by",generated:'This interface use the <a href="https://www.npmjs.com/package/qrcode">node-qrcode</a> package to generate the QR-Code.'};var Ut={documentTitle:"QR-Code-Generator von partez",lang:"Sprache",title:"Willkommen beim kostenlosen QR-Code-Generator von partez",intro:"Hier k\xF6nnen Sie Ihren QR-Code ganz einfach erstellen und herunterladen, ohne sich anmelden oder etwas bezahlen zu m\xFCssen. <strong>Es ist kostenlos</strong>, <strong>es ist kein Konto erforderlich</strong> und <strong>das wird immer so bleiben</strong>.",format:"Bildformat:",width:"Breite",generate:"QR-Code generieren",download:"Herunterladen",coded:"Codiert mit \u{1F49A} von",generated:'Diese Schnittstelle verwendet das Paket <a href="https://www.npmjs.com/package/qrcode">node-qrcode</a>, um den QR-Code zu generieren.'};var zt={documentTitle:"G\xE9n\xE9rateur QR-Code par partez",lang:"Langue",title:"Bienvenue sur le g\xE9n\xE9rateur de QR-Code par partez !",intro:"Ici, vous pouvez facilement cr\xE9er et t\xE9l\xE9charger votre code QR sans avoir \xE0 vous connecter ni \xE0 payer quoi que ce soit. <strong>C'est gratuit</strong>, <strong>aucun compte n'est requis</strong>, et <strong>\xE7a sera toujours le cas !</strong>",format:"Format de l'image&nbsp;:",width:"Largeur&nbsp;:",generate:"G\xE9n\xE9rer le QR-Code",download:"T\xE9l\xE9charger",coded:"Cod\xE9 avec \u{1F49A} par",generated:'This interface use the <a href="https://www.npmjs.com/package/qrcode">node-qrcode</a> package to generate the QR-Code.'};var Ft={documentTitle:"Generador de c\xF3digos QR de partez",lang:"Idioma",title:"Bienvenido al generador gratuito de c\xF3digos QR de partez",intro:"Aqu\xED puede crear y descargar f\xE1cilmente su c\xF3digo QR sin tener que iniciar sesi\xF3n ni pagar nada. <strong>Es gratis</strong>, <strong>no se requiere una cuenta</strong> y <strong>siempre ser\xE1 as\xED</strong>.",format:"Formato de la imagen:",width:"Ancho",generate:"Generar c\xF3digo QR",download:"Descargar",coded:"Codificado con \u{1F49A} por",generated:'Esta interfaz utiliza el paquete <a href="https://www.npmjs.com/package/qrcode">node-qrcode</a> para generar el c\xF3digo QR.'};var Qt={documentTitle:"Gerador de QR-Code da partez",lang:"Idioma",title:"Bem-vindo ao gerador gratuito de QR-Code da partez",intro:"Aqui voc\xEA pode facilmente criar e baixar seu QR-Code sem precisar fazer login ou pagar nada. <strong>\xC9 gr\xE1tis</strong>, <strong>nenhuma conta \xE9 necess\xE1ria</strong> e <strong>sempre ser\xE1 assim</strong>.",format:"Formato da imagem:",width:"Largura",generate:"Gerar QR-Code",download:"Baixar",coded:"Codificado com \u{1F49A} por",generated:'Esta interface usa o pacote <a href="https://www.npmjs.com/package/qrcode">node-qrcode</a> para gerar o C\xF3digo QR.'};var Vt=`
<header>
    <form method="get" id="changeLang" class="flex_end">
        <div class="input_group" id="selectLang">
            <label for="lang">{{ lang }}</label>
            <select name="lang" onmousedown="(function(e){ e.preventDefault(); })(event, this)">
                <option value="en"></option>
                <option value="de"></option>
                <option value="fr"></option>
                <option value="es"></option>
                <option value="pt"></option>
            </select>
        </div>
    </form>
    <h1>{{ title }}</h1>
    <p>{{ intro }}</p>
</header>
<section>
    <form novalidate id="generateQRCode" class="flex_center">
        <div>
            <input type="url" name="url" placeholder="https://qrcode.partez.net" required />
            <p class="input_error" id="qrcode__error"></p>
        </div>
        <div class="input__main">
            <div class="input_group" id="qrcode__type">
                <label for="format">{{ format }}</label>
                <select name="format">
                    <option data-function="printSVG" value="svg">SVG</option>
                    <option data-function="printIMG" value="png">PNG</option>
                    <option data-function="printIMG" value="jpeg">JPG</option>
                    <option data-function="printIMG" value="webp">Webp</option>
                </select>
            </div>
            <div id="qrcode__width" hidden>
                <div class="input_group">
                    <label for="width">{{ width }}</label>
                    <input name="width" type="number" min="0" max="512" value="512" />
                    <p>px</p>
                </div>
            </div>
        </div>
        <button type="submit">{{ generate }}</button>
    </form>
    <div id="qrcode__container"></div>
    <div id="qrcode__downloader">
        <button type="button" hidden>{{ download }}</button>
    </div>
</section>
<footer class="flex_center">
    <div>
        {{ coded }} <a href="mailto:abollinger@partez.net">Antoine Bollinger</a>&nbsp;|&nbsp;
        <a href="https://github.com/Antoine-Bollinger/qrcode"><i class="fa-brands fa-github"></i></a>&nbsp;|&nbsp;
        <a href="https://www.linkedin.com/in/antoinebollinger/"><i
                class="fa-brands fa-linkedin"></i></a>&nbsp;|&nbsp;
        <a href="https://partez.net">partez.net</a>
    </div>
    <div>
        <em><small>{{ generated }}</small></em>
    </div>
</footer>
<dialog>
    <div class="dialog__body">
        <div>
            <p class="close_input"><span class="flex">X</span></p>
            <br>
            <form class="flex_start">
                <div class="flex">
                    <input type="radio" name="lang" value="en" id="en" onchange="this.form.submit()" />
                    <label for="en">English</label>
                </div>
                <div class="flex">
                    <input type="radio" name="lang" value="de" id="de" onchange="this.form.submit()" />
                    <label for="de">Deutsch</label>
                </div>
                <div class="flex">
                    <input type="radio" name="lang" value="fr" id="fr" onchange="this.form.submit()" />
                    <label for="fr">Fran\xE7ais</label>
                </div>
                <div class="flex">
                    <input type="radio" name="lang" value="es" id="es" onchange="this.form.submit()" />
                    <label for="es">Espa\xF1ol</label>
                </div>
                <div class="flex">
                    <input type="radio" name="lang" value="pt" id="pt" onchange="this.form.submit()" />
                    <label for="pt">Portugu\xEAs</label>
                </div>
            </form>
        </div>
    </div>
</dialog>
`;var J=class{#e;#o=/{{(.*?)}}/g;#t={en:kt,de:Ut,fr:zt,es:Ft,pt:Qt};#n;#r;constructor(){this.setLang(),this.generateHtml(),this.setSelectedLang()}setLang(){this.#n=Ht(Object.keys(this.#t),"en"),this.#r=this.#t[this.#n.substring(0,2)]}generateHtml(){let e=Vt.replace(this.#o,(t,r)=>{let o=this.#r[r.trim()];return o!==void 0?o:t});document.title=this.#r.documentTitle,document.body.innerHTML=e}setSelectedLang(){this.#e=document.forms.changeLang.elements.lang;let e=[...this.#e.options].findIndex(r=>r.value===this.#n);this.#e.options[e].selected=!0,document.documentElement.lang=this.#n;let t=document.querySelector(`input[type="radio"][value="${this.#n}"]`);t.checked=!0}};var O=class{#e;#o;#t;constructor(){this.#e=document.querySelector("dialog"),this.#o=document.getElementById("selectLang"),this.#t=document.querySelector("p.close_input"),this.modal_handler()}modal_handler(){this.#o?.addEventListener("click",e=>{e.preventDefault(),this.#e?.showModal()}),this.#t?.addEventListener("click",e=>{e.preventDefault(),this.#e?.close()})}};window.onload=()=>{new J,new O,new K};})();
