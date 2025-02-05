import directus from "@/lib/directus";
import {readItems} from "@directus/sdk";
import Image from "next/image";
import {getImageURL} from "@/helpers/directus";
import Header from "@/components/header";
import Footer from "@/components/footer";

async function getDirections() {
    return directus.request(readItems('directions'));
}

async function getDirectionDetail(slug) {
    return directus.request(readItems('directions', {
        filter: {slug},
        fields: ['*', 'technologies.*', 'directions_technologies.*', 'gallery.*']
    }));
}
async function getTechnologies(ids) {
    return directus.request(readItems('directions_technologies', {
        filter: {
            id:
                {
                    '_in': ids
                }
        },
        fields: ['*']
    }));
}

export async function generateMetadata({ params, searchParams }, parent) {
    const slug = (await params).slug

    const [item] = await directus.request(readItems('directions', {
        filter: {slug},
        fields: ['*']
    }));

    return {
        title: item.title,
        description: item.seo || item.title,
    }
}
export default async function DirectionDetailPage({params}) {
    const directions = await getDirections();
    const {slug} = await params;
    const [detail] = await getDirectionDetail(slug);
    let technologies;
    if (detail.technologies && detail.technologies.length > 0) {
        technologies = await getTechnologies(detail.technologies.map(tech => tech.directions_technologies_id));
    }
    console.log('directions', directions);
    console.log('detail', detail);
    console.log('technologies', technologies);
    return (
        <>
            <Header directions={directions} withAnimation={true}></Header>
            <div className="relative h-[600px] xl:h-[750px]">
                <div className="h-full w-full absolute left-0 top-0 z-[1] dark-gradient">
                    <div className="h-full c-container flex flex-col justify-end">
                        <h1 className="font-roboto-condensed text-white font-[600] uppercase
                            text-[36px] leading-[40px] pr-[56px] pb-[64px]
                            md:pr-10 md:text-[50px] md:leading-[55px]
                            lg:pr-[110px] lg:pb-[80px] lg:text-[60px] lg:leading-[66px]
                            xl:text-[70px] xl:leading-[77px]
                            2xl:pr-0 2xl:pb-[90px] 2xl:text-[80px] 2xl:leading-[88px]
                        ">{detail.title}</h1>
                    </div>
                </div>
                <Image width={1320} height={0} className="w-full h-full object-cover"
                       src={getImageURL(detail.mainImage)}
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
                    {detail.mainText && <div className="font-inter
                        text-[22px] leading-[33px]
                        sm:text-[24px] sm:leading-[36px]
                        lg:text-[36px] lg:leading-[54px] lg:font-roboto
                        xl:text-[40px] xl:leading-[60px]
                        2xl:text-[48px] 2xl:leading-[72px]
                    ">{detail.mainText}</div>}
                    {detail.features && detail.features.length > 0 && <div className="grid
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
                    </div>}
                </div>
            </div>
            <div id="blackWrapper">
                <Footer directions={directions}></Footer>
            </div>
        </>
    )
}
