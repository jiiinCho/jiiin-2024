type Props = {
  children?: React.ReactNode;
};

function Container({ children }: Props) {
  return <div className="py-32 px-8">{children}</div>;
}

export default Container;
