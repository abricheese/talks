(()=>{var fd=Object.defineProperty;var Lo=(s,e)=>()=>(s&&(e=s(s=0)),e);var pd=(s,e)=>{for(var t in e)fd(s,t,{get:e[t],enumerable:!0})};function un(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[s&255]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function Uc(s,e){return(s%e+e)%e}function sf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function rf(s,e,t){return s!==e?(t-s)/(e-s):0}function Is(s,e,t){return(1-t)*s+t*e}function of(s,e,t,n){return Is(s,e,1-Math.exp(-t*n))}function af(s,e=1){return e-Math.abs(Uc(s,e*2)-e)}function cf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function lf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function hf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function uf(s,e){return s+Math.random()*(e-s)}function df(s){return s*(.5-Math.random())}function ff(s){s!==void 0&&(Zl=s);let e=Zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pf(s){return s*$i}function mf(s){return s*os}function gf(s){return(s&s-1)===0&&s!==0}function _f(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yf(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function it(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}function vu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vf(){let s=Ns("canvas");return s.style.display="block",s}function As(s){s in Kl||(Kl[s]=!0,console.warn(s))}function Mf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Sf(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bf(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function Dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$a.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Fo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){di.fromArray(s,r);let a=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),c=e.dot(di),l=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function $o(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Uf(s,e,t,n,i,r,o,a){let c;if(e.side===Vt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===_n,a),c===null)return null;_r.copy(a),_r.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:s}}function xr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,fr),s.getVertexPosition(c,pr),s.getVertexPosition(l,mr);let h=Uf(s,e,t,n,fr,pr,mr,dh);if(h){let u=new P;jn.getBarycoord(dh,fr,pr,mr,u),i&&(h.uv=jn.getInterpolatedAttribute(i,a,c,l,u,new We)),r&&(h.uv1=jn.getInterpolatedAttribute(r,a,c,l,u,new We)),o&&(h.normal=jn.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new P,materialIndex:0};jn.getNormal(fr,pr,mr,d.normal),h.face=d,h.barycoord=u}return h}function as(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(s){let e={};for(let t=0;t<s.length;t++){let n=as(s[t]);for(let i in n)e[i]=n[i]}return e}function Of(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Su(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}function bu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Vf(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}function bg(s,e,t,n,i,r,o){let a=new de(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1,x=g(y);x===null?f(a,c):x&&x.isColor&&(f(x,1),v=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===mo)?(h===void 0&&(h=new He(new Os(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:as(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),mi.copy(v.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(mi)),h.material.toneMapped=qe.getTransfer(x.colorSpace)!==st,(u!==x||d!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new He(new Et(2,2),new Qt({name:"BackgroundMaterial",uniforms:as(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=qe.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,v){y.getRGB(vr,Su(s)),n.buffers.color.setClear(vr.r,vr.g,vr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:_,addToRenderList:m}}function Eg(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(S,I,F,O,V){let K=!1,X=u(O,F,I);r!==X&&(r=X,l(r.object)),K=p(S,O,F,V),K&&g(S,O,F,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(S,I,F,O),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,I,F){let O=F.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let K=V[I.id];K===void 0&&(K={},V[I.id]=K);let X=K[O];return X===void 0&&(X=d(c()),K[O]=X),X}function d(S){let I=[],F=[],O=[];for(let V=0;V<t;V++)I[V]=0,F[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,I,F,O){let V=r.attributes,K=I.attributes,X=0,j=F.getAttributes();for(let G in j)if(j[G].location>=0){let ue=V[G],Me=K[G];if(Me===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),ue===void 0||ue.attribute!==Me||Me&&ue.data!==Me.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(S,I,F,O){let V={},K=I.attributes,X=0,j=F.getAttributes();for(let G in j)if(j[G].location>=0){let ue=K[G];ue===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor));let Me={};Me.attribute=ue,ue&&ue.data&&(Me.data=ue.data),V[G]=Me,X++}r.attributes=V,r.attributesNum=X,r.index=O}function _(){let S=r.newAttributes;for(let I=0,F=S.length;I<F;I++)S[I]=0}function m(S){f(S,0)}function f(S,I){let F=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;F[S]=1,O[S]===0&&(s.enableVertexAttribArray(S),O[S]=1),V[S]!==I&&(s.vertexAttribDivisor(S,I),V[S]=I)}function y(){let S=r.newAttributes,I=r.enabledAttributes;for(let F=0,O=I.length;F<O;F++)I[F]!==S[F]&&(s.disableVertexAttribArray(F),I[F]=0)}function v(S,I,F,O,V,K,X){X===!0?s.vertexAttribIPointer(S,I,F,V,K):s.vertexAttribPointer(S,I,F,O,V,K)}function x(S,I,F,O){_();let V=O.attributes,K=F.getAttributes(),X=I.defaultAttributeValues;for(let j in K){let G=K[j];if(G.location>=0){let ne=V[j];if(ne===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){let ue=ne.normalized,Me=ne.itemSize,Fe=e.get(ne);if(Fe===void 0)continue;let Ee=Fe.buffer,H=Fe.type,$=Fe.bytesPerElement,ie=H===s.INT||H===s.UNSIGNED_INT||ne.gpuType===Rc;if(ne.isInterleavedBufferAttribute){let Q=ne.data,_e=Q.stride,Re=ne.offset;if(Q.isInstancedInterleavedBuffer){for(let Be=0;Be<G.locationSize;Be++)f(G.location+Be,Q.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Be=0;Be<G.locationSize;Be++)m(G.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Be=0;Be<G.locationSize;Be++)v(G.location+Be,Me/G.locationSize,H,ue,_e*$,(Re+Me/G.locationSize*Be)*$,ie)}else{if(ne.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)f(G.location+Q,ne.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Q=0;Q<G.locationSize;Q++)v(G.location+Q,Me/G.locationSize,H,ue,Me*$,Me/G.locationSize*Q*$,ie)}}else if(X!==void 0){let ue=X[j];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(G.location,ue);break;case 3:s.vertexAttrib3fv(G.location,ue);break;case 4:s.vertexAttrib4fv(G.location,ue);break;default:s.vertexAttrib1fv(G.location,ue)}}}}y()}function A(){C();for(let S in n){let I=n[S];for(let F in I){let O=I[F];for(let V in O)h(O[V].object),delete O[V];delete I[F]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;let I=n[S.id];for(let F in I){let O=I[F];for(let V in O)h(O[V].object),delete O[V];delete I[F]}delete n[S.id]}function T(S){for(let I in n){let F=n[I];if(F[S.id]===void 0)continue;let O=F[S.id];for(let V in O)h(O[V].object),delete O[V];delete F[S.id]}}function C(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Tg(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Jt&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===Ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Nn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==hn&&!C)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:R}}function Ag(s){let e=this,t=null,n=0,i=!1,r=!1,o=new In,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,v=y*4,x=f.clippingState||null;c.value=x,x=h(g,d,v,p);for(let A=0;A!==v;++A)x[A]=t[A];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let f=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,x=p;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Rg(s){let e=new WeakMap;function t(o,a){return a===Ma?o.mapping=es:a===Sa&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ma||a===Sa)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ec(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function Cg(s){let e=[],t=[],n=[],i=s,r=s-Yi+1+mh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Yi?c=mh[o-s+Yi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let R=0;R<p;R++){let T=R%3*2/3-1,C=R>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(b,_*g*R),v.set(d,m*g*R);let S=[R,R,R,R,R,R];x.set(S,f*g*R)}let A=new _t;A.setAttribute("position",new gt(y,_)),A.setAttribute("uv",new gt(v,m)),A.setAttribute("faceIndex",new gt(x,f)),e.push(A),i>Yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xh(s,e,t){let n=new dn(s,e,t);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ig(s,e,t){let n=new Float32Array(yi),i=new P(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function yh(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function vh(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ma||c===Sa,h=c===es||c===ts;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Xr(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Xr(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dg(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let v=0,x=y.length;v<x;v+=3){let A=y[v+0],R=y[v+1],T=y[v+2];d.push(A,R,R,T,T,A)}}else if(g!==void 0){let y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let A=v+0,R=v+1,T=v+2;d.push(A,R,R,T,T,A)}}else return;let m=new(vu(d)?Vr:Hr)(d,1);m.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ng(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ug(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Og(s,e,t){let n=new WeakMap,i=new Qe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let R=new Float32Array(x*A*4*u),T=new zr(R,x,A,u);T.type=hn,T.needsUpdate=!0;let C=v*4;for(let S=0;S<u;S++){let I=m[S],F=f[S],O=y[S],V=x*A*4*S;for(let K=0;K<I.count;K++){let X=K*C;p===!0&&(i.fromBufferAttribute(I,K),R[V+X+0]=i.x,R[V+X+1]=i.y,R[V+X+2]=i.z,R[V+X+3]=0),g===!0&&(i.fromBufferAttribute(F,K),R[V+X+4]=i.x,R[V+X+5]=i.y,R[V+X+6]=i.z,R[V+X+7]=0),_===!0&&(i.fromBufferAttribute(O,K),R[V+X+8]=i.x,R[V+X+9]=i.y,R[V+X+10]=i.z,R[V+X+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new We(x,A)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Fg(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}function fs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Sh[i];if(r===void 0&&(r=new Float32Array(i),Sh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function yo(s,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Bg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function kg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function zg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function Hg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function Vg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;wh.set(n),s.uniformMatrix2fv(this.addr,!1,wh),wt(t,n)}}function Gg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Th.set(n),s.uniformMatrix3fv(this.addr,!1,Th),wt(t,n)}}function Wg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Eh.set(n),s.uniformMatrix4fv(this.addr,!1,Eh),wt(t,n)}}function Xg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function qg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function Yg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function Zg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function Kg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $g(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function Jg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function jg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function Qg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Mh.compareFunction=yu,r=Mh):r=Eu,t.setTexture2D(e||r,i)}function e0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wu,i)}function t0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Au,i)}function n0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tu,i)}function i0(s){switch(s){case 5126:return Bg;case 35664:return kg;case 35665:return zg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return $g;case 36295:return Jg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}function s0(s,e){s.uniform1fv(this.addr,e)}function r0(s,e){let t=fs(e,this.size,2);s.uniform2fv(this.addr,t)}function o0(s,e){let t=fs(e,this.size,3);s.uniform3fv(this.addr,t)}function a0(s,e){let t=fs(e,this.size,4);s.uniform4fv(this.addr,t)}function c0(s,e){let t=fs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function l0(s,e){let t=fs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function h0(s,e){let t=fs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function u0(s,e){s.uniform1iv(this.addr,e)}function d0(s,e){s.uniform2iv(this.addr,e)}function f0(s,e){s.uniform3iv(this.addr,e)}function p0(s,e){s.uniform4iv(this.addr,e)}function m0(s,e){s.uniform1uiv(this.addr,e)}function g0(s,e){s.uniform2uiv(this.addr,e)}function _0(s,e){s.uniform3uiv(this.addr,e)}function x0(s,e){s.uniform4uiv(this.addr,e)}function y0(s,e,t){let n=this.cache,i=e.length,r=yo(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Eu,r[o])}function v0(s,e,t){let n=this.cache,i=e.length,r=yo(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||wu,r[o])}function M0(s,e,t){let n=this.cache,i=e.length,r=yo(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Au,r[o])}function S0(s,e,t){let n=this.cache,i=e.length,r=yo(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tu,r[o])}function b0(s){switch(s){case 5126:return s0;case 35664:return r0;case 35665:return o0;case 35666:return a0;case 35674:return c0;case 35675:return l0;case 35676:return h0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}function Ah(s,e){s.seq.push(e),s.map[e.id]=e}function E0(s,e,t){let n=s.name,i=n.length;for(ra.lastIndex=0;;){let r=ra.exec(n),o=ra.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ah(t,l===void 0?new tc(a,s,e):new nc(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new ic(a),Ah(t,u)),t=u}}}function Rh(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}function A0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function R0(s){qe._getMatrix(Ch,qe.workingColorSpace,s);let e=`mat3( ${Ch.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case _o:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ih(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+A0(s.getShaderSource(e),o)}else return i}function C0(s,e){let t=R0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function I0(s,e){let t;switch(e){case Bd:t="Linear";break;case kd:t="Reinhard";break;case zd:t="Cineon";break;case Hd:t="ACESFilmic";break;case Gd:t="AgX";break;case Wd:t="Neutral";break;case Vd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function P0(){qe.getLuminanceCoefficients(Sr);let s=Sr.x.toFixed(4),e=Sr.y.toFixed(4),t=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function D0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Rs(s){return s!==""}function Ph(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function sc(s){return s.replace(U0,F0)}function F0(s,e){let t=ze[e];if(t===void 0){let n=O0.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sc(t)}function Dh(s){return s.replace(B0,k0)}function k0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function H0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function G0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ou:e="ENVMAP_BLENDING_MULTIPLY";break;case Od:e="ENVMAP_BLENDING_MIX";break;case Fd:e="ENVMAP_BLENDING_ADD";break}return e}function W0(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function X0(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=z0(t),l=H0(t),h=V0(t),u=G0(t),d=W0(t),p=L0(t),g=D0(r),_=i.createProgram(),m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),f.length>0&&(f+=`
`)):(m=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),f=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?ze.tonemapping_pars_fragment:"",t.toneMapping!==ti?I0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,C0("linearToOutputTexel",t.outputColorSpace),P0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),o=sc(o),o=Ph(o,t),o=Lh(o,t),a=sc(a),a=Ph(a,t),a=Lh(a,t),o=Dh(o),a=Dh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=y+m+o,x=y+f+a,A=Rh(i,i.VERTEX_SHADER,v),R=Rh(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(I){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(R).trim(),K=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,R);else{let j=Ih(i,A,"vertex"),G=Ih(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+j+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||V==="")&&(X=!1);X&&(I.diagnostics={runnable:K,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:f}})}i.deleteShader(A),i.deleteShader(R),C=new ji(i,_),b=N0(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,T0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}function Y0(s,e,t,n,i,r,o){let a=new Us,c=new rc,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,I,F,O){let V=F.fog,K=O.geometry,X=b.isMeshStandardMaterial?F.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),G=j&&j.mapping===mo?j.image.height:null,ne=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Me=ue!==void 0?ue.length:0,Fe=0;K.morphAttributes.position!==void 0&&(Fe=1),K.morphAttributes.normal!==void 0&&(Fe=2),K.morphAttributes.color!==void 0&&(Fe=3);let Ee,H,$,ie;if(ne){let nt=mn[ne];Ee=nt.vertexShader,H=nt.fragmentShader}else Ee=b.vertexShader,H=b.fragmentShader,c.update(b),$=c.getVertexShaderID(b),ie=c.getFragmentShaderID(b);let Q=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Re=O.isInstancedMesh===!0,Be=O.isBatchedMesh===!0,rt=!!b.map,Ve=!!b.matcap,Ce=!!j,L=!!b.aoMap,pt=!!b.lightMap,Te=!!b.bumpMap,Ie=!!b.normalMap,he=!!b.displacementMap,Ge=!!b.emissiveMap,pe=!!b.metalnessMap,w=!!b.roughnessMap,M=b.anisotropy>0,B=b.clearcoat>0,Y=b.dispersion>0,J=b.iridescence>0,q=b.sheen>0,Se=b.transmission>0,oe=M&&!!b.anisotropyMap,fe=B&&!!b.clearcoatMap,Ke=B&&!!b.clearcoatNormalMap,ee=B&&!!b.clearcoatRoughnessMap,me=J&&!!b.iridescenceMap,Ae=J&&!!b.iridescenceThicknessMap,Le=q&&!!b.sheenColorMap,ge=q&&!!b.sheenRoughnessMap,Ye=!!b.specularMap,ke=!!b.specularColorMap,at=!!b.specularIntensityMap,D=Se&&!!b.transmissionMap,re=Se&&!!b.thicknessMap,W=!!b.gradientMap,Z=!!b.alphaMap,le=b.alphaTest>0,ae=!!b.alphaHash,Ne=!!b.extensions,mt=ti;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(mt=s.toneMapping);let It={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:Ee,fragmentShader:H,defines:b.defines,customVertexShaderID:$,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Be,batchingColor:Be&&O._colorsTexture!==null,instancing:Re,instancingColor:Re&&O.instanceColor!==null,instancingMorph:Re&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ut,alphaToCoverage:!!b.alphaToCoverage,map:rt,matcap:Ve,envMap:Ce,envMapMode:Ce&&j.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:pt,bumpMap:Te,normalMap:Ie,displacementMap:d&&he,emissiveMap:Ge,normalMapObjectSpace:Ie&&b.normalMapType===Kd,normalMapTangentSpace:Ie&&b.normalMapType===xu,metalnessMap:pe,roughnessMap:w,anisotropy:M,anisotropyMap:oe,clearcoat:B,clearcoatMap:fe,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ee,dispersion:Y,iridescence:J,iridescenceMap:me,iridescenceThicknessMap:Ae,sheen:q,sheenColorMap:Le,sheenRoughnessMap:ge,specularMap:Ye,specularColorMap:ke,specularIntensityMap:at,transmission:Se,transmissionMap:D,thicknessMap:re,gradientMap:W,opaque:b.transparent===!1&&b.blending===Zi&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:ae,combine:b.combine,mapUv:rt&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:pt&&_(b.lightMap.channel),bumpMapUv:Te&&_(b.bumpMap.channel),normalMapUv:Ie&&_(b.normalMap.channel),displacementMapUv:he&&_(b.displacementMap.channel),emissiveMapUv:Ge&&_(b.emissiveMap.channel),metalnessMapUv:pe&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:oe&&_(b.anisotropyMap.channel),clearcoatMapUv:fe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(b.sheenRoughnessMap.channel),specularMapUv:Ye&&_(b.specularMap.channel),specularColorMapUv:ke&&_(b.specularColorMap.channel),specularIntensityMapUv:at&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:re&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ie||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(rt||Z),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:_e,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:mt,decodeVideoTexture:rt&&b.map.isVideoTexture===!0&&qe.getTransfer(b.map.colorSpace)===st,decodeVideoTextureEmissive:Ge&&b.emissiveMap.isVideoTexture===!0&&qe.getTransfer(b.emissiveMap.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Rt,flipSided:b.side===Vt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ne&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&b.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function f(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)S.push(I),S.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(y(S,b),v(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let S=g[b.type],I;if(S){let F=mn[S];I=Ff.clone(F.uniforms)}else I=b.uniforms;return I}function A(b,S){let I;for(let F=0,O=h.length;F<O;F++){let V=h[F];if(V.cacheKey===S){I=V,++I.usedTimes;break}}return I===void 0&&(I=new X0(s,S,b,r),h.push(I)),I}function R(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function T(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:A,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:C}}function Z0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function K0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Uh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Oh(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||K0),n.length>1&&n.sort(d||Uh),i.length>1&&i.sort(d||Uh)}function h(){for(let u=e,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function $0(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Oh,s.set(n,[o])):i>=r.length?(o=new Oh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function J0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new de};break;case"SpotLight":t={position:new P,direction:new P,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function j0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}function e_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function t_(s){let e=new J0,t=j0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let i=new P,r=new Pe,o=new Pe;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,v=0,x=0,A=0,R=0,T=0;l.sort(e_);for(let b=0,S=l.length;b<S;b++){let I=l[b],F=I.color,O=I.intensity,V=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],O);T++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,G=t.get(I);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=X,p++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(F).multiplyScalar(O),X.distance=V,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[_]=X;let j=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,j.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[_]=j.matrix,I.castShadow){let G=t.get(I);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=K,x++}_++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(F).multiplyScalar(O),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=X,m++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let j=I.shadow,G=t.get(I);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=X,g++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(O),X.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[f]=X,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=T,n.version=Q0++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){let v=l[f];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Fh(s){let e=new t_(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function n_(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Fh(s),e.set(i,[a])):r>=o.length?(a=new Fh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function r_(s,e,t){let n=new Fs,i=new We,r=new We,o=new Qe,a=new ac({depthPacking:Zd}),c=new cc,l={},h=t.maxTextureSize,u={[_n]:Vt,[Vt]:_n,[Rt]:Rt},d=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new _t;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let f=this.type;this.render=function(R,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let b=s.getRenderTarget(),S=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ei),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=f!==Cn&&this.type===Cn,V=f===Cn&&this.type!==Cn;for(let K=0,X=R.length;K<X;K++){let j=R[K],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let ne=G.getFrameExtents();if(i.multiply(ne),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,G.mapSize.y=r.y)),G.map===null||O===!0||V===!0){let Me=this.type!==Cn?{minFilter:Nt,magFilter:Nt}:{};G.map!==null&&G.map.dispose(),G.map=new dn(i.x,i.y,Me),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let ue=G.getViewportCount();for(let Me=0;Me<ue;Me++){let Fe=G.getViewport(Me);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),F.viewport(o),G.updateMatrices(j,Me),n=G.getFrustum(),x(T,C,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Cn&&y(G,C),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,S,I)};function y(R,T){let C=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new dn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(T,null,C,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(T,null,C,p,_,null)}function v(R,T,C,b){let S=null,I=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=C.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let F=S.uuid,O=T.uuid,V=l[F];V===void 0&&(V={},l[F]=V);let K=V[O];K===void 0&&(K=S.clone(),V[O]=K,T.addEventListener("dispose",A)),S=K}if(S.visible=T.visible,S.wireframe=T.wireframe,b===Cn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=s.properties.get(S);F.light=C}return S}function x(R,T,C,b,S){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Cn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);let O=e.update(R),V=R.material;if(Array.isArray(V)){let K=O.groups;for(let X=0,j=K.length;X<j;X++){let G=K[X],ne=V[G.materialIndex];if(ne&&ne.visible){let ue=v(R,ne,b,S);R.onBeforeShadow(s,R,T,C,O,ue,G),s.renderBufferDirect(C,null,O,ue,R,G),R.onAfterShadow(s,R,T,C,O,ue,G)}}}else if(V.visible){let K=v(R,V,b,S);R.onBeforeShadow(s,R,T,C,O,K,null),s.renderBufferDirect(C,null,O,K,R,null),R.onAfterShadow(s,R,T,C,O,K,null)}}let F=R.children;for(let O=0,V=F.length;O<V;O++)x(F[O],T,C,b,S)}function A(R){R.target.removeEventListener("dispose",A);for(let C in l){let b=l[C],S=R.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function a_(s,e){function t(){let D=!1,re=new Qe,W=null,Z=new Qe(0,0,0,0);return{setMask:function(le){W!==le&&!D&&(s.colorMask(le,le,le,le),W=le)},setLocked:function(le){D=le},setClear:function(le,ae,Ne,mt,It){It===!0&&(le*=mt,ae*=mt,Ne*=mt),re.set(le,ae,Ne,mt),Z.equals(re)===!1&&(s.clearColor(le,ae,Ne,mt),Z.copy(re))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,re=!1,W=null,Z=null,le=null;return{setReversed:function(ae){if(re!==ae){let Ne=e.get("EXT_clip_control");re?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);let mt=le;le=null,this.setClear(mt)}re=ae},getReversed:function(){return re},setTest:function(ae){ae?Q(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(ae){W!==ae&&!D&&(s.depthMask(ae),W=ae)},setFunc:function(ae){if(re&&(ae=o_[ae]),Z!==ae){switch(ae){case pa:s.depthFunc(s.NEVER);break;case ma:s.depthFunc(s.ALWAYS);break;case ga:s.depthFunc(s.LESS);break;case Qi:s.depthFunc(s.LEQUAL);break;case _a:s.depthFunc(s.EQUAL);break;case xa:s.depthFunc(s.GEQUAL);break;case ya:s.depthFunc(s.GREATER);break;case va:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ae}},setLocked:function(ae){D=ae},setClear:function(ae){le!==ae&&(re&&(ae=1-ae),s.clearDepth(ae),le=ae)},reset:function(){D=!1,W=null,Z=null,le=null,re=!1}}}function i(){let D=!1,re=null,W=null,Z=null,le=null,ae=null,Ne=null,mt=null,It=null;return{setTest:function(nt){D||(nt?Q(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(nt){re!==nt&&!D&&(s.stencilMask(nt),re=nt)},setFunc:function(nt,sn,Mn){(W!==nt||Z!==sn||le!==Mn)&&(s.stencilFunc(nt,sn,Mn),W=nt,Z=sn,le=Mn)},setOp:function(nt,sn,Mn){(ae!==nt||Ne!==sn||mt!==Mn)&&(s.stencilOp(nt,sn,Mn),ae=nt,Ne=sn,mt=Mn)},setLocked:function(nt){D=nt},setClear:function(nt){It!==nt&&(s.clearStencil(nt),It=nt)},reset:function(){D=!1,re=null,W=null,Z=null,le=null,ae=null,Ne=null,mt=null,It=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,v=null,x=null,A=null,R=null,T=new de(0,0,0),C=0,b=!1,S=null,I=null,F=null,O=null,V=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,j=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=j>=2);let ne=null,ue={},Me=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),Ee=new Qe().fromArray(Me),H=new Qe().fromArray(Fe);function $(D,re,W,Z){let le=new Uint8Array(4),ae=s.createTexture();s.bindTexture(D,ae),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<W;Ne++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(re+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return ae}let ie={};ie[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(Qi),Te(!1),Ie(kl),Q(s.CULL_FACE),L(ei);function Q(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function _e(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Re(D,re){return u[D]!==re?(s.bindFramebuffer(D,re),u[D]=re,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=re),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=re),!0):!1}function Be(D,re){let W=p,Z=!1;if(D){W=d.get(re),W===void 0&&(W=[],d.set(re,W));let le=D.textures;if(W.length!==le.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,Ne=le.length;ae<Ne;ae++)W[ae]=s.COLOR_ATTACHMENT0+ae;W.length=le.length,Z=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,Z=!0);Z&&s.drawBuffers(W)}function rt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let Ve={[xi]:s.FUNC_ADD,[yd]:s.FUNC_SUBTRACT,[vd]:s.FUNC_REVERSE_SUBTRACT};Ve[Md]=s.MIN,Ve[Sd]=s.MAX;let Ce={[bd]:s.ZERO,[Ed]:s.ONE,[Td]:s.SRC_COLOR,[da]:s.SRC_ALPHA,[Pd]:s.SRC_ALPHA_SATURATE,[Cd]:s.DST_COLOR,[Ad]:s.DST_ALPHA,[wd]:s.ONE_MINUS_SRC_COLOR,[fa]:s.ONE_MINUS_SRC_ALPHA,[Id]:s.ONE_MINUS_DST_COLOR,[Rd]:s.ONE_MINUS_DST_ALPHA,[Ld]:s.CONSTANT_COLOR,[Dd]:s.ONE_MINUS_CONSTANT_COLOR,[Nd]:s.CONSTANT_ALPHA,[Ud]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,re,W,Z,le,ae,Ne,mt,It,nt){if(D===ei){_===!0&&(_e(s.BLEND),_=!1);return}if(_===!1&&(Q(s.BLEND),_=!0),D!==xd){if(D!==m||nt!==b){if((f!==xi||x!==xi)&&(s.blendEquation(s.FUNC_ADD),f=xi,x=xi),nt)switch(D){case Zi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xn:s.blendFunc(s.ONE,s.ONE);break;case zl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case zl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,v=null,A=null,R=null,T.set(0,0,0),C=0,m=D,b=nt}return}le=le||re,ae=ae||W,Ne=Ne||Z,(re!==f||le!==x)&&(s.blendEquationSeparate(Ve[re],Ve[le]),f=re,x=le),(W!==y||Z!==v||ae!==A||Ne!==R)&&(s.blendFuncSeparate(Ce[W],Ce[Z],Ce[ae],Ce[Ne]),y=W,v=Z,A=ae,R=Ne),(mt.equals(T)===!1||It!==C)&&(s.blendColor(mt.r,mt.g,mt.b,It),T.copy(mt),C=It),m=D,b=!1}function pt(D,re){D.side===Rt?_e(s.CULL_FACE):Q(s.CULL_FACE);let W=D.side===Vt;re&&(W=!W),Te(W),D.blending===Zi&&D.transparent===!1?L(ei):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(D){S!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),S=D)}function Ie(D){D!==md?(Q(s.CULL_FACE),D!==I&&(D===kl?s.cullFace(s.BACK):D===gd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),I=D}function he(D){D!==F&&(X&&s.lineWidth(D),F=D)}function Ge(D,re,W){D?(Q(s.POLYGON_OFFSET_FILL),(O!==re||V!==W)&&(s.polygonOffset(re,W),O=re,V=W)):_e(s.POLYGON_OFFSET_FILL)}function pe(D){D?Q(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function w(D){D===void 0&&(D=s.TEXTURE0+K-1),ne!==D&&(s.activeTexture(D),ne=D)}function M(D,re,W){W===void 0&&(ne===null?W=s.TEXTURE0+K-1:W=ne);let Z=ue[W];Z===void 0&&(Z={type:void 0,texture:void 0},ue[W]=Z),(Z.type!==D||Z.texture!==re)&&(ne!==W&&(s.activeTexture(W),ne=W),s.bindTexture(D,re||ie[D]),Z.type=D,Z.texture=re)}function B(){let D=ue[ne];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){Ee.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ee.copy(D))}function ge(D){H.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),H.copy(D))}function Ye(D,re){let W=l.get(re);W===void 0&&(W=new WeakMap,l.set(re,W));let Z=W.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(re,D.name),W.set(D,Z))}function ke(D,re){let Z=l.get(re).get(D);c.get(re)!==Z&&(s.uniformBlockBinding(re,Z,D.__bindingPointIndex),c.set(re,Z))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ne=null,ue={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,v=null,x=null,A=null,R=null,T=new de(0,0,0),C=0,b=!1,S=null,I=null,F=null,O=null,V=null,Ee.set(0,0,s.canvas.width,s.canvas.height),H.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:_e,bindFramebuffer:Re,drawBuffers:Be,useProgram:rt,setBlending:L,setMaterial:pt,setFlipSided:Te,setCullFace:Ie,setLineWidth:he,setPolygonOffset:Ge,setScissorTest:pe,activeTexture:w,bindTexture:M,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:me,texImage3D:Ae,updateUBOMapping:Ye,uniformBlockBinding:ke,texStorage2D:Ke,texStorage3D:ee,texSubImage2D:q,texSubImage3D:Se,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Le,viewport:ge,reset:at}}function Bh(s,e,t,n){let i=c_(n);switch(t){case uu:return s*e;case fu:return s*e;case pu:return s*e*2;case Pc:return s*e/i.components*i.byteLength;case Lc:return s*e/i.components*i.byteLength;case mu:return s*e*2/i.components*i.byteLength;case Dc:return s*e*2/i.components*i.byteLength;case du:return s*e*3/i.components*i.byteLength;case Jt:return s*e*4/i.components*i.byteLength;case Nc:return s*e*4/i.components*i.byteLength;case Dr:case Nr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Or:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ea:case wa:return Math.max(s,16)*Math.max(e,8)/4;case ba:case Ta:return Math.max(s,8)*Math.max(e,8)/2;case Aa:case Ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ca:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Na:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fr:case Wa:case Xa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case gu:case qa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ya:case Za:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c_(s){switch(s){case Nn:case cu:return{byteLength:1,components:1};case Ds:case lu:case Ws:return{byteLength:2,components:1};case Cc:case Ic:return{byteLength:2,components:4};case Mi:case Rc:case hn:return{byteLength:4,components:1};case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function l_(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):Ns("canvas")}function _(w,M,B){let Y=1,J=pe(w);if((J.width>B||J.height>B)&&(Y=B/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let q=Math.floor(Y*J.width),Se=Math.floor(Y*J.height);u===void 0&&(u=g(q,Se));let oe=M?g(q,Se):u;return oe.width=q,oe.height=Se,oe.getContext("2d").drawImage(w,0,0,q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Se+")."),oe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){s.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(w,M,B,Y,J=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=M;if(M===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),M===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8)),M===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),M===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),M===s.RGBA){let Se=J?_o:qe.getTransfer(Y);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=Se===st?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(w,M){let B;return w?M===null||M===Mi||M===ns?B=s.DEPTH24_STENCIL8:M===hn?B=s.DEPTH32F_STENCIL8:M===Ds&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mi||M===ns?B=s.DEPTH_COMPONENT24:M===hn?B=s.DEPTH_COMPONENT32F:M===Ds&&(B=s.DEPTH_COMPONENT16),B}function A(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Nt&&w.minFilter!==Ht?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){let M=w.target;M.removeEventListener("dispose",R),C(M),M.isVideoTexture&&h.delete(M)}function T(w){let M=w.target;M.removeEventListener("dispose",T),S(M)}function C(w){let M=n.get(w);if(M.__webglInit===void 0)return;let B=w.source,Y=d.get(B);if(Y){let J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(w),Object.keys(Y).length===0&&d.delete(B)}n.remove(w)}function b(w){let M=n.get(w);s.deleteTexture(M.__webglTexture);let B=w.source,Y=d.get(B);delete Y[M.__cacheKey],o.memory.textures--}function S(w){let M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)s.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else s.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)s.deleteFramebuffer(M.__webglFramebuffer[Y]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=w.textures;for(let Y=0,J=B.length;Y<J;Y++){let q=n.get(B[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(w)}let I=0;function F(){I=0}function O(){let w=I;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),I+=1,w}function V(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function K(w,M){let B=n.get(w);if(w.isVideoTexture&&he(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(B,w,M);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function X(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){H(B,w,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function j(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){H(B,w,M);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function G(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){$(B,w,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}let ne={[vi]:s.REPEAT,[Pn]:s.CLAMP_TO_EDGE,[Ls]:s.MIRRORED_REPEAT},ue={[Nt]:s.NEAREST,[Ac]:s.NEAREST_MIPMAP_NEAREST,[qi]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[Cs]:s.LINEAR_MIPMAP_NEAREST,[gn]:s.LINEAR_MIPMAP_LINEAR},Me={[$d]:s.NEVER,[nf]:s.ALWAYS,[Jd]:s.LESS,[yu]:s.LEQUAL,[jd]:s.EQUAL,[tf]:s.GEQUAL,[Qd]:s.GREATER,[ef]:s.NOTEQUAL};function Fe(w,M){if(M.type===hn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ht||M.magFilter===Cs||M.magFilter===qi||M.magFilter===gn||M.minFilter===Ht||M.minFilter===Cs||M.minFilter===qi||M.minFilter===gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,ne[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,ne[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,ne[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ue[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nt||M.minFilter!==qi&&M.minFilter!==gn||M.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ee(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));let Y=M.source,J=d.get(Y);J===void 0&&(J={},d.set(Y,J));let q=V(M);if(q!==w.__cacheKey){J[q]===void 0&&(J[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[q].usedTimes++;let Se=J[w.__cacheKey];Se!==void 0&&(J[w.__cacheKey].usedTimes--,Se.usedTimes===0&&b(M)),w.__cacheKey=q,w.__webglTexture=J[q].texture}return B}function H(w,M,B){let Y=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=s.TEXTURE_3D);let J=Ee(w,M),q=M.source;t.bindTexture(Y,w.__webglTexture,s.TEXTURE0+B);let Se=n.get(q);if(q.version!==Se.__version||J===!0){t.activeTexture(s.TEXTURE0+B);let oe=qe.getPrimaries(qe.workingColorSpace),fe=M.colorSpace===Jn?null:qe.getPrimaries(M.colorSpace),Ke=M.colorSpace===Jn||oe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ee=_(M.image,!1,i.maxTextureSize);ee=Ge(M,ee);let me=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),Le=v(M.internalFormat,me,Ae,M.colorSpace,M.isVideoTexture);Fe(Y,M);let ge,Ye=M.mipmaps,ke=M.isVideoTexture!==!0,at=Se.__version===void 0||J===!0,D=q.dataReady,re=A(M,ee);if(M.isDepthTexture)Le=x(M.format===is,M.type),at&&(ke?t.texStorage2D(s.TEXTURE_2D,1,Le,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Le,ee.width,ee.height,0,me,Ae,null));else if(M.isDataTexture)if(Ye.length>0){ke&&at&&t.texStorage2D(s.TEXTURE_2D,re,Le,Ye[0].width,Ye[0].height);for(let W=0,Z=Ye.length;W<Z;W++)ge=Ye[W],ke?D&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,ge.width,ge.height,me,Ae,ge.data):t.texImage2D(s.TEXTURE_2D,W,Le,ge.width,ge.height,0,me,Ae,ge.data);M.generateMipmaps=!1}else ke?(at&&t.texStorage2D(s.TEXTURE_2D,re,Le,ee.width,ee.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,me,Ae,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Le,ee.width,ee.height,0,me,Ae,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,Le,Ye[0].width,Ye[0].height,ee.depth);for(let W=0,Z=Ye.length;W<Z;W++)if(ge=Ye[W],M.format!==Jt)if(me!==null)if(ke){if(D)if(M.layerUpdates.size>0){let le=Bh(ge.width,ge.height,M.format,M.type);for(let ae of M.layerUpdates){let Ne=ge.data.subarray(ae*le/ge.data.BYTES_PER_ELEMENT,(ae+1)*le/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ae,ge.width,ge.height,1,me,Ne)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,ee.depth,me,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Le,ge.width,ge.height,ee.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,ee.depth,me,Ae,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,W,Le,ge.width,ge.height,ee.depth,0,me,Ae,ge.data)}else{ke&&at&&t.texStorage2D(s.TEXTURE_2D,re,Le,Ye[0].width,Ye[0].height);for(let W=0,Z=Ye.length;W<Z;W++)ge=Ye[W],M.format!==Jt?me!==null?ke?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,W,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?D&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,ge.width,ge.height,me,Ae,ge.data):t.texImage2D(s.TEXTURE_2D,W,Le,ge.width,ge.height,0,me,Ae,ge.data)}else if(M.isDataArrayTexture)if(ke){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,Le,ee.width,ee.height,ee.depth),D)if(M.layerUpdates.size>0){let W=Bh(ee.width,ee.height,M.format,M.type);for(let Z of M.layerUpdates){let le=ee.data.subarray(Z*W/ee.data.BYTES_PER_ELEMENT,(Z+1)*W/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,me,Ae,le)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,me,Ae,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,ee.width,ee.height,ee.depth,0,me,Ae,ee.data);else if(M.isData3DTexture)ke?(at&&t.texStorage3D(s.TEXTURE_3D,re,Le,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,me,Ae,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Le,ee.width,ee.height,ee.depth,0,me,Ae,ee.data);else if(M.isFramebufferTexture){if(at)if(ke)t.texStorage2D(s.TEXTURE_2D,re,Le,ee.width,ee.height);else{let W=ee.width,Z=ee.height;for(let le=0;le<re;le++)t.texImage2D(s.TEXTURE_2D,le,Le,W,Z,0,me,Ae,null),W>>=1,Z>>=1}}else if(Ye.length>0){if(ke&&at){let W=pe(Ye[0]);t.texStorage2D(s.TEXTURE_2D,re,Le,W.width,W.height)}for(let W=0,Z=Ye.length;W<Z;W++)ge=Ye[W],ke?D&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,me,Ae,ge):t.texImage2D(s.TEXTURE_2D,W,Le,me,Ae,ge);M.generateMipmaps=!1}else if(ke){if(at){let W=pe(ee);t.texStorage2D(s.TEXTURE_2D,re,Le,W.width,W.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Ae,ee)}else t.texImage2D(s.TEXTURE_2D,0,Le,me,Ae,ee);m(M)&&f(Y),Se.__version=q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function $(w,M,B){if(M.image.length!==6)return;let Y=Ee(w,M),J=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);let q=n.get(J);if(J.version!==q.__version||Y===!0){t.activeTexture(s.TEXTURE0+B);let Se=qe.getPrimaries(qe.workingColorSpace),oe=M.colorSpace===Jn?null:qe.getPrimaries(M.colorSpace),fe=M.colorSpace===Jn||Se===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ke=M.isCompressedTexture||M.image[0].isCompressedTexture,ee=M.image[0]&&M.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Ke&&!ee?me[Z]=_(M.image[Z],!0,i.maxCubemapSize):me[Z]=ee?M.image[Z].image:M.image[Z],me[Z]=Ge(M,me[Z]);let Ae=me[0],Le=r.convert(M.format,M.colorSpace),ge=r.convert(M.type),Ye=v(M.internalFormat,Le,ge,M.colorSpace),ke=M.isVideoTexture!==!0,at=q.__version===void 0||Y===!0,D=J.dataReady,re=A(M,Ae);Fe(s.TEXTURE_CUBE_MAP,M);let W;if(Ke){ke&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,re,Ye,Ae.width,Ae.height);for(let Z=0;Z<6;Z++){W=me[Z].mipmaps;for(let le=0;le<W.length;le++){let ae=W[le];M.format!==Jt?Le!==null?ke?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,ae.width,ae.height,Le,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Ye,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,ae.width,ae.height,Le,ge,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Ye,ae.width,ae.height,0,Le,ge,ae.data)}}}else{if(W=M.mipmaps,ke&&at){W.length>0&&re++;let Z=pe(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,re,Ye,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){ke?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Le,ge,me[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,me[Z].width,me[Z].height,0,Le,ge,me[Z].data);for(let le=0;le<W.length;le++){let Ne=W[le].image[Z].image;ke?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Ne.width,Ne.height,Le,ge,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Ye,Ne.width,Ne.height,0,Le,ge,Ne.data)}}else{ke?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,ge,me[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,Le,ge,me[Z]);for(let le=0;le<W.length;le++){let ae=W[le];ke?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Le,ge,ae.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Ye,Le,ge,ae.image[Z])}}}m(M)&&f(s.TEXTURE_CUBE_MAP),q.__version=J.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ie(w,M,B,Y,J,q){let Se=r.convert(B.format,B.colorSpace),oe=r.convert(B.type),fe=v(B.internalFormat,Se,oe,B.colorSpace),Ke=n.get(M),ee=n.get(B);if(ee.__renderTarget=M,!Ke.__hasExternalTextures){let me=Math.max(1,M.width>>q),Ae=Math.max(1,M.height>>q);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,q,fe,me,Ae,M.depth,0,Se,oe,null):t.texImage2D(J,q,fe,me,Ae,0,Se,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),Ie(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,ee.__webglTexture,0,Te(M)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,ee.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(w,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer){let Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,q=x(M.stencilBuffer,J),Se=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=Te(M);Ie(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,q,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,q,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,w)}else{let Y=M.textures;for(let J=0;J<Y.length;J++){let q=Y[J],Se=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),fe=v(q.internalFormat,Se,oe,q.colorSpace),Ke=Te(M);B&&Ie(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,fe,M.width,M.height):Ie(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,fe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,fe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);let J=Y.__webglTexture,q=Te(M);if(M.depthTexture.format===Ki)Ie(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(M.depthTexture.format===is)Ie(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Re(w){let M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let Y=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=s.createRenderbuffer(),Q(M.__webglDepthbuffer[Y],w,!1);else{let J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Q(M.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(w,M,B){let Y=n.get(w);M!==void 0&&ie(Y.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Re(w)}function rt(w){let M=w.texture,B=n.get(w),Y=n.get(M);w.addEventListener("dispose",T);let J=w.textures,q=w.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=M.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let fe=0;fe<M.mipmaps.length;fe++)B.__webglFramebuffer[oe][fe]=s.createFramebuffer()}else B.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)B.__webglFramebuffer[oe]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Se)for(let oe=0,fe=J.length;oe<fe;oe++){let Ke=n.get(J[oe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&Ie(w)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){let fe=J[oe];B.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);let Ke=r.convert(fe.format,fe.colorSpace),ee=r.convert(fe.type),me=v(fe.internalFormat,Ke,ee,fe.colorSpace,w.isXRRenderTarget===!0),Ae=Te(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)ie(B.__webglFramebuffer[oe][fe],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else ie(B.__webglFramebuffer[oe],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(M)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let oe=0,fe=J.length;oe<fe;oe++){let Ke=J[oe],ee=n.get(Ke);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),Fe(s.TEXTURE_2D,Ke),ie(B.__webglFramebuffer,w,Ke,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),m(Ke)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(oe=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),Fe(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)ie(B.__webglFramebuffer[fe],w,M,s.COLOR_ATTACHMENT0,oe,fe);else ie(B.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,oe,0);m(M)&&f(oe),t.unbindTexture()}w.depthBuffer&&Re(w)}function Ve(w){let M=w.textures;for(let B=0,Y=M.length;B<Y;B++){let J=M[B];if(m(J)){let q=y(w),Se=n.get(J).__webglTexture;t.bindTexture(q,Se),f(q),t.unbindTexture()}}}let Ce=[],L=[];function pt(w){if(w.samples>0){if(Ie(w)===!1){let M=w.textures,B=w.width,Y=w.height,J=s.COLOR_BUFFER_BIT,q=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(w),oe=M.length>1;if(oe)for(let fe=0;fe<M.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);let Ke=n.get(M[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,B,Y,0,0,B,Y,J,s.NEAREST),c===!0&&(Ce.length=0,L.length=0,Ce.push(s.COLOR_ATTACHMENT0+fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ce.push(q),L.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<M.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);let Ke=n.get(M[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let M=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Te(w){return Math.min(i.maxSamples,w.samples)}function Ie(w){let M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function he(w){let M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Ge(w,M){let B=w.colorSpace,Y=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Ut&&B!==Jn&&(qe.getTransfer(B)===st?(Y!==Jt||J!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Be,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ie}function h_(s,e){function t(n,i=Jn){let r,o=qe.getTransfer(i);if(n===Nn)return s.UNSIGNED_BYTE;if(n===Cc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ic)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return s.BYTE;if(n===lu)return s.SHORT;if(n===Ds)return s.UNSIGNED_SHORT;if(n===Rc)return s.INT;if(n===Mi)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===Ws)return s.HALF_FLOAT;if(n===uu)return s.ALPHA;if(n===du)return s.RGB;if(n===Jt)return s.RGBA;if(n===fu)return s.LUMINANCE;if(n===pu)return s.LUMINANCE_ALPHA;if(n===Ki)return s.DEPTH_COMPONENT;if(n===is)return s.DEPTH_STENCIL;if(n===Pc)return s.RED;if(n===Lc)return s.RED_INTEGER;if(n===mu)return s.RG;if(n===Dc)return s.RG_INTEGER;if(n===Nc)return s.RGBA_INTEGER;if(n===Dr||n===Nr||n===Ur||n===Or)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Ea||n===Ta||n===wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ra)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===Pa||n===La||n===Da||n===Na||n===Ua||n===Oa||n===Fa||n===Ba||n===ka||n===za||n===Ha||n===Va||n===Ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===Wa||n===Xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gu||n===qa||n===Ya||n===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}function m_(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Su(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,y,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=e.get(f),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,gi.copy(x),gi.x*=-1,gi.y*=-1,gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(gi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function g_(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let x=v.program;n.uniformBlockBinding(y,x)}function l(y,v){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",m));let A=v.program;n.updateUBOMapping(y,A);let R=e.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){let v=u();y.__bindingPointIndex=v;let x=s.createBuffer(),A=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,A,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=i[y.id],x=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,T=x.length;R<T;R++){let C=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,S=C.length;b<S;b++){let I=C[b];if(p(I,R,b,A)===!0){let F=I.__offset,O=Array.isArray(I.value)?I.value:[I.value],V=0;for(let K=0;K<O.length;K++){let X=O[K],j=_(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,F+V,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,v,x,A){let R=y.value,T=v+"_"+x;if(A[T]===void 0)return typeof R=="number"||typeof R=="boolean"?A[T]=R:A[T]=R.clone(),!0;{let C=A[T];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return A[T]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(y){let v=y.uniforms,x=0,A=16;for(let T=0,C=v.length;T<C;T++){let b=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,I=b.length;S<I;S++){let F=b[S],O=Array.isArray(F.value)?F.value:[F.value];for(let V=0,K=O.length;V<K;V++){let X=O[V],j=_(X),G=x%A,ne=G%j.boundary,ue=G+ne;x+=ne,ue!==0&&A-ue<j.storage&&(x+=A-ue),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=j.storage}}}let R=x%A;return R>0&&(x+=A-R),y.__size=x,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}function wr(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(eo.fromBufferAttribute(o,i),to.fromBufferAttribute(o,r),t.distanceSqToSegment(eo,to,ca,Zh)>n)return;ca.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ca);if(!(c<e.near||c>e.far))return{distance:c,point:Zh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}function jh(s,e,t,n,i,r,o){let a=dc.distanceSqToPoint(s);if(a<t){let c=new P;dc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Lr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function v_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function M_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qh(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Ru(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function S_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Un;case"vector":case"vector2":case"vector3":case"vector4":return Fn;case"color":return oo;case"quaternion":return On;case"bool":case"boolean":return oi;case"string":return ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function b_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=S_(s.type);if(s.times===void 0){let t=[],n=[];Ru(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}function su(s,e){return s.distance-e.distance}function Tc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Tc(r[o],e,t,!0)}}var wc,md,kl,gd,ru,_d,Cn,_n,Vt,Rt,ei,Zi,xn,zl,Hl,xd,xi,yd,vd,Md,Sd,bd,Ed,Td,wd,da,fa,Ad,Rd,Cd,Id,Pd,Ld,Dd,Nd,Ud,pa,ma,ga,Qi,_a,xa,ya,va,ou,Od,Fd,ti,Bd,kd,zd,Hd,Vd,Gd,Wd,Vl,Xd,au,es,ts,Ma,Sa,mo,vi,Pn,Ls,Nt,Ac,qi,Ht,Cs,gn,Nn,cu,lu,Ds,Rc,Mi,hn,Ws,Cc,Ic,ns,hu,uu,du,Jt,fu,pu,Ki,is,Pc,Lc,mu,Dc,Nc,Dr,Nr,Ur,Or,ba,Ea,Ta,wa,Aa,Ra,Ca,Ia,Pa,La,Da,Na,Ua,Oa,Fa,Ba,ka,za,Ha,Va,Ga,Fr,Wa,Xa,gu,qa,Ya,Za,ss,rs,Do,Gl,Wl,Xl,qd,_u,go,Xs,Yd,Zd,xu,Kd,Jn,je,Ut,_o,st,Pi,ql,$d,Jd,jd,yu,Qd,ef,tf,nf,Ka,Yl,Ln,Br,ni,Pt,Zl,$i,os,xo,We,Oe,No,Kl,qe,$l,Jl,jl,Ql,eh,Li,$a,Ef,kr,Tf,bt,Qe,Ja,dn,zr,ja,Ct,P,Oo,th,jt,bn,on,ir,Di,Ni,Ui,Xn,qn,ui,ys,sr,rr,di,wf,vs,Bo,qt,En,ko,or,Yn,zo,ar,Ho,Si,Pe,Oi,an,Af,Rf,Zn,cr,Wt,nh,ih,yn,Us,Cf,sh,Fi,Tn,lr,Ms,If,Pf,rh,oh,ah,ch,Lf,Bi,Vo,ft,cn,wn,Go,An,ki,zi,lh,Wo,Xo,qo,Yo,Zo,Ko,jn,Mu,Kn,hr,de,Lt,Df,Yt,Ze,Mt,ur,gt,Hr,Vr,Je,Nf,$t,Jo,Hi,Xt,Ss,At,_t,hh,fi,dr,uh,fr,pr,mr,jo,gr,dh,_r,He,Os,Ff,Bf,kf,Qt,Gr,$n,fh,ph,St,Vi,Gi,Qa,Wr,ec,Qo,zf,Hf,In,pi,yr,Fs,Et,Gf,Wf,Xf,qf,Yf,Zf,Kf,$f,Jf,jf,Qf,ep,tp,np,ip,sp,rp,op,ap,cp,lp,hp,up,dp,fp,pp,mp,gp,_p,xp,yp,vp,Mp,Sp,bp,Ep,Tp,wp,Ap,Rp,Cp,Ip,Pp,Lp,Dp,Np,Up,Op,Fp,Bp,kp,zp,Hp,Vp,Gp,Wp,Xp,qp,Yp,Zp,Kp,$p,Jp,jp,Qp,em,tm,nm,im,sm,rm,om,am,cm,lm,hm,um,dm,fm,pm,mm,gm,_m,xm,ym,vm,Mm,Sm,bm,Em,Tm,wm,Am,Rm,Cm,Im,Pm,Lm,Dm,Nm,Um,Om,Fm,Bm,km,zm,Hm,Vm,Gm,Wm,Xm,qm,Ym,Zm,Km,$m,Jm,jm,Qm,eg,tg,ng,ig,sg,rg,og,ag,cg,lg,hg,ug,dg,fg,pg,mg,gg,_g,xg,yg,vg,Mg,ze,se,mn,vr,mi,Sg,cs,Yi,mh,yi,ea,gh,ta,na,ia,sa,_i,Wi,_h,Xr,qr,Eu,Mh,Tu,wu,Au,Sh,bh,Eh,Th,wh,tc,nc,ic,ra,ji,T0,w0,Ch,Sr,U0,O0,B0,q0,rc,oc,Q0,ac,cc,i_,s_,o_,lc,ht,u_,Ps,d_,f_,hc,uc,gi,p_,Yr,Zr,Kr,Bs,Bt,ks,kh,zh,Hh,__,Vh,br,oa,Gh,aa,$r,zs,Jr,Wh,x_,jr,bi,Xi,Xh,Er,qh,y_,bs,Es,Qr,ii,eo,to,Yh,Ts,Tr,ca,Zh,ls,Kh,$h,Ei,no,Ti,Jh,dc,Ar,Rr,wi,fn,io,fc,so,Cr,Ir,la,Pr,ro,si,Hs,hs,Zt,ri,pc,mc,gc,en,oi,oo,Un,_c,On,ai,Fn,ao,Qn,xc,E_,Bn,Rn,yc,Vs,vc,Ai,us,co,ha,eu,tu,Gs,Mc,lo,nu,ws,ua,Sc,ho,bc,ds,ci,uo,Fc,T_,Bc,w_,A_,R_,C_,I_,P_,L_,Ec,lt,dx,iu,fo,po,kn=Lo(()=>{wc="170",md=0,kl=1,gd=2,ru=1,_d=2,Cn=3,_n=0,Vt=1,Rt=2,ei=0,Zi=1,xn=2,zl=3,Hl=4,xd=5,xi=100,yd=101,vd=102,Md=103,Sd=104,bd=200,Ed=201,Td=202,wd=203,da=204,fa=205,Ad=206,Rd=207,Cd=208,Id=209,Pd=210,Ld=211,Dd=212,Nd=213,Ud=214,pa=0,ma=1,ga=2,Qi=3,_a=4,xa=5,ya=6,va=7,ou=0,Od=1,Fd=2,ti=0,Bd=1,kd=2,zd=3,Hd=4,Vd=5,Gd=6,Wd=7,Vl="attached",Xd="detached",au=300,es=301,ts=302,Ma=303,Sa=304,mo=306,vi=1e3,Pn=1001,Ls=1002,Nt=1003,Ac=1004,qi=1005,Ht=1006,Cs=1007,gn=1008,Nn=1009,cu=1010,lu=1011,Ds=1012,Rc=1013,Mi=1014,hn=1015,Ws=1016,Cc=1017,Ic=1018,ns=1020,hu=35902,uu=1021,du=1022,Jt=1023,fu=1024,pu=1025,Ki=1026,is=1027,Pc=1028,Lc=1029,mu=1030,Dc=1031,Nc=1033,Dr=33776,Nr=33777,Ur=33778,Or=33779,ba=35840,Ea=35841,Ta=35842,wa=35843,Aa=36196,Ra=37492,Ca=37496,Ia=37808,Pa=37809,La=37810,Da=37811,Na=37812,Ua=37813,Oa=37814,Fa=37815,Ba=37816,ka=37817,za=37818,Ha=37819,Va=37820,Ga=37821,Fr=36492,Wa=36494,Xa=36495,gu=36283,qa=36284,Ya=36285,Za=36286,ss=2300,rs=2301,Do=2302,Gl=2400,Wl=2401,Xl=2402,qd=2500,_u=0,go=1,Xs=2,Yd=3200,Zd=3201,xu=0,Kd=1,Jn="",je="srgb",Ut="srgb-linear",_o="linear",st="srgb",Pi=7680,ql=519,$d=512,Jd=513,jd=514,yu=515,Qd=516,ef=517,tf=518,nf=519,Ka=35044,Yl="300 es",Ln=2e3,Br=2001,ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=1234567,$i=Math.PI/180,os=180/Math.PI;xo={DEG2RAD:$i,RAD2DEG:os,generateUUID:un,clamp:Dt,euclideanModulo:Uc,mapLinear:sf,inverseLerp:rf,lerp:Is,damp:of,pingpong:af,smoothstep:cf,smootherstep:lf,randInt:hf,randFloat:uf,randFloatSpread:df,seededRandom:ff,degToRad:pf,radToDeg:mf,isPowerOfTwo:gf,ceilPowerOfTwo:_f,floorPowerOfTwo:xf,setQuaternionFromProperEuler:yf,normalize:it,denormalize:ln},We=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oe=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],v=i[4],x=i[7],A=i[2],R=i[5],T=i[8];return r[0]=o*_+a*y+c*A,r[3]=o*m+a*v+c*R,r[6]=o*f+a*x+c*T,r[1]=l*_+h*y+u*A,r[4]=l*m+h*v+u*R,r[7]=l*f+h*x+u*T,r[2]=d*_+p*y+g*A,r[5]=d*m+p*v+g*R,r[8]=d*f+p*x+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},No=new Oe;Kl={};qe={enabled:!0,workingColorSpace:Ut,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?_o:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};$l=[.64,.33,.3,.6,.15,.06],Jl=[.2126,.7152,.0722],jl=[.3127,.329],Ql=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Ut]:{primaries:$l,whitePoint:jl,transfer:_o,toXYZ:Ql,fromXYZ:eh,luminanceCoefficients:Jl,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:$l,whitePoint:jl,transfer:st,toXYZ:Ql,fromXYZ:eh,luminanceCoefficients:Jl,outputColorSpaceConfig:{drawingBufferColorSpace:je}}});$a=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=Ns("canvas")),Li.width=e.width,Li.height=e.height;let n=Li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ns("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ef=0,kr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Uo(i[o].image)):r.push(Uo(i[o]))}else r=Uo(i);n.url=r}return t||(e.images[this.uuid]=n),n}};Tf=0,bt=class s extends ni{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Pn,i=Pn,r=Ht,o=gn,a=Jt,c=Nn,l=s.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=un(),this.name="",this.source=new kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vi:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Ls:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vi:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Ls:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=au;bt.DEFAULT_ANISOTROPY=1;Qe=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,x=(p+1)/2,A=(f+1)/2,R=(h+d)/4,T=(u+_)/4,C=(g+m)/4;return v>x&&v>A?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=T/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=R/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=T/r,i=C/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ja=class extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new kr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zr=class extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ja=class extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ct=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let A=Math.sqrt(v),R=Math.atan2(A,f*y);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}let x=a*y;if(c=c*m+d*x,l=l*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oo=new P,th=new Ct,jt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),sr.subVectors(this.max,ys),Di.subVectors(e.a,ys),Ni.subVectors(e.b,ys),Ui.subVectors(e.c,ys),Xn.subVectors(Ni,Di),qn.subVectors(Ui,Ni),ui.subVectors(Di,Ui);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ui.z,ui.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ui.z,0,-ui.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ui.y,ui.x,0];return!Fo(t,Di,Ni,Ui,sr)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,Di,Ni,Ui,sr))?!1:(rr.crossVectors(Xn,qn),t=[rr.x,rr.y,rr.z],Fo(t,Di,Ni,Ui,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},bn=[new P,new P,new P,new P,new P,new P,new P,new P],on=new P,ir=new jt,Di=new P,Ni=new P,Ui=new P,Xn=new P,qn=new P,ui=new P,ys=new P,sr=new P,rr=new P,di=new P;wf=new jt,vs=new P,Bo=new P,qt=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);let t=vs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Bo)),this.expandByPoint(vs.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},En=new P,ko=new P,or=new P,Yn=new P,zo=new P,ar=new P,Ho=new P,Si=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ko.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(ko);let r=e.distanceTo(t)*.5,o=-this.direction.dot(or),a=Yn.dot(this.direction),c=-Yn.dot(or),l=Yn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ko).addScaledVector(or,d),p}intersectSphere(e,t){En.subVectors(e.center,this.origin);let n=En.dot(this.direction),i=En.dot(En)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,i,r){zo.subVectors(t,e),ar.subVectors(n,e),Ho.crossVectors(zo,ar);let o=this.direction.dot(Ho),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);let c=a*this.direction.dot(ar.crossVectors(Yn,ar));if(c<0)return null;let l=a*this.direction.dot(zo.cross(Yn));if(l<0||c+l>o)return null;let h=-a*Yn.dot(Ho);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),o=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Af,e,Rf)}lookAt(e,t,n){let i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Zn.crossVectors(n,Wt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Zn.crossVectors(n,Wt)),Zn.normalize(),cr.crossVectors(Wt,Zn),i[0]=Zn.x,i[4]=cr.x,i[8]=Wt.x,i[1]=Zn.y,i[5]=cr.y,i[9]=Wt.y,i[2]=Zn.z,i[6]=cr.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],v=n[7],x=n[11],A=n[15],R=i[0],T=i[4],C=i[8],b=i[12],S=i[1],I=i[5],F=i[9],O=i[13],V=i[2],K=i[6],X=i[10],j=i[14],G=i[3],ne=i[7],ue=i[11],Me=i[15];return r[0]=o*R+a*S+c*V+l*G,r[4]=o*T+a*I+c*K+l*ne,r[8]=o*C+a*F+c*X+l*ue,r[12]=o*b+a*O+c*j+l*Me,r[1]=h*R+u*S+d*V+p*G,r[5]=h*T+u*I+d*K+p*ne,r[9]=h*C+u*F+d*X+p*ue,r[13]=h*b+u*O+d*j+p*Me,r[2]=g*R+_*S+m*V+f*G,r[6]=g*T+_*I+m*K+f*ne,r[10]=g*C+_*F+m*X+f*ue,r[14]=g*b+_*O+m*j+f*Me,r[3]=y*R+v*S+x*V+A*G,r[7]=y*T+v*I+x*K+A*ne,r[11]=y*C+v*F+x*X+A*ue,r[15]=y*b+v*O+x*j+A*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*p-n*c*p)+_*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,v=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,x=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=t*y+n*v+i*x+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return e[0]=y*T,e[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*T,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*f+n*c*f)*T,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*p-n*c*p)*T,e[4]=v*T,e[5]=(h*m*r-g*d*r+g*i*p-t*m*p-h*i*f+t*d*f)*T,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*f-t*c*f)*T,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*p+t*c*p)*T,e[8]=x*T,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*T,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*T,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*T,e[12]=A*T,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*T,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,y=c*l,v=c*h,x=c*u,A=n.x,R=n.y,T=n.z;return i[0]=(1-(_+f))*A,i[1]=(p+x)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(p-x)*R,i[5]=(1-(d+f))*R,i[6]=(m+y)*R,i[7]=0,i[8]=(g+v)*T,i[9]=(m-y)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Oi.set(i[0],i[1],i[2]).length(),o=Oi.set(i[4],i[5],i[6]).length(),a=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],an.copy(this);let l=1/r,h=1/o,u=1/a;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ln){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,g;if(a===Ln)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Br)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ln){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,p=(n+i)*h,g,_;if(a===Ln)g=(o+r)*u,_=-2*u;else if(a===Br)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Oi=new P,an=new Pe,Af=new P(0,0,0),Rf=new P(1,1,1),Zn=new P,cr=new P,Wt=new P,nh=new Pe,ih=new Ct,yn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";Us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cf=0,sh=new P,Fi=new Ct,Tn=new Pe,lr=new P,Ms=new P,If=new P,Pf=new Ct,rh=new P(1,0,0),oh=new P(0,1,0),ah=new P(0,0,1),ch={type:"added"},Lf={type:"removed"},Bi={type:"childadded",child:null},Vo={type:"childremoved",child:null},ft=class s extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new yn,n=new Ct,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Oe}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Ms,lr,this.up):Tn.lookAt(lr,Ms,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lf),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ft.DEFAULT_UP=new P(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;cn=new P,wn=new P,Go=new P,An=new P,ki=new P,zi=new P,lh=new P,Wo=new P,Xo=new P,qo=new P,Yo=new Qe,Zo=new Qe,Ko=new Qe,jn=class s{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){cn.subVectors(i,t),wn.subVectors(n,t),Go.subVectors(e,t);let o=cn.dot(cn),a=cn.dot(wn),c=cn.dot(Go),l=wn.dot(wn),h=wn.dot(Go),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(o,An.y),c.addScaledVector(a,An.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Yo.setScalar(0),Zo.setScalar(0),Ko.setScalar(0),Yo.fromBufferAttribute(e,t),Zo.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Yo,r.x),o.addScaledVector(Zo,r.y),o.addScaledVector(Ko,r.z),o}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),wn.subVectors(e,t),cn.cross(wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),cn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ki.subVectors(i,n),zi.subVectors(r,n),Wo.subVectors(e,n);let c=ki.dot(Wo),l=zi.dot(Wo);if(c<=0&&l<=0)return t.copy(n);Xo.subVectors(e,i);let h=ki.dot(Xo),u=zi.dot(Xo);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ki,o);qo.subVectors(e,r);let p=ki.dot(qo),g=zi.dot(qo);if(g>=0&&p<=g)return t.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(zi,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return lh.subVectors(r,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(lh,a);let f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(ki,o).addScaledVector(zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},hr={h:0,s:0,l:0};de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Uc(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$o(o,r,e+1/3),this.g=$o(o,r,e),this.b=$o(o,r,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=je){let n=Mu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return qe.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Dt(Lt.r*255,0,255))*65536+Math.round(Dt(Lt.g*255,0,255))*256+Math.round(Dt(Lt.b*255,0,255))}getHexString(e=je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Lt.copy(this),t);let n=Lt.r,i=Lt.g,r=Lt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=je){qe.fromWorkingColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,i=Lt.b;return e!==je?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(hr);let n=Is(Kn.h,hr.h,t),i=Is(Kn.s,hr.s,t),r=Is(Kn.l,hr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new de;de.NAMES=Mu;Df=0,Yt=class extends ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=un(),this.name="",this.blending=Zi,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ze=class extends Yt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mt=new P,ur=new We,gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),e}},Hr=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Vr=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Je=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nf=0,$t=new Pe,Jo=new ft,Hi=new P,Xt=new jt,Ss=new jt,At=new P,_t=class s extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vu(e)?Vr:Hr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Xt.min,Ss.min),Xt.expandByPoint(At),At.addVectors(Xt.max,Ss.max),Xt.expandByPoint(At)):(Xt.expandByPoint(Ss.min),Xt.expandByPoint(Ss.max))}Xt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)At.fromBufferAttribute(a,l),c&&(Hi.fromBufferAttribute(e,l),At.add(Hi)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new P,c[C]=new P;let l=new P,h=new P,u=new P,d=new We,p=new We,g=new We,_=new P,m=new P;function f(C,b,S){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(_),a[b].add(_),a[S].add(_),c[C].add(m),c[b].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,b=y.length;C<b;++C){let S=y[C],I=S.start,F=S.count;for(let O=I,V=I+F;O<V;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new P,x=new P,A=new P,R=new P;function T(C){A.fromBufferAttribute(i,C),R.copy(A);let b=a[C];v.copy(b),v.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(R,b);let I=x.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,I)}for(let C=0,b=y.length;C<b;++C){let S=y[C],I=S.start,F=S.count;for(let O=I,V=I+F;O<V;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=new Pe,fi=new Si,dr=new qt,uh=new P,fr=new P,pr=new P,mr=new P,jo=new P,gr=new P,dh=new P,_r=new P,He=class extends ft{constructor(e=new _t,t=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(jo.fromBufferAttribute(u,e),o?gr.addScaledVector(jo,h):gr.addScaledVector(jo.sub(t),h))}t.add(gr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(dr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(dr,uh)===null||fi.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(hh.copy(r).invert(),fi.copy(e.ray).applyMatrix4(hh),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,A=v;x<A;x+=3){let R=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);i=xr(this,f,e,n,l,h,u,R,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=xr(this,o,e,n,l,h,u,y,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,A=v;x<A;x+=3){let R=x,T=x+1,C=x+2;i=xr(this,f,e,n,l,h,u,R,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let y=m,v=m+1,x=m+2;i=xr(this,o,e,n,l,h,u,y,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};Os=class s extends _t{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function g(_,m,f,y,v,x,A,R,T,C,b){let S=x/T,I=A/C,F=x/2,O=A/2,V=R/2,K=T+1,X=C+1,j=0,G=0,ne=new P;for(let ue=0;ue<X;ue++){let Me=ue*I-O;for(let Fe=0;Fe<K;Fe++){let Ee=Fe*S-F;ne[_]=Ee*y,ne[m]=Me*v,ne[f]=V,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[f]=R>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Fe/T),u.push(1-ue/C),j+=1}}for(let ue=0;ue<C;ue++)for(let Me=0;Me<T;Me++){let Fe=d+Me+K*ue,Ee=d+Me+K*(ue+1),H=d+(Me+1)+K*(ue+1),$=d+(Me+1)+K*ue;c.push(Fe,Ee,$),c.push(Ee,H,$),G+=6}a.addGroup(p,G,b),p+=G,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Ff={clone:as,merge:kt},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends Yt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=Of(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Gr=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$n=new P,fh=new We,ph=new We,St=class extends Gr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,fh,ph),t.subVectors(ph,fh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($i*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vi=-90,Gi=1,Qa=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new St(Vi,Gi,e,t);i.layers=this.layers,this.add(i);let r=new St(Vi,Gi,e,t);r.layers=this.layers,this.add(r);let o=new St(Vi,Gi,e,t);o.layers=this.layers,this.add(o);let a=new St(Vi,Gi,e,t);a.layers=this.layers,this.add(a);let c=new St(Vi,Gi,e,t);c.layers=this.layers,this.add(c);let l=new St(Vi,Gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wr=class extends bt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ec=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Os(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:ei});r.uniforms.tEquirect.value=t;let o=new He(i,r),a=t.minFilter;return t.minFilter===gn&&(t.minFilter=Ht),new Qa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Qo=new P,zf=new P,Hf=new Oe,In=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Qo.subVectors(n,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hf.getNormalMatrix(e),i=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new qt,yr=new P,Fs=class{constructor(e=new In,t=new In,n=new In,i=new In,r=new In,o=new In){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],y=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-p,x-f).normalize(),n[1].setComponents(c+r,d+l,m+p,x+f).normalize(),n[2].setComponents(c+o,d+h,m+g,x+y).normalize(),n[3].setComponents(c-o,d-h,m-g,x-y).normalize(),n[4].setComponents(c-a,d-u,m-_,x-v).normalize(),t===Ln)n[5].setComponents(c+a,d+u,m+_,x+v).normalize();else if(t===Br)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(yr.x=i.normal.x>0?e.max.x:e.min.x,yr.y=i.normal.y>0?e.max.y:e.min.y,yr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Et=class s extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let y=f*d-o;for(let v=0;v<l;v++){let x=v*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){let v=y+l*f,x=y+l*(f+1),A=y+1+l*(f+1),R=y+1+l*f;p.push(v,x,R),p.push(x,A,R)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Gf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:Zf,aomap_fragment:Kf,aomap_pars_fragment:$f,batching_pars_vertex:Jf,batching_vertex:jf,begin_vertex:Qf,beginnormal_vertex:ep,bsdfs:tp,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:op,clipping_planes_vertex:ap,color_fragment:cp,color_pars_fragment:lp,color_pars_vertex:hp,color_vertex:up,common:dp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:_p,emissivemap_pars_fragment:xp,colorspace_fragment:yp,colorspace_pars_fragment:vp,envmap_fragment:Mp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:bp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Up,envmap_vertex:Tp,fog_vertex:wp,fog_pars_vertex:Ap,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Pp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Dp,lights_pars_begin:Np,lights_toon_fragment:Op,lights_toon_pars_fragment:Fp,lights_phong_fragment:Bp,lights_phong_pars_fragment:kp,lights_physical_fragment:zp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Zp,map_fragment:Kp,map_pars_fragment:$p,map_particle_fragment:Jp,map_particle_pars_fragment:jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:em,morphinstance_vertex:tm,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:cm,normal_pars_vertex:lm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:_m,premultiplied_alpha_fragment:xm,project_vertex:ym,dithering_fragment:vm,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:wm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Im,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Nm,tonemapping_pars_fragment:Um,transmission_fragment:Om,transmission_pars_fragment:Fm,uv_pars_fragment:Bm,uv_pars_vertex:km,uv_vertex:zm,worldpos_vertex:Hm,background_vert:Vm,background_frag:Gm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:Zm,depth_frag:Km,distanceRGBA_vert:$m,distanceRGBA_frag:Jm,equirect_vert:jm,equirect_frag:Qm,linedashed_vert:eg,linedashed_frag:tg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:cg,meshnormal_frag:lg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:_g,shadow_vert:xg,shadow_frag:yg,sprite_vert:vg,sprite_frag:Mg},se={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},mn={basic:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new de(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:kt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:kt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new de(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:kt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:kt([se.points,se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:kt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:kt([se.common,se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:kt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:kt([se.sprite,se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:kt([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:kt([se.lights,se.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};mn.physical={uniforms:kt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};vr={r:0,b:0,g:0},mi=new yn,Sg=new Pe;cs=class extends Gr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yi=4,mh=[.125,.215,.35,.446,.526,.582],yi=20,ea=new cs,gh=new de,ta=null,na=0,ia=0,sa=!1,_i=(1+Math.sqrt(5))/2,Wi=1/_i,_h=[new P(-_i,Wi,0),new P(_i,Wi,0),new P(-Wi,0,_i),new P(Wi,0,_i),new P(0,_i,-Wi),new P(0,_i,Wi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ta,na,ia),this._renderer.xr.enabled=sa,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Ws,format:Jt,colorSpace:Ut,depthBuffer:!1},i=xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Ig(r,e,t)}return i}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,n,i){let a=new St(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gh),h.toneMapping=ti,h.autoClear=!1;let p=new Ze({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new He(new Os,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(gh),_=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):y===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let v=this._cubeSize;Mr(i,y*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Mr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ea)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_h[(i-r-1)%_h.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new He(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*yi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);let f=[],y=0;for(let T=0;T<yi;++T){let C=T/_,b=Math.exp(-C*C/2);f.push(b),T===0?y+=b:T<m&&(y+=2*b)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let x=this._sizeLods[i],A=3*x*(i>v-Yi?i-v+Yi:0),R=4*(this._cubeSize-x);Mr(t,A,R,3*x,2*x),c.setRenderTarget(t),c.render(u,ea)}};qr=class extends bt{constructor(e,t,n,i,r,o,a,c,l,h=Ki){if(h!==Ki&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=Mi),n===void 0&&h===is&&(n=ns),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=c!==void 0?c:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Eu=new bt,Mh=new qr(1,1),Tu=new zr,wu=new ja,Au=new Wr,Sh=[],bh=[],Eh=new Float32Array(16),Th=new Float32Array(9),wh=new Float32Array(4);tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i0(t.type)}},nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b0(t.type)}},ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},ra=/(\w+)(\])?(\[|\.)?/g;ji=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);E0(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};T0=37297,w0=0;Ch=new Oe;Sr=new P;U0=/^[ \t]*#include +<([\w\d./]+)>/gm;O0=new Map;B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;q0=0,rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new oc(e),t.set(e,n)),n}},oc=class{constructor(e){this.id=q0++,this.code=e,this.usedTimes=0}};Q0=0;ac=class extends Yt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cc=class extends Yt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;o_={[pa]:ma,[ga]:ya,[_a]:va,[Qi]:xa,[ma]:pa,[ya]:ga,[va]:_a,[xa]:Qi};lc=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},u_={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new bt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qt({vertexShader:d_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Et(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uc=class extends ni{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,_=new hc,m=t.getContextAttributes(),f=null,y=null,v=[],x=[],A=new We,R=null,T=new St;T.viewport=new Qe;let C=new St;C.viewport=new Qe;let b=[T,C],S=new lc,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=v[H];return $===void 0&&($=new Ps,v[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=v[H];return $===void 0&&($=new Ps,v[H]=$),$.getGripSpace()},this.getHand=function(H){let $=v[H];return $===void 0&&($=new Ps,v[H]=$),$.getHandSpace()};function O(H){let $=x.indexOf(H.inputSource);if($===-1)return;let ie=v[$];ie!==void 0&&(ie.update(H.inputSource,H.frame,l||o),ie.dispatchEvent({type:H.type,data:H.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",K);for(let H=0;H<v.length;H++){let $=x[H];$!==null&&(x[H]=null,v[H].disconnect($))}I=null,F=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,y=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){let $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new dn(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ie=null,Q=null;m.depth&&(Q=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?is:Ki,ie=m.stencil?ns:Mi);let _e={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(_e),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new dn(d.textureWidth,d.textureHeight,{format:Jt,type:Nn,depthTexture:new qr(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ee.setContext(i),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(H){for(let $=0;$<H.removed.length;$++){let ie=H.removed[$],Q=x.indexOf(ie);Q>=0&&(x[Q]=null,v[Q].disconnect(ie))}for(let $=0;$<H.added.length;$++){let ie=H.added[$],Q=x.indexOf(ie);if(Q===-1){for(let Re=0;Re<v.length;Re++)if(Re>=x.length){x.push(ie),Q=Re;break}else if(x[Re]===null){x[Re]=ie,Q=Re;break}if(Q===-1)break}let _e=v[Q];_e&&_e.connect(ie)}}let X=new P,j=new P;function G(H,$,ie){X.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(ie.matrixWorld);let Q=X.distanceTo(j),_e=$.projectionMatrix.elements,Re=ie.projectionMatrix.elements,Be=_e[14]/(_e[10]-1),rt=_e[14]/(_e[10]+1),Ve=(_e[9]+1)/_e[5],Ce=(_e[9]-1)/_e[5],L=(_e[8]-1)/_e[0],pt=(Re[8]+1)/Re[0],Te=Be*L,Ie=Be*pt,he=Q/(-L+pt),Ge=he*-L;if($.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ge),H.translateZ(he),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),_e[10]===-1)H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let pe=Be+he,w=rt+he,M=Te-Ge,B=Ie+(Q-Ge),Y=Ve*rt/w*pe,J=Ce*rt/w*pe;H.projectionMatrix.makePerspective(M,B,Y,J,pe,w),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ne(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let $=H.near,ie=H.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),S.near=C.near=T.near=$,S.far=C.far=T.far=ie,(I!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,F=S.far),T.layers.mask=H.layers.mask|2,C.layers.mask=H.layers.mask|4,S.layers.mask=T.layers.mask|C.layers.mask;let Q=H.parent,_e=S.cameras;ne(S,Q);for(let Re=0;Re<_e.length;Re++)ne(_e[Re],Q);_e.length===2?G(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),ue(H,S,Q)};function ue(H,$,ie){ie===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(ie.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=os*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Me=null;function Fe(H,$){if(h=$.getViewerPose(l||o),g=$,h!==null){let ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Q=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,Q=!0);for(let Re=0;Re<ie.length;Re++){let Be=ie[Re],rt=null;if(p!==null)rt=p.getViewport(Be);else{let Ce=u.getViewSubImage(d,Be);rt=Ce.viewport,Re===0&&(e.setRenderTargetTextures(y,Ce.colorTexture,d.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(y))}let Ve=b[Re];Ve===void 0&&(Ve=new St,Ve.layers.enable(Re),Ve.viewport=new Qe,b[Re]=Ve),Ve.matrix.fromArray(Be.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Be.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(rt.x,rt.y,rt.width,rt.height),Re===0&&(S.matrix.copy(Ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Q===!0&&S.cameras.push(Ve)}let _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")){let Re=u.getDepthInformation(ie[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,i.renderState)}}for(let ie=0;ie<v.length;ie++){let Q=x[ie],_e=v[ie];Q!==null&&_e!==void 0&&_e.update(Q,$,l||o)}Me&&Me(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let Ee=new bu;Ee.setAnimationLoop(Fe),this.setAnimationLoop=function(H){Me=H},this.dispose=function(){}}},gi=new yn,p_=new Pe;Yr=class{constructor(e={}){let{canvas:t=vf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=ti,this.toneMappingExposure=1;let x=this,A=!1,R=0,T=0,C=null,b=-1,S=null,I=new Qe,F=new Qe,O=null,V=new de(0),K=0,X=t.width,j=t.height,G=1,ne=null,ue=null,Me=new Qe(0,0,X,j),Fe=new Qe(0,0,X,j),Ee=!1,H=new Fs,$=!1,ie=!1,Q=new Pe,_e=new Pe,Re=new P,Be=new Qe,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function Ce(){return C===null?G:1}let L=n;function pt(E,N){return t.getContext(E,N)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wc}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){let N="webgl2";if(L=pt(N,E),L===null)throw pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Te,Ie,he,Ge,pe,w,M,B,Y,J,q,Se,oe,fe,Ke,ee,me,Ae,Le,ge,Ye,ke,at,D;function re(){Te=new Lg(L),Te.init(),ke=new h_(L,Te),Ie=new wg(L,Te,e,ke),he=new a_(L,Te),Ie.reverseDepthBuffer&&d&&he.buffers.depth.setReversed(!0),Ge=new Ug(L),pe=new Z0,w=new l_(L,Te,he,pe,Ie,ke,Ge),M=new Rg(x),B=new Pg(x),Y=new Vf(L),at=new Eg(L,Y),J=new Dg(L,Y,Ge,at),q=new Fg(L,J,Y,Ge),Le=new Og(L,Ie,w),ee=new Ag(pe),Se=new Y0(x,M,B,Te,Ie,at,ee),oe=new m_(x,pe),fe=new $0,Ke=new n_(Te),Ae=new bg(x,M,B,he,q,p,c),me=new r_(x,q,Ie),D=new g_(L,Ge,Ie,he),ge=new Tg(L,Te,Ge),Ye=new Ng(L,Te,Ge),Ge.programs=Se.programs,x.capabilities=Ie,x.extensions=Te,x.properties=pe,x.renderLists=fe,x.shadowMap=me,x.state=he,x.info=Ge}re();let W=new uc(x,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=Te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(X,j,!1))},this.getSize=function(E){return E.set(X,j)},this.setSize=function(E,N,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,j=N,t.width=Math.floor(E*G),t.height=Math.floor(N*G),k===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*G,j*G).floor()},this.setDrawingBufferSize=function(E,N,k){X=E,j=N,G=k,t.width=Math.floor(E*k),t.height=Math.floor(N*k),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(Me)},this.setViewport=function(E,N,k,z){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,N,k,z),he.viewport(I.copy(Me).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Fe)},this.setScissor=function(E,N,k,z){E.isVector4?Fe.set(E.x,E.y,E.z,E.w):Fe.set(E,N,k,z),he.scissor(F.copy(Fe).multiplyScalar(G).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(E){he.setScissorTest(Ee=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(E=!0,N=!0,k=!0){let z=0;if(E){let U=!1;if(C!==null){let te=C.texture.format;U=te===Nc||te===Dc||te===Lc}if(U){let te=C.texture.type,ce=te===Nn||te===Mi||te===Ds||te===ns||te===Cc||te===Ic,xe=Ae.getClearColor(),ye=Ae.getClearAlpha(),De=xe.r,Ue=xe.g,ve=xe.b;ce?(g[0]=De,g[1]=Ue,g[2]=ve,g[3]=ye,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=De,_[1]=Ue,_[2]=ve,_[3]=ye,L.clearBufferiv(L.COLOR,0,_))}else z|=L.COLOR_BUFFER_BIT}N&&(z|=L.DEPTH_BUFFER_BIT),k&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),fe.dispose(),Ke.dispose(),pe.dispose(),M.dispose(),B.dispose(),q.dispose(),at.dispose(),D.dispose(),Se.dispose(),W.dispose(),W.removeEventListener("sessionstart",Pl),W.removeEventListener("sessionend",Ll),hi.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let E=Ge.autoReset,N=me.enabled,k=me.autoUpdate,z=me.needsUpdate,U=me.type;re(),Ge.autoReset=E,me.enabled=N,me.autoUpdate=k,me.needsUpdate=z,me.type=U}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ne(E){let N=E.target;N.removeEventListener("dispose",Ne),mt(N)}function mt(E){It(E),pe.remove(E)}function It(E){let N=pe.get(E).programs;N!==void 0&&(N.forEach(function(k){Se.releaseProgram(k)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,k,z,U,te){N===null&&(N=rt);let ce=U.isMesh&&U.matrixWorld.determinant()<0,xe=hd(E,N,k,z,U);he.setMaterial(z,ce);let ye=k.index,De=1;if(z.wireframe===!0){if(ye=J.getWireframeAttribute(k),ye===void 0)return;De=2}let Ue=k.drawRange,ve=k.attributes.position,$e=Ue.start*De,ct=(Ue.start+Ue.count)*De;te!==null&&($e=Math.max($e,te.start*De),ct=Math.min(ct,(te.start+te.count)*De)),ye!==null?($e=Math.max($e,0),ct=Math.min(ct,ye.count)):ve!=null&&($e=Math.max($e,0),ct=Math.min(ct,ve.count));let ut=ct-$e;if(ut<0||ut===1/0)return;at.setup(U,z,xe,k,ye);let zt,et=ge;if(ye!==null&&(zt=Y.get(ye),et=Ye,et.setIndex(zt)),U.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*Ce()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(U.isLine){let be=z.linewidth;be===void 0&&(be=1),he.setLineWidth(be*Ce()),U.isLineSegments?et.setMode(L.LINES):U.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else U.isPoints?et.setMode(L.POINTS):U.isSprite&&et.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let be=U._multiDrawStarts,Sn=U._multiDrawCounts,tt=U._multiDrawCount,rn=ye?Y.get(ye).bytesPerElement:1,Ii=pe.get(z).currentProgram.getUniforms();for(let Gt=0;Gt<tt;Gt++)Ii.setValue(L,"_gl_DrawID",Gt),et.render(be[Gt]/rn,Sn[Gt])}else if(U.isInstancedMesh)et.renderInstances($e,ut,U.count);else if(k.isInstancedBufferGeometry){let be=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Sn=Math.min(k.instanceCount,be);et.renderInstances($e,ut,Sn)}else et.render($e,ut)};function nt(E,N,k){E.transparent===!0&&E.side===Rt&&E.forceSinglePass===!1?(E.side=Vt,E.needsUpdate=!0,nr(E,N,k),E.side=_n,E.needsUpdate=!0,nr(E,N,k),E.side=Rt):nr(E,N,k)}this.compile=function(E,N,k=null){k===null&&(k=E),f=Ke.get(k),f.init(N),v.push(f),k.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),E!==k&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let z=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let te=U.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){let xe=te[ce];nt(xe,k,U),z.add(xe)}else nt(te,k,U),z.add(te)}),v.pop(),f=null,z},this.compileAsync=function(E,N,k=null){let z=this.compile(E,N,k);return new Promise(U=>{function te(){if(z.forEach(function(ce){pe.get(ce).currentProgram.isReady()&&z.delete(ce)}),z.size===0){U(E);return}setTimeout(te,10)}Te.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let sn=null;function Mn(E){sn&&sn(E)}function Pl(){hi.stop()}function Ll(){hi.start()}let hi=new bu;hi.setAnimationLoop(Mn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(E){sn=E,W.setAnimationLoop(E),E===null?hi.stop():hi.start()},W.addEventListener("sessionstart",Pl),W.addEventListener("sessionend",Ll),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,C),f=Ke.get(E,v.length),f.init(N),v.push(f),_e.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H.setFromProjectionMatrix(_e),ie=this.localClippingEnabled,$=ee.init(this.clippingPlanes,ie),m=fe.get(E,y.length),m.init(),y.push(m),W.enabled===!0&&W.isPresenting===!0){let te=x.xr.getDepthSensingMesh();te!==null&&Po(te,N,-1/0,x.sortObjects)}Po(E,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,ue),Ve=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ve&&Ae.addToRenderList(m,E),this.info.render.frame++,$===!0&&ee.beginShadows();let k=f.state.shadowsArray;me.render(k,E,N),$===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,U=m.transmissive;if(f.setupLights(),N.isArrayCamera){let te=N.cameras;if(U.length>0)for(let ce=0,xe=te.length;ce<xe;ce++){let ye=te[ce];Nl(z,U,E,ye)}Ve&&Ae.render(E);for(let ce=0,xe=te.length;ce<xe;ce++){let ye=te[ce];Dl(m,E,ye,ye.viewport)}}else U.length>0&&Nl(z,U,E,N),Ve&&Ae.render(E),Dl(m,E,N);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,N),at.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?(f=v[v.length-1],$===!0&&ee.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Po(E,N,k,z){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||H.intersectsSprite(E)){z&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);let ce=q.update(E),xe=E.material;xe.visible&&m.push(E,ce,xe,k,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||H.intersectsObject(E))){let ce=q.update(E),xe=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Be.copy(ce.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(_e)),Array.isArray(xe)){let ye=ce.groups;for(let De=0,Ue=ye.length;De<Ue;De++){let ve=ye[De],$e=xe[ve.materialIndex];$e&&$e.visible&&m.push(E,ce,$e,k,Be.z,ve)}}else xe.visible&&m.push(E,ce,xe,k,Be.z,null)}}let te=E.children;for(let ce=0,xe=te.length;ce<xe;ce++)Po(te[ce],N,k,z)}function Dl(E,N,k,z){let U=E.opaque,te=E.transmissive,ce=E.transparent;f.setupLightsView(k),$===!0&&ee.setGlobalState(x.clippingPlanes,k),z&&he.viewport(I.copy(z)),U.length>0&&tr(U,N,k),te.length>0&&tr(te,N,k),ce.length>0&&tr(ce,N,k),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Nl(E,N,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new dn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?Ws:Nn,minFilter:gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));let te=f.state.transmissionRenderTarget[z.id],ce=z.viewport||I;te.setSize(ce.z,ce.w);let xe=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(V),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&Ae.render(k);let ye=x.toneMapping;x.toneMapping=ti;let De=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),$===!0&&ee.setGlobalState(x.clippingPlanes,z),tr(E,k,z),w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ve=0,$e=N.length;ve<$e;ve++){let ct=N[ve],ut=ct.object,zt=ct.geometry,et=ct.material,be=ct.group;if(et.side===Rt&&ut.layers.test(z.layers)){let Sn=et.side;et.side=Vt,et.needsUpdate=!0,Ul(ut,k,z,zt,et,be),et.side=Sn,et.needsUpdate=!0,Ue=!0}}Ue===!0&&(w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te))}x.setRenderTarget(xe),x.setClearColor(V,K),De!==void 0&&(z.viewport=De),x.toneMapping=ye}function tr(E,N,k){let z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,te=E.length;U<te;U++){let ce=E[U],xe=ce.object,ye=ce.geometry,De=z===null?ce.material:z,Ue=ce.group;xe.layers.test(k.layers)&&Ul(xe,N,k,ye,De,Ue)}}function Ul(E,N,k,z,U,te){E.onBeforeRender(x,N,k,z,U,te),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(x,N,k,z,E,te),U.transparent===!0&&U.side===Rt&&U.forceSinglePass===!1?(U.side=Vt,U.needsUpdate=!0,x.renderBufferDirect(k,N,z,U,E,te),U.side=_n,U.needsUpdate=!0,x.renderBufferDirect(k,N,z,U,E,te),U.side=Rt):x.renderBufferDirect(k,N,z,U,E,te),E.onAfterRender(x,N,k,z,U,te)}function nr(E,N,k){N.isScene!==!0&&(N=rt);let z=pe.get(E),U=f.state.lights,te=f.state.shadowsArray,ce=U.state.version,xe=Se.getParameters(E,U.state,te,N,k),ye=Se.getProgramCacheKey(xe),De=z.programs;z.environment=E.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Ne),De=new Map,z.programs=De);let Ue=De.get(ye);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===ce)return Fl(E,xe),Ue}else xe.uniforms=Se.getUniforms(E),E.onBeforeCompile(xe,x),Ue=Se.acquireProgram(xe,ye),De.set(ye,Ue),z.uniforms=xe.uniforms;let ve=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ve.clippingPlanes=ee.uniform),Fl(E,xe),z.needsLights=dd(E),z.lightsStateVersion=ce,z.needsLights&&(ve.ambientLightColor.value=U.state.ambient,ve.lightProbe.value=U.state.probe,ve.directionalLights.value=U.state.directional,ve.directionalLightShadows.value=U.state.directionalShadow,ve.spotLights.value=U.state.spot,ve.spotLightShadows.value=U.state.spotShadow,ve.rectAreaLights.value=U.state.rectArea,ve.ltc_1.value=U.state.rectAreaLTC1,ve.ltc_2.value=U.state.rectAreaLTC2,ve.pointLights.value=U.state.point,ve.pointLightShadows.value=U.state.pointShadow,ve.hemisphereLights.value=U.state.hemi,ve.directionalShadowMap.value=U.state.directionalShadowMap,ve.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ve.spotShadowMap.value=U.state.spotShadowMap,ve.spotLightMatrix.value=U.state.spotLightMatrix,ve.spotLightMap.value=U.state.spotLightMap,ve.pointShadowMap.value=U.state.pointShadowMap,ve.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function Ol(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=ji.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Fl(E,N){let k=pe.get(E);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function hd(E,N,k,z,U){N.isScene!==!0&&(N=rt),w.resetTextureUnits();let te=N.fog,ce=z.isMeshStandardMaterial?N.environment:null,xe=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ut,ye=(z.isMeshStandardMaterial?B:M).get(z.envMap||ce),De=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ve=!!k.morphAttributes.position,$e=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color,ut=ti;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ut=x.toneMapping);let zt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=zt!==void 0?zt.length:0,be=pe.get(z),Sn=f.state.lights;if($===!0&&(ie===!0||E!==S)){let Kt=E===S&&z.id===b;ee.setState(z,E,Kt)}let tt=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Sn.state.version||be.outputColorSpace!==xe||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==ye||z.fog===!0&&be.fog!==te||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ee.numPlanes||be.numIntersection!==ee.numIntersection)||be.vertexAlphas!==De||be.vertexTangents!==Ue||be.morphTargets!==ve||be.morphNormals!==$e||be.morphColors!==ct||be.toneMapping!==ut||be.morphTargetsCount!==et)&&(tt=!0):(tt=!0,be.__version=z.version);let rn=be.currentProgram;tt===!0&&(rn=nr(z,N,U));let Ii=!1,Gt=!1,_s=!1,dt=rn.getUniforms(),pn=be.uniforms;if(he.useProgram(rn.program)&&(Ii=!0,Gt=!0,_s=!0),z.id!==b&&(b=z.id,Gt=!0),Ii||S!==E){he.buffers.depth.getReversed()?(Q.copy(E.projectionMatrix),Sf(Q),bf(Q),dt.setValue(L,"projectionMatrix",Q)):dt.setValue(L,"projectionMatrix",E.projectionMatrix),dt.setValue(L,"viewMatrix",E.matrixWorldInverse);let Gn=dt.map.cameraPosition;Gn!==void 0&&Gn.setValue(L,Re.setFromMatrixPosition(E.matrixWorld)),Ie.logarithmicDepthBuffer&&dt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Gt=!0,_s=!0)}if(U.isSkinnedMesh){dt.setOptional(L,U,"bindMatrix"),dt.setOptional(L,U,"bindMatrixInverse");let Kt=U.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),dt.setValue(L,"boneTexture",Kt.boneTexture,w))}U.isBatchedMesh&&(dt.setOptional(L,U,"batchingTexture"),dt.setValue(L,"batchingTexture",U._matricesTexture,w),dt.setOptional(L,U,"batchingIdTexture"),dt.setValue(L,"batchingIdTexture",U._indirectTexture,w),dt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(L,"batchingColorTexture",U._colorsTexture,w));let xs=k.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&Le.update(U,k,rn),(Gt||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,dt.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(pn.envMap.value=ye,pn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(pn.envMapIntensity.value=N.environmentIntensity),Gt&&(dt.setValue(L,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&ud(pn,_s),te&&z.fog===!0&&oe.refreshFogUniforms(pn,te),oe.refreshMaterialUniforms(pn,z,G,j,f.state.transmissionRenderTarget[E.id]),ji.upload(L,Ol(be),pn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ji.upload(L,Ol(be),pn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(L,"center",U.center),dt.setValue(L,"modelViewMatrix",U.modelViewMatrix),dt.setValue(L,"normalMatrix",U.normalMatrix),dt.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Kt=z.uniformsGroups;for(let Gn=0,Wn=Kt.length;Gn<Wn;Gn++){let Bl=Kt[Gn];D.update(Bl,rn),D.bind(Bl,rn)}}return rn}function ud(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function dd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,N,k){pe.get(E.texture).__webglTexture=N,pe.get(E.depthTexture).__webglTexture=k;let z=pe.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){let k=pe.get(E);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,k=0){C=E,R=N,T=k;let z=!0,U=null,te=!1,ce=!1;if(E){let ye=pe.get(E);if(ye.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(ye.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(ye.__hasExternalTextures)w.rebindTextures(E,pe.get(E.texture).__webglTexture,pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ve=E.depthTexture;if(ye.__boundDepthTexture!==ve){if(ve!==null&&pe.has(ve)&&(E.width!==ve.image.width||E.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ce=!0);let Ue=pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?U=Ue[N][k]:U=Ue[N],te=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?U=pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[k]:U=Ue,I.copy(E.viewport),F.copy(E.scissor),O=E.scissorTest}else I.copy(Me).multiplyScalar(G).floor(),F.copy(Fe).multiplyScalar(G).floor(),O=Ee;if(he.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&he.drawBuffers(E,U),he.viewport(I),he.scissor(F),he.setScissorTest(O),te){let ye=pe.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,k)}else if(ce){let ye=pe.get(E.texture),De=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,k||0,De)}b=-1},this.readRenderTargetPixels=function(E,N,k,z,U,te,ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){he.bindFramebuffer(L.FRAMEBUFFER,xe);try{let ye=E.texture,De=ye.format,Ue=ye.type;if(!Ie.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-z&&k>=0&&k<=E.height-U&&L.readPixels(N,k,z,U,ke.convert(De),ke.convert(Ue),te)}finally{let ye=C!==null?pe.get(C).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,N,k,z,U,te,ce){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){let ye=E.texture,De=ye.format,Ue=ye.type;if(!Ie.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-z&&k>=0&&k<=E.height-U){he.bindFramebuffer(L.FRAMEBUFFER,xe);let ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),L.readPixels(N,k,z,U,ke.convert(De),ke.convert(Ue),0);let $e=C!==null?pe.get(C).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,$e);let ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Mf(L,ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(ve),L.deleteSync(ct),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,k=0){E.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);let z=Math.pow(2,-k),U=Math.floor(E.image.width*z),te=Math.floor(E.image.height*z),ce=N!==null?N.x:0,xe=N!==null?N.y:0;w.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ce,xe,U,te),he.unbindTexture()},this.copyTextureToTexture=function(E,N,k=null,z=null,U=0){E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,k=null);let te,ce,xe,ye,De,Ue,ve,$e,ct,ut=E.isCompressedTexture?E.mipmaps[U]:E.image;k!==null?(te=k.max.x-k.min.x,ce=k.max.y-k.min.y,xe=k.isBox3?k.max.z-k.min.z:1,ye=k.min.x,De=k.min.y,Ue=k.isBox3?k.min.z:0):(te=ut.width,ce=ut.height,xe=ut.depth||1,ye=0,De=0,Ue=0),z!==null?(ve=z.x,$e=z.y,ct=z.z):(ve=0,$e=0,ct=0);let zt=ke.convert(N.format),et=ke.convert(N.type),be;N.isData3DTexture?(w.setTexture3D(N,0),be=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),be=L.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),be=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Sn=L.getParameter(L.UNPACK_ROW_LENGTH),tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ii=L.getParameter(L.UNPACK_SKIP_ROWS),Gt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue);let _s=E.isDataArrayTexture||E.isData3DTexture,dt=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let pn=pe.get(E),xs=pe.get(N),Kt=pe.get(pn.__renderTarget),Gn=pe.get(xs.__renderTarget);he.bindFramebuffer(L.READ_FRAMEBUFFER,Kt.__webglFramebuffer),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Wn=0;Wn<xe;Wn++)_s&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(E).__webglTexture,U,Ue+Wn),E.isDepthTexture?(dt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(N).__webglTexture,U,ct+Wn),L.blitFramebuffer(ye,De,te,ce,ve,$e,te,ce,L.DEPTH_BUFFER_BIT,L.NEAREST)):dt?L.copyTexSubImage3D(be,U,ve,$e,ct+Wn,ye,De,te,ce):L.copyTexSubImage2D(be,U,ve,$e,ct+Wn,ye,De,te,ce);he.bindFramebuffer(L.READ_FRAMEBUFFER,null),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else dt?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(be,U,ve,$e,ct,te,ce,xe,zt,et,ut.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(be,U,ve,$e,ct,te,ce,xe,zt,ut.data):L.texSubImage3D(be,U,ve,$e,ct,te,ce,xe,zt,et,ut):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,ve,$e,te,ce,zt,et,ut.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,ve,$e,ut.width,ut.height,zt,ut.data):L.texSubImage2D(L.TEXTURE_2D,U,ve,$e,te,ce,zt,et,ut);L.pixelStorei(L.UNPACK_ROW_LENGTH,Sn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ii),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt),U===0&&N.generateMipmaps&&L.generateMipmap(be),he.unbindTexture()},this.copyTextureToTexture3D=function(E,N,k=null,z=null,U=0){return E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,k,z,U)},this.initRenderTarget=function(E){pe.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){R=0,T=0,C=null,he.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}},Zr=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Kr=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bt=new P,ks=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kh=new P,zh=new Qe,Hh=new Qe,__=new P,Vh=new Pe,br=new P,oa=new qt,Gh=new Pe,aa=new Si,$r=class extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vl,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,br),this.boundingBox.expandByPoint(br)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,br),this.boundingSphere.expandByPoint(br)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),e.ray.intersectsSphere(oa)!==!1&&(Gh.copy(i).invert(),aa.copy(e.ray).applyMatrix4(Gh),!(this.boundingBox!==null&&aa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,aa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;zh.fromBufferAttribute(i.attributes.skinIndex,e),Hh.fromBufferAttribute(i.attributes.skinWeight,e),kh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Hh.getComponent(r);if(o!==0){let a=zh.getComponent(r);Vh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(__.copy(kh).applyMatrix4(Vh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},zs=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Jr=class extends bt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Nt,h=Nt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wh=new Pe,x_=new Pe,jr=class s{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:x_;Wh.multiplyMatrices(a,t[r]),Wh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Jr(t,e,e,Jt,hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new zs),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},bi=class extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xi=new Pe,Xh=new Pe,Er=[],qh=new jt,y_=new Pe,bs=new He,Es=new qt,Qr=class extends He{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,y_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),qh.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(qh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),Es.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),e.ray.intersectsSphere(Es)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xi),Xh.multiplyMatrices(n,Xi),bs.matrixWorld=Xh,bs.raycast(e,Er);for(let o=0,a=Er.length;o<a;o++){let c=Er[o];c.instanceId=r,c.object=this,t.push(c)}Er.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jr(new Float32Array(i*this.count),i,this.count,Pc,hn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},ii=class extends Yt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},eo=new P,to=new P,Yh=new Pe,Ts=new Si,Tr=new qt,ca=new P,Zh=new P,ls=class extends ft{constructor(e=new _t,t=new ii){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)eo.fromBufferAttribute(t,i-1),to.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=eo.distanceTo(to);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),Tr.radius+=r,e.ray.intersectsSphere(Tr)===!1)return;Yh.copy(i).invert(),Ts.copy(e.ray).applyMatrix4(Yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let f=h.getX(_),y=h.getX(_+1),v=wr(this,e,Ts,c,f,y);v&&t.push(v)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=wr(this,e,Ts,c,_,m);f&&t.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let f=wr(this,e,Ts,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){let _=wr(this,e,Ts,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Kh=new P,$h=new P,Ei=class extends ls{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Kh.fromBufferAttribute(t,i),$h.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kh.distanceTo($h);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},no=class extends ls{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ti=class extends Yt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jh=new Pe,dc=new Si,Ar=new qt,Rr=new P,wi=class extends ft{constructor(e=new _t,t=new Ti){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(i),Ar.radius+=r,e.ray.intersectsSphere(Ar)===!1)return;Jh.copy(i).invert(),dc.copy(e.ray).applyMatrix4(Jh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){let m=l.getX(g);Rr.fromBufferAttribute(u,m),jh(Rr,m,c,i,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Rr.fromBufferAttribute(u,g),jh(Rr,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};fn=class extends bt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},io=class s extends _t{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new P,h=new We;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},fc=class s extends _t{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],m=n/2,f=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function y(){let x=new P,A=new P,R=0,T=(t-e)/n;for(let C=0;C<=r;C++){let b=[],S=C/r,I=S*(t-e)+e;for(let F=0;F<=i;F++){let O=F/i,V=O*c+a,K=Math.sin(V),X=Math.cos(V);A.x=I*K,A.y=-S*n+m,A.z=I*X,u.push(A.x,A.y,A.z),x.set(K,T,X).normalize(),d.push(x.x,x.y,x.z),p.push(O,1-S),b.push(g++)}_.push(b)}for(let C=0;C<i;C++)for(let b=0;b<r;b++){let S=_[b][C],I=_[b+1][C],F=_[b+1][C+1],O=_[b][C+1];(e>0||b!==0)&&(h.push(S,I,O),R+=3),(t>0||b!==r-1)&&(h.push(I,F,O),R+=3)}l.addGroup(f,R,0),f+=R}function v(x){let A=g,R=new We,T=new P,C=0,b=x===!0?e:t,S=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;let I=g;for(let F=0;F<=i;F++){let V=F/i*c+a,K=Math.cos(V),X=Math.sin(V);T.x=b*X,T.y=m*S,T.z=b*K,u.push(T.x,T.y,T.z),d.push(0,S,0),R.x=K*.5+.5,R.y=X*.5*S+.5,p.push(R.x,R.y),g++}for(let F=0;F<i;F++){let O=A+F,V=I+F;x===!0?h.push(V,V+1,O):h.push(V+1,V,O),C+=3}l.addGroup(f,C,x===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},so=class s extends fc{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cr=new P,Ir=new P,la=new P,Pr=new jn,ro=class extends _t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos($i*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:_,b:m,c:f}=Pr;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),Pr.getNormal(la),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let v=(y+1)%3,x=u[y],A=u[v],R=Pr[h[y]],T=Pr[h[v]],C=`${x}_${A}`,b=`${A}_${x}`;b in d&&d[b]?(la.dot(d[b].normal)<=r&&(p.push(R.x,R.y,R.z),p.push(T.x,T.y,T.z)),d[b]=null):C in d||(d[C]={index0:l[y],index1:l[v],normal:la.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:m}=d[g];Cr.fromBufferAttribute(a,_),Ir.fromBufferAttribute(a,m),p.push(Cr.x,Cr.y,Cr.z),p.push(Ir.x,Ir.y,Ir.z)}this.setAttribute("position",new Je(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},si=class s extends _t{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,d=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let y=[],v=f/n,x=0;f===0&&o===0?x=.5/t:f===n&&c===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let R=A/t;u.x=-e*Math.cos(i+R*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+R*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-v),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){let v=h[f][y+1],x=h[f][y],A=h[f+1][y],R=h[f+1][y+1];(f!==0||o>0)&&p.push(v,x,R),(f!==n-1||c<Math.PI)&&p.push(x,A,R)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Hs=class s extends _t{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let _=g/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,y=(i+1)*p+g;o.push(_,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},hs=class extends Yt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zt=class extends hs{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};ri=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pc=class extends ri{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gl,endingEnd:Gl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wl:r=e,a=2*t-n;break;case Xl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wl:o=e,c=2*n-t;break;case Xl:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let A=0;A!==a;++A)r[A]=f*o[h+A]+y*o[l+A]+v*o[c+A]+x*o[u+A];return r}},mc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},gc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},en=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lr(t,this.TimeBufferType),this.values=Lr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lr(e.times,Array),values:Lr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ss:t=this.InterpolantFactoryMethodDiscrete;break;case rs:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return rs;case this.InterpolantFactoryMethodSmooth:return Do}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&v_(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Do,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=rs;oi=class extends en{constructor(e,t,n){super(e,t,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=ss;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;oo=class extends en{};oo.prototype.ValueTypeName="color";Un=class extends en{};Un.prototype.ValueTypeName="number";_c=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Ct.slerpFlat(r,0,o,l-a,o,l,c);return r}},On=class extends en{InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}};On.prototype.ValueTypeName="quaternion";On.prototype.InterpolantFactoryMethodSmooth=void 0;ai=class extends en{constructor(e,t,n){super(e,t,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=ss;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;Fn=class extends en{};Fn.prototype.ValueTypeName="vector";ao=class{constructor(e="",t=-1,n=[],i=qd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=un(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(b_(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(en.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=M_(c);c=Qh(c,1,h),l=Qh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Un(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,p,g,_){if(p.length!==0){let m=[],f=[];Ru(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(let _ in p){let m=[],f=[];for(let y=0;y!==d[g].morphTargets.length;++y){let v=d[g];m.push(v.time),f.push(v.morphTarget===_?1:0)}i.push(new Un(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{let p=".bones["+t[u].name+"]";n(Fn,p+".position",d,"pos",i),n(On,p+".quaternion",d,"rot",i),n(Fn,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Qn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},xc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},E_=new xc,Bn=class{constructor(e){this.manager=e!==void 0?e:E_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bn.DEFAULT_MATERIAL_NAME="__DEFAULT";Rn={},yc=class extends Error{constructor(e,t){super(e),this.response=t}},Vs=class extends Bn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Qn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:n,onError:i});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Rn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,_=0,m=new ReadableStream({start(f){y();function y(){u.read().then(({done:v,value:x})=>{if(v)f.close();else{_+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let R=0,T=h.length;R<T;R++){let C=h[R];C.onProgress&&C.onProgress(A)}f.enqueue(x),y()}},v=>{f.error(v)})}}});return new Response(m)}else throw new yc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Qn.add(e,l);let h=Rn[e];delete Rn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Rn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Rn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},vc=class extends Bn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Ns("img");function c(){h(),Qn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},Ai=class extends Bn{constructor(e){super(e)}load(e,t,n,i){let r=new bt,o=new vc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},us=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},co=class extends us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ha=new Pe,eu=new P,tu=new P,Gs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(eu),tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tu),t.updateMatrixWorld(),ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Mc=class extends Gs{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},lo=class extends us{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},nu=new Pe,ws=new P,ua=new P,Sc=class extends Gs{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(ws),ua.copy(n.position),ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ua),n.updateMatrixWorld(),i.makeTranslation(-ws.x,-ws.y,-ws.z),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}},ho=class extends us{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},bc=class extends Gs{constructor(){super(new cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new bc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ci=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},uo=class extends Bn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qn.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qn.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Qn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(e,c),r.manager.itemStart(e)}},Fc="\\[\\]\\.:\\/",T_=new RegExp("["+Fc+"]","g"),Bc="[^"+Fc+"]",w_="[^"+Fc.replace("\\.","")+"]",A_=/((?:WC+[\/:])*)/.source.replace("WC",Bc),R_=/(WCOD+)?/.source.replace("WCOD",w_),C_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),I_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),P_=new RegExp("^"+A_+R_+C_+I_+"$"),L_=["material","materials","bones","map"],Ec=class{constructor(e,t,n){let i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T_,"")}static parseTrackName(e){let t=P_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);L_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Ec;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];dx=new Float32Array(1),iu=new Pe,fo=class{constructor(e,t,n=0,i=1/0){this.ray=new Si(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iu),this}intersectObject(e,t=!0,n=[]){return Tc(e,this,n,t),n.sort(su),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Tc(e[i],this,n,t);return n.sort(su),n}};po=class extends Ei{constructor(e=10,t=10,n=4473924,i=8947848){n=new de(n),i=new de(i);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let _=d===r?n:i;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}let h=new _t;h.setAttribute("position",new Je(c,3)),h.setAttribute("color",new Je(l,3));let u=new ii({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc)});function Zc(s,e){if(e===_u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Xs||e===go){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Xs)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Zu=Lo(()=>{kn()});var ed={};pd(ed,{GLTFLoader:()=>jc});function Y_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function $_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new hs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_n})),s.DefaultMaterial}function Ci(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function J_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function j_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Q_(s){let e,t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jc(t.attributes):e=s.indices+":"+Jc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jc(s.targets[n]);return e}function Jc(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function bl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ex(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function nx(s,e,t){let n=e.attributes,i=new jt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){let h=bl(ms[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let _=bl(ms[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new qt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ju(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Sl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return qe.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Vn(s,e),nx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?J_(s,e.targets,t):s})}var jc,Xe,Qc,el,tl,nl,il,sl,rl,ol,al,cl,ll,hl,ul,dl,fl,pl,ml,gl,Qu,js,Ku,_l,xl,yl,vl,Ao,Z_,Ml,tn,ms,$u,Ju,Kc,Sl,li,K_,$c,tx,El,td=Lo(()=>{kn();Zu();jc=class extends Bn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nl(t)}),this.register(function(t){return new il(t)}),this.register(function(t){return new dl(t)}),this.register(function(t){return new fl(t)}),this.register(function(t){return new pl(t)}),this.register(function(t){return new rl(t)}),this.register(function(t){return new ol(t)}),this.register(function(t){return new al(t)}),this.register(function(t){return new cl(t)}),this.register(function(t){return new tl(t)}),this.register(function(t){return new ll(t)}),this.register(function(t){return new sl(t)}),this.register(function(t){return new ul(t)}),this.register(function(t){return new hl(t)}),this.register(function(t){return new Qc(t)}),this.register(function(t){return new ml(t)}),this.register(function(t){return new gl(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ci.extractUrlBase(e);o=ci.resolveURL(l,this.path)}else o=ci.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Vs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Qu){try{o[Xe.KHR_BINARY_GLTF]=new _l(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new El(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:o[u]=new el;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[u]=new xl(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[u]=new yl;break;case Xe.KHR_MESH_QUANTIZATION:o[u]=new vl;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qc=class{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new de(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ut);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ds(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ho(h),l.distance=u;break;case"spot":l=new lo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Vn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},el=class{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ze}extendParams(e,t,n){let i=[];e.color=new de(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ut),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,je))}return Promise.all(i)}},tl=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},nl=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(a,a)}return Promise.all(r)}},il=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},sl=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},rl=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new de(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ut)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,je)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},ol=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},al=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new de().setRGB(a[0],a[1],a[2],Ut),Promise.all(r)}},cl=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},ll=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new de().setRGB(a[0],a[1],a[2],Ut),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,je)),Promise.all(r)}},hl=class{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},ul=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},dl=class{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},fl=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},pl=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ml=class{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},gl=class{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==tn.TRIANGLES&&l.mode!==tn.TRIANGLE_STRIP&&l.mode!==tn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let g of u){let _=new Pe,m=new P,f=new Ct,y=new P(1,1,1),v=new Qr(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,x),c.SCALE&&y.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,_.compose(m,f,y));for(let x in c)if(x==="_COLOR_0"){let A=c[x];v.instanceColor=new bi(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);ft.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Qu="glTF",js=12,Ku={JSON:1313821514,BIN:5130562},_l=class{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-js,r=new DataView(e,js),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Ku.JSON){let l=new Uint8Array(e,js+o,a);this.content=n.decode(l)}else if(c===Ku.BIN){let l=js+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Sl[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Sl[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],p=ms[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let g in p.attributes){let _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(p)},a,l,Ut,d)})})}},yl=class{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},vl=class{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}},Ao=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,y=1-m,v=f-d+u;for(let x=0;x!==a;x++){let A=o[_+x+a],R=o[_+x+c]*h,T=o[g+x+a],C=o[g+x]*h;r[x]=y*A+v*R+m*T+f*C}return r}},Z_=new Ct,Ml=class extends Ao{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Z_.fromArray(r).normalize().toArray(r),r}},tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$u={9728:Nt,9729:Ht,9984:Ac,9985:Cs,9986:qi,9987:gn},Ju={33071:Pn,33648:Ls,10497:vi},Kc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},K_={CUBICSPLINE:void 0,LINEAR:rs,STEP:ss},$c={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};tx=new Pe,El=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Y_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ai(this.options.manager):this.textureLoader=new uo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ci(r,a,i),Vn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ci.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Kc[i.type],a=ms[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new gt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Kc[i.type],l=ms[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(p&&p!==u){let f=Math.floor(d/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,v=t.cache.get(y);v||(_=new l(a,f*p,i.count*p/h),v=new Bs(_,p/h),t.cache.add(y,v)),m=new ks(v,c,d%p/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new gt(_,c,g);if(i.sparse!==void 0){let f=Kc.SCALAR,y=ms[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new y(o[1],v,i.sparse.count*f),R=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=A.length;T<C;T++){let b=A[T];if(m.setX(b,R[T*c]),c>=2&&m.setY(b,R[T*c+1]),c>=3&&m.setZ(b,R[T*c+2]),c>=4&&m.setW(b,R[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=$u[d.magFilter]||Ht,h.minFilter=$u[d.minFilter]||gn,h.wrapS=Ju[d.wrapS]||vi,h.wrapT=Ju[d.wrapT]||vi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==Ht,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new bt(_);m.needsUpdate=!0,d(m)}),t.load(ci.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Vn(u,o),u.userData.mimeType=o.mimeType||ex(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ti,Yt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ii,Yt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return hs}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Xe.KHR_MATERIALS_UNLIT]){let u=i[Xe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new de(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ut),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,je)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Rt);let h=r.alphaMode||$c.OPAQUE;if(h===$c.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===$c.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ze&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ze&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ze){let u=r.emissiveFactor;a.emissive=new de().setRGB(u[0],u[1],u[2],Ut)}return r.emissiveTexture!==void 0&&o!==Ze&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,je)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Vn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ci(i,u,r),u})}createUniqueName(e){let t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ju(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Q_(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=ju(new _t,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?$_(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let _=h[p],m=o[p],f,y=l[p];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new $r(_,y):new He(_,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?f.geometry=Zc(f.geometry,go):m.mode===tn.TRIANGLE_FAN&&(f.geometry=Zc(f.geometry,Xs));else if(m.mode===tn.LINES)f=new Ei(_,y);else if(m.mode===tn.LINE_STRIP)f=new ls(_,y);else if(m.mode===tn.LINE_LOOP)f=new no(_,y);else if(m.mode===tn.POINTS)f=new wi(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&j_(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Vn(f,r),m.extensions&&Ci(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Ci(i,u[0],r),u[0];let d=new ht;r.extensions&&Ci(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(xo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new cs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Pe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new jr(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let y=0,v=d.length;y<v;y++){let x=d[y],A=p[y],R=g[y],T=_[y],C=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let b=n._createAnimationTracks(x,A,R,T,C);if(b)for(let S=0;S<b.length;S++)f.push(b[S])}return new ao(r,void 0,f)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,tx)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new zs:l.length>1?h=new ht:l.length===1?h=l[0]:h=new ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Vn(h,r),r.extensions&&Ci(n,h,r),r.matrix!==void 0){let u=new Pe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new ht;n.name&&(r.name=i.createUniqueName(n.name)),Vn(r,n),n.extensions&&Ci(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof Yt||d instanceof bt)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];li[r.path]===li.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(li[r.path]){case li.weights:l=Un;break;case li.rotation:l=On;break;case li.position:case li.scale:l=Fn;break;default:switch(n.itemSize){case 1:l=Un;break;case 2:case 3:default:l=Fn;break}break}let h=i.interpolation!==void 0?K_[i.interpolation]:rs,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let g=new l(c[d]+"."+li[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof On?Ml:Ao;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});kn();kn();kn();var kc=new TextEncoder,Iu=s=>Array.from(new Uint8Array(s),e=>e.toString(16).padStart(2,"0")).join("");async function Cu(s){return crypto.subtle?Iu(await crypto.subtle.digest("SHA-256",kc.encode(s))):""}async function Pu(s){return crypto.subtle.importKey("raw",kc.encode(s),{name:"HMAC",hash:"SHA-256"},!1,["sign"])}async function vo(s,e){return Iu(await crypto.subtle.sign("HMAC",s,kc.encode(e)))}var qs=()=>location.protocol!=="file:"&&navigator.onLine!==!1;async function zc(s,e){if(!s||!crypto.subtle)return!1;let t=e||await Cu("dev");return await Cu(s)===t}function Lu({base:s,role:e,key:t,onRemote:n,onStatus:i}){let r=e+"-"+Math.random().toString(36).slice(2,8),o=new Map,a=0,c=null,l=null,h={ntfy:"off"},u=()=>i&&i({...h}),d=(async()=>{t&&(c=await Pu(t))})();async function p(y,v){if(!qs()||!t)return;await d;let x={k:y,o:r,s:++a};v&&(x.x=JSON.stringify(v)),x.sig=await vo(c,`${x.k}|${x.o}|${x.s}`+(x.x?"|"+x.x:""));try{let A=await fetch(s,{method:"POST",body:JSON.stringify(x)});h.ntfy=A.ok?"ok":"error"}catch{h.ntfy="error"}u()}async function g(y,{requireSig:v}){let x;try{x=JSON.parse(y)}catch{return}if(typeof x=="number"&&(x={k:x,o:"legacy",s:0}),!x||!Number.isFinite(x.k)||x.o===r||v&&(!c||!x.sig||x.sig!==await vo(c,`${x.k}|${x.o}|${x.s}`+(x.x?"|"+x.x:"")))||(o.get(x.o)??-1)>=x.s)return;o.set(x.o,x.s);let A=null;if(x.x&&v)try{A=JSON.parse(x.x)}catch{}n(x.k,x.o,A)}function _(){if(!qs()||l)return;let y=e!=="audience";e==="audience"&&fetch(s+"/json?poll=1&since=latest").then(v=>v.text()).then(v=>{let x=v.trim().split(`
`).filter(Boolean),A=x.length&&JSON.parse(x[x.length-1]);A&&Date.now()/1e3-A.time<1800&&g(A.message,{requireSig:y})}).catch(()=>{}),l=new EventSource(s+"/sse"),l.onopen=()=>{h.ntfy="ok",u()},l.onerror=()=>{h.ntfy="error",u()},l.onmessage=v=>{try{let x=JSON.parse(v.data);x.event==="message"&&g(x.message,{requireSig:y})}catch{}}}function m(y){y&&y.o!==r&&g(JSON.stringify(y),{requireSig:!1})}function f(y){return{k:y,o:r,s:++a}}return{origin:r,publish:p,subscribe:_,acceptDirect:m,stamp:f,status:h}}function Du({base:s,role:e,key:t,onMessage:n,onState:i}){if(!qs()||!t||!window.RTCPeerConnection)return null;let r=s+"-rtc",o=e+"-"+Math.random().toString(36).slice(2,8),a=null,c=null,l=null,h=null,u={},d=Pu(t).then(v=>{c=v}),p=v=>i&&i(v);async function g(v){await d,v.from=o,v.at=Date.now();let x=JSON.stringify(v),A=JSON.stringify({m:x,sig:await vo(c,x)});fetch(r,{method:"POST",body:A}).catch(()=>{})}function _(v){return v.iceGatheringState==="complete"?Promise.resolve():new Promise(x=>{let A=()=>{v.iceGatheringState==="complete"&&x()};v.addEventListener("icegatheringstatechange",A),setTimeout(x,2500)})}function m(){return a&&a.close(),a=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),a.onconnectionstatechange=()=>{p(a.connectionState),a.connectionState==="failed"&&setTimeout(()=>e==="xr"&&g({type:"hello"}),3e3)},a}function f(v){u[v.label]=v,v.onopen=()=>{v.label==="deck"&&p("connected")},v.onclose=()=>{v.label==="deck"&&p("closed")},v.onmessage=x=>{try{n(JSON.parse(x.data))}catch{}}}async function y(v){if(!(v.from===o||v.to&&v.to!==o)&&!(Date.now()-v.at>6e4))if(e==="stage"&&v.type==="hello"){l=v.from;let x=m();f(x.createDataChannel("deck")),f(x.createDataChannel("pose",{ordered:!1,maxRetransmits:0})),await x.setLocalDescription(await x.createOffer()),await _(x),g({type:"offer",to:l,sdp:x.localDescription.sdp})}else if(e==="xr"&&v.type==="offer"){l=v.from;let x=m();x.ondatachannel=A=>f(A.channel),await x.setRemoteDescription({type:"offer",sdp:v.sdp}),await x.setLocalDescription(await x.createAnswer()),await _(x),g({type:"answer",to:l,sdp:x.localDescription.sdp})}else e==="stage"&&v.type==="answer"&&a&&v.from===l?await a.setRemoteDescription({type:"answer",sdp:v.sdp}):e==="xr"&&v.type==="ping"&&g({type:"hello"})}return h=new EventSource(r+"/sse"),h.onmessage=async v=>{try{let x=JSON.parse(v.data);if(x.event!=="message")return;let{m:A,sig:R}=JSON.parse(x.message);if(await d,R!==await vo(c,A))return;y(JSON.parse(A))}catch{}},h.onopen=()=>g({type:e==="xr"?"hello":"ping"}),{send(v){let x=u[v.type==="pose"||v.type==="frame"?"pose":"deck"];return x&&x.readyState==="open"?(x.send(JSON.stringify(v)),!0):!1},get open(){return!!(u.deck&&u.deck.readyState==="open")}}}function D_(){return location.protocol==="http:"&&/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)?"":location.protocol==="https:"?"http://localhost:8787":null}function Nu({onMessage:s,onState:e}){if(!window.EventSource)return null;let t=D_();if(t===null)return null;let n=!1,i=null,r=2e3,o=0,a=()=>{try{i=new EventSource(t+"/api/bus/events")}catch{return c()}i.onopen=()=>{n=!0,r=2e3,e&&e("ok")},i.onerror=()=>{let l=n;n=!1,i.close(),i=null,e&&e(l?"error":"off"),c()},i.onmessage=l=>{try{s(JSON.parse(l.data))}catch{}}},c=()=>{clearTimeout(o),o=setTimeout(a,r),r=Math.min(r*1.5,1e4)};return a(),{get open(){return n},send(l){return n?(fetch(t+"/api/bus",{method:"POST",headers:{"content-type":"text/plain"},body:JSON.stringify(l)}).catch(()=>{}),!0):!1}}}var Ys=!1,Ot=window.DECK;if(window.DECK_LOCAL&&window.DECK_LOCAL.photos)for(let s of Ot.scenes)window.DECK_LOCAL.photos[s.id]&&(s.photos=window.DECK_LOCAL.photos[s.id]);var vn=Ot.scenes,Ks=vn.length,Zs=s=>Math.max(0,Math.min(Ks-1,s|0)),Hc=s=>s&&s.loop?s.loop==="all"?Ot.loopSteps.map(e=>e.id):s.loop.split("-"):[],N_=new URLSearchParams(location.search),xt='"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans CJK JP", "Noto Sans JP", "BIZ UDPGothic", Meiryo, sans-serif';function zn(s,e){try{if(e===void 0)return localStorage.getItem(s);localStorage.setItem(s,e)}catch{}return null}async function Uu(){let s=new URLSearchParams(location.hash.slice(1)).get("k"),e=N_.get("k")||s;if(e){await zc(e,Ot.presenterKeyHash)&&zn("xrk26-key",e);let n=new URL(location.href);n.searchParams.delete("k"),s&&(n.hash=""),history.replaceState(null,"",n)}let t=zn("xrk26-key");return t&&await zc(t,Ot.presenterKeyHash)?t:Ot.presenterKeyHash?"":"dev"}function Vc(s,e=Date.now()){return s&&"e"in s?{elapsed:s.e,startedAt:s.r?e:null}:s||{elapsed:0,startedAt:null}}function Gc(s,e=Date.now()){let t=(s.elapsed||0)+(s.startedAt?e-s.startedAt:0),n=Ot.talkMinutes*6e4-t,i=r=>{let o=Math.abs(r),a=Math.floor(o/6e4),c=Math.floor(o/1e3)%60;return(r<0?"-":"")+a+":"+String(c).padStart(2,"0")};return{elapsed:i(t),left:i(n),ratio:Math.min(1,t/(Ot.talkMinutes*6e4)),over:n<0,running:!!s.startedAt}}function Ou({role:s,key:e,onGo:t,onMessage:n,onStatus:i}){let r=s+"-"+Math.random().toString(36).slice(2,8),o=0,a=-1,c=0,l={local:!1,ntfy:"off",aura:"off",lan:"off",lanAura:0},h=()=>i&&i({...l}),u="BroadcastChannel"in window?new BroadcastChannel("xrk26"):null,d=()=>r+"-"+ ++c,p=new Set,g=A=>A.id?p.has(A.id)?!1:(p.add(A.id),p.size>400&&p.delete(p.values().next().value),!0):!0;function _(A,R,T,C){R&&R<o||(o=R||Date.now(),A=Zs(A),s==="console"&&T!=="local"&&A!==a&&(u&&u.postMessage({type:"go",k:A,at:o,from:r,id:d()}),y&&T==="lan"&&C&&C.net===!1&&y.publish(A)),a=A,t(A,T))}function m(A,R){if(!(!A||A.from===r||!g(A))){if(A.type==="aura-hello"){if(s!=="console")return;l.lanAura=Date.now(),h(),A.first&&n&&n({type:"peer"},"lan");return}R==="lan"&&s==="console"&&(l.lanAura=Date.now()),A.type==="go"?_(A.k,A.at,R,A):n&&n(A,R)}}u&&(u.onmessage=A=>{l.local=!0,h(),m(A.data,"local")});let f={console:"stage",aura:"xr",audience:"audience"}[s],y=null,v=null,x=null;if(!Ys&&f&&qs()&&Ot.ntfy&&(s==="audience"||e)&&(y=Lu({base:Ot.ntfy,role:f,key:s==="audience"?"":e,onRemote:(A,R,T)=>{if(T&&T.only){s!=="audience"&&T.msg&&m(T.msg,"remote");return}_(A,Date.now(),"remote")},onStatus:A=>{l.ntfy=A.ntfy,h()}}),y.subscribe(),s!=="audience"&&(v=Du({base:Ot.ntfy,role:f,key:e,onMessage:A=>m(A,"link"),onState:A=>{l.aura=A,h(),A==="connected"&&n&&n({type:"peer"},"link")}}))),!Ys&&(s==="console"||s==="aura")){let A=!0;x=Nu({onMessage:R=>m(R,"lan"),onState:R=>{l.lan=R,h(),R==="ok"&&s==="aura"&&(x.send({type:"aura-hello",first:A,from:r,id:d()}),A=!1)}}),x&&s==="aura"&&setInterval(()=>x.send({type:"aura-hello",from:r,id:d()}),4e3)}return{me:r,go(A){let R=Date.now();o=R,a=Zs(A);let T={type:"go",k:a,at:R,from:r,id:d(),net:l.ntfy==="ok"};u&&u.postMessage(T),v&&v.send(T),x&&x.send(T),y&&s!=="audience"&&y.publish(T.k)},local(A){A.from=r,u&&u.postMessage(A)},remote(A){A.from=r,A.id=d();let R=!!(v&&v.send(A)),T=!!(x&&!(R&&(A.type==="pose"||A.type==="frame"))&&x.send(A));return R||T},wide(A){this.remote(A),y&&s!=="audience"&&y.publish(a<0?0:a,{only:1,msg:A})},get auraOpen(){return!!(v&&v.open||x&&x.open)},status:l}}function Fu(){return Ot.hashtags.map(s=>"#"+s).join(" ")}function Bu(s){return s.target&&/INPUT|TEXTAREA|SELECT/.test(s.target.tagName)?0:["ArrowRight","ArrowDown","PageDown"," ","Enter"].includes(s.key)?1:["ArrowLeft","ArrowUp","PageUp","Backspace"].includes(s.key)?-1:0}kn();kn();function U_(s,e,t,n,{transparent:i=!0}={}){let r=document.createElement("canvas");r.width=s,r.height=e;let o=r.getContext("2d"),a=new fn(r);a.colorSpace=je,a.anisotropy=4;let c=new Ze({map:a,transparent:i,depthWrite:!1,side:Rt,toneMapped:!1}),l=new He(new Et(t,t*e/s),c),h={mesh:l,canvas:r,ctx:o,redraw(...u){o.clearRect(0,0,s,e),n(o,s,e,...u),a.needsUpdate=!0}};return l.userData.panel=h,h}function ku(s,e,{color:t="#e8f4f2",weight:n=700,px:i=96}={}){let r=document.createElement("canvas").getContext("2d");r.font=`${n} ${i}px ${xt}`;let o=Math.ceil(r.measureText(s).width)+i*.6,a=Math.ceil(i*1.5),c=U_(o,a,e*o/a,l=>{l.font=`${n} ${i}px ${xt}`,l.textBaseline="middle",l.textAlign="center",l.fillStyle=t,l.fillText(s,o/2,a/2)});return c.redraw(),c.mesh}var $s=new de("#7fe3c4"),Wc=new de("#ffc46b"),O_=new de("#3b5560"),Mo=class{constructor({labelHeight:e=.17}={}){this.group=new ht,this.spin=new ht,this.group.add(this.spin),this.active=new Set,this.fade=1;let t=new Ze({color:$s,transparent:!0,opacity:.55});this.ring=new He(new Hs(1,.012,8,160),t),this.spin.add(this.ring);let n=new He(new Hs(1,.05,8,160),new Ze({color:$s,transparent:!0,opacity:.08,blending:xn,depthWrite:!1}));this.spin.add(n);let i=[Math.PI/2,0,-Math.PI/2,Math.PI];this.nodes=Ot.loopSteps.map((o,a)=>{let c=i[a],l=new P(Math.cos(c),Math.sin(c),0),h=new Ze({color:$s.clone(),transparent:!0,opacity:1}),u=new He(new si(.075,24,16),h);u.position.copy(l);let d=new He(new si(.16,24,16),new Ze({color:Wc,transparent:!0,opacity:0,blending:xn,depthWrite:!1}));u.add(d);let p=ku(o.label,e),g=p.geometry.parameters.width;return a===0?p.position.set(0,1+e*1.1,0):a===2?p.position.set(0,-1-e*1.1,0):p.position.set((1+.14+g/2)*Math.sign(l.x),0,0),this.group.add(u,p),{id:o.id,ball:u,glow:d,text:p,a:c}});for(let o=0;o<4;o++){let a=i[o]-Math.PI/4,c=new He(new so(.045,.11,12),new Ze({color:$s,transparent:!0,opacity:.8}));c.position.set(Math.cos(a),Math.sin(a),0),c.rotation.z=a+Math.PI,this.spin.add(c)}this.dots=[];let r=new si(.022,8,6);for(let o=0;o<28;o++){let a=new He(r,new Ze({color:Wc,transparent:!0,opacity:.7,blending:xn,depthWrite:!1}));a.userData.t=o/28,this.spin.add(a),this.dots.push(a)}this.setActive([])}setActive(e){this.active=new Set(e),this.all=e.length===4}tick(e){let t=e/1e3;for(let i of this.nodes){let r=this.active.has(i.id),o=r?1+Math.sin(t*3+i.a)*.12:1;i.ball.scale.setScalar((r?1.45:.9)*o),i.ball.material.color.lerp(r?Wc:this.active.size?O_:$s,.12),i.glow.material.opacity+=((r?.35:0)-i.glow.material.opacity)*.1,i.text.material.opacity+=((r||!this.active.size?1:.35)*this.fade-i.text.material.opacity)*.12}let n=this.active.size?.09:.04;for(let i of this.dots){let r=Math.PI/2-(i.userData.t+t*n)%1*Math.PI*2;i.position.set(Math.cos(r),Math.sin(r),0),i.material.opacity=.7*this.fade}this.ring.material.opacity=.55*this.fade}};kn();var zu={UW3:{"\u3002":6699,\u306B:3897,"\u3001":4784,\u306E:3706,\u304C:4162,\u3092:5769,\u306F:4221,\u3068:2900,\u308B:2971,\u304F:2902,\u3082:3155,\u3046:2242,\u3066:2447,\u3067:3372,\u305F:2217,\u3044:1855,\u306A:2357,\u3063:-1853,\u65B9:2814,\u3089:1353,\u3093:967,\u3070:1790,"\uFF3D":2166,\u304B:1899,"\uFF0C":3358,\u308A:1013,"\uFF01":3252,\u30FC:-102,\u3084:2149,"\uFF1F":3703,"\uFF0E":2093,"\u30FB":1074,"\u2026":2428,\u90E8:1732,\u3069:992,\u3054:-2327,"\uFF09":2573,\u30C3:-2137,"\u2606":2675,\u304A:-1495,\u4E0A:428,\u4EE5:-1870,\u3064:1078,"\u300D":1608,"\u266A":2714,\u96FB:-1669,\u30AF:335,\u3060:866,\u3078:2073,\u308D:1142,\u7B11:2335,\u305A:1456,\u9762:475,\u3073:514,\u3042:1179,\u4ECA:1080,\u3050:2053,\u5206:1111,\u611F:1389,\u5927:-1134,\u4EAC:-1396,\u4E2D:998,\u4EBA:486,\u5834:-794,\u30A4:-568,\u3059:938,\u3055:-599,\u307E:-370,\u5229:-681,\u9593:752,"\uFF10":-870,\u3041:1322,\u30D5:-1285,\u30F3:-284,"\u300C":-1434,\u5F53:-337,\u304D:530,\u65E5:713,\u30B9:-901,\u3083:1112,\u5F8C:1224,\u3005:1435,\u30B7:-1196,\u5EA6:982,\u89B3:-976,\u98DF:-517,\u884C:-725,\u30C9:-995,\u30EA:-636,\u3048:728,\u7A7A:902,\u591C:1480,\u30A2:-700,"\u300F":1404,"\uFF11":-550,\u4F53:1e3,\u79CB:1464,\u5165:-819,\u30D7:-718,\u6614:1287,"\uFF3B":-960,\u984C:1113,\u80FD:-710,\u7686:1294,\u3080:920,\u5B66:-552,\u614B:-749,\u6708:584,\u4FC2:701,\u5909:328,\u8D85:976,\u3076:672,\u7136:515,"\u301C":489,\u308C:295,\u7531:680,\u6BB5:13,\u975E:768,\u5149:-218,\u610F:-477,\u305E:825,\u5E74:344,\u3079:-711,\u6A5F:-463,\u8A00:-419,\u3061:363,\u6C17:130,\u307F:275,\uFF4F:-520,"\uFF1E":588,\u3057:181,\u3051:159,\u79FB:-635,\u898B:160,\u30BA:304,\u81EA:-352,\u679C:767,\u756A:252,\u8272:469,"\u3000":257,\u3071:454,\u51FA:-160,\u5C4B:338,\u30AB:-102,\u30E1:-136,\u6307:-240,\u5E97:203,\u4E00:-50,\u5225:285,\u982D:486,\u671D:270,\u60F3:398,\u5473:101,\u751F:-160,\u8A9E:159,"\u201D":215,\u7740:-149,\u6240:189,"\uFF1A":94,\u795E:-111,\u5FDC:149,\u7A0B:145,\u4E0D:-93,\u6599:-76,\u5BFA:50,\u6C34:54,\u30EC:-54,\u30D1:-29,\u30B5:33,\u30B0:12,\u6709:-16},UW4:{"\u3002":-7440,\u306E:-4018,\u304C:-3577,\u306B:-4299,\u3066:-3839,\u308B:-5462,"\u3001":-7452,\u306F:-3332,\u3063:-4313,\u3067:-3120,\u3092:-4861,\u3046:-2446,\u3068:-2917,\u308A:-4081,\u307E:-1296,\u305F:-1675,\u3042:501,\u308C:-4326,\u306A:-1928,\u305D:456,\u304F:-2884,\u304B:-2662,\u3089:-4391,\u3054:591,\u3057:-1725,\u3053:-517,\u3060:-2037,\u304D:-2074,\u3044:-1531,\u3093:-3821,\u30FC:-2899,\u3082:-2746,\u307F:-1111,\u98DF:652,\u884C:411,\u601D:1386,\u3059:-1159,\u7A7A:2526,\u5927:788,"\u300D":-5393,\u3058:-2352,\u3084:-1257,\u3051:-3441,\u3081:-1867,\u3055:-1716,\u3088:-643,"\u300C":2301,\u8868:1003,\u65E5:695,\u5E83:1811,\u5834:333,\u4E00:576,\u6642:564,\u3061:-1762,\u51B7:2351,\u4EAC:614,"\uFF0C":-4205,\u308F:-1624,\u4EBA:512,\u79C1:1957,"\uFF01":-4469,\u3048:-1844,\u30C3:-2189,\u5F53:384,"\u30FB":-677,\u30F3:-2078,"\uFF11":710,\u65B9:-816,\u3079:-2964,\u624B:270,\u6765:430,\u308D:-2793,\u305B:-1498,\u30EB:-1178,\u3070:-2432,\u3064:-1195,\u4F7F:1131,"\uFF08":2399,\u6301:180,"\u2026":-2208,\u3086:-2265,"\uFF1F":-3412,"\uFF09":-4207,\u3076:-2267,\u4F55:1291,\u5F7C:1247,\u3073:-1619,\u7B11:-3444,\u672C:-1249,\u3069:-697,"\uFF3B":1760,"\uFF0E":-2874,\u8A00:227,\u304A:820,\u305A:-1966,\u30A4:-507,\u4ECA:1002,\u3083:-2441,\u898B:386,\u81EA:792,"\uFF12":533,\u6700:1072,\u7528:-716,\u5E2F:-1138,\u9593:-393,\u643A:441,\u591A:1062,\u30EA:-707,\u80FD:-1270,"\u300F":-3209,"\uFF3D":-1427,\u6C17:235,\u5165:412,\u6709:744,\u306D:-1659,\u767D:451,\u3041:-1501,\u304E:-1428,\u4E2D:34,\u3072:1076,\u904A:1409,"\u201D":-817,\u98A8:673,\u30B3:344,\u3087:-1527,\u6C34:286,\u60C5:-375,"\uFF10":-374,\u3080:-1261,\u5408:-948,\u516C:724,\u307C:-949,"\u266A":-1513,\u5C0F:736,\u50D5:856,"\u2606":-1296,"\u301C":-1156,\u30C9:-76,\u697D:308,\u5168:475,\u66F8:411,\u30B9:-218,\u4E8C:481,\u614B:-582,\u5C11:436,\u4E0D:505,\u8FD4:-347,\u5B9A:-356,\u305C:-907,\u9AD8:229,\u7279:623,\u796D:413,\u4ED6:368,\u3065:-776,\u76EE:117,\u305E:-935,\u8A71:316,\u5B50:-233,\u3050:-840,\u5E74:-625,"\uFF13":22,\u9053:181,\u7684:-500,\uFF4F:-489,\u5B9F:368,\u8CB7:366,\u7121:192,\u8857:443,\u6771:470,\u7269:-204,\u30E5:-434,\u307B:-176,\u8FBC:-568,\u7518:383,\u30BF:-212,\u63DB:-278,\u73FE:191,\u65B0:150,\u590F:403,\u30D5:-157,\u30C8:-148,\u3052:-455,\u3056:-327,\u30C7:174,\u5238:-471,\u611F:28,\u79CB:307,\u96E3:179,\u5916:153,\u3078:-247,\u30E7:-156,\u6D41:254,\u821E:138,\u30B5:75,\u524D:-75,\u5E97:101,\u62BC:264,\u958B:61,"\u3000":-148,"\uFF3E":-256,\u5EA6:-125,"\uFF15":52,\u3005:-142,\u5199:159,\u56DE:-154,\u30E9:-56,\u95A2:-145,\u5B89:63,\u76F8:54,\u53C2:45,\u767E:45,\u53D6:-45,\u30E0:-41,\u5C4B:-8,\u901A:-8,\u52DD:4,\u7F8E:4},UW5:{"\u3002":-2177,\u3067:-955,\u3059:-681,"\u3001":-1011,\u306A:-608,\u307E:-353,\u3066:169,\u3063:964,\u308B:175,\u306F:-874,\u304D:1177,\u3057:-394,\u304A:345,\u3092:-674,\u304F:287,\u3053:500,\u3058:886,\u306B:-612,\u305D:-421,\u80FD:219,\u308F:710,\u3079:1871,\u3048:637,\u3093:1001,\u3042:-271,\u305F:198,\u307F:293,\u3044:345,"\u30FB":-1082,\u3068:-617,\u3088:-587,\u306E:-641,\u308D:-360,\u4E0A:-1087,\u304B:210,\u3060:-338,\u3081:851,\u5E2F:303,\u308C:495,\u3056:1494,\u3089:222,\u305A:1173,\u3055:-327,\u3064:1091,\u30EB:-472,\u9762:776,"\u300D":-1068,\u96FB:-285,\u307C:1415,\u65E5:342,\u304C:-272,\u3073:826,\u305B:-303,\u601D:-891,\u3061:572,\u51B7:1123,\u308A:409,\u5E74:876,\u4F7F:-1390,\u5229:365,\u8449:791,"\uFF01":-384,"\uFF3D":-470,\u5408:255,\u3076:15,\u5238:-1133,\u610F:708,\u3050:159,\u30D0:-254,\u3082:-93,\u3046:325,\u5165:-341,\u79FB:-571,\u30C8:-313,\u4F53:-1085,\u5F53:401,\u3005:505,\u5206:173,\u30A4:171,\u898B:-272,\u6765:-122,\u6599:579,\u5BFA:-461,\u304E:348,\u624B:179,\u7D9A:-872,\u3080:458,\u901A:-209,"\uFF0E":-184,\u30BF:244,\u884C:-180,"\uFF1F":-192,\u6C34:-154,\u5148:-562,\u90FD:40,\u4E00:-151,\u3069:-41,\u3070:209,\u30A2:-123,\u5B66:49,\u6700:-116,\u964D:104,\uFF4F:95,\u3078:-146,\u4F55:-176,\u52B9:111,\u30F3:-30,\u3087:90,\u30FC:4,"\u3000":-135,"\uFF08":-67,\u7A2E:42,"\uFF17":-101,\u7684:-54,\u6210:46,\u30E9:29,\uFF2E:104,"\uFF11":-29,\u6709:-37,\u4E2D:8,\u5834:4},UW2:{"\u3002":-1401,"\u3001":-1370,\u3092:-2403,\u306B:-1207,\u304C:-653,\u306F:-1010,\u304B:18,\u308C:5,\u3063:269,\u4EE5:2215,\u3066:-985,\u3046:-489,\u5168:1762,\u306E:-695,\u305D:-534,\u3067:-810,\u3060:523,\u3086:1668,\u3055:922,\u304F:-812,\u3081:81,\u3068:-751,\u3082:-813,\u3042:-233,\u4E00:1197,\u3057:-49,\u3093:344,\u304A:-711,\u98DF:981,\u3054:-682,\u304D:-556,\u6BCE:1671,\u7D50:1952,\u5F7C:754,\u5C11:676,\u6700:445,\u307B:1001,\u308F:-118,\u821E:2257,\u4E0A:-421,\u3088:577,\u540C:567,\u308A:-479,\u6A5F:1341,\u4EBA:201,\u610F:531,\u306A:-492,"\u300C":-482,\u3070:-464,\u95A2:745,\u4EAC:-377,\u672C:694,\u3044:-79,\u5927:266,\u76EE:-1004,\u591A:387,\u7740:-477,\u3064:-423,\u30B1:-246,\u632F:-1313,\u3083:283,\u984C:848,\u624B:663,\u3072:-1353,\u5BB9:956,\u6C34:335,\u6211:-1421,\u308B:-207,\u88CF:-1437,\u30FC:274,\u305C:567,\u3071:396,\u540D:341,\u30D5:-264,\u5BFA:-551,\u8449:787,\u307E:-173,\u5915:826,\u3076:435,\u7D76:1181,\u9AD8:498,\u4ECA:276,\u53CB:494,\u3089:-91,\u30F3:167,\u305F:-109,\u307F:-123,\u6599:70,\u30A4:-122,\u96FB:315,\u51B7:-664,\u6253:557,\u30E1:-47,\u4E16:-793,\u30D1:289,\u5973:-487,\uFF52:990,\u30D7:-195,\u53D6:-360,"\uFF3E":149,\u5834:190,\u3053:161,"\uFF0C":-306,\u843D:-499,\u9078:313,\u77E5:-361,\u6975:748,\u5165:-160,\u826F:183,\u30E9:-210,\u30B9:54,\u904A:-310,\u7528:-161,\u5F0F:93,\u3005:80,\u8ECA:124,\u7ACB:-292,\u4E0B:154,\u30EB:31,\u7518:227,\u5B9F:97,\u91CD:159,\u4E57:-115,\u5F53:94,"\uFF1A":106,"\uFF3D":-50,\uFF28:-84,\u7684:42,\u76F8:75,\u4E09:58,\u3051:16,\u683C:130,\u6B63:100,"\uFF3B":-16,\u65E5:-25,\u516C:-33,"\uFF14":20,\u30A3:-12,\u308D:-4},UW6:{\u304C:320,"\u3002":-307,\u3066:-16,\u3067:219,\u306F:307,\u3057:581,\u5165:621,\u3069:828,\u3042:-496,\u7A7A:1589,\u306A:218,\u3059:-90,\u3060:95,\u3081:1415,\u5238:1711,\u3055:555,\u3054:-283,\u306E:85,\u6027:2064,\u3046:35,\u3084:819,\u308A:578,\u5834:-864,\u306B:245,\u3064:506,\u308D:352,\u304D:-17,\u3063:301,\u308B:71,\u304B:231,\u3044:365,\u3089:65,\u305D:-101,\u3070:527,\u3051:-213,\u30FC:-66,\u3093:324,\u5F7C:-1272,\u30AF:-346,\u30EB:207,"\uFF10":626,\u304F:240,"\u3001":180,\u98DF:-284,\u904A:-906,\u5BFA:611,"\u30FB":-639,"\uFF1A":1217,\u8A00:-361,\u3086:755,\u614B:221,\u8FBC:679,\u3092:85,\u7684:479,\u53EF:567,\u30BF:380,\u6C17:415,\u601D:-111,\u3071:813,\u307E:170,\u30E1:239,\u304A:-18,\u30D4:780,\u30AB:292,\u9001:-896,\u6765:-261,\u904E:846,\u30A4:-244,\u52B9:-725,\u30B7:-130,\u30B1:-388,\u305A:-403,\u3076:-248,\u713C:643,\u308C:119,\u5E83:-150,\u6A5F:216,\u308F:60,\u30F3:-64,\u65B9:-235,"\uFF11":33,\u3053:41,\u5E97:164,\u5370:360,\u3073:129,\u56DE:-94,\u304E:280,\u4E0D:204,\u3082:-18,\u81EA:123,\u3080:168,\u30D1:-112,\u5468:275,\u51FA:68,\u53C2:114,\u795E:33,\u7740:-20,\u9593:-4,\u7DF4:8,\u3083:-4},UW1:{\u306F:-273,\u3046:275,\u307E:128,\u304A:922,\u3054:890,\u3068:165,\u304C:-385,\u308B:-34,\u305B:210,\u3044:-91,\u3093:289,\u3042:-230,\u3067:-127,\u5B66:209,\u308A:-102,\u6D6E:1464,\u306B:-344,\u7518:-1424,\u3064:241,\u30D0:511,\u306A:-220,\u3066:60,\u6C34:1969,"\u3001":-26,\u96FB:127,\u5F53:-1038,\u3075:1899,\u3089:72,\u308C:-44,\u643A:-86,\u3092:-176,\u305D:137,\u3063:194,\u308D:303,"\uFF3B":-601,\u30FC:113,\u304B:-110,\u9593:572,\u3061:285,\u3086:-428,\u3057:-30,\u5916:301,\u30D5:-155,\u3082:-96,"\uFF10":275,\u7A7A:-524,\u30B9:-251,\u304F:134,\u81EA:412,\u3059:151,\u7528:599,\u3055:-164,\u30C1:183,\u30B1:-196,\u5165:266,\u30C4:134,\u56F0:574,\u5229:-371,\u751F:254,\u6A5F:318,\u5B89:-400,\u753B:-53,\u5EAD:619,\u30A4:211,"\uFF13":-258,\u30E1:96,\u9762:-306,\u4F55:173,\u3053:64,\u554F:588,\u65B9:124,\u767D:-248,\u3058:-49,\u793E:225,\u69D8:365,\u7530:137,\u56FD:-382,\u8FBC:42,\u306E:-31,\u9AD8:170,"\u3002":-17,\u30C3:117,\u3060:63,\u65B0:178,"\uFF0E":-72,\u30E9:92,\u4F7F:-79,\u898B:76,"\uFF1F":113,\u632F:209,"\uFF01":65,\u64AE:-182,\u5238:79,\u3056:120,\u5468:137,\u9577:144,\u3084:-42,\u5C71:114,\u30D1:63,\u597D:50,\u30DA:126,\u7740:-16,\u3081:-12,\u307F:-8,\u500B:-79,\u4E0A:12,\u3048:-8,\u9023:-29,\u30DC:16},BW2:{\u305F\u3068:1475,\u3068\u304A:-3875,\u3068\u3044:274,\u3046\u3084:-2003,\u306A\u3044:-2999,\u306E\u307F:-2622,\u3066\u3044:-1296,\u3067\u3042:-3302,\u306E\u3088:-838,\u3067\u3059:-3035,\u305F\u307E:-2116,\u3044\u305F:-1737,\u306E\u6A5F:-2082,\u306E\u3067:-921,\u3067\u304D:-2119,\u306B\u306F:-1012,\u306B\u3082:-1213,\u306F\u3058:-2465,"\u3001\u305D":-1810,\u304C\u3068:-1022,\u304F\u306A:-1771,\u3067\u3082:-1689,\u306F\u306A:-331,\u306E\u306F:-1100,\u308B\u3068:-643,\u3066\u304A:-2518,\u306A\u3069:-1807,\u5E2F\u96FB:-1351,\u3067\u3057:-1856,"\u3001\u3068":-558,\u307E\u305F:-2737,\u305F\u3060:-2687,\u304F\u3057:-1520,\u308B\u3088:-944,\u3044\u3082:709,\u3082\u3042:-935,\u308A\u3082:-1014,\u3066\u3042:-2039,\u305F\u3044:-1183,\u3066\u307F:-1524,\u305D\u3053:-652,\u3082\u3057:-490,\u3066\u304F:-1248,\u3069\u3082:-675,\u3046\u3069:-1684,\u306E\u524D:-820,\u306E\u3060:-873,\u306A\u304F:-956,\u306B\u306A:-362,\u4EBA\u304C:1674,\u3093\u3069:-722,\u3082\u306E:-753,\u3044\u307E:-421,\u3068\u601D:545,\u308C\u305F:-890,\u306F\u3044:-770,\u3059\u3054:-1196,\u304F\u3060:-1043,"\u30FB\u30FB":-1221,\u3066\u304D:-1069,\u304C\u3063:-1494,\u306F\u3042:-1185,\u3067\u306F:-1027,\u3044\u3064:-659,\u3068\u306A:159,\u6642\u9593:-681,\u304C\u3057:280,\u306B\u3057:-458,\u3046\u307E:-1227,\u305F\u3061:-851,\u306E\u304A:458,\u3070\u3044:-968,"\u3001\u306A":-145,\u305F\u6642:421,\u306E\u3082:-489,\u3068\u304B:-782,\u3089\u306A:-64,\u306A\u304B:-299,\u306E\u304B:-278,\u3067\u306A:-1003,\u305F\u3082:318,\u3068\u3053:-337,\u3082\u306A:-157,\u3057\u305F:-402,\u3082\u3064:-433,\u3044\u3044:-357,\u30FC\u30C9:-523,\u3068\u304D:-230,\u3082\u3061:-157,\u305F\u3088:-393,\u306F\u3067:41,\u3068\u3082:-359,\u3044\u3057:-401,\u3044\u3088:-494,\u306F\u305A:-333,\u3084\u3059:-524,\u3068\u540C:-442,\u3088\u3046:-175,\u3044\u306A:-144,\u30FC\u306A:476,\u308B\u306E:-197,\u3057\u3044:-297,"\u3001\uFF11":-643,\u3066\u3082:-151,\u308A\u306A:191,\u304C\u3088:195,\u306E\uFF11:-539,\u3046\u304B:-137,"\u3001\u6E05":-374,\u4ECA\u65E5:-360,\u3068\u3059:-127,\u3064\u306E:186,"\uFF3D\u4EAC":-152,\u3046\u3044:-93,\u306E\u304C:-101,\u3044\u4EBA:80,\u3051\u3069:-126,\u30FC\u3067:83,\u304C\u3061:62,\u306E\u65B9:96,\u3089\u3044:-54,\u3067\u3044:-33,\u3066\u305F:-37,\u3069\u3053:-20},BW1:{\u306E\u307F:3058,\u4EE5\u4E0A:1223,\u307E\u307E:2830,\u304B\u3089:1723,\u305F\u307E:2162,\u308C\u305F:1494,\u767D\u3044:3534,\u3061\u304C:-2703,\u3081\u3066:969,\u306A\u3044:1045,\u305D\u306E:-1066,\u3067\u306F:-518,\u3063\u305F:166,\u305F\u3068:-948,\u3053\u3068:-1455,\u304F\u308C:922,\u3068\u304B:1688,\u308B\u306E:-1593,\u3046\u306A:513,\u305F\u306E:-1543,\u306E\u306F:1277,\u3088\u308A:1376,\u3067\u3082:667,\u3068\u304C:-1393,\u3057\u3044:917,\u304B\u3082:-1290,\u30C3\u30AF:631,\u3088\u3046:-1620,\u3093\u306A:471,\u3068\u3046:1085,"\u3002\u30FB":2456,\u305F\u3089:949,\u6C17\u306B:-70,\u3066\u3082:623,\u5229\u7528:1018,\u6700\u8FD1:1515,\u304C\u3068:-1545,\u3053\u306E:-1039,\u306B\u3082:816,\u3082\u3064:1694,"\u304C\u3001":1178,\u308C\u3066:-1090,\u308A\u304C:-96,\u308A\u3068:1198,\u3093\u3067:-325,\u307E\u3060:1343,\u306B\u306F:588,\u3082\u3046:1414,\u5C11\u3057:1375,\u3068\u304D:1349,\u3053\u305D:1413,\u308A\u3082:1231,\u308C\u3070:936,\u3051\u3069:1014,\u540C\u3058:1427,\u308B\u3068:202,"\u305F\uFF0E":1736,\u307E\u308A:1018,\u3044\u3046:138,"\u306F\u3001":436,\u3068\u3044:-725,"\u3044\u3001":-329,\u306A\u3089:1251,\u601D\u3044:-1273,"\u3066\u3001":702,\u3042\u308B:141,\u3063\u3066:-196,"\u3067\u3001":572,\u306A\u305C:1571,\u308A\u306B:356,\u308A\u306E:-399,\u307E\u308B:-429,\u308C\u308B:350,\u305F\u3044:242,\u305D\u308C:293,\u3082\u3057:1050,\u306E\u9593:1155,\u306A\u3069:1137,\u3044\u306E:-369,\u3046\u3084:-1096,\u3060\u3051:391,\u3066\u3044:-522,\u3068\u3067:941,\u304F\u3066:680,\u3093\u3060:515,\u30B1\u30FC:-781,\u3044\u3067:-844,\u666E\u6BB5:655,\u306E\u3082:725,\u601D\u3046:57,\u3048\u3070:791,\u304D\u306A:687,\u306B\u611F:-579,\u3044\u305F:310,"\u3001\u3068":310,\u3082\u306E:-538,\u305F\u3060:398,\u306E\u304C:482,\u3066\u308B:372,\u5927\u5909:401,\u306E\u5F8C:753,\u308B\u4EBA:626,\u3057\u304B:96,\u3067\u304D:-364,\u308B\u3067:252,\u307E\u3041:444,\u4F7F\u3044:-715,\u3053\u3046:-591,\u304B\u306A:-137,\u8CB7\u3044:-698,"\uFF01\uFF01":322,\u3081\u308B:-429,"\u306B\u3001":564,"\uFF10\u5186":304,"\u3001\u4ECA":302,\u30FC\u30B8:789,\u3059\u308B:-159,\u53CB\u9054:625,\u30AF\u30EB:437,\u308B\u306B:-442,\u3084\u3089:416,"\u3002\u3042":-619,\u304D\u308A:449,"\u3068\u3001":245,\u306E\u4E0A:589,\u305F\u3081:524,\u307E\u3067:160,"\u304B\u3001":-255,\u3046\u3061:218,\u306A\u304F:149,\u6765\u3066:386,\u304D\u305F:236,\u3079\u304D:424,\u3058\u3066:254,\u3071\u308A:342,\u3093\u3069:-303,"\u30FB\u30FB":237,\u3060\u306A:-302,\u308D\u3046:-315,\u73FE\u5728:281,"\u3002\uFF13":274,\u304A\u5E97:199,\u3066\u305F:147,\u3059\u3089:190,\u3044\u3082:-216,\u306B\u304B:180,\u3044\u306A:-98,\u6C17\u304C:115,\u305F\u308A:102,\u308F\u3089:-71,\u5B9F\u969B:83,\u3068\u306B:-20,"\u3082\u3001":29,\u304F\u3055:-24,\u56FD\u4EBA:24,\u3046\u304B:12,\u306F\uFF11:37,\u3068\u306F:-4},BW3:{\u3046\u307E:4971,\u3082\u306E:3479,\u3042\u308A:1053,\u3044\u305F:712,\u3088\u3046:-404,\u3044\u3046:719,\u4E0A\u304C:1571,\u307E\u3059:-943,\u306F\u3058:3173,\u3068\u3046:-693,\u305F\u307E:1383,\u3061\u304C:1979,\u3044\u3044:1237,\u304A\u308A:-2875,\u306E\u307F:3096,\u53EF\u80FD:402,\u3061\u3083:-1016,\u3053\u3068:899,\u305D\u3053:647,\u3067\u3082:1643,\u305D\u306E:1844,\u306A\u3063:-512,\u3068\u3044:-1257,\u3042\u308B:-339,\u3053\u306E:1656,\u3068\u304D:1917,\u305D\u3046:-1050,\u624B\u306B:1242,\u304B\u3089:-1223,\u6301\u3063:1098,\u3067\u304D:980,\u304B\u3051:2909,\u3068\u3066:2245,\u306A\u308B:481,\u306F\u3057:3011,\u3061\u3087:1986,\u3057\u3066:278,\u3068\u304A:678,\u3082\u3089:2538,\u30E1\u30FC:364,\u3053\u308D:-190,\u305D\u3057:-184,\u304B\u304B:1752,\u3082\u3046:2306,\u3069\u3093:-397,"\u30FB\u30FB":-1499,\u3088\u308A:-1463,\u3057\u307E:-93,\u3068\u3082:1038,\u3081\u3066:-1778,\u3082\u3093:1078,\u3044\u308D:832,\u307E\u3041:1442,\u3060\u3051:-941,\u3057\u305F:813,\u3055\u3093:-1566,\u3046\u3061:444,\u304D\u3063:727,\u3088\u304F:1082,\u3059\u3054:897,\u4EE5\u4E0A:-807,\u306A\u3044:287,\u305F\u3081:686,\u3053\u308C:1075,\u3069\u3046:296,\u306F\u307E:1041,"\u3059\u3002":-152,\u3068\u3063:917,\u6765\u305F:408,\u3057\u3083:1283,\u304B\u3063:-802,\u305F\u3060:1198,\u3057\u3044:-519,\u3059\u3050:1094,\u3082\u3068:1264,\u3084\u3063:422,\u304B\u3082:-670,\u3081\u308B:-1304,\u96FB\u8ECA:121,\u307E\u3057:-670,\u3044\u304B:480,\u30D1\u30BD:589,\u308F\u304B:691,\u306A\u304F:348,\u3044\u308B:556,\u3068\u3053:742,\u4E2D\u3067:414,\u3055\u3044:-672,\u307F\u305F:-739,\u304B\u3064:821,\u3044\u3066:-372,\u306A\u304B:198,\u306A\u3089:-160,\u3060\u3044:680,\u3042\u3063:-93,\u3082\u3063:626,\u307E\u305F:-479,\u3044\u3084:732,\u8003\u3048:429,\u3046\u304B:-268,\u3082\u3064:666,\u307E\u3060:296,\u304D\u307E:-514,\u307E\u3067:-677,\u304A\u8336:627,\u3053\u305D:-520,\u3068\u308A:539,\u3044\u3089:621,\u3067\u3059:-239,\u307E\u308A:-596,\u51FA\u6765:-428,\u3064\u306A:437,\u307B\u3057:-350,\u305F\u3044:-238,\u3053\u3053:552,\u306F\u3044:272,\u884C\u304D:-218,\u697D\u3057:128,"\u3057\u3001":-136,\u3081\u3063:260,\u3093\u306F:438,\u51FA\u3066:128,\u3044\u307E:85,\u3064\u3051:251,\u307F\u304C:-374,\u307E\u305A:233,\u3060\u308D:-357,\u30EB\u30FC:249,\u304C\u3061:-345,\u6599\u7406:8,\u796D\u308A:214,\u4F7F\u3063:109,\u3068\u601D:-161,\u307C\u304F:329,\u30A4\u30F3:203,\u9006\u306B:246,"\u3067\u3001":119,\u3069\u3053:46,\u305A\u3063:121,\u3064\u3044:62,\u307E\u305B:-58,\u3042\u306E:71,\u904E\u304E:-95,\u59CB\u3081:-28,\u307E\u3063:-24,\u7A0B\u5EA6:-24,\u66F8\u3044:12},TW3:{\u3068\u3044\u3046:970,\u3082\u306A\u304F:-1899,\u3068\u3053\u308D:-1724,\u3068\u3057\u3066:655,"\u3001\u3042\u308B":-2756,\u3066\u3044\u308B:-1375,\u306F\u306A\u3044:-473,\u306E\u307E\u307E:-961,\u3059\u3053\u3068:710,\u3066\u3057\u307E:-1361,\u3089\u306A\u3044:-1075,\u306F\u305D\u308C:-1539,\u3066\u3044\u304F:-289,\u3068\u3057\u305F:-1169,\u3068\u8A00\u3063:-1166,\u3066\u3044\u3046:769,\u3067\u3042\u308B:-749,"\u3001\u306A\u3093":-293,\u308B\u3053\u3068:-49,\u3067\u3042\u3063:-812,\u3068\u306A\u3063:229,\u306A\u3093\u3067:574,\u3044\u3068\u3053:75,\u3082\u3044\u3044:-408,\u3082\u3042\u308A:-183,\u3067\u3042\u308A:-535,\u3046\u3044\u3046:-120,\u3070\u3044\u3044:-137,\u306B\u3057\u3066:-37,\u3066\u3044\u305F:-66,\u308B\u3068\u304D:108,\u3067\u3057\u305F:-54,\u3046\u3053\u3068:-4},TW4:{\u3068\u3053\u308D:2195,\u3088\u3046\u306B:-1673,\u304F\u3089\u3044:1598,"\u3057\u305F\u3002":-1569,\u3042\u308A\u307E:-1767,\u304B\u306A\u308A:2848,\u3067\u304D\u305F:2069,"\u307E\u3059\u3002":-1366,\u3088\u3046\u306A:-2232,\u3053\u3068\u304C:-824,"\u3044\u305F\u3002":1066,\u3060\u304B\u3089:1092,\u3046\u3069\u3093:1258,\u305D\u3046\u3067:-925,\u3053\u3068\u306B:-856,\u3082\u3061\u308D:1697,\u3057\u304B\u3057:1383,\u3053\u3068\u3067:380,"\u306A\u3044\u3002":191,\u3053\u3068\u3082:-588,"\u3042\u308A\u3001":-595,\u3061\u306A\u307F:1130,\u3060\u3063\u305F:-1150,\u3059\u308B\u3068:406,"\u3053\u3068\u3002":683,"\u3067\u3082\u3001":628,\u3044\u308D\u3044:590,\u3044\u304B\u306A:651,\u30E1\u30FC\u30EB:256,\u3088\u3046\u3067:-896,\u306A\u304B\u306A:669,\u306A\u304F\u306A:253,\u3057\u306A\u3044:438,\u30BD\u30D5\u30C8:512,\u3053\u3068\u3092:255,\u308F\u3051\u3067:-234,\u307E\u3063\u3066:-824,\u306A\u3093\u3068:481,\u3059\u3054\u3044:314,\u3057\u3066\u304D:278,\u3044\u3048\u3070:397,\u3089\u3057\u3044:424,\u3057\u304B\u3082:494,\u3053\u3068\u306F:-232,\u3042\u305F\u308A:-390,\u98DF\u3079\u3066:140,\u3057\u3066\u3082:-174,\u3067\u304D\u307E:52,\u306A\u3093\u304B:116,\u306A\u3093\u3066:-102,\u3044\u304F\u3089:170,\u89B3\u5149\u5BA2:-75,\u3044\u3044\u3068:-63,"\u3044\u308B\u3002":37,\u3061\u3087\u3063:20,\u305D\u3046\u3044:16},TW2:{\u6C17\u306B\u5165:-4086,\u3067\u306F\u306A:-1086,\u3068\u304C\u3042:-1130,\u304B\u3082\u3057:-463,\u3093\u3067\u3044:-2306,\u305D\u3082\u305D:-1441,\u3046\u306B\u306A:-803,\u3057\u3066\u3044:-406,\u3067\u3082\u3042:-936,\u3063\u305F\u3053:-267,\u3057\u304B\u306A:440,\u3068\u3082\u3042:-757,\u304B\u3089\u306A:-477,\u3048\u308B\u3053:-436,\u3067\u3082\u306A:-207,\u3068\u306F\u3044:-59,\u3048\u3066\u3044:50,\u3057\u3066\u304A:-37},TW1:{\u3068\u3044\u3046:545,\u3066\u3044\u304F:1686,\u3088\u3046\u306A:1298,"\u30FB\u30FB\u30FB":1104,\u6301\u3063\u3066:-1851,\u3057\u304B\u3057:2079,\u3066\u304F\u308C:1444,\u306E\u307E\u307E:1162,\u304B\u306A\u308A:2083,\u3084\u306F\u308A:1728,\u306A\u304C\u3089:1223,\u3087\u3046\u3069:1174,\u3082\u306A\u304F:947,\u601D\u3063\u305F:811,\u3068\u3093\u3069:1250,"\u3001\u305D\u308C":412,"\u306A\u3044\u3001":-1039,\u306A\u3093\u3068:-691,\u3092\u5229\u7528:-1017,\u304C\u3063\u3066:-418,\u3072\u3068\u3064:732,\u3068\u601D\u3046:251,\u307E\u3057\u305F:-268,\u3067\u3042\u308B:267,\u304B\u306A\u304B:698,\u305D\u3057\u3066:556,\u3063\u304B\u308A:599,"\u3002\u305F\u3060":676,\u30EA\u30FC\u30B0:309,\u304D\u306A\u3044:141,\u306F\u305D\u306E:-68,\u3061\u308D\u3093:196,\u304F\u3055\u3093:225,\u308B\u3053\u3068:-271,\u3060\u3063\u3066:164,\u306A\u3063\u3066:-86,\u3059\u3054\u304F:163,\u308D\u3044\u308D:54,"\u3002\u305D\u306E":16,\u304F\u3089\u3044:4}};var Js=window;var Hu=s=>new Js.DOMParser().parseFromString(s,"text/html");var So=class{constructor(e){this.model=new Map(Object.entries(e).map(([t,n])=>[t,new Map(Object.entries(n))])),this.baseScore=-.5*[...this.model.values()].map(t=>[...t.values()]).flat().reduce((t,n)=>t+n,0)}parse(e){if(e==="")return[];let t=this.parseBoundaries(e),n=[],i=0;for(let r of t)n.push(e.slice(i,r)),i=r;return n.push(e.slice(i)),n}parseBoundaries(e){var t,n,i,r,o,a,c,l,h,u,d,p,g;let _=[];for(let m=1;m<e.length;m++){let f=this.baseScore;f+=((t=this.model.get("UW1"))===null||t===void 0?void 0:t.get(e.substring(m-3,m-2)))||0,f+=((n=this.model.get("UW2"))===null||n===void 0?void 0:n.get(e.substring(m-2,m-1)))||0,f+=((i=this.model.get("UW3"))===null||i===void 0?void 0:i.get(e.substring(m-1,m)))||0,f+=((r=this.model.get("UW4"))===null||r===void 0?void 0:r.get(e.substring(m,m+1)))||0,f+=((o=this.model.get("UW5"))===null||o===void 0?void 0:o.get(e.substring(m+1,m+2)))||0,f+=((a=this.model.get("UW6"))===null||a===void 0?void 0:a.get(e.substring(m+2,m+3)))||0,f+=((c=this.model.get("BW1"))===null||c===void 0?void 0:c.get(e.substring(m-2,m)))||0,f+=((l=this.model.get("BW2"))===null||l===void 0?void 0:l.get(e.substring(m-1,m+1)))||0,f+=((h=this.model.get("BW3"))===null||h===void 0?void 0:h.get(e.substring(m,m+2)))||0,f+=((u=this.model.get("TW1"))===null||u===void 0?void 0:u.get(e.substring(m-3,m)))||0,f+=((d=this.model.get("TW2"))===null||d===void 0?void 0:d.get(e.substring(m-2,m+1)))||0,f+=((p=this.model.get("TW3"))===null||p===void 0?void 0:p.get(e.substring(m-1,m+2)))||0,f+=((g=this.model.get("TW4"))===null||g===void 0?void 0:g.get(e.substring(m,m+3)))||0,f>0&&_.push(m)}return _}};var yt=console.assert,Vu=8203,Gu=String.fromCharCode(Vu),Xc={ELEMENT_NODE:1,TEXT_NODE:3},we={Inline:0,Block:1,Skip:2,Break:3,NoBreak:4,BreakOpportunity:5},F_={AREA:we.Skip,BASE:we.Skip,BASEFONT:we.Skip,DATALIST:we.Skip,HEAD:we.Skip,LINK:we.Skip,META:we.Skip,NOEMBED:we.Skip,NOFRAMES:we.Skip,PARAM:we.Skip,RP:we.Skip,SCRIPT:we.Skip,STYLE:we.Skip,TEMPLATE:we.Skip,TITLE:we.Skip,NOSCRIPT:we.Skip,HR:we.Break,LISTING:we.Skip,PLAINTEXT:we.Skip,PRE:we.Skip,XMP:we.Skip,BR:we.Break,RT:we.Skip,WBR:we.BreakOpportunity,INPUT:we.Skip,SELECT:we.Skip,BUTTON:we.Skip,TEXTAREA:we.Skip,ABBR:we.Skip,CODE:we.Skip,IFRAME:we.Skip,TIME:we.Skip,VAR:we.Skip,NOBR:we.NoBreak},B_=new Set(["HTML","BODY","ADDRESS","BLOCKQUOTE","CENTER","DIALOG","DIV","FIGURE","FIGCAPTION","FOOTER","FORM","HEADER","LEGEND","LISTING","MAIN","P","ARTICLE","ASIDE","H1","H2","H3","H4","H5","H6","HGROUP","NAV","SECTION","DIR","DD","DL","DT","MENU","OL","UL","LI","TABLE","CAPTION","COL","TR","TD","TH","FIELDSET","DETAILS","SUMMARY","MARQUEE"]),k_={ELEMENT:1,TEXT:3};function z_(s){return s==="inline"?we.Inline:s==="block"?we.Block:s.startsWith("ruby")?s==="ruby-text"?we.Skip:we.Inline:we.Block}function H_(s){let e=s.nodeName,t=F_[e];if(t!==void 0)return t;if(typeof Js.getComputedStyle=="function"){let n=Js.getComputedStyle(s);switch(n.whiteSpace){case"nowrap":case"pre":return we.NoBreak}let i=n.display;if(i)return z_(i)}return B_.has(e)?we.Block:we.Inline}var V_=s=>{s.style.wordBreak="keep-all",s.style.overflowWrap="anywhere"},bo=class s{constructor(e){this.chunks=[],this.hasBreakOpportunityAfter=!1,this.nodeOrText=e}static isString(e){return typeof e=="string"}get canSplit(){return!s.isString(this.nodeOrText)}get text(){return s.isString(this.nodeOrText)?this.nodeOrText:this.nodeOrText.nodeValue}get length(){var e,t;return(t=(e=this.text)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}split(e){let t=this.chunks;if(yt(t.length===0||t.join("")===this.text),t.length<=1||s.isString(this.nodeOrText))return;let n=this.nodeOrText;if(typeof e=="string"){n.nodeValue=t.join(e);return}let i=n.ownerDocument,r=[];for(let o of t)o&&r.push(i.createTextNode(o)),r.push(null);r.pop(),r=r.map(o=>o||e.cloneNode(!0)),n.replaceWith(...r)}};var qc=class{constructor(e){this.nodes=[],this.element=e}isEmpty(){return this.nodes.length===0}get text(){return this.nodes.map(e=>e.text).join("")}get lastNode(){return this.nodes.length?this.nodes[this.nodes.length-1]:void 0}setHasBreakOpportunityAfter(){let e=this.lastNode;e&&(e.hasBreakOpportunityAfter=!0)}getForcedOpportunities(){let e=[],t=0;for(let n of this.nodes){if(n.canSplit){let i=n.text;if(i)for(let r=0;r<i.length;++r)i.charCodeAt(r)===Vu&&e.push(t+r+1)}t+=n.length,n.hasBreakOpportunityAfter&&e.push(t)}return e}excludeForcedOpportunities(e){let t=this.getForcedOpportunities();if(!t.length)return e;let n=new Set(t);return e.filter(i=>!n.has(i))}};var Eo=class{constructor(e,t){this.separator=Gu,this.parser_=e,t!==void 0&&(t.className!==void 0&&(this.className=t.className),t.separator!==void 0&&(this.separator=t.separator))}static hasChildTextNode(e){for(let t of e.childNodes)if(t.nodeType===k_.TEXT)return!0;return!1}applyToElement(e){for(let t of this.getBlocks(e))yt(!t.isEmpty()),this.applyToParagraph(t)}*getBlocks(e,t){if(yt(e.nodeType===Xc.ELEMENT_NODE),this.className&&e.classList.contains(this.className))return;let n=H_(e);if(n===we.Skip)return;if(n===we.Break){t&&!t.isEmpty()&&(t.setHasBreakOpportunityAfter(),yield t,t.nodes=[]),yt(!e.firstChild);return}if(n===we.BreakOpportunity){t&&t.setHasBreakOpportunityAfter();return}yt(n===we.Block||n===we.Inline||n===we.NoBreak);let i=!t||n===we.Block,r=i?new qc(e):t;for(let o of e.childNodes)switch(o.nodeType){case Xc.ELEMENT_NODE:for(let a of this.getBlocks(o,r))yield a;break;case Xc.TEXT_NODE:if(n===we.NoBreak){let a=o.nodeValue;a&&r.nodes.push(new bo(a));break}r.nodes.push(new bo(o));break}i&&!r.isEmpty()&&(yield r)}applyToParagraph(e){if(yt(e.nodes.length>0),!e.nodes.some(r=>r.canSplit))return;let t=e.text;if(/^\s*$/.test(t))return;let n=this.parser_.parseBoundaries(t);if(n.length<=0)return;yt(n[0]>0),yt(n.every((r,o)=>o===0||r>n[o-1])),yt(n[n.length-1]<t.length);let i=e.excludeForcedOpportunities(n);i.push(t.length+1),this.splitNodes(e.nodes,i),this.applyBlockStyle(e.element)}splitNodes(e,t){var n;yt(t.length>0),yt(t.every((l,h)=>h===0||l>t[h-1]));let i=e.reduce((l,h)=>l+h.length,0);yt(t[t.length-1]>i);let r=0,o=t[0];yt(o>0);let a=0,c=null;for(let l of e){yt(o>=a),yt(l.chunks.length===0);let h=l.text;if(!h)continue;let u=h.length,d=a+u;if(yt(!c||c.canSplit),!l.canSplit){for(c&&o===a&&(c.chunks.length===0&&c.chunks.push((n=c.text)!==null&&n!==void 0?n:""),c.chunks.push(""));o<d;)o=t[++r];c=null,a=d;continue}if(c=l,o>=d){a=d;continue}let p=l.chunks,g=0;for(;o<d;){let _=o-a;yt(_>=g),p.push(h.slice(g,_)),g=_,o=t[++r]}yt(g<u),p.push(h.slice(g)),a=d}yt(a===i),yt(r<t.length),yt(t[r]>=i);for(let l of e)l.split(this.separator)}applyBlockStyle(e){if(this.className){e.classList.add(this.className);return}V_(e)}},To=class extends So{constructor(e,t={separator:Gu}){super(e),this.htmlProcessor=new Eo(this,t)}applyElement(e){console.warn("`applyElement` is deprecated. Please use `applyToElement` instead. `applyElement` will be removed in v0.7.0."),this.applyToElement(e)}applyToElement(e){this.htmlProcessor.applyToElement(e)}translateHTMLString(e){if(e==="")return e;let t=Hu(e);if(Eo.hasChildTextNode(t.body)){let n=t.createElement("span");n.append(...t.body.childNodes),t.body.append(n)}return this.applyToElement(t.body.childNodes[0]),t.body.innerHTML}};var Wu=()=>new To(zu);var Hn=720,G_=Wu(),Xu=document.createElement("canvas").getContext("2d"),W_=["\u3082\u304F\u3082\u304F\u4F1A","\u3082\u304F\u3082\u304F","\u3086\u308B\u3044","\u8FFD\u3044\u98A8","\u304B\u6708","\u76DB\u308A\u4E0A\u304C\u308B","\u5408\u3044\u305D\u3046\u306A","\u304A\u3059\u305D\u5206\u3051",...window.DECK&&window.DECK.keepWords||[]],qu=/[\u3400-\u9fff々〆]/;function X_(s){let e=new Set,t=0;for(let r of G_.parse(s))t+=r.length,e.add(t);for(let r=1;r<s.length;r++)s[r-1]===" "&&s[r]!==" "&&e.add(r);e.delete(s.length);for(let r of[...e])qu.test(s[r-1])&&qu.test(s[r])&&e.delete(r);for(let r of W_){let o=s.indexOf(r);for(;o>=0;){for(let a=o+1;a<o+r.length;a++)e.delete(a);o=s.indexOf(r,o+1)}}for(let r of[...e].sort((o,a)=>o-a))([...e].filter(a=>a>r).sort((a,c)=>a-c)[0]??s.length)-r<=1&&e.delete(r);let n=[],i=0;for(let r of[...e].sort((o,a)=>o-a))n.push(s.slice(i,r)),i=r;return n.push(s.slice(i)),n}function Yc(s,e,t){let n=[],i="",r=!1;for(let a of s){let c=i+a;if(!i||t(c.trim())<=e){i=c;continue}n.push(i.trim()),i=a.trimStart()}i.trim()&&n.push(i.trim());let o=[];for(let a of n){if(t(a)<=e){o.push(a);continue}r=!0;let c="";for(let l of a)c&&t(c+l)>e?(o.push(c),c=l):c+=l;o.push(c)}return{lines:o,broken:r}}function Ri(s,e,t,n,i=!0){Xu.font=`${t} ${e}px ${xt}`;let r=c=>Xu.measureText(c).width,o=X_(s),a=Yc(o,n,r);if(i&&a.lines.length>1&&!a.broken){let c=Math.max(...o.map(h=>r(h.trim()))),l=n;for(let h=0;h<14;h++){let u=(c+l)/2,d=Yc(o,u,r);d.lines.length<=a.lines.length&&!d.broken?l=u:c=u}a=Yc(o,l,r)}return a}var Yu=document.createElement("canvas").getContext("2d");function wo(s,{size:e,min:t,maxLines:n=2,maxWidth:i,weight:r=800,plate:o=null,...a}){let c=e;for(;c>t;c*=.95){let l=o?o.pad??c*.6:c*.15,h=Ri(s,Math.round(c*Hn),r,(i-l*2)*Hn),u=h.lines.length>1&&h.lines.some(d=>[...d.replace(/[、。・）」』\s]/g,"")].length<3);if(h.lines.length<=n&&!h.broken&&!u)break}return q_(s,{size:Math.max(c,t),maxWidth:i,weight:r,plate:o,...a})}function q_(s,{size:e=.2,maxWidth:t=3,weight:n=800,color:i="#eef7f5",align:r="left",lineHeight:o=1.28,plate:a=null,outline:c=null,glow:l=null,balance:h=!0}={}){let u=Math.round(e*Hn),d=a?a.pad??e*.6:e*.15,{lines:p}=Ri(s,u,n,t*Hn-d*2*Hn,h);Yu.font=`${n} ${u}px ${xt}`;let g=Math.max(...p.map(I=>Yu.measureText(I).width)),_=Math.round(d*Hn),m=Math.ceil(g+_*2),f=Math.ceil(p.length*u*o+_*2-u*(o-1)+u*.12),y=Math.min(1,4096/m,4096/f),v=document.createElement("canvas");v.width=Math.ceil(m*y),v.height=Math.ceil(f*y);let x=v.getContext("2d");if(x.scale(y,y),a){let I=(a.radius??e*.5)*Hn,F=3,O=x.createLinearGradient(0,0,m,f);O.addColorStop(0,a.fill[0]),O.addColorStop(1,a.fill[1]),x.beginPath(),x.roundRect(F,F,m-F*2,f-F*2,I),x.fillStyle=O,x.fill(),a.stroke&&(x.lineWidth=F*1.4,x.strokeStyle=a.stroke,x.stroke())}x.font=`${n} ${u}px ${xt}`,x.textBaseline="top",x.textAlign=r;let A=r==="center"?m/2:r==="right"?m-_:_;p.forEach((I,F)=>{let O=_+F*u*o+u*.02;if(c){x.lineWidth=c.width,x.strokeStyle=c.color,x.lineJoin="round",x.strokeText(I,A,O);return}l&&(x.shadowColor=l,x.shadowBlur=u*.35),x.fillStyle=i,x.fillText(I,A,O),x.shadowBlur=0});let R=new fn(v);R.colorSpace=je,R.anisotropy=8;let T=m/Hn,C=f/Hn,b=new Et(T,C);b.translate(T/2,-C/2,0);let S=new He(b,new Ze({map:R,transparent:!0,depthWrite:!1,side:Rt,toneMapped:!1}));return(window.__textLog=window.__textLog||[]).push(p.join(" / ")+"  ["+e.toFixed(3)+"]"),{mesh:S,width:T,height:C,lines:p}}var ot={teal:"#7fe3c4",warm:"#ffc46b",coral:"#ff7a59",ink:"#eef7f5",bg:"#05090f"},Qs=s=>Math.max(0,Math.min(1,s)),ix=(s,e=1.25)=>1+(e+1)*Math.pow(s-1,3)+e*Math.pow(s-1,2),sx=s=>s*s*s,nd=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,vt={z:2.6,half:1.25,top:2.9,bottom:1.8},wl=class{constructor(e,{delay:t=0,spin:n=.5,pushable:i=!1,center:r=null,halo:o=null,enterLift:a=.2}={}){this.obj=e,this.home=e.position.clone(),this.homeRotY=e.rotation.y,this.homeScale=e.scale.x,this.mats=[],e.traverse(c=>{if(c.material)for(let l of[].concat(c.material))l.transparent=!0,l.userData.base==null&&(l.userData.base=l.opacity),this.mats.push(l)}),this.delay=t,this.spin=n,this.pushable=i,this.enterLift=a,this.center=r||new P,this.halo=o,this.push=new P,this.glow=0,this.state="hidden",this.t0=0,this.dir=1,this.phase=Math.random()*6.28,e.visible=!1}alpha(e){for(let t of this.mats)t!==(this.halo&&this.halo.material)&&(t.opacity=t.userData.base*e)}},id=s=>(s=Math.min(1,Math.max(0,s)),s*s*(3-2*s)),Tl={chip:{fill:["rgba(22,58,68,.94)","rgba(10,24,32,.84)"],stroke:"rgba(127,227,196,.55)",pad:.05,radius:.04},big:{fill:["rgba(60,44,18,.95)","rgba(24,16,8,.88)"],stroke:"rgba(255,196,107,.8)",pad:.07,radius:.05},title:{fill:["rgba(6,14,20,.66)","rgba(6,14,20,.52)"],stroke:null,pad:.06,radius:.06}},Ro=class{constructor({wipes:e=!0,background:t=!0,lite:n=!1,face:i="audience",Sets:r=null,quality:o="high"}={}){this.scene=new Kr,t&&(this.scene.fog=new Zr(ot.bg,.045)),this.root=new ht,this.scene.add(this.root),this.k=0,this.lite=n,this.pushers=[],this.pointers=[],this.wipesOn=e,this.flips=[],this.buildBackdrop(),this.sets=r&&!n?new r(this.root,{quality:o}):null,this.sets&&(this.bgCol=new de(ot.bg),this.tmpCol=new de,this.farFloor=new He(new Et(240,240),new Ze({color:ot.bg,fog:!1,toneMapped:!1})),this.farFloor.rotation.x=-Math.PI/2,this.farFloor.position.y=.002,this.root.add(this.farFloor)),this.loop=new Mo({labelHeight:.17}),this.loop.group.scale.setScalar(.001),this.root.add(this.loop.group),this.loop.group.traverse(a=>{a.isMesh&&a.material&&a.material.map&&(a.userData.read=!0)}),this.loopTarget={pos:new P,scale:.001},this.clusters=vn.map((a,c)=>this.buildCluster(a,c)),e&&this.buildWipes(),this.buildCover(),this.person=null,this.last=0,this.root.traverse(a=>{a.isMesh&&a.userData.read&&this.flips.push(a)}),this.face="audience",this.setFacing(i),this.go(0,{instant:!0})}setFacing(e){if(e===this.face)return;this.face=e;let t=e==="presenter";for(let n of this.flips){if(n.userData.cx==null){n.geometry.computeBoundingBox();let i=n.geometry.boundingBox;n.userData.cx=(i.min.x+i.max.x)/2,n.userData.baseX=n.position.x,n.userData.baseRY=n.rotation.y}n.rotation.y=n.userData.baseRY+(t?Math.PI:0),n.position.x=n.userData.baseX+(t?2*n.userData.cx*Math.cos(n.userData.baseRY):0)}}buildBackdrop(){let e=this.lite?1400:3200,t=new Float32Array(e*3),n=new Float32Array(e*3),i=[new de(ot.teal),new de("#9fb8ff"),new de("#ffffff"),new de(ot.warm)];for(let c=0;c<e;c++){this.lite?t.set([(Math.random()-.5)*30,2.4+Math.random()*8,-14+Math.random()*30],c*3):t.set([(Math.random()-.5)*26,-1+Math.random()*9,-16+Math.random()*21],c*3);let l=i[c%4];n.set([l.r,l.g,l.b],c*3)}let r=new _t;r.setAttribute("position",new gt(t,3)),r.setAttribute("color",new gt(n,3)),this.dust=new wi(r,new Ti({size:.028,vertexColors:!0,transparent:!0,opacity:this.lite?.4:.6,depthWrite:!1,blending:xn})),this.scene.add(this.dust);let o=new po(40,80,"#1e3b47","#11232c");o.material.transparent=!0,o.material.opacity=.55,o.material.depthWrite=!1,this.grid=o;let a=new He(new io(1.1,64),new Ze({color:ot.teal,transparent:!0,opacity:.07,blending:xn,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.005,this.spot=a,this.floorOn=!1}showFloor(e){if(e!==this.floorOn){this.floorOn=e;for(let t of[this.grid,this.spot])e?this.root.add(t):this.root.remove(t)}}buildCluster(e,t){let n=[],i=e.kind||"page",r=(T,C)=>{this.root.add(T);let b=new wl(T,C);return n.push(b),b};if(i==="cover")return{s:e,items:n,kind:i};let o=Hc(e).length>0&&i!=="loop",a=(e.photos||[]).map(T=>typeof T=="string"?{src:T}:T);if(i==="shots")return this.buildShots(e,t,n,r,a);let c=vt.half*2,l=vt.top,h=!e.hideTitle&&e.title,u=a.length?1:o?.55:0,d=c-u,p=-vt.half;if(h){let T=wo(e.title,{size:i==="loop"?.2:.17,min:.1,maxWidth:i==="loop"?c:d,weight:900,glow:"rgba(127,227,196,.45)",plate:Tl.title});T.mesh.userData.read=!0;let C=new ht;C.add(T.mesh);let b=i==="loop"?-T.width/2:p+(d-T.width)/2;C.position.set(b,l,vt.z),r(C,{delay:.1,spin:.35,pushable:!0,center:new P(T.width/2,-T.height/2,0),halo:sd(T.width,T.height,C)}),l-=T.height+.05}let g=e.screen.length>3,_=e.big||[],m=e.screen.map((T,C)=>_.includes(C)?wo(T,{size:.13,min:.08,maxWidth:d,weight:900,color:ot.warm,plate:Tl.big}):wo(T,{size:g?.075:.09,min:.055,maxWidth:d,weight:700,plate:Tl.chip})),f=g?.025:.04,y=m.reduce((T,C)=>T+C.height+f,0)-f,v=Math.min(1,(l-vt.bottom)/Math.max(.01,y)),x=Math.max(0,...m.map(T=>T.width))*v,A=p+(d-x)/2;m.forEach((T,C)=>{T.mesh.userData.read=!0;let b=new ht;b.add(T.mesh),b.scale.setScalar(v),b.position.set(A,l,vt.z+.02+C*.01),r(b,{delay:.22+C*.09,spin:.5,pushable:!0,center:new P(T.width/2,-T.height/2,0),halo:sd(T.width,T.height,b)}),l-=(T.height+f)*v});let R=new Ai;a.forEach((T,C)=>{let b=new ht,S=new Ze({color:"#ffffff",transparent:!0,opacity:1,toneMapped:!1,side:Rt}),I=new He(new Et(1,1),S);I.userData.read=!0,R.load(T.src,F=>{F.colorSpace=je,S.map=F,S.needsUpdate=!0;let O=F.image.width/F.image.height;I.scale.set(O>=1?1:O,O>=1?1/O:1,1)}),b.add(I),b.scale.setScalar(T.width||.9),b.position.set(...T.pos||[vt.half-.45-C*.12,2.35-C*.2,vt.z-.05-C*.05]),r(b,{delay:.3+C*.1,spin:.8,pushable:!0})});for(let[T,C]of(e.models||[]).entries()){let b=new ht;if(b.position.set(...C.pos||[vt.half+.2,2.2,vt.z-.2]),b.scale.setScalar(C.scale||.5),b.rotation.y=C.rotY||0,b.userData.spin=C.spin??.2,Promise.resolve().then(()=>(td(),ed)).then(({GLTFLoader:S})=>new S().load(C.src,I=>{b.add(I.scene);let F=n.find(O=>O.obj===b);F&&(F.mats=[],b.traverse(O=>{if(O.material)for(let V of[].concat(O.material))V.transparent=!0,V.userData.base=V.opacity,F.mats.push(V)}))})),!this.lit){this.scene.add(new co("#dff","#203038",1.4));let S=new ds("#fff",1.6);S.position.set(2,4,3),this.scene.add(S),this.lit=!0}r(b,{delay:.35+T*.1,spin:1.2,pushable:!0})}return{s:e,items:n,kind:i,hasLoop:o}}buildWipes(){this.wipes=[[.32,ot.teal,3.6],[.6,ot.warm,3.3],[.18,ot.coral,3.9]].map(([e,t,n],i)=>{let r=new He(new Et(e,7),new Ze({color:t,transparent:!0,opacity:.92,depthWrite:!1,toneMapped:!1}));return r.rotation.z=.32,r.position.set(0,1.8,n),r.visible=!1,r.userData.i=i,this.root.add(r),r}),this.wipeT0=-1e9}setWipeColors(e){!this.wipes||!e||[e.a,e.b,e.c].forEach((t,n)=>t&&this.wipes[n].material.color.set(t))}buildShots(e,t,n,i,r){let o=Math.max(r.length,e.photoSlots||0),a=1,c=.16,l=new Ai,h=[];for(let d=0;d<o;d++){let p=new ht,g=r[d],_=new Ze({color:"#ffffff",transparent:!0,opacity:g?1:.07,toneMapped:!1,depthWrite:!1,side:Rt}),m=new He(new Et(1,1),_);m.userData.read=!0;let f=new Ei(new ro(new Et(1,1)),new ii({color:ot.teal,transparent:!0,opacity:g?.35:.6}));p.add(m,f);let y={g:p,w:a*.95},v=x=>{y.w=a*x,m.scale.set(y.w,a,1),f.scale.set(y.w,a,1),u()};v(.95),g&&l.load(g.src,x=>{x.colorSpace=je,_.map=x,_.needsUpdate=!0,v(x.image.width/x.image.height)}),h.push(y),i(p,{delay:.15+d*.14,spin:.7,pushable:!0})}function u(){let d=h.reduce((_,m)=>_+m.w,0)+c*(h.length-1),p=Math.min(1,(vt.half*2+.3)/d),g=-d*p/2;h.forEach((_,m)=>{_.g.scale.setScalar(p),_.g.position.set(g+_.w*p/2,vt.bottom+.02+a*p/2,vt.z-Math.abs(m-(h.length-1)/2)*.12),_.g.rotation.y=(m-(h.length-1)/2)*.12;let f=n.find(y=>y.obj===_.g);f&&(f.home.copy(_.g.position),f.homeRotY=_.g.rotation.y,f.homeScale=p),g+=(_.w+c)*p})}return u(),{s:e,items:n,kind:"shots",hasLoop:!1}}buildCover(){let e=document.createElement("canvas"),t=new fn(e);t.colorSpace=je;let n=new He(new Et(1,1),new Ze({map:t,toneMapped:!1,transparent:!0}));n.renderOrder=10;let i=new ht;i.add(n);let r=new Qt({uniforms:{uT:{value:0},uSize:{value:4},uW:{value:1}},vertexShader:`
        attribute vec3 aColor; attribute vec4 aRand; attribute float aInk;
        uniform float uT, uSize, uW;
        varying vec3 vColor; varying float vA;
        void main() {
          float d = clamp(uT * 1.65 - aRand.x * 0.35 - (position.x / uW + 0.5) * 0.3, 0.0, 1.0);
          float e = d * d;
          vec3 p = position;
          p += vec3((aRand.y - 0.5) * 2.4, (aRand.z - 0.35) * 1.8, -0.4 - aRand.w * 4.0) * e * 2.2;
          p.x += sin(d * 5.0 + aRand.w * 30.0) * 0.18 * d;
          p.y += cos(d * 4.0 + aRand.y * 30.0) * 0.18 * d;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          // \u5730\u306E\u767D\u306F\u65E9\u3081\u306B\u9752\u7DD1\u3078\u6EB6\u3051\u3066\u6D88\u3048\u3001\u6587\u5B57\u3084\u8272\u306E\u7C92\u306F\u9577\u304F\u6B8B\u3063\u3066\u5149\u308B
          float bg = 1.0 - aInk;
          gl_PointSize = uSize * (1.0 + bg * 0.5 + d * (0.8 + aInk * 1.2) - bg * smoothstep(0.05, 0.5, d) * 0.7) / -mv.z;
          vColor = mix(aColor, vec3(0.5, 0.89, 0.77), bg * smoothstep(0.0, 0.35, d) * 0.85);
          vA = mix(1.0 - smoothstep(0.55, 1.0, d), 1.0 - smoothstep(0.08, 0.55, d), bg);
        }`,fragmentShader:`
        varying vec3 vColor; varying float vA;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          if (r > 0.5) discard;
          gl_FragColor = vec4(vColor, vA * (1.0 - smoothstep(0.32, 0.5, r)));
        }`,transparent:!0,depthWrite:!1,depthTest:!1}),o=new wi(new _t,r);o.renderOrder=11,o.frustumCulled=!1,o.visible=!1,i.add(o),this.cover={group:i,plane:n,points:o,canvas:e,tex:t,state:"slide",t:0,t0:0,w:0,h:0}}layoutCover(e,t){let n=this.cover;if(Math.abs(n.w-e)<1e-4&&Math.abs(n.h-t)<1e-4)return;n.w=e,n.h=t;let i=1920,r=Math.round(i*t/e);n.canvas.width=i,n.canvas.height=r,rx(n.canvas.getContext("2d"),i,r,vn[0]),n.tex.needsUpdate=!0,n.plane.scale.set(e,t,1);let o=6,a=n.canvas.getContext("2d").getImageData(0,0,i,r).data,c=[],l=[],h=[],u=[],d=[a[0],a[1],a[2]];for(let g=0;g<r;g+=o)for(let _=0;_<i;_+=o){let m=(g*i+_)*4,f=Math.abs(a[m]-d[0])+Math.abs(a[m+1]-d[1])+Math.abs(a[m+2]-d[2]),y=Math.min(1,f/90);y<.5&&Math.random()>.33||(u.push(y),c.push((_/i-.5)*e,(.5-g/r)*t,0),l.push(a[m]/255,a[m+1]/255,a[m+2]/255),h.push(Math.random(),Math.random(),Math.random(),Math.random()))}let p=new _t;p.setAttribute("position",new Je(c,3)),p.setAttribute("aColor",new Je(l,3)),p.setAttribute("aRand",new Je(h,4)),p.setAttribute("aInk",new Je(u,1)),n.points.geometry.dispose(),n.points.geometry=p,n.points.material.uniforms.uW.value=e,n.cols=i/o}setViewport(e,t){let n=this.cover;if(!n.cols)return;let i=e/(2*Math.tan(xo.degToRad(t)/2));n.points.material.uniforms.uSize.value=n.w/n.cols*i*1.6}get coverShown(){return this.cover.state!=="gone"}go(e,{instant:t=!1}={}){let n=this.k,i=performance.now();if(e===n&&!t)return;this.k=e;let r=e>=n?1:-1,o=this.cover,a=.22;t?(o.state=e===0?"slide":"gone",o.t=e===0?0:1):n===0&&e>0?(o.state="reveal",o.t0=i,a=1):e===0?(o.state="reform",o.t0=i):this.wipes&&!this.sets&&(this.wipeT0=i,this.wipeDir=r),this.sets&&(this.sets.go(e,{instant:t}),this.palette=this.sets.palette(e),this.setWipeColors(this.palette),!t&&e>0&&n>0&&(a=.45)),this.clusters.forEach((h,u)=>h.items.forEach(d=>{if(t){d.state=u===e?"idle":"hidden",d.obj.visible=u===e,d.t0=i;return}u===e?(d.state="in",d.t0=i+(a+d.delay)*1e3,d.dir=r):d.state!=="hidden"&&(d.state="out",d.t0=i+d.delay*300,d.dir=r)}));let c=vn[e],l=this.clusters[e];this.loop.setActive(Hc(c)),l.kind==="loop"?this.loopTarget={pos:new P(0,2.2,vt.z),scale:.33}:l.hasLoop?this.loopTarget={pos:new P(vt.half-.22,2.62,vt.z),scale:.17}:this.loopTarget={pos:new P(0,2.3,vt.z-2),scale:.001},t&&(this.loop.group.position.copy(this.loopTarget.pos),this.loop.group.scale.setScalar(Math.max(.001,this.loopTarget.scale)))}setPerson(e){this.person&&this.root.remove(this.person),this.person=e,e&&this.root.add(e)}cameraOffset(e){return this.sets&&this.sets.cameraOffset?this.sets.cameraOffset(e):null}tick(e){let t=Math.min(.1,(e-(this.last||e))/1e3);this.last=e;let n=e/1e3,i=1-Math.exp(-t*10),r=this.cover;if(r.state==="reveal"?(r.t=Qs((e-r.t0)/2600),r.t>=1&&(r.state="gone")):r.state==="reform"&&(r.t=1-Qs((e-r.t0)/1500),r.t<=0&&(r.state="slide")),r.plane.visible=r.state==="slide"||r.state==="reveal"&&r.t<.45||r.state==="reform"&&r.t<.4,r.plane.material.opacity=r.state==="slide"?1:r.state==="reveal"?1-id(r.t/.45):1-id(r.t/.4),r.points.visible=r.state==="reveal"||r.state==="reform",r.points.material.uniforms.uT.value=r.state==="reform"?nd(r.t):r.t,r.group.visible=r.state!=="gone",this.sets){this.sets.tick(e);let p=this.sets.colors(),g=1-Math.exp(-t*6);this.bgCol.lerp(this.tmpCol.set(p?p.wall:ot.bg),g),this.farFloor.material.color.lerp(this.tmpCol.set(p?p.floor:ot.bg),g),this.scene.background=this.bgCol,this.scene.fog&&this.scene.fog.color.copy(this.bgCol)}let o=new P,a=new P,c=new P,l=new P,h=this.root.getWorldQuaternion(new Ct).invert();for(let p of this.clusters)for(let g of p.items){if(g.state==="hidden")continue;let _=g.obj,m=(e-g.t0)/1e3,f=0,y=0,v=0,x=1,A=1,R=0;if(g.state==="in"){if(m<0){_.visible=!1;continue}_.visible=!0;let C=ix(Qs(m/.95));f=g.dir*3.2*(1-C),y=g.enterLift*(1-C),v=g.dir*g.spin*(1-C),R=-.8*(1-C),x=Qs(m/.3),A=.7+.3*Math.min(1,C),m>=.95&&(g.state="idle")}else if(g.state==="out"){let C=sx(Qs(m/.55));if(f=-g.dir*3.6*C,y=.3*C,v=-g.dir*g.spin*C,R=-.5*C,x=1-C,m>=.55){g.state="hidden",_.visible=!1;continue}}else y=Math.sin(n*.7+g.phase)*.008;let T=0;if(o.set(0,0,0),g.pushable&&g.state==="idle"&&(this.pushers.length||this.pointers.length)){c.copy(g.center).multiplyScalar(_.scale.x).add(g.home),this.root.localToWorld(a.copy(c));for(let b of this.pushers){let S=a.clone().sub(b.p),I=b.r||.3,F=S.length();if(F<I*1.6&&(T=1),F<I){let O=Math.pow(1-F/I,2)*.3;S.normalize().multiplyScalar(O),o.add(S)}}this.pushers.length&&o.applyQuaternion(h);let C=.5*Math.hypot(g.center.x*2,g.center.y*2)*_.scale.x;for(let b of this.pointers){l.copy(c).sub(b.o);let S=l.dot(b.d);if(S<=.2)continue;l.addScaledVector(b.d,-S).length()<Math.max(.12,C*.8)&&(T=1,o.addScaledVector(b.d,-.06))}}g.push.lerp(o,i),g.glow+=(T-g.glow)*i,_.position.set(g.home.x+f+g.push.x,g.home.y+y+g.push.y,g.home.z+R+g.push.z),_.rotation.y=g.homeRotY+v+(_.userData.spin?n*_.userData.spin:0),_.scale.setScalar(g.homeScale*A*(1+g.glow*.07)),g.alpha(x),g.halo&&(g.halo.material.opacity=g.glow*.5*x)}if(this.wipes){let p=(e-this.wipeT0)/1e3;this.wipes.forEach(g=>{let _=(p-g.userData.i*.07)/.85;g.visible=_>0&&_<1,g.visible&&(g.position.x=this.wipeDir*(5.5-nd(_)*12))})}let u=this.loop.group;u.position.lerp(this.loopTarget.pos,1-Math.exp(-t*5));let d=u.scale.x+(this.loopTarget.scale-u.scale.x)*(1-Math.exp(-t*5));u.scale.setScalar(Math.max(.001,d)),this.loop.spin.rotation.z=-n*.08,this.loop.fade=Math.min(1,d/.1),this.loop.tick(e),this.dust.rotation.y=n*.006}};function sd(s,e,t){let n=new He(new Et(s+.08,e+.08),new Ze({color:ot.warm,transparent:!0,opacity:0,blending:xn,depthWrite:!1}));return n.position.set(s/2,-e/2,-.01),n.material.userData.base=0,t.add(n),n}function rx(s,e,t,n){let i='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP",Meiryo,sans-serif';s.fillStyle="#f6f5f1",s.fillRect(0,0,e,t);let r=Math.min(e/1920,t/1080),o=e*.08;s.fillStyle="#1f6f62",s.fillRect(o,t*.2,90*r,10*r),s.fillStyle="#6b6b66",s.font=`700 ${40*r}px ${i}`,s.textBaseline="top",s.fillText(Ot.event,o,t*.2+34*r);let[a,...c]=n.title.split(/\s+/);s.fillStyle="#14181c",s.font=`900 ${150*r}px ${i}`,s.fillText(a,o-6*r,t*.2+110*r),s.font=`700 ${58*r}px ${i}`,s.fillStyle="#2c3338",s.fillText(c.join(" "),o,t*.2+300*r),s.font=`700 ${46*r}px ${i}`,s.fillStyle="#14181c",s.fillText(n.screen.join("\u3000\uFF0F\u3000"),o,t*.78),s.fillStyle="#d9d6cc",s.fillRect(o,t*.78-30*r,e-o*2,2*r)}var rd=new P(0,1.6,0),od=1600,Al="xrk26-desk5-",gs={notes:{w:.64,h:.48,pos:[.6,1.3,1.3]},mirror:{w:.6,h:.38,pos:[-.6,1.3,1.3]},feed:{w:.48,h:.5,pos:[-1.1,1.95,1.75]}};function Co(s,e,t,n,i,r){s.beginPath(),s.roundRect(e,t,n,i,r)}var er=class{constructor(e,{w:t,h:n,pos:i},r){this.name=e,this.w=t,this.h=n,this.draw=r,this.mode="idle",this.canvas=document.createElement("canvas"),this.canvas.width=Math.round(t*od),this.canvas.height=Math.round(n*od),this.tex=new fn(this.canvas),this.tex.colorSpace=je,this.tex.anisotropy=8,this.mesh=new He(new Et(t,n),new Ze({map:this.tex,transparent:!0,depthWrite:!1,toneMapped:!1})),this.mesh.userData.panel=this,this.mesh.renderOrder=20;let o=zn(Al+e),a=i;try{o&&(a=JSON.parse(o))}catch{}this.mesh.position.fromArray(a),this.face()}face(){let e=this.mesh.parent;e&&e.updateMatrixWorld(!0),this.mesh.lookAt(e?e.localToWorld(rd.clone()):rd)}save(){zn(Al+this.name,JSON.stringify(this.mesh.position.toArray().map(e=>+e.toFixed(3))))}reset(e){this.mesh.position.fromArray(e),this.face(),zn(Al+this.name,"")}setMode(e){e!==this.mode&&(this.mode=e,this.redraw())}redraw(){let e=this.canvas.getContext("2d"),t=this.canvas.width,n=this.canvas.height;e.clearRect(0,0,t,n),Co(e,6,6,t-12,n-12,28),e.fillStyle="rgba(6,14,20,.58)",e.fill(),e.lineWidth=this.mode==="idle"?3:10,e.strokeStyle=this.mode==="hover"?ot.warm:this.mode==="move"?"rgba(127,227,196,.95)":"rgba(127,227,196,.32)",e.stroke(),this.draw(e,t,n),this.tex.needsUpdate=!0}};function ox(s,e,t,n,i,r,o,a,c=600){for(let l=o;l>=18;l=Math.floor(l*.92)){let h=e.map(g=>Ri(g,l,c,i,!1).lines),u=l*1.5,d=l*.6;if(h.reduce((g,_)=>g+_.length*u,0)+d*(h.length-1)<=r||l<=20){s.font=`${c} ${l}px ${xt}`,s.fillStyle=a,s.textBaseline="top";let g=n;for(let _ of h){for(let m of _){if(g+u>n+r+u*.2)return;s.fillText(m,t,g),g+=u}g+=d}return}}}function ad(s,e,t){let n=document.createElement("canvas");n.width=Math.round(s*2400),n.height=Math.round(e*2400);let i=new fn(n);i.colorSpace=je;let r=new He(new Et(s,e),new Ze({map:i,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));return r.renderOrder=40,{mesh:r,redraw:(...o)=>{let a=n.getContext("2d");a.clearRect(0,0,n.width,n.height),t(a,n.width,n.height,...o),i.needsUpdate=!0}}}var Io=class{constructor(){this.world=new Ro({wipes:!1,background:!1,lite:!0,face:"presenter"}),this.scene=this.world.scene,this.root=this.world.root,this.camera=new St(70,1,.03,60),this.k=0,this.timer={elapsed:0,startedAt:null},this.posts=[],this.moveMode=!1;let e=this.world.cover.group;this.world.layoutCover(1.6,.9),this.root.add(e),e.position.set(0,(vt.top+vt.bottom)/2,vt.z),e.rotation.set(0,Math.PI,0),this.desk=new ht,this.root.add(this.desk),this.rt=new dn(960,540,{colorSpace:je}),this.screenCam=new St(38,16/9,.05,80),this.frameTex=new bt,this.frameTex.colorSpace=je,this.frameAt=0,this.frameImg=new Image,this.frameImg.onload=()=>{this.frameTex.image=this.frameImg,this.frameTex.needsUpdate=!0,this.mirrorLive&&(this.scr.material.map=this.frameTex)},this.panels={notes:new er("notes",gs.notes,(i,r,o)=>this.drawNotes(i,r,o)),mirror:new er("mirror",gs.mirror,(i,r,o)=>{i.font=`700 24px ${xt}`,i.fillStyle="#9db3b8",i.textBaseline="top",i.fillText(this.mirrorLive?"\u30B9\u30AF\u30EA\u30FC\u30F3\uFF08Mac\u306E\u6620\u50CF\uFF09":"\u30B9\u30AF\u30EA\u30FC\u30F3\uFF08Mac\u306E\u6620\u50CF\u304C\u5C4A\u3044\u3066\u3044\u306A\u3044\u306E\u3067\u3001\u3053\u3053\u3067\u63CF\u3044\u3066\u3044\u307E\u3059\uFF09",28,o-42)}),feed:new er("feed",gs.feed,(i,r,o)=>this.drawFeed(i,r,o))};let t=gs.mirror.w-.03,n=t*9/16;this.scr=new He(new Et(t,n),new Ze({map:this.rt.texture,toneMapped:!1,transparent:!0,opacity:.95,depthWrite:!1})),this.scr.position.set(0,gs.mirror.h/2-n/2-.015,.002),this.scr.renderOrder=21,this.panels.mirror.mesh.add(this.scr),this.mirrorLive=!1;for(let i of Object.values(this.panels))this.desk.add(i.mesh),i.face(),i.redraw();this.lastTimer="",this.lastMirror=0,this.handGroup=new ht,this.root.add(this.handGroup),this.buildWrist(),this.buildSwipe()}buildWrist(){this.wrist=new ht,this.wrist.visible=!1,this.scene.add(this.wrist);let e=.04,t=(n,i,r)=>{let o=ad(e,e,(a,c,l,h,u)=>{Co(a,4,4,c-8,l-8,c*.22),a.fillStyle=u?"rgba(255,196,107,.95)":h?"rgba(127,227,196,.92)":"rgba(6,14,20,.86)",a.fill(),a.lineWidth=6,a.strokeStyle=h||u?"#fff":"rgba(127,227,196,.8)",a.stroke(),a.fillStyle=h||u?"#06121a":"#eef7f5",a.textAlign="center",a.textBaseline="middle",a.font=`900 ${c*.25}px ${xt}`,a.fillText(r(),c/2,l/2)});return o.mesh.position.set(i,0,0),this.wrist.add(o.mesh),{name:n,...o,near:!1,flashUntil:0,key:null}};this.buttons=[t("move",-.048,()=>this.moveMode?"\u79FB\u52D5\u4E2D":"\u79FB\u52D5"),t("timer",0,()=>this.timer.startedAt?"\u6B62\u3081\u308B":"\u8A08\u308B"),t("reset",.048,()=>"\u623B\u3059")],this.tickWrist(0)}showWrist(e,t,n){if(this.wrist.visible=e,!e){for(let i of this.buttons)i.near=!1;return}this.wrist.position.copy(t),this.wrist.quaternion.copy(n),this.buttons[2].mesh.visible=this.moveMode,this.wrist.updateMatrixWorld(!0)}pressAt(e,t){if(!this.wrist.visible||!e)return null;let n=null,i=new P;for(let r of this.buttons){if(!r.mesh.visible)continue;let o=r.mesh.getWorldPosition(i).distanceTo(e);o<.022&&!r.near&&t>r.flashUntil+350&&(n=r.name,r.flashUntil=t+350),o<.022?r.near=!0:o>.04&&(r.near=!1)}return n}tickWrist(e){for(let t of this.buttons){let n=t.name==="move"?this.moveMode:t.name==="timer"?!!this.timer.startedAt:!1,i=e<t.flashUntil,r=n+"|"+i;r!==t.key&&(t.key=r,t.redraw(n,i))}}buildSwipe(){this.swipe=ad(.16,.045,(e,t,n,i,r,o)=>{Co(e,4,4,t-8,n-8,n/2),e.fillStyle="rgba(6,14,20,.75)",e.fill();let a=t/2,c=(t/2-14)*i;e.fillStyle=o?ot.teal:"rgba(127,227,196,.45)",r>=0?e.fillRect(a,n*.38,c,n*.24):e.fillRect(a-c,n*.38,c,n*.24),e.fillStyle="#eef7f5",e.font=`800 ${n*.42}px ${xt}`,e.textBaseline="middle",e.textAlign="center",o&&e.fillText(r>0?"\u96E2\u3059\u3068\u6B21\u3078":"\u96E2\u3059\u3068\u524D\u3078",r>0?t*.27:t*.73,n/2)}),this.swipe.mesh.visible=!1,this.scene.add(this.swipe.mesh)}showSwipe(e,t,n,i,r){let o=this.swipe;if(!e){o.mesh.visible=!1;return}o.mesh.visible=!0,o.mesh.position.copy(e),o.mesh.quaternion.copy(t);let a=Math.round(n*20)+"|"+i+"|"+r;a!==o.key&&(o.key=a,o.redraw(n,i,r))}setMoveMode(e){this.moveMode=e;for(let t of Object.values(this.panels))t.setMode(e?"move":"idle")}setHover(e){for(let t of Object.values(this.panels))t.setMode(this.moveMode?t===e?"hover":"move":"idle")}faceDesk(){for(let e of Object.values(this.panels))e.face()}resetDesk(){for(let[e,t]of Object.entries(this.panels))t.reset(gs[e].pos)}get pickables(){return Object.values(this.panels).map(e=>e.mesh)}setScene(e,t=!1){this.k=e,this.world.go(e,{instant:t}),this.panels.notes.redraw()}setTimer(e){this.timer=e}addPosts(e){this.posts.push(...e),this.posts=this.posts.slice(-6),this.panels.feed.redraw()}setMirrorFrame(e){typeof e=="string"&&e.startsWith("data:image/")&&(this.frameAt=performance.now(),this.frameImg.src=e)}drawNotes(e,t,n){let i=vn[this.k],r=vn[this.k+1],o=Gc(this.timer);e.textBaseline="top",e.font=`800 32px ${xt}`,e.fillStyle=ot.warm,e.fillText(`${this.k+1} / ${Ks}`,36,34),e.textAlign="right",e.font=`900 62px ${xt}`,e.fillStyle=o.over?ot.coral:o.ratio>.85?ot.warm:"#eef7f5",e.fillText(o.left,t-36,22);let a=e.measureText(o.left).width;e.font=`600 24px ${xt}`,e.fillStyle="#9db3b8",e.fillText(o.running?"\u6B8B\u308A":"\u6B8B\u308A\uFF08\u6B62\u307E\u3063\u3066\u3044\u307E\u3059\uFF09",t-36-a-14,48),e.textAlign="left",e.fillStyle="rgba(127,227,196,.25)",e.fillRect(36,98,t-72,4),e.fillStyle=o.over?ot.coral:ot.teal,e.fillRect(36,98,(t-72)*o.ratio,4),e.font=`900 42px ${xt}`,e.fillStyle=ot.teal,e.fillText(Ri(i.title,42,900,t-72,!1).lines[0]||"",36,120);let c=r?62:0;ox(e,i.talk||[],36,184,t-72,n-184-c-28,38,"#eef7f5"),r&&(e.fillStyle="rgba(127,227,196,.18)",e.fillRect(36,n-c-16,t-72,2),e.font=`700 26px ${xt}`,e.fillStyle="#9db3b8",e.fillText(`\u6B21\u3000${Ri(r.title,26,700,t-130,!1).lines[0]||""}`,36,n-c+2))}drawFeed(e,t,n){e.textBaseline="top";let i=Fu(),r=30;for(e.font=`800 ${r}px ${xt}`;e.measureText(i).width>t-60&&r>18;)r-=2,e.font=`800 ${r}px ${xt}`;e.fillStyle=ot.teal,e.fillText(i,30,28),this.posts.length||(e.font=`600 24px ${xt}`,e.fillStyle="#9db3b8",e.fillText("\u307E\u3060\u6295\u7A3F\u306A\u3057",30,80));let o=80;for(let a of[...this.posts].reverse()){let c=Ri((a.text||"").replace(/\s+/g," ").trim(),26,600,t-70,!1).lines.slice(0,3),l=44+c.length*36;if(o+l>n-20)break;e.fillStyle="rgba(127,227,196,.08)",Co(e,20,o,t-40,l,16),e.fill(),e.font=`700 24px ${xt}`,e.fillStyle=ot.teal,e.fillText(a.name||"",36,o+10),e.font=`600 26px ${xt}`,e.fillStyle="#eef7f5",c.forEach((h,u)=>e.fillText(h,36,o+44+u*36)),o+=l+12}}applyPose(e){if(!e)return;if(e.p&&this.camera.position.fromArray(e.p),e.q&&this.camera.quaternion.fromArray(e.q),!this.handDots){let n=new si(.012,10,8),i=new Ze({color:ot.teal});this.handDots=[0,1].map(()=>{let r=new ht;for(let o=0;o<6;o++)r.add(new He(n,i));return this.handGroup.add(r),r})}let t=[];this.handDots.forEach((n,i)=>{let r=(e.hands||[])[i];n.visible=!!(r&&r.length>=18),n.visible&&(n.children.forEach((o,a)=>o.position.set(r[a*3],r[a*3+1],r[a*3+2])),t.push(n.children[2].position.clone()))}),this.setHands(t),this.setPointers(ax(e))}setHands(e){this.world.pushers=e.map(t=>({p:t,r:.28}))}setPointers(e){this.world.pointers=e}renderMirror(e,t){let n=this.frameAt>0&&t-this.frameAt<2500;if(n!==this.mirrorLive&&(this.mirrorLive=n,this.scr.material.map=n&&this.frameTex.image?this.frameTex:this.rt.texture,this.scr.material.needsUpdate=!0,this.panels.mirror.redraw()),n||t-this.lastMirror<80)return;this.lastMirror=t;let i=this.screenCam,r=t/1e3,o=Math.sin(r*.11)*.035;i.position.set(Math.sin(o)*6,1.72,Math.cos(o)*6),i.up.set(0,1,0),i.lookAt(0,1.85,0),i.updateMatrix(),i.matrix.premultiply(this.root.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0);let a=this.scene.background;this.scene.background=new de(ot.bg);let c=this.wrist.visible,l=this.swipe.mesh.visible;this.desk.visible=!1,this.handGroup.visible=!1,this.wrist.visible=!1,this.swipe.mesh.visible=!1,this.world.setFacing("audience"),this.world.cover.group.rotation.y=0;let h=e.getRenderTarget();e.setRenderTarget(this.rt),e.clear(),e.render(this.scene,i),e.setRenderTarget(h),this.world.setFacing("presenter"),this.world.cover.group.rotation.y=Math.PI,this.desk.visible=!0,this.handGroup.visible=!0,this.wrist.visible=c,this.swipe.mesh.visible=l,this.scene.background=a}tick(e){let t=Gc(this.timer).left+(this.timer.startedAt?"r":"");t!==this.lastTimer&&(this.lastTimer=t,this.panels.notes.redraw()),this.tickWrist(e),this.world.tick(e)}};function ax(s){return(s&&s.rays||[]).filter(e=>Array.isArray(e)&&e.length===6&&e.every(Number.isFinite)).map(e=>({o:new P(e[0],e[1],e[2]),d:new P(e[3],e[4],e[5]).normalize()}))}async function cd(){let s=document.permissionsPolicy||document.featurePolicy,e=window.top!==window;if(s&&s.allowsFeature&&!s.allowsFeature("xr-spatial-tracking"))return{mode:null,reason:e?"\u3053\u306E\u30DA\u30FC\u30B8\u306E\u67A0\uFF08claude.ai\uFF09\u304C\u7A7A\u9593\u8868\u793A\u3092\u8A31\u53EF\u3057\u3066\u3044\u307E\u305B\u3093":"\u3053\u306E\u30DA\u30FC\u30B8\u3067\u306F\u7A7A\u9593\u8868\u793A\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093"};if(!navigator.xr)return{mode:null,reason:window.isSecureContext?"\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306FWebXR\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093":"https \u3067\u958B\u304B\u306A\u3044\u3068\u7A7A\u9593\u8868\u793A\u306F\u4F7F\u3048\u307E\u305B\u3093"};let t=!1;for(let n of["immersive-ar","immersive-vr"])try{if(await navigator.xr.isSessionSupported(n))return{mode:n,reason:""}}catch{t=!0}return{mode:null,reason:t&&e?"\u3053\u306E\u30DA\u30FC\u30B8\u306E\u67A0\uFF08claude.ai\uFF09\u304C\u7A7A\u9593\u8868\u793A\u3092\u6B62\u3081\u3066\u3044\u307E\u3059":"\u3053\u306E\u7AEF\u672B\u3067\u306F\u7A7A\u9593\u8868\u793A\u304C\u4F7F\u3048\u307E\u305B\u3093"}}var cx={minDx:.13,ratioY:1.6,ratioZ:1.2,maxMs:1200,minSpeed:.3},Cl=(s,e)=>[s[0]-e[0],s[1]-e[1],s[2]-e[2]],Rl=(s,e)=>s[0]*e[0]+s[1]*e[1]+s[2]*e[2];function Il(s,e,t=cx){if(!s||s.length<2)return{dir:0,dx:0,progress:0};let n=s[0],i=s[s.length-1],r=Cl(i.p,n.p),o=Rl(r,e),a=[-e[2],0,e[0]],c=Math.abs(r[1]),l=Math.abs(Rl(r,a)),h=Math.min(1,Math.abs(o)/t.minDx),u=i.t-n.t,d=0;for(let g=0,_=0;g<s.length;g++){for(;s[g].t-s[_].t>120;)_++;let m=(s[g].t-s[_].t)/1e3;m>.04&&(d=Math.max(d,Math.abs(Rl(Cl(s[g].p,s[_].p),e))/m))}return{dir:Math.abs(o)>=t.minDx&&Math.abs(o)>=t.ratioY*c&&Math.abs(o)>=t.ratioZ*l&&u<=t.maxMs&&d>=t.minSpeed?Math.sign(o):0,dx:o,progress:h,ms:u,speed:d}}function ld(s,e,t){let[n,i,r,o]=s,a=-(2*(n*i-o*r)),c=-(1-2*(n*n+r*r)),l=-(2*(i*r+o*n)),h=Cl(t,e),u=Math.hypot(...h)||1;return(a*h[0]+c*h[1]+l*h[2])/u}var lx=["wrist","thumb-tip","index-finger-tip","middle-finger-tip","ring-finger-tip","pinky-finger-tip"],nn=s=>document.querySelector(s),Ft=()=>new P;async function hx(){let s=await Uu(),e=Zs(Number(zn("xrk26-k"))||0),t=new Io;window.__stage=t;let n=new Yr({antialias:!0,alpha:!0});n.setPixelRatio(Math.min(2,devicePixelRatio)),n.xr.enabled=!0,nn("#view").append(n.domElement),window.__renderer=n;let i={yaw:Math.PI,pitch:.12},r=null;n.domElement.addEventListener("pointerdown",y=>{r={x:y.clientX,y:y.clientY,yaw:i.yaw,pitch:i.pitch}}),addEventListener("pointerup",()=>{r=null}),addEventListener("pointermove",y=>{r&&(i.yaw=r.yaw+(y.clientX-r.x)*.004,i.pitch=Math.max(-1.2,Math.min(.9,r.pitch+(y.clientY-r.y)*.004)))});let o=()=>{if(location.hash.startsWith("#look=")){let[y,v]=location.hash.slice(6).split(",");i.yaw=+y||0,i.pitch=+v||0}};o(),addEventListener("hashchange",o);function a(){n.setSize(innerWidth,innerHeight),t.camera.aspect=innerWidth/innerHeight,t.camera.updateProjectionMatrix()}addEventListener("resize",a),a();function c(y,v,x=!1){e=Zs(y),zn("xrk26-k",String(e)),t.setScene(e,x),nn("#page").textContent=`${e+1} / ${Ks}\u3000${vn[e].title}`,v&&h.go(e)}let l=y=>c(e+y,!0),h=Ou({role:"aura",key:s,onGo:y=>c(y,!1),onMessage(y){y.type==="feed"?t.addPosts(y.posts||[]):y.type==="timer"?t.setTimer(Vc(y.w||y.timer)):y.type==="state"?(t.setTimer(Vc(y.w||y.timer)),c(y.k,!1)):y.type==="frame"&&t.setMirrorFrame(y.d)},onStatus(y){nn("#link").textContent=Ys?"\u540C\u671F\uFF1A\u3053\u306E\u78BA\u8A8D\u7528\u30DA\u30FC\u30B8\u3067\u306F\u4F7F\u3048\u307E\u305B\u3093\uFF08Mac\u3068\u5225\u306E\u30DA\u30FC\u30B8\u306E\u305F\u3081\uFF09":y.aura==="connected"&&y.lan==="ok"?"Mac\uFF1A\u30CD\u30C3\u30C8\u3068\u6709\u7DDA\u3067\u3064\u306A\u304C\u3063\u3066\u3044\u307E\u3059":y.lan==="ok"?"Mac\uFF1A\u6709\u7DDA\u3067\u3064\u306A\u304C\u3063\u3066\u3044\u307E\u3059":y.aura==="connected"?"Mac\uFF1A\u3064\u306A\u304C\u3063\u3066\u3044\u307E\u3059":y.ntfy==="ok"?"Mac\uFF1A\u5F85\u3063\u3066\u3044\u307E\u3059\uFF08\u30DA\u30FC\u30B8\u4F4D\u7F6E\u306F\u5C4A\u304D\u307E\u3059\uFF09":"Mac\uFF1A\u672A\u63A5\u7D9A",nn("#link").dataset.ok=y.aura==="connected"||y.lan==="ok"?"1":""}});h.status.ntfy==="off"&&(nn("#link").textContent=Ys?"\u540C\u671F\uFF1A\u3053\u306E\u78BA\u8A8D\u7528\u30DA\u30FC\u30B8\u3067\u306F\u4F7F\u3048\u307E\u305B\u3093\uFF08Mac\u3068\u5225\u306E\u30DA\u30FC\u30B8\u306E\u305F\u3081\uFF09":s?"Mac\uFF1A\u672A\u63A5\u7D9A":"\u767A\u8868\u8005\u30AD\u30FC\u304C\u5165\u3063\u3066\u3044\u307E\u305B\u3093"),c(e,!1,!0);let u=()=>h.wide({type:"timer-cmd",act:"toggle"});addEventListener("keydown",y=>{let v=Bu(y);v&&(y.preventDefault(),l(v)),y.key==="r"&&t.resetDesk(),y.key==="m"&&t.setMoveMode(!t.moveMode),y.key==="t"&&u()}),nn("#reset")&&nn("#reset").addEventListener("click",()=>t.resetDesk()),nn("#timer-btn")&&nn("#timer-btn").addEventListener("click",u);let{mode:d,reason:p}=await cd(),g=nn("#enter");d?g.textContent=d==="immersive-ar"?"\u7A7A\u9593\u3067\u958B\u304F\uFF08MR\uFF09":"\u7A7A\u9593\u3067\u958B\u304F\uFF08VR\uFF09":(g.disabled=!0,nn("#why").textContent=p),g.addEventListener("click",async()=>{try{await m(d)}catch(y){nn("#why").textContent="\u7A7A\u9593\u306B\u5165\u308C\u307E\u305B\u3093\u3067\u3057\u305F\uFF1A"+(y&&y.message||y)}});let _=new fo;async function m(y){let v=await navigator.xr.requestSession(y,{optionalFeatures:["hand-tracking","local-floor"]}),x=!0;try{n.xr.setReferenceSpaceType("local-floor"),await n.xr.setSession(v)}catch{x=!1,n.xr.setReferenceSpaceType("local"),await n.xr.setSession(v)}y!=="immersive-ar"&&(t.scene.background=new de("#05090f")),document.body.classList.add("in-xr");let A=!0,R=0,T=new Map,C=new Map,b=0,S=!1,I=new Pe,F=new Pe,O=Ft(),V=new Ct,K=Ft(),X=new ft,j=window.__aura={},G=(Ee,H)=>{let $=null;try{$=H&&H.getPose(Ee.targetRaySpace,n.xr.getReferenceSpace())}catch{}if(!$)return null;let ie=Ft().copy($.transform.position),Q=Ft().set(0,0,-1).applyQuaternion(new Ct().copy($.transform.orientation));return{o:ie,dir:Q}},ne=(Ee,H,$)=>{if(!Ee.hand||!H)return null;let ie=Ee.hand.get($);if(!ie)return null;try{return H.getJointPose(ie,n.xr.getReferenceSpace())||null}catch{return null}},ue=(Ee,H)=>{let $=ne(Ee,H,"thumb-tip"),ie=ne(Ee,H,"index-finger-tip");if($&&ie)return Ft().copy($.transform.position).add(ie.transform.position).multiplyScalar(.5);let Q=Ee.gripSpace||Ee.targetRaySpace,_e=null;try{_e=H&&Q&&H.getPose(Q,n.xr.getReferenceSpace())}catch{}return _e?Ft().copy(_e.transform.position):null},Me=()=>{let Ee=Ft().set(1,0,0).applyQuaternion(V);return Ee.y=0,Ee.lengthSq()>1e-6?Ee.normalize():Ft().set(1,0,0)},Fe=Ee=>(X.position.copy(Ee),X.lookAt(O),X.quaternion.clone());v.addEventListener("selectstart",Ee=>{let H=Ee.inputSource;if(t.moveMode){let $=G(H,Ee.frame);if($){_.set($.o,$.dir);let ie=_.intersectObjects(t.pickables,!1)[0];if(ie){let Q=ie.object.userData.panel,_e=t.desk.worldToLocal(ie.point.clone());T.set(H,{panel:Q,dist:ie.distance,offset:Q.mesh.position.clone().sub(_e)});return}}}C.set(H,[])}),v.addEventListener("selectend",Ee=>{let H=Ee.inputSource,$=T.get(H);if($){$.panel.save(),T.delete(H);return}let ie=C.get(H);if(C.delete(H),t.showSwipe(null),!ie)return;let Q=Me(),_e=Il(ie,[Q.x,0,Q.z]);_e.dir&&l(_e.dir)}),v.addEventListener("squeeze",()=>{A=!0}),v.addEventListener("end",()=>{document.body.classList.remove("in-xr"),t.scene.background=null,t.root.position.set(0,0,0),t.root.rotation.set(0,0,0),t.root.updateMatrixWorld(!0),t.faceDesk(),t.setHands([]),t.setPointers([]),t.showWrist(!1),t.showSwipe(null),n.setAnimationLoop(f)}),n.setAnimationLoop((Ee,H)=>{let $=n.xr.getReferenceSpace(),ie=H&&H.getViewerPose($);if(ie){if(I.fromArray(ie.transform.matrix),I.decompose(O,V,K),A){let Ce=Ft().set(0,0,-1).applyQuaternion(V),L=Math.atan2(-Ce.x,-Ce.z);t.root.position.set(O.x,x?0:O.y-1.6,O.z),t.root.rotation.set(0,L+Math.PI,0),t.root.updateMatrixWorld(!0),t.faceDesk(),A=!1}F.copy(t.root.matrixWorld).invert();let Q=performance.now(),_e=[],Re=[],Be=[],rt=null,Ve=null;for(let Ce of v.inputSources){let L=G(Ce,H),pt=T.get(Ce);if(pt&&L){let he=L.o.clone().add(L.dir.clone().multiplyScalar(pt.dist));pt.panel.mesh.position.copy(t.desk.worldToLocal(he)).add(pt.offset),pt.panel.face()}let Te=C.get(Ce);if(Te){let he=ue(Ce,H);if(he){for(Te.push({t:Q,p:he.toArray()});Te.length>2&&Q-Te[0].t>1e3;)Te.shift();let Ge=Me(),pe=Il(Te,[Ge.x,0,Ge.z]),w=he.clone().add(Ft().set(0,.07,0));t.showSwipe(w,Fe(w),pe.progress,Math.sign(pe.dx)||1,!!pe.dir)}}if(t.moveMode&&L&&!pt&&!rt){_.set(L.o,L.dir);let he=_.intersectObjects(t.pickables,!1)[0];he&&(rt=he.object.userData.panel)}if(L&&Ce.hand&&!pt&&L.dir.y>-.05){let he=L.o.clone().applyMatrix4(F),Ge=L.dir.clone().transformDirection(F);Re.push({o:he,d:Ge})}if(!Ce.hand)continue;let Ie=ne(Ce,H,"index-finger-tip");if(Ie&&_e.push(Ft().copy(Ie.transform.position)),Ce.handedness==="right"&&Ie&&(Ve=Ft().copy(Ie.transform.position)),Ce.handedness==="left"){let he=ne(Ce,H,"wrist");if(he){let Ge=he.transform.orientation,pe=he.transform.position,w=ld([Ge.x,Ge.y,Ge.z,Ge.w],[pe.x,pe.y,pe.z],O.toArray());if(j.palm=w,w>.55&&!C.has(Ce)&&!T.has(Ce)?b||(b=Q):w<.35&&(b=0),b&&Q-b>250){let B=Ft().copy(pe),Y=O.clone().sub(B).normalize(),J=B.add(Y.multiplyScalar(.07)).add(Ft().set(0,.04,0));t.showWrist(!0,J,Fe(J)),S=!0}else S&&(t.showWrist(!1),S=!1)}}}if((!v.inputSources.length||![...v.inputSources].some(Ce=>Ce.handedness==="left"&&Ce.hand))&&(S&&(t.showWrist(!1),S=!1),b=0),S&&Ve){let Ce=t.pressAt(Ve,Q);Ce==="move"?t.setMoveMode(!t.moveMode):Ce==="timer"?u():Ce==="reset"&&t.resetDesk()}if(C.size||t.showSwipe(null),j.menuOn=S,j.swiping=C.size,j.grabbing=T.size,j.rays=Re.length,j.right=Ve&&Ve.toArray(),t.setHover(rt),t.setHands(T.size?[]:_e),t.setPointers(Re),Ee-R>66){R=Ee;let Ce=Ft(),L=new Ct;new Pe().multiplyMatrices(F,I).decompose(Ce,L,K);for(let Te of v.inputSources){if(!Te.hand)continue;let Ie=[];for(let he of lx){let Ge=ne(Te,H,he);if(!Ge){Ie.length=0;break}let pe=Ft().copy(Ge.transform.position).applyMatrix4(F);Ie.push(+pe.x.toFixed(3),+pe.y.toFixed(3),+pe.z.toFixed(3))}Ie.length&&(Be[Te.handedness==="left"?0:1]=Ie)}let pt=Re.map(({o:Te,d:Ie})=>[...Te.toArray(),...Ie.toArray()].map(he=>+he.toFixed(3)));h.remote({type:"pose",p:Ce.toArray().map(Te=>+Te.toFixed(3)),q:L.toArray().map(Te=>+Te.toFixed(4)),hands:Be,rays:pt})}}t.tick(Ee),n.xr.enabled=!1,t.renderMirror(n,Ee),n.xr.enabled=!0,n.render(t.scene,t.camera)})}function f(y){t.camera.position.set(0,1.6,0),t.camera.rotation.set(i.pitch,i.yaw,0,"YXZ"),t.tick(y),t.renderMirror(n,y),n.render(t.scene,t.camera)}n.setAnimationLoop(f),document.body.classList.add("ready")}hx();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

budoux/module/win-browser.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

budoux/module/dom.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

budoux/module/parser.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

budoux/module/html_processor.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

budoux/module/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
