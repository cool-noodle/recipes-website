import React, { useState } from 'react'
import './Resources.css'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiCupcake } from "react-icons/gi";



// const blogData = [
//     {
//         title: "קרין גורן",
//         link: "https://www.carine.co.il/",
//         description: "אתר קינוחים",
//         imgSrc: <GiCupcake/>,
//         author: "קרין גורן"
//     },
//     {
//         title: "עוגיו.נט",
//         link: "",
//         description: "June 1, 2020",
//         imgSrc: "https://www.lightgalleryjs.com/images/demo/vimeo-video-poster.jpg",
//         author: "Convenire"
//     },
//     {
//         title: "Te nulla Oportere reprimique his dolorum",
//         link: "",
//         description: "June 1, 2020",
//         imgSrc: "https://www.lightgalleryjs.com/images/demo/vimeo-video-poster.jpg",
//         author: "Convenire"
//     },
//     {
//         title: "Te nulla Oportere reprimique his dolorum",
//         link: "",
//         description: "June 1, 2020",
//         imgSrc: "https://www.lightgalleryjs.com/images/demo/vimeo-video-poster.jpg",
//         author: "Convenire"
//     }
// ]

const blogData = [
    {
        title: "קרין גורן",
        link: "https://www.carine.co.il/",
        description: "בלוג קינוחים של קרין גורן",
    },
    {
        title: "עוגיו.נט",
        link: "https://www.oogio.net/",
        description: "בלוג אפייה וקונדיטוריה",
    },
    {
        title: "השולחן",
        link: "https://www.hashulchan.co.il/",
        description: "מתכונים למגוון מאכלים",
    },
    {
        title: "Mako",
        link: "https://www.mako.co.il/food-recipes",
        description: "מתכונים למגוון מאכלים",
    },
    {
        title: "מתכונים ב-10 דקות",
        link: "https://www.10dakot.co.il/",
        description: "מתכונים להכנה מהירה",
    },
]

const tipsData = [
    {
        title: "איך מעניקים לעוגות שמרים זיגוג מבריק ומתוק (שגם מאריך את הטריות)?",
        img: "",
        color: "",
        description: "פשוט מברישים את העוגות החמות בחלב ממותק (מחחמים 1/2 כוס חלב לסף רתיחה בסיר קטן או במיקרוגל. מערבבים פנימה 1/2 כוס סוכר ושקית סוכר וניל וטורפים להמסה) או בסירופ סוכר (מרתיחים 1/2 כוס סוכר עם 1/2 כוס מים 5 דקות). אני מכינה לפעמים סירופ מהיר במיוחד מ-1/2 כוס מים רותחים +  2 כפות סירופ מייפל."
    },
    {
        title: "איך הופכים עוגה ותיקה לפרנץ' טוסט קרם שקדים?",
        img: "",
        color: "",
        description: "מכינים סירופ סוכר (מרתיחים כוס סוכר וכוס מים 5 דקות, ומצננים מעט), קרם שקדים (מאחדים במעבד מזון 100 גרם שקדים טחונים, 100 גרם אבקת סוכר, 100 גרם חמאה רכה, ביצה וכף קמח) ושקדים פרוסים לקישוט. מספיגים פרוסת עוגה עבה בסירופ, מורחים שכבה דקה של קרם שקדים ומפזרם שקדים. אופים להזהבה כ-25 דקות ב-180 מעלות."
    },
    {
        title: "כך מכינים קרם פטיסייר בבית❤️",
        img: "",
        color: "",
        description: "בסיר מחממים לסף רתיחה 2 כוסות חלב וכפית תמצית וניל. במקביל טורפים בקערה 4 חלמונים, 1/2 כוס קונפלור ו-1/2 כוס וכר. מוזגים מצקת מהחלב החם לחלמונים תוך טריפה מהירה. מוסיפים את החלמונים לסיר החלב, מחחמים על אש בינונית וטורפים כל הזמן, עד הסמכה. מסירים מהאש, מעבירים לקערה נקייה ומכסים בניילון נצמד (שממש מצמידים לקרם). מצננים ומעבירים למקרר ל-4 שעות לפחות. טורפים שוב לפני השימוש."
    },
    {
        title: "כך מכינים עוגיות \"אוזני פיל\" שוקולד❤️",
        img: "",
        color: "",
        description: "פורשים על משטח עבודה בצק עלים מרודד ומופשר. מחלקים ל-2 או 3 חלקים לאורך. מורחים כל חלק בממרח שוקולד ומגלגלים משני הצדדים עד למרכז (כמו ספר תורה). מקפיאים כ-30 דקות. מברישים בביצה טרופה ומגלגלים בסוכר לציפוי. פורסים לפרוסות בעובי 1 ס\"מ ומסדרים באופן מרווח בתבנית מרופדת נייר אפייה. אופים ב-190 מעלות להזהבה."
    },
    {
        title: "גם קראמבל יתן חיים חדשים לפירות עייפים (אוקיי אבל לא להגזים, אם הפירות ממש עייפים תנו להם לנוח)",
        img: "",
        color: "",
        description: "מערבבים כוס ורבע של קמח, 1/2 כפית קינמון וכוס סוכר. מוסיפים 100 גרם קוביות חמאה קרה ומשפשפים בידיים לפירורים. שומרים במקפיא, ובינתיים מערבבים 4 כוסות פירות חתוכים עם 1/4 כוס סוכר, מיץ מלימון אחד וכפית תמצית וניל. ממלאים תבניות אישיות בפירות, ומפזרים פירורים מעל. אופים ב-180 מעלות כ-25 דקות, להזהבה."
    },
]

