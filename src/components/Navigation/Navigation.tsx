import {FC} from "react";
import {links} from "../../data/Navigation.ts";
import {NavLink} from "react-router-dom";


const Navigation: FC = () => {
    return (
        <nav className={'flex w-full justify-center'}>
            <ul className={'flex'}>
                {
                    links.map((link) => (
                        <li className={'mr-2'} key={link.id}>
                            <NavLink className={({isActive}) =>
                                isActive ? `text-blue-200` : ``
                            } to={link.href}>{link.name}</NavLink>
                        </li>

                    ))
                }
            </ul>
        </nav>
    )
}
export default Navigation
