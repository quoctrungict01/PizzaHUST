import Mainbar from "../component/mainbar";
import { useState } from "react";
import sideImage from '../img/side.jpg'
import 'primeicons/primeicons.css';

const Home = () => {
    const [activeTab, setActiveTab] = useState('tab1')

    return (
        <div className="flex">
            {/* sidebar */}
            <div className="bg-cover bg-no-repeat text-white h-screen w-1/4 py-4"
                style={{ backgroundImage: `url(${sideImage})` }}
            >
                <h1 className="text-2xl font-bold text-center mb-6">PizzaHUST</h1>
                <div className="font-bold">
                    <div
                        className={`p-2 cursor-pointer hover:bg-sky-700 ${activeTab === 'tab1' ? 'bg-sky-700' : ''}`}
                        onClick={() => setActiveTab('tab1')}
                    >
                        <i className="pi pi-user p-2 m-2"></i>
                        USER
                    </div>
                    <div
                        className={`p-2 cursor-pointer hover:bg-sky-700 ${activeTab === 'tab2' ? 'bg-sky-700' : ''}`}
                        onClick={() => setActiveTab('tab2')}
                    >
                        <i className="pi pi-shopping-cart p-2 m-2"></i>
                        Product
                    </div>
                    <div
                        className={`p-2 cursor-pointer hover:bg-sky-700 ${activeTab === 'tab3' ? 'bg-sky-700' : ''}`}
                        onClick={() => setActiveTab('tab3')}
                    >
                        <i className="pi pi-shopping-bag p-2 m-2"></i>
                        ADDPRODUCT
                    </div>
                    <div
                        className={`p-2 cursor-pointer hover:bg-sky-700 ${activeTab === 'tab4' ? 'bg-sky-700' : ''}`}
                        onClick={() => setActiveTab('tab4')}
                    >
                        <i className="pi pi-chart-bar p-2 m-2"></i>
                        Analytics
                    </div>
                    <div
                        className={`p-2 cursor-pointer hover:bg-sky-700 ${activeTab === 'tab5' ? 'bg-sky-700' : ''}`}
                        onClick={() => setActiveTab('tab5')}
                    >
                        <i className="pi pi-cog p-2 m-2"></i>
                        Settings
                    </div>
                </div>
            </div>
            {/* mainbar */}
            <div className="w-3/4">
                <Mainbar activeTab={activeTab} />
            </div>
        </div>
    );
}

export default Home;
