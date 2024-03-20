var Te=(i,n)=>()=>(n||i((n={exports:{}}).exports,n),n.exports);var _e=Te((Ve,q)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))v(s);new MutationObserver(s=>{for(const g of s)if(g.type==="childList")for(const A of g.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&v(A)}).observe(document,{childList:!0,subtree:!0});function h(s){const g={};return s.integrity&&(g.integrity=s.integrity),s.referrerPolicy&&(g.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?g.credentials="include":s.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function v(s){if(s.ep)return;s.ep=!0;const g=h(s);fetch(s.href,g)}})();const H=[{questionText:"What is the largest ocean on Earth?",options:["Atlantic Ocean","Indian Ocean","Arctic Ocean","Pacific Ocean"],correctAnswerIndex:3,explanation:"The Pacific Ocean is the largest ocean on Earth.",hint:"Think of where the sun sets."},{questionText:"Who wrote 'To Kill a Mockingbird'?",options:["Harper Lee","Mark Twain","F. Scott Fitzgerald","Ernest Hemingway"],correctAnswerIndex:0,explanation:"Harper Lee wrote 'To Kill a Mockingbird'.",hint:"The author's first name is the surname of a famous civil rights activist."},{questionText:"What is the chemical symbol for gold?",options:["Au","Ag","Fe","Hg"],correctAnswerIndex:0,explanation:"The chemical symbol for gold is Au.",hint:"Think of the periodic table."},{questionText:"Which country is known as the Land of the Rising Sun?",options:["China","Japan","India","South Korea"],correctAnswerIndex:1,explanation:"Japan is known as the Land of the Rising Sun.",hint:"It's an island nation in East Asia."},{questionText:"Who painted the Mona Lisa?",options:["Vincent van Gogh","Pablo Picasso","Leonardo da Vinci","Michelangelo"],correctAnswerIndex:2,explanation:"Leonardo da Vinci painted the Mona Lisa.",hint:"The artist was also an inventor and scientist."},{questionText:"What is the capital of Australia?",options:["Sydney","Melbourne","Canberra","Brisbane"],correctAnswerIndex:2,explanation:"Canberra is the capital of Australia.",hint:"It's an inland city."},{questionText:"Which planet is known as the 'Morning Star' or 'Evening Star'?",options:["Mercury","Venus","Mars","Saturn"],correctAnswerIndex:1,explanation:"Venus is known as the 'Morning Star' or 'Evening Star'.",hint:"It's the brightest planet in the night sky."},{questionText:"Who wrote the play 'Romeo and Juliet'?",options:["William Shakespeare","Jane Austen","Charles Dickens","Emily Brontë"],correctAnswerIndex:0,explanation:"William Shakespeare wrote the play 'Romeo and Juliet'.",hint:"Considered one of the greatest playwrights in history."},{questionText:"What is the chemical symbol for water?",options:["O","H2O","H2","H"],correctAnswerIndex:1,explanation:"The chemical symbol for water is H2O.",hint:"It consists of two elements."},{questionText:"What is the tallest mountain in the world?",options:["Mount Kilimanjaro","Mount Everest","Mount McKinley","Mount Fuji"],correctAnswerIndex:1,explanation:"Mount Everest is the tallest mountain in the world.",hint:"It's part of the Himalayas."}],Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+ElEQVR4nMWWz0vcUBDH3+XN6rL1JigtCJKtO4MK/Qv2GlxmrIdU++f0YkE827rqH9OLKUsPhf4Higf12Ard9aBMsojb3dj3kpAMDIQQMp/58eZ9jXG1IFywxB+B+ARQBkByA8ijxJNnGQBy33Zkz6zJK1OWQef9WyA+A5Q7IHlw8vTbU8BeO3/kN9G8RTkElHvnwFMgPLLEB2alO+eXNfbaQPIrd+Bpj5udnWWn4BblXdLT8oInbpEv7TpvumR+U3bw5xBN2lqaHX2lOwcoP11/9q+5g/APna9ZpT/0ySY/QFKJT9NHDf2mvQgAIP+eaAXoOffsZyGA1I/S6EG44LVkynKUP8nGTNdrxcGfZmF7V8t/UqT0BVqgVTg244ulHgCS2ADJbV0AFvnaAPKwxgr89QbIAskPQH4tKBNg3AK/ISy5ArG2oF8bAPJXoxquxgpExlDU0rVYOYCuYopa48tITosCeIMg9yeVUCqvqwFAHjY2equTgoT4oCoAi/x5tiQjiSsAODdB2JgpC5u0tWSRL3JO9P8zJ76ab/devySMjUpnVa+lB0e+sGvbG8bJgnARiL+VCHCeLcezLAgbql7z7Ijn025R9jN7bhxMyVVAeoHotyjHU0etkFHUUg2n+xuIv+tNllzlSZZ8re+A+ItF/vC04RzsEd/Vnu65lcfCAAAAAElFTkSuQmCC",_=(i,n)=>{const h=H[i.currentQuestionIndex];if(!n)throw new Error("HTML Element does not exist...");let v=`
    <h2 class="quiz-container__question">${h.questionText}</h2>
    <div class="quiz-container__options-body">
      <ul class="quiz-options">
        ${h.options.map((A,O)=>`
              <li data-index=${O} class="${i.questionAnswered?"disabled":""}">
                ${A}
              </li>`).join("")}

            <span class="quiz-container__hint-icon"> 
                <img src=${Se} />
            </span> 
      </ul>
    </div>      
    
  `;h.hint&&(v+=`
            <div class="quiz-container__hint-content">
                <p>${h.hint}</p>
            </div>
        `),n.innerHTML=v;const s=n.querySelector(".quiz-container__hint-icon"),g=n.querySelector(".quiz-container__hint-content");s&&g&&s.addEventListener("click",()=>{g.style.display=g.style.display==="block"?"none":"block"})},N=i=>{const n=document.querySelector(".quiz-progress");if(!n)throw new Error("HTML Element does not exist...");n.textContent=`${i.currentQuestionIndex+1} of ${H.length} Questions`},Ee=(i,n)=>{const h=H[n.currentQuestionIndex];document.querySelectorAll(".quiz-options li").forEach((s,g)=>{g===i?g===h.correctAnswerIndex?(s.classList.add("correct"),n.correctAnswers++):s.classList.add("incorrect"):s.style.pointerEvents="none"}),n.questionAnswered=!0},Ce=(i,n,h)=>{if(!h)throw new Error("HTMLElement does not exist...");const v=i.target;if(v.tagName==="LI"){const s=parseInt(v.dataset.index||"0");Ee(s,n),h.disabled=!1}};let I={currentQuestionIndex:0,correctAnswers:0,questionAnswered:!1};var q={};(function i(n,h,v,s){var g=!!(n.Worker&&n.Blob&&n.Promise&&n.OffscreenCanvas&&n.OffscreenCanvasRenderingContext2D&&n.HTMLCanvasElement&&n.HTMLCanvasElement.prototype.transferControlToOffscreen&&n.URL&&n.URL.createObjectURL),A=typeof Path2D=="function"&&typeof DOMMatrix=="function",O=function(){if(!n.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var t=r.transferToImageBitmap();try{e.createPattern(t,"no-repeat")}catch{return!1}return!0}();function F(){}function k(r){var e=h.exports.Promise,t=e!==void 0?e:n.Promise;return typeof t=="function"?new t(r):(r(F,F),null)}var L=function(r,e){return{transform:function(t){if(r)return t;if(e.has(t))return e.get(t);var o=new OffscreenCanvas(t.width,t.height),l=o.getContext("2d");return l.drawImage(t,0,0),e.set(t,o),o},clear:function(){e.clear()}}}(O,new Map),R=function(){var r=Math.floor(16.666666666666668),e,t,o={},l=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(c){var d=Math.random();return o[d]=requestAnimationFrame(function a(u){l===u||l+r-1<u?(l=u,delete o[d],c()):o[d]=requestAnimationFrame(a)}),d},t=function(c){o[c]&&cancelAnimationFrame(o[c])}):(e=function(c){return setTimeout(c,r)},t=function(c){return clearTimeout(c)}),{frame:e,cancel:t}}(),X=function(){var r,e,t={};function o(l){function c(d,a){l.postMessage({options:d||{},callback:a})}l.init=function(a){var u=a.transferControlToOffscreen();l.postMessage({canvas:u},[u])},l.fire=function(a,u,m){if(e)return c(a,null),e;var y=Math.random().toString(36).slice(2);return e=k(function(p){function w(b){b.data.callback===y&&(delete t[y],l.removeEventListener("message",w),e=null,L.clear(),m(),p())}l.addEventListener("message",w),c(a,y),t[y]=w.bind(null,{data:{callback:y}})}),e},l.reset=function(){l.postMessage({reset:!0});for(var a in t)t[a](),delete t[a]}}return function(){if(r)return r;if(!v&&g){var l=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([l])))}catch(c){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",c),null}o(r)}return r}}(),Y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function ee(r,e){return e?e(r):r}function re(r){return r!=null}function M(r,e,t){return ee(r&&re(r[e])?r[e]:Y[e],t)}function ne(r){return r<0?0:Math.floor(r)}function te(r,e){return Math.floor(Math.random()*(e-r))+r}function W(r){return parseInt(r,16)}function ae(r){return r.map(oe)}function oe(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:W(e.substring(0,2)),g:W(e.substring(2,4)),b:W(e.substring(4,6))}}function ie(r){var e=M(r,"origin",Object);return e.x=M(e,"x",Number),e.y=M(e,"y",Number),e}function se(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function le(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function ce(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function de(r,e,t,o,l,c,d,a,u){r.save(),r.translate(e,t),r.rotate(c),r.scale(o,l),r.arc(0,0,1,d,a,u),r.restore()}function ue(r){var e=r.angle*(Math.PI/180),t=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*t-Math.random()*t),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function he(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var t=e.tick++/e.totalTicks,o=e.x+e.random*e.tiltCos,l=e.y+e.random*e.tiltSin,c=e.wobbleX+e.random*e.tiltCos,d=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-t)+")",r.beginPath(),A&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(ge(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(c-o)*.1,Math.abs(d-l)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var a=Math.PI/10*e.wobble,u=Math.abs(c-o)*.1,m=Math.abs(d-l)*.1,y=e.shape.bitmap.width*e.scalar,p=e.shape.bitmap.height*e.scalar,w=new DOMMatrix([Math.cos(a)*u,Math.sin(a)*u,-Math.sin(a)*m,Math.cos(a)*m,e.x,e.y]);w.multiplySelf(new DOMMatrix(e.shape.matrix));var b=r.createPattern(L.transform(e.shape.bitmap),"no-repeat");b.setTransform(w),r.globalAlpha=1-t,r.fillStyle=b,r.fillRect(e.x-y/2,e.y-p/2,y,p),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(c-o)*e.ovalScalar,Math.abs(d-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):de(r,e.x,e.y,Math.abs(c-o)*e.ovalScalar,Math.abs(d-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var f=Math.PI/2*3,x=4*e.scalar,T=8*e.scalar,S=e.x,C=e.y,P=5,E=Math.PI/P;P--;)S=e.x+Math.cos(f)*T,C=e.y+Math.sin(f)*T,r.lineTo(S,C),f+=E,S=e.x+Math.cos(f)*x,C=e.y+Math.sin(f)*x,r.lineTo(S,C),f+=E;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(l)),r.lineTo(Math.floor(c),Math.floor(d)),r.lineTo(Math.floor(o),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function fe(r,e,t,o,l){var c=e.slice(),d=r.getContext("2d"),a,u,m=k(function(y){function p(){a=u=null,d.clearRect(0,0,o.width,o.height),L.clear(),l(),y()}function w(){v&&!(o.width===s.width&&o.height===s.height)&&(o.width=r.width=s.width,o.height=r.height=s.height),!o.width&&!o.height&&(t(r),o.width=r.width,o.height=r.height),d.clearRect(0,0,o.width,o.height),c=c.filter(function(b){return he(d,b)}),c.length?a=R.frame(w):p()}a=R.frame(w),u=p});return{addFettis:function(y){return c=c.concat(y),m},canvas:r,promise:m,reset:function(){a&&R.cancel(a),u&&u()}}}function U(r,e){var t=!r,o=!!M(e||{},"resize"),l=!1,c=M(e,"disableForReducedMotion",Boolean),d=g&&!!M(e||{},"useWorker"),a=d?X():null,u=t?se:le,m=r&&a?!!r.__confetti_initialized:!1,y=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,p;function w(f,x,T){for(var S=M(f,"particleCount",ne),C=M(f,"angle",Number),P=M(f,"spread",Number),E=M(f,"startVelocity",Number),ve=M(f,"decay",Number),ye=M(f,"gravity",Number),we=M(f,"drift",Number),Q=M(f,"colors",ae),Me=M(f,"ticks",Number),D=M(f,"shapes"),be=M(f,"scalar"),Ae=!!M(f,"flat"),J=ie(f),K=S,j=[],xe=r.width*J.x,Ie=r.height*J.y;K--;)j.push(ue({x:xe,y:Ie,angle:C,spread:P,startVelocity:E,color:Q[K%Q.length],shape:D[te(0,D.length)],ticks:Me,decay:ve,gravity:ye,drift:we,scalar:be,flat:Ae}));return p?p.addFettis(j):(p=fe(r,j,u,x,T),p.promise)}function b(f){var x=c||M(f,"disableForReducedMotion",Boolean),T=M(f,"zIndex",Number);if(x&&y)return k(function(E){E()});t&&p?r=p.canvas:t&&!r&&(r=ce(T),document.body.appendChild(r)),o&&!m&&u(r);var S={width:r.width,height:r.height};a&&!m&&a.init(r),m=!0,a&&(r.__confetti_initialized=!0);function C(){if(a){var E={getBoundingClientRect:function(){if(!t)return r.getBoundingClientRect()}};u(E),a.postMessage({resize:{width:E.width,height:E.height}});return}S.width=S.height=null}function P(){p=null,o&&(l=!1,n.removeEventListener("resize",C)),t&&r&&(document.body.removeChild(r),r=null,m=!1)}return o&&!l&&(l=!0,n.addEventListener("resize",C,!1)),a?a.fire(f,S,P):w(f,S,P)}return b.reset=function(){a&&a.reset(),p&&p.reset()},b}var V;function B(){return V||(V=U(null,{useWorker:!0,resize:!0})),V}function ge(r,e,t,o,l,c,d){var a=new Path2D(r),u=new Path2D;u.addPath(a,new DOMMatrix(e));var m=new Path2D;return m.addPath(u,new DOMMatrix([Math.cos(d)*l,Math.sin(d)*l,-Math.sin(d)*c,Math.cos(d)*c,t,o])),m}function me(r){if(!A)throw new Error("path confetti are not supported in this browser");var e,t;typeof r=="string"?e=r:(e=r.path,t=r.matrix);var o=new Path2D(e),l=document.createElement("canvas"),c=l.getContext("2d");if(!t){for(var d=1e3,a=d,u=d,m=0,y=0,p,w,b=0;b<d;b+=2)for(var f=0;f<d;f+=2)c.isPointInPath(o,b,f,"nonzero")&&(a=Math.min(a,b),u=Math.min(u,f),m=Math.max(m,b),y=Math.max(y,f));p=m-a,w=y-u;var x=10,T=Math.min(x/p,x/w);t=[T,0,0,T,-Math.round(p/2+a)*T,-Math.round(w/2+u)*T]}return{type:"path",path:e,matrix:t}}function pe(r){var e,t=1,o="#000000",l='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,t="scalar"in r?r.scalar:t,l="fontFamily"in r?r.fontFamily:l,o="color"in r?r.color:o);var c=10*t,d=""+c+"px "+l,a=new OffscreenCanvas(c,c),u=a.getContext("2d");u.font=d;var m=u.measureText(e),y=Math.ceil(m.actualBoundingBoxRight+m.actualBoundingBoxLeft),p=Math.ceil(m.actualBoundingBoxAscent+m.actualBoundingBoxDescent),w=2,b=m.actualBoundingBoxLeft+w,f=m.actualBoundingBoxAscent+w;y+=w+w,p+=w+w,a=new OffscreenCanvas(y,p),u=a.getContext("2d"),u.font=d,u.fillStyle=o,u.fillText(e,b,f);var x=1/t;return{type:"bitmap",bitmap:a.transferToImageBitmap(),matrix:[x,0,0,x,-y*x/2,-p*x/2]}}h.exports=function(){return B().apply(this,arguments)},h.exports.reset=function(){B().reset()},h.exports.create=U,h.exports.shapeFromPath=me,h.exports.shapeFromText=pe})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),q,!1);const Le=q.exports;q.exports.create;const Pe=()=>{Le({particleCount:100,spread:160,colors:["#ffc600","#abe2de","#ee2fbe","#65ae3c"],angle:90})},He=(i,n,h)=>{const v=H.length,s=document.querySelector(".quiz-container__congratulations"),g=document.querySelector(".congratulations__answered-count"),A=document.querySelector(".congratulations__total-count"),O=document.querySelector("#quiz-heading"),F=document.querySelector("#progress"),k=document.querySelector(".congratulations__buttons");if(!g||!A||!h||!n||!s||!O||!F||!k)throw new Error("HTML Element does not exist...");if(!s.querySelector(".view-score-history-button")){const L=document.createElement("button");L.textContent="View Score History",L.classList.add("view-score-history-button"),L.addEventListener("click",()=>{Oe()}),s.querySelector(".congratulations__play-again-button")&&k.appendChild(L)}s.style.display="block",g.textContent=i.correctAnswers.toString(),A.textContent=v.toString(),h.style.display="none",n.style.display="none",O.style.display="none",F.style.display="none",Pe()},Oe=()=>{const i=document.querySelector(".score-history"),n=JSON.parse(localStorage.getItem("scoreHistory")||"[]"),v=n.sort((g,A)=>A.score-g.score).slice(0,Math.min(n.length,10));let s="<h2>Score History: Top 10</h2>";s+="<table><tr><th>Date</th><th>Score</th></tr>",v.forEach(g=>{s+=`<tr><td>${g.date}</td><td>${g.score}</td></tr>`}),s+="</table>",i&&(i.innerHTML=s)},ke=(i,n)=>{if(!i||!n)throw new Error("HTMLElement does not exist..");if(I.currentQuestionIndex>=H.length-1){const h=JSON.parse(localStorage.getItem("scoreHistory")||"[]");h.push({date:new Date().toLocaleString(),score:I.correctAnswers}),localStorage.setItem("scoreHistory",JSON.stringify(h))}I.currentQuestionIndex<H.length-1?(I.currentQuestionIndex++,I.questionAnswered=!1,_(I,i),N(I),i.classList.remove("correct","incorrect"),n.disabled=!0):He(I,i,n)},Fe=(i,n,h,v)=>{if(!v||!n||!h)throw new Error("HTML Element does not exist...");i.currentQuestionIndex=0,i.correctAnswers=0,i.questionAnswered=!1,_(i,n),N(i),v.style.display="none",n.style.display="block",h.style.display="block",h.disabled=!0},qe=i=>{for(let n=i.length-1;n>0;n--){const h=Math.floor(Math.random()*(n+1));[i[n],i[h]]=[i[h],i[n]]}},Re=(i,n,h,v)=>{n.disabled=!0;const s=document.querySelector("#quiz-heading"),g=document.querySelector("#progress");if(!i||!n||!v||!s||!g)throw new Error("HTMLElement does not exist");_(I,i),N(I),i.addEventListener("click",A=>Ce(A,I,n)),n.addEventListener("click",()=>ke(i,n)),v.addEventListener("click",()=>{Fe(I,i,n,h),qe(H),_(I,i),s.style.display="block",g.style.display="inline-block"})},G=document.querySelector(".quiz-container__body"),z=document.querySelector(".quiz-container__next-button"),Z=document.querySelector(".quiz-container__congratulations"),$=document.querySelector(".congratulations__play-again-button");if(!G||!z||!$||!Z)throw new Error("HTML Element does not exist...");Re(G,z,Z,$)});export default _e();
