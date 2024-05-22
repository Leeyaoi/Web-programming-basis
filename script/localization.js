if(localStorage.getItem("base_lang") === null){
    Data.getBaseLang()
}

var base_lang = JSON.parse(localStorage.getItem("base_lang"));
let currentObj = base_lang
let currentLang = localStorage.getItem("lang") || "en"
let lang_btn = document.querySelectorAll("[data-lang=lang]")
let currentPath = window.location.pathname

function checkPagePathName(){
    switch(currentPath){
        case "/pages/index.html":
            currentObj = {"find_routine":{
                "ru": "Найдите свою рутину <br> в душе<br> (и получите бесплатный подарок!).",
                "en": "Find Your Shower<br> Routine <br>(& Receive a Free Gift!)."
            },
            "shop_now":{
                "ru":"Покупайте сейчас",
                "en":"shop now"
            },
            "award1":{
                "ru":"Победитель премии 2021 года:<br>Лучший шампунь для спортивной сумки",
                "en":"2021 Award Winner:<br>Best Gym-Bag Shampoo"
            },
            "award2":{
                "ru":"Идея, меняющая мир 2022 года<br>\"На подъеме\"",
                "en":"World-Changing Idea 2022<br>\"On the Rise\""
            },
            "award3":{
                "ru":"\"Бренд без отходов, делающий безводный уход за волосами реальностью.\"",
                "en":"\"The Zero-Waste Brand Making Waterless Haircare a Thing.\""
            },
            "award4":{
                "ru":"Победитель премии 2021 года:<br>Лучшие осознанные покупки для ухода за волосами",
                "en":"2021 Award-Winner:<br>Best Conscious Haircare Buys"
            },
            "award5":{
                "ru":"Победитель премии 2021 года:<br>Лучший в категории \"Без использования воды\"",
                "en":"2021 Award-Winner:<br>Best of Waterless"
            },
            "award6":{
                "ru":"\"Everist совершенствует формулы пасты без использования воды для шампуня и кондиционера.\"",
                "en":"\"Everist has perfected no-water paste formulas for shampoo and conditioner.\""
            },
            "quick_view":{
                "ru":"быстрый просмотр",
                "en":"quick view"
            },
            "prod1":{
                "ru":"Концентрат шампуня",
                "en":"The Shampoo Concentrate"
            },
            "prod2":{
                "ru":"Концентрат глубокого кондиционирования",
                "en":"The Deep Conditioning Concentrate"
            },
            "prod3":{
                "ru":"Набор стартовых концентратов для ухода за волосами",
                "en":"Haircare Concentrates Starter Kit"
            },
            "review1":{
                "ru":"85 отзывов",
                "en":"85 Reviews"
            },
            "review2":{
                "ru":"10 отзывов",
                "en":"10 Reviews"
            },
            "review3":{
                "ru":"Нет отзывов",
                "en":"0 Reviews"
            },
            "single_review_bt":{
                "ru":"\"Я не была готова к тому, насколько мои волосы стали здоровее. Теперь меня все время хвалят.\"",
                "en":"\"I wasn’t prepared for how much healthier my hair is. I get compliments all of the time now.\""
            },
            "single_review_ba":{
                "ru":"- Мария",
                "en":"- Maria"
            },
            "eco_first_ln":{
                "ru":"Те пластиковые бутылки в вашем душе?",
                "en":"Those plastic bottles in your shower?"
            },
            "eco_first_bt":{
                "ru":"У нас есть нечто лучшее.",
                "en":"We've got something better."
            },
            "eco_first_p1":{
                "ru":"Большинство шампуней, кондиционеров и гелей для душа содержат более 70% воды.",
                "en":"Most shampoos, conditioners and body washes are more than 70% water."
            },
            "eco_first_p2":{
                "ru":"Представляем первые патентованные концентраты без воды для волос и тела. Это пасты, с концентрацией в три раза выше обычных, наполненные полезными ингредиентами для волос и кожи, активирующиеся водой в вашем душе. Мы поместили целую бутылку в удобную для путешествий алюминиевый тюбик объемом 100 мл.",
                "en":"Introducing the first, patent-pending waterless concentrates for hair and body. 3x concentrated pastes that are packed with good for hair and skin ingredients and activated by the water in your shower. We fit a whole bottle into a 100ml, travel-friendly, aluminum tube."
            },
            "pro1":{
                "ru":"Пасты, активируемые водой",
                "en":"Water-activated pastes"
            },
            "pro2":{
                "ru":"На основе растительных компонентов",
                "en":"Plant-based"
            },
            "pro3":{
                "ru":"Без использования одноразовых пластиковых материалов",
                "en":"Single-use plastic free"
            },
            "pro4":{
                "ru":"Веганский",
                "en":"Vegan"
            },
            "pro5":{
                "ru":"Не тестируется на животных",
                "en":"Cruelty-free"
            },
            "pro6":{
                "ru":"Без сульфатов",
                "en":"Sulfate-free"
            },
            "pro7":{
                "ru":"Без силикона",
                "en":"Silicone-free"
            },
            "pro8":{
                "ru":"Без парабенов",
                "en":"Paraben-free"
            },
            "shop_hair_n_body":{
                "ru":"Покупайте средства для волос и тела",
                "en":"Shop hair + body"
            },
            "adv1_btn":{
                "ru":"Высокая производительность",
                "en":"High Performance"
            },
            "adv1_txt":{
                "ru":"Есть причина, по которой люди говорят, что это лучший шампунь, который они когда-либо использовали.",
                "en":"There's a reason people say it's the best shampoo they've ever used."
            },
            "adv2_btn":{
                "ru":"Очень чистый",
                "en":"Super Clean"
            },
            "adv2_txt":{
                "ru":"Ингредиенты имеют значение. Вот что вы найдете (и не найдете) в продуктах Everist.",
                "en":"Ingredients matter. Here's what you will (and won't) find in Everist products."
            },
            "adv3_btn":{
                "ru":"Создано для эко-оптимистов",
                "en":"Made for Eco-Optimists"
            },
            "adv3_txt":{
                "ru":"Мы принимаем решения, с учетом планеты. Вот как мы к этому подходим.",
                "en":"We make choices with the planet in mind. Here's how we've approached it."
            },/***/
            "ln1":{
                "ru":"Основная идея",
                "en":"THE BIG IDEA"
            },
            "bt1":{
                "ru":"Без использования воды",
                "en":"Waterless"
            },
            "p11":{
                "ru":"Мы спросили себя: зачем мы платим за доставку тяжелых пластиковых бутылок с (в основном) водой по всему миру, когда мы уже принимаем душ водой?",
                "en":"We asked ourselves, why are we paying to ship heavy, plastic bottles of (mostly) water around the world, when we are already showering in water?"
            },
            "p21":{
                "ru":"Удаляя добавленную воду из наших формул, мы можем создавать передовые составы, которые являются максимально чистыми, на основе растительных компонентов и делают ваши волосы и кожу счастливыми и здоровыми.",
                "en":"By removing added water from our formulas, we can create cutting edge formulas that are ultra clean, plant-based and leave your hair and skin happy and healthy."
            },
            "btn1":{
                "ru":"Переходите на безводный уход",
                "en":"GO WATERLESS"
            },
            "ln2":{
                "ru":"Высокая производительность",
                "en":"High Performance"
            },
            "bt2":{
                "ru":"Это работает, мы обещаем.",
                "en":"It works, we pinky promise."
            },
            "p12":{
                "ru":"Мы знаем, что если ваши средства по уходу за собой не делают ваши волосы и кожу потрясающими, ничто другое не имеет значения.",
                "en":"We know that if your personal care products don't make your hair and skin feel amazing, nothing else matters."
            },
            "p22":{
                "ru":"Мы высоко ценим уход за волосами и телом, и наши формулы не разочаруют вас. От глубокого очищающего пены до нашего характерного свежего аромата, мы создали ощущение душевого ритуала, которое вы любите.",
                "en":"We have high expectations of our hair and body care and our formulas won't disappoint. From a deep cleansing lather to our signature fresh scent, we've captured the sensorial shower experience you love."
            },
            "ln3":{
                "ru":"Очень чистый",
                "en":"Super Clean"
            },
            "bt3":{
                "ru":"Всегда чисто, как и должно быть.",
                "en":"Always clean, as it should be."
            },
            "p13":{
                "ru":"Удаляя воду из наших формул, продукты Everist могут быть созданы с новым стандартом чистоты.",
                "en":"By removing the water from our formulas, Everist products can be formulated to a new standard of clean."
            },
            "p23":{
                "ru":"Продукты Everist созданы на растительной основе, они веганские и не тестируются на животных, а также не содержат сульфатов, силиконов, красителей и синтетических ароматизаторов. Это нелегкая задача.",
                "en":"Everist products are plant-based, vegan and cruelty-free as well as being free-from sulfates, silicones, dyes and synthetic fragrances. No small feat."
            },
            "btn3":{
                "ru":"Переходите к чистоте.",
                "en":"GO CLEAN"
            },
            "ln4":{
                "ru":"Создано для эко-оптимистов",
                "en":"Made for Eco-Optimists"
            },
            "bt4":{
                "ru":"Это будущее красоты.",
                "en":"It's the future of beauty."
            },
            "p14":{
                "ru":"Наши продукты разработаны со заботой о каждой детали, как и наш подход к бизнесу.",
                "en":"Our products are thoughtfully designed, inside and out, as is the way we do business."
            },
            "p24":{
                "ru":"Продукты Everist не содержат одноразовых пластиковых материалов (наши тюбики изготовлены из 100% переработанного алюминия), и мы принимаем наши крышки обратно через программу CapBack. Мы также используем биоразлагаемые ингредиенты для наших формул и производим с минимальным углеродным следом (который затем компенсируется, чтобы быть сертифицированным нейтральным по углероду).",
                "en":"Everist products are single-use plastic free (our tubes are pure 100% recycled aluminum) and we take our caps back through our CapBack program. We also use biodegradable ingredients for our formulas and produce with the smallest carbon footprint possible (which is then offset, to be certified carbon neutral)."
            },
            "btn4":{
                "ru":"Переходите к экологически ответственному образу жизни.",
                "en":"GO ECO"
            },
            "eco_ln":{
                "ru":"Наше видение",
                "en":"Our VISION"
            },
            "eco_bt":{
                "ru":"Эко для всех",
                "en":"Eco for<br>Everyone"
            },
            "eco_p1":{
                "ru":"Мы все хотим жить более устойчиво. Мы здесь, чтобы сделать это проще.",
                "en":"We all want to live more sustainably. We're here to make it easier."
            },
            "eco_p2":{
                "ru":"Мы верим, что большие изменения происходят, когда маленькие изменения становятся легкими и лучшими (во всех отношениях) по сравнению с существующим положением вещей. Экологический образ жизни может быть доступным для всех, и мы здесь, чтобы это доказать. Незавершенные экологи приветствуются.",
                "en":"We believe that big change happens when small changes become easy and better (in every way) than the status quo. Eco can be for everyone and we're here to prove it. Imperfect environmentalists welcome."
            },
            "eco_btn":{
                "ru":"Познакомьтесь с Everist.",
                "en":"MEET EVERIST"
            }}
            break
        case "/pages/about.html":
            currentObj = {"bb1":{
                "ru": "Наша история",
                "en": "OUR STORY"
            },
            "bb2":{
                "ru":"Встречайте Everist",
                "en":"Meet Everist"
            },
            "question_lil_name":{
                "ru":"Наш путь",
                "en":"OUR JOURNEY"
            },
            "question_big_take":{
                "ru":"Вопрос:",
                "en":"The question:"
            },
            "question_p1":{
                "ru":"Как выглядит будущее бьюти-индустрии?",
                "en":"What does the future of beauty looks like?"
            },
            "question_p2":{
                "ru":"После десятилетий работы в крупнейших в мире компаниях в сфере бьюти-индустрии, мы поняли, что существует реальная нужда в инновации нашего здоровья и здоровья нашей планеты.<br><br>Everist начинался как бренд с минимальными отходамиб позже - бренд без воды. Оба эти направления все еще важны в нашей компании. Нам часто говорили, что уникальная композиция наших формул - то, что заставляет покупателей к нам возвращаться. Нет ни одного другого продукта, подобного нашим шампуням, кондиционерам и кремам для тела, созданным на основе глицерина и алоэ вера вместо воды. Они разработаны для оптимального здоровья волос, кожи головы и кожи в целом, и при этом имеют на 77% меньший углеродный след.<br><br> Часто то, что лучше для планеты, также лучше и для нас самих.",
                "en":"After working for decades at some of the world's biggest beauty companies, we knew there was a real need for innovation with our health and the health of our planet in mind.<br><br>Everist started out as a low-waste brand, then a waterless brand. While we're still both of those things, we've heard over and over again that the unique composition of our formulas (a hybrid of hair and body care meets skincare) is what keeps our loyal customers coming back. There is no other product like our shampoo, conditioner and body wash creams, made in a base of glycerin and aloe vera instead of water. Created for optimal hair, scalp and skin health these high-performance concentrates also just happen to have a 77% smaller carbon impact.<br><br> What's better for the planet is very often what's better for us as well."
            },
            "customer_lil_name":{
                "ru":"Наш клиент",
                "en":"OUR CUSTOMER"
            },
            "customer_big_take":{
                "ru":"Мф здесь ради Everist'а",
                "en":"We're here for the Everists."
            },
            "customer_p1":{
                "ru":"Мыслители будущего.",
                "en":"The future thinkers."
            },
            "customer_p2":{
                "ru":"Мы - мечтатели, те, кто смотрит на вещи с нестандартной точки зрения, задает себе вопросы типа \"А что, если?\".<br><br>Мы считаем, что пришло время переосмыслить всё и создать компанию будущего, посвященную красоте.<br><br>Учитывая ваше здоровье и здоровье планеты, присоединяйтесь к нам и давайте делать вещи по-другому.<br><br>",
                "en":"The blue-sky, outside-of-the-box, 'what if?' kind of dreamers. <br><br>We believe that it's time to rethink everything and create the beauty company of the future.<br><br>With your health and the health of the planet in mind, join us in doing things differently.<br><br>"
            },
            "link_block_big_take":{
                "ru":"Покупайте будущее индустрии.",
                "en":"Shop the future of beauty."
            },
            "link_block_btn":{
                "ru":"Покупайте сейчас",
                "en":"SHOP NOW"
            }}
            break;
        case "/pages/admin_panel.html":
            currentObj = {"user_header":{
                "ru": "Все пользователи ",
                "en": "All users "
            },
            "empty":{
                "ru": "Пользователей нет",
                "en": "There are no users"
            }}
            break;
        case "/pages/cart.html":
        case "/pages/shop.html":
            currentObj = {"banner_ln":{
                "ru": "КАТАЛОГ",
                "en": "SHOP"
                },
            "banner_bt":{
               "ru": "Купите все",
                "en": "Shop All"
            },
            "banner_p":{
                "ru": "Everist доступен в алюминиевых тюбиках или баночках",
                "en": "Everist is available in aluminum tubes or tins"
            },
            "empty":{
                "ru": "Ваша корзина пуста",
                "en": "Your cart is empty"
            },
            "cart_header":{
                "ru": "Ваша корзина ",
                "en": "Your cart "
            },
            "total_cost":{
               "ru": "Итого: $",
                "en": "Total cost: $"
            },
            "del_btn":{
                "ru": "Удалить",
                "en": "delete"
            },
            "b1":{
                "ru": "Основные средства для увлажнения волос и кожи",
                "en": "The Hair & Skin Hydration Essentials"
            },
            "b1_rew":{
                "ru": "128 Отзывов",
                "en": "128 Reviews"
            },
            "b2":{
                "ru": "Основные средства для увлажнения волос и кожи в баночках",
                "en": "The Hair & Skin Hydration Essentials Tins"
            },
            "b2_rew":{
                "ru": "3 Отзыва",
                "en": "3 Reviews"
            },
            "b3":{
                "ru": "Набор для здоровых волос для начинающих",
                "en": "The Healthy Hair Starter Set"
            },
            "b3_rew":{
                "ru": "193 Отзыва",
                "en": "193 Reviews"
            },
            "b4":{
                "ru": "Набор для здоровых волос для начинающих в баночках",
                "en": "The Healthy Hair Starter Set Tinse"
            },
            "b4_rew":{
                "ru": "60 Отзывов",
                "en": "60 Reviews"
            },
            "b5":{
                "ru": "Дуэт увлажняющего очищения тела",
                "en": "The Hydrating Body Cleanse Duo"
            },
            "b5_rew":{
                "ru": "14 Отзывов",
                "en": "14 Reviews"
            },
            "b6":{
                "ru": "Дуэт для смягчения кожи",
                "en": "The Skin Smoothing Duo"
            },
            "b7":{
                "ru": "Дуэт для смягчения кожи в баночках",
                "en": "The Hydrating Body Cleanse Duo Tin"
            },
            "b8":{
                "ru": "Дуэт для ухода за волосами в путешествии",
                "en": "The Haircare Travel Duo"
            },
            "b8_rew":{
                "ru": "21 Отзыв",
                "en": "21 Reviews"
            },
            "b9":{
                "ru": 'Набор для ухода за волосами "Stock Your Shower"',
                "en": "Stock Your Shower Haircare Bundle"
            },
            "b9_rew":{
                "ru": "193 Отзыва",
                "en": "193 Reviews"
            },
            "b10":{
                "ru": 'Набор для ухода за волосами "Stock Your Shower" в баночках',
                "en": "Stock Your Shower Haircare Bundle Tins"
            },
            "b10_rew":{
                "ru": "60 Отзывов",
                "en": "60 Reviews"
            },
            "b11":{
                "ru": "Концентрат шампуня",
                "en": "The Shampoo Concentrate"
            },
            "b11_rew":{
                "ru": "133 Отзыва",
                "en": "133 Reviews"
            },
            "b12":{
                "ru": "Концентрат шампуня в баночке",
                "en": "The Shampoo Concentrate Tin"
            },
            "b12_rew":{
                "ru": "42 Отзыва",
                "en": "42 Reviews"
            },
            "b13":{
                "ru": "Концентрат сильного кондиционера",
                "en": "The Deep Conditioning Concentrate"
            },
            "b13_rew":{
                "ru": "70 Отзывов",
                "en": "70 Reviews"
            },
            "b14":{
                "ru": "Концентрат сильного кондиционера в баночке",
                "en": "The Deep Conditioning Concentrate Tin"
            },
            "b14_rew":{
                "ru": "34 Отзыва",
                "en": "34 Reviews"
            },
            "b15":{
                "ru": "Концентрат геля для душа",
                "en": "The Body Wash Concentrate"
            },
            "b15_rew":{
                "ru": "49 Отзывов",
                "en": "49 Reviews"
            },
            "b16":{
                "ru": "Концентрат геля для душа в баночке",
                "en": "The Body Wash Concentrate Tin"
            },
            "b16_rew":{
                "ru": "34 Отзыва",
                "en": "34 Reviews"
            },
            "b17":{
                "ru": "Концентрат отшелушивающего геля для душа",
                "en": "The Exfoliating Body Wash Concentrate"
            },
            "b17_rew":{
                "ru": "8 Отзывов",
                "en": "8 Reviews"
            },
            "b18":{
                "ru": "Быстросохнущее полотенце для волос",
                "en": "The Quick-Dry Hair Towel"
            },
            "b18_rew":{
                "ru": "6 Отзывов",
                "en": "6 Reviews"
            },
            "b19":{
                "ru": "Резинка для волос из переработанных материалов",
                "en": "The Upcycled Scrunchie"
            },
            "b19_rew":{
                "ru": "1 Отзыв",
                "en": "1 Reviews"
            },
            "b20":{
                "ru": "Компостируемая губка для тела из коньяка",
                "en": "The Compostable Konjac Body Sponge"
            },
            "b20_rew":{
                "ru": "35 Отзывов",
                "en": "35 Reviews"
            },
            "b21":{
                "ru": "Отшелушивающая губка для тела из коньяка",
                "en": "The Exfoliating Konjac Body Sponge"
            },
            "b22":{
                "ru": "Концентрат шампуня travel-size",
                "en": "The Shampoo Concentrate Travel Mini"
            },
            "b22_rew":{
                "ru": "42 Отзыва",
                "en": "42 Reviews"
            },
            "b23":{
                "ru": "Концентрат сильного кондиционера travel-size",
                "en": "The Deep Conditioning Concentrate Travel Mini"
            },
            "b23_rew":{
                "ru": "34 Отзыва",
                "en": "34 Reviews"
            },
            "b24":{
                "ru": "Концентрат геля для душа travel-size",
                "en": "The Body Wash Concentrate Travel Mini"
            },
            "b24_rew":{
                "ru": "34 Отзыва",
                "en": "34 Reviews"
            },
            "b25":{
                "ru": "Концентрат кондиционера travel-size",
                "en": "The Conditioner Concentrate Travel Mini"
            },
            "b25_rew":{
                "ru": "1 Отзыв",
                "en": "1 Reviews"
            },
            "b26":{
                "ru": "Подарочная карта Everist",
                "en": "Everist Gift Card"
            },
            "b27":{
                "ru": "Ключ для экономного использования тюбика",
                "en": "Zero-Waste Tube Key"
            },
            "quick_view":{
                "ru": "в корзину",
                "en": "add to cart"
            }}
            break;
        case "/pages/profile.html":
        case "/pages/log_in_page.html":
        case "/pages/sign_in_page.html":
            currentObj = {"login_label1":{
                "ru": "Войдите в свой аккаунт",
                "en": "Log into your account"
            },
            "login_btn":{
                "ru": "Войти",
                "en": "Log in"
            },
            "sign_in_btn":{
                "ru": "Создать аккаунт",
                "en": "Sign in"
            },
            "role":{
                "ru": "Ваша роль - ",
                "en": "Your role is "
            },
            "fname":{
                "ru": "Имя:",
                "en": "First name:"
            },
            "mname":{
                "ru": "Отчество:",
                "en": "Middle name:"
            },
            "lname":{
               "ru": "Фамилия:",
                "en": "Last name:"
            },
            "email":{
                "ru": "Электронная почта:",
                "en": "Email:"
            },
            "phoneNum":{
                "ru": "Номер телефона:",
                "en": "Phone number:"
            },
            "birthDate":{
                "ru": "Дата рождения:",
                "en": "Birth date:"
            },
            "sign_out":{
                "ru": "Выйти",
                "en": "Sign out"
            },
            "login_label":{
                "ru": "Вход в систему",
                "en": "Login"
            },
               "password":{
                   "ru": "Пароль:",
                    "en": "Password:"
            },
                "sign_in":{
                    "ru": "Войти",
                    "en": "SIGN IN"
            },
                "create_acc":{
                    "ru": "Создать аккаунт",
                    "en": "Create account"
            },
            "gener":{
                "ru": "Сгенерировать пароль",
                "en": "Generate password"
            },
            "cPassword":{
                "ru": "Подтвердить пароль",
                "en": "Confirm password:"
            },
            "create":{
                "ru":"СОЗДАТЬ",
                "en":"CREATE"
            },
            "return_to_store":{
                "ru":"Вернуться в магазин",
                "en":"Return to Store"
            }}
            break;
    }
}
checkPagePathName()
changeLang(base_lang)
changeLang(currentObj)

function changeLang(langObj){
    for (const key in langObj) {
        const elements = document.querySelectorAll(`[data-lang=${key}]`)
        elements.forEach((element) => {
            if(element){
                if(element.placeholder !== undefined){
                    element.placeholder = langObj[key][currentLang]
                }
                if(element.value !== undefined && element.value != ""){
                    element.value = langObj[key][currentLang]
                }
                else{
                    element.innerHTML = langObj[key][currentLang]
                }
            }
        })
    }
}

lang_btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(currentLang == "ru"){
            currentLang = "en"
        }
        else{
            currentLang = "ru"
        }
        localStorage.setItem("lang", currentLang)
        window.location.reload();
    })
})