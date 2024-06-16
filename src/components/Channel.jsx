import clsx from "clsx";

export default function Channel (props) {
    return (
        <a href="#" id="channel" className="flex justify-between items-center min-h-8 py-[5px] px-[10px] hover:bg-[#2f2f2f]">
            <div id="info-channel" className="flex items-center gap-2">
                <img src={props.avatar} alt="avatar" className="rounded-full size-[30px]"/>
                <div id="channel-text" className={clsx("flex text-[14]", {"flex-col": props.online === true, })}>
                    <h3 className={clsx("font-medium text-slate-100 hidden lg:block", {"text-[14]": props.online === false, })}>{props.channel}</h3>
                    {props.online && (<p className="text-[13px] text-slate-400 hidden lg:block">{props.videogame}</p>)}
                    
                </div>
            </div>
            {props.online && (
                <div className="flex items-center gap-1 text-[13px]">
                    <div className="rounded-full size-2 bg-red-600 hidden lg:block"></div>{" "}
                    {props.online && (<p className="hidden lg:block text-slate-100">{props.viewers}</p>)}
                </div>
            )}
            {!props.online && (<p className="hidden lg:block text-slate-100 text-[13px]">Offline</p>)}
        </a>
    );
}