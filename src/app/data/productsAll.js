 const products = [
    { id: 1,
      price: 3170,
      color: "red",
      size: "M",
      category: "Costumes",
      image: "/Costumes/Woolen suit with skirt/1.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
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
      color: "blue",
      size: "L",
      category: "Costumes",
      image: "/Costumes/Wool suit with trousers/8.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
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
      color: "green",
      size: "S",
      category: "Costumes",
      image: "/Costumes/Wool suit with vest/1.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
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
      color: "red",
      size: "M",
      category: "Dress",
      image: "/Dress/Woolen trapeze dress/1.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
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
      color: "blue",
      size: "XL",
      category: "Dress",
      image: "/Dress/Wool A-line dress/2.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
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
    { id: 6, name: "Product 6", price: 85,
     color: "red", 
     size: "M", 
     category: "Dress", 
     image: "/8.jpg", 
     images: ["/1.jpg", "/2.jpg", "/3.jpg"],
     title: "I'm a product 6",
     description: ""
     
    },
    { id: 7, name: "Product 7", price: 20, 
      color: "blue", 
      size: "L", 
      category: "Jeans", 
      image: "/6.jpg",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      title: "I'm a product 7",
      description: ""
    },
    { id: 8, name: "Product 8", price: 10,
     color: "green", 
     size: "S", 
     category: "Jacket", 
     image: "/5.jpg", 
     images: ["/1.jpg", "/2.jpg", "/3.jpg"],
     title: "I'm a product 8",
     description: ""
    
    },
    { id: 9, name: "Product 9", price: 25, 
      color: "red", 
      size: "M", 
      category: "Jeans", 
      image: "/4.jpg", 
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      title: "I'm a product 9",
      description: ""
    },
    { id: 10, name: "Product 10", price: 50, 
      color: "blue", 
      size: "XL", 
      category: "T-shirt", 
      image: "/3.jpg", 
      title: "I'm a product 10",
      description: ""
     
    },
    { id: 11, name: "Product 11", price: 25,
     color: "red", 
     size: "M", 
     category: "Shorts", 
     image: "/8.jpg", 
     title: "I'm a product 11",
     description:""

    },
    { id: 12, name: "Product 12", price: 50,
     color: "blue", 
     size: "XL", 
     category: "Dress", 
     image: "/9.jpg", 
     title: "I'm a product 12",
     description: ""
    
    },
  ];
  export default products;
  