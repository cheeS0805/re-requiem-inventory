const ITEMS_DATA = [

  {
    id:'ss_m232', name:'S&S M232', category:'Weapon',
    w:2, h:3, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Надійний пістолет зі збалансованими характеристиками.',
    damage:110, fireRate:2.3, ammoCapacity:9, ammoType:'handgun_ammo'
  },
  {
    id:'alligator_snapper', name:'Alligator Snapper', category:'Weapon',
    w:2, h:3, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Компактний пістолет. Збалансований урон та скорострільність.',
    damage:100, fireRate:2.5, ammoCapacity:9, ammoType:'handgun_ammo'
  },
  {
    id:'b934', name:'B934', category:'Weapon',
    w:2, h:3, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Легкий пістолет. Менший урон, але низька вага.',
    damage:80, fireRate:1.5, ammoCapacity:7, ammoType:'handgun_ammo'
  },
  {
    id:'silencer9', name:'Silencer 9', category:'Weapon',
    w:2, h:3, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Пістолет з глушником. Підвищений урон та точність.',
    damage:150, fireRate:3.5, ammoCapacity:17, ammoType:'handgun_ammo'
  },
  {
    id:'freyasneedle', name:"Freya's Needle", category:'Weapon',
    w:2, h:3, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Автоматичний пістолет з великим магазином.',
    damage:90, fireRate:4.0, ammoCapacity:30, ammoType:'handgun_ammo'
  },
  {
    id:'redemption', name:'Redemption', category:'Weapon',
    w:2, h:4, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'✨', description:'Особливий пістолет з нескінченним магазином. Нагорода за проходження.',
    damage:430, fireRate:0.5, ammoCapacity:999, ammoType:'handgun_ammo'
  },
  {
    id:'matilda_imp', name:'Matilda IMP', category:'Weapon',
    w:2, h:3, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Покращена версія Matilda з більшим магазином.',
    damage:130, fireRate:2.8, ammoCapacity:15, ammoType:'handgun_ammo'
  },
  {
    id:'requiem_rev', name:'Requiem', category:'Weapon',
    w:2, h:4, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Потужний револьвер. Один постріл — величезний урон.',
    damage:430, fireRate:0.8, ammoCapacity:5, ammoType:'ammo_1255'
  },
  {
    id:'ghost_grudge', name:'Ghost Grudge', category:'Weapon',
    w:2, h:4, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'✨', description:'Унікальний револьвер з нескінченним магазином.',
    damage:450, fireRate:3.0, ammoCapacity:999, ammoType:'ammo_1255'
  },
  {
    id:'msbg500', name:'MSBG 500', category:'Weapon',
    w:2, h:5, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Помповий дробовик. Висока зупиняюча сила.',
    damage:250, fireRate:1.0, ammoCapacity:5, ammoType:'shotgun_shells'
  },
  {
    id:'tac990', name:'990-TAC', category:'Weapon',
    w:2, h:5, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Напівавтоматичний дробовик з великим магазином.',
    damage:300, fireRate:2.3, ammoCapacity:9, ammoType:'shotgun_shells'
  },
  {
    id:'w870_police', name:'W870 Police', category:'Weapon',
    w:2, h:5, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Поліцейський дробовик. Найвищий урон серед дробовиків.',
    damage:330, fireRate:1.5, ammoCapacity:5, ammoType:'shotgun_shells'
  },
  {
    id:'classic70', name:'Classic 70', category:'Weapon',
    w:2, h:6, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🎯', description:'Снайперська гвинтівка для точних дальніх пострілів.',
    damage:310, fireRate:0.5, ammoCapacity:6, ammoType:'rifle_ammo'
  },
  {
    id:'marksman1a', name:'Marksman 1A', category:'Weapon',
    w:2, h:6, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🎯', description:'Найточніша гвинтівка в грі. Ідеальна для снайперів.',
    damage:250, fireRate:2.0, ammoCapacity:10, ammoType:'rifle_ammo'
  },
  {
    id:'clatter_carbine', name:'Clatter Carbine', category:'Weapon',
    w:2, h:5, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🎯', description:'Автоматичний карабін. Висока скорострільність.',
    damage:200, fireRate:3.8, ammoCapacity:40, ammoType:'rifle_ammo'
  },
  {
    id:'stiri_revo3', name:'Stiri REVO3 A1', category:'Weapon',
    w:2, h:4, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Компактний пістолет-кулемет. Найвища скорострільність.',
    damage:50, fireRate:4.6, ammoCapacity:30, ammoType:'mg_ammo'
  },
  {
    id:'gal_smg', name:'Gal', category:'Weapon',
    w:2, h:4, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🔫', description:'Важкий ПК. Великий магазин, потужний урон.',
    damage:130, fireRate:3.8, ammoCapacity:40, ammoType:'mg_ammo'
  },
  {
    id:'hatchet', name:'Hatchet', category:'Weapon',
    w:1, h:3, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'🪓', description:'Сокира ближнього бою. Висока міцність.',
    damage:180, fireRate:0, ammoCapacity:0, ammoType:null, durability:2.5
  },

  {
    id:'mortal_edge', name:'Mortal Edge', category:'Weapon',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:true,
    icon:'⚔️', description:'Бойовий ніж. Найвищий урон серед ножів.',
    damage:250, fireRate:0, ammoCapacity:0, ammoType:null, durability:4.0
  },
  {
    id:'rip_knife', name:'R.I.P. Knife', category:'Weapon',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'🔪', description:'Крафтований ніж. Гарний баланс урону та міцності.',
    damage:200, fireRate:0, ammoCapacity:0, ammoType:null, durability:4.5
  },
  {
    id:'hunting_knife', name:'Hunting Knife', category:'Weapon',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:true, upgradeable:false,
    icon:'🔪', description:'Дропається з ворогів. Можна розібрати на Scrap.',
    damage:100, fireRate:0, ammoCapacity:0, ammoType:null, durability:2.0
  },
  {
    id:'makeshift_knife', name:'Makeshift Knife', category:'Weapon',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:true, upgradeable:false,
    icon:'🗡️', description:'Саморобний ніж. Знаходиться в локерах. Розбирається на Scrap.',
    damage:100, fireRate:0, ammoCapacity:0, ammoType:null, durability:2.0
  },
  {
    id:'rpg7', name:'RPG-7', category:'Weapon',
    w:2, h:6, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'🚀', description:'Ракетний пускач. Максимальний урон у грі. Одноразовий.',
    damage:500, fireRate:0, ammoCapacity:1, ammoType:null
  },

  {
    id:'handgun_ammo', name:'Handgun Ammo', category:'Ammo',
    w:1, h:1, smola:1, stackable:true, maxStack:50,
    usable:false, combinable:false, upgradeable:false,
    icon:'🟡', description:'Патрони для пістолета. Купується за 500 кредитів.',
    ammoType:'handgun_ammo'
  },
  {
    id:'shotgun_shells', name:'Shotgun Shells', category:'Ammo',
    w:1, h:2, smola:1, stackable:true, maxStack:30,
    usable:false, combinable:false, upgradeable:false,
    icon:'🟠', description:'Патрони для дробовика. Купується за 600 кредитів.',
    ammoType:'shotgun_shells'
  },
  {
    id:'rifle_ammo', name:'Rifle Ammo', category:'Ammo',
    w:1, h:2, smola:2, stackable:true, maxStack:20,
    usable:false, combinable:false, upgradeable:false,
    icon:'⬛', description:'Гвинтівочні патрони. Купується за 900 кредитів.',
    ammoType:'rifle_ammo'
  },
  {
    id:'mg_ammo', name:'Machine Gun Ammo', category:'Ammo',
    w:1, h:1, smola:1, stackable:true, maxStack:120,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔸', description:'Патрони для кулемета. Купується за 800 кредитів.',
    ammoType:'mg_ammo'
  },
  {
    id:'ammo_1255', name:'12.7x55mm Ammo', category:'Ammo',
    w:1, h:1, smola:2, stackable:true, maxStack:10,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔴', description:'Крупнокаліберні патрони. Крафтиться з rare metal та infected blood.',
    ammoType:'ammo_1255'
  },

  {
    id:'med_injector', name:'Med Injector', category:'Consumable',
    w:1, h:1, smola:2, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'💉', description:'Лікувальний ін\'єктор. Купується за 1500 кредитів. Крафтиться.',
    subtype:'healing', healAmount:100
  },
  {
    id:'hemolytic_injector', name:'Hemolytic Injector', category:'Consumable',
    w:1, h:2, smola:2, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'🩸', description:'Гемолітичний ін\'єктор. Крафтиться зі scrap та infected blood.',
    subtype:'healing', healAmount:50
  },
  {
    id:'transfusion_bag', name:'Transfusion Bag', category:'Consumable',
    w:1, h:2, smola:2, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'🫙', description:'Пакет для переливання крові. Знаходиться в локерах.',
    subtype:'healing', healAmount:75
  },
  {
    id:'mixed_gg', name:'Mixed Herb (G+G)', category:'Consumable',
    w:1, h:1, smola:2, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'🌱', description:'Суміш двох зелених трав. Крафтиться.',
    subtype:'healing', healAmount:50
  },
  {
    id:'mixed_ggg', name:'Mixed Herb (G+G+G)', category:'Consumable',
    w:1, h:1, smola:3, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'🌿', description:'Суміш трьох зелених трав. Крафтиться.',
    subtype:'healing', healAmount:100
  },
  {
    id:'stabilizer', name:'Stabilizer', category:'Consumable',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'🎯', description:'Постійно підвищує точність. 4 антикварні монети або крафт.',
    subtype:'healing', healAmount:0
  },
  {
    id:'steroids', name:'Steroids', category:'Consumable',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'💪', description:'Постійно збільшує максимальне здоров\'я. 4 антикварні монети або крафт.',
    subtype:'healing', healAmount:0
  },
  {
    id:'hand_grenade', name:'Hand Grenade', category:'Consumable',
    w:1, h:1, smola:2, stackable:true, maxStack:5,
    usable:true, combinable:false, upgradeable:false,
    icon:'💣', description:'Вибухова граната. Крафтиться зі scrap та gunpowder.',
    subtype:'throwable', throwDamage:500
  },
  {
    id:'stacked_grenade', name:'Stacked Hand Grenade', category:'Consumable',
    w:1, h:2, smola:3, stackable:true, maxStack:3,
    usable:true, combinable:false, upgradeable:false,
    icon:'💥', description:'Подвійна граната. Крафтиться з двох hand grenade.',
    subtype:'throwable', throwDamage:900
  },
  {
    id:'molotov', name:'Molotov Cocktail', category:'Consumable',
    w:1, h:2, smola:2, stackable:true, maxStack:5,
    usable:true, combinable:false, upgradeable:false,
    icon:'🍾', description:'Запальна граната. Крафтиться з empty bottle та infected blood.',
    subtype:'throwable', throwDamage:300
  },
  {
    id:'bottle_of_acid', name:'Bottle of Acid', category:'Consumable',
    w:1, h:2, smola:2, stackable:true, maxStack:5,
    usable:true, combinable:false, upgradeable:false,
    icon:'🧪', description:'Кислотна пляшка. Крафтиться з empty bottle та infected blood.',
    subtype:'throwable', throwDamage:250
  },

  {
    id:'green_herb', name:'Green Herb', category:'Resource',
    w:1, h:1, smola:2, stackable:true, maxStack:5,
    usable:false, combinable:true, upgradeable:false,
    icon:'🌿', description:'Зелена трава. Використовується для крафту Mixed Herb.'
  },
  {
    id:'gunpowder_small', name:'Gunpowder (Small)', category:'Resource',
    w:1, h:1, smola:2, stackable:true, maxStack:10,
    usable:false, combinable:true, upgradeable:false,
    icon:'⚫', description:'Малий порох. Знаходиться в локерах та контейнерах.'
  },
  {
    id:'gunpowder_large', name:'Gunpowder (Large)', category:'Resource',
    w:1, h:1, smola:3, stackable:true, maxStack:10,
    usable:false, combinable:true, upgradeable:false,
    icon:'🔵', description:'Великий порох. Знаходиться в локерах та контейнерах.'
  },
  {
    id:'scrap', name:'Scrap', category:'Resource',
    w:1, h:1, smola:1, stackable:true, maxStack:15,
    usable:false, combinable:true, upgradeable:false,
    icon:'🔩', description:'Металевий брухт. Дропається з ворогів, крафтиться з ножів.'
  },
  {
    id:'infected_blood', name:'Infected Blood', category:'Resource',
    w:1, h:1, smola:2, stackable:true, maxStack:200,
    usable:false, combinable:true, upgradeable:false,
    icon:'🩸', description:'Заражена кров. Збирається з тіл за допомогою Blood Collector.'
  },
  {
    id:'rare_metal', name:'Rare Metal', category:'Resource',
    w:1, h:1, smola:4, stackable:true, maxStack:5,
    usable:false, combinable:true, upgradeable:false,
    icon:'💠', description:'Рідкісний метал. Знаходиться в заблокованих ящиках.'
  },
  {
    id:'empty_bottle', name:'Empty Bottle', category:'Resource',
    w:1, h:1, smola:1, stackable:true, maxStack:10,
    usable:false, combinable:true, upgradeable:false,
    icon:'🍶', description:'Порожня пляшка. Знаходиться в локерах та контейнерах.'
  },
  {
    id:'empty_injector', name:'Empty Injector', category:'Resource',
    w:1, h:1, smola:1, stackable:true, maxStack:10,
    usable:false, combinable:true, upgradeable:false,
    icon:'💊', description:'Порожній ін\'єктор. Знаходиться в локерах.'
  },

  {
    id:'corrosive', name:'Corrosive', category:'Consumable',
    w:1, h:2, smola:2, stackable:true, maxStack:5,
    usable:true, combinable:false, upgradeable:false,
    icon:'🧪', description:'Корозивна рідина. Знаходиться в лабораторіях.',
    subtype:'throwable', throwDamage:200
  },

  {
    id:'animus_orb', name:'Animus Orb', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔮', description:'Знайдено в кейсі в чистому приміщенні.'
  },
  {
    id:'battery', name:'Battery', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔋', description:'Знайдено в підземному паркінгу.'
  },
  {
    id:'blood_collector', name:'Blood Collector', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🧫', description:'Взято з кров\'яної лабораторії у східному крилі.'
  },
  {
    id:'blood_specimen_c', name:'Blood Specimen (Converged)', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🩺', description:'У шафі в кімнаті очікування східного крила.'
  },
  {
    id:'blood_specimen_d', name:'Blood Specimen (Denatured)', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🩺', description:'Всередині кров\'яної лабораторії.'
  },
  {
    id:'lock_pick', name:'Lock Pick', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔑', description:'Знаходиться в локерах та контейнерах.'
  },
  {
    id:'fuse', name:'Fuse', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔌', description:'У шафі кімнати 201.'
  },
  {
    id:'crank_lever', name:'Crank Lever', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔧', description:'На полиці у кімнаті з документами водного об\'єкту.'
  },
  {
    id:'gas_can', name:'Gas Can', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'⛽', description:'На ящику поруч із заправкою.'
  },
  {
    id:'locker_key', name:'Locker Key', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🗝️', description:'З телевізора в кімнаті операцій RPD.'
  },
  {
    id:'antique_coin', name:'Antique Coin', category:'KeyItem',
    w:1, h:1, smola:0, stackable:true, maxStack:30,
    usable:false, combinable:false, upgradeable:false,
    icon:'🪙', description:'Антикварна монета. Використовується у торгових автоматах.'
  },
  {
    id:'antique_coins', name:'Antique Coins', category:'KeyItem',
    w:1, h:1, smola:0, stackable:true, maxStack:99,
    usable:false, combinable:false, upgradeable:false,
    icon:'🪙', description:'Пачка антикварних монет. Велика нагорода.'
  },
  {
    id:'key_items_bag', name:'Key Items', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🗂️', description:'Набір ключових предметів квесту.'
  },
  {
    id:'blood_specimen_poly', name:'Blood Specimen (Polymerized)', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🩺', description:'Полімеризований зразок крові.'
  },
  {
    id:'blood_specimen_rev', name:'Blood Specimen (Reversible)', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🩺', description:'Зворотний зразок крові.'
  },
  {
    id:'artificial_heart', name:'Artificial Heart', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'❤️', description:'Штучне серце. Вилучено з біологічного об\'єкта.'
  },
  {
    id:'artificial_lungs', name:'Artificial Lungs', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🫁', description:'Штучні легені. Вилучено з біологічного об\'єкта.'
  },
  {
    id:'broken_signal', name:'Broken Signal Receiver', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'📡', description:'Зламаний приймач сигналу.'
  },
  {
    id:'bsaa_key', name:'BSAA Container Key', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🗝️', description:'Ключ від контейнера BSAA.'
  },
  {
    id:'cedar_key', name:'Cedarbrook Apartment Key', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🗝️', description:'Ключ від квартири в Cedarbrook.'
  },
  {
    id:'cherub_key', name:'Cherub Key', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🗝️', description:'Ключ у формі херувима.'
  },
  {
    id:'distributor', name:'Distributor', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔧', description:'Механічний розподільник. Потрібен для ремонту.'
  },
  {
    id:'double_helix', name:'Double Helix Model', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🧬', description:'Модель подвійної спіралі ДНК.'
  },
  {
    id:'east_wing_key', name:'East Wing Keycard', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'💳', description:'Картка доступу до східного крила.'
  },
  {
    id:'files', name:'Files', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'📂', description:'Секретні файли дослідження.'
  },
  {
    id:'fire_poker', name:'Fire Poker', category:'KeyItem',
    w:1, h:3, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔱', description:'Кочерга. Використовується для відкриття прихованих проходів.'
  },
  {
    id:'forklift_key', name:'Forklift Key', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🗝️', description:'Ключ від навантажувача на доках.'
  },
  {
    id:'hourglass', name:'Hourglass', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'⏳', description:'Старовинний пісочний годинник. Потрібен для головоломки.'
  },
  {
    id:'id_wristband_1', name:'ID Wristband (Level 1)', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🪪', description:'Браслет доступу рівня 1.'
  },
  {
    id:'id_wristband_2', name:'ID Wristband (Level 2)', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🪪', description:'Браслет доступу рівня 2.'
  },
  {
    id:'id_wristband_3', name:'ID Wristband (Level 3)', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🪪', description:'Браслет доступу рівня 3.'
  },
  {
    id:'joint_plug', name:'Joint Plug', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔩', description:'З\'єднувальна заглушка для трубопроводу.'
  },
  {
    id:'leatherbound_notebook', name:'Leatherbound Notebook', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'📓', description:'Шкіряний блокнот з нотатками дослідника.'
  },
  {
    id:'lighter', name:'Lighter', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔥', description:'Запальничка. Знайдена на барній стійці.'
  },
  {
    id:'magnetic_key', name:'Magnetic Key', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🗝️', description:'Магнітний ключ для спеціальних замків.'
  },
  {
    id:'maries_doll', name:"Marie's Doll", category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🪆', description:'Лялька Марі. Потрібна для відкриття таємної кімнати.'
  },
  {
    id:'mechanic_jack', name:'Mechanic Jack', category:'KeyItem',
    w:2, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔧', description:'Домкрат механіка. Використовується в гаражі.'
  },
  {
    id:'moon_quartz', name:'Moon Quartz', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🌙', description:'Місячний кварц. Вставляється в статую.'
  },
  {
    id:'noblesse_orb', name:'Noblesse Orb', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔮', description:'Куля благородства. Один з трьох орбів.'
  },
  {
    id:'old_key', name:'Old Key', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🗝️', description:'Старий заіржавілий ключ.'
  },
  {
    id:'organ_transport', name:'Organ Transport Box', category:'KeyItem',
    w:2, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'📦', description:'Контейнер для транспортування органів.'
  },
  {
    id:'override_key_11', name:'Override Key (Bioweapon Repository 11)', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔑', description:'Ключ перевизначення для сховища біозброї 11.'
  },
  {
    id:'override_key_dump', name:'Override Key (Dump Control Room)', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔑', description:'Ключ перевизначення для кімнати управління скидом.'
  },
  {
    id:'pencil', name:'Pencil', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'✏️', description:'Олівець. Потрібен для відмикання замка.'
  },
  {
    id:'puzzles', name:'Puzzles', category:'KeyItem',
    w:2, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🧩', description:'Частини головоломки. Складаються для відкриття сейфа.'
  },
  {
    id:'red_jewel', name:'Red Jewel', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'💎', description:'Червоний коштовний камінь. Вставляється в статую.'
  },
  {
    id:'relay', name:'Relay', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'⚡', description:'Електричне реле. Потрібне для відновлення живлення.'
  },
  {
    id:'repair_kit', name:'Repair Kit', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🧰', description:'Набір для ремонту. Використовується в майстерні.'
  },
  {
    id:'rusty_crank', name:'Rusty Crank', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔧', description:'Іржава рукоятка. Потрібна для підіймання воріт.'
  },
  {
    id:'screwdriver', name:'Screwdriver', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🪛', description:'Викрутка. Використовується для відкриття панелей.'
  },
  {
    id:'severed_hand', name:'Severed Hand', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🖐️', description:'Відрубана рука зі сканером відбитків.'
  },
  {
    id:'socket_wrench', name:'Square Socket Wrench', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔩', description:'Квадратний торцевий ключ для шахтних клапанів.'
  },
  {
    id:'star_quartz', name:'Star Quartz', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'⭐', description:'Зірковий кварц. Вставляється в статую.'
  },
  {
    id:'sun_quartz', name:'Sun Quartz', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'☀️', description:'Сонячний кварц. Вставляється в статую.'
  },
  {
    id:'tactical_tracker', name:'Tactical Tracker', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'📍', description:'Тактичний трекер. Використовується для відстеження цілей.'
  },
  {
    id:'unicorn_box', name:'Unicorn Trinket Box', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🦄', description:'Скринька з єдинорогом. Містить цінний предмет.'
  },
  {
    id:'valve_wheel', name:'Valve Handwheel', category:'KeyItem',
    w:2, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'⚙️', description:'Маховик клапана. Використовується для перекриття газу.'
  },
  {
    id:'wire_cutters', name:'Wire Cutters', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'✂️', description:'Кусачки. Використовуються для перерізання ланцюгів.'
  },
  {
    id:'wrench', name:'Wrench', category:'KeyItem',
    w:1, h:2, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🔧', description:'Гайковий ключ. Використовується для технічного обслуговування.'
  },
  {
    id:'hatch_key', name:'Hatch Key', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🗝️', description:'Ключ від люка.'
  },
  {
    id:'helicopter_key', name:'Helicopter Key', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🗝️', description:'Ключ від вертольота на даху.'
  },
  {
    id:'pantry_key', name:'Pantry Key', category:'KeyItem',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:false, combinable:false, upgradeable:false,
    icon:'🗝️', description:'Ключ від комори.'
  },

  {
    id:'body_armor', name:'Body Armor', category:'Equipment',
    w:2, h:2, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'🛡️', description:'Бронежилет. Купується за 8000 кредитів. Постійно підвищує захист.',
    permanent:false, effect:'defense', statChange:30
  },
  {
    id:'hip_pouch', name:'Hip Pouch', category:'Equipment',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'🎒', description:'Розширює інвентар. 3 антикварні монети або знаходиться на мапі.',
    permanent:true, effect:'inventorySize', statChange:6
  },
  {
    id:'case_upgrade', name:'Case Upgrade (8×13)', category:'Equipment',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'💼', description:'Збільшує розмір кейса до 8×13. Купується за 4000 кредитів.',
    permanent:true, effect:'inventorySize', statChange:24
  },
  {
    id:'override_manual', name:'Override Manual', category:'Equipment',
    w:1, h:1, smola:0, stackable:false, maxStack:1,
    usable:true, combinable:false, upgradeable:false,
    icon:'📖', description:'Дозволяє обходити замки. 6 антикварних монет.',
    permanent:true, effect:'special', statChange:0
  },
];

