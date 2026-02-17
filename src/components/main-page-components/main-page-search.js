import "./main-page-search.css";



const MainPageSearch = () => {


    return <div className="main_page_search_container_m">
        <h1>اكتشف أكثر من 260 دورة تدريبية مجانية وبافضل الخبرات على المنصة السورية.</h1>
        <div className="main_page_search_input_container_m">
            <img src="/icons/search_icon/search_normal.svg" alt="" />
            <input type="search" className="main_page_search_input_m" placeholder="ابحث عن الدورة التي تحتاجها" />
            <button className="main_page_search_btn_m">ابحث هنا</button>
        </div>
    </div>
};
export default MainPageSearch;