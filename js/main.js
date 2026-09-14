// ==========================================================================
// MADHURI HANDICRAFTS — LUXURY CATALOG HUB SCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initImagePreloader();
  initCollectionSliders();
  initModalHandlers();
  initShareFeatures();
  initSmoothInteractions();
});

// Image Blur-up & Preloader
function initImagePreloader() {
  const tileImages = document.querySelectorAll('.tile-img[data-full]');
  tileImages.forEach(el => {
    const fullSrc = el.getAttribute('data-full');
    if (!fullSrc) return;

    const img = new Image();
    img.onload = () => {
      el.style.backgroundImage = `url('${fullSrc}')`;
      requestAnimationFrame(() => {
        el.classList.add('loaded');
      });
    };
    img.src = fullSrc;
  });
}

// Live Sliding Collection Masterpieces (Auto-sliding Showcase, Non-clickable)
function initCollectionSliders() {
  const slideshowTiles = document.querySelectorAll('.tile-slideshow[data-category]');
  if (!slideshowTiles.length) return;

  slideshowTiles.forEach((tile, tileIdx) => {
    const category = tile.getAttribute('data-category');
    let items = [];
    if (typeof CATALOG_DATA !== 'undefined' && Array.isArray(CATALOG_DATA)) {
      items = CATALOG_DATA.filter(item => item.category === category);
    }

    if (!items.length) {
      if (category === 'deities') {
        items = [
          { image: 'images/products/adiyogi.jpg' },
          { image: 'images/products/adiyogi_12_inch_teakwood.jpg' },
          { image: 'images/products/jesus.jpg' },
          { image: 'images/products/meditation_hanuman_12_inch_teakwood.jpg' },
          { image: 'images/products/peacock_ganpati.jpg' },
          { image: 'images/products/wall_ganesha.jpg' },
          { image: 'images/products/wall_shiv.jpg' },
          { image: 'images/products/adiyogi_12_inch_boxwood.jpg' },
          { image: 'images/products/balaji_12_inch.jpg' },
          { image: 'images/products/panchmukhi_hanuman_6_inch_boxwood.jpg' }
        ];
      } else if (category === 'nature') {
        items = [
          { image: 'images/products/elephant_scenery_model_2.jpg' },
          { image: 'images/products/seven_horses_7_horse_teakwood.jpg' },
          { image: 'images/products/wall_tiger_wall_tiger_2.jpg' },
          { image: 'images/products/bear.jpg' }
        ];
      } else if (category === 'collectibles') {
        items = [
          { image: 'images/products/ashoka_stambh.jpg' },
          { image: 'images/products/lotus_emblem.jpg' }
        ];
      }
    }

    const track = tile.querySelector('.tile-slider-track');
    const countBadge = tile.querySelector('.slide-count');
    if (!track) return;

    const total = items.length;
    const padTotal = total.toString().padStart(2, '0');

    // Build slide items
    track.innerHTML = '';
    items.forEach((item) => {
      const slide = document.createElement('div');
      slide.className = 'tile-slide-item';
      slide.style.backgroundImage = `url('${item.image}')`;
      track.appendChild(slide);
    });

    // Add clone of first slide for seamless infinite forward sliding
    const firstClone = document.createElement('div');
    firstClone.className = 'tile-slide-item clone';
    firstClone.style.backgroundImage = `url('${items[0].image}')`;
    track.appendChild(firstClone);

    let currentIndex = 0;
    let isTransitioning = false;
    let timer = null;

    // Stagger slide timing across cards so they slide smoothly at different moments
    const duration = 3400 + (tileIdx * 450);

    function updateBadge(idx) {
      if (!countBadge) return;
      const displayIdx = (idx % total) + 1;
      countBadge.textContent = `${displayIdx.toString().padStart(2, '0')} / ${padTotal}`;
    }

    function goToSlide(index, animate = true) {
      if (animate) {
        track.style.transition = 'transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)';
      } else {
        track.style.transition = 'none';
      }
      track.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
      updateBadge(index);
    }

    function nextSlide() {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      goToSlide(currentIndex, true);
    }

    function prevSlide() {
      if (isTransitioning) return;
      if (currentIndex === 0) {
        track.style.transition = 'none';
        track.style.transform = `translateX(-${total * 100}%)`;
        void track.offsetWidth;
        currentIndex = total - 1;
        goToSlide(currentIndex, true);
      } else {
        currentIndex--;
        goToSlide(currentIndex, true);
      }
    }

    track.addEventListener('transitionend', () => {
      isTransitioning = false;
      // When reaching the clone slide at end, snap silently to slide 0 without transition
      if (currentIndex >= total) {
        track.style.transition = 'none';
        currentIndex = 0;
        track.style.transform = 'translateX(0%)';
        void track.offsetWidth;
      }
    });

    function startTimer() {
      stopTimer();
      timer = setInterval(nextSlide, duration);
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    startTimer();

    // Pause on desktop hover
    tile.addEventListener('mouseenter', stopTimer);
    tile.addEventListener('mouseleave', startTimer);

    // Touch Swipe support for smooth mobile swiping
    let touchStartX = 0;
    let touchStartY = 0;

    tile.addEventListener('touchstart', (e) => {
      stopTimer();
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    tile.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffX) > 30 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      startTimer();
    }, { passive: true });
  });
}

