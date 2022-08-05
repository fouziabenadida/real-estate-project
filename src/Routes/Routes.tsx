import About from '../Pages/About/About';
import Buy from '../Pages/Buy/Buy'
import CheapHomes from '../Pages/CheapHomes/CheapHomes';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Sell from '../Pages/Sell/Sell';


const routes = [
    {
        title: "Home",
        path: "/",
        component: <Home />

    },
    {
        title: "Buy",
        path: "/buy",
        component: <Buy />

    },
    {
        title: "Sell",
        path: "/sell",
        component: <Sell />
    },

    {
        title: "Cheap homes",
        path: "/cheap-homes",
        component: <CheapHomes />
    },
    {
        title: "Contact",
        path: "/contact",
        component: <Contact />
    },
    {
        title: "Sign Up",
        path: "/sign-up",
        hide: true,
        component: <Contact />
    },
    {
        title: "About Us",
        path: "/about-us",
        hide: true,
        component: <About />
    }
]

export default routes;