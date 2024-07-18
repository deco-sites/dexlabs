import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";

/**
 * @title {{title}}
 */
export interface IStory {
    image?: ImageWidget;
    imageAlt?: string;
    title: string;
    caption: string;
    category: 'Customers' | 'Tech Insights' | 'Company news';
    href?: string;
}

export interface ILink {
    text?: string;
    url?: string;
}

export interface Props {
    id?: string;
    stories: IStory[];
    link?: ILink;
}

export default function StoriesHero({ stories, link, id }: Props) {
    const buttonClass = "overflow-hidden font-normal btn btn-primary px-0 font-medium rounded-full min-h-10 text-sm sm:text-lg bg-secondary hover:bg-primary text-primary hover:text-secondary w-full";
    const tagClass = " text-center bg-zinc-300 rounded text-zinc-600 mt-2.5 p-2 cursor-pointer text-sm sm:text-lg";

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const categories = ['Customers', 'Tech Insights', 'Company news'];

    function addCategory(value: string) {
        if (!selectedCategories.includes(value)) setSelectedCategories((prevCategories) => [...prevCategories, value])
    }

    function removeCategory(value: string) {
        setSelectedCategories((prevCategories) => prevCategories.filter((category) => category != value));
    }

    return (
        <section class="mx-auto max-w-[1240px]" id={id || ""}>
            <div class="flex flex-wrap justify-center gap-12">
                <div class="max-w-24 sm:max-w-full">
                    <button class={buttonClass} onClick={() => setSelectedCategories([])}>
                        <div class={`flex flex-col px-4 relative hover:-translate-y-full transition-transform duration-500 ease-in-out`}>
                            <span class={`text-primary`}>All categories</span>
                            <span class={`absolute top-full text-secondary`}>All categories</span>
                        </div>
                    </button>
                </div>
                {categories.map((category) => (
                    <div class="max-w-24 sm:max-w-full">
                        <button class={buttonClass} onClick={() => addCategory(category)}>
                            <div class={`flex flex-col px-4 relative hover:-translate-y-full transition-transform duration-500 ease-in-out`}>
                                <span class={`text-primary`}>{category}</span>
                                <span class={`absolute top-full text-secondary`}>{category}</span>
                            </div>
                        </button>
                        {selectedCategories.includes(category) && <div class={tagClass} onClick={() => removeCategory(category)}>
                            {category}
                            <span class="pl-2">X</span>
                        </div>}
                    </div>
                ))}
            </div>
            <div class="flex flex-wrap gap-4 my-12">
                {stories && stories.map((story) => (
                    (selectedCategories.includes(story.category) || selectedCategories.length == 0) &&
                    <a href={story.href || ""} class="rounded-3xl border custom-box p-4 w-full md:w-[400px] flex flex-col items-center gap-6 text-primary" style="box-shadow: 0px 2px 12px 0px #14142B14;">
                        <div class="h-44">
                            {story.image && <Image
                                src={story.image}
                                alt={story.imageAlt || ""}
                                width={340}
                                class="h-full object-cover"
                            />}
                        </div>
                        <h3 class=" font-light text-lg text-right w-full">{story.category}</h3>
                        <h2 class="font-semibold text-2xl">{story.title}</h2>
                        <p class="text-lg">{story.caption}</p>
                    </a>
                ))}
            </div>
            <div class="flex justify-center mb-24">
                <a href={link?.url || ""} class="underline text-primary hover:text-info font-extrabold text-xl flex items-center transition-all duration-200">
                    {link?.text || ""}
                    <svg class="fill-current" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0306 11.401L11.5306 15.901C11.3897 16.0419 11.1986 16.121 10.9994 16.121C10.8001 16.121 10.609 16.0419 10.4681 15.901C10.3272 15.7601 10.2481 15.569 10.2481 15.3697C10.2481 15.1705 10.3272 14.9794 10.4681 14.8385L13.6875 11.6203H4.5C4.30109 11.6203 4.11032 11.5413 3.96967 11.4007C3.82902 11.26 3.75 11.0693 3.75 10.8703C3.75 10.6714 3.82902 10.4807 3.96967 10.34C4.11032 10.1994 4.30109 10.1203 4.5 10.1203H13.6875L10.4694 6.90035C10.3285 6.75945 10.2493 6.56836 10.2493 6.3691C10.2493 6.16984 10.3285 5.97874 10.4694 5.83785C10.6103 5.69695 10.8014 5.6178 11.0006 5.6178C11.1999 5.6178 11.391 5.69695 11.5319 5.83785L16.0319 10.3378C16.1018 10.4076 16.1573 10.4905 16.1951 10.5818C16.2329 10.6731 16.2523 10.7709 16.2522 10.8697C16.252 10.9685 16.2324 11.0662 16.1944 11.1574C16.1564 11.2486 16.1007 11.3314 16.0306 11.401Z" />
                    </svg>
                </a>
            </div>
        </section>
    )
}