define("ec751bcc-012a-46cb-b73e-37eefbcf8dce_0.0.1",["@microsoft/sp-property-pane","SpfxGraphApiSampleWebPartStrings","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-webpart-base"],function(e,t,n,r,i){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="Tg5G")}({"26ea":function(t,n){t.exports=e},"6euf":function(e,n){e.exports=t},JPst:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},Pk8u:function(e,t){e.exports=n},Tg5G:function(e,t,n){"use strict";n.r(t);var r=n("UWqr"),i=n("26ea"),o=n("br4S"),a=n("Pk8u");n("f8MB");var p,c={spfxGraphApiSample:"spfxGraphApiSample_827509cb",container:"container_827509cb",row:"row_827509cb",column:"column_827509cb","ms-Grid":"ms-Grid_827509cb",title:"title_827509cb",subTitle:"subTitle_827509cb",description:"description_827509cb",button:"button_827509cb",label:"label_827509cb"},s=n("6euf"),l=(p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this;this.context.msGraphClientFactory.getClient().then(function(t){t.api("/me/joinedTeams").select("id,displayName").get(function(t,n,r){e.domElement.innerHTML='\n        <div class="'+c.spfxGraphApiSample+'">  \n        <div class="'+c.container+'">\n          <div class="'+c.row+'">\n            <div class="'+c.column+'">\n              <span class="'+c.title+'">Welcome to SYNK Ventures SharePoint Demo!</span>\n              <p class="'+c.subTitle+'">How to Use Microsoft Graph in SharePoint Framework.</p>\n              My YouTube Channel\n              <a href="https://www.youtube.com/channel/UC6vLzWN-3aFG8dgTgEOlx5g">link</a>\n              <div id="spListContainer" />\n            </div>\n          </div>\n        </div>\n        </div>',e._renderTeamsJoined(n.value)})})},t.prototype._renderTeamsJoined=function(e){for(var t="",n=0;n<e.length;n++){t+='<p class="'+c.description+'">Team '+(n+1)+" - "+Object(a.escape)(e[n].id)+" -  "+Object(a.escape)(e[n].displayName)+"</p>",this.domElement.querySelector("#spListContainer").innerHTML=t}},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return r.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:s.PropertyPaneDescription},groups:[{groupName:s.BasicGroupName,groupFields:[Object(i.PropertyPaneTextField)("description",{label:s.DescriptionFieldLabel})]}]}]}},t}(o.BaseClientSideWebPart);t.default=u},UWqr:function(e,t){e.exports=r},br4S:function(e,t){e.exports=i},f8MB:function(e,t,n){var r=n("nyHr"),i=n("ruv1");"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!0);r.locals&&(e.exports=r.locals)},nyHr:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,'.spfxGraphApiSample_827509cb .container_827509cb{max-width:700px;margin:0 auto;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.spfxGraphApiSample_827509cb .row_827509cb{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:"[theme:white, default: #ffffff]";background-color:"[theme:themeDark, default: #005a9e]";padding:20px}.spfxGraphApiSample_827509cb .row_827509cb:after,.spfxGraphApiSample_827509cb .row_827509cb:before{display:table;content:"";line-height:0}.spfxGraphApiSample_827509cb .row_827509cb:after{clear:both}.spfxGraphApiSample_827509cb .column_827509cb{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .spfxGraphApiSample_827509cb .column_827509cb{float:left}[dir=rtl] .spfxGraphApiSample_827509cb .column_827509cb{float:right}.spfxGraphApiSample_827509cb .column_827509cb .ms-Grid_827509cb{padding:0}@media (min-width:640px){.spfxGraphApiSample_827509cb .column_827509cb{width:83.33333333333334%}}@media (min-width:1024px){.spfxGraphApiSample_827509cb .column_827509cb{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .spfxGraphApiSample_827509cb .column_827509cb{left:16.66667%}[dir=rtl] .spfxGraphApiSample_827509cb .column_827509cb{right:16.66667%}}@media (min-width:640px){[dir=ltr] .spfxGraphApiSample_827509cb .column_827509cb{left:8.33333%}[dir=rtl] .spfxGraphApiSample_827509cb .column_827509cb{right:8.33333%}}.spfxGraphApiSample_827509cb .title_827509cb{font-size:21px;font-weight:100;color:"[theme:white, default: #ffffff]"}.spfxGraphApiSample_827509cb .description_827509cb,.spfxGraphApiSample_827509cb .subTitle_827509cb{font-size:17px;font-weight:300;color:"[theme:white, default: #ffffff]"}.spfxGraphApiSample_827509cb .button_827509cb{text-decoration:none;height:32px;min-width:80px;background-color:"[theme:themePrimary, default: #0078d4]";border-color:"[theme:themePrimary, default: #0078d4]";color:"[theme:white, default: #ffffff]";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.spfxGraphApiSample_827509cb .button_827509cb .label_827509cb{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}',""])},ruv1:function(e,t,n){"use strict";(function(e){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"==typeof window?e:window,i=r&&r.CSPSettings&&r.CSPSettings.nonce,o=function(){var e=r.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};e.runState||(e=n({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));e.registeredThemableStyles||(e=n({},e,{registeredThemableStyles:[]}));return r.__themeState__=e,e}(),a=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,p=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function c(e){var t=p();e();var n=p();o.perf.duration+=n-t}function s(){c(function(){var e=o.runState.buffer.slice();o.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&l(t)})}function l(e,t){o.loadStyles?o.loadStyles(d(e).styleString,e):function(e){if("undefined"==typeof document)return;var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),r=d(e),a=r.styleString,p=r.themable;n.setAttribute("data-load-themed-styles","true"),n.type="text/css",i&&n.setAttribute("nonce",i);n.appendChild(document.createTextNode(a)),o.perf.count++,t.appendChild(n);var c=document.createEvent("HTMLEvents");c.initEvent("styleinsert",!0,!1),c.args={newStyle:n},document.dispatchEvent(c);var s={styleElement:n,themableStyle:e};p?o.registeredThemableStyles.push(s):o.registeredStyles.push(s)}(e)}function u(e){void 0===e&&(e=3),3!==e&&2!==e||(f(o.registeredStyles),o.registeredStyles=[]),3!==e&&1!==e||(f(o.registeredThemableStyles),o.registeredThemableStyles=[])}function f(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function d(e){var t=o.theme,n=!1;return{styleString:(e||[]).map(function(e){var r=e.theme;if(r){n=!0;var i=t?t[r]:void 0,o=e.defaultValue||"inherit";return t&&!i&&console,i||o}return e.rawString}).join(""),themable:n}}function b(e){var t=[];if(e){for(var n=0,r=void 0;r=a.exec(e);){var i=r.index;i>n&&t.push({rawString:e.substring(n,i)}),t.push({theme:r[1],defaultValue:r[2]}),n=a.lastIndex}t.push({rawString:e.substring(n)})}return t}t.loadStyles=function(e,t){void 0===t&&(t=!1),c(function(){var n=Array.isArray(e)?e:b(e),r=o.runState,i=r.mode,a=r.buffer,p=r.flushTimer;t||1===i?(a.push(n),p||(o.runState.flushTimer=setTimeout(function(){o.runState.flushTimer=0,s()},0))):l(n)})},t.configureLoadStyles=function(e){o.loadStyles=e},t.configureRunMode=function(e){o.runState.mode=e},t.flush=s,t.loadTheme=function(e){o.theme=e,function(){if(o.theme){for(var e=[],t=0,n=o.registeredThemableStyles;t<n.length;t++){var r=n[t];e.push(r.themableStyle)}e.length>0&&(u(1),l([].concat.apply([],e)))}}()},t.clearStyles=u,t.detokenize=function(e){return e&&(e=d(b(e)).styleString),e},t.splitStyles=b}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}})});