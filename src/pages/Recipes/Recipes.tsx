import { useEffect, useState } from "react";

import { Card } from "@components/Card";
import { Input } from "@components/Input";
import { MultiDropdown } from "@components/MultiDropdown";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//import testdata from "./config/test_data.json";
import classes from "./Recipes.module.scss";

//https://api.spoonacular.com/recipes/complexSearch?apiKey=7d26c9080c674f54b079f35bce1a99a3&addRecipeInformation=true&addRecipeNutrition=true
const Recipes = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url: "https://api.spoonacular.com/recipes/complexSearch?apiKey=7d26c9080c674f54b079f35bce1a99a3&addRecipeInformation=true&addRecipeNutrition=true",
      });
      //console.log("result", result);
      setItems(
        result.data.results.map(
          (raw: {
            [x: string]: any;
            title: any;
            image: any;
            id: any;
            healthScore: any;
          }) => ({
            title: raw.title,
            subtitle: "",
            image: raw.image,
            id: raw.id,
            score: raw.healthScore,
            calories: raw.nutrition.nutrients[0].amount,
          })
        )
      );
    };
    fetch();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Input
          className={classes.search}
          value={"Search"}
          onChange={() => {}}
        />
        <MultiDropdown
          pluralizeOptions={() => "Pick categories"}
          options={[]}
          value={[]}
          onChange={() => {}}
        />
      </div>
      <div className={classes.recipes}>
        {items.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            onClick={() => navigate(`/recipes/${item.id}`)}
            score={Math.round(item.score / 2) / 10}
            calories={Math.floor(item.calories)}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
