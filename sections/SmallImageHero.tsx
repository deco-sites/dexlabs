import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import GlobalDesign from "site/components/GlobalDesign.tsx";

export interface Props {
    title: string;
    caption: string;
    tagline: string;
    image: ImageWidget;
    imageAlt?: string;
    href?: string;
}

export default function SmallImageHero({ title, caption, tagline, image, imageAlt, href }: Props) {
    return (
        <section>
            <GlobalDesign>
                <a
                    class="hover:scale-110 transition-transform cursor-pointer flex flex-col justify-center md:flex-row mx-auto max-w-[1240px] rounded-3xl mb-8 p-8 gap-4"
                    style="box-shadow: 0px 2px 12px 0px #14142B14;"
                    href={href || ""}
                >
                    <div class="text-primary text-center md:text-left">
                        <h2 class="font-semibold text-4xl">{title}</h2>
                        <p class="text-accent text-2xl pt-2 pb-8">{caption}</p>
                        <p class="text-accent font-light text-lg">{tagline}</p>
                    </div>
                    <div class="md:w-[600px] flex justify-center">
                        <Image
                            width={429}
                            src={image}
                            alt={imageAlt || ""}
                            class="object-contain"
                        />
                    </div>
                </a>
            </GlobalDesign>
        </section>
    )
}