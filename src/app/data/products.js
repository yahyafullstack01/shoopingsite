const products = [

      {
      id: 13,
      price: 3700,
      sku: "12345",
      color: "beige",
      size: "XS S M L XL",
      category: "Outerwear",
      image: "/Outerwear/Твідовий бомбер/1.avif",
      images: ["/Outerwear/Твідовий бомбер/2.avif", "/Outerwear/Твідовий бомбер/3.avif", "/Outerwear/Твідовий бомбер/4.avif",
              ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Outerwear",
          name: "Tweed bomber jacket",
          description: "Quilted bomber jacket with high-quality lining and two pockets",
          colors: ["graphite"], 
        },
        FR: {
          category: "Vêtements d'extérieur",
          name: "Blouson aviateur en tweed",
          description: "Bomber matelassé avec doublure de qualité et deux poches",
          colors: ["graphite"],
        },
        UA: {
          category: "Верхній одяг",
          name: "Твідовий бомбер",
          description: "Стьоганий бомбер із якісною підкладкою та двома кишенями",
          colors: ["графіт"],
        }
      }
    },

  { id: 1,
    price: 3170,
    isTop: false,
    sku: "12345",
    size: "XS S M L XL",
    category: "Costumes",
    image:"/Costumes/Woolen suit with skirt/0.avif",
    images: ["/Costumes/Woolen suit with skirt/0.avif", 
       {
         type: "video",
         src: "/Costumes/Woolen suit with skirt/IMG_4440.mp4",
         poster: "/Costumes/Woolen suit with skirt/1.avif"
       },
      "/Costumes/Woolen suit with skirt/10.avif",
      "/Costumes/Woolen suit with skirt/11.avif",
      "/Costumes/Woolen suit with skirt/12.avif",
      "/Costumes/Woolen suit with skirt/13.avif",
      "/Costumes/Woolen suit with skirt/14.avif",
      "/Costumes/Woolen suit with skirt/15.avif",
      "/Costumes/Woolen suit with skirt/16.avif",
      "/Costumes/Woolen suit with skirt/17.avif",
      "/Costumes/Woolen suit with skirt/18.avif",
      "/Costumes/Woolen suit with skirt/19.avif",
      "/Costumes/Woolen suit with skirt/20.avif",
      "/Costumes/Woolen suit with skirt/21.avif",
      "/Costumes/Woolen suit with skirt/22.avif",
    ],
    sizes: ["XS", "S" , "M" , "L" , "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Woolen suit with skirt",
        description: "Sweater + pencil skirt. Composition: 75% natural wool, soft, does not prick the body.",
        color: "red",
        colors: ["graphite","gray","Powder"]
      },
      FR: {
        category: "Costumes",
        name: "Costume en laine avec jupe",
        description: "Pull + jupe crayon. Composition: 75% laine naturelle, douce, ne pique pas la peau.",
        color: "rouge",
        colors: ["camel", "graphite", "gris","Poudre"]
      },
      UA: {
        category: "Костюми",
        name: "Вовняний костюм зі спідницею",
        description: "Светр + олівець спідниця. Склад: 75% натуральної вовни, м'яка, не колеться.",
        color: "червоний",
        colors: ["графітовий","Сірий","Пудра"]
      }
    }
  },

    {
    id: 2,
    price: 3710,
    isTop: false,
    sku: "12345",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Wool suit with trousers/1.avif",
    images: ["/Costumes/Wool suit with trousers/2.avif",
        {
      type: "video",
      src: "/Costumes/Wool suit with trousers/IMG_4442.mp4",
      poster: "/Costumes/Wool suit with trousers/1.avif",
    },"/Costumes/Wool suit with trousers/3.avif",
      "/Costumes/Wool suit with trousers/4.avif","/Costumes/Wool suit with trousers/5.avif",
      "/Costumes/Wool suit with trousers/7.avif", "/Costumes/Wool suit with trousers/8.avif", "/Costumes/Wool suit with trousers/9.avif",
      "/Costumes/Wool suit with trousers/10.avif",
      "/Costumes/Wool suit with trousers/11.avif",
      "/Costumes/Wool suit with trousers/12.avif",
    ],
    sizes: ["XS", "S" , "M" , "L" , "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Woolen suit with trousers",
        description: "Jumper + palazzo pants\nComposition: 75% natural wool, soft, does not prick the body.",
        color: "blue",
        colors: ["graphite", "gray"]
      },
      FR: {
        category: "Costumes",
        name: "Costume en laine avec pantalon",
        description: "Pull + pantalon palazzo\nComposition: 75% laine naturelle, douce, ne pique pas la peau.",
        color: "bleu",
        colors: ["graphite", "gris"]
      },
      UA: {
        category: "Костюми",
        name: "Вовняний костюм із брюками",
        description: "Джемпер + палаццо штани\nСклад: 75% натуральної вовни, м'яка, не колеться.",
        color: "синій",
        colors: ["графітовий","сірий"]
      }
    }
  },

    {
  id: 171,
  price: 2300,
  isTop: false,
  isNew: true,
  sku: "98824",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Satin Slip Dress/1.avif",
  images: [
    "/Dress/Satin Slip Dress/2.avif",
      {
      type: "video",
      src: "/Dress/Satin Slip Dress/IMG_8623.mp4",
      poster: "/Dress/Satin Slip Dress/1.avif",
    },
    "/Dress/Satin Slip Dress/3.avif",
    "/Dress/Satin Slip Dress/4.avif",
    "/Dress/Satin Slip Dress/5.avif",
    "/Dress/Satin Slip Dress/6.avif",
    "/Dress/Satin Slip Dress/7.avif",
    "/Dress/Satin Slip Dress/8.avif",
    "/Dress/Satin Slip Dress/9.avif",
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
      colors: ["khaki", "black"]
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
      colors: ["kaki", "noir"]
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
      colors: ["хакі", "чорна"]
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
      colors: ["хаки", "чёрная"]
    }
  }
},

  {
    id: 4,
    price: 3100,
    isTop: false,
    sku: "12345",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Woolen trapeze dress/1.avif",
    images: [
    
      "/Dress/Woolen trapeze dress/2.avif", "/Dress/Woolen trapeze dress/3.avif",
      {
        type: "video",
        src: "/Dress/Woolen trapeze dress/IMG_6176.mp4",
        poster: "/Dress/Woolen trapeze dress/1.avif"
      },
      "/Dress/Woolen trapeze dress/4.avif",
      "/Dress/Woolen trapeze dress/5.avif",
      "/Dress/Woolen trapeze dress/6.avif",
      "/Dress/Woolen trapeze dress/9.avif",
      "/Dress/Woolen trapeze dress/8.avif",
      "/Dress/Woolen trapeze dress/11.avif",
      "/Dress/Woolen trapeze dress/12.avif",
      "/Dress/Woolen trapeze dress/13.avif",
      "/Dress/Woolen trapeze dress/14.avif",
      "/Dress/Woolen trapeze dress/15.avif",
      "/Dress/Woolen trapeze dress/16.avif",
      "/Dress/Woolen trapeze dress/17.avif",
      "/Dress/Woolen trapeze dress/18.avif",
      "/Dress/Woolen trapeze dress/19.avif",
      "/Dress/Woolen trapeze dress/20.avif",
    
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Woolen trapeze dress",
        description: "Trapeze dress with a pronounced belt\nComposition: 75% natural wool, soft, does not stick to the body.",
        color: "red",
        colors: ["jeans","gray","marsala", "eggplant"]
      },
      FR: {
        category: "Robes",
        name: "Robe trapèze en laine",
        description: "Robe trapèze avec ceinture marquée\nComposition: 75% laine naturelle, douce, ne colle pas à la peau.",
        color: "rouge",
        colors: ["jeans","gris","marsala", "eggplant"]
      },
      UA: {
        category: "Сукні",
        name: "Вовняна сукня трапеція",
        description: "Трапецеїдна сукня з виразним поясом\nСклад: 75% натуральної вовни, м'яка, не прилипає до тіла.",
        color: "червоний",
        colors: ["джинсовий", "сірий", " марсала", "баклажан"]
      }
    }
  },

  { 
      id: 30,
      price: 2100,
      isTop: false, // Топ продукт
      sku: "12346",
      
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
    id: 102,
    price: 2100,
    isTop: true,
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
    id: 95,
    price: 2400,
    isTop: false,
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
    isTop: true,
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

    {
  id: 197,
  price: 3150,
  isTop: false,
  isNew: true,
  sku: "99339",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Wool Cardigan/1.avif",
  images: [
    "/Jackets/Wool Cardigan/2.avif",
    "/Jackets/Wool Cardigan/3.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "Wool Cardigan",
      description: [
        "Loose-fit wool cardigan with a belt that highlights the waist.",
        "Minimalist design with clean lines makes it easy to combine with basic tops and turtlenecks.",
        "Fabric: Premium natural wool ensuring warmth, coziness, and a pleasant feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "• Cardigan: V-neckline",
        "• Convenient pockets"
      ],
      colors: ["graphite"]
    },
    FR: {
      category: "Vestes",
      name: "Cardigan en laine",
      description: [
        "Cardigan ample en laine avec une ceinture qui souligne la taille.",
        "Sa ligne épurée sans détails superflus le rend facile à associer avec des tops basiques et des cols roulés.",
        "Tissu : laine naturelle premium offrant chaleur, confort et toucher agréable.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "• Cardigan : encolure en V",
        "• Poches pratiques"
      ],
      colors: ["graphite"]
    },
    UA: {
      category: "Жакети",
      name: "Вовняний кардиган",
      description: [
        "Кардиган вільного крою з поясом, який підкреслює талію.",
        "Має чисту лінію без зайвих деталей, тому легко поєднується з базовими топами та водолазками.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "• Кардиган: V-подібний виріз",
        "• Зручні кишені"
      ],
      colors: ["графіт"]
    },
    RU: {
      category: "Жакеты",
      name: "Шерстяной кардиган",
      description: [
        "Кардиган свободного кроя с поясом, подчёркивающим талию.",
        "Имеет чистую линию без лишних деталей, поэтому легко сочетается с базовыми топами и водолазками.",
        "Ткань: натуральная премиальная шерсть, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "• Кардиган: V-образный вырез",
        "• Удобные карманы"
      ],
      colors: ["графит"]
    }
  }
},

    {
  id: 196,
  price: 5210,
  isTop: false,
  isNew: true,
  sku: "99338",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Cardigan Suit/1.avif",
  images: [
    "/Costumes/Cardigan Suit/2.avif",
    "/Costumes/Cardigan Suit/3.avif",
    "/Costumes/Cardigan Suit/4.avif",
    "/Costumes/Cardigan Suit/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Suits",
      name: "Cardigan Suit",
      description: [
        "A minimalist suit in a contemporary style for modern women.",
        "Includes a straight wrap cardigan and wide-leg high-waist trousers.",
        "Perfect for both office looks and relaxed city outfits.",
        "Fabric: Premium natural wool for warmth, coziness, and a pleasant feel.",
        "[ Composition: 75% wool ]",
        "Details:",
        "• Cardigan: V-neckline, convenient pockets.",
        "• Trousers: High waist, elongated silhouette."
      ],
      colors: ["graphite"]
    },
    FR: {
      category: "Costumes",
      name: "Costume avec cardigan",
      description: [
        "Un costume minimaliste au style contemporain pour les femmes modernes.",
        "Composé d’un cardigan droit croisé et d’un pantalon large taille haute.",
        "Idéal pour le bureau comme pour des tenues décontractées en ville.",
        "Tissu : laine naturelle premium offrant chaleur, confort et toucher agréable.",
        "[ Composition : 75% laine ]",
        "Détails :",
        "• Cardigan : encolure en V, poches pratiques.",
        "• Pantalon : taille haute, silhouette allongée."
      ],
      colors: ["graphite"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм із кардиганом",
      description: [
        "Лаконічний костюм у мінімалістичному стилі для сучасних дівчат.",
        "Складається з прямого кардигану на запах та широких брюк із високою посадкою.",
        "Ідеально підходить як для офісу, так і для розслаблених міських образів.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]",
        "Деталі:",
        "• Кардиган: V-подібний виріз, зручні кишені.",
        "• Брюки: Висока посадка, подовжений силует."
      ],
      colors: ["графіт"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм с кардиганом",
      description: [
        "Лаконичный костюм в минималистичном стиле для современных девушек.",
        "Состоит из прямого кардигана на запах и широких брюк с высокой посадкой.",
        "Идеально подходит как для офиса, так и для расслабленных городских образов.",
        "Ткань: натуральная премиальная шерсть, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]",
        "Детали:",
        "• Кардиган: V-образный вырез, удобные карманы.",
        "• Брюки: высокая посадка, удлинённый силуэт."
      ],
      colors: ["графит"]
    }
  }
},

    {
  id: 195,
  price: 2250,
  isTop: false,
  isNew: true,
  sku: "99337",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Lui Skirt/1.avif",
  images: [
    "/Skirts/Lui Skirt/2.avif",
    "/Skirts/Lui Skirt/3.avif",
    "/Skirts/Lui Skirt/4.avif",
    "/Skirts/Lui Skirt/5.avif",
    "/Skirts/Lui Skirt/6.avif",
    "/Skirts/Lui Skirt/7.avif",
    "/Skirts/Lui Skirt/8.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Lui Skirt",
      description: [
        "A straight midi skirt with a comfortable waistband.",
        "A minimalist model that adds elegance to your look and pairs easily with heels, chunky boots, or sneakers.",
        "Fabric: Premium natural wool for warmth, coziness, and pleasant tactile sensations.",
        "[ Composition: 75% wool ]"
      ],
      colors: ["graphite", "grey"]
    },
    FR: {
      category: "Jupes",
      name: "Jupe «Lui»",
      description: [
        "Jupe droite longueur midi avec une ceinture confortable.",
        "Un modèle minimaliste qui apporte de l’élégance et se combine facilement avec des talons, des bottes massives ou des baskets.",
        "Tissu : laine naturelle premium offrant chaleur, confort et toucher agréable.",
        "[ Composition : 75% laine ]"
      ],
      colors: ["graphite", "gris"]
    },
    UA: {
      category: "Спідниці",
      name: "Спідниця «Lui»",
      description: [
        "Пряма спідниця довжини міді зі зручним поясом.",
        "Лаконічна модель, яка додає образу витонченості й легко поєднується як із взуттям на підборах, так і з масивними чоботами чи кросівками.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]"
      ],
      colors: ["графіт", "сірий"]
    },
    RU: {
      category: "Юбки",
      name: "Юбка «Lui»",
      description: [
        "Пряма юбка миди с удобным поясом.",
        "Лаконичная модель, которая добавляет образу изысканности и легко сочетается как с обувью на каблуке, так и с массивными ботинками или кроссовками.",
        "Ткань: натуральная премиальная шерсть, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]"
      ],
      colors: ["графит", "серый"]
    }
  }
},

