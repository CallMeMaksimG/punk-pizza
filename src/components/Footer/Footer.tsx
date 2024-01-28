import { Link } from 'react-router-dom';

const Footer: React.FC  = () => {
    return (
        <footer className='footer'>
            <Link className='footer__link' to="https://maksimgolovanovfrontend.ru">Дизайн и разработка этого сайта</Link>
        </footer>
    );
};

export default Footer;