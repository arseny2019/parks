import directus from "@/lib/directus";
import {readItems} from "@directus/sdk";
import BlackHeader from "@/components/blackHeader";
import Footer from "@/components/footer";
import Image from "next/image";
import {getImageURL} from "@/helpers/directus";
import Link from "next/link";

async function getDirections() {
    return directus.request(readItems('directions'));
}

async function getPartners() {
    return directus.request(readItems('partners', {fields: ['*']}));
}

async function getContacts() {
    return directus.request(readItems('contacts'));
}

export default async function PartnersPage() {
    const directions = await getDirections();
    const contacts = await getContacts();
    const partners = await getPartners();
    const businessPartners = partners
        .filter(partner => partner.type === 'business');
    const governmentPartners = partners
        .filter(partner => partner.type === 'government');

    return (
        <>
            <BlackHeader contacts={contacts} directions={directions}></BlackHeader>
            <div className="c-container
                pb-[80px]
                md:pb-[120px]
                xl:pb-[150px]
                2xl:pb-[200px]
            ">
                <div className=" border-b-[1px] border-[rgba(10,_10,_10,_0.06)]
                    pt-[292px] pb-16
                    md:pt-[301px]
                    lg:pt-[284px] lg:pb-[80px]
                    xl:pt-[393px]
                    2xl:pt-[362px] 2xl:pb-[100px]
                ">
                    <h1 className="uppercase">Партнеры</h1>
                </div>
                {partners && partners.length > 0 && <div className="grid grid-cols-1 lg:gap-y-[120px]
                    mt-[100px] gap-y-[64px]
                    sm:gap-y-[80px]
                    md:mt-[120px] md:gap-y-[100px]
                    xl:mt-[150px] xl:md-gap-y-[120px]
                    2xl:mt-[200px]
                ">
                    {governmentPartners && governmentPartners.length > 0 && <div>
                        <h6 className="font-roboto font-[600] text-placeholder-black uppercase
                            text-[14px] leading-[21px]
                            md:text-[16px] md:leading-[24px]
                            xl:text-[18px] xl:leading-[27px]
                        ">Государство</h6>
                        <div className="grid
                            grid-cols-2 gap-4 mt-6
                            md:grid-cols-3 md:gap-6
                            lg:grid-cols-4
                        ">
                            {governmentPartners.map(partner => (
                                <div key={partner.title + 'government'} className="bg-main-gray rounded-3xl p-4">
                                    <Image
                                        className="object-contain aspect-[1.8] w-full"
                                        width={480} height={0} src={getImageURL(partner.image)}
                                        alt={partner.title}></Image>
                                </div>
                            ))}
                        </div>
                    </div>}
                    {businessPartners && businessPartners.length > 0 && <div>
                        <h6 className="font-roboto font-[600] text-placeholder-black uppercase
                            text-[14px] leading-[21px]
                            md:text-[16px] md:leading-[24px]
                            xl:text-[18px] xl:leading-[27px]
                        ">Бизнес</h6>
                        <div className="grid
                            grid-cols-2 gap-4 mt-6
                            md:grid-cols-3 md:gap-6
                            lg:grid-cols-4
                        ">
                            {businessPartners.map(partner => (<div key={partner.title + 'business'}>
                                    {!partner.link && <div className="bg-main-gray rounded-3xl p-4">
                                        <Image
                                            className="object-contain aspect-[1.8] w-full"
                                            width={480} height={0} src={getImageURL(partner.image)}
                                            alt={partner.title}></Image>
                                    </div>}
                                    {partner.link && <Link href={partner.link} target="_blank"
                                                           className="block bg-main-gray rounded-3xl p-4">
                                        <Image
                                            className="object-contain aspect-[1.8] w-full"
                                            width={480} height={0} src={getImageURL(partner.image)}
                                            alt={partner.title}></Image>
                                    </Link>}
                                </div>
                            ))}
                        </div>
                    </div>}
                </div>}
            </div>
            <div id="blackWrapper">
                <Footer contacts={contacts} directions={directions}></Footer>
            </div>
        </>
    )
}