// Modal Handlers for Interactive Lookbook
function initModalHandlers() {
  const modal = document.getElementById('lookbookModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const catalogBtns = document.querySelectorAll('[data-open-catalog]');

  if (!modal) return;

  catalogBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const category = btn.getAttribute('data-open-catalog');
      populateModal(category);
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close when clicking outside modal container
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function populateModal(categoryKey) {
  if (typeof CATALOG_DATA === 'undefined') return;

  // Filter or pick item
  let item = CATALOG_DATA.find(p => p.category === categoryKey);
  if (!item) {
    item = CATALOG_DATA[0];
  }

  const modalImg = document.getElementById('modalImg');
  const modalBadge = document.getElementById('modalBadge');
  const modalKicker = document.getElementById('modalKicker');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalMaterial = document.getElementById('modalMaterial');
  const modalFinish = document.getElementById('modalFinish');
  const modalDimensions = document.getElementById('modalDimensions');
  const modalWeight = document.getElementById('modalWeight');
  const modalEtsyBtn = document.getElementById('modalEtsyBtn');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');

  if (modalImg) modalImg.src = item.image;
  if (modalBadge) modalBadge.textContent = item.tag || '2026 Collection';
  if (modalKicker) modalKicker.textContent = item.collection || 'Madhuri Handicrafts';
  if (modalTitle) modalTitle.textContent = item.title;
  if (modalDesc) modalDesc.textContent = item.description;
  if (modalMaterial) modalMaterial.textContent = item.material;
  if (modalFinish) modalFinish.textContent = item.finish;
  if (modalDimensions) modalDimensions.textContent = item.dimensions;
  if (modalWeight) modalWeight.textContent = item.weight;

  if (modalEtsyBtn) {
    modalEtsyBtn.href = item.etsyUrl || "https://madhurihandicraft.etsy.com";
  }

  if (modalWhatsAppBtn) {
    const text = encodeURIComponent(`Namaste Madhuri Handicrafts! I am inquiring about "${item.title}" from your 2026 digital catalog.`);
    modalWhatsAppBtn.href = `https://wa.me/919713433933?text=${text}`;
  }
}

function openModal() {
  const modal = document.getElementById('lookbookModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('lookbookModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Share Feature (Native Navigator Share + Fallback Copy Link)
function initShareFeatures() {
  const shareBtn = document.getElementById('shareHubBtn');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const shareData = {
      title: 'Madhuri Handicrafts — Luxury Indian Artisanal Catalogue',
      text: 'Explore the 2026 Curated Brass, Bronze & Hand-Carved Teakwood Collection by Madhuri Handicrafts.',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link copied to clipboard!');
      }).catch(() => {
        showToast('Website link: ' + window.location.href);
      });
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('hubToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'hubToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: rgba(217, 173, 109, 0.95);
      color: #0c0b09;
      font-weight: 700;
      font-size: 13px;
      padding: 10px 22px;
      border-radius: 100px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      z-index: 999;
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      letter-spacing: 0.05em;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2500);
}

// Micro-interactions and subtle tilt effects
function initSmoothInteractions() {
  // Add active state vibration or subtle sound can be added here
}

// Executive Digital Visiting Card (vCard Export)
function downloadVCard() {
  const vcard = 
`BEGIN:VCARD
VERSION:3.0
N:Rai;Ankush;;Mr.;
FN:Mr. Ankush Rai
ORG:Madhuri Furniture
TITLE:Owner
TEL;TYPE=CELL,VOICE,PREF:+919713433933
TEL;TYPE=WORK,VOICE:+919713433933
EMAIL;TYPE=WORK,INTERNET:madhurifurniture1983@gmail.com
URL;TYPE=WORK:https://www.madhurifurniture.in
ADR;TYPE=WORK:;;Shobhapur Road Tiraha;Pipariya;Madhya Pradesh;461775;India
END:VCARD`;

  try {
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Madhuri_Furniture_Ankush_Rai.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Visiting Card saved to Contacts (.vcf)');
  } catch (err) {
    window.open('tel:+919713433933');
  }
}
window.downloadVCard = downloadVCard;

