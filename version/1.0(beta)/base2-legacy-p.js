window.undefined=window.undefined;new function(){var h=Array.prototype.slice;$Legacy={has:function(a,b){if(a[b]!==undefined)return true;b=String(b);for(var i in a)if(i==b)return true;return false;},instanceOf:function(a,b){return a&&(b==Object||a.constructor==b||(b.ancestorOf&&b.ancestorOf(a.constructor)));},fire:function(a){if(base2.DOM){with(base2.DOM){var b=DocumentEvent.createEvent(document,"Events");Event.initEvent(b,a,false,false);EventTarget.dispatchEvent(document,b);}if(a=="DOMContentLoaded")setTimeout('$Legacy.fire("ready")',1);}}};/*@cc_on@*//*@if(@_jscript_version<5.1)var j=onload;onload=function(){if(j)j();setTimeout('$Legacy.fire("DOMContentLoaded")',1);};/*@end@*/if(typeof encodeURIComponent=="undefined"){encodeURIComponent=function(b){return escape(b).replace(/\%(21|7E|27|28|29)/g,unescape).replace(/[@+\/]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase();});};decodeURIComponent=unescape;}createError("Error");createError("TypeError");createError("SyntaxError");createError("ReferenceError");function createError(b){if(typeof window[b]=="undefined"){var c=window[b]=function(a){this.message=a;};c.prototype=new window.Error;c.prototype.name=b;}};function extend(a,b,c){if(!a.prototype[b]){a.prototype[b]=c;}};if("11".slice(-1)!="1"){var k=String.prototype.slice;String.prototype.slice=function(a,b){if(arguments.length==1&&a<0){arguments[0]=this.length+a;arguments[1]=-a;}return k.apply(this,arguments)}}extend(Array,"pop",function(){if(this.length){var i=this[this.length-1];this.length--;return i;}return undefined;});extend(Array,"push",function(){for(var i=0;i<arguments.length;i++){this[this.length]=arguments[i]}return this.length});extend(Array,"shift",function(){var r=this[0];if(this.length){var a=this.slice(1),i=a.length;while(i--)this[i]=a[i];this.length--}return r});extend(Array,"splice",function(i,c){var r=c?this.slice(i,i+c):[];var a=this.slice(0,i).concat(h.apply(arguments,[2])).concat(this.slice(i+c));this.length=i=a.length;while(i--)this[i]=a[i];return r});extend(Array,"unshift",function(){var a=this.concat.call(h.apply(arguments,[0]),this),i=a.length;while(i--)this[i]=a[i];return this.length;});var l=this;extend(Function,"apply",function(o,a){if(o===undefined)o=l;else if(o==null)o=window;else if(typeof o=="string")o=new String(o);else if(typeof o=="number")o=new Number(o);else if(typeof o=="boolean")o=new Boolean(o);if(arguments.length==1)a=[];else if(a[0]&&a[0].writeln)a[0]=a[0].documentElement.document||a[0];var $="#b2_apply",r;o[$]=this;switch(a.length){case 0:r=o[$]();break;case 1:r=o[$](a[0]);break;case 2:r=o[$](a[0],a[1]);break;case 3:r=o[$](a[0],a[1],a[2]);break;case 4:r=o[$](a[0],a[1],a[2],a[3]);break;case 5:r=o[$](a[0],a[1],a[2],a[3],a[4]);break;default:var b=[],i=a.length-1;do b[i]="a["+i+"]";while(i--);eval("r=o[$]("+b+")");}if(typeof o.valueOf=="function"){delete o[$]}else{o[$]=undefined}if(r&&r.writeln)r=r.documentElement.document||r;return r;});extend(Function,"call",function(o){return this.apply(o,h.apply(arguments,[1]));});extend(Number,"toFixed",function(n){n=parseInt(n);var a=Math.pow(10,n);a=String(Math.round(this*a)/a);if(n>0){a=a.split(".");if(!a[1])a[1]="";a[1]+=Array(n-a[1].length+1).join(0);a=a.join(".");};return a;});if("".replace(/^/,String)){var m=/(g|gi)$/;var p=/([\/()[\]{}|*+-.,^$?\\])/g;var q=String.prototype.replace;String.prototype.replace=function(a,b){if(typeof b=="function"){if(a&&a.constructor==RegExp){var c=a;var d=c.global;if(d==null)d=m.test(c);if(d)c=new RegExp(c.source);}else{c=new RegExp(String(a).replace(p,"\\$1"));}var e,f=this,g="";while(f&&(e=c.exec(f))){g+=f.slice(0,e.index)+b.apply(this,e);f=f.slice(e.index+e[0].length);if(!d)break}return g+f}return q.apply(this,arguments)}}};