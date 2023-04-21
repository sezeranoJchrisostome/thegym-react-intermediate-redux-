import TabBar from "../components/ui/TabBar";
import Trends from "../components/ui/Trends";

export default function Home() {
    return (
        <div className="App text-white relative h-screen grid grid-cols-12 overflow-hidden">
          <TabBar />
          <Trends />
        </div>
      );
}
