// ─── Bootstrap ───────────────────────────────────────────────────────────────
const ITEMS    = ITEMS_DATA.map(createItem);
const RECIPES  = CRAFTING_RECIPES.map(r => new Recipe(r));
const UPGRADES = UPGRADE_OPTIONS.map(u => new UpgradeOption(u));

const ITEM_IMAGES = {
  // Weapons
  alligator_snapper:  'assets/items/Alligator Snapper.png',
  ss_m232:            'assets/items/S&S M232.png',
  b934:               'assets/items/B934.png',
  silencer9:          'assets/items/Silencer 9.png',
  freyasneedle:       "assets/items/Freya's.png",
  redemption:         'assets/items/Redemption.png',
  matilda_imp:        'assets/items/Matilda IMP.png',
  requiem_rev:        'assets/items/Requiem.png',
  ghost_grudge:       'assets/items/Ghost Grudge.png',
  msbg500:            'assets/items/MSBG 500.png',
  tac990:             'assets/items/990-TAC.png',
  w870_police:        'assets/items/W870 Police.png',
  classic70:          'assets/items/Classic 70.png',
  marksman1a:         'assets/items/Marksman 1A.png',
  clatter_carbine:    'assets/items/Clatter Carbine.png',
  stiri_revo3:        'assets/items/Stiri REVO3 A1.png',
  gal_smg:            'assets/items/Gal.png',
  hatchet:            'assets/items/Hatchet.png',
  mortal_edge:        'assets/items/Mortal Edge.png',
  rip_knife:          'assets/items/R.I.P. Knife.png',
  hunting_knife:      'assets/items/Hunting Knife.png',
  makeshift_knife:    'assets/items/Makeshift Knife.png',
  rpg7:               'assets/items/RPG-7.png',
  // Ammo
  handgun_ammo:       'assets/items/Handgun Ammo.png',
  shotgun_shells:     'assets/items/Shotgun Shells.png',
  rifle_ammo:         'assets/items/Rifle Ammo.png',
  mg_ammo:            'assets/items/Machine Gun Ammo.png',
  ammo_1255:          'assets/items/12.7x55mm Ammo.png',
  // Consumables
  med_injector:       'assets/items/Med Injector.png',
  hemolytic_injector: 'assets/items/Hemolytic Injector.png',
  transfusion_bag:    'assets/items/Transfusion Bag.png',
  mixed_gg:           'assets/items/Mixed Herb (G+G).png',
  mixed_ggg:          'assets/items/Mixed Herb (G+G+G).png',
  stabilizer:         'assets/items/Stabilizer.png',
  steroids:           'assets/items/Steroids.png',
  hand_grenade:       'assets/items/Hand Grenade.png',
  stacked_grenade:    'assets/items/Stacked Hand Grenade.png',
  molotov:            'assets/items/Molotov Cocktail.png',
  bottle_of_acid:     'assets/items/Bottle of Acid.png',
  corrosive:          'assets/items/Corrosive.png',
  // Resources
  green_herb:         'assets/items/Green Herb.png',
  gunpowder_small:    'assets/items/Gunpowder (Small).png',
  gunpowder_large:    'assets/items/Gunpowder (Large).png',
  scrap:              'assets/items/Scrap.png',
  infected_blood:     'assets/items/Infected Blood.png',
  rare_metal:         'assets/items/Rare Metal.png',
  empty_bottle:       'assets/items/Empty Bottle.png',
  empty_injector:     'assets/items/Empty Injector.png',
  // Key Items
  animus_orb:         'assets/items/Animus Orb.png',
  battery:            'assets/items/Battery.png',
  blood_collector:    'assets/items/Blood Collector.png',
  blood_specimen_c:   'assets/items/Blood Specimen (Converged).png',
  blood_specimen_d:   'assets/items/Blood Specimen (Denatured).png',
  blood_specimen_poly:'assets/items/Blood Specimen (Polymerized).png',
  blood_specimen_rev: 'assets/items/Blood Specimen (Reversible).png',
  lock_pick:          'assets/items/Lock Pick.png',
  fuse:               'assets/items/Fuse.png',
  crank_lever:        'assets/items/Crank Lever.png',
  gas_can:            'assets/items/Gas Can.png',
  locker_key:         'assets/items/Locker key.png',
  antique_coin:       'assets/items/Antique Coin.png',
  antique_coins:      'assets/items/Antique Coins.png',
  key_items_bag:      'assets/items/Key Items.png',
  artificial_heart:   'assets/items/Artificial Heart.png',
  artificial_lungs:   'assets/items/Artificial Lungs.png',
  broken_signal:      'assets/items/Broken Signal Receiver.png',
  bsaa_key:           'assets/items/BSAA Container Key.png',
  cedar_key:          'assets/items/Cedarbrook Apartment Key.png',
  cherub_key:         'assets/items/Cherub Key.png',
  distributor:        'assets/items/Distributor.png',
  double_helix:       'assets/items/Double Helix Model.png',
  east_wing_key:      'assets/items/East Wing Keycard.png',
  files:              'assets/items/Files.png',
  fire_poker:         'assets/items/Fire Poker.png',
  forklift_key:       'assets/items/Forklift Key.png',
  hourglass:          'assets/items/Hourglass.png',
  id_wristband_1:     'assets/items/ID Wristband (Level 1).png',
  id_wristband_2:     'assets/items/ID Wristband (Level 2).png',
  id_wristband_3:     'assets/items/ID Wristband (Level 3).png',
  joint_plug:         'assets/items/Joint Plug.png',
  leatherbound_notebook: 'assets/items/Leatherbound Notebook.png',
  lighter:            'assets/items/Lighter.png',
  magnetic_key:       'assets/items/Magnetic Key.png',
  maries_doll:        "assets/items/Marie's Doll.png",
  mechanic_jack:      'assets/items/Mechanic Jack.png',
  moon_quartz:        'assets/items/Moon Quartz.png',
  noblesse_orb:       'assets/items/Noblesse Orb.png',
  old_key:            'assets/items/Old Key.png',
  organ_transport:    'assets/items/Organ Transport Box.png',
  override_key_11:    'assets/items/Override Key (Bioweapon Repository 11).png',
  override_key_dump:  'assets/items/Override Key (Dump Control Room).png',
  pencil:             'assets/items/Pencil.png',
  puzzles:            'assets/items/Puzzles.png',
  red_jewel:          'assets/items/Red Jewel.png',
  relay:              'assets/items/Relay.png',
  repair_kit:         'assets/items/Repair Kit.png',
  rusty_crank:        'assets/items/Rusty Crank.png',
  screwdriver:        'assets/items/Screwdriver.png',
  severed_hand:       'assets/items/Severed Hand.png',
  socket_wrench:      'assets/items/Square Socket Wrench.png',
  star_quartz:        'assets/items/Star Quartz.png',
  sun_quartz:         'assets/items/Sun Quartz.png',
  tactical_tracker:   'assets/items/Tactical Tracker.png',
  unicorn_box:        'assets/items/Unicorn Trinket Box.png',
  valve_wheel:        'assets/items/Valve Handwheel.png',
  wire_cutters:       'assets/items/Wire Cutters.png',
  wrench:             'assets/items/Wrench.png',
  hatch_key:          'assets/items/Hatch Key.png',
  helicopter_key:     'assets/items/Helicopter Key.png',
  pantry_key:         'assets/items/Pantry Key.png',
  // Equipment
  body_armor:         'assets/items/Body Armor.png',
  hip_pouch:          'assets/items/Hip Pouch.png',
  case_upgrade:       'assets/items/Case Upgrade (8x13).png',
  override_manual:    'assets/items/Override Manual.png',
};

