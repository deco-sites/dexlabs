import type { ImageWidget } from "apps/admin/widgets.ts";
import { useState } from "preact/hooks";
import IntegrationCard from "site/components/IntegrationCard.tsx";

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
    const [selectedOrder, setSelectedOrder] = useState('Asc');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    let filteredItems = [];

    if (selectedCategories.length) filteredItems = items.filter((item) => item.categories?.some((category) => selectedCategories.includes(category.toLowerCase())));
    else filteredItems = items;

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
    return <section class="max-w-[1280px] mx-auto flex">
        <div>
            <select onChange={handleOrderChange}>
                <option>Asc</option>
                <option>Desc</option>
            </select>

            <h2>Categories</h2>
            <div className="form-control">
                {categories.map((category) => (
                    <label className="label inline cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-primary" value={category} onChange={handleCheckboxChange} />
                        <span className="label-text pl-2">{category}</span>
                    </label>
                ))}
            </div>
        </div>
        <div class="flex flex-wrap">
            {filteredItems.map((item) => <IntegrationCard title={item.title} image={item.image} />)}
        </div>
    </section>
}
