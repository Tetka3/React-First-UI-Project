import "../App.css"; 
import { Link } from "react-router-dom";



const Sidebar = () => {
    return ( 
        <div className="sidebar"> 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/transactions">Transactions</Link></li>
                <li><Link to="/performance">Performance</Link></li>
                <li><Link to="/setting">Setting</Link></li>
                <li><Link to="/support">Support</Link></li>            
            </ul>           
        </div>
     );
};
 
export default Sidebar;