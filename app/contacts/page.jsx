import directus from "@/lib/directus";
import {readItems} from "@directus/sdk";
import BlackHeader from "@/components/blackHeader";
import Footer from "@/components/footer";
import Link from "next/link";
import {formatPhone} from "@/helpers/formatPhone";

async function getDirections() {
    return directus.request(readItems('directions'));
}

async function getContactsData() {
    return directus.request(readItems('contacts'));
}

export default async function ContactsPage() {
    const directions = await getDirections();
    const detail = await getContactsData();
    console.log('contacts', detail);

    return (
        <>
            <BlackHeader directions={directions} contacts={detail}></BlackHeader>
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
                    <h1 className="uppercase">
                        Приветствую
                        <br/>Мы на связи
                    </h1>
                </div>
                <div className="grid grid-cols-1
                    mt-[100px] gap-y-[80px]
                    md:mt-[120px] md:gap-y-[120px]
                    xl:mt-[150px] xl:grid-cols-2 md:gap-x-[32px]
                ">
                    <div className="grid grid-cols-1
                        gap-y-6
                        md:gap-y-8
                    ">
                        <h6 className="text-placeholder-black font-[600] font-roboto uppercase
                            text-[14px] leading-[21px]
                            md:text-[16px] md:leading-[24px]
                            xl:text-[18px] xl:leading-[27px]
                        ">Контакты</h6>
                        <div>
                            <Link className="font-bold font-roboto
                                text-[28px] leading-[150%]
                                md:text-[36px]
                                xl:text-[40px]
                            " href={'tel:' + formatPhone(detail.phone)}>{detail.phone}</Link>
                        </div>
                        <div className="grid grid-cols-1 gap-y-[20px]">
                            <div>
                                <Link className="text-main-green font-bold font-roboto
                                text-[16px] leading-[150%]
                                md:text-[18px]
                            " href={'mailto:' + detail.email}>{detail.email}</Link>
                            </div>
                            <p className="font-roboto font-[400] text-[rgba(10,_10,_10,_0.7)]
                                text-[16px] leading-[150%]
                                md:text-[18px]
                            ">{detail.address}</p>
                        </div>
                        <div className="flex gap-x-4">
                            <Link className="icon-wrapper flex justify-center items-center text-white rounded-[50%] p-4 bg-[rgba(10,_10,_10,_1)] w-14 h-14 xl:w-16 xl:h-16"
                                  href={detail.vk}
                                  target="_blank">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     className="duration-200"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.5964 12.6902C18.2731 12.2819 18.3656 12.1002 18.5964 11.7352C18.6006 11.731 21.2698 8.04257 21.5448 6.79169L21.5465 6.79086C21.6832 6.33501 21.5465 6 20.8857 6H18.6989C18.1422 6 17.8856 6.28751 17.748 6.60919C17.748 6.60919 16.6347 9.27428 15.0596 11.0018C14.5513 11.501 14.3163 11.661 14.0388 11.661C13.9021 11.661 13.6896 11.501 13.6896 11.0452V6.79086C13.6896 6.24418 13.5337 6 13.0729 6H9.63443C9.28525 6 9.07775 6.25501 9.07775 6.49252C9.07775 7.01087 9.86527 7.13004 9.94694 8.58842V11.7527C9.94694 12.4461 9.8211 12.5736 9.54193 12.5736C8.79857 12.5736 6.99434 9.89764 5.92514 6.83503C5.7093 6.24084 5.49845 6.00083 4.9376 6.00083H2.75003C2.12584 6.00083 2 6.28834 2 6.61002C2 7.17837 2.74336 10.0043 5.45679 13.7378C7.26518 16.2862 9.81194 17.6671 12.1287 17.6671C13.5212 17.6671 13.6912 17.3604 13.6912 16.8329C13.6912 14.3978 13.5654 14.1678 14.2629 14.1678C14.5863 14.1678 15.143 14.3278 16.443 15.557C17.9289 17.0146 18.1731 17.6671 19.0048 17.6671H21.1915C21.8149 17.6671 22.1307 17.3604 21.949 16.7554C21.5332 15.4828 18.7231 12.8652 18.5964 12.6902Z"
                                        fill="currentColor"/>
                                </svg>
                            </Link>
                            <Link className="icon-wrapper flex justify-center items-center text-white rounded-[50%] p-4 bg-[rgba(10,_10,_10,_1)] w-14 h-14 xl:w-16 xl:h-16"
                                  href={detail.telegram}
                                  target="_blank">
                                <svg width="24" height="24" className="duration-200"
                                     viewBox="0 0 24 24"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.84784 14.9848L9.517 19.6382C9.99034 19.6382 10.1953 19.4349 10.4412 19.1907L12.6604 17.0698L17.2588 20.4374C18.1022 20.9074 18.6964 20.6599 18.9239 19.6615L21.9423 5.51787L21.9431 5.51704C22.2106 4.27034 21.4923 3.78283 20.6706 4.08867L2.9285 10.8813C1.71764 11.3513 1.73598 12.0264 2.72267 12.3322L7.25861 13.7431L17.7947 7.15041C18.2905 6.82207 18.7414 7.00374 18.3705 7.33208L9.84784 14.9848Z"
                                        fill="currentColor"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="blackWrapper">
                <Footer contacts={detail} directions={directions}></Footer>
            </div>
        </>
    )
}
