"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[93086],{78951:(t,e,i)=>{i.d(e,{f:()=>_});var r=i(7753),s=i(13802),n=i(61681),h=i(86098),o=i(6174),a=i(8396),c=i(91907);const u=s.Z.getLogger("esri.views.webgl.BufferObject");class _{static createIndex(t,e,i){return new _(t,c.w0.ELEMENT_ARRAY_BUFFER,e,i)}static createVertex(t,e,i){return new _(t,c.w0.ARRAY_BUFFER,e,i)}static createUniform(t,e,i){if(t.type!==a.zO.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new _(t,c.w0.UNIFORM_BUFFER,e,i)}static createPixelPack(t,e=c.l1.STREAM_READ,i){if(t.type!==a.zO.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const r=new _(t,c.w0.PIXEL_PACK_BUFFER,e);return i&&r.setSize(i),r}static createPixelUnpack(t,e=c.l1.STREAM_DRAW,i){if(t.type!==a.zO.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new _(t,c.w0.PIXEL_UNPACK_BUFFER,e,i)}constructor(t,e,i,r){this._context=t,this.bufferType=e,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(c._g.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,o.zu)(this._context.gl),r&&this.setData(r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteLength(){return this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER?this._indexType===c.g.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER||this.bufferType===c.w0.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(c._g.BufferObject,this),this._context=(0,n.wN)(this._context)):this._glName&&u.warn("Leaked WebGL buffer object")}setSize(t,e=null){if(t<=0&&u.error("Buffer size needs to be positive!"),this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER&&null!=e)switch(this._indexType=e,e){case c.g.UNSIGNED_SHORT:t*=2;break;case c.g.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER&&((0,h.Uc)(t)&&(e/=2,this._indexType=c.g.UNSIGNED_SHORT),(0,h.ZY)(t)&&(e/=4,this._indexType=c.g.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t,e=null){this._size=t;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const r=this._context.gl;null!=e?r.bufferData(this.bufferType,e,this.usage):r.bufferData(this.bufferType,t,this.usage),(0,o.zu)(r),this._isVAOAware&&this._context.bindVAO(i)}setSubData(t,e,i,r){if(!t)return;(e<0||e*t.BYTES_PER_ELEMENT>=this.byteLength)&&u.error("offset is out of range!"),i>=r&&u.error("end must be bigger than start!"),(e+(r-i))*t.BYTES_PER_ELEMENT>this.byteLength&&u.error("An attempt to write beyond the end of the buffer!");const s=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;if(this._context.type===a.zO.WEBGL2)n.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,i,r-i);else{const s=0===i&&r===t.length?t:t.subarray(i,r);n.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,s)}(0,o.zu)(n),this._isVAOAware&&this._context.bindVAO(s)}getSubData(t,e=0,i,s){if(this._context.type!==a.zO.WEBGL2)return void u.error("Get buffer subdata is supported in WebGL2 only!");if(i<0||s<0)return void u.error("Problem getting subdata: offset and length were less than zero!");const n=function(t){return(0,r.zG)(t)}(t)?t.BYTES_PER_ELEMENT:1;if(n*((i??0)+(s??0))>t.byteLength)return void u.error("Problem getting subdata: offset and length exceeded destination size!");e+n*(s??0)>this.byteLength&&u.warn("Potential problem getting subdata: requested data exceeds buffer size!");const h=this._context.gl;this._context.bindBuffer(this,c.w0.COPY_READ_BUFFER),h.getBufferSubData(c.w0.COPY_READ_BUFFER,e,t,i,s),this._context.unbindBuffer(c.w0.COPY_READ_BUFFER)}async getSubDataAsync(t,e=0,i,r){this._context.type===a.zO.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(t,e,i,r)):u.error("Get buffer subdata is supported in WebGL2 only!")}}},18567:(t,e,i)=>{i.d(e,{X:()=>l}),i(39994);var r=i(13802),s=i(61681),n=i(78951),h=i(6174),o=i(8396),a=i(91907),c=i(43106),u=i(37165),_=i(71449);const f=r.Z.getLogger("esri.views.webgl.FramebufferObject");class l{constructor(t,e,i=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthBuffer=null,this._stencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(a._g.FramebufferObject,this);const r=d(e)?e:new _.x(this._context,e);if(this._colorAttachments.set(a.VY.COLOR_ATTACHMENT0,r),this._validateTextureDescriptor(r.descriptor),this._validateColorAttachmentPoint(a.VY.COLOR_ATTACHMENT0),null!=i)if(function(t){return d(t)||null!=t&&"pixelFormat"in t}(i))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=d(i)?i:new _.x(this._context,i),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const t=function(t){return null!=t&&"type"in t&&t.type===c.B.RenderBuffer}(i)?i:new u.r(this._context,i),e=t.descriptor;e.internalFormat===a.Tg.STENCIL_INDEX8?this._stencilBuffer=t:this._depthBuffer=t,this._validateRenderBufferDescriptor(e)}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const t=this._context.getBoundFramebufferObject();this._colorAttachments.forEach(((t,e)=>this.detachColorTexture(e)?.dispose())),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(a._g.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(a.VY.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthBuffer||this._stencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){const t=this._colorAttachments.get(a.VY.COLOR_ATTACHMENT0);return t?.descriptor?.width??0}get height(){const t=this._colorAttachments.get(a.VY.COLOR_ATTACHMENT0);return t?.descriptor?.height??0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce(((t,[e,i])=>t+i.gpuMemoryUsage),this.depthStencilAttachment?.gpuMemoryUsage??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&d(e)?e:null}attachColorTexture(t,e=a.VY.COLOR_ATTACHMENT0){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;this._validateTextureDescriptor(i),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t)}detachColorTexture(t=a.VY.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e)return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)),this._colorAttachments.delete(t),e}setColorTextureTarget(t,e=a.VY.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);i&&this._framebufferTexture2D(i.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case c.B.Texture:return this._attachDepthStencilTexture(t);case c.B.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(null==t)return;const e=t.descriptor;e.pixelFormat!==a.VI.DEPTH_STENCIL&&e.pixelFormat!==a.VI.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==a.Br.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,a.Lu)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,a.Lu)),this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(null==t)return;const e=t.descriptor;if(e.internalFormat!==a.Tg.DEPTH_STENCIL&&e.internalFormat!==a.Tg.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(e);i.framebufferRenderbuffer(a.qi.FRAMEBUFFER,r,i.RENDERBUFFER,t.glName)}this._depthBuffer?.dispose(),this._depthBuffer=t}detachDepthStencilBuffer(){const t=this._depthBuffer;if(t&&this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=this._getGLAttachmentPoint(t.descriptor);e.framebufferRenderbuffer(a.qi.FRAMEBUFFER,i,e.RENDERBUFFER,null),t.dispose()}return this._depthBuffer=null,t}copyToTexture(t,e,i,r,s,n,h){(t<0||e<0||s<0||n<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const o=h.descriptor;h.descriptor.target!==a.No.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==o?.width||null==o?.height||t+i>this.width||e+r>this.height||s+i>o.width||n+r>o.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,u=c.bindTexture(h,_.x.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(_.x.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(a.No.TEXTURE_2D,0,s,n,t,e,i,r),c.bindTexture(u,_.x.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,r,s,n,h){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),h||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,s,n,h)}async readPixelsAsync(t,e,i,r,s,c,u){if(this._context.type!==o.zO.WEBGL2)return(0,h.hZ)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,e,i,r,s,c,u);const _=this._context.gl,f=n.f.createPixelPack(this._context,a.l1.STREAM_READ,u.byteLength);this._context.bindBuffer(f),this._context.bindFramebuffer(this),_.readPixels(t,e,i,r,s,c,0),this._context.unbindBuffer(a.w0.PIXEL_PACK_BUFFER),await f.getSubDataAsync(u),f.dispose()}resize(t,e){if(this.width===t&&this.height===e)return;const i={width:t,height:e};T(i,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((t=>t.resize(i.width,i.height))),this._depthStencilTexture?.resize(i.width,i.height),this._initialized&&(T(i,this._context.parameters.maxRenderbufferSize),this._depthBuffer?.resize(i.width,i.height),this._stencilBuffer?.resize(i.width,i.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(t=a.qi.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=e.createFramebuffer();e.bindFramebuffer(t,i),this._colorAttachments.forEach(((e,i)=>this._framebufferTexture2D(e.glName,i,g(e),t)));const r=this._depthBuffer||this._stencilBuffer;if(r){const i=this._getGLAttachmentPoint(r.descriptor);e.framebufferRenderbuffer(t,i,e.RENDERBUFFER,r.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,g(this._depthStencilTexture),t);(0,h.hZ)()&&e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=i,this._initialized=!0}_framebufferTexture2D(t,e=a.VY.COLOR_ATTACHMENT0,i=a.No.TEXTURE_2D,r=a.qi.FRAMEBUFFER,s=0){this._context.gl.framebufferTexture2D(r,e,i,t,s)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthBuffer.descriptor);t.framebufferRenderbuffer(a.qi.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthBuffer=(0,s.M2)(this._depthBuffer)}this._stencilBuffer&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(a.qi.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilBuffer=(0,s.M2)(this._stencilBuffer)),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,s.M2)(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==a.No.TEXTURE_2D&&t.target!==a.No.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),T(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){T(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case a.Tg.DEPTH_COMPONENT16:case a.Tg.DEPTH_COMPONENT24:case a.Tg.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case a.Tg.DEPTH24_STENCIL8:case a.Tg.DEPTH32F_STENCIL8:case a.Tg.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case a.Tg.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(t){if(-1===l._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;l._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS)}else l._MAX_COLOR_ATTACHMENTS=1}const e=t-a.VY.COLOR_ATTACHMENT0;e+1>l._MAX_COLOR_ATTACHMENTS&&r.Z.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${l._MAX_COLOR_ATTACHMENTS} color attachments`)}}function d(t){return null!=t&&"type"in t&&t.type===c.B.Texture}function T(t,e){const i=Math.max(t.width,t.height);if(i>e){f.warn(`Resizing FBO attachment size ${t.width}x${t.height} to device limit ${e}`);const r=e/i;return t.width=Math.round(t.width*r),t.height=Math.round(t.height*r),!1}return!0}function g(t){return t.descriptor.target===a.No.TEXTURE_CUBE_MAP?a.No.TEXTURE_CUBE_MAP_POSITIVE_X:a.No.TEXTURE_2D}l._MAX_COLOR_ATTACHMENTS=-1},37165:(t,e,i)=>{i.d(e,{r:()=>a});var r=i(61681),s=i(8396),n=i(91907),h=i(43106),o=i(56109);class a{constructor(t,e){this._context=t,this._descriptor=e,this.type=h.B.RenderBuffer,this._context.instanceCounter.increment(n._g.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:r,height:o,internalFormat:a,multisampled:c}=e;if(c){if(this._context.type!==s.zO.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,a,r,o)}else i.renderbufferStorage(i.RENDERBUFFER,a,r,o)}get descriptor(){return this._descriptor}get samples(){const t=this._descriptor.samples,e=this._context.parameters.maxSamples;return t?Math.min(t,e):e}get gpuMemoryUsage(){return(0,o.G)(this._descriptor)}resize(t,e){const i=this._descriptor;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const r=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(n._g.Renderbuffer,this),this._context=(0,r.wN)(this._context))}}},56109:(t,e,i)=>{i.d(e,{G:()=>n,Y:()=>s});var r=i(62486);class s{constructor(t,e,i=e){this.internalFormat=t,this.width=e,this.height=i,this.multisampled=!1,this.samples=1}}function n(t){return t.width<=0||t.height<=0||null==t.internalFormat?0:t.width*t.height*(0,r.RG)(t.internalFormat)}},29620:(t,e,i)=>{i.d(e,{U:()=>c});var r=i(13802),s=i(61681),n=i(86098),h=i(91907),o=i(62486);const a=r.Z.getLogger("esri.views.webgl.VertexArrayObject");let c=class{constructor(t,e,i,r,s=null){this._context=t,this._locations=e,this._layout=i,this._buffers=r,this._indexBuffer=s,this._glName=null,this._initialized=!1,t.instanceCounter.increment(h._g.VertexArrayObject,this)}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Object.keys(this._buffers).reduce(((t,e)=>t+this._buffers[e].byteLength),null!=this._indexBuffer?this._indexBuffer.byteLength:0)}get layout(){return this._layout}get locations(){return this._locations}get memoryEstimate(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*n.ru}dispose(){if(this._context){this._context.getBoundVAO()===this&&this._context.bindVAO(null);for(const t in this._buffers)this._buffers[t]?.dispose(),delete this._buffers[t];this._indexBuffer=(0,s.M2)(this._indexBuffer),this.disposeVAOOnly()}else(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&a.warn("Leaked WebGL VAO")}disposeVAOOnly(){if(this._glName){const t=this._context?.capabilities?.vao;t.deleteVertexArray(this._glName),this._glName=null}this._context.instanceCounter.decrement(h._g.VertexArrayObject,this),this._context=(0,s.wN)(this._context)}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e}this._initialized=!0}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:t,_layout:e,_indexBuffer:i}=this;t||a.error("Vertex buffer dictionary is empty!");const r=this._context.gl;for(const i in t){const r=t[i];r||a.error("Vertex buffer is uninitialized!");const s=e[i];s||a.error("Vertex element descriptor is empty!"),(0,o.XP)(this._context,this._locations,r,s)}null!=i&&(this._context.capabilities.vao?r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:t,_layout:e}=this;t||a.error("Vertex buffer dictionary is empty!");for(const i in t){const r=t[i];r||a.error("Vertex buffer is uninitialized!");const s=e[i];(0,o.UF)(this._context,this._locations,r,s)}null!=this._indexBuffer&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}}}]);