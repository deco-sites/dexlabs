import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useScroll } from "site/sdk/useScroll.ts";

/**
 * @title {{text}}
 */
export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

export interface Props {
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */
    title?: string;
    /**
     * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
     */
    description?: string;
    image?: ImageWidget;
    placement?: "left" | "right";
    cta?: CTA[];
}

const PLACEMENT = {
    left: "flex-col text-left lg:flex-row-reverse",
    right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
    title = "Click here to tweak this text however you want.",
    description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
    image,
    placement = "left",
    cta = [
        { id: "change-me-1", href: "/", text: "Change me", outline: false },
        { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
}: Props) {
    const scroll = useScroll();
    const scrollTransition = 20;
    const scrolled = scroll.value > scrollTransition;
    const transitionClass = "transition-all duration-1000 ease-in-out";

    return (
        <nav
            id="heroContainer"
            class={`lg:container lg:mx-auto mx-4 ${transitionClass} ${scrolled && 'scale-75'}`}
        >
            <div class="flex flex-col items-center gap-8">
                <div
                    class={`flex w-full xl:container xl:mx-auto ${transitionClass} ${scrolled ? 'py-0' : 'py-20'} mx-5 md:mx-10 z-10 ${image
                        ? PLACEMENT[placement]
                        : "flex-col items-center justify-center text-center"
                        } ${!scrolled && 'lg:pt-24'} gap-12 md:gap-20 items-center`}
                >
                    {image && (
                        <Image
                            width={640}
                            class="w-full lg:w-1/2 object-fit"
                            sizes="(max-width: 640px) 100vw, 30vw"
                            src={image}
                            alt={image}
                            decoding="async"
                            loading="lazy"
                        />
                    )}
                    <div
                        class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${image
                            ? "lg:w-1/2 lg:max-w-xl"
                            : "flex flex-col items-center justify-center lg:max-w-4xl"
                            }`}
                    >
                        <div
                            class="inline-block lg:text-[80px] text-4xl leading-none font-medium font-semibold text-primary"
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                        >
                        </div>
                        <p class="text-lg text-info md:text-28 leading-[150%]">
                            {description}
                        </p>
                        <div class="flex items-center gap-3 flex-wrap justify-center">
                            {cta?.map((item) => (
                                <a
                                    key={item?.id}
                                    id={item?.id}
                                    href={item?.href}
                                    target={item?.href.includes("http") ? "_blank" : "_self"}
                                    class={`overflow-hidden font-normal btn btn-primary px-0 font-medium rounded-full min-h-10 h-10 text-lg hover:bg-secondary ${item.outline && "btn-outline"
                                        }`}
                                >
                                    <div class={`flex flex-col px-4 relative hover:-translate-y-full transition-transform duration-500 ease-in-out`}>
                                        <span class={`${item.outline ? 'text-primary' : 'text-secondary'}`}>{item?.text}</span>
                                        <span class={`absolute top-full ${item.outline ? 'text-secondary' : 'text-primary'}`}>{item?.text}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
