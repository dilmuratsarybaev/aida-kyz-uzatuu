const eventTiming = {
  startsAt: "2026-07-22T18:00:00+06:00",
  endsAt: "2026-07-22T22:30:00+06:00"
};

const whatsappNumber = "996709065082";
const supportedLanguages = ["ky", "ru", "en", "tr"];

const translations = {
  ky: {
    metaDescription: "Кыз узатуу мааракеси үчүн кооз чакыруу сайты: жооп берүү, программа, сүрөт маанайы жана конок маалыматтары.",
    pageTitle: "Кыз узатуу | Мааракеге чакыруу",
    languageLabel: "Тил тандоо",
    shareLabel: "Чакыруунун шилтемесин көчүрүү",
    menuLabel: "Менюну ачуу",
    skipLink: "Мазмунга өтүү",
    brandTitle: "Кыз узатуу",
    brandSubtitle: "Аиданын мааракеси",
    navMeaning: "Маңызы",
    navDetails: "Маалымат",
    navProgram: "Программа",
    navMoments: "Көз ирмемдер",
    navRsvp: "Жооп берүү",
    heroEyebrow: "2026-жылдын 22-июлу - Ош",
    heroTitle: "Кыз узатуу",
    heroLead: "Үй-бүлөнү, салтты жана жаңы жашоонун жарык башталышын даңазалаган жылуу маараке.",
    heroPrimary: "Орунду ырастоо",
    heroCalendar: "Календарга кошуу",
    stripDateLabel: "Күнү",
    stripDate: "22-июль, 2026",
    stripTimeLabel: "Убактысы",
    stripVenueLabel: "Өтчү жер",
    venueName: "Тумар кафеси",
    meaningKicker: "Маңызы",
    meaningTitle: "Заманбап шаң менен салттуу жылуулук бириккен күн.",
    meaningText1: "Кыз узатуу - кызды жаңы үйүнө ак бата, ыр-күү, жылуу сөз жана терең ыраазычылык менен узаткан үй-бүлөлүк салтанат.",
    meaningText2: "Бул кечеде конок тосуу, ата-эненин тилеги, берекелүү дасторкон жана жүрөктөн чыккан узатуу көз ирмеми бирге өтөт.",
    detailsKicker: "Конок маалыматтары",
    detailsTitle: "Мааракеге чейин билип алуу керек болгон нерселер.",
    dateCardTitle: "Күнү жана убактысы",
    dateCardText: "Шаршемби, 2026-жылдын 22-июлу. Конок тосуу саат 18:00дө башталат.",
    venueCardTitle: "Өтчү жер",
    venueCardText: "Тумар кафеси, Ош. Кире бериште үй-бүлөлүк тосуп алуу уюштурулат.",
    dressCardTitle: "Кийим үлгүсү",
    dressCardText: "Кечки жарашыктуу стиль. Пил сөөгү, зымырыт, роза, алтын жана терең нейтралдуу түстөр ылайыктуу.",
    countDays: "Күн",
    countHours: "Саат",
    countMinutes: "Мүнөт",
    countSeconds: "Секунд",
    programKicker: "Программа",
    programTitle: "Конок тосуудан узатууга чейинки назик тартип.",
    programText: "Салтанат, кечки тамак жана шаңдуу учурлар конокторго кеченин жүрүшүн оңой түшүнүүгө ылайыкталып түзүлдү.",
    tabCeremony: "Салтанат",
    tabDinner: "Кечки тамак",
    tabCelebration: "Шаң",
    ceremonyTitle1: "Конок тосуу",
    ceremonyText1: "Үй-бүлөнүн тосуп алуусу, гүлдөр жана алгачкы сүрөттөр.",
    ceremonyTitle2: "Бата берүү",
    ceremonyText2: "Улуулардын ак батасы, музыка жана узатуу салты.",
    ceremonyTitle3: "Үй-бүлөлүк тост",
    ceremonyText3: "Ата-эне, туугандар жана жакын коноктор үчүн жылуу учур.",
    dinnerTitle1: "Кечки тамак",
    dinnerText1: "Салттуу дасторкон, чай, таттуулар жана мезгилдик даамдар.",
    dinnerTitle2: "Коноктордун тилектери",
    dinnerText2: "Кыска каалоо-тилектер жана үй-бүлөлүк куттуктоолор.",
    dinnerTitle3: "Чай үстүндөгү маек",
    dinnerText3: "Сүйлөшүү жана эстелик сүрөттөр үчүн жайдары тыныгуу.",
    celebrationTitle1: "Музыка жана бий",
    celebrationText1: "Жандуу музыка, бий жана үй-бүлөлүк шаң.",
    celebrationTitle2: "Узатуу көз ирмеми",
    celebrationText2: "Кыздын жаңы сапарынын алдында айтылган акыркы ак бата.",
    celebrationTitle3: "Жыйынтык",
    celebrationText3: "Конокторду узатуу жана акыркы эстелик сүрөттөр.",
    momentsKicker: "Көз ирмемдер",
    momentsTitle: "Кеченин назик визуалдык маанайы.",
    galleryTitle1: "Салтанаттуу жасалга",
    galleryTitle2: "Зымырыт жана алтын деталдар",
    galleryTitle3: "Үй-бүлөлүк дасторкон",
    rsvpKicker: "Жооп берүү",
    rsvpTitle: "Үй-бүлөлүк дасторкондон ордуңузду ырастап коюңуз.",
    rsvpText: "Форманы толтуруңуз, андан кийин жообуңуз WhatsApp аркылуу даяр билдирүү болуп ачылат.",
    formNameLabel: "Толук аты-жөнү",
    formNamePlaceholder: "Атыңыз",
    formAttendanceLabel: "Келүү мүмкүнчүлүгү",
    attendanceYes: "Келем",
    attendanceMaybe: "Азырынча так эмес",
    attendanceNo: "Келе албайм",
    formMessageLabel: "Каалоо-тилек",
    formMessagePlaceholder: "Кыска каалоо-тилек же билдирүү",
    formSubmit: "WhatsApp аркылуу жөнөтүү",
    faqKicker: "Суроолор",
    faqTitle: "Коноктор үчүн пайдалуу маалымат.",
    faqQ1: "Коноктор унаасын кайда токтотот?",
    faqA1: "Унаа токтотуучу жай негизги кире беришке жакын болот. Үй-бүлө жардамчылары келгенде багыт көрсөтөт.",
    faqQ2: "Балдар келсе болобу?",
    faqA2: "Ооба, балдар да келе алышат. Керек болсо каалоо-тилек бөлүгүнө кыскача белгилеп коюңуз.",
    faqQ3: "Өтчү жерди кантип табам?",
    faqA3: "Төмөндөгү багыт баскычын басып, Google Maps аркылуу өтчү жерди таба аласыз.",
    locationKicker: "Жайгашкан жер",
    locationTitle: "Тумар кафеси, Ош",
    locationButton: "Багыт алуу",
    footerText: "Кыз узатуу - Аиданын үй-бүлөсүнөн сүйүү менен",
    backTop: "Жогору кайтуу",
    eventTitle: "Кыз узатуу",
    honoree: "Аида",
    eventLocation: "Ош, Кыргызстан",
    eventDescription: "Кыз узатуу мааракеси: үй-бүлөлүк бата, дасторкон, музыка жана узатуу салты.",
    calendarProduct: "Кыз узатуу чакыруусу",
    calendarDownloaded: "Календар файлы жүктөлдү.",
    shareCopied: "Чакыруунун шилтемеси көчүрүлдү.",
    shareFailed: "Көчүрүү ишке ашкан жок. Даректи браузерден көчүрсөңүз болот.",
    whatsappStatus: "WhatsApp билдирүүсү даяр ачылды.",
    whatsappToast: "WhatsApp ачылды.",
    waGreeting: "Салам! Кыз узатууга жооп:",
    waName: "Аты-жөнү",
    waAttendance: "Келүү мүмкүнчүлүгү",
    waMessage: "Каалоо-тилек",
    attendanceLabels: { yes: "келет", maybe: "азырынча так эмес", no: "келе албайт" }
  },
  ru: {
    metaDescription: "Элегантный сайт-приглашение на кыз узатуу: программа, детали, галерея и ответ через WhatsApp.",
    pageTitle: "Кыз узатуу | Приглашение",
    languageLabel: "Выбор языка",
    shareLabel: "Скопировать ссылку приглашения",
    menuLabel: "Открыть меню",
    skipLink: "Перейти к содержанию",
    brandTitle: "Кыз узатуу",
    brandSubtitle: "Торжество Аиды",
    navMeaning: "Смысл",
    navDetails: "Детали",
    navProgram: "Программа",
    navMoments: "Моменты",
    navRsvp: "Ответить",
    heroEyebrow: "22 июля 2026 - Ош",
    heroTitle: "Кыз узатуу",
    heroLead: "Теплое семейное торжество в честь традиций, благословения и нового жизненного пути.",
    heroPrimary: "Подтвердить участие",
    heroCalendar: "Добавить в календарь",
    stripDateLabel: "Дата",
    stripDate: "22 июля 2026",
    stripTimeLabel: "Время",
    stripVenueLabel: "Место",
    venueName: "Кафе Тумар",
    meaningKicker: "Смысл",
    meaningTitle: "Современное торжество с теплым традиционным сердцем.",
    meaningText1: "Кыз узатуу - семейная церемония проводов девушки в новый дом с благословениями, музыкой, теплыми словами и благодарностью.",
    meaningText2: "Вечер объединит встречу гостей, родительские пожелания, щедрый дасторкон и трогательный момент проводов.",
    detailsKicker: "Информация для гостей",
    detailsTitle: "Все, что нужно знать перед торжеством.",
    dateCardTitle: "Дата и время",
    dateCardText: "Среда, 22 июля 2026 года. Встреча гостей начинается в 18:00.",
    venueCardTitle: "Место",
    venueCardText: "Кафе Тумар, Ош. У входа будет организована семейная встреча гостей.",
    dressCardTitle: "Дресс-код",
    dressCardText: "Элегантный вечерний стиль. Подойдут оттенки айвори, изумруда, розы, золота и глубокие нейтральные тона.",
    countDays: "Дней",
    countHours: "Часов",
    countMinutes: "Минут",
    countSeconds: "Секунд",
    programKicker: "Программа",
    programTitle: "Мягкий ход вечера от встречи до проводов.",
    programText: "Церемония, ужин и праздничные моменты выстроены так, чтобы гостям было легко следить за вечером.",
    tabCeremony: "Церемония",
    tabDinner: "Ужин",
    tabCelebration: "Праздник",
    ceremonyTitle1: "Встреча гостей",
    ceremonyText1: "Семейное приветствие, цветы и первые фотографии.",
    ceremonyTitle2: "Благословение",
    ceremonyText2: "Слова старших, музыка и традиция проводов.",
    ceremonyTitle3: "Семейный тост",
    ceremonyText3: "Теплый момент для родителей, родственников и близких гостей.",
    dinnerTitle1: "Ужин",
    dinnerText1: "Традиционный дасторкон, чай, сладости и сезонные угощения.",
    dinnerTitle2: "Пожелания гостей",
    dinnerText2: "Короткие пожелания и семейные поздравления.",
    dinnerTitle3: "Беседа за чаем",
    dinnerText3: "Спокойная пауза для общения и памятных фотографий.",
    celebrationTitle1: "Музыка и танцы",
    celebrationText1: "Живая музыка, танцы и семейное веселье.",
    celebrationTitle2: "Момент проводов",
    celebrationText2: "Последнее благословение перед новым путем девушки.",
    celebrationTitle3: "Завершение",
    celebrationText3: "Проводы гостей и финальные фотографии.",
    momentsKicker: "Моменты",
    momentsTitle: "Нежная визуальная атмосфера вечера.",
    galleryTitle1: "Торжественное оформление",
    galleryTitle2: "Изумрудные и золотые детали",
    galleryTitle3: "Семейный дасторкон",
    rsvpKicker: "Ответ",
    rsvpTitle: "Подтвердите свое место за семейным дасторконом.",
    rsvpText: "Заполните форму, и ваш ответ откроется готовым сообщением в WhatsApp.",
    formNameLabel: "Полное имя",
    formNamePlaceholder: "Ваше имя",
    formAttendanceLabel: "Участие",
    attendanceYes: "Приду",
    attendanceMaybe: "Пока не точно",
    attendanceNo: "Не смогу прийти",
    formMessageLabel: "Пожелание",
    formMessagePlaceholder: "Короткое пожелание или сообщение",
    formSubmit: "Отправить через WhatsApp",
    faqKicker: "Вопросы",
    faqTitle: "Полезная информация для гостей.",
    faqQ1: "Где гостям припарковаться?",
    faqA1: "Парковка будет рядом с главным входом. Помощники семьи подскажут направление при прибытии.",
    faqQ2: "Можно прийти с детьми?",
    faqA2: "Да, дети могут прийти. При необходимости коротко укажите это в поле пожеланий.",
    faqQ3: "Как найти место проведения?",
    faqA3: "Нажмите кнопку маршрута ниже, чтобы открыть место в Google Maps.",
    locationKicker: "Локация",
    locationTitle: "Кафе Тумар, Ош",
    locationButton: "Построить маршрут",
    footerText: "Кыз узатуу - с любовью от семьи Аиды",
    backTop: "Наверх",
    eventTitle: "Кыз узатуу",
    honoree: "Аида",
    eventLocation: "Ош, Кыргызстан",
    eventDescription: "Торжество кыз узатуу: семейное благословение, дасторкон, музыка и традиция проводов.",
    calendarProduct: "Приглашение на кыз узатуу",
    calendarDownloaded: "Файл календаря загружен.",
    shareCopied: "Ссылка приглашения скопирована.",
    shareFailed: "Не удалось скопировать. Скопируйте адрес из браузера.",
    whatsappStatus: "Готовое сообщение WhatsApp открыто.",
    whatsappToast: "WhatsApp открыт.",
    waGreeting: "Здравствуйте! Ответ на кыз узатуу:",
    waName: "Имя",
    waAttendance: "Участие",
    waMessage: "Пожелание",
    attendanceLabels: { yes: "придет", maybe: "пока не точно", no: "не сможет прийти" }
  },
  en: {
    metaDescription: "An elegant Kyz Uzatuu invitation website with event details, program, gallery, and WhatsApp RSVP.",
    pageTitle: "Kyz Uzatuu | Celebration Invitation",
    languageLabel: "Choose language",
    shareLabel: "Copy invitation link",
    menuLabel: "Open menu",
    skipLink: "Skip to content",
    brandTitle: "Kyz Uzatuu",
    brandSubtitle: "Aida's celebration",
    navMeaning: "Meaning",
    navDetails: "Details",
    navProgram: "Program",
    navMoments: "Moments",
    navRsvp: "RSVP",
    heroEyebrow: "22 July 2026 - Osh",
    heroTitle: "Kyz Uzatuu",
    heroLead: "A warm family celebration honoring tradition, blessing, and the bright beginning of a new chapter.",
    heroPrimary: "Confirm Attendance",
    heroCalendar: "Add to Calendar",
    stripDateLabel: "Date",
    stripDate: "22 July 2026",
    stripTimeLabel: "Time",
    stripVenueLabel: "Venue",
    venueName: "Tumar Cafe",
    meaningKicker: "Meaning",
    meaningTitle: "A modern celebration with a traditional heart.",
    meaningText1: "Kyz uzatuu is a family ceremony where a daughter is sent to her new home with blessings, music, warm words, and gratitude.",
    meaningText2: "The evening brings together guest welcome, parents' wishes, a generous dastorkon, and a heartfelt farewell moment.",
    detailsKicker: "Guest Details",
    detailsTitle: "Everything guests need before the celebration.",
    dateCardTitle: "Date & Time",
    dateCardText: "Wednesday, 22 July 2026. Guest welcome begins at 18:00.",
    venueCardTitle: "Venue",
    venueCardText: "Tumar Cafe, Osh. A family welcome will be arranged at the entrance.",
    dressCardTitle: "Dress Code",
    dressCardText: "Elegant evening style. Ivory, emerald, rose, gold, and deep neutral tones are welcome.",
    countDays: "Days",
    countHours: "Hours",
    countMinutes: "Minutes",
    countSeconds: "Seconds",
    programKicker: "Program",
    programTitle: "A graceful flow from welcome to farewell.",
    programText: "Ceremony, dinner, and celebration moments are arranged so guests can follow the evening with ease.",
    tabCeremony: "Ceremony",
    tabDinner: "Dinner",
    tabCelebration: "Celebration",
    ceremonyTitle1: "Guest Welcome",
    ceremonyText1: "Family greeting, flowers, and first photos.",
    ceremonyTitle2: "Blessing Ceremony",
    ceremonyText2: "Words from elders, music, and farewell tradition.",
    ceremonyTitle3: "Family Toast",
    ceremonyText3: "A warm moment for parents, relatives, and close guests.",
    dinnerTitle1: "Dinner",
    dinnerText1: "Traditional dastorkon, tea, sweets, and seasonal treats.",
    dinnerTitle2: "Guest Wishes",
    dinnerText2: "Short wishes and family congratulations.",
    dinnerTitle3: "Tea Conversation",
    dinnerText3: "A calm pause for conversation and memory photos.",
    celebrationTitle1: "Music & Dance",
    celebrationText1: "Live music, dancing, and family joy.",
    celebrationTitle2: "Farewell Moment",
    celebrationText2: "A final blessing before the bride's new journey.",
    celebrationTitle3: "Closing",
    celebrationText3: "Guest send-off and final photos.",
    momentsKicker: "Moments",
    momentsTitle: "A soft visual mood for the evening.",
    galleryTitle1: "Ceremonial Setting",
    galleryTitle2: "Emerald & Gold Details",
    galleryTitle3: "Family Dastorkon",
    rsvpKicker: "RSVP",
    rsvpTitle: "Confirm your place at the family table.",
    rsvpText: "Fill out the form, then your response will open as a ready WhatsApp message.",
    formNameLabel: "Full name",
    formNamePlaceholder: "Your name",
    formAttendanceLabel: "Attendance",
    attendanceYes: "I will attend",
    attendanceMaybe: "Not sure yet",
    attendanceNo: "Cannot attend",
    formMessageLabel: "Wish",
    formMessagePlaceholder: "A short wish or message",
    formSubmit: "Send via WhatsApp",
    faqKicker: "Questions",
    faqTitle: "Helpful notes for guests.",
    faqQ1: "Where should guests park?",
    faqA1: "Parking will be available near the main entrance. Family assistants can guide guests on arrival.",
    faqQ2: "Can children attend?",
    faqA2: "Yes, children are welcome. If needed, mention it briefly in the message field.",
    faqQ3: "How do I find the venue?",
    faqA3: "Use the directions button below to open the venue in Google Maps.",
    locationKicker: "Location",
    locationTitle: "Tumar Cafe, Osh",
    locationButton: "Get Directions",
    footerText: "Kyz Uzatuu - with love from Aida's family",
    backTop: "Back to top",
    eventTitle: "Kyz Uzatuu",
    honoree: "Aida",
    eventLocation: "Osh, Kyrgyzstan",
    eventDescription: "Kyz Uzatuu celebration: family blessing, dastorkon, music, and farewell tradition.",
    calendarProduct: "Kyz Uzatuu Invitation",
    calendarDownloaded: "Calendar file downloaded.",
    shareCopied: "Invitation link copied.",
    shareFailed: "Copy failed. You can copy the address from the browser.",
    whatsappStatus: "WhatsApp message opened.",
    whatsappToast: "WhatsApp opened.",
    waGreeting: "Hello! RSVP for Kyz Uzatuu:",
    waName: "Name",
    waAttendance: "Attendance",
    waMessage: "Wish",
    attendanceLabels: { yes: "will attend", maybe: "is not sure yet", no: "cannot attend" }
  },
  tr: {
    metaDescription: "Kız uzatuu kutlaması için zarif davetiye sitesi: detaylar, program, galeri ve WhatsApp yanıtı.",
    pageTitle: "Kız Uzatuu | Kutlama Davetiyesi",
    languageLabel: "Dil seç",
    shareLabel: "Davet bağlantısını kopyala",
    menuLabel: "Menüyü aç",
    skipLink: "İçeriğe geç",
    brandTitle: "Kız Uzatuu",
    brandSubtitle: "Aida'nın kutlaması",
    navMeaning: "Anlamı",
    navDetails: "Detaylar",
    navProgram: "Program",
    navMoments: "Anlar",
    navRsvp: "Yanıt",
    heroEyebrow: "22 Temmuz 2026 - Oş",
    heroTitle: "Kız Uzatuu",
    heroLead: "Geleneği, aile duasını ve yeni bir hayatın aydınlık başlangıcını onurlandıran sıcak bir aile kutlaması.",
    heroPrimary: "Katılımı Onayla",
    heroCalendar: "Takvime Ekle",
    stripDateLabel: "Tarih",
    stripDate: "22 Temmuz 2026",
    stripTimeLabel: "Saat",
    stripVenueLabel: "Mekan",
    venueName: "Tumar Kafesi",
    meaningKicker: "Anlamı",
    meaningTitle: "Geleneksel kalbe sahip modern bir kutlama.",
    meaningText1: "Kız uzatuu, kızın yeni evine dua, müzik, sıcak sözler ve minnetle uğurlandığı aile törenidir.",
    meaningText2: "Bu akşam konuk karşılama, anne babanın dilekleri, bereketli sofra ve içten uğurlama anını bir araya getirir.",
    detailsKicker: "Konuk Bilgileri",
    detailsTitle: "Kutlamadan önce bilmeniz gerekenler.",
    dateCardTitle: "Tarih ve Saat",
    dateCardText: "Çarşamba, 22 Temmuz 2026. Konuk karşılama saat 18:00'de başlar.",
    venueCardTitle: "Mekan",
    venueCardText: "Tumar Kafesi, Oş. Girişte aile karşılaması yapılacaktır.",
    dressCardTitle: "Kıyafet",
    dressCardText: "Zarif akşam stili. Fildişi, zümrüt, gül, altın ve koyu nötr tonlar uygundur.",
    countDays: "Gün",
    countHours: "Saat",
    countMinutes: "Dakika",
    countSeconds: "Saniye",
    programKicker: "Program",
    programTitle: "Karşılamadan uğurlamaya zarif bir akış.",
    programText: "Tören, akşam yemeği ve kutlama anları konukların akışı kolayca takip etmesi için düzenlendi.",
    tabCeremony: "Tören",
    tabDinner: "Akşam Yemeği",
    tabCelebration: "Kutlama",
    ceremonyTitle1: "Konuk Karşılama",
    ceremonyText1: "Aile karşılaması, çiçekler ve ilk fotoğraflar.",
    ceremonyTitle2: "Dua Töreni",
    ceremonyText2: "Büyüklerin sözleri, müzik ve uğurlama geleneği.",
    ceremonyTitle3: "Aile Tostu",
    ceremonyText3: "Anne baba, akrabalar ve yakın konuklar için sıcak bir an.",
    dinnerTitle1: "Akşam Yemeği",
    dinnerText1: "Geleneksel sofra, çay, tatlılar ve mevsimlik ikramlar.",
    dinnerTitle2: "Konuk Dilekleri",
    dinnerText2: "Kısa dilekler ve aile tebrikleri.",
    dinnerTitle3: "Çay Sohbeti",
    dinnerText3: "Sohbet ve hatıra fotoğrafları için sakin bir mola.",
    celebrationTitle1: "Müzik ve Dans",
    celebrationText1: "Canlı müzik, dans ve aile neşesi.",
    celebrationTitle2: "Uğurlama Anı",
    celebrationText2: "Gelinin yeni yolculuğu öncesinde son dua.",
    celebrationTitle3: "Kapanış",
    celebrationText3: "Konukların uğurlanması ve son fotoğraflar.",
    momentsKicker: "Anlar",
    momentsTitle: "Akşamın zarif görsel atmosferi.",
    galleryTitle1: "Tören Dekoru",
    galleryTitle2: "Zümrüt ve Altın Detaylar",
    galleryTitle3: "Aile Sofrası",
    rsvpKicker: "Yanıt",
    rsvpTitle: "Aile sofrasındaki yerinizi onaylayın.",
    rsvpText: "Formu doldurun; yanıtınız hazır WhatsApp mesajı olarak açılacaktır.",
    formNameLabel: "Ad soyad",
    formNamePlaceholder: "Adınız",
    formAttendanceLabel: "Katılım",
    attendanceYes: "Katılacağım",
    attendanceMaybe: "Henüz emin değilim",
    attendanceNo: "Katılamam",
    formMessageLabel: "Dilek",
    formMessagePlaceholder: "Kısa bir dilek veya mesaj",
    formSubmit: "WhatsApp ile gönder",
    faqKicker: "Sorular",
    faqTitle: "Konuklar için yararlı bilgiler.",
    faqQ1: "Konuklar araçlarını nereye park edebilir?",
    faqA1: "Park yeri ana girişe yakın olacaktır. Aile yardımcıları varışta yön gösterecektir.",
    faqQ2: "Çocuklar gelebilir mi?",
    faqA2: "Evet, çocuklar gelebilir. Gerekirse mesaj alanında kısaca belirtebilirsiniz.",
    faqQ3: "Mekana nasıl ulaşırım?",
    faqA3: "Aşağıdaki yol tarifi düğmesini kullanarak mekanı Google Maps'te açabilirsiniz.",
    locationKicker: "Konum",
    locationTitle: "Tumar Kafesi, Oş",
    locationButton: "Yol Tarifi Al",
    footerText: "Kız Uzatuu - Aida'nın ailesinden sevgiyle",
    backTop: "Yukarı dön",
    eventTitle: "Kız Uzatuu",
    honoree: "Aida",
    eventLocation: "Oş, Kırgızistan",
    eventDescription: "Kız uzatuu kutlaması: aile duası, sofra, müzik ve uğurlama geleneği.",
    calendarProduct: "Kız Uzatuu Davetiyesi",
    calendarDownloaded: "Takvim dosyası indirildi.",
    shareCopied: "Davet bağlantısı kopyalandı.",
    shareFailed: "Kopyalama başarısız oldu. Adresi tarayıcıdan kopyalayabilirsiniz.",
    whatsappStatus: "WhatsApp mesajı açıldı.",
    whatsappToast: "WhatsApp açıldı.",
    waGreeting: "Merhaba! Kız Uzatuu yanıtı:",
    waName: "Ad soyad",
    waAttendance: "Katılım",
    waMessage: "Dilek",
    attendanceLabels: { yes: "katılacak", maybe: "henüz emin değil", no: "katılamaz" }
  }
};

