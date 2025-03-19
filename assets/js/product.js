
// المكان الموجود في الصفحة الرئيسية اللي هيتم عرض المنتجات فيه 

document.addEventListener("DOMContentLoaded", function () {
    const categories = [
        { id: "abaya_category", key: "Products1", class: "abaya-slider", category: "Abaya_washing_liquid" },
        { id: "concentrated_category", key: "Products2", class: "concentrated-slider", category: "Concentrated_Fabric_Softener" },
        { id: "air_category", key: "Products7", class: "air-slider", category: "Concentrated_Air_&_Fabric_Freshener" }
    ];

    const productsContainer = document.getElementById("productsContainer");

    categories.forEach(({ id, key, class: sliderClass, category }) => {
        const section = document.createElement("div");
        section.classList.add(`${sliderClass}-section`);
        section.innerHTML = `
            <h2 id="${id}" data-key="${key}"></h2>
            <div class="swiper ${sliderClass}">
                <div class="swiper-wrapper"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        `;
        productsContainer.appendChild(section);
    });
});


// المنتجات المعروضه في صفحة ال index.html

document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");
    let selectedLanguage = localStorage.getItem("selectedLanguage") || "ar";
    languageSelector.value = selectedLanguage;

    function updateLanguage(lang) {
        selectedLanguage = lang;
        localStorage.setItem("selectedLanguage", lang);
        renderAllProducts();
    }

    languageSelector.addEventListener("change", (e) => {
        updateLanguage(e.target.value);
    });

    function renderProducts(category, sliderClass) {
        const sliderWrapper = document.querySelector(`.${sliderClass} .swiper-wrapper`);
        if (!sliderWrapper) return;

        sliderWrapper.innerHTML = "";

        const filteredProducts = productsPage.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const slide = document.createElement("div");
            slide.classList.add("swiper-slide");

            const productName = product.name[selectedLanguage];
            const hasDiscount = product.rate !== undefined;
            const discountedPrice = hasDiscount
                ? (product.productPrice - (product.productPrice * (product.rate / 100))).toFixed(2)
                : product.productPrice;

            slide.innerHTML = `
                <div class="product-card">
                    <img class="product_imgee" src="${product.img}" alt="${productName}">
                    <h4>${productName}</h4>
                    <div class="price">
                        ${hasDiscount ? `
                            <div class="price-with-discount">
                                <span class="original-price">${product.productPrice} <img class="sar sar_dis" src="assets/imge/SAR.png" alt="SAR"></span>
                                <span class="discounted-price">${discountedPrice} <img class="sar" src="assets/imge/SAR.png" alt="SAR"></span>
                                <span class="discount-badge">%${product.rate} <p data-key="discount"></p></span>
                            </div>
                        ` : `<span class="normal-price">${product.productPrice} <img class="sar" src="assets/imge/SAR.png" alt="SAR"></span>`}
                    </div>
                    <button data-key="add_to_cart_btn" class="add-to-cart-btn" 
                        onclick='addToCart(${JSON.stringify({ title: productName, img: product.img, price: product.productPrice })})'>
                        Add to cart
                    </button>
                </div>
            `;
            sliderWrapper.appendChild(slide);
        });

        new Swiper(`.${sliderClass}`, {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: { slidesPerView: 4 },
                48: { slidesPerView: 1 }
            }
        });
    }

    function renderAllProducts() {
        renderProducts("Abaya_washing_liquid", "abaya-slider");
        renderProducts("Concentrated_Fabric_Softener", "concentrated-slider");
        renderProducts("Concentrated_Air_&_Fabric_Freshener", "air-slider");
    }

    renderAllProducts();
});












const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentCategory = "all";
let cart = JSON.parse(localStorage.getItem("cart")) || []; // استرجاع المنتجات من localStorage


