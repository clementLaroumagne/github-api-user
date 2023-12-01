
export function LogoLink(link, content, logo) {
    return (
        <>
            <div className={"flex items-center gap-2 justify-start p-4"}>
                {logo}
                <a href={link} target="_blank" className="trucate align-middle">
                    {content}
                </a>
            </div>
        </>
    )
}

export default LogoLink;