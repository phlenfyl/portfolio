import Image from "next/image"

export default function Preloader() {

    return(
        <div className="flex items-center justify-center h-[100vh] w-full">
            <div className="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
                <Image src="/meshez.png" width={100} height={100} alt="logo"  />
            </div>
        </div>
    )

}