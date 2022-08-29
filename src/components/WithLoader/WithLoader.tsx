import { Loader } from "../Loader";

/** Пропсы, которые принимает компонент WithLoader */
export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({
  loading,
  ...props
}) => {
  if (loading) {
    return (
      <div>
        <Loader />
        {props.children}
      </div>
    );
  } else {
    return <div>{props.children}</div>;
  }
};

//export default WithLoader;
