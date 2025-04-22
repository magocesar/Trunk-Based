// Mock de posts em JSON
const posts = [
    {
        id: 1,
        title: "Primeiro Post",
        excerpt: "Este é o resumo do primeiro post que será exibido na listagem.",
        image: "https://source.unsplash.com/random/600x400/?1",
        date: "10 de Abril, 2023",
        author: "Autor 1"
    },
    {
        id: 2,
        title: "Segundo Post",
        excerpt: "Resumo do segundo post que aparece na grid de posts.",
        image: "https://source.unsplash.com/random/600x400/?2",
        date: "11 de Abril, 2023",
        author: "Autor 2"
    },
    {
        id: 3,
        title: "Terceiro Post",
        excerpt: "Mais um post interessante para completar nossa listagem inicial.",
        image: "https://source.unsplash.com/random/600x400/?3",
        date: "12 de Abril, 2023",
        author: "Autor 3"
    },
    {
        id: 4,
        title: "Quarto Post",
        excerpt: "Este post demonstra como a grid se adapta a múltiplos itens.",
        image: "https://source.unsplash.com/random/600x400/?4",
        date: "13 de Abril, 2023",
        author: "Autor 4"
    }
];

// Função para renderizar os posts
function renderPosts() {
    const postsGrid = document.querySelector('.posts-grid');
    const loadingSkeleton = document.querySelector('.loading-skeleton');
    
    // Simular carregamento
    setTimeout(() => {
        loadingSkeleton.style.display = 'none';
        
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post-card';
            postElement.innerHTML = `
                <div class="post-image" style="background-image: url('${post.image}')"></div>
                <div class="post-content">
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-meta">
                        <span>${post.author}</span> · <span>${post.date}</span>
                    </div>
                </div>
            `;
            postsGrid.appendChild(postElement);
        });
    }, 1500);
}

// Chamar a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', renderPosts);