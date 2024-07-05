import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { VideoWidget } from "apps/admin/widgets.ts";
import { useScroll } from "site/sdk/useScroll.ts";

export interface Props {
    backgroundImage?: ImageWidget;
    video: VideoWidget;
}

export default function Video({ video, backgroundImage }: Props) {
    const scroll = useScroll();
    const scrollTransition = 20;
    const scrolled = scroll.value > scrollTransition;
    const transitionClass = "transition-all duration-1000 ease-in-out";

    return <section class="overflow-hidden">
        <div class={`relative mx-auto min-h-96 md:min-h-[690px] ${transitionClass} ${scrolled ? 'max-w-[1230px]' : 'max-w-full mt-24 '}`}>
            {backgroundImage && <div class={`absolute w-full -z-10 left-0 top-0 ${transitionClass} ${scrolled ? 'h-[590px]' : 'h-[850px]'}`}><Image
                src={backgroundImage}
                alt="Background Image"
                width={1440}
                height={816}
                class={`w-full object-cover h-full ${transitionClass} ${scrolled && 'rounded-xl lg:rounded-[42px]'}`}
            /></div>}
            <div class={`relative mx-auto ${transitionClass} ${scrolled ? 'max-w-[870px]' : 'max-w-[1440px]'}`}>
                <div class={`absolute ${transitionClass} ${scrolled ? 'top-9' : '-top-24'}`}>
                    <video
                        width="1441"
                        height="720"
                        autoPlay
                        playsInline
                        muted
                        loading="lazy"
                        loop
                        class="w-full h-full object-cover rounded-xl lg:rounded-[42px] mt-4"
                        style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5)"
                    >
                        <source src={video} type="video/mp4" />
                        <object data="" width="320" height="240">
                            <embed width="320" height="240" src={video} />
                        </object>
                    </video>
                </div>
            </div>
        </div>
    </section>
}