# MakeHub Assets Needed for Complete Rebranding

## Required Image Assets

To complete the MakeHub rebranding, you'll need to add the following image assets:

### 1. Provider Images (`src/assets/images/`)

- **`makehub.png`** - MakeHub provider logo for the welcome screen
    - Dimensions: Should match existing provider images (approx. 64x64px)
    - Format: PNG with transparent background
    - Used in: Welcome screen provider selection

### 2. Main Logo (`src/assets/images/`)

- **`roo-logo.svg`** - Replace with MakeHub logo
    - Format: SVG (vector format)
    - Used in: Welcome screen hero component, various UI elements
    - Should be scalable and work with different VS Code themes

### 3. Extension Icons (`src/assets/icons/`)

- **`icon.png`** - Main extension icon (marketplace)

    - Dimensions: 128x128px
    - Format: PNG
    - Should represent MakeHub branding

- **`icon.svg`** - Vector version of the icon

    - Format: SVG
    - Used in: Activity bar and various UI components

- **`icon-nightly.png`** - Nightly build icon
    - Dimensions: 128x128px
    - Format: PNG
    - Usually a variant of the main icon

### 4. Panel Icons (`src/assets/icons/`)

- **`panel_dark.png`** - Dark theme panel icon
- **`panel_light.png`** - Light theme panel icon
    - Dimensions: Should match existing (appears to be smaller icons)
    - Used in: VS Code panels and sidebars

## Design Recommendations

### MakeHub Brand Colors

- Consider using a color scheme that represents "universal routing" and "optimization"
- Should work well in both light and dark VS Code themes
- Consider colors that convey reliability, speed, and cost-effectiveness

### Icon Design

- Simple, recognizable design that works at small sizes
- Should be distinctive from other VS Code extensions
- Consider incorporating elements that suggest "routing", "optimization", or "connectivity"

### Logo Requirements

- Scalable vector format (SVG) for main logo
- Should work as a monochrome icon when needed
- Clear, readable at various sizes

## Implementation Notes

Once you have the assets:

1. Replace the existing files in the respective directories
2. Ensure the MakeHub provider image is referenced correctly in the welcome screen
3. Update any hardcoded references to the logo filename if necessary
4. Test the icons in both light and dark VS Code themes

## Current Asset Locations

```
src/assets/
├── images/
│   ├── openrouter.png
│   ├── requesty.png
│   └── roo-logo.svg          ← Replace with MakeHub logo
└── icons/
    ├── icon.png              ← Replace with MakeHub icon
    ├── icon.svg              ← Replace with MakeHub icon
    ├── icon-nightly.png      ← Replace with MakeHub nightly icon
    ├── panel_dark.png        ← Update for MakeHub
    └── panel_light.png       ← Update for MakeHub
```

The rebranding of text, components, and functionality is complete. Adding these visual assets will complete the full MakeHub transformation.
