const products = [
  {
  id: 298,
  price: 1700,
  isTop: false,
  isNew: true,
  sku: "99429",
  size: "XS S M L XL",
  category: "Sweaters",
  image: "/Sweaters/Spiderweb Sweater/1.avif",
  images: [
    "/Sweaters/Spiderweb Sweater/2.avif",
    "/Sweaters/Spiderweb Sweater/3.avif",
    "/Sweaters/Spiderweb Sweater/4.avif",
    "/Sweaters/Spiderweb Sweater/5.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Sweaters",
      name: "Spiderweb Sweater",
      description: [
        "Deep chocolate — a color of confidence and calm 🤎",
        "A look that appears effortlessly luxurious. The minimalist silhouette, soft lines, and delicate lace create a feminine, refined mood — perfect for city outings or special occasions.",
        "Lace accents add lightness, while the waist tie highlights the figure, forming elegant proportions.",
        "Wear as a set or style separately — a versatile base with character.",
        "Fabric: Viscose knit 'spiderweb' texture."
      ],
      colors: ["chocolate"]
    },
    FR: {
      category: "Pulls",
      name: "Pull toile d’araignée",
      description: [
        "Chocolat profond — une teinte de confiance et de sérénité 🤎",
        "Un look qui respire l’élégance sans effort. La silhouette épurée, les lignes douces et la dentelle délicate créent une allure féminine et raffinée — idéale pour la ville comme pour les occasions spéciales.",
        "Les détails en dentelle ajoutent de la légèreté, tandis que la ceinture souligne la taille et crée des proportions élégantes.",
        "À porter en ensemble ou séparément — une base polyvalente avec du caractère.",
        "Tissu : tricot en viscose effet ‘toile d’araignée’."
      ],
      colors: ["chocolat"]
    },
    UA: {
      category: "Светри",
      name: "Светр павутинка",
      description: [
        "Глибокий шоколад — колір впевненості та спокою 🤎",
        "Образ, який виглядає дорого без зайвого. Лаконічний силует, м’які лінії та делікатне мереживо створюють жіночний, витончений настрій — ідеальний як для міських зустрічей, так і для особливих подій.",
        "Мереживні акценти додають легкості, а пояс підкреслює талію, формуючи витончені пропорції.",
        "Носіть комплектом або стилізуйте окремо — це універсальна база з характером.",
        "Тканина: віскозний трикотаж «павутинка»."
      ],
      colors: ["шоколад"]
    },
    RU: {
      category: "Свитеры",
      name: "Свитер паутинка",
      description: [
        "Глубокий шоколад — цвет уверенности и спокойствия 🤎",
        "Образ, который выглядит дорого без лишнего. Лаконичный силуэт, мягкие линии и деликатное кружево создают женственное, утончённое настроение — идеально для городских встреч или особых случаев.",
        "Кружевные акценты добавляют лёгкости, а пояс подчёркивает талию, формируя изящные пропорции.",
        "Носите комплектом или отдельно — это универсальная база с характером.",
        "Ткань: вискозный трикотаж «паутинка»."
      ],
      colors: ["шоколад"]
    }
  }
},

  {
  id: 297,
  price: 3000,
  isTop: false,
  isNew: true,
  sku: "99428",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Knitted Lace Dress/1.avif",
  images: [
    "/Dress/Knitted Lace Dress/2.avif",
    "/Dress/Knitted Lace Dress/3.avif",
    "/Dress/Knitted Lace Dress/4.avif",
    "/Dress/Knitted Lace Dress/5.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Knitted Lace Dress",
      description: [
        "An elegant black midi dress that combines comfort and sophistication. The clean silhouette drapes gently over the body, while velvety lace on both sides adds depth and femininity.",
        "A V-shaped neckline with delicate lace trim highlights the décolleté, and the lace finish along the hem creates a refined accent. Thanks to the adjustable drawstring waist, the fit can be customized for a more defined or relaxed silhouette.",
        "(Belt not included)",
        "Perfect for evening outings, special occasions, or stylish everyday looks during the colder season.",
        "Fabric: Knit fabric with velvety lace detailing on both sides."
      ],
      colors: ["black"]
    },
    FR: {
      category: "Robes",
      name: "Robe en maille avec dentelle",
      description: [
        "Une élégante robe midi noire alliant confort et raffinement. La silhouette fluide épouse délicatement le corps, tandis que la dentelle effet velours des deux côtés ajoute profondeur et féminité.",
        "L’encolure en V ornée de dentelle souligne le décolleté, et la finition en dentelle sur l’ourlet apporte une touche sophistiquée. Grâce au cordon de serrage à la taille, la coupe peut être ajustée pour un style plus cintré ou plus fluide.",
        "(Ceinture non incluse)",
        "Idéale pour les sorties du soir, les occasions spéciales ou les looks élégants du quotidien pendant la saison froide.",
        "Tissu : maille avec dentelle effet velours des deux côtés."
      ],
      colors: ["noir"]
    },
    UA: {
      category: "Сукні",
      name: "Трикотажна сукня з мереживом",
      description: [
        "Елегантна чорна сукня міді — поєднання комфорту та вишуканості. Лаконічний силует м’яко спадає по фігурі, а оксамитове мереживо з обох сторін додає образу глибини та жіночності.",
        "V-подібний виріз із делікатним мереживним оздобленням підкреслює зону декольте, а мереживна обробка по низу створює витончений акцент. Завдяки поясу-кулісці на талії можна регулювати посадку, формуючи більш приталений або вільний силует.",
        "(пояс не йде у комплекті)",
        "Ідеальний варіант для вечірніх виходів, особливих подій або стильних повсякденних образів у холодний сезон.",
        "Тканина: трикотажне полотно з оксамитовим мереживом з обох сторін."
      ],
      colors: ["чорний"]
    },
    RU: {
      category: "Платья",
      name: "Трикотажное платье с кружевом",
      description: [
        "Элегантное черное платье миди — сочетание комфорта и утонченности. Лаконичный силуэт мягко ложится по фигуре, а бархатное кружево с обеих сторон добавляет глубину и женственность.",
        "V-образный вырез с деликатной кружевной отделкой подчеркивает зону декольте, а кружевная отделка по низу создаёт изысканный акцент. Благодаря кулиске на талии можно регулировать посадку, создавая более приталенный или свободный силуэт.",
        "(пояс не входит в комплект)",
        "Идеальный вариант для вечерних выходов, особых событий или стильных повседневных образов в холодный сезон.",
        "Ткань: трикотажное полотно с бархатным кружевом с обеих сторон."
      ],
      colors: ["черный"]
    }
  }
},

  {
  id: 296,
  price: 3200,
  isTop: false,
  isNew: true,
  sku: "99427",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Knitted Lace Set/1.avif",
  images: [
    "/Costumes/Knitted Lace Set/2.avif",
    "/Costumes/Knitted Lace Set/3.avif",
    "/Costumes/Knitted Lace Set/4.avif",
    "/Costumes/Knitted Lace Set/5.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Knitted Lace Set",
      description: [
        "An elegant black set that blends comfort with femininity. The ensemble consists of a relaxed jumper and a midi skirt, forming a refined silhouette with delicate accents.",
        "Velvety lace trim decorates the sleeves, hem of the jumper, and skirt, adding depth and sophistication. The soft knit fabric drapes beautifully over the body, offering freedom of movement and comfort throughout the day.",
        "A perfect choice for events, evening outings, or stylish everyday looks during the colder season.",
        "Fabric: Knit fabric with velvety lace detailing on both sides.",
        "(Belt not included)"
      ],
      colors: ["black"]
    },
    FR: {
      category: "Costumes",
      name: "Ensemble en maille avec dentelle",
      description: [
        "Un ensemble noir raffiné qui allie confort et féminité. Il se compose d’un pull ample et d’une jupe midi, créant une silhouette élégante aux accents délicats.",
        "Une dentelle à effet velours orne les manches, le bas du pull et la jupe, ajoutant de la profondeur et de la sophistication. Le tricot doux épouse le corps sans le contraindre, offrant confort et liberté de mouvement toute la journée.",
        "Un choix parfait pour les événements, les soirées ou les looks quotidiens élégants pendant la saison froide.",
        "Tissu : maille avec dentelle effet velours des deux côtés.",
        "(Ceinture non incluse)"
      ],
      colors: ["noir"]
    },
    UA: {
      category: "Костюми",
      name: "Трикотажний комплект з мереживом",
      description: [
        "Вишуканий чорний костюм, що поєднує комфорт і жіночність. Комплект складається з вільного джемпера та спідниці міді, створюючи елегантний силует із делікатними акцентами.",
        "Мереживне оздоблення з оксамитовим ефектом прикрашає рукави, низ джемпера та спідниці, додаючи образу глибини та витонченості. Завдяки м’якому трикотажу костюм красиво лягає по фігурі, не сковує рухів і дарує відчуття комфорту протягом усього дня.",
        "Ідеальний вибір для подій, вечірніх виходів або стильних повсякденних образів у холодний сезон.",
        "Тканина: трикотажне полотно з оксамитовим мереживом з обох сторін.",
        "(пояс не йде у комплекті)"
      ],
      colors: ["чорний"]
    },
    RU: {
      category: "Костюмы",
      name: "Трикотажный комплект с кружевом",
      description: [
        "Изысканный черный костюм, сочетающий комфорт и женственность. Комплект состоит из свободного джемпера и юбки миди, создавая элегантный силуэт с деликатными акцентами.",
        "Кружевная отделка с бархатным эффектом украшает рукава, низ джемпера и юбки, добавляя глубину и утонченность. Благодаря мягкому трикотажу костюм красиво садится по фигуре, не стесняет движений и обеспечивает комфорт на протяжении всего дня.",
        "Идеальный выбор для мероприятий, вечерних выходов или стильных повседневных образов в холодный сезон.",
        "Ткань: трикотажное полотно с бархатным кружевом с обеих сторон.",
        "(пояс не входит в комплект)"
      ],
      colors: ["черный"]
    }
  }
},

  {
  id: 294,
  price: 3000,
  isTop: true,
  isNew: true,
  sku: "99425",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Hooded Linen Bomber/1.avif",
  images: [
    "/Jackets/Hooded Linen Bomber/2.avif",
    "/Jackets/Hooded Linen Bomber/3.avif",
    "/Jackets/Hooded Linen Bomber/4.avif",
    "/Jackets/Hooded Linen Bomber/5.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "Hooded Linen Bomber",
      description: [
        "A lightweight linen bomber with a subtle distressed effect — the perfect addition to your spring-summer wardrobe.",
        "The natural linen texture gives the piece a relaxed yet elegant look, ideal for layering on breezy days.",
        "Fabric: 100% natural linen",
        "Details:",
        "• Bomber with lining and hood",
        "• Ribbed cuffs and waistband"
      ],
      colors: ["milk white"]
    },
    FR: {
      category: "Vestes",
      name: "Blouson en lin à capuche",
      description: [
        "Blouson léger en lin avec un léger effet usé — un ajout parfait à votre garde-robe printemps-été.",
        "La texture naturelle du lin apporte une allure décontractée et élégante, idéale pour les journées fraîches.",
        "Tissu : 100 % lin naturel",
        "Détails :",
        "• Blouson avec doublure et capuche",
        "• Poignets et ceinture côtelés"
      ],
      colors: ["blanc lait"]
    },
    UA: {
      category: "Жакети",
      name: "Бомбер із капюшоном",
      description: [
        "Легкий бомбер із рваним ефектом на весняний-літній сезон. Стане цікавим доповненням до твоїх образів.",
        "Тканина: 100% натуральний льон",
        "Деталі:",
        "• бомбер має підклад та капюшон",
        "• манжети на рукавах та поясі"
      ],
      colors: ["молочний"]
    },
    RU: {
      category: "Жакеты",
      name: "Бомбер с капюшоном",
      description: [
        "Легкий бомбер с эффектом потертости для весенне-летнего сезона. Станет интересным дополнением к твоим образам.",
        "Ткань: 100% натуральный лён",
        "Детали:",
        "• бомбер с подкладкой и капюшоном",
        "• манжеты на рукавах и поясе"
      ],
      colors: ["молочный"]
    }
  }
},

  {
  id: 295,
  price: 2800,
  isTop: true,
  isNew: true,
  sku: "99424",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Distressed Bombe/1.avif",
  images: [
    "/Jackets/Distressed Bombe/2.avif",
    "/Jackets/Distressed Bombe/3.avif",
    "/Jackets/Distressed Bombe/4.avif",
    "/Jackets/Distressed Bombe/5.avif",

  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "Distressed Linen Bomber",
      description: [
        "A lightweight linen bomber with a distressed effect — a perfect piece for spring and summer looks.",
        "The breathable fabric and relaxed fit make it an ideal choice for layering and everyday comfort.",
        "Fabric: 100% natural linen",
        "Details:",
        "• Unlined bomber",
        "• Ribbed cuffs and waistband"
      ],
      colors: ["black"]
    },
    FR: {
      category: "Vestes",
      name: "Blouson effet usé",
      description: [
        "Blouson léger en lin avec effet usé — un complément original pour la saison printemps-été.",
        "Le tissu respirant et la coupe décontractée en font un choix idéal pour les superpositions et le confort quotidien.",
        "Tissu : 100 % lin naturel",
        "Détails :",
        "• Blouson sans doublure",
        "• Poignets et ceinture côtelés"
      ],
      colors: ["noir"]
    },
    UA: {
      category: "Жакети",
      name: "Бомбер із рваним ефектом",
      description: [
        "Легкий бомбер із рваним ефектом на весняний-літній сезон. Стане цікавим доповненням до твоїх образів.",
        "Тканина: 100% натуральний льон",
        "Деталі:",
        "• бомбер без підкладки",
        "• манжети на рукавах та поясі"
      ],
      colors: ["чорний"]
    },
    RU: {
      category: "Жакеты",
      name: "Бомбер с эффектом потертости",
      description: [
        "Легкий бомбер с эффектом потертости для весенне-летнего сезона. Станет интересным дополнением к твоим образам.",
        "Ткань: 100% натуральный лён",
        "Детали:",
        "• бомбер без подкладки",
        "• манжеты на рукавах и поясе"
      ],
      colors: ["черный"]
    }
  }
},

    {
    id: 100,
    price: 2000,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1700,
    sku: "98820",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Batiste Shirt/1.avif",
    images: [
      "/Shirts/Batiste Shirt/8.avif",
      {
        type: "video",
        src: "/Shirts/Batiste Shirt/IMG_7771.mp4",
        poster: "/Shirts/Batiste Shirt/7.avif"
      },

      "/Shirts/Batiste Shirt/2.avif",
      "/Shirts/Batiste Shirt/3.avif",
      "/Shirts/Batiste Shirt/4.avif",
      "/Shirts/Batiste Shirt/5.avif",
      "/Shirts/Batiste Shirt/6.JPG",
      "/Shirts/Batiste Shirt/7.avif",
      "/Shirts/Batiste Shirt/8.avif",
      "/Shirts/Batiste Shirt/9.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Batiste Shirt With lace",
        description: "Shirt made of natural fabric, decorated with lace. Features puff sleeves.\nFabric: natural batiste.",
        colors: ["white", "light blue"]
      },
      FR: {
        category: "Chemises",
        name: "Chemisier en batiste orné de dentelle",
        description: "Chemise en tissu naturel ornée de dentelle. Manches bouffantes.\nTissu : batiste naturel.",
        colors: ["blanc", "bleu clair"]
      },
      UA: {
        category: "Сорочки",
        name: "Батистова сорочка з мереживом",
        description: "Сорочка із натуральної тканини, яка оздоблена мереживом. Має рукава ліхтарики.\nТканина: натуральна тканина батист.",
        colors: ["білий", "блакитний"]
      },
      RU: {
        category: "Рубашки",
        name: "Батистовая блузка с кружевом",
        description: "Рубашка из натуральной ткани, украшенная кружевом. Имеет рукава-фонарики.\nТкань: натуральная ткань батист.",
        colors: ["белый", "голубой"]
      }
    }
  }, 


{
  id: 292,
  price: 2100,
  isTop: false,
  isNew: false,
  sku: "99423",
  size: "XS S M L XL",
  category: "Tops",
  image: "/Top/Denim Vest/1.avif",
  images: [
    "/Top/Denim Vest/2.avif",
    "/Top/Denim Vest/3.avif",
    "/Top/Denim Vest/4.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Tops",
      name: "Denim Vest",
      description: [
        "Fitted vest made from dense denim — a statement piece for your wardrobe. The V-neckline visually elongates the silhouette, while clear vertical lines and contrasting stitching create a neat fit.",
        "Metal buttons add structure and make the model versatile — easy to pair with classic trousers, denim, or skirts.",
        "Can be worn alone or as part of a suit.",
        "Fabric: dense denim cotton",
        "Details:",
        "• Fitted silhouette",
        "• V-neckline",
        "• Decorative contrast stitching"
      ],
      colors: ["blue"]
    },
    FR: {
      category: "Tops",
      name: "Gilet en denim",
      description: [
        "Gilet ajusté en denim dense — pièce accent pour votre garde-robe. L'encolure en V allonge visuellement la silhouette, tandis que les lignes verticales nettes et les surpiqûres contrastantes assurent un ajustement soigné.",
        "Les boutons métalliques ajoutent de la structure et rendent le modèle polyvalent — facile à associer avec des pantalons classiques, du denim ou des jupes.",
        "Peut se porter seul ou comme partie d'un ensemble.",
        "Tissu : denim coton dense",
        "Détails :",
        "• Silhouette ajustée",
        "• Encolure en V",
        "• Surpiqûres contrastantes décoratives"
      ],
      colors: ["bleu"]
    },
    UA: {
      category: "Топи",
      name: "Джинс жилет",
      description: [
        "Приталений жилет із щільного деніму — акцентна річ у гардеробі. V-подібний виріз візуально подовжує силует, а чіткі вертикальні лінії та контрастна строчка формують акуратну посадку по фігурі.",
        "Металеві ґудзики додають структурності та роблять модель універсальною — його легко поєднувати як із класичними брюками, так і з денімом або спідницями.",
        "Можна носити самостійно або як частину костюму.",
        "Тканина: щільний джинс-котон",
        "Деталі:",
        "• приталений силует",
        "• V-виріз",
        "• декоративна контрастна строчка"
      ],
      colors: ["синій"]
    },
    RU: {
      category: "Топы",
      name: "Джинсовый жилет",
      description: [
        "Приталенный жилет из плотного денима — акцентная вещь в гардеробе. V-образный вырез визуально удлиняет силуэт, а четкие вертикальные линии и контрастная строчка создают аккуратную посадку по фигуре.",
        "Металлические пуговицы добавляют структуру и делают модель универсальной — легко сочетать с классическими брюками, джинсом или юбками.",
        "Можно носить самостоятельно или как часть костюма.",
        "Ткань: плотный джинс-коттон",
        "Детали:",
        "• приталенный силуэт",
        "• V-образный вырез",
        "• декоративная контрастная строчка"
      ],
      colors: ["синий"]
    }
  }
},


{
  id: 291,
  price: 3650,
  isTop: false,
  isNew: false,
  sku: "99422",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Denim Vest Set/1.avif",
  images: [
    "/Costumes/Denim Vest Set/2.avif",
    "/Costumes/Denim Vest Set/3.avif",
    "/Costumes/Denim Vest Set/4.avif",
    "/Costumes/Denim Vest Set/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Suits",
      name: "Denim Set with Vest",
      description: [
        "Structured denim in a modern interpretation. The suit combines a feminine silhouette with a subtle edge: a fitted vest with V-neckline and mini skirt with precise fit create a cohesive, striking look.",
        "Contrasting light stitching accentuates the lines, metallic buttons add character, and the dense denim holds its shape beautifully. Wear together for a total look or mix with basic shirts, tees, or knitwear.",
        "Perfect for urban outfits, meetings, and events when you want to look stylish effortlessly.",
        "Fabric: dense denim cotton",
        "Details:",
        "• Contrasting decorative stitching",
        "• Functional pockets"
      ],
      colors: ["blue"]
    },
    FR: {
      category: "Costumes",
      name: "Ensemble denim avec gilet",
      description: [
        "Denim structuré dans une interprétation moderne. La tenue combine silhouette féminine et subtil caractère : gilet ajusté avec encolure en V et mini-jupe bien ajustée créent un look cohérent et expressif.",
        "Les surpiqûres contrastantes soulignent les lignes, les boutons métalliques ajoutent du caractère, et le denim dense garde parfaitement sa forme. Portez ensemble pour un total look ou combinez avec des chemises basiques, t-shirts ou tricots.",
        "Parfait pour les looks urbains, les réunions et événements, quand on veut être stylé sans effort.",
        "Tissu : denim coton dense",
        "Détails :",
        "• Surpiqûres décoratives contrastantes",
        "• Poches fonctionnelles"
      ],
      colors: ["bleu"]
    },
    UA: {
      category: "Костюми",
      name: "Джинсовий комплект із жилетом",
      description: [
        "Структурований денім у сучасному прочитанні. Костюм поєднує жіночність силуету та легку зухвалість фактури: приталений жилет із V-подібним вирізом та міні-спідниця з чіткою посадкою створюють цілісний, виразний образ.",
        "Контрастна світла строчка підкреслює лінії крою, металеві ґудзики додають характеру, а щільний денім тримає форму та красиво моделює фігуру. Носіть разом для ефектного total look або комбінуйте окремо з базовими сорочками, футболками чи трикотажем.",
        "Ідеальний варіант для міських образів, зустрічей і подій, коли хочеться виглядати стильно без зайвої складності.",
        "Тканина: щільний джинс-котон",
        "Деталі:",
        "• контрастна декоративна строчка",
        "• функціональні кишені"
      ],
      colors: ["синій"]
    },
    RU: {
      category: "Костюмы",
      name: "Джинсовый комплект с жилетом",
      description: [
        "Структурированный деним в современном прочтении. Костюм сочетает женственность силуэта и легкую дерзость фактуры: приталенный жилет с V-образным вырезом и мини-юбка с четкой посадкой создают цельный, выразительный образ.",
        "Контрастная светлая строчка подчеркивает линии кроя, металлические пуговицы добавляют характер, а плотный деним держит форму и красиво моделирует фигуру. Носите вместе для эффектного total look или комбинируйте отдельно с базовыми рубашками, футболками или трикотажем.",
        "Идеальный вариант для городских образов, встреч и мероприятий, когда хочется выглядеть стильно без лишней сложности.",
        "Ткань: плотный джинс-коттон",
        "Детали:",
        "• контрастная декоративная строчка",
        "• функциональные карманы"
      ],
      colors: ["синий"]
    }
  }
},


{
  id: 290,
  price: 1550,
  isTop: false,
  isNew: false,
  sku: "99421",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Denim Mini/1.avif",
  images: [
    "/Skirts/Denim Mini/2.avif",
    "/Skirts/Denim Mini/3.avif",
    "/Skirts/Denim Mini/4.avif",
    "/Skirts/Denim Mini/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Denim Mini Skirt",
      description: [
        "Mini skirt with a comfortable high waist and clean lines. Accentuates the waist and visually elongates the legs. Contrasting stitching adds structure and character.",
        "Pair with sweatshirts, shirts, or the matching jacket — a versatile base for any season.",
        "Fabric: dense denim cotton.",
        "Details:",
        "• High waist",
        "• Straight silhouette",
        "• Comfortable mini length"
      ],
      colors: ["blue"]
    },
    FR: {
      category: "Jupes",
      name: "Mini-jupe en jean",
      description: [
        "Mini-jupe avec une taille haute confortable et des lignes épurées. Accentue la taille et allonge visuellement les jambes. Les coutures contrastantes ajoutent structure et caractère.",
        "À porter avec des sweatshirts, des chemises ou la veste assortie — une base polyvalente pour toutes les saisons.",
        "Tissu : denim coton dense.",
        "Détails :",
        "• Taille haute",
        "• Silhouette droite",
        "• Longueur mini confortable"
      ],
      colors: ["bleu"]
    },
    UA: {
      category: "Спідниці",
      name: "Джинс спідниця міні",
      description: [
        "Міні зі зручною високою посадкою та чистими лініями. Підкреслює талію та візуально подовжує ноги. Контрастна строчка додає структури й характеру.",
        "Носіть зі світшотами, сорочками або жакетом із комплекту — універсальна база для будь-якого сезону.",
        "Тканина: щільний джинс-котон.",
        "Деталі:",
        "• високий пояс",
        "• прямий силует",
        "• комфортна довжина міні"
      ],
      colors: ["синій"]
    },
    RU: {
      category: "Юбки",
      name: "Джинсовая мини-юбка",
      description: [
        "Мини с удобной высокой посадкой и чистыми линиями. Подчеркивает талию и визуально удлиняет ноги. Контрастная строчка добавляет структуру и характер.",
        "Носите со свитшотами, рубашками или жакетом из комплекта — универсальная база для любого сезона.",
        "Ткань: плотный джинс-коттон.",
        "Детали:",
        "• высокая талия",
        "• прямой силуэт",
        "• комфортная длина мини"
      ],
      colors: ["синий"]
    }
  }
},


{
  id: 289,
  price: 2950,
  isTop: false,
  isNew: false,
  sku: "99420",
  size: "XS S M L XL",
  category: "Outerwear",
  image: "/Outerwear/Denim Jacket/1.avif",
  images: [
    "/Outerwear/Denim Jacket/2.avif",
    "/Outerwear/Denim Jacket/3.avif",
    "/Outerwear/Denim Jacket/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Outerwear",
      name: "Denim Jacket",
      description: [
        "A minimalist denim jacket with a light structure — a perfect balance between classic and casual. The straight silhouette, metal fittings, and distinct seams create a timeless, slightly retro vibe.",
        "Pairs perfectly with the matching skirt, as well as with basic trousers or dresses.",
        "Fabric: dense denim cotton.",
        "Details:",
        "• Patch pockets",
        "• Structured and shape-retaining",
        "• Straight cut"
      ],
      colors: ["blue"]
    },
    FR: {
      category: "Manteaux",
      name: "Veste en jean",
      description: [
        "Veste en jean minimaliste à la structure légère — un équilibre parfait entre classique et casual. La silhouette droite, la quincaillerie métallique et les coutures marquées créent une allure intemporelle avec une touche rétro.",
        "Se marie parfaitement avec la jupe assortie ainsi qu’avec un pantalon ou une robe basique.",
        "Tissu : denim coton dense.",
        "Détails :",
        "• Poches plaquées",
        "• Tissu structuré qui garde sa forme",
        "• Coupe droite"
      ],
      colors: ["bleu"]
    },
    UA: {
      category: "Верхній одяг",
      name: "Джинсова куртка",
      description: [
        "Лаконічний джинсовий жакет із легкою структурою — баланс між класикою та casual. Прямий силует, металева фурнітура та виразні шви створюють актуальний, трохи ретро настрій.",
        "Ідеально поєднується зі спідницею з комплекту, а також із базовими брюками або сукнями.",
        "Тканина: щільний джинс-котон.",
        "Деталі:",
        "• накладні кишені",
        "• щільний, тримає форму",
        "• прямий крій"
      ],
      colors: ["синій"]
    },
    RU: {
      category: "Верхняя одежда",
      name: "Джинсовая куртка",
      description: [
        "Лаконичная джинсовая куртка с лёгкой структурой — баланс между классикой и casual. Прямой силуэт, металлическая фурнитура и выразительные швы создают актуальное, немного ретро настроение.",
        "Идеально сочетается с юбкой из комплекта, а также с базовыми брюками или платьями.",
        "Ткань: плотный джинс-коттон.",
        "Детали:",
        "• накладные карманы",
        "• плотная ткань, держит форму",
        "• прямой крой"
      ],
      colors: ["синий"]
    }
  }
},

  {
  id: 288,
  price: 4500,
  isTop: false,
  isNew: false,
  sku: "99419",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Denim Suit with Jacket/1.avif",
  images: [
    "/Costumes/Denim Suit with Jacket/2.avif",
    "/Costumes/Denim Suit with Jacket/3.avif",
    "/Costumes/Denim Suit with Jacket/4.avif",
    "/Costumes/Denim Suit with Jacket/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Denim Suit with Jacket",
      description: [
        "Stylish denim reimagined for today. The suit combines a clean cut, contrasting decorative seams, and a perfect fit that highlights the silhouette. It easily adapts to different moods: with boots for a bolder look, or with loafers or sneakers for a relaxed city style.",
        "The set can be worn together or separately, allowing dozens of combinations for everyday and evening outfits.",
        "Fabric: dense denim cotton.",
        "Details:",
        "• Contrasting decorative seams",
        "• Precise finishing and tailored fit"
      ],
      colors: ["blue"]
    },
    FR: {
      category: "Costumes",
      name: "Ensemble en jean avec veste",
      description: [
        "Le denim revisité dans une version moderne. L’ensemble allie une coupe épurée, des coutures contrastantes et une coupe parfaite qui met la silhouette en valeur. Il s’adapte facilement aux différentes ambiances : avec des bottes pour un look audacieux ou avec des mocassins ou baskets pour un style décontracté urbain.",
        "L’ensemble peut être porté ensemble ou séparément, offrant des dizaines de combinaisons pour des tenues de jour ou de soirée.",
        "Tissu : denim coton dense.",
        "Détails :",
        "• Coutures décoratives contrastantes",
        "• Finition soignée et coupe étudiée"
      ],
      colors: ["bleu"]
    },
    UA: {
      category: "Костюми",
      name: "Джинсовий комплект із жакетом",
      description: [
        "Стильний денім у сучасному прочитанні. Костюм поєднує лаконічний крій, акцентні контрастні шви та ідеальну посадку, що підкреслює силует. Легко адаптується під різні настрої: з чоботами — більш сміливо, з лоферами або кедами — у relaxed-місті стилі.",
        "Комплект можна носити разом або комбінувати окремо, створюючи десятки варіацій для повсякденних і вечірніх образів.",
        "Тканина: щільний джинс-котон.",
        "Деталі:",
        "• контрастні декоративні шви",
        "• акуратна обробка та продумана посадка по фігурі"
      ],
      colors: ["синій"]
    },
    RU: {
      category: "Костюмы",
      name: "Джинсовый комплект с жакетом",
      description: [
        "Стильный деним в современном прочтении. Костюм сочетает лаконичный крой, контрастные декоративные швы и идеальную посадку, подчёркивающую силуэт. Легко адаптируется под разные настроения: с сапогами — смелее, с лоферами или кедами — в расслабленном городском стиле.",
        "Комплект можно носить вместе или отдельно, создавая десятки вариантов для повседневных и вечерних образов.",
        "Ткань: плотный джинс-коттон.",
        "Детали:",
        "• контрастные декоративные швы",
        "• аккуратная обработка и продуманная посадка по фигуре"
      ],
      colors: ["синий"]
    }
  }
},

{
  id: 287,
  price: 1950,
  isTop: false,
  isNew: false,
  sku: "99418",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Denim Pencil Skirt/1.avif",
  images: [
    "/Skirts/Denim Pencil Skirt/2.avif",
    "/Skirts/Denim Pencil Skirt/3.avif",
    "/Skirts/Denim Pencil Skirt/4.avif",
    "/Skirts/Denim Pencil Skirt/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Denim Pencil Skirt",
      description: [
        "A minimalist denim skirt in a light blue shade — a modern interpretation of an everyday essential. The clean silhouette, high waist, and neat front slit create a balanced, refined look with a subtle touch of boldness.",
        "Made from dense denim cotton that holds its shape yet remains comfortable to wear. Vertical seams visually elongate the figure, while the slit adds freedom of movement and a feminine accent.",
        "Perfectly pairs with sneakers and a T-shirt for casual looks, or with a shirt, heels, or jacket for a more polished style.",
        "Fabric: dense denim cotton.",
        "Details:",
        "• Midi length",
        "• High-rise waist",
        "• Neat front slit"
      ],
      colors: ["light blue"]
    },
    FR: {
      category: "Jupes",
      name: "Jupe crayon en jean",
      description: [
        "Jupe en jean minimaliste dans une teinte bleu clair — une interprétation moderne de la pièce essentielle du quotidien. La silhouette nette, la taille haute et la fente avant soignée créent un look équilibré et raffiné avec une touche subtile d’audace.",
        "Réalisée en coton denim dense qui conserve bien sa forme tout en restant confortable à porter. Les coutures verticales allongent visuellement la silhouette, tandis que la fente apporte liberté de mouvement et féminité.",
        "Se combine parfaitement avec des baskets et un t-shirt pour un look décontracté, ou avec une chemise, des talons ou une veste pour un style plus structuré.",
        "Tissu : denim coton dense.",
        "Détails :",
        "• Longueur midi",
        "• Taille haute",
        "• Fente avant soignée"
      ],
      colors: ["bleu clair"]
    },
    UA: {
      category: "Спідниці",
      name: "Джинс спідниця-олівець",
      description: [
        "Мінімалістична джинсова спідниця у світло-блакитному відтінку — сучасна інтерпретація бази на кожен день. Чіткий силует, висока посадка та акуратний передній розріз створюють збалансований, витончений образ із легкою ноткою сміливості.",
        "Модель виконана з щільного джинс-котону, який добре тримає форму та водночас комфортний у носінні. Вертикальні шви візуально витягують силует, а розріз додає свободи руху та підкреслює жіночність.",
        "Ідеально поєднується як із кедами та футболкою для повсякденних образів, так і з сорочкою, підборами чи жакетом для більш зібраного стилю.",
        "Тканина: щільний джинс-котон.",
        "Деталі:",
        "• довжина міді",
        "• висока посадка",
        "• акуратний передній розріз"
      ],
      colors: ["блакитний"]
    },
    RU: {
      category: "Юбки",
      name: "Джинсовая юбка-карандаш",
      description: [
        "Минималистичная джинсовая юбка светло-голубого оттенка — современная интерпретация базовой вещи на каждый день. Чёткий силуэт, высокая посадка и аккуратный передний разрез создают сбалансированный, утончённый образ с лёгким акцентом дерзости.",
        "Модель выполнена из плотного джинс-коттона, который хорошо держит форму и при этом комфортен в носке. Вертикальные швы визуально вытягивают силуэт, а разрез добавляет свободы движений и женственности.",
        "Идеально сочетается с кедами и футболкой для повседневных образов или с рубашкой, каблуками и жакетом для более собранного стиля.",
        "Ткань: плотный джинс-коттон.",
        "Детали:",
        "• длина миди",
        "• высокая посадка",
        "• аккуратный передний разрез"
      ],
      colors: ["голубой"]
    }
  }
},

  {
  id: 286,
  price: 1650,
  isTop: false,
  isNew: false,
  sku: "99417",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Silk Maxi Skirt/1.avif",
  images: [
    "/Skirts/Silk Maxi Skirt/2.avif",
    "/Skirts/Silk Maxi Skirt/3.avif",
    "/Skirts/Silk Maxi Skirt/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Silk Maxi Skirt",
      description: [
        "A minimalist silk skirt — an elegant essential for a feminine wardrobe. The soft sheen of the fabric subtly accentuates movement, creating a smooth, refined silhouette.",
        "Designed with a clean waistline and no unnecessary details — the focus is on fabric and fit. The skirt flows beautifully as you walk, elongating the figure and pairing effortlessly with shirts, turtlenecks, or jackets.",
        "Perfect for the office, evening outings, or events — simply switch up shoes and accessories.",
        "Fabric: Armani silk.",
        "Details:",
        "• Maxi length",
        "• High-rise waist",
        "• Clean finishing at the waist"
      ],
      colors: ["black"]
    },
    FR: {
      category: "Jupes",
      name: "Jupe longue en soie",
      description: [
        "Jupe en soie minimaliste — une base élégante pour une garde-robe féminine. La brillance subtile du tissu souligne délicatement le mouvement, créant une silhouette fluide et raffinée.",
        "Modèle à la taille épurée sans détails superflus — l’accent est mis sur la matière et la coupe. La jupe ondule élégamment à la marche, allonge visuellement la silhouette et se marie aussi bien avec une chemise classique qu’un col roulé ou une veste.",
        "Un choix idéal pour le bureau, les sorties du soir ou les événements — il suffit de changer les chaussures et les accessoires.",
        "Tissu : soie Armani.",
        "Détails :",
        "• Longueur maxi",
        "• Taille haute",
        "• Finition soignée à la taille"
      ],
      colors: ["noir"]
    },
    UA: {
      category: "Спідниці",
      name: "Шовкова спідниця максі",
      description: [
        "Лаконічна шовкова спідниця — елегантна база для жіночного гардероба. М’який блиск тканини делікатно підкреслює рух, створюючи плавний, витончений силует.",
        "Модель виконана з чистою лінією талії без зайвих деталей — акцент на тканині та посадці. Спідниця красиво струмує під час ходи, візуально подовжує силует та легко комбінується як із класичною сорочкою, так і з гольфом чи жакетом.",
        "Ідеальний варіант для офісу, вечірніх виходів або подій — достатньо змінити взуття та аксесуари.",
        "Тканина: шовк 'Армані'.",
        "Деталі:",
        "• довжина максі",
        "• висока посадка",
        "• акуратна обробка по талії"
      ],
      colors: ["чорний"]
    },
    RU: {
      category: "Юбки",
      name: "Шёлковая юбка макси",
      description: [
        "Лаконичная шёлковая юбка — элегантная база для женственного гардероба. Мягкий блеск ткани деликатно подчёркивает движение, создавая плавный, утончённый силуэт.",
        "Модель выполнена с чистой линией талии без лишних деталей — акцент на ткани и посадке. Юбка красиво струится при ходьбе, визуально вытягивает фигуру и легко сочетается как с классической рубашкой, так и с водолазкой или жакетом.",
        "Идеальный вариант для офиса, вечерних выходов или событий — достаточно сменить обувь и аксессуары.",
        "Ткань: шёлк 'Армани'.",
        "Детали:",
        "• длина макси",
        "• высокая посадка",
        "• аккуратная обработка по линии талии"
      ],
      colors: ["чёрный"]
    }
  }
},


{
  id: 285,
  price: 2250,
  isTop: false,
  isNew: false,
  sku: "99416",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Transformer Sundress/1.avif",
  images: [
    "/Dress/Transformer Sundress/2.avif",
    "/Dress/Transformer Sundress/3.avif",
    "/Dress/Transformer Sundress/4.avif",
    "/Dress/Transformer Sundress/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Transformer Sundress",
      description: [
        "An elegant transformer sundress — a versatile base for business and evening looks. The minimalist cut is enhanced with thoughtful details: adjustable straps that cross at the back, creating an accent and allowing you to customize the fit.",
        "Designed in a midi length with a soft fitted waist and a neat front pleat that adds grace to the silhouette. A convenient back slit ensures comfort in motion.",
        "Perfectly pairs with a classic shirt, turtleneck, or top — depending on your style and mood.",
        "Fabric: Suit wool.",
        "Details:",
        "• Midi length",
        "• Adjustable straps (can be fixed in different ways)",
        "• Neat back slit"
      ],
      colors: ["black"]
    },
    FR: {
      category: "Robes",
      name: "Robe salopette transformable",
      description: [
        "Élégante robe salopette transformable — une base polyvalente pour les looks professionnels et de soirée. La coupe minimaliste est complétée par des détails bien pensés : des bretelles réglables qui se croisent dans le dos, créant un accent raffiné et permettant un ajustement personnalisé.",
        "Longueur midi, taille légèrement marquée et pli soigné à l’avant pour une silhouette gracieuse. Une fente arrière assure un confort de mouvement optimal.",
        "Se combine parfaitement avec une chemise classique, un col roulé ou un top — selon le style et l’occasion.",
        "Tissu : laine de costume.",
        "Détails :",
        "• Longueur midi",
        "• Bretelles réglables (différentes options de fixation)",
        "• Fente arrière discrète"
      ],
      colors: ["noir"]
    },
    UA: {
      category: "Сукні",
      name: "Сарафан-трансформер",
      description: [
        "Елегантний сарафан-трансформер — універсальна база для ділових та вечірніх образів. Лаконічний крій поєднується з продуманими деталями: регульовані бретелі, що перехрещуються на спинці, формують акцент і дозволяють змінювати посадку під себе.",
        "Модель виконана у довжині міді, з м’яким приталенням та акуратною складкою спереду, яка додає силуету витонченості. Ззаду — зручний розріз для комфорту рухів.",
        "Ідеально комбінується з класичною сорочкою, гольфом або топом — залежно від стилю та настрою.",
        "Тканина: костюмна вовна.",
        "Деталі:",
        "• довжина міді",
        "• регульовані бретелі (можна змінювати спосіб фіксації)",
        "• акуратний розріз ззаду"
      ],
      colors: ["чорний"]
    },
    RU: {
      category: "Платья",
      name: "Сарафан-трансформер",
      description: [
        "Элегантный сарафан-трансформер — универсальная база для деловых и вечерних образов. Лаконичный крой сочетается с продуманными деталями: регулируемые бретели, перекрещивающиеся на спине, создают акцент и позволяют подогнать посадку под себя.",
        "Модель длины миди с мягким приталиванием и аккуратной складкой спереди, добавляющей изящности силуэту. Сзади — удобный разрез для свободы движений.",
        "Идеально сочетается с классической рубашкой, водолазкой или топом — в зависимости от стиля и настроения.",
        "Ткань: костюмная шерсть.",
        "Детали:",
        "• длина миди",
        "• регулируемые бретели (вариативная фиксация)",
        "• аккуратный разрез сзади"
      ],
      colors: ["чёрный"]
    }
  }
},


{
  id: 284,
  price: 3100,
  isTop: false,
  isNew: false,
  sku: "99415",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Tweed Jacket White/1.avif",
  images: [
    "/Jackets/Tweed Jacket White/2.avif",
    "/Jackets/Tweed Jacket White/3.avif",
    "/Jackets/Tweed Jacket White/4.avif",
    "/Jackets/Tweed Jacket White/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "Tweed Jacket",
      description: [
        "An elegant tweed jacket in a refined milk white shade. The minimalist collarless cut enhances the feminine silhouette, while the structured fabric maintains its shape and ensures a perfect fit.",
        "Tone-on-tone decorative buttons and neat patch pockets add sophistication in a timeless modern classic style.",
        "Pairs beautifully with classic trousers, denim, or a leather skirt — transitioning easily from business to evening looks.",
        "Fabric: Tweed.",
        "Details:",
        "• Silhouette: semi-fitted",
        "• Pockets: decorative patch pockets",
        "• Collar: rounded neckline without lapels"
      ],
      colors: ["white"]
    },
    FR: {
      category: "Vestes",
      name: "Veste en tweed",
      description: [
        "Veste élégante en tweed texturé dans une teinte blanc lait. La coupe épurée sans col met en valeur la silhouette féminine, tandis que le tissu structuré conserve sa forme pour une allure impeccable.",
        "Les boutons ton sur ton et les poches plaquées décoratives ajoutent une touche de sophistication au style modern classic.",
        "S’harmonise parfaitement avec un pantalon classique, un jean ou une jupe en cuir — du bureau aux tenues de soirée.",
        "Tissu : tweed.",
        "Détails :",
        "• Silhouette : semi-ajustée",
        "• Poches : plaquées décoratives",
        "• Col : encolure ronde sans revers"
      ],
      colors: ["blanc"]
    },
    UA: {
      category: "Жакети",
      name: "Твідовий жакет",
      description: [
        "Елегантний жакет із фактурного твіду у світлому відтінку milk white. Лаконічний крій без коміра підкреслює жіночний силует, а структурована тканина тримає форму та створює бездоганну посадку.",
        "Декоративні ґудзики в тон і акуратні накладні кишені додають виробу витонченості в стилі modern classic.",
        "Ідеально поєднується як із класичними брюками, так і з денімом або шкіряною спідницею — для образів від ділових до вечірніх.",
        "Тканина: твід.",
        "Деталі:",
        "• силует: напівприталений",
        "• кишені: декоративні накладні",
        "• комір: округла горловина без лацканів"
      ],
      colors: ["білий"]
    },
    RU: {
      category: "Жакеты",
      name: "Твидовый жакет",
      description: [
        "Элегантный жакет из фактурного твида в светлом оттенке молочного белого. Лаконичный крой без воротника подчёркивает женственный силуэт, а структурированная ткань держит форму и обеспечивает идеальную посадку.",
        "Декоративные пуговицы в тон и аккуратные накладные карманы придают изделию изысканность в стиле modern classic.",
        "Идеально сочетается как с классическими брюками, так и с денимом или кожаной юбкой — для образов от деловых до вечерних.",
        "Ткань: твид.",
        "Детали:",
        "• силуэт: полуприталенный",
        "• карманы: декоративные накладные",
        "• воротник: круглая горловина без лацканов"
      ],
      colors: ["белый"]
    }
  }
},

  {
  id: 1,
  price: 3700,
  isTop: false,
  isNew: false,
  sku: "99412",
  size: "XS S M L XL",
  category: "Outerwear",
  image: "/Outerwear/Leather Bomber Mocha/1.avif",
  images: [
    "/Outerwear/Leather Bomber Mocha/2.avif",
    "/Outerwear/Leather Bomber Mocha/3.avif",
    "/Outerwear/Leather Bomber Mocha/4.avif",
    "/Outerwear/Leather Bomber Mocha/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Outerwear",
      name: "Leather Bomber Jacket",
      description: [
        "A modern interpretation of the classic bomber — minimalist, structured, and effortlessly soft in presentation. The straight silhouette with relaxed shoulders and perfect length makes it a versatile piece — pair it with feminine midi skirts, denim, or tailored trousers.",
        "Perfect for transitional weather, it works beautifully as a layering piece over a turtleneck or lightweight knitwear. A timeless balance between minimalism and character — this bomber is made to last for years.",
        "Fabric: High-quality eco-leather with a suede backing (stretchy, does not crack).",
        "Details:",
        "• Welt pockets",
        "• Oversized fit",
        "• Stand-up collar"
      ],
      colors: ["mocha"]
    },
    FR: {
      category: "Manteaux",
      name: "Blouson aviateur en cuir",
      description: [
        "Une interprétation moderne du blouson aviateur classique — minimaliste, structuré et souple dans son allure. Sa coupe droite, ses épaules tombantes et sa longueur équilibrée en font une pièce polyvalente — parfaite avec une jupe midi féminine, un jean ou un pantalon habillé.",
        "Idéal pour la mi-saison, il se porte aisément sur un col roulé ou un tricot léger. Un équilibre intemporel entre minimalisme et caractère — conçu pour durer des années.",
        "Tissu : cuir écologique de haute qualité sur base en suédine (extensible, ne se fissure pas).",
        "Détails :",
        "• Poches passepoilées",
        "• Coupe oversize",
        "• Col montant"
      ],
      colors: ["moka"]
    },
    UA: {
      category: "Верхній одяг",
      name: "Шкіряний бомбер",
      description: [
        "Сучасна інтерпретація класичного бомберу — лаконічний, структурований і водночас м’який у подачі. Прямий силует з легкою свободою посадки, спущена лінія плеча та акуратна довжина роблять його універсальним для поєднань — від жіночної міді-спідниці до деніму чи класичних брюк.",
        "Бомбер легко стилізується у міжсезоння — як верхній шар на гольф або тонкий трикотаж. Баланс між мінімалізмом і характером — саме той варіант, який працює роками.",
        "Тканина: якісна екошкіра на замшевій основі (стрейчева, не тріскається).",
        "Деталі:",
        "• прорізні кишені",
        "• оверсайз фасон",
        "• комір-стійка"
      ],
      colors: ["мокко"]
    },
    RU: {
      category: "Верхняя одежда",
      name: "Кожаный бомбер",
      description: [
        "Современная интерпретация классического бомбера — лаконичный, структурированный и мягкий в подаче. Прямой силуэт со спущенной линией плеч и сбалансированной длиной делает его универсальным — от женственной миди-юбки до денима или классических брюк.",
        "Бомбер легко стилизуется в межсезонье — как верхний слой на гольф или лёгкий трикотаж. Баланс минимализма и характера — идеальный вариант на долгие годы.",
        "Ткань: качественная экокожа на замшевой основе (тянется, не трескается).",
        "Детали:",
        "• прорезные карманы",
        "• фасон oversize",
        "• воротник-стойка"
      ],
      colors: ["мокко"]
    }
  }
},

  {
    id: 282,
    price: 3700,
    isTop: false,
    isNew: true,
    sku: "99422",
    size: "XS S M L XL",
    category: "Outerwear",
    image: "/Outerwear/Elongated Bomber/1.avif",
    images: [
      "/Outerwear/Elongated Bomber/2.avif",
      "/Outerwear/Elongated Bomber/3.avif",
      "/Outerwear/Elongated Bomber/4.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Outerwear",
        name: "Elongated Bomber",
        description: [
          "A tweed bomber with soft stitching — an accent model for stylish everyday looks. The loose fit, rounded shoulder line and elastic cuffs create a comfortable fit, while the front zipper adds practicality. Patch pockets emphasize the utilitarian character of the garment.",
          "Fabric: quilted tweed",
          "Details:",
          "• Has lining",
          "• Loose fit",
          "• Patch pockets"
        ],
        colors: ["milk chocolate"]
      },
      FR: {
        category: "Vêtements d'extérieur",
        name: "Bomber allongé",
        description: [
          "Un bomber en tweed avec piqûres douces — un modèle d'accent pour des looks quotidiens élégants. La coupe ample, la ligne d'épaules arrondie et les poignets élastiques créent un ajustement confortable, tandis que la fermeture éclair frontale ajoute de la praticité. Les poches plaquées soulignent le caractère utilitaire du vêtement.",
          "Tissu : tweed matelassé",
          "Détails :",
          "• Avec doublure",
          "• Coupe ample",
          "• Poches plaquées"
        ],
        colors: ["chocolat au lait"]
      },
      UA: {
        category: "Верхній одяг",
        name: "Подовжений бомбер",
        description: [
          "Твідовий бомбер із мʼякою прострочкою — акцентна модель для стильних повсякденних образів. Вільний крій, округла лінія плечей та еластичні манжети створюють комфортну посадку, а фронтальна застібка на блискавці додає практичності. Накладні кишені підкреслюють утилітарний характер виробу.",
          "Тканина: стьобаний твід",
          "Деталі:",
          "• має підклад",
          "• вільний крій",
          "• накладні кишені"
        ],
        colors: ["молочний шоколад"]
      },
      RU: {
        category: "Верхняя одежда",
        name: "Удлинённый бомбер",
        description: [
          "Твидовый бомбер с мягкой прострочкой — акцентная модель для стильных повседневных образов. Свободный крой, округлая линия плеч и эластичные манжеты создают комфортную посадку, а фронтальная застёжка на молнии добавляет практичности. Накладные карманы подчёркивают утилитарный характер изделия.",
          "Ткань: стёганый твид",
          "Детали:",
          "• имеет подкладку",
          "• свободный крой",
          "• накладные карманы"
        ],
        colors: ["молочный шоколад"]
      }
    }
  },


  {
    id: 281,
    price: 5600,
    isTop: false,
    isNew: true,
    sku: "99421",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Tweed Suit with Bomber/1.avif",
    images: [
      "/Costumes/Tweed Suit with Bomber/2.avif",
      "/Costumes/Tweed Suit with Bomber/3.avif",
      "/Costumes/Tweed Suit with Bomber/4.avif",
      "/Costumes/Tweed Suit with Bomber/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Tweed Suit with Elongated Bomber",
        description: [
          "A tweed suit in warm natural shade — a combination of coziness, structure and modern aesthetics. The voluminous bomber with stitching and straight trousers create a relaxed but polished silhouette. Textured tweed adds depth and character to the look while remaining comfortable for everyday wear.",
          "Fabric: quilted tweed",
          "Details:",
          "• Elongated bomber",
          "• Has lining",
          "• High waist, banana fit"
        ],
        colors: ["milk chocolate"]
      },
      FR: {
        category: "Costumes",
        name: "Costume en tweed avec bomber allongé",
        description: [
          "Un costume en tweed dans une teinte naturelle chaleureuse — une combinaison de confort, de structure et d'esthétique moderne. Le bomber volumineux avec piqûres et le pantalon droit créent une silhouette décontractée mais soignée. Le tweed texturé ajoute de la profondeur et du caractère au look tout en restant confortable pour un port quotidien.",
          "Tissu : tweed matelassé",
          "Détails :",
          "• Bomber allongé",
          "• Avec doublure",
          "• Taille haute, coupe banane"
        ],
        colors: ["chocolat au lait"]
      },
      UA: {
        category: "Костюми",
        name: "Твідовий костюм з подовженим бомбером",
        description: [
          "Твідовий костюм у теплому природному відтінку — поєднання затишку, структури й сучасної естетики. Обʼємний бомбер із прострочкою та прямі брюки створюють розслаблений, але зібраний силует. Фактурний твід додає образу глибини та характеру, залишаючись комфортним для щоденного носіння.",
          "Тканина: стьобаний твід",
          "Деталі:",
          "• подовжений бомбер",
          "• має підклаж",
          "• висока посадка, фасон бананів"
        ],
        colors: ["молочний шоколад"]
      },
      RU: {
        category: "Костюмы",
        name: "Твидовый костюм с удлинённым бомбером",
        description: [
          "Твидовый костюм в тёплом натуральном оттенке — сочетание уюта, структуры и современной эстетики. Объёмный бомбер с прострочкой и прямые брюки создают расслабленный, но собранный силуэт. Фактурный твид добавляет образу глубины и характера, оставаясь комфортным для повседневной носки.",
          "Ткань: стёганый твид",
          "Детали:",
          "• удлинённый бомбер",
          "• имеет подкладку",
          "• высокая посадка, фасон бананов"
        ],
        colors: ["молочный шоколад"]
      }
    }
  },

  {
    id: 280,
    price: 2060,
    isTop: false,
    isNew: false,
    sku: "99420",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Checkered Pants/1.avif",
    images: [
      "/Pants/Checkered Pants/2.avif",
      "/Pants/Checkered Pants/3.avif",
      "/Pants/Checkered Pants/4.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Checkered Pants",
        description: [
          "Straight-cut wool trousers — a universal base for a thoughtful wardrobe. The high waist and neat leg line create a clean, balanced silhouette and emphasize the figure without excess volume. The fabric is soft to the touch, dense and holds its shape well.",
          "Fabric: natural wool, 75% content",
          "Details:",
          "• High waist",
          "• 2 pockets"
        ],
        colors: ["dark chocolate"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon à carreaux",
        description: [
          "Pantalon en laine à coupe droite — une base universelle pour une garde-robe réfléchie. La taille haute et la ligne nette des jambes créent une silhouette propre et équilibrée et soulignent la silhouette sans volume excessif. Le tissu est doux au toucher, dense et garde bien sa forme.",
          "Tissu : laine naturelle, 75% de contenu",
          "Détails :",
          "• Taille haute",
          "• 2 poches"
        ],
        colors: ["chocolat foncé"]
      },
      UA: {
        category: "Брюки",
        name: "Картаті брюки",
        description: [
          "Вовняні брюки прямого крою — універсальна база для продуманого гардероба. Висока посадка та акуратна лінія штанин створюють чистий, врівноважений силует і підкреслюють фігуру без зайвого обʼєму. Тканина мʼяка на дотик, щільна та добре тримає форму.",
          "Тканина: натуральна вовна, 75% у складі",
          "Деталі:",
          "• висока посадка",
          "• 2 кишені"
        ],
        colors: ["темний шоколад"]
      },
      RU: {
        category: "Брюки",
        name: "Клетчатые брюки",
        description: [
          "Шерстяные брюки прямого кроя — универсальная база для продуманного гардероба. Высокая посадка и аккуратная линия брючин создают чистый, сбалансированный силуэт и подчёркивают фигуру без лишнего объёма. Ткань мягкая на ощупь, плотная и хорошо держит форму.",
          "Ткань: натуральная шерсть, 75% в составе",
          "Детали:",
          "• высокая посадка",
          "• 2 кармана"
        ],
        colors: ["тёмный шоколад"]
      }
    }
  },

  {
    id: 279,
    price: 5560,
    isTop: false,
    isNew: true,
    sku: "99419",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Checkered Suit with Pants/1.avif",
    images: [
      "/Costumes/Checkered Suit with Pants/2.avif",
      "/Costumes/Checkered Suit with Pants/3.avif",
      "/Costumes/Checkered Suit with Pants/4.avif",
      "/Costumes/Checkered Suit with Pants/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Checkered Suit with Pants",
        description: [
          "A wool suit in deep brown-graphite melange — the embodiment of restrained elegance and functional minimalism. The blazer with a clean fit and straight trousers form a refined, elongated silhouette, equally appropriate for both city looks and business meetings.",
          "Fabric: natural wool, 75% content",
          "Details:",
          "• Cropped blazer",
          "• High waist"
        ],
        colors: ["dark chocolate"]
      },
      FR: {
        category: "Costumes",
        name: "Costume à carreaux avec pantalon",
        description: [
          "Un costume en laine en mélange brun-graphite profond — l'incarnation de l'élégance sobre et du minimalisme fonctionnel. Le blazer avec une coupe nette et le pantalon droit forment une silhouette raffinée et allongée, également appropriée pour les looks urbains et les réunions d'affaires.",
          "Tissu : laine naturelle, 75% de contenu",
          "Détails :",
          "• Blazer court",
          "• Taille haute"
        ],
        colors: ["chocolat foncé"]
      },
      UA: {
        category: "Костюми",
        name: "Картатий костюм із брюками",
        description: [
          "Вовняний костюм у глибокому коричнево-графітовому меланжі — втілення стриманої елегантності та функціонального мінімалізму. Жакет із чіткою посадкою та прямі брюки формують витончений, витягнутий силует, який однаково доречний і для міських образів, і для ділових зустрічей.",
          "Тканина: натуральна вовна, 75% у складі",
          "Деталі:",
          "• вкорочений жакет",
          "• висока посадка"
        ],
        colors: ["темний шоколад"]
      },
      RU: {
        category: "Костюмы",
        name: "Клетчатый костюм с брюками",
        description: [
          "Шерстяной костюм в глубоком коричнево-графитовом меланже — воплощение сдержанной элегантности и функционального минимализма. Жакет с чёткой посадкой и прямые брюки формируют изысканный, вытянутый силуэт, одинаково уместный как для городских образов, так и для деловых встреч.",
          "Ткань: натуральная шерсть, 75% в составе",
          "Детали:",
          "• укороченный жакет",
          "• высокая посадка"
        ],
        colors: ["тёмный шоколад"]
      }
    }
  },

  {
    id: 278,
    price: 1900,
    isTop: false,
    isNew: false,
    sku: "99418",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Checkered Skirt/1.avif",
    images: [
      "/Skirts/Checkered Skirt/2.avif",
      "/Skirts/Checkered Skirt/3.avif",
      "/Skirts/Checkered Skirt/4.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Checkered Skirt",
        description: [
          "A classic wool A-line skirt — universal and feminine. The soft dense fabric drapes beautifully and provides a comfortable fit. The midi length makes the model practical and elegant at the same time. The skirt easily combines with the blazer from the set, knitwear or basic shirts, creating complete looks for every day.",
          "Fabric: natural wool, 75% content",
          "Details:",
          "• A-line silhouette",
          "• High waist",
          "• Has pleating"
        ],
        colors: ["dark chocolate"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe à carreaux",
        description: [
          "Une jupe trapèze classique en laine — universelle et féminine. Le tissu dense et doux se drape magnifiquement et offre un ajustement confortable. La longueur midi rend le modèle pratique et élégant à la fois. La jupe se combine facilement avec le blazer de l'ensemble, des tricots ou des chemises basiques, créant des looks complets pour tous les jours.",
          "Tissu : laine naturelle, 75% de contenu",
          "Détails :",
          "• Silhouette trapèze",
          "• Taille haute",
          "• Avec plissage"
        ],
        colors: ["chocolat foncé"]
      },
      UA: {
        category: "Спідниці",
        name: "Картата спідниця",
        description: [
          "Класична вовняна спідниця А-силуету — універсальна та жіночна. М'яка щільна тканина красиво драпірується й забезпечує комфортну посадку. Довжина міді робить модель практичною та елегантною водночас. Спідниця легко комбінується з жакетом із комплекту, трикотажем або базовими сорочками, створюючи завершені образи на кожен день.",
          "Тканина: натуральна вовна, 75% у складі",
          "Деталі:",
          "• А-силуету",
          "• висока посадка",
          "• має плісерування"
        ],
        colors: ["темний шоколад"]
      },
      RU: {
        category: "Юбки",
        name: "Клетчатая юбка",
        description: [
          "Классическая шерстяная юбка А-силуэта — универсальная и женственная. Мягкая плотная ткань красиво драпируется и обеспечивает комфортную посадку. Длина миди делает модель практичной и элегантной одновременно. Юбка легко комбинируется с жакетом из комплекта, трикотажем или базовыми рубашками, создавая завершённые образы на каждый день.",
          "Ткань: натуральная шерсть, 75% в составе",
          "Детали:",
          "• А-силуэт",
          "• высокая посадка",
          "• имеет плиссировку"
        ],
        colors: ["тёмный шоколад"]
      }
    }
  },

  {
    id: 277,
    price: 3500,
    isTop: false,
    isNew: false,
    sku: "99417",
    size: "XS S M L XL",
    category: "Jackets",
    image: "/Jackets/Checkered Jacket/1.avif",
    images: [
      "/Jackets/Checkered Jacket/2.avif",
      "/Jackets/Checkered Jacket/3.avif",
      "/Jackets/Checkered Jacket/4.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Jackets",
        name: "Checkered Jacket",
        description: [
          "A structured wool blazer with a refined V-neckline — an accent wardrobe base. Neat buttons, clean fit and noble fabric texture create an elegant, polished look. The blazer beautifully holds its shape, emphasizes the waist and easily combines with both skirts and trousers or jeans. Perfect option for office and city looks.",
          "Fabric: natural wool, 75% content",
          "Details:",
          "• Cropped blazer",
          "• Has lining"
        ],
        colors: ["dark chocolate"]
      },
      FR: {
        category: "Vestes",
        name: "Veste à carreaux",
        description: [
          "Un blazer en laine structuré avec un décolleté en V raffiné — une base de garde-robe d'accent. Des boutons soignés, une coupe nette et une texture de tissu noble créent un look élégant et soigné. Le blazer garde magnifiquement sa forme, souligne la taille et se combine facilement avec des jupes, des pantalons ou des jeans. Option parfaite pour les looks de bureau et de ville.",
          "Tissu : laine naturelle, 75% de contenu",
          "Détails :",
          "• Blazer court",
          "• Avec doublure"
        ],
        colors: ["chocolat foncé"]
      },
      UA: {
        category: "Жакети",
        name: "Картатий жакет",
        description: [
          "Структурований вовняний жакет із витонченим V-подібним вирізом — акцентна база гардероба. Акуратні ґудзики, чітка посадка та благородна текстура тканини створюють елегантний, зібраний образ. Жакет красиво тримає форму, підкреслює талію та легко поєднується як зі спідницями, так і з брюками чи джинсами. Ідеальний варіант для офісу та міських образів.",
          "Тканина: натуральна вовна, 75% у складі",
          "Деталі:",
          "• вкорочений жакет",
          "• має підклад"
        ],
        colors: ["темний шоколад"]
      },
      RU: {
        category: "Жакеты",
        name: "Клетчатый жакет",
        description: [
          "Структурированный шерстяной жакет с изысканным V-образным вырезом — акцентная база гардероба. Аккуратные пуговицы, чёткая посадка и благородная текстура ткани создают элегантный, собранный образ. Жакет красиво держит форму, подчёркивает талию и легко сочетается как с юбками, так и с брюками или джинсами. Идеальный вариант для офиса и городских образов.",
          "Ткань: натуральная шерсть, 75% в составе",
          "Детали:",
          "• укороченный жакет",
          "• имеет подкладку"
        ],
        colors: ["тёмный шоколад"]
      }
    }
  },

  {
    id: 276,
    price: 5400,
    isTop: false,
    isNew: true,
    sku: "99416",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Checkered Suit with Skirt/1.avif",
    images: [
      "/Costumes/Checkered Suit with Skirt/2.avif",
      "/Costumes/Checkered Suit with Skirt/3.avif",
      "/Costumes/Checkered Suit with Skirt/4.avif",
      "/Costumes/Checkered Suit with Skirt/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Checkered Suit with Skirt",
        description: [
          "An elegant wool suit in noble checkered pattern — the embodiment of restrained femininity and timeless style. The thoughtful cut emphasizes the silhouette, while the soft natural wool provides comfort and warmth in the cool season. The suit is perfect for both business looks and stylish everyday outings. Wear as a set or combine pieces separately to create new looks.",
          "Fabric: natural wool, 75% content",
          "Details:",
          "• Cropped blazer",
          "• High waist",
          "• Pleated skirt"
        ],
        colors: ["dark chocolate"]
      },
      FR: {
        category: "Costumes",
        name: "Costume à carreaux avec jupe",
        description: [
          "Un costume élégant en laine à motif à carreaux noble — l'incarnation de la féminité sobre et du style intemporel. La coupe réfléchie souligne la silhouette, tandis que la laine naturelle douce offre confort et chaleur en saison fraîche. Le costume est parfait pour les looks professionnels et les sorties quotidiennes élégantes. Portez en ensemble ou combinez les pièces séparément pour créer de nouveaux looks.",
          "Tissu : laine naturelle, 75% de contenu",
          "Détails :",
          "• Blazer court",
          "• Taille haute",
          "• Jupe plissée"
        ],
        colors: ["chocolat foncé"]
      },
      UA: {
        category: "Костюми",
        name: "Картатий костюм зі спідницею",
        description: [
          "Елегантний вовняний костюм у благородній клітинці — втілення стриманої жіночності та позачасового стилю. Продуманий крій підкреслює силует, а м'яка натуральна вовна забезпечує комфорт і тепло в прохолодний сезон. Костюм ідеально підходить як для ділових образів, так і для стильних повсякденних виходів. Носіть комплектом або комбінуйте елементи окремо, створюючи нові образи.",
          "Тканина: натуральна вовна, 75% у складі",
          "Деталі:",
          "• вкорочений жакет",
          "• висока посадка",
          "• плісерована спідниця"
        ],
        colors: ["темний шоколад"]
      },
      RU: {
        category: "Костюмы",
        name: "Клетчатый костюм с юбкой",
        description: [
          "Элегантный шерстяной костюм в благородную клетку — воплощение сдержанной женственности и вневременного стиля. Продуманный крой подчёркивает силуэт, а мягкая натуральная шерсть обеспечивает комфорт и тепло в прохладный сезон. Костюм идеально подходит как для деловых образов, так и для стильных повседневных выходов. Носите комплектом или комбинируйте элементы отдельно, создавая новые образы.",
          "Ткань: натуральная шерсть, 75% в составе",
          "Детали:",
          "• укороченный жакет",
          "• высокая посадка",
          "• плиссированная юбка"
        ],
        colors: ["тёмный шоколад"]
      }
    }
  },

  {
    id: 275,
    price: 2060,
    isTop: false,
    isNew: false,
    sku: "99415",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Deep Green Pants/1.avif",
    images: [
      "/Pants/Deep Green Pants/2.avif",
      "/Pants/Deep Green Pants/3.avif",
      "/Pants/Deep Green Pants/4.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Deep Green Pants",
        description: [
          "Wool trousers with a straight elongated cut and elegant fit. The model visually elongates the silhouette, creating a sense of lightness and balance. Natural fabric is pleasant to the body, holds its shape well and is suitable for everyday wear in the cold season.",
          "Fabric: natural wool, 75% content",
          "Details:",
          "• High waist",
          "• 2 pockets",
          "• Creases along the length"
        ],
        colors: ["dark green"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Deep Green",
        description: [
          "Pantalon en laine avec une coupe droite allongée et un ajustement élégant. Le modèle allonge visuellement la silhouette, créant une sensation de légèreté et d'équilibre. Le tissu naturel est agréable au toucher, garde bien sa forme et convient à un port quotidien en saison froide.",
          "Tissu : laine naturelle, 75% de contenu",
          "Détails :",
          "• Taille haute",
          "• 2 poches",
          "• Plis sur la longueur"
        ],
        colors: ["vert foncé"]
      },
      UA: {
        category: "Брюки",
        name: "Брюки Deep green",
        description: [
          "Вовняні брюки прямого подовженого крою з елегантною посадкою. Модель візуально витягує силует, створюючи відчуття легкості та балансу. Натуральна тканина приємна до тіла, добре тримає форму та підходить для щоденного носіння в холодний сезон.",
          "Тканина: натуральна вовна, 75% у складі",
          "Деталі:",
          "• висока посадка",
          "• 2 кишені",
          "• стрілки по довжині"
        ],
        colors: ["темно зелений"]
      },
      RU: {
        category: "Брюки",
        name: "Брюки Deep green",
        description: [
          "Шерстяные брюки прямого удлинённого кроя с элегантной посадкой. Модель визуально вытягивает силуэт, создавая ощущение лёгкости и баланса. Натуральная ткань приятна к телу, хорошо держит форму и подходит для повседневной носки в холодный сезон.",
          "Ткань: натуральная шерсть, 75% в составе",
          "Детали:",
          "• высокая посадка",
          "• 2 кармана",
          "• стрелки по длине"
        ],
        colors: ["тёмно-зелёный"]
      }
    }
  },

  {
    id: 274,
    price: 3500,
    isTop: false,
    isNew: false,
    sku: "99414",
    size: "XS S M L XL",
    category: "Jackets",
    image: "/Jackets/Deep Green Jacket/1.avif",
    images: [
      "/Jackets/Deep Green Jacket/2.avif",
      "/Jackets/Deep Green Jacket/3.avif",
      "/Jackets/Deep Green Jacket/4.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Jackets",
        name: "Deep Green Jacket",
        description: [
          "A fitted wool blazer with a clear shoulder line and refined relief seams that accentuate the waist. The classic notched collar and laconic fastening create a restrained, noble look. Thanks to the thoughtful cut, the blazer forms a feminine silhouette and remains comfortable to wear.",
          "Fabric: natural wool, 75% content",
          "Details:",
          "• Fitted blazer",
          "• Has lining",
          "• Accentuates the waist"
        ],
        colors: ["dark green"]
      },
      FR: {
        category: "Vestes",
        name: "Veste Deep Green",
        description: [
          "Un blazer en laine ajusté avec une ligne d'épaules nette et des coutures en relief raffinées qui accentuent la taille. Le col classique cranté et la fermeture laconique créent un look sobre et noble. Grâce à la coupe réfléchie, le blazer forme une silhouette féminine et reste confortable à porter.",
          "Tissu : laine naturelle, 75% de contenu",
          "Détails :",
          "• Blazer ajusté",
          "• Avec doublure",
          "• Accentue la taille"
        ],
        colors: ["vert foncé"]
      },
      UA: {
        category: "Жакети",
        name: "Жакет Deep green",
        description: [
          "Приталений вовняний жакет із чіткою лінією плечей та витонченими рельєфними швами, що акцентують талію. Класичний відкладний комір і лаконічна застібка створюють стриманий, благородний вигляд. Завдяки продуманому крою жакет формує жіночний силует і залишається комфортним у носінні.",
          "Тканина: натуральна вовна, 75% у складі",
          "Деталі:",
          "• приталений жакет",
          "• має підкладку",
          "• акцентує талію"
        ],
        colors: ["темно зелений"]
      },
      RU: {
        category: "Жакеты",
        name: "Жакет Deep green",
        description: [
          "Приталенный шерстяной жакет с чёткой линией плеч и изысканными рельефными швами, акцентирующими талию. Классический отложной воротник и лаконичная застёжка создают сдержанный, благородный вид. Благодаря продуманному крою жакет формирует женственный силуэт и остаётся комфортным в носке.",
          "Ткань: натуральная шерсть, 75% в составе",
          "Детали:",
          "• приталенный жакет",
          "• имеет подкладку",
          "• акцентирует талию"
        ],
        colors: ["тёмно-зелёный"]
      }
    }
  },

  {
    id: 273,
    price: 5560,
    isTop: false,
    isNew: true,
    sku: "99413",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Deep Green Suit/1.avif",
    images: [
      "/Costumes/Deep Green Suit/2.avif",
      "/Costumes/Deep Green Suit/3.avif",
      "/Costumes/Deep Green Suit/4.avif",
      "/Costumes/Deep Green Suit/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Deep Green Suit",
        description: [
          "An elegant wool suit in a deep shade — a timeless wardrobe investment. The fitted blazer and elongated straight trousers form a clear, refined silhouette and emphasize the figure without excessive strictness. Natural wool fabric provides comfort, warmth and perfect fit, maintaining its shape throughout the day.",
          "Fabric: natural wool, 75% content",
          "Details:",
          "• Fitted blazer",
          "• High waist",
          "• Refined silhouette"
        ],
        colors: ["dark green"]
      },
      FR: {
        category: "Costumes",
        name: "Costume Deep Green",
        description: [
          "Un costume élégant en laine dans une teinte profonde — un investissement intemporel pour la garde-robe. Le blazer ajusté et le pantalon droit allongé forment une silhouette claire et raffinée et soulignent la silhouette sans rigueur excessive. Le tissu en laine naturelle offre confort, chaleur et ajustement parfait, conservant sa forme tout au long de la journée.",
          "Tissu : laine naturelle, 75% de contenu",
          "Détails :",
          "• Blazer ajusté",
          "• Taille haute",
          "• Silhouette raffinée"
        ],
        colors: ["vert foncé"]
      },
      UA: {
        category: "Костюми",
        name: "Костюм Deep green",
        description: [
          "Елегантний вовняний костюм у глибокому відтінку — позачасова інвестиція в гардероб. Приталений жакет і подовжені прямі брюки формують чіткий, витончений силует та підкреслюють фігуру без зайвої строгості. Натуральна вовняна тканина забезпечує комфорт, тепло та ідеальну посадку, зберігаючи форму протягом дня.",
          "Тканина: натуральна вовна, 75% у складі",
          "Деталі:",
          "• приталений жакет",
          "• висока посадка",
          "• витончений силует"
        ],
        colors: ["темно зелений"]
      },
      RU: {
        category: "Костюмы",
        name: "Костюм Deep green",
        description: [
          "Элегантный шерстяной костюм в глубоком оттенке — вневременная инвестиция в гардероб. Приталенный жакет и удлинённые прямые брюки формируют чёткий, изысканный силуэт и подчёркивают фигуру без лишней строгости. Натуральная шерстяная ткань обеспечивает комфорт, тепло и идеальную посадку, сохраняя форму в течение дня.",
          "Ткань: натуральная шерсть, 75% в составе",
          "Детали:",
          "• приталенный жакет",
          "• высокая посадка",
          "• изысканный силуэт"
        ],
        colors: ["тёмно-зелёный"]
      }
    }
  },

  {
    id: 272,
    price: 1950,
    isTop: false,
    isNew: false,
    sku: "99412",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Provence Pants/1.avif",
    images: [
      "/Pants/Provence Pants/2.avif",
      "/Pants/Provence Pants/3.avif",
      "/Pants/Provence Pants/4.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Provence Pants",
        description: [
          "Straight elongated trousers with a comfortable fit and laconic cut. The high or mid waist (depending on fit) beautifully emphasizes the figure, while the restrained form makes the model universal for everyday and business looks.",
          "Fabric: suiting fabric, 75% viscose, 25% polyester",
          "Details:",
          "• High waist",
          "• 2 pockets",
          "• Creases along the length"
        ],
        colors: ["wormwood"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Provence",
        description: [
          "Pantalon droit allongé avec une coupe confortable et laconique. La taille haute ou moyenne (selon l'ajustement) souligne magnifiquement la silhouette, tandis que la forme sobre rend le modèle universel pour les looks quotidiens et professionnels.",
          "Tissu : tissu de costume, 75% viscose, 25% polyester",
          "Détails :",
          "• Taille haute",
          "• 2 poches",
          "• Plis sur la longueur"
        ],
        colors: ["armoise"]
      },
      UA: {
        category: "Брюки",
        name: "Брюки Provence",
        description: [
          "Прямі подовжені брюки з комфортною посадкою та лаконічним кроєм. Висока або середня талія (залежно від посадки) красиво підкреслює фігуру, а стримана форма робить модель універсальною для щоденних і ділових образів.",
          "Тканина: костюмна, 75% віскоза, 25% поліестер",
          "Деталі:",
          "• висока посадка",
          "• 2 кишені",
          "• стрілки по довжині"
        ],
        colors: ["полинь"]
      },
      RU: {
        category: "Брюки",
        name: "Брюки Provence",
        description: [
          "Прямые удлинённые брюки с комфортной посадкой и лаконичным кроем. Высокая или средняя талия (в зависимости от посадки) красиво подчёркивает фигуру, а сдержанная форма делает модель универсальной для повседневных и деловых образов.",
          "Ткань: костюмная, 75% вискоза, 25% полиэстер",
          "Детали:",
          "• высокая посадка",
          "• 2 кармана",
          "• стрелки по длине"
        ],
        colors: ["полынь"]
      }
    }
  },

  {
    id: 271,
    price: 3100,
    isTop: false,
    isNew: false,
    sku: "99411",
    size: "XS S M L XL",
    category: "Jackets",
    image: "/Jackets/Provence Jacket/1.avif",
    images: [
      "/Jackets/Provence Jacket/2.avif",
      "/Jackets/Provence Jacket/3.avif",
      "/Jackets/Provence Jacket/4.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Jackets",
        name: "Provence Jacket",
        description: [
          "A fitted blazer with a clear shoulder line and refined silhouette. The construction of the model accentuates the waist thanks to relief seams, creating a feminine and polished look. The classic notched collar and buttons add versatility and restrained elegance to the blazer.",
          "Fabric: suiting fabric, 75% viscose, 25% polyester",
          "Details:",
          "• Fitted blazer",
          "• Has lining",
          "• Accentuates the waist"
        ],
        colors: ["wormwood"]
      },
      FR: {
        category: "Vestes",
        name: "Veste Provence",
        description: [
          "Un blazer ajusté avec une ligne d'épaules nette et une silhouette raffinée. La construction du modèle accentue la taille grâce aux coutures en relief, créant un look féminin et soigné. Le col classique cranté et les boutons ajoutent polyvalence et élégance sobre au blazer.",
          "Tissu : tissu de costume, 75% viscose, 25% polyester",
          "Détails :",
          "• Blazer ajusté",
          "• Avec doublure",
          "• Accentue la taille"
        ],
        colors: ["armoise"]
      },
      UA: {
        category: "Жакети",
        name: "Жакет Provence",
        description: [
          "Приталений жакет із чіткою лінією плечей і витонченим силуетом. Конструкція моделі акцентує талію завдяки рельєфним швам, створюючи жіночний та зібраний образ. Класичний відкладний комір і ґудзики додають жакету універсальності та стриманої елегантності.",
          "Тканина: костюмна, 75% віскоза, 25% поліестер",
          "Деталі:",
          "• приталений жакет",
          "• має підкладку",
          "• акцентує талію"
        ],
        colors: ["полинь"]
      },
      RU: {
        category: "Жакеты",
        name: "Жакет Provence",
        description: [
          "Приталенный жакет с чёткой линией плеч и изысканным силуэтом. Конструкция модели акцентирует талию благодаря рельефным швам, создавая женственный и собранный образ. Классический отложной воротник и пуговицы добавляют жакету универсальности и сдержанной элегантности.",
          "Ткань: костюмная, 75% вискоза, 25% полиэстер",
          "Детали:",
          "• приталенный жакет",
          "• имеет подкладку",
          "• акцентирует талию"
        ],
        colors: ["полынь"]
      }
    }
  },

  {
    id: 270,
    price: 5050,
    isTop: false,
    isNew: true,
    sku: "99410",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Provence Suit/1.avif",
    images: [
      "/Costumes/Provence Suit/2.avif",
      "/Costumes/Provence Suit/3.avif",
      "/Costumes/Provence Suit/4.avif",
      "/Costumes/Provence Suit/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Provence Suit",
        description: [
          "An elegant suit in a noble shade — the perfect balance between classic and modern femininity. The fitted blazer and elongated straight trousers form a refined silhouette, emphasizing the figure and visually elongating the height. The suit is made of smooth suiting fabric that holds its shape well and is comfortable throughout the day.",
          "Fabric: suiting fabric, 75% viscose, 25% polyester",
          "Details:",
          "• Fitted blazer",
          "• High waist",
          "• Refined silhouette"
        ],
        colors: ["wormwood"]
      },
      FR: {
        category: "Costumes",
        name: "Costume Provence",
        description: [
          "Un costume élégant dans une teinte noble — l'équilibre parfait entre classique et féminité moderne. Le blazer ajusté et le pantalon droit allongé forment une silhouette raffinée, soulignant la silhouette et allongeant visuellement la taille. Le costume est réalisé en tissu de costume lisse qui maintient bien sa forme et est confortable tout au long de la journée.",
          "Tissu : tissu de costume, 75% viscose, 25% polyester",
          "Détails :",
          "• Blazer ajusté",
          "• Taille haute",
          "• Silhouette raffinée"
        ],
        colors: ["armoise"]
      },
      UA: {
        category: "Костюми",
        name: "Костюм Provence",
        description: [
          "Елегантний костюм у благородному відтінку — ідеальний баланс між класикою та сучасною жіночністю. Приталений жакет і подовжені прямі брюки формують витончений силует, підкреслюючи фігуру та візуально витягаючи зріст. Костюм виконаний з гладкої костюмної тканини, яка добре тримає форму та комфортна впродовж усього дня.",
          "Тканина: костюмна, 75% віскоза, 25% поліестер",
          "Деталі:",
          "• приталений жакет",
          "• висока посадка",
          "• витончений силует"
        ],
        colors: ["полинь"]
      },
      RU: {
        category: "Костюмы",
        name: "Костюм Provence",
        description: [
          "Элегантный костюм в благородном оттенке — идеальный баланс между классикой и современной женственностью. Приталенный жакет и удлинённые прямые брюки формируют изысканный силуэт, подчёркивая фигуру и визуально вытягивая рост. Костюм выполнен из гладкой костюмной ткани, которая хорошо держит форму и комфортна в течение всего дня.",
          "Ткань: костюмная, 75% вискоза, 25% полиэстер",
          "Детали:",
          "• приталенный жакет",
          "• высокая посадка",
          "• изысканный силуэт"
        ],
        colors: ["полынь"]
      }
    }
  },

  {
    id: 269,
    price: 2000,
    isTop: false,
    isNew: true,
    sku: "99409",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Leather Sundress Olive/1.avif",
    images: [
      "/Dress/Leather Sundress Olive/2.avif",
      "/Dress/Leather Sundress Olive/3.avif",
      "/Dress/Leather Sundress Olive/4.avif",
      "/Dress/Leather Sundress Olive/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Leather Sundress with Straps",
        description: [
          "A minimalist eco-leather sundress in a noble olive shade — the perfect base for layered looks. The clean A-line silhouette elongates the figure, while vertical seams add architecture. Thin adjustable straps allow you to adapt the fit to height and style, making the model universal for different seasons.",
          "Fabric: High-quality eco-leather with a suede backing (stretchy, does not crack).",
          "Details:",
          "• Straight A-line silhouette",
          "• Adjustable straps",
          "• Hidden back zipper"
        ],
        colors: ["olive"]
      },
      FR: {
        category: "Robes",
        name: "Robe-chasuble en cuir à bretelles",
        description: [
          "Une robe-chasuble minimaliste en cuir synthétique dans une teinte olive noble — la base parfaite pour des looks superposés. La silhouette trapèze épurée allonge la silhouette, tandis que les coutures verticales ajoutent de l'architecture. Les fines bretelles réglables permettent d'adapter l'ajustement à la taille et au style, rendant le modèle universel pour différentes saisons.",
          "Tissu : cuir écologique de haute qualité sur base en suédine (extensible, ne se fissure pas).",
          "Détails :",
          "• Silhouette trapèze droite",
          "• Bretelles réglables",
          "• Fermeture éclair dissimulée au dos"
        ],
        colors: ["olive"]
      },
      UA: {
        category: "Сукні",
        name: "Шкіряний сарафан на бретелях",
        description: [
          "Мінімалістичний сарафан із еко-шкіри в благородному оливковому відтінку — ідеальна база для багатошарових образів. Чіткий А-силует витягує фігуру, а вертикальні шви додають архітектурності. Тонкі регульовані бретелі дозволяють адаптувати посадку під зріст і стиль, роблячи модель універсальною для різних сезонів.",
          "Тканина: якісна екошкіра на замшевій основі (стречева, не тріскається).",
          "Деталі:",
          "• прямий А-силует",
          "• регульовані бретелі",
          "• потайна застібка ззаду"
        ],
        colors: ["оливка"]
      },
      RU: {
        category: "Платья",
        name: "Кожаный сарафан на бретелях",
        description: [
          "Минималистичный сарафан из эко-кожи в благородном оливковом оттенке — идеальная база для многослойных образов. Чёткий А-силуэт вытягивает фигуру, а вертикальные швы добавляют архитектурности. Тонкие регулируемые бретели позволяют адаптировать посадку под рост и стиль, делая модель универсальной для разных сезонов.",
          "Ткань: качественная экокожа на замшевой основе (стрейчевая, не трескается).",
          "Детали:",
          "• прямой А-силуэт",
          "• регулируемые бретели",
          "• потайная застёжка сзади"
        ],
        colors: ["оливковый"]
      }
    }
  },

  {
    id: 268,
    price: 2900,
    isTop: true,
    isNew: false,
    sku: "99408",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Denim Sundress/1.avif",
    images: [
      "/Dress/Denim Sundress/2.avif",
      "/Dress/Denim Sundress/3.avif",
      "/Dress/Denim Sundress/4.avif",
      "/Dress/Denim Sundress/5.avif",
      "/Dress/Denim Sundress/6.avif",
      "/Dress/Denim Sundress/7.avif",
      "/Dress/Denim Sundress/8.avif",
      "/Dress/Denim Sundress/9.avif",
      "/Dress/Denim Sundress/10.avif",
      "/Dress/Denim Sundress/11.avif",
      "/Dress/Denim Sundress/12.avif",
      "/Dress/Denim Sundress/13.avif",
      "/Dress/Denim Sundress/14.avif",
      "/Dress/Denim Sundress/15.avif",
      "/Dress/Denim Sundress/16.avif",
      "/Dress/Denim Sundress/17.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Denim Sundress",
        description: [
          "A laconic sundress made of dense denim cotton — a universal wardrobe base that easily adapts to the season and mood. The clean A-line silhouette beautifully emphasizes the waist, while the midi length makes the look restrained and elegant.",
          "Adjustable straps that cross at the back ensure a comfortable fit and add accent to the details. The belt with a metal buckle shapes the feminine silhouette, and vertical reliefs visually elongate the figure. Natural denim cotton holds its shape, is pleasant to the body and practical for everyday wear.",
          "Fabric: denim cotton",
          "Details:",
          "• A-line silhouette, midi length",
          "• Adjustable straps, cross-back",
          "• Belt with metal buckle"
        ],
        colors: ["blue", "light blue", "milk white", "dark blue"]
      },
      FR: {
        category: "Robes",
        name: "Robe-chasuble en denim",
        description: [
          "Une robe-chasuble laconique en coton denim dense — une base de garde-robe universelle qui s'adapte facilement à la saison et à l'humeur. La silhouette trapèze épurée souligne magnifiquement la taille, tandis que la longueur midi rend le look sobre et élégant.",
          "Les bretelles réglables qui se croisent dans le dos assurent un ajustement confortable et ajoutent un accent aux détails. La ceinture avec boucle métallique façonne la silhouette féminine, et les reliefs verticaux allongent visuellement la silhouette. Le coton denim naturel garde sa forme, est agréable au toucher et pratique pour un port quotidien.",
          "Tissu : coton denim",
          "Détails :",
          "• Silhouette trapèze, longueur midi",
          "• Bretelles réglables, dos croisé",
          "• Ceinture avec boucle métallique"
        ],
        colors: ["bleu", "bleu clair", "blanc lait", "bleu foncé"]
      },
      UA: {
        category: "Сукні",
        name: "Джинсовий сарафан",
        description: [
          "Лаконічний сарафан із щільного джинс-котону — універсальна основа гардероба, яка легко адаптується до сезону та настрою. Чіткий А-силует красиво підкреслює талію, а довжина міді робить образ стриманим і елегантним.",
          "Регульовані бретелі, що перехрещуються на спинці, забезпечують комфортну посадку та додають акцент у деталях. Пояс із металевою пряжкою формує жіночний силует, а вертикальні рельєфи візуально витягують фігуру. Натуральний джинс-котон тримає форму, приємний до тіла та практичний у щоденному носінні.",
          "Тканина: джинс котон",
          "Деталі:",
          "• А-силует, довжина міді",
          "• регульовані бретелі, перехрест на спинці",
          "• пояс із металевою пряжкою"
        ],
        colors: ["синій", "блакитний", "молочний", "темно-синій"]
      },
      RU: {
        category: "Платья",
        name: "Джинсовый сарафан",
        description: [
          "Лаконичный сарафан из плотного джинс-коттона — универсальная основа гардероба, которая легко адаптируется к сезону и настроению. Чёткий А-силуэт красиво подчёркивает талию, а длина миди делает образ сдержанным и элегантным.",
          "Регулируемые бретели, перекрещивающиеся на спине, обеспечивают комфортную посадку и добавляют акцент в деталях. Пояс с металлической пряжкой формирует женственный силуэт, а вертикальные рельефы визуально вытягивают фигуру. Натуральный джинс-коттон держит форму, приятен к телу и практичен в повседневной носке.",
          "Ткань: джинс коттон",
          "Детали:",
          "• А-силуэт, длина миди",
          "• регулируемые бретели, перекрест на спинке",
          "• пояс с металлической пряжкой"
        ],
        colors: ["синий", "голубой", "молочный", "темно-синий"]
      }
    }
  },

  {
    id: 267,
    price: 2400,
    isTop: false,
    isNew: true,
    sku: "99407",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Wool Sundress Houndstooth/1.avif",
    images: [
      "/Dress/Wool Sundress Houndstooth/2.avif",
      "/Dress/Wool Sundress Houndstooth/3.avif",
      "/Dress/Wool Sundress Houndstooth/4.avif",
      "/Dress/Wool Sundress Houndstooth/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Wool Sundress with Straps",
        description: [
          "A wool sundress in houndstooth print — the embodiment of restrained elegance and thoughtful design. The model is made of dense wool fabric that holds its shape well and is comfortable to wear in the cool season. The classic print adds sophistication to the look and easily combines with basic wardrobe pieces.",
          "The sundress has a laconic A-line silhouette that gently emphasizes the figure without restricting movement. Adjustable straps and decorative leather elements create an accent on the waist and add a modern character to the look. The model looks perfect both with shirts and turtlenecks or blouses, allowing you to create layered looks.",
          "Fabric: natural wool, 75% content",
          "Details:",
          "• A-line silhouette",
          "• Adjustable straps",
          "• Decorative leather elements"
        ],
        colors: ["houndstooth"]
      },
      FR: {
        category: "Robes",
        name: "Robe-chasuble en laine à bretelles",
        description: [
          "Une robe-chasuble en laine à motif pied-de-poule — l'incarnation de l'élégance sobre et du design réfléchi. Le modèle est réalisé en tissu de laine dense qui maintient bien sa forme et est confortable à porter en saison fraîche. Le motif classique ajoute de la sophistication au look et se combine facilement avec les pièces de base de la garde-robe.",
          "La robe a une silhouette trapèze laconique qui souligne doucement la silhouette sans entraver les mouvements. Les bretelles réglables et les éléments décoratifs en cuir créent un accent sur la taille et ajoutent un caractère moderne au look. Le modèle est parfait avec des chemises, des cols roulés ou des blouses, permettant de créer des looks superposés.",
          "Tissu : laine naturelle, 75% de contenu",
          "Détails :",
          "• Silhouette trapèze",
          "• Bretelles réglables",
          "• Éléments décoratifs en cuir"
        ],
        colors: ["pied-de-poule"]
      },
      UA: {
        category: "Сукні",
        name: "Вовняний сарафан на бретелях",
        description: [
          "Вовняний сарафан у принті «гусяча лапка» — втілення стриманої елегантності й продуманого дизайну. Модель виконана з щільної вовняної тканини, яка добре тримає форму та комфортна в носінні в прохолодний сезон. Класичний принт додає образу інтелігентності й легко поєднується з базовими речами гардероба.",
          "Сарафан має лаконічний А-силует, який м'яко підкреслює фігуру, не сковуючи рухів. Регульовані бретелі та декоративні шкіряні елементи створюють акцент на талії та додають образу сучасного характеру. Модель ідеально виглядає як з сорочками, так і з гольфами чи блузами, дозволяючи створювати багатошарові образи.",
          "Тканина: натуральна вовна, 75% у складі",
          "Деталі:",
          "• А-силует",
          "• регульовані бретелі",
          "• декоративні шкіряні елементи"
        ],
        colors: ["гусяча лапка"]
      },
      RU: {
        category: "Платья",
        name: "Шерстяной сарафан на бретелях",
        description: [
          "Шерстяной сарафан в принте «гусиная лапка» — воплощение сдержанной элегантности и продуманного дизайна. Модель выполнена из плотной шерстяной ткани, которая хорошо держит форму и комфортна в носке в прохладный сезон. Классический принт добавляет образу интеллигентности и легко сочетается с базовыми вещами гардероба.",
          "Сарафан имеет лаконичный А-силуэт, который мягко подчёркивает фигуру, не сковывая движений. Регулируемые бретели и декоративные кожаные элементы создают акцент на талии и добавляют образу современный характер. Модель идеально выглядит как с рубашками, так и с гольфами или блузами, позволяя создавать многослойные образы.",
          "Ткань: натуральная шерсть, 75% в составе",
          "Детали:",
          "• А-силуэт",
          "• регулируемые бретели",
          "• декоративные кожаные элементы"
        ],
        colors: ["гусиная лапка"]
      }
    }
  },

  {
    id: 266,
    price: 3200,
    isTop: false,
    isNew: true,
    sku: "99406",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Deep Blue Dress/1.avif",
    images: [
      "/Dress/Deep Blue Dress/2.avif",
      "/Dress/Deep Blue Dress/3.avif",
      "/Dress/Deep Blue Dress/4.avif",
      "/Dress/Deep Blue Dress/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Deep Blue Dress",
        description: [
          "A refined midi dress in deep dark blue — about quiet elegance and inner strength. The gently pleated texture creates soft fabric movement with every step, while the relaxed silhouette beautifully wraps the figure without overwhelming the look.",
          "Voluminous sleeves with delicate gathering add character to the dress and balance the simple cut. The round neckline looks restrained and versatile — the dress easily transforms from a casual look to a more festive one with accessories.",
          "Details:",
          "• Midi length",
          "• Relaxed silhouette",
          "• Pleated, lightweight fabric"
        ],
        colors: ["dark blue"]
      },
      FR: {
        category: "Robes",
        name: "Robe Deep Blue",
        description: [
          "Une robe midi raffinée en bleu marine profond — pour l'élégance tranquille et la force intérieure. La texture légèrement plissée crée un doux mouvement du tissu à chaque pas, tandis que la silhouette décontractée enveloppe magnifiquement la silhouette sans surcharger le look.",
          "Les manches volumineuses aux fronces délicates ajoutent du caractère à la robe et équilibrent la coupe simple. Le col rond est sobre et polyvalent — la robe se transforme facilement d'un look décontracté à un look plus festif grâce aux accessoires.",
          "Détails :",
          "• Longueur midi",
          "• Silhouette décontractée",
          "• Tissu plissé léger"
        ],
        colors: ["bleu marine"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня Deep blue",
        description: [
          "Витончена міді-сукня глибокого темно-синього кольору — про спокійну елегантність і внутрішню силу. Легко плісерована фактура створює м'який рух тканини при кожному кроці, а вільний силует красиво огортає фігуру, не перевантажуючи образ.",
          "Обʼємні рукави з делікатною зборкою додають сукні характеру та балансують простий крій. Кругла горловина виглядає стримано й універсально — сукня легко трансформується з повсякденного образу у більш святковий завдяки аксесуарам.",
          "Деталі:",
          "• довжина міді",
          "• вільний силует",
          "• плісерована, легка тканина"
        ],
        colors: ["темно-синій"]
      },
      RU: {
        category: "Платья",
        name: "Платье Deep blue",
        description: [
          "Изысканное миди-платье глубокого тёмно-синего цвета — о спокойной элегантности и внутренней силе. Лёгкая плиссированная фактура создаёт мягкое движение ткани при каждом шаге, а свободный силуэт красиво окутывает фигуру, не перегружая образ.",
          "Объёмные рукава с деликатной сборкой придают платью характер и балансируют простой крой. Круглый вырез выглядит сдержанно и универсально — платье легко трансформируется из повседневного образа в более праздничный благодаря аксессуарам.",
          "Детали:",
          "• длина миди",
          "• свободный силуэт",
          "• плиссированная, лёгкая ткань"
        ],
        colors: ["тёмно-синий"]
      }
    }
  },

  {
    id: 265,
    price: 2100,
    isTop: false,
    isNew: true,
    sku: "99405",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Leather Skirt Front Slit/1.avif",
    images: [
      "/Skirts/Leather Skirt Front Slit/2.avif",
      "/Skirts/Leather Skirt Front Slit/3.avif",
      "/Skirts/Leather Skirt Front Slit/4.avif",
      "/Skirts/Leather Skirt Front Slit/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Leather Skirt with Front Slit",
        description: [
          "A statement midi skirt in rich red eco-leather — about boldness, elegance, and confidence. The high waist beautifully accentuates the waistline, while the straight silhouette elongates the figure, creating a refined and modern look.",
          "The neat front slit adds dynamism and subtle sensuality without disturbing the balance between restraint and impact.",
          "Fabric: High-quality eco-leather with a suede backing (stretchy, does not crack).",
          "Details:",
          "• Midi length",
          "• Front slit",
          "• High waist"
        ],
        colors: ["red"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe en cuir avec fente devant",
        description: [
          "Une jupe midi audacieuse en cuir synthétique rouge vif — pour l'élégance, la confiance et l'assurance. La taille haute souligne magnifiquement la silhouette, tandis que la coupe droite allonge la figure pour un look raffiné et moderne.",
          "La fente devant ajoute du dynamisme et une touche de sensualité sans rompre l'équilibre entre retenue et impact.",
          "Tissu : cuir écologique de haute qualité sur base en suédine (extensible, ne se fissure pas).",
          "Détails :",
          "• Longueur midi",
          "• Fente devant",
          "• Taille haute"
        ],
        colors: ["rouge"]
      },
      UA: {
        category: "Спідниці",
        name: "Шкіряна спідниця розріз спереду",
        description: [
          "Акцентна міді-спідниця зі штучної шкіри насиченого червоного кольору — про сміливість, елегантність і впевненість у собі. Висока посадка красиво підкреслює талію, а прямий силует витягує фігуру, створюючи витончений і сучасний образ.",
          "Акуратний розріз спереду додає динаміки та легкої сексуальності, не порушуючи балансу між стриманістю й ефектністю.",
          "Тканина: якісна екошкіра на замшевій основі (стречева, не тріскається).",
          "Деталі:",
          "• довжина міді",
          "• розріз спереду",
          "• висока посадка"
        ],
        colors: ["червоний"]
      },
      RU: {
        category: "Юбки",
        name: "Кожаная юбка с разрезом спереди",
        description: [
          "Акцентная миди-юбка из искусственной кожи насыщенного красного цвета — о смелости, элегантности и уверенности в себе. Высокая посадка красиво подчёркивает талию, а прямой силуэт удлиняет фигуру, создавая изысканный и современный образ.",
          "Аккуратный разрез спереди добавляет динамики и лёгкой сексуальности, не нарушая баланса между сдержанностью и эффектностью.",
          "Ткань: качественная экокожа на замшевой основе (стрейчевая, не трескается).",
          "Детали:",
          "• длина миди",
          "• разрез спереди",
          "• высокая посадка"
        ],
        colors: ["красный"]
      }
    }
  },

{
  id: 264,
  price: 2100,
  isTop: false,
  isNew: false,
  sku: "99404",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Leather Skirt Alice/1.avif",
  images: [
    "/Skirts/Leather Skirt Alice/2.avif",
    "/Skirts/Leather Skirt Alice/3.avif",
    "/Skirts/Leather Skirt Alice/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Leather Skirt Alice",
      description: [
        "An elegant midi skirt made of eco-leather — about understated sensuality and modern femininity. The clean waistline and A-line silhouette flatter the figure while ensuring comfort in movement.",
        "A perfect base piece for an autumn-winter wardrobe with character.",
        "Fabric: High-quality eco-leather with a suede backing (stretchy, does not crack).",
        "Details:",
        "• A-line silhouette",
        "• Midi length",
        "• High waist"
      ],
      colors: ["black"]
    },
    FR: {
      category: "Jupes",
      name: "Jupe en cuir « Alice »",
      description: [
        "Une jupe midi élégante en cuir synthétique — pour une féminité moderne et une sensualité discrète. La taille marquée et la coupe évasée en A mettent la silhouette en valeur tout en garantissant le confort.",
        "Une base idéale pour une garde-robe automne-hiver au caractère affirmé.",
        "Tissu : cuir écologique de haute qualité sur base en suédine (extensible, ne se fissure pas).",
        "Détails :",
        "• Coupe en A",
        "• Longueur midi",
        "• Taille haute"
      ],
      colors: ["noir"]
    },
    UA: {
      category: "Спідниці",
      name: "Шкіряна спідниця Alice",
      description: [
        "Елегантна міді-спідниця зі штучної шкіри — про стриману сексуальність і сучасну жіночність. Чітка лінія талії та А-подібний силует красиво підкреслюють фігуру, зберігаючи комфорт у русі.",
        "Ідеальна база для осінньо-зимового гардеробу з характером.",
        "Тканина: якісна екошкіра на замшевій основі (стрейчева, не тріскається).",
        "Деталі:",
        "• А-силует",
        "• довжина міді",
        "• висока посадка"
      ],
      colors: ["чорний"]
    },
    RU: {
      category: "Юбки",
      name: "Кожаная юбка Alice",
      description: [
        "Элегантная миди-юбка из искусственной кожи — о сдержанной сексуальности и современной женственности. Чёткая линия талии и А-силуэт красиво подчеркивают фигуру, сохраняя комфорт при движении.",
        "Идеальная база для осенне-зимнего гардероба с характером.",
        "Ткань: качественная экокожа на замшевой основе (тянется, не трескается).",
        "Детали:",
        "• А-силуэт",
        "• длина миди",
        "• высокая посадка"
      ],
      colors: ["чёрный"]
    }
  }
},


{
  id: 263,
  price: 1500,
  isTop: false,
  isNew: false,
  sku: "99403",
  size: "XS S M L XL",
  category: "Sweaters",
  image: "/Sweaters/Sheer Longsleeve/1.avif",
  images: [
    "/Sweaters/Sheer Longsleeve/2.avif",
    "/Sweaters/Sheer Longsleeve/3.avif",
    "/Sweaters/Sheer Longsleeve/4.avif",
    "/Sweaters/Sheer Longsleeve/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Sweaters",
      name: "Sheer Longsleeve",
      description: [
        "A minimalistic longsleeve — a true wardrobe essential. The relaxed, slightly cropped silhouette with dropped shoulders creates an easy relaxed-chic vibe, while the high neckline adds structure and style.",
        "Fabric: Soft to the touch, keeps its shape, and drapes beautifully — perfect to wear tucked in or loose.",
        "[ Composition: 100% knitted linen ]",
        "Details:",
        "• Relaxed fit",
        "• Dropped shoulder line",
        "• Semi-sheer texture"
      ],
      colors: ["white"]
    },
    FR: {
      category: "Pulls",
      name: "Longsleeve transparent",
      description: [
        "Un longsleeve minimaliste — une base incontournable de toute garde-robe. Sa coupe ample et légèrement raccourcie avec des épaules tombantes crée une allure détendue et chic, tandis que le col montant ajoute de la structure et du style.",
        "Tissu : doux au toucher, garde bien sa forme et se drape élégamment — idéal à porter rentré ou lâché.",
        "[ Composition : 100% lin tricoté ]",
        "Détails :",
        "• Coupe ample",
        "• Ligne d'épaule tombante",
        "• Texture semi-transparente"
      ],
      colors: ["blanc"]
    },
    UA: {
      category: "Светри",
      name: "Лонгслів напівпрозорий",
      description: [
        "Лаконічний лонгслів — база, яка працює в будь-якому гардеробі. Вільний, трохи укорочений силует із спущеною лінією плеча створює легке відчуття relaxed-шик, а високий комір додає образу зібраності та стилю.",
        "Тканина: Тканина приємна до тіла, добре тримає форму й красиво драпірується, дозволяючи носити лонгслів як навипуск, так і заправленим.",
        "[ Склад: 100% трикотажний льон ]",
        "Деталі:",
        "• вільний силует",
        "• спущена лінія плеча",
        "• напівпрозорий"
      ],
      colors: ["білий"]
    },
    RU: {
      category: "Свитеры",
      name: "Полупрозрачный лонгслив",
      description: [
        "Лаконичный лонгслив — базовая вещь, которая впишется в любой гардероб. Свободный, слегка укороченный силуэт со спущенной линией плеч создаёт ощущение расслабленного шика, а высокий ворот добавляет собранности и стиля.",
        "Ткань: приятная к телу, хорошо держит форму и красиво драпируется, позволяя носить лонгслив как навыпуск, так и заправленным.",
        "[ Состав: 100% трикотажный лён ]",
        "Детали:",
        "• свободный силуэт",
        "• спущенная линия плеча",
        "• полупрозрачная фактура"
      ],
      colors: ["белый"]
    }
  }
},




// {
//   id: 261,
//   price: 2700,
//   isTop: false,
//   isNew: false,
//   isNewYearOffer: true,
//   // isSpecialOffer: true,
//   // discountPrice: 2295,
//   sku: "99400",
//   size: "XS S M L XL",
//   category: "Dresses",
//   image: "/Dress/Draped Dress/1.avif",
//   images: [
//     "/Dress/Draped Dress/2.avif",
//     "/Dress/Draped Dress/3.avif",
//     "/Dress/Draped Dress/4.avif",
//     "/Dress/Draped Dress/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Dresses",
//       name: "Draped Dress",
//       description: [
//         "A dress created for those who want to shine not through sparkle, but through silhouette. Smooth satin emphasizes the figure, while the thoughtful draping adds an elegant accent at the waist.",
//         "Features that make it special:",
//         "• Noble satin sheen that beautifully catches the light.",
//         "• Soft draping along the waist and hips — provides a subtle shaping effect.",
//         "• Long sleeves and a graceful cowl neckline add a touch of luxury.",
//         "• Mini length balances the covered top for a harmonious look.",
//         "• Perfect fit for evening outings, celebrations, and special occasions."
//       ],
//       colors: ["graphite", "grey"]
//     },
//     FR: {
//       category: "Robes",
//       name: "Robe drapée",
//       description: [
//         "Une robe conçue pour celles qui veulent briller par la silhouette plutôt que par les paillettes. Le satin lisse met en valeur la silhouette, tandis que le drapé étudié souligne délicatement la taille.",
//         "Détails distinctifs :",
//         "• Éclat satiné noble qui capte magnifiquement la lumière.",
//         "• Drapé doux au niveau de la taille et des hanches — effet sculptant subtil.",
//         "• Manches longues et encolure cascade pour une touche de luxe.",
//         "• Longueur mini équilibrant le haut fermé pour une allure harmonieuse.",
//         "• Coupe parfaite pour les soirées, fêtes et événements élégants."
//       ],
//       colors: ["graphite", "gris"]
//     },
//     UA: {
//       category: "Сукні",
//       name: "Сукня у драпіровку",
//       description: [
//         "Сукня, яка створена для тих, хто хоче сяяти не завдяки блиску, а завдяки силуету. Гладкий сатин підкреслює фігуру, а продумане драпування формує ефектний акцент на талії.",
//         "Деталі, що роблять її особливою:",
//         "• благородний сатиновий блиск, який красиво ловить світло;",
//         "• м’яке драпування на талії та стегнах — делікатний коригувальний ефект;",
//         "• довгий рукав та плавна горловина-водоспад, що додає образу розкішності;",
//         "• міні довжина, яка врівноважує закритий верх;",
//         "• ідеальна посадка для вечірніх виходів, свят і подій."
//       ],
//       colors: ["графіт", "сірий"]
//     },
//     RU: {
//       category: "Платья",
//       name: "Платье с драпировкой",
//       description: [
//         "Платье, созданное для тех, кто хочет сиять не блеском, а силуэтом. Гладкий атлас подчёркивает фигуру, а продуманная драпировка делает акцент на талии.",
//         "Детали, которые делают его особенным:",
//         "• Благородный атласный блеск, красиво отражающий свет;",
//         "• Мягкая драпировка на талии и бёдрах — лёгкий корректирующий эффект;",
//         "• Длинный рукав и плавный ворот-водопад придают образу роскоши;",
//         "• Мини-длина, уравновешивающая закрытый верх;",
//         "• Идеальная посадка для вечерних выходов, праздников и событий."
//       ],
//       colors: ["графит", "серый"]
//     }
//   }
// },

// {
//   id: 260,
//   price: 3300,
//   isTop: false,
//   isNew: false,
//     isNewYearOffer: true,
//   // isSpecialOffer: true,
//   // discountPrice: 2805,
//   sku: "99399",
//   size: "XS S M L XL",
//   category: "Dresses",
//   image: "/Dress/Satin Belted Dress/1.avif",
//   images: [
//     "/Dress/Satin Belted Dress/2.avif",
//     "/Dress/Satin Belted Dress/3.avif",
//     "/Dress/Satin Belted Dress/4.avif",
//     "/Dress/Satin Belted Dress/5.avif",
//     "/Dress/Satin Belted Dress/6.avif",
//     "/Dress/Satin Belted Dress/7.avif",
//     "/Dress/Satin Belted Dress/8.avif",
//     "/Dress/Satin Belted Dress/9.avif",
//     "/Dress/Satin Belted Dress/10.avif",
//     "/Dress/Satin Belted Dress/11.avif",
//     "/Dress/Satin Belted Dress/12.avif",

//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Dresses",
//       name: "Satin Belted Dress",
//       description: [
//         "Designed for special occasions, this satin dress stands out with its elegant simplicity and refined texture play.",
//         "The soft satin glow enhances every movement, while the flawless silhouette celebrates feminine grace.",
//         "Key features:",
//         "• Premium-quality satin with a smooth, silky surface that reflects light for a delicate festive sheen.",
//         "• Voluminous sleeves with gentle draping — shaping a sophisticated and modern silhouette.",
//         "• Accentuated wide belt — highlights the waist and allows individual adjustment for perfect fit.",
//         "• Pleats along the waist and hips — create a fluid, sculpted structure that’s minimal yet striking."
//       ],
//       colors: ["grey", "chocolate", "graphite"]
//     },
//     FR: {
//       category: "Robes",
//       name: "Robe en satin avec ceinture",
//       description: [
//         "Conçue pour les occasions spéciales, cette robe en satin se distingue par sa simplicité élégante et son jeu raffiné de textures.",
//         "La douce brillance du satin sublime chaque mouvement, tandis que la silhouette impeccable met en valeur la féminité.",
//         "Détails principaux :",
//         "• Satin de qualité premium à la surface lisse et soyeuse qui capte la lumière pour un éclat délicat.",
//         "• Manches volumineuses avec un drapé souple — pour une silhouette moderne et raffinée.",
//         "• Large ceinture accentuée — souligne la taille et permet un ajustement personnalisé.",
//         "• Plis au niveau de la taille et des hanches — créent une structure fluide et harmonieuse, minimaliste mais impressionnante."
//       ],
//       colors: ["gris", "chocolat", "graphite"]
//     },
//     UA: {
//       category: "Сукні",
//       name: "Сатинова сукня з поясом",
//       description: [
//         "Створена для особливих подій, ця сатинова сукня вирізняється елегантною простотою та витонченою грою фактур.",
//         "М’яке сяйво сатину підкреслює кожен рух, а бездоганний силует працює на вашу жіночність.",
//         "Основні деталі моделі:",
//         "• Бездоганний сатин преміум якості — гладка, шовковиста поверхня м’яко відбиває світло, створюючи делікатне святкове сяйво.",
//         "• Об’ємні рукави з м’яким драпуванням — формують виразний силует та додають моделі сучасної елегантності.",
//         "• Акцентний широкий пояс — підкреслює талію, структурує образ і дозволяє індивідуально регулювати посадку.",
//         "• Складки по лінії талії та стегон — формують м’яку, перетікаючу в плавний низ конструкцію — мінімалістичну, але вражаючу."
//       ],
//       colors: ["сірий", "шоколад", "графіт"]
//     },
//     RU: {
//       category: "Платья",
//       name: "Атласное платье с поясом",
//       description: [
//         "Созданное для особых случаев, это атласное платье выделяется элегантной простотой и изысканной игрой фактур.",
//         "Мягкий блеск сатина подчеркивает каждый шаг, а безупречный силуэт работает на женственность.",
//         "Основные детали модели:",
//         "• Атлас премиум-качества с гладкой шелковистой поверхностью, отражающей свет и создающей деликатное сияние.",
//         "• Объёмные рукава с мягкими драпировками — формируют выразительный силуэт и добавляют современную элегантность.",
//         "• Акцентный широкий пояс — подчёркивает талию и позволяет регулировать посадку.",
//         "• Складки по линии талии и бёдер — создают мягкую, плавную форму, минималистичную, но эффектную."
//       ],
//       colors: ["серый", "шоколад", "графит"]
//     }
//   }
// },

// {
//   id: 259,
//   price: 3250,
//   isTop: false,
//   isNew: false,
//     isNewYearOffer: true,
//   // isSpecialOffer: true,
//   // discountPrice: 2763,
//   sku: "99398",
//   size: "XS S M L XL",
//   category: "Dresses",
//   image: "/Dress/Leo Dress/1.avif",
//   images: [
//     "/Dress/Leo Dress/2.avif",
//     "/Dress/Leo Dress/3.avif",
//     "/Dress/Leo Dress/4.avif",
//     "/Dress/Leo Dress/5.avif",
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Dresses",
//       name: "Leo Dress",
//       description: [
//         "Bright, playful, and designed to capture attention — this dress combines a fitted top with a defined waist and a voluminous asymmetrical tulle skirt with a train, creating a look that’s impossible to ignore.",
//         "Details:",
//         "• Striking leopard sequin fabric with deep shimmer.",
//         "• Fitted silhouette that accentuates the figure.",
//         "• Long sleeves and a round neckline for comfortable wear.",
//         "• Asymmetrical skirt with multilayered tulle.",
//         "• Lightweight dramatic train that moves beautifully with every step.",
//         "• A closed upper construction perfectly balanced by an accent on the legs."
//       ],
//       colors: ["leo"]
//     },
//     FR: {
//       category: "Robes",
//       name: "Robe Léopard",
//       description: [
//         "Éclatante, audacieuse et conçue pour attirer tous les regards. Cette robe associe un haut ajusté à une taille marquée et une jupe asymétrique en tulle avec traîne, pour une allure inoubliable.",
//         "Détails :",
//         "• Paillettes léopard aux reflets profonds et lumineux.",
//         "• Silhouette ajustée qui souligne la silhouette.",
//         "• Manches longues et encolure ronde pour un port confortable.",
//         "• Jupe asymétrique à plusieurs couches de tulle.",
//         "• Traîne légère et spectaculaire qui bouge élégamment à chaque pas.",
//         "• Haut fermé équilibré par un accent sur les jambes."
//       ],
//       colors: ["léopard"]
//     },
//     UA: {
//       category: "Сукні",
//       name: "Сукня Leo",
//       description: [
//         "Яскрава, грайлива і створена для того, щоб привертати увагу. Ця сукня поєднує обтислий верх із виразною талією та пишною асиметричною спідницею зі шлейфом із фатину — образ, у якому неможливо залишитися непоміченою.",
//         "Деталі моделі:",
//         "• ефектна леопардова паєтка з глибоким сяйвом;",
//         "• приталений силует, який підкреслює фігуру;",
//         "• довгі рукави та круглий виріз для комфортної посадки;",
//         "• асиметрична спідниця з багатошаровим фатином;",
//         "• легкий драматичний шлейф, що красиво рухається під час ходьби;",
//         "• закрита конструкція зверху, поєднана з акцентом на ноги."
//       ],
//       colors: ["леопард"]
//     },
//     RU: {
//       category: "Платья",
//       name: "Платье Leo",
//       description: [
//         "Яркое, игривое и созданное для того, чтобы привлекать внимание. Это платье сочетает облегающий верх с выразительной талией и пышной асимметричной юбкой из фатина с шлейфом — образ, в котором невозможно остаться незамеченной.",
//         "Детали модели:",
//         "• эффектные леопардовые пайетки с глубоким блеском;",
//         "• приталенный силуэт, подчёркивающий фигуру;",
//         "• длинные рукава и круглый вырез для комфортной посадки;",
//         "• асимметричная юбка из многослойного фатина;",
//         "• лёгкий драматичный шлейф, красиво движущийся при ходьбе;",
//         "• закрытый верх в сочетании с акцентом на ноги."
//       ],
//       colors: ["леопардовый"]
//     }
//   }
// },


// {
//   id: 258,
//   price: 3250,
//   isTop: false,
//   isNew: false,

//     isNewYearOffer: true,
//   // isSpecialOffer: true,
//   // discountPrice: 2763,
//   sku: "99397",
//   size: "XS S M L XL",
//   category: "Dresses",
//   image: "/Dress/Snake Dress/1.avif",
//   images: [
//     "/Dress/Snake Dress/2.avif",
//     "/Dress/Snake Dress/3.avif",
//     "/Dress/Snake Dress/4.avif",
//     "/Dress/Snake Dress/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Dresses",
//       name: "Snake Dress",
//       description: [
//         "A dress made for special moments and all eyes on you.",
//         "The maxi silhouette with striking snake-pattern sequins follows every movement, reflecting light beautifully. Thoughtful details — a defined waist, soft draping, and a high slit — create an elegant, feminine silhouette with a sense of lightness.",
//         "The boat neckline and long sleeves balance the bold texture of the fabric with a refined upper silhouette.",
//         "The front slit ensures freedom of movement while adding a delicate accent to the legs.",
//         "Perfect for: New Year’s Eve, festive occasions, parties, and moments when you want to look effortlessly luxurious."
//       ],
//       colors: ["snake"]
//     },
//     FR: {
//       category: "Robes",
//       name: "Robe Serpent",
//       description: [
//         "Une robe créée pour les moments spéciaux et les regards captivés.",
//         "La silhouette maxi ornée de sequins au motif serpent épouse les mouvements et reflète magnifiquement la lumière. Les détails bien pensés — taille marquée, drapés doux et fente haute — forment une silhouette féminine et élégante tout en légèreté.",
//         "L’encolure bateau et les manches longues équilibrent la texture audacieuse du tissu avec une allure raffinée.",
//         "La fente avant assure confort et liberté de mouvement tout en ajoutant une touche sensuelle aux jambes.",
//         "Parfaite pour : le réveillon du Nouvel An, les soirées, les fêtes et tous les moments où l’on veut briller sans effort."
//       ],
//       colors: ["imprimé serpent"]
//     },
//     UA: {
//       category: "Сукні",
//       name: "Сукня Snake",
//       description: [
//         "Сукня, що створена для особливих моментів і фокусної уваги.",
//         "Максі силует із ефектною зміїною паєткою повторює кожен рух, красиво граючи на світлі. Асортимент продуманих деталей — акцент на талії, м’які драпірування та високий розріз — формують елегантно-жіночний силует і додають образу легкості.",
//         "Виріз човником та довгий рукав підкреслюють стриманий верх, який ідеально балансує сміливу фактуру тканини.",
//         "Розріз спереду забезпечує комфорт у русі та створює делікатний акцент на ногах.",
//         "Ідеальна для: новорічної ночі, святкових подій, вечірок та моментів, де хочеться виглядати розкішно без зайвих зусиль."
//       ],
//       colors: ["snake"]
//     },
//     RU: {
//       category: "Платья",
//       name: "Платье Snake",
//       description: [
//         "Платье, созданное для особенных моментов и восхищённых взглядов.",
//         "Макси-силуэт с эффектными пайетками под змеиный принт повторяет каждый шаг, красиво играя на свету. Продуманные детали — акцент на талии, мягкие драпировки и высокий разрез — формируют женственный и лёгкий силуэт.",
//         "Вырез-лодочка и длинные рукава подчёркивают сдержанный верх, идеально уравновешивая смелую фактуру ткани.",
//         "Разрез спереди обеспечивает комфорт при движении и добавляет деликатный акцент на ноги.",
//         "Идеальна для: новогодней ночи, праздничных мероприятий, вечеринок и моментов, когда хочется выглядеть роскошно без усилий."
//       ],
//       colors: ["змеиный принт"]
//     }
//   }
// },


// {
//   id: 257,
//   price: 5600,
//   isTop: false,
//   isNew: false,

//     isNewYearOffer: true,
//   // isSpecialOffer: true,
//   // discountPrice: 4760,
//   sku: "99396",
//   size: "XS S M L XL",
//   category: "Costumes",
//   image: "/Costumes/Snake Suit/1.avif",
//   images: [
//     "/Costumes/Snake Suit/2.avif",
//     "/Costumes/Snake Suit/3.avif",
//     "/Costumes/Snake Suit/4.avif",
//     "/Costumes/Snake Suit/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Costumes",
//       name: "Snake Suit",
//       description: [
//         "A luxurious festive set that creates a flawless silhouette and instantly draws attention.",
//         "The snake-print fabric, fully covered with sequins, plays beautifully in the light, adding a touch of sophistication and boldness.",
//         "Blazer:",
//         "• Relaxed, soft oversize silhouette.",
//         "• Comfortable length that flatters the figure.",
//         "• Clean shoulder lines and structured tailoring.",
//         "• Can be worn over a top or as a standalone piece.",
//         "Pants:",
//         "• Elegant straight wide-leg cut.",
//         "• High waist that accentuates the figure.",
//         "• Sequins gently reflect the light, giving the fabric a luxurious texture.",
//         "• Lightweight and comfortable — perfect for parties or events."
//       ],
//       colors: ["snake"]
//     },
//     FR: {
//       category: "Costumes",
//       name: "Costume Serpent",
//       description: [
//         "Un ensemble luxueux et festif qui crée une silhouette impeccable et attire immédiatement le regard.",
//         "Le tissu à imprimé serpent entièrement orné de sequins capte la lumière et ajoute une touche d’audace et de raffinement.",
//         "Veste :",
//         "• Silhouette oversize souple et élégante.",
//         "• Longueur confortable qui équilibre la silhouette.",
//         "• Épaules nettes et coupe structurée.",
//         "• Peut se porter sur un top ou seul comme haut.",
//         "Pantalon :",
//         "• Coupe droite et large, raffinée.",
//         "• Taille haute qui met en valeur la silhouette.",
//         "• Les sequins reflètent doucement la lumière, créant un effet luxueux.",
//         "• Léger et agréable à porter — idéal pour les soirées ou les événements."
//       ],
//       colors: ["imprimé serpent"]
//     },
//     UA: {
//       category: "Костюми",
//       name: "Костюм Snake",
//       description: [
//         "Розкішний святковий сет, який створює бездоганний силует та миттєво привертає увагу.",
//         "Зміїний принт, повністю розшитий паєтками, грає на світлі та додає образу статусності й сміливості.",
//         "Жакет:",
//         "• вільний, м’який oversize-силует;",
//         "• комфортна довжина, що вдало балансує фігуру;",
//         "• акуратні плечі та структурний крій;",
//         "• можна носити як на топ, так і як самостійний верх.",
//         "Штани:",
//         "• прямий, витончений широкий крій;",
//         "• висока посадка, що підкреслює талію;",
//         "• паєтки м’яко відблискують, створюючи ефект люксової тканини;",
//         "• легкі в русі, зручні для вечірки чи події."
//       ],
//       colors: ["snake"]
//     },
//     RU: {
//       category: "Костюмы",
//       name: "Костюм Snake",
//       description: [
//         "Роскошный праздничный комплект, создающий безупречный силуэт и мгновенно притягивающий внимание.",
//         "Ткань со змеиным принтом, полностью расшитая пайетками, красиво играет на свету, добавляя образу статусности и смелости.",
//         "Жакет:",
//         "• свободный мягкий oversize-силуэт;",
//         "• комфортная длина, выгодно балансирующая фигуру;",
//         "• аккуратные плечи и структурный крой;",
//         "• можно носить поверх топа или как самостоятельный верх.",
//         "Брюки:",
//         "• прямой, элегантный широкий крой;",
//         "• высокая посадка, подчёркивающая талию;",
//         "• пайетки мягко отражают свет, создавая эффект роскошной ткани;",
//         "• лёгкие в движении, удобные для вечеринок и мероприятий."
//       ],
//       colors: ["змеиный принт"]
//     }
//   }
// },


// {
//   id: 256,
//   price: 3350,
//   isTop: false,
//   isNew: false,

//   isNewYearOffer: true,
//   // isSpecialOffer: true,
//   // discountPrice: 2848,
//   sku: "99395",
//   size: "XS S M L XL",
//   category: "Costumes",
//   image: "/Costumes/Leo Suit/1.avif",
//   images: [
//     "/Costumes/Leo Suit/2.avif",
//     "/Costumes/Leo Suit/3.avif",
//     "/Costumes/Leo Suit/4.avif",
//     "/Costumes/Leo Suit/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Costumes",
//       name: "Leo Suit",
//       description: [
//         "A striking set created for those who love the mix of comfort, femininity, and dramatic shine.",
//         "The leopard sequin fabric looks luxurious while softly following the body’s movements, adding a playful shimmer to every step.",
//         "Top:",
//         "• Cropped silhouette that accentuates the waist.",
//         "• Soft V-neckline highlighting the décolleté.",
//         "• Fitted design that sculpts the figure thanks to its structure and fabric.",
//         "• Wide straps for comfort and stability.",
//         "Skirt:",
//         "• Maxi length for an elegant elongated silhouette.",
//         "• Slight flare at the hem — ensures freedom of movement and a graceful stride.",
//         "• High waist that shapes proportions and defines the waistline.",
//         "• Gentle sequin shimmer creates a dynamic effect while moving."
//       ],
//       colors: ["leo"]
//     },
//     FR: {
//       category: "Costumes",
//       name: "Ensemble Léopard",
//       description: [
//         "Un ensemble spectaculaire créé pour celles qui aiment allier confort, féminité et éclat dramatique.",
//         "La paillette léopard offre une allure luxueuse tout en épousant délicatement les mouvements du corps, ajoutant une touche scintillante à chaque pas.",
//         "Top :",
//         "• Silhouette courte qui met en valeur la taille.",
//         "• Encolure en V douce qui souligne le décolleté.",
//         "• Coupe ajustée grâce à la structure et au tissu.",
//         "• Bretelles larges pour plus de confort et de maintien.",
//         "Jupe :",
//         "• Longueur maxi pour une silhouette élégante et allongée.",
//         "• Légère évasement en bas pour la liberté de mouvement et une allure gracieuse.",
//         "• Taille haute qui affine la silhouette et met en valeur la taille.",
//         "• L’éclat subtil des paillettes crée un effet dynamique en mouvement."
//       ],
//       colors: ["léopard"]
//     },
//     UA: {
//       category: "Костюми",
//       name: "Костюм Leo",
//       description: [
//         "Ефектний комплект, створений для тих, хто любить поєднання комфорту, жіночності та драматичного блиску.",
//         "Леопардова паєтка виглядає розкішно, але водночас м’яко лягає по фігурі, повторюючи рухи та додаючи образу грайливого сяйва.",
//         "Топ:",
//         "• вкорочений силует, що акцентує талію;",
//         "• м’який V-виріз, який підкреслює лінію декольте;",
//         "• щільна посадка на фігурі завдяки конструкції та тканині;",
//         "• широкі бретелі для комфорту й стабільності.",
//         "Спідниця:",
//         "• довжина максі для елегантного витягнутого силуету;",
//         "• легке розкльошення донизу — свобода руху та красива хода;",
//         "• висока посадка, яка формує пропорції та підкреслює талію;",
//         "• м’яке мерехтіння паєтки створює динамічний ефект під час руху."
//       ],
//       colors: ["леопард"]
//     },
//     RU: {
//       category: "Костюмы",
//       name: "Костюм Leo",
//       description: [
//         "Эффектный комплект, созданный для тех, кто любит сочетание комфорта, женственности и драматического блеска.",
//         "Леопардовые пайетки выглядят роскошно, но при этом мягко ложатся по фигуре, подчёркивая движения и добавляя образу игривого сияния.",
//         "Топ:",
//         "• укорочённый силуэт, акцентирующий талию;",
//         "• мягкий V-образный вырез, подчёркивающий линию декольте;",
//         "• плотная посадка по фигуре благодаря конструкции и ткани;",
//         "• широкие бретели для комфорта и устойчивости.",
//         "Юбка:",
//         "• длина макси для элегантного вытянутого силуэта;",
//         "• лёгкое расклешение книзу — свобода движений и изящная походка;",
//         "• высокая посадка, формирующая пропорции и подчёркивающая талию;",
//         "• мягкое мерцание пайеток создаёт динамичный эффект при движении."
//       ],
//       colors: ["леопардовый"]
//     }
//   }
// },





{
  id: 253,
  price: 2090,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 2075,
  sku: "99402",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Satin Midi Slip Dress/1.avif",
  images: [
    "/Dress/Satin Midi Slip Dress/2.avif",
    "/Dress/Satin Midi Slip Dress/3.avif",
    "/Dress/Satin Midi Slip Dress/4.avif",
    "/Dress/Satin Midi Slip Dress/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "New Year 2025",
      name: "Satin Midi Slip Dress",
      description: [
        "Thin lines, delicate satin sheen, and perfect fit create a look that feels luxurious without any extra accents.",
        "Features:",
        "• Draped cowl neckline — softly forms a graceful wave across the chest for an effortless chic effect.",
        "• Thin straps — open the shoulders and visually make the silhouette more delicate.",
        "• Midi length — a perfect balance of femininity and modern aesthetics.",
        "• Smooth satin with a ‘liquid shine’ — the fabric flows with movement and softly embraces the figure.",
        "• Straight silhouette — enhances natural lines without clinging, ensuring both comfort and elegance.",
        "• Gracefully open upper back — adds a tender, festive touch."
      ],
      colors: ["black"]
    },
    FR: {
      category: "Nouvel An 2025",
      name: "Robe slip midi en satin",
      description: [
        "Des lignes fines, une brillance satinée délicate et une coupe parfaite créent un look qui respire le luxe sans effort.",
        "Détails de la robe :",
        "• Décolleté drapé (cowl neckline) — forme une vague douce et élégante sur la poitrine.",
        "• Bretelles fines — dégagent les épaules pour une silhouette plus délicate.",
        "• Longueur midi — équilibre entre féminité et esthétique contemporaine.",
        "• Satin fluide au ‘liquid shine’ — ondule à chaque mouvement et épouse les formes.",
        "• Silhouette droite — met en valeur le corps sans le serrer, pour un confort absolu.",
        "• Dos subtilement ouvert — apporte une touche de douceur et de raffinement."
      ],
      colors: ["noir"]
    },
    UA: {
      category: "New year 2025",
      name: "Сукня комбінація-міді",
      description: [
        "Тонкі лінії, делікатний блиск сатину та ідеальна посадка створюють образ, який виглядає дорого навіть без додаткових акцентів.",
        "Особливості сукні:",
        "• Драпіроване декольте (cowl neckline) — легко формує м’яку хвилю в зоні грудей — той самий ефект effortless chic.",
        "• Тонкі бретелі — відкривають плечі та роблять силует візуально тендітнішим.",
        "• Довжина міді — баланс жіночності та сучасної естетики.",
        "• Гладкий сатин із 'liquid shine' — тканина переливається при русі й буквально обтікає фігуру.",
        "• Прямий силует — підкреслює лінію тіла, але не обтягує — комфортна свобода рухів і бездоганна посадка.",
        "• Акуратний відкритий верхній край спини — робить образ ніжним і святковим."
      ],
      colors: ["чорний"]
    },
    RU: {
      category: "Новый год 2025",
      name: "Сатиновое платье-комбинация миди",
      description: [
        "Тонкие линии, деликатный блеск сатина и идеальная посадка создают образ, который выглядит роскошно без лишних деталей.",
        "Особенности платья:",
        "• Драпированное декольте (cowl neckline) — формирует мягкую волну на груди, создавая эффект лёгкой элегантности.",
        "• Тонкие бретели — открывают плечи и визуально делают силуэт изящнее.",
        "• Длина миди — баланс женственности и современности.",
        "• Гладкий сатин с эффектом 'liquid shine' — мягко переливается при движении и обтекает фигуру.",
        "• Прямой силуэт — подчёркивает линии тела, не обтягивая, обеспечивая комфорт.",
        "• Аккуратно открытая верхняя часть спины — добавляет нежность и праздничность."
      ],
      colors: ["чёрный"]
    }
  }
},






// {
//   id: 250,
//   price: 1800,
//   isTop: false,
//   isNew: false,
//     isNewYearOffer: true,
//   // isSpecialOffer: true,
//   // discountPrice: 1530,
//   sku: "99394",
//   size: "XS S M L XL",
//   category: "Dresses",
//   image: "/Dress/Satin Mini Slip Dress/1.avif",
//   images: [
//     "/Dress/Satin Mini Slip Dress/2.avif",
//     "/Dress/Satin Mini Slip Dress/3.avif",
//     "/Dress/Satin Mini Slip Dress/4.avif",
//     "/Dress/Satin Mini Slip Dress/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Dresses",
//       name: "Satin Mini Slip Dress",
//       description: [
//         "Thin lines, delicate satin sheen, and a flawless fit create a look that feels luxurious even without extra accents.",
//         "Features:",
//         "• Draped cowl neckline — softly shapes the bust area for an effortless chic effect.",
//         "• Thin straps — reveal the shoulders and add a delicate, refined silhouette.",
//         "• Mini length — the perfect balance between femininity and modern aesthetics.",
//         "• Smooth satin with 'liquid shine' — the fabric flows and shimmers beautifully with every movement.",
//         "• Straight silhouette — accentuates the figure while allowing freedom of movement and comfort.",
//         "• Neat open upper back — adds a tender, festive touch to the look."
//       ],
//       colors: ["gray"]
//     },
//     FR: {
//       category: "Robes",
//       name: "Robe combinaison satin mini",
//       description: [
//         "Des lignes fines, un éclat satiné délicat et une coupe impeccable créent une allure luxueuse sans besoin d’artifices.",
//         "Détails :",
//         "• Encolure drapée — forme une onde douce sur le buste pour un effet chic naturel.",
//         "• Fines bretelles — dévoilent les épaules et affinent la silhouette.",
//         "• Longueur mini — équilibre entre féminité et modernité.",
//         "• Satin fluide à effet « liquid shine » — la matière ondule et brille au mouvement.",
//         "• Coupe droite — met en valeur la silhouette tout en offrant liberté et confort.",
//         "• Dos délicatement ouvert — apporte une touche tendre et festive."
//       ],
//       colors: ["gris"]
//     },
//     UA: {
//       category: "Сукні",
//       name: "Сукня комбінація-міні",
//       description: [
//         "Тонкі лінії, делікатний блиск сатину та ідеальна посадка створюють образ, який виглядає дорого навіть без додаткових акцентів.",
//         "Особливості сукні:",
//         "• Драпіроване декольте (cowl neckline) — легко формує м’яку хвилю в зоні грудей — той самий ефект effortless chic.",
//         "• Тонкі бретелі — відкривають плечі та роблять силует візуально тендітнішим.",
//         "• Довжина міні — баланс жіночності та сучасної естетики.",
//         "• Гладкий сатин із «liquid shine» — тканина переливається при русі й буквально обтікає фігуру.",
//         "• Прямий силует — підкреслює лінію тіла, але не обтягує — комфортна свобода рухів і бездоганна посадка.",
//         "• Акуратний відкритий верхній край спини — робить образ ніжним і святковим."
//       ],
//       colors: ["сірий"]
//     },
//     RU: {
//       category: "Платья",
//       name: "Платье-комбинация мини",
//       description: [
//         "Тонкие линии, деликатный блеск сатина и идеальная посадка создают образ, который выглядит дорого даже без лишних акцентов.",
//         "Особенности платья:",
//         "• Драпированное декольте (cowl neckline) — мягко формирует зону груди, создавая эффект лёгкой элегантности.",
//         "• Тонкие бретели — открывают плечи и визуально делают силуэт более утончённым.",
//         "• Длина мини — баланс женственности и современной эстетики.",
//         "• Гладкий сатин с эффектом «liquid shine» — переливается при движении, обтекая фигуру.",
//         "• Прямой силуэт — подчёркивает линии тела, не обтягивая, обеспечивая комфорт и свободу движений.",
//         "• Аккуратно открытая верхняя часть спины — добавляет нежности и праздничного настроения."
//       ],
//       colors: ["серый"]
//     }
//   }
// },

{
  id: 249,
  price: 3510,
  isTop: false,
  isNew: false,
    isNewYearOffer: true,
  // isSpecialOffer: true,
  // discountPrice: 2984,
  sku: "99393",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Silk Pantsuit Blue/1.avif",
  images: [
    "/Costumes/Silk Pantsuit Blue/2.avif",
    "/Costumes/Silk Pantsuit Blue/3.avif",
    "/Costumes/Silk Pantsuit Blue/4.avif",
    "/Costumes/Silk Pantsuit Blue/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Silk Pantsuit Blue",
      description: [
        "A silk set in a cool sky-blue shade — the embodiment of calmness, lightness, and impeccable taste.",
        "The airy blouse and wide pants create a soft, fluid silhouette that moves gracefully with the body.",
        "Features:",
        "• Premium smooth silk with a delicate sheen.",
        "• Perfect fit and comfortable movement.",
        "• Visual lightness and refinement thanks to the softly flared cut.",
        "• Versatility: from evening looks to stylish everyday ensembles.",
        "Designed for women who appreciate the tenderness of fabric, freedom of movement, and modern elegance."
      ],
      colors: ["light blue"]
    },
    FR: {
      category: "Costumes",
      name: "Costume en soie bleu clair",
      description: [
        "Un ensemble en soie dans une teinte bleu ciel froide — incarnation de la sérénité, de la légèreté et du goût impeccable.",
        "La blouse aérienne et le pantalon large créent une ligne fluide qui accompagne les mouvements du corps.",
        "Détails :",
        "• Soie lisse de qualité supérieure avec un éclat délicat.",
        "• Coupe parfaite et liberté de mouvement.",
        "• Légèreté visuelle et raffinement grâce à la coupe légèrement évasée.",
        "• Polyvalent : idéal pour les soirées comme pour les tenues quotidiennes élégantes.",
        "Conçu pour les femmes qui apprécient la douceur du tissu, la liberté de mouvement et l’élégance contemporaine."
      ],
      colors: ["bleu clair"]
    },
    UA: {
      category: "Костюми",
      name: "Шовковий костюм з брюками",
      description: [
        "Шовковий комплект у відтінку холодного блакиту — втілення спокою, легкості та бездоганного смаку.",
        "Повітряна блуза та широкі штани створюють м’яку, струмливу лінію силуету та рухаються разом із тілом.",
        "Особливості комплекту:",
        "• преміальний гладкий шовк із делікатним блиском;",
        "• ідеальна посадка та комфорт руху;",
        "• візуальна легкість та витонченість завдяки м’якому розширеному крою;",
        "• універсальність: від вечірніх образів до стильних повсякденних сетів;",
        "Створений для жінок, які цінують ніжність тканини, свободу рухів і сучасну елегантність."
      ],
      colors: ["блакитний"]
    },
    RU: {
      category: "Костюмы",
      name: "Шёлковый костюм с брюками",
      description: [
        "Шёлковый комплект в оттенке холодного голубого — воплощение спокойствия, лёгкости и безупречного вкуса.",
        "Воздушная блуза и широкие брюки создают мягкую, струящуюся линию силуэта и двигаются вместе с телом.",
        "Особенности комплекта:",
        "• Премиальный гладкий шёлк с деликатным блеском;",
        "• Идеальная посадка и комфорт движений;",
        "• Визуальная лёгкость и изящество благодаря мягкому расклёшенному крою;",
        "• Универсальность: от вечерних образов до стильных повседневных сетов;",
        "Создан для женщин, которые ценят нежность ткани, свободу движений и современную элегантность."
      ],
      colors: ["голубой"]
    }
  }
},


// {
//   id: 248,
//   price: 3300,
//   isTop: false,
//   isNew: false,
//     isNewYearOffer: true,
//   // isSpecialOffer: true,
//   // discountPrice: 2805,
//   sku: "99392",
//   size: "XS S M L XL",
//   category: "Dresses",
//   image: "/Dress/Off White Dress/1.avif",
//   images: [
//     "/Dress/Off White Dress/2.avif",
//     "/Dress/Off White Dress/3.avif",
//     "/Dress/Off White Dress/4.avif",
//     "/Dress/Off White Dress/5.avif",
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Dresses",
//       name: "Off White Dress",
//       description: [
//         "A blazer-dress that combines the strength of a jacket with the delicacy of a dress.",
//         "Designed for festive evenings, events, and those moments when you want to look impeccable with no extra effort.",
//         "Model features:",
//         "• Elongated silhouette that creates a vertical line and visually elongates the figure.",
//         "• Double-breasted closure with accent metallic buttons.",
//         "• Defined shoulder line and perfect fit.",
//         "• Dense, elegant fabric that holds its shape.",
//         "• Length that allows wearing it both as a dress or as an overdress-jacket."
//       ],
//       colors: ["white"]
//     },
//     FR: {
//       category: "Robes",
//       name: "Robe Off White",
//       description: [
//         "Une robe-veste qui allie la puissance d’une veste à la délicatesse d’une robe.",
//         "Conçue pour les soirées festives, les événements et ces moments où l’on veut être impeccable sans effort.",
//         "Détails du modèle :",
//         "• Silhouette allongée qui crée une ligne verticale et affine la silhouette.",
//         "• Fermeture croisée à boutons métalliques décoratifs.",
//         "• Ligne d’épaules nette et coupe impeccable.",
//         "• Tissu dense et élégant qui garde parfaitement sa forme.",
//         "• Longueur permettant de la porter aussi bien en robe qu’en veste habillée."
//       ],
//       colors: ["blanc"]
//     },
//     UA: {
//       category: "Сукні",
//       name: "Сукня Off white",
//       description: [
//         "Сукня-жакет, що поєднує в собі силу жакету та тендітність сукні.",
//         "Створена для святкових вечорів, подій та тих моментів, коли хочеться виглядати бездоганно без зайвих зусиль.",
//         "Особливості моделі:",
//         "• подовнений силует, що формує вертикаль і витягує фігуру;",
//         "• двобортне застібання з акцентними металевими ґудзиками;",
//         "• чітка лінія плеча та бездоганна посадка;",
//         "• щільна елегантна тканина, яка тримає форму;",
//         "• довжина, що дозволяє носити і як сукню, і як жакет-овердрес."
//       ],
//       colors: ["білий"]
//     },
//     RU: {
//       category: "Платья",
//       name: "Платье Off white",
//       description: [
//         "Платье-пиджак, сочетающее силу жакета и нежность платья.",
//         "Создано для праздничных вечеров, событий и моментов, когда хочется выглядеть безупречно без лишних усилий.",
//         "Особенности модели:",
//         "• Удлинённый силуэт, формирующий вертикаль и визуально вытягивающий фигуру.",
//         "• Двубортная застёжка с акцентными металлическими пуговицами.",
//         "• Чёткая линия плеч и идеальная посадка.",
//         "• Плотная элегантная ткань, хорошо держащая форму.",
//         "• Длина, позволяющая носить как платье или как жакет поверх наряда."
//       ],
//       colors: ["белый"]
//     }
//   }
// },  










{
  id: 239,
  price: 4000,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 3400,
  sku: "99380",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Deep Green/1.avif",
  images: [
    "/Costumes/Deep Green/2.avif",
    "/Costumes/Deep Green/3.avif",
    "/Costumes/Deep Green/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Deep Green Costume",
      description: [
        "A combination of English restraint and femininity, valued by latore.atelier aesthetics. Designed for autumn and transitional seasons when you want to look aristocratic yet comfortable.",
        "The fitted vest in fine check beautifully shapes the waistline, while the voluminous midi skirt adds softness and a noble dynamic to the silhouette.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "Vest: fitted yet comfortable",
        "• Length: at the waist with a soft curved hem",
        "Skirt: deep front pleats",
        "• Length: below the knee",
        "• Waistband at the waist"
      ],
      colors: ["dark green"]
    },
    FR: {
      category: "Costumes",
      name: "Costume vert foncé",
      description: [
        "Combinaison de retenue anglaise et de féminité, appréciée par l’esthétique de latore.atelier. Conçu pour l’automne et les saisons intermédiaires, lorsque l’on souhaite un look aristocratique mais confortable.",
        "Le gilet ajusté en fine check met en valeur la taille, tandis que la jupe midi volumineuse apporte douceur et dynamique noble au silhouette.",
        "Tissu : laine naturelle de qualité supérieure procurant chaleur, confort et toucher agréable.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "Gilet : coupe ajustée mais confortable",
        "• Longueur : jusqu’à la taille avec un ourlet courbé doux",
        "Jupe : plis profonds sur le devant",
        "• Longueur : sous le genou",
        "• Ceinture à la taille"
      ],
      colors: ["vert foncé"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм 'Deep green'",
      description: [
        "Поєднання англійської стриманості та жіночності, які так цінує естетика latore.atelier. Комплект створений для осені та міжсезоння, коли хочеться виглядати аристократично, але комфортно.",
        "Лаконічний жилет у дрібну клітинку чудово формує лінію талії, а об’ємна міді-спідниця додає силуету м’якості й благородної динаміки.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "Жилет: приталений фасон, але комфортний",
        "• Довжина: до лінії талії, з м’яким фігурним низом",
        "Спідниця: глибокі складки спереду",
        "• Довжина: нижче коліна",
        "• Пояс на талії"
      ],
      colors: ["темно-зелений"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм 'Deep green'",
      description: [
        "Сочетание английской сдержанности и женственности, которое так ценит эстетика latore.atelier. Комплект создан для осени и межсезонья, когда хочется выглядеть аристократично, но комфортно.",
        "Лаконичный жилет в мелкую клетку прекрасно формирует линию талии, а объемная миди-юбка добавляет силуэту мягкости и благородной динамики.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "Жилет: приталенный фасон, но комфортный",
        "• Длина: до линии талии, с мягким фигурным низом",
        "Юбка: глубокие складки спереди",
        "• Длина: ниже колена",
        "• Пояс на талии"
      ],
      colors: ["тёмно-зелёный"]
    }
  }
},

{
  id: 238,
  price: 2100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1785,
  sku: "99379",
  size: "XS S M L XL",
  category: "Tops",
  image: "/Top/Deep Green Vest/1.avif",
  images: [
    "/Top/Deep Green Vest/2.avif",
    "/Top/Deep Green Vest/3.avif",
    "/Top/Deep Green Vest/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Tops",
      name: "Deep Green Vest",
      description: [
        "Vest crafted in a fine English check — detailed, structured, and incredibly versatile. The V-neck visually elongates the neck, while the sharply defined shoulder line makes the silhouette slimmer.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "• Fitted yet comfortable cut",
        "• Length: at the waist with a soft curved hem"
      ],
      colors: ["dark green"]
    },
    FR: {
      category: "Tops",
      name: "Gilet vert foncé",
      description: [
        "Gilet en petit motif anglais — détaillé, structuré et incroyablement polyvalent. Le col en V allonge visuellement le cou, tandis que la ligne des épaules bien définie affine la silhouette.",
        "Tissu : laine naturelle de qualité supérieure offrant chaleur, confort et toucher agréable.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "• Coupe ajustée mais confortable",
        "• Longueur : jusqu’à la taille avec un ourlet courbé doux"
      ],
      colors: ["vert foncé"]
    },
    UA: {
      category: "Топи",
      name: "Жилет 'Deep green'",
      description: [
        "Жилет виконаний у дрібну англійську клітинку — деталізований, структурний та неймовірно універсальний.",
        "Його V-подібний виріз візуально подовжує шию, а чітко окреслена лінія плечей робить силует стрункішим.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "• Приталений фасон, але комфортний",
        "• Довжина: до лінії талії, з м’яким фігурним низом"
      ],
      colors: ["темно-зелений"]
    },
    RU: {
      category: "Топы",
      name: "Жилет 'Deep green'",
      description: [
        "Жилет выполнен в мелкую английскую клетку — детализированный, структурный и невероятно универсальный.",
        "V-образный вырез визуально удлиняет шею, а чётко очерченная линия плеч делает силуэт стройнее.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "• Приталенный фасон, но комфортный",
        "• Длина: до линии талии, с мягким фигурным низом"
      ],
      colors: ["тёмно-зелёный"]
    }
  }
},

{
  id: 237,
  price: 2000,
  isTop: false,
  isNew: false,
  //   isSpecialOffer: true,
  // discountPrice: 1700,
  sku: "99378",
  size: "XS S M L XL",
  category: "Shirts",
  image: "/Shirts/Ruffled Blouse/1.avif",
  images: [
    "/Shirts/Ruffled Blouse/2.avif",
    "/Shirts/Ruffled Blouse/3.avif",
    "/Shirts/Ruffled Blouse/4.avif",
    "/Shirts/Ruffled Blouse/5.avif",
    "/Shirts/Ruffled Blouse/6.avif",
    "/Shirts/Ruffled Blouse/7.avif",
    "/Shirts/Ruffled Blouse/8.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Shirts",
      name: "Ruffled Blouse",
      description: [
        "Airy, light, and incredibly expressive — this blouse will become your main romantic accent. The key design feature is cascading ruffles that trace the neckline and shoulders, adding volume and sophistication.",
        "Fabric: 100% viscose.",
        "Details:",
        "• Delicate tie neckline can be worn two ways — untied for a relaxed look or tied for a more elegant appearance.",
        "• Voluminous puff sleeves with soft gathers and elastic cuffs — feminine, comfortable, and charming."
      ],
      colors: ["camel", "dark blue"]
    },
    FR: {
      category: "Chemises",
      name: "Blouse à volants",
      description: [
        "Aérienne, légère et incroyablement expressive — cette blouse deviendra votre touche romantique principale. L’élément clé du design : des volants en cascade le long du décolleté et des épaules, ajoutant volume et sophistication.",
        "Tissu : 100 % viscose.",
        "Détails :",
        "• Encolure à lien délicat pouvant se porter de deux façons — dénouée pour un look décontracté ou nouée pour une allure plus élégante.",
        "• Manches bouffantes avec fronces douces et poignets élastiques — féminines, confortables et pleines de charme."
      ],
      colors: ["camel", "bleu foncé"]
    },
    UA: {
      category: "Сорочки",
      name: "Блуза з воланами",
      description: [
        "Повітряна, легка та неймовірно виразна — ця блуза стане вашим головним романтичним акцентом у гардеробі. Головна деталь моделі — каскадні волани, розташовані вздовж лінії декольте та плечей.",
        "Тканина: 100% віскоза.",
        "Деталі:",
        "• Акуратна горловина на зав’язці, яку можна носити у двох варіантах: розв’язати для легкого розслабленого образу або зав’язати для більш елегантного вигляду.",
        "• Об’ємні рукави-ліхтарі з м’якими зборками та еластичними манжетами — комфортні та дуже жіночні."
      ],
      colors: ["кемел", "темно-синій"]
    },
    RU: {
      category: "Рубашки",
      name: "Блуза с воланами",
      description: [
        "Воздушная, лёгкая и невероятно выразительная — эта блуза станет вашим главным романтическим акцентом в гардеробе. Главная деталь модели — каскадные воланы, расположенные вдоль линии декольте и плеч.",
        "Ткань: 100% вискоза.",
        "Детали:",
        "• Аккуратный вырез с завязкой, который можно носить двумя способами: развязав для расслабленного образа или завязав для более элегантного вида.",
        "• Объёмные рукава-фонари с мягкими сборками и эластичными манжетами — удобные и очень женственные."
      ],
      colors: ["кемел", "тёмно-синий"]
    }
  }
},

{
  id: 236,
  price: 2000,
  isTop: false,
  isNew: false,
  //   isSpecialOffer: true,
  // discountPrice: 1700,
  sku: "99377",
  size: "XS S M L XL",
  category: "Shirts",
  image: "/Shirts/Camel Blouse/1.avif",
  images: [
    "/Shirts/Camel Blouse/2.avif",
    "/Shirts/Camel Blouse/3.avif",
    "/Shirts/Camel Blouse/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Shirts",
      name: "Camel Blouse",
      description: [
        "This blouse is created for those who appreciate comfort, femininity, and a refined silhouette in every movement. The light, airy fabric drapes softly, forming beautiful waves, while thoughtful details make this piece truly unique.",
        "Fabric: 100% viscose.",
        "Details:",
        "• Elastic gathering at the neckline gently highlights the collarbones and allows you to adjust the fit. The back tie adds a romantic touch and ensures the blouse fits perfectly.",
        "• Wide, airy sleeves with structured cuffs and button closure create an elegant look and make the silhouette lighter and more graceful."
      ],
      colors: ["camel"]
    },
    FR: {
      category: "Chemises",
      name: "Blouse Camel",
      description: [
        "Cette blouse est conçue pour celles qui aiment le confort, la féminité et une silhouette élégante dans chaque mouvement. Le tissu léger et aérien tombe délicatement, formant de belles vagues, tandis que les détails soignés rendent cette pièce vraiment unique.",
        "Tissu : 100 % viscose.",
        "Détails :",
        "• Fronces élastiques à l’encolure soulignant délicatement la ligne des clavicules et permettant d’ajuster la coupe. Le lien au dos ajoute une touche romantique et assure un ajustement parfait.",
        "• Manches larges et aérées avec poignets structurés et bouton pour un look raffiné et une silhouette gracieuse."
      ],
      colors: ["camel"]
    },
    UA: {
      category: "Сорочки",
      name: "Блуза «Camel»",
      description: [
        "Ця блуза створена для тих, хто любить комфорт, жіночність і виразний силует у кожному русі. Легка, повітряна тканина м’яко спадає, утворюючи красиві хвилі, а продумані деталі роблять модель по-справжньому унікальною.",
        "Тканина: 100% віскоза.",
        "Деталі:",
        "• Еластична збірка по горловині ніжно підкреслює лінію ключиць і дозволяє регулювати посадку. Зав’язка ззаду додає романтичного акценту та дозволяє блузі сидіти ідеально.",
        "• Широкий, повітряний рукав зі структурованою манжетою на ґудзику створює вишуканий образ і робить силует легшим та витонченішим."
      ],
      colors: ["кемел"]
    },
    RU: {
      category: "Рубашки",
      name: "Блуза «Camel»",
      description: [
        "Эта блуза создана для тех, кто любит комфорт, женственность и выразительный силуэт в каждом движении. Легкая воздушная ткань мягко ниспадает, образуя красивые волны, а продуманные детали делают модель по-настоящему уникальной.",
        "Ткань: 100% вискоза.",
        "Детали:",
        "• Эластичная сборка по горловине мягко подчеркивает линию ключиц и позволяет регулировать посадку. Завязка сзади добавляет романтичный акцент и обеспечивает идеальную посадку.",
        "• Широкий воздушный рукав со структурированной манжетой на пуговице создает утонченный образ и делает силуэт легче и изящнее."
      ],
      colors: ["кемел"]
    }
  }
},

// {
//   id: 235,
//   price: 3100,
//   isTop: false,
//   isNew: false,
//   //   isSpecialOffer: true,
//   // discountPrice: 2635,
//   sku: "99376",
//   size: "XS S M L XL",
//   category: "Dresses",
//   image: "/Dress/Wool Belted Dress/1.avif",
//   images: [
//     "/Dress/Wool Belted Dress/2.avif",
//     "/Dress/Wool Belted Dress/3.avif",
//     "/Dress/Wool Belted Dress/4.avif",
//     "/Dress/Wool Belted Dress/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Dresses",
//       name: "Wool Belted Dress",
//       description: [
//         "This dress embodies comfort, warmth, and understated luxury visible in every detail. Made from soft wool fabric that keeps its shape while providing cozy warmth for the cooler season.",
//         "An ideal choice for the office, meetings, walks, and even travels — a versatile everyday look.",
//         "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
//         "[ Composition: 75% wool ]",
//         "Details:",
//         "• Straight midi silhouette — elongates the figure and refines body lines.",
//         "• Functional chest flaps — add a light accent to the neckline and bring structure to the design.",
//         "• 3/4 sleeves with wide cuffs — reveal the wrists and add lightness to the silhouette."
//       ],
//       colors: ["beige"]
//     },
//     FR: {
//       category: "Robes",
//       name: "Robe en laine avec ceinture",
//       description: [
//         "Cette robe incarne le confort, la chaleur et le luxe discret perceptible dans chaque détail. Réalisée en laine douce qui conserve sa forme tout en offrant une agréable sensation de chaleur pour la saison fraîche.",
//         "Un choix idéal pour le bureau, les rendez-vous, les promenades ou les voyages — un look polyvalent pour tous les jours.",
//         "Tissu : laine naturelle de qualité supérieure procurant chaleur, confort et douceur au toucher.",
//         "[ Composition : 75% laine ]",
//         "Détails :",
//         "• Silhouette droite midi — allonge la silhouette et affine la ligne du corps.",
//         "• Poches à rabat sur la poitrine — ajoutent une touche d’accent et de structure au design.",
//         "• Manches 3/4 avec larges poignets — dévoilent les poignets et apportent de la légèreté à la tenue."
//       ],
//       colors: ["beige"]
//     },
//     UA: {
//       category: "Сукні",
//       name: "Вовняна сукня з поясом",
//       description: [
//         "Ця сукня — про комфорт, тепло та стриману розкіш, яку видно в кожній деталі. Модель виконана з м’якої вовняної тканини, що тримає форму та дарує приємне відчуття тепла у прохолодний сезон.",
//         "Ідеальний варіант для офісу, зустрічей, прогулянок і навіть подорожей — універсальний образ на кожен день.",
//         "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
//         "[ Склад: 75% вовни ]",
//         "Деталі:",
//         "• Прямий силует міді — витягує фігуру та робить лінію тіла більш витонченою.",
//         "• Функціональні нагрудні клапани — створюють легкий акцент у зоні декольте та додають образу структури.",
//         "• Рукав 3/4 із широким манжетом — відкриває зап’ястя й додає легкості силуету."
//       ],
//       colors: ["бежевий"]
//     },
//     RU: {
//       category: "Платья",
//       name: "Шерстяное платье с поясом",
//       description: [
//         "Это платье — про комфорт, тепло и сдержанную роскошь, заметную в каждой детали. Модель выполнена из мягкой шерстяной ткани, которая держит форму и дарит приятное ощущение тепла в прохладный сезон.",
//         "Идеальный вариант для офиса, встреч, прогулок и даже путешествий — универсальный образ на каждый день.",
//         "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
//         "[ Состав: 75% шерсти ]",
//         "Детали:",
//         "• Прямой силуэт миди — визуально вытягивает фигуру и делает линии тела более изящными.",
//         "• Функциональные нагрудные клапаны — добавляют акцент в зоне декольте и структурируют образ.",
//         "• Рукав 3/4 с широким манжетом — открывает запястья и придаёт лёгкость силуэту."
//       ],
//       colors: ["бежевый"]
//     }
//   }
// },

{
  id: 234,
  price: 3100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 2635,
  sku: "99375",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Cocoa Line Belt Dress/1.avif",
  images: [
    "/Dress/Cocoa Line Belt Dress/2.avif",
    "/Dress/Cocoa Line Belt Dress/3.avif",
    "/Dress/Cocoa Line Belt Dress/4.avif",
    "/Dress/Cocoa Line Belt Dress/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Cocoa Line Dress with Belt",
      description: [
        "This dress embodies comfort, warmth, and understated luxury, visible in every detail. The perfect option for the office, meetings, walks, or even travel — a truly versatile everyday look.",
        "Fabric: Dense premium suit fabric that holds its shape while remaining soft and comfortable against the skin.",
        "[ Composition: 75% viscose, 25% polyester ]",
        "Details:",
        "• Straight midi silhouette — elongates the figure and creates a refined body line.",
        "• Functional chest flaps — add a light accent to the neckline and create a structured look.",
        "• 3/4 sleeves with wide cuffs — reveal the wrists and add lightness to the silhouette."
      ],
      colors: ["cocoa"]
    },
    FR: {
      category: "Robes",
      name: "Robe «Cocoa Line» avec Ceinture",
      description: [
        "Cette robe incarne le confort, la chaleur et le luxe discret visible dans chaque détail. Parfaite pour le bureau, les réunions, les promenades ou les voyages — une tenue polyvalente pour tous les jours.",
        "Tissu : tissu de costume dense de qualité supérieure qui garde sa forme tout en restant doux et agréable sur la peau.",
        "[ Composition : 75% viscose, 25% polyester ]",
        "Détails :",
        "• Silhouette droite midi — allonge la silhouette et affine la ligne du corps.",
        "• Poches à rabat sur la poitrine — ajoutent une touche d’accent et de structure au décolleté.",
        "• Manches 3/4 avec larges poignets — dévoilent les poignets et apportent de la légèreté à la silhouette."
      ],
      colors: ["cacao"]
    },
    UA: {
      category: "Сукні",
      name: "Сукня «Cocoa line» з поясом",
      description: [
        "Ця сукня — про комфорт, тепло та стриману розкіш, яку видно в кожній деталі. Ідеальний варіант для офісу, зустрічей, прогулянок і навіть подорожей — універсальний образ на кожен день.",
        "Тканина: Щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[ Склад: 75% віскоза, 25% поліестер ]",
        "Деталі:",
        "• Прямий силует міді — витягує фігуру та робить лінію тіла більш витонченою.",
        "• Функціональні нагрудні клапани — створюють легкий акцент у зоні декольте та додають образу структури.",
        "• Рукав 3/4 із широким манжетом — відкриває зап’ястя й додає легкості силуету."
      ],
      colors: ["какао"]
    },
    RU: {
      category: "Платья",
      name: "Платье «Cocoa Line» с поясом",
      description: [
        "Это платье — про комфорт, тепло и сдержанную роскошь, заметную в каждой детали. Идеальный вариант для офиса, встреч, прогулок и даже путешествий — универсальный образ на каждый день.",
        "Ткань: плотная костюмная ткань премиум-класса, держащая форму, но мягкая и приятная к телу.",
        "[ Состав: 75% вискоза, 25% полиэстер ]",
        "Детали:",
        "• Прямой силуэт миди — визуально вытягивает фигуру и делает линии тела более изящными.",
        "• Функциональные нагрудные клапаны — добавляют акцент в зоне декольте и создают структурный вид.",
        "• Рукав 3/4 с широким манжетом — открывает запястья и придаёт лёгкость силуэту."
      ],
      colors: ["какао"]
    }
  }
},

{
  id: 233,
  price: 3100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 2635,
  sku: "99374",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Cocoa Line Dress/1.avif",
  images: [
    "/Dress/Cocoa Line Dress/2.avif",
    "/Dress/Cocoa Line Dress/3.avif",
    "/Dress/Cocoa Line Dress/4.avif",
    "/Dress/Cocoa Line Dress/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Cocoa Line Dress",
      description: [
        "An elegant dress that perfectly balances sophistication, comfort, and a flattering fit. Designed for those who appreciate a clean silhouette with refined details that accentuate the figure.",
        "An ideal choice for those seeking a timeless, effortlessly chic dress that remains a wardrobe staple for seasons to come.",
        "Fabric: Dense premium suit fabric that holds its shape while remaining soft and comfortable against the skin.",
        "[ Composition: 75% viscose, 25% polyester ]",
        "Details:",
        "• Deep V-neckline — visually elongates the neck and adds lightness to the look.",
        "• Accent seams along the bodice — softly define the waistline without constriction.",
        "• Perfect midi length — flows beautifully with movement, creating a gentle A-line silhouette."
      ],
      colors: ["cocoa"]
    },
    FR: {
      category: "Robes",
      name: "Robe «Cocoa Line»",
      description: [
        "Une robe élégante qui allie sophistication, confort et coupe parfaite. Conçue pour celles qui aiment les lignes épurées mais apprécient les détails qui subliment la silhouette.",
        "Un choix idéal pour celles qui recherchent une robe intemporelle, chic et facile à porter, qui reste un essentiel de la garde-robe saison après saison.",
        "Tissu : tissu de costume dense de qualité supérieure qui garde sa forme tout en restant doux et agréable sur la peau.",
        "[ Composition : 75% viscose, 25% polyester ]",
        "Détails :",
        "• Encolure en V profonde — allonge visuellement le cou et apporte de la légèreté à la silhouette.",
        "• Coutures en relief le long du buste — soulignent délicatement la taille sans la marquer.",
        "• Longueur midi parfaite — se déploie harmonieusement en mouvement, créant une silhouette évasée."
      ],
      colors: ["cacao"]
    },
    UA: {
      category: "Сукні",
      name: "Сукня «Cocoa line»",
      description: [
        "Вишукана сукня, яка поєднує в собі елегантність, комфорт і ідеальну посадку. Модель створена для тих, хто любить лаконічний силует, але цінує деталі, що формують фігуру.",
        "Ідеальний вибір для тих, хто шукає базову, але неймовірно стильну сукню, яка працює в гардеробі багато сезонів поспіль.",
        "Тканина: Щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[ Склад: 75% віскоза, 25% поліестер ]",
        "Деталі:",
        "• Глибокий V-виріз — візуально подовжує шию та додає образу легкості.",
        "• Акцентні рельєфи вздовж ліфа — м’яко формують лінію талії без жодного зусилля.",
        "• Ідеальна довжина міді — красиво розкривається при русі, утворюючи плавний А-силует."
      ],
      colors: ["какао"]
    },
    RU: {
      category: "Платья",
      name: "Платье «Cocoa Line»",
      description: [
        "Изысканное платье, сочетающее элегантность, комфорт и идеальную посадку. Создано для тех, кто любит лаконичный силуэт и ценит детали, подчеркивающие фигуру.",
        "Идеальный выбор для тех, кто ищет базовое, но невероятно стильное платье, которое будет актуально много сезонов подряд.",
        "Ткань: плотная костюмная ткань премиум-класса, держащая форму, но мягкая и приятная к телу.",
        "[ Состав: 75% вискоза, 25% полиэстер ]",
        "Детали:",
        "• Глубокий V-образный вырез — визуально удлиняет шею и добавляет лёгкости образу.",
        "• Акцентные рельефы вдоль лифа — мягко формируют линию талии без утяжеления.",
        "• Идеальная длина миди — красиво раскрывается при движении, создавая плавный А-силуэт."
      ],
      colors: ["какао"]
    }
  }
},

{
  id: 232,
  price: 3500,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 2975,
  sku: "99373",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Houndstooth Jacket/1.avif",
  images: [
    "/Jackets/Houndstooth Jacket/2.avif",
    "/Jackets/Houndstooth Jacket/3.avif",
    "/Jackets/Houndstooth Jacket/4.avif",
    "/Jackets/Houndstooth Jacket/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "Houndstooth Jacket",
      description: [
        "Stylish, versatile, and perfectly tailored — designed for those who value elegance in every detail. A timeless piece that works for any occasion.",
        "For the office — refined and sophisticated.",
        "For everyday looks — stylish and modern, especially when paired with denim.",
        "For colder seasons — warm and comfortable thanks to its high wool content.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "• Straight, slightly fitted silhouette that flatters different body types.",
        "• Classic collar adds understated elegance and emphasizes the shoulder line.",
        "• Elongated length that shapes the silhouette and pairs easily with jeans, classic trousers, or skirts."
      ],
      colors: ["houndstooth"]
    },
    FR: {
      category: "Vestes",
      name: "Veste à motif pied-de-poule",
      description: [
        "Élégante, polyvalente et parfaitement coupée — conçue pour celles qui apprécient l’élégance dans chaque détail. Une pièce intemporelle qui s’adapte à toutes les occasions.",
        "Pour le bureau — chic et raffinée.",
        "Pour le quotidien — moderne et stylée, notamment associée au denim.",
        "Pour les saisons froides — chaude et confortable grâce à sa forte teneur en laine.",
        "Tissu : laine naturelle de qualité supérieure, offrant chaleur, confort et douceur au toucher.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "• Silhouette droite, légèrement cintrée, qui s’adapte à différentes morphologies.",
        "• Col classique apportant une touche d’élégance et mettant en valeur la ligne des épaules.",
        "• Longueur allongée, qui structure la silhouette et se combine facilement avec un jean, un pantalon ou une jupe."
      ],
      colors: ["pied-de-poule"]
    },
    UA: {
      category: "Жакети",
      name: "Жакет у гусячу лапку",
      description: [
        "Стильний, універсальний і бездоганно посаджений. Створений для тих, хто цінує елегантність у кожній деталі. Це той жакет, який працює завжди.",
        "Для офісу — елегантний та стриманий.",
        "Для щоденних образів — стильний і сучасний, особливо в парі з денімом.",
        "Для холодного сезону — теплий завдяки високому вмісту вовни.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "• Силует прямий, трохи приталений, забезпечує ідеальну посадку на різні типи фігур.",
        "• Комір класичного крою додає образу стриманої елегантності й підкреслює лінію плечей.",
        "• Подовжена довжина, що моделює силует і легко комбінується як з джинсами, так і з класичними брюками чи спідницями."
      ],
      colors: ["гусяча лапка"]
    },
    RU: {
      category: "Жакеты",
      name: "Жакет в гусиную лапку",
      description: [
        "Стильный, универсальный и идеально сидящий жакет. Создан для тех, кто ценит элегантность в каждой детали. Это тот вариант, который всегда уместен.",
        "Для офиса — элегантный и сдержанный.",
        "Для повседневных образов — современный и модный, особенно в сочетании с денимом.",
        "Для холодного сезона — тёплый благодаря высокому содержанию шерсти.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "• Прямой, слегка приталенный силуэт, обеспечивающий отличную посадку на любой тип фигуры.",
        "• Классический воротник добавляет образу сдержанной элегантности и подчёркивает линию плеч.",
        "• Удлинённая длина, формирующая силуэт и легко сочетающаяся с джинсами, брюками или юбками."
      ],
      colors: ["гусиная лапка"]
    }
  }
},

{
  id: 231,
  price: 5560,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 4726,
  sku: "99372",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Clariss Suit with Pants/10.avif",
  images: [
    // "/Costumes/Clariss Suit with Pants/2.avif",
    // "/Costumes/Clariss Suit with Pants/3.avif",
    // "/Costumes/Clariss Suit with Pants/4.avif",
    // "/Costumes/Clariss Suit with Pants/5.avif",
    // "/Costumes/Clariss Suit with Pants/6.avif",
    // "/Costumes/Clariss Suit with Pants/7.avif",
    // "/Costumes/Clariss Suit with Pants/8.avif",
    // "/Costumes/Clariss Suit with Pants/9.avif",
    // "/Costumes/Clariss Suit with Pants/10.avif",
    "/Costumes/Clariss Suit with Pants/11.avif",
    "/Costumes/Clariss Suit with Pants/12.avif",
    "/Costumes/Clariss Suit with Pants/13.avif",

  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Clariss Suit with Pants",
      description: [
        "The embodiment of understated elegance that works for every occasion — office, meeting, event, or city stroll. The structured fabric and perfect cut create a look that appears effortlessly refined.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "Blazer: Elegant silhouette with a soft shoulder line and classic lapels.",
        "• Double-button fastening with a subtle shine — a refined detail that elevates the blazer’s look.",
        "Pants: Straight elongated silhouette that visually lengthens the legs and creates clean vertical lines.",
        "• Pleats: carefully pressed at the front for a sleek, polished appearance."
      ],
      colors: ["dark green"]
    },
    FR: {
      category: "Costumes",
      name: "Costume Clariss avec Pantalon",
      description: [
        "L’incarnation de l’élégance discrète, parfaite pour toutes les occasions — bureau, rendez-vous, événement ou balade en ville. Le tissu structuré et la coupe parfaite créent une allure raffinée sans effort.",
        "Tissu : laine naturelle de qualité supérieure offrant chaleur, confort et douceur au toucher.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "Veste : silhouette élégante avec une ligne d’épaule douce et des revers classiques.",
        "• Fermeture à double bouton avec une brillance subtile — un accent qui rend la veste plus luxueuse.",
        "Pantalon : silhouette droite et allongée, qui allonge visuellement les jambes et crée une belle verticalité.",
        "• Plis : soigneusement repassés à l’avant pour un effet élancé et soigné."
      ],
      colors: ["vert foncé"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм \"Clariss\" з брюками",
      description: [
        "Це втілення стриманої елегантності, яка працює на вас у будь-якій ситуації: офіс, зустріч, подія чи прогулянка містом. Структурна тканина та ідеальний крій створюють образ, який виглядає дорого без зайвих зусиль.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "Жакет: елегантний силует із м’якою лінією плеча та класичними лацканами.",
        "• Подвійна застібка на ґудзики з елегантним блиском — акцент, який робить жакет візуально дорожчим.",
        "Брюки: Прямий подовжений силует, що візуально подовжує ноги та створює акуратну вертикаль ліній.",
        "• Стрілки: акуратно прокладені спереду — для ефекту стрункості та доглянутого вигляду."
      ],
      colors: ["темно-зелений"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм \"Clariss\" с брюками",
      description: [
        "Воплощение сдержанной элегантности, подходящее для любой ситуации: офис, встреча, мероприятие или прогулка по городу. Структурированная ткань и идеальный крой создают образ, который выглядит дорого без усилий.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "Жакет: элегантный силуэт с мягкой линией плеч и классическими лацканами.",
        "• Двойная застёжка на пуговицы с лёгким блеском — акцент, делающий жакет визуально дороже.",
        "Брюки: прямой удлинённый силуэт, визуально удлиняющий ноги и создающий аккуратную вертикаль линий.",
        "• Стрелки: аккуратно проложены спереди — для эффекта стройности и ухоженности."
      ],
      colors: ["тёмно-зелёный"]
    }
  }
},

{
  id: 230,
  price: 2060,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1751,
  sku: "99371",
  size: "XS S M L XL",
  category: "Pants",
  image: "/Pants/Clariss Pants/10.avif",
  images: [
    // "/Pants/Clariss Pants/2.avif",
    // "/Pants/Clariss Pants/3.avif",
    // "/Pants/Clariss Pants/4.avif",
    // "/Pants/Clariss Pants/5.avif",
    // "/Pants/Clariss Pants/6.avif",
    // "/Pants/Clariss Pants/7.avif",
    // "/Pants/Clariss Pants/8.avif",
    // "/Pants/Clariss Pants/9.avif",
    // "/Pants/Clariss Pants/10.avif",
    "/Pants/Clariss Pants/11.avif",
    "/Pants/Clariss Pants/12.avif",
    "/Pants/Clariss Pants/13.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Pants",
      name: "Clariss Pants",
      description: [
        "Palazzo trousers with a deep rise and refined pleats add elegant softness and visually elongate the legs.",
        "Perfect both as part of a suit or worn separately — with shirts, turtlenecks, sweaters, or blazers.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "• Fit: classic mid-rise that comfortably fits the waist without constriction.",
        "• Silhouette: wide palazzo with a smooth flare from the hips.",
        "• Pleats: carefully pressed in the front for a sleek and elongated look."
      ],
      colors: ["dark green"]
    },
    FR: {
      category: "Pantalons",
      name: "Pantalon Clariss",
      description: [
        "Le pantalon palazzo à taille moyenne et plis soignés apporte douceur et élégance tout en allongeant visuellement les jambes.",
        "Parfait porté avec une veste ou séparément — avec des chemises, cols roulés, pulls ou vestes.",
        "Tissu : laine naturelle de qualité supérieure offrant chaleur, confort et douceur au toucher.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "• Taille : classique, confortable sans comprimer la taille.",
        "• Silhouette : large palazzo, légèrement évasée à partir des hanches.",
        "• Plis : soigneusement repassés à l’avant pour un effet élancé et soigné."
      ],
      colors: ["vert foncé"]
    },
    UA: {
      category: "Брюки",
      name: "Брюки \"Clariss\"",
      description: [
        "Брюки палаццо з глибокою посадкою та доглянутими стрілками додають образу елегантної м’якості та візуально подовжують ноги.",
        "Ідеально працюють як у комплекті з тренчем, так і окремо — з сорочками, водолазками, светрами та жакетами.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "• Посадка: класична середня посадка, що комфортно фіксується на талії та не перетискає.",
        "• Силует: широкі палаццо з плавним розширенням від стегон.",
        "• Стрілки: акуратно прокладені спереду — для ефекту стрункості та доглянутого вигляду."
      ],
      colors: ["темно-зелений"]
    },
    RU: {
      category: "Брюки",
      name: "Брюки \"Clariss\"",
      description: [
        "Брюки палаццо с глубокой посадкой и аккуратными стрелками придают образу мягкую элегантность и визуально удлиняют ноги.",
        "Идеально сочетаются как с тренчем, так и отдельно — с рубашками, водолазками, свитерами и жакетами.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "• Посадка: классическая средняя, комфортно фиксируется на талии без сжатия.",
        "• Силуэт: широкие палаццо с плавным расширением от бёдер.",
        "• Стрелки: аккуратно проложены спереди — для эффекта стройности и ухоженности."
      ],
      colors: ["тёмно-зелёный"]
    }
  }
},

{
  id: 229,
  price: 1700,
  isTop: true,
  isNew: false,
  //   isSpecialOffer: true,
  // discountPrice: 1445,
  sku: "99370",
  size: "XS S M L XL",
  category: "Sweaters",
  image: "/Sweaters/Soft Sweater/1.avif",
  images: [
    "/Sweaters/Soft Sweater/2.avif",
    "/Sweaters/Soft Sweater/3.avif",
    "/Sweaters/Soft Sweater/4.avif",
    "/Sweaters/Soft Sweater/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Sweaters",
      name: "Soft Sweater",
      description: [
        "Minimalist, stylish, and incredibly cozy — this sweater is designed for those who seek the perfect balance between comfort and elegance.",
        "Fabric: Wool knitwear [ Composition: 65% wool ]",
        "Details:",
        "• Voluminous silhouette with graceful draping — flows beautifully without clinging to the body.",
        "• Unique sleeve design: soft, wide, with a ‘flutter’ effect that adds a fashionable accent and makes the piece distinctive.",
        "• Perfect neckline fit — a soft round cut that looks beautiful both on its own and layered."
      ],
      colors: ["white"]
    },
    FR: {
      category: "Pulls",
      name: "Pull Soft",
      description: [
        "Minimaliste, élégant et incroyablement confortable — ce pull est conçu pour celles qui recherchent l’équilibre parfait entre confort et élégance.",
        "Tissu : tricot de laine [ Composition : 65% laine ]",
        "Détails :",
        "• Silhouette ample avec un joli drapé — tombe naturellement sans mouler la silhouette.",
        "• Forme de manche unique : douce, large, avec un effet ‘ailé’ qui ajoute une touche mode et rend le modèle unique.",
        "• Encolure ronde douce, idéale portée seule ou en superposition."
      ],
      colors: ["blanc"]
    },
    UA: {
      category: "Светри",
      name: "Светр \"Soft\"",
      description: [
        "Лаконічний, стильний і водночас надзвичайно затишний — цей светр створений для тих, хто шукає ідеальний баланс між комфортом та елегантністю.",
        "Тканина: Вовняний трикотаж [ Склад: 65% вовни ]",
        "Деталі:",
        "• Обʼємний силует із красивою драпіровкою — не обтягує, а струмиться по фігурі.",
        "• Особлива форма рукава: мʼякі, широкі, з ефектом «летючості», що додає виробу модного акценту та робить його унікальним.",
        "• Ідеальна посадка по горловині — мʼякий круглий виріз, який красиво виглядає як самостійно, так і в багатошарових образах."
      ],
      colors: ["білий"]
    },
    RU: {
      category: "Свитера",
      name: "Свитер \"Soft\"",
      description: [
        "Лаконичный, стильный и при этом невероятно уютный — этот свитер создан для тех, кто ищет идеальный баланс между комфортом и элегантностью.",
        "Ткань: шерстяной трикотаж [ Состав: 65% шерсти ]",
        "Детали:",
        "• Объёмный силуэт с красивой драпировкой — мягко струится по фигуре, не облегая.",
        "• Особая форма рукавов: мягкие, широкие, с эффектом «лёгкости», добавляющим модный акцент и индивидуальность.",
        "• Идеальная посадка по горловине — мягкий круглый вырез, красиво смотрится как самостоятельно, так и в многослойных образах."
      ],
      colors: ["белый"]
    }
  }
},


{
  id: 228,
  price: 2060,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1751,
  sku: "99369",
  size: "XS S M L XL",
  category: "Pants",
  image: "/Pants/Urban Pants/1.avif",
  images: [
    "/Pants/Urban Pants/2.avif",
    "/Pants/Urban Pants/3.avif",
    "/Pants/Urban Pants/4.avif",
    "/Pants/Urban Pants/5.avif",
    "/Pants/Urban Pants/6.avif",
    "/Pants/Urban Pants/7.avif",
    "/Pants/Urban Pants/8.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Pants",
      name: "Urban Pants",
      description: [
        "Palazzo trousers with a deep rise and refined pleats add elegant softness and visually elongate the legs.",
        "Perfect both as part of a suit with the trench or worn separately — with shirts, turtlenecks, sweaters, or blazers.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "• Fit: classic mid-rise that comfortably fits the waist without constriction.",
        "• Silhouette: wide palazzo with a smooth flare from the hips.",
        "• Pleats: carefully pressed in the front for a sleek and elongated look."
      ],
      colors: ["dark chocolate", "gray"]
    },
    FR: {
      category: "Pantalons",
      name: "Pantalon Urban",
      description: [
        "Le pantalon palazzo à taille moyenne et plis soignés apporte douceur et élégance tout en allongeant visuellement les jambes.",
        "Parfait porté avec le trench ou séparément — avec des chemises, cols roulés, pulls ou vestes.",
        "Tissu : laine naturelle de qualité supérieure offrant chaleur, confort et douceur au toucher.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "• Taille : classique, confortable sans comprimer la taille.",
        "• Silhouette : large palazzo, légèrement évasée à partir des hanches.",
        "• Plis : soigneusement repassés à l’avant pour un effet élancé et soigné."
      ],
      colors: ["chocolat foncé", "gris"]
    },
    UA: {
      category: "Брюки",
      name: "Брюки \"Urban\"",
      description: [
        "Брюки палаццо з глибокою посадкою та доглянутими стрілками додають образу елегантної м’якості та візуально подовжують ноги.",
        "Ідеально працюють як у комплекті з тренчем, так і окремо — з сорочками, водолазками, светрами та жакетами.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "• Посадка: класична середня посадка, що комфортно фіксується на талії та не перетискає.",
        "• Силует: широкі палаццо з плавним розширенням від стегон.",
        "• Стрілки: акуратно прокладені спереду — для ефекту стрункості та доглянутого вигляду."
      ],
      colors: ["темний шоколад", "сірий"]
    },
    RU: {
      category: "Брюки",
      name: "Брюки \"Urban\"",
      description: [
        "Брюки палаццо с глубокой посадкой и аккуратными стрелками придают образу мягкую элегантность и визуально удлиняют ноги.",
        "Идеально сочетаются как с тренчем, так и отдельно — с рубашками, водолазками, свитерами и жакетами.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "• Посадка: классическая средняя, комфортно фиксируется на талии без сжатия.",
        "• Силуэт: широкие палаццо с плавным расширением от бёдер.",
        "• Стрелки: аккуратно проложены спереди — для эффекта стройности и ухоженности."
      ],
      colors: ["тёмный шоколад", "серый"]
    }
  }
},

{
  id: 227,
  price: 3500,
  isTop: false,
  isNew: false,
  //   isSpecialOffer: true,
  // discountPrice: 2975,
  sku: "99368",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Urban Mini Trench/1.avif",
  images: [
    "/Jackets/Urban Mini Trench/2.avif",
    "/Jackets/Urban Mini Trench/3.avif",
    "/Jackets/Urban Mini Trench/4.avif",
    "/Jackets/Urban Mini Trench/5.avif",
    "/Jackets/Urban Mini Trench/6.avif",
    "/Jackets/Urban Mini Trench/7.avif",
    "/Jackets/Urban Mini Trench/8.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "Urban Mini Trench",
      description: [
        "The cropped trench coat sculpts the silhouette, accentuates the waist, and creates long-leg proportions.",
        "Perfect for office outfits, smart casual looks, city strolls — easily pairs with turtlenecks, tops, or knitwear.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "• Oversized silhouette with a soft yet structured volume.",
        "• Shoulder area: softly contoured with accent lines that enhance the refined shape.",
        "• Collar: wide trench-style lapels that add a sense of structure and sophistication."
      ],
      colors: ["dark chocolate", "gray"]
    },
    FR: {
      category: "Vestes",
      name: "Mini Trench Urban",
      description: [
        "Le trench court sculpte la silhouette, souligne la taille et crée des proportions allongeantes.",
        "Parfait pour les looks de bureau, le smart casual ou les promenades en ville — s’associe facilement avec un col roulé, un haut ou un tricot.",
        "Tissu : laine naturelle de qualité supérieure offrant chaleur, confort et douceur au toucher.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "• Silhouette oversize avec volume souple mais structuré.",
        "• Épaules : lignes douces et marquées ajoutant une touche raffinée.",
        "• Col : larges revers de style trench qui apportent structure et élégance."
      ],
      colors: ["chocolat foncé", "gris"]
    },
    UA: {
      category: "Жакети",
      name: "Міні тренч \"Urban\"",
      description: [
        "Вкорочений тренч моделює силует, виділяє талію та створює пропорції «ноги від вух».",
        "Тренч підходить для офісних образів, smart casual, прогулянок містом та поєднується з водолазками, топами, гольфами, трикотажем.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "• Oversize силует з м’яким, але структурним об’ємом.",
        "• Плечова зона: м'яко окреслена, з акцентованими лініями, що додають силуету вишуканого вигляду.",
        "• Комір: широкий тренчовий лацкан, що додає образу статусності та графічності."
      ],
      colors: ["темний шоколад", "сірий"]
    },
    RU: {
      category: "Жакеты",
      name: "Мини-тренч \"Urban\"",
      description: [
        "Укороченный тренч моделирует силуэт, подчёркивает талию и создаёт пропорции «ноги от ушей».",
        "Подходит для офисных, smart casual и городских образов — сочетается с водолазками, топами и трикотажем.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "• Oversize силуэт с мягким, но структурным объёмом.",
        "• Плечевая зона: мягко очерчена, с акцентными линиями для утончённого силуэта.",
        "• Воротник: широкий тренчевый лацкан, добавляющий образу статусности и графичности."
      ],
      colors: ["тёмный шоколад", "серый"]
    }
  }
},

{
  id: 226,
  price: 5560,
  isTop: false,
  isNew: false,
  //   isSpecialOffer: true,
  // discountPrice: 4726,
  sku: "99367",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Urban Suit/1.avif",
  images: [
    "/Costumes/Urban Suit/2.avif",
    "/Costumes/Urban Suit/3.avif",
    "/Costumes/Urban Suit/4.avif",
    "/Costumes/Urban Suit/5.avif",
    "/Costumes/Urban Suit/6.avif",
    "/Costumes/Urban Suit/7.avif",
    "/Costumes/Urban Suit/8.avif",
    "/Costumes/Urban Suit/9.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Urban Suit",
      description: [
        "The set perfectly holds its shape, looks premium from every angle, and adds a touch of Parisian chic to your look.",
        "The cropped trench sculpts the silhouette, accentuates the waist, and creates the illusion of longer legs. The palazzo trousers with a deep rise and sharp pleats bring elegant softness and elongate the legs visually.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "Trench: Oversized silhouette with soft yet structured volume.",
        "• Shoulder area: softly contoured with defined lines that enhance the refined shape.",
        "Pants: Classic mid-rise fit, comfortably fixed at the waist without constriction.",
        "• Wide palazzo silhouette with smooth expansion from the hips."
      ],
      colors: ["dark chocolate", "gray"]
    },
    FR: {
      category: "Costumes",
      name: "Costume Urban",
      description: [
        "L’ensemble garde parfaitement sa forme, offre un aspect premium sous tous les angles et ajoute une touche de chic parisien à votre look.",
        "Le trench court sculpte la silhouette, souligne la taille et allonge visuellement les jambes. Le pantalon palazzo à taille moyenne et plis marqués apporte douceur et élégance au mouvement.",
        "Tissu : laine naturelle de qualité supérieure offrant chaleur, confort et douceur au toucher.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "Trench : silhouette oversize avec volume structuré mais souple.",
        "• Épaules : ligne douce et définie, ajoutant de la sophistication au look.",
        "Pantalon : taille moyenne classique, confortable à la taille.",
        "• Silhouette large palazzo, légèrement évasée à partir des hanches."
      ],
      colors: ["chocolat foncé", "gris"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм \"Urban\"",
      description: [
        "Комплект ідеально тримає форму, виглядає преміально з будь-якого ракурсу та додає образу харизму французького шику.",
        "Вкорочений тренч моделює силует, виділяє талію та створює пропорції «ноги від вух». Брюки палаццо з глибокою посадкою та доглянутими стрілками додають образу елегантної м’якості та візуально подовжують ноги.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "Тренч: oversize силует з м’яким, але структурним об’ємом.",
        "• Плечова зона: м'яко окреслена, з акцентованими лініями, що додають силуету вишуканого вигляду.",
        "Брюки: класична середня посадка, що комфортно фіксується на талії та не перетискає.",
        "• Широкі палаццо з плавним розширенням від стегон."
      ],
      colors: ["темний шоколад", "сірий"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм \"Urban\"",
      description: [
        "Комплект идеально держит форму, выглядит премиально под любым углом и добавляет образу харизму французского шика.",
        "Укороченный тренч моделирует силуэт, подчёркивает талию и создаёт пропорции «ноги от ушей». Брюки палаццо с глубокой посадкой и ровными стрелками придают мягкость и визуально удлиняют ноги.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "Тренч: oversize силуэт с мягким, но структурным объёмом.",
        "• Плечевая зона: мягко очерчена, с акцентированными линиями для утончённого вида.",
        "Брюки: классическая средняя посадка, удобно фиксируется на талии.",
        "• Широкие палаццо с плавным расширением от бёдер."
      ],
      colors: ["тёмный шоколад", "серый"]
    }
  }
},  


{
  id: 225,
  price: 1900,
  isTop: false,
  isNew: false,
  //   isSpecialOffer: true,
  // discountPrice: 1615,
  sku: "99366",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Clariss Skirt/5.avif",
  images: [
    // "/Skirts/Clariss Skirt/2.avif",
    // "/Skirts/Clariss Skirt/3.avif",
    // "/Skirts/Clariss Skirt/4.avif",
    // "/Skirts/Clariss Skirt/5.avif",
    "/Skirts/Clariss Skirt/6.avif",
    "/Skirts/Clariss Skirt/7.avif",
    "/Skirts/Clariss Skirt/8.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Clariss Skirt",
      description: [
        "A midi skirt with deep pleats creates a soft volume and accentuates the waist.",
        "It looks elegant both paired with a blazer and with a turtleneck or silk blouse.",
        "Easily adaptable for various seasons — from winter to spring.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "• Deep pleats at the front",
        "• Length: below the knee",
        "• Waistband emphasizing the waist"
      ],
      colors: ["dark green"]
    },
    FR: {
      category: "Jupes",
      name: "Jupe Clariss",
      description: [
        "Une jupe midi à plis profonds crée un léger volume et souligne la taille.",
        "Elle se porte avec élégance aussi bien avec une veste qu’avec un col roulé ou un chemisier en soie.",
        "Facile à adapter selon les saisons — de l’hiver au printemps.",
        "Tissu : laine naturelle de qualité supérieure offrant chaleur, confort et douceur au toucher.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "• Plis profonds sur le devant",
        "• Longueur : sous le genou",
        "• Ceinture soulignant la taille"
      ],
      colors: ["vert foncé"]
    },
    UA: {
      category: "Спідниці",
      name: "Спідниця \"Clariss\"",
      description: [
        "Міді-спідниця з глибокими складками створює легкий об’єм і підкреслює талію.",
        "Виглядає елегантно як у парі з жакетом, так і з гольфом чи шовковою блузою.",
        "Легко адаптується під різні сезони — від зими до весни.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "• Глибокі складки спереду",
        "• Довжина: нижче коліна",
        "• Пояс на талії"
      ],
      colors: ["темно-зелений"]
    },
    RU: {
      category: "Юбки",
      name: "Юбка \"Clariss\"",
      description: [
        "Юбка миди с глубокими складками создаёт лёгкий объём и подчёркивает талию.",
        "Элегантно смотрится как в паре с жакетом, так и с гольфом или шёлковой блузой.",
        "Легко адаптируется под разные сезоны — от зимы до весны.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "• Глубокие складки спереди",
        "• Длина: ниже колена",
        "• Пояс на талии"
      ],
      colors: ["тёмно-зелёный"]
    }
  }
},


{
  id: 224,
  price: 3500,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 2975,
  sku: "99365",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Clariss Jacket/5.avif",
  images: [
    // "/Jackets/Clariss Jacket/2.avif",
    // "/Jackets/Clariss Jacket/3.avif",
    // "/Jackets/Clariss Jacket/4.avif",
    // "/Jackets/Clariss Jacket/5.avif",
    "/Jackets/Clariss Jacket/6.avif",
    "/Jackets/Clariss Jacket/7.avif",
    "/Jackets/Clariss Jacket/8.avif",
    // "/Jackets/Clariss Jacket/9.avif",
    // "/Jackets/Clariss Jacket/10.avif",
    // "/Jackets/Clariss Jacket/11.avif",
    // "/Jackets/Clariss Jacket/12.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "Clariss Blazer",
      description: [
        "Tailored blazer that enhances your femininity with precision lines.",
        "Features a two-button closure and two front pockets. Perfectly pairs with the skirt from the same collection.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "• Oversized fit",
        "• Two front buttons",
        "• Classic lapel design"
      ],
      colors: ["dark green"]
    },
    FR: {
      category: "Vestes",
      name: "Veste Clariss",
      description: [
        "Veste ajustée qui souligne la féminité avec des lignes précises.",
        "Se ferme par deux boutons et comporte deux poches avant. S’associe parfaitement avec la jupe de la même collection.",
        "Tissu : laine naturelle de qualité supérieure offrant chaleur, confort et douceur au toucher.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "• Coupe oversize",
        "• Deux boutons sur le devant",
        "• Revers classiques"
      ],
      colors: ["vert foncé"]
    },
    UA: {
      category: "Жакети",
      name: "Жакет \"Clariss\"",
      description: [
        "Виточений крій формує вашу жіночність, застібається на два ґудзики та має 2 кишені.",
        "Ідеально поєднується зі спідницею з колекції.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "• Oversize крій",
        "• Два ґудзики спереду",
        "• Лацкани класичної форми"
      ],
      colors: ["темно-зелений"]
    },
    RU: {
      category: "Жакеты",
      name: "Жакет \"Clariss\"",
      description: [
        "Приталенный крой подчеркивает женственность, застёгивается на две пуговицы и имеет два кармана.",
        "Идеально сочетается с юбкой из этой коллекции.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "• Oversize крой",
        "• Две пуговицы спереди",
        "• Классические лацканы"
      ],
      colors: ["тёмно-зелёный"]
    }
  }
},

{
  id: 223,
  price: 5400,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 4590,
  sku: "99364",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Clariss Suit/6.avif",
  images: [
    // "/Costumes/Clariss Suit/2.avif",
    // "/Costumes/Clariss Suit/3.avif",
    // "/Costumes/Clariss Suit/4.avif",
    // "/Costumes/Clariss Suit/5.avif",
    // "/Costumes/Clariss Suit/6.avif",
    "/Costumes/Clariss Suit/7.avif",
    "/Costumes/Clariss Suit/8.avif",
    "/Costumes/Clariss Suit/9.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Clariss Suit",
      description: [
        "Modern classics at its finest. The “Clariss” suit embodies elegance and architectural precision in tailoring.",
        "The soft wool fabric holds its shape, while the light beige tone adds refined sophistication. The set includes an oversized blazer and a midi skirt with deep pleats, creating a graceful silhouette.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "Blazer: Oversized cut",
        "• Two front buttons",
        "Skirt: Deep pleats at the front",
        "• Length: below the knee",
        "• Waistband accentuating the waist"
      ],
      colors: ["dark green"]
    },
    FR: {
      category: "Costumes",
      name: "Costume Clariss",
      description: [
        "Classique moderne dans sa forme la plus élégante. Le costume « Clariss » incarne l’élégance et la précision architecturale du tailoring.",
        "Le tissu en laine douce garde sa forme, tandis que la teinte beige clair ajoute une touche de raffinement. L’ensemble comprend une veste oversize et une jupe midi à plis profonds, créant une silhouette gracieuse.",
        "Tissu : laine naturelle de qualité supérieure offrant chaleur, confort et douceur au toucher.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "Veste : coupe oversize",
        "• Deux boutons sur le devant",
        "Jupe : plis profonds sur le devant",
        "• Longueur : sous le genou",
        "• Ceinture soulignant la taille"
      ],
      colors: ["vert foncé"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм \"Clariss\"",
      description: [
        "Сучасна класика в найкращому виконанні. Костюм “Clariss” — це втілення елегантності та архітектурної точності крою.",
        "М’яка вовняна тканина тримає форму, а світло-бежевий відтінок додає образу благородності. Комплект складається з oversize жакету та спідниці міді зі складками, які створюють витончений силует.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "Жакет: Oversize крій",
        "• Два ґудзики спереду",
        "Спідниця: Глибокі складки спереду",
        "• Довжина: нижче коліна",
        "• Пояс на талії"
      ],
      colors: ["темно-зелений"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм \"Clariss\"",
      description: [
        "Современная классика в лучшем исполнении. Костюм “Clariss” — воплощение элегантности и архитектурной точности кроя.",
        "Мягкая шерстяная ткань держит форму, а светло-бежевый оттенок придаёт образу благородство. Комплект состоит из oversize жакета и юбки миди с глубокими складками, создающими утончённый силуэт.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "Жакет: Oversize крой",
        "• Две пуговицы спереди",
        "Юбка: глубокие складки спереди",
        "• Длина: ниже колена",
        "• Пояс на талии"
      ],
      colors: ["тёмно-зелёный"]
    }
  }
},

{
  id: 222,
  price: 2060,
  isTop: true,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1751,
  sku: "99363",
  size: "XS S M L XL",
  category: "Pants",
  image: "/Pants/Wool Pants/1.avif",
  images: [
    "/Pants/Wool Pants/2.avif",
    "/Pants/Wool Pants/3.avif",
    "/Pants/Wool Pants/4.avif",
    "/Pants/Wool Pants/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Pants",
      name: "Wool Pants",
      description: [
        "Classic straight pants with a high waist and crisp pleats.",
        "The elongated silhouette visually elongates the figure, while the versatile gray color pairs effortlessly with any wardrobe tone.",
        "Fabric: Premium-quality natural wool providing warmth, comfort, and a pleasant tactile feel.",
        "[ Composition: 75% wool ]"
      ],
      colors: ["gray"]
    },
    FR: {
      category: "Pantalons",
      name: "Pantalon en laine",
      description: [
        "Pantalon droit classique à taille haute et plis nets.",
        "La silhouette allongée affine visuellement la silhouette, tandis que la couleur grise polyvalente se marie facilement avec toutes les teintes de la garde-robe.",
        "Tissu : laine naturelle de qualité supérieure offrant chaleur, confort et douceur au toucher.",
        "[ Composition : 75% laine ]"
      ],
      colors: ["gris"]
    },
    UA: {
      category: "Брюки",
      name: "Вовняні брюки",
      description: [
        "Прямі класичні брюки з високою посадкою та чіткою стрілкою.",
        "Подовжений силует візуально витягує фігуру, а універсальний сірий колір легко комбінується з будь-якими відтінками гардеробу.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]"
      ],
      colors: ["сірий"]
    },
    RU: {
      category: "Брюки",
      name: "Шерстяные брюки",
      description: [
        "Классические прямые брюки с высокой посадкой и чёткой стрелкой.",
        "Удлинённый силуэт визуально вытягивает фигуру, а универсальный серый цвет легко сочетается с любыми оттенками гардероба.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]"
      ],
      colors: ["серый"]
    }
  }
},





  {
  id: 205,
  price: 2100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1785,
  sku: "99347",
  size: "XS S M L XL",
  category: "Pants",
  title: "Шкіряні брюки з поясом",
  image: "/Pants/LeatherPants Belt/6.avif",
  images: [
    "/Pants/LeatherPants Belt/6.avif",
    "/Pants/LeatherPants Belt/7.avif",
    "/Pants/LeatherPants Belt/8.avif",
    "/Pants/LeatherPants Belt/9.avif",
    "/Pants/LeatherPants Belt/1.avif",
    "/Pants/LeatherPants Belt/2.avif",
    "/Pants/LeatherPants Belt/3.avif",
    "/Pants/LeatherPants Belt/4.avif",
    "/Pants/LeatherPants Belt/5.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["карамель", "мокко"],
  translations: {
    EN: {
      category: "Pants",
      name: "LeatherPants Belt",
      description: [
        "Pants that combine comfort, elegance, and confidence.",
        "Made from dense eco-leather, they shape a perfect silhouette and add depth to the look.",
        "The high waist emphasizes the figure, while the straight elongated cut visually lengthens the legs.",
        "Fabric: high-quality eco-leather on a suede base (stretchy, does not crack).",
        "Details:",
        "• High waist with double button fastening",
        "• Decorative vertical seams at the front create an elongated silhouette effect"
      ],
      colors: ["caramel", "mocha"]
    },
    FR: {
      category: "Pantalons",
      name: "Pantalon en cuir avec ceinture",
      description: [
        "Un pantalon qui allie confort, élégance et assurance.",
        "Confectionné en cuir écologique dense, il sculpte une silhouette parfaite et ajoute de la profondeur à la tenue.",
        "La taille haute met en valeur la silhouette, tandis que la coupe droite et allongée allonge visuellement les jambes.",
        "Tissu : cuir écologique de haute qualité sur base en daim (extensible, ne se fissure pas).",
        "Détails :",
        "• Taille haute avec double fermeture à boutons",
        "• Coutures verticales décoratives à l'avant pour un effet de silhouette allongée"
      ],
      colors: ["caramel", "moka"]
    },
    UA: {
      category: "Брюки",
      name: "Шкіряні брюки з поясом",
      description: [
        "Брюки, що поєднують комфорт, елегантність і впевненість.",
        "Створені зі щільної екошкіри, вони формують ідеальний силует і додають образу глибини.",
        "Висока посадка підкреслює талію, а прямий крій із подовженою лінією візуально видовжує ноги.",
        "Тканина: якісна екошкіра на замшевій основі (стречева, не тріскається).",
        "Деталі:",
        "• Висока посадка з подвоєною застібкою на ґудзики",
        "• Декоративні вертикальні шви спереду — ефект витягнутого силуету"
      ],
      colors: ["карамель", "мокко"]
    },
    RU: {
      category: "Брюки",
      name: "Кожаные брюки с поясом",
      description: [
        "Брюки, сочетающие комфорт, элегантность и уверенность.",
        "Созданы из плотной экокожи, формируют идеальный силуэт и добавляют глубины образу.",
        "Высокая посадка подчёркивает талию, а прямой удлинённый крой визуально вытягивает ноги.",
        "Ткань: качественная экокожа на замшевой основе (стрейчевая, не трескается).",
        "Детали:",
        "• Высокая посадка с двойной застёжкой на пуговицы",
        "• Декоративные вертикальные швы спереди — эффект вытянутого силуэта"
      ],
      colors: ["карамель", "мокко"]
    }
  }
},






//   {
//   id: 218,
//   price: 2000,
//   isTop: false,
//   isNew: true,
//   // isSpecialOffer: true,
//   // discountPrice: 1700,
//   sku: "99360",
//   size: "XS S M L XL",
//   category: "Skirts",
//   image: "/Skirts/Herringbone Wool/1.avif",
//   images: [
//     "/Skirts/Herringbone Wool/2.avif",
//     "/Skirts/Herringbone Wool/3.avif",
//     "/Skirts/Herringbone Wool/4.avif",
//     "/Skirts/Herringbone Wool/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Skirts",
//       name: "Herringbone Wool Skirt",
//       description: [
//         "The embodiment of modern femininity with an architectural accent.",
//         "This skirt combines classic style and strong design: the soft herringbone-patterned wool contrasts beautifully with glossy leather inserts.",
//         "Fabric: Premium-quality natural wool providing warmth, coziness, and a pleasant tactile feel.",
//         "[ Composition: 75% wool ]",
//         "Details:",
//         "• A structured eco-leather waistband creates a corset effect and emphasizes the waist.",
//         "• Geometric leather inserts near the pockets form a defined silhouette and add graphic sophistication.",
//         "• A neat front slit ensures freedom of movement and adds elegant dynamism."
//       ],
//       colors: ["gray herringbone"]
//     },
//     FR: {
//       category: "Jupes",
//       name: "Jupe en laine à chevrons",
//       description: [
//         "L’incarnation de la féminité moderne avec une touche architecturale.",
//         "Cette jupe combine le style classique et la force du design : la laine douce à motif chevrons contraste harmonieusement avec les inserts en cuir brillant.",
//         "Tissu : laine naturelle de qualité supérieure offrant chaleur, confort et douceur au toucher.",
//         "[ Composition : 75% laine ]",
//         "Détails :",
//         "• Ceinture structurée en cuir écologique créant un effet corset et soulignant la taille.",
//         "• Inserts géométriques en cuir près des poches formant une silhouette nette et graphique.",
//         "• Fente avant discrète pour une liberté de mouvement élégante."
//       ],
//       colors: ["gris chevrons"]
//     },
//     UA: {
//       category: "Спідниці",
//       name: "Вовняна спідниця у ялинку",
//       description: [
//         "Втілення сучасної жіночності з архітектурним акцентом.",
//         "Спідниця поєднує в собі класику та силу дизайну: м’яка вовняна тканина у візерунку “ялинка” гармонійно контрастує з глянцевими шкіряними вставками.",
//         "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
//         "[ Склад: 75% вовни ]",
//         "Деталі:",
//         "• Структурний пояс із екошкіри створює ефект корсету та підкреслює талію.",
//         "• Геометричні шкіряні вставки біля кишень формують чіткий силует і додають модній графічності.",
//         "• Акуратний розріз спереду забезпечує свободу рухів і додає елегантної динаміки."
//       ],
//       colors: ["сіра ялинка"]
//     },
//     RU: {
//       category: "Юбки",
//       name: "Шерстяная юбка в ёлочку",
//       description: [
//         "Воплощение современной женственности с архитектурным акцентом.",
//         "Юбка сочетает классику и силу дизайна: мягкая шерстяная ткань с узором «ёлочка» гармонично контрастирует с глянцевыми кожаными вставками.",
//         "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло и комфорт.",
//         "[ Состав: 75% шерсти ]",
//         "Детали:",
//         "• Структурный пояс из экокожи создаёт эффект корсета и подчёркивает талию.",
//         "• Геометрические вставки из кожи у карманов формируют чёткий силуэт и добавляют графичности.",
//         "• Аккуратный разрез спереди обеспечивает свободу движений и добавляет элегантной динамики."
//       ],
//       colors: ["серая ёлочка"]
//     }
//   }
// },

    {
  id: 171,
  price: 2300,
  isTop: true,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1955,
  sku: "98824",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Satin Slip Dress/5.avif",
  images: [
    // "/Dress/Satin Slip Dress/2.avif",
    //   {
    //   type: "video",
    //   src: "/Dress/Satin Slip Dress/IMG_8623.mp4",
    //   poster: "/Dress/Satin Slip Dress/1.avif",
    // },
    // "/Dress/Satin Slip Dress/3.avif",
    // "/Dress/Satin Slip Dress/4.avif",
    // "/Dress/Satin Slip Dress/5.avif",
    "/Dress/Satin Slip Dress/6.avif",
    "/Dress/Satin Slip Dress/7.avif",
    "/Dress/Satin Slip Dress/8.avif",
    "/Dress/Satin Slip Dress/9.avif",
    "/Dress/Satin Slip Dress/10.avif",
    "/Dress/Satin Slip Dress/11.avif",
    "/Dress/Satin Slip Dress/12.avif",
    "/Dress/Satin Slip Dress/13.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Satin Slip Dress",
      description: [
        "Elegant and sensual dress combining luxurious satin with delicate lace. Perfect for women who value lightness, refinement, and modern femininity.",
        "Fabric: Premium satin, beautifully flowing, lightweight, breathable, and pleasant to the touch.",
        "Details:",
        "• Slip dress silhouette with a free-flowing shape",
        "• V-neckline adorned with delicate matching lace",
        "• Hem decorated with a wide lace insert adding lightness and elegance"
      ],
      colors: ["black", "gray"]
    },
    FR: {
      category: "Robes",
      name: "Robe satinée",
      description: [
        "Robe élégante et sensuelle combinant satin luxueux et dentelle délicate. Parfaite pour les femmes qui apprécient légèreté, raffinement et féminité moderne.",
        "Tissu : satin premium, fluide, léger, respirant et agréable au toucher.",
        "Détails :",
        "• Silhouette fluide type 'slip dress'",
        "• Encolure en V ornée de dentelle délicate assortie",
        "• Base décorée d'une large insertion en dentelle apportant légèreté et élégance"
      ],
      colors: [ "noir"]
    },
    UA: {
      category: "Сукні",
      name: "Сатинова сукня-комбінація",
      description: [
        "Елегантна та чуттєва сукня, що поєднує розкіш сатину з ніжністю мережива. Для жінок, які цінують легкість, витонченість і сучасну жіночність.",
        "Тканина: Сатин преміум-класу, який красиво переливається, легкий, дихаючий та приємний до тіла.",
        "Деталі:",
        "• Фасон «комбінація» з вільним, плавним силуетом",
        "• V-подібний виріз горловини, оздоблений делікатним мереживом у тон",
        "• Низ сукні прикрашений широкою вставкою з мережива для легкості та елегантності"
      ],
      colors: ["чорна", "сірий"]
    },
    RU: {
      category: "Платья",
      name: "Сатиновое платье-комбинация",
      description: [
        "Элегантное и чувственное платье, сочетание роскошного сатина и нежного кружева. Для женщин, ценящих лёгкость, утончённость и современную женственность.",
        "Ткань: Сатин премиум-класса, красиво струится, лёгкий, дышащий и приятный на ощупь.",
        "Детали:",
        "• Силуэт 'комбинация' с плавным свободным кроем",
        "• V-образный вырез, украшенный деликатным кружевом в тон",
        "• Низ платья с широкой кружевной вставкой для лёгкости и элегантного акцента"
      ],
      colors: ["чёрная"]
    }
  }
},

//   {
//   id: 217,
//   price: 2060,
//   isTop: false,
//   isNew: true,
//   // isSpecialOffer: true,
//   // discountPrice: 1751,
//   sku: "99359",
//   size: "XS S M L XL",
//   category: "Pants",
//   image: "/Pants/Camel Pants/1.avif",
//   images: [
//     "/Pants/Camel Pants/2.avif",
//     "/Pants/Camel Pants/3.avif",
//     "/Pants/Camel Pants/4.avif",
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Pants",
//       name: "Camel Pants",
//       description: [
//         "Palazzo pants with a high waist create the visual effect of longer legs and a slimmer figure.",
//         "Wide yet structured — they add both confidence and lightness to any look.",
//         "Fabric: Premium-quality natural wool providing warmth, coziness, and a pleasant tactile feel.",
//         "[ Composition: 75% wool ]",
//         "Details:",
//         "• High waist",
//         "• Wide straight-leg silhouette",
//         "• Closure: zipper + button"
//       ],
//       colors: ["camel"]
//     },
//     FR: {
//       category: "Pantalons",
//       name: "Pantalon Camel",
//       description: [
//         "Pantalon palazzo à taille haute créant un effet visuel de jambes plus longues et une silhouette élancée.",
//         "Large mais structuré — il apporte confiance et légèreté à la tenue.",
//         "Tissu : laine naturelle de qualité supérieure offrant chaleur et confort tactile.",
//         "[ Composition : 75% laine ]",
//         "Détails :",
//         "• Taille haute",
//         "• Coupe large et droite sur toute la longueur",
//         "• Fermeture : zip + bouton"
//       ],
//       colors: ["camel"]
//     },
//     UA: {
//       category: "Брюки",
//       name: "Брюки \"Camel\"",
//       description: [
//         "Брюки палаццо із високою посадкою створюють візуальний ефект довших ніг і стрункішої фігури.",
//         "Широкі, але структурні — вони додають образу впевненості та легкості.",
//         "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
//         "[ Склад: 75% вовни ]",
//         "Деталі:",
//         "• Висока посадка",
//         "• Широкий силует, прямі по всій довжині",
//         "• Застібка: блискавка + ґудзик"
//       ],
//       colors: ["кемел"]
//     },
//     RU: {
//       category: "Брюки",
//       name: "Брюки \"Кэмел\"",
//       description: [
//         "Брюки палаццо с высокой посадкой создают визуальный эффект более длинных ног и стройной фигуры.",
//         "Широкие, но структурированные — добавляют образу уверенности и лёгкости.",
//         "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло и комфорт.",
//         "[ Состав: 75% шерсти ]",
//         "Детали:",
//         "• Высокая посадка",
//         "• Прямой широкий силуэт по всей длине",
//         "• Застёжка: молния + пуговица"
//       ],
//       colors: ["карамель"]
//     }
//   }
// },

//   {
//   id: 216,
//   price: 2100,
//   isTop: false,
//   isNew: true,
//   // isSpecialOffer: true,
//   // discountPrice: 1700,
//   sku: "99358",
//   size: "XS S M L XL",
//   category: "Tops",
//   image: "/Top/Camel Vest/1.avif",
//   images: [
//     "/Top/Camel Vest/2.avif",
//     "/Top/Camel Vest/3.avif",
//     "/Top/Camel Vest/4.avif",
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Tops",
//       name: "Camel Vest",
//       description: [
//         "A minimalist vest made from soft wool suiting fabric that perfectly holds its shape.",
//         "Features a V-neckline that visually elongates the neck and accent button line with a matte finish.",
//         "The fit is tailored yet comfortable — pairs beautifully with a classic shirt or turtleneck.",
//         "Fabric: Premium-quality natural wool for warmth, coziness, and pleasant tactile comfort.",
//         "[ Composition: 75% wool ]",
//         "Details:",
//         "• Front closure with 4 buttons",
//         "• Decorative welt pocket",
//         "• Waist-length with a straight hem"
//       ],
//       colors: ["camel"]
//     },
//     FR: {
//       category: "Tops",
//       name: "Gilet Camel",
//       description: [
//         "Gilet minimaliste en laine de costume douce qui garde parfaitement sa forme.",
//         "Présente un décolleté en V qui allonge visuellement le cou et une ligne de boutons mats.",
//         "La coupe est ajustée mais confortable — s’accorde aussi bien avec une chemise classique qu’un col roulé.",
//         "Tissu : laine naturelle de qualité supérieure, offrant chaleur et confort tactile.",
//         "[ Composition : 75% laine ]",
//         "Détails :",
//         "• Fermeture avant avec 4 boutons",
//         "• Poche passepoilée décorative",
//         "• Longueur à la taille, ourlet droit"
//       ],
//       colors: ["camel"]
//     },
//     UA: {
//       category: "Топи",
//       name: "Жилет \"Camel\"",
//       description: [
//         "Лаконічний жилет із м’якої костюмної вовни, що чудово тримає форму.",
//         "Має V-подібний виріз, який візуально подовжує шию, і акцентну лінію ґудзиків із матовим покриттям.",
//         "Посадка приталена, але комфортна — ідеально поєднується як із класичною сорочкою, так і з водолазкою.",
//         "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
//         "[ Склад: 75% вовни ]",
//         "Деталі:",
//         "• Застібається на 4 ґудзики спереду",
//         "• Кишені: декоративна прорізна кишеня",
//         "• Довжина до талії, із рівним низом"
//       ],
//       colors: ["кемел"]
//     },
//     RU: {
//       category: "Топы",
//       name: "Жилет \"Кэмел\"",
//       description: [
//         "Лаконичный жилет из мягкой костюмной шерсти, прекрасно держащий форму.",
//         "Имеет V-образный вырез, визуально удлиняющий шею, и акцентную линию матовых пуговиц.",
//         "Посадка приталенная, но комфортная — идеально сочетается с классической рубашкой или водолазкой.",
//         "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло и комфорт.",
//         "[ Состав: 75% шерсти ]",
//         "Детали:",
//         "• Застёжка спереди на 4 пуговицы",
//         "• Декоративный прорезной карман",
//         "• Длина до талии, прямой низ"
//       ],
//       colors: ["карамель"]
//     }
//   }
// },

//   {
//   id: 215,
//   price: 4160,
//   isTop: false,
//   isNew: true,
//   // isSpecialOffer: true,
//   // discountPrice: 3536,
//   sku: "99357",
//   size: "XS S M L XL",
//   category: "Costumes",
//   image: "/Costumes/Camel Costume/1.avif",
//   images: [
//     "/Costumes/Camel Costume/2.avif",
//     "/Costumes/Camel Costume/3.avif",
//     "/Costumes/Camel Costume/4.avif",
//     "/Costumes/Camel Costume/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Costumes",
//       name: "Camel Costume",
//       description: [
//         "The embodiment of modern classics in a warm caramel shade.",
//         "This costume celebrates refined lines, structured silhouette, and understated elegance — made for women who value comfort and quiet luxury.",
//         "Fabric: Premium-quality natural wool for warmth, softness, and exceptional tactile comfort.",
//         "[ Composition: 75% wool ]",
//         "Details:",
//         "Vest: front button closure with 4 buttons",
//         "• Decorative welt pocket",
//         "• Waist-length with a straight hem",
//         "Trousers: high-waisted",
//         "• Wide silhouette, straight along the entire length",
//         "• Fastening: zipper + button"
//       ],
//       colors: ["camel"]
//     },
//     FR: {
//       category: "Costumes",
//       name: "Costume Camel",
//       description: [
//         "L'incarnation du classique moderne dans une teinte caramel chaude.",
//         "Ce costume allie des lignes raffinées, une silhouette structurée et une élégance discrète — conçu pour les femmes qui apprécient le confort et le luxe sobre.",
//         "Tissu : laine naturelle de qualité supérieure, offrant chaleur, douceur et confort exceptionnel.",
//         "[ Composition : 75% laine ]",
//         "Détails :",
//         "Gilet : fermeture à 4 boutons à l’avant",
//         "• Poche passepoilée décorative",
//         "• Longueur à la taille, ourlet droit",
//         "Pantalon : taille haute",
//         "• Coupe large et droite sur toute la longueur",
//         "• Fermeture : zip + bouton"
//       ],
//       colors: ["camel"]
//     },
//     UA: {
//       category: "Костюми",
//       name: "Костюм \"Camel\"",
//       description: [
//         "Втілення сучасної класики у відтінку теплої карамелі.",
//         "Цей костюм — про витонченість ліній, структуру силуету та спокійну елегантність.",
//         "Створений для жінок, які цінують комфорт і стриману розкіш.",
//         "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
//         "[ Склад: 75% вовни ]",
//         "Деталі:",
//         "Жилет: застібається на 4 ґудзики спереду",
//         "• Кишені: декоративна прорізна кишеня",
//         "• Довжина до талії, із рівним низом",
//         "Брюки: висока посадка",
//         "• широкий силует, прямі по всій довжині",
//         "• Застібка: блискавка + ґудзик"
//       ],
//       colors: ["кемел"]
//     },
//     RU: {
//       category: "Костюмы",
//       name: "Костюм \"Кэмел\"",
//       description: [
//         "Воплощение современной классики в тёплом карамельном оттенке.",
//         "Этот костюм олицетворяет утончённость линий, структурированный силуэт и спокойную элегантность.",
//         "Создан для женщин, ценящих комфорт и сдержанную роскошь.",
//         "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло и мягкость.",
//         "[ Состав: 75% шерсти ]",
//         "Детали:",
//         "Жилет: застёжка на 4 пуговицы спереди",
//         "• Декоративный прорезной карман",
//         "• Длина до талии, прямой низ",
//         "Брюки: высокая посадка",
//         "• Широкий силуэт, прямые по всей длине",
//         "• Застёжка: молния + пуговица"
//       ],
//       colors: ["карамель"]
//     }
//   }
// },

//   {
//   id: 214,
//   price: 3100,
//   isTop: false,
//   isNew: true,
//   // isSpecialOffer: true,
//   // discountPrice: 2635,
//   sku: "99356",
//   size: "XS S M L XL",
//   category: "Dresses",
//   image: "/Dress/Wool V-Neck Dress/1.avif",
//   images: [
//     "/Dress/Wool V-Neck Dress/2.avif",
//     "/Dress/Wool V-Neck Dress/3.avif",
//     "/Dress/Wool V-Neck Dress/4.avif",
//     "/Dress/Wool V-Neck Dress/5.avif",
//     "/Dress/Wool V-Neck Dress/6.avif",
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Dresses",
//       name: "Wool V-Neck Dress",
//       description: [
//         "The embodiment of warmth, comfort, and refined simplicity.",
//         "This elegant wool dress features a V-neckline that elongates the neck and gently defined shoulders.",
//         "Darts at the waist and vertical seams create a flattering feminine silhouette that feels both natural and graceful.",
//         "Fabric: Premium-quality natural wool for warmth, softness, and luxurious comfort.",
//         "[ Composition: 75% wool ]",
//         "Details:",
//         "• Silhouette: fitted top + midi-length flared skirt",
//         "• Length: midi",
//         "• Sleeve: long and straight",
//         "• Front button closure"
//       ],
//       colors: ["camel", "gray"]
//     },
//     FR: {
//       category: "Robes",
//       name: "Robe en Laine à Col en V",
//       description: [
//         "L'incarnation de la chaleur, du confort et de la simplicité raffinée.",
//         "Cette robe en laine élégante présente un décolleté en V qui allonge visuellement le cou et des épaules délicatement dessinées.",
//         "Grâce aux pinces à la taille et aux coutures verticales, elle souligne parfaitement la silhouette féminine naturelle.",
//         "Tissu : laine naturelle de qualité supérieure pour la chaleur et la douceur.",
//         "[ Composition : 75% laine ]",
//         "Détails :",
//         "• Silhouette : haut ajusté + jupe évasée longueur midi",
//         "• Longueur : midi",
//         "• Manches : longues et droites",
//         "• Fermeture : boutonnée sur le devant"
//       ],
//       colors: ["camel", "gris"]
//     },
//     UA: {
//       category: "Сукні",
//       name: "Вовняна сукня V-виріз",
//       description: [
//         "Втілення тепла, затишку та вишуканої простоти.",
//         "Сукня має елегантний V-виріз, який візуально подовжує шию, і м’яко окреслену лінію плечей.",
//         "Завдяки виточкам у талії та вертикальним швам вона ідеально підкреслює фігуру, створюючи природний жіночний акцент.",
//         "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
//         "[ Склад: 75% вовни ]",
//         "Деталі:",
//         "• Силует: приталений верх + спідниця-сонце міді довжини",
//         "• Довжина: міді",
//         "• Рукав: довгий, прямий",
//         "• Застібка спереду"
//       ],
//       colors: ["кемел", "сірий"]
//     },
//     RU: {
//       category: "Платья",
//       name: "Шерстяное платье с V-образным вырезом",
//       description: [
//         "Воплощение тепла, уюта и изысканной простоты.",
//         "Платье имеет элегантный V-образный вырез, визуально удлиняющий шею, и мягко очерченные плечи.",
//         "Благодаря вытачкам на талии и вертикальным швам оно идеально подчеркивает фигуру, создавая естественный женственный акцент.",
//         "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло и комфорт.",
//         "[ Состав: 75% шерсти ]",
//         "Детали:",
//         "• Силуэт: приталенный верх + юбка-солнце длины миди",
//         "• Длина: миди",
//         "• Рукав: длинный, прямой",
//         "• Застёжка спереди"
//       ],
//       colors: ["карамель", "серый", "пудра"]
//     }
//   }
// },


  {
  id: 213,
  price: 2000,
  isTop: false,
  isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 1700,
  sku: "99355",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Asymmetric Leather Dress/1.avif",
  images: [
    "/Dress/Asymmetric Leather Dress/2.avif",
    "/Dress/Asymmetric Leather Dress/3.avif",
    "/Dress/Asymmetric Leather Dress/4.avif",
    "/Dress/Asymmetric Leather Dress/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Asymmetric Leather Dress",
      description: [
        "An asymmetric dress that redefines modern femininity through structure and minimalism.",
        "Crafted from smooth eco-leather in a deep gray-blue tone, it maintains shape while allowing fluid movement.",
        "The sculptural silhouette with clean lines resembles architectural balance — every seam purposeful and aesthetic.",
        "Fabric: high-quality stretch eco-leather on a suede base (durable, flexible, non-cracking).",
        "Details:",
        "• Cut: asymmetric with decorative draping on the top",
        "• Sleeveless design emphasizes delicate shoulders",
        "• Length: knee-length"
      ],
      colors: ["gray"]
    },
    FR: {
      category: "Robes",
      name: "Robe Asymétrique en Cuir",
      description: [
        "Une robe asymétrique — interprétation moderne de la force et du minimalisme féminins.",
        "Confectionnée en cuir écologique lisse dans une teinte gris-bleu profonde, elle garde sa forme tout en restant fluide.",
        "Sa silhouette sculpturale et ses lignes nettes rappellent une composition architecturale équilibrée.",
        "Tissu : cuir écologique extensible de haute qualité sur base daim (résistant et souple).",
        "Détails :",
        "• Coupe : asymétrique avec drapé décoratif sur le haut",
        "• Sans manches — met en valeur la délicatesse des bras",
        "• Longueur : jusqu'au genou"
      ],
      colors: ["gris"]
    },
    UA: {
      category: "Сукні",
      name: "Шкіряна асиметрична сукня",
      description: [
        "Асиметрична сукня — це сучасна інтерпретація жіночої сили й мінімалізму.",
        "Створена з гладкої костюмної тканини в глибокому сіро-блакитному відтінку, вона тримає форму, не втрачаючи м’якості руху.",
        "Скульптурний силует із чіткими лініями нагадує архітектурну композицію, у якій кожен шов — продуманий і естетичний.",
        "Тканина: якісна екошкіра на замшевій основі (стречева, не тріскається).",
        "Деталі:",
        "• Крій: асиметричний — з декоративною драпіровкою у верхній частині",
        "• Без рукавів — лаконічна форма плечей підкреслює тендітність рук",
        "• Довжина: до коліна"
      ],
      colors: ["сірий"]
    },
    RU: {
      category: "Платья",
      name: "Кожаное асимметричное платье",
      description: [
        "Асимметричное платье — современная интерпретация женской силы и минимализма.",
        "Создано из гладкой эко-кожи глубокого серо-голубого оттенка, держит форму, оставаясь пластичным в движении.",
        "Скульптурный силуэт с чёткими линиями напоминает архитектурную композицию, где каждый шов продуман и эстетичен.",
        "Ткань: качественная эко-кожа на замшевой основе (тянется, не трескается).",
        "Детали:",
        "• Крой: асимметричный с декоративной драпировкой сверху",
        "• Без рукавов — лаконичная линия плеч подчёркивает изящество рук",
        "• Длина: до колена"
      ],
      colors: ["серый"]
    }
  }
},


//   {
//   id: 212,
//   price: 3100,
//   isTop: false,
//   isNew: true,
//   // isSpecialOffer: true,
//   // discountPrice: 2635,
//   sku: "99354",
//   size: "XS S M L XL",
//   category: "Dresses",
//   image: "/Dress/Camel Dress/1.avif",
//   images: [
//     "/Dress/Camel Dress/2.avif",
//     "/Dress/Camel Dress/3.avif",
//     "/Dress/Camel Dress/4.avif",
//     "/Dress/Camel Dress/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Dresses",
//       name: "Camel Dress",
//       description: [
//         "A refined dress in warm caramel beige — an embodiment of calm, strength, and feminine elegance.",
//         "The model with ¾ sleeves and a softly flared hem creates a harmonious silhouette, accentuating the waist.",
//         "The simple cut with hidden seams highlights natural beauty without unnecessary details.",
//         "Fabric: premium-quality natural wool for warmth, coziness, and a pleasant tactile feel.",
//         "Details:",
//         "• Length: midi",
//         "• Sleeve: ¾ with a gentle taper at the wrist",
//         "• Silhouette: fitted with a flared bottom"
//       ],
//       colors: ["camel"]
//     },
//     FR: {
//       category: "Robes",
//       name: "Robe Camel",
//       description: [
//         "Une robe raffinée de couleur beige caramel chaud — incarnation de la sérénité, de la force et de l’élégance féminine.",
//         "Le modèle à manches ¾ et à ourlet évasé crée une silhouette harmonieuse, mettant en valeur la taille.",
//         "La coupe simple et les coutures discrètes soulignent la beauté naturelle sans détails superflus.",
//         "Tissu : laine naturelle de qualité supérieure, offrant chaleur et confort.",
//         "Détails :",
//         "• Longueur : midi",
//         "• Manches : ¾, légèrement resserrées au poignet",
//         "• Silhouette : ajustée avec bas évasé"
//       ],
//       colors: ["camel"]
//     },
//     UA: {
//       category: "Сукні",
//       name: "Сукня 'Camel'",
//       description: [
//         "Витончена сукня кольору теплого карамельного беж — втілення спокою, сили та жіночої елегантності.",
//         "Модель із довгими рукавами ¾ і м’яко розкльошеним низом створює гармонійну лінію силуету, акцентуючи талію.",
//         "Простий крій з прихованими швами ідеально підкреслює природну красу жінки, не потребуючи зайвих деталей.",
//         "Тканина: натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
//         "Деталі:",
//         "• Довжина: міді",
//         "• Рукав: ¾ із легким звуженням до зап’ястя",
//         "• Силует: приталений із розкльошеним низом"
//       ],
//       colors: ["кемел"]
//     },
//     RU: {
//       category: "Платья",
//       name: "Платье 'Camel'",
//       description: [
//         "Элегантное платье теплого карамельно-бежевого оттенка — воплощение спокойствия, силы и женственности.",
//         "Модель с рукавом ¾ и мягко расклешённым низом формирует гармоничный силуэт, подчёркивая талию.",
//         "Простой крой с потайными швами идеально подчёркивает естественную красоту без лишних деталей.",
//         "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло и комфорт.",
//         "Детали:",
//         "• Длина: миди",
//         "• Рукав: ¾, слегка суженный к запястью",
//         "• Силуэт: приталенный с расклешённым низом"
//       ],
//       colors: ["кемел"]
//     }
//   }
// },

  {
  id: 158,
  price: 3100,
  isTop: false,
  isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2635,
  sku: "98811",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Loden Grace Dress/1.avif", 
  images: [
    "/Dress/Loden Grace Dress/1.avif",
    "/Dress/Loden Grace Dress/2.avif",
     {
      type: "video",
      src: "/Dress/Loden Grace Dress/IMG_5263.mp4",
      poster: "/Dress/Loden Grace Dress/2.avif",
    },
    "/Dress/Loden Grace Dress/3.avif",
    "/Dress/Loden Grace Dress/4.avif",
    "/Dress/Loden Grace Dress/5.avif",
    // "/Dress/Loden Grace Dress/6.avif",
    // "/Dress/Loden Grace Dress/7.avif",
    // "/Dress/Loden Grace Dress/8.avif",
    // "/Dress/Loden Grace Dress/9.avif",
    // "/Dress/Loden Grace Dress/10.avif",
    
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Loden Grace Dress",
      description: [
        "An elegant dress that combines timeless classics with modern accents. Thanks to its premium fabric and thoughtful cut, it looks stylish while remaining comfortable for everyday wear.",
        "Perfect choice for office days, business meetings, or evening outings.",
        "Fabric: Loden wool — dense, warm, yet soft and flexible. It holds its shape perfectly and is ideal for the cooler season.",
        "[Composition: 75% wool]",
        "Details:",
        "• Straight silhouette that gently emphasizes body lines",
        "• ¾ sleeves with decorative zippers — a stylish element that allows adjusting the volume",
        "• Back slit for ease of movement and a feminine accent"
      ],
      colors: ["denim"]
    },
    FR: {
      category: "Robes",
      name: "Robe «Loden Grace»",
      description: [
        "Une robe élégante qui associe la classique intemporelle à des accents modernes. Grâce à son tissu premium et sa coupe soignée, elle allie style et confort au quotidien.",
        "Un choix parfait pour le bureau, les réunions d'affaires ou les sorties en soirée.",
        "Tissu : laine Loden — dense, chaude, mais souple et douce. Elle garde parfaitement sa forme et est idéale pour la saison fraîche.",
        "[Composition : 75% laine]",
        "Détails :",
        "• Silhouette droite qui souligne délicatement les lignes du corps",
        "• Manches ¾ avec fermetures éclair décoratives pour ajuster le volume",
        "• Fente au dos pour plus d’aisance et une touche féminine"
      ],
      colors: ["denim",]
    },
    UA: {
      category: "Сукні",
      name: "Сукня «Loden Grace»",
      description: [
        "Елегантна сукня, яка поєднує стриману класику з сучасними акцентами. Завдяки преміальній тканині та продуманому крою вона виглядає стильно та комфортно носиться щодня.",
        "Ця сукня стане ідеальним вибором для офісних буднів, ділових зустрічей або вечірніх виходів.",
        "Тканина: вовняна тканина «Лоден» — щільна, тепла, але при цьому пластична й м’яка. Вона чудово тримає форму і є ідеальною для прохолодного сезону.",
        "[Склад: 75% вовни]",
        "Деталі:",
        "• Прямий силует, що м’яко підкреслює лінії фігури.",
        "• Рукави ¾ з декоративними замочками — стильна деталь, яка дозволяє регулювати об’єм та створює сучасний акцент.",
        "• На спинці передбачений розріз для зручності рухів і жіночного акценту."
      ],
      colors: ["джинс"]
    },
    RU: {
      category: "Платья",
      name: "Платье «Loden Grace»",
      description: [
        "Элегантное платье, сочетающее сдержанную классику с современными акцентами. Благодаря премиальной ткани и продуманному крою оно выглядит стильно и удобно для повседневной носки.",
        "Идеальный выбор для офиса, деловых встреч или вечерних выходов.",
        "Ткань: шерстяная ткань «Лоден» — плотная, тёплая, но пластичная и мягкая. Отлично держит форму и идеально подходит для прохладного сезона.",
        "[Состав: 75% шерсти]",
        "Детали:",
        "• Прямой силуэт, мягко подчёркивающий линии фигуры",
        "• Рукава ¾ с декоративными замочками — стильная деталь, позволяющая регулировать объём",
        "• Разрез на спинке для удобства движения и женственного акцента"
      ],
      colors: ["джинс", "полынь"]
    }
  }
},


  {
  id: 210,
  price: 1900,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1615,
  sku: "99352",
  size: "XS S M L XL",
  category: "Shirts",
  image: "/Shirts/Leopard Shirt/1.avif",
  images: [
    "/Shirts/Leopard Shirt/2.avif",
    "/Shirts/Leopard Shirt/3.avif",
    "/Shirts/Leopard Shirt/4.avif",
    "/Shirts/Leopard Shirt/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Shirts",
      name: "Leopard Shirt",
      description: [
        "Light, airy, and full of character — this leopard-print batiste shirt is made for women who embrace both tenderness and boldness.",
        "The semi-transparent natural fabric flows beautifully in motion, while the animal print in chocolate, beige, and caramel tones adds depth and allure.",
        "Fabric: premium-quality natural batiste.",
        "Details:",
        "• Classic collar",
        "• Full-length button closure",
        "• Relaxed fit that can be easily tucked into pants or a skirt"
      ],
      colors: ["leopard"]
    },
    FR: {
      category: "Chemises",
      name: "Chemise léopard",
      description: [
        "Légère, aérienne et pleine de caractère — une chemise en batiste fine à imprimé léopard pour les femmes à la fois douces et audacieuses.",
        "Le tissu semi-transparent capte la lumière, créant un effet fluide et délicat, tandis que l’imprimé aux tons chocolat, beige et caramel ajoute de la profondeur.",
        "Tissu : batiste naturelle de qualité supérieure.",
        "Détails :",
        "• Col classique",
        "• Fermeture boutonnée sur toute la longueur",
        "• Coupe ample facilement rentrable dans un pantalon ou une jupe"
      ],
      colors: ["léopard"]
    },
    UA: {
      category: "Сорочки",
      name: "Леопардова сорочка",
      description: [
        "Легка, невагома й водночас харизматична — сорочка з тонкого батисту з анімалістичним принтом створена для жінок, які вміють бути ніжними й сміливими водночас.",
        "Напівпрозора тканина грає на світлі, створюючи м’який ефект струмування, а принт у відтінках шоколаду, бежу та карамелі додає глибини образу.",
        "Тканина: натуральний батист преміум якості.",
        "Деталі:",
        "• Класичний комір",
        "• Застібка на гудзики по всій довжині",
        "• Вільний крій, який легко заправити в брюки чи спідницю"
      ],
      colors: ["леопард"]
    },
    RU: {
      category: "Рубашки",
      name: "Леопардовая рубашка",
      description: [
        "Легкая, воздушная и харизматичная — рубашка из тонкого батиста с анималистичным принтом создана для женщин, умеющих сочетать нежность и смелость.",
        "Полупрозрачная ткань красиво играет на свету, а принт в оттенках шоколада, бежа и карамели добавляет глубины образу.",
        "Ткань: натуральный батист премиум качества.",
        "Детали:",
        "• Классический воротник",
        "• Застёжка на пуговицы по всей длине",
        "• Свободный крой, легко заправляется в брюки или юбку"
      ],
      colors: ["леопард"]
    }
  }
},

  {
  id: 209,
  price: 1550,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1318,
  sku: "99351",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Leather Mini Skirt/1.avif",
  images: [
    "/Skirts/Leather Mini Skirt/2.avif",
    "/Skirts/Leather Mini Skirt/3.avif",
    "/Skirts/Leather Mini Skirt/4.avif",
    "/Skirts/Leather Mini Skirt/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Leather Mini Skirt",
      description: [
        "A classic pencil mini skirt made of eco-leather in deep burgundy — femininity with character.",
        "Its sleek silhouette accentuates the figure while remaining comfortable in motion.",
        "Soft premium eco-leather with a subtle satin sheen keeps its shape throughout the day and doesn’t crack.",
        "Fabric: high-quality stretch eco-leather on a suede base (durable, flexible, and soft).",
        "Details:",
        "• Silhouette: classic pencil",
        "• High waist",
        "• Neat waistline with darts for a perfect fit",
        "• Length — 50 cm"
      ],
      colors: ["marsala"]
    },
    FR: {
      category: "Jupes",
      name: "Jupe en cuir mini",
      description: [
        "Une jupe crayon classique en cuir synthétique bordeaux profond — la féminité avec du caractère.",
        "Sa forme épurée souligne la silhouette tout en restant confortable.",
        "Le cuir écologique doux de qualité supérieure possède une légère brillance satinée et conserve sa forme toute la journée.",
        "Tissu : cuir synthétique extensible sur base suédée (souple et résistant).",
        "Détails :",
        "• Silhouette : crayon classique",
        "• Taille haute",
        "• Ligne de taille ajustée avec pinces",
        "• Longueur — 50 cm"
      ],
      colors: ["marsala"]
    },
    UA: {
      category: "Спідниці",
      name: "Шкіряна спідниця міні",
      description: [
        "Класична спідниця-олівець зі штучної шкіри у відтінку глибокого бордо — це втілення жіночності з характером.",
        "Її лаконічна форма підкреслює фігуру, залишаючись водночас комфортною у русі.",
        "М’яка екошкіра преміум якості має легкий сатиновий блиск і не заламується, а щільна посадка тримає форму протягом дня.",
        "Тканина: якісна екошкіра на замшевій основі (стречева, не тріскається).",
        "Деталі:",
        "• Силует: класичний “олівець”",
        "• Висока посадка",
        "• Акуратна талієва лінія з виточками для ідеальної посадки",
        "• Довжина — 50см"
      ],
      colors: ["марсала"]
    },
    RU: {
      category: "Юбки",
      name: "Кожаная мини-юбка",
      description: [
        "Классическая юбка-карандаш из искусственной кожи глубокого бордового оттенка — воплощение женственности с характером.",
        "Её лаконичный крой подчеркивает фигуру, оставаясь комфортным в движении.",
        "Мягкая эко-кожа премиум качества с лёгким сатиновым блеском не ломается и держит форму весь день.",
        "Ткань: качественная эко-кожа на замшевой основе (стрейчевая, не трескается).",
        "Детали:",
        "• Силуэт: классический «карандаш»",
        "• Высокая посадка",
        "• Аккуратная линия талии с вытачками для идеальной посадки",
        "• Длина — 50 см"
      ],
      colors: ["марсала"]
    }
  }
},

  {
    id: 102,
    price: 2100,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1785,
    sku: "45530",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Leather Midi Skirt/1.avif",
    images: [
      "/Skirts/Leather Midi Skirt/2.avif",
      "/Skirts/Leather Midi Skirt/3.avif",
      "/Skirts/Leather Midi Skirt/4.avif",
      "/Skirts/Leather Midi Skirt/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Leather Midi Skirt",
        description: "A midi-length pencil skirt with a high waist and a side slit.\nFabric: high-quality stretch eco-leather on a suede base (durable, crack-resistant).",
        colors: ["black"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe Midi en Cuir",
        description: "Jupe crayon de longueur midi avec une taille haute et une fente latérale.\nTissu : éco-cuir extensible de haute qualité sur une base en daim (résistant, ne se fissure pas).",
        colors: ["noir"]
      },
      UA: {
        category: "Спідниці",
        name: "Шкіряна спідниця",
        description: "Спідниця міді довжини фасону олівець на високій посадці із розрізом збоку.\nТканина: якісна екошкіра на замшевій основі (стречева, не тріскається).",
        colors: ["чорний"]
      },
      RU: {
        category: "Юбки",
        name: "Кожаная юбка",
        description: "Юбка средней длины фасона карандаш с высокой посадкой и разрезом сбоку.\nТкань: качественная эко-кожа на замшевой основе (эластичная, не трескается).",
        colors: ["черный"]
      }
    }
  },

  {
  id: 208,
  price: 2060,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1751,
  sku: "99350",
  size: "XS S M L XL",
  category: "Pants",
  image: "/Pants/Khaki Pants/1.avif",
  images: [
    "/Pants/Khaki Pants/2.avif",
    "/Pants/Khaki Pants/3.avif",
    "/Pants/Khaki Pants/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Pants",
      name: "Khaki Pants",
      description: [
        "Wide palazzo pants with a high waist — the key to perfect proportions.",
        "The flowing fabric drapes beautifully in motion, visually elongating the legs.",
        "Decorative front pleats create a soft volume, while the double-button closure accentuates the waist.",
        "Fabric: Dense premium suiting fabric that holds its shape while remaining soft to the touch.",
        "[ Composition: 75% viscose, 25% polyester ]",
        "Details:",
        "• Wide, relaxed silhouette",
        "• High waist",
        "• Zip and double-button closure"
      ],
      colors: ["khaki"]
    },
    FR: {
      category: "Pantalons",
      name: "Pantalon «Khaki»",
      description: [
        "Pantalon palazzo large à taille haute — la clé des proportions parfaites.",
        "Le tissu fluide tombe élégamment en mouvement, allongeant visuellement les jambes.",
        "Les plis décoratifs à l'avant créent un volume doux, tandis que la fermeture à double bouton souligne la taille.",
        "Tissu : tissu de costume dense de qualité supérieure qui garde sa forme tout en restant agréable au toucher.",
        "[ Composition : 75% viscose, 25% polyester ]",
        "Détails :",
        "• Coupe large et fluide",
        "• Taille haute",
        "• Fermeture éclair et double bouton"
      ],
      colors: ["kaki"]
    },
    UA: {
      category: "Брюки",
      name: "Брюки «Khaki»",
      description: [
        "Широкі брюки палаццо з високою посадкою — ключ до ідеальної пропорції.",
        "Струмуюча тканина красиво лягає у русі, візуально подовжуючи ноги.",
        "Декоративні защипи спереду створюють м’який об’єм, а подвоєна застібка підкреслює талію.",
        "Тканина: Щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[ Склад: 75% віскоза, 25% поліестер ]",
        "Деталі:",
        "• Широкий, вільний силует",
        "• Висока посадка",
        "• Застібка на блискавку та два ґудзики"
      ],
      colors: ["хакі"]
    },
    RU: {
      category: "Брюки",
      name: "Брюки «Khaki»",
      description: [
        "Широкие брюки палаццо с высокой посадкой — ключ к идеальным пропорциям.",
        "Струящаяся ткань красиво ложится в движении, визуально удлиняя ноги.",
        "Декоративные защипы спереди создают мягкий объем, а двойная застёжка подчёркивает талию.",
        "Ткань: плотная костюмная ткань премиум-класса, держащая форму и приятная к телу.",
        "[ Состав: 75% вискоза, 25% полиэстер ]",
        "Детали:",
        "• Широкий, свободный силуэт",
        "• Высокая посадка",
        "• Застёжка на молнию и два пуговицы"
      ],
      colors: ["хаки"]
    }
  }
},

  {
  id: 207,
  price: 3750,
  isTop: false,
  isNew: false,
  //  isSpecialOffer: true,
  // discountPrice: 3188,
  sku: "99349",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Khaki Jacket/1.avif",
  images: [
    "/Jackets/Khaki Jacket/2.avif",
    "/Jackets/Khaki Jacket/3.avif",
    "/Jackets/Khaki Jacket/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "Khaki Jacket",
      description: [
        "An oversized jacket with a soft shoulder line — minimalist yet expressive.",
        "The subtle check pattern adds texture, while the elongated silhouette creates an elegant look with a touch of French nonchalance.",
        "Features functional flap pockets and a back vent.",
        "Fabric: Dense premium suiting fabric that holds its shape while remaining soft to the touch.",
        "[ Composition: 75% viscose, 25% polyester ]",
        "Details:",
        "• Relaxed fit",
        "• Elongated cut",
        "• Single-breasted fastening"
      ],
      colors: ["khaki"]
    },
    FR: {
      category: "Vestes",
      name: "Veste «Khaki»",
      description: [
        "Veste oversize à ligne d'épaule douce — minimaliste mais expressive.",
        "Le motif à carreaux ajoute de la texture, tandis que la silhouette allongée crée un look élégant avec une touche de désinvolture française.",
        "Dispose de poches à rabat fonctionnelles et d'une fente au dos.",
        "Tissu : tissu de costume dense de qualité supérieure qui garde sa forme tout en restant agréable au toucher.",
        "[ Composition : 75% viscose, 25% polyester ]",
        "Détails :",
        "• Coupe ample",
        "• Coupe allongée",
        "• Fermeture simple à un bouton"
      ],
      colors: ["kaki"]
    },
    UA: {
      category: "Жакети",
      name: "Жакет «Khaki»",
      description: [
        "Oversize жакет із м’якою лінією плеча — лаконічний, але виразний.",
        "Клітинка додає текстури, а подовжений силует створює елегантний образ із ноткою французької недбалості.",
        "Має функціональні кишені з клапанами та шліцу ззаду.",
        "Тканина: Щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[ Склад: 75% віскоза, 25% поліестер ]",
        "Деталі:",
        "• Вільна посадка",
        "• Подовжений крій",
        "• Однобортна застібка"
      ],
      colors: ["хакі"]
    },
    RU: {
      category: "Жакеты",
      name: "Жакет «Khaki»",
      description: [
        "Oversize жакет с мягкой линией плеч — лаконичный, но выразительный.",
        "Клетка добавляет текстуры, а удлинённый силуэт создаёт элегантный образ с ноткой французской непринуждённости.",
        "Имеет функциональные карманы с клапанами и шлицу сзади.",
        "Ткань: плотная костюмная ткань премиум-класса, держащая форму и приятная к телу.",
        "[ Состав: 75% вискоза, 25% полиэстер ]",
        "Детали:",
        "• Свободная посадка",
        "• Удлинённый крой",
        "• Однобортная застёжка"
      ],
      colors: ["хаки"]
    }
  }
},

  {
  id: 206,
  price: 5800,
  isTop: false,
  isNew: false,
  //  isSpecialOffer: true,
  // discountPrice: 4930,
  sku: "99348",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Khaki Suit/1.avif",
  images: [
    "/Costumes/Khaki Suit/2.avif",
    "/Costumes/Khaki Suit/3.avif",
    "/Costumes/Khaki Suit/4.avif",
    "/Costumes/Khaki Suit/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Khaki Suit",
      description: [
        "An elegant suit in a deep khaki shade — the perfect balance of sophistication and effortless chic.",
        "Designed for the modern woman who values minimalism, naturalness, and confidence in every move.",
        "The relaxed cut adds ease and comfort.",
        "Fabric: Dense premium suiting fabric that holds its shape while remaining soft to the touch.",
        "[ Composition: 75% viscose, 25% polyester ]",
        "Details:",
        "Jacket: Relaxed fit",
        "• Elongated cut",
        "• Single-breasted fastening",
        "Pants: Wide, relaxed silhouette",
        "• High waist",
        "• Zip and double button closure"
      ],
      colors: ["khaki"]
    },
    FR: {
      category: "Costumes",
      name: "Costume «Khaki»",
      description: [
        "Un costume élégant dans une teinte kaki profonde — un équilibre parfait entre rigueur et chic naturel.",
        "Créé pour la femme moderne qui apprécie le minimalisme, la simplicité et la confiance dans chaque mouvement.",
        "La coupe ample ajoute légèreté et confort.",
        "Tissu : tissu de costume dense de qualité supérieure qui garde sa forme tout en étant agréable au toucher.",
        "[ Composition : 75% viscose, 25% polyester ]",
        "Détails :",
        "Veste : coupe ample",
        "• Coupe allongée",
        "• Fermeture à un seul bouton",
        "Pantalon : silhouette large et fluide",
        "• Taille haute",
        "• Fermeture à glissière et double bouton"
      ],
      colors: ["kaki"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм «Khaki»",
      description: [
        "Витончений костюм у глибокому хакі відтінку — ідеальний баланс строгості та effortless-шику.",
        "Створений для сучасної жінки, яка цінує мінімалізм, природність і впевненість у кожному русі.",
        "Вільний крій додає легкості та комфорту.",
        "Тканина: Щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[ Склад: 75% віскоза, 25% поліестер ]",
        "Деталі:",
        "Жакет: Вільна посадка",
        "• Подовжений крій",
        "• Однобортна застібка",
        "Брюки: Широкий, вільний силует",
        "• Висока посадка",
        "• Застібка на блискавку та два ґудзики"
      ],
      colors: ["хакі"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм «Khaki»",
      description: [
        "Элегантный костюм глубокого хаки оттенка — идеальный баланс строгости и непринуждённого шика.",
        "Создан для современной женщины, которая ценит минимализм, естественность и уверенность в каждом движении.",
        "Свободный крой добавляет лёгкости и комфорта.",
        "Ткань: плотная костюмная ткань премиум-класса, держащая форму и приятная к телу.",
        "[ Состав: 75% вискоза, 25% полиэстер ]",
        "Детали:",
        "Жакет: свободная посадка",
        "• Удлинённый крой",
        "• Однобортная застёжка",
        "Брюки: широкий, свободный силуэт",
        "• Высокая посадка",
        "• Застёжка на молнию и две пуговицы"
      ],
      colors: ["хаки"]
    }
  }
},




  {
  id: 201,
  price: 5800,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 4930,
  sku: "99343",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Leather Set/1.avif",
  images: [
    "/Costumes/Leather Set/2.avif",
    "/Costumes/Leather Set/3.avif",
    "/Costumes/Leather Set/4.avif",
    "/Costumes/Leather Set/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Leather Set",
      description: [
        "The embodiment of confidence, elegance, and modern style.",
        "A burgundy faux leather set designed for a woman who embraces soft strength and minimalism with character.",
        "Perfectly balanced silhouette: a cropped jacket accentuates the waistline, while flared pants visually elongate the legs, creating a sleek and harmonious look.",
        "Fabric: high-quality eco-leather on a suede base (stretchy, does not crack).",
        "Details:",
        "• Jacket fastening — tone-on-tone buttons",
        "• High-waisted flared pants",
        "• Perfect figure-hugging fit"
      ],
      colors: ["marsala"]
    },
    FR: {
      category: "Costumes",
      name: "Ensemble en cuir",
      description: [
        "L’incarnation de la confiance, de l’élégance et du style moderne.",
        "Un ensemble en cuir synthétique couleur bordeaux conçu pour une femme qui allie force douce et minimalisme affirmé.",
        "Silhouette parfaitement équilibrée : la veste courte souligne la taille, tandis que le pantalon évasé allonge visuellement les jambes pour une allure harmonieuse.",
        "Tissu : cuir écologique de haute qualité sur base daim (extensible, ne se fissure pas).",
        "Détails :",
        "• Fermeture de la veste — boutons ton sur ton",
        "• Pantalon taille haute et coupe évasée",
        "• Coupe parfaite mettant en valeur la silhouette"
      ],
      colors: ["marsala"]
    },
    UA: {
      category: "Костюми",
      name: "Шкіряний комплект",
      description: [
        "Втілення впевненості, елегантності й сучасного стилю.",
        "Комплект зі штучної шкіри кольору бордо створений для жінки, яка любить м’яку силу та мінімалізм із характером.",
        "Ідеально збалансований силует: короткий жакет підкреслює лінію талії, а брюки кльош візуально подовжують ноги, формуючи стрункий і гармонійний образ.",
        "Тканина: якісна екошкіра на замшевій основі (стрейчева, не тріскається).",
        "Деталі:",
        "• Застібка жакету — ґудзики у тон",
        "• Брюки з високою посадкою та подовженою лінією кльошу",
        "• Ідеальна посадка по фігурі"
      ],
      colors: ["марсала"]
    },
    RU: {
      category: "Костюмы",
      name: "Кожаный комплект",
      description: [
        "Воплощение уверенности, элегантности и современного стиля.",
        "Комплект из искусственной кожи бордового цвета создан для женщины, которая сочетает мягкую силу и минимализм с характером.",
        "Идеально сбалансированный силуэт: короткий жакет подчёркивает талию, а расклёшенные брюки визуально удлиняют ноги, создавая стройный и гармоничный образ.",
        "Ткань: качественная экокожа на замшевой основе (стрейчевая, не трескается).",
        "Детали:",
        "• Застёжка жакета — пуговицы в тон",
        "• Брюки с высокой посадкой и расклёшенным кроем",
        "• Идеальная посадка по фигуре"
      ],
      colors: ["марсала"]
    }
  }
},






      {
      id: 13,
      price: 3700,
      // isSpecialOffer: true,
      // discountPrice: 3145,
      sku: "12345",
      color: "beige",
      size: "XS S M L XL",
      category: "Outerwear",
      image: "/Outerwear/Твідовий бомбер/1.avif",
      images: ["/Outerwear/Твідовий бомбер/2.avif", "/Outerwear/Твідовий бомбер/3.avif", "/Outerwear/Твідовий бомбер/4.avif",
              "/Outerwear/Твідовий бомбер/5.avif", "/Outerwear/Твідовий бомбер/6.avif",
              "/Outerwear/Твідовий бомбер/7.avif", "/Outerwear/Твідовий бомбер/8.avif",
              ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Outerwear",
          name: "Tweed bomber jacket",
          description: "Quilted bomber jacket with high-quality lining and two pockets",
          colors: ["graphite", "gray"], 
        },
        FR: {
          category: "Vêtements d'extérieur",
          name: "Blouson aviateur en tweed",
          description: "Bomber matelassé avec doublure de qualité et deux poches",
          colors: ["graphite", "gris"],
        },
        UA: {
          category: "Верхній одяг",
          name: "Твідовий бомбер",
          description: "Стьоганий бомбер із якісною підкладкою та двома кишенями",
          colors: ["графіт", "сірий"],
        }
      }
    },

        {
      id: 36,
      price: 1500,
      isTop: false,
      // isSpecialOffer: true,
      // discountPrice: 1275,
      sku: "12350",
      color: "beige",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Flare Sweater/6.avif",
      images: [
        "/Sweaters/Flare Sweater/7.avif",
        "/Sweaters/Flare Sweater/8.avif",
        "/Sweaters/Flare Sweater/9.avif",
        "/Sweaters/Flare Sweater/10.avif",
        "/Sweaters/Flare Sweater/11.avif",
        "/Sweaters/Flare Sweater/12.avif",
        "/Sweaters/Flare Sweater/13.avif",
        "/Sweaters/Flare Sweater/14.avif",
        "/Sweaters/Flare Sweater/15.avif",
        "/Sweaters/Flare Sweater/16.avif",
        "/Sweaters/Flare Sweater/17.avif",
        "/Sweaters/Flare Sweater/18.avif",
        "/Sweaters/Flare Sweater/19.avif",
        "/Sweaters/Flare Sweater/20.avif",
        "/Sweaters/Flare Sweater/21.avif",
        "/Sweaters/Flare Sweater/22.avif",
        "/Sweaters/Flare Sweater/23.avif",
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Flare Sweater",
          description: "Cropped sweater with a turtleneck and flared sleeves. Fabric: Knit (60% wool, 20% acrylic, 10% viscose, 10% elastane).",
          colors: ["black", "white", "blue", "beige"],
        },
        FR: {
          category: "Pulls",
          name: "Pull évasé",
          description: "Pull court avec col roulé et manches évasées. Tissu : maille (60% laine, 20% acrylique, 10% viscose, 10% élasthanne).",
          colors: ["noir", "blanc"],
        },
        UA: {
          category: "Светри",
          name: "Светр кльош",
          description: "Вкорочений светр із горлом та кльош рукавами. Тканина: трикотаж (60% вовна, 20% акрил, 10% віскоза, 10% еластан).",
          colors: ["чорний", "білий", "блакитний", "бежевий"],
        },
        RU: {
          category: "Светри",
          name: "Свитер клеш",
          description: "Укороченный свитер с горлом и клеш рукавами. Ткань: трикотаж (60% шерсть, 20% акрил, 10% вискоза, 10% эластан).",
          colors: ["черный", "белый"],
        }
      }
    },





{
  id: 198,
  price: 2000,
  isTop: false,
  isNew: false,
  //  isSpecialOffer: true,
  // discountPrice: 1700,
  sku: "LS-OVR-21057",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Leather Oversize Pinafore/7.avif",
  images: [
  //  {
   //   type: "video",
   //   src: "/Dress/Leather Oversize Pinafore/preview.mp4",
    //  poster: "/Dress/Leather Oversize Pinafore/1.avif",
   // },

    "/Dress/Leather Oversize Pinafore/8.avif",
    "/Dress/Leather Oversize Pinafore/9.avif",
    "/Dress/Leather Oversize Pinafore/10.avif",
    "/Dress/Leather Oversize Pinafore/6.avif",
    "/Dress/Leather Oversize Pinafore/5.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Oversize Faux Leather Pinafore",
      description: [
        "A faux leather pinafore that blends strength and femininity. The oversize cut and smooth texture add confidence and style. Perfect with a sweater or blazer — for office, date night, or an evening out.",
        "Fabric: High-quality faux leather on a suede backing (stretch, won’t crack).",
        "Details:",
        "• Closure: back zipper",
        "• Length: midi"
      ],
      colors: ["mocha", "caramel"]
    },
    FR: {
      category: "Robes",
      name: "Robe-chasuble oversize en similicuir",
      description: [
        "Chasuble en similicuir alliant force et féminité. La coupe oversize et la texture lisse apportent assurance et style. Parfaite avec un pull ou un blazer — pour le bureau, un rendez-vous ou une soirée.",
        "Tissu : similicuir de haute qualité sur base suédée (élastique, ne se fissure pas).",
        "Détails :",
        "• Fermeture : zip au dos",
        "• Longueur : midi"
      ],
      colors: ["moka", "caramel"]
    },
    UA: {
      category: "Сукні",
      name: "Шкіряний сарафан oversize",
      description: [
        "Сарафан із екошкіри, що поєднує в собі силу й жіночність. Oversize крій та гладка фактура додає образу впевненості та стилю. Ідеальний у парі зі светром чи жакетом — для офісу, побачення або вечірнього виходу.",
        "Тканина: якісна екошкіра на замшевій основі (стретчева, не тріскається).",
        "Деталі:",
        "• Застібка: блискавка ззаду",
        "• Довжина: міді"
      ],
      colors: ["мокко", "карамель"]
    },
    RU: {
      category: "Платья",
      name: "Сарафан oversize из экокожи",
      description: [
        "Сарафан из экокожи, сочетающий силу и женственность. Oversize-крой и гладкая фактура добавляют уверенности и стиля. Идеален с свитером или жакетом — для офиса, свидания или вечернего выхода.",
        "Ткань: качественная экокожа на замшевой основе (эластичная, не трескается).",
        "Детали:",
        "• Застёжка: молния сзади",
        "• Длина: миди"
      ],
      colors: ["мокко", "карамель"]
    }
  }
},


 {
    id: 99,
    price: 2000,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1700,
    sku: "98819",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Batiste Shirt 2/1.avif",
    images: [
      "/Shirts/Batiste Shirt 2/2.avif",
      {
        type: "video",
        src: "/Shirts/Batiste Shirt 2/IMG_9010.mp4",
        poster: "/Shirts/Batiste Shirt 2/1.avif"
      },
      "/Shirts/Batiste Shirt 2/3.avif",
       "/Shirts/Batiste Shirt 2/4.avif",
      "/Shirts/Batiste Shirt 2/5.avif",
      "/Shirts/Batiste Shirt 2/6.avif",
      "/Shirts/Batiste Shirt 2/7.avif",
      "/Shirts/Batiste Shirt 2/8.avif",
      "/Shirts/Batiste Shirt 2/9.avif",
      "/Shirts/Batiste Shirt 2/10.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Batiste Shirt",
        description: "Shirt made of natural fabric, decorated with lace. Features puff sleeves.\nFabric: natural batiste.",
        colors: ["white", "light blue"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise en Batiste",
        description: "Chemise en tissu naturel ornée de dentelle. Manches bouffantes.\nTissu : batiste naturel.",
        colors: ["blanc", "bleu clair"]
      },
      UA: {
        category: "Сорочки",
        name: "Батистова сорочка",
        description: "Сорочка із натуральної тканини, яка оздоблена мереживом. Має рукава ліхтарики.\nТканина: натуральна тканина батист.",
        colors: ["білий", "блакитний"]
      },
      RU: {
        category: "Рубашки",
        name: "Батистовая рубашка",
        description: "Рубашка из натуральной ткани, украшенная кружевом. Имеет рукава-фонарики.\nТкань: натуральная ткань батист.",
        colors: ["белый", "голубой"]
      }
    }
  },  



  {
    id: 4,
    price: 3100,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2635,
    sku: "12345",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Woolen trapeze dress/1.avif",
    images: [
      // "/Dress/Woolen trapeze dress/22.avif",
      // "/Dress/Woolen trapeze dress/23.avif",
      // "/Dress/Woolen trapeze dress/24.avif",
      "/Dress/Woolen trapeze dress/2.avif", 
      "/Dress/Woolen trapeze dress/3.avif",
      {
        type: "video",
        src: "/Dress/Woolen trapeze dress/IMG_6176.mp4",
        poster: "/Dress/Woolen trapeze dress/1.avif"
      },
      "/Dress/Woolen trapeze dress/4.avif",
      "/Dress/Woolen trapeze dress/5.avif",
      // "/Dress/Woolen trapeze dress/6.avif",
      // "/Dress/Woolen trapeze dress/9.avif",
      // "/Dress/Woolen trapeze dress/8.avif",
      // "/Dress/Woolen trapeze dress/11.avif",
      // "/Dress/Woolen trapeze dress/12.avif",
      // "/Dress/Woolen trapeze dress/13.avif",
      // "/Dress/Woolen trapeze dress/14.avif",
      // "/Dress/Woolen trapeze dress/15.avif",
      // "/Dress/Woolen trapeze dress/16.avif",
      // "/Dress/Woolen trapeze dress/17.avif",
      // "/Dress/Woolen trapeze dress/18.avif",
      // "/Dress/Woolen trapeze dress/19.avif",
      // "/Dress/Woolen trapeze dress/20.avif",
      // "/Dress/Woolen trapeze dress/25.avif",
      // "/Dress/Woolen trapeze dress/26.avif",
      // "/Dress/Woolen trapeze dress/27.avif",
      // "/Dress/Woolen trapeze dress/28.avif",

    
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Woolen trapeze dress",
        description: "Trapeze dress with a pronounced belt\nComposition: 75% natural wool, soft, does not stick to the body.",
        color: "red",
        colors: ["jeans","gray",]
      },
      FR: {
        category: "Robes",
        name: "Robe trapèze en laine",
        description: "Robe trapèze avec ceinture marquée\nComposition: 75% laine naturelle, douce, ne colle pas à la peau.",
        color: "rouge",
        colors: ["jeans","gris"]
      },
      UA: {
        category: "Сукні",
        name: "Вовняна сукня трапеція",
        description: ["Трапецеїдна сукня з виразним поясом","Склад: 75% натуральної вовни", "м'яка, не прилипає до тіла."],
        color: "червоний",
        colors: ["джинсовий", "сірий"]
      }
    }
  },



  { 
      id: 30,
      price: 2100,
      isTop: false, // Топ продукт
      sku: "12346",
  //      isSpecialOffer: true,
  // discountPrice: 1785,
      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Leather Pants1/13.avif",
      images: [
        "/Pants/Leather Pants1/11.avif",
        "/Pants/Leather Pants1/12.avif",
        "/Pants/Leather Pants1/14.avif",
        "/Pants/Leather Pants1/15.avif",
        "/Pants/Leather Pants1/16.avif",
        "/Pants/Leather Pants1/17.avif",
        "/Pants/Leather Pants1/18.avif",
        
      ],
   
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Pants",
          name: "Leather Tube Pants",
          description: "Slim-fit pants with a high waist and zippers at the ankles. Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
          color: "beige, caramel, black",
          colors: ["black","caramel"],
        },
        FR: {
          category: "Pantalon",
          name: "Pantalon en cuir tube",
          description: "Pantalon ajusté à taille haute avec fermetures éclair aux chevilles. Tissu : cuir écologique de haute qualité sur une base en daim (stretch, ne se fissure pas).",
          color: "beige, caramel, noir",
          colors: ["noir","caramel"],
        },
        UA: {
          category: "Брюки",
          name: "Шкіряні брюки труби",
          description: "Брюки завуженого фасону на високій посадці та замочками на ніжці. Тканина: якісна екошкіра на замшевій основі. (стречева, не тріскається)",
          colors: ["Чорний","карамель"],
        },
        RU: {
          category: "Брюки",
          name: "Кожаные брюки трубы",
          description: "Брюки зауженного фасона на высокой посадке и замочками на ножке. Ткань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          colors: ["Черный"],
        }
      }
    },
{
      id: 27,
      price: 1760,
      isTop: false,
      sku: "67897",
      // isSpecialOffer: true,
      // discountPrice: 1496,
      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Jersey Pants/1.avif",
      images: [
        "/Pants/Jersey Pants/2.avif",
        "/Pants/Jersey Pants/3.avif",
        "/Pants/Jersey Pants/4.avif",
        "/Pants/Jersey Pants/5.avif",
        "/Pants/Jersey Pants/6.avif",
        "/Pants/Jersey Pants/7.avif",
        "/Pants/Jersey Pants/8.avif",
        "/Pants/Jersey Pants/9.avif", 
        "/Pants/Jersey Pants/10.avif",
      ],
     
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Pants",
          name: "Jersey Pants",
          description: "Cropped pants with an elastic waistband. Feature pronounced seams throughout the length.\nFabric: dense jersey knit",
          color: "black, cappuccino",
          colors: ["black", "cappuccino"],
        },
        FR: {
          category: "Pantalons",
          name: "Pantalon en jersey",
          description: "Pantalon court avec taille élastique. Doté de coutures prononcées sur toute la longueur.\nTissu: jersey dense",
          color: "noir, cappuccino",
          colors: ["noir", "cappuccino"],
        },
        UA: {
          category: "Брюки",
          name: "Брюки джерсі",
          description: "Вкорочені брюки на резинці. Мають шви по всій довжині.\nТканина: щільний трикотаж Джерсі",
          colors: ["чорний", "кавовий"],
        },
        RU: {
          category: "Брюки",
          name: "Брюки джерси",
          description: "Укороченные брюки на резинке. Имеют выраженные швы по всей длине.\nТкань: плотный трикотаж Джерси",
          colors: ["черный", "кавовий"],
        }
      }
},

  {
    id: 95,
    price: 2400,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2040,
    sku: "98815",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Pleated Leather Skirt/1.avif",
    images: [
      "/Skirts/Pleated Leather Skirt/2.avif",
      "/Skirts/Pleated Leather Skirt/3.avif",
      "/Skirts/Pleated Leather Skirt/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Pleated Leather Skirt",
        description: "Maxi-length pleated skirt with a high waist.\nFabric: high-quality eco-leather with suede base (stretchy, doesn’t crack).",
        colors: ["black"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe Plissée en Cuir",
        description: "Jupe plissée longue avec taille haute.\nTissu : simili cuir de haute qualité avec base en daim (extensible, ne se fissure pas).",
        colors: ["noir"]
      },
      UA: {
        category: "Спідниці",
        name: "Шкіряна спідниця плісе",
        description: "Спідниця максі довжини з плісеруванням на високій посадці.\nТканина: якісна екошкіра на замшевій основі (стрейчева, не тріскається).",
        colors: ["чорний"]
      },
      RU: {
        category: "Юбки",
        name: "Кожаная юбка плиссе",
        description: "Юбка макси длины с плиссировкой на высокой посадке.\nТкань: качественная экокожа на замшевой основе (стрейчевая, не трескающаяся).",
        colors: ["чёрный"]
      }
    }
  },
  {
    id: 125,
    price: 1800,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1530,
    sku: "67224",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Wrap Cotton Shirt/1.avif",
    images: [
        "/Shirts/Wrap Cotton Shirt/2.avif",
        "/Shirts/Wrap Cotton Shirt/3.avif",
        "/Shirts/Wrap Cotton Shirt/4.avif",
        "/Shirts/Wrap Cotton Shirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Shirts",
            name: "Wrap Cotton Shirt",
            description: "A cotton wrap shirt. Fastens at the side waist with a button.\nFabric: 100% cotton.",
            colors: ["white"]
        },
        FR: {
            category: "Chemises",
            name: "Chemise en Coton à Envelopper",
            description: "Une chemise en coton à envelopper. Se ferme sur le côté de la taille avec un bouton.\nTissu : 100 % coton.",
            colors: ["blanc"]
        },
        UA: {
            category: "Сорочки",
            name: "Сорочка на запах",
            description: "Сорочка бавовняна на запах. Застібається збоку талії на ґудзик.\nТканина: 100% бавовна.",
            colors: ["біла"]
        },
        RU: {
            category: "Рубашки",
            name: "Хлопковая рубашка на запах",
            description: "Хлопковая рубашка на запах. Застегивается сбоку на талии на пуговицу.\nТкань: 100% хлопок.",
            colors: ["белый"]
        }
    }
  },  
  {
    id: 116,
    price: 2000,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1700,
    sku: "33450",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Fitted Batiste Shirt/1.avif",
    images: [
      "/Shirts/Fitted Batiste Shirt/2.avif",
      "/Shirts/Fitted Batiste Shirt/3.avif",
      "/Shirts/Fitted Batiste Shirt/4.avif",
      "/Shirts/Fitted Batiste Shirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Fitted Batiste Shirt",
        description: "A fitted shirt adorned with lace and embroidered inserts.\nFabric: natural batiste.",
        colors: ["white"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise en batiste ajustée",
        description: "Une chemise ajustée ornée de dentelle et d'inserts brodés.\nTissu : batiste naturel.",
        colors: ["blanc"]
      },
      UA: {
        category: "Сорочки",
        name: "Батистова сорочка приталена",
        description: "Сорочка із натуральної тканини, яка оздоблена мереживом та вставками із прошви. Класичного приталеного крою.\nТканина: натуральний батист.",
        colors: ["біла"]
      },
      RU: {
        category: "Рубашки",
        name: "Батистовая рубашка приталенная",
        description: "Рубашка из натуральной ткани, украшенная кружевом и вставками с вышивкой. Классический приталенный крой.\nТкань: натуральный батист.",
        colors: ["белая"]
      }
    }
  },
    {
      id: 14,
      price: 1800,
      // isSpecialOffer: true,
      // discountPrice: 1530,
      sku: "12345",
      color: "blue",
      size: "XS S M L XL",
      category: "Shirts",
      image: "/Shirts/Classicshirt/2.avif",
      images: ["/Shirts/Classicshirt/1.avif", "/Shirts/Classicshirt/3.avif", "/Shirts/Classicshirt/4.avif", "/Shirts/Classicshirt/5.avif", "/Shirts/Classicshirt/1.avif"],
       
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Shirts",
          name: "Classic shirt",
          description: "Loose-fitting cotton shirt. Fabric: 100% cotton",
          colors: ["white"],
        },
        FR: {
          category: "Chemises",
          name: "Chemise classique",
          description: "Chemise en coton à coupe libre. Tissu : 100 % coton",
          colors: ["blanc"],
        },
        UA: {
          category: "Сорочки",
          name: "Класична сорочка",
          description: "Сорочка бавовняна вільного крою. Тканина: 100% бавовна",
          colors: ["білий"],
        }
      }
    },
        {
      id: 10,
      price: 1350 ,
      sku: "12345",
      // isSpecialOffer: true,
      // discountPrice: 1148,
      
      size: "XS S M L XL",
      category: "Tops",
      image: "/Top/Openshouldergolf/5.avif",
      images: ["/Top/Openshouldergolf/2.avif", "/Top/Openshouldergolf/3.avif", "/Top/Openshouldergolf/4.avif", "/Top/Openshouldergolf/1.avif","/Top/Openshouldergolf/5.avif", "/Top/Openshouldergolf/6.avif"],
       
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Tops",
          name: "Open-shoulder golf",
          description: "off-shoulder turtleneck made of soft fabric: 50% cashmere, 28% polyester, 28% nylon",
          color: "blue",
          colors: ["milky", "black"],
        },
        FR: {
          category: "Tops",
          name: "Golfer avec les épaules ouvertes",
          description: "col roulé à épaules dénudées en tissu doux : 50 % cachemire, 28 % polyester, 28 % nylon",
          colors:["lait", "noir"],
        },
        UA: {
          category: "Топи",
          name: "Гольф із відкритими плечима",
          description: "гольф із відкритими плечима із мʼякої тканини: 50% кашемір, 28% поліестер, 28% нейлон",
          colors: ["молочний", "чорний"],
        }
      }
    },


//     {
//   id: 196,
//   price: 5210,
//   isTop: false,
//   isNew: true,
//   //  isSpecialOffer: true,
//   //   discountPrice: 4429,
//   sku: "99338",
//   size: "XS S M L XL",
//   category: "Costumes",
//   image: "/Costumes/Cardigan Suit/1.avif",
//   images: [
//     "/Costumes/Cardigan Suit/2.avif",
//     "/Costumes/Cardigan Suit/3.avif",
//     "/Costumes/Cardigan Suit/4.avif",
//     "/Costumes/Cardigan Suit/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Suits",
//       name: "Cardigan Suit",
//       description: [
//         "A minimalist suit in a contemporary style for modern women.",
//         "Includes a straight wrap cardigan and wide-leg high-waist trousers.",
//         "Perfect for both office looks and relaxed city outfits.",
//         "Fabric: Premium natural wool for warmth, coziness, and a pleasant feel.",
//         "[ Composition: 75% wool ]",
//         "Details:",
//         "• Cardigan: V-neckline, convenient pockets.",
//         "• Trousers: High waist, elongated silhouette."
//       ],
//       colors: ["graphite"]
//     },
//     FR: {
//       category: "Costumes",
//       name: "Costume avec cardigan",
//       description: [
//         "Un costume minimaliste au style contemporain pour les femmes modernes.",
//         "Composé d’un cardigan droit croisé et d’un pantalon large taille haute.",
//         "Idéal pour le bureau comme pour des tenues décontractées en ville.",
//         "Tissu : laine naturelle premium offrant chaleur, confort et toucher agréable.",
//         "[ Composition : 75% laine ]",
//         "Détails :",
//         "• Cardigan : encolure en V, poches pratiques.",
//         "• Pantalon : taille haute, silhouette allongée."
//       ],
//       colors: ["graphite"]
//     },
//     UA: {
//       category: "Костюми",
//       name: "Костюм із кардиганом",
//       description: [
//         "Лаконічний костюм у мінімалістичному стилі для сучасних дівчат.",
//         "Складається з прямого кардигану на запах та широких брюк із високою посадкою.",
//         "Ідеально підходить як для офісу, так і для розслаблених міських образів.",
//         "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
//         "[ Склад: 75% вовни ]",
//         "Деталі:",
//         "• Кардиган: V-подібний виріз, зручні кишені.",
//         "• Брюки: Висока посадка, подовжений силует."
//       ],
//       colors: ["графіт"]
//     },
//     RU: {
//       category: "Костюмы",
//       name: "Костюм с кардиганом",
//       description: [
//         "Лаконичный костюм в минималистичном стиле для современных девушек.",
//         "Состоит из прямого кардигана на запах и широких брюк с высокой посадкой.",
//         "Идеально подходит как для офиса, так и для расслабленных городских образов.",
//         "Ткань: натуральная премиальная шерсть, обеспечивающая тепло, уют и приятные тактильные ощущения.",
//         "[ Состав: 75% шерсти ]",
//         "Детали:",
//         "• Кардиган: V-образный вырез, удобные карманы.",
//         "• Брюки: высокая посадка, удлинённый силуэт."
//       ],
//       colors: ["графит"]
//     }
//   }
// },






{
  id: 192,
  price: 1900,
  isTop: false,
  isNew: false,
  //  isSpecialOffer: true,
  // discountPrice: 1615,
  sku: "99334",
  size: "XS S M L XL",
  category: "Pants",
  image: "/Pants/Tweed Pants/1.avif",
  images: [
    "/Pants/Tweed Pants/2.avif",
    "/Pants/Tweed Pants/3.avif",
    "/Pants/Tweed Pants/4.avif",
    "/Pants/Tweed Pants/5.avif",
    "/Pants/Tweed Pants/6.avif",
    "/Pants/Tweed Pants/7.avif",
    "/Pants/Tweed Pants/8.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Pants",
      name: "Tweed Pants",
      description: [
        "Banana-style trousers in graphite shade — the perfect balance between comfort and modern tailoring.",
        "Loose at the hips and tapered at the bottom, they fit easily and add effortless chic to your look.",
        "Fabric: Quilted tweed.",
        "Details:",
        "• Pair well with both sneakers and heels.",
        "• Dense textured fabric holds its shape."
      ],
      colors: ["graphite", "grey"]
    },
    FR: {
      category: "Pantalons",
      name: "Pantalon en tweed",
      description: [
        "Pantalon banane en teinte graphite — l’équilibre parfait entre confort et coupe moderne.",
        "Ample sur les hanches et resserré vers le bas, il s’adapte facilement et ajoute une touche chic décontractée à votre look.",
        "Tissu : tweed matelassé.",
        "Détails :",
        "• S’accorde aussi bien avec des baskets qu’avec des talons.",
        "• Tissu texturé dense qui garde sa forme."
      ],
      colors: ["graphite", "gris"]
    },
    UA: {
      category: "Брюки",
      name: "Твідові брюки",
      description: [
        "Банани у відтінку графіт — це ідеальний варіант для тих, хто шукає баланс між комфортом та сучасним кроєм.",
        "Вільні у стегнах, звужені донизу — вони легко сідають по фігурі й додають образу невимушеного шику.",
        "Тканина: стьобаний твід.",
        "Деталі:",
        "• Добре поєднуються як з кросівками, так і з підборами.",
        "• Щільна фактурна тканина тримає форму."
      ],
      colors: ["графіт", "сірий"]
    },
    RU: {
      category: "Брюки",
      name: "Твидовые брюки",
      description: [
        "Бананы в графитовом оттенке — идеальный вариант для тех, кто ищет баланс между комфортом и современным кроем.",
        "Свободные на бёдрах, зауженные книзу — они легко садятся по фигуре и добавляют образу непринуждённого шика.",
        "Ткань: стёганый твид.",
        "Детали:",
        "• Отлично сочетаются как с кроссовками, так и с каблуками.",
        "• Плотная фактурная ткань держит форму."
      ],
      colors: ["графит", "серый"]
    }
  }
},

{
  id: 191,
  price: 5600,
  isTop: false,
  isNew: false,
  //  isSpecialOffer: true,
  // discountPrice: 4760,
  sku: "99333",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Bomber Suit/1.avif",
  images: [
    "/Costumes/Bomber Suit/2.avif",
    
    "/Costumes/Bomber Suit/3.avif",
    "/Costumes/Bomber Suit/4.avif",
    "/Costumes/Bomber Suit/5.avif",
    "/Costumes/Bomber Suit/6.avif",
    "/Costumes/Bomber Suit/7.avif",
    "/Costumes/Bomber Suit/8.avif",
    "/Costumes/Bomber Suit/9.avif",
    "/Costumes/Bomber Suit/10.avif",
    "/Costumes/Bomber Suit/11.avif",
    "/Costumes/Bomber Suit/12.avif",
    "/Costumes/Bomber Suit/13.avif",
    "/Costumes/Bomber Suit/14.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Bomber Suit",
      description: [
        "A stylish total grey look for the city.",
        "The oversized quilted bomber adds character and warmth, while banana pants highlight a modern silhouette. This combination easily adapts: with chunky boots for street style or loafers for the office.",
        "Fabric: Quilted tweed.",
        "Details:",
        "• Bomber: Dense fabric that holds its shape.",
        "• Quilted design emphasizing texture.",
        "• Pants: Pair well with both sneakers and heels.",
        "• Dense textured fabric maintains structure."
      ],
      colors: ["graphite", "grey", "chocolat"]
    },
    FR: {
      category: "Costumes",
      name: "Costume avec bomber",
      description: [
        "Un total look gris élégant pour la ville.",
        "Le bomber matelassé oversize ajoute du caractère et de la chaleur, tandis que le pantalon banane souligne une silhouette moderne. Cette combinaison s’adapte facilement : avec des bottes massives pour le street style ou des mocassins classiques pour le bureau.",
        "Tissu : tweed matelassé.",
        "Détails :",
        "• Bomber : tissu dense qui garde sa forme.",
        "• Design matelassé qui met en valeur la texture.",
        "• Pantalon : se combine aussi bien avec des baskets qu’avec des talons.",
        "• Tissu texturé dense qui conserve la structure."
      ],
      colors: ["graphite", "gris"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм із бомбером",
      description: [
        "Стильний total grey для міста.",
        "Об’ємний стьобаний бомбер додає образу характеру та тепла, а брюки-банани створюють акцент на сучасному силуеті. Це поєднання легко адаптується: з масивними черевиками — для стрітстайлу, з класичними лоферами — для офісу.",
        "Тканина: стьобаний твід.",
        "Деталі:",
        "• Бомбер: щільна тканина, що тримає форму.",
        "• Стьобаний дизайн для акценту на фактурі.",
        "• Брюки: добре поєднуються як з кросівками, так і з підборами.",
        "• Щільна фактурна тканина тримає форму."
      ],
      colors: ["графіт", "сірий", "шоколад"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм с бомбером",
      description: [
        "Стильный total grey для города.",
        "Объёмный стёганый бомбер добавляет образу характера и тепла, а брюки-бананы создают акцент на современном силуэте. Это сочетание легко адаптируется: с массивными ботинками — для стритстайла, с классическими лоферами — для офиса.",
        "Ткань: стёганый твид.",
        "Детали:",
        "• Бомбер: плотная ткань, держащая форму.",
        "• Стёганый дизайн для акцента на фактуре.",
        "• Брюки: отлично сочетаются как с кроссовками, так и с каблуками.",
        "• Плотная фактурная ткань держит форму."
      ],
      colors: ["графит", "серый"]
    }
  }
},

{
  id: 190,
  price: 6100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 5185,
  sku: "99332",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Trench Suit/1.avif",
  images: [
    "/Costumes/Trench Suit/2.avif",
     {
      type: "video",
      src: "/Costumes/Trench Suit/IMG_5568.mp4",
      poster: "/Costumes/Trench Suit/4.avif",
    },
    "/Costumes/Trench Suit/3.avif",
    "/Costumes/Trench Suit/4.avif",
    "/Costumes/Trench Suit/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Trench Suit",
      description: [
        "An elegant ensemble that combines modern femininity with classic style. A wrap sundress fits perfectly, while the trench adds a polished finish. Together they create a flawless look for the city, work, or special outings.",
        "Fabric: Premium-quality natural wool for warmth, comfort, and a pleasant feel. [Composition: 75% wool]",
        "Details:",
        "• Sundress: Wrap design with buttons and a belt that accentuates the waist.",
        "• Midi length adds elegance and makes the silhouette refined.",
        "• V-neckline creates a feminine accent.",
        "• Trench: Double-breasted buttons, classic lapels.",
        "• Cropped length emphasizes proportions and gives lightness to the look."
      ],
      colors: ["graphite", "mocha"]
    },
    FR: {
      category: "Costumes",
      name: "Costume avec trench",
      description: [
        "Un ensemble élégant qui allie féminité moderne et style classique. La robe portefeuille s’adapte parfaitement à la silhouette, tandis que le trench apporte une touche finale sophistiquée. Ensemble, ils créent un look impeccable pour la ville, le travail ou les occasions spéciales.",
        "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et douceur au toucher. [Composition : 75% laine]",
        "Détails :",
        "• Robe : coupe portefeuille avec boutons et ceinture qui souligne la taille.",
        "• Longueur midi pour plus d’élégance et une silhouette raffinée.",
        "• Encolure en V pour un accent féminin.",
        "• Trench : double rangée de boutons, revers classiques.",
        "• Longueur courte qui souligne les proportions et apporte de la légèreté."
      ],
      colors: ["graphite", "moka"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм із тренчем",
      description: [
        "Елегантний ансамбль, який поєднує сучасну жіночність та класику. Стилізований сарафан на запах ідеально сідає по фігурі, а тренч додає завершеності образу. Разом вони створюють бездоганний лук для міста, роботи чи особливих виходів.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття. [Склад: 75% вовни]",
        "Деталі:",
        "• Сарафан: фасон із запахом на ґудзиках і поясом, який підкреслює талію.",
        "• Довжина міді додає елегантності та робить силует витонченим.",
        "• V-подібний виріз формує жіночний акцент.",
        "• Тренч: подвійний ряд ґудзиків, класичні лацкани.",
        "• Довжина до талії підкреслює пропорції та надає легкості образу."
      ],
      colors: ["графіт", "мокко"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм с тренчем",
      description: [
        "Элегантный ансамбль, сочетающий современную женственность и классику. Платье-сарафан на запах идеально садится по фигуре, а тренч завершает образ. Вместе они создают безупречный лук для города, работы или особых случаев.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения. [Состав: 75% шерсти]",
        "Детали:",
        "• Сарафан: фасон с запахом на пуговицах и поясом, подчеркивающим талию.",
        "• Длина миди добавляет элегантности и делает силуэт изящным.",
        "• V-образный вырез формирует женственный акцент.",
        "• Тренч: двойной ряд пуговиц, классические лацканы.",
        "• Длина до талии подчеркивает пропорции и добавляет лёгкости образу."
      ],
      colors: ["графит", "мокко"]
    }
  }
},

{
  id: 189,
  price: 1700,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1445,
  sku: "99331",
  size: "XS S M L XL",
  category: "Sweaters",
  image: "/Sweaters/V-neck sweater/6.avif",
  images: [
    "/Sweaters/V-neck sweater/7.avif",
    "/Sweaters/V-neck sweater/8.avif",
    "/Sweaters/V-neck sweater/9.avif",
    "/Sweaters/V-neck sweater/10.avif",
    "/Sweaters/V-neck sweater/11.avif",
    "/Sweaters/V-neck sweater/12.avif",
    "/Sweaters/V-neck sweater/13.avif",
    "/Sweaters/V-neck sweater/1.avif",
    "/Sweaters/V-neck sweater/2.avif",
    "/Sweaters/V-neck sweater/3.avif",
    "/Sweaters/V-neck sweater/4.avif",
    "/Sweaters/V-neck sweater/5.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Sweaters",
      name: "V-neck sweater",
      description: [
        "A stylish accent for your wardrobe — a loose sweater made of soft yarn with delicate lurex. It combines comfort with a subtle shimmer, creating effortless elegance.",
        "Fabric: Wool knit with lurex. [Composition: 65% wool]",
        "Details:",
        "• Relaxed oversize silhouette suitable for all body types.",
        "• Deep V-neckline that beautifully opens the neck and allows for layered styling.",
        "• Long dropped sleeves for a modern, laid-back look."
      ],
      colors: ["pistachio", "white", "black"]
    },
    FR: {
      category: "Sweaters",
      name: "Pull en lurex",
      description: [
        "Un accent élégant dans votre garde-robe — un pull ample en fil doux avec un délicat lurex. Il allie confort et léger éclat pour une élégance décontractée.",
        "Tissu : tricot de laine avec lurex. [Composition : 65% laine]",
        "Détails :",
        "• Coupe oversize décontractée adaptée à toutes les morphologies.",
        "• Profond col en V qui met en valeur le cou et permet des superpositions stylées.",
        "• Manches longues tombantes pour un style moderne et détendu."
      ],
      colors: ["pistachio", "blanc","noir"]
    },
    UA: {
      category: "Светри",
      name: "Светр з V-вирізом",
      description: [
        "Стильний акцент у вашому гардеробі — вільний светр із м’якої пряжі з делікатним люрексом. Він поєднує комфорт і легкий блиск, створюючи ефект невимушеної елегантності.",
        "Тканина: Вовняний трикотаж із люрексом. [Склад: 65% вовни]",
        "Деталі:",
        "• Вільний oversize силует, що підходить для будь-якого типу фігури.",
        "• Глибокий V-подібний виріз, який красиво відкриває шию та дозволяє створювати багатошарові образи.",
        "• Довгі спущені рукави для розслабленого, сучасного стилю."
      ],
      colors: ["фісташка", "білий", "чорний"]
    },
    RU: {
      category: "Свитера",
      name: "Свитер с люрексом",
      description: [
        "Стильный акцент в вашем гардеробе — свободный свитер из мягкой пряжи с деликатным люрексом. Он сочетает комфорт и лёгкий блеск, создавая эффект непринуждённой элегантности.",
        "Ткань: шерстяной трикотаж с люрексом. [Состав: 65% шерсти]",
        "Детали:",
        "• Свободный oversize силуэт, подходящий для любого типа фигуры.",
        "• Глубокий V-образный вырез, красиво открывающий шею и позволяющий создавать многослойные образы.",
        "• Длинные спущенные рукава для расслабленного, современного стиля."
      ],
      colors: ["фісташка", "білий", "чорний"]
    }
  }
},







// {
//   id: 185,
//   price: 2250,
//   isTop: false,
//   isNew: true,
//   // isSpecialOffer: true,
//   // discountPrice: 2025,
//   sku: "99327",
//   size: "XS S M L XL",
//   category: "Skirts",
//   image: "/Skirts/Mocha Skirt/1.avif",
//   images: [
//     "/Skirts/Mocha Skirt/2.avif",
//     "/Skirts/Mocha Skirt/3.avif",
//     "/Skirts/Mocha Skirt/4.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Skirts",
//       name: "Eggplant Skirt",
//       description: [
//         "Elegant wool midi skirt with a gentle flare. A versatile base that pairs perfectly with jumpers or classic blouses.",
//         "Fabric: Premium-quality natural wool for warmth, comfort, and a pleasant tactile feel. [Composition: 75% wool]",
//         "Details:",
//         "• Midi length, gentle flare from the hips.",
//         "• Visually elongates the silhouette, adding a feminine accent."
//       ],
//       colors: ["eggplant"]
//     },
//     FR: {
//       category: "Jupes",
//       name: "Jupe «Mocha»",
//       description: [
//         "Élégante jupe midi en laine avec une légère évasée. Une base polyvalente qui se marie aussi bien avec des pulls que des chemisiers classiques.",
//         "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et douceur au toucher. [Composition : 75% laine]",
//         "Détails :",
//         "• Longueur midi, légère évasée à partir des hanches.",
//         "• Allonge visuellement la silhouette en ajoutant une touche féminine."
//       ],
//       colors: ["moka"]
//     },
//     UA: {
//       category: "Спідниці",
//       name: "Спідниця «Eggplant»",
//       description: [
//         "Елегантна вовняна спідниця довжини міді з легким розкльошенням. Універсальна база, яка гармонійно виглядає як з джемперами, так і з класичними блузами.",
//         "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття. [Склад: 75% вовни]",
//         "Деталі:",
//         "• Спідниця: довжина міді, легке розкльошення від стегон.",
//         "• Візуально подовжує силует, створюючи жіночний акцент."
//       ],
//       colors: ["баклажан"]
//     },
//     RU: {
//       category: "Юбки",
//       name: "Юбка «Mocha»",
//       description: [
//         "Элегантная шерстяная юбка миди с лёгким расклёшением. Универсальная база, гармонично смотрится как с джемперами, так и с классическими блузками.",
//         "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения. [Состав: 75% шерсти]",
//         "Детали:",
//         "• Юбка: длина миди, лёгкое расклёшение от бёдер.",
//         "• Визуально удлиняет силуэт, создавая женственный акцент."
//       ],
//       colors: ["мокко"]
//     }
//   }
// },

// {
//   id: 184,
//   price: 2100,
//   isTop: true,
//   isNew: true,
//   //  isSpecialOffer: true,
//   // discountPrice: 1890,
//   sku: "99326",
//   size: "XS S M L XL",
//   category: "Tops",
//   image: "/Top/Mocha Jumper/1.avif",
//   images: [
//     "/Top/Mocha Jumper/2.avif",
//     "/Top/Mocha Jumper/3.avif",
//     "/Top/Mocha Jumper/4.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Tops",
//       name: "Eggplant Jumper",
//       description: [
//         "A stylish and practical wool jumper with a straight cut, neckline slit, and patch pockets. Perfect for everyday looks during the cooler season.",
//         "Fabric: Premium-quality natural wool for warmth, comfort, and a pleasant tactile feel. [Composition: 75% wool]",
//         "Details:",
//         "• Straight silhouette with long sleeves.",
//         "• Two patch pockets as an accent detail."
//       ],
//       colors: ["mocha"]
//     },
//     FR: {
//       category: "Hauts",
//       name: "Jumper «Mocha»",
//       description: [
//         "Un pull en laine élégant et pratique, coupe droite, avec une fente à l’encolure et des poches plaquées. Idéal pour les looks quotidiens en saison fraîche.",
//         "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et douceur au toucher. [Composition : 75% laine]",
//         "Détails :",
//         "• Coupe droite avec manches longues.",
//         "• Deux poches plaquées comme détail accentué."
//       ],
//       colors: ["moka"]
//     },
//     UA: {
//       category: "Топи",
//       name: "Джемпер «Eggplant»",
//       description: [
//         "Стильний і практичний джемпер із вовни, прямого крою, з розрізом по горловині та накладними кишенями. Ідеальний для повсякденних образів у прохолодний сезон.",
//         "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття. [Склад: 75% вовни]",
//         "Деталі:",
//         "• Джемпер: прямий силует із довгим рукавом.",
//         "• Дві накладні кишені як акцентна деталь."
//       ],
//       colors: ["баклажан"]
//     },
//     RU: {
//       category: "Топы",
//       name: "Джемпер «Mocha»",
//       description: [
//         "Стильный и практичный шерстяной джемпер прямого кроя с разрезом по горловине и накладными карманами. Идеален для повседневных образов в прохладный сезон.",
//         "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения. [Состав: 75% шерсти]",
//         "Детали:",
//         "• Джемпер: прямой силуэт с длинным рукавом.",
//         "• Два накладных кармана как акцент."
//       ],
//       colors: ["мокко"]
//     }
//   }
// },

// {
//   id: 183,
//   price: 4350,
//   isTop: true,
//   isNew: true,
//   // isSpecialOffer: true,
//   //   discountPrice: 3915,
//   sku: "99325",
//   size: "XS S M L XL",
//   category: "Costumes",
//   image: "/Costumes/Mocha/1.avif",
//   images: [
//     "/Costumes/Mocha/2.avif",
//     "/Costumes/Mocha/3.avif",
//     "/Costumes/Mocha/4.avif",
//     "/Costumes/Mocha/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Costumes",
//       name: "Eggplant",
//       description: [
//         "An elegant ensemble that combines warmth and sophistication. The minimalist cut and noble wool texture create a modern ‘French chic’ style.",
//         "The set can be worn as a total look or combined separately: the jumper with trousers or jeans, the skirt with a blouse or sweater.",
//         "Fabric: Premium-quality natural wool for warmth, comfort, and a pleasant tactile feel. [Composition: 75% wool]",
//         "Details:",
//         "• Jumper: Straight silhouette with long sleeves, two patch pockets as an accent detail.",
//         "• Skirt: Midi length with a slight flare from the hips, visually elongates the silhouette and adds femininity."
//       ],
//       colors: ["eggplant"]
//     },
//     FR: {
//       category: "Costumes",
//       name: "Costume «Mocha»",
//       description: [
//         "Un ensemble raffiné qui allie chaleur et élégance. La coupe minimaliste et la texture noble de la laine créent un style moderne «chic français».",
//         "Le set peut être porté en total look ou séparément : le pull avec un pantalon ou un jean, la jupe avec un chemisier ou un pull.",
//         "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et douceur au toucher. [Composition : 75% laine]",
//         "Détails :",
//         "• Pull : coupe droite à manches longues, deux poches plaquées comme détail accentué.",
//         "• Jupe : longueur midi avec légère évasement à partir des hanches, allonge visuellement la silhouette et souligne la féminité."
//       ],
//       colors: ["moka"]
//     },
//     UA: {
//       category: "Костюми",
//       name: "Костюм «Eggplant»",
//       description: [
//         "Витончений ансамбль, який поєднує тепло та елегантність. Лаконічний крій і благородна фактура вовни створюють сучасний образ у стилі «французький шик».",
//         "Комплект можна носити як total look або комбінувати окремо: джемпер — із брюками чи джинсами, спідницю — з блузою або светром.",
//         "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття. [Склад: 75% вовни]",
//         "Деталі:",
//         "• Джемпер: прямий силует із довгим рукавом, дві накладні кишені як акцентна деталь.",
//         "• Спідниця: довжина міді, легке розкльошення від стегон, візуально подовжує силует і створює жіночний акцент."
//       ],
//       colors: ["баклажан"]
//     },
//     RU: {
//       category: "Костюмы",
//       name: "Костюм «Mocha»",
//       description: [
//         "Изысканный ансамбль, сочетающий тепло и элегантность. Лаконичный крой и благородная фактура шерсти создают современный образ в стиле «французский шик».",
//         "Комплект можно носить как total look или комбинировать отдельно: джемпер — с брюками или джинсами, юбку — с блузой или свитером.",
//         "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения. [Состав: 75% шерсти]",
//         "Детали:",
//         "• Джемпер: прямой силуэт с длинным рукавом, две накладные карманы как акцент.",
//         "• Юбка: длина миди, лёгкое расклешение от бёдер, визуально удлиняет силуэт и подчёркивает женственность."
//       ],
//       colors: ["мокко"]
//     }
//   }
// },

    

    {
      id: 26,
      price: 2800,
      isTop: false,
      // isSpecialOffer: true,
      // discountPrice: 2520,
      sku: "67896",
      
      size: "XS S M L XL",
      category: "Dresses",
      image: "/Dress/Jersey Two-Piece Dress/1.avif",
      images: [
        "/Dress/Jersey Two-Piece Dress/2.avif",
        "/Dress/Jersey Two-Piece Dress/3.avif",
        "/Dress/Jersey Two-Piece Dress/4.avif"
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Dresses",
          name: "Jersey Two-Piece Dress",
          description: "Dense everyday dress. Precise lines, form, design, and style. Wash each part of the dress separately.\nFabric: dense jersey knit",
          color: "black-white",
          colors: ["black-white"],
        },
        FR: {
          category: "Robes",
          name: "Robe en jersey deux pièces",
          description: "Robe quotidienne dense. Lignes précises, forme, design et style. Laver chaque partie de la robe séparément.\nTissu: jersey dense",
          color: "noir-blanc",
          colors: ["noir-blanc"],
        },
        UA: {
          category: "Сукні",
          name: "Сукня 2-ка джерсі",
          description: "Щільна сукня на кожен день. Чіткі лінії, форма, дизайн та стиль. Кожну частину сукні прати окремо.\nТканина: щільний трикотаж Джерсі",
          colors: ["чорно-білий"],
        },
        RU: {
          category: "Платья",
          name: "Платье 2-ка джерси",
          description: "Плотное платье на каждый день. Четкие линии, форма, дизайн и стиль. Каждую часть платья стирать отдельно.\nТкань: плотный трикотаж Джерси",
          colors: ["черно-белый"],
        }
      }
    },



  {
  id: 182,
  price: 2800,
  isTop: true,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 2023,
  sku: "99324",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/3D Effect Bomber/1.avif",
  images: [
    "/Jackets/3D Effect Bomber/2.avif",
    "/Jackets/3D Effect Bomber/3.avif",
    "/Jackets/3D Effect Bomber/4.avif",
    "/Jackets/3D Effect Bomber/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "3D Effect Bomber",
      description: [
        "Lightweight bomber with 3D feather effect, perfect for early autumn or spring. A stylish addition to your outfits.",
        "Fabric: 100% natural cotton.",
        "Details:",
        "• bomber without lining",
        "• cuffs on sleeves and waistband"
      ],
      colors: ["milk"]
    },
    FR: {
      category: "Vestes",
      name: "Bomber effet 3D",
      description: [
        "Bomber léger avec effet plumes 3D, idéal pour le début de l’automne ou le printemps. Un ajout élégant à vos tenues.",
        "Tissu : 100 % coton naturel.",
        "Détails :",
        "• bomber sans doublure",
        "• poignets aux manches et ceinture"
      ],
      colors: ["blanc"]
    },
    UA: {
      category: "Жакети",
      name: "Бомбер з 3Д ефектом",
      description: [
        "Легкий бомбер з 3Д ефектом пір’їв на ранню осінь / весну. Стане цікавим доповненням до твоїх образів.",
        "Тканина: 100% натуральна бавовна.",
        "Деталі:",
        "• бомбер без підкладки",
        "• манжети на рукавах та поясі"
      ],
      colors: ["молочний"]
    },
    RU: {
      category: "Жакеты",
      name: "Бомбер с 3D эффектом",
      description: [
        "Лёгкий бомбер с 3D эффектом перьев для ранней осени или весны. Станет стильным дополнением твоих образов.",
        "Ткань: 100% натуральный хлопок.",
        "Детали:",
        "• бомбер без подкладки",
        "• манжеты на рукавах и поясе"
      ],
      colors: ["молочный"]
    }
  }
},

  {
  id: 181,
  price: 4900,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 4165,
  sku: "99323",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/3D Effect Suit/1.avif",
  images: [
    "/Costumes/3D Effect Suit/2.avif",
    "/Costumes/3D Effect Suit/3.avif",
    "/Costumes/3D Effect Suit/4.avif",
    "/Costumes/3D Effect Suit/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "3D Effect Suit",
      description: [
        "Lightweight suit with 3D feather effect, perfect for early autumn or spring. Includes bomber + trousers.",
        "Fabric: Bomber - 100% natural cotton; Trousers - 100% linen.",
        "Details:",
        "• bomber without lining",
        "• high-waist trousers with a banana cut"
      ],
      colors: ["milk"]
    },
    FR: {
      category: "Costumes",
      name: "Costume effet 3D",
      description: [
        "Costume léger avec effet 3D plumes, idéal pour le début de l’automne ou le printemps. Comprend bomber + pantalon.",
        "Tissu : Bomber - 100 % coton naturel ; Pantalon - 100 % lin.",
        "Détails :",
        "• bomber sans doublure",
        "• pantalon taille haute coupe banane"
      ],
      colors: ["blanc"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм з 3Д ефектом",
      description: [
        "Легкий костюм з 3Д ефектом пір’їв на ранню осінь / весну: бомбер + брюки.",
        "Тканина: Бомбер - 100% натуральна бавовна; Брюки - 100% льон.",
        "Деталі:",
        "• бомбер без підкладки",
        "• висока посадка брюк та фасон бананів"
      ],
      colors: ["молочний"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм с 3D эффектом",
      description: [
        "Лёгкий костюм с 3D эффектом перьев для ранней осени или весны: бомбер + брюки.",
        "Ткань: Бомбер - 100% натуральный хлопок; Брюки - 100% лён.",
        "Детали:",
        "• бомбер без подкладки",
        "• высокая посадка брюк и фасон бананов"
      ],
      colors: ["молочный"]
    }
  }
},

  {
  id: 180,
  price: 4900,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 4165,
  sku: "99322",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Distressed Effect Suit/1.avif",
  images: [
    "/Costumes/Distressed Effect Suit/2.avif",
    "/Costumes/Distressed Effect Suit/3.avif",
    "/Costumes/Distressed Effect Suit/4.avif",
    "/Costumes/Distressed Effect Suit/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Distressed Effect Suit",
      description: [
        "Lightweight suit with a unique distressed effect, perfect for early autumn or spring. Includes bomber + trousers.",
        "Fabric: Bomber - 100% natural distressed linen; Trousers - 100% linen.",
        "Details:",
        "• bomber without lining",
        "• high-waist trousers with a banana cut"
      ],
      colors: ["black"]
    },
    FR: {
      category: "Costumes",
      name: "Costume effet usé",
      description: [
        "Costume léger avec un effet usé original, idéal pour le début de l’automne ou le printemps. Comprend un bomber + un pantalon.",
        "Tissu : Bomber - 100 % lin naturel effet usé ; Pantalon - 100 % lin.",
        "Détails :",
        "• bomber sans doublure",
        "• pantalon taille haute coupe banane"
      ],
      colors: ["noir"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм з рваним ефектом",
      description: [
        "Легкий костюм з цікавим рваним ефектом на ранню осінь / весну: бомбер + брюки.",
        "Тканина: Бомбер - 100% натуральний рваний льон; Брюки - 100% льон.",
        "Деталі:",
        "• бомбер без підкладки",
        "• висока посадка брюк та фасон бананів"
      ],
      colors: ["чорний"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм с рваным эффектом",
      description: [
        "Лёгкий костюм с интересным рваным эффектом для ранней осени или весны: бомбер + брюки.",
        "Ткань: Бомбер - 100% натуральный рваный лён; Брюки - 100% лён.",
        "Детали:",
        "• бомбер без подкладки",
        "• высокая посадка брюк и фасон бананов"
      ],
      colors: ["чёрный"]
    }
  }
},



  {
  id: 178,
  price: 2800,
  isTop: false,
  isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2380,
  sku: "99320",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Amelie Dress/1.avif",
  images: [
    "/Dress/Amelie Dress/2.avif",
    "/Dress/Amelie Dress/3.avif",
    "/Dress/Amelie Dress/4.avif",
    "/Dress/Amelie Dress/5.avif", 
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Amelie Dress",
      description: [
        "Delicate chocolate satin dress with long loose sleeves and tie-back detail.",
        "Fabric: dense and soft satin.",
        "Details:",
        "• trapeze silhouette",
        "• corset-style back with ties",
        "• midi length"
      ],
      colors: ["chocolate"]
    },
    FR: {
      category: "Robes",
      name: "Robe Amelie",
      description: [
        "Robe en satin chocolat avec manches longues amples et dos à nouer.",
        "Tissu : satin dense et doux.",
        "Détails :",
        "• coupe trapèze",
        "• dos style corset avec liens",
        "• longueur midi"
      ],
      colors: ["chocolat"]
    },
    UA: {
      category: "Сукні",
      name: "Сукня «Amelie»",
      description: [
        "Ніжна шоколадна сатинова сукня із довгим вільним рукавом та спинкою на завʼязках.",
        "Тканина: щільний та мʼякий сатин.",
        "Деталі:",
        "• фасон трапеція",
        "• корсетна спинка",
        "• довжина міді"
      ],
      colors: ["шоколад"]
    },
    RU: {
      category: "Платья",
      name: "Платье «Amelie»",
      description: [
        "Нежное шоколадное атласное платье с длинным свободным рукавом и завязками на спинке.",
        "Ткань: плотный и мягкий сатин.",
        "Детали:",
        "• фасон трапеция",
        "• корсетная спинка",
        "• длина миди"
      ],
      colors: ["шоколад"]
    }
  }
},



{
  id: 176,
  price: 3200,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 2720,
  sku: "98829",
  size: "XS S M L XL",
  category: "Outerwear",
  image: "/Outerwear/Alice/1.avif",
  images: [
    "/Outerwear/Alice/2.avif",
    "/Outerwear/Alice/3.avif",
    "/Outerwear/Alice/4.avif",
    "/Outerwear/Alice/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Outerwear",
      name: "Alice Quilted Jacket",
      description: [
        "Light cotton quilted jacket with a charming rose print and ruffles — perfect for early autumn or spring.",
        "Fabric: 100% cotton with muslin lining.",
        "Details:",
        "• Decorative rose print",
        "• Lined",
        "• 2 patch pockets"
      ],
      colors: ["pink"]
    },
    FR: {
      category: "Manteaux",
      name: "Veste matelassée «Alice»",
      description: [
        "Veste matelassée légère en coton avec un joli imprimé de roses et des volants — idéale pour le début de l’automne ou le printemps.",
        "Tissu : 100% coton avec doublure en mousseline.",
        "Détails :",
        "• Imprimé décoratif de roses",
        "• Avec doublure",
        "• 2 poches plaquées"
      ],
      colors: ["rose"]
    },
    UA: {
      category: "Верхній одяг",
      name: "Стьогана куртка «Alice»",
      description: [
        "Легка бавовняна куртка з цікавим принтом та оборками на ранню осінь / весну.",
        "Тканина: 100% бавовняна куртка із мусліновою підкладкою.",
        "Деталі:",
        "• Декоративний принт у вигляді троянд",
        "• Є підклад",
        "• 2 накладні кишені"
      ],
      colors: ["рожевий"]
    },
    RU: {
      category: "Верхняя одежда",
      name: "Стёганая куртка «Alice»",
      description: [
        "Лёгкая хлопковая куртка с интересным принтом и оборками для ранней осени или весны.",
        "Ткань: 100% хлопок с подкладкой из муслина.",
        "Детали:",
        "• Декоративный принт в виде роз",
        "• Есть подкладка",
        "• 2 накладных кармана"
      ],
      colors: ["розовый"]
    }
  }
},

{
  id: 175,
  price: 1850,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1573,
  sku: "98828",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Amelie/1.avif",
  images: [
    "/Skirts/Amelie/1.avif",
    "/Skirts/Amelie/2.avif",
    "/Skirts/Amelie/3.avif",
    "/Skirts/Amelie/4.avif",
    "/Skirts/Amelie/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Amelie Skirt",
      description: [
        "Delicate satin half-sun skirt in a soft butter shade.",
        "Fabric: Dense and soft satin.",
        "Details:",
        "• Midi length",
        "• Half-sun silhouette",
        "• High waist"
      ],
      colors: ["butter"]
    },
    FR: {
      category: "Jupes",
      name: "Jupe «Amelie»",
      description: [
        "Jupe délicate en satin coupe demi-soleil dans une douce teinte beurre.",
        "Tissu : satin dense et doux.",
        "Détails :",
        "• Longueur midi",
        "• Coupe demi-soleil",
        "• Taille haute"
      ],
      colors: ["beurre"]
    },
    UA: {
      category: "Спідниці",
      name: "Спідниця «Amelie»",
      description: [
        "Ніжна сатинова спідниця напів-сонце у ніжному масляному кольорі.",
        "Тканина: щільний та м’який сатин.",
        "Деталі:",
        "• Міді довжина",
        "• Фасон напів-сонце",
        "• Висока посадка"
      ],
      colors: ["масло"]
    },
    RU: {
      category: "Юбки",
      name: "Юбка «Amelie»",
      description: [
        "Нежная атласная юбка полусолнце в мягком масляном оттенке.",
        "Ткань: плотный и мягкий сатин.",
        "Детали:",
        "• Длина миди",
        "• Фасон полусолнце",
        "• Высокая посадка"
      ],
      colors: ["масло"]
    }
  }
},


 
{
  id: 174,
  price: 1500,
  isTop: false,
  isNew: false,
  //  isSpecialOffer: true,
  // discountPrice: 1275,
  sku: "98827",
  size: "XS S M L XL",
  category: "Tops",
  image: "/Top/Black Silk Top/1.avif",
  images: [
    "/Top/Black Silk Top/2.avif",
    "/Top/Black Silk Top/3.avif",
    "/Top/Black Silk Top/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Tops",
      name: "Black Silk Top",
      description: [
        "Elegant black top made from delicate Armani silk. Features a V-neck, button closure, and refined lace accents on the shoulders. Perfect to pair with classic bottoms or more casual pieces.",
        "Fabric: 100% Armani silk — premium fabric known for its soft sheen, delicate texture, and elegant drape.",
        "Details:",
        "• V-neck with wide straps",
        "• Delicate lace inserts on the shoulders"
      ],
      colors: ["black"]
    },
    FR: {
      category: "Tops",
      name: "Top en soie noire",
      description: [
        "Top noir élégant en soie Armani délicate. Col en V, fermeture par boutons et détails raffinés en dentelle sur les épaules. Parfait à associer avec des bas classiques ou des pièces plus décontractées.",
        "Tissu : 100 % soie Armani — tissu premium connu pour son éclat doux, sa texture délicate et sa chute élégante.",
        "Détails :",
        "• Col en V avec larges bretelles",
        "• Inserts en dentelle délicate sur les épaules"
      ],
      colors: ["noir"]
    },
    UA: {
      category: "Топи",
      name: "Топ «Black silk»",
      description: [
        "Елегантний чорний топ із ніжного шовку Армані. Має V-подібний виріз, застібку на ґудзики та витончені мереживні акценти на плечах. Ідеальний для поєднання як із класичними низами, так і з більш повсякденними речами.",
        "Тканина: 100% шовк Армані — преміальна тканина, відома своїм м’яким блиском, ніжною текстурою та елегантним падінням.",
        "Деталі:",
        "• V-подібний виріз із широкими бретелями",
        "• Вставки з делікатного мережива на плечах"
      ],
      colors: ["чорний"]
    },
    RU: {
      category: "Топы",
      name: "Топ «Black silk»",
      description: [
        "Элегантный черный топ из нежного шелка Армани. Имеет V-образный вырез, застежку на пуговицы и изысканные кружевные акценты на плечах. Идеально сочетается как с классическими низами, так и с более повседневными вещами.",
        "Ткань: 100% шелк Армани — премиальная ткань, известная своим мягким блеском, нежной текстурой и элегантным падением.",
        "Детали:",
        "• V-образный вырез с широкими бретелями",
        "• Вставки из деликатного кружева на плечах"
      ],
      colors: ["чёрный"]
    }
  }
},
  {
  id: 173,
  price: 1850,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1573,
  sku: "98826",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Black Silk/1.avif",
  images: [
    "/Skirts/Black Silk/2.avif",
    "/Skirts/Black Silk/3.avif",
    "/Skirts/Black Silk/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Black Silk Skirt",
      description: [
        "Luxurious black midi skirt with lace trim at the hem. Made from Armani silk, it drapes softly, highlighting femininity and elegance. Perfect for both evening and stylish day looks.",
        "Fabric: 100% Armani silk — premium fabric known for its soft sheen, delicate texture, and elegant drape.",
        "Details:",
        "• Midi length, refined silhouette with slight flare at the bottom",
        "• Hem adorned with lace for added sensuality and elegance"
      ],
      colors: ["black"]
    },
    FR: {
      category: "Jupes",
      name: "Jupe soie noire",
      description: [
        "Jupe midi noire luxueuse avec bordure en dentelle. En soie Armani, elle tombe doucement, mettant en valeur la féminité et l'élégance. Idéale pour les soirées comme pour les sorties de jour.",
        "Tissu : 100 % soie Armani — tissu premium connu pour son éclat doux, sa texture délicate et sa chute élégante.",
        "Détails :",
        "• Longueur midi, silhouette raffinée avec légère extension en bas",
        "• Bord orné de dentelle pour plus de sensualité et d'élégance"
      ],
      colors: ["noir"]
    },
    UA: {
      category: "Спідниці",
      name: "Спідниця «Black silk»",
      description: [
        "Розкішна чорна спідниця довжини міді зі вставкою мережива по низу. Завдяки шовку Армані вона м’яко спадає, підкреслюючи жіночність та витонченість. Ідеальна як для вечірнього образу, так і для стильного денного виходу.",
        "Тканина: 100% шовк Армані — преміальна тканина, відома своїм м’яким блиском, ніжною текстурою та елегантним падінням.",
        "Деталі:",
        "• Довжина міді, витончений фасон із легким розширенням донизу",
        "• Низ прикрашений мереживом для додання чуттєвості та вишуканості"
      ],
      colors: ["чорний"]
    },
    RU: {
      category: "Юбки",
      name: "Юбка «Black silk»",
      description: [
        "Роскошная черная юбка длины миди с кружевной вставкой внизу. Благодаря шелку Армани мягко спадает, подчеркивая женственность и изысканность. Идеальна как для вечернего образа, так и для стильного дневного выхода.",
        "Ткань: 100% шелк Армани — премиальная ткань, известная своим мягким блеском, нежной текстурой и элегантным падением.",
        "Детали:",
        "• Длина миди, изящный фасон с лёгким расширением к низу",
        "• Низ украшен кружевом для придания чувственности и изысканности"
      ],
      colors: ["чёрный"]
    }
  }
},
  {
  id: 172,
  price: 3350,
  isTop: false,
  isNew: false,
  //  isSpecialOffer: true,
  // discountPrice: 2848,
  sku: "98825",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Black Silk Set/1.avif",
  images: [
    "/Costumes/Black Silk Set/2.avif",
    "/Costumes/Black Silk Set/3.avif",
    "/Costumes/Black Silk Set/4.avif",
    "/Costumes/Black Silk Set/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Black Silk Set",
      description: [
        "Elegant set combining the sensuality of satin with delicate lace. Creates a luxurious yet restrained look, suitable for evening outings or special events.",
        "Fabric: 100% Armani silk — premium fabric known for soft sheen, delicate texture, and elegant drape.",
        "Details:",
        "• Top: V-neckline with wide straps",
        "• Delicate lace inserts on shoulders",
        "• Skirt: midi length, refined silhouette with slight flare at the bottom",
        "• Hem adorned with lace for added sensuality and elegance"
      ],
      colors: ["black"]
    },
    FR: {
      category: "Costumes",
      name: "Ensemble soie noire",
      description: [
        "Ensemble élégant combinant sensualité du satin et délicatesse de la dentelle. Crée un look luxueux mais discret, adapté aux sorties en soirée ou événements spéciaux.",
        "Tissu : 100 % soie Armani — tissu premium connu pour son éclat doux, sa texture délicate et sa chute élégante.",
        "Détails :",
        "• Haut : encolure en V avec larges bretelles",
        "• Inserts en dentelle délicate sur les épaules",
        "• Jupe : longueur midi, silhouette raffinée avec légère extension en bas",
        "• Bas orné de dentelle pour plus de sensualité et d'élégance"
      ],
      colors: ["noir"]
    },
    UA: {
      category: "Костюми",
      name: "Комплект «Black silk»",
      description: [
        "Вишуканий дует, що поєднує чуттєвість сатину й делікатність мережива. Створює розкішний, але водночас стриманий образ, який підходить як для вечірніх виходів, так і для особливих подій.",
        "Тканина: 100% шовк Армані — преміальна тканина з м’яким блиском, ніжною текстурою та елегантним падінням.",
        "Деталі:",
        "• Топ: V-подібний виріз із широкими бретелями",
        "• Вставки з делікатного мережива на плечах",
        "• Спідниця: довжина міді, витончений фасон із легким розширенням донизу",
        "• Низ прикрашений мереживом для додання чуттєвості та елегантності"
      ],
      colors: ["чорний"]
    },
    RU: {
      category: "Костюмы",
      name: "Комплект «Black silk»",
      description: [
        "Изысканный дуэт, сочетающий чувственность сатина и деликатность кружева. Создает роскошный, но сдержанный образ, подходящий для вечерних выходов и особых событий.",
        "Ткань: 100% шелк Armani — премиальная ткань с мягким блеском, нежной текстурой и элегантным падением.",
        "Детали:",
        "• Топ: V-образный вырез с широкими бретелями",
        "• Вставки из деликатного кружева на плечах",
        "• Юбка: длина миди, изящный фасон с лёгким расширением к низу",
        "• Низ украшен кружевом для добавления чувственности и изысканности"
      ],
      colors: ["чёрный"]
    }
  }
},



  {
  id: 170,
  price: 3200,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 2720,
  sku: "98823",
  size: "XS S M L XL",
  category: "Outerwear",
  image: "/Outerwear/Milky/1.avif",
  images: [
    "/Outerwear/Milky/2.avif",
    "/Outerwear/Milky/3.avif",
    "/Outerwear/Milky/4.avif",
    "/Outerwear/Milky/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Outerwear",
      name: "Milky Quilted Jacket",
      description: [
        "Light cotton jacket with an interesting print on the sleeves, perfect for early autumn or spring. Adds a unique touch to your look.",
        "Fabric: 100% cotton jacket with lining.",
        "Details:",
        "• Decorative check print on the sleeves",
        "• Lined",
        "• 2 pockets"
      ],
      colors: ["milky"]
    },
    FR: {
      category: "Vêtements d'extérieur",
      name: "Veste matelassée «Milky»",
      description: [
        "Veste légère en coton avec un imprimé intéressant sur les manches, idéale pour le début de l'automne ou le printemps. Apporte une touche originale à votre look.",
        "Tissu: 100% coton avec doublure.",
        "Détails:",
        "• Imprimé décoratif en carreaux sur les manches",
        "• Doublée",
        "• 2 poches"
      ],
      colors: ["lait"]
    },
    UA: {
      category: "Верхній одяг",
      name: "Стьогана куртка «Milky»",
      description: [
        "Легка бавовняна куртка з цікавим принтом на рукавах на ранню осінь/весну. Стане цікавим доповненням до твого образу.",
        "Тканина: 100% бавовняна куртка із підкладкою.",
        "Деталі:",
        "• Декоративний принт у вигляді клітинки на рукавах",
        "• Є підклад",
        "• 2 кишені"
      ],
      colors: ["молочний"]
    },
    RU: {
      category: "Верхняя одежда",
      name: "Стёганая куртка «Milky»",
      description: [
        "Лёгкая хлопковая куртка с интересным принтом на рукавах, подходит для ранней осени или весны. Станет интересным дополнением к образу.",
        "Ткань: 100% хлопковая куртка с подкладкой.",
        "Детали:",
        "• Декоративный принт в виде клеточки на рукавах",
        "• Есть подклад",
        "• 2 кармана"
      ],
      colors: ["молочный"]
    }
  }
},

  {
  id: 169,
  price: 2100,
  isTop: false,
  isNew: false,
  //  isSpecialOffer: true,
  // discountPrice: 1785,
  sku: "98822",
  size: "XS S M L XL",
  category: "Pants",
  image: "/Pants/Olive Pants/1.avif",
  images: [
    "/Pants/Olive Pants/1.avif",
    "/Pants/Olive Pants/2.avif",
    "/Pants/Olive Pants/3.avif",
    "/Pants/Olive Pants/4.avif",
    "/Pants/Olive Pants/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Pants",
      name: "Olive Pants",
      description: [
        "Elegant high-waisted pants with sharp creases. Visually lengthen the legs, provide comfort in movement, and perfectly pair with both heels and flat shoes.",
        "Fabric: Premium suit fabric that holds its shape and feels comfortable on the body. [Composition: 75% viscose, 25% polyester]",
        "Details:",
        "• Straight flared cut with creases that visually elongate the legs.",
        "• High waist accentuates the silhouette."
      ],
      colors: ["olive"]
    },
    FR: {
      category: "Pantalons",
      name: "Pantalon «Olive»",
      description: [
        "Pantalon élégant à taille haute avec plis marqués. Allonge visuellement les jambes, offre confort et se combine parfaitement avec talons ou chaussures plates.",
        "Tissu: Tissu de costume premium qui garde sa forme et agréable au toucher. [Composition: 75% viscose, 25% polyester]",
        "Détails:",
        "• Coupe droite évasée avec plis qui allongent visuellement les jambes.",
        "• Taille haute qui met en valeur la silhouette."
      ],
      colors: ["olive"]
    },
    UA: {
      category: "Брюки",
      name: "Брюки «Olive»",
      description: [
        "Елегантні брюки з високою посадкою та чіткими стрілками. Візуально подовжують ноги, дарують комфорт у русі та ідеально поєднуються як із підборами, так і з взуттям на низькому ходу.",
        "Тканина: Щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла. [Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Прямого розширеного крою зі стрілками, які візуально подовжують ноги.",
        "• Висока посадка підкреслює силует."
      ],
      colors: ["оливка"]
    },
    RU: {
      category: "Брюки",
      name: "Брюки «Olive»",
      description: [
        "Элегантные брюки с высокой посадкой и четкими стрелками. Визуально удлиняют ноги, обеспечивают комфорт в движении и идеально сочетаются как с каблуками, так и с обувью на низком ходу.",
        "Ткань: Плотная костюмная ткань премиум-класса, держит форму и приятна к телу. [Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Прямого расширенного кроя со стрелками, которые визуально удлиняют ноги.",
        "• Высокая посадка подчеркивает силуэт."
      ],
      colors: ["оливка"]
    }
  }
},

  {
  id: 168,
  price: 3500,
  isTop: false,
  isNew: false,
  //  isSpecialOffer: true,
  // discountPrice: 2975,
  sku: "98821",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Olive Jacket/1.avif",
  images: [
    "/Jackets/Olive Jacket/1.avif",
    "/Jackets/Olive Jacket/2.avif",
    "/Jackets/Olive Jacket/3.avif",
    "/Jackets/Olive Jacket/4.avif",
    "/Jackets/Olive Jacket/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "Olive Jacket",
      description: [
        "Modern classic jacket with a tailored silhouette and waist accent. The side straps allow easy adjustment for a perfect fit.",
        "Suitable for office wear or evening looks.",
        "Fabric: Premium suit fabric that holds its shape and feels comfortable on the body. [Composition: 75% viscose, 25% polyester]",
        "Details:",
        "• Elongated silhouette with defined shoulder line.",
        "• Single-breasted button closure with side straps for waist adjustment."
      ],
      colors: ["olive"]
    },
    FR: {
      category: "Vestes",
      name: "Veste «Olive»",
      description: [
        "Veste classique moderne avec silhouette ajustée et accent sur la taille. Les lanières latérales permettent un ajustement facile.",
        "Convient pour le bureau ou les looks du soir.",
        "Tissu: Tissu de costume premium qui garde sa forme et agréable au toucher. [Composition: 75% viscose, 25% polyester]",
        "Détails:",
        "• Silhouette allongée avec ligne d'épaule définie.",
        "• Fermeture boutonnée simple avec lanières latérales pour ajuster la taille."
      ],
      colors: ["olive"]
    },
    UA: {
      category: "Жакети",
      name: "Жакет «Olive»",
      description: [
        "Сучасний класичний жакет із приталеним силуетом та акцентом на талії. Завдяки боковим хлястикам легко регулюється посадка.",
        "Підходить як для офісу, так і для вечірніх образів.",
        "Тканина: Щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла. [Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Подовжений силует із чіткою лінією плеча.",
        "• Однобортна застібка на ґудзик із можливістю регулювати об’єм талії за допомогою бокових хлястиків."
      ],
      colors: ["оливка"]
    },
    RU: {
      category: "Жакеты",
      name: "Жакет «Olive»",
      description: [
        "Современный классический жакет с приталенным силуэтом и акцентом на талии. Боковые ремешки позволяют легко регулировать посадку.",
        "Подходит как для офиса, так и для вечерних образов.",
        "Ткань: Плотная костюмная ткань премиум-класса, держит форму и приятна к телу. [Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Удлинённый силуэт с чёткой линией плеча.",
        "• Однобортная застёжка на пуговицу с возможностью регулировать объём талии с помощью боковых ремешков."
      ],
      colors: ["оливка"]
    }
  }
},

  {
  id: 167,
  price: 5600,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 4760,
  sku: "98820",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Olive Suit/1.avif",
  images: [
    "/Costumes/Olive Suit/1.avif",
    "/Costumes/Olive Suit/2.avif",
    "/Costumes/Olive Suit/3.avif",
    "/Costumes/Olive Suit/4.avif",
    "/Costumes/Olive Suit/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Olive Suit",
      description: [
        "This suit combines classic elegance with a fresh color. The clean cut and noble shade make it a versatile choice for both business meetings and stylish urban looks.",
        "Can be worn as a total look, or combine the jacket and trousers separately with other wardrobe basics.",
        "Fabric: 100% viscose, 25% polyester. Premium suit fabric that holds its shape and feels comfortable on the body.",
        "Details:",
        "• Jacket: elongated silhouette with a defined shoulder line.",
        "• Single-breasted button closure with side straps for waist adjustment.",
        "• Trousers: straight wide-leg cut with creases that visually elongate the legs.",
        "• High waist emphasizes the silhouette."
      ],
      colors: ["olive"]
    },
    FR: {
      category: "Costumes",
      name: "Costume «Olive»",
      description: [
        "Ce costume combine l'élégance classique avec une couleur fraîche. La coupe épurée et la teinte noble en font un choix polyvalent pour les réunions d'affaires ou les looks urbains stylés.",
        "Peut être porté en total look ou combiner séparément la veste et le pantalon avec d'autres basiques de garde-robe.",
        "Tissu: 75% viscose, 25% polyester. Tissu de costume premium qui garde sa forme et agréable au toucher.",
        "Détails:",
        "• Veste: silhouette allongée avec ligne d'épaule définie.",
        "• Fermeture boutonnée simple avec lanières latérales pour ajuster la taille.",
        "• Pantalon: coupe droite et large avec plis qui allongent visuellement les jambes.",
        "• Taille haute souligne la silhouette."
      ],
      colors: ["olive"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм «Olive»",
      description: [
        "Цей костюм поєднує елегантність класики та свіжість кольору. Лаконічний крій і благородний відтінок роблять його універсальним вибором як для ділових зустрічей, так і для стильних міських образів.",
        "Можна носити як total look, або ж комбінувати окремо жакет і брюки з іншими базовими речами гардеробу.",
        "Тканина: Щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла. [Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Жакет: подовжений силует із чіткою лінією плеча.",
        "• Однобортна застібка на ґудзик із можливістю регулювати об’єм талії за допомогою бокових хлястиків.",
        "• Брюки: прямого розширеного крою зі стрілками, які візуально подовжують ноги.",
        "• Висока посадка підкреслює силует."
      ],
      colors: ["оливка"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм «Olive»",
      description: [
        "Этот костюм сочетает классическую элегантность с свежестью цвета. Чистый крой и благородный оттенок делают его универсальным выбором как для деловых встреч, так и для стильных городских образов.",
        "Можно носить как total look или комбинировать пиджак и брюки отдельно с другими базовыми вещами гардероба.",
        "Ткань: Плотная костюмная ткань премиум-класса, держит форму и приятна к телу. [Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Пиджак: удлинённый силуэт с чёткой линией плеча.",
        "• Однобортная застёжка на пуговицу с боковыми ремешками для регулировки объёма талии.",
        "• Брюки: прямого расширенного кроя со стрелками, визуально удлиняют ноги.",
        "• Высокая посадка подчёркивает силуэт."
      ],
      colors: ["оливка"]
    }
  }
},

  {
  id: 166,
  price: 2000,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1700,
  sku: "98819",
  size: "XS S M L XL",
  category: "Shirts",
  image: "/Shirts/Cocoa line Blouse/1.avif",
  images: [
    "/Shirts/Cocoa line Blouse/2.avif",
    "/Shirts/Cocoa line Blouse/3.avif",
    "/Shirts/Cocoa line Blouse/4.avif",
    "/Shirts/Cocoa line Blouse/5.avif",
    "/Shirts/Cocoa line Blouse/6.avif",
    "/Shirts/Cocoa line Blouse/7.avif",
    "/Shirts/Cocoa line Blouse/8.avif",
    "/Shirts/Cocoa line Blouse/9.avif",
    "/Shirts/Cocoa line Blouse/10.avif",
    "/Shirts/Cocoa line Blouse/11.avif",
    "/Shirts/Cocoa line Blouse/12.avif",
    "/Shirts/Cocoa line Blouse/13.avif",

  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Shirts",
      name: "Cocoa line Blouse",
      description: [
        "Delicate yet stylish blouse that adds lightness to your look.",
        "Perfectly pairs with classic skirts, trousers, or jeans, creating both office and more relaxed outfits.",
        "Fabric:",
        "[Blouse: 100% viscose]",
        "Details:",
        "• Loose fit with soft draping for a feminine silhouette.",
        "• Back tie at the neck adds elegance and accent."
      ],
      colors: ["sage", "blue", "marsala"]
    },
    FR: {
      category: "Chemises",
      name: "Blouse «Cocoa line»",
      description: [
        "Blouse délicate et élégante qui ajoute de la légèreté à votre look.",
        "Parfaitement associée aux jupes classiques, pantalons ou jeans, créant des tenues à la fois pour le bureau et plus décontractées.",
        "Tissu :",
        "[Blouse : 100% viscose]",
        "Détails :",
        "• Coupe ample avec drapés doux pour une silhouette féminine.",
        "• Lien à l’arrière du cou pour ajouter élégance et accent."
      ],
      colors: ["sauge", "bleu", "marsala"]
    },
    UA: {
      category: "Сорочки",
      name: "Блуза «Cocoa line»",
      description: [
        "Ніжна й водночас стильна блуза, що додає образу легкості.",
        "Ідеально комбінується з класичними спідницями, брюками чи джинсами, створюючи як офісні, так і більш розслаблені образи.",
        "Тканина:",
        "[Склад блузи: 100% віскоза]",
        "Деталі:",
        "• Вільний крій і м’які драпіровки створюють жіночний силует.",
        "• Зав’язка ззаду на шиї додає витонченості та акценту."
      ],
      colors: ["полинь", "синій", "марсала"]
    },
    RU: {
      category: "Рубашки",
      name: "Блуза «Cocoa line»",
      description: [
        "Нежная и одновременно стильная блуза, которая добавляет легкости образу.",
        "Идеально сочетается с классическими юбками, брюками или джинсами, создавая как офисные, так и более расслабленные образы.",
        "Ткань:",
        "[Состав блузы: 100% вискоза]",
        "Детали:",
        "• Свободный крой с мягкими драпировками создаёт женственный силуэт.",
        "• Завязка сзади на шее добавляет утончённости и акцент."
      ],
      colors: ["полынь", "синий", "марсала"]
    }
  }
},

  {
  id: 165,
  price: 4000,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 3400,
  sku: "98818",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Cocoa line Set/1.avif",
  images: [
    "/Costumes/Cocoa line Set/2.avif",
    "/Costumes/Cocoa line Set/3.avif",
    "/Costumes/Cocoa line Set/4.avif",
    "/Costumes/Cocoa line Set/5.avif",
    "/Costumes/Cocoa line Set/6.avif",
    "/Costumes/Cocoa line Set/7.avif",
    "/Costumes/Cocoa line Set/8.avif",
    "/Costumes/Cocoa line Set/9.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Cocoa line Set",
      description: [
        "Elegant duo for the modern woman who values femininity and comfort. Lightweight blouse made of airy fabric perfectly pairs with a pencil skirt, creating a harmonious and stylish look.",
        "This set is suitable for both office meetings and evening outings where it is important to look restrained yet sophisticated.",
        "Fabric:",
        "[Blouse: 100% viscose. Skirt: 75% viscose, 25% polyester]",
        "Details:",
        "• Blouse: loose fit with soft draping for a feminine silhouette.",
        "• Back tie at the neck adds elegance and accent.",
        "• Skirt: pencil silhouette with high waist that visually elongates the figure and slims the body.",
        "• Waistband accentuates the waist, creating a feminine touch."
      ],
      colors: ["sage", "blue"]
    },
    FR: {
      category: "Costumes",
      name: "Ensemble «Cocoa line»",
      description: [
        "Duo élégant pour la femme moderne qui apprécie la féminité et le confort. Blouse légère en tissu aérien parfaitement associée à une jupe crayon, créant un look harmonieux et stylé.",
        "Cet ensemble convient aussi bien aux réunions de bureau qu’aux sorties du soir où il est important d’avoir un style sobre mais raffiné.",
        "Tissu :",
        "[Blouse : 100% viscose. Jupe : 75% viscose, 25% polyester]",
        "Détails :",
        "• Blouse : coupe ample avec drapés doux pour une silhouette féminine.",
        "• Lien à l’arrière du cou pour ajouter élégance et accent.",
        "• Jupe : coupe crayon avec taille haute qui allonge visuellement la silhouette et affine le corps.",
        "• La ceinture souligne la taille, créant une touche féminine."
      ],
      colors: ["sauge", "bleu"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм «Cocoa line»",
      description: [
        "Елегантний дует для сучасної жінки, яка цінує жіночність та комфорт. Легка блуза з повітряної тканини ідеально поєднується зі спідницею-олівцем, створюючи гармонійний та стильний образ.",
        "Цей комплект підходить як для офісних зустрічей, так і для вечірніх виходів, де важливо виглядати стримано, але вишукано.",
        "Тканина:",
        "[Склад блузи: 100% віскоза. Склад спідниці: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Блуза: вільний крій і м’які драпіровки створюють жіночний силует.",
        "• Зав’язка ззаду на шиї додає витонченості та акценту.",
        "• Спідниця: фасону олівець із високою посадкою, який візуально витягує силует і робить фігуру стрункішою.",
        "• Пояс підкреслює талію, створюючи жіночний акцент."
      ],
      colors: ["полинь", "синій"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм «Cocoa line»",
      description: [
        "Элегантный дуэт для современной женщины, которая ценит женственность и комфорт. Лёгкая блуза из воздушной ткани идеально сочетается с юбкой-карандаш, создавая гармоничный и стильный образ.",
        "Этот комплект подходит как для офисных встреч, так и для вечерних выходов, где важно выглядеть сдержанно, но изысканно.",
        "Ткань:",
        "[Блуза: 100% вискоза. Юбка: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Блуза: свободный крой с мягкими драпировками создаёт женственный силуэт.",
        "• Завязка сзади на шее добавляет утончённости и акцент.",
        "• Юбка: фасон карандаш с высокой посадкой, визуально вытягивает силуэт и делает фигуру стройнее.",
        "• Пояс подчёркивает талию, создавая женственный акцент."
      ],
      colors: ["полынь", "синий"]
    }
  }
},

  {
  id: 164,
  price: 2000,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1700,
  sku: "98817",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Cocoa line Skirt/1.avif",
  images: [
    "/Skirts/Cocoa line Skirt/2.avif",
    "/Skirts/Cocoa line Skirt/3.avif",
    "/Skirts/Cocoa line Skirt/4.avif",
    "/Skirts/Cocoa line Skirt/5.avif",
    "/Skirts/Cocoa line Skirt/6.avif",
    "/Skirts/Cocoa line Skirt/7.avif",
    "/Skirts/Cocoa line Skirt/8.avif",
    "/Skirts/Cocoa line Skirt/9.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Cocoa line Skirt",
      description: [
        "Feminine classic in a modern interpretation. This skirt highlights the silhouette while maintaining comfort and elegance, becoming a versatile wardrobe essential.",
        "Perfectly pairs with classic heels for an office look or with more relaxed items like an oversized shirt or sweater.",
        "Fabric: Premium dense suiting fabric that holds its shape yet feels pleasant on the skin.",
        "[Composition: 75% viscose, 25% polyester]",
        "Details:",
        "• Pencil silhouette with a high waist that visually elongates the figure and makes it slimmer.",
        "• Midi length adds elegance to the look.",
        "• Back slit provides ease of movement.",
        "• Waistband accentuates the waist, creating a feminine touch."
      ],
      colors: ["sage", "blue"]
    },
    FR: {
      category: "Jupes",
      name: "Jupe «Cocoa line»",
      description: [
        "Classique féminine dans une interprétation moderne. Cette jupe souligne la silhouette tout en conservant confort et élégance, devenant ainsi une pièce de base universelle de votre garde-robe.",
        "Se combine parfaitement avec des talons classiques pour un look de bureau ou avec des pièces plus décontractées comme une chemise oversize ou un pull.",
        "Tissu : tissu de costume dense de qualité premium, qui garde sa forme et reste agréable sur la peau.",
        "[Composition : 75% viscose, 25% polyester]",
        "Détails :",
        "• Coupe crayon avec taille haute qui allonge visuellement la silhouette et affine la figure.",
        "• Longueur midi qui ajoute de l’élégance.",
        "• Fente discrète à l’arrière pour plus de confort en mouvement.",
        "• Ceinture qui souligne la taille et crée une touche féminine."
      ],
      colors: ["sauge", "bleu"]
    },
    UA: {
      category: "Спідниці",
      name: "Спідниця «Cocoa line»",
      description: [
        "Жіночна класика у сучасному виконанні. Ця спідниця підкреслює силует, зберігаючи комфорт і витонченість, і стане універсальною базою у вашому гардеробі.",
        "Цю спідницю можна комбінувати як із класичними підборами для офісного образу, так і з більш розслабленими речами — наприклад, сорочкою oversize чи светром.",
        "Тканина: щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Фасон олівець із високою посадкою, який візуально витягує силует і робить фігуру стрункішою.",
        "• Довжина міді додає образу елегантності.",
        "• Позаду — акуратний розріз для зручності рухів.",
        "• Пояс підкреслює талію, створюючи жіночний акцент."
      ],
      colors: ["полинь", "синій"]
    },
    RU: {
      category: "Юбки",
      name: "Юбка «Cocoa line»",
      description: [
        "Женственная классика в современном исполнении. Эта юбка подчеркивает силуэт, сохраняя комфорт и изящество, и станет универсальной базой в вашем гардеробе.",
        "Её можно сочетать как с классическими туфлями на каблуке для офисного образа, так и с более расслабленными вещами — например, с рубашкой oversize или свитером.",
        "Ткань: плотная костюмная ткань премиум-класса, которая держит форму и приятна к телу.",
        "[Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Фасон карандаш с высокой посадкой, визуально вытягивающий силуэт и стройнящий фигуру.",
        "• Длина миди добавляет образу элегантности.",
        "• Сзади аккуратный разрез для удобства движения.",
        "• Пояс подчеркивает талию, создавая женственный акцент."
      ],
      colors: ["полынь", "синий"]
    }
  }
},

  {
  id: 163,
  price: 2100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1785,
  sku: "98816",
  size: "XS S M L XL",
  category: "Pants",
  image: "/Pants/Alice Pants/6.avif",
  images: [
    "/Pants/Alice Pants/5.avif",
    "/Pants/Alice Pants/7.avif",
    "/Pants/Alice Pants/8.avif",
    "/Pants/Alice Pants/1.avif",
    "/Pants/Alice Pants/2.avif",
    "/Pants/Alice Pants/3.avif",
    "/Pants/Alice Pants/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Pants",
      name: "Alice Pants",
      description: [
        "Stylish straight-leg trousers with a comfortable fit. Visually elongate the legs and pair perfectly with heels, sneakers, or boots.",
        "A wardrobe essential that matches any top.",
        "Fabric: Premium dense suiting fabric that holds its shape yet feels pleasant on the skin.",
        "[Composition: 75% viscose, 25% polyester]",
        "Details:",
        "• Classic straight cut with a modest waistline.",
        "• Relaxed fit ensures comfort in movement.",
        "• Extended length visually slims the legs."
      ],
      colors: ["black", "chocolate"]
    },
    FR: {
      category: "Pantalons",
      name: "Pantalon «Alice»",
      description: [
        "Pantalon droit élégant avec une coupe confortable. Allonge visuellement les jambes et se combine parfaitement avec des talons, des baskets ou des bottes.",
        "Une pièce de base qui s’adapte à tous les hauts.",
        "Tissu : tissu de costume dense de qualité premium, qui garde sa forme et reste agréable sur la peau.",
        "[Composition : 75% viscose, 25% polyester]",
        "Détails :",
        "• Coupe droite classique avec taille discrète.",
        "• Coupe ample pour un confort de mouvement.",
        "• Longueur allongée qui affine visuellement les jambes."
      ],
      colors: ["noir", "chocolat"]
    },
    UA: {
      category: "Брюки",
      name: "Брюки «Alice»",
      description: [
        "Стильні брюки прямого силуету з комфортною посадкою. Візуально подовжують ноги та чудово комбінуються з підборами, кедами чи черевиками.",
        "Базова річ, яка пасує до будь-якого верху.",
        "Тканина: щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Класичного прямого крою зі стриманою лінією талії.",
        "• Вільніший фасон забезпечує комфорт у русі.",
        "• Подовжена довжина візуально робить ноги стрункішими."
      ],
      colors: ["чорний", "шоколад"]
    },
    RU: {
      category: "Брюки",
      name: "Брюки «Alice»",
      description: [
        "Стильные брюки прямого силуэта с комфортной посадкой. Визуально удлиняют ноги и отлично сочетаются с каблуками, кедами или ботинками.",
        "Базовая вещь, которая подходит к любому верху.",
        "Ткань: плотная костюмная ткань премиум-класса, которая держит форму и приятна к телу.",
        "[Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Классический прямой крой с аккуратной линией талии.",
        "• Более свободный фасон обеспечивает комфорт в движении.",
        "• Удлинённая длина визуально делает ноги стройнее."
      ],
      colors: ["чёрный", "шоколад"]
    }
  }
},

  {
  id: 162,
  price: 3100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 2635,
  sku: "98815",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Alice Jacket/5.avif",
  images: [
    "/Jackets/Alice Jacket/6.avif",
    "/Jackets/Alice Jacket/7.avif",
    "/Jackets/Alice Jacket/8.avif",
    "/Jackets/Alice Jacket/1.avif",
    "/Jackets/Alice Jacket/2.avif",
    "/Jackets/Alice Jacket/3.avif",
    "/Jackets/Alice Jacket/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "Alice Jacket",
      description: [
        "Minimalist single-breasted jacket with three buttons and pockets. Perfectly fits the figure, emphasizes the waist, and adds understated elegance.",
        "A versatile piece — suitable for both office and casual looks.",
        "Fabric: Premium dense suiting fabric that holds its shape yet feels pleasant on the skin.",
        "[Composition: 75% viscose, 25% polyester]",
        "Details:",
        "• Minimalist cut with a single-breasted closure on three buttons.",
        "• Extended shoulder line and tailored silhouette for a refined look.",
        "• Two flap pockets add practicality.",
        "• Perfect length — wearable with trousers, jeans, or skirts."
      ],
      colors: ["black", "chocolate"]
    },
    FR: {
      category: "Vestes",
      name: "Veste «Alice»",
      description: [
        "Veste minimaliste croisée à trois boutons avec poches. S’adapte parfaitement à la silhouette, souligne la taille et ajoute une élégance sobre.",
        "Une pièce polyvalente — adaptée aussi bien au bureau qu’aux looks casual.",
        "Tissu : tissu de costume dense de qualité premium, qui garde sa forme et reste agréable sur la peau.",
        "[Composition : 75% viscose, 25% polyester]",
        "Détails :",
        "• Coupe minimaliste avec fermeture croisée à trois boutons.",
        "• Ligne d’épaule allongée et silhouette cintrée pour un look raffiné.",
        "• Deux poches à rabat ajoutent de la praticité.",
        "• Longueur idéale — à porter avec pantalon, jean ou jupe."
      ],
      colors: ["noir", "chocolat"]
    },
    UA: {
      category: "Жакети",
      name: "Жакет «Alice»",
      description: [
        "Лаконічний жакет на три ґудзики з кишенями. Ідеально сідає по фігурі, підкреслює талію та додає стриманої елегантності.",
        "Універсальний варіант — підходить і для офісу, і для casual-луків.",
        "Тканина: щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Лаконічний крій із однобортною застібкою на три ґудзики.",
        "• Подовжена лінія плеча й приталений силует формують витончений образ.",
        "• Дві кишені з клапанами додають практичності.",
        "• Ідеальна довжина — для носіння як із брюками, так і з джинсами чи спідницями."
      ],
      colors: ["чорний", "шоколад"]
    },
    RU: {
      category: "Жакеты",
      name: "Жакет «Alice»",
      description: [
        "Лаконичный жакет на три пуговицы с карманами. Идеально сидит по фигуре, подчёркивает талию и добавляет сдержанной элегантности.",
        "Универсальный вариант — подходит как для офиса, так и для casual-луков.",
        "Ткань: плотная костюмная ткань премиум-класса, которая держит форму и приятна к телу.",
        "[Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Лаконичный крой с однобортной застёжкой на три пуговицы.",
        "• Удлинённая линия плеча и приталенный силуэт формируют изысканный образ.",
        "• Два кармана с клапанами добавляют практичности.",
        "• Идеальная длина — для ношения как с брюками, так и с джинсами или юбками."
      ],
      colors: ["чёрный", "шоколад"]
    }
  }
},

  {
  id: 161,
  price: 5200,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 4420,
  sku: "98814",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Alice Costume/1.avif",
  images: [
    "/Costumes/Alice Costume/2.avif",
    "/Costumes/Alice Costume/3.avif",
    "/Costumes/Alice Costume/4.avif",
    "/Costumes/Alice Costume/5.avif",
    "/Costumes/Alice Costume/6.avif",
    "/Costumes/Alice Costume/7.avif",
    "/Costumes/Alice Costume/8.avif",
    "/Costumes/Alice Costume/9.avif",

  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Alice Costume",
      description: [
        "A modern interpretation of classics that combines comfort and elegance. This suit is a perfect wardrobe staple — easily transforming from a business look to casual when paired with sneakers.",
        "Fabric: Premium dense suiting fabric that holds its shape yet feels pleasant on the skin.",
        "[Composition: 75% viscose, 25% polyester]",
        "Details:",
        "• Jacket: minimalist cut with a single-breasted closure on three buttons.",
        "• Extended shoulder line and tailored silhouette create a refined look.",
        "• Trousers: classic straight cut with a restrained waistline.",
        "• A looser fit ensures comfort in motion."
      ],
      colors: ["chocolate", "black"]
    },
    FR: {
      category: "Costumes",
      name: "Costume «Alice»",
      description: [
        "Une interprétation moderne du classique, alliant confort et élégance. Ce costume est une pièce essentielle de la garde-robe — il passe facilement d’un look professionnel à un style casual avec des baskets.",
        "Tissu : tissu de costume dense de qualité premium, qui garde sa forme et reste agréable sur la peau.",
        "[Composition : 75% viscose, 25% polyester]",
        "Détails :",
        "• Veste : coupe minimaliste avec fermeture croisée à trois boutons.",
        "• Ligne d’épaule allongée et silhouette cintrée pour un look raffiné.",
        "• Pantalon : coupe droite classique avec taille sobre.",
        "• Coupe plus ample pour un confort optimal en mouvement."
      ],
      colors: ["chocolat", "noir"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм «Alice»",
      description: [
        "Сучасна інтерпретація класики, яка поєднує комфорт та вишуканість. Цей костюм стане ідеальною базою гардеробу — він легко трансформується з ділового образу у casual, якщо доповнити його кедами чи кросівками.",
        "Тканина: щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Жакет: лаконічний крій із однобортною застібкою на три ґудзики.",
        "• Подовжена лінія плеча й приталений силует формують витончений образ.",
        "• Брюки: класичного прямого крою зі стриманою лінією талії.",
        "• Вільніший фасон забезпечує комфорт у русі."
      ],
      colors: ["шоколад", "чорний"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм «Alice»",
      description: [
        "Современная интерпретация классики, сочетающая комфорт и изящество. Этот костюм станет идеальной базой гардероба — легко превращается из делового образа в casual, если дополнить его кедами или кроссовками.",
        "Ткань: плотная костюмная ткань премиум-класса, которая держит форму и приятна к телу.",
        "[Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Жакет: лаконичный крой с однобортной застёжкой на три пуговицы.",
        "• Удлинённая линия плеча и приталенный силуэт создают изысканный образ.",
        "• Брюки: классического прямого кроя со сдержанной линией талии.",
        "• Более свободный фасон обеспечивает комфорт в движении."
      ],
      colors: ["шоколад", "чёрный"]
    }
  }
},

  {
  id: 160,
  price: 3100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 2635,
  sku: "98813",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Kriston Dress/1.avif",
  images: [
    "/Dress/Kriston Dress/2.avif",
    "/Dress/Kriston Dress/3.avif",
    "/Dress/Kriston Dress/4.avif",
    "/Dress/Kriston Dress/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Kriston Dress",
      description: [
        "This dress is designed for women who value comfort and understated elegance. It combines minimalist tailoring with refined details, creating a stylish yet versatile look.",
        "Fabric: Turkish cotton mélange. Comfortable, breathable, shape-retaining, and easy to care for.",
        "[Composition: 80% wool, 20% polyester]",
        "Details:",
        "• Fitted silhouette with a flared midi skirt that creates a delicate feminine line.",
        "• High waistline accentuated with a decorative strap and buttons on both sides.",
        "• Back zipper closure for comfortable wear."
      ],
      colors: ["mocha-mousse"]
    },
    FR: {
      category: "Robes",
      name: "Robe «Kriston»",
      description: [
        "Cette robe est conçue pour les femmes qui apprécient le confort et l’élégance sobre. Elle associe une coupe minimaliste à des détails raffinés, créant un look élégant et polyvalent.",
        "Tissu : mélange de coton turc. Agréable sur la peau, respirant, garde sa forme et facile d’entretien.",
        "[Composition : 80% laine, 20% polyester]",
        "Détails :",
        "• Silhouette ajustée avec jupe midi évasée qui crée une ligne féminine délicate.",
        "• Taille haute mise en valeur par une patte décorative avec boutons des deux côtés.",
        "• Fermeture éclair au dos pour plus de confort."
      ],
      colors: ["moka-mousse"]
    },
    UA: {
      category: "Сукні",
      name: "Сукня «Kriston»",
      description: [
        "Ця сукня створена для жінок, які цінують комфорт і лаконічну елегантність. Вона поєднує мінімалізм крою та витончені деталі, які формують стильний і водночас універсальний образ.",
        "Тканина: Турецький бавовняний меланж. Приємна до тіла, дихаюча, тримає форму та практична в догляді.",
        "[Склад: 80% вовни, 20% поліестер]",
        "Деталі:",
        "• Силует приталений із розкльошеною спідницею міді, яка створює ніжну жіночну лінію.",
        "• Висока лінія талії підкреслюється декоративним хлястиком із ґудзиками з обох боків.",
        "• Спинка із застібкою-блискавкою забезпечує зручність у носінні."
      ],
      colors: ["мокко-мус"]
    },
    RU: {
      category: "Платья",
      name: "Платье «Kriston»",
      description: [
        "Это платье создано для женщин, которые ценят комфорт и лаконичную элегантность. Оно сочетает минимализм кроя и изысканные детали, формируя стильный и универсальный образ.",
        "Ткань: турецкий хлопковый меланж. Приятная к телу, дышащая, держит форму и практична в уходе.",
        "[Состав: 80% шерсть, 20% полиэстер]",
        "Детали:",
        "• Приталенный силуэт с расклёшенной юбкой миди, создающей нежную женственную линию.",
        "• Высокая линия талии подчёркнута декоративным хлястиком с пуговицами по бокам.",
        "• Застёжка-молния на спинке для удобства в носке."
      ],
      colors: ["мокко-мусс"]
    }
  }
},

  {
  id: 159,
  price: 3100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 2635,
  sku: "98812",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Kriston cocoa Dress/1.avif",
  images: [
    "/Dress/Kriston cocoa Dress/2.avif",
    "/Dress/Kriston cocoa Dress/3.avif",
    "/Dress/Kriston cocoa Dress/4.avif",
    "/Dress/Kriston cocoa Dress/5.avif",
    "/Dress/Kriston cocoa Dress/6.avif",
    "/Dress/Kriston cocoa Dress/7.avif",
    "/Dress/Kriston cocoa Dress/8.avif",
    "/Dress/Kriston cocoa Dress/9.avif",
    "/Dress/Kriston cocoa Dress/10.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Kriston cocoa Dress",
      description: [
        "This dress is designed for women who value comfort and understated elegance. It combines minimalist tailoring with refined details, creating a stylish yet versatile look.",
        "Fabric: Medium-density matte fabric, soft to the touch.",
        "[Composition: 35% viscose, 60% polyester, 5% spandex]",
        "Details:",
        "• Fitted silhouette with a flared midi skirt that creates a delicate feminine line.",
        "• High waistline accentuated with a decorative strap and buttons on both sides.",
        "• Back zipper closure for comfortable wear."
      ],
      colors: ["cocoa-powder"]
    },
    FR: {
      category: "Robes",
      name: "Robe «Kriston cocoa»",
      description: [
        "Cette robe est conçue pour les femmes qui apprécient le confort et l’élégance sobre. Elle associe une coupe minimaliste à des détails raffinés, créant un look à la fois élégant et polyvalent.",
        "Tissu : tissu mat de densité moyenne, doux au toucher.",
        "[Composition : 35% viscose, 60% polyester, 5% élasthanne]",
        "Détails :",
        "• Silhouette ajustée avec une jupe midi évasée qui crée une ligne féminine délicate.",
        "• Taille haute mise en valeur par une patte décorative avec boutons des deux côtés.",
        "• Fermeture éclair au dos pour plus de confort."
      ],
      colors: ["cacao-poudre"]
    },
    UA: {
      category: "Сукні",
      name: "Сукня «Kriston cocoa»",
      description: [
        "Ця сукня створена для жінок, які цінують комфорт і лаконічну елегантність. Вона поєднує мінімалізм крою та витончені деталі, які формують стильний і водночас універсальний образ.",
        "Тканина: тканина середньої щільності, матова, на дотик мʼяка.",
        "[Склад: 35% віскоза, 60% поліестер, 5% спандекс]",
        "Деталі:",
        "• Силует приталений із розкльошеною спідницею міді, яка створює ніжну жіночну лінію.",
        "• Висока лінія талії підкреслюється декоративним хлястиком із ґудзиками з обох боків.",
        "• Спинка із застібкою-блискавкою забезпечує зручність у носінні."
      ],
      colors: ["какао-пудра"]
    },
    RU: {
      category: "Платья",
      name: "Платье «Kriston cocoa»",
      description: [
        "Это платье создано для женщин, которые ценят комфорт и лаконичную элегантность. Оно сочетает минимализм кроя и изысканные детали, формируя стильный и универсальный образ.",
        "Ткань: матовая ткань средней плотности, мягкая на ощупь.",
        "[Состав: 35% вискоза, 60% полиэстер, 5% спандекс]",
        "Детали:",
        "• Приталенный силуэт с расклёшенной юбкой миди, создающей нежную женственную линию.",
        "• Высокая линия талии подчёркнута декоративным хлястиком с пуговицами по бокам.",
        "• Застёжка-молния на спинке для удобства в носке."
      ],
      colors: ["какао-пудра"]
    }
  }
},



//   {
//   id: 157,
//   price: 4350,
//   isTop: false,
//   isNew: true,
//   // isSpecialOffer: true,
//   // discountPrice: 3698,
//   sku: "98810",
//   size: "XS S M L XL",
//   category: "Costumes",
//   image: "/Costumes/Poudre Suit/1.avif",
//   images: [
//     "/Costumes/Poudre Suit/2.avif",
//      {
//       type: "video",
//       src: "/Costumes/Poudre Suit/IMG_8882.mp4",
//       poster: "/Costumes/Poudre Suit/1.avif",
//     },
//     "/Costumes/Poudre Suit/3.avif",
//     "/Costumes/Poudre Suit/4.avif",
//     "/Costumes/Poudre Suit/5.avif"
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Costumes",
//       name: "Poudre Suit",
//       description: [
//         "This suit is created for women who appreciate refined classics and the warmth of natural fabrics. It combines elegance and comfort, highlighting femininity in every detail.",
//         "Perfect choice for the autumn-winter season.",
//         "Fabric: Premium-quality natural wool that provides warmth, coziness, and pleasant tactile sensations.",
//         "[Composition: 75% wool]",
//         "Details:",
//         "• Jumper: round neckline and long raglan sleeves with light volume",
//         "• Neat decorative pleats on the chest create a refined accent",
//         "• Pencil skirt: high waist emphasizes the figure and elongates the silhouette",
//         "• Decorative front buttons and imitation pockets add a modern character"
//       ],
//       colors: ["powder"]
//     },
//     FR: {
//       category: "Costumes",
//       name: "Costume «Poudre»",
//       description: [
//         "Ce costume est conçu pour les femmes qui apprécient le classique raffiné et la chaleur des tissus naturels. Il allie élégance et confort, mettant en valeur la féminité dans chaque détail.",
//         "Un choix idéal pour la saison automne-hiver.",
//         "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et sensations agréables au toucher.",
//         "[Composition : 75% laine]",
//         "Détails :",
//         "• Pull : encolure ronde et manches raglan longues avec un léger volume",
//         "• Plis décoratifs soignés sur la poitrine créant un accent raffiné",
//         "• Jupe crayon : taille haute qui souligne la silhouette et allonge les jambes",
//         "• Boutons décoratifs sur le devant et fausses poches pour une touche moderne"
//       ],
//       colors: ["poudre"]
//     },
//     UA: {
//       category: "Костюми",
//       name: "Костюм «Poudre»",
//       description: [
//         "Цей костюм створений для жінок, які цінують вишукану класику та тепло натуральних тканин. Він поєднує елегантність і комфорт, підкреслюючи жіночність у кожній деталі.",
//         "Ідеальний варіант для осінньо-зимового сезону.",
//         "Тканина: натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
//         "[Склад: 75% вовни]",
//         "Деталі:",
//         "• Джемпер: округлий виріз горловини та довгі рукави-реглан із легким об’ємом.",
//         "• Акуратні декоративні складки на грудях формують витончений акцент.",
//         "• Спідниця-олівець: висока посадка підкреслює талію та витягує силует.",
//         "• Декор у вигляді ґудзиків спереду та імітація кишень додають сучасного характеру."
//       ],
//       colors: ["пудра"]
//     },
//     RU: {
//       category: "Костюмы",
//       name: "Костюм «Poudre»",
//       description: [
//         "Этот костюм создан для женщин, которые ценят изысканную классику и тепло натуральных тканей. Он сочетает элегантность и комфорт, подчеркивая женственность в каждой детали.",
//         "Идеальный вариант для осенне-зимнего сезона.",
//         "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
//         "[Состав: 75% шерсти]",
//         "Детали:",
//         "• Джемпер: круглый вырез горловины и длинные рукава-реглан с лёгким объёмом",
//         "• Аккуратные декоративные складки на груди создают изысканный акцент",
//         "• Юбка-карандаш: высокая посадка подчёркивает талию и вытягивает силуэт",
//         "• Декор в виде пуговиц спереди и имитация карманов добавляют современный характер"
//       ],
//       colors: ["пудра"]
//     }
//   }
// },

  {
  id: 156,
  price: 2100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1785,
  sku: "98809",
  size: "XS S M L XL",
  category: "Pants",
  image: "/Pants/Natalie Pants/1.avif",
  images: [
    "/Pants/Natalie Pants/2.avif",
    "/Pants/Natalie Pants/3.avif",
    "/Pants/Natalie Pants/4.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Pants",
      name: "Natalie Pants",
      description: [
        "Stylish pants that will become the foundation of countless outfits — from office to evening looks.",
        "Pair them with blouses, shirts, or tops to create a variety of moods, from business to romantic.",
        "Fabric: Premium dense suiting fabric that holds its shape while being pleasant to the body.",
        "[Composition: 75% viscose, 25% polyester]",
        "Details:",
        "• High-waist design for comfort and accentuating the silhouette",
        "• Straight, elongated cut that visually lengthens the legs and adds elegance"
      ],
      colors: ["chocolate"]
    },
    FR: {
      category: "Pantalons",
      name: "Pantalon «Natalie»",
      description: [
        "Un pantalon élégant qui deviendra la base de nombreux looks — du bureau aux sorties du soir.",
        "Associez-le à des chemisiers, des chemises ou des tops pour créer des styles variés, du business au romantique.",
        "Tissu : tissu de costume dense premium qui garde sa forme tout en étant agréable au corps.",
        "[Composition : 75% viscose, 25% polyester]",
        "Détails :",
        "• Taille haute pour le confort et la mise en valeur de la silhouette",
        "• Coupe droite et allongée qui allonge visuellement les jambes et affine la silhouette"
      ],
      colors: ["chocolat"]
    },
    UA: {
      category: "Брюки",
      name: "Брюки «Natalie»",
      description: [
        "Стильні брюки, які стануть основою безлічі образів — від офісних до вечірніх.",
        "Поєднуйте брюки з блузами, сорочками чи топами для створення різних настроїв — від ділового до романтичного.",
        "Тканина: щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Посадка: висока талія для зручності та акценту на силуеті.",
        "• Крій: прямий, подовжений, візуально витягує ноги та додає стрункості."
      ],
      colors: ["шоколад"]
    },
    RU: {
      category: "Брюки",
      name: "Брюки «Natalie»",
      description: [
        "Стильные брюки, которые станут основой множества образов — от офисных до вечерних.",
        "Сочетайте брюки с блузами, рубашками или топами, чтобы создать разное настроение — от делового до романтического.",
        "Ткань: плотная костюмная ткань премиум-класса, которая держит форму, но при этом приятна к телу.",
        "[Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Посадка: высокая талия для удобства и акцента на силуэте.",
        "• Крой: прямой, удлинённый, визуально вытягивает ноги и добавляет стройности."
      ],
      colors: ["шоколад"]
    }
  }
},

  {
  id: 155,
  price: 2100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1785,
  sku: "98808",
  size: "XS S M L XL",
  category: "Tops",
  image: "/Top/Natalie Vest/1.avif",
  images: [
    "/Top/Natalie Vest/2.avif",
    "/Top/Natalie Vest/3.avif",
    "/Top/Natalie Vest/4.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Tops",
      name: "Natalie Vest",
      description: [
        "An exquisite vest in a deep chocolate shade — the perfect blend of classic and modern style.",
        "Wear it separately with jeans or a skirt, or pair with trousers from the set for a flawless total look.",
        "Fabric: Premium dense suiting fabric that holds its shape while being pleasant to the body.",
        "[Composition: 75% viscose, 25% polyester]",
        "Details:",
        "• Sleeveless vest with a refined round neckline",
        "• Features a subtle peplum that beautifully shapes the silhouette"
      ],
      colors: ["chocolate"]
    },
    FR: {
      category: "Tops",
      name: "Gilet «Natalie»",
      description: [
        "Un gilet raffiné dans une teinte chocolat profond — un mélange parfait de classique et de modernité.",
        "Portez-le séparément avec un jean ou une jupe, ou combinez-le avec un pantalon de l’ensemble pour un look total impeccable.",
        "Tissu : tissu de costume dense premium qui garde sa forme tout en étant agréable au corps.",
        "[Composition : 75% viscose, 25% polyester]",
        "Détails :",
        "• Gilet sans manches avec une encolure ronde élégante",
        "• Dispose d’un léger basque qui forme joliment la silhouette"
      ],
      colors: ["chocolat"]
    },
    UA: {
      category: "Топи",
      name: "Жилет «Natalie»",
      description: [
        "Вишуканий жилет у глибокому шоколадному відтінку — це ідеальне поєднання класики та сучасності.",
        "Носіть жилет окремо з джинсами чи спідницею, або комбінуйте з брюками з комплекту для бездоганного total look.",
        "Тканина: щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Жилет без рукавів, із витонченим округлим вирізом",
        "• Має легку баску, яка красиво формує силует"
      ],
      colors: ["шоколад"]
    },
    RU: {
      category: "Топы",
      name: "Жилет «Natalie»",
      description: [
        "Изысканный жилет в глубоком шоколадном оттенке — идеальное сочетание классики и современности.",
        "Носите жилет отдельно с джинсами или юбкой, либо сочетайте с брюками из комплекта для безупречного total look.",
        "Ткань: плотная костюмная ткань премиум-класса, которая держит форму, но при этом приятна к телу.",
        "[Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Жилет без рукавов с изящным круглым вырезом",
        "• Имеет лёгкую баску, которая красиво формирует силуэт"
      ],
      colors: ["шоколад"]
    }
  }
},

  {
  id: 154,
  price: 2000,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 1700,
  sku: "98807",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Natalie Skirt/1.avif",
  images: [
    "/Skirts/Natalie Skirt/2.avif",
    "/Skirts/Natalie Skirt/3.avif",
    "/Skirts/Natalie Skirt/4.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Natalie Skirt",
      description: [
        "A feminine and sophisticated skirt that will become a favorite base of your wardrobe.",
        "Pair it with strict shirts for the office or delicate tops for romantic outings.",
        "Fabric: Premium dense suiting fabric that holds its shape while being pleasant to the body.",
        "[Composition: 75% viscose, 25% polyester]",
        "Details:",
        "• Design: classic midi length with sharp pleats that add dynamics and lightness.",
        "• Fit: high waist that visually elongates the legs."
      ],
      colors: ["chocolate"]
    },
    FR: {
      category: "Jupes",
      name: "Jupe «Natalie»",
      description: [
        "Une jupe féminine et sophistiquée qui deviendra la base préférée de votre garde-robe.",
        "À associer avec des chemises strictes pour le bureau ou des tops délicats pour des sorties romantiques.",
        "Tissu : tissu de costume dense premium qui garde sa forme tout en étant agréable au corps.",
        "[Composition : 75% viscose, 25% polyester]",
        "Détails :",
        "• Design : longueur midi classique avec plis marqués qui ajoutent dynamisme et légèreté.",
        "• Coupe : taille haute qui allonge visuellement les jambes."
      ],
      colors: ["chocolat"]
    },
    UA: {
      category: "Спідниці",
      name: "Спідниця «Natalie»",
      description: [
        "Жіночна та вишукана спідниця, яка стане улюбленою базою вашого гардеробу.",
        "Поєднуйте зі строгими сорочками для офісу або з ніжними топами для романтичних виходів.",
        "Тканина: щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Дизайн: класична довжина міді, із чіткими плісе, що додають динаміки й легкості.",
        "• Посадка: висока талія, яка візуально подовжує ноги."
      ],
      colors: ["шоколад"]
    },
    RU: {
      category: "Юбки",
      name: "Юбка «Natalie»",
      description: [
        "Женственная и изысканная юбка, которая станет любимой основой вашего гардероба.",
        "Сочетайте с строгими рубашками для офиса или с нежными топами для романтических выходов.",
        "Ткань: плотная костюмная ткань премиум-класса, которая держит форму, но при этом приятна к телу.",
        "[Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Дизайн: классическая длина миди с чёткими плиссе, которые добавляют динамики и лёгкости.",
        "• Посадка: высокая талия, которая визуально удлиняет ноги."
      ],
      colors: ["шоколад"]
    }
  }
},
  {
  id: 153,
  price: 4050,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 3443,
  sku: "98806",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Natalie Classic Suit/1.avif",
  images: [
    "/Costumes/Natalie Classic Suit/2.avif",
    "/Costumes/Natalie Classic Suit/3.avif",
    "/Costumes/Natalie Classic Suit/4.avif",
    "/Costumes/Natalie Classic Suit/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Natalie Suit",
      description: [
        "This suit is designed for women who value elegance, comfort, and modern style.",
        "The minimalist design accentuates the figure, while every detail adds sophistication.",
        "Perfect for both business meetings and evening outings.",
        "Fabric: Premium dense suiting fabric that holds its shape while being pleasant to the body.",
        "[Composition: 75% viscose, 25% polyester]",
        "Details:",
        "• Sleeveless vest with a refined rounded neckline",
        "• Light peplum beautifully shaping the silhouette",
        "• Classic straight trousers with a high waist"
      ],
      colors: ["chocolate"]
    },
    FR: {
      category: "Costumes",
      name: "Costume «Natalie»",
      description: [
        "Ce costume est conçu pour la femme qui apprécie l'élégance, le confort et le style moderne.",
        "Le design minimaliste met en valeur la silhouette et chaque détail ajoute de la sophistication.",
        "Un choix idéal pour les réunions d'affaires comme pour les sorties en soirée.",
        "Tissu : tissu de costume dense premium qui garde sa forme tout en étant agréable au corps.",
        "[Composition : 75% viscose, 25% polyester]",
        "Détails :",
        "• Gilet sans manches avec encolure arrondie raffinée",
        "• Basque légère qui forme joliment la silhouette",
        "• Pantalon classique droit avec taille haute"
      ],
      colors: ["chocolat"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм «Natalie»",
      description: [
        "Цей костюм створений для жінки, яка цінує елегантність, комфорт та сучасний стиль.",
        "Лаконічний дизайн підкреслює фігуру, а кожна деталь додає образу вишуканості.",
        "Ідеальний варіант як для ділових зустрічей, так і для вечірніх виходів.",
        "Тканина: щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Жилет без рукавів, із витонченим округлим вирізом",
        "• Має легку баску, яка красиво формує силует",
        "• Брюки класичного прямого крою з високою посадкою"
      ],
      colors: ["шоколад"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм «Natalie»",
      description: [
        "Этот костюм создан для женщины, которая ценит элегантность, комфорт и современный стиль.",
        "Лаконичный дизайн подчёркивает фигуру, а каждая деталь добавляет образу утончённости.",
        "Идеальный вариант как для деловых встреч, так и для вечерних выходов.",
        "Ткань: плотная костюмная ткань премиум-класса, которая держит форму, но приятна к телу.",
        "[Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Жилет без рукавов с изящным круглым вырезом",
        "• Лёгкая баска красиво формирует силуэт",
        "• Классические прямые брюки с высокой посадкой"
      ],
      colors: ["шоколад"]
    }
  }
},

  {
  id: 152,
  price: 4100,
  isTop: false,
  isNew: false,
  //  isSpecialOffer: true,
  // discountPrice: 3485,
  sku: "98805",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Natalie Suit/2.avif",
  images: [
    "/Costumes/Natalie Suit/2.avif",
    "/Costumes/Natalie Suit/3.avif",
    "/Costumes/Natalie Suit/4.avif",
    "/Costumes/Natalie Suit/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Natalie Suit with Skirt",
      description: [
        "A stylish duo that combines structured tailoring with feminine details.",
        "The set can be worn together as a total look or separately to create dozens of new combinations.",
        "Fabric: Premium dense suiting fabric that holds its shape while being pleasant to the body.",
        "[Composition: 75% viscose, 25% polyester]",
        "Details:",
        "• Elongated sleeveless vest with a refined neckline and peplum that shapes an elegant silhouette",
        "• Midi-length skirt with deep pleats that move beautifully when walking"
      ],
      colors: ["chocolate"]
    },
    FR: {
      category: "Costumes",
      name: "Costume «Natalie» avec jupe",
      description: [
        "Un duo élégant qui combine la rigueur de la coupe et la féminité des détails.",
        "L'ensemble peut être porté comme un total look ou séparé pour créer des dizaines de nouvelles combinaisons.",
        "Tissu : tissu de costume dense premium qui garde sa forme tout en étant agréable au corps.",
        "[Composition : 75% viscose, 25% polyester]",
        "Détails :",
        "• Gilet long sans manches avec encolure raffinée et basque formant une silhouette élégante",
        "• Jupe midi avec de profonds plis qui bougent joliment à la marche"
      ],
      colors: ["chocolat"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм «Natalie» зі спідницею",
      description: [
        "Стильний дует, що поєднує в собі строгість крою та жіночність деталей.",
        "Комплект можна носити разом як готовий total look, або розділяти й створювати десятки нових комбінацій.",
        "Тканина: щільна костюмна тканина преміум-класу, що тримає форму, але при цьому приємна до тіла.",
        "[Склад: 75% віскоза, 25% поліестер]",
        "Деталі:",
        "• Подовжений жилет без рукавів, із витонченим вирізом і баскою, яка формує елегантний силует",
        "• Спідниця міді-довжини, з глибокими плісе, що красиво рухаються при ходьбі"
      ],
      colors: ["шоколад"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм «Natalie» с юбкой",
      description: [
        "Стильный дуэт, сочетающий строгость кроя и женственность деталей.",
        "Комплект можно носить вместе как готовый total look или раздельно, создавая десятки новых комбинаций.",
        "Ткань: плотная костюмная ткань премиум-класса, которая держит форму, но приятна к телу.",
        "[Состав: 75% вискоза, 25% полиэстер]",
        "Детали:",
        "• Удлинённый жилет без рукавов с изящным вырезом и баской, формирующей элегантный силуэт",
        "• Юбка миди-длины с глубокими складками, красиво двигающимися при ходьбе"
      ],
      colors: ["шоколад"]
    }
  }
},

  {
  id: 151,
  price: 5100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 4335,
  sku: "98804",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Raw Cut Suit/1.avif",
  images: [
    "/Costumes/Raw Cut Suit/2.avif",
    "/Costumes/Raw Cut Suit/3.avif",
    "/Costumes/Raw Cut Suit/4.avif",
    "/Costumes/Raw Cut Suit/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Raw Cut Suit",
      description: [
        "Butter-colored suit: oversized raw-cut linen jacket and classic high-waisted pants.",
        "Fabric: 100% natural linen. Doesn’t itch and is nearly opaque.",
        "Details:",
        "• oversized fit",
        "• raw cut",
        "• high waist"
      ],
      colors: ["butter"]
    },
    FR: {
      category: "Costumes",
      name: "Costume en lin à coupe brute",
      description: [
        "Costume couleur beurre : veste oversize en lin à coupe brute et pantalon classique taille haute.",
        "Tissu : 100% lin naturel. Ne gratte pas et presque pas transparent.",
        "Détails :",
        "• coupe oversize",
        "• coupe brute",
        "• taille haute"
      ],
      colors: ["beurre"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм необробленого крою",
      description: [
        "Масло костюм: лляний оверсайз жакет необробленого крою та класичні брюки на високій посадці.",
        "Тканина: 100% натуральний льон. Не колеться та майже не просвічує.",
        "Деталі:",
        "• оверсайз фасон",
        "• необроблений крій",
        "• висока посадка"
      ],
      colors: ["масло"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм необработанного кроя",
      description: [
        "Костюм цвета масло: льняной жакет оверсайз необработанного кроя и классические брюки с высокой посадкой.",
        "Ткань: 100% натуральный лён. Не колется и почти не просвечивает.",
        "Детали:",
        "• фасон оверсайз",
        "• необработанный крой",
        "• высокая посадка"
      ],
      colors: ["масло"]
    }
  }
},

//   {
//   id: 150,
//   price: 3950,
//   isTop: false,
//   isNew: true,
//   // isSpecialOffer: true,
//   // discountPrice: 3550,
//   sku: "98803",
//   size: "XS S M L XL",
//   category: "Costumes",
//   image: "/Costumes/Long Vest Costume/1.avif",
//   images: [
//     "/Costumes/Long Vest Costume/2.avif",
//     "/Costumes/Long Vest Costume/3.avif",
//     "/Costumes/Long Vest Costume/4.avif",
//     "/Costumes/Long Vest Costume/5.avif",
//     "/Costumes/Long Vest Costume/6.avif",
//   ],
//   sizes: ["XS", "S", "M", "L", "XL"],
//   translations: {
//     EN: {
//       category: "Costumes",
//       name: "Costume with Long Vest",
//       description: [
//         "Mocha linen suit: elongated linen vest with corset-style back and high-waisted bermuda shorts.",
//         "Fabric: 100% natural linen. Doesn’t itch and is nearly opaque.",
//         "Details:",
//         "• tailored silhouette",
//         "• corset-style back",
//         "• high waist"
//       ],
//       colors: ["mocha"]
//     },
//     FR: {
//       category: "Costumes",
//       name: "Costume avec gilet long",
//       description: [
//         "Costume couleur moka : gilet long en lin avec dos style corset et bermudas taille haute.",
//         "Tissu : 100% lin naturel. Ne gratte pas et presque pas transparent.",
//         "Détails :",
//         "• coupe cintrée",
//         "• dos style corset",
//         "• taille haute"
//       ],
//       colors: ["moka"]
//     },
//     UA: {
//       category: "Костюми",
//       name: "Костюм із подовженим жилетом",
//       description: [
//         "Мокко костюм: лляний подовжений жилет з корсетною спинкою та шорти-бермуди на високій посадці.",
//         "Тканина: 100% натуральний льон. Не колеться та майже не просвічує.",
//         "Деталі:",
//         "• приталений фасон",
//         "• корсетна спинка",
//         "• висока посадка"
//       ],
//       colors: ["мокко"]
//     },
//     RU: {
//       category: "Костюмы",
//       name: "Костюм с удлинённым жилетом",
//       description: [
//         "Костюм цвета мокко: льняной удлинённый жилет с корсетной спинкой и бермуды с высокой посадкой.",
//         "Ткань: 100% натуральный лён. Не колется и почти не просвечивает.",
//         "Детали:",
//         "• приталенный фасон",
//         "• корсетная спинка",
//         "• высокая посадка"
//       ],
//       colors: ["мокко"]
//     }
//   }
// },
  {
  id: 149,
  price: 5100,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 4335,
  sku: "98802",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Costume with Vest-Shirt/1.avif",
  images: [
    "/Costumes/Costume with Vest-Shirt/2.avif",
    "/Costumes/Costume with Vest-Shirt/3.avif",
    "/Costumes/Costume with Vest-Shirt/4.avif",
    "/Costumes/Costume with Vest-Shirt/5.avif",
    "/Costumes/Costume with Vest-Shirt/6.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Costume with Vest-Shirt",
      description: [
        "White linen Costume: linen wrap vest with batiste shirt elements and high-waisted palazzo trousers.",
        "Fabric: 100% natural linen. Doesn’t itch and is nearly opaque.",
        "Details:",
        "• wrap design",
        "• batiste shirt-style inserts",
        "• high waist"
      ],
      colors: ["white"]
    },
    FR: {
      category: "Costumes",
      name: "Costume avec gilet-chemise",
      description: [
        "Costume blanc : gilet portefeuille en lin avec éléments de chemise en batiste et pantalon palazzo taille haute.",
        "Tissu : 100% lin naturel. Ne gratte pas et presque pas transparent.",
        "Détails :",
        "• coupe portefeuille",
        "• inserts chemise en batiste",
        "• taille haute"
      ],
      colors: ["blanc"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм із жилетом-сорочкою",
      description: [
        "Білий костюм: лляний жилет з елементами батистової сорочки із принтом та брюки-палаццо на високій посадці.",
        "Тканина: 100% натуральний льон. Не колеться та майже не просвічує.",
        "Деталі:",
        "• фасон на запах",
        "• батистові вставки у вигляді сорочки",
        "• висока посадка"
      ],
      colors: ["білий"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм с жилетом-рубашкой",
      description: [
        "Белый костюм: льняной жилет с элементами батистовой рубашки с принтом и брюки-палаццо с высокой посадкой.",
        "Ткань: 100% натуральный лён. Не колется и почти не просвечивает.",
        "Детали:",
        "• фасон на запах",
        "• батистовые вставки в виде рубашки",
        "• высокая посадка"
      ],
      colors: ["белый"]
    }
  }
},
  // {
  //   id: 148,
  //   price: 10,
  //   isTop: false,
  //   isNew: false,
  //   isSpecialOffer: true,
  //   discountPrice: 5,

  //   sku: "98800",
  //   size: "XS S M L XL",
  //   category: "Shirts",
  //   image: "/Shirts/Corset Shirt/1.avif",
  //   images: [
  //     "/Shirts/Corset Shirt/1.avif",
  //     "/Shirts/Corset Shirt/2.avif",
  //     "/Shirts/Corset Shirt/3.avif",
  //     "/Shirts/Corset Shirt/4.avif",
  //     "/Shirts/Corset Shirt/5.avif",
  //     "/Shirts/Corset Shirt/6.avif",
  //     "/Shirts/Corset Shirt/7.avif",
  //     "/Shirts/Corset Shirt/8.avif",
  //     "/Shirts/Corset Shirt/9.avif",
  //     "/Shirts/Corset Shirt/10.avif",
  //   ],
  //   sizes: ["XS", "S", "M", "L", "XL"],
  //   translations: {
  //     EN: {
  //       category: "Shirts",
  //       name: "Test",
  //       description: "Fitted shirt with pronounced bust and corset back. Fabric: 100% cotton",
  //       colors: ["lemon", "black"]
  //     },
  //     FR: {
  //       category: "Chemises",
  //       name: "Chemise corset",
  //       description: "Chemise cintrée avec buste prononcé et dos style corset. Tissu: 100% coton",
  //       colors: ["citron", "noir"]
  //     },
  //     UA: {
  //       category: "Сорочки",
  //       name: "Сорочка із корсетом",
  //       description: "Приталена сорочка із вираженим бюстом та корсетною спинкою. Тканина: 100% бавовна",
  //       colors: ["лимонний", "чорний"]
  //     },
  //     RU: {
  //       category: "Рубашки",
  //       name: "Рубашка с корсетом",
  //       description: "Приталенная рубашка с подчёркнутым бюстом и корсетной спинкой. Ткань: 100% хлопок",
  //       colors: ["лимонный", "чёрный"]
  //     }
  //   }
  // },

 {
    id: 147,
    price: 2100,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 1785,
    sku: "98800",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Corset Shirt/1.avif",
    images: [
      "/Shirts/Corset Shirt/1.avif",
      "/Shirts/Corset Shirt/2.avif",
      "/Shirts/Corset Shirt/3.avif",
      "/Shirts/Corset Shirt/4.avif",
      "/Shirts/Corset Shirt/5.avif",
      "/Shirts/Corset Shirt/6.avif",
      "/Shirts/Corset Shirt/7.avif",
      "/Shirts/Corset Shirt/8.avif",
      "/Shirts/Corset Shirt/9.avif",
      "/Shirts/Corset Shirt/10.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Corset Shirt",
description: [
  "Cotton shirt with a defined lace bust and a corset-style back. Perfect for any occasion — looks absolutely stunning.",
  "Fabric: 100% natural cotton. Light and soft to the touch.",
  "Details:",
  "• Corset-style back",
  "• Not see-through",
  "• Hidden buttons"
],
        colors: ["lemon", "black"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise corset",
        description: "Chemise cintrée avec buste prononcé et dos style corset. Tissu: 100% coton",
        colors: ["citron", "noir"]
      },
      UA: {
        category: "Сорочки",
        name: "Сорочка із корсетом",
description: [
  "Бавовняна сорочка із вираженим бюстом у вигляді мережива та корсетною спинкою. На будь-яку подію буде виглядати неперевершено.",
  "Тканина: 100% натуральна бавовна. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Корсетна спинка",
  "• Не просвічує",
  "• Скриті ґудзики"
],        colors: ["лимонний", "чорний"]
      },
      RU: {
        category: "Рубашки",
        name: "Рубашка с корсетом",
        description: "Приталенная рубашка с подчёркнутым бюстом и корсетной спинкой. Ткань: 100% хлопок",
        colors: ["лимонный", "чёрный"]
      }
    }
  },

    {
    id: 146,
    price: 3900,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 3315,
    sku: "98799",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Flora Dress/1.avif",
    images: [
      "/Dress/Flora Dress/1.avif",
      "/Dress/Flora Dress/2.avif",
      "/Dress/Flora Dress/3.avif",
      "/Dress/Flora Dress/4.avif",
      "/Dress/Flora Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Flora Dress",
description: [
  "The 'Flora' dress embodies femininity, tenderness, and natural freedom.",
  "Perfect for nature walks, summer travels, or slow living style photoshoots.",
  "Fabric: long-staple muslin made of 100% cotton.",
  "Details:",
  "• Loose cut with an elegant silhouette — emphasizes natural grace",
  "• Accents with light golden print — like sunshine among the grass",
  "• Front buttons add a touch of boho charm"
],
        colors: ["one color"]
      },
      FR: {
        category: "Robes",
        name: "Robe \"Flora\"",
        description: "Mousseline à longues fibres en 100% coton. Tissu léger et doux au toucher",
        colors: ["une couleur"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня «Flora»",
description: [
  "Сукня «Flora» — уособлення жіночності, ніжності та природної свободи.",
  "Ідеальна для прогулянок у природі, літніх подорожей чи фотосесій у стилі slow living.",
  "Тканина: довговолокняний муслін зі 100% бавовни.",
  "Деталі:",
  "• Вільний крій з витонченим силуетом — підкреслює природну грацію",
  "• Акценти зі світлим золотим принтом — мов сонячне сяйво серед трав",
  "• Ґудзики спереду додають легкого бохо-шарму"
],
        colors: ["один колір"]
      },
      RU: {
        category: "Платья",
        name: "Платье «Flora»",
        description: "Ткань: длинноволокнистый муслин из 100% хлопка. Лёгкая и мягкая ткань на ощупь",
        colors: ["один цвет"]
      }
    }
  },

  {
  id: 145,
  price: 3900,
  isTop: false,
  isNew: false,
  // isSpecialOffer: true,
  // discountPrice: 3315,
  sku: "98798",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Hemp Printed Dress/1.avif",
  images: [
    "/Dress/Hemp Printed Dress/1.avif",
    "/Dress/Hemp Printed Dress/2.avif",
    "/Dress/Hemp Printed Dress/3.avif",
    "/Dress/Hemp Printed Dress/4.avif",
    "/Dress/Hemp Printed Dress/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Dresses",
      name: "Hemp Printed Dress",
description: [
  "A multi-layered maxi dress with delicate prints on the chest and skirt.",
  "Perfect for the summer season thanks to the fabric's natural properties.",
  "Fabric: double-layered muslin, 30% hemp, 70% cotton. One of the most eco-friendly textiles as it is grown without pesticides.",
  "Details:",
  "• Voluminous sleeves add a charming touch",
  "• Geometric patterns on the chest and hem — a stylish highlight",
  "• Natural fabric feels pleasant on the skin and is environmentally friendly"
],
      colors: ["hemp"]
    },
    FR: {
      category: "Robes",
      name: "Robe imprimée en chanvre",
      description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
      colors: ["chanvre"]
    },
    UA: {
      category: "Сукні",
      name: "Конопляна сукня із принтом",
description: [
  "Багатошарова сукня максі довжини із ніжним принтом на грудях та спідниці.",
  "Ідеально підійде на літній сезон завдяки властивостям тканини.",
  "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо вирощується без пестицидів.",
  "Деталі:",
  "• Об’ємні рукави додають образу шарму",
  "• Геометричні візерунки на грудях та подолі — стильна родзинка",
  "• Натуральна тканина приємна до тіла та екологічна"
],
      colors: ["конопляний"]
    },
    RU: {
      category: "Платья",
      name: "Конопляное платье с принтом",
      description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
      colors: ["конопляный"]
    }
  }
},

    {
    id: 144,
    price: 2950,
    // isSpecialOffer: true,
    // discountPrice: 2508,
    isTop: false,
    isNew: false,
    sku: "98797",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Patricia Dress/1.avif",
    images: [
      "/Dress/Patricia Dress/1.avif",
      "/Dress/Patricia Dress/2.avif",
      "/Dress/Patricia Dress/3.avif",
      "/Dress/Patricia Dress/4.avif",
      "/Dress/Patricia Dress/5.avif",
      "/Dress/Patricia Dress/6.avif",
      "/Dress/Patricia Dress/7.avif",
      "/Dress/Patricia Dress/8.avif",
      "/Dress/Patricia Dress/9.avif",
      "/Dress/Patricia Dress/10.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Patricia Dress",
description: [
  "This is the kind of look you want to wear on a date, a city stroll, or a morning coffee with a friend.",
  "A dress that boosts your confidence — even if you're just stepping out for ice cream.",
  "Fabric: 100% natural cotton, soft and comfortable. Gentle to the touch and skin-friendly.",
  "Details:",
  "• Stylish patch pockets",
  "• Comfortable belt and maxi length"
],
        colors: ["pink", "black"]
      },
      FR: {
        category: "Robes",
        name: "Robe \"Patricia\"",
        description: "Tissu: coton naturel, doux et confortable. Agréable au toucher et pour le corps.",
        colors: ["rose", "noir"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Patricia\"",
description: [
  "Це саме той образ, у якому хочеться йти на побачення, прогулянку містом чи ранкову каву з подругою.",
  "Сукня, яка додає впевненості, навіть якщо ти просто виходиш за морозивом.",
  "Тканина: 100% натуральний коттон, м'який і комфортний. Приємний на дотик і для тіла.",
  "Деталі:",
  "• Стильні накладні кишені",
  "• Зручний пояс та комфортна довжина максі"
],
        colors: ["рожевий", "чорний"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Patricia\"",
        description: "Ткань: натуральный хлопок, мягкий и комфортный. Приятный на ощупь и для тела.",
        colors: ["розовый", "черный"]
      }
    }
  },

    {
    id: 143,
    price: 2950,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2508,
    sku: "98796",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Becca Linen Dress/1.avif",
    images: [
      "/Dress/Becca Linen Dress/2.avif",
      "/Dress/Becca Linen Dress/3.avif",
      "/Dress/Becca Linen Dress/4.avif",
      "/Dress/Becca Linen Dress/5.avif",
      "/Dress/Becca Linen Dress/6.avif",
      "/Dress/Becca Linen Dress/7.avif",
      "/Dress/Becca Linen Dress/8.avif",
      "/Dress/Becca Linen Dress/9.avif",
      "/Dress/Becca Linen Dress/10.avif",
      "/Dress/Becca Linen Dress/11.avif",
      "/Dress/Becca Linen Dress/12.avif",
      "/Dress/Becca Linen Dress/13.avif",          
      "/Dress/Becca Linen Dress/14.avif",
      "/Dress/Becca Linen Dress/15.avif", 
      "/Dress/Becca Linen Dress/16.avif",
      "/Dress/Becca Linen Dress/17.avif", 
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Becca Linen Dress",
description: [
  "This silhouette is designed to highlight your figure, accentuate the waist, and bring everyday comfort.",
  "Effortless elegance and a refined fit — for a special mood with zero effort.",
  "Fabric: 100% natural linen, soft and comfortable. Not scratchy.",
  "Details:",
  "• Natural linen that holds its shape beautifully",
  "• Neat pleats and delicate side buttons",
  "• Versatile midi length that always looks appropriate"
],
        colors: ["white", "pink", "butter", "lemon"]
      },
      FR: {
        category: "Robes",
        name: "Robe en Lin \"Becca\"",
        description: "Tissu: 100% lin naturel, doux et confortable. Ne gratte pas.",
        colors: ["blanc"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Becca\" лляна",
description: [
  "Цей фасон створений, щоб підкреслити твою фігуру, зробити акцент на талії й подарувати комфорт щодня.",
  "Легка елегантність і витончена посадка — для особливого настрою без зайвих зусиль.",
  "Тканина: 100% натуральний льон, м'який і комфортний. Не колеться.",
  "Деталі:",
  "• Натуральний льон, який чудово тримає форму",
  "• Акуратні складки та ніжні ґудзики з боків",
  "• Універсальна міді-довжина, що завжди виглядає доречно"
],
        colors: ["білий", "рожевий", "масло", "лимонний"]
      },
      RU: {
        category: "Платья",
        name: "Льняное платье \"Becca\"",
        description: "Ткань: 100% натуральный лен, мягкий и комфортный. Не колется.",
        colors: ["белый"]
      }
    }
  },


{
    id: 142,
    price: 3100,
  //  isSpecialOffer: true,
  //   discountPrice: 2635,
    isTop: false,
    sku: "67241",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Kylie Dress/1.avif",
    images: [
        "/Dress/Kylie Dress/2.avif",
        "/Dress/Kylie Dress/3.avif",
        "/Dress/Kylie Dress/4.avif",
        "/Dress/Kylie Dress/5.avif",
        "/Dress/Kylie Dress/6.avif",
        "/Dress/Kylie Dress/7.avif",
        "/Dress/Kylie Dress/8.avif",
        "/Dress/Kylie Dress/9.avif",
        "/Dress/Kylie Dress/10.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Kylie Dress",
description: [
  "Sunny, light, and elegant — made of natural cotton, this is the perfect outfit for a date, a city walk, or a morning coffee with a friend.",
  "Fabric: 100% cotton. The dress is soft and comfortable, pleasant to the touch and skin-friendly.",
  "Details:",
  "• Lifting corset at the back for a perfect fit",
  "• Gentle gathering at the bust for a soft silhouette",
  "• A-line cut that highlights the waist and allows freedom of movement"
],
            colors: ["yellow","SkyBlue"]
        },
        FR: {
            category: "Robes",
            name: "Robe Kylie",
            description: "Une robe en coton naturel, douce et confortable. Agréable au toucher et pour le corps.\nTissu : 100 % coton.",
            colors: ["jaune","bleu"]
        },
        UA: {
            category: "Сукні",
            name: "Сукня «Kylie»",
description: [
  "Сонячна, легка й елегантна з натурального котону — це саме той образ, у якому хочеться йти на побачення, прогулянку містом чи ранкову каву з подругою.",
  "Тканина: 100% бавовна. Сукня з натурального коттону, м'яка і комфортна. Приємна на дотик і для тіла.",
  "Деталі:",
  "• Ліфтинг-корсет на спині з ідеальною посадкою",
  "• М’який збір на грудях для ніжного силуету",
  "• А-силует, що підкреслює талію і дарує свободу рухів"
],
            colors: ["жовтий","блакитний"]
        },
        RU: {
            category: "Платья",
            name: "Платье «Кайли»",
            description: "Платье из натурального хлопка, мягкое и комфортное. Приятное на ощупь и для тела.\nТкань: 100% хлопок.",
            colors: ["желтый","голубой"]
        }
    }
},

{
    id: 141,
    price: 2500,
    // isSpecialOffer: true,
    // discountPrice: 2125,
    isTop: false,
    sku: "67240",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Skyler Dress/1.avif",
    images: [
        "/Dress/Skyler Dress/2.avif",
        "/Dress/Skyler Dress/3.avif",
        "/Dress/Skyler Dress/4.avif",
        "/Dress/Skyler Dress/5.avif",
        "/Dress/Skyler Dress/6.avif",
        "/Dress/Skyler Dress/7.avif",
        "/Dress/Skyler Dress/8.avif",
        "/Dress/Skyler Dress/9.avif",
        "/Dress/Skyler Dress/10.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Skyler Dress",
description: [
  "A natural cotton dress that wins hearts from the very first step! Designed to offer freedom of movement and a feeling of confidence.",
  "Fabric: 100% cotton. Soft and comfortable, gentle on the skin and pleasant to the touch.",
  "Details:",
  "• Perfect wrap cut that highlights the waist",
  "• Large patch pockets",
  "• Adjustable tie for your ideal fit"
],
            colors: ["light blue","Black"]
        },
        FR: {
            category: "Robes",
            name: "Robe Skyler",
            description: "Une robe en coton naturel, douce et confortable. Agréable au toucher et pour le corps.\nTissu : 100 % coton.",
            colors: ["bleu clair","noir"]
        },
        UA: {
            category: "Сукні",
            name: "Сукня «Skyler»",
description: [
  "Сукня з натурального котону, яка підкорює з першого кроку! Вона створена для того, щоб дарувати свободу руху і почуття впевненості.",
  "Тканина: 100% бавовна. Сукня з натурального коттону, м'яка і комфортна. Приємна на дотик і для тіла.",
  "Деталі:",
  "• Ідеальний крій на запах, що підкреслює талію",
  "• Великі накладні кишені",
  "• Можна завʼязувати як вам зручно"
],
            colors: ["блакитний","чорний"]
        },
        RU: {
            category: "Платья",
            name: "Платье «Скайлер»",
            description: "Платье из натурального хлопка, мягкое и комфортное. Приятное на ощупь и для тела.\nТкань: 100% хлопок.",
            colors: ["голубой","черный"]
        }
    }
},

{
    id: 140,
    price: 3100,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2635,
    sku: "67239",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Alison Dress/1.avif",
    images: [
        "/Dress/Alison Dress/1.avif",
        "/Dress/Alison Dress/2.avif",
        "/Dress/Alison Dress/3.avif",
        "/Dress/Alison Dress/4.avif",
        "/Dress/Alison Dress/5.avif",
        "/Dress/Alison Dress/6.avif",
        "/Dress/Alison Dress/7.avif",
        "/Dress/Alison Dress/8.avif",
        "/Dress/Alison Dress/9.avif",
        "/Dress/Alison Dress/10.avif",
        "/Dress/Alison Dress/11.avif",
        "/Dress/Alison Dress/12.avif",
        "/Dress/Alison Dress/13.avif",
        "/Dress/Alison Dress/14.avif",
        "/Dress/Alison Dress/15.avif",
        
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Alison Dress",
description: [
  "Elegant, minimalist yet full of character — this wrap dress is made for those who choose naturalness, comfort, and style in one look.",
  "Fabric: 100% natural linen. Soft and comfortable. Not itchy.",
  "Details:",
  "• Breathable linen keeps you cool in the heat",
  "• Wrap silhouette highlights the waist and adds femininity",
  "• Perfect choice for a city stroll or a dinner on the terrace"
],
            colors: ["white", "pink", "lemon"]
        },
        FR: {
            category: "Robes",
            name: "Robe Alison",
            description: "Une robe en lin naturel 100 %, offrant une excellente respirabilité pour le corps.\nTissu : 100 % lin.",
            colors: ["blanc", "rose", "citron"]
        },
        UA: {
            category: "Сукні",
            name: "Сукня «Alison»",
description: [
  "Елегантна, стримана, але з характером — ця сукня на запах створена для тих, хто обирає натуральність, комфорт і стиль в одному образі.",
  "Тканина: 100% натуральний льон, м'який і комфортний. Не колеться.",
  "Деталі:",
  "• Лляна тканина дихає та дарує прохолоду у спеку",
  "• Силует на запах підкреслює талію та додає жіночності",
  "• Ідеальний варіант як для прогулянки містом, так і для вечері на терасі"
],
            colors: ["білий","рожевий", "лимонний"]
        },
        RU: {
            category: "Платья",
            name: "Платье «Алисон»",
            description: "Платье из 100% натурального льна, обеспечивающее отличную воздухопроницаемость для тела.\nТкань: 100% лен.",
            colors: ["белый", "розовый", "лимонный"]
        }
    }
},

{
    id: 139,
    price: 2950,
    // isSpecialOffer: true,
    // discountPrice: 2508,
    isTop: false,
    sku: "67238",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Becca Dress/1.avif",
    images: [
        "/Dress/Becca Dress/2.avif",
        "/Dress/Becca Dress/3.avif",
        "/Dress/Becca Dress/4.avif",
        "/Dress/Becca Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Becca Dress",
description: [
  "Perfect silhouette, soft fit along the figure, and an emphasis on the waist — all so you feel confident and elegant any day!",
  "Fabric: 100% cotton. Dress made of natural cotton, soft and comfortable. Pleasant to touch and to wear.",
  "Details:",
  "• Dense cotton that holds its shape",
  "• Delicate pleats and refined buttons on the sides",
  "• Midi length — a classic that never lets you down"
],
            colors: ["beige"]
        },
        FR: {
            category: "Robes",
            name: "Robe Becca",
            description: "Une robe en coton naturel, douce et confortable. Agréable au toucher et pour le corps.\nTissu : 100 % coton.",
            colors: ["beige"]
        },
        UA: {
            category: "Сукні",
            name: "Сукня «Becca»",
description: [
  "Ідеальний силует, м’яка посадка по фігурі та акцент на талії — усе для того, щоб ти почувалася впевненою і вишуканою в будь-який день!",
  "Тканина: 100% бавовна. Сукня з натурального коттону, м'яка і комфортна. Приємна на дотик і для тіла.",
  "Деталі:",
  "• Щільний котон, що тримає форму",
  "• Витончені складки й делікатні ґудзики з боків",
  "• Довжина міді — класика, що ніколи не підведе"
],
            colors: ["бежевий"]
        },
        RU: {
            category: "Платья",
            name: "Платье «Бекка»",
            description: "Платье из натурального хлопка, мягкое и комфортное. Приятное на ощупь и для тела.\nТкань: 100% хлопок.",
            colors: ["бежевый"]
        }
    }
},


{
    id: 137,
    price: 1350,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1148,
    sku: "67236",
    size: "XS S M L XL",
    category: "Shorts",
    image: "/Shorts/Muslin Mini Shorts/1.avif",
    images: [
        "/Shorts/Muslin Mini Shorts/2.avif",
        "/Shorts/Muslin Mini Shorts/3.avif",
        "/Shorts/Muslin Mini Shorts/4.avif",
        "/Shorts/Muslin Mini Shorts/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Shorts",
            name: "Muslin Mini Shorts",
            description: "Mini shorts crafted from long-fiber muslin.\nFabric: 100% cotton muslin, light and soft to the touch.",
            colors: ["milk"]
        },
        FR: {
            category: "Shorts",
            name: "Short Mini en Mousseline",
            description: "Un short mini confectionné en mousseline à longues fibres.\nTissu : mousseline 100 % coton, légère et douce au toucher.",
            colors: ["lait"]
        },
        UA: {
            category: "Шорти",
            name: "Муслінові шорти mini",
            description: "Шорти з довговолокняного мусліну.\nТканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
            colors: ["молоко"]
        },
        RU: {
            category: "Шорты",
            name: "Муслиновые шорты мини",
            description: "Шорты мини из длинноволокнистого муслина.\nТкань: муслин из 100% хлопка, легкая и мягкая на ощупь.",
            colors: ["молоко"]
        }
    }
},

{
    id: 136,
    price: 1650,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1403,
    sku: "67235",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Muslin Mini Shirt/1.avif",
    images: [
        "/Shirts/Muslin Mini Shirt/2.avif",
        "/Shirts/Muslin Mini Shirt/3.avif",
        "/Shirts/Muslin Mini Shirt/4.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Shirts",
            name: "Muslin Mini Shirt",
            description: "A mini shirt crafted from long-fiber muslin.\nFabric: 100% cotton muslin, light and soft to the touch.",
            colors: ["milk"]
        },
        FR: {
            category: "Chemises",
            name: "Chemise Mini en Mousseline",
            description: "Une chemise mini confectionnée en mousseline à longues fibres.\nTissu : mousseline 100 % coton, légère et douce au toucher.",
            colors: ["lait"]
        },
        UA: {
            category: "Сорочки",
            name: "Муслінова сорочка mini",
            description: "Сорочка з довговолокняного мусліну.\nТканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
            colors: ["молоко"]
        },
        RU: {
            category: "Рубашки",
            name: "Муслиновая рубашка мини",
            description: "Рубашка мини из длинноволокнистого муслина.\nТкань: муслин из 100% хлопка, легкая и мягкая на ощупь.",
            colors: ["молоко"]
        }
    }
},

  {
    id: 135,
    price: 3000,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2550,
    sku: "67234",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Muslin Mini Costume/1.avif",
    images: [
        "/Costumes/Muslin Mini Costume/2.avif",
        "/Costumes/Muslin Mini Costume/3.avif",
        "/Costumes/Muslin Mini Costume/4.avif",
        "/Costumes/Muslin Mini Costume/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Costumes",
            name: "Muslin Mini Costume",
            description: "A mini costume crafted from long-fiber muslin.\nFabric: 100% cotton muslin, light and soft to the touch.",
            colors: ["milk"]
        },
        FR: {
            category: "Costumes",
            name: "Costume Mini en Mousseline",
            description: "Un costume mini confectionné en mousseline à longues fibres.\nTissu : mousseline 100 % coton, légère et douce au toucher.",
            colors: ["lait"]
        },
        UA: {
            category: "Костюми",
            name: "Костюм мусліновий mini",
            description: "Костюм з довговолокняного мусліну.\nТканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
            colors: ["молоко"]
        },
        RU: {
            category: "Костюмы",
            name: "Муслиновый костюм мини",
            description: "Костюм мини из длинноволокнистого муслина.\nТкань: муслин из 100% хлопка, легкая и мягкая на ощупь.",
            colors: ["молоко"]
        }
    }
},

  {
    id: 134,
    price: 3500,
    isTop: false,
    isNew: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2975,
    sku: "67233",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Proshva Pants Costume/1.avif",
    images: [
        "/Costumes/Proshva Pants Costume/2.avif",
        "/Costumes/Proshva Pants Costume/3.avif",
        "/Costumes/Proshva Pants Costume/4.avif",
        "/Costumes/Proshva Pants Costume/5.avif",
        "/Costumes/Proshva Pants Costume/6.avif",
        "/Costumes/Proshva Pants Costume/7.avif",
        "/Costumes/Proshva Pants Costume/8.avif",
        "/Costumes/Proshva Pants Costume/9.avif",
        "/Costumes/Proshva Pants Costume/10.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Costumes",
            name: "Proshva Pants Costume",
            description: "A costume crafted from lightweight cotton with delicate lace embroidery.\nFabric: 95% cotton, 5% elastane. Proshva - a light, mostly solid-colored cotton fabric with distinctive lace embroidery.",
            colors: ["black", "white"]
        },
        FR: {
            category: "Costumes",
            name: "Costume avec Pantalon en Proshva",
            description: "Un costume confectionné en coton léger avec une broderie de dentelle délicate.\nTissu : 95 % coton, 5 % élasthanne. Proshva - un tissu en coton léger, généralement uni, avec une broderie de dentelle caractéristique.",
            colors: ["noir", "blanc"]
        },
        UA: {
            category: "Костюми",
            name: "Костюм з прошви зі штанами",
            description: "Костюм з легкої бавовняної тканини з делікатною мереживною вишивкою.\nТканина: 95% бавовна, 5% еластан. Прошва - легка, переважно однотонна, бавовняна тканина з характерною мереживною вишивкою.",
            colors: ["чорний", "білий"]
        },
        RU: {
            category: "Костюмы",
            name: "Костюм с прошвой и брюками",
            description: "Костюм из легкой хлопковой ткани с изящной кружевной вышивкой.\nТкань: 95% хлопок, 5% эластан. Прошва - легкая, преимущественно однотонная хлопковая ткань с характерной кружевной вышивкой.",
            colors: ["черный", "белый"]
        }
    }
},

  {
    id: 133,
    price: 2800,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2380,
    sku: "67232",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Hemp Mini Dress/1.avif",
    images: [
        "/Dress/Hemp Mini Dress/2.avif",
        "/Dress/Hemp Mini Dress/3.avif",
        "/Dress/Hemp Mini Dress/4.avif",
        "/Dress/Hemp Mini Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Hemp Mini Dress",
description: [
  "The hemp muslin dress is about freedom, a touch of nature, and the aesthetics of simplicity. The natural fabric gently embraces the body, allowing the skin to breathe even on the hottest summer days.",
  "Fabric: Double-layered muslin dress, 30% hemp, 70% cotton. One of the most eco-friendly fabrics, grown without pesticides.",
  "Details:",
  "• Delicate gathering on the chest",
  "• Playful handmade buttons",
  "• Comfortable fit that does not restrict movement"
],
            colors: ["hemp"]
        },
        FR: {
            category: "Robes",
            name: "Robe Mini en Chanvre",
            description: "Une robe mini en mousseline double couche, 30 % chanvre, 70 % coton.\nL'un des tissus les plus écologiques, cultivé sans pesticides.",
            colors: ["chanvre"]
        },
        UA: {
            category: "Сукні",
            name: "Конопляна сукня mini",
description: [
  "Сукня з конопляного мусліну — це про свободу, дотик природи та естетику простоти. Натуральна тканина ніжно обіймає тіло, дозволяючи шкірі дихати навіть у найспекотніші літні дні.",
  "Тканина: Сукня з двошарового мусліну, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
  "Деталі:",
  "• Делікатна збірка на грудях",
  "• Кокетливі ґудзики ручної роботи",
  "• Комфортний фасон, що не сковує рухів"
],
            colors: ["конопляний"]
        },
        RU: {
            category: "Платья",
            name: "Конопляное платье мини",
            description: "Платье мини из двухслойного муслина, 30% конопли, 70% хлопка.\nОдна из самых экологичных тканей, выращивается без пестицидов.",
            colors: ["конопляный"]
        }
    }
},

  {
    id: 132,
    price: 3450,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2933,
    sku: "67231",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Elodie Maxi Dress/1.avif",
    images: [
        "/Dress/Elodie Maxi Dress/2.avif",
        "/Dress/Elodie Maxi Dress/3.avif",
        "/Dress/Elodie Maxi Dress/4.avif",
        "/Dress/Elodie Maxi Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Elodie Maxi Dress",
description: [
  "This is a true symbol of femininity and harmony with nature. Made from natural fabric that breathes with you, it delicately emphasizes beauty.",
  "Perfect for walks, picnics, and moments you want to remember.",
  "Fabric: long-staple muslin made from 100% cotton. Light and soft to the touch.",
  "Details:",
  "• Romantic sleeves",
  "• Elegant lace-up on the chest",
  "• Flowing silhouette"
],
            colors: ["milk"]
        },
        FR: {
            category: "Robes",
            name: "Robe Maxi Elodie",
            description: "Une robe maxi confectionnée en mousseline à longues fibres.\nTissu : mousseline 100 % coton, légère et douce au toucher.",
            colors: ["lait"]
        },
        UA: {
            category: "Сукні",
            name: "Сукня «Elodie» maxi",
description: [
  "Це справжній символ жіночності та гармонії з природою. Вона створена з натуральної тканини, яка дихає разом із вами, і підкреслює красу в найделікатніший спосіб.",
  "Для прогулянок, пікніків та моментів, які хочеться запам’ятати.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Романтичні рукава",
  "• Елегантна шнурівка на грудях",
  "• Струмуючий силует"
],
            colors: ["молоко"]
        },
        RU: {
            category: "Платья",
            name: "Платье «Элоди» макси",
            description: "Платье макси из длинноволокнистого муслина.\nТкань: муслин из 100% хлопка, легкая и мягкая на ощупь.",
            colors: ["молоко"]
        }
    }
},

{
    id: 131,
    price: 3900,
    // isSpecialOffer: true,
    // discountPrice: 3315,
    isTop: false,
    sku: "67230",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Coton Dress/1.avif",
    images: [
        "/Dress/Coton Dress/2.avif",
        "/Dress/Coton Dress/3.avif",
        "/Dress/Coton Dress/4.avif",
        "/Dress/Coton Dress/5.avif",
        "/Dress/Coton Dress/6.avif",
        "/Dress/Coton Dress/7.avif",
        "/Dress/Coton Dress/8.avif",
        
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Coton Dress",
description: [
  "Cotton dresses for harmony with nature. When you want calmness, lightness, and femininity.",
  "Fabric: 100% cotton. Dress made of natural cotton, soft and comfortable. Pleasant to the touch and for the body.",
  "Details:",
  "• Perfect maxi length",
  "• Buttons along the entire length",
  "• Delicate ties on the sleeves"
],
            colors: ["eucalyptus", "white"]
        },
        FR: {
            category: "Robes",
            name: "Robe Coton",
            description: "Une robe en coton naturel, douce et confortable. Agréable au toucher et pour le corps.\nTissu : 100 % coton.",
            colors: ["eucalyptus", "blanc"]
        },
        UA: {
            category: "Сукні",
            name: "Сукня «Coton»",
description: [
  "Котон-сукні для гармонії з природою. Коли хочеться спокою, легкості та жіночності.",
  "Тканина: 100% бавовна. Сукня з натурального коттону, м'яка і комфортна. Приємна на дотик і для тіла.",
  "Деталі:",
  "• Ідеальна довжина максі",
  "• Ґудзики по всій довжині",
  "• Ніжні завʼязки на рукавах"
],
            colors: ["евкаліпт", "білий"]
        },
        RU: {
            category: "Платья",
            name: "Платье «Котон»",
            description: "Платье из натурального хлопка, мягкое и комфортное. Приятное на ощупь и для тела.\nТкань: 100% хлопок.",
            colors: ["эвкалипт", "белый"]
        }
    }
},

  {
    id: 130,
    price: 3600,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3060,
    sku: "67229",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Bahroma Dress/1.avif",
    images: [
        "/Dress/Bahroma Dress/2.avif",
        "/Dress/Bahroma Dress/3.avif",
        "/Dress/Bahroma Dress/4.avif",
        "/Dress/Bahroma Dress/5.avif",
        "/Dress/Bahroma Dress/6.avif",
        "/Dress/Bahroma Dress/7.avif",
        "/Dress/Bahroma Dress/8.avif",
        "/Dress/Bahroma Dress/9.avif",
        "/Dress/Bahroma Dress/10.avif",
        "/Dress/Bahroma Dress/11.avif",
        "/Dress/Bahroma Dress/12.avif",
        "/Dress/Bahroma Dress/13.avif",
        "/Dress/Bahroma Dress/14.avif",
        "/Dress/Bahroma Dress/15.avif",

    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Bahroma Dress",
description: [
  "The “Bahroma” dress is breathable, easy to move in, and perfect for dreaming. This sky-blue beauty is made for moments when you want to feel part of nature — free, feminine, and serene.",
  "Fabric: long-staple muslin made of 100% cotton. Light and soft to the touch.",
  "Details:",
  "• Lightweight textured muslin fabric that plays with the wind",
  "• Romantic puff sleeves",
  "• Deep V-neckline with fringe lace",
  "• Smooth silhouette that accentuates the waist"
],
            colors: ["turquoise","White", "Yellow"]
        },
        FR: {
            category: "Robes",
            name: "Robe Bahroma",
            description: "Une robe confectionnée en mousseline à longues fibres.\nTissu : mousseline 100 % coton, légère et douce au toucher.",
            colors: ["turquoise","blanc", "Jaune"]
        },
        UA: {
            category: "Сукні",
            name: "Сукня «Bahroma»",
description: [
  "Сукня “Bahroma”, у якій легко дихати, рухатись, мріяти. Ця небесно-блакитна краса створена для моментів, коли хочеться відчути себе частиною природи — вільною, жіночною, спокійною.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Легка фактурна муслінова тканина, що грає з вітром",
  "• Романтичні рукави з об’ємом",
  "• Глибоке V-декольте з мереживом з бахромою",
  "• Плавний силует, який підкреслює талію"
],
            colors: ["бірюза", "білий", "жовтий"]
        },
        RU: {
            category: "Платья",
            name: "Платье «Бахрома»",
            description: "Платье из длинноволокнистого муслина.\nТкань: муслин из 100% хлопка, легкая и мягкая на ощупь.",
            colors: ["бирюза", "Белый", "Желтый"]
        }
    }
  },

  {
    id: 129,
    price: 2000,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1700,
    sku: "67228",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Collared Cotton Shirt/1.avif",
    images: [
        "/Shirts/Collared Cotton Shirt/2.avif",
        "/Shirts/Collared Cotton Shirt/3.avif",
        "/Shirts/Collared Cotton Shirt/4.avif",
        "/Shirts/Collared Cotton Shirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Shirts",
            name: "Collared Cotton Shirt",
            description: "A shirt with a collar and pleated sleeves.\nFabric: 100% cotton.",
            colors: ["white"]
        },
        FR: {
            category: "Chemises",
            name: "Chemise en Coton à Col",
            description: "Une chemise avec un col et des manches plissées.\nTissu : 100 % coton.",
            colors: ["blanc"]
        },
        UA: {
            category: "Сорочки",
            name: "Сорочка із коміром",
            description: "Сорочка із коміром та плісерованими рукавами.\nТканина: 100% бавовна.",
            colors: ["біла"]
        },
        RU: {
            category: "Рубашки",
            name: "Хлопковая рубашка с воротником",
            description: "Рубашка с воротником и плиссированными рукавами.\nТкань: 100% хлопок.",
            colors: ["белый"]
        }
    }
  },

  {
    id: 128,
    price: 1800,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1530,
    sku: "67227",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Off-Shoulder Cotton Shirt/1.avif",
    images: [
        "/Shirts/Off-Shoulder Cotton Shirt/2.avif",
        "/Shirts/Off-Shoulder Cotton Shirt/3.avif",
        "/Shirts/Off-Shoulder Cotton Shirt/4.avif",
        "/Shirts/Off-Shoulder Cotton Shirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Shirts",
            name: "Off-Shoulder Cotton Shirt",
            description: "A shirt with an asymmetrical off-shoulder design.\nFabric: 100% cotton.",
            colors: ["white"]
        },
        FR: {
            category: "Chemises",
            name: "Chemise en Coton à Épaule Dénudée",
            description: "Une chemise avec un design asymétrique à épaule dénudée.\nTissu : 100 % coton.",
            colors: ["blanc"]
        },
        UA: {
            category: "Сорочки",
            name: "Сорочка із відкритим плечем",
            description: "Сорочка із відкритим асиметричним плечем.\nТканина: 100% бавовна.",
            colors: ["біла"]
        },
        RU: {
            category: "Рубашки",
            name: "Хлопковая рубашка с открытым плечом",
            description: "Рубашка с асимметричным открытым плечом.\nТкань: 100% хлопок.",
            colors: ["белый"]
        }
    }
  },

  {
    id: 127,
    price: 1800,
    // isSpecialOffer: true,
    // discountPrice: 1530,
    isTop: false,
    sku: "67226",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Slit Cotton Shirt/1.avif",
    images: [
        "/Shirts/Slit Cotton Shirt/2.avif",
        "/Shirts/Slit Cotton Shirt/3.avif",
        "/Shirts/Slit Cotton Shirt/4.avif",
        "/Shirts/Slit Cotton Shirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Shirts",
            name: "Slit Cotton Shirt",
            description: "An oversized shirt featuring slits on the sleeves and both sides of the waist. Adjustable with buttons.\nFabric: 100% cotton.",
            colors: ["white"]
        },
        FR: {
            category: "Chemises",
            name: "Chemise en Coton avec Fentes",
            description: "Une chemise oversize avec des fentes sur les manches et des deux côtés de la taille. Ajustable avec des boutons.\nTissu : 100 % coton.",
            colors: ["blanc"]
        },
        UA: {
            category: "Сорочки",
            name: "Сорочка з розрізами",
            description: "Oversize сорочка, яка має розрізи на рукавах та з обох сторін талії. Регулюється ґудзиками.\nТканина: 100% бавовна.",
            colors: ["біла"]
        },
        RU: {
            category: "Рубашки",
            name: "Хлопковая рубашка с разрезами",
            description: "Оверсайз рубашка с разрезами на рукавах и по бокам талии. Регулируется пуговицами.\nТкань: 100% хлопок.",
            colors: ["белый"]
        }
    }
  },

  {
    id: 126,
    price: 2000,
    // isSpecialOffer: true,
    // discountPrice: 1700,
    isTop: false,
    sku: "67225",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Elastic Neck Cotton Shirt/1.avif",
    images: [
        "/Shirts/Elastic Neck Cotton Shirt/2.avif",
        "/Shirts/Elastic Neck Cotton Shirt/3.avif",
        "/Shirts/Elastic Neck Cotton Shirt/4.avif",
        "/Shirts/Elastic Neck Cotton Shirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Shirts",
            name: "Elastic Neck Cotton Shirt",
            description: "A loose-fit shirt with an elastic neckline and lantern sleeves. Features elongated ties at the back.\nFabric: 100% cotton.",
            colors: ["white"]
        },
        FR: {
            category: "Chemises",
            name: "Chemise en Coton à Col Élastique",
            description: "Une chemise ample avec un col élastique et des manches lanternes. Comprend des liens allongés à l'arrière.\nTissu : 100 % coton.",
            colors: ["blanc"]
        },
        UA: {
            category: "Сорочки",
            name: "Сорочка на резинці",
            description: "Сорочка вільного крою із резинкою на горловині та рукавами ліхтариками. На спині є подовжені завʼязки.\nТканина: 100% бавовна.",
            colors: ["біла"]
        },
        RU: {
            category: "Рубашки",
            name: "Хлопковая рубашка с резинкой",
            description: "Рубашка свободного кроя с резинкой на горловине и рукавами-фонариками. На спине имеются удлиненные завязки.\nТкань: 100% хлопок.",
            colors: ["белый"]
        }
    }
  },



  {
    id: 124,
    price: 3500,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2975,
    sku: "67223",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Lemon Dress/1.avif",
    images: [
        "/Dress/Lemon Dress/2.avif",
        "/Dress/Lemon Dress/3.avif",
        "/Dress/Lemon Dress/4.avif",
        "/Dress/Lemon Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Lemon Dress",
description: [
  "Our new muslin dress embodies tenderness, freedom of movement, and the feeling of summer on your skin.",
  "Soft, breathable muslin wraps the body in a perfect silhouette, while airy sleeves add a touch of magic to the look.",
  "A sunlit color perfect for barefoot walks in the field or sunset gatherings.",
  "Fabric: long-staple muslin made of 100% cotton. Light and soft to the touch.",
  "Details:",
  "• Lightweight textured muslin fabric that plays with the wind",
  "• Loose fit",
  "• Ties at the waist and sleeves"
],
            colors: ["yellow"]
        },
        FR: {
            category: "Robes",
            name: "Robe Lemon",
            description: "Une robe confectionnée en mousseline à longues fibres.\nTissu : mousseline 100 % coton, légère et douce au toucher.",
            colors: ["jaune"]
        },
        UA: {
            category: "Сукні",
            name: "Сукня «Lemon»",
description: [
  "Наша нова муслінова сукня — це про ніжність, свободу рухів і відчуття літа на шкірі.",
  "Мʼякий, дихаючий муслін огортає тіло ідеальним силуетом, а повітряні рукави додають образу магії.",
  "Колір сонця, що підійде як для прогулянки босоніж по полю, так і для зустрічі на заході сонця.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Легка фактурна муслінова тканина, що грає з вітром",
  "• Вільний фасон",
  "• Зав’язки на талії та рукавах"
],
            colors: ["жовтий"]
        },
        RU: {
 
           category: "Платья",
            name: "Платье «Лемон»",
            description: "Платье из длинноволокнистого муслина.\nТкань: муслин из 100% хлопка, легкая и мягкая на ощупь.",
            colors: ["желтый"]
        }
    }
  },
  {
    id: 123,
    price: 3900,
    isTop: false,
    isNew: false,
  //  isSpecialOffer: true,
  //   discountPrice: 3315,
    sku: "67222",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Hemp Maxi Dress/1.avif",
    images: [
        "/Dress/Hemp Maxi Dress/2.avif",
        "/Dress/Hemp Maxi Dress/3.avif",
        "/Dress/Hemp Maxi Dress/4.avif",
        "/Dress/Hemp Maxi Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Hemp Maxi Dress",
description: [
  "The hemp muslin dress embodies natural lightness and the strength of feminine energy.",
  "Its natural texture and loose fit make it perfect for walks, travels, or simply to breathe deeply.",
  "It’s about inner strength. About connection with yourself.",
  "About a woman who knows what she wants.",
  "Fabric: Double-layer muslin dress, 30% hemp, 70% cotton. One of the most eco-friendly fabrics, grown without pesticides.",
  "Details:",
  "• Breathable and comfortable in the heat",
  "• Maxi length",
  "• Oversized fit"
],
            colors: ["hemp"]
        },
        FR: {
            category: "Robes",
            name: "Robe Maxi en Chanvre",
            description: "Une robe en mousseline double couche, 30 % chanvre, 70 % coton.\nL'un des tissus les plus écologiques, cultivé sans pesticides.",
            colors: ["chanvre"]
        },
        UA: {
            category: "Сукні",
            name: "Конопляна сукня maxi",
description: [
  "Сукня з конопляного мусліну — це втілення природної легкості та сили жіночої енергії.",
  "Натуральна текстура, вільний крій роблять її ідеальною для прогулянок, подорожей або просто — щоб дихати глибше.",
  "Вона про внутрішню силу. Про зв’язок із собою.",
  "Про жінку, яка знає, чого хоче.",
  "Тканина: Сукня з двошарового мусліну, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
  "Деталі:",
  "• Дихає та дарує комфорт у спеку",
  "• Максі довжина",
  "• Оверсайз фасон"
],
            colors: ["конопляний"]
        },
        RU: {
            category: "Платья",
            name: "Конопляное платье макси",
            description: "Платье из двухслойного муслина, 30% конопли, 70% хлопка.\nОдна из самых экологичных тканей, выращивается без пестицидов.",
            colors: ["конопляный"]
        }
    }
  },

  {
    id: 122,
    price: 2000,
    // isSpecialOffer: true,
    // discountPrice: 1700,
    isTop: false,
    sku: "67221",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Batiste Pleated Shirt/1.avif",
    images: [
        "/Shirts/Batiste Pleated Shirt/2.avif",
        "/Shirts/Batiste Pleated Shirt/3.avif",
        "/Shirts/Batiste Pleated Shirt/4.avif",
        "/Shirts/Batiste Pleated Shirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Shirts",
            name: "Batiste Pleated Shirt",
            description: "A shirt made from natural fabric, adorned with lace and proshva inserts.\nFabric: natural batiste.",
            colors: ["white"]
        },
        FR: {
            category: "Chemises",
            name: "Chemise Plissée en Batiste",
            description: "Une chemise en tissu naturel, ornée de dentelle et d'inserts de proshva.\nTissu : batiste naturel.",
            colors: ["blanc"]
        },
        UA: {
            category: "Сорочки",
            name: "Батистова сорочка зі складками",
            description: "Сорочка із натуральної тканини, яка оздоблена мереживом та вставками із прошви.\nТканина: натуральний батист.",
            colors: ["біла"]
        },
        RU: {
            category: "Рубашки",
            name: "Батистовая рубашка с складками",
            description: "Рубашка из натуральной ткани, украшенная кружевом и вставками из прошвы.\nТкань: натуральный батист.",
            colors: ["белый"]
        }
    }
  },


  {
    id: 120,
    price: 2500,
    // isSpecialOffer: true,
    // discountPrice: 2125,
    isTop: false,
    sku: "67219",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Cotton Dress/1.avif",
    images: [
        "/Dress/Cotton Dress/2.avif",
        "/Dress/Cotton Dress/3.avif",
        "/Dress/Cotton Dress/4.avif",
        "/Dress/Cotton Dress/5.avif",
        "/Dress/Cotton Dress/6.avif",
        "/Dress/Cotton Dress/7.avif",
        "/Dress/Cotton Dress/8.avif",
        "/Dress/Cotton Dress/9.avif",
        "/Dress/Cotton Dress/10.avif",
        "/Dress/Cotton Dress/11.avif",
        "/Dress/Cotton Dress/12.avif",
        "/Dress/Cotton Dress/13.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Cotton Dress",
description: [
  "Our new dress in a delicate lemon shade is a blend of femininity, lightness, and style.",
  "Pair it with cowboy boots or sandals — and be stunning any day!",
  "Fabric: 100% cotton.",
  "Details:",
  "• Puff sleeves with ties",
  "• Perfect length for spring and summer walks",
  "• Oversized fit"
],
            colors: ["lemon", "white", "black"]
        },
        FR: {
            category: "Robes",
            name: "Robe en Coton",
            description: "Une robe maxi en coton naturel. Coupe unique avec des manches lanternes et des détails de liens.\nTissu : 100 % coton.",
            colors: ["citron", "blanc", "noir"]
        },
        UA: {
            category: "Сукні",
            name: "Бавовняна сукня",
description: [
  "Наша нова сукня у ніжному лимонному відтінку — це поєднання жіночності, легкості та стилю.",
  "Поєднуй із ковбойськими чоботами або босоніжками — і будь неперевершеною у будь-який день !",
  "Тканина: 100% бавовна.",
  "Деталі:",
  "• Рукава ліхтарики із завʼязками",
  "• Ідеальна довжина для весняних та літніх прогулянок",
  "• Оверсайз фасон"
],
            colors: ["лимонний", "білий", "чорний"]
        },
        RU: {
            category: "Платья",
            name: "Хлопковое платье",
            description: "Платье макси из натурального хлопка. Необычный крой с рукавами-фонариками и завязками.\nТкань: 100% хлопок.",
            colors: ["лимонный", "белый", "черный"]
        }
    }
  },


  {
    id: 118,
    price: 3700,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3145,
    sku: "67217",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Santorini Dress/1.avif",
    images: [
        "/Dress/Santorini Dress/2.avif",
        "/Dress/Santorini Dress/3.avif",
        "/Dress/Santorini Dress/4.avif",
        "/Dress/Santorini Dress/5.avif",
        "/Dress/Santorini Dress/6.avif",
        "/Dress/Santorini Dress/7.avif",
        "/Dress/Santorini Dress/8.avif",
        "/Dress/Santorini Dress/9.avif",
        "/Dress/Santorini Dress/10.avif",
        "/Dress/Santorini Dress/11.avif",
        "/Dress/Santorini Dress/12.avif",
        "/Dress/Santorini Dress/13.avif",


    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Santorini Dress",
description: [
  "Our new arrival — a luxurious broderie dress that perfectly combines romance and comfort.",
  "It features a feminine silhouette that highlights the figure.",
  "Fabric: 95% cotton, 5% elastane. Broderie is a lightweight, mostly solid cotton fabric with characteristic lace embroidery.",
  "Details:",
  "• Deep V-neckline",
  "• Light ruffles on the shoulders",
  "• Flared maxi skirt"
],
            colors: ["fuchsia", "black", "White"]
        },
        FR: {
            category: "Robes",
            name: "Robe Santorini",
            description: "Une robe confectionnée en coton léger avec une broderie de dentelle délicate.\nTissu : 95 % coton, 5 % élasthanne. Proshva - un tissu en coton léger, généralement uni, avec une broderie de dentelle caractéristique.",
            colors: ["fuchsia", "noir", "blanc"]
        },
        UA: {
            category: "Сукні",
            name: "Сукня «Santorini»",
description: [
  "Наша новинка — розкішна сукня з прошви, яка ідеально поєднує романтичність і комфорт.",
  "Має жіночний силует, який підкреслює фігуру.",
  "Тканина: 95% бавовна, 5% еластан. Прошва - легка, переважно однотонна, бавовняна тканина з характерною мереживною вишивкою.",
  "Деталі:",
  "• Глибокий V-виріз",
  "• Легкі волани на плечах",
  "• Розкльошена спідниця максі"
],
            colors: ["фуксія", "чорна", "білий"]
        },
        RU: {
            category: "Платья",
            name: "Платье «Санторини»",
            description: "Платье из легкой хлопковой ткани с изящной кружевной вышивкой.\nТкань: 95% хлопок, 5% эластан. Прошва - легкая, преимущественно однотонная хлопковая ткань с характерной кружевной вышивкой.",
            colors: ["фуксия", "черный", "белый"]
        }
    }
  },

  {
    id: 117,
    price: 3100,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2635,
    sku: "67216",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Elodie Dress/1.avif",
    images: [
      "/Dress/Elodie Dress/2.avif",
      "/Dress/Elodie Dress/3.avif",
      "/Dress/Elodie Dress/4.avif",
      "/Dress/Elodie Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Elodie Dress",
description: [
  "This powder-pink muslin dress is a perfect choice for a romantic date, city stroll, or a cozy meeting with friends.",
  "Puffy sleeves add charm, while the ties on the neckline bring a touch of flirtiness.",
  "Fabric: Long-staple muslin made of 100% cotton. Light and soft to the touch.",
  "Details:",
  "• Delicate lace and soft buttons",
  "• Light texture",
  "• Puffy sleeves and ties at the chest"
],
        colors: ["powder"]
      },
      FR: {
        category: "Robes",
        name: "Robe Elodie",
        description: "Une robe confectionnée en mousseline à longues fibres.\nTissu : mousseline 100 % coton, légère et douce au toucher.",
        colors: ["poudre"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня 'Elodie'",
description: [
  "Ця пудрово-рожева сукня з мусліну — ідеальний варіант для романтичного побачення, прогулянки містом або затишної зустрічі з подругами.",
  "Пишні рукави додають шарму, а зав’язки на декольте — легкого флірту.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Делікатне мереживо та м’які ґудзики",
  "• Легка текстура",
  "• Пишні рукави та завʼязки на грудях"
],
        colors: ["пудра"]
      },
      RU: {
        category: "Платья",
        name: "Платье 'Элоди'",
        description: "Платье из длинноволокнистого муслина.\nТкань: муслин из 100% хлопка, легкая и мягкая на ощупь.",
        colors: ["пудра"]
      }
    }
  },



  {
    id: 115,
    price: 2950,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2508,
    sku: "67215",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Francesca Dress/1.avif",
    images: [
      "/Dress/Francesca Dress/2.avif",
      "/Dress/Francesca Dress/3.avif",
      "/Dress/Francesca Dress/4.avif",
      // "/Dress/Francesca Dress/5.avif",
      // "/Dress/Francesca Dress/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Francesca Dress",
description: [
  "Bright green, light, and feminine — the perfect choice for walks, dates, or travels.",
  "Fabric: 95% cotton, 5% elastane. Broderie anglaise — a light, mostly solid cotton fabric with distinctive lace embroidery.",
  "Details:",
  "• Elegant midi length",
  "• Fitted silhouette",
  "• Delicate buttons"
],
        colors: ["emerald"]
      },
      FR: {
        category: "Robes",
        name: "Robe Francesca",
        description: "Une robe ornée de broderies délicates.\nTissu : 95 % coton, 5 % élasthanne. Tissu de coton brodé avec des coutures semblables à de la dentelle.",
        colors: ["émeraude"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня «Francesca»",
description: [
  "Яскраво-зелена, легка та жіночна — ідеальний варіант для прогулянок, побачень або подорожей.",
  "Тканина: 95% бавовна, 5% еластан. Прошва — легка, переважно однотонна, бавовняна тканина з характерною мереживною вишивкою.",
  "Деталі:",
  "• Елегантна довжина міді",
  "• Приталений силует",
  "• Витончені ґудзики"
],
        colors: ["смарагдова"]
      },
      RU: {
        category: "Платья",
        name: "Платье «Франческа»",
        description: "Платье с изящной вышивкой.\nТкань: 95% хлопок, 5% эластан. Прошивка - легкая, преимущественно однотонная хлопковая ткань с характерной кружевной вышивкой.",
        colors: ["изумрудная"]
      }
    }
  },

  {
    id: 114,
    price: 3500,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2975,
    sku: "92110",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Embroidered Cotton Costume/1.avif",
    images: [
      "/Costumes/Embroidered Cotton Costume/2.avif",
      "/Costumes/Embroidered Cotton Costume/3.avif",
      "/Costumes/Embroidered Cotton Costume/4.avif",
      "/Costumes/Embroidered Cotton Costume/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Embroidered Cotton Costume",
        description: "A cropped top and maxi skirt with lining, featuring delicate embroidery.\nFabric: 95% cotton, 5% elastane. Embroidered cotton fabric with characteristic lace-like stitching.",
        colors: ["white"]
      },
      FR: {
        category: "Costumes",
        name: "Costume en coton brodé",
        description: "Un haut court et une jupe maxi avec doublure, ornés de broderies délicates.\nTissu : 95 % coton, 5 % élasthanne. Tissu de coton brodé avec des coutures semblables à de la dentelle.",
        colors: ["blanc"]
      },
      UA: {
        category: "Костюми",
        name: "Костюм з прошви",
        description: "Вкорочений топ + спідниця максі із підкладкою.\nТканина: 95% бавовна, 5% еластан. Прошва - легка, переважно однотонна, бавовняна тканина з характерною мереживною вишивкою.",
        colors: ["білий"]
      },
      RU: {
        category: "Костюмы",
        name: "Костюм с вышивкой",
        description: "Укороченный топ + макси-юбка с подкладкой.\nТкань: 95% хлопок, 5% эластан. Прошивка - легкая, преимущественно однотонная хлопковая ткань с характерной кружевной вышивкой.",
        colors: ["белый"]
      }
    }
  },

  {
    id: 113,
    price: 3650,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3103,
    sku: "67214",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Oversize Linen Dress/1.avif",
    images: [
      "/Dress/Oversize Linen Dress/1.avif",
      "/Dress/Oversize Linen Dress/2.avif",
      "/Dress/Oversize Linen Dress/3.avif",
      "/Dress/Oversize Linen Dress/4.avif",
      "/Dress/Oversize Linen Dress/5.avif"

    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Oversize Linen Dress",
description: [
  "Wild, free, and tender at the same time. A dress that makes you feel part of nature.",
  "The perfect formula for summer when you crave freedom, air, and harmony.",
  "Fabric: long-staple muslin made of 100% cotton. Light and soft to the touch.",
  "Details:",
  "• Loose fit",
  "• Delicate lace along the neckline",
  "• Corset back with ties"
],
       colors: ["white"]
      },
      FR: {
        category: "Robes",
        name: "Robe oversize en lin",
        description: "Une robe oversize confectionnée dans un mélange de coton et lin, imitant le lin bouilli, provenant d'une maison de mode française en quantités très limitées.\nTissu : 50 % lin, 50 % coton.",
        colors: ["blanc"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня лляна oversize",
description: [
  "Дика, вільна і ніжна водночас. Сукня, в якій відчуваєш себе частиною природи.",
  "Ідеальна формула для літа, коли хочеться свободи, повітря й гармонії.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Вільний крій",
  "• Делікатне мереживо вздовж вирізу",
  "• Корсетна спинка на завʼязках"
],        colors: ["білий"]
      },
      RU: {
        category: "Платья",
        name: "Платье льняное оверсайз",
        description: "Платье оверсайз из имитации вареного льна с хлопком, изготовленное из ткани французского дома моды в очень ограниченном количестве.\nТкань: 50% лен, 50% хлопок.",
        colors: ["белый"]
      }
    }
  },

  {
    id: 112,
    price: 3650,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3103,
    sku: "67213",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Aria Dress/1.avif",
    images: [
      "/Dress/Aria Dress/2.avif",
      "/Dress/Aria Dress/3.avif",
      "/Dress/Aria Dress/4.avif",
      "/Dress/Aria Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Aria Dress",
description: [
  "Light as a breath and elegant as summer. This dress is a true find for those who value comfort and femininity.",
  "Fabric: long-staple muslin made from 100% cotton. Light and soft to the touch.",
  "Details:",
  "• Exquisite lace on the neckline area",
  "• Loose fit that beautifully emphasizes the figure and allows freedom of movement",
  "• Midi length for maximum lightness and grace"
],
        colors: ["water"]
      },
      FR: {
        category: "Robes",
        name: "Robe Aria",
        description: "Une robe confectionnée en mousseline à longues fibres.\nTissu : mousseline 100 % coton, légère et douce au toucher.",
        colors: ["eau"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня 'Aria'",
description: [
  "Легка як подих та елегантна як літо. Ця сукня — справжня знахідка для тих, хто цінує комфорт і жіночність.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Вишукане мереживо на зоні декольте",
  "• Вільний крій, що красиво підкреслює фігуру і дарує свободу рухів",
  "• Довжина міді — для максимальної легкості і граційності"
],
        colors: ["колір води"]
      },
      RU: {
        category: "Платья",
        name: "Платье 'Ария'",
        description: "Платье из длинноволокнистого муслина.\nТкань: муслин из 100% хлопка, легкая и мягкая на ощупь.",
        colors: ["цвет воды"]
      }
    }
  },

  {
    id: 111,
    price: 3650,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3103,
    sku: "67212",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Marianna Dress/1.avif",
    images: [
      "/Dress/Marianna Dress/2.avif",
      "/Dress/Marianna Dress/3.avif",
      "/Dress/Marianna Dress/4.avif",
      "/Dress/Marianna Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Marianna Dress",
description: [
  "A delicate and unique dress with a straight cut and comfortable midi length. Perfect for the summer season.",
  "Fabric: long-staple muslin made from 100% cotton. Light and soft to the touch.",
  "Details:",
  "• Exquisite lace on the neckline area",
  "• Loose fit",
  "• Wide cropped sleeves"
],
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Marianna",
        description: "Une robe confectionnée en mousseline à longues fibres.\nTissu : mousseline 100 % coton, légère et douce au toucher.",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня 'Marianna'",
description: [
  "Ніжна та неповторна сукня прямого фасону та комфортної міді довжини. Ідеальна для літнього сезону.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Вишукане мереживо на зоні декольте",
  "• Вільний крій",
  "• Широкі вкорочені рукава"
],
        colors: ["молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье 'Марианна'",
        description: "Платье из длинноволокнистого муслина.\nТкань: муслин из 100% хлопка, легкая и мягкая на ощупь.",
        colors: ["молоко"]
      }
    }
  },

  {
    id: 110,
    price: 1650,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1403,
    sku: "78843",
    size: "XS S M L XL",
    category: "Shorts",
    image: "/Shorts/Linen Shorts/1.avif",
    images: [
      "/Shorts/Linen Shorts/2.avif",
      "/Shorts/Linen Shorts/3.avif",
      "/Shorts/Linen Shorts/4.avif",
      "/Shorts/Linen Shorts/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shorts",
        name: "Linen Shorts",
        description: "Shorts made from 100% natural linen, providing unlimited breathability for the body.",
        colors: ["white"]
      },
      FR: {
        category: "Shorts",
        name: "Short en lin",
        description: "Short en lin 100 % naturel, offrant une respirabilité illimitée pour le corps.",
        colors: ["blanc"]
      },
      UA: {
        category: "Шорти",
        name: "Лляні шорти",
        description: "Шорти із 100% натурального льону, він забезпечує безмежний доступ повітря до тіла.",
        colors: ["білий"]
      },
      RU: {
        category: "Шорты",
        name: "Льняные шорты",
        description: "Шорты из 100% натурального льна, обеспечивающего неограниченный доступ воздуха к телу.",
        colors: ["белый"]
      }
    }
  },

  {
    id: 109,
    price: 1550,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1318,
    sku: "78842",
    size: "XS S M L XL",
    category: "Shorts",
    image: "/Shorts/Denim Shorts/1.avif",
    images: [
      "/Shorts/Denim Shorts/2.avif",
      "/Shorts/Denim Shorts/3.avif",
      "/Shorts/Denim Shorts/4.avif",
      "/Shorts/Denim Shorts/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shorts",
        name: "Denim Shorts",
        description: "Bermuda-style denim shorts with a high waist and raw hem.\nFabric: cotton denim.",
        colors: ["white"]
      },
      FR: {
        category: "Shorts",
        name: "Short en jean",
        description: "Short en jean style bermuda avec une taille haute et un ourlet brut.\nTissu : denim coton.",
        colors: ["blanc"]
      },
      UA: {
        category: "Шорти",
        name: "Джинс шорти",
        description: "Джинсові шорти бермуди із високою посадкою та необробленим кроєм.\nТканина: джинс-котон.",
        colors: ["білий"]
      },
      RU: {
        category: "Шорты",
        name: "Джинсовые шорты",
        description: "Джинсовые шорты-бермуды с высокой посадкой и необработанным краем.\nТкань: джинс-хлопок.",
        colors: ["белый"]
      }
    }
  },

  {
    id: 108,
    price: 1800,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1530,
    sku: "78841",
    size: "XS S M L XL",
    category: "Shorts",
    image: "/Shorts/Tailored Shorts/1.avif",
    images: [
      "/Shorts/Tailored Shorts/2.avif",
      "/Shorts/Tailored Shorts/3.avif",
      "/Shorts/Tailored Shorts/4.avif",
      "/Shorts/Tailored Shorts/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shorts",
        name: "Tailored Shorts",
        description: "Bermuda-style shorts with a high waist, made from suit fabric.\nFabric: 75% viscose, 25% polyester.",
        colors: ["caramel"]
      },
      FR: {
        category: "Shorts",
        name: "Short tailleur",
        description: "Short style bermuda à taille haute, en tissu de costume.\nTissu : 75 % viscose, 25 % polyester.",
        colors: ["caramel"]
      },
      UA: {
        category: "Шорти",
        name: "Костюмні шорти",
        description: "Шорти бермуди із костюмної тканини на високій посадці.\nТканина: 75% віскоза, 25% ПЕ.",
        colors: ["карамель"]
      },
      RU: {
        category: "Шорты",
        name: "Костюмные шорты",
        description: "Шорты-бермуды из костюмной ткани с высокой посадкой.\nТкань: 75% вискоза, 25% ПЭ.",
        colors: ["карамель"]
      }
    }
  },
  
  // {
  //   id: 105,
  //   price: 2280,
  //   isTop: false,
  //   // isSpecialOffer: true,
  //   // discountPrice: 1938,
  //   sku: "45531",
  //   size: "XS S M L XL",
  //   category: "Skirts",
  //   image: "/Skirts/Muslin Skirt/1.avif",
  //   images: [
  //     "/Skirts/Muslin Skirt/2.avif",
  //     "/Skirts/Muslin Skirt/3.avif",
  //     "/Skirts/Muslin Skirt/4.avif",
  //     "/Skirts/Muslin Skirt/5.avif",
  //     "/Skirts/Muslin Skirt/6.avif",
  //   ],
  //   sizes: ["XS", "S", "M", "L", "XL"],
  //   translations: {
  //     EN: {
  //       category: "Skirts",
  //       name: "Muslin Skirt",
  //       description: "A lightweight skirt made from natural fabric.\nFabric: long-fiber muslin made of 100% cotton. Light and soft to the touch.",
  //       colors: ["powder"]
  //     },
  //     FR: {
  //       category: "Jupes",
  //       name: "Jupe en mousseline",
  //       description: "Une jupe légère en tissu naturel.\nTissu : mousseline à longues fibres en 100 % coton. Légère et douce au toucher.",
  //       colors: ["poudre"]
  //     },
  //     UA: {
  //       category: "Спідниці",
  //       name: "Муслінова спідниця",
  //       description: "Легка спідниця з натуральної тканини.\nТканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  //       colors: ["пудра"]
  //     },
  //     RU: {
  //       category: "Юбки",
  //       name: "Муслиновая юбка",
  //       description: "Легкая юбка из натуральной ткани.\nТкань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
  //       colors: ["пудра"]
  //     }
  //   }
  // },

  {
    id: 104,
    price: 2850,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2423,
    sku: "67211",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Open Back Sundress/1.avif",
    images: [
      "/Dress/Open Back Sundress/2.avif",
      "/Dress/Open Back Sundress/3.avif",
      "/Dress/Open Back Sundress/4.avif",
      "/Dress/Open Back Sundress/5.avif",
      "/Dress/Open Back Sundress/6.avif",
      "/Dress/Open Back Sundress/7.avif",
      "/Dress/Open Back Sundress/8.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Open Back Sundress",
  description: [
    "Muslin sundress with an open back — your perfect base for the summer season. You'll feel only lightness and comfort in it.",
    "Fabric: long-staple muslin made of 100% cotton. Light and soft to the touch.",
    "Details:",
    "• Loose fit",
    "• Open back with ties on the straps",
    "• Midi length"
  ],
          colors: ["water", "powder"]
      },
      FR: {
        category: "Robes",
        name: "Robe d'été à dos ouvert",
        description: "Une robe d'été avec un design à dos ouvert.\nTissu : mousseline à longues fibres en 100 % coton. Légère et douce au toucher.",
        colors: ["eau", "poudre"]
      },
      UA: {
        category: "Сукні",
        name: "Сарафан із відкритою спинкою",
  description: [
    "Мусліновий сарафан із відкритою спинкою — твоя ідеальна база на літній сезон. У ньому ти будеш відчувати тільки легкість та комфорт.",
    "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
    "Деталі:",
    "• Вільний крій",
    "• Відкрита спинка та завʼязки на бретелях",
    "• Міді довжина"
  ],
        colors: ["колір води", "пудра"]
      },
      RU: {
        category: "Платья",
        name: "Сарафан с открытой спиной",
        description: "Сарафан с дизайном открытой спины.\nТкань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        colors: ["цвет воды", "пудра"]
      }
    }
  },

  {
    id: 103,
    price: 2850,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2423,
    sku: "67210",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Lace Sundress/1.avif",
    images: [
      "/Dress/Lace Sundress/2.avif",
      "/Dress/Lace Sundress/3.avif",
      "/Dress/Lace Sundress/4.avif",
      "/Dress/Lace Sundress/5.avif",
      "/Dress/Lace Sundress/6.avif",
      "/Dress/Lace Sundress/7.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Lace Sundress",
  description: [
    "Muslin sundress adorned with delicate lace on the chest and skirt. A romantic mood is definitely guaranteed.",
    "Fabric: long-staple muslin made of 100% cotton. Light and soft to the touch.",
    "Details:",
    "• Loose fit with wide straps that tie",
    "• Delicate lace",
    "• Midi length"
  ],
          colors: ["milk", "powder"]
      },
      FR: {
        category: "Robes",
        name: "Robe d'été en dentelle",
        description: "Une robe d'été ornée de détails en dentelle.\nTissu : mousseline à longues fibres en 100 % coton. Légère et douce au toucher.",
        colors: ["lait", "poudre"]
      },
      UA: {
        category: "Сукні",
        name: "Сарафан із мереживом",
  description: [
    "Мусліновий сарафан оздоблений ніжним мереживом на грудях та на спідниці. Романтичний настрій вам точно буде забезпечено.",
    "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
    "Деталі:",
    "• Вільний крій та широкі бретелі на завʼязках",
    "• Ніжне мереживо",
    "• Міді довжина"
  ],
          colors: ["молоко", "пудра"]
      },
      RU: {
        category: "Платья",
        name: "Сарафан с кружевом",
        description: "Сарафан с отделкой кружевом.\nТкань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        colors: ["молоко", "пудра"]
      }
    }
  },


  // {
  //   id: 101,
  //   price: 1850,
  //   isTop: false,
  //   sku: "98821",
  //   size: "XS S M L XL",
  //   category: "Skirts",
  //   image: "/Skirts/Short Leather Skirt/1.avif",
  //   images: [
  //     "/Skirts/Short Leather Skirt/2.avif",
  //     "/Skirts/Short Leather Skirt/3.avif",
  //     "/Skirts/Short Leather Skirt/4.avif",
  //     "/Skirts/Short Leather Skirt/5.avif"
  //   ],
  //   sizes: ["XS", "S", "M", "L", "XL"],
  //   translations: {
  //     EN: {
  //       category: "Skirts",
  //       name: "Short Leather Skirt",
  //       description: "Shortened midi-length skirt with a high waist.\nFabric: high-quality eco-leather with suede base (stretchy, doesn’t crack).",
  //       colors: ["caramel"]
  //     },
  //     FR: {
  //       category: "Jupes",
  //       name: "Jupe Courte en Cuir",
  //       description: "Jupe courte longueur midi avec taille haute.\nTissu : simili cuir de haute qualité avec base en daim (extensible, ne se fissure pas).",
  //       colors: ["caramel"]
  //     },
  //     UA: {
  //       category: "Спідниці",
  //       name: "Шкіряна спідниця вкорочена",
  //       description: "Спідниця вкорочена міді довжини на високій посадці.\nТканина: якісна екошкіра на замшевій основі (стрейчева, не тріскається).",
  //       colors: ["карамель"]
  //     },
  //     RU: {
  //       category: "Юбки",
  //       name: "Кожаная юбка укороченная",
  //       description: "Юбка укороченная миди длины на высокой посадке.\nТкань: качественная экокожа на замшевой основе (стрейчевая, не трескающаяся).",
  //       colors: ["карамель"]
  //     }
  //   }
  // },  
 

 

  {
    id: 97,
    price: 2550,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2168,
    sku: "98817",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Denim Skirt/1.avif",
    images: [
      "/Skirts/Denim Skirt/2.avif",
      {
        type: "video",
        src: "/Skirts/Denim Skirt/IMG_8135.mp4",
        poster: "/Skirts/Denim Skirt/1.avif"
      },
      "/Skirts/Denim Skirt/3.avif",
       "/Skirts/Denim Skirt/4.avif",
      "/Skirts/Denim Skirt/5.avif",
      "/Skirts/Denim Skirt/6.avif",
      "/Skirts/Denim Skirt/7.avif",
      "/Skirts/Denim Skirt/8.avif",
      "/Skirts/Denim Skirt/9.avif",
      "/Skirts/Denim Skirt/10.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Denim Skirt",
        description: "Denim skirt with asymmetry and pleating.\nFabric: denim cotton.",
        colors: ["light blue", "navy"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe en Jean",
        description: "Jupe en jean avec asymétrie et plis.\nTissu : jean coton.",
        colors: ["bleu clair", "bleu marine"]
      },
      UA: {
        category: "Спідниці",
        name: "Джинс спідниця",
        description: "Джинсова спідниця з асиметрією та плісеруванням.\nТканина: джинс-котон.",
        colors: ["блакитний", "синій"]
      },
      RU: {
        category: "Юбки",
        name: "Джинс юбка",
        description: "Джинсовая юбка с асимметрией и плиссировкой.\nТкань: джинс-коттон.",
        colors: ["голубой", "синий"]
      }
    }
  },  

  {
    id: 96,
    price: 2100,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1785,
    sku: "98816",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Wrap Skirt/1.avif",
    images: [
      "/Skirts/Wrap Skirt/2.avif",
      "/Skirts/Wrap Skirt/3.avif",
      "/Skirts/Wrap Skirt/4.avif",
      "/Skirts/Wrap Skirt/5.avif",
      "/Skirts/Wrap Skirt/6.avif",
      "/Skirts/Wrap Skirt/7.avif",
      "/Skirts/Wrap Skirt/8.avif",
      "/Skirts/Wrap Skirt/9.avif",
      "/Skirts/Wrap Skirt/10.avif",
      "/Skirts/Wrap Skirt/11.avif",
      "/Skirts/Wrap Skirt/12.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Wrap Skirt",
        description: "Midi wrap skirt with a slit on the leg.\nFabric: suit fabric (75% viscose, 25% polyester).",
        colors: ["caramel", "olive", "denim"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe Portefeuille",
        description: "Jupe portefeuille midi avec une fente sur la jambe.\nTissu : tissu de costume (75% viscose, 25% polyester).",
        colors: ["caramel", "olive", "denim"]
      },
      UA: {
        category: "Спідниці",
        name: "Спідниця на запах",
        description: "Спідниця міді на запах із розрізом на ніжці.\nТканина: костюмна тканина (75% віскоза, 25% поліестер).",
        colors: ["карамель", "оливка", "джинс"]
      },
      RU: {
        category: "Юбки",
        name: "Юбка на запах",
        description: "Юбка миди на запах с разрезом на ножке.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер).",
        colors: ["карамель", "оливка", "джинс"]
      }
    }
  },  

  {
    id: 94,
    price: 2000,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1700,
    sku: "98814",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Marie Leather Skirt/1.avif",
    images: [
      "/Skirts/Marie Leather Skirt/2.avif",
      "/Skirts/Marie Leather Skirt/3.avif",
      "/Skirts/Marie Leather Skirt/4.avif",
      "/Skirts/Marie Leather Skirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Marie Leather Skirt",
        description: "Wrap midi skirt with asymmetry, high waist, and buttons.\nFabric: high-quality eco-leather with suede base (stretchy, doesn’t crack).",
        colors: ["black"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe en Cuir Marie",
        description: "Jupe portefeuille midi avec asymétrie, taille haute et boutons.\nTissu : simili cuir de haute qualité avec base en daim (extensible, ne se fissure pas).",
        colors: ["noir"]
      },
      UA: {
        category: "Спідниці",
        name: "Шкіряна спідниця Marie",
        description: "Спідниця на запах міді довжини з асиметрією на високій посадці з ґудзиками.\nТканина: якісна екошкіра на замшевій основі (стрейчева, не тріскається).",
        colors: ["чорний"]
      },
      RU: {
        category: "Юбки",
        name: "Кожаная юбка Marie",
        description: "Юбка на запах миди длины с асимметрией на высокой посадке с пуговицами.\nТкань: качественная экокожа на замшевой основе (стрейчевая, не трескающаяся).",
        colors: ["чёрный"]
      }
    }
  },  

  {
    id: 93,
    price: 2150,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1828,
    sku: "98813",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Silk Lace Blouse/1.avif",
    images: [
      "/Shirts/Silk Lace Blouse/2.avif",
      "/Shirts/Silk Lace Blouse/3.avif",
      "/Shirts/Silk Lace Blouse/14.avif",
      "/Shirts/Silk Lace Blouse/15.avif",
      "/Shirts/Silk Lace Blouse/4.avif",
      "/Shirts/Silk Lace Blouse/5.avif",
      "/Shirts/Silk Lace Blouse/6.avif",
      "/Shirts/Silk Lace Blouse/7.avif",
      "/Shirts/Silk Lace Blouse/8.avif",
      "/Shirts/Silk Lace Blouse/9.avif",
      "/Shirts/Silk Lace Blouse/10.avif",
      "/Shirts/Silk Lace Blouse/11.avif",
      "/Shirts/Silk Lace Blouse/12.avif",
      "/Shirts/Silk Lace Blouse/13.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Silk Blouse with Lace",
        description: "Delicate blouse with ruffles, lace, and a decorative button.\nFabric: Armani silk.",
        colors: ["white", "black", "beige"]
      },
      FR: {
        category: "Chemises",
        name: "Blouse en Soie avec Dentelle",
        description: "Blouse délicate avec volants, dentelle et bouton décoratif.\nTissu : soie Armani.",
        colors: ["blanc", "noir", "beige"]
      },
      UA: {
        category: "Сорочки",
        name: "Шовкова блуза з мереживом",
        description: "Ніжна блуза із воланами, мереживом та декоративним ґудзиком.\nТканина: шовк «Армані».",
        colors: ["білий", "чорний", "бежевий"]
      },
      RU: {
        category: "Рубашки",
        name: "Шелковая блуза с кружевом",
        description: "Нежная блуза с воланами, кружевом и декоративной пуговицей.\nТкань: шёлк «Армани».",
        colors: ["белый", "чёрный", "бежевый"]
      }
    }
  },  

  {
    id: 92,
    price: 2100,
    isTop: false,
  //  isSpecialOffer: true,
  //   discountPrice: 1785,
    sku: "98812",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Classic Pants/1.avif",
    images: [
      "/Pants/Classic Pants/2.avif",
      "/Pants/Classic Pants/3.avif",
      "/Pants/Classic Pants/4.avif",
      "/Pants/Classic Pants/5.avif",
      "/Pants/Classic Pants/6.avif",
      "/Pants/Classic Pants/7.avif",
      "/Pants/Classic Pants/8.avif",
      "/Pants/Classic Pants/9.avif",
      "/Pants/Classic Pants/10.avif",
      "/Pants/Classic Pants/11.avif",
      "/Pants/Classic Pants/12.avif",
      "/Pants/Classic Pants/13.avif",
      "/Pants/Classic Pants/14.avif",
      "/Pants/Classic Pants/15.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Classic Pants",
        description: "Classic cut pants with a high waist and two pockets.\nFabric: suit fabric (75% viscose, 25% polyester).",
        colors: ["white", "beige", "black"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Classique",
        description: "Pantalon coupe classique avec taille haute et deux poches.\nTissu : tissu de costume (75% viscose, 25% polyester).",
        colors: ["blanc", "beige", "noir"]
      },
      UA: {
        category: "Брюки",
        name: "Класичні брюки",
        description: "Класичний фасон брюк із високою посадкою та двома кишенями.\nТканина: костюмна тканина (75% віскоза, 25% поліестер).",
        colors: ["білий", "бежевий", "чорний"]
      },
      RU: {
        category: "Брюки",
        name: "Классические брюки",
        description: "Классический фасон брюк с высокой посадкой и двумя карманами.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер).",
        colors: ["белый", "бежевый", "чёрный"]
      }
    }
  },  

  {
    id: 91,
    price: 2100,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1785,
    sku: "98811",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Wrap Palazzo Pants/1.avif",
    images: [
      "/Pants/Wrap Palazzo Pants/2.avif",
      "/Pants/Wrap Palazzo Pants/3.avif",
      "/Pants/Wrap Palazzo Pants/4.avif",
      "/Pants/Wrap Palazzo Pants/5.avif",
      "/Pants/Wrap Palazzo Pants/6.avif",
      "/Pants/Wrap Palazzo Pants/7.avif",
      "/Pants/Wrap Palazzo Pants/8.avif",
      "/Pants/Wrap Palazzo Pants/9.avif",
      "/Pants/Wrap Palazzo Pants/10.avif",
      "/Pants/Wrap Palazzo Pants/11.avif",
      "/Pants/Wrap Palazzo Pants/12.avif",
      "/Pants/Wrap Palazzo Pants/13.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Wrap Palazzo Pants",
        description: "Wrap-style high-waisted palazzo pants with two pockets.\nFabric: suit fabric (75% viscose, 25% polyester).",
        colors: ["denim", "caramel", "olive"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Palazzo Croisé",
        description: "Pantalon palazzo taille haute croisé avec deux poches.\nTissu : tissu de costume (75% viscose, 25% polyester).",
        colors: ["denim", "caramel", "olive"]
      },
      UA: {
        category: "Брюки",
        name: "Брюки на запах",
        description: "Брюки палаццо на запах із високою посадкою та двома кишенями.\nТканина: костюмна тканина (75% віскоза, 25% поліестер).",
        colors: ["джинс", "карамель", "оливка"]
      },
      RU: {
        category: "Брюки",
        name: "Брюки на запах",
        description: "Брюки палаццо на запах с высокой посадкой и двумя карманами.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер).",
        colors: ["джинс", "карамель", "оливка"]
      }
    }
  },  

  {
    id: 90,
    price: 2100,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1785,
    sku: "98810",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Palazzo Pants/1.avif",
    images: [
      "/Pants/Palazzo Pants/2.avif",
      "/Pants/Palazzo Pants/3.avif",
      "/Pants/Palazzo Pants/4.avif",
      "/Pants/Palazzo Pants/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Palazzo Pants",
        description: "High-waisted palazzo pants with two pockets.\nFabric: suit fabric (75% viscose, 25% polyester).",
        colors: ["black"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Palazzo",
        description: "Pantalon palazzo taille haute avec deux poches.\nTissu : tissu de costume (75% viscose, 25% polyester).",
        colors: ["noir"]
      },
      UA: {
        category: "Брюки",
        name: "Брюки палаццо",
        description: "Брюки палаццо із високою посадкою та двома кишенями.\nТканина: костюмна тканина (75% віскоза, 25% поліестер).",
        colors: ["чорний"]
      },
      RU: {
        category: "Брюки",
        name: "Брюки палаццо",
        description: "Брюки палаццо с высокой посадкой и двумя карманами.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер).",
        colors: ["чёрный"]
      }
    }
  },  

  {
    id: 89,
    price: 1375,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1169,
    sku: "98809",
    size: "XS S M L XL",
    category: "Sweaters",
    image: "/Sweaters/Knit Vest/6.avif",
    images: [
      "/Sweaters/Knit Vest/7.avif",
      "/Sweaters/Knit Vest/8.avif",
      "/Sweaters/Knit Vest/9.avif",
      "/Sweaters/Knit Vest/10.avif",
      "/Sweaters/Knit Vest/11.avif",
      "/Sweaters/Knit Vest/12.avif",
      "/Sweaters/Knit Vest/13.avif",
      "/Sweaters/Knit Vest/14.avif",
      "/Sweaters/Knit Vest/15.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Sweaters",
        name: "Knit Vest",
        description: "Oversized wool vest with a V-neck.\nFabric: knitwear (60% wool, 20% acrylic, 10% viscose, 10% elastane).",
        colors: [ "white", "black"]
      },
      FR: {
        category: "Pulls",
        name: "Gilet Tricoté",
        description: "Gilet en laine oversize avec col en V.\nTissu : tricot (60% laine, 20% acrylique, 10% viscose, 10% élasthanne).",
        colors: ["blanc", "noir"]
      },
      UA: {
        category: "Светри",
        name: "Трикотажний жилет",
        description: "Oversize вовняний жилет із V-вирізом.\nТканина: трикотаж (60% вовна, 20% акрил, 10% віскоза, 10% еластан).",
        colors: ["білий", "чорний"]
      },
      RU: {
        category: "Свитера",
        name: "Трикотажный жилет",
        description: "Oversize шерстяной жилет с V-вырезом.\nТкань: трикотаж (60% шерсть, 20% акрил, 10% вискоза, 10% эластан).",
        colors: ["белый", "чёрный"]
      }
    }
  },  

  {
    id: 88,
    price: 1500,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1275,
    sku: "98808",
    size: "XS S M L XL",
    category: "Sweaters",
    image: "/Sweaters/Off-Shoulder Top/1.avif",
    images: [
      "/Sweaters/Off-Shoulder Top/2.avif",
      "/Sweaters/Off-Shoulder Top/3.avif",
      "/Sweaters/Off-Shoulder Top/4.avif",
      "/Sweaters/Off-Shoulder Top/5.avif",
      "/Sweaters/Off-Shoulder Top/6.avif",
      "/Sweaters/Off-Shoulder Top/7.avif",
      "/Sweaters/Off-Shoulder Top/8.avif",
      "/Sweaters/Off-Shoulder Top/9.avif",
      "/Sweaters/Off-Shoulder Top/10.avif",
      "/Sweaters/Off-Shoulder Top/11.avif",
      "/Sweaters/Off-Shoulder Top/12.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Sweaters",
        name: "Off-Shoulder Top",
        description: "Off-shoulder top with sleeve slits.\nFabric: 50% cashmere, 28% polyester, 28% nylon.",
        colors: ["black", "gray", "milk"]
      },
      FR: {
        category: "Pulls",
        name: "Top Épaules Dénudées",
        description: "Top à épaules dénudées avec fentes sur les manches.\nTissu : 50% cachemire, 28% polyester, 28% nylon.",
        colors: ["noir", "gris", "lait"]
      },
      UA: {
        category: "Светри",
        name: "Топ із відкритими плечима",
        description: "Топ із відкритими плечима та розрізами на рукавах.\nТканина: 50% кашемір, 28% поліестер, 28% нейлон.",
        colors: ["чорний", "сірий", "молоко"]
      },
      RU: {
        category: "Свитера",
        name: "Топ с открытыми плечами",
        description: "Топ с открытыми плечами и разрезами на рукавах.\nТкань: 50% кашемир, 28% полиэстер, 28% нейлон.",
        colors: ["чёрный", "серый", "молоко"]
      }
    }
  },  
  {
    id: 87,
    price: 1800,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1530,
    sku: "98807",
    size: "XS S M L XL",
    category: "Sweaters",
    image: "/Sweaters/Off-Shoulder Sweater/1.avif",
    images: [
      "/Sweaters/Off-Shoulder Sweater/2.avif",
      "/Sweaters/Off-Shoulder Sweater/3.avif",
      "/Sweaters/Off-Shoulder Sweater/4.avif",
     "/Sweaters/Off-Shoulder Sweater/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Sweaters",
        name: "Off-Shoulder Sweater",
        description: "Off-shoulder sweater with asymmetry.\nFabric: 50% cashmere, 28% polyester, 28% nylon.",
        colors: ["milk"]
      },
      FR: {
        category: "Pulls",
        name: "Pull Épaules Dénudées",
        description: "Pull à épaules dénudées avec asymétrie.\nTissu : 50% cachemire, 28% polyester, 28% nylon.",
        colors: ["lait"]
      },
      UA: {
        category: "Светри",
        name: "Джемпер із відкритими плечима",
        description: "Джемпер із відкритими плечима та асиметрією.\nТканина: 50% кашемір, 28% поліестер, 28% нейлон.",
        colors: ["молоко"]
      },
      RU: {
        category: "Свитера",
        name: "Джемпер с открытыми плечами",
        description: "Джемпер с открытыми плечами и асимметрией.\nТкань: 50% кашемир, 28% полиэстер, 28% нейлон.",
        colors: ["молоко"]
      }
    }
  },  
  {
    id: 86,
    price: 1825,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1551,
    sku: "98806",
    size: "XS S M L XL",
    category: "Tops",
    image: "/Top/Piped Top/1.avif",
    images: [
      "/Top/Piped Top/2.avif",
      "/Top/Piped Top/3.avif",
       "/Tops/Piped Top/4.avif",
       "/Tops/Piped Top/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Tops",
        name: "Piped Top",
        description: "Long-staple 100% cotton muslin. A lightweight and soft-touch fabric.",
        colors: ["milk"]
      },
      FR: {
        category: "Tops",
        name: "Top à Passepoil",
        description: "Mousseline de coton 100% à longues fibres. Un tissu léger et doux au toucher.",
        colors: ["lait"]
      },
      UA: {
        category: "Топи",
        name: "Топ з кантом",
        description: "Довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["молоко"]
      },
      RU: {
        category: "Топы",
        name: "Топ с кантом",
        description: "Долговолокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь ткань.",
        colors: ["молоко"]
      }
    }
  },  


  
  

  

  {
    id: 81,
    price: 2200,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1870,
    sku: "98801",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Hemp Banana Pants/1.avif",
    images: [
      "/Pants/Hemp Banana Pants/2.avif",
      "/Pants/Hemp Banana Pants/3.avif",
      // "/Pants/Hemp Banana Pants/4.avif",
      // "/Pants/Hemp Banana Pants/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Hemp Banana Pants",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Banane en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Брюки",
        name: "Конопляні брюки банани",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Брюки",
        name: "Конопляные брюки бананы",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  

  {
    id: 80,
    price: 2200,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1870,
    sku: "98800",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Hemp Palazzo Pants/1.avif",
    images: [
      "/Pants/Hemp Palazzo Pants/2.avif",
      "/Pants/Hemp Palazzo Pants/3.avif",
      // "/Pants/Hemp Palazzo Pants/4.avif",
      // "/Pants/Hemp Palazzo Pants/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Hemp Palazzo Pants",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Palazzo en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Брюки",
        name: "Конопляні брюки палаццо",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Брюки",
        name: "Конопляные брюки палаццо",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  
  {
    id: 79,
    price: 2430,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2066,
    sku: "98799",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Hemp Shirt/1.avif",
    images: [
      "/Shirts/Hemp Shirt/2.avif",
      "/Shirts/Hemp Shirt/3.avif",
      // "/Shirts/Hemp Shirt/4.avif",
      // "/Shirts/Hemp Shirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Hemp Shirt",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Сорочки",
        name: "Конопляна сорочка",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Рубашки",
        name: "Конопляная рубашка",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  
  {
    id: 78,
    price: 1580,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1343,
    sku: "98798",
    size: "XS S M L XL",
    category: "Tops",
    image: "/Top/Hemp Top/1.avif",
    images: [
      "/Top/Hemp Top/2.avif",
      "/Top/Hemp Top/3.avif",
      // "/Tops/Hemp Top/4.avif",
      // "/Tops/Hemp Top/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Tops",
        name: "Hemp Top",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Tops",
        name: "Top en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Топи",
        name: "Конопляний топ",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Топы",
        name: "Конопляный топ",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  


  {
    id: 77,
    price: 3780,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 3213,
    sku: "98797",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Hemp Set/1.avif",
    images: [
      "/Costumes/Hemp Set/2.avif",
      "/Costumes/Hemp Set/3.avif",
      "/Costumes/Hemp Set/4.avif",
      "/Costumes/Hemp Set/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Hemp Set",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Costumes",
        name: "Ensemble en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Костюми",
        name: "Конопляний комплект",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Костюмы",
        name: "Конопляный комплект",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  
  {
    id: 76,
    price: 4630,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 3936,
    sku: "98796",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Hemp Costume/1.avif",
    images: [
      "/Costumes/Hemp Costume/2.avif",
      "/Costumes/Hemp Costume/3.avif",
      "/Costumes/Hemp Costume/4.avif",
      "/Costumes/Hemp Costume/5.avif",
      "/Costumes/Hemp Costume/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Hemp Costume",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Costumes",
        name: "Costume en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Костюми",
        name: "Конопляний костюм",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Костюмы",
        name: "Конопляный костюм",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  

  {
    id: 75,
    price: 3170,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2695,
    sku: "98795",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Hemp Jumpsuit/1.avif",
    images: [
      "/Costumes/Hemp Jumpsuit/2.avif",
      "/Costumes/Hemp Jumpsuit/3.avif",
      "/Costumes/Hemp Jumpsuit/4.avif",
      "/Costumes/Hemp Jumpsuit/5.avif",
      "/Costumes/Hemp Jumpsuit/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Hemp Jumpsuit",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Costumes",
        name: "Combinaison en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Костюми",
        name: "Конопляний комбінезон",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Костюмы",
        name: "Конопляный комбинезон",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
},

  {
    id: 74,
    price: 1900,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1615,
    sku: "98794",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Muslin Palazzo Pants/1.avif",
    images: [
      "/Pants/Muslin Palazzo Pants/2.avif",
      "/Pants/Muslin Palazzo Pants/3.avif",
      "/Pants/Muslin Palazzo Pants/4.avif",
      "/Pants/Muslin Palazzo Pants/5.avif",
      "/Pants/Muslin Palazzo Pants/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Muslin Palazzo Pants",
        description: "Long-fiber muslin made from 100% cotton. Light and soft to the touch.",
        colors: ["black", "milk"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Palazzo en Mousseline",
        description: "Mousseline à longues fibres 100% coton. Léger et doux au toucher.",
        colors: ["noir", "lait"]
      },
      UA: {
        category: "Брюки",
        name: "Муслінові брюки палаццо",
        description: "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["чорний", "молоко"]
      },
      RU: {
        category: "Брюки",
        name: "Муслиновые брюки палаццо",
        description: "Ткань: длинноволокнистый муслин из 100% хлопка. Легкий и мягкий на ощупь.",
        colors: ["черный", "молоко"]
      }
    }
},

  

  {
    id: 73,
    price: 2024,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1720,
    sku: "98793",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Muslin Cardigan/1.avif",
    images: [
      "/Shirts/Muslin Cardigan/2.avif",
      "/Shirts/Muslin Cardigan/3.avif",
      "/Shirts/Muslin Cardigan/4.avif",
      "/Shirts/Muslin Cardigan/5.avif",
      "/Shirts/Muslin Cardigan/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Muslin Cardigan",
        description: "Long-fiber muslin made from 100% cotton. Light and soft to the touch.",
        colors: ["black", "milk"]
      },
      FR: {
        category: "Chemises",
        name: "Cardigan en Mousseline",
        description: "Mousseline à longues fibres 100% coton. Léger et doux au toucher.",
        colors: ["noir", "lait"]
      },
      UA: {
        category: "Сорочки",
        name: "Мусліновий кардиган",
        description: "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["чорний", "молоко"]
      },
      RU: {
        category: "Рубашки",
        name: "Муслиновый кардиган",
        description: "Ткань: длинноволокнистый муслин из 100% хлопка. Легкий и мягкий на ощупь.",
        colors: ["черный", "молоко"]
      }
    }
},


  {
    id: 72,
    price: 1380,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1173,
    sku: "98792",
    size: "XS S M L XL",
    category: "Tops",
    image: "/Top/Muslin Top/1.avif",
    images: [
      "/Top/Muslin Top/2.avif",
      "/Top/Muslin Top/3.avif",
      "/Top/Muslin Top/4.avif",
      "/Top/Muslin Top/5.avif",
      "/Top/Muslin Top/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Tops",
        name: "Muslin Top",
        description: "Long-fiber muslin made from 100% cotton. Light and soft to the touch.",
        colors: ["milk", "black"]
      },
      FR: {
        category: "Tops",
        name: "Top en Mousseline",
        description: "Mousseline à longues fibres 100% coton. Léger et doux au toucher.",
        colors: ["lait", "noir"]
      },
      UA: {
        category: "Топи",
        name: "Мусліновий топ",
        description: "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["молоко", "чорний"]
      },
      RU: {
        category: "Топы",
        name: "Муслиновый топ",
        description: "Ткань: длинноволокнистый муслин из 100% хлопка. Легкий и мягкий на ощупь.",
        colors: ["молоко", "черный"]
      }
    }
},

  {
    id: 71,
    price: 5300,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 4505,
    sku: "98791",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Muslin 3-Piece/1.avif",
    images: [
      "/Costumes/Muslin 3-Piece/2.avif",
      "/Costumes/Muslin 3-Piece/3.avif",
      "/Costumes/Muslin 3-Piece/4.avif",
      "/Costumes/Muslin 3-Piece/5.avif",
      "/Costumes/Muslin 3-Piece/6.avif",
      "/Costumes/Muslin 3-Piece/7.avif",
      "/Costumes/Muslin 3-Piece/8.avif",
      "/Costumes/Muslin 3-Piece/9.avif",
      "/Costumes/Muslin 3-Piece/10.avif",
      "/Costumes/Muslin 3-Piece/11.avif",
      "/Costumes/Muslin 3-Piece/12.avif",
      "/Costumes/Muslin 3-Piece/13.avif",
      "/Costumes/Muslin 3-Piece/14.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Muslin 3-Piece Costume",
        description: "Long-fiber muslin made from 100% cotton. Light and soft to the touch.",
        colors: ["milk", "black", "black-white"]
      },
      FR: {
        category: "Costumes",
        name: "Costume 3 pièces en Mousseline",
        description: "Mousseline à longues fibres 100% coton. Léger et doux au toucher.",
        colors: ["lait", "noir", "noir-blanc"]
      },
      UA: {
        category: "Костюми",
        name: "Мусліновий костюм 3-ка",
        description: "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["молоко", "чорний", "чорно-білий"]
      },
      RU: {
        category: "Костюмы",
        name: "Муслиновый костюм 3-ка",
        description: "Ткань: длинноволокнистый муслин из 100% хлопка. Легкий и мягкий на ощупь.",
        colors: ["молоко", "черный", "черно-белый"]
      }
    }
},

//   {
//     id: 70,
//     price: 3920,
//     isTop: false,
//     sku: "98790",
//     size: "XS S M L XL",
//     category: "Dresses",
//     image: "/Dress/Maribella Dress/1.avif",
//     images: [
//       "/Dress/Maribella Dress/2.avif",
//       {
//         type: "video",
//         src: "/Dress/Maribella Dress/IMG_2330.mp4",
//         poster: "/Dress/Maribella Dress/1.avif"
//       },
//       "/Dress/Maribella Dress/3.avif",
//       "/Dress/Maribella Dress/4.avif",
//       "/Dress/Maribella Dress/5.avif",
//       "/Dress/Maribella Dress/6.avif",
//     ],
//     sizes: ["XS", "S", "M", "L", "XL"],
//     translations: {
//       EN: {
//         category: "Dresses",
//         name: "Maribella Dress",
//         description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
//         colors: ["blue"]
//       },
//       FR: {
//         category: "Robes",
//         name: "Robe Maribella en Lin",
//         description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
//         colors: ["bleu"]
//       },
//       UA: {
//         category: "Сукні",
//         name: "Сукня \"Maribella\"",
//         description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
//         colors: ["синій"]
//       },
//       RU: {
//         category: "Платья",
//         name: "Платье \"Maribella\"",
//         description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
//         colors: ["синий"]
//       }
//     }
// },


//   {
//     id: 69,
//     price: 2270,
//     isTop: false,
//     sku: "98789",
//     size: "XS S M L XL",
//     category: "Dresses",
//     image: "/Dress/Linen Sundress/1.avif",
//     images: [
//       "/Dress/Linen Sundress/2.avif",
//       "/Dress/Linen Sundress/3.avif",
//       "/Dress/Linen Sundress/4.avif",
//       "/Dress/Linen Sundress/5.avif"
//     ],
//     sizes: ["XS", "S", "M", "L", "XL"],
//     translations: {
//       EN: {
//         category: "Dresses",
//         name: "Linen Sundress",
//         description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
//         colors: ["blue"]
//       },
//       FR: {
//         category: "Robes",
//         name: "Robe Sundress en Lin",
//         description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
//         colors: ["bleu"]
//       },
//       UA: {
//         category: "Сукні",
//         name: "Сарафан лляний",
//         description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
//         colors: ["синій"]
//       },
//       RU: {
//         category: "Платья",
//         name: "Льняной сарафан",
//         description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
//         colors: ["синий"]
//       }
//     }
// },


//   {
//     id: 68,
//     price: 3920,
//     isTop: true,
//     sku: "98788",
//     size: "XS S M L XL",
//     category: "Dresses",
//     image: "/Dress/Linen Maxi Dress/1.avif",
//     images: [
//       "/Dress/Linen Maxi Dress/2.avif",
//       "/Dress/Linen Maxi Dress/3.avif",
//       "/Dress/Linen Maxi Dress/4.avif",
//       "/Dress/Linen Maxi Dress/5.avif",
//       "/Dress/Linen Maxi Dress/6.avif"
//     ],
//     sizes: ["XS", "S", "M", "L", "XL"],
//     translations: {
//       EN: {
//         category: "Dresses",
//         name: "Linen Maxi Dress",
//         description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
//         colors: ["blue"]
//       },
//       FR: {
//         category: "Robes",
//         name: "Robe Maxi en Lin",
//         description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
//         colors: ["bleu"]
//       },
//       UA: {
//         category: "Сукні",
//         name: "Сукня лляна максі",
//         description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
//         colors: ["синій"]
//       },
//       RU: {
//         category: "Платья",
//         name: "Льняное макси платье",
//         description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
//         colors: ["синий"]
//       }
//     }
// },









//   {
//     id: 64,
//     price: 3160,
//     isTop: false,
//     sku: "98784",
//     size: "XS S M L XL",
//     category: "Dresses",
//     image: "/Dress/Linen Mini Dress/1.avif",
//     images: [
//       "/Dress/Linen Mini Dress/2.avif",
//       "/Dress/Linen Mini Dress/3.avif",
//       "/Dress/Linen Mini Dress/4.avif",
//       "/Dress/Linen Mini Dress/5.avif",
//       "/Dress/Linen Mini Dress/6.avif",
//     ],
//     sizes: ["XS", "S", "M", "L", "XL"],
//     translations: {
//       EN: {
//         category: "Dresses",
//         name: "Linen Mini Dress",
//         description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
//         color: "blue",
//         colors: ["blue"]
//       },
//       FR: {
//         category: "Robes",
//         name: "Robe Mini en Lin",
//         description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
//         color: "bleu",
//         colors: ["bleu"]
//       },
//       UA: {
//         category: "Сукні",
//         name: "Сукня лляна міні",
//         description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
//         color: "синій",
//         colors: ["синій"]
//       },
//       RU: {
//         category: "Платья",
//         name: "Льняное мини-платье",
//         description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
//         color: "синий",
//         colors: ["синий"]
//       }
//     }
// },

  {
    id: 63,
    price: 2024,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1720,
    sku: "98784",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Muslin Shirt/1.avif",
    images: [
      "/Shirts/Muslin Shirt/2.avif",
      "/Shirts/Muslin Shirt/3.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Muslin Shirt",
        description: "Muslin shirt with adjustable drawstring sleeves. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise en Mousseline",
        description: "Chemise en mousseline avec manches à cordon de serrage réglable. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Сорочки",
        name: "Муслінова сорочка",
        description: "Муслінова сорочка із шнурком на рукавах, який регулюється. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко"]
      },
      RU: {
        category: "Рубашки",
        name: "Муслиновая рубашка",
        description: "Муслиновая рубашка с регулируемым шнурком на рукавах. Ткань: длинноволокнистый муслин, 100% хлопок. Легкий и мягкий на ощупь.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
},


  {
    id: 62,
    price: 3924,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3335,
    sku: "98783",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Muslin Costume/1.avif",
    images: [
      "/Costumes/Muslin Costume/2.avif",
     "/Costumes/Muslin Costume/3.avif",
     "/Costumes/Muslin Costume/4.avif",
     "/Costumes/Muslin Costume/5.avif",
     "/Costumes/Muslin Costume/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Muslin Costume",
        description: "Muslin suit: shirt with adjustable drawstring sleeves + elastic waist pants. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Costumes",
        name: "Costume en Mousseline",
        description: "Costume en mousseline : chemise avec manches à cordon de serrage réglable + pantalon à taille élastique. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Костюми",
        name: "Мусліновий костюм",
        description: "Мусліновий костюм: сорочка із шнурком на рукавах, який регулюється + штани на резинці. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко"]
      },
      RU: {
        category: "Костюмы",
        name: "Муслиновый костюм",
        description: "Муслиновый костюм: рубашка с регулируемым шнурком на рукавах + брюки на резинке. Ткань: длинноволокнистый муслин, 100% хлопок. Легкий и мягкий на ощупь.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
},




  {
    id: 59,
    price: 3565,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3030,
    sku: "98780",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Nature Dress/7.avif",
    images: [
      "/Dress/Nature Dress/7.avif",
      "/Dress/Nature Dress/8.avif",
      {
        type: "video",
        src: "/Dress/Nature Dress/IMG_6723.mp4",
        poster: "/Dress/Nature Dress/7.avif"
      },

 
      "/Dress/Nature Dress/9.avif",
      "/Dress/Nature Dress/10.avif",
      "/Dress/Nature Dress/11.avif",
      "/Dress/Nature Dress/12.avif",
     
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Nature Dress",
description: [
  "So light, it feels like you're floating on a cloud. “Nature” — tenderness in every movement. Perfect for creating an eco-inspired or romantic look.",
  "Fabric: long-fiber muslin made of 100% cotton. Light and soft to the touch.",
  "Details:",
  "• Decorative buttons at the neckline",
  "• Comfortable loose fit",
  "• 2 pockets"
],
        color: "burgundy",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Nature",
        description: "Robe maxi oversize avec manches longues et encolure ronde. Boutons décoratifs et deux poches. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "bordeaux",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Nature\"",
description: [
  "Така легка, що здається — ти в хмарі. “Nature” — ніжність у кожному русі. Чудово підходить для створення екологічного або романтичного образу.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та м’яка тканина на дотик.",
  "Деталі:",
  "• Декоративні ґудзики на декольте",
  "• Комфортний вільний крій",
  "• 2 кишені"
],
        color: "бордо",
        colors: ["молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Nature\"",
        description: "Оверсайз макси-платье с длинными рукавами и круглым вырезом. Декоративные пуговицы и два кармана. Ткань: длинноволокнистый муслин, 100% хлопок. Легкое и мягкое на ощупь.",
        color: "бордо",
        colors: ["молоко"]
      }
    }
},

  {
    id: 58,
    price: 3565,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3030,
    sku: "98779",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Freedom Dress/7.avif",
    images: [
      "/Dress/Freedom Dress/8.avif",
      {
        type: "video",
        src: "/Dress/Freedom Dress/IMG_6714.mp4",
        poster: "/Dress/Freedom Dress/7.avif"
      },
      "/Dress/Freedom Dress/9.avif",
      "/Dress/Freedom Dress/10.avif",
      "/Dress/Freedom Dress/11.avif",
      "/Dress/Freedom Dress/12.avif",

    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Freedom Dress",
description: [
  "“Freedom” is not just a name — it’s a feeling. The loose silhouette of the dress brings comfort, while the deep neckline and romantic ruffles highlight femininity.",
  "Choose between classic cream or rich wine and create your mood with “Freedom”.",
  "Fabric: long-fiber muslin made of 100% cotton. Light and soft to the touch.",
  "Details:",
  "• Deep V-neckline",
  "• Maxi length with a loose fit",
  "• Long sleeves and ruffles along the entire length"
],
        color: "burgundy",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Freedom",
        description: "Robe maxi ample à plusieurs couches avec des manches longues. Détails de volants le long de toute la robe. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "bordeaux",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Freedom\"",
description: [
  "“Freedom” — це не просто назва, це відчуття. Силует сукні вільного крою дарує комфорт, а глибокий виріз і романтичні рюші підкреслюють жіночність.",
  "Обирай класичну молочну або насичено-винну — і створюй настрій разом із “Freedom”.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Глибокий V - виріз",
  "• Максі довжина та вільний крій",
  "• Довгий рукав та рюші по всій довжині"
],
        color: "бордо",
        colors: ["молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Freedom\"",
        description: "Многослойное свободное макси-платье с длинными рукавами. Детали в виде рюшек по всей длине платья. Ткань: длинноволокнистый муслин, 100% хлопок. Легкое и мягкое на ощупь.",
        color: "бордо",
        colors: ["молоко"]
      }
    }
},

  
  {
    id: 57,
    price: 3565,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3030,
    sku: "98778",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Valencia Dress/1.avif",
    images: [
      "/Dress/Valencia Dress/2.avif",
      "/Dress/Valencia Dress/3.avif",
      "/Dress/Valencia Dress/4.avif",
      "/Dress/Valencia Dress/5.avif",
      "/Dress/Valencia Dress/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Valencia Dress",
description: [
  "The layered “Valencia” dress — for your most special moments. A unique design that won't leave anyone indifferent.",
  "Fabric: Long-staple muslin made from 100% cotton. Soft and lightweight to the touch.",
  "Details:",
  "• Neckline adorned with bow-style ties",
  "• Maxi length with a comfortable elastic back",
  "• Adjustable and re-tieable straps"
],
        color: "powder",
        colors: ["powder"]
      },
      FR: {
        category: "Robes",
        name: "Robe Valencia",
        description: "Robe maxi à plusieurs couches avec des bretelles à nouer et un détail de nœud sur la poitrine. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "poudre",
        colors: ["poudre"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Valencia\"",
description: [
  "Багатошарова сукня «Valencia» до твоїх особливих моментів. Унікальний дизайн, який жодного не залишить байдужим.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Декольте прикрашено завʼязками у вигляді банту",
  "• Максі довжина та комфортна резинка на спинці",
  "• Бретелі можна перевʼязувати"
],
        color: "пудра",
        colors: ["пудра"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Valencia\"",
        description: "Многослойное макси-платье с завязками на бретелях и узлом на груди. Ткань: длинноволокнистый муслин, 100% хлопок. Легкое и мягкое на ощупь.",
        color: "пудра",
        colors: ["пудра"]
      }
    }
},


  {
    id: 55,
    price: 3220,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2737,
    sku: "98776",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Provence Dress/1.avif",
    images: [
      "/Dress/Provence Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Provence Dress/IMG_928.mp4",
        poster: "/Dress/Provence Dress/1.avif"
      },
      "/Dress/Provence Dress/3.avif",
      "/Dress/Provence Dress/4.avif",
      "/Dress/Provence Dress/5.avif",
      "/Dress/Provence Dress/6.avif",
      "/Dress/Provence Dress/7.avif",
      "/Dress/Provence Dress/8.avif",
      "/Dress/Provence Dress/9.avif",
      "/Dress/Provence Dress/10.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Dress 'Provence'",
  description: [
    "Immerse yourself in a French mood with the \"Provence\" dress. A romantic style with long sleeves and ruffles on the neckline. The skirt features a delicate flounce.",
    "Fabric: long-staple muslin made of 100% cotton. Light and soft to the touch.",
    "Details:",
    "• Delicate ruffles on the neckline",
    "• Mini length",
    "• Comes with a cotton lining"
  ],
          color: "milk",
        colors: ["milk", "powder"]
      },
      FR: {
        category: "Robes",
        name: "Robe « Provence »",
        description: "Robe courte avec manches longues et volants au décolleté. La jupe est ornée d’un volant délicat. Tissu : mousseline à longues fibres en 100 % coton. Un tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait", "poudre"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Provence\"",
  description: [
    "Поринь у французський настрій разом із сукнею \"Provence\". Романтичний фасон із довгим рукавом та оборками на вирізі. На спідниці є ніжний волан.",
    "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
    "Деталі:",
    "• Ніжні оборки на вирізі",
    "• Міні довжина",
    "• Має бавовняну підкладку"
  ],
         color: "молоко",
        colors: ["молоко", "пудра"]
      },
      RU: {
        category: "Платья",
        name: "Платье «Прованс»",
        description: "Платье мини-длины с длинными рукавами и оборками на вырезе. На юбке — нежный волан. Ткань: муслин из длинноволокнистого 100% хлопка. Лёгкая и мягкая на ощупь ткань.",
        color: "молочный",
        colors: ["молочный", "пудра"]
      }
      
    }
},

  
  {
    id: 54,
    price: 3220,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2737,
    sku: "98775",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Breeze Dress/7.avif",
    images: [
      "/Dress/Breeze Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Breeze Dress/IMG_732.mp4",
        poster: "/Dress/Breeze Dress/7.avif"
      },
      "/Dress/Breeze Dress/8.avif",
      "/Dress/Breeze Dress/9.avif",
      "/Dress/Breeze Dress/10.avif",
      "/Dress/Breeze Dress/11.avif",
      "/Dress/Breeze Dress/12.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Breeze Dress",
        description: "Oversized asymmetrical dress with long sleeves and a V-neck. Features ruffle details along the sleeves and dress. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "fuchsia",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Breeze",
        description: "Robe oversize asymétrique avec manches longues et col en V. Détails de volants le long des manches et de la robe. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "fuchsia",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня «Breeze»",
        description: "Оверсайз сукня асиметричної довжини із довгим рукавом та V-вирізом. На рукавчиках та вздовж сукні деталі у вигляді рюш. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "фуксія",
        colors: ["молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Breeze\"",
        description: "Оверсайз платье асимметричной длины с длинными рукавами и V-образным вырезом. Детали в виде рюшек на рукавах и вдоль платья. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "фуксия",
        colors: ["молоко"]
      }
    }
},


  {
    id: 53,
    price: 3920,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3332,
    sku: "98774",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Teresa Dress/1.avif",
    images: [
      "/Dress/Teresa Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Teresa Dress/IMG_6729.mp4",
        poster: "/Dress/Teresa Dress/1.avif"
      },
      "/Dress/Teresa Dress/3.avif",
      "/Dress/Teresa Dress/4.avif",
      "/Dress/Teresa Dress/5.avif",
      "/Dress/Teresa Dress/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Teresa Dress",
        description: "Maxi dress that accentuates the waist with a belt. Features handmade lace, a V-neck, and buttons along the entire length. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Teresa",
        description: "Robe maxi qui souligne la taille avec une ceinture. Dispose de dentelle faite main, d'un col en V et de boutons sur toute la longueur. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Teresa\"",
        description: "Сукня максі, яка підкреслює талію завдяки поясу. Має мереживо ручної роботи, V-виріз та ґудзики по всій довжині. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Teresa\"",
        description: "Макси-платье, подчеркивающее талию поясом. Имеет ручное кружево, V-образный вырез и пуговицы по всей длине. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
},


  {
    id: 52,
    price: 3920,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3332,
    sku: "98773",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Maria Dress/1.avif",
    images: [
      "/Dress/Maria Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Maria Dress/IMG_2328.mp4",
        poster: "/Dress/Maria Dress/1.avif"
      },
      "/Dress/Maria Dress/3.avif",
      "/Dress/Maria Dress/4.avif",
      "/Dress/Maria Dress/5.avif",
      "/Dress/Maria Dress/6.avif",
      "/Dress/Maria Dress/7.avif",
      "/Dress/Maria Dress/8.avif",
      "/Dress/Maria Dress/9.avif",
      "/Dress/Maria Dress/10.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Maria Dress",
        description: "Maxi dress with handmade lace, lantern sleeves, and a slit on the leg. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk", "Water"]
      },
      FR: {
        category: "Robes",
        name: "Robe Maria",
        description: "Robe maxi avec dentelle faite main, manches lanternes et fente sur la jambe. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait", "L'eau"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Maria\"",
        description: "Сукня максі із мереживом ручної роботи, рукавами ліхтариками та розрізом на ніжці. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко", "колір води"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Maria\"",
        description: "Макси-платье с ручным кружевом, рукавами-фонариками и разрезом на ноге. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "молоко",
        colors: ["молоко", "цвет воды"]
      }
    }
},

  {
    id: 51,
    price: 3920,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3332,
    sku: "98772",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Flower Dress/1.avif",
    images: [
      "/Dress/Flower Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Flower Dress/IMG_3889.mp4",
        poster: "/Dress/Flower Dress/1.avif"
      },
      "/Dress/Flower Dress/3.avif",
      "/Dress/Flower Dress/4.avif",
      "/Dress/Flower Dress/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Flower Dress",
        description: "Maxi dress with lantern sleeves. Stunning details in the form of decorative flowers and ethnic ruffles throughout. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe à fleurs",
        description: "Robe maxi avec manches lanternes. Détails époustouflants sous forme de fleurs décoratives et de volants ethniques sur toute la longueur. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня з квітами",
        description: "Сукня максі із рукавами ліхтариками. Неймовірні деталі у вигляді декоративних квітів та етнічних рюш по всій довжині. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье с цветами",
        description: "Макси-платье с рукавами-фонариками. Невероятные детали в виде декоративных цветов и этнических рюш по всей длине. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
},



  {
    id: 49,
    price: 3170,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2695,
    sku: "98770",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Ruffle Dress/1.avif",
    images: [
      "/Dress/Ruffle Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Ruffle Dress/IMG_059.mp4",
        poster: "/Dress/Ruffle Dress/1.avif"
      },
      "/Dress/Ruffle Dress/3.avif",
      // "/Dress/Ruffle Dress/4.avif",
      "/Dress/Ruffle Dress/5.avif",
      "/Dress/Ruffle Dress/6.avif",
      "/Dress/Ruffle Dress/7.avif",
      "/Dress/Ruffle Dress/8.avif",
      "/Dress/Ruffle Dress/9.avif",
      "/Dress/Ruffle Dress/10.avif",
      "/Dress/Ruffle Dress/11.avif",
      "/Dress/Ruffle Dress/12.avif",
      "/Dress/Ruffle Dress/13.avif",
      "/Dress/Ruffle Dress/14.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Ruffle Dress",
        description: "Midi-length dress with delicate ruffles and a slit on the leg. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "powder",
        colors: ["powder", "milk", "black", "water color"]
      },
      FR: {
        category: "Robes",
        name: "Robe à volants",
        description: "Robe midi avec de délicats volants et une fente sur la jambe. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "poudre",
        colors: ["poudre", "lait", "noir", "couleur de l'eau"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня з воланами",
        description: "Сукня міді довжини із ніжними воланчиками та розрізом на ніжці. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "пудра",
        colors: ["пудра", "молоко", "чорний", "колір води"]
      },
      RU: {
        category: "Платья",
        name: "Платье с воланами",
        description: "Платье миди с нежными воланами и разрезом на ноге. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "пудра",
        colors: ["пудра", "молоко", "черный", "цвет воды"]
      }
    }
  },
  
  

  {
    id: 47,
    price: 2855,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2427,
    sku: "98768",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Muslin/7.avif",
    images: [
      "/Dress/Muslin/7.avif",
      {
        type: "video",
        src: "/Dress/Muslin/IMG_4392.mp4",
        poster: "/Dress/Muslin/7.avif"
      },

      "/Dress/Muslin/8.avif",
      "/Dress/Muslin/9.avif",
      "/Dress/Muslin/10.avif",
      "/Dress/Muslin/11.avif",
      "/Dress/Muslin/12.avif",
      "/Dress/Muslin/13.avif",
      "/Dress/Muslin/14.avif",
      "/Dress/Muslin/15.avif",
      "/Dress/Muslin/16.avif",
      "/Dress/Muslin/17.avif",
      "/Dress/Muslin/18.avif",
      "/Dress/Muslin/19.avif",
      "/Dress/Muslin/20.avif",
      "/Dress/Muslin/21.avif",
      "/Dress/Muslin/22.avif",
      "/Dress/Muslin/23.avif",

    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Muslin Dress",
        description: "Midi dress with short sleeves. Features buttons along the entire length, allowing for adjustable slit. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "eucalyptus",
        colors: ["milk", "powder", "water color"]
      },
      FR: {
        category: "Robes",
        name: "Robe en mousseline",
        description: "Robe midi avec manches courtes. Dotée de boutons sur toute la longueur, permettant d'ajuster la fente. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "eucalyptus",
        colors: ["lait", "poudre", "couleur de l'eau"]
      },
      UA: {
        category: "Сукні",
        name: "Муслінова сукня",
        description: "Сукня міді із короткими рукавами. Має ґудзики по всій довжині, якими можна регулювати розріз. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "евкаліпт",
        colors: ["молоко", "пудра", "колір води"]
      },
      RU: {
        category: "Платья",
        name: "Муслиновое платье",
        description: "Платье миди с короткими рукавами. Имеет пуговицы по всей длине, позволяя регулировать разрез. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "эвкалипт",
        colors: ["молоко", "пудра", "цвет воды"]
      }
    }
  },
  
  
  {
    id: 46,
    price: 3335,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2835,
    sku: "98767",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Lantern/1.avif",
    images: [
      "/Dress/Lantern/2.avif",
      {
        type: "video",
        src: "/Dress/Lantern/IMG_061.mp4",
        poster: "/Dress/Lantern/1.avif"
      },
      "/Dress/Lantern/3.avif",
      "/Dress/Lantern/4.avif",
      "/Dress/Lantern/5.avif",
      "/Dress/Lantern/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Lantern Dress",
        description: "Delicate midi dress with lantern sleeves and handmade lace inserts. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Lanterne",
        description: "Robe midi délicate avec des manches lanterne et des inserts en dentelle faite à la main. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня ліхтарик",
        description: "Ніжна сукня міді довжини. Має рукава ліхтарики та вставки із мережива ручної роботи. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье Лантерн",
        description: "Нежное платье миди длины. Имеет рукава фонарики и вставки из кружева ручной работы. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
  },
  

  {
    id: 45,
    price: 3335,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2835,
    sku: "98766",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Oversize/1.avif",
    images: [
      "/Dress/Oversize/2.avif",
      {
        type: "video",
        src: "/Dress/Oversize/IMG_060.mp4",
        poster: "/Dress/Oversize/1.avif"
      },
      "/Dress/Oversize/3.avif",
      "/Dress/Oversize/4.avif",
      "/Dress/Oversize/5.avif",
      "/Dress/Oversize/6.avif",
      "/Dress/Oversize/7.avif",
      "/Dress/Oversize/8.avif",
      "/Dress/Oversize/9.avif",
      "/Dress/Oversize/10.avif",
      "/Dress/Oversize/11.avif",
      "/Dress/Oversize/12.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Oversize Dress",
        description: [
  "Calmness, lightness, and elegance!",
  "The muslin dress is a blend of simplicity and elegance.",
  "Perfect for slow-paced days when you want to feel naturally beautiful — without extra words or effort.",
  "Fabric: long-fiber muslin made from 100% cotton. A light and soft fabric to the touch.",
  "Details:",
  "• High waist",
  "• Oversized fit and midi length",
  "• Lace and ruffles on the sleeves"
],
     color: "water color",
        colors: ["water color", "milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Oversize",
        description: "Robe oversize légère et minimaliste dans un style ethnique avec un tissage spécial et des détails en dentelle. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "couleur de l'eau",
        colors: ["couleur de l'eau", "lait"]
      },
      UA: {
        category: "Сукні",
        name: "Oversize сукня",
    description:    ["Спокій, легкість і витонченість !",
"Сукня з мусліну — це поєднання простоти й елегантності.",
"Ідеальна для неспішних днів, коли хочеться відчути себе природно красивою — без зайвих слів і зусиль.",

"Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",

"Деталі:",
"• Висока талія",
"• Оверсайз фасон та міді довжина",
"• Мереживо та рюші на рукавах"],
         color: "колір води",
        colors: ["колір води", "молоко"]
      },
      RU: {
        category: "Платья",
        name: "Оверсайз платье",
        description: "Легкое, минималистичное оверсайз платье в этническом стиле с особым плетением и кружевной отделкой. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "цвет воды",
        colors: ["цвет воды", "молоко"]
      }
    }
  },
  

  {
    id: 44,
    price: 3920,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3332,
    sku: "98765",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Ethnic/1.avif",
    images: [
      "/Dress/Ethnic/2.avif",
      {
        type: "video",
        src: "/Dress/Ethnic/IMG_7595.mp4",
        poster: "/Dress/Ethnic/1.avif"
      },
      "/Dress/Ethnic/3.avif",
      "/Dress/Ethnic/4.avif",
      "/Dress/Ethnic/5.avif",
      "/Dress/Ethnic/6.avif",
      "/Dress/Ethnic/7.avif",
      "/Dress/Ethnic/8.avif",
      "/Dress/Ethnic/9.avif",
      "/Dress/Ethnic/10.avif",
      "/Dress/Ethnic/11.avif",
      "/Dress/Ethnic/12.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Ethnic Dress",
        description: "Maxi dress with lace throughout, oversized sleeves, and ties. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk", "black"]
      },
      FR: {
        category: "Robes",
        name: "Robe Ethnique",
        description: "Robe maxi avec dentelle sur toute la longueur, manches oversize et liens. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait", "noir"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня «Ethnic»",
        description: "Сукня максі із мереживом по всій довжині, оверсайз рукавами та завʼязками. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко", "чорний"]
      },
      RU: {
        category: "Платья",
        name: "Платье «Ethnic»",
        description: "Макси-платье с кружевом по всей длине, оверсайз рукавами и завязками. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "молоко",
        colors: ["молоко", "чёрный"]
      }
    }
  },



  // {
  //   id: 3,
  //   price: 4160,
  //   isTop: true,
  //   sku: "12345",
  //   size: "XS S M L XL",
  //   category: "Costumes",
  //   image: "/Costumes/Wool suit with vest/1.avif",
  //   images: ["/Costumes/Wool suit with vest/2.avif", "/Costumes/Wool suit with vest/3.avif"],
  //   sizes: ["XS", "S" , "M" , "L" , "XL"],
  //   translations: {
  //     EN: {
  //       name: "Wool suit with vest",
  //       description: "Vest + palazzo pants\nComposition: 75% natural wool, soft, does not sting the body.",
  //       color: "camel",
  //       colors: ["camel"]
  //     },
  //     FR: {
  //       name: "Costume en laine avec gilet",
  //       description: "Gilet + pantalon palazzo\nComposition: 75% laine naturelle, douce, ne pique pas la peau.",
  //       color: "camel",
  //       colors: ["camel"]
  //     },
  //     UA: {
    //category: "Костюми",
  //       name: "Вовняний костюм із жилетом",
  //       description: "Жилет + палаццо штани\nСклад: 75% натуральної вовни, м'яка, не колеться.",
  //       color: "камел",
  //       colors: ["камел"]
  //     }
  //   }
  // },

  // {
  //   id: 5,
  //   price: 3100,
  //   isTop: true, // Топ продукт
  //   sku: "12345",
  //   size: "XS S M L XL",
  //   category: "Dresses",
  //   image: "/Dress/Wool A-line dress/2.avif",
  //   images: [
  //     "/Dress/Wool A-line dress/1.avif", "/Dress/Wool A-line dress/3.avif", "/Dress/Wool A-line dress/4.avif", "/Dress/Wool A-line dress/5.avif", "/Dress/Wool A-line dress/6.avif", "/Dress/Wool A-line dress/7.avif", "/Dress/Wool A-line dress/8.avif", "/Dress/Wool A-line dress/9.avif", "/Dress/Wool A-line dress/10.avif"
  //   ],
  //   sizes: ["XS", "S", "M", "L", "XL"],
  //   translations: {
  //     EN: {
  //       name: "Wool A-line dress",
  //       description: "A-line dress with pronounced seams and a front zipper\nComposition: 75% natural wool, soft, does not prick the body.",
  //       color: "blue",
  //       colors: ["gray", "camel"],
  //     },
  //     FR: {
   // category: "Robes",
  //       name: "Robe évasée en laine",
  //       description: "Robe évasée avec coutures marquées et fermeture éclair avant\nComposition: 75% laine naturelle, douce, ne pique pas la peau.",
  //       color: "bleu",
  //       colors: ["gris", "camel"]
  //     },
  //     UA: {
   // category: "Сукні",
  //       name: "Вовняна сукня А-силуета",
  //       description: "Сукня-силует із виразними швами та передньою блискавкою\nСклад: 75% натуральної вовни, м'яка, не колеться.",
  //       color: "синій",
  //       colors: ["сірий", "верблюжий"]
  //     }
  //   }
  // },
  // {
  //   id: 6,
  //   price: 3100,
  //   isTop: false,
  //   sku: "12345",
  //   size: "XS S M L XL",
  //   category: "Dresses",
  //   image: "/Dress/Dress Grace/1.avif",
  //   images: ["/Dress/Dress Grace/2.avif", "/Dress/Dress Grace/3.avif", "/Dress/Dress Grace/4.avif", "/Dress/Dress Grace/5.avif", "/Dress/Dress Grace/6.avif"],
  //   sizes: ["XS", "S", "M", "L", "XL"],
  //   translations: {
  //     EN: {
  //       category: "Dresses",
  //       name: "Dress Grace",
  //       description: "A-line dress with wide sleeves of midi length. Has pronounced ribbons near the neck. There is a cutout on the back\nFabric: high-quality costume wool",
  //       color: "gray",
  //       colors: ["gray"],
  //     },
  //     FR: {
  //       category: "Robes",
  //       name: "Robe Grace",
  //       description: "",
  //       color: "gris",
  //       colors: ["gris"]
  //     },
  //     UA: {
  //       category: "Сукні",
  //       name: "Сукня «Grace»",
  //       description: "Сукня А-силуету із широкими рукавами міді довжини. Має виражені стрічки біля горловини. На спинці є виріз\nТканина: якісна костюмна вовна",
  //       color: "сірий",
  //       colors: ["сірий"]
  //     },
  //     RU: {
  //       category: "Платья",
  //       name: "Платье Грейс",
  //       description: "Платье А-силуэта с широкими рукавами меди имеет выраженные швы у горловины.\n Ткань: качественная костюмная шерсть",
  //       color: "серый",
  //       colors: ["серый"]
  //     }
  //   }
  // },
  {
    id: 7,

    price: 1850,
    isTop: false,

    // isSpecialOffer: true,
    // discountPrice: 1573,
    sku: "12345",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Mini sundress/1.avif",
    images: ["/Dress/Mini sundress/2.avif", "/Dress/Mini sundress/3.avif", "/Dress/Mini sundress/4.avif", "/Dress/Mini sundress/5.avif", "/Dress/Mini sundress/6.avif"],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Mini sundress",
        description: "Mini sundress with a deep neckline, side slits that can be fastened and two pockets. Can be worn as a vest. \nFabric: high-quality eco-leather on a suede base. (stretch, does not crack)",
        color: "blue",
        colors: ["black"],
      },
      FR: {
        category: "Robes",
        name: "Robe d'été mini",
        description: "Mini robe d'été avec décolleté plongeant, fentes latérales à fermeture et deux poches. Peut être porté comme un gilet. \nTissu : éco-cuir de haute qualité sur base en daim. (extensible, ne craque pas)",
        color: "bleu",
        colors: ["noir"]
      },
      UA: {
        category: "Сукні",
        name: "Сарафан mini",
        description: "Mini сарафан із глибоким декольте, розрізами збоку, які застібаються та двома кишенями. Можна носити як жилет. \nТканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )",
        color: "синій",
        colors: ["чорний"]
      },
      RU: {
        name: "Мини-сарафан",
        description: "Mini сарафан с глубоким декольте, застегивающимися разрезами сбоку и двумя карманами. Можно носить как жилет. \nТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
        color: "синий",
        colors: ["чёрный"]
      }
    }
  },
     
    // {
    //   id: 8,
    //   price: 2000,
    //   sku: "12345",
      
    //   size: "XS S M L XL",
    //   category: "Dresses",
    //   image: "/Dress/Shkiriana suknya (Leather dress)/4.avif",
    //   images: ["/Dress/Shkiriana suknya (Leather dress)/5.avif", "/Dress/Shkiriana suknya (Leather dress)/6.avif"],
       
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       category: "Dresses",
    //       name: "Shkiriana suknya (Leather dress)",
    //       description: "Oversize dress with a small round neckline and pockets\nFabric: high-quality eco-leather on a suede base. (stretchy, does not crack)",
    //       color: "blue",
    //       colors: ["mocha"],
    //     },
    //     FR: {
    //       category: "Robes",
    //       name: "Tissu Shkiryana (robe en cuir)",
    //       description: "Robe oversize avec petit décolleté arrondi et poches. Tissu : éco-cuir de haute qualité sur base en daim (extensible, ne craque pas).",
    //       colors : ["mocha"],
    //     },
    //     UA: {
    //       category: "Сукні",
    //       name: "Шкіряна сукня",
    //       description: "Oversize сукня із невеликим округлим вирізом та кишенями\nТканина: якісна екошкіра на замшевій основі.(стречева, не тріскається)",
    //       colors: ["мокко"],
    //     },
    //     RU: {
    //       name: "Кожаное платье",
    //       description: "Oversize платье с небольшим круглым вырезом и карманами\nТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
    //       colors : ["мокко"],
    //       }
    //   }
    // },
    
    

    
    
    //  {
    //   id: 11,
    //   price: 5225,
    //   sku: "12345",
    //   color: "beige",
    //   size: "XS S M L XL",
    //   category: "Outerwear",
    //   image: "/Outerwear/Leather trench coat/1.avif",
    //   images: ["/Outerwear/Leather trench coat/2.avif", "/Outerwear/Leather trench coat/3.avif", "/Outerwear/Leather trench coat/4.avif", 
    //           "/Outerwear/Leather trench coat/5.avif", "/Outerwear/Leather trench coat/6.avif"],
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       category: "Outerwear",
    //       name: "Leather trench coat",
    //       description: "Double-breasted leather trench coat in an oversize style with an included belt and two pockets. \nFabric: high-quality eco-leather on a suede base. (stretchy, does not crack)",
    //       colors: ["beige"], 
    //     },
    //     FR: {
    //       category: "Vêtements d'extérieur",
          
    //       name: "Trench-coat en cuir",
    //       description: "Trench-coat oversize en cuir à double boutonnage avec ceinture incluse et deux poches. \nTissu : éco-cuir de haute qualité sur base en daim. (extensible, incassable)",
    //       colors: ["beige"],
    //     },
    //     UA: {
    //       category: "Верхній одяг",
    //       name: "Шкіряний тренч",
    //       description: "Двобортний шкіряний тренч oversize фасону із поясом у комплекті та двома кишенями. \nТканина: якісна екошкіра на замшевій основі.(стречева, не тріскається)",
    //       colors: ["бежевий"],
    //     }
    //   }
    // },
    
    // {
    //   id: 12,
    //   price: 4920,
    //   sku: "12345",
    //   color: "camel",
    //   size: "XS S M L XL",
    //   category: "Outerwear",
    //   image: "/Outerwear/Camel пальто/1.avif",
    //   images: ["/Outerwear/Camel пальто/2.avif", "/Outerwear/Camel пальто/3.avif", "/Outerwear/Camel пальто/4.avif", "/Outerwear/Camel пальто/5.avif"],
      
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       category: "Outerwear",
    //       name: "Camel Coat",
    //       description: "A thick, lined midi-length coat with two pockets and a belt included. The sleeves can be adjusted to your liking\nFabric: Italy. 85% wool, 15% polyester",
    //       colors: ["camel"],
    //     },
    //     FR: {
    //       category: "Vêtements d'extérieur",
    //       name: "Manteau Camel",
    //       description: "Manteau épais, de longueur midi, doublé, doté de deux poches et muni d'une ceinture. Les manches peuvent être ajustées à votre guise.\nTissu : Italie. 85% laine, 15% polyester",
    //       colors: ["camel"],
    //     },
    //     UA: {
    //       category: "Верхній одяг",
    //       name: "Camel пальто",
    //       description: "Щільне пальто міді довжини на підкладці, має дві кишені, а пояс іде у комплекті. Рукава можна регулювати, як вам зручно\nТканина:Італія. 85 % вовни, 15% поліестер",
    //       colors: ["камель"],
    //     }
    //   }
    // },
    
    

    
    // {
    //  id: 15,
    //  price: 1650,
    //  sku: "12345",
    //  color: "caramel",
    //  size: "XS S M L XL",
    //  category: "Skirts",
    //  image: "/Skirts/Alice/1.avif",
    //  images: ["/Skirts/Alice/2.avif", "/Skirts/Alice/3.avif", "/Skirts/Alice/4.avif", "//Skirts/Alice/5.avif"],
    
    //  sizes: ["XS", "S", "M", "L", "XL"],
    //  translations: {
    //    EN: {
    //     category: "Skirts",
    //     name: "Skirt «Alice»",
    //     description: "A-line skirt with ribbons along the entire length. Fabric: high-quality eco-leather on a suede base. (stretchy, does not crack)",
    //     colors: ["caramel"],
    //   },
    //   FR: {
    //     category: "Jupes",
    //     name: "Skirt «Alice»",
    //     description: "Une jupe ample en forme de trapèze avec des rubans sur toute la longueur. Tissu : cuir écologique de haute qualité sur base en daim. (extensible, ne craque pas",
    //     colors: ["caramel"],
    //   },
    //   UA: {
    //     category: "Спідницi",
    //      name: "Спідниця «Alice»",
    //      description: "Спідниця вільного крою у формі трапеції зі стрічками по всій довжині. Тканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається",
    //      colors: ["карамель"],
    //    }
    //  }
    //  },

    //  {
    //   id: 16,
    //   price: 5350,
    //   sku: "12345",
    //   color: "olive",
    //   size: "XS S M L XL",
    //   category: "Costumes",
    //   image: "/Costumes/Liana/2.avif",
    //   images: ["/Costumes/Liana/3.avif", "/Costumes/Liana/1.avif", "/Costumes/Liana/4.avif","/Costumes/Liana/5.avif","/Costumes/Liana/6.avif"],
      
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       category: "Costumes",
    //       name: "Costume «Liana»",
    //       description: "Double-breasted oversize jacket + belt + straight high-rise trousers n\Suit fabric (75% viscose, 25% polyester)",
    //       colors: ["olive"],
    //     },
    //     FR: {
    //       category: "Costumes",
    //       name: "Costume «Liana»",
    //       description: "Veste oversize croisée + ceinture + pantalon droit taille haute Tissu de costume (75% viscose, 25% polyester)",
    //       colors: ["olive"],
    //     },
    //     UA: {
    //       category: "Костюми",
    //       name: "Костюм «Liana»",
    //       description: "Двобортний oversize жакет + пояс + брюки прямі на високій посадці n\Костюмна тканина ( 75% віскоза, 25% поліестер )",
    //       colors: ["оливка"],
    //     }
    //   }
    // },
    
    //  {
    //    id: 17,
    //    price: 5350,
    //    sku: "12345",
    //    color: "black",
    //    size: "XS S M L XL",
    //    category: "Costumes",
    //    image: "/Costumes/Lucy/1.avif",
    //    images: ["/Costumes/Lucy/2.avif", "/Costumes/Lucy/3.avif", "/Costumes/Lucy/4.avif", "/Costumes/Lucy/5.avif", "/Costumes/Lucy/6.avif"],
        
    //    sizes: ["XS", "S", "M", "L", "XL"],
    //    translations: {
    //      EN: {
    //       category: "Costumes",
    //        name: "Costume Lucy",
    //        description: "Double-breasted oversize jacket + cropped high-rise banana pants\nSuit fabric (75% viscose, 25% polyester)",
    //        colors: ["black"],
    //      },
    //      FR: {
    //       category: "Costumes",
    //        name: "Costume Lucy",
    //        description: "Veste oversize à double boutonnage + pantacourt taille haute façon banane\nTissu de costume (75% viscose, 25% polyester)",
    //        colors: ["noir"],
    //      },
    //      UA: {
    //       category: "Костюми",
    //        name: "Костюм «Lucy»",
    //        description: "Двобортний oversize жакет + вкорочені брюки фасону бананів на високій посадці \nКостюмна тканина ( 75% віскоза, 25% поліестер )",
    //        colors: ["чорний"],
    //      }
    //    }
    //  },

    //  {
    //   id: 18,
    //   price: 4950,
    //   isTop: false, // Not marked as a top product
    //   sku: "56789",
      
    //   size: "XS S M L XL",
    //   category: "Costumes",
    //   image: "/Costumes/Suit with bermuda shorts/1.avif",
    //   images: [
    //     "/Costumes/Suit with bermuda shorts/2.avif",
    //     "/Costumes/Suit with bermuda shorts/3.avif",
    //     "/Costumes/Suit with bermuda shorts/4.avif"
    //   ],
      
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       name: "Suit with bermuda shorts",
    //       description: "Double-breasted oversized jacket + high-waisted bermuda shorts with pockets.\nFabric: suit fabric (75% viscose, 25% polyester)",
    //       color: "chocolate",
    //       colors: ["chocolate"],
    //     },
    //     FR: {
    //       name: "Costume avec bermuda",
    //       description: "Veste oversize double boutonnage + bermuda taille haute avec poches.\nTissu: tissu de costume (75% viscose, 25% polyester)",
    //       color: "chocolat",
    //       colors: ["chocolat"],
    //     },
    //     UA: {
    //       name: "Костюм із бермудами",
    //       description: "Двобортний oversize жакет + шорти-бермуди на високій посадці із кишенями.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)",
    //       color: "шоколадний",
    //       colors: ["шоколадний"],
    //     },
    //     RU: {
    //       name: "Костюм с бермудами",
    //       description: "Двухбортный oversize жакет + шорты-бермуды на высокой посадке с карманами.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)",
    //       color: "шоколадный",
    //       colors: ["шоколадный"],
    //     }
    //   }
    // },

    // {
    //   id: 19,
    //   price: 5350,
    //   isTop: false, // Not marked as a top product
    //   sku: "98765",
      
    //   size: "XS S M L XL",
    //   category: "Costumes",
    //   image: "/Costumes/Emily Suit/1.avif",
    //   images: [
    //     "/Costumes/Emily Suit/2.avif",
    //     "/Costumes/Emily Suit/3.avif",
    //     "/Costumes/Emily Suit/4.avif"
    //   ],
     
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       name: "Emily Suit",
    //       description: "Double-breasted oversized jacket + palazzo trousers with high waist, pockets, and a belt.\nFabric: suit fabric (75% viscose, 25% polyester)",
    //       color: "chocolate",
    //       colors: ["chocolate"],
    //     },
    //     FR: {
    //       name: "Costume « Emily »",
    //       description: "Veste oversize double boutonnage + pantalon palazzo taille haute avec poches et ceinture.\nTissu: tissu de costume (75% viscose, 25% polyester)",
    //       color: "chocolat",
    //       colors: ["chocolat"],
    //     },
    //     UA: {
    //       name: "Костюм «Emily»",
    //       description: "Двобортний oversize жакет + брюки палаццо на високій посадці із кишенями та поясом.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)",
    //       color: "шоколадний",
    //       colors: ["шоколадний"],
    //     },
    //     RU: {
    //       name: "Костюм «Emily»",
    //       description: "Двухбортный oversize жакет + брюки палаццо на высокой посадке с карманами и поясом.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)",
    //       color: "шоколадный",
    //       colors: ["шоколадный"],
    //     }
    //   }
    // },


    {
      id: 21,
      price: 3025,
      isTop: false, // Not marked as a top product
      // isSpecialOffer: true,
      // discountPrice: 2571,
      sku: "67891",
      
      size: "XS S M L XL",
      category: "Dresses",
      image: "/Dress/Marie Dress/1.avif",
      images: [
        "/Dress/Marie Dress/2.avif",
        "/Dress/Marie Dress/3.avif",
        "/Dress/Marie Dress/4.avif",
        "/Dress/Marie Dress/5.avif"
      ],

      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Dresses",
          name: "Marie Dress",
          description: "Midi-length dress with a collar and pockets. Button closure.\nFabric: suit fabric (75% viscose, 25% polyester)",
          color: "beige",
          colors: ["beige"],
        },
        FR: {
          category: "Robes",
          name: "Robe « Marie »",
          description: "Robe midi avec col et poches. Fermeture à boutons.\nTissu: tissu de costume (75% viscose, 25% polyester)",
          color: "beige",
          colors: ["beige"],
        },
        UA: {
          category: "Сукні",
          name: "Сукня «Marie»",
          description: "Сукня міді довжини із коміром та кишенями. Застібається на ґудзики.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)",
          color: "бежевий",
          colors: ["бежевий"],
        },
        RU: {
          category: "Платья",
          name: "Платье «Marie»",
          description: "Платье миди длиной с воротником и карманами. Застёгивается на пуговицы.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)",
          color: "бежевый",
          colors: ["бежевый"],
        }
      }
    },

    {
      id: 22,
      price: 1650,
      isTop: false, // Not marked as a top product

      // isSpecialOffer: true,
      // discountPrice: 1403,
      sku: "67892",
      
      size: "XS S M L XL",
      category: "Dresses",
      image: "/Dress/Leather Sundress/1.avif",
      images: [
        "/Dress/Leather Sundress/2.avif",
        "/Dress/Leather Sundress/3.avif",
        "/Dress/Leather Sundress/4.avif",
      ],

      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Dresses",
          name: "Leather Sundress",
          description: "Oversized sundress with a square neckline and two pockets.\nFabric: high-quality eco-leather on a suede base (stretchable, does not crack)",
          color: "black",
          colors: ["black"],
        },
        FR: {
          category: "Robes",
          name: "Robe « en cuir »",
          description: "Robe oversize avec décolleté carré et deux poches.\nTissu: cuir écologique de haute qualité sur une base en daim (extensible, ne se fissure pas)",
          color: "noir",
          colors: ["noir"],
        },
        UA: {
          category: "Сукні",
          name: "Шкіряний сарафан",
          description: "Oversize сарафан із квадратним вирізом та двома кишенями.\nТканина: якісна екошкіра на замшевій основі (стречева, не тріскається)",
          color: "чорний",
          colors: ["чорний"],
        },
        RU: {
          category: "Платья",
          name: "Кожаный сарафан",
          description: "Oversize сарафан с квадратным вырезом и двумя карманами.\nТкань: качественная экокожа на замшевой основе (стречевая, не трескающаяся)",
          color: "черный",
          colors: ["черный"],
        }
      }
    },

    {
      id: 23,
      price: 4200,
      isTop: false,
      sku: "67893",
      // isSpecialOffer: true,
      // discountPrice: 3570,
      size: "XS S M L XL",
      category: "Costumes",
      image: "/Costumes/Two-Piece Suit/1.avif",
      images: [
        "/Costumes/Two-Piece Suit/2.avif",
        "/Costumes/Two-Piece Suit/3.avif",
        "/Costumes/Two-Piece Suit/4.avif",
        "/Costumes/Two-Piece Suit/5.avif",

      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Costumes",
          name: "Two-Piece Suit",
          description: "Vest with lining + palazzo pants with a high waist. Each item can be purchased separately.\nFabric: suit fabric (75% viscose, 25% polyester)",
          color: "denim",
          colors: ["jeans"],
        },
        FR: {
          category: "Costumes",
          name: "Costume 2 pièces",
          description: "Gilet doublé + pantalon palazzo taille haute. Chaque article peut être acheté séparément.\nTissu: tissu de costume (75% viscose, 25% polyester)",
          color: "bleu de denim",
        },
        UA: {
          category: "Костюми",
          name: "Костюм 2-ка",
          description: "Жилет із підкладкою + брюки палаццо із високою посадкою. Кожен елемент можна придбати окремо.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)",
          color: "джинс",
        },
        RU: {
          category: "Костюмы",
          name: "Костюм 2-ка",
          description: "Жилет с подкладкой + брюки палаццо с высокой посадкой. Каждый элемент можно приобрести отдельно.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)",
          color: "джинс",
        }
      }
    },

    // {
    //   id: 24,
    //   price: 3100,
    //   isTop: false,
    //   sku: "67894",
    //   color: "camel",
    //   size: "XS S M L XL",
    //   category: "Dress",
    //   image: "/Dress/Camel Dress/1.avif",
    //   images: [
    //     "/Dress/Camel Dress/2.avif",
    //     "/Dress/Camel Dress/3.avif",
    //     "/Dress/Camel Dress/4.avif"
    //   ],
      
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       name: "Camel Dress",
    //       description: "Wool midi dress with prominent seams, cropped sleeves, and a round neckline.\nFabric: 80% wool, 20% polyester",
    //       colors: ["camel"],
    //     },
    //     FR: {
    //       name: "Robe « Camel »",
    //       description: "Robe en laine mi-longue avec coutures prononcées, manches raccourcies et col rond.\nTissu: 80% laine, 20% polyester",
    //       colors: ["camel"],
    //     },
    //     UA: {
    //       name: "Сукня “Camel”",
    //       description: "Вовняна сукня міді довжини із вираженими швами, вкороченими рукавами та округлим вирізом.\nТканина: 80% вовна, 20% поліестер",
    //       colors: ["камель"],
    //     },
    //     RU: {
    //       name: "Платье “Camel”",
    //       description: "Шерстяное платье миди длины с выраженными швами, укороченными рукавами и округлым вырезом.\nТкань: 80% шерсть, 20% полиэстер",
    //       colors: ["камель"],
    //     }
    //   }
    // },


    

    
    { id: 28,
      price: 2100,
      isTop: false, // Топ продукт
      // isSpecialOffer: true,
      // discountPrice: 1785,
    
      sku: "12345",
      color: "red",
      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Banana Pants/1.avif",
      images: ["/Pants/Banana Pants/2.avif", 
        "/Pants/Banana Pants/3.avif", 
        "/Pants/Banana Pants/4.avif",
        "/Pants/Banana Pants/5.avif",
        "/Pants/Banana Pants/10.avif",
        "/Pants/Banana Pants/11.avif",
        "/Pants/Banana Pants/12.avif",
        "/Pants/Banana Pants/13.avif",

            ],
 
      sizes: ["XS", "S", "M", "L", "XL" ],
      translations: {
        EN: {
          category: "Pants",
          name: "Banana Pants",
          description: "High-waisted banana-style pants with two pockets.Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
          colors: ["Black", "chocolat"],
        },
        FR: {
          category: "Pantalons",
          name: "Pantalons en Cuir Banane",
          description: "Pantalons taille haute style banane avec deux poches.Tissu : Cuir éco-responsable de haute qualité avec une base en suède. (Extensible, ne se fissure pas.)",
          colors: ["Noir", "chocolat"],

        },
        UA: {
          category: "Брюки",
          name: "Шкіряні брюки банани",
          description: "Описание: Брюки фасону бананів на високій посадці із двома кишенями Тканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )",
          colors: ["Чорний", "шоколад"],
        },
        RU: {
          category: "Брюки",
          name: "Брюки бананы",
          description: "( Брюки фасона бананов на высокой посадке с двумя карманамиТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          colors: ["Черный", "шоколад"],
        }
      }
    },
    
    { id: 29,
      price:  2100,
      isTop: false, // Топ продукт
      // isSpecialOffer: true,
      // discountPrice: 1785,
      sku: "12345",
      color: "red",

      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Leather Flared Pants/5.avif",
      images: [
        "/Pants/Leather Flared Pants/6.avif", "/Pants/Leather Flared Pants/7.avif", "/Pants/Leather Flared Pants/4.avif", "/Pants/Leather Flared Pants/8.avif", "/Pants/Leather Flared Pants/9.avif",
      "/Pants/Leather Flared Pants/10.avif",
      "/Pants/Leather Flared Pants/11.avif",
      "/Pants/Leather Flared Pants/12.avif",
      "/Pants/Leather Flared Pants/13.avif",
      "/Pants/Leather Flared Pants/14.avif",
      "/Pants/Leather Flared Pants/15.avif",
      "/Pants/Leather Flared Pants/16.avif",
      "/Pants/Leather Flared Pants/17.avif",

      
      
      ],
       
      sizes: ["XS", "S", "M", "L", "XL" ],
      translations: {
        EN: {
          category: "Pants",
          name: "Leather Flared Pants",
          description: "High-waisted flared pants with pleats running along the entire length.Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
          colors: ["Black","powder","milk"],
        },
        FR: {
          category: "Pantalons",
          name: "Pantalons en Cuir Pattes d’Éph",
          description: "Pantalons taille haute évasés avec des plis sur toute la longueur.Tissu : Cuir éco-responsable de haute qualité avec une base en suède. (Extensible, ne se fissure pas.)",
          colors: ["Noir",],
        },
        UA: {
          category: "Брюки",
          name: "Шкіряні брюки кльош ",
          description: "Брюки фасону кльош на високій посадці із стрілками по всій довжиніТканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )",
          colors: ["Чорний","пудра", "молоко"],
        },
        RU: {
          category: "Брюки",
          name: "Брюки кльош",
          description: "Брюки фасона клеш на высокой посадке со стрелками по всей длине Ткань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          colors: ["Черный",],
        }
      }
    },
    

    

    // {
    //   id: 33,
    //   price: 1650,
    //   isTop: false,
    //   sku: "12347",
    
    //   size: "XS S M L XL",
    //   category: "Skirts",
    //   image: "/Skirts/Leather Skirt Knot/1.avif",
    //   images: [
    //     "/Skirts/Leather Skirt Knot/2.avif", 
    //     "/Skirts/Leather Skirt Knot/3.avif", 
    //     "/Skirts/Leather Skirt Knot/4.avif", 
    //     "/Skirts/Leather Skirt Knot/5.avif"
    //   ],

    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       category: "Skirts",
    //       name: "Leather Skirt with Knot",
    //       description: "Midi-length pencil skirt with a high waist, a slit on the leg, and a decorative knot. Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
    //       color: "olive",
    //       colors: ["olive"],
    //     },
    //     FR: {
    //       category: "Jupes",
    //       name: "Jupe en cuir avec nœud",
    //       description: "Jupe crayon longueur midi avec une taille haute, une fente sur la jambe et un nœud décoratif. Tissu : cuir écologique de haute qualité sur une base en daim. (Stretch, ne se fissure pas.)",
    //       color: "olive",
    //       colors: ["olive"],
    //     },
    //     UA: {
    //       category: "Спідниці",
    //       name: "Шкіряна спідниця з вузлом",
    //       description: "Спідниця міді довжини фасону олівець на високій посадці із розрізом на ніжці та декоративним вузлом. Тканина: якісна екошкіра на замшевій основі. (стречева, не тріскається)",
    //       color: "оливковий",
    //       colors: ["оливка"],
    //     },
    //     RU: {
    //       category: "Юбки",
    //       name: "Кожаная юбка с узлом",
    //       description: "Юбка миди длины фасона карандаш на высокой посадке с разрезом на ножке и декоративным узлом. Ткань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
    //       color: "оливковый",
    //       colors: ["оливка"],
    //     }
    //   }
    // },
    
    // {
    //   id: 35,
    //   price: 1800,
    //   isTop: false,
    //   sku: "12349",
    //   color: "mocha",
    //   size: "XS S M L XL",
    //   category: "Sweaters",
    //   image: "/Sweaters/Mohair Sweater/1.avif",
    //   images: [
    //     "/Sweaters/Mohair Sweater/2.avif", 
    //     "/Sweaters/Mohair Sweater/3.avif", 
    //     "/Sweaters/Mohair Sweater/4.avif", 
    //     "/Sweaters/Mohair Sweater/5.avif"
    //   ],
      
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       category: "Sweaters",
    //       name: "Mohair Sweater",
    //       description: "Loose-fit sweater with a wide neckline, can be worn off one shoulder. Composition: 100% mohair.",
    //       colors: ["mocha"],
    //     },
    //     FR: {
    //       category: "Pulls",
    //       name: "Pull en mohair",
    //       description: "Pull ample avec une large encolure, peut être porté sur une épaule. Composition : 100% mohair.",
    //       colors: ["moka"],
    //     },
    //     UA: {
    //       category: "Светри",
    //       name: "Светр із мохеру",
    //       description: "Светр вільного крою з широкой горловиною, можна спустити на одне плече. Склад: 100% мохер.",
    //       colors: ["мокко"],
    //     },
    //     RU: {
    //       category: "Светри",
    //       name: "Свитер из мохера",
    //       description: "Свитер свободного кроя с широкой горловиной, можно спустить на одно плечо. Состав: 100% мохер.",
    //       colors: ["мокко"],
    //     }
    //   }
    // },


    
    {
      id: 37,
      price: 1375,
      isTop: false,
      // isSpecialOffer: true,
      // discountPrice: 1169,
      sku: "12351",
      color: "black",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Drawstring Sweater/1.avif",
      images: [
        "/Sweaters/Drawstring Sweater/2.avif", 
        "/Sweaters/Drawstring Sweater/3.avif", 
        "/Sweaters/Drawstring Sweater/4.avif", 
        "/Sweaters/Drawstring Sweater/5.avif",
        "/Sweaters/Drawstring Sweater/6.avif",
        "/Sweaters/Drawstring Sweater/7.avif",
        "/Sweaters/Drawstring Sweater/8.avif",
        "/Sweaters/Drawstring Sweater/9.avif",
        "/Sweaters/Drawstring Sweater/10.avif"
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Drawstring Sweater",
          description: "Wool sweater with a drawstring that adjusts the length. Fabric: Knit (60% wool, 20% acrylic, 10% viscose, 10% elastane).",
          colors: ["black", "white"],
        },
        FR: {
          category: "Pulls",
          name: "Pull avec cordon",
          description: "Pull en laine avec un cordon ajustant la longueur. Tissu : maille (60% laine, 20% acrylique, 10% viscose, 10% élasthanne).",
          colors: ["noir", "blanc"],
        },
        UA: {
          category: "Светри",
          name: "Светр зі шнурком",
          description: "Вовняний светр із шнурком, який регулює довжину. Тканина: трикотаж (60% вовна, 20% акрил, 10% віскоза, 10% еластан).",
          colors: ["чорний", "білий"],
        },
        RU: {
          category: "Светри",
          name: "Свитер со шнурком",
          description: "Шерстяной свитер со шнурком, регулирующий длину. Ткань: трикотаж (60% шерсть, 20% акрил, 10% вискоза, 10% эластан).",
          colors: ["черный", "белый"],
        }
      }
    },
    
    {
      id: 38,
      price: 1375,
      isTop: false,
      // isSpecialOffer: true,
      // discountPrice: 1169,
      sku: "12352",
      color: "black",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Sweater Vest/1.avif",
      images: [
        "/Sweaters/Sweater Vest/2.avif", 
        "/Sweaters/Sweater Vest/3.avif", 
        "/Sweaters/Sweater Vest/4.avif", 
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Sweater Vest",
          description: "Oversized sweater with cropped sleeves. Fabric: Knit (60% wool, 20% acrylic, 10% viscose, 10% elastane).",
          colors: ["black"],
        },
        FR: {
          category: "Pulls",
          name: "Pull sans manches",
          description: "Pull oversize avec manches courtes. Tissu : maille (60% laine, 20% acrylique, 10% viscose, 10% élasthanne).",
          colors: ["noir"],
        },
        UA: {
          category: "Светри",
          name: "Светр-жилет",
          description: "Oversize светр із вкороченим рукавом. Тканина: трикотаж (60% вовна, 20% акрил, 10% віскоза, 10% еластан).",
          colors: ["чорний"],
        },
        RU: {
          category: "Светри",
          name: "Свитер-жилет",
          description: "Oversize свитер с укороченным рукавом. Ткань: трикотаж (60% шерсть, 20% акрил, 10% вискоза, 10% эластан).",
          colors: ["черный"],
        }
      }
    },

    // {
    //   id: 39,
    //   price: 2800,
    //   isTop: false,
    //   isSpecialOffer: true,
    //   discountPrice: 2250,
    //   sku: "12353",
    //   color: "caramel",
    //   size: "XS S M L XL",
    //   category: "Skirts",
    //   image: "/Skirts/A-line Leather Skirt/4.avif",
    //   images: [
    //     "/Skirts/A-line Leather Skirt/2.avif", 
    //     "/Skirts/A-line Leather Skirt/3.avif", 
    //     "/Skirts/A-line Leather Skirt/1.avif", 
    //     "/Skirts/A-line Leather Skirt/5.avif"
    //   ],
      
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       category: "Skirts",
    //       name: "A-line Leather Skirt",
    //       description: "Maxi-length A-line skirt with a high waist and a belt. Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
    //       colors: ["caramel"],
    //     },
    //     FR: {
    //       category: "Jupes",
    //       name: "Jupe en cuir A-line",
    //       description: "Jupe longue A-line à taille haute avec ceinture. Tissu : cuir écologique de haute qualité sur une base en daim (stretch, ne se fissure pas).",
    //       colors: ["caramel"],
    //     },
    //     UA: {
    //       category: "Спідниці",
    //       name: "Шкіряна спідниця А-силуету",
    //       description: "Спідниця максі довжини А-силуету на високій посадці із поясом. Тканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )",
    //       colors: ["карамель"],
    //     },
    //     RU: {
    //       category: "Юбки",
    //       name: "Кожаная юбка А-силуэта",
    //       description: "Юбка макси длины А-силуэта на высокой посадке с поясом. Ткань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
    //       colors: ["карамель"],
    //     }
    //   }
    // },

    {
      id: 40,
      price: 1250,
      isTop: false,
      // isSpecialOffer: true,
      //  discountPrice: 1063,
      sku: "54321",
      color: "beige",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Ribbed Golf/2.avif",
      images: [
        "/Sweaters/Ribbed Golf/1.avif",
        "/Sweaters/Ribbed Golf/3.avif",
        "/Sweaters/Ribbed Golf/4.avif",
        "/Sweaters/Ribbed Golf/5.avif",
        "/Sweaters/Ribbed Golf/6.avif",
        "/Sweaters/Ribbed Golf/7.avif",
        "/Sweaters/Ribbed Golf/8.avif",
        "/Sweaters/Ribbed Golf/9.avif",
        "/Sweaters/Ribbed Golf/10.avif",
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Ribbed Golf",
          description: "Basic ribbed golf for everyday wear and any outfit. Fabric: ribbed knit.",
          colors: ["beige", "olive"],
        },
        FR: {
          category: "Pulls",
          name: "Golf côtelé",
          description: "Golf côtelé basique pour un usage quotidien et pour n'importe quelle tenue. Tissu : tricot côtelé.",
          colors: ["beige", "olive"],
        },
        UA: {
          category: "Светри",
          name: "Гольф у рубчик",
          description: "Базовий гольф у рубчик на кожен день і під будь-який аутфіт. Тканина: трикотаж у рубчик.",
          colors: ["бежевий", "оливка"],

        },
        RU: {
          category: "Светри",
          name: "Гольф в рубчик",
          description: "Базовый гольф в рубчик на каждый день и под любой аутфит. Ткань: трикотаж в рубчик.",
          colors : ["бежевый", "оливка"],

        }
      }
    },
    
    {
      id: 41,
      price: 1500,
      isTop: false,
      // isSpecialOffer: true,
      // discountPrice: 1275,
      sku: "65432",
      color: "молоко",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Draped Golf/9.avif",
      images: [
        "/Sweaters/Draped Golf/2.avif",
        "/Sweaters/Draped Golf/3.avif",
        "/Sweaters/Draped Golf/4.avif",
        "/Sweaters/Draped Golf/5.avif",
        "/Sweaters/Draped Golf/6.avif",
        "/Sweaters/Draped Golf/7.avif",
        "/Sweaters/Draped Golf/8.avif",
        "/Sweaters/Draped Golf/1.avif",
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Draped Golf",
          description: "Soft draped golf with sleeve slits. Fabric: 50% cashmere, 28% polyester, 28% nylon.",
          colors: ["молоко", "сірий"],
        },
        FR: {
          category: "Pulls",
          name: "Golf drapé",
          description: "Golf drapé doux avec fentes sur les manches. Tissu : 50% cachemire, 28% polyester, 28% nylon.",
          colors: ["laite", "gris"],
        },
        UA: {
          category: "Светри",
          name: "Гольф у драпіровку",
          description: "Мʼякий гольф у драпіровку із розрізами на рукавчиках. Тканина: 50% кашемір, 28% поліестер, 28% нейлон.",
          colors: ["молоко", "сірий"],
        },
        RU: {
          category: "Светри",
          name: "Гольф в драпировку",
          description: "Мягкий гольф в драпировку с разрезами на рукавах. Ткань: 50% кашемир, 28% полиэстер, 28% нейлон.",
          colors: ["молоко", "сірий"],
        }
      }
    },
    
    {
      id: 42,
      price: 1500,
      isTop: false,
      // isSpecialOffer: true,
      // discountPrice: 1275,
      sku: "76543",
      color: "чорний",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/V-Neck Golf/4.avif",
      images: [
        "/Sweaters/V-Neck Golf/2.avif",
        "/Sweaters/V-Neck Golf/3.avif",
        "/Sweaters/V-Neck Golf/1.avif",
        "/Sweaters/V-Neck Golf/5.avif",
        "/Sweaters/V-Neck Golf/6.avif",
        "/Sweaters/V-Neck Golf/7.avif",
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "V-Neck Golf",
          description: "Soft V-neck golf with sleeve slits. Fabric: 50% cashmere, 28% polyester, 28% nylon.",
          colors: ["чорний", "сірий"],
        },
        FR: {
          category: "Pulls",
          name: "Golf à col en V",
          description: "Golf doux à col en V avec fentes sur les manches. Tissu : 50% cachemire, 28% polyester, 28% nylon.",
          colors: ["noir", "gris"],
        },
        UA: {
          category: "Светри",
          name: "Гольф із V-горлом",
          description: "Мʼякий гольф із V-горлом і розрізами на рукавах. Тканина: 50% кашемір, 28% поліестер, 28% нейлон.",
          colors: ["чорний", "сірий"],
        },
        RU: {
          category: "Светри",
          name: "Гольф с V-горлом",
          description: "Мягкий гольф с V-горлом и разрезами на рукавах. Ткань: 50% кашемир, 28% полиэстер, 28% нейлон.",
          colors: ["чёрный", "синий"],
        }
      }
    },

    
 ];
  export default products;
  