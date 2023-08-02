import React, { useState, useEffect } from "react";

const MoodPopup = ({ show, onClose, onSelect }) => {
  const moodsWithEmoji = {
    Happy: "😄",
    Sad: "😢",
    Excited: "🎉",
    Anxious: "😟",
    Angry: "😠",
    Peaceful: "😌",
    Surprised: "😯",
    Loved: "❤️",
    Bored: "😒",
    Confident: "😎",
    Hopeful: "🤞",
    Proud: "😊",
    Grateful: "🙏",
    Relieved: "😌",
  };

  const moods = Object.keys(moodsWithEmoji);
  const [selectedMood, setSelectedMood] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredMoods, setFilteredMoods] = useState(moods);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; // 禁止背景滾動
    } else {
      document.body.style.overflow = "auto"; // 恢復背景滾動
    }
  }, [show]);

  useEffect(() => {
    // Filter the moods based on the search keyword
    const filteredMoods = moods.filter((mood) =>
      mood.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredMoods(filteredMoods);
  }, [searchKeyword]);

  const handleMoodSelect = (mood) => {
    if (selectedMood === mood) {
      setSelectedMood("");
      onSelect("");
    } else {
      setSelectedMood(mood);
      onSelect(mood); 
    }
  };

  return (
    <>
      {show && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 "
          style={{ zIndex: 9999 }}
        >
          <div className="bg-white w-[40%] sm:w-[80%] first-letter:rounded-lg shadow-md p-4 relative">
            <button
              className="bg-gray-400 text-white py-1 px-2 rounded absolute top-2 right-2"
              onClick={onClose}
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M15.293 4.293a1 1 0 011.414 1.414L6.414 15H9a1 1 0 110 2H5a1 1 0 01-1-1v-4a1 1 0 112 0v2.586l9.293-9.293zM4.293 4.293a1 1 0 111.414-1.414L15 13.586V11a1 1 0 112 0v4a1 1 0 01-1 1h-4a1 1 0 110-2h2.586l-9.293-9.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="py-4 text-center border-b-2">
              <p className="mb-2 text-xl font-bold">How are you feeling?</p>
              <input
                type="text"
                placeholder="Search mood..."
                className="px-4 py-2 rounded-lg w-full"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {filteredMoods.map((mood) => (
                <button
                  key={mood}
                  className={`p-4 w-full ${
                    selectedMood === mood ? "bg-gray-300" : ""
                  }
                  text-left rounded-lg
                  hover:bg-gray-100 cursor-pointer`}
                  onClick={() => handleMoodSelect(mood)}
                >
                  <span className="bg-gray-200 rounded-full p-3">
                    {moodsWithEmoji[mood]}
                  </span>
                  <span className="ml-4">{mood}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoodPopup;
