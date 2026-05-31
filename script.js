// COUNTDOWN
function updateCountdown() {
  const target = new Date('2026-06-20T17:00:00');
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) {
    document.querySelector('.countdown').innerHTML = '<div style="font-family:\'Poppins\',sans-serif;font-size:1.5rem;font-weight:700;color:var(--gold);text-shadow:0 0 20px rgba(244,200,66,0.6);">It\'s the Big Day!</div>';
    return;
  }
  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const pad = n => String(n).padStart(2, '0');
  document.getElementById('cd-days').textContent = pad(totalDays);
  document.getElementById('cd-hours').textContent = pad(totalHours % 24);
  document.getElementById('cd-mins').textContent = pad(totalMinutes % 60);
  document.getElementById('cd-secs').textContent = pad(totalSeconds % 60);
}
updateCountdown();
setInterval(updateCountdown, 1000);

// HAMBURGER
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => { mobileMenu.classList.toggle('open'); });
function closeMobile() { mobileMenu.classList.remove('open'); }

// TABLE NUMBERS
const tableNames = [
  '', '', '', '',
  '', '', '', '',
  '', '', '', ''
];

const tableGuests = {
  1: [
    'Rea Valerie Sampaga',
    'Rey Vincent Sampaga',
    'Pia Sampaga',
    'Rey Sampaga',
    'Florian Guanio',
    'Raymond Guanio',
    'Joshua Maniol',
    'John Paulo Cagande',
    'Rizza Cagande',
    'Jheriza Cagande',
  ],
  2: [
    'Helen Acedo',
    'Gerolito Acedo',
    'John Jeremiah Acedo',
    'Claizel Annit Basañez',
    'Purificacion Navarro',
    'Marlon Navarro',
    'Myra Navarro',
    'Elvie Garcia',
    'Richelle Garcia',
    'Crispin Sampaga',
  ],
  3: [
    'Rizalina Ong',
    'Boy Santiago',
    'Bella Santiago',
    'Joseph Santiago',
    'Rachel Santiago',
    'Ophalyn Bagarino',
    'Rowena Luna',
    'Rhaizza Luna',
    'Raphael Luna',
    'Emily Monsayac',
  ],
  4: [
    'Princess Ellaine Ferran',
    'Reign Jesse Mayelle Roldan',
    'Marky Alacha',
    'Gillan Siwa',
    'Czarina Miel Saldon',
    'Rheese Del Rosario',
    'Jhayron Baynosa',
    'Princess-Jurish Balatero',
    'Yvhanna Claire Espinoza',
    'Regie Cruz',
  ],
  5: [
    'Franz Daniel Juguilon',
    'Nathan Valencia',
    'Sofia Hernandez',
    'Angela Bianca Bulagao',
    'Vynz Rhydon Dilidili',
    'Raelene Alolino',
    'Raph Daryll Celiz',
    'Zhayana Arley Salamatin',
    'Gyron Mckayle Padecio',
    'Elijah Pineda',
  ],
  6: [
    'Jean Cezar',
    'Jean Alpha Marii Cezar',
    "Maam Jean's Helper",
    'Rhiana Ayade',
    'Ma. Lourdes Kate Dimalanta',
    'Pope Geronimo Tapel',
    'Alezandro Sam Estuaria',
    'Kurt Gabriel Subong',
    'Xryzthea Calderon',
    'Jeanette Javier',
  ],
  7: [
    'Xian Qyrztenn Palang',
    'Queen Evolet Costales',
    'Jawea Ainsley Pajarillo',
    'Misha Annica Tugnao',
    'Charisse Pearson',
    'Mary Kyle Danielle Roxas',
    'Hillary Evolet Macabutas',
    'Raphael Manuel Nueva España',
    'Charles Vhincent Salvador',
    'Anissa Louise Dhaena Cristi',
  ],
  8: [
    'Czarina Mae Gorubat',
    'Nicole Buenaventura',
    'Sofia Cassandra Chua',
    'Vian Lyca Pagador',
    'Amiel Ryan Bicaldo',
    'Joshua Pangilinan',
    'Jordan King Santos',
    'Toney Ashley Quityquit',
    'Paul Aeron Guillermo',
    'Rea Vianica Sampaga',
  ],
  9: [
    'Celvestre Dumaguing',
    'Christian Ryan Juban',
    'Atty. John Dwight Cruz',
    'Mary Ann Porcel',
    'Susan Espiritu',
    'Ma. Nona Salamanque',
    'Analiza Soliven',
    'Daisy Zulueta',
    'Marites Bechayda',
    'Richard Gumabo',
  ],
  10: [
    'Lilibeth Simon',
    'Marisol Claveria',
    'Jovita Blaya',
    'Robert Blaya',
    'Tee Jay Cabrera',
    'Anthony Ayubo',
    'Inis Bañola',
    'Nila Garabiles',
    'Jaymar Cruz',
    'Peachy Cagandahan',
  ],
  11: [
    'Jenny Lyn Aduviso',
    'Ac Aduviso',
    'Francisco Licup',
    'Vanessa Licup',
    'Nerissa Conde',
    'Rosita De Guzman',
    'Gilda Crisologo',
    'Rhea Lyn Jalandoni',
    'Mia Ramos',
    'Nestor Rocamora',
  ],
  12: [
    'Juleene Bautista',
    'Severino Bautista Jr.',
    'Dra. Elizabeth Blanza',
    'Jonathan Blanza',
    'Emcee',
    'Photo & Video Staff',
    'Photo & Video Staff',
    'Lights and Sound Staff',
    'Lights and Sound Staff',
    'Lights and Sound Staff',
  ],
};

