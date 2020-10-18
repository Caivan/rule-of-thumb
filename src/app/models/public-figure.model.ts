export class PublicFigure {
    name: string;
    publicationDate: Date;
    description: string;
    qtyLikes: number;
    qtyDislikes: number;
    imageUrl: string;

    likesPercentage (): number{
        return this.calculatePercentage (this.qtyLikes);
    }

    dislikesPercentage (): number {
        return this.calculatePercentage (this.qtyDislikes);
    }   

    private calculatePercentage (qtyBase): number{
        return qtyBase * 100 / (this.qtyLikes + this.qtyDislikes);
    }
}