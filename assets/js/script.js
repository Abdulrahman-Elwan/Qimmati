// scrolled  nav

document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".fixed-top-nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});




// *********** translations ***********

let translations = {
  en: {
    en: "انجليزي",
    ar: "عربي",
    qimmati_nav: "QIMMATI <br>",
    home: "Home",
    about: "About",
    product: "Shope",
    contact: "Contact",
    tape: "Long-lasting cleanliness, refreshing fragrance! 🏡✨ Shop now for the best cleaning products at amazing prices!",
    qimmati: "Qimmati",
    qimmati_hero_title: "Your Reliable Choice for High-Quality Detergents and Fragrances.",
    qimmati_hero_p: "At Qimmati, we take pride in providing top-tier detergents and fragrances crafted to enhance your everyday cleaning routine. With meticulous attention to detail, our products consistently meet the highest industry standards. Whether for household or industrial use, Qimmati is the trusted brand for dependable, eco-friendly solutions. We proudly support local manufacturing, aiming to improve lives through products that combine safety, efficiency, and freshness.",
    qimmati_hero_bottom: "Request for Quotation for Companies and Wholesalers",
    Delivery1: "Delivery",
    Deliveryp: "Across the KSA",
    Support: "24/7 Support",
    Supportp: "Customer support",
    Products: "Products",
    Productsp: "Available",
    Trusted: "Trusted",
    Trustedp: "Authentic products",
    about_us: "About US",
    about_us_h_main: "Expertly Crafted Solutions for a Cleaner and Fresher World",
    about_us_p_main: "Our company was established in 2018 with the goal of contributing to the improvement of quality of life, inspired by our government's Vision 2030. We are dedicated to providing high-quality, locally manufactured products, supporting industrial localization, and playing a vital role in packaging, transportation, and distribution to achieve significant economic progress on a national level. The company's activities include the production of most consumer products needed by families, with a focus on safe and reliable products for cleaning floors, surfaces, and clothing, as well as offering premium personal and household care products.",
    about_us_bottom: "Learn More",
    process_h: "We follow a structured approach<br> to ensure <span class=\"accent\">our company</span> runs smoothly and efficiently.",
    deal: "QIMMATI DEAL",
    deal_p: "Explore our premium products crafted to elevate your daily life with unmatched freshness and exceptional care.",
    shop_Now: "Shop Now",
    clients_Say: "What Our Clients Say",
    clients_Say_p: "We take pride in delivering exceptional cleaning solutions that meet the needs of our customers.",
    client1_Say: "qimmati products are outstanding! They have made cleaning easier and more effective for my home.",
    client2_Say: "We use qimmati's cleaning solutions in our offices, and the results are always impressive. Highly recommend!",
    client3_Say: "The safety and eco-friendliness of qimmati's products give me peace of mind for my family's health.",
    client4_Say: "Using qimmati's industrial cleaning solutions has been a game changer for our facility. Exceptional quality!",
    client5_Say: "Qimmati's wide range of products ensures that we can cater to every customer's needs. Excellent service!",

    company: "Company",
    get: "Get Help",
    FAQ: "FAQ",
    shipping: "Shipping",
    returns: "Returns",
    payment: "Payment options",
    online: "Online Shop",
    Detergents: "Detergents",
    care1: "Home care",
    care2: "Personal care",
    follow: "Follow us",
    bottom_footer_texr_1: "All rights reserved to <a href=\"qimmati.sa\"><b>Qimmati</b></a>",
    bottom_footer_text_2: "Verified on the Business Platform",
    tax_number: "Tax number",


    // *************** About page ***************
    about_qimmati_footer: "About Qimmati",
    about_qimmati_hero_p: "Discover the story and values that make qimmati a trusted leader in cleaning solutions.",
    Happy_Client: "<strong>Happy Clients</strong>",
    cum_Product: "<strong>Product</strong>",
    support_Hours: "<strong>Hours Of Support</strong>",
    hard_Worker: "<strong>Hard Workers</strong>",
    about_us_p_about: "<span>qimmati</span> qimmati Specialty Chemicals Company is a pioneering force in the cleaning materials industry within the Kingdom of Saudi qimmatibia. With a vision to explore new horizons, we are committed to delivering high-quality, innovative products that set the standard for both domestic and industrial cleaning solutions. Our dedication is not just to meet market expectations but to surpass them with superior products that redefine the concept of cleanliness and efficiency.",
    about_us_ul_li1: "The company was established in 2023 as a leading manufacturer of air fresheners, detergents, and liquid sanitization and disinfection products in the Kingdom of Saudi qimmatibia.",
    about_us_ul_li2: "Headquartered in Jubail, Saudi qimmatibia, where both the main office and the factory are located, we offer a diverse range of products in various sizes, starting from 150 ml bottles up to 30-liter gallons. This allows us to meet the varying demands of the local market and international markets through our export division.",
    about_us_ul_li3: "We strive to elevate the industry of air fresheners and liquid detergents in the Kingdom by providing the highest quality products at the most competitive prices.",
    explore_Products: "Explore Our Products",
    mission_vision_h: "Our Vision & Mission",
    our_Vision: "Our Vision",
    our_Vision_p: "We strive to build a national service network with local factories, replacing low-cost imports with Saudi-standard products. Through transparent partnerships and continuous improvement, we bridge the gap between manufacturers and consumers, ensuring top-quality products and customer satisfaction.",
    our_Mission: "Our Mission",
    our_Mission_p: "Our mission extends to enhancing levels of cleanliness and hygiene by offering superior-quality detergents, expertly crafted disinfectants, captivating air fresheners, clean and bright fabrics with safe bleach, hand wash liquids, and other essential products.",
    our_Goal: "Our Goal",
    our_Goal_p: "Localizing the industry, elevating the quality of its products, and enhancing the supply chain by connecting trusted manufacturers with satisfied consumers across the Kingdom of Saudi Arabia.",
    our_Process: "Our Process",
    our_Process_p: "We follow a structured approach to deliver high-quality products that exceed expectations:",
    process_step_h4_1: "1. Research & Development",
    process_step_p_1: "Our team conducts extensive research to design innovative solutions that cater to diverse cleaning needs.",
    process_step_h4_2: "2. Quality Assurance",
    process_step_p_2: "We ensure that every product meets the highest safety and quality standards before it reaches the market.",
    process_step_h4_3: "3. Customer Feedback",
    process_step_p_3: "We value customer feedback and use it to continuously improve our products and services.",

    // *************** producte page ***************

    our_Products: "Our Products",
    our_Products_p: "qimmati Company offers a wide range of cleaning and hygiene products, carefully designed to meet the diverse needs of our customers",
    Categories: "Categories",
    Price_filter: "Price Filter",
    lowest: "Lowest price :",
    maximum: "Maximum price :",
    search: "Search",
    all_Products: "All Products",
    Products1: "Abaya washing liquid",
    Products2: "Concentrated Fabric Softener",
    Products3: "Dishwashing Liquid",
    Products4: "Sanitizing Gel",
    Products5: "All-Purpose Stain Remover",
    Products6: "Multi-Purpose Disinfectant",
    Products7: "Concentrated Air & Fabric Freshener",
    Products8: "High-Concentration Multi-Purpose Freshener",
    Products9: "Multi-Purpose Cleaner",
    Products10: "Glass Cleaner & Polisher",
    discount : "Discount",
    add_to_cart_btn: "Add to Cart",


    // *************** Contact page ***************

    Email: "E-mail",
    Phonee: "Mobile",
    firstName: "First Name",
    LastName: "Last Name",
    phoneNumber: "Phone Number",
    subject: "Subject",
    message: "Message",
    SendMessage: "Send Message",

  },
  ar: {
    en: "English",
    ar: "عربي",
    qimmati_nav: "قمتي <br>",
    home: "الرئيسية",
    about: "من نحن",
    product: "المتجر",
    contact: "تواصل معنا",
    tape: "نظافة تدوم طويلاً، وعطر منعش! 🏡✨ تسوق الآن للحصول على أفضل منتجات التنظيف بأسعار مذهلة",
    qimmati: "قمتي",
    qimmati_hero_title: "اختيارك الموثوق للمنظفات والعطور عالية الجودة.",
    qimmati_hero_p: "في قمتي، نفخر بتقديم منظفات وعطور عالية الجودة مصممة لتحسين روتين التنظيف اليومي الخاص بك. مع اهتمامنا الدقيق بالتفاصيل، تلتزم منتجاتنا دائمًا بأعلى معايير الجودة في الصناعة. سواء للاستخدام المنزلي أو الصناعي، تعد قمتي العلامة التجارية الموثوقة للحلول المستدامة والآمنة. نحن ندعم التصنيع المحلي، ونسعى لتحسين الحياة من خلال منتجات تجمع بين الأمان والكفاءة والانتعاش.",
    qimmati_hero_bottom: "طلب عرض سعر للشركات والجملة",
    Delivery1: "التوصيل",
    Deliveryp: "في جميع أنحاء المملكة العربية السعودية",
    Support: "الدعم الفني",
    Supportp: "متاح 24/7",
    Products: "المنتجات",
    Productsp: "متوفرة",
    Trusted: "موثوق",
    Trustedp: "منتجات أصلية",
    about_us: "من نحن",
    about_us_h_main: "حلول مصممة بإتقان لعالم أنظف وأكثر انتعاشًا",
    about_us_p_main: "تأسست شركتنا في عام 2018 بهدف المساهمة في تحسين جودة الحياة، مستوحاة من رؤية 2030. نحن ملتزمون بتوفير منتجات عالية الجودة مصنوعة محليًا، ودعم توطين الصناعة، ولعب دور رئيسي في التعبئة والنقل والتوزيع لتحقيق تقدم اقتصادي ملموس على المستوى الوطني. تشمل أنشطة الشركة إنتاج معظم المنتجات الاستهلاكية التي تحتاجها العائلات، مع التركيز على المنتجات الآمنة والموثوقة لتنظيف الأرضيات والأسطح والملابس، بالإضافة إلى تقديم منتجات العناية الشخصية والمنزلية المتميزة",
    about_us_bottom: "اعرف المزيد",
    process_h: "نتبع نهجًا منظمًا لضمان تشغيل <span class=\"accent\">شركتنا</span> بسلاسة وكفاءة",
    deal: "عروض قمتي",
    deal_p: "اكتشف منتجاتنا المتميزة المصممة لتعزيز حياتك اليومية بانتعاش لا مثيل له ورعاية فائقة",
    shop_Now: "تسوق الآن",
    clients_Say: "آراء عملائنا",
    clients_Say_p: "نحن نفخر بتقديم حلول تنظيف استثنائية تلبي احتياجات عملائنا",
    client1_Say: "منتجات قمتي رائعة! جعلت التنظيف أسهل وأكثر فعالية في منزلي",
    client2_Say: "نستخدم حلول قمتي للتنظيف في مكاتبنا، والنتائج دائمًا رائعة. أنصح بها بشدة",
    client3_Say: "أمان منتجات قمتي وصداقتها للبيئة يمنحاني راحة البال لصحة عائلتي",
    client4_Say: "استخدام حلول قمتي الصناعية للتنظيف كان تحولًا كبيرًا لمنشأتنا. جودة استثنائية",
    client5_Say: "مجموعة منتجات قمتي الواسعة تضمن لنا تلبية احتياجات جميع العملاء. خدمة ممتازة",
    company: "روابط",
    get: "المساعدة",
    FAQ: "الأسئلة الشائعة",
    shipping: "الشحن",
    returns: "الإرجاع",
    payment: "خيارات الدفع",
    online: "المتجر الإلكتروني",
    Detergents: "المنظفات",
    care1: "العناية المنزلية",
    care2: "العناية الشخصية",
    follow: "تابعنا",
    bottom_footer_texr_1: "جميع الحقوق محفوظه لدي شركة <a href=\"qimmati.sa\"><b>قمتي</b></a>",
    bottom_footer_texr_2: "موثّق في منصة الأعمال",
    tax_number: "الرقم الضريبي",

    // *************** About page ***************

    about_qimmati_footer: "عن قمتي",
    about_qimmati_hero_p: "اكتشف القصة والقيم التي جعلت قمتي رائدًا موثوقًا في حلول التنظيف",
    Happy_Client: "<strong>عملاء سعداء</strong>",
    cum_Product: "<strong>المنتجات</strong>",
    support_Hours: "<strong>ساعات الدعم</strong>",
    hard_Worker: "<strong>العمال المجتهدون</strong>",
    about_us_p_about: "<span>قمتي</span> شركة قمتي للكيماويات المتخصصة هي قوة رائدة في صناعة مواد التنظيف داخل المملكة العربية السعودية. برؤية تستكشف آفاقًا جديدة، نحن ملتزمون بتقديم منتجات عالية الجودة ومبتكرة تضع معايير جديدة لحلول التنظيف المنزلية والصناعية. التزامنا لا يقتصر فقط على تلبية توقعات السوق، بل يتجاوزها عبر تقديم منتجات فائقة الجودة تعيد تعريف مفهوم النظافة والكفاءة",
    about_us_ul_li1: "تأسست الشركة في عام 2023 كشركة رائدة في تصنيع معطرات الجو والمنظفات ومنتجات التعقيم والتطهير السائلة في المملكة العربية السعودية",
    about_us_ul_li2: "يقع مقر الشركة الرئيسي ومصنعها في مدينة الجبيل، حيث نقدم مجموعة متنوعة من المنتجات بأحجام مختلفة تبدأ من عبوات 150 مل وصولًا إلى جالونات 30 لتر، مما يتيح لنا تلبية احتياجات السوق المحلي والتصدير للأسواق الدولية",
    about_us_ul_li3: "نسعى للارتقاء بصناعة معطرات الجو والمنظفات السائلة في المملكة من خلال تقديم منتجات بأعلى جودة وبأسعار تنافسية",
    explore_Products: "استكشف منتجاتنا",
    mission_vision_h: "رؤيتنا ورسالتنا",
    our_Vision: "رؤيتنا",
    our_Vision_p: "نسعى لبناء شبكة خدمات وطنية تعتمد على المصانع المحلية، واستبدال الواردات منخفضة التكلفة بمنتجات سعودية بمعايير عالية. من خلال الشراكات الشفافة والتحسين المستمر، نعمل على سد الفجوة بين المصنعين والمستهلكين لضمان تقديم منتجات ذات جودة عالية وإرضاء العملاء.",
    our_Mission: "مهمتنا",
    our_Mission_p: "تمتد مهمتنا إلى تعزيز مستويات النظافة والصحة من خلال تقديم منظفات عالية الجودة، ومعقمات مصممة بخبرة، ومعطرات جو جذابة، ومنتجات مبيّض آمنة، وسوائل لغسيل اليدين، وغيرها من المنتجات الأساسية",
    our_Goal: "هدفنا",
    our_Goal_p: "توطين الصناعة، والارتقاء بجودة منتجاتها، وتعزيز سلسلة التوريد من خلال ربط المصنعين الموثوقين بالمستهلكين الراضين في جميع أنحاء المملكة العربية السعودية",
    our_Process: "مراحل التصنيع",
    our_Process_p: "نتبع نهجًا منهجيًا لتقديم منتجات عالية الجودة تفوق التوقعات",
    process_step_h4_1: "البحث والتطوير",
    process_step_p_1: "يجري فريقنا أبحاثًا مكثفة لتصميم حلول مبتكرة تلبي احتياجات التنظيف المتنوعة",
    process_step_h4_2: "ضمان الجودة",
    process_step_p_2: "نضمن أن كل منتج يفي بأعلى معايير السلامة والجودة قبل طرحه في السوق",
    process_step_h4_3: "ملاحظات العملاء",
    process_step_p_3: "نقدّر ملاحظات العملاء ونستخدمها باستمرار لتحسين منتجاتنا وخدماتنا",

    // *************** producte page ***************

    our_Products: "منتجاتنا",
    our_Products_p: "تقدم شركة قمتي مجموعة واسعة من منتجات التنظيف والعناية الصحية، المصممة بعناية لتلبية الاحتياجات المتنوعة لعملائنا",
    Categories: "الفئات",
    Price_filter: "تصفية حسب السعر",
    lowest: "أقل سعر :",
    maximum: "أعلى سعر :",
    search: "بحث",
    all_Products: "جميع المنتجات",
    Products1: "سائل غسيل العبايات",
    Products2: "منعم الأقمشة المركز",
    Products3: "سائل غسل الأطباق",
    Products4: "جل معقم",
    Products5: "مزيل البقع متعدد الاستخدامات",
    Products6: "مطهر متعدد الاستخدامات",
    Products7: "معطر الجو والأقمشة المركز",
    Products8: "معطر متعدد الاستخدامات بتركيز عالٍ",
    Products9: "منظف متعدد الاستخدامات",
    Products10: "منظف وملمع الزجاج",
    discount : "خصم",
    add_to_cart_btn: "أضف إلى السلة",


    // *************** Contact page ***************

    Email: "البريد الإلكتروني",
    firstName: "الاسم الأول",
    LastName: "الاسم الثاني",
    phoneNumber: "رقم الهاتف",
    subject: "الموضوع",
    message: "الرسالة",
    SendMessage: "إرسال",

  }

};

