import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import services from "@/data/serviceItems";

const tabsData = [
  {
    id: "overview",
    label: "Overview",
    content: "This is the Overview content.",
  },
  {
    id: "specifications",
    label: "Specifications",
    content: "This is the Specifications content.",
  },
  // Add more tabs as needed
];

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <div className="min-h-screen flex justify-center items-center py-12 px-8 w-full">
      {/* Left Section: Card Display */}
      <div className="w-2/3">
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          className="bg-white text-black shadow-lg rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4">
            {services.find((tab) => tab.id === activeTab)?.title}
          </h2>
          <p>{services.find((tab) => tab.id === activeTab)?.description}</p>
        </motion.div>
      </div>

      {/* Right Section: Tabs */}
      <div className="w-1/3">
        <Tabs
          defaultValue={activeTab}
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="flex flex-col w-max h-fit space-y-2">
            {services.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`py-2 px-4 w-full border border-gray-300 rounded-md hover:bg-gray-200 transition-colors ${
                  activeTab === tab.id ? "bg-gray-300" : ""
                }`}
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default TabComponent;
