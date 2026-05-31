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
    summary: 'De totale omzet over alle winkels en de webshop is deze week <strong>€ 67.450</strong>. Dat is <strong class="up">6,8% hoger</strong> dan in dezelfde week vorig jaar. Je <strong>4.895 klanten</strong> besteden gemiddeld <strong>€ 13,78</strong> — stabiel t.o.v. vorig jaar. Retouren komen uit op <strong>€ 482</strong> (+4,2%).',
    closing: CLOSING_DEFAULT,
    kpis: {
      omzet:     { value: '€ 67.450', delta: '+6,8%', dir: 'up' },
      klanten:   { value: '4.895',    delta: '+5,6%', dir: 'up' },
      besteding: { value: '€ 13,78',  delta: '+1,1%', dir: 'up' },
      retouren:  { value: '€ 482',    delta: '+4,2%', dir: 'up' },
    },
  },

  ziekerstraat: {
    name: 'Ziekerstraat',
    summary: 'Ziekerstraat draaide deze week <strong>€ 19.420</strong> omzet — <strong class="up">7,4% hoger</strong> dan vorig jaar en de hoogste van al je winkels. <strong>1.410 klanten</strong> kwamen langs, met een gemiddelde besteding van <strong>€ 13,77</strong>. Retouren stegen licht naar <strong>€ 138</strong> (+3,8%).',
    closing: CLOSING_DEFAULT,
    kpis: {
      omzet:     { value: '€ 19.420', delta: '+7,4%', dir: 'up' },
      klanten:   { value: '1.410',    delta: '+5,9%', dir: 'up' },
      besteding: { value: '€ 13,77',  delta: '+1,4%', dir: 'up' },
      retouren:  { value: '€ 138',    delta: '+3,8%', dir: 'up' },
    },
  },

  heyendaal: {
    name: 'Heyendaal',
    summary: 'Heyendaal draaide <strong>€ 16.110</strong> omzet (<strong class="up">+4,1%</strong>) met <strong>1.200 klanten</strong> (+3,5%) en een gemiddelde besteding van <strong>€ 13,43</strong>. Let op: <strong>retouren stijgen sneller</strong> dan omzet — <strong class="up">+5,2%</strong> naar € 115.',
    closing: CLOSING_DEFAULT,
    kpis: {
      omzet:     { value: '€ 16.110', delta: '+4,1%', dir: 'up' },
      klanten:   { value: '1.200',    delta: '+3,5%', dir: 'up' },
      besteding: { value: '€ 13,43',  delta: '+0,6%', dir: 'up' },
      retouren:  { value: '€ 115',    delta: '+5,2%', dir: 'up' },
    },
  },

  lent: {
    name: 'Lent',
    summary: 'Lent is de grootste stijger: <strong>€ 12.860</strong> omzet (<strong class="up">+9,2%</strong>) — de sterkste groei van al je winkels. <strong>925 klanten</strong> kwamen langs (+6,8%), met de hoogste gemiddelde besteding (<strong>€ 13,90</strong>). Retouren bleven beheerst op <strong>€ 92</strong>.',
    closing: CLOSING_DEFAULT,
    kpis: {
      omzet:     { value: '€ 12.860', delta: '+9,2%', dir: 'up' },
      klanten:   { value: '925',      delta: '+6,8%', dir: 'up' },
      besteding: { value: '€ 13,90',  delta: '+2,1%', dir: 'up' },
      retouren:  { value: '€ 92',     delta: '+4,1%', dir: 'up' },
    },
  },

  daalseweg: {
    name: 'Daalseweg',
    summary: 'Daalseweg had een wat mindere week: <strong>€ 9.850</strong> omzet (<strong class="down">−1,3%</strong>) en <strong>720 klanten</strong> (−1,0%). De gemiddelde besteding zakte naar <strong>€ 13,68</strong>. Retouren stegen <strong class="up">+2,9%</strong> naar <strong>€ 71</strong>.',
    closing: 'Klik op een van de blokjes hieronder voor meer details over wat hier speelt.',
    kpis: {
      omzet:     { value: '€ 9.850',  delta: '-1,3%', dir: 'down' },
      klanten:   { value: '720',      delta: '-1,0%', dir: 'down' },
      besteding: { value: '€ 13,68',  delta: '-0,3%', dir: 'down' },
      retouren:  { value: '€ 71',     delta: '+2,9%', dir: 'up' },
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
  renderKpiCard('retouren', store.kpis.retouren);

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
});
