 const products = [
    { id: 1,
      price: 3170,
      isTop: true, // Топ продукт
      sku: "12345",
      color: "red",
      size: "XS S M L XL",
      category: "Costumes",
      image: "/Costumes/Woolen suit with skirt/1.avif",
      images: ["/Costumes/Woolen suit with skirt/2.avif", "/Costumes/Woolen suit with skirt/3.avif", "/Costumes/Woolen suit with skirt/4.avif", "/Costumes/Woolen suit with skirt/5.avif", "/Costumes/Woolen suit with skirt/6.avif", "/Costumes/Woolen suit with skirt/7.avif", "/Costumes/Woolen suit with skirt/8.avif", "/Costumes/Woolen suit with skirt/9.avif", "/Costumes/Woolen suit with skirt/10.avif", "/Costumes/Woolen suit with skirt/11.avif", "/Costumes/Woolen suit with skirt/12.avif", "/Costumes/Woolen suit with skirt/13.avif", "/Costumes/Woolen suit with skirt/14.avif", ],
      colors: ["camel", "graphite", "gray"], 
      sizes: ["XS", "S", "M", ],
      translations: {
        EN: {
          name: "Woolen suit with skirt",
          description: "Sweater + pencil skirt\nComposition: 75% natural wool, soft, does not prick the body."
        },
        FR: {
          name: "Costume en laine avec jupe",
          description: "Pull + jupe crayon\nComposition: 75% laine naturelle, douce, ne pique pas la peau."
        },
        UA: {
          name: "Вовняний костюм зі спідницею",
          description: "Светр + олівець спідниця\nСклад: 75% натуральної вовни, м'яка, не колеться."
        }
      }
    },
    
    {
      id: 2,
      price: 3710,
      discountPrice: 2800,
      isTop: true, // Топ продукт
      isSpecialOffer: true,
      sku: "12345",
      color: "blue",
      size: "XS S M L XL",
      category: "Costumes",
      image: "/Costumes/Wool suit with trousers/8.avif",
      images: ["/Costumes/Wool suit with trousers/1.avif", "/Costumes/Wool suit with trousers/2.avif", "/Costumes/Wool suit with trousers/3.avif",
                "/Costumes/Wool suit with trousers/4.avif","/Costumes/Wool suit with trousers/5.avif", "/Costumes/Wool suit with trousers/6.avif", "/Costumes/Wool suit with trousers/7.avif", "/Costumes/Wool suit with trousers/8.avif", "/Costumes/Wool suit with trousers/9.avif", "/Costumes/Wool suit with trousers/10.avif", "/Costumes/Wool suit with trousers/11.avif", "/Costumes/Wool suit with trousers/12.avif"],
      colors: ["graphite", "grey"], 
      sizes: ["XS", "S", "M", ],
      translations: {
        EN: {
          name: "Woolen suit with trousers",
          description: "Jumper + palazzo pants\nComposition: 75% natural wool, soft, does not prick the body."
        },
        FR: {
          name: "Costume en laine avec pantalon",
          description: "Pull + pantalon palazzo\nComposition: 75% laine naturelle, douce, ne pique pas la peau."
        },
        UA: {
          name: "Вовняний костюм із брюками",
          description: "Джемпер + палаццо штани\nСклад: 75% натуральної вовни, м'яка, не колеться."
        }
      }
    },
    
    {
      id: 3,
      price: 4160,
      isTop: true, // Топ продукт
      sku: "12345",
      color: "camel",
      size: "XS S M L XL",
      category: "Costumes",
      image: "/Costumes/Wool suit with vest/1.avif",
      images: ["/Costumes/Wool suit with vest/2.avif", "/Costumes/Wool suit with vest/3.avif", "/Costumes/Wool suit with vest/4.avif", "/Costumes/Wool suit with vest/5.avif", "/Costumes/Wool suit with vest/6.avif"],
      colors: ["camel"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Wool suit with vest",
          description: "Vest + palazzo pants\nComposition: 75% natural wool, soft, does not sting the body."
        },
        FR: {
          name: "Costume en laine avec gilet",
          description: "Gilet + pantalon palazzo\nComposition: 75% laine naturelle, douce, ne pique pas la peau."
        },
        UA: {
          name: "Вовняний костюм із жилетом",
          description: "Жилет + палаццо штани\nСклад: 75% натуральної вовни, м'яка, не колеться."
        }
      }
    },
    
    {
      id: 4,
      price: 3100,
      isTop: true, // Топ продукт
      sku: "12345",
      color: "red",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Woolen trapeze dress/1.avif",
      images: ["/Dress/Woolen trapeze dress/2.avif", "/Dress/Woolen trapeze dress/3.avif", "/Dress/Woolen trapeze dress/4.avif", "/Dress/Woolen trapeze dress/5.avif", "/Dress/Woolen trapeze dress/6.avif", "/Dress/Woolen trapeze dress/7.avif", "/Dress/Woolen trapeze dress/7.avif",
              "/Dress/Woolen trapeze dress/8.avif", "/Dress/Woolen trapeze dress/9.avif", "/Dress/Woolen trapeze dress/10.avif", "/Dress/Woolen trapeze dress/11.avif", "/Dress/Woolen trapeze dress/12.avif"],
      colors: ["gray", "jeans"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Woolen trapeze dress",
          description: "Trapeze dress with a pronounced belt\nComposition: 75% natural wool, soft, does not stick to the body."
        },
        FR: {
          name: "Robe trapèze en laine",
          description: "Robe trapèze avec ceinture marquée\nComposition: 75% laine naturelle, douce, ne colle pas à la peau."
        },
        UA: {
          name: "Вовняна трапецеїдна сукня",
          description: "Трапецеїдна сукня з виразним поясом\nСклад: 75% натуральної вовни, м'яка, не прилипає до тіла."
        }
      }
    },
    
    {
      id: 5,
      price: 3100,
      discountPrice: 2800,
      isTop: true, // Топ продукт
      isSpecialOffer: true,
      sku: "12345",
      color: "blue",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Wool A-line dress/2.avif",
      images: ["/Dress/Wool A-line dress/1.avif", "/Dress/Wool A-line dress/3.avif", "/Dress/Wool A-line dress/4.avif", "/Dress/Wool A-line dress/5.avif", "/Dress/Wool A-line dress/6.avif", "/Dress/Wool A-line dress/7.avif", "/Dress/Wool A-line dress/8.avif", "/Dress/Wool A-line dress/9.avif", "/Dress/Wool A-line dress/10.avif"],
      colors: ["gray", "camel"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Wool A-line dress",
          description: "A-line dress with pronounced seams and a front zipper\nComposition: 75% natural wool, soft, does not prick the body."
        },
        FR: {
          name: "Robe évasée en laine",
          description: "Robe évasée avec coutures marquées et fermeture éclair avant\nComposition: 75% laine naturelle, douce, ne pique pas la peau."
        },
        UA: {
          name: "Вовняна сукня-силует",
          description: "Сукня-силует із виразними швами та передньою блискавкою\nСклад: 75% натуральної вовни, м'яка, не колеться."
        }
      }
    },

    {
      id: 6,
      price: 3100,
      discountPrice: 2800,
      isTop: true, // Топ продукт
      isSpecialOffer: true,
      sku: "12345",
      color: "gray",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Dress Grace/1.avif",
      images: ["/Dress/Dress Grace/2.avif", "/Dress/Dress Grace/3.avif", "/Dress/Dress Grace/4.avif", "/Dress/Dress Grace/5.avif", "/Dress/Dress Grace/6.avif"],
      colors: ["gray"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Dress Grace",
          description: "A-line dress with wide sleeves of midi length. Has pronounced ribbons near the neck. There is a cutout on the back\nFabric: high-quality costume wool\n Платье A-line dress with wide sleeves of midi has pronounced seams at the neck.\n Fabric: high-quality costume wool"
        },
        FR: {
          name: "Robe Grace",
          description: ""
        },
        UA: {
          name: " Сукня «Grace»",
          description: "Сукня А-силуету із широкими рукавами міді довжини. Має виражені стрічки біля горловини. На спинці є виріз\nТканина: якісна костюмна вовна"
        },

        RU: {
          name: "Платье Грейс",
          description: "Платье А-силуэта с широкими рукавами меди имеет выраженные швы у горловины.\n Ткань: качественная костюмная шерсть"

        }
      }
    },
    
    {
      id: 7,
      price: 1850,
      isTop: true, // Топ продукт
   
      sku: "12345",
      color: "blue",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Mini sundress/1.avif",
      images: ["/Dress/Mini sundress/2.avif", "/Dress/Mini sundress/3.avif", "/Dress/Mini sundress/4.avif", "/Dress/Mini sundress/5.avif", "/Dress/Mini sundress/6.avif"],
      colors: ["black"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Mini sundress",
          description: "Mini sundress with a deep neckline, side slits that can be fastened and two pockets. Can be worn as a vest. \nFabric: high-quality eco-leather on a suede base. (stretch, does not crack)\n( Mini sundress with a deep neckline, side slits that can be fastened and two pockets. Can be worn as a vest. \nFabric: high-quality eco-leather on a suede base. (stretch, does not crack)"
        },
        FR: {
          name: "Robe d'été mini",
          description: "Mini robe d'été avec décolleté plongeant, fentes latérales à fermeture et deux poches. Peut être porté comme un gilet. \nTissu : éco-cuir de haute qualité sur base en daim. (extensible, ne craque pas)\n( Mini robe d'été avec un décolleté profond, des fentes latérales avec fermeture et deux poches. Peut être portée comme un gilet. \nTissu : éco-cuir de haute qualité à base de daim. (extensible, ne craque pas)"
        },
        UA: {
          name: "Сарафан mini",
          description: "Mini сарафан із глибоким декольте, розрізами збоку, які застібаються та двома кишенями. Можна носити як жилет. \nТканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )"
        },

        RU: {
          name: "Мини-сарафан",
          description: "Mini сарафан с глубоким декольте, застегивающимися разрезами сбоку и двумя карманами. Можно носить как жилет. \nТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)"
        }
      }
    },
    
    {
      id: 8,
      price: 2000,
      sku: "12345",
      color: "blue",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Shkiriana suknya (Leather dress)/1.avif",
      images: ["/Dress/Shkiriana suknya (Leather dress)/2.avif", "/Dress/Shkiriana suknya (Leather dress)/3.avif", "/Dress/Shkiriana suknya (Leather dress)/4.avif", "/Dress/Shkiriana suknya (Leather dress)/5.avif", "/Dress/Shkiriana suknya (Leather dress)/6.avif"],
      colors: ["mocha", "white"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Shkiriana suknya (Leather dress)",
          description: "Oversize dress with a small round neckline and pockets\nFabric: high-quality eco-leather on a suede base. (stretchy, does not crack)"
        },
        FR: {
          name: "Tissu Shkiryana (robe en cuir)",
          description: "Robe oversize avec petit décolleté arrondi et poches. Tissu : éco-cuir de haute qualité sur base en daim (extensible, ne craque pas)."
        },
        UA: {
          name: "Шкіряна сукня",
          description: "Oversize сукня із невеликим округлим вирізом та кишенями\nТканина: якісна екошкіра на замшевій основі.(стречева, не тріскається)"
        },
        RU: {
          name: "Кожаное платье",
          description: "Oversize платье с небольшим круглым вырезом и карманами\nТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)"
          }
      }
    },
    
    {
      id: 9,
      price: 2100,
      sku: "12345",
      color: "gray",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Asymmetrical_dress/3.avif",
      images: ["/Dress/Asymmetrical_dress/2.avif", "/Dress/Asymmetrical_dress/3.avif", "/Dress/Asymmetrical_dress/4.avif", "/Dress/Asymmetrical_dress/5.avif"],
      colors: ["gray"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Asymmetrical dress",
          description: "Oversize asymmetrical dress with a turn-down collar and a chest pocket\n Fabric: high-quality eco-leather on a suede base. (stretchy, does not crack)"
        },
        FR: {
          name: "Robe asymétrique",
          description : "Robe oversize de coupe asymétrique avec col plaqué et poche poitrine\n Tissu : éco-cuir de haute qualité sur base en daim. (extensible, ne craque pas)"
        },
        UA: {
          name: "Асиметрична сукня",
          description: "Oversize сукня асиметричного крою із накладним коміром та кишенею на грудях\n Тканина: якісна екошкіра на замшевій основі.(стречева, не тріскається)"
        },
        RU: {
          name: "Асимметричное платье",
          description: " Oversize платье асимметричного кроя с накладным воротником и карманом на груди\nТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся) "
        }
      }
    },
    
    {
      id: 10,
      price: 1350 ,
      sku: "12345",
      color: "blue",
      size: "XS S M L XL",
      category: "Tops",
      image: "/Top/Openshouldergolf/2.avif",
      images: ["/Top/Openshouldergolf/1.avif", "/Top/Openshouldergolf/3.avif", "/Top/Openshouldergolf/4.avif", "/Top/Openshouldergolf/5.avif", "/Top/Openshouldergolf/6.avif"],
      colors: ["milky", "black"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Open-shoulder golf",
          description: "off-shoulder turtleneck made of soft fabric: 50% cashmere, 28% polyester, 28% nylon"
        },
        FR: {
          name: "Golfer avec les épaules ouvertes",
          description: "col roulé à épaules dénudées en tissu doux : 50 % cachemire, 28 % polyester, 28 % nylon"
        },
        UA: {
          name: "Гольф із відкритими плечима",
          description: "гольф із відкритими плечима із мʼякої тканини: 50% кашемір, 28% поліестер, 28% нейлон"
        }
      }
    },
    
    
     {
      id: 11,
      price: 5225,
      sku: "12345",
      color: "beige",
      size: "XS S M L XL",
      category: "Outerwear",
      image: "/Outerwear/Leather trench coat/2.avif",
      images: ["/Outerwear/Leather trench coat/1.avif", "/Outerwear/Leather trench coat/3.avif", "/Outerwear/Leather trench coat/4.avif", 
              "/Outerwear/Leather trench coat/5.avif", "/Outerwear/Leather trench coat/6.avif"],
      colors: ["beige"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Leather trench coat",
          description: "Double-breasted leather trench coat in an oversize style with an included belt and two pockets. \nFabric: high-quality eco-leather on a suede base. (stretchy, does not crack)"
        },
        FR: {
          name: "Trench-coat en cuir",
          description: "Trench-coat oversize en cuir à double boutonnage avec ceinture incluse et deux poches. \nTissu : éco-cuir de haute qualité sur base en daim. (extensible, incassable)"
        },
        UA: {
          name: "Шкіряний тренч",
          description: "Двобортний шкіряний тренч oversize фасону із поясом у комплекті та двома кишенями. \nТканина: якісна екошкіра на замшевій основі.(стречева, не тріскається)"
        }
      }
    },
    
    {
      id: 12,
      price: 4920,
      sku: "12345",
      color: "camel",
      size: "XS S M L XL",
      category: "Outerwear",
      image: "/Outerwear/Camel пальто/2.avif",
      images: ["/Outerwear/Camel пальто/1.avif", "/Outerwear/Camel пальто/3.avif", "/Outerwear/Camel пальто/4.avif", "/Outerwear/Camel пальто/5.avif"],
      colors: ["camel"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Camel Coat",
          description: "A thick, lined midi-length coat with two pockets and a belt included. The sleeves can be adjusted to your liking\nFabric: Italy. 85% wool, 15% polyester"
        },
        FR: {
          name: "Manteau Camel",
          description: "Manteau épais, de longueur midi, doublé, doté de deux poches et muni d'une ceinture. Les manches peuvent être ajustées à votre guise.\nTissu : Italie. 85% laine, 15% polyester"
        },
        UA: {
          name: "Camel пальто",
          description: "Щільне пальто міді довжини на підкладці, має дві кишені, а пояс іде у комплекті. Рукава можна регулювати, як вам зручно\nТканина:Італія. 85 % вовни, 15% поліестер"
        }
      }
    },
    
    {
      id: 13,
      price: 3700,
      sku: "12345",
      color: "beige",
      size: "XS S M L XL",
      category: "Outerwear",
      image: "/Outerwear/Твідовий бомбер/1.avif",
      images: ["/Outerwear/Твідовий бомбер/2.avif", "/Outerwear/Твідовий бомбер/3.avif", "/Outerwear/Твідовий бомбер/4.avif",
               "/Outerwear/Твідовий бомбер/5.avif", "/Outerwear/Твідовий бомбер/6.avif", "/Outerwear/Твідовий бомбер/7.avif", "/Outerwear/Твідовий бомбер/8.avif"],
      colors: ["graphite", "beige"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Tweed bomber jacket",
          description: "Quilted bomber jacket with high-quality lining and two pockets"
        },
        FR: {
          name: "Blouson aviateur en tweed",
          description: "Bomber matelassé avec doublure de qualité et deux poches"
        },
        UA: {
          name: "Твідовий бомбер",
          description: "Стьоганий бомбер із якісною підкладкою та двома кишенями"
        }
      }
    },
    
    {
      id: 14,
      price: 3100,
      sku: "12345",
      color: "blue",
      size: "XS S M L XL",
      category: "Shirts",
      image: "/Shirts/Classicshirt/2.avif",
      images: ["/Shirts/Classicshirt/1.avif", "/Shirts/Classicshirt/3.avif", "/Shirts/Classicshirt/4.avif", "/Shirts/Classicshirt/5.avif", "/Shirts/Classicshirt/1.avif"],
      colors: ["white"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Classic shirt",
          description: "Loose-fitting cotton shirt. Fabric: 100% cotton"
        },
        FR: {
          name: "Chemise classique",
          description: "Chemise en coton à coupe libre. Tissu : 100 % coton"
        },
        UA: {
          name: "Класична сорочка",
          description: "Сорочка бавовняна вільного крою. Тканина: 100% бавовна"
        }
      }
    },
    
    {
     id: 15,
     price: 1650,
     sku: "12345",
     color: "caramel",
     size: "XS S M L XL",
     category: "Skirts",
     image: "/Skirts/Alice/2.avif",
     images: ["/Skirts/Alice/2.avif", "/Skirts/Alice/2.avif", "/Skirts/Alice/2.avif", "//Skirts/Alice/2.avif", "/Skirts/Alice/2.avif"],
    colors: ["caramel"], 
     sizes: ["XS", "S", "M", "L", "XL"],
     translations: {
       EN: {
        name: "Alice",
        description: "A-line skirt with ribbons along the entire length. Fabric: high-quality eco-leather on a suede base. (stretchy, does not crack)"
      },
      FR: {
        name: "Alice",
        description: "Une jupe ample en forme de trapèze avec des rubans sur toute la longueur. Tissu : cuir écologique de haute qualité sur base en daim. (extensible, ne craque pas"
      },
      UA: {
         name: "Alice",
         description: "Спідниця вільного крою у формі трапеції зі стрічками по всій довжині. Тканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається"
       }
     }
     },

     {
      id: 16,
      price: 5350,
      sku: "12345",
      color: "olive",
      size: "XS S M L XL",
      category: "Costumes",
      image: "/Costumes/Liana/1.avif",
      images: ["/Costumes/Liana/2.avif", "/Costumes/Liana/3.avif", "/Costumes/Liana/4.avif", "/Costumes/Lianat/5.avif", "/Costumes/Liana/6.avif"],
      colors: ["olive"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Liana",
          description: "Double-breasted oversize jacket + belt + straight high-rise trousers n\Suit fabric (75% viscose, 25% polyester)"
        },
        FR: {
          name: "Liana",
          description: "Veste oversize croisée + ceinture + pantalon droit taille haute Tissu de costume (75% viscose, 25% polyester)"
        },
        UA: {
          name: "Ліана",
          description: "Двобортний oversize жакет + пояс + брюки прямі на високій посадці n\Костюмна тканина ( 75% віскоза, 25% поліестер )"
        }
      }
    },
    
     {
       id: 17,
       price: 5350,
       sku: "12345",
       color: "black",
       size: "XS S M L XL",
       category: "Costumes",
       image: "/Costumes/Lucy/1.avif",
       images: ["/Costumes/Lucy/2.avif", "/Costumes/Lucy/3.avif", "/Costumes/Lucy/4.avif", "/Costumes/Lucy/5.avif", "/Costumes/Lucy/6.avif"],
       colors: ["black"], 
       sizes: ["XS", "S", "M", "L", "XL"],
       translations: {
         EN: {
           name: "Lucy",
           description: "Double-breasted oversize jacket + cropped high-rise banana pants\nSuit fabric (75% viscose, 25% polyester)"
         },
         FR: {
           name: "Lucy",
           description: "Veste oversize à double boutonnage + pantacourt taille haute façon banane\nTissu de costume (75% viscose, 25% polyester)"
         },
         UA: {
           name: "Lucy",
           description: "Двобортний oversize жакет + вкорочені брюки фасону бананів на високій посадці \nКостюмна тканина ( 75% віскоза, 25% поліестер )"
         }
       }
     },

     {
      id: 18,
      price: 4950,
      isTop: false, // Not marked as a top product
      sku: "56789",
      color: "chocolate",
      size: "XS S M L XL",
      category: "Costumes",
      image: "/Costumes/Suit with bermuda shorts/1.avif",
      images: [
        "/Costumes/Suit with bermuda shorts/2.avif",
        "/Costumes/Suit with bermuda shorts/3.avif",
        "/Costumes/Suit with bermuda shorts/4.avif"
      ],
      colors: ["chocolate"],
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Suit with bermuda shorts",
          description: "Double-breasted oversized jacket + high-waisted bermuda shorts with pockets.\nFabric: suit fabric (75% viscose, 25% polyester)"
        },
        FR: {
          name: "Costume avec bermuda",
          description: "Veste oversize double boutonnage + bermuda taille haute avec poches.\nTissu: tissu de costume (75% viscose, 25% polyester)"
        },
        UA: {
          name: "Костюм із бермудами",
          description: "Двобортний oversize жакет + шорти-бермуди на високій посадці із кишенями.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)"
        },
        RU: {
          name: "Костюм с бермудами",
          description: "Двухбортный oversize жакет + шорты-бермуды на высокой посадке с карманами.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)"
        }
      }
    },

    {
      id: 19,
      price: 5350,
      isTop: false, // Not marked as a top product
      sku: "98765",
      color: "chocolate",
      size: "XS S M L XL",
      category: "Costumes",
      image: "/Costumes/Emily Suit/1.avif",
      images: [
        "/Costumes/Emily Suit/2.avif",
        "/Costumes/Emily Suit/3.avif",
        "/Costumes/Emily Suit/4.avif"
      ],
      colors: ["chocolate"],
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Emily Suit",
          description: "Double-breasted oversized jacket + palazzo trousers with high waist, pockets, and a belt.\nFabric: suit fabric (75% viscose, 25% polyester)"
        },
        FR: {
          name: "Costume « Emily »",
          description: "Veste oversize double boutonnage + pantalon palazzo taille haute avec poches et ceinture.\nTissu: tissu de costume (75% viscose, 25% polyester)"
        },
        UA: {
          name: "Костюм «Emily»",
          description: "Двобортний oversize жакет + брюки палаццо на високій посадці із кишенями та поясом.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)"
        },
        RU: {
          name: "Костюм «Emily»",
          description: "Двухбортный oversize жакет + брюки палаццо на высокой посадке с карманами и поясом.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)"
        }
      }
    },
    
    {
      id: 20,
      price: 3100,
      isTop: false, // Not marked as a top product
      sku: "67890",
      color: "gray, camel",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Emily Dress/1.avif",
      images: [
        "/Dress/Emily Dress/2.avif",
        "/Dress/Emily Dress/3.avif",
        "/Dress/Emily Dress/4.avif",
        "/Dress/Emily Dress/5.avif",
        "/Dress/Emily Dress/6.avif",
        "/Dress/Emily Dress/7.avif",
        "/Dress/Emily Dress/8.avif",
        "/Dress/Emily Dress/9.avif",
        "/Dress/Emily Dress/10.avif",
      ],
      colors: ["gray", "camel"],
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Emily Dress",
          description: "Wool midi dress with a V-neck, shortened sleeves, and pockets.\nFabric: 80% wool, 20% polyester"
        },
        FR: {
          name: "Robe « Emily »",
          description: "Robe midi en laine avec col en V, manches raccourcies et poches.\nTissu: 80% laine, 20% polyester"
        },
        UA: {
          name: "Сукня «Emily»",
          description: "Вовняна сукня міді довжини із V-вирізом, вкороченими рукавами та кишенями.\nТканина: 80% вовна, 20% поліестер"
        },
        RU: {
          name: "Платье «Emily»",
          description: "Шерстяное платье миди длины с V-вырезом, укороченными рукавами и карманами.\nТкань: 80% шерсть, 20% полиэстер"
        }
      }
    },

    {
      id: 21,
      price: 3025,
      isTop: false, // Not marked as a top product
      sku: "67891",
      color: "beige",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Marie Dress/1.avif",
      images: [
        "/Dress/Marie Dress/2.avif",
        "/Dress/Marie Dress/3.avif",
        "/Dress/Marie Dress/4.avif",
        "/Dress/Marie Dress/5.avif"
      ],
      colors: ["beige"],
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Marie Dress",
          description: "Midi-length dress with a collar and pockets. Button closure.\nFabric: suit fabric (75% viscose, 25% polyester)"
        },
        FR: {
          name: "Robe « Marie »",
          description: "Robe midi avec col et poches. Fermeture à boutons.\nTissu: tissu de costume (75% viscose, 25% polyester)"
        },
        UA: {
          name: "Сукня «Marie»",
          description: "Сукня міді довжини із коміром та кишенями. Застібається на ґудзики.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)"
        },
        RU: {
          name: "Платье «Marie»",
          description: "Платье миди длиной с воротником и карманами. Застёгивается на пуговицы.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)"
        }
      }
    },

    {
      id: 22,
      price: 1650,
      isTop: false, // Not marked as a top product
      sku: "67892",
      color: "black",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Leather Sundress/1.avif",
      images: [
        "/Dress/Leather Sundress/2.avif",
        "/Dress/Leather Sundress/3.avif",
        "/Dress/Leather Sundress/4.avif",
      ],
      colors: ["black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Leather Sundress",
          description: "Oversized sundress with a square neckline and two pockets.\nFabric: high-quality eco-leather on a suede base (stretchable, does not crack)"
        },
        FR: {
          name: "Robe « en cuir »",
          description: "Robe oversize avec décolleté carré et deux poches.\nTissu: cuir écologique de haute qualité sur une base en daim (extensible, ne se fissure pas)"
        },
        UA: {
          name: "Шкіряний сарафан",
          description: "Oversize сарафан із квадратним вирізом та двома кишенями.\nТканина: якісна екошкіра на замшевій основі (стречева, не тріскається)"
        },
        RU: {
          name: "Кожаный сарафан",
          description: "Oversize сарафан с квадратным вырезом и двумя карманами.\nТкань: качественная экокожа на замшевой основе (стречевая, не трескающаяся)"
        }
      }
    },

    {
      id: 23,
      price: 4050,
      isTop: false,
      sku: "67893",
      color: "denim",
      size: "XS S M L XL",
      category: "Costumes",
      image: "/Costumes/Two-Piece Suit/1.avif",
      images: [
        "/Costumes/Two-Piece Suit/2.avif",
        "/Costumes/Two-Piece Suit/3.avif",
        "/Costumes/Two-Piece Suit/4.avif"
      ],
      colors: ["denim"],
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Two-Piece Suit",
          description: "Vest with lining + palazzo pants with a high waist. Each item can be purchased separately.\nFabric: suit fabric (75% viscose, 25% polyester)"
        },
        FR: {
          name: "Costume 2 pièces",
          description: "Gilet doublé + pantalon palazzo taille haute. Chaque article peut être acheté séparément.\nTissu: tissu de costume (75% viscose, 25% polyester)"
        },
        UA: {
          name: "Костюм 2-ка",
          description: "Жилет із підкладкою + брюки палаццо із високою посадкою. Кожен елемент можна придбати окремо.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)"
        },
        RU: {
          name: "Костюм 2-ка",
          description: "Жилет с подкладкой + брюки палаццо с высокой посадкой. Каждый элемент можно приобрести отдельно.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)"
        }
      }
    },

    {
      id: 24,
      price: 3100,
      isTop: false,
      sku: "67894",
      color: "camel",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Camel Dress/1.avif",
      images: [
        "/Dress/Camel Dress/2.avif",
        "/Dress/Camel Dress/3.avif",
        "/Dress/Camel Dress/4.avif"
      ],
      colors: ["camel"],
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Camel Dress",
          description: "Wool midi dress with prominent seams, cropped sleeves, and a round neckline.\nFabric: 80% wool, 20% polyester"
        },
        FR: {
          name: "Robe « Camel »",
          description: "Robe en laine mi-longue avec coutures prononcées, manches raccourcies et col rond.\nTissu: 80% laine, 20% polyester"
        },
        UA: {
          name: "Сукня “Camel”",
          description: "Вовняна сукня міді довжини із вираженими швами, вкороченими рукавами та округлим вирізом.\nТканина: 80% вовна, 20% поліестер"
        },
        RU: {
          name: "Платье “Camel”",
          description: "Шерстяное платье миди длины с выраженными швами, укороченными рукавами и округлым вырезом.\nТкань: 80% шерсть, 20% полиэстер"
        }
      }
    },

    {
      id: 25,
      price: 3100,
      isTop: false,
      sku: "67895",
      color: "gray",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Wool Dress/1.avif",
      images: [
        "/Dress/Wool Dress/2.avif",
        "/Dress/Wool Dress/3.avif",
        "/Dress/Wool Dress/4.avif"
      ],
      colors: ["gray"],
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Wool Dress",
          description: "Wool dress with wide sleeves and a high round neckline.\nFabric: 80% wool, 20% polyester"
        },
        FR: {
          name: "Robe en laine",
          description: "Robe en laine avec manches larges et encolure ronde haute.\nTissu: 80% laine, 20% polyester"
        },
        UA: {
          name: "Вовняна сукня",
          description: "Вовняна сукня із широкими рукавами та високим округлим вирізом на горловині.\nТканина: 80% вовна, 20% поліестер"
        },
        RU: {
          name: "Шерстяное платье",
          description: "Шерстяное платье с широкими рукавами и высоким округлым вырезом на горловине.\nТкань: 80% шерсть, 20% полиэстер"
        }
      }
    },
    {
      id: 26,
      price: 2800,
      isTop: false,
      sku: "67896",
      color: "black-white",
      size: "XS S M L XL",
      category: "Dress",
      image: "/Dress/Jersey Two-Piece Dress/1.avif",
      images: [
        "/Dress/Jersey Two-Piece Dress/2.avif",
        "/Dress/Jersey Two-Piece Dress/3.avif",
        "/Dress/Jersey Two-Piece Dress/4.avif"
      ],
      colors: ["black-white"],
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Jersey Two-Piece Dress",
          description: "Dense everyday dress. Precise lines, form, design, and style. Wash each part of the dress separately.\nFabric: dense jersey knit"
        },
        FR: {
          name: "Robe en jersey deux pièces",
          description: "Robe quotidienne dense. Lignes précises, forme, design et style. Laver chaque partie de la robe séparément.\nTissu: jersey dense"
        },
        UA: {
          name: "Сукня 2-ка джерсі",
          description: "Щільна сукня на кожен день. Чіткі лінії, форма, дизайн та стиль. Кожну частину сукні прати окремо.\nТканина: щільний трикотаж Джерсі"
        },
        RU: {
          name: "Платье 2-ка джерси",
          description: "Плотное платье на каждый день. Четкие линии, форма, дизайн и стиль. Каждую часть платья стирать отдельно.\nТкань: плотный трикотаж Джерси"
        }
      }
    },
    
    {
      id: 27,
      price: 1760,
      isTop: false,
      sku: "67897",
      color: "black, cappuccino",
      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Jersey Pants/1.avif",
      images: [
        "/Pants/Jersey Pants/2.avif",
        "/Pants/Jersey Pants/3.avif",
        "/Pants/Jersey Pants/4.avif"
      ],
      colors: ["black", "cappuccino"],
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Jersey Pants",
          description: "Cropped pants with an elastic waistband. Feature pronounced seams throughout the length.\nFabric: dense jersey knit"
        },
        FR: {
          name: "Pantalon en jersey",
          description: "Pantalon court avec taille élastique. Doté de coutures prononcées sur toute la longueur.\nTissu: jersey dense"
        },
        UA: {
          name: "Брюки джерсі",
          description: "Вкорочені брюки на резинці. Мають шви по всій довжині.\nТканина: щільний трикотаж Джерсі"
        },
        RU: {
          name: "Брюки джерси",
          description: "Укороченные брюки на резинке. Имеют выраженные швы по всей длине.\nТкань: плотный трикотаж Джерси"
        }
      }
    },
    
  ];
  export default products;
  