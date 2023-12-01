
export function LogoLink(link, content, logo) {
    console.log(content)
    if (content) {
        return (
            <>
                <div className={"flex items-center gap-2 justify-start p-4"}>
                    {logo}
                    <a href={link} target="_blank" className="trucate align-middle">
                        {/* {content} */}
                    </a>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={"flex items-center gap-2 justify-start p-4 text-muted-foreground"}>
                    {logo}
                    <p className="trucate align-middle">
                        Not available
                    </p>
                </div>
            </>
        )
    }
}

export default LogoLink;