let inventory        = new Inventory(8, 10);
let selectedStackId  = null;
let draggedStackId   = null;
let currentCharacter = 'leon';
let currency         = { credits: 500, coins: 0 };

const CAT_ORDER = ['Weapon','Ammo','Consumable','Resource','KeyItem','Equipment'];

function switchCharacter(char) {
  if (currentCharacter === char) return;
  currentCharacter = char;
  selectedStackId  = null;

  const cols = char === 'leon' ? 10 : 6;
  inventory  = new Inventory(8, cols);
  currency   = char === 'leon' ? { credits: 500, coins: 0 } : { credits: 0, coins: 5 };

  document.querySelectorAll('.char-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.char === char)
  );

  populateDefaultInventory();
  refresh();
}

function getFilteredItems() {
  const q   = document.getElementById('searchInput').value.toLowerCase().trim();
  const cat = document.getElementById('categorySelect').value;
  return ITEMS.filter(item =>
    (!q   || item.name.toLowerCase().includes(q)) &&
    (!cat || item.category === cat)
  );
}

function renderCatalog() {
  const items = getFilteredItems();
  const cats  = [...new Set(items.map(i => i.category))]
                  .sort((a, b) => CAT_ORDER.indexOf(a) - CAT_ORDER.indexOf(b));

  if (!items.length) {
    document.getElementById('catalogBody').innerHTML =
      '<p class="empty-msg">Нічого не знайдено</p>';
    return;
  }

  document.getElementById('catalogBody').innerHTML = cats.map(cat => {
    const ci = items.filter(i => i.category === cat);
    return `
      <div class="category-section">
        <div class="category-header">
          <h3>${catLabel(cat)}</h3>
          <span class="category-count">${ci.length}</span>
        </div>
        <div class="items-grid">
          ${ci.map(renderCard).join('')}
        </div>
      </div>`;
  }).join('');
}

