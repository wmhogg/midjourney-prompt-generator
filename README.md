# Midjourney Prompt Generator

An advanced interactive tool for creating richly detailed Midjourney prompts with intelligent parameter optimization.

![Midjourney Prompt Generator Screenshot](https://github.com/wmhogg/midjourney-prompt-generator/assets/4960663/placeholder-image-id)

## Live Demo

**[Use the Prompt Generator Now](https://wmhogg.github.io/midjourney-prompt-generator/)**

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

## Using the Prompt Generator

### Core Elements

1. **Subject**: The primary focus of your image (required)
2. **Action**: What the subject is doing (optional)
3. **Environment**: The setting or background (optional)

### Artistic Elements

1. **Style**: The artistic approach (e.g., "watercolor," "cyberpunk," "oil painting")
2. **Mood**: The emotional tone (e.g., "ethereal," "mysterious," "melancholic")
3. **Lighting**: How the scene is illuminated (e.g., "golden hour," "volumetric light")
4. **Quality Descriptors**: Terms that enhance detail (e.g., "highly detailed," "intricate")
5. **Artist References**: Style influences (e.g., "by Greg Rutkowski," "in the style of Moebius")

### Technical Parameters

1. **Aspect Ratio** (`--ar`): Controls image dimensions
2. **Chaos** (`--c`): Adjusts randomness/variation
3. **Stylize** (`--s`): Controls stylistic intensity
4. **Version**: Specifies the model version
5. **Exclusion Parameters** (`--no`): Removes unwanted elements

## Advanced Prompt Engineering Tips

### Parameter Balancing

- **Chaos vs. Consistency**: Lower chaos values (0-20) create more predictable results, while higher values (50-100) generate more varied interpretations
- **Stylization Spectrum**: Lower stylize values (100-250) produce more photorealistic results, while higher values (750-1000) create more artistic, interpretive renderings
- **Quality Enhancement**: The tool automatically adds the `--q 2` parameter for higher quality renderings

### Effective Prompt Strategies

1. **Focus on Specificity**: Be precise about what you want to see
2. **Layer Your Descriptions**: Build complexity with complementary artistic elements
3. **Strategic Parameter Combinations**: Different parameter combinations can dramatically alter output style:

| Style Goal | Recommended Parameters | Effect |
|------------|------------------------|--------|
| Photorealism | `--s 100 --c 10` | Low stylization and chaos create more literal interpretations |
| Artistic Illustration | `--s 750 --c 20` | Higher stylization with controlled variation |
| Abstract Experimentation | `--s 1000 --c 80` | Maximum stylization with high randomness |
| Consistent Series | `--s 250 --c 0` | Moderate style with zero chaos ensures consistency |

## Development Guide

### Local Setup

1. Clone this repository
   ```bash
   git clone https://github.com/wmhogg/midjourney-prompt-generator.git
   cd midjourney-prompt-generator
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Visit `http://localhost:3000` in your browser

### Deployment

The application is automatically deployed to GitHub Pages whenever changes are pushed to the main branch.

For manual deployment:

```bash
npm run deploy
```

### Project Structure

- `src/components/MidjourneyPromptBuilder.js`: The main component with prompt generation logic
- `src/App.js`: Application entry point
- `.github/workflows/deploy.yml`: GitHub Actions workflow for automatic deployment

## License

MIT

## Acknowledgements

This project was created to enhance the creative workflow for Midjourney users, enabling more precise control over generated images through optimized prompt engineering.
