import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Esse código faz com que assim que a pessoa clicar em uma parte do site, ela vai para o topo da pagina como queremos 

const ScrollToTop = () =>{
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)

    }, [pathname])

    return null
}

export default ScrollToTop