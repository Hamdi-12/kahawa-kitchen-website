const mongoose = require('mongoose');
require('dotenv').config();
const MenuItem = require('./models/MenuItem');

const menuItems = [
  // Breakfast
  { name: "Avocado Toast", category: "Breakfast", mealTime: "Breakfast", price: 6.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212006/mis-website-menu/yya64ybyl5rgvkypped6.jpg" },
  { name: "Bacon & Eggs", category: "Breakfast", mealTime: "Breakfast", price: 7.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212007/mis-website-menu/xtnldrwkrodeidndhkkd.jpg" },
  { name: "Bagel", category: "Breakfast", mealTime: "Breakfast", price: 3.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212008/mis-website-menu/bodr4iwdgupeabipdtcu.jpg" },
  { name: "Breakfast Burrito", category: "Breakfast", mealTime: "Breakfast", price: 8.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212012/mis-website-menu/cfxxidx4in1ugby9pa3q.jpg" },
  { name: "French Toast", category: "Breakfast", mealTime: "Breakfast", price: 6.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212025/mis-website-menu/gowhldmtt9szgpsloehp.jpg" },
  { name: "Oatmeal", category: "Breakfast", mealTime: "Breakfast", price: 4.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212041/mis-website-menu/lhpsbiqhlxlthdcy6kav.jpg" },
  { name: "Pancakes", category: "Breakfast", mealTime: "Breakfast", price: 5.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212042/mis-website-menu/ipkao1oxzlojlysmcm1m.jpg" },
  { name: "Scrambled Eggs", category: "Breakfast", mealTime: "Breakfast", price: 5.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212045/mis-website-menu/qh0xebh4sngvwqtezbrx.jpg" },
  { name: "Smoothie Bowl", category: "Breakfast", mealTime: "Breakfast", price: 7.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212046/mis-website-menu/nkv1ofxjl7jatymo0y8e.jpg" },
  { name: "Waffles", category: "Breakfast", mealTime: "Breakfast", price: 6.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212057/mis-website-menu/v5byimyj9pauk3ctgl6a.jpg" },

  // Appetizers
  { name: "Bruschetta", category: "Appetizers", mealTime: "Anytime", price: 5.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212014/mis-website-menu/hwkyzrpyuamgpplq7amy.jpg" },
  { name: "Caesar Salad", category: "Appetizers", mealTime: "Anytime", price: 7.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212016/mis-website-menu/t04s8vpo05yrfqyh5mrq.jpg" },
  { name: "Caprese Salad", category: "Appetizers", mealTime: "Anytime", price: 6.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212018/mis-website-menu/e3qoid33ctvhmbey997f.jpg" },
  { name: "Garlic Bread", category: "Appetizers", mealTime: "Anytime", price: 3.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212029/mis-website-menu/vafkjtmus8gpejfalxol.jpg" },
  { name: "Mozarella Sticks", category: "Appetizers", mealTime: "Anytime", price: 6.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212038/mis-website-menu/jlljoa8dpfavdzkd47zy.jpg" },
  { name: "Nachos", category: "Appetizers", mealTime: "Anytime", price: 7.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212039/mis-website-menu/gg21avgxl0buxl1jngqd.jpg" },
  { name: "Spring Rolls", category: "Appetizers", mealTime: "Anytime", price: 5.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212051/mis-website-menu/xd4nvcsifypkdjrggipq.jpg" },
  { name: "Stuffed Mushrooms", category: "Appetizers", mealTime: "Anytime", price: 6.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212052/mis-website-menu/km6043r0hv4ldxc8pxne.jpg" },

  // Mains
  { name: "BBQ Ribs", category: "Mains", mealTime: "Lunch", price: 14.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212009/mis-website-menu/dfftczzgrjkqmpd2evnl.jpg" },
  { name: "Beef Steak", category: "Mains", mealTime: "Dinner", price: 18.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212010/mis-website-menu/duppumxe49wfzjqyjid3.jpg" },
  { name: "Caesar Wrap", category: "Mains", mealTime: "Lunch", price: 9.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212016/mis-website-menu/whhz29xb2kgtjlv5quzq.jpg" },
  { name: "Chicken Alfredo Pasta", category: "Mains", mealTime: "Dinner", price: 12.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212020/mis-website-menu/ck0hqa5ygsmcdgpuk4mv.jpg" },
  { name: "Chicken Wings", category: "Mains", mealTime: "Lunch", price: 11.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212021/mis-website-menu/wtqxqbuhp72gncmoqlby.jpg" },
  { name: "Fish and Chips", category: "Mains", mealTime: "Lunch", price: 13.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212023/mis-website-menu/z2kpm2k2bsfjo5ms7mmp.jpg" },
  { name: "Fried Rice", category: "Mains", mealTime: "Lunch", price: 8.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212026/mis-website-menu/tziwypg3ckm76opg59ok.jpg" },
  { name: "Grilled Chicken", category: "Mains", mealTime: "Dinner", price: 12.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212032/mis-website-menu/xxeatzqtx06kvcuwwsqx.jpg" },
  { name: "Grilled Salmon", category: "Mains", mealTime: "Dinner", price: 15.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212033/mis-website-menu/hlpytwwfc0ylfrxi816g.jpg" },
  { name: "Lasagna", category: "Mains", mealTime: "Dinner", price: 11.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212035/mis-website-menu/qi46z47w4xmeadmonzzo.jpg" },
  { name: "Margherita Pizza", category: "Mains", mealTime: "Lunch", price: 10.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212037/mis-website-menu/exvcjovjcalx7brpcqda.jpg" },
  { name: "Mashed Potatoes", category: "Mains", mealTime: "Dinner", price: 4.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212037/mis-website-menu/mjpvtt8sjtgzuinrdw9k.jpg" },
  { name: "Spaghetti Bolognese", category: "Mains", mealTime: "Dinner", price: 11.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212049/mis-website-menu/qecojrvidtd7yvsqw1kw.jpg" },
  { name: "Sushi Platter", category: "Mains", mealTime: "Dinner", price: 16.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212053/mis-website-menu/guiyulagbimebjxmpipp.jpg" },
  { name: "Tacos", category: "Mains", mealTime: "Lunch", price: 9.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212054/mis-website-menu/dymcxnizubzsgjuyfifz.jpg" },
  { name: "Veggie Burger", category: "Mains", mealTime: "Lunch", price: 9.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212055/mis-website-menu/vsqc51ufe0ucfqagunde.jpg" },
  { name: "Veggie Stir Fry", category: "Mains", mealTime: "Lunch", price: 8.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212056/mis-website-menu/lxenemptuba3nooulgoq.jpg" },

  // Desserts
  { name: "Apple Pie", category: "Desserts", mealTime: "Anytime", price: 5.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212004/mis-website-menu/d4l2irya3dnuespfft8j.jpg" },
  { name: "Brownies", category: "Desserts", mealTime: "Anytime", price: 4.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212013/mis-website-menu/qebu7b6ontha7j6lafa4.jpg" },
  { name: "Cheesecake", category: "Desserts", mealTime: "Anytime", price: 6.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212019/mis-website-menu/yycyl988mmsdszbgta5k.jpg" },
  { name: "Chocolate Cake", category: "Desserts", mealTime: "Anytime", price: 6.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212023/mis-website-menu/pbspqsyt0ccq03oqntaf.jpg" },
  { name: "Fruit Tart", category: "Desserts", mealTime: "Anytime", price: 5.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212027/mis-website-menu/tptjiu8wfiybrl8tetnz.jpg" },
  { name: "Ice Cream Sundae", category: "Desserts", mealTime: "Anytime", price: 4.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212034/mis-website-menu/jz7qfersyebyhwts2fr4.jpg" },
  { name: "Panna Cotta", category: "Desserts", mealTime: "Anytime", price: 5.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212043/mis-website-menu/jvuidbwhmijqcduggric.jpg" },
  { name: "Tiramisu", category: "Desserts", mealTime: "Anytime", price: 6.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212055/mis-website-menu/jisccjxasxeqz0moqmqx.jpg" },

  // Drinks
  { name: "Cappuccino", category: "Drinks", mealTime: "Anytime", price: 3.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212017/mis-website-menu/h10ohxs7xlaywq30d9vl.jpg" },
  { name: "Fresh Orange Juice", category: "Drinks", mealTime: "Anytime", price: 3.49, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212025/mis-website-menu/d8badqmq1ulh5jhtrcgq.jpg" },
  { name: "Iced Tea", category: "Drinks", mealTime: "Anytime", price: 2.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212034/mis-website-menu/zlpwjudb2o7371a9njuc.jpg" },
  { name: "Lemonade", category: "Drinks", mealTime: "Anytime", price: 2.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212036/mis-website-menu/udqjbwnxot6v5bkjjm5e.jpg" },
  { name: "Red Wine", category: "Drinks", mealTime: "Dinner", price: 7.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212044/mis-website-menu/o3qbbatsz3ifdjbflujg.jpg" },
  { name: "Smoothie", category: "Drinks", mealTime: "Anytime", price: 4.99, image: "https://res.cloudinary.com/ddklswqnr/image/upload/v1754212047/mis-website-menu/rcccdfwvait351y6qq1s.jpg" }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB Connected');
    await MenuItem.deleteMany({});
    await MenuItem.insertMany(menuItems);
    console.log('✅ Menu items seeded successfully!');
    process.exit();
  })
  .catch(err => console.error(err));
