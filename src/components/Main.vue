<template>
    <Navbar />
    <main>
        <div
            class="rounded-2xl bg-no-repeat bg-cover h-[600px] m-4 pt-40 pl-20"
            style="background-image: url(coverImage.png)"
        >
            <!-- Konten lainnya -->

            <h2 class="text-4xl font-bold mt-5">Order Your</h2>
            <h2 class="text-4xl font-bold">Daily Groceries</h2>
            <h2 class="text-sm mt-4 text-green-500 font-bold">
                #Free Delivery
            </h2>
            <div class="form-group mt-4">
                <input
                    type="email"
                    class="form-input"
                    placeholder=" "
                    required
                />
                <label class="form-label">Search your daily groceries</label>
                <i class="ri-search-line form-icon"></i>
                <button
                    class="absolute top-[0px] -left-[-320px] border-2 border-green-500 bg-green-500 text-white py-[10px] px-6 text-xl font-bold rounded-full hover:bg-green-300 hover:text-green-500"
                >
                    Search
                </button>
            </div>
        </div>
        <div class="flexBetween mx-10 text-2xl font-bold text-gray-700">
            <h2>category</h2>
            <div class="flex flexBetween gap-4">
                <button
                    @click="prev"
                    :class="{
                        'bg-green-100 rounded-xl': toggle_exclusive === 0,
                    }"
                >
                    <i class="ri-arrow-left-s-line p-2 w-[60px] flexCenter"></i>
                </button>
                <button
                    @click="next"
                    :class="{
                        'bg-green-100 rounded-xl': toggle_exclusive === 1,
                    }"
                >
                    <i
                        class="ri-arrow-right-s-line p-2 w-[60px] flexCenter"
                    ></i>
                </button>
            </div>
        </div>
        <Category />
    </main>
</template>
<script>
import Navbar from "./Navbar.vue";
import Category from "./Category.vue";

export default {
    data() {
        return {
            toggle_exclusive: 1,
        };
    },
    methods: {
        next() {
            this.toggle_exclusive = 1;
        },
        prev() {
            this.toggle_exclusive = 0; 
        },
    },

    components: {
        Navbar,
        Category,
    },
};
</script>
<style scoped> 
.rounded-2xl {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center  bottom;
    background-repeat: no-repeat;
} 

.form-group {
    position: relative;
    margin-bottom: 20px;
} 
.form-input {
    width: 390px;
    padding: 12px 16px 12px 40px;
    outline: none;
    border: 2px solid var(--ijo);
    border-radius: 9999px;
    font-size: 16px;
    transition: border-color 0.2s;
    background: #d5f0db;
}
.form-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    font-size: 30px;
    color: var(--ijo);
    pointer-events: none;
    transition: color 0.2s;
}
.form-input:focus,
.form-icon:focus {
    @apply border-2 border-green-400;
    color: rgb(43, 146, 81) /* border-color: #006aff; */;
}
.form-label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
    pointer-events: none;
    transition: all 0.2s;
    background: #d5f0db;
    color: var(--ijo);
}
.form-group:has(.form-input:not(:placeholder-shown)) .form-label,
.form-group:focus-within .form-label {
    top: -2px;
    font-size: 14px;
    box-shadow: 8px 0 0 #d5f0db, -8px 0 0 #d5f0db;
    background: #d5f0db;
    border-radius: 9999px;
}
.form-group:focus-within .form-label,
.form-group:focus-within .form-icon {
    color: rgb(85, 180, 66);
}
</style>
