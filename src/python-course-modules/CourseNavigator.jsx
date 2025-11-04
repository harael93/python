import React, { useState, useEffect } from "react";
import moduleSixIntro from './module-6-flask-react/README.md?raw';
import lessonSixOne from './module-6-flask-react/lesson-01-architecture.md?raw';
import lessonSixTwo from './module-6-flask-react/lesson-02-setup-projects.md?raw';
import lessonSixThree from './module-6-flask-react/lesson-03-connecting-react.md?raw';
import lessonSixFour from './module-6-flask-react/lesson-04-async-react.md?raw';
import lessonSixFive from './module-6-flask-react/lesson-05-fullstack-task-manager.md?raw';
import moduleSixProject from './module-6-flask-react/module-6-project.md?raw';
import moduleFiveIntro from './module-5-flask-api/README.md?raw';
import lessonFiveOne from './module-5-flask-api/lesson-01-intro-flask.md?raw';
import lessonFiveTwo from './module-5-flask-api/lesson-02-setup-project.md?raw';
import lessonFiveThree from './module-5-flask-api/lesson-03-routing.md?raw';
import lessonFiveFour from './module-5-flask-api/lesson-04-json-data.md?raw';
import lessonFiveFive from './module-5-flask-api/lesson-05-restful-endpoints.md?raw';
import moduleFiveProject from './module-5-flask-api/module-5-project.md?raw';
import moduleFourIntro from './module-4-modules-data/README.md?raw';
import lessonFourOne from './module-4-modules-data/lesson-01-intro-modules.md?raw';
import lessonFourTwo from './module-4-modules-data/lesson-02-importing-using.md?raw';
import lessonFourThree from './module-4-modules-data/lesson-03-creating-own.md?raw';
import lessonFourFour from './module-4-modules-data/lesson-04-built-in-data.md?raw';
import lessonFourFive from './module-4-modules-data/lesson-05-external-libraries.md?raw';
import moduleFourProject from './module-4-modules-data/module-4-project.md?raw';
import MarkdownRenderer from "./MarkdownRenderer.jsx";
import lessonOne from './module-1-basics/lesson-01-what-is-python.md?raw';
import lessonTwo from './module-1-basics/lesson-02-setup-hello-world.md?raw';
import lessonThree from './module-1-basics/lesson-03-variables-data-types.md?raw';
import lessonFour from './module-1-basics/lesson-04-basic-math.md?raw';
import lessonFive from './module-1-basics/lesson-05-user-input.md?raw';
import lessonSix from './module-1-basics/lesson-06-conditionals.md?raw';
import lessonSeven from './module-1-basics/lesson-07-loops.md?raw';
import lessonEight from './module-1-basics/lesson-08-lists.md?raw';
import lessonNine from './module-1-basics/lesson-09-functions.md?raw';
import lessonTen from './module-1-basics/lesson-10-dictionaries.md?raw';
import lessonEleven from './module-1-basics/lesson-11-practice-exercises.md?raw';
import moduleProject from './module-1-basics/module-1-project.md?raw';
import lessonTwoOne from './module-2-data-structures/lesson-01-tuples.md?raw';
import lessonTwoTwo from './module-2-data-structures/lesson-02-sets.md?raw';
import lessonTwoThree from './module-2-data-structures/lesson-03-dictionaries-revisited.md?raw';
import lessonTwoFour from './module-2-data-structures/lesson-04-functions-deep-dive.md?raw';
import lessonTwoFive from './module-2-data-structures/lesson-05-file-handling.md?raw';
 import moduleTwoProject from './module-2-data-structures/module-2-project.md?raw';

 // Module 3 OOP imports
 import moduleThreeIntro from './module-3-oop/README.md?raw';
 import lessonThreeOne from './module-3-oop/lesson-01-intro-to-oop.md?raw';
 import lessonThreeTwo from './module-3-oop/lesson-02-classes-and-objects.md?raw';
 import lessonThreeThree from './module-3-oop/lesson-03-attributes-and-methods.md?raw';
 import lessonThreeFour from './module-3-oop/lesson-04-encapsulation.md?raw';
 import lessonThreeFive from './module-3-oop/lesson-05-inheritance.md?raw';
 import lessonThreeSix from './module-3-oop/lesson-06-polymorphism.md?raw';
 import lessonThreeSeven from './module-3-oop/lesson-07-magic-methods.md?raw';
 import moduleThreeProject from './module-3-oop/module-3-project.md?raw';


