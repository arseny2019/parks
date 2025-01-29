'use client';
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import Navigation from "@/components/navigation";

const Header = ({withAnimation, directions}) => {
    const [burgerActive, setBurgerActive] = useState(false);
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const blackCircleRef = useRef(null);
    const headerInnerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [heightOnAnimate, setHeightOnAnimate] = useState(0);
    const [heightOnHide, setHeightOnHide] = useState(0);
    const [activeHeader, setActiveHeader] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);

    useEffect(() => {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);

        if (containerRef.current && headerRef.current) {
            setHeightOnAnimate(containerRef.current.getBoundingClientRect().height - headerHeight);
        }

        document.addEventListener('scroll', () => {
            if (heightOnAnimate) {
                if (window.scrollY > heightOnAnimate - 70) {
                    if (!activeHeader) {
                        setActiveHeader(true);
                    }
                } else {
                    setActiveHeader(false);
                }
            }

            if (heightOnHide) {
                if (window.scrollY > heightOnHide - headerHeight) {
                    headerRef.current.classList.add('opacity-0', 'invisible');
                } else {
                    headerRef.current.classList.remove('opacity-0', 'invisible');
                }
            }
        });

    }, [containerRef, withAnimation, heightOnAnimate]);

    useEffect(() => {
        if (heightOnAnimate) {
            if (window.scrollY > heightOnAnimate - 70) {
                if (!activeHeader) {
                    setActiveHeader(true);
                }
            } else {
                if (activeHeader) {
                    setActiveHeader(false);
                }
            }
        }
    });

    useEffect(() => {
        console.log('header change', activeHeader);
    }, [activeHeader])

    useEffect(() => {
        if (headerInnerRef && headerInnerRef.current) {
            if (activeHeader) {
                headerInnerRef.current.parentNode.classList.add('backdrop-blur-[50px]', 'bg-[rgba(255,_255,_255,_0.6)]');
            } else {
                headerInnerRef.current.parentNode.classList.remove('backdrop-blur-[50px]', 'bg-[rgba(255,_255,_255,_0.6)]');
            }
        }

    }, [activeHeader, headerInnerRef, activeMenu]);

    useEffect(() => {
        if (burgerActive && blackCircleRef) {
            setActiveMenu(true);
            blackCircleRef.current.classList.remove('scale-0', 'delay-300');
        } else if (!burgerActive && blackCircleRef) {
            setActiveMenu(false);
            blackCircleRef.current.classList.add('scale-0', 'delay-300');
        }
    }, [burgerActive, blackCircleRef]);

    useEffect(() => {
        const blackWrapper = document.querySelector('#blackWrapper');
        if (blackWrapper.offsetTop) {
            setHeightOnHide(blackWrapper.offsetTop);
        }

        function calculateScrollbarWidth() {
            const scrollDiv = document.createElement('div');
            scrollDiv.style.overflowY = 'scroll';
            scrollDiv.style.width = '50px';
            scrollDiv.style.height = '50px';
            document.body.appendChild(scrollDiv);
            const scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            console.log('scroll width', scrollWidth);
            document.documentElement.style.setProperty('--scrollbar-width', scrollWidth + 'px');
        }

        calculateScrollbarWidth();
    }, []);

    useEffect(() => {
        if (!document.body) return;

        if (activeMenu) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [activeMenu]);

    return (
        <>
            {withAnimation && <div ref={containerRef}
                                   className="absolute left-0 top-0 -z-[1] xl:min-h-[900px] h-[100vh] w-full"></div>}
            <header ref={headerRef} className="duration-300 w-full fixed top-0 left-0 z-10">
                <div ref={blackCircleRef} className="absolute right-0 top-0 scale-0 z-10 origin-center
                translate-x-[50%] translate-y-[-50%] duration-500 bg-main-black w-[max(400vh,_400vw)] h-[max(400vh,_400vw)] rounded-[50%]"></div>
                <Navigation closeCallback={() => setBurgerActive(false)} active={activeMenu} directions={directions}></Navigation>
                <div className="absolute left-0 top-0 w-full">
                    <div ref={headerInnerRef} className="mx-auto flex justify-between items-center duration-200
                    2xl:max-w-[1680px] 2xl:pl-[120px] 2xl:pr-[120px]
                    lg:pr-10 lg:pl-10
                    md:pr-6
                    pl-6 pt-8 pr-4 pb-4
                    ">
                        <div
                            className={!activeHeader || activeMenu ? 'text-white flex items-end' : 'text-main-black flex items-end'}>
                            <Image width={40} height={40} src={'logo-left.svg'}
                                   className="h-[40px] w-[40px] md:h-[42px] md:w-[42px]" alt="Logo"></Image>
                            <div className="ml-[15px]">
                                <svg className={!activeHeader || activeMenu ?
                                    "duration-500 h-[31px] w-[80px] md:h-[32.5px] md:w-[84px]" :
                                    "duration-500 h-[31px] w-[80px] md:h-[32.5px] md:w-[84px]"
                                } width="81"
                                     height="32" viewBox="0 0 81 32" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M30.5572 7.01616H32.9945C33.2246 7.01616 33.4338 6.95266 33.6222 6.82505C33.8097 6.69805 33.9645 6.50089 34.0858 6.23389C34.2067 5.96748 34.2678 5.64575 34.2678 5.26988C34.2678 4.85773 34.201 4.52148 34.0673 4.26052C33.9337 3.99986 33.7613 3.80875 33.5494 3.6875C33.3368 3.56654 33.1154 3.50576 32.885 3.50576H30.5572V7.01616ZM27.5742 13.8008V0.886501H33.0852C33.7039 0.886501 34.2678 1.01381 34.7767 1.26841C35.2863 1.52302 35.7317 1.85686 36.1139 2.26901C36.4958 2.68116 36.7894 3.14804 36.9959 3.66935C37.2022 4.19097 37.305 4.72438 37.305 5.26988C37.305 5.99742 37.1323 6.69805 36.787 7.37086C36.4411 8.04397 35.9621 8.58947 35.3501 9.00797C34.7374 9.42617 34.019 9.63542 33.1944 9.63542H30.5572V13.8008H27.5742Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M39.8711 13.8008V0.886803H42.836V5.87042H43.8729L47.4746 0.886803H50.7666L46.1465 7.14346L51.1486 13.8008H47.5471L43.7821 8.5807H42.836V13.8008H39.8711Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M53.6924 13.8008V0.886803H56.6939V9.56285L62.2414 0.886803H65.0421V13.8008H62.0412V5.17917L56.5481 13.8008H53.6924Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M3.22131 25.1216H5.65854C5.88896 25.1216 6.09791 25.0581 6.28629 24.9305C6.47377 24.8032 6.62859 24.6064 6.74985 24.3394C6.8708 24.073 6.93158 23.7512 6.93158 23.3753C6.93158 22.9632 6.86506 22.6266 6.7314 22.3657C6.59805 22.1053 6.42539 21.9142 6.21342 21.793C6.00084 21.6717 5.77949 21.6109 5.54938 21.6109H3.22131V25.1216ZM0.238281 31.9062V18.992H5.74925C6.36794 18.992 6.93158 19.119 7.4411 19.3739C7.95032 19.6285 8.39573 19.9623 8.77795 20.3742C9.15986 20.7866 9.45378 21.2535 9.66 21.7745C9.86623 22.2964 9.96935 22.8298 9.96935 23.3753C9.96935 24.1029 9.79638 24.8032 9.45106 25.4763C9.10513 26.1491 8.62615 26.6946 8.01412 27.1134C7.40149 27.5316 6.68302 27.7406 5.85872 27.7406H3.22131V31.9062H0.238281Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M14.7498 25.4479C14.7498 25.9454 14.8254 26.4274 14.9769 26.8939C15.1284 27.3611 15.3467 27.7763 15.6318 28.1401C15.9167 28.5038 16.2681 28.795 16.6869 29.0131C17.1054 29.2314 17.5992 29.3402 18.1695 29.3402C18.7268 29.3402 19.2178 29.2284 19.6424 29.004C20.0669 28.7799 20.4186 28.4766 20.6974 28.0944C20.9762 27.7125 21.1855 27.2913 21.3249 26.8304C21.4643 26.3696 21.5341 25.8967 21.5341 25.4113C21.5341 24.9145 21.4582 24.4355 21.3067 23.9747C21.1552 23.5139 20.9369 23.0987 20.6521 22.7289C20.3669 22.3591 20.0122 22.0712 19.588 21.8647C19.1634 21.659 18.6844 21.5553 18.151 21.5553C17.5807 21.5553 17.0839 21.6648 16.6594 21.8828C16.2351 22.1014 15.8834 22.3987 15.6046 22.7742C15.3255 23.1501 15.1136 23.5653 14.9681 24.0201C14.8224 24.4749 14.7498 24.9508 14.7498 25.4479ZM18.1147 31.9961C17.1689 31.9961 16.3047 31.8113 15.5227 31.4412C14.7404 31.0717 14.0643 30.5746 13.4946 29.9499C12.9243 29.3251 12.4879 28.6221 12.185 27.8398C11.882 27.0578 11.7305 26.2483 11.7305 25.4113C11.7305 24.5508 11.8907 23.7322 12.2122 22.956C12.5336 22.1804 12.982 21.4861 13.5581 20.8737C14.1341 20.2614 14.816 19.7791 15.6046 19.4274C16.3926 19.0761 17.2532 18.9001 18.1876 18.9001C19.145 18.9001 20.0155 19.0848 20.7975 19.4547C21.5795 19.8248 22.2526 20.3249 22.8165 20.9554C23.3802 21.5862 23.8138 22.2922 24.1171 23.0742C24.4198 23.8565 24.5719 24.6542 24.5719 25.4661C24.5719 26.3276 24.414 27.1458 24.0989 27.9214C23.7836 28.698 23.3348 29.3923 22.753 30.0043C22.1709 30.6169 21.4888 31.1019 20.7065 31.4594C19.9242 31.8171 19.0606 31.9961 18.1147 31.9961Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M26.4668 25.3206C26.4668 24.5444 26.6092 23.7776 26.8941 23.0195C27.1789 22.262 27.6035 21.5707 28.1674 20.9463C28.7311 20.3216 29.4135 19.8248 30.2137 19.4547C31.0141 19.0845 31.9173 18.8998 32.9239 18.8998C34.1362 18.8998 35.1885 19.1607 36.0796 19.682C36.9708 20.2037 37.6405 20.8822 38.0896 21.7192L35.7797 23.3382C35.5976 22.8771 35.3457 22.5166 35.0249 22.2557C34.7032 21.9953 34.3518 21.813 33.9696 21.7098C33.5877 21.607 33.2148 21.5553 32.8511 21.5553C32.2935 21.5553 31.8021 21.6675 31.3775 21.8919C30.9533 22.1166 30.6016 22.4165 30.3228 22.7924C30.0437 23.1683 29.8345 23.5868 29.6954 24.0473C29.5557 24.5084 29.4861 24.9632 29.4861 25.4113C29.4861 25.933 29.5681 26.4301 29.7317 26.903C29.8952 27.3759 30.1257 27.7941 30.4229 28.1579C30.7199 28.5217 31.0776 28.8099 31.4958 29.0221C31.9143 29.2344 32.3839 29.3399 32.9058 29.3399C33.2696 29.3399 33.6394 29.2828 34.0152 29.1676C34.3908 29.0524 34.7395 28.8613 35.0612 28.5949C35.382 28.3279 35.6276 27.9762 35.7975 27.5395L38.2532 28.9946C37.9865 29.6254 37.5619 30.1651 36.9801 30.6136C36.398 31.0623 35.7431 31.4049 35.0155 31.6414C34.288 31.8779 33.5605 31.9961 32.8329 31.9961C31.8992 31.9961 31.0443 31.805 30.2681 31.4231C29.4922 31.0409 28.8191 30.5319 28.2494 29.8948C27.6791 29.2583 27.2397 28.5432 26.9304 27.7488C26.6216 26.9544 26.4668 26.1452 26.4668 25.3206Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M39.7051 25.3206C39.7051 24.5444 39.8475 23.7776 40.1323 23.0195C40.4172 22.262 40.8417 21.5707 41.4057 20.9463C41.9693 20.3216 42.6518 19.8248 43.4519 19.4547C44.2524 19.0845 45.1556 18.8998 46.1622 18.8998C47.3745 18.8998 48.4268 19.1607 49.3179 19.682C50.209 20.2037 50.8791 20.8822 51.3282 21.7192L49.0179 23.3382C48.8359 22.8771 48.584 22.5166 48.2632 22.2557C47.9418 21.9953 47.5901 21.813 47.2079 21.7098C46.8263 21.607 46.4531 21.5553 46.0893 21.5553C45.5317 21.5553 45.0407 21.6675 44.6161 21.8919C44.1916 22.1166 43.8399 22.4165 43.5611 22.7924C43.282 23.1683 43.0727 23.5868 42.9336 24.0473C42.7942 24.5084 42.7244 24.9632 42.7244 25.4113C42.7244 25.933 42.8063 26.4301 42.9699 26.903C43.1335 27.3759 43.3639 27.7941 43.6612 28.1579C43.9581 28.5217 44.3159 28.8099 44.7344 29.0221C45.1526 29.2344 45.6222 29.3399 46.1441 29.3399C46.5078 29.3399 46.8777 29.2828 47.2535 29.1676C47.6294 29.0524 47.9777 28.8613 48.2995 28.5949C48.6203 28.3279 48.8658 27.9762 49.0361 27.5395L51.4918 28.9946C51.2248 29.6254 50.8002 30.1651 50.2187 30.6136C49.6363 31.0623 48.9817 31.4049 48.2538 31.6414C47.5266 31.8779 46.799 31.9961 46.0715 31.9961C45.1374 31.9961 44.2829 31.805 43.5064 31.4231C42.7304 31.0409 42.0573 30.5319 41.4876 29.8948C40.9176 29.2583 40.4783 28.5432 40.1686 27.7488C39.8599 26.9544 39.7051 26.1452 39.7051 25.3206Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M53.9463 31.9062V18.992H56.9475V27.6683L62.495 18.992H65.296V31.9062H62.2952V23.2846L56.802 31.9062H53.9463Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M68.8262 31.9062V18.992H71.8273V27.6683L77.3749 18.992H80.1759V31.9062H77.175V23.2846L71.6819 31.9062H68.8262Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M0.288086 13.8008V0.886802H11.0379V13.8008H8.05486V3.50576H3.27112V13.8008H0.288086Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M20.8602 8.87159L19.3513 3.88768L17.8336 8.87159H20.8602ZM17.7326 0.886802H20.934L25.4087 13.8008H22.3528L21.4774 10.9088H17.2131L16.332 13.8008H13.2764L17.7326 0.886802Z"
                                        fill="currentColor"/>
                                </svg>

                            </div>
                        </div>

                        <div className={!activeHeader || activeMenu ? 'text-white' : 'text-main-black'}>
                            <div onClick={() => setBurgerActive(!burgerActive)}
                                 className="cursor-pointer relative burger-container flex justify-center items-center w-10 h-10">
                    <span className="burger">
                        <span className="burger-line"></span>
                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