{
  id: 194,
  price: 2100,
  isTop: false,
  isNew: true,
  sku: "99336",
  size: "XS S M L XL",
  category: "Tops",
  image: "/Top/Lui Jumper/1.avif",
  images: [
    "/Top/Lui Jumper/2.avif",
    "/Top/Lui Jumper/3.avif",
    "/Top/Lui Jumper/4.avif",
    "/Top/Lui Jumper/5.avif",
    "/Top/Lui Jumper/6.avif",
    "/Top/Lui Jumper/7.avif",
    "/Top/Lui Jumper/8.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Tops",
      name: "Lui Jumper",
      description: [
        "The loose silhouette with a V-neckline makes the jumper both comfortable and feminine.",
        "The soft texture provides a sense of coziness, while the minimalist cut allows you to pair it with both skirts and trousers.",
        "Fabric: Premium natural wool for warmth, comfort, and pleasant tactile sensations.",
        "[ Composition: 75% wool ]"
      ],
      colors: ["grey", "graphite"]
    },
    FR: {
      category: "Tops",
      name: "Pull «Lui»",
      description: [
        "La coupe ample avec un décolleté en V rend le pull à la fois confortable et féminin.",
        "La texture douce procure une sensation de confort, tandis que la coupe minimaliste permet de l'associer aussi bien avec des jupes que des pantalons.",
        "Tissu : laine naturelle premium pour chaleur, confort et toucher agréable.",
        "[ Composition : 75% laine ]"
      ],
      colors: ["gris", "graphite"]
    },
    UA: {
      category: "Топи",
      name: "Джемпер «Lui»",
      description: [
        "Вільний силует із V-подібним вирізом робить джемпер комфортним та жіночним.",
        "М’яка фактура дарує відчуття затишку, а мінімалістичний крій дозволяє поєднувати його як зі спідницею, так і з брюками.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]"
      ],
      colors: ["сірий", "графіт"]
    },
    RU: {
      category: "Топы",
      name: "Джемпер «Lui»",
      description: [
        "Свободный силуэт с V-образным вырезом делает джемпер комфортным и женственным.",
        "Мягкая фактура дарит ощущение уюта, а минималистичный крой позволяет сочетать его как с юбкой, так и с брюками.",
        "Ткань: натуральная премиальная шерсть, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]"
      ],
      colors: ["серый", "графит"]
    }
  }
},

{
  id: 193,
  price: 2060,
  isTop: false,
  isNew: true,
  sku: "99335",
  size: "XS S M L XL",
  category: "Pants",
  image: "/Pants/Lui Pants/1.avif",
  images: [
    "/Pants/Lui Pants/2.avif",
    "/Pants/Lui Pants/3.avif",
    "/Pants/Lui Pants/4.avif",
    "/Pants/Lui Pants/5.avif",
    "/Pants/Lui Pants/6.avif",
    "/Pants/Lui Pants/7.avif",
    "/Pants/Lui Pants/8.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Pants",
      name: "Lui Pants",
      description: [
        "Straight classic trousers with a high waist and sharp crease.",
        "The elongated silhouette visually lengthens the figure, while the universal grey shade is easy to combine with any wardrobe tones.",
        "Fabric: Premium natural wool for warmth, comfort, and pleasant tactile sensations.",
        "[ Composition: 75% wool ]"
      ],
      colors: ["grey", "graphite"]
    },
    FR: {
      category: "Pantalons",
      name: "Pantalon «Lui»",
      description: [
        "Pantalon classique droit avec taille haute et pli marqué.",
        "La silhouette allongée affine visuellement la silhouette, tandis que la teinte grise universelle se marie facilement avec toutes les couleurs de la garde-robe.",
        "Tissu : laine naturelle premium pour chaleur, confort et toucher agréable.",
        "[ Composition : 75% laine ]"
      ],
      colors: ["gris", "graphite"]
    },
    UA: {
      category: "Брюки",
      name: "Брюки «Lui»",
      description: [
        "Прямі класичні брюки з високою посадкою та чіткою стрілкою.",
        "Подовжений силует візуально витягує фігуру, а універсальний сірий колір легко комбінується з будь-якими відтінками гардеробу.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[ Склад: 75% вовни ]"
      ],
      colors: ["сірий", "графіт"]
    },
    RU: {
      category: "Брюки",
      name: "Брюки «Lui»",
      description: [
        "Прямые классические брюки с высокой посадкой и чёткой стрелкой.",
        "Удлинённый силуэт визуально вытягивает фигуру, а универсальный серый цвет легко комбинируется с любыми оттенками гардероба.",
        "Ткань: натуральная премиальная шерсть, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[ Состав: 75% шерсти ]"
      ],
      colors: ["серый", "графит"]
    }
  }
},

    {
  id: 192,
  price: 1900,
  isTop: false,
  isNew: true,
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
  isNew: true,
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
      colors: ["graphite", "grey"]
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
      colors: ["графіт", "сірий"]
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
  isNew: true,
  sku: "99332",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Trench Suit/1.avif",
  images: [
    "/Costumes/Trench Suit/2.avif",
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
  isTop: true,
  isNew: true,
  sku: "99331",
  size: "XS S M L XL",
  category: "Sweaters",
  image: "/Sweaters/Lurex Sweater/1.avif",
  images: [
    "/Sweaters/Lurex Sweater/2.avif",
    "/Sweaters/Lurex Sweater/3.avif",
    "/Sweaters/Lurex Sweater/4.avif",
    "/Sweaters/Lurex Sweater/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Sweaters",
      name: "Lurex Sweater",
      description: [
        "A stylish accent for your wardrobe — a loose sweater made of soft yarn with delicate lurex. It combines comfort with a subtle shimmer, creating effortless elegance.",
        "Fabric: Wool knit with lurex. [Composition: 65% wool]",
        "Details:",
        "• Relaxed oversize silhouette suitable for all body types.",
        "• Deep V-neckline that beautifully opens the neck and allows for layered styling.",
        "• Long dropped sleeves for a modern, laid-back look."
      ],
      colors: ["black"]
    },
    FR: {
      category: "Pulls",
      name: "Pull en lurex",
      description: [
        "Un accent élégant dans votre garde-robe — un pull ample en fil doux avec un délicat lurex. Il allie confort et léger éclat pour une élégance décontractée.",
        "Tissu : tricot de laine avec lurex. [Composition : 65% laine]",
        "Détails :",
        "• Coupe oversize décontractée adaptée à toutes les morphologies.",
        "• Profond col en V qui met en valeur le cou et permet des superpositions stylées.",
        "• Manches longues tombantes pour un style moderne et détendu."
      ],
      colors: ["noir"]
    },
    UA: {
      category: "Светри",
      name: "Светр із люрексом",
      description: [
        "Стильний акцент у вашому гардеробі — вільний светр із м’якої пряжі з делікатним люрексом. Він поєднує комфорт і легкий блиск, створюючи ефект невимушеної елегантності.",
        "Тканина: Вовняний трикотаж із люрексом. [Склад: 65% вовни]",
        "Деталі:",
        "• Вільний oversize силует, що підходить для будь-якого типу фігури.",
        "• Глибокий V-подібний виріз, який красиво відкриває шию та дозволяє створювати багатошарові образи.",
        "• Довгі спущені рукави для розслабленого, сучасного стилю."
      ],
      colors: ["чорний"]
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
      colors: ["чёрный"]
    }
  }
},

