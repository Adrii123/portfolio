<template>
	<section class=" px-10 pt-10 sm:pt-14">
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 mb-10"
		>
        <!--Projet 1-->
            <RouterLink to="projet-s1">
                <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    <div>
                        <img class="rounded-t-xl border-none" src="../assets/project_cover_S1.jpg"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p
                            class="font-oswald font-[600] text-[18px] mb-2"
                        >
                            Just a wayback - Projet 1er semestre
                        </p>
                        <span
                            class="font-oswald font-[400] text-[14px]"
                            >Webdesign / développement</span
                        >
                    </div>
                </div>
            </RouterLink>
        <!--Projet 2-->
            <RouterLink to="projet-sae202">
                <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    <div>
                        <img class="rounded-t-xl border-none" src="../assets/project_cover_SAE202.jpg"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p
                            class="font-oswald font-[600] text-[18px] mb-2"
                        >
                            Benevol Action - SAE202
                        </p>
                        <span
                            class="font-oswald font-[400] text-[14px]"
                            >Webdesign / Wordpress</span
                        >
                    </div>
                </div>
            </RouterLink>
        <!--Projet 3-->
            <RouterLink to="projet-sae105">
                <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    <div>
                        <img class="rounded-t-xl border-none" src="../assets/project_cover_SAE105.jpg"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p
                            class="font-oswald font-[600] text-[18px] mb-2"
                        >
                            Site d'exposition - SAE105
                        </p>
                        <span
                            class="font-oswald font-[400] text-[14px]"
                            >Webdesign / développement</span
                        >
                    </div>
                </div>
            </RouterLink>
        <!--Projet 4-->
            <RouterLink to="projet-s2">
                <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    <div>
                        <img class="rounded-t-xl border-none" src="../assets/project_cover_S2.jpg"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p
                            class="font-oswald font-[600] text-[18px] mb-2"
                        >
                            Statio - Projet 2ème semestre
                        </p>
                        <span
                            class="font-oswald font-[400] text-[14px]"
                            >Webdesign / développement</span
                        >
                    </div>
                </div>
            </RouterLink> 
        <!--Projet 5-->
            <RouterLink to="projet-italie">
                <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                        <div>
                            <img class="rounded-t-xl border-none" src="../assets/project_cover_DroneFootage.jpg"/>
                        </div>
                        <div class="text-center px-4 py-6">
                            <p
                                class="font-oswald font-[600] text-[18px] mb-2"
                            >
                                ITALIA drone footage - Projet personnel
                            </p>
                            <span
                                class="font-oswald font-[400] text-[14px]"
                                >Audiovisuel</span
                            >
                        </div>
                    </div>
            </RouterLink>
        <!--Projet 6-->
            <RouterLink to="projet-vae">
                <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                        <div>
                            <img class="rounded-t-xl border-none" src="../assets/project_cover_AppliVelo.jpg"/>
                        </div>
                        <div class="text-center px-4 py-6">
                            <p
                                class="font-oswald font-[600] text-[18px] mb-2"
                            >
                                Application VAE
                            </p>
                            <span
                                class="font-oswald font-[400] text-[14px]"
                                >Webdesign</span
                            >
                        </div>
                    </div>
            </RouterLink>
        <!--Projet 7-->
            <RouterLink to="projet-streaming">
                <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                        <div>
                            <img class="rounded-t-xl border-none" src="../assets/project_cover_StreamingPlatform.jpg"/>
                        </div>
                        <div class="text-center px-4 py-6">
                            <p
                                class="font-oswald font-[600] text-[18px] mb-2"
                            >
                                Plateforme de streaming
                            </p>
                            <span
                                class="font-oswald font-[400] text-[14px]"
                                >Webdesign</span
                            >
                        </div>
                    </div>
            </RouterLink>
        <!--Projet 8-->
            <RouterLink to="projet-unss">
                <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                        <div>
                            <img class="rounded-t-xl border-none" src="../assets/project_cover_RefonteUNSS.jpg"/>
                        </div>
                        <div class="text-center px-4 py-6">
                            <p
                                class="font-oswald font-[600] text-[18px] mb-2"
                            >
                                Refonte Logo UNSS
                            </p>
                            <span
                                class="font-oswald font-[400] text-[14px]"
                                >Design Graphique</span
                            >
                        </div>
                    </div>
            </RouterLink>
        <!--Projet 9-->
            <RouterLink to="projet-cassandre">
                <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                        <div>
                            <img class="rounded-t-xl border-none" src="../assets/project_cover_AfficheDubonnet.jpg"/>
                        </div>
                        <div class="text-center px-4 py-6">
                            <p
                                class="font-oswald font-[600] text-[18px] mb-2"
                            >
                                Affiche Cassandre
                            </p>
                            <span
                                class="font-oswald font-[400] text-[14px]"
                                >Design Graphique</span
                            >
                        </div>
                    </div>
            </RouterLink>
		</div>
	</section>
</template>