let rtlLanguages = ['ar']; // قائمة اللغات التي تتطلب الاتجاه من اليمين إلى اليسار
document.getElementById('languageSelector').addEventListener('change', (e) => {
  let selectedLang = e.target.value;
  localStorage.setItem('selectedLanguage', selectedLang);

  // تطبيق الترجمة على باقي الصفحة
  applyTranslations(selectedLang);
  applyFont(selectedLang);

  // ✅ إعادة عرض المنتجات باللغة الجديدة فورًا
  renderProducts();
});

function applyTranslations(language) {
  document.querySelectorAll('[data-key]').forEach((element) => {
    let key = element.getAttribute('data-key');
    if (translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });
  document.querySelectorAll('[data-key]').forEach((element) => {
    let key = element.getAttribute('data-key');
    element.innerHTML = translations[language][key];
  });



  let elements = document.querySelectorAll(".rotat");
  let rotatNot = document.querySelectorAll(".rotatNot");
  let textRightElements = document.querySelectorAll(".text_right");
  let textCenterElements = document.querySelectorAll(".text_center");
  let services1 = document.querySelectorAll("#services1");
  let lists = document.querySelectorAll('.list');
  let pricing = document.querySelectorAll('.banner .container .text a');
  let text_pp = document.querySelectorAll(".textp_pp");
  let text_ff = document.querySelectorAll(".textp_ff");
  let space = document.querySelectorAll(".space");

  lists.forEach((element) => {
    element.style.direction = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
  });

  elements.forEach((element) => {
    element.style.direction = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
  });

  rotatNot.forEach((element) => {
    if (rtlLanguages.includes(language)) {
      element.style.direction = 'ltr';
    }
  });

  textRightElements.forEach((element) => {
    element.style.textAlign = rtlLanguages.includes(language) ? 'right' : 'left';
  });

  textCenterElements.forEach((element) => {
    element.style.textAlign = rtlLanguages.includes(language) ? 'center' : 'left';
  });

  space.forEach((element) => {
    element.style.marginLeft = rtlLanguages.includes(language) ? '8px' : '0';
  });

  services1.forEach((element) => {
    element.style.letterSpacing = rtlLanguages.includes(language) ? '0' : '5px';
  });

  pricing.forEach((element) => {
    if (rtlLanguages.includes(language)) {
      if (window.matchMedia('(min-width: 550px)').matches) {
        element.style.width = '270px';
        element.style.padding = '7px 15px';
      } else {
        element.style.width = '255px';
        element.style.padding = '5px 8px';
      }
    } else {
      if (window.matchMedia('(min-width: 550px)').matches) {
        element.style.width = '300px';
        element.style.padding = '7px 15px';
      } else {
        element.style.width = '100%';
        element.style.padding = '5px 8px';
      }
    }
  });

  text_pp.forEach((element) => {
    if (rtlLanguages.includes(language)) {
      element.style.setProperty("font-size", "18px", "important");
    } else {
      element.style.removeProperty("font-size"); // إزالة أي تخصيص ليعود للوضع الافتراضي في CSS
    }
  });
  text_ff.forEach((element) => {
    if (rtlLanguages.includes(language)) {
      element.style.setProperty("font-size", "27px", "important");
    } else {
      element.style.removeProperty("font-size"); // إزالة أي تخصيص ليعود للوضع الافتراضي في CSS
    }
  });



  // 🔥 تحديث عناصر المنتجات والعمليات عند تغيير اللغة
  createItems(processItems, "process-container", "process");
  createItems(products, "products-container", "products");
}

function applyFont(language) {
  let body = document.body;
  if (rtlLanguages.includes(language)) {
    body.style.fontFamily = '"Noto Kufi qimmatibic", serif';
  } else {
    body.style.removeProperty("font-family"); // إزالة الإعداد ليأخذ الخط من CSS
  }
}


document.addEventListener('DOMContentLoaded', function () {
  let savedLanguage = localStorage.getItem('selectedLanguage') || (navigator.language.startsWith('en') ? 'ar' : 'en');
  document.getElementById('languageSelector').value = savedLanguage;
  applyTranslations(savedLanguage);
  applyFont(savedLanguage);

  // تحديث المنتجات وعناصر العملية بعد تحميل الصفحة
  createItems(processItems, "process-container", "process");
  createItems(products, "products-container", "products");

  // تصحيح تعيين الحقل "subject" بناءً على اللغة
  const subjectInput = document.getElementById('subject');
  if (subjectInput) {
    const value = subjectInput.getAttribute(`data-key-${savedLanguage}`);
    if (value) subjectInput.value = value;
  }
});






const processItems = [
  {
    iconClass: "fa-solid fa-medal", // أيقونة الجودة
    imgAlt: {
      en: "Quality Assured",
      ar: "ضمان الجودة"
    },
    title: {
      en: "Quality Assured",
      ar: "ضمان الجودة"
    },
    description: {
      en: "Premium products designed to deliver superior performance.",
      ar: "منتجات متميزة مصممة لتقديم أداء فائق."
    }
  },
  {
    iconClass: "fa-solid fa-spray-can-sparkles", // أيقونة المكونات الآمنة
    imgAlt: {
      en: "Fresh Ingredients",
      ar: "مكونات طازجة"
    },
    title: {
      en: "Fresh Ingredients",
      ar: "مكونات آمنة"
    },
    description: {
      en: "Eco-conscious solutions made with safe and pure ingredients.",
      ar: "حلول صديقة للبيئة مصنوعة من مكونات آمنة ونقية."
    }
  },
  {
    iconClass: "fa-solid fa-flask-vial", // أيقونة خلوها من المواد الكيميائية
    imgAlt: {
      en: "Chemical Free",
      ar: "خالية من المواد الكيميائية"
    },
    title: {
      en: "Pure & Safe Ingredients",
      ar: "مكونات نقية وآمنة"
    },
    description: {
      en: "Innovative formulas crafted without harmful chemicals.",
      ar: "تركيبات مبتكرة خالية من المواد الضارة."
    }
  }
];


const products = [
  {
    imgSrc: "assets/imge/hero_1.png",
    imgAlt: {
      en: "Clothes freshener",
      ar: "معطر الملابس"
    },
    title: {
      en: "Clothes freshener",
      ar: "معطر الملابس المركز"
    },
    description: {
      en: "Long-lasting freshness that keeps your clothes smelling great all day.",
      ar: "انتعاش يدوم طويلًا ليمنح ملابسك رائحة رائعة طوال اليوم."
    },
    bottom: {
      en: "Shop Now",
      ar: "تسوق الآن"
    },
    link: "producte.html"
  },
  {
    imgSrc: "assets/imge/pro1_Abaya_washing_liquid.png",
    imgAlt: {
      en: "Abaya washing liquid",
      ar: "سائل غسيل العباية"
    },
    title: {
      en: "Abaya washing liquid",
      ar: "سائل غسيل العباية"
    },
    description: {
      en: "Removes tough stains while keeping fabrics soft and fresh.",
      ar: "يزيل البقع الصعبة بلطف ليحافظ على نعومة الأقمشة وانتعاشها."
    },
    bottom: {
      en: "Shop Now",
      ar: "تسوق الآن"
    },
    link: "producte.html"
  },
  {
    imgSrc: "assets/imge/pro2_Highly_concentrated_freshener.png",
    imgAlt: {
      en: "Highly concentrated freshener",
      ar: "معطر مركز عالي الجودة"
    },
    title: {
      en: "Concentrated freshener",
      ar: "معطر عام متعدد الاستعمال عالي التركيز"
    },
    description: {
      en: "A powerful scent that keeps your spaces fresh for hours.",
      ar: "رائحة قوية تدوم طويلًا لتمنح مساحاتك انتعاشًا يدوم."
    },
    bottom: {
      en: "Shop Now",
      ar: "تسوق الآن"
    },
    link: "producte.html"
  },
  {
    imgSrc: "assets/imge/pro3-General_freshener_Multi_use.png",
    imgAlt: {
      en: "General freshener Multi-use",
      ar: "معطر عام متعدد الاستخدامات"
    },
    title: {
      en: "General freshener Multi-use",
      ar: "معطر عام متعدد الاستخدامات"
    },
    description: {
      en: "Versatile freshness, perfect for every room in your home.",
      ar: "انتعاش متعدد الاستخدامات، مثالي لكل زاوية في منزلك."
    },
    bottom: {
      en: "Shop Now",
      ar: "تسوق الآن"
    },
    link: "producte.html"
  }
];


function createItems(data, containerId, type) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Container with ID "${containerId}" not found.`);
    return;
  }

  container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const currentLang = localStorage.getItem('selectedLanguage');
  const lang = currentLang === 'en' ? 'en' : 'ar';

  data.forEach(item => {
    const col = document.createElement("div");
    col.className = type === "process" ? "col-lg-4" : "col-lg-3";
    col.setAttribute("data-aos", "fade-up");
    col.setAttribute("data-aos-delay", "100");

    const titleText = item.title?.[lang] || "No Title";
    const descriptionText = item.description?.[lang] || "No Description";
    const altText = item.imgAlt?.[lang] || "No Alt";
    const bottomProduct = item.bottom?.[lang] || "No Title";

    col.innerHTML = type === "process"
      ? `<div class="Process-show">
           <div class="ProcessDivImge">
             <i class="${item.iconClass} img-fluid rounded-4"></i>
           </div>
           <h4>${titleText}</h4>
           <p>${descriptionText}</p>
         </div>`
      : `<div class="product-show">
           <div class="imge">
             <img src="${item.imgSrc}" alt="${altText}" class="img-fluid rounded-4">
           </div>
           <div class="product-show-text">
             <h3>${titleText}</h3>
             <p>${descriptionText}</p>
             <a href="${item.link}">${bottomProduct}</a>
           </div>
         </div>`;

    fragment.appendChild(col);
  });

  container.appendChild(fragment);
}



// ------- Cart -------
document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartCount();

  // تأكد من وجود زر السلة قبل إضافة الحدث
  let cartButton = document.getElementById("cartButton");
  if (cartButton) {
    cartButton.addEventListener("click", function () {
      window.location.href = "cart.html"; // تأكد من أن لديك صفحة cart.html
    });
  }

  // ✅ تحديث عدد المنتجات في أي وقت يتم تعديل الكمية
  function updateCartCount() {
    let cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
      let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
      cartCountElement.innerText = totalItems;
    }
  }

  // ✅ جعل الدالة متاحة عالميًا لإضافة المنتجات للسلة
  window.addToCart = function (product) {
    let existingProduct = cart.find((item) => item.title === product.title);

    if (existingProduct) {
      existingProduct.quantity++; // زيادة الكمية إذا كان المنتج موجودًا
    } else {
      cart.push({
        title: product.title,
        img: product.img,
        price: product.price,  // ✅ إضافة السعر هنا
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount(); // ✅ تحديث العدد مباشرة
  };

  // ✅ تحديث العدد عند تغيير الكمية في السلة (في cart.html)
  window.updateQuantity = function (index, change) {
    if (cart[index]) {
      let newQuantity = cart[index].quantity + change;
      if (newQuantity >= 1) {
        cart[index].quantity = newQuantity;
      } else {
        cart.splice(index, 1); // إزالة المنتج إذا أصبحت الكمية صفر
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      renderCart(); // ✅ تحديث العرض بعد التعديل
    }
  }
    // ✅ عند إزالة منتج، يتم تحديث العدد مباشرة
    window.removeFromCart = function (index) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      renderCart(); // ✅ تحديث العرض مباشرة بعد الحذف
    };
});







// Counter animation
const counters = document.querySelectorAll('.counter');
const duration = 2000; // مدة العد الإجمالية (3 ثوانٍ)

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    // حساب الزيادة لكل إطار بناءً على المدة والقيمة المستهدفة
    const increment = target / (duration / 30);

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