const selectors = {
  header: "[data-header]",
  menu: "[data-menu]",
  share: "[data-share]",
  calendar: "[data-calendar]",
  toast: "[data-toast]",
  count: "[data-count]",
  rsvpForm: "[data-rsvp-form]",
  formStatus: "[data-form-status]",
  scrollTop: "[data-scroll-top]",
  tab: "[data-tab]",
  panel: "[data-panel]",
  accordion: "[data-accordion]",
  lightboxTrigger: "[data-lightbox]",
  lightboxModal: "[data-lightbox-modal]",
  lightboxImage: "[data-lightbox-image]",
  lightboxTitle: "[data-lightbox-title]",
  lightboxClose: "[data-lightbox-close]",
  languageSwitcher: "[data-language-switcher]",
  languageOption: "[data-lang]"
};

const savedLanguage = localStorage.getItem("kyzUzatuuLanguage");
let activeLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : "ky";

const header = document.querySelector(selectors.header);
const nav = document.querySelector(".site-nav");
const menuButton = document.querySelector(selectors.menu);
const shareButton = document.querySelector(selectors.share);
const toast = document.querySelector(selectors.toast);
const eventStart = new Date(eventTiming.startsAt);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let toastTimer;
let scrollFrame;

if (!prefersReducedMotion.matches) {
  document.documentElement.classList.add("supports-reveal");
}

