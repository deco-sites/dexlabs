import { eq } from "drizzle-orm";
import { SectionProps } from "deco/types.ts";
import type { AppContext } from "site/apps/deco/records.ts";
import { profiles } from "site/db/schema.ts";
import { useSection } from "deco/hooks/useSection.ts";
import Icon from "site/components/ui/Icon.tsx";

type ProfileInsert = typeof profiles.$inferInsert;
type ProfilesKeys = keyof ProfileInsert;
type ProfileValue<K extends keyof ProfileInsert> = ProfileInsert[K];

/**
 * Checks if `key` is a valid profile property key.
 */
const isProfilePropKey = (
    key: string,
): key is ProfilesKeys => key in profiles.$inferInsert;

/**
 * Checks if `value` is of the same type as `profiles[key]`.
 */
const isProfilePropType = (
    key: ProfilesKeys,
    value: unknown,
): value is ProfileValue<typeof key> =>
    typeof value === typeof profiles.$inferInsert[key];

interface Props {
    mode?: "create" | "delete";
    email?: string;
}

export async function loader(
    { mode, email }: Props,
    req: Request,
    { invoke }: AppContext,
) {
    // Drizzle ORM client
    const drizzle = await invoke.records.loaders.drizzle();

    // If mode is create and the request has a body, then create a new profile
    if (mode === "create" && req.body) {
        const newProfile: Partial<typeof profiles.$inferInsert> = {};
        const formData = await req.formData();
        formData.forEach((value, key) =>
            isProfilePropKey(key) &&
            isProfilePropType(key, value) &&
            (newProfile[key] = value as any)
        );

        // Insert newProfile into the database.
        await drizzle.insert(profiles).values(
            newProfile as typeof profiles.$inferInsert,
        );
    } // If mode is delete and email is defined and not empty, then remove all profiles with this email.
    else if (mode === "delete" && email) {
        await drizzle.delete(profiles).where(eq(profiles.email, email));
    }

    // Select all profiles from the database, bringing only email and name.
    const profilesData = await drizzle.select({
        email: profiles.email,
        name: profiles.name,
    }).from(profiles);
    return { profiles: profilesData };
}

export default function ManageProfiles(
    { profiles = [] }: SectionProps<typeof loader>,
) {
    // Section URL with mode = create property, used for form submission and creating a new profile.
    const createUrl = useSection<Props>({
        props: { mode: "create" },
    });
    return (
        <>
            <div>
                <form
                    hx-post={createUrl}
                    hx-trigger="click"
                    hx-target="closest section"
                    hx-swap="outerHTML"
                    class="p-2 flex flex-col gap-2"
                >
                    <div class="flex gap-2">
                        <label for="name">Name</label>
                        <input
                            // profiles name property
                            name="name"
                            id="name"
                            required
                            class="border border-gray-300 rounded"
                        />
                    </div>

                    <div class="flex gap-2">
                        <label for="description">Email</label>
                        <input
                            // profiles email property
                            name="email"
                            id="email"
                            required
                            class="border border-gray-300 rounded"
                        />
                    </div>

                    <div>
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>

            <div class="divide-y divide-gray-300 p-2 w-fit">
                <h3>Members List</h3>
                {profiles.map((profile) => {
                    // Section URL with mode = delete property and the email of the profile to be removed, used for form submission and profile removal.
                    const profileDeleteUrl = useSection<Props>({
                        props: { mode: "delete", email: profile.email ?? "" },
                    });
                    return (
                        <div class="flex gap-2 items-center">
                            <span>{profile.name}</span>
                            <span>{profile.email}</span>
                            <form
                                hx-post={profileDeleteUrl}
                                hx-trigger="click"
                                hx-target="closest section"
                                hx-swap="outerHTML"
                                class="w-4 h-4"
                            >
                                <button type="submit" class="w-4 h-4">
                                    <Icon id="Trash" size={16} />
                                </button>
                            </form>
                        </div>
                    );
                })}
            </div>
        </>
    );
}