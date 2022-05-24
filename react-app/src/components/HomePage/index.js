import './HomePage.css'
import { useSelector } from "react-redux";

export default function HomePage() {

    const sessionUser = useSelector(state => state?.session?.user)

    return (
        <h1>My Home Page</h1>
    )
}
