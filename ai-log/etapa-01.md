# Stage 1: AI log

## Tools
- Gemini

## Conversations
- Shared session (Stage 1: CSS generation according to laboratory specifications)

## Key requests

### 1. Generate final style.css for Animal Shelter application
- Asked: Generate the complete, production-ready `style.css` matching the lab requirements and exact color palettes (light mode, dark mode, hardcoded accents, specific selectors, Flexbox/Grid layouts, and responsive media query at 700px).
- Got: The full CSS stylesheet structured strictly in the order requested, with CSS custom properties for light and dark schemes, responsive rules, accessible `:focus-visible` styling, and zero external dependencies.
- Changed or rejected: Kept the exact selectors and color tokens without adding unneeded custom classes or altering the requested ordering.

## What I learned / what did not work
- Using CSS custom properties in `:root` allows seamless switching to dark mode via `@media (prefers-color-scheme: dark)` by simply overriding variable values without duplicating structural layout rules.