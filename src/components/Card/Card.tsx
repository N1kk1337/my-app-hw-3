import { PlusCircleFilled, StarFilled } from "@ant-design/icons";

import classes from "./Card.module.scss";

export type CardProps = {
  /** URL изображения */
  image: string;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
  score: number;
  calories: number;
};
//<title></title>
//<subtitle></subtitle>

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  content,
  onClick,
  score,
  calories,
}) => {
  return (
    <div className={classes.card} onClick={onClick}>
      <div>
        <StarFilled style={{ color: "#FF9F06" }} />
        <span className={classes.score}> {score}</span>
      </div>
      <div className={classes.main}>
        <img className={classes.img} src={image} alt=""></img>
        <span className={classes.title}>{title}</span>
        <span className={classes.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum iure
          temporibus obcaecati soluta nam? Molestiae quasi at eos recusandae
          delectus, beatae, in error, veritatis inventore culpa nobis illo ullam
          nam?
        </span>
        {content}
      </div>

      <div className={classes.bottom}>
        <span className={classes.calories}>{calories} kcal</span>
        <PlusCircleFilled style={{ color: "red" }} />
      </div>
    </div>
  );
};

//export default Card;
