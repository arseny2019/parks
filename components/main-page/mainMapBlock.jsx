import Image from "next/image";
import Link from "next/link";

const MainMapBlock = ({}) => {

    return (
        <div className="radial-gradient border-b-[1px] border-[rgba(255,_255,_255,_0.06)]">
            <div className="c-container map-background text-white
                h-[640px] py-[110px]
                sm:py-[140px] sm:h-[700px]
                md:py-[120px] md:h-[580px]
                lg:h-[660px]
                xl:h-[860px]
                ">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center max-w-[700px]">
                        <Image className="lg:w-[320px] lg:h-[65px]" width={246} height={50} src="logo-blue.svg"
                               alt="Общероссийская общественная организация Парки России"></Image>
                        <p className="mt-[138px] text-[16px] leading-6 font-inter text-center
                        sm:mt-[186px]
                        md:mt-[130px]
                        lg:mt-[200px] lg:text-[18px] lg:leading-[27px]
                        xl:mt-[208px] xl:text-[20px] xl:leading-[30px]
                        ">Создание в городах точек
                            притяжения людей — пространств, направленных на социальную интеграцию,
                            развитие культурной и общественной жизни людей, повышение экономической ценности городов.</p>
                        <Link className="rounded-[28px] bg-white text-main-black mt-8 px-6 py-4 text-[16px] leading-6 font-[500]" target="_blank" href="/">Перейти на сайт</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMapBlock;
