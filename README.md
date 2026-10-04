# <AnimalShelter>
<This app is used to manage an animal shelter>
## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| name | text | required, max 100 chars |
| adopted | boolean | toggled from the list, default false |
| species | fixed values | cat, dog, rabbit |
| age_category | relation | Young, Adult, Senior |
| user | relation | the owner of the item (from week 11) |
Sample data used across all stages:
1. "Luna", available, dog
2. "Bella", adopted, cat
3. "Daisy", available, rabbit
## How to run
Open `index.html` in a browser. No build step, no server.
## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Gemini | Stage 1 CSS styling, theme variable definition, responsive layout, and documentation |
Details per stage: see the ai-log/ folder.
## Status
- [x] Stage 1: static mockup
☐ Stage 2: data logic in JavaScript
