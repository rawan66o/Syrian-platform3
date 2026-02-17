import "./platform-comments.css";
import { Rating } from "react-simple-star-rating";

const dummy_comments = [
    {
        id: 1,
        image: '/images/user/user.svg',
        name: 'محمد احمد الشيخ',
        user_role: 'طالب',
        rating: 5,
        created_at: '2025/8/18',
        comment: 'منصة رائعة، سهلت علي متابعة الدروس والوصول للمحتوى  "التجربة التعليمية فيها حديثة وممتعة، فعلاً خطوة كبيرة نحو تعليم أفضل في سوريا.'
    },
    {
        id: 2,
        image: '/images/user/user.svg',
        name: 'محمد احمد الشيخ',
        user_role: 'طالب',
        rating: 2.5,
        created_at: '2025/8/18',
        comment: 'منصة رائعة، سهلت علي متابعة الدروس والوصول للمحتوى  "التجربة التعليمية فيها حديثة وممتعة، فعلاً خطوة كبيرة نحو تعليم أفضل في سوريا.'
    },
    {
        id: 3,
        image: '/images/user/user.svg',
        name: 'محمد احمد الشيخ',
        user_role: 'طالب',
        rating: 4.5,
        created_at: '2025/8/18',
        comment: 'منصة رائعة، سهلت علي متابعة الدروس والوصول للمحتوى  "التجربة التعليمية فيها حديثة وممتعة، فعلاً خطوة كبيرة نحو تعليم أفضل في سوريا.'
    },
    {
        id: 4,
        image: '/images/user/user.svg',
        name: 'محمد احمد الشيخ',
        user_role: 'طالب',
        rating: 4.5,
        created_at: '2025/8/18',
        comment: 'منصة رائعة، سهلت علي متابعة الدروس والوصول للمحتوى  "التجربة التعليمية فيها حديثة وممتعة، فعلاً خطوة كبيرة نحو تعليم أفضل في سوريا.'
    },
    {
        id: 5,
        image: '/images/user/user.svg',
        name: 'محمد احمد الشيخ',
        user_role: 'طالب',
        rating: 4.5,
        created_at: '2025/8/18',
        comment: 'منصة رائعة، سهلت علي متابعة الدروس والوصول للمحتوى  "التجربة التعليمية فيها حديثة وممتعة، فعلاً خطوة كبيرة نحو تعليم أفضل في سوريا.'
    },
    {
        id: 6,
        image: '/images/user/user.svg',
        name: 'محمد احمد الشيخ',
        user_role: 'طالب',
        rating: 4.5,
        created_at: '2025/8/18',
        comment: 'منصة رائعة، سهلت علي متابعة الدروس والوصول للمحتوى  "التجربة التعليمية فيها حديثة وممتعة، فعلاً خطوة كبيرة نحو تعليم أفضل في سوريا.'
    },
];
const PlatformComments = () => {

    const commentsWithDate = dummy_comments.map(comment => {
        const newDate = new Date(comment.created_at);
        const year = newDate.getFullYear();
        const month = newDate.getMonth() + 1;
        const day = newDate.getDate();
        return { ...comment, created_at: `${day} / ${month} / ${year}` }
    });

    const slideHandler = (direction) => {
        const comments = document.getElementById("comments");
        switch (direction) {
            case 'right':
                comments.scrollLeft -= 480;
                return;
            case 'left':
                comments.scrollLeft += 480;
                return;
            default: comments.scrollLeft += 0;
        }
    };

    return <div className="platform_comments_container_outer">
        <div className="platform_comments_header">
            <div className="platform_comments_p">
                <h2>التعليقات</h2>
                <h1>فيما يلي بعض التعليقات حول منصتنا </h1>
            </div>
            <div className="platform_buttons">
                <button className="platform_button" onClick={() => { slideHandler('right') }}><img src='/icons/arrows/Arrow_Right.svg' alt='' /></button>
                <button className="platform_button" onClick={() => { slideHandler('left') }}><img src='/icons/arrows/Arrow_Left.svg' alt='' /></button>
            </div>
        </div>
        <div id='comments' className="platform_comments_container">
            {commentsWithDate.map(comment => <div className="platform_comment_container" key={comment.id}>
                <div className="platform_image_with_name">
                    <img src={comment.image} alt='' />
                    <div className="platform_name_and_role">
                        <h1 className="platform_name_header" style={{ width: 'fit-content' }}>{comment.name}</h1>
                        <p>({comment.user_role})</p>
                    </div>
                </div>
                <div className="platform_rating_and_date">
                    <div className="platform_rating">
                        {
                            <Rating
                                size={20.26}
                                allowFraction
                                fillColor="#ffb71b"
                                emptyColor="#dbdfe1"
                                transition
                                readonly={true}
                                initialValue={comment.rating} />
                        }
                    </div>
                    <div className="platform_date_container">
                        <img src='/icons/chalender/calendar.svg' alt='' />
                        <div className="platform_date">
                            {comment.created_at}
                        </div>
                    </div>
                </div>
                <div className="platform_comment">
                    {comment.comment}
                </div>
            </div>)}
        </div>
    </div>
};
export default PlatformComments;