function catLabel(cat) {
  return { Weapon:'Weapon (Зброя)', Ammo:'Ammo (Набої)', Consumable:'Consumable (Витратні)',
           Resource:'Resource (Ресурси)', KeyItem:'Key Item (Ключові)', Equipment:'Equipment (Обладнання)' }[cat] ?? cat;
}

function renderCard(item) {
  const inInv  = inventory.countItem(item.id);
  const maxQty = item.stackable ? item.maxStack : 1;
  const imgPath = ITEM_IMAGES[item.id];

  let extra = '';
  if (item instanceof WeaponItem)    extra = `урон ${item.damage} · FR ${item.fireRate} · магазин ${item.ammoCapacity}`;
  if (item instanceof ConsumableItem && item.subtype === 'healing')   extra = `HP +${item.healAmount}`;
  if (item instanceof ConsumableItem && item.subtype === 'throwable') extra = `урон ${item.throwDamage}`;
  if (item instanceof EquipmentItem) extra = `${item.effect} +${item.statChange}${item.permanent ? ' (разова)' : ''}`;

  const imgHtml = imgPath
    ? `<div class="item-card-img"><img src="${imgPath}" alt="${item.name}" onerror="this.parentElement.classList.add('no-img');this.remove()"></div>`
    : `<div class="item-card-img no-img"><span>${item.icon}</span></div>`;

  return `
    <div class="item-card">
      ${imgHtml}
      <div class="item-card-body">
        <div class="item-card-header">
          <span class="item-name">${item.name}</span>
          <span class="category-badge badge-${item.category}">${item.category}</span>
        </div>
        <div class="item-meta">${item.width}×${item.height} &nbsp;·&nbsp; смол&nbsp;${item.smola} &nbsp;·&nbsp; в інвентарі:&nbsp;${inInv}${extra ? '<br><span style="color:#7ab0d4">'+extra+'</span>' : ''}</div>
        <div class="item-add-row">
          <span class="qty-label">К-сть</span>
          <input type="number" class="qty-input" id="qty_${item.id}" value="1" min="1" max="${maxQty}">
          <button class="btn-add" onclick="addItem('${item.id}')">Додати</button>
        </div>
      </div>
    </div>`;
}

function renderInventory() {
  renderStats();
  renderGrid();
  renderBottomBar();
}

function renderStats() {
  document.getElementById('statSlots').textContent    = `${inventory.rows} × ${inventory.cols}`;
  document.getElementById('statOccupied').textContent = `${inventory.countOccupied()} / ${inventory.rows * inventory.cols}`;
  document.getElementById('statSmola').textContent    = inventory.smola;
  document.getElementById('statUpgrades').textContent = inventory.upgrades;

  if (currentCharacter === 'leon') {
    document.getElementById('statCurrencyLabel').textContent = 'Кредити';
    document.getElementById('statCurrency').textContent      = currency.credits + ' CR';
  } else {
    document.getElementById('statCurrencyLabel').textContent = 'Монети';
    document.getElementById('statCurrency').textContent      = currency.coins + ' 🪙';
  }
}

function onDragStart(e, stackId) {
  draggedStackId = stackId;
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => e.target?.classList.add('dragging'), 0);
}

function onDragEnd(e) {
  e.target.classList.remove('dragging');
  draggedStackId = null;
}

function onDragOver(e) {
  if (!draggedStackId) return;
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function onDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}

