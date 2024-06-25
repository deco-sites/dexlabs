import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
    backgroundImage?: ImageWidget;
}

export default function ImageSelector({ backgroundImage }: Props) {
    return <section class="max-w-[1440px] mx-auto">
        {backgroundImage && <Image
            src={backgroundImage}
            alt="Background Image"
            width={1440}
            class="w-full object-cover"
        />}
    </section>
}