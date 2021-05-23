import Card from "./Card";
import './Header.css'

function Header(props){
    return(
        <Card className='header'>
            <h1 className='header__title'>{props.title}</h1>
        </Card>
    )
}

 export default Header;