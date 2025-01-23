import Link from "next/link";
import Image from "next/image";
import {getImageURL} from "@/helpers/directus";

const MainProjectsBlock = ({projects}) => {

    return (
        <div className="c-container mt-[100px] md:mt-[120px] xl:mt-[150px] text-main-black">
            <h3 className="uppercase
            text-[28px] leading-[42px]
            md:text-[36px] md:leading-[54px]
            ">Проекты</h3>
            <div className="mt-6 grid grid-cols-1 gap-y-4
            md:gap-y-6
            lg:gap-y-8
            ">
                {projects && projects.map((project, index) => <Link href={'/projects/' + project.id}
                    className="block min-h-[360px] relative rounded-3xl overflow-hidden"
                    key={project.title + index}>
                    <Image width={1360} height={720} className="h-full w-full absolute left-0 top-0" src={getImageURL(project.image)} alt={project.title}></Image>
                    <div className="projects-gradient h-full w-full absolute top-0 left-0"></div>
                    <div className="absolute left-0 top-0 w-full h-full
                    py-8 px-6
                    xl:py-12 xl:px-10
                    ">
                        <h4 className="text-white
                        text-[36px] leading-[43px]
                        xl:text-[40px] xl:leading-[48px]
                        ">{project.title}</h4>
                        <div className="text-white
                        text-[18px] leading-[22px]
                        mt-6
                        md:max-w-[640px]
                        xl:text-[20px] xl:leading-[24px]
                        " dangerouslySetInnerHTML={{__html: project.description}}></div>
                    </div>
                </Link>)}
            </div>
            <Link className="block text-center w-full font-[500] bg-[rgba(10,_10,_10,_0.08)] duration-200 text-[rgba(10,_10,_10,_0.4)] hover:text-[rgba(10,_10,_10,_0.8)]
            mt-6 py-6 text-[18px] leading-6 rounded-[36px]
            lg:mt-8
            " href="/projects">
                Посмотреть все проекты
            </Link>
        </div>
    )
}

export default MainProjectsBlock;
