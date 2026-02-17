import './comments.css';
import { v4 as uuid } from 'uuid';

const Comments = () => {
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
    const commentsWithStars = dummy_comments.map(comment => {
        let stars = [];
        for (let i = 0; i < Math.floor(comment.rating); i++) {
            stars.push(<li key={uuid()}><img src='/icons/star/star.svg' alt='' /></li>);
        }
        if (comment.rating > Math.floor(comment.rating)) {
            stars.push(<li key={uuid()} className="cliped_star"><img src='/icons/star/star.svg' alt='' /></li>)
        }
        const newDate = new Date(comment.created_at);
        const year = newDate.getFullYear();
        const month = newDate.getMonth() + 1;
        const day = newDate.getDate();
        return { ...comment, rating: stars, created_at: `${day} / ${month} / ${year}` }
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


    return <div className="comments_container_outer">
        <div className="comments_header">
            <h1 className="comments_container_header">تعليقات الطلاب</h1>
            <div className="buttons">
                <button className="button" onClick={() => { slideHandler('right') }}><img src='/icons/arrows/Arrow_Right.svg' alt='' /></button>
                <button className="button" onClick={() => { slideHandler('left') }}><img src='/icons/arrows/Arrow_Left.svg' alt='' /></button>
            </div>
        </div>
        <div id='comments' className="comments_container">
            {commentsWithStars.map(comment => <div className="comment_container" key={comment.id} >
                <div className="image_with_name">
                    <img src={comment.image} alt='' />
                    <div className="name_and_role">
                        <h1 className="name_header" style={{ width: 'fit-content' }}>{comment.name}</h1>
                        <p>({comment.user_role})</p>
                    </div>
                </div>
                <div className="rating_and_date">
                    <div className="rating">
                        {
                            <ul className="stars_list">
                                {comment.rating}
                            </ul>
                        }
                    </div>
                    <div className="date_container">
                        <img src='/icons/chalender/calendar.svg' alt='' />
                        <div className="date">
                            {comment.created_at}
                        </div>
                    </div>
                </div>
                <div className="details_comment">
                    {comment.comment}
                </div>
            </div>)}
        </div>
    </div>
};
export default Comments;