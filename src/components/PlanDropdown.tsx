import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

import { ChevronIcon } from "@/components/icons/ChevronIcon";

interface PlanDropdownProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  color: {
    primary: string;
    secondary: string;
  };
}

export function PlanDropdown({
  options,
  selectedValue,
  onChange,
  color,
}: PlanDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(
    (option) => option.value === selectedValue,
  );

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        style={{ color: color.primary, borderColor: color.primary }}
        className="flex w-44 cursor-pointer items-center gap-1 rounded-[5px] border px-3 py-2 shadow-sm [&_strong]:font-normal"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="truncate"
          dangerouslySetInnerHTML={{ __html: selectedOption!.label }}
        />
        <ChevronIcon
          style={{ color: color.primary }}
          className={cn(
            "size-2.5 text-gray-400 transition-all duration-200 ease-in-out",
            isOpen ? "-rotate-180 transform" : "",
          )}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-0.5 w-[244px] divide-y rounded-md bg-white text-sm text-muted-dark shadow">
          {options.map((option) => {
            const isSelected = selectedValue === option.value;
            return (
              <button
                style={{
                  color: isSelected ? color.primary : "",
                  backgroundColor: isSelected ? color.secondary : "",
                }}
                key={option.value}
                className="flex w-full items-start px-3 py-2 hover:bg-gray-100 [&_strong]:font-normal"
                onClick={() => handleOptionClick(option.value)}
              >
                <span dangerouslySetInnerHTML={{ __html: option.label }} />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
