import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{alt}}
 */
export interface ISectionImage {
    image: ImageWidget;
    alt?: string;
}

/**
 * @title {{Title}}
 */
export interface IHeroSection {
    Title: string;
    Text: string;
    ImagesPerLine?: 1 | 2 | 3 | 4;
    Images?: ISectionImage[];
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
    title: string;
    titleCaption?: string;
    caption?: string;
    cta?: CTA[];
    heroSections?: IHeroSection[];
}

export default function ({ title, titleCaption, caption, cta, heroSections }: Props) {
    const imageWidth = {
        1: 'w-full',
        2: 'w-1/2',
        3: 'w-[33%]',
        4: 'w-1/4'
    };
    return <section class="bg-primary max-w-[1378px] md:rounded-[40px] mx-auto p-4 md:p-[100px] text-center lg:text-left">
        <h4 class="text-lg md:text-xl text-secondary font-light">{titleCaption || ""}</h4>
        <h2 class="py-5 font-medium text-3xl md:text-[60px] md:leading-[64px] text-secondary">{title}</h2>
        <h3 class="mx-auto text-secondary text-xl md:text-2xl font-normal">{caption || ""}</h3>
        <div class="flex items-center gap-3 flex-wrap justify-center lg:justify-start py-10">
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
        <div class="flex flex-wrap w-full justify-center xl:justify-between mt-8 gap-4 xl:gap-0">
            {heroSections?.map((section) => (
                <div class="p-6 rounded-xl border border-warning max-w-[356px] flex flex-col gap-6">
                    <h2 class="text-secondary font-semibold text-3xl">{section.Title}</h2>
                    <p class="text-secondary font-normal text-xl">{section.Text}</p>
                    <div class="flex flex-wrap justify-center">
                        {section.Images?.map((img) => (
                            <div class={`${imageWidth[section.ImagesPerLine || 1]} p-1`}>
                                <Image
                                    width={360}
                                    src={img.image}
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
    </section>
}