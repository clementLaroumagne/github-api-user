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
                    <strong className="text-xl text-foreground">{data.public_repos}</strong>
                </p>
                <p className="flex flex-col text-muted-foreground">
                    Followers
                    <strong className="text-xl text-foreground">{data.followers}</strong>
                </p>
                <p className="flex flex-col text-muted-foreground">
                    Following
                    <strong className="text-xl text-foreground">{data.following}</strong>
                </p>

            </div>

            <div className="flex flex-wrap text-sm">


                {data.company ?
                    <LogoLink
                        link=""
                        logo="company.svg"
                    >
                        {data.company}
                    </LogoLink>
                    :
                    <LogoLink
                        link=""
                        logo="company.svg"
                    >
                        Not available
                    </LogoLink>
                }

                {data.location ?
                    <LogoLink
                        link={"https://www.google.fr/maps/place/" + data.location}
                        logo="location.svg"
                    >
                        {data.location}
                    </LogoLink>
                    :
                    <LogoLink
                        link=""
                        logo="location.svg"
                    >
                        Not available
                    </LogoLink>
                }

                {data.blog ?
                    <LogoLink
                        link={data.blog}
                        logo="website.svg"
                    >
                        {data.blog}
                    </LogoLink>
                    :
                    <LogoLink
                        link=""
                        logo="website.svg"
                    >
                        Not available
                    </LogoLink>
                }

                {data.twitter_username ?
                    <LogoLink
                        link={"https://twitter.com/" + data.twitter_username}
                        logo="x.svg"
                    >
                        {data.twitter_username}
                    </LogoLink>
                    :
                    <LogoLink
                        link=""
                        logo="x.svg"
                    >
                        Not available
                    </LogoLink>
                }
            </div>
        </div>
    )
}

export default UserCard;