const productsPage = [

    {
        category: "Abaya_washing_liquid",
        productPrice: 30,
        name: {
            en: "Abaya washing liquid Lemon 1 liter",
            ar: " سائل غسيل العبايه 1 لتر بالليمون",
        },
        rate: 10,
        size: "1L",
        img: "assets/imge/product/سائل غسيل العبايه 1لتر lemon.png",
    },
    {
        category: "Abaya_washing_liquid",
        productPrice: 30,
        name: {
            en: "Abaya washing liquid Oud 1 liter",
            ar: " سائل غسيل العبايه 1 لتر بالعود",
        },
        rate: 8,
        size: "1L",
        img: "assets/imge/product/سائل غسيل العبايه 1لتر oud.png",
    },
    {
        category: "Abaya_washing_liquid",
        productPrice: 25,
        name: {
            en: "Abaya washing liquid Rose 1 liter",
            ar: " سائل غسيل العبايه 1 لتر بالورد",
        },
        rate: 8,
        size: "1L",
        img: "assets/imge/product/سائل غسيل العبايه 1لتر rose.png",
    },
    {
        category: "Abaya_washing_liquid",
        productPrice: 18,
        name: {
            en: "Abaya washing liquid Silver 1 liter",
            ar: " سائل غسيل العبايه 1 لتر سلفر",
        },
        rate: 8,
        size: "1L",
        img: "assets/imge/product/سائل غسيل العبايه 1لتر silver.png",
    },
    {
        category: "Abaya_washing_liquid",
        productPrice: 15,
        name: {
            en: "Abaya washing liquid Soft 1 liter",
            ar: " سائل غسيل العبايه 1 لتر سوفت",
        },
        rate: 8,
        size: "1L",
        img: "assets/imge/product/سائل غسيل العبايه 1لتر soft.png",
    },
    {
        category: "Abaya_washing_liquid",
        productPrice: 20,
        name: {
            en: "Abaya washing liquid Lavender 1 liter",
            ar: " سائل غسيل العبايه 1 لتر اللافندر",
        },
        rate: 8,
        size: "1L",
        img: "assets/imge/product/سائل غسيل العبايه lavender 1لتر.png",
    },
    {
        category: "Abaya_washing_liquid",
        productPrice: 20,
        name: {
            en: "Abaya washing liquid 30 liter",
            ar: " سائل غسيل العبايه 30 لتر ",
        },
        rate: 12,
        size: "30L",
        img: "assets/imge/product/سائل غسيل العبايه 30لتر.png",
    },

    // All-Purpose_Stain_Remover

    {
        category: "All-Purpose_Stain_Remover",
        name: { en: "All purpose stain remover", ar: "المزيل الشامل", },
        img: "assets/imge/product/المزيل الشامل.png",
        productPrice: 70,

    },
    {
        category: "All-Purpose_Stain_Remover",
        name: { en: "Clothes bleach 30 liter", ar: "مبيض ملابس 30 لتر", },
        img: "assets/imge/product/مبيض ملابس 30 لتر المزيل الشامل.png",
        productPrice: 80,

    },

    // Concentrated_Fabric_Softener

    {
        category: "Concentrated_Fabric_Softener",
        name: { en: "Concentrated fabric softener Jasmine 1 liter", ar: "معطر الملابس المركز 1لتر الياسمين", },
        img: "assets/imge/product/معطر الملابس المركز 1لتر jasmine.png",
        productPrice: 23,
    },

    {
        category: "Concentrated_Fabric_Softener",
        name: { en: "Concentrated fabric softener Lavender 1 liter", ar: "معطر الملابس المركز 1لتر اللافندر", },
        img: "assets/imge/product/معطر الملابس المركز 1لتر Lavender.png",
        productPrice: 24,

    },
    {
        category: "Concentrated_Fabric_Softener",
        name: { en: "Concentrated fabric softener Lemon 1 liter", ar: "معطر الملابس المركز 1لتر الليمون" },
        img: "assets/imge/product/معطر الملابس المركز 1لتر lemon.png",
        productPrice: 24,
    },

    {
        category: "Concentrated_Fabric_Softener",
        name: { en: "Concentrated fabric softener Oud 1 liter", ar: "معطر الملابس المركز 1لتر العود", },
        img: "assets/imge/product/معطر الملابس المركز 1لتر oud.png",
        productPrice: 25,

    },
    {
        category: "Concentrated_Fabric_Softener",
        name: { en: "Concentrated fabric softener Rose 1 liter", ar: "معطر الملابس المركز 1لتر الورد", },
        img: "assets/imge/product/معطر الملابس المركز 1لتر rose.png",
        productPrice: 23,

    },
    {
        category: "Concentrated_Fabric_Softener",
        name: { en: "Concentrated fabric softener Soft 1 liter", ar: "معطر الملابس المركز 1لتر سوفت", },
        img: "assets/imge/product/معطر الملابس المركز 1لتر soft.png",
        productPrice: 23,

    },

    // Dishwashing_Liquid

    {
        category: "Dishwashing_Liquid", name:
            { en: "Dishwashing liquid Apple 1 liter", ar: "سائل جلي  1 لتر التفاح", },
        img: "assets/imge/product/سائل جلي  1 لتر Apple.png",
        productPrice: 16,

    },
    {
        category: "Dishwashing_Liquid",
        name: { en: "Dishwashing liquid Lemon 1 liter", ar: "سائل جلي  1 لتر الليمون", },
        img: "assets/imge/product/سائل جلي  1 لتر Lemon.png",
        productPrice: 14,

    },

    // Sanitizing_Gell

    {
        category: "Sanitizing_Gell",
        name: { en: "Sanitizing Gell Lavender 1.8 kg", ar: "جل معقم 1.8 كجم اللافندر", },
        img: "assets/imge/product/جل معقم 1.8 كجم Lavender.webp",
        productPrice: 25,
        rate: 5,

    },
    {
        category: "Sanitizing_Gell",
        name: { en: "Sanitizing Gell Lemon 1.8 kg", ar: "جل معقم 1.8 كجم الليمون", },
        img: "assets/imge/product/جل معقم 1.8 كجم Lemon.png",
        productPrice: 20,

    },
    {
        category: "Sanitizing_Gell",
        name: { en: "Sanitizing Gell Oud 1.8 kg", ar: "جل معقم 1.8 كجم العود", },
        img: "assets/imge/product/جل معقم 1.8 كجم Oud.png",
        productPrice: 27,

    },
    {
        category: "Sanitizing_Gell",
        name: { en: "Sanitizing Gell Pine 1.8 kg", ar: "جل معقم 1.8 كجم الصنوبر", },
        img: "assets/imge/product/جل معقم 1.8 كجم Pine.png",
        productPrice: 22,
        rate: 5,

    },
    {
        category: "Sanitizing_Gell",
        name: { en: "Sanitizing Gell Sea Breeze 1.8 kg", ar: "جل معقم 1.8 كجم نسيم البحر", },
        img: "assets/imge/product/جل معقم 1.8 كجم Sea Breeze.png",
        productPrice: 20,

    },

    // Multi-Purpose_Disinfectant

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant 2.25 liter", ar: "مطهر عام متعدد الاستعمال (حجم التوفير 2.25 لتر)", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال (حجم التوفير 2.25 لتر).png",
        productPrice: 45,
        rate: 5,
    },

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant 4 liter", ar: "مطهر عام متعدد الاستعمال (حجم التوفير 4 لتر)", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال (حجم التوفير 4 لتر).png",
        productPrice: 45,
    },

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant lavender 2 liter", ar: "مطهر عام متعدد الاستعمال 2 لتر اللافندر", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال 2 لتر  lavender.png",
        productPrice: 27,
    },

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant Jasmine 2 liter", ar: "مطهر عام متعدد الاستعمال 2 لتر الياسمين", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال 2 لتر Jasmine.png",
        productPrice: 26,
    },

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant Oud 2 liter", ar: "مطهر عام متعدد الاستعمال 2 لتر العود", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال 2 لتر oud.png",
        productPrice: 28,
    },

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant Primrose 2 liter", ar: "مطهر عام متعدد الاستعمال 2 لتر زهرة الربيع", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال 2 لتر primrose.png",
        productPrice: 22,
    },

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant Rose 2 liter", ar: "مطهر عام متعدد الاستعمال 2 لتر الورد", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال 2 لتر rose.png",
        productPrice: 22,
    },

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant Soft 2 liter", ar: "مطهر عام متعدد الاستعمال 2 لتر سوفت", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال 2 لتر soft.png",
        productPrice: 20,
    },

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant 2 liter", ar: "مطهر عام متعدد الاستعمال 2 لتر", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال 2 لتر.png",
        productPrice: 23,
    },

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant 1 liter", ar: "مطهر عام متعدد الاستعمال 1 لتر", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال 1 لتر.png",
        productPrice: 27,
    },

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant 20 liter", ar: "مطهر عام متعدد الاستعمال 20 لتر", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال 20 لتر.png",
        productPrice: 80,
        rate: 20,
    },

    {
        category: "Multi-Purpose_Disinfectant",
        name: { en: "Multi-purpose disinfectant 30 liter", ar: "مطهر عام متعدد الاستعمال 30 لتر", },
        img: "assets/imge/product/مطهر عام متعدد الاستعمال 30 لتر.png",
        productPrice: 100,
        rate: 20,
    },


    // Concentrated_Air_&_Fabric_Freshener

    {
        category: "Concentrated_Air_&_Fabric_Freshener",
        name: { en: "Concentrated air & fabric freshener - Lavender 400 ml", ar: "معطر الجو والمفارش المركز اللافندر", },
        img: "assets/imge/product/معطر الجو والمفارش المركز (Lavender).png",
        productPrice: 8,
    },

    {
        category: "Concentrated_Air_&_Fabric_Freshener",
        name: { en: "Concentrated air & fabric freshener - Oud 400 ml", ar: "معطر الجو والمفارش المركز العود", },
        img: "assets/imge/product/معطر الجو والمفارش المركز (Oud).png",
        productPrice: 7,
    },

    {
        category: "Concentrated_Air_&_Fabric_Freshener",
        name: { en: "Concentrated air & fabric freshener - Parfum 400 ml", ar: "معطر الجو والمفارش المركز البرفان", },
        img: "assets/imge/product/معطر الجو والمفارش المركز (Parfum).png",
        productPrice: 7,
    },

    {
        category: "Concentrated_Air_&_Fabric_Freshener",
        name: { en: "Concentrated air & fabric freshener - Rose 400 ml", ar: "معطر الجو والمفارش المركز الورد", },
        img: "assets/imge/product/معطر الجو والمفارش المركز (Rose).png",
        productPrice: 7,
    },

    {
        category: "Concentrated_Air_&_Fabric_Freshener",
        name: { en: "Concentrated air & fabric freshener - Sea Breeze 400 ml", ar: "معطر الجو والمفارش المركز نسيم البحر", },
        img: "assets/imge/product/معطر الجو والمفارش المركز (Sea Breeze).png",
        productPrice: 9,
    },

    {
        category: "Concentrated_Air_&_Fabric_Freshener",
        name: { en: "Concentrated air & fabric freshener - Spring flowers 400 ml", ar: "معطر الجو والمفارش المركز زهور الربيع", },
        img: "assets/imge/product/معطر الجو والمفارش المركز (Spring flowers).png",
        productPrice: 8,
    },


    // High-Concentration_Multi-Purpose_Freshener

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Lemon 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي الليمون", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي  (lemon).png",
        productPrice: 7,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Flowers 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي الزهور", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي (Flowers).png",
        productPrice: 8,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Gum 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي العلكه", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي (gum).png",
        productPrice: 8,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Lavender 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي اللافندر", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي (lavender).png",
        productPrice: 8,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Oud Breeze 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي عود", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي (oud).png",
        productPrice: 8,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-flowers Parfum 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي البارفان", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي (parfum).png",
        productPrice: 8,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Pine 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي الصنوبر", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي (Pine).png",
        productPrice: 10,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Romance 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي رومنسي", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي (Romance).png",
        productPrice: 7,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Rose 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي الورد", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي (rose).png",
        productPrice: 7,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Sea breeze 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي نسيم البحر", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي (sea breeze).png",
        productPrice: 7,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Silver 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي سلفر", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي (silver).png",
        productPrice: 7,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Classic flowers 150 ml", ar: "معطر عام متعدد الاستعمال عالي التركيز 150 مللي كلاسك", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 150 مللي(Classic)..png",
        productPrice: 7,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Flowers 20 liter", ar: "معطر عام متعدد الاستعمال عالي التركيز 20 لتر الزهور", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 20 لتر(Flowers).png",
        productPrice: 80,
        rate: 20,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Lavender 20 liter", ar: "معطر عام متعدد الاستعمال عالي التركيز 20 لتر اللافندر", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 20 لتر(Lavender).png",
        productPrice: 80,
        rate: 20,
    },

    {
        category: "High-Concentration_Multi-Purpose_Freshener",
        name: { en: "High concentration multi purpose freshener-Primrose 20 liter", ar: "معطر عام متعدد الاستعمال عالي التركيز 20 لتر زهرة الربيع", },
        img: "assets/imge/product/معطر عام متعدد الاستعمال عالي التركيز 20 لتر(Primrose).png",
        productPrice: 78,
        rate: 20,
    },


    // Multi-Purpose_Cleaner

    {
        category: "Multi-Purpose_Cleaner",
        name: { en: "Multi-purpose cleaner 4 liter", ar: "منظف عام 4 لتر", },
        img: "assets/imge/product/منظف عام 4 لتر.png",
        productPrice: 30,
        rate: 10,

    },
    {
        category: "Multi-Purpose_Cleaner",
        name: { en: "Multi-purpose cleaner Lavender 2.25 liter", ar: "منظف عام متعدد الاستعمال (حجم التوفير 2.25 لتر) اللافندر", },
        img: "assets/imge/product/منظف عام متعدد الاستعمال (حجم التوفير 2.25 لتر) Lavender.png",
        productPrice: 23,

    },
    {
        category: "Multi-Purpose_Cleaner",
        name: { en: "Multi-purpose cleaner Lemon 2.25 liter", ar: "منظف عام متعدد الاستعمال (حجم التوفير 2.25 لتر) الليمون", },
        img: "assets/imge/product/منظف عام متعدد الاستعمال (حجم التوفير 2.25 لتر) Lemon.png",
        productPrice: 23,

    },
    {
        category: "Multi-Purpose_Cleaner",
        name: { en: "Multi-purpose cleaner Pine 2.25 liter", ar: "منظف عام متعدد الاستعمال (حجم التوفير 2.25 لتر) الصنوبر", },
        img: "assets/imge/product/منظف عام متعدد الاستعمال (حجم التوفير 2.25 لتر) Pine.png",
        productPrice: 23,

    },
    {
        category: "Multi-Purpose_Cleaner",
        name: { en: "Multi-purpose cleaner Pink Rose 2.25 liter", ar: "منظف عام متعدد الاستعمال (حجم التوفير 2.25 لتر) الورد", },
        img: "assets/imge/product/منظف عام متعدد الاستعمال (حجم التوفير 2.25 لتر) Pink Rose.png",
        productPrice: 23,

    },
    {
        category: "Multi-Purpose_Cleaner",
        name: { en: "Multi-purpose cleaner 30 liter", ar: "منظف عام 30 لتر", },
        img: "assets/imge/product/منظف عام 30 لتر.png",
        productPrice: 100,
        rate: 12,

    },

    // Glass_Cleaner_&_Polisher

    {
        category: "Glass_Cleaner_&_Polisher",
        name: { en: "Glass cleaner & Polisher 1 liter", ar: "منظف وملمع زجاج 1 لتر", },
        img: "assets/imge/product/منظف وملمع زجاج 1 لتر.png",
        productPrice: 14,

    },
    {
        category: "Glass_Cleaner_&_Polisher",
        name: { en: "Glass cleaner & Polisher 4 liter", ar: "منظف وملمع الزجاج 4 لتر", },
        img: "assets/imge/product/منظف وملمع الزجاج 4 لتر.png",
        productPrice: 50,
        rate: 10,

    },
    {
        category: "Glass_Cleaner_&_Polisher",
        name: { en: "Glass cleaner & Polisher 30 liter", ar: "منظف وملمع الزجاج 30 لتر", },
        img: "assets/imge/product/منظف وملمع الزجاج 30 لتر.png",
        productPrice: 100,
        rate: 3,

    },

];

