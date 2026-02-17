import './course-details.css';
import PageHeader from '../../../components/course-details-components/page-header/page-header';
import Description from '../../../components/course-details-components/description/description';
import DividingLine from '../../../components/course-details-components/dividing-line/dividing-line';
import Lessons from '../../../components/course-details-components/lessons/lessons';
import Trainers from '../../../components/course-details-components/trainers/trainers';
import RequestCourse from '../../../components/course-details-components/request-course/request-course';
import Comments from '../../../components/course-details-components/comments/comments';
import Footer from '../../../components/footer/footer';
const CourseDetails = () => {


    return <div className="page">
        <PageHeader />
        <RequestCourse />
        <div className="page_body">
            <Description />
            <DividingLine />
            <Lessons />
            <DividingLine />
            <Trainers />
            <DividingLine />
            <Comments />
        </div>
        <Footer />
    </div>
}
export default CourseDetails;