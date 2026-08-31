const scriptURL = 'https://script.google.com/macros/s/AKfycbzqqFbPoHhbUPd9vbq7uCxLow3p44bu5aqhXiV8wWOMqn2CWMHnThx4JZNsATnyJvkdMQ/exec';

const translations = {
  es: {
    'meta-title': 'DriveAutomate | Automatización Google Sin Intermediarios',
    'nav-cta': 'Automatizar Ahora',
    'hero-pill': 'Infraestructura Nativa Google Apps Script',
    'hero-title': 'Automatiza tu negocio en Google Drive',
    'hero-title-span': 'sin intermediarios ni cuotas mensuales.',
    'hero-desc': '¿Pagas suscripciones mensuales en plataformas externas solo para conectar tus herramientas? Diseñamos automatizaciones a medida directamente dentro de tu propio entorno Google para que ahorres tiempo y dinero de forma permanente.',
    'hero-btn-primary': 'Solicitar Estudio Gratuito',
    'hero-btn-secondary': 'Descubre cómo funciona',
    'trust-title': 'Diseñado exclusivamente para entornos de confianza Google',
    'feat-title': '¿Por qué pagar suscripciones externas si ya usas Google?',
    'feat-desc': 'Las pymes y autónomos pierden horas cada día copiando datos entre hojas, generando facturas a mano y organizando archivos. Te mostramos por qué la automatización nativa supera a las plataformas externas de pago recurrente.',
    'card1-title': 'Cero Intermediarios',
    'card1-desc': 'Elimina conectores externos que cobran por cada tarea o ejecución. Todo corre de forma autónoma, ilimitada y segura dentro de tus propios servidores de Google.',
    'card2-title': 'Privacidad Absoluta',
    'card2-desc': 'Tus datos confidenciales, facturas y registros de clientes nunca salen del entorno corporativo ni pasan por servidores de terceros.',
    'card3-title': 'Ahorro Real y Escalable',
    'card3-desc': 'Pago único por desarrollo. Sin suscripciones ni cargos adicionales que aumenten a medida que crece el volumen de operaciones de tu negocio.',
    'menu-cta': 'Solicitar Estudio Gratuito',
    'menu-how': 'Descubre cómo funciona',
    'menu-examples': 'Algunos ejemplos',
    'examples-title': 'Algunos ejemplos',
    'example-label-1': 'Organización automática de carpetas',
    'example-label-2': 'Generación de facturas y documentos',
    'example-label-3': 'Sincronización y alertas inteligentes',
    'form-title': 'Solicita tu Automatización',
    'form-desc': 'Cuéntanos qué procesos repetitivos realizas en tu Drive o Sheets y te diseñaremos un flujo automatizado a medida.',
    'lbl-nombre': 'Nombre o Empresa',
    'lbl-email': 'Correo Electrónico',
    'lbl-mensaje': '¿Qué proceso te gustaría automatizar?',
    'ph-nombre': 'Ej. Ana Pérez (Consultoría)',
    'ph-email': 'tu@correo.com',
    'ph-mensaje': 'Ej. Automatizar la creación de carpetas y PDFs de factura cada vez que se rellena un Google Form...',
    'btn-submit': 'Enviar Petición de Automatización',
    'btn-submitting': 'Enviando petición...',
    'msg-success': '¡Petición enviada con éxito! Quedará registrada en nuestro sistema y te contactaremos en breve.',
    'msg-error': 'Hubo un error al enviar. Por favor, inténtalo de nuevo.',
    'footer-rights': 'Automatización inteligente en entorno Google para Pymes y Autónomos.'
  },
  en: {
    'meta-title': 'DriveAutomate | Google Automation Without Intermediaries',
    'nav-cta': 'Automate Now',
    'hero-pill': 'Native Google Apps Script Infrastructure',
    'hero-title': 'Automate your business on Google Drive',
    'hero-title-span': 'without intermediaries or monthly fees.',
    'hero-desc': 'Paying recurring subscriptions on third-party platforms just to connect your tools? We build custom automations directly inside your own Google ecosystem to permanently save you time and money.',
    'hero-btn-primary': 'Request a Free Assessment',
    'hero-btn-secondary': 'Discover how it works',
    'trust-title': 'Designed exclusively for trusted Google environments',
    'feat-title': 'Why pay external subscriptions when you already use Google?',
    'feat-desc': 'Small businesses and freelancers waste hours daily copying data between sheets, generating invoices manually, and organizing files. Here is why native automation beats third-party paid platforms.',
    'card1-title': 'Zero Intermediaries',
    'card1-desc': 'Eliminate third-party connectors charging per task or run. Everything runs autonomously, unlimited, and securely inside your own Google servers.',
    'card2-title': 'Absolute Privacy',
    'card2-desc': 'Your confidential data, invoices, and client records never leave your corporate environment or pass through external third-party servers.',
    'card3-title': 'Real & Scalable Savings',
    'card3-desc': 'One-time development cost. No subscriptions or hidden fees scaling up as your business operations grow.',
    'menu-cta': 'Request a Free Assessment',
    'menu-how': 'Discover how it works',
    'menu-examples': 'Some examples',
    'examples-title': 'Some examples',
    'example-label-1': 'Automatic folder organization',
    'example-label-2': 'Invoice and document generation',
    'example-label-3': 'Smart synchronization and alerts',
    'form-title': 'Request Your Automation',
    'form-desc': 'Tell us which repetitive workflows you perform in Drive or Sheets, and we will build a custom automated flow for you.',
    'lbl-nombre': 'Name or Company',
    'lbl-email': 'Email Address',
    'lbl-mensaje': 'What process would you like to automate?',
    'ph-nombre': 'E.g. Ana Pérez (Consulting)',
    'ph-email': 'you@email.com',
    'ph-mensaje': 'E.g. Automatically create folders and PDF invoices whenever a Google Form is submitted...',
    'btn-submit': 'Submit Automation Request',
    'btn-submitting': 'Submitting request...',
    'msg-success': 'Request sent successfully! It has been logged and we will contact you shortly.',
    'msg-error': 'There was an error sending your request. Please try again.',
    'footer-rights': 'Smart Google ecosystem automation for SMBs and Freelancers.'
  }
};

