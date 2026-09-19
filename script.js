const texts = {
    en:{
        port: "Port",
        folio: "FOLIO",
        sub: "Computer Engineer",
        name: "Ghala ALotibi",
        aboutTitle: "About Me",
        aboutFirst: "Holding a Bachelor’s degree in Computer Engineering has given me a strong professional foundation. However, I believe a degree is just the starting point. My goal is to transform academic knowledge into practical expertise, turning what I have learned into a craft I continuously develop and master,  so that computer engineering is not just a title I hold, but a craft I master.",
        aboutSecond: " I built a strong academic foundation in embedded systems, signal processing, machine learning, and electronics, while developing through hands-on engineering projects the ability to integrate software and hardware and transform engineering concepts into practical solutions.",
        projTitle: "Featured Projects",
        projCategory: "Capstone Project",
        projName: "A Smart Non-Invasive System for Detecting Elevated Intracranial Pressure (ICP)",
        projBadge1: "3rd Place - Taif University Graduation Projects Competition",
        projBadge2: "Patent Application - Under Formal Examination SAIP",
        challengeTitle: "The Challenge",
        challengeDesc: "The need for a safe, reliable, and non-invasive approach to continuous ICP monitoring.",
        solutionTitle: "The Solution",
        solutionDesc: "We developed a smart, non-invasive system that measures the tympanic membrane’s response to acoustic and pressure stimuli, aiming to extract signals that can be analyzed to support the detection of elevated ICP.",
        roleTitle: "My Role",
        roleDesc: "Team Lead, responsible for hardware integration and signal processing, while coordinating the team’s technical work.",
        outcomeTitle: "Prototype & Outcome",
        outcomeDesc: "A working prototype was developed and practically tested using a simulated ear model. The project successfully reached the prototype stage, secured 3rd place in the Graduation Projects Competition, and an official patent application was filed.",
        caption1: "Prototype Demonstration (Click to Watch)",
        caption2: "Project Overview - Taif University College of Computers Magazine (Click to Watch)",
        caption3: "3rd Place Award Ceremony (Click to Watch)",
        expTitle: "Professional Experience",
        expTag: "Field Training - 2026",
        expDate: "05 Jul - 16 AUG",
        expRole: "Technical Support Trainee",
        expPlace: "eHealth Department . Children’s Hospital, Taif",
        expLead: "Practical experience within the eHealth IT support team, supporting electronic health care systems and handling technical issues in a hospital environment.",
        expRecTitle: "Recommendation Letter",
        expRecDesc: "Received from the training organization.",
        expRecClick: "(Click to view letter)",
        expRespTitle: "Key Responsibilities",
        expTask1: "Handled technical incidents through Shahm.",
        expTask2: "Managed user accounts and staff data through Oasis.",
        expTask3: "Formatted and configured computers, and installed essential software.",
        expTask4: "Assisted with technical troubleshooting and user support",
        certTitle: "Certificates & Achievements",
        c1Title: "Bachelor of Computer Engineering",
        c1Desc: "Taif University",
        c1Tag: "Academic Qualification - 2026",
        c1Hint: "Click to view certificates",
        c2Title: "3rd Place in Graduation Projects Competition",
        c2Desc: "Taif University",
        c2Tag: "Competition Certificate - 2026",
        c2Hint: "Click to view certificates",
        gatewayTitle: "A Space to Connect",
        gatewayDesc: "The journey may not always begin with answers to every question, but it always begins with curiosity that drives us to seek them.",
        gatewayBtnText: "Open Connection Space",
        popupMainTitle: "Let’s create a better future together",
        popupSubTitle: "Choose your preferred way to reach out or drop a direct message.",
        getInToutchTitle: "Get in Touch",
        emailLable: "Email",
        phoneLable: "WhatsApp",
        sendMessageTitle: "Send a Message",
        nameLable: "Full Name",
        nameInput: "Enter your name...",
        emailInputLable: "Email",
        emailInput: "Enter your email...",
        messageLable: "Message",
        messageInput: "Write your message here...",
        submitBtn: "Send Message",
        navHome: "Home",
        navAbout: "About",
        navProjects: "Projects",
        navExp: "Experience",
        navCert: "Certificates",
        navContact: "Contact"
    },
    ar:{
        port: "ملف",
        folio: "أعمال",
        sub: "مهندسة حاسب",
        name: "غلا العتيبي",
        aboutTitle: "نبذة تعريفية",
        aboutFirst: "حصولي على درجة البكالوريوس في هندسة الحاسب منحني أساسًا مهنيًا قويًا. ومع ذلك، أؤمن بأن الشهادة هي  مجرد نقطة البداية. هدفي هو تحويل المعرفة الأكاديمية إلى خبرة عملية، وتحويل ما تعلمته إلى حرفة أواصل تطويرها وإتقانها، حيث لا تصبح هندسة الحاسب مجرد لقب أحمله، بل حرفة أُتقنها.",
        aboutSecond: "بنيت أساسًا أكاديميًا في الأنظمة المدمجة، ومعالجة الإشارات، وتعلم الآلة، والإلكترونيات، إلى جانب تطوير مهاراتي من خلال مشاريع هندسية عملية مكنتني من دمج البرمجيات مع المكونات المادية  وتحويل المفاهيم الهندسية إلى حلول عملية.",
        projTitle: "المشاريع المميزة",
        projCategory: "مشروع التخرج",
        projName: "نظام ذكي غير جراحي للكشف عن ارتفاع الضغط داخل الجمجمة (ICP)",
        projBadge1: "المركز الثالث - مسابقة مشاريع التخرج بجامعة الطائف",
        projBadge2: "طلب براءة اختراع - قيد الفحص الشكلي لدى الهيئة السعودية للملكية الفكرية (SAIP)",
        challengeTitle: "التحدي",
        challengeDesc: "الحاجة إلى طريقة آمنة وموثوقة وغير جراحية لمراقبة الضغط داخل الجمجمة.",
        solutionTitle: "الحل",
        solutionDesc: "طوَرنا نظامًا ذكيًا وغير جراحي يقيس استجابة طبلة الأذن للمحفزات الصوتية والضغطية، بهدف استخراج إشارات يمكن تحليلها للمساعدة في الكشف عن ارتفاع الضغط داخل الجمجمة.",
        roleTitle: "مهمتي ضمن الفريق",
        roleDesc: "قائدة الفريق،ومسؤولة عن دمج مكونات الأجهزة ومعالجة الإشارات، بالإضافة إلى تنسيق العمل التقني للفريق.",
        outcomeTitle: "النموذج الأولي والنتائج",
        outcomeDesc: "تم تطوير نموذج أولي واختباره بإستخدام نموذج محاكٍ للأذن. وصل المشروع إلى مرحلة نموذج أولي وحصل على المركز الثالث في مسابقة مشاريع التخرج بجامعة الطائف، كما تم تقديم طلب رسمي للحصول على براءة اختراع.",
        caption1: "عرض النموذج الأولي (انقر للمشاهدة)",
        caption2: "نبذة عن المشروع - مجلة كلية الحاسبات، جامعة الطائف (انقر للمشاهدة)",
        caption3: "تكريم المركز الثالث (انقر للمشاهدة)",
        expTitle: "الخبرة المهنية",
        expTag: "التدريب الميداني - 2026",
        expDate: "05 يوليو - 16 أغسطس 2026",
        expRole: "متدربة دعم فني",
        expPlace: "قسم الصحة الإلكترونية . مستشفى الأطفال بالطائف",
        expLead: "خبرة عملية ضمن فريق دعم تقنية المعلومات في قسم الصحة الإلكترونية، شملت دعم الأنظمة الصحية الإلكترونية ومعالجة المشكلات التقنية في بيئة المستشفى.",
        expRecTitle: "خطاب التوصية",
        expRecDesc: "مُستلم من جهة التدريب",
        expRecClick: "(انقر لعرض الخطاب)",
        expRespTitle: "المهام الرئيسية",
        expTask1: "معالجة البلاغات والمشكلات من خلال منصة شهم.",
        expTask2: "إدارة حسابات المستخدمين وبيانات الموظفين من خلال نظام(Oasis).",
        expTask3: "تهيئة أجهزة الحاسب وتثبيت البرامج الأساسية.",
        expTask4: "المساعدة في حل المشكلات التقنية وتقديم الدعم للمستخدمين.",
        certTitle: "الشهادات والإنجازات",
        c1Title: "بكالوريوس هندسة الحاسب",
        c1Desc: "جامعة الطائف",
        c1Tag: "المؤهل الأكاديمي - 2026",
        c1Hint: "انقر لعرض الشهادة",
        c2Title: "المركز الثالث في مسابقة مشاريع التخرج",
        c2Desc: "جامعة الطائف",
        c2Tag: "شهادة مسابقة - 2026",
        c2Hint: "انقر لعرض الشهادة",
        gatewayTitle: "مساحة للتواصل",
        gatewayDesc: "قد لا تبدأ الرحلة بإجابات عن الأسئلة، لكنها تبدأ دائمًا بفضول يدفعنا للبحث.",
        gatewayBtnText: "افتح مساحة التواصل",
        popupMainTitle: "لنصنع مستقبلًا أفضل معًا",
        popupSubTitle: "اختر الطريقة التي تفضلها للتواصل، أو أرسل رسالة مباشرة",
        getInToutchTitle: "للتواصل",
        emailLable: "البريد الإلكتروني",
        phoneLable: "واتساب",
        sendMessageTitle: "أرسل رسالة",
        nameLable: "الاسم الكامل",
        nameInput: "ادخال الاسم...",
        emailInputLable: "البريد الإلكتروني",
        emailInput: "ادخال البريد الإلكتروني...",
        messageLable: "الرسالة",
        messageInput: "اكتب رسالتك هنا...",
        submitBtn: "إرسال الرسالة",
        navHome: "الرئيسية",
        navAbout: "نبذة تعريفية",
        navProjects: "المشاريع",
        navExp: "الخبرة المهنية",
        navCert: "الشهادات",
        navContact: "مساحة التواصل"
    }
};

