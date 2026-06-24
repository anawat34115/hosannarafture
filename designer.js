// Hosanna Design Studio Customizer Script
document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Google Fonts dynamically
    const fontsLink = document.createElement('link');
    fontsLink.rel = 'stylesheet';
    fontsLink.href = 'https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800&family=Kanit:wght@300;400;500;600;700;800&family=Sarabun:wght@300;400;500;600;700;800&family=Mitr:wght@300;400;500;600&family=Chonburi&display=swap';
    document.head.appendChild(fontsLink);

    // 2. Initialize variables from localStorage
    let currentLayout = localStorage.getItem('hosanna-layout') || '1';
    let currentFont = localStorage.getItem('hosanna-font') || 'prompt';

    // Apply values to body
    document.body.setAttribute('data-layout', currentLayout);
    applyFontClass(currentFont);

    // 3. Inject Floating Settings Toolbar
    const designerWidget = document.createElement('div');
    designerWidget.id = 'hosanna-designer-panel';
    designerWidget.className = 'fixed bottom-5 right-5 z-[9999] flex flex-col items-end';
    
    designerWidget.innerHTML = `
        <!-- Floating Gear Trigger Button -->
        <button id="designer-trigger" class="w-14 h-14 bg-[#F2B92A] hover:bg-[#D69E1C] text-[#0E0E0D] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-115 focus:outline-none ring-4 ring-[#1A1A1A]/50">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
        </button>
        
        <!-- Customizer Panel -->
        <div id="designer-content" class="hidden mt-3 w-80 bg-[#1A1A1A]/95 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-2xl transition-all duration-300 transform scale-95 origin-bottom-right">
            <h4 class="font-extrabold text-sm text-white tracking-wider uppercase border-b border-white/10 pb-3 mb-4 flex items-center gap-2">
                <span>🎨</span> HOSANNA DESIGN STUDIO
            </h4>
            
            <!-- Layout Selector -->
            <div class="mb-5">
                <span class="text-[10px] font-extrabold text-[#B3B3B3] block mb-2.5 uppercase tracking-widest">Layout Structure</span>
                <div class="grid grid-cols-3 gap-2">
                    <button class="layout-btn bg-[#0E0E0D] text-[#B3B3B3] hover:text-white border border-white/5 py-2 rounded-lg text-[11px] font-bold transition-all" data-layout-id="1">Design 1</button>
                    <button class="layout-btn bg-[#0E0E0D] text-[#B3B3B3] hover:text-white border border-white/5 py-2 rounded-lg text-[11px] font-bold transition-all" data-layout-id="2">Design 2</button>
                    <button class="layout-btn bg-[#0E0E0D] text-[#B3B3B3] hover:text-white border border-white/5 py-2 rounded-lg text-[11px] font-bold transition-all" data-layout-id="3">Design 3</button>
                </div>
            </div>
            
            <!-- Font Selector -->
            <div>
                <span class="text-[10px] font-extrabold text-[#B3B3B3] block mb-2.5 uppercase tracking-widest">Select Font (5 Options)</span>
                <div class="flex flex-col gap-2">
                    <button class="font-btn bg-[#0E0E0D] text-[#B3B3B3] hover:text-white border border-white/5 py-2 px-3.5 rounded-lg text-left text-[11px] font-bold transition-all flex justify-between items-center" data-font-id="prompt">
                        <span>Prompt (Modern)</span>
                        <span class="text-[9px] text-[#B3B3B3]/50 font-normal">กขค ABC</span>
                    </button>
                    <button class="font-btn bg-[#0E0E0D] text-[#B3B3B3] hover:text-white border border-white/5 py-2 px-3.5 rounded-lg text-left text-[11px] font-bold transition-all flex justify-between items-center" data-font-id="kanit">
                        <span>Kanit (Rounded)</span>
                        <span class="text-[9px] text-[#B3B3B3]/50 font-normal">กขค ABC</span>
                    </button>
                    <button class="font-btn bg-[#0E0E0D] text-[#B3B3B3] hover:text-white border border-white/5 py-2 px-3.5 rounded-lg text-left text-[11px] font-bold transition-all flex justify-between items-center" data-font-id="sarabun">
                        <span>Sarabun (Official)</span>
                        <span class="text-[9px] text-[#B3B3B3]/50 font-normal">กขค ABC</span>
                    </button>
                    <button class="font-btn bg-[#0E0E0D] text-[#B3B3B3] hover:text-white border border-white/5 py-2 px-3.5 rounded-lg text-left text-[11px] font-bold transition-all flex justify-between items-center" data-font-id="mitr">
                        <span>Mitr (Geometric)</span>
                        <span class="text-[9px] text-[#B3B3B3]/50 font-normal">กขค ABC</span>
                    </button>
                    <button class="font-btn bg-[#0E0E0D] text-[#B3B3B3] hover:text-white border border-white/5 py-2 px-3.5 rounded-lg text-left text-[11px] font-bold transition-all flex justify-between items-center" data-font-id="chonburi">
                        <span>Chonburi (Artistic)</span>
                        <span class="text-[9px] text-[#B3B3B3]/50 font-normal">กขค ABC</span>
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(designerWidget);

    const triggerBtn = document.getElementById('designer-trigger');
    const contentPanel = document.getElementById('designer-content');

    // Trigger toggle click
    triggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !contentPanel.classList.contains('hidden');
        if (isOpen) {
            closePanel();
        } else {
            openPanel();
        }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!designerWidget.contains(e.target)) {
            closePanel();
        }
    });

    function openPanel() {
        contentPanel.classList.remove('hidden');
        setTimeout(() => {
            contentPanel.classList.remove('scale-95', 'opacity-0');
            contentPanel.classList.add('scale-100', 'opacity-100');
        }, 10);
        // Rotate gear icon
        triggerBtn.querySelector('svg').classList.add('rotate-90');
    }

    function closePanel() {
        contentPanel.classList.add('scale-95', 'opacity-0');
        contentPanel.classList.remove('scale-100', 'opacity-100');
        setTimeout(() => {
            contentPanel.classList.add('hidden');
        }, 150);
        triggerBtn.querySelector('svg').classList.remove('rotate-90');
    }

    // Set layout click handlers
    document.querySelectorAll('.layout-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const layoutId = btn.getAttribute('data-layout-id');
            setHosannaLayout(layoutId);
        });
    });

    // Set font click handlers
    document.querySelectorAll('.font-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const fontId = btn.getAttribute('data-font-id');
            setHosannaFont(fontId);
        });
    });

    // Update panel active states initially
    updateActiveStates();

    function setHosannaLayout(layoutId) {
        currentLayout = layoutId;
        localStorage.setItem('hosanna-layout', layoutId);
        document.body.setAttribute('data-layout', layoutId);
        updateActiveStates();
        
        // Custom events for dynamic updates if needed
        window.dispatchEvent(new CustomEvent('hosanna-layout-change', { detail: layoutId }));
    }

    function setHosannaFont(fontId) {
        currentFont = fontId;
        localStorage.setItem('hosanna-font', fontId);
        applyFontClass(fontId);
        updateActiveStates();
    }

    function applyFontClass(fontId) {
        // Remove existing font classes
        document.body.classList.forEach(className => {
            if (className.startsWith('font-')) {
                document.body.classList.remove(className);
            }
        });
        document.body.classList.add(`font-${fontId}`);
    }

    function updateActiveStates() {
        // Layout buttons active style
        document.querySelectorAll('.layout-btn').forEach(btn => {
            const layoutId = btn.getAttribute('data-layout-id');
            if (layoutId === currentLayout) {
                btn.className = 'layout-btn bg-[#F2B92A] text-[#0E0E0D] border border-[#F2B92A] py-2 rounded-lg text-[11px] font-extrabold transition-all shadow-md shadow-primary/20';
            } else {
                btn.className = 'layout-btn bg-[#0E0E0D] text-[#B3B3B3] hover:text-white border border-white/5 py-2 rounded-lg text-[11px] font-bold transition-all';
            }
        });

        // Font buttons active style
        document.querySelectorAll('.font-btn').forEach(btn => {
            const fontId = btn.getAttribute('data-font-id');
            if (fontId === currentFont) {
                btn.className = 'font-btn bg-[#F2B92A] text-[#0E0E0D] border border-[#F2B92A] py-2 px-3.5 rounded-lg text-left text-[11px] font-extrabold transition-all flex justify-between items-center';
                btn.querySelector('span:last-child').className = 'text-[9px] text-[#0E0E0D]/60 font-normal';
            } else {
                btn.className = 'font-btn bg-[#0E0E0D] text-[#B3B3B3] hover:text-white border border-white/5 py-2 px-3.5 rounded-lg text-left text-[11px] font-bold transition-all flex justify-between items-center';
                btn.querySelector('span:last-child').className = 'text-[9px] text-[#B3B3B3]/50 font-normal';
            }
        });
    }
});