{
  id: 188,
  price: 2060,
  isBottom: true,
  isNew: true,
  sku: "99330",
  size: "XS S M L XL",
  category: "Pants",
  image: "/Pants/Beige Pants/1.avif",
  images: [
    "/Pants/Beige Pants/2.avif",
    "/Pants/Beige Pants/3.avif",
    "/Pants/Beige Pants/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Pants",
      name: "Beige Pants",
      description: [
        "Elegant and comfortable pants with a high waist. Their relaxed cut visually elongates the legs and works equally well for business and casual outfits.",
        "Fabric: Premium-quality natural wool for warmth, coziness, and pleasant tactile sensations. [Composition: 75% wool]",
        "Details:",
        "• High waist with an elasticated waistband for comfort.",
        "• Wide straight cut with neat decorative pleats that elongate the legs."
      ],
      colors: ["beige"]
    },
    FR: {
      category: "Pantalons",
      name: "Pantalon «Beige»",
      description: [
        "Pantalon élégant et confortable avec taille haute. Sa coupe ample allonge visuellement les jambes et convient aussi bien aux tenues de travail qu'aux looks décontractés.",
        "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et douceur au toucher. [Composition : 75% laine]",
        "Détails :",
        "• Taille haute avec ceinture élastiquée pour plus de confort.",
        "• Coupe droite et large avec plis décoratifs nets qui allongent les jambes."
      ],
      colors: ["beige"]
    },
    UA: {
      category: "Брюки",
      name: "Брюки «Beige»",
      description: [
        "Елегантні та комфортні брюки із високою посадкою. Мають вільний крій, візуально подовжують ноги та підходять як для ділових, так і для розслаблених поєднань.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття. [Склад: 75% вовни]",
        "Деталі:",
        "• Брюки: висока посадка з поясом на резинці для комфорту.",
        "• Широкий прямий крій із чіткими декоративними стрілками, що подовжують ноги."
      ],
      colors: ["бежевий"]
    },
    RU: {
      category: "Брюки",
      name: "Брюки «Beige»",
      description: [
        "Элегантные и комфортные брюки с высокой посадкой. Свободный крой визуально удлиняет ноги и подходит как для деловых, так и для расслабленных образов.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения. [Состав: 75% шерсти]",
        "Детали:",
        "• Брюки: высокая посадка с поясом на резинке для комфорта.",
        "• Широкий прямой крой с четкими декоративными стрелками, визуально удлиняющими ноги."
      ],
      colors: ["бежевый"]
    }
  }
},

{
  id: 187,
  price: 2100,
  isTop: true,
  isNew: true,
  sku: "99329",
  size: "XS S M L XL",
  category: "Tops",
  image: "/Top/Beige Jumper/1.avif",
  images: [
    "/Top/Beige Jumper/2.avif",
    "/Top/Beige Jumper/3.avif",
    "/Top/Beige Jumper/4.avif",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Tops",
      name: "Beige Jumper",
      description: [
        "Minimalist jumper with a boat neckline and patch pockets. Simple and stylish, it fits both classic and casual looks.",
        "Fabric: Premium-quality natural wool for warmth, coziness, and pleasant tactile sensations. [Composition: 75% wool]",
        "Details:",
        "• Straight silhouette with long sleeves.",
        "• Boat neckline with a small front slit.",
        "• Two patch pockets as an accent detail."
      ],
      colors: ["beige"]
    },
    FR: {
      category: "Tops",
      name: "Pull «Beige»",
      description: [
        "Pull minimaliste avec encolure bateau et poches plaquées. Sobre et élégant, il convient aux tenues classiques comme aux looks casual.",
        "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et douceur au toucher. [Composition : 75% laine]",
        "Détails :",
        "• Coupe droite avec manches longues.",
        "• Encolure bateau avec petite fente devant.",
        "• Deux poches plaquées comme détail accentué."
      ],
      colors: ["beige"]
    },
    UA: {
      category: "Топи",
      name: "Джемпер «Beige»",
      description: [
        "Мінімалістичний джемпер із човниковим вирізом та накладними кишенями. Лаконічний і стильний, він пасує до класичних та casual образів.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття. [Склад: 75% вовни]",
        "Деталі:",
        "• Джемпер: прямий силует, довгий рукав.",
        "• Горловина човник із невеликим розрізом спереду.",
        "• Дві накладні кишені як акцент."
      ],
      colors: ["бежевий"]
    },
    RU: {
      category: "Топы",
      name: "Джемпер «Beige»",
      description: [
        "Минималистичный джемпер с вырезом-лодочкой и накладными карманами. Лаконичный и стильный, подходит как для классических, так и для casual образов.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения. [Состав: 75% шерсти]",
        "Детали:",
        "• Джемпер: прямой силуэт, длинный рукав.",
        "• Вырез-лодочка с небольшим разрезом спереди.",
        "• Два накладных кармана как акцент."
      ],
      colors: ["бежевый"]
    }
  }
},

    {
  id: 186,
  price: 4160,
  isTop: false,
  isNew: true,
  sku: "99328",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Beige Suit/1.avif",
  images: [
    "/Costumes/Beige Suit/2.avif",
    "/Costumes/Beige Suit/3.avif",
    "/Costumes/Beige Suit/4.avif",
    "/Costumes/Beige Suit/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Beige Suit",
      description: [
        "Stylish and comfortable suit, perfect for the rhythm of city life. With its minimalistic design and noble shade, it looks both elegant and effortless.",
        "The set can be worn together as a total look or separately: pair the jumper with jeans or skirts, and the trousers with classic shirts or t-shirts.",
        "Fabric: Premium-quality natural wool for warmth, comfort, and pleasant tactile sensations. [Composition: 75% wool]",
        "Details:",
        "• Jumper: straight silhouette, long sleeve.",
        "• Boat neckline with a small front slit.",
        "• Two patch pockets as an accent detail.",
        "• Trousers: high-waisted with an elastic waistband for comfort.",
        "• Wide straight cut with sharp decorative pleats that elongate the legs."
      ],
      colors: ["beige"]
    },
    FR: {
      category: "Costumes",
      name: "Costume «Beige»",
      description: [
        "Un costume élégant et confortable, idéal pour le rythme de vie citadin. Grâce à son design épuré et sa teinte noble, il paraît à la fois raffiné et décontracté.",
        "Peut être porté en total look ou séparément : pull avec jeans ou jupes, pantalon avec chemises classiques ou t-shirts.",
        "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et douceur au toucher. [Composition : 75% laine]",
        "Détails :",
        "• Pull : coupe droite, manches longues.",
        "• Encolure bateau avec petite fente devant.",
        "• Deux poches plaquées en détail accentué.",
        "• Pantalon : taille haute avec ceinture élastique pour plus de confort.",
        "• Coupe droite et large avec plis décoratifs qui allongent les jambes."
      ],
      colors: ["beige"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм «Beige»",
      description: [
        "Стильний і зручний костюм, який ідеально підходить для міського темпу життя. Завдяки лаконічному дизайну та благородному відтінку він виглядає водночас елегантно та невимушено.",
        "Комплект можна носити разом як total look або розділяти: джемпер поєднувати з джинсами чи спідницями, брюки — зі строгими сорочками чи футболками.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття. [Склад: 75% вовни]",
        "Деталі:",
        "• Джемпер: прямий силует, довгий рукав.",
        "• Горловина човник із невеликим розрізом спереду.",
        "• Дві накладні кишені як акцент.",
        "• Брюки: висока посадка з поясом на резинці для комфорту.",
        "• Широкий прямий крій із чіткими декоративними стрілками, що подовжують ноги."
      ],
      colors: ["бежевий"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм «Beige»",
      description: [
        "Стильный и удобный костюм, идеально подходящий для городского ритма жизни. Благодаря лаконичному дизайну и благородному оттенку он выглядит одновременно элегантно и непринуждённо.",
        "Комплект можно носить вместе как total look или раздельно: джемпер сочетать с джинсами или юбками, брюки — с классическими рубашками или футболками.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения. [Состав: 75% шерсти]",
        "Детали:",
        "• Джемпер: прямой силуэт, длинный рукав.",
        "• Вырез-лодочка с небольшим разрезом спереди.",
        "• Два накладных кармана как акцент.",
        "• Брюки: высокая посадка с поясом на резинке для комфорта.",
        "• Широкий прямой крой с чёткими декоративными стрелками, удлиняющими ноги."
      ],
      colors: ["бежевый"]
    }
  }
},

{
  id: 185,
  price: 2250,
  isTop: false,
  isNew: true,
  sku: "99327",
  size: "XS S M L XL",
  category: "Skirts",
  image: "/Skirts/Mocha Skirt/1.avif",
  images: [
    "/Skirts/Mocha Skirt/2.avif",
    "/Skirts/Mocha Skirt/3.avif",
    "/Skirts/Mocha Skirt/4.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Skirts",
      name: "Mocha Skirt",
      description: [
        "Elegant wool midi skirt with a gentle flare. A versatile base that pairs perfectly with jumpers or classic blouses.",
        "Fabric: Premium-quality natural wool for warmth, comfort, and a pleasant tactile feel. [Composition: 75% wool]",
        "Details:",
        "• Midi length, gentle flare from the hips.",
        "• Visually elongates the silhouette, adding a feminine accent."
      ],
      colors: ["mocha"]
    },
    FR: {
      category: "Jupes",
      name: "Jupe «Mocha»",
      description: [
        "Élégante jupe midi en laine avec une légère évasée. Une base polyvalente qui se marie aussi bien avec des pulls que des chemisiers classiques.",
        "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et douceur au toucher. [Composition : 75% laine]",
        "Détails :",
        "• Longueur midi, légère évasée à partir des hanches.",
        "• Allonge visuellement la silhouette en ajoutant une touche féminine."
      ],
      colors: ["moka"]
    },
    UA: {
      category: "Спідниці",
      name: "Спідниця «Mocha»",
      description: [
        "Елегантна вовняна спідниця довжини міді з легким розкльошенням. Універсальна база, яка гармонійно виглядає як з джемперами, так і з класичними блузами.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття. [Склад: 75% вовни]",
        "Деталі:",
        "• Спідниця: довжина міді, легке розкльошення від стегон.",
        "• Візуально подовжує силует, створюючи жіночний акцент."
      ],
      colors: ["мокко"]
    },
    RU: {
      category: "Юбки",
      name: "Юбка «Mocha»",
      description: [
        "Элегантная шерстяная юбка миди с лёгким расклёшением. Универсальная база, гармонично смотрится как с джемперами, так и с классическими блузками.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения. [Состав: 75% шерсти]",
        "Детали:",
        "• Юбка: длина миди, лёгкое расклёшение от бёдер.",
        "• Визуально удлиняет силуэт, создавая женственный акцент."
      ],
      colors: ["мокко"]
    }
  }
},

