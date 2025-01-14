import { FaLaptop,FaMobileAlt,FaTabletAlt } from "react-icons/fa"
import useWindowSize from './hooks/useWindowSize.js'

const Header = ({title}) => {

  const {width} =useWindowSize()

  return (
    <header className="Header">{title}
    {width<768?<FaMobileAlt />:width<962?<FaTabletAlt />:<FaLaptop />}
    </header>
  )
}

export default Header