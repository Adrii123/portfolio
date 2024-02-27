<script setup>
    import IconTag from '../components/icons/IconTag.vue'
    import IconFigma from '../components/icons/IconFigma.vue'
    import IconGithub from '../components/icons/IconGithub.vue'
</script>

<template>
	<div class="container mx-auto px-10 mt-10 sm:mt-20">
		<div>
		<!-- Project heading and meta info -->
            <p
                class="font-swald text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
            >
                Statio
            </p>
            <div class="flex">
                <div class="flex items-center">
                    <IconTag />
                    <span
                        class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
                        >Webdesign, Wordpress, Design graphique</span
                    >
                </div>
            </div>
	    </div>

		<!-- Project gallery -->
		<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
            <div
                class="mb-10 sm:mb-0 "
            >
                <img
                    src="../assets/project_S2_img1.jpg"
                    class="rounded-xl cursor-pointer shadow-lg sm:shadow-none border-2 border-gray-200"
                />
            </div>
            <div
                class="mb-10 sm:mb-0"
            >
                <img
                    src="../assets/project_S2_img2.jpg"
                    class="rounded-xl cursor-pointer shadow-lg sm:shadow-none border-2 border-gray-200"
                />
            </div>
            <div
                class="mb-10 sm:mb-0"
            >
                <img
                    src="../assets/project_S2_img3.jpg"
                    class="rounded-xl cursor-pointer shadow-lg sm:shadow-none border-2 border-gray-200"
                />
            </div>
	    </div>

		<!-- Project information -->
		<div class="block sm:flex gap-0 sm:gap-10 mt-14">
            <!-- Single project left section details -->
            <div class="w-full sm:w-1/3 text-left">

                <!-- Single project objectives -->
                <div class="mb-7">
                    <p
                        class="font-general-medium text-2xl font-[500] mb-2"
                    >
                        Objective
                    </p>
                    <p
                        class="font-general-regular text-primary-dark dark:text-ternary-light"
                    >
                    The objective of this project was to create a website for a travel agency. 
                    </p>
                </div>

                <!-- Single project technologies -->
                <div class="mb-7">
                    <p
                        class="font-general-medium text-2xl font-[500] mb-2"
                    >
                        Tools and Technologies
                    </p>
                    <p
                        class="font-general-regular text-primary-dark dark:text-ternary-light"
                    >
                        Figma, HTML, CSS, Illustrator
                    </p>
                </div> 
                
                <div>
				<p
					class="font-general-medium text-2xl font-[500] mb-2"
				>
					Links
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a
                        href="https://www.figma.com/proto/TrHg79TeKstaMZv06GF4Q3/Projet_S2_Adrien_Leveque_Leopold_Ohnimus_Thomas_Poupon?page-id=0%3A1&type=design&node-id=441-2798&viewport=62%2C-45%2C0.05&t=e8b704vWZSvNvK2M-1&scaling=scale-down&starting-point-node-id=148%3A621&show-proto-sidebar=1&mode=design"
                        target="_blank"
						class="bg-[#E5E5E5] text-gray-400 p-2 rounded-lg shadow-sm duration-500 hover:bg-[#bebebe]"
						>
                        <IconFigma />
                    </a>
                    <!-- <a
                        href="https://www.figma.com/"
                        target="_blank"
						class="bg-[#E5E5E5] text-gray-400 p-2 rounded-lg shadow-sm duration-500 hover:bg-[#bebebe]"
						>
                        <IconGithub />
                    </a> -->
				</div>
			</div>
            </div>

            <!-- Single project right section details -->
            <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                <p
                    class="font-general-medium text-2xl font-[500] mb-7"
                >
                    Description
                </p>
                <p
                    class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                >
                When we designed this app, we had the idea to make an all-in-one application that could be used by everyone and to to all the task we do when travelling. We wanted to make it easy to use and to have a nice design. <br> <br>

                The logo represent a suitcase and a plane, the suitcase is the main part of the logo, it represent the fact that the app is made for travelling. The plane is the negative space of the suitcase, it represent the fact that the app is made for travelling. The blue color represent the color of the sky that we see a lot when travelling.<br> <br>

                You can find the prototype of the app on Figma by clicking on the Figma icon.
                </p>
            </div>

            
	    </div>
	</div>
</template>