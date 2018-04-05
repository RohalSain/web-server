/*! 300-258-RELEASE 2018-04-03 */
!function(a){a.TRC=a.TRC||{};var b=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},c=function(){return!0},d=function(a,c,d,e){var f=a+"/"+encodeURIComponent(d||TRC.publisherId)+"/log/3/"+c;return e&&(f+="?"+b(e)),f},e=function(b,d){var e=a.XDomainRequest||a.XMLHttpRequest,f=new e;return f.open(b,d),f.onload=c,f.onerror=c,f.ontimeout=c,f.onprogress=c,f.withCredentials=!0,f};TRC.TRCLogger={post:function(a,c,f,g){var h=d(a,c,g),i=e("POST",h);i.setRequestHeader&&i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.send(b(f))},get:function(a,b,c,f){var g=d(a,b,f,c),h=e("GET",g);h.send()}}}(window),function(win,doc){win.TRC=win.TRC||{},TRC.useStorageDetection=TRC.useStorageDetection||!0,TRC.text=TRC.text||{},TRC.text.lsplit=TRC.text.lsplit||function(a,b,c){var d=a.split(b);return d.slice(0,c-1).concat(d.length>=c?d.slice(c-1).join(b):[])},TRC.util=TRC.util||{},TRC.util.jsonParseWithNative=TRC.util.jsonParseWithNative||function(a){try{return JSON.parse(a)}catch(b){return TRC.util.jsonParseWithEval(a)}},TRC.util.jsonParseWithEval=TRC.util.jsonParseWithEval||function(text){try{return eval("("+String(text)+")")}catch(e){throw new Error("JSON parse error - invalid input!")}},win.TRCImpl=win.TRCImpl||{},TRCImpl.global=TRCImpl.global||{},win.__trcError=win.__trcError||function(){},win.__trcJSONify=win.__trcJSONify||function(a){function b(a){return'"'+a.replace(/[\s\S]/g,function(a){switch(a){case'"':return'\\"';case"\\":return"\\\\";case"\n":return"\\n";case"\r":return"\\r"}return a})+'"'}function c(a){for(var b=[],c=0;c<a.length;c++)b[c]=__trcJSONify(a[c]);return b}function d(a){var c=[];for(var d in a)a.hasOwnProperty(d)&&c.push(b(d)+":"+__trcJSONify(a[d]));return c}return a instanceof Array?"["+c(a).join(",")+"]":a instanceof Object?"{"+d(a).join(",")+"}":null===a?"null":"string"==typeof a?b(a):"undefined"==typeof a?"undefined":a.toString()}}(window,document),function(a,b){function c(){function a(){var a,d,e=new Array;for(var f in c)c.hasOwnProperty(f)&&null!=c[f]&&(e[e.length]=escape(f)+"="+escape(c[f]));a=e.length>0?1:-1,d=new Date((new Date).getTime()+365*a*864e5),document.cookie=b+"="+escape(e.join("|"))+";path=/;expires="+d.toUTCString()}for(var b="trc_cookie_storage",c=new Object,d=document.cookie.split(/;\s+/),e=0;e<d.length;e++){var f=TRC.text.lsplit(d[e],"=",2),g=unescape(f[0]),h=unescape(f[1]);if(g==b){for(var i=h.split("|"),j=0;j<i.length;j++){var f=i[j].split("=");c[unescape(f[0])]=unescape(f[1])}break}}return this.getValue=function(a){return c.hasOwnProperty(a)?c[a]:null},this.setValue=function(b,d){c[b]=d,a()},this.removeKey=function(b){delete c[b],a()},this}function d(a){var b=a||{};return this.getValue=function(a){return b[a]?b[a]:null},this.setValue=function(a,c){b[a]=c},this.removeKey=function(a){delete b[a]},this.getData=function(){return b},this}function e(b){return this.getValue=function(c){return a[b+"Storage"].getItem(c)},this.setValue=function(c,d){try{a[b+"Storage"].setItem(c,d)}catch(e){}},this.removeKey=function(c){try{a[b+"Storage"].removeItem(c)}catch(d){}},this}function f(b){var c=a[b+"Storage"],d=(new Date).getTime()+"",e="_taboolaStorageDetection";try{if(c.setItem(e,d),c.getItem(e)==d)return c.removeItem(e),c}catch(f){}return null}function g(b){try{if(a.localStorage instanceof Storage&&TRC.useStorageDetection&&f(b))return new e(b)}catch(c){return null}}var h="taboola global",i="trctestcookie",j=function(){return this.state={},this.getLocalStorageImplementation=function(b,e){if(null!=this.state.privateStorageImpl&&"strict-w3c-storage"!=b)return this.state.privateStorageImpl;var f=a.TRCImpl?a.TRCImpl.global:{};switch(b=b||(f["local-storage-usage"]?f["local-storage-usage"]:"prefer-w3c-storage")){case"strict-w3c-storage":return g("session"===e?"session":"local");case"prefer-w3c-storage":var h=g("local");if(h)return this.state.privateStorageImpl=h;case"prefer-cookies":try{if(this.canWriteCookies())return this.state.privateStorageImpl=new c}catch(i){}default:return this.state.privateStorageImpl=new d}},this.getFirstPartyCookie=function(){if(this.state.firstPartyCookie)return this.state.firstPartyCookie;var a=this.getLocalStorageImplementation();if(a instanceof c||a instanceof d)return this.state.firstPartyCookie=a;try{if(this.canWriteCookies())return this.state.firstPartyCookie=new c}catch(b){}return this.state.firstPartyCookie=new d},this.canWriteCookies=function(){var a;return document.cookie=i+"=ok",a=-1!==document.cookie.indexOf(i),document.cookie=i+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",a},this.getDummyStorage=function(a){return new d(a)},this.getValue=function(a){return this.getPublisherValue(h,a)},this.storePublisherValue=function(a,b,c){var d;this.isNotAllowedToWriteValue(b,c)||(d=this.buildKeyWithPublisher(a,b),this.getLocalStorageImplementation().setValue(d,c),this.addKeyToStoredKeysList(d))},this.isNotAllowedToWriteValue=function(a,b){return null==b||void 0==b||TRC.doNotTrack&&!this.isAllowedKeyWhenDoNotTrack(a)},this.buildKeyWithPublisher=function(a,b){return a+":"+b},this.getPublisherValue=function(a,b){return TRC.doNotTrack&&!this.isAllowedKeyWhenDoNotTrack(b)?null:this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(a,b))},this.addKeyToStoredKeysList=function(a){var b=this.getStoredKeysList();-1===b.indexOf(a)&&(b.push(a),this.setStoredKeysList(b))},this.getStoredKeysList=function(){var a,b=this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(h,"local-storage-keys"));try{a=TRC.util.jsonParseWithNative(b)||[]}catch(c){a=[],__trcError("Could not parse local storage keys",c)}return a},this.setStoredKeysList=function(a){var b;try{b=__trcJSONify(a),this.getLocalStorageImplementation().setValue(this.buildKeyWithPublisher(h,"local-storage-keys"),b)}catch(c){return void __trcError("Could not stringify local storage keys",c)}},this.isAllowedKeyWhenDoNotTrack=function(b){var c,d=a.TRCImpl?a.TRCImpl.global||{}:{},e=d["dnt-allowed-keys"]||["session-id","trc_css-isolation"];return null===b||void 0===b?!1:(c=b.split(":")[1]||b,-1!==e.indexOf(c))},this.storeUserId=function(a){this.isNotAllowedToWriteValue("user-id",a)||this.storePublisherValue(h,"user-id",a)},this.getUserIdFirstPartyCookie=function(){return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(h,"user-id"))},this.initState=function(){"undefined"==typeof this.state&&(this.state={}),this.state.privateStorageImpl=null},this.initState(),this};TRC.tfaPageManager=TRC.tfaPageManager||new j}(window,document),function(a,b){function c(a,b,c){var d,e;c&&b&&a&&(d=encodeURIComponent(a),e=encodeURIComponent(b),c.push(d+"="+e))}function d(a,b){a&&b&&(b[a]=!0)}function e(a,b,c){for(var e={},f=0;f<arguments.length;f++)d(arguments[f],e);return Object.keys(e).length>1}var f=TRC.pageManager||TRC.tfaPageManager;TRC.tfaUserId={initialized:!1,userId:null,getUserId:function(){return this.userId},sendUserIdsToTrc:function(a,b,d){var f,g=[];return e(a,b,d)?(c("uiref",a,g),c("uils",b,g),c("uifpc",d,g),f=new Image,f.src="//trc.taboola.com/sg/taboola-tfa/1/um/?"+g.join("&"),f):void 0},readAndStoreUserId:function(){var a=this.extractUserIdFromReferrer(),b=f.getValue("user-id"),c=f.getUserIdFirstPartyCookie();a&&(this.sendUserIdsToTrc(a,b,c),f.storeUserId(a),c&&f.getFirstPartyCookie().setValue("taboola global:user-id",a)),this.userId=a||b||c},extractUserIdFromReferrer:function(){var a=this.getReferrer();return a&&a.indexOf("taboola")>-1?this.getParameterByName("ui",a):void 0},getReferrer:function(){return b.referrer},getParameterByName:function(a,b){if(!b||!a)return null;a=a.replace(/[\[\]]/g,"\\$&");var c=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)"),d=c.exec(b);return d?d[2]?decodeURIComponent(d[2].replace(/\+/g," ")):"":null},init:function(){this.initialized||(this.readAndStoreUserId(),this.initialized=!0)}},TRC.tfaUserId.init()}(window,document),function(){function a(){var a=j();a.initialized&&a.accountId&&setTimeout(function(){for(var a=j().asyncQueue;a.length;)i(a.shift())},0)}function b(){for(var a,b,c=document.querySelectorAll(t),d=0;d<c.length;d++)if(a=c[d],a.src.indexOf("/unip/")>0&&(b=a.src.replace(p,"$3")))return/^\d+$/.test(b)?parseInt(b,10):(l("Value '"+b+"' is invalid for 'id' param in script source url '"+a.src+"'. Only numeric values are allowed."),u)}function c(){var a=new Date,b=a.getHours(),c=a.getMinutes(),d=a.getSeconds()+a.getMilliseconds()/1e3;return(10>b?"0":"")+b+":"+(10>c?"0":"")+c+":"+(10>d?"0":"")+d.toFixed(3)}function d(a){try{TRC.tfaUserId.getUserId()&&(a.ui=TRC.tfaUserId.getUserId())}catch(b){l("Error while trying to add user-id param, params="+JSON.stringify(a),b)}}function e(a){var b,e={},f=!1;a.tim=encodeURIComponent(c());for(var g in a)a.hasOwnProperty(g)&&q.indexOf(g)<0&&(b=r.hasOwnProperty(g)?r[g]:g,e[b]=a[g],f=!0);return d(e),f&&e}function f(a,b){var c=(window.location.protocol||v.defaultProtocol)+"//"+v.host;try{TRC.TRCLogger[v.httpMethod](c,v.loggerEventName,b,a)}catch(d){l("Error while trying to send to server event with id '"+a+"' and params '"+JSON.stringify(b)+"'.",d)}}function g(a){var b=j(),c=a&&a.id||b.accountId;c?c!==u&&f(parseInt(c,10),e(a)):b.asyncQueue.push(a)}function h(a){return a?a.notify?o.hasOwnProperty(a.notify)?a.name?a.hasOwnProperty("id")&&!/^\d+$/.test(a.id)?(k(w.INVALID_ID,a,"Value '"+a.id+"' is invalid for 'id' field in command '"+JSON.stringify(a)+"'. Only numeric values are allowed."),!1):!0:(k(w.MISSING_NAME,a,"Mandatory 'name' field is missing in command '"+JSON.stringify(a)+"'."),!1):(k(w.INVALID_NOTIFY,a,"Value '"+a.notify+"' is invalid for 'notify' field in command '"+JSON.stringify(a)+"'."),!1):(k(w.MISSING_NOTIFY,a,"Mandatory 'notify' field is missing in command '"+JSON.stringify(a)+"'."),!1):(k(w.EMPTY_COMMAND,a,"Command is '"+a+"'."),!1)}function i(a){if(h(a))try{o[a.notify](a)}catch(b){l("An error occurred while handling command '"+JSON.stringify(a)+"'.",b)}}function j(){return window&&window[s]&&window[s].TUP}function k(a,b,c){if("function"==typeof CustomEvent){var d=j()||{};document.dispatchEvent(new CustomEvent("tfa:validation-error",{detail:{accountId:d.accountId,errorCode:a,command:b}}))}l(c)}function l(a,b){v.logToConsole&&m(a,b)}function m(a,b){b?console.log("Taboola Pixel: "+a,b):console.log("Taboola Pixel: "+a)}function n(){var c=window[s]=window[s]||[],d=c.TUP=c.TUP||{};d.accountId=d.accountId||b(),window.TRC=window.TRC||{},d.initialized||(d.push=c.TUP.push||i,d.initialized=!0,d.asyncQueue=[]),a()}var o={event:g},p=/(\S+)taboola(\S+|)\.com\/libtrc\/unip\/(\S+)\/tfa\.js(\S+|)/,q=["notify","id"],r={name:"en",url:"item-url"},s="_tfa",t="script[src$='tfa.js']",u=-1,v={defaultProtocol:"https:",host:"trc.taboola.com",httpMethod:"get",loggerEventName:"unip",logToConsole:!0},w={EMPTY_COMMAND:"EMPTY_COMMAND",MISSING_NOTIFY:"MISSING_NOTIFY",INVALID_NOTIFY:"INVALID_NOTIFY",MISSING_NAME:"MISSING_NAME",INVALID_ID:"INVALID_ID"};n()}(),function(a,b){function c(a){var b;switch(a.notify){case"action":b=y;break;case"mark":b=z;break;case"event":b=queue.TUP;break;default:return}b&&b.push(a)}function d(){return TRC&&TRC.tfaUserId&&TRC.tfaUserId.getUserId()?"&ui="+encodeURIComponent(TRC.tfaUserId.getUserId()):""}function e(){var a,b,c=m();if(c)for(a=0,b=y.length;b>a;a++)h(g(v,{$publishreId:c?c+"/":"",$logType:"action"})+"tim="+escape(j())+"&item-url="+escape(i())+n(t,y.shift())+k()+d())}function f(){var a,b,c=m();if(c)for(a=0,b=z.length;b>a;a++)h(g(v,{$publishreId:c?c+"/":"",$logType:"mark"})+"tim="+escape(j())+"&item-url="+escape(i())+n(u,z.shift())+k()+d())}function g(a,b){return a.replace(/\{([^{}]*)\}/g,function(a,c){var d=b[c];return"string"==typeof d||"number"==typeof d?d:a})}function h(a){var b=new Image;b.src=a}function i(){return a.location.href}function j(){var a=new Date,b=a.getHours(),c=a.getMinutes(),d=a.getSeconds()+a.getMilliseconds()/1e3;return(10>b?"0":"")+b+":"+(10>c?"0":"")+c+":"+(10>d?"0":"")+d.toFixed(3)}function k(){var c=a.location.search,d=b.referrer.match(/(\?\S+)$/g),e="";return e=l(c.replace(/^\?/,"").split(/&/))+(d?l(d[0].replace(/^\?/,"").split(/&/)):"")}function l(a){var b,c,d="",e="trc_";for(b=0,c=a.length;c>b;b++)0==a[b].indexOf(e)&&(d=d+"&"+a[b]);return d}function m(){var a,b,c,d=document.getElementsByTagName("script"),e="";for(a=0,b=d.length;b>a;a++)if(c=d[a].src,e=c.replace(w,"$3"),d[a].src&&e!==d[a].src&&e.indexOf(x)<0)return e;return e}function n(a,b){var c,d="";for(c in a)void 0!==b[c]&&(d+="&"+a[c]+"="+b[c]);return d}function o(a){for(var b=0;b<arguments.length;b++)a=arguments[b],a instanceof Object&&c(a);return p(),arguments.length}function p(){e(),f()}function q(){for(;queue.length;)o(queue.shift())}function r(){queue=a[s]=a[s]||[],queue.registered||(queue.push=o,queue.registered=!0,q())}var s="_tfa",t={orderid:"orderid",currency:"currency",revenue:"revenue",quantity:"quantity",name:"name",attributionGroup:"attributionGroup"},u={type:"marking-type"},v=(a.location.protocol.match(/http/)?a.location.protocol:"http:")+"//trc.taboola.com/{$publishreId}log/3/{$logType}?",w=/(\S+)taboola(\S+|)\.com\/libtrc\/(\S+)\/tfa\.js(\S+|)/,x="unip/",y=[],z=[];r()}(window,document);