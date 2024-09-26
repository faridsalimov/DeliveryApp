export const productsData = {
  Vegetables: [
    {
      id: "1",
      name: "Broccoli",
      price: "2.50 ₼/kg",
      description:
        "Broccoli is a cruciferous vegetable known for its rich supply of vitamins, minerals, and antioxidants. It is often used steamed, roasted, or raw in various dishes.",
      origin: "Italy",
      weight: "~500 gr/bundle",
      image:
        "https://cdn.britannica.com/25/78225-050-1781F6B7/broccoli-florets.jpg",
    },
    {
      id: "2",
      name: "Zucchini",
      price: "1.75 ₼/kg",
      description:
        "Zucchini is a summer squash with a mild flavor. It can be grilled, roasted, or used in baked goods and salads.",
      origin: "Turkey",
      weight: "~200 gr/piece",
      image:
        "https://www.happyvalleyseeds.com.au/cdn/shop/products/zucchini-grey-lebanese-seeds-884260.jpg?v=1701073234",
    },
    {
      id: "3",
      name: "Carrots",
      price: "1.20 ₼/kg",
      description:
        "Carrots are root vegetables known for their crunchy texture and sweet taste. They are commonly used in salads, soups, and as a snack.",
      origin: "Netherlands",
      weight: "~100 gr/piece",
      image:
        "https://mp-engineering.co.uk/wp-content/uploads/2023/08/carrots-around-the-world.jpg",
    },
  ],
  Fruits: [
    {
      id: "4",
      name: "Bananas",
      price: "1.90 ₼/kg",
      description:
        "Bananas are a sweet tropical fruit rich in potassium and fiber. They are great as a snack or used in desserts and smoothies.",
      origin: "Ecuador",
      weight: "~150 gr/piece",
      image:
        "https://cdn11.bigcommerce.com/s-1ly92eod7l/images/stencil/1280x1280/products/647/790/Product_Produce_Banana__90431.1700494209.jpg?c=1&imbypass=on",
    },
    {
      id: "5",
      name: "Mangoes",
      price: "3.50 ₼/kg",
      description:
        "Mangoes are juicy stone fruits known for their sweet, tangy flavor. They are excellent in fruit salads, desserts, and smoothies.",
      origin: "India",
      weight: "~300 gr/piece",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/1200px-Mangos_-_single_and_halved.jpg",
    },
  ],
  Breads: [
    {
      id: "6",
      name: "Sourdough Bread",
      price: "4.00 ₼/loaf",
      description:
        "Sourdough bread is known for its distinct tangy flavor and chewy texture. It is perfect for sandwiches or served with soups and salads.",
      origin: "France",
      weight: "~500 gr/loaf",
      image:
        "https://littlespoonfarm.com/wp-content/uploads/2020/01/Sourdough-Bread-Recipe-for-Beginners.jpg",
    },
    {
      id: "7",
      name: "Baguette",
      price: "1.50 ₼/piece",
      description:
        "A classic French bread with a crispy crust and soft interior. Ideal for sandwiches or simply eaten with butter.",
      origin: "France",
      weight: "~250 gr/piece",
      image:
        "https://www.kingarthurbaking.com/sites/default/files/recipe_legacy/8-3-large.jpg",
    },
  ],
  Sweets: [
    {
      id: "8",
      name: "Chocolate Cake",
      price: "6.00 ₼/slice",
      description:
        "A rich, decadent chocolate cake made with the finest cocoa. Perfect for satisfying your sweet tooth.",
      origin: "Belgium",
      weight: "~200 gr/slice",
      image:
        "https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice-500x500.jpg",
    },
    {
      id: "9",
      name: "Macarons",
      price: "10.00 ₼/box",
      description:
        "Delicate and colorful French almond meringue cookies filled with ganache or cream. A perfect treat for any occasion.",
      origin: "France",
      weight: "~120 gr/box",
      image:
        "https://sugargeekshow.com/wp-content/uploads/2022/12/italian_macaron_Featured.jpg",
    },
  ],
};

export const categoriesData = [
  {
    id: "1",
    name: "Vegetables",
    count: productsData.Vegetables.length,
    image: "https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg",
  },
  {
    id: "2",
    name: "Fruits",
    count: productsData.Fruits.length,
    image:
      "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4",
  },
  {
    id: "3",
    name: "Breads",
    count: productsData.Breads.length,
    image:
      "https://c.ndtvimg.com/2023-03/2c5856bg_bread_625x300_15_March_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
  },
  {
    id: "4",
    name: "Sweets",
    count: productsData.Sweets.length,
    image:
      "https://www.vikhrolicucina.com/uploads/stories/1662465216_groupindianassortedsweetsmithaiwithdiya.jpg",
  },
];
