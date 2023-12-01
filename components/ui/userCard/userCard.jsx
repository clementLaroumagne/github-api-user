import Link from "next/link"
import Image from 'next/image'
import { LogoLink } from "./logoLink"

let convertDate = (date) => {
    // Créer un objet Date à partir de la chaîne de caractères
    var dateObject = new Date(date)

    // Options de formatage pour obtenir "18 Nov 2023"
    var options = { day: 'numeric', month: 'short', year: 'numeric' }

    // Formater la date selon les options
    var formattedDate = dateObject.toLocaleDateString('en-SU', options)

    // Afficher le résultat
    formattedDate = formattedDate.replace(',', ' ')
    console.log(formattedDate);
    return formattedDate
}

export function UserCard(data) {
    return (
        <div className="flex flex-col items-center space-x-2 p-5 dark:border border-solid border-border rounded-lg shadow-outer w-6/12 max-w-lg">
            <div className="flex items-center justify-start gap-4 w-full mb-4">
                <img
                    src={data.avatar_url}
                    alt={data.name}
                    className="rounded-full w-24 h-24 border border-solid border-border"
                />
                <div>
                    <h2 className="text-2xl">{data.name}</h2>
                    <a href={data.html_url} target="_blank" className="text-primary">{"@" + data.login}</a>
                    <p>Joined {convertDate(data.created_at)}</p>
                </div>
            </div>


            <p
                className={"w-full mb-4" + (data.bio == undefined ? " text-muted-foreground" : "")}
            >{data.bio != undefined ? data.bio : "This profile as no bio"}
            </p>

            <div className="flex w-full justify-evenly bg-muted p-4 mb-4 rounded-lg">
                <p className="flex flex-col text-muted-foreground">
                    Repos
                    <strong className="text-xl">{data.public_repos}</strong>
                </p>
                <p className="flex flex-col text-muted-foreground">
                    Followers
                    <strong className="text-xl">{data.followers}</strong>
                </p>
                <p className="flex flex-col text-muted-foreground">
                    Following
                    <strong className="text-xl">{data.following}</strong>
                </p>

            </div>

            <div className="flex flex-wrap text-sm">
                <div className="w-1/2">
                    <div className={"flex items-center gap-2 justify-start p-4" + (data.location == undefined ? " text-muted-foreground" : '')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>

                        <p className="truncate align-middle">{data.location ? data.location : "Not available"}</p>
                    </div>
                </div>


                <div className="w-1/2">
                    <div className={"flex items-center gap-2 justify-start p-4" + (data.location == undefined ? " text-muted-foreground" : '')}>
                        <p className="text-xl align-middle">𝕏</p>
                        <p className="truncate align-middle">{data.location ? data.location : "Not available"}</p>
                    </div>
                </div>

                <div className="w-1/2">
                    {console.log(data.blog == "")}
                    <div className={"flex items-center gap-2 justify-start p-4" + (data.blog == "" ? " text-muted-foreground" : '')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor" className="shrink-0"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" /></svg>


                        <p className="truncate align-middle">{data.blog ? data.blog : "Not available"}</p>
                    </div>
                </div>

                {/* <div className="w-1/2">
                    <div className={"flex items-center gap-2 justify-start p-4" + (data.company == undefined ? " text-muted-foreground" : '')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z" /></svg>

                        <a className="truncate align-middle" href={data.company ? "https://github.com/" + data.company.replace("@", "") : ""} target="blank">{data.company ? data.company : "Not available"}</a>
                    </div>
                </div> */}

                {console.log(data.company)}
                <LogoLink
                    link="https://github.com/"
                    content={data.company ? data.company : "Not available"}
                    logo={`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z" /></svg>`}
                />
            </div>
        </div>
    )
}

export default UserCard;
