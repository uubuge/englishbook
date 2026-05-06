/* empty css              */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();let l=[],f=[],r=[],c=new Map,u=null,g=0;const h=50;let m=!1,p=!0;async function B(){const e=document.getElementById("listLoading"),t="/englishbook/",i=window.location.pathname.includes("books.html"),n=[t+"data/books.json","/data/books.json",i?"./data/books.json":"../data/books.json",i?"../data/books.json":"./data/books.json","data/books.json"];for(const s of n)try{const a=await fetch(s);if(!a.ok)continue;const d=a.headers.get("content-type");if(!d||!d.includes("application/json"))continue;f=await a.json(),l=f,r=l,q(),v(),w(),b(),C(),L();return}catch(a){console.log("尝试路径失败:",s,a.message);continue}console.error("所有路径都加载失败"),e&&(e.innerHTML='<div style="color:#e74c3c;padding:20px;text-align:center;">加载失败，请检查网络连接或联系管理员</div>')}function q(){c=new Map,l.forEach((e,t)=>{const o=e.nameZh.toLowerCase(),i=e.nameEn.toLowerCase(),n=e.id.toLowerCase();c.has(o)||c.set(o,[]),c.get(o).push(t),c.has(i)||c.set(i,[]),c.get(i).push(t),c.has(n)||c.set(n,[]),c.get(n).push(t),i.split(/\s+/).forEach(a=>{a.length>=2&&(c.has(a)||c.set(a,[]),c.get(a).push(t))})})}function I(e){if(!e)return l;const t=e.toLowerCase().trim();return t?l.filter(o=>{const i=o.nameZh.toLowerCase().includes(t),n=o.nameEn.toLowerCase().includes(t),s=o.id.toLowerCase().includes(t);return i||n||s}):l}function v(){const e=r.reduce((n,s)=>{const a=s.duration.match(/(\d+)小时/);return n+(a?parseInt(a[1]):0)},0),t=r.map(n=>n.price),o=Math.min(...t).toFixed(2),i=Math.max(...t).toFixed(2);document.getElementById("totalDuration").textContent=e+"小时",document.getElementById("totalPrice").textContent=o===i?o+"元":`${o} - ${i}元`}function w(){const e=document.getElementById("scrollContainer");e&&(e.style.maxHeight="calc(100vh - 350px)",e.addEventListener("scroll",()=>{if(m||!p)return;const{scrollTop:t,scrollHeight:o,clientHeight:i}=e;t/(o-i)>=.7&&E()}))}function L(){const e=document.getElementById("bookGrid"),t=document.getElementById("listLoading");g=0,p=!0,e.innerHTML="",t&&t.classList.remove("hidden"),setTimeout(()=>{E()},100)}function E(){if(m||!p)return;m=!0;const e=document.getElementById("bookGrid"),t=document.getElementById("listLoading");t&&t.classList.remove("hidden");const o=g*h,i=Math.min(o+h,r.length),n=r.slice(o,i);setTimeout(()=>{const s=document.createDocumentFragment();n.forEach(a=>{const d=document.createElement("div");d.className="book-card",d.innerHTML=`
                <div class="book-title-zh">${a.nameZh}</div>
                <div class="book-title-en">${a.nameEn}</div>
                <div class="book-meta">
                    <div class="book-duration"><span class="book-duration-icon">⏱️</span><span>${a.duration}</span></div>
                    <div class="book-price">${a.price.toFixed(2)}<span>元</span></div>
                </div>
                <div class="book-qq" onclick="event.stopPropagation(); window.open('mqqapi://card/show_pslcard?src_type=internal&version=1&uin=704100972&card_type=person&source=qrcode', '_blank')">
                    🐧 704100972
                </div>
            `,d.addEventListener("click",()=>T(a)),s.appendChild(d)}),e.appendChild(s),g++,p=i<r.length,t&&t.classList.add("hidden"),m=!1},0)}function b(){const e=document.getElementById("searchInput");let t;e.addEventListener("input",o=>{clearTimeout(t),t=setTimeout(()=>{const i=o.target.value.trim();r=i?I(i):l,v();const n=document.getElementById("noResults");r.length===0?n.classList.add("visible"):n.classList.remove("visible"),document.getElementById("scrollContainer").scrollTop=0,L()},150)})}function C(){document.getElementById("modalClose").addEventListener("click",y),document.getElementById("modalOverlay").addEventListener("click",e=>{e.target===e.currentTarget&&y()})}async function T(e){u=e.id,document.getElementById("modalTitleZh").textContent=e.nameZh,document.getElementById("modalTitleEn").textContent=e.nameEn,document.getElementById("modalDuration").textContent=e.duration,document.getElementById("modalPrice").textContent=e.price.toFixed(2)+"元",document.getElementById("modalGutenbergId").textContent="书目 #"+e.id,document.getElementById("modalBody").innerHTML=`
        <div class="modal-loading">
            <div class="loading-spinner" id="loadingSpinner"></div>
            <div>正在从书库加载《${e.nameZh}》...</div>
        </div>
        <div class="modal-qq">
            <span>联系客服购买：</span>
            <a href="https://qm.qq.com/q/704100972" target="_blank" class="qq-link">
                QQ客服：704100972
            </a>
        </div>
    `,document.getElementById("modalOverlay").classList.add("active"),document.body.style.overflow="hidden",M(e.id)}function y(){u=null,document.getElementById("modalOverlay").classList.remove("active"),document.body.style.overflow=""}async function M(e){if(!(!e||e!==u))try{const t=e.replace(/^0+/,"")||"0",o=document.getElementById("modalBody"),i=`https://www.gutenberg.org/cache/epub/${t}/pg${t}.txt`,n=document.createElement("iframe");n.src=i,n.style="width:100%;height:70vh;border:none;background-color:#fff;",n.onload=function(){const a=document.getElementById("loadingSpinner");a&&(a.style.display="none")};const s=document.createElement("div");s.className="modal-qq",s.innerHTML=`
             <span>联系客服购买：</span>
             <a href="https://qm.qq.com/q/704100972" target="_blank" class="qq-link">
                 QQ客服：704100972
             </a>
         `,o.innerHTML="",o.appendChild(n),o.appendChild(s)}catch{if(e!==u)return;const o=document.getElementById("modalBody");o.innerHTML=`
            <div class="modal-error">
                <p>⚠️ 无法加载小说全文</p>
                <p style="font-size: 0.9rem; margin-top: 10px; color: #95a5a6;">
                    请访问
                    <a href="https://www.gutenberg.org/ebooks/${e.replace(/^0+/,"")}"
                       target="_blank"
                       style="color: #3498db;">书目官方网站</a>
                    获取更多资源
                </p>
            </div>
            <div class="modal-qq">
                <span>联系客服购买：</span>
                <a href="https://qm.qq.com/q/704100972" target="_blank" class="qq-link">
                    QQ客服：704100972
                </a>
            </div>
        `}}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("navToggle"),t=document.getElementById("navLinks");e&&t&&e.addEventListener("click",function(){t.classList.toggle("active")}),document.getElementById("scrollContainer")&&B()});
