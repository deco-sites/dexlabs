import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";
import IntegrationCard from "site/components/IntegrationCard.tsx";
import RequestConnector from "site/components/RequestConncetor.tsx";

/**
 * @title {{title}}
 */
export interface Item {
    image: ImageWidget;
    title: string;
    categories?: string[];
}

export interface Props {
    categories: string[];
    items: Item[];
}

export default function ({ categories, items }: Props) {
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
    return <section class="max-w-[1280px] mx-auto flex mb-32">
        <div class="pr-10">
            <div class="border-b border-info min-w-44">
                <h2 class="font-semibold text-3xl">Sort by</h2>
                <select
                    class="rounded-lg w-full h-8 my-3 border custom-box shadow-custom-box border-custom-box focus:outline-none focus:ring-0"
                    onChange={handleOrderChange}
                >
                    <option>Asc</option>
                    <option>Desc</option>
                </select>
            </div>

            <h2 class="font-semibold text-3xl mt-3">Categories</h2>
            <div className="form-control">
                {categories.map((category) => (
                    <label className="label inline cursor-pointer flex items-center justify-start">
                        <input type="checkbox" className="checkbox checkbox-primary border-2 border-primary" value={category} onChange={handleCheckboxChange} />
                        <span className="label-text pl-2 text-lg">{category}</span>
                    </label>
                ))}
            </div>
        </div>
        <div class="flex-grow p-4">
            <div class="relative">
                <input
                    type="text"
                    class="shadow-custom-box border rounded-full h-9 w-full max-w-[780px] mb-4 pl-11 focus:outline-none focus:ring-0"
                    placeholder="Search"
                    onChange={(e: any) => setSearchTerm(e.target.value)}
                />
                <svg class="absolute left-3 top-1" width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2734 21.8749C19.9818 21.8749 24.6093 17.7616 24.6093 12.6875C24.6093 7.61337 19.9818 3.5 14.2734 3.5C8.56504 3.5 3.9375 7.61337 3.9375 12.6875C3.9375 17.7616 8.56504 21.8749 14.2734 21.8749Z" stroke="#576680" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.5815 19.1843L27.5616 24.5" stroke="#576680" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div class="flex flex-wrap gap-8 justify-center">
                {filteredItems.length == 0
                    ? <RequestConnector />
                    : filteredItems.map((item) => <IntegrationCard title={item.title} image={item.image} />)}
            </div>
        </div>
    </section>
}
