// countriesData.js
const flags = {
  // دول عربية (أكملنا ما ناقص)
  SA: 'https://flagcdn.com/sa.svg',
  AE: 'https://flagcdn.com/ae.svg',
  EG: 'https://flagcdn.com/eg.svg',
  JO: 'https://flagcdn.com/jo.svg',
  KW: 'https://flagcdn.com/kw.svg',
  QA: 'https://flagcdn.com/qa.svg',
  BH: 'https://flagcdn.com/bh.svg',
  OM: 'https://flagcdn.com/om.svg',
  SY: 'https://flagcdn.com/sy.svg',
  LB: 'https://flagcdn.com/lb.svg',
  IQ: 'https://flagcdn.com/iq.svg',
  PS: 'https://flagcdn.com/ps.svg',
  YE: 'https://flagcdn.com/ye.svg',
  SD: 'https://flagcdn.com/sd.svg',
  MA: 'https://flagcdn.com/ma.svg',
  DZ: 'https://flagcdn.com/dz.svg',
  TN: 'https://flagcdn.com/tn.svg',
  LY: 'https://flagcdn.com/ly.svg',
  
  // تركيا
  TR: 'https://flagcdn.com/tr.svg',
  
  // دول أوروبية رئيسية
  GB: 'https://flagcdn.com/gb.svg',      // بريطانيا
  FR: 'https://flagcdn.com/fr.svg',      // فرنسا
  DE: 'https://flagcdn.com/de.svg',      // ألمانيا
  IT: 'https://flagcdn.com/it.svg',      // إيطاليا
  ES: 'https://flagcdn.com/es.svg',      // إسبانيا
  GR: 'https://flagcdn.com/gr.svg',      // اليونان
  NL: 'https://flagcdn.com/nl.svg',      // هولندا
  BE: 'https://flagcdn.com/be.svg',      // بلجيكا
  SE: 'https://flagcdn.com/se.svg',      // السويد
  NO: 'https://flagcdn.com/no.svg',      // النرويج
  FI: 'https://flagcdn.com/fi.svg',      // فنلندا
  DK: 'https://flagcdn.com/dk.svg',      // الدنمارك
  CH: 'https://flagcdn.com/ch.svg',      // سويسرا
  AT: 'https://flagcdn.com/at.svg',      // النمسا
  PT: 'https://flagcdn.com/pt.svg',      // البرتغال
  
  // دول أمريكا
  US: 'https://flagcdn.com/us.svg',      // الولايات المتحدة
  CA: 'https://flagcdn.com/ca.svg',      // كندا
  MX: 'https://flagcdn.com/mx.svg',      // المكسيك
  BR: 'https://flagcdn.com/br.svg',      // البرازيل
  AR: 'https://flagcdn.com/ar.svg',      // الأرجنتين
  CO: 'https://flagcdn.com/co.svg',      // كولومبيا
  CL: 'https://flagcdn.com/cl.svg',      // تشيلي
  
  // آسيا والمحيط الهادئ
  CN: 'https://flagcdn.com/cn.svg',      // الصين
  JP: 'https://flagcdn.com/jp.svg',      // اليابان
  KR: 'https://flagcdn.com/kr.svg',      // كوريا الجنوبية
  IN: 'https://flagcdn.com/in.svg',      // الهند
  AU: 'https://flagcdn.com/au.svg',      // أستراليا
  NZ: 'https://flagcdn.com/nz.svg',      // نيوزيلندا
  SG: 'https://flagcdn.com/sg.svg',      // سنغافورة
  MY: 'https://flagcdn.com/my.svg',      // ماليزيا
  TH: 'https://flagcdn.com/th.svg',      // تايلاند
  ID: 'https://flagcdn.com/id.svg',      // إندونيسيا
  PH: 'https://flagcdn.com/ph.svg',      // الفلبين
  VN: 'https://flagcdn.com/vn.svg',      // فيتنام
  RU: 'https://flagcdn.com/ru.svg',      // روسيا
};

