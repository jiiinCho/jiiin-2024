type Props = {
  children?: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="py-32 px-8">{children}</div>;
};