function updateCartCount() {
    let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cartCount").textContent = totalItems;
}

// ✅ إضافة منتج إلى السلة مع التأكد من أن السعر صحيح
function addToCart(product) {

    let existingProduct = cart.find((item) => item.title === product.name.ar);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            title: product.name.ar,
            img: product.img,
            price: product.productPrice,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}



// عرض المنتجات بناءً على اللغة المختارة
function renderProducts() {
    const lang = localStorage.getItem('selectedLanguage') || 'en';
    const searchTerm = searchInput.value.toLowerCase();

    const filteredProducts = productsPage.filter(product => {
        const matchesCategory = currentCategory === "all" || product.category === currentCategory;
        const productNameEn = product.name?.en?.toLowerCase() || "";
        const productNameAr = product.name?.ar?.toLowerCase() || "";
        const matchesSearch = productNameEn.includes(searchTerm) || productNameAr.includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    productContainer.innerHTML = filteredProducts.length
        ? filteredProducts.map(product => {
            const productImg = product.img || "assets/imge/default.jpg";
            const productName = product.name?.[lang] || product.name?.en || "No name available";
            const hasDiscount = product.rate !== undefined; // التحقق إذا كان المنتج يحتوي على خصم
            const discountedPrice = hasDiscount
                ? (product.productPrice + (product.productPrice * (product.rate / 100))).toFixed(2)
                : null;

            return `
                <div class="product-card">
                    <img class="imge_product" src="${productImg}" alt="${productName}">
                    <h4>${productName}</h4>
                    <div class="price">
                        <div class="price_main" dir="rtl">
                            <span>${product.productPrice} </span> 
                            <img class="sar" src="assets/imge/SAR.png" alt="SAR">
                        </div>
                        ${hasDiscount ? `
                        <div class="price_discound" dir="rtl">
                            <span class="discound">${discountedPrice} </span> 
                            <img class="sar sar_dis" src="assets/imge/SAR.png" alt="SAR">-
                            <span class="percentage">
                                <p data-key="discount">وفر</p><span>%${product.rate}</span>
                            </span>
                        </div>` : ""}
                    </div>
                    <button data-key="add_to_cart_btn" class="add-to-cart-btn" 
                        onclick='addToCart(${JSON.stringify({ title: productName, img: productImg, price: product.productPrice })})'>
                        Add to cart
                    </button>
                </div>`;
        }).join('')
        : `<p>لا توجد منتجات متاحة.</p>`;
}


// تغيير اللغة
const changeLanguageButtons = document.querySelectorAll("#changeLanguage");
changeLanguageButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const lang = e.currentTarget.dataset.lang;
        localStorage.setItem('selectedLanguage', lang);
        renderProducts();
    });
});