{
  id: 184,
  price: 2100,
  isTop: true,
  isNew: true,
  sku: "99326",
  size: "XS S M L XL",
  category: "Tops",
  image: "/Top/Mocha Jumper/1.avif",
  images: [
    "/Top/Mocha Jumper/2.avif",
    "/Top/Mocha Jumper/3.avif",
    "/Top/Mocha Jumper/4.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Tops",
      name: "Mocha Jumper",
      description: [
        "A stylish and practical wool jumper with a straight cut, neckline slit, and patch pockets. Perfect for everyday looks during the cooler season.",
        "Fabric: Premium-quality natural wool for warmth, comfort, and a pleasant tactile feel. [Composition: 75% wool]",
        "Details:",
        "• Straight silhouette with long sleeves.",
        "• Two patch pockets as an accent detail."
      ],
      colors: ["mocha"]
    },
    FR: {
      category: "Hauts",
      name: "Jumper «Mocha»",
      description: [
        "Un pull en laine élégant et pratique, coupe droite, avec une fente à l’encolure et des poches plaquées. Idéal pour les looks quotidiens en saison fraîche.",
        "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et douceur au toucher. [Composition : 75% laine]",
        "Détails :",
        "• Coupe droite avec manches longues.",
        "• Deux poches plaquées comme détail accentué."
      ],
      colors: ["moka"]
    },
    UA: {
      category: "Топи",
      name: "Джемпер «Mocha»",
      description: [
        "Стильний і практичний джемпер із вовни, прямого крою, з розрізом по горловині та накладними кишенями. Ідеальний для повсякденних образів у прохолодний сезон.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття. [Склад: 75% вовни]",
        "Деталі:",
        "• Джемпер: прямий силует із довгим рукавом.",
        "• Дві накладні кишені як акцентна деталь."
      ],
      colors: ["мокко"]
    },
    RU: {
      category: "Топы",
      name: "Джемпер «Mocha»",
      description: [
        "Стильный и практичный шерстяной джемпер прямого кроя с разрезом по горловине и накладными карманами. Идеален для повседневных образов в прохладный сезон.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения. [Состав: 75% шерсти]",
        "Детали:",
        "• Джемпер: прямой силуэт с длинным рукавом.",
        "• Два накладных кармана как акцент."
      ],
      colors: ["мокко"]
    }
  }
},

