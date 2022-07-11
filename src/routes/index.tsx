import { lazy, Suspense } from "react";
import Fallback from "../components/fallback";

const Home = lazy(() => import("../pages/home"));

function AllRoutes() {
  return (
    <Suspense fallback={<Fallback />}>
      <Home />
    </Suspense>
  );
}

export default AllRoutes;
