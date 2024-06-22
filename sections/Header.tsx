import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

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
  return (
    <nav class="drawer drawer-end">
      <div class="h-28"></div>
      <div class="fixed w-full bg-secondary z-50">
        <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

        {/* main content */}
        <div class="drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-8 max-w-[1378px]">

          <div class="hidden items-center justify-between lg:flex w-full">
            <div class="flex gap-[70px] items-center bg-neutral border border-primary rounded-full py-2 pl-4 pr-8">
              <a href="/">
                <Image src={logo.src || ""} width={67} height={36} alt={logo.alt} />
              </a>
              <ul class="flex gap-[70px]">
                {navigation.links.map((link) => (
                  <li>
                    <a
                      href={link.url}
                      aria-label={link.label}
                      class="link no-underline hover:underline text-primary"
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
                  class={`font-normal btn btn-primary text-secondary font-medium rounded-full min-h-9 h-9 ${item.outline && "btn-outline"
                    }`}
                >
                  {item?.text}
                </a>
              ))}
            </ul>
          </div>

          <label
            htmlFor="mobile-drawer-nav"
            class="flex lg:hidden btn btn-ghost drawer-button"
          >
            <Icon id="Bars3" size={24} strokeWidth={0.1} />
          </label>
        </div>
      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">
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
                <a href={link.url} aria-label={link.label} class="text-primary">
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
                class={`font-normal btn btn-primary rounded-full min-h-9 h-9 ${item.outline && "btn-outline"
                  }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>
      </aside>
    </nav>
  );
}
