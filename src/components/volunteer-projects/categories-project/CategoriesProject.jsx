import { Typography } from "@mui/material";
import './CategoriesProject.css'; 

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
        <h6 variant="h6" className="categories-title">
          التصنيفات
        </h6>
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
              <p className="category-name">
                {category.name}
              </p>
            </div>
            <p className="category-count">
              {category.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesProject;