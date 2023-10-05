
export const ProjectTag = ({name, onClick, isSlected}) => {

    const buttonStyles = isSlected 
    ? "text-white border-[#419197]"
    : "text-[#ADB7B] border-slate-600 hover:border-white"


  return (
    <button 
        onClick={() => onClick(name)}
        className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    >
        {name}
    </button>
  )
}
