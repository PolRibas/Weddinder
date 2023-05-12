import { FC, ReactNode } from "react";
// import { DefaultHeader, DefaultFooter } from "./components";

interface DefaultLayoutProps {
  children: ReactNode | undefined;
  hasScrolled: boolean;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cover bg-left" style={{ backgroundImage: `url(/bg.avif)` }}>
      <div className="min-h-screen bg-cover bg-left bg-white bg-opacity-70">{children}</div>
    </div>
  );
};
