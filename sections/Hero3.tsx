import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{title}}
 */
export interface IHeroItem {
    image: ImageWidget;
    imageAlt?: string;
    title: string;
    description: string;
}

export interface Props {
    title: string;
    titleCaption?: string;
    caption?: string;
    items?: IHeroItem[];
}

export default function Hero3({ title, titleCaption, caption, items = [] }: Props) {
    return <section class="max-w-[1378px] mx-auto mb-20">
        <h3 class="text-center text-lg md:text-xl text-accent font-light">{titleCaption || ""}</h3>
        <h1 class="md:py-5 font-semibold text-3xl md:text-[60px] md:leading-[64px] text-center text-primary">{title}</h1>
        <h2 class="max-w-[630px] mx-auto text-primary text-xl md:text-2xl font-normal md:leading-7 text-center">{caption || ""}</h2>
        <div class="flex flex-wrap justify-center mt-12 gap-12">
            {items.length && items.map((item) => (<div class="w-2/5 md:w-[365px] flex flex-col items-center md:items-start text-primary">
                <div class="h-[60px] flex">
                    <Image
                        width={60}
                        alt={item.imageAlt || ""}
                        src={item.image}
                        class="h-full"
                    />
                </div>
                <h2 class="font-semibold text-xl md:text-2xl py-4">{item.title}</h2>
                <p class="text-base md:text-lg text-center md:text-left">{item.description}</p>
            </div>))}
        </div>
    </section>
}