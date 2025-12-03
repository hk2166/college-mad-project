export const recipes = [
  {
    id: '1',
    title: 'Butter Paneer',
    category: 'Indian',
    image: 'https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg',
    serves: 4,
    total_time_min: 45,
    prep_time_min: 15,
    cook_time_min: 30,
    ingredients: [
      {name: 'paneer', amount: 400, unit: 'g'},
      {name: 'unsalted butter', amount: 3, unit: 'tbsp'},
      {name: 'neutral oil', amount: 1, unit: 'tbsp'},
      {name: 'onion', amount: 2, unit: 'medium'},
      {name: 'tomatoes or tomato puree', amount: 400, unit: 'g'},
      {name: 'ginger-garlic paste', amount: 1, unit: 'tbsp'},
      {name: 'cashews', amount: 12, unit: 'pieces'},
      {name: 'fresh cream', amount: 120, unit: 'ml'},
      {name: 'kasuri methi', amount: 1, unit: 'tsp'},
      {name: 'sugar', amount: 1, unit: 'tsp'},
      {name: 'salt', amount: 1.25, unit: 'tsp (approx)'},
      {name: 'red chili powder', amount: 1, unit: 'tsp'},
      {name: 'coriander powder', amount: 1, unit: 'tsp'},
      {name: 'cumin powder', amount: 0.5, unit: 'tsp'},
      {name: 'turmeric powder', amount: 0.25, unit: 'tsp'},
      {name: 'garam masala', amount: 0.5, unit: 'tsp'},
      {name: 'fresh coriander', amount: 2, unit: 'tbsp (chopped)'}
    ],
    steps: [
      'Cube paneer; soak in warm water 5-10 min to soften (optional).',
      'Soak cashews 10-15 min and blend to a smooth paste.',
      'Shallow-fry paneer cubes in 1 tbsp oil + 1 tbsp butter until light golden; set aside (optional).',
      'In a pan, melt 2 tbsp butter; sauté chopped onions until soft and light golden (8-12 min).',
      'Add ginger-garlic paste and cook 30-60 sec. Add turmeric, chili, coriander, cumin powders; stir 30 sec.',
      'Add tomatoes (or tomato puree); cook 8-10 min until oil separates or tomatoes break down. Optionally blend for smoothness.',
      'Stir in cashew paste and 60 ml water; cook 2-3 min. Season with salt and sugar.',
      'Add paneer cubes; simmer 3-5 min on low.',
      'Lower heat; stir in cream and 1 tbsp butter. Add kasuri methi and garam masala. Cook 1 min and turn off.',
      'Garnish with coriander; rest 2-3 min and serve.'
    ],
    notes: 'Avoid long boiling after adding paneer. Adjust spice and cream to taste.'
  },

  // -------------------------
  // 2. CHICKEN BIRYANI
  // -------------------------
  {
    id: '2',
    title: 'Chicken Biryani',
    category: 'Indian',
    image: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
    serves: 4,
    total_time_min: 75,
    prep_time_min: 20,
    cook_time_min: 55,
    ingredients: [
      {name: 'chicken', amount: 700, unit: 'g'},
      {name: 'basmati rice', amount: 400, unit: 'g'},
      {name: 'onion', amount: 3, unit: 'large'},
      {name: 'tomatoes', amount: 2, unit: 'medium'},
      {name: 'yogurt', amount: 150, unit: 'g'},
      {name: 'ginger-garlic paste', amount: 2, unit: 'tbsp'},
      {name: 'green chilies', amount: 2, unit: 'pieces'},
      {name: 'mint leaves', amount: 0.5, unit: 'cup'},
      {name: 'coriander leaves', amount: 0.5, unit: 'cup'},
      {name: 'biryani masala', amount: 2, unit: 'tbsp'},
      {name: 'turmeric powder', amount: 0.5, unit: 'tsp'},
      {name: 'red chili powder', amount: 1, unit: 'tsp'},
      {name: 'whole spices (cloves, cardamom, cinnamon)', amount: 1, unit: 'set'},
      {name: 'oil', amount: 4, unit: 'tbsp'},
      {name: 'ghee', amount: 2, unit: 'tbsp'},
      {name: 'salt', amount: 2, unit: 'tsp (approx)'}
    ],
    steps: [
      'Wash and soak rice for 20 minutes.',
      'Marinate chicken with yogurt, ginger-garlic paste, salt, chili, turmeric, biryani masala, mint, and coriander for 30 minutes.',
      'Fry sliced onions until golden brown; set aside.',
      'In a large pot, heat oil + whole spices, add marinated chicken, cook 10 minutes.',
      'Add tomatoes and cook until softened.',
      'Boil rice 70% cooked; drain.',
      'Layer chicken → rice → fried onions → mint → ghee.',
      'Cover and cook on low flame (dum) for 20–25 minutes.',
      'Fluff gently and serve.'
    ],
    notes: 'Do not overcook rice; 70% is ideal before dum cooking.'
  },

  // -------------------------
  // 3. CHOLE MASALA
  // -------------------------
  {
    id: '3',
    title: 'Chole Masala',
    category: 'Indian',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl949jrdLZseI1fRYRqcoOiKw-RR8xMmNRNw&s',
    serves: 4,
    total_time_min: 60,
    prep_time_min: 10,
    cook_time_min: 50,
    ingredients: [
      {name: 'chickpeas', amount: 250, unit: 'g'},
      {name: 'onion', amount: 2, unit: 'medium'},
      {name: 'tomato puree', amount: 300, unit: 'g'},
      {name: 'ginger-garlic paste', amount: 1, unit: 'tbsp'},
      {name: 'chole masala', amount: 2, unit: 'tbsp'},
      {name: 'turmeric powder', amount: 0.5, unit: 'tsp'},
      {name: 'red chili powder', amount: 1, unit: 'tsp'},
      {name: 'cumin seeds', amount: 1, unit: 'tsp'},
      {name: 'oil', amount: 3, unit: 'tbsp'},
      {name: 'salt', amount: 1.5, unit: 'tsp'},
      {name: 'coriander leaves', amount: 2, unit: 'tbsp'}
    ],
    steps: [
      'Soak chickpeas overnight; pressure cook until soft.',
      'Heat oil, add cumin, sauté onions till golden.',
      'Add ginger-garlic paste, then tomato puree; cook until oil separates.',
      'Add spices: turmeric, chili, chole masala; sauté 1 min.',
      'Add cooked chickpeas + 1 cup water; simmer 15–20 min.',
      'Garnish with coriander and serve.'
    ],
    notes: 'Long simmer improves thickness and flavor.'
  },

  // -------------------------
  // 4. MASALA DOSA
  // -------------------------
  {
    id: '4',
    title: 'Masala Dosa',
    category: 'Indian',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Masala_dosa_01.jpg',
    serves: 3,
    total_time_min: 30,
    prep_time_min: 10,
    cook_time_min: 20,
    ingredients: [
      {name: 'dosa batter', amount: 800, unit: 'g'},
      {name: 'potatoes', amount: 3, unit: 'medium'},
      {name: 'onion', amount: 1, unit: 'medium'},
      {name: 'green chilies', amount: 2, unit: 'pieces'},
      {name: 'turmeric powder', amount: 0.5, unit: 'tsp'},
      {name: 'mustard seeds', amount: 1, unit: 'tsp'},
      {name: 'curry leaves', amount: 8, unit: 'leaves'},
      {name: 'oil', amount: 2, unit: 'tbsp'},
      {name: 'salt', amount: 1, unit: 'tsp'}
    ],
    steps: [
      'Boil potatoes; peel and mash.',
      'Heat oil, add mustard seeds, curry leaves, onions, and chilies.',
      'Add turmeric + salt, then mashed potatoes; mix well.',
      'Spread dosa batter on hot tawa, drizzle oil.',
      'Place potato masala inside; fold and serve.'
    ],
    notes: 'Crisp dosa requires a hot, lightly greased pan.'
  },

  // -------------------------
  // 5. PANEER TIKKA
  // -------------------------
  {
    id: '5',
    title: 'Paneer Tikka',
    category: 'Indian',
    image: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg',
    serves: 3,
    total_time_min: 35,
    prep_time_min: 15,
    cook_time_min: 20,
    ingredients: [
      {name: 'paneer', amount: 300, unit: 'g'},
      {name: 'curd', amount: 120, unit: 'g'},
      {name: 'capsicum', amount: 1, unit: 'large'},
      {name: 'onion', amount: 1, unit: 'large'},
      {name: 'ginger-garlic paste', amount: 1, unit: 'tbsp'},
      {name: 'red chili powder', amount: 1, unit: 'tsp'},
      {name: 'turmeric powder', amount: 0.5, unit: 'tsp'},
      {name: 'garam masala', amount: 0.5, unit: 'tsp'},
      {name: 'lemon juice', amount: 1, unit: 'tbsp'},
      {name: 'oil', amount: 2, unit: 'tbsp'},
      {name: 'salt', amount: 1, unit: 'tsp'}
    ],
    steps: [
      'Cut paneer, capsicum, and onion into cubes.',
      'Mix curd with spices, ginger-garlic paste, lemon, and salt.',
      'Marinate paneer and veggies 20 minutes.',
      'Skewer and grill on tawa or oven until slightly charred.',
      'Brush oil and turn occasionally.'
    ],
    notes: 'Use thick curd to avoid watery marinade.'
  },
  {
    id: '6',
    title: 'Spaghetti Carbonara',
    category: 'Italian',
    image: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
    serves: 4,
    total_time_min: 30,
    prep_time_min: 10,
    cook_time_min: 20,
    ingredients: [
      {name: 'spaghetti', amount: 320, unit: 'g'},
      {name: 'egg yolks', amount: 6, unit: 'pieces'},
      {name: 'bacon', amount: 150, unit: 'g'},
      {name: 'pecorino cheese', amount: 50, unit: 'g'},
      {name: 'black pepper', amount: 1, unit: 'tsp'},
      {name: 'salt', amount: 1, unit: 'tsp'}
    ],
    steps: [
      'Put a large saucepan of salted water on to boil.',
      'Finely chop the bacon. Finely grate the pecorino cheese.',
      'Beat the eggs in a medium bowl and season with black pepper.',
      'Add spaghetti to boiling water and cook for 10 minutes until al dente.',
      'While pasta cooks, fry the bacon until golden and crisp, about 5 minutes.',
      'When pasta is ready, lift it into the frying pan with the bacon.',
      'Take pan off heat and quickly pour in the eggs and cheese, mixing well.',
      'Add pasta water to keep it saucy. Serve immediately with extra cheese.'
    ],
    notes: 'The key is to take the pan off heat before adding eggs to prevent scrambling.'
  },
  {
    id: '7',
    title: 'Fried Rice',
    category: 'Chinese',
    image: 'https://www.themealdb.com/images/media/meals/hblwvg1763478203.jpg',
    serves: 4,
    total_time_min: 25,
    prep_time_min: 10,
    cook_time_min: 15,
    ingredients: [
      {name: 'cooked rice', amount: 400, unit: 'g'},
      {name: 'prawns', amount: 250, unit: 'g'},
      {name: 'eggs', amount: 2, unit: 'pieces'},
      {name: 'onion', amount: 1, unit: 'medium'},
      {name: 'garlic', amount: 2, unit: 'cloves'},
      {name: 'soy sauce', amount: 2, unit: 'tbsp'},
      {name: 'vegetable oil', amount: 3, unit: 'tbsp'},
      {name: 'frozen peas', amount: 75, unit: 'g'},
      {name: 'spring onions', amount: 2, unit: 'pieces'}
    ],
    steps: [
      'Heat oil in a wok over high heat.',
      'Add chopped onion and garlic, cook until golden.',
      'Add prawns and cook for 2 minutes.',
      'Push everything to sides, scramble eggs in the center.',
      'Add rice and peas, toss everything together until very hot.',
      'Add soy sauce and mix well.',
      'Garnish with chopped spring onions and serve immediately.'
    ],
    notes: 'Use day-old rice for best results - freshly cooked rice can be too moist.'
  },
  {
    id: '8',
    title: 'Fish Tacos',
    category: 'Mexican',
    image: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
    serves: 4,
    total_time_min: 30,
    prep_time_min: 15,
    cook_time_min: 15,
    ingredients: [
      {name: 'white fish fillets', amount: 4, unit: 'pieces'},
      {name: 'cajun spice', amount: 2, unit: 'tbsp'},
      {name: 'flour tortillas', amount: 8, unit: 'pieces'},
      {name: 'avocado', amount: 1, unit: 'piece'},
      {name: 'lettuce', amount: 2, unit: 'cups'},
      {name: 'sour cream', amount: 100, unit: 'ml'},
      {name: 'lime', amount: 1, unit: 'piece'},
      {name: 'vegetable oil', amount: 2, unit: 'tbsp'},
      {name: 'salsa', amount: 200, unit: 'ml'}
    ],
    steps: [
      'Coat fish fillets with cajun spice and a little oil.',
      'Heat oil in a frying pan and cook fish until golden, about 5 minutes per side.',
      'Warm tortillas in microwave for 10 seconds.',
      'Slice avocado and shred lettuce.',
      'Mix sour cream with lime juice for the dressing.',
      'Flake the cooked fish into large pieces.',
      'Fill tortillas with lettuce, avocado, fish, and salsa.',
      'Drizzle with sour cream dressing and serve.'
    ],
    notes: 'Any white fish works well - cod, tilapia, or mahi-mahi are great choices.'
  },
  {
    id: '9',
    title: 'New York Cheesecake',
    category: 'Desserts',
    image: 'https://www.themealdb.com/images/media/meals/swttys1511385853.jpg',
    serves: 8,
    total_time_min: 180,
    prep_time_min: 30,
    cook_time_min: 150,
    ingredients: [
      {name: 'digestive biscuits', amount: 200, unit: 'g'},
      {name: 'butter', amount: 85, unit: 'g'},
      {name: 'cream cheese', amount: 900, unit: 'g'},
      {name: 'caster sugar', amount: 250, unit: 'g'},
      {name: 'plain flour', amount: 3, unit: 'tbsp'},
      {name: 'eggs', amount: 3, unit: 'large'},
      {name: 'sour cream', amount: 284, unit: 'ml'},
      {name: 'vanilla extract', amount: 1, unit: 'tsp'},
      {name: 'lemon juice', amount: 1, unit: 'tbsp'}
    ],
    steps: [
      'Preheat oven to 180°C. Line a 23cm springform tin with parchment.',
      'Melt butter and mix with crushed biscuits. Press into tin base and bake 10 minutes.',
      'Increase oven to 240°C. Beat cream cheese until creamy.',
      'Gradually add sugar, flour, and salt. Mix in vanilla and lemon.',
      'Whisk in eggs one at a time. Stir in sour cream.',
      'Pour filling into tin and bake 10 minutes.',
      'Reduce oven to 110°C and bake 25 minutes more until slightly wobbly.',
      'Turn off oven and let cool inside for 2 hours.',
      'Refrigerate for at least 8 hours before serving.'
    ],
    notes: 'The cheesecake will firm up as it cools. A slight crack on top is normal and adds character!'
  },
  {
  id: '10',
  title: 'Crème Brûlée',
  category: 'Desserts',
  image: 'https://www.themealdb.com/images/media/meals/uryqru1511798039.jpg',
  serves: 4,
  total_time_min: 90,
  prep_time_min: 20,
  cook_time_min: 70,
  ingredients: [
    {name: 'heavy cream', amount: 500, unit: 'ml'},
    {name: 'egg yolks', amount: 5, unit: 'pieces'},
    {name: 'caster sugar', amount: 100, unit: 'g'},
    {name: 'vanilla bean or extract', amount: 1, unit: 'piece/tsp'},
    {name: 'brown sugar (for topping)', amount: 4, unit: 'tbsp'}
  ],
  steps: [
    'Preheat oven to 150°C.',
    'Heat cream with vanilla until just steaming. Do not boil.',
    'Whisk egg yolks and sugar until pale and thick.',
    'Slowly pour warm cream into yolk mixture while whisking constantly.',
    'Strain mixture and pour into ramekins.',
    'Place ramekins in a baking dish and add hot water halfway up the sides.',
    'Bake 30–35 minutes until set but slightly jiggly.',
    'Chill for at least 2 hours.',
    'Sprinkle brown sugar on top and torch until caramelized.'
  ],
  notes: 'For the smoothest custard, strain mixture before baking.'
},
{
  id: '11',
  title: 'Chocolate Lava Cake',
  category: 'Desserts',
  image: 'https://www.themealdb.com/images/media/meals/qqwypw1504642429.jpg',
  serves: 4,
  total_time_min: 25,
  prep_time_min: 10,
  cook_time_min: 15,
  ingredients: [
    {name: 'dark chocolate', amount: 120, unit: 'g'},
    {name: 'butter', amount: 100, unit: 'g'},
    {name: 'eggs', amount: 2, unit: 'pieces'},
    {name: 'egg yolks', amount: 2, unit: 'pieces'},
    {name: 'sugar', amount: 50, unit: 'g'},
    {name: 'flour', amount: 40, unit: 'g'}
  ],
  steps: [
    'Preheat oven to 220°C. Grease 4 ramekins.',
    'Melt butter and chocolate together over low heat.',
    'Whisk eggs, yolks, and sugar until pale.',
    'Fold melted chocolate mixture into the egg mixture.',
    'Gently fold in flour until smooth.',
    'Divide into ramekins and bake 12–14 minutes until edges are firm but center is molten.',
    'Rest 1 minute, then invert onto plates and serve warm.'
  ],
  notes: 'Do not overbake—soft center is key to the lava flow.'
},
{
  id: '12',
  title: 'Tiramisu',
  category: 'Desserts',
  image: 'https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-videoSixteenByNineJumbo1600.jpg',
  serves: 6,
  total_time_min: 240,
  prep_time_min: 30,
  cook_time_min: 0,
  ingredients: [
    {name: 'mascarpone cheese', amount: 500, unit: 'g'},
    {name: 'eggs', amount: 4, unit: 'large'},
    {name: 'sugar', amount: 100, unit: 'g'},
    {name: 'ladyfinger biscuits', amount: 250, unit: 'g'},
    {name: 'espresso coffee', amount: 300, unit: 'ml'},
    {name: 'cocoa powder', amount: 2, unit: 'tbsp'},
    {name: 'rum or coffee liqueur (optional)', amount: 2, unit: 'tbsp'}
  ],
  steps: [
    'Separate egg yolks and whites. Beat yolks with sugar until pale and creamy.',
    'Fold mascarpone into the yolk mixture.',
    'Whip egg whites to soft peaks and gently fold into mascarpone mixture.',
    'Dip ladyfingers briefly in cold espresso and line a dish.',
    'Spread half the mascarpone mixture over the layer.',
    'Add another layer of dipped ladyfingers and top with remaining mascarpone.',
    'Refrigerate at least 4 hours or overnight.',
    'Dust with cocoa powder before serving.'
  ],
  notes: 'Do not soak ladyfingers too long—they should remain slightly firm for best texture.'
},
{
  id: '14',
  title: 'Apple Crumble',
  category: 'Desserts',
  image: 'https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg',
  serves: 6,
  total_time_min: 50,
  prep_time_min: 15,
  cook_time_min: 35,
  ingredients: [
    {name: 'apples', amount: 6, unit: 'medium'},
    {name: 'brown sugar', amount: 100, unit: 'g'},
    {name: 'cinnamon', amount: 1, unit: 'tsp'},
    {name: 'plain flour', amount: 150, unit: 'g'},
    {name: 'butter', amount: 100, unit: 'g'},
    {name: 'oats', amount: 50, unit: 'g'}
  ],
  steps: [
    'Peel and slice apples, toss with half the sugar and cinnamon. Spread in a baking dish.',
    'Rub flour and butter together to form crumbs; mix in remaining sugar and oats.',
    'Sprinkle crumble topping over apples.',
    'Bake at 180°C for 30–35 minutes until golden and bubbling.'
  ],
  notes: 'Serve warm with vanilla ice cream for the best experience.'
},{
  id: '15',
  title: 'Panna Cotta',
  category: 'Desserts',
  image: 'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg',
  serves: 4,
  total_time_min: 240,
  prep_time_min: 10,
  cook_time_min: 10,
  ingredients: [
    {name: 'heavy cream', amount: 500, unit: 'ml'},
    {name: 'sugar', amount: 70, unit: 'g'},
    {name: 'gelatin', amount: 7, unit: 'g'},
    {name: 'vanilla extract', amount: 1, unit: 'tsp'},
    {name: 'berries (for topping)', amount: 100, unit: 'g'}
  ],
  steps: [
    'Mix gelatin with 2 tbsp cold water and let bloom.',
    'Heat cream and sugar until steaming but not boiling.',
    'Remove from heat, add gelatin and vanilla, and stir until dissolved.',
    'Pour into molds and refrigerate at least 4 hours.',
    'Serve with berries on top.'
  ],
  notes: 'Do not boil the cream — it can affect the texture.'
},{
  id: '18',
  title: 'Kadai Chicken',
  category: 'Indian',
  image: 'https://i.ytimg.com/vi/AJHP0yKqM4Y/maxresdefault.jpg',
  serves: 4,
  total_time_min: 55,
  prep_time_min: 15,
  cook_time_min: 40,
  ingredients: [
    {name: 'chicken', amount: 700, unit: 'g'},
    {name: 'onions', amount: 2, unit: 'medium'},
    {name: 'tomatoes', amount: 3, unit: 'medium'},
    {name: 'capsicum', amount: 1, unit: 'large'},
    {name: 'ginger-garlic paste', amount: 1.5, unit: 'tbsp'},
    {name: 'kadai masala', amount: 2, unit: 'tbsp'},
    {name: 'red chili powder', amount: 1, unit: 'tsp'},
    {name: 'turmeric powder', amount: 0.5, unit: 'tsp'},
    {name: 'coriander powder', amount: 1, unit: 'tsp'},
    {name: 'oil', amount: 3, unit: 'tbsp'},
    {name: 'salt', amount: 1.5, unit: 'tsp'}
  ],
  steps: [
    'Heat oil, sauté onions until golden.',
    'Add ginger-garlic paste and cook 1 minute.',
    'Add chicken and cook until lightly browned.',
    'Add tomatoes, spices, and cook until chicken is half done.',
    'Add sliced capsicum and continue cooking until chicken is fully cooked.',
    'Sprinkle kadai masala and simmer 3 minutes.'
  ],
  notes: 'Use freshly roasted kadai masala for authentic flavor.'
},{
  id: '19',
  title: 'Aloo Paratha',
  category: 'Indian',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKg1xrSbKVgnA2N4wKZvzg0tYX7PLdGT0VOA&s',
  serves: 3,
  total_time_min: 35,
  prep_time_min: 15,
  cook_time_min: 20,
  ingredients: [
    {name: 'wheat flour', amount: 250, unit: 'g'},
    {name: 'potatoes', amount: 3, unit: 'medium'},
    {name: 'green chilies', amount: 2, unit: 'pieces'},
    {name: 'coriander leaves', amount: 2, unit: 'tbsp'},
    {name: 'garam masala', amount: 0.5, unit: 'tsp'},
    {name: 'red chili powder', amount: 0.5, unit: 'tsp'},
    {name: 'salt', amount: 1, unit: 'tsp'},
    {name: 'ghee', amount: 2, unit: 'tbsp'}
  ],
  steps: [
    'Boil and mash potatoes; mix with chilies, coriander, and spices.',
    'Knead dough with flour, water, and a pinch of salt.',
    'Roll small dough balls, stuff with potato filling, and roll again.',
    'Cook on tawa with ghee on both sides until golden.'
  ],
  notes: 'Serve hot with curd and pickle.'
},{
  id: '20',
  title: 'Coconut Ladoo',
  category: 'Indian',
  image: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/11/instant-coconut-ladoo-featured-1.jpg',
  serves: 12,
  total_time_min: 20,
  prep_time_min: 10,
  cook_time_min: 10,
  ingredients: [
    {name: 'desiccated coconut', amount: 200, unit: 'g'},
    {name: 'condensed milk', amount: 200, unit: 'ml'},
    {name: 'cardamom powder', amount: 0.5, unit: 'tsp'},
    {name: 'ghee', amount: 1, unit: 'tsp'}
  ],
  steps: [
    'Heat ghee in a pan and add coconut.',
    'Sauté 1–2 minutes, then add condensed milk.',
    'Cook until mixture thickens.',
    'Add cardamom and cool slightly.',
    'Shape into small ladoos.'
  ],
  notes: 'Roll in extra coconut for a pretty finish.'
},{
  id: '21',
  title: 'Vegetable Pulao',
  category: 'Indian',
  image: 'https://www.indianveggiedelight.com/wp-content/uploads/2019/07/veg-pulao-featured.jpg',
  serves: 4,
  total_time_min: 35,
  prep_time_min: 10,
  cook_time_min: 25,
  ingredients: [
    {name: 'basmati rice', amount: 250, unit: 'g'},
    {name: 'mixed vegetables', amount: 200, unit: 'g'},
    {name: 'onion', amount: 1, unit: 'medium'},
    {name: 'ginger-garlic paste', amount: 1, unit: 'tsp'},
    {name: 'green chili', amount: 1, unit: 'piece'},
    {name: 'bay leaf', amount: 1, unit: 'piece'},
    {name: 'cloves', amount: 3, unit: 'pieces'},
    {name: 'cinnamon', amount: 1, unit: 'inch'},
    {name: 'oil', amount: 2, unit: 'tbsp'},
    {name: 'salt', amount: 1, unit: 'tsp'}
  ],
  steps: [
    'Wash and soak rice for 15 minutes.',
    'Heat oil and sauté whole spices.',
    'Add onions and fry until soft.',
    'Add veggies, ginger-garlic paste, and chili; sauté.',
    'Add rice and 2 cups water and cook covered.',
    'Fluff gently and serve.'
  ],
  notes: 'For richer aroma, add a bit of ghee at the end.'
},{
  id: '22',
  title: 'Mutton Rogan Josh',
  category: 'Indian',
  image: 'https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900',
  serves: 4,
  total_time_min: 120,
  prep_time_min: 15,
  cook_time_min: 105,
  ingredients: [
    {name: 'mutton', amount: 700, unit: 'g'},
    {name: 'onions', amount: 2, unit: 'large'},
    {name: 'yogurt', amount: 150, unit: 'g'},
    {name: 'ginger-garlic paste', amount: 1.5, unit: 'tbsp'},
    {name: 'kashmiri chili powder', amount: 2, unit: 'tsp'},
    {name: 'turmeric powder', amount: 0.5, unit: 'tsp'},
    {name: 'fennel powder', amount: 1, unit: 'tsp'},
    {name: 'garam masala', amount: 0.5, unit: 'tsp'},
    {name: 'ghee', amount: 2, unit: 'tbsp'},
    {name: 'salt', amount: 1.5, unit: 'tsp'}
  ],
  steps: [
    'Heat ghee and sauté onions until golden.',
    'Add mutton and brown well.',
    'Mix in spices and cook 2–3 minutes.',
    'Add yogurt and stir continuously.',
    'Add water, cover, and slow-cook until tender (60–90 minutes).',
    'Finish with garam masala and simmer 5 minutes.'
  ],
  notes: 'Slow cooking is key to the authentic Rogan Josh flavor.'
},

{
  id: '23',
  title: 'Misal Pav',
  category: 'Indian (Maharashtra)',
  image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2023/12/Misal-Pav-2-2-e1722869218662-500x500.jpg',
  serves: 4,
  total_time_min: 45,
  prep_time_min: 15,
  cook_time_min: 30,
  ingredients: [
    {name: 'sprouted moth beans', amount: 250, unit: 'g'},
    {name: 'onion', amount: 1, unit: 'medium'},
    {name: 'tomato', amount: 1, unit: 'medium'},
    {name: 'misal masala', amount: 2, unit: 'tbsp'},
    {name: 'red chili powder', amount: 1, unit: 'tsp'},
    {name: 'turmeric', amount: 0.5, unit: 'tsp'},
    {name: 'coriander leaves', amount: 2, unit: 'tbsp'},
    {name: 'oil', amount: 2, unit: 'tbsp'},
    {name: 'salt', amount: 1, unit: 'tsp'}
  ],
  steps: [
    'Boil sprouts until tender.',
    'Sauté onions and tomatoes in oil.',
    'Add spices and cooked sprouts; simmer 10 minutes.',
    'Top with farsan, onions, and coriander.',
    'Serve with pav.'
  ],
  notes: 'You can adjust spice level with extra “kat” (spicy gravy).'
},{
  id: '24',
  title: 'Bengali Fish Curry (Macher Jhol)',
  category: 'Indian (West Bengal)',
  image: 'https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg',
  serves: 4,
  total_time_min: 40,
  prep_time_min: 10,
  cook_time_min: 30,
  ingredients: [
    {name: 'rohu fish', amount: 600, unit: 'g'},
    {name: 'potatoes', amount: 2, unit: 'medium'},
    {name: 'tomato', amount: 1, unit: 'medium'},
    {name: 'turmeric powder', amount: 1, unit: 'tsp'},
    {name: 'mustard oil', amount: 3, unit: 'tbsp'},
    {name: 'cumin seeds', amount: 1, unit: 'tsp'},
    {name: 'red chili powder', amount: 1, unit: 'tsp'},
    {name: 'salt', amount: 1.5, unit: 'tsp'}
  ],
  steps: [
    'Marinate fish with salt and turmeric; shallow fry.',
    'Fry potatoes lightly.',
    'Sauté cumin, tomatoes, and spices.',
    'Add water, potatoes, and fish; simmer 10 minutes.',
    'Serve hot with rice.'
  ],
  notes: 'Mustard oil gives authentic Bengali flavor.'
},
{
  id: '25',
  title: 'Laal Maas',
  category: 'Indian (Rajasthan)',
  image: 'https://swatisani.net/kitchen/wp-content/uploads/2015/11/IMG_9546.jpg',
  serves: 4,
  total_time_min: 120,
  prep_time_min: 20,
  cook_time_min: 100,
  ingredients: [
    {name: 'mutton', amount: 700, unit: 'g'},
    {name: 'curd', amount: 200, unit: 'g'},
    {name: 'mathania chili paste', amount: 2, unit: 'tbsp'},
    {name: 'garlic', amount: 8, unit: 'cloves'},
    {name: 'ghee', amount: 3, unit: 'tbsp'},
    {name: 'whole spices', amount: 1, unit: 'tbsp'},
    {name: 'salt', amount: 1.5, unit: 'tsp'}
  ],
  steps: [
    'Sauté whole spices in ghee.',
    'Add garlic and chili paste.',
    'Add mutton and cook until browned.',
    'Mix in curd and simmer until tender.',
    'Cook until gravy thickens.'
  ],
  notes: 'Use genuine Mathania chilies for true Rajasthani heat.'
},
{
  id: '26',
  title: 'Chole Bhature',
  category: 'Indian (Punjab)',
  image: 'https://madhurasrecipe.com/wp-content/uploads/2025/09/MR-Chole-Bhature-featured.jpg',
  serves: 4,
  total_time_min: 90,
  prep_time_min: 20,
  cook_time_min: 70,
  ingredients: [
    {name: 'chickpeas', amount: 300, unit: 'g'},
    {name: 'onions', amount: 2, unit: 'medium'},
    {name: 'tomatoes', amount: 2, unit: 'medium'},
    {name: 'chole masala', amount: 2, unit: 'tbsp'},
    {name: 'ginger-garlic paste', amount: 1, unit: 'tbsp'},
    {name: 'flour', amount: 300, unit: 'g'},
    {name: 'yogurt', amount: 100, unit: 'g'},
    {name: 'oil', amount: 3, unit: 'tbsp'},
    {name: 'salt', amount: 1.5, unit: 'tsp'}
  ],
  steps: [
    'Soak and pressure cook chickpeas.',
    'Sauté onions, tomatoes, and spices.',
    'Add chickpeas and simmer into thick gravy.',
    'Make dough with flour and yogurt; rest 1 hour.',
    'Roll and deep-fry bhature.'
  ],
  notes: 'Add a tea bag while boiling chickpeas for extra color.'
},
{
  id: '27',
  title: 'Khaman Dhokla',
  category: 'Indian (Gujarat)',
  image: 'https://c.ndtvimg.com/2025-07/vupbjb7k_food_625x300_09_July_25.jpg',
  serves: 4,
  total_time_min: 30,
  prep_time_min: 10,
  cook_time_min: 20,
  ingredients: [
    {name: 'gram flour', amount: 200, unit: 'g'},
    {name: 'yogurt', amount: 100, unit: 'g'},
    {name: 'semolina', amount: 2, unit: 'tbsp'},
    {name: 'turmeric', amount: 0.5, unit: 'tsp'},
    {name: 'eno', amount: 1, unit: 'tsp'},
    {name: 'green chilies', amount: 2, unit: 'pieces'},
    {name: 'mustard seeds', amount: 1, unit: 'tsp'},
    {name: 'oil', amount: 1, unit: 'tbsp'}
  ],
  steps: [
    'Mix batter with gram flour, yogurt, turmeric, and water.',
    'Add eno and steam 15 minutes.',
    'Temper mustard seeds and chilies.',
    'Pour over dhokla and cut into squares.'
  ],
  notes: 'Add eno only right before steaming.'
},
{
  id: '28',
  title: 'Sambar',
  category: 'Indian (Tamil Nadu)',
  image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/South-Indian-Sambar-Recipe.jpg',
  serves: 6,
  total_time_min: 50,
  prep_time_min: 15,
  cook_time_min: 35,
  ingredients: [
    {name: 'toor dal', amount: 200, unit: 'g'},
    {name: 'drumstick', amount: 1, unit: 'piece'},
    {name: 'tomatoes', amount: 2, unit: 'medium'},
    {name: 'tamarind', amount: 1, unit: 'tbsp'},
    {name: 'sambar powder', amount: 2, unit: 'tbsp'},
    {name: 'mustard seeds', amount: 1, unit: 'tsp'},
    {name: 'curry leaves', amount: 8, unit: 'leaves'},
    {name: 'oil', amount: 1, unit: 'tbsp'}
  ],
  steps: [
    'Boil dal until soft.',
    'Cook vegetables with tamarind and spices.',
    'Combine dal and vegetables.',
    'Temper mustard seeds and curry leaves; pour over sambar.'
  ],
  notes: 'Tastes best with steamed rice or idli.'
},
{
  id: '29',
  title: 'Kerala Prawn Curry',
  category: 'Indian (Kerala)',
  image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/keralan_prawn_curry_45390_16x9.jpg',
  serves: 4,
  total_time_min: 35,
  prep_time_min: 10,
  cook_time_min: 25,
  ingredients: [
    {name: 'prawns', amount: 500, unit: 'g'},
    {name: 'coconut milk', amount: 200, unit: 'ml'},
    {name: 'kokum', amount: 2, unit: 'pieces'},
    {name: 'onion', amount: 1, unit: 'medium'},
    {name: 'ginger-garlic paste', amount: 1, unit: 'tbsp'},
    {name: 'turmeric', amount: 1, unit: 'tsp'},
    {name: 'red chili powder', amount: 1, unit: 'tsp'},
    {name: 'curry leaves', amount: 10, unit: 'leaves'}
  ],
  steps: [
    'Sauté onions and curry leaves.',
    'Add spices and prawns; cook 3 minutes.',
    'Add coconut milk and kokum; simmer 10 minutes.',
    'Serve hot with rice.'
  ],
  notes: 'Do not overcook prawns; they become rubbery.'
},
{
  id: '30',
  title: 'Bisi Bele Bath',
  category: 'Indian (Karnataka)',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bisi_Bele_Bath_%28Bisibelebath%29.JPG/1200px-Bisi_Bele_Bath_%28Bisibelebath%29.JPG',
  serves: 5,
  total_time_min: 60,
  prep_time_min: 15,
  cook_time_min: 45,
  ingredients: [
    {name: 'rice', amount: 200, unit: 'g'},
    {name: 'toor dal', amount: 150, unit: 'g'},
    {name: 'mixed vegetables', amount: 200, unit: 'g'},
    {name: 'tamarind', amount: 1, unit: 'tbsp'},
    {name: 'bisi bele bath masala', amount: 2, unit: 'tbsp'},
    {name: 'ghee', amount: 2, unit: 'tbsp'},
    {name: 'mustard seeds', amount: 1, unit: 'tsp'}
  ],
  steps: [
    'Cook dal and rice together.',
    'Boil vegetables separately.',
    'Mix tamarind, masala, rice, dal, and vegetables.',
    'Temper mustard seeds and add ghee.'
  ],
  notes: 'Serve with boondi or papad.'
},
{
  id: '31',
  title: 'Gongura Chicken',
  category: 'Indian (Andhra Pradesh)',
  image: 'https://i.ytimg.com/vi/1-DUCRFKhC4/maxresdefault.jpg',
  serves: 4,
  total_time_min: 55,
  prep_time_min: 15,
  cook_time_min: 40,
  ingredients: [
    {name: 'chicken', amount: 700, unit: 'g'},
    {name: 'gongura leaves', amount: 200, unit: 'g'},
    {name: 'onion', amount: 1, unit: 'large'},
    {name: 'green chilies', amount: 3, unit: 'pieces'},
    {name: 'ginger-garlic paste', amount: 1, unit: 'tbsp'},
    {name: 'red chili powder', amount: 1, unit: 'tsp'},
    {name: 'oil', amount: 3, unit: 'tbsp'}
  ],
  steps: [
    'Boil gongura leaves and make a paste.',
    'Cook chicken with onions, chilies, and spices.',
    'Add gongura paste and simmer 10 minutes.',
    'Serve hot with rice.'
  ],
  notes: 'Gongura adds a tangy signature flavor.'
},
{
  id: '32',
  title: 'Dalma',
  category: 'Indian (Odisha)',
  image: 'https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg',
  serves: 4,
  total_time_min: 45,
  prep_time_min: 15,
  cook_time_min: 30,
  ingredients: [
    {name: 'toor dal', amount: 200, unit: 'g'},
    {name: 'raw banana', amount: 1, unit: 'piece'},
    {name: 'pumpkin', amount: 150, unit: 'g'},
    {name: 'potato', amount: 1, unit: 'medium'},
    {name: 'panch phoron', amount: 1, unit: 'tsp'},
    {name: 'turmeric', amount: 1, unit: 'tsp'},
    {name: 'ginger', amount: 1, unit: 'tsp'},
    {name: 'salt', amount: 1, unit: 'tsp'}
  ],
  steps: [
    'Boil dal with turmeric.',
    'Add chopped vegetables and cook fully.',
    'Temper panch phoron in oil.',
    'Pour tempering over dal and simmer 5 minutes.'
  ],
  notes: 'A staple Odia comfort food, mild and nutritious.'
}

  
];


export const categories = [
  { id: '1', name: 'Indian', icon: 'food-curry' },
  { id: '2', name: 'Italian', icon: 'pizza' },
  { id: '3', name: 'Chinese', icon: 'noodles' },
  { id: '4', name: 'Mexican', icon: 'taco' },
  { id: '5', name: 'Desserts', icon: 'cupcake' },
];