function t(key) {
  return translations[activeLanguage][key] ?? translations.ky[key] ?? key;
}

function eventDetails() {
  return {
    title: t("eventTitle"),
    honoree: t("honoree"),
    startsAt: eventTiming.startsAt,
    endsAt: eventTiming.endsAt,
    venue: t("venueName"),
    location: t("eventLocation"),
    description: t("eventDescription")
  };
}

function applyLanguage(language) {
  activeLanguage = supportedLanguages.includes(language) ? language : "ky";
  localStorage.setItem("kyzUzatuuLanguage", activeLanguage);

  document.documentElement.lang = activeLanguage;
  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]').setAttribute("content", t("metaDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-title-key]").forEach((element) => {
    element.dataset.title = t(element.dataset.titleKey);
  });

  document.querySelector(selectors.languageSwitcher)?.setAttribute("aria-label", t("languageLabel"));
  shareButton.setAttribute("aria-label", t("shareLabel"));
  shareButton.setAttribute("title", t("shareLabel"));
  menuButton.setAttribute("aria-label", t("menuLabel"));

  document.querySelectorAll(selectors.languageOption).forEach((button) => {
    const active = button.dataset.lang === activeLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setHeroParallax() {
  if (prefersReducedMotion.matches) return;

  const heroOffset = Math.min(window.scrollY * 0.08, 58);
  document.documentElement.style.setProperty("--hero-offset", `${heroOffset}px`);
}

function updateScrollEffects() {
  setHeaderState();
  setHeroParallax();
}

function requestScrollEffects() {
  if (scrollFrame) return;

  scrollFrame = window.requestAnimationFrame(() => {
    updateScrollEffects();
    scrollFrame = null;
  });
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3200);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  header.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function setupMenu() {
  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      closeMenu();
    }
  });
}

