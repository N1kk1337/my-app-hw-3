import { useEffect, useState } from "react";

import { HeartFilled, StarFilled } from "@ant-design/icons";
import axios from "axios";
import { useLocation } from "react-router-dom";

import classes from "./RecipeDetails.module.scss";

const RecipeDetails = () => {
  const [item, setItem] = useState<any>({});
  ////https://api.spoonacular.com/recipes/complexSearch?apiKey=7d26c9080c674f54b079f35bce1a99a3&addRecipeInformation=true&addRecipeNutrition=true

  //https://api.spoonacular.com/recipes/716426/information?apiKey=7d26c9080c674f54b079f35bce1a99a3"
  //"https://api.spoonacular.com/recipes/" +
  // location.key +
  // "/information?apiKey=7d26c9080c674f54b079f35bce1a99a3",
  const location = useLocation();
  //console.log(location);
  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url:
          "https://api.spoonacular.com" +
          location.pathname +
          "/information?apiKey=7d26c9080c674f54b079f35bce1a99a3",
      });
      //console.log("result", result);
      setItem(result.data);
    };
    fetch();
  }, []);

  return (
    <div className={classes.container}>
      <button className={classes.btn}></button>
      <img className={classes.img} src={item.image} alt=""></img>

      <div className={classes.bot_container}>
        <div className={classes.thething}></div>
        <div className={classes.title}>
          <span>{item.title}</span>
        </div>

        <div className={classes.ratings_container}>
          <div className={classes.rating_item}>
            <StarFilled style={{ color: "#FF9F06" }} />
            <span className={classes.rating_text}>
              {Math.floor(item.healthScore / 20)} Rating
            </span>
          </div>
          <div className={classes.rating_item}>
            <HeartFilled style={{ color: "red" }} />
            <span className={classes.rating_text}>
              {Math.floor(item.healthScore / 20)} Rating
            </span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: item.instructions }} />
      </div>
    </div>
  );
};

export default RecipeDetails;
