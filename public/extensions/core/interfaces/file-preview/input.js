parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"v3sR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("../../../mixins/interface"));function i(e){return e&&e.__esModule?e:{default:e}}var t={mixins:[e.default],computed:{isImage:function(){switch(this.values.type){case"image/jpeg":case"image/gif":case"image/png":case"image/svg+xml":case"image/webp":case"image/bmp":return!0}return!1},isVideo:function(){switch(this.values.type){case"video/mp4":case"video/webm":case"video/ogg":return!0}return!1},isAudio:function(){switch(this.values.type){case"audio/mpeg":case"audio/ogg":case"audio/wav":return!0}return!1},fileType:function(){return this.values.type.split("/")[1]},url:function(){return this.values.data.full_url}}};exports.default=t;
(function(){var s=exports.default||module.exports;"function"==typeof s&&(s=s.options),Object.assign(s,{render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",[s.isImage?i("div",{staticClass:"image"},[i("img",{attrs:{src:s.url}})]):s.isVideo?i("div",{staticClass:"video"},[i("video",{attrs:{controls:""}},[i("source",{attrs:{src:s.url,type:s.values.type}}),s._v(" I'm sorry; your browser doesn't support HTML5 video in this format. ")])]):s.isAudio?i("div",{staticClass:"audio"},[i("audio",{attrs:{controls:""}},[i("source",{attrs:{src:s.url,type:s.values.type}}),s._v(" I'm sorry; your browser doesn't support HTML5 audio in this format. ")])]):i("div",{staticClass:"file"},[s._v(" "+s._s(s.fileType)+" ")]),s._v(" "),i("div",{staticClass:"toolbar"},[i("span",{staticClass:"original"},[i("a",{attrs:{href:s.url,target:"_blank"}},[i("i",{staticClass:"material-icons"},[s._v("link")]),s._v(s._s(s.url))])])])])},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-09bfc6",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["v3sR"], "__DirectusExtension__")