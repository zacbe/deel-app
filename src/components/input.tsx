import React, { createContext } from "react";

interface ParamInputProps {
  id: number;
  name: string;
}

const ParamInput: React.FC<ParamInputProps> = ({ id, name }) => {
  return (
    <div
      key={`${name}-${id}`}
      className="flex items-center justify-between mb-4 w-1/2"
    >
      <label className="block text-gray-500 font-bold mb-2" htmlFor={name}>
        {name}
      </label>
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type="text"
        placeholder="set value"
        required
      />
    </div>
  );
};

export default ParamInput;
