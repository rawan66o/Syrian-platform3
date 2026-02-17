import classes from "./pagination.module.css";


const Pagination = ({ currentPage, setCurrentPage, pages, direction }) => {

    return (
        <div className={classes.bar} dir={direction || "ltr"}>
            {pages.map((page, index) => {
                if (page === "dots") {
                    return <img
                        key={`${page}-${index}`}
                        className={classes.dots}
                        src="/icons/dotdotdot/Page.svg"
                        alt=""
                    />
                }
                else {
                    return <span
                        key={page}
                        className={`${classes.pageClass} ${page === currentPage ? classes.currentPageClass : ""}`}
                        onClick={() => {
                            if (typeof page === "number") setCurrentPage(page);
                        }}>
                        {page}
                    </span>
                }
            }
            )}
        </div>
    );
};

export default Pagination;