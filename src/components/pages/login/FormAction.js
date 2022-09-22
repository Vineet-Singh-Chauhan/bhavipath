export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="group w-fit mx-auto relative  flex justify-center  border border-transparent    text-white px-5 py-3  bg-gradient-to-r   from-[#DA4453] to-[#89216B] transition  ease-out hover:ease-linear hover:bg-gradient-to-l  my-10 rounded  "
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </>
    )
}