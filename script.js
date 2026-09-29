// ===== PLAN (pseudo-code) =====
//
// Clickable elements:
//   - tool buttons (Axe, Pickaxe, Shovel)
//   - tiles in the world
//   - items in the inventory
//   - reset button
//
// State to track:
//   - world (2D array of tile types)
//   - selected tool
//   - selected inventory item
//   - inventory contents
//
// renderWorld():
//   clear the world container
//   for each row in world
//     for each column in row
//       create a div with class "tile" and "tile-<type>"
//       when clicked -> clickTile(row, col)
//       add it to the world container
//
// selectTool(tool):
//   save tool as selected tool
//   remove "selected" class from all tool buttons
//   add "selected" class to the clicked tool button
//
// clickTile(row, col):
//   if an inventory item is selected and the tile is sky
//     placeFromInventory(row, col)
//   else if the selected tool matches the tile type
//     removeTile(row, col)
//     addToInventory(tile type)
//
// removeTile(row, col):
//   set world[row][col] to "sky"
//   renderWorld()
//
// addToInventory(type):
//   add 1 to inventory[type]
//   render the inventory
//
// placeFromInventory(row, col):
//   set world[row][col] to the selected item type
//   remove 1 from inventory[type]
//   render world and inventory
//
// resetWorld():
//   copy the original world back into world
//   empty the inventory, clear selections
//   render world and inventory
