import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <main>
            <div className="container">
                <section className="not-found">
                    <h1 className="not-found__title">404</h1>
                    <p className="not-found__text">Страница не найдена</p>
                    <button className="not-found__btn"><Link to="/">На главную</Link></button>
                </section>
            </div>
        </main>
    )
}

export default NotFound;