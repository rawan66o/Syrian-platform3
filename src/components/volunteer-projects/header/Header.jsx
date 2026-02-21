import { useNavigate } from "react-router";
import styles from "./Header.module.css";

function Header({ title }) {
  const menuItems = ['الرئيسية', 'اخبار', 'مقالات', 'قصص نجاح', 'مقالات'];
  const navigate = useNavigate();

  const handleGo = () => {
    navigate('/add-project');
  };
  
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerSpacer} />
        <div className={styles.headerContent}>
          <div className={styles.headerInner}>
            <h2 className={styles.title}>{title}</h2>
            <button 
              className={styles.addButton}
              onClick={handleGo}
            >
              {title === 'المنتدى' ? "فتح موضوع" : "إضافة مشروع"} 
              <img src="/images/icons/add-square.png" alt="إضافة مشروع" className={styles.buttonIcon} />
            </button>
          </div>
        </div>
        <div className={styles.menuBar}>
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className={styles.menuItem}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;