const tableGrid = document.getElementById('tableGrid');
tableNames.forEach((name, i) => {
  const num = i + 1;
  const card = document.createElement('div');
  card.className = 'table-card';

  const guestRows = (tableGuests[num] || []).map((g, idx) =>
    '<div class="tg-row"><span class="tg-num">' + (idx+1) + '</span><span class="tg-name">' + g + '</span></div>'
  ).join('');

  card.innerHTML =
    '<span class="table-num">' + num + '</span>' +
    '<span class="table-tag">' + name + '</span>' +
    '<div class="tg-list" style="margin-top:0.8rem;">' + guestRows + '</div>';

  tableGrid.appendChild(card);
});

// EVENTS
const roseNames = [
  'Rey Vincent Sampaga','John Jeremiah Acedo','Charles Vhincent Salvador',
  'Raphael Manuel Nueva España','Regie Cruz','Franz Daniel Juguilon',
  'Nathan Valencia','Vynz Rhydon Dilidili','Marky Alacha',
  'Gyron Mckayle Padecio','Pope Geronimo Tapel','Alezandro Sam Estuaria',
  'Kurt Gabriel Subong','Jean Alpha Marii Cezar','John Paulo Cagande',
  'Boy Santiago','Crispin Sampaga','Rey Sampaga'
];
const wishNames = [
  'Rea Vianica Sampaga','Czarina Mae Gorubat','Rhiana Ayade',
  'Ma. Lourdes Kate Dimalanta','Mary Kyle Danielle Roxas','Misha Annica Tugnao',
  'Jawea Ainsley Pajarillo','Reign Jesse Mayelle Roldan','Yvhanna Claire Espinoza',
  'Princess Ellaine Ferran','Raelene Alolino','Xryzthea Calderon',
  'Jeanette Javier','Rizalina Ong','Jean Cezar',
  'Bella Santiago','Purificacion Navarro','Pia Sampaga'
];
const giftNames = [
  'Elvie Garcia','Elijah Pineda','Charisse Pearson',
  'Gillan Siwa','Rheese Del Rosario','Rhaizza Luna',
  'AC Aduviso','Hillary Evolet Macabutas','Mary Ann Porcel',
  'Myra Navarro','Inis Bañola','Claizel Annit Basañez',
  'Rizza Cagande','Jovita Blaya','Princess-Jurish Balatero',
  'Rachel Santiago','Sofia Hernandez','Juleene Bautista'
];
const billNames = [
  'Helen Acedo','Susan Espiritu','Nila Garabiles',
  'Peachy Cagandahan','Jaymar Cruz','Nestor Rocamora',
  'Florian Guanio','Gilda Crisologo','Rosita De Guzman',
  'Nerissa Conde','Dra. Elizabeth Blanza','Jenny Lyn Aduviso',
  'Richard Gumabo','Richelle Garcia','Marlon Navarro',
  'Atty. John Dwight Cruz','Dra. Rowena Luna','Anthony Ayubo'
];
const shotNames = [
  'Gerolito Acedo','Robert Blaya','Joseph Santiago',
  'Severino Bautista Jr.','Amiel Ryan Bicaldo','Joshua Pangilinan',
  'Jordan King Santos','Toney Ashley Quitiquit','Paul Aeron Guillermo',
  'Joshua Maniaol','Ophalyn Bagarino','Rhea Lyn Jalandoni',
  'Francisco Licup','Ma. Nona Salamanque','Raymond Guanio',
  'Analiza Soliven','Marites Bechayda','Lilibeth Simon'
];

