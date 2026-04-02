
    <!DOCTYPE html>
    <html lang="zh">
    <head>
        <link rel="prefetch" href="Wolf Hall (Hilary Mantel) (Z-Library)_000002.html">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <title>第1/78页 Wolf Hall (Hilary Mantel) (Z-Library)</title>

        <script>
            (function() {
                const defaultConfig = {
                    fontSize: 1.0,
                    textColor: '#00ff00', 
                    bgColor: '#000000',   
                    showPhonetic: true,
                    showEnglish: true,
                    showChinese: true,
                    showMeaning: true,
                    showUnderline: true, 
                    themeMode: 'day',
                    isManualMode: false 
                };

                let saved = localStorage.getItem('app_settings_v4'); 
                let config = saved ? {...defaultConfig, ...JSON.parse(saved)} : defaultConfig;

                const root = document.documentElement;

                root.style.setProperty('--u-font-scale', config.fontSize);

                if (config.themeMode === 'night') {
                    root.style.setProperty('--u-text-color', '#ffffff');
                    root.style.setProperty('--u-bg-color', '#000000');
                } else if (config.themeMode === 'day') {
                    root.style.setProperty('--u-text-color', '#000000');
                    root.style.setProperty('--u-bg-color', '#ffffff');
                } else {
                    root.style.setProperty('--u-text-color', config.textColor);
                    root.style.setProperty('--u-bg-color', config.bgColor);
                }

                if (!config.showPhonetic) root.classList.add('hide-phonetic');
                if (!config.showEnglish) root.classList.add('hide-english');
                if (!config.showChinese) root.classList.add('hide-chinese');
                if (!config.showMeaning) root.classList.add('hide-meaning');
                if (!config.showUnderline) root.classList.add('hide-underline'); 

                if (config.isManualMode) root.classList.add('mode-manual');

                window.AppConfig = config; 
            })();
        </script>

        <style>
            :root {
                --primary-color: #16a34a;
                --u-text-color: #000000;
                --u-bg-color: #ffffff;
                --u-font-scale: 1.0;
                --modal-bg: #fff;
            }

            body {
                width: auto;
                margin: 0 auto;
                font-size: calc(100% * var(--u-font-scale)); 
                color: var(--u-text-color); 
                background-color: var(--u-bg-color); 
                transition: color 0.2s, background-color 0.2s; 
            }

            .word, .chinese, rt { color: inherit !important; }
            .content { overflow-x: hidden; }

            .chinese {
                text-align: center;
                font-size: 1.05em;
                margin: 0px 5px 0px 5px;
                position: relative;
            }
            .chinese::after {
                content: "";
                position: absolute;
                left: -2000px;
                right: -2000px;
                bottom: 0;
                border-bottom: 1px solid rgba(128, 128, 128, 0.3);
            }
            .english {
                margin: 0px 5px 0px 5px;
                padding: 5px;
            }
            .sentence-container {
                font-weight: 100;
                float: left;
                width: 100%;
                cursor: pointer;
                page-break-inside: avoid;
                break-inside: avoid;
                -webkit-column-break-inside: avoid;

                /* ================= 核心性能优化：DOM 虚拟列表 ================= */
                content-visibility: auto;
                contain-intrinsic-size: 150px; /* 预估占位高度，防止滚动条闪烁 */
                contain: layout style;
                /* ========================================================== */
            }
            .highlight {
                background-color: rgba(255, 0, 255, 0.15);
            }
            ruby {
                display: inline-block;
                text-align: center;
                vertical-align: bottom;
                margin: 0px -2px 1px -2px;
                padding: 0px 0px 0px 0px;
            }
            rt {
                font-size: 0.8em;
                line-height: 1.2em;
                font-family: "Times New Roman", "Charis SIL", "Doulos SIL", "Gentium", "Cambria", "Georgia", serif !important;
                font-weight: normal !important;
            }
            .above {
                display: block;
                font-size: 1.2em;
                margin-bottom: 0px;
                padding: 0px 0px 0px 0px;
                text-align: center;
                user-select: none;
            }
            .word {
                display: block;
                font-size: 1.3em;
                font-weight: bold;
                margin: 0 0.25em 0 0.25em;
                border-bottom: 1px solid;
                padding: 0px 0px 0px 0px;
                text-align: center;
            }
            .below {
                display: block;
                font-size: 1.1em;
                margin-top: 0px;
                padding: 0px 0px 0px 0px;
                text-align: center;
                user-select: none;
            }
            p { line-height: 1.6; }

            html.hide-phonetic rt.above { display: none !important; }
            html.hide-meaning rt.below { display: none !important; }
            html.hide-chinese .chinese { display: none !important; }
            html.hide-english .word { opacity: 0; } 
            html.hide-underline .word { border-bottom: none !important; }

            .manual-nav {
                display: none;
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                gap: 20px;
                z-index: 9998;
            }
            html.mode-manual .manual-nav {
                display: flex;
            }
            .nav-btn {
                padding: 10px 24px;
                background-color: var(--primary-color);
                color: white;
                border: none;
                border-radius: 24px;
                font-size: 15px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                transition: transform 0.1s, background-color 0.2s;
                user-select: none;
            }
            .nav-btn:active {
                transform: scale(0.95);
            }

            .main-control-btn {
                position: fixed !important;
                bottom: 20px !important;
                right: 20px !important;
                width: 44px !important;
                height: 44px !important;
                background-color: #16a34a !important;
                color: white !important;
                border: none !important;
                border-radius: 50% !important;
                cursor: pointer !important;
                font-size: 20px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                z-index: 9999 !important;
                box-shadow: 0 4px 12px rgba(0,0,0,0.4) !important;
                user-select: none !important;
            }
            .progress-canvas {
                position: fixed !important;
                bottom: 20px !important;
                right: 20px !important;
                width: 44px !important;
                height: 44px !important;
                z-index: 10000 !important;
                pointer-events: none !important;
            }

            .modal-backdrop {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.5); z-index: 20000; display: none;
            }
            .modal-backdrop.show { display: block; }

            .unified-modal {
                position: fixed; top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                width: 90%; max-width: 400px; max-height: 90vh;
                background: #fff; border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                z-index: 20001; display: none;
                flex-direction: column; overflow: hidden;
                font-family: system-ui, -apple-system, sans-serif; color: #333;
            }
            .unified-modal.show { display: flex; }

            .modal-header { display: flex; background: #f8f8f8; border-bottom: 1px solid #eee; }
            .tab-btn {
                flex: 1; padding: 12px 0; text-align: center; cursor: pointer;
                font-size: 14px; font-weight: 500; color: #666; position: relative;
            }
            .tab-btn.active { color: #16a34a; font-weight: bold; background: #fff; }
            .tab-btn.active::after {
                content: ''; position: absolute; bottom: 0; left: 0; width: 100%;
                height: 2px; background: #16a34a;
            }

            .modal-body { flex: 1; overflow-y: auto; padding: 15px; background: #fff; }
            .tab-content { display: none; }
            .tab-content.active { display: block; }

            .settings-group { margin-bottom: 20px; }
            .group-title {
                font-size: 13px; font-weight: bold; margin-bottom: 8px;
                color: #333; border-left: 3px solid #16a34a; padding-left: 8px;
            }

            .btn-row { display: flex; gap: 8px; margin-bottom: 8px; }
            .option-btn {
                flex: 1; padding: 8px 0; border: 1px solid #e0e0e0;
                background: #fff; border-radius: 6px; font-size: 13px;
                color: #333; cursor: pointer; transition: all 0.2s;
            }
            .option-btn.active { background: #16a34a; color: #fff; border-color: #16a34a; }

            .input-row { display: flex; gap: 8px; }
            .custom-input { flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 6px; font-size: 13px; }
            .apply-btn { padding: 8px 16px; background: #16a34a; color: white; border: none; border-radius: 6px; cursor: pointer; }

            .slider-container { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
            .range-slider { flex: 1; height: 4px; background: #ddd; border-radius: 2px; outline: none; -webkit-appearance: none; }
            .range-slider::-webkit-slider-thumb {
                -webkit-appearance: none; width: 18px; height: 18px;
                background: #16a34a; border-radius: 50%; cursor: pointer;
            }
            .slider-value { font-size: 13px; color: #16a34a; width: 40px; text-align: right; }

            .toggle-row {
                display: flex; justify-content: space-between; align-items: center;
                padding: 8px 0; border-bottom: 1px solid #f5f5f5;
            }
            .toggle-label { font-size: 13px; color: #333; }
            .switch { position: relative; display: inline-block; width: 44px; height: 24px; }
            .switch input { opacity: 0; width: 0; height: 0; }
            .slider {
                position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
                background-color: #ccc; transition: .4s; border-radius: 24px;
            }
            .slider:before {
                position: absolute; content: ""; height: 18px; width: 18px;
                left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%;
            }
            input:checked + .slider { background-color: #16a34a; }
            input:checked + .slider:before { transform: translateX(20px); }

            .history-list { max-height: 200px; overflow-y: auto; border: 1px solid #f0f0f0; border-radius: 6px; margin-bottom: 15px; }
            .history-item { padding: 10px; border-bottom: 1px solid #f0f0f0; display: flex; justify-content: space-between; align-items: center; }
            .history-content { flex: 1; overflow: hidden; }
            .h-title { font-size: 13px; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
            .h-time { font-size: 11px; color: #999; }
            .h-actions button { font-size: 11px; padding: 4px 8px; margin-left: 4px; border: 1px solid #ddd; background: #fff; border-radius: 4px; cursor: pointer; }
            .add-bookmark-btn {
                width: calc(100% - 20px); padding: 10px; background: #fff9e6;
                border: 1px dashed #f59e0b; color: #d97706; border-radius: 6px;
                margin-bottom: 15px; cursor: pointer; font-weight: bold; text-align: center;
            }

            .modal-footer { padding: 12px; border-top: 1px solid #eee; display: flex; justify-content: space-between; background: #f8f8f8; }
            .footer-btn { padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 13px; display: flex; align-items: center; gap: 5px; }
            .btn-home { background: #fff; border: 1px solid #ddd; color: #333; }
            .btn-close { background: #e5e7eb; border: none; color: #333; }

            @media print {
                .main-control-btn, .modal-backdrop, .unified-modal, .progress-canvas, .manual-nav { display: none !important; }
            }
        </style>
    </head>
    <body>
        <h1 style="text-align: center;">Wolf Hall (Hilary Mantel) (Z-Library)<br>第1/78页</h1>
        <div class="content">
    
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wʊlf]</rt>
                    <span class="word">Wolf</span>
                    <rt class="below">狼</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɔːl]</rt>
                    <span class="word">Hall</span>
                    <rt class="below">大厅</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">狼厅</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[pɑːrt]</rt>
                    <span class="word">PART</span>
                    <rt class="below">部分</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌn]</rt>
                    <span class="word">ONE</span>
                    <rt class="below">一</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">第一部分</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[əˈkrɔːs]</rt>
                    <span class="word">Across</span>
                    <rt class="below">穿过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈnæroʊ]</rt>
                    <span class="word">Narrow</span>
                    <rt class="below">狭窄的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siː]</rt>
                    <span class="word">Sea</span>
                    <rt class="below">海</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">横跨狭海</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈpʌtni]</rt>
                    <span class="word">PUTNEY</span>
                    <rt class="below">普特尼</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">-</rt>
                    <span class="word">1500</span>
                    <rt class="below">-</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">普特尼，1500</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[soʊ]</rt>
                    <span class="word">So</span>
                    <rt class="below">所以</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[naʊ]</rt>
                    <span class="word">now</span>
                    <rt class="below">现在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡet]</rt>
                    <span class="word">get</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “那么现在就起来吧。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[feld]</rt>
                    <span class="word">Felled</span>
                    <rt class="below">砍伐</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">砍伐，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[deɪzd]</rt>
                    <span class="word">dazed</span>
                    <rt class="below">茫然</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">茫然，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈsaɪlənt]</rt>
                    <span class="word">silent</span>
                    <rt class="below">沉默的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">沉默的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæz; həz]</rt>
                    <span class="word">has</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɔːlən]</rt>
                    <span class="word">fallen</span>
                    <rt class="below">堕落</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他已经堕落了；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[nɑːkt]</rt>
                    <span class="word">knocked</span>
                    <rt class="below">敲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fʊl]</rt>
                    <span class="word">full</span>
                    <rt class="below">满的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[leŋkθ; leŋθ]</rt>
                    <span class="word">length</span>
                    <rt class="below">长度</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkɑːblz]</rt>
                    <span class="word">cobbles</span>
                    <rt class="below">鹅卵石</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jɑːrd]</rt>
                    <span class="word">yard</span>
                    <rt class="below">院子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">整个身子都撞在了院子的鹅卵石上。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">His</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hed]</rt>
                    <span class="word">head</span>
                    <rt class="below">头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɜːrnz]</rt>
                    <span class="word">turns</span>
                    <rt class="below">转弯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsaɪdweɪz]</rt>
                    <span class="word">sideways</span>
                    <rt class="below">侧身</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他的头转向一边；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪz]</rt>
                    <span class="word">eyes</span>
                    <rt class="below">眼睛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːr; ər]</rt>
                    <span class="word">are</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɜːrnd]</rt>
                    <span class="word">turned</span>
                    <rt class="below">转身</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɔːrd]</rt>
                    <span class="word">toward</span>
                    <rt class="below">朝向</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡeɪt]</rt>
                    <span class="word">gate</span>
                    <rt class="below">门</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他的目光转向大门，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">as</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsʌmwʌn]</rt>
                    <span class="word">someone</span>
                    <rt class="below">某人</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪt]</rt>
                    <span class="word">might</span>
                    <rt class="below">可能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈraɪv]</rt>
                    <span class="word">arrive</span>
                    <rt class="below">到达</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[help]</rt>
                    <span class="word">help</span>
                    <rt class="below">帮助</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">好像有人会来帮助他。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wʌn]</rt>
                    <span class="word">One</span>
                    <rt class="below">一</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bloʊ]</rt>
                    <span class="word">blow</span>
                    <rt class="below">吹</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">一击，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈprɑːpərli]</rt>
                    <span class="word">properly</span>
                    <rt class="below">适当地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pleɪst]</rt>
                    <span class="word">placed</span>
                    <rt class="below">放置</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">正确放置，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kʊd; kəd]</rt>
                    <span class="word">could</span>
                    <rt class="below">可以</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɪl]</rt>
                    <span class="word">kill</span>
                    <rt class="below">杀</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[naʊ]</rt>
                    <span class="word">now</span>
                    <rt class="below">现在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">现在就可以杀了他。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[blʌd]</rt>
                    <span class="word">Blood</span>
                    <rt class="below">血</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[frʌm; frəm]</rt>
                    <span class="word">from</span>
                    <rt class="below">从</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡæʃ]</rt>
                    <span class="word">gash</span>
                    <rt class="below">伤口</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hed]</rt>
                    <span class="word">head</span>
                    <rt class="below">头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">—</rt>
                    <span class="word">—</span>
                    <rt class="below">—</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪtʃ]</rt>
                    <span class="word">which</span>
                    <rt class="below">哪个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɑː.ðərz]</rt>
                    <span class="word">father's</span>
                    <rt class="below">父亲的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɜːrst]</rt>
                    <span class="word">first</span>
                    <rt class="below">第一的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈefərt]</rt>
                    <span class="word">effort</span>
                    <rt class="below">努力</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">—</rt>
                    <span class="word">—</span>
                    <rt class="below">—</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈtrɪklɪŋ]</rt>
                    <span class="word">trickling</span>
                    <rt class="below">涓涓细流</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈkrɔːs]</rt>
                    <span class="word">across</span>
                    <rt class="below">穿过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[feɪs]</rt>
                    <span class="word">face</span>
                    <rt class="below">脸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他头上的伤口——这是他父亲的第一次尝试——鲜血从他的脸上流淌而出。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[æd]</rt>
                    <span class="word">Add</span>
                    <rt class="below">添加</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">除此之外，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[left]</rt>
                    <span class="word">left</span>
                    <rt class="below">左边</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">eye</span>
                    <rt class="below">眼睛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈblaɪndɪd]</rt>
                    <span class="word">blinded</span>
                    <rt class="below">盲目</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他的左眼失明了；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">but</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[skwɪnts]</rt>
                    <span class="word">squints</span>
                    <rt class="below">斜视</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsaɪdweɪz]</rt>
                    <span class="word">sideways</span>
                    <rt class="below">侧身</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但如果他斜眼看，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raɪt]</rt>
                    <span class="word">right</span>
                    <rt class="below">正确的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">eye</span>
                    <rt class="below">眼睛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæn; kən]</rt>
                    <span class="word">can</span>
                    <rt class="below">能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siː]</rt>
                    <span class="word">see</span>
                    <rt class="below">看</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈstɪtʃɪŋ]</rt>
                    <span class="word">stitching</span>
                    <rt class="below">缝合</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɑː.ðərz]</rt>
                    <span class="word">father's</span>
                    <rt class="below">父亲的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[buːt]</rt>
                    <span class="word">boot</span>
                    <rt class="below">引导</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˌʌnˈrævəlɪŋ]</rt>
                    <span class="word">unraveling</span>
                    <rt class="below">解开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他用右眼看到父亲的靴子的缝线散开了。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">The</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[twaɪn]</rt>
                    <span class="word">twine</span>
                    <rt class="below">缠绕</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæz; həz]</rt>
                    <span class="word">has</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sprʌŋ]</rt>
                    <span class="word">sprung</span>
                    <rt class="below">弹跳</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[klɪr]</rt>
                    <span class="word">clear</span>
                    <rt class="below">清除</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈleðər]</rt>
                    <span class="word">leather</span>
                    <rt class="below">皮革</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">麻绳已从皮革中弹起，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɑːrd]</rt>
                    <span class="word">hard</span>
                    <rt class="below">难的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːt]</rt>
                    <span class="word">knot</span>
                    <rt class="below">结</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæz; həz]</rt>
                    <span class="word">has</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɔːt]</rt>
                    <span class="word">caught</span>
                    <rt class="below">捕捉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈaɪbraʊ]</rt>
                    <span class="word">eyebrow</span>
                    <rt class="below">眉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊpənd]</rt>
                    <span class="word">opened</span>
                    <rt class="below">打开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈnʌðər]</rt>
                    <span class="word">another</span>
                    <rt class="below">其他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʌt]</rt>
                    <span class="word">cut</span>
                    <rt class="below">切</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">一个硬结钩住了他的眉毛，又划开了一道口子。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[soʊ]</rt>
                    <span class="word">So</span>
                    <rt class="below">所以</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[naʊ]</rt>
                    <span class="word">now</span>
                    <rt class="below">现在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡet]</rt>
                    <span class="word">get</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">!</rt>
                    <span class="word">!</span>
                    <rt class="below">!</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “那么现在就起来！”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈrɔːrɪŋ]</rt>
                    <span class="word">roaring</span>
                    <rt class="below">咆哮</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[daʊn]</rt>
                    <span class="word">down</span>
                    <rt class="below">向下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æt; ət]</rt>
                    <span class="word">at</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">沃尔特朝他咆哮，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈwɜːrkɪŋ]</rt>
                    <span class="word">working</span>
                    <rt class="below">在职的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wer]</rt>
                    <span class="word">where</span>
                    <rt class="below">在哪里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɪk]</rt>
                    <span class="word">kick</span>
                    <rt class="below">踢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nekst]</rt>
                    <span class="word">next</span>
                    <rt class="below">下一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">想着下一步该踢他哪里。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lɪfts]</rt>
                    <span class="word">lifts</span>
                    <rt class="below">升降机</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hed]</rt>
                    <span class="word">head</span>
                    <rt class="below">头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æn; ən]</rt>
                    <span class="word">an</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪntʃ]</rt>
                    <span class="word">inch</span>
                    <rt class="below">英寸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːr]</rt>
                    <span class="word">or</span>
                    <rt class="below">或者</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː]</rt>
                    <span class="word">two</span>
                    <rt class="below">二</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他把头抬起一两英寸，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[muːvz]</rt>
                    <span class="word">moves</span>
                    <rt class="below">移动</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɔːrwərd]</rt>
                    <span class="word">forward</span>
                    <rt class="below">向前</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">并继续前进，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbeli]</rt>
                    <span class="word">belly</span>
                    <rt class="below">腹部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">在他的腹部，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈtraɪɪŋ]</rt>
                    <span class="word">trying</span>
                    <rt class="below">尝试</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪˈðaʊt]</rt>
                    <span class="word">without</span>
                    <rt class="below">没有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪkˈspoʊzɪŋ]</rt>
                    <span class="word">exposing</span>
                    <rt class="below">暴露</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hændz]</rt>
                    <span class="word">hands</span>
                    <rt class="below">手</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">尽量不露出双手，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪtʃ]</rt>
                    <span class="word">which</span>
                    <rt class="below">哪个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɛnˈdʒɔɪz]</rt>
                    <span class="word">enjoys</span>
                    <rt class="below">享受</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈstæmpɪŋ]</rt>
                    <span class="word">stamping</span>
                    <rt class="below">冲压</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">沃尔特喜欢在上面踩踏。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">What</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːr; ər]</rt>
                    <span class="word">are</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “你是做什么的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[æn; ən]</rt>
                    <span class="word">an</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[iːl]</rt>
                    <span class="word">eel</span>
                    <rt class="below">鳗鱼</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “鳗鱼？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈperənt]</rt>
                    <span class="word">parent</span>
                    <rt class="below">父母</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æsks]</rt>
                    <span class="word">asks</span>
                    <rt class="below">问</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他的父母问道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ trɔts ]</rt>
                    <span class="word">trots</span>
                    <rt class="below">小跑</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbækwərd]</rt>
                    <span class="word">backward</span>
                    <rt class="below">落后</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他向后小跑，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈɡæðərz]</rt>
                    <span class="word">gathers</span>
                    <rt class="below">聚集</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[peɪs]</rt>
                    <span class="word">pace</span>
                    <rt class="below">步伐</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">加快步伐，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[eɪmz]</rt>
                    <span class="word">aims</span>
                    <rt class="below">目标</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈnʌðər]</rt>
                    <span class="word">another</span>
                    <rt class="below">其他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɪk]</rt>
                    <span class="word">kick</span>
                    <rt class="below">踢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">并瞄准了另一脚。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">It</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːks]</rt>
                    <span class="word">knocks</span>
                    <rt class="below">敲门</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[læst]</rt>
                    <span class="word">last</span>
                    <rt class="below">最后的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[breθ]</rt>
                    <span class="word">breath</span>
                    <rt class="below">气息</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">它使他失去了最后一口气；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɪŋks]</rt>
                    <span class="word">thinks</span>
                    <rt class="below">认为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[meɪ]</rt>
                    <span class="word">may</span>
                    <rt class="below">可能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biː; bi]</rt>
                    <span class="word">be</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[læst]</rt>
                    <span class="word">last</span>
                    <rt class="below">最后的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他认为这可能是他的最后一次了。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">His</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɔːrhed]</rt>
                    <span class="word">forehead</span>
                    <rt class="below">前额</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rɪˈtɜːrn]</rt>
                    <span class="word">returns</span>
                    <rt class="below">返回</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡraʊnd]</rt>
                    <span class="word">ground</span>
                    <rt class="below">地面</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他的额头回到地面；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[laɪz]</rt>
                    <span class="word">lies</span>
                    <rt class="below">谎言</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈweɪtɪŋ]</rt>
                    <span class="word">waiting</span>
                    <rt class="below">等待</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他躺在那里等待，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dʒʌmp]</rt>
                    <span class="word">jump</span>
                    <rt class="below">跳</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">让沃尔特跳到他身上。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">The</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɔːɡ]</rt>
                    <span class="word">dog</span>
                    <rt class="below">狗</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">这只狗，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈbelə]</rt>
                    <span class="word">Bella</span>
                    <rt class="below">贝拉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">贝拉，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ 'bɑ:kiŋ ]</rt>
                    <span class="word">barking</span>
                    <rt class="below">叫声</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">正在吠叫，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃʌt]</rt>
                    <span class="word">shut</span>
                    <rt class="below">关闭</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈweɪ]</rt>
                    <span class="word">away</span>
                    <rt class="below">离开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æn; ən]</rt>
                    <span class="word">an</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈaʊthaʊs]</rt>
                    <span class="word">outhouse</span>
                    <rt class="below">户外厕所</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">关在户外厕所里。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪl]</rt>
                    <span class="word">I'll</span>
                    <rt class="below">患病的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[mɪs]</rt>
                    <span class="word">miss</span>
                    <rt class="below">错过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɔːɡ]</rt>
                    <span class="word">dog</span>
                    <rt class="below">狗</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我会想念我的狗，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɪŋks]</rt>
                    <span class="word">thinks</span>
                    <rt class="below">认为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他想。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">The</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jɑːrd]</rt>
                    <span class="word">yard</span>
                    <rt class="below">院子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[smelz]</rt>
                    <span class="word">smells</span>
                    <rt class="below">气味</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪr]</rt>
                    <span class="word">beer</span>
                    <rt class="below">啤酒</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[blʌd]</rt>
                    <span class="word">blood</span>
                    <rt class="below">血</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">院子里弥漫着啤酒和血腥味。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈsʌmwʌn]</rt>
                    <span class="word">Someone</span>
                    <rt class="below">某人</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈʃaʊtɪŋ]</rt>
                    <span class="word">shouting</span>
                    <rt class="below">大喊</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">有人在喊，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[daʊn]</rt>
                    <span class="word">down</span>
                    <rt class="below">向下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈrɪvərbæŋk]</rt>
                    <span class="word">riverbank</span>
                    <rt class="below">河岸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">在河岸上。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈnʌθɪŋ]</rt>
                    <span class="word">Nothing</span>
                    <rt class="below">没有什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːrts]</rt>
                    <span class="word">hurts</span>
                    <rt class="below">伤人</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">没什么伤害，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɔːr]</rt>
                    <span class="word">or</span>
                    <rt class="below">或者</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pərˈhæps]</rt>
                    <span class="word">perhaps</span>
                    <rt class="below">也许</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪts]</rt>
                    <span class="word">it's</span>
                    <rt class="below">它是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈevriθɪŋ]</rt>
                    <span class="word">everything</span>
                    <rt class="below">一切</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːrts]</rt>
                    <span class="word">hurts</span>
                    <rt class="below">伤人</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">或许一切都令人痛苦，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bɪˈkəz, bɪˈkɔːz]</rt>
                    <span class="word">because</span>
                    <rt class="below">因为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">there</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊ]</rt>
                    <span class="word">no</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈseprət]</rt>
                    <span class="word">separate</span>
                    <rt class="below">分离</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[peɪn]</rt>
                    <span class="word">pain</span>
                    <rt class="below">疼痛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæn; kən]</rt>
                    <span class="word">can</span>
                    <rt class="below">能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pɪk]</rt>
                    <span class="word">pick</span>
                    <rt class="below">挑选</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">因为他无法分辨出哪一种疼痛。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">But</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[koʊld]</rt>
                    <span class="word">cold</span>
                    <rt class="below">寒冷的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[straɪks]</rt>
                    <span class="word">strikes</span>
                    <rt class="below">罢工</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但寒冷袭击了他，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[dʒʌst]</rt>
                    <span class="word">just</span>
                    <rt class="below">只是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌn]</rt>
                    <span class="word">one</span>
                    <rt class="below">一</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pleɪs]</rt>
                    <span class="word">place</span>
                    <rt class="below">地方</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">:</rt>
                    <span class="word">:</span>
                    <rt class="below">:</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">只需在一个地方：</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[dʒʌst]</rt>
                    <span class="word">just</span>
                    <rt class="below">只是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θruː]</rt>
                    <span class="word">through</span>
                    <rt class="below">通过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈtʃiːkboʊn]</rt>
                    <span class="word">cheekbone</span>
                    <rt class="below">颧骨</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">as</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rests]</rt>
                    <span class="word">rests</span>
                    <rt class="below">休息</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkɑːblz]</rt>
                    <span class="word">cobbles</span>
                    <rt class="below">鹅卵石</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">子弹刚好穿过他放在鹅卵石上的颧骨。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lʊk]</rt>
                    <span class="word">Look</span>
                    <rt class="below">看</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[naʊ]</rt>
                    <span class="word">now</span>
                    <rt class="below">现在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “现在看看，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[lʊk]</rt>
                    <span class="word">look</span>
                    <rt class="below">看</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[naʊ]</rt>
                    <span class="word">now</span>
                    <rt class="below">现在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">现在看看，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbeloʊz]</rt>
                    <span class="word">bellows</span>
                    <rt class="below">波纹管</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">沃尔特吼道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɑːps]</rt>
                    <span class="word">hops</span>
                    <rt class="below">酒花</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌn]</rt>
                    <span class="word">one</span>
                    <rt class="below">一</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fʊt]</rt>
                    <span class="word">foot</span>
                    <rt class="below">脚</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他单脚跳跃，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">as</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdænsɪŋ]</rt>
                    <span class="word">dancing</span>
                    <rt class="below">跳舞</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">就像在跳舞一样。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lʊk]</rt>
                    <span class="word">Look</span>
                    <rt class="below">看</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">what</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪv]</rt>
                    <span class="word">I've</span>
                    <rt class="below">我已经</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dʌn]</rt>
                    <span class="word">done</span>
                    <rt class="below">完毕</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “看看我做了什么。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bɜːrst]</rt>
                    <span class="word">Burst</span>
                    <rt class="below">爆裂</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[buːt]</rt>
                    <span class="word">boot</span>
                    <rt class="below">引导</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我的靴子破了，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈkɪkɪŋ]</rt>
                    <span class="word">kicking</span>
                    <rt class="below">踢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jʊr; jər]</rt>
                    <span class="word">your</span>
                    <rt class="below">你的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hed]</rt>
                    <span class="word">head</span>
                    <rt class="below">头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">踢你的头。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪntʃ]</rt>
                    <span class="word">Inch</span>
                    <rt class="below">英寸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[baɪ]</rt>
                    <span class="word">by</span>
                    <rt class="below">经过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪntʃ]</rt>
                    <span class="word">inch</span>
                    <rt class="below">英寸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">一寸一寸地。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪntʃ]</rt>
                    <span class="word">Inch</span>
                    <rt class="below">英寸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[baɪ]</rt>
                    <span class="word">by</span>
                    <rt class="below">经过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪntʃ]</rt>
                    <span class="word">inch</span>
                    <rt class="below">英寸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɔːrwərd]</rt>
                    <span class="word">forward</span>
                    <rt class="below">向前</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">一寸一寸地前进。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈnevər]</rt>
                    <span class="word">Never</span>
                    <rt class="below">绝不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪnd]</rt>
                    <span class="word">mind</span>
                    <rt class="below">头脑</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɔːlz]</rt>
                    <span class="word">calls</span>
                    <rt class="below">调用</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æn; ən]</rt>
                    <span class="word">an</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[iːl]</rt>
                    <span class="word">eel</span>
                    <rt class="below">鳗鱼</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːr]</rt>
                    <span class="word">or</span>
                    <rt class="below">或者</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːrm]</rt>
                    <span class="word">worm</span>
                    <rt class="below">蠕虫</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːr]</rt>
                    <span class="word">or</span>
                    <rt class="below">或者</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sneɪk]</rt>
                    <span class="word">snake</span>
                    <rt class="below">蛇</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">不管他叫你鳗鱼、虫子还是蛇，都不要介意。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hed]</rt>
                    <span class="word">Head</span>
                    <rt class="below">头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[daʊn]</rt>
                    <span class="word">down</span>
                    <rt class="below">向下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">低下头，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[doʊnt]</rt>
                    <span class="word">don't</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[prəˈvoʊk]</rt>
                    <span class="word">provoke</span>
                    <rt class="below">惹</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">别激怒他。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">His</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊz]</rt>
                    <span class="word">nose</span>
                    <rt class="below">鼻子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈklɑːtɪd]</rt>
                    <span class="word">clotted</span>
                    <rt class="below">凝结</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[blʌd]</rt>
                    <span class="word">blood</span>
                    <rt class="below">血</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæz; həz]</rt>
                    <span class="word">has</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊpən]</rt>
                    <span class="word">open</span>
                    <rt class="below">打开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maʊθ]</rt>
                    <span class="word">mouth</span>
                    <rt class="below">嘴</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[briːð]</rt>
                    <span class="word">breathe</span>
                    <rt class="below">呼吸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他的鼻子里充满了血，他必须张开嘴才能呼吸。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">His</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɑː.ðərz]</rt>
                    <span class="word">father's</span>
                    <rt class="below">父亲的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmoʊmənteri]</rt>
                    <span class="word">momentary</span>
                    <rt class="below">瞬间</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɪˈstrækʃ(ə)n]</rt>
                    <span class="word">distraction</span>
                    <rt class="below">分心</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æt; ət]</rt>
                    <span class="word">at</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lɔːs]</rt>
                    <span class="word">loss</span>
                    <rt class="below">损失</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡʊd]</rt>
                    <span class="word">good</span>
                    <rt class="below">好的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[buːt]</rt>
                    <span class="word">boot</span>
                    <rt class="below">引导</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈlaʊz]</rt>
                    <span class="word">allows</span>
                    <rt class="below">允许</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈliːʒər]</rt>
                    <span class="word">leisure</span>
                    <rt class="below">闲暇</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈvɑːmɪt]</rt>
                    <span class="word">vomit</span>
                    <rt class="below">呕吐</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他父亲因为丢失了好靴子而一时分心，这让他有时间呕吐。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæts]</rt>
                    <span class="word">That's</span>
                    <rt class="below">这就是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raɪt]</rt>
                    <span class="word">right</span>
                    <rt class="below">正确的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “这是正确的，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jɛlz]</rt>
                    <span class="word">yells</span>
                    <rt class="below">大喊</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">沃尔特大喊。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[spjuː]</rt>
                    <span class="word">Spew</span>
                    <rt class="below">喷出</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈevriwer]</rt>
                    <span class="word">everywhere</span>
                    <rt class="below">到处</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “到处喷。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[spjuː]</rt>
                    <span class="word">Spew</span>
                    <rt class="below">喷出</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈevriwer]</rt>
                    <span class="word">everywhere</span>
                    <rt class="below">到处</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">到处喷洒，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡʊd]</rt>
                    <span class="word">good</span>
                    <rt class="below">好的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkɑːblz]</rt>
                    <span class="word">cobbles</span>
                    <rt class="below">鹅卵石</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">在我的鹅卵石路上。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʌm]</rt>
                    <span class="word">Come</span>
                    <rt class="below">来</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “快点，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bɔɪ]</rt>
                    <span class="word">boy</span>
                    <rt class="below">男生</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">男生，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɡet]</rt>
                    <span class="word">get</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">起床。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[lɛts]</rt>
                    <span class="word">Let's</span>
                    <rt class="below">让我们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siː]</rt>
                    <span class="word">see</span>
                    <rt class="below">看</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡet]</rt>
                    <span class="word">get</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">看看你能否站起来。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[baɪ]</rt>
                    <span class="word">By</span>
                    <rt class="below">经过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[blʌd]</rt>
                    <span class="word">blood</span>
                    <rt class="below">血</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkriːpɪŋ]</rt>
                    <span class="word">creeping</span>
                    <rt class="below">爬行</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kraɪst]</rt>
                    <span class="word">Christ</span>
                    <rt class="below">基督</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">借着基督的血，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[stænd]</rt>
                    <span class="word">stand</span>
                    <rt class="below">站立</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jʊr; jər]</rt>
                    <span class="word">your</span>
                    <rt class="below">你的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fiːt]</rt>
                    <span class="word">feet</span>
                    <rt class="below">脚</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">站起来。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈkriːpɪŋ]</rt>
                    <span class="word">Creeping</span>
                    <rt class="below">爬行</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kraɪst]</rt>
                    <span class="word">Christ</span>
                    <rt class="below">基督</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">匍匐基督？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɪŋks]</rt>
                    <span class="word">thinks</span>
                    <rt class="below">认为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他想。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">What</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dʌz]</rt>
                    <span class="word">does</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miːn]</rt>
                    <span class="word">mean</span>
                    <rt class="below">意思是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他是什么意思？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">His</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hed]</rt>
                    <span class="word">head</span>
                    <rt class="below">头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɜːrnz]</rt>
                    <span class="word">turns</span>
                    <rt class="below">转弯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsaɪdweɪz]</rt>
                    <span class="word">sideways</span>
                    <rt class="below">侧身</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他的头转向一边，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[her]</rt>
                    <span class="word">hair</span>
                    <rt class="below">头发</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rests]</rt>
                    <span class="word">rests</span>
                    <rt class="below">休息</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[oʊn]</rt>
                    <span class="word">own</span>
                    <rt class="below">自己的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈvɑːmɪt]</rt>
                    <span class="word">vomit</span>
                    <rt class="below">呕吐</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他的头发浸在自己的呕吐物里，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɔːɡ]</rt>
                    <span class="word">dog</span>
                    <rt class="below">狗</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɑrks]</rt>
                    <span class="word">barks</span>
                    <rt class="below">树皮</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">狗叫了，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rɔːrz]</rt>
                    <span class="word">roars</span>
                    <rt class="below">咆哮</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">沃尔特咆哮道，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbelz]</rt>
                    <span class="word">bells</span>
                    <rt class="below">钟声</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[piːl]</rt>
                    <span class="word">peal</span>
                    <rt class="below">皮尔</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈkrɔːs]</rt>
                    <span class="word">across</span>
                    <rt class="below">穿过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːtər]</rt>
                    <span class="word">water</span>
                    <rt class="below">水</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">钟声在水面上回荡。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fiːlz]</rt>
                    <span class="word">feels</span>
                    <rt class="below">感觉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[senˈseɪʃ(ə)n]</rt>
                    <span class="word">sensation</span>
                    <rt class="below">感觉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmuːvmənt]</rt>
                    <span class="word">movement</span>
                    <rt class="below">移动</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他感觉到一种运动，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">as</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɪlθi]</rt>
                    <span class="word">filthy</span>
                    <rt class="below">污秽</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡraʊnd]</rt>
                    <span class="word">ground</span>
                    <rt class="below">地面</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæz; həz]</rt>
                    <span class="word">has</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈkʌm]</rt>
                    <span class="word">become</span>
                    <rt class="below">变得</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[temz]</rt>
                    <span class="word">Thames</span>
                    <rt class="below">泰晤士河</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">仿佛污秽的地面变成了泰晤士河。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">It</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɪvz]</rt>
                    <span class="word">gives</span>
                    <rt class="below">给出</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sweɪz]</rt>
                    <span class="word">sways</span>
                    <rt class="below">摇摆</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈniːθ]</rt>
                    <span class="word">beneath</span>
                    <rt class="below">下面</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">它在他下面摇曳；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lets]</rt>
                    <span class="word">lets</span>
                    <rt class="below">让我们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[breθ]</rt>
                    <span class="word">breath</span>
                    <rt class="below">气息</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他呼出一口气，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wʌn]</rt>
                    <span class="word">one</span>
                    <rt class="below">一</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡreɪt]</rt>
                    <span class="word">great</span>
                    <rt class="below">伟大的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfaɪn(ə)l]</rt>
                    <span class="word">final</span>
                    <rt class="below">最终的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡæsp]</rt>
                    <span class="word">gasp</span>
                    <rt class="below">喘气</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">最后一次伟大的喘息。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[juːv]</rt>
                    <span class="word">You've</span>
                    <rt class="below">你已经</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dʌn]</rt>
                    <span class="word">done</span>
                    <rt class="below">完毕</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[taɪm]</rt>
                    <span class="word">time</span>
                    <rt class="below">时间</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">这次你成功了，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[vɔɪs]</rt>
                    <span class="word">voice</span>
                    <rt class="below">嗓音</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[telz]</rt>
                    <span class="word">tells</span>
                    <rt class="below">告诉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">一个声音告诉沃尔特。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">But</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkloʊzɪz]</rt>
                    <span class="word">closes</span>
                    <rt class="below">关闭</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪrz]</rt>
                    <span class="word">ears</span>
                    <rt class="below">耳朵</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但他却掩耳不听，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɔːr]</rt>
                    <span class="word">or</span>
                    <rt class="below">或者</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɑːd]</rt>
                    <span class="word">God</span>
                    <rt class="below">上帝</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkloʊzɪz]</rt>
                    <span class="word">closes</span>
                    <rt class="below">关闭</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðem; ðəm]</rt>
                    <span class="word">them</span>
                    <rt class="below">他们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">或者上帝为他关闭了它们。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pʊld]</rt>
                    <span class="word">pulled</span>
                    <rt class="below">拉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˌdaʊnˈstriːm]</rt>
                    <span class="word">downstream</span>
                    <rt class="below">下游</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他被拉向下游，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[diːp]</rt>
                    <span class="word">deep</span>
                    <rt class="below">深的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[blæk]</rt>
                    <span class="word">black</span>
                    <rt class="below">黑色的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[taɪd]</rt>
                    <span class="word">tide</span>
                    <rt class="below">潮</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">在深黑色的潮水中。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">The</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nekst]</rt>
                    <span class="word">next</span>
                    <rt class="below">下一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɪŋ]</rt>
                    <span class="word">thing</span>
                    <rt class="below">事物</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊz]</rt>
                    <span class="word">knows</span>
                    <rt class="below">知道</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他接下来知道的是，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɔːlmoʊst]</rt>
                    <span class="word">almost</span>
                    <rt class="below">几乎</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nuːn]</rt>
                    <span class="word">noon</span>
                    <rt class="below">中午</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">快到中午了，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[prɑːpt]</rt>
                    <span class="word">propped</span>
                    <rt class="below">支撑</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdɔːrweɪ]</rt>
                    <span class="word">doorway</span>
                    <rt class="below">门口</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈpeɡəsəs]</rt>
                    <span class="word">Pegasus</span>
                    <rt class="below">飞马</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈflaɪɪŋ]</rt>
                    <span class="word">Flying</span>
                    <rt class="below">飞行</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɔːrs]</rt>
                    <span class="word">Horse</span>
                    <rt class="below">马</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他被支撑在飞马珀伽索斯的门口。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">His</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsɪstər]</rt>
                    <span class="word">sister</span>
                    <rt class="below">姐姐</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkʌmɪŋ]</rt>
                    <span class="word">coming</span>
                    <rt class="below">未来</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[frʌm; frəm]</rt>
                    <span class="word">from</span>
                    <rt class="below">从</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkɪtʃɪn]</rt>
                    <span class="word">kitchen</span>
                    <rt class="below">厨房</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ræk]</rt>
                    <span class="word">rack</span>
                    <rt class="below">架子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɑːt]</rt>
                    <span class="word">hot</span>
                    <rt class="below">热的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[paɪz]</rt>
                    <span class="word">pies</span>
                    <rt class="below">馅饼</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hændz]</rt>
                    <span class="word">hands</span>
                    <rt class="below">手</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他的妹妹凯特手里拿着一架热馅饼从厨房走出来。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wen]</rt>
                    <span class="word">When</span>
                    <rt class="below">什么时候</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">she</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siːz]</rt>
                    <span class="word">sees</span>
                    <rt class="below">看到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">she</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɔːlmoʊst]</rt>
                    <span class="word">almost</span>
                    <rt class="below">几乎</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[drɑːps]</rt>
                    <span class="word">drops</span>
                    <rt class="below">滴</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðem; ðəm]</rt>
                    <span class="word">them</span>
                    <rt class="below">他们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">当她看到他时，她差点把它们掉在地上。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">Her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maʊθ]</rt>
                    <span class="word">mouth</span>
                    <rt class="below">嘴</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ 'əupənz ]</rt>
                    <span class="word">opens</span>
                    <rt class="below">打开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈstɑːnɪʃmənt]</rt>
                    <span class="word">astonishment</span>
                    <rt class="below">惊讶</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她惊讶地张大了嘴巴。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lʊk]</rt>
                    <span class="word">Look</span>
                    <rt class="below">看</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æt; ət]</rt>
                    <span class="word">at</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">!</rt>
                    <span class="word">!</span>
                    <rt class="below">!</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “看看你！”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “凯特，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[doʊnt]</rt>
                    <span class="word">don't</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃaʊt]</rt>
                    <span class="word">shout</span>
                    <rt class="below">喊</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">别喊叫，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːrts]</rt>
                    <span class="word">hurts</span>
                    <rt class="below">伤人</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miː; mi]</rt>
                    <span class="word">me</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “这让我很痛苦。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">She</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɔːl]</rt>
                    <span class="word">bawls</span>
                    <rt class="below">大声叫喊</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈhʌzbənd]</rt>
                    <span class="word">husband</span>
                    <rt class="below">丈夫</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">:</rt>
                    <span class="word">:</span>
                    <rt class="below">:</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她大声呼喊着她的丈夫：</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmz]</rt>
                    <span class="word">Williams</span>
                    <rt class="below">威廉姆斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">!</rt>
                    <span class="word">!</span>
                    <rt class="below">!</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “摩根·威廉姆斯！”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">She</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈroʊˌteɪts]</rt>
                    <span class="word">rotates</span>
                    <rt class="below">旋转</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[spɑːt]</rt>
                    <span class="word">spot</span>
                    <rt class="below">点</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她原地旋转，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪz]</rt>
                    <span class="word">eyes</span>
                    <rt class="below">眼睛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[waɪld]</rt>
                    <span class="word">wild</span>
                    <rt class="below">荒野</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">眼神狂野，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[feɪs]</rt>
                    <span class="word">face</span>
                    <rt class="below">脸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[flʌʃt]</rt>
                    <span class="word">flushed</span>
                    <rt class="below">酡</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[frʌm; frəm]</rt>
                    <span class="word">from</span>
                    <rt class="below">从</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈʌvənz]</rt>
                    <span class="word">oven's</span>
                    <rt class="below">烤箱的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːt]</rt>
                    <span class="word">heat</span>
                    <rt class="below">热</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">脸因为烤箱的热气而涨红了。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[teɪk]</rt>
                    <span class="word">Take</span>
                    <rt class="below">拿</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[treɪ]</rt>
                    <span class="word">tray</span>
                    <rt class="below">托盘</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “拿着这个托盘，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈbɑːdi]</rt>
                    <span class="word">body</span>
                    <rt class="below">身体</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɑːd]</rt>
                    <span class="word">God</span>
                    <rt class="below">上帝</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">神的身体，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wer]</rt>
                    <span class="word">where</span>
                    <rt class="below">在哪里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːr; ər]</rt>
                    <span class="word">are</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːl]</rt>
                    <span class="word">all</span>
                    <rt class="below">全部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你们都在哪儿？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ 'ʃivəriŋ ]</rt>
                    <span class="word">shivering</span>
                    <rt class="below">发抖</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[frʌm; frəm]</rt>
                    <span class="word">from</span>
                    <rt class="below">从</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hed]</rt>
                    <span class="word">head</span>
                    <rt class="below">头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fʊt]</rt>
                    <span class="word">foot</span>
                    <rt class="below">脚</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他从头到脚都在发抖，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪɡˈzæktli]</rt>
                    <span class="word">exactly</span>
                    <rt class="below">确切地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[laɪk]</rt>
                    <span class="word">like</span>
                    <rt class="below">喜欢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbelə]</rt>
                    <span class="word">Bella</span>
                    <rt class="below">贝拉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɪd]</rt>
                    <span class="word">did</span>
                    <rt class="below">做过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wen]</rt>
                    <span class="word">when</span>
                    <rt class="below">什么时候</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">she</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fel]</rt>
                    <span class="word">fell</span>
                    <rt class="below">下跌</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːf]</rt>
                    <span class="word">off</span>
                    <rt class="below">离开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[boʊt]</rt>
                    <span class="word">boat</span>
                    <rt class="below">船</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[taɪm]</rt>
                    <span class="word">time</span>
                    <rt class="below">时间</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">就像贝拉那次从船上掉下来时的情况一样。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">A</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɜːrl]</rt>
                    <span class="word">girl</span>
                    <rt class="below">女孩</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rʌnz]</rt>
                    <span class="word">runs</span>
                    <rt class="below">运行</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">一个女孩跑了进来。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">The</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmæstərz]</rt>
                    <span class="word">master's</span>
                    <rt class="below">硕士</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɔːn]</rt>
                    <span class="word">gone</span>
                    <rt class="below">已消失</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[taʊn]</rt>
                    <span class="word">town</span>
                    <rt class="below">镇</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “主人出城了。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊ]</rt>
                    <span class="word">know</span>
                    <rt class="below">知道</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “我知道，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[fuːl]</rt>
                    <span class="word">fool</span>
                    <rt class="below">傻子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">傻子。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">The</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[saɪt]</rt>
                    <span class="word">sight</span>
                    <rt class="below">视线</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbrʌðər]</rt>
                    <span class="word">brother</span>
                    <rt class="below">兄弟</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæd; həd]</rt>
                    <span class="word">had</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈpænɪkt]</rt>
                    <span class="word">panicked</span>
                    <rt class="below">惊慌失措</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈnɑːlɪdʒ]</rt>
                    <span class="word">knowledge</span>
                    <rt class="below">知识</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">看到哥哥后，她惊慌失措，失去了知觉。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">She</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θrʌsts]</rt>
                    <span class="word">thrusts</span>
                    <rt class="below">推力</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[treɪ]</rt>
                    <span class="word">tray</span>
                    <rt class="below">托盘</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æt; ət]</rt>
                    <span class="word">at</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɜːrl]</rt>
                    <span class="word">girl</span>
                    <rt class="below">女孩</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她把托盘推给女孩。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">If</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[liːv]</rt>
                    <span class="word">leave</span>
                    <rt class="below">离开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðem; ðəm]</rt>
                    <span class="word">them</span>
                    <rt class="below">他们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wer]</rt>
                    <span class="word">where</span>
                    <rt class="below">在哪里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæts]</rt>
                    <span class="word">cats</span>
                    <rt class="below">猫</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæn; kən]</rt>
                    <span class="word">can</span>
                    <rt class="below">能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡet]</rt>
                    <span class="word">get</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æt; ət]</rt>
                    <span class="word">at</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðem; ðəm]</rt>
                    <span class="word">them</span>
                    <rt class="below">他们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “如果你把它们放在猫能拿到的地方，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪl]</rt>
                    <span class="word">I'll</span>
                    <rt class="below">患病的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɑːks]</rt>
                    <span class="word">box</span>
                    <rt class="below">盒子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jʊr; jər]</rt>
                    <span class="word">your</span>
                    <rt class="below">你的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪrz]</rt>
                    <span class="word">ears</span>
                    <rt class="below">耳朵</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɪl]</rt>
                    <span class="word">till</span>
                    <rt class="below">直到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siː]</rt>
                    <span class="word">see</span>
                    <rt class="below">看</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[stɑːrz]</rt>
                    <span class="word">stars</span>
                    <rt class="below">星星</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我要打你耳光，打得你眼冒金星。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">Her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hændz]</rt>
                    <span class="word">hands</span>
                    <rt class="below">手</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈempti]</rt>
                    <span class="word">empty</span>
                    <rt class="below">空的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她两手空空，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">she</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[klæsps]</rt>
                    <span class="word">clasps</span>
                    <rt class="below">扣子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðem; ðəm]</rt>
                    <span class="word">them</span>
                    <rt class="below">他们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmoʊmənt]</rt>
                    <span class="word">moment</span>
                    <rt class="below">片刻</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈvaɪələnt]</rt>
                    <span class="word">violent</span>
                    <rt class="below">暴力</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[prer]</rt>
                    <span class="word">prayer</span>
                    <rt class="below">祷告</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她紧紧地握住它们，虔诚地祈祷着。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfaɪtɪŋ]</rt>
                    <span class="word">Fighting</span>
                    <rt class="below">斗争</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈɡen]</rt>
                    <span class="word">again</span>
                    <rt class="below">再次</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “再次战斗，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɔːr]</rt>
                    <span class="word">or</span>
                    <rt class="below">或者</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jʊr; jər]</rt>
                    <span class="word">your</span>
                    <rt class="below">你的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɑːðər]</rt>
                    <span class="word">father</span>
                    <rt class="below">父亲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">还是你的父亲？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[jes]</rt>
                    <span class="word">Yes</span>
                    <rt class="below">是的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">是的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈvɪɡərəsli]</rt>
                    <span class="word">vigorously</span>
                    <rt class="below">大力</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈnɑːdɪŋ]</rt>
                    <span class="word">nodding</span>
                    <rt class="below">点头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">用力地点头，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmeɪkɪŋ]</rt>
                    <span class="word">making</span>
                    <rt class="below">制作</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊz]</rt>
                    <span class="word">nose</span>
                    <rt class="below">鼻子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[drɑːp]</rt>
                    <span class="word">drop</span>
                    <rt class="below">降低</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡaʊt]</rt>
                    <span class="word">gouts</span>
                    <rt class="below">痛风</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[blʌd]</rt>
                    <span class="word">blood</span>
                    <rt class="below">血</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">:</rt>
                    <span class="word">:</span>
                    <rt class="below">:</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">让他的鼻子流出一滩血：</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[jes]</rt>
                    <span class="word">yes</span>
                    <rt class="below">是的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">是的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɪndɪˌkeɪts]</rt>
                    <span class="word">indicates</span>
                    <rt class="below">表示</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪmˈself]</rt>
                    <span class="word">himself</span>
                    <rt class="below">他自己</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他表示，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">as</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[seɪ]</rt>
                    <span class="word">say</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">仿佛在说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪr]</rt>
                    <span class="word">here</span>
                    <rt class="below">这里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">沃尔特在这里。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɔːlz]</rt>
                    <span class="word">calls</span>
                    <rt class="below">调用</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbeɪs(ə)n]</rt>
                    <span class="word">basin</span>
                    <rt class="below">盆地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特要了一个盆，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːtər]</rt>
                    <span class="word">water</span>
                    <rt class="below">水</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">对于水，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːtər]</rt>
                    <span class="word">water</span>
                    <rt class="below">水</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbeɪs(ə)n]</rt>
                    <span class="word">basin</span>
                    <rt class="below">盆地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">对于盆里的水，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[klɔːθ]</rt>
                    <span class="word">cloth</span>
                    <rt class="below">布</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">对于一块布，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdev(ə)l]</rt>
                    <span class="word">devil</span>
                    <rt class="below">魔鬼</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raɪz]</rt>
                    <span class="word">rise</span>
                    <rt class="below">上升</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">让魔鬼崛起，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[raɪt]</rt>
                    <span class="word">right</span>
                    <rt class="below">正确的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[naʊ]</rt>
                    <span class="word">now</span>
                    <rt class="below">现在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">现在，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[teɪk]</rt>
                    <span class="word">take</span>
                    <rt class="below">拿</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈweɪ]</rt>
                    <span class="word">away</span>
                    <rt class="below">离开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsɜːrvənt]</rt>
                    <span class="word">servant</span>
                    <rt class="below">仆人</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">并带走他的仆人沃尔特。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sɪt]</rt>
                    <span class="word">Sit</span>
                    <rt class="below">坐</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[daʊn]</rt>
                    <span class="word">down</span>
                    <rt class="below">向下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈfɔːr]</rt>
                    <span class="word">before</span>
                    <rt class="below">前</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːl]</rt>
                    <span class="word">fall</span>
                    <rt class="below">落下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[daʊn]</rt>
                    <span class="word">down</span>
                    <rt class="below">向下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “快坐下，不然你会摔倒。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[traɪz]</rt>
                    <span class="word">tries</span>
                    <rt class="below">尝试</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪkˈspleɪn]</rt>
                    <span class="word">explain</span>
                    <rt class="below">解释</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæz; həz]</rt>
                    <span class="word">has</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dʒʌst]</rt>
                    <span class="word">just</span>
                    <rt class="below">只是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɑːt]</rt>
                    <span class="word">got</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他试图解释说他刚刚起床。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">Out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jɑːrd]</rt>
                    <span class="word">yard</span>
                    <rt class="below">院子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">出了院子。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">It</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʊd; kəd]</rt>
                    <span class="word">could</span>
                    <rt class="below">可以</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biː; bi]</rt>
                    <span class="word">be</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æn; ən]</rt>
                    <span class="word">an</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈaʊər]</rt>
                    <span class="word">hour</span>
                    <rt class="below">小时</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈɡoʊ]</rt>
                    <span class="word">ago</span>
                    <rt class="below">前</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">可能是一个小时前，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʊd; kəd]</rt>
                    <span class="word">could</span>
                    <rt class="below">可以</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈiːv(ə)n]</rt>
                    <span class="word">even</span>
                    <rt class="below">甚至</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biː; bi]</rt>
                    <span class="word">be</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[deɪ]</rt>
                    <span class="word">day</span>
                    <rt class="below">天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">甚至可能是一天，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːl]</rt>
                    <span class="word">all</span>
                    <rt class="below">全部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊz]</rt>
                    <span class="word">knows</span>
                    <rt class="below">知道</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">据他所知，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[təˈdeɪ]</rt>
                    <span class="word">today</span>
                    <rt class="below">今天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪt]</rt>
                    <span class="word">might</span>
                    <rt class="below">可能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biː; bi]</rt>
                    <span class="word">be</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[təˈmɑːroʊ]</rt>
                    <span class="word">tomorrow</span>
                    <rt class="below">明天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">今天可能就是明天；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪkˈsept]</rt>
                    <span class="word">except</span>
                    <rt class="below">除了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæd; həd]</rt>
                    <span class="word">had</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[leɪn]</rt>
                    <span class="word">lain</span>
                    <rt class="below">莱恩</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">there</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[deɪ]</rt>
                    <span class="word">day</span>
                    <rt class="below">天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但如果他在那儿躺了一天，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈʃʊrli]</rt>
                    <span class="word">surely</span>
                    <rt class="below">一定</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈiːðər]</rt>
                    <span class="word">either</span>
                    <rt class="below">任何一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʊd]</rt>
                    <span class="word">would</span>
                    <rt class="below">会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʌm]</rt>
                    <span class="word">come</span>
                    <rt class="below">来</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɪld]</rt>
                    <span class="word">killed</span>
                    <rt class="below">被杀</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">肯定要么是沃尔特来杀了他，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbiːɪŋ]</rt>
                    <span class="word">being</span>
                    <rt class="below">存在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[weɪ]</rt>
                    <span class="word">way</span>
                    <rt class="below">方式</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">因为挡了路，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɔːr]</rt>
                    <span class="word">or</span>
                    <rt class="below">或者</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[waʊndz]</rt>
                    <span class="word">wounds</span>
                    <rt class="below">伤口</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʊd]</rt>
                    <span class="word">would</span>
                    <rt class="below">会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈklɑːtɪd]</rt>
                    <span class="word">clotted</span>
                    <rt class="below">凝结</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪt]</rt>
                    <span class="word">bit</span>
                    <rt class="below">少量</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">或者他的伤口会凝结一点，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[baɪ]</rt>
                    <span class="word">by</span>
                    <rt class="below">经过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[naʊ]</rt>
                    <span class="word">now</span>
                    <rt class="below">现在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʊd]</rt>
                    <span class="word">would</span>
                    <rt class="below">会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biː; bi]</rt>
                    <span class="word">be</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈhɜːrtɪŋ]</rt>
                    <span class="word">hurting</span>
                    <rt class="below">受伤</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːl]</rt>
                    <span class="word">all</span>
                    <rt class="below">全部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊvər]</rt>
                    <span class="word">over</span>
                    <rt class="below">超过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɔːlmoʊst]</rt>
                    <span class="word">almost</span>
                    <rt class="below">几乎</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː]</rt>
                    <span class="word">too</span>
                    <rt class="below">也</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[stɪf]</rt>
                    <span class="word">stiff</span>
                    <rt class="below">僵硬的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[muːv]</rt>
                    <span class="word">move</span>
                    <rt class="below">移动</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">现在他肯定浑身疼痛，僵硬得几乎无法动弹；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[frʌm; frəm]</rt>
                    <span class="word">from</span>
                    <rt class="below">从</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[diːp]</rt>
                    <span class="word">deep</span>
                    <rt class="below">深的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪkˈspɪriəns]</rt>
                    <span class="word">experience</span>
                    <rt class="below">经验</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɔːltərz]</rt>
                    <span class="word">Walter's</span>
                    <rt class="below">沃尔特的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɪsts]</rt>
                    <span class="word">fists</span>
                    <rt class="below">拳头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[buːts]</rt>
                    <span class="word">boots</span>
                    <rt class="below">靴子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">从对沃尔特的拳头和靴子的深刻体验中，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊz]</rt>
                    <span class="word">knows</span>
                    <rt class="below">知道</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsekənd]</rt>
                    <span class="word">second</span>
                    <rt class="below">第二</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[deɪ]</rt>
                    <span class="word">day</span>
                    <rt class="below">天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæn; kən]</rt>
                    <span class="word">can</span>
                    <rt class="below">能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biː; bi]</rt>
                    <span class="word">be</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːrs]</rt>
                    <span class="word">worse</span>
                    <rt class="below">更糟</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæn; ðən]</rt>
                    <span class="word">than</span>
                    <rt class="below">比</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɜːrst]</rt>
                    <span class="word">first</span>
                    <rt class="below">第一的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他知道第二天可能比第一天更糟糕。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sɪt]</rt>
                    <span class="word">Sit</span>
                    <rt class="below">坐</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “坐。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[doʊnt]</rt>
                    <span class="word">Don't</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɔːk]</rt>
                    <span class="word">talk</span>
                    <rt class="below">讲话</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">别说话，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wen]</rt>
                    <span class="word">When</span>
                    <rt class="below">什么时候</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbeɪs(ə)n]</rt>
                    <span class="word">basin</span>
                    <rt class="below">盆地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʌmz]</rt>
                    <span class="word">comes</span>
                    <rt class="below">來</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">当盆子到来时，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">she</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[stændz]</rt>
                    <span class="word">stands</span>
                    <rt class="below">支架</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊvər]</rt>
                    <span class="word">over</span>
                    <rt class="below">超过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːrks]</rt>
                    <span class="word">works</span>
                    <rt class="below">作品</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈweɪ]</rt>
                    <span class="word">away</span>
                    <rt class="below">离开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她站在他身边，不停地工作，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ 'dæbiŋ ]</rt>
                    <span class="word">dabbing</span>
                    <rt class="below">轻拍</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æt; ət]</rt>
                    <span class="word">at</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kloʊzd]</rt>
                    <span class="word">closed</span>
                    <rt class="below">关闭</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">eye</span>
                    <rt class="below">眼睛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">轻轻擦拭他闭着的眼睛，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈwɜːrkɪŋ]</rt>
                    <span class="word">working</span>
                    <rt class="below">在职的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[smɔːl]</rt>
                    <span class="word">small</span>
                    <rt class="below">小的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsɜːrkl]</rt>
                    <span class="word">circles</span>
                    <rt class="below">界</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raʊnd]</rt>
                    <span class="word">round</span>
                    <rt class="below">圆形的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raʊnd]</rt>
                    <span class="word">round</span>
                    <rt class="below">圆形的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æt; ət]</rt>
                    <span class="word">at</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈherlaɪn]</rt>
                    <span class="word">hairline</span>
                    <rt class="below">发际线</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">在他的发际线周围画一圈又一圈的小圆圈。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">Her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbriːðɪŋ]</rt>
                    <span class="word">breathing</span>
                    <rt class="below">呼吸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈræɡɪd]</rt>
                    <span class="word">ragged</span>
                    <rt class="below">破烂</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[friː]</rt>
                    <span class="word">free</span>
                    <rt class="below">自由的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hænd]</rt>
                    <span class="word">hand</span>
                    <rt class="below">手</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rests]</rt>
                    <span class="word">rests</span>
                    <rt class="below">休息</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈʃoʊldər]</rt>
                    <span class="word">shoulder</span>
                    <rt class="below">肩膀</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她呼吸急促，空着的手搭在他的肩膀上。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">She</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[swerz]</rt>
                    <span class="word">swears</span>
                    <rt class="below">发誓</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈʌndər]</rt>
                    <span class="word">under</span>
                    <rt class="below">在下面</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[breθ]</rt>
                    <span class="word">breath</span>
                    <rt class="below">气息</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她低声咒骂道，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsʌmtaɪmz]</rt>
                    <span class="word">sometimes</span>
                    <rt class="below">有时</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">she</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kraɪz]</rt>
                    <span class="word">cries</span>
                    <rt class="below">哭</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">有时她会哭，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rʌbz]</rt>
                    <span class="word">rubs</span>
                    <rt class="below">摩擦</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bæk]</rt>
                    <span class="word">back</span>
                    <rt class="below">后退</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nek]</rt>
                    <span class="word">neck</span>
                    <rt class="below">脖子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">并揉搓他的后颈，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈwɪspərɪŋ]</rt>
                    <span class="word">whispering</span>
                    <rt class="below">耳语</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">耳语，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">There</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “那里，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hʌʃ]</rt>
                    <span class="word">hush</span>
                    <rt class="below">安静</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">安静，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">there</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">那里，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">as</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːr; wər]</rt>
                    <span class="word">were</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[huː]</rt>
                    <span class="word">who</span>
                    <rt class="below">WHO</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːr; wər]</rt>
                    <span class="word">were</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkraɪɪŋ]</rt>
                    <span class="word">crying</span>
                    <rt class="below">哭泣</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">仿佛是他在哭泣，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðoʊ]</rt>
                    <span class="word">though</span>
                    <rt class="below">尽管</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɪzənt]</rt>
                    <span class="word">isn't</span>
                    <rt class="below">不是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">尽管他不是。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fiːlz]</rt>
                    <span class="word">feels</span>
                    <rt class="below">感觉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">as</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfloʊtɪŋ]</rt>
                    <span class="word">floating</span>
                    <rt class="below">漂浮的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他感觉自己仿佛漂浮着，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">she</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈweɪtɪŋ]</rt>
                    <span class="word">weighting</span>
                    <rt class="below">加权</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɜːrθ]</rt>
                    <span class="word">earth</span>
                    <rt class="below">地球</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她把他压在地上；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʊd]</rt>
                    <span class="word">would</span>
                    <rt class="below">会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[laɪk]</rt>
                    <span class="word">like</span>
                    <rt class="below">喜欢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pʊt]</rt>
                    <span class="word">put</span>
                    <rt class="below">放</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːrmz]</rt>
                    <span class="word">arms</span>
                    <rt class="below">武器</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈraʊnd]</rt>
                    <span class="word">around</span>
                    <rt class="below">大约</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[feɪs]</rt>
                    <span class="word">face</span>
                    <rt class="below">脸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈeɪprən]</rt>
                    <span class="word">apron</span>
                    <rt class="below">围裙</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他想用手臂搂住她，把脸埋在她的围裙里，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rest]</rt>
                    <span class="word">rest</span>
                    <rt class="below">休息</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">there</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈlɪsnɪŋ]</rt>
                    <span class="word">listening</span>
                    <rt class="below">聆听</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈhɑːrtbiːt]</rt>
                    <span class="word">heartbeat</span>
                    <rt class="below">心跳</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">并在那里休息，听着她的心跳。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">But</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdʌzənt]</rt>
                    <span class="word">doesn't</span>
                    <rt class="below">没有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɑːnt]</rt>
                    <span class="word">want</span>
                    <rt class="below">想</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[mes]</rt>
                    <span class="word">mess</span>
                    <rt class="below">混乱</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但他不想让她陷入困境，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɡet]</rt>
                    <span class="word">get</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[blʌd]</rt>
                    <span class="word">blood</span>
                    <rt class="below">血</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːl]</rt>
                    <span class="word">all</span>
                    <rt class="below">全部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[daʊn]</rt>
                    <span class="word">down</span>
                    <rt class="below">向下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[frʌnt]</rt>
                    <span class="word">front</span>
                    <rt class="below">正面</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">让她的前面全是血。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wen]</rt>
                    <span class="word">When</span>
                    <rt class="below">什么时候</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmz]</rt>
                    <span class="word">Williams</span>
                    <rt class="below">威廉姆斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʌmz]</rt>
                    <span class="word">comes</span>
                    <rt class="below">來</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">当摩根·威廉姆斯进来时，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwerɪŋ]</rt>
                    <span class="word">wearing</span>
                    <rt class="below">穿着</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡʊd]</rt>
                    <span class="word">good</span>
                    <rt class="below">好的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[taʊn]</rt>
                    <span class="word">town</span>
                    <rt class="below">镇</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[koʊt]</rt>
                    <span class="word">coat</span>
                    <rt class="below">外套</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他穿着他那件漂亮的城里外套。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lʊks]</rt>
                    <span class="word">looks</span>
                    <rt class="below">看起来</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[welʃ]</rt>
                    <span class="word">Welsh</span>
                    <rt class="below">威尔士语</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pʌɡˈneɪʃəs]</rt>
                    <span class="word">pugnacious</span>
                    <rt class="below">好斗的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他看起来像个威尔士人，而且好斗；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪts]</rt>
                    <span class="word">it's</span>
                    <rt class="below">它是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[klɪr]</rt>
                    <span class="word">clear</span>
                    <rt class="below">清除</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːrd]</rt>
                    <span class="word">heard</span>
                    <rt class="below">听到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nuːz]</rt>
                    <span class="word">news</span>
                    <rt class="below">消息</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">显然他已经听到了这个消息。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[stændz]</rt>
                    <span class="word">stands</span>
                    <rt class="below">支架</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[baɪ]</rt>
                    <span class="word">by</span>
                    <rt class="below">经过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他支持凯特，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈsterɪŋ]</rt>
                    <span class="word">staring</span>
                    <rt class="below">凝视</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[daʊn]</rt>
                    <span class="word">down</span>
                    <rt class="below">向下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">低头凝视，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˌtempəˈrerəli]</rt>
                    <span class="word">temporarily</span>
                    <rt class="below">暂时地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːrdz]</rt>
                    <span class="word">words</span>
                    <rt class="below">字</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">暂时无话可说；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[tɪl]</rt>
                    <span class="word">till</span>
                    <rt class="below">直到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">直到他说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siː]</rt>
                    <span class="word">See</span>
                    <rt class="below">看</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">!</rt>
                    <span class="word">!</span>
                    <rt class="below">!</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “看！”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[meɪks]</rt>
                    <span class="word">makes</span>
                    <rt class="below">使</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɪst]</rt>
                    <span class="word">fist</span>
                    <rt class="below">拳头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他握紧拳头，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dʒɜrks]</rt>
                    <span class="word">jerks</span>
                    <rt class="below">混蛋</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θriː]</rt>
                    <span class="word">three</span>
                    <rt class="below">三</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[taɪmz]</rt>
                    <span class="word">times</span>
                    <rt class="below">次</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[er]</rt>
                    <span class="word">air</span>
                    <rt class="below">空气</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">并在空中猛拉三次。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">That</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">!</rt>
                    <span class="word">!</span>
                    <rt class="below">!</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “那！”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他说。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæts]</rt>
                    <span class="word">That's</span>
                    <rt class="below">这就是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">what</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hid]</rt>
                    <span class="word">he'd</span>
                    <rt class="below">他会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡet]</rt>
                    <span class="word">get</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “这就是他得到的。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">沃尔特。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðæts]</rt>
                    <span class="word">That's</span>
                    <rt class="below">这就是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">what</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hid]</rt>
                    <span class="word">he'd</span>
                    <rt class="below">他会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡet]</rt>
                    <span class="word">get</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">这就是他所得到的。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[frʌm; frəm]</rt>
                    <span class="word">From</span>
                    <rt class="below">从</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miː; mi]</rt>
                    <span class="word">me</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “从我这里。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dʒʌst]</rt>
                    <span class="word">Just</span>
                    <rt class="below">只是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[stænd]</rt>
                    <span class="word">stand</span>
                    <rt class="below">站立</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bæk]</rt>
                    <span class="word">back</span>
                    <rt class="below">后退</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “往后站，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ədˈvaɪzɪz]</rt>
                    <span class="word">advises</span>
                    <rt class="below">建议</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特建议道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">You</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[doʊnt]</rt>
                    <span class="word">don't</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɑːnt]</rt>
                    <span class="word">want</span>
                    <rt class="below">想</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbɪts]</rt>
                    <span class="word">bits</span>
                    <rt class="below">位</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ 'tɔməs ]</rt>
                    <span class="word">Thomas</span>
                    <rt class="below">托马斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jʊr; jər]</rt>
                    <span class="word">your</span>
                    <rt class="below">你的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈlʌndən]</rt>
                    <span class="word">London</span>
                    <rt class="below">伦敦</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdʒækɪt]</rt>
                    <span class="word">jacket</span>
                    <rt class="below">夹克</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “你肯定不想让托马斯的影子出现在你的伦敦夹克上。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[noʊ]</rt>
                    <span class="word">No</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[mɔːr]</rt>
                    <span class="word">more</span>
                    <rt class="below">更多的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dʌz]</rt>
                    <span class="word">does</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他不再这么做了。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bæks]</rt>
                    <span class="word">backs</span>
                    <rt class="below">背部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːf]</rt>
                    <span class="word">off</span>
                    <rt class="below">离开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他退缩了。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwʊdənt]</rt>
                    <span class="word">wouldn't</span>
                    <rt class="below">不会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ker]</rt>
                    <span class="word">care</span>
                    <rt class="below">关心</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “我不在乎，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">but</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lʊk]</rt>
                    <span class="word">look</span>
                    <rt class="below">看</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æt; ət]</rt>
                    <span class="word">at</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但看看你，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bɔɪ]</rt>
                    <span class="word">boy</span>
                    <rt class="below">男生</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">男生。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">You</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʊd; kəd]</rt>
                    <span class="word">could</span>
                    <rt class="below">可以</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkrɪp(ə)l]</rt>
                    <span class="word">cripple</span>
                    <rt class="below">削弱</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bruːt]</rt>
                    <span class="word">brute</span>
                    <rt class="below">野蛮人</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fer]</rt>
                    <span class="word">fair</span>
                    <rt class="below">公平的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[faɪt]</rt>
                    <span class="word">fight</span>
                    <rt class="below">斗争</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你可以在公平的战斗中打残这个野蛮人。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">It</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈnevər]</rt>
                    <span class="word">never</span>
                    <rt class="below">绝不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fer]</rt>
                    <span class="word">fair</span>
                    <rt class="below">公平的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[faɪt]</rt>
                    <span class="word">fight</span>
                    <rt class="below">斗争</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “这从来就不是一场公平的战斗，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʌmz]</rt>
                    <span class="word">comes</span>
                    <rt class="below">來</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈhaɪnd]</rt>
                    <span class="word">behind</span>
                    <rt class="below">在后面</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “他从你身后走过来，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[raɪt]</rt>
                    <span class="word">right</span>
                    <rt class="below">正确的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">正确的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ 'tɔməs ]</rt>
                    <span class="word">Thomas</span>
                    <rt class="below">托马斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">托马斯？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">With</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsʌmθɪŋ]</rt>
                    <span class="word">something</span>
                    <rt class="below">某物</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hænd]</rt>
                    <span class="word">hand</span>
                    <rt class="below">手</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">手里还拿着东西。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lʊks]</rt>
                    <span class="word">Looks</span>
                    <rt class="below">看起来</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[laɪk]</rt>
                    <span class="word">like</span>
                    <rt class="below">喜欢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡlæs]</rt>
                    <span class="word">glass</span>
                    <rt class="below">玻璃</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbɑːt(ə)l]</rt>
                    <span class="word">bottle</span>
                    <rt class="below">瓶子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">“看起来像一个玻璃瓶，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[keɪs]</rt>
                    <span class="word">case</span>
                    <rt class="below">案件</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">在这种情况下，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmz]</rt>
                    <span class="word">Williams</span>
                    <rt class="below">威廉姆斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根威廉姆斯说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">Was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbɑːt(ə)l]</rt>
                    <span class="word">bottle</span>
                    <rt class="below">瓶子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “是瓶子吗？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃeɪks]</rt>
                    <span class="word">shakes</span>
                    <rt class="below">奶昔</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hed]</rt>
                    <span class="word">head</span>
                    <rt class="below">头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他摇摇头。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">His</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊz]</rt>
                    <span class="word">nose</span>
                    <rt class="below">鼻子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bliːdz]</rt>
                    <span class="word">bleeds</span>
                    <rt class="below">流血</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈɡen]</rt>
                    <span class="word">again</span>
                    <rt class="below">再次</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他的鼻子又流血了。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[doʊnt]</rt>
                    <span class="word">Don't</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “别这样，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈbrʌðər]</rt>
                    <span class="word">brother</span>
                    <rt class="below">兄弟</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">兄弟，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪts]</rt>
                    <span class="word">It's</span>
                    <rt class="below">它是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːl]</rt>
                    <span class="word">all</span>
                    <rt class="below">全部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊvər]</rt>
                    <span class="word">over</span>
                    <rt class="below">超过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hænd]</rt>
                    <span class="word">hand</span>
                    <rt class="below">手</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她的手上全是东西；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">she</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[waɪps]</rt>
                    <span class="word">wipes</span>
                    <rt class="below">湿巾</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[blʌd]</rt>
                    <span class="word">blood</span>
                    <rt class="below">血</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[klɑːts]</rt>
                    <span class="word">clots</span>
                    <rt class="below">血凝块</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[daʊn]</rt>
                    <span class="word">down</span>
                    <rt class="below">向下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːrˈself]</rt>
                    <span class="word">herself</span>
                    <rt class="below">她自己</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她自己擦掉了血块。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">What</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[mes]</rt>
                    <span class="word">mess</span>
                    <rt class="below">混乱</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">真是乱七八糟，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈeɪprən]</rt>
                    <span class="word">apron</span>
                    <rt class="below">围裙</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">在她的围裙上；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪt]</rt>
                    <span class="word">might</span>
                    <rt class="below">可能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">as</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wel]</rt>
                    <span class="word">well</span>
                    <rt class="below">出色地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pʊt]</rt>
                    <span class="word">put</span>
                    <rt class="below">放</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hed]</rt>
                    <span class="word">head</span>
                    <rt class="below">头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">there</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈæftər]</rt>
                    <span class="word">after</span>
                    <rt class="below">后</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːl]</rt>
                    <span class="word">all</span>
                    <rt class="below">全部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他或许还是把头放在那儿吧。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[doʊnt]</rt>
                    <span class="word">don't</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[səˈpoʊz]</rt>
                    <span class="word">suppose</span>
                    <rt class="below">认为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sɔː]</rt>
                    <span class="word">saw</span>
                    <rt class="below">锯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “我想你没看见吧？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">What</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwiːldɪŋ]</rt>
                    <span class="word">wielding</span>
                    <rt class="below">挥舞</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “他所挥舞的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪɡˈzæktli]</rt>
                    <span class="word">exactly</span>
                    <rt class="below">确切地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">确切地？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæts]</rt>
                    <span class="word">That's</span>
                    <rt class="below">这就是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈvæljuː]</rt>
                    <span class="word">value</span>
                    <rt class="below">价值</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “这就是价值所在，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æn; ən]</rt>
                    <span class="word">an</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈproʊtʃ]</rt>
                    <span class="word">approach</span>
                    <rt class="below">方法</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[frʌm; frəm]</rt>
                    <span class="word">from</span>
                    <rt class="below">从</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈhaɪnd]</rt>
                    <span class="word">behind</span>
                    <rt class="below">在后面</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">—</rt>
                    <span class="word">—</span>
                    <rt class="below">—</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsɑːri]</rt>
                    <span class="word">sorry</span>
                    <rt class="below">对不起</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lɔːs]</rt>
                    <span class="word">loss</span>
                    <rt class="below">损失</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmædʒɪˌstreɪts]</rt>
                    <span class="word">magistrates</span>
                    <rt class="below">治安法官</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">-</rt>
                    <span class="word">'</span>
                    <rt class="below">-</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bentʃ]</rt>
                    <span class="word">bench</span>
                    <rt class="below">长椅</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “从后面接近——你对治安法官席来说是一个遗憾的失败。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈlɪs(ə)n]</rt>
                    <span class="word">Listen</span>
                    <rt class="below">听</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">听，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃæl; ʃəl]</rt>
                    <span class="word">shall</span>
                    <rt class="below">将</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tel]</rt>
                    <span class="word">tell</span>
                    <rt class="below">告诉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈbaʊt]</rt>
                    <span class="word">about</span>
                    <rt class="below">关于</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɑːðər]</rt>
                    <span class="word">father</span>
                    <rt class="below">父亲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我应该告诉你关于我父亲的事吗？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiːl]</rt>
                    <span class="word">He'll</span>
                    <rt class="below">地狱</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pɪk]</rt>
                    <span class="word">pick</span>
                    <rt class="below">挑选</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɑːtˈɛvərz]</rt>
                    <span class="word">whatever's</span>
                    <rt class="below">无论什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hænd]</rt>
                    <span class="word">hand</span>
                    <rt class="below">手</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他会拿起手边的任何东西。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wɪtʃ]</rt>
                    <span class="word">Which</span>
                    <rt class="below">哪个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsʌmtaɪmz]</rt>
                    <span class="word">sometimes</span>
                    <rt class="below">有时</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbɑːt(ə)l]</rt>
                    <span class="word">bottle</span>
                    <rt class="below">瓶子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">有时是一个瓶子，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[truː]</rt>
                    <span class="word">true</span>
                    <rt class="below">真</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">真的。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪv]</rt>
                    <span class="word">I've</span>
                    <rt class="below">我已经</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siːn]</rt>
                    <span class="word">seen</span>
                    <rt class="below">已看过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmʌðər]</rt>
                    <span class="word">mother</span>
                    <rt class="below">母亲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我亲眼看见他对我母亲做过这样的事。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈiːv(ə)n]</rt>
                    <span class="word">Even</span>
                    <rt class="below">甚至</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈaʊər; ɑːr]</rt>
                    <span class="word">our</span>
                    <rt class="below">我们的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈlɪt(ə)l]</rt>
                    <span class="word">little</span>
                    <rt class="below">小的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bet]</rt>
                    <span class="word">Bet</span>
                    <rt class="below">赌注</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">甚至我们的小赌注，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪv]</rt>
                    <span class="word">I've</span>
                    <rt class="below">我已经</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siːn]</rt>
                    <span class="word">seen</span>
                    <rt class="below">已看过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪt]</rt>
                    <span class="word">hit</span>
                    <rt class="below">打</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊvər]</rt>
                    <span class="word">over</span>
                    <rt class="below">超过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hed]</rt>
                    <span class="word">head</span>
                    <rt class="below">头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我看见他打她的头。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈɔːlsoʊ]</rt>
                    <span class="word">Also</span>
                    <rt class="below">还</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪv]</rt>
                    <span class="word">I've</span>
                    <rt class="below">我已经</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːt]</rt>
                    <span class="word">not</span>
                    <rt class="below">不是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siːn]</rt>
                    <span class="word">seen</span>
                    <rt class="below">已看过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我也没见过他这么做，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wɪtʃ]</rt>
                    <span class="word">which</span>
                    <rt class="below">哪个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːrs]</rt>
                    <span class="word">worse</span>
                    <rt class="below">更糟</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">更糟糕的是，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈkəz, bɪˈkɔːz]</rt>
                    <span class="word">because</span>
                    <rt class="below">因为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miː; mi]</rt>
                    <span class="word">me</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈbaʊt]</rt>
                    <span class="word">about</span>
                    <rt class="below">关于</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biː; bi]</rt>
                    <span class="word">be</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[feld]</rt>
                    <span class="word">felled</span>
                    <rt class="below">砍伐</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">因为即将被击倒的是我。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwʌndər]</rt>
                    <span class="word">wonder</span>
                    <rt class="below">想知道</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">what</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪv]</rt>
                    <span class="word">I've</span>
                    <rt class="below">我已经</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmærid]</rt>
                    <span class="word">married</span>
                    <rt class="below">已婚</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɪntuː]</rt>
                    <span class="word">into</span>
                    <rt class="below">进入</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">“我不知道我嫁给了什么人，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmz]</rt>
                    <span class="word">Williams</span>
                    <rt class="below">威廉姆斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根威廉姆斯说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">But</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈriːəli]</rt>
                    <span class="word">really</span>
                    <rt class="below">真的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但实际上，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dʒʌst]</rt>
                    <span class="word">just</span>
                    <rt class="below">只是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsʌmθɪŋ]</rt>
                    <span class="word">something</span>
                    <rt class="below">某物</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">这只是摩根说的；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[sʌm; səm]</rt>
                    <span class="word">some</span>
                    <rt class="below">一些</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[men]</rt>
                    <span class="word">men</span>
                    <rt class="below">男性</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[həˈbɪtʃuəl]</rt>
                    <span class="word">habitual</span>
                    <rt class="below">习惯性的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsnɪfl]</rt>
                    <span class="word">sniffle</span>
                    <rt class="below">抽泣</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">有些男人有习惯性流鼻涕，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[sʌm; səm]</rt>
                    <span class="word">some</span>
                    <rt class="below">一些</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪmɪn]</rt>
                    <span class="word">women</span>
                    <rt class="below">女性</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈhedeɪk]</rt>
                    <span class="word">headache</span>
                    <rt class="below">头痛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">有些女性会头痛，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæz; həz]</rt>
                    <span class="word">has</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwʌndər]</rt>
                    <span class="word">wonder</span>
                    <rt class="below">想知道</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根也有这种疑惑。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">The</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɔɪ]</rt>
                    <span class="word">boy</span>
                    <rt class="below">男生</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdʌzənt]</rt>
                    <span class="word">doesn't</span>
                    <rt class="below">没有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈlɪs(ə)n]</rt>
                    <span class="word">listen</span>
                    <rt class="below">听</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">男孩不听他的话；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɪŋks]</rt>
                    <span class="word">thinks</span>
                    <rt class="below">认为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他认为，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɑːðər]</rt>
                    <span class="word">father</span>
                    <rt class="below">父亲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɪd]</rt>
                    <span class="word">did</span>
                    <rt class="below">做过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmʌðər]</rt>
                    <span class="word">mother</span>
                    <rt class="below">母亲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">如果我父亲这样对我母亲</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[soʊ]</rt>
                    <span class="word">so</span>
                    <rt class="below">所以</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lɔːŋ]</rt>
                    <span class="word">long</span>
                    <rt class="below">长的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ded]</rt>
                    <span class="word">dead</span>
                    <rt class="below">死的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">死了这么久，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðen]</rt>
                    <span class="word">then</span>
                    <rt class="below">然后</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmeɪbi]</rt>
                    <span class="word">maybe</span>
                    <rt class="below">或许</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɪld]</rt>
                    <span class="word">killed</span>
                    <rt class="below">被杀</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">那么也许他杀了她？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[noʊ]</rt>
                    <span class="word">No</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">不，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈʃʊrli]</rt>
                    <span class="word">surely</span>
                    <rt class="below">一定</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hid]</rt>
                    <span class="word">he'd</span>
                    <rt class="below">他会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪn]</rt>
                    <span class="word">been</span>
                    <rt class="below">到过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈteɪkən]</rt>
                    <span class="word">taken</span>
                    <rt class="below">已采取</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他肯定会因此被抓的；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">-</rt>
                    <span class="word">Putney's</span>
                    <rt class="below">-</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈlɔːləs]</rt>
                    <span class="word">lawless</span>
                    <rt class="below">无法无天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">普特尼无法无天，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">but</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[doʊnt]</rt>
                    <span class="word">don't</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡet]</rt>
                    <span class="word">get</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈweɪ]</rt>
                    <span class="word">away</span>
                    <rt class="below">离开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmɜːrdər]</rt>
                    <span class="word">murder</span>
                    <rt class="below">谋杀</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但你无法逃脱谋杀罪的惩罚。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæts]</rt>
                    <span class="word">Kat's</span>
                    <rt class="below">凯特的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">what</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɑːt]</rt>
                    <span class="word">got</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmʌðər]</rt>
                    <span class="word">mother</span>
                    <rt class="below">母亲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">:</rt>
                    <span class="word">:</span>
                    <rt class="below">:</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特就是他的母亲：</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈkraɪɪŋ]</rt>
                    <span class="word">crying</span>
                    <rt class="below">哭泣</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">为他哭泣，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈrʌbɪŋ]</rt>
                    <span class="word">rubbing</span>
                    <rt class="below">擦</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bæk]</rt>
                    <span class="word">back</span>
                    <rt class="below">后退</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nek]</rt>
                    <span class="word">neck</span>
                    <rt class="below">脖子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">揉着他的后颈。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃʌts]</rt>
                    <span class="word">shuts</span>
                    <rt class="below">关闭</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪz]</rt>
                    <span class="word">eyes</span>
                    <rt class="below">眼睛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他闭上眼睛，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[meɪk]</rt>
                    <span class="word">make</span>
                    <rt class="below">制作</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[left]</rt>
                    <span class="word">left</span>
                    <rt class="below">左边</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">eye</span>
                    <rt class="below">眼睛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈiːkwəl]</rt>
                    <span class="word">equal</span>
                    <rt class="below">平等的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raɪt]</rt>
                    <span class="word">right</span>
                    <rt class="below">正确的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">使左眼与右眼等高；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[traɪz]</rt>
                    <span class="word">tries</span>
                    <rt class="below">尝试</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊpən]</rt>
                    <span class="word">open</span>
                    <rt class="below">打开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[boʊθ]</rt>
                    <span class="word">both</span>
                    <rt class="below">两个都</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他尝试打开两者。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “凯特，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɑːt]</rt>
                    <span class="word">got</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æn; ən]</rt>
                    <span class="word">an</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">eye</span>
                    <rt class="below">眼睛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈʌndər]</rt>
                    <span class="word">under</span>
                    <rt class="below">在下面</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">there</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “我在那里有一只眼睛，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我有吗？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bɪˈkəz, bɪˈkɔːz]</rt>
                    <span class="word">Because</span>
                    <rt class="below">因为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kænt]</rt>
                    <span class="word">can't</span>
                    <rt class="below">不能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siː]</rt>
                    <span class="word">see</span>
                    <rt class="below">看</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈeniθɪŋ]</rt>
                    <span class="word">anything</span>
                    <rt class="below">任何事物</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">因为它什么也看不见。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[jes]</rt>
                    <span class="word">Yes</span>
                    <rt class="below">是的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">是的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[jes]</rt>
                    <span class="word">yes</span>
                    <rt class="below">是的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">是的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[jes]</rt>
                    <span class="word">yes</span>
                    <rt class="below">是的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">是的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">she</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[waɪl]</rt>
                    <span class="word">while</span>
                    <rt class="below">尽管</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmz]</rt>
                    <span class="word">Williams</span>
                    <rt class="below">威廉姆斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kənˈtɪnjuːz]</rt>
                    <span class="word">continues</span>
                    <rt class="below">继续</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪnˌterəˈɡeɪʃ(ə)n]</rt>
                    <span class="word">interrogation</span>
                    <rt class="below">审讯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fækts]</rt>
                    <span class="word">facts</span>
                    <rt class="below">事实</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">而摩根·威廉姆斯则继续审问事实；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈsetlz]</rt>
                    <span class="word">settles</span>
                    <rt class="below">安顿下来</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɑːrd]</rt>
                    <span class="word">hard</span>
                    <rt class="below">难的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">落在坚硬的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɑːdərətli]</rt>
                    <span class="word">moderately</span>
                    <rt class="below">适度</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈhevi]</rt>
                    <span class="word">heavy</span>
                    <rt class="below">重的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">中等重量，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃɑːrp]</rt>
                    <span class="word">sharp</span>
                    <rt class="below">锋利的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɑːbdʒekt]</rt>
                    <span class="word">object</span>
                    <rt class="below">目的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">尖锐物体，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">but</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈpɑːsəbli]</rt>
                    <span class="word">possibly</span>
                    <rt class="below">可能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːt]</rt>
                    <span class="word">not</span>
                    <rt class="below">不是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbroʊkən]</rt>
                    <span class="word">broken</span>
                    <rt class="below">破碎的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbɑːt(ə)l]</rt>
                    <span class="word">bottle</span>
                    <rt class="below">瓶子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但可能不是破瓶子，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈʌðərwaɪz]</rt>
                    <span class="word">otherwise</span>
                    <rt class="below">否则</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ 'tɔməs ]</rt>
                    <span class="word">Thomas</span>
                    <rt class="below">托马斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʊd]</rt>
                    <span class="word">would</span>
                    <rt class="below">会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siːn]</rt>
                    <span class="word">seen</span>
                    <rt class="below">已看过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪts]</rt>
                    <span class="word">its</span>
                    <rt class="below">它是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdʒæɡɪd]</rt>
                    <span class="word">jagged</span>
                    <rt class="below">锯齿状</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[edʒ]</rt>
                    <span class="word">edge</span>
                    <rt class="below">边缘</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">否则托马斯就会看到它锯齿状的边缘，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈpraɪər]</rt>
                    <span class="word">prior</span>
                    <rt class="below">事先的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsplɪtɪŋ]</rt>
                    <span class="word">splitting</span>
                    <rt class="below">分裂</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈaɪbraʊ]</rt>
                    <span class="word">eyebrow</span>
                    <rt class="below">眉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊpən]</rt>
                    <span class="word">open</span>
                    <rt class="below">打开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈeɪmɪŋ]</rt>
                    <span class="word">aiming</span>
                    <rt class="below">瞄准</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[blaɪnd]</rt>
                    <span class="word">blind</span>
                    <rt class="below">瞎的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">在沃尔特割开他的眉毛并试图让他失明之前。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪrz]</rt>
                    <span class="word">hears</span>
                    <rt class="below">聽到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ 'fɔ:miŋ ]</rt>
                    <span class="word">forming</span>
                    <rt class="below">成型</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈθiːəri]</rt>
                    <span class="word">theory</span>
                    <rt class="below">理论</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʊd]</rt>
                    <span class="word">would</span>
                    <rt class="below">会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[laɪk]</rt>
                    <span class="word">like</span>
                    <rt class="below">喜欢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[spiːk]</rt>
                    <span class="word">speak</span>
                    <rt class="below">说话</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈbaʊt]</rt>
                    <span class="word">about</span>
                    <rt class="below">关于</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[buːt]</rt>
                    <span class="word">boot</span>
                    <rt class="below">引导</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他听到摩根正在构思这个理论，并想谈谈靴子，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːt]</rt>
                    <span class="word">knot</span>
                    <rt class="below">结</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">结，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːt]</rt>
                    <span class="word">knot</span>
                    <rt class="below">结</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[twaɪn]</rt>
                    <span class="word">twine</span>
                    <rt class="below">缠绕</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">绳结，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">but</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈefərt]</rt>
                    <span class="word">effort</span>
                    <rt class="below">努力</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmuːvɪŋ]</rt>
                    <span class="word">moving</span>
                    <rt class="below">移动</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maʊθ]</rt>
                    <span class="word">mouth</span>
                    <rt class="below">嘴</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siːmz]</rt>
                    <span class="word">seems</span>
                    <rt class="below">似乎</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˌdɪsprəˈpɔːrʃənət]</rt>
                    <span class="word">disproportionate</span>
                    <rt class="below">不成比例</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rɪˈwɔːrd]</rt>
                    <span class="word">reward</span>
                    <rt class="below">报酬</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但动嘴的努力似乎与回报不成比例。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[baɪ]</rt>
                    <span class="word">By</span>
                    <rt class="below">经过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lɑːrdʒ]</rt>
                    <span class="word">large</span>
                    <rt class="below">大的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈɡriːz]</rt>
                    <span class="word">agrees</span>
                    <rt class="below">同意</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡənz]</rt>
                    <span class="word">Morgan's</span>
                    <rt class="below">摩根的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kənˈkluːʒ(ə)n]</rt>
                    <span class="word">conclusion</span>
                    <rt class="below">结论</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">总体而言，他同意摩根的结论；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[traɪz]</rt>
                    <span class="word">tries</span>
                    <rt class="below">尝试</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃrʌɡ]</rt>
                    <span class="word">shrug</span>
                    <rt class="below">耸肩</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他试图耸耸肩，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">but</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːrts]</rt>
                    <span class="word">hurts</span>
                    <rt class="below">伤人</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[soʊ]</rt>
                    <span class="word">so</span>
                    <rt class="below">所以</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[mʌtʃ]</rt>
                    <span class="word">much</span>
                    <rt class="below">很多</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但很疼，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fiːlz]</rt>
                    <span class="word">feels</span>
                    <rt class="below">感觉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[soʊ]</rt>
                    <span class="word">so</span>
                    <rt class="below">所以</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[krʌʃt]</rt>
                    <span class="word">crushed</span>
                    <rt class="below">碎</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɪsˈdʒɔɪntɪd]</rt>
                    <span class="word">disjointed</span>
                    <rt class="below">脱节的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他感觉身心崩溃，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwʌndərz]</rt>
                    <span class="word">wonders</span>
                    <rt class="below">奇迹</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nek]</rt>
                    <span class="word">neck</span>
                    <rt class="below">脖子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbroʊkən]</rt>
                    <span class="word">broken</span>
                    <rt class="below">破碎的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他怀疑自己的脖子是否断了。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈeniweɪ]</rt>
                    <span class="word">Anyway</span>
                    <rt class="below">反正</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “反正，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">what</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːr; wər]</rt>
                    <span class="word">were</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈduːɪŋ]</rt>
                    <span class="word">doing</span>
                    <rt class="below">正在做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “你在做什么，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[tɑːm]</rt>
                    <span class="word">Tom</span>
                    <rt class="below">汤姆</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">汤姆，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[set]</rt>
                    <span class="word">set</span>
                    <rt class="below">放</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːf]</rt>
                    <span class="word">off</span>
                    <rt class="below">离开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">让他离开？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈjuːʒuəli; ˈjuːʒəli]</rt>
                    <span class="word">usually</span>
                    <rt class="below">通常</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[woʊnt]</rt>
                    <span class="word">won't</span>
                    <rt class="below">惯于</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[stɑːrt]</rt>
                    <span class="word">start</span>
                    <rt class="below">开始</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɪl]</rt>
                    <span class="word">till</span>
                    <rt class="below">直到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈæftər]</rt>
                    <span class="word">after</span>
                    <rt class="below">后</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɑːrk]</rt>
                    <span class="word">dark</span>
                    <rt class="below">黑暗的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他通常要到天黑后才会起床，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪts]</rt>
                    <span class="word">it's</span>
                    <rt class="below">它是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊ]</rt>
                    <span class="word">no</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɔːz]</rt>
                    <span class="word">cause</span>
                    <rt class="below">原因</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æt; ət]</rt>
                    <span class="word">at</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːl]</rt>
                    <span class="word">all</span>
                    <rt class="below">全部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">如果没有任何原因的话。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jes]</rt>
                    <span class="word">Yes</span>
                    <rt class="below">是的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “是的，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmz]</rt>
                    <span class="word">Williams</span>
                    <rt class="below">威廉姆斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根·威廉姆斯说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">there</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɔːz]</rt>
                    <span class="word">cause</span>
                    <rt class="below">原因</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “有什么原因吗？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈjestərdeɪ]</rt>
                    <span class="word">Yesterday</span>
                    <rt class="below">昨天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “昨天。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfaɪtɪŋ]</rt>
                    <span class="word">fighting</span>
                    <rt class="below">斗争</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我正在战斗。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">You</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːr; wər]</rt>
                    <span class="word">were</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfaɪtɪŋ]</rt>
                    <span class="word">fighting</span>
                    <rt class="below">斗争</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈjestərdeɪ]</rt>
                    <span class="word">yesterday</span>
                    <rt class="below">昨天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “你们昨天打架了？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[huː]</rt>
                    <span class="word">Who</span>
                    <rt class="below">WHO</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈhoʊli]</rt>
                    <span class="word">holy</span>
                    <rt class="below">圣</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[neɪm]</rt>
                    <span class="word">name</span>
                    <rt class="below">姓名</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːr; wər]</rt>
                    <span class="word">were</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfaɪtɪŋ]</rt>
                    <span class="word">fighting</span>
                    <rt class="below">斗争</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你到底在跟谁打架？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[doʊnt]</rt>
                    <span class="word">don't</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊ]</rt>
                    <span class="word">know</span>
                    <rt class="below">知道</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “我不知道。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">The</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[neɪm]</rt>
                    <span class="word">name</span>
                    <rt class="below">姓名</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">名字，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[əˈlɔːŋ]</rt>
                    <span class="word">along</span>
                    <rt class="below">沿着</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈriːz(ə)n]</rt>
                    <span class="word">reason</span>
                    <rt class="below">原因</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">以及原因，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hæz; həz]</rt>
                    <span class="word">has</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[drɑːpt]</rt>
                    <span class="word">dropped</span>
                    <rt class="below">已丢弃</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hed]</rt>
                    <span class="word">head</span>
                    <rt class="below">头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">已经从他的脑海里消失了；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">but</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fiːlz]</rt>
                    <span class="word">feels</span>
                    <rt class="below">感觉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">as</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但感觉好像，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɛɡzɪtɪŋ]</rt>
                    <span class="word">exiting</span>
                    <rt class="below">退出</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">在退出时，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæz; həz]</rt>
                    <span class="word">has</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rɪˈmuːvd]</rt>
                    <span class="word">removed</span>
                    <rt class="below">已删除</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdʒæɡɪd]</rt>
                    <span class="word">jagged</span>
                    <rt class="below">锯齿状</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsplɪntər]</rt>
                    <span class="word">splinter</span>
                    <rt class="below">碎片</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[boʊn]</rt>
                    <span class="word">bone</span>
                    <rt class="below">骨</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[frʌm; frəm]</rt>
                    <span class="word">from</span>
                    <rt class="below">从</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[skʌl]</rt>
                    <span class="word">skull</span>
                    <rt class="below">颅骨</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">它从他的头骨中取出了一块锯齿状的骨碎片。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈtʌtʃɪz]</rt>
                    <span class="word">touches</span>
                    <rt class="below">触碰</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[skælp]</rt>
                    <span class="word">scalp</span>
                    <rt class="below">头皮</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他摸了摸头皮，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈkerfəli]</rt>
                    <span class="word">carefully</span>
                    <rt class="below">小心</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">小心。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈbɑːt(ə)l]</rt>
                    <span class="word">Bottle</span>
                    <rt class="below">瓶子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">瓶子？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈpɑːsəb(ə)l]</rt>
                    <span class="word">Possible</span>
                    <rt class="below">可能的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">可能的。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[oʊ]</rt>
                    <span class="word">Oh</span>
                    <rt class="below">哦</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “哦，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðeɪr]</rt>
                    <span class="word">they're</span>
                    <rt class="below">他们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɔːlweɪz]</rt>
                    <span class="word">always</span>
                    <rt class="below">总是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfaɪtɪŋ]</rt>
                    <span class="word">fighting</span>
                    <rt class="below">斗争</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “他们总是在打架。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bɔɪz]</rt>
                    <span class="word">Boys</span>
                    <rt class="below">男孩们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">男孩们。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[daʊn]</rt>
                    <span class="word">Down</span>
                    <rt class="below">向下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[baɪ]</rt>
                    <span class="word">by</span>
                    <rt class="below">经过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈrɪvər]</rt>
                    <span class="word">river</span>
                    <rt class="below">河</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">就在河边。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[soʊ]</rt>
                    <span class="word">So</span>
                    <rt class="below">所以</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[let]</rt>
                    <span class="word">let</span>
                    <rt class="below">让</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miː; mi]</rt>
                    <span class="word">me</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biː; bi]</rt>
                    <span class="word">be</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃʊr]</rt>
                    <span class="word">sure</span>
                    <rt class="below">当然</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raɪt]</rt>
                    <span class="word">right</span>
                    <rt class="below">正确的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “所以让我确认一下我有这个权利，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʌmz]</rt>
                    <span class="word">comes</span>
                    <rt class="below">來</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hoʊm]</rt>
                    <span class="word">home</span>
                    <rt class="below">家</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈjestərdeɪ]</rt>
                    <span class="word">yesterday</span>
                    <rt class="below">昨天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kloʊðz]</rt>
                    <span class="word">clothes</span>
                    <rt class="below">衣服</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɔːrn]</rt>
                    <span class="word">torn</span>
                    <rt class="below">撕裂</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈnʌklz]</rt>
                    <span class="word">knuckles</span>
                    <rt class="below">指关节</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[skɪnd]</rt>
                    <span class="word">skinned</span>
                    <rt class="below">剥皮的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “他昨天回家时衣服破烂，关节破皮，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[oʊld]</rt>
                    <span class="word">old</span>
                    <rt class="below">老的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[mæn]</rt>
                    <span class="word">man</span>
                    <rt class="below">男人</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">老人说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wɑːts]</rt>
                    <span class="word">what's</span>
                    <rt class="below">什么是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">这是什么？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bɪn]</rt>
                    <span class="word">been</span>
                    <rt class="below">到过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfaɪtɪŋ]</rt>
                    <span class="word">fighting</span>
                    <rt class="below">斗争</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">打架了？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[weɪts]</rt>
                    <span class="word">waits</span>
                    <rt class="below">等待</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[deɪ]</rt>
                    <span class="word">day</span>
                    <rt class="below">天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他等了一天，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðen]</rt>
                    <span class="word">then</span>
                    <rt class="below">然后</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪts]</rt>
                    <span class="word">hits</span>
                    <rt class="below">命中</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbɑːt(ə)l]</rt>
                    <span class="word">bottle</span>
                    <rt class="below">瓶子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">然后用瓶子打他。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðen]</rt>
                    <span class="word">Then</span>
                    <rt class="below">然后</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːks]</rt>
                    <span class="word">knocks</span>
                    <rt class="below">敲门</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[daʊn]</rt>
                    <span class="word">down</span>
                    <rt class="below">向下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jɑːrd]</rt>
                    <span class="word">yard</span>
                    <rt class="below">院子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">然后他把他打倒在院子里，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kɪks]</rt>
                    <span class="word">kicks</span>
                    <rt class="below">踢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːl]</rt>
                    <span class="word">all</span>
                    <rt class="below">全部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊvər]</rt>
                    <span class="word">over</span>
                    <rt class="below">超过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">踢他一脚，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[biːts]</rt>
                    <span class="word">beats</span>
                    <rt class="below">节拍</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[daʊn]</rt>
                    <span class="word">down</span>
                    <rt class="below">向下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[leŋkθ; leŋθ]</rt>
                    <span class="word">length</span>
                    <rt class="below">长度</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[plæŋk]</rt>
                    <span class="word">plank</span>
                    <rt class="below">板</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʊd]</rt>
                    <span class="word">wood</span>
                    <rt class="below">木头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʌmz]</rt>
                    <span class="word">comes</span>
                    <rt class="below">來</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hænd]</rt>
                    <span class="word">hand</span>
                    <rt class="below">手</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">用手边拿来的木板上下敲打他的身体……”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɪd]</rt>
                    <span class="word">Did</span>
                    <rt class="below">做过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “他这么做了吗？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪts]</rt>
                    <span class="word">It's</span>
                    <rt class="below">它是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːl]</rt>
                    <span class="word">all</span>
                    <rt class="below">全部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊvər]</rt>
                    <span class="word">over</span>
                    <rt class="below">超过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈpærɪʃ]</rt>
                    <span class="word">parish</span>
                    <rt class="below">教区</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">!</rt>
                    <span class="word">!</span>
                    <rt class="below">!</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “整个教区都这样！</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðeɪ]</rt>
                    <span class="word">They</span>
                    <rt class="below">他们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːr; wər]</rt>
                    <span class="word">were</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈlaɪnɪŋ]</rt>
                    <span class="word">lining</span>
                    <rt class="below">衬垫</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɔːrf]</rt>
                    <span class="word">wharf</span>
                    <rt class="below">码头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tel]</rt>
                    <span class="word">tell</span>
                    <rt class="below">告诉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miː; mi]</rt>
                    <span class="word">me</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他们在码头排队告诉我，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðeɪ]</rt>
                    <span class="word">they</span>
                    <rt class="below">他们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːr; wər]</rt>
                    <span class="word">were</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈʃaʊtɪŋ]</rt>
                    <span class="word">shouting</span>
                    <rt class="below">大喊</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æt; ət]</rt>
                    <span class="word">at</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miː; mi]</rt>
                    <span class="word">me</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈfɔːr]</rt>
                    <span class="word">before</span>
                    <rt class="below">前</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[boʊt]</rt>
                    <span class="word">boat</span>
                    <rt class="below">船</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[taɪd]</rt>
                    <span class="word">tied</span>
                    <rt class="below">捆绑</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">在船停泊之前，他们就对我大喊大叫。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmz]</rt>
                    <span class="word">Williams</span>
                    <rt class="below">威廉姆斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根·威廉姆斯，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈlɪs(ə)n]</rt>
                    <span class="word">listen</span>
                    <rt class="below">听</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[naʊ]</rt>
                    <span class="word">now</span>
                    <rt class="below">现在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">现在听，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[jʊr; jər]</rt>
                    <span class="word">your</span>
                    <rt class="below">你的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[waɪfs]</rt>
                    <span class="word">wife's</span>
                    <rt class="below">妻子的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɑːðər]</rt>
                    <span class="word">father</span>
                    <rt class="below">父亲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæz; həz]</rt>
                    <span class="word">has</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbiːtn]</rt>
                    <span class="word">beaten</span>
                    <rt class="below">被殴打</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ 'tɔməs ]</rt>
                    <span class="word">Thomas</span>
                    <rt class="below">托马斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[krɔːld]</rt>
                    <span class="word">crawled</span>
                    <rt class="below">爬过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdaɪɪŋ]</rt>
                    <span class="word">dying</span>
                    <rt class="below">死亡</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsɪstərz]</rt>
                    <span class="word">sister's</span>
                    <rt class="below">姐妹</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[haʊs]</rt>
                    <span class="word">house</span>
                    <rt class="below">房子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你岳父把托马斯打了，他快要死了，爬到他姐姐家，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðeɪv]</rt>
                    <span class="word">they've</span>
                    <rt class="below">他们已经</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɔːld]</rt>
                    <span class="word">called</span>
                    <rt class="below">称为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[priːst]</rt>
                    <span class="word">priest</span>
                    <rt class="below">牧师</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他们已经叫来了牧师……</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[dɪd]</rt>
                    <span class="word">Did</span>
                    <rt class="below">做过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɔːl]</rt>
                    <span class="word">call</span>
                    <rt class="below">称呼</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[priːst]</rt>
                    <span class="word">priest</span>
                    <rt class="below">牧师</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你叫牧师了吗？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[oʊ]</rt>
                    <span class="word">Oh</span>
                    <rt class="below">哦</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “哦，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmsɪz]</rt>
                    <span class="word">Williamses</span>
                    <rt class="below">威廉斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">!</rt>
                    <span class="word">!</span>
                    <rt class="below">!</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你们威廉姆斯一家！”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">You</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɪŋk]</rt>
                    <span class="word">think</span>
                    <rt class="below">思考</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jʊr]</rt>
                    <span class="word">you're</span>
                    <rt class="below">你是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sʌtʃ]</rt>
                    <span class="word">such</span>
                    <rt class="below">这样的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪɡ]</rt>
                    <span class="word">big</span>
                    <rt class="below">大的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈpiːp(ə)l]</rt>
                    <span class="word">people</span>
                    <rt class="below">人们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈraʊnd]</rt>
                    <span class="word">around</span>
                    <rt class="below">大约</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪr]</rt>
                    <span class="word">here</span>
                    <rt class="below">这里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “你们以为自己是这里的大人物。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈpiːp(ə)l]</rt>
                    <span class="word">People</span>
                    <rt class="below">人们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːr; ər]</rt>
                    <span class="word">are</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈlaɪnɪŋ]</rt>
                    <span class="word">lining</span>
                    <rt class="below">衬垫</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tel]</rt>
                    <span class="word">tell</span>
                    <rt class="below">告诉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɪŋz]</rt>
                    <span class="word">things</span>
                    <rt class="below">事物</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">人们排着队告诉你事情。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">But</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[waɪ]</rt>
                    <span class="word">why</span>
                    <rt class="below">为什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">但这是为什么呢？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪts]</rt>
                    <span class="word">It's</span>
                    <rt class="below">它是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈkəz, bɪˈkɔːz]</rt>
                    <span class="word">because</span>
                    <rt class="below">因为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈliːv]</rt>
                    <span class="word">believe</span>
                    <rt class="below">相信</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈeniθɪŋ]</rt>
                    <span class="word">anything</span>
                    <rt class="below">任何事物</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">这是因为你相信一切。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bʌt; bət]</rt>
                    <span class="word">But</span>
                    <rt class="below">但</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪts]</rt>
                    <span class="word">it's</span>
                    <rt class="below">它是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raɪt]</rt>
                    <span class="word">right</span>
                    <rt class="below">正确的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">!</rt>
                    <span class="word">!</span>
                    <rt class="below">!</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “但这是正确的！”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jɛlz]</rt>
                    <span class="word">yells</span>
                    <rt class="below">大喊</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根大喊。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">As</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡʊd]</rt>
                    <span class="word">good</span>
                    <rt class="below">好的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">as</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raɪt]</rt>
                    <span class="word">right</span>
                    <rt class="below">正确的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">!</rt>
                    <span class="word">!</span>
                    <rt class="below">!</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “一样好！</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[eɪ]</rt>
                    <span class="word">Eh</span>
                    <rt class="below">呃</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">嗯？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">If</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[liːv]</rt>
                    <span class="word">leave</span>
                    <rt class="below">离开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[priːst]</rt>
                    <span class="word">priest</span>
                    <rt class="below">牧师</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">如果你忽略牧师的话。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">And</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːt]</rt>
                    <span class="word">not</span>
                    <rt class="below">不是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ded]</rt>
                    <span class="word">dead</span>
                    <rt class="below">死的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jet]</rt>
                    <span class="word">yet</span>
                    <rt class="below">然而</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">而且他还没有死。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juːl]</rt>
                    <span class="word">You'll</span>
                    <rt class="below">你会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[meɪk]</rt>
                    <span class="word">make</span>
                    <rt class="below">制作</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmædʒɪˌstreɪts]</rt>
                    <span class="word">magistrates</span>
                    <rt class="below">治安法官</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">-</rt>
                    <span class="word">'</span>
                    <rt class="below">-</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bentʃ]</rt>
                    <span class="word">bench</span>
                    <rt class="below">长椅</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃʊr]</rt>
                    <span class="word">sure</span>
                    <rt class="below">当然</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “你肯定会成为法官的。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jʊr; jər]</rt>
                    <span class="word">your</span>
                    <rt class="below">你的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kloʊz]</rt>
                    <span class="word">close</span>
                    <rt class="below">关闭</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈstʌdi]</rt>
                    <span class="word">study</span>
                    <rt class="below">学习</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdɪfrəns]</rt>
                    <span class="word">difference</span>
                    <rt class="below">不同之处</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈtwiːn]</rt>
                    <span class="word">between</span>
                    <rt class="below">之间</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɔːrps]</rt>
                    <span class="word">corpse</span>
                    <rt class="below">尸体</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbrʌðər]</rt>
                    <span class="word">brother</span>
                    <rt class="below">兄弟</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “仔细研究一下尸体和我兄弟之间的区别。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wen]</rt>
                    <span class="word">When</span>
                    <rt class="below">什么时候</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪm]</rt>
                    <span class="word">I'm</span>
                    <rt class="below">我是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmædʒɪstreɪt]</rt>
                    <span class="word">magistrate</span>
                    <rt class="below">地方法官</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “当我担任地方法官时，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪl]</rt>
                    <span class="word">I'll</span>
                    <rt class="below">患病的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jʊr; jər]</rt>
                    <span class="word">your</span>
                    <rt class="below">你的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɑːðər]</rt>
                    <span class="word">father</span>
                    <rt class="below">父亲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[stɑːks]</rt>
                    <span class="word">stocks</span>
                    <rt class="below">股票</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我要把你父亲关进监狱。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[faɪn]</rt>
                    <span class="word">Fine</span>
                    <rt class="below">美好的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">罚款他？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">You</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kænt]</rt>
                    <span class="word">can't</span>
                    <rt class="below">不能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[faɪn]</rt>
                    <span class="word">fine</span>
                    <rt class="below">美好的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪˈnʌf]</rt>
                    <span class="word">enough</span>
                    <rt class="below">足够的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你对他的罚款再多也不为过。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wɑːts]</rt>
                    <span class="word">What's</span>
                    <rt class="below">什么是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pɔɪnt]</rt>
                    <span class="word">point</span>
                    <rt class="below">观点</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfaɪnɪŋ]</rt>
                    <span class="word">fining</span>
                    <rt class="below">澄清</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈpɜːrs(ə)n]</rt>
                    <span class="word">person</span>
                    <rt class="below">人</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[huː]</rt>
                    <span class="word">who</span>
                    <rt class="below">WHO</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪl]</rt>
                    <span class="word">will</span>
                    <rt class="below">将要</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊnli]</rt>
                    <span class="word">only</span>
                    <rt class="below">仅有的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡoʊ]</rt>
                    <span class="word">go</span>
                    <rt class="below">去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rɑːb]</rt>
                    <span class="word">rob</span>
                    <rt class="below">抢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːr]</rt>
                    <span class="word">or</span>
                    <rt class="below">或者</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈswɪnd(ə)l]</rt>
                    <span class="word">swindle</span>
                    <rt class="below">骗取</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmʌniz]</rt>
                    <span class="word">monies</span>
                    <rt class="below">金钱</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[seɪm]</rt>
                    <span class="word">same</span>
                    <rt class="below">相同的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈvæljuː]</rt>
                    <span class="word">value</span>
                    <rt class="below">价值</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sʌm; səm]</rt>
                    <span class="word">some</span>
                    <rt class="below">一些</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɪnəs(ə)nt]</rt>
                    <span class="word">innocent</span>
                    <rt class="below">清白的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[huː]</rt>
                    <span class="word">who</span>
                    <rt class="below">WHO</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkrɔːsɪz]</rt>
                    <span class="word">crosses</span>
                    <rt class="below">十字架</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pæθ]</rt>
                    <span class="word">path</span>
                    <rt class="below">小路</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">对一个只会从遇到的无辜者身上抢劫或诈骗同等价值金钱的人处以罚款有什么意义呢？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[moʊnz]</rt>
                    <span class="word">moans</span>
                    <rt class="below">呻吟</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">:</rt>
                    <span class="word">:</span>
                    <rt class="below">:</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他呻吟道：</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[traɪz]</rt>
                    <span class="word">tries</span>
                    <rt class="below">尝试</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪˈðaʊt]</rt>
                    <span class="word">without</span>
                    <rt class="below">没有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪnˈtruːdɪŋ]</rt>
                    <span class="word">intruding</span>
                    <rt class="below">侵扰</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">尝试在不打扰的情况下完成此事。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">There</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “那里，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">there</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">那里，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">there</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">那里，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪspərz]</rt>
                    <span class="word">whispers</span>
                    <rt class="below">耳语</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特低声说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪd]</rt>
                    <span class="word">I'd</span>
                    <rt class="below">ID</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[seɪ]</rt>
                    <span class="word">say</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmædʒɪˌstreɪts]</rt>
                    <span class="word">magistrates</span>
                    <rt class="below">治安法官</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæd; həd]</rt>
                    <span class="word">had</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">their</span>
                    <rt class="below">他们的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbelifʊl]</rt>
                    <span class="word">bellyful</span>
                    <rt class="below">饱腹</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “我想说，治安官们已经吃饱了。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">If</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːt]</rt>
                    <span class="word">not</span>
                    <rt class="below">不是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːtərɪŋ]</rt>
                    <span class="word">watering</span>
                    <rt class="below">浇水</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[eɪl]</rt>
                    <span class="word">ale</span>
                    <rt class="below">麦酒</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈrʌnɪŋ]</rt>
                    <span class="word">running</span>
                    <rt class="below">跑步</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪˈliːɡ(ə)l]</rt>
                    <span class="word">illegal</span>
                    <rt class="below">非法的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biːsts]</rt>
                    <span class="word">beasts</span>
                    <rt class="below">野兽</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkɑːmən]</rt>
                    <span class="word">common</span>
                    <rt class="below">常见的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">“如果他不往啤酒里加水，他就会在公共场所非法放牧牲畜，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːt]</rt>
                    <span class="word">not</span>
                    <rt class="below">不是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɪˈspɔɪlɪŋ]</rt>
                    <span class="word">despoiling</span>
                    <rt class="below">掠夺</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkɑːmən]</rt>
                    <span class="word">common</span>
                    <rt class="below">常见的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈsɔːltɪŋ]</rt>
                    <span class="word">assaulting</span>
                    <rt class="below">袭击</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æn; ən]</rt>
                    <span class="word">an</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɑːfɪsər]</rt>
                    <span class="word">officer</span>
                    <rt class="below">官</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[piːs]</rt>
                    <span class="word">peace</span>
                    <rt class="below">和平</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">如果他没有掠夺公共财产，那他就是在袭击治安官，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːt]</rt>
                    <span class="word">not</span>
                    <rt class="below">不是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[drʌŋk]</rt>
                    <span class="word">drunk</span>
                    <rt class="below">醉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ded]</rt>
                    <span class="word">dead</span>
                    <rt class="below">死的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[drʌŋk]</rt>
                    <span class="word">drunk</span>
                    <rt class="below">醉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">如果他没喝醉，那他肯定喝得烂醉如泥了，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːt]</rt>
                    <span class="word">not</span>
                    <rt class="below">不是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ded]</rt>
                    <span class="word">dead</span>
                    <rt class="below">死的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈfɔːr]</rt>
                    <span class="word">before</span>
                    <rt class="below">前</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[taɪm]</rt>
                    <span class="word">time</span>
                    <rt class="below">时间</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðerz]</rt>
                    <span class="word">there's</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊ]</rt>
                    <span class="word">no</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdʒʌstɪs]</rt>
                    <span class="word">justice</span>
                    <rt class="below">正义</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːrld]</rt>
                    <span class="word">world</span>
                    <rt class="below">世界</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">如果他没有英年早逝，那么这个世界就没有正义了。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɪnɪʃt]</rt>
                    <span class="word">Finished</span>
                    <rt class="below">完成的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “完成的？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃiː; ʃi]</rt>
                    <span class="word">She</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɜːrnz]</rt>
                    <span class="word">turns</span>
                    <rt class="below">转弯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bæk]</rt>
                    <span class="word">back</span>
                    <rt class="below">后退</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">她转身面对他。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɑːm]</rt>
                    <span class="word">Tom</span>
                    <rt class="below">汤姆</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “汤姆，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[juːd]</rt>
                    <span class="word">you'd</span>
                    <rt class="below">你会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbetər]</rt>
                    <span class="word">better</span>
                    <rt class="below">更好的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[steɪ]</rt>
                    <span class="word">stay</span>
                    <rt class="below">停留</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌs; əs]</rt>
                    <span class="word">us</span>
                    <rt class="below">我们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[naʊ]</rt>
                    <span class="word">now</span>
                    <rt class="below">现在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你现在最好和我们呆在一起。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmz]</rt>
                    <span class="word">Williams</span>
                    <rt class="below">威廉姆斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根·威廉姆斯，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">what</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[seɪ]</rt>
                    <span class="word">say</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你怎么说？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiːl]</rt>
                    <span class="word">He'll</span>
                    <rt class="below">地狱</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biː; bi]</rt>
                    <span class="word">be</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡʊd]</rt>
                    <span class="word">good</span>
                    <rt class="below">好的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈhevi]</rt>
                    <span class="word">heavy</span>
                    <rt class="below">重的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːrk]</rt>
                    <span class="word">work</span>
                    <rt class="below">工作</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他能胜任繁重的工作，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wen]</rt>
                    <span class="word">when</span>
                    <rt class="below">什么时候</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːld]</rt>
                    <span class="word">healed</span>
                    <rt class="below">痊愈</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">当他痊愈的时候。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæn; kən]</rt>
                    <span class="word">can</span>
                    <rt class="below">能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɪɡjərz]</rt>
                    <span class="word">figures</span>
                    <rt class="below">数字</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他可以为你计算数字，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæn; kən]</rt>
                    <span class="word">can</span>
                    <rt class="below">能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æd]</rt>
                    <span class="word">add</span>
                    <rt class="below">添加</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他可以添加和...</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wɑːts]</rt>
                    <span class="word">what's</span>
                    <rt class="below">什么是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈʌðər]</rt>
                    <span class="word">other</span>
                    <rt class="below">其他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɪŋ]</rt>
                    <span class="word">thing</span>
                    <rt class="below">事物</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">还有什么事？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɔːl]</rt>
                    <span class="word">All</span>
                    <rt class="below">全部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raɪt]</rt>
                    <span class="word">right</span>
                    <rt class="below">正确的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">好的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[doʊnt]</rt>
                    <span class="word">don't</span>
                    <rt class="below">不</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[læf]</rt>
                    <span class="word">laugh</span>
                    <rt class="below">笑</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æt; ət]</rt>
                    <span class="word">at</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miː; mi]</rt>
                    <span class="word">me</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">别笑我，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[haʊ]</rt>
                    <span class="word">how</span>
                    <rt class="below">如何</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[mʌtʃ]</rt>
                    <span class="word">much</span>
                    <rt class="below">很多</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[taɪm]</rt>
                    <span class="word">time</span>
                    <rt class="below">时间</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɪŋk]</rt>
                    <span class="word">think</span>
                    <rt class="below">思考</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæd; həd]</rt>
                    <span class="word">had</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈlɜːrnɪŋ]</rt>
                    <span class="word">learning</span>
                    <rt class="below">学习</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɪɡjərz]</rt>
                    <span class="word">figures</span>
                    <rt class="below">数字</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你认为我花了多少时间学习数字，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɑːðər]</rt>
                    <span class="word">father</span>
                    <rt class="below">父亲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[laɪk]</rt>
                    <span class="word">like</span>
                    <rt class="below">喜欢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">有这样的父亲？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">If</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæn; kən]</rt>
                    <span class="word">can</span>
                    <rt class="below">能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raɪt]</rt>
                    <span class="word">write</span>
                    <rt class="below">写</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[neɪm]</rt>
                    <span class="word">name</span>
                    <rt class="below">姓名</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">如果我能写下我的名字，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪts]</rt>
                    <span class="word">it's</span>
                    <rt class="below">它是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈkəz, bɪˈkɔːz]</rt>
                    <span class="word">because</span>
                    <rt class="below">因为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɑːm]</rt>
                    <span class="word">Tom</span>
                    <rt class="below">汤姆</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪr]</rt>
                    <span class="word">here</span>
                    <rt class="below">这里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɔːt]</rt>
                    <span class="word">taught</span>
                    <rt class="below">教</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miː; mi]</rt>
                    <span class="word">me</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">这是因为汤姆教了我。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[woʊnt]</rt>
                    <span class="word">won't</span>
                    <rt class="below">惯于</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “他不会的。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[laɪk]</rt>
                    <span class="word">like</span>
                    <rt class="below">喜欢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “喜欢。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæn; kən]</rt>
                    <span class="word">can</span>
                    <rt class="below">能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈoʊnli]</rt>
                    <span class="word">only</span>
                    <rt class="below">仅有的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmænɪdʒ]</rt>
                    <span class="word">manage</span>
                    <rt class="below">管理</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[laɪk]</rt>
                    <span class="word">like</span>
                    <rt class="below">喜欢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">:</rt>
                    <span class="word">:</span>
                    <rt class="below">:</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他只能这样做：</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ʃɔːrt]</rt>
                    <span class="word">short</span>
                    <rt class="below">短的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">短的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈsɪmp(ə)l]</rt>
                    <span class="word">simple</span>
                    <rt class="below">简单的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">简单的，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[dɪˈklærətɪv]</rt>
                    <span class="word">declarative</span>
                    <rt class="below">声明式</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsentənsɪz]</rt>
                    <span class="word">sentences</span>
                    <rt class="below">句子</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">陈述句。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[laɪk]</rt>
                    <span class="word">Like</span>
                    <rt class="below">喜欢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “喜欢？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃʊd; ʃəd]</rt>
                    <span class="word">should</span>
                    <rt class="below">应该</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biː; bi]</rt>
                    <span class="word">be</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈʃeɪmd]</rt>
                    <span class="word">ashamed</span>
                    <rt class="below">羞愧</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他应该感到羞耻，”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʃeɪm]</rt>
                    <span class="word">Shame</span>
                    <rt class="below">耻辱</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[left]</rt>
                    <span class="word">left</span>
                    <rt class="below">左边</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wen]</rt>
                    <span class="word">when</span>
                    <rt class="below">什么时候</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɑːd]</rt>
                    <span class="word">God</span>
                    <rt class="below">上帝</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[meɪd]</rt>
                    <span class="word">made</span>
                    <rt class="below">制成</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dæd]</rt>
                    <span class="word">dad</span>
                    <rt class="below">爸爸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">“上帝创造我父亲的时候，并没有考虑羞耻感。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他说道：</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈkəz, bɪˈkɔːz]</rt>
                    <span class="word">Because</span>
                    <rt class="below">因为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “因为。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[dʒʌst]</rt>
                    <span class="word">Just</span>
                    <rt class="below">只是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪl]</rt>
                    <span class="word">mile</span>
                    <rt class="below">英里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈweɪ]</rt>
                    <span class="word">away</span>
                    <rt class="below">离开</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">仅一英里远。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæn; kən]</rt>
                    <span class="word">can</span>
                    <rt class="below">能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈiːzəli]</rt>
                    <span class="word">easily</span>
                    <rt class="below">容易地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他可以轻易做到。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʌm]</rt>
                    <span class="word">Come</span>
                    <rt class="below">来</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈæftər]</rt>
                    <span class="word">after</span>
                    <rt class="below">后</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “追上你了吗？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[dʒʌst]</rt>
                    <span class="word">Just</span>
                    <rt class="below">只是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[let]</rt>
                    <span class="word">let</span>
                    <rt class="below">让</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">就让他去吧。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdɛmənˌstreɪts]</rt>
                    <span class="word">demonstrates</span>
                    <rt class="below">演示</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɪst]</rt>
                    <span class="word">fist</span>
                    <rt class="below">拳头</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈɡen]</rt>
                    <span class="word">again</span>
                    <rt class="below">再次</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">:</rt>
                    <span class="word">:</span>
                    <rt class="below">:</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根再次展现拳头：</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈlɪt(ə)l]</rt>
                    <span class="word">little</span>
                    <rt class="below">小的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈnɜːrvi]</rt>
                    <span class="word">nervy</span>
                    <rt class="below">紧张</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[welʃ]</rt>
                    <span class="word">Welsh</span>
                    <rt class="below">威尔士语</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pʌntʃ]</rt>
                    <span class="word">punch</span>
                    <rt class="below">冲床</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他那紧张的威尔士拳。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈæftər]</rt>
                    <span class="word">After</span>
                    <rt class="below">后</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæd; həd]</rt>
                    <span class="word">had</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɪnɪʃt]</rt>
                    <span class="word">finished</span>
                    <rt class="below">完成的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ 'swɔbiŋ ]</rt>
                    <span class="word">swabbing</span>
                    <rt class="below">擦拭</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmz]</rt>
                    <span class="word">Williams</span>
                    <rt class="below">威廉姆斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæd; həd]</rt>
                    <span class="word">had</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[siːst]</rt>
                    <span class="word">ceased</span>
                    <rt class="below">停止</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[boʊstɪŋ]</rt>
                    <span class="word">boasting</span>
                    <rt class="below">吹牛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˌriːkənˈstrʌktɪŋ]</rt>
                    <span class="word">reconstructing</span>
                    <rt class="below">重建</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈsɔːlt]</rt>
                    <span class="word">assault</span>
                    <rt class="below">突击</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特给他擦完血，摩根·威廉姆斯也停止了吹嘘和重现袭击事件后，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[leɪ]</rt>
                    <span class="word">lay</span>
                    <rt class="below">躺着</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æn; ən]</rt>
                    <span class="word">an</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈaʊər]</rt>
                    <span class="word">hour</span>
                    <rt class="below">小时</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɔːr]</rt>
                    <span class="word">or</span>
                    <rt class="below">或者</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː]</rt>
                    <span class="word">two</span>
                    <rt class="below">二</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他躺了一两个小时，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rɪˈkʌvər]</rt>
                    <span class="word">recover</span>
                    <rt class="below">恢复</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[frʌm; frəm]</rt>
                    <span class="word">from</span>
                    <rt class="below">从</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">从中恢复过来。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈdʊrɪŋ]</rt>
                    <span class="word">During</span>
                    <rt class="below">期间</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[taɪm]</rt>
                    <span class="word">time</span>
                    <rt class="below">时间</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">在此期间，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[keɪm]</rt>
                    <span class="word">came</span>
                    <rt class="below">来了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɔːr]</rt>
                    <span class="word">door</span>
                    <rt class="below">门</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">沃尔特来到门口，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wɪð; wɪθ]</rt>
                    <span class="word">with</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sʌm; səm]</rt>
                    <span class="word">some</span>
                    <rt class="below">一些</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈkweɪntəns]</rt>
                    <span class="word">acquaintance</span>
                    <rt class="below">熟人</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">和他的一些熟人，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">there</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsɜːrt(ə)n]</rt>
                    <span class="word">certain</span>
                    <rt class="below">肯定</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈmaʊnt]</rt>
                    <span class="word">amount</span>
                    <rt class="below">数量</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈʃaʊtɪŋ]</rt>
                    <span class="word">shouting</span>
                    <rt class="below">大喊</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkɪkɪŋ]</rt>
                    <span class="word">kicking</span>
                    <rt class="below">踢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ dɔ:z ]</rt>
                    <span class="word">doors</span>
                    <rt class="below">门</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">还有一些喊叫声和踢门声，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðoʊ]</rt>
                    <span class="word">though</span>
                    <rt class="below">尽管</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[keɪm]</rt>
                    <span class="word">came</span>
                    <rt class="below">来了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmʌfld]</rt>
                    <span class="word">muffled</span>
                    <rt class="below">低沉的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[weɪ]</rt>
                    <span class="word">way</span>
                    <rt class="below">方式</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɔːt]</rt>
                    <span class="word">thought</span>
                    <rt class="below">想法</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪt]</rt>
                    <span class="word">might</span>
                    <rt class="below">可能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[driːmd]</rt>
                    <span class="word">dreamed</span>
                    <rt class="below">梦见</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">尽管这声音是以一种模糊的方式传到他耳中，他还是觉得自己可能在做梦。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">The</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkwestʃən]</rt>
                    <span class="word">question</span>
                    <rt class="below">问题</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪnd]</rt>
                    <span class="word">mind</span>
                    <rt class="below">头脑</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他心中的问题是，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">what</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æm; əm]</rt>
                    <span class="word">am</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɡoʊɪŋ]</rt>
                    <span class="word">going</span>
                    <rt class="below">去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我该怎么办？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kænt]</rt>
                    <span class="word">can't</span>
                    <rt class="below">不能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[steɪ]</rt>
                    <span class="word">stay</span>
                    <rt class="below">停留</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈpʌtni]</rt>
                    <span class="word">Putney</span>
                    <rt class="below">普特尼</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我不能留在普特尼。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈpɑːrtli]</rt>
                    <span class="word">Partly</span>
                    <rt class="below">部分地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈkəz, bɪˈkɔːz]</rt>
                    <span class="word">because</span>
                    <rt class="below">因为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmeməri]</rt>
                    <span class="word">memory</span>
                    <rt class="below">记忆</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkʌmɪŋ]</rt>
                    <span class="word">coming</span>
                    <rt class="below">未来</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bæk]</rt>
                    <span class="word">back</span>
                    <rt class="below">后退</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">部分原因是他的记忆正在恢复，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[deɪ]</rt>
                    <span class="word">day</span>
                    <rt class="below">天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪˈfɔːr]</rt>
                    <span class="word">before</span>
                    <rt class="below">前</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈjestərdeɪ]</rt>
                    <span class="word">yesterday</span>
                    <rt class="below">昨天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɜːrliər]</rt>
                    <span class="word">earlier</span>
                    <rt class="below">较早</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[faɪt]</rt>
                    <span class="word">fight</span>
                    <rt class="below">斗争</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">对于前天和之前的战斗，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɪŋks]</rt>
                    <span class="word">thinks</span>
                    <rt class="below">认为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">there</span>
                    <rt class="below">那里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪt]</rt>
                    <span class="word">might</span>
                    <rt class="below">可能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɪn]</rt>
                    <span class="word">been</span>
                    <rt class="below">到过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[naɪf]</rt>
                    <span class="word">knife</span>
                    <rt class="below">刀</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsʌmwer]</rt>
                    <span class="word">somewhere</span>
                    <rt class="below">某处</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他认为里面可能有一把刀；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[huːˈevər]</rt>
                    <span class="word">whoever</span>
                    <rt class="below">谁</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[stʌk]</rt>
                    <span class="word">stuck</span>
                    <rt class="below">卡住</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">不管它被困在谁体内，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɑːznt]</rt>
                    <span class="word">wasn't</span>
                    <rt class="below">不是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">不是他，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[soʊ]</rt>
                    <span class="word">so</span>
                    <rt class="below">所以</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[baɪ]</rt>
                    <span class="word">by</span>
                    <rt class="below">经过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">那么这是他写的吗？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɔːl]</rt>
                    <span class="word">All</span>
                    <rt class="below">全部</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˌʌnˈklɪr]</rt>
                    <span class="word">unclear</span>
                    <rt class="below">不清楚</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪnd]</rt>
                    <span class="word">mind</span>
                    <rt class="below">头脑</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">这一切，他心里都不清楚。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wʌt]</rt>
                    <span class="word">What</span>
                    <rt class="below">什么</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[klɪr]</rt>
                    <span class="word">clear</span>
                    <rt class="below">清除</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[θɔːt]</rt>
                    <span class="word">thought</span>
                    <rt class="below">想法</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈbaʊt]</rt>
                    <span class="word">about</span>
                    <rt class="below">关于</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">:</rt>
                    <span class="word">:</span>
                    <rt class="below">:</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他对沃尔特的看法是显而易见的：</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪv]</rt>
                    <span class="word">I've</span>
                    <rt class="below">我已经</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæd; həd]</rt>
                    <span class="word">had</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪˈnʌf]</rt>
                    <span class="word">enough</span>
                    <rt class="below">足够的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我受够了。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">If</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡets]</rt>
                    <span class="word">gets</span>
                    <rt class="below">获取</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈæftər]</rt>
                    <span class="word">after</span>
                    <rt class="below">后</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miː; mi]</rt>
                    <span class="word">me</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈɡen]</rt>
                    <span class="word">again</span>
                    <rt class="below">再次</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪm]</rt>
                    <span class="word">I'm</span>
                    <rt class="below">我是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɡoʊɪŋ]</rt>
                    <span class="word">going</span>
                    <rt class="below">去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɪl]</rt>
                    <span class="word">kill</span>
                    <rt class="below">杀</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">如果他再来找我，我就杀了他，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kɪl]</rt>
                    <span class="word">kill</span>
                    <rt class="below">杀</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðeɪl]</rt>
                    <span class="word">they'll</span>
                    <rt class="below">他们会</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæŋ]</rt>
                    <span class="word">hang</span>
                    <rt class="below">悬挂</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miː; mi]</rt>
                    <span class="word">me</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">如果我杀了他，他们就会绞死我，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">if</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðeɪr]</rt>
                    <span class="word">they're</span>
                    <rt class="below">他们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɡoʊɪŋ]</rt>
                    <span class="word">going</span>
                    <rt class="below">去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæŋ]</rt>
                    <span class="word">hang</span>
                    <rt class="below">悬挂</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[miː; mi]</rt>
                    <span class="word">me</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɑːnt]</rt>
                    <span class="word">want</span>
                    <rt class="below">想</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbetər]</rt>
                    <span class="word">better</span>
                    <rt class="below">更好的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈriːz(ə)n]</rt>
                    <span class="word">reason</span>
                    <rt class="below">原因</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">如果他们要绞死我，我希望有一个更好的理由。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bɪˈloʊ]</rt>
                    <span class="word">Below</span>
                    <rt class="below">以下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">以下，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raɪz]</rt>
                    <span class="word">rise</span>
                    <rt class="below">上升</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːl]</rt>
                    <span class="word">fall</span>
                    <rt class="below">落下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðer; ðər]</rt>
                    <span class="word">their</span>
                    <rt class="below">他们的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈvɔɪsɪz]</rt>
                    <span class="word">voices</span>
                    <rt class="below">声音</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他们声音的起伏。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kænt]</rt>
                    <span class="word">can't</span>
                    <rt class="below">不能</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pɪk]</rt>
                    <span class="word">pick</span>
                    <rt class="below">挑选</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈevri]</rt>
                    <span class="word">every</span>
                    <rt class="below">每一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːrd]</rt>
                    <span class="word">word</span>
                    <rt class="below">单词</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他无法辨认出每一个字。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ bə:nd ]</rt>
                    <span class="word">burned</span>
                    <rt class="below">烧毁</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈboʊts]</rt>
                    <span class="word">boats</span>
                    <rt class="below">船只</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根说他已经破釜沉舟了。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[rɪˈpɛntɪŋ]</rt>
                    <span class="word">repenting</span>
                    <rt class="below">悔改</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɜːr; hər]</rt>
                    <span class="word">her</span>
                    <rt class="below">她</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɜːrst]</rt>
                    <span class="word">first</span>
                    <rt class="below">第一的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɔːfər]</rt>
                    <span class="word">offer</span>
                    <rt class="below">提供</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> Kat 后悔了她第一次的提议，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[poʊst]</rt>
                    <span class="word">post</span>
                    <rt class="below">邮政</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">as</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pɑːt]</rt>
                    <span class="word">pot</span>
                    <rt class="below">锅</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">-</rt>
                    <span class="word">-</span>
                    <rt class="below">-</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bɔɪ]</rt>
                    <span class="word">boy</span>
                    <rt class="below">男生</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">担任酒保，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈdʒen(ə)rəl]</rt>
                    <span class="word">general</span>
                    <rt class="below">一般的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fækˈtoʊtəm]</rt>
                    <span class="word">factotum</span>
                    <rt class="below">杂役</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈtʃʌkər]</rt>
                    <span class="word">chucker</span>
                    <rt class="below">投掷者</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">-</rt>
                    <span class="word">-</span>
                    <rt class="below">-</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">;</rt>
                    <span class="word">;</span>
                    <rt class="below">;</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">一般杂务工和打杂工；</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[bɪˈkəz, bɪˈkɔːz]</rt>
                    <span class="word">because</span>
                    <rt class="below">因为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">因为，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡənz]</rt>
                    <span class="word">Morgan's</span>
                    <rt class="below">摩根的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈseɪɪŋ]</rt>
                    <span class="word">saying</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪl]</rt>
                    <span class="word">will</span>
                    <rt class="below">将要</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɔːlweɪz]</rt>
                    <span class="word">always</span>
                    <rt class="below">总是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biː; bi]</rt>
                    <span class="word">be</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈkʌmɪŋ]</rt>
                    <span class="word">coming</span>
                    <rt class="below">未来</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raʊnd]</rt>
                    <span class="word">round</span>
                    <rt class="below">圆形的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪr]</rt>
                    <span class="word">here</span>
                    <rt class="below">这里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “沃尔特会经常来这里，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[woʊnt]</rt>
                    <span class="word">won't</span>
                    <rt class="below">惯于</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">不会吧？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">And</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">-</rt>
                    <span class="word">'</span>
                    <rt class="below">-</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɛrz]</rt>
                    <span class="word">Where's</span>
                    <rt class="below">在哪里</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tɑːm]</rt>
                    <span class="word">Tom</span>
                    <rt class="below">汤姆</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">还有“汤姆在哪里”，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[send]</rt>
                    <span class="word">send</span>
                    <rt class="below">发送</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hoʊm]</rt>
                    <span class="word">home</span>
                    <rt class="below">家</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">送他回家，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[huː]</rt>
                    <span class="word">who</span>
                    <rt class="below">WHO</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[peɪd]</rt>
                    <span class="word">paid</span>
                    <rt class="below">有薪酬的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈblʌdi]</rt>
                    <span class="word">bloody</span>
                    <rt class="below">血腥</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[priːst]</rt>
                    <span class="word">priest</span>
                    <rt class="below">牧师</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tiːtʃ]</rt>
                    <span class="word">teach</span>
                    <rt class="below">教</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[riːd]</rt>
                    <span class="word">read</span>
                    <rt class="below">读</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[raɪt]</rt>
                    <span class="word">write</span>
                    <rt class="below">写</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他付钱给血腥牧师，让他教他读书写字，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[dɪd]</rt>
                    <span class="word">did</span>
                    <rt class="below">做过</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我做到了，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jʊr]</rt>
                    <span class="word">you're</span>
                    <rt class="below">你是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈriːpɪŋ]</rt>
                    <span class="word">reaping</span>
                    <rt class="below">收割</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈblʌdi]</rt>
                    <span class="word">bloody</span>
                    <rt class="below">血腥</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈbenɪfɪt]</rt>
                    <span class="word">benefit</span>
                    <rt class="below">益处</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[naʊ]</rt>
                    <span class="word">now</span>
                    <rt class="below">现在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">现在你正在收获血腥的利益，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[liːk]</rt>
                    <span class="word">leek</span>
                    <rt class="below">韭葱</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">-</rt>
                    <span class="word">-</span>
                    <rt class="below">-</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈiːtɪŋ]</rt>
                    <span class="word">eating</span>
                    <rt class="below">吃</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʌnt]</rt>
                    <span class="word">cunt</span>
                    <rt class="below">屄</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">-</rt>
                    <span class="word">'</span>
                    <rt class="below">-</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你这个吃韭菜的混蛋。’</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> ”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[kʌmz]</rt>
                    <span class="word">comes</span>
                    <rt class="below">來</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˌdaʊnˈsterz]</rt>
                    <span class="word">downstairs</span>
                    <rt class="below">楼下</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他下楼了。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈtʃɪrəli]</rt>
                    <span class="word">cheerily</span>
                    <rt class="below">愉快地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根高兴地说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[jʊr]</rt>
                    <span class="word">You're</span>
                    <rt class="below">你是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈlʊkɪŋ]</rt>
                    <span class="word">looking</span>
                    <rt class="below">寻找</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wel]</rt>
                    <span class="word">well</span>
                    <rt class="below">出色地</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “你看上去气色不错，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kənˈsɪdərɪŋ]</rt>
                    <span class="word">considering</span>
                    <rt class="below">考虑</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">考虑。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">The</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[truːθ]</rt>
                    <span class="word">truth</span>
                    <rt class="below">真相</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈbaʊt]</rt>
                    <span class="word">about</span>
                    <rt class="below">关于</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmz]</rt>
                    <span class="word">Williams</span>
                    <rt class="below">威廉姆斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">—</rt>
                    <span class="word">—</span>
                    <rt class="below">—</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdʌzənt]</rt>
                    <span class="word">doesn't</span>
                    <rt class="below">没有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[laɪk]</rt>
                    <span class="word">like</span>
                    <rt class="below">喜欢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪm; ɪm]</rt>
                    <span class="word">him</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈeni]</rt>
                    <span class="word">any</span>
                    <rt class="below">任何</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[les]</rt>
                    <span class="word">less</span>
                    <rt class="below">较少的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">—</rt>
                    <span class="word">—</span>
                    <rt class="below">—</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[truːθ]</rt>
                    <span class="word">truth</span>
                    <rt class="below">真相</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">事实是，关于摩根·威廉姆斯——他并没有因此而不喜欢他——事实是，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðɪs]</rt>
                    <span class="word">this</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪˈdiːə]</rt>
                    <span class="word">idea</span>
                    <rt class="below">主意</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæz; həz]</rt>
                    <span class="word">has</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌn]</rt>
                    <span class="word">one</span>
                    <rt class="below">一</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[deɪ]</rt>
                    <span class="word">day</span>
                    <rt class="below">天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiːl]</rt>
                    <span class="word">he'll</span>
                    <rt class="below">地狱</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[biːt]</rt>
                    <span class="word">beat</span>
                    <rt class="below">打</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌp]</rt>
                    <span class="word">up</span>
                    <rt class="below">向上</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɑːðər]</rt>
                    <span class="word">father</span>
                    <rt class="below">父亲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">-</rt>
                    <span class="word">-</span>
                    <rt class="below">-</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">-</rt>
                    <span class="word">-</span>
                    <rt class="below">-</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[lɔː]</rt>
                    <span class="word">law</span>
                    <rt class="below">法律</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他有这个想法，有一天他会打他的岳父，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪts]</rt>
                    <span class="word">it's</span>
                    <rt class="below">它是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsoʊlli]</rt>
                    <span class="word">solely</span>
                    <rt class="below">仅</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪz; ɪz]</rt>
                    <span class="word">his</span>
                    <rt class="below">他的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪnd]</rt>
                    <span class="word">mind</span>
                    <rt class="below">头脑</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">这完全是他的想法。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">In</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[fækt]</rt>
                    <span class="word">fact</span>
                    <rt class="below">事实</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">实际上，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiːz]</rt>
                    <span class="word">he's</span>
                    <rt class="below">他是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfraɪt(ə)nd]</rt>
                    <span class="word">frightened</span>
                    <rt class="below">害怕</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他害怕沃尔特，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[laɪk]</rt>
                    <span class="word">like</span>
                    <rt class="below">喜欢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">a</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡʊd]</rt>
                    <span class="word">good</span>
                    <rt class="below">好的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmeni]</rt>
                    <span class="word">many</span>
                    <rt class="below">许多</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈpiːp(ə)l]</rt>
                    <span class="word">people</span>
                    <rt class="below">人们</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪn]</rt>
                    <span class="word">in</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈpʌtni]</rt>
                    <span class="word">Putney</span>
                    <rt class="below">普特尼</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">—</rt>
                    <span class="word">—</span>
                    <rt class="below">—</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">就像普特尼的许多人一样——而且，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[fɔːr; fər]</rt>
                    <span class="word">for</span>
                    <rt class="below">为了</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmætər]</rt>
                    <span class="word">matter</span>
                    <rt class="below">事情</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">就此而言，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrtˌleɪk]</rt>
                    <span class="word">Mortlake</span>
                    <rt class="below">莫特莱克</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪmbldən]</rt>
                    <span class="word">Wimbledon</span>
                    <rt class="below">温布尔登网球公开赛</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">莫特莱克和温布尔登。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他说道：</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪm]</rt>
                    <span class="word">I'm</span>
                    <rt class="below">我是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɑːn]</rt>
                    <span class="word">on</span>
                    <rt class="below">在</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[weɪ]</rt>
                    <span class="word">way</span>
                    <rt class="below">方式</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “我正在路上，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ðen]</rt>
                    <span class="word">then</span>
                    <rt class="below">然后</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">然后。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">You</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hæv; həv]</rt>
                    <span class="word">have</span>
                    <rt class="below">有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[steɪ]</rt>
                    <span class="word">stay</span>
                    <rt class="below">停留</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[təˈnaɪt]</rt>
                    <span class="word">tonight</span>
                    <rt class="below">今晚</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “你今晚必须留下来。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">You</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊ]</rt>
                    <span class="word">know</span>
                    <rt class="below">知道</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈsekənd]</rt>
                    <span class="word">second</span>
                    <rt class="below">第二</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[deɪ]</rt>
                    <span class="word">day</span>
                    <rt class="below">天</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɜːrst]</rt>
                    <span class="word">worst</span>
                    <rt class="below">最差</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">你知道第二天是最糟糕的。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[huːz]</rt>
                    <span class="word">Who's</span>
                    <rt class="below">谁是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">he</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɡoʊɪŋ]</rt>
                    <span class="word">going</span>
                    <rt class="below">去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[hɪt]</rt>
                    <span class="word">hit</span>
                    <rt class="below">打</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wen]</rt>
                    <span class="word">when</span>
                    <rt class="below">什么时候</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪm]</rt>
                    <span class="word">I'm</span>
                    <rt class="below">我是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɔːn]</rt>
                    <span class="word">gone</span>
                    <rt class="below">已消失</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “我走了之后他会打谁呢？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[nɑːt]</rt>
                    <span class="word">Not</span>
                    <rt class="below">不是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈaʊər; ɑːr]</rt>
                    <span class="word">our</span>
                    <rt class="below">我们的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[əˈfer]</rt>
                    <span class="word">affair</span>
                    <rt class="below">事务</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “不关我们的事。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[kæt]</rt>
                    <span class="word">Kat</span>
                    <rt class="below">凯特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">凯特说道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bet]</rt>
                    <span class="word">Bet</span>
                    <rt class="below">赌注</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmærid]</rt>
                    <span class="word">married</span>
                    <rt class="below">已婚</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">and</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɑːt]</rt>
                    <span class="word">got</span>
                    <rt class="below">得到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aʊt]</rt>
                    <span class="word">out</span>
                    <rt class="below">出去</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ʌv; əv]</rt>
                    <span class="word">of</span>
                    <rt class="below">的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “贝特已经结婚并摆脱了婚姻，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[θæŋk]</rt>
                    <span class="word">thank</span>
                    <rt class="below">感谢</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɡɑːd]</rt>
                    <span class="word">God</span>
                    <rt class="below">上帝</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">感谢上帝。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɪljəmz]</rt>
                    <span class="word">Williams</span>
                    <rt class="below">威廉姆斯</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根·威廉姆斯说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪf]</rt>
                    <span class="word">If</span>
                    <rt class="below">如果</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈwɔːltər]</rt>
                    <span class="word">Walter</span>
                    <rt class="below">沃尔特</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wʌz; wəz]</rt>
                    <span class="word">was</span>
                    <rt class="below">曾是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[maɪ]</rt>
                    <span class="word">my</span>
                    <rt class="below">我的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈfɑːðər]</rt>
                    <span class="word">father</span>
                    <rt class="below">父亲</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “如果沃尔特是我的父亲，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪ]</rt>
                    <span class="word">I</span>
                    <rt class="below">我</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tel]</rt>
                    <span class="word">tell</span>
                    <rt class="below">告诉</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我告诉你，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[aɪd]</rt>
                    <span class="word">I'd</span>
                    <rt class="below">ID</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[teɪk]</rt>
                    <span class="word">take</span>
                    <rt class="below">拿</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[tuː; tə]</rt>
                    <span class="word">to</span>
                    <rt class="below">到</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðə; ði]</rt>
                    <span class="word">the</span>
                    <rt class="below">这</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[roʊd]</rt>
                    <span class="word">road</span>
                    <rt class="below">路</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我会上路。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[weɪts]</rt>
                    <span class="word">waits</span>
                    <rt class="below">等待</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他等待着。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[æz; əz]</rt>
                    <span class="word">As</span>
                    <rt class="below">作为</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪt]</rt>
                    <span class="word">it</span>
                    <rt class="below">它</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈhæpənz]</rt>
                    <span class="word">happens</span>
                    <rt class="below">發生</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “事实上，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[wiːv]</rt>
                    <span class="word">we've</span>
                    <rt class="below">我们已经</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈɡæðərd]</rt>
                    <span class="word">gathered</span>
                    <rt class="below">聚集</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sʌm; səm]</rt>
                    <span class="word">some</span>
                    <rt class="below">一些</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈredi]</rt>
                    <span class="word">ready</span>
                    <rt class="below">准备好</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈmʌni]</rt>
                    <span class="word">money</span>
                    <rt class="below">钱</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">我们已经筹措了一些现金。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ə; eɪ]</rt>
                    <span class="word">A</span>
                    <rt class="below">一个</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[pɔːz]</rt>
                    <span class="word">pause</span>
                    <rt class="below">暂停</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">停顿了一下。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[aɪl]</rt>
                    <span class="word">I'll</span>
                    <rt class="below">患病的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[peɪ]</rt>
                    <span class="word">pay</span>
                    <rt class="below">支付</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[bæk]</rt>
                    <span class="word">back</span>
                    <rt class="below">后退</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “我会还你的。”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈmɔːrɡən]</rt>
                    <span class="word">Morgan</span>
                    <rt class="below">摩根</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[sez]</rt>
                    <span class="word">says</span>
                    <rt class="below">说</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">摩根说，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈlæfɪŋ]</rt>
                    <span class="word">laughing</span>
                    <rt class="below">笑</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">笑，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[rɪˈliːvd]</rt>
                    <span class="word">relieved</span>
                    <rt class="below">松了一口气</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">松了一口气，</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">“</rt>
                    <span class="word">“</span>
                    <rt class="below">“</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ænd; ənd]</rt>
                    <span class="word">And</span>
                    <rt class="below">和</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[haʊ]</rt>
                    <span class="word">how</span>
                    <rt class="below">如何</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[wɪl]</rt>
                    <span class="word">will</span>
                    <rt class="below">将要</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[juː; jʊ]</rt>
                    <span class="word">you</span>
                    <rt class="below">你</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[duː; də]</rt>
                    <span class="word">do</span>
                    <rt class="below">做</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ðæt]</rt>
                    <span class="word">that</span>
                    <rt class="below">那</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “那你该怎么做呢？</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[tɑːm]</rt>
                    <span class="word">Tom</span>
                    <rt class="below">汤姆</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">?</rt>
                    <span class="word">?</span>
                    <rt class="below">?</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">”</rt>
                    <span class="word">”</span>
                    <rt class="below">”</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above"> “汤姆？”</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[hiː; hi]</rt>
                    <span class="word">He</span>
                    <rt class="below">他</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdʌzənt]</rt>
                    <span class="word">doesn't</span>
                    <rt class="below">没有</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[noʊ]</rt>
                    <span class="word">know</span>
                    <rt class="below">知道</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">.</rt>
                    <span class="word">.</span>
                    <rt class="below">.</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">他不知道。</span>
        </ruby>
        
            </div>
        </div>
        
        <div class="sentence-container">
            <div class="english">
                
                <ruby>
                    <rt class="above">[ˈbriːðɪŋ]</rt>
                    <span class="word">Breathing</span>
                    <rt class="below">呼吸</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ɪz]</rt>
                    <span class="word">is</span>
                    <rt class="below">是</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">[ˈdɪfɪkəlt]</rt>
                    <span class="word">difficult</span>
                    <rt class="below">难的</rt>
                </ruby>
                
                <ruby>
                    <rt class="above">,</rt>
                    <span class="word">,</span>
                    <rt class="below">,</rt>
                </ruby>
                
            </div>
            <div class="chinese">
                
        <ruby>
            <span class="above">呼吸困难，</span>
        </ruby>
        
            </div>
        </div>
        
        </div>

        <div id="manualNav" class="manual-nav">
            <button class="nav-btn" onclick="window.location.href=prevPageUrl">◀</button>
            <button class="nav-btn" onclick="goToNextPage()">▶</button>
        </div>

        <footer style="clear: both;text-align: center; font-size: 0.9em; color: #666; margin: 20px 0; padding-bottom: 60px;">
            <p>©叶兴阳双语音标有声读物.本网站点所有英文书籍内容均来自公共领域资源。</p>
            <p>经叶兴阳老师独家注音、翻译与重新排版，享有完整版权。未经授权禁止转载或商用。</p>
            <p>美式音标标注，美式发音朗诵。</p>     
        </footer>
    </body>
    
    <script>
        const START_INDEX = 0;
        const totalPages = 78;
        const nextPageUrl = "Wolf Hall (Hilary Mantel) (Z-Library)_000002.html";
        const prevPageUrl = "Wolf Hall (Hilary Mantel) (Z-Library)_000078.html";
        const firstPageUrl = "Wolf Hall (Hilary Mantel) (Z-Library)_000001.html";
        let currentIndex = 0;
        const audioFiles =[];
        let isPlaying = false;
        let isLeavingPage = false; 

        const activeAudios = new Set();
        let scrollTimeout = null;
        let isAutoScrolling = false;
        const positionKey = `playbackPosition_${window.location.href}`;
        const audioCache = {};

        const preloadQueue =[];
        let isPreloading = false;

        const storedConfig = window.AppConfig; 

        window.playCountPerSentence = parseInt(localStorage.getItem('playCountPerSentence')) || 1;
        window.playCountPerPage = parseInt(localStorage.getItem('playCountPerPage')) || 1;
        window.enableEarlyPlayback = localStorage.getItem('enableEarlyPlayback') === 'true';
        window.playbackRate = parseFloat(localStorage.getItem('playbackRate')) || 1.0;

        let currentSentencePlayCount = 0;
        let currentPagePlayCount = 0;
        window.consecutivePlaybackErrors = 0;
        window.hasShownPlaybackErrorAlert = false;

        let playTaskId = 0;
        let currentPlayTaskId = 0;

        function preloadAudios(startIndex, count) {
            const limit = Math.min(startIndex + count, audioFiles.length);
            for (let i = startIndex; i < limit; i++) {
                if (i < 0) continue;
                const url = audioFiles[i];
                if (!audioCache[url] && !preloadQueue.includes(url)) {
                    preloadQueue.push(url);
                }
            }
            processPreloadQueue();
        }

        async function processPreloadQueue() {
            if (isPreloading) return;
            isPreloading = true;

            while (preloadQueue.length > 0) {
                if (!navigator.onLine) {
                    await new Promise(resolve => setTimeout(resolve, 5000));
                    continue; 
                }
                const url = preloadQueue[0]; 

                if (audioCache[url]) {
                    preloadQueue.shift(); 
                    continue;
                }

                try {
                    const response = await fetch(url, { cache: "force-cache" });
                    if (!response.ok) throw new Error("HTTP Status " + response.status);

                    const blob = await response.blob();
                    const blobUrl = URL.createObjectURL(blob); 

                    const audio = new Audio(blobUrl);
                    audio.preload = "auto";
                    audioCache[url] = audio; 

                    preloadQueue.shift(); 
                } catch (error) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                }
            }
            isPreloading = false;
        }

        function goToNextPage() {
            isLeavingPage = true; 
            const scrollKey = `scrollPosition_${window.location.href}`;
            localStorage.setItem(scrollKey, 0);       
            localStorage.setItem(positionKey, 0);     
            window.location.href = nextPageUrl;       
        }

        window.addEventListener('load', function () {
            const scrollKey = `scrollPosition_${window.location.href}`;
            const scrollPosition = localStorage.getItem(scrollKey);
            if (scrollPosition) window.scrollTo(0, parseInt(scrollPosition));

            document.querySelectorAll('.english').forEach((el, index) => {
                const globalIndex = START_INDEX + index;
                const groupDir = String(Math.floor(globalIndex / 1000) * 1000).padStart(8, '0');
                audioFiles.push(`./语音/${groupDir}/${String(globalIndex).padStart(8, '0')}.mp3`);
                el.parentElement.id = `sentence-container-${index}`;
            });

            const savedPosition = localStorage.getItem(positionKey);
            if (savedPosition !== null) {
                currentIndex = parseInt(savedPosition, 10);
                if (currentIndex >= audioFiles.length) currentIndex = 0;
            }

            preloadAudios(currentIndex, 3);

            document.querySelectorAll('.sentence-container').forEach(container => {
                container.addEventListener('dblclick', function () { togglePlay(this); });
            });

            if (!window.AppConfig.isManualMode) {
                isPlaying = true;
                playNextSentence();
            } else {
                isPlaying = false;
            }

            const canvas = document.createElement('canvas');
            canvas.className = 'progress-canvas';
            canvas.width = 44; canvas.height = 44;
            document.body.appendChild(canvas);
            window.progressCanvas = canvas;
            window.progressCtx = canvas.getContext('2d');
            updateProgressRing();

            // 延迟计算一次容器位置 (保证字体渲染完)
            setTimeout(updateCachedPositions, 500); 
        });

        function updateProgressRing() {
            const ctx = window.progressCtx;
            const canvas = window.progressCanvas;
            if (!ctx || !canvas) return;
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = 20;
            const lineWidth = 4;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'rgba(0,0,0,0.5)';
            ctx.lineWidth = lineWidth;
            ctx.stroke();

            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            let scrollPercent = (docHeight <= 0) ? 0 : Math.min(1, Math.max(0, scrollTop / (docHeight * 1.05)));

            const startAngle = -Math.PI / 2;
            const endAngle = startAngle + scrollPercent * 2 * Math.PI;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.strokeStyle = '#16a34a'; 
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round';
            ctx.stroke();
        }

        // ================= 核心性能优化：缓存位置与节流滚动 =================
        let isScrolling = false;
        let cachedPositions = []; // 缓存所有句子的 Y 轴位置，避免重排风暴

        function updateCachedPositions() {
            const allContainers = document.querySelectorAll('.sentence-container');
            cachedPositions = Array.from(allContainers).map((container, index) => {
                return {
                    index: index,
                    top: container.offsetTop,
                    height: container.offsetHeight
                };
            });
        }

        window.addEventListener('resize', () => {
            setTimeout(updateCachedPositions, 300);
        });

        window.addEventListener('scroll', function () {
            if (isLeavingPage) return;

            const scrollKey = `scrollPosition_${window.location.href}`;
            localStorage.setItem(scrollKey, window.scrollY);

            // 替代原有的暴力 getBoundingClientRect，通过 requestAnimationFrame 控制帧率
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    handleScrollHighPerformance();
                    updateProgressRing();
                    isScrolling = false;
                });
            }
            isScrolling = true;
        }, { passive: true }); // passive 提升页面滚动流畅度

        function handleScrollHighPerformance() {
            if (isAutoScrolling || cachedPositions.length === 0) return;

            const viewportTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const targetPosition = viewportTop + (viewportHeight * 0.4); 

            let closestIndex = currentIndex;
            let minDistance = Infinity;

            for (let i = 0; i < cachedPositions.length; i++) {
                const pos = cachedPositions[i];
                const containerCenter = pos.top + (pos.height / 2);
                const distance = Math.abs(containerCenter - targetPosition);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = pos.index;
                } else if (distance > minDistance) {
                    break; 
                }
            }

            if (closestIndex !== currentIndex) {
                currentIndex = closestIndex;
                localStorage.setItem(positionKey, currentIndex);
                preloadAudios(currentIndex, 3);

                if (isPlaying && !window.AppConfig.isManualMode) {
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        playNextSentence();
                    }, 150);
                }
            }
        }
        // ====================================================================

        function cleanupCurrentAudio() {
            activeAudios.forEach(audio => {
                if (audio) {
                    audio.pause();
                    if (audio._endedHandler) audio.removeEventListener('ended', audio._endedHandler);
                    if (audio._errorHandler) audio.removeEventListener('error', audio._errorHandler);
                    if (audio._timeUpdateHandler) audio.removeEventListener('timeupdate', audio._timeUpdateHandler);
                }
            });
            activeAudios.clear();
        }

        function togglePlay(container) {
            const clickedIndex = parseInt(container.id.split('-')[2]);

            if (isPlaying && currentIndex === clickedIndex) {
                isPlaying = false;
                cleanupCurrentAudio();
                document.querySelectorAll('.sentence-container').forEach(el => el.classList.remove('highlight'));
            } else {
                isPlaying = false;
                cleanupCurrentAudio();
                document.querySelectorAll('.sentence-container').forEach(el => el.classList.remove('highlight'));

                currentIndex = clickedIndex;
                localStorage.setItem(positionKey, currentIndex);
                preloadAudios(currentIndex, 3);

                isPlaying = true;
                currentSentencePlayCount = 0;
                currentPagePlayCount = 0;
                playNextSentence();
            }
        }

        function playNextSentence(isOverlap = false) {
            const taskId = ++playTaskId;
            currentPlayTaskId = taskId;
            if (!isPlaying || taskId !== currentPlayTaskId) return;

            if (currentPagePlayCount >= window.playCountPerPage) {
                if (!window.AppConfig.isManualMode) {
                    window.location.href = nextPageUrl;
                } else {
                    isPlaying = false;
                    document.querySelectorAll('.sentence-container').forEach(el => el.classList.remove('highlight'));
                }
                return;
            }
            if (currentIndex >= audioFiles.length) {
                if (window.AppConfig.isManualMode) {
                    isPlaying = false;
                    document.querySelectorAll('.sentence-container').forEach(el => el.classList.remove('highlight'));
                    return;
                }
                currentPagePlayCount++;
                if (currentPagePlayCount < window.playCountPerPage) {
                    currentIndex = 0;
                    localStorage.setItem(positionKey, currentIndex);
                    window.scrollTo(0, 0);
                    setTimeout(() => { if (taskId === currentPlayTaskId) playNextSentence(); }, 500);
                } else {
                    window.location.href = nextPageUrl;
                }
                return;
            }

            if (!isOverlap) cleanupCurrentAudio();
            document.querySelectorAll('.sentence-container').forEach(el => el.classList.remove('highlight'));
            const currentContainer = document.getElementById(`sentence-container-${currentIndex}`);
            if (!currentContainer) return;
            currentContainer.classList.add('highlight');

            if (!window.AppConfig.isManualMode) {
                isAutoScrolling = true;
                currentContainer.scrollIntoView({ block: 'center', behavior: 'auto' });
                setTimeout(() => { isAutoScrolling = false; }, 500);
            }

            preloadAudios(currentIndex + 1, 50);

            const audioPath = audioFiles[currentIndex];
            let activeAudio;
            let cachedAudio = audioCache[audioPath];
            if (cachedAudio && activeAudios.has(cachedAudio)) {
                activeAudio = new Audio(cachedAudio.src || audioPath);
            } else {
                activeAudio = cachedAudio || new Audio(audioPath);
                if (!cachedAudio) {
                    audioCache[audioPath] = activeAudio;
                }
            }

            activeAudio.playbackRate = window.playbackRate; 

            activeAudios.add(activeAudio);
            activeAudio.currentTime = 0;
            let hasTriggeredNext = false;

            const onAudioEnded = function() {
                activeAudios.delete(activeAudio);
                if (hasTriggeredNext) return;
                if (taskId !== currentPlayTaskId) return;
                window.consecutivePlaybackErrors = 0;
                currentSentencePlayCount++;
                if (currentSentencePlayCount < window.playCountPerSentence) {
                    setTimeout(() => { if (taskId === currentPlayTaskId) playNextSentence(); }, 300);
                } else {
                    currentSentencePlayCount = 0;

                    if (window.AppConfig.isManualMode) {
                        isPlaying = false;
                        document.querySelectorAll('.sentence-container').forEach(el => el.classList.remove('highlight'));
                        return;
                    }

                    currentIndex++;
                    localStorage.setItem(positionKey, currentIndex);
                    playNextSentence();
                }
            };

            const onTimeUpdate = function() {
                if (!window.enableEarlyPlayback || hasTriggeredNext || taskId !== currentPlayTaskId) return;
                if (activeAudio && activeAudio.duration) {
                    let triggerTime = activeAudio.duration > 1.2 ? activeAudio.duration - 1.0 : (activeAudio.duration > 0.2 ? 0.2 : 0);
                    if (activeAudio.currentTime >= triggerTime) {
                        let willTrigger = false;
                        if (currentSentencePlayCount + 1 < window.playCountPerSentence) {
                            willTrigger = true;
                            currentSentencePlayCount++;
                        } else {
                            if (!window.AppConfig.isManualMode) {
                                const nextIndex = currentIndex + 1;
                                if (nextIndex < audioFiles.length) {
                                    willTrigger = true;
                                    currentSentencePlayCount = 0;
                                    currentIndex++;
                                    localStorage.setItem(positionKey, currentIndex);
                                }
                            }
                        }
                        if (willTrigger) {
                            hasTriggeredNext = true;
                            activeAudio.removeEventListener('timeupdate', onTimeUpdate);
                            playNextSentence(true);
                        }
                    }
                }
            };

            const onAudioError = function() {
                activeAudios.delete(activeAudio);
                if (taskId !== currentPlayTaskId) return;
                cleanupCurrentAudio();
                currentSentencePlayCount = 0;

                if (window.AppConfig.isManualMode) {
                    isPlaying = false;
                    document.querySelectorAll('.sentence-container').forEach(el => el.classList.remove('highlight'));
                    return;
                }

                currentIndex++;
                localStorage.setItem(positionKey, currentIndex);
                playNextSentence();
            };

            activeAudio._endedHandler = onAudioEnded;
            activeAudio._errorHandler = onAudioError;
            activeAudio._timeUpdateHandler = onTimeUpdate;
            activeAudio.addEventListener('ended', onAudioEnded);
            activeAudio.addEventListener('error', onAudioError);
            activeAudio.addEventListener('timeupdate', onTimeUpdate);

            activeAudio.play().then(() => {
                window.consecutivePlaybackErrors = 0;
            }).catch(e => {
                activeAudios.delete(activeAudio);
                if (taskId !== currentPlayTaskId) return;
                window.consecutivePlaybackErrors++;
                if (window.consecutivePlaybackErrors >= 20 && !window.hasShownPlaybackErrorAlert) {
                    alert("请允许浏览器自动播放，或者使用360浏览器打开。");
                    window.hasShownPlaybackErrorAlert = true;
                }
                cleanupCurrentAudio();
                currentSentencePlayCount = 0;

                if (window.AppConfig.isManualMode) {
                    isPlaying = false;
                    document.querySelectorAll('.sentence-container').forEach(el => el.classList.remove('highlight'));
                    return;
                }

                currentIndex++;
                playNextSentence();
            });
        }

        // ==========================================
        // UI 和控制面板逻辑
        // ==========================================
        (function() {
            const getBasePath = () => {
                const pathParts = location.pathname.split('/').slice(0, -1); 
                return pathParts.join('/') || '/';
            };
            const HISTORY_KEY = 'recentHistory_' + location.hostname + getBasePath();
            const MANUAL_BM_KEY = 'playHistory_' + location.hostname + getBasePath();

            let config = window.AppConfig;

            const OriginalAudio = window.Audio;
            window.__trackedAudios =[];
            window.Audio = function(src) {
                const a = new OriginalAudio(src);
                a.playbackRate = window.playbackRate;
                window.__trackedAudios.push(a);
                if(window.__trackedAudios.length > 50) {
                     window.__trackedAudios = window.__trackedAudios.filter(audio => !audio.paused || !audio.ended);
                }
                return a;
            };
            window.Audio.prototype = OriginalAudio.prototype;

            function saveConfig() {
                localStorage.setItem('app_settings_v4', JSON.stringify(config));
            }

            function updateStyle(key, value) {
                const root = document.documentElement;
                if (key === 'fontSize') {
                    root.style.setProperty('--u-font-scale', value);
                } else if (key === 'themeMode') {
                    if (value === 'night') {
                        root.style.setProperty('--u-text-color', '#ffffff');
                        root.style.setProperty('--u-bg-color', '#000000');
                    } else if (value === 'day') {
                        root.style.setProperty('--u-text-color', '#000000');
                        root.style.setProperty('--u-bg-color', '#ffffff');
                    } else if (value === 'custom') {
                        root.style.setProperty('--u-text-color', config.textColor);
                        root.style.setProperty('--u-bg-color', config.bgColor);
                    }
                } else if (key === 'textColor' && config.themeMode === 'custom') {
                    root.style.setProperty('--u-text-color', value);
                } else if (key === 'bgColor' && config.themeMode === 'custom') {
                    root.style.setProperty('--u-bg-color', value);
                }
            }

            function updateVisibility(type, isVisible) {
                const cls = 'hide-' + type;
                if (isVisible) document.documentElement.classList.remove(cls);
                else document.documentElement.classList.add(cls);
            }

            function updatePlaybackRate(rate) {
                window.playbackRate = rate;
                localStorage.setItem('playbackRate', rate);
                document.querySelectorAll('audio').forEach(a => a.playbackRate = rate);
                window.__trackedAudios.forEach(a => a.playbackRate = rate);
                activeAudios.forEach(a => a.playbackRate = rate);
            }

            function initUI() {
                const modalHTML = `
                <div id="modalBackdrop" class="modal-backdrop"></div>
                <div id="settingsModal" class="unified-modal">
                    <div class="modal-header">
                        <div class="tab-btn" data-tab="tab-playback">播放设置</div>
                        <div class="tab-btn" data-tab="tab-appearance">外观显示</div>
                        <div class="tab-btn active" data-tab="tab-history">记录收藏</div>
                    </div>

                    <div class="modal-body">
                        <div id="tab-playback" class="tab-content">
                            <div class="settings-group">
                                <div class="toggle-row">
                                    <span class="toggle-label" style="font-weight: bold; color: var(--primary-color);">📖 阅读模式(手动发音,不自动翻页)</span>
                                    <label class="switch">
                                        <input type="checkbox" id="manualModeToggle">
                                        <span class="slider"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="settings-group">
                                <div class="group-title">每句播放次数</div>
                                <div class="btn-row" id="sentenceCountBtns">
                                    <button class="option-btn" data-val="1">1次</button>
                                    <button class="option-btn" data-val="2">2次</button>
                                    <button class="option-btn" data-val="3">3次</button>
                                    <button class="option-btn" data-val="5">5次</button>
                                </div>
                                <div class="input-row">
                                    <input type="number" id="customSentenceInput" class="custom-input" placeholder="自定义次数">
                                    <button id="applySentenceCount" class="apply-btn">应用</button>
                                </div>
                            </div>

                            <div class="settings-group">
                                <div class="group-title">每页循环次数</div>
                                <div class="btn-row" id="pageCountBtns">
                                    <button class="option-btn" data-val="1">1次</button>
                                    <button class="option-btn" data-val="2">2次</button>
                                    <button class="option-btn" data-val="3">3次</button>
                                    <button class="option-btn" data-val="5">5次</button>
                                </div>
                                <div class="input-row">
                                    <input type="number" id="customPageInput" class="custom-input" placeholder="自定义次数">
                                    <button id="applyPageCount" class="apply-btn">应用</button>
                                </div>
                            </div>

                            <div class="settings-group">
                                <div class="group-title" style="display:flex; justify-content:space-between;">
                                    <span>播放速度</span>
                                    <span id="speedDisplay" style="color:#16a34a">1.0x</span>
                                </div>
                                <div class="slider-container">
                                    <span style="font-size:12px;color:#999">0.5</span>
                                    <input type="range" id="speedSlider" class="range-slider" min="0.5" max="2.0" step="0.01" value="1.0">
                                    <span style="font-size:12px;color:#999">2.0</span>
                                </div>
                            </div>

                            <div class="toggle-row">
                                <span class="toggle-label">提前连读(Overlap模式)有益于背诵</span>
                                <label class="switch">
                                    <input type="checkbox" id="overlapToggle">
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>

                        <div id="tab-appearance" class="tab-content">
                            <div class="settings-group">
                                <div class="group-title">主题模式</div>
                                <div class="btn-row">
                                    <button class="option-btn" id="dayModeBtn">☀️ 白天</button>
                                    <button class="option-btn" id="nightModeBtn">🌙 黑夜</button>
                                    <button class="option-btn" id="customModeBtn">🎨 自定义</button>
                                </div>
                                <div class="input-row" style="margin-top:8px">
                                    <div style="flex:1">
                                        <div style="font-size:11px;color:#999;margin-bottom:4px">自定义文字颜色</div>
                                        <input type="color" id="textColorPicker" style="width:100%;height:30px;border:1px solid #ddd;cursor:pointer;">
                                    </div>
                                    <div style="flex:1">
                                        <div style="font-size:11px;color:#999;margin-bottom:4px">自定义背景颜色</div>
                                        <input type="color" id="bgColorPicker" style="width:100%;height:30px;border:1px solid #ddd;cursor:pointer;">
                                    </div>
                                </div>
                            </div>

                            <div class="settings-group">
                                <div class="group-title" style="display:flex; justify-content:space-between;">
                                    <span>字体大小</span>
                                    <span id="fontSizeDisplay" style="color:#16a34a">1.0</span>
                                </div>
                                <div class="btn-row" id="fontSizeBtns">
                                    <button class="option-btn" data-val="0.8">小</button>
                                    <button class="option-btn" data-val="1.0">中</button>
                                    <button class="option-btn" data-val="1.2">大</button>
                                    <button class="option-btn" data-val="1.5">特大</button>
                                    <button class="option-btn" data-val="2.0">巨大</button>
                                </div>
                                <div class="slider-container" style="margin-top:8px">
                                    <span style="font-size:12px;color:#999">0.5</span>
                                    <input type="range" id="fontSlider" class="range-slider" min="0.5" max="3.0" step="0.01" value="1.0">
                                    <span style="font-size:12px;color:#999">3.0</span>
                                </div>
                            </div>

                            <div class="settings-group">
                                <div class="group-title">元素显示</div>
                                <div class="toggle-row">
                                    <span class="toggle-label">音标显示</span>
                                    <label class="switch"><input type="checkbox" id="phoneticToggle"><span class="slider"></span></label>
                                </div>
                                <div class="toggle-row">
                                    <span class="toggle-label">英文显示</span>
                                    <label class="switch"><input type="checkbox" id="englishToggle"><span class="slider"></span></label>
                                </div>
                                <div class="toggle-row">
                                    <span class="toggle-label">单词释义</span>
                                    <label class="switch"><input type="checkbox" id="meaningToggle"><span class="slider"></span></label>
                                </div>                                
                                <div class="toggle-row">
                                    <span class="toggle-label">中文翻译</span>
                                    <label class="switch"><input type="checkbox" id="chineseToggle"><span class="slider"></span></label>
                                </div>
                                <div class="toggle-row">
                                    <span class="toggle-label">单词下划线</span>
                                    <label class="switch"><input type="checkbox" id="underlineToggle"><span class="slider"></span></label>
                                </div>
                            </div>
                        </div>

                        <div id="tab-history" class="tab-content active">
                            <div class="settings-group">
                                <div class="group-title">最近播放 (自动)</div>
                                <div id="autoHistoryList" class="history-list"></div>
                            </div>
                            <div class="add-bookmark-btn" id="addBookmarkBtn">
                                ❤️ 将当前页加入收藏
                            </div>
                            <div class="settings-group">
                                <div class="group-title">我的收藏 (手动)</div>
                                <div id="manualHistoryList" class="history-list"></div>
                            </div>                            
                        </div>
                    </div>

                    <div class="modal-footer">
                         <button class="footer-btn btn-home" onclick="window.location.href='index.html'">
                            🏠 回首页
                         </button>
                         <button class="footer-btn btn-close" id="closeModalBtn">
                            关闭面板
                         </button>
                    </div>
                </div>

                <button id="mainGearBtn" class="main-control-btn">⚙️</button>
                `;

                document.body.insertAdjacentHTML('beforeend', modalHTML);

                const modal = document.getElementById('settingsModal');
                const backdrop = document.getElementById('modalBackdrop');
                const gearBtn = document.getElementById('mainGearBtn');
                const closeBtn = document.getElementById('closeModalBtn');

                function openModal() { modal.classList.add('show'); backdrop.classList.add('show'); renderHistory(); }
                function closeModal() { modal.classList.remove('show'); backdrop.classList.remove('show'); }

                gearBtn.onclick = openModal;
                closeBtn.onclick = closeModal;
                backdrop.onclick = closeModal;

                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.onclick = function() {
                        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                        this.classList.add('active');
                        document.getElementById(this.dataset.tab).classList.add('active');
                    }
                });

                const manualToggle = document.getElementById('manualModeToggle');
                manualToggle.onchange = function() {
                    config.isManualMode = this.checked;
                    if (this.checked) {
                        document.documentElement.classList.add('mode-manual');
                        isPlaying = false;
                        cleanupCurrentAudio();
                        document.querySelectorAll('.sentence-container').forEach(el => el.classList.remove('highlight'));
                    } else {
                        document.documentElement.classList.remove('mode-manual');
                        isPlaying = true;
                        playNextSentence();
                    }
                    saveConfig();
                };

                const sentBtns = document.querySelectorAll('#sentenceCountBtns .option-btn');
                function updateSentUI(val) {
                    sentBtns.forEach(b => b.classList.toggle('active', parseInt(b.dataset.val) === val));
                    document.getElementById('customSentenceInput').value = val;
                }
                sentBtns.forEach(btn => btn.onclick = () => { 
                    const val = parseInt(btn.dataset.val);
                    window.playCountPerSentence = val; 
                    localStorage.setItem('playCountPerSentence', val);
                    updateSentUI(val); 
                });
                document.getElementById('applySentenceCount').onclick = () => {
                    const val = parseInt(document.getElementById('customSentenceInput').value);
                    if(val > 0) { 
                        window.playCountPerSentence = val; 
                        localStorage.setItem('playCountPerSentence', val);
                        updateSentUI(val); 
                    }
                };

                const pageBtns = document.querySelectorAll('#pageCountBtns .option-btn');
                function updatePageUI(val) {
                    pageBtns.forEach(b => b.classList.toggle('active', parseInt(b.dataset.val) === val));
                    document.getElementById('customPageInput').value = val;
                }
                pageBtns.forEach(btn => btn.onclick = () => {
                    const val = parseInt(btn.dataset.val);
                    window.playCountPerPage = val;
                    localStorage.setItem('playCountPerPage', val);
                    updatePageUI(val); 
                });
                document.getElementById('applyPageCount').onclick = () => {
                    const val = parseInt(document.getElementById('customPageInput').value);
                    if(val > 0) { 
                        window.playCountPerPage = val;
                        localStorage.setItem('playCountPerPage', val);
                        updatePageUI(val); 
                    }
                };

                const speedSlider = document.getElementById('speedSlider');
                const speedDisplay = document.getElementById('speedDisplay');

                speedSlider.addEventListener('input', function() {
                    const val = parseFloat(this.value);
                    speedDisplay.textContent = val.toFixed(2) + 'x';
                    updatePlaybackRate(val);
                });

                const overlapToggle = document.getElementById('overlapToggle');
                overlapToggle.onchange = function() { 
                    window.enableEarlyPlayback = this.checked;
                    localStorage.setItem('enableEarlyPlayback', this.checked);
                };

                function updateThemeBtnState(mode) {
                    document.getElementById('dayModeBtn').classList.toggle('active', mode === 'day');
                    document.getElementById('nightModeBtn').classList.toggle('active', mode === 'night');
                    document.getElementById('customModeBtn').classList.toggle('active', mode === 'custom');
                }

                document.getElementById('dayModeBtn').onclick = () => {
                    config.themeMode = 'day';
                    updateThemeBtnState('day');
                    updateStyle('themeMode', 'day');
                    saveConfig();
                };

                document.getElementById('nightModeBtn').onclick = () => {
                    config.themeMode = 'night';
                    updateThemeBtnState('night');
                    updateStyle('themeMode', 'night');
                    saveConfig();
                };

                document.getElementById('customModeBtn').onclick = () => {
                    config.themeMode = 'custom';
                    updateThemeBtnState('custom');
                    updateStyle('themeMode', 'custom');
                    saveConfig();
                };

                const textPicker = document.getElementById('textColorPicker');
                const bgPicker = document.getElementById('bgColorPicker');

                textPicker.addEventListener('input', function() {
                    config.textColor = this.value; 
                    config.themeMode = 'custom';   
                    updateThemeBtnState('custom');
                    updateStyle('textColor', this.value);
                });
                textPicker.addEventListener('change', saveConfig);

                bgPicker.addEventListener('input', function() {
                    config.bgColor = this.value; 
                    config.themeMode = 'custom'; 
                    updateThemeBtnState('custom');
                    updateStyle('bgColor', this.value);
                });
                bgPicker.addEventListener('change', saveConfig);

                const fontSlider = document.getElementById('fontSlider');
                const fontDisplay = document.getElementById('fontSizeDisplay');
                const fontBtns = document.querySelectorAll('#fontSizeBtns .option-btn');

                function updateFontUI(val) {
                    fontSlider.value = val;
                    fontDisplay.textContent = parseFloat(val).toFixed(1);
                    fontBtns.forEach(b => b.classList.toggle('active', Math.abs(parseFloat(b.dataset.val) - val) < 0.1));
                }

                fontSlider.addEventListener('input', function() {
                    const val = this.value;
                    config.fontSize = val;
                    updateFontUI(val);
                    updateStyle('fontSize', val); 
                });
                fontSlider.addEventListener('change', saveConfig);

                fontBtns.forEach(btn => btn.onclick = () => {
                    const val = parseFloat(btn.dataset.val);
                    config.fontSize = val;
                    updateFontUI(val);
                    updateStyle('fontSize', val);
                    saveConfig();
                });

                const toggles = ['phonetic', 'english', 'chinese', 'meaning', 'underline'];
                toggles.forEach(type => {
                    const el = document.getElementById(type + 'Toggle');
                    el.onchange = function() {
                        const key = 'show' + type.charAt(0).toUpperCase() + type.slice(1);
                        config[key] = this.checked;
                        updateVisibility(type, this.checked);
                        saveConfig();
                    };
                });

                function getList(key) { return JSON.parse(localStorage.getItem(key)) ||[]; }
                function saveList(key, list) { localStorage.setItem(key, JSON.stringify(list)); }

                function addToHistory(isManual) {
                    const key = isManual ? MANUAL_BM_KEY : HISTORY_KEY;
                    let list = getList(key);
                    const item = {
                        title: document.title,
                        url: location.href,
                        time: new Date().toLocaleString()
                    };
                    list = list.filter(i => i.url !== item.url);
                    list.unshift(item);
                    if (!isManual && list.length > 3) list.pop(); 
                    saveList(key, list);
                    renderHistory();
                }

                function renderHistory() {
                    function escapeHTML(str) {
                        return (str || '').toString()
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/"/g, '&quot;')
                            .replace(/'/g, '&#39;');
                    }

                    function createItemHTML(item, isManual) {
                        return `
                        <div class="history-item">
                            <div class="history-content">
                                <div class="h-title">${escapeHTML(item.title)}</div>
                                <div class="h-time">${escapeHTML(item.time)}</div>
                            </div>
                            <div class="h-actions">
                                <button class="hist-go-btn" data-url="${escapeHTML(item.url)}">跳转</button>
                                <button class="hist-del-btn" data-url="${escapeHTML(item.url)}" data-ismanual="${isManual}">删除</button>
                            </div>
                        </div>`;
                    }

                    const manualList = getList(MANUAL_BM_KEY);
                    const autoList = getList(HISTORY_KEY);

                    document.getElementById('manualHistoryList').innerHTML = manualList.length ? manualList.map(i => createItemHTML(i, true)).join('') : '<div style="padding:10px;color:#999;font-size:12px">暂无收藏</div>';
                    document.getElementById('autoHistoryList').innerHTML = autoList.length ? autoList.map(i => createItemHTML(i, false)).join('') : '<div style="padding:10px;color:#999;font-size:12px">暂无记录</div>';

                    document.querySelectorAll('.hist-go-btn').forEach(btn => {
                        btn.onclick = function() { window.location.href = this.dataset.url; };
                    });

                    document.querySelectorAll('.hist-del-btn').forEach(btn => {
                        btn.onclick = function() { window.removeItem(this.dataset.url, this.dataset.ismanual === 'true'); };
                    });
                }

                window.removeItem = function(url, isManual) {
                    const key = isManual ? MANUAL_BM_KEY : HISTORY_KEY;
                    let list = getList(key);
                    list = list.filter(i => i.url !== url);
                    saveList(key, list);
                    renderHistory();
                };

                document.getElementById('addBookmarkBtn').onclick = function() {
                    addToHistory(true);
                    const originText = this.innerHTML;
                    this.innerHTML = "✅ 已收藏";
                    setTimeout(() => this.innerHTML = originText, 1000);
                };

                if (!location.href.includes('index.html')) addToHistory(false);

                updateSentUI(window.playCountPerSentence);
                updatePageUI(window.playCountPerPage);

                speedSlider.value = window.playbackRate;
                speedDisplay.textContent = window.playbackRate.toFixed(2) + 'x';

                overlapToggle.checked = window.enableEarlyPlayback;

                updateFontUI(config.fontSize);
                textPicker.value = config.textColor;
                bgPicker.value = config.bgColor;

                updateThemeBtnState(config.themeMode);

                toggles.forEach(type => {
                    const key = 'show' + type.charAt(0).toUpperCase() + type.slice(1);
                    document.getElementById(type + 'Toggle').checked = config[key];
                });

                manualToggle.checked = config.isManualMode;
            }

            if (document.body) initUI();
            else window.addEventListener('load', initUI);
        })();
    </script>
    </html>
    
