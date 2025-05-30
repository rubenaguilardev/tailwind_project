export default function Feature() {
    return(
        <main>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-pretty text-slate-800 sm:text-5xl lg:text-balance">How it works</h2>
                    <p className="mt-6">Our bootcamp follows a step-by-step, guided approach, breaking down complex concepts into manageable sections, ensuring steady progress and confidence as you build your full-stack application.</p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div className="relative pl-16">
                        <dt className="text-lg font-bold text-slate-800">
                            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-500">
                                <ion-icon className="size-6 text-white" name="play-circle-outline"></ion-icon>
                            </div>
                            High quality
                        </dt>
                        <dd className="mt-2">The bootcamp delivers high-quality, visually engaging videos, with animations and clear explanations, perfect for visual learners.</dd>
                        </div>
                        <div className="relative pl-16">
                        <dt className="text-lg font-bold text-slate-800">
                            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-500">
                                <ion-icon className="size-6 text-white" name="search-outline"></ion-icon>
                            </div>
                            Detailed
                        </dt>
                        <dd className="mt-2">Every concept is taught in comprehensive detail, ensuring students understand thoroughly, with no confusion left behind.</dd>
                        </div>
                        <div className="relative pl-16">
                        <dt className="text-lg font-bold text-slate-800">
                            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-500">
                                <ion-icon className="size-6 text-white" name="list-outline"></ion-icon>
                            </div>
                            Structured
                        </dt>
                        <dd className="mt-2">The course is structured to guide you through building a full-stack application, providing a clear, start-to-finish understanding.</dd>
                        </div>
                        <div className="relative pl-16">
                        <dt className="text-lg font-bold text-slate-800">
                            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-500">
                                <ion-icon className="size-6 text-white" name="document-outline"></ion-icon>
                            </div>
                            Certified
                        </dt>
                        <dd className="mt-2">Earn a recognized certification that validates your full-stack skills, giving you the edge and confidence to secure your dream job.</dd>
                        </div>
                    </dl>
                    </div>
                </div>
            </div>
        </main>
    )
}