let currentLang = 'en';
function observeRevealElements(){
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el =>{
        if (!el.classList.contains('active')){
            revealObserver.observe(el);
        }
    });
}

function updateContent() {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.remove('active'))
    const portEl = document.getElementById('text-port');
    const folioEl = document.getElementById('text-folio');
    const subEl = document.getElementById('sub-text');
    const nameEl = document.querySelector('.footer-name');



    const aboutTitleEl = document.getElementById('about-heading');
    const aboutFirst1El = document.getElementById('about-first-text');
    const aboutSecondEl = document.getElementById('about-second-text');


    const projTitleEl = document.querySelector('.projects-title');
    const projCatEl = document.querySelector('.project-category');
    const projNameEl = document.querySelector('.project-name');
    const badgeEl = document.querySelector('.project-badge');
    const badge1El = document.getElementById('badge-1');
    const badge2El = document.getElementById('badge-2');
    const infoBoxes = document.querySelectorAll('.project-info-box');
    const captions = document.querySelectorAll('.media-caption');




    const expTitleEl = document.getElementById('exp-title-text');
    const expTagEl = document.getElementById('exp-tag-text');
    const expDateEl = document.getElementById('exp-date-text');
    const expRoleEl = document.getElementById('exp-role-text');
    const expPlaceEl = document.getElementById('exp-place-text');
    const expLeadEl = document.getElementById('exp-lead-text');
    const expRecTitleEl = document.getElementById('exp-rec-title');
    const expRecDescEl = document.getElementById('exp-rec-desc');
    const expRecClickEl = document.getElementById('exp-rec-click');
    const expRespTitleEl = document.getElementById('exp-resp-title');
    const expTask1El = document.getElementById('exp-task-1');
    const expTask2El = document.getElementById('exp-task-2');
    const expTask3El = document.getElementById('exp-task-3');
    const expTask4El = document.getElementById('exp-task-4');



    const certTitleEl = document.getElementById('cert-title-text');
    const c1TitleEl = document.getElementById('cert-title-1');
    const c1DescEl = document.getElementById('cert-desc-1');
    const c1TagEl = document.getElementById('cert-tag-1');
    const c1HintEl = document.getElementById('cert-hint-1');
    const c2TitleEl = document.getElementById('cert-title-2');
    const c2DescEl = document.getElementById('cert-desc-2');
    const c2TagEl = document.getElementById('cert-tag-2');
    const c2HintEl = document.getElementById('cert-hint-2');


    const gatewayTitleEl = document.getElementById('gatewayTitle');
    const gatewayDescEl = document.getElementById('gatewayDesc');
    const gatewayBtnTextEl = document.getElementById('gatewayBtnText');
    const popupMainTitleEl = document.getElementById('popupMainTitle');
    const popupSubTitleEl = document.getElementById('popupSubTitle');
    const getInToutchTitleEl = document.getElementById('getInToutchTitle');
    const emailLableEl = document.getElementById('emailLable');
    const phoneLableEl = document.getElementById('phoneLable');
    const sendMessageTitleEl = document.getElementById('sendMessageTitle');
    const nameLableEl = document.getElementById('nameLable');
    const nameInputEl = document.getElementById('nameInput');
    const emailInputLableEl = document.getElementById('emailInputLable');
    const emailInputEl = document.getElementById('emailInput');
    const messageLableEl = document.getElementById('messageLable');
    const messageInputEl = document.getElementById('messageInput');
    const submitBtnEl = document.getElementById('submitBtn');




    if (gatewayTitleEl) gatewayTitleEl.innerText = texts[currentLang].gatewayTitle;
    if (gatewayDescEl) gatewayDescEl.innerText = texts[currentLang].gatewayDesc;
    if (gatewayBtnTextEl) gatewayBtnTextEl.innerText = texts[currentLang].gatewayBtnText;
    if (popupMainTitleEl) popupMainTitleEl.innerText = texts[currentLang].popupMainTitle;
    if (popupSubTitleEl) popupSubTitleEl.innerText = texts[currentLang].popupSubTitle;
    if (getInToutchTitleEl) getInToutchTitleEl.innerText = texts[currentLang].getInToutchTitle;
    if (emailLableEl) emailLableEl.innerText = texts[currentLang].emailInputLable;
    if (phoneLableEl) phoneLableEl.innerText = texts[currentLang].phoneLable;
    if (sendMessageTitleEl) sendMessageTitleEl.innerText = texts[currentLang].sendMessageTitle;
    if (nameLableEl) nameLableEl.innerText = texts[currentLang].nameLable;
    if (nameInputEl) nameInputEl.placeholder = texts[currentLang].nameInput;
    if (emailInputLableEl) emailInputLableEl.innerText = texts[currentLang].emailInputLable;
    if (emailInputEl) emailInputEl.placeholder = texts[currentLang].emailInput;
    if (messageLableEl) messageLableEl.innerText = texts[currentLang].messageLable;
    if (messageInputEl) messageInputEl.placeholder = texts[currentLang].messageInput;
    if (submitBtnEl) submitBtnEl.innerText = texts[currentLang].submitBtn;





    if(certTitleEl) certTitleEl.innerText = texts[currentLang].certTitle;
    if(c1TitleEl) c1TitleEl.innerText = texts[currentLang].c1Title;
    if(c1DescEl) c1DescEl.innerText = texts[currentLang].c1Desc;
    if(c1TagEl) c1TagEl.innerText = texts[currentLang].c1Tag;
    if(c1HintEl) c1HintEl.innerText = texts[currentLang].c1Hint;
    if(c2TitleEl) c2TitleEl.innerText = texts[currentLang].c2Title;
    if(c2DescEl) c2DescEl.innerText = texts[currentLang].c2Desc;
    if(c2TagEl) c2TagEl.innerText = texts[currentLang].c2Tag;
    if(c2HintEl) c2HintEl.innerText = texts[currentLang].c2Hint;




    if(expTitleEl) expTitleEl.innerText = texts[currentLang].expTitle;
    if(expTagEl) expTagEl.innerText = texts[currentLang].expTag;
    if(expDateEl) expDateEl.innerText = texts[currentLang].expDate;
    if(expRoleEl) expRoleEl.innerText = texts[currentLang].expRole;
    if(expPlaceEl) expPlaceEl.innerText = texts[currentLang].expPlace;
    if(expLeadEl) expLeadEl.innerText = texts[currentLang].expLead;
    if(expRecTitleEl) expRecTitleEl.innerText = texts[currentLang].expRecTitle;
    if(expRecDescEl) expRecDescEl.innerText = texts[currentLang].expRecDesc;
    if(expRecClickEl) expRecClickEl.innerText = texts[currentLang].expRecClick;
    if(expRespTitleEl) expRespTitleEl.innerText = texts[currentLang].expRespTitle;
    if(expTask1El) expTask1El.innerText = texts[currentLang].expTask1;
    if(expTask2El) expTask2El.innerText = texts[currentLang].expTask2;
    if(expTask3El) expTask3El.innerText = texts[currentLang].expTask3;
    if(expTask4El) expTask4El.innerText = texts[currentLang].expTask4;



    if(projTitleEl) projTitleEl.innerText = texts[currentLang].projTitle;
    if(projCatEl) projCatEl.innerText = texts[currentLang].projCategory;
    if(projNameEl) projNameEl.innerText = texts[currentLang].projName;
    if(badge1El) badge1El.innerText = texts[currentLang].projBadge1;
    if(badge2El) badge2El.innerText = texts[currentLang].projBadge2;



    if (infoBoxes.length >= 4){
        infoBoxes[0].querySelector('h4').innerText = texts[currentLang].challengeTitle;
        infoBoxes[0].querySelector('p').innerText = texts[currentLang].challengeDesc;

        infoBoxes[1].querySelector('h4').innerText = texts[currentLang].solutionTitle;
        infoBoxes[1].querySelector('p').innerText = texts[currentLang].solutionDesc;

        infoBoxes[2].querySelector('h4').innerText = texts[currentLang].roleTitle;
        infoBoxes[2].querySelector('p').innerText = texts[currentLang].roleDesc;

        infoBoxes[3].querySelector('h4').innerText = texts[currentLang].outcomeTitle;
        infoBoxes[3].querySelector('p').innerText = texts[currentLang].outcomeDesc;
    }

    if (captions.length >= 3){
        captions[0].innerText = texts[currentLang].caption1;
        captions[1].innerText = texts[currentLang].caption2;
        captions[2].innerText = texts[currentLang].caption3;
    }






    if (portEl) portEl.innerText = texts[currentLang].port;
    if (folioEl) folioEl.innerText = texts[currentLang].folio;
    if (subEl) subEl.innerText = texts[currentLang].sub;
    if (nameEl) nameEl.innerText = texts[currentLang].name;



    if (aboutTitleEl) aboutTitleEl.innerText = texts[currentLang].aboutTitle;
    if (aboutFirst1El) aboutFirst1El.innerText = texts[currentLang].aboutFirst;
    if (aboutSecondEl) aboutSecondEl.innerText = texts[currentLang].aboutSecond;


    const navLinks = document.querySelectorAll('.nav-links a');
    const navKeys = ['navHome', 'navAbout', 'navProjects', 'navExp', 'navCert', 'navContact'];
    
    navLinks.forEach((link, index) => {
        if (navKeys[index] && texts[currentLang][navKeys[index]]) {
            link.innerText = texts[currentLang][navKeys[index]];
        }
    });




    const heroH1 = document.querySelector('.hero-text h1');
    const subTitle = document.querySelector('.sub-title');
    const footerName = document.querySelector('.footer-name');

    if (heroH1){
        heroH1.style.animation = 'none';
        heroH1.offsetHeight;
        heroH1.style.animation = '';
    }

     if (subTitle){
        subTitle.style.animation = 'none';
        subTitle.offsetHeight;
        subTitle.style.animation = '';
    }


     if (footerName){
        footerName.style.animation = 'none';
        footerName.offsetHeight;
        footerName.style.animation = '';
    }
    setTimeout(observeRevealElements, 50);

}

