import image1 from "../assets/case-studies/chamak1.jpg";
import image2 from "../assets/case-studies/chamak2.jpg";
import image3 from "../assets/case-studies/random1.jpeg";
import image4 from "../assets/case-studies/random2.jpeg";


const caseStudyData = {

    "chamak": {
        name: "Chamak",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        images: [image1, image2],
        index: "01",
        tags: ["branding", "marketing"],
        link: "/case-studies/chamak"
    },
    "rufa-beauty": {
        name: "Rufa Beauty",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        images: [image3, image4],
        index: "02",
        tags: ["marketing", "advertising"],
        link: "/case-studies/rufa-beauty"
    },
    "transcon": {

        name: "Transcon",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        images: [image1, image2],
        index: "03",
        tags: ["development", "marketing"],
        link: "/case-studies/transcon"
    }
};

export default caseStudyData;