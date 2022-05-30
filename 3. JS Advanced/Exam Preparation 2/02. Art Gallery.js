class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        let ifHaveModel = false;
        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }

        for (const article of this.listOfArticles) {
            if (article.articleModel === articleModel && article.articleName === articleName) {
                article.quantity += Number(quantity);
                ifHaveModel = true;
                break;
            }
        }

        if (!ifHaveModel) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        for (let guest of this.guests) {
            if (guest.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`);
            }
        }

        let points = 50;
        if (personality === "Vip") {
            points = 500;
        } else if (personality === "Middle") {
            points = 250;
        }

        this.guests.push({ guestName, points, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let currentArticle;
        let currentGuest;
        let haveArticle = false;
        for (let article of this.listOfArticles) {
            if (article.articleModel !== articleModel || article.articleName !== articleName) {
                haveArticle = false
            } else {
                currentArticle = article;
                haveArticle = true;
                break;
            }
        }

        if (!haveArticle) {
            throw new Error("This article is not found.");
        }

        if (currentArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let isGuestHere = false;
        for (let guest of this.guests) {
            if (guest.guestName !== guestName) {
                isGuestHere = false
            } else {
                currentGuest = guest
                isGuestHere = true;
                break;
            }
        }

        if (!isGuestHere) {
            return "This guest is not invited.";
        }

        if (currentGuest.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article.";
        } else {
            currentArticle.quantity--;
            currentGuest.points -= this.possibleArticles[articleModel];
            currentGuest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria === "article") {
            let result = [];
            result.push(`Articles information:`);
            this.listOfArticles.forEach((e) => {
                result.push(`${e.articleModel} - ${e.articleName} - ${e.quantity}`);
            });

            return result.join("\n");
        } else if (criteria === "guest") {
            let result = [];
            result.push("Guests information:");
            this.guests.forEach((e) => {
                result.push(`${e.guestName} - ${e.purchaseArticle}`);
            });

            return result.join("\n");
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
