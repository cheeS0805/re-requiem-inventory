class Item {
  constructor(data) {
    this.id          = data.id;
    this.name        = data.name;
    this.category    = data.category;
    this.width       = data.w;
    this.height      = data.h;
    this.smola       = data.smola;
    this.stackable   = data.stackable;
    this.maxStack    = data.maxStack;
    this.usable      = data.usable;
    this.combinable  = data.combinable;
    this.upgradeable = data.upgradeable;
    this.icon        = data.icon;
    this.description = data.description;
  }

  getSlotCount() { return this.width * this.height; }

  use() {
    if (!this.usable) throw new Error(`"${this.name}" не можна використати напряму.`);
    return `${this.name} використано.`;
  }

  combine(other) {
    if (!this.combinable) throw new Error(`"${this.name}" не можна комбінувати.`);
    return null;
  }

  toString() {
    return `[${this.category}] ${this.name} (${this.width}×${this.height})`;
  }
}

class WeaponItem extends Item {
  constructor(data) {
    super(data);
    this.damage       = data.damage       ?? 0;
    this.fireRate     = data.fireRate      ?? 0;
    this.ammoCapacity = data.ammoCapacity  ?? 0;
    this.ammoType     = data.ammoType      ?? null;
  }

  use() {
    return `"${this.name}" екіпірована. Урон: ${this.damage}, Скорострільність: ${this.fireRate}, Магазин: ${this.ammoCapacity}.`;
  }

  applyUpgrade(upgradeOption) {
    if (!this.upgradeable) throw new Error(`"${this.name}" не підтримує апгрейди.`);
    this[upgradeOption.statKey] = (this[upgradeOption.statKey] ?? 0) + upgradeOption.statChange;
    return `"${this.name}": ${upgradeOption.description}. ${upgradeOption.statKey} +${upgradeOption.statChange}`;
  }
}

class AmmoItem extends Item {
  constructor(data) {
    super({ ...data, usable: false });
    this.ammoType = data.ammoType ?? null;
  }
}

class ConsumableItem extends Item {
  constructor(data) {
    super(data);
    this.subtype     = data.subtype      ?? 'healing';
    this.healAmount  = data.healAmount   ?? 0;
    this.throwDamage = data.throwDamage  ?? 0;
  }

  use() {
    if (this.subtype === 'healing') {
      return `"${this.name}" використано. Відновлено ${this.healAmount}% HP.`;
    }
    return `"${this.name}" кинуто. Завдано ${this.throwDamage} урону у зоні вибуху.`;
  }
}

class ResourceItem extends Item {
  constructor(data) {
    super({ ...data, usable: false });
  }
}

class KeyItem extends Item {
  constructor(data) {
    super({ ...data, usable: false, combinable: false });
  }

  use() {
    throw new Error(`"${this.name}" — ключовий предмет. Застосовується лише у квесті.`);
  }
}

class EquipmentItem extends Item {
  constructor(data) {
    super(data);
    this.effect     = data.effect    ?? null;
    this.statChange = data.statChange ?? 0;
    this.permanent  = data.permanent  ?? false;
  }

  use() {
    const msg = `"${this.name}" застосовано. ${this.effect} +${this.statChange}.`;
    return this.permanent ? msg + ' (разова дія)' : msg + ' (постійний ефект)';
  }
}

class InventorySlot {
  constructor(row, col) {
    this.row      = row;
    this.col      = col;
    this.item     = null;
    this.quantity = 0;
    this.stackId  = null;
    this.isRoot   = false;
  }

  place(item, qty, stackId, isRoot) {
    this.item     = item;
    this.quantity = isRoot ? qty : 0;
    this.stackId  = stackId;
    this.isRoot   = isRoot;
    return this;
  }

  clear() {
    this.item = null; this.quantity = 0;
    this.stackId = null; this.isRoot = false;
    return this;
  }

  isEmpty() { return this.item === null; }
}

class Recipe {
  constructor({ id, resultItemId, resultQty, ingredients }) {
    this.id           = id;
    this.resultItemId = resultItemId;
    this.resultQty    = resultQty;
    this.ingredients  = ingredients;
  }

  canCraft(inventory) {
    return this.ingredients.every(({ itemId, qty }) => inventory.countItem(itemId) >= qty);
  }

  craft(inventory) {
    if (!this.canCraft(inventory)) return false;
    this.ingredients.forEach(({ itemId, qty }) => inventory.removeItems(itemId, qty));
    return true;
  }
}

class UpgradeOption {
  constructor({ id, weaponId, level, cost, statKey, statChange, description }) {
    this.id          = id;
    this.weaponId    = weaponId;
    this.level       = level;
    this.cost        = cost;
    this.statKey     = statKey;
    this.statChange  = statChange;
    this.description = description;
  }

  canApply(inventory) {
    return inventory.smola >= this.cost;
  }

  apply(weaponItem, inventory) {
    if (!this.canApply(inventory)) throw new Error('Недостатньо смоли для апгрейду.');
    inventory.smola -= this.cost;
    inventory.upgrades++;
    return weaponItem.applyUpgrade(this);
  }
}

class Inventory {
  constructor(rows = 8, cols = 10) {
    this.rows     = rows;
    this.cols     = cols;
    this.slots    = Array.from({ length: rows }, (_, r) =>
                      Array.from({ length: cols }, (_, c) => new InventorySlot(r, c)));
    this.smola    = 0;
    this.upgrades = 0;
    this._nextId  = 1;
  }

