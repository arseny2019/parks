import directus from "@/lib/directus";
import {aggregate, readItems} from "@directus/sdk";
import BlackHeader from "@/components/blackHeader";
import Footer from "@/components/footer";
import {formatDate} from "@/helpers/formatDate";
import NewsDetail from "@/components/news/newsDetail";

async function getDirections() {
    return directus.request(readItems('directions'));
}

async function getNewsDetail(slug) {
    return directus.request(readItems('news', {
        filter: {slug},
        fields: ['*']
    }));
}

async function getNextNews(date) {
    return directus.request(readItems('news', {
        filter: {
            date: { "_lt": date }
        },
        sort: ['-date'],
        limit: 1,
        fields: ['*']
    }));
}


const NewsDetailPage = async ({params}) => {
    const pars = await params;
    const directions = await getDirections();
    const [detail] = await getNewsDetail(pars.slug);
    const res = await getNextNews(detail.date);
    console.log('detail', detail);

    return(
        <>
            <BlackHeader directions={directions}></BlackHeader>
            <NewsDetail detail={detail} previousNews={res[0] || false}/>
            <div id="blackWrapper">
                <Footer directions={directions}></Footer>
            </div>
        </>
    )
}

export default NewsDetailPage;
