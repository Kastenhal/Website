export function RootContainer({children}: {children: React.ReactNode}) {
    return(
        <div className="flex flex-col min-h-screen place-items-center font-mono">
            {children}
        </div>
    );
}