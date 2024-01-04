import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Form() {

  const [selectedOption, setSelectedOption] = useState("instagram");
  const [title, setTitle] = useState("");
  const navigate = useNavigate()

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/generated?adtype=${selectedOption}&title=${title}`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4 mt-8 flex-col">
        <label htmlFor="title" className="font-bold">
          Title:
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title"
          className="p-2  w-[480px] border-2 rounded-md text-xl"
          required
        />
      </div>
      <div className=" flex gap-4 text-xl mt-4">
        <select
          className="select select-bordered border-2 border-[%3730a3] w-full max-w-xs"
          onChange={handleChange}
          value={selectedOption}
          required
        >
          <option value="instagram">Instagram Post (500x500 px)</option>
          <option value="twitter">Twitter Header (1500x500 px)</option>
          <option value="story">Story (1080x1920 px)</option>
        </select>

        <button
          className="bg-[#3730a3] p-2 text-lg text-white rounded-md"
          type="submit"
        >
          Generate
        </button>
      </div>
    </form>
  );
}
