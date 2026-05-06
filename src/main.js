import './style.css';

let books = [];
let booksData = [];
let filteredBooks = [];
let searchIndex = new Map();
let currentBookId = null;

let currentPage = 0;
const itemsPerPage = 50;
let isLoading = false;
let hasMore = true;

async function initBooksPage() {
    const listLoading = document.getElementById('listLoading');
    const baseUrl = import.meta.env.BASE_URL;
    const pathsToTry = [
        baseUrl + 'data/books.json',
        './data/books.json',
        '../data/books.json',
        '/data/books.json',
        'data/books.json'
    ];
    
    for (const path of pathsToTry) {
        try {
            const response = await fetch(path);
            if (!response.ok) continue;
            
            booksData = await response.json();
            books = booksData;
            filteredBooks = books;
            buildSearchIndex();
            setupStats();
            setupScroll();
            setupSearch();
            setupModal();
            resetAndLoad();
            return;
        } catch (error) {
            console.log('尝试路径失败:', path, error.message);
            continue;
        }
    }
    
    console.error('所有路径都加载失败');
    if (listLoading) {
        listLoading.innerHTML = '<div style="color:#e74c3c;padding:20px;text-align:center;">加载失败，请检查网络连接或联系管理员</div>';
    }
}

function buildSearchIndex() {
    searchIndex = new Map();
    books.forEach((book, idx) => {
        const zhLower = book.nameZh.toLowerCase();
        const enLower = book.nameEn.toLowerCase();
        const idLower = book.id.toLowerCase();

        if (!searchIndex.has(zhLower)) searchIndex.set(zhLower, []);
        searchIndex.get(zhLower).push(idx);

        if (!searchIndex.has(enLower)) searchIndex.set(enLower, []);
        searchIndex.get(enLower).push(idx);

        if (!searchIndex.has(idLower)) searchIndex.set(idLower, []);
        searchIndex.get(idLower).push(idx);

        const enWords = enLower.split(/\s+/);
        enWords.forEach(word => {
            if (word.length >= 2) {
                if (!searchIndex.has(word)) searchIndex.set(word, []);
                searchIndex.get(word).push(idx);
            }
        });
    });
}

function fastSearch(query) {
    if (!query) return books;

    const queryLower = query.toLowerCase().trim();
    if (!queryLower) return books;

    return books.filter(book => {
        const zhMatch = book.nameZh.toLowerCase().includes(queryLower);
        const enMatch = book.nameEn.toLowerCase().includes(queryLower);
        const idMatch = book.id.toLowerCase().includes(queryLower);
        return zhMatch || enMatch || idMatch;
    });
}

function setupStats() {
    const totalDuration = filteredBooks.reduce((sum, book) => {
        const match = book.duration.match(/(\d+)小时/);
        return sum + (match ? parseInt(match[1]) : 0);
    }, 0);

    const prices = filteredBooks.map(book => book.price);
    const minPrice = Math.min(...prices).toFixed(2);
    const maxPrice = Math.max(...prices).toFixed(2);

    document.getElementById('totalDuration').textContent = totalDuration + '小时';
    document.getElementById('totalPrice').textContent = minPrice === maxPrice ? minPrice + '元' : `${minPrice} - ${maxPrice}元`;
}

function setupScroll() {
    const container = document.getElementById('scrollContainer');
    
    if (!container) return;
    
    container.style.maxHeight = 'calc(100vh - 350px)';
    
    container.addEventListener('scroll', () => {
        if (isLoading || !hasMore) return;
        
        const { scrollTop, scrollHeight, clientHeight } = container;
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
        
        if (scrollPercentage >= 0.7) {
            loadMoreCards();
        }
    });
}

function resetAndLoad() {
    const grid = document.getElementById('bookGrid');
    const listLoading = document.getElementById('listLoading');
    
    currentPage = 0;
    hasMore = true;
    grid.innerHTML = '';
    
    if (listLoading) listLoading.classList.remove('hidden');
    
    setTimeout(() => {
        loadMoreCards();
    }, 100);
}

