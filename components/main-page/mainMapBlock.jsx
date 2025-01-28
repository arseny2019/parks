import Image from "next/image";
import Link from "next/link";

const MainMapBlock = ({}) => {

    return (
        <div className="radial-gradient border-b-[1px] border-[rgba(255,_255,_255,_0.06)]">
            <div className="c-container flex items-center justify-center map-background text-white
                h-[640px]
                sm:h-[700px]
                md:h-[580px]
                lg:h-[660px]
                xl:h-[860px]
                ">
                <div className="flex flex-col items-center justify-between max-w-[700px]
                        h-[420px]
                        md:h-[340px]
                        lg:h-[420px]
                        xl:h-[460px]
                    ">
                    <Image className="lg:w-[320px] lg:h-[65px]" width={246} height={50} src="logo-blue.svg"
                           alt="Общероссийская общественная организация Парки России"></Image>
                    <div className="flex flex-col items-center">
                        <p className="text-[16px] leading-6 font-inter text-center
                        lg:text-[18px] lg:leading-[27px]
                        xl:text-[20px] xl:leading-[30px]
                        ">Создание в городах точек
                            притяжения людей — пространств, направленных на социальную интеграцию,
                            развитие культурной и общественной жизни людей, повышение экономической ценности
                            городов.</p>
                        <Link
                            className="rounded-[28px] bg-white text-main-black mt-8 px-6 py-4 text-[16px] leading-6 font-[500]"
                            target="_blank" href="/">Перейти на сайт</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMapBlock;
