import LogoLink from "./logoLink";

export function UserCardLoading(data) {
    return (
        <div className="flex flex-col items-center space-x-2 p-5 dark:border border-solid border-border rounded-lg shadow-outer w-6/12 max-w-lg animate-pulse">
            <div className="flex items-center justify-start gap-4 w-full mb-4">
                <div
                    className="rounded-full w-24 h-24 border border-solid border-border bg-gray-200 dark:bg-gray-700"
                />
                <div>
                    <h2 className="text-2xl h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded-full mb-2.5"></h2>
                    <div className="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded-full mb-2.5"></div>
                    <p className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded-full mb-2.5"></p>
                </div>
            </div>


            <div className="w-4/6 mb-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>

            <div className="flex w-full justify-evenly bg-muted p-4 mb-4 rounded-lg">
                <p className="flex flex-col text-muted-foreground">
                    Repos
                    <strong className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded-full"></strong>
                </p>
                <p className="flex flex-col text-muted-foreground">
                    Followers
                    <strong className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded-full"></strong>
                </p>
                <p className="flex flex-col text-muted-foreground">
                    Following
                    <strong className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded-full"></strong>
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

export default UserCardLoading;