function loadMoreCards() {
    if (isLoading || !hasMore) return;
    
    isLoading = true;
    
    const grid = document.getElementById('bookGrid');
    const listLoading = document.getElementById('listLoading');
    
    if (listLoading) listLoading.classList.remove('hidden');
    
    const start = currentPage * itemsPerPage;
    const end = Math.min(start + itemsPerPage, filteredBooks.length);
    const booksToRender = filteredBooks.slice(start, end);
    
    setTimeout(() => {
        const fragment = document.createDocumentFragment();
        
        booksToRender.forEach((book) => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <div class="book-title-zh">${book.nameZh}</div>
                <div class="book-title-en">${book.nameEn}</div>
                <div class="book-meta">
                    <div class="book-duration"><span class="book-duration-icon">⏱️</span><span>${book.duration}</span></div>
                    <div class="book-price">${book.price.toFixed(2)}<span>元</span></div>
                </div>
                <div class="book-qq" onclick="event.stopPropagation(); window.open('mqqapi://card/show_pslcard?src_type=internal&version=1&uin=704100972&card_type=person&source=qrcode', '_blank')">
                    🐧 704100972
                </div>
            `;
            card.addEventListener('click', () => openModal(book));
            fragment.appendChild(card);
        });
        
        grid.appendChild(fragment);
        
        currentPage++;
        hasMore = end < filteredBooks.length;
        
        if (listLoading) listLoading.classList.add('hidden');
        isLoading = false;
    }, 0);
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    let debounceTimer;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = e.target.value.trim();
            filteredBooks = query ? fastSearch(query) : books;

            setupStats();

            const noResults = document.getElementById('noResults');
            if (filteredBooks.length === 0) {
                noResults.classList.add('visible');
            } else {
                noResults.classList.remove('visible');
            }

            document.getElementById('scrollContainer').scrollTop = 0;
            resetAndLoad();
        }, 150);
    });
}

function setupModal() {
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
}



async function openModal(book) {
    currentBookId = book.id;
    document.getElementById('modalTitleZh').textContent = book.nameZh;
    document.getElementById('modalTitleEn').textContent = book.nameEn;
    document.getElementById('modalDuration').textContent = book.duration;
    document.getElementById('modalPrice').textContent = book.price.toFixed(2) + '元';
    document.getElementById('modalGutenbergId').textContent = '书目 #' + book.id;

    document.getElementById('modalBody').innerHTML = `
        <div class="modal-loading">
            <div class="loading-spinner" id="loadingSpinner"></div>
            <div>正在从书库加载《${book.nameZh}》...</div>
        </div>
        <div class="modal-qq">
            <span>联系客服购买：</span>
            <a href="https://qm.qq.com/q/704100972" target="_blank" class="qq-link">
                QQ客服：704100972
            </a>
        </div>
    `;

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';

    loadBookContent(book.id);
}

function closeModal() {
    currentBookId = null;
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

async function loadBookContent(bookId) {
    if (!bookId || bookId !== currentBookId) return;

    try {
        const cleanId = bookId.replace(/^0+/, '') || '0';
        const modalBody = document.getElementById('modalBody');

        const iframeUrl = `https://www.gutenberg.org/cache/epub/${cleanId}/pg${cleanId}.txt`;
        const iframe = document.createElement('iframe');
        iframe.src = iframeUrl;
        iframe.style = 'width:100%;height:70vh;border:none;background-color:#fff;';
        iframe.onload = function() {
            const spinner = document.getElementById('loadingSpinner');
            if (spinner) spinner.style.display = 'none';
        };
        
        const qqDiv = document.createElement('div');
         qqDiv.className = 'modal-qq';
         qqDiv.innerHTML = `
             <span>联系客服购买：</span>
             <a href="https://qm.qq.com/q/704100972" target="_blank" class="qq-link">
                 QQ客服：704100972
             </a>
         `;
        
        modalBody.innerHTML = '';
        modalBody.appendChild(iframe);
        modalBody.appendChild(qqDiv);

    } catch (error) {
        if (bookId !== currentBookId) return;

        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="modal-error">
                <p>⚠️ 无法加载小说全文</p>
                <p style="font-size: 0.9rem; margin-top: 10px; color: #95a5a6;">
                    请访问
                    <a href="https://www.gutenberg.org/ebooks/${bookId.replace(/^0+/, '')}"
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
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    if (document.getElementById('scrollContainer')) {
        initBooksPage();
    }
});