{
  id: 183,
  price: 4350,
  isTop: false,
  isNew: true,
  sku: "99325",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Mocha/1.avif",
  images: [
    "/Costumes/Mocha/2.avif",
    "/Costumes/Mocha/3.avif",
    "/Costumes/Mocha/4.avif",
    "/Costumes/Mocha/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Mocha",
      description: [
        "An elegant ensemble that combines warmth and sophistication. The minimalist cut and noble wool texture create a modern ‘French chic’ style.",
        "The set can be worn as a total look or combined separately: the jumper with trousers or jeans, the skirt with a blouse or sweater.",
        "Fabric: Premium-quality natural wool for warmth, comfort, and a pleasant tactile feel. [Composition: 75% wool]",
        "Details:",
        "• Jumper: Straight silhouette with long sleeves, two patch pockets as an accent detail.",
        "• Skirt: Midi length with a slight flare from the hips, visually elongates the silhouette and adds femininity."
      ],
      colors: ["mocha"]
    },
    FR: {
      category: "Costumes",
      name: "Costume «Mocha»",
      description: [
        "Un ensemble raffiné qui allie chaleur et élégance. La coupe minimaliste et la texture noble de la laine créent un style moderne «chic français».",
        "Le set peut être porté en total look ou séparément : le pull avec un pantalon ou un jean, la jupe avec un chemisier ou un pull.",
        "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et douceur au toucher. [Composition : 75% laine]",
        "Détails :",
        "• Pull : coupe droite à manches longues, deux poches plaquées comme détail accentué.",
        "• Jupe : longueur midi avec légère évasement à partir des hanches, allonge visuellement la silhouette et souligne la féminité."
      ],
      colors: ["moka"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм «Mocha»",
      description: [
        "Витончений ансамбль, який поєднує тепло та елегантність. Лаконічний крій і благородна фактура вовни створюють сучасний образ у стилі «французький шик».",
        "Комплект можна носити як total look або комбінувати окремо: джемпер — із брюками чи джинсами, спідницю — з блузою або светром.",
        "Тканина: Натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття. [Склад: 75% вовни]",
        "Деталі:",
        "• Джемпер: прямий силует із довгим рукавом, дві накладні кишені як акцентна деталь.",
        "• Спідниця: довжина міді, легке розкльошення від стегон, візуально подовжує силует і створює жіночний акцент."
      ],
      colors: ["мокко"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм «Mocha»",
      description: [
        "Изысканный ансамбль, сочетающий тепло и элегантность. Лаконичный крой и благородная фактура шерсти создают современный образ в стиле «французский шик».",
        "Комплект можно носить как total look или комбинировать отдельно: джемпер — с брюками или джинсами, юбку — с блузой или свитером.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения. [Состав: 75% шерсти]",
        "Детали:",
        "• Джемпер: прямой силуэт с длинным рукавом, две накладные карманы как акцент.",
        "• Юбка: длина миди, лёгкое расклешение от бёдер, визуально удлиняет силуэт и подчёркивает женственность."
      ],
      colors: ["мокко"]
    }
  }
},

    
    {
      id: 20,
      price: 3100,
      isTop: false, // Not marked as a top product
      sku: "67890",
      
      size: "XS S M L XL",
      category: "Dresses",
      image: "/Dress/Emily Dress/6.avif",
      images: [
        "/Dress/Emily Dress/7.avif",
        "/Dress/Emily Dress/8.avif",
        "/Dress/Emily Dress/9.avif",
        "/Dress/Emily Dress/10.avif",
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Dresses",
          name: "Emily Dress",
          description: "Wool midi dress with a V-neck, shortened sleeves, and pockets.\nFabric: 80% wool, 20% polyester",
          color: "gray, camel",
          colors: ["gray"],
        },
        FR: {
          category: "Robes",
          name: "Robe « Emily »",
          description: "Robe midi en laine avec col en V, manches raccourcies et poches.\nTissu: 80% laine, 20% polyester",
          color: "gris, camel",
          colors: ["gris"],
        },
        UA: {
          category: "Сукнi",
          name: "Сукня «Emily»",
          description: "Вовняна сукня міді довжини із V-вирізом, вкороченими рукавами та кишенями.\nТканина: 80% вовна, 20% поліестер",
          color: "сірий, краватний",
          colors: ["сірий"],
        },
        RU: {
          category: "Платья",
          name: "Платье «Emily»",
          description: "Шерстяное платье миди длины с V-вырезом, укороченными рукавами и карманами.\nТкань: 80% шерсть, 20% полиэстер",
          color: "серый, краватный",
          colors: ["серый"],
        }
      }
    },

    {
      id: 26,
      price: 2800,
      isTop: false,
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
    id: 85,
    price: 2280,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1930,
    sku: "98805",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/JasmineShirt/1.avif",
    images: [
      "/Shirts/JasmineShirt/2.avif",
      "/Shirts/JasmineShirt/3.avif",
      "/Shirts/JasmineShirt/4.avif",
      "/Shirts/JasmineShirt/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Jasmine Shirt",
        description: "Long-staple 100% cotton muslin. A lightweight and soft-touch fabric.",
        colors: ["milk",]
      },
      FR: {
        category: "Chemises",
        name: "Chemise Jasmine",
        description: "Mousseline de coton 100% à longues fibres. Un tissu léger et doux au toucher.",
        colors: ["lait",]
      },
      UA: {
        category: "Сорочки",
        name: "Сорочка «Jasmine»",
        description: "Довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["молоко",]
      },
      RU: {
        category: "Сорочки",
        name: "Рубашка «Jasmine»",
        description: "Долговолокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь ткань.",
        colors: ["молоко",]
      }
    }
  },  

  {
  id: 182,
  price: 2800,
  isTop: false,
  isNew: true,
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
  isNew: true,
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
  id: 179,
  price: 3000,
  isTop: false,
  isNew: false,
  sku: "99321",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Distressed Hoodie Bomber/1.avif",
  images: [
    "/Jackets/Distressed Hoodie Bomber/2.avif",
    "/Jackets/Distressed Hoodie Bomber/3.avif",
    "/Jackets/Distressed Hoodie Bomber/4.avif",
    "/Jackets/Distressed Hoodie Bomber/5.avif",

  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Jackets",
      name: "Distressed Hoodie Bomber",
      description: [
        "Lightweight bomber with a unique distressed effect and a hood, perfect for early autumn or spring.",
        "Fabric: 100% natural distressed linen.",
        "Details:",
        "• bomber has a batiste lining and drawstrings"
      ],
      colors: ["white"]
    },
    FR: {
      category: "Vestes",
      name: "Bomber à capuche effet usé",
      description: [
        "Bomber léger avec un effet usé original et une capuche, idéal pour le début de l’automne ou le printemps.",
        "Tissu : 100 % lin naturel effet usé.",
        "Détails :",
        "• bomber avec doublure en baptiste et cordons de serrage"
      ],
      colors: ["blanc"]
    },
    UA: {
      category: "Жакети",
      name: "Рваний бомбер з капюшоном",
      description: [
        "Легкий бомбер з цікавим рваним ефектом та капюшоном на ранню осінь / весну. Стане цікавим доповненням до твого образу.",
        "Тканина: 100% натуральний рваний льон.",
        "Деталі:",
        "• бомбер має батистову підкладку та затяжки"
      ],
      colors: ["білий"]
    },
    RU: {
      category: "Жакеты",
      name: "Рваный бомбер с капюшоном",
      description: [
        "Лёгкий бомбер с интересным рваным эффектом и капюшоном для ранней осени или весны. Станет стильным дополнением твоего образа.",
        "Ткань: 100% натуральный рваный лён.",
        "Детали:",
        "• бомбер имеет батистовую подкладку и завязки"
      ],
      colors: ["белый"]
    }
  }
},

  {
  id: 178,
  price: 2800,
  isTop: false,
  isNew: false,
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
  id: 177,
  price: 3670,
  isTop: false,
  isNew: false,
  sku: "98830",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Amelie/1.avif",
  images: [
    "/Costumes/Amelie/1.avif",
    "/Costumes/Amelie/2.avif",
    "/Costumes/Amelie/3.avif",
    "/Costumes/Amelie/4.avif",
    "/Costumes/Amelie/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Amelie Suit",
      description: [
        "Delicate satin suit featuring a blouse with expressive buttons and palazzo trousers.",
        "Fabric: Dense and soft satin.",
        "Details:",
        "• Wide sleeves with cuffs",
        "• Buttons along the blouse",
        "• High-waisted trousers with a zipper closure"
      ],
      colors: ["grey"]
    },
    FR: {
      category: "Costumes",
      name: "Costume «Amelie»",
      description: [
        "Ensemble délicat en satin : blouse avec des boutons apparents et pantalon palazzo.",
        "Tissu : satin dense et doux.",
        "Détails :",
        "• Manches larges avec poignets",
        "• Boutons sur toute la longueur de la blouse",
        "• Pantalon taille haute avec fermeture éclair"
      ],
      colors: ["gris"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм «Amelie»",
      description: [
        "Ніжний сатиновий костюм: блуза із вираженими ґудзиками та брюки палаццо.",
        "Тканина: щільний та м’який сатин.",
        "Деталі:",
        "• Широкі рукава та манжети",
        "• Ґудзики по довжині блузи",
        "• Висока посадка брюк, які застібаються на змійку"
      ],
      colors: ["сірий"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм «Amelie»",
      description: [
        "Нежный атласный костюм: блуза с выразительными пуговицами и брюки палаццо.",
        "Ткань: плотный и мягкий атлас.",
        "Детали:",
        "• Широкие рукава с манжетами",
        "• Пуговицы вдоль блузы",
        "• Высокая посадка брюк на молнии"
      ],
      colors: ["серый"]
    }
  }
},

{
  id: 176,
  price: 3200,
  isTop: false,
  isNew: false,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
  sku: "98816",
  size: "XS S M L XL",
  category: "Pants",
  image: "/Pants/Alice Pants/1.avif",
  images: [
    "/Pants/Alice Pants/2.avif",
    "/Pants/Alice Pants/3.avif",
    "/Pants/Alice Pants/4.avif",
    "/Pants/Alice Pants/5.avif",
    "/Pants/Alice Pants/6.avif",
    "/Pants/Alice Pants/7.avif",
    "/Pants/Alice Pants/8.avif",
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
  isNew: true,
  sku: "98815",
  size: "XS S M L XL",
  category: "Jackets",
  image: "/Jackets/Alice Jacket/1.avif",
  images: [
    "/Jackets/Alice Jacket/2.avif",
    "/Jackets/Alice Jacket/3.avif",
    "/Jackets/Alice Jacket/4.avif",
    "/Jackets/Alice Jacket/5.avif",
    "/Jackets/Alice Jacket/6.avif",
    "/Jackets/Alice Jacket/7.avif",
    "/Jackets/Alice Jacket/8.avif",
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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

  {
  id: 158,
  price: 3100,
  isTop: false,
  isNew: true,
  sku: "98811",
  size: "XS S M L XL",
  category: "Dresses",
  image: "/Dress/Loden Grace Dress/1.avif",
  images: [
    "/Dress/Loden Grace Dress/2.avif",
     {
      type: "video",
      src: "/Dress/Loden Grace Dress/IMG_5263.mp4",
      poster: "/Dress/Loden Grace Dress/2.avif",
    },
    "/Dress/Loden Grace Dress/3.avif",
    "/Dress/Loden Grace Dress/4.avif",
    "/Dress/Loden Grace Dress/5.avif",
    "/Dress/Loden Grace Dress/6.avif",
    "/Dress/Loden Grace Dress/7.avif",
    "/Dress/Loden Grace Dress/8.avif",
    "/Dress/Loden Grace Dress/9.avif",
    "/Dress/Loden Grace Dress/10.avif",
    
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
      colors: ["denim", "sage"]
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
      colors: ["denim", "sauge"]
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
      colors: ["джинс", "полинь"]
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
  id: 157,
  price: 4350,
  isTop: false,
  isNew: true,
  sku: "98810",
  size: "XS S M L XL",
  category: "Costumes",
  image: "/Costumes/Poudre Suit/1.avif",
  images: [
    "/Costumes/Poudre Suit/2.avif",
     {
      type: "video",
      src: "/Costumes/Poudre Suit/IMG_8882.mp4",
      poster: "/Costumes/Poudre Suit/1.avif",
    },
    "/Costumes/Poudre Suit/3.avif",
    "/Costumes/Poudre Suit/4.avif",
    "/Costumes/Poudre Suit/5.avif"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  translations: {
    EN: {
      category: "Costumes",
      name: "Poudre Suit",
      description: [
        "This suit is created for women who appreciate refined classics and the warmth of natural fabrics. It combines elegance and comfort, highlighting femininity in every detail.",
        "Perfect choice for the autumn-winter season.",
        "Fabric: Premium-quality natural wool that provides warmth, coziness, and pleasant tactile sensations.",
        "[Composition: 75% wool]",
        "Details:",
        "• Jumper: round neckline and long raglan sleeves with light volume",
        "• Neat decorative pleats on the chest create a refined accent",
        "• Pencil skirt: high waist emphasizes the figure and elongates the silhouette",
        "• Decorative front buttons and imitation pockets add a modern character"
      ],
      colors: ["powder"]
    },
    FR: {
      category: "Costumes",
      name: "Costume «Poudre»",
      description: [
        "Ce costume est conçu pour les femmes qui apprécient le classique raffiné et la chaleur des tissus naturels. Il allie élégance et confort, mettant en valeur la féminité dans chaque détail.",
        "Un choix idéal pour la saison automne-hiver.",
        "Tissu : laine naturelle de qualité premium, offrant chaleur, confort et sensations agréables au toucher.",
        "[Composition : 75% laine]",
        "Détails :",
        "• Pull : encolure ronde et manches raglan longues avec un léger volume",
        "• Plis décoratifs soignés sur la poitrine créant un accent raffiné",
        "• Jupe crayon : taille haute qui souligne la silhouette et allonge les jambes",
        "• Boutons décoratifs sur le devant et fausses poches pour une touche moderne"
      ],
      colors: ["poudre"]
    },
    UA: {
      category: "Костюми",
      name: "Костюм «Poudre»",
      description: [
        "Цей костюм створений для жінок, які цінують вишукану класику та тепло натуральних тканин. Він поєднує елегантність і комфорт, підкреслюючи жіночність у кожній деталі.",
        "Ідеальний варіант для осінньо-зимового сезону.",
        "Тканина: натуральна вовна преміум-якості, що забезпечує тепло, затишок і приємні тактильні відчуття.",
        "[Склад: 75% вовни]",
        "Деталі:",
        "• Джемпер: округлий виріз горловини та довгі рукави-реглан із легким об’ємом.",
        "• Акуратні декоративні складки на грудях формують витончений акцент.",
        "• Спідниця-олівець: висока посадка підкреслює талію та витягує силует.",
        "• Декор у вигляді ґудзиків спереду та імітація кишень додають сучасного характеру."
      ],
      colors: ["пудра"]
    },
    RU: {
      category: "Костюмы",
      name: "Костюм «Poudre»",
      description: [
        "Этот костюм создан для женщин, которые ценят изысканную классику и тепло натуральных тканей. Он сочетает элегантность и комфорт, подчеркивая женственность в каждой детали.",
        "Идеальный вариант для осенне-зимнего сезона.",
        "Ткань: натуральная шерсть премиум-качества, обеспечивающая тепло, уют и приятные тактильные ощущения.",
        "[Состав: 75% шерсти]",
        "Детали:",
        "• Джемпер: круглый вырез горловины и длинные рукава-реглан с лёгким объёмом",
        "• Аккуратные декоративные складки на груди создают изысканный акцент",
        "• Юбка-карандаш: высокая посадка подчёркивает талию и вытягивает силуэт",
        "• Декор в виде пуговиц спереди и имитация карманов добавляют современный характер"
      ],
      colors: ["пудра"]
    }
  }
},

  {
  id: 156,
  price: 2100,
  isTop: false,
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
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
  isNew: true,
  // isSpecialOffer: true,
  // discountPrice: 4590,
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
  isNew: true,
  // isSpecialOffer: true,
  // discountPrice: 4590,
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
    isNew: true,

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
  isNew: true,
  // isSpecialOffer: true,
  // discountPrice: 3500,
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
    isTop: false,
    isNew: true,
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
    isNew: true,
    // isSpecialOffer: true,
    // discountPrice: 2650,
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
    isNew: true,
    // isSpecialOffer: true,
    // discountPrice: 2790,
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
    id: 138,
    price: 3500,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2970,
    sku: "67237",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Tricolor Dress/1.avif",
    images: [
        "/Dress/Tricolor Dress/2.avif",
        "/Dress/Tricolor Dress/3.avif",
        "/Dress/Tricolor Dress/4.avif",
        "/Dress/Tricolor Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Tricolor Dress",
description: [
  "Our new multi-layered dress is a combination of tenderness, comfort, and refined style. Perfect for walks, travels, and romantic meetings.",
  "Fabric: long-staple muslin made of 100% cotton. Light and soft to the touch.",
  "Details:",
  "• Three-color design",
  "• Delicate lace inserts",
  "• Light accent ruffle"
],
            colors: ["tricolor"]
        },
        FR: {
            category: "Robes",
            name: "Robe Tricolore",
            description: "Une robe confectionnée en mousseline à longues fibres avec un design tricolore.\nTissu : mousseline 100 % coton, légère et douce au toucher.",
            colors: ["tricolore"]
        },
        UA: {
            category: "Сукні",
            name: "Сукня 3-х кольорова",
description: [
  "Наша нова багатошарова сукня — це поєднання ніжності, комфорту та витонченого стилю. Ідеально підходить для прогулянок, подорожей і романтичних зустрічей.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• 3-х кольоровий дизайн",
  "• Делікатні мереживні вставки",
  "• Легка акцентна оборка"
],
            colors: ["триколірний"]
        },
        RU: {
            category: "Платья",
            name: "Трехцветное платье",
            description: "Платье из длинноволокнистого муслина с трехцветным дизайном.\nТкань: муслин из 100% хлопка, легкая и мягкая на ощупь.",
            colors: ["трехцветный"]
        }
    }
},

{
    id: 137,
    price: 1350,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1140,
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
    // discountPrice: 1400,
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
    isNew: true,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2800,
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
    isNew: true,
    // isSpecialOffer: true,
    // discountPrice: 2520,
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
    // discountPrice: 2930,
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
    // discountPrice: 3240,
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
    isNew: true,
    // isSpecialOffer: true,
    // discountPrice: 2970,
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
    isNew: true,
    // isSpecialOffer: true,
    // discountPrice: 3500,
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
    id: 121,
    price: 2850,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2420,
    sku: "67220",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Maxi Sundress/1.avif",
    images: [
        "/Dress/Maxi Sundress/2.avif",
        "/Dress/Maxi Sundress/3.avif",
        "/Dress/Maxi Sundress/4.avif",
        "/Dress/Maxi Sundress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Maxi Sundress",
description: [
  "Light and airy maxi sundress with wide straps. Perfect for summer season and vacations. A style suitable for everyday wear.",
  "Fabric: Long-staple muslin made of 100% cotton. Light and soft to the touch.",
  "Details:",
  "• Asymmetric length",
  "• Open back",
  "• Oversized fit"
],
            colors: ["eucalyptus"]
        },
        FR: {
            category: "Robes",
            name: "Robe d'été Maxi",
            description: "Une robe d'été confectionnée en mousseline à longues fibres.\nTissu : mousseline 100 % coton, légère et douce au toucher.",
            colors: ["eucalyptus"]
        },
        UA: {
            category: "Сукні",
            name: "Сарафан maxi",
description: [
  "Легкий та повітряний максі сарафан на широких бретелях. Ідеальний до літнього сезону та відпусток. Фасон, який підходить на кожен день.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Асиметрична довжина",
  "• Відкрита спинка",
  "• Оверсайз фасон"
],
            colors: ["евкаліпт"]
        },
        RU: {
            category: "Платья",
            name: "Сарафан макси",
            description: "Сарафан из длинноволокнистого муслина.\nТкань: муслин из 100% хлопка, легкая и мягкая на ощупь.",
            colors: ["эвкалипт"]
        }
    }
  },

  {
    id: 120,
    price: 2500,
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
    id: 119,
    price: 3100,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2480,
    sku: "67218",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Lily Dress/1.avif",
    images: [
        "/Dress/Lily Dress/2.avif",
        "/Dress/Lily Dress/3.avif",
        "/Dress/Lily Dress/4.avif",
        "/Dress/Lily Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
        EN: {
            category: "Dresses",
            name: "Lily Dress",
description: [
  "This broderie dress in a delicate light blue shade embodies femininity and sophistication.",
  "Pairs perfectly with both sandals and ballet flats, ideal for spring and summer.",
  "Fabric: 95% cotton, 5% elastane. Broderie is a lightweight, mostly solid cotton fabric with characteristic lace embroidery.",
  "Details:",
  "• Openwork fabric",
  "• Deep V-neckline and delicate buttons along the entire length",
  "• Semi-fitted silhouette"
],
            colors: ["light blue"]
        },
        FR: {
            category: "Robes",
            name: "Robe Lily",
            description: "Une robe confectionnée en coton léger avec une broderie de dentelle délicate.\nTissu : 95 % coton, 5 % élasthanne. Proshva - un tissu en coton léger, généralement uni, avec une broderie de dentelle caractéristique.",
            colors: ["bleu clair"]
        },
        UA: {
            category: "Сукні",
            name: "Сукня «Lily»",
description: [
  "Ця сукня з прошви у ніжно-блакитному відтінку — уособлення жіночності та витонченості.",
  "Поєднується і з босоніжками, і з балетками, ідеальна для весни та літа.",
  "Тканина: 95% бавовна, 5% еластан. Прошва - легка, переважно однотонна, бавовняна тканина з характерною мереживною вишивкою.",
  "Деталі:",
  "• Ажурна тканина",
  "• Глибоке V-декольте та ніжні ґудзики по всій довжині",
  "• Напівприталений силует"
],

            colors: ["блакитний"]
        },
        RU: {
            category: "Платья",
            name: "Платье «Лили»",
            description: "Платье из легкой хлопковой ткани с изящной кружевной вышивкой.\nТкань: 95% хлопок, 5% эластан. Прошва - легкая, преимущественно однотонная хлопковая ткань с характерной кружевной вышивкой.",
            colors: ["голубой"]
        }
    }
  },

  {
    id: 118,
    price: 3700,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2960,
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
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 2630,
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
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 2360,
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
    isTop: true,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 2800,
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
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 3100,
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
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 3100,
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
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 3100,
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
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 1480,
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
    isTop: true,
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
    isTop: true,
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
  
  {
    id: 105,
    price: 2280,
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 1930,
    sku: "45531",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Muslin Skirt/1.avif",
    images: [
      "/Skirts/Muslin Skirt/2.avif",
      "/Skirts/Muslin Skirt/3.avif",
      "/Skirts/Muslin Skirt/4.avif",
      "/Skirts/Muslin Skirt/5.avif",
      "/Skirts/Muslin Skirt/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Muslin Skirt",
        description: "A lightweight skirt made from natural fabric.\nFabric: long-fiber muslin made of 100% cotton. Light and soft to the touch.",
        colors: ["powder"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe en mousseline",
        description: "Une jupe légère en tissu naturel.\nTissu : mousseline à longues fibres en 100 % coton. Légère et douce au toucher.",
        colors: ["poudre"]
      },
      UA: {
        category: "Спідниці",
        name: "Муслінова спідниця",
        description: "Легка спідниця з натуральної тканини.\nТканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["пудра"]
      },
      RU: {
        category: "Юбки",
        name: "Муслиновая юбка",
        description: "Легкая юбка из натуральной ткани.\nТкань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        colors: ["пудра"]
      }
    }
  },

  {
    id: 104,
    price: 2850,
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 2420,
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
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 2420,
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
    id: 100,
    price: 2000,
    isTop: true,
    sku: "98820",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Batiste Shirt/1.avif",
    images: [
      "/Shirts/Batiste Shirt/2.avif",
      {
        type: "video",
        src: "/Shirts/Batiste Shirt/IMG_7575.mp4",
        poster: "/Shirts/Batiste Shirt/1.avif"
      },
      "/Shirts/Batiste Shirt/3.avif",
      "/Shirts/Batiste Shirt/4.avif",
      "/Shirts/Batiste Shirt/5.avif",
      "/Shirts/Batiste Shirt/6.avif",
      "/Shirts/Batiste Shirt/7.avif",
      "/Shirts/Batiste Shirt/8.avif",
      "/Shirts/Batiste Shirt/9.avif",
      "/Shirts/Batiste Shirt/10.avif",
      "/Shirts/Batiste Shirt/11.avif",
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
    id: 99,
    price: 2000,
    isTop: false,
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
    id: 98,
    price: 2280,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1930,
    sku: "98818",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Freedom Shirt/1.avif",
    images: [
      "/Shirts/Freedom Shirt/2.avif",
      "/Shirts/Freedom Shirt/3.avif",
     "/Shirts/Freedom Shirt/4.avif",
      "/Shirts/Freedom Shirt/5.avif",
      "/Shirts/Freedom Shirt/6.avif",
      "/Shirts/Freedom Shirt/7.avif",
      "/Shirts/Freedom Shirt/8.avif",
      "/Shirts/Freedom Shirt/9.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Freedom Shirt",
        description: "Long-staple 100% cotton muslin. A lightweight and soft-touch fabric.",
        colors: ["milk"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise «Freedom»",
        description: "Mousseline de coton 100% à longues fibres. Un tissu léger et doux au toucher.",
        colors: ["lait"]
      },
      UA: {
        category: "Сорочки",
        name: "Сорочка «Freedom»",
        description: "Довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["молоко"]
      },
      RU: {
        category: "Рубашки",
        name: "Рубашка «Freedom»",
        description: "Долговолокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь ткань.",
        colors: ["молоко"]
      }
    }
  },  
  {
    id: 97,
    price: 2550,
    isTop: true,
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
    // discountPrice: 1550,
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
    id: 84,
    price: 2100,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1890,
    sku: "98804",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Linen Pants/1.avif",
    images: [
      "/Pants/Linen Pants/2.avif",
      "/Pants/Linen Pants/3.avif",
      // "/Pants/Linen Pants/4.avif",
      // "/Pants/Linen Pants/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Linen Pants",
        description: "100% natural linen pants, providing unrestricted airflow to the body.",
        colors: ["beige"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon en Lin",
        description: "Pantalon en lin 100% naturel, permettant une circulation d'air illimitée vers le corps.",
        colors: ["beige"]
      },
      UA: {
        category: "Брюки",
        name: "Лляні брюки",
        description: "Брюки із 100% натурального льону, вони забезпечують безмежний доступ повітря до тіла.",
        colors: ["бежевий"]
      },
      RU: {
        category: "Брюки",
        name: "Льняные брюки",
        description: "Брюки из 100% натурального льна, обеспечивающие неограниченный доступ воздуха к телу.",
        colors: ["бежевый"]
      }
    }
  },
  
  {
    id: 83,
    price: 1700,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1530,
    sku: "98803",
    size: "XS S M L XL",
    category: "Tops",
    image: "/Top/Linen Vest/1.avif",
    images: [
      "/Top/Linen Vest/2.avif",
      "/Top/Linen Vest/3.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Tops",
        name: "Linen Vest",
        description: "100% natural linen vest, providing unrestricted airflow to the body.",
        colors: ["beige"]
      },
      FR: {
        category: "Tops",
        name: "Gilet en Lin",
        description: "Gilet en lin 100% naturel, permettant une circulation d'air illimitée vers le corps.",
        colors: ["beige"]
      },
      UA: {
        category: "Топи",
        name: "Лляний жилет",
        description: "Жилет із 100% натурального льону, він забезпечує безмежний доступ повітря до тіла.",
        colors: ["бежевий"]
      },
      RU: {
        category: "Топы",
        name: "Льняной жилет",
        description: "Жилет из 100% натурального льна, обеспечивающий неограниченный доступ воздуха к телу.",
        colors: ["бежевый"]
      }
    }
  },
  
  {
    id: 82,
    price: 3800,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 3420,
    sku: "98802",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Linen Set/1.avif",
    images: [
      "/Costumes/Linen Set/2.avif",
      "/Costumes/Linen Set/3.avif",
      "/Costumes/Linen Set/4.avif",
      "/Costumes/Linen Set/5.avif",
      "/Costumes/Linen Set/6.avif"

    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Linen Set",
        description: "100% natural linen costume, providing unrestricted airflow to the body.",
        colors: ["beige"]
      },
      FR: {
        category: "Costumes",
        name: "Ensemble en Lin",
        description: "Costume en lin 100% naturel, permettant une circulation d'air illimitée vers le corps.",
        colors: ["beige"]
      },
      UA: {
        category: "Костюми",
        name: "Лляний комплект",
        description: "Костюм із 100% натурального льону, він забезпечує безмежний доступ повітря до тіла.",
        colors: ["бежевий"]
      },
      RU: {
        category: "Костюмы",
        name: "Льняной комплект",
        description: "Костюм из 100% натурального льна, обеспечивающий неограниченный доступ воздуха к телу.",
        colors: ["бежевый"]
      }
    }
  },
  

  {
    id: 81,
    price: 2200,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1980,
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
    // discountPrice: 1980,
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
    // discountPrice: 2180,
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
    // discountPrice: 1420,
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
    // discountPrice: 3400,
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
    // discountPrice: 4160,
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
    // discountPrice: 2850,
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
    // discountPrice: 1600,
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
    // discountPrice: 1170,
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
    // discountPrice: 3315,
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


  {
    id: 67,
    price: 2100,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 1890,
    sku: "98787",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Cotton Pants/4.avif",
    images: [
      "/Pants/Cotton Pants/5.avif",
      "/Pants/Cotton Pants/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Cotton Pants",
        description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
        colors: ["milk"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon en Coton",
        description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
        colors: ["lait"]
      },
      UA: {
        category: "Брюки",
        name: "Брюки бавовняні",
        description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
        colors: ["молоко"]
      },
      RU: {
        category: "Брюки",
        name: "Хлопковые брюки",
        description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
        colors: ["молоко"]
      }
    }
},


  {
    id: 66,
    price: 2320,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2080,
    sku: "98786",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Cotton Shirt/1.avif",
    images: [
      "/Shirts/Cotton Shirt/2.avif",
      "/Shirts/Cotton Shirt/3.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Cotton Shirt",
        description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
        colors: ["milk"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise en Coton",
        description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
        colors: ["lait"]
      },
      UA: {
        category: "Сорочки",
        name: "Сорочка бавовняна",
        description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
        colors: ["молоко"]
      },
      RU: {
        category: "Рубашки",
        name: "Хлопковая рубашка",
        description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
        colors: ["молоко"]
      }
    }
},


  {
    id: 65,
    price: 4420,
    isTop: false,
    isNew: false,
    // isSpecialOffer: true,
    // discountPrice: 3315,
    sku: "98785",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Cotton Costume/7.avif",
    images: [
      // "/Costumes/Cotton Costume/2.avif",
      // {
      //   type: "video",
      //   src: "/Costumes/Cotton Costume/IMG_7202.mp4",
      //   poster: "/Costumes/Cotton Costume/1.avif"
      // },
      // "/Costumes/Cotton Costume/3.avif",
      // "/Costumes/Cotton Costume/4.avif",
      // "/Costumes/Cotton Costume/5.avif",
      // "/Costumes/Cotton Costume/6.avif",
      "/Costumes/Cotton Costume/7.avif",
      "/Costumes/Cotton Costume/8.avif",
      "/Costumes/Cotton Costume/9.avif",
      "/Costumes/Cotton Costume/10.avif",
      "/Costumes/Cotton Costume/11.avif",

    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Cotton Costume",
        description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
        colors: ["milk",]
      },
      FR: {
        category: "Costumes",
        name: "Costume en Coton",
        description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
        colors: ["lait",]
      },
      UA: {
        category: "Костюми",
        name: "Костюм бавовняний",
        description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
        colors: ["молоко",]
      },
      RU: {
        category: "Костюмы",
        name: "Хлопковый костюм",
        description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
        colors: ["молоко",]
      }
    }
},


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
    // discountPrice: 3330,
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
    id: 61,
    price: 3300,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2640,
    sku: "98782",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Veronica Dress/1.avif",
    images: [
      "/Dress/Veronica Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Veronica Dress/IMG_8347.mp4",
        poster: "/Dress/Veronica Dress/1.avif"
      },
      "/Dress/Veronica Dress/3.avif",
      "/Dress/Veronica Dress/4.avif",
      "/Dress/Veronica Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Veronica Dress",
description: [
  "An elegant and romantic broderie anglaise dress that will catch every passerby's eye. Perfect for your events or romantic dates.",
  "Fabric: 95% cotton, 5% elastane. Broderie anglaise is a lightweight, mostly solid-colored cotton fabric with delicate embroidered patterns.",
  "Details:",
  "• Off-shoulder design with elastic band",
  "• Flared skirt",
  "• Buttons along the entire length of the dress"
],
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Veronica",
        description: "Tissu : Composition : 95% coton, 5% élasthanne. La broderie - un tissu en coton léger, principalement uni, avec une broderie en dentelle caractéristique. Le tissu est naturel et respirant, rendant la robe très confortable.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Veronica\"",
description: [
  "Елегантний та романтичний фасон сукні із прошви, у якій ти будеш ловити всі погляди прохожих. Ідеальна до ваших заходів або побачень.",
  "Тканина: 95% бавовна, 5% еластан. Прошва — легка, переважно однотонна, бавовняна тканина з характерною мереживною вишивкою.",
  "Деталі:",
  "• Відкриті плечі на резинці",
  "• Пишна спідниця",
  "• Ґудзики по всій довжині сукні"
],
        color: "молоко",
        colors: ["молоко"]
      }
    }
},


  {
    id: 60,
    price: 3220,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2730,
    sku: "98781",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Muslin Sundress/1.avif",
    images: [
      "/Dress/Muslin Sundress/2.avif",
      "/Dress/Muslin Sundress/3.avif",
      "/Dress/Muslin Sundress/4.avif",
      "/Dress/Muslin Sundress/5.avif",
      "/Dress/Muslin Sundress/6.avif",
      "/Dress/Muslin Sundress/7.avif",
      "/Dress/Muslin Sundress/8.avif",
      "/Dress/Muslin Sundress/9.avif",
      "/Dress/Muslin Sundress/10.avif",
      "/Dress/Muslin Sundress/11.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Muslin Sundress",
description: [
  "The wrap-style muslin sundress is your perfect summer essential. It offers a feeling of lightness and ultimate comfort.",
  "Fabric: long-fiber muslin made of 100% cotton. Soft and gentle to the touch.",
  "Details:",
  "• Wrap-style design",
  "• Patch pocket",
  "• Midi length"
],
        color: "marengo",
        colors: ["marengo", "burgundy"]
      },
      FR: {
        category: "Robes",
        name: "Robe Muslin",
        description: "Robe midi portefeuille légère avec une poche plaquée et une ceinture. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "marengo",
        colors: ["marengo", "bordeaux"]
      },
      UA: {
        category: "Сукні",
        name: "Мусліновий сарафан",
description: [
  "Мусліновий сарафан на запах — твоя ідеальна база на літній сезон. У ньому ти будеш відчувати тільки легкість та комфорт.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Фасон на запах",
  "• Накладна кишеня",
  "• Міді довжина"
],
        color: "маренго",
        colors: ["маренго", "бордо"]
      },
      RU: {
        category: "Платья",
        name: "Муслиновый сарафан",
        description: "Лёгкий миди-сарафан на запах с накладным карманом и поясом. Ткань: длинноволокнистый муслин, 100% хлопок. Лёгкий и мягкий на ощупь.",
        color: "маренго",
        colors: ["маренго", "бордо"]
      }
    }
},


  {
    id: 59,
    price: 3565,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3000,
    sku: "98780",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Nature Dress/1.avif",
    images: [
      "/Dress/Nature Dress/2.avif",
      "/Dress/Nature Dress/3.avif",
      {
        type: "video",
        src: "/Dress/Nature Dress/IMG_6723.mp4",
        poster: "/Dress/Nature Dress/1.avif"
      },
      "/Dress/Nature Dress/4.avif",
      "/Dress/Nature Dress/5.avif",
      "/Dress/Nature Dress/6.avif",
      "/Dress/Nature Dress/7.avif",
      "/Dress/Nature Dress/8.avif",
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
        colors: ["burgundy", "milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Nature",
        description: "Robe maxi oversize avec manches longues et encolure ronde. Boutons décoratifs et deux poches. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "bordeaux",
        colors: ["bordeaux", "lait"]
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
        colors: ["бордо", "молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Nature\"",
        description: "Оверсайз макси-платье с длинными рукавами и круглым вырезом. Декоративные пуговицы и два кармана. Ткань: длинноволокнистый муслин, 100% хлопок. Легкое и мягкое на ощупь.",
        color: "бордо",
        colors: ["бордо", "молоко"]
      }
    }
},

  {
    id: 58,
    price: 3565,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3000,
    sku: "98779",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Freedom Dress/1.avif",
    images: [
      "/Dress/Freedom Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Freedom Dress/IMG_6714.mp4",
        poster: "/Dress/Freedom Dress/1.avif"
      },
      "/Dress/Freedom Dress/3.avif",
      "/Dress/Freedom Dress/4.avif",
      "/Dress/Freedom Dress/5.avif",
      "/Dress/Freedom Dress/6.avif"
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
        colors: ["burgundy", "milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Freedom",
        description: "Robe maxi ample à plusieurs couches avec des manches longues. Détails de volants le long de toute la robe. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "bordeaux",
        colors: ["bordeaux", "lait"]
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
        colors: ["бордо", "молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Freedom\"",
        description: "Многослойное свободное макси-платье с длинными рукавами. Детали в виде рюшек по всей длине платья. Ткань: длинноволокнистый муслин, 100% хлопок. Легкое и мягкое на ощупь.",
        color: "бордо",
        colors: ["бордо", "молоко"]
      }
    }
},

  
  {
    id: 57,
    price: 3565,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3000,
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
    id: 56,
    price: 3565,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3000,
    sku: "98777",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Ella Dress/1.avif",
    images: [
      "/Dress/Ella Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Ella Dress/IMG_6709.mp4",
        poster: "/Dress/Ella Dress/1.avif"
      },
      "/Dress/Ella Dress/3.avif",
      "/Dress/Ella Dress/4.avif",
      "/Dress/Ella Dress/5.avif",
      "/Dress/Ella Dress/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Ella Dress",
description: [
  "Incredibly light, like a breeze. The “Ella” dress made from natural muslin offers comfort even on the hottest days.",
  "Fabric: Long-staple muslin made from 100% cotton. Soft and lightweight to the touch.",
  "Details:",
  "• Elegant lace along the dress",
  "• Asymmetrical length",
  "• Cropped sleeves"
],
        color: "marengo",
        colors: ["marengo"]
      },
      FR: {
        category: "Robes",
        name: "Robe Ella",
        description: "Robe asymétrique avec manches courtes et inserts en dentelle délicate. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "marengo",
        colors: ["marengo"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Ella\"",
description: [
  "Неймовірно легка, як подих вітру. Сукня “Ella” з натурального мусліну дарує комфорт навіть у найспекотніші дні.",
  "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
  "Деталі:",
  "• Вишукане мереживо вздовж сукні",
  "• Асиметрична довжина",
  "• Вкорочені рукава"
],
        color: "маренго",
        colors: ["маренго"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Ella\"",
        description: "Асимметричное платье с укороченными рукавами и вставками из нежного кружева. Ткань: длинноволокнистый муслин, 100% хлопок. Легкое и мягкое на ощупь.",
        color: "маренго",
        colors: ["маренго"]
      }
    }
},

  {
    id: 55,
    price: 3220,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2730,
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
    // discountPrice: 2730,
    sku: "98775",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Breeze Dress/1.avif",
    images: [
      "/Dress/Breeze Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Breeze Dress/IMG_732.mp4",
        poster: "/Dress/Breeze Dress/1.avif"
      },
      "/Dress/Breeze Dress/3.avif",
      "/Dress/Breeze Dress/4.avif",
      "/Dress/Breeze Dress/5.avif",
      "/Dress/Breeze Dress/6.avif",
      "/Dress/Breeze Dress/7.avif",
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
        colors: ["fuchsia", "milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Breeze",
        description: "Robe oversize asymétrique avec manches longues et col en V. Détails de volants le long des manches et de la robe. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "fuchsia",
        colors: ["fuchsia", "lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня «Breeze»",
        description: "Оверсайз сукня асиметричної довжини із довгим рукавом та V-вирізом. На рукавчиках та вздовж сукні деталі у вигляді рюш. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "фуксія",
        colors: ["фуксія", "молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Breeze\"",
        description: "Оверсайз платье асимметричной длины с длинными рукавами и V-образным вырезом. Детали в виде рюшек на рукавах и вдоль платья. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "фуксия",
        colors: ["фуксия", "молоко"]
      }
    }
},


  {
    id: 53,
    price: 3920,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 3330,
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
    // discountPrice: 3330,
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
    // discountPrice: 3330,
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
    id: 50,
    price: 3040,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2580,
    sku: "98771",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Pinky Dress/1.avif",
    images: [
      "/Dress/Pinky Dress/2.avif",
      "/Dress/Pinky Dress/3.avif",
      "/Dress/Pinky Dress/4.avif",
      "/Dress/Pinky Dress/5.avif",
      "/Dress/Pinky Dress/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Pinky Dress",
        description: "Oversized straight-cut dress with a high waist and wide sleeves. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "powder",
        colors: ["powder"]
      },
      FR: {
        category: "Robes",
        name: "Robe Pinky",
        description: "Robe oversize à coupe droite avec taille haute et manches larges. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "poudre",
        colors: ["poudre"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня «Pinky»",
        description: "Оверсайз сукня прямого крою із високою талією та широкими рукавами. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "пудра",
        colors: ["пудра"]
      },
      RU: {
        category: "Платья",
        name: "Платье «Pinky»",
        description: "Оверсайз платье прямого кроя с высокой талией и широкими рукавами. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "пудра",
        colors: ["пудра"]
      }
    }
  },


  {
    id: 49,
    price: 3170,
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 2690,
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
    id: 48,
    price: 3415,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2900,
    sku: "98769",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Wrap Dress/1.avif",
    images: [
      "/Dress/Wrap Dress/2.avif",
      "/Dress/Wrap Dress/3.avif",
      "/Dress/Wrap Dress/4.avif",
      "/Dress/Wrap Dress/5.avif",
      
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Wrap Dress",
        description: "Midi dress with lantern sleeves in a wrap style. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "water color",
        colors: ["water color"]
      },
      FR: {
        category: "Robes",
        name: "Robe portefeuille",
        description: "Robe midi avec manches lanterne dans un style portefeuille. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "couleur de l'eau",
        colors: ["couleur de l'eau"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня на затин",
        description: "Сукня міді із рукавами ліхтариками фасону на затин. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "колір води",
        colors: ["колір води"]
      },
      RU: {
        category: "Платья",
        name: "Платье на запах",
        description: "Платье миди с рукавами-фонариками в стиле на запах. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "цвет воды",
        colors: ["цвет воды"]
      }
    }
  },
  

  {
    id: 47,
    price: 2855,
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 2420,
    sku: "98768",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Muslin/1.avif",
    images: [
      "/Dress/Muslin/2.avif",
      {
        type: "video",
        src: "/Dress/Muslin/IMG_4392.mp4",
        poster: "/Dress/Muslin/1.avif"
      },
      "/Dress/Muslin/3.avif",
      "/Dress/Muslin/4.avif",
      "/Dress/Muslin/5.avif",
      "/Dress/Muslin/6.avif",
      "/Dress/Muslin/7.avif",
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
      "/Dress/Muslin/24.avif",
      "/Dress/Muslin/25.avif",
      "/Dress/Muslin/26.avif",
      "/Dress/Muslin/27.avif",
      "/Dress/Muslin/28.avif",
      "/Dress/Muslin/29.avif",



    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Muslin Dress",
        description: "Midi dress with short sleeves. Features buttons along the entire length, allowing for adjustable slit. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "eucalyptus",
        colors: ["eucalyptus", "milk", "powder", "water color", "mint"]
      },
      FR: {
        category: "Robes",
        name: "Robe en mousseline",
        description: "Robe midi avec manches courtes. Dotée de boutons sur toute la longueur, permettant d'ajuster la fente. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "eucalyptus",
        colors: ["eucalyptus", "lait", "poudre", "couleur de l'eau", "menthe"]
      },
      UA: {
        category: "Сукні",
        name: "Муслінова сукня",
        description: "Сукня міді із короткими рукавами. Має ґудзики по всій довжині, якими можна регулювати розріз. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "евкаліпт",
        colors: ["евкаліпт", "молоко", "пудра", "колір води", "мʼята"]
      },
      RU: {
        category: "Платья",
        name: "Муслиновое платье",
        description: "Платье миди с короткими рукавами. Имеет пуговицы по всей длине, позволяя регулировать разрез. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "эвкалипт",
        colors: ["эвкалипт", "молоко", "пудра", "цвет воды", "мята"]
      }
    }
  },
  
  
  {
    id: 46,
    price: 3335,
    isTop: false,
    // isSpecialOffer: true,
    // discountPrice: 2830,
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
    // discountPrice: 2830,
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
    isTop: true,
    // isSpecialOffer: true,
    // discountPrice: 3520,
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
  {
    id: 6,
    price: 3100,
    isTop: false,
    sku: "12345",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Dress Grace/1.avif",
    images: ["/Dress/Dress Grace/2.avif", "/Dress/Dress Grace/3.avif", "/Dress/Dress Grace/4.avif", "/Dress/Dress Grace/5.avif", "/Dress/Dress Grace/6.avif"],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Dress Grace",
        description: "A-line dress with wide sleeves of midi length. Has pronounced ribbons near the neck. There is a cutout on the back\nFabric: high-quality costume wool",
        color: "gray",
        colors: ["gray"],
      },
      FR: {
        category: "Robes",
        name: "Robe Grace",
        description: "",
        color: "gris",
        colors: ["gris"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня «Grace»",
        description: "Сукня А-силуету із широкими рукавами міді довжини. Має виражені стрічки біля горловини. На спинці є виріз\nТканина: якісна костюмна вовна",
        color: "сірий",
        colors: ["сірий"]
      },
      RU: {
        category: "Платья",
        name: "Платье Грейс",
        description: "Платье А-силуэта с широкими рукавами меди имеет выраженные швы у горловины.\n Ткань: качественная костюмная шерсть",
        color: "серый",
        colors: ["серый"]
      }
    }
  },
  {
    id: 7,
    price: 1850,
    isTop: false,
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
    
    {
      id: 12,
      price: 4920,
      sku: "12345",
      color: "camel",
      size: "XS S M L XL",
      category: "Outerwear",
      image: "/Outerwear/Camel пальто/1.avif",
      images: ["/Outerwear/Camel пальто/2.avif", "/Outerwear/Camel пальто/3.avif", "/Outerwear/Camel пальто/4.avif", "/Outerwear/Camel пальто/5.avif"],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Outerwear",
          name: "Camel Coat",
          description: "A thick, lined midi-length coat with two pockets and a belt included. The sleeves can be adjusted to your liking\nFabric: Italy. 85% wool, 15% polyester",
          colors: ["camel"],
        },
        FR: {
          category: "Vêtements d'extérieur",
          name: "Manteau Camel",
          description: "Manteau épais, de longueur midi, doublé, doté de deux poches et muni d'une ceinture. Les manches peuvent être ajustées à votre guise.\nTissu : Italie. 85% laine, 15% polyester",
          colors: ["camel"],
        },
        UA: {
          category: "Верхній одяг",
          name: "Camel пальто",
          description: "Щільне пальто міді довжини на підкладці, має дві кишені, а пояс іде у комплекті. Рукава можна регулювати, як вам зручно\nТканина:Італія. 85 % вовни, 15% поліестер",
          colors: ["камель"],
        }
      }
    },
    
    

    
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
      // discountPrice: 1820,
      sku: "12345",
      color: "red",
      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Banana Pants/1.avif",
      images: ["/Pants/Banana Pants/2.avif", "/Pants/Banana Pants/3.avif", "/Pants/Banana Pants/4.avif", "/Pants/Banana Pants/5.avif","/Pants/Banana Pants/6.avif","/Pants/Banana Pants/7.avif",
        "/Pants/Banana Pants/8.avif","/Pants/Banana Pants/9.avif",
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
          colors: ["Black","caramel", "chocolat"],
        },
        FR: {
          category: "Pantalons",
          name: "Pantalons en Cuir Banane",
          description: "Pantalons taille haute style banane avec deux poches.Tissu : Cuir éco-responsable de haute qualité avec une base en suède. (Extensible, ne se fissure pas.)",
          colors: ["Noir","caramel", "chocolat"],

        },
        UA: {
          category: "Брюки",
          name: "Шкіряні брюки банани",
          description: "Описание: Брюки фасону бананів на високій посадці із двома кишенями Тканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )",
          colors: ["Чорний","карамель", "шоколад"],
        },
        RU: {
          category: "Брюки",
          name: "Брюки бананы",
          description: "( Брюки фасона бананов на высокой посадке с двумя карманамиТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          colors: ["Черный","карамель", "шоколад"],
        }
      }
    },
    
    { id: 29,
      price:  2100,
      isTop: false, // Топ продукт
      sku: "12345",
      color: "red",

      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Leather Flared Pants/5.avif",
      images: [
        "/Pants/Leather Flared Pants/6.avif", "/Pants/Leather Flared Pants/7.avif", "/Pants/Leather Flared Pants/4.avif", "/Pants/Leather Flared Pants/8.avif", "/Pants/Leather Flared Pants/9.avif",],
       
      sizes: ["XS", "S", "M", "L", "XL" ],
      translations: {
        EN: {
          category: "Pants",
          name: "Leather Flared Pants",
          description: "High-waisted flared pants with pleats running along the entire length.Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
          colors: ["Black",],
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
          colors: ["Чорний",],
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
    
    {
      id: 35,
      price: 1800,
      isTop: false,
      sku: "12349",
      color: "mocha",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Mohair Sweater/1.avif",
      images: [
        "/Sweaters/Mohair Sweater/2.avif", 
        "/Sweaters/Mohair Sweater/3.avif", 
        "/Sweaters/Mohair Sweater/4.avif", 
        "/Sweaters/Mohair Sweater/5.avif"
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Mohair Sweater",
          description: "Loose-fit sweater with a wide neckline, can be worn off one shoulder. Composition: 100% mohair.",
          colors: ["mocha"],
        },
        FR: {
          category: "Pulls",
          name: "Pull en mohair",
          description: "Pull ample avec une large encolure, peut être porté sur une épaule. Composition : 100% mohair.",
          colors: ["moka"],
        },
        UA: {
          category: "Светри",
          name: "Светр із мохеру",
          description: "Светр вільного крою з широкой горловиною, можна спустити на одне плече. Склад: 100% мохер.",
          colors: ["мокко"],
        },
        RU: {
          category: "Светри",
          name: "Свитер из мохера",
          description: "Свитер свободного кроя с широкой горловиной, можно спустить на одно плечо. Состав: 100% мохер.",
          colors: ["мокко"],
        }
      }
    },

    {
      id: 36,
      price: 1375,
      isTop: false,
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
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Flare Sweater",
          description: "Cropped sweater with a turtleneck and flared sleeves. Fabric: Knit (60% wool, 20% acrylic, 10% viscose, 10% elastane).",
          colors: ["black", "white"],
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
          colors: ["чорний", "білий"],
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
      id: 37,
      price: 1375,
      isTop: false,
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
  