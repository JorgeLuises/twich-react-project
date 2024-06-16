import Videogame from "./Videogame";

export default function Main () {
    const videogames = [
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            name: "Rust",
            espectadores: 172.315,
            categorias: ["Shooter en primera persona"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            name: "League of Legends",
            espectadores: 1800.315,
            categorias: ["RPG", 'Estrategia', 'MOBA'],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            name: "Fornite",
            espectadores: 200.000,
            categorias: ["Shooter", 'RPG'],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
            name: "Call of Duty: War Zone",
            espectadores: 520.589,
            categorias: ["Shooter en primera persona"],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/2397_IGDB-285x380.jpg",
            name: "Halo: Combat Evolved",
            espectadores: 115,
            categorias: ["Shooter en primera persona"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/322503446_IGDB-285x380.jpg",
            name: "Resident Evil 4",
            espectadores: 172.315,
            categorias: ["Shooter", 'Puzle'],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg",
            name: "Diablo IV",
            espectadores: 315,
            categorias: ["RPG", 'Acción', 'Terror'],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/941530474_IGDB-285x380.jpg",
            name: "Mario Kart 8 Deluxe",
            espectadores: 199.357,
            categorias: ["Carreras o conducción"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/459064_IGDB-285x380.jpg",
            name: "Cuphead",
            espectadores: 415,
            categorias: ["Shooter", 'Plataformas'],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/13389-285x380.jpg",
            name: "Age of Empires II",
            espectadores: 671,
            categorias: ["Estrategía"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/538054672_IGDB-285x380.jpg",
            name: "Tekken 8",
            espectadores: 172.310,
            categorias: ["Lucha", 'Acción'],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            name: "Rust",
            espectadores: 172.315,
            categorias: ["Shooter en primera persona"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            name: "League of Legends",
            espectadores: 1800.315,
            categorias: ["RPG", 'Estrategia', 'MOBA'],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            name: "Fornite",
            espectadores: 200.000,
            categorias: ["Shooter", 'RPG'],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
            name: "Call of Duty: War Zone",
            espectadores: 520.589,
            categorias: ["Shooter en primera persona"],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/2397_IGDB-285x380.jpg",
            name: "Halo: Combat Evolved",
            espectadores: 115,
            categorias: ["Shooter en primera persona"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/322503446_IGDB-285x380.jpg",
            name: "Resident Evil 4",
            espectadores: 172.315,
            categorias: ["Shooter", 'Puzle'],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg",
            name: "Diablo IV",
            espectadores: 315,
            categorias: ["RPG", 'Acción', 'Terror'],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/941530474_IGDB-285x380.jpg",
            name: "Mario Kart 8 Deluxe",
            espectadores: 199.357,
            categorias: ["Carreras o conducción"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/459064_IGDB-285x380.jpg",
            name: "Cuphead",
            espectadores: 415,
            categorias: ["Shooter", 'Plataformas'],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/13389-285x380.jpg",
            name: "Age of Empires II",
            espectadores: 671,
            categorias: ["Estrategía"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/538054672_IGDB-285x380.jpg",
            name: "Tekken 8",
            espectadores: 172.310,
            categorias: ["Lucha", 'Acción'],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            name: "Rust",
            espectadores: 172.315,
            categorias: ["Shooter en primera persona"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            name: "League of Legends",
            espectadores: 1800.315,
            categorias: ["RPG", 'Estrategia', 'MOBA'],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            name: "Fornite",
            espectadores: 200.000,
            categorias: ["Shooter", 'RPG'],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
            name: "Call of Duty: War Zone",
            espectadores: 520.589,
            categorias: ["Shooter en primera persona"],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/2397_IGDB-285x380.jpg",
            name: "Halo: Combat Evolved",
            espectadores: 115,
            categorias: ["Shooter en primera persona"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/322503446_IGDB-285x380.jpg",
            name: "Resident Evil 4",
            espectadores: 172.315,
            categorias: ["Shooter", 'Puzle'],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg",
            name: "Diablo IV",
            espectadores: 315,
            categorias: ["RPG", 'Acción', 'Terror'],
            isnew: true
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/941530474_IGDB-285x380.jpg",
            name: "Mario Kart 8 Deluxe",
            espectadores: 199.357,
            categorias: ["Carreras o conducción"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/459064_IGDB-285x380.jpg",
            name: "Cuphead",
            espectadores: 415,
            categorias: ["Shooter", 'Plataformas'],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/13389-285x380.jpg",
            name: "Age of Empires II",
            espectadores: 671,
            categorias: ["Estrategía"],
            isnew: false
        },
        {
            picture: "https://static-cdn.jtvnw.net/ttv-boxart/538054672_IGDB-285x380.jpg",
            name: "Tekken 8",
            espectadores: 172.310,
            categorias: ["Lucha", 'Acción'],
            isnew: true
        }
    ]

    return (
        <section id="main" className="bg-[#090909] m-8">
            <div id="title" className="mb-[1rem] w-full">
                <h1 className="text-slate-100 font-bold text-[55px]">Explorar</h1>
            </div>

            <div id="categories" className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-x-2 md:gap-y-5">
                <a href="#" className="flex items-center md:gap-4 lg:gap-6 bg-[#5c16c5] h-[45px] p-5 rounded-[6px] hover:bg-[#531da5]">
                    <p className="text-slate-100 font-bold text-[30px]">Juegos</p>
                    <img src="https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg" alt="control" />
                </a>
                <a href="#" className="flex items-center md:gap-[5rem] lg:gap-[6rem] bg-[#5c16c5] h-[45px] p-5 rounded-[6px] hover:bg-[#531da5]">
                    <p className="text-slate-100 font-bold text-[30px]">IRL</p>
                    <img src="https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg" alt="micro" />
                </a>
                <a href="#" className="flex items-center md:gap-4 lg:gap-6 bg-[#5c16c5] h-[45px] p-5 rounded-[6px] hover:bg-[#531da5]">
                    <p className="text-slate-100 font-bold text-[30px]">Música</p>
                    <img src="https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg" alt="audifonos" />
                </a>
                <a href="#" className="flex items-center md:gap-2 lg:gap-4 bg-[#5c16c5] h-[45px] p-5 rounded-[6px] hover:bg-[#531da5]">
                    <p className="text-slate-100 font-bold text-[30px]">Creative</p>
                    <img src="https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg" alt="pintura" />
                </a>
                <a href="#" className="flex items-center md:gap-4 lg:gap-6 bg-[#5c16c5] h-[45px] p-5 rounded-[6px] hover:bg-[#531da5]">
                    <p className="text-slate-100 font-bold text-[30px]">Esports</p>
                    <img src="https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg" alt="copa" />
                </a>
            </div>

            <div id="selection" className="hidden md:mt-[3rem] md:flex gap-6">
                <a href="#" className="text-[18px] p-1 font-bold text-[#bf94ff] border-b-purple-400 border-b-2 items-center h-full flex">Categorías</a>
                <a href="#" className="text-[18px] p-1 font-bold text-slate-100 items-center h-full flex hover:text-[#bf94ff]">Canales en directo</a>
            </div>

            <div id="videogames" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 p-2 md:px-3 w-full justify-items-center">
                {
                    videogames.map((videogame, index) => {
                        return (<Videogame
                            key={index}
                            picture={videogame.picture}
                            name={videogame.name}
                            espectadores={videogame.espectadores}
                            categorias={videogame.categorias}
                            isnew={videogame.isnew}
                        />
                        )
                    })
                }
            </div>
        </section>
    )
}