function setupLanguageSwitcher() {
  document.querySelectorAll(selectors.languageOption).forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
      closeMenu();
    });
  });
}

function setupActiveNavigation() {
  const links = [...document.querySelectorAll(".site-nav a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupRevealEffects() {
  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) return;

  const revealTargets = [
    ...document.querySelectorAll(
      [
        ".intro-grid > *",
        ".section-heading",
        ".detail-card",
        ".countdown > div",
        ".program-copy",
        ".schedule-tool",
        ".gallery-item",
        ".rsvp-copy",
        ".rsvp-form",
        ".faq-grid > *",
        ".accordion-item",
        ".location-inner > *"
      ].join(",")
    )
  ];

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal-item");
    target.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.14 }
  );

  revealTargets.forEach((target) => observer.observe(target));
}

function setupCountdown() {
  const fields = {
    days: document.querySelector('[data-count="days"]'),
    hours: document.querySelector('[data-count="hours"]'),
    minutes: document.querySelector('[data-count="minutes"]'),
    seconds: document.querySelector('[data-count="seconds"]')
  };

  function render() {
    const distance = eventStart.getTime() - Date.now();

    if (distance <= 0) {
      Object.values(fields).forEach((field) => {
        field.textContent = "00";
      });
      return;
    }

    const seconds = Math.floor(distance / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    fields.days.textContent = String(days).padStart(2, "0");
    fields.hours.textContent = String(hours).padStart(2, "0");
    fields.minutes.textContent = String(minutes).padStart(2, "0");
    fields.seconds.textContent = String(remainingSeconds).padStart(2, "0");

    if (!prefersReducedMotion.matches) {
      fields.seconds.classList.remove("is-ticking");
      void fields.seconds.offsetWidth;
      fields.seconds.classList.add("is-ticking");
    }
  }

  render();
  window.setInterval(render, 1000);
}

function setupTabs() {
  const tabs = [...document.querySelectorAll(selectors.tab)];
  const panels = [...document.querySelectorAll(selectors.panel)];

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach((button) => {
        const active = button === tab;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", String(active));
      });

      panels.forEach((panel) => {
        panel.hidden = panel.dataset.panel !== target;
      });
    });
  });
}

