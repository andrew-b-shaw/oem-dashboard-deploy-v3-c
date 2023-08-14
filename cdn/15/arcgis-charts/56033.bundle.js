"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[56033],{99723:(e,t,o)=>{o.d(t,{Z:()=>v});var r,l=o(36663),n=o(67134),i=o(81977),s=o(7283),a=o(79438),u=o(40266),p=o(46999),d=o(24794),c=o(30936),f=o(82064);let b=r=class extends f.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,n.d9)(this.color)})}};(0,l._)([(0,i.Cb)({type:String,json:{write:!0}})],b.prototype,"description",void 0),(0,l._)([(0,i.Cb)({type:String,json:{write:!0}})],b.prototype,"label",void 0),(0,l._)([(0,i.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],b.prototype,"minValue",void 0),(0,l._)([(0,i.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],b.prototype,"maxValue",void 0),(0,l._)([(0,i.Cb)({type:c.Z,json:{type:[s.z8],write:!0}})],b.prototype,"color",void 0),b=r=(0,l._)([(0,u.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],b);const y=b;var h;let m=h=class extends p.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,n.d9)(this.colorClassBreakInfos),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,l._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),(0,l._)([(0,i.Cb)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,l._)([(0,i.Cb)({type:d.I,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,l._)([(0,i.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,l._)([(0,i.Cb)({type:[y],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0),m=h=(0,l._)([(0,u.j)("esri.renderers.PointCloudClassBreaksRenderer")],m);const v=m},46999:(e,t,o)=>{o.d(t,{Z:()=>S});var r,l=o(36663),n=o(25709),i=o(82064),s=o(67134),a=o(81977),u=(o(7283),o(40266));o(7753),o(39994);let p=r=class extends i.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,l._)([(0,a.Cb)({type:String,json:{write:!0}})],p.prototype,"field",void 0),(0,l._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),(0,l._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=r=(0,l._)([(0,u.j)("esri.renderers.support.pointCloud.ColorModulation")],p);const d=p,c=new n.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let f=class extends i.wq{};(0,l._)([(0,a.Cb)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],f.prototype,"type",void 0),f=(0,l._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],f);const b=f;var y,h=o(79438);let m=y=class extends b{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new y({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,l._)([(0,h.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,l._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"size",void 0),(0,l._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=y=(0,l._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const v=m;var C;let w=C=class extends b{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new C({scaleFactor:this.scaleFactor})}};(0,l._)([(0,h.J)({pointCloudSplatAlgorithm:"splat"})],w.prototype,"type",void 0),(0,l._)([(0,a.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],w.prototype,"scaleFactor",void 0),w=C=(0,l._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],w);const g={key:"type",base:b,typeMap:{"fixed-size":v,splat:w}},T=(0,n.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let _=class extends i.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,s.d9)(this.pointSizeAlgorithm),colorModulation:(0,s.d9)(this.colorModulation),pointsPerInch:(0,s.d9)(this.pointsPerInch)}}};(0,l._)([(0,a.Cb)({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:T.write}})],_.prototype,"type",void 0),(0,l._)([(0,a.Cb)({types:g,json:{write:!0}})],_.prototype,"pointSizeAlgorithm",void 0),(0,l._)([(0,a.Cb)({type:d,json:{write:!0}})],_.prototype,"colorModulation",void 0),(0,l._)([(0,a.Cb)({json:{write:!0},nonNullable:!0,type:Number})],_.prototype,"pointsPerInch",void 0),_=(0,l._)([(0,u.j)("esri.renderers.PointCloudRenderer")],_),(_||(_={})).fieldTransformTypeKebabDict=new n.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const S=_},5947:(e,t,o)=>{o.d(t,{Z:()=>f});var r,l=o(36663),n=o(67134),i=o(81977),s=(o(7283),o(79438)),a=o(40266),u=o(46999),p=o(24794),d=o(68844);let c=r=class extends u.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,n.d9)(this.field),fieldTransformType:(0,n.d9)(this.fieldTransformType),stops:(0,n.d9)(this.stops),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,l._)([(0,s.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,l._)([(0,i.Cb)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,l._)([(0,i.Cb)({type:p.I,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,l._)([(0,i.Cb)({type:u.Z.fieldTransformTypeKebabDict.apiValues,json:{type:u.Z.fieldTransformTypeKebabDict.jsonValues,read:u.Z.fieldTransformTypeKebabDict.read,write:u.Z.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,l._)([(0,i.Cb)({type:[d.Z],json:{write:!0}})],c.prototype,"stops",void 0),c=r=(0,l._)([(0,a.j)("esri.renderers.PointCloudStretchRenderer")],c);const f=c},60948:(e,t,o)=>{o.d(t,{Z:()=>v});var r,l=o(36663),n=o(67134),i=o(81977),s=o(7283),a=o(79438),u=o(40266),p=o(46999),d=o(24794),c=o(30936),f=o(82064);let b=r=class extends f.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,n.d9)(this.values),color:(0,n.d9)(this.color)})}};(0,l._)([(0,i.Cb)({type:String,json:{write:!0}})],b.prototype,"description",void 0),(0,l._)([(0,i.Cb)({type:String,json:{write:!0}})],b.prototype,"label",void 0),(0,l._)([(0,i.Cb)({type:[String],json:{write:!0}})],b.prototype,"values",void 0),(0,l._)([(0,i.Cb)({type:c.Z,json:{type:[s.z8],write:!0}})],b.prototype,"color",void 0),b=r=(0,l._)([(0,u.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],b);const y=b;var h;let m=h=class extends p.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:(0,n.d9)(this.field),fieldTransformType:(0,n.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,n.d9)(this.colorUniqueValueInfos),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,l._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),(0,l._)([(0,i.Cb)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,l._)([(0,i.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,l._)([(0,i.Cb)({type:[y],json:{write:!0}})],m.prototype,"colorUniqueValueInfos",void 0),(0,l._)([(0,i.Cb)({type:d.I,json:{write:!0}})],m.prototype,"legendOptions",void 0),m=h=(0,l._)([(0,u.j)("esri.renderers.PointCloudUniqueValueRenderer")],m);const v=m},56033:(e,t,o)=>{o.r(t),o.d(t,{default:()=>T});var r=o(7753),l=o(86098),n=o(10663),i=o(70347),s=o(6766),a=o(79912),u=o(92376),p=o(14685),d=(o(39994),o(99723)),c=o(5947),f=o(60948),b=o(9512),y=o(52485);function h(e,t,o){return null!=e&&e.attributeInfo.useElevation?t?function(e,t){const o=new Float64Array(t);for(let r=0;r<t;r++)o[r]=e[3*r+2];return o}(t,o):null:null!=e&&e.attributeInfo.storageInfo?(0,b.qM)(e.attributeInfo.storageInfo,e.buffer,o):null}function m(e,t,o,r,l){const n=e.length/3;let i=0;for(let s=0;s<n;s++){let n=!0;for(let e=0;e<r.length&&n;e++){const{filterJSON:t}=r[e],o=l[e].values[s];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;t.values.includes(o)===e&&(n=!1);break}case"pointCloudBitfieldFilter":{const e=C(t.requiredSetBits),r=C(t.requiredClearBits);(o&e)===e&&0==(o&r)||(n=!1);break}case"pointCloudReturnFilter":{const e=15&o,r=o>>>4&15,l=r>1,i=1===e,s=e===r;let a=!1;for(const e of t.includedReturns)if("last"===e&&s||"firstOfMany"===e&&i&&l||"lastOfMany"===e&&s&&l||"single"===e&&!l){a=!0;break}a||(n=!1);break}}}n&&(o[i]=s,e[3*i]=e[3*s],e[3*i+1]=e[3*s+1],e[3*i+2]=e[3*s+2],t[3*i]=t[3*s],t[3*i+1]=t[3*s+1],t[3*i+2]=t[3*s+2],i++)}return i}function v(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function C(e){let t=0;for(const o of e||[])t|=1<<o;return t}class w{transform(e){const t=this._transform(e),o=[t.points.buffer,t.rgb.buffer];null!=t.pointIdFilterMap&&o.push(t.pointIdFilterMap.buffer);for(const e of t.attributes)"buffer"in e.values&&(0,l.eP)(e.values.buffer)&&e.values.buffer!==t.rgb.buffer&&o.push(e.values.buffer);return Promise.resolve({result:t,transferList:o})}_transform(e){const t=function(e,t){if(null==e.encoding||""===e.encoding){const o=(0,b.W7)(t,e);if(null==o.vertexAttributes.position)return;const r=(0,b.I_)(t,o.vertexAttributes.position),l=o.header.fields,n=[l.offsetX,l.offsetY,l.offsetZ],i=[l.scaleX,l.scaleY,l.scaleZ],s=r.length/3,a=new Float64Array(3*s);for(let e=0;e<s;e++)a[3*e]=r[3*e]*i[0]+n[0],a[3*e+1]=r[3*e+1]*i[1]+n[1],a[3*e+2]=r[3*e+2]*i[2]+n[2];return a}if("lepcc-xyz"===e.encoding)return(0,y.Gi)(t).result}(e.schema,e.geometryBuffer);let o=t.length/3,l=null;const n=new Array,i=h(e.primaryAttributeData,t,o);null!=e.primaryAttributeData&&i&&n.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:i});const s=h(e.modulationAttributeData,t,o);null!=e.modulationAttributeData&&s&&n.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:s});let a=function(e,t,o,r){const{rendererJSON:l,isRGBRenderer:n}=e;let i=null,s=null;if(t&&n)i=t;else if(t&&"pointCloudUniqueValueRenderer"===l?.type){s=f.Z.fromJSON(l);const e=s.colorUniqueValueInfos;i=new Uint8Array(3*r);const o=v(s.fieldTransformType);for(let l=0;l<r;l++){const r=(o?o(t[l]):t[l])+"";for(let t=0;t<e.length;t++)if(e[t].values.includes(r)){i[3*l]=e[t].color.r,i[3*l+1]=e[t].color.g,i[3*l+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===l?.type){s=c.Z.fromJSON(l);const e=s.stops;i=new Uint8Array(3*r);const o=v(s.fieldTransformType);for(let l=0;l<r;l++){const r=o?o(t[l]):t[l],n=e.length-1;if(r<e[0].value)i[3*l]=e[0].color.r,i[3*l+1]=e[0].color.g,i[3*l+2]=e[0].color.b;else if(r>=e[n].value)i[3*l]=e[n].color.r,i[3*l+1]=e[n].color.g,i[3*l+2]=e[n].color.b;else for(let t=1;t<e.length;t++)if(r<e[t].value){const o=(r-e[t-1].value)/(e[t].value-e[t-1].value);i[3*l]=e[t].color.r*o+e[t-1].color.r*(1-o),i[3*l+1]=e[t].color.g*o+e[t-1].color.g*(1-o),i[3*l+2]=e[t].color.b*o+e[t-1].color.b*(1-o);break}}}else if(t&&"pointCloudClassBreaksRenderer"===l?.type){s=d.Z.fromJSON(l);const e=s.colorClassBreakInfos;i=new Uint8Array(3*r);const o=v(s.fieldTransformType);for(let l=0;l<r;l++){const r=o?o(t[l]):t[l];for(let t=0;t<e.length;t++)if(r>=e[t].minValue&&r<=e[t].maxValue){i[3*l]=e[t].color.r,i[3*l+1]=e[t].color.g,i[3*l+2]=e[t].color.b;break}}}else i=new Uint8Array(3*r).fill(255);if(o&&s&&s.colorModulation){const e=s.colorModulation.minValue,t=s.colorModulation.maxValue,l=.3;for(let n=0;n<r;n++){const r=o[n],s=r>=t?1:r<=e?l:l+(1-l)*(r-e)/(t-e);i[3*n]=s*i[3*n],i[3*n+1]=s*i[3*n+1],i[3*n+2]=s*i[3*n+2]}}return i}(e.rendererInfo,i,s,o);if(e.filterInfo&&e.filterInfo.length>0&&null!=e.filterAttributesData){const i=e.filterAttributesData.filter(r.pC).map((e=>{const r=h(e,t,o),l={attributeInfo:e.attributeInfo,values:r};return n.push(l),l}));l=new Uint32Array(o),o=m(t,a,l,e.filterInfo,i)}for(const r of e.userAttributesData){const e=h(r,t,o);n.push({attributeInfo:r.attributeInfo,values:e})}3*o<a.length&&(a=new Uint8Array(a.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(t,o,e.elevationOffset);const u=this._transformCoordinates(t,o,e.obb,p.Z.fromJSON(e.inSR),p.Z.fromJSON(e.outSR));return{obb:e.obb,points:u,rgb:a,attributes:n,pointIdFilterMap:l}}_transformCoordinates(e,t,o,r,l){if(!(0,u.projectBuffer)(e,r,0,e,l,0,t))throw new Error("Can't reproject");const i=(0,a.f)(o.center[0],o.center[1],o.center[2]),p=(0,a.c)(),d=(0,a.c)();(0,n.c)(g,o.quaternion);const c=new Float32Array(3*t);for(let r=0;r<t;r++)p[0]=e[3*r]-i[0],p[1]=e[3*r+1]-i[1],p[2]=e[3*r+2]-i[2],(0,s.q)(d,p,g),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(d[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(d[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(d[2])),c[3*r]=p[0],c[3*r+1]=p[1],c[3*r+2]=p[2];return c}_applyElevationOffsetInPlace(e,t,o){if(0!==o)for(let r=0;r<t;r++)e[3*r+2]+=o}}const g=(0,i.c)();function T(){return new w}}}]);