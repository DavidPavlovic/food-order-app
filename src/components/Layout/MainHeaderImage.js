import React from "react";
import MealsImaeg from '../../assets/meals.jpg';
import classes from '../Layout/MainHeaderImage.module.css'

const MainHeaderImage = () => {
    return(
        <div className={classes['main-image']}>
            <img src={MealsImaeg} alt="meals"></img>  
        </div>  
    );
};

export default MainHeaderImage;