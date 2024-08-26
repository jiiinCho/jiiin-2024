type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="p-12">{children}</div>;
};

export default Container;
