// ==========================================================================
// MADHURI HANDICRAFTS — LUXURY CATALOG HUB SCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initImagePreloader();
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
    modalWhatsAppBtn.href = `https://wa.me/919627606000?text=${text}`;
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
N:Rai;Ankush;;;
FN:Ankush Rai
ORG:Madhuri Furniture
TITLE:Executive / Director
TEL;TYPE=CELL,VOICE,PREF:+919713433933
TEL;TYPE=WORK,VOICE:+919627606000
EMAIL;TYPE=WORK,INTERNET:madhurifurniture1983@gmail.com
URL;TYPE=WORK:https://www.madhurifurniture.in
URL;TYPE=X-ETSY:https://madhurihandicraft.etsy.com
ADR;TYPE=WORK:;;Shobhapur Road Tiraha Near Axis Bank;Pipariya;Madhya Pradesh;461775;India
NOTE:Manufacturers & Sales, Teak Wood Furnitures, Wood Handicrafts, Saw Mill, Wood Traders Since 1983
END:VCARD`;

  try {
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ankush_Rai_Madhuri_Furniture.vcf');
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

