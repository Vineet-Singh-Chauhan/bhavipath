import React from 'react'

const DiscTest = () => {
    return (
        <div className='my-5 flex flex-col lg:flex-row w-[90%] mx-auto gap-5'>
            <div data-aos="fade-zoom-in"  className='flex-1 flex flex-col justify-center text-center lg:text-start'>
                <div className='font-bold text-4xl sm:text-5xl md:text-6xl text-white my-5'>
                    The DISC personality Test
                </div>
                <div className='text-lg sm:text-xl text-white/50 '>
                This DISC personality test is designed to check personality by calculating your personal profile based on your everyday typical behavior. It's quick and without any obligations. The DISC factors: Dominance, Influence, Steadiness and Compliance explain your behavior towards others and the everyday things you do.
                </div>
            </div>
            <div data-aos="fade-zoom-in" className='flex-1'>

                <div className="grid mb-8 rounded-lg border  shadow-sm border-gray-700 md:mb-12 md:grid-cols-2">
                    <figure className="flex flex-col justify-center items-center p-5 md:p-8 text-center  rounded-t-lg border-b md:rounded-t-none md:rounded-tl-lg md:border-r bg-gray-800 border-gray-700">
                        <blockquote className="mx-auto mb-4 max-w-2xl  lg:mb-8 text-gray-400">
                            <h3 className="text-lg font-semibold  text-white">D: DOMINANCE</h3>
                            <p className="my-4 font-light">This style is both bold and skeptical. They typically dive into challenges. </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium text-white text-left">
                                <div>Bonnie Green</div>
                                <div className="text-sm font-light  text-gray-400">Psychologist at Open World</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-5 md:p-8 text-center  rounded-tr-lg border-b  bg-gray-800 border-gray-700">
                        <blockquote className="mx-auto mb-4 max-w-2xl  lg:mb-8 text-gray-400">
                            <h3 className="text-lg font-semibold  text-white">I: INFLUENCE</h3>
                            <p className="my-4 font-light">This style is both bold and accepting. They are “people oriented” .  </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium text-white text-left">
                                <div>Roberta Casas</div>
                                <div className="text-sm font-light  text-gray-400">Psychologist at Oxford</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-5 md:p-8 text-center  rounded-bl-lg border-b  md:border-b-0 md:border-r bg-gray-800 border-gray-700">
                        <blockquote className="mx-auto mb-4 max-w-2xl  lg:mb-8 text-gray-400">
                            <h3 className="text-lg font-semibold  text-white">S: STEADINESS</h3>
                            <p className="my-4 font-light">This style is both cautious and accepting. They are highly motivated to help others. </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium text-white text-left">
                                <div>Jese Leos</div>
                                <div className="text-sm font-light  text-gray-400">Psychologist at Camphigham</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-5 md:p-8 text-center  rounded-b-lg  md:rounded-br-lg bg-gray-800 border-gray-700">
                        <blockquote className="mx-auto mb-4 max-w-2xl  lg:mb-8 text-gray-400">
                            <h3 className="text-lg font-semibold  text-white">C: CONSCIENTIOUSNESS</h3>
                            <p className="my-4 font-light">This style is both cautious and skeptical. They can best be described as “detail oriented”</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium text-white text-left">
                                <div>Joseph McFall</div>
                                <div className="text-sm font-light  text-gray-400">Psychologist at California University</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>

            </div>

        </div>
    )
}

export default DiscTest