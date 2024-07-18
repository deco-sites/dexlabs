import { IRequestConnector } from "site/islands/ItemsSearcher.tsx"

export default function RequestConnector({ text, buttonText, buttonHref }: IRequestConnector) {
    return (
        <div class="flex flex-col items-center gap-8 mx-auto">
            <p
                class="max-w-[456px] text-2xl text-center text-primary"
            >
                {text || ""}</p>
            <a
                class="font-normal btn btn-primary font-medium rounded-full min-h-10 h-10 text-lg bg-secondary hover:bg-primary text-primary hover:text-secondary"
                href={buttonHref}
            >{buttonText}</a>
        </div>
    )
}