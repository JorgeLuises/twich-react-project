import Tag from "./Tag";

export default function Videogame (props) {
    return (
        <div className="mt-4" id="card-video-game">
            <div className="hover:translate-x-1 hover:-translate-y-2 transition duration-100 relative">
                <img src={props.picture} alt="videogame-picture" className="max-w-full h-auto "/>
                {
                    props.isnew && (<p className="top-1 right-1 bg-[#FF75E6] rounded-2xl absolute p-[1px] px-2 text-[10px] text-black font-medium">
                        New</p>
                )}
            </div>

            <a href="#" className="flex flex-col py-2">
                <h6 className="text-base font-semibold hover:text-purple-500 text-slate-100">{props.name}</h6>
                <p className="text-[12px] text-slate-400">{props.espectadores} espectadores</p>
                <div className="flex gap-1 flex-wrap text-slate-100 mt-2">
                    {
                        props.categorias.map((categoria,index) => {
                            return (<Tag
                                key={index}
                                categoria={categoria}
                            />
                            )
                        })
                    }
                </div>
            </a>
        </div>
    )
}