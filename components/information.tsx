import React from "react";

export function Information({children}: {children: React.ReactNode}) {
    return(
        <div className="flex flex-col grow place-content-center gap-1">
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

export function Pages({children}: {children: React.ReactNode}) {
    return(
        <div className="flex flex-row gap-8 min-h-8 place-content-center place-items-center">
            {children}
        </div>
    )
}