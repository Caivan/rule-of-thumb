export interface IPublicFigure {
    id: number;
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
/*
export class PublicFigure implements IPublicFigure {
    id: number;
    name: string;
    publicationDate: Date;
    endVotingDate: Date; 
    description: string;
    qtyLikes: number;
    qtyDislikes: number;
    imageUrl: string;
    category: string;
    wikiUrl: string;
    votingText: string;
    heroImageUrl: string;

    constructor(
        name: string,
        publicationDate: Date,
        description: string,
        qtyLikes: number,
        qtyDislikes: number,
        imageUrl: string,
        category: string
    ) {
        this.name = name;
        this.publicationDate = publicationDate;
        this.description = description;
        this.qtyLikes = qtyLikes;
        this.qtyDislikes = qtyDislikes;
        this.imageUrl = imageUrl;
        this.category = category;
    }

    likesPercentage(): number {
        return this.calculatePercentage(this.qtyLikes);
    }

    dislikesPercentage(): number {
        return this.calculatePercentage(this.qtyDislikes);
    }

    private calculatePercentage(qtyBase): number {
        return (qtyBase * 100) / (this.qtyLikes + this.qtyDislikes);
    }
}
*/