## To-Do List App

A clean, responsive, and interactive To-Do List web application built using HTML, CSS, Bootstrap 5, FontAwesome Icons, and JavaScript.
This app allows users to add, complete, and delete tasks with smooth UI interactions, plus localStorage support to save tasks even after page refresh.

## Features

Add new tasks with a single click or by pressing Enter

Mark tasks as completed (strike-through + tick icon)

Remove tasks using a trash icon

Shows inline error when input is empty

Fully responsive UI using Bootstrap

LocalStorage persistence (tasks remain saved after reload)

Clean, smooth UX with FontAwesome icons

Supports dynamic task creation using JavaScript DOM methods

Automatically restores tasks and reattaches events on reload

## Tech Stack
Technology	Purpose
HTML5	Structure and layout
CSS3 / Bootstrap 5	Design, responsiveness, spacing
JavaScript (ES6)	DOM manipulation & app logic
LocalStorage API	Save tasks permanently
FontAwesome	Icons for UI elements
Project Structure
ToDo-App/
│
├── index.html        # Main HTML structure
├── style.css         # Custom UI styling & theme
├── script.js         # App logic, DOM manipulation, localStorage
└── README.md         # Documentation

## How It Works

Type your task into the input field

Click Add or press Enter

Each task appears with:

a circle icon (mark as complete)

the task text

a trash icon (delete task)

Click the task to mark it completed

Click the trash icon to delete

All tasks automatically save to localStorage

When the page reloads, tasks reappear with correct state

## Example Interactions
✔ Adding Tasks

→ User types: “Complete assignment”
→ Task appears instantly

✔ Completing Tasks

→ Click task → Text turns grey + line-through
→ Icon changes from ○ to ✓

✔ Deleting Tasks

→ Click trash icon → Task disappears
→ List updates in localStorage

## Theme Colors
Element	Color	Hex Code
Background Gradient	Deep Violet Mix	linear-gradient(135deg, #0a0f3d, #5323a6, #8a1f7a)
Card Background	White	#FFFFFF
Input Background	Light Gray	#dadada
Task Text	Slate Gray	#708090
Trash Icon	Dark Gray	#343A40
Error Text	Red	#FF0000
LocalStorage Behavior

## Tasks are saved automatically when:

a task is added

a task is marked complete

a task is deleted

## On page load:

Saved tasks are restored automatically

Completed / pending states are preserved

Event listeners are reattached to each task

Core JavaScript Concepts Used

DOM Selection (getElementById, querySelectorAll)

Dynamic element creation (createElement)

Element insertion & removal (appendChild, remove)

Event Listeners

Event Delegation

LocalStorage (setItem, getItem)

Input validation

Class toggling (classList.add/remove/toggle)

Future Enhancements

Add task editing

Add filters: All / Completed / Pending

Add animation for task add/remove

Add Dark Mode Toggle

Add categories or priority tags

Sync tasks using a backend API (Node.js / Firebase)

## Live Demo

<a href="https://amulyaa2564.github.io/ToDoList/"></a>

## Author

**Amulya Gathala**
📧 Email: gathalaamulya25@gmail.com
🔗 GitHub: https://github.com/Amulyaa2564<br>
🔗 LinkedIn: www.linkedin.com/in/amulya-gathala