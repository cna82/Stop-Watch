// app/page.tsx

import StopwatchClient from "@/components/stopWatchClientSide/idnex";
import { Suspense } from "react";
import Loading from "./Loading";


const HomePage = () => {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <StopwatchClient />
      </Suspense>

    </>
  )
}

export default HomePage;