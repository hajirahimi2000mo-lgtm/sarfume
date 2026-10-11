
const products = [
  // ادکلن‌ها
  { id: 1, name: "بلک افغان", brand: "Nasomatto", price: "۴,۸۵۰,۰۰۰ تومان", category: "perfume", image: "images/products/black-afghan.webp", scent: "گرم و تلخ، دودی و چوبی", volume: "۳۰ میلی‌لیتر", description: "عطر بلک افغان نمادی از قدرت و جذابیت بی‌حدوحصر است. ترکیبی ماندگار از نت‌های دودی، قهوه، عود و چوب‌های نفیس." },
  { id: 2, name: "ساواج دیور", brand: "Dior", price: "۵,۲۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/sauvage.webp", scent: "خنک و تند، ادویه‌ای و مرکباتی", volume: "۱۰۰ میلی‌لیتر", description: "شاهکار دیور با رایحه‌ای بی‌نهایت تازه، تمیز و همه‌پسند. عصاره ترنج کالابریا و فلفل سیچوان." },
  { id: 3, name: "عود وود", brand: "Tom Ford", price: "۶,۱۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/oud-wood.webp", scent: "گرم و چوبی، عودی و آروماتیک", volume: "۱۰۰ میلی‌لیتر", description: "یکی از گران‌بهاترین و اصیل‌ترین عطرهای چوبی جهان با ترکیب عود خالص، هل و کهربا." },
  { id: 4, name: "لومیر نوآر", brand: "Maison FK", price: "۴,۹۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/lumiere-noire.webp", scent: "گرم و شرقی، گلی و ادویه‌ای", volume: "۷۰ میلی‌لیتر", description: "تلاقی سایه و روشن با ترکیبی پر رمز و راز از گل رز مخملی، نعناع هندی و دارچین." },
  { id: 5, name: "کرید اونتوس", brand: "Creed", price: "۸,۵۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/black-afghan.webp", scent: "خنک و تلخ، میوه‌ای و چرمی", volume: "۱۰۰ میلی‌لیتر", description: "پادشاه جاودانه عطرهای مدرن با رایحه‌ای پیروزمندانه از آناناس، غان، یاس و مشک." },
  { id: 6, name: "باکارات رژ ۵۴۰", brand: "Maison FK", price: "۷,۹۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/sauvage.webp", scent: "گرم و شیرین، کهربایی و زعفرانی", volume: "۷۰ میلی‌لیتر", description: "عطری جادویی و شفاف با پخش بوی فوق‌العاده؛ ترکیبی اشرافی از زعفران ایرانی و کهربا." },
  { id: 7, name: "توباکو وانیل", brand: "Tom Ford", price: "۶,۴۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/oud-wood.webp", scent: "گرم و شیرین، تنباکویی و ادویه‌ای", volume: "۱۰۰ میلی‌لیتر", description: "بازآفرینی فضای کلوب‌های کلاسیک لندن با تلفیقی مست‌کننده از تنباکوی درجه‌یک و وانیل." },
  { id: 8, name: "سیلور مانتین", brand: "Creed", price: "۷,۲۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/lumiere-noire.webp", scent: "خنک و ترش، چای سبز و توت سیاه", volume: "۱۰۰ میلی‌لیتر", description: "الهام‌گرفته از جریان زلال چشمه‌های آلپ؛ رایحه‌ای باطراوت، پاک و انرژی‌بخش." },
  { id: 9, name: "بلو شنل", brand: "Chanel", price: "۵,۱۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/black-afghan.webp", scent: "خنک و معتدل، تلخ و چوبی", volume: "۱۰۰ میلی‌لیتر", description: "قصیده‌ای در ستایش آزادی مردانه؛ تلفیقی چشمگیر از گریپ‌فروت، صندل و چوب سدر." },
  { id: 10, name: "تق هرمس", brand: "Hermes", price: "۴,۶۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/sauvage.webp", scent: "تلخ و تند، خاکی و پرتقالی", volume: "۱۰۰ میلی‌لیتر", description: "پیوند انسان با عناصر زمین؛ رایحه‌ای باوقار از پرتقال تلخ، سنگ آتش‌زنه و خس‌خس." },
  { id: 11, name: "دیور هوم اینتنس", brand: "Dior", price: "۵,۴۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/oud-wood.webp", scent: "گرم و شیرین، زنبقی و پودری", volume: "۱۰۰ میلی‌لیتر", description: "عصاره شیک‌پوشی پاریسی؛ همنشینی زنبق کمیاب با گل ختی و کهربای عمیق." },
  { id: 12, name: "لالیک مشکی", brand: "Lalique", price: "۱,۹۵۰,۰۰۰ تومان", category: "perfume", image: "images/products/lumiere-noire.webp", scent: "تلخ و گرم، چوبی و دودی", volume: "۱۰۰ میلی‌لیتر", description: "عطر جوهر سیاه (انکر نوآر)؛ بویی تاریک، بارانی و خلسه‌آور از چوب سرو و خس‌خس." },
  { id: 13, name: "پگاسوس", brand: "Parfums de Marly", price: "۶,۸۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/black-afghan.webp", scent: "شیرین و تلخ، بادامی و وانیلی", volume: "۱۲۵ میلی‌لیتر", description: "اسب بالدار افسانه‌ای؛ ترکیبی خاص و شاهانه از بادام تلخ، وانیل و چوب صندل سفید." },
  { id: 14, name: "هرود", brand: "Parfums de Marly", price: "۶,۹۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/sauvage.webp", scent: "گرم و شیرین، تنباکو و دارچین", volume: "۱۲۵ میلی‌لیتر", description: "گرمی پرهیبت دربار فرانسه؛ ترکیبی مجلل از برگ توتون، دارچین و نوت‌های صمغی." },
  { id: 15, name: "کلوین کلاین وان", brand: "Calvin Klein", price: "۲,۳۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/oud-wood.webp", scent: "خنک و شیرین، مرکباتی و سبز", volume: "۱۰۰ میلی‌لیتر", description: "عطر همه‌کاره و محبوب با خنکی باطراوت لیمو و آناناس در کنار چای سبز." },
  { id: 16, name: "آکوا دی جیو", brand: "Giorgio Armani", price: "۴,۴۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/lumiere-noire.webp", scent: "خنک و دریایی، مدیترانه‌ای", volume: "۱۰۰ میلی‌لیتر", description: "خنکای نسیم دریای مدیترانه؛ بویی جاودانه از آب دریا، رزماری و ترنج." },
  { id: 17, name: "ورساچه اروس", brand: "Versace", price: "۳,۸۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/black-afghan.webp", scent: "معتدل و شیرین، نعنایی و وانیلی", volume: "۱۰۰ میلی‌لیتر", description: "خدای عشق یونان باستان؛ انفجاری هیجان‌انگیز از برگ نعناع تازه، سیب سبز و دانه تونکا." },
  { id: 18, name: "تام فورد فاکینگ فابولوس", brand: "Tom Ford", price: "۸,۲۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/sauvage.webp", scent: "گرم و تلخ، چرمی و گیاهی", volume: "۵۰ میلی‌لیتر", description: "عطری خاص و تکان‌دهنده با نوت چرم اشرافی، اسطوخودوس و بادام." },
  { id: 19, name: "اینترلود", brand: "Amouage", price: "۷,۵۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/oud-wood.webp", scent: "بسیار گرم و دودی، صمغی", volume: "۱۰۰ میلی‌لیتر", description: "معروف به هیولای آبی؛ پخشی سهمگین با رایحه کندر، کهربا و چرم دودی." },
  { id: 20, name: "رفلکشن مردانه", brand: "Amouage", price: "۷,۱۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/lumiere-noire.webp", scent: "خنک و تلخ، گلی و چوبی", volume: "۱۰۰ میلی‌لیتر", description: "نماد وقار مردانه؛ پاکی شکوفه پرتقال، رزماری و صندل در اوج هارمونی." },
  { id: 21, name: "مگاماره", brand: "Orto Parisi", price: "۵,۷۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/black-afghan.webp", scent: "خنک و نمکی، اقیانوسی", volume: "۵۰ میلی‌لیتر", description: "قدرت طوفان اقیانوس؛ رایحه‌ای مسحورکننده از آب دریا، ید و مشک." },
  { id: 22, name: "بارائوندا", brand: "Nasomatto", price: "۵,۵۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/sauvage.webp", scent: "گرم و گیرا، ویسکی و چوبی", volume: "۳۰ میلی‌لیتر", description: "حسی مست‌کننده از بشکه‌های چوب بلوط، نوشیدنی کهنه و گل رز مخملی." },
  { id: 23, name: "کلاب د نویت", brand: "Armaf", price: "۲,۱۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/oud-wood.webp", scent: "خنک و دودی، مرکباتی و چرمی", volume: "۱۰۵ میلی‌لیتر", description: "محبوب‌ترین رایحه دودی میوه‌ای؛ تندی لیمو و دود غان با ماندگاری بالا." },
  { id: 24, name: "مارلی لیتون", brand: "Parfums de Marly", price: "۷,۴۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/lumiere-noire.webp", scent: "معتدل و شیرین، سیب و وانیل", volume: "۱۲۵ میلی‌لیتر", description: "عطر اشراف‌زاده‌های ورسای؛ آمیزه‌ای لوکس از سیب ترش، هل و وانیل." },
  { id: 25, name: "کرید گرین آیریش", brand: "Creed", price: "۷,۸۰۰,۰۰۰ تومان", category: "perfume", image: "images/products/black-afghan.webp", scent: "خنک و کلاسیک، چمنزار و عنبر", volume: "۱۰۰ میلی‌لیتر", description: "قدم زدن در چمنزارهای باران‌خورده ایرلند؛ اصیل، طبیعی و فرش." },

  // اسپری بدن
  { id: 26, name: "اسپری ساواج", brand: "Dior", price: "۳۹۰,۰۰۰ تومان", category: "spray", image: "images/products/sauvage.webp", scent: "خنک و تند روزمره", volume: "۲۰۰ میلی‌لیتر", description: "اسپری ضد تعریق با فرمولاسیون ساواج دیور، مناسب فعالیت‌های روزانه." },
  { id: 27, name: "اسپری بلک افغان", brand: "Nasomatto", price: "۴۲۰,۰۰۰ تومان", category: "spray", image: "images/products/black-afghan.webp", scent: "گرم و تلخ دودی", volume: "۲۰۰ میلی‌لیتر", description: "پخش بوی خیره‌کننده با رایحه غلیظ بلک افغان برای روزهای سرد سال." },
  { id: 28, name: "اسپری بلو شنل", brand: "Chanel", price: "۳۸۰,۰۰۰ تومان", category: "spray", image: "images/products/oud-wood.webp", scent: "خنک و شاداب‌کننده", volume: "۲۰۰ میلی‌لیتر", description: "حس شادابی ماندگار پس از استحمام با رایحه آروماتیک بلو شنل." },
  { id: 29, name: "اسپری تق هرمس", brand: "Hermes", price: "۳۷۰,۰۰۰ تومان", category: "spray", image: "images/products/lumiere-noire.webp", scent: "تلخ و خاکی", volume: "۲۰۰ میلی‌لیتر", description: "طراوت بخش خاک باران‌خورده و مرکبات تلخ در طول کل روز." },
  { id: 30, name: "اسپری اونتوس", brand: "Creed", price: "۴۱۰,۰۰۰ تومان", category: "spray", image: "images/products/sauvage.webp", scent: "خنک و میوه‌ای", volume: "۲۰۰ میلی‌لیتر", description: "بوی شیک کرید اونتوس به صورت اسپری با ماندگاری بالا." },

  // بادی اسپلش
  { id: 31, name: "بادی اسپلش پیور سداکشن", brand: "Victoria Secret", price: "۵۸۰,۰۰۰ تومان", category: "bodysplash", image: "images/products/black-afghan.webp", scent: "شیرین و میوه‌ای", volume: "۲۵۰ میلی‌لیتر", description: "بادی میست آبرسان با رایحه آلو قرمز و شکوفه‌های بهاری." },
  { id: 32, name: "بادی اسپلش بر وانیلا", brand: "Victoria Secret", price: "۵۹۰,۰۰۰ تومان", category: "bodysplash", image: "images/products/oud-wood.webp", scent: "گرم و شیرین", volume: "۲۵۰ میلی‌لیتر", description: "نوازش گرم وانیل غلیظ و کشمیر مخملی بر روی پوست." },
  { id: 33, name: "بادی اسپلش لاو اسپل", brand: "Victoria Secret", price: "۵۷۰,۰۰۰ تومان", category: "bodysplash", image: "images/products/sauvage.webp", scent: "خنک و میوه‌ای", volume: "۲۵۰ میلی‌لیتر", description: "رایحه‌ای وسوسه‌انگیز از شکوفه‌های گیلاس و هلوی آبدار." },
  { id: 34, name: "بادی اسپلش کوکونات پشن", brand: "Victoria Secret", price: "۵۹۰,۰۰۰ تومان", category: "bodysplash", image: "images/products/lumiere-noire.webp", scent: "گرم و استوایی", volume: "۲۵۰ میلی‌لیتر", description: "حس تعطیلات جزایر گرمسیری با شیر نارگیل و وانیل کاراملی." },
  { id: 35, name: "بادی اسپلش ولوت پتالز", brand: "Victoria Secret", price: "۵۸۰,۰۰۰ تومان", category: "bodysplash", image: "images/products/black-afghan.webp", scent: "ملایم و شیرین", volume: "۲۵۰ میلی‌لیتر", description: "عطر گل‌های ابریشمی و بادام خیس خورده؛ مناسب بعد از دوش." }
];

function renderProducts(container, items = products) {
  if (!container) return;

  if (!items || items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted, #8a8a93); padding: 3rem 1rem;">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">محصولی در این دسته‌بندی یافت نشد.</p>
        <span style="font-size: 0.85rem; color: var(--gold-primary, #d4af37);">لطفاً دسته‌بندی دیگری را انتخاب کنید</span>
      </div>
    `;
    return;
  }

  container.innerHTML = items
    .map((item) => `
      <article class="product-card" data-id="${item.id}">
        <div class="product-card__img">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="product-card__body">
          <span class="product-card__brand">${item.brand}</span>
          <h3 class="product-card__name">${item.name}</h3>
          <span class="product-card__price">${item.price}</span>
        </div>
        <div class="product-card__action">
          <button class="product-card__btn" type="button" data-product-id="${item.id}">افزودن به سبد</button>
        </div>
      </article>
    `)
    .join("");
}

// ثبت سراسری برای لود مستقیم با تگ <script> بدون ارور CORS/Module
if (typeof window !== "undefined") {
  window.products = products;
  window.renderProducts = renderProducts;
}

// پشتیبانی از ساختارهای ماژولار (Webpack, Vite یا type="module")
export { products, renderProducts };
