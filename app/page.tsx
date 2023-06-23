'use client'
import Image from 'next/image'
import Timer from "@/app/timer/timer.component";


export default function Home() {
    return (
    <main>
        <div className={'timer'}>
            <Timer/>
        </div>
        <footer className={'footer'}>
            <p>made by <a href={'https://www.reddit.com/user/VanDeny/'} target='_blank'>u/VanDeny</a></p>
            <p>fuck <a href={'https://www.reddit.com/user/spez/'} target='_blank'>u/Spez</a></p>
        </footer>
    </main>
  )
}
