import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{data}}
 */
export interface postData {
    data: string;
    caption: string;
}

export interface IImage {
    src: ImageWidget;
    alt?: string;
}

export interface Props {
    title: string;
    caption: string;
    image: IImage;
    postData?: postData[];
}

export default function PostTop({ title, caption, image, postData = [] }: Props) {
    return (
        <section class="mb-20 mt-28">
            <div class="bg-info-content">
                <div class="max-w-[1440px] p-4 lg:pt-16 lg:px-20 lg:pb-24 mx-auto text-primary flex flex-wrap justify-between">
                    <div class="w-full xl:max-w-[724px]">
                        <h1 class="font-semibold text-2xl lg:text-5xl text-center xl:text-left">{title}</h1>
                        <p class="text-accent text-xl lg:text-2xl py-4 text-center xl:text-left">{caption}</p>
                    </div>
                    <div class="grow flex justify-center">
                        <Image
                            src={image.src}
                            alt={image.alt || ""}
                            width={518}
                            class="object-contain"
                        />
                    </div>
                </div>
            </div>
            <div>
                {postData.length > 0 && <div class="max-w-[956px] mx-auto py-14 bg-neutral shadow-custom-box rounded-2xl -mt-14 z-10 min-h-48 flex flex-wrap justify-evenly gap-4">
                    {postData?.map((postdata) => (
                        <div class="flex flex-col">
                            <h2 class="font-bold text-2xl lg:text-4xl text-center">{postdata.data}</h2>
                            <p class="text-xl lg:text-2xl text-accent text-center">{postdata.caption}</p>
                        </div>
                    ))}
                </div>}
            </div>
        </section>
    )
}