function buildList(id, names) {
  const container = document.getElementById(id);
  names.forEach((name, i) => {
    const item = document.createElement('div');
    item.className = 'ev-item';
    item.innerHTML = '<span class="ev-num">' + (i+1) + '</span><span class="ev-name">' + name + '</span>';
    container.appendChild(item);
  });
}

buildList('list-roses', roseNames);
buildList('list-wishes', wishNames);
buildList('list-gifts', giftNames);
buildList('list-bills', billNames);
buildList('list-shots', shotNames);

const songNames = [
  'Mia Ramos','Anissa Louise Dhaena Cristi','Czarina Miel Saldon',
  'Zhayana Arley Salamatin','Angela Bianca Bulagao','Jhayron Troy Baynosa',
  'Raph Daryll Celiz','Xian Qyrztenn Palang','Queen Evolet Costales',
  'Nicole Buenaventura','Sofia Cassandra Chua','Vian Lyca Pagador',
  'Celvestre Dumuguing','Christian Ryan Juban','Daisy Zulueta',
  'Marisol Claveria','Raphael Manuel Luna','Tee Jay Cabrera'
];
buildList('list-songs', songNames);

// GALLERY FILTER
const portraitSrcs = [
  'images/1.JPG','images/2.JPG','images/3.JPG','images/4.JPG','images/5.JPG'
];
const landscapeSrcs = [
  'images/6.JPG','images/7.JPG','images/8.JPG','images/9.jpg','images/10.jpg'
];

let currentFilter = 'portrait';
let lbSrcs = portraitSrcs;
let lbIdx = 0;

