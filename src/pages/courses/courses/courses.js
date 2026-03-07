import "./courses.css";
import { useEffect, useState } from "react";
import Select from "react-select";
import CourseCard from "../../../components/courses-page-components/course-card/course-card";
import Footer from "../../../components/footer/footer";
import usePagination from "../../../hooks/usePagination";
import Pagination from "../../../components/pagination/pagination";



const courses = [
    {
        id: 1,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 2,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 3,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 4,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 5,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 6,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 7,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 8,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 9,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 10,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 11,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 12,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 13,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 14,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 15,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 16,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 17,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 18,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 19,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 20,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 21,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 22,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 23,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 24,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 25,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 26,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 27,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 28,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 29,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 30,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 31,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 32,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 33,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 34,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 35,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 36,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 37,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 38,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 39,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 40,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 41,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 42,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 43,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 44,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 45,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 46,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 47,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 48,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 49,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 50,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 51,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 52,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 53,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 54,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 55,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 56,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 57,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 58,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 59,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 60,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 61,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 62,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 63,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
        students: 17000,
        rating: 4.7
    },
    {
        id: 64,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 65,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 66,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 67,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 68,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 69,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 70,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 71,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 72,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
        students: 17000,
        rating: 4.7
    },
    {
        id: 73,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 74,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 75,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 76,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 77,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 78,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 79,
        imgSrc: "/images/course_card_images/1.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 80,
        imgSrc: "/images/course_card_images/2.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
    {
        id: 81,
        imgSrc: "/images/course_card_images/3.svg",
        time: "28 ساعة",
        title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
        students: 17000,
        rating: 4.7
    },
];


const Courses = () => {
    const [chosenCategory, setchosenCategory] = useState("all_courses");

    const total = courses.length

    const { currentPage, setCurrentPage, pages, totalPages } =
        usePagination({ total, pageSize: 9 });

    const lastCourse = currentPage * 9;
    const firstCourse = lastCourse - 9;

    const categories = [
        { id: 1, category: "كل الكورسات", code: "all_courses" },
        { id: 2, category: "اللغات", code: "langs" },
        { id: 3, category: "الادارة والقيادة", code: "mangement" },
        { id: 4, category: "غرافيك دزاين", code: "graphic_design" },
        { id: 5, category: "العربية", code: "arabic" },
        { id: 6, category: "تصميم UI / UX", code: "ui_ux" },
        { id: 7, category: "الادارة والقيادة", code: "managementb" },
        { id: 8, category: "غرافيك دزاين", code: "graphic_designb" },
    ];

    const reactSelectStyles = {
        indicatorSeparator: (base) => ({
            ...base, display: "none"
        }),
        control: (base) => ({
            ...base,
            width: "137px",
            height: "40px",
            border: "1px solid #d9e4e5",
            fontWeight: "500",
            fontSize: "16px",
            borderRadius: "31px",
            cursor: "pointer",
        }),
        placeholder: (base) => ({
            ...base,
            color: "#072127",
            width: "100%"
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: "#072127"
        }),
        option: (base) => ({
            ...base,
            color: "#072127",
            fontWeight: "500",
        })
    }


    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    }


    return <div className="courses_page">
        <div className="courses_page_container">
            <div className="courses_sidebar_container">
                <div className="courses_sidebar">
                    <h1>التصنيفات</h1>
                    <ul className="courses_categories">
                        {
                            categories.map(cat => <li
                                key={cat.id}
                                onClick={() => { setchosenCategory(cat.code) }}
                                className={`courses_categories_li ${chosenCategory === cat.code ? "courses_chosen_category" : ""}`}>
                                {cat.category}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="courses_container">
                <div className="courses_container_header">
                    <div className="courses_container_header_title_and_order">
                        <h1>جميع الكورسات</h1>
                        <Select
                            placeholder="ترتيب حسب"
                            options={
                                [
                                    { value: "newest", label: "الأحدث" },
                                    { value: "oldest", label: "الأقدم" },
                                ]
                            }
                            styles={reactSelectStyles}
                            isClearable
                        />
                    </div>
                    <div className="courses_search_input_container">
                        <img src="/icons/search_icon/search_normal.svg" className="courses_searchicon" alt="" />
                        <input type="search"
                            className="courses_search_input"
                            placeholder="ابحث عن الكورس"
                        />
                        <button className="courses_search_button">ابحث</button>
                    </div>
                </div>
                <div className="courses_cards">
                    {
                        courses.slice(firstCourse, lastCourse).map((course, index) =>
                            <CourseCard
                                key={course.id}
                                imgSrc={course.imgSrc}
                                time={course.time}
                                title={course.title}
                                students={course.students}
                                rating={course.rating}
                            />)
                    }
                </div>
                <div className="courses_pagination_container">
                    <button className="courses_pagination_btn" onClick={handleNext}>
                        <img src="/icons/next_icon/Next.svg" alt="" />
                    </button>
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        pages={pages}
                        direction="ltr"
                    />
                    <button className="courses_pagination_btn" onClick={handlePrevious}>
                        <img src="/icons/previous_icon/Prev.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
};
export default Courses;
