'use client';
import Image from "next/image";
import {getImageURL} from "@/helpers/directus";
import {useEffect, useRef, useState} from "react";

const MainTopBlock = ({topBlockImage, topBlockText}) => {
    const imageUrl = getImageURL(topBlockImage);
    const blockRef = useRef(null);
    const [heightOnHide, setHeightOnHide] = useState(0);
    const [hideBlock, setHideBlock] = useState(false);
    useEffect(() => {
        if (blockRef && blockRef.current) {
            setHeightOnHide(blockRef.current.getBoundingClientRect().height);
        }

        document.addEventListener('scroll', () => {
            if (heightOnHide) {
                if (window.scrollY > heightOnHide) {
                    if (!hideBlock) {
                        setHideBlock(true);
                    }
                } else {
                    if (hideBlock) {
                        setHideBlock(false);
                    }
                }
            }
        });
    }, [blockRef, heightOnHide, hideBlock]);

    useEffect(() => {
        if (heightOnHide) {
            if (heightOnHide) {
                if (window.scrollY > heightOnHide) {
                    if (!hideBlock) {
                        setHideBlock(true);
                    }
                } else {
                    if (hideBlock) {
                        setHideBlock(false);
                    }
                }
            }
        }
    });

    useEffect(() => {
        if (blockRef && blockRef.current) {
            if (hideBlock) {
                blockRef.current.classList.add('opacity-0');
            } else {
                blockRef.current.classList.remove('opacity-0');
            }
        }

    },[hideBlock, blockRef])


    return (<div ref={blockRef} className="
        relative
        xl:min-h-[900px]
        h-[100vh]
    ">
        <div className="h-full w-full absolute left-0 top-0 z-[1] dark-gradient"></div>
        <Image alt="Красивая картинка" width={1360} height={0} className="absolute top-0 left-0 w-full h-full object-cover" src={imageUrl}/>
        <div className="uppercase absolute top-0 left-0 z-[2] w-full h-full flex flex-col-reverse
        2xl:pb-[120px] 2xl:max-w-[1680px] 2xl:left-[calc(50vw_-_840px)]
        xl:pb-[100px]
        lg:px-10 md:px-8 px-6 md:pb-[80px] pb-[48px]
        ">
            <div className="xl:max-w-[1360px] mx-auto text-white 2xl:pr-10 xl:pr-2" dangerouslySetInnerHTML={{__html: topBlockText}}></div>
        </div>
    </div>)
}

export default MainTopBlock;
