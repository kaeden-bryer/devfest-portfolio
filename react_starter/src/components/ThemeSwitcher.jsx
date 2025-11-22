import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Checkmark, PaletteSwatch } from "./Icons";

function ThemeSwitcher({ className = "" }) {
  const { currentTheme, changeTheme, allThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:scale-105 transition-all duration-300 hover:shadow-lg hover:cursor-pointer"
        aria-label="Change theme"
        title="Change theme"
      >
        <PaletteSwatch />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Theme Menu */}
          <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50">
            <div className="p-2">
              <div className="text-sm text-center font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-2 py-1">
                Select Theme
              </div>
              {Object.entries(allThemes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => {
                    changeTheme(key);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 flex items-center gap-3 ${
                    currentTheme === key
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {/* Color preview circles */}
                  <div className="flex gap-1">
                    <div
                      className="size-9 rounded-full border-[3px] border-black"
                      style={{ backgroundColor: theme.colors.primary }}
                    />
                    <div
                      className="size-9 rounded-full border-[3px] border-black"
                      style={{ backgroundColor: theme.colors.secondary }}
                    />
                    <div
                      className="size-9 rounded-full border-[3px] border-black"
                      style={{ backgroundColor: theme.colors.accent }}
                    />
                    <div
                      className="size-9 rounded-full border-[3px] border-black"
                      style={{ backgroundColor: theme.colors.background }}
                    />
                    <div
                      className="size-9 rounded-full border-[3px] border-black"
                      style={{ backgroundColor: theme.colors.dark }}
                    />
                    <div
                      className="size-9 rounded-full border-[3px] border-black"
                      style={{ backgroundColor: theme.colors.text }}
                    />
                    <div
                      className="size-9 rounded-full border-[3px] border-black"
                      style={{ backgroundColor: theme.colors.textDark }}
                    />
                  </div>
                  <span className="text-sm font-bold">{theme.name}</span>
                  {currentTheme === key && <Checkmark />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ThemeSwitcher;
