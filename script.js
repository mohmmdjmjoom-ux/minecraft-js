const Game = {
    // The world at the start of the game (never changes, used for reset)
    originalWorld: [
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "tree", "sky", "sky", "sky", "sky", "sky"],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "grass", "grass", "sky", "sky", "sky", "sky"],
        ["sky", "tree", "sky", "sky", "sky", "sky", "tree", "sky", "sky", "sky", "rock", "sky", "sky", "dirt", "dirt", "dirt", "sky", "tree", "sky", "sky"],
        ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "dirt", "dirt", "dirt", "grass", "grass", "grass", "grass"],
        ["dirt", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
        ["dirt", "dirt", "rock", "dirt", "rock", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock"],
        ["rock", "rock", "rock", "rock", "rock", "rock", "rock", "dirt", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "dirt", "rock", "rock", "rock", "rock"],
        ["rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock"]
    ],

    // The world we play with (this one changes)
    world: [],

    selectedTool: null,

    selectedItem: null,

    // How many tiles of each type we collected
    inventory: {
        tree: 0,
        rock: 0,
        dirt: 0
    },

    // Which tile type each tool can remove
    toolRules: {
        axe: "tree",
        pickaxe: "rock",
        shovel: "dirt"
    },

    init() {
        this.world = this.copyWorld(this.originalWorld);
        this.addToolEvents();

        document.getElementById("reset-button").addEventListener("click", () => {
            this.resetWorld();
        });

        this.renderWorld();
        this.renderInventory();
    },

    addToolEvents() {
        const toolButtons = document.querySelectorAll(".tool");

        toolButtons.forEach(button => {
            button.addEventListener("click", () => {
                this.selectTool(button.dataset.tool);
            });
        });
    },

    selectTool(toolName) {
        this.selectedTool = toolName;
        this.selectedItem = null;
        this.updateToolButtons();
        this.renderInventory();
    },

    // Highlights the selected tool button
    updateToolButtons() {
        const toolButtons = document.querySelectorAll(".tool");

        toolButtons.forEach(button => {
            if (button.dataset.tool === this.selectedTool) {
                button.classList.add("selected");
            } else {
                button.classList.remove("selected");
            }
        });
    },

    // Makes a new copy of the world so the original stays the same
    copyWorld(world) {
        return world.map(row => [...row]);
    },

    // Builds the tiles from the world array
    renderWorld() {
        const worldElement = document.getElementById("world");
        worldElement.innerHTML = "";

        for (let row = 0; row < this.world.length; row++) {
            for (let col = 0; col < this.world[row].length; col++) {
                const tile = document.createElement("div");
                tile.classList.add("tile", "tile-" + this.world[row][col]);
                tile.addEventListener("click", () => {
                    this.clickTile(row, col);
                });
                worldElement.appendChild(tile);
            }
        }
    },

    // Checks if the selected tool matches the clicked tile
    clickTile(row, col) {
        const tileType = this.world[row][col];

        if (this.selectedItem !== null && tileType === "sky") {
            this.placeFromInventory(row, col);
        } else if (this.selectedTool !== null && this.toolRules[this.selectedTool] === tileType) {
            this.removeTile(row, col);
            this.addToInventory(tileType);
        }
    },

    removeTile(row, col) {
        this.world[row][col] = "sky";
        this.renderWorld();
    },

    addToInventory(tileType) {
        this.inventory[tileType]++;
        this.renderInventory();
    },

    // Builds the inventory items from the inventory object
    renderInventory() {
        const inventoryElement = document.getElementById("inventory");
        const emptyMessage = document.getElementById("inventory-empty");
        let isEmpty = true;

        inventoryElement.innerHTML = "";

        for (const tileType in this.inventory) {
            const count = this.inventory[tileType];

            if (count > 0) {
                isEmpty = false;

                const item = document.createElement("button");
                item.type = "button";
                item.classList.add("inventory-item", "tile-" + tileType);
                item.textContent = count;

                if (tileType === this.selectedItem) {
                    item.classList.add("selected");
                }

                item.addEventListener("click", () => {
                    this.selectItem(tileType);
                });
                inventoryElement.appendChild(item);
            }
        }

        if (isEmpty) {
            emptyMessage.classList.remove("hidden");
        } else {
            emptyMessage.classList.add("hidden");
        }
    },

    // Selecting an inventory item cancels the selected tool
    selectItem(tileType) {
        this.selectedItem = tileType;
        this.selectedTool = null;
        this.updateToolButtons();
        this.renderInventory();
    },

    placeFromInventory(row, col) {
        this.world[row][col] = this.selectedItem;
        this.inventory[this.selectedItem]--;

        if (this.inventory[this.selectedItem] === 0) {
            this.selectedItem = null;
        }

        this.renderWorld();
        this.renderInventory();
    },

    // Puts everything back like the start of the game
    resetWorld() {
        this.world = this.copyWorld(this.originalWorld);
        this.inventory = {
            tree: 0,
            rock: 0,
            dirt: 0
        };
        this.selectedTool = null;
        this.selectedItem = null;

        this.updateToolButtons();
        this.renderWorld();
        this.renderInventory();
    }
};

Game.init();
