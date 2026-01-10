import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner'

const SingleProduct = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await axios.get(`https://recipes-website-backend-471u.onrender.com/api/items/${id}`);
                setItem(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchItem();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return <div className='flex items-center justify-center'>
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#00aaff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: '20px' }}
            wrapperClass="custom-loader"
            visible={true}
        />
    </div>;
    if (!item) return <div>Item not found</div>;

    const extractNumber = (timeString) => {
        if (!timeString) return 0;
        let timeArray = timeString.split(" ");
        return parseInt(timeArray[0]) || 0;
    }

    const prepTimeMinutes = extractNumber(item.more.prep_time);
    const cookTimeMinutes = extractNumber(item.more.cook_time);
    const totalMinutes = prepTimeMinutes + cookTimeMinutes;

    return (
        <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
            <article>
                <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl md:px-8'>
                    <picture className='relative'>
                        <div className='absolute top-4 right-4 bg-white text-secondary px-3 py-1
                            rounded-md uppercase tracking-wider'>{item?.more.servings}</div>
                        <img src={item?.thumbnail_image} alt={item?.name} className='max-h-[250px] md:max-h-none md:h-[570px] md:rounded-xl md:mx-auto object-cover object-center w-full' />
                    </picture>

                    <div className='px-8'>
                        <h1 className='text-4xl mt-12 text-secondary'>{item?.name}</h1>
                        <p className='mt-4'>{item?.description || ''}</p>

                        <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
                            <h3 className='text-xl font-semibold ml-2'>זמן הכנה</h3>
                            <ul className='list-disc mt-3 mr-8 marker:text-orange-500'>
                                <li className='pr-2'>
                                    <p>
                                        <span className='font-medium'>סה"כ: </span><span>{`${totalMinutes} דקות`}</span>
                                    </p>
                                </li>
                                <li className='pr-2 mt-3'>
                                    <p>
                                        <span className='font-medium'>זמן הכנה: </span><span>{item?.more.prep_time}</span>
                                    </p>
                                </li>
                                <li className='pr-2 mt-3'>
                                    <p>
                                        <span className='font-medium'>זמן בישול / אפייה: </span><span>{item?.more.cook_time}</span>
                                    </p>
                                </li>
                            </ul>
                        </article>

                        <article className='bg-purple-50 p-5 mt-6 rounded-xl'>
                            <h3 className='text-xl font-semibold ml-2'>מצרכים</h3>
                            <ul className='list-disc marker:text-purple-500 my-4 mr-8 text-secondary marker:align-middle'>
                                {
                                    item?.ingredients.map((ingredient, index) => (
                                        <div key={index}>
                                            {
                                                ingredient?.title && <p className='pr-2 mt-5 font-medium text-purple-500'>{ingredient?.title}</p>
                                            }
                                            <li className='pr-2 mt-2'>
                                                <span className='font-medium'>{ingredient?.name}: </span>
                                                <span>{ingredient?.quantity}</span>
                                            </li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </article>

                        <article className='bg-blue-50 p-5 md:pl-8 mt-6 rounded-xl'>
                            <h3 className='text-xl font-semibold ml-2'>הוראות הכנה</h3>
                            <ol className='list-decimal marker:text-blue-500 mt-4 mr-8 text-secondary marker:align-middle'>
                                {
                                    item?.instructions.map((instruction, index) => (
                                        <div key={index}>
                                            {
                                                !instruction.includes(":") ?
                                                    <li className='pr-2 mt-2'>{instruction}</li> :
                                                    <p className='pr-2 mt-5 text-blue-500 font-medium'>{instruction}</p>
                                            }
                                        </div>
                                    ))
                                }
                            </ol>

                            <div className='mt-6'>
                                <hr className='w-1/3 border-1 border-blue-200 my-6 mr-3' />
                                {
                                    item?.notes && item?.notes.map((note, index) => (
                                        !note.includes("/") ?
                                            <p className='mr-4 mt-2' key={index}>{note}</p> :
                                            <img key={index} src={note} alt={note} className='rounded-sm md:max-w-[20rem] object-cover w-full' />
                                    ))
                                }
                            </div>
                        </article>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default SingleProduct