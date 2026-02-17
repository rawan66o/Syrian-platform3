import "./video-lesson.css";
import ReactPlayer from "react-player";

const VideoLesson = ({ lessonInfo }) => {

    const playvidIcon =
        <div className="lesson_play_video_container">
            <img
                src="/icons/play_video_icon/playvid_icon.png"
                width={70.92}
                height={70.92}
                style={{ zIndex: "10000" }}
                alt="" />
            <p className="lesson_play_video_p">مشاهدة الفيديو</p>
        </div>;


    return <div className="lesson_video_wrapper">
        <ReactPlayer
            className="lesson_video_player"
            src={lessonInfo.videoSrc}
            preload={true}
            playing={true}
            controls
            width="100%"
            height="100%"
            light="/images/video_thumbnail/video_thumbnail.svg"
            playIcon={playvidIcon}
        />
    </div>
};
export default VideoLesson;