# 🚀 DevOps Foundation

[![CI/CD Pipeline](https://github.com/Erangamadhushan/DevOps-Foundation/actions/workflows/main.yml/badge.svg)](https://github.com/Erangamadhushan/DevOps-Foundation/actions/workflows/main.yml)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A comprehensive DevOps foundation project demonstrating modern development practices including **Version Control, Git, CI/CD, Containers, Configuration Management, Monitoring, Logging, and Cloud Services** with hands-on exercises and a sample Node.js Express application.

## 📋 Table of Contents

- [Overview](#-overview)
- [Learning Objectives](#-learning-objectives)
- [Quick Start](#-quick-start)
- [DevOps Exercises](#-devops-exercises)
- [Application Setup](#-application-setup)
- [Git Workflow Exercises](#-git-workflow-exercises)
- [CI/CD Pipeline](#-cicd-pipeline)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

This repository contains **hands-on exercises for DevOps foundation** concepts along with a practical Node.js Express application. It's designed to provide real-world experience with:

- **Version Control & Git** - Branching, merging, and collaboration workflows
- **CI/CD Pipelines** - Automated testing, building, and deployment
- **Containerization** - Docker and container orchestration
- **Configuration Management** - Environment-specific configurations
- **Monitoring & Logging** - Application health and performance tracking
- **Cloud Services** - Modern cloud deployment strategies

## 🎓 Learning Objectives

By working through this repository, you will learn:

- ✅ **Git Version Control** - Professional branching and merging strategies
- ✅ **GitHub Actions** - Setting up automated CI/CD workflows  
- ✅ **Node.js Development** - Building RESTful APIs with Express
- ✅ **Testing Strategies** - Unit testing and continuous integration
- ✅ **Code Quality** - Linting, formatting, and best practices
- ✅ **Deployment** - From development to production workflows
- ✅ **DevOps Culture** - Collaboration between development and operations

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **Git** for version control
- **Code Editor** (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Erangamadhushan/DevOps-Foundation.git
   cd DevOps-Foundation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   node index.js
   ```

4. **Visit the application**
   ```
   http://localhost:3000
   ```

## 📚 DevOps Exercises

This repository includes practical exercises covering essential DevOps concepts:

### 1. Version Control & Git Fundamentals
- Repository initialization and configuration
- Branching strategies and best practices
- Merge vs. Rebase workflows
- Conflict resolution techniques

### 2. CI/CD Pipeline Development
- GitHub Actions workflow setup
- Automated testing integration
- Build and deployment automation
- Environment-specific deployments

### 3. Configuration Management
- Environment variable management
- Configuration file organization
- Secrets and security best practices

### 4. Monitoring & Logging
- Application health monitoring
- Error tracking and alerting
- Performance metrics collection

## 💻 Application Setup

### Available Scripts

```bash
# Start the application
node index.js

# Install development dependencies
npm install --save-dev nodemon

# Development mode (if nodemon is installed)
npx nodemon index.js
```

### Environment Configuration

The application runs on port 3000 by default. You can modify the configuration in `index.js`:

```javascript
const port = process.env.PORT || 3000;
```

### Dependencies

- **express** - Web application framework
- **dotenv** - Environment configuration management
- **cors** - Cross-origin resource sharing

## 🌿 Git Workflow Exercises

### Exercise 1: Feature Branch Workflow

Practice the complete feature development cycle:

```bash
# Show all git branches
git branch

# Create and switch to add-readme branch
git checkout -b add-readme

# Make necessary changes in readme file
# ... edit files ...

# Stage changes
git add README.md

# Commit changes with meaningful message
git commit -m "Add comprehensive project documentation"

# Push changes to remote repository branch
git push -u origin add-readme

# Switch to the main branch
git checkout main

# Merge add-readme local branch into the main branch
git merge add-readme

# Push changes to remote repository main branch
git push -u origin main

# Delete add-readme branch from remote repository
git push origin --delete add-readme

# Delete add-readme branch from local repository
git branch -d add-readme
```

### Exercise 2: Collaboration Workflow

Learn how to work with multiple contributors:

1. **Fork the repository**
2. **Create feature branches** for different features
3. **Submit Pull Requests** for code review
4. **Handle merge conflicts** when they occur
5. **Maintain clean commit history**

## 🔄 CI/CD Pipeline

The project uses **GitHub Actions** for automated workflows:

### Current Pipeline Features

- **Automated Testing** - Runs on every push and pull request
- **Code Quality Checks** - Linting and formatting validation
- **Build Verification** - Ensures application builds successfully
- **Deployment Automation** - Deploys to staging/production environments

### Workflow Configuration

Located in `.github/workflows/main.yml`:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      # Add your test commands here
```

## 📚 API Documentation

### Base URL
```
Local Development: http://localhost:3000
```

### Available Endpoints

#### Root Endpoint
```http
GET /
```

**Response:**
```json
{
  "message": "Welcome to the API",
  "endpoints": {
    "health": "/health",
    "users": "/api/users"
  }
}
```

#### Health Check
```http
GET /health
```

**Response:**
```
Status: 200 OK
Body: "OK"
```

### API Features

- **JSON Response Format** - Structured API responses
- **Health Monitoring** - Built-in health check endpoint
- **Express Middleware** - JSON parsing and URL encoding
- **Error Handling** - Graceful error responses

## 📁 Project Structure

```
DevOps-Foundation/
├── .github/
│   └── workflows/
│       └── main.yml          # CI/CD pipeline configuration
├── src/                      # Source code directory
├── node_modules/             # Dependencies (auto-generated)
├── index.js                  # Main application file
├── package.json              # Project configuration and dependencies
├── package-lock.json         # Dependency lock file
├── .gitignore               # Git ignore rules
├── LICENSE                   # Project license
└── README.md                 # Project documentation
```

### Key Files

- **`index.js`** - Main Express application with API endpoints
- **`package.json`** - Node.js project configuration and dependencies
- **`.github/workflows/main.yml`** - GitHub Actions CI/CD pipeline
- **`README.md`** - Comprehensive project documentation

## 🛠 Development Best Practices

### Code Quality

- Follow consistent coding standards
- Use meaningful commit messages
- Write descriptive documentation
- Implement proper error handling

### Git Workflow

- Use feature branches for development
- Keep commits atomic and focused
- Write clear commit messages
- Regularly sync with main branch

### Testing Strategy

- Write unit tests for core functionality
- Implement integration tests for API endpoints
- Use continuous integration for automated testing
- Maintain high code coverage

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** following the coding standards
4. **Test your changes** thoroughly
5. **Commit with clear messages**
   ```bash
   git commit -m "Add amazing feature for DevOps automation"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Submit a Pull Request** with detailed description

### Development Guidelines

- Follow existing code style and patterns
- Add tests for new functionality
- Update documentation as needed
- Ensure all CI/CD checks pass

## 📈 Learning Path

### Beginner Level
1. Complete Git workflow exercises
2. Set up local development environment
3. Understand the CI/CD pipeline basics
4. Make your first contribution

### Intermediate Level
1. Implement new API endpoints
2. Add comprehensive testing
3. Set up monitoring and logging
4. Create Docker containers

### Advanced Level
1. Design complex deployment strategies
2. Implement infrastructure as code
3. Set up monitoring and alerting
4. Optimize performance and security

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support & Resources

### Getting Help

- **Issues**: Report bugs or request features in [GitHub Issues](https://github.com/Erangamadhushan/DevOps-Foundation/issues)
- **Discussions**: Join conversations about DevOps practices
- **Documentation**: Comprehensive guides and examples included

### Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Actions Guide](https://docs.github.com/en/actions)
- [Node.js Best Practices](https://nodejs.org/en/docs/)
- [Express.js Guide](https://expressjs.com/)

---

**🎯 Ready to start your DevOps journey? Begin with the Git workflow exercises and explore the hands-on learning materials!**