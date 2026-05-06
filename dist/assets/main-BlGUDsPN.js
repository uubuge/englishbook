/* empty css              */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();let d=[],f=[],r=[],c=new Map,u=null,g=0;const h=50;let m=!1,p=!0;async function B(){const e=document.getElementById("listLoading"),n=["/englishbook/data/books.json","/data/books.json","./data/books.json","../data/books.json"];for(const o of n)try{const s=await fetch(o);if(!s.ok)continue;const t=s.headers.get("content-type");if(!t||!t.includes("application/json"))continue;f=await s.json(),d=f,r=d,q(),v(),w(),C(),T(),L();return}catch(s){console.log("尝试路径失败:",o,s.message);continue}console.error("所有路径都加载失败"),e&&(e.innerHTML='<div style="color:#e74c3c;padding:20px;text-align:center;">加载失败，请检查网络连接或联系管理员</div>')}function q(){c=new Map,d.forEach((e,n)=>{const o=e.nameZh.toLowerCase(),s=e.nameEn.toLowerCase(),t=e.id.toLowerCase();c.has(o)||c.set(o,[]),c.get(o).push(n),c.has(s)||c.set(s,[]),c.get(s).push(n),c.has(t)||c.set(t,[]),c.get(t).push(n),s.split(/\s+/).forEach(i=>{i.length>=2&&(c.has(i)||c.set(i,[]),c.get(i).push(n))})})}function I(e){if(!e)return d;const n=e.toLowerCase().trim();return n?d.filter(o=>{const s=o.nameZh.toLowerCase().includes(n),t=o.nameEn.toLowerCase().includes(n),a=o.id.toLowerCase().includes(n);return s||t||a}):d}function v(){const e=r.reduce((t,a)=>{const i=a.duration.match(/(\d+)小时/);return t+(i?parseInt(i[1]):0)},0),n=r.map(t=>t.price),o=Math.min(...n).toFixed(2),s=Math.max(...n).toFixed(2);document.getElementById("totalDuration").textContent=e+"小时",document.getElementById("totalPrice").textContent=o===s?o+"元":`${o} - ${s}元`}function w(){const e=document.getElementById("scrollContainer");e&&(e.style.maxHeight="calc(100vh - 350px)",e.addEventListener("scroll",()=>{if(m||!p)return;const{scrollTop:n,scrollHeight:o,clientHeight:s}=e;n/(o-s)>=.7&&E()}))}function L(){const e=document.getElementById("bookGrid"),n=document.getElementById("listLoading");g=0,p=!0,e.innerHTML="",n&&n.classList.remove("hidden"),setTimeout(()=>{E()},100)}function E(){if(m||!p)return;m=!0;const e=document.getElementById("bookGrid"),n=document.getElementById("listLoading");n&&n.classList.remove("hidden");const o=g*h,s=Math.min(o+h,r.length),t=r.slice(o,s);setTimeout(()=>{const a=document.createDocumentFragment();t.forEach(i=>{const l=document.createElement("div");l.className="book-card",l.innerHTML=`
                <div class="book-title-zh">${i.nameZh}</div>
                <div class="book-title-en">${i.nameEn}</div>
                <div class="book-meta">
                    <div class="book-duration"><span class="book-duration-icon">⏱️</span><span>${i.duration}</span></div>
                    <div class="book-price">${i.price.toFixed(2)}<span>元</span></div>
                </div>
                <div class="book-qq" onclick="event.stopPropagation(); window.open('mqqapi://card/show_pslcard?src_type=internal&version=1&uin=704100972&card_type=person&source=qrcode', '_blank')">
                    🐧 704100972
                </div>
            `,l.addEventListener("click",()=>M(i)),a.appendChild(l)}),e.appendChild(a),g++,p=s<r.length,n&&n.classList.add("hidden"),m=!1},0)}function C(){const e=document.getElementById("searchInput");let n;e.addEventListener("input",o=>{clearTimeout(n),n=setTimeout(()=>{const s=o.target.value.trim();r=s?I(s):d,v();const t=document.getElementById("noResults");r.length===0?t.classList.add("visible"):t.classList.remove("visible"),document.getElementById("scrollContainer").scrollTop=0,L()},150)})}function T(){document.getElementById("modalClose").addEventListener("click",y),document.getElementById("modalOverlay").addEventListener("click",e=>{e.target===e.currentTarget&&y()})}async function M(e){u=e.id,document.getElementById("modalTitleZh").textContent=e.nameZh,document.getElementById("modalTitleEn").textContent=e.nameEn,document.getElementById("modalDuration").textContent=e.duration,document.getElementById("modalPrice").textContent=e.price.toFixed(2)+"元",document.getElementById("modalGutenbergId").textContent="书目 #"+e.id,document.getElementById("modalBody").innerHTML=`
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
    `,document.getElementById("modalOverlay").classList.add("active"),document.body.style.overflow="hidden",b(e.id)}function y(){u=null,document.getElementById("modalOverlay").classList.remove("active"),document.body.style.overflow=""}async function b(e){if(!(!e||e!==u))try{const n=e.replace(/^0+/,"")||"0",o=document.getElementById("modalBody"),s=`https://www.gutenberg.org/cache/epub/${n}/pg${n}.txt`,t=document.createElement("iframe");t.src=s,t.style="width:100%;height:70vh;border:none;background-color:#fff;",t.onload=function(){const i=document.getElementById("loadingSpinner");i&&(i.style.display="none")};const a=document.createElement("div");a.className="modal-qq",a.innerHTML=`
             <span>联系客服购买：</span>
             <a href="https://qm.qq.com/q/704100972" target="_blank" class="qq-link">
                 QQ客服：704100972
             </a>
         `,o.innerHTML="",o.appendChild(t),o.appendChild(a)}catch{if(e!==u)return;const o=document.getElementById("modalBody");o.innerHTML=`
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
        `}}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("navToggle"),n=document.getElementById("navLinks");e&&n&&e.addEventListener("click",function(){n.classList.toggle("active")}),document.getElementById("scrollContainer")&&B()});
