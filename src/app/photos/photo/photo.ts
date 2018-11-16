export interface Photo {//Usar 'rename simbol' clicando com o botão direito sobre a variável para trocar o nome dela em todo o projeto
    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComments: boolean;
    likes: number;
    comments: number;
    userId: number;
}