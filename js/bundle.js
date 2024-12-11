(()=>{var De=Object.create;var qt=Object.defineProperty;var Fe=Object.getOwnPropertyDescriptor;var He=Object.getOwnPropertyNames;var ke=Object.getPrototypeOf,Ve=Object.prototype.hasOwnProperty;var d=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var ze=(n,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of He(t))!Ve.call(n,o)&&o!==e&&qt(n,o,{get:()=>t[o],enumerable:!(r=Fe(t,o))||r.enumerable});return n};var Ke=(n,t,e)=>(e=n!=null?De(ke(n)):{},ze(t||!n||!n.__esModule?qt(e,"default",{value:n,enumerable:!0}):e,n));var xt=d((Hn,Ut)=>{Ut.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}});var I=d(b=>{var ut,Je=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];b.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};b.getSymbolTotalCodewords=function(t){return Je[t]};b.getBCHDigit=function(n){let t=0;for(;n!==0;)t++,n>>>=1;return t};b.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ut=t};b.isKanjiModeEnabled=function(){return typeof ut<"u"};b.toSJIS=function(t){return ut(t)}});var G=d(w=>{w.L={bit:1};w.M={bit:0};w.Q={bit:3};w.H={bit:2};function ve(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return w.L;case"m":case"medium":return w.M;case"q":case"quartile":return w.Q;case"h":case"high":return w.H;default:throw new Error("Unknown EC Level: "+n)}}w.isValid=function(t){return t&&typeof t.bit<"u"&&t.bit>=0&&t.bit<4};w.from=function(t,e){if(w.isValid(t))return t;try{return ve(t)}catch{return e}}});var Ht=d((zn,Ft)=>{function Dt(){this.buffer=[],this.length=0}Dt.prototype={get:function(n){let t=Math.floor(n/8);return(this.buffer[t]>>>7-n%8&1)===1},put:function(n,t){for(let e=0;e<t;e++)this.putBit((n>>>t-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),n&&(this.buffer[t]|=128>>>this.length%8),this.length++}};Ft.exports=Dt});var Vt=d((Kn,kt)=>{function H(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}H.prototype.set=function(n,t,e,r){let o=n*this.size+t;this.data[o]=e,r&&(this.reservedBit[o]=!0)};H.prototype.get=function(n,t){return this.data[n*this.size+t]};H.prototype.xor=function(n,t,e){this.data[n*this.size+t]^=e};H.prototype.isReserved=function(n,t){return this.reservedBit[n*this.size+t]};kt.exports=H});var zt=d(j=>{var Oe=I().getSymbolSize;j.getRowColCoords=function(t){if(t===1)return[];let e=Math.floor(t/7)+2,r=Oe(t),o=r===145?26:Math.ceil((r-13)/(2*e-2))*2,i=[r-7];for(let s=1;s<e-1;s++)i[s]=i[s-1]-o;return i.push(6),i.reverse()};j.getPositions=function(t){let e=[],r=j.getRowColCoords(t),o=r.length;for(let i=0;i<o;i++)for(let s=0;s<o;s++)i===0&&s===0||i===0&&s===o-1||i===o-1&&s===0||e.push([r[i],r[s]]);return e}});var vt=d(Jt=>{var Ye=I().getSymbolSize,Kt=7;Jt.getPositions=function(t){let e=Ye(t);return[[0,0],[e-Kt,0],[0,e-Kt]]}});var Ot=d(h=>{h.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var S={N1:3,N2:3,N3:40,N4:10};h.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7};h.from=function(t){return h.isValid(t)?parseInt(t,10):void 0};h.getPenaltyN1=function(t){let e=t.size,r=0,o=0,i=0,s=null,u=null;for(let c=0;c<e;c++){o=i=0,s=u=null;for(let l=0;l<e;l++){let a=t.get(c,l);a===s?o++:(o>=5&&(r+=S.N1+(o-5)),s=a,o=1),a=t.get(l,c),a===u?i++:(i>=5&&(r+=S.N1+(i-5)),u=a,i=1)}o>=5&&(r+=S.N1+(o-5)),i>=5&&(r+=S.N1+(i-5))}return r};h.getPenaltyN2=function(t){let e=t.size,r=0;for(let o=0;o<e-1;o++)for(let i=0;i<e-1;i++){let s=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);(s===4||s===0)&&r++}return r*S.N2};h.getPenaltyN3=function(t){let e=t.size,r=0,o=0,i=0;for(let s=0;s<e;s++){o=i=0;for(let u=0;u<e;u++)o=o<<1&2047|t.get(s,u),u>=10&&(o===1488||o===93)&&r++,i=i<<1&2047|t.get(u,s),u>=10&&(i===1488||i===93)&&r++}return r*S.N3};h.getPenaltyN4=function(t){let e=0,r=t.data.length;for(let i=0;i<r;i++)e+=t.data[i];return Math.abs(Math.ceil(e*100/r/5)-10)*S.N4};function Ge(n,t,e){switch(n){case h.Patterns.PATTERN000:return(t+e)%2===0;case h.Patterns.PATTERN001:return t%2===0;case h.Patterns.PATTERN010:return e%3===0;case h.Patterns.PATTERN011:return(t+e)%3===0;case h.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(e/3))%2===0;case h.Patterns.PATTERN101:return t*e%2+t*e%3===0;case h.Patterns.PATTERN110:return(t*e%2+t*e%3)%2===0;case h.Patterns.PATTERN111:return(t*e%3+(t+e)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}h.applyMask=function(t,e){let r=e.size;for(let o=0;o<r;o++)for(let i=0;i<r;i++)e.isReserved(i,o)||e.xor(i,o,Ge(t,i,o))};h.getBestMask=function(t,e){let r=Object.keys(h.Patterns).length,o=0,i=1/0;for(let s=0;s<r;s++){e(s),h.applyMask(s,t);let u=h.getPenaltyN1(t)+h.getPenaltyN2(t)+h.getPenaltyN3(t)+h.getPenaltyN4(t);h.applyMask(s,t),u<i&&(i=u,o=s)}return o}});var lt=d(ct=>{var A=G(),Q=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],$=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ct.getBlocksCount=function(t,e){switch(e){case A.L:return Q[(t-1)*4+0];case A.M:return Q[(t-1)*4+1];case A.Q:return Q[(t-1)*4+2];case A.H:return Q[(t-1)*4+3];default:return}};ct.getTotalCodewordsCount=function(t,e){switch(e){case A.L:return $[(t-1)*4+0];case A.M:return $[(t-1)*4+1];case A.Q:return $[(t-1)*4+2];case A.H:return $[(t-1)*4+3];default:return}}});var Yt=d(Z=>{var k=new Uint8Array(512),W=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)k[e]=t,W[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)k[e]=k[e-255]})();Z.log=function(t){if(t<1)throw new Error("log("+t+")");return W[t]};Z.exp=function(t){return k[t]};Z.mul=function(t,e){return t===0||e===0?0:k[W[t]+W[e]]}});var Gt=d(V=>{var at=Yt();V.mul=function(t,e){let r=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)r[o+i]^=at.mul(t[o],e[i]);return r};V.mod=function(t,e){let r=new Uint8Array(t);for(;r.length-e.length>=0;){let o=r[0];for(let s=0;s<e.length;s++)r[s]^=at.mul(e[s],o);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r};V.generateECPolynomial=function(t){let e=new Uint8Array([1]);for(let r=0;r<t;r++)e=V.mul(e,new Uint8Array([1,at.exp(r)]));return e}});var $t=d((Qn,Qt)=>{var jt=Gt();function ft(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}ft.prototype.initialize=function(t){this.degree=t,this.genPoly=jt.generateECPolynomial(this.degree)};ft.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");let e=new Uint8Array(t.length+this.degree);e.set(t);let r=jt.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){let i=new Uint8Array(this.degree);return i.set(r,o),i}return r};Qt.exports=ft});var dt=d(Wt=>{Wt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}});var ht=d(B=>{var Zt="[0-9]+",je="[A-Z $%*+\\-./:]+",z="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";z=z.replace(/u/g,"\\u");var Qe="(?:(?![A-Z0-9 $%*+\\-./:]|"+z+`)(?:.|[\r
]))+`;B.KANJI=new RegExp(z,"g");B.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");B.BYTE=new RegExp(Qe,"g");B.NUMERIC=new RegExp(Zt,"g");B.ALPHANUMERIC=new RegExp(je,"g");var $e=new RegExp("^"+z+"$"),We=new RegExp("^"+Zt+"$"),Ze=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");B.testKanji=function(t){return $e.test(t)};B.testNumeric=function(t){return We.test(t)};B.testAlphanumeric=function(t){return Ze.test(t)}});var N=d(p=>{var Xe=dt(),gt=ht();p.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};p.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};p.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};p.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};p.MIXED={bit:-1};p.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!Xe.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]};p.getBestModeForData=function(t){return gt.testNumeric(t)?p.NUMERIC:gt.testAlphanumeric(t)?p.ALPHANUMERIC:gt.testKanji(t)?p.KANJI:p.BYTE};p.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")};p.isValid=function(t){return t&&t.bit&&t.ccBits};function tn(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return p.NUMERIC;case"alphanumeric":return p.ALPHANUMERIC;case"kanji":return p.KANJI;case"byte":return p.BYTE;default:throw new Error("Unknown mode: "+n)}}p.from=function(t,e){if(p.isValid(t))return t;try{return tn(t)}catch{return e}}});var re=d(P=>{var X=I(),en=lt(),Xt=G(),L=N(),pt=dt(),ee=7973,te=X.getBCHDigit(ee);function nn(n,t,e){for(let r=1;r<=40;r++)if(t<=P.getCapacity(r,e,n))return r}function ne(n,t){return L.getCharCountIndicator(n,t)+4}function rn(n,t){let e=0;return n.forEach(function(r){let o=ne(r.mode,t);e+=o+r.getBitsLength()}),e}function on(n,t){for(let e=1;e<=40;e++)if(rn(n,e)<=P.getCapacity(e,t,L.MIXED))return e}P.from=function(t,e){return pt.isValid(t)?parseInt(t,10):e};P.getCapacity=function(t,e,r){if(!pt.isValid(t))throw new Error("Invalid QR Code version");typeof r>"u"&&(r=L.BYTE);let o=X.getSymbolTotalCodewords(t),i=en.getTotalCodewordsCount(t,e),s=(o-i)*8;if(r===L.MIXED)return s;let u=s-ne(r,t);switch(r){case L.NUMERIC:return Math.floor(u/10*3);case L.ALPHANUMERIC:return Math.floor(u/11*2);case L.KANJI:return Math.floor(u/13);case L.BYTE:default:return Math.floor(u/8)}};P.getBestVersionForData=function(t,e){let r,o=Xt.from(e,Xt.M);if(Array.isArray(t)){if(t.length>1)return on(t,o);if(t.length===0)return 1;r=t[0]}else r=t;return nn(r.mode,r.getLength(),o)};P.getEncodedBits=function(t){if(!pt.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;X.getBCHDigit(e)-te>=0;)e^=ee<<X.getBCHDigit(e)-te;return t<<12|e}});var ue=d(se=>{var mt=I(),ie=1335,sn=21522,oe=mt.getBCHDigit(ie);se.getEncodedBits=function(t,e){let r=t.bit<<3|e,o=r<<10;for(;mt.getBCHDigit(o)-oe>=0;)o^=ie<<mt.getBCHDigit(o)-oe;return(r<<10|o)^sn}});var le=d((er,ce)=>{var un=N();function q(n){this.mode=un.NUMERIC,this.data=n.toString()}q.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};q.prototype.getLength=function(){return this.data.length};q.prototype.getBitsLength=function(){return q.getBitsLength(this.data.length)};q.prototype.write=function(t){let e,r,o;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),o=parseInt(r,10),t.put(o,10);let i=this.data.length-e;i>0&&(r=this.data.substr(e),o=parseInt(r,10),t.put(o,i*3+1))};ce.exports=q});var fe=d((nr,ae)=>{var cn=N(),wt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function U(n){this.mode=cn.ALPHANUMERIC,this.data=n}U.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=wt.indexOf(this.data[e])*45;r+=wt.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(wt.indexOf(this.data[e]),6)};ae.exports=U});var he=d((rr,de)=>{var ln=N();function x(n){this.mode=ln.BYTE,typeof n=="string"?this.data=new TextEncoder().encode(n):this.data=new Uint8Array(n)}x.getBitsLength=function(t){return t*8};x.prototype.getLength=function(){return this.data.length};x.prototype.getBitsLength=function(){return x.getBitsLength(this.data.length)};x.prototype.write=function(n){for(let t=0,e=this.data.length;t<e;t++)n.put(this.data[t],8)};de.exports=x});var pe=d((or,ge)=>{var an=N(),fn=I();function D(n){this.mode=an.KANJI,this.data=n}D.getBitsLength=function(t){return t*13};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(n){let t;for(t=0;t<this.data.length;t++){let e=fn.toSJIS(this.data[t]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),n.put(e,13)}};ge.exports=D});var me=d((ir,Et)=>{"use strict";var K={single_source_shortest_paths:function(n,t,e){var r={},o={};o[t]=0;var i=K.PriorityQueue.make();i.push(t,0);for(var s,u,c,l,a,m,g,E,T;!i.empty();){s=i.pop(),u=s.value,l=s.cost,a=n[u]||{};for(c in a)a.hasOwnProperty(c)&&(m=a[c],g=l+m,E=o[c],T=typeof o[c]>"u",(T||E>g)&&(o[c]=g,i.push(c,g),r[c]=u))}if(typeof e<"u"&&typeof o[e]>"u"){var M=["Could not find a path from ",t," to ",e,"."].join("");throw new Error(M)}return r},extract_shortest_path_from_predecessor_list:function(n,t){for(var e=[],r=t,o;r;)e.push(r),o=n[r],r=n[r];return e.reverse(),e},find_path:function(n,t,e){var r=K.single_source_shortest_paths(n,t,e);return K.extract_shortest_path_from_predecessor_list(r,e)},PriorityQueue:{make:function(n){var t=K.PriorityQueue,e={},r;n=n||{};for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e.queue=[],e.sorter=n.sorter||t.default_sorter,e},default_sorter:function(n,t){return n.cost-t.cost},push:function(n,t){var e={value:n,cost:t};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof Et<"u"&&(Et.exports=K)});var Ie=d(F=>{var f=N(),ye=le(),Ce=fe(),Be=he(),Te=pe(),J=ht(),tt=I(),dn=me();function we(n){return unescape(encodeURIComponent(n)).length}function v(n,t,e){let r=[],o;for(;(o=n.exec(e))!==null;)r.push({data:o[0],index:o.index,mode:t,length:o[0].length});return r}function Me(n){let t=v(J.NUMERIC,f.NUMERIC,n),e=v(J.ALPHANUMERIC,f.ALPHANUMERIC,n),r,o;return tt.isKanjiModeEnabled()?(r=v(J.BYTE,f.BYTE,n),o=v(J.KANJI,f.KANJI,n)):(r=v(J.BYTE_KANJI,f.BYTE,n),o=[]),t.concat(e,r,o).sort(function(s,u){return s.index-u.index}).map(function(s){return{data:s.data,mode:s.mode,length:s.length}})}function yt(n,t){switch(t){case f.NUMERIC:return ye.getBitsLength(n);case f.ALPHANUMERIC:return Ce.getBitsLength(n);case f.KANJI:return Te.getBitsLength(n);case f.BYTE:return Be.getBitsLength(n)}}function hn(n){return n.reduce(function(t,e){let r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}function gn(n){let t=[];for(let e=0;e<n.length;e++){let r=n[e];switch(r.mode){case f.NUMERIC:t.push([r,{data:r.data,mode:f.ALPHANUMERIC,length:r.length},{data:r.data,mode:f.BYTE,length:r.length}]);break;case f.ALPHANUMERIC:t.push([r,{data:r.data,mode:f.BYTE,length:r.length}]);break;case f.KANJI:t.push([r,{data:r.data,mode:f.BYTE,length:we(r.data)}]);break;case f.BYTE:t.push([{data:r.data,mode:f.BYTE,length:we(r.data)}])}}return t}function pn(n,t){let e={},r={start:{}},o=["start"];for(let i=0;i<n.length;i++){let s=n[i],u=[];for(let c=0;c<s.length;c++){let l=s[c],a=""+i+c;u.push(a),e[a]={node:l,lastCount:0},r[a]={};for(let m=0;m<o.length;m++){let g=o[m];e[g]&&e[g].node.mode===l.mode?(r[g][a]=yt(e[g].lastCount+l.length,l.mode)-yt(e[g].lastCount,l.mode),e[g].lastCount+=l.length):(e[g]&&(e[g].lastCount=l.length),r[g][a]=yt(l.length,l.mode)+4+f.getCharCountIndicator(l.mode,t))}}o=u}for(let i=0;i<o.length;i++)r[o[i]].end=0;return{map:r,table:e}}function Ee(n,t){let e,r=f.getBestModeForData(n);if(e=f.from(t,r),e!==f.BYTE&&e.bit<r.bit)throw new Error('"'+n+'" cannot be encoded with mode '+f.toString(e)+`.
 Suggested mode is: `+f.toString(r));switch(e===f.KANJI&&!tt.isKanjiModeEnabled()&&(e=f.BYTE),e){case f.NUMERIC:return new ye(n);case f.ALPHANUMERIC:return new Ce(n);case f.KANJI:return new Te(n);case f.BYTE:return new Be(n)}}F.fromArray=function(t){return t.reduce(function(e,r){return typeof r=="string"?e.push(Ee(r,null)):r.data&&e.push(Ee(r.data,r.mode)),e},[])};F.fromString=function(t,e){let r=Me(t,tt.isKanjiModeEnabled()),o=gn(r),i=pn(o,e),s=dn.find_path(i.map,"start","end"),u=[];for(let c=1;c<s.length-1;c++)u.push(i.table[s[c]].node);return F.fromArray(hn(u))};F.rawSplit=function(t){return F.fromArray(Me(t,tt.isKanjiModeEnabled()))}});var Ne=d(Ae=>{var nt=I(),Ct=G(),mn=Ht(),wn=Vt(),En=zt(),yn=vt(),Mt=Ot(),It=lt(),Cn=$t(),et=re(),Bn=ue(),Tn=N(),Bt=Ie();function Mn(n,t){let e=n.size,r=yn.getPositions(t);for(let o=0;o<r.length;o++){let i=r[o][0],s=r[o][1];for(let u=-1;u<=7;u++)if(!(i+u<=-1||e<=i+u))for(let c=-1;c<=7;c++)s+c<=-1||e<=s+c||(u>=0&&u<=6&&(c===0||c===6)||c>=0&&c<=6&&(u===0||u===6)||u>=2&&u<=4&&c>=2&&c<=4?n.set(i+u,s+c,!0,!0):n.set(i+u,s+c,!1,!0))}}function In(n){let t=n.size;for(let e=8;e<t-8;e++){let r=e%2===0;n.set(e,6,r,!0),n.set(6,e,r,!0)}}function An(n,t){let e=En.getPositions(t);for(let r=0;r<e.length;r++){let o=e[r][0],i=e[r][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?n.set(o+s,i+u,!0,!0):n.set(o+s,i+u,!1,!0)}}function Nn(n,t){let e=n.size,r=et.getEncodedBits(t),o,i,s;for(let u=0;u<18;u++)o=Math.floor(u/3),i=u%3+e-8-3,s=(r>>u&1)===1,n.set(o,i,s,!0),n.set(i,o,s,!0)}function Tt(n,t,e){let r=n.size,o=Bn.getEncodedBits(t,e),i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?n.set(i,8,s,!0):i<8?n.set(i+1,8,s,!0):n.set(r-15+i,8,s,!0),i<8?n.set(8,r-i-1,s,!0):i<9?n.set(8,15-i-1+1,s,!0):n.set(8,15-i-1,s,!0);n.set(r-8,8,1,!0)}function Ln(n,t){let e=n.size,r=-1,o=e-1,i=7,s=0;for(let u=e-1;u>0;u-=2)for(u===6&&u--;;){for(let c=0;c<2;c++)if(!n.isReserved(o,u-c)){let l=!1;s<t.length&&(l=(t[s]>>>i&1)===1),n.set(o,u-c,l),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||e<=o){o-=r,r=-r;break}}}function bn(n,t,e){let r=new mn;e.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),Tn.getCharCountIndicator(c.mode,n)),c.write(r)});let o=nt.getSymbolTotalCodewords(n),i=It.getTotalCodewordsCount(n,t),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);let u=(s-r.getLengthInBits())/8;for(let c=0;c<u;c++)r.put(c%2?17:236,8);return Sn(r,n,t)}function Sn(n,t,e){let r=nt.getSymbolTotalCodewords(t),o=It.getTotalCodewordsCount(t,e),i=r-o,s=It.getBlocksCount(t,e),u=r%s,c=s-u,l=Math.floor(r/s),a=Math.floor(i/s),m=a+1,g=l-a,E=new Cn(g),T=0,M=new Array(s),Rt=new Array(s),ot=0,xe=new Uint8Array(n.buffer);for(let _=0;_<s;_++){let st=_<c?a:m;M[_]=xe.slice(T,T+st),Rt[_]=E.encode(M[_]),T+=st,ot=Math.max(ot,st)}let it=new Uint8Array(r),_t=0,y,C;for(y=0;y<ot;y++)for(C=0;C<s;C++)y<M[C].length&&(it[_t++]=M[C][y]);for(y=0;y<g;y++)for(C=0;C<s;C++)it[_t++]=Rt[C][y];return it}function Pn(n,t,e,r){let o;if(Array.isArray(n))o=Bt.fromArray(n);else if(typeof n=="string"){let l=t;if(!l){let a=Bt.rawSplit(n);l=et.getBestVersionForData(a,e)}o=Bt.fromString(n,l||40)}else throw new Error("Invalid data");let i=et.getBestVersionForData(o,e);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=i;else if(t<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);let s=bn(t,e,o),u=nt.getSymbolSize(t),c=new wn(u);return Mn(c,t),In(c),An(c,t),Tt(c,e,0),t>=7&&Nn(c,t),Ln(c,s),isNaN(r)&&(r=Mt.getBestMask(c,Tt.bind(null,c,e))),Mt.applyMask(r,c),Tt(c,e,r),{modules:c,version:t,errorCorrectionLevel:e,maskPattern:r,segments:o}}Ae.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let r=Ct.M,o,i;return typeof e<"u"&&(r=Ct.from(e.errorCorrectionLevel,Ct.M),o=et.from(e.version),i=Mt.from(e.maskPattern),e.toSJISFunc&&nt.setToSJISFunction(e.toSJISFunc)),Pn(t,o,r,i)}});var At=d(R=>{function Le(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let t=n.slice().replace("#","").split("");if(t.length<3||t.length===5||t.length>8)throw new Error("Invalid hex color: "+n);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(r){return[r,r]}))),t.length===6&&t.push("F","F");let e=parseInt(t.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:e&255,hex:"#"+t.slice(0,6).join("")}}R.getOptions=function(t){t||(t={}),t.color||(t.color={});let e=typeof t.margin>"u"||t.margin===null||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:Le(t.color.dark||"#000000ff"),light:Le(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}};R.getScale=function(t,e){return e.width&&e.width>=t+e.margin*2?e.width/(t+e.margin*2):e.scale};R.getImageWidth=function(t,e){let r=R.getScale(t,e);return Math.floor((t+e.margin*2)*r)};R.qrToImageData=function(t,e,r){let o=e.modules.size,i=e.modules.data,s=R.getScale(o,r),u=Math.floor((o+r.margin*2)*s),c=r.margin*s,l=[r.color.light,r.color.dark];for(let a=0;a<u;a++)for(let m=0;m<u;m++){let g=(a*u+m)*4,E=r.color.light;if(a>=c&&m>=c&&a<u-c&&m<u-c){let T=Math.floor((a-c)/s),M=Math.floor((m-c)/s);E=l[i[T*o+M]?1:0]}t[g++]=E.r,t[g++]=E.g,t[g++]=E.b,t[g]=E.a}}});var be=d(rt=>{var Nt=At();function Rn(n,t,e){n.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=e,t.width=e,t.style.height=e+"px",t.style.width=e+"px"}function _n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}rt.render=function(t,e,r){let o=r,i=e;typeof o>"u"&&(!e||!e.getContext)&&(o=e,e=void 0),e||(i=_n()),o=Nt.getOptions(o);let s=Nt.getImageWidth(t.modules.size,o),u=i.getContext("2d"),c=u.createImageData(s,s);return Nt.qrToImageData(c.data,t,o),Rn(u,i,s),u.putImageData(c,0,0),i};rt.renderToDataURL=function(t,e,r){let o=r;typeof o>"u"&&(!e||!e.getContext)&&(o=e,e=void 0),o||(o={});let i=rt.render(t,e,o),s=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(s,u.quality)}});var Re=d(Pe=>{var qn=At();function Se(n,t){let e=n.a/255,r=t+'="'+n.hex+'"';return e<1?r+" "+t+'-opacity="'+e.toFixed(2).slice(1)+'"':r}function Lt(n,t,e){let r=n+t;return typeof e<"u"&&(r+=" "+e),r}function Un(n,t,e){let r="",o=0,i=!1,s=0;for(let u=0;u<n.length;u++){let c=Math.floor(u%t),l=Math.floor(u/t);!c&&!i&&(i=!0),n[u]?(s++,u>0&&c>0&&n[u-1]||(r+=i?Lt("M",c+e,.5+l+e):Lt("m",o,0),o=0,i=!1),c+1<t&&n[u+1]||(r+=Lt("h",s),s=0)):o++}return r}Pe.render=function(t,e,r){let o=qn.getOptions(e),i=t.modules.size,s=t.modules.data,u=i+o.margin*2,c=o.color.light.a?"<path "+Se(o.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",l="<path "+Se(o.color.dark,"stroke")+' d="'+Un(s,i,o.margin)+'"/>',a='viewBox="0 0 '+u+" "+u+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+a+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,g),g}});var qe=d(O=>{var xn=xt(),bt=Ne(),_e=be(),Dn=Re();function St(n,t,e,r,o){let i=[].slice.call(arguments,1),s=i.length,u=typeof i[s-1]=="function";if(!u&&!xn())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(o=e,e=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=e,e=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(e=t,t=r=void 0):s===2&&!t.getContext&&(r=e,e=t,t=void 0),new Promise(function(c,l){try{let a=bt.create(e,r);c(n(a,t,r))}catch(a){l(a)}})}try{let c=bt.create(e,r);o(null,n(c,t,r))}catch(c){o(c)}}O.create=bt.create;O.toCanvas=St.bind(null,_e.render);O.toDataURL=St.bind(null,_e.renderToDataURL);O.toString=St.bind(null,function(n,t,e){return Dn.render(n,e)})});var Pt=Ke(qe());var Ue=n=>{try{return new URL(n),!0}catch{return!1}};var Y=class{#e;#u;#r;#c;#n;#o;#t;#i;#a;#l;#s;constructor(){this.init(),this.qrcode_creator_handler(),this.qrcode_type_handler(),this.qrcode_downloader_handler()}init(){this.#o=document.forms[0],this.#a=document.getElementById("qrcode__type"),this.#l=document.getElementById("qrcode__width"),this.#t=document.getElementById("qrcode__container"),this.#i=document.getElementById("qrcode__downloader")?.querySelector("button")}qrcode_creator_handler(){let t={printSVG:this.printSVG.bind(this),printIMG:this.printIMG.bind(this)};this.#o?.addEventListener("submit",e=>{e.preventDefault();try{let r=e.target,o=r[2],i=r[1],s=r[0];if(this.#t.innerHTML="",this.#u=Number(o.value)||512,this.#r=i.value||"SVG",this.#c=i.options[i.selectedIndex].dataset.function,this.#e=s.value??"",!Ue(this.#e))throw new Error("Please enter a valid url.");let u=t[this.#c];if(u)u();else throw new Error("Function was not found.")}catch(r){console.error(r)}})}qrcode_type_handler(){this.#o.elements[1].addEventListener("change",t=>{let e=t.target;this.#l.hidden=e.value==="svg"})}qrcode_downloader_handler(){new MutationObserver(()=>{this.#i.hidden=this.#t.innerHTML.trim()===""}).observe(this.#t,{childList:!0,subtree:!0,characterData:!0}),this.#i?.addEventListener("click",e=>{let r=document.createElement("a");r.href=this.#s,r.download="QR-Code."+this.#r,r.click()})}printSVG(){Pt.default.toString(this.#e,{type:"svg"},(t,e)=>{if(t)throw t;let r=new Blob([e],{type:"image/svg+xml;charset=utf-8"});this.#s=URL.createObjectURL(r),this.#n=e,this.#t.innerHTML="",this.#t.insertAdjacentHTML("beforeend",e)})}printIMG(){Pt.default.toDataURL(this.#e,{width:this.#u,type:`image/${this.#r}`},(t,e)=>{if(t)throw t;this.#s=e,this.#n=new Image,this.#n.src=e,this.#t.innerHTML="",this.#t.appendChild(this.#n)})}};window.onload=function(){new Y};})();
