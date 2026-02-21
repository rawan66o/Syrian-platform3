import { useState, useMemo, useEffect } from "react";
import styles from "./Forum.module.css";
import { useProjects } from "../../context/volunteer-projects-context";
import Header from "../../components/volunteer-projects/header/Header";
import CategoriesProject from "../../components/volunteer-projects/categories-project/CategoriesProject";
import LatestProjects from "../../components/volunteer-projects/latest-projects/LatestProjects";
import CardPosts from "../../components/volunteer-projects/card-posts/card-posts";

function Forum() {
  const { state } = useProjects();
  const { projects = [] } = state;
  const [activeStep, setActiveStep] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  // تتبع حجم النافذة
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // تحديد حجم الشاشة
  const getScreenSize = () => {
    if (windowWidth < 768) return 'mobile';
    if (windowWidth >= 768 && windowWidth < 1024) return 'tablet';
    return 'desktop';
  };
  
  const screenSize = getScreenSize();
  
  // تحديد عدد العناصر لكل صفحة حسب حجم الشاشة
  const getItemsPerPage = () => {
    if (screenSize === 'mobile') return 2;
    if (screenSize === 'tablet') return 4;
    return 6; // desktop
  };
  
  const ITEMS_PER_PAGE = getItemsPerPage();
  
  // حساب عدد الأعمدة
  const getColumnCount = () => {
    if (screenSize === 'mobile') return 1;
    if (screenSize === 'tablet') return 2;
    return 2; // desktop
  };
  
  const COLUMN_COUNT = getColumnCount();
  
  // حساب عدد الصفحات
  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE));
  
  // إنشاء مصفوفة الصفحات
  const steps = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );

  // حساب المشاريع للصفحة الحالية
  const currentProjects = useMemo(() => {
    const startIndex = activeStep * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return projects.slice(startIndex, endIndex);
  }, [projects, activeStep, ITEMS_PER_PAGE]);

  const handleNext = () => {
    if (activeStep < totalPages - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleStepClick = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < totalPages) {
      setActiveStep(stepIndex);
    }
  };

  // دالة لعرض الأرقام مع النقاط للصفحات البعيدة
  const renderStepNumbers = () => {
    const maxVisibleSteps = screenSize === 'mobile' ? 3 : screenSize === 'tablet' ? 5 : 7;
    
    if (totalPages <= maxVisibleSteps) {
      return steps.map((step, index) => (
        <div
          key={index}
          className={`${styles.stepNumber} ${activeStep === index ? styles.active : ''}`}
          onClick={() => handleStepClick(index)}
        >
          {step}
        </div>
      ));
    }

    let numbersToShow = [];
    const currentStep = activeStep;
    
    if (currentStep <= 2) {
      numbersToShow = [0, 1, 2, totalPages - 1];
    } else if (currentStep >= totalPages - 3) {
      numbersToShow = [0, totalPages - 3, totalPages - 2, totalPages - 1];
    } else {
      numbersToShow = [0, currentStep - 1, currentStep, currentStep + 1, totalPages - 1];
    }
    
    const result = [];
    let lastIndex = -1;
    
    numbersToShow.forEach((index, i) => {
      if (index - lastIndex > 1) {
        result.push(
          <div key={`dots-${i}`} className={styles.stepDots}>
            •••
          </div>
        );
      }
      
      result.push(
        <div
          key={index}
          className={`${styles.stepNumber} ${activeStep === index ? styles.active : ''}`}
          onClick={() => handleStepClick(index)}
        >
          {steps[index]}
        </div>
      );
      lastIndex = index;
    });
    
    return result;
  };
  
  // تحديد class للكونتينر حسب حجم الشاشة
  const getContainerClass = () => {
    return `${styles.forumContainer} ${styles[screenSize]}`;
  };

  return (
    <div className={styles.forumPage}>
      <Header title={'المنتدى'} />
      <div className={getContainerClass()}>
        {/* الشريط الجانبي */}
        <div className={styles.forumSidebar}>
          <CategoriesProject />
          <LatestProjects />
        </div>
        
        {/* المحتوى الرئيسي */}
        <div className={styles.forumContent}>
          {currentProjects.length > 0 ? (
            <div 
              className={styles.projectsGrid}
              style={{ gridTemplateColumns: `repeat(${COLUMN_COUNT}, 1fr)` }}
            >
              {currentProjects.map((project) => (
                <div key={project.id} className={styles.projectItem}>
                  <CardPosts project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noProjects}>
              لا توجد مشاريع متاحة حالياً
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.paginationContainer}>
              {/* زر السابق */}
              <button
                className={`${styles.paginationBtn} ${styles.prevBtn} ${activeStep === 0 ? styles.disabled : ''}`}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <span className={styles.arrow}>←</span>
              </button>
              
              {/* أرقام الصفحات */}
              <div className={styles.stepNumbers}>
                {renderStepNumbers()}
              </div>
              
              {/* زر التالي */}
              <button
                className={`${styles.paginationBtn} ${styles.nextBtn} ${activeStep === totalPages - 1 ? styles.disabled : ''}`}
                onClick={handleNext}
                disabled={activeStep === totalPages - 1}
              >
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Forum;