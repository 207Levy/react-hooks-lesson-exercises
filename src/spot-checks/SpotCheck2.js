import React from "react";
import { useState } from "react";

export default function SpotCheck2() {
  // your code here
  const [isLoading, setIsLoading] = useState(true);
  const [lesson, setLesson] = useState({
    name: "React Hooks",
    completed: false,
    started: false,
  });

  const updateLesson = (key) => {
    setLesson({ ...lesson, [key]: true });
  };

  const renderLesson = () => {
    return (
      <div>
        <p>{lesson.name}</p>
        <p>
          {lesson.completed
            ? "Lesson complted"
            : lesson.started
            ? "In progress"
            : "Not started"}
        </p>
      </div>
    );
  };

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
        {isLoading ? <div>Page is loading...</div> : renderLesson()}
        <button onClick={()=>updateLesson("started")}>Begin lesson</button>
        <button onClick={()=>updateLesson("completed")}>Complete lesson</button>
      </div>
    </div>
  );
}
