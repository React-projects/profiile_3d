import { lazy, Suspense } from "react";
import { LoadingProvider } from "./context/LoadingProvider";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import('./pages/MyWorks'));

const Portfolio = () => (
  <LoadingProvider>
    <Suspense>
      <MainContainer>
        <Suspense>
          <CharacterModel />
        </Suspense>
      </MainContainer>
    </Suspense>
  </LoadingProvider>
);

const App = () => {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const page =
    path === "/myworks" ? <MyWorks /> : path === "/play" ? <Play /> : <Portfolio />;

  return <Suspense fallback={<div>Loading...</div>}>{page}</Suspense>;
};

export default App;
