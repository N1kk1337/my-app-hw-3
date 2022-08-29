const CardHoc = (Component: (arg0: any) => any) => {
  const WrappedComponent = (props: any) => {
    return Component;
  };
  return WrappedComponent;
};

export { CardHoc };
