import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";
import { useScroll } from "site/sdk/useScroll.ts";

/**
 * @title {{title}}
 */
export interface ItemImage {
    title: string;
    image: ImageWidget;
    alt?: string;
}

export interface Props {
    backgroundImage?: ImageWidget;
    images?: ItemImage[];
}

export default function ImageSelector({ backgroundImage, images = [] }: Props) {
    const [selectedImage, setSelectedImage] = useState(0);

    const scroll = useScroll();
    const scrollTransition = 20;
    const scrolled = scroll.value > scrollTransition;
    const transitionClass = "transition-all duration-1000 ease-in-out";

    return <section class="overflow-hidden">

        <div class={`${transitionClass} ${scrolled ? 'max-w-[1440px]' : 'max-w-full mt-24'} mx-auto relative min-h-[816px] p-8`}>
            {backgroundImage && <div class="absolute w-full -z-10 left-0 top-0"><Image
                src={backgroundImage}
                alt="Background Image"
                width={1440}
                height={816}
                class={`w-full object-cover ${transitionClass} ${scrolled && 'rounded-xl lg:rounded-[42px]'}`}
            /></div>}
            <div class={`flex justify-end max-w-[1440px] mx-auto ${transitionClass} ${!scrolled && 'opacity-0'}`}>
                <div class="min-h-14 flex flex-wrap justify-center lg:justify-end gap-4 border border-primary rounded-lg lg:rounded-full bg-neutral mb-6">
                    {images.length && images.map((image, index) => (
                        <button
                            onClick={() => setSelectedImage(index)}
                            class={`text-lg rounded-full px-6  ${index == selectedImage ? 'bg-primary text-secondary' : 'text-primary hover:text-info'}`}
                        >
                            {image.title}
                        </button>
                    ))}
                </div>
            </div>

            <div class={`relative w-full max-h-[600px] flex justify-center z-10`}>
                <div class={`absolute ${transitionClass} ${scrolled ? 'top-0' : 'top-[-200px]'}`}>
                    <Image
                        src={images[selectedImage].image}
                        alt={images[selectedImage].alt || ""}
                        width={1280}
                        class={`object-cover md:object-contain`}
                    />
                </div>
            </div>
        </div>
    </section>
}