function toggleLanguage(){
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
}


const revealOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach (entry => {
    if (entry.isIntersecting){
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    }
    })
}, revealOptions);

window.onload = () => {
    updateContent();
    observeRevealElements();
};




function openMediaModal(type, source){
    const modal = document.getElementById('mediaModal');
    const video = document.getElementById('modalVideo');
    const image = document.getElementById('modalImage');

    if(type === 'video') {
        video.style.display = 'block';
        image.style.display = 'none';
        video.src = source;
        modal.classList.add('active');
        video.play();
    } else if (type === 'image'){
        video.style.display = 'none';
        image.style.display = 'block';
        image.src = source;
        modal.classList.add('active');
    }
}

function closeMediaModal(){
    const modal = document.getElementById('mediaModal');
    const video = document.getElementById('modalVideo');

    video.pause();
    video.currentTime = 0;
    modal.classList.remove('active');
}
/*for contact sec*/
function openContactPopup(){
    const overlay = document.getElementById('contactPopupOverlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeContactPopup(){
   const overlay = document.getElementById('contactPopupOverlay'); 
   overlay.classList.remove('active');
   document.body.style.overflow = 'auto';
}
function handleOutsideClick(event){
    const overlay = document.getElementById('contactPopupOverlay'); 
    if (event.target === overlay){
        CloseContactPopup();
    }
}

/*form for contact sec*/
async function sendContactForm(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formData = new FormData(form);

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try{
        const response = await fetch('https://formspree.io/f/mnpnqkzq',{
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok){
            alert('Message sent successfully! Thank you for connecting.');
            form.reset();
            CloseContactPopup();
        } else{
            alert('There was a problem, Try agin⚠️');
        }
    } catch (error) {
        alert('🛜Network error, Please check your connection.');
    } finally{
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    }
    
}