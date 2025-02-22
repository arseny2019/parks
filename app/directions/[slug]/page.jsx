import directus from "@/lib/directus";
import {readItems} from "@directus/sdk";
import Image from "next/image";
import {getImageURL} from "@/helpers/directus";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TechnologyGrid from "@/components/directions/technologyGrid";
import Link from "next/link";

async function getDirections() {
    return directus.request(readItems('directions'));
}

async function getContacts() {
    return directus.request(readItems('contacts'));
}

async function getDirectionDetail(slug) {
    return directus.request(readItems('directions', {
        filter: {slug},
        fields: ['*', 'technologies.*', 'directions_technologies.*', 'gallery.*']
    }));
}

async function getTechnologies(ids) {
    return directus.request(readItems('technologies', {
        filter: {
            id:
                {
                    '_in': ids
                }
        },
        fields: ['*', 'gallery.*']
    }));
}

export async function generateMetadata({params, searchParams}, parent) {
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
    const contacts = await getContacts();
    const {slug} = await params;
    const [detail] = await getDirectionDetail(slug);
    let technologies;
    if (detail.technologies && detail.technologies.length > 0) {
        technologies = await getTechnologies(detail.technologies.map(tech => tech.technologies_id));
    }
    return (
        <>
            <Header contacts={contacts} directions={directions} withAnimation={true}></Header>
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
                    {detail.content && <h2 className="font-[400] font-roboto leading-[150%]
                        text-[22px]
                        md:text-[24px]
                        lg:text-[28px]
                        xl:text-[36px]
                    ">{detail.content}</h2>}
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
                                {feature.link && <Link
                                    className="font-roboto font-[600] text-main-green
                                        text-[16px] leading-6
                                        md:text-[18px] md:leading-[27px]
                                    "
                                    href={feature.link}>Подробнее</Link>}
                            </div>
                        ))}
                    </div>}
                    {detail.gallery && detail.gallery.length > 0 &&
                        <div className="grid grid-cols-1 gap-y-8 md:gap-y-10">
                            {detail.gallery.map(item => <Image
                                key={item.directus_files_id}
                                className="w-full aspect-[2] rounded-3xl object-cover"
                                width={900} height={0} src={getImageURL(item.directus_files_id)}
                                alt="Изображение из галереи"/>)}
                        </div>}
                    {technologies && technologies.length > 0 &&
                        <TechnologyGrid technologies_title={detail.technologies_title} technologies={technologies}></TechnologyGrid>}
                </div>
            </div>
            <div id="blackWrapper">
                <Footer contacts={contacts} directions={directions}></Footer>
            </div>
        </>
    )
}
