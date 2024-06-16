export default function Tag (props) {
    return (
        <div className="bg-[#29292E] rounded-lg p-1 text-[12px] h-5 items-center flex px-3 hover:bg-slate-800">
			{props.categoria}
		</div>
    )
}