const MobileLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div
        className="  w-93.75 h-203  bg-[#F7F8F9] overflow-y-auto shadow-xl rounded-xl
        "
      >
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;
