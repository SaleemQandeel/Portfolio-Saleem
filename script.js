// Portfolio Website JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initTypingAnimation();
    initScrollProgress();
    initSmoothScrolling();
    initThemeToggle();
    initScrollAnimations();
    initSkillBars();
    initResumeDownload();
    initActiveNavigation();
    initContactForm();
    initProjectModal();
    initContactEnhancements();
});

// Project data for modal display
const projectsData = {
    1: {
        title: "Hope in Hand Website",
        description: "A bilingual awareness website designed to educate users on first aid practices. It features interactive health cards, accessible design, responsive layout, and informative visuals to guide users through emergency response steps effectively.",
        tech: ["java Script", "Css", "Html"],
        features: [
            "Bilingual content in Arabic and English",
            "Interactive educational health cards",
            "Responsive design compatible with all devices",
            "Clean and accessible user interface",
            "Popup image viewer for detailed visuals",
            "Lightweight and fast performance",
            "Informative layout for first aid awareness",
            "Organized structure for easy navigation"
        ],

        images: [
            "photo/project-card-1.png",
            "photo/project-card-1-1.png"


        ],

    },
    2: {
        title: "Online Learning Platform",
        description: "A responsive web-based learning platform designed to support students and educators in Gaza. It features structured courses, video lessons, quizzes, and user progress tracking to enhance the e-learning experience.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "Course listing and enrollment system",
            "Video lectures and PDF attachments",
            "Interactive quizzes and assessments",
            "Student progress tracking and completion status",
            "Responsive design for mobile and desktop",
            "Teacher dashboard with course management",
            "Login & signup system for students and instructors",
            "Multi-language support (Arabic/English)"
        ],
        images: [
            "photo/project-card-2.png",
            "photo/project-card-2.png"
        ],

    },
    3: {
        title: "Modern Website",
        description: "A visually stunning and fully responsive website built with modern web design trends. Ideal for showcasing portfolios, businesses, or landing pages with smooth animations and fast loading performance.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "Responsive and mobile-friendly layout",
            "Smooth scroll and scroll-based animations",
            "Dark mode support",
            "Optimized performance and fast loading",
            "SEO-friendly structure",
            "Animated sections and transitions",
            "Contact form with validation",
            "Clean and modern UI design"
        ],
        images: [
            "photo/project-card-3.png",
            "photo/project-card-3.png"
        ],

    },
    4: {
        title: "Online Gaza Store",
        description: "A local e-commerce platform tailored for businesses and customers in Gaza. The store provides a user-friendly experience for browsing products, placing orders, and managing deliveries — all optimized for low-bandwidth environments.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "Product browsing by category and brand",
            "Add to cart and secure checkout system",
            "Order tracking and delivery management",
            "Mobile-friendly responsive design",
            "Admin panel for managing inventory and orders",
            "Multi-language support (Arabic/English)",
            "Discount codes and promotions",
            "Customer reviews and ratings"
        ],
        images: [
            "photo/project-card-4.png",
            "photo/project-card-4.png"
        ],

    },
    5: {
        title: "Login & Signup System",
        description: "A secure user authentication system designed for modern web applications. It features user registration, login, form validation, password protection, and session handling — all with a responsive design.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "User registration with input validation",
            "Secure login with session management",
            "Password encryption and protection",
            "Error handling and user feedback",
            "Email/username-based login",
            "Mobile-responsive form design",
            "Redirect after login/logout",
            "Reusable and modular components"
        ],
        images: [
            "photo/project-card-5.png",
            "photo/project-card-5.png"
        ],

    },
    6: {
        title: "Mobile App Development Landing Page",
        description: "A sleek and conversion-focused landing page built to promote a mobile application. Designed with responsiveness and clarity in mind, it highlights app features, user benefits, and download options across platforms.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "Hero section with app mockup",
            "Call-to-action buttons (App Store / Google Play)",
            "Feature highlights with icons",
            "User testimonials carousel",
            "FAQ section",
            "Contact form and support link",
            "Responsive mobile-first layout",
            "Performance optimized for fast loading"
        ],
        images: [
            "photo/project-card-6.png",
            "photo/project-card-6.png"
        ],

    }
};

