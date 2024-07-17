import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import PostAsideContent from "site/islands/PostAsideContent.tsx";

/**
 * @title {{title}}
 */
export interface IInfo {
    title: string
    text: string;
}

export interface IImage {
    src: ImageWidget;
    alt?: string;
}

export interface IFloatingButton {
    title: string;
    text: string;
    href: string;
}

export interface Props {
    /** @format rich-text */
    mainText: string;
    asideLogo: IImage;
    asideInfo: IInfo[];
    floatingButton: IFloatingButton;
}

export default function PostContent({ mainText, asideLogo, asideInfo, floatingButton }: Props) {
    return <section class="max-w-[1440px] mx-auto mt-52 lg:mt-0 flex flex-col-reverse lg:flex-row flex-nowrap px-4 lg:px-20 justify-between gap-4 relative">
        <div class="max-w-[979px] pb-[150px]">
            <p
                class="text-2xl font-medium"
                dangerouslySetInnerHTML={{ __html: mainText }}
            >
            </p>
        </div>
        <PostAsideContent asideLogo={asideLogo} asideInfo={asideInfo} floatingButton={floatingButton} />
    </section>
}