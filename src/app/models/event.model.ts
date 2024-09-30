import { LikeType } from "./like-type.type";

export class Event {
    locationEvent?: string;
    userHasLiked: boolean = false; // Indique si l'utilisateur a liké l'événement

    showCommentForm?: boolean = false;  // Pour contrôler l'affichage du formulaire de commentaire
    newComment?: string ='';        // Pour stocker le commentaire en cours de saisie
    comments?: string[] = [];   // Pour stocker les commentaires
    

    constructor (
        public idEvent: number,
        public titleEvent: string,
        public descriptionEvent: string,
        public imageUrl: string,
        public dateEventStart: Date,
        public likes: number,
        public isPaid: boolean) {
        
        this.isPaid=this.isPaid;
            
        
        }
      
    addLike(): void {
        this.likes++;
    }

    removeLike(): void {
        this.likes--;
    }

    like( LikeType: LikeType) {
        if (LikeType==='like') {
            this.addLike();
        } else if (LikeType==='unlike')
            this.removeLike();
    }
}