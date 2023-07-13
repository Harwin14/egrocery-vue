<!-- <template>
    <div>
        <div class="flex justify-center gap-10">
            <div
                v-for="(category, i) in categories"
                :key="i"
                class="border-2 border-gray-200 rounded-lg py-8 px-6 flexCenter flex-col gap-2 w-[180px]"
            >
                <img :src="category.img" alt="categories image" />
                <span>{{ category.title }}</span>
            </div>
        </div>
    </div>
</template> -->
<template>
    <div class="flex justify-center space-x-2">
        <div
            v-for="(category, i) in categories"
            :key="i"
            class="w-full sm:w-1/2 md:w-1/4 px-2"
        >
            <div
                @click="setActive(category)"
                :class="{
                    'bg-green-200 border-2 border-green-500': category.active,
                    'bg-white border': !category.active,
                }"
                class="flexCenter flex-col rounded-lg h-48 cursor-pointer"
            >
                <img
                    :src="category.img"
                    alt="Category Image"
                    class="max-h-24 max-w-24"
                />
                <p
                    :class="{
                        'text-green-600': category.active,
                        'text-black': !category.active,
                    }"
                    class="text-center mt-4"
                >
                    {{ category.title }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        categories: [
            { img: "01.png", title: "Meat & Fish" },
            { img: "02.png", title: "Vegetables" },
            { img: "3.png", title: "Medicine" },
            { img: "4.png", title: "Baby" },
            { img: "5.png", title: "Office" },
            { img: "6.png", title: "Beauty" },
        ],
    }),
    methods: {
        setActive(activeCategory) {
            this.categories.forEach((category) => {
                category.active = category === activeCategory;
            });
        },
    },
};
</script>

<style></style>
