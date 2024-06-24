export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

export interface Props {
    title: string;
    titleCaption?: string;
    caption?: string;
    cta?: CTA[];
}

export default function SimpleHero({ title, titleCaption, caption, cta }: Props) {
    return <section class="bg-primary max-w-[965px] md:rounded-[40px] mx-auto p-4 md:p-10 text-center mb-28">
        <h4 class="text-lg md:text-xl text-secondary font-light">{titleCaption || ""}</h4>
        <h2 class="py-5 font-medium text-3xl md:text-[60px] md:leading-[64px] text-secondary">{title}</h2>
        <h3 class="mx-auto text-secondary text-xl md:text-2xl font-normal">{caption || ""}</h3>
        <div class="flex items-center gap-3 flex-wrap justify-center py-10">
            {cta?.map((item) => (
                <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-normal btn font-semibold rounded-full min-h-10 h-10 text-lg text-primary border-none transition-all duration-200
                        ${item.outline ? 'bg-success hover:bg-secondary' : 'bg-secondary hover:bg-success'}`
                    }
                >
                    {item?.text}
                </a>
            ))}
        </div>
    </section>
}