import type { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";
import { useScroll } from "site/sdk/useScroll.ts";

export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

/**
 * @title {{title}}
 */
export interface ItemVideo {
    title: string;
    image: VideoWidget;
    alt?: string;
}

export interface Props {
    backgroundImage?: ImageWidget;
    videos?: ItemVideo[];
    cta?: CTA[];
}

export default function ImageSelector({ backgroundImage, videos = [], cta }: Props) {
    const [selectedImage, setSelectedImage] = useState(0);

    const scroll = useScroll();
    const scrollTransition = 20;
    const scrolled = scroll.value > scrollTransition;
    const transitionClass = "transition-all duration-1000 ease-in-out";

    function changeImage(imageIndex: number) {
        setSelectedImage(imageIndex);
        const videoContainer = document.getElementById('videoContainer');

        if (videoContainer) {
            videoContainer.classList.add('animate-pop-up');
            setTimeout(() => {
                videoContainer.classList.remove('animate-pop-up');
            }, 500);
        }
    }

    return <section class="overflow-hidden">
        <div class={`${transitionClass} ${scrolled ? 'max-w-[1230px] h-[620px]' : 'max-w-full mt-24 h-[816px]'} mx-auto relative sm:p-8`}>
            {backgroundImage && <div class="absolute w-full h-full -z-10 left-0 top-0"><Image
                src={backgroundImage}
                alt="Background Image"
                width={1440}
                height={816}
                class={`w-full h-full object-cover ${transitionClass} ${scrolled && 'rounded-xl lg:rounded-[42px]'}`}
            /></div>}
            <div class={`flex justify-end max-w-[1440px] mx-auto ${transitionClass} ${!scrolled && 'opacity-0'}`}>
                <div
                    class="min-h-[52px] flex flex-wrap justify-center lg:justify-end gap-4 border border-primary rounded-lg lg:rounded-full bg-neutral mb-6"
                >
                    {videos.length && videos.map((image, index) => (
                        <button
                            onClick={() => changeImage(index)}
                            class={`text-lg rounded-full px-6  ${index == selectedImage ? 'bg-primary text-secondary' : 'text-primary hover:text-info'} !text-base`}
                        >
                            {image.title}
                        </button>
                    ))}
                </div>
            </div>

            <div class={`animate-fade-in relative w-full max-h-[600px] flex justify-center z-10 mx-auto ${transitionClass} ${scrolled ? 'max-w-[870px] h-[490px]' : 'max-w-[1440px]'}`}>
                <div id="videoContainer" class={`absolute ${transitionClass} ${scrolled ? 'top-0' : 'top-[-200px]'}`}>
                    <video
                        src={videos[selectedImage].image}
                        alt={videos[selectedImage].alt || ""}
                        width="1441"
                        height="720"
                        autoPlay
                        playsInline
                        muted
                        loading="lazy"
                        loop
                        class={`h-full object-cover md:object-contain`}
                    />
                </div>
            </div>
        </div>

        <div class="flex items-center gap-3 flex-wrap justify-center pt-10">
            {cta?.map((item) => (
                <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`overflow-hidden font-normal btn btn-primary px-0 font-medium rounded-full min-h-10 h-10 text-lg hover:bg-secondary text-secondary hover:text-primary ${item.outline && "btn-outline"
                        }`}
                >
                    <div class={`flex flex-col px-4 relative hover:-translate-y-full transition-transform duration-500 ease-in-out`}>
                        <span class={`${item.outline ? 'text-primary' : 'text-secondary'}`}>{item?.text}</span>
                        <span class={`absolute top-full ${item.outline ? 'text-secondary' : 'text-primary'}`}>{item?.text}</span>
                    </div>
                </a>
            ))}
        </div>
    </section>
}