// Typing Animation for Name and Job Title
function initTypingAnimation() {
    const studentNameElement = document.getElementById('studentName');
    const jobTitleElement = document.getElementById('jobTitle');

    const studentName = 'Saleem Wael Qandeel';
    const jobTitle = 'Full-Stack Developer';

    let nameIndex = 0;
    let titleIndex = 0;

    function typeStudentName() {
        if (nameIndex < studentName.length) {
            studentNameElement.textContent += studentName.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeStudentName, 100);
        } else {
            // Start typing job title after name is complete
            setTimeout(typeJobTitle, 500);
        }
    }

    function typeJobTitle() {
        if (titleIndex < jobTitle.length) {
            jobTitleElement.textContent += jobTitle.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeJobTitle, 80);
        } else {
            // Add blinking cursor effect
            jobTitleElement.innerHTML += '<span class="cursor">|</span>';
            setInterval(() => {
                const cursor = jobTitleElement.querySelector('.cursor');
                if (cursor) {
                    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
                }
            }, 500);
        }
    }

    // Start typing animation after a delay
    setTimeout(typeStudentName, 1000);
}

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        progressBar.style.width = scrollPercent + '%';
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Update icon based on current theme
    updateThemeIcon(currentTheme, themeIcon);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, themeIcon);
    });
}

function updateThemeIcon(theme, iconElement) {
    iconElement.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Scroll-triggered Animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const aboutSection = document.querySelector('.about-content');
    const skillsSection = document.querySelector('.skills-content');
    const projectsSection = document.querySelector('.projects-content');

    if (aboutSection) {
        aboutSection.classList.add('fade-in');
        observer.observe(aboutSection);
    }

    if (skillsSection) {
        skillsSection.classList.add('fade-in');
        observer.observe(skillsSection);
    }

    if (projectsSection) {
        projectsSection.classList.add('fade-in');
        observer.observe(projectsSection);
    }

    // Animate individual skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.classList.add('fade-in');
        category.style.animationDelay = `${index * 0.2}s`;
        observer.observe(category);
    });

    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// Skill Progress Bar Animations
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-width');

                // Animate the progress bar
                setTimeout(() => {
                    progressBar.style.width = targetWidth + '%';
                }, 300);

                // Unobserve after animation
                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Resume Download Functionality
function initResumeDownload() {
    const downloadBtn = document.getElementById('downloadResume');

    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Create a sample resume content (in a real scenario, this would be a PDF file)
        const resumeContent = generateResumeContent();
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);

        // Create temporary download link
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Saleem_Wael_Qandeel_Resume.txt';
        document.body.appendChild(a);
        a.click();

        // Cleanup
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        // Show download feedback
        showDownloadFeedback(downloadBtn);
    });
}

function generateResumeContent() {
    return `
SALEEM WAEL QANDEEL
Full-Stack Developer
Email: saleemqandeel2004@gmail.com
Phone: +972 59 292 8603
Location: Gaza, Palestine

SUMMARY
Dedicated and passionate full-stack web developer with 2+ years of experience in building modern,
responsive, and user-friendly web applications. Skilled in both frontend and backend technologies,
with a strong focus on problem-solving and clean code.

SKILLS
- Frontend: HTML5, CSS3, JavaScript, React
- Backend: Node.js, Express.js, Java
- Database: MongoDB, SQL
- Tools: Git, Responsive Design, UI/UX Design
- Soft Skills: Problem Solving, Teamwork, Adaptability

EDUCATION
Bachelor of Computer Science
Islamic University of Gaza
2022 - 2026

PROJECTS
1. Portfolio Website – Personal website showcasing projects and skills
2. Online Gaza Store – E-commerce site optimized for low-bandwidth environments
3. First Aid Awareness Website – Bilingual educational site with interactive health cards
4. Login & Signup System – Secure authentication system with validation

EXPERIENCE
Freelance Web Developer (2024 - Present)
- Developed websites for local businesses and initiatives
- Created bilingual user interfaces and responsive layouts
- Integrated client-side validations and local storage features
    `.trim();
}


function showDownloadFeedback(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
    button.style.background = '#10b981';

    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
    }, 2000);
}

// Active Navigation Highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-70px 0px -70px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (entry.isIntersecting) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current section's nav link
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#10b981';

                // Reset form
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 2000);
        });
    }
}

