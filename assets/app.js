(()=>{var jv=Object.defineProperty;var tx=(r,t,e)=>t in r?jv(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Qt=(r,t,e)=>tx(r,typeof t!="symbol"?t+"":t,e);function wr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Pm(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ba={duration:.5,overwrite:!1,delay:0},Xf,Ln,qe,Ii=1e8,Be=1/Ii,Uf=Math.PI*2,ex=Uf/4,nx=0,Im=Math.sqrt,ix=Math.cos,rx=Math.sin,vn=function(t){return typeof t=="string"},nn=function(t){return typeof t=="function"},Ar=function(t){return typeof t=="number"},Fc=function(t){return typeof t=="undefined"},ar=function(t){return typeof t=="object"},li=function(t){return t!==!1},Yf=function(){return typeof window!="undefined"},Ac=function(t){return nn(t)||vn(t)},Lm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,sx=/random\([^)]+\)/g,ox=/,\s*/g,Mm=/(?:-?\.?\d|\.)+/gi,qf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zf=/[+-]=-?[.\d]+/,ax=/[^,'"\[\]\s]+/gi,lx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qe,sr,Ff,Jf,mi={},Ic={},Dm,Nm=function(t){return(Ic=mo(t,mi))&&zn},Oc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},za=function(t,e){return!e&&console.warn(t)},Um=function(t,e){return t&&(mi[t]=e)&&Ic&&(Ic[t]=e)||mi},ka=function(){return 0},cx={suppressEvents:!0,isStart:!0,kill:!1},Cc={suppressEvents:!0,kill:!1},hx={suppressEvents:!0},$f={},ts=[],Of={},Fm,oi={},Rf={},bm=30,Rc=[],Kf="",Qf=function(t){var e=t[0],n,i;if(ar(e)||nn(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Rc.length;i--&&!Rc[i].targetTest(e););n=Rc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new nd(t[i],n)))||t.splice(i,1);return t},es=function(t){return t._gsap||Qf(Li(t))[0]._gsap},jf=function(t,e,n){return(n=t[e])&&nn(n)?t[e]():Fc(n)&&t.getAttribute&&t.getAttribute(e)||n},Zn=function(t,e){return(t=t.split(",")).forEach(e)||t},rn=function(t){return Math.round(t*1e5)/1e5||0},Ke=function(t){return Math.round(t*1e7)/1e7||0},Os=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},ux=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Lc=function(){var t=ts.length,e=ts.slice(0),n,i;for(Of={},ts.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},td=function(t){return!!(t._initted||t._startAt||t.add)},Om=function(t,e,n,i){ts.length&&!Ln&&Lc(),t.render(e,n,i||!!(Ln&&e<0&&td(t))),ts.length&&!Ln&&Lc()},Bm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ax).length<2?e:vn(t)?t.trim():t},zm=function(t){return t},gi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},fx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},mo=function(t,e){for(var n in e)t[n]=e[n];return t},Tm=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ar(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Dc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ua=function(t){var e=t.parent||Qe,n=t.keyframes?fx(Bn(t.keyframes)):gi;if(li(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},dx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},km=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Bc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ns=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ds=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},px=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Bf=function(t,e,n,i){return t._startAt&&(Ln?t._startAt.revert(Cc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},mx=function r(t){return!t||t._ts&&r(t.parent)},wm=function(t){return t._repeat?go(t._tTime,t=t.duration()+t._rDelay)*t:0},go=function(t,e){var n=Math.floor(t=Ke(t/e));return t&&n===t?n-1:n},Nc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zc=function(t){return t._end=Ke(t._start+(t._tDur/Math.abs(t._ts||t._rts||Be)||0))},kc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ke(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zc(t),n._dirty||Ds(n,t)),t},Hm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Nc(t.rawTime(),e),(!e._dur||Ga(0,e.totalDuration(),n)-e._tTime>Be)&&e.render(n,!0)),Ds(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Be}},or=function(t,e,n,i){return e.parent&&ns(e),e._start=Ke((Ar(n)?n:n||t!==Qe?Pi(t,n,e):t._time)+e._delay),e._end=Ke(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),km(t,e,"_first","_last",t._sort?"_start":0),zf(e)||(t._recent=e),i||Hm(t,e),t._ts<0&&kc(t,t._tTime),t},Vm=function(t,e){return(mi.ScrollTrigger||Oc("scrollTrigger",e))&&mi.ScrollTrigger.create(e,t)},Gm=function(t,e,n,i,s){if(sd(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ln&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Fm!==ai.frame)return ts.push(t),t._lazy=[s,i],1},gx=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},zf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},_x=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&gx(t)&&!(!t._initted&&zf(t))||(t._ts<0||t._dp._ts<0)&&!zf(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Ga(0,t._tDur,e),h=go(l,a),t._yoyo&&h&1&&(o=1-o),h!==go(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ln||i||t._zTime===Be||!e&&t._zTime){if(!t._initted&&Gm(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Be:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Bf(t,e,n,!0),t._onUpdate&&!n&&pi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&pi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ns(t,1),!n&&!Ln&&(pi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},vx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},_o=function(t,e,n,i){var s=t._repeat,o=Ke(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ke(o*(s+1)+t._rDelay*s):o,a>0&&!i&&kc(t,t._tTime=t._tDur*a),t.parent&&zc(t),n||Ds(t.parent,t),t},Em=function(t){return t instanceof On?Ds(t):_o(t,t._dur)},xx={_start:0,endTime:ka,totalDuration:ka},Pi=function r(t,e,n){var i=t.labels,s=t._recent||xx,o=t.duration()>=Ii?s.endTime(!1):t._dur,a,l,c;return vn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Bn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Fa=function(t,e,n){var i=Ar(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=li(l.vars.inherit)&&l.parent;o.immediateRender=li(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ln(e[0],o,e[s+1])},is=function(t,e){return t||t===0?e(t):e},Ga=function(t,e,n){return n<t?t:n>e?e:n},Dn=function(t,e){return!vn(t)||!(e=lx.exec(t))?"":e[1]},yx=function(t,e,n){return is(n,function(i){return Ga(t,e,i)})},kf=[].slice,Wm=function(t,e){return t&&ar(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ar(t[0]))&&!t.nodeType&&t!==sr},Sx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return vn(i)&&!e||Wm(i,1)?(s=n).push.apply(s,Li(i)):n.push(i)})||n},Li=function(t,e,n){return qe&&!e&&qe.selector?qe.selector(t):vn(t)&&!n&&(Ff||!vo())?kf.call((e||Jf).querySelectorAll(t),0):Bn(t)?Sx(t,n):Wm(t)?kf.call(t,0):t?[t]:[]},Hf=function(t){return t=Li(t)[0]||za("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Li(e,n.querySelectorAll?n:n===t?za("Invalid scope")||Jf.createElement("div"):t)}},Xm=function(t){return t.sort(function(){return .5-Math.random()})},Ym=function(t){if(nn(t))return t;var e=ar(t)?t:{each:t},n=Ns(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return vn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,p){var _=(p||e).length,m=o[_],g,M,w,v,S,T,E,x,b;if(!m){if(b=e.grid==="auto"?0:(e.grid||[1,Ii])[1],!b){for(E=-Ii;E<(E=p[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(m=o[_]=[],g=l?Math.min(b,_)*h-.5:i%b,M=b===Ii?0:l?_*d/b-.5:i/b|0,E=0,x=Ii,T=0;T<_;T++)w=T%b-g,v=M-(T/b|0),m[T]=S=c?Math.abs(c==="y"?v:w):Im(w*w+v*v),S>E&&(E=S),S<x&&(x=S);i==="random"&&Xm(m),m.max=E-x,m.min=x,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Dn(e.amount||e.each)||0,n=n&&_<0?Nx(n):n}return _=(m[u]-m.min)/m.max||0,Ke(m.b+(n?n(_):_)*m.v)+m.u}},Vf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ke(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ar(n)?0:Dn(n))}},qm=function(t,e){var n=Bn(t),i,s;return!n&&ar(t)&&(i=n=t.radius||Ii,t.values?(t=Li(t.values),(s=!Ar(t[0]))&&(i*=i)):t=Vf(t.increment)),is(e,n?nn(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ii,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||Ar(o)?h:h+Dn(o)}:Vf(t))},Zm=function(t,e,n,i){return is(Bn(t)?!e:n===!0?!!(n=0):!i,function(){return Bn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Mx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},bx=function(t,e){return function(n){return t(parseFloat(n))+(e||Dn(n))}},Tx=function(t,e,n){return $m(t,e,0,1,n)},Jm=function(t,e,n){return is(n,function(i){return t[~~e(i)]})},wx=function r(t,e,n){var i=e-t;return Bn(t)?Jm(t,r(0,t.length),e):is(n,function(s){return(i+(s-t)%i)%i+t})},Ex=function r(t,e,n){var i=e-t,s=i*2;return Bn(t)?Jm(t,r(0,t.length-1),e):is(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},xo=function(t){return t.replace(sx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ox);return Zm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},$m=function(t,e,n,i,s){var o=e-t,a=i-n;return is(s,function(l){return n+((l-t)/o*a||0)})},Ax=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=vn(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Bn(t)&&!Bn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(p){p*=d;var _=Math.min(u,~~p);return h[_](p-_)},n=e}else i||(t=mo(Bn(t)?[]:{},t));if(!h){for(l in e)id.call(a,t,l,"get",e[l]);s=function(p){return ld(p,a)||(o?t.p:t)}}}return is(n,s)},Am=function(t,e,n){var i=t.labels,s=Ii,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},pi=function(t,e,n){var i=t.vars,s=i[e],o=qe,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ts.length&&Lc(),a&&(qe=a),h=l?s.apply(c,l):s.call(c),qe=o,h},Da=function(t){return ns(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ln),t.progress()<1&&pi(t,"onInterrupt"),t},po,Km=[],Qm=function(t){if(t)if(t=!t.name&&t.default||t,Yf()||t.headless){var e=t.name,n=nn(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ka,render:ld,add:id,kill:Wx,modifier:Gx,rawVars:0},o={targetTest:0,get:0,getSetter:Hc,aliases:{},register:0};if(vo(),t!==i){if(oi[e])return;gi(i,gi(Dc(t,s),o)),mo(i.prototype,mo(s,Dc(t,o))),oi[i.prop=e]=i,t.targetTest&&(Rc.push(i),$f[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Um(e,i),t.register&&t.register(zn,i,Jn)}else Km.push(t)},Oe=255,Na={aqua:[0,Oe,Oe],lime:[0,Oe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Oe],navy:[0,0,128],white:[Oe,Oe,Oe],olive:[128,128,0],yellow:[Oe,Oe,0],orange:[Oe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Oe,0,0],pink:[Oe,192,203],cyan:[0,Oe,Oe],transparent:[Oe,Oe,Oe,0]},Pf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Oe+.5|0},jm=function(t,e,n){var i=t?Ar(t)?[t>>16,t>>8&Oe,t&Oe]:0:Na.black,s,o,a,l,c,h,d,u,f,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Na[t])i=Na[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Oe,i&Oe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Oe,t&Oe]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Mm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Pf(l+1/3,s,o),i[1]=Pf(l,s,o),i[2]=Pf(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(qf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Mm)||Na.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/Oe,o=i[1]/Oe,a=i[2]/Oe,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},t0=function(t){var e=[],n=[],i=-1;return t.split(Er).forEach(function(s){var o=s.match(Fs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Cm=function(t,e,n){var i="",s=(t+i).match(Er),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=jm(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=t0(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Er,"1").split(Fs),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Er),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},Er=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Na)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Cx=/hsl[a]?\(/,ed=function(t){var e=t.join(" "),n;if(Er.lastIndex=0,Er.test(e))return n=Cx.test(e),t[1]=Cm(t[1],n),t[0]=Cm(t[0],n,t0(t[1])),!0},Ha,ai=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,p=function _(m){var g=r()-i,M=m===!0,w,v,S,T;if((g>t||g<0)&&(n+=g-e),i+=g,S=i-n,w=S-o,(w>0||M)&&(T=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,o+=w+(w>=s?4:s-w),v=1),M||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](S,u,T,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Dm&&(!Ff&&Yf()&&(sr=Ff=window,Jf=sr.document||{},mi.gsap=zn,(sr.gsapVersions||(sr.gsapVersions=[])).push(zn.version),Nm(Ic||sr.GreenSockGlobals||!sr.gsap&&sr||{}),Km.forEach(Qm)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Ha=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ha=0,c=ka},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,g,M){var w=g?function(v,S,T,E){m(v,S,T,E),d.remove(w)}:m;return d.remove(m),a[M?"unshift":"push"](w),vo(),w},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),vo=function(){return!Ha&&ai.wake()},xe={},Rx=/^[\d.\-M][\d.\-,\s]/,Px=/["']/g,Ix=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Px,"").trim():+c,i=l.substr(a+1).trim();return e},Lx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Dx=function(t){var e=(t+"").split("("),n=xe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ix(e[1])]:Lx(t).split(",").map(Bm)):xe._CE&&Rx.test(t)?xe._CE("",t):n},Nx=function(t){return function(e){return 1-t(1-e)}},Ns=function(t,e){return t&&(nn(t)?t:xe[t]||Dx(t))||e},Bs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Zn(t,function(a){xe[a]=mi[a]=s,xe[o=a.toLowerCase()]=n;for(var l in s)xe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=xe[a+"."+l]=s[l]}),s},e0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},If=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Uf*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*rx((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:e0(a);return s=Uf/s,l.config=function(c,h){return r(t,c,h)},l},Lf=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:e0(n);return i.config=function(s){return r(t,s)},i};Zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Bs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});xe.Linear.easeNone=xe.none=xe.Linear.easeIn;Bs("Elastic",If("in"),If("out"),If());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Bs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Bs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Bs("Circ",function(r){return-(Im(1-r*r)-1)});Bs("Sine",function(r){return r===1?1:-ix(r*ex)+1});Bs("Back",Lf("in"),Lf("out"),Lf());xe.SteppedEase=xe.steps=mi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Be;return function(a){return((i*Ga(0,o,a)|0)+s)*n}}};Ba.ease=xe["quad.out"];Zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Kf+=r+","+r+"Params,"});var nd=function(t,e){this.id=nx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:jf,this.set=e?e.getSetter:Hc},Va=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,_o(this,+e.duration,1,1),this.data=e.data,qe&&(this._ctx=qe,qe.data.push(this)),Ha||ai.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,_o(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(vo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kc(this,n),!s._dp||s.parent||Hm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&or(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Be||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Om(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?go(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Be?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Nc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Be?0:this._rts,this.totalTime(Ga(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),zc(this),px(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Be&&(this._tTime-=Be)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ke(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&or(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(li(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=hx);var i=Ln;return Ln=n,td(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ln=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Em(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Em(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Pi(this,n),li(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,li(i)),this._dur||(this._zTime=-Be),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Be:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Be,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Be)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=nn(n)?n:zm,l=function(){var h=i.then;i.then=null,s&&s(),nn(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Da(this)},r})();gi(Va.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Be,_prom:0,_ps:!1,_rts:1});var On=(function(r){Pm(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=li(n.sortChildren),Qe&&or(n.parent||Qe,wr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Vm(wr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Fa(0,arguments,this),this},e.from=function(i,s,o){return Fa(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Fa(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Ua(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ln(i,s,Pi(this,o),1),this},e.call=function(i,s,o){return or(this,ln.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ln(i,o,Pi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Ua(o).immediateRender=li(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,Ua(a).immediateRender=li(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ke(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,p,_,m,g,M,w,v,S,T,E;if(this!==Qe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,v=this._start,w=this._ts,g=!w,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=Ke(h%m),h===l?(_=this._repeat,u=c):(S=Ke(h/m),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=go(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),T&&_&1&&(u=c-u,E=1),_!==S&&!this._lock){var x=T&&S&1,b=x===(T&&_&1);if(_<S&&(x=!x),a=x?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Ke(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&pi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=vx(this,Ke(a),Ke(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!S&&(pi(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){M=0,p&&(h+=this._zTime=-Be);break}}f=p}else{f=this._last;for(var C=i<0?i:u;f;){if(p=f._prev,(f._act||C<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,o||Ln&&td(f)),u!==this._time||!this._ts&&!g){M=0,p&&(h+=this._zTime=C?-Be:Be);break}}f=p}}if(M&&!s&&(this.pause(),M.render(u>=a?0:-Be)._zTime=u>=a?1:-1,this._ts))return this._start=v,zc(this),this.render(i,s,o);this._onUpdate&&!s&&pi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ns(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(pi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Ar(s)||(s=Pi(this,s,i)),!(i instanceof Va)){if(Bn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(vn(i))return this.addLabel(i,s);if(nn(i))i=ln.delayedCall(0,i);else return this}return this!==i?or(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ii);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ln?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return vn(i)?this.removeLabel(i):nn(i)?this.killTweensOf(i):(i.parent===this&&Bc(this,i),i===this._recent&&(this._recent=this._last),Ds(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ke(ai.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Pi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ln.delayedCall(0,s||ka,o);return a.data="isPause",this._hasPause=1,or(this,a,Pi(this,i))},e.removePause=function(i){var s=this._first;for(i=Pi(this,i);s;)s._start===i&&s.data==="isPause"&&ns(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)jr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Li(i),l=this._first,c=Ar(s),h;l;)l instanceof ln?ux(l._targets,a)&&(c?(!jr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Pi(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=ln.to(o,gi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Be,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&_o(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},s));return u?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,gi({startAt:{time:Pi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Am(this,Pi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Am(this,Pi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Be)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ke(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ds(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ds(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ii,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,or(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ke(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;_o(o,o===Qe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Qe._ts&&(Om(Qe,Nc(i,Qe)),Fm=ai.frame),ai.frame>=bm){bm+=ci.autoSleep||120;var s=Qe._first;if((!s||!s._ts)&&ci.autoSleep&&ai._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ai.sleep()}}},t})(Va);gi(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ux=function(t,e,n,i,s,o,a){var l=new Jn(this._pt,t,e,0,1,ad,null,s),c=0,h=0,d,u,f,p,_,m,g,M;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=xo(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),u=n.match(Cf)||[];d=Cf.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?Os(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Cf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Zf.test(i)||g)&&(l.e=0),this._pt=l,l},id=function(t,e,n,i,s,o,a,l,c,h){nn(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:nn(d)?c?t[e.indexOf("set")||!nn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=nn(d)?c?kx:r0:od,p;if(vn(i)&&(~i.indexOf("random(")&&(i=xo(i)),i.charAt(1)==="="&&(p=Os(u,i)+(Dn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||Gf)return!isNaN(u*i)&&i!==""?(p=new Jn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?Vx:s0,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&Oc(e,i),Ux.call(this,t,e,u,i,f,l||ci.stringFilter,c))},Fx=function(t,e,n,i,s){if(nn(t)&&(t=Oa(t,s,e,n,i)),!ar(t)||t.style&&t.nodeType||Bn(t)||Lm(t))return vn(t)?Oa(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Oa(t[a],s,e,n,i);return o},rd=function(t,e,n,i,s,o){var a,l,c,h;if(oi[t]&&(a=new oi[t]).init(s,a.rawVars?e[t]:Fx(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Jn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==po))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},jr,Gf,sd=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,M=g&&g.data==="nested"?g.vars.targets:m,w=t._overwrite==="auto"&&!Xf,v=t.timeline,S=i.easeReverse||d,T,E,x,b,C,F,I,D,P,N,V,O,Z;if(v&&(!u||!s)&&(s="none"),t._ease=Ns(s,Ba.ease),t._rEase=S&&(Ns(S)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(D=m[0]?es(m[0]).harness:0,O=D&&i[D.prop],T=Dc(i,$f),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&p?Cc:cx),_._lazy=0),o){if(ns(t._startAt=ln.set(m,gi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&li(l),startAt:null,delay:0,onUpdate:c&&function(){return pi(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ln||!a&&!f)&&t._startAt.revert(Cc),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),x=gi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&li(l),immediateRender:a,stagger:0,parent:g},T),O&&(x[D.prop]=O),ns(t._startAt=ln.set(m,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ln?t._startAt.revert(Cc):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Be,Be);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&li(l)||l&&!p,E=0;E<m.length;E++){if(C=m[E],I=C._gsap||Qf(m)[E]._gsap,t._ptLookup[E]=N={},Of[I.id]&&ts.length&&Lc(),V=M===m?E:M.indexOf(C),D&&(P=new D).init(C,O||T,t,V,M)!==!1&&(t._pt=b=new Jn(t._pt,C,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(H){N[H]=b}),P.priority&&(F=1)),!D||O)for(x in T)oi[x]&&(P=rd(x,T,t,V,C,M))?P.priority&&(F=1):N[x]=b=id.call(t,C,x,"get",T[x],V,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(C,t._op[E]),w&&t._pt&&(jr=t,Qe.killTweensOf(C,N,t.globalTime(e)),Z=!t.parent,jr=0),t._pt&&l&&(Of[I.id]=1)}F&&cd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Z,u&&e<=0&&v.render(Ii,!0,!0)},Ox=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Gf=1,t.vars[e]="+=0",sd(t,a),Gf=0,l?za(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=rn(n)+Dn(d.e)),d.b&&(d.b=h.s+Dn(d.b))},Bx=function(t,e){var n=t[0]?es(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=mo({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},zx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Bn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Oa=function(t,e,n,i,s){return nn(t)?t.call(e,n,i,s):vn(t)&&~t.indexOf("random(")?xo(t):t},n0=Kf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",i0={};Zn(n0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return i0[r]=1});var ln=(function(r){Pm(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ua(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||Qe,M=(Bn(n)||Lm(n)?Ar(n[0]):"length"in i)?[n]:Li(n),w,v,S,T,E,x,b,C;if(a._targets=M.length?Qf(M):za("GSAP target "+n+" not found. https://gsap.com",!ci.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||Ac(c)||Ac(h)){i=a.vars;var F=i.easeReverse||i.yoyoEase;if(w=a.timeline=new On({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:M}),w.kill(),w.parent=w._dp=wr(a),w._start=0,u||Ac(c)||Ac(h)){if(T=M.length,b=u&&Ym(u),ar(u))for(E in u)~n0.indexOf(E)&&(C||(C={}),C[E]=u[E]);for(v=0;v<T;v++)S=Dc(i,i0),S.stagger=0,F&&(S.easeReverse=F),C&&mo(S,C),x=M[v],S.duration=+Oa(c,wr(a),v,x,M),S.delay=(+Oa(h,wr(a),v,x,M)||0)-a._delay,!u&&T===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),w.to(x,S,b?b(v,x,M):0),w._ease=xe.none;w.duration()?c=h=0:a.timeline=0}else if(p){Ua(gi(w.vars.defaults,{ease:"none"})),w._ease=Ns(p.ease||i.ease||"none");var I=0,D,P,N;if(Bn(p))p.forEach(function(V){return w.to(M,V,">")}),w.duration();else{S={};for(E in p)E==="ease"||E==="easeEach"||zx(E,p[E],S,p.easeEach);for(E in S)for(D=S[E].sort(function(V,O){return V.t-O.t}),I=0,v=0;v<D.length;v++)P=D[v],N={ease:P.e,duration:(P.t-(v?D[v-1].t:0))/100*c},N[E]=P.v,w.to(M,N,I),I+=N.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return f===!0&&!Xf&&(jr=wr(a),Qe.killTweensOf(M),jr=0),or(g,wr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ke(g._time)&&li(d)&&mx(wr(a))&&g.data!=="nested")&&(a._tTime=-Be,a.render(Math.max(0,-h)||0)),m&&Vm(wr(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Be&&!h?l:i<Be?0:i,u,f,p,_,m,g,M,w;if(!c)_x(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Ke(d%_),d===l?(p=this._repeat,u=c):(m=Ke(d/_),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=go(this._tTime,_),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Ke(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Gm(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=u<a;if(v!==this._inv){var S=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(u/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(pi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;w&&w.render(i<0?i:w._dur*w._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Bf(this,i,s,o),pi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&pi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Bf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ns(this,1),!s&&!(h&&!a)&&(d||a||g)&&(pi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Ha||ai.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||sd(this,c),h=this._ease(c/this._dur),Ox(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(kc(this,0),this.parent||km(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Da(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,jr&&jr.vars.overwrite!==!0)._first||Da(this),this.parent&&o!==this.timeline.totalDuration()&&_o(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Li(i):a,c=this._ptLookup,h=this._pt,d,u,f,p,_,m,g;if((!s||s==="all")&&dx(a,l))return s==="all"&&(this._pt=0),Da(this);for(d=this._op=this._op||[],s!=="all"&&(vn(s)&&(_={},Zn(s,function(M){return _[M]=1}),s=_),s=Bx(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,p=u,f={}):(f=d[g]=d[g]||{},p=s);for(_ in p)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Bc(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Da(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Fa(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Fa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Qe.killTweensOf(i,s,o)},t})(Va);gi(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zn("staggerTo,staggerFrom,staggerFromTo",function(r){ln[r]=function(){var t=new On,e=kf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var od=function(t,e,n){return t[e]=n},r0=function(t,e,n){return t[e](n)},kx=function(t,e,n,i){return t[e](i.fp,n)},Hx=function(t,e,n){return t.setAttribute(e,n)},Hc=function(t,e){return nn(t[e])?r0:Fc(t[e])&&t.setAttribute?Hx:od},s0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Vx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ad=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ld=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Gx=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Wx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Bc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Xx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},cd=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Jn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||s0,this.d=l||this,this.set=c||od,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Xx,this.m=n,this.mt=s,this.tween=i},r})();Zn(Kf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return $f[r]=1});mi.TweenMax=mi.TweenLite=ln;mi.TimelineLite=mi.TimelineMax=On;Qe=new On({sortChildren:!1,defaults:Ba,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ci.stringFilter=ed;var Us=[],Pc={},Yx=[],Rm=0,qx=0,Df=function(t){return(Pc[t]||Yx).map(function(e){return e()})},Wf=function(){var t=Date.now(),e=[];t-Rm>2&&(Df("matchMediaInit"),Us.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=sr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Df("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Rm=t,Df("matchMedia"))},o0=(function(){function r(e,n){this.selector=n&&Hf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=qx++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){nn(n)&&(s=i,i=n,n=nn);var o=this,a=function(){var c=qe,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Hf(s)),qe=o,d=i.apply(o,arguments),nn(d)&&o._r.push(d),qe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===nn?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=qe;qe=null,n(this),qe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ln&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ln)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Us.length;o--;)Us[o].id===this.id&&Us.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),Zx=(function(){function r(e){this.contexts=[],this.scope=e,qe&&qe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ar(n)||(n={matches:n});var o=new o0(0,s||this.scope),a=o.conditions={},l,c,h;qe&&!o.selector&&(o.selector=qe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=sr.matchMedia(n[c]),l&&(Us.indexOf(o)<0&&Us.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Wf):l.addEventListener("change",Wf)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Uc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Qm(i)})},timeline:function(t){return new On(t)},getTweensOf:function(t,e){return Qe.getTweensOf(t,e)},getProperty:function(t,e,n,i){vn(t)&&(t=Li(t)[0]);var s=es(t||{}).get,o=n?zm:Bm;return n==="native"&&(n=""),t&&(e?o((oi[e]&&oi[e].get||s)(t,e,n,i)):function(a,l,c){return o((oi[a]&&oi[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Li(t),t.length>1){var i=t.map(function(h){return zn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=oi[e],a=es(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;po._pt=0,d.init(t,n?h+n:h,po,0,[t]),d.render(1,d),po._pt&&ld(1,po)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=zn.to(t,gi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Qe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ns(t.ease,Ba.ease)),Tm(Ba,t||{})},config:function(t){return Tm(ci,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!oi[a]&&!mi[a]&&za(e+" effect requires "+a+" plugin.")}),Rf[e]=function(a,l,c){return n(Li(a),gi(l||{},s),c)},o&&(On.prototype[e]=function(a,l,c){return this.add(Rf[e](a,ar(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){xe[t]=Ns(e)},parseEase:function(t,e){return arguments.length?Ns(t,e):xe},getById:function(t){return Qe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new On(t),i,s;for(n.smoothChildTiming=li(t.smoothChildTiming),Qe.remove(n),n._dp=0,n._time=n._tTime=Qe._time,i=Qe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ln&&i.vars.onComplete===i._targets[0]))&&or(n,i,i._start-i._delay),i=s;return or(Qe,n,0),n},context:function(t,e){return t?new o0(t,e):qe},matchMedia:function(t){return new Zx(t)},matchMediaRefresh:function(){return Us.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Wf()},addEventListener:function(t,e){var n=Pc[t]||(Pc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Pc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:wx,wrapYoyo:Ex,distribute:Ym,random:Zm,snap:qm,normalize:Tx,getUnit:Dn,clamp:yx,splitColor:jm,toArray:Li,selector:Hf,mapRange:$m,pipe:Mx,unitize:bx,interpolate:Ax,shuffle:Xm},install:Nm,effects:Rf,ticker:ai,updateRoot:On.updateRoot,plugins:oi,globalTimeline:Qe,core:{PropTween:Jn,globals:Um,Tween:ln,Timeline:On,Animation:Va,getCache:es,_removeLinkedListItem:Bc,reverting:function(){return Ln},context:function(t){return t&&qe&&(qe.data.push(t),t._ctx=qe),qe},suppressOverwrites:function(t){return Xf=t}}};Zn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Uc[r]=ln[r]});ai.add(On.updateRoot);po=Uc.to({},{duration:0});var Jx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},$x=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Jx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Nf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(vn(s)&&(l={},Zn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}$x(a,s)}}}},zn=Uc.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ln?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Nf("roundProps",Vf),Nf("modifiers"),Nf("snap",qm))||Uc;ln.version=On.version=zn.version="3.15.0";Dm=1;Yf()&&vo();var Kx=xe.Power0,Qx=xe.Power1,jx=xe.Power2,ty=xe.Power3,ey=xe.Power4,ny=xe.Linear,iy=xe.Quad,ry=xe.Cubic,sy=xe.Quart,oy=xe.Quint,ay=xe.Strong,ly=xe.Elastic,cy=xe.Back,hy=xe.SteppedEase,uy=xe.Bounce,fy=xe.Sine,dy=xe.Expo,py=xe.Circ;var a0,rs,So,md,Vs,my,l0,gd,gy=function(){return typeof window!="undefined"},Rr={},Hs=180/Math.PI,Mo=Math.PI/180,yo=Math.atan2,c0=1e8,_d=/([A-Z])/g,_y=/(left|right|width|margin|padding|x)/i,vy=/[\s,\(]\S/,lr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ud=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},xy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},yy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Sy=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},My=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},_0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},v0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},by=function(t,e,n){return t.style[e]=n},Ty=function(t,e,n){return t.style.setProperty(e,n)},wy=function(t,e,n){return t._gsap[e]=n},Ey=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ay=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Cy=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},je="transform",hi=je+"Origin",Ry=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Rr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=lr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Cr(i,a)}):this.tfm[t]=o.x?o[t]:Cr(i,t),t===hi&&(this.tfm.zOrigin=o.zOrigin);else return lr.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(je)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hi,e,"")),t=je}(s||e)&&this.props.push(t,e,s[t])},x0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Py=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(_d,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=gd(),(!s||!s.isStart)&&!n[je]&&(x0(n),i.zOrigin&&n[hi]&&(n[hi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},y0=function(t,e){var n={target:t,props:[],revert:Py,save:Ry};return t._gsap||zn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},S0,fd=function(t,e){var n=rs.createElementNS?rs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):rs.createElement(t);return n&&n.style?n:rs.createElement(t)},_i=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(_d,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,bo(e)||e,1)||""},h0="O,Moz,ms,Ms,Webkit".split(","),bo=function(t,e,n){var i=e||Vs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(h0[o]+t in s););return o<0?null:(o===3?"ms":o>=0?h0[o]:"")+t},dd=function(){gy()&&window.document&&(a0=window,rs=a0.document,So=rs.documentElement,Vs=fd("div")||{style:{}},my=fd("div"),je=bo(je),hi=je+"Origin",Vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",S0=!!bo("perspective"),gd=zn.core.reverting,md=1)},u0=function(t){var e=t.ownerSVGElement,n=fd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),So.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),So.removeChild(n),s},f0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},M0=function(t){var e,n;try{e=t.getBBox()}catch{e=u0(t),n=1}return e&&(e.width||e.height)||n||(e=u0(t)),e&&!e.width&&!e.x&&!e.y?{x:+f0(t,["x","cx","x1"])||0,y:+f0(t,["y","cy","y1"])||0,width:0,height:0}:e},b0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&M0(t))},os=function(t,e){if(e){var n=t.style,i;e in Rr&&e!==hi&&(e=je),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(_d,"-$1").toLowerCase())):n.removeAttribute(e)}},ss=function(t,e,n,i,s,o){var a=new Jn(t._pt,e,n,0,1,o?v0:_0);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},d0={deg:1,rad:1,turn:1},Iy={grid:1,flex:1},as=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Vs.style,l=_y.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",p,_,m,g;if(i===o||!s||d0[i]||d0[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),g=t.getCTM&&b0(t),(f||o==="%")&&(Rr[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],rn(f?s/p*d:s/100*p);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===rs||!_.appendChild)&&(_=rs.body),m=_._gsap,m&&f&&m.width&&l&&m.time===ai.time&&!m.uncache)return rn(s/m.width*d);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,p=t[h],M?t.style[e]=M:os(t,e)}else(f||o==="%")&&!Iy[_i(_,"display")]&&(a.position=_i(t,"position")),_===t&&(a.position="static"),_.appendChild(Vs),p=Vs[h],_.removeChild(Vs),a.position="absolute";return l&&f&&(m=es(_),m.time=ai.time,m.width=_[h]),rn(u?p*s/d:p&&s?d/p*s:0)},Cr=function(t,e,n,i){var s;return md||dd(),e in lr&&e!=="transform"&&(e=lr[e],~e.indexOf(",")&&(e=e.split(",")[0])),Rr[e]&&e!=="transform"?(s=Ya(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Gc(_i(t,hi))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Vc[e]&&Vc[e](t,e,n)||_i(t,e)||jf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?as(t,e,s,n)+n:s},Ly=function(t,e,n,i){if(!n||n==="none"){var s=bo(e,t,1),o=s&&_i(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=_i(t,"borderTopColor"))}var a=new Jn(this._pt,t.style,e,0,1,ad),l=0,c=0,h,d,u,f,p,_,m,g,M,w,v,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=_i(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=_i(t,e)||i,_?t.style[e]=_:os(t,e)),h=[n,i],ed(h),n=h[0],i=h[1],u=n.match(Fs)||[],S=i.match(Fs)||[],S.length){for(;d=Fs.exec(i);)m=d[0],M=i.substring(l,d.index),p?p=(p+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(p=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=Os(f,m)+v),g=parseFloat(m),w=m.substr((g+"").length),l=Fs.lastIndex-w.length,w||(w=w||ci.units[e]||v,l===i.length&&(i+=w,a.e+=w)),v!==w&&(f=as(t,e,_,w)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:g-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?v0:_0;return Zf.test(i)&&(a.e=0),this._pt=a,a},p0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Dy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=p0[n]||n,e[1]=p0[i]||i,e.join(" ")},Ny=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Rr[a]&&(l=1,a=a==="transformOrigin"?hi:je),os(n,a);l&&(os(n,je),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ya(n,1),o.uncache=1,x0(i)))}},Vc={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Jn(t._pt,e,n,0,0,Ny);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Xa=[1,0,0,1,0,0],T0={},w0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},m0=function(t){var e=_i(t,je);return w0(e)?Xa:e.substr(7).match(qf).map(rn)},vd=function(t,e){var n=t._gsap||es(t),i=t.style,s=m0(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xa:s):(s===Xa&&!t.offsetParent&&t!==So&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,So.appendChild(t)),s=m0(t),l?i.display=l:os(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):So.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},pd=function(t,e,n,i,s,o){var a=t._gsap,l=s||vd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],M=l[5],w=e.split(" "),v=parseFloat(w[0])||0,S=parseFloat(w[1])||0,T,E,x,b;n?l!==Xa&&(E=f*m-p*_)&&(x=v*(m/E)+S*(-_/E)+(_*M-m*g)/E,b=v*(-p/E)+S*(f/E)-(f*M-p*g)/E,v=x,S=b):(T=M0(t),v=T.x+(~w[0].indexOf("%")?v/100*T.width:v),S=T.y+(~(w[1]||w[0]).indexOf("%")?S/100*T.height:S)),i||i!==!1&&a.smooth?(g=v-c,M=S-h,a.xOffset=d+(g*f+M*_)-g,a.yOffset=u+(g*p+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[hi]="0px 0px",o&&(ss(o,a,"xOrigin",c,v),ss(o,a,"yOrigin",h,S),ss(o,a,"xOffset",d,a.xOffset),ss(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+S)},Ya=function(t,e){var n=t._gsap||new nd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=_i(t,hi)||"0",h,d,u,f,p,_,m,g,M,w,v,S,T,E,x,b,C,F,I,D,P,N,V,O,Z,H,R,Y,ft,yt,Et,Nt;return h=d=u=_=m=g=M=w=v=0,f=p=1,n.svg=!!(t.getCTM&&b0(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[je]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[je]!=="none"?l[je]:"")),i.scale=i.rotate=i.translate="none"),E=vd(t,n.svg),n.svg&&(n.uncache?(Z=t.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),pd(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,E)),S=n.xOrigin||0,T=n.yOrigin||0,E!==Xa&&(F=E[0],I=E[1],D=E[2],P=E[3],h=N=E[4],d=V=E[5],E.length===6?(f=Math.sqrt(F*F+I*I),p=Math.sqrt(P*P+D*D),_=F||I?yo(I,F)*Hs:0,M=D||P?yo(D,P)*Hs+_:0,M&&(p*=Math.abs(Math.cos(M*Mo))),n.svg&&(h-=S-(S*F+T*D),d-=T-(S*I+T*P))):(Nt=E[6],yt=E[7],R=E[8],Y=E[9],ft=E[10],Et=E[11],h=E[12],d=E[13],u=E[14],x=yo(Nt,ft),m=x*Hs,x&&(b=Math.cos(-x),C=Math.sin(-x),O=N*b+R*C,Z=V*b+Y*C,H=Nt*b+ft*C,R=N*-C+R*b,Y=V*-C+Y*b,ft=Nt*-C+ft*b,Et=yt*-C+Et*b,N=O,V=Z,Nt=H),x=yo(-D,ft),g=x*Hs,x&&(b=Math.cos(-x),C=Math.sin(-x),O=F*b-R*C,Z=I*b-Y*C,H=D*b-ft*C,Et=P*C+Et*b,F=O,I=Z,D=H),x=yo(I,F),_=x*Hs,x&&(b=Math.cos(x),C=Math.sin(x),O=F*b+I*C,Z=N*b+V*C,I=I*b-F*C,V=V*b-N*C,F=O,N=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=rn(Math.sqrt(F*F+I*I+D*D)),p=rn(Math.sqrt(V*V+Nt*Nt)),x=yo(N,V),M=Math.abs(x)>2e-4?x*Hs:0,v=Et?1/(Et<0?-Et:Et):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!w0(_i(t,je)),O&&t.setAttribute("transform",O))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=rn(f),n.scaleY=rn(p),n.rotation=rn(_)+a,n.rotationX=rn(m)+a,n.rotationY=rn(g)+a,n.skewX=M+a,n.skewY=w+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[hi]=Gc(c)),n.xOffset=n.yOffset=0,n.force3D=ci.force3D,n.renderTransform=n.svg?Fy:S0?E0:Uy,n.uncache=0,n},Gc=function(t){return(t=t.split(" "))[0]+" "+t[1]},hd=function(t,e,n){var i=Dn(e);return rn(parseFloat(e)+parseFloat(as(t,"x",n+"px",i)))+i},Uy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,E0(t,e)},zs="0deg",Wa="0px",ks=") ",E0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,M=n.target,w=n.zOrigin,v="",S=g==="auto"&&t&&t!==1||g===!0;if(w&&(d!==zs||h!==zs)){var T=parseFloat(h)*Mo,E=Math.sin(T),x=Math.cos(T),b;T=parseFloat(d)*Mo,b=Math.cos(T),o=hd(M,o,E*b*-w),a=hd(M,a,-Math.sin(T)*-w),l=hd(M,l,x*b*-w+w)}m!==Wa&&(v+="perspective("+m+ks),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(S||o!==Wa||a!==Wa||l!==Wa)&&(v+=l!==Wa||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ks),c!==zs&&(v+="rotate("+c+ks),h!==zs&&(v+="rotateY("+h+ks),d!==zs&&(v+="rotateX("+d+ks),(u!==zs||f!==zs)&&(v+="skew("+u+", "+f+ks),(p!==1||_!==1)&&(v+="scale("+p+", "+_+ks),M.style[je]=v||"translate(0, 0)"},Fy=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,M=n.forceCSS,w=parseFloat(o),v=parseFloat(a),S,T,E,x,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Mo,c*=Mo,S=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=Mo,b=Math.tan(c-h),b=Math.sqrt(1+b*b),E*=b,x*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),S*=b,T*=b)),S=rn(S),T=rn(T),E=rn(E),x=rn(x)):(S=d,x=u,T=E=0),(w&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(w=as(f,"x",o,"px"),v=as(f,"y",a,"px")),(p||_||m||g)&&(w=rn(w+p-(p*S+_*E)+m),v=rn(v+_-(p*T+_*x)+g)),(i||s)&&(b=f.getBBox(),w=rn(w+i/100*b.width),v=rn(v+s/100*b.height)),b="matrix("+S+","+T+","+E+","+x+","+w+","+v+")",f.setAttribute("transform",b),M&&(f.style[je]=b)},Oy=function(t,e,n,i,s){var o=360,a=vn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Hs:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*c0)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*c0)%o-~~(c/o)*o)),t._pt=u=new Jn(t._pt,e,n,i,c,xy),u.e=h,u.u="deg",t._props.push(n),u},g0=function(t,e){for(var n in e)t[n]=e[n];return t},By=function(t,e,n){var i=g0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[je]=e,a=Ya(n,1),os(n,je),n.setAttribute("transform",c)):(c=getComputedStyle(n)[je],o[je]=e,a=Ya(n,1),o[je]=c);for(l in Rr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Dn(c),p=Dn(h),d=f!==p?as(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new Jn(t._pt,a,l,d,u-d,ud),t._pt.u=p||0,t._props.push(l));g0(a,i)};Zn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Vc[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return Cr(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,_){return f[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var xd={name:"css",register:dd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,p,_,m,g,M,w,v,S,T,E,x,b;md||dd(),this.styles=this.styles||y0(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(oi[_]&&rd(_,e,n,i,t,s)))){if(f=typeof h,p=Vc[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=xo(h)),p)p(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Er.lastIndex=0,Er.test(c)||(m=Dn(c),g=Dn(h),g?m!==g&&(c=as(t,_,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],vn(c)&&~c.indexOf("random(")&&(c=xo(c)),Dn(c+"")||c==="auto"||(c+=ci.units[_]||Dn(Cr(t,_))||""),(c+"").charAt(1)==="="&&(c=Cr(t,_))):c=Cr(t,_),u=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),d=parseFloat(h),_ in lr&&(_==="autoAlpha"&&(u===1&&Cr(t,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,a.visibility),ss(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=lr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in Rr,w){if(this.styles.save(_),b=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=_i(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=_i(t,"perspective"),C?t.style.perspective=C:os(t,"perspective")}d=parseFloat(h)}if(v||(S=t._gsap,S.renderTransform&&!e.parseTransform||Ya(t,e.parseTransform),T=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new Jn(this._pt,a,je,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new Jn(this._pt,S,"scaleY",S.scaleY,(M?Os(S.scaleY,M+d):d)-S.scaleY||0,ud),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(hi,0,a[hi]),h=Dy(h),S.svg?pd(t,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&ss(this,S,"zOrigin",S.zOrigin,g),ss(this,a,_,Gc(c),Gc(h)));continue}else if(_==="svgOrigin"){pd(t,h,1,T,0,this);continue}else if(_ in T0){Oy(this,S,_,u,M?Os(u,M+h):h);continue}else if(_==="smoothOrigin"){ss(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){By(this,h,t);continue}}else _ in a||(_=bo(_)||_);if(w||(d||d===0)&&(u||u===0)&&!vy.test(h)&&_ in a)m=(c+"").substr((u+"").length),d||(d=0),g=Dn(h)||(_ in ci.units?ci.units[_]:m),m!==g&&(u=as(t,_,c,g)),this._pt=new Jn(this._pt,w?S:a,_,u,(M?Os(u,M+d):d)-u,!w&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?My:ud),this._pt.u=g||0,w&&b!==h?(this._pt.b=c,this._pt.e=b,this._pt.r=Sy):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=yy);else if(_ in a)Ly.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Oc(_,h);continue}w||(_ in a?x.push(_,0,a[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),o.push(_)}}E&&cd(this)},render:function(t,e){if(e.tween._time||!gd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Cr,aliases:lr,getSetter:function(t,e,n){var i=lr[e];return i&&i.indexOf(",")<0&&(e=i),e in Rr&&e!==hi&&(t._gsap.x||Cr(t,"x"))?n&&l0===n?e==="scale"?Ey:wy:(l0=n||{})&&(e==="scale"?Ay:Cy):t.style&&!Fc(t.style[e])?by:~e.indexOf("-")?Ty:Hc(t,e)},core:{_removeProperty:os,_getMatrix:vd}};zn.utils.checkPrefix=bo;zn.core.getStyleSaver=y0;(function(r,t,e,n){var i=Zn(r+","+t+","+e,function(s){Rr[s]=1});Zn(t,function(s){ci.units[s]="deg",T0[s]=1}),lr[i[13]]=r+","+t,Zn(n,function(s){var o=s.split(":");lr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ci.units[r]="px"});zn.registerPlugin(xd);var Pe=zn.registerPlugin(xd)||zn,_A=Pe.core.Tween;var ag=0,ip=1,lg=2;var kr=1,cg=2,ra=3,xs=0,Sn=1,jn=2,Ui=0,sa=1,Rn=2,rp=3,sp=4,hg=5;var Qs=100,ug=101,fg=102,dg=103,pg=104,mg=200,gg=201,_g=202,vg=203,op=204,ap=205,xg=206,yg=207,Sg=208,Mg=209,bg=210,Tg=211,wg=212,Eg=213,Ag=214,xh=0,yh=1,Sh=2,Go=3,Mh=4,bh=5,Th=6,wh=7,eu=0,Cg=1,Rg=2,Qi=0,zl=1,kl=2,Hl=3,Hr=4,Vl=5,Gl=6,Wl=7;var lp=300,ys=301,js=302,nu=303,iu=304,Xl=306,Or=1e3,hr=1001,Eh=1002,Cn=1003,Pg=1004;var Yl=1005;var dn=1006,ru=1007;var yr=1008;var di=1009,cp=1010,hp=1011,oa=1012,su=1013,ji=1014,Fi=1015,Mn=1016,ou=1017,au=1018,aa=1020,up=35902,fp=35899,dp=1021,pp=1022,Oi=1023,dr=1026,Ss=1027,lu=1028,cu=1029,Ms=1030,hu=1031;var uu=1033,ql=33776,Zl=33777,Jl=33778,$l=33779,fu=35840,du=35841,pu=35842,mu=35843,gu=36196,_u=37492,vu=37496,xu=37488,yu=37489,Kl=37490,Su=37491,Mu=37808,bu=37809,Tu=37810,wu=37811,Eu=37812,Au=37813,Cu=37814,Ru=37815,Pu=37816,Iu=37817,Lu=37818,Du=37819,Nu=37820,Uu=37821,Fu=36492,Ou=36494,Bu=36495,zu=36283,ku=36284,Ql=36285,Hu=36286;var al=2300,Ah=2301,_h=2302,Xd=2303,Yd=2400,qd=2401,Zd=2402;var Ig=3200;var jl=0,Lg=1,tr="",Ze="srgb",ll="srgb-linear",cl="linear",Me="srgb";var vh=7680;var Dg=519,Ng=512,Ug=513,Fg=514,Vu=515,Og=516,Bg=517,Gu=518,zg=519,mp=35044;var gp="300 es",qi=2e3,Wo=2001;function zy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ky(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function hl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kg(){let r=hl("canvas");return r.style.display="block",r}var A0={},Xo=null;function ul(...r){let t="THREE."+r.shift();Xo?Xo("log",t,...r):console.log(t,...r)}function Hg(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ne(...r){r=Hg(r);let t="THREE."+r.shift();if(Xo)Xo("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function ie(...r){r=Hg(r);let t="THREE."+r.shift();if(Xo)Xo("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function qs(...r){let t=r.join(" ");t in A0||(A0[t]=!0,ne(...r))}function Vg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Gg={[xh]:yh,[Sh]:Th,[Mh]:wh,[Go]:bh,[yh]:xh,[Th]:Sh,[wh]:Mh,[bh]:Go},pr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],C0=1234567,il=Math.PI/180,Yo=180/Math.PI;function fr(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[t&255]+kn[t>>8&255]+"-"+kn[t>>16&15|64]+kn[t>>24&255]+"-"+kn[e&63|128]+kn[e>>8&255]+"-"+kn[e>>16&255]+kn[e>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function he(r,t,e){return Math.max(t,Math.min(e,r))}function _p(r,t){return(r%t+t)%t}function Hy(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Vy(r,t,e){return r!==t?(e-r)/(t-r):0}function rl(r,t,e){return(1-e)*r+e*t}function Gy(r,t,e,n){return rl(r,t,1-Math.exp(-e*n))}function Wy(r,t=1){return t-Math.abs(_p(r,t*2)-t)}function Xy(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Yy(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function qy(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Zy(r,t){return r+Math.random()*(t-r)}function Jy(r){return r*(.5-Math.random())}function $y(r){r!==void 0&&(C0=r);let t=C0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ky(r){return r*il}function Qy(r){return r*Yo}function jy(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function tS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function eS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function nS(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*h,a*c);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ie(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bs={DEG2RAD:il,RAD2DEG:Yo,generateUUID:fr,clamp:he,euclideanModulo:_p,mapLinear:Hy,inverseLerp:Vy,lerp:rl,damp:Gy,pingpong:Wy,smoothstep:Xy,smootherstep:Yy,randInt:qy,randFloat:Zy,randFloatSpread:Jy,seededRandom:$y,degToRad:Ky,radToDeg:Qy,isPowerOfTwo:jy,ceilPowerOfTwo:tS,floorPowerOfTwo:eS,setQuaternionFromProperEuler:nS,normalize:Ie,denormalize:Yi},bp=class bp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bp.prototype.isVector2=!0;var dt=bp,ui=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);g=Math.sin(g*M)/w,a=Math.sin(a*M)/w,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Tp=class Tp{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(R0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(R0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yd.copy(this).projectOnVector(t),this.sub(yd)}reflect(t){return this.sub(yd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tp.prototype.isVector3=!0;var k=Tp,yd=new k,R0=new ui,wp=class wp{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],M=i[1],w=i[4],v=i[7],S=i[2],T=i[5],E=i[8];return s[0]=o*_+a*M+l*S,s[3]=o*m+a*w+l*T,s[6]=o*g+a*v+l*E,s[1]=c*_+h*M+d*S,s[4]=c*m+h*w+d*T,s[7]=c*g+h*v+d*E,s[2]=u*_+f*M+p*S,s[5]=u*m+f*w+p*T,s[8]=u*g+f*v+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sd.makeScale(t,e)),this}rotate(t){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sd.makeRotation(-t)),this}translate(t,e){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wp.prototype.isMatrix3=!0;var oe=wp,Sd=new oe,P0=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I0=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iS(){let r={enabled:!0,workingColorSpace:ll,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Me&&(i.r=Fr(i.r),i.g=Fr(i.g),i.b=Fr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(i.r=Vo(i.r),i.g=Vo(i.g),i.b=Vo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===tr?cl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ll]:{primaries:t,whitePoint:n,transfer:cl,toXYZ:P0,fromXYZ:I0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:P0,fromXYZ:I0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),r}var pe=iS();function Fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var To,Ch=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{To===void 0&&(To=hl("canvas")),To.width=t.width,To.height=t.height;let i=To.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=To}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=hl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Fr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fr(e[n]/255)*255):e[n]=Fr(e[n]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rS=0,qo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Md(i[o].image)):s.push(Md(i[o]))}else s=Md(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Md(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Ch.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}var sS=0,bd=new k,Kn=class r extends pr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=hr,i=hr,s=dn,o=yr,a=Oi,l=di,c=r.DEFAULT_ANISOTROPY,h=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=fr(),this.name="",this.source=new qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bd).x}get height(){return this.source.getSize(bd).y}get depth(){return this.source.getSize(bd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Or:t.x=t.x-Math.floor(t.x);break;case hr:t.x=t.x<0?0:1;break;case Eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Or:t.y=t.y-Math.floor(t.y);break;case hr:t.y=t.y<0?0:1;break;case Eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=lp;Kn.DEFAULT_ANISOTROPY=1;var Ep=class Ep{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,S=(g+1)/2,T=(h+u)/4,E=(d+_)/4,x=(p+m)/4;return w>v&&w>S?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=T/n,s=E/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=E/s,i=x/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ep.prototype.isVector4=!0;var Je=Ep,Rh=class extends pr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Kn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new qo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends Rh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fl=class extends Kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ph=class extends Kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var tu=class tu{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/wo.setFromMatrixColumn(t,0).length(),s=1/wo.setFromMatrixColumn(t,1).length(),o=1/wo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oS,t,aS)}lookAt(t,e,n){let i=this.elements;return vi.subVectors(t,e),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),ls.crossVectors(n,vi),ls.lengthSq()===0&&(Math.abs(n.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),ls.crossVectors(n,vi)),ls.normalize(),Wc.crossVectors(vi,ls),i[0]=ls.x,i[4]=Wc.x,i[8]=vi.x,i[1]=ls.y,i[5]=Wc.y,i[9]=vi.y,i[2]=ls.z,i[6]=Wc.z,i[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],M=n[3],w=n[7],v=n[11],S=n[15],T=i[0],E=i[4],x=i[8],b=i[12],C=i[1],F=i[5],I=i[9],D=i[13],P=i[2],N=i[6],V=i[10],O=i[14],Z=i[3],H=i[7],R=i[11],Y=i[15];return s[0]=o*T+a*C+l*P+c*Z,s[4]=o*E+a*F+l*N+c*H,s[8]=o*x+a*I+l*V+c*R,s[12]=o*b+a*D+l*O+c*Y,s[1]=h*T+d*C+u*P+f*Z,s[5]=h*E+d*F+u*N+f*H,s[9]=h*x+d*I+u*V+f*R,s[13]=h*b+d*D+u*O+f*Y,s[2]=p*T+_*C+m*P+g*Z,s[6]=p*E+_*F+m*N+g*H,s[10]=p*x+_*I+m*V+g*R,s[14]=p*b+_*D+m*O+g*Y,s[3]=M*T+w*C+v*P+S*Z,s[7]=M*E+w*F+v*N+S*H,s[11]=M*x+w*I+v*V+S*R,s[15]=M*b+w*D+v*O+S*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],M=l*f-c*u,w=a*f-c*d,v=a*u-l*d,S=o*f-c*h,T=o*u-l*h,E=o*d-a*h;return e*(_*M-m*w+g*v)-n*(p*M-m*S+g*T)+i*(p*w-_*S+g*E)-s*(p*v-_*T+m*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],M=e*a-n*o,w=e*l-i*o,v=e*c-s*o,S=n*l-i*a,T=n*c-s*a,E=i*c-s*l,x=h*_-d*p,b=h*m-u*p,C=h*g-f*p,F=d*m-u*_,I=d*g-f*_,D=u*g-f*m,P=M*D-w*I+v*F+S*C-T*b+E*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/P;return t[0]=(a*D-l*I+c*F)*N,t[1]=(i*I-n*D-s*F)*N,t[2]=(_*E-m*T+g*S)*N,t[3]=(u*T-d*E-f*S)*N,t[4]=(l*C-o*D-c*b)*N,t[5]=(e*D-i*C+s*b)*N,t[6]=(m*v-p*E-g*w)*N,t[7]=(h*E-u*v+f*w)*N,t[8]=(o*I-a*C+c*x)*N,t[9]=(n*C-e*I-s*x)*N,t[10]=(p*T-_*v+g*M)*N,t[11]=(d*v-h*T-f*M)*N,t[12]=(a*b-o*F-l*x)*N,t[13]=(e*F-n*b+i*x)*N,t[14]=(_*w-p*S-m*M)*N,t[15]=(h*S-d*w+u*M)*N,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,_=o*h,m=o*d,g=a*d,M=l*c,w=l*h,v=l*d,S=n.x,T=n.y,E=n.z;return i[0]=(1-(_+g))*S,i[1]=(f+v)*S,i[2]=(p-w)*S,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(u+g))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(p+w)*E,i[9]=(m-M)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=wo.set(i[0],i[1],i[2]).length(),a=wo.set(i[4],i[5],i[6]).length(),l=wo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Vi.copy(this);let c=1/o,h=1/a,d=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=d,Vi.elements[9]*=d,Vi.elements[10]*=d,e.setFromRotationMatrix(Vi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=qi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===qi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Wo)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=qi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===qi)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Wo)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};tu.prototype.isMatrix4=!0;var be=tu,wo=new k,Vi=new be,oS=new k(0,0,0),aS=new k(1,1,1),ls=new k,Wc=new k,vi=new k,L0=new be,D0=new ui,fi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return L0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(L0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return D0.setFromEuler(this),this.setFromQuaternion(D0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var dl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},lS=0,N0=new k,Eo=new ui,Pr=new be,Xc=new k,qa=new k,cS=new k,hS=new ui,U0=new k(1,0,0),F0=new k(0,1,0),O0=new k(0,0,1),B0={type:"added"},uS={type:"removed"},Ao={type:"childadded",child:null},Td={type:"childremoved",child:null},pn=class r extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new k,e=new fi,n=new ui,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new oe}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Eo.setFromAxisAngle(t,e),this.quaternion.multiply(Eo),this}rotateOnWorldAxis(t,e){return Eo.setFromAxisAngle(t,e),this.quaternion.premultiply(Eo),this}rotateX(t){return this.rotateOnAxis(U0,t)}rotateY(t){return this.rotateOnAxis(F0,t)}rotateZ(t){return this.rotateOnAxis(O0,t)}translateOnAxis(t,e){return N0.copy(t).applyQuaternion(this.quaternion),this.position.add(N0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(U0,t)}translateY(t){return this.translateOnAxis(F0,t)}translateZ(t){return this.translateOnAxis(O0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xc.copy(t):Xc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(qa,Xc,this.up):Pr.lookAt(Xc,qa,this.up),this.quaternion.setFromRotationMatrix(Pr),i&&(Pr.extractRotation(i.matrixWorld),Eo.setFromRotationMatrix(Pr),this.quaternion.premultiply(Eo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(B0),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uS),Td.child=t,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(B0),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,t,cS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,hS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new k(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},fS={type:"move"},Zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Yc={h:0,s:0,l:0};function wd(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=_p(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=wd(o,s,t+1/3),this.g=wd(o,s,t),this.b=wd(o,s,t-1/3)}return pe.colorSpaceToWorking(this,i),this}setStyle(t,e=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let n=Wg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}copyLinearToSRGB(t){return this.r=Vo(t.r),this.g=Vo(t.g),this.b=Vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return pe.workingToColorSpace(Hn.copy(this),t),Math.round(he(Hn.r*255,0,255))*65536+Math.round(he(Hn.g*255,0,255))*256+Math.round(he(Hn.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(Hn.copy(this),e);let n=Hn.r,i=Hn.g,s=Hn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(Hn.copy(this),e),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=Ze){pe.workingToColorSpace(Hn.copy(this),t);let e=Hn.r,n=Hn.g,i=Hn.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(Yc);let n=rl(cs.h,Yc.h,e),i=rl(cs.s,Yc.s,e),s=rl(cs.l,Yc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new Zt;Zt.NAMES=Wg;var pl=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zi=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gi=new k,Ir=new k,Ed=new k,Lr=new k,Co=new k,Ro=new k,z0=new k,Ad=new k,Cd=new k,Rd=new k,Pd=new Je,Id=new Je,Ld=new Je,Ur=class r{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gi.subVectors(t,e),i.cross(Gi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Gi.subVectors(i,e),Ir.subVectors(n,e),Ed.subVectors(t,e);let o=Gi.dot(Gi),a=Gi.dot(Ir),l=Gi.dot(Ed),c=Ir.dot(Ir),h=Ir.dot(Ed),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Lr)===null?!1:Lr.x>=0&&Lr.y>=0&&Lr.x+Lr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Lr.x),l.addScaledVector(o,Lr.y),l.addScaledVector(a,Lr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Pd.setScalar(0),Id.setScalar(0),Ld.setScalar(0),Pd.fromBufferAttribute(t,e),Id.fromBufferAttribute(t,n),Ld.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Pd,s.x),o.addScaledVector(Id,s.y),o.addScaledVector(Ld,s.z),o}static isFrontFacing(t,e,n,i){return Gi.subVectors(n,e),Ir.subVectors(t,e),Gi.cross(Ir).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ir.subVectors(this.a,this.b),Gi.cross(Ir).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Co.subVectors(i,n),Ro.subVectors(s,n),Ad.subVectors(t,n);let l=Co.dot(Ad),c=Ro.dot(Ad);if(l<=0&&c<=0)return e.copy(n);Cd.subVectors(t,i);let h=Co.dot(Cd),d=Ro.dot(Cd);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Co,o);Rd.subVectors(t,s);let f=Co.dot(Rd),p=Ro.dot(Rd);if(p>=0&&f<=p)return e.copy(s);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ro,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return z0.subVectors(s,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(z0,a);let g=1/(m+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(Co,o).addScaledVector(Ro,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mr=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wi):Wi.fromBufferAttribute(s,o),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qc.copy(n.boundingBox)),qc.applyMatrix4(t.matrixWorld),this.union(qc)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Za),Zc.subVectors(this.max,Za),Po.subVectors(t.a,Za),Io.subVectors(t.b,Za),Lo.subVectors(t.c,Za),hs.subVectors(Io,Po),us.subVectors(Lo,Io),Gs.subVectors(Po,Lo);let e=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Gs.z,Gs.y,hs.z,0,-hs.x,us.z,0,-us.x,Gs.z,0,-Gs.x,-hs.y,hs.x,0,-us.y,us.x,0,-Gs.y,Gs.x,0];return!Dd(e,Po,Io,Lo,Zc)||(e=[1,0,0,0,1,0,0,0,1],!Dd(e,Po,Io,Lo,Zc))?!1:(Jc.crossVectors(hs,us),e=[Jc.x,Jc.y,Jc.z],Dd(e,Po,Io,Lo,Zc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Dr=[new k,new k,new k,new k,new k,new k,new k,new k],Wi=new k,qc=new mr,Po=new k,Io=new k,Lo=new k,hs=new k,us=new k,Gs=new k,Za=new k,Zc=new k,Jc=new k,Ws=new k;function Dd(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ws.fromArray(r,s);let a=i.x*Math.abs(Ws.x)+i.y*Math.abs(Ws.y)+i.z*Math.abs(Ws.z),l=t.dot(Ws),c=e.dot(Ws),h=n.dot(Ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fn=new k,$c=new dt,dS=0,He=class extends pr{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mp,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$c.fromBufferAttribute(this,e),$c.applyMatrix3(t),this.setXY(e,$c.x,$c.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix3(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ml=class extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var gl=class extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}},pS=new mr,Ja=new k,Nd=new k,Br=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pS.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ja.subVectors(t,this.center);let e=Ja.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ja,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ja.copy(t.center).add(Nd)),this.expandByPoint(Ja.copy(t.center).sub(Nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},mS=0,Di=new be,Ud=new pn,Do=new k,xi=new mr,$a=new mr,An=new k,Ce=class r extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zy(t)?gl:ml)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new oe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,e,n){return Di.makeTranslation(t,e,n),this.applyMatrix4(Di),this}scale(t,e,n){return Di.makeScale(t,e,n),this.applyMatrix4(Di),this}lookAt(t){return Ud.lookAt(t),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];$a.setFromBufferAttribute(a),this.morphTargetsRelative?(An.addVectors(xi.min,$a.min),xi.expandByPoint(An),An.addVectors(xi.max,$a.max),xi.expandByPoint(An)):(xi.expandByPoint($a.min),xi.expandByPoint($a.max))}xi.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)An.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(An));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)An.fromBufferAttribute(a,c),l&&(Do.fromBufferAttribute(t,c),An.add(Do)),i=Math.max(i,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new He(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new k,l[x]=new k;let c=new k,h=new k,d=new k,u=new dt,f=new dt,p=new dt,_=new k,m=new k;function g(x,b,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,C),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let F=1/(f.x*p.y-p.x*f.y);isFinite(F)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(F),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(F),a[x].add(_),a[b].add(_),a[C].add(_),l[x].add(m),l[b].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,b=M.length;x<b;++x){let C=M[x],F=C.start,I=C.count;for(let D=F,P=F+I;D<P;D+=3)g(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let w=new k,v=new k,S=new k,T=new k;function E(x){S.fromBufferAttribute(i,x),T.copy(S);let b=a[x];w.copy(b),w.sub(S.multiplyScalar(S.dot(b))).normalize(),v.crossVectors(T,b);let F=v.dot(l[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,F)}for(let x=0,b=M.length;x<b;++x){let C=M[x],F=C.start,I=C.count;for(let D=F,P=F+I;D<P;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)An.fromBufferAttribute(t,e),An.normalize(),t.setXYZ(e,An.x,An.y,An.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new He(u,h,d)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_l=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mp,this.updateRanges=[],this.version=0,this.uuid=fr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},$n=new k,Jo=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.applyMatrix4(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.applyNormalMatrix(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.transformDirection(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ul("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ul("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fd=new k,gS=new k,_S=new oe,Xi=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Fd.subVectors(n,e).cross(gS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Fd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_S.getNormalMatrix(t),i=this.coplanarPoint(Fd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},vS=0,Ji=class extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=sa,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=op,this.blendDst=ap,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vh,this.stencilZFail=vh,this.stencilZPass=vh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Xi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$i=class extends Ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},No,Ka=new k,Uo=new k,Fo=new k,Oo=new dt,Qa=new dt,Xg=new be,Kc=new k,ja=new k,Qc=new k,k0=new dt,Od=new dt,H0=new dt,gr=class extends pn{constructor(t=new $i){if(super(),this.isSprite=!0,this.type="Sprite",No===void 0){No=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _l(e,5);No.setIndex([0,1,2,0,2,3]),No.setAttribute("position",new Jo(n,3,0,!1)),No.setAttribute("uv",new Jo(n,2,3,!1))}this.geometry=No,this.material=t,this.center=new dt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Uo.setFromMatrixScale(this.matrixWorld),Xg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Uo.multiplyScalar(-Fo.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;jc(Kc.set(-.5,-.5,0),Fo,o,Uo,i,s),jc(ja.set(.5,-.5,0),Fo,o,Uo,i,s),jc(Qc.set(.5,.5,0),Fo,o,Uo,i,s),k0.set(0,0),Od.set(1,0),H0.set(1,1);let a=t.ray.intersectTriangle(Kc,ja,Qc,!1,Ka);if(a===null&&(jc(ja.set(-.5,.5,0),Fo,o,Uo,i,s),Od.set(0,1),a=t.ray.intersectTriangle(Kc,Qc,ja,!1,Ka),a===null))return;let l=t.ray.origin.distanceTo(Ka);l<t.near||l>t.far||e.push({distance:l,point:Ka.clone(),uv:Ur.getInterpolation(Ka,Kc,ja,Qc,k0,Od,H0,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function jc(r,t,e,n,i,s){Oo.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Qa.x=s*Oo.x-i*Oo.y,Qa.y=i*Oo.x+s*Oo.y):Qa.copy(Oo),r.copy(t),r.x+=Qa.x,r.y+=Qa.y,r.applyMatrix4(Xg)}var Nr=new k,Bd=new k,th=new k,eh=new k,vl=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nr.copy(this.origin).addScaledVector(this.direction,e),Nr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bd.copy(t).add(e).multiplyScalar(.5),th.copy(e).sub(t).normalize(),eh.copy(this.origin).sub(Bd);let s=t.distanceTo(e)*.5,o=-this.direction.dot(th),a=eh.dot(this.direction),l=-eh.dot(th),c=eh.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Bd).addScaledVector(th,u),f}intersectSphere(t,e){if(t.radius<0)return null;Nr.subVectors(t.center,this.origin);let n=Nr.dot(this.direction),i=Nr.dot(Nr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Nr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=n.x-o.x,M=n.y-o.y,w=n.z-o.z,v=Math.abs(l),S=Math.abs(c),T=Math.abs(h),E,x,b,C,F,I,D,P,N,V,O,Z;if(v>=S&&v>=T?(b=l,I=d,N=p,Z=g,l>=0?(E=c,x=h,C=u,F=f,D=_,P=m,V=M,O=w):(E=h,x=c,C=f,F=u,D=m,P=_,V=w,O=M)):S>=T?(b=c,I=u,N=_,Z=M,c>=0?(E=h,x=l,C=f,F=d,D=m,P=p,V=w,O=g):(E=l,x=h,C=d,F=f,D=p,P=m,V=g,O=w)):(b=h,I=f,N=m,Z=w,h>=0?(E=l,x=c,C=d,F=u,D=p,P=_,V=g,O=M):(E=c,x=l,C=u,F=d,D=_,P=p,V=M,O=g)),b===0)return null;let H=E/b,R=x/b,Y=1/b,ft=C-H*I,yt=F-R*I,Et=D-H*N,Nt=P-R*N,Lt=V-H*Z,W=O-R*Z,Q=Lt*Nt-W*Et,ut=ft*W-yt*Lt,Rt=Et*yt-Nt*ft;if(i){if(Q<0||ut<0||Rt<0)return null}else if((Q<0||ut<0||Rt<0)&&(Q>0||ut>0||Rt>0))return null;let Tt=Q+ut+Rt;if(Tt===0)return null;let Ut=Y*(Q*I+ut*N+Rt*Z);return(Tt>0?Ut<0:Ut>0)?null:this.at(Ut/Tt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Si=class extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},V0=new be,Xs=new vl,nh=new Br,G0=new k,ih=new k,rh=new k,sh=new k,zd=new k,oh=new k,W0=new k,ah=new k,ee=class extends pn{constructor(t=new Ce,e=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){oh.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(zd.fromBufferAttribute(d,t),o?oh.addScaledVector(zd,h):oh.addScaledVector(zd.sub(e),h))}e.add(oh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nh.copy(n.boundingSphere),nh.applyMatrix4(s),Xs.copy(t.ray).recast(t.near),!(nh.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(nh,G0)===null||Xs.origin.distanceToSquared(G0)>(t.far-t.near)**2))&&(V0.copy(s).invert(),Xs.copy(t.ray).applyMatrix4(V0),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,S=w;v<S;v+=3){let T=a.getX(v),E=a.getX(v+1),x=a.getX(v+2);i=lh(this,g,t,n,c,h,d,T,E,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let M=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);i=lh(this,o,t,n,c,h,d,M,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,S=w;v<S;v+=3){let T=v,E=v+1,x=v+2;i=lh(this,g,t,n,c,h,d,T,E,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let M=m,w=m+1,v=m+2;i=lh(this,o,t,n,c,h,d,M,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function xS(r,t,e,n,i,s,o,a){let l;if(t.side===Sn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===xs,a),l===null)return null;ah.copy(a),ah.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(ah);return c<e.near||c>e.far?null:{distance:c,point:ah.clone(),object:r}}function lh(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ih),r.getVertexPosition(l,rh),r.getVertexPosition(c,sh);let h=xS(r,t,e,n,ih,rh,sh,W0);if(h){let d=new k;Ur.getBarycoord(W0,ih,rh,sh,d),i&&(h.uv=Ur.getInterpolatedAttribute(i,a,l,c,d,new dt)),s&&(h.uv1=Ur.getInterpolatedAttribute(s,a,l,c,d,new dt)),o&&(h.normal=Ur.getInterpolatedAttribute(o,a,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new k,materialIndex:0};Ur.getNormal(ih,rh,sh,u.normal),h.face=u,h.barycoord=d}return h}var xl=class extends Kn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Cn,h=Cn,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $o=class extends He{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bo=new be,X0=new be,ch=[],Y0=new mr,yS=new be,tl=new ee,el=new Br,_r=class extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yS)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bo),Y0.copy(t.boundingBox).applyMatrix4(Bo),this.boundingBox.union(Y0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Br),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bo),el.copy(t.boundingSphere).applyMatrix4(Bo),this.boundingSphere.union(el)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(tl.geometry=this.geometry,tl.material=this.material,tl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(n),t.ray.intersectsSphere(el)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Bo),X0.multiplyMatrices(n,Bo),tl.matrixWorld=X0,tl.raycast(t,ch);for(let o=0,a=ch.length;o<a;o++){let l=ch[o];l.instanceId=s,l.object=this,e.push(l)}ch.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new $o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xl(new Float32Array(i*this.count),i,this.count,lu,Fi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ys=new Br,SS=new dt(.5,.5),hh=new k,Ko=class{constructor(t=new Xi,e=new Xi,n=new Xi,i=new Xi,s=new Xi,o=new Xi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],M=s[12],w=s[13],v=s[14],S=s[15];if(i[0].setComponents(c-o,f-h,g-p,S-M).normalize(),i[1].setComponents(c+o,f+h,g+p,S+M).normalize(),i[2].setComponents(c+a,f+d,g+_,S+w).normalize(),i[3].setComponents(c-a,f-d,g-_,S-w).normalize(),n)i[4].setComponents(l,u,m,v).normalize(),i[5].setComponents(c-l,f-u,g-m,S-v).normalize();else if(i[4].setComponents(c-l,f-u,g-m,S-v).normalize(),e===qi)i[5].setComponents(c+l,f+u,g+m,S+v).normalize();else if(e===Wo)i[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(t){Ys.center.set(0,0,0);let e=SS.distanceTo(t.center);return Ys.radius=.7071067811865476+e,Ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(hh.x=i.normal.x>0?t.max.x:t.min.x,hh.y=i.normal.y>0?t.max.y:t.min.y,hh.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(hh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ih=class extends Ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},q0=new be,Jd=new vl,uh=new Br,fh=new k,ds=class extends pn{constructor(t=new Ce,e=new Ih){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uh.copy(n.boundingSphere),uh.applyMatrix4(i),uh.radius+=s,t.ray.intersectsSphere(uh)===!1)return;q0.copy(i).invert(),Jd.copy(t.ray).applyMatrix4(q0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){let m=c.getX(p);fh.fromBufferAttribute(d,m),Z0(fh,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)fh.fromBufferAttribute(d,p),Z0(fh,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Z0(r,t,e,n,i,s,o){let a=Jd.distanceSqToPoint(r);if(a<e){let l=new k;Jd.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var yl=class extends Kn{constructor(t=[],e=ys,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yn=class extends Kn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends Kn{constructor(t,e,n=ji,i,s,o,a=Cn,l=Cn,c,h=dr,d=1){if(h!==dr&&h!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Lh=class extends ps{constructor(t,e=ji,n=ys,i,s,o=Cn,a=Cn,l,c=dr){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Sl=class extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ni=class r extends Ce{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function p(_,m,g,M,w,v,S,T,E,x,b){let C=v/E,F=S/x,I=v/2,D=S/2,P=T/2,N=E+1,V=x+1,O=0,Z=0,H=new k;for(let R=0;R<V;R++){let Y=R*F-D;for(let ft=0;ft<N;ft++){let yt=ft*C-I;H[_]=yt*M,H[m]=Y*w,H[g]=P,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[g]=T>0?1:-1,h.push(H.x,H.y,H.z),d.push(ft/E),d.push(1-R/x),O+=1}}for(let R=0;R<x;R++)for(let Y=0;Y<E;Y++){let ft=u+Y+N*R,yt=u+Y+N*(R+1),Et=u+(Y+1)+N*(R+1),Nt=u+(Y+1)+N*R;l.push(ft,yt,Nt),l.push(yt,Et,Nt),Z+=6}a.addGroup(f,Z,b),f+=Z,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Dh=class r extends Ce{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],f=[],p=0,_=[],m=n/2,g=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function M(){let v=new k,S=new k,T=0,E=(e-t)/n;for(let x=0;x<=s;x++){let b=[],C=x/s,F=C*(e-t)+t;for(let I=0;I<=i;I++){let D=I/i,P=D*l+a,N=Math.sin(P),V=Math.cos(P);S.x=F*N,S.y=-C*n+m,S.z=F*V,d.push(S.x,S.y,S.z),v.set(N,E,V).normalize(),u.push(v.x,v.y,v.z),f.push(D,1-C),b.push(p++)}_.push(b)}for(let x=0;x<i;x++)for(let b=0;b<s;b++){let C=_[b][x],F=_[b+1][x],I=_[b+1][x+1],D=_[b][x+1];(t>0||b!==0)&&(h.push(C,F,D),T+=3),(e>0||b!==s-1)&&(h.push(F,I,D),T+=3)}c.addGroup(g,T,0),g+=T}function w(v){let S=p,T=new dt,E=new k,x=0,b=v===!0?t:e,C=v===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),p++;let F=p;for(let I=0;I<=i;I++){let P=I/i*l+a,N=Math.cos(P),V=Math.sin(P);E.x=b*V,E.y=m*C,E.z=b*N,d.push(E.x,E.y,E.z),u.push(0,C,0),T.x=N*.5+.5,T.y=V*.5*C+.5,f.push(T.x,T.y),p++}for(let I=0;I<i;I++){let D=S+I,P=F+I;v===!0?h.push(P,P+1,D):h.push(P+1,P,D),x+=3}c.addGroup(g,x,v===!0?1:2),g+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ml=class r extends Dh{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new dt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,i=[],s=[],o=[],a=new k,l=new be;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(he(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(he(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qo=class extends Qn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Nh=class extends Qo{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vp(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var J0=new k,$0=new k,kd=new vp,Hd=new vp,Vd=new vp,Uh=class extends Qn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new k){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:($0.subVectors(i[0],i[1]).add(i[0]),c=$0);let d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(J0.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=J0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),kd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,m),Hd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,m),Vd.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(kd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Hd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Vd.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(kd.calc(l),Hd.calc(l),Vd.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new k().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function K0(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function MS(r,t){let e=1-r;return e*e*t}function bS(r,t){return 2*(1-r)*r*t}function TS(r,t){return r*r*t}function sl(r,t,e,n){return MS(r,t)+bS(r,e)+TS(r,n)}function wS(r,t){let e=1-r;return e*e*e*t}function ES(r,t){let e=1-r;return 3*e*e*r*t}function AS(r,t){return 3*(1-r)*r*r*t}function CS(r,t){return r*r*r*t}function ol(r,t,e,n,i){return wS(r,t)+ES(r,e)+AS(r,n)+CS(r,i)}var bl=class extends Qn{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ol(t,i.x,s.x,o.x,a.x),ol(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fh=class extends Qn{constructor(t=new k,e=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new k){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ol(t,i.x,s.x,o.x,a.x),ol(t,i.y,s.y,o.y,a.y),ol(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tl=class extends Qn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oh=class extends Qn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends Qn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(sl(t,i.x,s.x,o.x),sl(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},El=class extends Qn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(sl(t,i.x,s.x,o.x),sl(t,i.y,s.y,o.y),sl(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Al=class extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(K0(a,l.x,c.x,h.x,d.x),K0(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new dt().fromArray(i))}return this}},Bh=Object.freeze({__proto__:null,ArcCurve:Nh,CatmullRomCurve3:Uh,CubicBezierCurve:bl,CubicBezierCurve3:Fh,EllipseCurve:Qo,LineCurve:Tl,LineCurve3:Oh,QuadraticBezierCurve:wl,QuadraticBezierCurve3:El,SplineCurve:Al}),zh=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Bh[i.type]().fromJSON(i))}return this}},Zs=class extends zh{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Tl(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new wl(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new bl(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Al(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Qo(t,e,n,i,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vr=class extends Zs{constructor(t){super(t),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Zs().fromJSON(i))}return this}};function RS(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=Yg(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=NS(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let h=a,d=l;for(let u=e;u<i;u+=e){let f=r[u],p=r[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Cl(s,o,e,a,l,c,0),o}function Yg(r,t,e,n,i){let s;if(i===XS(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=Q0(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Q0(o/n|0,r[o],r[o+1],s);return s&&jo(s,s.next)&&(Pl(s),s=s.next),s}function Js(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(jo(e,e.next)||tn(e.prev,e,e.next)===0)){if(Pl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cl(r,t,e,n,i,s,o){if(!r)return;!o&&s&&zS(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?IS(r,n,i,s):PS(r)){t.push(l.i,r.i,c.i),Pl(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=LS(Js(r),t),Cl(r,t,e,n,i,s,2)):o===2&&DS(r,t,e,n,i,s):Cl(Js(r),t,e,n,i,s,1);break}}}function PS(r){let t=r.prev,e=r,n=r.next;if(tn(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),d=Math.min(a,l,c),u=Math.max(i,s,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&nl(i,a,s,l,o,c,p.x,p.y)&&tn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function IS(r,t,e,n){let i=r.prev,s=r,o=r.next;if(tn(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,d=s.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),_=Math.max(a,l,c),m=Math.max(h,d,u),g=$d(f,p,t,e,n),M=$d(_,m,t,e,n),w=r.prevZ,v=r.nextZ;for(;w&&w.z>=g&&v&&v.z<=M;){if(w.x>=f&&w.x<=_&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&nl(a,h,l,d,c,u,w.x,w.y)&&tn(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&nl(a,h,l,d,c,u,v.x,v.y)&&tn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=f&&w.x<=_&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&nl(a,h,l,d,c,u,w.x,w.y)&&tn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&nl(a,h,l,d,c,u,v.x,v.y)&&tn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function LS(r,t){let e=r;do{let n=e.prev,i=e.next.next;!jo(n,i)&&Zg(n,e,e.next,i)&&Rl(n,i)&&Rl(i,n)&&(t.push(n.i,e.i,i.i),Pl(e),Pl(e.next),e=r=i),e=e.next}while(e!==r);return Js(e)}function DS(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&VS(o,a)){let l=Jg(o,a);o=Js(o,o.next),l=Js(l,l.next),Cl(o,t,e,n,i,s,0),Cl(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function NS(r,t,e,n){let i=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Yg(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(HS(c))}i.sort(US);for(let s=0;s<i.length;s++)e=FS(i[s],e);return e}function US(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function FS(r,t){let e=OS(r,t);if(!e)return t;let n=Jg(e,r);return Js(n,n.next),Js(e,e.next)}function OS(r,t){let e=t,n=r.x,i=r.y,s=-1/0,o;if(jo(r,e))return e;do{if(jo(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&qg(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Rl(e,r)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&BS(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function BS(r,t){return tn(r.prev,r,t.prev)<0&&tn(t.next,r,r.next)<0}function zS(r,t,e,n){let i=r;do i.z===0&&(i.z=$d(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,kS(i)}function kS(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function $d(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function HS(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function qg(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function nl(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&qg(r,t,e,n,i,s,o,a)}function VS(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!GS(r,t)&&(Rl(r,t)&&Rl(t,r)&&WS(r,t)&&(tn(r.prev,r,t.prev)||tn(r,t.prev,t))||jo(r,t)&&tn(r.prev,r,r.next)>0&&tn(t.prev,t,t.next)>0)}function tn(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function jo(r,t){return r.x===t.x&&r.y===t.y}function Zg(r,t,e,n){let i=ph(tn(r,t,e)),s=ph(tn(r,t,n)),o=ph(tn(e,n,r)),a=ph(tn(e,n,t));return!!(i!==s&&o!==a||i===0&&dh(r,e,t)||s===0&&dh(r,n,t)||o===0&&dh(e,r,n)||a===0&&dh(e,t,n))}function dh(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function ph(r){return r>0?1:r<0?-1:0}function GS(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Zg(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Rl(r,t){return tn(r.prev,r,r.next)<0?tn(r,t,r.next)>=0&&tn(r,r.prev,t)>=0:tn(r,t,r.prev)<0||tn(r,r.next,t)<0}function WS(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Jg(r,t){let e=Kd(r.i,r.x,r.y),n=Kd(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Q0(r,t,e,n){let i=Kd(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Pl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Kd(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function XS(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Qd=class{static triangulate(t,e,n=2){return RS(t,e,n)}},ur=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];j0(t),tg(n,t);let o=t.length;e.forEach(j0);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,tg(n,e[l]);let a=Qd.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function j0(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function tg(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var $s=class r extends Ce{constructor(t=new vr([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new le(i,3)),this.setAttribute("uv",new le(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:YS,w,v=!1,S,T,E,x;if(g){w=g.getSpacedPoints(h),v=!0,u=!1;let et=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,et),T=new k,E=new k,x=new k}u||(m=0,f=0,p=0,_=0);let b=a.extractPoints(c),C=b.shape,F=b.holes;if(!ur.isClockWise(C)){C=C.reverse();for(let et=0,ct=F.length;et<ct;et++){let pt=F[et];ur.isClockWise(pt)&&(F[et]=pt.reverse())}}function D(et){let pt=10000000000000001e-36,B=et[0];for(let j=1;j<=et.length;j++){let Ot=j%et.length,Ct=et[Ot],Ft=Ct.x-B.x,Jt=Ct.y-B.y,z=Ft*Ft+Jt*Jt,re=Math.max(Math.abs(Ct.x),Math.abs(Ct.y),Math.abs(B.x),Math.abs(B.y)),Xt=pt*re*re;if(z<=Xt){et.splice(Ot,1),j--;continue}B=Ct}}D(C),F.forEach(D);let P=F.length,N=C;for(let et=0;et<P;et++){let ct=F[et];C=C.concat(ct)}function V(et,ct,pt){return ct||ie("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ct,pt)}let O=C.length;function Z(et,ct,pt){let B,j,Ot,Ct=et.x-ct.x,Ft=et.y-ct.y,Jt=pt.x-et.x,z=pt.y-et.y,re=Ct*Ct+Ft*Ft,Xt=Ct*z-Ft*Jt;if(Math.abs(Xt)>Number.EPSILON){let L=Math.sqrt(re),y=Math.sqrt(Jt*Jt+z*z),X=ct.x-Ft/L,q=ct.y+Ct/L,it=pt.x-z/y,wt=pt.y+Jt/y,Mt=((it-X)*z-(wt-q)*Jt)/(Ct*z-Ft*Jt);B=X+Ct*Mt-et.x,j=q+Ft*Mt-et.y;let ot=B*B+j*j;if(ot<=2)return new dt(B,j);Ot=Math.sqrt(ot/2)}else{let L=!1;Ct>Number.EPSILON?Jt>Number.EPSILON&&(L=!0):Ct<-Number.EPSILON?Jt<-Number.EPSILON&&(L=!0):Math.sign(Ft)===Math.sign(z)&&(L=!0),L?(B=-Ft,j=Ct,Ot=Math.sqrt(re)):(B=Ct,j=Ft,Ot=Math.sqrt(re/2))}return new dt(B/Ot,j/Ot)}let H=[];for(let et=0,ct=N.length,pt=ct-1,B=et+1;et<ct;et++,pt++,B++)pt===ct&&(pt=0),B===ct&&(B=0),H[et]=Z(N[et],N[pt],N[B]);let R=[],Y,ft=H.concat();for(let et=0,ct=P;et<ct;et++){let pt=F[et];Y=[];for(let B=0,j=pt.length,Ot=j-1,Ct=B+1;B<j;B++,Ot++,Ct++)Ot===j&&(Ot=0),Ct===j&&(Ct=0),Y[B]=Z(pt[B],pt[Ot],pt[Ct]);R.push(Y),ft=ft.concat(Y)}let yt;if(m===0)yt=ur.triangulateShape(N,F);else{let et=[],ct=[];for(let pt=0;pt<m;pt++){let B=pt/m,j=f*Math.cos(B*Math.PI/2),Ot=p*Math.sin(B*Math.PI/2)+_;for(let Ct=0,Ft=N.length;Ct<Ft;Ct++){let Jt=V(N[Ct],H[Ct],Ot);ut(Jt.x,Jt.y,-j),B===0&&et.push(Jt)}for(let Ct=0,Ft=P;Ct<Ft;Ct++){let Jt=F[Ct];Y=R[Ct];let z=[];for(let re=0,Xt=Jt.length;re<Xt;re++){let L=V(Jt[re],Y[re],Ot);ut(L.x,L.y,-j),B===0&&z.push(L)}B===0&&ct.push(z)}}yt=ur.triangulateShape(et,ct)}let Et=yt.length,Nt=p+_;for(let et=0;et<O;et++){let ct=u?V(C[et],ft[et],Nt):C[et];v?(E.copy(S.normals[0]).multiplyScalar(ct.x),T.copy(S.binormals[0]).multiplyScalar(ct.y),x.copy(w[0]).add(E).add(T),ut(x.x,x.y,x.z)):ut(ct.x,ct.y,0)}for(let et=1;et<=h;et++)for(let ct=0;ct<O;ct++){let pt=u?V(C[ct],ft[ct],Nt):C[ct];v?(E.copy(S.normals[et]).multiplyScalar(pt.x),T.copy(S.binormals[et]).multiplyScalar(pt.y),x.copy(w[et]).add(E).add(T),ut(x.x,x.y,x.z)):ut(pt.x,pt.y,d/h*et)}for(let et=m-1;et>=0;et--){let ct=et/m,pt=f*Math.cos(ct*Math.PI/2),B=p*Math.sin(ct*Math.PI/2)+_;for(let j=0,Ot=N.length;j<Ot;j++){let Ct=V(N[j],H[j],B);ut(Ct.x,Ct.y,d+pt)}for(let j=0,Ot=F.length;j<Ot;j++){let Ct=F[j];Y=R[j];for(let Ft=0,Jt=Ct.length;Ft<Jt;Ft++){let z=V(Ct[Ft],Y[Ft],B);v?ut(z.x,z.y+w[h-1].y,w[h-1].x+pt):ut(z.x,z.y,d+pt)}}}Lt(),W();function Lt(){let et=i.length/3;if(u){let ct=0,pt=O*ct;for(let B=0;B<Et;B++){let j=yt[B];Rt(j[2]+pt,j[1]+pt,j[0]+pt)}ct=h+m*2,pt=O*ct;for(let B=0;B<Et;B++){let j=yt[B];Rt(j[0]+pt,j[1]+pt,j[2]+pt)}}else{for(let ct=0;ct<Et;ct++){let pt=yt[ct];Rt(pt[2],pt[1],pt[0])}for(let ct=0;ct<Et;ct++){let pt=yt[ct];Rt(pt[0]+O*h,pt[1]+O*h,pt[2]+O*h)}}n.addGroup(et,i.length/3-et,0)}function W(){let et=i.length/3,ct=0;Q(N,ct),ct+=N.length;for(let pt=0,B=F.length;pt<B;pt++){let j=F[pt];Q(j,ct),ct+=j.length}n.addGroup(et,i.length/3-et,1)}function Q(et,ct){let pt=et.length;for(;--pt>=0;){let B=pt,j=pt-1;j<0&&(j=et.length-1);for(let Ot=0,Ct=h+m*2;Ot<Ct;Ot++){let Ft=O*Ot,Jt=O*(Ot+1),z=ct+B+Ft,re=ct+j+Ft,Xt=ct+j+Jt,L=ct+B+Jt;Tt(z,re,Xt,L)}}}function ut(et,ct,pt){l.push(et),l.push(ct),l.push(pt)}function Rt(et,ct,pt){Ut(et),Ut(ct),Ut(pt);let B=i.length/3,j=M.generateTopUV(n,i,B-3,B-2,B-1);zt(j[0]),zt(j[1]),zt(j[2])}function Tt(et,ct,pt,B){Ut(et),Ut(ct),Ut(B),Ut(ct),Ut(pt),Ut(B);let j=i.length/3,Ot=M.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);zt(Ot[0]),zt(Ot[1]),zt(Ot[3]),zt(Ot[1]),zt(Ot[2]),zt(Ot[3])}function Ut(et){i.push(l[et*3+0]),i.push(l[et*3+1]),i.push(l[et*3+2])}function zt(et){s.push(et.x),s.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qS(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Bh[i.type]().fromJSON(i)),new r(n,t.options)}},YS={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new dt(s,o),new dt(a,l),new dt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-d),new dt(u,1-p),new dt(_,1-g)]:[new dt(a,1-l),new dt(h,1-d),new dt(f,1-p),new dt(m,1-g)]}};function qS(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ta=class r extends Ce{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=he(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,d=new k,u=new dt,f=new k,p=new k,_=new k,m=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let M=0;M<=e;M++){let w=n+M*h*i,v=Math.sin(w),S=Math.cos(w);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*v,d.y=t[T].y,d.z=t[T].x*S,o.push(d.x,d.y,d.z),u.x=M/e,u.y=T/(t.length-1),a.push(u.x,u.y);let E=l[3*T+0]*v,x=l[3*T+1],b=l[3*T+0]*S;c.push(E,x,b)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){let v=w+M*t.length,S=v,T=v+t.length,E=v+t.length+1,x=v+1;s.push(S,T,x),s.push(E,x,T)}this.setIndex(s),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var mn=class r extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let M=g*u-o;for(let w=0;w<c;w++){let v=w*d-s;p.push(v,-M,0),_.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let w=M+c*g,v=M+c*(g+1),S=M+1+c*(g+1),T=M+1+c*g;f.push(w,v,T),f.push(v,S,T)}this.setIndex(f),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Il=class r extends Ce{constructor(t=new vr([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new le(i,3)),this.setAttribute("normal",new le(s,3)),this.setAttribute("uv",new le(o,2));function c(h){let d=i.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;ur.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let M=p[m];ur.isClockWise(M)===!0&&(p[m]=M.reverse())}let _=ur.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let M=p[m];f=f.concat(M)}for(let m=0,g=f.length;m<g;m++){let M=f[m];i.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let m=0,g=_.length;m<g;m++){let M=_[m],w=M[0]+d,v=M[1]+d,S=M[2]+d;n.push(w,v,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ZS(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let o=e[t.shapes[i]];n.push(o)}return new r(n,t.curveSegments)}};function ZS(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){let i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}var Ll=class r extends Ce{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new k,u=new k,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let M=[],w=g/n,v=o+w*a,S=t*Math.cos(v),T=Math.sqrt(t*t-S*S),E=0;g===0&&o===0?E=.5/e:g===n&&l===Math.PI&&(E=-.5/e);for(let x=0;x<=e;x++){let b=x/e,C=i+b*s;d.x=-T*Math.cos(C),d.y=S,d.z=T*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(b+E,1-w),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let w=h[g][M+1],v=h[g][M],S=h[g+1][M],T=h[g+1][M+1];(g!==0||o>0)&&f.push(w,v,T),(g!==n-1||l<Math.PI)&&f.push(v,S,T)}this.setIndex(f),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Dl=class r extends Ce{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new k,f=new k,p=new k;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=i;g++){let M=g/i*s;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let g=(i+1)*_+m-1,M=(i+1)*(_-1)+m-1,w=(i+1)*(_-1)+m,v=(i+1)*_+m;l.push(g,M,v),l.push(M,w,v)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ea=class r extends Ce{constructor(t=new El(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,l=new k,c=new dt,h=new k,d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function _(){for(let w=0;w<e;w++)m(w);m(s===!1?e:0),M(),g()}function m(w){h=t.getPointAt(w/e,h);let v=o.normals[w],S=o.binormals[w];for(let T=0;T<=i;T++){let E=T/i*Math.PI*2,x=Math.sin(E),b=-Math.cos(E);l.x=b*v.x+x*S.x,l.y=b*v.y+x*S.y,l.z=b*v.z+x*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=e;w++)for(let v=1;v<=i;v++){let S=(i+1)*(w-1)+(v-1),T=(i+1)*w+(v-1),E=(i+1)*w+v,x=(i+1)*(w-1)+v;p.push(S,T,x),p.push(T,E,x)}}function M(){for(let w=0;w<=e;w++)for(let v=0;v<=i;v++)c.x=w/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Bh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function to(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(eg(i))i.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(eg(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Vn(r){let t={};for(let e=0;e<r.length;e++){let n=to(r[e]);for(let i in n)t[i]=n[i]}return t}function eg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function JS(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function xp(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Vr={clone:to,merge:Vn},$S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ee=class extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=KS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=JS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new dt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Je().fromArray(i.value);break;case"m3":this.uniforms[n].value=new oe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},na=class extends Ee{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Nn=class extends Ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ki=class extends Nn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Nl=class extends Ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=eu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kh=class extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hh=class extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function zo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Gd(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var ms=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vh=class extends ms{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yd,endingEnd:Yd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qd:s=t,a=2*e-n;break;case Zd:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qd:o=t,l=2*n-e;break;case Zd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,w=(-1-f)*m+(1.5+f)*_+.5*p,v=f*m-f*_;for(let S=0;S!==a;++S)s[S]=g*o[h+S]+M*o[c+S]+w*o[l+S]+v*o[d+S];return s}},Gh=class extends ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},Wh=class extends ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Xh=class extends ms{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*u+p*2,M=d[g],w=d[g+1],v=t*u+p*2,S=h[v],T=h[v+1],E=jS(n,e,M,S,i);s[p]=$g(E,_,w,T,m)}return s}};function $g(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function QS(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function jS(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=$g(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=QS(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Mi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zo(e,this.TimeBufferType),this.values=zo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zo(t.times,Array),values:zo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Gd(t.settings)&&(n.settings={inTangents:zo(t.settings.inTangents,Array),outTangents:zo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Xh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case al:e=this.InterpolantFactoryMethodDiscrete;break;case Ah:e=this.InterpolantFactoryMethodLinear;break;case _h:e=this.InterpolantFactoryMethodSmooth;break;case Xd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ne("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return al;case this.InterpolantFactoryMethodLinear:return Ah;case this.InterpolantFactoryMethodSmooth:return _h;case this.InterpolantFactoryMethodBezier:return Xd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Gd(this.settings)&&(ng(this.settings.inTangents,t),ng(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ie("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ie("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&ky(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ie("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_h,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Gd(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function ng(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}Mi.prototype.ValueTypeName="";Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=Ah;var gs=class extends Mi{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=al;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yh=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}};Yh.prototype.ValueTypeName="color";var qh=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}};qh.prototype.ValueTypeName="number";var Zh=class extends ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)ui.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ul=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Zh(this.times,this.values,this.getValueSize(),t)}};Ul.prototype.ValueTypeName="quaternion";Ul.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends Mi{constructor(t,e,n){super(t,e,n)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=al;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Jh=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}};Jh.prototype.ValueTypeName="vector";var $h=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kg=new $h,Kh=class{constructor(t){this.manager=t!==void 0?t:Kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Kh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ia=class extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ks=class extends ia{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Wd=new be,ig=new k,rg=new k,Fl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ig.setFromMatrixPosition(t.matrixWorld),e.position.copy(ig),rg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rg),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Wd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wd,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===Wo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Wd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},mh=new k,gh=new ui,cr=new k,Ol=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mh,gh,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mh,gh,cr.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(mh,gh,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mh,gh,cr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new k,sg=new dt,og=new dt,xn=class extends Ol{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,e){return this.getViewBounds(t,sg,og),e.subVectors(og,sg)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(il*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var jd=class extends Fl{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}},zr=class extends ia{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},xr=class extends Ol{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},tp=class extends Fl{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new tp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ko=-90,Ho=1,Qh=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new xn(ko,Ho,t,e);i.layers=this.layers,this.add(i);let s=new xn(ko,Ho,t,e);s.layers=this.layers,this.add(s);let o=new xn(ko,Ho,t,e);o.layers=this.layers,this.add(o);let a=new xn(ko,Ho,t,e);a.layers=this.layers,this.add(a);let l=new xn(ko,Ho,t,e);l.layers=this.layers,this.add(l);let c=new xn(ko,Ho,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===qi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},jh=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Bl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=tM.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function tM(){this._document.hidden===!1&&this.reset()}var yp="\\[\\]\\.:\\/",eM=new RegExp("["+yp+"]","g"),Sp="[^"+yp+"]",nM="[^"+yp.replace("\\.","")+"]",iM=/((?:WC+[\/:])*)/.source.replace("WC",Sp),rM=/(WCOD+)?/.source.replace("WCOD",nM),sM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sp),oM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sp),aM=new RegExp("^"+iM+rM+sM+oM+"$"),lM=["material","materials","bones","map"],ep=class{constructor(t,e,n){let i=n||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ge=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(eM,"")}static parseTrackName(t){let e=aM.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);lM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=ep;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xA=new Float32Array(1);var Ap=class Ap{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};Ap.prototype.isMatrix2=!0;var np=Ap;function Mp(r,t,e,n){let i=cM(n);switch(e){case dp:return r*t;case lu:return r*t/i.components*i.byteLength;case cu:return r*t/i.components*i.byteLength;case Ms:return r*t*2/i.components*i.byteLength;case hu:return r*t*2/i.components*i.byteLength;case pp:return r*t*3/i.components*i.byteLength;case Oi:return r*t*4/i.components*i.byteLength;case uu:return r*t*4/i.components*i.byteLength;case ql:case Zl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Jl:case $l:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case du:case mu:return Math.max(r,16)*Math.max(t,8)/4;case fu:case pu:return Math.max(r,8)*Math.max(t,8)/2;case gu:case _u:case xu:case yu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case vu:case Kl:case Su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Tu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case wu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Eu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Au:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Cu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ru:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Iu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Lu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Du:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Nu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Uu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Fu:case Ou:case Bu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case zu:case ku:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ql:case Hu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cM(r){switch(r){case di:case cp:return{byteLength:1,components:1};case oa:case hp:case Mn:return{byteLength:2,components:1};case ou:case au:return{byteLength:2,components:4};case ji:case su:case Fi:return{byteLength:4,components:1};case up:case fp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function x_(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function pM(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var mM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gM=`#ifdef USE_ALPHAHASH
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
#endif`,_M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
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
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bM=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,TM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CM=`#ifdef USE_IRIDESCENCE
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
#endif`,RM=`#ifdef USE_BUMPMAP
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
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,zM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kM=`vec3 transformedNormal = objectNormal;
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
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XM="gl_FragColor = linearToOutputTexel( gl_FragColor );",YM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nb=`#ifdef USE_GRADIENTMAP
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
}`,ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ob=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,ab=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,lb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,db=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pb=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_b=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wb=`#if defined( USE_POINTS_UV )
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
#endif`,Eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ab=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
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
#endif`,Lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bb=`#ifdef USE_NORMALMAP
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
#endif`,zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,t1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
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
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,s1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,h1=`#ifdef USE_TRANSMISSION
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
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
}`,M1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,b1=`#define DISTANCE
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
}`,T1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`uniform float scale;
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
}`,C1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,P1=`uniform vec3 diffuse;
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
}`,I1=`#define LAMBERT
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
}`,L1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,D1=`#define MATCAP
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
}`,N1=`#define MATCAP
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
}`,U1=`#define NORMAL
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
}`,F1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O1=`#define PHONG
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
}`,B1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,z1=`#define STANDARD
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
}`,k1=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,H1=`#define TOON
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
}`,V1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,G1=`uniform float size;
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
}`,W1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,Y1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,q1=`uniform float rotation;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:mM,alphahash_pars_fragment:gM,alphamap_fragment:_M,alphamap_pars_fragment:vM,alphatest_fragment:xM,alphatest_pars_fragment:yM,aomap_fragment:SM,aomap_pars_fragment:MM,batching_pars_vertex:bM,batching_vertex:TM,begin_vertex:wM,beginnormal_vertex:EM,bsdfs:AM,iridescence_fragment:CM,bumpmap_pars_fragment:RM,clipping_planes_fragment:PM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:LM,clipping_planes_vertex:DM,color_fragment:NM,color_pars_fragment:UM,color_pars_vertex:FM,color_vertex:OM,common:BM,cube_uv_reflection_fragment:zM,defaultnormal_vertex:kM,displacementmap_pars_vertex:HM,displacementmap_vertex:VM,emissivemap_fragment:GM,emissivemap_pars_fragment:WM,colorspace_fragment:XM,colorspace_pars_fragment:YM,envmap_fragment:qM,envmap_common_pars_fragment:ZM,envmap_pars_fragment:JM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:ab,envmap_vertex:KM,fog_vertex:QM,fog_pars_vertex:jM,fog_fragment:tb,fog_pars_fragment:eb,gradientmap_pars_fragment:nb,lightmap_pars_fragment:ib,lights_lambert_fragment:rb,lights_lambert_pars_fragment:sb,lights_pars_begin:ob,lights_toon_fragment:lb,lights_toon_pars_fragment:cb,lights_phong_fragment:hb,lights_phong_pars_fragment:ub,lights_physical_fragment:fb,lights_physical_pars_fragment:db,lights_fragment_begin:pb,lights_fragment_maps:mb,lights_fragment_end:gb,lightprobes_pars_fragment:_b,logdepthbuf_fragment:vb,logdepthbuf_pars_fragment:xb,logdepthbuf_pars_vertex:yb,logdepthbuf_vertex:Sb,map_fragment:Mb,map_pars_fragment:bb,map_particle_fragment:Tb,map_particle_pars_fragment:wb,metalnessmap_fragment:Eb,metalnessmap_pars_fragment:Ab,morphinstance_vertex:Cb,morphcolor_vertex:Rb,morphnormal_vertex:Pb,morphtarget_pars_vertex:Ib,morphtarget_vertex:Lb,normal_fragment_begin:Db,normal_fragment_maps:Nb,normal_pars_fragment:Ub,normal_pars_vertex:Fb,normal_vertex:Ob,normalmap_pars_fragment:Bb,clearcoat_normal_fragment_begin:zb,clearcoat_normal_fragment_maps:kb,clearcoat_pars_fragment:Hb,iridescence_pars_fragment:Vb,opaque_fragment:Gb,packing:Wb,premultiplied_alpha_fragment:Xb,project_vertex:Yb,dithering_fragment:qb,dithering_pars_fragment:Zb,roughnessmap_fragment:Jb,roughnessmap_pars_fragment:$b,shadowmap_pars_fragment:Kb,shadowmap_pars_vertex:Qb,shadowmap_vertex:jb,shadowmask_pars_fragment:t1,skinbase_vertex:e1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:r1,specularmap_fragment:s1,specularmap_pars_fragment:o1,tonemapping_fragment:a1,tonemapping_pars_fragment:l1,transmission_fragment:c1,transmission_pars_fragment:h1,uv_pars_fragment:u1,uv_pars_vertex:f1,uv_vertex:d1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:_1,backgroundCube_frag:v1,cube_vert:x1,cube_frag:y1,depth_vert:S1,depth_frag:M1,distance_vert:b1,distance_frag:T1,equirect_vert:w1,equirect_frag:E1,linedashed_vert:A1,linedashed_frag:C1,meshbasic_vert:R1,meshbasic_frag:P1,meshlambert_vert:I1,meshlambert_frag:L1,meshmatcap_vert:D1,meshmatcap_frag:N1,meshnormal_vert:U1,meshnormal_frag:F1,meshphong_vert:O1,meshphong_frag:B1,meshphysical_vert:z1,meshphysical_frag:k1,meshtoon_vert:H1,meshtoon_frag:V1,points_vert:G1,points_frag:W1,shadow_vert:X1,shadow_frag:Y1,sprite_vert:q1,sprite_frag:Z1},Ht={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Mr={basic:{uniforms:Vn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Vn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Vn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Vn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Vn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Vn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Vn([Ht.points,Ht.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Vn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Vn([Ht.common,Ht.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Vn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Vn([Ht.sprite,Ht.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:Vn([Ht.common,Ht.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:Vn([Ht.lights,Ht.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Mr.physical={uniforms:Vn([Mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var Wu={r:0,b:0,g:0},J1=new be,y_=new oe;y_.set(-1,0,0,0,1,0,0,0,1);function $1(r,t,e,n,i,s){let o=new Zt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let v=M.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(M){let w=!1,v=f(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Xl)?(c===void 0&&(c=new ee(new Ni(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:to(Mr.backgroundCube.uniforms),vertexShader:Mr.backgroundCube.vertexShader,fragmentShader:Mr.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(J1.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(y_),c.material.toneMapped=pe.getTransfer(v.colorSpace)!==Me,(h!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ee(new mn(2,2),new Ee({name:"BackgroundMaterial",uniforms:to(Mr.background.uniforms),vertexShader:Mr.background.vertexShader,fragmentShader:Mr.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=pe.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(Wu,xp(r)),e.buffers.color.setClear(Wu.r,Wu.g,Wu.b,w,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:_,dispose:g}}function K1(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(F,I,D,P,N){let V=!1,O=d(F,P,D,I);s!==O&&(s=O,c(s.object)),V=f(F,P,D,N),V&&p(F,P,D,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(F,I,D,P),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(F){return r.bindVertexArray(F)}function h(F){return r.deleteVertexArray(F)}function d(F,I,D,P){let N=P.wireframe===!0,V=n[I.id];V===void 0&&(V={},n[I.id]=V);let O=F.isInstancedMesh===!0?F.id:0,Z=V[O];Z===void 0&&(Z={},V[O]=Z);let H=Z[D.id];H===void 0&&(H={},Z[D.id]=H);let R=H[N];return R===void 0&&(R=u(l()),H[N]=R),R}function u(F){let I=[],D=[],P=[];for(let N=0;N<e;N++)I[N]=0,D[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:P,object:F,attributes:{},index:null}}function f(F,I,D,P){let N=s.attributes,V=I.attributes,O=0,Z=D.getAttributes();for(let H in Z)if(Z[H].location>=0){let Y=N[H],ft=V[H];if(ft===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(ft=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(ft=F.instanceColor)),Y===void 0||Y.attribute!==ft||ft&&Y.data!==ft.data)return!0;O++}return s.attributesNum!==O||s.index!==P}function p(F,I,D,P){let N={},V=I.attributes,O=0,Z=D.getAttributes();for(let H in Z)if(Z[H].location>=0){let Y=V[H];Y===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(Y=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(Y=F.instanceColor));let ft={};ft.attribute=Y,Y&&Y.data&&(ft.data=Y.data),N[H]=ft,O++}s.attributes=N,s.attributesNum=O,s.index=P}function _(){let F=s.newAttributes;for(let I=0,D=F.length;I<D;I++)F[I]=0}function m(F){g(F,0)}function g(F,I){let D=s.newAttributes,P=s.enabledAttributes,N=s.attributeDivisors;D[F]=1,P[F]===0&&(r.enableVertexAttribArray(F),P[F]=1),N[F]!==I&&(r.vertexAttribDivisor(F,I),N[F]=I)}function M(){let F=s.newAttributes,I=s.enabledAttributes;for(let D=0,P=I.length;D<P;D++)I[D]!==F[D]&&(r.disableVertexAttribArray(D),I[D]=0)}function w(F,I,D,P,N,V,O){O===!0?r.vertexAttribIPointer(F,I,D,N,V):r.vertexAttribPointer(F,I,D,P,N,V)}function v(F,I,D,P){_();let N=P.attributes,V=D.getAttributes(),O=I.defaultAttributeValues;for(let Z in V){let H=V[Z];if(H.location>=0){let R=N[Z];if(R===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(R=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(R=F.instanceColor)),R!==void 0){let Y=R.normalized,ft=R.itemSize,yt=t.get(R);if(yt===void 0)continue;let Et=yt.buffer,Nt=yt.type,Lt=yt.bytesPerElement,W=Nt===r.INT||Nt===r.UNSIGNED_INT||R.gpuType===su;if(R.isInterleavedBufferAttribute){let Q=R.data,ut=Q.stride,Rt=R.offset;if(Q.isInstancedInterleavedBuffer){for(let Tt=0;Tt<H.locationSize;Tt++)g(H.location+Tt,Q.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Tt=0;Tt<H.locationSize;Tt++)m(H.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Tt=0;Tt<H.locationSize;Tt++)w(H.location+Tt,ft/H.locationSize,Nt,Y,ut*Lt,(Rt+ft/H.locationSize*Tt)*Lt,W)}else{if(R.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)g(H.location+Q,R.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Q=0;Q<H.locationSize;Q++)w(H.location+Q,ft/H.locationSize,Nt,Y,ft*Lt,ft/H.locationSize*Q*Lt,W)}}else if(O!==void 0){let Y=O[Z];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(H.location,Y);break;case 3:r.vertexAttrib3fv(H.location,Y);break;case 4:r.vertexAttrib4fv(H.location,Y);break;default:r.vertexAttrib1fv(H.location,Y)}}}}M()}function S(){b();for(let F in n){let I=n[F];for(let D in I){let P=I[D];for(let N in P){let V=P[N];for(let O in V)h(V[O].object),delete V[O];delete P[N]}}delete n[F]}}function T(F){if(n[F.id]===void 0)return;let I=n[F.id];for(let D in I){let P=I[D];for(let N in P){let V=P[N];for(let O in V)h(V[O].object),delete V[O];delete P[N]}}delete n[F.id]}function E(F){for(let I in n){let D=n[I];for(let P in D){let N=D[P];if(N[F.id]===void 0)continue;let V=N[F.id];for(let O in V)h(V[O].object),delete V[O];delete N[F.id]}}}function x(F){for(let I in n){let D=n[I],P=F.isInstancedMesh===!0?F.id:0,N=D[P];if(N!==void 0){for(let V in N){let O=N[V];for(let Z in O)h(O[Z].object),delete O[Z];delete N[V]}delete D[P],Object.keys(D).length===0&&delete n[I]}}}function b(){C(),o=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Q1(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function j1(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Oi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let x=E===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==di&&E!==Fi&&!x&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:S,samples:T}}function tT(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Xi,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{let M=s?0:n,w=M*4,v=g.clippingState||null;l.value=v,v=h(p,u,w,f);for(let S=0;S!==w;++S)v[S]=e[S];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,v=f;w!==_;++w,v+=4)o.copy(d[w]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var ca=4,eT=6,nT=20,iT=256,tc=new xr,Qg=new Zt,Cp=null,Rp=0,Pp=0,Ip=!1,rT=new k,eo=new k,Ts=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=rT}=s;Cp=this._renderer.getRenderTarget(),Rp=this._renderer.getActiveCubeFace(),Pp=this._renderer.getActiveMipmapLevel(),Ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Cp,Rp,Pp),this._renderer.xr.enabled=Ip,t.scissorTest=!1,la(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cp=this._renderer.getRenderTarget(),Rp=this._renderer.getActiveCubeFace(),Pp=this._renderer.getActiveMipmapLevel(),Ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Mn,format:Oi,colorSpace:ll,depthBuffer:!1},i=jg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jg(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sT(s)),this._blurMaterial=aT(s,t,e),this._ggxMaterial=oT(s,t,e)}return i}_compileMaterial(t){let e=new ee(new Ce,t);this._renderer.compile(e,tc)}_sceneToCubeUV(t,e,n,i,s){let l=new xn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Qg),d.toneMapping=Qi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ee(new Ni,new Si({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,g=!0):(m.color.copy(Qg),g=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));let S=this._cubeSize;la(i,v*S,w>2?S:0,S,S),d.setRenderTarget(i),g&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ys||t.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=e_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t_());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;la(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,tc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-ca?n-p+ca:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,la(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(a,tc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,la(t,m,g,3*_,2*_),i.setRenderTarget(t),i.render(a,tc)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-ca?i-this._lodMax+ca:0),u=4*(this._cubeSize-h);la(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,tc)}};function sT(r){let t=[],e=[],n=r,i=r-ca+1+eT;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let g=0;g<d;g++){let M=g%3*2/3-1,w=g>2?0:-1,v=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];p.set(v,f*u*g);for(let S=0;S<u;S++){let T=h[S*2]*2-1,E=h[S*2+1]*2-1;g===0?eo.set(1,E,T):g===1?eo.set(-T,1,-E):g===2?eo.set(-T,E,1):g===3?eo.set(-1,E,-T):g===4?eo.set(-T,-1,E):eo.set(T,E,-1),eo.toArray(_,(g*u+S)*f)}}let m=new Ce;m.setAttribute("position",new He(p,f)),m.setAttribute("outputDirection",new He(_,f)),e.push(new ee(m,null)),n>ca&&n--}return{lodMeshes:e,sizeLods:t}}function jg(r,t,e){let n=new $e(r,t,e);return n.texture.mapping=Xl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function oT(r,t,e){return new Ee({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function aT(r,t,e){return new Ee({name:"SphericalGaussianBlur",defines:{SAMPLES:nT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function t_(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function e_(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function qu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Yu=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ni(5,5,5),s=new Ee({name:"CubemapFromEquirect",uniforms:to(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Ui});s.uniforms.tEquirect.value=e;let o=new ee(i,s),a=e.minFilter;return e.minFilter===yr&&(e.minFilter=dn),new Qh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function lT(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===nu||f===iu)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new Yu(p.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===nu||f===iu,_=f===ys||f===js;if(p||_){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Ts(r)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Ts(r)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===nu?u.mapping=ys:f===iu&&(u.mapping=js),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function cT(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&qs("WebGLRenderer: "+n+" extension not supported."),i}}}function hT(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let w=0,v=M.length;w<v;w+=3){let S=M[w+0],T=M[w+1],E=M[w+2];u.push(S,T,T,E,E,S)}}else{let M=p.array;_=p.version;for(let w=0,v=M.length/3-1;w<v;w+=3){let S=w+0,T=w+1,E=w+2;u.push(S,T,T,E,E,S)}}let m=new(p.count>=65535?gl:ml)(u,1);m.version=_;let g=s.get(d);g&&t.remove(g),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function uT(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fT(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:ie("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dT(r,t,e){let n=new WeakMap,i=new Je;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let v=a.attributes.position.count*w,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*S*4*d),E=new fl(T,v,S,d);E.type=Fi,E.needsUpdate=!0;let x=w*4;for(let C=0;C<d;C++){let F=m[C],I=g[C],D=M[C],P=v*S*4*C;for(let N=0;N<F.count;N++){let V=N*x;f===!0&&(i.fromBufferAttribute(F,N),T[P+V+0]=i.x,T[P+V+1]=i.y,T[P+V+2]=i.z,T[P+V+3]=0),p===!0&&(i.fromBufferAttribute(I,N),T[P+V+4]=i.x,T[P+V+5]=i.y,T[P+V+6]=i.z,T[P+V+7]=0),_===!0&&(i.fromBufferAttribute(D,N),T[P+V+8]=i.x,T[P+V+9]=i.y,T[P+V+10]=i.z,T[P+V+11]=D.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new dt(v,S)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function pT(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var mT={[zl]:"LINEAR_TONE_MAPPING",[kl]:"REINHARD_TONE_MAPPING",[Hl]:"CINEON_TONE_MAPPING",[Hr]:"ACES_FILMIC_TONE_MAPPING",[Gl]:"AGX_TONE_MAPPING",[Wl]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function gT(r,t,e,n,i,s){let o=new $e(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ce;c.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new le([0,2,0,0,2,0],2));let h=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ee(c,h),u=new xr(-1,1,1,-1,0,1),f=null,p=null,_=!1,m,g=null,M=[],w=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let T=0;T<M.length;T++){let E=M[T];E.setSize&&E.setSize(v,S)}},this.setEffects=function(v){M=v,w=M.length>0&&M[0].isRenderPass===!0;let S=o.width,T=o.height;M.length>0&&a===null&&(a=new $e(S,T,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new $e(S,T,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let x=M[E];x.setSize&&x.setSize(S,T)}},this.begin=function(v,S){if(_||v.toneMapping===Qi&&M.length===0)return!1;if(g=S,S!==null){let T=S.width,E=S.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Qi,!0},this.hasRenderPass=function(){return w},this.end=function(v,S){v.toneMapping=m,_=!0;let T=o,E=a;for(let x=0;x<M.length;x++){let b=M[x];b.enabled!==!1&&(b.render(v,E,T,S),b.needsSwap!==!1&&(T=E,E=E===a?l:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},pe.getTransfer(f)===Me&&(h.defines.SRGB_TRANSFER="");let x=mT[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(g),v.render(d,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var S_=new Kn,Np=new ps(1,1),M_=new fl,b_=new Ph,T_=new yl,n_=[],i_=[],r_=new Float32Array(16),s_=new Float32Array(9),o_=new Float32Array(4);function fa(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=n_[i];if(s===void 0&&(s=new Float32Array(i),n_[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function bn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Tn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Zu(r,t){let e=i_[t];e===void 0&&(e=new Int32Array(t),i_[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function _T(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function vT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;r.uniform2fv(this.addr,t),Tn(e,t)}}function xT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(bn(e,t))return;r.uniform3fv(this.addr,t),Tn(e,t)}}function yT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;r.uniform4fv(this.addr,t),Tn(e,t)}}function ST(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Tn(e,t)}else{if(bn(e,n))return;o_.set(n),r.uniformMatrix2fv(this.addr,!1,o_),Tn(e,n)}}function MT(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Tn(e,t)}else{if(bn(e,n))return;s_.set(n),r.uniformMatrix3fv(this.addr,!1,s_),Tn(e,n)}}function bT(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Tn(e,t)}else{if(bn(e,n))return;r_.set(n),r.uniformMatrix4fv(this.addr,!1,r_),Tn(e,n)}}function TT(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function wT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;r.uniform2iv(this.addr,t),Tn(e,t)}}function ET(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(bn(e,t))return;r.uniform3iv(this.addr,t),Tn(e,t)}}function AT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;r.uniform4iv(this.addr,t),Tn(e,t)}}function CT(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function RT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;r.uniform2uiv(this.addr,t),Tn(e,t)}}function PT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(bn(e,t))return;r.uniform3uiv(this.addr,t),Tn(e,t)}}function IT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;r.uniform4uiv(this.addr,t),Tn(e,t)}}function LT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Np.compareFunction=e.isReversedDepthBuffer()?Gu:Vu,s=Np):s=S_,e.setTexture2D(t||s,i)}function DT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||b_,i)}function NT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||T_,i)}function UT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||M_,i)}function FT(r){switch(r){case 5126:return _T;case 35664:return vT;case 35665:return xT;case 35666:return yT;case 35674:return ST;case 35675:return MT;case 35676:return bT;case 5124:case 35670:return TT;case 35667:case 35671:return wT;case 35668:case 35672:return ET;case 35669:case 35673:return AT;case 5125:return CT;case 36294:return RT;case 36295:return PT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return UT}}function OT(r,t){r.uniform1fv(this.addr,t)}function BT(r,t){let e=fa(t,this.size,2);r.uniform2fv(this.addr,e)}function zT(r,t){let e=fa(t,this.size,3);r.uniform3fv(this.addr,e)}function kT(r,t){let e=fa(t,this.size,4);r.uniform4fv(this.addr,e)}function HT(r,t){let e=fa(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function VT(r,t){let e=fa(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function GT(r,t){let e=fa(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function WT(r,t){r.uniform1iv(this.addr,t)}function XT(r,t){r.uniform2iv(this.addr,t)}function YT(r,t){r.uniform3iv(this.addr,t)}function qT(r,t){r.uniform4iv(this.addr,t)}function ZT(r,t){r.uniform1uiv(this.addr,t)}function JT(r,t){r.uniform2uiv(this.addr,t)}function $T(r,t){r.uniform3uiv(this.addr,t)}function KT(r,t){r.uniform4uiv(this.addr,t)}function QT(r,t,e){let n=this.cache,i=t.length,s=Zu(e,i);bn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Np:o=S_;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function jT(r,t,e){let n=this.cache,i=t.length,s=Zu(e,i);bn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||b_,s[o])}function tw(r,t,e){let n=this.cache,i=t.length,s=Zu(e,i);bn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||T_,s[o])}function ew(r,t,e){let n=this.cache,i=t.length,s=Zu(e,i);bn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||M_,s[o])}function nw(r){switch(r){case 5126:return OT;case 35664:return BT;case 35665:return zT;case 35666:return kT;case 35674:return HT;case 35675:return VT;case 35676:return GT;case 5124:case 35670:return WT;case 35667:case 35671:return XT;case 35668:case 35672:return YT;case 35669:case 35673:return qT;case 5125:return ZT;case 36294:return JT;case 36295:return $T;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return ew}}var Up=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=FT(e.type)}},Fp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nw(e.type)}},Op=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Lp=/(\w+)(\])?(\[|\.)?/g;function a_(r,t){r.seq.push(t),r.map[t.id]=t}function iw(r,t,e){let n=r.name,i=n.length;for(Lp.lastIndex=0;;){let s=Lp.exec(n),o=Lp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){a_(e,c===void 0?new Up(a,r,t):new Fp(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Op(a),a_(e,d)),e=d}}}var ha=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);iw(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function l_(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var rw=37297,sw=0;function ow(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var c_=new oe;function aw(r){pe._getMatrix(c_,pe.workingColorSpace,r);let t=`mat3( ${c_.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(r)){case cl:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function h_(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+ow(r.getShaderSource(t),a)}else return s}function lw(r,t){let e=aw(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var cw={[zl]:"Linear",[kl]:"Reinhard",[Hl]:"Cineon",[Hr]:"ACESFilmic",[Gl]:"AgX",[Wl]:"Neutral",[Vl]:"Custom"};function hw(r,t){let e=cw[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xu=new k;function uw(){pe.getLuminanceCoefficients(Xu);let r=Xu.x.toFixed(4),t=Xu.y.toFixed(4),e=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nc).join(`
`)}function dw(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pw(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function nc(r){return r!==""}function u_(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function f_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bp(r){return r.replace(mw,_w)}var gw=new Map;function _w(r,t){let e=ue[t];if(e===void 0){let n=gw.get(t);if(n!==void 0)e=ue[n],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bp(e)}var vw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d_(r){return r.replace(vw,xw)}function xw(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function p_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var yw={[kr]:"SHADOWMAP_TYPE_PCF",[ra]:"SHADOWMAP_TYPE_VSM"};function Sw(r){return yw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mw={[ys]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Xl]:"ENVMAP_TYPE_CUBE_UV"};function bw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Mw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tw={[js]:"ENVMAP_MODE_REFRACTION"};function ww(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Tw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ew={[eu]:"ENVMAP_BLENDING_MULTIPLY",[Cg]:"ENVMAP_BLENDING_MIX",[Rg]:"ENVMAP_BLENDING_ADD"};function Aw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Ew[r.combine]||"ENVMAP_BLENDING_NONE"}function Cw(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Rw(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Sw(e),c=bw(e),h=ww(e),d=Aw(e),u=Cw(e),f=fw(e),p=dw(s),_=i.createProgram(),m,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(nc).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(nc).join(`
`),g.length>0&&(g+=`
`)):(m=[p_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nc).join(`
`),g=[p_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?ue.tonemapping_pars_fragment:"",e.toneMapping!==Qi?hw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,lw("linearToOutputTexel",e.outputColorSpace),uw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nc).join(`
`)),o=Bp(o),o=u_(o,e),o=f_(o,e),a=Bp(a),a=u_(a,e),a=f_(a,e),o=d_(o),a=d_(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=M+m+o,v=M+g+a,S=l_(i,i.VERTEX_SHADER,w),T=l_(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(F){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",D=i.getShaderInfoLog(S)||"",P=i.getShaderInfoLog(T)||"",N=I.trim(),V=D.trim(),O=P.trim(),Z=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,T);else{let R=h_(i,S,"vertex"),Y=h_(i,T,"fragment");ie("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+N+`
`+R+`
`+Y)}else N!==""?ne("WebGLProgram: Program Info Log:",N):(V===""||O==="")&&(H=!1);H&&(F.diagnostics={runnable:Z,programLog:N,vertexShader:{log:V,prefix:m},fragmentShader:{log:O,prefix:g}})}i.deleteShader(S),i.deleteShader(T),x=new ha(i,_),b=pw(i,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,rw)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sw++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}var Pw=0,zp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new kp(t),e.set(t,n)),n}},kp=class{constructor(t){this.id=Pw++,this.code=t,this.usedTimes=0}};function Iw(r){return r===Ms||r===Kl||r===Ql}function Lw(r,t,e,n,i,s){let o=new dl,a=new zp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,C,F,I,D){let P=F.fog,N=I.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=t.get(x.envMap||V,O),H=Z&&Z.mapping===Xl?Z.image.height:null,R=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ne("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ft=Y!==void 0?Y.length:0,yt=0;N.morphAttributes.position!==void 0&&(yt=1),N.morphAttributes.normal!==void 0&&(yt=2),N.morphAttributes.color!==void 0&&(yt=3);let Et,Nt,Lt,W;if(R){let Yt=Mr[R];Et=Yt.vertexShader,Nt=Yt.fragmentShader}else{Et=x.vertexShader,Nt=x.fragmentShader;let Yt=a.getVertexShaderStage(x),vt=a.getFragmentShaderStage(x);a.update(x,Yt,vt),Lt=Yt.id,W=vt.id}let Q=r.getRenderTarget(),ut=r.state.buffers.depth.getReversed(),Rt=I.isInstancedMesh===!0,Tt=I.isBatchedMesh===!0,Ut=!!x.map,zt=!!x.matcap,et=!!Z,ct=!!x.aoMap,pt=!!x.lightMap,B=!!x.bumpMap&&x.wireframe===!1,j=!!x.normalMap,Ot=!!x.displacementMap,Ct=!!x.emissiveMap,Ft=!!x.metalnessMap,Jt=!!x.roughnessMap,z=x.anisotropy>0,re=x.clearcoat>0,Xt=x.dispersion>0,L=x.retroreflectivity>0,y=x.iridescence>0,X=x.sheen>0,q=x.transmission>0,it=z&&!!x.anisotropyMap,wt=re&&!!x.clearcoatMap,Mt=re&&!!x.clearcoatNormalMap,ot=re&&!!x.clearcoatRoughnessMap,lt=y&&!!x.iridescenceMap,Pt=y&&!!x.iridescenceThicknessMap,Vt=X&&!!x.sheenColorMap,At=X&&!!x.sheenRoughnessMap,tt=!!x.specularMap,nt=!!x.specularColorMap,bt=!!x.specularIntensityMap,It=q&&!!x.transmissionMap,U=q&&!!x.thicknessMap,_t=!!x.gradientMap,st=!!x.alphaMap,gt=x.alphaTest>0,xt=!!x.alphaHash,mt=!!x.extensions,St=Qi;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(St=r.toneMapping);let ht={shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:Et,fragmentShader:Nt,defines:x.defines,customVertexShaderID:Lt,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&I._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&I.instanceColor!==null,instancingMorph:Rt&&I.morphTexture!==null,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ut,matcap:zt,envMap:et,envMapMode:et&&Z.mapping,envMapCubeUVHeight:H,aoMap:ct,lightMap:pt,bumpMap:B,normalMap:j,displacementMap:Ot,emissiveMap:Ct,normalMapObjectSpace:j&&x.normalMapType===Lg,normalMapTangentSpace:j&&x.normalMapType===jl,packedNormalMap:j&&x.normalMapType===jl&&Iw(x.normalMap.format),metalnessMap:Ft,roughnessMap:Jt,anisotropy:z,anisotropyMap:it,clearcoat:re,clearcoatMap:wt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:ot,dispersion:Xt,retroreflection:L,iridescence:y,iridescenceMap:lt,iridescenceThicknessMap:Pt,sheen:X,sheenColorMap:Vt,sheenRoughnessMap:At,specularMap:tt,specularColorMap:nt,specularIntensityMap:bt,transmission:q,transmissionMap:It,thicknessMap:U,gradientMap:_t,opaque:x.transparent===!1&&x.blending===sa&&x.alphaToCoverage===!1,alphaMap:st,alphaTest:gt,alphaHash:xt,combine:x.combine,mapUv:Ut&&p(x.map.channel),aoMapUv:ct&&p(x.aoMap.channel),lightMapUv:pt&&p(x.lightMap.channel),bumpMapUv:B&&p(x.bumpMap.channel),normalMapUv:j&&p(x.normalMap.channel),displacementMapUv:Ot&&p(x.displacementMap.channel),emissiveMapUv:Ct&&p(x.emissiveMap.channel),metalnessMapUv:Ft&&p(x.metalnessMap.channel),roughnessMapUv:Jt&&p(x.roughnessMap.channel),anisotropyMapUv:it&&p(x.anisotropyMap.channel),clearcoatMapUv:wt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:At&&p(x.sheenRoughnessMap.channel),specularMapUv:tt&&p(x.specularMap.channel),specularColorMapUv:nt&&p(x.specularColorMap.channel),specularIntensityMapUv:bt&&p(x.specularIntensityMap.channel),transmissionMapUv:It&&p(x.transmissionMap.channel),thicknessMapUv:U&&p(x.thicknessMap.channel),alphaMapUv:st&&p(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(j||z),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Ut||st),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&j===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:yt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:St,decodeVideoTexture:Ut&&x.map.isVideoTexture===!0&&pe.getTransfer(x.map.colorSpace)===Me,decodeVideoTextureEmissive:Ct&&x.emissiveMap.isVideoTexture===!0&&pe.getTransfer(x.emissiveMap.colorSpace)===Me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jn,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:mt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&x.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function m(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(g(b,x),M(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){let b=f[x.type],C;if(b){let F=Mr[b];C=Vr.clone(F.uniforms)}else C=x.uniforms;return C}function v(x,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new Rw(r,b,x,i),c.push(C),h.set(b,C)),C}function S(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:E}}function Dw(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Nw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function m_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function g_(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,m,g){let M=r[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},r[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=g),t++,M}function l(u,f,p,_,m,g,M){M.reversedDepth===!0&&(m=-m);let w=a(u,f,p,_,m,g);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(u,f,p,_,m,g){let M=a(u,f,p,_,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||Nw),n.length>1&&n.sort(f||m_),i.length>1&&i.sort(f||m_)}function d(){for(let u=t,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function Uw(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new g_,r.set(n,[o])):i>=s.length?(o=new g_,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Fw(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Zt};break;case"SpotLight":e={position:new k,direction:new k,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function Ow(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Bw=0;function zw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function kw(r){let t=new Fw,e=Ow(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,s=new be,o=new be;function a(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,M=0,w=0,v=0,S=0,T=0,E=0,x=0,b=0,C=0;c.sort(zw);for(let I=0,D=c.length;I<D;I++){let P=c[I],N=P.color,V=P.intensity,O=P.distance,Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ms?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*V,d+=N.g*V,u+=N.b*V;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],V);C++}else if(P.isSunLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let R=P.shadow,Y=e.get(P);Y.shadowIntensity=R.intensity,Y.shadowBias=R.bias,Y.shadowNormalBias=R.normalBias,Y.shadowRadius=R.radius,Y.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[p]=Y,n.sunShadowMap[p]=Z;let ft=R.getViewportCount();for(let yt=0;yt<ft;yt++)n.sunShadowMatrix[_+yt]=R.getMatrix(yt),n.sunShadowCascade[_+yt]=R._cascadeData[yt];_+=ft,p++}n.sun[f]=H,f++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let R=P.shadow,Y=e.get(P);Y.shadowIntensity=R.intensity,Y.shadowBias=R.bias,Y.shadowNormalBias=R.normalBias,Y.shadowRadius=R.radius,Y.shadowMapSize=R.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=P.shadow.matrix,S++}n.directional[m]=H,m++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(N).multiplyScalar(V),H.distance=O,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[M]=H;let R=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,R.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[M]=R.matrix,P.castShadow){let Y=e.get(P);Y.shadowIntensity=R.intensity,Y.shadowBias=R.bias,Y.shadowNormalBias=R.normalBias,Y.shadowRadius=R.radius,Y.shadowMapSize=R.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=Z,E++}M++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(N).multiplyScalar(V),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=H,w++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let R=P.shadow,Y=e.get(P);Y.shadowIntensity=R.intensity,Y.shadowBias=R.bias,Y.shadowNormalBias=R.normalBias,Y.shadowRadius=R.radius,Y.shadowMapSize=R.mapSize,Y.shadowCameraNear=R.camera.near,Y.shadowCameraFar=R.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=H,g++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(V),H.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[v]=H,v++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let F=n.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==g||F.spotLength!==M||F.rectAreaLength!==w||F.hemiLength!==v||F.numSunShadows!==p||F.numDirectionalShadows!==S||F.numPointShadows!==T||F.numSpotShadows!==E||F.numSpotMaps!==x||F.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,F.sunLength=f,F.directionalLength=m,F.pointLength=g,F.spotLength=M,F.rectAreaLength=w,F.hemiLength=v,F.numSunShadows=p,F.numDirectionalShadows=S,F.numPointShadows=T,F.numSpotShadows=E,F.numSpotMaps=x,F.numLightProbes=C,n.version=Bw++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let v=c[M];if(v.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),u++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function __(r){let t=new kw(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Hw(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new __(r),t.set(i,[a])):s>=o.length?(a=new __(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ww=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Xw=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],v_=new be,ec=new k,Dp=new k;function Yw(r,t,e){let n=new Ko,i=new dt,s=new dt,o=new Je,a=new kh,l=new Hh,c={},h=e.maxTextureSize,d={[xs]:Sn,[Sn]:xs,[jn]:jn},u=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Vw,fragmentShader:Gw}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ce;p.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ee(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let g=this.type;this.render=function(T,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===cg&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kr);let b=r.getRenderTarget(),C=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Ui),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=g!==this.type;D&&E.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=T.length;P<N;P++){let V=T[P],O=V.shadow;if(O===void 0){ne("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let Z=O.getFrameExtents();i.multiply(Z),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,O.mapSize.y=s.y));let H=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||D===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ra){if(V.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new $e(i.x,i.y,{format:Ms,type:Mn,minFilter:dn,magFilter:dn,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new ps(i.x,i.y,Fi),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=dr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Cn,O.map.depthTexture.magFilter=Cn}else V.isPointLight?(O.map=new Yu(i.x),O.map.depthTexture=new Lh(i.x,ji)):(O.map=new $e(i.x,i.y),O.map.depthTexture=new ps(i.x,i.y,ji)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=dr,this.type===kr?(O.map.depthTexture.compareFunction=H?Gu:Vu,O.map.depthTexture.minFilter=dn,O.map.depthTexture.magFilter=dn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Cn,O.map.depthTexture.magFilter=Cn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let R=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();V.isPointLight!==!0&&O.updateMatrices(V,x);for(let Y=0;Y<R;Y++){let ft=O.getCamera(Y);if(V.isPointLight){let yt=O.camera,Et=O.matrix,Nt=V.distance||yt.far;Nt!==yt.far&&(yt.far=Nt,yt.updateProjectionMatrix()),ec.setFromMatrixPosition(V.matrixWorld),yt.position.copy(ec),Dp.copy(yt.position),Dp.add(Ww[Y]),yt.up.copy(Xw[Y]),yt.lookAt(Dp),yt.updateMatrixWorld(),Et.makeTranslation(-ec.x,-ec.y,-ec.z),v_.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(v_,yt.coordinateSystem,yt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,Y),r.clear();else{Y===0&&(r.setRenderTarget(O.map),r.clear());let yt=O.getViewport(Y);o.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),I.viewport(o)}n=O.getFrustum(Y),v(E,x,ft,V,this.type)}O.isPointLightShadow!==!0&&this.type===ra&&M(O,x),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(b,C,F)};function M(T,E){let x=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new $e(i.x,i.y,{format:Ms,type:Mn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,x,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,x,f,_,null)}function w(T,E,x,b){let C=null,F=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)C=F;else if(C=x.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=C.uuid,D=E.uuid,P=c[I];P===void 0&&(P={},c[I]=P);let N=P[D];N===void 0&&(N=C.clone(),P[D]=N,E.addEventListener("dispose",S)),C=N}if(C.visible=E.visible,C.wireframe=E.wireframe,b===ra?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=r.properties.get(C);I.light=x}return C}function v(T,E,x,b,C){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===ra)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let D=t.update(T),P=T.material;if(Array.isArray(P)){let N=D.groups;for(let V=0,O=N.length;V<O;V++){let Z=N[V],H=P[Z.materialIndex];if(H&&H.visible){let R=w(T,H,b,C);T.onBeforeShadow(r,T,E,x,D,R,Z),r.renderBufferDirect(x,null,D,R,T,Z),T.onAfterShadow(r,T,E,x,D,R,Z)}}}else if(P.visible){let N=w(T,P,b,C);T.onBeforeShadow(r,T,E,x,D,N,null),r.renderBufferDirect(x,null,D,N,T,null),T.onAfterShadow(r,T,E,x,D,N,null)}}let I=T.children;for(let D=0,P=I.length;D<P;D++)v(I[D],E,x,b,C)}function S(T){T.target.removeEventListener("dispose",S);for(let x in c){let b=c[x],C=T.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function qw(r,t){function e(){let U=!1,_t=new Je,st=null,gt=new Je(0,0,0,0);return{setMask:function(xt){st!==xt&&!U&&(r.colorMask(xt,xt,xt,xt),st=xt)},setLocked:function(xt){U=xt},setClear:function(xt,mt,St,ht,Yt){Yt===!0&&(xt*=ht,mt*=ht,St*=ht),_t.set(xt,mt,St,ht),gt.equals(_t)===!1&&(r.clearColor(xt,mt,St,ht),gt.copy(_t))},reset:function(){U=!1,st=null,gt.set(-1,0,0,0)}}}function n(){let U=!1,_t=!1,st=null,gt=null,xt=null;return{setReversed:function(mt){if(_t!==mt){let St=t.get("EXT_clip_control");mt?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),_t=mt;let ht=xt;xt=null,this.setClear(ht)}},getReversed:function(){return _t},setTest:function(mt){mt?Q(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(mt){st!==mt&&!U&&(r.depthMask(mt),st=mt)},setFunc:function(mt){if(_t&&(mt=Gg[mt]),gt!==mt){switch(mt){case xh:r.depthFunc(r.NEVER);break;case yh:r.depthFunc(r.ALWAYS);break;case Sh:r.depthFunc(r.LESS);break;case Go:r.depthFunc(r.LEQUAL);break;case Mh:r.depthFunc(r.EQUAL);break;case bh:r.depthFunc(r.GEQUAL);break;case Th:r.depthFunc(r.GREATER);break;case wh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=mt}},setLocked:function(mt){U=mt},setClear:function(mt){xt!==mt&&(xt=mt,_t&&(mt=1-mt),r.clearDepth(mt))},reset:function(){U=!1,st=null,gt=null,xt=null,_t=!1}}}function i(){let U=!1,_t=null,st=null,gt=null,xt=null,mt=null,St=null,ht=null,Yt=null;return{setTest:function(vt){U||(vt?Q(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function(vt){_t!==vt&&!U&&(r.stencilMask(vt),_t=vt)},setFunc:function(vt,rt,at){(st!==vt||gt!==rt||xt!==at)&&(r.stencilFunc(vt,rt,at),st=vt,gt=rt,xt=at)},setOp:function(vt,rt,at){(mt!==vt||St!==rt||ht!==at)&&(r.stencilOp(vt,rt,at),mt=vt,St=rt,ht=at)},setLocked:function(vt){U=vt},setClear:function(vt){Yt!==vt&&(r.clearStencil(vt),Yt=vt)},reset:function(){U=!1,_t=null,st=null,gt=null,xt=null,mt=null,St=null,ht=null,Yt=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,w=null,v=null,S=null,T=null,E=null,x=new Zt(0,0,0),b=0,C=!1,F=null,I=null,D=null,P=null,N=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Z=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=Z>=2);let R=null,Y={},ft=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),Et=new Je().fromArray(ft),Nt=new Je().fromArray(yt);function Lt(U,_t,st,gt){let xt=new Uint8Array(4),mt=r.createTexture();r.bindTexture(U,mt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let St=0;St<st;St++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(_t,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,xt):r.texImage2D(_t+St,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xt);return mt}let W={};W[r.TEXTURE_2D]=Lt(r.TEXTURE_2D,r.TEXTURE_2D,1),W[r.TEXTURE_CUBE_MAP]=Lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[r.TEXTURE_2D_ARRAY]=Lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),W[r.TEXTURE_3D]=Lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(r.DEPTH_TEST),o.setFunc(Go),B(!1),j(ip),Q(r.CULL_FACE),ct(Ui);function Q(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function ut(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Rt(U,_t){return u[U]!==_t?(r.bindFramebuffer(U,_t),u[U]=_t,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=_t),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=_t),!0):!1}function Tt(U,_t){let st=p,gt=!1;if(U){st=f.get(_t),st===void 0&&(st=[],f.set(_t,st));let xt=U.textures;if(st.length!==xt.length||st[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,St=xt.length;mt<St;mt++)st[mt]=r.COLOR_ATTACHMENT0+mt;st.length=xt.length,gt=!0}}else st[0]!==r.BACK&&(st[0]=r.BACK,gt=!0);gt&&r.drawBuffers(st)}function Ut(U){return _!==U?(r.useProgram(U),_=U,!0):!1}let zt={[Qs]:r.FUNC_ADD,[ug]:r.FUNC_SUBTRACT,[fg]:r.FUNC_REVERSE_SUBTRACT};zt[dg]=r.MIN,zt[pg]=r.MAX;let et={[mg]:r.ZERO,[gg]:r.ONE,[_g]:r.SRC_COLOR,[op]:r.SRC_ALPHA,[bg]:r.SRC_ALPHA_SATURATE,[Sg]:r.DST_COLOR,[xg]:r.DST_ALPHA,[vg]:r.ONE_MINUS_SRC_COLOR,[ap]:r.ONE_MINUS_SRC_ALPHA,[Mg]:r.ONE_MINUS_DST_COLOR,[yg]:r.ONE_MINUS_DST_ALPHA,[Tg]:r.CONSTANT_COLOR,[wg]:r.ONE_MINUS_CONSTANT_COLOR,[Eg]:r.CONSTANT_ALPHA,[Ag]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(U,_t,st,gt,xt,mt,St,ht,Yt,vt){if(U===Ui){m===!0&&(ut(r.BLEND),m=!1);return}if(m===!1&&(Q(r.BLEND),m=!0),U!==hg){if(U!==g||vt!==C){if((M!==Qs||S!==Qs)&&(r.blendEquation(r.FUNC_ADD),M=Qs,S=Qs),vt)switch(U){case sa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rn:r.blendFunc(r.ONE,r.ONE);break;case rp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ie("WebGLState: Invalid blending: ",U);break}else switch(U){case sa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case rp:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sp:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",U);break}w=null,v=null,T=null,E=null,x.set(0,0,0),b=0,g=U,C=vt}return}xt=xt||_t,mt=mt||st,St=St||gt,(_t!==M||xt!==S)&&(r.blendEquationSeparate(zt[_t],zt[xt]),M=_t,S=xt),(st!==w||gt!==v||mt!==T||St!==E)&&(r.blendFuncSeparate(et[st],et[gt],et[mt],et[St]),w=st,v=gt,T=mt,E=St),(ht.equals(x)===!1||Yt!==b)&&(r.blendColor(ht.r,ht.g,ht.b,Yt),x.copy(ht),b=Yt),g=U,C=!1}function pt(U,_t){U.side===jn?ut(r.CULL_FACE):Q(r.CULL_FACE);let st=U.side===Sn;_t&&(st=!st),B(st),U.blending===sa&&U.transparent===!1?ct(Ui):ct(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let gt=U.stencilWrite;a.setTest(gt),gt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ct(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function B(U){F!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),F=U)}function j(U){U!==ag?(Q(r.CULL_FACE),U!==I&&(U===ip?r.cullFace(r.BACK):U===lg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),I=U}function Ot(U){U!==D&&(O&&r.lineWidth(U),D=U)}function Ct(U,_t,st){U?(Q(r.POLYGON_OFFSET_FILL),(P!==_t||N!==st)&&(P=_t,N=st,o.getReversed()&&(_t=-_t),r.polygonOffset(_t,st))):ut(r.POLYGON_OFFSET_FILL)}function Ft(U){U?Q(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function Jt(U){U===void 0&&(U=r.TEXTURE0+V-1),R!==U&&(r.activeTexture(U),R=U)}function z(U,_t,st){st===void 0&&(R===null?st=r.TEXTURE0+V-1:st=R);let gt=Y[st];gt===void 0&&(gt={type:void 0,texture:void 0},Y[st]=gt),(gt.type!==U||gt.texture!==_t)&&(R!==st&&(r.activeTexture(st),R=st),r.bindTexture(U,_t||W[U]),gt.type=U,gt.texture=_t)}function re(){let U=Y[R];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Xt(){try{r.compressedTexImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function y(){try{r.texSubImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function X(){try{r.texSubImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function it(){try{r.compressedTexSubImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function wt(){try{r.texStorage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function Mt(){try{r.texStorage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function ot(){try{r.texImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function lt(){try{r.texImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function Pt(U){return d[U]!==void 0?d[U]:r.getParameter(U)}function Vt(U,_t){d[U]!==_t&&(r.pixelStorei(U,_t),d[U]=_t)}function At(U){Et.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Et.copy(U))}function tt(U){Nt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Nt.copy(U))}function nt(U,_t){let st=c.get(_t);st===void 0&&(st=new WeakMap,c.set(_t,st));let gt=st.get(U);gt===void 0&&(gt=r.getUniformBlockIndex(_t,U.name),st.set(U,gt))}function bt(U,_t){let gt=c.get(_t).get(U);l.get(_t)!==gt&&(r.uniformBlockBinding(_t,gt,U.__bindingPointIndex),l.set(_t,gt))}function It(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,Y={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,w=null,v=null,S=null,T=null,E=null,x=new Zt(0,0,0),b=0,C=!1,F=null,I=null,D=null,P=null,N=null,Et.set(0,0,r.canvas.width,r.canvas.height),Nt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:ut,bindFramebuffer:Rt,drawBuffers:Tt,useProgram:Ut,setBlending:ct,setMaterial:pt,setFlipSided:B,setCullFace:j,setLineWidth:Ot,setPolygonOffset:Ct,setScissorTest:Ft,activeTexture:Jt,bindTexture:z,unbindTexture:re,compressedTexImage2D:Xt,compressedTexImage3D:L,texImage2D:ot,texImage3D:lt,pixelStorei:Vt,getParameter:Pt,updateUBOMapping:nt,uniformBlockBinding:bt,texStorage2D:wt,texStorage3D:Mt,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:q,compressedTexSubImage3D:it,scissor:At,viewport:tt,reset:It}}function Zw(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,y){return p?new OffscreenCanvas(L,y):hl("canvas")}function m(L,y,X){let q=1,it=Xt(L);if((it.width>X||it.height>X)&&(q=X/Math.max(it.width,it.height)),q<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let wt=Math.floor(q*it.width),Mt=Math.floor(q*it.height);u===void 0&&(u=_(wt,Mt));let ot=y?_(wt,Mt):u;return ot.width=wt,ot.height=Mt,ot.getContext("2d").drawImage(L,0,0,wt,Mt),ne("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+wt+"x"+Mt+")."),ot}else return"data"in L&&ne("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),L;return L}function g(L){return L.generateMipmaps}function M(L){r.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(L,y,X,q,it,wt=!1){if(L!==null){if(r[L]!==void 0)return r[L];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Mt;q&&(Mt=t.get("EXT_texture_norm16"),Mt||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=y;if(y===r.RED&&(X===r.FLOAT&&(ot=r.R32F),X===r.HALF_FLOAT&&(ot=r.R16F),X===r.UNSIGNED_BYTE&&(ot=r.R8),X===r.UNSIGNED_SHORT&&Mt&&(ot=Mt.R16_EXT),X===r.SHORT&&Mt&&(ot=Mt.R16_SNORM_EXT)),y===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ot=r.R8UI),X===r.UNSIGNED_SHORT&&(ot=r.R16UI),X===r.UNSIGNED_INT&&(ot=r.R32UI),X===r.BYTE&&(ot=r.R8I),X===r.SHORT&&(ot=r.R16I),X===r.INT&&(ot=r.R32I)),y===r.RG&&(X===r.FLOAT&&(ot=r.RG32F),X===r.HALF_FLOAT&&(ot=r.RG16F),X===r.UNSIGNED_BYTE&&(ot=r.RG8),X===r.UNSIGNED_SHORT&&Mt&&(ot=Mt.RG16_EXT),X===r.SHORT&&Mt&&(ot=Mt.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(ot=r.RG8UI),X===r.UNSIGNED_SHORT&&(ot=r.RG16UI),X===r.UNSIGNED_INT&&(ot=r.RG32UI),X===r.BYTE&&(ot=r.RG8I),X===r.SHORT&&(ot=r.RG16I),X===r.INT&&(ot=r.RG32I)),y===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(ot=r.RGB8UI),X===r.UNSIGNED_SHORT&&(ot=r.RGB16UI),X===r.UNSIGNED_INT&&(ot=r.RGB32UI),X===r.BYTE&&(ot=r.RGB8I),X===r.SHORT&&(ot=r.RGB16I),X===r.INT&&(ot=r.RGB32I)),y===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(ot=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(ot=r.RGBA16UI),X===r.UNSIGNED_INT&&(ot=r.RGBA32UI),X===r.BYTE&&(ot=r.RGBA8I),X===r.SHORT&&(ot=r.RGBA16I),X===r.INT&&(ot=r.RGBA32I)),y===r.RGB&&(X===r.UNSIGNED_SHORT&&Mt&&(ot=Mt.RGB16_EXT),X===r.SHORT&&Mt&&(ot=Mt.RGB16_SNORM_EXT),X===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(ot=r.R11F_G11F_B10F)),y===r.RGBA){let lt=wt?cl:pe.getTransfer(it);X===r.FLOAT&&(ot=r.RGBA32F),X===r.HALF_FLOAT&&(ot=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ot=lt===Me?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT&&Mt&&(ot=Mt.RGBA16_EXT),X===r.SHORT&&Mt&&(ot=Mt.RGBA16_SNORM_EXT),X===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function S(L,y){let X;return L?y===null||y===ji||y===aa?X=r.DEPTH24_STENCIL8:y===Fi?X=r.DEPTH32F_STENCIL8:y===oa&&(X=r.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ji||y===aa?X=r.DEPTH_COMPONENT24:y===Fi?X=r.DEPTH_COMPONENT32F:y===oa&&(X=r.DEPTH_COMPONENT16),X}function T(L,y){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function E(L){let y=L.target;y.removeEventListener("dispose",E),b(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(L){let y=L.target;y.removeEventListener("dispose",x),F(y)}function b(L){let y=n.get(L);if(y.__webglInit===void 0)return;let X=L.source,q=f.get(X);if(q){let it=q[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&C(L),Object.keys(q).length===0&&f.delete(X)}n.remove(L)}function C(L){let y=n.get(L);r.deleteTexture(y.__webglTexture);let X=L.source,q=f.get(X);delete q[y.__cacheKey],o.memory.textures--}function F(L){let y=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let it=0;it<y.__webglFramebuffer[q].length;it++)r.deleteFramebuffer(y.__webglFramebuffer[q][it]);else r.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)r.deleteFramebuffer(y.__webglFramebuffer[q]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let X=L.textures;for(let q=0,it=X.length;q<it;q++){let wt=n.get(X[q]);wt.__webglTexture&&(r.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(X[q])}n.remove(L)}let I=0;function D(){I=0}function P(){return I}function N(L){I=L}function V(){let L=I;return L>=i.maxTextures&&ne("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,L}function O(L){let y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function Z(L,y){let X=n.get(L);if(L.isVideoTexture&&z(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){let q=L.image;if(q===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(X,L,y);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+y)}function H(L,y){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ut(X,L,y);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+y)}function R(L,y){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ut(X,L,y);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+y)}function Y(L,y){let X=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&X.__version!==L.version){Rt(X,L,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+y)}let ft={[Or]:r.REPEAT,[hr]:r.CLAMP_TO_EDGE,[Eh]:r.MIRRORED_REPEAT},yt={[Cn]:r.NEAREST,[Pg]:r.NEAREST_MIPMAP_NEAREST,[Yl]:r.NEAREST_MIPMAP_LINEAR,[dn]:r.LINEAR,[ru]:r.LINEAR_MIPMAP_NEAREST,[yr]:r.LINEAR_MIPMAP_LINEAR},Et={[Ng]:r.NEVER,[zg]:r.ALWAYS,[Ug]:r.LESS,[Vu]:r.LEQUAL,[Fg]:r.EQUAL,[Gu]:r.GEQUAL,[Og]:r.GREATER,[Bg]:r.NOTEQUAL};function Nt(L,y){if(y.type===Fi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===dn||y.magFilter===ru||y.magFilter===Yl||y.magFilter===yr||y.minFilter===dn||y.minFilter===ru||y.minFilter===Yl||y.minFilter===yr)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,ft[y.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,ft[y.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,ft[y.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,yt[y.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,yt[y.minFilter]),y.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Et[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Cn||y.minFilter!==Yl&&y.minFilter!==yr||y.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Lt(L,y){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",E));let q=y.source,it=f.get(q);it===void 0&&(it={},f.set(q,it));let wt=O(y);if(wt!==L.__cacheKey){it[wt]===void 0&&(it[wt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),it[wt].usedTimes++;let Mt=it[L.__cacheKey];Mt!==void 0&&(it[L.__cacheKey].usedTimes--,Mt.usedTimes===0&&C(y)),L.__cacheKey=wt,L.__webglTexture=it[wt].texture}return X}function W(L,y,X){return Math.floor(Math.floor(L/X)/y)}function Q(L,y,X,q){let wt=L.updateRanges;if(wt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,X,q,y.data);else{wt.sort((Vt,At)=>Vt.start-At.start);let Mt=0;for(let Vt=1;Vt<wt.length;Vt++){let At=wt[Mt],tt=wt[Vt],nt=At.start+At.count,bt=W(tt.start,y.width,4),It=W(At.start,y.width,4);tt.start<=nt+1&&bt===It&&W(tt.start+tt.count-1,y.width,4)===bt?At.count=Math.max(At.count,tt.start+tt.count-At.start):(++Mt,wt[Mt]=tt)}wt.length=Mt+1;let ot=e.getParameter(r.UNPACK_ROW_LENGTH),lt=e.getParameter(r.UNPACK_SKIP_PIXELS),Pt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Vt=0,At=wt.length;Vt<At;Vt++){let tt=wt[Vt],nt=Math.floor(tt.start/4),bt=Math.ceil(tt.count/4),It=nt%y.width,U=Math.floor(nt/y.width),_t=bt,st=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,It),e.pixelStorei(r.UNPACK_SKIP_ROWS,U),e.texSubImage2D(r.TEXTURE_2D,0,It,U,_t,st,X,q,y.data)}L.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,ot),e.pixelStorei(r.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(r.UNPACK_SKIP_ROWS,Pt)}}function ut(L,y,X){let q=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=r.TEXTURE_3D);let it=Lt(L,y),wt=y.source;e.bindTexture(q,L.__webglTexture,r.TEXTURE0+X);let Mt=n.get(wt);if(wt.version!==Mt.__version||it===!0){if(e.activeTexture(r.TEXTURE0+X),(typeof ImageBitmap!="undefined"&&y.image instanceof ImageBitmap)===!1){let st=pe.getPrimaries(pe.workingColorSpace),gt=y.colorSpace===tr?null:pe.getPrimaries(y.colorSpace),xt=y.colorSpace===tr||st===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let lt=m(y.image,!1,i.maxTextureSize);lt=re(y,lt);let Pt=s.convert(y.format,y.colorSpace),Vt=s.convert(y.type),At=v(y.internalFormat,Pt,Vt,y.normalized,y.colorSpace,y.isVideoTexture);Nt(q,y);let tt,nt=y.mipmaps,bt=y.isVideoTexture!==!0,It=Mt.__version===void 0||it===!0,U=wt.dataReady,_t=T(y,lt);if(y.isDepthTexture)At=S(y.format===Ss,y.type),It&&(bt?e.texStorage2D(r.TEXTURE_2D,1,At,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,At,lt.width,lt.height,0,Pt,Vt,null));else if(y.isDataTexture)if(nt.length>0){bt&&It&&e.texStorage2D(r.TEXTURE_2D,_t,At,nt[0].width,nt[0].height);for(let st=0,gt=nt.length;st<gt;st++)tt=nt[st],bt?U&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,tt.width,tt.height,Pt,Vt,tt.data):e.texImage2D(r.TEXTURE_2D,st,At,tt.width,tt.height,0,Pt,Vt,tt.data);y.generateMipmaps=!1}else bt?(It&&e.texStorage2D(r.TEXTURE_2D,_t,At,lt.width,lt.height),U&&Q(y,lt,Pt,Vt)):e.texImage2D(r.TEXTURE_2D,0,At,lt.width,lt.height,0,Pt,Vt,lt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){bt&&It&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,At,nt[0].width,nt[0].height,lt.depth);for(let st=0,gt=nt.length;st<gt;st++)if(tt=nt[st],y.format!==Oi)if(Pt!==null)if(bt){if(U)if(y.layerUpdates.size>0){let xt=Mp(tt.width,tt.height,y.format,y.type);for(let mt of y.layerUpdates){let St=tt.data.subarray(mt*xt/tt.data.BYTES_PER_ELEMENT,(mt+1)*xt/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,mt,tt.width,tt.height,1,Pt,St)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,tt.width,tt.height,lt.depth,Pt,tt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,At,tt.width,tt.height,lt.depth,0,tt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,tt.width,tt.height,lt.depth,Pt,Vt,tt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,At,tt.width,tt.height,lt.depth,0,Pt,Vt,tt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{bt&&It&&e.texStorage2D(r.TEXTURE_2D,_t,At,nt[0].width,nt[0].height);for(let st=0,gt=nt.length;st<gt;st++)tt=nt[st],y.format!==Oi?Pt!==null?bt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,tt.width,tt.height,Pt,tt.data):e.compressedTexImage2D(r.TEXTURE_2D,st,At,tt.width,tt.height,0,tt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?U&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,tt.width,tt.height,Pt,Vt,tt.data):e.texImage2D(r.TEXTURE_2D,st,At,tt.width,tt.height,0,Pt,Vt,tt.data)}else if(y.isDataArrayTexture)if(bt){if(It&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,At,lt.width,lt.height,lt.depth),U)if(y.layerUpdates.size>0){let st=Mp(lt.width,lt.height,y.format,y.type);for(let gt of y.layerUpdates){let xt=lt.data.subarray(gt*st/lt.data.BYTES_PER_ELEMENT,(gt+1)*st/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,lt.width,lt.height,1,Pt,Vt,xt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Pt,Vt,lt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,At,lt.width,lt.height,lt.depth,0,Pt,Vt,lt.data);else if(y.isData3DTexture)bt?(It&&e.texStorage3D(r.TEXTURE_3D,_t,At,lt.width,lt.height,lt.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Pt,Vt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,At,lt.width,lt.height,lt.depth,0,Pt,Vt,lt.data);else if(y.isFramebufferTexture){if(It)if(bt)e.texStorage2D(r.TEXTURE_2D,_t,At,lt.width,lt.height);else{let st=lt.width,gt=lt.height;for(let xt=0;xt<_t;xt++)e.texImage2D(r.TEXTURE_2D,xt,At,st,gt,0,Pt,Vt,null),st>>=1,gt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let st=r.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),lt.parentNode!==st){st.appendChild(lt),d.add(y),st.onpaint=gt=>{let xt=gt.changedElements;for(let mt of d)xt.includes(mt.image)&&(mt.needsUpdate=!0)},st.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,lt);else{let xt=r.RGBA,mt=r.RGBA,St=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xt,mt,St,lt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if(bt&&It){let st=Xt(nt[0]);e.texStorage2D(r.TEXTURE_2D,_t,At,st.width,st.height)}for(let st=0,gt=nt.length;st<gt;st++)tt=nt[st],bt?U&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,Pt,Vt,tt):e.texImage2D(r.TEXTURE_2D,st,At,Pt,Vt,tt);y.generateMipmaps=!1}else if(bt){if(It){let st=Xt(lt);e.texStorage2D(r.TEXTURE_2D,_t,At,st.width,st.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,Vt,lt)}else e.texImage2D(r.TEXTURE_2D,0,At,Pt,Vt,lt);g(y)&&M(q),Mt.__version=wt.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function Rt(L,y,X){if(y.image.length!==6)return;let q=Lt(L,y),it=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+X);let wt=n.get(it);if(it.version!==wt.__version||q===!0){e.activeTexture(r.TEXTURE0+X);let Mt=pe.getPrimaries(pe.workingColorSpace),ot=y.colorSpace===tr?null:pe.getPrimaries(y.colorSpace),lt=y.colorSpace===tr||Mt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Pt=y.isCompressedTexture||y.image[0].isCompressedTexture,Vt=y.image[0]&&y.image[0].isDataTexture,At=[];for(let mt=0;mt<6;mt++)!Pt&&!Vt?At[mt]=m(y.image[mt],!0,i.maxCubemapSize):At[mt]=Vt?y.image[mt].image:y.image[mt],At[mt]=re(y,At[mt]);let tt=At[0],nt=s.convert(y.format,y.colorSpace),bt=s.convert(y.type),It=v(y.internalFormat,nt,bt,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,_t=wt.__version===void 0||q===!0,st=it.dataReady,gt=T(y,tt);Nt(r.TEXTURE_CUBE_MAP,y);let xt;if(Pt){U&&_t&&e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,It,tt.width,tt.height);for(let mt=0;mt<6;mt++){xt=At[mt].mipmaps;for(let St=0;St<xt.length;St++){let ht=xt[St];y.format!==Oi?nt!==null?U?st&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St,0,0,ht.width,ht.height,nt,ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St,It,ht.width,ht.height,0,ht.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St,0,0,ht.width,ht.height,nt,bt,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St,It,ht.width,ht.height,0,nt,bt,ht.data)}}}else{if(xt=y.mipmaps,U&&_t){xt.length>0&&gt++;let mt=Xt(At[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,It,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Vt){U?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,At[mt].width,At[mt].height,nt,bt,At[mt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,It,At[mt].width,At[mt].height,0,nt,bt,At[mt].data);for(let St=0;St<xt.length;St++){let Yt=xt[St].image[mt].image;U?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St+1,0,0,Yt.width,Yt.height,nt,bt,Yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St+1,It,Yt.width,Yt.height,0,nt,bt,Yt.data)}}else{U?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,nt,bt,At[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,It,nt,bt,At[mt]);for(let St=0;St<xt.length;St++){let ht=xt[St];U?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St+1,0,0,nt,bt,ht.image[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St+1,It,nt,bt,ht.image[mt])}}}g(y)&&M(r.TEXTURE_CUBE_MAP),wt.__version=it.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function Tt(L,y,X,q,it,wt){let Mt=s.convert(X.format,X.colorSpace),ot=s.convert(X.type),lt=v(X.internalFormat,Mt,ot,X.normalized,X.colorSpace),Pt=n.get(y),Vt=n.get(X);if(Vt.__renderTarget=y,!Pt.__hasExternalTextures){let At=Math.max(1,y.width>>wt),tt=Math.max(1,y.height>>wt);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,wt,lt,At,tt,y.depth,0,Mt,ot,null):e.texImage2D(it,wt,lt,At,tt,0,Mt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),Jt(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,it,Vt.__webglTexture,0,Ft(y)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,it,Vt.__webglTexture,wt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(L,y,X){if(r.bindRenderbuffer(r.RENDERBUFFER,L),y.depthBuffer){let q=y.depthTexture,it=q&&q.isDepthTexture?q.type:null,wt=S(y.stencilBuffer,it),Mt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Jt(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ft(y),wt,y.width,y.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft(y),wt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,wt,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,L)}else{let q=y.textures;for(let it=0;it<q.length;it++){let wt=q[it],Mt=s.convert(wt.format,wt.colorSpace),ot=s.convert(wt.type),lt=v(wt.internalFormat,Mt,ot,wt.normalized,wt.colorSpace);Jt(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ft(y),lt,y.width,y.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft(y),lt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,lt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(L,y,X){let q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(y.depthTexture);if(it.__renderTarget=y,(!it.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(it.__webglInit===void 0&&(it.__webglInit=!0,y.depthTexture.addEventListener("dispose",E)),it.__webglTexture===void 0){it.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,y.depthTexture);let Pt=s.convert(y.depthTexture.format),Vt=s.convert(y.depthTexture.type),At;y.depthTexture.format===dr?At=r.DEPTH_COMPONENT24:y.depthTexture.format===Ss&&(At=r.DEPTH24_STENCIL8);for(let tt=0;tt<6;tt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,At,y.width,y.height,0,Pt,Vt,null)}}else Z(y.depthTexture,0);let wt=it.__webglTexture,Mt=Ft(y),ot=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,lt=y.depthTexture.format===Ss?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===dr)Jt(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,ot,wt,0,Mt):r.framebufferTexture2D(r.FRAMEBUFFER,lt,ot,wt,0);else if(y.depthTexture.format===Ss)Jt(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,ot,wt,0,Mt):r.framebufferTexture2D(r.FRAMEBUFFER,lt,ot,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(L){let y=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==L.depthTexture){let q=L.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let it=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",it)};q.addEventListener("dispose",it),y.__depthDisposeCallback=it}y.__boundDepthTexture=q}if(L.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let q=0;q<6;q++)zt(y.__webglFramebuffer[q],L,q);else{let q=L.texture.mipmaps;q&&q.length>0?zt(y.__webglFramebuffer[0],L,0):zt(y.__webglFramebuffer,L,0)}else if(X){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=r.createRenderbuffer(),Ut(y.__webglDepthbuffer[q],L,!1);else{let it=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,wt),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,wt)}}else{let q=L.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Ut(y.__webglDepthbuffer,L,!1);else{let it=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,wt),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,wt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(L,y,X){let q=n.get(L);y!==void 0&&Tt(q.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&et(L)}function pt(L){let y=L.texture,X=n.get(L),q=n.get(y);L.addEventListener("dispose",x);let it=L.textures,wt=L.isWebGLCubeRenderTarget===!0,Mt=it.length>1;if(Mt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=y.version,o.memory.textures++),wt){X.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[ot]=[];for(let lt=0;lt<y.mipmaps.length;lt++)X.__webglFramebuffer[ot][lt]=r.createFramebuffer()}else X.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)X.__webglFramebuffer[ot]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let ot=0,lt=it.length;ot<lt;ot++){let Pt=n.get(it[ot]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&Jt(L)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ot=0;ot<it.length;ot++){let lt=it[ot];X.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ot]);let Pt=s.convert(lt.format,lt.colorSpace),Vt=s.convert(lt.type),At=v(lt.internalFormat,Pt,Vt,lt.normalized,lt.colorSpace,L.isXRRenderTarget===!0),tt=Ft(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,At,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,X.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(wt){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let lt=0;lt<y.mipmaps.length;lt++)Tt(X.__webglFramebuffer[ot][lt],L,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,lt);else Tt(X.__webglFramebuffer[ot],L,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(y)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ot=0,lt=it.length;ot<lt;ot++){let Pt=it[ot],Vt=n.get(Pt),At=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(At,Vt.__webglTexture),Nt(At,Pt),Tt(X.__webglFramebuffer,L,Pt,r.COLOR_ATTACHMENT0+ot,At,0),g(Pt)&&M(At)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ot=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,q.__webglTexture),Nt(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let lt=0;lt<y.mipmaps.length;lt++)Tt(X.__webglFramebuffer[lt],L,y,r.COLOR_ATTACHMENT0,ot,lt);else Tt(X.__webglFramebuffer,L,y,r.COLOR_ATTACHMENT0,ot,0);g(y)&&M(ot),e.unbindTexture()}L.depthBuffer&&et(L)}function B(L){let y=L.textures;for(let X=0,q=y.length;X<q;X++){let it=y[X];if(g(it)){let wt=w(L),Mt=n.get(it).__webglTexture;e.bindTexture(wt,Mt),M(wt),e.unbindTexture()}}}let j=[],Ot=[];function Ct(L){if(L.samples>0){if(Jt(L)===!1){let y=L.textures,X=L.width,q=L.height,it=r.COLOR_BUFFER_BIT,wt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(L),ot=y.length>1;if(ot)for(let Pt=0;Pt<y.length;Pt++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let lt=L.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Pt=0;Pt<y.length;Pt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[Pt]);let Vt=n.get(y[Pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Vt,0)}r.blitFramebuffer(0,0,X,q,0,0,X,q,it,r.NEAREST),l===!0&&(j.length=0,Ot.length=0,j.push(r.COLOR_ATTACHMENT0+Pt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(j.push(wt),Ot.push(wt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let Pt=0;Pt<y.length;Pt++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[Pt]);let Vt=n.get(y[Pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,Vt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let y=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Ft(L){return Math.min(i.maxSamples,L.samples)}function Jt(L){let y=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function z(L){let y=o.render.frame;h.get(L)!==y&&(h.set(L,y),L.update())}function re(L,y){let X=L.colorSpace,q=L.format,it=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==ll&&X!==tr&&(pe.getTransfer(X)===Me?(q!==Oi||it!==di)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",X)),y}function Xt(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=D,this.getTextureUnits=P,this.setTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=R,this.setTextureCube=Y,this.rebindTextures=ct,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Jw(r,t){function e(n,i=tr){let s,o=pe.getTransfer(i);if(n===di)return r.UNSIGNED_BYTE;if(n===ou)return r.UNSIGNED_SHORT_4_4_4_4;if(n===au)return r.UNSIGNED_SHORT_5_5_5_1;if(n===up)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===fp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===cp)return r.BYTE;if(n===hp)return r.SHORT;if(n===oa)return r.UNSIGNED_SHORT;if(n===su)return r.INT;if(n===ji)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===Mn)return r.HALF_FLOAT;if(n===dp)return r.ALPHA;if(n===pp)return r.RGB;if(n===Oi)return r.RGBA;if(n===dr)return r.DEPTH_COMPONENT;if(n===Ss)return r.DEPTH_STENCIL;if(n===lu)return r.RED;if(n===cu)return r.RED_INTEGER;if(n===Ms)return r.RG;if(n===hu)return r.RG_INTEGER;if(n===uu)return r.RGBA_INTEGER;if(n===ql||n===Zl||n===Jl||n===$l)if(o===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$l)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fu||n===du||n===pu||n===mu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gu||n===_u||n===vu||n===xu||n===yu||n===Kl||n===Su)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gu||n===_u)return o===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===vu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===xu)return s.COMPRESSED_R11_EAC;if(n===yu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Kl)return s.COMPRESSED_RG11_EAC;if(n===Su)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mu||n===bu||n===Tu||n===wu||n===Eu||n===Au||n===Cu||n===Ru||n===Pu||n===Iu||n===Lu||n===Du||n===Nu||n===Uu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Au)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ru)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Iu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Du)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fu||n===Ou||n===Bu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Fu)return o===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zu||n===ku||n===Ql||n===Hu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===zu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===aa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var $w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kw=`
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

}`,Hp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Sl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ee({vertexShader:$w,fragmentShader:Kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vp=class extends pr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding!="undefined",m=new Hp,g={},M=e.getContextAttributes(),w=null,v=null,S=[],T=[],E=new dt,x=null,b=null,C=new xn;C.viewport=new Je;let F=new xn;F.viewport=new Je;let I=[C,F],D=new jh,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=S[W];return Q===void 0&&(Q=new Zo,S[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=S[W];return Q===void 0&&(Q=new Zo,S[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=S[W];return Q===void 0&&(Q=new Zo,S[W]=Q),Q.getHandSpace()};function V(W){let Q=T.indexOf(W.inputSource);if(Q===-1)return;let ut=S[Q];ut!==void 0&&(ut.update(W.inputSource,W.frame,c||o),ut.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",Z);for(let W=0;W<S.length;W++){let Q=T[W];Q!==null&&(T[W]=null,S[W].disconnect(Q))}P=null,N=null,m.reset();for(let W in g)delete g[W];if(t.setRenderTarget(w),f=null,u=null,d=null,i=null,v=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(E.width,E.height,!1),b!==null){let W=b.camera;W.fov=b.fov,W.zoom=b.zoom,W.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",O),i.addEventListener("inputsourceschange",Z),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Rt=null,Tt=null;M.depth&&(Tt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=M.stencil?Ss:dr,Rt=M.stencil?aa:ji);let Ut={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ut),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new $e(u.textureWidth,u.textureHeight,{format:Oi,type:di,depthTexture:new ps(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ut={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new $e(f.framebufferWidth,f.framebufferHeight,{format:Oi,type:di,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Lt.setContext(i),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(W){for(let Q=0;Q<W.removed.length;Q++){let ut=W.removed[Q],Rt=T.indexOf(ut);Rt>=0&&(T[Rt]=null,S[Rt].disconnect(ut))}for(let Q=0;Q<W.added.length;Q++){let ut=W.added[Q],Rt=T.indexOf(ut);if(Rt===-1){for(let Ut=0;Ut<S.length;Ut++)if(Ut>=T.length){T.push(ut),Rt=Ut;break}else if(T[Ut]===null){T[Ut]=ut,Rt=Ut;break}if(Rt===-1)break}let Tt=S[Rt];Tt&&Tt.connect(ut)}}let H=new k,R=new k;function Y(W,Q,ut){H.setFromMatrixPosition(Q.matrixWorld),R.setFromMatrixPosition(ut.matrixWorld);let Rt=H.distanceTo(R),Tt=Q.projectionMatrix.elements,Ut=ut.projectionMatrix.elements,zt=Tt[14]/(Tt[10]-1),et=Tt[14]/(Tt[10]+1),ct=(Tt[9]+1)/Tt[5],pt=(Tt[9]-1)/Tt[5],B=(Tt[8]-1)/Tt[0],j=(Ut[8]+1)/Ut[0],Ot=zt*B,Ct=zt*j,Ft=Rt/(-B+j),Jt=Ft*-B;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Jt),W.translateZ(Ft),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Tt[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let z=zt+Ft,re=et+Ft,Xt=Ot-Jt,L=Ct+(Rt-Jt),y=ct*et/re*z,X=pt*et/re*z;W.projectionMatrix.makePerspective(Xt,L,y,X,z,re),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ft(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let Q=W.near,ut=W.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),D.near=F.near=C.near=Q,D.far=F.far=C.far=ut,(P!==D.near||N!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),P=D.near,N=D.far),D.layers.mask=W.layers.mask|6,C.layers.mask=D.layers.mask&-5,F.layers.mask=D.layers.mask&-3;let Rt=W.parent,Tt=D.cameras;ft(D,Rt);for(let Ut=0;Ut<Tt.length;Ut++)ft(Tt[Ut],Rt);Tt.length===2?Y(D,C,F):D.projectionMatrix.copy(C.projectionMatrix),b===null&&W.isPerspectiveCamera&&(b={camera:W,fov:W.fov,zoom:W.zoom}),yt(W,D,Rt)};function yt(W,Q,ut){ut===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(ut.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Yo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(W){return g[W]};let Et=null;function Nt(W,Q){if(h=Q.getViewerPose(c||o),p=Q,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Rt=!1;ut.length!==D.cameras.length&&(D.cameras.length=0,Rt=!0);for(let et=0;et<ut.length;et++){let ct=ut[et],pt=null;if(f!==null)pt=f.getViewport(ct);else{let j=d.getViewSubImage(u,ct);pt=j.viewport,et===0&&(t.setRenderTargetTextures(v,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(v))}let B=I[et];B===void 0&&(B=new xn,B.layers.enable(et),B.viewport=new Je,I[et]=B),B.matrix.fromArray(ct.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(ct.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(pt.x,pt.y,pt.width,pt.height),et===0&&(D.matrix.copy(B.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Rt===!0&&D.cameras.push(B)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let et=d.getDepthInformation(ut[0]);et&&et.isValid&&et.texture&&m.init(et,i.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let et=0;et<ut.length;et++){let ct=ut[et].camera;if(ct){let pt=g[ct];pt||(pt=new Sl,g[ct]=pt);let B=d.getCameraImage(ct);pt.sourceTexture=B}}}}for(let ut=0;ut<S.length;ut++){let Rt=T[ut],Tt=S[ut];Rt!==null&&Tt!==void 0&&Tt.update(Rt,Q,c||o)}Et&&Et(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let Lt=new x_;Lt.setAnimationLoop(Nt),this.setAnimationLoop=function(W){Et=W},this.dispose=function(){}}},Qw=new be,w_=new oe;w_.set(-1,0,0,0,1,0,0,0,1);function jw(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,xp(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Sn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Sn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=t.get(g),w=M.envMap,v=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Qw.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(w_),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Sn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tE(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let T=S.program;n.uniformBlockBinding(v,T)}function c(v,S){let T=i[v.id];T===void 0&&(m(v),T=h(v),i[v.id]=T,v.addEventListener("dispose",M));let E=S.program;n.updateUBOMapping(v,E);let x=t.render.frame;s[v.id]!==x&&(u(v),s[v.id]=x)}function h(v){let S=d();v.__bindingPointIndex=S;let T=r.createBuffer(),E=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,E,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,T),T}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=i[v.id],T=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,b=T.length;x<b;x++){let C=T[x];if(Array.isArray(C))for(let F=0,I=C.length;F<I;F++)f(C[F],x,F,E);else f(C,x,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,T,E){if(_(v,S,T,E)===!0){let x=v.__offset,b=v.value;if(Array.isArray(b)){let C=0;for(let F=0;F<b.length;F++){let I=b[F],D=g(I);p(I,v.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function p(v,S,T){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,T)}function _(v,S,T,E){let x=v.value,b=S+"_"+T;if(E[b]===void 0)return typeof x=="number"||typeof x=="boolean"?E[b]=x:ArrayBuffer.isView(x)?E[b]=x.slice():E[b]=x.clone(),!0;{let C=E[b];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return E[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(v){let S=v.uniforms,T=0,E=16;for(let b=0,C=S.length;b<C;b++){let F=Array.isArray(S[b])?S[b]:[S[b]];for(let I=0,D=F.length;I<D;I++){let P=F[I],N=Array.isArray(P.value)?P.value:[P.value];for(let V=0,O=N.length;V<O;V++){let Z=N[V],H=g(Z),R=T%E,Y=R%H.boundary,ft=R+Y;T+=Y,ft!==0&&E-ft<H.storage&&(T+=E-ft),P.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=H.storage}}}let x=T%E;return x>0&&(T+=E-x),v.__size=T,v.__cache={},this}function g(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",v),S}function M(v){let S=v.target;S.removeEventListener("dispose",M);let T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function w(){for(let v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:w}}var eE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sr=null;function nE(){return Sr===null&&(Sr=new xl(eE,16,16,Ms,Mn),Sr.name="DFG_LUT",Sr.minFilter=dn,Sr.magFilter=dn,Sr.wrapS=hr,Sr.wrapT=hr,Sr.generateMipmaps=!1,Sr.needsUpdate=!0),Sr}var ua=class{constructor(t={}){let{canvas:e=kg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=di}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,m=new Set([uu,hu,cu]),g=new Set([di,ji,oa,aa,ou,au]),M=new Uint32Array(4),w=new Int32Array(4),v=new k,S=null,T=null,E=[],x=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,F=!1,I=null,D=null,P=null,N=null;this._outputColorSpace=Ze;let V=0,O=0,Z=null,H=-1,R=null,Y=new Je,ft=new Je,yt=null,Et=new Zt(0),Nt=0,Lt=e.width,W=e.height,Q=1,ut=null,Rt=null,Tt=new Je(0,0,Lt,W),Ut=new Je(0,0,Lt,W),zt=!1,et=new Ko,ct=!1,pt=!1,B=new be,j=new k,Ot=new Je,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function Jt(){return Z===null?Q:1}let z=n;function re(A,G){return e.getContext(A,G)}let Xt,L,y,X,q,it,wt,Mt,ot,lt,Pt,Vt,At,tt,nt,bt,It,U,_t,st,gt,xt,mt;try{let A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Yt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),z===null){let G="webgl2";if(z=re(G,A),z===null)throw re(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}St()}catch(A){throw e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ie("WebGLRenderer: "+A.message),A}function St(){Xt=new cT(z),Xt.init(),gt=new Jw(z,Xt),L=new j1(z,Xt,t,gt),y=new qw(z,Xt),L.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),D=z.createFramebuffer(),P=z.createFramebuffer(),N=z.createFramebuffer(),X=new fT(z),q=new Dw,it=new Zw(z,Xt,y,q,L,gt,X),wt=new lT(C),Mt=new pM(z),xt=new K1(z,Mt),ot=new hT(z,Mt,X,xt),lt=new pT(z,ot,Mt,xt,X),U=new dT(z,L,it),nt=new tT(q),Pt=new Lw(C,wt,Xt,L,xt,nt),Vt=new jw(C,q),At=new Uw,tt=new Hw(Xt),It=new $1(C,wt,y,lt,p,l),bt=new Yw(C,lt,L),mt=new tE(z,X,L,y),_t=new Q1(z,Xt,X),st=new uT(z,Xt,X),X.programs=Pt.programs,C.capabilities=L,C.extensions=Xt,C.properties=q,C.renderLists=At,C.shadowMap=bt,C.state=y,C.info=X}_!==di&&(b=new gT(_,e.width,e.height,a,i,s));let ht=new Vp(C,z);this.xr=ht,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=Xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(Lt,W,!1))},this.getSize=function(A){return A.set(Lt,W)},this.setSize=function(A,G,K=!0){if(ht.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=A,W=G,e.width=Math.floor(A*Q),e.height=Math.floor(G*Q),K===!0&&(e.style.width=A+"px",e.style.height=G+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(Lt*Q,W*Q).floor()},this.setDrawingBufferSize=function(A,G,K){Lt=A,W=G,Q=K,e.width=Math.floor(A*K),e.height=Math.floor(G*K),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(_===di){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Y)},this.getViewport=function(A){return A.copy(Tt)},this.setViewport=function(A,G,K,J){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,G,K,J),y.viewport(Y.copy(Tt).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(Ut)},this.setScissor=function(A,G,K,J){A.isVector4?Ut.set(A.x,A.y,A.z,A.w):Ut.set(A,G,K,J),y.scissor(ft.copy(Ut).multiplyScalar(Q).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(A){y.setScissorTest(zt=A)},this.setOpaqueSort=function(A){ut=A},this.setTransparentSort=function(A){Rt=A},this.getClearColor=function(A){return A.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,K=!0){let J=0;if(A){let $=!1;if(Z!==null){let Dt=Z.texture.format;$=m.has(Dt)}if($){let Dt=Z.texture.type,Gt=g.has(Dt),Bt=It.getClearColor(),$t=It.getClearAlpha(),jt=Bt.r,ce=Bt.g,ve=Bt.b;Gt?(M[0]=jt,M[1]=ce,M[2]=ve,M[3]=$t,z.clearBufferuiv(z.COLOR,0,M)):(w[0]=jt,w[1]=ce,w[2]=ve,w[3]=$t,z.clearBufferiv(z.COLOR,0,w))}else J|=z.COLOR_BUFFER_BIT}G&&(J|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),It.dispose(),At.dispose(),tt.dispose(),q.dispose(),wt.dispose(),lt.dispose(),xt.dispose(),mt.dispose(),Pt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Te),ht.removeEventListener("sessionend",_e),ae.stop()};function Yt(A){A.preventDefault(),ul("WebGLRenderer: Context Lost."),F=!0}function vt(){ul("WebGLRenderer: Context Restored."),F=!1;let A=X.autoReset,G=bt.enabled,K=bt.autoUpdate,J=bt.needsUpdate,$=bt.type;St(),X.autoReset=A,bt.enabled=G,bt.autoUpdate=K,bt.needsUpdate=J,bt.type=$}function rt(A){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){let G=A.target;G.removeEventListener("dispose",at),kt(G)}function kt(A){ge(A),q.remove(A)}function ge(A){let G=q.get(A).programs;G!==void 0&&(G.forEach(function(K){Pt.releaseProgram(K)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,K,J,$,Dt){G===null&&(G=Ct);let Gt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Bt=en(A,G,K,J,$);y.setMaterial(J,Gt);let $t=K.index,jt=1;if(J.wireframe===!0){if($t=ot.getWireframeAttribute(K),$t===void 0)return;jt=2}let ce=K.drawRange,ve=K.attributes.position,Kt=ce.start*jt,Ae=(ce.start+ce.count)*jt;Dt!==null&&(Kt=Math.max(Kt,Dt.start*jt),Ae=Math.min(Ae,(Dt.start+Dt.count)*jt)),$t!==null?(Kt=Math.max(Kt,0),Ae=Math.min(Ae,$t.count)):ve!=null&&(Kt=Math.max(Kt,0),Ae=Math.min(Ae,ve.count));let un=Ae-Kt;if(un<0||un===1/0)return;xt.setup($,J,Bt,K,$t);let Ve,Fe=_t;if($t!==null&&(Ve=Mt.get($t),Fe=st,Fe.setIndex(Ve)),$.isMesh)J.wireframe===!0?(y.setLineWidth(J.wireframeLinewidth*Jt()),Fe.setMode(z.LINES)):Fe.setMode(z.TRIANGLES);else if($.isLine){let Fn=J.linewidth;Fn===void 0&&(Fn=1),y.setLineWidth(Fn*Jt()),$.isLineSegments?Fe.setMode(z.LINES):$.isLineLoop?Fe.setMode(z.LINE_LOOP):Fe.setMode(z.LINE_STRIP)}else $.isPoints?Fe.setMode(z.POINTS):$.isSprite&&Fe.setMode(z.TRIANGLES);if($.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))Fe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Fn=$._multiDrawStarts,Wt=$._multiDrawCounts,qn=$._multiDrawCount,Se=$t?Mt.get($t).bytesPerElement:1,Ri=q.get(J).currentProgram.getUniforms();for(let rr=0;rr<qn;rr++)Ri.setValue(z,"_gl_DrawID",rr),Fe.render(Fn[rr]/Se,Wt[rr])}else if($.isInstancedMesh)Fe.renderInstances(Kt,un,$.count);else if(K.isInstancedBufferGeometry){let Fn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Wt=Math.min(K.instanceCount,Fn);Fe.renderInstances(Kt,un,Wt)}else Fe.render(Kt,un)};function te(A,G,K,J){I!==null&&A.isNodeMaterial&&I.setObject(J,A),ct===!0&&nt.setState(A,K,!1),A.transparent===!0&&A.side===jn&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,Ue(A,G,J),A.side=xs,A.needsUpdate=!0,Ue(A,G,J),A.side=jn):Ue(A,G,J)}this.compile=function(A,G,K=null){K===null&&(K=A),I!==null&&I.renderStart(A,G,K),T=tt.get(K),T.init(G),x.push(T),K.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),A!==K&&A.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),pt=this.localClippingEnabled,ct=nt.init(this.clippingPlanes,pt),ct===!0&&nt.setGlobalState(this.clippingPlanes,G),I!==null&&bt.render(T.state.shadowsArray,K,G);let J=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Dt=$.material;if(Dt)if(Array.isArray(Dt))for(let Gt=0;Gt<Dt.length;Gt++){let Bt=Dt[Gt];te(Bt,K,G,$),J.add(Bt)}else te(Dt,K,G,$),J.add(Dt)}),T=x.pop(),I!==null&&I.renderEnd(),J},this.compileAsync=function(A,G,K=null){let J=this.compile(A,G,K);return new Promise($=>{function Dt(){if(J.forEach(function(Gt){let $t=q.get(Gt).currentProgram;($t===void 0||$t.isReady())&&J.delete(Gt)}),J.size===0){$(A);return}setTimeout(Dt,10)}Xt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let ye=null;function We(A){ye&&ye(A)}function Te(){ae.stop()}function _e(){ae.start()}let ae=new x_;ae.setAnimationLoop(We),typeof self!="undefined"&&ae.setContext(self),this.setAnimationLoop=function(A){ye=A,ht.setAnimationLoop(A),A===null?ae.stop():ae.start()},ht.addEventListener("sessionstart",Te),ht.addEventListener("sessionend",_e),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;I!==null&&I.renderStart(A,G);let K=ht.enabled===!0&&ht.isPresenting===!0,J=b!==null&&(Z===null||K)&&b.begin(C,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(G),G=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,G,Z),T=tt.get(A,x.length),T.init(G),T.state.textureUnits=it.getTextureUnits(),x.push(T),B.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),et.setFromProjectionMatrix(B,qi,G.reversedDepth),pt=this.localClippingEnabled,ct=nt.init(this.clippingPlanes,pt),S=At.get(A,E.length),S.init(),E.push(S),ht.enabled===!0&&ht.isPresenting===!0){let Gt=C.xr.getDepthSensingMesh();Gt!==null&&Xe(Gt,G,-1/0,C.sortObjects)}Xe(A,G,0,C.sortObjects),S.finish(),I!==null&&I.updateLights(T.state.lightsArray),C.sortObjects===!0&&S.sort(ut,Rt),Ft=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Ft&&It.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&nt.beginShadows();let $=T.state.shadowsArray;if(bt.render($,A,G),ct===!0&&nt.endShadows(),(J&&b.hasRenderPass())===!1){let Gt=S.opaque,Bt=S.transmissive;if(T.setupLights(),G.isArrayCamera){let $t=G.cameras;if(Bt.length>0)for(let jt=0,ce=$t.length;jt<ce;jt++){let ve=$t[jt];on(Gt,Bt,A,ve)}Ft&&It.render(A);for(let jt=0,ce=$t.length;jt<ce;jt++){let ve=$t[jt];we(S,A,ve,ve.viewport)}}else Bt.length>0&&on(Gt,Bt,A,G),Ft&&It.render(A),we(S,A,G)}Z!==null&&O===0&&(it.updateMultisampleRenderTarget(Z),it.updateRenderTargetMipmap(Z)),J&&b.end(C),A.isScene===!0&&A.onAfterRender(C,A,G),xt.resetDefaultState(),H=-1,R=null,x.pop(),x.length>0?(T=x[x.length-1],it.setTextureUnits(T.state.textureUnits),ct===!0&&nt.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,I!==null&&I.renderEnd()};function Xe(A,G,K,J){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(et)){J&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(B);let Gt=lt.update(A),Bt=A.material;Bt.visible&&S.push(A,Gt,Bt,K,Ot.z,null,G)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(et))){let Gt=lt.update(A),Bt=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Ot.copy(Gt.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4(B)),Array.isArray(Bt)){let $t=Gt.groups;for(let jt=0,ce=$t.length;jt<ce;jt++){let ve=$t[jt],Kt=Bt[ve.materialIndex];Kt&&Kt.visible&&S.push(A,Gt,Kt,K,Ot.z,ve,G)}}else Bt.visible&&S.push(A,Gt,Bt,K,Ot.z,null,G)}}let Dt=A.children;for(let Gt=0,Bt=Dt.length;Gt<Bt;Gt++)Xe(Dt[Gt],G,K,J)}function we(A,G,K,J){let{opaque:$,transmissive:Dt,transparent:Gt}=A;T.setupLightsView(K),ct===!0&&nt.setGlobalState(C.clippingPlanes,K),J&&y.viewport(Y.copy(J)),$.length>0&&cn($,G,K),Dt.length>0&&cn(Dt,G,K),Gt.length>0&&cn(Gt,G,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function on(A,G,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let Kt=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new $e(1,1,{generateMipmaps:!0,type:Kt?Mn:di,minFilter:yr,samples:Math.max(4,L.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let Dt=T.state.transmissionRenderTarget[J.id],Gt=J.viewport||Y;Dt.setSize(Gt.z*C.transmissionResolutionScale,Gt.w*C.transmissionResolutionScale);let Bt=C.getRenderTarget(),$t=C.getActiveCubeFace(),jt=C.getActiveMipmapLevel();C.setRenderTarget(Dt),C.getClearColor(Et),Nt=C.getClearAlpha(),Nt<1&&C.setClearColor(16777215,.5),C.clear(),Ft&&It.render(K);let ce=C.toneMapping;C.toneMapping=Qi;let ve=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),ct===!0&&nt.setGlobalState(C.clippingPlanes,J),cn(A,K,J),it.updateMultisampleRenderTarget(Dt),it.updateRenderTargetMipmap(Dt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ae=0,un=G.length;Ae<un;Ae++){let Ve=G[Ae],{object:Fe,geometry:Fn,material:Wt,group:qn}=Ve;if(Wt.side===jn&&Fe.layers.test(J.layers)){let Se=Wt.side;Wt.side=Sn,Wt.needsUpdate=!0,Ne(Fe,K,J,Fn,Wt,qn),Wt.side=Se,Wt.needsUpdate=!0,Kt=!0}}Kt===!0&&(it.updateMultisampleRenderTarget(Dt),it.updateRenderTargetMipmap(Dt))}C.setRenderTarget(Bt,$t,jt),C.setClearColor(Et,Nt),ve!==void 0&&(J.viewport=ve),C.toneMapping=ce}function cn(A,G,K){let J=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Dt=A.length;$<Dt;$++){let Gt=A[$],{object:Bt,geometry:$t,group:jt}=Gt,ce=Gt.material;ce.allowOverride===!0&&J!==null&&(ce=J),Bt.layers.test(K.layers)&&Ne(Bt,G,K,$t,ce,jt)}}function Ne(A,G,K,J,$,Dt){I!==null&&$.isNodeMaterial&&I.setObject(A,$),A.onBeforeRender(C,G,K,J,$,Dt),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(C,G,K,J,A,Dt),$.transparent===!0&&$.side===jn&&$.forceSinglePass===!1?($.side=Sn,$.needsUpdate=!0,C.renderBufferDirect(K,G,J,$,A,Dt),$.side=xs,$.needsUpdate=!0,C.renderBufferDirect(K,G,J,$,A,Dt),$.side=jn):C.renderBufferDirect(K,G,J,$,A,Dt),A.onAfterRender(C,G,K,J,$,Dt)}function Ue(A,G,K){G.isScene!==!0&&(G=Ct);let J=q.get(A),$=T.state.lights,Dt=T.state.shadowsArray,Gt=$.state.version,Bt=Pt.getParameters(A,$.state,Dt,G,K,T.state.lightProbeGridArray),$t=Pt.getProgramCacheKey(Bt),jt=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,J.fog=G.fog;let ce=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;J.envMap=wt.get(A.envMap||J.environment,ce),J.envMapRotation=J.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,jt===void 0&&(A.addEventListener("dispose",at),jt=new Map,J.programs=jt);let ve=jt.get($t);if(ve!==void 0){if(J.currentProgram===ve&&J.lightsStateVersion===Gt)return hn(A,Bt),ve}else Bt.uniforms=Pt.getUniforms(A),I!==null&&A.isNodeMaterial&&I.build(A,K,Bt),A.onBeforeCompile(Bt,C),ve=Pt.acquireProgram(Bt,$t),jt.set($t,ve),J.uniforms=Bt.uniforms;let Kt=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Kt.clippingPlanes=nt.uniform),hn(A,Bt),J.needsLights=En(A),J.lightsStateVersion=Gt,J.needsLights&&(Kt.ambientLightColor.value=$.state.ambient,Kt.lightProbe.value=$.state.probe,Kt.sunLights.value=$.state.sun,Kt.sunLightShadows.value=$.state.sunShadow,Kt.directionalLights.value=$.state.directional,Kt.directionalLightShadows.value=$.state.directionalShadow,Kt.spotLights.value=$.state.spot,Kt.spotLightShadows.value=$.state.spotShadow,Kt.rectAreaLights.value=$.state.rectArea,Kt.ltc_1.value=$.state.rectAreaLTC1,Kt.ltc_2.value=$.state.rectAreaLTC2,Kt.pointLights.value=$.state.point,Kt.pointLightShadows.value=$.state.pointShadow,Kt.hemisphereLights.value=$.state.hemi,Kt.sunShadowMatrix.value=$.state.sunShadowMatrix,Kt.sunShadowCascade.value=$.state.sunShadowCascade,Kt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Kt.spotLightMatrix.value=$.state.spotLightMatrix,Kt.spotLightMap.value=$.state.spotLightMap,Kt.pointShadowMatrix.value=$.state.pointShadowMatrix),J.lightProbeGrid=T.state.lightProbeGridArray.length>0,J.currentProgram=ve,J.uniformsList=null,ve}function Ye(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=ha.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function hn(A,G){let K=q.get(A);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Hi(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(G.matrixWorld);for(let K=0,J=A.length;K<J;K++){let $=A[K];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function en(A,G,K,J,$){G.isScene!==!0&&(G=Ct),it.resetTextureUnits();let Dt=G.fog,Gt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?G.environment:null,Bt=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:pe.workingColorSpace,$t=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,jt=wt.get(J.envMap||Gt,$t),ce=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ve=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Kt=!!K.morphAttributes.position,Ae=!!K.morphAttributes.normal,un=!!K.morphAttributes.color,Ve=Qi;J.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ve=C.toneMapping);let Fe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Fn=Fe!==void 0?Fe.length:0,Wt=q.get(J),qn=T.state.lights;if(ct===!0&&(pt===!0||A!==R)){let ke=A===R&&J.id===H;nt.setState(J,A,ke)}let Se=!1;J.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==qn.state.version||Wt.outputColorSpace!==Bt||$.isBatchedMesh&&Wt.batching===!1||!$.isBatchedMesh&&Wt.batching===!0||$.isBatchedMesh&&Wt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Wt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Wt.instancing===!1||!$.isInstancedMesh&&Wt.instancing===!0||$.isSkinnedMesh&&Wt.skinning===!1||!$.isSkinnedMesh&&Wt.skinning===!0||$.isInstancedMesh&&Wt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Wt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Wt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Wt.instancingMorph===!1&&$.morphTexture!==null||Wt.envMap!==jt||J.fog===!0&&Wt.fog!==Dt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==nt.numPlanes||Wt.numIntersection!==nt.numIntersection)||Wt.vertexAlphas!==ce||Wt.vertexTangents!==ve||Wt.morphTargets!==Kt||Wt.morphNormals!==Ae||Wt.morphColors!==un||Wt.toneMapping!==Ve||Wt.morphTargetsCount!==Fn||!!Wt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Wt.__version=J.version);let Ri=Wt.currentProgram;Se===!0&&(Ri=Ue(J,G,$),I&&J.isNodeMaterial&&I.onUpdateProgram(J,Ri,Wt));let rr=!1,$r=!1,uo=!1,De=Ri.getUniforms(),an=Wt.uniforms;if(y.useProgram(Ri.program)&&(rr=!0,$r=!0,uo=!0),J.id!==H&&(H=J.id,$r=!0),Wt.needsLights){let ke=Hi(T.state.lightProbeGridArray,$);Wt.lightProbeGrid!==ke&&(Wt.lightProbeGrid=ke,$r=!0)}if(rr||R!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),De.setValue(z,"projectionMatrix",A.projectionMatrix),De.setValue(z,"viewMatrix",A.matrixWorldInverse);let Qr=De.map.cameraPosition;Qr!==void 0&&Qr.setValue(z,j.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&De.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&De.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,$r=!0,uo=!0)}if(Wt.needsLights&&(qn.state.sunShadowMap.length>0&&De.setValue(z,"sunShadowMap",qn.state.sunShadowMap,it),qn.state.directionalShadowMap.length>0&&De.setValue(z,"directionalShadowMap",qn.state.directionalShadowMap,it),qn.state.spotShadowMap.length>0&&De.setValue(z,"spotShadowMap",qn.state.spotShadowMap,it),qn.state.pointShadowMap.length>0&&De.setValue(z,"pointShadowMap",qn.state.pointShadowMap,it)),$.isSkinnedMesh){De.setOptional(z,$,"bindMatrix"),De.setOptional(z,$,"bindMatrixInverse");let ke=$.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),De.setValue(z,"boneTexture",ke.boneTexture,it))}$.isBatchedMesh&&(De.setOptional(z,$,"batchingTexture"),De.setValue(z,"batchingTexture",$._matricesTexture,it),De.setOptional(z,$,"batchingIdTexture"),De.setValue(z,"batchingIdTexture",$._indirectTexture,it),De.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&De.setValue(z,"batchingColorTexture",$._colorsTexture,it));let Kr=K.morphAttributes;if((Kr.position!==void 0||Kr.normal!==void 0||Kr.color!==void 0)&&U.update($,K,Ri),($r||Wt.receiveShadow!==$.receiveShadow)&&(Wt.receiveShadow=$.receiveShadow,De.setValue(z,"receiveShadow",$.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&G.environment!==null&&(an.envMapIntensity.value=G.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=nE()),$r){if(De.setValue(z,"toneMappingExposure",C.toneMappingExposure),Wt.needsLights&&ze(an,uo),Dt&&J.fog===!0&&Vt.refreshFogUniforms(an,Dt),Vt.refreshMaterialUniforms(an,J,Q,W,T.state.transmissionRenderTarget[A.id]),Wt.needsLights&&Wt.lightProbeGrid){let ke=Wt.lightProbeGrid;an.probesSH.value=ke.texture,an.probesMin.value.copy(ke.boundingBox.min),an.probesMax.value.copy(ke.boundingBox.max),an.probesResolution.value.copy(ke.resolution)}ha.upload(z,Ye(Wt),an,it)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ha.upload(z,Ye(Wt),an,it),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&De.setValue(z,"center",$.center),De.setValue(z,"modelViewMatrix",$.modelViewMatrix),De.setValue(z,"normalMatrix",$.normalMatrix),De.setValue(z,"modelMatrix",$.matrixWorld),J.uniformsGroups!==void 0){let ke=J.uniformsGroups;for(let Qr=0,fo=ke.length;Qr<fo;Qr++){let Sm=ke[Qr];mt.update(Sm,Ri),mt.bind(Sm,Ri)}}return Ri}function ze(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function En(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,G,K){let J=q.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=G,q.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){let K=q.get(A);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,K=0){Z=A,V=G,O=K;let J=null,$=!1,Dt=!1;if(A){let Bt=q.get(A);if(Bt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(z.FRAMEBUFFER,Bt.__webglFramebuffer),Y.copy(A.viewport),ft.copy(A.scissor),yt=A.scissorTest,y.viewport(Y),y.scissor(ft),y.setScissorTest(yt),H=-1;return}else if(Bt.__webglFramebuffer===void 0)it.setupRenderTarget(A);else if(Bt.__hasExternalTextures)it.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ce=A.depthTexture;if(Bt.__boundDepthTexture!==ce){if(ce!==null&&q.has(ce)&&(A.width!==ce.image.width||A.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(A)}}let $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);let jt=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[G])?J=jt[G][K]:J=jt[G],$=!0):A.samples>0&&it.useMultisampledRTT(A)===!1?J=q.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?J=jt[K]:J=jt,Y.copy(A.viewport),ft.copy(A.scissor),yt=A.scissorTest}else Y.copy(Tt).multiplyScalar(Q).floor(),ft.copy(Ut).multiplyScalar(Q).floor(),yt=zt;if(K!==0&&(J=D),y.bindFramebuffer(z.FRAMEBUFFER,J)&&y.drawBuffers(A,J),y.viewport(Y),y.scissor(ft),y.setScissorTest(yt),$){let Bt=q.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Bt.__webglTexture,K)}else if(Dt){let Bt=G;for(let $t=0;$t<A.textures.length;$t++){let jt=q.get(A.textures[$t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+$t,jt.__webglTexture,K,Bt)}}else if(A!==null&&K!==0){let Bt=q.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bt.__webglTexture,K)}H=-1};function ir(A){let G=q.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=L.textureFormatReadable(A.format),G.__typeReadable=L.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,K,J,$,Dt,Gt,Bt=0){if(!(A&&A.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Gt!==void 0&&($t=$t[Gt]),$t){y.bindFramebuffer(z.FRAMEBUFFER,$t);try{let jt=A.textures[Bt],ce=jt.format,ve=jt.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Bt);let Kt=ir(jt);if(Kt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-J&&K>=0&&K<=A.height-$&&z.readPixels(G,K,J,$,gt.convert(ce),gt.convert(ve),Dt)}finally{let jt=Z!==null?q.get(Z).__webglFramebuffer:null;y.bindFramebuffer(z.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(A,G,K,J,$,Dt,Gt,Bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Gt!==void 0&&($t=$t[Gt]),$t)if(G>=0&&G<=A.width-J&&K>=0&&K<=A.height-$){y.bindFramebuffer(z.FRAMEBUFFER,$t);let jt=A.textures[Bt],ce=jt.format,ve=jt.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Bt);let Kt=ir(jt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ae),z.bufferData(z.PIXEL_PACK_BUFFER,Dt.byteLength,z.STREAM_READ),z.readPixels(G,K,J,$,gt.convert(ce),gt.convert(ve),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let un=Z!==null?q.get(Z).__webglFramebuffer:null;y.bindFramebuffer(z.FRAMEBUFFER,un);let Ve=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Vg(z,Ve,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ae),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Dt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ae),z.deleteSync(Ve),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,K=0){let J=Math.pow(2,-K),$=Math.floor(A.image.width*J),Dt=Math.floor(A.image.height*J),Gt=G!==null?G.x:0,Bt=G!==null?G.y:0;it.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,Gt,Bt,$,Dt),y.unbindTexture()},this.copyTextureToTexture=function(A,G,K=null,J=null,$=0,Dt=0){let Gt,Bt,$t,jt,ce,ve,Kt,Ae,un,Ve=A.isCompressedTexture?A.mipmaps[Dt]:A.image;if(K!==null)Gt=K.max.x-K.min.x,Bt=K.max.y-K.min.y,$t=K.isBox3?K.max.z-K.min.z:1,jt=K.min.x,ce=K.min.y,ve=K.isBox3?K.min.z:0;else{let an=Math.pow(2,-$);Gt=Math.floor(Ve.width*an),Bt=Math.floor(Ve.height*an),A.isDataArrayTexture?$t=Ve.depth:A.isData3DTexture?$t=Math.floor(Ve.depth*an):$t=1,jt=0,ce=0,ve=0}J!==null?(Kt=J.x,Ae=J.y,un=J.z):(Kt=0,Ae=0,un=0);let Fe=gt.convert(G.format),Fn=gt.convert(G.type),Wt;G.isData3DTexture?(it.setTexture3D(G,0),Wt=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(it.setTexture2DArray(G,0),Wt=z.TEXTURE_2D_ARRAY):(it.setTexture2D(G,0),Wt=z.TEXTURE_2D),y.activeTexture(z.TEXTURE0),y.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);let qn=y.getParameter(z.UNPACK_ROW_LENGTH),Se=y.getParameter(z.UNPACK_IMAGE_HEIGHT),Ri=y.getParameter(z.UNPACK_SKIP_PIXELS),rr=y.getParameter(z.UNPACK_SKIP_ROWS),$r=y.getParameter(z.UNPACK_SKIP_IMAGES);y.pixelStorei(z.UNPACK_ROW_LENGTH,Ve.width),y.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ve.height),y.pixelStorei(z.UNPACK_SKIP_PIXELS,jt),y.pixelStorei(z.UNPACK_SKIP_ROWS,ce),y.pixelStorei(z.UNPACK_SKIP_IMAGES,ve);let uo=A.isDataArrayTexture||A.isData3DTexture,De=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){let an=q.get(A),Kr=q.get(G),ke=q.get(an.__renderTarget),Qr=q.get(Kr.__renderTarget);y.bindFramebuffer(z.READ_FRAMEBUFFER,ke.__webglFramebuffer),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let fo=0;fo<$t;fo++)uo&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(A).__webglTexture,$,ve+fo),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(G).__webglTexture,Dt,un+fo)),z.blitFramebuffer(jt,ce,Gt,Bt,Kt,Ae,Gt,Bt,z.DEPTH_BUFFER_BIT,z.NEAREST);y.bindFramebuffer(z.READ_FRAMEBUFFER,null),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||q.has(A)){let an=q.get(A),Kr=q.get(G);y.bindFramebuffer(z.READ_FRAMEBUFFER,P),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,N);for(let ke=0;ke<$t;ke++)uo?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,an.__webglTexture,$,ve+ke):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,an.__webglTexture,$),De?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Kr.__webglTexture,Dt,un+ke):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Kr.__webglTexture,Dt),$!==0?z.blitFramebuffer(jt,ce,Gt,Bt,Kt,Ae,Gt,Bt,z.COLOR_BUFFER_BIT,z.NEAREST):De?z.copyTexSubImage3D(Wt,Dt,Kt,Ae,un+ke,jt,ce,Gt,Bt):z.copyTexSubImage2D(Wt,Dt,Kt,Ae,jt,ce,Gt,Bt);y.bindFramebuffer(z.READ_FRAMEBUFFER,null),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else De?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Wt,Dt,Kt,Ae,un,Gt,Bt,$t,Fe,Fn,Ve.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(Wt,Dt,Kt,Ae,un,Gt,Bt,$t,Fe,Ve.data):z.texSubImage3D(Wt,Dt,Kt,Ae,un,Gt,Bt,$t,Fe,Fn,Ve):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Dt,Kt,Ae,Gt,Bt,Fe,Fn,Ve.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Dt,Kt,Ae,Ve.width,Ve.height,Fe,Ve.data):z.texSubImage2D(z.TEXTURE_2D,Dt,Kt,Ae,Gt,Bt,Fe,Fn,Ve);y.pixelStorei(z.UNPACK_ROW_LENGTH,qn),y.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se),y.pixelStorei(z.UNPACK_SKIP_PIXELS,Ri),y.pixelStorei(z.UNPACK_SKIP_ROWS,rr),y.pixelStorei(z.UNPACK_SKIP_IMAGES,$r),Dt===0&&G.generateMipmaps&&z.generateMipmap(Wt),y.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&it.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?it.setTextureCube(A,0):A.isData3DTexture?it.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?it.setTexture2DArray(A,0):it.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){V=0,O=0,Z=null,y.reset(),xt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var pa=class extends Zi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ni;t.deleteAttribute("uv");let e=new Nn({side:Sn}),n=new Nn,i=new zr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new ee(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new _r(t,n,6),a=new pn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ee(t,da(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ee(t,da(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ee(t,da(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ee(t,da(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new ee(t,da(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new ee(t,da(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function da(r){return new Nl({color:0,emissive:16777215,emissiveIntensity:r})}var ma={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var bi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},iE=new xr(-1,1,1,-1,0,1),Gp=class extends Ce{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}},rE=new Gp,ws=class{constructor(t){this._mesh=new ee(rE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,iE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ga=class extends bi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ee?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vr.clone(t.uniforms),this.material=new Ee({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ws(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ic=class extends bi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},$u=class extends bi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var _a=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new dt);this._width=n.width,this._height=n.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ga(ma),this.copyPass.material.blending=Ui,this.timer=new Bl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ic!==void 0&&(o instanceof ic?n=!0:o instanceof $u&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var va=class extends bi{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Zt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var E_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Zt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Es=class r extends bi{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new dt(t.x,t.y):new dt(256,256),this.clearColor=new Zt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(s,o,{type:Mn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new $e(s,o,{type:Mn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new $e(s,o,{type:Mn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}let a=E_;this.highPassUniforms=Vr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ee({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new dt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vr.clone(ma.uniforms),this.blendMaterial=new Ee({uniforms:this.copyUniforms,vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader,premultipliedAlpha:!0,blending:Rn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Zt,this._oldClearAlpha=1,this._basic=new Si,this._fsQuad=new ws(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new dt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],s=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),s.push(c)}return new Ee({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new dt(.5,.5)},direction:{value:new dt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ee({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Es.BlurDirectionX=new dt(1,0);Es.BlurDirectionY=new dt(0,1);var rc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var xa=class extends bi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Vr.clone(rc.uniforms),this.material=new na({name:rc.name,uniforms:this.uniforms,vertexShader:rc.vertexShader,fragmentShader:rc.fragmentShader}),this._fsQuad=new ws(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},pe.getTransfer(this._outputColorSpace)===Me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Hr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Vl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sE=new mn(2,2),oE=new xr(-1,1,1,-1,0,1),aE="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",A_="float hash(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }";function C_(r,t,e,n,i){let s=new $e(t,t,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!0,minFilter:yr,magFilter:dn,colorSpace:i?Ze:tr});s.texture.anisotropy=16;let o=new Ee({uniforms:n,vertexShader:aE,fragmentShader:e,depthTest:!1,depthWrite:!1}),a=new Zi;a.add(new ee(sE,o));let l=r.getRenderTarget();return r.setRenderTarget(s),r.render(a,oE),r.setRenderTarget(l),o.dispose(),s}function Wp(r,t=!1){let e=new yn(r);return e.generateMipmaps=!1,e.minFilter=e.magFilter=dn,t&&(e.wrapS=e.wrapT=Or),e}function Ku(r,t,e,n=0){let i=Wp(t),s=t.width,o=C_(r,s,`
    uniform sampler2D uH; uniform float uSize, uStrength, uGrain; varying vec2 vUv;
    ${A_}
    float h(vec2 uv) { return texture2D(uH, uv).r + (hash(floor(uv * uSize)) - 0.5) * uGrain; }
    void main() {
      float px = 1.0 / uSize;
      float dx = h(vUv + vec2(px, 0.0)) - h(vUv - vec2(px, 0.0));
      float dy = h(vUv + vec2(0.0, px)) - h(vUv - vec2(0.0, px));
      vec3 n = normalize(vec3(-dx * uStrength, -dy * uStrength, 1.0));
      gl_FragColor = vec4(n * 0.5 + 0.5, 1.0);
    }`,{uH:{value:i},uSize:{value:s},uStrength:{value:e},uGrain:{value:n}},!1);return i.dispose(),o}function R_(r,{size:t,color:e,height:n,lineTint:i=0,fibres:s=null,grain:o=1}){let a=Wp(n),l=s?Wp(s,!0):null,c=C_(r,t,`
    uniform sampler2D uH, uFibre; uniform vec3 uBase; uniform float uSize, uTint, uFibreRepeat, uHasFibre, uGrainAmt; varying vec2 vUv;
    ${A_}
    float vnoise(vec2 p) {
      vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
    }
    vec3 toLinear(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c)); }
    void main() {
      float hgt = texture2D(uH, vUv).r;
      float mottle = (vnoise(vUv * 16.0) * 36.0 - 18.0) / 128.0;
      float grain = (hash(floor(vUv * uSize) + 7.0) - 0.5) * 7.0 / 255.0 * uGrainAmt;
      float k = 1.0 + mottle * 0.035 + hgt * uTint;
      vec3 c = uBase * k + grain;
      if (uHasFibre > 0.5) { vec4 f = texture2D(uFibre, vUv * uFibreRepeat); c = mix(c, f.rgb, f.a); }
      gl_FragColor = vec4(toLinear(clamp(c, 0.0, 1.0)), 1.0);
    }`,{uH:{value:a},uFibre:{value:l},uHasFibre:{value:l?1:0},uBase:{value:new k(e[0]/255,e[1]/255,e[2]/255)},uSize:{value:t},uTint:{value:i},uGrainAmt:{value:o},uFibreRepeat:{value:s?t/s.width:1}},!0);return a.dispose(),l&&l.dispose(),c}function Ti(r){return function(){r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function As(r,t=r){let e=document.createElement("canvas");return e.width=r,e.height=t,e}function P_(r,t){let e=As(r.width,r.height),n=e.getContext("2d");return n.filter=`blur(${t}px)`,n.drawImage(r,0,0),n.filter="none",e}function I_(r=1024,t=650){let e=As(r),n=e.getContext("2d"),i=Ti(9);n.lineWidth=.8;for(let s=0;s<t;s++){let o=i()*r,a=i()*r,l=i()*Math.PI,c=4+i()*14;n.strokeStyle=i()>.5?"rgba(255,240,240,.06)":"rgba(120,60,60,.05)",n.beginPath(),n.moveTo(o,a),n.lineTo(o+Math.cos(l)*c,a+Math.sin(l)*c),n.stroke()}return e}function Xp(r,t,e,n=0){let i=t/2,s=e.split("&").map(l=>l.trim());r.textAlign="center",r.textBaseline="middle",r.lineCap=r.lineJoin="round";let o=t*.2,a=t*.11;if(s.length===2){r.font=`600 ${o}px "Cinzel", Georgia, serif`;let l=r.measureText(s[0]).width,c=r.measureText(s[1]).width;r.font=`italic ${a}px "Cormorant Garamond", Georgia, serif`;let h=r.measureText("&").width,d=t*.018,u=l+c+h+d*2,f=i-u/2;r.font=`600 ${o}px "Cinzel", Georgia, serif`,r.lineWidth=t*.004+n,r.fillText(s[0],f+l/2,i),r.strokeText(s[0],f+l/2,i),f+=l+d,r.font=`italic ${a}px "Cormorant Garamond", Georgia, serif`,r.fillText("&",f+h/2,i+t*.015),r.strokeText("&",f+h/2,i+t*.015),f+=h+d,r.font=`600 ${o}px "Cinzel", Georgia, serif`,r.fillText(s[1],f+c/2,i),r.strokeText(s[1],f+c/2,i)}else r.font=`600 ${o}px "Cinzel", Georgia, serif`,r.lineWidth=t*.004+n,r.fillText(e,i,i),r.strokeText(e,i,i);r.lineWidth=t*.005+n,[[-1,i-t*.17],[1,i+t*.17]].forEach(([l,c])=>{r.beginPath(),r.moveTo(i-t*.075,c),r.lineTo(i+t*.075,c),r.stroke();for(let h=-3;h<=3;h++){if(!h)continue;let d=i+h*t*.022;r.beginPath(),r.moveTo(d,c),r.quadraticCurveTo(d+t*.008*Math.sign(h),c-l*t*.02,d+t*.016*Math.sign(h),c-l*t*.028),r.stroke()}r.beginPath(),r.arc(i,c-l*t*.012,t*.006,0,6.28),r.fill()})}function L_(r,t={}){let i=As(1024),s=i.getContext("2d"),o=s.createRadialGradient(512,512,0,512,512,512);o.addColorStop(0,"#9a9a9a"),o.addColorStop(.62,"#909090"),o.addColorStop(.84,"#cfcfcf"),o.addColorStop(.95,"#a0a0a0"),o.addColorStop(1,"#4a4a4a"),s.fillStyle=o,s.fillRect(0,0,1024,1024);let a=Ti(31);for(let w=0;w<14;w++){let v=a()*6.28,S=a()*1024*.3,T=1024*(.05+a()*.1),E=s.createRadialGradient(512+Math.cos(v)*S,512+Math.sin(v)*S,0,512+Math.cos(v)*S,512+Math.sin(v)*S,T);E.addColorStop(0,a()>.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)"),E.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=E,s.fillRect(0,0,1024,1024)}s.fillStyle="#505050",s.beginPath(),s.arc(512,512,1024*.345,0,Math.PI*2),s.fill(),s.strokeStyle="#b8b8b8",s.lineWidth=1024*.008,s.beginPath(),s.arc(512,512,1024*.31,0,Math.PI*2),s.stroke(),s.lineWidth=1024*.004,s.beginPath(),s.arc(512,512,1024*.285,0,Math.PI*2),s.stroke(),s.fillStyle="#c4c4c4",s.textAlign="center",s.textBaseline="middle",s.lineWidth=1024*.006,s.strokeStyle=s.fillStyle,t.line2?(s.font=`${1024*.19}px "Pinyon Script", "Great Vibes", cursive`,s.fillText(t.line1||"Tap",512,512-1024*.07),s.font=`${1024*.17}px "Pinyon Script", "Great Vibes", cursive`,s.fillText(t.line2,512,512+1024*.1),s.strokeText(t.line2,512,512+1024*.1)):Xp(s,1024,t.line1||"A & A");let l=P_(i,3.5),c=Ku(r,l,9,.02),h=As(1024),d=h.getContext("2d");d.fillStyle="#000",d.fillRect(0,0,1024,1024),d.fillStyle=d.strokeStyle="#fff",Xp(d,1024,t.line1||"A & A",1024*.004);let u=P_(h,1.5),f=As(1024),p=f.getContext("2d"),_=p.createRadialGradient(512*.85,512*.8,0,512,512,512);_.addColorStop(0,"#f7dc8e"),_.addColorStop(.4,"#dfb455"),_.addColorStop(.78,"#c08f2e"),_.addColorStop(1,"#8c6318"),p.fillStyle=_,p.fillRect(0,0,1024,1024),p.globalCompositeOperation="multiply",p.globalAlpha=.32,p.drawImage(l,0,0),p.globalAlpha=1,p.globalCompositeOperation="source-over",p.fillStyle=p.strokeStyle="#fff3c8",Xp(p,1024,t.line1||"A & A"),p.globalAlpha=1,p.globalCompositeOperation="source-over";let m=new yn(f);m.colorSpace=Ze;let g=c.texture,M=new yn(u);return{map:m,normalMap:g,emissiveMap:M}}function D_(r=1024,t=512,e=["#e9c2c3","#dcaaad"]){let n=As(r,t),i=As(r,t),s=n.getContext("2d"),o=i.getContext("2d"),a=s.createLinearGradient(0,0,0,t);a.addColorStop(0,e[0]),a.addColorStop(1,e[1]),s.fillStyle=a,s.fillRect(0,0,r,t),o.fillStyle="#000",o.fillRect(0,0,r,t);let l=u=>{let f=r*u,p=t*u*1.6;return[[f*1.8,p*.5],[r-f*1.8,p*.5],[r/2,t-p*2.2]]},c=(u,f)=>{u.beginPath(),u.moveTo(f[0][0],f[0][1]),u.lineTo(f[1][0],f[1][1]),u.lineTo(f[2][0],f[2][1]),u.closePath()};s.strokeStyle="#d8ac55",o.strokeStyle="#fff";for(let u of[s,o])u.lineWidth=5,c(u,l(.035)),u.stroke(),u.lineWidth=2,c(u,l(.06)),u.stroke();let h=new yn(n);h.colorSpace=Ze;let d=new yn(i);return{map:h,metalnessMap:d}}function Qu(r){let e=As(256),n=e.getContext("2d"),i=n.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);(r||[[0,"rgba(255,255,255,1)"],[.2,"rgba(255,240,230,.85)"],[.5,"rgba(255,200,200,.25)"],[1,"rgba(255,200,200,0)"]]).forEach(([o,a])=>i.addColorStop(o,a)),n.fillStyle=i,n.fillRect(0,0,256,256);let s=new yn(e);return s.colorSpace=Ze,s}var N_=(r,t,e)=>r+(t-r)*e;function ju(r,t,e,n,i){let s=1-i;return[s*s*s*r[0]+3*s*s*i*t[0]+3*s*i*i*e[0]+i*i*i*n[0],s*s*s*r[1]+3*s*s*i*t[1]+3*s*i*i*e[1]+i*i*i*n[1]]}function U_(r,t,e,n,i){let s=ju(r,t,e,n,Math.max(0,i-.005)),o=ju(r,t,e,n,Math.min(1,i+.005)),a=[o[0]-s[0],o[1]-s[1]],l=Math.hypot(a[0],a[1])||1;return[a[0]/l,a[1]/l]}function lE(r){let t=r|0;return()=>(t=t*1664525+1013904223|0,(t>>>0)%1e5/1e5)}function F_(r,t,e){let n=(u,f)=>[(u/e+.5)*r,(.5-f/e)*r],i=r/2048;function s(u,f){let p=lE(2026);u.strokeStyle=u.fillStyle="#fff",u.lineCap="round",u.lineJoin="round";let _=D=>{let[P,N]=n(D[0],D[1]);u.moveTo(P,N)},m=D=>{let[P,N]=n(D[0],D[1]);u.lineTo(P,N)},g=(D,P)=>{let[N,V]=n(D[0],D[1]),[O,Z]=n(P[0],P[1]);u.quadraticCurveTo(N,V,O,Z)};function M(D,P,N,V,O){let H=[],R=p()*6.28;for(let Y=0;Y<=40;Y++){let ft=Y/40,yt=ju(D,P,N,V,ft),Et=U_(D,P,N,V,ft),Nt=Math.sin(ft*9+R)*.0022;H.push([yt[0]-Et[1]*Nt,yt[1]+Et[0]*Nt])}for(let Y=1;Y<=40;Y++)u.lineWidth=O*(1.1-Y/40*.5),u.beginPath(),_(H[Y-1]),m(H[Y]),u.stroke();return{at:Y=>ju(D,P,N,V,Y),tan:Y=>U_(D,P,N,V,Y)}}function w(D,P,N,V,O,Z=(p()-.5)*.5){let H=[-P[1],P[0]],R=W=>{let Q=Math.sin(Math.PI*W)*Z*N*.5;return[D[0]+P[0]*N*W+H[0]*Q,D[1]+P[1]*N*W+H[1]*Q]},Y=W=>V*Math.pow(Math.sin(Math.PI*Math.min(1,W*.9+.06)),.72)*(1-.12*W),ft=22,yt=(W,Q)=>{let ut=[];for(let Rt=0;Rt<=ft;Rt++){let Tt=Rt/ft,Ut=R(Tt),zt=Y(Tt)*Q;ut.push([Ut[0]+H[0]*zt*W,Ut[1]+H[1]*zt*W])}return ut},Et=yt(1,1.08),Nt=yt(-1,.92).reverse();u.lineWidth=O,u.beginPath(),_(Et[0]),Et.slice(1).forEach(m),Nt.forEach(m),u.closePath(),u.stroke(),u.lineWidth=O*.7,u.beginPath(),_(R(0));for(let W=1;W<=10;W++)m(R(W/10*.9));u.stroke(),u.lineWidth=O*.42;let Lt=4+Math.round(N*25);for(let W=1;W<=Lt;W++){let Q=.12+W/(Lt+1)*.76,ut=R(Q);for(let Rt of[1,-1]){let Tt=Rt>0?1.08:.92,Ut=Math.min(.96,Q+.1),zt=Y(Ut)*Tt*.82,et=R(Ut),ct=R(Q+.04);u.beginPath(),_(ut),g([ct[0]+H[0]*zt*Rt*.4,ct[1]+H[1]*zt*Rt*.4],[et[0]+H[0]*zt*Rt,et[1]+H[1]*zt*Rt]),u.stroke()}}}function v(D,P,N,V,O){let{leaves:Z=7,len:H=.1,wid:R=.03,w:Y=f,from:ft=.15,to:yt=.9,tip:Et="leaf",spread:Nt=.75}=O,Lt=M(D,P,N,V,Y);for(let W=0;W<Z;W++){let Q=N_(ft,yt,W/(Z-1))+(p()-.5)*.025,ut=Lt.at(Q),Rt=Lt.tan(Q),Tt=W%2?1:-1,Ut=Math.atan2(Rt[1],Rt[0])+Tt*(Nt+(p()-.5)*.2),zt=1-(Q-ft)*.45;w(ut,[Math.cos(Ut),Math.sin(Ut)],H*zt*(.85+p()*.3),R*zt,Y*.9)}return Et==="leaf"?w(Lt.at(1),Lt.tan(1),H*.55,R*.5,Y*.9,0):Et==="heather"&&S(Lt,.72,1,Y,.011),Lt}function S(D,P,N,V,O){let Z=Math.round((N-P)*17)+2;for(let Et=0;Et<Z;Et++){let Nt=N_(P,N,Et/(Z-1)),Lt=D.at(Nt),W=D.tan(Nt),Q=Et%2?1:-1,ut=1-Et/Z*.55,Rt=Math.atan2(W[1],W[0])+Q*1,Tt=O*2.4*ut,Ut=[Lt[0]+Math.cos(Rt)*Tt,Lt[1]+Math.sin(Rt)*Tt];u.lineWidth=V*.55,u.beginPath(),_(Lt),m(Ut),u.stroke();let zt=2+Et%2;for(let et=0;et<zt;et++){let ct=Rt+(et-(zt-1)/2)*.7,pt=O*ut*(.8+p()*.3),B=[Ut[0]+Math.cos(ct)*pt*1.3,Ut[1]+Math.sin(ct)*pt*1.3],[j,Ot]=n(B[0],B[1]);u.save(),u.translate(j,Ot),u.rotate(-ct),u.beginPath(),u.ellipse(0,0,Math.max(1.4,pt*1.25/e*r),Math.max(1,pt*.8/e*r),0,0,6.283),u.fill(),u.restore()}}let H=D.at(1),R=D.tan(1),[Y,ft]=n(H[0],H[1]),yt=O*.55/e*r;u.save(),u.translate(Y,ft),u.rotate(-Math.atan2(R[1],R[0])),u.beginPath(),u.ellipse(yt*.8,0,Math.max(1.5,yt*1.6),Math.max(1,yt),0,0,6.283),u.fill(),u.restore()}function T(D,P,N,V,O){let{w:Z=f*.9,from:H=.3,size:R=.011}=O,Y=M(D,P,N,V,Z);return S(Y,H,1,Z,R),Y}function E(D,P,N){let H=[3,2,4,1,5,0];for(let ft of H){let yt=.35+ft/6*6.283,Et=6.283/6*1.4,Nt=[];for(let Lt=0;Lt<=36;Lt++){let W=Lt/36,Q=yt-Et/2+Et*W,ut=Math.sin(Math.PI*W),Rt=1+.09*Math.sin(W*15.7+ft*1.3)+.04*Math.sin(W*29+ft),Tt=P*(.3+.7*Math.pow(ut,.5))*Rt;Nt.push([D[0]+Math.cos(Q)*Tt,D[1]+Math.sin(Q)*Tt*.8])}u.lineWidth=N,u.beginPath(),_(Nt[0]),Nt.slice(1).forEach(m),u.stroke(),u.lineWidth=N*.4;for(let Lt=-2;Lt<=2;Lt++){let W=yt+Lt*.16,Q=P*(.55+Math.abs(Lt)*.08+p()*.1),ut=[D[0]+Math.cos(W)*P*.22,D[1]+Math.sin(W)*P*.22*.8],Rt=[D[0]+Math.cos(W+.06)*Q,D[1]+Math.sin(W+.06)*Q*.8],Tt=[D[0]+Math.cos(W-.04)*Q*.5,D[1]+Math.sin(W-.04)*Q*.5*.8];u.beginPath(),_(ut),g(Tt,Rt),u.stroke()}}let[R,Y]=n(D[0],D[1]);u.lineWidth=N*.8,u.beginPath(),u.ellipse(R,Y,P*.16/e*r,P*.16*.8/e*r,0,0,6.283),u.stroke();for(let ft=0;ft<18;ft++){let yt=p()*6.283,Et=Math.sqrt(p())*P*.12,[Nt,Lt]=n(D[0]+Math.cos(yt)*Et,D[1]+Math.sin(yt)*Et*.8);u.beginPath(),u.arc(Nt,Lt,N*.5,0,6.283),u.fill()}for(let ft=0;ft<30;ft++){let yt=.15+ft/29*(Math.PI-.3)+(p()-.5)*.08,Et=P*(.3+p()*.16),Nt=[D[0]+Math.cos(yt)*P*.16,D[1]+Math.sin(yt)*P*.16*.8],Lt=[D[0]+Math.cos(yt)*Et,D[1]+Math.sin(yt)*Et*.8];u.lineWidth=N*.42,u.beginPath(),_(Nt),m(Lt),u.stroke();let[W,Q]=n(Lt[0],Lt[1]);u.beginPath(),u.arc(W,Q,N*.7,0,6.283),u.fill()}}function x(D,P,N,V){let O=[-P[1],P[0]],Z=[D[0]+P[0]*N,D[1]+P[1]*N];u.lineWidth=V;for(let H of[1,-1])u.beginPath(),_(D),g([D[0]+P[0]*N*.5+O[0]*N*.36*H,D[1]+P[1]*N*.5+O[1]*N*.36*H],Z),u.stroke();u.lineWidth=V*.5;for(let H of[-.12,.12])u.beginPath(),_(D),g([D[0]+P[0]*N*.4+O[0]*N*H*2,D[1]+P[1]*N*.4+O[1]*N*H*2],[D[0]+P[0]*N*.78+O[0]*N*H,D[1]+P[1]*N*.78+O[1]*N*H]),u.stroke()}let b=D=>D*t,C=[0,-.12];v(C,[b(-.18),.18],[b(-.42),.5],[b(-.46),.9],{leaves:7,len:.105,wid:.03,from:.2,to:.78,tip:"heather"}),v(C,[b(.2),.14],[b(.55),.44],[b(.62),.86],{leaves:7,len:.1,wid:.028,from:.22,to:.8,tip:"heather"});let F=M(C,[b(.05),.14],[b(.12),.34],[b(.14),.5],f);[[.42,-1],[.66,1]].forEach(([D,P])=>{let N=F.at(D),V=F.tan(D),O=Math.atan2(V[1],V[0])+P*.85;w(N,[Math.cos(O),Math.sin(O)],.085,.024,f*.9)}),E([b(.15),.61],.125,f);let I=M(F.at(.72),[b(.24),.46],[b(.3),.5],[b(.33),.56],f*.85);x(I.at(1),[.35,.94],.06,f*.9),T(C,[b(.22),-.02],[b(.45),.1],[b(.6),.24],{from:.35,size:.0105}),T(C,[b(-.2),-.02],[b(-.35),.1],[b(-.42),.3],{from:.4,size:.0105}),v([b(-1.06),-1.03],[b(-.82),-.8],[b(-.5),-.62],[b(-.16),-.46],{leaves:8,len:.115,wid:.034,from:.1,to:.9,tip:"leaf"}),T([b(-1.03),-.9],[b(-.86),-.72],[b(-.8),-.54],[b(-.72),-.36],{from:.35,size:.0105}),T([b(-.8),-1.03],[b(-.68),-.95],[b(-.6),-.88],[b(-.56),-.8],{from:.35,size:.0095,w:f*.8}),T([b(1.04),.68],[b(.95),.78],[b(.88),.88],[b(.8),.99],{from:.2,size:.01,w:f*.85})}let o=document.createElement("canvas");o.width=o.height=r;let a=o.getContext("2d");a.fillStyle="#000",a.fillRect(0,0,r,r),s(a,2.6*i);let l=document.createElement("canvas");l.width=l.height=r;let c=l.getContext("2d");c.fillStyle="#000",c.fillRect(0,0,r,r),s(c,3.4*i);let h=document.createElement("canvas");h.width=h.height=r;let d=h.getContext("2d");return d.fillStyle="#000",d.fillRect(0,0,r,r),d.filter=`blur(${1.6*i}px)`,d.drawImage(l,0,0),d.filter="none",d.globalAlpha=.55,d.drawImage(o,0,0),{height:h,mask:o}}var O_=28,cE=1/Math.tan(bs.degToRad(O_/2)),ya=2.2;function hE(r,t,e=24){let n=[],i=[],s=[],o=[];for(let c=0;c<=e;c++){let h=c/e,d=r/2*(1-h),u=Math.max(1,e-c);for(let f=0;f<=u;f++){let p=-d+2*d*f/u,_=-t*h;n.push(p,_,0),i.push((p+r/2)/r,1-h),s.push(p/ya,_/ya)}}let a=0;for(let c=0;c<e;c++){let h=Math.max(1,e-c),d=Math.max(1,e-c-1),u=a+h+1;for(let f=0;f<h;f++){let p=a+f,_=a+f+1,m=Math.min(f,d),g=Math.min(f+1,d);o.push(p,u+m,_),g!==m&&o.push(_,u+m,u+g)}a=u}let l=new Ce;return l.setAttribute("position",new le(n,3)),l.setAttribute("uv",new le(i,2)),l.setAttribute("uvw",new le(s,2)),l.setIndex(o),l.computeVertexNormals(),l}function Yp(r,t=0){let e=new vr(r.map(o=>new dt(o[0],o[1]))),n=new Il(e),i=n.attributes.position,s=n.attributes.uv;for(let o=0;o<i.count;o++)s.setXY(o,i.getX(o)/ya+.5,(i.getY(o)+t)/ya+.5);return n}function uE(r){let t=Ti(77),e=new vr,n=120,i=[t()*6,t()*6,t()*6,t()*6];for(let o=0;o<=n;o++){let a=o/n*Math.PI*2,l=r*(1+.035*Math.sin(5*a+i[0])+.025*Math.sin(8*a+i[1])+.018*Math.sin(13*a+i[2])+.01*Math.sin(21*a+i[3])),c=Math.cos(a)*l,h=Math.sin(a)*l;o===0?e.moveTo(c,h):e.lineTo(c,h)}let s=new $s(e,{depth:r*.06,bevelEnabled:!0,bevelThickness:r*.11,bevelSize:r*.13,bevelSegments:10,curveSegments:120});return s.translate(0,0,r*.11),s}function fE(){return new Ee({transparent:!0,depthWrite:!1,depthTest:!1,blending:Rn,uniforms:{uTime:{value:0},uIntensity:{value:0},uReach:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`
      varying vec2 vUv; uniform float uTime, uIntensity, uReach;
      float hash(float n){ return fract(sin(n)*43758.5453); }
      void main(){
        vec2 p = vec2((vUv.x - .5) * 2.2, (vUv.y - .2) * 2.);
        float r = length(p);
        float a = atan(p.x, p.y);
        float fan = smoothstep(1.25, .2, abs(a)) * smoothstep(-.05, .12, p.y);
        float edge = smoothstep(0., .12, vUv.x) * smoothstep(1., .88, vUv.x) * smoothstep(0., .1, vUv.y) * smoothstep(1., .85, vUv.y);
        float beams = 0.;
        for (int i = 0; i < 3; i++) {
          float f = 11. + float(i) * 7.;
          beams += pow(.5 + .5 * sin(a * f + uTime * (.6 + float(i) * .35) + float(i) * 2.1), 6.) * (.55 - float(i) * .12);
        }
        float fall = exp(-r * 1.6) * smoothstep(uReach + .05, uReach - .45, r);
        float core = exp(-r * 7.);
        vec3 col = mix(vec3(1., .78, .74), vec3(1., .97, .9), core + beams * .3);
        float alpha = (beams * fan * fall * 1.4 + core * 1.2) * uIntensity * edge;
        gl_FragColor = vec4(col, alpha);
      }`})}function dE(r,t){let e=Ti(5),n=new Float32Array(r*3),i=new Float32Array(r),s=new Float32Array(r),o=new Float32Array(r);for(let h=0;h<r;h++){let d=e()*Math.PI*2,u=.25+Math.pow(e(),.6)*1.6;n[h*3]=Math.cos(d)*u*.75,n[h*3+1]=Math.sin(d)*u+.25,n[h*3+2]=(e()-.5)*.4,i[h]=6+e()*22,s[h]=e(),o[h]=e()*.25}let a=new Ce;a.setAttribute("position",new le(new Float32Array(r*3),3)),a.setAttribute("aVel",new He(n,3)),a.setAttribute("aSize",new He(i,1)),a.setAttribute("aPhase",new He(s,1)),a.setAttribute("aDelay",new He(o,1));let l=new Ee({transparent:!0,depthWrite:!1,depthTest:!1,blending:Rn,uniforms:{uTime:{value:-1},uOrigin:{value:t},uPx:{value:1}},vertexShader:`
      attribute vec3 aVel; attribute float aSize, aPhase, aDelay;
      uniform float uTime, uPx; uniform vec3 uOrigin;
      varying float vAlpha; varying float vPhase;
      void main(){
        float t = max(uTime - aDelay, 0.);
        vec3 p = uOrigin + aVel * (1. - exp(-t * 2.4)) / 2.4 + vec3(0., -.05 * t * t, 0.);
        float life = clamp(1. - t / (1.5 + aPhase * 1.4), 0., 1.) * step(0., uTime - aDelay);
        float tw = .55 + .45 * sin(t * (9. + aPhase * 14.) + aPhase * 30.);
        vAlpha = life * tw; vPhase = aPhase;
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = aSize * uPx * (.4 + .6 * life);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying float vAlpha; varying float vPhase;
      void main(){
        vec2 d = gl_PointCoord - .5;
        float core = exp(-dot(d, d) * 60.);
        float spikes = max(0., 1. - abs(d.x) * 16.) * max(0., 1. - abs(d.y) * 2.1)
                     + max(0., 1. - abs(d.y) * 16.) * max(0., 1. - abs(d.x) * 2.1);
        vec3 col = mix(vec3(1., .86, .55), vec3(1., .82, .86), step(.55, vPhase));
        col = mix(col, vec3(1.), core);
        float a = (core + spikes * .55) * vAlpha;
        gl_FragColor = vec4(col, a);
      }`}),c=new ds(a,l);return c.frustumCulled=!1,c.renderOrder=20,c}function pE(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(512/2,512/2);for(let i=0;i<12;i++){e.rotate(Math.PI/6);let s=i%2?512*.28:512*.5,o=e.createLinearGradient(0,0,s,0);o.addColorStop(0,"rgba(255,255,255,.95)"),o.addColorStop(1,"rgba(255,230,220,0)"),e.fillStyle=o,e.beginPath(),e.moveTo(0,-512*.012),e.lineTo(s,0),e.lineTo(0,512*.012),e.fill()}let n=new yn(t);return n.colorSpace=Ze,n}function mE(r,t){let e=F_(r,t,ya);return{height:e.height,mask:e.mask,sealY:-.17}}var sc=()=>new Promise(r=>requestAnimationFrame(()=>setTimeout(r,0)));async function B_(r,t={}){Pe.ticker.lagSmoothing(0),performance.mark("env:start");let e=document.createElement("canvas");e.className="env-gl";let n=new ua({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!n.getContext())throw new Error("WebGL unavailable");r.appendChild(e);let s=Math.min(window.devicePixelRatio||1,3);n.setPixelRatio(s),n.toneMapping=Hr,n.toneMappingExposure=.84,n.outputColorSpace=Ze,n.shadowMap.enabled=!0,n.shadowMap.type=kr,n.setClearColor(0,0);let o=new Zi,a=new Ts(n),l=a.fromScene(new pa,.04).texture;o.environment=l,o.environmentIntensity=.3;let c=new xn(O_,1,.1,20);c.position.set(0,0,cE);let h=new Ks(16774382,13352120,.32);o.add(h);let d=new vs(16772828,3.2);d.position.set(-1.1,1.9,1.6),d.target.position.set(0,-.15,0),d.castShadow=!0,d.shadow.mapSize.set(t.touch?1024:2048,t.touch?1024:2048),Object.assign(d.shadow.camera,{left:-1.6,right:1.6,top:2,bottom:-1.7,near:.5,far:6}),d.shadow.radius=4,d.shadow.bias=-4e-4,d.shadow.normalBias=.004,o.add(d,d.target);let u=new zr(16767442,0,2.2,1.6);o.add(u),await Promise.race([Promise.all([new FontFace("Cinzel",'url("assets/fonts/Cinzel.woff2")',{weight:"400 900"}).load(),new FontFace("Cormorant Garamond",'url("assets/fonts/CormorantGaramond-Italic.woff2")',{style:"italic",weight:"300 700"}).load()]).then(tt=>tt.forEach(nt=>document.fonts.add(nt))),new Promise(tt=>setTimeout(tt,1500))]).catch(()=>{}),performance.mark("env:fonts");let f=2048,p={value:null},_=null,m=null,g=new Ki({normalScale:new dt(2.4,2.4),roughness:.82,metalness:0,specularIntensity:.35,sheen:.15,sheenColor:new Zt(16773606),sheenRoughness:.6}),M=I_(1024,650);function w(tt){_&&_.dispose(),m=mE(f,tt),performance.mark("env:art");let nt=t.grain!=null?t.grain:1,bt=R_(n,{size:f,color:[236,229,220],height:m.height,lineTint:-.14,fibres:M,grain:nt}),It=Ku(n,m.height,11,.05*nt),U=new yn(m.mask);U.anisotropy=16,_={map:bt.texture,normalMap:It.texture,lineMap:U,dispose(){bt.dispose(),It.dispose(),U.dispose()}},performance.mark("env:paper"),p.value=_.lineMap;for(let _t of[g,Q])_t&&(_t.map=_.map,_t.normalMap=_.normalMap,_t.needsUpdate=!0)}let v={value:0},S={value:0},T=.72,E=tt=>{let nt=tt.onBeforeCompile;tt.onBeforeCompile=bt=>{nt&&nt(bt),bt.uniforms.uFill=v,bt.uniforms.uLine=p,bt.uniforms.uT=S,bt.fragmentShader=`uniform float uFill; uniform float uT; uniform sampler2D uLine;
`+bt.fragmentShader.replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
          float lineM = texture2D(uLine, vMapUv).r;
          float reach = uFill * 1.25;
          float lit = lineM * smoothstep(reach, reach - 0.08, vMapUv.y);
          float edge = lineM * smoothstep(0.1, 0.0, abs(vMapUv.y - reach)) * step(0.001, uFill) * step(uFill, 0.999);
          float foil = lineM * max(0.72, lit);
          // a soft band of light travels diagonally across the foil while the card rests
          float band = exp(-pow((vMapUv.x * 0.55 + vMapUv.y * 0.85 - fract(uT * 0.07) * 2.2 + 0.4) * 5.0, 2.0));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.50, 0.12), foil);
          metalnessFactor = mix(metalnessFactor, 0.82, foil);
          roughnessFactor = mix(roughnessFactor, 0.3, foil);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          totalEmissiveRadiance += vec3(1.0, 0.72, 0.32) * edge * 4.0 + vec3(1.0, 0.8, 0.45) * band * lineM * 0.6 * (1.0 - uFill) + vec3(0.95, 0.66, 0.25) * foil * (0.2 + lit * 0.1);`)},tt.customProgramCacheKey=()=>"goldfoil"+(nt?"curl":"")};E(g),await sc();let x=D_(1024,512,["#7a3246","#4a1a2a"]),b=new Nn({map:x.map,metalnessMap:x.metalnessMap,metalness:1,roughness:.55,side:Sn,color:14731468,emissive:new Zt(16765636),emissiveIntensity:0}),C=new Nn({color:2887705,roughness:.92,emissive:new Zt(16773340),emissiveIntensity:0}),F=new Ki({color:13211182,metalness:1,roughness:.36,clearcoat:.3});await sc();let I=L_(n,t.seal||{});await sc(),performance.mark("env:seal");let D=new Ki({map:I.map,normalMap:I.normalMap,normalScale:new dt(1.6,1.6),metalness:1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:3.2,emissiveMap:I.emissiveMap,emissive:new Zt(16738846),emissiveIntensity:0}),P=new Zt(16734740),N=new Zt(16762954),V=new Ki({color:14265420,metalness:1,roughness:.24,clearcoat:.9,clearcoatRoughness:.15,envMapIntensity:3}),O=Qu(),Z=new $i({map:O,blending:Rn,transparent:!0,depthWrite:!1,opacity:0}),H=new $i({map:O,blending:Rn,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}),R=new $i({map:pE(),blending:Rn,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}),Y=new $i({map:O,color:12570879,blending:Rn,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}),ft=fE(),yt=new Si({color:3810328,transparent:!0,opacity:.3,depthWrite:!1,alphaMap:(()=>{let tt=document.createElement("canvas");tt.width=tt.height=256;let nt=tt.getContext("2d"),bt=nt.createRadialGradient(128,128,60,128,128,150);return bt.addColorStop(0,"#000"),bt.addColorStop(1,"#fff"),nt.fillStyle=bt,nt.fillRect(0,0,256,256),new yn(tt)})()}),Et=new Si({color:4862776,transparent:!0,opacity:.48,depthWrite:!1}),Nt={value:0},Lt={value:1},W=tt=>{tt.onBeforeCompile=nt=>{nt.uniforms.uBend=Nt,nt.uniforms.uLen=Lt,nt.vertexShader=`uniform float uBend; uniform float uLen;
`+nt.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float ft = clamp(-position.y / uLen, 0., 1.);
transformed.z += uBend * ft * ft * uLen * .22;`)}},Q=g.clone();Q.onBeforeCompile=null,W(Q),E(Q),W(b),w((r.clientWidth||innerWidth)/(r.clientHeight||innerHeight));let ut=null,Rt=0;function Tt(){ut&&(o.remove(ut.root),ut.root.traverse(hn=>hn.geometry&&hn.geometry.dispose()));let tt=r.clientWidth||innerWidth,nt=r.clientHeight||innerHeight;Rt=tt/nt;let bt=Rt,It=2*bt*1.04;(!m||Math.abs(m.hw-bt)>.02)&&(w(bt),m.hw=bt);let U=.35*bt,st=m.sealY-U*.12,gt=st+.54,xt=st+.16,mt=-1.4,St=gt-st;Lt.value=St;let ht=new yi,Yt=new ee(Yp([[-bt*1.6,-1.6],[bt*1.6,-1.6],[bt*1.6,1.6],[-bt*1.6,1.6]]),g);Yt.position.z=-.03,Yt.receiveShadow=!0,ht.add(Yt);let vt=new ee(Yp([[-It/2,gt],[It/2,gt],[0,xt-.02]]),C);vt.position.z=-.015,vt.receiveShadow=!0,ht.add(vt);let rt=new ee(Yp([[-It/2,gt],[0,xt],[It/2,gt],[It/2,mt],[-It/2,mt]]),g);rt.castShadow=!0,rt.receiveShadow=!0,ht.add(rt);let at=new ee(new mn(bt*2.4,2.4),yt);at.position.z=.03,at.renderOrder=5,ht.add(at);let kt=new yi;kt.position.set(0,gt,.02);let ge=hE(It,St),te=ge.attributes.uvw,ye=new Ce().copy(ge),We=ye.attributes.uv;for(let hn=0;hn<We.count;hn++)We.setXY(hn,te.getX(hn)+.5,te.getY(hn)+gt/ya+.5);let Te=new ee(ye,Q);Te.castShadow=!0,Te.receiveShadow=!0;let _e=new ee(ge,b);_e.castShadow=!0,_e.receiveShadow=!0,kt.add(Te,_e);let ae=new ee(uE(U),[D,V]),Xe=2*U*1.14;I.map.repeat.set(1/Xe,1/Xe),I.map.offset.set(.5,.5),I.normalMap.repeat.copy(I.map.repeat),I.normalMap.offset.copy(I.map.offset),I.emissiveMap.repeat.copy(I.map.repeat),I.emissiveMap.offset.copy(I.map.offset),ae.castShadow=!0;let we=new yi;we.position.set(0,-St+U*.12,.002),we.add(ae),kt.add(we),ht.add(kt);{let Hi=-It/2-.05,en=It/2+.05,ze=st-.05,En=gt+.05,ir=1024,A=Math.round(ir*(En-ze)/(en-Hi)),G=document.createElement("canvas");G.width=ir,G.height=A;let K=G.getContext("2d"),J=Bt=>(Bt-Hi)/(en-Hi)*ir,$=Bt=>(En-Bt)/(En-ze)*A,Dt=Bt=>{K.beginPath(),K.moveTo(J(-It/2-.05),$(gt+.05)),K.lineTo(J(It/2+.05),$(gt+.05)),K.lineTo(J(It/2),$(gt-Bt)),K.lineTo(J(0),$(st-Bt)),K.lineTo(J(-It/2),$(gt-Bt)),K.closePath()};K.filter="blur(6px)",K.fillStyle="#fff",Dt(.012),K.fill(),K.filter="none",K.globalCompositeOperation="destination-out",Dt(0),K.fill(),Et.alphaMap&&Et.alphaMap.dispose(),Et.alphaMap=new yn(G),Et.needsUpdate=!0;let Gt=new ee(new mn(en-Hi,En-ze),Et);Gt.position.set(0,(ze+En)/2,.004),ht.add(Gt)}let on=new gr(Z);on.position.set(0,xt+.03,-.008),on.scale.setScalar(.01),ht.add(on);let cn=new ee(new mn(3.4*bt,3).translate(0,.9,0),ft);cn.position.set(0,xt-.02,.05),cn.renderOrder=10,o.add(cn);let Ne=new gr(H);Ne.position.set(0,xt+.16,.08),Ne.renderOrder=15;let Ue=new gr(R);Ue.position.copy(Ne.position),Ue.renderOrder=16;let Ye=new gr(Y);Ye.position.copy(Ne.position),Ye.renderOrder=17,o.add(Ne,Ue,Ye),u.position.set(0,xt+.08,.02),o.add(ht),ut={root:ht,pivot:kt,sealGroup:we,glow:on,rayMesh:cn,flash:Ne,star:Ue,streak:Ye,yP:xt,hw:bt,L:St}}function Ut(){let tt=r.clientWidth||innerWidth,nt=r.clientHeight||innerHeight;n.setSize(tt,nt,!1),e.style.width=tt+"px",e.style.height=nt+"px",c.aspect=tt/nt,c.updateProjectionMatrix(),et.setSize(tt,nt),ct.resolution.set(tt,nt),pt.material.uniforms.uPx.value=s*(nt/844),!j.opening&&Math.abs(tt/nt-Rt)>.04&&(o.remove(ut.rayMesh,ut.flash,ut.star,ut.streak),Tt())}await sc(),Tt(),await sc();let zt=new $e(1,1,{type:Mn,samples:s>=2.5?0:4}),et=new _a(n,zt);et.addPass(new va(o,c));let ct=new Es(new dt(256,256),.2,.5,.97);et.addPass(ct),et.addPass(new xa);let pt=dE(460,new k(0,ut.yP+.16,.1));o.add(pt);let B=(()=>{let nt=Ti(17),bt=new Float32Array(270),It=new Float32Array(90);for(let gt=0;gt<90;gt++)bt[gt*3]=(nt()-.5)*2.6,bt[gt*3+1]=(nt()-.5)*2.4,bt[gt*3+2]=.05+nt()*.3,It[gt]=nt();let U=new Ce;U.setAttribute("position",new He(bt,3)),U.setAttribute("aPhase",new He(It,1));let _t=new Ee({transparent:!0,depthWrite:!1,depthTest:!1,blending:Rn,uniforms:{uTime:{value:0},uPx:{value:1},uFade:{value:1}},vertexShader:`attribute float aPhase; uniform float uTime, uPx; varying float vA;
        void main(){ vec3 p = position; p.y = mod(p.y + uTime * (0.015 + aPhase * 0.02) + 1.2, 2.4) - 1.2; p.x += sin(uTime * 0.25 + aPhase * 20.0) * 0.05;
          vA = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * (0.8 + aPhase * 1.5) + aPhase * 30.0));
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = (2.0 + aPhase * 5.0) * uPx; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vA; uniform float uFade;
        void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d) * vA * 0.55 * uFade; gl_FragColor = vec4(vec3(1.0, 0.86, 0.6) * a, a); }`}),st=new ds(U,_t);return st.frustumCulled=!1,st.renderOrder=8,o.add(st),st})(),j={opening:!1,post:!0,flap:0,glow:0,rays:0,flash:0,lava:0,sweep:0,streak:0,dim:0,t0:0,sparkT:-1},Ot={x:0,y:0,tx:0,ty:0},Ct=tt=>{let nt=r.getBoundingClientRect();Ot.tx=((tt.clientX-nt.left)/nt.width-.5)*2,Ot.ty=((tt.clientY-nt.top)/nt.height-.5)*2};window.addEventListener("pointermove",Ct,{passive:!0});let Ft=tt=>{tt.gamma!=null&&(Ot.tx=bs.clamp(tt.gamma/25,-1,1),Ot.ty=bs.clamp((tt.beta-45)/25,-1,1))};window.addEventListener("deviceorientation",Ft,{passive:!0}),Ut();let Jt=()=>Ut();window.addEventListener("resize",Jt);let z=performance.now(),re=()=>(performance.now()-z)/1e3,Xt=[],L=0,y=0;function X(tt){s=tt,n.setPixelRatio(s),et.setPixelRatio(s),Ut()}function q(){let tt=performance.now(),nt=L?tt-L:0;if(L=tt,t.adapt===!1||j.opening||j.frozen!=null||s<=1.5||!nt||(++y>60&&Xt.push(nt),Xt.length<40))return;let bt=Xt.slice().sort((It,U)=>It-U)[20];Xt.length=0,bt>24&&X(Math.max(1.5,s-.75))}try{await n.compileAsync(o,c)}catch{}performance.mark("env:compiled");let it=!0,wt,Mt=new Promise(tt=>{wt=tt});n.setAnimationLoop(()=>{it&&(it=!1,z=performance.now(),performance.mark("env:frame"));let tt=j.frozen!=null?j.frozen:re();q(),Ot.x+=(Ot.tx-Ot.x)*.05,Ot.y+=(Ot.ty-Ot.y)*.05,d.position.x=-.9+Math.sin(tt*.35)*.35+Ot.x*.45+Math.sin(j.sweep*Math.PI)*2.4,d.position.y=1.7+Math.cos(tt*.27)*.2-Ot.y*.3-j.sweep*.6,d.intensity=2.7+Math.sin(j.sweep*Math.PI)*1.4,h.intensity=.32*(1-j.dim*.6),o.environmentIntensity=.3*(1-j.dim*.5),c.position.x=Ot.x*.025,c.position.y=-Ot.y*.02,c.lookAt(0,0,0);let nt=ut;nt.pivot.rotation.x=-j.flap*Math.PI*.965,Nt.value=Math.sin(j.flap*Math.PI)*.6,nt.sealGroup.visible=j.flap<.62;let bt=.12+.08*Math.sin(tt*1.6),It=j.lava*(2.6+Math.sin(tt*9)*.7+Math.sin(tt*23+1)*.35);if(D.emissiveIntensity=bt+It,D.emissive.copy(P).lerp(N,.5+.5*Math.sin(tt*5.5)),C.emissiveIntensity=j.glow*.7+j.flash*.6,u.intensity=j.glow*2.5,Z.opacity=j.glow*.42,nt.glow.scale.set(.2+j.glow*1.1*nt.hw*2,.12+j.glow*.5,1),ft.uniforms.uTime.value=tt,S.value=tt,B.material.uniforms.uTime.value=tt,B.material.uniforms.uPx.value=s,B.material.uniforms.uFade.value=1-j.flash,ft.uniforms.uIntensity.value=j.rays*(1-j.flash*.4),ft.uniforms.uReach.value=.2+j.rays*1.6,H.opacity=j.flash,nt.flash.scale.setScalar(.05+j.flash*3.6),R.opacity=j.flash*.9,nt.star.scale.setScalar(.05+j.flash*4.2),Y.opacity=j.streak,nt.streak.scale.set(.3+j.streak*9*nt.hw,.02+j.streak*.22,1),nt.star.material.rotation=tt*.3,ct.strength=.12+j.glow*.18+j.flash*1.6,ct.threshold=.97-j.glow*.25,b.emissiveIntensity=j.glow*.55+j.flash*.4,Et.opacity=.48*(1-Math.min(1,j.flap*4)),j.sparkT>=0&&(pt.material.uniforms.uTime.value=tt-j.sparkT),j.post?et.render():n.render(o,c),wt){let U=wt;wt=null,requestAnimationFrame(()=>U())}});let ot=null;function lt(tt){if(Pe.ticker.tick(),j.opening)return Promise.resolve();if(j.opening=!0,navigator.vibrate)try{navigator.vibrate(12)}catch{}let nt=ut,bt=t.reduceMotion;return new Promise(It=>{let U=Pe.timeline({onComplete:()=>It(),paused:!!tt});ot=U;let _t=nt.sealGroup.scale,st=()=>c.updateProjectionMatrix();if(bt){U.to(j,{lava:1,duration:.15},0),U.to(v,{value:1,duration:.5},0),U.to(j,{flap:1,duration:.6,ease:"power2.inOut"},.1),U.to(j,{glow:1,rays:1,duration:.5},.5),U.to(j,{flash:1,duration:.3,ease:"power3.in"},1),U.call(()=>{j.sparkT=j.frozen!=null?j.frozen:re(),nt.root.visible=!1,j.post=!1;let gt=t.onFlash&&t.onFlash();gt&&gt.then&&(U.pause(),gt.then(()=>U.resume(),()=>U.resume()))},null,1.3),U.to(j,{flash:0,rays:0,glow:0,duration:1},1.32),U.to(e,{opacity:0,duration:1},1.6);return}U.to(_t,{x:.93,y:.93,z:.7,duration:.16,ease:"power2.out"}).to(_t,{x:1,y:1,z:1,duration:.5,ease:"back.out(2.5)"}),U.to(j,{lava:1,duration:.35,ease:"power3.out"},.05),U.to(v,{value:1,duration:1.9,ease:"sine.inOut"},.15),U.to(j,{sweep:1,duration:1.6,ease:"sine.inOut"},.5),U.to(j,{dim:1,duration:3.4,ease:"sine.inOut"},1),U.to(j,{flap:1,duration:3,ease:"power2.inOut"},2),U.to(c,{zoom:1.14,duration:5.4,ease:"sine.inOut",onUpdate:st},1.2),U.to(c.position,{y:"-=0.06",duration:5.4,ease:"sine.inOut"},1.2),U.to(j,{glow:1,duration:1.6,ease:"power2.in"},3.2),U.to(j,{rays:1,duration:1.5,ease:"power2.out"},4),U.to(j,{streak:1,duration:.6,ease:"power2.out"},5),U.to(j,{flash:1,duration:.5,ease:"power4.in"},5.5),U.call(()=>{j.sparkT=j.frozen!=null?j.frozen:re(),nt.root.visible=!1,j.post=!1;let gt=t.onFlash&&t.onFlash();gt&&gt.then&&(U.pause(),gt.then(()=>U.resume(),()=>U.resume()))},null,6),U.to(j,{streak:0,duration:1.2,ease:"power2.out"},6),U.to(j,{flash:0,rays:0,glow:0,duration:1.6,ease:"power2.out"},6.05),U.to(e,{opacity:0,duration:1.5,ease:"power1.in"},6.8)})}function Pt(){n.setAnimationLoop(null),window.removeEventListener("pointermove",Ct),window.removeEventListener("deviceorientation",Ft),window.removeEventListener("resize",Jt),o.traverse(tt=>{tt.geometry&&tt.geometry.dispose(),(tt.material?Array.isArray(tt.material)?tt.material:[tt.material]:[]).forEach(bt=>{Object.values(bt).forEach(It=>It&&It.isTexture&&It.dispose()),bt.dispose()})}),l.dispose(),a.dispose(),et.dispose(),n.dispose(),e.remove()}e.addEventListener("click",()=>t.onTap&&t.onTap());function Vt(tt){ot||lt(!0),j.frozen=tt,ot.time(tt,!1)}function At(tt){j.frozen=tt}return{open:lt,destroy:Pt,seek:Vt,freeze:At,firstFrame:Mt,canvas:e}}function k_(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Ce,c=0;for(let h=0;h<r.length;++h){let d=r[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<r.length;++u){let f=r[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=r[u].attributes.position.count}l.setIndex(d)}for(let h in s){let d=z_(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);let p=z_(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function z_(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new He(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let _=h.getComponent(u,p);a.setComponent(u+d,p,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var H_=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
  float fbm(vec2 p){ float v = 0., a = .5; for (int i = 0; i < 5; i++){ v += a * noise(p); p *= 2.03; a *= .5; } return v; }
`;function gE(r){return new Ee({uniforms:{uTime:{value:0},uAspect:{value:r}},depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`
      varying vec2 vUv; uniform float uTime, uAspect;
      ${H_}
      void main(){
        vec2 uv = vUv; float h = uv.y; float hz = .25;
        vec3 top = vec3(.05,.1,.24), mid = vec3(.2,.36,.62), low = vec3(.6,.6,.74), warm = vec3(1.,.74,.58);
        vec3 col = mix(low, mid, smoothstep(hz, .6, h));
        col = mix(col, top, smoothstep(.6, 1., h));
        col = mix(warm, col, smoothstep(hz - .01, hz + .16, h));
        vec2 mp = vec2(.64, .72);
        float md = length((uv - mp) * vec2(uAspect, 1.));
        // clouds, lit from the moon side
        float c = fbm(vec2(uv.x * 2.4 + uTime * .006, uv.y * 5.5 - uTime * .002));
        float cm = smoothstep(.52, .78, c) * smoothstep(hz + .02, hz + .2, h) * (1. - smoothstep(.8, .98, h));
        vec3 cc = mix(vec3(.32,.36,.52), vec3(.95,.86,.86), exp(-md * 3.) * .8 + smoothstep(.5, .3, h) * .35);
        col = mix(col, cc, cm * .55);
        // stars
        vec2 sg = uv * vec2(260. * uAspect, 260.);
        float s = hash(floor(sg));
        float star = step(.994, s) * smoothstep(.5, .05, length(fract(sg) - .5)) * (.55 + .45 * sin(uTime * (1.5 + s * 3.) + s * 40.));
        col += star * smoothstep(.45, .85, h) * (1. - cm);
        // moon disc + halo
        col = mix(col, vec3(1., .97, .9), smoothstep(.034, .029, md));
        col += vec3(.85, .85, 1.) * exp(-md * 10.) * .3 + vec3(1.,.9,.8) * exp(-md * 30.) * .25;
        // far hills
        float hill = hz + .025 + .02 * sin(uv.x * 6. + 1.) + .012 * sin(uv.x * 15. + 2.);
        if (h < hill && h > hz) col = mix(col, vec3(.17,.16,.27), .9);
        // sea with a moon path
        if (h <= hz) {
          float d = hz - h;
          vec3 w = mix(vec3(.3,.29,.43), vec3(.06,.07,.14), smoothstep(0., .25, d));
          float ripple = noise(vec2(uv.x * 60., uv.y * 420. + uTime * 1.2));
          float path = exp(-abs(uv.x - mp.x) * 14. / (1. + d * 5.)) * smoothstep(.55, .9, ripple);
          w += vec3(1., .88, .75) * path * .8 * smoothstep(.28, 0., d);
          col = w;
        }
        gl_FragColor = vec4(pow(col, vec3(2.2)), 1.);
      }`})}function _E(r=256,t=4){let e=document.createElement("canvas");e.width=e.height=r;let n=e.getContext("2d"),i=n.createImageData(r,r),s=Ti(t),o=new Float32Array(r*r);for(let l=0;l<o.length;l++)o[l]=s();for(let l=0;l<2;l++){let c=new Float32Array(o.length);for(let h=0;h<r;h++)for(let d=0;d<r;d++){let u=0;for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++)u+=o[(h+f+r)%r*r+(d+p+r)%r];c[h*r+d]=u/9}o.set(c)}for(let l=0;l<r;l++)for(let c=0;c<r;c++){let h=o[l*r+(c+1)%r]-o[l*r+(c-1+r)%r],d=o[(l+1)%r*r+c]-o[(l-1+r)%r*r+c],u=-h*6,f=d*6,p=Math.hypot(u,f,1),_=(l*r+c)*4;i.data[_]=(u/p*.5+.5)*255,i.data[_+1]=(f/p*.5+.5)*255,i.data[_+2]=(1/p*.5+.5)*255,i.data[_+3]=255}n.putImageData(i,0,0);let a=new yn(e);return a.wrapS=a.wrapT=Or,a}function vE(){let r=document.createElement("canvas");r.width=512,r.height=4;let t=r.getContext("2d"),e=20;for(let i=0;i<512;i++){let s=i/512*e*Math.PI*2,o=Math.sin(s)*.6,a=Math.hypot(o,1);t.fillStyle=`rgb(${(o/a*.5+.5)*255},128,${(1/a*.5+.5)*255})`,t.fillRect(i,0,1,4)}let n=new yn(r);return n.wrapS=n.wrapT=Or,n}var tf=class extends Qn{constructor(t,e,n,i){super(),Object.assign(this,{halfW:t,spring:e,bottom:n,z:i})}getPoint(t,e=new k){let{halfW:n,spring:i,bottom:s,z:o}=this,a=i-s,l=Math.PI*n,c=a*2+l,h=t*c;if(h<a)return e.set(-n,s+h,o);if(h-=a,h<l){let d=Math.PI-h/n;return e.set(Math.cos(d)*n,i+Math.sin(d)*n,o)}return h-=l,e.set(n,i-h,o)}};function V_(r=1.5,t=.32){let e=new mn(1,1,7,9),n=e.attributes.position,i=[];for(let s=0;s<n.count;s++){let o=n.getX(s),a=n.getY(s)+.5,l=Math.pow(Math.sin(Math.PI*Math.min(1,a*.8+.2)),.6)*(1.05-.2*a),c=o*l,h=-c*c*r+a*a*t-Math.max(0,a-.8)*t*.6;n.setXYZ(s,c,a,h);let d=.5+.5*Math.pow(a,.7);i.push(d,d*.96,d*.96)}return e.setAttribute("color",new le(i,3)),e}function xE(){let r=[],e=new be,n=new ui,i=new fi;for(let o=0;o<22;o++){let a=o/21,l=.28+a*.72,c=V_(2.6-a*1.6,.1+a*.45);i.set(.05+Math.pow(a,1.6)*1.05,o*2.39996,0,"YXZ"),n.setFromEuler(i);let h=.012+a*.11,d=o*2.39996;e.compose(new k(Math.sin(d)*h,-a*.1,Math.cos(d)*h),n,new k(l*.85,l*.72,l*.85)),c.applyMatrix4(e),r.push(c)}let s=k_(r);return s.computeVertexNormals(),s.scale(.5,.5,.5),s}function yE(){let r=new mn(1,1,4,6),t=r.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),i=t.getY(e)+.5,s=Math.sin(Math.PI*i)*.42;t.setXYZ(e,n*s,i,-Math.abs(n*s)*.5+i*i*.18)}return r.computeVertexNormals(),r}function SE(r,t){let i=new mn(1,1,56,80),s=new ee(i,r);s.frustumCulled=!1;let o=i.attributes.position,a=i.attributes.uv,l=new Float32Array(o.count),c=new Float32Array(o.count);for(let T=0;T<o.count;T++)l[T]=a.getX(T),c[T]=1-a.getY(T);let{outer:h,topInner:d,tieInner:u,bottomInner:f,top:p,tieY:_,bottom:m,z:g,side:M,folds:w}=t,v=p-m;function S(T,E){for(let x=0;x<o.count;x++){let b=l[x],C=c[x],F=p-C*v,I=(p-_)/v,D;if(C<I){let R=C/I;D=d+(u-d)*(R*R*(3-2*R))}else{let R=(C-I)/(1-I);D=u+(f-u)*Math.sqrt(R)}let P=Math.abs(D-h),N=1.25/Math.max(P,.15),V=h+(D-h)*b,O=E*(Math.sin(T*.7+C*2.6+b*1.3)*.035+Math.sin(T*1.3+C*5.1)*.012)*C,Z=Math.sin(T*.5+C*1.7)*.5,H=(Math.sin(b*w*Math.PI*2+Z)*.65+Math.sin(b*w*1.73*Math.PI*2+1.3+Z*.7)*.35)*.03*N*(.6+.4*C);H+=O*1.4,V+=O*.6*M,C>I&&(H+=Math.sin((C-I)/(1-I)*Math.PI)*.06),o.setXYZ(x,V,F,g+H)}o.needsUpdate=!0,i.computeVertexNormals()}return{mesh:s,update:S}}function ME(r,t,e,n){let i=new mn(1,1,140,14),s=i.attributes.position,o=i.attributes.uv;for(let l=0;l<s.count;l++){let c=o.getX(l),h=1-o.getY(l),d=(c-.5)*t,u=Math.abs(Math.sin(c*Math.PI*3))*.32+.12,f=e-h*u,p=Math.sin(c*160)*.012*(1-h*.5)+h*.08;s.setXYZ(l,d,f,n+p)}i.computeVertexNormals();let a=new ee(i,r);return a.frustumCulled=!1,a}function bE(){return new Ee({transparent:!0,depthWrite:!1,blending:Rn,side:jn,uniforms:{uTime:{value:0},uOpacity:{value:.07}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`
      varying vec2 vUv; uniform float uTime, uOpacity;
      ${H_}
      void main(){
        float edge = smoothstep(0., .35, vUv.x) * smoothstep(1., .65, vUv.x);
        float along = smoothstep(0., .15, vUv.y) * smoothstep(1., .4, vUv.y);
        float n = .65 + .35 * noise(vec2(vUv.x * 6. + uTime * .05, vUv.y * 2. - uTime * .03));
        float a = edge * along * n * uOpacity;
        gl_FragColor = vec4(vec3(.75, .8, 1.) * a, a);
      }`})}function TE(r,t){let e=Ti(12),n=new Float32Array(r*3),i=new Float32Array(r);for(let l=0;l<r;l++)n[l*3]=(e()-.5)*t.x,n[l*3+1]=(e()-.5)*t.y,n[l*3+2]=(e()-.5)*t.z,i[l]=e();let s=new Ce;s.setAttribute("position",new He(n,3)),s.setAttribute("aPhase",new He(i,1));let o=new Ee({transparent:!0,depthWrite:!1,blending:Rn,uniforms:{uTime:{value:0},uPx:{value:1},uBox:{value:t}},vertexShader:`
      attribute float aPhase; uniform float uTime, uPx; uniform vec3 uBox; varying float vA;
      void main(){
        vec3 p = position;
        p.y = mod(p.y + uTime * (.02 + aPhase * .03) + uBox.y * .5, uBox.y) - uBox.y * .5;
        p.x += sin(uTime * .3 + aPhase * 20.) * .08;
        p.z += cos(uTime * .25 + aPhase * 13.) * .06;
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        vA = (.35 + .65 * sin(uTime * (1. + aPhase * 2.) + aPhase * 30.) * .5 + .5) * smoothstep(9., 2., -mv.z);
        gl_PointSize = (1.5 + aPhase * 4.) * uPx * (3. / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying float vA;
      void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, 0., d) * vA * .8;
        gl_FragColor = vec4(vec3(1., .9, .75) * a, a); }`}),a=new ds(s,o);return a.frustumCulled=!1,a}var wE={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDark:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uDark; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float v = smoothstep(1.05, .35, length((vUv - .5) * vec2(1., 1.25)));
      c.rgb *= mix(.55, 1., v);
      c.rgb += (h(vUv * 900. + fract(uTime) * 50.) - .5) * .035;
      c.rgb *= 1. - uDark;
      gl_FragColor = c;
    }`};function G_(r,t={}){let e=new ua({antialias:!0,powerPreference:"high-performance"});if(!e.getContext())throw new Error("WebGL unavailable");let n=!!t.touch,i=n&&((navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=3),s=Math.min(window.devicePixelRatio||1,n?2.25:2),o=Math.min(window.devicePixelRatio||1,1.5);e.setPixelRatio(s),e.toneMapping=Hr,e.toneMappingExposure=.92,e.outputColorSpace=Ze,e.shadowMap.enabled=!0,e.shadowMap.type=kr,e.domElement.className="hero-gl",r.appendChild(e.domElement);let a=new Zi;a.background=new Zt(855062),a.fog=new pl(1052448,.06);let c=new Ts(e).fromScene(new pa,.04).texture,h=new xn(38,1,.05,40),d=new k(0,.08,5.2),u=new k(0,.12,-.4);h.position.copy(d),a.add(new Ks(3820920,1905691,.32));let f=new vs(13030655,1.7);f.position.set(.35,1.5,-4),f.target.position.set(0,-.6,1.2),f.castShadow=!0,f.shadow.mapSize.set(n?768:1024,n?768:1024),Object.assign(f.shadow.camera,{left:-2.2,right:2.2,top:2.6,bottom:-2.6,near:.5,far:12}),f.shadow.radius=3,f.shadow.bias=-8e-4,a.add(f,f.target);let p=new vs(16766912,.35);p.position.set(.2,.6,5),a.add(p);let _=16754784,m=[-.74,.74].map(rt=>{let at=new zr(_,1.1,2,1.8);return at.position.set(rt,.86,.35),a.add(at),at}),g=_E(),M=new Nn({color:4536378,roughness:.95,normalMap:g,normalScale:new dt(.5,.5)});g.repeat.set(3,3);let w=new Nn({color:10126192,roughness:.62,normalMap:g,normalScale:new dt(.25,.25)}),v=vE();v.repeat.set(1,1);let S=new Nn({color:11047551,roughness:.5,normalMap:v,normalScale:new dt(1,1)}),T=new Nn({color:2367018,roughness:.82,metalness:0}),E=new Ki({color:6848683,roughness:.48,sheen:.85,sheenColor:new Zt(12899056),sheenRoughness:.35,side:jn,envMap:c,envMapIntensity:.08}),x=new Nn({color:14198348,metalness:1,roughness:.3,envMap:c,envMapIntensity:.7}),b=new Ki({vertexColors:!0,roughness:.58,sheen:.7,sheenColor:new Zt(16765144),sheenRoughness:.5,side:jn}),C=new Nn({color:3824188,roughness:.55,side:jn}),F=new ee(new mn(2.8,3.6),gE(2.8/3.6));F.position.set(0,.3,-5.5),a.add(F);let I=.47,D=.48,P=-.36,N=new vr;N.moveTo(-4,-.95),N.lineTo(4,-.95),N.lineTo(4,4),N.lineTo(-4,4),N.closePath();let V=new Zs;V.moveTo(-I,P-.32),V.lineTo(I,P-.32),V.lineTo(I,D),V.absarc(0,D,I,0,Math.PI,!1),V.lineTo(-I,P-.32),N.holes.push(V);let O=new ee(new $s(N,{depth:.32,bevelEnabled:!1,curveSegments:48}),M);O.position.z=-.72,O.castShadow=!0,a.add(O);let Z=-.39,H=new tf(I+.02,D,P-.3,Z);a.add(new ee(new ea(H,220,.032,12),w)),a.add(new ee(new ea(new tf(I+.075,D,P-.3,Z-.01),220,.018,10),w));let R=new ee(new Ni(.08,.12,.06),w);R.position.set(0,D+I+.04,Z+.01),a.add(R);let Y=new ee(new Ni(I*2+.04,.045,.1),w);Y.position.set(0,P,-.52);let ft=Y.clone();ft.position.y=P-.29,Y.castShadow=ft.castShadow=!0,a.add(Y,ft);let yt=[[0,0],[.026,0],[.026,.02],[.018,.035],[.03,.09],[.034,.12],[.02,.17],[.014,.2],[.024,.22],[.024,.245],[0,.245]].map(([rt,at])=>new dt(rt,at)),Et=new ta(yt,18),Nt=9,Lt=new _r(Et,w,Nt),W=new be;for(let rt=0;rt<Nt;rt++)W.makeTranslation(-I+.06+rt*(I*2-.12)/(Nt-1),P-.268,-.52),Lt.setMatrixAt(rt,W);Lt.castShadow=!0,a.add(Lt);let Q=new ee(new mn(8,8),T);Q.rotation.x=-Math.PI/2,Q.position.set(0,-.68,2),Q.receiveShadow=!0,a.add(Q);let ut=Qu([[0,"rgba(255,230,200,.9)"],[.4,"rgba(255,200,160,.25)"],[1,"rgba(255,200,160,0)"]]),Rt=new ee(new mn(1.6,1.4),new Si({map:ut,transparent:!0,opacity:.32,blending:Rn,depthWrite:!1,color:12569343}));Rt.rotation.x=-Math.PI/2,Rt.position.set(0,-.675,.1),Rt.visible=!1,a.add(Rt);let Tt=[[0,0],[.13,0],[.13,.05],[.115,.06],[.112,.085],[.095,.1],[.09,.12],[.082,1.95],[.095,1.98],[.115,2.03],[.14,2.06],[.14,2.11],[0,2.11]].map(([rt,at])=>new dt(rt,at)),Ut=new ta(Tt,40);[-.76,.76].forEach(rt=>{let at=new ee(Ut,S);at.position.set(rt,-.68,.05),at.castShadow=!0,a.add(at)});let zt=new $i({map:ut,color:16757611,blending:Rn,transparent:!0,depthWrite:!1,opacity:.75});m.forEach(rt=>{let at=new gr(zt);at.position.copy(rt.position),at.scale.setScalar(.3),a.add(at);let kt=new ee(new Ll(.018,12,12),new Si({color:16773328}));kt.position.copy(rt.position),a.add(kt)});let et=[-1,1].map(rt=>{let at=SE(E,{side:rt,outer:rt*1.25,topInner:rt*.12,tieInner:rt*.66,bottomInner:rt*.5,top:1.95,tieY:-.05,bottom:-.7,z:.42+(rt>0?.005:0),folds:11});return a.add(at.mesh),at});a.add(ME(E,2.8,1.62,.5)),[-1,1].forEach(rt=>{let at=new ee(new Dl(.05,.012,10,24),x);at.position.set(rt*.68,-.05,.47),at.rotation.y=Math.PI/2,a.add(at);let kt=new ee(new Ml(.022,.12,12),x);kt.position.set(rt*.66,-.15,.49),a.add(kt)});let ct=xE(),pt=yE(),B=[15776192,14257306,16179670,11028576,15709586,15180722].map(rt=>new Zt(rt)),j=[],Ot=[],Ct=Ti(21);function Ft(rt,at,kt,ge,te,ye,We,Te=.9){for(let _e=0;_e<ge;_e++){let ae=Ct()*Math.PI*2,Xe=Math.sqrt(Ct())*te;j.push({p:new k(rt+Math.cos(ae)*Xe,at+Math.sin(ae)*Xe*.7,kt+(Ct()-.5)*te*.4),s:ye+Ct()*(We-ye),face:Te,c:B[Math.floor(Ct()*B.length)]})}for(let _e=0;_e<ge*2.2;_e++){let ae=Ct()*Math.PI*2,Xe=Math.sqrt(Ct())*te*1.2;Ot.push({p:new k(rt+Math.cos(ae)*Xe,at+Math.sin(ae)*Xe*.75,kt-.03+(Ct()-.5)*te*.3),s:(ye+We)*.45*(.7+Ct()*.6)})}}Ft(-.56,-.58,.3,18,.22,.16,.26),Ft(.56,-.58,.3,18,.22,.16,.26),Ft(-.44,P+.03,-.4,9,.12,.09,.14),Ft(.44,P+.03,-.4,9,.12,.09,.14),Ft(-.62,.3,.2,7,.14,.08,.13,1.25),Ft(.62,.38,.2,7,.14,.08,.13,1.25),Ft(-.47,.98,-.3,8,.16,.08,.12,1.3),Ft(.47,.98,-.3,8,.16,.08,.12,1.3);let Jt=new _r(ct,b,j.length),z=new ui,re=new fi,Xt=new k;j.forEach((rt,at)=>{re.set(rt.face+(Ct()-.5)*.6,(Ct()-.5)*1.2,(Ct()-.5)*.8),z.setFromEuler(re),Xt.setScalar(rt.s),W.compose(rt.p,z,Xt),Jt.setMatrixAt(at,W),Jt.setColorAt(at,rt.c)}),Jt.castShadow=!0,a.add(Jt);let L=new _r(pt,C,Ot.length);Ot.forEach((rt,at)=>{re.set(Ct()*Math.PI,Ct()*Math.PI*2,Ct()*Math.PI),z.setFromEuler(re),Xt.setScalar(rt.s),W.compose(rt.p,z,Xt),L.setMatrixAt(at,W)}),a.add(L);let y=n?22:34,X=new _r(V_(1.4,.35),b,y),q=[];for(let rt=0;rt<y;rt++)q.push({x:(Ct()-.5)*2.2,y:Ct()*3.4-1.2,z:.2+Ct()*2.4,s:.035+Ct()*.03,sp:.05+Ct()*.07,ph:Ct()*10,rx:Ct()*3,ry:Ct()*3}),X.setColorAt(rt,B[rt%B.length]);X.frustumCulled=!1,a.add(X);let it=new fi,wt=new ui,Mt=new k,ot=new k;function lt(rt){q.forEach((at,kt)=>{let ge=((at.y-rt*at.sp)%3.4+3.4)%3.4-1.2;Mt.set(at.x+Math.sin(rt*.6+at.ph)*.18,ge,at.z+Math.cos(rt*.4+at.ph)*.1),it.set(at.rx+rt*.9,at.ry+rt*.7,Math.sin(rt+at.ph)),wt.setFromEuler(it),ot.setScalar(at.s),W.compose(Mt,wt,ot),X.setMatrixAt(kt,W)}),X.instanceMatrix.needsUpdate=!0}let Pt=bE(),Vt=new yi;[[-.16,.34],[.1,.28],[.26,.2]].forEach(([rt,at])=>{let kt=new ee(new mn(at,2.2),Pt);kt.position.set(rt,.05,-.05),kt.rotation.set(-.42,0,rt*-.5),Vt.add(kt)}),a.add(Vt);let At=TE(n?150:260,new k(2.2,2.6,2.4));At.position.set(0,.3,.8),a.add(At);let tt=new _a(e);tt.addPass(new va(a,h));let nt=new Es(new dt(256,256),.6,.65,.72);tt.addPass(nt),tt.addPass(new xa);let bt=new ga(wE);tt.addPass(bt);function It(){let rt=r.clientWidth||innerWidth,at=r.clientHeight||innerHeight;e.setSize(rt,at),tt.setSize(rt,at),h.aspect=rt/at,h.fov=rt/at<.6?38+(.6-rt/at)*22:38,h.updateProjectionMatrix(),At.material.uniforms.uPx.value=e.getPixelRatio()*(at/844)*2}It();let U=()=>It();window.addEventListener("resize",U);let _t={x:0,y:0,tx:0,ty:0},st=rt=>{_t.tx=(rt.clientX/innerWidth-.5)*2,_t.ty=(rt.clientY/innerHeight-.5)*2},gt=rt=>{rt.gamma!=null&&(_t.tx=bs.clamp(rt.gamma/30,-1,1),_t.ty=bs.clamp((rt.beta-50)/30,-1,1))};window.addEventListener("pointermove",st,{passive:!0}),window.addEventListener("deviceorientation",gt,{passive:!0});let xt={progress:0,intro:0,wind:1,active:!0,frozen:null,quality:i?"low":"high",auto:!0},mt=performance.now(),St=[],ht=0;function Yt(rt){xt.quality=rt;let at=rt==="low";e.setPixelRatio(at?o:s),tt.setPixelRatio(at?o:s),f.castShadow=!at,e.shadowMap.needsUpdate=!0,a.traverse(kt=>{(kt.material?Array.isArray(kt.material)?kt.material:[kt.material]:[]).forEach(te=>{te.needsUpdate=!0})}),It()}function vt(){let rt=performance.now();if(xt.active&&xt.intro>=1&&xt.frozen==null&&(ht&&St.push(rt-ht),xt.auto&&xt.quality==="high"&&St.length>=45)){let ge=St.slice().sort((te,ye)=>te-ye);ge[Math.floor(ge.length/2)]>26&&Yt("low"),St.length=0}ht=rt;let at=xt.frozen!=null?xt.frozen:(rt-mt)/1e3;_t.x+=(_t.tx-_t.x)*.04,_t.y+=(_t.ty-_t.y)*.04;let kt=xt.progress;h.position.set(d.x+_t.x*.12+Math.sin(at*.17)*.03,d.y-_t.y*.05+kt*.25,d.z+Math.sin(at*.21)*.06-kt*1.9+(1-xt.intro)*1.2),h.lookAt(u.x,u.y+kt*.15,u.z),et.forEach(ge=>ge.update(at,xt.wind)),lt(at),F.material.uniforms.uTime.value=at,Pt.uniforms.uTime.value=at,At.material.uniforms.uTime.value=at,bt.uniforms.uTime.value=at,bt.uniforms.uDark.value=Math.min(1,kt*1.15)*.85+(1-xt.intro)*.9,m.forEach((ge,te)=>{ge.intensity=1.05+Math.sin(at*7+te*3)*.04+Math.sin(at*13+te)*.025}),xt.quality==="low"?e.render(a,h):tt.render()}return e.setAnimationLoop(vt),xt.quality==="low"&&Yt("low"),{canvas:e.domElement,_debug:{scene:a,bloom:nt,grain:bt,pool:Rt,shaftGroup:Vt,motes:At,floor:Q},setProgress(rt){xt.progress=rt},setActive(rt){rt!==xt.active&&(xt.active=rt,ht=0,e.setAnimationLoop(rt?vt:null))},warmup(){let rt=()=>{vt(),vt()};return(e.compileAsync?e.compileAsync(a,h):Promise.resolve()).then(rt,rt)},setQuality(rt){xt.auto=!1,Yt(rt)},get quality(){return xt.quality},intro(rt=3.2){return Pe.fromTo(xt,{intro:0},{intro:1,duration:rt,ease:"power2.out"})},seek(rt,at=1){xt.frozen=rt,xt.intro=at},destroy(){e.setAnimationLoop(null),window.removeEventListener("resize",U),window.removeEventListener("pointermove",st),window.removeEventListener("deviceorientation",gt),e.dispose()}}}function W_(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function EE(r,t,e){return t&&W_(r.prototype,t),e&&W_(r,e),r}var Un,rf,AE,wi,Cs,Rs,Ma,Y_,no,ba,q_,Gr,er,Z_,J_=function(){return Un||typeof window!="undefined"&&(Un=window.gsap)&&Un.registerPlugin&&Un},$_=1,Sa=[],fe=[],nr=[],ac=Date.now,qp=function(t,e){return e},CE=function(){var t=ba.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,fe),i.push.apply(i,nr),fe=n,nr=i,qp=function(o,a){return e[o](a)}},Xr=function(t,e){return~nr.indexOf(t)&&nr[nr.indexOf(t)+1][e]},lc=function(t){return!!~q_.indexOf(t)},ei=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},ti=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ef="scrollLeft",nf="scrollTop",Zp=function(){return Gr&&Gr.isPressed||fe.cache++},sf=function(t,e){var n=function i(s){if(s||s===0){$_&&(wi.history.scrollRestoration="manual");var o=Gr&&Gr.isPressed;s=i.v=Math.round(s)||(Gr&&Gr.iOS?1:0),t(s),i.cacheID=fe.cache,o&&qp("ss",s)}else(e||fe.cache!==i.cacheID||qp("ref"))&&(i.cacheID=fe.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Gn={s:ef,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sf(function(r){return arguments.length?wi.scrollTo(r,gn.sc()):wi.pageXOffset||Cs[ef]||Rs[ef]||Ma[ef]||0})},gn={s:nf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Gn,sc:sf(function(r){return arguments.length?wi.scrollTo(Gn.sc(),r):wi.pageYOffset||Cs[nf]||Rs[nf]||Ma[nf]||0})},ni=function(t,e){return(e&&e._ctx&&e._ctx.selector||Un.utils.toArray)(t)[0]||(typeof t=="string"&&Un.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},RE=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Wr=function(t,e){var n=e.s,i=e.sc;lc(t)&&(t=Cs.scrollingElement||Rs);var s=fe.indexOf(t),o=i===gn.sc?1:2;!~s&&(s=fe.push(t)-1),fe[s+o]||ei(t,"scroll",Zp);var a=fe[s+o],l=a||(fe[s+o]=sf(Xr(t,n),!0)||(lc(t)?i:sf(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Un.getProperty(t,"scrollBehavior")==="smooth"),l},of=function(t,e,n){var i=t,s=t,o=ac(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var m=ac();_||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(p){var _=a,m=s,g=ac();return(p||p===0)&&p!==i&&h(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},oc=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},X_=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},K_=function(){ba=Un.core.globals().ScrollTrigger,ba&&ba.core&&CE()},Q_=function(t){return Un=t||J_(),!rf&&Un&&typeof document!="undefined"&&document.body&&(wi=window,Cs=document,Rs=Cs.documentElement,Ma=Cs.body,q_=[wi,Cs,Rs,Ma],AE=Un.utils.clamp,Z_=Un.core.context||function(){},no="onpointerenter"in Ma?"pointer":"mouse",Y_=sn.isTouch=wi.matchMedia&&wi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in wi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,er=sn.eventTypes=("ontouchstart"in Rs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Rs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return $_=0},500),rf=1),ba||K_(),rf};Gn.op=gn;fe.cache=0;var sn=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){rf||Q_(Un)||console.warn("Please gsap.registerPlugin(Observer)"),ba||K_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,M=n.onDrag,w=n.onPress,v=n.onRelease,S=n.onRight,T=n.onLeft,E=n.onUp,x=n.onDown,b=n.onChangeX,C=n.onChangeY,F=n.onChange,I=n.onToggleX,D=n.onToggleY,P=n.onHover,N=n.onHoverEnd,V=n.onMove,O=n.ignoreCheck,Z=n.isNormalizer,H=n.onGestureStart,R=n.onGestureEnd,Y=n.onWheel,ft=n.onEnable,yt=n.onDisable,Et=n.onClick,Nt=n.scrollSpeed,Lt=n.capture,W=n.allowClicks,Q=n.lockAxis,ut=n.onLockAxis;this.target=a=ni(a)||Rs,this.vars=n,f&&(f=Un.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,Nt=Nt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(wi.getComputedStyle(Ma).lineHeight)||22);var Rt,Tt,Ut,zt,et,ct,pt,B=this,j=0,Ot=0,Ct=n.passive||!h&&n.passive!==!1,Ft=Wr(a,Gn),Jt=Wr(a,gn),z=Ft(),re=Jt(),Xt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&er[0]==="pointerdown",L=lc(a),y=a.ownerDocument||Cs,X=[0,0,0],q=[0,0,0],it=0,wt=function(){return it=ac()},Mt=function(ht,Yt){return(B.event=ht)&&f&&RE(ht.target,f)||Yt&&Xt&&ht.pointerType!=="touch"||O&&O(ht,Yt)},ot=function(){B._vx.reset(),B._vy.reset(),Tt.pause(),d&&d(B)},lt=function(){var ht=B.deltaX=X_(X),Yt=B.deltaY=X_(q),vt=Math.abs(ht)>=i,rt=Math.abs(Yt)>=i;F&&(vt||rt)&&F(B,ht,Yt,X,q),vt&&(S&&B.deltaX>0&&S(B),T&&B.deltaX<0&&T(B),b&&b(B),I&&B.deltaX<0!=j<0&&I(B),j=B.deltaX,X[0]=X[1]=X[2]=0),rt&&(x&&B.deltaY>0&&x(B),E&&B.deltaY<0&&E(B),C&&C(B),D&&B.deltaY<0!=Ot<0&&D(B),Ot=B.deltaY,q[0]=q[1]=q[2]=0),(zt||Ut)&&(V&&V(B),Ut&&(m&&Ut===1&&m(B),M&&M(B),Ut=0),zt=!1),ct&&!(ct=!1)&&ut&&ut(B),et&&(Y(B),et=!1),Rt=0},Pt=function(ht,Yt,vt){X[vt]+=ht,q[vt]+=Yt,B._vx.update(ht),B._vy.update(Yt),c?Rt||(Rt=requestAnimationFrame(lt)):lt()},Vt=function(ht,Yt){Q&&!pt&&(B.axis=pt=Math.abs(ht)>Math.abs(Yt)?"x":"y",ct=!0),pt!=="y"&&(X[2]+=ht,B._vx.update(ht,!0)),pt!=="x"&&(q[2]+=Yt,B._vy.update(Yt,!0)),c?Rt||(Rt=requestAnimationFrame(lt)):lt()},At=function(ht){if(!Mt(ht,1)){ht=oc(ht,h);var Yt=ht.clientX,vt=ht.clientY,rt=Yt-B.x,at=vt-B.y,kt=B.isDragging;B.x=Yt,B.y=vt,(kt||(rt||at)&&(Math.abs(B.startX-Yt)>=s||Math.abs(B.startY-vt)>=s))&&(Ut||(Ut=kt?2:1),kt||(B.isDragging=!0),Vt(rt,at))}},tt=B.onPress=function(St){Mt(St,1)||St&&St.button||(B.axis=pt=null,Tt.pause(),B.isPressed=!0,St=oc(St),j=Ot=0,B.startX=B.x=St.clientX,B.startY=B.y=St.clientY,B._vx.reset(),B._vy.reset(),ei(Z?a:y,er[1],At,Ct,!0),B.deltaX=B.deltaY=0,w&&w(B))},nt=B.onRelease=function(St){if(!Mt(St,1)){ti(Z?a:y,er[1],At,!0);var ht=!isNaN(B.y-B.startY),Yt=B.isDragging,vt=Yt&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),rt=oc(St);!vt&&ht&&(B._vx.reset(),B._vy.reset(),h&&W&&Un.delayedCall(.08,function(){if(ac()-it>300&&!St.defaultPrevented){if(St.target.click)St.target.click();else if(y.createEvent){var at=y.createEvent("MouseEvents");at.initMouseEvent("click",!0,!0,wi,1,rt.screenX,rt.screenY,rt.clientX,rt.clientY,!1,!1,!1,!1,0,null),St.target.dispatchEvent(at)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,d&&Yt&&!Z&&Tt.restart(!0),Ut&&lt(),g&&Yt&&g(B),v&&v(B,vt)}},bt=function(ht){return ht.touches&&ht.touches.length>1&&(B.isGesturing=!0)&&H(ht,B.isDragging)},It=function(){return(B.isGesturing=!1)||R(B)},U=function(ht){if(!Mt(ht)){var Yt=Ft(),vt=Jt();Pt((Yt-z)*Nt,(vt-re)*Nt,1),z=Yt,re=vt,d&&Tt.restart(!0)}},_t=function(ht){if(!Mt(ht)){ht=oc(ht,h),Y&&(et=!0);var Yt=(ht.deltaMode===1?l:ht.deltaMode===2?wi.innerHeight:1)*p;Pt(ht.deltaX*Yt,ht.deltaY*Yt,0),d&&!Z&&Tt.restart(!0)}},st=function(ht){if(!Mt(ht)){var Yt=ht.clientX,vt=ht.clientY,rt=Yt-B.x,at=vt-B.y;B.x=Yt,B.y=vt,zt=!0,d&&Tt.restart(!0),(rt||at)&&Vt(rt,at)}},gt=function(ht){B.event=ht,P(B)},xt=function(ht){B.event=ht,N(B)},mt=function(ht){return Mt(ht)||oc(ht,h)&&Et(B)};Tt=B._dc=Un.delayedCall(u||.25,ot).pause(),B.deltaX=B.deltaY=0,B._vx=of(0,50,!0),B._vy=of(0,50,!0),B.scrollX=Ft,B.scrollY=Jt,B.isDragging=B.isGesturing=B.isPressed=!1,Z_(this),B.enable=function(St){return B.isEnabled||(ei(L?y:a,"scroll",Zp),o.indexOf("scroll")>=0&&ei(L?y:a,"scroll",U,Ct,Lt),o.indexOf("wheel")>=0&&ei(a,"wheel",_t,Ct,Lt),(o.indexOf("touch")>=0&&Y_||o.indexOf("pointer")>=0)&&(ei(a,er[0],tt,Ct,Lt),ei(y,er[2],nt),ei(y,er[3],nt),W&&ei(a,"click",wt,!0,!0),Et&&ei(a,"click",mt),H&&ei(y,"gesturestart",bt),R&&ei(y,"gestureend",It),P&&ei(a,no+"enter",gt),N&&ei(a,no+"leave",xt),V&&ei(a,no+"move",st)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=zt=Ut=!1,B._vx.reset(),B._vy.reset(),z=Ft(),re=Jt(),St&&St.type&&tt(St),ft&&ft(B)),B},B.disable=function(){B.isEnabled&&(Sa.filter(function(St){return St!==B&&lc(St.target)}).length||ti(L?y:a,"scroll",Zp),B.isPressed&&(B._vx.reset(),B._vy.reset(),ti(Z?a:y,er[1],At,!0)),ti(L?y:a,"scroll",U,Lt),ti(a,"wheel",_t,Lt),ti(a,er[0],tt,Lt),ti(y,er[2],nt),ti(y,er[3],nt),ti(a,"click",wt,!0),ti(a,"click",mt),ti(y,"gesturestart",bt),ti(y,"gestureend",It),ti(a,no+"enter",gt),ti(a,no+"leave",xt),ti(a,no+"move",st),B.isEnabled=B.isPressed=B.isDragging=!1,yt&&yt(B))},B.kill=B.revert=function(){B.disable();var St=Sa.indexOf(B);St>=0&&Sa.splice(St,1),Gr===B&&(Gr=0)},Sa.push(B),Z&&lc(a)&&(Gr=B),B.enable(_)},EE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();sn.version="3.15.0";sn.create=function(r){return new sn(r)};sn.register=Q_;sn.getAll=function(){return Sa.slice()};sn.getById=function(r){return Sa.filter(function(t){return t.vars.id===r})[0]};J_()&&Un.registerPlugin(sn);var qt,Aa,me,Le,Ci,Re,lm,Mf,Mc,mc,hc,af,Wn,wf,em,ri,j_,tv,Ca,gv,Jp,_v,ii,nm,vv,xv,Ps,im,cm,Ra,hm,gc,rm,$p,lf=1,Xn=Date.now,Kp=Xn(),ki=0,uc=0,ev=function(t,e,n){var i=Ai(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},nv=function(t,e){return e&&(!Ai(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},PE=function r(){return uc&&requestAnimationFrame(r)},iv=function(){return wf=1},rv=function(){return wf=0},br=function(t){return t},fc=function(t){return Math.round(t*1e5)/1e5||0},yv=function(){return typeof window!="undefined"},Sv=function(){return qt||yv()&&(qt=window.gsap)&&qt.registerPlugin&&qt},lo=function(t){return!!~lm.indexOf(t)},Mv=function(t){return(t==="Height"?hm:me["inner"+t])||Ci["client"+t]||Re["client"+t]},bv=function(t){return Xr(t,"getBoundingClientRect")||(lo(t)?function(){return Sf.width=me.innerWidth,Sf.height=hm,Sf}:function(){return Yr(t)})},IE=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Xr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Mv(s):t["client"+s])||0}},LE=function(t,e){return!e||~nr.indexOf(t)?bv(t):function(){return Sf}},Tr=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Xr(t,n))?o()-bv(t)()[s]:lo(t)?(Ci[n]||Re[n])-Mv(i):t[n]-t["offset"+i])},cf=function(t,e){for(var n=0;n<Ca.length;n+=3)(!e||~e.indexOf(Ca[n+1]))&&t(Ca[n],Ca[n+1],Ca[n+2])},Ai=function(t){return typeof t=="string"},Yn=function(t){return typeof t=="function"},dc=function(t){return typeof t=="number"},io=function(t){return typeof t=="object"},cc=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ta=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},wa=Math.abs,Tv="left",wv="top",um="right",fm="bottom",so="width",oo="height",_c="Right",vc="Left",xc="Top",yc="Bottom",_n="padding",Bi="margin",Ia="Width",dm="Height",wn="px",zi=function(t){return me.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},DE=function(t){var e=zi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},sv=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Yr=function(t,e){var n=e&&zi(t)[em]!=="matrix(1, 0, 0, 1, 0, 0)"&&qt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},bf=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Ev=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},NE=function(t){return function(e){return qt.utils.snap(Ev(t),e)}},pm=function(t){var e=qt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},UE=function(t){return function(e,n){return pm(Ev(t))(e,n.direction)}},hf=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},In=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Pn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},uf=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},ov={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ff={toggleActions:"play",anticipatePin:0},Tf={top:0,left:0,center:.5,bottom:1,right:1},_f=function(t,e){if(Ai(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Tf?Tf[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},df=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,p=Le.createElement("div"),_=lo(n)||Xr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?Re:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,w=M?c:h,v="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===gn?um:fm)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=M,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=v,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],vf(p,0,i,M),p},vf=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ia]=1,s["border"+a+Ia]=0,s[n.p]=e+"px",qt.set(t,s)},de=[],sm={},bc,av=function(){return Xn()-ki>34&&(bc||(bc=requestAnimationFrame(qr)))},Ea=function(){(!ii||!ii.isPressed||ii.startX>Re.clientWidth)&&(fe.cache++,ii?bc||(bc=requestAnimationFrame(qr)):qr(),ki||ho("scrollStart"),ki=Xn())},Qp=function(){xv=me.innerWidth,vv=me.innerHeight},pc=function(t){fe.cache++,(t===!0||!Wn&&!_v&&!Le.fullscreenElement&&!Le.webkitFullscreenElement&&(!nm||xv!==me.innerWidth||Math.abs(me.innerHeight-vv)>me.innerHeight*.25))&&Mf.restart(!0)},co={},FE=[],Av=function r(){return Pn(se,"scrollEnd",r)||ro(!0)},ho=function(t){return co[t]&&co[t].map(function(e){return e()})||FE},Ei=[],Cv=function(t){for(var e=0;e<Ei.length;e+=5)(!t||Ei[e+4]&&Ei[e+4].query===t)&&(Ei[e].style.cssText=Ei[e+1],Ei[e].getBBox&&Ei[e].setAttribute("transform",Ei[e+2]||""),Ei[e+3].uncache=1)},Rv=function(){return fe.forEach(function(t){return Yn(t)&&++t.cacheID&&(t.rec=t())})},mm=function(t,e){var n;for(ri=0;ri<de.length;ri++)n=de[ri],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));gc=!0,e&&Cv(e),e||ho("revert")},Pv=function(t,e){fe.cache++,(e||!si)&&fe.forEach(function(n){return Yn(n)&&n.cacheID++&&(n.rec=0)}),Ai(t)&&(me.history.scrollRestoration=cm=t)},si,ao=0,lv,OE=function(){if(lv!==ao){var t=lv=ao;requestAnimationFrame(function(){return t===ao&&ro(!0)})}},Iv=function(){Re.appendChild(Ra),hm=!ii&&Ra.offsetHeight||me.innerHeight,Re.removeChild(Ra)},cv=function(t){return Mc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ro=function(t,e){if(Ci=Le.documentElement,Re=Le.body,lm=[me,Le,Ci,Re],ki&&!t&&!gc){In(se,"scrollEnd",Av);return}Iv(),si=se.isRefreshing=!0,gc||Rv();var n=ho("refreshInit");gv&&se.sort(),e||mm(),fe.forEach(function(i){Yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),de.slice(0).forEach(function(i){return i.refresh()}),gc=!1,de.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),rm=1,cv(!0),de.forEach(function(i){var s=Tr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),cv(!1),rm=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),fe.forEach(function(i){Yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Pv(cm,1),Mf.pause(),ao++,si=2,qr(2),de.forEach(function(i){return Yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),si=se.isRefreshing=!1,ho("refresh")},om=0,xf=1,Sc,qr=function(t){if(t===2||!si&&!gc){se.isUpdating=!0,Sc&&Sc.update(0);var e=de.length,n=Xn(),i=n-Kp>=50,s=e&&de[0].scroll();if(xf=om>s?-1:1,si||(om=s),i&&(ki&&!wf&&n-ki>200&&(ki=0,ho("scrollEnd")),hc=Kp,Kp=n),xf<0){for(ri=e;ri-- >0;)de[ri]&&de[ri].update(0,i);xf=1}else for(ri=0;ri<e;ri++)de[ri]&&de[ri].update(0,i);se.isUpdating=!1}bc=0},am=[Tv,wv,fm,um,Bi+yc,Bi+_c,Bi+xc,Bi+vc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yf=am.concat([so,oo,"boxSizing","max"+Ia,"max"+dm,"position",Bi,_n,_n+xc,_n+_c,_n+yc,_n+vc]),BE=function(t,e,n){Pa(n);var i=t._gsap;if(i.spacerIsNative)Pa(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},jp=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=am.length,o=e.style,a=t.style,l;s--;)l=am[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[fm]=a[um]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[so]=bf(t,Gn)+wn,o[oo]=bf(t,gn)+wn,o[_n]=a[Bi]=a[wv]=a[Tv]="0",Pa(i),a[so]=a["max"+Ia]=n[so],a[oo]=a["max"+dm]=n[oo],a[_n]=n[_n],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},zE=/([A-Z])/g,Pa=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||qt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(zE,"-$1").toLowerCase())}},pf=function(t){for(var e=yf.length,n=t.style,i=[],s=0;s<e;s++)i.push(yf[s],n[yf[s]]);return i.t=t,i},kE=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Sf={left:0,top:0},hv=function(t,e,n,i,s,o,a,l,c,h,d,u,f,p){Yn(t)&&(t=t(l)),Ai(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?_f("0"+t.substr(3),n):0));var _=f?f.time():0,m,g,M;if(f&&f.seek(0),isNaN(t)||(t=+t),dc(t))f&&(t=qt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&vf(a,n,i,!0);else{Yn(e)&&(e=e(l));var w=(t||"0").split(" "),v,S,T,E;M=ni(e,l)||Re,v=Yr(M)||{},(!v||!v.left&&!v.top)&&zi(M).display==="none"&&(E=M.style.display,M.style.display="block",v=Yr(M),E?M.style.display=E:M.style.removeProperty("display")),S=_f(w[0],v[i.d]),T=_f(w[1]||"0",n),t=v[i.p]-c[i.p]-h+S+s-T,a&&vf(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var x=t+n,b=o._isStart;m="scroll"+i.d2,vf(o,x,i,b&&x>20||!b&&(d?Math.max(Re[m],Ci[m]):o.parentNode[m])<=x+1),d&&(c=Yr(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+wn))}return f&&M&&(m=Yr(M),f.seek(u),g=Yr(M),f._caScrollDist=m[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},HE=/(webkit|moz|length|cssText|inset)/i,uv=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Re){t._stOrig=s.cssText,a=zi(t);for(o in a)!+o&&!HE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;qt.core.getCache(t).uncache=1,e.appendChild(t)}},Lv=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},mf=function(t,e,n){var i={};i[e.p]="+="+n,qt.set(t,i)},fv=function(t,e){var n=Wr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||n();var _=Lv(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){fe.cache++,o.tween&&qr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=qt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},In(t,"wheel",n.wheelHandler),se.isTouch&&In(t,"touchmove",n.wheelHandler),s},se=(function(){function r(e,n){Aa||r.register(qt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),im(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!uc){this.update=this.refresh=this.kill=br;return}n=sv(Ai(n)||dc(n)||n.nodeType?{trigger:n}:n,ff);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,M=s.onSnapComplete,w=s.once,v=s.snap,S=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,x=s.fastScrollEnd,b=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Gn:gn,F=!d&&d!==0,I=ni(n.scroller||me),D=qt.core.getCache(I),P=lo(I),N=("pinType"in n?n.pinType:Xr(I,"pinType")||P&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=F&&n.toggleActions.split(" "),Z="markers"in n?n.markers:ff.markers,H=P?0:parseFloat(zi(I)["border"+C.p2+Ia])||0,R=this,Y=n.onRefreshInit&&function(){return n.onRefreshInit(R)},ft=IE(I,P,C),yt=LE(I,P),Et=0,Nt=0,Lt=0,W=Wr(I,C),Q,ut,Rt,Tt,Ut,zt,et,ct,pt,B,j,Ot,Ct,Ft,Jt,z,re,Xt,L,y,X,q,it,wt,Mt,ot,lt,Pt,Vt,At,tt,nt,bt,It,U,_t,st,gt,xt;if(R._startClamp=R._endClamp=!1,R._dir=C,m*=45,R.scroller=I,R.scroll=E?E.time.bind(E):W,Tt=W(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(gv=1,n.refreshPriority===-9999&&(Sc=R)),D.tweenScroll=D.tweenScroll||{top:fv(I,gn),left:fv(I,Gn)},R.tweenTo=Q=D.tweenScroll[C.p],R.scrubDuration=function(vt){bt=dc(vt)&&vt,bt?nt?nt.duration(vt):nt=qt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:bt,paused:!0,onComplete:function(){return g&&g(R)}}):(nt&&nt.progress(1).kill(),nt=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),At=0,l||(l=i.vars.id)),v&&((!io(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Re.style&&qt.set(P?[Re,Ci]:I,{scrollBehavior:"auto"}),fe.forEach(function(vt){return Yn(vt)&&vt.target===(P?Le.scrollingElement||Ci:I)&&(vt.smooth=!1)}),Rt=Yn(v.snapTo)?v.snapTo:v.snapTo==="labels"?NE(i):v.snapTo==="labelsDirectional"?UE(i):v.directional!==!1?function(vt,rt){return pm(v.snapTo)(vt,Xn()-Nt<500?0:rt.direction)}:qt.utils.snap(v.snapTo),It=v.duration||{min:.1,max:2},It=io(It)?mc(It.min,It.max):mc(It,It),U=qt.delayedCall(v.delay||bt/2||.1,function(){var vt=W(),rt=Xn()-Nt<500,at=Q.tween;if((rt||Math.abs(R.getVelocity())<10)&&!at&&!wf&&Et!==vt){var kt=(vt-zt)/Ft,ge=i&&!F?i.totalProgress():kt,te=rt?0:(ge-tt)/(Xn()-hc)*1e3||0,ye=qt.utils.clamp(-kt,1-kt,wa(te/2)*te/.185),We=kt+(v.inertia===!1?0:ye),Te,_e,ae=v,Xe=ae.onStart,we=ae.onInterrupt,on=ae.onComplete;if(Te=Rt(We,R),dc(Te)||(Te=We),_e=Math.max(0,Math.round(zt+Te*Ft)),vt<=et&&vt>=zt&&_e!==vt){if(at&&!at._initted&&at.data<=wa(_e-vt))return;v.inertia===!1&&(ye=Te-kt),Q(_e,{duration:It(wa(Math.max(wa(We-ge),wa(Te-ge))*.185/te/.05||0)),ease:v.ease||"power3",data:wa(_e-vt),onInterrupt:function(){return U.restart(!0)&&we&&Ta(R,we)},onComplete:function(){R.update(),Et=W(),i&&!F&&(nt?nt.resetTo("totalProgress",Te,i._tTime/i._tDur):i.progress(Te)),At=tt=i&&!F?i.totalProgress():R.progress,M&&M(R),on&&Ta(R,on)}},vt,ye*Ft,_e-vt-ye*Ft),Xe&&Ta(R,Xe,Q.tween)}}else R.isActive&&Et!==vt&&U.restart(!0)}).pause()),l&&(sm[l]=R),u=R.trigger=ni(u||f!==!0&&f),xt=u&&u._gsap&&u._gsap.stRevert,xt&&(xt=xt(R)),f=f===!0?u:ni(f),Ai(a)&&(a={targets:u,className:a}),f&&(p===!1||p===Bi||(p=!p&&f.parentNode&&f.parentNode.style&&zi(f.parentNode).display==="flex"?!1:_n),R.pin=f,ut=qt.core.getCache(f),ut.spacer?Jt=ut.pinState:(T&&(T=ni(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),ut.spacerIsNative=!!T,T&&(ut.spacerState=pf(T))),ut.spacer=Xt=T||Le.createElement("div"),Xt.classList.add("pin-spacer"),l&&Xt.classList.add("pin-spacer-"+l),ut.pinState=Jt=pf(f)),n.force3D!==!1&&qt.set(f,{force3D:!0}),R.spacer=Xt=ut.spacer,Vt=zi(f),wt=Vt[p+C.os2],y=qt.getProperty(f),X=qt.quickSetter(f,C.a,wn),jp(f,Xt,Vt),re=pf(f)),Z){Ot=io(Z)?sv(Z,ov):ov,B=df("scroller-start",l,I,C,Ot,0),j=df("scroller-end",l,I,C,Ot,0,B),L=B["offset"+C.op.d2];var mt=ni(Xr(I,"content")||I);ct=this.markerStart=df("start",l,mt,C,Ot,L,0,E),pt=this.markerEnd=df("end",l,mt,C,Ot,L,0,E),E&&(gt=qt.quickSetter([ct,pt],C.a,wn)),!N&&!(nr.length&&Xr(I,"fixedMarkers")===!0)&&(DE(P?Re:I),qt.set([B,j],{force3D:!0}),ot=qt.quickSetter(B,C.a,wn),Pt=qt.quickSetter(j,C.a,wn))}if(E){var St=E.vars.onUpdate,ht=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),St&&St.apply(E,ht||[])})}if(R.previous=function(){return de[de.indexOf(R)-1]},R.next=function(){return de[de.indexOf(R)+1]},R.revert=function(vt,rt){if(!rt)return R.kill(!0);var at=vt!==!1||!R.enabled,kt=Wn;at!==R.isReverted&&(at&&(_t=Math.max(W(),R.scroll.rec||0),Lt=R.progress,st=i&&i.progress()),ct&&[ct,pt,B,j].forEach(function(ge){return ge.style.display=at?"none":"block"}),at&&(Wn=R,R.update(at)),f&&(!S||!R.isActive)&&(at?BE(f,Xt,Jt):jp(f,Xt,zi(f),Mt)),at||R.update(at),Wn=kt,R.isReverted=at)},R.refresh=function(vt,rt,at,kt){if(!((Wn||!R.enabled)&&!rt)){if(f&&vt&&ki){In(r,"scrollEnd",Av);return}!si&&Y&&Y(R),Wn=R,Q.tween&&!at&&(Q.tween.kill(),Q.tween=0),nt&&nt.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Dt){return Dt.vars.immediateRender&&Dt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var ge=ft(),te=yt(),ye=E?E.duration():Tr(I,C),We=Ft<=.01||!Ft,Te=0,_e=kt||0,ae=io(at)?at.end:n.end,Xe=n.endTrigger||u,we=io(at)?at.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),on=R.pinnedContainer=n.pinnedContainer&&ni(n.pinnedContainer,R),cn=u&&Math.max(0,de.indexOf(R))||0,Ne=cn,Ue,Ye,hn,Hi,en,ze,En,ir,A,G,K,J,$;for(Z&&io(at)&&(J=qt.getProperty(B,C.p),$=qt.getProperty(j,C.p));Ne-- >0;)ze=de[Ne],ze.end||ze.refresh(0,1)||(Wn=R),En=ze.pin,En&&(En===u||En===f||En===on)&&!ze.isReverted&&(G||(G=[]),G.unshift(ze),ze.revert(!0,!0)),ze!==de[Ne]&&(cn--,Ne--);for(Yn(we)&&(we=we(R)),we=ev(we,"start",R),zt=hv(we,u,ge,C,W(),ct,B,R,te,H,N,ye,E,R._startClamp&&"_startClamp")||(f?-.001:0),Yn(ae)&&(ae=ae(R)),Ai(ae)&&!ae.indexOf("+=")&&(~ae.indexOf(" ")?ae=(Ai(we)?we.split(" ")[0]:"")+ae:(Te=_f(ae.substr(2),ge),ae=Ai(we)?we:(E?qt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,zt):zt)+Te,Xe=u)),ae=ev(ae,"end",R),et=Math.max(zt,hv(ae||(Xe?"100% 0":ye),Xe,ge,C,W()+Te,pt,j,R,te,H,N,ye,E,R._endClamp&&"_endClamp"))||-.001,Te=0,Ne=cn;Ne--;)ze=de[Ne]||{},En=ze.pin,En&&ze.start-ze._pinPush<=zt&&!E&&ze.end>0&&(Ue=ze.end-(R._startClamp?Math.max(0,ze.start):ze.start),(En===u&&ze.start-ze._pinPush<zt||En===on)&&isNaN(we)&&(Te+=Ue*(1-ze.progress)),En===f&&(_e+=Ue));if(zt+=Te,et+=Te,R._startClamp&&(R._startClamp+=Te),R._endClamp&&!si&&(R._endClamp=et||-.001,et=Math.min(et,Tr(I,C))),Ft=et-zt||(zt-=.01)&&.001,We&&(Lt=qt.utils.clamp(0,1,qt.utils.normalize(zt,et,_t))),R._pinPush=_e,ct&&Te&&(Ue={},Ue[C.a]="+="+Te,on&&(Ue[C.p]="-="+W()),qt.set([ct,pt],Ue)),f&&!(rm&&R.end>=Tr(I,C)))Ue=zi(f),Hi=C===gn,hn=W(),q=parseFloat(y(C.a))+_e,!ye&&et>1&&(K=(P?Le.scrollingElement||Ci:I).style,K={style:K,value:K["overflow"+C.a.toUpperCase()]},P&&zi(Re)["overflow"+C.a.toUpperCase()]!=="scroll"&&(K.style["overflow"+C.a.toUpperCase()]="scroll")),jp(f,Xt,Ue),re=pf(f),Ye=Yr(f,!0),ir=N&&Wr(I,Hi?Gn:gn)(),p?(Mt=[p+C.os2,Ft+_e+wn],Mt.t=Xt,Ne=p===_n?bf(f,C)+Ft+_e:0,Ne&&(Mt.push(C.d,Ne+wn),Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Ne+wn)),Pa(Mt),on&&de.forEach(function(Dt){Dt.pin===on&&Dt.vars.pinSpacing!==!1&&(Dt._subPinOffset=!0)}),N&&W(_t)):(Ne=bf(f,C),Ne&&Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Ne+wn)),N&&(en={top:Ye.top+(Hi?hn-zt:ir)+wn,left:Ye.left+(Hi?ir:hn-zt)+wn,boxSizing:"border-box",position:"fixed"},en[so]=en["max"+Ia]=Math.ceil(Ye.width)+wn,en[oo]=en["max"+dm]=Math.ceil(Ye.height)+wn,en[Bi]=en[Bi+xc]=en[Bi+_c]=en[Bi+yc]=en[Bi+vc]="0",en[_n]=Ue[_n],en[_n+xc]=Ue[_n+xc],en[_n+_c]=Ue[_n+_c],en[_n+yc]=Ue[_n+yc],en[_n+vc]=Ue[_n+vc],z=kE(Jt,en,S),si&&W(0)),i?(A=i._initted,Jp(1),i.render(i.duration(),!0,!0),it=y(C.a)-q+Ft+_e,lt=Math.abs(Ft-it)>1,N&&lt&&z.splice(z.length-2,2),i.render(0,!0,!0),A||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Jp(0)):it=Ft,K&&(K.value?K.style["overflow"+C.a.toUpperCase()]=K.value:K.style.removeProperty("overflow-"+C.a));else if(u&&W()&&!E)for(Ye=u.parentNode;Ye&&Ye!==Re;)Ye._pinOffset&&(zt-=Ye._pinOffset,et-=Ye._pinOffset),Ye=Ye.parentNode;G&&G.forEach(function(Dt){return Dt.revert(!1,!0)}),R.start=zt,R.end=et,Tt=Ut=si?_t:W(),!E&&!si&&(Tt<_t&&W(_t),R.scroll.rec=0),R.revert(!1,!0),Nt=Xn(),U&&(Et=-1,U.restart(!0)),Wn=0,i&&F&&(i._initted||st)&&i.progress()!==st&&i.progress(st||0,!0).render(i.time(),!0,!0),(We||Lt!==R.progress||E||_||i&&!i._initted)&&(i&&!F&&(i._initted||Lt||i.vars.immediateRender!==!1)&&i.totalProgress(E&&zt<-.001&&!Lt?qt.utils.normalize(zt,et,0):Lt,!0),R.progress=We||(Tt-zt)/Ft===Lt?0:Lt),f&&p&&(Xt._pinOffset=Math.round(R.progress*it)),nt&&nt.invalidate(),isNaN(J)||(J-=qt.getProperty(B,C.p),$-=qt.getProperty(j,C.p),mf(B,C,J),mf(ct,C,J-(kt||0)),mf(j,C,$),mf(pt,C,$-(kt||0))),We&&!si&&R.update(),h&&!si&&!Ct&&(Ct=!0,h(R),Ct=!1)}},R.getVelocity=function(){return(W()-Ut)/(Xn()-hc)*1e3||0},R.endAnimation=function(){cc(R.callbackAnimation),i&&(nt?nt.progress(1):i.paused()?F||cc(i,R.direction<0,1):cc(i,i.reversed()))},R.labelToScroll=function(vt){return i&&i.labels&&(zt||R.refresh()||zt)+i.labels[vt]/i.duration()*Ft||0},R.getTrailing=function(vt){var rt=de.indexOf(R),at=R.direction>0?de.slice(0,rt).reverse():de.slice(rt+1);return(Ai(vt)?at.filter(function(kt){return kt.vars.preventOverlaps===vt}):at).filter(function(kt){return R.direction>0?kt.end<=zt:kt.start>=et})},R.update=function(vt,rt,at){if(!(E&&!at&&!vt)){var kt=si===!0?_t:R.scroll(),ge=vt?0:(kt-zt)/Ft,te=ge<0?0:ge>1?1:ge||0,ye=R.progress,We,Te,_e,ae,Xe,we,on,cn;if(rt&&(Ut=Tt,Tt=E?W():kt,v&&(tt=At,At=i&&!F?i.totalProgress():te)),m&&f&&!Wn&&!lf&&ki&&(!te&&zt<kt+(kt-Ut)/(Xn()-hc)*m?te=1e-4:te===1&&et>kt+(kt-Ut)/(Xn()-hc)*m&&(te=.9999)),te!==ye&&R.enabled){if(We=R.isActive=!!te&&te<1,Te=!!ye&&ye<1,we=We!==Te,Xe=we||!!te!=!!ye,R.direction=te>ye?1:-1,R.progress=te,Xe&&!Wn&&(_e=te&&!ye?0:te===1?1:ye===1?2:3,F&&(ae=!we&&O[_e+1]!=="none"&&O[_e+1]||O[_e],cn=i&&(ae==="complete"||ae==="reset"||ae in i))),b&&(we||cn)&&(cn||d||!i)&&(Yn(b)?b(R):R.getTrailing(b).forEach(function(hn){return hn.endAnimation()})),F||(nt&&!Wn&&!lf?(nt._dp._time-nt._start!==nt._time&&nt.render(nt._dp._time-nt._start),nt.resetTo?nt.resetTo("totalProgress",te,i._tTime/i._tDur):(nt.vars.totalProgress=te,nt.invalidate().restart())):i&&i.totalProgress(te,!!(Wn&&(Nt||vt)))),f){if(vt&&p&&(Xt.style[p+C.os2]=wt),!N)X(fc(q+it*te));else if(Xe){if(on=!vt&&te>ye&&et+1>kt&&kt+1>=Tr(I,C),S)if(!vt&&(We||on)){var Ne=Yr(f,!0),Ue=kt-zt;uv(f,Re,Ne.top+(C===gn?Ue:0)+wn,Ne.left+(C===gn?0:Ue)+wn)}else uv(f,Xt);Pa(We||on?z:re),lt&&te<1&&We||X(q+(te===1&&!on?it:0))}}v&&!Q.tween&&!Wn&&!lf&&U.restart(!0),a&&(we||w&&te&&(te<1||!$p))&&Mc(a.targets).forEach(function(hn){return hn.classList[We||w?"add":"remove"](a.className)}),o&&!F&&!vt&&o(R),Xe&&!Wn?(F&&(cn&&(ae==="complete"?i.pause().totalProgress(1):ae==="reset"?i.restart(!0).pause():ae==="restart"?i.restart(!0):i[ae]()),o&&o(R)),(we||!$p)&&(c&&we&&Ta(R,c),V[_e]&&Ta(R,V[_e]),w&&(te===1?R.kill(!1,1):V[_e]=0),we||(_e=te===1?1:3,V[_e]&&Ta(R,V[_e]))),x&&!We&&Math.abs(R.getVelocity())>(dc(x)?x:2500)&&(cc(R.callbackAnimation),nt?nt.progress(1):cc(i,ae==="reverse"?1:!te,1))):F&&o&&!Wn&&o(R)}if(Pt){var Ye=E?kt/E.duration()*(E._caScrollDist||0):kt;ot(Ye+(B._isFlipped?1:0)),Pt(Ye)}gt&&gt(-kt/E.duration()*(E._caScrollDist||0))}},R.enable=function(vt,rt){R.enabled||(R.enabled=!0,In(I,"resize",pc),P||In(I,"scroll",Ea),Y&&In(r,"refreshInit",Y),vt!==!1&&(R.progress=Lt=0,Tt=Ut=Et=W()),rt!==!1&&R.refresh())},R.getTween=function(vt){return vt&&Q?Q.tween:nt},R.setPositions=function(vt,rt,at,kt){if(E){var ge=E.scrollTrigger,te=E.duration(),ye=ge.end-ge.start;vt=ge.start+ye*vt/te,rt=ge.start+ye*rt/te}R.refresh(!1,!1,{start:nv(vt,at&&!!R._startClamp),end:nv(rt,at&&!!R._endClamp)},kt),R.update()},R.adjustPinSpacing=function(vt){if(Mt&&vt){var rt=Mt.indexOf(C.d)+1;Mt[rt]=parseFloat(Mt[rt])+vt+wn,Mt[1]=parseFloat(Mt[1])+vt+wn,Pa(Mt)}},R.disable=function(vt,rt){if(vt!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,rt||nt&&nt.pause(),_t=0,ut&&(ut.uncache=1),Y&&Pn(r,"refreshInit",Y),U&&(U.pause(),Q.tween&&Q.tween.kill()&&(Q.tween=0)),!P)){for(var at=de.length;at--;)if(de[at].scroller===I&&de[at]!==R)return;Pn(I,"resize",pc),P||Pn(I,"scroll",Ea)}},R.kill=function(vt,rt){R.disable(vt,rt),nt&&!rt&&nt.kill(),l&&delete sm[l];var at=de.indexOf(R);at>=0&&de.splice(at,1),at===ri&&xf>0&&ri--,at=0,de.forEach(function(kt){return kt.scroller===R.scroller&&(at=1)}),at||si||(R.scroll.rec=0),i&&(i.scrollTrigger=null,vt&&i.revert({kill:!1}),rt||i.kill()),ct&&[ct,pt,B,j].forEach(function(kt){return kt.parentNode&&kt.parentNode.removeChild(kt)}),Sc===R&&(Sc=0),f&&(ut&&(ut.uncache=1),at=0,de.forEach(function(kt){return kt.pin===f&&at++}),at||(ut.spacer=0)),n.onKill&&n.onKill(R)},de.push(R),R.enable(!1,!1),xt&&xt(R),i&&i.add&&!Ft){var Yt=R.update;R.update=function(){R.update=Yt,fe.cache++,zt||et||R.refresh()},qt.delayedCall(.01,R.update),Ft=.01,zt=et=0}else R.refresh();f&&OE()},r.register=function(n){return Aa||(qt=n||Sv(),yv()&&window.document&&r.enable(),Aa=uc),Aa},r.defaults=function(n){if(n)for(var i in n)ff[i]=n[i];return ff},r.disable=function(n,i){uc=0,de.forEach(function(o){return o[i?"kill":"disable"](n)}),Pn(me,"wheel",Ea),Pn(Le,"scroll",Ea),clearInterval(af),Pn(Le,"touchcancel",br),Pn(Re,"touchstart",br),hf(Pn,Le,"pointerdown,touchstart,mousedown",iv),hf(Pn,Le,"pointerup,touchend,mouseup",rv),Mf.kill(),cf(Pn);for(var s=0;s<fe.length;s+=3)uf(Pn,fe[s],fe[s+1]),uf(Pn,fe[s],fe[s+2])},r.enable=function(){if(me=window,Le=document,Ci=Le.documentElement,Re=Le.body,qt){if(Mc=qt.utils.toArray,mc=qt.utils.clamp,im=qt.core.context||br,Jp=qt.core.suppressOverwrites||br,cm=me.history.scrollRestoration||"auto",om=me.pageYOffset||0,qt.core.globals("ScrollTrigger",r),Re){uc=1,Ra=document.createElement("div"),Ra.style.height="100vh",Ra.style.position="absolute",Iv(),PE(),sn.register(qt),r.isTouch=sn.isTouch,Ps=sn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nm=sn.isTouch===1,In(me,"wheel",Ea),lm=[me,Le,Ci,Re],qt.matchMedia?(r.matchMedia=function(h){var d=qt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},qt.addEventListener("matchMediaInit",function(){Rv(),mm()}),qt.addEventListener("matchMediaRevert",function(){return Cv()}),qt.addEventListener("matchMedia",function(){ro(0,1),ho("matchMedia")}),qt.matchMedia().add("(orientation: portrait)",function(){return Qp(),Qp})):console.warn("Requires GSAP 3.11.0 or later"),Qp(),In(Le,"scroll",Ea);var n=Re.hasAttribute("style"),i=Re.style,s=i.borderTopStyle,o=qt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Yr(Re),gn.m=Math.round(a.top+gn.sc())||0,Gn.m=Math.round(a.left+Gn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Re.setAttribute("style",""),Re.removeAttribute("style")),af=setInterval(av,250),qt.delayedCall(.5,function(){return lf=0}),In(Le,"touchcancel",br),In(Re,"touchstart",br),hf(In,Le,"pointerdown,touchstart,mousedown",iv),hf(In,Le,"pointerup,touchend,mouseup",rv),em=qt.utils.checkPrefix("transform"),yf.push(em),Aa=Xn(),Mf=qt.delayedCall(.2,ro).pause(),Ca=[Le,"visibilitychange",function(){var h=me.innerWidth,d=me.innerHeight;Le.hidden?(j_=h,tv=d):(j_!==h||tv!==d)&&pc()},Le,"DOMContentLoaded",ro,me,"load",ro,me,"resize",pc],cf(In),de.forEach(function(h){return h.enable(0,1)}),l=0;l<fe.length;l+=3)uf(Pn,fe[l],fe[l+1]),uf(Pn,fe[l],fe[l+2])}else if(Le){var c=function h(){r.enable(),Le.removeEventListener("DOMContentLoaded",h)};Le.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&($p=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(af)||(af=i)&&setInterval(av,i),"ignoreMobileResize"in n&&(nm=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(cf(Pn)||cf(In,n.autoRefreshEvents||"none"),_v=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=ni(n),o=fe.indexOf(s),a=lo(s);~o&&fe.splice(o,a?6:2),i&&(a?nr.unshift(me,i,Re,i,Ci,i):nr.unshift(s,i))},r.clearMatchMedia=function(n){de.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Ai(n)?ni(n):n).getBoundingClientRect(),a=o[s?so:oo]*i||0;return s?o.right-a>0&&o.left+a<me.innerWidth:o.bottom-a>0&&o.top+a<me.innerHeight},r.positionInViewport=function(n,i,s){Ai(n)&&(n=ni(n));var o=n.getBoundingClientRect(),a=o[s?so:oo],l=i==null?a/2:i in Tf?Tf[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/me.innerWidth:(o.top+l)/me.innerHeight},r.killAll=function(n){if(de.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=co.killAll||[];co={},i.forEach(function(s){return s()})}},r})();se.version="3.15.0";se.saveStyles=function(r){return r?Mc(r).forEach(function(t){if(t&&t.style){var e=Ei.indexOf(t);e>=0&&Ei.splice(e,5),Ei.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),qt.core.getCache(t),im())}}):Ei};se.revert=function(r,t){return mm(!r,t)};se.create=function(r,t){return new se(r,t)};se.refresh=function(r){return r?pc(!0):(Aa||se.register())&&ro(!0)};se.update=function(r){return++fe.cache&&qr(r===!0?2:0)};se.clearScrollMemory=Pv;se.maxScroll=function(r,t){return Tr(r,t?Gn:gn)};se.getScrollFunc=function(r,t){return Wr(ni(r),t?Gn:gn)};se.getById=function(r){return sm[r]};se.getAll=function(){return de.filter(function(r){return r.vars.id!=="ScrollSmoother"})};se.isScrolling=function(){return!!ki};se.snapDirectional=pm;se.addEventListener=function(r,t){var e=co[r]||(co[r]=[]);~e.indexOf(t)||e.push(t)};se.removeEventListener=function(r,t){var e=co[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};se.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=qt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Yn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Yn(s)&&(s=s(),In(se,"refresh",function(){return s=t.batchMax()})),Mc(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(se.create(c))}),e};var dv=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},tm=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(sn.isTouch?" pinch-zoom":""):"none",t===Ci&&r(Re,e)},gf={auto:1,scroll:1},VE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||qt.core.getCache(s),a=Xn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Re&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(gf[(l=zi(s)).overflowY]||gf[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!lo(s)&&(gf[(l=zi(s)).overflowY]||gf[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Dv=function(t,e,n,i){return sn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&VE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&In(Le,sn.eventTypes[0],mv,!1,!0)},onDisable:function(){return Pn(Le,sn.eventTypes[0],mv,!0)}})},GE=/(input|label|select|textarea)/i,pv,mv=function(t){var e=GE.test(t.target.tagName);(e||pv)&&(t._gsapAllow=!0,pv=e)},WE=function(t){io(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=ni(t.target)||Ci,h=qt.core.globals().ScrollSmoother,d=h&&h.get(),u=Ps&&(t.content&&ni(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=Wr(c,gn),p=Wr(c,Gn),_=1,m=(sn.isTouch&&me.visualViewport?me.visualViewport.scale*me.visualViewport.width:me.outerWidth)/me.innerWidth,g=0,M=Yn(i)?function(){return i(a)}:function(){return i||2.8},w,v,S=Dv(c,t.type,!0,s),T=function(){return v=!1},E=br,x=br,b=function(){l=Tr(c,gn),x=mc(Ps?1:0,l),n&&(E=mc(0,Tr(c,Gn))),w=ao},C=function(){u._gsap.y=fc(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},F=function(){if(v){requestAnimationFrame(T);var Z=fc(a.deltaY/2),H=x(f.v-Z);if(u&&H!==f.v+f.offset){f.offset=H-f.v;var R=fc((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=fe.cache,qr()}return!0}f.offset&&C(),v=!0},I,D,P,N,V=function(){b(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return u&&qt.set(u,{y:"+=0"}),t.ignoreCheck=function(O){return Ps&&O.type==="touchmove"&&F(O)||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){v=!1;var O=_;_=fc((me.visualViewport&&me.visualViewport.scale||1)/m),I.pause(),O!==_&&tm(c,_>1.01?!0:n?!1:"x"),D=p(),P=f(),b(),w=ao},t.onRelease=t.onGestureStart=function(O,Z){if(f.offset&&C(),!Z)N.restart(!0);else{fe.cache++;var H=M(),R,Y;n&&(R=p(),Y=R+H*.05*-O.velocityX/.227,H*=dv(p,R,Y,Tr(c,Gn)),I.vars.scrollX=E(Y)),R=f(),Y=R+H*.05*-O.velocityY/.227,H*=dv(f,R,Y,Tr(c,gn)),I.vars.scrollY=x(Y),I.invalidate().duration(H).play(.01),(Ps&&I.vars.scrollY>=l||R>=l-1)&&qt.to({},{onUpdate:V,duration:H})}o&&o(O)},t.onWheel=function(){I._ts&&I.pause(),Xn()-g>1e3&&(w=0,g=Xn())},t.onChange=function(O,Z,H,R,Y){if(ao!==w&&b(),Z&&n&&p(E(R[2]===Z?D+(O.startX-O.x):p()+Z-R[1])),H){f.offset&&C();var ft=Y[2]===H,yt=ft?P+O.startY-O.y:f()+H-Y[1],Et=x(yt);ft&&yt!==Et&&(P+=Et-yt),f(Et)}(H||Z)&&qr()},t.onEnable=function(){tm(c,n?!1:"x"),se.addEventListener("refresh",V),In(me,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),S.enable()},t.onDisable=function(){tm(c,!0),Pn(me,"resize",V),se.removeEventListener("refresh",V),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new sn(t),a.iOS=Ps,Ps&&!f()&&f(1),Ps&&qt.ticker.add(br),N=a._dc,I=qt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Lv(f,f(),function(){return I.pause()})},onUpdate:qr,onComplete:N.vars.onComplete}),a};se.sort=function(r){if(Yn(r))return de.sort(r);var t=me.pageYOffset||0;return se.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+me.innerHeight}),de.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};se.observe=function(r){return new sn(r)};se.normalizeScroll=function(r){if(typeof r=="undefined")return ii;if(r===!0&&ii)return ii.enable();if(r===!1){ii&&ii.kill(),ii=r;return}var t=r instanceof sn?r:WE(r);return ii&&ii.target===t.target&&ii.kill(),lo(t.target)&&(ii=t),t};se.core={_getVelocityProp:of,_inputObserver:Dv,_scrollers:fe,_proxies:nr,bridge:{ss:function(){ki||ho("scrollStart"),ki=Xn()},ref:function(){return Wn}}};Sv()&&qt.registerPlugin(se);var Tc,wc,Nv=typeof Symbol=="function"?Symbol():"_split",_m,XE=()=>_m||Af.register(window.gsap),Uv=typeof Intl!="undefined"&&"Segmenter"in Intl?new Intl.Segmenter:0,Ec=r=>r?typeof r=="string"?Ec(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...Ec(e)):t.push(e),t),[]):[r]:[],Fv=r=>Ec(r).filter(t=>t&&t.nodeType===1),vm=[],gm=function(){},YE={add:r=>r()},qE=/\s+/g,Ov=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Ef={left:0,top:0,width:0,height:0},ZE=(r,t)=>{for(;++t<r.length&&r[t]===Ef;);return r[t]||Ef},Bv=({element:r,html:t,ariaL:e,ariaH:n})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},zv=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||vm),n=r.length,i,s,o,a;if(e.size)for(;--n>-1;){s=r[n];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},kv=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),La=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),xm=(r,t,e)=>{let n=t[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let d=document.createElement(i),u=e.length+1;return n&&(d.className=n+(l?" "+n+u:"")),o&&d.style.setProperty("--"+r,u+""),s!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(n=n.replace("++","")),c.collection=e,c},JE=(r,t,e,n)=>{let i=xm("line",e,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},Hv=(r,t,e,n,i,s,o,a,l,c)=>{var h;let d=Array.from(r.childNodes),u=0,{wordDelimiter:f,reduceWhiteSpace:p=!0,prepareText:_}=t,m=r.getBoundingClientRect(),g=m,M=!p&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",w=0,v=e.collection,S,T,E,x,b,C,F,I,D,P,N,V,O,Z,H,R,Y,ft;for(typeof f=="object"?(E=f.delimiter||f,T=f.replaceWith||""):T=f===""?"":f||" ",S=T!==" ";u<d.length;u++)if(x=d[u],x.nodeType===3){for(H=x.textContent||"",p?H=H.replace(qE," "):M&&(H=H.replace(/\n/g,T+`
`)),_&&(H=_(H,r)),x.textContent=H,b=T||E?H.split(E||T):H.match(a)||vm,Y=b[b.length-1],I=S?Y.slice(-1)===" ":!Y,Y||b.pop(),g=m,F=S?b[0].charAt(0)===" ":!b[0],F&&La(" ",r,x),b[0]||b.shift(),zv(b,l),s&&c||(x.textContent=""),D=1;D<=b.length;D++)if(R=b[D-1],!p&&M&&R.charAt(0)===`
`&&((h=x.previousSibling)==null||h.remove(),La(document.createElement("br"),r,x),R=R.slice(1)),!p&&R==="")La(T,r,x);else if(R===" ")r.insertBefore(document.createTextNode(" "),x);else{if(S&&R.charAt(0)===" "&&La(" ",r,x),w&&D===1&&!F&&v.indexOf(w.parentNode)>-1?(C=v[v.length-1],C.appendChild(document.createTextNode(n?"":R))):(C=e(n?"":R),La(C,r,x),w&&D===1&&!F&&C.insertBefore(w,C.firstChild)),n)for(N=Uv?zv([...Uv.segment(R)].map(yt=>yt.segment),l):R.match(a)||vm,ft=0;ft<N.length;ft++)C.appendChild(N[ft]===" "?document.createTextNode(" "):n(N[ft]));if(s&&c){if(H=x.textContent=H.substring(R.length+1,H.length),P=C.getBoundingClientRect(),P.top>g.top&&P.left<=g.left){for(V=r.cloneNode(),O=r.childNodes[0];O&&O!==C;)Z=O,O=O.nextSibling,V.appendChild(Z);r.parentNode.insertBefore(V,r),i&&kv(V)}g=P}(D<b.length||I)&&La(D>=b.length?" ":S&&R.slice(-1)===" "?" "+T:T,r,x)}r.removeChild(x),w=0}else x.nodeType===1&&(o&&o.indexOf(x)>-1?(v.indexOf(x.previousSibling)>-1&&v[v.length-1].appendChild(x),w=x):(Hv(x,t,e,n,i,s,o,a,l,!0),w=0),i&&kv(x))},Vv=class Gv{constructor(t,e){this.isSplit=!1,XE(),this.elements=Fv(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(o=>{var a;e.overwrite!==!1&&((a=o[Nv])==null||a._data.orig.filter(({element:l})=>l===o).forEach(Bv)),o[Nv]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver!="undefined"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},gm(this),this.split(e)}split(t){return(this._ctx||YE).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,f=d&&!u&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+Ov.source,"gu"):Ov,m=!!t.ignore&&Fv(t.ignore),{orig:g,animTime:M,obs:w}=this._data,v;(d||u||h)&&(this.elements.forEach((S,T)=>{g[T]={element:S,html:S.innerHTML,ariaL:S.getAttribute("aria-label"),ariaH:S.getAttribute("aria-hidden")},n==="auto"?S.setAttribute("aria-label",(S.textContent||"").trim()):n==="hidden"&&S.setAttribute("aria-hidden","true");let E=[],x=[],b=[],C=d?xm("char",t,E):null,F=xm("word",t,x),I,D,P,N;if(Hv(S,t,F,C,f,i&&(h||f),m,_,p,!1),h){let V=Ec(S.childNodes),O=JE(S,V,t,b),Z,H=[],R=0,Y=V.map(Et=>Et.nodeType===1?Et.getBoundingClientRect():Ef),ft=Ef,yt;for(I=0;I<V.length;I++)Z=V[I],Z.nodeType===1&&(Z.nodeName==="BR"?((!I||V[I-1].nodeName!=="BR")&&(H.push(Z),O(R,I+1)),R=I+1,ft=ZE(Y,I)):(yt=Y[I],I&&yt.top>ft.top&&yt.left<ft.left+ft.width-1&&(O(R,I),R=I),ft=yt));R<I&&O(R,I),H.forEach(Et=>{var Nt;return(Nt=Et.parentNode)==null?void 0:Nt.removeChild(Et)})}if(!u){for(I=0;I<x.length;I++)if(D=x[I],d||!D.nextSibling||D.nextSibling.nodeType!==3)if(s&&!h){for(P=document.createElement("span"),P.style.whiteSpace="nowrap";D.firstChild;)P.appendChild(D.firstChild);D.replaceWith(P)}else D.replaceWith(...D.childNodes);else N=D.nextSibling,N&&N.nodeType===3&&(N.textContent=(D.textContent||"")+(N.textContent||""),D.remove());x.length=0,S.normalize()}this.lines.push(...b),this.words.push(...x),this.chars.push(...E)}),c&&this[c]&&this.masks.push(...this[c].map(S=>{let T=S.cloneNode();return S.replaceWith(T),T.appendChild(S),S.className&&(T.className=S.className.trim().split(" ").map(E=>E+"-mask").join(" ")),T.style.overflow="clip",T}))),this.isSplit=!0,wc&&h&&a&&wc.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=M?v.totalTime(M):v),h&&a&&this.elements.forEach((S,T)=>{g[T].width=S.offsetWidth,w&&w.observe(S)})}),this}kill(){let{obs:t}=this._data;t&&t.disconnect(),wc==null||wc.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Bv),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new Gv(t,e)}static register(t){Tc=Tc||t||window.gsap,Tc&&(Ec=Tc.utils.toArray,gm=Tc.core.context||gm),!_m&&window.innerWidth>0&&(wc=document.fonts,_m=!0)}};Vv.version="3.15.0";var Af=Vv;var Wv="1.3.26";function qv(r,t,e){return Math.max(r,Math.min(t,e))}function $E(r,t,e){return(1-e)*r+e*t}function KE(r,t,e,n){return $E(r,t,1-Math.exp(-e*n))}function QE(r,t){return(r%t+t)%t}var jE=class{constructor(){Qt(this,"isRunning",!1);Qt(this,"value",0);Qt(this,"from",0);Qt(this,"to",0);Qt(this,"currentTime",0);Qt(this,"lerp");Qt(this,"duration");Qt(this,"easing");Qt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let n=qv(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=KE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function tA(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var eA=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Qt(this,"width",0);Qt(this,"height",0);Qt(this,"scrollHeight",0);Qt(this,"scrollWidth",0);Qt(this,"debouncedResize");Qt(this,"wrapperResizeObserver");Qt(this,"contentResizeObserver");Qt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Qt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Qt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=tA(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Zv=class{constructor(){Qt(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},nA=100/6,Is={passive:!1};function Xv(r,t){return r===1?nA:r===2?t:1}var iA=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Qt(this,"touchStart",{x:0,y:0});Qt(this,"lastDelta",{x:0,y:0});Qt(this,"window",{width:0,height:0});Qt(this,"emitter",new Zv);Qt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Qt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Qt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Qt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Xv(n,this.window.width),s=Xv(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Qt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Is),this.element.addEventListener("touchstart",this.onTouchStart,Is),this.element.addEventListener("touchmove",this.onTouchMove,Is),this.element.addEventListener("touchend",this.onTouchEnd,Is)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Is),this.element.removeEventListener("touchstart",this.onTouchStart,Is),this.element.removeEventListener("touchmove",this.onTouchMove,Is),this.element.removeEventListener("touchend",this.onTouchEnd,Is)}},Yv=r=>Math.min(1,1.001-2**(-10*r)),Jv=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:M=!0,autoRaf:w=!1,anchors:v=!1,autoToggle:S=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:x=E,stopInertiaOnNavigate:b=!1,respectReducedMotion:C=!0}={}){Qt(this,"_isScrolling",!1);Qt(this,"_isStopped",!1);Qt(this,"_isLocked",!1);Qt(this,"_preventNextNativeScrollEvent",!1);Qt(this,"_resetVelocityTimeout",null);Qt(this,"_rafId",null);Qt(this,"_isDraggingSelection",!1);Qt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Qt(this,"isTouching");Qt(this,"isIos");Qt(this,"time",0);Qt(this,"userData",{});Qt(this,"lastVelocity",0);Qt(this,"velocity",0);Qt(this,"direction",0);Qt(this,"options");Qt(this,"targetScroll");Qt(this,"animatedScroll");Qt(this,"animate",new jE);Qt(this,"emitter",new Zv);Qt(this,"dimensions");Qt(this,"virtualScroll");Qt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Qt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Qt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Qt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Qt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Qt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>{var _,m,g,M,w;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((_=p.hasAttribute)==null?void 0:_.call(p,"data-lenis-prevent"))||h==="vertical"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-vertical"))||h==="horizontal"&&((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent-horizontal"))||i&&((M=p.hasAttribute)==null?void 0:M.call(p,"data-lenis-prevent-touch"))||s&&((w=p.hasAttribute)==null?void 0:w.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Qt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Qt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Wv,window.lenis||(window.lenis={}),window.lenis.version=Wv,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Yv:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:M,autoRaf:w,anchors:v,autoToggle:S,allowNestedScroll:T,naiveDimensions:x,stopInertiaOnNavigate:b,respectReducedMotion:C},this.dimensions=new eA(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new iA(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=r.targetTouches[0])!=null?c:r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&(u!=null&&u.nodeType)&&(p=u),p){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),M=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(w)?0:w)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=qv(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Yv:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){var T;let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,d,u,f,p;if(n-((T=i.time)!=null?T:0)>2e3){i.time=Date.now();let E=window.getComputedStyle(r);if(i.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),h=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,a=d>f,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,M,w,v,S;if(_==="horizontal")m=Math.round(r.scrollLeft),g=d-f,M=t,w=s,v=a,S=c;else if(_==="vertical")m=Math.round(r.scrollTop),g=u-p,M=e,w=o,v=l,S=h;else return!1;return!S&&(m>=g||m<=0)?!0:(M>0?m<g:m>0)&&w&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let r=this.options.wrapper;return this.isHorizontal?(t=r.scrollX)!=null?t:r.scrollLeft:(e=r.scrollY)!=null?e:r.scrollTop}get scroll(){return this.options.infinite?QE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};Pe.registerPlugin(se,Af);var Ls=(r,t=document)=>t.querySelector(r),Zr=(r,t=document)=>Array.from(t.querySelectorAll(r)),rA=Pe.utils.clamp(0,1);function $v({hero3d:r=null,reduceMotion:t=!1,touch:e=!1,onLight:n=()=>{}}={}){document.documentElement.classList.add("gsap-on");let i=u=>e?"blur(0px)":`blur(${u}px)`,s=null;t||(s=new Jv({lerp:.085,wheelMultiplier:.9}),s.on("scroll",se.update),Pe.ticker.add(u=>s.raf(u*1e3)),Pe.ticker.lagSmoothing(0),s.stop());let o=Ls("#hero");Pe.timeline({scrollTrigger:{trigger:o,start:"top top",end:"bottom top",scrub:!0,onUpdate:u=>r&&r.setProgress(u.progress),onLeave:()=>r&&r.setActive(!1),onEnterBack:()=>r&&r.setActive(!0)}}).to("#heroContent",{yPercent:-16,opacity:0,filter:i(10),ease:"none"},0).to(".scroll-cue",{opacity:0,ease:"none",duration:.25},0);let a=Ls("#intro"),l=Zr(".w",a);se.create({trigger:a,start:"top bottom",end:"bottom bottom",scrub:!0,onUpdate:u=>{let f=Math.round(rA((u.progress-.25)/.6)*l.length);l.forEach((p,_)=>p.classList.toggle("on",_<f)),a.classList.toggle("is-done",f>=l.length)}}),se.create({trigger:"#scratch",start:"top 55%",onEnter:()=>n(!0),onLeaveBack:()=>n(!1)}),Zr('[data-reveal="write"]').forEach(u=>{Pe.fromTo(u,{clipPath:"inset(-25% 100% -25% 0%)",y:10},{clipPath:"inset(-25% -15% -25% -15%)",y:0,duration:1.9,ease:"power2.inOut",scrollTrigger:{trigger:u.parentElement,start:"top 85%",once:!0}})}),Zr(".body-text, .pair p, .event .where, .timeline p:last-child").forEach(u=>{u.removeAttribute("data-reveal"),Af.create(u,{type:"lines",mask:"lines",linesClass:"line",autoSplit:!0,onSplit:f=>Pe.from(f.lines,{yPercent:110,duration:1.1,ease:"power3.out",stagger:.08,scrollTrigger:{trigger:u,start:"top 90%",once:!0}})})}),Pe.from(Zr(".cd"),{rotationX:-95,transformOrigin:"50% 100%",opacity:0,y:20,duration:1.1,ease:"back.out(1.6)",stagger:.12,scrollTrigger:{trigger:".cd-panel",start:"top 80%",once:!0}}),se.create({trigger:".venue-map",start:"top 82%",once:!0,onEnter:()=>Ls(".venue-map").classList.add("is-live")}),se.batch('[data-reveal="up"]',{start:"top 90%",once:!0,onEnter:u=>Pe.fromTo(u,{y:42,opacity:0,filter:i(6)},{y:0,opacity:1,filter:"blur(0px)",duration:1.15,ease:"power3.out",stagger:.11,overwrite:!0})}),se.batch('[data-reveal="zoom"]',{start:"top 88%",once:!0,onEnter:u=>Pe.fromTo(u,{scale:.82,opacity:0,filter:i(10)},{scale:1,opacity:1,filter:"blur(0px)",duration:1.3,ease:"expo.out",stagger:.1,overwrite:!0})}),Pe.set('[data-reveal="up"], [data-reveal="zoom"]',{opacity:0});let c=Ls("#timeline");c&&(c.classList.add("in"),Pe.fromTo(c,{"--rail":0},{"--rail":1,ease:"none",scrollTrigger:{trigger:c,start:"top 80%",end:"bottom 55%",scrub:!0}})),Zr(".icon").forEach(u=>{Pe.fromTo(u,{y:24},{y:-24,ease:"none",scrollTrigger:{trigger:u.parentElement,start:"top bottom",end:"bottom top",scrub:!0}})});let h=Ls("#photoInner");h&&h.offsetParent&&Pe.fromTo(h,{yPercent:-8},{yPercent:8,ease:"none",scrollTrigger:{trigger:".photo-frame",start:"top bottom",end:"bottom top",scrub:!0}}),Zr(".peony").forEach(u=>{let f=parseFloat(u.dataset.depth||"0.4");Pe.fromTo(u,{yPercent:18*f*4},{yPercent:-18*f*4,ease:"none",scrollTrigger:{trigger:u.parentElement,start:"top bottom",end:"bottom top",scrub:!0}}),Pe.to(u,{rotation:"+="+(f>.4?6:-5),duration:9+f*10,yoyo:!0,repeat:-1,ease:"sine.inOut"})});let d=Ls("#crest");if(d){let u=Zr("#wreath path, #wreath circle",d);u.forEach(f=>{let p=f.getTotalLength?f.getTotalLength():60;f.style.strokeDasharray=p,f.style.strokeDashoffset=p}),Pe.timeline({scrollTrigger:{trigger:d,start:"top 85%",once:!0}}).to(u,{strokeDashoffset:0,duration:2.2,ease:"power2.inOut",stagger:{each:.03,from:"start"}}).from(Zr(".crest-a",d),{opacity:0,scale:.6,transformOrigin:"50% 60%",duration:1.1,ease:"back.out(1.8)",stagger:.12},.9).from(Ls(".crest-amp",d),{opacity:0,y:8,duration:.8,ease:"power2.out"},1.5).from(Ls(".crest-date",d),{opacity:0,y:6,duration:.8,ease:"power2.out"},1.9)}return matchMedia("(hover: hover)").matches&&Zr(".btn").forEach(u=>{u.addEventListener("pointermove",f=>{let p=u.getBoundingClientRect();Pe.to(u,{x:(f.clientX-p.left-p.width/2)*.18,y:(f.clientY-p.top-p.height/2)*.3,duration:.4,ease:"power3.out"})}),u.addEventListener("pointerleave",()=>Pe.to(u,{x:0,y:0,duration:.6,ease:"elastic.out(1, .4)"}))}),se.refresh(),{start(){s&&s.start(),se.refresh()},lenis:s}}var Kv={blue:{petals:["#9fb4d6","#7f97c2","#c3d0e8","#6c82ad"],core:"#4f6490",leaf:"#8aa08b"},blush:{petals:["#e3b9c3","#d49aa9","#f0d3da","#bf7f92"],core:"#9b566d",leaf:"#9aa88f"}};function Jr(r,t){let e=parseInt(r.slice(1),16);return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`}function sA(r,t,e,n,i,s,o,a,l){r.save(),r.translate(t,e),r.rotate(s);let c=r.createRadialGradient(0,-n*.55,0,0,-n*.4,n*.9);c.addColorStop(0,Jr(o,a*.55)),c.addColorStop(.55,Jr(o,a)),c.addColorStop(1,Jr(o,0)),r.fillStyle=c,r.beginPath();let h=i*(.8+l()*.4);r.moveTo(0,0),r.bezierCurveTo(-h,-n*.25,-h*.9,-n*.95,0,-n),r.bezierCurveTo(h*.9,-n*.95,h,-n*.25,0,0),r.fill(),r.strokeStyle=Jr(o,a*.45),r.lineWidth=1.2,r.stroke(),r.restore()}function ym(r,t,e,n,i,s){let o=Ti(s),a=4;for(let c=a;c>=1;c--){let h=6+c*3,d=n*(.3+c*.19),u=o()*6.28;for(let f=0;f<h;f++){let p=u+f/h*Math.PI*2+(o()-.5)*.3,_=i.petals[(f+c)%i.petals.length];r.globalCompositeOperation="multiply",sA(r,t+Math.cos(p)*d*.2,e+Math.sin(p)*d*.2,d,d*.5,p+Math.PI/2,_,.5+o()*.3,o)}}r.globalCompositeOperation="multiply";let l=r.createRadialGradient(t,e,0,t,e,n*.32);l.addColorStop(0,Jr(i.core,.55)),l.addColorStop(1,Jr(i.core,0)),r.fillStyle=l,r.beginPath(),r.arc(t,e,n*.32,0,6.283),r.fill(),r.globalCompositeOperation="source-over"}function oA(r,t,e,n,i,s,o){r.save(),r.translate(t,e),r.rotate(i);let a=r.createLinearGradient(0,0,0,-n);a.addColorStop(0,Jr(s,.55)),a.addColorStop(1,Jr(s,.15)),r.fillStyle=a,r.beginPath(),r.moveTo(0,0),r.quadraticCurveTo(n*.32*(.8+o()*.4),-n*.5,0,-n),r.quadraticCurveTo(-n*.32*(.8+o()*.4),-n*.5,0,0),r.fill(),r.strokeStyle=Jr(s,.5),r.lineWidth=.9,r.beginPath(),r.moveTo(0,-n*.08),r.lineTo(0,-n*.9),r.stroke(),r.restore()}function aA(r="blue",t=520,e=3){let n=Kv[r]||Kv.blue,i=document.createElement("canvas");i.width=i.height=t;let s=i.getContext("2d"),o=Ti(e),a=t*.5,l=t*.5;for(let d=0;d<9;d++){let u=o()*Math.PI*2,f=t*(.18+o()*.22);oA(s,a+Math.cos(u)*f,l+Math.sin(u)*f,t*(.14+o()*.1),u+Math.PI/2+(o()-.5)*.6,n.leaf,o)}ym(s,a-t*.1,l+t*.04,t*.26,n,e+1),ym(s,a+t*.17,l-t*.14,t*.2,n,e+2),ym(s,a+t*.12,l+t*.24,t*.12,n,e+3);let c=document.createElement("canvas");c.width=c.height=t;let h=c.getContext("2d");return h.filter="blur(0.8px)",h.drawImage(i,0,0),c.toDataURL("image/png")}function Qv(){let r={},t=Math.round(520*Math.max(1,Math.min(window.devicePixelRatio||1,3)/2));document.querySelectorAll("[data-peony]").forEach((e,n)=>{let i=e.dataset.peony||"blue",s=i+n%2;r[s]||(r[s]=aA(i,t,11+n*7)),e.style.backgroundImage=`url("${r[s]}")`,e.classList.add("is-painted")})}function lA(){try{let r=document.createElement("canvas");return!!(r.getContext("webgl2")||r.getContext("webgl"))}catch{return!1}}window.GL={available:lA(),createEnvelope:B_,createHero:G_,initScroll:$v,mountPeonies:Qv,gsap:Pe};})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   *)
*/
