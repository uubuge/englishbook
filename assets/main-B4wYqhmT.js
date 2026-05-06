import"./style-RkyoAoV-.js";let l=[],h=[],d=[],c=new Map,u=null,p=0;const f=50;let m=!1,g=!0;async function B(){const e=document.getElementById("listLoading"),n=["/englishbook/"+"data/books.json","./data/books.json","../data/books.json","/data/books.json","data/books.json"];for(const a of n)try{const o=await fetch(a);if(!o.ok)continue;h=await o.json(),l=h,d=l,q(),y(),C(),w(),k(),E();return}catch(o){console.log("尝试路径失败:",a,o.message);continue}console.error("所有路径都加载失败"),e&&(e.innerHTML='<div style="color:#e74c3c;padding:20px;text-align:center;">加载失败，请检查网络连接或联系管理员</div>')}function q(){c=new Map,l.forEach((e,t)=>{const n=e.nameZh.toLowerCase(),a=e.nameEn.toLowerCase(),o=e.id.toLowerCase();c.has(n)||c.set(n,[]),c.get(n).push(t),c.has(a)||c.set(a,[]),c.get(a).push(t),c.has(o)||c.set(o,[]),c.get(o).push(t),a.split(/\s+/).forEach(s=>{s.length>=2&&(c.has(s)||c.set(s,[]),c.get(s).push(t))})})}function I(e){if(!e)return l;const t=e.toLowerCase().trim();return t?l.filter(n=>{const a=n.nameZh.toLowerCase().includes(t),o=n.nameEn.toLowerCase().includes(t),i=n.id.toLowerCase().includes(t);return a||o||i}):l}function y(){const e=d.reduce((o,i)=>{const s=i.duration.match(/(\d+)小时/);return o+(s?parseInt(s[1]):0)},0),t=d.map(o=>o.price),n=Math.min(...t).toFixed(2),a=Math.max(...t).toFixed(2);document.getElementById("totalDuration").textContent=e+"小时",document.getElementById("totalPrice").textContent=n===a?n+"元":`${n} - ${a}元`}function C(){const e=document.getElementById("scrollContainer");e&&(e.style.maxHeight="calc(100vh - 350px)",e.addEventListener("scroll",()=>{if(m||!g)return;const{scrollTop:t,scrollHeight:n,clientHeight:a}=e;t/(n-a)>=.7&&L()}))}function E(){const e=document.getElementById("bookGrid"),t=document.getElementById("listLoading");p=0,g=!0,e.innerHTML="",t&&t.classList.remove("hidden"),setTimeout(()=>{L()},100)}function L(){if(m||!g)return;m=!0;const e=document.getElementById("bookGrid"),t=document.getElementById("listLoading");t&&t.classList.remove("hidden");const n=p*f,a=Math.min(n+f,d.length),o=d.slice(n,a);setTimeout(()=>{const i=document.createDocumentFragment();o.forEach(s=>{const r=document.createElement("div");r.className="book-card",r.innerHTML=`
                <div class="book-title-zh">${s.nameZh}</div>
                <div class="book-title-en">${s.nameEn}</div>
                <div class="book-meta">
                    <div class="book-duration"><span class="book-duration-icon">⏱️</span><span>${s.duration}</span></div>
                    <div class="book-price">${s.price.toFixed(2)}<span>元</span></div>
                </div>
                <div class="book-qq" onclick="event.stopPropagation(); window.open('mqqapi://card/show_pslcard?src_type=internal&version=1&uin=704100972&card_type=person&source=qrcode', '_blank')">
                    🐧 704100972
                </div>
            `,r.addEventListener("click",()=>T(s)),i.appendChild(r)}),e.appendChild(i),p++,g=a<d.length,t&&t.classList.add("hidden"),m=!1},0)}function w(){const e=document.getElementById("searchInput");let t;e.addEventListener("input",n=>{clearTimeout(t),t=setTimeout(()=>{const a=n.target.value.trim();d=a?I(a):l,y();const o=document.getElementById("noResults");d.length===0?o.classList.add("visible"):o.classList.remove("visible"),document.getElementById("scrollContainer").scrollTop=0,E()},150)})}function k(){document.getElementById("modalClose").addEventListener("click",v),document.getElementById("modalOverlay").addEventListener("click",e=>{e.target===e.currentTarget&&v()})}async function T(e){u=e.id,document.getElementById("modalTitleZh").textContent=e.nameZh,document.getElementById("modalTitleEn").textContent=e.nameEn,document.getElementById("modalDuration").textContent=e.duration,document.getElementById("modalPrice").textContent=e.price.toFixed(2)+"元",document.getElementById("modalGutenbergId").textContent="书目 #"+e.id,document.getElementById("modalBody").innerHTML=`
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
    `,document.getElementById("modalOverlay").classList.add("active"),document.body.style.overflow="hidden",b(e.id)}function v(){u=null,document.getElementById("modalOverlay").classList.remove("active"),document.body.style.overflow=""}async function b(e){if(!(!e||e!==u))try{const t=e.replace(/^0+/,"")||"0",n=document.getElementById("modalBody"),a=`https://www.gutenberg.org/cache/epub/${t}/pg${t}.txt`,o=document.createElement("iframe");o.src=a,o.style="width:100%;height:70vh;border:none;background-color:#fff;",o.onload=function(){const s=document.getElementById("loadingSpinner");s&&(s.style.display="none")};const i=document.createElement("div");i.className="modal-qq",i.innerHTML=`
             <span>联系客服购买：</span>
             <a href="https://qm.qq.com/q/704100972" target="_blank" class="qq-link">
                 QQ客服：704100972
             </a>
         `,n.innerHTML="",n.appendChild(o),n.appendChild(i)}catch{if(e!==u)return;const n=document.getElementById("modalBody");n.innerHTML=`
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
