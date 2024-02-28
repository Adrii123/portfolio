<script setup>
    import IconTag from '../components/icons/IconTag.vue'
    import IconFigma from '../components/icons/IconFigma.vue'
    import IconGithub from '../components/icons/IconGithub.vue'
    import IconDownload from '@/components/icons/IconDownload.vue';

    
</script>

<template>
	<div class="container mx-auto px-10 mt-10 sm:mt-20">
		<div>
		<!-- Project heading and meta info -->
            <p
                class="font-swald text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
            >
            UNSS graphic redesign
            </p>
            <div class="flex">
                <div class="flex items-center">
                    <IconTag />
                    <span
                        class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
                        >Graphic design</span
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
                    src="../assets/project_unss_img1.jpg"
                    class="rounded-xl cursor-pointer shadow-lg sm:shadow-none border-2 border-gray-200"
                />
            </div>
            <div
                class="mb-10 sm:mb-0"
            >
                <img
                    src="../assets/project_unss_img2.jpg"
                    class="rounded-xl cursor-pointer shadow-lg sm:shadow-none border-2 border-gray-200"
                />
            </div>
            <div
                class="mb-10 sm:mb-0"
            >
                <img
                    src="../assets/project_unss_img3.jpg"
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
                    The objective was to make graphic redesign of the UNSS logo and to create a new graphic charter.
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
                        Illustrator, Indesign
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
                        href="https://drive.google.com/file/d/1jokTu4SUHLfq-GFeOIG98WTFEpI4E1yt/view?usp=sharing"
                        target="_blank"
						class="bg-[#E5E5E5] text-gray-400 p-2 rounded-lg shadow-sm duration-500 hover:bg-[#bebebe]"
						>
                        <IconDownload />
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
                I created this new graphic charter for the UNSS, I chose not to change the colors, however the logo has evolved well. The new logos were created on Illustrator and the charter on Indesign.<br> <br>

                You can download the file by clicking on the download icon.
                </p>
            </div>

            
	    </div>
	</div>
</template>