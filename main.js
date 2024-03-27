


const peliculasToriyama= [
    {
        titulo: "Dragon Ball",
        tipo: "Serie de TV",
        año: 1986,
        descripcion: "La serie sigue las aventuras de Son Goku desde su infancia hasta la adultez mientras entrena en artes marciales y explora el mundo en busca de las legendarias Esferas del Dragón.",
        imagen: "https://media.themoviedb.org/t/p/w500/onCLyCOgszTIyyVs2XKYSkKPOPG.jpg"
    },
    {
        titulo: "Dr. Slump",
        tipo: "Manga",
        año: 1980,
        descripcion: "Un manga cómico que sigue las aventuras de Arale, una niña androide creada por el científico Senbei Norimaki, y sus amigos en la Isla Penguín.",
        imagen: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/XZO5R7VSQFJMTMC3ZJGBNKTJBA.jpg"
    },
    {
        titulo: "Chrono Trigger",
        tipo: "Videojuego",
        año: 1995,
        descripcion: "Un aclamado videojuego de rol desarrollado por Square (ahora Square Enix) que cuenta con el diseño de personajes de Akira Toriyama.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtnjd2WN86JNi3L73ujB93-h7qoRujH8TDDQ&usqp=CAU"
    },
    {
        titulo: "Blue Dragon",
        tipo: "Anime",
        año: 2007,
        descripcion: "Una serie de anime basada en el videojuego de rol del mismo nombre, con diseño de personajes de Akira Toriyama.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbb9nlmLlmPtjl7CWK7ZtFzfKcxPx8Md8mA&usqp=CAU.jpg"
    },
    {
        titulo: "Dragon Quest: Las Aventuras de Fly",
        tipo: "Manga",
        año: 1989,
        descripcion: "Un manga de fantasía que sigue las aventuras de un joven llamado Fly y sus amigos en su búsqueda para derrotar al malvado rey demonio Hadlar.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvf2VJh5jxp0M27N-fwYf_pMGxo10ZLOfcKg&usqp=CAU.jpg"
    },
    {
        titulo: "Sand Land",
        tipo: "Manga",
        año: 2000,
        descripcion: "Un manga de aventuras ambientado en un mundo desértico donde un humano y un demonio cooperan para encontrar agua y detener a un dictador.",
        imagen: "https://i.blogs.es/5398ca/sand-land/1366_2000.jpeg"
    }
  ];



  const pintarPeliculas = () => {
    const listaPeliculas = document.querySelector('.listaPeliculas');
    let contenidoHTML = '';

    for (const pelicula of peliculasToriyama) {
        const template = `
            <div>
                <h2>${pelicula.titulo}</h2>
                <p>${pelicula.año}</p>
                <p>${pelicula.tipo}</p>
                <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
            </div>
        `;
        contenidoHTML += template;
    }

    listaPeliculas.innerHTML = contenidoHTML; // Utiliza innerHTML para agregar el contenido HTML
};



pintarPeliculas();
