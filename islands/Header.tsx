import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useScroll } from "site/sdk/useScroll.ts";
import GlobalDesign from "site/components/GlobalDesign.tsx";

export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

export interface Nav {
    logo?: {
        src?: ImageWidget;
        alt?: string;
    };
    navigation?: {
        links: {
            label?: string;
            url?: string;
        }[];
        buttons: CTA[];
    };
}

export default function Header({
    logo = {
        src:
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
        alt: "Logo",
    },
    navigation = {
        links: [
            { label: "Home", url: "/" },
            { label: "About us", url: "/" },
            { label: "Princing", url: "/" },
            { label: "Contact", url: "/" },
        ],
        buttons: [
            { id: "change-me-1", href: "/", text: "Change me", outline: false },
            { id: "change-me-2", href: "/", text: "Change me", outline: true },
        ],
    },
}: Nav) {
    const scroll = useScroll();
    const scrollTransition = 20;
    const scrolled = scroll.value > scrollTransition;
    const transitionClass = "transition-all duration-1000 ease-in-out";

    function bgSizeUp() {
        const navContainer = document.getElementById('navContainer');
        const sharedBg = document.getElementById('sharedBg');
        if (navContainer && sharedBg) {
            const navContainerWidth = navContainer.clientWidth;
            sharedBg.style.width = navContainerWidth.toString() + 'px';
        }
        return '';
    }

    function bgSizeDown() {
        try {
            const navItemsContainer = document.getElementById('navItemsContainer');
            const sharedBg = document.getElementById('sharedBg');
            if (navItemsContainer && sharedBg) {
                const navItemsContainerWidth = navItemsContainer.clientWidth;
                sharedBg.style.width = navItemsContainerWidth.toString() + 'px';
            }
            return '';
        } catch (error) {
            console.log(error);
        }

    }

    function enableHover(event: any) {
        const sharedHover = document.getElementById('sharedHover');
        const relativeParent = document.getElementById('navItemsContainer');
        if (sharedHover && relativeParent) {

            const targetRect = event.target.getBoundingClientRect();
            const relativeParentRect = relativeParent.getBoundingClientRect();

            sharedHover.style.width = `${targetRect.width}px`;
            sharedHover.style.height = `${targetRect.height}px`;
            sharedHover.style.left = `${targetRect.left - relativeParentRect.left}px`;
            sharedHover.style.top = `${targetRect.top - relativeParentRect.top}px`;


            sharedHover.style.opacity = '1';
        }
    }

    function disableHover(event: any) {
        const sharedHover = document.getElementById('sharedHover');
        if (sharedHover) {
            sharedHover.style.opacity = '0';
        }
    }

    return (
        <>
            <div class="h-28"></div>
            <nav class={`drawer drawer-end fixed top-0 w-full z-50 bg-gradient-to-b from-secondary to-transparent ${transitionClass} ${scrolled && "bg-opacity-95"}`}>
                <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

                {/* main content */}
                <div class={`drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between pt-8 ${transitionClass} ${scrolled ? "pb-3" : ""} max-w-[1378px]`}>
                    <GlobalDesign>
                        <div id="navContainer" class={`hidden items-center justify-between lg:flex w-full pr-2.5`}>
                            <div
                                id="navItemsContainer"
                                class={`relative flex gap-10 items-center py-2 pr-8 ${scrolled && "bg-opacity-0 border-opacity-0"}`}
                            >
                                <div id="sharedBg" class={`absolute h-full w-full bg-neutral border border-primary rounded-full ${transitionClass} -z-10 ${scrolled ? bgSizeUp() : bgSizeDown()}`}></div>
                                <a href="/">
                                    <Image src={logo.src || ""} width={67} height={36} alt={logo.alt} />
                                </a>
                                <div
                                    id="sharedHover"
                                    class="bg-primary rounded-full absolute -z-10 opacity-0 transition-all duration-300 ease-in-out">
                                </div>
                                <ul class="flex gap-10">
                                    {navigation.links.map((link) => (
                                        <li>
                                            <a
                                                href={link.url}
                                                aria-label={link.label}
                                                class="link no-underline hover:text-secondary text-primary py-2.5 px-3.5 rounded-full transition"
                                                onMouseEnter={enableHover}
                                                onMouseLeave={disableHover}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <ul class="flex gap-3">
                                {navigation.buttons?.map((item) => (
                                    <a
                                        key={item?.id}
                                        id={item?.id}
                                        href={item?.href ?? "#"}
                                        target={item?.href.includes("http") ? "_blank" : "_self"}
                                        class={`font-normal btn btn-primary text-secondary font-medium rounded-full min-h-10 h-10 text-lg hover:bg-secondary hover:text-primary ${item.outline && "btn-outline"
                                            }`}
                                    >
                                        {item?.text}
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </GlobalDesign>

                    <label
                        htmlFor="mobile-drawer-nav"
                        class="flex lg:hidden btn btn-ghost drawer-button"
                    >
                        <Icon id="Bars3" size={24} strokeWidth={0.1} />
                    </label>

                </div>

                {/* sidebar */}
                <aside class="drawer-side z-50">
                    {/* Close when clicking on overlay */}
                    <label
                        htmlFor="mobile-drawer-nav"
                        aria-label="close sidebar"
                        class="drawer-overlay"
                    />

                    <div class="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content p-4 bg-opacity-80 backdrop-blur-sm">
                        <div>

                            <a class="p-4" href="/">
                                <Image
                                    src={logo.src || ""}
                                    width={100}
                                    height={28}
                                    alt={logo.alt}
                                />
                            </a>

                            <ul class="menu">
                                {navigation?.links.map((link) => (
                                    <li>
                                        <a href={link.url} aria-label={link.label} class="no-underline hover:bg-primary hover:text-secondary text-primary">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <ul class="p-4 flex items-center gap-3">
                                {navigation.buttons?.map((item) => (
                                    <a
                                        key={item?.id}
                                        id={item?.id}
                                        href={item?.href ?? "#"}
                                        target={item?.href.includes("http") ? "_blank" : "_self"}
                                        class={`font-normal btn btn-primary rounded-full min-h-10 h-10 hover:bg-secondary hover:text-primary ${item.outline && "btn-outline"
                                            }`}
                                    >
                                        {item?.text}
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
            </nav>
        </>
    );
}
