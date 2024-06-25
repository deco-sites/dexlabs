import { VideoWidget } from "apps/admin/widgets.ts";

export interface Props {
    video: VideoWidget;
}

export default function Video({ video }: Props) {
    return <section>
        <div class='max-w-[1440px] mx-auto'>
            <video
                width="1441"
                height="720"
                autoPlay
                playsInline
                muted
                loading="lazy"
                loop
                class="w-full h-full object-cover"
            >
                <source src={video} type="video/mp4" />
                <object data="" width="320" height="240">
                    <embed width="320" height="240" src={video} />
                </object>
            </video>
        </div>
    </section>
}