function onDrop(e, toRow, toCol) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  if (!draggedStackId) return;
  const stackId = draggedStackId;
  draggedStackId = null;
  if (!inventory.moveStack(stackId, toRow, toCol))
    showToast('Не можна перемістити сюди', 'error');
  refresh();
}

function renderGrid() {
  const grid = document.getElementById('inventoryGrid');
  const wrap = document.querySelector('.grid-wrap');
  const available = wrap.clientWidth - 28;
  const CELL = Math.floor((available - (inventory.cols - 1) * 2) / inventory.cols);
  grid.style.gridTemplateColumns = `repeat(${inventory.cols}, ${CELL}px)`;
  grid.style.gridAutoRows = `${CELL}px`;

  let html = '';
  for (let r = 0; r < inventory.rows; r++) {
    for (let c = 0; c < inventory.cols; c++) {
      const slot  = inventory.getSlot(r, c);
      const style = `grid-column:${c+1};grid-row:${r+1}`;

      if (slot.isEmpty()) {
        html += `<div class="grid-slot" style="${style}"
                      ondragover="onDragOver(event)"
                      ondragleave="onDragLeave(event)"
                      ondrop="onDrop(event,${r},${c})"></div>`;
        continue;
      }

      if (!slot.isRoot) continue;

      const item     = slot.item;
      const selected = slot.stackId === selectedStackId;
      const imgPath  = ITEM_IMAGES[item.id];

      const imgHtml = imgPath
        ? `<img class="slot-img" src="${imgPath}" alt="${item.name}" onerror="this.outerHTML='<span class=\\'slot-icon\\'>${item.icon}</span>'">`
        : `<span class="slot-icon">${item.icon}</span>`;

      const qtyBadge = slot.quantity > 1 ? `<span class="slot-qty">×${slot.quantity}</span>` : '';
      const upgraded = item instanceof WeaponItem && item.upgradeLevel > 0;
      const lvBadge  = upgraded ? `<span class="slot-lv">Lv${item.upgradeLevel}</span>` : '';

      let cls = 'grid-slot occupied root-slot';
      if (selected) cls += ' selected';
      if (upgraded) cls += ' upgraded';

      html += `<div class="${cls}"
                    style="grid-column:${c+1}/span ${item.width};grid-row:${r+1}/span ${item.height}"
                    draggable="true"
                    ondragstart="onDragStart(event,'${slot.stackId}')"
                    ondragend="onDragEnd(event)"
                    ondragover="onDragOver(event)"
                    ondragleave="onDragLeave(event)"
                    ondrop="onDrop(event,${r},${c})"
                    onclick="selectStack('${slot.stackId}')"
                    title="${item.name} ×${slot.quantity}">
                 ${lvBadge}${imgHtml}<span class="slot-name">${item.name}</span>${qtyBadge}
               </div>`;
    }
  }
  grid.innerHTML = html;
}

function renderBottomBar() {
  const info     = document.getElementById('selectedInfo');
  const btnOne   = document.getElementById('btnRemoveOne');
  const btnStack = document.getElementById('btnRemoveStack');

  if (!selectedStackId) {
    info.innerHTML = `
      <div class="sel-title">Нічого не вибрано</div>
      <div class="sel-hint">Клікніть на предмет в інвентарі, щоб побачити деталі або вилучити його.</div>`;
    btnOne.disabled = btnStack.disabled = true;
    return;
  }

  const root = inventory.allSlots().find(s => s.stackId === selectedStackId && s.isRoot);
  if (!root) { selectedStackId = null; renderBottomBar(); return; }

  const it   = root.item;
  const tags = [
    it.usable      ? '✅ Використати' : '',
    it.combinable  ? '🔗 Комбінувати' : '',
    it.upgradeable ? '⬆️ Апгрейд'    : '',
  ].filter(Boolean).join(' · ') || '❌ Лише інвентар';

  let details = `${it.width}×${it.height} · смола: ${it.smola} · к-сть: <b>${root.quantity}</b>`;
  if (it instanceof WeaponItem)
    details += ` · урон: ${it.damage} · FR: ${it.fireRate} · магазин: ${it.ammoCapacity}`;

  info.innerHTML = `
    <div class="sel-title">${it.icon} ${it.name} <span class="category-badge badge-${it.category}">${it.category}</span></div>
    <div class="sel-hint">${details} · ${tags}</div>`;

  btnOne.disabled = btnStack.disabled = false;
}

