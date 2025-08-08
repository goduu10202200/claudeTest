# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple client-side login system implemented with vanilla HTML, CSS, and JavaScript. The project consists of three main files:

- `login.html` - The main HTML page with a login form (Traditional Chinese interface)
- `script.js` - JavaScript handling form validation and authentication logic
- `style.css` - CSS styling with gradient backgrounds and modern form design

## Architecture

This is a static web application with no build process or dependencies. All functionality is implemented using vanilla JavaScript with client-side credential validation. The authentication system uses hardcoded credentials stored in a JavaScript object.

### Key Components

- **Authentication Logic**: Located in `script.js:5-9` with predefined user credentials
- **Form Validation**: Implemented in `script.js:11-31` with empty field checking
- **UI Feedback**: Message display system in `script.js:33-41` with success/error states
- **Styling**: Modern gradient-based design with form focus states and message styling

## Development Notes

- No build tools, package managers, or frameworks are used
- The application runs directly in the browser by opening `login.html`
- All text is in Traditional Chinese
- Credentials are hardcoded for demo purposes (admin/password123, user/12345, test/test123)
- No backend server or database integration

## Running the Application

Simply open `login.html` in a web browser. No installation or build process required.