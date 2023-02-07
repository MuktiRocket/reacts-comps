import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: 1,
            label:'can i use React on a project',
            content:'you ban use React on any project you want.you ban use React on any project you want.you ban use React on any project you want.you ban use React on any project you want.you ban use React on any project you want.'
        },
        {
            id: 2,
            label:'can i use React on a project',
            content:'you ban use React on any project you want.you ban use React on any project you want.you ban use React on any project you want.you ban use React on any project you want.you ban use React on any project you want.'
        },
        {
            id: 3,
            label:'can i use React on a project',
            content:'you ban use React on any project you want.you ban use React on any project you want.you ban use React on any project you want.you ban use React on any project you want.you ban use React on any project you want.'
        }
    ];
    return <Accordion items={items}/>; 
}

export default AccordionPage;