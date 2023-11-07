import React from 'react'

function Card(
    {imgSrc=`https://images.pexels.com/photos/10583775/pexels-photo-10583775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    name="Sarah Dayan", 
    about=`Tailwind CSS is the only framework that I've seen scale
on large teams. It's easy to customize, adapts to any design,
and the build size is tiny.`, 
    position = `Staff Engineer, Algolia`}
) {
    // console.log(name);
    return (
        <>
            <figure className="mt-4 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto rounded-full md:rounded-none md:rounded-l-lg  mx-auto" src={imgSrc} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                    <p className="text-lg font-medium">
                        {about}
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {name}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {position}
                    </div>
                    </figcaption>
                </div>
            </figure>
        </>
    );
}

export default Card;
