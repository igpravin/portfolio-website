# Update Project Links

## Adding Demo and GitHub Links

To add actual links to your projects, edit the `js/main.js` file and update the portfolio data:

### Current Structure:
```javascript
const portfolioData = [
    {
        id: 1,
        title: "To-Do List Web App",
        category: "web",
        description: "A simple web-based to-do list...",
        image: "assets/images/projects/todo-app.svg",
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",        // Update this with live demo URL
        githubUrl: "#"       // Update this with GitHub repository URL
    },
    // ... other projects
];
```

### How to Update:

1. **Replace `demoUrl: "#"`** with your live demo URL:
   ```javascript
   demoUrl: "https://your-username.github.io/todo-app"
   ```

2. **Replace `githubUrl: "#"`** with your GitHub repository URL:
   ```javascript
   githubUrl: "https://github.com/igpravin/todo-app"
   ```

### Example for To-Do List App:
```javascript
{
    id: 1,
    title: "To-Do List Web App",
    category: "web",
    description: "A simple web-based to-do list that allows users to add, delete, and mark tasks as complete with dynamic interaction and local storage",
    image: "assets/images/projects/todo-app.svg",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://igpravin.github.io/todo-list-app",
    githubUrl: "https://github.com/igpravin/todo-list-app"
}
```

### Features:
- **Demo Button**: Shows only if `demoUrl` is not "#"
- **Code Button**: Shows only if `githubUrl` is not "#"
- **Responsive**: Buttons adapt to mobile screens
- **Hover Effects**: Modern glass-morphism design with hover animations

### Tips:
- Use GitHub Pages for hosting demos: `https://username.github.io/repository-name`
- Keep repository names consistent and descriptive
- Test all links before updating the live site
- If you don't have a demo yet, keep the URL as "#" to hide the button

The portfolio will automatically show/hide buttons based on whether you provide actual URLs!