// تصفية المنتجات حسب الفئة
filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        filterButtons.forEach(btn => btn.classList.remove("active"));
        e.currentTarget.classList.add("active");
        currentCategory = e.currentTarget.dataset.category || "all";
        renderProducts();
    });
});

// البحث عن المنتجات
searchInput.addEventListener("input", renderProducts);

// عرض المنتجات عند تحميل الصفحة
updateCartCount();
renderProducts();



















document.addEventListener("DOMContentLoaded", function () {
    // 🔹 متغيرات الفلترة
    const products = document.querySelectorAll(".product-card");
    const toggleButton = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("searchInput");

    // 🔹 فتح/إغلاق القائمة المنسدلة للفئات
    toggleButton.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    // 🔹 إغلاق القائمة عند النقر خارجها
    document.addEventListener("click", function (event) {
        if (!toggleButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    // 🔹 فلترة المنتجات حسب الفئة
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            let selectedCategory = this.getAttribute("data-category");

            products.forEach(product => {
                let productCategory = product.getAttribute("data-category");
                product.style.display = (selectedCategory === "all" || productCategory === selectedCategory)
                    ? "inline-block"
                    : "none";
            });

            // إغلاق القائمة بعد الاختيار
            dropdownMenu.classList.remove("show");
        });
    });

    // 🔹 فلترة المنتجات حسب البحث
    searchInput.addEventListener("input", function () {
        let searchValue = this.value.toLowerCase().trim();

        products.forEach(product => {
            let productName = product.querySelector(".product-name").textContent.toLowerCase();
            product.style.display = productName.includes(searchValue) ? "inline-block" : "none";
        });
    });
});


