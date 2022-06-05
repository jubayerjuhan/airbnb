import React, { useState } from "react";
import "./AirbnbSignatureInput.scss";
import { BiSearch } from "react-icons/bi";

const AirbnbSignatureInput = () => {
  const [active, setActive] = useState(false);
  const [activeSearchField, setActiveSearchField] = useState("");

  const searchFields = [
    { label: "Anywhere", extendLabel: "Where", value: <SearchField /> },
    { label: "Any Week", extendLabel: "When", value: <SearchField /> },
    { label: "Add Guest", extendLabel: "Who", value: <SearchField /> },
  ];

  const handleFieldClick = (fieldName: string) => {
    setActiveSearchField(fieldName);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {!active ? (
          <div
            className="airbnbSearchBox flex items-center gap-3 bg-white h-12 px-4 rounded-full"
            onClick={() => setActive(true)}
          >
            <button>Anywhere</button> |<button>Any Week</button> |
            <button>Add Guest</button>
            <div className="bg-primary w-8 h-8 flex items-center justify-center text-[white] rounded-full cursor-pointer">
              <BiSearch />
            </div>
          </div>
        ) : (
          <div className="extended-search flex gap-1 bg-[#F1F1F1]s rounded-full scale-up-center">
            {searchFields.map((field, key) => (
              <SearchField
                onClick={() => handleFieldClick(field.label)}
                className={
                  field.label === activeSearchField ? "search-active" : ""
                }
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AirbnbSignatureInput;

interface Props {
  className?: string;
  onClick?: () => void;
}
const SearchField = ({ className, onClick }: Props) => {
  return (
    <>
      <div
        className={`search-field rounded-full flex flex-col  ${className} cursor-pointer`}
        onClick={onClick}
      >
        <label htmlFor="" className="text-sm">
          Where
        </label>
        <input type="text" placeholder="Search Destination" />
      </div>
    </>
  );
};
