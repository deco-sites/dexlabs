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
    image: ImageWidget;
    title: string;
    categories?: string[];
}

export interface Props {
    categories: string[];
    items: Item[];
    requestConnector: IRequestConnector;
}

export default function ({ categories, items, requestConnector }: Props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrder, setSelectedOrder] = useState('Asc');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    let filteredItems = items;

    if (searchTerm) filteredItems = filteredItems.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

    if (selectedCategories.length) filteredItems = filteredItems.filter((item) => item.categories?.some((category) => selectedCategories.includes(category.toLowerCase())));

    if (selectedOrder == 'Asc') filteredItems = filteredItems.sort((a, b) => a.title.localeCompare(b.title));
    else filteredItems = filteredItems.sort((a, b) => b.title.localeCompare(a.title));

    const handleOrderChange = (event: any) => {
        setSelectedOrder(event.target.value || 'Asc');
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
                <select
                    class="rounded-full w-full h-10 my-3 px-3 border border-primary focus:outline-none focus:ring-0"
                    onChange={handleOrderChange}
                >
                    <option>Asc</option>
                    <option>Desc</option>
                </select>
            </div>

            <h2 class="font-semibold text-3xl mt-3 text-center sm:text-left">Categories</h2>
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
                    : filteredItems.map((item) => <IntegrationCard title={item.title} image={item.image} />)}
            </div>
        </div>
    </section>
}
