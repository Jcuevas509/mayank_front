import { StatCard } from "./stat-card";
import { TabNav } from "./tab-nav";

export function MainContent() {
  return (
    <div className="h-full -mt-5 p-4 lg:p-6">
      <div className="mb-8 flex flex-col sm:flex-row gap-4 dark:bg-custom-dark bg-custom-lightGray p-4 rounded-lg">
        <div className="flex gap-4 dark:text-white text-black text-center items-center flex-col w-full lg:w-[40%]">
          <h1 className=" font-bold text-xl sm:text-5xl">Hello Vic</h1>
          <p className="text-sm sm:text-xl ">Weekly Stats</p>
          <div className="flex gap-4 ">
            <div className="flex flex-col items-center">
              <span className="text-sm sm:text-xl ">Sets</span>
              <span className="text-sm sm:text-xl  font-semibold">18</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm sm:text-xl ">Sales</span>
              <span className="text-sm sm:text-xl  font-semibold">7</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm sm:text-xl ">Installs</span>
              <span className="text-sm sm:text-xl  font-semibold">4</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between flex-col gap-4 w-full lg:w-[60%]">
          <div className="space-y-4">
            <div className="flex items-center gap-4 justify-end">
              <div className="flex bg-custom-lightGray rounded-md font-bold text-base border-2 border-black">
                <span className="px-2 lg:px-3 py-1 border-r  border-black   text-xs lg:text-sm">
                  Signed
                </span>
                <span className="px-2 lg:px-3 py-1   border-l border-black text-xs lg:text-sm">
                  Installed
                </span>
              </div>
            </div>
            
            <div className="space-y-2 text-xs sm:text-base text-black font-bold">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center dark:bg-custom-gray bg-white px-4 py-2 rounded-md">
                  <span className="w-32">Year to Date</span>
                  <div className="flex justify-end">
                    <span className="w-16 text-right">99</span>
                    <span className="w-16 text-right">57</span>
                  </div>
                </div>

                <div className="flex justify-between items-center dark:bg-custom-gray bg-white px-4 py-2 rounded-md">
                  <span className="w-32">Month to Date</span>
                  <div className="flex justify-end">
                    <span className="w-16 text-right">15</span>
                    <span className="w-16 text-right">4</span>
                  </div>
                </div>

                <div className="flex justify-between items-center dark:bg-custom-gray bg-white px-4 py-2 rounded-md">
                  <span className="w-32">Overall</span>
                  <div className="flex justify-end">
                    <span className="w-16 text-right">99</span>
                    <span className="w-16 text-right">57</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 dark:bg-custom-dark bg-custom-lightGray p-4 rounded-md">
        <TabNav />
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <StatCard title="Progressing" value="57" />
        <StatCard title="Site Survey" value="42" />
        <StatCard title="Permitting" value="39" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Permits Received" value="22" />
        <StatCard title="Scheduled" value="19" />
        <StatCard title="Installed" value="69" />
      </div>
 
      </div>

          </div>
  );
}
