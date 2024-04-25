import { useTranslation } from 'react-i18next';
import './Navbar.css'
const Navbar = ({changeLang}) => {
    const chagngedValue = (e) =>{
        changeLang(e.target.value);
    }
    const {t} = useTranslation()
  return (
    <div className='navbar'> 
          <div className="container">
                         <select  name="" id="" className='navbar-select' onClick={chagngedValue}>
                            <option value="uz">Uz</option>
                            <option value="en">En</option>
                         </select>
                         <ul className="navbar-lists">
                            <li className="navbar-list">{t("main")}</li>
                            <li className="navbar-list">{t("about")}</li>
                            <li className="navbar-list">Faq</li>
                            <li className="navbar-list">{t("connect")}</li>
                         </ul>
        </div>
    </div>
  )
}

export default Navbar