const langToggleBtn = document.getElementById('langToggleBtn');
const langText = document.getElementById('langText');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const form = document.getElementById('automationForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('form-status');

let currentLang = navigator.language && navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  if (!t) return;

  document.documentElement.lang = lang;
  document.title = t['meta-title'];

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (t[key]) {
      element.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach((element) => {
    const key = element.getAttribute('data-i18n-ph');
    if (t[key]) {
      element.placeholder = t[key];
    }
  });

  if (langText) {
    langText.textContent = lang === 'es' ? 'EN' : 'ES';
  }

  if (langToggleBtn) {
    langToggleBtn.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
  }
}

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(nextLang);
  });
}

if (menuToggle && mobileMenu) {
  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileMenu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);
    
    if (!clickedInsideMenu && !clickedToggle) {
      closeMenu();
    }
  });
}

if (form && submitBtn && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitBtn.disabled = true;
    
    // CORRECCIÓN DEL BUG DE COPILOT: Las claves con guiones se leen con corchetes
    submitBtn.textContent = translations[currentLang]['btn-submitting'];
    formStatus.style.display = 'none';

    const formData = new FormData(form);

    if (scriptURL.includes('TU_SCRIPT_ID_AQUI')) {
      setTimeout(() => {
        formStatus.textContent = translations[currentLang]['msg-success'];
        formStatus.className = 'success-msg';
        formStatus.style.display = 'block';
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = translations[currentLang]['btn-submit'];
      }, 800);
      return;
    }

    fetch(scriptURL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
      .then(() => {
        formStatus.textContent = translations[currentLang]['msg-success'];
        formStatus.className = 'success-msg';
        formStatus.style.display = 'block';
        form.reset();
      })
      .catch((error) => {
        console.error('Error al enviar:', error);
        formStatus.textContent = translations[currentLang]['msg-error'];
        formStatus.className = 'error-msg';
        formStatus.style.display = 'block';
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = translations[currentLang]['btn-submit'];
      });
  });
}

setLanguage(currentLang);