export default {
  en: (d) => d ?  "⁦English (⁩⁨" + d.menu + "⁩⁦)⁩" : 'English',
  de: (d) => d ?  "⁦Deutsch (⁩⁨" + d.menu + "⁩⁦)⁩" : 'Deutsch',
  ar: (d) => d ?  "⁧العربية (⁩⁨" + d.menu + "⁩⁧)⁩" : 'العربية'
};