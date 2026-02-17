import "./forum-container.css";


const ForumContainer = () => {

    const posts = [
        {
            id: 1,
            img: "/images/posts/posts_container_1.svg",
            date: "2025 / 8 / 18",
            commentsNum: 100,
            title: "منشور تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            description: "لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار ."
        },
        {
            id: 2,
            img: "/images/posts/posts_container_2.svg",
            date: "2025 / 8 / 18",
            commentsNum: 100,
            title: "منشور تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            description: "لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار ."
        },
        {
            id: 3,
            img: "/images/posts/posts_container_3.svg",
            date: "2025 / 8 / 18",
            commentsNum: 100,
            title: "منشور تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            description: "لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار ."
        },
    ];

    return <div className="main_page_forum_container">
        <div className="forum_header">
            <h2>المنتدى</h2>
            <h1>آخر الاخبار والمنشورات هذه الفترة</h1>
        </div>
        <div className="forum_cards">
            {posts.map(post => <div key={post.id} className="forum_post_card">
                <img src={post.img} alt="" />
                <div className="forum_post_content">
                    <div className="forum_post_date_comments_title">
                        <div className="forum_post_date_comments">
                            <div className="forum_post_date">
                                <img src="/icons/chalender/calendar.svg" alt="" />
                                <p>{new Date(post.date).toLocaleDateString()}</p>
                            </div>
                            <p className="forum_post_date_comments_comment">+{post.commentsNum} تعليق</p>
                        </div>
                        <h1>{post.title}</h1>
                    </div>
                    <p className="forum_post_desc">{post.description}</p>
                    <button className="forum_post_content_btn">
                        <p>عرض المنشور</p>
                        <img src="/icons/previous_icon/Prev.svg" alt="" />
                    </button>
                </div>
            </div>)}
        </div>
        <button className="view_all_posts_forum_container">عرض جميع المنشورات</button>
    </div>
};
export default ForumContainer;