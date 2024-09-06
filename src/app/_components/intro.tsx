import { ReactNode } from "react";

type IntroItemProps = {
  children: ReactNode;
};

const IntroItem = ({ children }: IntroItemProps) => {
  return (
    <li className="w-1/4 grow text-sm font-light text-primary-lightest border-t border-t-primary-lightest pt-1 uppercase z-10">
      {children}
    </li>
  );
};

const Intro = () => {
  const introItems = [
    {
      content: (
        <>
          FRONTEND DEVELOPER <br />
          SPECIALIZED IN <br />
          UX/UI DESIGN
        </>
      ),
    },
    {
      content: (
        <>
          mail <br />
          <span className="lowercase font-medium">jiiin.cho.dev@gmail.com</span>
        </>
      ),
    },
    {
      content: (
        <>
          Uppsala, <br />
          Sweden
        </>
      ),
    },
  ];

  return (
    <ul className="w-full p-4 flex xl:w-4/5 mt-[12%] flex-col gap-[10vh] absolute bottom-0">
      {introItems.map((item, index) => (
        <IntroItem key={index}>{item.content}</IntroItem>
      ))}
    </ul>
  );
};

export default Intro;
