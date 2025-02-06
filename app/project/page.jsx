import React from 'react'
import Collaboration from '@/components/Collaboration'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import ProjectCard from '@/components/ProjectCard'

const ProjectPage = () => {
    return (
        <div className='bg-[#FFFCEC]'>
            <section className='bg-[#a37700]'>
                <div className='h-[50vh] lg:h-[55vh] content-container-noTop'>
                    <p className='heading tracking-widest mt-16 lg:mt-6 text-[#FFCC00] lg:text-lg'>
                        PROJECT
                    </p>
                    <h1 className='font-bold text-4xl text-smokyWhite mt-1 mb-4 lg:text-5xl lg:mb-6'>
                        Proyek Kami
                    </h1>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">BERANDA</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>PROYEK</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className='py-10 mx-auto px-8 text-base text-justify md:px-16 lg:px-28 2xl:px-32 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
                <h3 className='subheading-porto'>
                    PROYEK TERBARU
                </h3>
                <h2 className='heading-porto-text'>
                    Proyek Unggulan Kami
                </h2>
                <ProjectCard />
                <div className='mt-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim tellus. Cras feugiat tristique eros ut tincidunt. Morbi dapibus velit lorem, sit amet scelerisque arcu sodales non. Duis et iaculis odio. Donec maximus placerat nisi vel lobortis. Suspendisse enim massa, elementum vitae metus quis, mollis tempus nisi. Ut sagittis lectus sed mauris cursus venenatis. Proin aliquet consequat eros id blandit. Duis vitae arcu sed ipsum posuere lobortis. Maecenas pharetra nunc sit amet iaculis dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet risus scelerisque, scelerisque urna imperdiet, imperdiet nunc. Donec a tempus magna. Duis sit amet turpis eu augue hendrerit tincidunt. Suspendisse et faucibus nisl. Donec venenatis pretium diam, non sollicitudin lectus.

                    Aenean scelerisque commodo mi in bibendum. Nunc tincidunt maximus vehicula. Proin augue ligula, accumsan et pulvinar sit amet, iaculis eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam lobortis porttitor turpis non gravida. Proin convallis lacinia ante, nec rutrum libero aliquam eu. Quisque nec facilisis massa. In ornare velit nec ullamcorper molestie. Morbi neque lectus, feugiat id nibh eget, iaculis porta nibh. Vestibulum quam magna, lacinia quis felis non, facilisis porta ipsum. Nam at semper enim, sed congue est. Fusce euismod non urna vitae pharetra. Praesent euismod sem in sapien dictum hendrerit.

                    Nam at eros non enim dapibus volutpat et eget ligula. Donec ut nisl vitae erat ullamcorper maximus. In et libero risus. Quisque feugiat placerat turpis sed porttitor. Vestibulum in pretium risus. In dictum velit eget arcu gravida eleifend. Nam rhoncus lorem eget mi aliquet volutpat. Nam nec enim sed justo placerat tincidunt a vitae risus. Pellentesque nunc lacus, aliquet vitae risus a, placerat blandit mauris. Suspendisse pellentesque risus sit amet dolor porttitor, a sagittis velit dictum. Aliquam ligula odio, suscipit et condimentum eget, tristique ac tortor. Donec rutrum quam interdum nulla porta vehicula. Sed dictum interdum sapien, eu feugiat mi porta et.

                    Sed nunc ex, feugiat quis blandit sed, laoreet id massa. Vivamus euismod iaculis diam, nec ultrices ligula cursus vel. Duis volutpat blandit est at maximus. Integer mauris velit, mattis ut ante vel, eleifend dignissim nisl. Cras iaculis porttitor purus vitae consectetur. Cras ac justo sed elit porttitor rhoncus quis vitae nunc. Maecenas blandit gravida enim vitae convallis. Aliquam eget nibh quis tortor ultrices ornare eu vitae massa. Vivamus nec ipsum ultricies, congue eros sit amet, volutpat ante. Praesent sapien dui, condimentum condimentum gravida vel, hendrerit hendrerit turpis. Maecenas in eros lacus. Curabitur maximus lacinia gravida. Etiam augue tortor, tristique eget congue nec, porttitor non orci. Nunc condimentum ut neque nec dignissim. Donec placerat eros justo, id auctor massa hendrerit sed. Quisque ante ex, molestie nec purus ut, maximus ultricies lorem.

                    Nulla eget pretium quam, et commodo elit. Ut eget lectus rutrum, bibendum ipsum vel, ultricies leo. Nam rhoncus turpis elementum augue maximus, ut gravida ante mattis. Suspendisse in efficitur nisl, id rhoncus lorem. Integer consequat cursus semper. Suspendisse iaculis vehicula orci vitae mollis. Cras eu ligula non nulla sodales posuere. Vestibulum mattis faucibus dictum. Etiam egestas, urna vitae maximus consequat, dui est lobortis turpis, ut semper nulla leo non mi. Nullam hendrerit libero nunc. Nullam a rutrum urna. In nec augue nec metus tempor pharetra sit amet viverra tortor. Vivamus interdum urna at libero iaculis, quis pellentesque quam laoreet. Integer euismod maximus eros, ac dictum lacus dapibus in. Nam suscipit sed nibh vel lacinia.
                </div>
            </section>
            <Collaboration />
        </div>
    )
}

export default ProjectPage
