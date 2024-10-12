// إضافة أو إزالة الكلاس 'navbar-scrolled' بناءً على موضع التمرير
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar'); // تحديد عنصر الـ navbar
    const toggler = document.querySelector('.navbar-toggler'); // تحديد زر التبديل

    // التحقق مما إذا تم التمرير لأسفل
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled'); // إضافة الكلاس لتغيير مظهر الـ navbar عند التمرير
        toggler.classList.add('scrolled'); // إضافة الكلاس لتغيير مظهر زر التبديل عند التمرير
    } else {
        navbar.classList.remove('navbar-scrolled'); // إزالة الكلاس إذا لم يتم التمرير
        toggler.classList.remove('scrolled'); // إزالة الكلاس إذا لم يتم التمرير
    }
});









// translations


let translations = {
    en: {
        en: 'انجليزي',
        ar: 'عربي',
        Home: 'Home',
        about: 'About US',
        Products: 'Products',
        contact: 'Contact US',
        name : 'QIMMATI',
        nameDown : 'Your Reliable Choice for High-Quality Detergents and Fragrances.',
        about1 : 'At Qimmati, we take pride in providing top-tier detergents and fragrances crafted to enhance your everyday cleaning routine. With meticulous attention to detail, our products consistently meet the highest industry standards. Whether for household or industrial use, Qimmati is the trusted brand for dependable, eco-friendly solutions. We proudly support local manufacturing, aiming to improve lives through products that combine safety, efficiency, and freshness.',
        Order : 'Order Now',
        Delivery1 : 'Delivery',
        Deliveryp :'Across the KSA',
        Support : '24/7 Support' ,
        Supportp :'Customer support',
        Productsp : 'Available',
        Trusted : 'Trusted',
        Trustedp : 'Authentic products',
        about_h3 : 'Expertly Crafted Solutions for a Cleaner and Fresher World',
        about_p : 'Our company was established in 2018 with the goal of contributing to the improvement of quality of life, inspired by our governments Vision 2030. We are dedicated to providing high-quality, locally manufactured products, supporting industrial localization, and playing a vital role in packaging, transportation, and distribution to achieve significant economic progress on a national level. The companys activities include the production of most consumer products needed  by families, with a focus on safe and reliable products for cleaning floors, surfaces, and clothing, as well as offering premium personal and household care products.',
        aboutp : 'Established in 2018, our company aims to enhance quality of life in line with Vision 2030 by providing high-quality, locally-produced consumer goods. We support industry localization and add value in packaging, transportation, and distribution. Our products, ranging from safe detergents to personal and home care items, are designed to promote family health and well-being.',
        learn : 'Learn More',
        Categories : 'Categories',
        Detergents : 'Detergents',
        care1 : 'Home care',
        care2 : 'Personal care',
        get : 'Get Help',
        FAQ :'FAQ',
        company : 'Company',
        shipping : 'Shipping',
        returns : 'Returns',
        payment :'Payment options',
        online : 'Online Shop',
        follow : 'Follow us',
        Goal : 'Our Goal',
        Goal_p : 'Localizing the industry, elevating the quality of its products, and enhancing the supply chain by connecting trusted manufacturers with satisfied consumers across the Kingdom of Saudi Arabia.',
        Vision : 'Our Vision',
        Vision_p : 'We strive to build a national service network with local factories, replacing low-cost imports with Saudi-standard products. Through transparent partnerships and continuous improvement, we bridge the gap between manufacturers and consumers, ensuring top-quality products and customer satisfaction.',
        Clients : 'Clients',
        Delivery : 'Delivery',
        Across : 'Across the KSA',
        reviews : 'Positive reviews',
        Certificates : 'Certificates' ,
        Abaya : 'Abaya washing liquid',
        Clothes_freshener : 'Clothes freshener',
        General_freshener_Multi_use  :'General freshener Multi-use ',
        Highly : 'Highly concentrated freshener',
        lavender : 'Lavender',
        lemon : 'Lemon',
        Rose : 'Rose',
        silver : 'Silver',
        OUD : 'OUD',
        Soft : 'Soft',
        Jasmine : 'Jasmine',
        Primrose :'Primrose',
        Classic : 'Classic',
        Gum :'Gum',
        Sea : 'Sea Breeze',
        Flowers : 'Flowers',
        Parfum : 'Parfum',
        Romance : 'Romance',
        Pine : 'Pine',
        To_Help : 'We\'re Always Here To Help',
        To_HelpP :'Reach out to us through any of these support channels',
        phone : '+966 559412939',
        Phonee : 'Phone',
        phoneP : 'Customer Happiness Center',
        Email : 'E-mail',
        mail : 'Info.qimmati@gmail.com' ,
        mailP : 'EMAIL SUPPORT',
        Query : 'Contact For Any Query',
        address :'Address',
        addressSp : 'KSA',
        first_name : 'First Name',
        first_name_error : 'Please enter your first name',
        last_name : 'Last Name',
        last_name_error : 'Please enter your last name',
        mail_error : 'Please enter a valid email address',
        phoneN : 'Phone Number',
        phone_error : 'Please enter your phone number',
        subject : 'Subject',
        subject_error : 'Please enter a subject',
        message : 'Message',
        message_error : 'Please enter your message',
        send : 'Send Message'

    },
    ar: {
        en: 'إنجليزي',
        ar: 'عربي',
        Home: 'الصفحة الرئيسية',
        about: 'معلومات عنا',
        Products: 'المنتجات',
        contact: 'اتصل بنا',
        name: 'قمتي',
        nameDown: 'اختيارك الموثوق للمنظفات والعطور عالية الجودة.',
        about1: 'نفتخر بتقديم منظفات وعطور عالية الجودة مصممة لتحسين تجربتك اليومية في التنظيف. نولي اهتمامًا دقيقًا لضمان أن منتجاتنا تفي بأعلى المعايير الصناعية. سواء للاستخدام المنزلي أو الصناعي، قمتى هي العلامة التجارية الموثوقة للحلول الآمنة والصديقة للبيئة. نحن ندعم بفخر الإنتاج المحلي، ونسعى لتحسين جودة الحياة من خلال منتجات تجمع بين الأمان والكفاءة والنضارة.',
        Order: 'اطلب الآن',
        Delivery1: 'التوصيل',
        Deliveryp: 'في جميع أنحاء المملكة ',
        Support: 'دعم على مدار الساعة',
        Supportp: 'خدمة العملاء',
        Productsp: 'متوفرة',
        Trusted: 'موثوقة',
        Trustedp: 'منتجات أصلية',
        about_h3: 'حلول مصممة بخبرة لعالم أنظف وأكثر انتعاشًا',
        about_p: 'تأسست شركتنا عام 2018 لتساهم في رفع مستوى جودة الحياة إيماناً منا برؤية حكومتنا Vision 2030 بتوفير منتجات عالية الجودة من المصانع المحلية دعماً لتوطين الصناعة وبإضافة قيمة مهمة في التغليف والنقل والتوزيع لنحقق نهضة حضارية اقتصادية بسواعد وطنية. نشاط الشركة يشمل معظم المنتجات الاستهلاكية التي ترقى بصحة الأسرة من منتجات المنظفات الآمنة التي تهتم بتعقيم وتعطير الأرضيات والأسطح والملابس والأواني كما توفر منتجات عالية الجودة للعناية الشخصية والمنزلية.',
        aboutp: 'تأسست شركتنا عام 2018 لتساهم في رفع مستوى جودة الحياة إيماناً منا برؤية حكومتنا  2030 بتوفير منتجات عالية الجودة من المصانع المحلية دعماً لتوطين الصناعة وبإضافة قيمة مهمة في التغليف والنقل والتوزيع لنحقق نهضة حضارية اقتصادية بسواعد وطنية. نشاط الشركة يشمل معظم المنتجات الاستهلاكية التي ترقى بصحة الأسرة من منتجات المنظفات الآمنة التي تهتم بتعقيم وتعطير الأرضيات والأسطح والملابس والأواني كما توفر منتجات عالية الجودة للعناية الشخصية والمنزلية.',
        learn: 'المزيد',
        Categories: 'الفئات',
        Detergents: 'المنظفات',
        care1: 'العناية المنزلية',
        care2: 'العناية الشخصية',
        get: 'المساعدة',
        FAQ: 'الأسئلة الشائعة',
        company : 'الصفحات',
        shipping: 'الشحن',
        returns: 'المرتجعات',
        payment: 'خيارات الدفع',
        online: 'المتجر',
        follow: 'تابعنا',
        Goal: 'هدفنا',
        Goal_p: 'توطين الصناعة والرقي بجودة منتجاتها وتقديم الأفضل لسلسة الإمداد بتوصيل المصنع المعتمد مع المستهلك السعيد أينما كان في المملكة العربية السعودية.',
        Vision: 'رؤيتنا',
        Vision_p: 'نسعى إلى تكوين شبكة خدمات وطنية متكاملة مع المصانع الوطنية نستبدل بها الواردات قليلة التكلفه بمنتجات وطنية تخضع للرقابة ولمقاييس العالميه ونعمل معها بكل شفافية على تحسين جودة منتجاتها بتفاعل دائم وإغلاق فجوة الاتصال بين المصنعين والمستهلك النهائي في السوق، بهذا نرتقي بتقديم الأفضل دائما بمعيار رضى العميل والتكامل مع المصنعين.',
        Clients: 'العملاء',
        Delivery: 'التوصيل',
        Across: 'في جميع أنحاء المملكة',
        reviews: 'آراء إيجابية',
        Certificates: 'شهادات',
        Abaya: 'سائل غسيل العباية',
        Clothes_freshener: 'معطر الملابس',
        General_freshener_Multi_use: 'معطر عام متعدد الاستعمال',
        Highly: 'معطر عام متعدد الاستعمال عالي التركيز',
        lavender: 'اللافندر',
        lemon: 'الليمون',
        Rose: 'الورد',
        silver: 'سلفر',
        OUD: 'العود',
        Soft: 'السوفت',
        Jasmine: 'الياسمين',
        Primrose: 'زهرة الربيع ',
        Classic: 'الكلاسيك',
        Gum: 'علكة',
        Sea: 'نسيم البحر',
        Flowers: 'الزهور',
        Parfum: 'البارفان ',
        Romance: 'رومانس',
        Pine: 'الصنوبر',
        To_Help: 'نحن هنا دائمًا للمساعدة',
        To_HelpP: 'تواصل معنا عبر أي من قنوات الدعم هذه',
        phone: '+966 559412939',
        Phonee: 'هاتف',
        phoneP: 'مركز سعادة العملاء',
        Email: 'البريد الإلكتروني',
        mail: 'Info.qimmati@gmail.com',
        mailP: 'دعم البريد الإلكتروني',
        Query: 'اتصل لأي استفسار',
        address: 'العنوان',
        addressSp: 'المملكة العربية السعودية',
        first_name: 'الاسم الأول',
        first_name_error: 'يرجى إدخال اسمك الأول',
        last_name: 'الاسم الثاني',
        last_name_error: 'يرجى إدخال الاسم الثاني',
        mail_error: 'يرجى إدخال عنوان بريد إلكتروني صالح',
        phoneN: 'رقم الهاتف',
        phone_error: 'يرجى إدخال رقم هاتفك',
        subject: 'الموضوع',
        subject_error: 'يرجى إدخال موضوع',
        message: 'الرسالة',
        message_error: 'يرجى إدخال رسالتك',
        send: 'إرسال '
    }

};
let rtlLanguages = ['ar']; // قائمة اللغات التي تتطلب الاتجاه من اليمين إلى اليسار
document.getElementById('languageSelector').addEventListener('change', (e) => {
    let selectedLang = e.target.value;
    applyTranslations(selectedLang);
    applyFont(selectedLang);
    localStorage.setItem('selectedLanguage', selectedLang);
});

