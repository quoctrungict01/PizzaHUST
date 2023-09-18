import Tab1 from "./tab/tab1";
import Tab2 from "./tab/tab2";
import Tab3 from "./tab/tab3";
import Tab4 from "./tab/tab4"; // Import the new tab component
import Tab5 from "./tab/tab5"; // Import the new tab component
import TopMain from "./topmainbar";

const Mainbar = ({ activeTab }) => {
  return (
    <div>
      {/* top main */}
      <div>
        <TopMain />
      </div>
      <div className="">
        {/* main tab1 */}
        {activeTab === 'tab1' && <Tab1 />}
        {/* main tab2 */}
        {activeTab === 'tab2' && <Tab2 />}
        {/* main tab3 */}
        {activeTab === 'tab3' && <Tab3 />}
        {/* main tab4 */}
        {activeTab === 'tab4' && <Tab4 />}
        {/* main tab5 */}
        {activeTab === 'tab5' && <Tab5 />}
      </div>
    </div>
  );
};

export default Mainbar;
