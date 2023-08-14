"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[57013],{94978:(e,t,n)=>{n.d(t,{Qc:()=>u,WU:()=>a,lt:()=>c});var i=n(21130),s=n(8108);const r={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function o(e=(0,s.Kd)()){let t=(e=e.toLowerCase())in r;if(!t){const n=e.split("-");n.length>1&&n[0]in r&&(e=n[0],t=!0),t||(e="en")}const[n,i,o="#,##0.###"]=r[e];return{decimal:n,group:i,pattern:o}}function a(e,t){const n=o((t={...t}).locale);t.customs=n;const i=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){const i=(n=n||{}).customs.group,s=n.customs.decimal,r=t.split(";"),o=r[0];if((t=r[e<0?1:0]||"-"+o).includes("%"))e*=100;else if(t.includes("‰"))e*=1e3;else{if(t.includes("¤"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const a=l,c=o.match(a);if(!c)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(a,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const i=t.split("."),s="string"==typeof n.places&&n.places.indexOf(",");let r=n.places;s?r=n.places.substring(s+1):+r>=0||(r=(i[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(r))));const o=String(Math.abs(e)).split("."),a=o[1]||"";if(i[1]||n.places){s&&(n.places=n.places.substring(0,s));const e=void 0!==n.places?n.places:i[1]&&i[1].lastIndexOf("0")+1;+e>a.length&&(o[1]=a.padEnd(Number(e),"0")),+r<a.length&&(o[1]=a.substr(0,Number(r)))}else o[1]&&o.pop();const l=i[0].replace(",","");let c=l.indexOf("0");-1!==c&&(c=l.length-c,c>o[0].length&&(o[0]=o[0].padStart(c,"0")),l.includes("#")||(o[0]=o[0].substr(o[0].length-c)));let u,p,d=i[0].lastIndexOf(",");if(-1!==d){u=i[0].length-d-1;const e=i[0].substr(0,d);d=e.lastIndexOf(","),-1!==d&&(p=e.length-d-1)}const f=[];for(let e=o[0];e;){const t=e.length-u;f.push(t>0?e.substr(t):e),e=t>0?e.slice(0,t):"",p&&(u=p,p=void 0)}return o[0]=f.reverse().join(n.group||","),o.join(n.decimal||".")}(e,c[0],{decimal:s,group:i,places:n.places,round:n.round}))}(e,i,t)}const l=/[#0,]*[#0](?:\.0*#*)?/;function c(e){const t=o((e=e||{}).locale),n=e.pattern||t.pattern,s=t.group,r=t.decimal;let a=1;if(n.includes("%"))a/=100;else if(n.includes("‰"))a/=1e3;else if(n.includes("¤"))throw new Error("currency notation not supported");const c=n.split(";");1===c.length&&c.push("-"+c[0]);const u=d(c,(t=>(t="(?:"+(0,i.Qs)(t,".")+")").replace(l,(t=>{const n={signed:!1,separator:e.strict?s:[s,""],fractional:e.fractional,decimal:r,exponent:!1},i=t.split(".");let o=e.places;1===i.length&&1!==a&&(i[1]="###"),1===i.length||0===o?n.fractional=!1:(void 0===o&&(o=e.pattern?i[1].lastIndexOf("0")+1:1/0),o&&null==e.fractional&&(n.fractional=!0),!e.places&&+o<i[1].length&&(o+=","+i[1].length),n.places=o);const l=i[0].split(",");return l.length>1&&(n.groupSize=l.pop().length,l.length>1&&(n.groupSize2=l.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=p(e),n=d(e.fractional,(t=>{let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let i=t+n;return n&&(i="(?:(?:"+i+")|(?:"+n+"))"),i+d(e.exponent,(t=>t?"([eE]"+p({signed:e.eSigned})+")":""))}(n)+")"}))),!0);return{regexp:u.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:s,decimal:r,factor:a}}function u(e,t){const n=c(t),i=new RegExp("^"+n.regexp+"$").exec(e);if(!i)return NaN;let s=i[1];if(!i[1]){if(!i[2])return NaN;s=i[2],n.factor*=-1}return s=s.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(s)*n.factor}function p(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",d(e.signed,(e=>e?"[-+]":""),!0)+d(e.separator,(t=>{if(!t)return"(?:\\d+)";" "===(t=(0,i.Qs)(t))?t="\\s":" "===t&&(t="\\s\\xa0");const n=e.groupSize,s=e.groupSize2;if(s){const e="(?:0|[1-9]\\d{0,"+(s-1)+"}(?:["+t+"]\\d{"+s+"})*["+t+"]\\d{"+n+"})";return n-s>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}const d=(e,t,n)=>{if(!(e instanceof Array))return t(e);const i=[];for(let n=0;n<e.length;n++)i.push(t(e[n]));return f(i.join("|"),Boolean(n))},f=(e,t)=>"("+(t?"?:":"")+e+")"},57013:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W}),n(91957);var i=n(66341),s=n(67979),r=n(70375),o=n(13802),a=n(78668),l=n(3466),c=n(92376),u=n(61107),p=n(35925),d=n(39536),f=n(59958),h=n(15540),m=n(4811),g=n(66069),y=n(54718),w=n(94978),x=n(14845);const b=/^\s*"([\S\s]*)"\s*$/,F=/""/g,_="\n",I=[","," ",";","|","\t"];function*N(e,t,n){let i=0;for(;i<=e.length;){const s=e.indexOf(t,i),r=e.substring(i,s>-1?s:void 0);i+=r.length+t.length,n&&!r.trim()||(yield r)}}function E(e){const t=e.includes("\r\n")?"\r\n":_;return N(e,t,!0)}function S(e,t){return N(e,t,!1)}function T(e,t,n){e=e.trim(),t=t?.trim();const i=[],s=Array.from(new Set([n?.delimiter,...I])).filter((e=>null!=e));for(const n of s){const s=C(e,n).length,r=C(t,n).length??s;s>1&&i.push({weight:Math.min(s,r),delimiter:n})}const r=i.sort((({weight:e},{weight:t})=>t-e)).map((({delimiter:e})=>e));for(const t of r){const i=k(O(e,t).names,n?.longitudeField,n?.latitudeField);if(i.longitudeFieldName&&i.latitudeFieldName)return{delimiter:t,locationInfo:i}}return{delimiter:r[0],locationInfo:null}}function*v(e,t,n,i=(()=>Object.create(null))){const s=E(e);s.next();let r="",o="",a=0,l=i(),c=0;e:for(const e of s){const s=S(e,n);for(const e of s)if(r+=o+e,o="",a+=q(e),a%2==0){if(a>0){const e=b.exec(r);if(!e){l=i(),c=0,r="",a=0;continue e}l[t[c]]=e[1].replaceAll(F,'"'),c++}else l[t[c]]=r,c++;r="",a=0}else o=n;0===a?(yield l,l=i(),c=0):o=_}}function O(e,t){const n=C(e,t).filter((e=>null!=e)),i=n.map((e=>(0,x.q6)(e)));for(let e=i.length-1;e>=0;e--)i[e]||(i.splice(e,1),n.splice(e,1));return{names:i,aliases:n}}function C(e,t){if(!e?.length)return[];const n=[];let i="",s="",r=0;const o=S(e,t);for(const e of o)if(i+=s+e,s="",r+=q(e),r%2==0){if(r>0){const e=b.exec(i);e&&n.push(e[1].replaceAll(F,'"'))}else n.push(i);i="",r=0}else s=t;return n}function q(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}function k(e,t,n){t=(0,x.q6)(t)?.toLowerCase(),n=(0,x.q6)(n)?.toLowerCase();const i=e.map((e=>e.toLowerCase())),s=t?e[i.indexOf(t)]:null,r=n?e[i.indexOf(n)]:null;return{longitudeFieldName:s||e[i.indexOf(Q.find((e=>i.includes(e))))],latitudeFieldName:r||e[i.indexOf(P.find((e=>i.includes(e))))]}}function D(e,t,n,i,s){const r=[],o=v(e,n,t),a=[];for(const e of o){if(10===a.length)break;a.push(e)}for(let e=0;e<n.length;e++){const t=n[e],o=i[e];if(t===s.longitudeFieldName||t===s.latitudeFieldName)r.push({name:t,type:"esriFieldTypeDouble",alias:o});else{let e,n;switch(A(a.map((e=>e[t])))){case"integer":e="esriFieldTypeInteger";break;case"double":e="esriFieldTypeDouble";break;case"date":e="esriFieldTypeDate",n=36;break;default:e="esriFieldTypeString",n=255}r.push({name:t,type:e,alias:o,length:n})}}return r}function A(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let n=!1;if(""!==e){if(t.test(e))n=!0;else{let t=Z(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")){if(t=Number(e),!isNaN(t))return"double";if(e.includes(",")){if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";n=!0}else n=!0}else n=!0}return n?/^[-]?\d*[.,]?\d*$/.test(e)?"string":j(new Date(e),e)?"date":"string":"string"}})).reduce(((e,t)=>void 0===e?t:void 0===t?e:e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}function j(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let n=!0;if(!$&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!R.test(e[i]),i++;n=!t}}return n}const Z=function(){const e=(0,w.lt)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return s=>{const r=t.exec(s);if(e.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}(),R=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,$=Number.isNaN(new Date("technology 10").getTime()),P=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],Q=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"];var G=n(40400),V=n(28790),M=n(14685);const L=(0,G.bU)("esriGeometryPoint"),z=["csv"],U=[0,0];class B{constructor(e,t){this.x=e,this.y=t}}class W{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t={}){this._loadOptions=e;const[n]=await Promise.all([this._fetch(t.signal),this._checkProjection(e?.parsingOptions?.spatialReference)]),i=function(e,t){const n=t.parsingOptions||{},i={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},s=i.layerDefinition={name:(0,l.vt)(t.url,z)||"csv",drawingInfo:L,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:4326}}},o=E(e),a=o.next().value?.trim(),c=o.next().value?.trim();if(!a)throw new r.Z("csv-layer:empty-csv","CSV is empty",{csv:e});const{delimiter:u,locationInfo:p}=T(a,c,n);if(!u)throw new r.Z("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:a,secondLine:c,parsingOptions:n});if(!p)throw new r.Z("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:a,secondLine:c,parsingOptions:n});i.locationInfo=p,i.delimiter=u;const{names:d,aliases:f}=O(a,u),h=D(e,i.delimiter,d,f,i.locationInfo);if(n.fields?.length){const e=new V.Z(n.fields);for(const t of h){const n=e.get(t.name);n&&Object.assign(t,n)}}if(!h.some((e=>"esriFieldTypeOID"===e.type&&(s.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};s.objectIdField=e.name,h.unshift(e)}s.fields=h;const m=new V.Z(s.fields);if(i.locationInfo&&(i.locationInfo.latitudeFieldName=m.get(i.locationInfo.latitudeFieldName).name,i.locationInfo.longitudeFieldName=m.get(i.locationInfo.longitudeFieldName).name),s.timeInfo){const e=s.timeInfo;if(e.startTimeField){const t=m.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=m.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=m.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(s.timeInfo=null)}return i}(n,e);this._locationInfo=i.locationInfo,this._delimiter=i.delimiter,this._queryEngine=this._createQueryEngine(i);const s=await this._createFeatures(n);this._queryEngine.featureStore.addMany(s);const{fullExtent:o,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(i.layerDefinition.extent=o,a){const{start:e,end:t}=a;i.layerDefinition.timeInfo.timeExtent=[e,t]}return i}async applyEdits(){throw new r.Z("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,s.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,a.D_)(e)||o.Z.getLogger("esri.layers.CSVLayer").error(new r.Z("csv-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions;if(!t)throw new r.Z("csv-layer:invalid-source","url not defined");const s=(0,l.mN)(t);return(await(0,i.default)(s.path,{query:{...s.query,...n},responseType:"text",signal:e})).data}_createQueryEngine(e){const{objectIdField:t,fields:n,extent:i,timeInfo:s}=e.layerDefinition,r=new m.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new y.q({fields:n,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:t,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:r})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:n}=this._locationInfo,{objectIdField:i,fieldsIndex:s,spatialReference:r}=this._queryEngine;let o=[];const a=[],l=s.fields.filter((e=>e.name!==i)).map((e=>e.name));let m=0;const g={};for(const e of s.fields)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=(0,x.os)(e);void 0!==t&&(g[e.name]=t)}const y=v(e,l,this._delimiter,(0,G.Dm)(g,i));for(const e of y){const r=this._parseCoordinateValue(e[t]),l=this._parseCoordinateValue(e[n]);if(null!=l&&null!=r&&!isNaN(r)&&!isNaN(l)){e[t]=r,e[n]=l;for(const i in e)if(i!==t&&i!==n)if(s.isDateField(i)){const t=new Date(e[i]);e[i]=j(t,e[i])?t.getTime():null}else if(s.isNumericField(i)){const t=Z(e[i]);isNaN(t)?e[i]=null:e[i]=t}e[i]=m,m++,o.push(new B(l,r)),a.push(e)}}if(!(0,p.fS)({wkid:4326},r))if((0,p.sS)(r))for(const e of o)[e.x,e.y]=(0,d.hG)(e.x,e.y,U);else o=(0,c.projectMany)(u.N,o,M.Z.WGS84,r,null,null);const w=[];for(let e=0;e<o.length;e++){const{x:t,y:n}=o[e],s=a[e];s[i]=e+1,w.push(new f.u_(new h.Z([],[t,n]),s,null,s[i]))}return w}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=Z(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await(0,g._W)(p.Zn,e)}catch{throw new r.Z("csv-layer:projection-not-supported","Projection not supported")}}}},40400:(e,t,n)=>{n.d(t,{Dm:()=>u,Hq:()=>p,MS:()=>d,bU:()=>a});var i=n(39994),s=n(67134),r=n(10287),o=n(86094);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let c=1;function u(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const i=new Function(`\n      return class AttributesClass$${c++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new i}catch(n){return()=>({[t]:null,...e})}}function p(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function d(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1}}}}}]);