import {Styles} from "./nav.js";

// Course data structure with markdown content
const courseData = [
  {
    name: "Module 1: Python Basics",
    lessons: [
      { title: "What is Python?", completed: false, content: <MarkdownRenderer content={lessonOne} /> },
      { title: "Setup & Hello World", completed: false, content: <MarkdownRenderer content={lessonTwo} /> },
      { title: "Variables & Data Types", completed: false, content: <MarkdownRenderer content={lessonThree} /> },
      { title: "Basic Math", completed: false, content: <MarkdownRenderer content={lessonFour} /> },
      { title: "User Input", completed: false, content: <MarkdownRenderer content={lessonFive} /> },
      { title: "Conditional Statements", completed: false, content: <MarkdownRenderer content={lessonSix} /> },
      { title: "Loops", completed: false, content: <MarkdownRenderer content={lessonSeven} /> },
      { title: "Lists", completed: false, content: <MarkdownRenderer content={lessonEight} /> },
      { title: "Functions", completed: false, content: <MarkdownRenderer content={lessonNine} /> },
      { title: "Dictionaries", completed: false, content: <MarkdownRenderer content={lessonTen} /> },
      { title: "Practice Exercises", completed: false, content: <MarkdownRenderer content={lessonEleven} /> },
      { title: "Module 1 Project", completed: false, content: <MarkdownRenderer content={moduleProject} />, isProject: true },
    ],
  },
  {
    name: "Module 2: Data Structures",
    lessons: [
      { title: "Tuples", completed: false, content: <MarkdownRenderer content={lessonTwoOne} /> },
      { title: "Sets", completed: false, content: <MarkdownRenderer content={lessonTwoTwo} /> },
      { title: "Dictionaries (Revisited)", completed: false, content: <MarkdownRenderer content={lessonTwoThree} /> },
      { title: "Functions Deep Dive", completed: false, content: <MarkdownRenderer content={lessonTwoFour} /> },
      { title: "File Handling", completed: false, content: <MarkdownRenderer content={lessonTwoFive} /> },
      { title: "Module 2 Project", completed: false, content: <MarkdownRenderer content={moduleTwoProject} />, isProject: true },
    ],
  },
  
  
    {
      name: "Module 3: Object-Oriented Programming",
      lessons: [
        { title: "Module Overview", completed: false, content: <MarkdownRenderer content={moduleThreeIntro} /> },
        { title: "Introduction to OOP", completed: false, content: <MarkdownRenderer content={lessonThreeOne} /> },
        { title: "Classes and Objects", completed: false, content: <MarkdownRenderer content={lessonThreeTwo} /> },
        { title: "Attributes and Methods", completed: false, content: <MarkdownRenderer content={lessonThreeThree} /> },
        { title: "Encapsulation and Access Control", completed: false, content: <MarkdownRenderer content={lessonThreeFour} /> },
        { title: "Inheritance and Subclasses", completed: false, content: <MarkdownRenderer content={lessonThreeFive} /> },
        { title: "Polymorphism and Method Overriding", completed: false, content: <MarkdownRenderer content={lessonThreeSix} /> },
        { title: "Special Methods and Magic Methods", completed: false, content: <MarkdownRenderer content={lessonThreeSeven} /> },
        { title: "Module 3 Project", completed: false, content: <MarkdownRenderer content={moduleThreeProject} />, isProject: true },
      ],
    },
  // Add more modules as needed


  {
    name: "Module 4: Working with Modules and Data",
    lessons: [
      { title: "Module Overview", completed: false, content: <MarkdownRenderer content={moduleFourIntro} /> },
      { title: "Introduction to Modules and Packages", completed: false, content: <MarkdownRenderer content={lessonFourOne} /> },
      { title: "Importing and Using Modules", completed: false, content: <MarkdownRenderer content={lessonFourTwo} /> },
      { title: "Creating Your Own Modules", completed: false, content: <MarkdownRenderer content={lessonFourThree} /> },
      { title: "Built-in Data Modules", completed: false, content: <MarkdownRenderer content={lessonFourFour} /> },
      { title: "Working with External Libraries", completed: false, content: <MarkdownRenderer content={lessonFourFive} /> },
      { title: "Module 4 Project", completed: false, content: <MarkdownRenderer content={moduleFourProject} />, isProject: true },
    ],
  },

    {
    name: "Module 5: Building APIs with Flask",
    lessons: [
      { title: "Module Overview", completed: false, content: <MarkdownRenderer content={moduleFiveIntro} /> },
      { title: "Introduction to Flask and APIs", completed: false, content: <MarkdownRenderer content={lessonFiveOne} /> },
      { title: "Setting Up a Flask Project", completed: false, content: <MarkdownRenderer content={lessonFiveTwo} /> },
      { title: "Routing and Request Handling", completed: false, content: <MarkdownRenderer content={lessonFiveThree} /> },
      { title: "Working with JSON and Data", completed: false, content: <MarkdownRenderer content={lessonFiveFour} /> },
      { title: "Building RESTful Endpoints", completed: false, content: <MarkdownRenderer content={lessonFiveFive} /> },
      { title: "Module 5 Project", completed: false, content: <MarkdownRenderer content={moduleFiveProject} />, isProject: true },
    ],
  },

    {
    name: "Module 6: Connecting Flask and React",
    lessons: [
      { title: "Module Overview", completed: false, content: <MarkdownRenderer content={moduleSixIntro} /> },
      { title: "Full-Stack Architecture Overview", completed: false, content: <MarkdownRenderer content={lessonSixOne} /> },
      { title: "Setting Up Flask and React Projects", completed: false, content: <MarkdownRenderer content={lessonSixTwo} /> },
      { title: "Connecting React to Flask APIs", completed: false, content: <MarkdownRenderer content={lessonSixThree} /> },
      { title: "Handling Asynchronous Requests in React", completed: false, content: <MarkdownRenderer content={lessonSixFour} /> },
      { title: "Building a Full-Stack App: Task Manager", completed: false, content: <MarkdownRenderer content={lessonSixFive} /> },
      { title: "Module 6 Project", completed: false, content: <MarkdownRenderer content={moduleSixProject} />, isProject: true },
    ],
  },
];

