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
                Just a wayback - Projet 1er semestre
            </p>
            <div class="flex">
                <div class="flex items-center">
                    <IconTag />
                    <span
                        class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
                        >Webdesign, développement</span
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
                    src="../assets/project_S1_img3.jpg"
                    class="rounded-xl cursor-pointer shadow-lg sm:shadow-none border-2 border-gray-200"
                />
            </div>
            <div
                class="mb-10 sm:mb-0"
            >
                <img
                    src="../assets/project_S1_img1.jpg"
                    class="rounded-xl cursor-pointer shadow-lg sm:shadow-none border-2 border-gray-200"
                />
            </div>
            <div
                class="mb-10 sm:mb-0"
            >
                <img
                    src="../assets/project_S1_img2.jpg"
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
                    The first semester project objective was to create a website that acts as a sort of time capsule for our future selves.
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
                        Figma, HTML, CSS
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
                        href="https://www.figma.com/proto/2d7FHksz9FJt1egYBf2j7o/Untitled?page-id=0%3A1&type=design&node-id=13-21&viewport=453%2C353%2C0.07&t=NXQFZ05GC97aIhOF-1&scaling=scale-down&starting-point-node-id=13%3A21&mode=design"
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
                The goal of this project was to create a website that acts as a sort of time capsule for our future selves. We had to write 5 articles on the subjects of our choice, the themes were however imposed: a book, a film, music, a place and an emotion. We also had to create a presentation page about ourselves, a contact page and a home page. <br> <br>

                 This site mobilized a multitude of skills: content writing, web design, web development, graphic design. <br> <br>

                 You can find the model of this site in mobile version on Figma.
                </p>
            </div>

            
	    </div>
	</div>
</template>