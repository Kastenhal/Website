export function Information({children}: {children: React.ReactNode}) {
    return(
        <div className="grow place-content-center">
            {children}
        </div>
    );
}

export function Name({children}: {children: React.ReactNode}) {
    return(
        <div className="text-xl">
            {children}
        </div>
    );
}

export function Title({children}: {children: React.ReactNode}) {
    return(
        <div className="text-xl font-bold">
            {children}
        </div>
    );
}

export function Location({children}: {children: React.ReactNode}) {
    return(
        <div className="text-m">
            {children}
        </div>
    );
}