!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).StackBlitzSDK=t()}(this,function(){var e=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],t={clickToLoad:function(e){return r("ctl",e)},devToolsHeight:function(e){return function(e,t){return"number"==typeof t&&t>=0&&t<=100?"devToolsHeight="+Math.round(t):""}(0,e)},forceEmbedLayout:function(e){return r("embed",e)},hideDevTools:function(e){return r("hideDevTools",e)},hideExplorer:function(e){return r("hideExplorer",e)},hideNavigation:function(e){return r("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter(function(e){return"string"==typeof e&&""!==e.trim()}).map(function(e){return"file="+encodeURIComponent(e.trim())})}(0,e).join("&")},theme:function(e){return i("theme",["light","dark"],e)},view:function(e){return i("view",["preview","editor"],e)}};function n(e){void 0===e&&(e={});var n=Object.entries(e).map(function(e){var n=e[0],r=e[1];return null!=r&&t.hasOwnProperty(n)?t[n](r):""}).filter(Boolean);return n.length?"?"+n.join("&"):""}function r(e,t){return!0===t?e+"=1":""}function i(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function o(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function d(e,t){return""+u(t)+e+n(t)}function a(e,t){var r={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(r,t),""+u(r)+e+n(r)}function u(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function c(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function s(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function l(e){return e&&!1===e.newWindow?"_self":"_blank"}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var f=/*#__PURE__*/function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,i=o();return new Promise(function(e,o){t.pending[i]={resolve:e,reject:o},t.port.postMessage({type:n,payload:p({},r,{__reqid:i})})})},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,i=n.payload,o=i.__reqid,d=i.__error;this.pending[o]&&(i.__success?this.pending[o].resolve(function(e){var t=p({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(i)):this.pending[o].reject(d?r+": "+d:r),delete this.pending[o])}},e}(),h=/*#__PURE__*/function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null})},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new f(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),m=[],v=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=o(),this.element=e,this.pending=new Promise(function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new h(n.ports[0],r.payload),e(t.vm),o())},i=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function o(){window.clearInterval(a),window.removeEventListener("message",r)}window.addEventListener("message",r),i();var d=0,a=window.setInterval(function(){if(t.vm)o();else{if(d>=20)return o(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void m.forEach(function(e,n){e.id===t.id&&m.splice(n,1)});d++,i()}},500)}),m.push(this)};function y(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function g(t){if(!e.includes(t.template)){var n=e.map(function(e){return"'"+e+"'"}).join(", ");console.warn("Unsupported project.template: must be one of "+n)}var r="node"===t.template,i=document.createElement("form");return i.method="POST",i.setAttribute("style","display:none!important;"),i.appendChild(y("project[title]",t.title)),i.appendChild(y("project[description]",t.description)),i.appendChild(y("project[template]",t.template)),t.dependencies&&(r?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):i.appendChild(y("project[dependencies]",JSON.stringify(t.dependencies)))),t.settings&&i.appendChild(y("project[settings]",JSON.stringify(t.settings))),Object.keys(t.files).forEach(function(e){"string"==typeof t.files[e]&&i.appendChild(y("project[files]["+e+"]",t.files[e]))}),i}function w(e){var t,n,r,i;return null!=e&&e.contentWindow?(null!=(i=(n=e)instanceof Element?"element":"id",t=null!=(r=m.find(function(e){return e[i]===n}))?r:null)?t:new v(e)).pending:Promise.reject("Provided element is not an iframe.")}return{connect:w,embedGithubProject:function(e,t,n){var r=s(e),i=document.createElement("iframe");return i.src=a("/github/"+t,n),c(r,i,n),w(i)},embedProject:function(e,t,n){var r,i=s(e),o=function(e,t){var n=g(e);return n.action=a("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),d=document.createElement("iframe");return c(i,d,n),null==(r=d.contentDocument)||r.write(o),w(d)},embedProjectId:function(e,t,n){var r=s(e),i=document.createElement("iframe");return i.src=a("/edit/"+t,n),c(r,i,n),w(i)},openGithubProject:function(e,t){var n=d("/github/"+e,t),r=l(t);window.open(n,r)},openProject:function(e,t){!function(e,t){var n=g(e);n.action=d("/run",t),n.target=l(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=d("/edit/"+e,t),r=l(t);window.open(n,r)}}});
//# sourceMappingURL=sdk.umd.js.map
