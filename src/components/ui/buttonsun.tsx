import React, { useState } from "react";
import { IconSun } from "@tabler/icons-react"; 

const ToggleButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleTheme = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="bg-zinc-200 flex items-center justify-start p-1 rounded-full h-8 w-16 relative">
      <div
        className={`absolute h-6 w-6 rounded-full transition-transform duration-300 ease-in-out ${
          isToggled ? "translate-x-8" : "translate-x-0"
        } bg-white flex items-center justify-center`}
      >
        <button
          className="h-full w-full flex items-center justify-center"
          onClick={toggleTheme}
        >
          <IconSun width={16} className="text-zinc-600" />
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