const Resources = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    }

    return (
        <section className='px-6 lg:px-12 py-20'>
            <h1 className='text-3xl text-center font-semibold text-secondary sm:text-5xl 
                sm:leading-relaxed mb-2'>טיפים ומקורות
            </h1>

            <article className='py-2'>
                <div className='container p-6 mx-auto space-y-8'>
                    {/* tips */}
                    <div className='space-y-2 text-center'>
                        <h2 className='sm:text-3xl text-2xl font-semibold'>טיפים ורעיונות שונים</h2>
                        <p className='text-sm mb-10'>לחצו על כל טיפ כדי לקרוא עוד (הטיפים לקוחים מספר המתכונים הישן)</p>
                    </div>

                    <div className="mb-20">
                        {
                            tipsData.map((tip, index) => {
                                return (
                                    <div key={index} className="mb-4 text-sm leading-relaxed ">
                                        {/* title */}
                                        <div className="accordion-header flex justify-between items-center p-2
                                        bg-[#f1f1f1] cursor-pointer text-right rounded-xl mb-2" onClick={() => toggleAccordion(index)}>
                                            <div className='font-medium'>{tip.title}</div>
                                            {
                                                openIndex === index ? <MdOutlineKeyboardArrowUp className='w-[2rem] mr-1' /> :
                                                    <MdOutlineKeyboardArrowDown className='w-[2rem] mr-1' />
                                            }
                                        </div>

                                        {/* tip */}
                                        <div className={`transition-all border-b-1 border-b-[#397a9e] pb-2 ${openIndex === index ? 'visible' : 'hidden'}`}>
                                            <p className='bg-[#e8f5fa] p-2 rounded-xl'>{tip.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* resources */}
                    <div className='space-y-2 text-center'>
                        <h2 className='sm:text-3xl text-2xl font-semibold'>מקורות השראה קולינריים</h2>
                        <p className='text-sm mb-10'>בעמוד זה תמצאו את רשימת האתרים והבלוגים שהיוו השראה או מקור לחלק מהמתכונים שבאתר.
                            <br />(תוכלו ללחוץ על כל מקור לפרטים נוספים)
                        </p>
                    </div>

                    <div className='flex gap-4 flex-wrap items-center justify-center'>
                        {
                            blogData.map((blog, index) => (
                                <div key={index} className='rounded-xl border-2 border-pink-200 w-30 md:w-fit p-2 md:p-4 bg-pink-50'>
                                    <a href={blog.link} target='_blank' className='flex flex-col items-center justify-center'>
                                        <GiCupcake className='size-10 md:size-15 text-pink-500' />
                                        <h3 className='md:text-xl font-medium mt-3 text-center'>{blog.title}</h3>
                                        <p className='text-[0.7rem] md:text-sm text-center'>{blog.description}</p>
                                    </a>
                                </div>
                            ))
                        }
                    </div>

                    {/* <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
                        {
                            tipsData.map((tip, index) => (
                                <div key={index} className='flip-card'>
                                    <div className="card-inner">
                                        <div className="card-front">
                                            <p>{tip.title}</p>
                                        </div>
                                        <div className="card-back">
                                            <p>{tip.tip}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div> */}

                    {/* <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
                        {
                            blogData.map((blog, index) => (
                                <div key={index} className='flex flex-col items-center bg-orange-100 p-4 rounded-xl border-2 border-orange-200'>
                                    <a href={blog.link}>
                                        <img src={blog.imgSrc} alt={blog.title} className='rounded' />
                                        <h3 className='text-2xl font-medium mt-4'>{blog.title}</h3>
                                        <div className='flex justify-between items-center w-full mt-4'>
                                            <p className='text-sm'>{blog.description}</p>
                                            <p className='text-sm'>{blog.author}</p>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </div> */}
                </div>
            </article>
        </section>
    )
}

export default Resources