# Minecraft JS

## Description
A 2D version of Minecraft built with HTML, CSS and JavaScript.

- The world is a hardcoded 2D array of tiles: sky, grass, dirt, rock and tree.
- There are 3 tools: the Axe removes trees, the Pickaxe removes rocks and the Shovel removes dirt.
- Removed tiles go to the inventory. Click a tile in the inventory and then click an empty sky spot to place it back.
- The Reset World button brings the world back to its original state.
- A landing page (`index.html`) explains the rules and how to play before entering the world (`game.html`).

### Files
- `index.html` - landing page and tutorial
- `game.html` - the game page (toolbar, world and inventory containers)
- `style.css` - all the styles
- `script.js` - all the game logic inside one `Game` object
- `images/` - pixel textures for the tiles and tools
- `fonts/` - the pixel font used for the titles

## What I found hard
- Keeping the original world safe for the reset. Copying the array with `=` only copies the reference, so I had to copy every row.
- Deciding what happens when a tool is selected and an inventory item is selected at the same time. I made selecting one cancel the other.
- Changing the look only with CSS classes (`selected`, `hidden`, `tile-*`) and not with inline styles.

## Known bugs
- The world has a fixed width (20 tiles), so on small screens the page scrolls sideways.
- Tiles can be placed on any sky spot, even in the air.

## Assignment review
A good assignment to practice working with the DOM, 2D arrays and keeping the game state in one object. Planning with pseudo-code first made writing the functions much easier.
