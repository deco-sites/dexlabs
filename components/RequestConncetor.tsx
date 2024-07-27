import { IRequestConnector } from "site/islands/ItemsSearcher.tsx"

export default function RequestConnector({ text, buttonText, buttonHref }: IRequestConnector) {
    return (
        <div class="flex flex-col items-center gap-8 mx-auto">
            <p
                class="max-w-[456px] text-2xl text-center text-primary"
            >
                {text || ""}</p>
            <a

                href={buttonHref}
                target={buttonHref.includes("http") ? "_blank" : "_self"}
                class={`overflow-hidden font-normal btn btn-primary px-0 font-medium rounded-full min-h-10 h-10 text-lg bg-secondary hover:bg-secondary`}
            >
                <div class={`flex flex-col px-4 pb-0.5 relative hover:-translate-y-full transition-transform duration-500 ease-in-out`}>
                    <span class={`text-primary`}>{buttonText}</span>
                    <span class={`absolute top-full h-full text-primary`}>{buttonText}</span>
                </div>
            </a>
        </div>
    )
}