function renderGallery(filter) {
  currentFilter = filter;
  lbSrcs = filter === 'portrait' ? portraitSrcs : landscapeSrcs;

  document.querySelectorAll('.gal-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });

  const grid = document.getElementById('galGrid');
  grid.innerHTML = '';
  grid.classList.toggle('landscape-mode', filter === 'landscape');

  lbSrcs.forEach((src, idx) => {
    const cls = filter === 'portrait' ? 'gal-portrait' : 'gal-landscape';
    const item = document.createElement('div');
    item.className = 'gal-item ' + cls;
    item.onclick = () => openLightbox(idx);
    item.innerHTML =
      '<img src="' + src + '" alt="Photo ' + (idx+1) + '" loading="lazy" />' +
      '<div class="gal-overlay"><span class="gal-zoom">&#10021;</span></div>';
    grid.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallery('portrait');

  document.querySelectorAll('.gal-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => renderGallery(btn.dataset.filter));
  });
});

// LIGHTBOX
function openLightbox(idx) {
  lbIdx = idx;
  document.getElementById('lbImg').src = lbSrcs[lbIdx];
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function prevPhoto() {
  lbIdx = (lbIdx - 1 + lbSrcs.length) % lbSrcs.length;
  document.getElementById('lbImg').src = lbSrcs[lbIdx];
}
function nextPhoto() {
  lbIdx = (lbIdx + 1) % lbSrcs.length;
  document.getElementById('lbImg').src = lbSrcs[lbIdx];
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevPhoto();
  if (e.key === 'ArrowRight') nextPhoto();
});

// RSVP DATA
const rsvpData = [
  // FAMILY SECTION
  { group: 'Acedo Family', seats: 4, members: ['Helen Acedo', 'Gerolito Acedo', 'John Jeremiah Acedo', 'Claizel Annit Basañez'] },
  { group: 'Navarro Family', seats: 3, members: ['Purificacion Navarro', 'Marlon Navarro', 'Myra Navarro'] },
  { group: 'Garcia Family', seats: 2, members: ['Elvie Garcia', 'Richelle Garcia'] },
  { group: 'Sampaga Family', seats: 1, members: ['Crispin Sampaga'] },
  { group: 'Ong/Cagande Family', seats: 4, members: ['Rizalina Ong', 'John Paulo Cagande', 'Rizza Cagande', 'Jheriza Cagande'] },
  { group: 'Santiago Family', seats: 2, members: ['Boy Santiago', 'Bella Santiago'] },
  { group: 'Santiago Family', seats: 2, members: ['Joseph Santiago', 'Rachel Santiago'] },
  { group: 'Luna Family', seats: 4, members: ['Rowena Luna', 'Rhaizza Luna', 'Raphael Manuel Luna', 'Emily Monsayac'] },
  { group: 'Individual', seats: 1, members: ['Ophalyn Bagarino'] },
  // NEIGHBOR SECTION
  { group: 'Aduviso Family', seats: 2, members: ['Jenny Lyn Aduviso', 'Ac Aduviso'] },
  { group: 'Licup Family', seats: 2, members: ['Francisco Licup', 'Vanessa Licup'] },
  { group: 'Individual', seats: 1, members: ['Nerissa Conde'] },
  { group: 'Individual', seats: 1, members: ['Rosita De Guzman'] },
  // MOMMY'S FRIEND SECTION
  { group: 'Bautista Family', seats: 2, members: ['Juleene Bautista', 'Severino Bautista Jr.'] },
  { group: 'Guanio Family', seats: 2, members: ['Florian Guanio', 'Raymond Guanio'] },
  { group: 'Individual', seats: 1, members: ['Mia Ramos'] },
  { group: 'Individual', seats: 1, members: ['Rhea Lyn Jalandoni'] },
  { group: 'Individual', seats: 1, members: ['Gilda Crisologo'] },
  // KUYA'S FRIEND SECTION
  { group: 'Individual', seats: 1, members: ['Joshua Maniaol'] },
  { group: 'Individual', seats: 1, members: ['Celvestre Dumaguing'] },
  { group: 'Individual', seats: 1, members: ['Christian Ryan Juban'] },
  { group: 'Individual', seats: 1, members: ['Atty. John Dwight Cruz'] },
  { group: 'Individual', seats: 1, members: ['Mary Ann Porcel'] },
  // ATE'S FRIEND SECTION
  { group: 'Individual', seats: 1, members: ['Czarina Mae Gorubat'] },
  { group: 'Individual', seats: 1, members: ['Nicole Buenaventura'] },
  { group: 'Individual', seats: 1, members: ['Sofia Cassandra Chua'] },
  { group: 'Individual', seats: 1, members: ['Vian Lyca Pagador'] },
  { group: 'Individual', seats: 1, members: ['Amiel Ryan Bicaldo'] },
  { group: 'Individual', seats: 1, members: ['Joshua Pangilinan'] },
  { group: 'Individual', seats: 1, members: ['Jordan King Santos'] },
  { group: 'Individual', seats: 1, members: ['Toney Ashley Quityquit'] },
  { group: 'Individual', seats: 1, members: ['Paul Aeron Guillermo'] },
  // NINANG/NINONG SECTION
  { group: 'Blanza Family', seats: 2, members: ['Dra. Elizabeth Blanza', 'Jonathan Blanza'] },
  { group: 'Individual', seats: 1, members: ['Nila Garabiles'] },
  { group: 'Individual', seats: 1, members: ['Peachy Cagandahan'] },
  { group: 'Individual', seats: 1, members: ['Jaymar Cruz'] },
  { group: 'Individual', seats: 1, members: ['Nestor Rocamora'] },
  // OFFICEMATES SECTION
  { group: 'Blaya Family', seats: 2, members: ['Jovita Blaya', 'Robert Blaya'] },
  { group: 'Individual', seats: 1, members: ['Susan Espiritu'] },
  { group: 'Individual', seats: 1, members: ['Ma. Nona Salamanque'] },
  { group: 'Individual', seats: 1, members: ['Analiza Soliven'] },
  { group: 'Individual', seats: 1, members: ['Daisy Zulueta'] },
  { group: 'Individual', seats: 1, members: ['Marites Bechayda'] },
  { group: 'Individual', seats: 1, members: ['Richard Gumabo'] },
  { group: 'Individual', seats: 1, members: ['Inis Bañola'] },
  { group: 'Individual', seats: 1, members: ['Lilibeth Simon'] },
  { group: 'Individual', seats: 1, members: ['Marisol Claveria'] },
  { group: 'Individual', seats: 1, members: ['Tee Jay Cabrera'] },
  { group: 'Individual', seats: 1, members: ['Anthony Ayubo'] },
  // VAL'S FRIEND (DIVINE)
  { group: "Val's Friend — Divine", seats: 1, members: ['Anissa Louise Dhaena Cristi'] },
  { group: "Val's Friend — Divine", seats: 1, members: ['Charles Vhincent Salvador'] },
  { group: "Val's Friend — Divine", seats: 1, members: ['Raphael Manuel Nueva España'] },
  { group: "Val's Friend — Divine", seats: 1, members: ['Hillary Evolet Macabutas'] },
  { group: "Val's Friend — Divine", seats: 1, members: ['Mary Kyle Danielle Roxas'] },
  { group: "Val's Friend — Divine", seats: 1, members: ['Charisse Pearson'] },
  // VAL'S FRIEND (VDPS)
  { group: "Val's Friend — VDPS", seats: 1, members: ['Misha Annica Tugnao'] },
  { group: "Val's Friend — VDPS", seats: 1, members: ['Jawea Ainsley Pajarillo'] },
  { group: "Val's Friend — VDPS", seats: 1, members: ['Xian Qyrztenn Palang'] },
  { group: "Val's Friend — VDPS", seats: 1, members: ['Queen Evolet Costales'] },
  // VAL'S FRIEND (JUANSCI)
  { group: 'Cezar Family', seats: 3, members: ['Jean Cezar', 'Jean Alpha Marii Cezar', "Maam Jean's Helper"] },
  { group: "Val's Friend — JuanSci", seats: 1, members: ['Rhiana Ayade'] },
  { group: "Val's Friend — JuanSci", seats: 1, members: ['Ma. Lourdes Kate Dimalanta'] },
  { group: "Val's Friend — JuanSci", seats: 1, members: ['Pope Geronimo Tapel'] },
  { group: "Val's Friend — JuanSci", seats: 1, members: ['Alezandro Sam Estuaria'] },
  { group: "Val's Friend — JuanSci", seats: 1, members: ['Kurt Gabriel Subong'] },
  { group: "Val's Friend — JuanSci", seats: 1, members: ['Xryzthea Calderon'] },
  { group: "Val's Friend — JuanSci", seats: 1, members: ['Gyron Mckayle Padecio'] },
  { group: "Val's Friend — JuanSci", seats: 1, members: ['Elijah Pineda'] },
  { group: "Val's Friend — JuanSci", seats: 1, members: ['Jeanette Javier'] },
  // VAL'S FRIEND (LITEXIAN)
  { group: "Val's Friend — Litexian", seats: 1, members: ['Princess Ellaine Ferran'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Reign Jesse Mayelle Roldan'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Marky Alacha'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Gillan Siwa'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Czarina Miel Saldon'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Rheese Del Rosario'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Jhayron Baynosa'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Zhayana Arley Salamatin'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Yvhanna Claire Espinoza'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Regie Cruz'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Franz Daniel Juguilon'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Nathan Valencia'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Sofia Hernandez'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Angela Bianca Bulagao'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Vynz Rhydon Dilidili'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Raelene Alolino'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Raph Daryll Celiz'] },
  { group: "Val's Friend — Litexian", seats: 1, members: ['Princess-Jurish Balatero'] },
  // SAMPAGA FAMILY (DEBUTANTE)
  { group: 'Sampaga Family', seats: 4, members: ['Rea Valerie Sampaga', 'Rey Vincent Sampaga', 'Pia Sampaga', 'Rey Sampaga'] },
  { group: 'Individual', seats: 1, members: ['Rea Vianica Sampaga'] },
  // LUNA FAMILY (additional)
  { group: 'Luna Family', seats: 1, members: ['Raphael Manuel Luna'] },
  { group: 'Individual', seats: 1, members: ['Emily Monsayac'] },
  // NEW GUESTS
  { group: 'Ong/Cagande Family', seats: 1, members: ['Jheriza Cagande'] },
];

function searchRSVP() {
  const query = document.getElementById('rsvpInput').value.trim().toLowerCase();
  const resultBox = document.getElementById('rsvpResult');
  if (!query) {
    resultBox.innerHTML = '';
    return;
  }

  let found = null;
  for (const entry of rsvpData) {
    for (const member of entry.members) {
      if (member.toLowerCase().includes(query)) {
        found = entry;
        break;
      }
    }
    if (found) break;
  }

  if (!found) {
    resultBox.innerHTML = '<div class="rsvp-not-found">Name not found. Please check your spelling or contact the host.</div>';
    return;
  }

  const companionList = found.members.map((m, i) =>
    '<div class="rsvp-companion"><span class="rsvp-companion-num">' + (i + 1) + '</span><span>' + m + '</span></div>'
  ).join('');

  const groupLabel = found.group !== 'Individual' ? '<div class="rsvp-group">' + found.group + '</div>' : '';

  resultBox.innerHTML =
    '<div class="rsvp-card">' +
      groupLabel +
      '<div class="rsvp-seats"><span class="rsvp-seats-num">' + found.seats + '</span><span class="rsvp-seats-lbl">Seat' + (found.seats > 1 ? 's' : '') + ' Reserved</span></div>' +
      '<div class="rsvp-companions-label">Guest List</div>' +
      '<div class="rsvp-companions">' + companionList + '</div>' +
    '</div>';
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('rsvpInput');
  if (input) {
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') searchRSVP(); });
  }
});