function initContactEnhancements() {
    const form = document.querySelector('.contact-form');
    const nameField = form.querySelector('input[type="text"]');
    const emailField = form.querySelector('input[type="email"]');
    const messageField = form.querySelector('textarea');

    // Create error message elements
    ['name', 'email', 'message'].forEach(id => {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.id = `error-${id}`;
        error.style.color = 'red';
        error.style.fontSize = '0.875rem';
        error.style.display = 'none';

        const input = id === 'message' ? messageField : (id === 'email' ? emailField : nameField);
        input.insertAdjacentElement('afterend', error);
    });

    // Real-time validation
    nameField.addEventListener('input', () => validateField(nameField, 'name'));
    emailField.addEventListener('input', () => validateField(emailField, 'email'));
    messageField.addEventListener('input', () => {
        validateField(messageField, 'message');
        updateCounter();
        saveToLocal();
    });

    // Character counter
    const counter = document.createElement('div');
    counter.id = 'charCounter';
    counter.style.fontSize = '0.875rem';
    counter.style.textAlign = 'right';
    messageField.insertAdjacentElement('afterend', counter);

    const maxChars = 500;

    function updateCounter() {
        const length = messageField.value.length;
        counter.textContent = `${length}/${maxChars}`;
    }

    // LocalStorage auto-save
    function saveToLocal() {
        const data = {
            name: nameField.value,
            email: emailField.value,
            message: messageField.value
        };
        localStorage.setItem('contactFormDraft', JSON.stringify(data));
    }

    function loadFromLocal() {
        const saved = localStorage.getItem('contactFormDraft');
        if (saved) {
            const data = JSON.parse(saved);
            nameField.value = data.name || '';
            emailField.value = data.email || '';
            messageField.value = data.message || '';
            updateCounter();
        }
    }

    // Basic validation rules
    function validateField(field, id) {
        const value = field.value.trim();
        const error = document.getElementById(`error-${id}`);

        if (id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error.textContent = 'Invalid email format';
                error.style.display = 'block';
                return false;
            }
        }

        if (value === '') {
            error.textContent = 'This field is required';
            error.style.display = 'block';
            return false;
        }

        error.style.display = 'none';
        return true;
    }

    loadFromLocal();
    updateCounter();
}

// Project Modal Functionality
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const projectCards = document.querySelectorAll('.project-card');
    const closeBtn = document.querySelector('.modal-close');

    // Add click event to project cards
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent modal from opening when clicking on project links
            if (e.target.closest('.project-link')) {
                return;
            }

            const projectId = card.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Close modal events
    closeBtn.addEventListener('click', closeProjectModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });

    function openProjectModal(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        // Update modal content
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        // Update tech tags
        const modalTech = document.getElementById('modalTech');
        modalTech.innerHTML = '';
        project.tech.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            modalTech.appendChild(techTag);
        });

        // Update features list
        const modalFeatures = document.getElementById('modalFeatures');
        modalFeatures.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });

        // Initialize carousel
        initCarousel(project.images);

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Carousel Functionality
function initCarousel(images) {
    const carouselSlides = document.getElementById('carouselSlides');
    const carouselIndicators = document.getElementById('carouselIndicators');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    let currentSlide = 0;

    // Clear existing content
    carouselSlides.innerHTML = '';
    carouselIndicators.innerHTML = '';

    // Create slides
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `<img src="${image}" alt="Project Screenshot ${index + 1}" style="max-width: 100%; max-height: 100%; object-fit: contain; display: block; margin: auto; background-color: #fff;">`;
        carouselSlides.appendChild(slide);

        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToSlide(index));
        carouselIndicators.appendChild(indicator);
    });

    function updateCarousel() {
        const slideWidth = carouselSlides.querySelector('.carousel-slide').offsetWidth;
        carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

        // Update indicators
        document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        updateCarousel();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-play carousel
    let autoPlayInterval = setInterval(nextSlide, 5000);

    // Pause auto-play on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(nextSlide, 5000);
    });

    // Initialize carousel
    updateCarousel();
}

// Additional Interactive Features

// Parallax Effect for Header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    const rate = scrolled * -0.5;

    if (header) {
        header.style.transform = `translateY(${rate}px)`;
    }
});

// Mouse Movement Effect for Avatar
document.addEventListener('mousemove', (e) => {
    const avatar = document.getElementById('headerAvatar');
    if (!avatar) return;

    const rect = avatar.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * 10;
    const rotateY = (x / rect.width) * 10;

    avatar.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset avatar transform when mouse leaves
document.addEventListener('mouseleave', () => {
    const avatar = document.getElementById('headerAvatar');
    if (avatar) {
        avatar.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial animations
    setTimeout(() => {
        const headerElements = document.querySelectorAll('.header-left > *');
        headerElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
            element.classList.add('animate-in');
        });
    }, 500);
});

// Smooth reveal animations for elements
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize reveal on load
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Add CSS for cursor animation
const style = document.createElement('style');
style.textContent = `
    .cursor {
        animation: blink 1s infinite;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .loaded {
        opacity: 1;
    }
    
    .animate-in {
        animation: slideInUp 0.8s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);