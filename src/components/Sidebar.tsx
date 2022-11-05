import { useState } from "react";
import { useApp } from "../contexts/AppContext";

const Sidebar = () => {
  const [newChallengeTitle, setNewChallengeTitle] = useState("");
  const {
    addNewChallenge,
    challenges,
    activeChallenge,
    changeActiveChallenge,
  } = useApp();

  const addNewChallengeHandler = () => {
    if (!(newChallengeTitle.length < 3)) {
      addNewChallenge(newChallengeTitle);
      setNewChallengeTitle("");
    } else {
      alert("title must have length more than 2");
    }
  };

  return (
    <div className="w-[300px] h-screen border-r-2 border-black">
      <h1 className="text-center py-5 font-semibold text-2xl">
        30dayschallenge
      </h1>
      <div>
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            onClick={() => changeActiveChallenge(challenge.id)}
            className={`p-3 mb-3 transition text-center cursor-pointer ${
              activeChallenge?.id === challenge.id
                ? "bg-black text-white"
                : "hover:bg-violet-300 hover:text-white"
            }`}
          >
            {challenge.title}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center gap-3">
        <input
          value={newChallengeTitle}
          onChange={(e) => setNewChallengeTitle(e.target.value)}
          className="border-2 border-black w-3/4 px-2 py-1 text-base"
          placeholder="challenge title"
        />
        <button
          onClick={addNewChallengeHandler}
          className="px-4 py-1 border-2 border-black rounded-full transition hover:border-violet-600 hover:text-violet-600"
        >
          Add Challenge
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