const countriesWithFlages = [
  // 📍 الدول العربية
  { code: 'SY', name: 'سوريا', prefix: '+963', flag: flags.SY, region: 'العالم العربي' },
  { code: 'SA', name: 'السعودية', prefix: '+966', flag: flags.SA, region: 'العالم العربي' },
  { code: 'AE', name: 'الإمارات', prefix: '+971', flag: flags.AE, region: 'العالم العربي' },
  { code: 'EG', name: 'مصر', prefix: '+20', flag: flags.EG, region: 'العالم العربي' },
  { code: 'JO', name: 'الأردن', prefix: '+962', flag: flags.JO, region: 'العالم العربي' },
  { code: 'KW', name: 'الكويت', prefix: '+965', flag: flags.KW, region: 'العالم العربي' },
  { code: 'QA', name: 'قطر', prefix: '+974', flag: flags.QA, region: 'العالم العربي' },
  { code: 'BH', name: 'البحرين', prefix: '+973', flag: flags.BH, region: 'العالم العربي' },
  { code: 'OM', name: 'عمان', prefix: '+968', flag: flags.OM, region: 'العالم العربي' },
  { code: 'LB', name: 'لبنان', prefix: '+961', flag: flags.LB, region: 'العالم العربي' },
  { code: 'IQ', name: 'العراق', prefix: '+964', flag: flags.IQ, region: 'العالم العربي' },
  { code: 'PS', name: 'فلسطين', prefix: '+970', flag: flags.PS, region: 'العالم العربي' },
  { code: 'YE', name: 'اليمن', prefix: '+967', flag: flags.YE, region: 'العالم العربي' },
  { code: 'SD', name: 'السودان', prefix: '+249', flag: flags.SD, region: 'العالم العربي' },
  { code: 'MA', name: 'المغرب', prefix: '+212', flag: flags.MA, region: 'العالم العربي' },
  { code: 'DZ', name: 'الجزائر', prefix: '+213', flag: flags.DZ, region: 'العالم العربي' },
  { code: 'TN', name: 'تونس', prefix: '+216', flag: flags.TN, region: 'العالم العربي' },
  { code: 'LY', name: 'ليبيا', prefix: '+218', flag: flags.LY, region: 'العالم العربي' },
  
  // 🇹🇷 تركيا
  { code: 'TR', name: 'تركيا', prefix: '+90', flag: flags.TR, region: 'أوروبا' },
  
  // 🇪🇺 أوروبا
  { code: 'GB', name: 'بريطانيا', prefix: '+44', flag: flags.GB, region: 'أوروبا' },
  { code: 'FR', name: 'فرنسا', prefix: '+33', flag: flags.FR, region: 'أوروبا' },
  { code: 'DE', name: 'ألمانيا', prefix: '+49', flag: flags.DE, region: 'أوروبا' },
  { code: 'IT', name: 'إيطاليا', prefix: '+39', flag: flags.IT, region: 'أوروبا' },
  { code: 'ES', name: 'إسبانيا', prefix: '+34', flag: flags.ES, region: 'أوروبا' },
  { code: 'GR', name: 'اليونان', prefix: '+30', flag: flags.GR, region: 'أوروبا' },
  { code: 'NL', name: 'هولندا', prefix: '+31', flag: flags.NL, region: 'أوروبا' },
  { code: 'BE', name: 'بلجيكا', prefix: '+32', flag: flags.BE, region: 'أوروبا' },
  { code: 'SE', name: 'السويد', prefix: '+46', flag: flags.SE, region: 'أوروبا' },
  { code: 'NO', name: 'النرويج', prefix: '+47', flag: flags.NO, region: 'أوروبا' },
  { code: 'FI', name: 'فنلندا', prefix: '+358', flag: flags.FI, region: 'أوروبا' },
  { code: 'DK', name: 'الدنمارك', prefix: '+45', flag: flags.DK, region: 'أوروبا' },
  { code: 'CH', name: 'سويسرا', prefix: '+41', flag: flags.CH, region: 'أوروبا' },
  { code: 'AT', name: 'النمسا', prefix: '+43', flag: flags.AT, region: 'أوروبا' },
  { code: 'PT', name: 'البرتغال', prefix: '+351', flag: flags.PT, region: 'أوروبا' },
  
  // 🇺🇸 أمريكا
  { code: 'US', name: 'الولايات المتحدة', prefix: '+1', flag: flags.US, region: 'أمريكا' },
  { code: 'CA', name: 'كندا', prefix: '+1', flag: flags.CA, region: 'أمريكا' },
  { code: 'MX', name: 'المكسيك', prefix: '+52', flag: flags.MX, region: 'أمريكا' },
  { code: 'BR', name: 'البرازيل', prefix: '+55', flag: flags.BR, region: 'أمريكا' },
  { code: 'AR', name: 'الأرجنتين', prefix: '+54', flag: flags.AR, region: 'أمريكا' },
  { code: 'CO', name: 'كولومبيا', prefix: '+57', flag: flags.CO, region: 'أمريكا' },
  { code: 'CL', name: 'تشيلي', prefix: '+56', flag: flags.CL, region: 'أمريكا' },
  
  // 🌏 آسيا والمحيط الهادئ
  { code: 'CN', name: 'الصين', prefix: '+86', flag: flags.CN, region: 'آسيا' },
  { code: 'JP', name: 'اليابان', prefix: '+81', flag: flags.JP, region: 'آسيا' },
  { code: 'KR', name: 'كوريا الجنوبية', prefix: '+82', flag: flags.KR, region: 'آسيا' },
  { code: 'IN', name: 'الهند', prefix: '+91', flag: flags.IN, region: 'آسيا' },
  { code: 'AU', name: 'أستراليا', prefix: '+61', flag: flags.AU, region: 'آسيا' },
  { code: 'NZ', name: 'نيوزيلندا', prefix: '+64', flag: flags.NZ, region: 'آسيا' },
  { code: 'SG', name: 'سنغافورة', prefix: '+65', flag: flags.SG, region: 'آسيا' },
  { code: 'MY', name: 'ماليزيا', prefix: '+60', flag: flags.MY, region: 'آسيا' },
  { code: 'TH', name: 'تايلاند', prefix: '+66', flag: flags.TH, region: 'آسيا' },
  { code: 'ID', name: 'إندونيسيا', prefix: '+62', flag: flags.ID, region: 'آسيا' },
  { code: 'PH', name: 'الفلبين', prefix: '+63', flag: flags.PH, region: 'آسيا' },
  { code: 'VN', name: 'فيتنام', prefix: '+84', flag: flags.VN, region: 'آسيا' },
  { code: 'RU', name: 'روسيا', prefix: '+7', flag: flags.RU, region: 'آسيا' },
];

export { flags, countriesWithFlages };
export default countriesWithFlages;