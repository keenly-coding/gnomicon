class IconGrid extends HTMLElement {
    constructor() {
        super();
    }

    render(icon) {
        this.innerHTML = `
            <el-icon set="adwaita" name="${icon}"></el-icon>
            <div class="name">${icon}</div>
        `
    }
}

class IconManager extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        let response = await fetch('./icons.json');
        response = await response.json();
        for (let icon of response.icons) {
            let icon_grid = document.createElement('el-icon-grid');
            icon_grid.render(icon);
            this.appendChild(icon_grid);
        }
    }
}

customElements.define('el-icon-grid', IconGrid);
customElements.define('el-icon-manager', IconManager);