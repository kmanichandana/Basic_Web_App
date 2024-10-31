// Get references for the "Create New Task" link
const createTaskLink = document.getElementById('createTaskLink');
const taskFormSection = document.getElementById('taskFormSection');
const taskForm = document.getElementById('taskForm');
const notification = document.getElementById('notification');

// Get references for the "All Tasks" section
const viewTasksLink = document.getElementById('viewTasksLink'); // Link to view all tasks
const tasksContainer = document.getElementById('tasksContainer'); // Section to display tasks
const taskList = document.getElementById('taskList'); // Container for holding tasks

// Array to hold tasks and current task index for editing
let tasks = [
    {
        title: "Buy groceries",
        fromDate: "2024-10-30",
        toDate: "2024-10-30",
        description: "Milk, Bread, Eggs, Fruits"
    },
    {
        title: "Finish project report",
        fromDate: "2024-10-30",
        toDate: "2024-11-02",
        description: "Complete the final touches and submit"
    },
    {
        title: "Doctor's appointment",
        fromDate: "2024-10-31",
        toDate: "2024-10-31",
        description: "Check-up at 10 AM."
    },
    {
        title: "Attend workshop",
        fromDate: "2024-11-01",
        toDate: "2024-11-01",
        description: "Attend the JavaScript workshop at 3 PM."
    },
    {
        title: "Call Mom",
        fromDate: "2024-10-30",
        toDate: "2024-10-30",
        description: "Catch up with Mom over the phone."
    }
];
document.addEventListener("DOMContentLoaded", () => {
    displayTodaysTasks(); // Display today's tasks on initial load
    showSection(todayTasks);
    setActiveLink(todayLink);
});

//Function to display sections//
function showSection(section) {
    // Hide all content sections
    [taskFormSection, tasksContainer, monthDisplay, todayTasks].forEach(sec => {
        sec.style.display = 'none';
    });

    // Show the selected section
    section.style.display = 'block';
}

// Function to set the active link
function setActiveLink(activeLink) {
    // Remove 'active' class from all links
    [createTaskLink, viewTasksLink, toggleCalendarLink, todayLink].forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    activeLink.classList.add('active');
}

// ---------------------------------------------
// Toggle Task Form Visibility
// ---------------------------------------------
createTaskLink.addEventListener('click', (event) => {
    event.preventDefault();
    showSection(taskFormSection);
    setActiveLink(createTaskLink);
});

// ---------------------------------------------
// Date Input Functionality
// ---------------------------------------------
const fromDateInput = document.getElementById('fromDate');
const toDateInput = document.getElementById('toDate');
// Open the date picker for date inputs
fromDateInput.addEventListener('click', function() {
    this.showPicker();
});

toDateInput.addEventListener('click', function() {
    this.showPicker();
});

// Handle date changes and validations
fromDateInput.addEventListener('change', function() {
    const fromDate = new Date(fromDateInput.value);
    toDateInput.setAttribute('min', fromDate.toISOString().split('T')[0]);

    // Reset toDate if it's earlier than fromDate
    if (toDateInput.value && new Date(toDateInput.value) < fromDate) {
        toDateInput.value = fromDateInput.value; // Set to the same date as fromDate
    }
});

// ---------------------------------------------
// Handle Form Submission
// ---------------------------------------------
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user inputs
    const title = document.getElementById('taskTitle').value;
    const fromDate = fromDateInput.value;
    const toDate = toDateInput.value;
    const description = document.getElementById('taskDescription').value;

    // Create and add new task object
    const newTask = { title, fromDate, toDate, description };
    tasks.push(newTask);
    // Clear input fields and show notification
    taskForm.reset();
    notification.style.display = 'block'; // Show notification
    setTimeout(() => {
        notification.style.display = 'none'; // Hide notification after 1 second
    }, 1000);
});
    // Display new task immediately if viewing tasks
    if (tasksContainer.style.display === 'block') {
        displayTask(newTask);
    }


    // Call refreshTaskList when viewing all tasks
    viewTasksLink.addEventListener('click', (event) => {
        event.preventDefault();
        showSection(tasksContainer);
        setActiveLink(viewTasksLink);
        taskList.innerHTML = '';
        tasks.forEach(task => displayTask(task));
    });


