import {Link} from 'react-router-dom';


//logo
import logoB from "../../../images/logoB.png"
export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className=" mt-10 h-14 "
                    src={logoB}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white/90">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-white/50">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}