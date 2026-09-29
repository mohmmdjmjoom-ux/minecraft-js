# Minecraft JS

**Live demo:** https://mohmmdjmjoom-ux.github.io/minecraft-js/

## Description
A 2D version of Minecraft built with HTML, CSS and JavaScript.

1. The world is a hardcoded 2D array of tiles: sky, grass, dirt, rock and tree.
2. There are 3 tools: the Axe removes trees, the Pickaxe removes rocks and the Shovel removes dirt.
3. Removed tiles go to the inventory. Click a tile in the inventory and then click an empty sky spot to place it back.
4. The Reset World button brings the world back to its original state.
5. A landing page (`index.html`) explains the rules and how to play before entering the world (`game.html`).

### Files
1. `index.html` - landing page and tutorial
2. `game.html` - the game page (toolbar, world and inventory containers)
3. `style.css` - all the styles
4. `script.js` - all the game logic inside one `Game` object
5. `images/` - pixel textures for the tiles and tools
6. `fonts/` - the pixel font used for the titles

## What I found hard
- Keeping the original world safe for the reset.
Copying the array with `=` only copies the reference, so I had to copy every row.

## Known bugs
- The world has a fixed width (20 tiles), so on small screens the page scrolls sideways.
- Tiles can be placed on any sky spot, even in the air.

## Assignment review
I really enjoyed this assignment and I learned a lot from it. It taught me to plan before
writing code: listing the clickable elements, deciding what state to track, and writing
pseudo-code first. Breaking the work into small steps and small functions, with a commit
for each feature, made the project much easier to manage. It felt like a practical,
real-world task, and it helped me improve how I split my work and build a project step by step.