// ---------------------------------------------
// Function to Display a Single Task
// ---------------------------------------------
function displayTask(task) {
    const taskItem = document.createElement('section');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <p>From: <strong>${task.fromDate}</strong> To: <strong>${task.toDate}</strong></p>
        <strong>${task.title}</strong>
    `;

    // Add click event to show task details
    taskItem.addEventListener('click', () => {
        showTaskDetails(task, tasks.indexOf(task));
    });

    // Add the new task to the task list
    taskList.appendChild(taskItem);
}

// ---------------------------------------------
// View All Tasks Section
// ---------------------------------------------
viewTasksLink.addEventListener('click', (event) => {
    event.preventDefault();
    showSection(tasksContainer);
    setActiveLink(viewTasksLink);

    // Clear existing tasks in the display area
    taskList.innerHTML = ''; // Clear previous tasks

    // Loop through tasks and display each one
    tasks.forEach(task => {
        displayTask(task);
    });
});

// ---------------------------------------------
// Task Details Modal
// ---------------------------------------------
// Get reference to the modal and control buttons
const taskModal = document.getElementById('taskModal');
const closeModal = document.getElementById('closeModal');
const editTaskButton = document.getElementById('editTask');
const deleteTaskButton = document.getElementById('deleteTask');
const saveTaskButton = document.getElementById('saveTask');
const cancelEditButton = document.getElementById('cancelEdit');

let currentTaskIndex = null;

// Function to display all tasks
function displayAllTasks() {
    taskList.innerHTML = ''; // Clear existing tasks
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('section');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <p>From: <strong>${task.fromDate}</strong> To: <strong>${task.toDate}</strong></p>
            <strong>${task.title}</strong>
        `;
        // Add click event to show task details
        taskItem.addEventListener('click', () => {
            showTaskDetails(task, index);
        });
        taskList.appendChild(taskItem);
    });
}

// Show task details in the modal
function showTaskDetails(task, index) {
    currentTaskIndex = index;
    document.getElementById('modalTitle').textContent = task.title;
    document.getElementById('modalDescription').textContent = task.description;
    document.getElementById('modalFromDate').textContent = task.fromDate;
    document.getElementById('modalToDate').textContent = task.toDate;

    // Show appropriate buttons
    editTaskButton.style.display = 'inline';
    deleteTaskButton.style.display = 'inline';
    saveTaskButton.style.display = 'none';
    cancelEditButton.style.display = 'none';

    taskModal.style.display = 'block'; // Show the modal
}

closeModal.addEventListener('click', function() {
    taskModal.style.display = 'none'; // Close the modal
});

// Edit Task Functionality
editTaskButton.addEventListener('click', function() {
    const task = tasks[currentTaskIndex];

    // Render inputs for editing
    document.getElementById('modalTitle').innerHTML = `<input type="text" id="editTitle" value="${task.title}">`;
    document.getElementById('modalDescription').innerHTML = `<textarea id="editDescription">${task.description}</textarea>`;
    document.getElementById('modalFromDate').innerHTML = `<input type="date" id="editFromDate" value="${task.fromDate}">`;
    document.getElementById('modalToDate').innerHTML = `<input type="date" id="editToDate" value="${task.toDate}">`;

    editTaskButton.style.display = 'none';
    deleteTaskButton.style.display = 'none';
    saveTaskButton.style.display = 'inline';
    cancelEditButton.style.display = 'inline';
});

