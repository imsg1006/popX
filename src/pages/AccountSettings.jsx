import { Camera } from "lucide-react";
import React from "react";
import { getUser } from "../utils/auth";
import { Navigate } from "react-router-dom";

const AccountSettingsPage = () => {
  const user = getUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-50 py-6">
       
      <div className="w-93.75 bg-[#F7F8F9]   border-gray-200">
        
        
        <div className="bg-white shadow-sm">
          <h1 className="text-lg font-semibold text-gray-700 px-4 py-3">
            Account Settings
          </h1>
        </div>         
        <div className="px-4 py-6 border-dotted border-gray-300 border-b-2">
          
      
          <div className="flex gap-4 mb-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/marry.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

               
              <div className="absolute bottom-0 right-0">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <Camera size={14} className="text-white" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">Marry Doe</h2>
              <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
            </div>
          </div>
 
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Ermod Tempor Invidunt Ut Labore Et
            Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* Bottom dotted spacing like image */}
        <div className="h-40 border-b-2 border-dotted border-gray-300"></div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
