function solveClasses() {

    class Article {
        constructor(title, content) {
            this.title = title,
            this.content = content
        }
        toString = function() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content),
            this.origitnalResearches = originalResearch,
            this.comments = []

            if (content.length >= 150) {
                return "Short reports content should be less then 150 symbols."
            } else if (!title || !content){
                return "The original research should have author and title."
            }
        }
        addComment = function(text) {
            this.comments.push(text);
            return "The comment is added."
        }

        toString = function() {
            let result = `Title: ${this.title}\nContent: ${this.content}\n`;
            result += `Original Research: ${this.origitnalResearches.title} by ${this.origitnalResearches.author}\n`;
            if (this.comments.length > 0) {
                this.comments.forEach(x => {
                    result += x + '\n';
                });
            };
            return result
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content),
            this.book = book,
            this.clients = []
        }
        addClient = function(clientName, orderDescription) {
            let validate = this.clients.some(x => x.clientName == clientName);
            if (!validate) {
                this.clients.push({clientName: orderDescription});
                return `${clientName} has ordered a review for ${this.book.name}`;
            } else {
                return "This client has already ordered this review.";
            }

        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}

let classes = solveClasses();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString()); 

let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript\"s features are executed in C++ — the underlying language.")
console.log(short.toString()); 

let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString()); 
