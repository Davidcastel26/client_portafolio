
export const TabButton = ({ active, selectTab, children}) => {

    const btnClasses = active ? 'text-white border-b border-[#419197]' : 'text-[#ADB7BE] border-b'

  return (
    <div>
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold ${btnClasses}`}>
                {children}
            </p>
        </button>
    </div>
  )
}

