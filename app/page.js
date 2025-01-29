import directus from "@/lib/directus";
import {readItems} from "@directus/sdk";
import RootLayout from "@/app/layout";
import MainTopBlock from "@/components/main-page/mainTopBlock";
import MainDirectionsBlock from "@/components/main-page/mainDirectionsBlock";
import Header from "@/components/header";
import MainProjectsBlock from "@/components/main-page/mainProjectsBlock";
import MainNewsBlock from "@/components/main-page/mainNewsBlock";
import Footer from "@/components/footer";
import MainMapBlock from "@/components/main-page/mainMapBlock";
import {getImageURL} from "@/helpers/directus";

async function getDirections() {
    return directus.request(readItems('directions'));
}

async function getProjects() {
    return directus.request(readItems('projects', {limit: 3}));
}

async function getNews() {
    return directus.request(readItems('news', {limit: 3}));
}

async function getMainPageData() {
    return directus.request(readItems('mainPage'));
}

export default async function Home() {
    const projects = await getProjects();
    const directions = await getDirections();
    const data = await getMainPageData();
    const news = await getNews();
    console.log('mainPageData', data);
    console.log('directions', directions);
    console.log('news', news);
    console.log('projects', projects);
    return (
        <RootLayout>
            <Header directions={directions} withAnimation={true}></Header>
            <div className="md:fixed md:z-[-1] md:left-0 md:top-0 xl:min-h-[900px] h-[100vh] w-full">
                <MainTopBlock
                    topBlockImage={data.topBlockImage}
                    topBlockText={data.topBlockText}
                    topBlockVideo={data.topBlockVideo}
                ></MainTopBlock>
            </div>
            <div className="xl:min-h-[900px] md:h-[100vh]"></div>
            <div className="bg-white pb-[100px] md:pb-[120px] xl:pb-[200px]">
                <MainDirectionsBlock
                    directionsBlockText={data.directionsBlockText}
                    directions={directions}
                ></MainDirectionsBlock>
                <MainProjectsBlock projects={projects}></MainProjectsBlock>
                <MainNewsBlock news={news}></MainNewsBlock>
            </div>
            <div id="blackWrapper">
                <MainMapBlock></MainMapBlock>
                <Footer directions={directions}></Footer>
            </div>
        </RootLayout>
    );
}
