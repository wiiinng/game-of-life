!function(e){var t={};function i(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,i),u.l=!0,u.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)i.d(n,u,function(t){return e[t]}.bind(null,u));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";t.__esModule=!0;var n=i(1);n.renderTitle("Still Life",1);var u=i(3),l=i(4),r=i(5),f=i(6),o=i(7),a=i(8),c=i(9),s=i(10),d=i(11),_=i(12),h=i(13),v=i(14),M=i(15),p=i(16),m=i(17),y=i(18),g=i(19),b=i(20),E=i(21),B=i(22),L=i(23),T=i(24),C=i(25),w=i(26),x=i(27);n.renderTitle("Strict Still Life",2),[u.default,l.default,r.default,f.default,o.default,a.default,c.default,s.default,d.default,_.default,h.default,v.default,M.default,p.default,m.default,y.default,g.default,b.default,E.default,B.default,L.default,T.default,C.default,w.default,x.default].forEach((function(e){return n.renderLife(e.title,e.life)}));var I=i(28),N=i(29),O=i(30);n.renderTitle("Oscillator",1),[I.default,N.default,O.default].forEach((function(e){return n.renderLife(e.title,e.life)}));var S=i(31);n.renderTitle("Muttering moat",2),[S.default].forEach((function(e){return n.renderLife(e.title,e.life)}));var A=i(32);n.renderTitle("Eater",1),[A.default].forEach((function(e){return n.renderLife(e.title,e.life)}))},function(e,t,i){"use strict";t.__esModule=!0;var n=i(2),u=function(e,t){var i=document.createElement("H"+t);return i.textContent=e,i};t.renderTitle=function(e,t){var i=u(e,t);document.body.appendChild(i)},t.renderLife=function(e,t){var i=u(e,3),l=new n.GameOfLifeEngine(t),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=document.createElement("DIV");return i.className="container",e.forEach((function(e){return i.appendChild(e)})),i}(i,l.canvas);document.body.appendChild(r),l.startLife()}},function(e,t,i){"use strict";var n;t.__esModule=!0,function(e){e[e.WIDTH=16]="WIDTH",e[e.HEIGHT=16]="HEIGHT",e[e.MARGIN=2]="MARGIN",e.DEAD_COLOR="#F2F2F7",e.SURVIVE_COLOR="#1C1C1E"}(n||(n={}));var u={getCoordinateX:function(e){return(n.MARGIN+n.WIDTH)*e+n.MARGIN},getCoordinateY:function(e){return(n.MARGIN+n.HEIGHT)*e+n.MARGIN}},l=function(){function e(e){var t=document.createElement("canvas"),i=t.getContext("2d"),n=e.map((function(e){return e.length})).reduce((function(e,t){return Math.min(e,t)})),l=e.length;if(!i)throw"Failed to create context";t.width=u.getCoordinateX(n),t.height=u.getCoordinateY(l),this.x=n,this.y=l,this.life=e,this.canvas=t,this.context=i}return e.prototype.clear=function(){this.context.fillStyle="#AEAEB2",this.context.fillRect(0,0,this.canvas.width,this.canvas.height)},e.prototype.drawDot=function(e,t){this.context.fillRect(u.getCoordinateX(e),u.getCoordinateY(t),n.WIDTH,n.HEIGHT)},e.prototype.drawDots=function(){var e=this;this.clear(),this.life.forEach((function(t,i){t.forEach((function(t,u){e.context.fillStyle=t?n.SURVIVE_COLOR:n.DEAD_COLOR,e.drawDot(u,i)}))}))},e.prototype.isSurviveNextGeneration=function(e,t,i){var n=this.life,u=this.x-1,l=this.y-1,r=Number(0<t&&0<e&&n[t-1][e-1])+Number(0<t&&n[t-1][e])+Number(0<t&&e<u&&n[t-1][e+1])+Number(0<e&&n[t][e-1])+Number(e<u&&n[t][e+1])+Number(t<l&&0<e&&n[t+1][e-1])+Number(t<l&&n[t+1][e])+Number(t<l&&e<u&&n[t+1][e+1]);return i&&(2===r||3===r)||!i&&3===r?1:0},e.prototype.startLife=function(){var e=this;this.intervalKey||(this.intervalKey=window.setInterval((function(){e.drawDots();var t=e.life;e.life=t.map((function(t,i){return t.map((function(t,n){return e.isSurviveNextGeneration(n,i,t)}))}))}),500))},e.prototype.stopLife=function(){null!==this.intervalKey&&(clearInterval(this.intervalKey),this.intervalKey=null)},e}();t.GameOfLifeEngine=l},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"15 Bent Paperclip",life:[[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0,0],[0,0,1,0,1,1,1,0,0],[0,1,0,0,0,0,0,1,0],[0,0,1,1,1,1,0,1,0],[0,0,0,0,1,0,1,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"29-bit Still Life No.1",life:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,1,0,1,0,0],[0,1,1,0,1,0,1,0,1,0],[0,1,1,0,1,0,1,0,1,0],[0,0,0,0,1,0,1,1,0,0],[0,1,1,0,1,0,0,0,0,0],[0,1,1,0,1,0,0,0,0,0],[0,0,0,0,1,0,1,1,0,0],[0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"31.4",life:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,1,1,0,0,0],[0,1,1,1,1,0,1,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,1,0,1,0,1,0,1,1,0],[0,0,0,0,1,0,1,0,1,0,1,0,0,0,0],[0,0,0,0,0,1,1,0,1,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Aircraft Carrier",life:[[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,0,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Amphisbaena",life:[[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,0],[0,1,1,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,1,1,0],[0,0,0,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Aries Betwixt Two Blocks",life:[[0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,1,1,0,0],[0,1,0,0,1,0,1,0,0,1,0],[0,1,1,0,1,0,1,0,1,1,0],[0,0,0,0,1,0,1,0,0,0,0],[0,0,0,0,1,0,1,0,0,0,0],[0,1,1,0,1,0,1,0,1,1,0],[0,1,1,0,1,0,1,0,1,1,0],[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Asymmetric Amphisbaena",life:[[0,0,0,0,0,0,0],[0,0,0,1,1,0,0],[0,0,0,1,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,1,0],[0,0,1,1,1,0,0],[0,1,0,0,0,0,0],[0,0,1,0,0,0,0],[0,1,1,0,0,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Barge",life:[[0,0,0,0,0,0],[0,0,1,0,0,0],[0,1,0,1,0,0],[0,0,1,0,1,0],[0,0,0,1,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Barge Siamese Loaf",life:[[0,0,0,0,0,0,0],[0,0,0,1,1,0,0],[0,0,1,0,0,1,0],[0,1,0,1,0,1,0],[0,0,1,0,1,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Barge with Long Tail",life:[[0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,0],[0,0,1,0,1,0,0,0,0],[0,0,0,1,0,0,1,1,0],[0,0,0,0,1,1,0,1,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Barge with Very Long Tail",life:[[0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,0,0],[0,0,1,0,1,0,0,1,1,0],[0,0,0,1,0,0,1,0,1,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Bee Hat",life:[[0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0],[0,1,0,0,1,0,0,0],[0,0,1,1,0,1,0,0],[0,0,0,1,0,1,0,0],[0,1,0,1,0,1,1,0],[0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive",life:[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,0,1,1,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive at Beehive",life:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,1,0,1,0],[0,0,1,1,0,1,0,0],[0,1,0,0,1,0,0,0],[0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive at Claw",life:[[0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0],[0,0,0,1,0,0,1,0],[0,0,1,0,1,1,0,0],[0,0,0,1,0,0,0,0],[0,1,0,1,0,0,0,0],[0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive at Loaf",life:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,1,0,1,0],[0,0,1,1,0,1,0,0],[0,1,0,0,1,0,0,0],[0,1,0,1,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive on Cap",life:[[0,0,0,0,0,0,0],[0,0,1,1,0,0,0],[0,1,0,0,1,0,0],[0,1,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,1,1,0,0],[0,0,1,0,0,1,0],[0,0,0,1,1,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive on Dock",life:[[0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,1,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,1,0,1,0,1,0],[0,0,0,1,0,0,1,0,0],[0,1,0,1,0,0,0,0,0],[0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive on Table",life:[[0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,1,0,1,0,1,1,0],[0,1,0,1,0,1,0,0],[0,0,1,0,0,1,0,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive with Bend Tail",life:[[0,0,0,0,0,0,0],[0,0,1,1,0,0,0],[0,1,0,0,1,0,0],[0,0,1,1,0,1,0],[0,0,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,1,0,0,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive with Nine",life:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,1,0,1,0],[0,0,0,0,0,1,0,0],[0,0,1,1,1,0,0,0],[0,1,0,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive with Tail",life:[[0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0],[0,1,0,0,1,0,0,0],[0,0,1,1,0,1,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Block",life:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat",life:[[0,0,0,0,0],[0,1,1,0,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Loaf",life:[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,0,1,0,1,0],[0,0,0,1,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Lighthouse",life:[[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Toad",life:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,1,1,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Pulsar",life:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Blinker",life:[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"7x9 Eater",life:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}}]);