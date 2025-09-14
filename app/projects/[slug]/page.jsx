import directus from "@/lib/directus";
import {readItems} from "@directus/sdk";
import {getImageURL} from "@/helpers/directus";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {notFound} from "next/navigation";
import ProjectTopBlock from "@/components/projects/projectTopBlock";
import ProjectDetailContent from "@/components/projects/projectDetailContent";

async function getDirections() {
    return directus.request(readItems('directions'));
}

async function getProjectDetail(slug) {
    return directus.request(readItems('projects', {
        filter: {slug},
        fields: ['*', 'gallery.*',  'technologies.*', 'projects_technologies.*']
    })).catch(() => notFound());
}

async function getContacts() {
    return directus.request(readItems('contacts'));
}

async function getInformationMenu() {
    return directus.request(readItems('informationMenu'));
}


export async function generateMetadata({params, searchParams}, parent) {
    const slug = (await params).slug

    const [item] = await directus.request(readItems('projects', {
        filter: {slug},
        fields: ['*']
    })).catch(() => notFound());

    const {ogImage, siteName} = await directus.request(readItems('mainPage')).catch(() => notFound());
    const imageUrl = getImageURL(ogImage);

    return {
        title: item.title,
        description: item.metaDescription,
        robots: 'index, follow',
        keywords: item.keywords || '',
        openGraph: {
            title: item.title,
            description: item.metaDescription,
            siteName,
            images: [
                {
                    url: imageUrl,
                    secureUrl: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: siteName,
                },
            ]
        }
    }
}

async function getTechnologies(ids) {
    return directus.request(readItems('technologies', {
        filter: {
            id:
                {
                    '_in': ids
                }
        },
        fields: ['*', 'gallery.*']
    })).catch(() => notFound());
}

export default async function ProjectDetailPage({params}) {
    const directions = await getDirections();
    const contacts = await getContacts();
    const {slug} = await params;
    const [detail] = await getProjectDetail(slug);
    if (!detail) {
        notFound();
    }
    const menu = await getInformationMenu();

    let technologies;
    if (detail.technologies && detail.technologies.length > 0) {
        technologies = await getTechnologies(detail.technologies.map(tech => tech.technologies_id));
    }

    return (
        <>
            <Header contacts={contacts} directions={directions} withAnimation={true} menu={menu}></Header>
            <ProjectTopBlock detail={detail}/>
            <ProjectDetailContent detail={detail} technologies={technologies} />
            <div id="blackWrapper">
                <Footer contacts={contacts} directions={directions} menu={menu}></Footer>
            </div>
        </>
    )
}
