import css from "./MainHero.module.css";

const MainHero = (props) => {
    return(
        <div className={css.hero}>
            <h2 className={css.hero__title}>Delicious Food, Delivered To You</h2>
            <p className={css['hero__text-line']}>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p className={css['hero__text-line']}>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
    );
};

export default MainHero;