import './HomePage.css'
import { useSelector } from "react-redux";
import LeftNav from '../LeftNav';

export default function HomePage() {

    const sessionUser = useSelector(state => state?.session?.user)

    return (
        <div className='homepage-container'>
        <LeftNav />
        <h1>My Home Page</h1>
        </div>
    )
}
