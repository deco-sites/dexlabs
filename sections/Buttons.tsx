export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}


export interface Props {
    cta: CTA[];
}

export default function Buttons({ cta }: Props) {
    return <div class="flex items-center gap-3 flex-wrap justify-center pt-9 pb-24">
        {cta?.map((item) => (
            <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary font-medium rounded-full min-h-10 h-10 text-lg hover:bg-secondary text-secondary hover:text-primary ${item.outline && "btn-outline"
                    }`}
            >
                {item?.text}
            </a>
        ))}
    </div>
}