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
        <h3 class="text-center text-xl text-accent font-light">{titleCaption || ""}</h3>
        <h1 class="py-5 font-semibold text-3xl text-[60px] leading-[64px] text-center text-primary">{title}</h1>
        <h2 class="max-w-[630px] mx-auto text-primary text-2xl font-normal leading-7 text-center">{caption || ""}</h2>
        <div class="flex flex-wrap justify-center mt-12 gap-12">
            {items.length && items.map((item) => (<div class="w-[365px] flex flex-col items-left text-primary">
                <div class="h-[80px] flex item-bottom">
                    <Image
                        width={80}
                        alt={item.imageAlt || ""}
                        src={item.image}
                    />
                </div>
                <h2 class="font-semibold text-3xl py-4">{item.title}</h2>
                <p class="text-2xl">{item.description}</p>
            </div>))}
        </div>
    </section>
}