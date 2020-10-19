export interface IPublicFigure {
    _id: number;
    name: string;
    publicationDate: Date;
    endVotingDate: Date; 
    description: string;
    qtyLikes: number;
    qtyDislikes: number;
    image: string;
    category: string;
    wikiUrl: string;
    votingText: string;
    heroImage: string;
}