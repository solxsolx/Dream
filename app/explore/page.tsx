import CyberpunkScoreBar from "@/components/Dashboard/Progress";
import ExplorePage from "@/components/Explore/ExplorePage";
import React from "react";

function page() {
  return (
    <div>
      <ExplorePage />
      <CyberpunkScoreBar score={55} maxScore={100} increase={10} />
    </div>
  );
}
export default page;
