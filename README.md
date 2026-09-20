# ITCC41-A Activity 5

## Project Description
The Student Profile Application is a hybrid mobile app built with Apache Cordova, styled using a custom Scuderia Ferrari livery theme. It features dynamic content rendering, form validation, and local data persistence.

## Application Pages
* **Profile:** Displays student information with an interactive Edit Profile interface.
* **About:** Contains detailed background information and educational context.
* **Skills:** Highlights technical skills and technical proficiencies.
* **Projects:** Showcase of academic and personal development projects.
* **Contact:** Contains social links and an interactive contact message form.

## Profile Editing & JavaScript Functionality
* **Form Handling:** Clicking Edit Profile converts the display card into an editable form pre-filled with current student details.
* **Validation:** Implements checks ensuring Full Name, Course, Year Level, About Me, and Skills fields are not submitted empty.
* **Dynamic Updates:** Updating and saving immediately alters the displayed profile elements in the DOM without requiring a full page reload.
* **Save & Cancel:** Save validates and stores input data; Cancel discards all uncommitted form edits and restores the profile view.

## Local Data Storage
The application utilizes `localStorage` to retain profile data across sessions. On initialization, JavaScript checks for existing JSON data key `studentProfile`. If present, it populates the interface; if absent, default profile details are loaded.

## Responsive Design
The app is styled using CSS Flexbox and media queries, maintaining layout integrity across Mobile, Tablet, and Desktop screen sizes.

