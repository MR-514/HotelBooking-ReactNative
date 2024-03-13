
import { useEffect, useState } from "react";
import {Testimonial} from "./testimonial.jsx"

export let TestimonialMain = () => {

    // state variable that decides which component to be rendered
    const [showCompA, setShowCompA] = useState(true);
    const [showCompB, setShowCompB] = useState(false);

    // array of objects containing the testimonial user data
    var testimonialsArr = [{
        section4_testimonial_id : "section4_testimonial1",
        section4_left_sub_img : "./assets/images/03.svg",
        section4_left_img_1 : require("../../../assets/images/02(2).jpg"),
        section4_customer_name : "Carolyn Ortiz"
    },{
        section4_testimonial_id : "section4_testimonial2",
        section4_left_sub_img : "./assets/images/02.svg",
        section4_left_img_1 : require("../../../assets/images/01(3).jpg"),
        section4_customer_name : "Billy Vasquez"
     }];

    useEffect(() => {
        //invoking the toggleSection()  every 4 seconds after every 2 seconds
        const timer = setInterval(() => {
            setTimeout(() => {
                setShowCompA((prev) => !prev)
                setShowCompB(!showCompB)
            },2000);
        },4000);
        return () => {
            clearInterval(timer);
        };
    })


    // let testimonial1 = {
    //     section4_testimonial_id : "section4_testimonial1",
    //     section4_left_sub_img : "./assets/images/03.svg",
    //     section4_left_img_1 : require("../../../assets/images/02(2).jpg"),
    //     section4_customer_name : "Carolyn Ortiz"
    // }

    // let testimonial2 = {
    //     section4_testimonial_id : "section4_testimonial2",
    //     section4_left_sub_img : "./assets/images/02.svg",
    //     section4_left_img_1 : require("../../../assets/images/01(3).jpg"),
    //     section4_customer_name : "Billy Vasquez"
    //  }

    return(
        <>
            {/* {showCompA ? <Testimonial testimonial = {testimonialsArr[0]}/> : <Testimonial testimonial = {testimonialsArr[1]}/>} */}
            {
                showCompA ? <Testimonial testimonial = {testimonialsArr[0]} /> : null
                ||
                showCompB ? <Testimonial testimonial = {testimonialsArr[1]} /> : null
            }

        </>
    )
}