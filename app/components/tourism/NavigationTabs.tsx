interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  tabs: Tab[];
}

const NavigationTabs = ({
  activeTab,
  onTabChange,
  tabs,
}: NavigationTabsProps) => {
  return (
    <section className="bg-gray-50 shadow-sm py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-2 md:px-4">
        <div className="flex justify-center">
          <div className="flex bg-gray-100 p-1 md:p-2 rounded-xl md:rounded-2xl gap-1 md:gap-4 overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center justify-center md:justify-start px-3 md:px-6 cursor-pointer py-2 md:py-3 rounded-lg md:rounded-xl whitespace-nowrap font-medium transition-all duration-300 min-w-0 flex-shrink-0 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:bg-white hover:text-blue-600 hover:shadow-md"
                }`}
              >
                <span className="text-lg md:text-lg md:mr-2">{tab.icon}</span>
                <span className="hidden md:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationTabs;
