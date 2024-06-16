import Twitch from "./TwichLogo";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export default function Navbar () {
    return (
        <nav id="navbar" className="w-full flex justify-between items-center px-4 bg-[#18181b]">

            <div id="navbar_logo" className="flex h-full gap-4 items-center">
                <Twitch height="30px" width="30px"/>
                <a href="#" className="text-[14px] p-1 font-semibold text-[#bf94ff] border-b-purple-400 border-b-2 items-center h-full flex ">Explorar</a>
                <a href="#" id="icono" className="hover:bg-[#404040] p-2">
                    <MoreVertIcon 
                        sx={{
                            color:"white",
                            fontSize: 28
                        }}
                    />
                </a>
            </div>

            <div id="navbar_search" className="hidden items-center md:flex md:items-center md:w-auto">
                <input type="text" placeholder="Buscar" className="bg-[#18181b] p-[0.5rem] rounded-l-lg border-[2px] border-solid border-[#535252bc] bg-transparent font-semibold text-[#535252bc] text-2x1 hover:border-[3px]"/>
                <div id="search-icono" className="bg-[#404040] p-2 rounded-r-lg hover:bg-[#525151]">
                    <SearchIcon 
                        sx={{
                            color:"white",
                            fontSize: 25
                        }}
                    />
                </div>
            </div>

            <div id="navbar_login" className="hidden md:flex items-center gap-4">
                <a href="#" id="login_mail-icon" className="hover:bg-[#404040] p-1">
                    <MailIcon
                        sx={{
                            color: "white",
                            fontSize: 20
                        }}
                    />
                </a>
                <button className="bg-[#404040] text-slate-100 p-1 rounded-[5px] text-[14px] hover:bg-[#525151]">Iniciar sesión</button>
                <button className="bg-[#9400ff] text-slate-100 p-1 rounded-[5px] text-[14px] hover:bg-[#8a57f8]">Registrarse</button>
                <a i href="#" d="login_user-icon" className="hover:bg-[#404040] p-1">
                    <PermIdentityIcon
                        sx={{
                            color: "white",
                            fontSize: 20
                        }}
                    />
                </a>                    
            </div>
        </nav>
    )
}