
export function LogoLink(...props) {
    let logo = props[0].logo;
    // import Logo from {logo}n
    return (
        <>
            <div className={props[0].children == "Not available" ? "text-muted-foreground p-4 w-1/2 filter grayscale opacity-40" : " p-4 w-1/2"}>
                <a href={props[0].link == "" ? undefined : props[0].link} target="_blank" className=" align-middle w-full flex items-center gap-2 justify-start">
                <img className="w-6 h-6" src={props[0].logo} alt="" />
                    {/* <Logo/> */}
                    <p className="w-full truncate whitespace-nowrap">
                        {props[0].children}
                    </p>
                </a>
            </div>
        </>
    )
}

export default LogoLink;