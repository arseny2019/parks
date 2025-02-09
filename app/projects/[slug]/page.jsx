import directus from "@/lib/directus";
import {readItems} from "@directus/sdk";
import Image from "next/image";
import {getImageURL} from "@/helpers/directus";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TechnologyModal from "@/components/technologyModal";
import TechnologyGrid from "@/components/directions/technologyGrid";

async function getDirections() {
    return directus.request(readItems('directions'));
}

async function getProjectDetail(slug) {
    return directus.request(readItems('projects', {
        filter: {slug},
        fields: ['*', 'gallery.*']
    }));
}


export async function generateMetadata({params, searchParams}, parent) {
    const slug = (await params).slug

    const [item] = await directus.request(readItems('projects', {
        filter: {slug},
        fields: ['*']
    }));

    return {
        title: item.title,
        description: item.seo || item.title,
    }
}

export default async function ProjectDetailPage({params}) {
    const directions = await getDirections();
    const {slug} = await params;
    const [detail] = await getProjectDetail(slug);
    console.log('directions', directions);
    console.log('detail', detail);
    return (
        <>
            <Header directions={directions} withAnimation={true}></Header>
            <div className="relative h-[600px] xl:h-[750px]">
                <div className="h-full w-full absolute left-0 top-0 z-[1] dark-gradient">
                    <div className="h-full c-container flex flex-col justify-end">
                        <div className="
                            pr-[56px] pb-[64px]
                            md:pr-10
                            lg:pr-[110px] lg:pb-[80px]
                            2xl:pr-0 2xl:pb-[90px]
                        ">
                            <h1 className="font-roboto-condensed text-white font-[600] uppercase
                                text-[36px] leading-[40px]
                                md:text-[50px] md:leading-[55px]
                                lg:text-[60px] lg:leading-[66px]
                                xl:text-[70px] xl:leading-[77px]
                                2xl:text-[80px] 2xl:leading-[88px]
                            ">{detail.title}</h1>
                            <h4 className="font-roboto-condensed text-white font-[600] uppercase
                                text-[24px] leading-[28px] mt-3
                                md:text-[32px] md:leading-[36px]
                                lg:text-[36px] lg:leading-[40px] lg:mt-5
                                xl:text-[40px] xl:leading-[44px]
                                2xl:text-[50px] 2xl:leading-[55px]
                            ">{detail.subtitle}</h4>
                        </div>
                    </div>
                </div>
                <Image width={1320} height={0} className="w-full h-full object-cover"
                       src={getImageURL(detail.image)}
                       alt={detail.title}></Image>
            </div>
            <div className="c-container
                mt-[100px] pb-[100px]
                md:mt-[120px] md:pb-[120px]
                xl:mt-[150px] xl:pb-[150px]
                2xl:mt-[200px] 2xl:pb-[200px]
            ">
                <div className="flex flex-col
                    gap-y-[80px]
                    sm:gap-y-[100px]
                    xl:gap-y-[120px]
                    2xl:gap-y-[150px]
                ">
                    {detail.mainText && <h2 className="font-[400] font-roboto
                        text-[22px] leading-[33px]
                        sm:text-[24px] sm:leading-[36px]
                        lg:text-[36px] lg:leading-[54px]
                        xl:text-[40px] xl:leading-[60px]
                        2xl:text-[48px] 2xl:leading-[72px]
                    ">{detail.mainText}</h2>}
                    {detail.features && detail.features.length > 0 && <div>
                        {detail.features_title && <h4 className="font-bold font-roboto-condensed uppercase
                        text-[24px] leading-[36px] mb-8
                        lg:text-[30px] lg:leading-[45px] lg:mb-16
                        ">{detail.features_title}</h4>}
                        <div className="grid
                        grid-cols-1 gap-y-[40px]
                        md:grid-cols-2 md:gap-x-6
                        ">
                            {detail.features.map(feature => (
                                <div key={feature.title || feature.description} className="custom-list-item flex flex-col
                                gap-y-[6px]
                                sm:gap-y-2
                                md:gap-y-3 md:pr-8
                            ">
                                    {feature.title && <p className="font-[500]
                                    text-[18px] leading-[27px]
                                    xl:text-[22px] xl:leading-[33px]
                                ">{feature.title}</p>}
                                    {feature.description && <p className="text-secondary-black
                                    text-[16px] leading-6
                                    md:text-[18px] md:leading-[27px]
                                ">
                                        {feature.description}
                                    </p>}
                                </div>
                            ))}
                        </div>
                    </div>}

                    {detail.gallery && detail.gallery.length > 0 &&
                        <div className="grid grid-cols-1 gap-y-8 md:gap-y-10">
                            {detail.gallery.map(item => <Image
                                key={item.directus_files_id}
                                className="w-full aspect-[2] rounded-3xl object-cover"
                                width={900} height={0} src={getImageURL(item.directus_files_id)}
                                alt="Изображение из галереи"/>)}
                        </div>}
                </div>
            </div>
            <div id="blackWrapper">
                <Footer directions={directions}></Footer>
            </div>
        </>
    )
}
