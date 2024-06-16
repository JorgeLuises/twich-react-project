import WestIcon from '@mui/icons-material/West';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Channel from './Channel';

export default function Aside () {
    const channels = [
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Abby",
            channel: "Mixwel",
            videogame: "League of legends",
            online: true,
            viewers: 5000
        },
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Marco",
            channel: "Crystal",
            videogame: "Apex",
            online: false,
            viewers: 5000
        },
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Xavier",
            channel: "rivers_gg",
            videogame: "Call of Duty",
            online: true,
            viewers: 508942
        },
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Staryuuki",
            channel: "Staryuuki",
            videogame: "Rust",
            online: true,
            viewers: 15085
        },
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Elxocas",
            channel: "elxocas",
            videogame: "Rust",
            online: false,
            viewers: 5000
        },
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Federico",
            channel: "Fedewolf",
            videogame: "King of figthers",
            online: true,
            viewers: 898995
        },
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Abby",
            channel: "Mixwel",
            videogame: "League of legends",
            online: true,
            viewers: 5000
        },
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Marco",
            channel: "Crystal",
            videogame: "Apex",
            online: false,
            viewers: 5000
        },
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Xavier",
            channel: "rivers_gg",
            videogame: "Call of Duty",
            online: true,
            viewers: 508942
        },
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Staryuuki",
            channel: "Staryuuki",
            videogame: "Rust",
            online: true,
            viewers: 15085
        },
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Elxocas",
            channel: "elxocas",
            videogame: "Rust",
            online: false,
            viewers: 5000
        },
        {
            avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Federico",
            channel: "Fedewolf",
            videogame: "King of figthers",
            online: true,
            viewers: 898995
        }
    ]
    
    return (
        <aside className='hidden sm:block bg-[#1f1f23]  '>
            
            <div id="recomend-section" className=''>
                <div id="heart-icon" className='p-4 lg:hidden'>
                    <FavoriteBorderIcon
                        sx={{
                            color:"white",
                            fontSize:25
                        }}
                    />
                </div>

                <div className='hidden lg:flex gap-2 m-2 items-center'>
                    <p className='text-slate-100 text-[13px] font-bold'>CANALES RECOMENDADOS</p>
                    <button className='text-slate-100 p-0 rounded-[5px] text-[14px] hover:bg-[#525151]'>
                        <WestIcon
                            sx={{
                                color:"white",
                                fontSize: 20,
                            }}
                        />
                    </button>
                </div>
            </div>

            <div id="channels" className="ml-1">
                {
                    channels.map((streamer) => {
                        return (<Channel
                            key={`channel-${streamer.channel}`}
                            avatar={streamer.avatar}
                            channel={streamer.channel}
                            videogame={streamer.videogame}
                            online={streamer.online}
                            viewers={streamer.viewers}
                        />);
                    })};
            </div>
        </aside>
    )
}