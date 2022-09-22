import React from 'react'

const DiscTest = () => {
    return (
        <div className='my-5 flex flex-col lg:flex-row w-[90%] mx-auto gap-5'>
            <div className='flex-1 flex flex-col justify-center text-center lg:text-start'>
                <div className='font-bold text-4xl sm:text-5xl md:text-6xl text-white my-5'>
                    The DISC personality Test
                </div>
                <div className='text-lg sm:text-xl text-white/50 '>
                    A modern interpretation of Dr. William Marston's behavioral dimensions, this personal strengths profile uncovers four quadrants of behavioral patterns. With the insight from DISC, it will be easier for you to recognize the right opportunities to achieve the results you desire.
                </div>
            </div>
            <div className='flex-1'>

                <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                    <figure className="flex flex-col justify-center items-center p-5 md:p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">D: DOMINANCE</h3>
                            <p className="my-4 font-light">This style is both bold and skeptical. They typically dive into challenges. </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Bonnie Green</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Psychologist at Open World</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-5 md:p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">I: INFLUENCE</h3>
                            <p className="my-4 font-light">This style is both bold and accepting. They are “people oriented” .  </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Roberta Casas</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Psychologist at Oxford</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-5 md:p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">S: STEADINESS</h3>
                            <p className="my-4 font-light">This style is both cautious and accepting. They are highly motivated to help others. </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Jese Leos</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Psychologist at Camphigham</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-5 md:p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">C: CONSCIENTIOUSNESS</h3>
                            <p className="my-4 font-light">This style is both cautious and skeptical. They can best be described as “detail oriented”</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Joseph McFall</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Psychologist at California University</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>

            </div>

        </div>
    )
}

export default DiscTest