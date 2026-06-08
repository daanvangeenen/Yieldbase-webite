// ===== Strik Patisserie dashboard — store switching =====
//
// Klant: Strik Patisserie.  Software: Yield.
//
// Per-store data is fictitious. Physical stores + webshop (verstopt in Totaal)
// sommeren naar de Totaal-cijfers:
//
//   Omzet:    19.420 + 16.110 + 12.860 + 9.850 + 9.210 (webshop) = 67.450
//   Klanten:   1.410 +  1.200 +    925 +   720 +    640 (webshop) =  4.895
//   Retouren:    138 +    115 +     92 +    71 +     66 (webshop) =    482
//   Besteding per klant (gewogen): 67.450 / 4.895 ≈ € 13,78

const CLOSING_DEFAULT = 'Wil je meer weten over een specifiek onderdeel? Klik op een van de blokjes hieronder.';

const STORES = {
  totaal: {
    name: 'Totaal',
    summary: 'De totale omzet over alle winkels en de webshop is deze week <strong>€ 67.450</strong>. Goed bezig, dit is <strong class="up">6,8% hoger</strong> dan in dezelfde week vorig jaar.',
    closing: CLOSING_DEFAULT,
    kpis: {
      omzet:      { value: '€ 67.450', delta: '+6,8%', dir: 'up' },
      klanten:    { value: '4.895',    delta: '+5,6%', dir: 'up' },
      besteding:  { value: '€ 13,78',  delta: '+1,1%', dir: 'up' },
      brutomarge: { value: '71%',      delta: '-2,0%', dir: 'down' },
    },
  },

  ziekerstraat: {
    name: 'Ziekerstraat',
    summary: 'De omzet van Ziekerstraat is deze week <strong>€ 19.420</strong>. Goed bezig, dit is <strong class="up">7,4% hoger</strong> dan in dezelfde week vorig jaar.',
    closing: CLOSING_DEFAULT,
    kpis: {
      omzet:      { value: '€ 19.420', delta: '+7,4%', dir: 'up' },
      klanten:    { value: '1.410',    delta: '+5,9%', dir: 'up' },
      besteding:  { value: '€ 13,77',  delta: '+1,4%', dir: 'up' },
      brutomarge: { value: '72%',      delta: '-1,5%', dir: 'down' },
    },
  },

  heyendaal: {
    name: 'Heyendaal',
    summary: 'De omzet van Heyendaal is deze week <strong>€ 16.110</strong>. Goed bezig, dit is <strong class="up">4,1% hoger</strong> dan in dezelfde week vorig jaar.',
    closing: CLOSING_DEFAULT,
    kpis: {
      omzet:      { value: '€ 16.110', delta: '+4,1%', dir: 'up' },
      klanten:    { value: '1.200',    delta: '+3,5%', dir: 'up' },
      besteding:  { value: '€ 13,43',  delta: '+0,6%', dir: 'up' },
      brutomarge: { value: '70%',      delta: '-2,2%', dir: 'down' },
    },
  },

  lent: {
    name: 'Lent',
    summary: 'De omzet van Lent is deze week <strong>€ 12.860</strong>. Goed bezig, dit is <strong class="up">9,2% hoger</strong> dan in dezelfde week vorig jaar — de sterkste groei van al je winkels.',
    closing: CLOSING_DEFAULT,
    kpis: {
      omzet:      { value: '€ 12.860', delta: '+9,2%', dir: 'up' },
      klanten:    { value: '925',      delta: '+6,8%', dir: 'up' },
      besteding:  { value: '€ 13,90',  delta: '+2,1%', dir: 'up' },
      brutomarge: { value: '73%',      delta: '-1,8%', dir: 'down' },
    },
  },

  daalseweg: {
    name: 'Daalseweg',
    summary: 'De omzet van Daalseweg is deze week <strong>€ 9.850</strong>. Dit is <strong class="down">1,3% lager</strong> dan in dezelfde week vorig jaar — even op letten.',
    closing: 'Klik op een van de blokjes hieronder voor meer details over wat hier speelt.',
    kpis: {
      omzet:      { value: '€ 9.850',  delta: '-1,3%', dir: 'down' },
      klanten:    { value: '720',      delta: '-1,0%', dir: 'down' },
      besteding:  { value: '€ 13,68',  delta: '-0,3%', dir: 'down' },
      brutomarge: { value: '69%',      delta: '-2,5%', dir: 'down' },
    },
  },
};

// ----- render helpers -----

function arrow(dir) {
  return dir === 'down' ? '↓' : '↑';
}

function renderKpiCard(kpiKey, data) {
  const card = document.querySelector(`[data-kpi="${kpiKey}"]`);
  if (!card) return;

  const valueEl = card.querySelector('[data-field="value"]');
  const deltaEl = card.querySelector('[data-field="delta"]');
  if (valueEl) valueEl.textContent = data.value;
  if (deltaEl) {
    deltaEl.textContent = `${arrow(data.dir)} ${data.delta}`;
    deltaEl.className = data.dir === 'down' ? 'delta-down' : 'delta-up';
  }
}

function renderStore(storeKey) {
  const store = STORES[storeKey];
  if (!store) return;

  renderKpiCard('omzet', store.kpis.omzet);
  renderKpiCard('klanten', store.kpis.klanten);
  renderKpiCard('besteding', store.kpis.besteding);
  renderKpiCard('brutomarge', store.kpis.brutomarge);

  const summaryEl = document.getElementById('heroKpiSummary');
  const closingEl = document.getElementById('heroClosing');
  if (summaryEl) summaryEl.innerHTML = store.summary;
  if (closingEl) closingEl.textContent = store.closing || CLOSING_DEFAULT;

  document.querySelectorAll('.store-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.store === storeKey);
  });
}

// ----- init -----

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.store-tab').forEach(tab => {
    tab.addEventListener('click', () => renderStore(tab.dataset.store));
  });
  renderStore('totaal');
  initHeroSlider();
});

// ===== Hero-slider: carrousel met aandachtspunten in de rechterhelft =====
// Auto-advance elke 5 seconden, pauzeert bij hover, klikbare bolletjes.
function initHeroSlider() {
  const track    = document.getElementById('heroSlidesTrack');
  const dotsWrap = document.getElementById('heroDots');
  const wrapper  = document.getElementById('heroSlider');
  if (!track || !dotsWrap) return;

  const slides = track.children;
  const dots   = dotsWrap.querySelectorAll('.hero-dot');
  const total  = slides.length;
  if (total === 0) return;

  let current = 0;
  let timer   = null;
  const INTERVAL = 5000;

  function go(i) {
    current = (i + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
  }
  function next()  { go(current + 1); }
  function start() { stop(); timer = setInterval(next, INTERVAL); }
  function stop()  { if (timer) { clearInterval(timer); timer = null; } }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => { go(idx); start(); });
  });

  // Pauzeer bij hover zodat de bakker rustig kan lezen
  if (wrapper) {
    wrapper.addEventListener('mouseenter', stop);
    wrapper.addEventListener('mouseleave', start);
  }

  start();
}