const CRAFTING_RECIPES = [
  { id:'r_handgun_ammo_gp',      resultItemId:'handgun_ammo',       resultQty:10, ingredients:[{ itemId:'scrap', qty:1 }, { itemId:'gunpowder_small',  qty:1  }] },
  { id:'r_handgun_ammo_blood',   resultItemId:'handgun_ammo',       resultQty:8,  ingredients:[{ itemId:'scrap', qty:1 }, { itemId:'infected_blood',   qty:40 }] },
  { id:'r_shotgun_shells',       resultItemId:'shotgun_shells',     resultQty:5,  ingredients:[{ itemId:'scrap', qty:1 }, { itemId:'gunpowder_large',  qty:1  }] },
  { id:'r_rifle_ammo',           resultItemId:'rifle_ammo',         resultQty:5,  ingredients:[{ itemId:'scrap', qty:1 }, { itemId:'gunpowder_large',  qty:1  }] },
  { id:'r_mg_ammo',              resultItemId:'mg_ammo',            resultQty:30, ingredients:[{ itemId:'scrap', qty:1 }, { itemId:'gunpowder_large',  qty:1  }] },
  { id:'r_ammo_1255',            resultItemId:'ammo_1255',          resultQty:5,  ingredients:[{ itemId:'rare_metal', qty:1 }, { itemId:'infected_blood', qty:80 }] },
  { id:'r_hand_grenade',         resultItemId:'hand_grenade',       resultQty:1,  ingredients:[{ itemId:'scrap', qty:1 }, { itemId:'gunpowder_large',  qty:2  }] },
  { id:'r_stacked_grenade',      resultItemId:'stacked_grenade',    resultQty:1,  ingredients:[{ itemId:'hand_grenade', qty:2 }] },
  { id:'r_molotov',              resultItemId:'molotov',            resultQty:1,  ingredients:[{ itemId:'empty_bottle', qty:1 }, { itemId:'infected_blood', qty:60  }] },
  { id:'r_bottle_of_acid',       resultItemId:'bottle_of_acid',     resultQty:1,  ingredients:[{ itemId:'empty_bottle', qty:1 }, { itemId:'infected_blood', qty:80  }] },
  { id:'r_mixed_gg',             resultItemId:'mixed_gg',           resultQty:1,  ingredients:[{ itemId:'green_herb', qty:2 }] },
  { id:'r_mixed_ggg',            resultItemId:'mixed_ggg',          resultQty:1,  ingredients:[{ itemId:'green_herb', qty:3 }] },
  { id:'r_med_injector',         resultItemId:'med_injector',       resultQty:1,  ingredients:[{ itemId:'mixed_gg', qty:1 }, { itemId:'infected_blood', qty:40 }] },
  { id:'r_hemolytic',            resultItemId:'hemolytic_injector', resultQty:1,  ingredients:[{ itemId:'scrap', qty:1 }, { itemId:'infected_blood', qty:60  }] },
  { id:'r_stabilizer',           resultItemId:'stabilizer',         resultQty:1,  ingredients:[{ itemId:'empty_injector', qty:1 }, { itemId:'infected_blood', qty:120 }] },
  { id:'r_steroids',             resultItemId:'steroids',           resultQty:1,  ingredients:[{ itemId:'empty_injector', qty:1 }, { itemId:'infected_blood', qty:120 }] },
  { id:'r_makeshift_knife',      resultItemId:'makeshift_knife',    resultQty:1,  ingredients:[{ itemId:'scrap', qty:2 }] },
  { id:'r_rip_knife',            resultItemId:'rip_knife',          resultQty:1,  ingredients:[{ itemId:'scrap', qty:1 }, { itemId:'infected_blood', qty:110 }] },
  { id:'r_scrap_from_makeshift', resultItemId:'scrap',              resultQty:3,  ingredients:[{ itemId:'makeshift_knife', qty:1 }] },
  { id:'r_scrap_from_knife',     resultItemId:'scrap',              resultQty:3,  ingredients:[{ itemId:'hunting_knife',   qty:1 }] },
];

