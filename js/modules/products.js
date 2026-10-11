const products = [
  // ---- عطرها (Perfumes - 16 Items) ----
  {id:1, name:"Nuit d'Or", category:"perfume", price:2850000, image:"image_gen_8b4be9c4-0adf-4b94-aff6-a69986d5e429_0.webp", desc:"عطری فاخر با ماندگاری بالا برای شب‌های خاص."},
  {id:2, name:"Velvet Musk", category:"perfume", price:3200000, image:"image_gen_bd030d5f-a31f-453e-95b0-53c59500a5bf_0.webp", desc:"مش مخملی و گرم، امضای شخصیت شما."},
  {id:3, name:"Oud Noir", category:"perfume", price:4100000, image:"image_gen_1c52b128-a5df-432c-98e1-191cbd9e64c1_0.webp", desc:"عود سیاه و اصیل، انتخاب پادشاهان."},
  {id:4, name:"Rose Élixir", category:"perfume", price:2750000, image:"image-(6).webp", desc:"گل رز دمشقی با رگه‌های وانیل."},
  {id:5, name:"Santal Précieux", category:"perfume", price:3600000, image:"image-(9).webp", desc:"چوب صندل گرم و آرامش‌بخش."},
  {id:6, name:"Amber Royale", category:"perfume", price:3450000, image:"image-(10).webp", desc:"کهربای سلطنتی با تلخی دلپذیر."},
  {id:7, name:"Iris Lumière", category:"perfume", price:2950000, image:"image.webp", desc:"زنبق روشن و لطیف برای روزهای کاری."},
  {id:8, name:"Cuir Sauvage", category:"perfume", price:3900000, image:"image-(2).webp", desc:"بوی چرم وحشی، خشن و جذاب."},
  {id:9, name:"Vanille Impériale", category:"perfume", price:3050000, image:"image-(3).webp", desc:"وانیل شیرین با ماندگاری بی‌نظیر."},
  {id:10, name:"Bergamote Nuit", category:"perfume", price:2800000, image:"image-(4).webp", desc:"ترنج تازه با روح شبانه."},
  {id:11, name:"Saffron Secret", category:"perfume", price:4300000, image:"image-(5).webp", desc:"زعفران ایرانی، راز جذابیت شرقی."},
  {id:12, name:"Patchouli Noir", category:"perfume", price:3250000, image:"image-(7).webp", desc:"پاتچولی تیره و مرموز."},
  {id:13, name:"Fleur de Minuit", category:"perfume", price:3350000, image:"image-(8).webp", desc:"گل‌های نیمه‌شب، ظریف و رازآلود."},
  {id:14, name:"Tabac Royal", category:"perfume", price:3700000, image:"image-(11).webp", desc:"تنباکوی اشرافی با عسل و ادویه."},
  {id:15, name:"Musc Blanc", category:"perfume", price:2650000, image:"image-(12).webp", desc:"مش سفید، پاک و به‌شدت ماندگار."},
  {id:16, name:"Ambre Éternel", category:"perfume", price:3950000, image:"image_gen_8b4be9c4-0adf-4b94-aff6-a69986d5e429_0.webp", desc:"کهربای جاودانه برای شب‌های زمستانی."},

  // ---- اسپری‌ها (Sprays - 10 Items) ----
  {id:17, name:"Citrus Doré", category:"spray", price:1250000, image:"image_gen_bd030d5f-a31f-453e-95b0-53c59500a5bf_0.webp", desc:"اسپری مرکبات طلایی، سرشار از انرژی."},
  {id:18, name:"Cedre d'Or", category:"spray", price:1390000, image:"image_gen_1c52b128-a5df-432c-98e1-191cbd9e64c1_0.webp", desc:"اسپری چوب سدر برای محیط کار."},
  {id:19, name:"Jasmin d'Or", category:"spray", price:1180000, image:"image-(6).webp", desc:"یاس طلایی، سبک و بانمک."},
  {id:20, name:"Cacao Absolu", category:"spray", price:1450000, image:"image-(9).webp", desc:"اسپری کاکائوی تلخ و لذیذ."},
  {id:21, name:"Lavande Impériale", category:"spray", price:1120000, image:"image-(10).webp", desc:"اسطوخودوس امپراتوری، آرام‌بخش."},
  {id:22, name:"Cèdre Blanc", category:"spray", price:1290000, image:"image.webp", desc:"سدر سفید، مینیمال و مدرن."},
  {id:23, name:"Pêche Nectar", category:"spray", price:1050000, image:"image-(2).webp", desc:"اسپری شفتالو، شیرین و تابستانی."},
  {id:24, name:"Thé Vert Céleste", category:"spray", price:990000, image:"image-(3).webp", desc:"چای سبز آسمانی، خنک و تازه."},
  {id:25, name:"Fleur d'Oranger", category:"spray", price:1350000, image:"image-(4).webp", desc:"اسپری بهارنارنج، نوستالژیک."},
  {id:26, name:"Vétiver Élégant", category:"spray", price:1420000, image:"image-(5).webp", desc:"ویتیور شیک، برای آقایان خوش‌سلیقه."},

  // ---- بادی اسپلش‌ها (Body Splashes - 10 Items) ----
  {id:27, name:"Miel d'Or", category:"body-splash", price:780000, image:"image_gen_1c52b128-a5df-432c-98e1-191cbd9e64c1_0.webp", desc:"بادی اسپلش عسل طلایی، لطیف روی پوست."},
  {id:28, name:"Grenade Obscure", category:"body-splash", price:850000, image:"image-(7).webp", desc:"انار سیاه، ترش و وسوسه‌انگیز."},
  {id:29, name:"Pivoine Rosée", category:"body-splash", price:760000, image:"image-(8).webp", desc:"شبنم گل رز، سرحال‌کننده صبحگاهی."},
  {id:30, name:"Figue Noire", category:"body-splash", price:820000, image:"image-(11).webp", desc:"انجیر سیاه، سبز و گرم."},
  {id:31, name:"Café Noir", category:"body-splash", price:880000, image:"image-(12).webp", desc:"بوی قهوه تلخ، بیدارباش واقعی!"},
  {id:32, name:"Bois de Minuit", category:"body-splash", price:920000, image:"image_gen_8b4be9c4-0adf-4b94-aff6-a69986d5e429_0.webp", desc:"چوب نیمه‌شب، عمیق و ماندگار."},
  {id:33, name:"Encens Sacré", category:"body-splash", price:860000, image:"image-(9).webp", desc:"عطری با رایحه بخور مقدس."},
  {id:34, name:"Coco Vanille", category:"body-splash", price:740000, image:"image-(10).webp", desc:"نارگیل و وانیل، حس تعطیلات ساحلی."},
  {id:35, name:"Aqua Fraîche", category:"body-splash", price:690000, image:"image-(2).webp", desc:"آب خنک اقیانوس، برای روزهای گرم."},
  {id:36, name:"Fruits Rouges", category:"body-splash", price:710000, image:"image-(3).webp", desc:"میوه‌های قرمز، شاد و جوان."}
];