const CourseNavigator = ({ modules = courseData, user, initialProgress }) => {
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  // Helper to initialize completedLessons from progress percent
  function getCompletedLessonsFromProgress(progress) {
    // progress is percent (0-100)
    const totalLessons = modules.reduce((sum, mod) => sum + mod.lessons.length, 0);
    const completedCount = Math.round((progress / 100) * totalLessons);
    let left = completedCount;
    return modules.map((mod) =>
      mod.lessons.map(() => {
        if (left > 0) {
          left--;
          return true;
        }
        return false;
      })
    );
  }

  const [completedLessons, setCompletedLessons] = useState(() => {
    if (initialProgress != null) {
      return getCompletedLessonsFromProgress(Number(initialProgress));
    }
    return modules.map((mod) => mod.lessons.map((lesson) => lesson.completed));
  });
  const [uploads, setUploads] = useState({});
  // Post progress to backend whenever completedLessons changes and user is logged in
  useEffect(() => {
    if (!user || !user.fullName) return;
    const totalLessons = completedLessons.reduce((sum, mod) => sum + mod.length, 0);
    const completed = completedLessons.reduce((sum, mod) => sum + mod.filter(Boolean).length, 0);
    const progress = totalLessons === 0 ? 0 : Math.round((completed / totalLessons) * 100);
    fetch("https://dbworker.liquidsoliddesign.workers.dev/progress/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user.fullName, progress })
    });
  }, [completedLessons, user]);

  // Calculate overall course completion percentage
  const courseProgress = () => {
    const totalLessons = completedLessons.reduce((sum, mod) => sum + mod.length, 0);
    const completed = completedLessons.reduce((sum, mod) => sum + mod.filter(Boolean).length, 0);
    return totalLessons === 0 ? 0 : Math.round((completed / totalLessons) * 100);
  };

  const handleLessonClick = (lessonIdx) => {
    setActiveLesson(lessonIdx);
  };

  const handleModuleClick = (modIdx) => {
    setActiveModule(modIdx);
    setActiveLesson(0);
  };

  const toggleLessonComplete = (modIdx, lessonIdx) => {
    const updated = completedLessons.map((mod, i) =>
      i === modIdx
        ? mod.map((done, j) => (j === lessonIdx ? !done : done))
        : mod
    );
    setCompletedLessons(updated);
  };

  const handleUpload = (modIdx, lessonIdx, file) => {
    const key = `${modIdx}-${lessonIdx}`;
    setUploads((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), { name: file.name, date: new Date().toLocaleString() }],
    }));
  };

  const moduleProgress = (modIdx) => {
    const total = modules[modIdx].lessons.length;
    const done = completedLessons[modIdx].filter(Boolean).length;
    return Math.round((done / total) * 100);
  };

  const activeMod = modules[activeModule];
  const activeLess = activeMod.lessons[activeLesson];
  const uploadKey = `${activeModule}-${activeLesson}`;

  return (
    <div style={Styles.container}>
      {/* Sidebar Navigation with Course Complete Indicator at the top */}
      <aside style={Styles.sidebar}>
        {/* Compact Course Completion Bar */}
        <div style={{
          margin: '16px 0 24px 0',
          padding: '8px 12px',
          background: '#f3f4f6',
          borderRadius: 8,
          boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <span style={{ fontWeight: 600, fontSize: 15, marginBottom: 4, color: '#6366f1' }}>Course Completion</span>
          <div style={{
            width: '100%',
            height: 12,
            background: '#e5e7eb',
            borderRadius: 6,
            overflow: 'hidden',
            marginBottom: 2,
          }}>
            <div style={{
              height: '100%',
              width: `${courseProgress()}%`,
              background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
              transition: 'width 0.7s cubic-bezier(.4,0,.2,1)',
            }} />
          </div>
          <span style={{ fontSize: 13, color: '#374151' }}>{courseProgress()}%</span>
        </div>
        {/* Modules Navigation */}
        {modules.map((mod, modIdx) => (
          <div key={mod.name}>
            <div
              style={{
                ...Styles.moduleTitle,
                background: modIdx === activeModule ? "#e0e7ff" : "#f3f4f6",
              }}
              onClick={() => handleModuleClick(modIdx)}
            >
              {mod.name}
              <div style={Styles.progressBarWrap}>
                <div style={{ ...Styles.progressBar, width: `${moduleProgress(modIdx)}%` }} />
                <span style={Styles.progressText}>{moduleProgress(modIdx)}%</span>
              </div>
            </div>
            {/* Lessons */}
            {modIdx === activeModule && (
              <ul style={Styles.lessonList}>
                {mod.lessons.map((lesson, lessonIdx) => (
                  <li
                    key={lesson.title}
                    style={{
                      ...Styles.lessonItem,
                      background: lessonIdx === activeLesson ? "#dbeafe" : "#fff",
                    }}
                    onClick={() => handleLessonClick(lessonIdx)}
                  >
                    <span style={Styles.checkmark}>
                      {completedLessons[modIdx][lessonIdx] ? "✓" : "○"}
                    </span>
                    {lesson.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main style={Styles.main}>
        <h2>{activeLess.title}</h2>
        <div style={Styles.lessonStatusWrap}>
          <button
            style={Styles.completeBtn}
            onClick={() => toggleLessonComplete(activeModule, activeLesson)}
          >
            {completedLessons[activeModule][activeLesson] ? "Mark as Incomplete" : "Mark as Complete"}
          </button>
          <div style={Styles.moduleProgressBarWrap}>
            <div style={{ ...Styles.moduleProgressBar, width: `${moduleProgress(activeModule)}%` }} />
            <span style={Styles.moduleProgressText}>{moduleProgress(activeModule)}% Module Complete</span>
          </div>
        </div>
        {/* Project Upload Section */}
        {activeLess.isProject && (
          <div style={Styles.uploadSection}>
            <h3>Upload Your Project</h3>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files[0]) handleUpload(activeModule, activeLesson, e.target.files[0]);
              }}
              style={Styles.fileInput}
            />
            <ul style={Styles.uploadList}>
              {(uploads[uploadKey] || []).map((file, idx) => (
                <li key={idx} style={Styles.uploadItem}>
                  {file.name} <span style={Styles.uploadDate}>({file.date})</span>
                </li>
              ))}
            </ul>
          </div>
        )}
       

        <div style={Styles.lessonContent}>
            {activeLess.content || "Lesson content goes here..."}
        </div>
      </main>
    </div>
  );
};

// Simple CSS-in-JS styles


export default CourseNavigator;
