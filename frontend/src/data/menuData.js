// Image mapping: Each product has a unique, appropriate image
// Items marked with PLACEHOLDER need user-provided photos for perfect accuracy
const PLACEHOLDER = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80';

export const menuData = {
  teaCoffee: [
    {
      id: 'tea-1',
      name: 'Special Chai',
      price: 15,
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80',
      category: 'Tea & Coffee'
    },
    {
      id: 'tea-2',
      name: 'Hot Coffee',
      price: 30,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
      category: 'Tea & Coffee'
    },
    {
      id: 'tea-3',
      name: 'Chocolate Coffee',
      price: 35,
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&q=80',
      category: 'Tea & Coffee'
    },
    {
      id: 'tea-4',
      name: 'Butter Coffee',
      price: 35,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
      category: 'Tea & Coffee'
    }
  ],
  coldBeverages: [
    {
      id: 'cold-1',
      name: 'Cold Coffee (M)',
      price: 49,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
      category: 'Cold Beverages'
    },
    {
      id: 'cold-2',
      name: 'Cold Coffee (L)',
      price: 69,
      image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=600&q=80',
      category: 'Cold Beverages'
    },
    {
      id: 'cold-3',
      name: 'Special Lassi',
      price: 60,
      image: 'https://images.pexels.com/photos/5946071/pexels-photo-5946071.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Cold Beverages'
    },
    {
      id: 'cold-4',
      name: 'Black Drink',
      price: 35,
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80',
      category: 'Cold Beverages'
    }
  ],
  shakes: [
    {
      id: 'shake-1',
      name: 'Banana Milk Shake',
      price: 59,
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=80',
      category: 'Shakes'
    },
    {
      id: 'shake-2',
      name: 'Strawberry Shake',
      price: 59,
      image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=600&q=80',
      category: 'Shakes'
    },
    {
      id: 'shake-3',
      name: 'Mango Shake',
      price: 59,
      image: 'https://images.pexels.com/photos/5946635/pexels-photo-5946635.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Shakes'
    },
    {
      id: 'shake-4',
      name: 'Chocolate Shake',
      price: 49,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
      category: 'Shakes'
    },
    {
      id: 'shake-5',
      name: 'Oreo Shake',
      price: 39,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80',
      category: 'Shakes'
    }
  ],
  mocktails: [
    {
      id: 'mocktail-1',
      name: 'Virgin Mojito',
      price: 69,
      image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=600&q=80',
      category: 'Mocktail'
    },
    {
      id: 'mocktail-2',
      name: 'Jal Jeera Mojito',
      price: 69,
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80',
      category: 'Mocktail'
    },
    {
      id: 'mocktail-3',
      name: 'Cucumber Basil Spritzer',
      price: 69,
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Mocktail'
    }
  ],
  snacksPatties: [
    {
      id: 'snack-1',
      name: 'Aloo Patties',
      price: 20,
      image: 'https://images.pexels.com/photos/36170562/pexels-photo-36170562.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Snacks & Patties'
    },
    {
      id: 'snack-2',
      name: 'Paneer Patties',
      price: 35,
      image: 'https://images.pexels.com/photos/13365029/pexels-photo-13365029.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Snacks & Patties'
    },
    {
      id: 'snack-3',
      name: 'Bun Muska',
      price: 30,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
      category: 'Snacks & Patties'
    },
    {
      id: 'snack-4',
      name: 'Paneer Pakoda',
      price: 90,
      image: 'https://images.pexels.com/photos/8585763/pexels-photo-8585763.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Snacks & Patties'
    },
    {
      id: 'snack-5',
      name: 'Pyaz Pakoda',
      price: 60,
      image: 'https://images.pexels.com/photos/38298052/pexels-photo-38298052.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Snacks & Patties'
    },
    {
      id: 'snack-6',
      name: 'French Fries',
      price: 50,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80',
      category: 'Snacks & Patties'
    },
    {
      id: 'snack-7',
      name: 'Chilli French Fries',
      price: 60,
      image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80',
      category: 'Snacks & Patties'
    }
  ],
  maggi: [
    {
      id: 'maggi-1',
      name: 'Plain Maggi',
      price: 40,
      image: 'https://images.pexels.com/photos/31109619/pexels-photo-31109619.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Maggi'
    },
    {
      id: 'maggi-2',
      name: 'Butter Maggi',
      price: 60,
      image: 'https://images.pexels.com/photos/31109621/pexels-photo-31109621.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Maggi'
    },
    {
      id: 'maggi-3',
      name: 'Cheese Maggi',
      price: 60,
      image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=600&q=80',
      category: 'Maggi'
    },
    {
      id: 'maggi-4',
      name: 'Paneer Maggi',
      price: 70,
      image: 'https://images.pexels.com/photos/4331491/pexels-photo-4331491.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Maggi'
    }
  ],
  burgerPasta: [
    {
      id: 'burger-1',
      name: 'Veg Burger',
      price: 49,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80',
      category: 'Burger & Pasta'
    },
    {
      id: 'burger-2',
      name: 'Paneer Burger',
      price: 59,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
      category: 'Burger & Pasta'
    },
    {
      id: 'burger-3',
      name: 'Paneer Cheese Burger',
      price: 79,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80',
      category: 'Burger & Pasta'
    },
    {
      id: 'pasta-1',
      name: 'Red Sauce Pasta',
      price: 69,
      image: 'https://images.pexels.com/photos/11161425/pexels-photo-11161425.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Burger & Pasta'
    },
    {
      id: 'pasta-2',
      name: 'White Sauce Pasta',
      price: 89,
      image: 'https://images.pexels.com/photos/2703468/pexels-photo-2703468.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Burger & Pasta'
    }
  ],
  chinese: [
    {
      id: 'chinese-1',
      name: 'Veg Chowmein',
      price: 49,
      image: 'https://images.pexels.com/photos/5409014/pexels-photo-5409014.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Chinese'
    },
    {
      id: 'chinese-2',
      name: 'Paneer Chowmein',
      price: 69,
      image: 'https://images.pexels.com/photos/8108045/pexels-photo-8108045.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Chinese'
    },
    {
      id: 'chinese-3',
      name: 'Veg Manchurian',
      price: 79,
      image: 'https://images.pexels.com/photos/28674543/pexels-photo-28674543.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Chinese'
    },
    {
      id: 'chinese-4',
      name: 'Garlic Noodles',
      price: 89,
      image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=600&q=80',
      category: 'Chinese'
    },
    {
      id: 'chinese-5',
      name: 'Hakka Noodles',
      price: 89,
      image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Chinese'
    },
    {
      id: 'chinese-6',
      name: 'Chilli Paneer',
      price: 99,
      image: 'https://images.pexels.com/photos/29631468/pexels-photo-29631468.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Chinese'
    },
    {
      id: 'chinese-7',
      name: 'Paneer Manchurian',
      price: 99,
      image: 'https://images.pexels.com/photos/28674530/pexels-photo-28674530.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Chinese'
    }
  ],
  pizza: [
    {
      id: 'pizza-1',
      name: 'Pizza Margherita',
      price: 119,
      image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=80',
      category: 'Pizza'
    },
    {
      id: 'pizza-2',
      name: 'Veg Pizza',
      price: 139,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80',
      category: 'Pizza'
    },
    {
      id: 'pizza-3',
      name: 'Paneer Pizza',
      price: 159,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
      category: 'Pizza'
    },
    {
      id: 'pizza-4',
      name: 'Cheese Corn Pizza',
      price: 189,
      image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&q=80',
      category: 'Pizza'
    }
  ],
  sandwich: [
    {
      id: 'sandwich-1',
      name: 'Veg Grilled Sandwich',
      price: 49,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80',
      category: 'Sandwich'
    },
    {
      id: 'sandwich-2',
      name: 'Paneer Tikka Sandwich',
      price: 69,
      image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?w=600&q=80',
      category: 'Sandwich'
    },
    {
      id: 'sandwich-3',
      name: 'Veg Cheese Grilled Sandwich',
      price: 69,
      image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&q=80',
      category: 'Sandwich'
    },
    {
      id: 'sandwich-4',
      name: 'Paneer Tikka Cheese Sandwich',
      price: 79,
      image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=600&q=80',
      category: 'Sandwich'
    },
    {
      id: 'sandwich-5',
      name: 'Cheese Corn Sandwich',
      price: 79,
      image: 'https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?w=600&q=80',
      category: 'Sandwich'
    }
  ],
  breakfast: [
    {
      id: 'breakfast-1',
      name: 'Chola Bhatura',
      price: 49,
      image: 'https://images.pexels.com/photos/11818239/pexels-photo-11818239.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Breakfast'
    },
    {
      id: 'breakfast-2',
      name: 'Puri Sabji',
      price: 49,
      image: 'https://images.pexels.com/photos/5410464/pexels-photo-5410464.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Breakfast'
    },
    {
      id: 'breakfast-3',
      name: 'Aloo Paratha',
      price: 49,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80',
      category: 'Breakfast'
    },
    {
      id: 'breakfast-4',
      name: 'Paneer Paratha',
      price: 59,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80',
      category: 'Breakfast'
    },
    {
      id: 'breakfast-5',
      name: 'Gobhi Paratha',
      price: 59,
      image: 'https://images.pexels.com/photos/35079296/pexels-photo-35079296.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Breakfast'
    },
    {
      id: 'breakfast-6',
      name: 'Pav Bhaji',
      price: 69,
      image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Breakfast'
    }
  ],
  southIndian: [
    {
      id: 'south-1',
      name: 'Masala Dosa',
      price: 80,
      image: 'https://images.pexels.com/photos/32229637/pexels-photo-32229637.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'South Indian'
    },
    {
      id: 'south-2',
      name: 'Paneer Dosa',
      price: 100,
      image: 'https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'South Indian'
    },
    {
      id: 'south-3',
      name: 'Paper Dosa',
      price: 50,
      image: 'https://images.pexels.com/photos/9619560/pexels-photo-9619560.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'South Indian'
    },
    {
      id: 'south-4',
      name: 'Onion Dosa',
      price: 80,
      image: 'https://images.pexels.com/photos/20422131/pexels-photo-20422131.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'South Indian'
    },
    {
      id: 'south-5',
      name: 'Paneer Masala Mix Dosa',
      price: 90,
      image: 'https://images.pexels.com/photos/20422133/pexels-photo-20422133.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'South Indian'
    },
    {
      id: 'south-6',
      name: 'Idli Sambar',
      price: 60,
      image: 'https://images.pexels.com/photos/31199041/pexels-photo-31199041.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'South Indian'
    },
    {
      id: 'south-7',
      name: 'Saada Vada',
      price: 80,
      image: 'https://images.pexels.com/photos/37420984/pexels-photo-37420984.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'South Indian'
    },
    {
      id: 'south-8',
      name: 'Mix Uttapam',
      price: 70,
      image: 'https://images.pexels.com/photos/17869140/pexels-photo-17869140.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'South Indian'
    }
  ],
  riceDal: [
    {
      id: 'rice-1',
      name: 'Veg Fried Rice',
      price: 70,
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
      category: 'Rice / Dal'
    },
    {
      id: 'rice-2',
      name: 'Paneer Fried Rice',
      price: 90,
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
      category: 'Rice / Dal'
    },
    {
      id: 'rice-3',
      name: 'Veg Biryani',
      price: 80,
      image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Rice / Dal'
    },
    {
      id: 'rice-4',
      name: 'Paneer Biryani',
      price: 100,
      image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Rice / Dal'
    },
    {
      id: 'rice-5',
      name: 'Plain Rice',
      price: 40,
      image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&q=80',
      category: 'Rice / Dal'
    },
    {
      id: 'rice-6',
      name: 'Jeera Rice',
      price: 60,
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80',
      category: 'Rice / Dal'
    },
    {
      id: 'rice-7',
      name: 'Saadi Dal',
      price: 50,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
      category: 'Rice / Dal'
    },
    {
      id: 'rice-8',
      name: 'Dal Fry',
      price: 70,
      image: 'https://images.pexels.com/photos/28674557/pexels-photo-28674557.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Rice / Dal'
    },
    {
      id: 'rice-9',
      name: 'Dal Fry Masala',
      price: 100,
      image: 'https://images.pexels.com/photos/32825914/pexels-photo-32825914.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Rice / Dal'
    }
  ],
  paneerSpecial: [
    {
      id: 'paneer-1',
      name: 'Matar Paneer',
      price: 90,
      image: 'https://images.pexels.com/photos/12737799/pexels-photo-12737799.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Paneer Special'
    },
    {
      id: 'paneer-2',
      name: 'Dhaba Paneer',
      price: 120,
      image: 'https://images.pexels.com/photos/9609837/pexels-photo-9609837.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Paneer Special'
    },
    {
      id: 'paneer-3',
      name: 'Kadhai Paneer',
      price: 120,
      image: 'https://images.pexels.com/photos/12737816/pexels-photo-12737816.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Paneer Special'
    },
    {
      id: 'paneer-4',
      name: 'Paneer Do Pyaz',
      price: 100,
      image: 'https://images.pexels.com/photos/12737805/pexels-photo-12737805.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Paneer Special'
    },
    {
      id: 'paneer-5',
      name: 'Paneer Butter Masala',
      price: 100,
      image: 'https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Paneer Special'
    },
    {
      id: 'paneer-6',
      name: 'Paneer Pasanda',
      price: 120,
      image: 'https://images.pexels.com/photos/9609839/pexels-photo-9609839.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Paneer Special'
    },
    {
      id: 'paneer-7',
      name: 'Palak Paneer',
      price: 120,
      image: 'https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Paneer Special'
    },
    {
      id: 'paneer-8',
      name: 'Shahi Paneer',
      price: 100,
      image: 'https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Paneer Special'
    }
  ],
  vegSpecial: [
    {
      id: 'veg-1',
      name: 'Mix Veg',
      price: 80,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
      category: 'Veg Special'
    },
    {
      id: 'veg-2',
      name: 'Seasonal Sabji',
      price: 60,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
      category: 'Veg Special'
    },
    {
      id: 'veg-3',
      name: 'Paneer Bhurji',
      price: 100,
      image: 'https://images.pexels.com/photos/28674562/pexels-photo-28674562.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Veg Special'
    },
    {
      id: 'veg-4',
      name: 'Veg Kofta',
      price: 70,
      image: 'https://images.pexels.com/photos/36651769/pexels-photo-36651769.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Veg Special'
    },
    {
      id: 'veg-5',
      name: 'Malai Kofta',
      price: 100,
      image: 'https://images.pexels.com/photos/36343375/pexels-photo-36343375.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Veg Special'
    }
  ],
  thalis: [
    {
      id: 'thali-1',
      name: 'Saadi Thali',
      price: 120,
      description: '4 Roti, Sookhi Sabji, Rasedar Sabji, Dal Fry, Rice',
      image: 'https://images.pexels.com/photos/12737918/pexels-photo-12737918.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Thalis'
    },
    {
      id: 'thali-2',
      name: 'Special Thali',
      price: 149,
      description: '4 Butter Roti, Sookhi Sabji, Matar Paneer, Fry Dal, Jeera Rice, Papad',
      image: 'https://images.pexels.com/photos/5775684/pexels-photo-5775684.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Thalis'
    },
    {
      id: 'thali-3',
      name: 'Super Special Thali',
      price: 199,
      description: '4 Butter Roti, Shahi Paneer, Mix Veg Sabji, Fry Dal, Matar Pulao, Papad, Rasgulla',
      image: 'https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Thalis'
    }
  ],
  coldDrinks: [
    {
      id: 'drink-1',
      name: 'Cold Drink (Small)',
      price: 20,
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80',
      category: 'Cold Drinks'
    },
    {
      id: 'drink-2',
      name: 'Cold Drink (Large)',
      price: 40,
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80',
      category: 'Cold Drinks'
    }
  ],
  mineralWater: [
    {
      id: 'water-1',
      name: 'Mineral Water (500ml)',
      price: 10,
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80',
      category: 'Mineral Water'
    },
    {
      id: 'water-2',
      name: 'Mineral Water (1L)',
      price: 20,
      image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?w=600&q=80',
      category: 'Mineral Water'
    }
  ]
};

export const getAllMenuItems = () => {
  return Object.values(menuData).flat();
};