function renderCrafting() {
  const html = RECIPES.map(rec => {
    const can      = rec.canCraft(inventory);
    const resultIt = ITEMS.find(i => i.id === rec.resultItemId);
    const ingHtml  = rec.ingredients.map(({ itemId, qty }) => {
      const it  = ITEMS.find(i => i.id === itemId);
      const has = inventory.countItem(itemId);
      return `<span class="ing ${has >= qty ? 'ok' : 'bad'}">${it?.name ?? itemId} ${has}/${qty}</span>`;
    }).join('');

    return `
      <div class="recipe-card ${can ? 'can-craft' : ''}">
        <div class="recipe-result">${resultIt?.icon ?? '?'} ${resultIt?.name ?? rec.resultItemId} ×${rec.resultQty}</div>
        <div class="recipe-ings">${ingHtml}</div>
        <button class="btn-craft" onclick="doCraft('${rec.id}')" ${can ? '' : 'disabled'}>Крафт</button>
      </div>`;
  }).join('');

  document.getElementById('craftingList').innerHTML = html || '<p class="empty-msg">Рецептів немає</p>';
}

function renderUpgrades() {
  const weaponIds = [...new Set(UPGRADES.map(u => u.weaponId))];

  const html = weaponIds.map(weaponId => {
    const weapon  = ITEMS.find(i => i.id === weaponId);
    const slot    = inventory.allSlots().find(s => s.isRoot && s.item?.id === weaponId);
    const inInv   = !!slot;
    const upgList = UPGRADES.filter(u => u.weaponId === weaponId);
    const canAny  = inInv && upgList.some(u => u.canApply(inventory));

    const stats = inInv
      ? `урон ${slot.item.damage} · FR ${slot.item.fireRate} · магазин ${slot.item.ammoCapacity}`
      : '';

    return `
      <div class="upgrade-card ${inInv ? '' : 'no-weapon'}">
        <div class="upgrade-weapon-name">
          ${weapon?.icon ?? '🔫'} ${weapon?.name ?? weaponId}
          ${inInv
            ? `<span class="upgrade-weapon-stats">${stats}</span>`
            : `<span class="not-in-inv">(немає в інвентарі)</span>`}
        </div>
        <div class="upgrade-card-footer">
          <span class="upg-count">${upgList.length} варіант${upgList.length > 1 ? 'и' : ''}</span>
          <button class="btn-upgrade" onclick="openUpgradeModal('${weaponId}')" ${inInv ? '' : 'disabled'}>
            Апгрейди →
          </button>
        </div>
      </div>`;
  }).join('');

  document.getElementById('upgradeList').innerHTML = html || '<p class="empty-msg">Апгрейдів немає</p>';
}

function openUpgradeModal(weaponId) {
  const weapon = ITEMS.find(i => i.id === weaponId);
  const slot   = inventory.allSlots().find(s => s.isRoot && s.item?.id === weaponId);
  if (!slot || !weapon) return;

  document.getElementById('modalWeaponName').innerHTML =
    `${weapon.icon} ${weapon.name} <span class="category-badge badge-${weapon.category}">${weapon.category}</span>`;
  document.getElementById('modalWeaponStats').textContent =
    `урон: ${slot.item.damage}  ·  FR: ${slot.item.fireRate}  ·  магазин: ${slot.item.ammoCapacity}  ·  смола: ${inventory.smola}`;

  const upgList = UPGRADES.filter(u => u.weaponId === weaponId);
  document.getElementById('modalUpgradeList').innerHTML = upgList.map(upg => {
    const can = upg.canApply(inventory);
    return `
      <div class="modal-upg-row ${can ? 'can-upgrade' : ''}">
        <span class="modal-upg-desc">${upg.description}</span>
        <span class="upgrade-stat">${upg.statKey} +${upg.statChange}</span>
        <span class="upgrade-cost">🧪 ${upg.cost}</span>
        <button class="btn-upgrade" onclick="doUpgradeModal('${upg.id}','${weaponId}')" ${can ? '' : 'disabled'}>
          Застосувати
        </button>
      </div>`;
  }).join('');

  document.getElementById('upgradeModal').classList.remove('hidden');
}

function closeUpgradeModal() {
  document.getElementById('upgradeModal').classList.add('hidden');
}

function doUpgradeModal(upgradeId, weaponId) {
  doUpgrade(upgradeId);
  openUpgradeModal(weaponId);
}