// Save Task Functionality
saveTaskButton.addEventListener('click', function() {
    const title = document.getElementById('editTitle').value;
    const description = document.getElementById('editDescription').value;
    const fromDate = document.getElementById('editFromDate').value;
    const toDate = document.getElementById('editToDate').value;

    // Validate date range
    if (new Date(fromDate) > new Date(toDate)) {
        alert("The 'From' date must be earlier than the 'To' date.");
        return;
    }

    // Update the task in the array
    tasks[currentTaskIndex] = { title, description, fromDate, toDate };
    displayAllTasks(); // Refresh the task list display
    taskModal.style.display = 'none'; // Close the modal
});

// Cancel Edit Functionality
cancelEditButton.addEventListener('click', function() {
    showTaskDetails(tasks[currentTaskIndex], currentTaskIndex); // Revert back to initial details
});

// Delete Task Functionality
deleteTaskButton.addEventListener('click', function() {
    tasks.splice(currentTaskIndex, 1); // Remove the task from the array
    displayAllTasks(); // Refresh the task list
    taskModal.style.display = 'none'; // Close the modal
});

// ---------------------------------------------
// Search Functionality
// ---------------------------------------------
const taskSearchInput = document.getElementById('taskSearch');

// Event listener for search input
taskSearchInput.addEventListener('input', function() {
    const searchTerm = taskSearchInput.value.toLowerCase(); // Get the search term
    filterTasks(searchTerm); // Call the filter function
});

// Function to filter tasks based on the search term
function filterTasks(searchTerm) {
    taskList.innerHTML = ''; // Clear the existing task list
    const filteredTasks = tasks.filter(task => {
        return task.title.toLowerCase().includes(searchTerm) || 
               task.description.toLowerCase().includes(searchTerm);
    });
    filteredTasks.forEach(task => {
        displayTask(task); // Display filtered tasks
    });
}

// ---------------------------------------------
// Calendar Functionality
// ---------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const monthDisplay = document.getElementById("monthDisplay");
    const calendar = document.getElementById("calendar");
    const currentMonthYear = document.getElementById("currentMonthYear");
    const prevMonthButton = document.getElementById("prevMonth");
    const nextMonthButton = document.getElementById("nextMonth");
    const toggleCalendarLink = document.getElementById("toggleCalendarLink");

    let currentMonth = new Date().getMonth(); // Current month
    let currentYear = new Date().getFullYear(); // Current year

