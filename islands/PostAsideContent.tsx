import Image from "apps/website/components/Image.tsx";
import { IInfo, IImage, IFloatingButton } from "../sections/PostContent.tsx";

export interface Props {
    asideLogo?: IImage;
    asideInfo?: IInfo[];
    floatingButton?: IFloatingButton;
}

export default function PostAsideContent({ asideLogo, asideInfo, floatingButton = { text: "Book a demo", href: "/bookademo", title: "Ready to try deX Lake Platform?" } }: Props) {
    return (
        <aside class="w-full lg:w-[275px] flex flex-col mt-24 pb-16 lg:mt-0">
            {(asideInfo || asideLogo) && <div class="bg-info-content rounded-2xl shadow-custom-box flex flex-col px-9 py-12 gap-9">
                {asideLogo?.src && <div class="w-full">
                    <Image
                        width={300}
                        src={asideLogo.src || ""}
                        alt={asideLogo.alt || ""}
                    />
                </div>}
                {asideInfo && asideInfo.map((info) => (
                    <div>
                        <h2 class="font-bold text-lg text-secondary-content">{info.title}</h2>
                        <p class="text-lg text-secondary-content">{info.text}</p>
                    </div>
                ))}
            </div>}
            <div class="h-full lg:h-full w-full -top-52 lg:top-0 left-0 mt-14 absolute lg:relative">
                <div class="bg-primary text-secondary px-5 py-4 lg:py-7 gap-6 flex flex-col items-center rounded-2xl sticky top-28 lg:top-[40vh]">
                    <h2 class="text-center font-semibold text-xl lg:text-2xl">{floatingButton.title}</h2>
                    <a
                        href={floatingButton.href || ""}
                        class={`font-normal btn font-semibold rounded-full min-h-10 text-lg text-primary border-none transition-all duration-200 bg-success hover:bg-secondary`}
                    >
                        {floatingButton.text}
                    </a>
                </div>
            </div>
        </aside>
    )
}