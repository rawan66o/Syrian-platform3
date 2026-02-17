import { Typography } from "@mui/material";
import '../../styles/CategoriesProject.css'; // سننشئ ملف CSS منفصل

function CategoriesProject() {
  const categories = [
    { name: "مشاريع كذا", count: 13 ,isCheck : true },
    { name: "مشاريع تطوير", count: 8 , isCheck: false },
    { name: "مشاريع تعليمية", count: 5 , isCheck: false },
    { name: "مشاريع اجتماعية", count: 12 , isCheck: false },
    { name: "مشاريع تقنية", count: 7 , isCheck: false }
  ];

  return (
    <div className="categories-container">
      <div className="categories-header">
        <Typography variant="h6" className="categories-title">
          التصنيفات
        </Typography>
      </div>
      
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-info">
              <div 
                className="category-icon"
                style={{ backgroundColor: `${category.isCheck ? "#6DCDE5": "#ffff"}` }}
              >
                <img 
                  src="/images/icons/Vector.png" 
                  alt={`icon ${category.name}`}
                  className="icon-image"
                />
              </div>
              <Typography className="category-name">
                {category.name}
              </Typography>
            </div>
            <Typography className="category-count">
              {category.count}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesProject;