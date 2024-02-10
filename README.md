# ToDo List Progressive Web App (PWA)
This ToDo List web application is a Progressive Web App (PWA) designed to help users manage their tasks efficiently. The app allows users to add, view, and delete tasks, both online and offline, using IndexedDB for data storage and service workers for offline functionality.

# Features
- **Add Task**: Users can easily add tasks to the list by entering the task title and selecting a priority level.
- **View Tasks**: The app displays tasks in a list format, showing the task title and priority level.
- **Delete Task**: Users can remove tasks from the list, marking them as completed.
- **Offline Functionality**: The app functions seamlessly offline, allowing users to manage tasks even without an internet connection.
- **IndexedDB Storage**: Tasks are stored and managed using IndexedDB, ensuring data persistence and reliability.
- **Responsive UI**: The user interface is designed to be responsive and intuitive, providing a smooth experience across different devices and screen sizes.

# Instructions for running the application
- Clone the repository to your local machine.
- Install dependencies using npm install.
- By default, service workers are not installed in the development environment (when using npm run start).
- To test service worker functionalities:
    - Build the app using npm run build.
    - Serve the built app, for example, using the serve package (npm install -g serve then serve -s build).
