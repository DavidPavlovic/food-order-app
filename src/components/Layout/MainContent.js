import css from './MainContent.module.css'

const MainContent = (props) => {

    return (
        <main className={css.main}>
            {props.children}
        </main>
    );
};

export default MainContent;