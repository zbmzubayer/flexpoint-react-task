import { useAppSelector } from "@/redux/hook";

import PlanList from "@/components/PlanList";
import { Tabs } from "@/components/ui/Tabs";

import "@/styles/App.css";

function App() {
  const { plansInfo } = useAppSelector((state) => state.pricing);

  const tabData = [
    {
      label: plansInfo["1_year"].title,
      content: <PlanList type="monthly" />,
    },
    {
      label: (
        <div className="relative flex">
          {plansInfo["2_year"].title}
          <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2 transform rounded-full bg-[rgba(183,141,235,.15)] px-3 py-2.5 font-normal leading-none text-[#49687e]">
            {plansInfo["2_year"].discount}
          </div>
        </div>
      ),
      content: <PlanList type="yearly" />,
    },
  ];

  return (
    <main className="mx-auto min-h-screen max-w-7xl p-8">
      <Tabs tabs={tabData} />
    </main>
  );
}

export default App;