function addItem(itemId) {
  const item = ITEMS.find(i => i.id === itemId);
  if (!item) return;
  const qty = parseInt(document.getElementById(`qty_${itemId}`)?.value ?? '1', 10);
  if (isNaN(qty) || qty < 1) return;

  if (!inventory.addItem(item, qty))
    showToast(`Недостатньо місця для "${item.name}"`, 'error');

  refresh();
}

function selectStack(stackId) {
  selectedStackId = selectedStackId === stackId ? null : stackId;
  renderInventory();
}

function removeOne() {
  if (!selectedStackId) return;
  inventory.removeOne(selectedStackId);
  if (!inventory.allSlots().some(s => s.stackId === selectedStackId)) selectedStackId = null;
  refresh();
}

function removeStack() {
  if (!selectedStackId) return;
  inventory.removeStack(selectedStackId);
  selectedStackId = null;
  refresh();
}

function sortInventory() {
  selectedStackId = null;
  inventory.sort();
  refresh();
}

function clearInventory() {
  if (!confirm('Очистити весь інвентар?')) return;
  selectedStackId = null;
  inventory.clear();
  refresh();
}

function doCraft(recipeId) {
  const rec = RECIPES.find(r => r.id === recipeId);
  if (!rec) return;
  if (!rec.craft(inventory)) return;
  const resultItem = ITEMS.find(i => i.id === rec.resultItemId);
  if (resultItem) inventory.addItem(resultItem, rec.resultQty);
  showToast(`Виготовлено: ${resultItem?.name ?? rec.resultItemId}`, 'ok');
  refresh();
}

function doUpgrade(upgradeId) {
  const upg  = UPGRADES.find(u => u.id === upgradeId);
  if (!upg) return;
  const slot = inventory.allSlots().find(s => s.isRoot && s.item?.id === upg.weaponId);
  if (!slot) return;
  try {
    const msg = upg.apply(slot.item, inventory);
    showToast(msg, 'ok');
  } catch (e) {
    showToast(e.message, 'error');
  }
  refresh();
}

function refresh() {
  renderInventory();
  renderCatalog();
  renderCrafting();
  renderUpgrades();
}

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.toggle('hidden', p.id !== `tab-${tab}`));
}

function showToast(msg, type = 'ok') {
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.textContent = msg;
  document.getElementById('toastContainer').appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function populateDefaultInventory() {
  const add = (id, qty = 1) => {
    const item = ITEMS.find(i => i.id === id);
    if (item) inventory.addItem(item, qty);
  };

  if (currentCharacter === 'leon') {
    add('alligator_snapper');
    add('msbg500');
    add('classic70');
    add('stiri_revo3');
    add('hatchet');
    add('handgun_ammo', 18);
    add('shotgun_shells', 8);
    add('rifle_ammo', 5);
    add('mg_ammo', 30);
    add('med_injector', 1);
    add('mixed_gg', 1);
    add('molotov', 2);
    add('hand_grenade', 2);
    add('gunpowder_small', 3);
    add('scrap', 4);
    add('infected_blood', 2);
  } else {
    add('requiem_rev');
    add('mortal_edge');
    add('kotetsu');
    add('ammo_1255', 5);
    add('handgun_ammo', 8);
    add('med_injector', 1);
    add('hemolytic_injector', 1);
    add('molotov', 2);
    add('bottle_of_acid', 2);
    add('infected_blood', 40);
    add('scrap', 5);
    add('rare_metal', 2);
    add('empty_bottle', 3);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchInput').addEventListener('input', renderCatalog);
  document.getElementById('categorySelect').addEventListener('change', renderCatalog);
  document.getElementById('btnSort').addEventListener('click', sortInventory);
  document.getElementById('btnClear').addEventListener('click', clearInventory);
  document.getElementById('btnRemoveOne').addEventListener('click', removeOne);
  document.getElementById('btnRemoveStack').addEventListener('click', removeStack);

  document.querySelectorAll('.tab-btn').forEach(btn =>
    btn.addEventListener('click', () => switchTab(btn.dataset.tab))
  );

  document.getElementById('upgradeModal').addEventListener('click', e => {
    if (e.target === document.getElementById('upgradeModal')) closeUpgradeModal();
  });

  populateDefaultInventory();
  renderCatalog();
  renderInventory();
  renderCrafting();
  renderUpgrades();
});
