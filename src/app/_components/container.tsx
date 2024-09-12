type Props = {
  children?: React.ReactNode;
};

export function Container({ children }: Props) {
  return <div className="py-32 px-8">{children}</div>;
}
