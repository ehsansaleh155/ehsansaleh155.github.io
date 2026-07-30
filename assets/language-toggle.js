(function () {
  'use strict';

  var translations = {
    'AI researcher': 'Исследователь в области искусственного интеллекта',
    'About Me': 'Обо мне',
    'Education': 'Образование',
    'Work Experience': 'Опыт работы',
    'Skills': 'Навыки',
    'Publications': 'Публикации',
    'Conference & Seminar': 'Конференции и семинары',
    'Interests': 'Интересы',
    'Honours & Awards': 'Награды и достижения',
    'The Ohio State University': 'Университет штата Огайо',
    'Tomsk State University': 'Томский государственный университет',
    'Shahid Beheshti University': 'Университет имени Шахида Бехешти',
    'Doctor of Philosophy': 'Доктор философии (Ph.D.)',
    'Master of Science': 'Магистр наук',
    'Bachelor of Science': 'Бакалавр наук',
    'Graduate Teaching Associate': 'Ассистент преподавателя',
    'Teacher Assistant': 'Ассистент преподавателя',
    'Intern': 'Стажёр',
    'Head of robotic society': 'Руководитель общества робототехники',
    'Vice chairman of robotic society': 'Заместитель председателя общества робототехники',
    'Digital Skills': 'Цифровые навыки',
    'Language Skills': 'Языковые навыки',
    'Research Interests': 'Научные интересы',
    'Hobbies': 'Увлечения',
    'A Telecommunication Company': 'Телекоммуникационная компания',
    'Address:': 'Адрес:',
    'Field(s) of study:': 'Направление обучения:',
    'GPA:': 'Средний балл:',
    'Final grade:': 'Итоговая оценка:',
    'Thesis:': 'Дипломная работа:',
    'Location:': 'Местоположение:',
    'Projects:': 'Проекты:',
    'Responsible professor:': 'Ответственный преподаватель:',
    'Web:': 'Веб-разработка:',
    'Programming Languages:': 'Языки программирования:',
    'Artificial Intelligence:': 'Искусственный интеллект:',
    'Other:': 'Прочее:',
    'Persian:': 'Персидский:',
    'English:': 'Английский:',
    'Russian:': 'Русский:',
    'Native': 'Родной',
    'Computer science and engineering': 'Информатика и вычислительная техника',
    'Computer sciense and engineering': 'Информатика и вычислительная техника',
    'Information technology in science and instrument engineering': 'Информационные технологии в науке и приборостроении',
    'Electrical Engineering': 'Электротехника',
    'Machine Learning': 'Машинное обучение',
    'Computer Vision and Automation': 'Компьютерное зрение и автоматизация',
    'Technology, Quality, and Project management': 'Управление технологиями, качеством и проектами',
    'Telecommunication': 'Телекоммуникации',
    'Digital Electronics': 'Цифровая электроника',
    'Digital Signal Processing': 'Цифровая обработка сигналов',
    'Computer Networks & CCNA': 'Компьютерные сети и CCNA',
    'Quadcopter, Smart Greenhouse': 'Квадрокоптер, умная теплица',
    'Pathfinder robot (car), CoilGun': 'Робот-следопыт (автомобиль), электромагнитная пушка',
    'Member of conference executive team': 'Член организационного комитета конференции',
    'Member of seminar executive team': 'Член организационного комитета семинара',
    'Privacy-preserving Data Analysis': 'Анализ данных с сохранением конфиденциальности',
    'Privacy-preserving in LLMs': 'Конфиденциальность в больших языковых моделях',
    'Adversarial Machine Learning': 'Состязательное машинное обучение',
    'Fairness in Machine Learning': 'Справедливость в машинном обучении',
    'Cybersecurity': 'Кибербезопасность',
    'Ice skating': 'Катание на коньках',
    'Reading about History and Psychology': 'Чтение об истории и психологии',
    'Boosting Adversarial Training in Adversarial Machine Learning': 'Улучшение состязательного обучения в состязательном машинном обучении',
    'PREDICTING THE GROWTH OF THE TUMORS USING GANS': 'ПРОГНОЗИРОВАНИЕ РОСТА ОПУХОЛЕЙ С ПОМОЩЬЮ GAN',
    'REVIEW ON WIRELESS SECURITY PROTOCOLS (WPA2 & WPA3)': 'ОБЗОР ПРОТОКОЛОВ БЕЗОПАСНОСТИ БЕСПРОВОДНЫХ СЕТЕЙ (WPA2 И WPA3)',
    'A Review of Industrial Applications of Ultrasonics': 'Обзор промышленного применения ультразвука',
    'International Conference on Distributed Computer and Communication Networks. – 2022': 'Международная конференция по распределённым компьютерным и коммуникационным сетям — 2022',
    '9th International Conference on Acoustic and Vibration': '9-я Международная конференция по акустике и вибрации',
    'The 2nd West Asian Colloquium on Optical Wireless Communications (WACOWC 2019), spring 2019.': '2-й Западноазиатский коллоквиум по оптической беспроводной связи (WACOWC 2019), весна 2019 г.',
    'The First Seminar in Neural Stimulation Engineering, winter 2019.': 'Первый семинар по инженерии нейростимуляции, зима 2019 г.',
    'Winner of the Open Doors Olympiad 2020 (Russian Scholarship Project Association "Global Universities") in “Engineering & Technology” subject area.': 'Победитель олимпиады Open Doors 2020 (стипендиальный проект Ассоциации «Глобальные университеты») по направлению «Инженерия и технологии».',
    'Python for Everybody Specialization': 'Специализация «Python для всех»',
    'Applied Cryptography Specialization': 'Специализация «Прикладная криптография»',
    'Cryptography and Hashing Overview': 'Обзор криптографии и хеширования',
    'The Blockchain': 'Блокчейн',
    'Introduction to Data Science in Python': 'Введение в анализ данных на Python',
    'Introduction to Deep Learning': 'Введение в глубокое обучение',
    'Neural Networks and Deep Learning': 'Нейронные сети и глубокое обучение',
    'Getting started with TensorFlow 2': 'Начало работы с TensorFlow 2',
    'Customising your models with TensorFlow 2': 'Настройка моделей с TensorFlow 2',
    'Cloud Computing Foundations': 'Основы облачных вычислений',
    'Columbus, Ohio (United States of America)': 'Колумбус, штат Огайо (США)',
    '36 Lenin Ave. Tomsk, 634050 Tomsk (Russia)': 'проспект Ленина, 36, Томск, 634050 (Россия)',
    'Daneshju Str. Velenjak, 1983969411 Tehran (Iran)': 'ул. Данешджу, Веленджак, 1983969411, Тегеран (Иран)',
    'Ohio, USA': 'Огайо, США',
    'Tehran, Iran': 'Тегеран, Иран',
    'Shahid Beheshti University, Tehran, Iran': 'Университет имени Шахида Бехешти, Тегеран, Иран',
    'Tutor of an “Arduino” workshop, spring 2018.': 'Преподаватель мастер-класса по Arduino, весна 2018 г.',
    'I am currently a Ph.D. student at The Ohio State University, with a focus on research in the domain of security. Specifically, my research aims to ensure the trustworthiness and safety of data.': 'В настоящее время я являюсь аспирантом Университета штата Огайо и занимаюсь исследованиями в области безопасности. В частности, моя работа направлена на обеспечение надёжности и безопасности данных.',
    'My primary interest lies in the field of security within Artificial Intelligence, with a focus on securing smart systems against adversaries to ensure their genuine functionality. Additionally, I am committed to enhancing privacy in data analysis, particularly through techniques such as Differential Privacy, to safeguard individuals’ private information.': 'Мой основной интерес — безопасность искусственного интеллекта, в частности защита интеллектуальных систем от злоумышленников и обеспечение их корректной работы. Кроме того, я занимаюсь повышением конфиденциальности при анализе данных, особенно с помощью дифференциальной приватности, для защиты персональной информации.',
    'In my spare time, I have been engaged in learning and developing decentralized applications (DApps) on Ethereum and Solana blockchains.': 'В свободное время я изучаю и разрабатываю децентрализованные приложения (DApps) на блокчейнах Ethereum и Solana.',
    'My overarching goal is for my research and developed applications to have a positive impact on human society.': 'Моя главная цель — чтобы мои исследования и разработанные приложения приносили пользу обществу.',
    'Web Development: HTML 5 / CSS / JavaScript / Node.js, React.js, Vue.js / TypeScript': 'Веб-разработка: HTML5 / CSS / JavaScript / Node.js, React.js, Vue.js / TypeScript',
    'Windows / Kali Linux / Computer Vision (OpenCV) / Smart Contract Development (Ethereum & Solana) / Microsoft Office / Cryptography / MATLAB / CCNA': 'Windows / Kali Linux / компьютерное зрение (OpenCV) / разработка смарт-контрактов (Ethereum и Solana) / Microsoft Office / криптография / MATLAB / CCNA'
  };

  var phraseTranslations = [
    ['1- GTA of the course “Data Structures and Algorithms” (Dr. A. Rossi), Spring 2024.', '1 — Ассистент курса «Структуры данных и алгоритмы» (д-р А. Росси), весна 2024 г.'],
    ['2- GTA of the course “Data Structures and Algorithms” (Dr. A. AlilooeeDolatabad), Summer 2024.', '2 — Ассистент курса «Структуры данных и алгоритмы» (д-р А. Алилуи Долатабад), лето 2024 г.'],
    ['1- TA of the course “Signals & Systems” (Dr. Z. Ahmadian), winter & spring 2020.', '1 — Ассистент курса «Сигналы и системы» (д-р З. Ахмадиан), зима и весна 2020 г.'],
    ['2- TA of the course “Communication Circuits” (Dr. S. Karimian), fall 2019.', '2 — Ассистент курса «Схемы связи» (д-р С. Каримиан), осень 2019 г.'],
    ['3- TA of the course “Electromagnetics” (Dr. A. Pirhadi), fall 2019.', '3 — Ассистент курса «Электромагнетизм» (д-р А. Пирхади), осень 2019 г.']
  ];

  var textNodes = [];
  var englishText = [];
  var currentLanguage = 'en';

  function normalized(value) {
    return value.replace(/\s+/g, ' ').trim();
  }

  function translateValue(value) {
    var key = normalized(value);
    var translated = translations[key];
    if (!translated) {
      phraseTranslations.some(function (pair) {
        if (key === pair[0]) {
          translated = pair[1];
          return true;
        }
        return false;
      });
    }
    if (!translated) return value;
    var leading = value.match(/^\s*/)[0];
    var trailing = value.match(/\s*$/)[0];
    return leading + translated + trailing;
  }

  function collectTextNodes() {
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          var parent = node.parentElement;
          if (!parent || !normalized(node.nodeValue)) return NodeFilter.FILTER_REJECT;
          if (parent.closest('.language-toggle, script, style, noscript')) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
      englishText.push(walker.currentNode.nodeValue);
    }
  }

  function setLanguage(language) {
    currentLanguage = language === 'ru' ? 'ru' : 'en';
    textNodes.forEach(function (node, index) {
      node.nodeValue = currentLanguage === 'ru'
        ? translateValue(englishText[index])
        : englishText[index];
    });
    document.documentElement.lang = currentLanguage;
    document.title = currentLanguage === 'ru'
      ? 'Эхсан Салех — резюме'
      : 'Ehsan Saleh — Resume';
    document.querySelectorAll('.language-toggle button').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage));
    });
    try {
      localStorage.setItem('resume-language', currentLanguage);
    } catch (error) {
      // The toggle still works when storage is unavailable.
    }
  }

  function createToggle() {
    var container = document.createElement('div');
    container.className = 'language-toggle';
    container.setAttribute('role', 'group');
    container.setAttribute('aria-label', 'Choose language / Выберите язык');
    container.innerHTML =
      '<button type="button" data-language="ru" aria-label="Русский">RU</button>' +
      '<button type="button" data-language="en" aria-label="English">EN</button>';
    container.addEventListener('click', function (event) {
      var button = event.target.closest('button[data-language]');
      if (button) setLanguage(button.dataset.language);
    });
    document.body.appendChild(container);
  }

  document.addEventListener('DOMContentLoaded', function () {
    collectTextNodes();
    createToggle();
    var preferredLanguages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || 'en'];
    var systemLanguage = preferredLanguages.some(function (language) {
      return String(language).toLowerCase().split('-')[0] === 'ru';
    }) ? 'ru' : 'en';
    var savedLanguage = systemLanguage;
    try {
      savedLanguage = localStorage.getItem('resume-language') || systemLanguage;
    } catch (error) {
      // Use the system language when storage is unavailable.
    }
    setLanguage(savedLanguage);
  });
}());
