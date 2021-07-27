import React , {useState} from 'react'
import './style.css';
import logo from '../logo.svg';
const Card = ({menuData}) => {
    const [menudata,setmenuData]=useState(menuData);
    const [active,setActive] = useState('all');
    const frontEnd = () => {
        let s = menuData.filter((menu)=>menu.ct === "fd");
        setmenuData(s);
        setActive('fd');
    }
    const fullStack = () => {
        let s = menuData.filter((menu)=>menu.ct === "fs");
        setmenuData(s);
        setActive('fs');
    }
    const allData = () => {
        setmenuData(menuData);
        setActive('all');
    }
    return (
        <>
        <div className="nav-main">
            <button type="button" className={active === 'all' ? 'active' : 'btn'} onClick={allData}>All</button>
            <button type="button" className={active === 'fd' ? 'active' : 'btn'} onClick={frontEnd}>Frontend</button>
            <button type="button" className={active === 'fs' ? 'active' : 'btn'} onClick={fullStack}>Full Stack</button>
        </div>
        <div className="card-container">
            {
                menudata.map((m) =>{
                    return (
                        <div className="card-main" key={m.id}>
                            <div className="card-body">
                                    <img src={logo} width="200" height="200" alt={logo} className="image-avat"/>
                            </div>
                            <div className="card-title">
                                    {m.name}
                            </div>
                            <div className="role">{m.role}</div>
                            <div className="card-footer">
                                    <button className="socialButton">Tw</button>
                                    <button className="socialButton">Ln</button>
                                    <button className="socialButton">Gi</button>
                            </div>
                    </div>
                    )
                })
            }
      </div>
        </>
    )
}

export default Card;
