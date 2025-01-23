import Image from "next/image";
import Link from "next/link";

const Footer = ({directions}) => {

    return (
        <footer className="bg-main-black text-white pt-[100px] xl:pt-[120px]">
            <div className="c-container">
                <Image className="xl:hidden w-[135px] h-[40px] md:w-[142px] md:h-[42px]" width={135} height={40} src="logo.svg" alt="Парки России"></Image>
                <div className="lg:hidden mt-[100px] flex flex-col">
                    <Link className="duration-200 hover:text-secondary-white text-[22px] leading-[33px] font-bold"
                          href="tel: 88003332026">8 (800) 333 20
                        26</Link>
                    <Link className="duration-200 hover:text-white mt-5 text-secondary-white text-[16px] leading-6"
                          href="mailto:service@parkirussia.ru">service@parkirussia.ru</Link>
                    <div className="flex mt-8 gap-x-4">
                        <Link className="text-white rounded-[50%] p-4 bg-[#1B1B1B] w-14 h-14" href='https://vk.ru'
                              target="_blank">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 className="duration-200 hover:opacity-80"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.5964 12.6902C18.2731 12.2819 18.3656 12.1002 18.5964 11.7352C18.6006 11.731 21.2698 8.04257 21.5448 6.79169L21.5465 6.79086C21.6832 6.33501 21.5465 6 20.8857 6H18.6989C18.1422 6 17.8856 6.28751 17.748 6.60919C17.748 6.60919 16.6347 9.27428 15.0596 11.0018C14.5513 11.501 14.3163 11.661 14.0388 11.661C13.9021 11.661 13.6896 11.501 13.6896 11.0452V6.79086C13.6896 6.24418 13.5337 6 13.0729 6H9.63443C9.28525 6 9.07775 6.25501 9.07775 6.49252C9.07775 7.01087 9.86527 7.13004 9.94694 8.58842V11.7527C9.94694 12.4461 9.8211 12.5736 9.54193 12.5736C8.79857 12.5736 6.99434 9.89764 5.92514 6.83503C5.7093 6.24084 5.49845 6.00083 4.9376 6.00083H2.75003C2.12584 6.00083 2 6.28834 2 6.61002C2 7.17837 2.74336 10.0043 5.45679 13.7378C7.26518 16.2862 9.81194 17.6671 12.1287 17.6671C13.5212 17.6671 13.6912 17.3604 13.6912 16.8329C13.6912 14.3978 13.5654 14.1678 14.2629 14.1678C14.5863 14.1678 15.143 14.3278 16.443 15.557C17.9289 17.0146 18.1731 17.6671 19.0048 17.6671H21.1915C21.8149 17.6671 22.1307 17.3604 21.949 16.7554C21.5332 15.4828 18.7231 12.8652 18.5964 12.6902Z"
                                    fill="currentColor"/>
                            </svg>
                        </Link>
                        <Link className="rounded-[50%] p-4 bg-[#1B1B1B] w-14 h-14" href='https://vk.ru' target="_blank">
                            <svg width="24" height="24" className="duration-200 hover:opacity-80" viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.84784 14.9848L9.517 19.6382C9.99034 19.6382 10.1953 19.4349 10.4412 19.1907L12.6604 17.0698L17.2588 20.4374C18.1022 20.9074 18.6964 20.6599 18.9239 19.6615L21.9423 5.51787L21.9431 5.51704C22.2106 4.27034 21.4923 3.78283 20.6706 4.08867L2.9285 10.8813C1.71764 11.3513 1.73598 12.0264 2.72267 12.3322L7.25861 13.7431L17.7947 7.15041C18.2905 6.82207 18.7414 7.00374 18.3705 7.33208L9.84784 14.9848Z"
                                    fill="currentColor"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="mt-[80px] pb-20 md:pb-[100px]
                lg:flex lg:justify-between lg:items-start
                xl:block xl:mt-0
                ">
                    <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-8 xl:grid-cols-4">
                        <Image className="hidden xl:inline-block w-[135px] h-[40px] md:w-[142px] md:h-[42px]"
                               width={135} height={40} src="logo.svg" alt="Парки России"></Image>
                        <div className="pr-5">
                            <p className="pr-5 font-[500] text-[12px] leading-[18px] md:text-[13px] md:leading-[19px]
                            text-placeholder-white uppercase">Направления</p>
                            <div className="mt-6 flex flex-col gap-y-5 items-start">
                                {directions.map((direction, index) => (<Link
                                    className="
                                text-[14px] leading-[21px]
                                md:text-[16px] md:leading-[24px]
                                text-secondary-white hover:text-white duration-200"
                                    href={'/directions/' + direction.id}
                                    key={index + direction.title + direction.id}>
                                    {direction.title}
                                </Link>))}
                            </div>
                        </div>
                        <div className="pr-5">
                            <p className="font-[500] text-[12px] leading-[18px] md:text-[13px] md:leading-[19px]
                            text-placeholder-white uppercase">Информация</p>
                            <div className="mt-6 flex flex-col gap-y-5 items-start">
                                <Link
                                    className="
                            text-[14px] leading-[21px]
                            md:text-[16px] md:leading-[24px]
                            text-secondary-white hover:text-white duration-200"
                                    href={'/news/'}>Новости</Link>
                                <Link
                                    className="
                            text-[14px] leading-[21px]
                            md:text-[16px] md:leading-[24px]
                            text-secondary-white hover:text-white duration-200"
                                    href={'/partners/'}>Партнеры</Link>
                                <Link
                                    className="
                            text-[14px] leading-[21px]
                            md:text-[16px] md:leading-[24px]
                            text-secondary-white hover:text-white duration-200"
                                    href={'/contacts/'}>Контакты</Link>
                            </div>
                        </div>
                        <div className="hidden xl:flex xl:flex-col">
                            <Link
                                className="duration-200 hover:text-secondary-white text-[22px] leading-[33px] font-bold"
                                href="tel: 88003332026">8 (800) 333 20
                                26</Link>
                            <Link
                                className="duration-200 hover:text-white mt-5 text-secondary-white text-[16px] leading-6"
                                href="mailto:service@parkirussia.ru">service@parkirussia.ru</Link>
                            <div className="flex mt-8 gap-x-4">
                                <Link className="text-white rounded-[50%] p-4 bg-[#1B1B1B] w-14 h-14"
                                      href='https://vk.ru'
                                      target="_blank">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         className="duration-200 hover:opacity-80"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.5964 12.6902C18.2731 12.2819 18.3656 12.1002 18.5964 11.7352C18.6006 11.731 21.2698 8.04257 21.5448 6.79169L21.5465 6.79086C21.6832 6.33501 21.5465 6 20.8857 6H18.6989C18.1422 6 17.8856 6.28751 17.748 6.60919C17.748 6.60919 16.6347 9.27428 15.0596 11.0018C14.5513 11.501 14.3163 11.661 14.0388 11.661C13.9021 11.661 13.6896 11.501 13.6896 11.0452V6.79086C13.6896 6.24418 13.5337 6 13.0729 6H9.63443C9.28525 6 9.07775 6.25501 9.07775 6.49252C9.07775 7.01087 9.86527 7.13004 9.94694 8.58842V11.7527C9.94694 12.4461 9.8211 12.5736 9.54193 12.5736C8.79857 12.5736 6.99434 9.89764 5.92514 6.83503C5.7093 6.24084 5.49845 6.00083 4.9376 6.00083H2.75003C2.12584 6.00083 2 6.28834 2 6.61002C2 7.17837 2.74336 10.0043 5.45679 13.7378C7.26518 16.2862 9.81194 17.6671 12.1287 17.6671C13.5212 17.6671 13.6912 17.3604 13.6912 16.8329C13.6912 14.3978 13.5654 14.1678 14.2629 14.1678C14.5863 14.1678 15.143 14.3278 16.443 15.557C17.9289 17.0146 18.1731 17.6671 19.0048 17.6671H21.1915C21.8149 17.6671 22.1307 17.3604 21.949 16.7554C21.5332 15.4828 18.7231 12.8652 18.5964 12.6902Z"
                                            fill="currentColor"/>
                                    </svg>
                                </Link>
                                <Link className="rounded-[50%] p-4 bg-[#1B1B1B] w-14 h-14" href='https://vk.ru'
                                      target="_blank">
                                    <svg width="24" height="24" className="duration-200 hover:opacity-80"
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
                    <div className="hidden lg:flex lg:flex-col xl:hidden">
                        <Link className="duration-200 hover:text-secondary-white text-[22px] leading-[33px] font-bold"
                              href="tel: 88003332026">8 (800) 333 20
                            26</Link>
                        <Link className="duration-200 hover:text-white mt-5 text-secondary-white text-[16px] leading-6"
                              href="mailto:service@parkirussia.ru">service@parkirussia.ru</Link>
                        <div className="flex mt-8 gap-x-4">
                            <Link className="text-white rounded-[50%] p-4 bg-[#1B1B1B] w-14 h-14" href='https://vk.ru'
                                  target="_blank">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     className="duration-200 hover:opacity-80"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.5964 12.6902C18.2731 12.2819 18.3656 12.1002 18.5964 11.7352C18.6006 11.731 21.2698 8.04257 21.5448 6.79169L21.5465 6.79086C21.6832 6.33501 21.5465 6 20.8857 6H18.6989C18.1422 6 17.8856 6.28751 17.748 6.60919C17.748 6.60919 16.6347 9.27428 15.0596 11.0018C14.5513 11.501 14.3163 11.661 14.0388 11.661C13.9021 11.661 13.6896 11.501 13.6896 11.0452V6.79086C13.6896 6.24418 13.5337 6 13.0729 6H9.63443C9.28525 6 9.07775 6.25501 9.07775 6.49252C9.07775 7.01087 9.86527 7.13004 9.94694 8.58842V11.7527C9.94694 12.4461 9.8211 12.5736 9.54193 12.5736C8.79857 12.5736 6.99434 9.89764 5.92514 6.83503C5.7093 6.24084 5.49845 6.00083 4.9376 6.00083H2.75003C2.12584 6.00083 2 6.28834 2 6.61002C2 7.17837 2.74336 10.0043 5.45679 13.7378C7.26518 16.2862 9.81194 17.6671 12.1287 17.6671C13.5212 17.6671 13.6912 17.3604 13.6912 16.8329C13.6912 14.3978 13.5654 14.1678 14.2629 14.1678C14.5863 14.1678 15.143 14.3278 16.443 15.557C17.9289 17.0146 18.1731 17.6671 19.0048 17.6671H21.1915C21.8149 17.6671 22.1307 17.3604 21.949 16.7554C21.5332 15.4828 18.7231 12.8652 18.5964 12.6902Z"
                                        fill="currentColor"/>
                                </svg>
                            </Link>
                            <Link className="rounded-[50%] p-4 bg-[#1B1B1B] w-14 h-14" href='https://vk.ru'
                                  target="_blank">
                                <svg width="24" height="24" className="duration-200 hover:opacity-80"
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
                <div className="py-16 md:flex md:justify-between md:items-center">
                    <p className="font-inter text-[12px] leading-6 text-placeholder-white">
                        © АНО «Центр развития общественных пространств и парков»
                    </p>
                    <div className="mt-12 md:mt-0 flex flex-col">
                        <Image width={92} height={13.5} className="w-[92px] h-[13.5px]" src="notbadlab.svg"
                               alt="NotBadLab"></Image>
                        <p className="text-[10px] leading-[15px] font-[600] text-placeholder-white uppercase mt-[3px]">Разработка</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