// Function to display tasks for a specific day in a modal
function showTasksForDay(day, month, year, tasksForDate) {
    const taskDate = document.getElementById("taskDate");
    const taskList = document.getElementById("taskList");
    const taskListContainer = document.getElementById("taskListContainer");

    // Set the display date
    taskDate.textContent = `${new Date(year, month, day).toLocaleDateString()}`;

    // Clear previous tasks
    taskList.innerHTML = "";

    // Check if there are tasks for the selected date
    if (tasksForDate.length > 0) {
        // Populate tasks for the selected date
        tasksForDate.forEach(task => {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <p>From: <strong>${task.fromDate}</strong> To: <strong>${task.toDate}</strong></p>
                <strong>${task.title}</strong>
            `;
            taskList.appendChild(taskItem);
        });
    } else {
        // Show a message if no tasks are found for that date
        const noTasksItem = document.createElement("li");
        noTasksItem.textContent = "No tasks for this day.";
        taskList.appendChild(noTasksItem);
    }

    // Display the task list container as a modal
    taskListContainer.style.display = "block";

    // Close modal when 'Close' button is clicked
    document.getElementById("closeTaskList").addEventListener("click", () => {
        taskListContainer.style.display = "none";
    });
}

    
    // Function to create and display the calendar
function createCalendar(month, year) {
    calendar.innerHTML = ""; // Clear existing calendar
    currentMonthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

    const firstDay = new Date(year, month, 1);
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Create calendar header
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    daysOfWeek.forEach(day => {
        const header = document.createElement("div");
        header.className = "calendar-header";
        header.textContent = day;
        calendar.appendChild(header);
    });

    // Fill in the blank spaces before the first day
    for (let i = 0; i < firstDay.getDay(); i++) {
        const blankDay = document.createElement("div");
        blankDay.className = "calendar-day";
        calendar.appendChild(blankDay);
    }

    // Create day elements and check for tasks
    for (let day = 1; day <= totalDays; day++) {
        const dayElement = document.createElement("div");
        dayElement.className = "calendar-day";
        dayElement.innerHTML = `<div class="calendar-date">${day}</div>`;

        // Check if there are tasks for this day
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const tasksForDate = tasks.filter(task => task.fromDate <= dateString && task.toDate >= dateString);

        // If there are tasks, add dots
        if (tasksForDate.length > 0) {
            const dotCount = document.createElement("span");
            dotCount.className = "task-dot";
            dotCount.style.width = "10px"; // Adjust as needed
            dotCount.style.height = "10px"; // Adjust as needed
            dotCount.style.borderRadius = "50%";
            dotCount.style.backgroundColor = "red"; // Adjust color as needed
            dotCount.style.display = "inline-block"; // Make it inline
            dotCount.title = `${tasksForDate.length} task(s)`; // Tooltip to show number of tasks
            dayElement.appendChild(dotCount);

            // Add click event to show tasks for that day
            dayElement.addEventListener("click", () => {
                showTasksForDay(day, month, year, tasksForDate);
                console.log("Task List Inner HTML:", taskList.innerHTML);
            });
        }

        calendar.appendChild(dayElement);
    }
}


    // Generate the calendar for the current month
    createCalendar(currentMonth, currentYear);

    // Navigation button functionality
    prevMonthButton.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        createCalendar(currentMonth, currentYear);
    });

    nextMonthButton.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        createCalendar(currentMonth, currentYear);
    });

    // Toggle monthDisplay visibility
    toggleCalendarLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior
    
        // Check if the calendar is already visible
        if (monthDisplay.style.display === "block") {
            // If visible, hide it
            monthDisplay.style.display = "none";
        } else {
            // If not visible, show it and hide other sections
            createCalendar(currentMonth, currentYear);
            showSection(monthDisplay);
            setActiveLink(toggleCalendarLink);

        }
    });
});
// ----------------------------
// Today's Tasks Section
// ----------------------------
const todayLink = document.getElementById('todayLink');
todayLink.addEventListener('click', (event) => {
    event.preventDefault();
    displayTodaysTasks(); // Display today's tasks
    showSection(todayTasks);
    setActiveLink(todayLink);

});
function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
}

function displayTodaysTasks() {
    const today = getTodayDate();
    const todayTaskList = document.getElementById('todayTaskList');
    
    // Clear previous tasks
    todayTaskList.innerHTML = '';

    // Filter tasks for today
    const todaysTasks = tasks.filter(task => {
        return task.fromDate <= today && task.toDate >= today; // Check if task falls on today's date
    });

    // Display today's tasks
    if (todaysTasks.length === 0) {
        todayTaskList.innerHTML = '<p>No tasks for today.</p>';
    } else {
        todaysTasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <strong>${task.title}</strong><br>
                From: ${task.fromDate} To: ${task.toDate}<br>
                Description: ${task.description}
            `;
            todayTaskList.appendChild(taskItem);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('headerTitle');
    const text = header.textContent;
    header.textContent = ''; // Clear the text initially

    let index = 0;

    function type() {
        if (index < text.length) {
            header.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150); // Adjust speed here (in milliseconds)
        } else {
            // Once finished, apply the enlarge effect
            header.classList.add('enlarge');

            // Wait for the animation to complete, then reset
            setTimeout(() => {
                header.classList.remove('enlarge');
                header.textContent = ''; // Clear the text for the next cycle
                index = 0; // Reset index
                type(); // Start typing again
            }, 1000); // Time to wait before resetting (1 second)
        }
    }

    type(); // Start typing effect
});