function applyTranslations(language) {
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

    lists.forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.direction = 'rtl';
        }
    });

    Array.from(elements).forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.direction = 'rtl';
        } else {
            element.style.direction = 'ltr';
        }
    });

    Array.from(rotatNot).forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.direction = 'ltr';
        } 
    });

    Array.from(textRightElements).forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.textAlign = 'right';
        } else {
            element.style.textAlign = 'left';
        }
    });

    Array.from(textCenterElements).forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.textAlign = 'center';
        } else {
            element.style.textAlign = 'left';
        }
    });

    Array.from(services1).forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.letterSpacing = '0';
        } else {
            // لإزالة تأثير letterSpacing إذا كان موجوداً
            element.style.letterSpacing = '5px';
        }
    });


}

function applyFont(language) {
    let body = document.body;
    if (rtlLanguages.includes(language)) {
        body.classList.add('arabic-font');
        body.classList.remove('english-font');
    } else {
        body.classList.add('english-font');
        body.classList.remove('arabic-font');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let savedLanguage = localStorage.getItem('selectedLanguage') || 'ar';
    document.getElementById('languageSelector').value = savedLanguage;
    applyTranslations(savedLanguage);
    applyFont(savedLanguage);
});











// loaded
document.addEventListener("DOMContentLoaded", () => {
    const loadedDiv = document.querySelector('.loaded');
    const mobileNavToggle = document.getElementById("mobile-nav-toggle");
    const loader = document.getElementById("loader");
    const myWeb = document.getElementById("myweb");

    // إضافة فئة animate بعد فترة زمنية قصيرة
    setTimeout(() => {
        loadedDiv.classList.add('animate');
    }, 50); // تأخير بسيط لبدء الأنيميشن

    // إضافة فئة final بعد انتهاء الأنيميشن الأول
    setTimeout(() => {
        loadedDiv.classList.add('final');
    }, 1100); // يجب أن يكون أكبر من مدة الانتقال الأولى (1 ثانية)

    // إعادة توجيه الصفحة بعد انتهاء الأنيميشن الثاني
    setTimeout(() => {
        loader.style.display = "none";
        myWeb.style.display = "block";

        // تحديث حالة زر التنقل بناءً على حجم الشاشة
        updateNavToggleDisplay();
    }, 2200); // يجب أن يكون أكبر من مدة الانتقال الكلية (1 ثانية + 1 ثانية)

    // التحقق من حجم الشاشة عند تغيير الحجم
    window.addEventListener('resize', updateNavToggleDisplay);

    function updateNavToggleDisplay() {
        if (window.innerWidth < 961) {
            mobileNavToggle.style.display = "block";
        } else {
            mobileNavToggle.style.display = "none";
        }
    }
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





// slide categories