  _genId()      { return `s${this._nextId++}`; }
  getSlot(r, c) { return this.slots[r]?.[c] ?? null; }
  allSlots()    { return this.slots.flat(); }

  countOccupied() { return this.allSlots().filter(s => !s.isEmpty()).length; }

  countItem(itemId) {
    return this.allSlots()
      .filter(s => s.isRoot && s.item?.id === itemId)
      .reduce((sum, s) => sum + s.quantity, 0);
  }

  findFreePosition(w, h) {
    for (let r = 0; r <= this.rows - h; r++)
      for (let c = 0; c <= this.cols - w; c++)
        if (this._canFit(r, c, w, h)) return { r, c };
    return null;
  }

  _canFit(sr, sc, w, h) {
    for (let r = sr; r < sr + h; r++)
      for (let c = sc; c < sc + w; c++)
        if (!this.slots[r]?.[c]?.isEmpty()) return false;
    return true;
  }

  addItem(item, qty = 1) {
    if (item.stackable) {
      for (const slot of this.allSlots()) {
        if (qty <= 0) break;
        if (slot.isRoot && slot.item?.id === item.id && slot.quantity < item.maxStack) {
          const canAdd = Math.min(qty, item.maxStack - slot.quantity);
          slot.quantity += canAdd;
          this.smola    += item.smola * canAdd;
          qty           -= canAdd;
        }
      }
    }

    while (qty > 0) {
      const pos = this.findFreePosition(item.width, item.height);
      if (!pos) return false;

      const stackQty = item.stackable ? Math.min(qty, item.maxStack) : 1;
      const id       = this._genId();

      for (let r = pos.r; r < pos.r + item.height; r++)
        for (let c = pos.c; c < pos.c + item.width; c++)
          this.slots[r][c].place(item, stackQty, id, r === pos.r && c === pos.c);

      this.smola += item.smola * stackQty;
      qty        -= item.stackable ? stackQty : 1;
    }
    return true;
  }

  removeStack(stackId) {
    const root = this.allSlots().find(s => s.stackId === stackId && s.isRoot);
    if (root) this.smola = Math.max(0, this.smola - root.item.smola * root.quantity);
    this.allSlots().filter(s => s.stackId === stackId).forEach(s => s.clear());
  }

  removeOne(stackId) {
    const root = this.allSlots().find(s => s.stackId === stackId && s.isRoot);
    if (!root) return;
    this.smola = Math.max(0, this.smola - root.item.smola);
    root.quantity--;
    if (root.quantity <= 0) this.removeStack(stackId);
  }

  removeItems(itemId, qty) {
    const roots = this.allSlots()
      .filter(s => s.isRoot && s.item?.id === itemId)
      .sort((a, b) => a.quantity - b.quantity);

    for (const slot of roots) {
      if (qty <= 0) break;
      const n = Math.min(qty, slot.quantity);
      slot.quantity -= n;
      this.smola     = Math.max(0, this.smola - slot.item.smola * n);
      qty           -= n;
      if (slot.quantity <= 0) this.removeStack(slot.stackId);
    }
  }

  sort() {
    const CAT = { Weapon:0, Ammo:1, Consumable:2, Resource:3, KeyItem:4, Equipment:5 };
    const stacks = this.allSlots()
      .filter(s => s.isRoot)
      .map(s => ({ item: s.item, qty: s.quantity }))
      .sort((a, b) => {
        const d = (CAT[a.item.category] ?? 9) - (CAT[b.item.category] ?? 9);
        return d !== 0 ? d : a.item.name.localeCompare(b.item.name);
      });

    this.clear(false);
    stacks.forEach(({ item, qty }) => this.addItem(item, qty));
  }

  clear(resetUpgrades = true) {
    this.allSlots().forEach(s => s.clear());
    this.smola   = 0;
    this._nextId = 1;
    if (resetUpgrades) this.upgrades = 0;
  }
}

class Character {
  constructor({ name, inventoryRows = 8, inventoryCols = 10, currency = 'smola', recipes = [] }) {
    this.name          = name;
    this.inventory     = new Inventory(inventoryRows, inventoryCols);
    this.currency      = currency;
    this.recipes       = recipes;
    this.stats         = { defense: 0, maxHealth: 100, accuracy: 0 };
  }

  applyEquipment(equipmentItem) {
    if (!(equipmentItem instanceof EquipmentItem)) return;
    this.stats[equipmentItem.effect] = (this.stats[equipmentItem.effect] ?? 0) + equipmentItem.statChange;
    if (equipmentItem.permanent) {
      this.inventory.removeItems(equipmentItem.id, 1);
    }
  }

  availableRecipes() {
    return this.recipes.filter(r => r.canCraft(this.inventory));
  }
}

function createItem(data) {
  switch (data.category) {
    case 'Weapon':    return new WeaponItem(data);
    case 'Ammo':      return new AmmoItem(data);
    case 'Consumable':return new ConsumableItem(data);
    case 'Resource':  return new ResourceItem(data);
    case 'KeyItem':   return new KeyItem(data);
    case 'Equipment': return new EquipmentItem(data);
    default:          return new Item(data);
  }
}
