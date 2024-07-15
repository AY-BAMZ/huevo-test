import GeneralProvider from "@/context/GeneralContext";
import { ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <GeneralProvider>{children}</GeneralProvider>
    </>
  );
}
