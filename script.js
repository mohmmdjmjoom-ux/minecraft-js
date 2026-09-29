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

    init() {
        this.world = this.copyWorld(this.originalWorld);
        this.addToolEvents();
        this.renderWorld();
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
        this.updateToolButtons();
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
                worldElement.appendChild(tile);
            }
        }
    }
};

Game.init();
