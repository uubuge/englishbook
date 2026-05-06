(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();let d=[],f=[],c=[],i=new Map,u=null,p=0;const h=50;let m=!1,g=!0;async function B(){try{let e;try{e=await fetch("/englishbook/data/books.json")}catch{e=await fetch("/data/books.json")}if(!e.ok)throw new Error("网络错误");f=await e.json(),d=f,c=d,q(),v(),w(),C(),M(),E()}catch(e){console.error("加载数据失败:",e)}}function q(){i=new Map,d.forEach((e,t)=>{const o=e.nameZh.toLowerCase(),a=e.nameEn.toLowerCase(),n=e.id.toLowerCase();i.has(o)||i.set(o,[]),i.get(o).push(t),i.has(a)||i.set(a,[]),i.get(a).push(t),i.has(n)||i.set(n,[]),i.get(n).push(t),a.split(/\s+/).forEach(r=>{r.length>=2&&(i.has(r)||i.set(r,[]),i.get(r).push(t))})})}function I(e){if(!e)return d;const t=e.toLowerCase().trim();return t?d.filter(o=>{const a=o.nameZh.toLowerCase().includes(t),n=o.nameEn.toLowerCase().includes(t),s=o.id.toLowerCase().includes(t);return a||n||s}):d}function v(){const e=c.reduce((n,s)=>{const r=s.duration.match(/(\d+)小时/);return n+(r?parseInt(r[1]):0)},0),t=c.map(n=>n.price),o=Math.min(...t).toFixed(2),a=Math.max(...t).toFixed(2);document.getElementById("totalDuration").textContent=e+"小时",document.getElementById("totalPrice").textContent=o===a?o+"元":`${o} - ${a}元`}function w(){const e=document.getElementById("scrollContainer");e&&(e.style.maxHeight="calc(100vh - 350px)",e.addEventListener("scroll",()=>{if(m||!g)return;const{scrollTop:t,scrollHeight:o,clientHeight:a}=e;t/(o-a)>=.7&&L()}))}function E(){const e=document.getElementById("bookGrid"),t=document.getElementById("listLoading");p=0,g=!0,e.innerHTML="",t&&t.classList.remove("hidden"),setTimeout(()=>{L()},100)}function L(){if(m||!g)return;m=!0;const e=document.getElementById("bookGrid"),t=document.getElementById("listLoading");t&&t.classList.remove("hidden");const o=p*h,a=Math.min(o+h,c.length),n=c.slice(o,a);setTimeout(()=>{const s=document.createDocumentFragment();n.forEach(r=>{const l=document.createElement("div");l.className="book-card",l.innerHTML=`
                <div class="book-title-zh">${r.nameZh}</div>
                <div class="book-title-en">${r.nameEn}</div>
                <div class="book-meta">
                    <div class="book-duration"><span class="book-duration-icon">⏱️</span><span>${r.duration}</span></div>
                    <div class="book-price">${r.price.toFixed(2)}<span>元</span></div>
                </div>
                <div class="book-qq" onclick="event.stopPropagation(); window.open('mqqapi://card/show_pslcard?src_type=internal&version=1&uin=704100972&card_type=person&source=qrcode', '_blank')">
                    🐧 704100972
                </div>
            `,l.addEventListener("click",()=>b(r)),s.appendChild(l)}),e.appendChild(s),p++,g=a<c.length,t&&t.classList.add("hidden"),m=!1},0)}function C(){const e=document.getElementById("searchInput");let t;e.addEventListener("input",o=>{clearTimeout(t),t=setTimeout(()=>{const a=o.target.value.trim();c=a?I(a):d,v();const n=document.getElementById("noResults");c.length===0?n.classList.add("visible"):n.classList.remove("visible"),document.getElementById("scrollContainer").scrollTop=0,E()},150)})}function M(){document.getElementById("modalClose").addEventListener("click",y),document.getElementById("modalOverlay").addEventListener("click",e=>{e.target===e.currentTarget&&y()})}async function b(e){u=e.id,document.getElementById("modalTitleZh").textContent=e.nameZh,document.getElementById("modalTitleEn").textContent=e.nameEn,document.getElementById("modalDuration").textContent=e.duration,document.getElementById("modalPrice").textContent=e.price.toFixed(2)+"元",document.getElementById("modalGutenbergId").textContent="书目 #"+e.id,document.getElementById("modalBody").innerHTML=`
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
    `,document.getElementById("modalOverlay").classList.add("active"),document.body.style.overflow="hidden",T(e.id)}function y(){u=null,document.getElementById("modalOverlay").classList.remove("active"),document.body.style.overflow=""}async function T(e){if(!(!e||e!==u))try{const t=e.replace(/^0+/,"")||"0",o=document.getElementById("modalBody"),a=`https://www.gutenberg.org/cache/epub/${t}/pg${t}.txt`,n=document.createElement("iframe");n.src=a,n.style="width:100%;height:70vh;border:none;background-color:#fff;",n.onload=function(){const r=document.getElementById("loadingSpinner");r&&(r.style.display="none")};const s=document.createElement("div");s.className="modal-qq",s.innerHTML=`
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
