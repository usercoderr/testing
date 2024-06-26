import cls from './Header.module.css'
import Navigation from "../Navigation/Navigation.tsx";

const Header = () => {
    return (
        <header className={cls.header}>
            <Navigation/>
        </header>
    )
}

export default Header
