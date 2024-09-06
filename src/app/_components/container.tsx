type Props = {
  classNames?: string;
  children?: React.ReactNode;
};

const Container = ({ classNames, children }: Props) => {
  return <section className={`p-12 ${classNames}`}>{children}</section>;
};

export default Container;
