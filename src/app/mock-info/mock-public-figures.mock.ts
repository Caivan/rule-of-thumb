import { IPublicFigure } from '../models/public-figure.model';
export const CHARACTERS: IPublicFigure[] = [
    {
        id: 1,
        name: 'Kanye West', 
        publicationDate: new Date(),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus voluptates magni.",
        qtyLikes: 32,
        qtyDislikes: 18,
        imageUrl: '/assets/images/west-cut.jpg',
        category: 'Entertainment',
        wikiUrl: 'string',
        votingText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nisi quaerat quasi quam modi numquam eius odit praesentium ad? Ab asperiores exercitationem natus dolore! Vitae?',
        heroImageUrl: ''
    },
    {
        id: 2,
        name: "Mark Zuckenberg", 
        publicationDate: new Date (),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus voluptates magni.",
        qtyLikes: 18,
        qtyDislikes: 32,
        imageUrl: '/assets/images/mark.jpg',
        category: 'Business',
        wikiUrl: 'string',
        votingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem quidem quis, possimus ex laudantium, quasi cum deleniti impedit molestias ea nostrum, delectus provident nulla.',
        heroImageUrl: ''
    },
    {
        id: 3,
        name: "Cristina Fernandéz de Kirchner", 
        publicationDate: new Date (),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus voluptates magni.",
        qtyLikes: 200,
        qtyDislikes: 400,
        imageUrl: '/assets/images/kirchner.jpg',
        category: 'Politics',
        wikiUrl: 'string',
        votingText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nisi quaerat quasi quam modi numquam eius odit praesentium ad? Ab asperiores exercitationem natus dolore! Vitae?',
        heroImageUrl: ''

    },
    {
        id: 4,
        name: "Malala Yousafzai", 
        publicationDate: new Date (),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus voluptates magni.",
        qtyLikes: 200,
        qtyDislikes: 130,
        imageUrl: '/assets/images/malala.jpg',
        category: 'Activism',
        wikiUrl: 'string',
        votingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem quidem quis, possimus ex laudantium, quasi cum deleniti impedit molestias ea nostrum, delectus provident nulla.',
        heroImageUrl: ''
    }
];