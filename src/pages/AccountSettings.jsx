import { Camera } from 'lucide-react';
import React from 'react';

const AccountSettingsPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white border-b-2 border-dotted border-gray-400 rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-xl font-bold text-gray-600 mb-8">Account Settings</h1>

        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                <img src={"/profile.jpg"}></img>
            </div>
            <div className="absolute bottom-0 right-0 w-5 h-5   rounded-full border-0"> 
                <Camera
    className="  p-1 bottom-0 w-6 h-6   rounded-full  bg-purple-600  absolute text-white cursor-pointer hover:text-white"
    size={10}
  />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Marry Doe</h2>
            <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
          </div>
        </div>

        <div className="text-gray-600 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elitr. Sed Diam Nonumy Ermod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat. Sed Diam
        </div>

        <button
          onClick={() => onNavigate('landing')}
          className="mt-8 text-purple-600 hover:text-purple-700 font-medium"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default AccountSettingsPage;