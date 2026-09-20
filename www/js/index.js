document.addEventListener('DOMContentLoaded', () => {
    const viewName = document.getElementById('view-name');
    const viewCourse = document.getElementById('view-course');
    const viewYear = document.getElementById('view-year');
    const viewAbout = document.getElementById('view-about');
    const viewSkills = document.getElementById('view-skills');

    const editContainer = document.getElementById('profile-edit-container');
    const displayContainer = document.getElementById('profile-display');
    const editForm = document.getElementById('edit-profile-form');
    const errorMessage = document.getElementById('error-message');

    const inputName = document.getElementById('input-name');
    const inputCourse = document.getElementById('input-course');
    const inputYear = document.getElementById('input-year');
    const inputAbout = document.getElementById('input-about');
    const inputSkills = document.getElementById('input-skills');

    const btnEdit = document.getElementById('btn-edit');
    const btnCancel = document.getElementById('btn-cancel');

    const defaultProfile = {
        name: "Jezriel Raphael Sia",
        course: "BS Information Technology",
        year: "3rd Year",
        about: "Information Technology student specializing in mobile app development.",
        skills: "HTML, CSS, JavaScript, Cordova, Git"
    };

    function loadProfile() {
        const savedProfile = JSON.parse(localStorage.getItem('studentProfile')) || defaultProfile;
        
        viewName.textContent = savedProfile.name;
        viewCourse.textContent = savedProfile.course;
        viewYear.textContent = savedProfile.year;
        viewAbout.textContent = savedProfile.about;
        viewSkills.textContent = savedProfile.skills;
    }

    btnEdit.addEventListener('click', () => {
        const savedProfile = JSON.parse(localStorage.getItem('studentProfile')) || defaultProfile;

        inputName.value = savedProfile.name;
        inputCourse.value = savedProfile.course;
        inputYear.value = savedProfile.year;
        inputAbout.value = savedProfile.about;
        inputSkills.value = savedProfile.skills;

        errorMessage.style.display = 'none';
        displayContainer.style.display = 'none';
        editContainer.style.display = 'block';
    });

    btnCancel.addEventListener('click', () => {
        editContainer.style.display = 'none';
        displayContainer.style.display = 'block';
    });

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = inputName.value.trim();
        const course = inputCourse.value.trim();
        const year = inputYear.value.trim();
        const about = inputAbout.value.trim();
        const skills = inputSkills.value.trim();

        if (!name || !course || !year || !about || !skills) {
            errorMessage.textContent = "Please complete all required fields.";
            errorMessage.style.display = 'block';
            return;
        }

        const updatedProfile = { name, course, year, about, skills };

        localStorage.setItem('studentProfile', JSON.stringify(updatedProfile));
        loadProfile();

        editContainer.style.display = 'none';
        displayContainer.style.display = 'block';
    });

    loadProfile();
});