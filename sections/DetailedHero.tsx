import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import GlobalDesign from "site/components/GlobalDesign.tsx";

/**
 * @title {{alt}}
 */
export interface Image {
    image?: ImageWidget;
    alt?: string;
}

/**
 * @title {{Title}}
 */
export interface IHeroSection {
    Title: string;
    TitleIcon?: Image;
    Text: string;
    ImagesPerLine?: 1 | 2 | 3 | 4;
    Images?: Image[];
    border?: boolean;
}

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
    id?: string;
    title: string;
    titleCaption?: string;
    caption?: string;
    cta?: CTA[];
    heroSections?: IHeroSection[];
}

export default function ({ title, titleCaption, caption, cta, heroSections, id }: Props) {
    const imageWidth = {
        1: 'w-full',
        2: 'w-1/2',
        3: 'w-[33%]',
        4: 'w-1/4'
    };
    return <section class="bg-primary" id={id || ""}>
        <div class="max-w-[1140px] md:rounded-[40px] mx-auto py-4 md:py-12 text-center lg:text-left">

            <h4 class="text-lg md:text-xl text-secondary font-light">{titleCaption || ""}</h4>
            <h2 class="pt-10 pb-6 font-medium text-3xl md:text-[60px] md:leading-[64px] text-secondary">{title}</h2>
            <h3 class="mx-auto text-secondary text-xl md:text-2xl font-normal">{caption || ""}</h3>
            <div class="flex items-center gap-3 flex-wrap justify-center lg:justify-start pt-10 pb-8">
                {cta?.map((item) => (
                    <a
                        key={item?.id}
                        id={item?.id}
                        href={item?.href}
                        target={item?.href.includes("http") ? "_blank" : "_self"}
                        class={`overflow-hidden font-normal btn px-0 font-semibold rounded-full min-h-10 h-10 text-lg text-primary border-none transition-all duration-200
                                ${item.outline ? 'bg-success hover:bg-success' : 'bg-secondary hover:bg-secondary'}`
                        }
                    >
                        <div class={`flex flex-col px-4 relative hover:-translate-y-full transition-transform duration-500 ease-in-out`}>
                            <span class={` ${item.outline ? 'text-primary' : 'text-primary'}`}>
                                {item?.text}
                            </span>
                            <span class={`absolute top-full ${item.outline ? 'text-primary' : 'text-primary'}`}>
                                {item?.text}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
            <div class="flex flex-wrap w-full justify-center 2xl:justify-between gap-4 xl:gap-0">
                {heroSections?.map((section) => (
                    <div class={`p-6 rounded-xl max-w-[356px] flex flex-col gap-6 ${section.border && 'border border-warning'}`}>
                        <div class="flex gap-4">
                            {section.TitleIcon?.image && <Image
                                width={33}
                                src={section.TitleIcon.image}
                                alt={section.TitleIcon.alt || ""}
                            />}
                            <h2 class="text-secondary font-semibold text-3xl">{section.Title}</h2>
                        </div>
                        <p class="text-secondary font-normal text-xl">{section.Text}</p>
                        <div class="flex flex-wrap justify-center">
                            {section.Images?.map((img) => (
                                <div class={`${imageWidth[section.ImagesPerLine || 1]} p-1`}>
                                    <Image
                                        width={360}
                                        src={img.image || ""}
                                        alt={img.alt || ""}
                                    />
                                </div>
                            )
                            )}
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    </section>
}