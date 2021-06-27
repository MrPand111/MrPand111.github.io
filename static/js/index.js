window.PageSize = 1;

const createNode = (config) => {
    const { title, tag, date, url } = config;
    const container = document.createElement('div');
    container.className = 'article-container';
    const tpl = `
    <a href="${url}" target="_blank">
        <div class="article-header">
            <div>
                ${title}
            </div>
            <div class="article-tag-list">
                ${
                    tag.map((t) => {
                        return `
                        <div class="article-tag">
                            #${t}
                        </div>
                        `;
                    }).join('')
                }
            </div>
        </div>
        <div class="article-date">
            ${date}
        </div>
    </a>       
    `;
    container.innerHTML = tpl;
    return container;
}

const addPost = () => {
    const main = document.querySelector('#main');
    (configs.slice(10*(PageSize-1), 10*PageSize) || []).forEach((config) => {
        main.appendChild(createNode(config));
    });
};

window.onload = () => {
    addPost();
}

document.querySelector('#btn').addEventListener('click', () => {
    window.PageSize++;
    addPost();
})