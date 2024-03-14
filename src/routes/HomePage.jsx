import { Outlet,Link } from "react-router-dom"
import './Homepage.css'

function HomePage() 
{
    return (
    <div className="new">
        <label>
            <t className="text"> Dev@Deakin </t> 
            <input class="box" type='text'/> <t className="text2"> Post </t> <Link className="text3" to= 'login'> Login </Link>
        </label>
    </div>

    );
}
export default HomePage