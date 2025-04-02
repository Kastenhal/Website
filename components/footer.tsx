import Image from "next/image"

export function Footer({children}: {children: React.ReactNode}) {
    return(
        <div className="flex flex-row gap-8 grow-0 min-h-16">
            {children}
        </div>
    );
}

export function ExternalNavigator({href, icon}) {
    return(
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Image
                src={icon}
                width={16}
                height={16}
                alt="External navigator"
            />
        </a>
    )
}