const UPGRADE_OPTIONS = [
  { id:'up_alligator_dmg',  weaponId:'alligator_snapper', level:1, cost:3, statKey:'damage',       statChange:50,  description:'Покращена ствольна коробка' },
  { id:'up_alligator_cap',  weaponId:'alligator_snapper', level:1, cost:2, statKey:'ammoCapacity', statChange:5,   description:'Розширений магазин' },
  { id:'up_ssm232_dmg',     weaponId:'ss_m232',           level:1, cost:3, statKey:'damage',       statChange:40,  description:'Посилений затвор' },
  { id:'up_ssm232_fr',      weaponId:'ss_m232',           level:1, cost:2, statKey:'fireRate',     statChange:0.5, description:'Полегшений спусковий гачок' },
  { id:'up_sil9_dmg',       weaponId:'silencer9',         level:1, cost:4, statKey:'damage',       statChange:60,  description:'Підсилений глушник' },
  { id:'up_requiem_dmg',    weaponId:'requiem_rev',       level:1, cost:5, statKey:'damage',       statChange:100, description:'Нарізний ствол' },
  { id:'up_msbg_dmg',       weaponId:'msbg500',           level:1, cost:4, statKey:'damage',       statChange:120, description:'Посилений заряд патрона' },
  { id:'up_msbg_cap',       weaponId:'msbg500',           level:1, cost:3, statKey:'ammoCapacity', statChange:2,   description:'Подовжений магазин' },
  { id:'up_tac990_dmg',     weaponId:'tac990',            level:1, cost:4, statKey:'damage',       statChange:80,  description:'Посилена пружина затвору' },
  { id:'up_classic_dmg',    weaponId:'classic70',         level:1, cost:5, statKey:'damage',       statChange:300, description:'Нова оптика + сошки' },
  { id:'up_marksman_dmg',   weaponId:'marksman1a',        level:1, cost:5, statKey:'damage',       statChange:200, description:'Тактична оптика' },
  { id:'up_marksman_fr',    weaponId:'marksman1a',        level:1, cost:3, statKey:'fireRate',     statChange:0.5, description:'Полегшений затвор' },
  { id:'up_stiri_fr',       weaponId:'stiri_revo3',       level:1, cost:3, statKey:'fireRate',     statChange:0.5, description:'Покращений механізм подачі' },
  { id:'up_stiri_cap',      weaponId:'stiri_revo3',       level:1, cost:2, statKey:'ammoCapacity', statChange:10,  description:'Розширений магазин' },
  { id:'up_hatchet_dmg',    weaponId:'hatchet',           level:1, cost:2, statKey:'damage',       statChange:80,  description:'Загострене лезо' },
];
