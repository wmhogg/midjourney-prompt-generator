# Midjourney Prompt Generator

An advanced interactive tool for creating richly detailed Midjourney prompts with intelligent parameter optimization.

## Overview

This application provides a sophisticated interface for engineering Midjourney AI art prompts. It combines structured input fields with intelligent enhancement algorithms to generate highly effective prompts optimized for Midjourney's image generation system.

## Key Features

- **Comprehensive Parameter Control**: Fine-tune every aspect of your prompt including style, mood, lighting, and technical parameters
- **Intelligent Enhancement**: Automatically adds relevant details based on your selections
- **Artist Reference System**: Incorporate the styles of renowned artists with contextual information
- **Technical Parameter Optimization**: Simplified interface for Midjourney's powerful parameter system
- **Persistent Settings**: Save your preferences between sessions
- **Prompt History**: Keep track of your most successful prompts
- **Clipboard Integration**: Single-click copy functionality

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`
4. Visit `http://localhost:3000` in your browser

## Usage Guide

1. **Core Elements**: Begin by entering your subject, action, and environment
2. **Artistic Elements**: Select style, mood, lighting, and other creative parameters
3. **Technical Parameters**: Adjust aspect ratio, chaos, stylize values, and other technical settings
4. **Generate & Copy**: Your enhanced prompt will be generated automatically and can be copied to the clipboard
5. **History**: Previously generated prompts are saved for future reference

## Technologies Used

- React.js
- Local Storage for persistence
- Modern CSS with responsive design
- Lucide React for icons

## Parameters Explained

- **Chaos (`--c`)**: Controls randomness in generation (0-100)
- **Stylize (`--s`)**: Adjusts stylistic intensity (100-1000)
- **Aspect Ratio (`--ar`)**: Sets image dimensions (16:9, 1:1, etc.)
- **Quality (`--q`)**: Controls rendering quality (default: 2 for high quality)
- **Version (`--v`)**: Specifies which Midjourney model to use

## License

MIT

## Acknowledgements

This project was created to enhance the creative workflow for Midjourney users, enabling more precise control over generated images through optimized prompt engineering.
