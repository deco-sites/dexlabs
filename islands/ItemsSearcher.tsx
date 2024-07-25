import type { ImageWidget } from "apps/admin/widgets.ts";
import { useState } from "preact/hooks";
import IntegrationCard from "site/components/IntegrationCard.tsx";
import RequestConnector from "site/components/RequestConncetor.tsx";

/**
 * @title {{title}}
 */

export interface IRequestConnector {
    text?: string;
    buttonText: string;
    buttonHref: string;
}

/** @title {{title}} */
export interface Item {
    image?: ImageWidget;
    title: string;
    categories?: string[];
}

export interface Props {
    requestConnector: IRequestConnector;
    showMoreText?: string;
    itemsPerPage?: number;
    categories: string[];
    items: Item[];
}

export default function ({ categories, items, requestConnector, showMoreText, itemsPerPage = 50 }: Props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrder, setSelectedOrder] = useState('Ascending');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [limit, setLimit] = useState(itemsPerPage);

    let filteredItems = items;

    if (searchTerm) filteredItems = filteredItems.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

    if (selectedCategories.length) filteredItems = filteredItems.filter((item) => item.categories?.some((category) => selectedCategories.includes(category.toLowerCase())));

    if (selectedOrder == 'Ascending') filteredItems = filteredItems.sort((a, b) => a.title.localeCompare(b.title));
    else filteredItems = filteredItems.sort((a, b) => b.title.localeCompare(a.title));

    const originalZise = filteredItems.length;
    filteredItems = filteredItems.slice(0, limit);

    const handleOrderChange = (event: any) => {
        setSelectedOrder(event.target.value || 'Ascending ');
    };

    const handleCheckboxChange = (event: any) => {
        const category = event.target.value.toLowerCase();
        if (event.target.checked) {
            setSelectedCategories((prevCategories) => [...prevCategories, category]);
        } else {
            setSelectedCategories((prevCategories) =>
                prevCategories.filter((prevCategory) => prevCategory !== category)
            );
        }
    };

    return <section class="max-w-[1280px] mx-auto flex flex-wrap justify-center sm:flex-nowrap mb-32">
        <div class="px-10 sm:px-0 sm:pr-10">
            <div class="min-w-44">
                <h2 class="font-semibold text-3xl text-center sm:text-left">Sort by</h2>
                <div class="relative my-3 ">
                    <div class="absolute right-4 top-0 h-full flex items-center">
                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1L6.5 7L1 1" stroke="#576680" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <select
                        class="rounded-full w-full h-10 px-3 border border-primary focus:outline-none focus:ring-0"
                        style="-webkit-appearance: none"
                        onChange={handleOrderChange}
                    >
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>
                </div>
            </div>

            <h2 class="font-semibold text-3xl mt-16 text-center sm:text-left">Categories</h2>
            <div className="form-control p-4 sm:p-0 flex-row sm:flex-col flex-wrap">
                {categories.map((category) => (
                    <label className="label inline cursor-pointer flex items-center justify-start w-1/2 sm:w-full">
                        <input type="checkbox" className="checkbox checkbox-primary border-2 border-primary" value={category} onChange={handleCheckboxChange} />
                        <span className="label-text pl-2 text-base">{category}</span>
                    </label>
                ))}
            </div>
        </div>
        <div class="flex-grow p-4 mt-8">
            <div class="relative">
                <input
                    type="text"
                    class="border border-primary rounded-full h-10 w-full mb-16 pl-11 focus:outline-none focus:ring-0"
                    placeholder="Search"
                    onChange={(e: any) => setSearchTerm(e.target.value)}
                />
                <svg class="absolute left-3 top-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z" fill="black" />
                </svg>
            </div>
            <div class="flex flex-wrap gap-12 justify-center sm:justify-start">
                {filteredItems.length == 0
                    ? <RequestConnector {...requestConnector} />
                    : filteredItems.map((item) => <IntegrationCard title={item.title} image={item.image || ""} />)}
            </div>
            <div class="flex justify-center mb-24 mt-8">
                {limit < originalZise && <button onClick={() => setLimit(limit + itemsPerPage)} class="underline text-primary hover:text-info font-extrabold text-xl flex items-center transition-all duration-200">
                    {showMoreText || "Show more"}
                    <svg class="fill-current" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0306 11.401L11.5306 15.901C11.3897 16.0419 11.1986 16.121 10.9994 16.121C10.8001 16.121 10.609 16.0419 10.4681 15.901C10.3272 15.7601 10.2481 15.569 10.2481 15.3697C10.2481 15.1705 10.3272 14.9794 10.4681 14.8385L13.6875 11.6203H4.5C4.30109 11.6203 4.11032 11.5413 3.96967 11.4007C3.82902 11.26 3.75 11.0693 3.75 10.8703C3.75 10.6714 3.82902 10.4807 3.96967 10.34C4.11032 10.1994 4.30109 10.1203 4.5 10.1203H13.6875L10.4694 6.90035C10.3285 6.75945 10.2493 6.56836 10.2493 6.3691C10.2493 6.16984 10.3285 5.97874 10.4694 5.83785C10.6103 5.69695 10.8014 5.6178 11.0006 5.6178C11.1999 5.6178 11.391 5.69695 11.5319 5.83785L16.0319 10.3378C16.1018 10.4076 16.1573 10.4905 16.1951 10.5818C16.2329 10.6731 16.2523 10.7709 16.2522 10.8697C16.252 10.9685 16.2324 11.0662 16.1944 11.1574C16.1564 11.2486 16.1007 11.3314 16.0306 11.401Z" />
                    </svg>
                </button>}
            </div>
        </div>
    </section>
}
