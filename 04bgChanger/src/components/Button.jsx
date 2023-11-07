

function Button(
    {
        bgColor="bg-red-500",
        btnName="Red",
        onClick=() => {},
        txColor = "text-white",
        brdr = "",
    }
) {
    let cls = bgColor + " rounded-3xl " + txColor + " " +  brdr
    return (
        <>
            <button className={cls} onClick={onClick}> {btnName} </button>
        </>
    )
}

export default Button
