import { format } from 'date-fns';

// Function to create date in the correct format
const createDateWithoutTime = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(0, 0, 0, 0);
  return format(date, 'yyyy/MM/dd'); 
};

const description = `لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .
لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين 

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .سب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .`

const baseProjects = [
  {
    id: 1,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 2,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 3,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 4,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 5,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 6,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 7,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 8,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, 
    currentVolunteers: 4, 
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 9,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, 
    currentVolunteers: 4, 
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 10,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, 
    currentVolunteers: 4, 
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/1-1.jpg",
      "/images/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 11,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, 
    currentVolunteers: 4,
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
];

export const initializeProjectsData = () => {
  if (typeof window === 'undefined') return baseProjects;
  
  try {
    const savedProjects = localStorage.getItem('volunteer-projects');
    
    if (!savedProjects) {
      // إذا لا يوجد بيانات محفوظة، نستخدم البيانات الأساسية مع تهيئة الحقول
      const initializedProjects = baseProjects.map(project => ({
        ...project,
        currentVolunteers: project.currentVolunteers || 0,
        volunteersNeeded: project.volunteersNeeded || 10,
        isFull: (project.currentVolunteers || 0) >= (project.volunteersNeeded || 10),
        volunteersApplied: project.volunteersApplied || [],
        joinRequests: project.joinRequests || []
      }));
      
      // ترتيب حسب التاريخ
      const sortedProjects = initializedProjects.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      
      localStorage.setItem('volunteer-projects', JSON.stringify(sortedProjects));
      console.log('تم تهيئة البيانات في localStorage');
      return sortedProjects;
    }
    
    const projects = JSON.parse(savedProjects);
    return projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
  } catch (error) {
    console.error('خطأ في تهيئة البيانات:', error);
    return baseProjects;
  }
};

export const getInitialProjectsData = () => {
  if (typeof window === 'undefined') return baseProjects;
  
  try {
    const savedProjects = localStorage.getItem('volunteer-projects');
    
    if (savedProjects) {
      const projects = JSON.parse(savedProjects);
      // ترتيب حسب التاريخ من الأحدث إلى الأقدم
      return projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    
    return baseProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
  } catch (error) {
    console.error('❌ خطأ في تحميل البيانات:', error);
    return baseProjects;
  }
};

export { baseProjects };
export default baseProjects;