function formatDateForCalendar(date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function setupCalendarDownload() {
  document.querySelector(selectors.calendar).addEventListener("click", () => {
    const details = eventDetails();
    const starts = formatDateForCalendar(new Date(details.startsAt));
    const ends = formatDateForCalendar(new Date(details.endsAt));
    const content = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      `PRODID:-//${t("calendarProduct")}//${activeLanguage.toUpperCase()}`,
      "BEGIN:VEVENT",
      `UID:${Date.now()}@kyz-uzatuu`,
      `DTSTAMP:${formatDateForCalendar(new Date())}`,
      `DTSTART:${starts}`,
      `DTEND:${ends}`,
      `SUMMARY:${details.honoree} - ${details.title}`,
      `LOCATION:${details.venue}, ${details.location}`,
      `DESCRIPTION:${details.description}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    const objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;
    link.download = "kyz-uzatuu-invitation.ics";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
    showToast(t("calendarDownloaded"));
  });
}

async function setupShare() {
  shareButton.addEventListener("click", async () => {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      showToast(t("shareCopied"));
    } catch {
      showToast(t("shareFailed"));
    }
  });
}

function buildWhatsAppMessage(payload) {
  const details = eventDetails();

  return [
    t("waGreeting"),
    `${t("waName")}: ${payload.name}`,
    `${t("waAttendance")}: ${payload.attendanceLabel}`,
    payload.message ? `${t("waMessage")}: ${payload.message}` : "",
    "",
    `${details.honoree} - ${details.title}`,
    `${details.venue}, ${details.location}`
  ]
    .filter(Boolean)
    .join("\n");
}

function openWhatsAppChat(payload) {
  const message = encodeURIComponent(buildWhatsAppMessage(payload));
  const phoneQuery = whatsappNumber ? `phone=${whatsappNumber}&` : "";
  const url = `https://api.whatsapp.com/send?${phoneQuery}text=${message}`;
  const opened = window.open(url, "_blank", "noopener,noreferrer");

  if (!opened) {
    window.location.href = url;
  }
}

function setupRsvp() {
  const form = document.querySelector(selectors.rsvpForm);
  const status = document.querySelector(selectors.formStatus);
  localStorage.removeItem("kyzUzatuuRsvp");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const payload = {
      ...data,
      attendanceLabel: translations[activeLanguage].attendanceLabels[data.attendance],
      submittedAt: new Date().toISOString()
    };

    status.textContent = t("whatsappStatus");
    showToast(t("whatsappToast"));
    openWhatsAppChat(payload);
  });
}

function setupAccordion() {
  document.querySelector(selectors.accordion).addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const item = button.closest(".accordion-item");
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupLightbox() {
  const modal = document.querySelector(selectors.lightboxModal);
  const image = document.querySelector(selectors.lightboxImage);
  const title = document.querySelector(selectors.lightboxTitle);
  const close = document.querySelector(selectors.lightboxClose);

  function openLightbox(trigger) {
    title.textContent = trigger.dataset.titleKey ? t(trigger.dataset.titleKey) : trigger.dataset.title;
    image.src = trigger.dataset.image || "assets/bg-floral.png";
    image.style.objectPosition = trigger.dataset.position || "center";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    close.focus();
  }

  function closeLightbox() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll(selectors.lightboxTrigger).forEach((trigger) => {
    trigger.addEventListener("click", () => openLightbox(trigger));
  });

  close.addEventListener("click", closeLightbox);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function setupScrollTop() {
  document.querySelector(selectors.scrollTop).addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", requestScrollEffects, { passive: true });
applyLanguage(activeLanguage);
updateScrollEffects();
setupMenu();
setupLanguageSwitcher();
setupActiveNavigation();
setupRevealEffects();
setupCountdown();
setupTabs();
setupCalendarDownload();
setupShare();
setupRsvp();
setupAccordion();
setupLightbox();
setupScrollTop();
