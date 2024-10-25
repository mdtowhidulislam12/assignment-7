
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import logo from './assets/logo.png';
import banner from './assets/banner-main.png';
import dollar from './assets/dollar.png';
import footerLogo from './assets/logo-footer.png';

import './App.css';

function App() {
  return (
    <>
      <header className="py-6 px-20">
        <div className="flex justify-between items-center">
          <div><img src={logo} alt="Logo" /></div>
          
          <div className="flex justify-between items-center gap-5">
            <ul className="flex gap-5">
              <li><a href="">Home</a></li>
              <li><a href="">Fixture</a></li>
              <li><a href="">Team</a></li>
              <li><a href="">Schedules</a></li>
            </ul>
            <div className="flex items-center border-2 rounded-xl py-1 px-2">
            <h2 className="text-lg font-bold">
              coin 
            </h2>
            <img className="w-5 ml-2" src={dollar} alt="" />
            </div>
          </div>
        </div>
      </header>

      <div className="bg-[#131313] bgImg mx-20 p-10 text-white rounded-xl">
        <div className="text-center">
        <div className="flex justify-center">
        <img src={banner} alt="" />
        </div>
        <h1 className="text-2xl font-bold my-2">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="text-gray-400 mb-4">Beyond Boundaries Beyond Limits</p>
        <div className="flex
        justify-center">
          <div className="p-1
          border-2 rounded-xl w-fit">
          <button className="btn font-bold">Claim Free Credit</button>
          </div>
        </div>
        </div>
      </div>

      <main>
        there have main part
      </main>

      <footer className="relative flex justify-center">
        <div className=" w-[87%] absolute  z-10 bottom-[80%] mx-20 bg-[#ffffff22] p-3 rounded-lg">
        <div className=" bgImg bg-cover py-10 px-40 bg-white rounded-lg"  >
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-center text-gray-600">Get the latest updates and news right in your inbox!</p>
          </div>

          <div className="mt-4 text-center">
            <input className="p-2 rounded-lg border-2" type="email" placeholder="Enter your email" />
            <button className="bg-gradient-to-r from-red-400 to-orange-300 p-2 rounded-lg font-bold ml-2">Subscribe</button>
          </div>
        </div>
        </div>
        
        <div className="bg-slate-950   text-white px-20">
          <div className="flex justify-center py-10 pt-24">
          <img src={footerLogo} alt="" />
          </div>
          <div className="md:grid grid-cols-3 items-start gap-20 pb-4">
          <div>
            <h2 className="text-lg font-bold">About Us</h2>
            <p className="text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>

            <ul className="list-disc ml-4 space-y-2">
              <li className="text-gray-400"><a href="">Home</a></li>
              <li className="text-gray-400"><a href="">Services</a></li>
              <li className="text-gray-400"><a href="">About</a></li>
              <li className="text-gray-400"><a href="">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Subscribe</h2>
            <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>

            <div className=" mt-4">
            <input className="rounded-s-lg p-2" type="email" placeholder="Enter your mail" />
            <button className="bg bg-gradient-to-r from-orange-300 to bg-red-400 rounded-e-lg p-2 text-black font-bold">Subscribe</button>
            </div>
          </div>
          </div>
          
        </div>
        
      </footer>
      <p className="text-gray-400 bg-slate-950 text-center py-4 border-t-2 border-gray-400">&copy; 2024 CricketBD All Rights Reserved </p>
    </>
  );
}

export default App;
